# 03. Źródła i akty — obszar RODO

Warstwa weryfikacyjna dla rozdziałów [01](01-zakres-stosowania-rodo.md), [02](02-kancelaria-adwokacka-jdg.md) i [04](04-strona-www-formularz-home-pl.md) oraz dla [`spolki-medyczne/14-inspektor-ochrony-danych`](../spolki-medyczne/14-inspektor-ochrony-danych.md).

**Data opracowania: 2026-07-29** (data pobrania wszystkich aktów tego obszaru; pole `lastFetched` w `manifest.json`).

---

# 1. ✅ Akty w lokalnej bazie — komplet dla tego obszaru

Poprzednia wersja tego rozdziału opisywała, dlaczego RODO **nie** dało się pobrać (egress blokował `eur-lex.europa.eu`, `uodo.gov.pl`, `isap.sejm.gov.pl`). Blokada została zdjęta po stronie środowiska; wszystkie akty są w repo, skonwertowane i zindeksowane.

| Klucz `dump_articles.py` | Akt | ELI / CELEX | Katalog | Artykułów |
|---|---|---|---|---|
| `rodo` | **RODO — rozporządzenie (UE) 2016/679, wersja skonsolidowana**, ze sprostowaniami Dz.U. UE L 127 z 23.5.2018 i L 74 z 4.3.2021 | `CELEX 02016R0679-20160504` | `akty/rodo/rodo_-_..._wersja_skonsolidowana_*` | 99 |
| `rodo_motywy` | RODO — brzmienie z Dz.U. UE L 119 z 4.5.2016, **źródło preambuły** | `CELEX 32016R0679` | `akty/rodo/rodo_-_..._zrodlo_motywow_*` | 99 + **173 motywy** |
| `uodo` | Ustawa z 10.05.2018 o ochronie danych osobowych, t.j. z 30.08.2019 | `DU/2019/1781` | `akty/ochrona_danych/` | 132 |
| `poa` | Prawo o adwokaturze, t.j. z 11.10.2024 | `DU/2024/1564` | `akty/zawody_prawnicze/` | 173 |
| `usude` | Ustawa o świadczeniu usług drogą elektroniczną, t.j. z 10.10.2024 | `DU/2024/1513` | `akty/internet_i_komunikacja/` | 29 |
| `pke` | Prawo komunikacji elektronicznej z 12.07.2024 | `DU/2024/1221` | `akty/internet_i_komunikacja/` | 450 |
| `pke_wpr` | Przepisy wprowadzające PKE z 12.07.2024 | `DU/2024/1222` | `akty/internet_i_komunikacja/` | 133 |
| `wdrozeniowa2019` | Ustawa z 21.02.2019 o zmianie niektórych ustaw w zw. z zapewnieniem stosowania RODO | `DU/2019/730` | `akty/rodo/` | 322 |
| — | Ustawa z 23.01.2026 o zmianie ustawy o KSC (nowelizuje u.o.d.o. i PKE) | `DU/2026/252` | `akty/ochrona_danych/` | 132 |
| — | Ustawa z 27.03.2026 o zarządzaniu danymi (nowelizuje u.o.d.o.) | `DU/2026/548` | `akty/ochrona_danych/` | 39 |
| — | Ustawa z 3.07.2026 o systemach sztucznej inteligencji (nowelizuje u.o.d.o.; wejście **11.08.2026**) | `DU/2026/1003` | `akty/ochrona_danych/` | 128 |

Odczyt artykułu: `python tools/dump_articles.py rodo 6 30 | poa 6 16a 16b 16c | pke 398 399`
Odczyt motywu: `python tools/dump_articles.py rodo_motywy motyw_47`

Konwertery: `tools/html_act_to_md.py` (ELI HTML), `tools/pdf_act_to_md.py` (ELI PDF), **`tools/eurlex_act_to_md.py`** — dodany 2026-07-29 razem z tym obszarem, obsługuje klucze `arti_N` i `motyw_N`.

## 🚩 Trzy pułapki tej bazy — przeczytaj przed cytowaniem

