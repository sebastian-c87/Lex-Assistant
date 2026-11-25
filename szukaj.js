#!/usr/bin/env node
/**
 * szukaj.js — proste menu wyszukiwania dla osoby nietechnicznej.
 *
 * Uruchomienie:
 *   Windows:  dwuklik na SZUKAJ.bat
 *   macOS:    dwuklik na SZUKAJ.command
 *   terminal: node szukaj.js
 *
 * Co potrafi (wszystko ze źródeł urzędowych, bez klucza API):
 *   1. Znaleźć ustawę / rozporządzenie po nazwie            (api.sejm.gov.pl/eli)
 *   2. Pokazać, co się zmieniło w danym akcie               (api.sejm.gov.pl/eli → /references)
 *   3. Znaleźć projekty ustaw w Sejmie i etap ich prac      (api.sejm.gov.pl/sejm)
 *   4. Zrobić przegląd zmian we wszystkich śledzonych aktach (fetch-laws.js --check)
 *   5. Przeczytać artykuł z lokalnej bazy (bez internetu)   (akty/**\/*.index.json)
 *   6. Znaleźć orzeczenia po haśle lub sygnaturze           (saos.org.pl)
 *
 * Każdy wynik można zapisać do pliku w folderze raporty/.
 */

// Ukryj techniczne ostrzeżenia Node (np. o eksperymentalnym proxy) — nie są dla użytkownika.
process.removeAllListeners('warning');

const path = require('path');
const lex = require('./tools/lex-api');

lex.reexecWithProxyIfNeeded(__filename);

const fs = require('fs');
const readline = require('readline');

const ROOT = __dirname;
const CONFIG = (() => {
  try { return JSON.parse(fs.readFileSync(path.join(ROOT, 'config.json'), 'utf8')); } catch { return []; }
})();

// Kolejka linii zamiast rl.question — działa tak samo przy klawiaturze i przy wejściu z pliku/potoku.
const rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: process.stdin.isTTY });
const pending = [];
const waiters = [];
let inputClosed = false;
rl.on('line', (l) => (waiters.length ? waiters.shift()(l) : pending.push(l)));
rl.on('close', () => { inputClosed = true; while (waiters.length) waiters.shift()(null); });
function ask(q) {
  process.stdout.write(q);
  if (pending.length) { const l = pending.shift(); if (!process.stdin.isTTY) console.log(l); return Promise.resolve(l.trim()); }
  if (inputClosed) { console.log('\nKoniec danych wejściowych.'); process.exit(0); }
  return new Promise((res) => waiters.push((l) => {
    if (l === null) { console.log('\nKoniec danych wejściowych.'); process.exit(0); }
    if (!process.stdin.isTTY) console.log(l);
    res(l.trim());
  }));
}
let buffer = [];
const say = (line = '') => { console.log(line); buffer.push(line); };
const yes = async (q, def = false) => {
  const a = (await ask(`${q} ${def ? '[T/n]' : '[t/N]'}: `)).toLowerCase();
  return a ? a.startsWith('t') || a.startsWith('y') : def;
};
const line = () => say('─'.repeat(72));

function slug(s) {
  return lex.fold(s).replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '').slice(0, 50) || 'wynik';
}

async function offerSave(name) {
  if (!buffer.length) return;
  if (await yes('\nZapisać ten wynik do pliku?')) {
    const dir = path.join(ROOT, 'raporty');
    fs.mkdirSync(dir, { recursive: true });
    const file = path.join(dir, `${lex.today()}_${slug(name)}.txt`);
    fs.writeFileSync(file, buffer.join('\n') + '\n', 'utf8');
    console.log(`📄 Zapisano: ${file}`);
  }
}

async function askDate(prompt) {
  for (;;) {
    const a = await ask(prompt);
    if (!a) return null;
    let m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(a);
    if (m) return a;
    m = /^(\d{1,2})[.\-/](\d{1,2})[.\-/](\d{4})$/.exec(a);
    if (m) return `${m[3]}-${m[2].padStart(2, '0')}-${m[1].padStart(2, '0')}`;
    if (/^\d{4}$/.test(a)) return `${a}-01-01`;
    console.log('  Nie rozumiem daty. Wpisz np. 1.01.2026 albo 2026-01-01 (albo Enter, by pominąć).');
  }
}

