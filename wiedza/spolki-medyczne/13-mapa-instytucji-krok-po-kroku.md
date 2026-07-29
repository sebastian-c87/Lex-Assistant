# 13. Mapa instytucji i urzędów — gabinet psychologiczny w sp. z o.o., krok po kroku

**Kazus:** dwóch psychologów, każdy prowadzi obecnie JDG, zakładają sp. z o.o. po 50 % udziałów. Przedmiot: gabinet psychologiczny (diagnoza, konsultacje, psychoterapia) — czyli **ambulatoryjne świadczenia zdrowotne** udzielane przez **podmiot leczniczy**.

**Data opracowania:** 2026-07-25.

---

## Legenda znaczników (PRAWO-HARDGATE)

| Znacznik | Znaczenie |
|---|---|
| ✅ `[VER: api.sejm.gov.pl ELI …, 2026-07-21]` | Cytat dosłowny z tekstu jednolitego pobranego lokalnie do `akty/`. Pełna weryfikacja. |
| ⚠️ `[NIEWERYFIKOWANE — egress; źródło: <domena>]` | Treść **nie** pochodzi z naszych 6 aktów. W sesji, w której powstał ten rozdział, polityka egress blokowała `api.sejm.gov.pl` i `isap.sejm.gov.pl` (HTTP 403 na CONNECT), więc nie dało się potwierdzić w bazie oficjalnej. Podano źródło rządowe z wyszukiwania oraz **dokładny akt do sprawdzenia**. Traktuj jako hipotezę roboczą do potwierdzenia przed użyciem wobec klienta. |
| ⚠️ `[WYMAGA WERYFIKACJI — <co>]` | Kwota/termin/klasyfikacja zmienna w czasie — sprawdzić na dzień czynności. |

**Zasada użycia tego rozdziału:** wszystkie pozycje ✅ możesz cytować od razu. Wszystkie ⚠️ przed powołaniem się wobec klienta lub sądu **domknij przez ELI/ISAP**, gdy sieć będzie dostępna. Lista do domknięcia jest zebrana na końcu (sekcja „Rejestr długu weryfikacyjnego").

---

## Zanim cokolwiek zrobisz — dlaczego to nie jest zwykła spółka usługowa

Trzy ustalenia rozstrzygają cały dalszy tor postępowania:

**1. Psycholog udzielający konsultacji świadczy świadczenia zdrowotne.**

> „świadczenie zdrowotne – działania służące zachowaniu, ratowaniu, przywracaniu lub poprawie zdrowia oraz inne działania medyczne wynikające z procesu leczenia lub przepisów odrębnych regulujących zasady ich wykonywania" (art. 2 ust. 1 pkt 10 u.dz.l.)

✅ [VER: api.sejm.gov.pl ELI DU/2026/156, 2026-07-21]

**2. Spółka z o.o. jest wprost dopuszczona jako podmiot leczniczy.**

> „Podmiotami leczniczymi są: 1) **przedsiębiorcy** w rozumieniu przepisów ustawy z dnia 6 marca 2018 r. – Prawo przedsiębiorców […] **we wszelkich formach przewidzianych dla wykonywania działalności gospodarczej**, jeżeli ustawa nie stanowi inaczej […] – w zakresie, w jakim wykonują działalność leczniczą." (art. 4 ust. 1 pkt 1 u.dz.l.)

✅ [VER: api.sejm.gov.pl ELI DU/2026/156, 2026-07-21]

**3. Psycholog nie ma alternatywy w postaci „praktyki zawodowej".** Katalog z art. 5 u.dz.l. obejmuje wyłącznie lekarzy, pielęgniarki, fizjoterapeutów i diagnostów laboratoryjnych, a art. 106 ust. 1 nie zna organu rejestrowego dla psychologów. Jedyne wejście prowadzi przez **podmiot leczniczy rejestrowany u wojewody**. Szerzej: [01-podmiot-leczniczy-podstawy](01-podmiot-leczniczy-podstawy.md).

**Wniosek operacyjny:** ścieżka jest dwutorowa i kolejność jest wymuszona — **najpierw byt korporacyjny (KRS), potem status podmiotu leczniczego (RPWDL)**, a dopiero po wpisie do RPWDL wolno przyjąć pierwszego pacjenta (art. 103 u.dz.l.).

---

## FAZA 0 — Decyzje, które trzeba podjąć przed pierwszą wizytą u notariusza

Te cztery decyzje determinują, ile urzędów odwiedzicie i w jakiej kolejności.

### 0.1. S24 czy akt notarialny?

Rozstrzygające jest, czy wnosicie **aport** (np. wyposażenie gabinetu, testy, bazę klientów z JDG):

> „W przypadku spółki, której umowę zawarto przy wykorzystaniu wzorca umowy, na pokrycie kapitału zakładowego wnosi się **wyłącznie wkłady pieniężne**." (art. 158 § 1¹ KSH)

✅ [VER: api.sejm.gov.pl ELI DU/2024/18, 2026-07-21]

Do tego S24 nie dopuszcza indywidualnych klauzul. Dla dwóch wspólników 50/50 w spółce medycznej **rekomendacja: akt notarialny** — bo potrzebujecie klauzul, których wzorzec nie ma:

- art. 176 KSH — powtarzające się świadczenia niepieniężne (główny mechanizm wypłaty dla wspólników-psychologów, patrz [05](05-wynagrodzenia-i-swiadczenia.md)); klauzuli nie da się dodać później bez zmiany umowy, czyli bez kolejnego aktu notarialnego
- art. 159 KSH — obowiązki i szczególne korzyści wspólników: „należy to **pod rygorem bezskuteczności wobec spółki** dokładnie określić w umowie spółki" ✅ [VER: ELI DU/2024/18, 2026-07-21]
- art. 182 KSH — ograniczenie zbycia udziałów
- art. 177 KSH — dopłaty
- art. 208 § 8 KSH — głos rozstrzygający prezesa **w zarządzie** (uwaga: dotyczy tylko patu w zarządzie, **nie** patu między wspólnikami na zgromadzeniu — tam odpowiednika nie ma)
- mechanizm wyjścia z patu wspólników 50/50 (buy-sell, umorzenie przymusowe, rozwiązanie spółki) — **krytyczne przy 50/50**, bo art. 266 KSH jest przy tym układzie niedostępny; patrz [`szablony/01-umowa-spolki-z-o-o-medyczna.md`](../../szablony/01-umowa-spolki-z-o-o-medyczna.md) § 24
- warunek posiadania prawa wykonywania zawodu przez wspólnika/członka zarządu — istotne od 19.05.2028

### 0.2. Co z dwiema JDG?

Trzy warianty, każdy z innymi konsekwencjami urzędowymi:

| Wariant | Co robicie z JDG | Konsekwencje |
|---|---|---|
| **A. Likwidacja JDG** | Wykreślenie z CEIDG, wyrejestrowanie z ZUS, VAT-Z, zamknięcie ksiąg | Najczystszy. Ryzyko: przerwa w ciągłości przyjmowania pacjentów między zamknięciem JDG a wpisem do RPWDL. |
| **B. Zawieszenie JDG** | Zawieszenie w CEIDG na czas rejestracji spółki | Bezpieczniejszy operacyjnie — JDG jako koło ratunkowe, gdyby RPWDL się przeciągnął. |
| **C. JDG działa dalej równolegle** | Nic | Dopuszczalne, ale rodzi pytania o transfer pacjentów, o dokumentację (kto administratorem danych) i o VAT/podatki. Wymaga rozdzielenia dokumentacji medycznej JDG i spółki. |

**Kruczek dokumentacyjny przy A i B:** dokumentacja medyczna pacjentów z JDG **nie przechodzi automatycznie** na spółkę — patrz [06-aport-jdg](06-aport-jdg.md) i [08-rodo-i-dokumentacja](08-rodo-i-dokumentacja.md). To odrębna czynność z podstawą prawną i informacją dla pacjentów.

**Kruczek karny:** psycholog w JDG **nie był** podmiotem leczniczym (nie miał wpisu do RPWDL — bo nie mógł go mieć jako praktyka). Świadczenia w spółce bez wpisu do RPWDL to już inna sytuacja prawna — art. 103 u.dz.l. wprost zakazuje.

### 0.3. Lokal — trzy warstwy zgodności naraz

Lokal musi być gotowy **przed** złożeniem wniosku do RPWDL, bo w oświadczeniu z art. 100 ust. 2 u.dz.l. potwierdzacie pod rygorem art. 233 § 6 KK, że **spełniacie** (czas teraźniejszy) warunki art. 17. Trzy warstwy:

1. **Prawo budowlane** — jeśli lokal był mieszkalny, trzeba zgłosić zmianę sposobu użytkowania (FAZA 9.1)
2. **Wymagania sanitarne art. 22 u.dz.l.** + rozporządzenie MZ (FAZA 9.2)
3. **Tytuł prawny** — najem/własność; przy najmie sprawdzić, czy umowa dopuszcza działalność leczniczą i podnajem oraz czy właściciel zgodzi się na zgłoszenie adresu do RPWDL

**Wyjątek teleporadowy** — jeśli spółka udziela świadczeń **wyłącznie** zdalnie:

> „Wymagań określonych w rozporządzeniu wydanym na podstawie ust. 3 **nie stosuje się** do pomieszczeń i urządzeń podmiotów wykonujących działalność leczniczą udzielających **wyłącznie ambulatoryjnych świadczeń zdrowotnych za pośrednictwem systemów teleinformatycznych lub systemów łączności**." (art. 22 ust. 3a u.dz.l.)

✅ [VER: api.sejm.gov.pl ELI DU/2026/156, 2026-07-21]

To realna optymalizacja: model wyłącznie zdalny znosi wymagania lokalowe z rozporządzenia MZ. Ale uwaga — „wyłącznie". Jedna wizyta stacjonarna wywraca zwolnienie. Adresem w RPWDL jest wtedy „miejsce przyjmowania wezwań i przechowywania dokumentacji medycznej" (art. 100 ust. 1 pkt 3 u.dz.l.), a miejscem udzielania świadczeń — miejsce przebywania osoby wykonującej zawód medyczny (art. 24 ust. 1 pkt 5 u.dz.l.). ✅ [VER: ELI DU/2026/156, 2026-07-21]

### 0.4. Czy przyjmujecie małoletnich?

Decyzja o przyjmowaniu dzieci uruchamia **osobny, niebanalny blok obowiązków** (FAZA 16.1): standardy ochrony małoletnich i weryfikacja każdej osoby dopuszczanej do pracy z dziećmi w rejestrach karnych. Jeśli nie planujecie dzieci — zapiszcie to w regulaminie organizacyjnym i cenniku, bo pierwsza przyjęta 16-latka uruchamia wszystkie te obowiązki retroaktywnie.

---

## FAZA 1 — Notariusz (kancelaria notarialna)

**Czynność:** zawarcie umowy spółki w formie aktu notarialnego.

> „Umowa spółki z ograniczoną odpowiedzialnością powinna być zawarta w formie aktu notarialnego." (art. 157 § 2 KSH)

**Obligatoryjna treść umowy** (art. 157 § 1 KSH): firma i siedziba; przedmiot działalności; wysokość kapitału zakładowego; czy wspólnik może mieć więcej niż jeden udział; liczba i wartość nominalna udziałów każdego wspólnika; czas trwania, jeżeli oznaczony.

**Firma** — art. 160 § 1 KSH: „powinna jednak zawierać dodatkowe oznaczenie »spółka z ograniczoną odpowiedzialnością«"; dopuszczalny skrót „sp. z o.o." (§ 2).

**Kapitał** — art. 154 KSH: min. 5000 zł, wartość nominalna udziału min. 50 zł.

✅ [VER: api.sejm.gov.pl ELI DU/2024/18, 2026-07-21] — dla wszystkich powyższych

**→ Kruczek nazwowy, o którym trzeba pomyśleć JUŻ u notariusza:** firma spółki musi różnić się od nazwy zakładu leczniczego, którą podacie w RPWDL:

> „Nazwa zakładu leczniczego, o której mowa w ust. 1 pkt 6, **nie może być taka sama jak oznaczenie podmiotu leczniczego** zgodnie z ust. 1 pkt 1." (art. 100 ust. 1a u.dz.l.)

