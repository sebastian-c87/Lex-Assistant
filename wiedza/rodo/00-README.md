# Baza wiedzy: RODO — obszar ogólny

Obszar przekrojowy, niezwiązany z jedną branżą. Powstał z pytania o inspektora ochrony danych i o obowiązki kancelarii adwokackiej, ale rozdział 01 obsługuje dowolną działalność.

## Spis rozdziałów

| # | Plik | Zakres |
|---|---|---|
| 01 | [Kogo i jakich działalności dotyczy RODO](01-zakres-stosowania-rodo.md) | Zakres przedmiotowy i terytorialny, wyłączenia, trzy role (administrator / procesor / odbiorca), **trzy warstwy natężenia obowiązków**, siedem najczęstszych mitów, dwa progi kar |
| 02 | [Kancelaria adwokacka jako JDG](02-kancelaria-adwokacka-jdg.md) | Pięć procesów przetwarzania w kancelarii, **tajemnica adwokacka a RODO** (art. 90, art. 14 ust. 5 lit. d), obowiązkowy rejestr czynności, **strona www z formularzem na hostingu** — cztery warstwy zgodności, checklista wdrożeniowa w 6 krokach |
| 03 | [Źródła i akty](03-zrodla-i-akty.md) | Status aktów w bazie, dlaczego RODO nie zostało pobrane, jak je pobrać po odblokowaniu, mapa przepisów, 35 źródeł urzędowych |

Powiązany rozdział w obszarze medycznym: [`spolki-medyczne/14-inspektor-ochrony-danych`](../spolki-medyczne/14-inspektor-ochrony-danych.md) — kiedy IOD jest obowiązkowy, obowiązki podmiotu, wymagania wobec osoby, kary. Treść jest uniwersalna, mimo umiejscowienia w obszarze medycznym.

## ⚠️ Status: RODO nie jest jeszcze w lokalnej bazie aktów

To najważniejsza informacja o tym obszarze. **Żaden z rozdziałów nie jest oparty na tekście aktu odczytanym z `akty/`** — bo polityka sieciowa środowiska blokuje wszystkie oficjalne źródła:

```
eur-lex.europa.eu        → 403 na CONNECT (policy denial)
publications.europa.eu   → 403
op.europa.eu             → 403
data.europa.eu           → 403
isap.sejm.gov.pl         → 403
eli.gov.pl               → 403
uodo.gov.pl              → 403
```

Sprawdzono także Dysk Google użytkownika — nie zawiera kopii aktu. Świadomie **nie pobrano** RODO z nieoficjalnego źródła: zasada naczelna projektu wymaga bazy oficjalnej, a nieoficjalna kopia nie przechodzi KROKU 2B.

Konsekwencja: **wszystkie przepisy w tym obszarze mają znacznik ⚠️**, z podaniem źródła urzędowego (UODO, PARP, samorząd adwokacki) i konkretnego przepisu do sprawdzenia. Znacznik ✅ pojawia się wyłącznie tam, gdzie przepis pochodzi z aktów już pobranych — np. ustawa o prawach pacjenta.

## Jak pobrać RODO

`fetch-laws.js` **obsługuje już EUR-Lex** — rozszerzony 2026-07-29, bo ELI obejmuje wyłącznie polskie Dzienniki Ustaw i aktu unijnego nie pobierze.

1. W `claude.ai/code` → edycja środowiska → **Network access → Custom → Allowed domains**, dodaj:
   ```
   api.sejm.gov.pl
   isap.sejm.gov.pl
   eli.gov.pl
   eur-lex.europa.eu
   ```
   Zaznacz „Also include default list of common package managers". Uruchom **nową** sesję.
2. Następnie:
   ```bash
   node fetch-laws.js --diag
   node fetch-laws.js --resolve --write   # ustawy krajowe
   node fetch-laws.js                     # w tym RODO z EUR-Lex po CELEX
   ```

Wpis RODO w `config.json` ma postać `{"source": "eurlex", "celex": "02016R0679", ...}`. Bramka KROK 2B działa na treści dokumentu — jeżeli fraza z `expectTitle` nie wystąpi, plik nie zostanie zapisany. Szczegóły: [03-zrodla-i-akty](03-zrodla-i-akty.md).

## Akty składające się na ten obszar

| Akt | Rola |
|---|---|
| **RODO** — rozp. (UE) 2016/679 | warstwa podstawowa; CELEX 02016R0679 (wersja skonsolidowana) |
| **Ustawa o ochronie danych osobowych** z 10.05.2018 | przepisy krajowe: IOD, postępowanie, kontrola, sankcje |
| **Prawo komunikacji elektronicznej** z 12.07.2024 | cookies (art. 399) — **zastąpiło Prawo telekomunikacyjne od 10.11.2024** |
| **Ustawa o świadczeniu usług drogą elektroniczną** | regulamin, informacja handlowa |
| **Prawo o adwokaturze** | tajemnica adwokacka, do której odsyła art. 90 RODO |
| Kodeks pracy (art. 22¹) | dane kandydatów i pracowników |
| Ustawy sektorowe ochrony zdrowia | patrz obszar `spolki-medyczne/` |

Wszystkie są w `config.json` i pobiorą się po odblokowaniu domen.
