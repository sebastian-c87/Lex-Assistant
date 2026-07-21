---
name: aktualizacja-aktow
description: Sprawdza aktualność aktów z config.json względem ELI (poprzez changeDate), pobiera i konwertuje nowe wersje. Aktywuj gdy użytkownik — pyta o świeżość aktów, "czy są nowe wersje", "sprawdź czy nie ma nowelizacji", "zaktualizuj bazę", "ile lat ma nasza kopia", chce dodać nowy akt do śledzenia, lub gdy `manifest.json` pokazuje ostatnie pobranie starsze niż 3 miesiące. Cykl konserwacyjny.
---

# Aktualizacja aktów lokalnych

## Cel

Utrzymanie lokalnej kopii aktów w synchronizacji z ELI Sejm — inkrementalnie, bez zbędnego pobierania.

Mechanika: `fetch-laws.js` porównuje pole `changeDate` z ELI z zapisanym w `manifest.json`; pobiera tylko przy zmianie.

## Sprawdzenie bez modyfikacji (tryb `--check`)

```bash
node fetch-laws.js --check
```

Wypisuje dla każdego aktu z `config.json`:
- `✓ aktualne` — jeśli lokalne changeDate = zdalne
- `⟳ ZMIANA` — jeśli różnica; nic nie pobiera, tylko raportuje

Używaj gdy chcesz zorientować się co jest do zaktualizowania.

## Pobranie / aktualizacja (tryb domyślny)

```bash
node fetch-laws.js
```

Dla każdego aktu:
1. Pobiera metadane ELI
2. Porównuje `changeDate`
3. Jeśli zmiana lub brak lokalny — pobiera HTML (preferowany) lub PDF
4. Zapisuje plik + `.meta.json`
5. Aktualizuje `manifest.json`

## Konwersja po pobraniu (obowiązkowa dla świeżo pobranych)

```bash
python tools/html_act_to_md.py akty/<kategoria>/<plik>.html
python tools/pdf_act_to_md.py akty/<kategoria>/<plik>.pdf
```

Konwersja aktualizuje `.md` i `.index.json`.

## Dodanie nowego aktu do śledzenia

1. Ustal ELI (skill `eli-weryfikacja` — pamiętaj o KROK 2B!)
2. Dodaj wpis do `config.json`:
   ```json
   {
     "publisher": "DU",
     "year": <rok>,
     "pos": <pozycja>,
     "category": "<kategoria>",
     "label": "<opis>"
   }
   ```
   `category` staje się nazwą katalogu w `akty/<category>/`.
3. Uruchom `node fetch-laws.js`
4. Uruchom właściwy konwerter (`html_act_to_md.py` / `pdf_act_to_md.py`)
5. Dodaj moduł do `tools/dump_articles.py` w słowniku `INDEXES`:
   ```python
   '<krotki_alias>': 'akty/<category>/<nazwa>.index.json',
   ```
6. Zaktualizuj skill `odczyt-aktu` (tabela modułów) i pamięć projektu (`reference_akty_lokalne.md`)

## Kiedy uruchamiać rutynowo

- **Co miesiąc** — dla aktów aktywnie wykorzystywanych (KSH, u.dz.l., u.p.p. — częste nowelizacje)
- **Przed każdą ważną poradą klienta** — jednorazowy `--check` na dziedzinę pytania
- **Po ogłoszeniu istotnej zmiany** — jeśli w mediach / na LEX/Legalis pojawi się info o nowelizacji, sprawdź od razu

## Uwagi o parsowaniu PDF

Konwerter `pdf_act_to_md.py` używa `pdfplumber` z regexem. Znane ograniczenia:
- W nagłówku obwieszczenia i w załączniku pojawiają się te same numery Art. — pierwsze wystąpienia (obwieszczenie) zostają nadpisane przez załącznik. Efekt: `index.json` zawiera artykuły z ZAŁĄCZNIKA (tekstu jednolitego), a nie z sekcji obwieszczenia. To pożądane.
- Nagłówki sekcji (Tytuł/Dział/Rozdział) po parsowaniu mogą wymagać korekt — sprawdź `.md` po konwersji
- Przypisy dolne i „Dziennik Ustaw – N – Poz. NNN" częściowo filtrowane, ale nie zawsze idealnie

Jeśli konwersja daje słabą jakość — sprawdź `.md`, ewentualnie dostosuj regex w konwerterze.

## Uwagi o parsowaniu HTML

Konwerter `html_act_to_md.py` używa BeautifulSoup i struktury `unit_titl / unit_bran / unit_chpt / unit_arti / unit_para / unit_pint / unit_pass / unit_lett` charakterystycznej dla ELI HTML. Wykrywa artykuły przez `data-id="arti_N"`. Znane: dobrze wychodzi.

## Weryfikacja poprawności po pobraniu

Zawsze porównaj `title` z `.meta.json` z tym, czego oczekiwałeś. **Historyczne błędy w tym projekcie:**
- DU/2024/1571 miało być psycholog — okazał się PSWiN
- DU/2025/540 miało być u.dz.l. — okazał się rozp. MKiDN o szkołach

**Zawsze KROK 2B po świeżym pobraniu.**

## BOM w plikach źródłowych — kruczek

Historyczne pliki `config.json` i `fetch-laws.js` z pierwotnego repo miały BOM (UTF-8 z BOM). Node.js tego nie łyka:
```bash
perl -i -pe 's/^\xef\xbb\xbf//' <plik>
```
Sprawdzaj jeśli po klonowaniu skrypty nie startują.

## Powiązania

- `eli-weryfikacja` — ustalenie ELI dla nowego aktu (obowiązkowo KROK 2B)
- `odczyt-aktu` — użycie zaktualizowanego indeksu
- `prawo-hardgate` — wymaga aktualnych źródeł
