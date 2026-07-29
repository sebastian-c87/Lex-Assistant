# 01. Kogo i jakich działalności dotyczy RODO

## ⚠️ Status weryfikacyjny

RODO **nie zostało pobrane do lokalnej bazy** — polityka egress tego środowiska blokuje `eur-lex.europa.eu`, `publications.europa.eu`, `op.europa.eu`, `data.europa.eu`, `isap.sejm.gov.pl` i `uodo.gov.pl` (proxy loguje wprost: `gateway answered 403 to CONNECT (policy denial)`). Sprawdzono także Dysk Google użytkownika — nie zawiera tekstu aktu.

Cały rozdział opiera się na **materiałach UODO, PARP i innych źródłach rządowych z wyszukiwania**, oznaczonych ⚠️ ze wskazaniem przepisu do potwierdzenia. Infrastruktura pobrania jest gotowa — patrz [00-README](00-README.md), sekcja „Jak pobrać RODO".

---

# 1. Zasada wyjściowa: RODO dotyczy niemal każdej działalności gospodarczej

Punktem wyjścia jest odwrócenie pytania. **Nie pyta się „czy moja działalność podlega RODO", tylko „czy zachodzi któreś z nielicznych wyłączeń".** Domyślnie podlega każdy, kto przetwarza dane osobowe w związku z działalnością — a przetwarza praktycznie każdy przedsiębiorca, choćby dane kontrahentów, pracowników czy osób piszących z zapytaniem.

Nie ma znaczenia:
- **forma prawna** — JDG, spółka cywilna, spółka z o.o., fundacja, stowarzyszenie podlegają tak samo,
- **wielkość** — jednoosobowa kancelaria podlega RODO tak samo jak korporacja; różnice dotyczą tylko *natężenia* niektórych obowiązków (rejestr czynności, IOD),
- **czy działalność jest zarobkowa** — stowarzyszenie czy wspólnota mieszkaniowa też są administratorami,
- **czy dane są „wrażliwe"** — imię i adres e-mail to już dane osobowe.

⚠️ [NIEWERYFIKOWANE — źródło: uodo.gov.pl, biznes.gov.pl, PARP; sprawdź: art. 2 ust. 1, art. 4 pkt 1, 2, 7 i 8 RODO]

# 2. Zakres przedmiotowy — kiedy RODO w ogóle wchodzi w grę

RODO stosuje się do przetwarzania danych osobowych:
- **w sposób całkowicie lub częściowo zautomatyzowany** (komputer, telefon, system, strona www, chmura), oraz
- **w sposób inny niż zautomatyzowany, jeżeli dane stanowią część zbioru danych** albo mają go stanowić (segregatory, kartoteki, teczki klientów uporządkowane wg kryterium).

⚠️ [NIEWERYFIKOWANE — sprawdź: art. 2 ust. 1 RODO]

**→ Praktycznie:** papierowe akta sprawy ułożone alfabetycznie to zbiór danych — RODO obowiązuje. Pojedyncza, nieuporządkowana notatka na luźnej kartce, niewłączona do żadnego zbioru, teoretycznie nie — ale w kancelarii i tak trafi do akt sprawy.

## Cztery wyłączenia z art. 2 ust. 2 RODO

| Wyłączenie | Czy przydatne przedsiębiorcy |
|---|---|
| działalność nieobjęta zakresem prawa Unii | nie |
| przetwarzanie przez państwa członkowskie w ramach wspólnej polityki zagranicznej i bezpieczeństwa | nie |
| **przetwarzanie przez osobę fizyczną w ramach czynności o czysto osobistym lub domowym charakterze** | **nie — to wyłączenie nie obejmuje działalności gospodarczej** |
| przetwarzanie przez organy w celach zapobiegania i zwalczania przestępczości (odrębna dyrektywa i ustawa krajowa) | nie |

⚠️ [NIEWERYFIKOWANE — sprawdź: art. 2 ust. 2 lit. a–d RODO oraz motyw 18]

**→ Najczęstsze nieporozumienie:** „prowadzę jednoosobową działalność, więc to działalność osobista". **Nie.** Wyłączenie „czysto osobiste lub domowe" dotyczy prywatnej książki adresowej, prywatnych zdjęć rodzinnych, korespondencji z przyjaciółmi — a **nie** działalności zarobkowej osoby fizycznej. Granica biegnie między sferą prywatną a zawodową, nie między formami prawnymi.

# 3. Zakres terytorialny — art. 3 RODO

RODO stosuje się gdy:
- przetwarzanie odbywa się **w związku z działalnością prowadzoną przez jednostkę organizacyjną administratora lub podmiotu przetwarzającego w Unii** — niezależnie od tego, czy samo przetwarzanie ma miejsce w Unii; albo
- administrator ma siedzibę poza Unią, ale przetwarza dane osób przebywających w Unii w związku z **oferowaniem im towarów lub usług** albo **monitorowaniem ich zachowania** w Unii.

