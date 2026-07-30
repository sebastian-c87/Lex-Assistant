# RODO w kancelarii adwokackiej prowadzonej jako JDG — analiza kompletna

**Kazus:** adwokat prowadzący jednoosobową działalność gospodarczą, ze stroną internetową hostowaną na **home.pl**, zawierającą **formularz kontaktowy**, przez który klienci zostawiają dane.

**Data analizy:** 2026-07-30. **Data pobrania aktów:** 2026-07-29 / 2026-07-30 (pole `lastFetched` w `manifest.json`).

---

## Jak czytać oznaczenia

| Znacznik | Znaczenie |
|---|---|
| ✅ **[VER-RODO]** | EUR-Lex, CELEX **02016R0679-20160504** — wersja skonsolidowana ze sprostowaniami Dz.U. UE L 127 z 23.5.2018 i L 74 z 4.3.2021, odczyt 2026-07-29 |
| ✅ **[VER-PoA]** | api.sejm.gov.pl ELI **DU/2024/1564** — t.j. Prawa o adwokaturze z 11.10.2024 |
| ✅ **[VER-uodo]** | ELI **DU/2019/1781** — t.j. ustawy o ochronie danych osobowych z 30.08.2019 |
| ✅ **[VER-PKE]** | ELI **DU/2024/1221** — Prawo komunikacji elektronicznej z 12.07.2024 |
| ✅ **[VER-uśude]** | ELI **DU/2024/1513** — t.j. ustawy o świadczeniu usług drogą elektroniczną z 10.10.2024 |
| ✅ **[VER-AML]** | ELI **DU/2025/644** — t.j. ustawy o przeciwdziałaniu praniu pieniędzy z 9.05.2025 |
| ✅ **[VER-KP]** | ELI **DU/2025/277** — t.j. Kodeksu pracy z 14.02.2025 |
| ✅ **[VER-przeds]** | ELI **DU/2025/1480** — t.j. Prawa przedsiębiorców z 20.10.2025 |
| 📄 **[ŹRÓDŁO: home.pl]** | wzorce umowne dostawcy hostingu, odczyt 2026-07-29 — **stan faktyczny, nie prawo** |
| ⚠️ | kwestia niezweryfikowana albo nierozstrzygnięta w tekście aktu |

Wszystkie akty są w `akty/`. Odczyt artykułu: `python3 tools/dump_articles.py rodo 30 | poa 16c | pke 399 | aml 75 | kp 221`.

---

# CZĘŚĆ I. Kogo dotyczy RODO

## 1. Pytanie stawia się odwrotnie

Nie „czy moja działalność podlega RODO", tylko „czy mieszczę się w jednym z czterech wyłączeń z art. 2 ust. 2". Domyślnie podlega każdy, kto przetwarza dane osobowe w związku z działalnością.

Art. 2 ust. 1 wyznacza dwie ścieżki objęcia:

> „Niniejsze rozporządzenie ma zastosowanie do przetwarzania danych osobowych w sposób całkowicie lub częściowo zautomatyzowany oraz do przetwarzania w sposób inny niż zautomatyzowany danych osobowych stanowiących część zbioru danych lub mających stanowić część zbioru danych."

✅ **[VER-RODO]** art. 2 ust. 1

- **Zautomatyzowana** — komputer, telefon, poczta elektroniczna, strona www, chmura. Nie ma wymogu zbioru; wystarczy jedna operacja.
- **Niezautomatyzowana** — papier wchodzi tylko wtedy, gdy stanowi zbiór albo ma go stanowić. Zbiór to „uporządkowany zestaw danych osobowych dostępnych według określonych kryteriów" (art. 4 pkt 6). Teczki klientów ułożone alfabetycznie — zbiór. Pojedyncza luźna notatka — nie.

„Przetwarzanie" jest pojęciem maksymalnie szerokim: art. 4 pkt 2 wymienia m.in. „zbieranie, utrwalanie, organizowanie, porządkowanie, **przechowywanie**, adaptowanie lub modyfikowanie, pobieranie, przeglądanie, wykorzystywanie, ujawnianie poprzez przesłanie […] usuwanie lub niszczenie". ✅ **[VER-RODO]** To samo przechowywanie danych na serwerze jest już przetwarzaniem — na tym opiera się kwalifikacja hostingodawcy jako procesora (Część IV).

## 2. Co jest bez znaczenia

| Czynnik | Dlaczego nie ma znaczenia |
|---|---|
| **forma prawna** | art. 4 pkt 7 definiuje administratora jako „osobę fizyczną lub prawną, organ publiczny, jednostkę lub inny podmiot" — JDG, spółka cywilna, sp. z o.o., fundacja, stowarzyszenie tak samo |
| **wielkość** | jedyny próg wielkościowy w całym rozporządzeniu to art. 30 ust. 5 (rejestr czynności, 250 osób) — i ma trzy wyjątki, patrz Część III |
| **zarobkowy charakter** | art. 2 ust. 1 mówi o przetwarzaniu danych, nie o działalności gospodarczej; wspólnota mieszkaniowa i stowarzyszenie też są administratorami |
| **„wrażliwość" danych** | art. 4 pkt 1 — dane osobowe to „wszelkie informacje o zidentyfikowanej lub możliwej do zidentyfikowania osobie fizycznej", wprost z „identyfikatorem internetowym"; imię i adres e-mail wystarczą |
| **posiadanie strony www** | nie jest warunkiem niczego — strona tylko dokłada warstwy (Część IV) |

## 3. Cztery wyłączenia z art. 2 ust. 2

> „a) w ramach działalności nieobjętej zakresem prawa Unii; b) przez państwa członkowskie w ramach wykonywania działań wchodzących w zakres tytułu V rozdział 2 TUE; c) przez osobę fizyczną w ramach czynności o **czysto osobistym lub domowym charakterze**; d) przez właściwe organy do celów zapobiegania przestępczości, prowadzenia postępowań przygotowawczych, wykrywania i ścigania czynów zabronionych lub wykonywania kar […]"

✅ **[VER-RODO]** art. 2 ust. 2

Dla działalności gospodarczej użyteczne jest wyłącznie lit. c i **nigdy nie obejmuje działalności zawodowej** — „czysto osobisty lub domowy charakter" wyklucza kontekst zarobkowy.

**Lit. d nie ratuje adwokata w sprawie karnej.** Dotyczy „właściwych organów" — policji, prokuratury, sądu w zakresie ścigania. Pełnomocnik ani obrońca nie jest właściwym organem, więc przetwarzanie akt karnych podlega RODO. Modyfikuje je dopiero prawo krajowe wydane na podstawie art. 90 RODO (art. 16a–16c Prawa o adwokaturze — Część II).

## 4. Zakres terytorialny — art. 3

- **ust. 1** — kryterium jednostki organizacyjnej: „w związku z działalnością prowadzoną przez jednostkę organizacyjną administratora lub podmiotu przetwarzającego w Unii, **niezależnie od tego, czy przetwarzanie odbywa się w Unii**". Polska kancelaria podlega, choćby serwer stał w USA.
- **ust. 2** — kryterium ukierunkowania: podmiot bez jednostki w Unii podlega, gdy oferuje towary lub usługi osobom w Unii albo monitoruje ich zachowanie.
- **ust. 3** — jednostka w miejscu, gdzie na mocy prawa międzynarodowego publicznego stosuje się prawo państwa członkowskiego.

✅ **[VER-RODO]** art. 3 ust. 1–3

## 5. Trzy role — od nich zależy katalog obowiązków

| Rola | Definicja dosłowna | Przepis |
|---|---|---|
| **administrator** | „[…] który samodzielnie lub wspólnie z innymi **ustala cele i sposoby** przetwarzania danych osobowych" | art. 4 pkt 7 |
| **podmiot przetwarzający** | „[…] który przetwarza dane osobowe **w imieniu administratora**" | art. 4 pkt 8 |
| **odbiorca** | „[…] któremu ujawnia się dane osobowe, niezależnie od tego, czy jest stroną trzecią"; organy publiczne otrzymujące dane „w ramach konkretnego postępowania" **nie są** odbiorcami | art. 4 pkt 9 |

✅ **[VER-RODO]**

Test rozgraniczający: **kto decyduje o celu**. Hostingodawca, dostawca poczty, firma IT, biuro rachunkowe na zlecenie — procesorzy, z nimi umowa powierzenia. Sąd, przeciwnik procesowy, bank, kurier, ZUS — samodzielni administratorzy; **umowy powierzenia się z nimi nie zawiera**, i to częsty błąd wdrożeniowy. Zdanie drugie art. 4 pkt 9 dodatkowo wyjmuje sąd żądający akt w konkretnej sprawie z kategorii odbiorców.

## 6. Jakie działalności to w praktyce oznacza

