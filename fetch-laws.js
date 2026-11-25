#!/usr/bin/env node
/**
 * fetch-laws.js
 * Pobiera i aktualizuje lokalną bazę aktów prawnych ze źródła Sejm API (ELI API)
 * — https://api.sejm.gov.pl
 *
 * Dla każdego aktu z config.json:
 *  - pobiera aktualne metadane (status, data ostatniej zmiany)
 *  - WERYFIKUJE TYTUŁ (KROK 2B wg PRAWO-HARDGATE) — jeśli tytuł nie zawiera frazy
 *    z pola `expectTitle`, akt NIE jest pobierany i zgłaszany jest błąd. To zabezpieczenie
 *    przed klasą błędu „prawdziwy numer, zły akt", która wystąpiła w tym projekcie dwukrotnie
 *    (DU/2024/1571 miało być psycholog — było PSWiN; DU/2025/540 miało być u.dz.l. — było MKiDN).
 *  - jeśli akt się zmienił od ostatniego uruchomienia (lub jest pobierany po raz pierwszy),
 *    pobiera pełny tekst (HTML jeśli dostępny, w przeciwnym razie PDF)
 *  - zapisuje plik tekstowy + plik .meta.json z metadanymi i linkiem źródłowym
 *  - aktualizuje manifest.json na potrzeby wykrywania zmian przy kolejnych uruchomieniach
 *
 * Wpisy w config.json mają jedną z trzech postaci:
 *  1) PRZYPIĘTE  — { publisher, year, pos, category, label, expectTitle, [baseEli] }
 *     Gotowe do pobrania. Adres Dz.U. (zwykle obwieszczenia z t.j.) jest znany i potwierdzony.
 *     Opcjonalne `baseEli` = akt BAZOWY (pierwotny) — z niego --check czyta nowelizacje.
 *  2) AKT BAZOWY — { baseEli, category, label, expectTitle, [projectSearch], why }
 *     Śledzimy akt pierwotny (np. KPC = DU/1964/296). Najnowszy tekst jednolity jest
 *     ustalany przy każdym uruchomieniu z /references → „Inf. o tekście jednolitym",
 *     więc nie trzeba ręcznie przepinać numeru po każdym nowym obwieszczeniu.
 *  3) DO ROZWIĄZANIA — { search, category, label, expectTitle, why }
 *     Adres Dz.U. nieznany. W trybie normalnym taki wpis jest POMIJANY (świadomie —
 *     żeby nie zgadywać numeru pozycji). Użyj `--resolve`, żeby wyszukać kandydatów
 *     w ELI i przypiąć właściwy.
 *
 * Wymaga Node.js 18+ (wbudowany fetch). Dla obsługi proxy: Node 22.21+.
 *
 * Użycie:
 *   node fetch-laws.js                 // pobiera / aktualizuje wpisy przypięte
 *   node fetch-laws.js --check         // tylko sprawdza czy są zmiany, nic nie zapisuje
 *        --od 2026-01-01                // + lista nowelizacji ogłoszonych / wchodzących w życie od daty
 *        --projekty                     // + projekty ustaw w Sejmie zmieniające dany akt (api.sejm.gov.pl/sejm)
 *        --tylko bankowe                // tylko akty, których nazwa/kategoria zawiera frazę
 *        --raport                       // zapisuje wynik do raporty/zmiany_RRRR-MM-DD.md
 *   node fetch-laws.js --resolve       // szuka w ELI kandydatów dla wpisów `search`, wypisuje je
 *   node fetch-laws.js --resolve --write   // jw. + przypina jednoznaczne trafienia do config.json
 *   node fetch-laws.js --diag          // test łączności z api.sejm.gov.pl i diagnostyka proxy
 */

