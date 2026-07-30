# 04. Strona kancelarii z formularzem na hostingu home.pl — cztery warstwy zgodności

Kazus: adwokat-JDG ma stronę internetową hostowaną na **home.pl**, z **formularzem kontaktowym**, przez który klienci zostawiają dane.

## ✅ Status weryfikacyjny

Rozdział utworzony **2026-07-29**. Skróty znaczników jak w rozdziale 02, dodatkowo:

- **`[VER-PKE]`** = ✅ [VER: api.sejm.gov.pl ELI DU/2024/1221 (Prawo komunikacji elektronicznej z 12.07.2024), 2026-07-29]
- **`[VER-uśude]`** = ✅ [VER: api.sejm.gov.pl ELI DU/2024/1513 (t.j. uśude z 10.10.2024), 2026-07-29]

Postanowienia home.pl są **stanem faktycznym po stronie dostawcy, nie prawem** — oznaczam je jako `📄 [ŹRÓDŁO: regulaminy.home.pl, odczyt 2026-07-29]`. Wzorce dostawcy się zmieniają: **przed użyciem sprawdź aktualną wersję i zapisz jej kopię z datą.**

---

# Warstwa 1: home.pl jest podmiotem przetwarzającym

Hosting to przechowywanie danych, a przechowywanie jest przetwarzaniem (art. 4 pkt 2 RODO wymienia je wprost). Dostawca wykonuje je w imieniu administratora, jest więc procesorem w rozumieniu art. 4 pkt 8, a warunkiem legalności jest umowa z art. 28 ust. 3. ✅ **[VER-RODO]**

Art. 28 ust. 3 wymaga, by umowa określała „przedmiot i czas trwania przetwarzania, charakter i cel przetwarzania, rodzaj danych osobowych oraz kategorie osób, których dane dotyczą, obowiązki i prawa administratora" oraz zawierała osiem elementów z lit. a–h — w tym lit. b (zobowiązanie osób do tajemnicy), lit. c (środki z art. 32), lit. h (udostępnianie informacji i **umożliwienie audytów**). ✅ **[VER-RODO]**

## Co faktycznie zawiera wzorzec home.pl

