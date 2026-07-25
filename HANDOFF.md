# HANDOFF — Bootstrap dla Claude w aplikacji claude.ai

Ten plik służy do przejęcia kontekstu projektu **Lex-Assistant** przez Claude uruchomionego w aplikacji mobilnej / webowej claude.ai (poza Claude Code). Przeczytaj go w całości przed odpowiedzią na pierwsze pytanie użytkownika.

---

## 1. Kim jest projekt

**Repo:** https://github.com/sebastian-c87/Lex-Assistant (prywatne, konto `sebastian-c87`)

**Cel:** warsztat prawny do obsługi pytań adwokackich na styku:
- **Kodeks spółek handlowych** (spółki z o.o., zarząd, wspólnicy)
- **Prawo medyczne** (podmiot leczniczy, RPWDL, prawa pacjenta)
- **Zawód psychologa** (ustawa 2001 obowiązująca do 19.05.2028 + nowa ustawa 2026 wchodząca kaskadowo)
- **RODO** (w kontekście dokumentacji medycznej)
- **Prawo karne** (aspekty relewantne: art. 233 § 6 KK, 266 KK, 240 KK)

**Profil użytkownika:** Sebastian (`ciborowski.s@gmail.com`), obsługujący profesjonalnego adwokata. Pytania są precyzyjne, oczekiwane odpowiedzi precyzyjne (tryb PRAWNIK — cytaty dosłowne, pinpointy artykułów, konkretne sygnatury).

## 2. Zasada naczelna — PRAWO-HARDGATE

**ZAKAZ cytowania prawa z pamięci.** Każdy artykuł, numer Dz.U., data, kwota, termin, sygnatura orzeczenia — z lokalnego pliku w repo albo z api.sejm.gov.pl/eli w tym samym kroku odpowiedzi. Format śladu:

- `✅ [VER: api.sejm.gov.pl ELI DU/RRRR/NNN, YYYY-MM-DD]` — dla przepisów
- `✅ [VER: <sn.pl|orzeczenia.ms.gov.pl|nsa.gov.pl|trybunal.gov.pl|saos.org.pl>, YYYY-MM-DD]` — dla orzeczeń
- `⚠️ [NIEWERYFIKOWANE — <powód>]` — gdy nie da się zweryfikować (**nigdy nie pomijaj**)

**KROK 2B — obowiązkowo:** sam zgodny numer Dz.U. nie wystarczy. Sprawdź, czy TYTUŁ aktu merytorycznie odpowiada tezie. W tym projekcie już dwukrotnie wykryto błąd typu „prawdziwy numer, zły akt": DU/2024/1571 miało być psycholog — było PSWiN; DU/2025/540 miało być u.dz.l. — było rozp. MKiDN. Nie powtarzaj.