✅ [VER: api.sejm.gov.pl ELI DU/2026/156, 2026-07-21]

Zaplanujcie parę: np. firma „Centrum Psychologiczne Kowalski i Nowak sp. z o.o." + zakład leczniczy „Poradnia Psychologiczna [ulica/miasto]". Jeśli firma wyczerpie wszystkie sensowne nazwy, w RPWDL zostaniecie z nazwą sztuczną.

**Notariusz jako płatnik PCC:** przy akcie notarialnym notariusz pobiera PCC od umowy spółki — nie składacie wtedy PCC-3 samodzielnie. ⚠️ [NIEWERYFIKOWANE — egress; źródło: podatki.gov.pl, biznes.gov.pl; sprawdź: ustawa o PCC — stawka 0,5 % od kapitału zakładowego, art. 1 ust. 1 pkt 1 lit. k, art. 6 ust. 1 pkt 8, art. 7 ust. 1 pkt 9, oraz przepis o notariuszu jako płatniku]

**Do notariusza zabierzcie:** dowody tożsamości obu wspólników, ustaloną treść umowy (najlepiej projekt przygotowany wcześniej — nie improwizujcie klauzul przy stole), dane adresowe siedziby, uchwałę/postanowienie o powołaniu zarządu (albo powołajcie zarząd w samej umowie — wtedy nie trzeba osobnego dowodu ustanowienia, art. 167 § 1 pkt 3 KSH).

**Opłaty:** taksa notarialna (zależna od kapitału) + VAT + wypisy + PCC 0,5 %. ⚠️ [WYMAGA WERYFIKACJI — rozporządzenie MS o maksymalnych stawkach taksy notarialnej; kwoty zależą od wysokości kapitału]

---

## FAZA 2 — Sąd rejestrowy (KRS) przez Portal Rejestrów Sądowych

**Organ:** sąd rejonowy — wydział gospodarczy KRS właściwy dla siedziby spółki.

> „Zarząd zgłasza zawiązanie spółki do sądu rejestrowego właściwego ze względu na siedzibę spółki […] Wniosek o wpis spółki do rejestru **podpisują wszyscy członkowie zarządu**." (art. 164 § 1 KSH)

✅ [VER: api.sejm.gov.pl ELI DU/2024/18, 2026-07-21]

### 2.1. Treść zgłoszenia (art. 166 § 1 KSH — cytat dosłowny)

> „1) firmę, siedzibę i adres spółki; 2) przedmiot działalności spółki; 3) wysokość kapitału zakładowego; 4) określenie, czy wspólnik może mieć więcej niż jeden udział; 5) nazwiska, imiona i adresy albo **adresy do doręczeń elektronicznych** członków zarządu oraz sposób reprezentowania spółki; 6) nazwiska i imiona członków rady nadzorczej lub komisji rewizyjnej, jeżeli ustawa lub umowa spółki wymaga ustanowienia rady nadzorczej lub komisji rewizyjnej; 7) **jeżeli wspólnicy wnoszą do spółki wkłady niepieniężne – zaznaczenie tej okoliczności**; 8) czas trwania spółki, jeżeli jest oznaczony; 9) jeżeli umowa wskazuje pismo przeznaczone do ogłoszeń spółki – oznaczenie tego pisma."

✅ [VER: api.sejm.gov.pl ELI DU/2024/18, 2026-07-21]

### 2.2. Załączniki (art. 167 KSH — cytat dosłowny)

> „§ 1. Do zgłoszenia spółki należy dołączyć: 1) umowę spółki; 2) **oświadczenie wszystkich członków zarządu, że wkłady zostały wniesione w całości przez wszystkich wspólników**, 3) jeżeli o powołaniu członków organów spółki nie stanowi akt notarialny zawierający umowę spółki, dowód ich ustanowienia, z wyszczególnieniem składu osobowego.
> § 2. Jednocześnie ze zgłoszeniem należy złożyć **podpisaną przez wszystkich członków zarządu listę wspólników** z podaniem nazwiska i imienia lub firmy (nazwy) oraz liczby i wartości nominalnej udziałów każdego z nich."

✅ [VER: api.sejm.gov.pl ELI DU/2024/18, 2026-07-21]

**→ Uwaga praktyczna:** ustawa **nie** wymaga na tym etapie zaświadczenia z banku. Wymaga *oświadczenia zarządu* o wniesieniu wkładów. Rachunek bankowy otworzycie realnie po KRS (bank chce odpisu KRS i NIP) — czyli wkład pieniężny wnosi się najpierw „do kasy" spółki w organizacji albo na rachunek techniczny, a oświadczenie składa zarząd na własną odpowiedzialność. Przy S24 jest wprost inaczej: pokrycie kapitału do 7 dni **po** wpisie (art. 158 § 1¹ zd. 2 KSH) i dodatkowe oświadczenie w 7 dni po wpisie (art. 167 § 5 KSH). ✅ [VER: ELI DU/2024/18, 2026-07-21]

### 2.3. Termin — najczęściej mylony

> „§ 1. Jeżeli zawiązanie spółki nie zostało zgłoszone do sądu rejestrowego **w terminie sześciu miesięcy** od dnia zawarcia umowy spółki albo jeżeli postanowienie sądu odmawiające zarejestrowania stało się prawomocne, **umowa spółki ulega rozwiązaniu**. § 2. W przypadku spółki, której umowa została zawarta przy wykorzystaniu wzorca umowy, termin, o którym mowa w § 1, wynosi **7 dni**." (art. 169 KSH)

✅ [VER: api.sejm.gov.pl ELI DU/2024/18, 2026-07-21]

6 miesięcy przy akcie notarialnym, 7 dni przy S24. Sankcja to rozwiązanie umowy spółki, nie grzywna.

### 2.4. Życzliwa klauzula sądowa

> „Sąd rejestrowy **nie może odmówić** wpisania spółki do rejestru z powodu drobnych uchybień, które nie naruszają interesu spółki oraz interesu publicznego, a nie mogą być usunięte bez poniesienia niewspółmiernie wysokich kosztów." (art. 164 § 3 KSH) ✅ [VER: ELI DU/2024/18, 2026-07-21]

### 2.5. Opłaty

- Opłata sądowa od wniosku o pierwszy wpis: **500 zł** (tryb tradycyjny/PRS) / **250 zł** (S24) ⚠️ [NIEWERYFIKOWANE — egress; źródło: gov.pl/sprawiedliwosc; sprawdź: ustawa o kosztach sądowych w sprawach cywilnych]
- Ogłoszenie w MSiG: **historycznie 100 zł — ale obowiązek ogłaszania wpisów do KRS w MSiG został uchylony dla wniosków składanych od 29.11.2025**, więc tej opłaty najprawdopodobniej już nie ponosicie ⚠️ [NIEWERYFIKOWANE — egress; źródło: gov.pl/sprawiedliwosc; sprawdź: nowelizacja ustawy o KRS / ustawy o wydawaniu MSiG — **to zmiana świeża, potwierdź przed doliczeniem do kosztorysu**]

### 2.6. PKD

Kod dla praktyki psychologicznej / pozostałej działalności w zakresie opieki zdrowotnej. ⚠️ [WYMAGA WERYFIKACJI — klasyfikacja PKD; PKD 2025 weszła w miejsce PKD 2007, numeracja się zmieniła; sprawdź aktualny kod dla działalności psychologicznej przed wpisaniem do umowy spółki i KRS] Błąd tutaj boli, bo poprawka przedmiotu działalności wymaga zmiany umowy spółki (akt notarialny).

---

## FAZA 3 — Co dzieje się automatycznie po wpisie do KRS

Spółka **z chwilą wpisu** uzyskuje osobowość prawną (art. 12 KSH). ✅ [VER: ELI DU/2024/18, 2026-07-21]

Bez własnych wniosków otrzymujecie:

| Numer | Rejestr | Organ |
|---|---|---|
| **NIP** | CRP KEP (Centralny Rejestr Podmiotów – Krajowa Ewidencja Podatników) | Urząd Skarbowy |
| **REGON** | REGON | GUS |