| Kwestia | Ustalenie z wzorca | Ocena |
|---|---|---|
| **sposób zawarcia** | „zawarta w trybie art. 384 Kodeksu cywilnego […] w toku procedury rejestracji Administratora danych w systemie informatycznym Podmiotu przetwarzającego" | umowa powstaje jako wzorzec przy rejestracji — **nie ma osobnego podpisu**. Trzeba pobrać jej treść i zachować z datą jako dowód (art. 5 ust. 2) |
| **kto jest kim** | klient = „Administrator danych", home.pl S.A. (Szczecin, KRS 0000431335) = „Podmiot przetwarzający" | zgodne z art. 4 pkt 7 i 8 |
| **zakres powierzenia (§ 2 ust. 1)** | administrator „oświadcza, iż powierza […] dane osobowe, **nie stanowiące szczególnej kategorii danych osobowych** […] obejmujące: imię i nazwisko, NIP, PESEL, adres zamieszkania, datę urodzenia, dane kontaktowe" | 🚩 **najpoważniejszy problem dla kancelarii** — patrz niżej |
| **środki bezpieczeństwa (§ 3 ust. 6)** | środki „adekwatne do rodzaju powierzonych mu danych osobowych, **zgodnie z opisem danych dokonanym przez Administratora danych w § 2 ust. 1**" | poziom zabezpieczeń jest skalibrowany do deklaracji o braku danych szczególnych |
| **wyłączenie odpowiedzialności (§ 5 ust. 3)** | home.pl „nie ponosi odpowiedzialności za brak zgodności zastosowanych środków […] do rodzaju powierzonych mu […] danych osobowych, jeśli środki te są zgodne z rodzajem danych osobowych **zadeklarowanym przez Administratora** danych w § 2 ust. 1" | ryzyko rozbieżności obciąża adwokata |
| **podpowierzenie (§ 4)** | zgoda ogólna + informowanie o zmianach „w formie wiadomości elektronicznej […] **lub ogólnego komunikatu na stronie internetowej**"; administrator „jest uprawniony zgłosić sprzeciw", ale sprzeciw „może skutkować niemożnością wykonania Umowy Głównej, a w konsekwencji […] rozwiązania Umowy Głównej" | konstrukcja dopuszczalna na tle art. 28 ust. 2, ale **powiadomienie przez komunikat na stronie oznacza obowiązek jej monitorowania** |
| **naruszenia (§ 5 ust. 2)** | home.pl zgłasza naruszenie administratorowi „niezwłocznie, nie później jednak niż w ciągu **48 godzin** od stwierdzenia" | art. 33 ust. 1 daje administratorowi 72 h **od stwierdzenia przez niego** — realnie zostaje mniej czasu na własną ocenę i zgłoszenie |
| **usunięcie danych (§ 3 ust. 4)** | „nie później niż w terminie **30 dni** od zakończenia Umowy Głównej" usuwa dane i kopie | zgodne z art. 28 ust. 3 lit. g |
| **audyt (§ 9 ust. 1 + Polityka prywatności)** | zasady kontroli poza umową, w Polityce prywatności: audyt elektroniczny **bezpłatnie raz na 12 miesięcy**, każdy kolejny odpłatnie wg cennika; audyt osobisty w siedzibie **płatny**, min. 21 dni uprzedzenia | art. 28 ust. 3 lit. h jest formalnie obsłużony, ale odpłatnie i limitowo |
| **limit odpowiedzialności (§ 5 ust. 5)** | maksymalnie kwota zapłacona za usługi z 12 miesięcy poprzedzających zdarzenie; limit nie dotyczy szkód wyrządzonych umyślnie | przy karze z art. 83 lub roszczeniu z art. 82 RODO regres będzie **znikomy** wobec potencjalnej szkody |
| **certyfikacja** | oświadczenie o ISO/IEC 27001 (§ 1 ust. 3) | użyteczny dowód „wystarczających gwarancji" z art. 28 ust. 1 — dołączyć do dokumentacji |
| **EOG / państwa trzecie** | we wzorcu umowy powierzenia **brak jakiegokolwiek postanowienia** o przekazywaniu danych poza EOG | 🚩 do ustalenia odrębnie — rozdział V RODO (art. 44–49) |
| **podstawa przetwarzania (§ 3a ust. 2)** | administrator gwarantuje istnienie ważnej podstawy, „w tym w szczególności **zgody** podmiotu, którego dane osobowe dotyczą" | u adwokata podstawą jest art. 6 ust. 1 lit. b/c/f, nie zgoda — postanowienie nie zmienia prawa, ale nie należy z niego wyprowadzać obowiązku zbierania zgód |

📄 [ŹRÓDŁO: `regulaminy.home.pl/umowa-powierzenia-przetwarzania-danych-osobowych.pdf` oraz `regulaminy.home.pl/Polityka-prywatnosci-home.pl.pdf`, odczyt 2026-07-29]

## 🚩 Kluczowa rozbieżność: § 2 ust. 1 wzorca a rzeczywistość kancelarii

Wzorzec zakłada, że powierzane dane **nie są szczególnymi kategoriami**, i wymienia zamknięty katalog (imię i nazwisko, NIP, PESEL, adres, data urodzenia, dane kontaktowe). Tymczasem formularz na stronie kancelarii z otwartym polem „opisz sprawę" generuje ruch, w którym regularnie znajdą się:

- dane o zdrowiu, życiu seksualnym, poglądach — art. 9 ust. 1 RODO,
- dane o wyrokach skazujących i czynach zabronionych — art. 10 RODO,
- informacje objęte **tajemnicą adwokacką od chwili ich powzięcia** (art. 6 ust. 1 Prawa o adwokaturze — „wszystko, o czym dowiedział się w związku z udzielaniem pomocy prawnej"), a wiadomość z formularza od osoby szukającej pomocy prawnej mieści się w tym zakresie.

Skutek prawny: deklaracja z § 2 ust. 1 przestaje odpowiadać stanowi faktycznemu, a § 3 ust. 6 i § 5 ust. 3 przenoszą konsekwencje tej rozbieżności **na adwokata**. Dodatkowo art. 28 ust. 3 wymaga, by umowa określała „rodzaj danych osobowych" — jeżeli określa go nieprawdziwie, wymóg nie jest spełniony materialnie.

**Trzy wyjścia, w kolejności od najlepszego:**

1. **Zaprojektować formularz tak, żeby dane szczególnych kategorii do niego nie trafiały** — patrz Warstwa 2. To jedyne rozwiązanie, które likwiduje problem, a nie przenosi go.
2. **Wystąpić do home.pl o indywidualną umowę powierzenia** obejmującą dane szczególnych kategorii, z odpowiednim poziomem zabezpieczeń. Zachować korespondencję.
3. **Przenieść skrzynkę i formularz do dostawcy, którego DPA obejmuje dane wrażliwe**, a hosting na home.pl zostawić dla treści statycznych.

Bez żadnego z tych kroków ryzyko jest realne: kara z art. 83 ust. 4 lit. a RODO (do 10 mln EUR / 2 % obrotu) za naruszenie art. 28 i art. 32, przy praktycznie zerowym regresie wobec dostawcy (limit z § 5 ust. 5).

## Czynności do wykonania w Warstwie 1

- [ ] pobrać aktualny wzorzec umowy powierzenia i Politykę prywatności home.pl, zapisać PDF-y **z datą** w dokumentacji RODO
- [ ] sprawdzić w panelu klienta, czy umowa powierzenia jest odnotowana jako zawarta, i zachować dowód
- [ ] ustalić **listę podprocesorów** i **lokalizację przetwarzania** — czy dane pozostają w EOG (wzorzec o tym milczy); jeżeli nie, uruchomić art. 44–49 RODO
- [ ] udokumentować weryfikację dostawcy z art. 28 ust. 1 — certyfikat ISO/IEC 27001 + opis środków
- [ ] rozstrzygnąć problem § 2 ust. 1 jednym z trzech wyjść powyżej i **zapisać uzasadnienie decyzji**
- [ ] wpisać home.pl do rejestru czynności jako procesora (art. 30 ust. 1 lit. d)
- [ ] uwzględnić w procedurze naruszeń, że sygnał od home.pl przychodzi **do 48 h**, a własne zgłoszenie do UODO ma **72 h** od stwierdzenia

# Warstwa 2: formularz — podstawa, informacja, minimalizacja

**Podstawa prawna.** Osoba wypełniająca formularz zmierza zwykle do nawiązania współpracy → **art. 6 ust. 1 lit. b** („podjęcie działań na żądanie osoby, której dane dotyczą, przed zawarciem umowy"). Alternatywnie **lit. f** (prawnie uzasadniony interes w obsłudze zapytań). ✅ **[VER-RODO]** art. 6 ust. 1 lit. b i f

**Zgoda (lit. a) jest tu podstawą gorszą** — jest odwoływalna w każdej chwili (art. 7 ust. 3), a odwołanie nie usuwa potrzeby odpowiedzi na zapytanie. Jeżeli podstawą jest lit. b lub f, **checkbox „wyrażam zgodę na przetwarzanie danych" jest zbędny i wprowadza w błąd**. Zgodę zbiera się tylko na to, co jej rzeczywiście wymaga — newsletter, marketing.

**Obowiązek informacyjny.** Dane pochodzą bezpośrednio od osoby, więc działa art. 13, a informację podaje się „podczas pozyskiwania danych osobowych" — czyli przy formularzu, nie w odpowiedzi na zapytanie. Zakres z art. 13 ust. 1 i 2 obejmuje m.in.: tożsamość i dane kontaktowe administratora (lit. a), dane IOD jeśli jest (lit. b), „cele przetwarzania danych osobowych, oraz podstawę prawną przetwarzania" (lit. c), przy lit. f — wskazanie prawnie uzasadnionych interesów (lit. d), odbiorców lub kategorie odbiorców (lit. e), okres przechowywania albo kryteria jego ustalania (ust. 2 lit. a), prawa osoby (lit. b), prawo skargi do organu (lit. d) oraz informację, „czy podanie danych osobowych jest wymogiem ustawowym lub umownym lub warunkiem zawarcia umowy" (lit. e). ✅ **[VER-RODO]** art. 13 ust. 1 i 2

Wykonanie techniczne: pod formularzem skrót z najważniejszymi elementami + link do pełnej polityki prywatności. Sam link bez treści nie wystarcza.

**Minimalizacja (art. 5 ust. 1 lit. c — „adekwatne, stosowne oraz ograniczone do tego, co niezbędne").** Dla kancelarii to nie ozdoba, lecz główny mechanizm redukcji ryzyka z Warstwy 1:

- pola obowiązkowe: **imię + e-mail** (albo telefon) — nic więcej,
- **nie pytać** o PESEL, adres zamieszkania, numer sprawy, dane przeciwnika,
- przy polu opisowym ostrzeżenie: *„Prosimy nie przesyłać przez formularz szczegółów sprawy ani danych innych osób — skontaktujemy się, żeby umówić rozmowę"*,
- rozważyć rezygnację z pola opisowego na rzecz wyboru z listy („sprawa cywilna / karna / rodzinna / inna") — kategoria sprawy to znacznie mniej niż opis,
- 🚩 wybór „sprawa karna" albo „rodzinna" sam może być daną z art. 9 lub 10 w powiązaniu z nadawcą — jeżeli lista ma być użyta, lepiej ograniczyć ją do neutralnych pozycji typu „konsultacja / współpraca / inne".

**Retencja.** Ustalić i zapisać osobno: zapytania bez dalszej współpracy (np. 3–6 miesięcy) i zapytania, które przeszły w sprawę (wchodzą do akt — reżim art. 16c Prawa o adwokaturze, rozdział 02 § 4).

**Bezpieczeństwo transmisji (art. 32 ust. 1 lit. a).** HTTPS na całej stronie, formularz nie wysyłający treści zapytania e-mailem otwartym tekstem do skrzynki na zewnętrznym serwerze, ograniczenie kręgu osób z dostępem do skrzynki.

# Warstwa 3: cookies i marketing — Prawo komunikacji elektronicznej, nie RODO

Zgoda na przechowywanie informacji w urządzeniu końcowym nie wynika z RODO, lecz z przepisów o komunikacji elektronicznej. **Od 10 listopada 2024 r. jest to ustawa z 12 lipca 2024 r. – Prawo komunikacji elektronicznej (Dz.U. 2024 poz. 1221)**, która zastąpiła Prawo telekomunikacyjne.

## Cookies — art. 399 PKE

> „1. Przechowywanie informacji lub uzyskiwanie dostępu do informacji już przechowywanej w telekomunikacyjnym urządzeniu końcowym abonenta lub użytkownika końcowego jest dozwolone, pod warunkiem że: 1) abonent lub użytkownik końcowy zostanie uprzednio poinformowany w sposób jednoznaczny, łatwy i zrozumiały, o: a) celu przechowywania i uzyskiwania dostępu do tej informacji, b) możliwości określenia przez niego warunków przechowywania lub uzyskiwania dostępu do tej informacji za pomocą ustawień oprogramowania […]; 2) abonent lub użytkownik końcowy, po otrzymaniu informacji, o których mowa w pkt 1, **wyrazi na to zgodę**; 3) przechowywana informacja lub uzyskiwanie do niej dostępu nie powoduje zmian konfiguracyjnych w telekomunikacyjnym urządzeniu końcowym […]"