**1. Wersja skonsolidowana RODO nie zawiera motywów.** EUR-Lex publikuje preambułę tylko w brzmieniu z Dziennika Urzędowego. Dlatego są dwa pliki: **artykuły cytuj z wersji skonsolidowanej** (ma sprostowania), **motywy z pliku `rodo_motywy`**. Plik `rodo_motywy` zawiera też artykuły, ale w brzmieniu pierwotnym, **bez sprostowań** — nie używaj go do artykułów.

**2. Identyfikator wersji skonsolidowanej wymaga sufiksu daty.** `CELEX:02016R0679` zwraca **404** — samo „02016R0679" nie jest adresowalnym dokumentem, tylko rodziną wersji. Poprawnie: `CELEX:02016R0679-20160504`, gdzie sufiks to data, *na którą* tekst jest skonsolidowany (nie data ostatniej zmiany). Ta wersja obejmuje oba sprostowania — potwierdzone nagłówkiem ►C1 ►C2 w źródle.

**3. t.j. u.o.d.o. z 2019 r. NIE jest tekstem aktualnym.** Akt bazowy `DU/2018/1000` po tekście jednolitym zmieniano trzykrotnie. Stan ustalony z endpointu `/references` i z odczytu tekstów nowelizacji:

| Nowelizacja | Co zmienia w u.o.d.o. | W mocy od | Status |
|---|---|---|---|
| `DU/2026/252` (KSC) | **art. 104** — 50 % kary za naruszenie art. 5 ust. 1 lit. f, art. 25 ust. 1 i 2, art. 28 ust. 3 lit. c oraz art. 32 ust. 1 i 2 RODO trafia do Funduszu Cyberbezpieczeństwa | 2026-04-03 | ✅ obowiązuje |
| `DU/2026/548` (zarządzanie danymi) | **art. 34 ust. 2a** — Prezes UODO organem właściwym ds. usług pośrednictwa danych i altruizmu danych (rozp. 2022/868) | 2026-07-23 | ✅ obowiązuje |
| `DU/2026/1003` (systemy AI) | **nowy art. 59a** — współpraca Prezesa UODO z Komisją Rozwoju i Bezpieczeństwa Sztucznej Inteligencji | 2026-08-11 | ⏳ vacatio legis |

**Żadna z tych trzech nie dotyka przepisów istotnych dla kancelarii** — art. 8–11 (IOD), art. 101–102 (kary administracyjne), art. 107–108 (odpowiedzialność karna) pozostają w brzmieniu z t.j. `DU/2019/1781`. ✅ [VER: odczyt tekstów DU/2026/252, DU/2026/548, DU/2026/1003, 2026-07-29]

**Uwaga na numerację t.j. u.o.d.o.:** art. 110–157 są w tekście jednolitym oznaczone „(pominięte)" — to przepisy zmieniające inne ustawy, standardowo pomijane w t.j. Indeks lokalny ma więc 132 klucze przy numeracji do art. 176. To nie błąd konwersji.

# 2. Aktualność aktów po tekstach jednolitych

## Prawo o adwokaturze — t.j. `DU/2024/1564` + trzy nowelizacje