⚠️ [NIEWERYFIKOWANE — egress; źródło: biznes.gov.pl, zus.pl; sprawdź: ustawa o zasadach ewidencji i identyfikacji podatników i płatników — tzw. „jedno okienko" dla podmiotów KRS]

**To nie koniec — automat NIE obejmuje danych uzupełniających.** Te trzeba dosłać samodzielnie (FAZA 4.1).

---

## FAZA 4 — Urząd Skarbowy (trzy odrębne czynności)

### 4.1. NIP-8 — dane uzupełniające

Rachunki bankowe, adres miejsca prowadzenia działalności, skrócona nazwa płatnika, data powstania obowiązku opłacania składek. US przekazuje je do ZUS, który na tej podstawie **sam** utworzy zgłoszenie płatnika (ZUS ZPA/ZBA/ZAA) — nie składacie go ręcznie.

**Termin: 7 dni** od dnia powstania obowiązku opłacania składek (czyli w praktyce od zatrudnienia pierwszej osoby / powstania tytułu ubezpieczeniowego). ⚠️ [NIEWERYFIKOWANE — egress; źródło: biznes.gov.pl, zus.pl; sprawdź: ustawa o zasadach ewidencji i identyfikacji podatników — art. 5 ust. 2b i nast. Uwaga: w obiegu funkcjonują dwa terminy (7 dni „gdy płatnik składek" i 21 dni w pozostałych przypadkach) — **ustal, który ma zastosowanie do Waszej konfiguracji, bo od tego zależy sankcja**]

### 4.2. VAT-R — status VAT

Usługi psychologiczne co do zasady mieszczą się w zwolnieniu przedmiotowym dla usług opieki medycznej (art. 43 ust. 1 pkt 18–19a ustawy o VAT). ⚠️ [NIEWERYFIKOWANE — egress; źródło: podatki.gov.pl, kis.gov.pl; sprawdź: art. 43 ust. 1 pkt 18, 19, 19a ustawy o VAT + interpretacja ogólna MF nr PT1.8101.1.2024]

**To nie jest oczywiste i tu leży realne ryzyko podatkowe.** Zwolnienie jest przedmiotowo-podmiotowe: obejmuje usługi **służące profilaktyce, zachowaniu, ratowaniu, przywracaniu i poprawie zdrowia**, wykonywane w ramach zawodów medycznych. Konsekwencje praktyczne:

- Terapia w celu poprawy zdrowia psychicznego → zwolnienie prawdopodobne
- **Opinie i diagnozy na zamówienie osób trzecich** (sąd, pracodawca, ubezpieczyciel, badania kierowców, opinie do adopcji) → często **poza** zwolnieniem, bo celem nie jest ochrona zdrowia, a dostarczenie ekspertyzy. Wtedy VAT 23 %
- Coaching, szkolenia, warsztaty rozwojowe → zwykle **poza** zwolnieniem
- Mieszany model = obowiązek proporcji i ewidencji

**→ Rekomendacja:** przed VAT-R rozpisać katalog usług i przy każdej pozycji określić status VAT; przy pozycjach niejednoznacznych rozważyć **wniosek o interpretację indywidualną do KIS** (opłata 40 zł od stanu faktycznego ⚠️ [WYMAGA WERYFIKACJI — art. 14f Ordynacji podatkowej]). To jedyny sposób realnego zabezpieczenia.

### 4.3. PCC

Przy akcie notarialnym — pobiera notariusz. Przy S24 — deklaracja **PCC-3 w 14 dni** od zawarcia umowy spółki, stawka 0,5 % od wartości kapitału zakładowego. ⚠️ [NIEWERYFIKOWANE — egress; źródło: podatki.gov.pl, biznes.gov.pl; sprawdź: ustawa o PCC art. 3 ust. 1 pkt 2, art. 6 ust. 1 pkt 8 lit. a, art. 7 ust. 1 pkt 9, art. 10 ust. 1]

**Podstawę PCC zmniejsza się o koszty notariusza (z VAT) i opłaty rejestracyjne KRS** — dopilnujcie, by notariusz to uwzględnił. ⚠️ [NIEWERYFIKOWANE — egress; źródło: podatki.gov.pl; sprawdź: art. 6 ust. 9 ustawy o PCC]

### 4.4. Wybór formy opodatkowania i estoński CIT

Spółka płaci CIT. Do rozważenia ryczałt od dochodów spółek („estoński CIT") — dla dwóch wspólników-osób fizycznych bez udziałów w innych podmiotach warunki bywają spełnione, a efekt kasowy istotny. ⚠️ [WYMAGA WERYFIKACJI — rozdział 6b ustawy o CIT: warunki wejścia, terminy zawiadomienia ZAW-RD, wymóg zatrudnienia] Decyzję podejmijcie **z doradcą podatkowym przed pierwszym rokiem obrotowym** — terminy są nieprzywracalne.

---

## FAZA 5 — CRBR (Centralny Rejestr Beneficjentów Rzeczywistych)

**Organ:** Minister Finansów; zgłoszenie elektroniczne na `crbr.podatki.gov.pl`, podpisane przez osoby reprezentujące spółkę.

**Kto beneficjentem:** przy 50/50 — **oba wspólnicy** (każdy przekracza próg 25 % udziałów). Zgłaszacie też, kto reprezentuje.

**Termin: 14 dni** od wpisu do KRS (dla podmiotów rejestrowanych po 10.11.2022), i 14 dni od każdej zmiany danych. **Sankcja: kara pieniężna do 1 000 000 zł.** Zgłoszenie jest bezpłatne.

⚠️ [NIEWERYFIKOWANE — egress; źródło: gov.pl/web/finanse, biznes.gov.pl; sprawdź: ustawa o przeciwdziałaniu praniu pieniędzy i finansowaniu terroryzmu — art. 58, 59, 60 ust. 1, art. 153]

**→ Uwaga:** wcześniejsza wersja naszej checklisty ([12](12-checklist-i-kruczki.md)) podawała **7 dni**. Źródła rządowe wskazują **14 dni** po nowelizacji z 2022 r. Termin skorygowany, ale **przed użyciem wobec klienta potwierdź w ustawie AML** — różnica 7/14 dni to różnica między terminowym a spóźnionym zgłoszeniem przy karze do 1 mln zł.

---

## FAZA 6 — e-Doręczenia (Ministerstwo Cyfryzacji)

Spółka wpisana do KRS **musi mieć adres do doręczeń elektronicznych (ADE)** wpisany do Bazy Adresów Elektronicznych. Dla podmiotów rejestrowanych w KRS **od 1.01.2025 adres zakłada się w toku samej rejestracji** — art. 166 § 1 pkt 5 KSH już przewiduje „adresy do doręczeń elektronicznych członków zarządu" ✅ [VER: ELI DU/2024/18, 2026-07-21].

⚠️ [NIEWERYFIKOWANE — egress; źródło: gov.pl/web/e-doreczenia, gov.pl/web/rozwoj-technologia; sprawdź: ustawa o doręczeniach elektronicznych — zakres obowiązku i data dla podmiotów KRS]

**→ Praktycznie:** to nie jest formalność do odłożenia. Przez ADE urzędy (w tym wojewoda w sprawie RPWDL i US) będą do Was pisać skutecznie. Nieodbieranie = doręczenie ze skutkiem prawnym. Wyznaczcie osobę odpowiedzialną za skrzynkę i regułę sprawdzania.

---

## FAZA 7 — Bank

**Czynność:** otwarcie rachunku firmowego. Bank poprosi o: odpis/wydruk z KRS, NIP, REGON, umowę spółki, dokumenty tożsamości reprezentantów, oświadczenia o beneficjentach (bank ma własne obowiązki AML).

**Powiązania obowiązkowe:**
- Numer rachunku → **NIP-8** (FAZA 4.1) → dalej do ZUS
- Numer rachunku → **wykaz podatników VAT („biała lista")**, jeśli rejestrujecie się do VAT. Kontrahent płacący na rachunek poza białą listą traci koszt i odpowiada solidarnie za VAT ⚠️ [WYMAGA WERYFIKACJI — art. 96b ustawy o VAT, art. 117ba Ordynacji podatkowej]

**Kruczek przy kapitale minimalnym:** przy kapitale 5000 zł niektóre banki grymaszą przy otwarciu rachunku i przy ocenie AML. Rozważcie 10 000–50 000 zł — patrz [02](02-sp-z-o-o-zakladanie.md).

---

## FAZA 8 — ZUS

Tu jest najczęściej popełniany błąd w spółkach dwuosobowych — **w drugą stronę**: ludzie płacą składki, których nie muszą płacić.

### 8.1. Wspólnicy 50/50 — brak tytułu do ubezpieczeń z samego udziału

Obowiązek ubezpieczeń społecznych z tytułu bycia wspólnikiem dotyczy wspólnika **jednoosobowej** spółki z o.o. (oraz wspólników spółek jawnej, partnerskiej, komandytowej). **Wspólnik spółki wieloosobowej — w tym dwuosobowej 50/50 — nie podlega z tego tytułu ubezpieczeniom.**

⚠️ [NIEWERYFIKOWANE — egress; źródło: zus.pl, biznes.gov.pl; sprawdź: art. 6 ust. 1 pkt 5 w zw. z art. 8 ust. 6 pkt 4 ustawy o systemie ubezpieczeń społecznych. Orzecznictwo SN potwierdza, że nawet wspólnik posiadający 99 % udziałów w spółce dwuosobowej nie jest traktowany jak wspólnik jednoosobowej — **przy 50/50 sprawa jest tym bardziej czysta**, ale sygnaturę należy ustalić przez SAOS, patrz skill `saos-sygnatura`]

**→ Konsekwencja projektowa: nie schodźcie do układu 99/1 ani 100/0.** Poza ryzykiem korporacyjnym przy 50/50 (paraliż), układ jednoosobowy generuje pełne składki ZUS wspólnika. Wasze 50/50 jest w tym aspekcie optymalne — nie „naprawiajcie" go przesunięciem udziałów.

### 8.2. Skąd wtedy tytuł do ubezpieczeń i skąd pieniądze dla wspólników

Trzy główne ścieżki, każda z innym skutkiem ZUS/podatkowym — pełna analiza w [05-wynagrodzenia-i-swiadczenia](05-wynagrodzenia-i-swiadczenia.md):

| Ścieżka | Podstawa | ZUS |
|---|---|---|
| **Powtarzające się świadczenia niepieniężne** (art. 176 KSH) | Klauzula w umowie spółki; „Wynagrodzenie […] jest wypłacane przez spółkę **także w przypadku, gdy sprawozdanie finansowe nie wykazuje zysku**. Wynagrodzenie to nie może przewyższać cen lub stawek przyjętych w obrocie." ✅ [VER: ELI DU/2024/18, 2026-07-21] | Konstrukcja historycznie używana jako bezskładkowa; ⚠️ [WYMAGA WERYFIKACJI — stan prawny i praktyka ZUS/KAS na dzień czynności; obszar sporny i obserwowany] |
| **Umowa o pracę / kontrakt** | Wymaga reprezentacji spółki zgodnie z art. 210 KSH — inaczej **nieważność** | Pełne składki (umowa o pracę) |
| **Dywidenda** | Uchwała ZW | Brak składek; podatek od dywidendy ⚠️ [WYMAGA WERYFIKACJI] |

**Kruczek z art. 210 KSH:** umowa między spółką a członkiem zarządu wymaga reprezentacji spółki przez radę nadzorczą albo pełnomocnika powołanego uchwałą zgromadzenia wspólników. Zaniedbanie = nieważność umowy, a w konsekwencji zakwestionowanie kosztów i składek. Patrz [04](04-zarzad-i-organy.md).

**Uwaga przy 50/50 i obu wspólnikach w zarządzie:** jeśli obaj jesteście jednocześnie wspólnikami i członkami zarządu, każda umowa Was ze spółką potrzebuje pełnomocnika z uchwały ZW. Powołajcie go **jedną uchwałą przy zakładaniu**, na wszystkie takie czynności.

### 8.3. Jako pracodawca

- Zgłoszenie płatnika — powstaje automatycznie z NIP-8 (FAZA 4.1)
- Zgłoszenie każdej osoby: ZUS ZUA (pełne ubezpieczenia) / ZUS ZZA (tylko zdrowotne) — **7 dni** od powstania obowiązku ⚠️ [WYMAGA WERYFIKACJI — art. 36 ust. 4 u.s.u.s.]
- Profil na PUE/eZUS — konieczny operacyjnie
- Deklaracje miesięczne DRA + RCA

---

## FAZA 9 — Lokal: trzy organy

### 9.1. Starostwo / urząd miasta na prawach powiatu — zmiana sposobu użytkowania

Jeśli lokal jest mieszkalny albo miał inne przeznaczenie niż usługi/ochrona zdrowia — **zgłoszenie zmiany sposobu użytkowania (formularz PB-18)** przed rozpoczęciem użytkowania w nowy sposób. Organ ma **30 dni** na sprzeciw; po tym terminie i bez sprzeciwu można użytkować. Zgłoszenie bez opłaty.

Wymagane zwykle: PB-18, oświadczenie o prawie do dysponowania nieruchomością (PB-5), opis i rysunek usytuowania, opis techniczny, **zaświadczenie o zgodności z miejscowym planem zagospodarowania** (albo decyzja o warunkach zabudowy przy braku planu).

⚠️ [NIEWERYFIKOWANE — egress; źródło: biznes.gov.pl, budowlaneabc.gov.pl, gunb.gov.pl; sprawdź: art. 71 ust. 2 w zw. z ust. 2b i art. 71 ust. 4 Prawa budowlanego]

**→ Kruczek terminowy:** te 30 dni biegną **równolegle** do rejestracji KRS, ale **muszą się zakończyć przed** wnioskiem do RPWDL. Wpiszcie to w harmonogram jako pozycję krytyczną. Uruchamiajcie zgłoszenie budowlane **w dniu podpisania umowy najmu**, nie po KRS.

**Drugi kruczek — zgoda właściciela i wspólnoty:** przy lokalu w budynku wielorodzinnym sprawdźcie regulamin wspólnoty/uchwały. Gabinet z ruchem pacjentów bywa kwestionowany przez sąsiadów. Do tego umowa najmu musi wyraźnie dopuszczać działalność leczniczą pod tym adresem — inaczej po wpisie do RPWDL adres będzie publiczny i niezgodny z umową.

### 9.2. Powiatowa Stacja Sanitarno-Epidemiologiczna (PSSE / sanepid)

**Czynność:** wniosek o **opinię sanitarną** o lokalu dla podmiotu wykonującego działalność leczniczą.

Podstawa merytoryczna wymagań — art. 22 u.dz.l.:

> „1. Pomieszczenia i urządzenia podmiotu wykonującego działalność leczniczą odpowiadają wymaganiom odpowiednim do rodzaju wykonywanej działalności leczniczej oraz zakresu udzielanych świadczeń zdrowotnych. 2. Wymagania, o których mowa w ust. 1, dotyczą w szczególności warunków: 1) **ogólnoprzestrzennych**; 2) **sanitarnych**; 3) **instalacyjnych**."

✅ [VER: api.sejm.gov.pl ELI DU/2026/156, 2026-07-21]

Szczegóły są w rozporządzeniu MZ wydanym na podstawie art. 22 ust. 3 u.dz.l.: rozporządzenie MZ z 26.03.2019 w sprawie szczegółowych wymagań, jakim powinny odpowiadać pomieszczenia i urządzenia podmiotu wykonującego działalność leczniczą (t.j. ogłoszony obwieszczeniem MZ z 17.01.2022, Dz.U. 2022 poz. 402). ⚠️ [NIEWERYFIKOWANE — egress; źródło: isap.sejm.gov.pl (DocDetails WDU20190000595, WDU20220000402); sprawdź treść: wymagania dla gabinetu w ramach ambulatoryjnych świadczeń — powierzchnia, wysokość, wentylacja, oświetlenie, umywalka, pomieszczenie higieniczno-sanitarne, poczekalnia, dostępność dla osób z niepełnosprawnościami]

Do wniosku typowo: rysunki techniczne, dane o powierzchni, wysokości, wentylacji, oświetleniu, wodzie i kanalizacji, wykaz wyposażenia. Opłata za czynności nadzoru zapobiegawczego. ⚠️ [NIEWERYFIKOWANE — egress; źródło: gov.pl/web/psse-*; sprawdź: ustawa o Państwowej Inspekcji Sanitarnej — podstawa opłat]

**→ Kruczek:** formalnie u.dz.l. **nie wymaga załączenia opinii sanepidu do wniosku RPWDL** — wojewoda opiera się na Waszym oświadczeniu z art. 100 ust. 2. Ale to oświadczenie jest składane pod rygorem art. 233 § 6 KK. Opinia sanepidu jest więc **dowodem, że oświadczenie było prawdziwe**. Nie pomijajcie jej — to Wasza polisa na wypadek kontroli.

### 9.3. Ochrona przeciwpożarowa i BHP lokalu

Wymogi ppoż. (oznakowanie dróg ewakuacyjnych, gaśnica, w określonych przypadkach instrukcja bezpieczeństwa pożarowego) oraz BHP dla pomieszczeń pracy. ⚠️ [WYMAGA WERYFIKACJI — rozporządzenie MSWiA o ochronie przeciwpożarowej budynków; rozporządzenie MPiPS o ogólnych przepisach BHP; dla małego gabinetu zwykle bez instrukcji bezpieczeństwa pożarowego, ale z gaśnicą i oznakowaniem]

---

## FAZA 10 — Ubezpieczyciel: OC obowiązkowe

**To warunek ustawowy prowadzenia działalności, nie opcja.**

> „Podmiot leczniczy jest obowiązany spełniać następujące warunki: […] 4) zawrzeć w zakresie określonym w art. 25 ust. 1 umowę ubezpieczenia: a) odpowiedzialności cywilnej." (art. 17 ust. 1 pkt 4 u.dz.l.)

