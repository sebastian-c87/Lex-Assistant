---
name: prawo-hardgate
description: Meta-workflow weryfikacji prawnej bez halucynacji. Aktywuj przy KAŻDYM pytaniu prawnym — cywilnym, karnym, medycznym, spółkowym, podatkowym, RODO. Triggery — dowolne wystąpienie w treści użytkownika: "art.", "artykuł", "Dz.U.", "poz.", "kodeks", "ustawa", "rozporządzenie", "wyrok", "postanowienie", "sygnatura", "sygn. akt", "orzeczenie", "przepis", "obowiązuje", "vacatio legis", nazwa aktu (KSH, KC, KK, KPK, KPC, RODO, u.dz.l., u.p.p.), lub gdy użytkownik pyta "co mówi", "jak brzmi", "jaka jest podstawa prawna". Ładuj TEN skill przed jakąkolwiek odpowiedzią z powołaniem przepisu lub sygnatury. Uniwersalny bramkarz — nie zastępuje skilli szczegółowych, tylko wymusza zasady na wszystkich.
---

# PRAWO-HARDGATE — zasady bezwzględne

Wersja adaptowana z `Lex-Machina/Wersja stabilna rozpakowana 12.07.2026/shared/PRAWO-HARDGATE.md` (GPL v3). Obowiązuje przez całą rozmowę, nie wygasa po żadnej liczbie wiadomości.

## ZASADA NACZELNA

**ZAKAZ** podawania jakiegokolwiek przepisu, artykułu, paragrafu, ustępu, punktu, numeru Dz.U., daty aktu, brzmienia normy, stawki, terminu ustawowego, kary, sankcji lub sygnatury orzeczenia — bez uprzedniej weryfikacji **w tym samym kroku**.

Dotyczy KAŻDEJ dziedziny prawa. Nie ma trybu "szybkiego". Nie ma "jestem pewny".

## HIERARCHIA ŹRÓDEŁ (od najsilniejszego)

### POZIOM 0 — Lokalne indeksy (dla aktów w `akty/*/index.json`)

Dla aktów już pobranych i skonwertowanych — natychmiastowy dostęp do konkretnego artykułu:

```bash
python tools/dump_articles.py <akt> <numery>
# akt ∈ {ksh, udzl, pp, psy2001, psy2026, ozp}
```

Data pobrania: `manifest.json`. Cytowanie: `✅ [VER: api.sejm.gov.pl ELI DU/RRRR/NNN, YYYY-MM-DD]` gdzie data z `manifest.json`.

### POZIOM A — Strukturalne API ELI Sejm (dla aktów spoza `config.json`)

```
https://api.sejm.gov.pl/eli/acts/{DU|MP}/{rok}/{poz}                → metadane
https://api.sejm.gov.pl/eli/acts/{DU|MP}/{rok}/{poz}/references     → łańcuch t.j.
https://api.sejm.gov.pl/eli/acts/{DU|MP}/{rok}/{poz}/text.html      → pełny tekst
```

Jeśli nie znasz ELI — najpierw `eli-weryfikacja` żeby ustalić identyfikator.

### POZIOM B — SAOS / oficjalne bazy (dla orzeczeń)

- `https://www.saos.org.pl/api/search/judgments?caseNumber=<sygn>` — SAOS API
- `sn.pl`, `orzeczenia.ms.gov.pl`, `nsa.gov.pl`, `trybunal.gov.pl` — bazy oficjalne
- Kontrakt statusu: **FOUND** / **NOT_FOUND** / **AMBIGUOUS** / **OUT_OF_SCOPE** — patrz skill `saos-sygnatura`

### POZIOM C — Prawo UE

- CELLAR EUR-Lex: `https://eur-lex.europa.eu/legal-content/PL/TXT/?uri=CELEX:<celex>`
- Wersje skonsolidowane: CELEX `0{...}-{YYYYMMDD}`

### POZIOM D — web_search / web_fetch (fallback)

