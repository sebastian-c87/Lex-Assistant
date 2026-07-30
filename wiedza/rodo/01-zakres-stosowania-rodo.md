# 01. Kogo i jakich działalności dotyczy RODO

## ✅ Status weryfikacyjny

Rozdział przepisany **2026-07-29** na tekstach odczytanych z lokalnej bazy — poprzednia wersja opierała się na materiałach UODO i PARP, bo egress blokował wtedy wszystkie źródła urzędowe. Teraz akty są w repo.

Wszystkie cytaty RODO pochodzą z **wersji skonsolidowanej EUR-Lex CELEX 02016R0679-20160504** (zawiera sprostowania Dz.U. UE L 127 z 23.5.2018 i L 74 z 4.3.2021) — plik `akty/rodo/rodo_-_rozporzadzenie_ue_2016_679_wersja_skonsolidowana_*.index.json`, klucze `arti_N`. Motywy — z `akty/rodo/rodo_-_..._zrodlo_motywow_*.index.json`, klucze `motyw_N`.

Znacznik `✅ [VER: EUR-Lex CELEX 02016R0679-20160504, 2026-07-29]` skracam dalej do **`[VER-RODO]`**.

Odczyt: `python tools/dump_articles.py rodo 5 6 30 37`

---

# 1. Zasada wyjściowa: pyta się o wyłączenie, nie o objęcie

Domyślnie RODO obejmuje każdego, kto przetwarza dane osobowe w związku z działalnością. Właściwe pytanie to nie „czy podlegam", ale „czy mieszczę się w jednym z czterech wyłączeń z art. 2 ust. 2".

Bez znaczenia są:

| Czynnik | Dlaczego bez znaczenia |
|---|---|
| **forma prawna** | art. 4 pkt 7 definiuje administratora jako „osobę fizyczną lub prawną, organ publiczny, jednostkę lub inny podmiot" — JDG, spółka cywilna, sp. z o.o., fundacja, stowarzyszenie na równi |
| **wielkość** | jedyny próg wielkościowy w całym rozporządzeniu to art. 30 ust. 5 (rejestr czynności, 250 osób) i ma on trzy wyjątki — patrz § 5 |
| **zarobkowy charakter** | art. 2 ust. 1 mówi o „przetwarzaniu danych osobowych", nie o działalności gospodarczej |
| **„wrażliwość" danych** | art. 4 pkt 1: dane osobowe to „wszelkie informacje o zidentyfikowanej lub możliwej do zidentyfikowania osobie fizycznej"; imię i adres e-mail wystarczą |

# 2. Zakres przedmiotowy — art. 2 ust. 1

> „Niniejsze rozporządzenie ma zastosowanie do przetwarzania danych osobowych w sposób całkowicie lub częściowo zautomatyzowany oraz do przetwarzania w sposób inny niż zautomatyzowany danych osobowych stanowiących część zbioru danych lub mających stanowić część zbioru danych."

✅ **[VER-RODO]** art. 2 ust. 1

Dwie ścieżki objęcia. **Zautomatyzowana** — komputer, telefon, poczta elektroniczna, strona www, chmura; nie ma tu wymogu zbioru, wystarczy jedna operacja. **Niezautomatyzowana** — papier wchodzi tylko wtedy, gdy stanowi zbiór danych albo ma go stanowić, a zbiór to w rozumieniu art. 4 pkt 6 „uporządkowany zestaw danych osobowych dostępnych według określonych kryteriów". Teczki klientów ułożone alfabetycznie to zbiór; pojedyncza luźna notatka — nie.

„Przetwarzanie" jest przy tym pojęciem maksymalnie szerokim — art. 4 pkt 2 wymienia m.in. „zbieranie, utrwalanie, organizowanie, porządkowanie, przechowywanie, adaptowanie lub modyfikowanie, pobieranie, przeglądanie, wykorzystywanie, ujawnianie poprzez przesłanie, rozpowszechnianie lub innego rodzaju udostępnianie, dopasowywanie lub łączenie, ograniczanie, usuwanie lub niszczenie". Samo **przechowywanie** danych na serwerze jest już przetwarzaniem — to podstawa kwalifikacji hostingodawcy jako procesora. ✅ **[VER-RODO]** art. 4 pkt 2

## Cztery wyłączenia z art. 2 ust. 2