/** Z „Ustawa z dnia 17 listopada 1964 r. - Kodeks postępowania cywilnego." → „Kodeks postępowania cywilnego" */
function shortTitle(title) {
  return String(title || '')
    .replace(/^(Ustawa|Rozporządzenie.*?|Obwieszczenie.*?)\s+z dnia\s+\d+\s+\S+\s+\d{4}\s*r\.\s*[-–]?\s*/i, '')
    .replace(/\.$/, '')
    .trim();
}

function handleError(err) {
  const msg = String(err && (err.cause?.message || err.message) || err);
  console.log(`\n⚠ Nie udało się pobrać danych: ${msg}`);
  if (/403|ENOTFOUND|ECONNREFUSED|fetch failed/i.test(msg)) {
    console.log('  Sprawdź połączenie z internetem. Jeśli działasz w Claude Code w chmurze,');
    console.log('  zobacz HANDOFF.md, sekcja 3a (dostęp sieciowy do api.sejm.gov.pl).');
  }
}

// ── 1. Szukanie aktu ─────────────────────────────────────────────────────────

async function pickAct(phrase, { inForce = true } = {}) {
  const items = (await lex.searchActs(phrase, { inForce, limit: 100 }))
    .filter((i) => !/^Obwieszczenie/i.test(i.title))
    .sort((a, b) => {
      // Najpierw akty, których tytuł NIE jest nowelizacją, potem najnowsze.
      const z = (x) => (/o zmianie|zmieniająca/i.test(x.title) ? 1 : 0);
      return z(a) - z(b) || b.year - a.year || b.pos - a.pos;
    });
  if (!items.length) {
    console.log('  Nic nie znaleziono. Spróbuj krótszej frazy, np. „bankowe" zamiast „prawo bankowe 1997".');
    return null;
  }
  const shown = items.slice(0, 15);
  console.log(`\nZnaleziono ${items.length}${items.length > 15 ? ' (pokazuję 15 najlepszych)' : ''}:`);
  shown.forEach((it, i) => {
    console.log(` ${String(i + 1).padStart(2)}. ${it.displayAddress}  [${it.status}]`);
    console.log(`     ${it.title}`);
  });
  const a = await ask('\nWpisz numer z listy (Enter = powrót): ');
  const n = Number(a);
  return n >= 1 && n <= shown.length ? shown[n - 1] : null;
}

async function menuFindAct() {
  const phrase = await ask('Wpisz nazwę lub fragment tytułu (np. „Prawo bankowe", „o kredycie konsumenckim"): ');
  if (!phrase) return;
  const onlyInForce = await yes('Tylko akty obowiązujące?', true);
  const act = await pickAct(phrase, { inForce: onlyInForce });
  if (!act) return;
  buffer = [];
  await showAct(`${act.publisher}/${act.year}/${act.pos}`);
  if (await yes('\nPokazać zmiany w tym akcie?', true)) {
    const since = await askDate('Od jakiej daty? (np. 1.01.2026; Enter = tylko zmiany po ostatnim tekście jednolitym): ');
    await showChanges(`${act.publisher}/${act.year}/${act.pos}`, { since, projects: await yes('Sprawdzić też projekty w Sejmie?', true) });
  }
  await offerSave(shortTitle(act.title));
}

async function showAct(eli) {
  const m = await lex.actMeta(eli);
  line();
  say(m.title);
  say(`${m.displayAddress}   (ELI: ${eli})`);
  say(`Status: ${m.status}${m.entryIntoForce ? `   |   wszedł w życie: ${m.entryIntoForce}` : ''}`);
  if (m.comments) say(`Uwagi ISAP: ${m.comments}`);
  say(`Tekst: ${lex.isapUrl(eli)}`);
  line();
}