Podlega każda działalność, w której pojawiają się dane choćby jednej osoby fizycznej: klientów, pacjentów, kontrahentów, pracowników, kandydatów do pracy, osób piszących z zapytaniem. Wyłączenie jest tak wąskie, że praktycznie nie dotyczy nikogo prowadzącego działalność. **Różnicuje się natomiast natężenie obowiązków** — trzy warstwy:

- **Warstwa A, bez progu:** zasady i rozliczalność (art. 5), podstawa prawna (art. 6, przy danych szczególnych art. 9, przy wyrokach art. 10), obowiązek informacyjny (art. 13/14), prawa osób (art. 12 ust. 3, art. 15–22), środki i wykazanie zgodności (art. 24), privacy by design/default (art. 25), umowy powierzenia (art. 28 ust. 3), przetwarzanie na polecenie (art. 29), bezpieczeństwo (art. 32), naruszenia (art. 33, 34).
- **Warstwa B, po przekroczeniu progu:** rejestr czynności (art. 30 ust. 5), IOD (art. 37 ust. 1), DPIA (art. 35).
- **Warstwa C, nakładki sektorowe:** tajemnica zawodowa (art. 90 RODO → art. 16a–16c PoA), AML, cookies i marketing (PKE), regulamin usług elektronicznych (uśude), Kodeks pracy przy zatrudnianiu, dokumentacja medyczna w ochronie zdrowia.

## 7. Siedem mitów

| Mit | Jak jest |
|---|---|
| „JDG bez pracowników nie podlega" | podlega — w art. 2 i 3 nie ma żadnego progu |
| „mam tylko e-maile, to nie są dane osobowe" | art. 4 pkt 1 wymienia „identyfikator internetowy" wprost |
| „na wszystko potrzebna jest zgoda" | zgoda to jedna z sześciu podstaw z art. 6 ust. 1; przy umowie właściwa lit. b, przy obowiązku ustawowym lit. c |
| „muszę mieć IOD" | tylko trzy przypadki z art. 37 ust. 1 |
| „muszę zgłosić zbiór do UODO" | rejestracja zbiorów zniknęła wraz ze starą ustawą; zgłasza się wyłącznie IOD-a, jeśli wyznaczony (art. 10 u.o.d.o.) |
| „rejestr czynności to formalność dla dużych" | art. 30 ust. 5 ma trzy wyjątki od wyjątku — u adwokata spełnione wszystkie trzy |
| „papier jest poza RODO" | tylko jeśli nie stanowi i nie ma stanowić zbioru |

---

# CZĘŚĆ II. Co odróżnia adwokata — tajemnica zawodowa

## 1. Pięć procesów przetwarzania w kancelarii

Mieszanie ich to najczęstszy błąd w dokumentacji. Każdy ma inną podstawę i inny reżim.

| # | Proces | Czyje dane | Podstawa typowa |
|---|---|---|---|
| 1 | prowadzenie sprawy klienta | klienta | art. 6 ust. 1 lit. b + lit. c |
| 2 | **dane osób trzecich w aktach** — przeciwnik, świadkowie, biegli, rodzina | osób niebędących klientem | art. 6 ust. 1 lit. f; dla danych szczególnych **art. 9 ust. 2 lit. f**; dla wyroków **art. 10** |
| 3 | kontakt przez formularz, e-mail, telefon | osoby zainteresowanej | art. 6 ust. 1 lit. b (działania przed zawarciem umowy) albo lit. f |
| 4 | obowiązki księgowe, podatkowe, **AML** | klientów i kontrahentów | art. 6 ust. 1 lit. c |
| 5 | zatrudnienie i współpraca | pracowników, aplikantów, zleceniobiorców | art. 6 ust. 1 lit. b i c; Kodeks pracy art. 22¹ |

✅ **[VER-RODO]** art. 6 ust. 1; art. 9 ust. 2 lit. f („przetwarzanie jest niezbędne do ustalenia, dochodzenia lub obrony roszczeń lub w ramach sprawowania wymiaru sprawiedliwości")

**Proces nr 2 odróżnia kancelarię od zwykłej firmy usługowej.** Adwokat rutynowo przetwarza dane osób, z którymi nie łączy go żaden stosunek prawny, i to dane z art. 9 (zdrowie, życie seksualne, poglądy) oraz art. 10 (wyroki skazujące). Bez odrębnej podstawy dla tego procesu dokumentacja kancelarii jest niekompletna.

Art. 10 RODO dosłownie:

> „Przetwarzania danych osobowych dotyczących wyroków skazujących oraz czynów zabronionych lub powiązanych środków bezpieczeństwa na podstawie art. 6 ust. 1 wolno dokonywać wyłącznie pod nadzorem władz publicznych lub jeżeli przetwarzanie jest dozwolone prawem Unii lub prawem państwa członkowskiego przewidującymi odpowiednie zabezpieczenia praw i wolności osób, których dane dotyczą."

✅ **[VER-RODO]**

## 2. Tajemnica adwokacka — art. 6 Prawa o adwokaturze

> „1. Adwokat obowiązany jest zachować w tajemnicy wszystko, o czym dowiedział się w związku z udzielaniem pomocy prawnej.
> 2. Obowiązek zachowania tajemnicy zawodowej nie może być ograniczony w czasie.
> 3. Adwokata nie można zwolnić od obowiązku zachowania tajemnicy zawodowej co do faktów, o których dowiedział się udzielając pomocy prawnej lub prowadząc sprawę.
> 4. Obowiązek zachowania tajemnicy zawodowej nie dotyczy informacji: 1) udostępnianych na podstawie przepisów o przeciwdziałaniu praniu pieniędzy oraz finansowaniu terroryzmu, 2) przekazywanych na podstawie przepisów rozdziału 11a działu III ustawy z dnia 29 sierpnia 1997 r. – Ordynacja podatkowa – w zakresie określonym tymi przepisami."

✅ **[VER-PoA]** art. 6

Zakres jest szerszy niż „akta sprawy": obejmuje **wszystko**, o czym adwokat dowiedział się w związku z pomocą prawną — w tym sam fakt, że dana osoba jest klientem, i przedmiot zlecenia. Wyłączenia są **dwa**: AML i MDR.

🚩 **ZMIANA OD 1 PAŹDZIERNIKA 2026 R.** Ustawa z 29.05.2026 o zmianie ustawy – Ordynacja podatkowa oraz niektórych innych ustaw (Dz.U. 2026 poz. 846), art. 2, nadaje art. 6 ust. 4 brzmienie:

> „4. Obowiązek zachowania tajemnicy zawodowej nie dotyczy informacji udostępnianych na podstawie przepisów o przeciwdziałaniu praniu pieniędzy oraz finansowaniu terroryzmu w zakresie określonym tymi przepisami."

✅ [VER: api.sejm.gov.pl ELI DU/2026/846, 2026-07-29 — akt ogłoszony, wejście w życie 2026-10-01]

Od tej daty **wyłączenie dotyczące MDR znika i zostaje wyłącznie AML**. Do 30 września 2026 r. obowiązuje brzmienie dwupunktowe. Każda klauzula informacyjna i polityka kancelarii powołująca „rozdział 11a Ordynacji" wymaga wtedy przeglądu.

**Tajemnica chroni klienta, nie adwokata** — nie można się jej zrzec. Konsekwencja: **klient nie może skutecznie żądać usunięcia danych objętych tajemnicą**; żądanie z art. 17 RODO napotyka granicę z art. 17 ust. 3 lit. b (obowiązek prawny) i lit. e (roszczenia).

## 3. Art. 16a — trzy prawa ograniczone, jedno wyłączone

Podstawa unijna, art. 90 ust. 1 RODO:

> „Państwa członkowskie mogą przyjąć przepisy szczególne określające uprawnienia organów nadzorczych ustanowione w art. 58 ust. 1 lit. e) i f) wobec administratorów lub podmiotów przetwarzających, którzy podlegają […] obowiązkowi zachowania tajemnicy zawodowej […]. Przepisy te mają zastosowanie wyłącznie do danych osobowych, które administrator lub podmiot przetwarzający otrzymali lub pozyskali w wyniku lub w ramach działania objętego tym obowiązkiem zachowania tajemnicy."

✅ **[VER-RODO]** art. 90 ust. 1

Polska skorzystała **ustawą z 21.02.2019 (Dz.U. 2019 poz. 730)**, której art. 6 dodał do Prawa o adwokaturze dział Ia (art. 16a–16c), a art. 7 — art. 5a–5c do ustawy o radcach prawnych. ✅ [VER: ELI DU/2019/730, 2026-07-29]

| Przepis RODO | Skutek u adwokata (brzmienie ustawy) |
|---|---|
| **art. 15 ust. 1 i 3** — dostęp i kopia danych | stosuje się „w zakresie, w jakim nie naruszają obowiązku zachowania przez adwokata tajemnicy, o której mowa w art. 6" |
| **art. 18** — ograniczenie przetwarzania | jw. |
| **art. 19** — powiadamianie o sprostowaniu, usunięciu, ograniczeniu | jw. |
| **art. 21 ust. 1** — sprzeciw | „w przypadku danych osobowych pozyskanych przez adwokata w związku z udzielaniem pomocy prawnej **nie stosuje się**" |