✅ **[VER-PKE]** art. 399 ust. 1

Wyjątek z ust. 3 — zgoda nie jest potrzebna, gdy przechowywanie lub dostęp jest konieczne „1) do wykonania transmisji komunikatu elektronicznego za pośrednictwem publicznej sieci telekomunikacyjnej lub 2) dostarczania usługi telekomunikacyjnej lub usługi świadczonej drogą elektroniczną, **żądanej** przez abonenta lub użytkownika końcowego". ✅ **[VER-PKE]** art. 399 ust. 3

Do zgody stosuje się przepisy o ochronie danych osobowych — art. 400 PKE: „Do uzyskania zgody abonenta lub użytkownika końcowego stosuje się odpowiednio przepisy o ochronie danych osobowych." ✅ **[VER-PKE]** Czyli standard zgody z art. 4 pkt 11 i art. 7 RODO: dobrowolna, konkretna, świadoma, jednoznaczna, odwoływalna.

**Konsekwencje dla strony kancelarii:**

- cookies niezbędne (sesja, bezpieczeństwo) — bez zgody, na podstawie art. 399 ust. 3 pkt 2,
- cookies analityczne i marketingowe (Google Analytics, piksele, statystyki hostingu) — **zgoda przed zapisaniem**,
- odmowa musi być równie łatwa jak zgoda (wynika z art. 400 PKE w zw. z art. 7 ust. 3 RODO), a domyślnie zaznaczone checkboxy zgodą nie są,
- Google Analytics dokłada warstwę transferu do państwa trzeciego — art. 44 RODO: przekazanie „następuje tylko, gdy […] administrator i podmiot przetwarzający spełnią warunki określone w niniejszym rozdziale" ✅ **[VER-RODO]**.

**Rekomendacja:** dla strony-wizytówki z formularzem najprostszym rozwiązaniem zgodnościowym jest **rezygnacja z analityki**. Znika baner, znika transfer, zostaje polityka prywatności i art. 13. Jeżeli statystyki są potrzebne — wybrać narzędzie działające bez zapisu w urządzeniu i bez transferu poza EOG.

