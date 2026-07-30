# Baza wiedzy: RODO — obszar ogólny

Obszar przekrojowy, niezwiązany z jedną branżą. Powstał z pytania o inspektora ochrony danych i o obowiązki kancelarii adwokackiej, ale rozdział 01 obsługuje dowolną działalność.

## ✅ Status: akty są w lokalnej bazie (od 2026-07-29)

**To najważniejsza zmiana wobec pierwszej wersji tego obszaru.** Do 2026-07-28 żaden rozdział nie był oparty na tekście aktu — polityka sieciowa środowiska blokowała `eur-lex.europa.eu`, `uodo.gov.pl`, `isap.sejm.gov.pl` i `eli.gov.pl` (proxy odpowiadało `403` na CONNECT). Dlatego wszystko miało znacznik ⚠️.

Blokada została zdjęta. Pobrano i zindeksowano **11 aktów**: RODO w dwóch wersjach (skonsolidowana + źródło motywów), u.o.d.o. z trzema nowelizacjami z 2026 r., Prawo o adwokaturze, uśude, PKE z przepisami wprowadzającymi oraz ustawę wdrożeniową z 2019 r. Rozdziały 01–04 są **przepisane na cytatach z tych plików** i mają znacznik ✅ z ELI/CELEX i datą.

Pełny wykaz z kluczami do `dump_articles.py`, pułapkami i stanem aktualności: [03-zrodla-i-akty.md](03-zrodla-i-akty.md).

## Spis rozdziałów

| # | Plik | Zakres |
|---|---|---|
| 01 | [Kogo i jakich działalności dotyczy RODO](01-zakres-stosowania-rodo.md) | zakres przedmiotowy i terytorialny, cztery wyłączenia z art. 2 ust. 2, trzy role, **trzy warstwy natężenia obowiązków**, osiem mitów, dwa progi kar + odpowiedzialność karna z u.o.d.o. |
| 02 | [Kancelaria adwokacka jako JDG](02-kancelaria-adwokacka-jdg.md) | pięć procesów przetwarzania, **tajemnica adwokacka a RODO** (art. 90 RODO → art. 16a–16c PoA, art. 14 ust. 5 lit. d), **retencja 10 lat z art. 16c i nakaz usunięcia**, obowiązkowy rejestr czynności, kontrola UODO, minimum dokumentacyjne |
| 03 | [Źródła i akty](03-zrodla-i-akty.md) | wykaz aktów z ELI/CELEX, **trzy pułapki bazy**, nowelizacje po tekstach jednolitych (w tym zmiana art. 6 ust. 4 PoA od 1.10.2026), mapa przepisów, dokumenty home.pl, dług weryfikacyjny |
| 04 | [Strona www z formularzem na home.pl](04-strona-www-formularz-home-pl.md) | cztery warstwy: **powierzenie hostingu z analizą wzorca home.pl**, formularz (podstawa, art. 13, minimalizacja), **cookies — art. 399 PKE**, **marketing — art. 398 PKE**, obowiązki z uśude w tym **art. 5 ust. 5 dla zawodów regulowanych**, checklista |

Powiązany rozdział w obszarze medycznym: [`spolki-medyczne/14-inspektor-ochrony-danych`](../spolki-medyczne/14-inspektor-ochrony-danych.md) — kiedy IOD jest obowiązkowy, obowiązki podmiotu, wymagania wobec osoby, kary. Treść uniwersalna, mimo umiejscowienia w obszarze medycznym.

## Trzy rzeczy, o których łatwo się pomylić w tym obszarze

1. **Cookies to nie RODO.** Podstawą jest **art. 399 PKE**, a marketingu e-mail — **art. 398 PKE**. Art. 10 uśude jest **uchylony**, art. 173 Prawa telekomunikacyjnego — nie obowiązuje od 10.11.2024. Wzory z internetu masowo powołują nieaktualne przepisy.
2. **Wersja skonsolidowana RODO nie ma motywów**, a jej CELEX wymaga sufiksu daty (`02016R0679-20160504`). Artykuły z jednego pliku, motywy z drugiego — patrz rozdział 03.
3. **t.j. u.o.d.o. z 2019 r. nie jest tekstem aktualnym** — po nim weszły trzy nowelizacje z 2026 r. Żadna nie dotyka przepisów o IOD ani sankcji, ale trzeba o nich wiedzieć przed cytowaniem.

## Jak odświeżyć ten obszar

```bash
node fetch-laws.js --diag     # test łączności z ELI
node fetch-laws.js --check    # co się zmieniło od ostatniego pobrania
node fetch-laws.js            # pobranie zmienionych aktów
python3 tools/html_act_to_md.py akty/<kat>/<plik>.html     # ELI HTML
python3 tools/pdf_act_to_md.py akty/<kat>/<plik>.pdf       # ELI PDF
python3 tools/eurlex_act_to_md.py akty/rodo/<plik>.html    # EUR-Lex
```

Wymagane pakiety Python: `beautifulsoup4`, `lxml`, `pdfplumber`.
