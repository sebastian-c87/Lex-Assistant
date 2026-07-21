---
name: saos-sygnatura
description: Weryfikacja sygnatury orzeczenia sądowego przez SAOS API i bazy oficjalne (sn.pl, orzeczenia.ms.gov.pl, nsa.gov.pl, trybunal.gov.pl). Kontrakt wyniku FOUND/NOT_FOUND/AMBIGUOUS/OUT_OF_SCOPE. Aktywuj gdy użytkownik podaje sygnaturę (wzory: "III CZP 27/19", "II SA/Wa 123/22", "SK 34/24", "P 3/25", "K 12/23"), pyta "czy to orzeczenie istnieje", "znajdź wyrok", "sprawdź sygnaturę", cytuje snippet z portalu wtórnego (infor.pl, rp.pl, poradnikprzedsiebiorcy.pl) — te WYMAGAJĄ weryfikacji w bazie oficjalnej przed użyciem.
---

# Weryfikacja sygnatury orzeczenia

## Zasada BRAMKA WTÓRNE-ŹRÓDŁO-STOP

Sygnatury pojawiające się w:
- snippetach web_search (portale wtórne: infor.pl, poradnikprzedsiebiorcy.pl, rp.pl, prawo.pl, lexlege.pl, komentarze, blogi)
- SKILL.md innych skilli („SN wskazał w wyroku…")
- cytowaniach pośrednich

**NIE MOGĄ być podawane użytkownikowi bez weryfikacji w bazie oficjalnej.**

Znacznik `✅ [VER: <źródło>]` jest zastrzeżony **wyłącznie** dla:
- SAOS API (`saos.org.pl`)
- `sn.pl`, `orzeczenia.ms.gov.pl`, `nsa.gov.pl`, `trybunal.gov.pl`

Wszystko inne = `⚠️ [NIEWERYFIKOWANE]`.

## Kontrakt wyniku (SYGNATURY v1.1 z Lex-Machina)

Każda weryfikacja kończy się jednym z czterech statusów:

| Status | Znaczenie | Reakcja |
|---|---|---|
| 🟢 **FOUND** | dokładnie 1 trafienie w bazie w pokrytym zakresie | cytuj z pełnymi danymi + `✅ [VER: …]` |
| 🔴 **NOT_FOUND** | 0 trafień w zakresie, który baza pokrywa | **nie cytuj**; potraktuj jako sygnaturę prawdopodobnie zmyśloną |
| 🟡 **AMBIGUOUS** | ≥ 2 orzeczenia różnych sądów pod tą samą sygnaturą | **nie wybieraj sam**; przedstaw kandydatów, dopytaj o sąd/datę |
| ⚪ **OUT_OF_SCOPE** | baza nie pokrywa tego sądu/okresu | eskaluj do bazy oficjalnej właściwej dla sądu |

## Procedura

### KROK 0 — SAOS API (pierwszy strzał, deterministyczne)

```bash
curl -s "https://www.saos.org.pl/api/search/judgments?caseNumber=<sygnatura URL-encoded>" | python -m json.tool
```

Interpretacja pola `items`:
- `items: []` → NOT_FOUND w SAOS (ale może być OUT_OF_SCOPE — SAOS nie indeksuje NSA/WSA)
- `items` długości 1 → FOUND (potwierdź: sąd, data, izba)
- `items` długości > 1 z różnymi sądami → AMBIGUOUS
- Timeout / błąd HTTP → SCENARIUSZ A (patrz niżej)

**Ważne:** SAOS nie pokrywa NSA/WSA — dla sygnatur administracyjnych (formy: `II SA/Wa`, `I OSK`, `II GSK`, itp.) → od razu do KROK 1.

### KROK 1 — Baza oficjalna właściwa dla sądu

Wybierz po formie sygnatury:

| Wzór sygnatury | Sąd | Baza |
|---|---|---|
| `I CSK`, `II CSK`, `III CZP`, `V KK`, `I NSKP`, `I NSNc` | SN | sn.pl (Baza orzeczeń) |
| `I ACa`, `II AKa`, `V AGa` | sądy apelacyjne | orzeczenia.ms.gov.pl |
| `I C`, `IV P`, `VI GC`, `II K` | sądy okręgowe/rejonowe | orzeczenia.ms.gov.pl |
| `II SA/Wa`, `III SA/Kr`, `IV SAB/Po` | WSA | nsa.gov.pl (CBOSA) |
| `I OSK`, `II GSK`, `II FSK`, `I OZ` | NSA | nsa.gov.pl (CBOSA) |
| `K`, `SK`, `P`, `U`, `Kp`, `Pp` | TK | trybunal.gov.pl |
| `SDI` | SN — Izba Odpowiedzialności Zawodowej | sn.pl |

Metoda: `web_fetch` na stronę wyszukiwarki albo `web_search: "<sygnatura> site:sn.pl"`.

### KROK 2 — Potwierdź że sygnatura prowadzi do właściwego orzeczenia

Nie próbuj „blisko pasującej" sygnatury — to generuje fałszywe potwierdzenia.

### KROK 3 — Odczytaj tezę ze źródła

- Limit cytatu z orzeczenia: **max 30 słów** (override dziedzinowy — wyższy niż globalny limit 15 słów; uzasadnione precyzyjnym oddaniem tezy prawnej)
- Nie parafrazuj z pamięci ani z portalu wtórnego

### KROK 4 — Aktualność linii orzeczniczej

Sprawdź czy nie została zmieniona nowszym orzeczeniem (np. uchwała SN 7 sędziów, uchwała pełnego składu).

### KROK 5 — Format cytowania

```
<sygnatura> (<sąd>, <data>) — <teza> — ✅ [VER: <baza>, YYYY-MM-DD]
```

## Scenariusze awarii

**SCENARIUSZ A — źródło oficjalne niedostępne (timeout, blokada):**
- Oznacz: `⚠️ [NIEWERYFIKOWANE — oficjalna baza chwilowo niedostępna]`
- Podaj zasadę BEZ sygnatury: „SN przyjął, że… (sygnatura nieweryfikowana)"
- Wyraźnie zaznacz źródło wtórne i konieczność sprawdzenia

**SCENARIUSZ B — sygnatura NIE istnieje w oficjalnej bazie:**
- ⛔ **USUŃ** sygnaturę z analizy/pisma całkowicie
- Podaj zasadę BEZ sygnatury lub pomiń orzeczenie
- Komunikat: „Sygnatura [X] nie została potwierdzona w oficjalnych bazach — pominięto"

**SCENARIUSZ C — sygnatura istnieje, ale teza inna niż w źródle wtórnym:**
- Użyj WYŁĄCZNIE tezy z bazy oficjalnej
- Zaznacz rozbieżność: „Źródło wtórne cytowało tę sygnaturę w innym kontekście — użyto tezy z sn.pl"

## Wyroki TK 2024–2026 — dodatkowe zastrzeżenie

Od marca 2024 (uchwała RM nr 162/2024) rząd nie publikuje wyroków TK w Dz.U. (spór o skład). TK uznaje je za wiążące od ogłoszenia; część sądów je stosuje, część nie.

**Dla KAŻDEGO orzeczenia TK z okresu 2024–2026:**
- Sprawdź czy zostało opublikowane w Dz.U.
- Jeśli NIE — dodaj zastrzeżenie po cytacie: „⚠️ Status formalny: wyrok TK [sygn.] nie został opublikowany w Dz.U. (spór o skład, uchwała RM 162/2024). TK uznaje wyrok za wiążący od ogłoszenia; praktyka orzecznicza niejednolita. Rekomendowana weryfikacja aktualnej praktyki sądu właściwego."

## Odpowiedzialność dyscyplinarna zawodów prawniczych

Sygnatury z zakresu odpowiedzialności dyscyplinarnej (adwokat, radca, lekarz, sędzia, komornik) — bazy są NIERÓWNE między zawodami i izbami:

- **Adwokat:** wsd.adwokatura.pl/rejestry/showMain/orzecznictwo-19 (Portal Orzecznictwa Dyscyplinarnego, sygn. SDI)
- **Radca prawny:** wsd.kirp.pl + strony lokalne OIRP (niekompletne; część OIRP nie publikuje)
- **Lekarz:** nil.org.pl/orzeczenia (od 2024; OSL+NSL); kasacje SN pod nil.org.pl osobno
- **Sędzia:** Sąd Dyscyplinarny przy Sądzie Apelacyjnym — BRAK potwierdzonego publicznego archiwum treści; jawne tylko komunikaty rzecznika
- **Notariusz, komornik, rzecznik patentowy:** BRAK scentralizowanego portalu
- **Kasacja:** SN (Izba Odpowiedzialności Zawodowej — dawniej Izba Dyscyplinarna), sygn. SDI. Wyjątek: komornik → sądy powszechne, sygnatury na orzeczenia.ms.gov.pl

**Brak w bazie korporacyjnej ≠ dowód nieistnienia** — oznacz `⚠️ [NIEWERYFIKOWALNE — baza korporacyjna niekompletna/lokalna]`, NIGDY `✅ [VER]` bez faktycznego odnalezienia.

## Powiązania

- `prawo-hardgate` — pryzmat cytowania
- `prawny-router` — po weryfikacji sygnatury dobór właściwej dziedziny prawa
