---
name: odczyt-aktu
description: Wyciąga konkretny artykuł z lokalnie skonwertowanego aktu prawnego (KSH, ustawa o działalności leczniczej, o prawach pacjenta, o zawodzie psychologa 2001/2026, o ochronie zdrowia psychicznego). Aktywuj gdy użytkownik pyta o treść konkretnego przepisu — triggery: "co mówi art. X", "jak brzmi art. X", "przeczytaj art. X", "podaj treść art.", "art. X KSH", "art. X u.dz.l.", "art. X u.p.p.", nazwa aktu + numer. Zwraca dosłowny cytat + oznaczenie VER. Preferuj TĘ ścieżkę zamiast ELI API dla aktów już w naszych indeksach.
---

# Odczyt artykułu z lokalnego indeksu

## Dostępne akty (moduły skryptu)

| Moduł | Akt | ELI |
|---|---|---|
| `ksh` | Kodeks spółek handlowych | DU/2024/18 |
| `udzl` | Ustawa o działalności leczniczej | DU/2026/156 |
| `pp` | Ustawa o prawach pacjenta i RPP | DU/2024/581 |
| `psy2001` | Ustawa o zawodzie psychologa 2001 (t.j. 2019) — obowiązuje do 19.05.2028 | DU/2019/1026 |
| `psy2026` | Ustawa o zawodzie psychologa 2026 — kaskada wejścia | DU/2026/187 |
| `ozp` | Ustawa o ochronie zdrowia psychicznego | DU/2024/917 |

## Użycie

```bash
python tools/dump_articles.py <moduł> <numery...>
```

**Przykłady:**
```bash
python tools/dump_articles.py ksh 151 154 157 163
python tools/dump_articles.py udzl 4 5 100 103
python tools/dump_articles.py pp 13 14 26 29
python tools/dump_articles.py ksh 201 202 208 210 psy2026 5 12
```

Można mieszać moduły w jednym wywołaniu — słowa kluczowe (`ksh`, `udzl`, itd.) resetują kontekst.

## Konwencja kluczy artykułów

- `arti_N` — Art. N. (np. `arti_151` = Art. 151)
- `arti_N_M` — artykuł z liczbą (np. `arti_106_1` = Art. 106¹, `arti_551_1` = Art. 551¹)

Skrypt akceptuje samą liczbę (`151`) — sam dopisuje prefix.

## Workflow

1. Zidentyfikuj o który akt i który artykuł pyta użytkownik
2. Uruchom `python tools/dump_articles.py` z odpowiednimi argumentami
3. Zwróć **dosłowny cytat** (poziom FRAGMENT) z oznaczeniem: `✅ [VER: api.sejm.gov.pl ELI DU/RRRR/NNN, <data z manifest.json>]`
4. Jeśli artykuł ma podpunkty (§, punkty, litery) — zachowaj strukturę wcięć jak w dumpie
5. Jeśli klucza NIE MA (BRAK) — sprawdź czy nie jest to `arti_N_M` (np. Art. 176 z liczbą); jeśli nadal brak — skierować do `eli-weryfikacja` bo prawdopodobnie akt się zmienił i wymaga świeżego pobrania

## Aktualizacja daty pobrania

Data z znacznika `[VER: …, YYYY-MM-DD]` pochodzi z `manifest.json` (pole `lastFetched` konkretnego aktu). Sprawdź świeżość:

```bash
cat manifest.json | python -m json.tool | head -50
```

Jeśli od pobrania minęło > 3 miesiące — rozważ `aktualizacja-aktow`.

## Kruczek

Ten skill zwraca **surowy tekst**. Nie interpretuje. Interpretacja to zadanie odpowiedzi po skorzystaniu z cytatu.

Nie używaj gdy akt NIE jest w naszych indeksach — wtedy `eli-weryfikacja` (ELI API bezpośrednio).

## Powiązania

- `prawo-hardgate` — obowiązkowy pryzmat cytowania
- `eli-weryfikacja` — dla aktów spoza lokalnych indeksów
- `aktualizacja-aktow` — gdy indeks jest nieaktualny