// ── Obsługa proxy ────────────────────────────────────────────────────────────
// Wbudowany fetch w Node NIE czyta zmiennej HTTPS_PROXY samoczynnie. W środowiskach
// za proxy (np. Claude Code on the web) trzeba uruchomić Node z NODE_USE_ENV_PROXY=1
// (dostępne od Node 22.21). Robimy to automatycznie, re-eksekwując samego siebie —
// dzięki temu skrypt działa identycznie lokalnie (bez proxy) i w sandboksie.
if (process.env.HTTPS_PROXY && !process.env.NODE_USE_ENV_PROXY) {
  const [maj, min] = process.versions.node.split('.').map(Number);
  if (maj < 22 || (maj === 22 && min < 21)) {
    console.warn(
      `⚠ HTTPS_PROXY jest ustawione, ale Node ${process.versions.node} nie obsługuje ` +
      `NODE_USE_ENV_PROXY (wymagany 22.21+). Żądania prawdopodobnie ominą proxy i utkną.`
    );
  } else {
    const { spawnSync } = require('child_process');
    const res = spawnSync(process.execPath, [__filename, ...process.argv.slice(2)], {
      stdio: 'inherit',
      env: { ...process.env, NODE_USE_ENV_PROXY: '1', NODE_NO_WARNINGS: '1' },
    });
    process.exit(res.status ?? 1);
  }
}

const fs = require('fs');
const path = require('path');
const lex = require('./tools/lex-api');

const CONFIG_PATH = path.join(__dirname, 'config.json');
const OUT_DIR = path.join(__dirname, 'akty');
const MANIFEST_PATH = path.join(__dirname, 'manifest.json');
// HTTPS, nie HTTP. Proxy w sandboksie obsługuje wyłącznie tunel CONNECT (HTTPS);
// zwykły HTTP kończy się błędem 405 od proxy.
const API_BASE = 'https://api.sejm.gov.pl/eli/acts';

const RETRIES = 4;
const BACKOFF_MS = [2000, 4000, 8000, 16000];

function loadJSON(p, fallback) {
  try {
    return JSON.parse(fs.readFileSync(p, 'utf8'));
  } catch {
    return fallback;
  }
}

function saveJSON(p, data) {
  fs.writeFileSync(p, JSON.stringify(data, null, 2) + '\n', 'utf8');
}

/** Rozpoznaje, czy błąd pochodzi od proxy/polityki egress, czy od serwera ELI. */
function describeNetworkError(err) {
  const parts = [err.message];
  let c = err.cause;
  while (c) {
    if (c.message) parts.push(c.message);
    if (c.code) parts.push(`code=${c.code}`);
    c = c.cause;
  }
  const blob = parts.join(' | ');
  if (/\b403\b/.test(blob) || /\b407\b/.test(blob)) {
    return {
      kind: 'egress',
      detail:
        `${blob}\n     → Tunel CONNECT odrzucony przez proxy. Host api.sejm.gov.pl NIE JEST ` +
        `na liście dozwolonych domen tego środowiska.\n` +
        `     → Napraw: w claude.ai/code edytuj środowisko → Network access → Custom ` +
        `→ Allowed domains: api.sejm.gov.pl, isap.sejm.gov.pl, eli.gov.pl ` +
        `(zaznacz „Also include default list of common package managers"). Albo ustaw Full.`,
    };
  }
  if (/ENOTFOUND|EAI_AGAIN/.test(blob)) return { kind: 'dns', detail: blob };
  if (/ECONNREFUSED/.test(blob)) return { kind: 'refused', detail: blob };
  if (/certificate|self-signed|PKIX/i.test(blob)) {
    return {
      kind: 'tls',
      detail: `${blob}\n     → Ustaw NODE_EXTRA_CA_CERTS=/root/.ccr/ca-bundle.crt`,
    };
  }
  return { kind: 'other', detail: blob };
}

async function apiGet(url, { asBuffer = false, asText = false } = {}) {
  let lastErr;
  for (let attempt = 0; attempt <= RETRIES; attempt++) {
    try {
      const res = await fetch(url, {
        headers: { Accept: asText || asBuffer ? '*/*' : 'application/json' },
      });
      if (!res.ok) {
        // 5xx i 429 warto ponowić; 4xx (poza 429) to trwały błąd — nie ponawiaj.
        if (res.status >= 500 || res.status === 429) {
          lastErr = new Error(`HTTP ${res.status} dla ${url}`);
        } else {
          const e = new Error(`HTTP ${res.status} dla ${url}`);
          e.httpStatus = res.status;
          throw e;
        }
      } else {
        if (asBuffer) return Buffer.from(await res.arrayBuffer());
        if (asText) return res.text();
        return res.json();
      }
    } catch (err) {
      if (err.httpStatus) throw err;
      // Odmowa polityki egress nie jest błędem przejściowym — ponawianie tylko marnuje czas.
      if (describeNetworkError(err).kind === 'egress') throw err;
      lastErr = err;
    }
    if (attempt < RETRIES) {
      const wait = BACKOFF_MS[attempt];
      console.log(`     ⋯ próba ${attempt + 1}/${RETRIES + 1} nieudana, ponawiam za ${wait / 1000}s`);
      await new Promise((r) => setTimeout(r, wait));
    }
  }
  throw lastErr;
}

