# Rok obrotowy przy starcie we wrześniu 2026 oraz estoński CIT — analiza decyzyjna

Dotyczy szablonów [01](01-umowa-spolki-z-o-o-medyczna.md) i [05](05-umowa-spolki-z-o-o-wersja-fable.md). Założenie: spółka rozpoczyna działalność **we wrześniu 2026 r.**

---

## ⚠️ Status weryfikacyjny tej analizy — przeczytaj najpierw

**Ani ustawa o rachunkowości, ani ustawa o CIT nie znajdują się w naszej lokalnej bazie aktów** (`akty/`). Polityka sieciowa środowiska blokuje `api.sejm.gov.pl` i `isap.sejm.gov.pl`, więc weryfikacja w bazie oficjalnej była niemożliwa.

Wszystkie ustalenia podatkowe i rachunkowe poniżej opierają się na **źródłach rządowych z wyszukiwania** (podatki.gov.pl, biznes.gov.pl, gov.pl/finanse, ISAP jako link do PDF) i mają status:

⚠️ **[NIEWERYFIKOWANE — egress blokuje api.sejm.gov.pl; źródło: <domena>; sprawdź: <przepis>]**

**To nie jest opinia podatkowa i nie zastępuje doradcy podatkowego.** Dwie decyzje opisane niżej są nieodwracalne albo trudno odwracalne i obie mają terminy zawite — przed podpisaniem aktu notarialnego domknijcie je z doradcą podatkowym. Ten dokument ma Wam dać strukturę rozmowy i wskazać, gdzie leżą pułapki, a nie zastąpić rozstrzygnięcia.

Oba akty zostały dodane do `config.json` — po odblokowaniu ELI (`HANDOFF.md` sekcja 3a) analizę da się przepisać na znaczniki ✅.

---

# CZĘŚĆ I. Rok obrotowy — wydłużyć pierwszy rok do 31.12.2027 czy nie?

## 1. Podstawa prawna — dwa przepisy, które muszą działać razem

**Warstwa rachunkowa.** Jeżeli jednostka rozpoczęła działalność **w drugiej połowie** przyjętego roku obrotowego, to księgi rachunkowe i sprawozdanie finansowe za ten okres **można połączyć** z księgami i sprawozdaniem finansowym za rok następny.

