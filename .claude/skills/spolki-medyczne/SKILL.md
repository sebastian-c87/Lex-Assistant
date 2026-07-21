---
name: spolki-medyczne
description: Punkt wejścia do bazy wiedzy o spółkach z o.o. świadczących usługi medyczne (gabinet psychologa, poradnia psychologiczna, konsultacje psychologiczne). Aktywuj gdy pytanie dotyka — sp. z o.o. medycznej, gabinetu, praktyki psychologicznej, podmiotu leczniczego, RPWDL, umowy spółki medycznej, wynagrodzenia wspólników psychologów, aportu z JDG do spółki medycznej, dokumentacji medycznej w gabinecie, RODO w gabinecie psychologicznym, tajemnicy psychologicznej, prawa wykonywania zawodu psychologa, ustawy z 2026 (kaskada 2028), praw pacjenta. Wskazuje właściwy rozdział z 13-częściowej bazy `wiedza/spolki-medyczne/`.
---

# Spółki medyczne / psychologia — router bazy wiedzy

Baza wiedzy: `wiedza/spolki-medyczne/` — 13 dokumentów tematycznych, oparte wyłącznie na cytatach z lokalnych plików indeksowych (KSH, u.dz.l., u.p.p., u.psy 2001, u.psy 2026, u.o.z.p.).

Zawsze zaczynaj od `wiedza/spolki-medyczne/00-README.md` — zawiera tabelę źródeł ELI i pełny spis treści.

## Mapa pytań → rozdziały

| Zakres pytania | Rozdział |
|---|---|
| Czym jest podmiot leczniczy, czy psycholog musi nim być, definicja „osoby wykonującej zawód medyczny" | `01-podmiot-leczniczy-podstawy.md` |
| Zakładanie sp. z o.o., umowa, akt notarialny vs S24, kapitał, minimum, art. 151–163 KSH | `02-sp-z-o-o-zakladanie.md` |
| Udziały: podział, wartość nominalna, dopłaty (art. 177), zbycie (art. 180, 182), spadkobiercy | `03-udzialy-i-wspolnicy.md` |
| Zarząd: powoływanie/odwoływanie (art. 201), mandat/kadencja (202), reprezentacja (204, 208, 210), ZW (227, 231, 244) | `04-zarzad-i-organy.md` |
| Wynagrodzenie: uchwała, umowa o pracę, kontrakt menedżerski, art. 176 (powtarzające się świadczenia), dywidenda | `05-wynagrodzenia-i-swiadczenia.md` |
| Aport z JDG, przeniesienie gabinetu, wycena, art. 14/158/175 KSH, ZCP, dokumentacja medyczna przy przejściu | `06-aport-jdg.md` |
| Rejestracja: KRS → RPWDL, wojewoda, u.dz.l. art. 100/103/106, timeline 6–10 tyg., CRBR | `07-rejestracja-rpwdl-i-krs.md` |
| RODO w gabinecie: art. 9 lit. h, u.p.p. art. 24, powierzenia (DPA), okresy 20/22/30 lat, IOD | `08-rodo-i-dokumentacja.md` |
| Prawa pacjenta: katalog, u.p.p. art. 3–4/13–14/22/23/26/27/29, dokumenty do sporządzenia | `09-prawa-pacjenta.md` |
| Ustawa o psychologu 2001 vs 2026, kaskada (5.03.2026 / 19.02.2027 / **19.05.2028** / 19.05.2031) | `10-psycholog-2026-2028.md` |
| Tajemnica psychologa vs medyczna vs RODO, 6 scenariuszy praktycznych, art. 240 KK | `11-tajemnica-zawodowa.md` |
| TOP 15 błędów, kalendarz obowiązków rocznych, checklisty | `12-checklist-i-kruczki.md` |

## Zasady odpowiedzi w tym obszarze

