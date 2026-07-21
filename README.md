# Lex-Assistant

Warsztat prawny do obsługi zagadnień polskiego prawa — akty prawne (ELI Sejm) pobrane lokalnie + tematyczna baza wiedzy + workflow bez halucynacji.

## Co zawiera

- `akty/` — teksty jednolite pobrane z api.sejm.gov.pl/eli (HTML/PDF) + skonwertowane wersje MD i indeksy JSON artykułów. Obecnie: KSH, ustawa o działalności leczniczej, o prawach pacjenta, o ochronie zdrowia psychicznego, o zawodzie psychologa (2001 + 2026 nowa)
- `wiedza/spolki-medyczne/` — 13-częściowa baza wiedzy o spółce z o.o. świadczącej usługi medyczne (gabinet psychologa): podmiot leczniczy, zakładanie, udziały, zarząd, wynagrodzenia, aport z JDG, rejestracja RPWDL/KRS, RODO, prawa pacjenta, okres przejściowy psycholog 2026–2028, tajemnica, checklisty
- `tools/` — konwertery HTML/PDF → Markdown+JSON, narzędzie `dump_articles.py` do doraźnych odczytów
- `fetch-laws.js` — skrypt pobierający i aktualizujący akty z ELI (Node.js 18+)
- `config.json` — lista aktów do śledzenia
- `manifest.json` — historia pobrań (do inkrementalnych aktualizacji)
- `Lex-Machina/` — **submoduł** https://github.com/michaleiatrak-star/Lex-Machina — referencyjny system skilli prawniczych (GPL v3), z którego pochodzą reguły HARDGATE (weryfikacja online każdego przepisu, kontrakt sygnatur FOUND/NOT_FOUND/AMBIGUOUS)

## Klonowanie na inne urządzenie

```bash
git clone --recursive https://github.com/sebastian-c87/Lex-Assistant.git
cd Lex-Assistant
```

Flag `--recursive` pobierze też submoduł Lex-Machina.

Jeśli sklonowałeś bez `--recursive`:
```bash
git submodule update --init --recursive
```

## Aktualizacja aktów

```bash
node fetch-laws.js         # pobiera / aktualizuje wszystko z config.json
node fetch-laws.js --check # tylko sprawdza zmiany w ELI, nic nie zapisuje
```

Po pobraniu nowych aktów HTML/PDF — konwersja:
```bash
python tools/html_act_to_md.py akty/kategoria/plik.html
python tools/pdf_act_to_md.py akty/kategoria/plik.pdf
```

## Szybki odczyt artykułu z bazy

```bash
python tools/dump_articles.py ksh 151 154 157 163
python tools/dump_articles.py udzl 4 5 100 103
```

Dostępne moduły: `ksh` `udzl` `pp` `psy2001` `psy2026` `ozp`.

## Wymagania

- Node.js 18+ (dla `fetch-laws.js` — używa wbudowanego `fetch`)
- Python 3.9+ z pakietami: `beautifulsoup4 lxml pdfplumber`

```bash
pip install beautifulsoup4 lxml pdfplumber
```

## Zasada naczelna (z Lex-Machina PRAWO-HARDGATE)

Nic z pamięci. Każdy artykuł, numer Dz.U., termin, kwota, sygnatura — z lokalnego pliku indeksowego lub z api.sejm.gov.pl/eli w tym samym kroku. Format weryfikacji: `✅ [VER: api.sejm.gov.pl ELI DU/RRRR/NNN, data]`.

## Licencja

Autorski kod i baza wiedzy: brak licencji dodanej (repo prywatne, wszystkie prawa zastrzeżone).
Submoduł `Lex-Machina/` — na licencji GPL v3, zgodnie z oryginalnym repo.