async function fetchActMeta(publisher, year, pos) {
  return apiGet(`${API_BASE}/${publisher}/${year}/${pos}`);
}

// ── EUR-Lex: akty prawa Unii Europejskiej ────────────────────────────────────
// ELI (api.sejm.gov.pl) obejmuje wyłącznie polskie Dzienniki Ustaw. Akty unijne —
// jak RODO — trzeba pobrać z EUR-Lex po identyfikatorze CELEX. Wpis w config.json:
//   { "source": "eurlex", "celex": "02016R0679", "category": "...", "label": "...",
//     "expectTitle": "..." }
// Uwaga: CELEX zaczynający się od "0" to wersja SKONSOLIDOWANA (z późniejszymi
// zmianami) — dla RODO właściwa. "3" oznacza akt w brzmieniu pierwotnym.
const EURLEX_HTML = (celex, lang = 'PL') =>
  `https://eur-lex.europa.eu/legal-content/${lang}/TXT/HTML/?uri=CELEX:${celex}`;

const isEurlex = (e) => e.source === 'eurlex' && e.celex;

async function processEurlexAct(entry, manifest) {
  const { celex, category, label } = entry;
  const key = `CELEX/${celex}`;
  console.log(`→ Sprawdzam: ${label} (${key})`);

  const html = await apiGet(EURLEX_HTML(celex), { asText: true });

  // KROK 2B dla EUR-Lex: brak osobnych metadanych, więc bramkę stosujemy do treści
  // dokumentu — fraza z expectTitle musi wystąpić w pobranym tekście.
  if (!entry.expectTitle) {
    throw new Error('brak pola "expectTitle" — bramka KROK 2B nieaktywna, uzupełnij config.json');
  }
  const plain = html.replace(/<[^>]+>/g, ' ');
  if (!norm(plain).includes(norm(entry.expectTitle))) {
    throw new Error(
      `NIEZGODNOŚĆ TREŚCI (KROK 2B)\n` +
      `     oczekiwano frazy: "${entry.expectTitle}"\n` +
      `     → Nie znaleziono jej w dokumencie CELEX ${celex}. Sprawdź identyfikator ` +
      `(wersja skonsolidowana zaczyna się od "0") oraz język. Nie zapisuję.`
    );
  }
  console.log(`  ✓ KROK 2B: treść zgodna ("${entry.expectTitle}")`);

  const dir = path.join(OUT_DIR, category);
  fs.mkdirSync(dir, { recursive: true });
  const base = safeName(label);
  const filePath = path.join(dir, `${base}.html`);
  fs.writeFileSync(filePath, html);

  saveJSON(path.join(dir, `${base}.meta.json`), {
    label,
    title: entry.expectTitle,
    source: 'EUR-Lex',
    celex,
    expectTitleVerified: entry.expectTitle,
    sourceUrl: EURLEX_HTML(celex),
    lastFetched: new Date().toISOString(),
  });

  manifest[key] = {
    label,
    category,
    source: 'EUR-Lex',
    lastFetched: new Date().toISOString(),
    file: path.relative(__dirname, filePath),
  };

  console.log(`  ✓ Zapisano: ${path.relative(__dirname, filePath)}`);
}

async function fetchActText(publisher, year, pos, meta) {
  if (meta.textHTML) {
    try {
      const content = await apiGet(`${API_BASE}/${publisher}/${year}/${pos}/text.html`, { asText: true });
      return { type: 'html', content };
    } catch (e) {
      console.warn(`  ⚠ HTML niedostępny (${e.message}), próbuję PDF`);
    }
  }
  if (meta.textPDF) {
    const content = await apiGet(`${API_BASE}/${publisher}/${year}/${pos}/text.pdf`, { asBuffer: true });
    return { type: 'pdf', content };
  }
  return null;
}

