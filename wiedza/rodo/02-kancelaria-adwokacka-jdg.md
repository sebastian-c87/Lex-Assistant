# 02. Kancelaria adwokacka jako JDG — obowiązki RODO

Kazus: **adwokat prowadzący jednoosobową działalność gospodarczą**. Strona internetowa z formularzem kontaktowym ma osobny rozdział → [04-strona-www-formularz-home-pl.md](04-strona-www-formularz-home-pl.md).

## ✅ Status weryfikacyjny

Rozdział przepisany **2026-07-29** na tekstach z lokalnej bazy. Skróty znaczników:

- **`[VER-RODO]`** = ✅ [VER: EUR-Lex CELEX 02016R0679-20160504, 2026-07-29]
- **`[VER-PoA]`** = ✅ [VER: api.sejm.gov.pl ELI DU/2024/1564 (t.j. Prawa o adwokaturze z 11.10.2024), 2026-07-29]
- **`[VER-uodo]`** = ✅ [VER: api.sejm.gov.pl ELI DU/2019/1781 (t.j. u.o.d.o. z 30.08.2019), 2026-07-29]

Odczyt: `python tools/dump_articles.py rodo 30 37 | poa 6 16a 16b 16c | uodo 10 11`

**Dwie korekty wobec poprzedniej wersji tego rozdziału** — obie wynikają z odczytania tekstu ustawy, a nie z omówień:

1. **art. 16c Prawa o adwokaturze dotyczy TAKŻE adwokatów, nie tylko organów adwokatury.** Poprzednia wersja zastrzegała odwrotnie. Ust. 1 pkt 2 lit. c wymienia wprost dane przetwarzane „przez adwokatów w ramach wykonywania zawodu" — 10 lat, a ust. 2 nakazuje ich **usunięcie** po tym okresie. Są trzy terminy (5, 10, 15 lat), nie dwa. Szczegóły w § 4.
2. **W Prawie o adwokaturze NIE MA przepisu wyłączającego art. 16a–16c wobec „wewnętrznego funkcjonowania kancelarii".** Ten zwrot pochodzi z poradników samorządowych, nie z ustawy. Skutek praktyczny jest taki sam, ale wynika z innej konstrukcji — z zakresu samej tajemnicy (art. 6), a nie z odrębnej klauzuli wyłączającej. Szczegóły w § 5.

---

# 1. Adwokat jest administratorem w kilku procesach naraz

Kancelaria przetwarza dane w co najmniej pięciu odrębnych procesach. Mieszanie ich to najczęstszy błąd w dokumentacji kancelaryjnej — każdy ma inną podstawę i inny reżim.

| # | Proces | Czyje dane | Podstawa typowa |
|---|---|---|---|
| 1 | prowadzenie sprawy klienta | klienta | art. 6 ust. 1 lit. b (umowa) + lit. c (obowiązki ustawowe adwokata) |
| 2 | **dane osób trzecich w aktach** — przeciwnik, świadkowie, biegli, rodzina | osób niebędących klientem | art. 6 ust. 1 lit. f; dla danych szczególnych **art. 9 ust. 2 lit. f**; dla danych o wyrokach **art. 10** |
| 3 | kontakt przez formularz / e-mail / telefon | osoby zainteresowanej | art. 6 ust. 1 lit. b (działania przed zawarciem umowy) albo lit. f |
| 4 | obowiązki księgowe, podatkowe, AML | klientów i kontrahentów | art. 6 ust. 1 lit. c |
| 5 | zatrudnienie i współpraca — aplikant, sekretariat, zleceniobiorcy | pracowników i współpracowników | art. 6 ust. 1 lit. b i c; Kodeks pracy art. 22¹ |