✅ **[VER-PoA]** art. 16a ust. 1 i 2

**Konstrukcja jest dwustopniowa i ma znaczenie procesowe.** Trzy pierwsze prawa nie są wyłączone — są ograniczone *zakresowo*, więc przy każdym żądaniu trzeba ocenić, czy realizacja w danym fragmencie naruszyłaby tajemnicę. Sprzeciw jest wyłączony *w całości* dla danych z pomocy prawnej; tam ocena zakresowa jest zbędna.

**Czego art. 16a nie obejmuje:** art. 16 (sprostowanie) i art. 17 (usunięcie) RODO — działają na zasadach ogólnych, granice z art. 17 ust. 3. Odmowa powinna powoływać **art. 16a Prawa o adwokaturze w zw. z art. 6 tej ustawy**, nie ogólnikową „tajemnicę zawodową".

## 4. Art. 16b — kontrola UODO nie przełamuje tajemnicy

> „Obowiązek zachowania tajemnicy, o której mowa w art. 6, nie ustaje, w przypadku gdy z żądaniem ujawnienia informacji uzyskanych przez adwokata w związku z udzielaniem pomocy prawnej występuje Prezes Urzędu Ochrony Danych Osobowych."

✅ **[VER-PoA]** art. 16b

Wniosek organizacyjny — **rozdzielić dwie warstwy dokumentacji**:

| Warstwa | Status wobec kontroli |
|---|---|
| rejestr czynności, umowy powierzenia, upoważnienia, polityki, rejestr naruszeń, dowody weryfikacji procesorów, notatka z analizy obowiązku IOD | **do okazania** — nie są objęte tajemnicą z art. 6 |
| akta spraw, korespondencja z klientem, notatki z porad, zapytania z formularza dotyczące spraw | **objęte tajemnicą** — art. 16b |

Trzymać je fizycznie i systemowo osobno: jeden segregator i jeden katalog „RODO", które da się okazać bez ryzyka ujawnienia czegokolwiek z pomocy prawnej.

⚠️ **Granica, o której trzeba pamiętać:** art. 16b uzasadnia odmowę **ujawnienia treści** objętej tajemnicą, ale nie uzasadnia odmowy poddania się kontroli jako takiej. Art. 108 ust. 1 u.o.d.o.: „Kto udaremnia lub utrudnia kontrolującemu prowadzenie kontroli przestrzegania przepisów o ochronie danych osobowych, podlega grzywnie, karze ograniczenia wolności albo pozbawienia wolności do lat dwóch." ✅ **[VER-uodo]**

## 5. Art. 16c — retencja 10 lat i nakaz usunięcia

> „1. Okres przechowywania danych osobowych wynosi: […] 2) **10 lat** od końca roku, w którym zakończyło się postępowanie, w którym dane osobowe zostały zgromadzone – w przypadku danych osobowych przetwarzanych: a) w toku prowadzonych przez organy adwokatury oraz organy izb adwokackich postępowań: administracyjnych, w zakresie skarg i wniosków, innych […], b) w ramach nadzoru nad postępowaniami, o których mowa w lit. a, **c) przez adwokatów w ramach wykonywania zawodu**; 3) **15 lat** […] w toku […] postępowań dyscyplinarnych […]
> 2. Po upływie okresów, o których mowa w ust. 1, w przypadku danych osobowych **przetwarzanych przez adwokatów w ramach wykonywania zawodu, dane osobowe ulegają usunięciu**."

✅ **[VER-PoA]** art. 16c ust. 1 pkt 2 lit. c, pkt 3 i ust. 2

Do tego pkt 1 — **5 lat** — dla danych przetwarzanych przez organy adwokatury i izb w zakresie realizacji zadań publicznych oraz w ramach nadzoru nad adwokaturą. Terminy są więc **trzy: 5, 10 i 15 lat**.

**Trzy wnioski:**

1. Kancelaria ma **ustawowy okres retencji: 10 lat** od końca roku, w którym zakończyło się postępowanie, w którym dane zgromadzono. Nie trzeba go wyprowadzać z terminów przedawnienia — jest wprost w ustawie.
2. Usunięcie po upływie terminu jest **obowiązkiem, nie uprawnieniem** („ulegają usunięciu"). Polityka retencji przewidująca bezterminowe trzymanie akt jest sprzeczna z art. 16c ust. 2.
3. ⚠️ **Dwie kwestie nierozstrzygnięte w tekście:** jak liczyć termin przy czynnościach bez żadnego postępowania (porada, opinia, negocjacje umowy) oraz jak pogodzić nakaz usunięcia z bezterminowością tajemnicy z art. 6 ust. 2 i z obowiązkiem badania konfliktu interesów. To pytania do NRA i Regulaminu wykonywania zawodu adwokata, nie do ustawy.

## 6. Dwa reżimy w jednej kancelarii — skąd naprawdę bierze się granica

W Prawie o adwokaturze **nie ma** przepisu mówiącego, że art. 16a–16c nie stosuje się do „wewnętrznego funkcjonowania kancelarii". Ten zwrot pochodzi z poradników samorządowych. Granica wynika z konstrukcji samych przepisów:

- art. 16a ust. 1 ogranicza prawa tylko tam, gdzie naruszałyby **tajemnicę z art. 6**, a ta obejmuje wyłącznie to, „o czym [adwokat] dowiedział się **w związku z udzielaniem pomocy prawnej**",
- art. 16a ust. 2 i art. 16b odnoszą się wprost do danych **„pozyskanych/uzyskanych w związku z udzielaniem pomocy prawnej"**.

Dane niepochodzące z pomocy prawnej — kadrowe, kandydatów do pracy, kontrahentów, dostawców, a także zapytania z formularza niedotyczące jeszcze żadnej sprawy — **nie są objęte tajemnicą z art. 6, więc art. 16a–16b ich nie dotykają: obowiązuje pełny reżim RODO**. Pracownik ma pełne prawo dostępu do swoich danych kadrowych i nie ma czym zasłonić odmowy.

⚠️ Wyjątkiem konstrukcyjnym jest art. 16c: mówi o danych przetwarzanych „przez adwokatów **w ramach wykonywania zawodu**" — sformułowanie szersze niż „w związku z udzielaniem pomocy prawnej" i nie da się z tekstu wyprowadzić, że dane kadrowe są z niego wyjęte. Przy polityce retencji dla kadr bezpieczniej opierać się na Kodeksie pracy i przepisach podatkowych.

## 7. Obowiązek informacyjny wobec osób trzecich — art. 14 ust. 5 lit. d

> „5. Ust. 1–4 nie mają zastosowania, gdy – i w zakresie, w jakim: […] d) dane osobowe muszą pozostać poufne zgodnie z obowiązkiem zachowania tajemnicy zawodowej przewidzianym w prawie Unii lub w prawie państwa członkowskiego, w tym ustawowym obowiązkiem zachowania tajemnicy."

✅ **[VER-RODO]** art. 14 ust. 5 lit. d

Tajemnica adwokacka z art. 6 PoA jest takim ustawowym obowiązkiem. **Adwokat co do zasady nie wysyła klauzuli informacyjnej przeciwnikowi procesowemu** — samo powiadomienie ujawniałoby fakt i przedmiot zlecenia.

Ale wyłączenie **nie działa automatycznie**: przepis wprowadza je „gdy – i w zakresie, w jakim", więc ocenę trzeba przeprowadzić dla kategorii osób i **udokumentować** (art. 5 ust. 2 — rozliczalność). Dostępne są też lit. b (niemożliwość lub niewspółmiernie duży wysiłek) i lit. c (pozyskanie uregulowane wprost w prawie).

**Nie mieszać warstw w piśmie odmownym:** wobec **obowiązku informacyjnego** działa art. 14 ust. 5 lit. d RODO (przepis unijny); wobec **praw dostępu, ograniczenia, powiadomienia i sprzeciwu** — art. 16a PoA (przepis krajowy). Przy prawie dostępu przydaje się dodatkowo art. 15 ust. 4 RODO (prawa i wolności innych osób).

---

# CZĘŚĆ III. Obowiązki kancelarii — lista kompletna

## 1. Rejestr czynności przetwarzania — obowiązkowy

Zwolnienie z art. 30 ust. 5 nie działa:

> „Obowiązki, o których mowa w ust. 1 i 2, nie mają zastosowania do przedsiębiorcy lub podmiotu zatrudniającego mniej niż 250 osób, **chyba że** przetwarzanie […] może powodować ryzyko naruszenia praw lub wolności osób, których dane dotyczą, **nie ma charakteru sporadycznego** lub obejmuje szczególne kategorie danych osobowych, o których mowa w art. 9 ust. 1, lub dane osobowe dotyczące wyroków skazujących i czynów zabronionych, o czym mowa w art. 10."

✅ **[VER-RODO]** art. 30 ust. 5

