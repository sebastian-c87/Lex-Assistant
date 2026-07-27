# Źródła i weryfikacja szablonów 01–03

Warstwa weryfikacyjna dla wszystkich wzorów w katalogu `szablony/`. W treści szablonów świadomie nie ma znaczników ELI — są tutaj.

**Data weryfikacji wszystkich pozycji ✅: 2026-07-21** (data pobrania aktów do `akty/`, zgodnie z `manifest.json`).
**Data opracowania szablonów: 2026-07-27.**

---

## Metoda weryfikacji

Każdy przepis powołany w szablonach 01–03 został odczytany **z lokalnego pliku indeksowego** w katalogu `akty/`, nie z pamięci. Pliki indeksowe powstały z tekstów jednolitych pobranych z `api.sejm.gov.pl/eli`.

**Ograniczenie tej sesji:** polityka sieciowa środowiska blokowała `api.sejm.gov.pl` i `isap.sejm.gov.pl` (odmowa tunelu CONNECT, HTTP 403), więc **nie było możliwe potwierdzenie, czy od 2026-07-21 nie ukazał się nowszy tekst jednolity** któregokolwiek z aktów ani weryfikacja aktów spoza lokalnej bazy. Instrukcja odblokowania: `HANDOFF.md`, sekcja 3a.

**Przed użyciem szablonu wobec klienta wykonaj:**
```bash
node fetch-laws.js --check    # czy któryś z aktów się zmienił od 2026-07-21
```

## Akty użyte w szablonach

| Akt | Skrót | ELI | Plik lokalny |
|---|---|---|---|
| Kodeks spółek handlowych (t.j.) | KSH | **DU/2024/18** | `akty/ksh/kodeks_spolek_handlowych_tekst_jednolity_.index.json` |
| Ustawa o działalności leczniczej (t.j. z 5.02.2026) | u.dz.l. | **DU/2026/156** | `akty/prawo_medyczne/ustawa_o_dzialalnosci_leczniczej_t_j_z_5_02_2026_.index.json` |
| Ustawa o prawach pacjenta i Rzeczniku Praw Pacjenta (t.j.) | u.p.p. | **DU/2024/581** | `akty/prawo_medyczne/ustawa_o_prawach_pacjenta_i_rzeczniku_praw_pacjenta_tekst_jednolity_.index.json` |
| Ustawa o zawodzie psychologa i samorządzie zawodowym psychologów z 2001 (t.j. z 2019) — obowiązuje do 19.05.2028 | u.psy 2001 | **DU/2019/1026** | `akty/prawo_medyczne/ustawa_o_zawodzie_psychologa_i_samorzadzie_zawodowym_psychologow_--_stara_ustawa_z_2001_t_j_z_2019_obowiazuje_do_2028-05-19.index.json` |
| Ustawa o zawodzie psychologa oraz samorządzie zawodowym psychologów z 2026 — główny zrąb od 19.05.2028 | u.psy 2026 | **DU/2026/187** | `akty/prawo_medyczne/ustawa_o_zawodzie_psychologa_oraz_samorzadzie_zawodowym_psychologow_--_nowa_ustawa_podpisana_12_02_2026_wchodzi_w_zycie_glownie_19_05_2028.index.json` |

Wszystkie ✅ [VER: api.sejm.gov.pl ELI jak w tabeli, 2026-07-21]

---

# 1. Kodeks spółek handlowych — DU/2024/18

✅ [VER: api.sejm.gov.pl ELI DU/2024/18, 2026-07-21]

## 1.1. Definicje i przepisy ogólne

| Przepis | Treść wykorzystana | Gdzie użyto |
|---|---|---|
| art. 4 § 1 pkt 9 | „głosy – głosy »za«, »przeciw« lub »wstrzymujące się« oddane podczas głosowania w sposób zgodny z ustawą, umową albo statutem spółki" | 02: Część I.5 |
| art. 4 § 1 pkt 10 | „bezwzględna większość głosów – więcej niż połowę głosów oddanych" | 02: Część I.4, I.5; 01: ostrzeżenie o kworum |
| art. 12 | spółka w organizacji z chwilą wpisu do rejestru staje się sp. z o.o. i uzyskuje osobowość prawną | 01: komentarz do § 7 |

## 1.2. Powstanie spółki i treść umowy