Podstawy z art. 6 ust. 1 ✅ **[VER-RODO]**; art. 9 ust. 2 lit. f ✅ **[VER-RODO]** („przetwarzanie jest niezbędne do ustalenia, dochodzenia lub obrony roszczeń lub w ramach sprawowania wymiaru sprawiedliwości").

**Proces nr 2 odróżnia kancelarię od zwykłej firmy usługowej.** Adwokat rutynowo przetwarza dane osób, z którymi nie łączy go żaden stosunek prawny, i to dane z art. 9 (zdrowie, życie seksualne) oraz art. 10 (wyroki skazujące). Bez odrębnej podstawy dla tego procesu dokumentacja jest niekompletna.

Art. 10 RODO w brzmieniu dosłownym:

> „Przetwarzania danych osobowych dotyczących wyroków skazujących oraz czynów zabronionych lub powiązanych środków bezpieczeństwa na podstawie art. 6 ust. 1 wolno dokonywać wyłącznie pod nadzorem władz publicznych lub jeżeli przetwarzanie jest dozwolone prawem Unii lub prawem państwa członkowskiego przewidującymi odpowiednie zabezpieczenia praw i wolności osób, których dane dotyczą. Wszelkie kompletne rejestry wyroków skazujących są prowadzone wyłącznie pod nadzorem władz publicznych."

✅ **[VER-RODO]** art. 10

# 2. Tajemnica adwokacka — fundament, do którego odsyłają art. 16a i 16b

Art. 6 Prawa o adwokaturze, dosłownie:

> „1. Adwokat obowiązany jest zachować w tajemnicy wszystko, o czym dowiedział się w związku z udzielaniem pomocy prawnej.
> 2. Obowiązek zachowania tajemnicy zawodowej nie może być ograniczony w czasie.
> 3. Adwokata nie można zwolnić od obowiązku zachowania tajemnicy zawodowej co do faktów, o których dowiedział się udzielając pomocy prawnej lub prowadząc sprawę.
> 4. Obowiązek zachowania tajemnicy zawodowej nie dotyczy informacji: 1) udostępnianych na podstawie przepisów o przeciwdziałaniu praniu pieniędzy oraz finansowaniu terroryzmu, 2) przekazywanych na podstawie przepisów rozdziału 11a działu III ustawy z dnia 29 sierpnia 1997 r. – Ordynacja podatkowa – w zakresie określonym tymi przepisami."

✅ **[VER-PoA]** art. 6

**Dwa wyłączenia, nie więcej.** AML oraz raportowanie schematów podatkowych (MDR — rozdział 11a działu III Ordynacji). Zakres tajemnicy jest szerszy niż „akta sprawy": obejmuje **wszystko**, o czym adwokat dowiedział się w związku z pomocą prawną — w tym sam fakt, że dana osoba jest klientem, i przedmiot zlecenia.

⚠️ **ZMIANA OD 1.10.2026 — do wpisania w kalendarz.** Ustawa z 29.05.2026 o zmianie ustawy – Ordynacja podatkowa oraz niektórych innych ustaw (Dz.U. 2026 poz. 846) w art. 2 nadaje art. 6 ust. 4 Prawa o adwokaturze nowe brzmienie:

> „4. Obowiązek zachowania tajemnicy zawodowej nie dotyczy informacji udostępnianych na podstawie przepisów o przeciwdziałaniu praniu pieniędzy oraz finansowaniu terroryzmu w zakresie określonym tymi przepisami."

✅ [VER: api.sejm.gov.pl ELI DU/2026/846, 2026-07-29 — akt ogłoszony, wejście w życie 2026-10-01]

Czyli **od 1 października 2026 r. wyłączenie dotyczące MDR znika** i zostaje wyłącznie AML. Do 30 września 2026 r. obowiązuje brzmienie dwupunktowe. Każda klauzula informacyjna i polityka kancelarii powołująca „rozdział 11a Ordynacji" wymaga wtedy przeglądu.

**Tajemnica chroni klienta, nie adwokata** — nie można się jej zrzec. Konsekwencja praktyczna: **klient nie może skutecznie żądać usunięcia danych objętych tajemnicą**; żądanie z art. 17 RODO napotyka granicę z art. 17 ust. 3 lit. b (obowiązek prawny) i lit. e (roszczenia).

# 3. Art. 16a i 16b — krajowa realizacja art. 90 RODO

Podstawa unijna, art. 90 ust. 1 RODO:

> „Państwa członkowskie mogą przyjąć przepisy szczególne określające uprawnienia organów nadzorczych ustanowione w art. 58 ust. 1 lit. e) i f) wobec administratorów lub podmiotów przetwarzających, którzy podlegają […] obowiązkowi zachowania tajemnicy zawodowej lub innym równoważnym obowiązkom zachowania tajemnicy […]. Przepisy te mają zastosowanie wyłącznie do danych osobowych, które administrator lub podmiot przetwarzający otrzymali lub pozyskali w wyniku lub w ramach działania objętego tym obowiązkiem zachowania tajemnicy."

✅ **[VER-RODO]** art. 90 ust. 1