Trzy przesłanki spięte „lub" — wystarczy jedna. **Kancelaria spełnia wszystkie trzy:** akta zawierają informacje o najwrażliwszych sferach życia (ryzyko), prowadzenie spraw jest działalnością systematyczną (brak sporadyczności), a dane z art. 9 i art. 10 pojawiają się w sprawach karnych, rodzinnych, pracowniczych i odszkodowawczych.

Treść rejestru wyznacza art. 30 ust. 1 lit. a–g: dane administratora, cele, kategorie osób i danych, kategorie odbiorców, transfery, „jeżeli jest to możliwe, planowane terminy usunięcia poszczególnych kategorii danych" oraz „jeżeli jest to możliwe, ogólny opis technicznych i organizacyjnych środków bezpieczeństwa, o których mowa w art. 32 ust. 1". Rejestr obejmuje **osobno każdy z pięciu procesów** z Części II § 1.

## 2. Inspektor ochrony danych — zwykle nie

> „Administrator i podmiot przetwarzający wyznaczają inspektora ochrony danych, zawsze gdy: a) przetwarzania dokonują organ lub podmiot publiczny […]; b) główna działalność […] polega na operacjach przetwarzania, które […] wymagają regularnego i systematycznego monitorowania osób, których dane dotyczą, **na dużą skalę**; lub c) główna działalność […] polega na przetwarzaniu **na dużą skalę** szczególnych kategorii danych osobowych, o których mowa w art. 9, lub danych osobowych dotyczących wyroków skazujących i czynów zabronionych, o czym mowa w art. 10."

✅ **[VER-RODO]** art. 37 ust. 1

Adwokat-JDG: lit. a odpada — art. 9 u.o.d.o. zawęża „organy i podmioty publiczne" do jednostek sektora finansów publicznych, instytutów badawczych i NBP ✅ **[VER-uodo]**; lit. b odpada (brak monitorowania); lit. c odpada, bo przetwarzanie w jednoosobowej kancelarii co do zasady nie jest „na dużą skalę".

**Ale ocena może się odwrócić** przy kancelarii wieloosobowej z masową obsługą spraw jednego typu (windykacja, sprawy frankowe seryjnie). Dlatego: **sporządzić notatkę z analizy** — brak obowiązku trzeba umieć wykazać (art. 5 ust. 2, art. 24 ust. 1).

Jeżeli IOD zostanie wyznaczony, choćby dobrowolnie, obowiązki krajowe działają w pełni: zawiadomienie Prezesa UODO **w 14 dni** od wyznaczenia, z imieniem, nazwiskiem i adresem e-mail lub telefonem (art. 10 ust. 1 u.o.d.o.), oraz udostępnienie danych inspektora „na swojej stronie internetowej, a jeżeli nie prowadzi własnej strony internetowej, w sposób ogólnie dostępny w miejscu prowadzenia działalności" (art. 11 u.o.d.o.). ✅ **[VER-uodo]**

## 3. Naruszenia — 72 godziny

> „W przypadku naruszenia ochrony danych osobowych, administrator bez zbędnej zwłoki – w miarę możliwości, nie później niż w terminie 72 godzin po stwierdzeniu naruszenia – zgłasza je organowi nadzorczemu […], chyba że jest mało prawdopodobne, by naruszenie to skutkowało ryzykiem naruszenia praw lub wolności osób fizycznych. Do zgłoszenia przekazanego organowi nadzorczemu po upływie 72 godzin dołącza się wyjaśnienie przyczyn opóźnienia."

✅ **[VER-RODO]** art. 33 ust. 1

Zawiadomienie osób — tylko przy **wysokim** ryzyku (art. 34 ust. 1). Rejestr naruszeń (art. 33 ust. 5) prowadzi się także dla naruszeń niezgłaszanych.

**Specyfika kancelarii:** utrata laptopa z aktami albo błędne wysłanie pisma to niemal zawsze naruszenie skutkujące ryzykiem — dane objęte tajemnicą i dane z art. 9 podnoszą wagę. Domyślne „to za mało istotne, żeby zgłaszać" jest tu ryzykowne.

## 4. AML — kiedy adwokat jest instytucją obowiązaną

Art. 6 ust. 4 pkt 1 PoA odsyła do przepisów AML jako wyłączenia tajemnicy, a po 1.10.2026 będzie to **jedyne** wyłączenie. Zakres jest jednak wąski i zamknięty. Instytucjami obowiązanymi są:

> „14) adwokaci, radcowie prawni, prawnicy zagraniczni, doradcy podatkowi **w zakresie, w jakim świadczą na rzecz klienta pomoc prawną lub czynności doradztwa podatkowego dotyczące**: a) kupna lub sprzedaży nieruchomości, przedsiębiorstwa lub zorganizowanej części przedsiębiorstwa, b) zarządzania środkami pieniężnymi, instrumentami finansowymi lub innymi aktywami klienta, c) zawierania umowy o prowadzenie rachunku bankowego, rachunku papierów wartościowych lub wykonywania czynności związanych z prowadzeniem tych rachunków, d) wnoszenia wkładu do spółki kapitałowej lub podwyższenia kapitału zakładowego spółki kapitałowej, e) tworzenia, prowadzenia działalności lub zarządzania spółkami kapitałowymi lub trustami […]"

✅ **[VER-AML]** art. 2 ust. 1 pkt 14

**Adwokat nie jest instytucją obowiązaną „w ogóle" — tylko przy tych pięciu typach czynności.** Prowadzenie sprawy rozwodowej, karnej czy pracowniczej AML nie uruchamia.

Nawet gdy uruchamia, obowiązek zawiadamiania GIIF jest wyłączony dla rdzenia pracy adwokata:

> „Obowiązek przekazywania informacji i zawiadomień, o których mowa w art. 74 ust. 1, art. 86 ust. 1, art. 89 ust. 1 oraz art. 90, nie dotyczy instytucji obowiązanych, o których mowa w art. 2 ust. 1 pkt 14, **w zakresie informacji uzyskanych podczas ustalania sytuacji prawnej klienta w związku z postępowaniem sądowym, wykonywaniem obowiązków polegających na obronie, reprezentowaniu lub zastępowaniu klienta w postępowaniu sądowym albo udzielaniu klientowi porady prawnej dotyczącej wszczęcia postępowania sądowego lub uniknięcia takiego postępowania, niezależnie od czasu uzyskania tych informacji**."

✅ **[VER-AML]** art. 75

Gdy obowiązek jednak powstaje, zawiadomienie o podejrzeniu prania pieniędzy idzie do GIIF „niezwłocznie, nie później jednak niż w terminie **2 dni roboczych** od dnia potwierdzenia […] podejrzenia" (art. 74 ust. 2), a przy transakcji podejrzanej — niezwłocznie, z **wstrzymaniem transakcji do 24 godzin** od potwierdzenia przyjęcia zawiadomienia (art. 86 ust. 1 i 4). ✅ **[VER-AML]**

Do tego art. 129a ust. 2 AML zwalnia adwokatów z obowiązku wpisu do rejestru działalności na rzecz spółek lub trustów. ✅ **[VER-AML]**

## 5. Zatrudnienie — Kodeks pracy nakłada się na RODO

Katalog danych, których wolno żądać, jest zamknięty. Od kandydata: imię (imiona) i nazwisko, data urodzenia, dane kontaktowe wskazane przez tę osobę, wykształcenie, kwalifikacje zawodowe, przebieg dotychczasowego zatrudnienia — przy czym trzy ostatnie tylko „gdy jest to niezbędne do wykonywania pracy określonego rodzaju lub na określonym stanowisku" (§ 2). Od pracownika dodatkowo: adres zamieszkania, PESEL, dane dzieci i najbliższej rodziny przy szczególnych uprawnieniach, wykształcenie i przebieg zatrudnienia, numer rachunku płatniczego (§ 3). ✅ **[VER-KP]** art. 22¹ § 1–3

🚩 **Uwaga na aktualność — t.j. Kodeksu pracy z 14.02.2025 nie zawiera już aktualnego brzmienia.** Ustawa z 4.06.2025 o zmianie ustawy – Kodeks pracy (Dz.U. 2025 poz. 807), w mocy od **24.12.2025**, nadała art. 22¹ § 1 pkt 6 brzmienie:

> „6) przebieg dotychczasowego zatrudnienia, **z wyłączeniem informacji o wynagrodzeniu w obecnym stosunku pracy oraz w poprzednich stosunkach pracy**."

✅ [VER: api.sejm.gov.pl ELI DU/2025/807, 2026-07-30]

Ta sama ustawa dodała art. 18³ca — obowiązek podania kandydatowi informacji o wynagrodzeniu (wysokości początkowej lub przedziale) w ogłoszeniu o naborze albo najpóźniej przed rozmową kwalifikacyjną, oraz wymóg, by ogłoszenia i nazwy stanowisk były neutralne pod względem płci. **Kancelaria rekrutująca aplikanta lub sekretariat: nie wolno pytać o dotychczasowe wynagrodzenie, trzeba podać widełki.**