/** Normalizacja do porównywania tytułów — bez wielkości liter i bez wielokrotnych spacji. */
function norm(s) {
  return String(s || '').toLowerCase().replace(/\s+/g, ' ').trim();
}

/**
 * KROK 2B — bramka tytułowa. Zwraca null gdy OK, albo komunikat błędu.
 * Zgodny numer Dz.U. nie wystarcza: tytuł aktu musi merytorycznie odpowiadać temu,
 * po co przyszliśmy.
 */
function checkTitleGate(entry, meta) {
  if (!entry.expectTitle) {
    return `brak pola "expectTitle" w config.json — bramka KROK 2B nieaktywna dla tego wpisu, uzupełnij konfigurację`;
  }
  if (!norm(meta.title).includes(norm(entry.expectTitle))) {
    return (
      `NIEZGODNOŚĆ TYTUŁU (KROK 2B)\n` +
      `     oczekiwano frazy: "${entry.expectTitle}"\n` +
      `     tytuł w ELI:      "${meta.title}"\n` +
      `     → To dokładnie ta klasa błędu, na którą projekt już dwa razy się nadział. ` +
      `Nie pobieram. Sprawdź adres Dz.U. przez --resolve.`
    );
  }
  return null;
}

function safeName(label) {
  return label
    .replace(/[ąĄ]/g, 'a').replace(/[ćĆ]/g, 'c').replace(/[ęĘ]/g, 'e')
    .replace(/[łŁ]/g, 'l').replace(/[ńŃ]/g, 'n').replace(/[óÓ]/g, 'o')
    .replace(/[śŚ]/g, 's').replace(/[źżŹŻ]/g, 'z')
    .replace(/[^a-z0-9_-]+/gi, '_')
    .toLowerCase();
}

const hasTjPin = (e) => Boolean(e.publisher && e.year && e.pos);
const isPinned = (e) => hasTjPin(e) || Boolean(e.baseEli) || isEurlex(e);

/**
 * Wpis typu AKT BAZOWY: ustala najnowszy t.j. z /references aktu bazowego i pobiera jego treść.
 * Bramka KROK 2B: tytuł aktu BAZOWEGO musi zawierać `expectTitle`; t.j. jest powiązany z aktem
 * bazowym strukturalnie (pochodzi z jego własnej listy „Inf. o tekście jednolitym").
 */
async function processBaseAct(entry, manifest) {
  const { baseEli, category, label } = entry;
  console.log(`→ Sprawdzam: ${label} (akt bazowy ${baseEli})`);
  const [bp, by, bpos] = baseEli.split('/');
  const baseMeta = await fetchActMeta(bp, by, bpos);
  const gate = checkTitleGate(entry, baseMeta);
  if (gate) throw new Error(gate);
  console.log(`  ✓ KROK 2B: tytuł zgodny ("${entry.expectTitle}")`);

  const { latestTj } = await lex.analyzeChanges(baseEli);
  const srcEli = latestTj ? latestTj.ELI : baseEli;
  const [p, y, pos] = srcEli.split('/');
  const meta = latestTj ? await fetchActMeta(p, y, pos) : baseMeta;

  const prev = manifest[baseEli];
  if (prev && prev.tjEli === srcEli && prev.changeDate === meta.changeDate) {
    console.log(`  ✓ Bez zmian (t.j. ${srcEli}, ostatnia aktualizacja: ${meta.changeDate})`);
    return;
  }
  console.log(`  ⟳ ${prev ? 'Wykryto zmianę' : 'Pierwsze pobranie'} — pobieram ${latestTj ? 't.j. ' : 'akt '}${srcEli}...`);
  const text = await fetchActText(p, y, pos, meta);
  if (!text) {
    console.warn(`  ⚠ Brak dostępnego tekstu (ani HTML ani PDF) dla ${srcEli}`);
    return;
  }
  const dir = path.join(OUT_DIR, category);
  fs.mkdirSync(dir, { recursive: true });
  const base = safeName(label);
  const filePath = path.join(dir, `${base}.${text.type === 'html' ? 'html' : 'pdf'}`);
  fs.writeFileSync(filePath, text.content);
  saveJSON(path.join(dir, `${base}.meta.json`), {
    label,
    title: meta.title,
    baseEli,
    baseTitle: baseMeta.title,
    tjEli: latestTj ? srcEli : null,
    status: meta.status,
    displayAddress: meta.displayAddress,
    promulgation: meta.promulgation,
    changeDate: meta.changeDate,
    type: meta.type,
    expectTitleVerified: entry.expectTitle,
    sourceUrl: `https://eli.gov.pl/eli/${srcEli}`,
    lastFetched: new Date().toISOString(),
  });
  manifest[baseEli] = {
    label,
    category,
    tjEli: latestTj ? srcEli : null,
    changeDate: meta.changeDate,
    status: meta.status,
    lastFetched: new Date().toISOString(),
    file: path.relative(__dirname, filePath),
  };
  console.log(`  ✓ Zapisano: ${path.relative(__dirname, filePath)}`);
}