> „1. Umowa ubezpieczenia: 1) odpowiedzialności cywilnej obejmuje szkody będące następstwem udzielania świadczeń zdrowotnych albo niezgodnego z prawem zaniechania udzielania świadczeń zdrowotnych. […] 2. **Obowiązek ubezpieczenia powstaje najpóźniej w dniu poprzedzającym dzień rozpoczęcia wykonywania działalności leczniczej.**" (art. 25 u.dz.l.)

✅ [VER: api.sejm.gov.pl ELI DU/2026/156, 2026-07-21]

**Minimalna suma gwarancyjna** — w rozporządzeniu MF wydanym na podstawie art. 25 ust. 5 u.dz.l.: rozporządzenie MF z 29.04.2019 w sprawie obowiązkowego ubezpieczenia OC podmiotu wykonującego działalność leczniczą (Dz.U. 2019 poz. 866), zmieniane 4.09.2023 (Dz.U. 2023 poz. 1930). Dla działalności ambulatoryjnej wskazywane są kwoty **75 000 EUR na jedno zdarzenie i 350 000 EUR na wszystkie zdarzenia**. ⚠️ [NIEWERYFIKOWANE — egress; źródło: isap.sejm.gov.pl (WDU20190000866, WDU20230001930), rf.gov.pl; sprawdź § określający sumy dla podmiotu leczniczego wykonującego działalność ambulatoryjną oraz kurs EUR przyjmowany do przeliczenia]

**Trzy kruczki:**

1. **Polisa musi obowiązywać od dnia rozpoczęcia działalności**, a nie od dnia wniosku do RPWDL. Data początku ochrony ≠ data wpisu.
2. Wniosek o zmianę wpisu w RPWDL dotyczący **wyłącznie** przedstawienia dokumentu ubezpieczenia jest **wolny od opłat** — art. 105 ust. 2a u.dz.l. ✅ [VER: ELI DU/2026/156, 2026-07-21]. Czyli coroczne dosyłanie nowej polisy nic nie kosztuje.
3. **OC obowiązkowe nie wystarcza biznesowo.** Rozważcie dodatkowo: OC dobrowolne z wyższą sumą, ochronę prawną (koszty obrony w postępowaniu karnym/dyscyplinarnym/przed RPP), a od 19.05.2028 — rozszerzenie o odpowiedzialność dyscyplinarną przed samorządem psychologów, patrz [10](10-psycholog-2026-2028.md).

---

## FAZA 11 — Dokumenty wewnętrzne, które muszą istnieć PRZED wnioskiem do RPWDL

Nie ma tu urzędu, ale bez tych dokumentów oświadczenie z art. 100 ust. 2 u.dz.l. jest nieprawdziwe.

### 11.1. Regulamin organizacyjny (art. 24 u.dz.l.)

Ustalany przez kierownika, a **kierownikiem w spółce kapitałowej jest zarząd** — art. 2 ust. 2 pkt 1 u.dz.l. ✅ [VER: ELI DU/2026/156, 2026-07-21]. Podstawa: art. 23 ust. 1 u.dz.l. („Sprawy dotyczące sposobu i warunków udzielania świadczeń zdrowotnych […] nieuregulowane w ustawie lub statucie, określa regulamin organizacyjny ustalony przez kierownika") ✅ [VER: ELI DU/2026/156, 2026-07-21].

Obligatoryjna treść — art. 24 ust. 1 u.dz.l., cytat dosłowny w częściach istotnych dla gabinetu:

> „1) firmę albo nazwę podmiotu; 2) cele i zadania podmiotu; 3) strukturę organizacyjną zakładu leczniczego; 4) rodzaj działalności leczniczej oraz zakres udzielanych świadczeń zdrowotnych; 5) miejsce udzielania świadczeń zdrowotnych – **w przypadku udzielania świadczeń zdrowotnych za pośrednictwem systemów teleinformatycznych lub systemów łączności, miejscem udzielania świadczeń jest miejsce przebywania osób wykonujących zawód medyczny udzielających tych świadczeń**; 6) przebieg procesu udzielania świadczeń zdrowotnych, z zapewnieniem właściwej dostępności i jakości tych świadczeń […]; 7) organizację i zadania poszczególnych jednostek lub komórek organizacyjnych zakładu leczniczego […]; 8) warunki współdziałania z innymi podmiotami wykonującymi działalność leczniczą […]; 9) **wysokość opłaty za udostępnienie dokumentacji medycznej** ustalonej w sposób określony w art. 28 ust. 4 ustawy […] o prawach pacjenta i Rzeczniku Praw Pacjenta; 10) organizację procesu udzielania świadczeń zdrowotnych w przypadku pobierania opłat; […] 12) **wysokość opłat za świadczenia zdrowotne**, które mogą być, zgodnie z przepisami ustawy lub przepisami odrębnymi, udzielane za częściową albo całkowitą odpłatnością; 13) sposób kierowania jednostkami lub komórkami organizacyjnymi zakładu leczniczego"

✅ [VER: api.sejm.gov.pl ELI DU/2026/156, 2026-07-21]

**→ Cennik świadczeń jest częścią regulaminu** (pkt 12), a osobno — opłata za udostępnienie dokumentacji (pkt 9). Nie zostawiajcie żadnej z tych pozycji pustej.

**→ Punkt 11 (opłata za przechowywanie zwłok) i pozycje szpitalne** — dla gabinetu psychologicznego bezprzedmiotowe; nie trzeba ich wypełniać treścią, ale świadomie odnotujcie „nie dotyczy", żeby przy kontroli nie wyglądało to na przeoczenie.

### 11.2. Informacja publiczna o świadczeniach — z zakazem reklamy

> „1. Podmiot wykonujący działalność leczniczą podaje do wiadomości publicznej informacje o zakresie i rodzajach udzielanych świadczeń zdrowotnych. **Treść i forma tych informacji nie mogą mieć cech reklamy.**" (art. 14 ust. 1 u.dz.l.)

✅ [VER: api.sejm.gov.pl ELI DU/2026/156, 2026-07-21]

**→ To realne ograniczenie marketingowe.** Strona www i profile społecznościowe gabinetu muszą informować, nie reklamować. „Najlepszy psycholog w mieście", promocje typu „pierwsza sesja -50 %", opinie pacjentów użyte marketingowo — obszar ryzyka. Art. 14 ust. 2 nakłada nadto obowiązek udzielenia na wniosek pacjenta informacji o metodach, o **zawartych umowach ubezpieczenia** oraz o danych z wpisu do rejestru. ✅ [VER: ELI DU/2026/156, 2026-07-21]

### 11.3. Dokumentacja RODO i medyczna

Obowiązek prowadzenia dokumentacji ciąży na **podmiocie** (spółce), nie na psychologu jako osobie:

> „W celu realizacji prawa, o którym mowa w art. 23 ust. 1, **podmiot udzielający świadczeń zdrowotnych jest obowiązany prowadzić, przechowywać i udostępniać dokumentację medyczną** w sposób określony w niniejszym rozdziale oraz w ustawie z dnia 28 kwietnia 2011 r. o systemie informacji w ochronie zdrowia, a także zapewnić ochronę danych zawartych w tej dokumentacji." (art. 24 ust. 1 u.p.p.)

> „Do przetwarzania danych zawartych w dokumentacji medycznej […] są uprawnione: 1) osoby wykonujące zawód medyczny; 2) inne osoby wykonujące czynności pomocnicze przy udzielaniu świadczeń zdrowotnych […] **na podstawie upoważnienia administratora danych**." (art. 24 ust. 2 u.p.p.)

**Okres przechowywania:** „przez okres **20 lat**, licząc od końca roku kalendarzowego, w którym dokonano ostatniego wpisu" — z wyjątkami z art. 29 ust. 1 u.p.p.

✅ [VER: api.sejm.gov.pl ELI DU/2024/581, 2026-07-21] — dla trzech powyższych

Pełna lista dokumentów RODO do przygotowania (klauzule informacyjne, rejestr czynności, DPA z każdym procesorem, procedura naruszeń 72 h, upoważnienia pisemne, polityka retencji): [08-rodo-i-dokumentacja](08-rodo-i-dokumentacja.md).

**→ Recepcjonistka bez upoważnienia pisemnego = naruszenie art. 24 ust. 2 pkt 2 u.p.p.** Ustne upoważnienie nie wystarcza.

### 11.4. Standardy ochrony małoletnich — jeśli przyjmujecie dzieci

Podmioty wykonujące działalność leczniczą, do których uczęszczają małoletni, mają obowiązek wprowadzenia **standardów ochrony małoletnich**. ⚠️ [NIEWERYFIKOWANE — egress; źródło: gov.pl/web/sprawiedliwosc, NFZ (wzór standardów dla podmiotów leczniczych); sprawdź: ustawa o przeciwdziałaniu zagrożeniom przestępczością na tle seksualnym i ochronie małoletnich, t.j. Dz.U. 2024 poz. 560, wraz z nowelizacją z 5.08.2025 — zakres podmiotowy, obligatoryjna treść standardów, termin wdrożenia, sankcje]

Powiązany obowiązek kadrowy — patrz FAZA 16.1.

---

## FAZA 12 — Wojewoda: wpis do RPWDL

**Organ:** wojewoda właściwy dla siedziby spółki.

> „Organem prowadzącym rejestr jest: 1) **wojewoda właściwy dla siedziby albo miejsca zamieszkania podmiotu leczniczego** – w odniesieniu do podmiotów leczniczych, 2) okręgowa rada lekarska […], 3) okręgowa rada pielęgniarek i położnych […], 4) Krajowa Rada Fizjoterapeutów […], 5) Krajowa Rada Diagnostów Laboratoryjnych […]" (art. 106 ust. 1 u.dz.l.)

> „1a. Rejestr jest jawny. 2. Rejestr prowadzi się w systemie teleinformatycznym."

✅ [VER: api.sejm.gov.pl ELI DU/2026/156, 2026-07-21]

Rejestr online: `rpwdl.ezdrowie.gov.pl` ⚠️ [WYMAGA WERYFIKACJI — aktualny adres portalu]

### 12.1. Treść wniosku (art. 100 ust. 1 u.dz.l. — cytat dosłowny)

> „1) imię i nazwisko, nazwę albo firmę; 2) adres siedziby albo miejsca zamieszkania; 3) adres miejsca udzielania świadczeń zdrowotnych albo miejsca przyjmowania wezwań i przechowywania dokumentacji medycznej – w przypadku wykonywania działalności leczniczej wyłącznie w miejscu wezwania; 4) formę organizacyjno-prawną; 5) **rodzaj działalności leczniczej oraz zakres udzielanych świadczeń zdrowotnych**; 6) **nazwę zakładu leczniczego oraz wykaz jego jednostek lub komórek organizacyjnych**, których działalność jest związana z udzielaniem świadczeń zdrowotnych; 7) (uchylony) 8) numer REGON; 9) Numer Identyfikacji Podatkowej (NIP); 10) dane podmiotu tworzącego – w przypadku podmiotu leczniczego niebędącego przedsiębiorcą."