1. **Każdy przepis z cytatu w rozdziale — dosłownie z pliku indeksowego JSON**, nie z pamięci
2. **Znacznik weryfikacji przy każdym powołaniu:** `✅ [VER: api.sejm.gov.pl ELI DU/RRRR/NNN, YYYY-MM-DD]` (data z `manifest.json`)
3. **Fragmenty spoza pobranych aktów** (składka zdrowotna, CIT, VAT, PCC, rozporządzenia MZ o pomieszczeniach, kwoty OC obowiązkowego) — oznaczaj `⚠️ WYMAGA WERYFIKACJI` i sięgaj po `eli-weryfikacja` / WebFetch/WebSearch — nie odpowiadaj z pamięci
4. **Fragmenty w kaskadzie 2028** oznaczaj `⚠️ ZMIANA 2028`
5. **Nie halucynuj kwot ani stawek podatkowych** — bardzo się zmieniają (Polski Ład N.0)

## Workflow typowego pytania

1. Rozpoznaj rozdział z tabeli powyżej (może być kilka)
2. Otwórz właściwy plik `wiedza/spolki-medyczne/NN-*.md`
3. Jeśli w rozdziale jest już cytat pokrywający pytanie — odpowiedz na jego podstawie, dołącz VER
4. Jeśli trzeba głębiej — `odczyt-aktu <moduł> <numery>` żeby wyciągnąć dodatkowe artykuły
5. Jeśli kwestia wykracza poza pobrane akty — `eli-weryfikacja` (dla ELI aktu) lub WebFetch (dla stawek, kwot, orzecznictwa)
6. Odpowiedź poza zakresem tej bazy (np. karne, cywilne poza kontekstem sp. z o.o.) → wróć do `prawny-router`

## Uwagi o typowych pytaniach adwokata

**Klient zakłada gabinet psychologiczny w sp. z o.o. — od czego zacząć?**
→ `02-sp-z-o-o-zakladanie.md` + `07-rejestracja-rpwdl-i-krs.md` (timeline) + `12-checklist-i-kruczki.md` (błędy do unikania)

**Klient prowadzi JDG-gabinet, chce przejść na sp. z o.o.**
→ `06-aport-jdg.md` (główny) + `08-rodo-i-dokumentacja.md` (przejście dokumentacji pacjentów)

**Dwóch psychologów zakłada wspólną spółkę, jak dzielić udziały?**
→ `03-udzialy-i-wspolnicy.md` (warianty 50/50 vs większościowy) + `05-wynagrodzenia-i-swiadczenia.md` (jak wynagradzać różne wkłady pracy)

**Konsylium między psychologami a tajemnica**
→ `11-tajemnica-zawodowa.md` scenariusz E (superwizja) + u.p.p. art. 14 ust. 2 pkt 4

**Pacjent żąda usunięcia dokumentacji**
→ `08-rodo-i-dokumentacja.md` (art. 29 u.p.p. — 20 lat obowiązku vs art. 17 ust. 3 RODO — brak prawa do usunięcia gdy obowiązek prawny)

**Sąd rodzinny prosi o dokumentację terapii dziecka**
→ `09-prawa-pacjenta.md` + `11-tajemnica-zawodowa.md` scenariusz B

**Zmiana zarządu — jak to przeprowadzić bez przerwy w RPWDL**
→ `04-zarzad-i-organy.md` + `07-rejestracja-rpwdl-i-krs.md` (aktualizacje rejestrowe)

## Rozszerzenia poza `spolki-medyczne`

Jeśli pytanie wchodzi w:
- **Prawo karne** (art. 233 § 6 KK — fałszywe oświadczenia RPWDL, art. 266 KK — tajemnica, art. 240 KK — obowiązek zawiadomienia) → `eli-weryfikacja` dla KK, potem cytat
- **Postępowanie sądowe** — KPC / KPK — brak lokalnie, `eli-weryfikacja`
- **Podatki** — brak lokalnie, ⚠️ zawsze WebFetch aktualnych interpretacji
- **Ubezpieczenia OC** — kwoty w rozporządzeniu MF, ⚠️ WebFetch

## Powiązania

- `prawo-hardgate` — pryzmat cytowania (zawsze aktywny)
- `odczyt-aktu` — cytaty z lokalnych indeksów
- `eli-weryfikacja` — dla aktów spoza bazy
- `saos-sygnatura` — dla orzecznictwa
- `analizator-umow` — dla konkretnych umów (spółki, kontraktu terapeutycznego, DPA)