| Nowelizacja | Czego dotyczy w PoA | W mocy od | Dotyka art. 6 / 16a–16c? |
|---|---|---|---|
| `DU/2025/1172` (KPC, KC) | art. 4 (nowy ust. 1c — poświadczanie dokumentów elektronicznych), art. 37d | 2026-03-01 | **nie** |
| `DU/2026/370` (u.s.p.) | art. 66, art. 78 („starszy asystent sędziego") | 2026-04-03 | **nie** |
| `DU/2026/846` (Ordynacja podatkowa) | **art. 6 ust. 4 — nowe brzmienie: zostaje tylko wyłączenie AML, znika odesłanie do rozdziału 11a działu III Ordynacji (MDR)** | **2026-10-01** | **TAK** 🚩 |

✅ [VER: api.sejm.gov.pl ELI DU/2025/1172, DU/2026/370, DU/2026/846 — odczyt tekstów, 2026-07-29]

**Do kalendarza: 1 października 2026 r.** Każda klauzula i polityka kancelarii powołująca wyłączenie tajemnicy dla MDR wymaga wtedy przeglądu. Do 30 września 2026 r. art. 6 ust. 4 ma dwa punkty.

## uśude — t.j. `DU/2024/1513` ogłoszony PRZED wejściem PKE

T.j. ogłoszono 10.10.2024, a przepisy wprowadzające PKE (`DU/2024/1222`) weszły w życie 10.11.2024. Tekst jednolity zawiera więc przypisy o brzmieniach „obowiązujących do wejścia w życie zmiany" — **czytając ten plik, sprawdzaj odnośniki**. Stan po 10.11.2024, ustalony z tekstu:

- **art. 10 uśude — „(uchylony)"**, przez art. 26 pkt 3 przepisów wprowadzających PKE. Niezamówiona informacja handlowa jest dziś w **art. 398 PKE**.
- art. 16, art. 17 oraz art. 20–22 uśude — również uchylone.
- art. 2 pkt 4 (definicja świadczenia usługi drogą elektroniczną) — zmieniony przez art. 26 pkt 1 lit. b tej samej ustawy (odesłanie do PKE zamiast do Prawa telekomunikacyjnego).

## PKE — `DU/2024/1221` + cztery nowelizacje

Zmieniające: `DU/2025/637` (30.05.2025), `DU/2025/820` (25.07.2025), `DU/2026/252` (3.04.2026), `DU/2026/815` (4.07.2026).

⚠️ **Nie sprawdzono, czy któraś dotyka art. 398–400.** Pobrany plik to tekst pierwotny z Dz.U. 2024 poz. 1221; brzmienie art. 398 i 399 odczytano z niego, ale **przed powołaniem w piśmie procesowym potwierdź przez ELI `/references`**, czy te konkretne jednostki nie były zmieniane. To najważniejszy otwarty dług weryfikacyjny obszaru.

# 3. Mapa przepisów — gdzie czego szukać

## RODO

| Zagadnienie | Przepis |
|---|---|
| zakres przedmiotowy i cztery wyłączenia | art. 2 |
| zakres terytorialny | art. 3 |
| definicje: dane osobowe, przetwarzanie, zbiór, administrator, procesor, odbiorca, zgoda, naruszenie | art. 4 pkt 1, 2, 6, 7, 8, 9, 11, 12 |
| zasady + rozliczalność | art. 5 ust. 1 i 2 |
| podstawy przetwarzania | art. 6 ust. 1 |
| warunki zgody | art. 7 |
| dane szczególnych kategorii | art. 9 (dla kancelarii zwł. ust. 2 lit. f) |
| dane o wyrokach skazujących i czynach zabronionych | art. 10 |
| obowiązek informacyjny | art. 13 (od osoby), art. 14 (z innego źródła), **art. 14 ust. 5 lit. d — tajemnica zawodowa** |
| prawa osób i termin miesiąca | art. 12 ust. 3, art. 15–22 |
| obowiązki administratora, privacy by design / by default | art. 24, art. 25 |
| powierzenie przetwarzania | art. 28 (zwł. ust. 1, 2 i 3 lit. a–h) |
| przetwarzanie na polecenie administratora | art. 29 |
| rejestr czynności + próg 250 osób | art. 30, zwł. **ust. 5** |
| bezpieczeństwo | art. 32 |
| naruszenia | art. 33 (72 h; rejestr w ust. 5), art. 34 (zawiadomienie osób) |
| DPIA | art. 35 |
| IOD | art. 37–39 |
| transfery poza EOG | art. 44–49 |
| odszkodowanie | art. 82 |
| kary administracyjne 2 % / 4 % | art. 83 ust. 4, 5 i 6 |
| **tajemnica zawodowa — upoważnienie dla państw członkowskich** | **art. 90** |
| motywy przydatne interpretacyjnie | motyw 39 (przejrzystość), 47 (prawnie uzasadniony interes), 91 (DPIA) — plik `rodo_motywy` |

## Prawo krajowe

| Zagadnienie | Przepis |
|---|---|
| tajemnica adwokacka — zakres, bezterminowość, dwa wyłączenia (AML, MDR do 30.09.2026) | art. 6 Prawa o adwokaturze |
| ograniczenie art. 15 ust. 1 i 3, art. 18 i art. 19 RODO; wyłączenie art. 21 ust. 1 RODO | art. 16a PoA |
| tajemnica nie ustaje wobec żądania Prezesa UODO | art. 16b PoA |
| **okresy przechowywania 5 / 10 / 15 lat + nakaz usunięcia** | art. 16c PoA — dla adwokatów **ust. 1 pkt 2 lit. c** i **ust. 2** |
| odpowiedniki dla radców prawnych | art. 5a–5c ustawy o radcach prawnych |
| obowiązek wyznaczenia IOD — odesłanie do art. 37 RODO | art. 8 u.o.d.o. |
| definicja „organów i podmiotów publicznych" (jsfp, instytuty badawcze, NBP) | art. 9 u.o.d.o. |
| zawiadomienie Prezesa UODO o IOD — **14 dni** | art. 10 u.o.d.o. |
| publikacja danych IOD (strona www albo miejsce działalności) | art. 11 u.o.d.o. |
| kary administracyjne krajowe (do 100 tys. zł dla sektora publicznego) | art. 101–102 u.o.d.o. |
| przeznaczenie wpływów z kar | art. 104 u.o.d.o. (zm. `DU/2026/252`) |
| odpowiedzialność karna — 2 lata / 3 lata przy danych szczególnych | art. 107 u.o.d.o. |
| utrudnianie kontroli — 2 lata | art. 108 ust. 1 u.o.d.o. |
| obowiązki informacyjne usługodawcy, w tym **zawody regulowane** | art. 5 uśude, zwł. **ust. 5** |
| regulamin usług elektronicznych | art. 8 uśude |
| oznaczanie informacji handlowej; definicja obejmująca zawody regulowane | art. 9 i art. 2 pkt 2 uśude |
| dane, które usługodawca może przetwarzać | art. 18 uśude |
| grzywna za brak danych z art. 5 | art. 23 uśude |
| **marketing / informacja handlowa — zgoda** | **art. 398 PKE** (nie art. 10 uśude — uchylony) |
| **cookies i dostęp do urządzenia końcowego** | **art. 399 PKE** (nie art. 173 Prawa telekomunikacyjnego — uchylone) |
| standard zgody w PKE = standard RODO | art. 400 PKE; art. 4 uśude |
| źródło art. 16a–16c PoA i art. 5a–5c u.r.p. | art. 6 i art. 7 ustawy `DU/2019/730` |
| katalog danych od kandydata i pracownika | Kodeks pracy art. 22¹ ⚠️ [KP nie ma jeszcze w bazie] |
| pisemne upoważnienia w podmiocie leczniczym | u.p.p. art. 24 ust. 2 pkt 2 ✅ [VER: ELI DU/2024/581] |

# 4. Dokumenty dostawcy hostingu — stan faktyczny, nie prawo

Odczyt **2026-07-29**, pełny tekst wyekstrahowany i przeanalizowany (analiza w rozdziale 04):

- [`regulaminy.home.pl/umowa-powierzenia-przetwarzania-danych-osobowych.pdf`](https://regulaminy.home.pl/umowa-powierzenia-przetwarzania-danych-osobowych.pdf) — wzorzec umowy powierzenia home.pl S.A. (Szczecin, KRS 0000431335). Kluczowe jednostki: § 1 (tryb art. 384 KC, ISO/IEC 27001), **§ 2 ust. 1 (zakres — deklaracja o braku danych szczególnych kategorii)**, § 3 ust. 4 (usunięcie w 30 dni), § 3 ust. 6 (środki wg deklaracji z § 2), § 3a (obowiązki administratora, domniemanie zgody jako podstawy), § 4 (podpowierzenie, sprzeciw), § 5 ust. 2 (zgłoszenie naruszenia w 48 h), **§ 5 ust. 3 (wyłączenie odpowiedzialności przy rozbieżności zakresu)**, § 5 ust. 5 (limit odpowiedzialności = opłaty z 12 mies.), § 6, § 9 ust. 1 (audyt → Polityka prywatności).
- [`regulaminy.home.pl/Polityka-prywatnosci-home.pl.pdf`](https://regulaminy.home.pl/Polityka-prywatnosci-home.pl.pdf) — sekcja „Audyt przetwarzania danych osobowych": audyt elektroniczny bezpłatnie **raz na 12 miesięcy**, kolejny odpłatnie wg cennika; audyt osobisty w siedzibie odpłatny, min. **21 dni** uprzedzenia. W obu dokumentach **brak jakiegokolwiek postanowienia o przekazywaniu danych poza EOG**.
- [`pomoc.home.pl/section/rodo-przetwarzanie-i-ochrona-danych-w-home-pl`](https://pomoc.home.pl/section/rodo-przetwarzanie-i-ochrona-danych-w-home-pl) — sekcja pomocy dostawcy.

⚠️ Wzorce dostawcy zmieniają się bez nowelizacji ustaw. **Przed powołaniem w opinii — pobrać ponownie i porównać.** W dokumentacji kancelarii trzymać kopię z datą odczytu.

# 5. Materiały organów i samorządów — do czego wolno ich używać

Poprzednia wersja rozdziałów 01 i 02 opierała się na tych materiałach, bo tekstów aktów nie było. Po pobraniu aktów **przestały być podstawą cytowania przepisów** — służą wyłącznie jako wskazówka interpretacyjna i wymagają osobnego oznaczenia. Reguła projektu: portal, poradnik ani komentarz nie zastępuje tekstu z ELI / EUR-Lex.

Jedna teza z poradników **nie znalazła potwierdzenia w tekście ustawy** i została skorygowana w rozdziale 02: że art. 16a–16c PoA „nie mają zastosowania do wewnętrznego funkcjonowania kancelarii". Takiego przepisu w Prawie o adwokaturze nie ma — granica wynika z zakresu tajemnicy z art. 6, nie z odrębnej klauzuli wyłączającej. Skutek praktyczny jest ten sam, ale uzasadnienie musi być poprawne.

## UODO

- [Kto może, a kto musi wyznaczyć IOD na podstawie RODO](https://uodo.gov.pl/pl/490/2270)
- [Wyznaczenie i status IOD](https://uodo.gov.pl/pl/495/205)
- [Jakie gwarancje niezależności zostały przyznane IOD](https://uodo.gov.pl/pl/495/2407)
- [Jakie zadania ma IOD](https://uodo.gov.pl/pl/673/4199)
- [Jakie kwalifikacje musi posiadać IOD](https://uodo.gov.pl/pl/665/4154)
- [Czy IOD musi odbyć szkolenie i posiadać certyfikat](https://uodo.gov.pl/pl/495/2359)
- [Czy funkcję IOD można łączyć z wykonywaniem zawodu prawniczego](https://uodo.gov.pl/pl/223/2347)
- [Wskazówki i wyjaśnienia dotyczące obowiązku rejestrowania czynności przetwarzania (PDF)](https://uodo.gov.pl/pl/file/708)
- [Rejestrowanie czynności przetwarzania](https://uodo.gov.pl/pl/383/214)
- [Obowiązek informacyjny](https://uodo.gov.pl/pl/324/787)
- [Zgodność z prawem](https://uodo.gov.pl/pl/322/1469)
- [Weryfikacja przestrzegania przepisów dotyczących IOD](https://uodo.gov.pl/pl/138/2438)
- [Kara pieniężna za nieudzielenie informacji](https://uodo.gov.pl/pl/360/1823)
- [Wytyczne 05/2021 EROD — wzajemne zależności (PDF)](https://uodo.gov.pl/pl/file/4498)
- [Grupa Robocza Art. 29 — wytyczne (PDF)](https://uodo.gov.pl/data/filemanager_pl/690.pdf)
- [Ustawa z 21.02.2019 wdrażająca RODO — omówienie UODO](https://uodo.gov.pl/pl/395/967)
- [Baza decyzji Prezesa UODO](https://orzeczenia.uodo.gov.pl/)

## Samorząd adwokacki

- [Poradnik dla radców prawnych i adwokatów — RODO (KRRP i NRA, PDF)](https://www.adwokatura.pl/admin/wgrane_pliki/file-poradnik-dla-radcow-prawnych-i-adwokatow-ogolne-rozporzadzenie-o-ochronie-danych-rodo-22897.pdf)
- [Poradnik KRRP/NRA — aktualizacja (PDF)](https://www.adwokatura.pl/admin/wgrane_pliki/file-2019-07-01-poradnikkrrpnraaktualizacja-kbm-28006.pdf)
- [Regulamin wykonywania zawodu adwokata — uchwała NRA nr 140/2023 (PDF)](https://www.adwokatura.pl/admin/wgrane_pliki/file-regulamin-wykonywania-zawodu-adwokata-1122023-39479.pdf)
- [Zbiór Zasad Etyki Adwokackiej i Godności Zawodu (PDF)](https://www.adwokatura.pl/admin/wgrane_pliki/file-20200123projektkomisjietykinra-zzeaigz-29810.pdf)
- [RPO — Ochrona tajemnicy adwokackiej (radcy prawnego) (PDF)](https://bip.brpo.gov.pl/sites/default/files/INTERNET_ochrona-tajemnicy.pdf)
- [NRA — Poradnik RODO, aktualizacja uwzględniająca ustawę z 21.02.2019](https://www.adwokatura.pl/ogolnoprawne/poradnik-rodo-aktualizacja/)
- [Kwartalnik „Radca Prawny" (KIRP) — tajemnica zawodowa a kontrola przestrzegania przepisów o ochronie danych](https://kwartalnikradcaprawny.kirp.pl/2018/10/10/tajemnica-zawodowa-radcy-prawnego-w-swietle-przepisow-o-kontroli-przestrzegania-przepisow-o-ochronie-danych-osobowych/)
- [KIRP — Memorandum dotyczące stosowania przepisów o tajemnicy zawodowej (PDF)](https://kirp.pl/wp-content/uploads/2019/04/tkp-memorandum-kirp-29042019.pdf)

## PARP — poradniki dla MŚP

- [Administrator, procesor, odbiorca — kto jest kim](https://www.parp.gov.pl/component/content/article/80756:administrator-procesor-odbiorca-kto-jest-kim-w-systemie-ochrony-danych-osobowych)
- [Udostępnienie a powierzenie przetwarzania danych](https://www.parp.gov.pl/component/content/article/66885:udostepnienie-a-powierzenie-przetwarzania-danych-osobowych-najwazniejsze-roznice)
- [Weryfikacja podmiotu przetwarzającego](https://www.parp.gov.pl/component/content/article/82121:weryfikacja-podmiotu-przetwarzajacego-dane-osobowe)
- [Polityka prywatności na stronach internetowych](https://www.parp.gov.pl/component/content/article/71109:polityka-prywatnosci-na-stronach-internetowych-jak-wlasciwie-spelnic-obowiazek-informacyjny)
- [Umowa jako podstawa przetwarzania danych](https://www.parp.gov.pl/component/content/article/81346:umowa-jako-podstawa-przetwarzania-danych-osobowych)
- [Upoważnienie czy umowa powierzenia](https://serwis-uslugirozwojowe.parp.gov.pl/component/content/article/84095:upowaznienie-do-przetwarzania-danych-osobowych-czy-umowa-powierzenia)
- [Inspektor Ochrony Danych w przedsiębiorstwie — zadania i odpowiedzialność](https://www.parp.gov.pl/component/content/article/84730:inspektor-ochrony-danych-w-przedsiebiorstwie-zadania-i-odpowiedzialnosc)
- [RODO — poradnik dla MŚP](https://en.parp.gov.pl/component/content/article/53868:rodo-ochrona-danych-osobowych-poradnik-dla-msp)

## Bazy oficjalne — adresy sprawdzone z tego środowiska 2026-07-29

- [EUR-Lex — RODO, wersja skonsolidowana (CELEX 02016R0679-20160504)](https://eur-lex.europa.eu/legal-content/PL/TXT/HTML/?uri=CELEX:02016R0679-20160504) ✅ **działa — źródło artykułów**
- [EUR-Lex — RODO, brzmienie z Dz.U. UE (CELEX 32016R0679)](https://eur-lex.europa.eu/legal-content/PL/TXT/HTML/?uri=CELEX%3A32016R0679) ✅ działa — źródło motywów
- [ELI API — dokumentacja](https://api.sejm.gov.pl/eli_pl.html) · [OpenAPI](https://api.sejm.gov.pl/eli/openapi/ui/) — publiczne, bez klucza ani rejestracji
- [ISAP — Prawo komunikacji elektronicznej, Dz.U. 2024 poz. 1221](https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20240001221)
- [ISAP — przepisy wprowadzające PKE, Dz.U. 2024 poz. 1222](https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20240001222)
- [ISAP — Prawo o adwokaturze](https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19820160124)
- [gov.pl — Nowe Prawo Komunikacji Elektronicznej: co zmieni](https://www.gov.pl/web/baza-wiedzy/nowe-prawo-komunikacji-elektronicznej--co-zmieni)
- [biznes.gov.pl — Zawiadomienie o wyznaczeniu IOD](https://www.biznes.gov.pl/pl/portal/ou871)

# 6. Dług weryfikacyjny obszaru

| # | Kwestia | Dlaczego ważna | Gdzie sprawdzić |
|---|---|---|---|
| 1 | czy nowelizacje PKE (`DU/2025/637`, `DU/2025/820`, `DU/2026/252`, `DU/2026/815`) dotykają **art. 398–400** | to podstawa cookies i marketingu, cytowana w każdej polityce | ELI `/references` dla `DU/2024/1221` + teksty nowelizacji |
| 2 | jak liczyć 10 lat z art. 16c PoA przy czynnościach bez postępowania (porada, opinia) | wyznacza politykę retencji kancelarii | NRA, Regulamin wykonywania zawodu adwokata |
| 3 | kolizja art. 16c ust. 2 PoA (nakaz usunięcia) z bezterminowością tajemnicy (art. 6 ust. 2 PoA) | rozstrzyga los akt po 10 latach | stanowisko NRA, doktryna |
| 4 | **ustawa AML — brak w bazie** | art. 6 ust. 4 pkt 1 PoA odsyła do niej wprost; po 1.10.2026 będzie jedynym wyłączeniem tajemnicy | jest w `config.json` jako pozycja do rozwiązania (`--resolve`) |
| 5 | **Prawo przedsiębiorców — brak w bazie** | art. 5 ust. 4 uśude odsyła do art. 20 ust. 3 (NIP w ofercie) | ELI; do dopisania do `config.json` |
| 6 | **Kodeks pracy — brak w bazie** | art. 22¹ KP (dane kandydata i pracownika) — proces nr 5 kancelarii | `config.json`, pozycja `Kodeks pracy` |
| 7 | Zbiór Zasad Etyki Adwokackiej, Regulamin wykonywania zawodu | reklama, przechowywanie akt, zobowiązania współpracowników do tajemnicy | adwokatura.pl — **akty samorządowe, nie ma ich w ELI** |
| 8 | status transferów do USA (analityka, chmura) | warunkuje legalność Google Analytics i narzędzi chmurowych | decyzje wykonawcze KE, orzecznictwo TSUE, komunikaty EROD |
| 9 | lista podprocesorów home.pl i lokalizacja przetwarzania | wzorzec DPA milczy o EOG | panel klienta, audyt elektroniczny raz na 12 mies. |

---

## Zastrzeżenie

Materiały UODO, PARP i samorządu adwokackiego są **wykładnią i praktyką**, nie tekstem prawa — przy sporze wiąże treść aktu. Dokumenty home.pl są **stanem faktycznym po stronie dostawcy** i mogą się zmienić bez żadnej nowelizacji.

## Powiązania

[01-zakres-stosowania-rodo.md](01-zakres-stosowania-rodo.md) · [02-kancelaria-adwokacka-jdg.md](02-kancelaria-adwokacka-jdg.md) · [04-strona-www-formularz-home-pl.md](04-strona-www-formularz-home-pl.md)
