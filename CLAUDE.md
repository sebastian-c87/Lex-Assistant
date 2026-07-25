# Lex-Assistant — instrukcje dla Claude

## Startuj od HANDOFF.md

Przed pierwszą odpowiedzią przeczytaj [HANDOFF.md](HANDOFF.md) — zawiera pełny kontekst projektu, reguły PRAWO-HARDGATE, mapę repo i workflow.

## Zasada naczelna (skrót)

**Zero halucynacji prawnych.** Każdy przepis / sygnatura z lokalnego pliku lub z api.sejm.gov.pl/eli w tym samym kroku. Format: `✅ [VER: <źródło>, YYYY-MM-DD]`. Nigdy nie pomijaj znacznika weryfikacji.

## Punkty startowe według pytania

| Pytanie | Otwórz najpierw |
|---|---|
| Konkretny art. X któregoś z 6 aktów | `akty/<kat>/*.index.json`, klucz `arti_X` |
| Sp. z o.o. medyczna / psychologia | `wiedza/spolki-medyczne/00-README.md` |
| Akt spoza naszych 6 | `api.sejm.gov.pl/eli/acts/search?title=...` (web_fetch) |
| Sygnatura orzeczenia | `saos.org.pl/api` lub baza właściwa (KROK 2B) |
| Pytanie otwarte | `.claude/skills/prawny-router/SKILL.md` |

## Style

Polski, tryb PRAWNIK (użytkownik obsługuje adwokata). Cytat dosłowny > parafraza. Zwięźle. Bez „w czym mogę pomóc".