// ── 2. Zmiany w akcie ────────────────────────────────────────────────────────

/** Jeśli podano obwieszczenie (tekst jednolity), przejdź do aktu bazowego — tam są nowelizacje. */
async function toBaseEli(eli) {
  const refs = await lex.actReferences(eli);
  const base = refs['Tekst jednolity dla aktu'];
  if (base && base.length) {
    console.log(`  (to jest tekst jednolity — pokazuję zmiany aktu bazowego ${base[0].act.ELI})`);
    return base[0].act.ELI;
  }
  return eli;
}

async function menuChanges() {
  const tracked = CONFIG.filter((e) => e.baseEli);
  console.log('\nWpisz nazwę aktu (np. „kodeks cywilny", „bankowe", „ubezpieczeniach obowiązkowych")');
  console.log('albo numer Dz.U. (np. „Dz.U. 1964 poz. 296" lub „DU/1964/296").');
  const q = await ask('> ');
  if (!q) return;

  let eli = lex.eliFromUserInput(q);
  if (!eli) {
    const hits = tracked.filter((e) => lex.fold(`${e.label} ${e.expectTitle}`).includes(lex.fold(q)));
    if (hits.length === 1) {
      eli = hits[0].baseEli;
      console.log(`  → ${hits[0].label} (${eli})`);
    } else if (hits.length > 1) {
      console.log('\nPasuje kilka śledzonych aktów:');
      hits.forEach((e, i) => console.log(` ${String(i + 1).padStart(2)}. ${e.label}`));
      const n = Number(await ask('Wpisz numer (Enter = szukaj w całym Dzienniku Ustaw): '));
      if (n >= 1 && n <= hits.length) eli = hits[n - 1].baseEli;
    }
    if (!eli) {
      const act = await pickAct(q);
      if (!act) return;
      eli = `${act.publisher}/${act.year}/${act.pos}`;
    }
  }
  eli = await toBaseEli(eli);
  const since = await askDate('Od jakiej daty pokazać zmiany? (np. 1.01.2026; Enter = tylko zmiany po ostatnim tekście jednolitym): ');
  const projects = await yes('Sprawdzić też projekty zmian w Sejmie?', true);
  buffer = [];
  await showChanges(eli, { since, projects });
  await offerSave(`zmiany_${eli}`);
}

async function showChanges(eli, { since, projects }) {
  const meta = await lex.actMeta(eli);
  const ch = await lex.analyzeChanges(eli, { since });
  line();
  say(`ZMIANY: ${meta.title}`);
  say(`${meta.displayAddress} (${eli}) — ${meta.status}`);
  line();
  if (ch.latestTj) {
    say(`Najnowszy tekst jednolity: ${ch.latestTj.displayAddress} (obwieszczenie z ${ch.latestTj.announcementDate || '?'})`);
    say(`  ${lex.isapUrl(ch.latestTj.ELI)}`);
  } else {
    say('Tekst jednolity: brak.');
  }
  say(`Wszystkich aktów zmieniających w historii: ${ch.amendments.length}`);

  const now = lex.today();
  const list = (title, arr, empty) => {
    say(`\n▶ ${title}`);
    if (!arr.length) { say(`   ${empty}`); return; }
    for (const a of arr) {
      const future = a.inForceDates.some((d) => d > now) ? '  ⏳ jeszcze nie obowiązuje (w całości)' : '';
      say(`   • ${a.displayAddress} — ogłoszono ${a.promulgation || '?'}, wchodzi w życie: ${a.inForceDates.join(', ') || '?'}${future}`);
      say(`     ${a.title}`);
    }
  };
  list('Zmiany, których NIE MA jeszcze w tekście jednolitym', ch.afterTj, 'brak — tekst jednolity jest aktualny.');
  list('Inne zmiany, które dopiero wejdą w życie', ch.pending.filter((a) => !ch.afterTj.includes(a)),
    ch.pending.length ? 'brak innych (poza oznaczonymi ⏳ powyżej).' : 'brak.');
  if (since) {
    list(`Wszystkie zmiany ogłoszone lub wchodzące w życie od ${since}`, ch.since, 'brak.');
    if (ch.tkSince.length) {
      say(`\n▶ Wyroki Trybunału Konstytucyjnego od ${since}`);
      for (const t of ch.tkSince) say(`   ⚖ ${t.title} (${t.displayAddress})`);
    }
  }
  say(`\n✅ [VER: api.sejm.gov.pl ELI ${eli} /references, ${lex.today()}]`);
  say('Uwaga: data przy nowelizacji to wejście w życie całej ustawy zmieniającej — szczegóły');
  say('(np. inne terminy dla poszczególnych przepisów) są w jej przepisach końcowych.');

  if (projects && meta.type === 'Ustawa') {
    const phrase = shortTitle(meta.title);
    await showProjects(phrase, { onlyOpen: true });
  }
}