⚠️ [NIEWERYFIKOWANE — sprawdź: art. 3 ust. 1 i 2 RODO; Wytyczne EROD 3/2018 dot. zakresu terytorialnego]

**→ Dla polskiej kancelarii czy gabinetu** przesłanka pierwsza jest oczywiście spełniona. Przesłanka druga bywa istotna przy korzystaniu z narzędzi spoza UE — wtedy pojawia się osobne zagadnienie **transferu do państwa trzeciego** (rozdział V RODO).

# 4. Kim jesteś w systemie — trzy role

| Rola | Kto to | Przykład dla kancelarii |
|---|---|---|
| **Administrator** | ustala **cele i sposoby** przetwarzania | adwokat wobec danych klientów, pracowników, osób z formularza kontaktowego |
| **Podmiot przetwarzający (procesor)** | przetwarza **w imieniu administratora**, nie decyduje o celach | hostingodawca strony, dostawca poczty, biuro rachunkowe, firma IT |
| **Odbiorca** | podmiot, któremu ujawnia się dane | sąd, przeciwnik procesowy, ubezpieczyciel |

⚠️ [NIEWERYFIKOWANE — źródło: PARP („Administrator, procesor, odbiorca — kto jest kim"); sprawdź: art. 4 pkt 7, 8 i 9 RODO]

**→ Kluczowe rozróżnienie praktyczne:** jeżeli ktoś przetwarza dane **na Twoje zlecenie i wg Twoich poleceń** — jest procesorem i potrzebna jest **umowa powierzenia** (art. 28 ust. 3 RODO). Jeżeli sam decyduje o celach — jest odrębnym administratorem i umowy powierzenia się **nie zawiera** (to częsty błąd: zawieranie DPA z podmiotem, który jest samodzielnym administratorem, np. z sądem albo z bankiem).

# 5. Trzy warstwy natężenia obowiązków

Wbrew obiegowej opinii RODO nie nakłada identycznego zestawu obowiązków na wszystkich. Są trzy progi:

## Warstwa A — obowiązuje KAŻDEGO administratora, bez wyjątku

- zasady przetwarzania: zgodność z prawem, rzetelność, przejrzystość, ograniczenie celu, minimalizacja, prawidłowość, ograniczenie przechowywania, integralność i poufność, **rozliczalność** (art. 5)
- ustalenie **podstawy prawnej** dla każdego procesu (art. 6, a dla danych szczególnych — art. 9; dla danych o wyrokach — art. 10)
- **obowiązek informacyjny** wobec osób (art. 13 przy zbieraniu od osoby, art. 14 przy pozyskaniu z innego źródła)
- **realizacja praw osób** (art. 15–22): dostęp, sprostowanie, usunięcie, ograniczenie, przenoszenie, sprzeciw — co do zasady **w miesiąc** (art. 12 ust. 3)
- **środki techniczne i organizacyjne** odpowiednie do ryzyka (art. 24, art. 32)
- **umowy powierzenia** z każdym procesorem (art. 28)
- **upoważnienia** dla osób przetwarzających pod zwierzchnictwem administratora (art. 29)
- **zgłaszanie naruszeń** organowi w 72 h i zawiadamianie osób przy wysokim ryzyku (art. 33–34)

## Warstwa B — obowiązuje po przekroczeniu progu

| Obowiązek | Próg |
|---|---|
| **Rejestr czynności przetwarzania** (art. 30) | zatrudnienie ≥ 250 osób **albo** — przy mniejszym zatrudnieniu — gdy przetwarzanie **może powodować ryzyko naruszenia praw i wolności**, **nie ma charakteru sporadycznego**, **lub** obejmuje **dane szczególnych kategorii (art. 9) albo dane o wyrokach skazujących (art. 10)**. Warunki są **alternatywne** — wystarczy jeden |
| **Ocena skutków (DPIA)** (art. 35) | gdy przetwarzanie z dużym prawdopodobieństwem powoduje wysokie ryzyko; obowiązkowo w przypadkach z art. 35 ust. 3 oraz z wykazu Prezesa UODO |
| **Inspektor ochrony danych (IOD)** (art. 37) | trzy przesłanki — patrz [`wiedza/spolki-medyczne/14-inspektor-ochrony-danych.md`](../spolki-medyczne/14-inspektor-ochrony-danych.md) |

⚠️ [NIEWERYFIKOWANE — źródło: uodo.gov.pl („Wskazówki i wyjaśnienia dotyczące obowiązku rejestrowania czynności"), Wytyczne GR Art. 29; sprawdź: art. 30 ust. 5 RODO]

**→ Pułapka progu 250 osób.** Zwrot „mniej niż 250 osób" bywa czytany jako zwolnienie małych firm z rejestru czynności. **To błąd.** Wyjątek jest obwarowany trzema alternatywnymi warunkami i w praktyce **prawie każdy przedsiębiorca któryś spełnia** — bo przetwarzanie danych pracowników i klientów **nie ma charakteru sporadycznego**. Materiały UODO podają to wprost jako przykład: mała organizacja systematycznie przetwarzająca dane pracowników nie może uznać tego za sporadyczne i musi ująć je w rejestrze.

## Warstwa C — obowiązki sektorowe nakładane na RODO

RODO jest warstwą ogólną. Na nią nakładają się przepisy szczególne, często ostrzejsze:

| Sektor | Dodatkowa warstwa |
|---|---|
| Ochrona zdrowia | ustawa o prawach pacjenta (dokumentacja, upoważnienia, retencja 20 lat), ustawa o działalności leczniczej, ustawa o systemie informacji w ochronie zdrowia |
| Zawody prawnicze | Prawo o adwokaturze / o radcach prawnych — **tajemnica zawodowa**, do której odsyła art. 90 RODO |
| Marketing i strony www | ustawa o świadczeniu usług drogą elektroniczną; **Prawo komunikacji elektronicznej** (od 10.11.2024 zastąpiło Prawo telekomunikacyjne — cookies) |
| Zatrudnienie | Kodeks pracy art. 22¹ i nast. — zamknięty katalog danych od kandydata i pracownika |
| Finanse i AML | ustawa o przeciwdziałaniu praniu pieniędzy — identyfikacja klienta, retencja |

⚠️ [NIEWERYFIKOWANE — sprawdź: art. 90 RODO; art. 399 Prawa komunikacji elektronicznej; art. 22¹ Kodeksu pracy]

# 6. Czego RODO **nie** dotyczy — najczęstsze mity

| Mit | Jak jest |
|---|---|
| „RODO dotyczy tylko firm zatrudniających pracowników" | Nie. Jednoosobowa działalność bez pracowników też jest administratorem — wobec klientów i kontrahentów |
| „Dane firmowe nie są danymi osobowymi" | Dane osoby fizycznej prowadzącej JDG (imię, nazwisko, adres, NIP powiązany z osobą) **są** danymi osobowymi. Dane spółki jako podmiotu — nie, ale dane jej reprezentantów już tak |
| „Skoro mam zgodę, jestem bezpieczny" | Zgoda to tylko jedna z sześciu podstaw z art. 6 i często **nie** najlepsza — jest odwoływalna. Dla umowy właściwa jest art. 6 ust. 1 lit. b, dla obowiązku prawnego lit. c |
| „Mała firma nie musi prowadzić rejestru czynności" | Patrz Warstwa B — wyjątek prawie nigdy nie działa |
| „RODO wymaga zgody na cookies" | Podstawa dla cookies to przepisy o komunikacji elektronicznej (obecnie art. 399 PKE), a nie sam art. 6 RODO. Dwie warstwy, dwa reżimy |
| „Wystarczy polityka prywatności na stronie" | Polityka realizuje część obowiązku informacyjnego. Nie zastępuje podstaw prawnych, rejestru, umów powierzenia, procedur ani zabezpieczeń |
| „Dane w chmurze to problem dostawcy" | Odpowiada **administrator**. Dostawca jest procesorem — trzeba go wybrać, zweryfikować i związać umową powierzenia |

# 7. Sankcje — dwa progi

| Próg | Czego dotyczy (przykładowo) |
|---|---|
| **do 10 000 000 EUR albo 2 % rocznego światowego obrotu** (kwota wyższa) | obowiązki administratora i procesora: art. 8, 11, 25–39, 42, 43 — w tym rejestr czynności, bezpieczeństwo, powierzenie, zgłaszanie naruszeń, IOD |
| **do 20 000 000 EUR albo 4 % rocznego światowego obrotu** (kwota wyższa) | zasady przetwarzania (art. 5), podstawy prawne (art. 6), warunki zgody (art. 7), dane szczególne (art. 9), **prawa osób (art. 12–22)**, transfery (art. 44–49) |

⚠️ [NIEWERYFIKOWANE — źródło: uodo.gov.pl, orzeczenia.uodo.gov.pl; sprawdź: art. 83 ust. 4, 5 i 6 RODO]

Niezależnie: **odpowiedzialność cywilna** wobec osób, których dane dotyczą — odszkodowanie za szkodę majątkową i niemajątkową (art. 82 RODO). Dla małego podmiotu to często ryzyko realniejsze niż kara administracyjna.

---

## Powiązania

- Kancelaria adwokacka jako JDG, strona www z formularzem → [02-kancelaria-adwokacka-jdg](02-kancelaria-adwokacka-jdg.md)
- Inspektor ochrony danych — kiedy obowiązkowy → [`spolki-medyczne/14-inspektor-ochrony-danych`](../spolki-medyczne/14-inspektor-ochrony-danych.md)
- RODO w gabinecie psychologicznym (dane o zdrowiu) → [`spolki-medyczne/08-rodo-i-dokumentacja`](../spolki-medyczne/08-rodo-i-dokumentacja.md)
- Pełna lista źródeł → [03-zrodla-i-akty](03-zrodla-i-akty.md)