Polska skorzystała z tej możliwości **ustawą z 21 lutego 2019 r. o zmianie niektórych ustaw w związku z zapewnieniem stosowania rozporządzenia […] 2016/679 (Dz.U. 2019 poz. 730)** — jej art. 6 dodał do Prawa o adwokaturze **dział Ia z art. 16a, 16b i 16c**, a art. 7 dodał do ustawy o radcach prawnych odpowiednio art. 5a–5c. ✅ [VER: api.sejm.gov.pl ELI DU/2019/730, 2026-07-29]

## Art. 16a — trzy prawa ograniczone, jedno wyłączone

| Przepis RODO | Skutek u adwokata (brzmienie ustawy) |
|---|---|
| **art. 15 ust. 1 i 3** — dostęp i kopia danych | stosuje się „w zakresie, w jakim nie naruszają obowiązku zachowania przez adwokata tajemnicy, o której mowa w art. 6" |
| **art. 18** — ograniczenie przetwarzania | jw. |
| **art. 19** — powiadamianie o sprostowaniu, usunięciu, ograniczeniu | jw. |
| **art. 21 ust. 1** — sprzeciw | „w przypadku danych osobowych pozyskanych przez adwokata w związku z udzielaniem pomocy prawnej **nie stosuje się**" |

✅ **[VER-PoA]** art. 16a ust. 1 i 2

**Konstrukcja jest dwustopniowa i ma to znaczenie procesowe.** Trzy pierwsze prawa nie są wyłączone — są ograniczone *zakresowo*, więc trzeba za każdym razem ocenić, czy realizacja żądania w danym fragmencie naruszyłaby tajemnicę. Sprzeciw z art. 21 ust. 1 jest wyłączony *w całości* dla danych z pomocy prawnej — tu ocena zakresowa nie jest potrzebna.

**Czego art. 16a nie obejmuje:** art. 16 (sprostowanie) i art. 17 (usunięcie) działają na zasadach ogólnych RODO — ich granice wynikają z art. 17 ust. 3, nie z art. 16a. Odmowa powinna powoływać **art. 16a Prawa o adwokaturze w zw. z art. 6 tej ustawy**, a nie ogólnikowo „tajemnicę zawodową".

## Art. 16b — tajemnica nie ustaje wobec Prezesa UODO

> „Obowiązek zachowania tajemnicy, o której mowa w art. 6, nie ustaje, w przypadku gdy z żądaniem ujawnienia informacji uzyskanych przez adwokata w związku z udzielaniem pomocy prawnej występuje Prezes Urzędu Ochrony Danych Osobowych."

✅ **[VER-PoA]** art. 16b

Najmocniejsza gwarancja w całym pakiecie. Kontrola UODO w kancelarii jest dopuszczalna, ale **nie przełamuje tajemnicy** co do informacji z pomocy prawnej. Wniosek organizacyjny — rozdzielić dwie warstwy dokumentacji:

| Warstwa | Status wobec kontroli |
|---|---|
| rejestr czynności, umowy powierzenia, upoważnienia, polityki, rejestr naruszeń, dowody weryfikacji procesorów, notatka z analizy obowiązku IOD | **do okazania** — nie są objęte tajemnicą z art. 6 |
| akta spraw, korespondencja z klientem, notatki z porad, zapytania z formularza dotyczące spraw | **objęte tajemnicą** — art. 16b |

Trzymać je fizycznie i systemowo osobno — jeden segregator i jeden katalog „RODO", które da się okazać bez ryzyka ujawnienia czegokolwiek z pomocy prawnej. Pamiętać przy tym o art. 108 ust. 1 u.o.d.o.: udaremnianie lub utrudnianie kontroli to przestępstwo (do 2 lat) ✅ **[VER-uodo]** — art. 16b uzasadnia odmowę ujawnienia treści objętej tajemnicą, ale nie uzasadnia odmowy poddania się kontroli jako takiej.

# 4. Art. 16c — trzy okresy przechowywania i nakaz usunięcia

Brzmienie dosłowne ust. 1 pkt 2 i ust. 2 (fragmenty istotne dla kancelarii):

> „1. Okres przechowywania danych osobowych wynosi: […] 2) **10 lat** od końca roku, w którym zakończyło się postępowanie, w którym dane osobowe zostały zgromadzone – w przypadku danych osobowych przetwarzanych: a) w toku prowadzonych przez organy adwokatury oraz organy izb adwokackich postępowań: administracyjnych, w zakresie skarg i wniosków, innych przewidzianych przez ustawę […], b) w ramach nadzoru nad postępowaniami, o których mowa w lit. a, **c) przez adwokatów w ramach wykonywania zawodu**; 3) **15 lat** […] w przypadku danych osobowych przetwarzanych w toku prowadzonych przez organy adwokatury oraz organy izb adwokackich postępowań dyscyplinarnych […]
> 2. Po upływie okresów, o których mowa w ust. 1, w przypadku danych osobowych **przetwarzanych przez adwokatów w ramach wykonywania zawodu, dane osobowe ulegają usunięciu**."