// ── 3. Projekty ustaw ────────────────────────────────────────────────────────

async function menuProjects() {
  console.log('\nWpisz fragment tytułu projektu (np. „Kodeks postępowania cywilnego", „bankowe", „ubezpiecze").');
  console.log('Wyszukiwanie obejmuje tytuły projektów — projekt „o zmianie niektórych ustaw…”');
  console.log('może zmieniać Twój akt, choć jego nazwy nie ma w tytule.');
  const phrase = await ask('> ');
  if (!phrase) return;
  const onlyOpen = !(await yes('Pokazać też projekty już zakończone (uchwalone / odrzucone)?', false));
  const termIn = await ask(`Kadencja Sejmu (Enter = bieżąca ${await lex.currentTerm()}): `);
  buffer = [];
  await showProjects(phrase, { onlyOpen, term: Number(termIn) || undefined });
  await offerSave(`projekty_${phrase}`);
}

async function showProjects(phrase, { onlyOpen = true, term } = {}) {
  const { all, list, truncated } = await lex.searchProjectsDetailed(phrase, { term, onlyOpen });
  const t = all[0]?.term || term || (await lex.currentTerm());
  say(`\n▶ Projekty ustaw w Sejmie (kadencja ${t}) — tytuł zawiera „${phrase}": ` +
    `${list.length}${onlyOpen ? ' w toku' : ''} (wszystkich w kadencji: ${all.length})`);
  const shown = list.slice(0, 20);
  for (const p of shown) {
    const d = p.details;
    say(`\n   ◦ Druk nr ${p.number} — ${p.status} — wpłynął ${p.processStartDate}`);
    say(`     ${p.title}`);
    if (d?.lastStage) say(`     Ostatni etap: ${d.lastStage.stageName} (${d.lastStage.date || '?'})`);
    if (p.ELI) say(`     Ogłoszony jako: ${p.ELI}  ${lex.isapUrl(p.ELI)}`);
    if (d?.rclNum) say(`     Prace rządowe (RCL): ${d.rclNum}  ${d.rclLink || ''}`);
    say(`     Przebieg: ${lex.processUrl(p.term, p.number)}`);
  }
  if (list.length > shown.length || truncated) say(`\n   … są dalsze wyniki — zawęź frazę.`);
  say(`\n✅ [VER: api.sejm.gov.pl/sejm term${t}/processes, ${lex.today()}]`);
}

// ── 4. Przegląd wszystkich śledzonych aktów ──────────────────────────────────

async function menuOverview() {
  const groups = [...new Set(CONFIG.filter((e) => e.baseEli).map((e) => e.category))];
  console.log(`\nŚledzonych aktów: ${CONFIG.filter((e) => e.baseEli).length}. Grupy: ${groups.join(', ')}`);
  const only = await ask('Ograniczyć do grupy lub nazwy? (np. „bankowosc", „ubezpieczenia", „gwarancj", „postepowan"; Enter = wszystkie): ');
  const since = await askDate('Od jakiej daty? (Enter = tylko zmiany po ostatnim tekście jednolitym): ');
  const projects = await yes('Sprawdzić też projekty w Sejmie? (dłużej trwa)', false);
  const args = [path.join(ROOT, 'fetch-laws.js'), '--check', '--raport'];
  if (only) args.push('--tylko', only);
  if (since) args.push('--od', since);
  if (projects) args.push('--projekty');
  console.log('\nTo może potrwać do minuty...\n');
  require('child_process').spawnSync(process.execPath, args, { stdio: 'inherit', env: { ...process.env, NODE_NO_WARNINGS: '1' } });
}