✅ [VER: api.sejm.gov.pl ELI DU/2026/156, 2026-07-21]

**Rodzaj działalności** dla gabinetu: ambulatoryjne świadczenia zdrowotne — art. 8 pkt 2 u.dz.l. ✅ [VER: ELI DU/2026/156, 2026-07-21]

### 12.2. Oświadczenie pod rygorem odpowiedzialności karnej (art. 100 ust. 2)

> „Wraz z wnioskiem wnioskodawca składa oświadczenie następującej treści: »Świadomy odpowiedzialności karnej za złożenie fałszywego oświadczenia wynikającej z art. 233 § 6 ustawy z dnia 6 czerwca 1997 r. – Kodeks karny oświadczam, że: 1) dane zawarte we wniosku o wpis do rejestru podmiotów wykonujących działalność leczniczą są kompletne i zgodne z prawdą; 2) **znane mi są i spełniam warunki wykonywania działalności leczniczej w zakresie objętym składanym wnioskiem** określone w ustawie z dnia 15 kwietnia 2011 r. o działalności leczniczej; 3) nie prowadzę hurtowni farmaceutycznej […] ani punktu aptecznego […]; 4) nie zajmuję się pośrednictwem w obrocie produktami leczniczymi […]«"

Ust. 3 dodaje wymóg wskazania danych wnioskodawcy, miejsca i daty oraz **podpisu osoby uprawnionej do reprezentowania ze wskazaniem pełnionej funkcji**.

✅ [VER: api.sejm.gov.pl ELI DU/2026/156, 2026-07-21]

**→ Rozłożenie punktu 2 na konkrety.** Podpisując, oświadczacie że **już teraz**:
- macie pomieszczenia zgodne z art. 22 (→ FAZA 9.2)
- używacie i utrzymujecie wyroby medyczne zgodnie z ustawą o wyrobach medycznych (art. 17 ust. 1 pkt 2)
- świadczenia udzielają **wyłącznie osoby wykonujące zawód medyczny** (art. 17 ust. 1 pkt 3) → FAZA 16
- macie umowę OC (art. 17 ust. 1 pkt 4) → FAZA 10

✅ [VER: ELI DU/2026/156, 2026-07-21 — art. 17 ust. 1]

Podpis pod nieprawdziwym oświadczeniem to art. 233 § 6 KK. ⚠️ [WYMAGA WERYFIKACJI — aktualne brzmienie i sankcja art. 233 § 6 KK; KK nie jest w naszych 6 aktach lokalnych]

### 12.3. Opłata za wpis — art. 105 u.dz.l.

> „1. Wpis do rejestru podlega opłacie wynoszącej: 1) 2 % przeciętnego miesięcznego wynagrodzenia w sektorze przedsiębiorstw bez wypłat nagród z zysku za ubiegły rok, ogłaszanego, w drodze obwieszczenia, przez Prezesa Głównego Urzędu Statystycznego w Dzienniku Urzędowym Rzeczypospolitej Polskiej »Monitor Polski«, obowiązującego w dniu złożenia wniosku o wpis do rejestru – w przypadku lekarza, pielęgniarki, fizjoterapeuty lub diagnosty laboratoryjnego, 2) **10 % wynagrodzenia, o którym mowa w pkt 1 – w przypadku podmiotu leczniczego** – zaokrąglonej w górę do pełnego złotego.
> 2. **Zmiana wpisu w rejestrze podlega opłacie stanowiącej 50 % wysokości opłaty**, o której mowa w ust. 1.
> 2a. Wniosek o zmianę wpisu w rejestrze, który dotyczy wyłącznie przedstawienia dokumentu ubezpieczenia potwierdzającego zawarcie umowy ubezpieczenia, **jest wolny od opłat**.
> 3. Opłaty […] stanowią: 1) **dochód budżetu państwa** – w przypadku opłat pobieranych od podmiotów leczniczych […]"

✅ [VER: api.sejm.gov.pl ELI DU/2026/156, 2026-07-21]

**Wyliczenie kwoty:** jesteście podmiotem leczniczym → **10 %** przeciętnego wynagrodzenia w sektorze przedsiębiorstw **bez wypłat nagród z zysku za ubiegły rok**, obowiązującego w dniu złożenia wniosku.

Wskaźnik wg obwieszczeń GUS: przeciętne miesięczne wynagrodzenie w sektorze przedsiębiorstw bez wypłat nagród z zysku w IV kwartale 2025 r. — **9228,30 zł**. ⚠️ [NIEWERYFIKOWANE — egress; źródło: stat.gov.pl (obwieszczenia GUS); **UWAGA — art. 105 odwołuje się do wskaźnika „za ubiegły rok", nie kwartalnego. Musisz znaleźć właściwe obwieszczenie roczne w Monitorze Polskim, obowiązujące w dniu złożenia wniosku. Kwartalne dane podano tylko jako rząd wielkości.**]

Rząd wielkości opłaty: **ok. 900 zł** (10 % z ~9000 zł), zaokrąglone w górę do pełnego złotego. Zmiana wpisu — połowa tego, czyli ok. 450 zł. **Kwotę do przelewu ustalcie na dzień składania wniosku** — wskaźnik i tym samym opłata zmieniają się co roku.

### 12.4. Kiedy wolno zacząć — art. 103 i 104 u.dz.l.

> „Działalność leczniczą można rozpocząć **po uzyskaniu wpisu do rejestru**, z zastrzeżeniem art. 104." (art. 103)

> „1. Organ prowadzący rejestr dokonuje wpisu do rejestru **w terminie 30 dni** od dnia wpływu wniosku o wpis do rejestru wraz z oświadczeniem. 2. Jeżeli właściwy organ nie dokona wpisu w terminie, o którym mowa w ust. 1, a od dnia wpływu wniosku do tego organu **upłynęło 40 dni**, wnioskodawca może rozpocząć działalność **po uprzednim zawiadomieniu o tym na piśmie organu**, który nie dokonał wpisu. **Nie dotyczy to przypadku, gdy organ wezwał tego wnioskodawcę do uzupełnienia wniosku** o wpis nie później niż przed upływem 7 dni od dnia jego otrzymania. W takiej sytuacji termin, o którym mowa w zdaniu pierwszym, biegnie od dnia wpływu uzupełnienia wniosku o wpis. 3. Organ prowadzący rejestr **wydaje z urzędu zaświadczenie** o dokonaniu wpisu do rejestru." (art. 104)

✅ [VER: api.sejm.gov.pl ELI DU/2026/156, 2026-07-21]

**Mechanizm 30 + 40 dni, warunkowo:** 30 dni wiąże organ, ale sam ich upływ **nie** uprawnia do startu. Uprawnienie powstaje po **40** dniach i **tylko po pisemnym zawiadomieniu** organu. Wezwanie do uzupełnienia w pierwszych 7 dniach **resetuje** bieg terminu. Zaświadczenie o wpisie przychodzi z urzędu — nie trzeba o nie wnioskować. Szerzej: [07-rejestracja-rpwdl-i-krs](07-rejestracja-rpwdl-i-krs.md).

### 12.5. Aktualizacja wpisu — art. 107 u.dz.l. i realna kara

> „1. Podmiot wykonujący działalność leczniczą, wpisany do rejestru jest obowiązany zgłaszać organowi prowadzącemu rejestr **wszelkie zmiany danych objętych rejestrem w terminie 14 dni** od dnia ich powstania.
> 2. W przypadku niezgłoszenia zmiany danych objętych rejestrem w terminie […] organ prowadzący rejestr **może, w drodze decyzji administracyjnej, nałożyć na podmiot wykonujący działalność leczniczą karę pieniężną w wysokości do dziesięciokrotnego minimalnego wynagrodzenia za pracę** […]. Decyzji nadaje się **rygor natychmiastowej wykonalności**.
> […] 7. Karę pieniężną uiszcza się w terminie 14 dni od dnia doręczenia decyzji administracyjnej."

✅ [VER: api.sejm.gov.pl ELI DU/2026/156, 2026-07-21]

**→ To domyka lukę oznaczoną wcześniej jako „⚠️ WERYFIKACJA terminu" w [12](12-checklist-i-kruczki.md): termin to 14 dni, a sankcja to do 10-krotności minimalnego wynagrodzenia, z rygorem natychmiastowej wykonalności.** Organem wyższego stopnia jest minister zdrowia (ust. 6).

Zakres danych podlegających wpisowi — art. 106 ust. 3 u.dz.l. (m.in. oznaczenie podmiotu, adres, NIP, adres miejsca udzielania świadczeń, forma organizacyjno-prawna, rodzaj działalności i zakres świadczeń, dane struktury organizacyjnej zakładu leczniczego). ✅ [VER: ELI DU/2026/156, 2026-07-21]

**Praktycznie zgłaszacie w 14 dni:** zmianę adresu gabinetu, dodanie drugiej lokalizacji, zmianę zakresu świadczeń, zmianę firmy spółki, zmianę nazwy zakładu leczniczego, zmiany w strukturze komórek organizacyjnych.

---

## FAZA 13 — Centrum e-Zdrowia: system P1, EDM i zdarzenia medyczne

Obowiązek wynika z ustawy o systemie informacji w ochronie zdrowia, do której odsyła art. 24 ust. 1 u.p.p. ✅ [VER: ELI DU/2024/581, 2026-07-21 — samo odesłanie].

Zakres obowiązków usługodawcy:
- **prowadzenie elektronicznej dokumentacji medycznej (EDM)** w zdefiniowanym katalogu dokumentów, podpisanej podpisem elektronicznym
- **podłączenie systemu gabinetowego do Systemu P1** i zapewnienie możliwości wymiany EDM przez SIM (obowiązek od 1.07.2021)
- **raportowanie zdarzeń medycznych do P1** — w terminie do **2 dni** od zakończenia zdarzenia (np. wizyty ambulatoryjnej)
- EDM przechowuje podmiot w swoim repozytorium; do P1 idą **indeksy** EDM

⚠️ [NIEWERYFIKOWANE — egress; źródło: ezdrowie.gov.pl, cez.gov.pl; sprawdź: ustawa z 28.04.2011 o systemie informacji w ochronie zdrowia — zakres podmiotowy obowiązku, katalog dokumentów EDM, terminy raportowania ZM; oraz rozporządzenie MZ o rodzajach EDM]

**→ To pozycja najczęściej pomijana przy zakładaniu małych gabinetów, a niesie realne konsekwencje.** Praktyczne wnioski:

1. **Wybór oprogramowania gabinetowego przestaje być kwestią wygody.** Musi obsługiwać EDM, podpis elektroniczny, integrację z P1 i raportowanie zdarzeń medycznych. Zweryfikujcie to u dostawcy **przed** podpisaniem umowy, na piśmie.
2. Potrzebujecie **certyfikatów** do komunikacji z P1 (wnioskowanie przez RPWDL/CeZ) — czyli ta faza wymaga wcześniejszego wpisu do RPWDL.
3. Potrzebujecie **podpisu elektronicznego** dla każdej osoby wystawiającej dokumentację: kwalifikowany, Profil Zaufany albo certyfikat ZUS.
4. Umowa z dostawcą oprogramowania to **umowa powierzenia przetwarzania (DPA)** — dane szczególnej kategorii, art. 9 RODO.
5. ⚠️ Do ustalenia odrębnie: **w jakim zakresie katalog EDM obejmuje dokumentację psychologiczną** — katalog był budowany wokół świadczeń lekarskich. To pytanie warto zadać wprost CeZ i mieć odpowiedź na piśmie.

---

## FAZA 14 — UODO (Prezes Urzędu Ochrony Danych Osobowych)

**Nie ma rejestracji zbiorów danych.** Jest natomiast obowiązek zawiadomienia, jeśli wyznaczycie **inspektora ochrony danych (IOD)**:

- zawiadomienie **w 14 dni** od wyznaczenia / odwołania / zmiany danych IOD
- **wyłącznie w postaci elektronicznej** — inna forma jest bezskuteczna

⚠️ [NIEWERYFIKOWANE — egress; źródło: uodo.gov.pl, biznes.gov.pl; sprawdź: art. 10 ust. 1 i ust. 6 ustawy z 10.05.2018 o ochronie danych osobowych; art. 37 ust. 7 RODO]

**Czy MUSICIE mieć IOD?** Kryterium z art. 37 ust. 1 lit. c RODO — przetwarzanie na dużą skalę szczególnych kategorii danych. Dwuosobowy gabinet zwykle nie jest „dużą skalą", ale:

- dane o zdrowiu psychicznym to najwrażliwsza kategoria, a organ ocenia całokształt
- **wyznaczenie i zawiadomienie to dwa różne obowiązki** — wyznaczenie bez zawiadomienia jest naruszeniem
- jeśli nie wyznaczacie IOD, **udokumentujcie analizę**, z której to wynika. Brak IOD bez uzasadnienia jest gorszy niż brak IOD z uzasadnieniem

Reszta obowiązków RODO nie wymaga kontaktu z UODO na starcie, ale musi istnieć od pierwszego pacjenta — szczegóły w [08](08-rodo-i-dokumentacja.md). Zgłoszenie naruszenia (72 h) to osobna ścieżka do UODO, uruchamiana zdarzeniowo.

---

## FAZA 15 — BDO (Baza danych o odpadach), marszałek województwa

**Kiedy dotyczy:** jeśli w działalności powstają **odpady medyczne** (odpady niebezpieczne). Wtedy wpis do rejestru BDO jest konieczny **przed rozpoczęciem działalności**; marszałek ma 30 dni na wpis. Bez wpisu **nie wystawicie karty przekazania odpadów (KPO)** — a papierowej już nie ma, więc odbiorca odpadów Was nie obsłuży.

⚠️ [NIEWERYFIKOWANE — egress; źródło: bdo.mos.gov.pl, biznes.gov.pl; sprawdź: ustawa o odpadach — obowiązek wpisu do rejestru, ewidencja, KPO, sprawozdawczość roczna; rozporządzenie MKiŚ w sprawie katalogu odpadów — kody 18 01 …]

**Ocena dla gabinetu psychologicznego:** czysta psychoterapia i diagnoza **zwykle nie generują odpadów medycznych** — nie ma zabiegów, opatrunków, igieł. Odpady są komunalne. Wtedy BDO **nie dotyczy**.

**Ale sprawdźcie trzy rzeczy, zanim uznacie, że nie dotyczy:**
1. Czy w gabinecie będą jakiekolwiek czynności generujące odpady o kodzie 18 01 (np. testy przesiewowe, cokolwiek z materiałem biologicznym)
2. Czy nie wprowadzacie produktów w opakowaniach albo nie generujecie innych odpadów objętych rejestrem (np. zużyty sprzęt elektroniczny w większej skali)
3. Czy **niszczenie dokumentacji medycznej** po okresie retencji nie wymaga umowy z podmiotem prowadzącym ewidencję odpadów — tu praktyczniej zlecić profesjonalne niszczenie z protokołem (który jest też dowodem RODO)

**Ostrożna rekomendacja:** zamiast rozstrzygać samodzielnie, zapytajcie właściwego urzędu marszałkowskiego o kwalifikację dla Waszego zakresu świadczeń, na piśmie. Rejestracja „na zapas" też ma koszt — obowiązki ewidencyjne i sprawozdawcze.

---

## FAZA 16 — Kadry: zatrudnienie psychologów i personelu

### 16.1. Weryfikacja przed dopuszczeniem do pracy z małoletnimi

Jeśli gabinet przyjmuje dzieci, przed nawiązaniem stosunku pracy / dopuszczeniem osoby do działalności związanej m.in. z **leczeniem małoletnich** trzeba:

- uzyskać informację, czy dane osoby są w **Rejestrze Sprawców Przestępstw na Tle Seksualnym** (Rejestr z dostępem ograniczonym) oraz w rejestrze osób, wobec których Państwowa Komisja wydała postanowienie o wpisie
- uzyskać od tej osoby **informację z Krajowego Rejestru Karnego** w zakresie przestępstw przeciwko życiu i zdrowiu, przeciwko wolności seksualnej i obyczajności, art. 189a KK (handel ludźmi), art. 207 KK (znęcanie się) oraz z ustawy o przeciwdziałaniu narkomanii

⚠️ [NIEWERYFIKOWANE — egress; źródło: gov.pl/web/sprawiedliwosc, samorzad.gov.pl; sprawdź: ustawa o przeciwdziałaniu zagrożeniom przestępczością na tle seksualnym i ochronie małoletnich, t.j. Dz.U. 2024 poz. 560 + nowelizacja z 5.08.2025 — **zakres, forma dokumentowania, sankcja za zaniechanie (jest to wykroczenie/przestępstwo — ustal dokładnie), obowiązek przechowywania pobranych informacji**]

**→ To dotyczy również Was jako wspólników-psychologów**, jeśli sami będziecie przyjmować dzieci — nie tylko zatrudnianego personelu. I dotyczy recepcjonisty, jeśli ma kontakt z małoletnimi.

**→ Dokumentujcie weryfikację w aktach osobowych.** Sam fakt sprawdzenia trzeba móc wykazać.

### 16.2. Prawo do wykonywania zawodu psychologa — stan na dziś vs 2028

**Do 19.05.2028** obowiązuje ustawa z 2001 r. Formalnie:

> „Prawo wykonywania zawodu psychologa powstaje z chwilą dokonania wpisu na listę psychologów Regionalnej Izby Psychologów." (art. 7 u.psy 2001)

> „Na listę psychologów wpisuje się osobę, która łącznie spełnia następujące warunki: 1) uzyskała w polskiej uczelni **dyplom magistra psychologii** lub uzyskała za granicą wykształcenie uznane za równorzędne […]; 2) posiada pełną zdolność do czynności prawnych; 3) włada językiem polskim […]; 4) **odbyła podyplomowy staż zawodowy**, pod merytorycznym nadzorem psychologa posiadającego prawo wykonywania zawodu […]" (art. 8 ust. 1 u.psy 2001)

