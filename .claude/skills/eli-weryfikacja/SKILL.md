---
name: eli-weryfikacja
description: Weryfikacja identyfikatora ELI aktu prawnego i najnowszego obowiązującego tekstu jednolitego przez api.sejm.gov.pl/eli. Aktywuj gdy — użytkownik podaje konkretny Dz.U. i chce potwierdzić (KROK 2B), pyta "który t.j. jest aktualny", "czy DU/RRRR/NNN to X", chce dodać nowy akt do config.json, chce sprawdzić kaskadę wejścia w życie ustawy, potrzebuje ELI aktu którego nie ma lokalnie. Wykrywa błędy typu "prawdziwy numer, zły akt" (przydarzało się już w tym projekcie dwukrotnie).
---

# Weryfikacja ELI aktu prawnego

## Endpointy ELI Sejm

```
https://api.sejm.gov.pl/eli/acts/{publisher}/{rok}/{poz}              → metadane aktu
https://api.sejm.gov.pl/eli/acts/{publisher}/{rok}/{poz}/references   → nowelizacje + t.j.
https://api.sejm.gov.pl/eli/acts/{publisher}/{rok}/{poz}/text.html    → pełny tekst HTML
https://api.sejm.gov.pl/eli/acts/{publisher}/{rok}/{poz}/text.pdf     → pełny tekst PDF
https://api.sejm.gov.pl/eli/acts/search?title=<fraza>&type=Obwieszczenie&inForce=IN_FORCE  → wyszukiwanie
```

`publisher`: `DU` (Dz.U.) lub `MP` (Monitor Polski).

## KROK 2B — Weryfikacja przedmiotu aktu (obowiązkowa)

**Sama zgodność numeru NIE wystarczy.** W tym projekcie już dwukrotnie źle podpięte:
- DU/2024/1571 miało być ustawą o psychologu — okazał się t.j. Prawa o szkolnictwie wyższym
- DU/2025/540 miało być u.dz.l. — okazało się rozporządzeniem MKiDN o szkołach artystycznych

### Procedura KROK 2B

1. Pobierz metadane:
   ```bash
   curl -s "https://api.sejm.gov.pl/eli/acts/{publisher}/{rok}/{poz}" | python -m json.tool
   ```
2. Sprawdź `title` i `keywords`
3. Porównaj z tym, czego ma dotyczyć akt
4. Jeśli niezgodność → **⛔ STOP**, wyszukaj właściwy akt:
   ```bash
   curl -s "https://api.sejm.gov.pl/eli/acts/search?title=<fraza URL-encoded>&type=Obwieszczenie&inForce=IN_FORCE&limit=5"
   ```
5. Dla każdego kandydata weryfikuj title przed użyciem

### Kluczowe pola w odpowiedzi ELI

- `title` — pełny tytuł aktu
- `type` — Ustawa / Obwieszczenie / Rozporządzenie / ...
- `status` — "obowiązujący" / "uchylony" / "akt posiada tekst jednolity"
- `inForce` — IN_FORCE / NOT_IN_FORCE
- `promulgation` — data ogłoszenia
- `entryIntoForce` — data wejścia w życie (może być inna niż promulgation)
- `changeDate` — ostatnia modyfikacja rekordu w ELI
- `keywords` — słowa kluczowe
- `textHTML` / `textPDF` — true/false (dostępność treści)
- `references` — nowelizacje, tekst jednolity, akty uchylone/zmienione

## Weryfikacja najnowszego t.j. (deterministyczna, przez `/references`)

```bash
curl -s "https://api.sejm.gov.pl/eli/acts/{publisher}/{rok}/{poz}/references" | python -m json.tool
```

W odpowiedzi pole `Tekst jednolity` (albo w innych rekordach — sprawdź strukturę). Najnowsza pozycja = obowiązujący t.j. NIE ustalaj tego przez web_search.

**Uwaga:** akt może mieć „Nowelizacje po tekście jednolitym" — trzeba to nałożyć na obowiązujący t.j. i sprawdzić vacatio legis względem daty zdarzenia.

## Kaskada wejścia w życie

Wiele nowoczesnych ustaw ma kaskadowe wchodzenie (różne artykuły w różnych datach). Pole `comments` w metadanych ELI często to opisuje.

Przykład (DU/2026/187 — nowa ustawa o zawodzie psychologa):
```
1) art. 139 i art. 151-159 — 5 marca 2026 r.
2) art. 145 — 19 lutego 2027 r.
3) art. 17 ust. 3 — 19 maja 2031 r.
Główne wejście: 19 maja 2028
```

Przy pytaniu „czy art. X obowiązuje na dziś?" — sprawdź kaskadę.

## Wzorzec workflow

1. **Rozpoznaj** czego użytkownik szuka (nazwa aktu / dziedzina)
2. **Znajdź kandydatów** przez `/acts/search?title=...`
3. **Zweryfikuj title** każdego kandydata (KROK 2B)
4. **Ustal najnowszy t.j.** przez `/references`
5. **Sprawdź vacatio legis** (`entryIntoForce`, `comments`) — czy obowiązuje na dziś (`2026-07-21`)
6. **Zwróć** ELI + tytuł + status + data wejścia + oznaczenie:
   `✅ [VER: api.sejm.gov.pl ELI DU/RRRR/NNN, 2026-07-21]`

## Dodanie nowego aktu do config.json

Jeśli weryfikacja daje właściwy ELI i użytkownik chce mieć akt lokalnie:

1. Edytuj `config.json` — dodaj wpis `{publisher, year, pos, category, label}`
2. Uruchom `node fetch-laws.js`
3. Skonwertuj:
   - HTML: `python tools/html_act_to_md.py akty/<kategoria>/<plik>.html`
   - PDF: `python tools/pdf_act_to_md.py akty/<kategoria>/<plik>.pdf`
4. Zaktualizuj `dump_articles.py` — dodaj nowy moduł do `INDEXES`
5. Odnotuj w pamięci projektu (`reference_akty_lokalne.md`)

## Kruczki wyszukiwania

- Wyszukiwarka ELI po tytule **NIE obsługuje** myślników / łączników („Kodeks postępowania cywilnego" nie znajdzie się w prosty sposób) — próbuj krótszymi frazami, keyword lub przez `/references` innego aktu (KC odsyła do KPC)
- Polskie znaki działają w URL po URL-encode
- Domyślny `limit=10` — dla popularnych fraz zwiększ

## Uwaga o wyrokach TK 2024–2026

Wyroki TK z tego okresu mogą NIE być opublikowane w Dz.U. (uchwała RM nr 162/2024 — spór o skład TK). TK uznaje je za wiążące od ogłoszenia; część sądów je stosuje, część nie. Przy powoływaniu — dodać zastrzeżenie o formalnym statusie publikacji.

## Powiązania

- `prawo-hardgate` — kontekst reguł
- `odczyt-aktu` — po ustaleniu ELI, pobrać treść z lokalnego indeksu (jeśli już mamy)
- `aktualizacja-aktow` — pobrać/zaktualizować akt
