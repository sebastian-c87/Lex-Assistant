/**
 * tools/lex-api.js — wspólny klient źródeł urzędowych dla fetch-laws.js i szukaj.js
 *
 * Źródła (wszystkie publiczne, BEZ klucza API):
 *   - ELI API (Dziennik Ustaw / Monitor Polski):  https://api.sejm.gov.pl/eli
 *   - Sejm API (projekty ustaw, druki, procesy):   https://api.sejm.gov.pl/sejm
 *   - SAOS (orzeczenia sądów):                      https://www.saos.org.pl/api
 *
 * Ten moduł niczego nie zapisuje na dysku — tylko pobiera i porządkuje dane.
 */

const ELI = 'https://api.sejm.gov.pl/eli/acts';
const SEJM = 'https://api.sejm.gov.pl/sejm';
const SAOS = 'https://www.saos.org.pl/api';

const BACKOFF_MS = [1500, 3000, 6000];

/**
 * Wbudowany fetch w Node nie czyta HTTPS_PROXY samoczynnie — trzeba NODE_USE_ENV_PROXY=1
 * (Node 22.21+). Wywołaj na samym początku skryptu; zwraca true, jeśli proces został
 * uruchomiony ponownie (wtedy wywołujący powinien zakończyć działanie).
 */
function reexecWithProxyIfNeeded(scriptPath) {
  if (!process.env.HTTPS_PROXY || process.env.NODE_USE_ENV_PROXY) return false;
  const [maj, min] = process.versions.node.split('.').map(Number);
  if (maj < 22 || (maj === 22 && min < 21)) return false;
  const { spawnSync } = require('child_process');
  const res = spawnSync(process.execPath, [scriptPath, ...process.argv.slice(2)], {
    stdio: 'inherit',
    env: { ...process.env, NODE_USE_ENV_PROXY: '1', NODE_NO_WARNINGS: '1' },
  });
  process.exit(res.status ?? 1);
}

async function get(url, { text = false } = {}) {
  let lastErr;
  for (let attempt = 0; attempt <= BACKOFF_MS.length; attempt++) {
    try {
      const res = await fetch(url, { headers: { Accept: text ? '*/*' : 'application/json' } });
      if (res.ok) return text ? res.text() : res.json();
      const e = new Error(`HTTP ${res.status} dla ${url}`);
      e.httpStatus = res.status;
      if (res.status < 500 && res.status !== 429) throw e; // trwały błąd — nie ponawiaj
      lastErr = e;
    } catch (err) {
      if (err.httpStatus && err.httpStatus < 500 && err.httpStatus !== 429) throw err;
      lastErr = err;
    }
    if (attempt < BACKOFF_MS.length) await new Promise((r) => setTimeout(r, BACKOFF_MS[attempt]));
  }
  throw lastErr;
}

const today = () => new Date().toISOString().slice(0, 10);
const norm = (s) => String(s || '').toLowerCase().replace(/\s+/g, ' ').trim();
/** Do wyszukiwania po frazie użytkownika: bez polskich znaków (ł→l itd.) i bez wielkości liter. */
const fold = (s) => norm(s).normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ł/g, 'l');

function parseEli(s) {
  const m = /^(DU|MP)\/(\d{4})\/(\d+)$/i.exec(String(s || '').trim());
  return m ? { publisher: m[1].toUpperCase(), year: Number(m[2]), pos: Number(m[3]) } : null;
}

/** Przyjmuje "DU/2024/18", "Dz.U. 2024 poz. 18", "Dz. U. z 2024 r. poz. 18", "2024/18". */
function eliFromUserInput(input) {
  const s = String(input || '').trim();
  const direct = parseEli(s);
  if (direct) return `${direct.publisher}/${direct.year}/${direct.pos}`;
  const mp = /M\.?\s*P\.?/i.test(s) ? 'MP' : 'DU';
  const m = /(\d{4})\D+?(?:poz\.?\s*)?(\d+)\s*$/i.exec(s);
  return m ? `${mp}/${m[1]}/${m[2]}` : null;
}