⚠️ [NIEWERYFIKOWANE — źródło: ISAP (t.j. ustawy o rachunkowości), stat.gov.pl (definicja roku obrotowego); sprawdź: art. 3 ust. 1 pkt 9 ustawy o rachunkowości — definicja roku obrotowego wraz ze zdaniem o połączeniu, oraz art. 12 ust. 1 pkt 1 uor — otwarcie ksiąg „na dzień rozpoczęcia działalności"]

**Warstwa podatkowa.** W przypadku podjęcia **po raz pierwszy** działalności w **drugiej połowie roku kalendarzowego** i wybrania roku podatkowego pokrywającego się z rokiem kalendarzowym, pierwszy rok podatkowy **może trwać od dnia rozpoczęcia działalności do końca roku kalendarzowego następującego po roku, w którym rozpoczęto działalność**. Wydłużenie **nie wymaga żadnych działań podatnika, w szczególności zawiadomienia urzędu skarbowego**.

⚠️ [NIEWERYFIKOWANE — źródło: biznes.gov.pl, podatki.gov.pl; sprawdź: art. 8 ust. 1, ust. 2 i **ust. 2a** ustawy o CIT]

**→ Wniosek konstrukcyjny:** wrzesień 2026 mieści się w drugiej połowie roku kalendarzowego, więc **oba przepisy są dostępne**. Pierwszy rok obrotowy i podatkowy może trwać od dnia rozpoczęcia działalności do **31 grudnia 2027 r.** — czyli ok. **16 miesięcy**.

## 2. Trzy pułapki, o których trzeba wiedzieć, zanim się wybierze

**Pułapka pierwsza: liczy się data pierwszego zdarzenia, nie data wpisu do KRS.** Dla rachunkowości momentem rozpoczęcia działalności jest dzień **pierwszego zdarzenia wywołującego skutki majątkowe lub finansowe** — a nie dzień rejestracji. Spółka w organizacji powstaje z chwilą zawarcia umowy (art. 161 § 1 KSH ✅) i już wtedy otwiera księgi. Jeżeli akt notarialny podpiszecie i wkłady wniesiecie **w czerwcu**, pierwsze zdarzenie wypada w pierwszej połowie roku i **wydłużenie przepada**. Praktycznie: pierwsze zdarzenie majątkowe musi wypaść **po 30 czerwca 2026 r.**

⚠️ [NIEWERYFIKOWANE — sprawdź: art. 12 ust. 1 pkt 1 uor]

**Pułapka druga: obie warstwy muszą mówić to samo.** Rok obrotowy (rachunkowość) i rok podatkowy (CIT) powinny być tożsame. Wydłużenie tylko w jednej warstwie tworzy rozjazd między sprawozdaniem a zeznaniem. Umowa spółki powinna określać rok obrotowy tak, by wydłużenie pierwszego roku było **wprost wyrażone**, a nie domyślane.

**Pułapka trzecia: kadencja zarządu liczy się w pełnych latach obrotowych.** Mandat członka zarządu wygasa z dniem odbycia zgromadzenia zatwierdzającego sprawozdanie za ostatni pełny rok obrotowy kadencji, a **kadencję oblicza się w pełnych latach obrotowych** (art. 202 § 2 KSH ✅ [VER: ELI DU/2024/18, 2026-07-21]). Wydłużony pierwszy rok obrotowy „zjada" jeden pełny rok kadencji inaczej niż rok czteromiesięczny. Przy kadencji 5-letniej (szablon 01) i 4-letniej (szablon 05) różnica jest neutralna — ale gdyby ktoś ustawił kadencję roczną, wydłużony pierwszy rok zmieniłby moment wygaśnięcia mandatu.

## 3. Porównanie wariantów

| Kryterium | **Wariant A: rok skrócony** (start → 31.12.2026, potem 2027) | **Wariant B: rok wydłużony** (start → 31.12.2027) |
|---|---|---|
| Liczba sprawozdań finansowych do 2028 r. | **2** (za 2026 i za 2027) | **1** (za okres 2026–2027) |
| Liczba zwyczajnych zgromadzeń, uchwał, złożeń do rejestru | 2 komplety | 1 komplet |
| Koszt obsługi księgowej zamknięcia | 2× zamknięcie roku | 1× zamknięcie roku |
| Koszty startowe (lokal, wyposażenie, licencje na testy, OC, opłaty rejestrowe) | spadają w okres bez przychodów → **strata 2026**, rozliczana w latach następnych na zasadach ogólnych | **kompensują się bezpośrednio** z przychodami 2027 w tym samym okresie |
| Pierwsze sprawozdanie dostępne dla banku / leasingu / NFZ | wiosna 2027 | wiosna 2028 |
| Widoczność wyniku samego 2026 | tak | nie (2026 wtopiony w okres) |
| Estoński CIT — okno zwolnienia z warunku zatrudnienia | krótsze w ujęciu kalendarzowym | **dłuższe** (patrz Część II pkt 5) |
| Formalności, żeby wybrać | brak (tryb domyślny) | brak zawiadomienia US; wymaga zapisu w umowie spółki dla warstwy rachunkowej |

## 4. Dlaczego kompensacja kosztów startowych przemawia za wariantem B

W wariancie A okres wrzesień–grudzień 2026 to niemal pewna **strata**: gabinet ponosi wtedy koszt adaptacji lokalu, wyposażenia, licencji na narzędzia diagnostyczne, polisy OC, opłat notarialnych i rejestrowych — a przychodów albo nie ma wcale, albo są symboliczne, bo **działalność leczniczą wolno rozpocząć dopiero po wpisie do rejestru podmiotów wykonujących działalność leczniczą** (art. 103 u.dz.l. ✅ [VER: ELI DU/2026/156, 2026-07-21]), a wojewoda ma na wpis 30 dni (art. 104 ust. 1 ✅).

Stratę z 2026 można rozliczać w latach następnych, ale **na zasadach ograniczonych** — z limitem czasowym i kwotowym w danym roku. ⚠️ [NIEWERYFIKOWANE — sprawdź: art. 7 ust. 5 ustawy o CIT: pięć kolejnych lat podatkowych, w jednym roku nie więcej niż 50 % kwoty straty albo jednorazowo do 5 000 000 zł]

W wariancie B tego problemu nie ma: koszty startowe i przychody z 2027 są w **tym samym** okresie rozliczeniowym, więc kompensują się automatycznie i bez limitów. Dla spółki, która w 2026 nie zdąży wygenerować przychodu, to najmocniejszy argument.

## 5. Rekomendacja

**Dla startu we wrześniu 2026: wariant B — pierwszy rok obrotowy i podatkowy do 31 grudnia 2027 r.**

Trzy powody, w kolejności wagi: bezpośrednia kompensacja kosztów startowych z przychodami 2027; jedno zamknięcie roku zamiast dwóch (realna oszczędność u księgowego i mniej pracy korporacyjnej); a przy estońskim CIT — dłuższe okno zwolnienia z warunku zatrudnienia.

**Kiedy wybrać wariant A:** jeżeli w pierwszej połowie 2027 r. planujecie ubiegać się o kredyt inwestycyjny, leasing na większą kwotę albo startować w postępowaniu, gdzie wymagane jest zatwierdzone sprawozdanie finansowe. Wtedy brak jakiegokolwiek sprawozdania do wiosny 2028 r. może być realną przeszkodą i warto zapłacić za drugie zamknięcie.

**Poprawka wprowadzona do szablonów:** § 25 szablonu 01 i § 18 ust. 4 szablonu 05 zmienione na wariant B, z datą aktu notarialnego przesuniętą na **sierpień 2026** — tak, by pierwsze zdarzenie majątkowe pewnie wypadło w drugiej połowie roku, a wrześniowy start działalności leczniczej był realny po wpisie do KRS i do rejestru podmiotów wykonujących działalność leczniczą.

▸ **Uwaga o harmonogramie.** Start działalności leczniczej we wrześniu 2026 przy akcie notarialnym w sierpniu jest **bardzo napięty**. Ścieżka krytyczna z [`wiedza/spolki-medyczne/13-mapa-instytucji-krok-po-kroku.md`](../wiedza/spolki-medyczne/13-mapa-instytucji-krok-po-kroku.md) daje realistycznie 8–12 tygodni od notariusza do pierwszego pacjenta, przy założeniu, że lokal jest już wynajęty i nie wymaga przebudowy. Żeby zmieścić się we wrześniu, zgłoszenie zmiany sposobu użytkowania lokalu (30 dni na sprzeciw) i opinia sanepidu muszą biec **równolegle** do rejestracji spółki, a nie po niej. Jeżeli wrzesień się nie uda i pierwszy pacjent przyjdzie w październiku czy listopadzie — dla wyboru wariantu B **nic się nie zmienia**, bo liczy się data pierwszego zdarzenia majątkowego (sierpień), a nie data pierwszej wizyty.

---

# CZĘŚĆ II. Estoński CIT (ryczałt od dochodów spółek)

## 1. Na czym polega korzyść

Trzy mechanizmy, każdy potwierdzony w materiałach Ministerstwa Finansów:

**a) Podatek tylko przy wypłacie zysku.** Dopóki zysk zostaje w spółce, podatku nie ma. Nie płaci się miesięcznych zaliczek na CIT.