> „Niniejsze rozporządzenie nie ma zastosowania do przetwarzania danych osobowych: a) w ramach działalności nieobjętej zakresem prawa Unii; b) przez państwa członkowskie w ramach wykonywania działań wchodzących w zakres tytułu V rozdział 2 TUE; c) przez osobę fizyczną w ramach czynności o czysto osobistym lub domowym charakterze; d) przez właściwe organy do celów zapobiegania przestępczości, prowadzenia postępowań przygotowawczych, wykrywania i ścigania czynów zabronionych lub wykonywania kar, w tym ochrony przed zagrożeniami dla bezpieczeństwa publicznego i zapobiegania takim zagrożeniom."

✅ **[VER-RODO]** art. 2 ust. 2

Dla działalności gospodarczej użyteczne jest wyłącznie lit. c i **nigdy nie obejmuje ono działalności zawodowej** — „czysto osobisty lub domowy charakter" wyklucza kontekst zarobkowy. Lit. d dotyczy organów (policja, prokuratura), **nie** pełnomocnika w sprawie karnej: adwokat nie jest „właściwym organem", więc przetwarzanie akt karnych podlega RODO, a modyfikuje je dopiero prawo krajowe wydane na podstawie art. 90 RODO (art. 16a–16c Prawa o adwokaturze — rozdział 02).

# 3. Zakres terytorialny — art. 3

Trzy niezależne podstawy:

- **ust. 1, kryterium jednostki organizacyjnej** — „w związku z działalnością prowadzoną przez jednostkę organizacyjną administratora lub podmiotu przetwarzającego w Unii, niezależnie od tego, czy przetwarzanie odbywa się w Unii". Polska kancelaria podlega, choćby serwer stał w USA.
- **ust. 2, kryterium ukierunkowania** — podmiot bez jednostki w Unii podlega, jeżeli czynności wiążą się z „a) oferowaniem towarów lub usług takim osobom, których dane dotyczą, w Unii – niezależnie od tego, czy wymaga się od tych osób zapłaty; lub b) monitorowaniem ich zachowania, o ile do zachowania tego dochodzi w Unii".
- **ust. 3** — administrator bez jednostki w Unii, ale z jednostką w miejscu, w którym na mocy prawa międzynarodowego publicznego stosuje się prawo państwa członkowskiego.

✅ **[VER-RODO]** art. 3 ust. 1–3

# 4. Trzy role — od nich zależy katalog obowiązków

| Rola | Definicja dosłowna | Przepis |
|---|---|---|
| **administrator** | „osoba fizyczna lub prawna, organ publiczny, jednostka lub inny podmiot, który samodzielnie lub wspólnie z innymi **ustala cele i sposoby** przetwarzania danych osobowych" | art. 4 pkt 7 ✅ **[VER-RODO]** |
| **podmiot przetwarzający** | „osoba fizyczna lub prawna, organ publiczny, jednostka lub inny podmiot, który przetwarza dane osobowe **w imieniu administratora**" | art. 4 pkt 8 ✅ **[VER-RODO]** |
| **odbiorca** | „osoba fizyczna lub prawna, organ publiczny, jednostka lub inny podmiot, któremu ujawnia się dane osobowe, niezależnie od tego, czy jest stroną trzecią"; organy publiczne otrzymujące dane „w ramach konkretnego postępowania" **nie są** odbiorcami | art. 4 pkt 9 ✅ **[VER-RODO]** |

Test rozgraniczający: **kto decyduje o celu**. Hostingodawca, dostawca poczty, firma IT, biuro rachunkowe działające na zlecenie — procesorzy, z nimi umowa powierzenia. Sąd, przeciwnik procesowy, bank, kurier, ZUS — samodzielni administratorzy; **umowy powierzenia się z nimi nie zawiera** i to częsty błąd wdrożeniowy. Zdanie drugie art. 4 pkt 9 dodatkowo wyłącza sąd żądający akt w konkretnej sprawie z kategorii odbiorców.

# 5. Trzy warstwy natężenia obowiązków

## Warstwa A — każdy administrator, bez żadnego progu

| Obowiązek | Przepis |
|---|---|
| sześć zasad: zgodność z prawem, rzetelność i przejrzystość; ograniczenie celu; minimalizacja; prawidłowość; ograniczenie przechowywania; integralność i poufność — plus **rozliczalność** w ust. 2 | art. 5 ust. 1 i 2 |
| podstawa prawna z zamkniętego katalogu sześciu | art. 6 ust. 1 |
| przy szczególnych kategoriach danych — dodatkowo warunek z art. 9 ust. 2; przy danych o wyrokach — art. 10 | art. 9, art. 10 |
| obowiązek informacyjny | art. 13 (dane od osoby) / art. 14 (z innego źródła) |
| obsługa praw osób, co do zasady w miesiąc | art. 12 ust. 3, art. 15–22 |
| środki techniczne i organizacyjne + zdolność wykazania zgodności | art. 24 ust. 1 |
| ochrona danych w fazie projektowania i domyślna | art. 25 |
| umowa powierzenia z każdym procesorem | art. 28 ust. 3 |
| przetwarzanie przez osoby podległe wyłącznie na polecenie administratora | art. 29 |
| bezpieczeństwo przetwarzania | art. 32 |
| zgłoszenie naruszenia organowi w 72 h; zawiadomienie osób przy wysokim ryzyku | art. 33, art. 34 |