✅ [VER: api.sejm.gov.pl ELI DU/2019/1026, 2026-07-21]

**Ale samorząd z ustawy 2001 nigdy nie zaczął działać** — nie ma czynnych Regionalnych Izb Psychologów, które dokonywałyby wpisu. Praktyczna konsekwencja: **do 19.05.2028 psycholog wykonuje zawód na podstawie dyplomu magistra psychologii**; nie istnieje dokument „prawo wykonywania zawodu" do okazania. Analiza: [10-psycholog-2026-2028](10-psycholog-2026-2028.md).

**→ Co to znaczy dla dokumentacji kadrowej spółki:** przy wniosku do RPWDL oświadczacie, że świadczenia udzielają osoby wykonujące zawód medyczny (art. 17 ust. 1 pkt 3 u.dz.l.). Dowodem jest **dyplom magistra psychologii** — zbierzcie kopie do akt, dla siebie i dla każdego zatrudnionego. To Wasz jedyny dowód spełnienia warunku.

**Od 19.05.2028** — prawo wykonywania zawodu z chwilą wpisu do **Rejestru Psychologów** prowadzonego przez regionalną radę psychologów (art. 5 u.psy 2026) ✅ [VER: ELI DU/2026/187, 2026-07-21]. Wtedy dochodzi nowa instytucja do tej mapy: **samorząd zawodowy psychologów** (regionalna rada + Krajowa Rada), z wpisem, składkami członkowskimi i odpowiedzialnością dyscyplinarną.

**→ Zadanie na teraz:** w umowach z psychologami (i w umowie spółki, co do wspólników) wpiszcie zobowiązanie do uzyskania i utrzymania wpisu do Rejestru Psychologów, ze skutkiem od 19.05.2028. Dopisanie tego później wymaga aneksów albo — dla umowy spółki — aktu notarialnego.

**Uwaga na art. 18 u.psy 2001** — przewiduje „prywatną praktykę psychologiczną" wykonywaną jako JDG albo spółka partnerska, po zezwoleniu marszałka województwa i wpisie do rejestru prowadzonego przez Radę Regionalnej Izby ✅ [VER: ELI DU/2019/1026, 2026-07-21]. **To ścieżka odrębna od naszej i dla sp. z o.o. niedostępna** (spółka z o.o. nie jest spółką partnerską), a przy niedziałającym samorządzie — martwa. Nie mieszajcie jej z rejestracją podmiotu leczniczego u wojewody. Jeśli ktoś Wam powie „psycholog musi mieć zezwolenie marszałka" — to jest właśnie ten przepis i Waszej konfiguracji nie dotyczy.

### 16.3. Medycyna pracy

Umowa z placówką medycyny pracy + badania wstępne przed dopuszczeniem do pracy każdego pracownika. ⚠️ [WYMAGA WERYFIKACJI — art. 229 Kodeksu pracy; zakres badań dla pracy przy monitorze i pracy z pacjentem]

**Dotyczy pracowników na umowie o pracę.** Wspólnicy pobierający wynagrodzenie z art. 176 KSH nie są pracownikami — ale sprawdźcie, czy nie ma innych podstaw.

### 16.4. BHP

Szkolenie wstępne BHP przed dopuszczeniem do pracy, szkolenia okresowe, ocena ryzyka zawodowego na stanowiskach, instrukcje. ⚠️ [WYMAGA WERYFIKACJI — art. 237³ i nast. Kodeksu pracy; rozporządzenie o szkoleniu w dziedzinie BHP]

**Specyfika psychologiczna:** ocena ryzyka zawodowego powinna objąć **ryzyko agresji ze strony pacjenta i obciążenie psychiczne / wypalenie**. To nie ozdoba — przy zdarzeniu z pacjentem brak takiej oceny obciąża pracodawcę.

**PIP** — nie ma rejestracji ani zgłoszenia na starcie; jest organem kontrolnym. ⚠️ [WYMAGA WERYFIKACJI — czy w Waszej konfiguracji powstaje obowiązek zawiadomienia PIP o rozpoczęciu działalności]

### 16.5. PPK (Pracownicze Plany Kapitałowe)

Jeśli zatrudniacie osoby (umowa o pracę, także zlecenie z tytułem do ubezpieczeń emerytalnych):

- **umowa o zarządzanie PPK** — nie później niż **10 dni roboczych przed** dniem, w którym powstaje obowiązek zawarcia umowy o prowadzenie PPK dla pierwszej osoby
- **umowa o prowadzenie PPK** — nie wcześniej niż po 14 dniach zatrudnienia i nie później niż do **10. dnia miesiąca następującego po miesiącu, w którym upłynęły 3 miesiące zatrudnienia**

⚠️ [NIEWERYFIKOWANE — egress; źródło: mojeppk.pl; sprawdź: art. 8, 14, 16 ustawy z 4.10.2018 o pracowniczych planach kapitałowych]

**→ Terminy liczy sobie sam pracodawca** — nikt Was nie zawiadomi. Wpiszcie datę zatrudnienia pierwszej osoby do kalendarza i policzcie oba terminy od razu.

---

## FAZA 17 — Księgowość, faktury, kasa fiskalna

### 17.1. Pełna księgowość — obowiązkowo

Spółka z o.o. prowadzi księgi rachunkowe od pierwszego dnia. Nie ma opcji uproszczonej. ⚠️ [WYMAGA WERYFIKACJI — art. 2 ust. 1 pkt 1 ustawy o rachunkowości]

**Wybór:** biuro rachunkowe z doświadczeniem w podmiotach leczniczych (istotne: zwolnienia VAT dla usług medycznych, ewidencja przy sprzedaży mieszanej). Umowa z biurem to **umowa powierzenia (DPA)** — biuro dostaje dane osobowe, choć nie dokumentację medyczną.

**Obowiązki roczne** — patrz kalendarz na końcu i [12](12-checklist-i-kruczki.md).

### 17.2. KSeF (Krajowy System e-Faktur) — dotyczy Was już teraz

Obowiązkowy KSeF: **od 1.02.2026** dla podatników o sprzedaży powyżej 200 mln zł w 2024 r., **od 1.04.2026 dla pozostałych przedsiębiorców**. Do końca 2026 r. najmniejsi mogą wystawiać faktury poza KSeF, jeżeli **łączna wartość sprzedaży z faktur nie przekracza 10 000 zł miesięcznie**; po przekroczeniu — KSeF obowiązkowo. Za błędy popełnione w 2026 r. nie mają być stosowane sankcje.