**b) Niska stawka.** **10 %** podstawy opodatkowania dla podatnika **rozpoczynającego działalność** albo **małego podatnika**; 20 % w pozostałych przypadkach.

**c) Odliczenie przy dywidendzie.** PIT od dywidendy pomniejsza się o **90 %** kwoty podatku należnego spółki przypadającego na udział wspólnika — gdy spółka jest małym podatnikiem (70 % gdy nie jest).

⚠️ [NIEWERYFIKOWANE — źródło: podatki.gov.pl („Informacje podstawowe CIT estoński", „Stawki i limity w estońskim CIT"), biznes.gov.pl, gov.pl/finanse; sprawdź: rozdział 6b ustawy o CIT, w szczególności art. 28o (stawki) i art. 30a ust. 19 ustawy o PIT (odliczenie)]

**Efekt łączny wg Ministerstwa Finansów:** dla małego podatnika **20 %** zamiast 26,29 %; dla większych **25 %** zamiast 34,39 %.

### Sprawdzenie arytmetyczne na kwocie 200 000 zł zysku przeznaczonego do wypłaty

| Krok | Klasyczny CIT (mały podatnik, 9 %) | Estoński CIT (mały podatnik, 10 %) |
|---|---|---|
| Podatek spółki | 9 % × 200 000 = **18 000 zł** | 10 % × 200 000 = **20 000 zł** |
| Podstawa PIT wspólnika | 200 000 − 18 000 = 182 000 zł | 200 000 zł |
| PIT 19 % | 34 580 zł | 38 000 zł |
| Odliczenie 90 % podatku spółki | — | −18 000 zł |
| **PIT do zapłaty** | 34 580 zł | **20 000 zł** |
| **Podatek łącznie** | **52 580 zł** | **40 000 zł** |
| **Obciążenie efektywne** | **26,29 %** | **20,00 %** |

