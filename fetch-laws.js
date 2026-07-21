#!/usr/bin/env node
/**
 * fetch-laws.js
 * Pobiera i aktualizuje lokalną bazę aktów prawnych ze źródła Sejm API (ELI API)
 * — http://api.sejm.gov.pl
 *
 * Dla każdego aktu z config.json:
 *  - pobiera aktualne metadane (status, data ostatniej zmiany)
 *  - jeśli akt się zmienił od ostatniego uruchomienia (lub jest pobierany po raz pierwszy),
 *    pobiera pełny tekst (HTML jeśli dostępny, w przeciwnym razie PDF)
 *  - zapisuje plik tekstowy + plik .meta.json z metadanymi i linkiem źródłowym
 *  - aktualizuje manifest.json na potrzeby wykrywania zmian przy kolejnych uruchomieniach
 *
 * Wymaga Node.js 18+ (wbudowany fetch).
 *
 * Użycie:
 *   node fetch-laws.js            // pobiera / aktualizuje wszystkie akty z config.json
 *   node fetch-laws.js --check    // tylko sprawdza czy są zmiany, nic nie zapisuje
 */

const fs = require('fs');
const path = require('path');

const CONFIG_PATH = path.join(__dirname, 'config.json');
const OUT_DIR = path.join(__dirname, 'akty');
const MANIFEST_PATH = path.join(__dirname, 'manifest.json');
const API_BASE = 'http://api.sejm.gov.pl/eli/acts';

function loadJSON(p, fallback) {
  try {
    return JSON.parse(fs.readFileSync(p, 'utf8'));
  } catch {
    return fallback;
  }
}

function saveJSON(p, data) {
  fs.writeFileSync(p, JSON.stringify(data, null, 2), 'utf8');
}

async function fetchActMeta(publisher, year, pos) {
  const url = `${API_BASE}/${publisher}/${year}/${pos}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Błąd pobierania metadanych ${url}: HTTP ${res.status}`);
  return res.json();
}

async function fetchActText(publisher, year, pos, meta) {
  if (meta.textHTML) {
    const url = `${API_BASE}/${publisher}/${year}/${pos}/text.html`;
    const res = await fetch(url);
    if (res.ok) return { type: 'html', content: await res.text() };
  }
  if (meta.textPDF) {
    const url = `${API_BASE}/${publisher}/${year}/${pos}/text.pdf`;
    const res = await fetch(url);
    if (res.ok) {
      const buf = Buffer.from(await res.arrayBuffer());
      return { type: 'pdf', content: buf };
    }
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

async function processAct(entry, manifest) {
  const { publisher, year, pos, category, label } = entry;
  const key = `${publisher}/${year}/${pos}`;
  console.log(`→ Sprawdzam: ${label} (${key})`);

  const meta = await fetchActMeta(publisher, year, pos);
  const prevChangeDate = manifest[key]?.changeDate;

  if (prevChangeDate && prevChangeDate === meta.changeDate) {
    console.log(`  ✓ Bez zmian (ostatnia aktualizacja: ${meta.changeDate})`);
    return;
  }

  console.log(`  ⟳ ${prevChangeDate ? 'Wykryto zmianę' : 'Pierwsze pobranie'} — pobieram treść...`);
  const text = await fetchActText(publisher, year, pos, meta);
  if (!text) {
    console.warn(`  ⚠ Brak dostępnego tekstu (ani HTML ani PDF) dla ${key}`);
    return;
  }

  const dir = path.join(OUT_DIR, category);
  fs.mkdirSync(dir, { recursive: true });
  const base = safeName(label);
  const ext = text.type === 'html' ? 'html' : 'pdf';
  const filePath = path.join(dir, `${base}.${ext}`);
  fs.writeFileSync(filePath, text.content);

  const metaPath = path.join(dir, `${base}.meta.json`);
  saveJSON(metaPath, {
    label,
    title: meta.title,
    status: meta.status,
    displayAddress: meta.displayAddress,
    promulgation: meta.promulgation,
    changeDate: meta.changeDate,
    type: meta.type,
    ELI: meta.ELI,
    sourceUrl: `https://eli.gov.pl/eli/${publisher}/${year}/${pos}`,
    lastFetched: new Date().toISOString(),
  });

  manifest[key] = {
    label,
    category,
    changeDate: meta.changeDate,
    status: meta.status,
    lastFetched: new Date().toISOString(),
    file: path.relative(__dirname, filePath),
  };

  console.log(`  ✓ Zapisano: ${path.relative(__dirname, filePath)}`);
}

async function main() {
  const checkOnly = process.argv.includes('--check');
  const config = loadJSON(CONFIG_PATH, []);
  const manifest = loadJSON(MANIFEST_PATH, {});

  if (!config.length) {
    console.error('Brak config.json lub pusta konfiguracja.');
    process.exit(1);
  }

  for (const entry of config) {
    try {
      if (checkOnly) {
        const meta = await fetchActMeta(entry.publisher, entry.year, entry.pos);
        const key = `${entry.publisher}/${entry.year}/${entry.pos}`;
        const prev = manifest[key]?.changeDate;
        const changed = prev && prev !== meta.changeDate;
        console.log(`${changed ? '⟳ ZMIANA' : '✓ aktualne'} — ${entry.label} (status: ${meta.status}, zmiana: ${meta.changeDate})`);
      } else {
        await processAct(entry, manifest);
      }
    } catch (err) {
      console.error(`✗ Błąd dla "${entry.label}": ${err.message}`);
    }
  }

  if (!checkOnly) {
    saveJSON(MANIFEST_PATH, manifest);
    console.log('\nGotowe. Manifest zaktualizowany.');
  } else {
    console.log('\nSprawdzanie zakończone (tryb --check, nic nie zapisano).');
  }
}

main();