⚠️ [NIEWERYFIKOWANE — egress; źródło: ksef.podatki.gov.pl, gov.pl/web/finanse; sprawdź: art. 106ga i nast. ustawy o VAT oraz przepisy przejściowe — **dla spółki zakładanej w 2026 r. to pozycja krytyczna, potwierdź przed pierwszą fakturą**]

**→ Dla Was praktycznie:** spółka rejestrowana w 2026 r. wchodzi w reżim KSeF od startu (z zastrzeżeniem progu 10 000 zł/mies. do końca 2026 r.). Oprogramowanie do fakturowania musi obsługiwać KSeF. Uwzględnijcie to przy wyborze systemu gabinetowego — najlepiej jeden system: rejestracja wizyt + dokumentacja + faktury + KSeF.

**Uwaga:** zwolnienie z VAT **nie** oznacza automatycznie braku obowiązków fakturowych/KSeF w każdym zakresie — sprawdźcie zakres dla podatników zwolnionych.

### 17.3. Kasa fiskalna online

Przy sprzedaży dla osób fizycznych nieprowadzących działalności gospodarczej trzeba rozstrzygnąć, czy usługi psychologiczne są objęte **bezwzględnym obowiązkiem** ewidencji na kasie (a więc bez limitu 20 000 zł), czy korzystają ze zwolnienia.

⚠️ [NIEWERYFIKOWANE — egress; źródło: isap.sejm.gov.pl (WDU20240001902 — rozporządzenie MF z 17.12.2024 w sprawie zwolnień z obowiązku prowadzenia ewidencji przy zastosowaniu kas rejestrujących; WDU20260000420 — nowelizacja z 27.03.2026), podatki.gov.pl; **sprawdź: katalog wyłączeń ze zwolnień — pozycje dotyczące usług w zakresie opieki medycznej świadczonych przez lekarzy i lekarzy dentystów oraz to, czy obejmują psychologów. To rozstrzygnięcie zmienia kosztorys i wyposażenie gabinetu.**]

**Dlaczego to ważne:** jeśli obowiązek istnieje, potrzebujecie **kasy online** (nie starszego typu), fiskalizacji, zgłoszenia do US, przeglądów serwisowych. Jeśli nie — wystarczą faktury/rachunki. Rozstrzygnijcie **przed** zakupem sprzętu i przed pierwszym pacjentem, najlepiej wnioskiem o interpretację indywidualną.

### 17.4. Terminal płatniczy

Nie jest to obowiązek rejestracyjny, ale przy przyjmowaniu płatności bezgotówkowych sprawdźcie obowiązek zapewnienia płatności bezgotówkowej dla przedsiębiorców przyjmujących płatności od konsumentów. ⚠️ [WYMAGA WERYFIKACJI — Prawo przedsiębiorców, przepisy o zapewnieniu instrumentu płatniczego + integracja kasy z terminalem]

---

## FAZA 18 — NFZ (tylko jeśli chcecie świadczeń publicznych)

**Nie jest obowiązkowa.** Dla gabinetu prywatnego: pomijacie.

Jeśli chcecie kontraktu: postępowanie konkursowe/umowa z oddziałem wojewódzkim NFZ, wymogi kwalifikacyjne i sprzętowe z rozporządzeń koszykowych, sprawozdawczość. ⚠️ [WYMAGA WERYFIKACJI — ustawa o świadczeniach opieki zdrowotnej finansowanych ze środków publicznych, t.j. DU/2025/1461 — **ten akt mamy w `manifest.json`, ale nie jest skonwertowany do indeksu**; rozporządzenia o świadczeniach gwarantowanych z opieki psychiatrycznej i leczenia uzależnień]

Niezależnie od kontraktu: art. 14 ust. 3 u.dz.l. nakłada obowiązek przekazywania danych Krajowemu Punktowi Kontaktowemu ds. Transgranicznej Opieki Zdrowotnej lub oddziałowi NFZ **na ich wniosek**, w terminie 14 dni ✅ [VER: ELI DU/2026/156, 2026-07-21]. Czyli nawet gabinet w pełni prywatny może otrzymać takie żądanie.

---

## Pełna lista instytucji — tabela zbiorcza

Kolejność wykonania. „Blokuje" = bez tego nie ruszy następny krok.

| # | Instytucja / serwis | Czynność | Kiedy | Blokuje |
|---|---|---|---|---|
| 1 | **Notariusz** | Umowa spółki (akt notarialny) | Start | KRS |
| 2 | **Starostwo / UM — nadzór budowlany** | Zgłoszenie zmiany sposobu użytkowania (PB-18) | Równolegle od podpisania najmu; 30 dni na sprzeciw | RPWDL |
| 3 | **Sąd rejonowy — KRS (PRS)** | Wniosek o wpis spółki | Do 6 mies. od umowy (7 dni w S24) | Wszystko dalsze |
| 4 | **US / GUS (automat)** | NIP + REGON | Po wpisie KRS | NIP-8, bank, RPWDL |
| 5 | **Urząd Skarbowy** | NIP-8 (dane uzupełniające) | 7 dni od obowiązku składkowego | ZUS-płatnik |
| 6 | **Urząd Skarbowy** | VAT-R (lub świadome pozostanie przy zwolnieniu) | Przed pierwszą sprzedażą | Fakturowanie |
| 7 | **Urząd Skarbowy** | PCC-3 (tylko S24; przy notariuszu — on jest płatnikiem) | 14 dni od umowy | — |
| 8 | **CRBR (Min. Finansów)** | Zgłoszenie beneficjentów: obaj wspólnicy | **14 dni od wpisu KRS**; kara do 1 mln zł | — |
| 9 | **Min. Cyfryzacji — e-Doręczenia** | Adres do doręczeń elektronicznych (ADE) | Przy rejestracji KRS | Skuteczna korespondencja urzędowa |
| 10 | **Bank** | Rachunek spółki | Po KRS + NIP | NIP-8, biała lista |
| 11 | **ZUS** | Płatnik (automat z NIP-8); ZUA/ZZA dla osób | 7 dni od zatrudnienia | — |
| 12 | **PSSE (sanepid)** | Opinia sanitarna o lokalu | Przed wnioskiem RPWDL | Prawdziwość oświadczenia art. 100 ust. 2 |
| 13 | **Ubezpieczyciel** | OC obowiązkowe podmiotu leczniczego | Ochrona od dnia przed startem działalności | RPWDL (warunek art. 17) |
| 14 | **Wojewoda — RPWDL** | Wniosek o wpis + oświadczenie + opłata ~10 % przec. wynagrodzenia | Po KRS, po lokalu, po OC | **Rozpoczęcie działalności** |
| 15 | **Centrum e-Zdrowia — P1** | Certyfikaty, podłączenie systemu, EDM, raportowanie zdarzeń (2 dni) | Po RPWDL, przed pierwszym pacjentem | — |
| 16 | **UODO** | Zawiadomienie o IOD (jeśli wyznaczony) — 14 dni, elektronicznie | Po wyznaczeniu | — |
| 17 | **Marszałek województwa — BDO** | Wpis, jeśli powstają odpady medyczne | **Przed** rozpoczęciem działalności; 30 dni na wpis | Odbiór odpadów (KPO) |
| 18 | **KRK + Rejestr Sprawców (RSPTS)** | Weryfikacja każdej osoby dopuszczanej do pracy z małoletnimi | Przed dopuszczeniem | Legalne przyjmowanie dzieci |
| 19 | **Placówka medycyny pracy** | Umowa + badania wstępne | Przed dopuszczeniem pracownika | — |
| 20 | **Instytucja finansowa PPK** | Umowa o zarządzanie + o prowadzenie PPK | Terminy liczone od 1. zatrudnienia | — |
| 21 | **Biuro rachunkowe** | Umowa + DPA | Przed pierwszą operacją | — |
| 22 | **KSeF (Min. Finansów)** | Uprawnienia, integracja, wystawianie e-faktur | Wg progu; od 1.04.2026 zasadniczo | Fakturowanie |
| 23 | **Urząd Skarbowy — kasa fiskalna** | Fiskalizacja + zgłoszenie (jeśli obowiązek) | Przed pierwszą sprzedażą dla konsumenta | — |
| 24 | **KIS (interpretacje)** | Wniosek o interpretację: VAT + kasa | Zalecane przed startem | — |
| 25 | **NFZ** | Tylko przy kontrakcie | Opcjonalnie | — |
| 26 | **Samorząd psychologów** (regionalna rada / Krajowa Rada) | Wpis do Rejestru Psychologów, składki | **Od 19.05.2028** | Wykonywanie zawodu po 2028 |
| 27 | **CEIDG / ZUS / US — dla starych JDG** | Zawieszenie albo wykreślenie, VAT-Z, wyrejestrowanie | Wg wariantu z FAZY 0.2 | — |

---

## Opłaty — kosztorys startowy

| Pozycja | Kwota | Status |
|---|---|---|
| Taksa notarialna + VAT + wypisy | zależna od kapitału | ⚠️ WYMAGA WERYFIKACJI (rozp. MS o taksie) |
| PCC od umowy spółki | 0,5 % kapitału zakładowego | ⚠️ NIEWERYFIKOWANE (ustawa o PCC) |
| Wpis do KRS | 500 zł (PRS) / 250 zł (S24) | ⚠️ NIEWERYFIKOWANE (u.k.s.c.) |
| Ogłoszenie w MSiG | historycznie 100 zł — **obowiązek uchylony dla wniosków od 29.11.2025** | ⚠️ NIEWERYFIKOWANE — potwierdź, czy w ogóle płacicie |
| Kapitał zakładowy (nie opłata, ale wydatek) | min. 5000 zł; rekomendacja 10 000–50 000 zł | ✅ art. 154 § 1 KSH |
| **Wpis do RPWDL** | **10 % przec. wynagrodzenia w sektorze przedsiębiorstw bez nagród z zysku za ubiegły rok**, zaokrąglone w górę — rząd wielkości ~900 zł | ✅ art. 105 ust. 1 pkt 2 u.dz.l.; ⚠️ kwota wskaźnika do ustalenia na dzień wniosku |
| Zmiana wpisu w RPWDL | 50 % powyższej (~450 zł) | ✅ art. 105 ust. 2 u.dz.l. |
| Zmiana wpisu tylko o polisę OC | **0 zł** | ✅ art. 105 ust. 2a u.dz.l. |
| Opinia sanitarna PSSE | opłata za czynności nadzoru zapobiegawczego | ⚠️ NIEWERYFIKOWANE (ustawa o PIS) |
| Zgłoszenie zmiany sposobu użytkowania | bez opłaty (poza pełnomocnictwem) | ⚠️ NIEWERYFIKOWANE (Prawo budowlane) |
| CRBR | 0 zł | ⚠️ NIEWERYFIKOWANE |
| OC obowiązkowe (roczna składka) | wg sumy min. 75 000 / 350 000 EUR dla ambulatoryjnych | ⚠️ NIEWERYFIKOWANE (rozp. MF Dz.U. 2019/866) |
| Interpretacja indywidualna KIS | 40 zł od stanu faktycznego | ⚠️ WYMAGA WERYFIKACJI (art. 14f O.p.) |
| Podpisy elektroniczne | za osobę, rocznie | ⚠️ rynkowe |
| Oprogramowanie gabinetowe z EDM + P1 + KSeF | abonament miesięczny | rynkowe |
| Biuro rachunkowe (pełna księgowość) | miesięcznie | rynkowe |
| Kasa fiskalna online + fiskalizacja | jeśli obowiązek | ⚠️ zależne od FAZY 17.3 |

**Świadome pominięcie:** nie podaję widełek rynkowych dla notariusza, OC, księgowości i oprogramowania — te wymagają ofert, a wpisanie liczb „z pamięci" byłoby dokładnie tym, czego zabrania zasada naczelna projektu. Zbierzcie po 2–3 oferty na każdą pozycję.

---

## Zakupy i wyposażenie

### Wymuszone przepisami