const actMeta = (eli) => get(`${ELI}/${eli}`);
const actReferences = (eli) => get(`${ELI}/${eli}/references`);

async function searchActs(title, { type, inForce, limit = 50 } = {}) {
  const p = new URLSearchParams({ title, limit: String(limit) });
  if (type) p.set('type', type);
  if (inForce) p.set('inForce', 'IN_FORCE');
  const data = await get(`${ELI}/search?${p}`);
  return data.items || [];
}

const byAddr = (a, b) => a.year - b.year || a.pos - b.pos;

/**
 * Analiza zmian aktu BAZOWEGO (pierwotnego, np. KPC = DU/1964/296).
 * Uwaga: zmiany są przypięte do aktu bazowego, NIE do obwieszczenia z tekstem jednolitym —
 * dlatego śledzimy akt bazowy.
 *
 * Zwraca:
 *   latestTj    — najnowsze obwieszczenie o t.j. (lub null)
 *   amendments  — akty zmieniające pogrupowane po ELI, z listą dat wejścia w życie
 *   afterTj     — zmiany ogłoszone PO najnowszym t.j. (nie ma ich w tekście jednolitym!)
 *   pending     — zmiany, które dopiero wejdą w życie (data > dziś)
 *   since       — zmiany ogłoszone lub wchodzące w życie od daty `since` (jeśli podana)
 *   tk          — orzeczenia TK dotyczące aktu
 */
async function analyzeChanges(baseEli, { since } = {}) {
  const refs = await actReferences(baseEli);
  const now = today();

  const tjList = (refs['Inf. o tekście jednolitym'] || []).map((r) => r.act).sort(byAddr);
  const latestTj = tjList.length ? tjList[tjList.length - 1] : null;

  const grouped = new Map();
  for (const r of refs['Akty zmieniające'] || []) {
    const a = r.act;
    if (!grouped.has(a.ELI)) {
      grouped.set(a.ELI, {
        eli: a.ELI,
        title: a.title,
        displayAddress: a.displayAddress,
        promulgation: a.promulgation || a.announcementDate || '',
        status: a.status,
        inForceDates: [],
      });
    }
    if (r.date) grouped.get(a.ELI).inForceDates.push(r.date);
  }
  const amendments = [...grouped.values()]
    .map((a) => ({ ...a, inForceDates: [...new Set(a.inForceDates)].sort() }))
    .sort((a, b) => (a.promulgation || '').localeCompare(b.promulgation || ''));

  // Obwieszczenie obejmuje zmiany do dnia jego wydania (announcementDate). Zmiany ogłoszone
  // później NIE są w tekście jednolitym — liczymy od daty obwieszczenia, nie od publikacji.
  const tjDate = latestTj?.announcementDate || latestTj?.promulgation || '';
  const afterTj = tjDate ? amendments.filter((a) => a.promulgation > tjDate) : amendments;
  const pending = amendments.filter((a) => a.inForceDates.some((d) => d > now));
  const sinceList = since
    ? amendments.filter((a) => a.promulgation >= since || a.inForceDates.some((d) => d >= since))
    : [];
  const tk = (refs['Orzeczenie TK'] || [])
    .map((r) => ({ ...r.act, date: r.date || r.act.announcementDate || r.act.promulgation || '' }))
    .sort((a, b) => (a.date || '').localeCompare(b.date || ''));
  const tkSince = since ? tk.filter((t) => (t.date || '') >= since) : [];

  return { refs, latestTj, tjList, amendments, afterTj, pending, since: sinceList, tk, tkSince };
}

// ── Sejm: projekty ustaw ─────────────────────────────────────────────────────

let _term;
async function currentTerm() {
  if (_term) return _term;
  const terms = await get(`${SEJM}/term`);
  _term = (terms.find((t) => t.current) || terms[terms.length - 1]).num;
  return _term;
}

