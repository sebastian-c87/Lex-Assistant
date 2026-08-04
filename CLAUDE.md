# Lex-Assistant — instrukcje dla Claude

## Startuj od HANDOFF.md

Przed pierwszą odpowiedzią przeczytaj [HANDOFF.md](HANDOFF.md) — zawiera pełny kontekst projektu, reguły PRAWO-HARDGATE, mapę repo i workflow.

## Zasada naczelna (skrót)

**Zero halucynacji prawnych.** Każdy przepis / sygnatura z lokalnego pliku lub z api.sejm.gov.pl/eli w tym samym kroku. Format: `✅ [VER: <źródło>, YYYY-MM-DD]`. Nigdy nie pomijaj znacznika weryfikacji.

## Punkty startowe według pytania

| Pytanie | Otwórz najpierw |
|---|---|
| Konkretny art. X aktu z bazy | `akty/<kat>/*.index.json`, klucz `arti_X` — albo `python3 tools/dump_articles.py <klucz> X` |
| Sp. z o.o. medyczna / psychologia | `wiedza/spolki-medyczne/00-README.md` |
| RODO, dane osobowe, IOD, cookies, strona www | `wiedza/rodo/00-README.md` |
| Kancelaria adwokacka, tajemnica zawodowa | `wiedza/rodo/02-kancelaria-adwokacka-jdg.md` |
| Akt spoza bazy | `api.sejm.gov.pl/eli/acts/search?title=...` — albo dopisz do `config.json` i `node fetch-laws.js` |
| Sygnatura orzeczenia | `saos.org.pl/api` lub baza właściwa (KROK 2B) |
| Pytanie otwarte | `.claude/skills/prawny-router/SKILL.md` |

Klucze do `tools/dump_articles.py`: `ksh`, `udzl`, `pp`, `psy2001`, `psy2026`, `ozp`, `rodo`, `rodo_motywy` (klucze `motyw_N`), `uodo`, `poa`, `usude`, `pke`, `pke_wpr`, `wdrozeniowa2019`, `aml`, `przeds`, `kp`, `krs`.

## Style

Polski, tryb PRAWNIK (użytkownik obsługuje adwokata). Cytat dosłowny > parafraza. Zwięźle. Bez „w czym mogę pomóc".