Wyliczenie odtwarza liczby podawane przez Ministerstwo Finansów, co jest dobrą kontrolą poprawności mechanizmu. **Różnica na 200 000 zł wypłaty: 12 580 zł.**

## 2. Warunki wejścia — i który z nich jest tu realnym problemem

| Warunek | Status dla gabinetu dwóch psychologów |
|---|---|
| Wspólnikami wyłącznie osoby fizyczne | ✔ spełniony |
| Spółka nie posiada udziałów/akcji w innych podmiotach | ✔ spełniony |
| Udział przychodów pasywnych poniżej progu | ✔ przychody z usług; dla podatnika rozpoczynającego działalność warunek uznaje się za spełniony w pierwszym roku |
| Prowadzenie ksiąg zgodnie z ustawą o rachunkowości | ✔ sp. z o.o. i tak prowadzi pełne księgi |
| **Zatrudnienie: co najmniej 3 osoby niebędące wspólnikami** (300 dni w roku podatkowym; gdy rok nie jest pełnymi 12 miesiącami — co najmniej 82 % dni tego roku), **albo** miesięczne wydatki na wynagrodzenia co najmniej 3 osób zatrudnionych na innej podstawie w kwocie co najmniej **3-krotności przeciętnego miesięcznego wynagrodzenia w sektorze przedsiębiorstw** | ⚠️ **to jest wąskie gardło** |
| Zawiadomienie **ZAW-RD** do końca **pierwszego miesiąca pierwszego roku podatkowego** opodatkowania ryczałtem | ⚠️ termin zawity |

⚠️ [NIEWERYFIKOWANE — źródło: podatki.gov.pl, biznes.gov.pl; sprawdź: art. 28j ust. 1 ustawy o CIT (katalog warunków, w tym pkt 3 — zatrudnienie, i pkt 7 — ZAW-RD)]

