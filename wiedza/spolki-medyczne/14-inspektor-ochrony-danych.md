# 14. Inspektor ochrony danych (IOD) — kiedy jest obowiązkowy, obowiązki spółki, wymagania wobec osoby, kary

Kompletne opracowanie funkcji IOD w kontekście spółki z o.o. prowadzącej gabinet psychologiczny. Perspektywa dwustronna: **co musi spółka** i **kto może być inspektorem**.

---

## ⚠️ Status weryfikacyjny — przeczytaj najpierw

**Ani RODO, ani ustawa o ochronie danych osobowych z 2018 r. nie znajdują się w naszej lokalnej bazie aktów** (`akty/`). Polityka sieciowa środowiska blokuje `eur-lex.europa.eu`, `uodo.gov.pl` i `edpb.europa.eu` (odmowa tunelu CONNECT), więc weryfikacja w bazie oficjalnej była niemożliwa.

Wszystkie ustalenia poniżej opierają się na **materiałach Urzędu Ochrony Danych Osobowych i innych źródłach rządowych z wyszukiwania** i mają status:

⚠️ **[NIEWERYFIKOWANE — egress blokuje eur-lex.europa.eu i uodo.gov.pl; źródło: uodo.gov.pl / biznes.gov.pl; sprawdź: <przepis>]**

Wyjątkiem są przepisy ustawy o prawach pacjenta, które mamy lokalnie — te oznaczono ✅.

Ustawa o ochronie danych osobowych jest w `config.json` jako pozycja do pobrania. RODO jako akt unijny **nie jest dostępne przez ELI** — trzeba je pobrać z EUR-Lex, CELEX **02016R0679** (wersja skonsolidowana).

---

# CZĘŚĆ 0. Sprostowanie przesłanki: IOD **nie** jest obowiązkowy w każdej spółce

To najważniejsze ustalenie tego rozdziału, bo od niego zależy, czy gabinet w ogóle musi kogokolwiek wyznaczać.

**Nie istnieje obowiązek wyznaczenia inspektora ochrony danych „w każdej spółce, która przetwarza dane osobowe".** Każda firma przetwarza dane osobowe — choćby swoich pracowników i kontrahentów — i gdyby obowiązek był powszechny, dotyczyłby dosłownie wszystkich przedsiębiorców. Tak nie jest.

Obowiązek powstaje **wyłącznie w trzech przypadkach** wskazanych w art. 37 ust. 1 RODO. Poza nimi wyznaczenie IOD jest **dobrowolne** — co nie znaczy, że bez konsekwencji (patrz Część III).

Polska ustawa nie rozszerza tego katalogu: przepis krajowy odsyła wprost do art. 37 RODO i nakazuje wyznaczyć inspektora „w przypadkach i na zasadach określonych w art. 37 rozporządzenia 2016/679".