// ── 5. Artykuł z lokalnej bazy ───────────────────────────────────────────────

function localIndexes() {
  const out = [];
  const dir = path.join(ROOT, 'akty');
  if (!fs.existsSync(dir)) return out;
  for (const cat of fs.readdirSync(dir)) {
    const cdir = path.join(dir, cat);
    if (!fs.statSync(cdir).isDirectory()) continue;
    for (const f of fs.readdirSync(cdir).filter((x) => x.endsWith('.index.json'))) {
      const metaFile = path.join(cdir, f.replace('.index.json', '.meta.json'));
      let meta = {};
      try { meta = JSON.parse(fs.readFileSync(metaFile, 'utf8')); } catch { /* brak meta */ }
      out.push({ file: path.join(cdir, f), label: meta.label || f, meta });
    }
  }
  return out;
}

/** „7^1", „7(1)", „7 1", „7¹", „10a", „art. 10a" → kandydaci kluczy w indeksie. */
function articleKeys(input) {
  const sup = { '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9' };
  let s = String(input).toLowerCase().replace(/^art\.?\s*/, '').trim();
  s = s.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]+/g, (m) => '_' + [...m].map((c) => sup[c]).join(''));
  s = s.replace(/\s*[\^()]\s*/g, '_').replace(/\s+/g, '_').replace(/_+/g, '_').replace(/_$/, '');
  return [`arti_${s}`, `arti_${s.replace(/_/g, '')}`];
}

async function menuArticle() {
  const idx = localIndexes();
  if (!idx.length) { console.log('Brak lokalnych indeksów w folderze akty/.'); return; }
  console.log('\nAkty dostępne lokalnie (bez internetu):');
  idx.forEach((x, i) => console.log(` ${String(i + 1).padStart(2)}. ${x.label}`));
  const n = Number(await ask('Numer aktu: '));
  if (!(n >= 1 && n <= idx.length)) return;
  const chosen = idx[n - 1];
  const data = JSON.parse(fs.readFileSync(chosen.file, 'utf8'));
  for (;;) {
    const a = await ask('Numer artykułu (np. 201, 7^1, 10a; albo słowo do wyszukania w treści; Enter = koniec): ');
    if (!a) return;
    buffer = [];
    const key = articleKeys(a).find((k) => data[k]);
    const ver = `✅ [VER: lokalny plik ${path.relative(ROOT, chosen.file)}` +
      `${chosen.meta.displayAddress ? `, ${chosen.meta.displayAddress}` : ''}` +
      `${chosen.meta.lastFetched ? `, pobrany ${chosen.meta.lastFetched.slice(0, 10)}` : ''}]`;
    if (key) {
      line();
      say(`${chosen.label}`);
      say(`${data[key].heading}`);
      say(data[key].text);
      say(ver);
      line();
      if (chosen.meta.baseEli || chosen.meta.ELI) {
        say('Wskazówka: sprawdź opcją 2, czy po tej wersji tekstu nie było nowelizacji.');
      }
    } else if (/^\d/.test(a)) {
      console.log('  Nie ma takiego artykułu w tym akcie (mógł zostać uchylony albo ma inny numer).');
      continue;
    } else {
      const hits = Object.values(data).filter((v) => lex.fold(v.text).includes(lex.fold(a)));
      say(`\nArtykuły zawierające „${a}": ${hits.length}`);
      for (const h of hits.slice(0, 20)) {
        const i = lex.fold(h.text).indexOf(lex.fold(a));
        say(`  • ${h.heading}  …${h.text.slice(Math.max(0, i - 60), i + 100).replace(/\s+/g, ' ')}…`);
      }
      if (hits.length > 20) say(`  … i ${hits.length - 20} więcej.`);
      say(ver);
    }
    await offerSave(`${slug(chosen.label).slice(0, 25)}_art_${a}`);
  }
}