**Dlaczego zatrudnienie to problem:** gabinet dwóch psychologów-wspólników plus recepcjonistka to **jedna** osoba niebędąca wspólnikiem, nie trzy. Wspólników do limitu się nie liczy. Alternatywa kwotowa też jest wymagająca: 3-krotność przeciętnego wynagrodzenia w sektorze przedsiębiorstw to przy wskaźniku rzędu 9200 zł około **27 700 zł miesięcznie** wydatków na wynagrodzenia. ⚠️ [wskaźnik GUS — patrz `wiedza/spolki-medyczne/13-…`, pozycja o opłacie RPWDL]

## 3. Ulgi dla spółki rozpoczynającej działalność — i tu jest dobra wiadomość

Dwie ulgi, obie istotne dla tego kazusu:

**Ulga dla podatnika rozpoczynającego działalność:** warunek zatrudnienia **nie dotyczy roku rozpoczęcia działalności ani 2 lat podatkowych bezpośrednio po nim następujących**. Począwszy od drugiego roku podatkowego trzeba jednak **corocznie zwiększać zatrudnienie o co najmniej 1 pełny etat**, aż do osiągnięcia wielkości z przepisu.

**Ulga dla małego podatnika:** w pierwszym roku opodatkowania ryczałtem wystarczy zatrudniać **jedną osobę** zamiast trzech.

⚠️ [NIEWERYFIKOWANE — źródło: podatki.gov.pl, biznes.gov.pl; sprawdź: art. 28j ust. 2 i ust. 3 ustawy o CIT — **zwłaszcza dokładne brzmienie obowiązku corocznego zwiększania zatrudnienia, bo od niego zależy, czy gabinet utrzyma ryczałt po trzecim roku**]

**→ Praktyczna konsekwencja:** estoński CIT jest **osiągalny na starcie** i przez pierwsze lata, ale nie jest darmowy w perspektywie. Około czwartego roku gabinet musi mieć realnie 3 zatrudnione osoby spoza kręgu wspólników. Dla poradni, która planuje rosnąć i zatrudniać psychologów, to naturalna trajektoria. Dla gabinetu, który ma zostać dwuosobowy — ryczałt trzeba będzie porzucić, a wyjście z niego ma własne skutki (opodatkowanie zysków nierozdysponowanych).

## 4. ⚠️ Konflikt z konstrukcją wynagrodzenia z art. 176 KSH — najważniejsze ustalenie tej analizy

**To jest punkt, w którym estoński CIT zderza się z architekturą obu moich szablonów.**

Oba wzory (§ 10 szablonu 01, § 9 szablonu 05) opierają wypłaty dla wspólników na **powtarzających się świadczeniach niepieniężnych** z art. 176 KSH ✅ [VER: ELI DU/2024/18, 2026-07-21]. Zaleta w reżimie klasycznym jest oczywista: wynagrodzenie jest kosztem spółki i przysługuje **także wtedy, gdy sprawozdanie finansowe nie wykazuje zysku** (art. 176 § 2 KSH ✅).

W reżimie estońskim ta sama konstrukcja wchodzi w obszar **ukrytych zysków**. Ukrytym zyskiem jest — w intencji ustawodawcy — każde świadczenie na rzecz wspólnika lub podmiotu powiązanego, stanowiące alternatywę dla dywidendy. Świadczenia opodatkowane jako ukryty zysk podlegają ryczałtowi, więc wypłata, która miała być kosztem, staje się przedmiotem opodatkowania.