⚠️ [NIEWERYFIKOWANE — źródło: uodo.gov.pl („Kto może, a kto musi wyznaczyć IOD"), biznes.gov.pl; sprawdź: art. 37 ust. 1 RODO oraz art. 8 ustawy z 10.05.2018 o ochronie danych osobowych]

**→ Co z tego wynika dla spółki:** zanim zaczniecie szukać inspektora, przeprowadźcie i **udokumentujcie analizę**, czy obowiązek w ogóle powstaje. Ta analiza sama w sobie jest elementem rozliczalności — brak IOD z uzasadnieniem jest sytuacją zupełnie inną niż brak IOD z przeoczenia.

---

# CZĘŚĆ I. Kiedy IOD jest obowiązkowy

## 1. Trzy przesłanki z art. 37 ust. 1 RODO

| Lit. | Przesłanka | Czy dotyczy gabinetu psychologicznego w sp. z o.o. |
|---|---|---|
| **a** | przetwarzania dokonuje **organ lub podmiot publiczny**, z wyjątkiem sądów w zakresie sprawowania wymiaru sprawiedliwości | **Nie.** Prywatna spółka z o.o. nie jest podmiotem publicznym. Katalog podmiotów publicznych zobowiązanych precyzuje przepis krajowy |
| **b** | **główna działalność** polega na operacjach przetwarzania, które ze względu na swój charakter, zakres lub cele wymagają **regularnego i systematycznego monitorowania osób na dużą skalę** | **Zwykle nie.** Monitorowanie to np. śledzenie zachowań, profilowanie, monitoring wizyjny na dużą skalę — nie prowadzenie dokumentacji pacjentów |
| **c** | **główna działalność** polega na przetwarzaniu **na dużą skalę szczególnych kategorii danych** (art. 9) **lub** danych o wyrokach skazujących i naruszeniach prawa (art. 10) | **To jest właściwa przesłanka do zbadania.** Dane o zdrowiu psychicznym to dane szczególnej kategorii. Cały spór sprowadza się do **„dużej skali"** |

⚠️ [NIEWERYFIKOWANE — sprawdź: art. 37 ust. 1 lit. a–c RODO]

**Wszystkie kryteria w danej literze muszą być spełnione łącznie** — sama „główna działalność" bez „dużej skali" obowiązku nie tworzy.

## 2. „Główna działalność" — dlaczego gabinet ją spełnia

Główna działalność to nie działalność pomocnicza. Dla podmiotu leczniczego głównym przedmiotem jest udzielanie świadczeń zdrowotnych — ale ta działalność **nie byłaby możliwa bez przetwarzania danych w postaci dokumentacji medycznej**. Przetwarzanie danych o zdrowiu jest więc nierozerwalnie związane z działalnością główną, a nie funkcją wspierającą (jak kadry czy księgowość).

⚠️ [NIEWERYFIKOWANE — źródło: uodo.gov.pl, PARP; sprawdź: art. 37 ust. 1 lit. b i c RODO + Wytyczne Grupy Roboczej Art. 29 dot. inspektorów ochrony danych (WP 243), przyjęte przez EROD]

**→ Przesłanka „głównej działalności" jest przy gabinecie psychologicznym spełniona.** Rozstrzyga wyłącznie skala.

## 3. „Duża skala" — gdzie przebiega granica

RODO nie definiuje „dużej skali" liczbowo. Wskazówkę daje **motyw 91 RODO**, a interpretację — wytyczne WP 243:

- **przykład wprost wykluczony z „dużej skali":** przetwarzanie danych pacjentów przez **pojedynczego lekarza lub innego pracownika służby zdrowia** (pielęgniarkę, położną),
- **przykład wprost objęty „dużą skalą":** działalność **szpitala**.

⚠️ [NIEWERYFIKOWANE — źródło: uodo.gov.pl; sprawdź: motyw 91 RODO oraz WP 243, sekcja o „dużej skali" — cztery kryteria oceny: liczba osób, zakres danych, czas trwania i zasięg geograficzny]

**Ocena dla dwuosobowego gabinetu psychologicznego:** znajduje się on **znacznie bliżej pojedynczego praktyka niż szpitala**. Dwóch psychologów prowadzących własną praktykę w formie spółki, przyjmujących pacjentów w jednej lokalizacji, przy typowym wolumenie kilkuset kartotek — **prawdopodobnie nie przetwarza na dużą skalę**, a więc obowiązek z art. 37 ust. 1 lit. c nie powstaje.

**Ale to ocena, nie pewnik.** Cztery czynniki przesuwają gabinet w stronę „dużej skali":

1. **Liczba pacjentów** — poradnia obsługująca tysiące kartotek to inna sytuacja niż gabinet z kilkuset
2. **Liczba psychologów i lokalizacji** — rozrost do kilku gabinetów i kilkunastu terapeutów zmienia ocenę
3. **Zakres danych** — pełna dokumentacja psychoterapeutyczna to dane wyjątkowo wrażliwe, nawet przy mniejszej liczbie osób
4. **Kontrakt z NFZ, badania kierowców, opiniowanie na zlecenie sądów** — zwiększają wolumen i zasięg

**→ Rekomendacja praktyczna:** przy starcie dwuosobowego gabinetu obowiązek najprawdopodobniej nie powstaje. **Sporządźcie notatkę z analizy** — datowaną, wskazującą kryteria i wynik — i **przeglądajcie ją co roku** oraz przy każdej istotnej zmianie skali. Motyw 91 mówi o „pojedynczym" lekarzu; spółka z kilkunastoma terapeutami nie obroni się tym argumentem.

## 4. Uwaga: brak obowiązku IOD ≠ brak obowiązków RODO

To najczęstsze nieporozumienie. Nawet gdy IOD nie jest wymagany, spółka jako administrator ma pełen zestaw obowiązków — m.in. podstawy przetwarzania, klauzule informacyjne, rejestr czynności przetwarzania, umowy powierzenia, środki techniczne i organizacyjne, procedurę zgłaszania naruszeń w 72 h, retencję.

Osobno: **ocena skutków dla ochrony danych (DPIA)** z art. 35 RODO. Przetwarzanie danych o zdrowiu na większą skalę zwykle wymaga DPIA niezależnie od tego, czy jest IOD. UODO publikuje wykaz rodzajów operacji wymagających oceny skutków. ⚠️ [sprawdź: art. 35 ust. 4 RODO i komunikat Prezesa UODO z wykazem]

Reszta obowiązków RODO gabinetu: [08-rodo-i-dokumentacja](08-rodo-i-dokumentacja.md).

---

# CZĘŚĆ II. Obowiązki spółki (administratora)

## 1. Wyznaczenie — na podstawie kwalifikacji, nie dostępności

Inspektora wyznacza się **na podstawie kwalifikacji zawodowych, a w szczególności wiedzy fachowej na temat prawa i praktyk w dziedzinie ochrony danych oraz umiejętności wypełnienia zadań** z art. 39 RODO.

⚠️ [NIEWERYFIKOWANE — źródło: uodo.gov.pl („Jakie kwalifikacje musi posiadać IOD"); sprawdź: art. 37 ust. 5 RODO]

**Forma prawna powiązania — dwie dopuszczalne drogi (art. 37 ust. 6 RODO):**
- IOD jest **pracownikiem** administratora lub podmiotu przetwarzającego, albo
- wykonuje zadania **na podstawie umowy o świadczenie usług** (outsourcing).

Obie są równorzędne. Outsourcing jest dla małego gabinetu rozwiązaniem typowym i tańszym niż etat.

## 2. Zawiadomienie Prezesa UODO — 14 dni, wyłącznie elektronicznie

Podmiot, który wyznaczył inspektora, **zawiadamia Prezesa Urzędu o jego wyznaczeniu w terminie 14 dni od dnia wyznaczenia**, wskazując **imię, nazwisko oraz adres poczty elektronicznej** inspektora.

⚠️ [NIEWERYFIKOWANE — źródło: uodo.gov.pl, biznes.gov.pl, ISAP (Dz.U. 2018 poz. 1000); sprawdź: art. 10 ustawy o ochronie danych osobowych — w szczególności pełen zakres danych w zawiadomieniu i **wymóg formy elektronicznej**]

**Trzy rzeczy, które trzeba wiedzieć:**

- Zawiadomienia dokonuje się **wyłącznie w postaci elektronicznej** — inna forma jest bezskuteczna.
- **Wyznaczenie i zawiadomienie to dwa odrębne obowiązki.** Wyznaczenie inspektora bez zawiadomienia jest naruszeniem samodzielnym.
- Ten sam 14-dniowy termin obowiązuje przy **odwołaniu** inspektora i przy **zmianie jego danych** (np. adresu e-mail).

## 3. Publikacja danych inspektora

Podmiot, który wyznaczył inspektora, **udostępnia jego dane niezwłocznie po wyznaczeniu na swojej stronie internetowej**, a jeżeli nie prowadzi strony — **w sposób ogólnie dostępny w miejscu prowadzenia działalności**.

⚠️ [NIEWERYFIKOWANE — sprawdź: art. 11 ustawy o ochronie danych osobowych]

**→ Dla gabinetu:** imię, nazwisko i adres e-mail IOD na stronie www oraz — praktycznie — na tablicy w poczekalni. To realizuje też obowiązek z art. 13 RODO (klauzula informacyjna musi wskazywać dane kontaktowe inspektora, jeżeli został wyznaczony).

## 4. Zastępca inspektora

Podmiot, który wyznaczył inspektora, **może wyznaczyć osobę zastępującą go w czasie nieobecności**, z uwzględnieniem kryteriów kwalifikacyjnych z art. 37 ust. 5 i 6 RODO. Wyznaczenie zastępcy podlega **takiemu samemu zawiadomieniu Prezesa UODO**.

⚠️ [NIEWERYFIKOWANE — sprawdź: art. 11a ustawy o ochronie danych osobowych]

**→ Dla gabinetu z jednym IOD na umowie o świadczenie usług** wyznaczenie zastępcy zwykle nie jest potrzebne — ciągłość zapewnia dostawca usługi. Uregulujcie to w umowie.

## 5. Status inspektora — sześć gwarancji, które musi zapewnić spółka

Art. 38 RODO nakłada na administratora obowiązki, których naruszenie jest samodzielnym deliktem. To najczęściej zaniedbywana część reżimu IOD.

| Gwarancja | Treść obowiązku spółki | Typowy błąd |
|---|---|---|
| **Włączenie** (ust. 1) | zapewnić, by inspektor był **właściwie i niezwłocznie włączany we wszystkie sprawy** dotyczące ochrony danych osobowych | pytanie IOD dopiero po wdrożeniu nowego systemu albo po naruszeniu |
| **Zasoby** (ust. 2) | wspierać inspektora, zapewniając **zasoby niezbędne do wykonania zadań, dostęp do danych osobowych i operacji przetwarzania** oraz **zasoby niezbędne do utrzymania jego wiedzy fachowej** | brak budżetu na szkolenia; IOD bez dostępu do systemu gabinetowego |
| **Niezależność** (ust. 3) | **nie wydawać instrukcji** co do wykonywania zadań inspektora | narzucanie IOD stanowiska prawnego albo treści opinii |
| **Ochrona przed sankcją** (ust. 3) | inspektor **nie może być odwoływany ani karany** za wypełnianie swoich zadań | rozwiązanie umowy z IOD po niewygodnej opinii |
| **Podległość** (ust. 3) | inspektor **bezpośrednio podlega najwyższemu kierownictwu** | umieszczenie IOD w strukturze pod kierownikiem IT |
| **Punkt kontaktowy** (ust. 4) | osoby, których dane dotyczą, **mogą kontaktować się z inspektorem** we wszystkich sprawach związanych z przetwarzaniem ich danych i wykonywaniem praw | brak publicznego kanału kontaktu |

Dodatkowo **tajemnica lub poufność** wykonywania zadań (ust. 5) oraz **zakaz konfliktu interesów** przy powierzaniu innych zadań (ust. 6 — patrz Część IV pkt 3).

⚠️ [NIEWERYFIKOWANE — źródło: uodo.gov.pl („Jakie gwarancje niezależności zostały przyznane IOD"); sprawdź: art. 38 ust. 1–6 RODO]

**→ W spółce z dwuosobowym zarządem** „najwyższe kierownictwo" to **zarząd** — inspektor raportuje zarządowi, nie pojedynczemu wspólnikowi i nie kierownikowi administracji. Warto to zapisać w umowie z IOD i w regulaminie organizacyjnym.

**→ Niezależność nie oznacza władzy.** IOD nie ma uprawnień decyzyjnych wykraczających poza zadania z art. 39 i nie może być zmuszony do przyjęcia określonej wykładni przepisów. Za zapewnienie i wykazanie zgodności odpowiada **administrator**.

---

# CZĘŚĆ III. Skutki wyznaczenia IOD dobrowolnie

Jeżeli spółka nie ma obowiązku, a mimo to wyznaczy inspektora, **stosuje się do niego pełny reżim art. 37–39 RODO** — tak samo, jak przy wyznaczeniu obowiązkowym. Nie da się wyznaczyć IOD „na pół gwizdka".

⚠️ [NIEWERYFIKOWANE — źródło: WP 243 (Wytyczne Grupy Roboczej Art. 29), materiały uodo.gov.pl; sprawdź: art. 37 ust. 4 RODO — wyznaczenie dobrowolne]

**→ Konsekwencja, którą trzeba przemyśleć przed decyzją:** dobrowolne wyznaczenie uruchamia obowiązek zawiadomienia UODO w 14 dni, publikacji danych, zapewnienia niezależności i zasobów oraz ochrony przed odwołaniem. Wyznaczenie „dla świętego spokoju", a potem traktowanie inspektora jak zwykłego pracownika, tworzy **nowe naruszenie tam, gdzie wcześniej nie było żadnego obowiązku**.

**Alternatywa dla gabinetu bez obowiązku:** wyznaczenie **osoby odpowiedzialnej za ochronę danych** bez nadawania jej statusu IOD — koordynatora, punktu kontaktowego, opiekuna RODO. Taka osoba nie podlega reżimowi art. 37–39, nie zgłasza się jej do UODO i nie publikuje jej danych jako inspektora. **Nie wolno tylko nazywać jej inspektorem ochrony danych** ani przedstawiać jako IOD na zewnątrz — nazwa uruchamia reżim.

---

# CZĘŚĆ IV. Kto może być inspektorem — perspektywa osoby

## 1. Kwalifikacje — czego prawo wymaga, a czego nie

**Wymaga:** kwalifikacji zawodowych, w szczególności **wiedzy fachowej na temat prawa i praktyk w dziedzinie ochrony danych** oraz **umiejętności wypełnienia zadań** z art. 39 RODO.

**Nie wymaga:** żadnego konkretnego wykształcenia, kierunku studiów, uprawnień zawodowych ani certyfikatu. RODO **nie reguluje zasad ani trybu weryfikacji** spełnienia wymogu wiedzy fachowej.

⚠️ [NIEWERYFIKOWANE — źródło: uodo.gov.pl („Czy IOD musi odbyć szkolenie oraz posiadać certyfikat", „W jaki sposób należy oceniać kwalifikacje osoby kandydującej"); sprawdź: art. 37 ust. 5 RODO]

**Poziom wiedzy musi być współmierny** do charakteru, skomplikowania i ilości danych przetwarzanych w organizacji. Dla gabinetu psychologicznego oznacza to poprzeczkę wyżej niż dla sklepu internetowego — dane szczególnej kategorii, tajemnica zawodowa psychologa, przepisy o dokumentacji medycznej i o systemie informacji w ochronie zdrowia.

**Certyfikaty i dyplomy nie są obowiązkowe, ale w praktyce stanowią ważne kryterium kwalifikacyjne** i argument przemawiający za kandydatem. Przy sporze z organem to one uwiarygodniają decyzję administratora o wyborze.

## 2. Czego realnie powinien umieć IOD gabinetu psychologicznego

Zestaw minimalny — poza samym RODO:

- **ustawa o prawach pacjenta** — zwłaszcza krąg osób uprawnionych do przetwarzania dokumentacji medycznej i wymóg **pisemnego upoważnienia** dla personelu pomocniczego (art. 24 ust. 2 pkt 2 u.p.p. ✅ [VER: api.sejm.gov.pl ELI DU/2024/581, 2026-07-21]), okresy przechowywania, zasady udostępniania i wykaz udostępnień
- **tajemnica psychologiczna** — nieograniczona w czasie, z wyjątkami wyłącznie ustawowymi (art. 14 u.psy 2001 ✅ [VER: ELI DU/2019/1026, 2026-07-21])
- **ustawa o systemie informacji w ochronie zdrowia** — EDM, System P1, raportowanie zdarzeń medycznych
- **ustawa o ochronie danych osobowych** — obowiązki zawiadomieniowe i publikacyjne
- praktyka bezpieczeństwa: szyfrowanie, kontrola dostępu, kopie zapasowe, retencja, niszczenie dokumentacji

## 3. Kto **nie** może być inspektorem — konflikt interesów

Administrator może powierzyć inspektorowi inne zadania i obowiązki, ale **musi zapewnić, by nie powodowało to konfliktu interesów**.

Wykładnia jest utrwalona: **IOD nie może zajmować w organizacji stanowiska związanego z określaniem celów i sposobów przetwarzania danych.**

⚠️ [NIEWERYFIKOWANE — źródło: uodo.gov.pl, WP 243; sprawdź: art. 38 ust. 6 RODO]

**Wykluczeni w typowej strukturze:**

| Funkcja | Dlaczego wyklucza |
|---|---|
| **Członek zarządu** (w naszym gabinecie: obaj wspólnicy) | zarząd określa cele i sposoby przetwarzania — kontrolowałby sam siebie |
| Kierownik działu IT / administrator systemów | decyduje o sposobach przetwarzania |
| Kierownik HR / kadr | decyduje o celach przetwarzania danych pracowniczych |
| Kierownik marketingu | jw. wobec danych marketingowych |
| Główny księgowy | decyduje o przetwarzaniu w obszarze finansowym |

**→ Wniosek dla spółki dwuosobowej z konfiguracji naszych szablonów:** ani Anna Zawadzka, ani Marek Sikorski (szablon 01), ani Joanna Malinowska, ani Piotr Wrona (szablon 05) **nie mogą być inspektorem** — są członkami zarządu, czyli kierownikiem podmiotu leczniczego w rozumieniu ustawy o działalności leczniczej ✅ [VER: ELI DU/2026/156, 2026-07-21 — art. 2 ust. 2 pkt 1]. Jeśli gabinet będzie musiał albo chciał mieć IOD, musi to być **osoba spoza zarządu** — recepcjonistka o odpowiednich kwalifikacjach, zatrudniony psycholog niepełniący funkcji kierowniczych albo (najczęściej) **firma zewnętrzna na umowie o świadczenie usług**.

## 4. Odpowiedzialność inspektora — czego IOD **nie** ponosi

**Za naruszenie przepisów o ochronie danych odpowiada administrator, nie inspektor.** Podmiotem, który podejmuje decyzje i odpowiada za wdrożenie środków technicznych i organizacyjnych oraz za wykazanie zgodności, jest administrator lub podmiot przetwarzający.

⚠️ [NIEWERYFIKOWANE — źródło: uodo.gov.pl („Czy administrator może przerzucać swoje obowiązki na IOD"), PARP; sprawdź: art. 5 ust. 2, art. 24, art. 39 RODO]

**→ Konsekwencja dla obu stron:**
- **dla spółki** — nie da się „przerzucić" odpowiedzialności na inspektora. Kara administracyjna trafia w administratora. Zatrudnienie IOD jest środkiem zarządzania ryzykiem, nie transferem odpowiedzialności;
- **dla osoby będącej IOD** — nie odpowiada wobec organu za naruszenia administratora. Odpowiada natomiast **wobec administratora** na zasadach ogólnych: pracowniczych (jeśli jest pracownikiem) albo kontraktowych (jeśli świadczy usługi) — za nienależyte wykonywanie własnych zadań doradczych i monitorujących. Ubezpieczenie OC zawodowe IOD jest w praktyce standardem przy outsourcingu.

**→ IOD nie powinien wyręczać administratora** w realizacji jego obowiązków — prowadziłoby to do konfliktu interesów. Inspektor **monitoruje i doradza**; nie „robi RODO" za zarząd. Praktyka, w której IOD samodzielnie prowadzi rejestr czynności przetwarzania i sam siebie kontroluje, jest problematyczna.

---

# CZĘŚĆ V. Zadania inspektora (art. 39 RODO)

Katalog ustawowy — spółka nie może go zawęzić, może rozszerzyć (z zastrzeżeniem konfliktu interesów):

1. **informowanie** administratora, podmiotu przetwarzającego oraz pracowników przetwarzających dane o obowiązkach wynikających z RODO i innych przepisów o ochronie danych, oraz **doradzanie** im w tej sprawie
2. **monitorowanie przestrzegania** RODO, innych przepisów o ochronie danych oraz **polityk administratora** — w tym podział obowiązków, działania zwiększające świadomość, szkolenia personelu i powiązane audyty
3. **udzielanie zaleceń co do oceny skutków dla ochrony danych (DPIA)** oraz monitorowanie jej wykonania
4. **współpraca z organem nadzorczym**
5. **pełnienie funkcji punktu kontaktowego dla organu nadzorczego** w kwestiach związanych z przetwarzaniem, w tym uprzednich konsultacji, oraz prowadzenie konsultacji we wszelkich innych sprawach

Inspektor wypełnia zadania **z należytym uwzględnieniem ryzyka** związanego z operacjami przetwarzania — z uwzględnieniem charakteru, zakresu, kontekstu i celów przetwarzania.

⚠️ [NIEWERYFIKOWANE — źródło: uodo.gov.pl („Jakie zadania ma IOD", „Na czym polega wykonywanie zadań przez IOD z należytym uwzględnieniem ryzyka"); sprawdź: art. 39 ust. 1 lit. a–e i ust. 2 RODO]

**→ Punkt 5 ma praktyczne znaczenie:** jeżeli UODO zwróci się do inspektora o informacje, ten ma obowiązek się z tego wywiązać. IOD gabinetu jest więc pierwszym adresatem korespondencji kontrolnej.

---

# CZĘŚĆ VI. Kary

## 1. Za naruszenia dotyczące inspektora — do 10 mln EUR albo 2 % obrotu

Naruszenia obowiązków administratora i podmiotu przetwarzającego wynikających **m.in. z art. 37–39 RODO** podlegają administracyjnej karze pieniężnej **do 10 000 000 EUR**, a w przypadku przedsiębiorstwa — **do 2 % całkowitego rocznego światowego obrotu z poprzedniego roku obrotowego**, przy czym **zastosowanie ma kwota wyższa**.

⚠️ [NIEWERYFIKOWANE — źródło: uodo.gov.pl (decyzje i orzecznictwo), orzeczenia.uodo.gov.pl; sprawdź: **art. 83 ust. 4 lit. a RODO**]

Ten sam próg obejmuje więc:
- niewyznaczenie IOD mimo obowiązku (art. 37 ust. 1),
- wyznaczenie osoby bez wymaganych kwalifikacji (art. 37 ust. 5),
- niezapewnienie niezależności, zasobów lub włączenia inspektora w sprawy (art. 38),
- ukaranie lub odwołanie inspektora za wykonywanie zadań (art. 38 ust. 3),
- powierzenie zadań powodujących konflikt interesów (art. 38 ust. 6),
- uniemożliwienie inspektorowi wykonywania zadań z art. 39.

**Wyższy próg — 20 000 000 EUR albo 4 % obrotu** — dotyczy naruszeń o cięższym ciężarze gatunkowym (zasady przetwarzania, podstawy prawne, prawa osób, transfery). Naruszenia „inspektorskie" są w niższym koszyku, co nie znaczy, że symbolicznym: 2 % obrotu jest dla małej spółki kwotą nominalnie niewielką, ale kara ma być **skuteczna, proporcjonalna i odstraszająca**, a organ przy wymiarze uwzględnia okoliczności z art. 83 ust. 2 RODO — m.in. charakter, wagę i czas trwania naruszenia, umyślność, stopień współpracy z organem oraz kategorie danych.

⚠️ [sprawdź: art. 83 ust. 1, 2 i 5 RODO]

## 2. Za niezawiadomienie UODO o wyznaczeniu inspektora

Obowiązek zawiadomienia wynika z ustawy krajowej, a jego naruszenie jest **odrębne** od samego niewyznaczenia inspektora. UODO prowadzi weryfikację przestrzegania przepisów dotyczących IOD i występuje do podmiotów o wyjaśnienia.

⚠️ [NIEWERYFIKOWANE — źródło: uodo.gov.pl („Weryfikacja przestrzegania przepisów dotyczących inspektora ochrony danych"); sprawdź: art. 10 ustawy o ochronie danych osobowych + podstawa sankcji]

**→ Dodatkowe ryzyko, o którym się zapomina:** **nieudzielenie organowi informacji** w toku postępowania jest samodzielną podstawą kary pieniężnej — UODO nakładał je w praktyce. Ignorowanie pism urzędu jest kosztowniejsze niż samo naruszenie pierwotne.

## 3. Odpowiedzialność cywilna wobec pacjentów

Niezależnie od kar administracyjnych: osoba, która poniosła szkodę majątkową lub niemajątkową wskutek naruszenia RODO, ma prawo do odszkodowania od administratora. Przy danych o zdrowiu psychicznym roszczenia o zadośćuczynienie za naruszenie dóbr osobistych są realnym ryzykiem — większym niż kara administracyjna. ⚠️ [sprawdź: art. 82 RODO]

---

# CZĘŚĆ VII. Decyzja i dokumentacja dla gabinetu — ścieżka praktyczna

## Krok 1: przeprowadź i zapisz analizę obowiązku

Notatka do akt, datowana, podpisana przez zarząd. Minimalna treść:

> **Analiza obowiązku wyznaczenia inspektora ochrony danych**
>
> 1. Spółka nie jest organem ani podmiotem publicznym → art. 37 ust. 1 lit. a nie ma zastosowania.
> 2. Główna działalność Spółki nie polega na regularnym i systematycznym monitorowaniu osób na dużą skalę → art. 37 ust. 1 lit. b nie ma zastosowania.
> 3. Główna działalność Spółki polega na przetwarzaniu danych o zdrowiu (art. 9 ust. 1 RODO). Oceniając kryterium „dużej skali" według liczby osób, których dane dotyczą, zakresu danych, okresu przetwarzania i zasięgu geograficznego, Zarząd ustala: liczba pacjentów [___], liczba osób udzielających świadczeń [___], liczba lokalizacji [___]. Wobec motywu 91 RODO, wskazującego przetwarzanie przez pojedynczego pracownika służby zdrowia jako niewypełniające kryterium dużej skali, oraz działalność szpitala jako je wypełniającą, Zarząd ocenia, że działalność Spółki **nie stanowi / stanowi** przetwarzania na dużą skalę.
> 4. **Wniosek:** obowiązek wyznaczenia inspektora ochrony danych **nie powstaje / powstaje**.
> 5. Analiza podlega przeglądowi **corocznie** oraz przy każdej istotnej zmianie skali przetwarzania.

## Krok 2: jeśli obowiązek powstaje albo decydujecie się dobrowolnie

- [ ] Wybór osoby — kwalifikacje udokumentowane (CV, certyfikaty, doświadczenie), **spoza zarządu**
- [ ] Umowa: o pracę albo o świadczenie usług; zakres zadań nie węższy niż art. 39; zasady zapewnienia zasobów i finansowania szkoleń; podległość bezpośrednio zarządowi; zobowiązanie do poufności; zasady zastępstwa
- [ ] **Zawiadomienie Prezesa UODO w 14 dni, elektronicznie** — imię, nazwisko, adres e-mail
- [ ] **Publikacja danych IOD** na stronie www; dodatkowo w poczekalni
- [ ] Aktualizacja **klauzul informacyjnych** o dane kontaktowe inspektora
- [ ] Ewentualne wyznaczenie i zgłoszenie **zastępcy**
- [ ] Wpisanie IOD do regulaminu organizacyjnego i procedur (naruszenia, żądania pacjentów, nowe systemy)
- [ ] Kalendarz: przegląd analizy co rok; zawiadomienie UODO w 14 dni przy **każdej zmianie danych** i przy odwołaniu

## Krok 3: jeśli obowiązek nie powstaje

- [ ] Notatka z analizy w aktach
- [ ] Wyznaczenie **osoby odpowiedzialnej za ochronę danych** — bez nazywania jej inspektorem
- [ ] Pozostałe obowiązki RODO realizowane niezależnie → [08-rodo-i-dokumentacja](08-rodo-i-dokumentacja.md)
- [ ] Ponowna ocena przy: otwarciu drugiej lokalizacji, przekroczeniu progu kilkuset pacjentów, zatrudnieniu kilku terapeutów, kontrakcie z NFZ, rozpoczęciu opiniowania na zlecenie sądów

---

# CZĘŚĆ VIII. Dług weryfikacyjny

| # | Zagadnienie | Przepis do sprawdzenia | Waga |
|---|---|---|---|
| 1 | Trzy przesłanki obowiązku | art. 37 ust. 1 lit. a–c RODO | **krytyczna** — decyduje, czy obowiązek istnieje |
| 2 | „Duża skala" — kryteria | motyw 91 RODO + WP 243 (Wytyczne GR Art. 29 dot. IOD, przyjęte przez EROD) | **krytyczna** |
| 3 | Kwalifikacje i forma powiązania | art. 37 ust. 5 i 6 RODO | wysoka |
| 4 | Wyznaczenie dobrowolne — pełny reżim | art. 37 ust. 4 RODO | wysoka |
| 5 | Status i gwarancje | art. 38 ust. 1–6 RODO | wysoka |
| 6 | Zadania | art. 39 ust. 1–2 RODO | wysoka |
| 7 | Zawiadomienie UODO, forma i termin | art. 10 ustawy o ochronie danych osobowych | wysoka |
| 8 | Publikacja danych IOD | art. 11 ustawy o ochronie danych osobowych | średnia |
| 9 | Zastępca IOD | art. 11a ustawy o ochronie danych osobowych | średnia |
| 10 | Kary | art. 83 ust. 1, 2, 4 lit. a RODO | wysoka |
| 11 | Odszkodowanie dla osób | art. 82 RODO | średnia |
| 12 | DPIA i wykaz operacji wymagających oceny | art. 35 ust. 4 RODO + komunikat Prezesa UODO | wysoka |

**Jak domknąć:** ustawa o ochronie danych osobowych jest w `config.json` — po odblokowaniu ELI (`HANDOFF.md` sekcja 3a) pobierze się standardową ścieżką. **RODO nie jest dostępne przez ELI** — to akt unijny; trzeba je pobrać z EUR-Lex (CELEX **02016R0679**, wersja skonsolidowana) i dodać do `akty/` poza mechanizmem `fetch-laws.js`, albo rozszerzyć skrypt o obsługę źródła EUR-Lex.

---

## Źródła użyte w tym rozdziale

Materiały UODO i inne źródła rządowe (weryfikacja pomocnicza — nie zastępuje tekstu aktu):

- [uodo.gov.pl — Kto może, a kto musi wyznaczyć IOD na podstawie RODO](https://uodo.gov.pl/pl/490/2270)
- [uodo.gov.pl — Wyznaczenie i status IOD](https://uodo.gov.pl/pl/495/205)
- [uodo.gov.pl — Jakie gwarancje niezależności zostały przyznane IOD](https://uodo.gov.pl/pl/495/2407)
- [uodo.gov.pl — Jakie zadania ma IOD](https://uodo.gov.pl/pl/673/4199)
- [uodo.gov.pl — Wykonywanie zadań przez IOD z należytym uwzględnieniem ryzyka](https://uodo.gov.pl/pl/673/4200)
- [uodo.gov.pl — Jakie kwalifikacje musi posiadać IOD](https://uodo.gov.pl/pl/665/4154)
- [uodo.gov.pl — Ocena kwalifikacji kandydata na IOD](https://uodo.gov.pl/pl/495/2367)
- [uodo.gov.pl — Czy IOD musi odbyć szkolenie i posiadać certyfikat](https://uodo.gov.pl/pl/495/2359)
- [uodo.gov.pl — Weryfikacja przestrzegania przepisów dotyczących IOD](https://uodo.gov.pl/pl/138/2438)
- [uodo.gov.pl — Czy administrator może przerzucać swoje obowiązki na IOD](https://archiwum.uodo.gov.pl/pl/225/2374)
- [uodo.gov.pl — Kara pieniężna za nieudzielenie informacji](https://uodo.gov.pl/pl/360/1823)
- [orzeczenia.uodo.gov.pl — baza decyzji Prezesa UODO](https://orzeczenia.uodo.gov.pl/)
- [biznes.gov.pl — Zawiadomienie o wyznaczeniu IOD](https://www.biznes.gov.pl/pl/portal/ou871)
- [ISAP — ustawa z 10.05.2018 o ochronie danych osobowych (Dz.U. 2018 poz. 1000)](https://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20180001000/T/D20181000L.pdf)
- [PARP — Inspektor Ochrony Danych w przedsiębiorstwie: zadania i odpowiedzialność](https://www.parp.gov.pl/component/content/article/84730:inspektor-ochrony-danych-w-przedsiebiorstwie-zadania-i-odpowiedzialnosc)

## Powiązania

- Pozostałe obowiązki RODO gabinetu, dokumentacja medyczna, umowy powierzenia → [08-rodo-i-dokumentacja](08-rodo-i-dokumentacja.md)
- Tajemnica psychologiczna a tajemnica medyczna → [11-tajemnica-zawodowa](11-tajemnica-zawodowa.md)
- UODO w mapie instytucji, terminy → [13-mapa-instytucji-krok-po-kroku](13-mapa-instytucji-krok-po-kroku.md), FAZA 14
- Ograniczenie prawa kontroli wspólnika wobec dokumentacji medycznej → [`szablony/01-umowa-spolki-z-o-o-medyczna.md`](../../szablony/01-umowa-spolki-z-o-o-medyczna.md) § 8 ust. 2