Tylko gdy poziomy 0/A/B/C nie zwracają odpowiedzi. Używaj do USTALENIA identyfikatora (np. ELI, sygnatury), a **treść i tak pobieraj z poziomu A/B**.

## REGUŁA AKTUALNOŚCI

Zawsze **najnowszy obowiązujący tekst jednolity**. Weryfikacja przez endpoint `/references` (typ „Tekst jednolity") — najnowszy wpis = obowiązujący t.j. NIE ustalaj t.j. przez web_search.

Format: `art. X ustawy z dnia [...] (t.j. Dz.U. z RRRR r. poz. NNN[, ze zm.])`

## KROK 2B — WERYFIKACJA PRZEDMIOTU AKTU (obowiązkowa)

**Sama zgodność numeru Dz.U. nie wystarczy.** Po znalezieniu Dz.U. RRRR/NNN:
1. Odczytaj TYTUŁ aktu (pole `title` z ELI API)
2. Porównaj z tezą, którą chcesz poprzeć
3. Jeśli tytuł nie odpowiada tezie → **⛔ NIE używaj tego Dz.U.**, wyszukaj właściwą podstawę

W tym projekcie już raz wykryto błąd tego typu: `config.json` miał DU/2024/1571 podpięte pod ustawę o zawodzie psychologa, a to okazał się t.j. Prawa o szkolnictwie wyższym i nauce. Drugi błąd: DU/2025/540 miało być u.dz.l., okazało się rozporządzeniem MKiDN.

## GRADIENT WERYFIKACJI CYTATU (z SYGNATURY / WERYFIKACJA-SLAD)

Poziom weryfikacji musi odpowiadać sile twierdzenia:

- **ISTNIENIE** — samo powołanie kotwicy (sygnatura, nr Dz.U.)
- **TREŚĆ** — parafraza („SN przyjął, że…")
- **FRAGMENT** — cytat dosłowny / pinpoint

Do dosłownego FRAGMENTU preferuj urzędowy PDF `text.pdf` z ELI (HTML→MD tracimy przypisy i formatowanie).

## FORMAT ŚLADU WERYFIKACJI

Każde powołanie w odpowiedzi opatrz jednym z:

- `✅ [VER: api.sejm.gov.pl ELI DU/RRRR/NNN, YYYY-MM-DD]` — strukturalne ELI lub lokalny indeks
- `✅ [VER: saos.org.pl API, YYYY-MM-DD]` — SAOS
- `✅ [VER: sn.pl / orzeczenia.ms.gov.pl / nsa.gov.pl / trybunal.gov.pl, YYYY-MM-DD]` — bazy oficjalne
- `✅ [VER: EUR-Lex CELEX <id>, YYYY-MM-DD]` — prawo UE
- `⚠️ [NIEWERYFIKOWANE — <powód>]` — gdy źródła niedostępne; NIGDY nie pomijaj tego oznaczenia

## SKUTKI NARUSZENIA

Halucynacja przepisu lub sygnatury = błąd dyskredytujący całą analizę. Konsekwencja: adwokat wprowadzony w błąd → ryzyko odpowiedzialności zawodowej klienta.

## ZASADY FINALNE

- **Brak numeru artykułu > błędny numer artykułu**
- **Brak sygnatury > sygnatura nieweryfikowana lub fałszywa**

Jeśli nie masz weryfikacji — powiedz TEZĘ prawną bez powoływania konkretnego przepisu ("zasada ogólna KC stanowi, że...") lub bez sygnatury ("SN w linii orzeczniczej przyjmuje, że...").

## Powiązane skille

- `odczyt-aktu` — wyciągnij konkretny artykuł z lokalnego indeksu
- `eli-weryfikacja` — ustal / zweryfikuj ELI aktu (KROK 2B)
- `saos-sygnatura` — zweryfikuj sygnaturę orzeczenia
- `prawny-router` — klasyfikacja pytania i dobór właściwej dziedziny