// ── Tryb --check: analiza zmian aktu bazowego ────────────────────────────────

const fmtDates = (a) => (a.inForceDates.length ? a.inForceDates.join(', ') : '?');

async function checkBaseAct(entry, manifest, opts, out) {
  const { baseEli, label } = entry;
  const [bp, by, bpos] = baseEli.split('/');
  const baseMeta = await fetchActMeta(bp, by, bpos);
  const gate = checkTitleGate(entry, baseMeta);
  if (gate) throw new Error(gate);

  const ch = await lex.analyzeChanges(baseEli, { since: opts.since });
  const localTj = hasTjPin(entry)
    ? `${entry.publisher}/${entry.year}/${entry.pos}`
    : manifest[baseEli]?.tjEli || null;
  const latest = ch.latestTj;
  const tjStale = latest && localTj && localTj !== latest.ELI;
  const flags = [];
  if (tjStale) flags.push('NOWY T.J.');
  if (ch.afterTj.length) flags.push(`${ch.afterTj.length} nowel. po t.j.`);
  if (ch.pending.length) flags.push(`${ch.pending.length} oczekujących`);
  if (opts.since && ch.since.length) flags.push(`${ch.since.length} od ${opts.since}`);

  out(`\n## ${flags.length ? '⟳' : '✓'} ${label}`);
  out(`   akt bazowy: ${baseMeta.displayAddress} (${baseEli}) — ${baseMeta.status}`);
  if (latest) {
    out(`   najnowszy t.j.: ${latest.displayAddress} (${latest.ELI}), obwieszczenie z ${latest.announcementDate || '?'}, ogł. ${latest.promulgation || '?'}` +
      (localTj ? (tjStale ? `   ⚠ lokalnie mamy ${localTj} — NIEAKTUALNY` : '   ✓ zgodny z lokalnym') : '   (lokalnie brak)'));
  } else {
    out('   tekst jednolity: brak (obowiązuje brzmienie pierwotne + nowelizacje)');
  }

  const listAm = (title, arr) => {
    if (!arr.length) return;
    out(`   ${title}:`);
    for (const a of arr) {
      const future = a.inForceDates.some((d) => d > lex.today()) ? '  ⏳ jeszcze nie obowiązuje' : '';
      out(`     • ${a.displayAddress} (${a.eli}), ogł. ${a.promulgation || '?'}, wejście w życie: ${fmtDates(a)}${future}`);
      out(`       ${a.title}`);
    }
  };
  listAm('Nowelizacje ogłoszone PO dacie obwieszczenia o t.j. (nie ma ich w tekście jednolitym — sprawdź też wykaz w obwieszczeniu)', ch.afterTj);
  const pendingOnly = ch.pending.filter((a) => !ch.afterTj.includes(a));
  listAm('Inne zmiany, które dopiero wejdą w życie', pendingOnly);
  if (opts.since) {
    const rest = ch.since.filter((a) => !ch.afterTj.includes(a) && !ch.pending.includes(a));
    listAm(`Pozostałe zmiany ogłoszone / wchodzące w życie od ${opts.since}`, rest);
    for (const t of ch.tkSince) out(`     ⚖ TK: ${t.title} (${t.displayAddress}, ${t.date})`);
  }

  if (opts.projects) await checkProjects(entry, ch, out);
  return { changed: flags.length > 0 };
}