⚠️ [NIEWERYFIKOWANE — źródło: gov.pl („Przewodnik do Ryczałtu od dochodów spółek"), interpretacje indywidualne Dyrektora KIS; sprawdź: art. 28m ust. 1 pkt 2, art. 28m ust. 3 (definicja ukrytych zysków) oraz **art. 28m ust. 4 pkt 1** — katalog wyłączeń z ukrytych zysków]

**Jak wygląda stan sporny — uczciwie:**

- Kierunek korzystny dla podatnika: w interpretacjach KIS przyjmowano, że wynagrodzenie za **rzeczywiście świadczone usługi** nie jest ukrytym zyskiem, bo nie jest wypłacane „w związku z prawem do udziału w zysku" — jego uzyskanie wymaga od wspólnika **aktywności innej niż samo posiadanie udziałów**. Świadczenia z art. 176 KSH są właśnie taką aktywnością.
- Kierunek ryzyka: katalog wyłączeń z ukrytych zysków obejmuje wynagrodzenia z określonych tytułów w rozumieniu ustawy o PIT — przede wszystkim ze stosunku pracy oraz z tytułów wymienionych w art. 13 pkt 7–9 ustawy o PIT (m.in. członkowie zarządu, kontrakty menedżerskie) — **do limitu kwotowego**. Wynagrodzenie z art. 176 KSH kwalifikuje się w PIT zwykle jako przychód z **innych źródeł**, a więc **poza** tym katalogiem. Skutek: brak automatycznego bezpieczeństwa z mocy wyłączenia; ocena idzie przez przesłanki ogólne, w tym rynkowość świadczenia i to, czy doszłoby do niego między podmiotami niepowiązanymi.

⚠️ [NIEWERYFIKOWANE — sprawdź: art. 28m ust. 4 pkt 1 ustawy o CIT (zakres wyłączenia i limit: pięciokrotność przeciętnego miesięcznego wynagrodzenia — **kwotę i sposób liczenia limitu potwierdź**), art. 20 ust. 1 oraz art. 13 pkt 7–9 ustawy o PIT (kwalifikacja źródła)]

**→ Wniosek dla decyzji projektowej.** Wybór estońskiego CIT **nie jest neutralny dla umowy spółki**. Trzy możliwe ścieżki:

| Ścieżka | Konstrukcja wypłat | Ocena |
|---|---|---|
| **1. Klasyczny CIT + art. 176 KSH** | wynagrodzenie miesięczne za świadczenia niepieniężne, koszt spółki, niezależne od zysku | Konstrukcja zostaje jak w szablonach. Prostsze podatkowo, bez ryzyka ukrytych zysków. Wyższe obciążenie przy wypłacie zysku (26,29 % vs 20 %). |
| **2. Estoński CIT + przebudowa wypłat** | wynagrodzenie z tytułu **powołania do zarządu** albo umowy o pracę, mieszczące się w wyłączeniu z ukrytych zysków do limitu; art. 176 KSH pozostaje w umowie jako instytucja nieużywana albo ograniczona | Pozwala korzystać z 20 % efektywnie. Wymaga innej architektury § 10/§ 9 i uchwał o wynagrodzeniu zarządu. **Wymaga interpretacji indywidualnej.** |
| **3. Estoński CIT + art. 176 KSH bez zmian** | jak w szablonach | **Najwyższe ryzyko.** Rynkowa stawka i realne świadczenie są argumentami za, ale bez interpretacji indywidualnej to zakład o kwalifikację całego strumienia wypłat. |

**Rekomendacja:** jeżeli estoński CIT ma być wybrany, **przed podpisaniem aktu notarialnego** rozstrzygnijcie architekturę wypłat i rozważcie wniosek o interpretację indywidualną (opłata 40 zł od stanu faktycznego ⚠️ art. 14f Ordynacji podatkowej). Powód proceduralny jest twardy: zmiana § 10 albo § 9 po zarejestrowaniu spółki wymaga **zmiany umowy spółki w formie aktu notarialnego**, uchwały większością 2/3 (a w szablonie 05 — 3/4), wpisu do rejestru i opłat. Do tego zmniejszenie świadczeń wspólnika jest łatwiejsze niż ich zwiększenie, bo zwiększenie wymaga **zgody indywidualnej** wspólnika, którego dotyczy (art. 246 § 3 KSH ✅).

## 5. Interakcja z wydłużonym rokiem obrotowym

Trzy punkty styku między decyzją z Części I i decyzją z Części II:

**a) ZAW-RD i pierwszy rok podatkowy.** Zawiadomienie składa się **do końca pierwszego miesiąca pierwszego roku podatkowego** opodatkowania ryczałtem. Przy wariancie B pierwszy rok podatkowy zaczyna się w sierpniu 2026 — więc ZAW-RD do końca sierpnia 2026. **Termin jest krótki i łatwo go przegapić w gorączce rejestracji.** Wpiszcie go do kalendarza w dniu podpisania aktu.

**b) Okno zwolnienia z warunku zatrudnienia wydłuża się kalendarzowo.** Zwolnienie obejmuje rok rozpoczęcia działalności i 2 lata podatkowe bezpośrednio po nim. W wariancie B pierwszy rok podatkowy to sierpień 2026 – grudzień 2027, więc zwolnienie sięga dalej w kalendarz niż przy roku skróconym. To realna, wymierna korzyść — ale **wprost z przepisu nie wynika**, jest wnioskiem z zestawienia dwóch norm, więc wymaga potwierdzenia. ⚠️ [sprawdź: art. 8 ust. 2a w zw. z art. 28j ust. 2 ustawy o CIT]