Pozostałe przepisy istotne w tej warstwie: art. 22¹a KP — zgoda może być podstawą przetwarzania innych danych niż z katalogu, **z wyjątkiem danych z art. 10 RODO**, a jej brak lub wycofanie nie może powodować negatywnych konsekwencji; art. 22¹b — dane z art. 9 ust. 1 RODO tylko z inicjatywy osoby, a do ich przetwarzania dopuszcza się **wyłącznie osoby z pisemnym upoważnieniem** zobowiązane do zachowania tajemnicy. ✅ **[VER-KP]**

## 6. Sankcje

| Podstawa | Wymiar |
|---|---|
| art. 83 ust. 4 RODO — naruszenia art. 8, 11, **25–39**, 42, 43 (rejestr, powierzenie, bezpieczeństwo, naruszenia, DPIA, IOD) | do **10 000 000 EUR** albo **2 %** całkowitego rocznego światowego obrotu, kwota wyższa |
| art. 83 ust. 5 RODO — zasady i podstawy (art. 5, 6, 7, 9), prawa osób (art. 12–22), transfery (art. 44–49) | do **20 000 000 EUR** albo **4 %** obrotu, kwota wyższa |
| art. 83 ust. 6 RODO — nieprzestrzeganie nakazu organu | do **20 000 000 EUR** albo **4 %** |
| art. 82 ust. 1 RODO — odszkodowanie | za szkodę **majątkową i niemajątkową**, na rzecz każdej osoby |
| art. 107 u.o.d.o. — przetwarzanie bez uprawnienia | grzywna, ograniczenie wolności albo pozbawienie wolności **do 2 lat**; przy danych szczególnych kategorii **do 3 lat** |
| art. 108 ust. 1 u.o.d.o. — utrudnianie kontroli | do **2 lat** |
| art. 23 uśude — brak danych z art. 5 ust. 2, 3 lub 5 na stronie | **grzywna** |

✅ **[VER-RODO]**, ✅ **[VER-uodo]**, ✅ **[VER-uśude]**

Uwaga o przeznaczeniu kar: art. 104 u.o.d.o. w brzmieniu nadanym ustawą z 23.01.2026 (Dz.U. 2026 poz. 252, w mocy od 3.04.2026) kieruje 50 % kary za naruszenie art. 5 ust. 1 lit. f, art. 25 ust. 1 i 2, art. 28 ust. 3 lit. c oraz art. 32 ust. 1 i 2 RODO do Funduszu Cyberbezpieczeństwa. ✅ [VER: ELI DU/2026/252, 2026-07-29]

---

# CZĘŚĆ IV. Strona na home.pl z formularzem — cztery warstwy

## Warstwa 1: home.pl jest podmiotem przetwarzającym

Hosting to przechowywanie danych, przechowywanie jest przetwarzaniem (art. 4 pkt 2), wykonywanym w imieniu administratora (art. 4 pkt 8) → wymagana umowa z art. 28 ust. 3, określająca „przedmiot i czas trwania przetwarzania, charakter i cel przetwarzania, **rodzaj danych osobowych** oraz kategorie osób, których dane dotyczą" i zawierająca osiem elementów z lit. a–h, w tym lit. b (zobowiązanie do tajemnicy), lit. c (środki z art. 32), lit. g (usunięcie lub zwrot po zakończeniu), lit. h (informacje i **umożliwienie audytów**). ✅ **[VER-RODO]**

### Co faktycznie zawiera wzorzec home.pl

| Kwestia | Ustalenie | Ocena |
|---|---|---|
| **sposób zawarcia** | „zawarta w trybie art. 384 Kodeksu cywilnego […] w toku procedury rejestracji Administratora danych w systemie informatycznym Podmiotu przetwarzającego" | umowa powstaje jako wzorzec przy rejestracji, **bez osobnego podpisu** — pobrać treść i zachować z datą jako dowód (art. 5 ust. 2) |
| **strony** | klient = „Administrator danych"; home.pl S.A., Szczecin, KRS 0000431335 = „Podmiot przetwarzający" | zgodne z art. 4 pkt 7 i 8 |
| **zakres powierzenia** (§ 2 ust. 1) | administrator „oświadcza, iż powierza […] dane osobowe, **nie stanowiące szczególnej kategorii danych osobowych** […] obejmujące: imię i nazwisko, NIP, PESEL, adres zamieszkania, datę urodzenia, dane kontaktowe" | 🚩 **najpoważniejszy problem** — niżej |
| **środki bezpieczeństwa** (§ 3 ust. 6) | „adekwatne do rodzaju powierzonych mu danych osobowych, **zgodnie z opisem danych dokonanym przez Administratora danych w § 2 ust. 1**" | poziom zabezpieczeń skalibrowany do deklaracji o braku danych szczególnych |
| **wyłączenie odpowiedzialności** (§ 5 ust. 3) | home.pl nie odpowiada „za brak zgodności zastosowanych środków […] do rodzaju powierzonych mu […] danych osobowych, jeśli środki te są zgodne z rodzajem danych osobowych **zadeklarowanym przez Administratora** danych w § 2 ust. 1" | ryzyko rozbieżności obciąża adwokata |
| **podpowierzenie** (§ 4) | zgoda ogólna; informowanie o zmianach „w formie wiadomości elektronicznej […] **lub ogólnego komunikatu na stronie internetowej**"; sprzeciw możliwy, ale „może skutkować niemożnością wykonania Umowy Głównej, a w konsekwencji […] rozwiązania Umowy Głównej" | dopuszczalne na tle art. 28 ust. 2, ale powiadomienie komunikatem na stronie oznacza **obowiązek jej monitorowania** |
| **naruszenia** (§ 5 ust. 2) | zgłoszenie administratorowi „niezwłocznie, nie później jednak niż w ciągu **48 godzin** od stwierdzenia" | art. 33 ust. 1 daje 72 h od stwierdzenia przez administratora — realnie zostaje mniej czasu |
| **usunięcie danych** (§ 3 ust. 4) | „nie później niż w terminie **30 dni** od zakończenia Umowy Głównej" usuwa dane i kopie | zgodne z art. 28 ust. 3 lit. g |
| **audyt** (§ 9 ust. 1 + Polityka prywatności) | audyt elektroniczny **bezpłatnie raz na 12 miesięcy**, kolejny odpłatnie wg cennika; audyt osobisty w siedzibie **odpłatny**, min. **21 dni** uprzedzenia | art. 28 ust. 3 lit. h formalnie obsłużony, ale odpłatnie i limitowo |
| **limit odpowiedzialności** (§ 5 ust. 5) | maksymalnie kwota zapłacona za usługi z 12 miesięcy poprzedzających zdarzenie; limit nie dotyczy szkód umyślnych | przy karze z art. 83 lub roszczeniu z art. 82 regres będzie **znikomy** |
| **certyfikacja** (§ 1 ust. 3) | oświadczenie o ISO/IEC 27001 | użyteczny dowód „wystarczających gwarancji" z art. 28 ust. 1 — dołączyć do dokumentacji |
| **EOG / państwa trzecie** | we wzorcu umowy i w Polityce prywatności **brak jakiegokolwiek postanowienia** | 🚩 ustalić odrębnie — rozdział V RODO (art. 44–49) |
| **podstawa przetwarzania** (§ 3a ust. 2) | administrator gwarantuje ważną podstawę, „w tym w szczególności **zgody** podmiotu, którego dane osobowe dotyczą" | u adwokata podstawą jest art. 6 ust. 1 lit. b/c/f — postanowienie nie zmienia prawa i nie należy z niego wyprowadzać obowiązku zbierania zgód |

📄 [ŹRÓDŁO: `regulaminy.home.pl/umowa-powierzenia-przetwarzania-danych-osobowych.pdf` i `regulaminy.home.pl/Polityka-prywatnosci-home.pl.pdf`, odczyt 2026-07-29]

### 🚩 Rozbieżność § 2 ust. 1 wzorca z rzeczywistością kancelarii

Wzorzec zakłada, że powierzane dane **nie są szczególnymi kategoriami**, i wymienia zamknięty katalog. Tymczasem formularz z otwartym polem „opisz sprawę" generuje ruch, w którym regularnie znajdą się:

- dane o zdrowiu, życiu seksualnym, poglądach — **art. 9 ust. 1 RODO**,
- dane o wyrokach skazujących i czynach zabronionych — **art. 10 RODO**,
- informacje objęte **tajemnicą adwokacką od chwili powzięcia** — art. 6 ust. 1 PoA obejmuje „wszystko, o czym [adwokat] dowiedział się w związku z udzielaniem pomocy prawnej", a wiadomość od osoby szukającej pomocy prawnej w tym zakresie się mieści.