async function checkProjects(entry, ch, out) {
  const phrase = entry.projectSearch || entry.expectTitle;
  let res;
  try {
    res = await lex.searchProjectsDetailed(phrase, { onlyOpen: true });
  } catch (err) {
    out(`   ⚠ Projekty: błąd Sejm API (${err.message})`);
    return;
  }
  const { list } = res;
  if (!list.length) {
    out(`   Projekty w Sejmie (tytuł zawiera „${phrase}"): brak w toku`);
    return;
  }
  out(`   Projekty w Sejmie w toku (tytuł zawiera „${phrase}"): ${list.length}`);
  for (const p of list.slice(0, 10)) {
    const st = p.details?.lastStage;
    out(`     ◦ druk nr ${p.number}, wpłynął ${p.processStartDate}${st ? ` | ostatni etap: ${st.stageName} (${st.date || '?'})` : ''}`);
    out(`       ${p.title}`);
    out(`       ${lex.processUrl(p.term, p.number)}`);
  }
  if (list.length > 10) out(`     … i ${list.length - 10} więcej (zawęź: node szukaj.js → opcja 3)`);
}

// ── Tryb --resolve ───────────────────────────────────────────────────────────

function itemsOf(data) {
  if (Array.isArray(data)) return data;
  return data.items || data.acts || data.results || [];
}

function addrOf(item) {
  // ELI API zwraca m.in. `address` ("DU/2024/18") oraz osobne pola publisher/year/pos.
  if (item.publisher && item.year != null && item.pos != null) {
    return { publisher: item.publisher, year: Number(item.year), pos: Number(item.pos) };
  }
  const src = item.address || item.ELI || '';
  const m = /^([A-Z]+)\/(\d{4})\/(\d+)$/.exec(String(src).trim());
  return m ? { publisher: m[1], year: Number(m[2]), pos: Number(m[3]) } : null;
}

/** Ranking kandydatów: t.j. (Obwieszczenie) i obowiązujące wyżej, potem najnowsze. */
function rankCandidates(items, expectTitle) {
  return items
    .filter((it) => norm(it.title).includes(norm(expectTitle)))
    .map((it) => ({ item: it, addr: addrOf(it) }))
    .filter((c) => c.addr)
    .sort((a, b) => {
      const score = (c) =>
        (/obowiązując/i.test(c.item.status || '') ? 2 : 0) +
        (/obwieszczenie/i.test(c.item.type || '') ? 1 : 0);
      const ds = score(b) - score(a);
      if (ds) return ds;
      if (b.addr.year !== a.addr.year) return b.addr.year - a.addr.year;
      return b.addr.pos - a.addr.pos;
    });
}

async function resolveEntry(entry, { write }) {
  console.log(`\n→ ${entry.label}`);
  console.log(`  szukam: "${entry.search}"   |   bramka tytułu: "${entry.expectTitle}"`);
  if (entry.why) console.log(`  po co:  ${entry.why}`);

  const url = `${API_BASE}/search?title=${encodeURIComponent(entry.search)}&inForce=IN_FORCE&limit=50`;
  const data = await apiGet(url);
  const items = itemsOf(data);
  const ranked = rankCandidates(items, entry.expectTitle);

  if (!ranked.length) {
    console.log(`  ✗ Brak kandydatów przechodzących bramkę tytułu (${items.length} wyników z ELI).`);
    console.log(`    → Popraw frazę "search" albo poluzuj "expectTitle".`);
    return { entry, pinned: null };
  }

  console.log(`  Kandydaci (${ranked.length}), najlepszy pierwszy:`);
  ranked.slice(0, 8).forEach((c, i) => {
    const a = c.addr;
    console.log(
      `   ${i === 0 ? '★' : ' '} ${a.publisher}/${a.year}/${a.pos}  [${c.item.type || '?'}] ` +
      `[${c.item.status || '?'}]  zmiana: ${c.item.changeDate || '?'}`
    );
    console.log(`      ${c.item.title}`);
  });

  const best = ranked[0];
  if (write) {
    entry.publisher = best.addr.publisher;
    entry.year = best.addr.year;
    entry.pos = best.addr.pos;
    delete entry.search;
    console.log(`  ✎ Przypięto: ${best.addr.publisher}/${best.addr.year}/${best.addr.pos}`);
    if (ranked.length > 1) {
      console.log(`  ⚠ Było ${ranked.length} kandydatów — SPRAWDŹ RĘCZNIE, czy wybrany jest właściwym t.j.`);
    }
  }
  return { entry, pinned: best.addr, ambiguous: ranked.length > 1 };
}