**c) Reguła 82 % dni działa w drugą stronę.** Warunek zatrudnienia liczy się jako 300 dni w roku podatkowym, a **gdy rok podatkowy nie jest pełnymi 12 miesiącami — jako co najmniej 82 % dni tego roku**. Rok 16-miesięczny nie jest „pełnymi 12 miesiącami", więc trzeba ustalić, czy stosuje się progu 300 dni czy 82 % (co przy ~488 dniach dawałoby ~400 dni). W okresie objętym zwolnieniem dla podatnika rozpoczynającego działalność problem nie występuje, ale przy przejściu na ryczałt w roku późniejszym — już tak. ⚠️ [sprawdź: art. 28j ust. 1 pkt 3 ustawy o CIT]

## 6. Czy estoński CIT jest korzystny dla TEJ spółki — bilans

**Za:**
- efektywne 20 % przy wypłacie zysku zamiast 26,29 % — na 200 000 zł wypłaty oszczędność 12 580 zł
- brak miesięcznych zaliczek CIT — istotne dla płynności gabinetu w fazie rozruchu
- pełne odroczenie podatku, jeśli zysk zostaje w spółce (finansowanie drugiego gabinetu, sprzętu, licencji z zysku nieopodatkowanego)
- warunek zatrudnienia zwolniony na start i 2 kolejne lata podatkowe, a przy wydłużonym roku — dłużej kalendarzowo

**Przeciw:**
- **konflikt z konstrukcją art. 176 KSH**, na której oparte są wypłaty w obu szablonach (pkt 4) — to nie detal, to przebudowa architektury wynagrodzeń
- obowiązek corocznego zwiększania zatrudnienia od drugiego roku podatkowego — dla gabinetu, który ma zostać dwuosobowy, ryczałt jest rozwiązaniem czasowym
- reżim ukrytych zysków obejmuje także inne typowe świadczenia (używanie samochodu spółki, najem od wspólnika, pożyczki dla wspólnika) — wymaga dyscypliny w relacjach spółka–wspólnik
- wyjście z ryczałtu ma własne konsekwencje podatkowe dla zysków nierozdysponowanych

**Ocena:** estoński CIT jest atrakcyjny dla **poradni z planem wzrostu i zatrudniania psychologów**, która wypłaty dla wspólników poukłada przez powołanie do zarządu lub umowy o pracę. Dla **dwuosobowego gabinetu, który chce zostać dwuosobowy i wypłacać wspólnikom miesięcznie za godziny terapii z art. 176 KSH** — klasyczny CIT jest prostszy i bezpieczniejszy, a różnica 6 punktów procentowych na wypłacanym zysku nie kompensuje ryzyka kwalifikacyjnego i kosztu przebudowy.

**To rozstrzygnięcie należy do doradcy podatkowego, nie do tego dokumentu.** Powyższe ma wskazać, że pytanie „czy estoński CIT" jest w tym kazusie **pytaniem o kształt umowy spółki**, a nie tylko o formularz ZAW-RD — i dlatego musi być zadane **przed** wizytą u notariusza.