| Przepis | Treść wykorzystana | Gdzie użyto |
|---|---|---|
| art. 154 § 1–3 | kapitał min. 5000 zł; wartość nominalna udziału min. 50 zł; zakaz obejmowania poniżej wartości nominalnej | 01: § 5, § 6 |
| art. 157 § 1 | **obligatoryjna treść umowy** — firma i siedziba, przedmiot działalności, kapitał, czy wspólnik może mieć więcej niż jeden udział, liczba i wartość nominalna udziałów, czas trwania jeżeli oznaczony | 01: Część I klasa 1; §§ 1–3, 5–7 |
| art. 157 § 2 | forma aktu notarialnego | 01: nagłówek, Część I |
| art. 157¹ § 1–5 | wzorzec umowy (S24) | 01: komentarz do § 7 |
| art. 158 § 1 | przy aporcie umowa **szczegółowo określa** przedmiot wkładu, osobę wnoszącego, liczbę i wartość nominalną objętych udziałów | 01: Część I klasa 2; wariant przy § 7 |
| art. 158 § 1¹ | przy wzorcu umowy **wyłącznie wkłady pieniężne**; pokrycie do 7 dni od wpisu | 01: Część I klasa 2, wariant przy § 7; 03: 1.1 |
| art. 158 § 2 | zakaz wypłaty wynagrodzenia za usługi przy powstaniu spółki ze środków na pokrycie kapitału | 01: § 7 ust. 4, § 30 ust. 4 |
| art. 158 § 3 | przedmiot wkładu do wyłącznej dyspozycji zarządu | 01: § 7 ust. 5 |
| art. 159 | szczególne korzyści wspólnika i obowiązki inne niż wniesienie wkładu — **pod rygorem bezskuteczności wobec spółki** dokładnie określić w umowie | 01: Część I klasa 2; § 12; klauzula C.4; 03: 1.4 |
| art. 160 § 1–2 | firma musi zawierać „spółka z ograniczoną odpowiedzialnością"; dopuszczalny skrót | 01: § 1 |
| art. 161 § 1 | spółka w organizacji powstaje z chwilą zawarcia umowy | 03: 1.1 (oznaczenie „w organizacji") |
| art. 163 | przesłanki powstania spółki: umowa, wkłady, zarząd, RN/komisja gdy wymagana, wpis | 01: Część I |
| art. 164 § 1 | zarząd zgłasza zawiązanie; wniosek podpisują **wszyscy** członkowie zarządu | 03: Część I |
| art. 164 § 3 | sąd nie może odmówić wpisu z powodu drobnych uchybień | 03: Część I (kontekst) |
| art. 166 § 1 | treść zgłoszenia, w tym **adresy do doręczeń elektronicznych członków zarządu** | 03: 1.3 |
| art. 167 § 1 | załączniki: umowa, oświadczenie zarządu o wniesieniu wkładów, dowód ustanowienia organów | 03: Część I, 1.1 |
| art. 167 § 2 | lista wspólników podpisana przez wszystkich członków zarządu | 03: 1.2 |
| art. 167 § 4–5 | odrębności przy wzorcu umowy; oświadczenie w 7 dni od wpisu | 03: 1.1 |
| art. 169 § 1–2 | **6 miesięcy** na zgłoszenie (7 dni przy wzorcu); sankcja — rozwiązanie umowy spółki | 01: Część I; `wiedza/…/07` |

## 1.3. Udziały, prawa i obowiązki wspólników

| Przepis | Treść wykorzystana | Gdzie użyto |
|---|---|---|
| art. 173 § 1 | w spółce jednoosobowej oświadczenie wspólnika składane spółce — forma pisemna pod rygorem nieważności | 01: kontekst art. 210 § 2 |
| art. 174 § 1 | równe prawa i obowiązki, jeżeli ustawa lub umowa nie stanowi inaczej | 01: § 6 ust. 2 |
| art. 174 § 2–3 | udziały uprzywilejowane — uprawnienia **muszą być określone w umowie**; uprzywilejowanie głosowe tylko przy równej wartości nominalnej | 01: klauzula C.1, C.2 |
| art. 174 § 4 | **maks. 3 głosy na jeden udział**; dywidenda nie może naruszać art. 196 | 01: Część I klasa 4; C.1 |
| art. 174 § 6 | zakaz dokumentów na okaziciela, imiennych i na zlecenie na udziały | 01: § 6 ust. 5; klasa 4 |
| art. 175 § 1–2 | znaczne zawyżenie aportu — solidarna odpowiedzialność wspólnika i członków zarządu; **nie można z niej zwolnić** | 01: klasa 4, wariant przy § 7; 03: 1.1 |
| art. 176 § 1 | powtarzające się świadczenia niepieniężne — umowa **oznacza rodzaj i zakres** | 01: § 10 ust. 1 |
| art. 176 § 2 | wynagrodzenie wypłacane także gdy brak zysku; **nie może przewyższać cen lub stawek przyjętych w obrocie** | 01: § 10 ust. 5–6 |
| art. 176 § 3 | przy powtarzających się świadczeniach zbycie lub obciążenie udziału wymaga zgody spółki | 01: § 10 ust. 8 |
| art. 177 § 1 | dopłaty — **w granicach liczbowo oznaczonej wysokości w stosunku do udziału** | 01: § 11 ust. 1 |
| art. 177 § 2 | dopłaty nakładane i uiszczane **równomiernie** w stosunku do udziałów | 01: § 11 ust. 3; 02: wzór 10 |
| art. 180 § 1 | zbycie udziału — forma pisemna z podpisami notarialnie poświadczonymi | 01: § 14 ust. 5; 03: 3.1 |
| art. 182 § 1 | umowa może uzależnić zbycie od zgody spółki albo inaczej ograniczyć | 01: § 14 ust. 1 |
| art. 182 § 3 | zgody udziela **zarząd w formie pisemnej**; przy odmowie sąd rejestrowy może pozwolić na zbycie przy ważnych powodach | 01: komentarz § 14; 02: wzór 11 |
| art. 182 § 4–5 | spółka może przedstawić innego nabywcę; cenę i termin ustala sąd rejestrowy | 02: wzór 11 |
| art. 183 § 1 | ograniczenie/wyłączenie wstąpienia spadkobierców — umowa **powinna określać warunki spłaty pod rygorem bezskuteczności** | 01: § 15 ust. 3; klasa 2 |
| art. 183 § 2–3 | podział udziałów między spadkobierców; nie mogą powstać udziały niższe niż 50 zł | 01: § 15 ust. 4 |
| art. 184 § 1–2 | współuprawnieni — wspólny przedstawiciel, odpowiedzialność solidarna | 01: § 15 ust. 4 |
| art. 187 § 1 | zawiadomienie spółki z dowodem; skuteczność wobec spółki od chwili otrzymania | 01: § 14 ust. 6; 03: 2.1, 3.1 |
| art. 187 § 2 | umowa może przewidywać wykonywanie prawa głosu przez zastawnika lub użytkownika | 01: § 14 ust. 7 |
| art. 188 § 1 | **księga udziałów** — obowiązek zarządu i zakres wpisów | 03: 2.1 |
| art. 188 § 2 | każdy wspólnik może przeglądać księgę udziałów | 03: 2.1 |
| art. 188 § 3 | po każdej zmianie — nowa lista wspólników do sądu rejestrowego, podpisana przez wszystkich członków zarządu | 03: 1.2, 2.1; 02: wzór 11 |
| art. 189 § 1–2 | zakaz zwrotu wkładów w czasie trwania spółki | 01: § 7 ust. 6; klasa 4 |
| art. 191 § 1 | prawo do udziału w zysku przeznaczonym do podziału uchwałą | 01: § 26 ust. 1 |
| art. 191 § 2–3 | umowa może przewidywać inny sposób podziału zysku; domyślnie proporcjonalnie do udziałów | 01: § 26 ust. 2 |
| art. 192 | granica kwoty przeznaczonej do podziału | 01: § 26 ust. 5; 02: wzór 3 |
| art. 193 § 1 | uprawnieni do dywidendy — wspólnicy z dnia powzięcia uchwały o podziale zysku | 02: wzór 3 |
| art. 193 § 2–3 | **dzień dywidendy tylko przy upoważnieniu w umowie**; wyznaczany w ciągu 2 miesięcy od uchwały | 01: § 26 ust. 4; 02: wzór 3 |
| art. 193 § 4 | dzień wypłaty dywidendy | 02: wzór 3 |
| art. 194 | **zaliczka na dywidendę tylko przy upoważnieniu zarządu w umowie** | 01: § 27; klasa 2 |
| art. 196 | dywidenda uprzywilejowana — nie więcej niż o połowę wyższa; brak pierwszeństwa zaspokojenia bez odmiennego postanowienia | 01: klauzula C.2; klasa 4 |
| art. 197 | dywidenda uprzywilejowana zaległa — umowa określa najwyższą liczbę lat, **maks. 5** | 01: klauzula C.2; klasa 4 |
| art. 198 § 1 | zwrot wypłaty otrzymanej wbrew prawu lub umowie; solidarna odpowiedzialność członków organów | 01: komentarz do § 10 ust. 5 |
| art. 199 § 1 | umorzenie **tylko gdy umowa tak stanowi**; przesłanki i tryb umorzenia przymusowego określa umowa | 01: § 16 ust. 1, 3; klasa 2 |
| art. 199 § 2 | uchwała określa podstawę prawną i wysokość wynagrodzenia; dolna granica przy umorzeniu przymusowym; **obowiązek uzasadnienia** | 01: § 16 ust. 4; 02: wzór 12 |
| art. 199 § 3 | za zgodą wspólnika umorzenie bez wynagrodzenia | 01: § 16 ust. 5 |
| art. 199 § 4–5 | umorzenie automatyczne po ziszczeniu się zdarzenia, bez uchwały; uchwała zarządu o obniżeniu kapitału | 01: klauzula C.3 |
| art. 199 § 6–7 | umorzenie z czystego zysku bez obniżenia kapitału | 01: § 16 ust. 6 |
| art. 200 § 1 | zakaz obejmowania i nabywania udziałów własnych, z wyjątkami (m.in. nabycie w celu umorzenia) | 01: § 23 ust. 5 pkt 4 |
| art. 212 § 1 | prawo kontroli każdego wspólnika — księgi i dokumenty, bilans, wyjaśnienia od zarządu | 01: § 8 ust. 1 |
| art. 212 § 2–4 | odmowa wyjaśnień przy uzasadnionej obawie wykorzystania na szkodę spółki; uchwała wspólników; wniosek do sądu w 7 dni | 01: komentarz do § 8 |
| art. 266 § 1 | wyłączenie wspólnika przez sąd — na żądanie wszystkich pozostałych, których udziały stanowią **więcej niż połowę kapitału** | 01: § 24 komentarz — **droga zamknięta przy 50/50** |
| art. 266 § 2–3 | umowa może przyznać prawo mniejszej liczbie wspólników, gdy ich udziały stanowią więcej niż połowę kapitału; obowiązek przejęcia udziałów, cenę ustala sąd | 01: § 24 komentarz |

## 1.4. Zarząd

| Przepis | Treść wykorzystana | Gdzie użyto |
|---|---|---|
| art. 201 § 1–3 | zarząd prowadzi sprawy i reprezentuje; jeden lub więcej członków; wspólnicy lub osoby spoza | 01: § 17 ust. 1, § 19 ust. 1 |
| art. 201 § 4 | członek zarządu powoływany i odwoływany **uchwałą wspólników, chyba że umowa stanowi inaczej** | 01: § 17 ust. 2 |
| art. 201 § 5 | uchwała lub umowa może określać wymagania wobec kandydatów | 01: § 17 ust. 7 |
| art. 202 § 1 | bez odmiennego postanowienia mandat wygasa po zatwierdzeniu sprawozdania za **pierwszy pełny rok obrotowy** | 01: komentarz do § 17 ust. 3 — kluczowa pułapka |
| art. 202 § 2 | przy powołaniu na okres dłuższy niż rok — mandat do zatwierdzenia sprawozdania za ostatni pełny rok kadencji; kadencję liczy się w pełnych latach obrotowych | 01: § 17 ust. 3–4 |
| art. 202 § 3 | wspólna kadencja — mandat dokooptowanego wygasa z mandatami pozostałych | 01: § 17 ust. 5 |
| art. 202 § 4–5 | wygaśnięcie mandatu wskutek śmierci, rezygnacji, odwołania; do rezygnacji stosuje się przepisy o wypowiedzeniu zlecenia | 01: § 17 ust. 4; 03: 3.4 |
| art. 202 § 6 | gdy w wyniku rezygnacji żaden mandat nie byłby obsadzony — rezygnacja wspólnikom **wraz ze zwołaniem zgromadzenia** | 03: 3.4 |
| art. 203 § 1 | odwołanie w każdym czasie uchwałą wspólników | 01: komentarz do § 17 ust. 6 |
| art. 203 § 2 | **umowa może ograniczyć prawo odwołania do ważnych powodów** | 01: § 17 ust. 6 |
| art. 203 § 3 | były członek zarządu — obowiązek wyjaśnień i prawo udziału w zgromadzeniu zatwierdzającym sprawozdania | 03: 3.4; 02: wzór 5–6 |
| art. 204 § 1–2 | zakres reprezentacji; **prawa do reprezentowania nie można ograniczyć ze skutkiem wobec osób trzecich** | 01: § 18 komentarz; klasa 4 |
| art. 205 § 1 | sposób reprezentacji określa umowa; domyślnie dwóch członków łącznie albo jeden z prokurentem | 01: § 18 |
| art. 205 § 2 | oświadczenia i doręczenia spółce — wobec jednego członka zarządu lub prokurenta | 01: § 18 (kontekst) |
| art. 206 § 1 | oznaczanie pism, zamówień i stron internetowych: firma, siedziba i adres, sąd rejestrowy i numer, NIP, kapitał zakładowy | 01: § 30 ust. 2; 03: Część IV |
| art. 207 | wobec spółki członkowie zarządu podlegają ograniczeniom z ustawy, umowy spółki i uchwał wspólników | 01: § 19 ust. 2 — podstawa ograniczeń wewnętrznych |
| art. 208 § 1–4 | prowadzenie spraw; czynności nieprzekraczające zwykłych bez uchwały; **sprawa przekraczająca zakres zwykłych czynności wymaga uprzedniej uchwały zarządu** | 01: § 19 ust. 1–2 |
| art. 208 § 5 | uchwały zarządu bezwzględną większością, przy prawidłowym zawiadomieniu wszystkich | 01: § 19 ust. 3 |
| art. 208 § 5¹–5³ | posiedzenia i uchwały zdalne oraz pisemne; głos na piśmie przez innego członka | 01: § 19 ust. 3 |
| art. 208 § 6–7 | powołanie prokurenta — zgoda wszystkich członków zarządu; odwołać może każdy | 01: § 19 ust. 2 pkt 7 |
| art. 208 § 8 | **umowa może przewidywać, że przy równości głosów decyduje głos prezesa zarządu** — dotyczy stosunków wewnątrz zarządu | 01: § 19 ust. 4; § 24 komentarz — **nie dotyczy zgromadzenia wspólników** |
| art. 209 | sprzeczność interesów — obowiązek ujawnienia i wstrzymania się; prawo żądania zaznaczenia w protokole | 01: § 19 ust. 5; 03: 3.5 |
| art. 210 § 1 | umowy i spory z członkiem zarządu — spółkę reprezentuje **rada nadzorcza albo pełnomocnik powołany uchwałą zgromadzenia** | 01: § 21 ust. 1; 02: wzór 8 |
| art. 210 § 2 | jedyny wspólnik będący jedynym członkiem zarządu — forma aktu notarialnego | 01: komentarz do § 21 |
| art. 211 § 1–2 | zakaz konkurencji **członka zarządu** (progi: 10 % udziałów lub prawo powołania członka zarządu); zgody udziela organ uprawniony do powołania zarządu, chyba że umowa stanowi inaczej | 01: § 22; § 12 komentarz (zakres podmiotowy) |
| art. 213 § 1 | umowa może ustanowić radę nadzorczą lub komisję rewizyjną | 01: § 20; klauzula C.5 |
| art. 213 § 2 | organ nadzoru obowiązkowy gdy kapitał **> 500 000 zł** **i** wspólników **> 25** | 01: § 20 komentarz |
| art. 213 § 3 | **wyłączenie/ograniczenie indywidualnej kontroli wspólników tylko przy ustanowieniu RN lub komisji rewizyjnej** | 01: § 8 komentarz, § 20, klauzula C.5; klasa 4 |
| art. 214 § 1–3 | zakaz łączenia funkcji: członek zarządu, prokurent, likwidator, kierownik oddziału lub zakładu, główny księgowy, radca prawny, adwokat zatrudniony w spółce; osoby podlegające bezpośrednio członkowi zarządu | 01: klauzula C.5; klasa 4 |

## 1.5. Zgromadzenie wspólników i uchwały

| Przepis | Treść wykorzystana | Gdzie użyto |
|---|---|---|
| art. 227 § 1 | uchwały podejmowane na zgromadzeniu | 02: Część I.1 |
| art. 227 § 2 | **bez odbycia zgromadzenia** — gdy wszyscy wspólnicy wyrażą na piśmie zgodę na postanowienie albo na głosowanie pisemne | 01: § 23 ust. 9; 02: tryb C, wzór 13 |
| art. 228 | katalog spraw wymagających uchwały wspólników — w tym zatwierdzenie sprawozdań i absolutorium, nabycie i zbycie nieruchomości, zwrot dopłat | 01: § 23 ust. 6; 02: Część I |
| art. 229 | nabycie nieruchomości albo środków trwałych za cenę przewyższającą 1/4 kapitału, **nie niższą niż 50 000 zł**, przed upływem 2 lat od rejestracji — uchwała wspólników | 02: wzór 14 komentarz |
| art. 230 | rozporządzenie prawem lub zobowiązanie o wartości **dwukrotnie przewyższającej kapitał** — uchwała wspólników, chyba że umowa stanowi inaczej; **art. 17 § 1 nie stosuje się** | 01: § 23 ust. 7; 02: wzór 14 |
| art. 231 § 1 | zwyczajne zgromadzenie w terminie **6 miesięcy** po upływie roku obrotowego | 01: § 23 ust. 10; 02: kalendarz |
| art. 231 § 2 | przedmiot obrad zwyczajnego zgromadzenia: sprawozdania, podział zysku lub pokrycie straty, absolutorium | 02: wzory 1–6 |
| art. 231 § 3 | absolutorium dotyczy wszystkich osób pełniących funkcje w ostatnim roku; uprawnienia byłych członków organów; żądanie **na tydzień przed** zgromadzeniem | 02: wzory 5–6, kalendarz |
| art. 232 | nadzwyczajne zgromadzenie | 02: Część I |
| art. 233 § 1 | strata przewyższająca sumę kapitałów zapasowego i rezerwowych oraz **połowę kapitału zakładowego** — niezwłoczne zwołanie zgromadzenia w sprawie dalszego istnienia spółki | 02: wzór 4 |
| art. 234 § 1–2 | miejsce zgromadzenia: siedziba spółki albo inne miejsce w Polsce **za pisemną zgodą wszystkich** | 01: § 23 ust. 1; 02: Część I.2 |
| art. 234¹ § 1–3 | udział przy wykorzystaniu środków komunikacji elektronicznej; regulamin | 01: § 23 ust. 4 |
| art. 235 § 1 | zgromadzenie zwołuje zarząd | 01: § 23 ust. 2; 02: Część I.2 |
| art. 235 § 2–4 | uprawnienia RN/komisji rewizyjnej; umowa może przyznać je innym osobom; prawo odwołania zgromadzenia | 02: Część I.2 |
| art. 236 § 1 | wspólnicy reprezentujący **1/10 kapitału** mogą żądać zwołania NZW; żądanie na piśmie najpóźniej **miesiąc** przed terminem | 01: § 23 ust. 2; 03/02: wzór żądania |
| art. 236 § 1¹ | wspólnicy reprezentujący **1/20 kapitału** — żądanie umieszczenia spraw w porządku obrad, najpóźniej **3 tygodnie** przed terminem | 02: wzór żądania |
| art. 236 § 2 | umowa może przyznać te uprawnienia wspólnikom o niższym udziale | 01: § 23 ust. 2 |
| art. 236 § 3 | wyłączne prawo odwołania zgromadzenia przez żądających | 02: wzór żądania |
| art. 237 § 1, § 3 | sąd rejestrowy może upoważnić do zwołania NZW po 2 tygodniach bezskuteczności; wyznacza przewodniczącego; powołanie się na postanowienie w zawiadomieniach | 02: Część I.2, wzór żądania |
| art. 238 § 1 | zwołanie listem poleconym lub kurierem **co najmniej 2 tygodnie** przed terminem; e-mail albo adres do doręczeń elektronicznych **tylko przy uprzedniej pisemnej zgodzie z podanym adresem** | 01: § 23 ust. 3; 02: Część I.2, wzór zgody |
| art. 238 § 2 | treść zaproszenia: dzień, godzina, miejsce, **szczegółowy porządek obrad**; przy zmianie umowy — istotne elementy treści zmian | 02: Część I.2, checklista |
| art. 238 § 3 | przy udziale zdalnym — informacja o sposobie uczestniczenia, głosowania, wnoszenia sprzeciwu | 01: § 23 ust. 4; 02: checklista |
| art. 239 § 1 | brak uchwał w sprawach nieobjętych porządkiem obrad, chyba że cały kapitał reprezentowany i nikt nie zgłosił sprzeciwu | 02: Część I.3 |
| art. 239 § 2 | wniosek o zwołanie NZW i wnioski porządkowe — poza porządkiem obrad | 02: Część I.3 |
| art. 240 | uchwały bez formalnego zwołania — cały kapitał reprezentowany i brak sprzeciwu co do odbycia zgromadzenia oraz wniesienia spraw | 02: tryb B, głowa protokołu |
| art. 241 | **zgromadzenie ważne bez względu na liczbę reprezentowanych udziałów, jeżeli umowa nie stanowi inaczej** | 01: § 23 ust. 5 — podstawa klauzuli kworum; 02: Część I.4 |
| art. 242 § 1–2 | jeden głos na udział o równej wartości nominalnej | 01: § 9 ust. 1, § 23 |
| art. 243 § 1–2 | pełnomocnicy; pełnomocnictwo **na piśmie pod rygorem nieważności**; kopia do księgi protokołów | 01: § 9 ust. 2; 02: Część I.8 |
| art. 243 § 3 | **członek zarządu i pracownik spółki nie mogą być pełnomocnikami** | 01: § 9 ust. 3; 02: Część I.8 |
| art. 244 | wyłączenie od głosowania: odpowiedzialność wobec spółki, **absolutorium**, zwolnienie z zobowiązania, spór ze spółką | 02: Część I.6, wzory 5–6, 12 |
| art. 245 | uchwały bezwzględną większością, jeżeli ustawa lub umowa nie stanowią inaczej | 01: § 23 ust. 8; 02: Część I.5 |
| art. 246 § 1 | zmiana umowy, rozwiązanie, zbycie przedsiębiorstwa — **2/3 głosów**; istotna zmiana przedmiotu działalności — **3/4**; umowa może zaostrzyć | 01: § 23 ust. 8, § 3 komentarz; 02: Część I.5 |
| art. 246 § 2 | przy stracie z art. 233 — rozwiązanie bezwzględną większością | 02: Część I.5, wzór 4 |
| art. 246 § 3 | zmiana **zwiększająca świadczenia wspólników** albo **uszczuplająca prawa udziałowe bądź prawa przyznane osobiście** — **zgoda wszystkich, których dotyczy** | 01: Część I metoda pkt 4, § 23 ust. 8 komentarz, C.7; 02: Część I.5 |
| art. 247 § 1 | głosowanie jawne | 02: Część I.7 |
| art. 247 § 2 | **tajne obowiązkowo**: wybory, odwołanie członków organów, pociągnięcie do odpowiedzialności, sprawy osobowe, na żądanie choćby jednego wspólnika | 02: Część I.7, wzory 5–7, 12 |
| art. 248 § 1 | uchwały do księgi protokołów, podpisane przez obecnych albo przewodniczącego i protokolanta; przy protokole notarialnym — wypis do księgi | 02: Część I.9; 03: 2.2 |
| art. 248 § 2 | **treść protokołu**: prawidłowość zwołania, zdolność do powzięcia uchwał, powzięte uchwały, **liczba głosów za każdą uchwałą**, zgłoszone sprzeciwy; lista obecności; **dowody zwołania do księgi protokołów** | 02: Część I.9, głowa protokołu, lista obecności; 03: 2.2 |
| art. 248 § 3 | uchwały pisemne wpisuje do księgi zarząd | 02: wzór 13; 03: 2.2 |
| art. 248 § 4 | wspólnicy mogą przeglądać księgę protokołów i żądać poświadczonych odpisów uchwał | 02: Część I.9; 03: 2.2 |
| art. 249 § 1–2 | powództwo o **uchylenie** uchwały; zaskarżenie nie wstrzymuje postępowania rejestrowego | 02: Część I.10 |
| art. 250 | legitymacja do powództwa o uchylenie — w tym wspólnik, który głosował przeciw **i zażądał zaprotokołowania sprzeciwu**; odrębna reguła przy głosowaniu pisemnym | 02: Część I.9–10, wzór sprzeciwu, wzór 13 |
| art. 251 | termin: **miesiąc** od wiadomości o uchwale, nie później niż **6 miesięcy** od powzięcia | 02: Część I.10 |
| art. 252 § 1, § 3–4 | powództwo o **stwierdzenie nieważności** uchwały sprzecznej z ustawą; **6 miesięcy / 3 lata**; upływ terminów nie wyłącza zarzutu nieważności | 02: Część I.10 |
| art. 255 § 1, § 3 | zmiana umowy — uchwała **i wpis do rejestru**; uchwała w **protokole notarialnym** | 01: § 28 ust. 1; 02: Część I.1 |
| art. 256 § 1–2 | zarząd zgłasza zmianę umowy; równocześnie zmiany danych z art. 166 | 02: checklista po zgromadzeniu |
| art. 257 § 1–3 | podwyższenie kapitału przez zmianę umowy albo na podstawie dotychczasowych postanowień (maksymalna wysokość + termin); wtedy oświadczenia o objęciu — **forma pisemna pod rygorem nieważności** | 01: § 28 ust. 3, klauzula C.6 |
| art. 258 § 1 | **prawo pierwszeństwa** dotychczasowych wspólników; termin **miesiąca** od wezwania; wezwania przesyłane jednocześnie | 01: § 28 ust. 2; 03: 3.2 komentarz |
| art. 258 § 2 | oświadczenie o objęciu — forma aktu notarialnego | 01: § 28 ust. 3 |
| art. 270 | rozwiązanie spółki: **przyczyny przewidziane w umowie spółki**, uchwała stwierdzona protokołem notarialnym, upadłość, inne przyczyny | 01: § 24 ust. 5, § 29 ust. 1 |

---

# 2. Ustawa o działalności leczniczej — DU/2026/156

✅ [VER: api.sejm.gov.pl ELI DU/2026/156, 2026-07-21]

| Przepis | Treść wykorzystana | Gdzie użyto |
|---|---|---|
| art. 2 ust. 1 pkt 2 | „osoba wykonująca zawód medyczny" — także osoba legitymująca się nabyciem fachowych kwalifikacji | 00: warstwa medyczna; 01: § 10 ust. 3 |
| art. 2 ust. 1 pkt 10 | definicja świadczenia zdrowotnego | 00; 01: § 3 |
| art. 2 ust. 1 pkt 14 | zakład leczniczy jako zespół składników majątkowych | 01: § 4 |
| **art. 2 ust. 2 pkt 1** | „kierownik bez bliższego określenia – rozumie się przez to także **zarząd spółki kapitałowej**" | 00: pkt 1; 01: § 19 ust. 2 pkt 4, § 29 komentarz |
| art. 4 ust. 1 pkt 1 | podmiotami leczniczymi są przedsiębiorcy we wszelkich formach przewidzianych dla działalności gospodarczej | 00; 01: § 3 |
| art. 5 | praktyki zawodowe — katalog zamknięty (lekarze, pielęgniarki, fizjoterapeuci, diagności) | 00: uzasadnienie formy sp. z o.o. |
| art. 8 pkt 2 | rodzaj działalności leczniczej: **ambulatoryjne świadczenia zdrowotne** | 01: § 3 ust. 1 |
| art. 14 ust. 1 | informacja o zakresie i rodzajach świadczeń — **treść i forma nie mogą mieć cech reklamy** | 01: § 30 ust. 3 |
| art. 14 ust. 2 | na wniosek pacjenta — informacje o metodach, **o zawartych umowach ubezpieczenia**, o danych z rejestru | 01: § 30 ust. 3 komentarz |
| art. 17 ust. 1 pkt 1 | pomieszczenia i urządzenia odpowiadające wymaganiom z art. 22 | 00; 01: § 3 ust. 4 |
| art. 17 ust. 1 pkt 2 | wyroby medyczne zgodnie z ustawą o wyrobach medycznych | 01: kontekst § 3 |
| **art. 17 ust. 1 pkt 3** | świadczeń udzielają **wyłącznie osoby wykonujące zawód medyczny** | 00: pkt 2; 01: § 10 ust. 3, § 17 ust. 7 |
| art. 17 ust. 1 pkt 4 lit. a | obowiązek umowy ubezpieczenia OC | 01: § 3 ust. 4; 03: Część IV |
| art. 22 ust. 1–2 | wymagania: ogólnoprzestrzenne, sanitarne, instalacyjne | 01: § 3 ust. 4 |
| art. 22 ust. 3 | rozporządzenie MZ o pomieszczeniach | 01: § 3 ust. 4; 00: warstwa medyczna |
| **art. 22 ust. 3a** | wymagań z rozporządzenia **nie stosuje się** do podmiotów udzielających **wyłącznie** ambulatoryjnych świadczeń za pośrednictwem systemów teleinformatycznych lub łączności | 00; 01: komentarz do § 3 ust. 1 pkt 5 |
| art. 23 ust. 1 | regulamin organizacyjny **ustalony przez kierownika** | 01: § 19 ust. 2 pkt 4 |
| art. 24 ust. 1 | obligatoryjna treść regulaminu organizacyjnego — m.in. pkt 5 (miejsce udzielania świadczeń przy teleporadach), pkt 9 (opłata za udostępnienie dokumentacji), pkt 12 (wysokość opłat za świadczenia) | 01: § 4 ust. 1, § 19 ust. 2 pkt 4; 03: Część IV |
| art. 25 ust. 1 pkt 1 | zakres OC — szkody będące następstwem udzielania świadczeń albo niezgodnego z prawem zaniechania | 03: Część IV |
| art. 25 ust. 2 | **obowiązek ubezpieczenia powstaje najpóźniej w dniu poprzedzającym dzień rozpoczęcia** wykonywania działalności leczniczej | 03: Część IV |
| art. 25 ust. 4 | odesłanie do art. 120 Kodeksu pracy | `config.json`: uzasadnienie dodania Kodeksu pracy |
| art. 25 ust. 5 | rozporządzenie MF o minimalnej sumie gwarancyjnej | 04: dług weryfikacyjny |
| art. 100 ust. 1 | treść wniosku o wpis do rejestru podmiotów wykonujących działalność leczniczą | 01: § 4 ust. 3 |
| **art. 100 ust. 1a** | **nazwa zakładu leczniczego nie może być taka sama jak oznaczenie podmiotu leczniczego** | 00: pkt 3; 01: § 1 komentarz |
| art. 100 ust. 2 | oświadczenie pod rygorem odpowiedzialności karnej z art. 233 § 6 KK — w tym pkt 2: „znane mi są i **spełniam** warunki wykonywania działalności leczniczej" | 00; 01: § 3 ust. 4; 03: Część IV |
| art. 103 | działalność leczniczą można rozpocząć **po uzyskaniu wpisu do rejestru**, z zastrzeżeniem art. 104 | 01: § 3 ust. 4 |
| art. 104 ust. 1–3 | 30 dni dla organu; po 40 dniach start **po pisemnym zawiadomieniu**; wezwanie do uzupełnienia w 7 dni resetuje termin; zaświadczenie z urzędu | `wiedza/…/07`, `wiedza/…/13` |
| art. 105 ust. 1 pkt 2 | opłata za wpis — **10 % przeciętnego wynagrodzenia** dla podmiotu leczniczego | `wiedza/…/13` |
| art. 106 ust. 1 pkt 1 | organem prowadzącym rejestr jest **wojewoda** właściwy dla siedziby podmiotu leczniczego | 00; `wiedza/…/13` |
| **art. 107 ust. 1–2** | zgłaszanie zmian danych rejestrowych **w 14 dni**; kara pieniężna **do 10-krotności minimalnego wynagrodzenia**, decyzji nadaje się rygor natychmiastowej wykonalności | 01: § 4 ust. 3; 02: checklista po zgromadzeniu |

---

# 3. Ustawa o prawach pacjenta i Rzeczniku Praw Pacjenta — DU/2024/581

✅ [VER: api.sejm.gov.pl ELI DU/2024/581, 2026-07-21]

| Przepis | Treść wykorzystana | Gdzie użyto |
|---|---|---|
| art. 13 | prawo pacjenta do zachowania w tajemnicy informacji z nim związanych przez osoby wykonujące zawód medyczny | 01: § 13 |
| art. 23 ust. 1 | prawo dostępu pacjenta do dokumentacji medycznej | 01: § 8 ust. 2 |
| **art. 24 ust. 1** | **podmiot udzielający świadczeń** jest obowiązany prowadzić, przechowywać i udostępniać dokumentację medyczną oraz zapewnić ochronę danych | 01: § 8 ust. 2; 03: Część IV |
| **art. 24 ust. 2** | do przetwarzania danych z dokumentacji uprawnione: osoby wykonujące zawód medyczny oraz inne osoby **na podstawie upoważnienia administratora danych** | 01: § 8 ust. 2 — podstawa ograniczenia prawa kontroli; 03: Część IV |
| art. 24 ust. 3 | obowiązek zachowania tajemnicy przez osoby wykonujące czynności pomocnicze | 01: § 13 |
| art. 27 ust. 4 | wykaz udostępnień dokumentacji medycznej | 02: checklisty; `wiedza/…/12` |
| art. 28 ust. 4 | sposób ustalania opłaty za udostępnienie dokumentacji — odesłanie z art. 24 ust. 1 pkt 9 u.dz.l. | 01: § 19 ust. 2 pkt 4 |
| art. 29 ust. 1 | przechowywanie dokumentacji **20 lat** od końca roku kalendarzowego ostatniego wpisu, z wyjątkami | 01: § 29 komentarz; 03: Część IV |
| **art. 30a ust. 1–3** | przy **zaprzestaniu wykonywania działalności leczniczej** — przekazanie dokumentacji w sposób zabezpieczający przed zniszczeniem, uszkodzeniem, utratą i dostępem osób nieuprawnionych; przejmuje podmiot, który przejął zadania; w razie jego braku odpowiada m.in. podmiot, z którym zawarto **umowę o przechowywanie dokumentacji medycznej** | 01: § 29 ust. 3–4 |
| **art. 69a ust. 1** | za niedopełnienie obowiązków z art. 30a — kara pieniężna **do trzykrotności przeciętnego wynagrodzenia w poprzednim kwartale**, nakładana decyzją na **ostatniego kierownika podmiotu, likwidatora albo syndyka** | 01: § 29 komentarz — sankcja osobista |

---

# 4. Ustawa o zawodzie psychologa i samorządzie zawodowym psychologów (2001) — DU/2019/1026

✅ [VER: api.sejm.gov.pl ELI DU/2019/1026, 2026-07-21] — **obowiązuje do 19.05.2028**

| Przepis | Treść wykorzystana | Gdzie użyto |
|---|---|---|
| art. 4 ust. 1 | wykonywanie zawodu psychologa: diagnoza psychologiczna, opiniowanie, orzekanie (o ile przepisy odrębne tak stanowią), psychoterapia, udzielanie pomocy psychologicznej | 01: § 3 ust. 1, § 10 ust. 1 |
| art. 4 ust. 2 | badania naukowe i działalność dydaktyczna jako wykonywanie zawodu | 01: § 12 ust. 2 pkt 1 |
| art. 4 ust. 3 | usługi psychologiczne na rzecz osób fizycznych, osób prawnych i jednostek organizacyjnych | 01: § 3 |
| art. 7 | prawo wykonywania zawodu powstaje z chwilą wpisu na listę psychologów Regionalnej Izby Psychologów | 01: § 10 ust. 3 komentarz; `wiedza/…/13` |
| art. 8 ust. 1 | warunki wpisu: dyplom magistra psychologii (lub uznany zagraniczny), pełna zdolność do czynności prawnych, język polski, podyplomowy staż zawodowy | 01: § 10 ust. 3; 03: 1.3 |
| **art. 14 ust. 1–3** | obowiązek zachowania tajemnicy; **nie może być ograniczony w czasie**; wyjątki ustawowe — poważne zagrożenie zdrowia lub życia klienta bądź innych osób, przepisy ustaw | 01: § 13 ust. 2–3 |
| art. 18 | prywatna praktyka psychologiczna — JDG albo spółka partnerska, po zezwoleniu marszałka województwa i wpisie do rejestru prywatnych praktyk | 00; `wiedza/…/13` — **ścieżka niedostępna dla sp. z o.o.** |
| art. 19 | lista metod i narzędzi psychologicznych **zastrzeżonych wyłącznie do stosowania przez psychologów** | `wiedza/…/13` — zakupy: licencje na testy |

▸ **Uwaga o stanie faktycznym:** samorząd przewidziany ustawą z 2001 r. nie funkcjonuje — nie działają Regionalne Izby Psychologów, które dokonywałyby wpisu z art. 7. Do 19.05.2028 psycholog wykonuje zawód na podstawie dyplomu magistra psychologii, a dokumentem potwierdzającym kwalifikacje dla celów art. 17 ust. 1 pkt 3 u.dz.l. jest dyplom. Analiza: [`wiedza/spolki-medyczne/10-psycholog-2026-2028.md`](../wiedza/spolki-medyczne/10-psycholog-2026-2028.md).

---

# 5. Ustawa o zawodzie psychologa oraz samorządzie zawodowym psychologów (2026) — DU/2026/187

✅ [VER: api.sejm.gov.pl ELI DU/2026/187, 2026-07-21] — **główny zrąb wchodzi w życie 19.05.2028**

| Przepis | Treść wykorzystana | Gdzie użyto |
|---|---|---|
| art. 3 ust. 1–3 | zawód zaufania publicznego; tytuł „psycholog" pod ochroną prawną; tytułem może posługiwać się osoba **posiadająca prawo wykonywania zawodu** | 01: § 10 ust. 4 komentarz |
| **art. 5 ust. 1** | psycholog uzyskuje prawo wykonywania zawodu **z dniem wpisu do Rejestru Psychologów** | 00: pkt 4; 01: § 10 ust. 4, § 16 ust. 3 pkt 2 |
| art. 5 ust. 3 | wpisu dokonuje regionalna rada właściwa ze względu na miejsce zamieszkania | 01: § 10 ust. 4 |
| art. 5 ust. 5 | wymagania wpisu — m.in. pełnia praw publicznych, **rękojmia prawidłowego wykonywania zawodu, w szczególności brak prawomocnego skazania za przestępstwo umyślne ścigane z oskarżenia publicznego** | 01: § 16 ust. 3 pkt 4, § 17 ust. 6 |
| art. 12 ust. 1–3 | 30 dni na uchwałę o wpisie; odmowa; odwołanie do Krajowej Rady w 14 dni | `wiedza/…/10` |
| kaskada wejścia w życie | 5.03.2026 — art. 139 i art. 151–159; 19.02.2027 — art. 145; **19.05.2028 — główny zrąb**; 19.05.2031 — art. 17 ust. 3 | 00: pkt 4; 01: § 10 ust. 4 |

---

# 6. Dług weryfikacyjny — czego NIE zweryfikowano

⚠️ Pozycje poniżej **nie pochodzą z lokalnej bazy aktów**. W szablonach są albo pominięte, albo powołane w komentarzu z zastrzeżeniem. **Żadna nie stanowi treści normatywnej wzoru.** Przed użyciem szablonu wobec klienta domknij pozycje 1–5.

| # | Zagadnienie | Gdzie dotyka szablonów | Co sprawdzić |
|---|---|---|---|
| 1 | **Oświadczenia członków zarządu przy zgłoszeniu do rejestru** — zgoda na powołanie, adres do doręczeń, oświadczenie o niekaralności i braku zakazu pełnienia funkcji | 03: 1.3 (pkt 1, 2, 5) | ustawa o Krajowym Rejestrze Sądowym — zakres wymaganych oświadczeń; KSH art. 164 § 2 odsyła do tej ustawy. W `config.json` dodana jako pozycja do pobrania |
| 2 | **Terminy zgłaszania zmian do rejestru** (zmiana zarządu, kapitału, siedziby, lista wspólników) | 02: checklista po zgromadzeniu; 03: 2.1 | ustawa o KRS — termin ogólny na zgłoszenie zmian |
| 3 | **Art. 233 § 6 Kodeksu karnego** — sankcja za fałszywe oświadczenie do rejestru podmiotów wykonujących działalność leczniczą | 01: § 3 ust. 4 komentarz; 03: Część IV | KK — aktualne brzmienie i wymiar kary. W `config.json` dodany |
| 4 | **PCC od umowy spółki** — stawka 0,5 % od kapitału, notariusz jako płatnik, PCC-3 przy S24, obniżenie podstawy o koszty notariusza i opłaty rejestrowe | 01: § 5 komentarz | ustawa o PCC. W `config.json` dodana |
| 5 | **Sprawozdanie finansowe** — obowiązek pełnych ksiąg, treść sprawozdania, termin złożenia do rejestru | 02: wzory 1–4, kalendarz | ustawa o rachunkowości. W `config.json` dodana |
| 6 | Opłaty sądowe za wpis spółki i za zmiany | 01: Część I (nie podano kwot) | ustawa o kosztach sądowych w sprawach cywilnych |
| 7 | **Adres do doręczeń elektronicznych (ADE)** — zakres obowiązku dla podmiotów KRS | 01: § 23 ust. 3; 03: 1.3 | ustawa o doręczeniach elektronicznych |
| 8 | **Składki ZUS** — status wspólnika spółki wieloosobowej, tytuły ubezpieczeniowe członka zarządu | 01: § 10, § 21 (świadomie pominięte) | u.s.u.s. art. 6 ust. 1 pkt 5 w zw. z art. 8 ust. 6 pkt 4 |
| 9 | **Podatki** — CIT, opodatkowanie dywidendy, ryczałt od dochodów spółek, kwalifikacja wynagrodzenia z art. 176 KSH | 01: § 10, § 26, § 27 (świadomie pominięte) | ustawa o CIT, ustawa o PIT |
| 10 | **RODO** — podstawy przetwarzania, umowy powierzenia, rejestr czynności, IOD | 01: § 8 ust. 2, § 13; 03: Część IV | rozporządzenie 2016/679 (EUR-Lex CELEX 02016R0679) + ustawa o ochronie danych osobowych |
| 11 | **Rozporządzenie MZ o pomieszczeniach** podmiotu wykonującego działalność leczniczą | 01: § 3 ust. 4 | wykonawcze do art. 22 ust. 3 u.dz.l. |
| 12 | **Rozporządzenie MF o obowiązkowym OC** — minimalna suma gwarancyjna | 03: Część IV | wykonawcze do art. 25 ust. 5 u.dz.l. |
| 13 | **Kody PKD** | 01: § 3 ust. 3 (zostawione do ustalenia) | aktualna Polska Klasyfikacja Działalności |
| 14 | **Taksa notarialna** | 01: Część I (nie podano kwot) | rozporządzenie MS o maksymalnych stawkach taksy notarialnej |
| 15 | **Standardy ochrony małoletnich** i weryfikacja kadr w rejestrach karnych | 03: Część IV | ustawa o przeciwdziałaniu zagrożeniom przestępczością na tle seksualnym i ochronie małoletnich. W `config.json` dodana |

▸ Pozycje 1, 3, 4, 5 i 15 zostały dodane do `config.json` jako akty do pobrania — po odblokowaniu dostępu do ELI (`HANDOFF.md` sekcja 3a) da się je zweryfikować i przenieść do sekcji ✅.

---

# 7. Ustalenia wymagające szczególnej uwagi

Trzy wnioski, które wynikają z zestawienia przepisów, a nie z pojedynczego artykułu. Każdy zmienia treść szablonu.

## 7.1. Przy 50/50 jeden wspólnik może przeprowadzić uchwałę zwykłą sam

**Podstawa:** art. 4 § 1 pkt 9 i 10 (bezwzględna większość = więcej niż połowa głosów **oddanych**) w związku z art. 241 (brak kworum, jeżeli umowa nie stanowi inaczej) i art. 245 (zasada bezwzględnej większości).

**Skutek:** wspólnik z 300 z 600 udziałów, obecny sam na prawidłowo zwołanym zgromadzeniu, oddaje 300 głosów — to 100 % głosów oddanych. W tym trybie można odwołać drugiego wspólnika z zarządu (art. 203 § 1 — bezwzględna większość).

**Reakcja w szablonie:** klauzula kworum całego kapitału dla katalogu spraw ustrojowych (01: § 23 ust. 5) plus ograniczenie odwołania członka zarządu do ważnych powodów na podstawie art. 203 § 2 (01: § 17 ust. 6).

## 7.2. Przy dokładnie 50/50 wyłączenie wspólnika przez sąd jest niedostępne

**Podstawa:** art. 266 § 1 — wyłączenia może żądać ogół pozostałych wspólników, **jeżeli ich udziały stanowią więcej niż połowę kapitału zakładowego**. Art. 266 § 2 pozwala umowie przyznać to prawo mniejszej liczbie wspólników, ale **utrzymuje wymóg ponad połowy kapitału**.

**Skutek:** przy 300/600 żaden wspólnik nie osiąga progu. Instytucja jest arytmetycznie zamknięta.

**Reakcja w szablonie:** mechanizm umowny — kaskada mediacja → oferta z prawem odwrócenia → rozwiązanie spółki jako przyczyna przewidziana w umowie na podstawie art. 270 pkt 1 (01: § 24).

## 7.3. Art. 208 § 8 nie rozwiązuje patu między wspólnikami

**Podstawa:** art. 208 § 1 otwiera regulację słowami „Jeżeli zarząd jest wieloosobowy […] do **wzajemnych stosunków członków zarządu** stosuje się przepisy § 2–8", a § 8 mówi o głosie **prezesa zarządu**.

**Skutek:** głos rozstrzygający dotyczy wyłącznie uchwał zarządu. Dla zgromadzenia wspólników Kodeks nie przewiduje odpowiednika, a przenoszenie tej konstrukcji na zgromadzenie nie ma podstawy ustawowej.

**Reakcja w szablonie:** głos prezesa tylko w zarządzie (01: § 19 ust. 4); dla patu wspólników — § 24. Odnotowano też jako sprostowanie w [`wiedza/spolki-medyczne/12-checklist-i-kruczki.md`](../wiedza/spolki-medyczne/12-checklist-i-kruczki.md) i [`13-mapa-instytucji-krok-po-kroku.md`](../wiedza/spolki-medyczne/13-mapa-instytucji-krok-po-kroku.md), gdzie wcześniejsze sformułowanie sugerowało, że art. 208 § 8 jest odpowiedzią na ryzyko 50/50.