✅ **[VER-PoA]** art. 16c ust. 1 pkt 2 lit. c, pkt 3 i ust. 2

Do tego pkt 1 — **5 lat** — dla danych przetwarzanych przez organy adwokatury i izb w zakresie realizacji zadań publicznych oraz w ramach nadzoru nad adwokaturą.

**Trzy wnioski praktyczne:**

1. Kancelaria ma **ustawowy okres retencji: 10 lat** od końca roku, w którym zakończyło się postępowanie, w którym dane zgromadzono. Nie trzeba go wyprowadzać z przedawnień — jest wprost w ustawie.
2. Po upływie terminu usunięcie jest **obowiązkiem, nie uprawnieniem** („ulegają usunięciu"). Polityka retencji, która przewiduje bezterminowe trzymanie akt, jest sprzeczna z art. 16c ust. 2.
3. ⚠️ **Otwarta kwestia wykładnicza, której nie rozstrzygam z tekstu:** termin biegnie od zakończenia **„postępowania, w którym dane osobowe zostały zgromadzone"**. Nie jest jasne, jak liczyć go dla czynności bez żadnego postępowania — porady prawnej, opinii, negocjacji umowy. Nie ma też w ustawie reguły kolizyjnej z bezterminowością tajemnicy z art. 6 ust. 2 (tajemnica trwa wiecznie, ale nośnik danych ma zniknąć po 10 latach) ani z obowiązkiem badania konfliktu interesów. Przed ustaleniem polityki retencji sprawdź stanowisko NRA i Regulamin wykonywania zawodu adwokata — **to jest właściwe miejsce na tę odpowiedź, nie tekst ustawy.**

# 5. Dwa reżimy w jednej kancelarii — skąd naprawdę wynika granica

W Prawie o adwokaturze **nie ma** przepisu mówiącego, że art. 16a–16c nie stosuje się do „wewnętrznego funkcjonowania kancelarii". Granica wynika z konstrukcji samych przepisów:

- art. 16a ust. 1 ogranicza prawa tylko tam, gdzie naruszałyby **tajemnicę z art. 6**, a ta obejmuje wyłącznie to, „o czym [adwokat] dowiedział się **w związku z udzielaniem pomocy prawnej**",
- art. 16a ust. 2 i art. 16b odnoszą się wprost do danych **„pozyskanych/uzyskanych w związku z udzielaniem pomocy prawnej"**.

Dane, które nie pochodzą z pomocy prawnej — kadrowe, kandydatów do pracy, kontrahentów, dostawców, a także zapytania z formularza, które nie dotyczą jeszcze żadnej sprawy — **nie są objęte tajemnicą z art. 6, więc art. 16a–16b ich nie dotykają i obowiązuje pełny reżim RODO**. Pracownik ma pełne prawo dostępu do swoich danych kadrowych; tu nie ma czym zasłonić odmowy.

Uwaga na art. 16c: jego ust. 1 pkt 2 lit. c mówi o danych przetwarzanych „przez adwokatów **w ramach wykonywania zawodu**" — to sformułowanie szersze niż „w związku z udzielaniem pomocy prawnej" i nie da się z tekstu wyprowadzić, że dane kadrowe kancelarii są z niego wyjęte. ⚠️ Kwestia niejednoznaczna — przy budowie polityki retencji dla danych kadrowych bezpieczniej opierać się na Kodeksie pracy i przepisach podatkowych, a art. 16c stosować do akt spraw.

# 6. Obowiązek informacyjny wobec osób trzecich — art. 14 ust. 5 lit. d RODO

Przy pozyskaniu danych nie od osoby, której dotyczą (dane przeciwnika z akt, dane świadków), zasadą jest art. 14. Wyłączenie:

> „5. Ust. 1–4 nie mają zastosowania, gdy – i w zakresie, w jakim: […] d) dane osobowe muszą pozostać poufne zgodnie z obowiązkiem zachowania tajemnicy zawodowej przewidzianym w prawie Unii lub w prawie państwa członkowskiego, w tym ustawowym obowiązkiem zachowania tajemnicy."

✅ **[VER-RODO]** art. 14 ust. 5 lit. d