## Warstwa B — po przekroczeniu progu

**Rejestr czynności przetwarzania (art. 30).** Wyjątek z ust. 5 trzeba czytać dokładnie:

> „Obowiązki, o których mowa w ust. 1 i 2, nie mają zastosowania do przedsiębiorcy lub podmiotu zatrudniającego mniej niż 250 osób, **chyba że** przetwarzanie, którego dokonują, może powodować ryzyko naruszenia praw lub wolności osób, których dane dotyczą, **nie ma charakteru sporadycznego** lub obejmuje szczególne kategorie danych osobowych, o których mowa w art. 9 ust. 1, lub dane osobowe dotyczące wyroków skazujących i czynów zabronionych, o czym mowa w art. 10."

✅ **[VER-RODO]** art. 30 ust. 5

Trzy przesłanki spięte „lub" — **wystarczy jedna**, żeby obowiązek wrócił. Każdy, kto przetwarza dane klientów regularnie (czyli nie sporadycznie), rejestr prowadzi niezależnie od zatrudnienia. W działalności usługowej wyjątek praktycznie nie działa.

**Inspektor ochrony danych (art. 37 ust. 1).** Trzy przypadki obowiązkowe:

> „a) przetwarzania dokonują organ lub podmiot publiczny, z wyjątkiem sądów w zakresie sprawowania przez nie wymiaru sprawiedliwości; b) główna działalność administratora lub podmiotu przetwarzającego polega na operacjach przetwarzania, które ze względu na swój charakter, zakres lub cele wymagają regularnego i systematycznego monitorowania osób, których dane dotyczą, **na dużą skalę**; lub c) główna działalność administratora lub podmiotu przetwarzającego polega na przetwarzaniu **na dużą skalę** szczególnych kategorii danych osobowych, o których mowa w art. 9, lub danych osobowych dotyczących wyroków skazujących i czynów zabronionych, o czym mowa w art. 10."

✅ **[VER-RODO]** art. 37 ust. 1

Krajowe uzupełnienia: art. 8 u.o.d.o. odsyła wprost do art. 37 RODO, a art. 9 u.o.d.o. definiuje „organy i podmioty publiczne" z lit. a jako jednostki sektora finansów publicznych, instytuty badawcze i NBP. Jeżeli IOD zostanie wyznaczony — art. 10 ust. 1 u.o.d.o. nakazuje zawiadomić Prezesa UODO **w 14 dni**, a art. 11 u.o.d.o. udostępnić dane inspektora „na swojej stronie internetowej, a jeżeli nie prowadzi własnej strony internetowej, w sposób ogólnie dostępny w miejscu prowadzenia działalności". ✅ [VER: api.sejm.gov.pl ELI DU/2019/1781, 2026-07-29]

**Ocena skutków — DPIA (art. 35).** Wymagana, gdy przetwarzanie „z dużym prawdopodobieństwem może powodować wysokie ryzyko naruszenia praw lub wolności osób fizycznych"; ust. 3 wymienia trzy przypadki obowiązkowe wprost — systematyczną zautomatyzowaną ocenę będącą podstawą decyzji o skutkach prawnych, przetwarzanie **na dużą skalę** danych z art. 9 ust. 1 lub art. 10 oraz systematyczne monitorowanie miejsc publicznych na dużą skalę. ✅ **[VER-RODO]**

## Warstwa C — obowiązki sektorowe nakładane na RODO

Nie zastępują RODO, tylko się na nie nakładają: dokumentacja medyczna (u.p.p. + rozporządzenia MZ), tajemnica adwokacka i radcowska (art. 90 RODO → art. 16a–16c Prawa o adwokaturze), AML, cookies i marketing elektroniczny (Prawo komunikacji elektronicznej), regulamin usług elektronicznych (uśude), Kodeks pracy przy zatrudnianiu.

# 6. Najczęstsze mity