**Reguła aktualności:** zawsze najnowszy obowiązujący t.j. Weryfikuj przez endpoint `/references` (typ „Tekst jednolity").

Pełne reguły: `.claude/skills/prawo-hardgate/SKILL.md`.

## 3. Ograniczenia workflow w claude.ai (vs Claude Code)

W aplikacji claude.ai **NIE MASZ** narzędzi bash/node/python. Skille w `.claude/skills/` są napisane pod Claude Code — w aplikacji traktuj je jako **dokumentację workflow**, nie jako wywoływalne skille.

Konsekwencje operacyjne:

| Czego NIE możesz | Czym to zastąpić |
|---|---|
| Uruchomić `python tools/dump_articles.py <akt> <num>` | **Czytaj bezpośrednio** `akty/<kategoria>/<plik>.index.json` przez GitHub Connector — struktura: `{"arti_N": {"heading": "Art. N.", "text": "..."}}` |
| Uruchomić `node fetch-laws.js` (aktualizacja aktów) | Poproś użytkownika, żeby uruchomił lokalnie na komputerze, potem pull |
| Uruchomić `python tools/pdf_act_to_md.py` (konwersja PDF) | Jw. — konwersja lokalnie |
| Uruchomić `curl` do ELI | Użyj web_fetch / web_search — endpointy takie same |

**W praktyce:** dla pytań o KSH / u.dz.l. / u.p.p. / u.psy 2001 / u.psy 2026 / u.o.z.p. — otwierasz `.index.json` w repo i cytujesz. Dla aktów spoza tych 6 — web_fetch na api.sejm.gov.pl/eli.

## 3a. Dostęp sieciowy do ELI — warunek konieczny (Claude Code on the web)

**Objaw:** każde żądanie do `api.sejm.gov.pl` / `isap.sejm.gov.pl` / `eli.gov.pl` kończy się `403`. W curl: `CONNECT tunnel failed, response 403`. W Node: `Proxy response (403) !== 200 when HTTP Tunneling`.

**Przyczyna:** to **nie** awaria i **nie** błąd w kodzie. Środowisko cloud ma poziom dostępu sieciowego **Trusted** — dozwolone są tylko domeny z domyślnej allowlisty (rejestry pakietów, GitHub, chmury). `sejm.gov.pl` się na niej nie znajduje. Sandbox nie może tego zmienić od wewnątrz i nie wolno tego obchodzić.

**Naprawa (do wykonania RĘCZNIE przez użytkownika, jednorazowo):**

1. `claude.ai/code` → ikona chmury → edycja środowiska
2. **Network access** → **Custom**
3. **Allowed domains** (po jednej w linii):
   ```
   api.sejm.gov.pl
   isap.sejm.gov.pl
   eli.gov.pl
   ```
4. Zaznaczyć **„Also include default list of common package managers"** — inaczej odpadnie npm/GitHub
5. Zapisać, uruchomić **nową** sesję (zmiana nie działa retroaktywnie na sesję już otwartą)

Alternatywa: **Full** (dowolna domena) — szybciej, ale szerzej niż potrzeba.

Allowlista jest **per środowisko**; nie ma allowlisty na poziomie organizacji. Dokumentacja: <https://code.claude.com/docs/en/claude-code-on-the-web#network-access>

**Weryfikacja po zmianie:**
```bash
node fetch-laws.js --diag
```
Ma wypisać `✓ POŁĄCZENIE DZIAŁA` i tytuł aktu kontrolnego DU/2024/18.

**Uwaga o samym API:** ELI API jest publiczne — **nie wymaga klucza, tokenu ani rejestracji**. Jedyną barierą jest allowlista środowiska. Dokumentacja API: <https://api.sejm.gov.pl/eli_pl.html>, OpenAPI: <https://api.sejm.gov.pl/eli/openapi/ui/>.

**Dopóki hosty są zablokowane:** działaj wyłącznie na 6 aktach w `akty/` (znacznik ✅) i oznaczaj wszystko inne `⚠️ [NIEWERYFIKOWANE — egress blokuje api.sejm.gov.pl]`. Nie zastępuj weryfikacji ELI wyszukiwaniem w internecie — portale wtórne nie są bazą oficjalną (patrz KROK 2B).

## 3b. Workflow config.json — wpisy przypięte i do rozwiązania

`config.json` obsługuje dwie postacie wpisu:

| Postać | Pola | Zachowanie |
|---|---|---|
| **przypięta** | `publisher`, `year`, `pos`, `category`, `label`, `expectTitle` | pobierana normalnie |
| **do rozwiązania** | `search`, `category`, `label`, `expectTitle`, `why` | **pomijana** przy pobieraniu — numer pozycji nie jest zgadywany |

`expectTitle` to **zautomatyzowany KROK 2B**: przed pobraniem skrypt porównuje tytuł aktu z ELI z tą frazą. Niezgodność = odmowa pobrania i błąd. To bramka na klasę błędu „prawdziwy numer, zły akt" (DU/2024/1571, DU/2025/540).

Komendy:
```bash
node fetch-laws.js --diag              # test łączności + diagnostyka proxy
node fetch-laws.js --check             # co się zmieniło (nic nie zapisuje) + walidacja tytułów
node fetch-laws.js --resolve           # szuka w ELI adresów dla wpisów `search`, pokazuje kandydatów
node fetch-laws.js --resolve --write   # jw. + przypina najlepsze trafienie do config.json
node fetch-laws.js                     # pobiera / aktualizuje wpisy przypięte
```

**Kolejność przy dodawaniu nowych aktów:** `--resolve` (podgląd) → **ręcznie sprawdź kandydatów** → `--resolve --write` → `--check` → pobranie → konwersja przez `tools/html_act_to_md.py` lub `tools/pdf_act_to_md.py`.

Przy `--resolve --write` skrypt ostrzega `⚠ Było N kandydatów` — wtedy weryfikacja ręczna jest obowiązkowa, bo ranking (t.j./obowiązujący/najnowszy) to heurystyka, nie dowód.

## 4. Mapa repozytorium

```
Lex-Assistant/
├── HANDOFF.md                          ← TEN PLIK
├── CLAUDE.md                           ← krótkie instrukcje projektu (dla Claude Code + aplikacji)
├── README.md                           ← ogólny opis repo
├── config.json                         ← lista aktów śledzonych przez fetch-laws.js
├── manifest.json                       ← historia pobrań (dla dat w [VER: …, data])
├── fetch-laws.js                       ← skrypt pobierający akty (Node.js — NIE URUCHOMISZ w aplikacji)
│
├── akty/                               ← teksty jednolite (do bezpośredniego czytania)
│   ├── ksh/
│   │   ├── kodeks_spolek_handlowych_tekst_jednolity_.html      (oryginał ELI)
│   │   ├── kodeks_spolek_handlowych_tekst_jednolity_.md        (skonwertowany tekst)
│   │   ├── kodeks_spolek_handlowych_tekst_jednolity_.index.json ← ARTYKUŁY KEY-VALUE
│   │   └── kodeks_spolek_handlowych_tekst_jednolity_.meta.json  (ELI, data pobrania)
│   └── prawo_medyczne/
│       ├── ustawa_o_dzialalnosci_leczniczej_t_j_z_5_02_2026_.{pdf,md,index.json,meta.json}
│       ├── ustawa_o_prawach_pacjenta_i_rzeczniku_praw_pacjenta_tekst_jednolity_.{html,md,index.json,meta.json}
│       ├── ustawa_o_ochronie_zdrowia_psychicznego_tekst_jednolity_.{html,md,index.json,meta.json}
│       ├── ustawa_o_zawodzie_psychologa_..._stara_ustawa_z_2001_..._2028-05-19.{html,md,index.json,meta.json}
│       └── ustawa_o_zawodzie_psychologa_..._nowa_ustawa_..._19_05_2028.{pdf,md,index.json,meta.json}
│
├── wiedza/spolki-medyczne/             ← BAZA WIEDZY TEMATYCZNA (13 plików MD)
│   ├── 00-README.md                    ← MAPA — zacznij tu przy pytaniach z tego obszaru
│   ├── 01-podmiot-leczniczy-podstawy.md
│   ├── 02-sp-z-o-o-zakladanie.md
│   ├── 03-udzialy-i-wspolnicy.md
│   ├── 04-zarzad-i-organy.md
│   ├── 05-wynagrodzenia-i-swiadczenia.md
│   ├── 06-aport-jdg.md
│   ├── 07-rejestracja-rpwdl-i-krs.md
│   ├── 08-rodo-i-dokumentacja.md
│   ├── 09-prawa-pacjenta.md
│   ├── 10-psycholog-2026-2028.md
│   ├── 11-tajemnica-zawodowa.md
│   └── 12-checklist-i-kruczki.md
│
├── .claude/skills/                     ← skille Claude Code (dla Ciebie w aplikacji: DOKUMENTACJA workflow)
│   ├── README.md                       ← katalog + architektura
│   ├── prawo-hardgate/SKILL.md         ← ⭐ najważniejszy — reguły cytowania
│   ├── odczyt-aktu/SKILL.md            ← w aplikacji: zamiast dump_articles.py czytaj .index.json
│   ├── eli-weryfikacja/SKILL.md        ← procedura KROK 2B + endpointy ELI (do web_fetch)
│   ├── saos-sygnatura/SKILL.md         ← kontrakt FOUND/NOT_FOUND/AMBIGUOUS/OUT_OF_SCOPE
│   ├── prawny-router/SKILL.md          ← klasyfikacja pytania po dziedzinie
│   ├── spolki-medyczne/SKILL.md        ← pointer do wiedza/spolki-medyczne/
│   ├── analizator-umow/SKILL.md        ← analiza/redakcja umów
│   └── aktualizacja-aktow/SKILL.md     ← workflow konserwacji (do wykonania lokalnie)
│
├── tools/                              ← skrypty Python (Claude Code only)
│   ├── html_act_to_md.py               ← konwerter HTML z ELI
│   ├── pdf_act_to_md.py                ← konwerter PDF z ELI
│   └── dump_articles.py                ← odczyt artykułów po numerze
│
└── Lex-Machina/                        ← submoduł GPL v3 (referencyjny system 33 skilli)
    └── ...                             ← z niego wywiedziona filozofia HARDGATE
```

## 5. Klucze i konwencje

**Konwencja kluczy w `.index.json`:**
- `arti_N` = Art. N (np. `arti_151` = Art. 151 KSH)
- `arti_N_M` = artykuł z liczbą (np. `arti_106_1` = Art. 106¹, `arti_551_1` = Art. 551¹)

**Wartość:** `{"heading": "Art. N.", "text": "pełny tekst z § i punktami z zachowaniem wcięć"}`

**Data pobrania** dla znacznika `[VER: …, YYYY-MM-DD]` — z `manifest.json`, pole `lastFetched` konkretnego aktu (klucz to ELI, np. `"DU/2024/18"`).

## 6. Dostępne akty (moduły)

| Moduł | Akt | ELI |
|---|---|---|
| ksh | Kodeks spółek handlowych (633 art.) | DU/2024/18 |
| udzl | Ustawa o działalności leczniczej (182 art.) | DU/2026/156 |
| pp | Ustawa o prawach pacjenta i RPP (98 art.) | DU/2024/581 |
| psy2001 | Ustawa o zawodzie psychologa 2001 (64 art.) — obowiązuje do 19.05.2028 | DU/2019/1026 |
| psy2026 | Ustawa o zawodzie psychologa 2026 (161 art.) — kaskadowe wejście | DU/2026/187 |
| ozp | Ustawa o ochronie zdrowia psychicznego (74 art.) | DU/2024/917 |

Pełna mapa źródeł: `wiedza/spolki-medyczne/00-README.md` (tabela na górze).

## 7. Kaskada wejścia w życie DU/2026/187 (nowa ustawa o psychologu)

Kluczowa dla wielu pytań adwokata:
- **5 marca 2026** — art. 139 + art. 151–159 (przepisy organizacyjne, samorząd)
- **19 lutego 2027** — art. 145
- **19 maja 2028** — **główny zrąb ustawy** (obowiązek wpisu do Rejestru Psychologów)
- **19 maja 2031** — art. 17 ust. 3

Do 19.05.2028 obowiązuje stara ustawa 2001 (DU/2019/1026 t.j.).

## 8. Co zostało zrobione w rozmowie Claude Code (2026-07-21)

1. **Klon submodułu Lex-Machina** — filozofia HARDGATE, kontrakt sygnatur, hierarchia źródeł
2. **Naprawa błędów w `config.json`:**
   - DU/2024/1571 (miało być psycholog, było PSWiN) → poprawka: DU/2019/1026 (właściwy t.j. starej ustawy)
   - DU/2025/540 (miało być u.dz.l., było rozp. MKiDN) → poprawka: DU/2026/156 (najnowszy t.j. u.dz.l. z 5.02.2026)
3. **Pobranie i konwersja 6 aktów** — wszystkie mają `.md` + `.index.json`
4. **Konwertery:** `tools/html_act_to_md.py`, `tools/pdf_act_to_md.py`, `tools/dump_articles.py`
5. **Baza wiedzy `wiedza/spolki-medyczne/`** — 13 dokumentów tematycznych, każdy oparty wyłącznie na cytatach z lokalnych indeksów (z znacznikami VER). Pokrywa: podmiot leczniczy, zakładanie sp. z o.o., udziały, zarząd, wynagrodzenia (w tym art. 176 KSH — powtarzające się świadczenia), aport z JDG, rejestrację KRS/RPWDL, RODO/dokumentację, prawa pacjenta, kaskadę 2026–2028, tajemnicę (6 scenariuszy), checklistę TOP 15 błędów.
6. **Skille w `.claude/skills/`** — 7 merytorycznych + README, adaptacja Lex-Machina do formatu Claude Code
7. **Repo GitHub `Lex-Assistant`** — utworzone, prywatne, main branch, submoduł Lex-Machina przypięty

## 9. Jak odpowiadać na typowe pytania (workflow w aplikacji)

### Pytanie: „Co mówi art. X KSH?"
1. Otwórz `akty/ksh/kodeks_spolek_handlowych_tekst_jednolity_.index.json`
2. Wyciągnij klucz `arti_X`
3. Zwróć `heading` + `text` dosłownie
4. Dodaj znacznik `✅ [VER: api.sejm.gov.pl ELI DU/2024/18, 2026-07-21]` (data z `manifest.json`)

### Pytanie z zakresu spółki medycznej / psychologii
1. Otwórz `wiedza/spolki-medyczne/00-README.md` — znajdź rozdział z tabeli
2. Otwórz właściwy `NN-*.md` — jest gotowa treść z cytatami
3. Jeśli trzeba głębiej — otwórz odpowiedni `.index.json` i wyciągnij dodatkowe artykuły
4. Nigdy nie parafrazuj — cytuj dosłownie z pliku

### Pytanie o akt spoza naszych 6 (np. KC, KK, KPC)
1. web_fetch na `https://api.sejm.gov.pl/eli/acts/search?title=<fraza>&type=Obwieszczenie&inForce=IN_FORCE`
2. Znajdź kandydatów, sprawdź `title` (KROK 2B)
3. web_fetch na `https://api.sejm.gov.pl/eli/acts/{ELI}/text.html` — po treść
4. Zwróć cytat + `✅ [VER: api.sejm.gov.pl ELI DU/RRRR/NNN, 2026-07-21]`

### Pytanie o sygnaturę orzeczenia
1. web_fetch na `https://www.saos.org.pl/api/search/judgments?caseNumber=<sygn>` (dla SN, SA, SO, SR)
2. Dla NSA/WSA — `nsa.gov.pl` (CBOSA)
3. Dla TK — `trybunal.gov.pl`
4. Kontrakt FOUND/NOT_FOUND/AMBIGUOUS/OUT_OF_SCOPE — nie zgaduj
5. Wyroki TK 2024–2026 — dodaj zastrzeżenie o statusie publikacji w Dz.U. (spór o skład TK, uchwała RM nr 162/2024)

### Pytanie otwarte („mam sprawę…")
1. Zastosuj `.claude/skills/prawny-router/SKILL.md` — klasyfikacja po dziedzinie
2. Zadaj max 2 pytania doprecyzowujące
3. Wskaż od którego pliku zaczniemy

## 10. Ograniczenia i pułapki

- **Nie odpowiadaj na pytania podatkowe** (składka zdrowotna, CIT, VAT, PCC) **z pamięci** — bardzo szybko zmieniające się, zawsze web_fetch aktualnych interpretacji lub jasno powiedz „⚠️ WYMAGA WERYFIKACJI aktualnego stanu"
- **RODO** — nie mamy lokalnie; web_fetch na EUR-Lex CELEX 02016R0679 (wersja skonsolidowana)
- **UODO** (krajowa) — DU/2019/1781, do dorzucenia lokalnie w przyszłości; teraz web_fetch
- **KC, KK, KPC, KPK** — do dorzucenia; teraz web_fetch (KC: DU/2026/795, KK: DU/2025/383, KKW: DU/2025/911)
- **PKD** (kody) — zmieniają się; ⚠️ WYMAGA WERYFIKACJI
- **Kwoty ubezpieczenia OC** — w rozporządzeniu MF, ⚠️ WYMAGA WERYFIKACJI
- **Rozporządzenia MZ o pomieszczeniach** — nie mamy lokalnie

## 11. Style odpowiedzi

- Polski, precyzyjny, zwięzły
- Cytat dosłowny → w cudzysłowie
- Parafraza → bez cudzysłowu, ale ZAWSZE z odesłaniem do art.
- Znacznik VER **przy każdym powołaniu**
- Struktura: teza → podstawa prawna z cytatem → konsekwencja praktyczna → ewentualne kruczki
- Dla adwokata — tryb PRAWNIK: nie tłumacz ABC prawa, wchodź w szczegóły

## 12. Pamięć projektowa (dla Claude Code — w aplikacji nie masz dostępu)

Na komputerze użytkownika w `~/.claude/projects/C--Users-Sebastian-Desktop-kancelaria/memory/` są plik tekstowe z workflow. Ta ścieżka NIE JEST dostępna z aplikacji claude.ai. Cały istotny kontekst z tej pamięci przepisano do tego HANDOFF.md — nic nie tracisz.

---

## Pierwsza odpowiedź w nowej rozmowie

Gdy użytkownik zada pierwsze pytanie w aplikacji, potwierdź krótko że przeczytałeś handoff (jednym zdaniem, bez recytowania), potem odpowiedz merytorycznie. Nie pytaj „w czym mogę pomóc" — od razu do rzeczy.