---

# CZĘŚĆ III. Dług weryfikacyjny tej analizy

| # | Zagadnienie | Przepis do sprawdzenia | Waga |
|---|---|---|---|
| 1 | Wydłużenie pierwszego roku — warstwa rachunkowa | art. 3 ust. 1 pkt 9 oraz art. 12 ust. 1 pkt 1 ustawy o rachunkowości | wysoka — podstawa zapisu w umowie |
| 2 | Wydłużenie pierwszego roku — warstwa podatkowa | **art. 8 ust. 2a** ustawy o CIT | wysoka |
| 3 | Ukryte zyski a art. 176 KSH | art. 28m ust. 1 pkt 2, ust. 3, **ust. 4 pkt 1** ustawy o CIT + art. 20 ust. 1 i art. 13 pkt 7–9 ustawy o PIT | **krytyczna — decyduje o architekturze umowy** |
| 4 | Warunki wejścia w ryczałt i ulgi na start | art. 28j ust. 1 pkt 3 i 7, ust. 2, ust. 3 ustawy o CIT | wysoka |
| 5 | Stawki ryczałtu i odliczenie przy dywidendzie | art. 28o ustawy o CIT, art. 30a ust. 19 ustawy o PIT | średnia (liczby odtworzone i zgodne z MF) |
| 6 | Rozliczanie straty w wariancie A | art. 7 ust. 5 ustawy o CIT | średnia |
| 7 | Definicja małego podatnika i podatnika rozpoczynającego działalność | art. 4a pkt 10 ustawy o CIT | średnia |
| 8 | Opłata za interpretację indywidualną | art. 14f Ordynacji podatkowej | niska |

Ustawa o CIT, ustawa o PIT, ustawa o rachunkowości i Ordynacja podatkowa są w `config.json` jako pozycje do pobrania. Po odblokowaniu ELI: `node fetch-laws.js --resolve --write` → `node fetch-laws.js` → konwersja → przepisanie tej analizy na znaczniki ✅.

## Źródła rządowe użyte w tej analizie

- [podatki.gov.pl — Informacje podstawowe CIT estoński](https://www.podatki.gov.pl/podatki-firmowe/cit/cit-estonski/informacje-podstawowe-cit-estonski)
- [podatki.gov.pl — Stawki i limity w estońskim CIT](https://www.podatki.gov.pl/podatki-firmowe/cit/cit-estonski/stawki-i-limity-w-estonskim-cit)
- [podatki.gov.pl — Estoński CIT 2.0. Praktyczny przewodnik dla biznesu (PDF)](https://www.podatki.gov.pl/media/dxrabsmd/estonski_cit_2-0_praktyczny_przewodnik_dla_biznesu.pdf)
- [gov.pl — Ryczałt od dochodów spółek: objaśnienia podatkowe](https://www.gov.pl/web/finanse/ryczalt-od-dochodow-spolek--objasnienia-podatkowe)
- [gov.pl — Przewodnik do Ryczałtu od dochodów spółek (PDF)](https://www.gov.pl/attachment/a6b41291-ef42-4404-9f66-4d7a4c8e7948)
- [biznes.gov.pl — Estoński CIT: podstawowe informacje](https://www.biznes.gov.pl/pl/portal/001171)
- [biznes.gov.pl — Opodatkowanie podatkiem CIT](https://www.biznes.gov.pl/en/publikacje/2353-opodatkowanie-podatkiem-cit)
- [ISAP — ustawa o rachunkowości, tekst jednolity (PDF)](https://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20230000120/U/D20230120Lj.pdf)
- [stat.gov.pl — pojęcie „rok obrotowy"](https://stat.gov.pl/metainformacje/slownik-pojec/pojecia-stosowane-w-statystyce-publicznej/440,pojecie.html)