Skutki: deklaracja z § 2 ust. 1 przestaje odpowiadać stanowi faktycznemu; § 3 ust. 6 i § 5 ust. 3 przenoszą konsekwencje rozbieżności na adwokata; a art. 28 ust. 3 wymaga, by umowa określała „rodzaj danych osobowych" — jeżeli określa go nieprawdziwie, wymóg nie jest spełniony materialnie.

**Trzy wyjścia, od najlepszego:**

1. **Zaprojektować formularz tak, żeby dane szczególnych kategorii do niego nie trafiały** (Warstwa 2) — jedyne rozwiązanie, które likwiduje problem zamiast go przenosić.
2. **Wystąpić do home.pl o indywidualną umowę powierzenia** obejmującą dane szczególnych kategorii, z adekwatnym poziomem zabezpieczeń; zachować korespondencję.
3. **Przenieść formularz i skrzynkę do dostawcy, którego DPA obejmuje dane wrażliwe**, zostawiając na home.pl treści statyczne.

Bez żadnego z tych kroków ryzyko jest realne: kara z art. 83 ust. 4 lit. a za naruszenie art. 28 i art. 32, przy praktycznie zerowym regresie wobec dostawcy (limit z § 5 ust. 5).

### Czynności w Warstwie 1

- [ ] pobrać wzorzec umowy powierzenia i Politykę prywatności home.pl, zapisać PDF-y **z datą**
- [ ] sprawdzić w panelu klienta, czy umowa jest odnotowana jako zawarta; zachować dowód
- [ ] ustalić **listę podprocesorów** i **lokalizację przetwarzania** (czy dane zostają w EOG); jeśli nie — uruchomić art. 44–49
- [ ] udokumentować weryfikację dostawcy z art. 28 ust. 1 (ISO/IEC 27001 + opis środków)
- [ ] rozstrzygnąć problem § 2 ust. 1 jednym z trzech wyjść i **zapisać uzasadnienie**
- [ ] wpisać home.pl do rejestru czynności jako procesora (art. 30 ust. 1 lit. d)
- [ ] uwzględnić w procedurze naruszeń, że sygnał od home.pl przychodzi do 48 h, a własne zgłoszenie ma 72 h

## Warstwa 2: formularz

**Podstawa prawna.** Osoba wypełniająca formularz zmierza zwykle do nawiązania współpracy → **art. 6 ust. 1 lit. b** („podjęcie działań na żądanie osoby, której dane dotyczą, przed zawarciem umowy"). Alternatywnie **lit. f** — prawnie uzasadniony interes w obsłudze zapytań. ✅ **[VER-RODO]**

**Zgoda (lit. a) jest podstawą gorszą** — odwoływalna w każdej chwili (art. 7 ust. 3), a odwołanie nie usuwa potrzeby odpowiedzi na zapytanie. Przy lit. b lub f **checkbox „wyrażam zgodę na przetwarzanie danych" jest zbędny i mylący**. Zgodę zbiera się tylko na to, co jej wymaga — newsletter, marketing.

**Obowiązek informacyjny — art. 13.** Dane pochodzą bezpośrednio od osoby, więc informację podaje się „podczas pozyskiwania danych osobowych", czyli przy formularzu, nie w odpowiedzi. Zakres z ust. 1 i 2: tożsamość i dane kontaktowe administratora (lit. a), dane IOD jeśli jest (lit. b), „cele przetwarzania danych osobowych, oraz podstawę prawną przetwarzania" (lit. c), przy lit. f — wskazanie prawnie uzasadnionych interesów (lit. d), odbiorcy lub kategorie odbiorców (lit. e), okres przechowywania albo kryteria jego ustalania (ust. 2 lit. a), prawa osoby (lit. b), prawo skargi do organu (lit. d), informacja „czy podanie danych osobowych jest wymogiem ustawowym lub umownym lub warunkiem zawarcia umowy" (lit. e). ✅ **[VER-RODO]**

Technicznie: pod formularzem skrót z najważniejszymi elementami + link do pełnej polityki prywatności. Sam link bez treści nie wystarcza.

**Minimalizacja — art. 5 ust. 1 lit. c** („adekwatne, stosowne oraz ograniczone do tego, co niezbędne"). Dla kancelarii to główny mechanizm redukcji ryzyka z Warstwy 1:

- pola obowiązkowe: **imię + e-mail** (albo telefon), nic więcej,
- **nie pytać** o PESEL, adres zamieszkania, numer sprawy, dane przeciwnika,
- przy polu opisowym ostrzeżenie: *„Prosimy nie przesyłać przez formularz szczegółów sprawy ani danych innych osób — skontaktujemy się, żeby umówić rozmowę"*,
- rozważyć rezygnację z pola opisowego na rzecz krótkiej listy wyboru,
- 🚩 uwaga: wybór „sprawa karna" albo „rodzinna" sam bywa daną z art. 9 lub 10 w powiązaniu z nadawcą — lista powinna być neutralna („konsultacja / współpraca / inne").

**Retencja.** Osobno: zapytania bez dalszej współpracy (np. 3–6 miesięcy) i zapytania, które przeszły w sprawę (wchodzą do akt — reżim art. 16c PoA, Część II § 5).

**Bezpieczeństwo — art. 32 ust. 1.** HTTPS na całej stronie, MFA na skrzynce odbierającej zapytania, ograniczony krąg osób z dostępem, kopie zapasowe.

## Warstwa 3: cookies i marketing — Prawo komunikacji elektronicznej

Zgoda na przechowywanie informacji w urządzeniu końcowym nie wynika z RODO. **Od 10 listopada 2024 r. materię reguluje ustawa z 12 lipca 2024 r. – Prawo komunikacji elektronicznej (Dz.U. 2024 poz. 1221)**, która zastąpiła Prawo telekomunikacyjne.

### Cookies — art. 399 PKE

> „1. Przechowywanie informacji lub uzyskiwanie dostępu do informacji już przechowywanej w telekomunikacyjnym urządzeniu końcowym abonenta lub użytkownika końcowego jest dozwolone, pod warunkiem że: 1) abonent lub użytkownik końcowy zostanie uprzednio poinformowany w sposób jednoznaczny, łatwy i zrozumiały, o: a) celu przechowywania i uzyskiwania dostępu do tej informacji, b) możliwości określenia przez niego warunków przechowywania lub uzyskiwania dostępu […]; 2) abonent lub użytkownik końcowy, po otrzymaniu informacji, o których mowa w pkt 1, **wyrazi na to zgodę**; 3) przechowywana informacja lub uzyskiwanie do niej dostępu nie powoduje zmian konfiguracyjnych […]"

✅ **[VER-PKE]** art. 399 ust. 1

Wyjątek z ust. 3 — bez zgody tylko to, co konieczne „1) do wykonania transmisji komunikatu elektronicznego […] lub 2) dostarczania usługi telekomunikacyjnej lub usługi świadczonej drogą elektroniczną, **żądanej** przez abonenta lub użytkownika końcowego". ✅ **[VER-PKE]**

Standard zgody — art. 400 PKE: „Do uzyskania zgody abonenta lub użytkownika końcowego stosuje się odpowiednio przepisy o ochronie danych osobowych." ✅ **[VER-PKE]** Czyli art. 4 pkt 11 i art. 7 RODO: dobrowolna, konkretna, świadoma, jednoznaczna, odwoływalna.

Praktycznie dla strony kancelarii: cookies niezbędne (sesja, bezpieczeństwo) bez zgody; analityczne i marketingowe (Google Analytics, piksele, statystyki hostingu) — **zgoda przed zapisaniem**; odmowa równie łatwa jak zgoda; domyślnie zaznaczone checkboxy zgodą nie są. Google Analytics dokłada warstwę transferu do państwa trzeciego — art. 44 RODO. **Rekomendacja:** dla strony-wizytówki najprościej zrezygnować z analityki.

### Marketing e-mail — art. 398 PKE, NIE art. 10 uśude

🚩 **Pułapka aktualności.** Wzory polityk krążące w internecie powołują art. 10 uśude albo art. 173 Prawa telekomunikacyjnego. **Art. 10 uśude jest uchylony** — w t.j. z 10.10.2024 widnieje jako „(uchylony)", uchylony przez art. 26 pkt 3 przepisów wprowadzających PKE (Dz.U. 2024 poz. 1222). ✅ **[VER-uśude]**

> „1. Zakazane jest używanie: 1) automatycznych systemów wywołujących, 2) telekomunikacyjnych urządzeń końcowych, w szczególności w ramach korzystania z usług komunikacji interpersonalnej – do celów przesyłania informacji handlowej […], w tym marketingu bezpośredniego, do abonenta lub użytkownika końcowego, **chyba że uprzednio wyraził on na to zgodę**.
> 2. Zgoda […] może być wyrażona przez udostępnienie przez abonenta lub użytkownika końcowego identyfikującego go adresu elektronicznego […]
> 4. Działanie, o którym mowa w ust. 1, stanowi czyn nieuczciwej konkurencji […]"

✅ **[VER-PKE]** art. 398