// ── Tryb --diag ──────────────────────────────────────────────────────────────

async function diag() {
  console.log('Diagnostyka łączności z ELI API\n');
  console.log(`Node:              ${process.versions.node}`);
  console.log(`HTTPS_PROXY:       ${process.env.HTTPS_PROXY || '(brak)'}`);
  console.log(`NODE_USE_ENV_PROXY: ${process.env.NODE_USE_ENV_PROXY || '(brak)'}`);
  console.log(`NODE_EXTRA_CA_CERTS: ${process.env.NODE_EXTRA_CA_CERTS || '(brak)'}`);
  console.log(`API_BASE:          ${API_BASE}`);
  console.log(`EUR-Lex:           ${EURLEX_HTML('<CELEX>')}\n`);

  try {
    const meta = await apiGet(`${API_BASE}/DU/2024/18`);
    console.log('✓ POŁĄCZENIE DZIAŁA');
    console.log(`  Akt kontrolny DU/2024/18: ${meta.title}`);
    console.log(`  status: ${meta.status}, changeDate: ${meta.changeDate}`);
  } catch (err) {
    const d = describeNetworkError(err);
    console.error(`✗ POŁĄCZENIE NIE DZIAŁA (${d.kind})`);
    console.error(`     ${d.detail}`);
    process.exitCode = 1;
  }
}

// ── main ─────────────────────────────────────────────────────────────────────