// ── 6. Orzeczenia (SAOS) ─────────────────────────────────────────────────────

async function menuJudgments() {
  console.log('\nWpisz sygnaturę (np. „III CZP 27/19") albo hasło (np. „gwarancja bankowa").');
  const q = await ask('> ');
  if (!q) return;
  const isSig = /\b[IVXL]*\s*[A-Za-z]{1,4}(\/[A-Za-z]{1,3})?\s+\d+\/\d{2,4}\b/.test(q);
  buffer = [];
  const items = await lex.searchJudgments(isSig ? { caseNumber: q, limit: 10 } : { all: q, limit: 15 });
  say(`\n▶ SAOS — ${isSig ? 'sygnatura' : 'hasło'} „${q}": pokazuję ${items.length} (najnowsze pierwsze)`);
  if (!items.length && isSig) {
    say('   Brak w SAOS. To NIE znaczy, że orzeczenie nie istnieje — SAOS nie zawiera wszystkiego.');
    say('   Sprawdź: sn.pl (SN), orzeczenia.nsa.gov.pl (sądy adm.), orzeczenia.ms.gov.pl (sądy powszechne),');
    say('   trybunal.gov.pl (TK).');
  }
  for (const j of items) {
    const sig = (j.courtCases || []).map((c) => c.caseNumber).join(', ');
    const court = j.division?.court?.name || j.division?.name || j.courtType;
    const snippet = String(j.textContent || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').slice(0, 180);
    say(`\n   • ${sig} — ${court} — ${j.judgmentDate} — ${j.judgmentType || ''}`);
    say(`     https://www.saos.org.pl/judgments/${j.id}`);
    if (snippet) say(`     …${snippet}…`);
  }
  say(`\n✅ [VER: saos.org.pl API, ${lex.today()}] — przed powołaniem w piśmie sprawdź treść w bazie sądu.`);
  await offerSave(`orzeczenia_${q}`);
}

// ── Menu główne ──────────────────────────────────────────────────────────────

const MENU = [
  ['Znajdź ustawę lub rozporządzenie po nazwie', menuFindAct],
  ['Co się zmieniło w danym akcie? (nowelizacje, nowy tekst jednolity)', menuChanges],
  ['Projekty ustaw w Sejmie (na jakim są etapie)', menuProjects],
  ['Przegląd zmian we wszystkich śledzonych aktach (raport)', menuOverview],
  ['Przeczytaj artykuł z lokalnej bazy (bez internetu)', menuArticle],
  ['Orzeczenia sądów — hasło lub sygnatura (SAOS)', menuJudgments],
];

async function main() {
  console.log('\n╔══════════════════════════════════════════════════════════╗');
  console.log('║  LEX-ASSISTANT — wyszukiwarka przepisów i zmian w prawie  ║');
  console.log('╚══════════════════════════════════════════════════════════╝');
  console.log('Źródła: Dziennik Ustaw (ELI), Sejm RP, SAOS. Wyniki zapiszesz w folderze raporty/.');
  for (;;) {
    console.log('');
    MENU.forEach(([label], i) => console.log(`  ${i + 1}. ${label}`));
    console.log('  0. Zakończ');
    const a = await ask('\nWybierz numer: ');
    if (a === '0' || a.toLowerCase() === 'q' || a.toLowerCase() === 'koniec') break;
    const item = MENU[Number(a) - 1];
    if (!item) { console.log('Wpisz numer od 0 do 6.'); continue; }
    try {
      buffer = [];
      await item[1]();
    } catch (err) {
      handleError(err);
    }
  }
  rl.close();
  console.log('Do zobaczenia.');
}

rl.on('SIGINT', () => { console.log('\nPrzerwano.'); process.exit(0); });
main().catch((e) => { handleError(e); process.exit(1); });