Tajemnica adwokacka z art. 6 Prawa o adwokaturze jest właśnie takim ustawowym obowiązkiem. **Adwokat co do zasady nie wysyła klauzuli informacyjnej przeciwnikowi procesowemu** — samo powiadomienie ujawniałoby fakt i przedmiot zlecenia, czyli informację objętą tajemnicą.

Ale wyłączenie **nie działa automatycznie i ryczałtem**: art. 14 ust. 5 wprowadza je „gdy – i w zakresie, w jakim", więc ocenę trzeba przeprowadzić dla kategorii osób i **udokumentować** (art. 5 ust. 2 — rozliczalność). Dodatkowo dostępna jest lit. b (niemożliwość lub niewspółmiernie duży wysiłek) i lit. c (pozyskanie uregulowane wprost w prawie).

**Nie mieszać dwóch warstw w piśmie odmownym:** wobec **obowiązku informacyjnego** działa art. 14 ust. 5 lit. d RODO (przepis unijny); wobec **praw dostępu, ograniczenia, powiadomienia i sprzeciwu** — art. 16a Prawa o adwokaturze (przepis krajowy). Przy prawie dostępu przydaje się jeszcze art. 15 ust. 4 RODO (prawa i wolności innych osób).

# 7. Rejestr czynności — adwokat musi go prowadzić

Zwolnienie z art. 30 ust. 5 (mniej niż 250 osób) **nie działa**, bo kancelaria spełnia wszystkie trzy przesłanki wyłączające zwolnienie — a wystarcza jedna:

1. przetwarzanie **może powodować ryzyko naruszenia praw lub wolności** — akta zawierają informacje o najwrażliwszych sferach życia,
2. **nie ma charakteru sporadycznego** — prowadzenie spraw to działalność systematyczna,
3. obejmuje **dane z art. 9 ust. 1** oraz **dane z art. 10** — sprawy karne, rodzinne, pracownicze, odszkodowawcze.

✅ **[VER-RODO]** art. 30 ust. 1 i 5

Rejestr obejmuje osobno każdy z pięciu procesów z § 1, a jego treść wyznacza art. 30 ust. 1 lit. a–g: dane administratora, cele, kategorie osób i danych, kategorie odbiorców, transfery, „jeżeli jest to możliwe, planowane terminy usunięcia poszczególnych kategorii danych" oraz „jeżeli jest to możliwe, ogólny opis technicznych i organizacyjnych środków bezpieczeństwa, o których mowa w art. 32 ust. 1".

# 8. Inspektor ochrony danych — zwykle nie jest obowiązkowy

Adwokat-JDG nie jest podmiotem publicznym w rozumieniu art. 37 ust. 1 lit. a (art. 9 u.o.d.o. zawęża tę kategorię do jednostek sektora finansów publicznych, instytutów badawczych i NBP ✅ **[VER-uodo]**), nie prowadzi monitorowania na dużą skalę (lit. b), a przetwarzanie danych z art. 9 i 10 w jednoosobowej kancelarii co do zasady nie jest „na dużą skalę" (lit. c).

**Ocena może się odwrócić** przy kancelarii wieloosobowej z masową obsługą spraw jednego typu (windykacja, sprawy frankowe seryjnie). Dlatego: **sporządzić notatkę z analizy** — brak obowiązku trzeba umieć wykazać (art. 5 ust. 2, art. 24 ust. 1).

Jeżeli IOD zostanie wyznaczony dobrowolnie, obowiązki krajowe działają w pełni: zawiadomienie Prezesa UODO **w 14 dni** od wyznaczenia, z imieniem, nazwiskiem, adresem e-mail lub telefonem (art. 10 ust. 1 u.o.d.o.) oraz udostępnienie danych inspektora na stronie internetowej albo w miejscu prowadzenia działalności (art. 11 u.o.d.o.). ✅ **[VER-uodo]**

Kryteria, procedura i wzór notatki: [`../spolki-medyczne/14-inspektor-ochrony-danych.md`](../spolki-medyczne/14-inspektor-ochrony-danych.md) — treść uniwersalna, stosuje się także do kancelarii.

# 9. Naruszenia ochrony danych — 72 godziny

> „W przypadku naruszenia ochrony danych osobowych, administrator bez zbędnej zwłoki – w miarę możliwości, nie później niż w terminie 72 godzin po stwierdzeniu naruszenia – zgłasza je organowi nadzorczemu […], chyba że jest mało prawdopodobne, by naruszenie to skutkowało ryzykiem naruszenia praw lub wolności osób fizycznych. Do zgłoszenia przekazanego organowi nadzorczemu po upływie 72 godzin dołącza się wyjaśnienie przyczyn opóźnienia."