| Pozycja | Podstawa / powód |
|---|---|
| Lokal spełniający art. 22 u.dz.l. + rozp. MZ (chyba że model wyłącznie zdalny — art. 22 ust. 3a) | ✅ art. 17 ust. 1 pkt 1, art. 22 u.dz.l. |
| **Zamykana szafa / sejf na dokumentację papierową** | ✅ art. 24 ust. 1 u.p.p. (obowiązek zapewnienia ochrony danych) + RODO art. 32 |
| **Oprogramowanie z EDM, podpisem elektronicznym i integracją z P1** | ⚠️ ustawa o systemie informacji w ochronie zdrowia (FAZA 13) |
| **Podpis elektroniczny** dla każdej osoby wystawiającej dokumentację | ⚠️ jw. |
| Komputer z szyfrowaniem dysku, MFA, kopie zapasowe | RODO art. 32 |
| **Niszczarka** (min. P-4 dla danych wrażliwych) lub umowa na niszczenie z protokołem | RODO art. 32 + retencja z art. 29 u.p.p. |
| **Polisa OC obowiązkowego** | ✅ art. 17 ust. 1 pkt 4, art. 25 u.dz.l. |
| Oznakowanie: informacja o zakresie świadczeń, cennik, dane podmiotu, prawa pacjenta | ✅ art. 14 ust. 1 u.dz.l., art. 24 ust. 1 pkt 12 u.dz.l., u.p.p. art. 11–12 |
| Gaśnica, oznakowanie ewakuacyjne | ⚠️ przepisy ppoż. |
| Apteczka pierwszej pomocy | ⚠️ przepisy BHP |
| Kasa fiskalna online | ⚠️ zależne od FAZY 17.3 |

### Funkcjonalnie konieczne dla gabinetu psychologicznego

| Pozycja | Uwaga |
|---|---|
| **Licencje na testy psychologiczne** | Kluczowa pozycja budżetowa. Narzędzia diagnostyczne są sprzedawane z ograniczeniem uprawnień (tylko psycholog z odpowiednim poziomem) i licencjonowane na osobę lub podmiot. Art. 19 u.psy 2001 przewiduje wprost listę „metod i narzędzi psychologicznych zastrzeżonych wyłącznie do stosowania przez psychologów" ✅ [VER: ELI DU/2019/1026, 2026-07-21] — choć przy niedziałającym samorządzie lista formalnie nie funkcjonuje. Kupujcie licencje na **spółkę**, nie na osobę, jeśli wydawca to dopuszcza — inaczej odejście wspólnika zabiera narzędzia. |
| Gabinet: dwa fotele, stolik, oświetlenie nierażące, wyciszenie | Wyciszenie to nie komfort — to warunek tajemnicy (art. 14 u.psy 2001, art. 13 u.p.p.) |
| Poczekalnia z rozdzieleniem pacjentów | Prywatność; przy dzieciach — miejsce dla opiekuna |
| Materiały do diagnozy dzieci (jeśli dotyczy) | + standardy ochrony małoletnich |
| Platforma do teleporad z DPA i szyfrowaniem | Zwykłe komunikatory konsumenckie bez DPA = naruszenie RODO art. 28 |
| Rejestracja wizyt / kalendarz | Najlepiej w tym samym systemie co dokumentacja — mniej procesorów, mniej DPA |
| Telefon służbowy, adres e-mail w domenie | Nie mieszać z prywatnymi — rozdzielenie administratorów |
| Strona www z polityką prywatności i klauzulami | Bez cech reklamy (art. 14 ust. 1 u.dz.l.) |
| Ubezpieczenie dobrowolne (nadwyżkowe, ochrona prawna) | Uzupełnienie OC obowiązkowego |
| Superwizja (koszt cykliczny) | Standard zawodowy; od 2028 dochodzi ustawiczny rozwój zawodowy — [10](10-psycholog-2026-2028.md) |

---

## Kalendarz obowiązków cyklicznych

| Termin | Obowiązek | Podstawa |
|---|---|---|
| **Do 2 dni** od zakończenia wizyty | Raportowanie zdarzenia medycznego do P1 | ⚠️ ustawa o SIOZ |
| **14 dni** od zmiany danych rejestrowych | Zgłoszenie do RPWDL; kara do 10× min. wynagrodzenia z rygorem natychmiastowej wykonalności | ✅ art. 107 ust. 1–2 u.dz.l. |
| **14 dni** od zmiany beneficjenta | Aktualizacja CRBR | ⚠️ ustawa AML |
| **7 dni** od zmiany w zarządzie / kapitale / siedzibie | Zgłoszenie do KRS | ⚠️ ustawa o KRS |
| **72 h** od wykrycia naruszenia danych | Zgłoszenie do UODO | RODO art. 33 |
| Rocznie, przed wygaśnięciem polisy | Odnowienie OC + dosłanie do RPWDL (**bezpłatnie**) | ✅ art. 25 u.dz.l., art. 105 ust. 2a |
| **Do 30.06** | Zwyczajne zgromadzenie wspólników za rok poprzedni | ✅ art. 231 § 1 KSH |
| Po zatwierdzeniu sprawozdania | Złożenie sprawozdania finansowego do KRS (RDF) | ⚠️ ustawa o rachunkowości |
| Rocznie | CIT-8 | ⚠️ ustawa o CIT — termin do weryfikacji |
| Miesięcznie | Zaliczki CIT, JPK_V7 (jeśli VAT), DRA/RCA do ZUS | ⚠️ |
| Rocznie (jeśli BDO) | Sprawozdanie o wytwarzanych odpadach | ⚠️ ustawa o odpadach |
| Cyklicznie | Szkolenia okresowe BHP, badania okresowe medycyny pracy, przeglądy kasy fiskalnej | ⚠️ |
| Na bieżąco | Wykaz udostępnień dokumentacji medycznej | ✅ art. 27 ust. 4 u.p.p. — patrz [08](08-rodo-i-dokumentacja.md) |
| **19.05.2028** | Wpis wszystkich psychologów do Rejestru Psychologów | ✅ art. 5 u.psy 2026 |

---

## Ścieżka krytyczna — co naprawdę wyznacza datę pierwszego pacjenta

Cztery rzeczy muszą być **gotowe jednocześnie**, zanim złożycie wniosek do RPWDL, bo wszystkie są objęte oświadczeniem z art. 100 ust. 2 pkt 2 u.dz.l.:

1. **KRS** — bo bez NIP i REGON wniosek jest niekompletny (art. 100 ust. 1 pkt 8–9)
2. **Lokal** — po 30 dniach od zgłoszenia budowlanego i po opinii sanepidu
3. **OC** — z ochroną od dnia poprzedzającego start (art. 25 ust. 2)
4. **Kadra z dyplomami** — art. 17 ust. 1 pkt 3

Potem 30 dni dla wojewody (art. 104 ust. 1). **Realistycznie: 8–12 tygodni** od wizyty u notariusza, przy założeniu, że lokal jest już wynajęty i nie wymaga przebudowy. Wcześniejsza wersja rozdziału [07](07-rejestracja-rpwdl-i-krs.md) mówiła o 6–10 tygodniach — po dołożeniu 30-dniowego zgłoszenia budowlanego i podłączenia do P1 to raczej dolna granica niż realistyczny środek.

**Najczęstsza pomyłka w harmonogramie:** ludzie traktują zgłoszenie zmiany sposobu użytkowania i opinię sanepidu jako czynności „po KRS". Nie są. Uruchamiajcie je **w dniu podpisania umowy najmu**, równolegle do notariusza. Inaczej dokładacie miesiąc na końcu, kiedy już płacicie czynsz.

---

## Rejestr długu weryfikacyjnego

Pozycje do domknięcia przez ELI/ISAP, gdy sieć będzie dostępna. Kolejność wg ryzyka:

| Priorytet | Co sprawdzić | Dlaczego pilne |
|---|---|---|
| 1 | **CRBR: 7 czy 14 dni** — ustawa AML art. 60 | Kara do 1 mln zł; nasze pliki mają sprzeczność |
| 2 | **KSeF: reżim dla spółki startującej w 2026** — art. 106ga ustawy o VAT + przepisy przejściowe | Dotyczy pierwszej faktury |
| 3 | **Kasa fiskalna: czy psycholog w katalogu bezwzględnego obowiązku** — rozp. MF Dz.U. 2024/1902 + nowelizacja Dz.U. 2026/420 | Zmienia zakupy i kosztorys |
| 4 | **VAT: zakres zwolnienia dla opinii/diagnoz na zamówienie** — art. 43 ust. 1 pkt 18–19a + interpretacja ogólna PT1.8101.1.2024 | Ryzyko zaległości VAT |
| 5 | **Wskaźnik GUS „za ubiegły rok"** do opłaty RPWDL z art. 105 | Kwota przelewu |
| 6 | **OC: minimalna suma gwarancyjna** — rozp. MF Dz.U. 2019/866 ze zm. Dz.U. 2023/1930 | Warunek ustawowy |
| 7 | **Rozp. MZ o pomieszczeniach** — Dz.U. 2019/595, t.j. Dz.U. 2022/402 | Determinuje lokal |
| 8 | **Ustawa Kamilka** — t.j. Dz.U. 2024/560 + nowelizacja 5.08.2025: zakres dla podmiotów leczniczych, sankcje | Odpowiedzialność przy dzieciach |
| 9 | **Ustawa o SIOZ** — zakres EDM dla dokumentacji psychologicznej, terminy raportowania ZM | Obowiązek bieżący |
| 10 | **NIP-8: 7 czy 21 dni** w Waszej konfiguracji | Sankcja |
| 11 | **MSiG: czy opłata 100 zł nadal obowiązuje** dla wniosków od 29.11.2025 | Kosztorys |
| 12 | **ZUS: art. 8 ust. 6 pkt 4 u.s.u.s.** + sygnatura orzeczenia SN o spółce dwuosobowej (przez SAOS) | Argumentacja przy kontroli |
| 13 | **PKD** dla działalności psychologicznej w PKD 2025 | Wpisywane do umowy spółki |
| 14 | **Art. 233 § 6 KK** — aktualne brzmienie i sankcja | Waga oświadczenia RPWDL |
| 15 | **PPK** — art. 8, 14, 16 ustawy o PPK | Terminy przy 1. zatrudnieniu |

**Do rozważenia jako zadanie techniczne:** dorzucić do `config.json` i pobrać lokalnie akty, które w tym rozdziale generują najwięcej znaczników ⚠️: ustawa o VAT, Ordynacja podatkowa, u.s.u.s., ustawa AML, Prawo budowlane, ustawa o SIOZ, ustawa o odpadach, KK, Kodeks pracy, ustawa o rachunkowości, ustawa o KRS, ustawa o PCC. Wtedy ten rozdział da się przepisać niemal w całości na znaczniki ✅. Workflow: `.claude/skills/aktualizacja-aktow/SKILL.md`.

---

## Powiązania

- Podmiot leczniczy — dlaczego psycholog w sp. z o.o. nim jest → [01-podmiot-leczniczy-podstawy](01-podmiot-leczniczy-podstawy.md)
- Umowa spółki, klauzule, S24 vs notariusz → [02-sp-z-o-o-zakladanie](02-sp-z-o-o-zakladanie.md)
- Udziały 50/50, ryzyko paraliżu, wyjście wspólnika → [03-udzialy-i-wspolnicy](03-udzialy-i-wspolnicy.md)
- Zarząd, art. 210 KSH, reprezentacja → [04-zarzad-i-organy](04-zarzad-i-organy.md)
- Jak wypłacać pieniądze wspólnikom (art. 176 KSH) → [05-wynagrodzenia-i-swiadczenia](05-wynagrodzenia-i-swiadczenia.md)
- Aport z JDG, przejście pacjentów i dokumentacji → [06-aport-jdg](06-aport-jdg.md)
- KRS i RPWDL w szczegółach → [07-rejestracja-rpwdl-i-krs](07-rejestracja-rpwdl-i-krs.md)
- RODO, dokumentacja, retencja → [08-rodo-i-dokumentacja](08-rodo-i-dokumentacja.md)
- Prawa pacjenta w gabinecie → [09-prawa-pacjenta](09-prawa-pacjenta.md)
- Kaskada 2026–2028 i samorząd psychologów → [10-psycholog-2026-2028](10-psycholog-2026-2028.md)
- Tajemnica psychologiczna vs medyczna → [11-tajemnica-zawodowa](11-tajemnica-zawodowa.md)
- Checklista i TOP 15 błędów → [12-checklist-i-kruczki](12-checklist-i-kruczki.md)