| Mit | Jak jest |
|---|---|
| „JDG bez pracowników nie podlega" | podlega — w art. 2 i 3 nie ma żadnego progu |
| „mam tylko e-maile, to nie dane osobowe" | art. 4 pkt 1 wymienia „identyfikator internetowy" wprost |
| „na wszystko potrzebna jest zgoda" | zgoda to jedna z sześciu podstaw z art. 6 ust. 1; przy umowie właściwa jest lit. b, przy obowiązku ustawowym lit. c |
| „muszę mieć IOD" | tylko trzy przypadki z art. 37 ust. 1 |
| „muszę zgłosić zbiór do UODO" | rejestracja zbiorów zniknęła wraz ze starą ustawą; zgłasza się wyłącznie IOD-a, jeśli wyznaczony (art. 10 u.o.d.o.) |
| „rejestr czynności to formalność dla dużych" | art. 30 ust. 5 — trzy wyjątki od wyjątku |
| „papier jest poza RODO" | tylko jeśli nie stanowi i nie ma stanowić zbioru (art. 2 ust. 1 in fine) |
| „RODO zabrania przetwarzania danych o wyrokach" | art. 10 nie zabrania — wymaga nadzoru władz publicznych albo podstawy w prawie Unii lub krajowym z odpowiednimi zabezpieczeniami |

# 7. Sankcje — dwa progi z art. 83, odszkodowanie i odpowiedzialność karna

**Do 10 000 000 EUR albo 2 % całkowitego rocznego światowego obrotu** z poprzedniego roku obrotowego, „przy czym zastosowanie ma kwota wyższa" — naruszenia obowiązków administratora i procesora z art. 8, 11, **25–39** oraz 42 i 43. Tu wpadają: brak rejestru czynności (art. 30), brak umowy powierzenia (art. 28), niedostateczne bezpieczeństwo (art. 32), niezgłoszenie naruszenia (art. 33), brak DPIA (art. 35). ✅ **[VER-RODO]** art. 83 ust. 4

**Do 20 000 000 EUR albo 4 % obrotu** (kwota wyższa) — „a) podstawowych zasad przetwarzania, w tym warunków zgody, o których to zasadach i warunkach mowa w art. 5, 6, 7 oraz 9; b) praw osób, których dane dotyczą, o których mowa w art. 12–22; c) przekazywania danych osobowych odbiorcy w państwie trzecim […] o którym to przekazywaniu mowa w art. 44–49" oraz nieprzestrzeganie nakazu organu. ✅ **[VER-RODO]** art. 83 ust. 5 i 6

**Odszkodowanie cywilne** — art. 82 ust. 1: „Każda osoba, która poniosła szkodę majątkową lub niemajątkową w wyniku naruszenia niniejszego rozporządzenia, ma prawo uzyskać od administratora lub podmiotu przetwarzającego odszkodowanie za poniesioną szkodę." Procesor odpowiada tylko za naruszenie obowiązków nałożonych bezpośrednio na procesorów albo działanie poza poleceniami administratora (ust. 2). ✅ **[VER-RODO]**

**Odpowiedzialność karna krajowa** — art. 107 u.o.d.o.: kto przetwarza dane, „choć ich przetwarzanie nie jest dopuszczalne albo do ich przetwarzania nie jest uprawniony" — grzywna, ograniczenie wolności albo pozbawienie wolności **do lat 2**; przy danych szczególnych kategorii wymienionych w ust. 2 — **do lat 3**. Art. 108 ust. 1 u.o.d.o.: udaremnianie lub utrudnianie kontroli — do lat 2. ✅ [VER: api.sejm.gov.pl ELI DU/2019/1781, 2026-07-29]

Podział wpływów z kar: art. 104 u.o.d.o. w brzmieniu nadanym ustawą z 23.01.2026 (Dz.U. 2026 poz. 252, w mocy od 3.04.2026) kieruje 50 % kary za naruszenie art. 5 ust. 1 lit. f, art. 25 ust. 1 i 2, art. 28 ust. 3 lit. c oraz art. 32 ust. 1 i 2 RODO do Funduszu Cyberbezpieczeństwa. ✅ [VER: api.sejm.gov.pl ELI DU/2026/252, 2026-07-29]

## Powiązania

- Kancelaria adwokacka jako JDG, tajemnica zawodowa → [02-kancelaria-adwokacka-jdg.md](02-kancelaria-adwokacka-jdg.md)
- Strona www z formularzem, hosting home.pl, cookies → [04-strona-www-formularz-home-pl.md](04-strona-www-formularz-home-pl.md)
- Mapa źródeł, ELI/CELEX, stan aktualności → [03-zrodla-i-akty.md](03-zrodla-i-akty.md)
- IOD w podmiocie leczniczym → [`../spolki-medyczne/14-inspektor-ochrony-danych.md`](../spolki-medyczne/14-inspektor-ochrony-danych.md)