Newsletter kancelarii **jest informacją handlową**: art. 2 pkt 2 uśude obejmuje promowanie „wizerunku przedsiębiorcy **lub osoby wykonującej zawód, której prawo do wykonywania zawodu jest uzależnione od spełnienia wymagań określonych w odrębnych ustawach**". ✅ **[VER-uśude]** Osobno działają ograniczenia reklamy ze Zbioru Zasad Etyki Adwokackiej ⚠️ [akt samorządowy — nie ma go w bazie].

## Warstwa 4: obowiązki z uśude

Adwokat prowadzący stronę jest **usługodawcą** — art. 2 pkt 6 uśude: „osobę fizyczną […], która prowadząc, **chociażby ubocznie**, działalność zarobkową lub zawodową świadczy usługi drogą elektroniczną". ✅ **[VER-uśude]**

### Obowiązek informacyjny — art. 5, w tym ust. 5 pisany pod zawody regulowane

> „1. Usługodawca podaje, w sposób wyraźny, jednoznaczny i bezpośrednio dostępny poprzez system teleinformatyczny […] informacje podstawowe określone w ust. 2–5.
> 2. Usługodawca podaje: 1) adresy elektroniczne; 2) imię, nazwisko, miejsce zamieszkania i adres albo nazwę lub firmę oraz siedzibę i adres. […]
> 5. Jeżeli usługodawcą jest osoba fizyczna, której prawo do wykonywania zawodu jest uzależnione od spełnienia określonych w odrębnych ustawach wymagań, podaje również: 1) w przypadku ustanowienia pełnomocnika, jego imię, nazwisko, miejsce zamieszkania i adres […]; 2) **samorząd zawodowy, do którego należy**; 3) **tytuł zawodowy, którego używa, oraz państwo, w którym został on przyznany**; 4) **numer w rejestrze publicznym, do którego jest wpisany** wraz ze wskazaniem nazwy rejestru i organu prowadzącego rejestr […]"

✅ **[VER-uśude]** art. 5 ust. 1, 2 i 5

**To przepis pisany wprost dla adwokata i najczęściej pomijany na stronach kancelarii.** Sankcja — art. 23 uśude: „Kto wbrew obowiązkom określonym w art. 5 nie podaje danych, o których mowa w art. 5 ust. 2, 3 lub 5, albo podaje dane nieprawdziwe lub niepełne, podlega karze grzywny." ✅ **[VER-uśude]**

Art. 5 ust. 4 uśude odsyła do art. 20 ust. 3 Prawa przedsiębiorców, który brzmi:

> „3. Przedsiębiorca oferujący towary lub usługi w sprzedaży bezpośredniej lub sprzedaży na odległość za pośrednictwem środków masowego przekazu, sieci teleinformatycznych lub druków bezadresowych umieszcza w ofercie co najmniej swoją firmę, numer identyfikacji podatkowej (NIP) oraz siedzibę albo adres."

✅ **[VER-przeds]** art. 20 ust. 3

### Regulamin — art. 8 uśude

Usługodawca „określa regulamin świadczenia usług drogą elektroniczną" i „nieodpłatnie udostępnia usługobiorcy regulamin **przed zawarciem umowy**", a na żądanie — w sposób umożliwiający „pozyskanie, odtwarzanie i utrwalanie treści regulaminu". Regulamin określa w szczególności rodzaje i zakres usług, warunki świadczenia (w tym wymagania techniczne i zakaz dostarczania treści bezprawnych), warunki zawierania i rozwiązywania umów oraz **tryb postępowania reklamacyjnego**. Postanowienia nieudostępnione nie wiążą usługobiorcy (ust. 2). ✅ **[VER-uśude]**

⚠️ **Czy sam formularz kontaktowy to usługa świadczona drogą elektroniczną?** Definicja z art. 2 pkt 4 uśude wymaga „wykonania usługi świadczonej bez jednoczesnej obecności stron (na odległość), poprzez przekaz danych na indywidualne żądanie usługobiorcy". Formularz spełnia kryteria techniczne, ale sporne jest, czy samo przyjęcie zapytania jest „usługą". Newsletter, konto klienta, czat, pobieranie wzorów — bez wątpienia tak. **Rozstrzygnięcie praktyczne:** regulamin jest tani, spór o kwalifikację nie.

Uwaga systemowa: art. 4 uśude — „Jeżeli ustawa wymaga uzyskania zgody usługobiorcy, stosuje się przepisy o ochronie danych osobowych". ✅ **[VER-uśude]** Standard zgody jest jednolity w RODO, PKE i uśude.

---

# CZĘŚĆ V. Checklista wdrożeniowa

## Dokumenty na stronie internetowej

- [ ] polityka prywatności z pełną treścią art. 13 ust. 1 i 2 RODO
- [ ] skrócona informacja przy formularzu + link do polityki
- [ ] dane z **art. 5 ust. 2 i ust. 5 uśude**: imię, nazwisko, adres, e-mail, **izba adwokacka**, **tytuł zawodowy „adwokat" i państwo przyznania**, **numer na liście adwokatów z nazwą listy i organem prowadzącym**
- [ ] **NIP** w ofercie — art. 20 ust. 3 Prawa przedsiębiorców w zw. z art. 5 ust. 4 uśude
- [ ] regulamin świadczenia usług drogą elektroniczną (art. 8 uśude)
- [ ] polityka cookies powołująca **art. 399 PKE** — nie art. 173 Prawa telekomunikacyjnego
- [ ] baner cookies z odmową równie łatwą jak zgoda — **albo brak analityki i brak banera**

## Dokumenty w kancelarii

- [ ] **rejestr czynności przetwarzania** (art. 30 ust. 1) — pięć procesów z Części II § 1
- [ ] klauzule informacyjne: dla klienta przy zawarciu umowy, dla kandydatów do pracy, dla osób z formularza
- [ ] **notatka o zastosowaniu art. 14 ust. 5** do danych osób trzecich w aktach — per kategoria, na piśmie
- [ ] **umowy powierzenia** (art. 28 ust. 3) z każdym procesorem: hosting, poczta, chmura, IT, biuro rachunkowe
- [ ] pobrany i **datowany** wzorzec DPA home.pl + Polityka prywatności home.pl
- [ ] rozstrzygnięcie problemu § 2 ust. 1 (dane szczególnych kategorii) + uzasadnienie
- [ ] lista podprocesorów home.pl i ustalenie lokalizacji przetwarzania (EOG?)
- [ ] **upoważnienia** (art. 29) dla sekretariatu, aplikanta, praktykanta — pisemne, z zakresem
- [ ] **zobowiązania do zachowania tajemnicy adwokackiej** dla wszystkich współpracowników
- [ ] **procedura naruszeń**: ocena, rejestr (art. 33 ust. 5), zgłoszenie w 72 h (art. 33 ust. 1), zawiadomienie osób (art. 34), uwzględnienie 48-godzinnego sygnału od home.pl
- [ ] **procedura obsługi żądań** z art. 15–22, cztery ścieżki:
  - klient → pełna realizacja, z granicami art. 16a i ochroną danych osób trzecich w aktach
  - osoba trzecia → wzór odmowy z art. 16a PoA w zw. z art. 6 PoA; przy dostępie także art. 15 ust. 4 RODO
  - pracownik lub kandydat → **pełny reżim RODO bez ograniczeń**
  - żądanie usunięcia danych objętych tajemnicą → odmowa z art. 17 ust. 3 RODO
- [ ] **polityka retencji**: akta spraw — 10 lat z art. 16c ust. 1 pkt 2 lit. c + nakaz usunięcia z ust. 2; kadry i podatki — reżimy własne; zapytania z formularza — osobno
- [ ] **notatka z analizy obowiązku IOD** (art. 37 ust. 1) i **DPIA** (art. 35), jeśli masowa obsługa spraw jednego typu
- [ ] **procedura AML** — tylko dla pięciu typów czynności z art. 2 ust. 1 pkt 14 AML, z uwzględnieniem wyłączenia z art. 75 AML
- [ ] przy rekrutacji: ogłoszenie z widełkami wynagrodzenia (art. 18³ca KP), **bez pytania o dotychczasowe wynagrodzenie** (art. 22¹ § 1 pkt 6 KP w brzmieniu od 24.12.2025)

## Konfiguracja techniczna

- [ ] HTTPS na całej stronie
- [ ] pola obowiązkowe formularza ograniczone do imienia i kanału kontaktu
- [ ] ostrzeżenie przy polu opisowym, żeby nie przesyłać szczegółów sprawy
- [ ] MFA na skrzynce odbierającej zapytania, ograniczony krąg dostępu
- [ ] szyfrowanie dysków i nośników, kopie zapasowe, kontrola dostępu do akt, niszczarka
- [ ] jeśli analityka zostaje — mechanizm blokujący skrypty przed uzyskaniem zgody

## Kalendarz zmian