## Marketing e-mail — art. 398 PKE, a NIE art. 10 uśude

🚩 **Pułapka aktualności.** Wzory polityk krążące w internecie powołują art. 10 ustawy o świadczeniu usług drogą elektroniczną. **Art. 10 uśude jest uchylony** — w t.j. z 10.10.2024 widnieje jako „(uchylony)", uchylony przez art. 26 pkt 3 przepisów wprowadzających PKE (Dz.U. 2024 poz. 1222). ✅ **[VER-uśude]** art. 10

Materię tę reguluje dziś art. 398 PKE:

> „1. Zakazane jest używanie: 1) automatycznych systemów wywołujących, 2) telekomunikacyjnych urządzeń końcowych, w szczególności w ramach korzystania z usług komunikacji interpersonalnej – do celów przesyłania informacji handlowej w rozumieniu przepisów ustawy z dnia 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną, w tym marketingu bezpośredniego, do abonenta lub użytkownika końcowego, **chyba że uprzednio wyraził on na to zgodę**.
> 2. Zgoda […] może być wyrażona przez udostępnienie przez abonenta lub użytkownika końcowego identyfikującego go adresu elektronicznego […] w celu przesyłania informacji handlowej na podany […] adres elektroniczny.
> […] 4. Działanie, o którym mowa w ust. 1, stanowi czyn nieuczciwej konkurencji […]"

✅ **[VER-PKE]** art. 398

Dla adwokata istotne jest też, że „informacja handlowa" z art. 2 pkt 2 uśude obejmuje wprost promowanie „wizerunku przedsiębiorcy **lub osoby wykonującej zawód, której prawo do wykonywania zawodu jest uzależnione od spełnienia wymagań określonych w odrębnych ustawach**" ✅ **[VER-uśude]** — czyli newsletter kancelarii jest informacją handlową. Osobno obowiązują ograniczenia reklamy z Zbioru Zasad Etyki Adwokackiej ⚠️ [NIEWERYFIKOWANE — akt samorządowy, nie ma go w lokalnej bazie].

# Warstwa 4: obowiązki z ustawy o świadczeniu usług drogą elektroniczną

Adwokat prowadzący stronę z formularzem jest **usługodawcą** w rozumieniu art. 2 pkt 6 uśude („osobę fizyczną […], która prowadząc, chociażby ubocznie, działalność zarobkową lub zawodową świadczy usługi drogą elektroniczną") ✅ **[VER-uśude]**.

## Obowiązek informacyjny — art. 5 uśude, w tym ust. 5 pisany pod zawody regulowane

> „1. Usługodawca podaje, w sposób wyraźny, jednoznaczny i bezpośrednio dostępny poprzez system teleinformatyczny, którym posługuje się usługobiorca, informacje podstawowe określone w ust. 2–5.
> 2. Usługodawca podaje: 1) adresy elektroniczne; 2) imię, nazwisko, miejsce zamieszkania i adres albo nazwę lub firmę oraz siedzibę i adres. […]
> 5. Jeżeli usługodawcą jest osoba fizyczna, której prawo do wykonywania zawodu jest uzależnione od spełnienia określonych w odrębnych ustawach wymagań, podaje również: 1) w przypadku ustanowienia pełnomocnika, jego imię, nazwisko, miejsce zamieszkania i adres albo jego nazwę lub firmę oraz siedzibę i adres; 2) **samorząd zawodowy, do którego należy**; 3) **tytuł zawodowy, którego używa, oraz państwo, w którym został on przyznany**; 4) **numer w rejestrze publicznym, do którego jest wpisany** wraz ze wskazaniem nazwy rejestru i organu prowadzącego rejestr […]"

✅ **[VER-uśude]** art. 5 ust. 1, 2 i 5

**To przepis pisany wprost dla adwokata i najczęściej pomijany na stronach kancelarii.** Na stronie muszą być: imię i nazwisko, adres, adres e-mail, **izba adwokacka**, **tytuł zawodowy „adwokat" i państwo jego przyznania** oraz **numer na liście adwokatów z nazwą listy i organem ją prowadzącym**. Naruszenie art. 5 jest wykroczeniem — art. 23 uśude: „Kto wbrew obowiązkom określonym w art. 5 nie podaje danych, o których mowa w art. 5 ust. 2, 3 lub 5, albo podaje dane nieprawdziwe lub niepełne, podlega karze grzywny." ✅ **[VER-uśude]**

