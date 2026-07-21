# Skille Lex-Assistant (dla Claude Code)

Zestaw 7 skilli obsługujących workflow pracy z polskim prawem, adaptowany z filozofii Lex-Machina (GPL v3) do formatu Claude Code (`.claude/skills/`).

## Katalog

| Skill | Rola | Kiedy się aktywuje |
|---|---|---|
| [`prawo-hardgate`](prawo-hardgate/SKILL.md) | Meta-workflow — zakaz cytowania prawa z pamięci, hierarchia źródeł, format śladu weryfikacji | Każde pytanie prawne |
| [`odczyt-aktu`](odczyt-aktu/SKILL.md) | Cytat artykułu z lokalnego indeksu JSON (KSH, u.dz.l., u.p.p., u.psy 2001/2026, u.o.z.p.) | „Co mówi art. X" |
| [`eli-weryfikacja`](eli-weryfikacja/SKILL.md) | Weryfikacja ELI + KROK 2B (przedmiot aktu) + najnowszy t.j. przez `/references` | Nowy Dz.U., dodanie aktu, sprawdzenie t.j. |
| [`saos-sygnatura`](saos-sygnatura/SKILL.md) | Weryfikacja sygnatury orzeczenia — kontrakt FOUND/NOT_FOUND/AMBIGUOUS/OUT_OF_SCOPE | Podanie sygnatury |
| [`prawny-router`](prawny-router/SKILL.md) | Klasyfikacja pytania i orkiestracja skilli szczegółowych | Otwarte pytanie, sprawa wielodziedzinowa |
| [`spolki-medyczne`](spolki-medyczne/SKILL.md) | Wejście do bazy `wiedza/spolki-medyczne/` (sp. z o.o. + psychologia + RODO) | Zakres profilu kancelarii |
| [`analizator-umow`](analizator-umow/SKILL.md) | Analiza / redakcja umów (spółki, terapeutycznej, DPA, kontraktu) | Załączona umowa, prośba o klauzulę / wzór |
| [`aktualizacja-aktow`](aktualizacja-aktow/SKILL.md) | Cykl konserwacyjny: sprawdzenie zmian ELI, pobranie, konwersja | Rutynowa konserwacja |

## Architektura

```
prawo-hardgate  (zawsze aktywny — pryzmat)
       ↑
prawny-router  (klasyfikacja i wybór)
   ↓        ↓        ↓
odczyt-aktu  eli-weryfikacja  saos-sygnatura   ← bramki weryfikacyjne
   ↓
spolki-medyczne (wejście do bazy tematycznej)
analizator-umow (produkt: umowa / klauzula)
aktualizacja-aktow (konserwacja)
```

## Adopcja z Lex-Machina — co zostało, co odpadło

**Zostały (esencja):**
- Reguły PRAWO-HARDGATE v2.0 (`prawo-hardgate`)
- Hierarchia ELI/SAOS/CELLAR → web (`eli-weryfikacja`, `saos-sygnatura`)
- Kontrakt sygnatur (`saos-sygnatura`)
- Filozofia „lepiej brak niż błędny" — we wszystkich skillach
- KROK 2B (weryfikacja przedmiotu aktu) — z konkretnymi przykładami błędów z tego projektu

**Odpadło (nadmiarowe dla Claude Code):**
- 16 modułów dziedzinowych DR-01…DR-16 — zastąpione `prawny-router` + `wiedza/spolki-medyczne/` (dla profilu kancelarii)
- Macierz aktywacji [1]–[10] i step-tracker — Claude Code nie potrzebuje jawnego trackera
- Skille eksportowe (raport-klienta, chronologia, przesluchanie-swiadkow) — nie są jeszcze potrzebne; dorobimy przy realnej potrzebie
- Warstwa MOD-AUDIT-BUNDLE / AI Act art. 12 — zbyt duża infrastruktura dla jednoosobowej praktyki
- Osobne skille dla shared/ (SYGNATURY, WERYFIKACJA-SLAD, MCP-INTEGRACJA) — wchłonięte w treść `prawo-hardgate` i `saos-sygnatura`

**Do dorobienia w miarę potrzeb** (na realne pytanie, nie na wszelki wypadek):
- `pisma-procesowe` — pozwy, apelacje, odpowiedzi na pozew
- `analizator-dowodow` — scoring dowodów
- `chronologia-sprawy` — oś czasu
- `raport-sytuacyjny` — dla klienta

## Konwencja tworzenia kolejnych skilli

1. `.claude/skills/<name>/SKILL.md` z YAML frontmatter (`name`, `description`)
2. `description` musi zawierać **konkretne triggery językowe** — słowa i frazy które użytkownik napisze
3. Treść w języku polskim (spójna z resztą repo)
4. Każdy cytat prawny w treści skilla — z odesłaniem do lokalnego pliku lub oznaczeniem `⚠️ WYMAGA WERYFIKACJI`
5. Dodać do tego README (tabela + architektura)

## Źródło i licencja

Adaptowane z: https://github.com/michaleiatrak-star/Lex-Machina (GPL v3). Skille w tym katalogu są odrębnym utworem inspirowanym oryginalnymi regułami — nie są portem 1:1. Klon Lex-Machina znajduje się w submodule `../Lex-Machina/` dla odesłania do pełnej dokumentacji źródłowej.