async function main() {
  const argv = process.argv.slice(2);
  const checkOnly = argv.includes('--check');
  const doResolve = argv.includes('--resolve');
  const doWrite = argv.includes('--write');
  const doDiag = argv.includes('--diag');
  const argVal = (name) => {
    const i = argv.indexOf(name);
    return i >= 0 && argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[i + 1] : null;
  };
  const since = argVal('--od');
  if (since && !/^\d{4}-\d{2}-\d{2}$/.test(since)) {
    console.error(`--od wymaga daty w formacie RRRR-MM-DD (podano: ${since})`);
    process.exit(1);
  }
  const only = argVal('--tylko');
  const checkOpts = { since, projects: argv.includes('--projekty') };
  const report = [];
  const out = (line) => { console.log(line); report.push(line); };

  if (doDiag) return diag();

  const config = loadJSON(CONFIG_PATH, []);
  const manifest = loadJSON(MANIFEST_PATH, {});

  if (!config.length) {
    console.error('Brak config.json lub pusta konfiguracja.');
    process.exit(1);
  }

  if (doResolve) {
    const pending = config.filter((e) => !isPinned(e) && e.search && !isEurlex(e));
    if (!pending.length) {
      console.log('Wszystkie wpisy w config.json są już przypięte — nie ma czego rozwiązywać.');
      return;
    }
    console.log(`Rozwiązywanie adresów Dz.U. dla ${pending.length} wpisów przez ELI search`);
    console.log(doWrite ? '(tryb --write: jednoznaczne trafienia zostaną przypięte)\n' : '(tryb podglądu, config.json nietknięty)\n');

    let ok = 0, failed = 0, ambiguous = 0;
    for (const entry of pending) {
      try {
        const r = await resolveEntry(entry, { write: doWrite });
        if (r.pinned) { ok++; if (r.ambiguous) ambiguous++; } else { failed++; }
      } catch (err) {
        failed++;
        const d = describeNetworkError(err);
        console.error(`  ✗ Błąd (${d.kind}): ${d.detail}`);
        if (d.kind === 'egress') break; // nie ma sensu ciągnąć — polityka sieci blokuje wszystko
      }
    }
    if (doWrite && ok) saveJSON(CONFIG_PATH, config);
    console.log(`\nPodsumowanie: rozwiązane ${ok}, nierozwiązane ${failed}, wymagające ręcznego sprawdzenia ${ambiguous}`);
    if (doWrite && ok) console.log('config.json zaktualizowany. Teraz: node fetch-laws.js');
    return;
  }

  const matchesOnly = (e) => !only || lex.fold(`${e.label} ${e.category} ${e.expectTitle}`).includes(lex.fold(only));
  const pinned = config.filter(isPinned).filter(matchesOnly);
  if (checkOnly) {
    out(`# Przegląd zmian w aktach (${lex.today()})`);
    out(`Źródło: api.sejm.gov.pl/eli${checkOpts.projects ? ' + api.sejm.gov.pl/sejm (projekty)' : ''}` +
      `${since ? `; okres od ${since}` : ''}${only ? `; filtr: „${only}"` : ''}`);
  }
  let changedCount = 0;
  const unpinned = config.filter((e) => !isPinned(e));

  if (unpinned.length && !only) {
    console.log(`ℹ Pomijam ${unpinned.length} wpisów bez adresu Dz.U. (świadomie — nie zgaduję numeru pozycji).`);
    console.log('  Rozwiąż je: node fetch-laws.js --resolve [--write]\n');
  }

  let errors = 0;
  for (const entry of pinned) {
    try {
      if (isEurlex(entry)) {
        if (checkOnly) {
          console.log(`ℹ EUR-Lex CELEX ${entry.celex} — ${entry.label} (brak metadanych zmian; pobranie weryfikuje treść)`);
        } else {
          await processEurlexAct(entry, manifest);
        }
        continue;
      }
      if (checkOnly && entry.baseEli) {
        const r = await checkBaseAct(entry, manifest, checkOpts, out);
        if (r.changed) changedCount++;
        continue;
      }
      if (!checkOnly && entry.baseEli && !hasTjPin(entry)) {
        await processBaseAct(entry, manifest);
        continue;
      }
      if (checkOnly) {
        const meta = await fetchActMeta(entry.publisher, entry.year, entry.pos);
        const key = `${entry.publisher}/${entry.year}/${entry.pos}`;
        const gate = checkTitleGate(entry, meta);
        if (gate) {
          errors++;
          console.error(`✗ ${entry.label} (${key}): ${gate}`);
          continue;
        }
        const prev = manifest[key]?.changeDate;
        const changed = prev && prev !== meta.changeDate;
        console.log(`${changed ? '⟳ ZMIANA' : '✓ aktualne'} — ${entry.label} (status: ${meta.status}, zmiana: ${meta.changeDate})`);
      } else {
        await processAct(entry, manifest);
      }
    } catch (err) {
      errors++;
      const d = describeNetworkError(err);
      console.error(`✗ Błąd dla "${entry.label}" (${d.kind}):\n     ${d.detail}`);
      if (d.kind === 'egress') {
        console.error('\n⛔ Przerywam — polityka sieci środowiska blokuje api.sejm.gov.pl. Dalsze próby nic nie dadzą.');
        break;
      }
    }
  }

  if (!checkOnly) {
    saveJSON(MANIFEST_PATH, manifest);
    console.log('\nGotowe. Manifest zaktualizowany.');
  } else {
    out(`\n---\nAkty z odnotowanymi zmianami: ${changedCount} z ${pinned.length}.`);
    out(`Weryfikacja: ✅ [VER: api.sejm.gov.pl ELI /references, ${lex.today()}]`);
    if (argv.includes('--raport')) {
      const dir = path.join(__dirname, 'raporty');
      fs.mkdirSync(dir, { recursive: true });
      const file = path.join(dir, `zmiany_${lex.today()}${only ? '_' + safeName(only) : ''}.md`);
      fs.writeFileSync(file, report.join('\n') + '\n', 'utf8');
      console.log(`\n📄 Raport zapisany: ${path.relative(__dirname, file)}`);
    } else {
      console.log('\nSprawdzanie zakończone (tryb --check, nic nie zapisano).');
    }
  }
  if (errors) {
    console.error(`\n⚠ Zakończono z ${errors} błędami.`);
    process.exitCode = 1;
  }
}

main();