✅ **[VER-RODO]** art. 33 ust. 1

Zawiadomienie osób — tylko przy **wysokim** ryzyku (art. 34 ust. 1). Rejestr naruszeń — art. 33 ust. 5, prowadzi się go także dla naruszeń niezgłaszanych.

**Specyfika kancelarii:** utrata laptopa z aktami albo błędne wysłanie pisma to niemal zawsze naruszenie skutkujące ryzykiem, bo dane objęte tajemnicą i z art. 9 podnoszą wagę naruszenia. Domyślne założenie „to za mało istotne, żeby zgłaszać" jest tu ryzykowne.

# 10. Minimum dokumentacyjne kancelarii

- [ ] **rejestr czynności przetwarzania** (art. 30 ust. 1) — pięć procesów z § 1
- [ ] **klauzule informacyjne** (art. 13): dla klienta przy zawarciu umowy, dla kandydatów do pracy, dla osób z formularza
- [ ] **notatka o zastosowaniu art. 14 ust. 5** do danych osób trzecich w aktach — na piśmie, per kategoria
- [ ] **umowy powierzenia** (art. 28 ust. 3) z każdym procesorem: hosting, poczta, chmura, IT, biuro rachunkowe → rozdział 04
- [ ] **upoważnienia** (art. 29) dla sekretariatu, aplikanta, praktykanta — pisemne, z zakresem
- [ ] **zobowiązania do zachowania tajemnicy adwokackiej** dla wszystkich współpracowników — wymóg samorządowy, niezależny od RODO
- [ ] **procedura naruszeń**: ocena, rejestr, zgłoszenie w 72 h (art. 33), zawiadomienie osób (art. 34)
- [ ] **procedura obsługi żądań** z art. 15–22, z osobnymi ścieżkami:
  - klient → pełna realizacja z granicami art. 16a i z ochroną danych osób trzecich w aktach
  - osoba trzecia → wzór odmowy z art. 16a PoA w zw. z art. 6 PoA, przy dostępie także art. 15 ust. 4 RODO
  - pracownik lub kandydat → **pełny reżim RODO bez ograniczeń**
  - żądanie usunięcia danych objętych tajemnicą → odmowa z art. 17 ust. 3 RODO
- [ ] **polityka retencji** — akta spraw: 10 lat z art. 16c ust. 1 pkt 2 lit. c + nakaz usunięcia z ust. 2; kadry i podatki — reżimy własne
- [ ] **notatka z analizy obowiązku IOD** (art. 37 ust. 1) i **DPIA** (art. 35), jeśli masowa obsługa spraw jednego typu
- [ ] **środki techniczne** (art. 32 ust. 1): szyfrowanie dysków i nośników, MFA do poczty, kopie zapasowe, kontrola dostępu do akt, niszczenie dokumentów, zabezpieczenie fizyczne lokalu

# 11. Dług weryfikacyjny tego rozdziału

| Kwestia | Co ustalić | Gdzie |
|---|---|---|
| retencja akt bez „postępowania" (porady, opinie) | jak liczyć 10 lat z art. 16c, gdy żadne postępowanie się nie toczyło | NRA, Regulamin wykonywania zawodu adwokata (uchwała NRA) |
| kolizja art. 16c ust. 2 z bezterminowością tajemnicy (art. 6 ust. 2) | czy usunięcie danych po 10 latach obejmuje całe akta | stanowisko NRA / doktryna |
| art. 16c a dane kadrowe kancelarii | czy „w ramach wykonywania zawodu" obejmuje zaplecze administracyjne | j.w. |
| łączenie funkcji IOD z wykonywaniem zawodu adwokata | stanowisko organu + konflikt interesów | uodo.gov.pl |
| zakres obowiązków AML kancelarii | kiedy adwokat jest instytucją obowiązaną (art. 2 ust. 1 pkt 14 u.p.p.p.) | ustawa AML — **nie ma jej jeszcze w lokalnej bazie** |

## Powiązania

- Zakres stosowania, role, sankcje → [01-zakres-stosowania-rodo.md](01-zakres-stosowania-rodo.md)
- Strona www, formularz, hosting, cookies → [04-strona-www-formularz-home-pl.md](04-strona-www-formularz-home-pl.md)
- Mapa źródeł i aktualność aktów → [03-zrodla-i-akty.md](03-zrodla-i-akty.md)