| Data | Co się zmienia |
|---|---|
| ✅ od 24.12.2025 | art. 22¹ § 1 pkt 6 KP — zakaz pytania o wynagrodzenie u obecnego i poprzednich pracodawców; art. 18³ca KP — obowiązek podania widełek (Dz.U. 2025 poz. 807) |
| ✅ od 3.04.2026 | art. 104 u.o.d.o. — podział wpływów z kar (Dz.U. 2026 poz. 252) |
| ✅ od 23.07.2026 | art. 34 ust. 2a u.o.d.o. — nowe kompetencje Prezesa UODO (Dz.U. 2026 poz. 548) |
| ⏳ **11.08.2026** | art. 59a u.o.d.o. — współpraca Prezesa UODO z Komisją Rozwoju i Bezpieczeństwa Sztucznej Inteligencji (Dz.U. 2026 poz. 1003) |
| 🚩 **1.10.2026** | **art. 6 ust. 4 Prawa o adwokaturze** — znika wyłączenie tajemnicy dla MDR, zostaje wyłącznie AML (Dz.U. 2026 poz. 846) |

---

# CZĘŚĆ VI. Źródła i stan weryfikacji

## Akty w lokalnej bazie

| Klucz | Akt | ELI / CELEX | Uwaga o aktualności |
|---|---|---|---|
| `rodo` | RODO 2016/679, wersja skonsolidowana | `CELEX 02016R0679-20160504` | zawiera sprostowania L 127/2018 i L 74/2021; **nie zawiera motywów** |
| `rodo_motywy` | RODO, brzmienie z Dz.U. UE L 119 | `CELEX 32016R0679` | źródło 173 motywów; artykuły w brzmieniu pierwotnym — **nie cytuj z niego artykułów** |
| `uodo` | u.o.d.o., t.j. z 30.08.2019 | `DU/2019/1781` | po t.j. trzy nowelizacje z 2026 r. — art. 104, art. 34 ust. 2a, art. 59a; **art. 8–11, 101–102, 107–108 bez zmian** |
| `poa` | Prawo o adwokaturze, t.j. z 11.10.2024 | `DU/2024/1564` | 🚩 art. 6 ust. 4 zmienia się 1.10.2026 (`DU/2026/846`); `DU/2025/1172` i `DU/2026/370` nie dotykają art. 6 ani 16a–16c |
| `usude` | uśude, t.j. z 10.10.2024 | `DU/2024/1513` | t.j. ogłoszony przed wejściem PKE — art. 10, 16, 17, 20–22 uchylone |
| `pke` | Prawo komunikacji elektronicznej | `DU/2024/1221` | ✅ **art. 398–400 w brzmieniu pierwotnym** — sprawdzone, patrz niżej |
| `pke_wpr` | przepisy wprowadzające PKE | `DU/2024/1222` | uchyliły art. 10 uśude (art. 26 pkt 3) |
| `wdrozeniowa2019` | ustawa z 21.02.2019 wdrażająca RODO | `DU/2019/730` | źródło art. 16a–16c PoA |
| `aml` | ustawa o przeciwdziałaniu praniu pieniędzy, t.j. z 9.05.2025 | `DU/2025/644` | po t.j. `DU/2025/1669` (art. 72, 56b) i `DU/2026/875` (art. 37–39, 129f–129h, od 1.01.2027) — **art. 2 ust. 1 pkt 14, art. 74–75, 86 bez zmian** |
| `przeds` | Prawo przedsiębiorców, t.j. z 20.10.2025 | `DU/2025/1480` | po t.j. zmiany w art. 5, 17, 21, 62 — **art. 20 bez zmian** |
| `kp` | Kodeks pracy, t.j. z 14.02.2025 | `DU/2025/277` | 🚩 **art. 22¹ § 1 pkt 6 zmieniony po t.j.** przez `DU/2025/807` (od 24.12.2025); dodany art. 18³ca |

Pełna mapa obszaru, pułapki i dług weryfikacyjny: [`wiedza/rodo/03-zrodla-i-akty.md`](wiedza/rodo/03-zrodla-i-akty.md).

## Co zweryfikowano w tej analizie

| # | Pytanie | Odpowiedź | Jak sprawdzone |
|---|---|---|---|
| 1 | czy nowelizacje PKE ruszyły art. 398–400 | **nie** — `DU/2025/637` zmienia art. 337, `DU/2025/820` art. 43, `DU/2026/252` art. 40, `DU/2026/815` uchyla art. 42 | odczyt tekstów czterech ustaw zmieniających, 2026-07-30 |
| 2 | czy nowelizacje AML po t.j. ruszyły przepisy o adwokatach | **nie** — `DU/2025/1669` zmienia art. 72 i 56b, `DU/2026/875` art. 37–39 i 129f–129h | odczyt tekstów, 2026-07-30 |
| 3 | czy nowelizacje Prawa przedsiębiorców ruszyły art. 20 | **nie** — zmiany w art. 5, 17, 21, 62 | odczyt tekstów czterech ustaw, 2026-07-30 |
| 4 | czy nowelizacje KP ruszyły art. 22¹ | **TAK** — `DU/2025/807` zmienił § 1 pkt 6 od 24.12.2025 | odczyt tekstu, 2026-07-30 |
| 5 | czy nowelizacje u.o.d.o. z 2026 r. ruszyły przepisy o IOD i sankcjach | **nie** — art. 104, art. 34 ust. 2a, art. 59a | odczyt tekstów trzech ustaw, 2026-07-29 |
| 6 | czy nowelizacje PoA po t.j. ruszyły art. 6 i 16a–16c | **art. 6 ust. 4 — tak, od 1.10.2026**; 16a–16c bez zmian | odczyt tekstów trzech ustaw, 2026-07-29 |

## ⚠️ Czego nie rozstrzygnięto

| Kwestia | Dlaczego otwarta | Gdzie szukać |
|---|---|---|
| liczenie 10 lat z art. 16c PoA przy czynnościach bez postępowania (porada, opinia) | ustawa wiąże termin z zakończeniem „postępowania, w którym dane zostały zgromadzone" | NRA, Regulamin wykonywania zawodu adwokata |
| kolizja art. 16c ust. 2 (nakaz usunięcia) z bezterminowością tajemnicy (art. 6 ust. 2 PoA) | brak reguły kolizyjnej w tekście | stanowisko NRA, doktryna |
| art. 16c a dane kadrowe kancelarii | „w ramach wykonywania zawodu" jest szersze niż „pomoc prawna" | j.w. |
| łączenie funkcji IOD z wykonywaniem zawodu adwokata | kwestia konfliktu interesów, nie tekstu ustawy | uodo.gov.pl |
| ograniczenia reklamy i informacji handlowej kancelarii | akt samorządowy, poza ELI | Zbiór Zasad Etyki Adwokackiej |
| status transferów do USA (analityka, chmura) | zależy od aktualnych decyzji KE i orzecznictwa | decyzje wykonawcze KE, TSUE, EROD |
| lista podprocesorów home.pl i lokalizacja przetwarzania | wzorzec DPA milczy o EOG | panel klienta, audyt elektroniczny raz na 12 mies. |

## Dokumenty dostawcy hostingu

- [`regulaminy.home.pl/umowa-powierzenia-przetwarzania-danych-osobowych.pdf`](https://regulaminy.home.pl/umowa-powierzenia-przetwarzania-danych-osobowych.pdf)
- [`regulaminy.home.pl/Polityka-prywatnosci-home.pl.pdf`](https://regulaminy.home.pl/Polityka-prywatnosci-home.pl.pdf)
- [`pomoc.home.pl/section/rodo-przetwarzanie-i-ochrona-danych-w-home-pl`](https://pomoc.home.pl/section/rodo-przetwarzanie-i-ochrona-danych-w-home-pl)

⚠️ Wzorce dostawcy zmieniają się bez nowelizacji ustaw. Przed powołaniem w opinii — pobrać ponownie i porównać; w dokumentacji kancelarii trzymać kopię z datą odczytu.

## Rozdziały powiązane

- [`wiedza/rodo/01-zakres-stosowania-rodo.md`](wiedza/rodo/01-zakres-stosowania-rodo.md) — zakres stosowania, role, warstwy obowiązków, sankcje
- [`wiedza/rodo/02-kancelaria-adwokacka-jdg.md`](wiedza/rodo/02-kancelaria-adwokacka-jdg.md) — kancelaria i tajemnica zawodowa
- [`wiedza/rodo/03-zrodla-i-akty.md`](wiedza/rodo/03-zrodla-i-akty.md) — mapa źródeł, pułapki bazy, dług weryfikacyjny
- [`wiedza/rodo/04-strona-www-formularz-home-pl.md`](wiedza/rodo/04-strona-www-formularz-home-pl.md) — strona www, formularz, hosting, cookies
- [`wiedza/spolki-medyczne/14-inspektor-ochrony-danych.md`](wiedza/spolki-medyczne/14-inspektor-ochrony-danych.md) — IOD: kryteria, procedura, kary