Dodatkowo art. 5 ust. 4 uśude odsyła do art. 20 ust. 3 Prawa przedsiębiorców w zakresie podawania **NIP** w ofercie. ⚠️ [Prawo przedsiębiorców — nie ma go jeszcze w lokalnej bazie]

## Regulamin — art. 8 uśude

Usługodawca „określa regulamin świadczenia usług drogą elektroniczną" i „nieodpłatnie udostępnia usługobiorcy regulamin **przed zawarciem umowy** o świadczenie takich usług", a na żądanie — w sposób umożliwiający „pozyskanie, odtwarzanie i utrwalanie treści regulaminu". Regulamin określa w szczególności rodzaje i zakres usług, warunki świadczenia (w tym wymagania techniczne i zakaz dostarczania treści bezprawnych), warunki zawierania i rozwiązywania umów oraz **tryb postępowania reklamacyjnego**. Postanowienia nieudostępnione nie wiążą usługobiorcy (ust. 2). ✅ **[VER-uśude]** art. 8

⚠️ **Czy sam formularz kontaktowy to już usługa świadczona drogą elektroniczną?** Definicja z art. 2 pkt 4 uśude wymaga „wykonania usługi świadczonej bez jednoczesnej obecności stron (na odległość), poprzez przekaz danych na indywidualne żądanie usługobiorcy". Formularz spełnia kryteria techniczne, ale sporne jest, czy samo przyjęcie zapytania jest „usługą". Newsletter, konto klienta, czat czy pobieranie wzorów — bez wątpienia tak. **Rozstrzygnięcie praktyczne:** regulamin jest tani, spór o kwalifikację nie — jeżeli strona ma formularz, warto mieć krótki regulamin, choćby jednostronicowy.

Uwaga systemowa: art. 4 uśude — „Jeżeli ustawa wymaga uzyskania zgody usługobiorcy, stosuje się przepisy o ochronie danych osobowych" ✅ **[VER-uśude]**. Standard zgody jest więc jednolity w RODO, PKE i uśude.

# Checklista wdrożeniowa — strona kancelarii

**Dokumenty na stronie:**
- [ ] polityka prywatności z pełną treścią art. 13 ust. 1 i 2 RODO
- [ ] skrócona informacja przy formularzu + link do polityki
- [ ] dane z art. 5 ust. 2 i **ust. 5** uśude: imię, nazwisko, adres, e-mail, izba adwokacka, tytuł zawodowy + państwo, numer na liście adwokatów z organem prowadzącym; NIP w ofercie
- [ ] regulamin świadczenia usług drogą elektroniczną (art. 8 uśude)
- [ ] polityka cookies powołująca **art. 399 PKE** — nie art. 173 Prawa telekomunikacyjnego
- [ ] baner cookies z równie łatwą odmową jak zgodą — **albo brak analityki i brak banera**

**Dokumenty w kancelarii:**
- [ ] pobrany i datowany wzorzec umowy powierzenia home.pl + Polityka prywatności home.pl
- [ ] rozstrzygnięcie problemu § 2 ust. 1 (dane szczególnych kategorii) + uzasadnienie na piśmie
- [ ] lista podprocesorów home.pl i ustalenie lokalizacji przetwarzania (EOG?)
- [ ] dowód weryfikacji dostawcy z art. 28 ust. 1 (ISO/IEC 27001)
- [ ] wpis procesu „formularz kontaktowy" do rejestru czynności (art. 30 ust. 1)
- [ ] polityka retencji zapytań z formularza
- [ ] procedura naruszeń uwzględniająca 48-godzinny sygnał od home.pl wobec 72 h z art. 33

**Konfiguracja techniczna:**
- [ ] HTTPS na całej stronie
- [ ] pola obowiązkowe ograniczone do imienia i kanału kontaktu
- [ ] ostrzeżenie przy polu opisowym, żeby nie przesyłać szczegółów sprawy
- [ ] MFA na skrzynce odbierającej zapytania, ograniczony krąg dostępu
- [ ] jeśli analityka zostaje — mechanizm blokujący skrypty przed uzyskaniem zgody

## Powiązania

- Obowiązki kancelarii, tajemnica, retencja → [02-kancelaria-adwokacka-jdg.md](02-kancelaria-adwokacka-jdg.md)
- Zakres stosowania i sankcje → [01-zakres-stosowania-rodo.md](01-zakres-stosowania-rodo.md)
- Źródła i aktualność → [03-zrodla-i-akty.md](03-zrodla-i-akty.md)