/** Procesy legislacyjne w bieżącej kadencji, których TYTUŁ zawiera frazę (bez wielkości liter). */
async function searchProcesses(phrase, { term, onlyBills = true } = {}) {
  term = term || (await currentTerm());
  const p = new URLSearchParams({ title: phrase, limit: '500', sort: '-processStartDate' });
  if (onlyBills) p.set('documentType', 'projekt ustawy');
  const list = await get(`${SEJM}/term${term}/processes?${p}`);
  return list
    .sort((a, b) => (b.processStartDate || '').localeCompare(a.processStartDate || ''))
    .map((x) => ({ ...x, term }));
}

/** Szczegóły procesu: ostatni etap, link do RCL (dla projektów rządowych), ELI ustawy po publikacji. */
async function processDetails(term, num) {
  const d = await get(`${SEJM}/term${term}/processes/${encodeURIComponent(num)}`);
  // Etapy najwyższego poziomu opisują przebieg najczytelniej (np. „I czytanie na posiedzeniu
  // Sejmu"); etap typu End („Odrzucono", „Wycofano") nie ma daty — bierzemy ją z poprzedniego.
  const top = d.stages || [];
  let lastDate = '';
  let lastStage = null;
  let ended = null;
  for (const st of top) {
    if (st.date) lastDate = st.date;
    if (st.stageType === 'End') ended = st.stageName;
    lastStage = { stageName: st.stageName + (st.decision ? ` — ${st.decision}` : ''), date: st.date || lastDate };
  }
  const status = d.passed ? 'UCHWALONY' : ended ? ended.toUpperCase() : 'w toku';
  return { ...d, lastStage, ended, status };
}

/** Wyszukuje projekty i dociąga szczegóły (etap, status). onlyOpen = bez uchwalonych/odrzuconych/wycofanych. */
async function searchProjectsDetailed(phrase, { term, onlyOpen = true, max = 60 } = {}) {
  const all = await searchProcesses(phrase, { term });
  const candidates = (onlyOpen ? all.filter((p) => !p.passed) : all).slice(0, max);
  const out = [];
  for (const p of candidates) {
    let d = null;
    try { d = await processDetails(p.term, p.number); } catch { /* bez szczegółów */ }
    if (onlyOpen && d?.ended) continue;
    out.push({ ...p, details: d, status: d?.status || (p.passed ? 'UCHWALONY' : 'w toku') });
  }
  return { all, list: out, truncated: (onlyOpen ? all.filter((p) => !p.passed) : all).length > max };
}

const processUrl = (term, num) =>
  `https://www.sejm.gov.pl/Sejm${term}.nsf/PrzebiegProc.xsp?nr=${encodeURIComponent(num)}`;
const printUrl = (term, num) =>
  `https://www.sejm.gov.pl/Sejm${term}.nsf/druk.xsp?nr=${encodeURIComponent(num)}`;
const eliUrl = (eli) => `https://eli.gov.pl/eli/${eli}/ogl`;
const isapUrl = (eli) => {
  const a = parseEli(eli);
  if (!a) return '';
  const id = `W${a.publisher === 'MP' ? 'MP' : 'DU'}${a.year}${String(a.pos).padStart(7, '0')}`;
  return `https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=${id}`;
};

// ── SAOS: orzeczenia ─────────────────────────────────────────────────────────

async function searchJudgments({ all, caseNumber, limit = 10 } = {}) {
  const p = new URLSearchParams({ pageSize: String(limit), sortingField: 'JUDGMENT_DATE', sortingDirection: 'DESC' });
  // Kilka słów → szukaj frazy dokładnej (inaczej SAOS łączy słowa przez LUB).
  if (all) p.set('all', /\s/.test(all.trim()) && !/"/.test(all) ? `"${all.trim()}"` : all);
  if (caseNumber) p.set('caseNumber', caseNumber);
  const d = await get(`${SAOS}/search/judgments?${p}`);
  return d.items || [];
}

module.exports = {
  ELI, SEJM, SAOS,
  reexecWithProxyIfNeeded, get, today, norm, fold, parseEli, eliFromUserInput,
  actMeta, actReferences, searchActs, analyzeChanges,
  currentTerm, searchProcesses, processDetails, searchProjectsDetailed,
  processUrl, printUrl, eliUrl, isapUrl,
  searchJudgments,
};
