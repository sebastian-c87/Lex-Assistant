# Źródła i weryfikacja szablonów 05–06 (weryfikacja Fable)

Warstwa weryfikacyjna dla szablonów [05-umowa-spolki-z-o-o-wersja-fable.md](05-umowa-spolki-z-o-o-wersja-fable.md) i [06-spolka-w-organizacji.md](06-spolka-w-organizacji.md). Weryfikacja przeprowadzona **niezależnie od pliku 04** — każdy przepis odczytany ponownie z lokalnych indeksów `akty/` w dniu opracowania, w tym cztery artykuły nieużywane w szablonach 01–03 (art. 11, 13, 14, 170 KSH).

**Data weryfikacji pozycji ✅: 2026-07-27** (odczyt z indeksów; teksty jednolite pobrane 2026-07-21 wg `manifest.json`).

**Ograniczenie:** polityka sieciowa środowiska nadal blokuje `api.sejm.gov.pl` (403 na CONNECT) — nie było możliwe sprawdzenie, czy po 2026-07-21 nie ogłoszono nowszych tekstów jednolitych. Przed użyciem: `node fetch-laws.js --check`.

---

## 1. Kodeks spółek handlowych — DU/2024/18

✅ [VER: api.sejm.gov.pl ELI DU/2024/18, odczyt lokalny 2026-07-27]

### 1.1. Spółka w organizacji (rdzeń szablonu 06)

| Przepis | Treść zweryfikowana (cytat lub ścisła parafraza) | Gdzie użyto |
|---|---|---|
| **art. 11 § 1** | „Spółki kapitałowe w organizacji […] mogą we własnym imieniu nabywać prawa, w tym własność nieruchomości i inne prawa rzeczowe, zaciągać zobowiązania, pozywać i być pozywane." | 06: Część I, mapa czynności |
| **art. 11 § 2** | do spółki w organizacji w sprawach nieuregulowanych stosuje się **odpowiednio** przepisy dotyczące danej formy spółki po wpisie | 06: Część I |
| **art. 11 § 3** | „Firma spółki kapitałowej w organizacji powinna zawierać dodatkowe oznaczenie »w organizacji«." | 06: Część II |
| **art. 12** | z chwilą wpisu spółka w organizacji staje się sp. z o.o., uzyskuje osobowość prawną i **staje się podmiotem praw i obowiązków spółki w organizacji** | 06: Część I, V |
| **art. 13 § 1** | „Za zobowiązania spółki kapitałowej w organizacji odpowiadają solidarnie spółka i osoby, które działały w jej imieniu." | 06: Część IV |
| **art. 13 § 2** | wspólnik odpowiada solidarnie **do wartości niewniesionego wkładu** | 06: Część IV, checklista |
| **art. 161 § 1** | z chwilą zawarcia umowy powstaje spółka w organizacji | 06: Część I — teza główna szablonu |
| **art. 161 § 2** | reprezentacja: **zarząd albo pełnomocnik powołany jednomyślną uchwałą wspólników** | 06: Część III, wzór uchwały |
| **art. 161 § 3** | odpowiedzialność działających **ustaje wobec spółki z chwilą zatwierdzenia ich czynności przez zgromadzenie wspólników** | 06: Część IV, wzór uchwały zatwierdzającej |
| **art. 161 § 4** | zmiana umowy spółki w organizacji wymaga **zawarcia umowy przez wspólników** (nie dotyczy umowy z wzorca) | 06: mapa czynności, checklista |
| **art. 162** | w jednoosobowej spółce w organizacji jedyny wspólnik nie reprezentuje spółki (poza zgłoszeniem do sądu) | 06: Część II |
| **art. 165** | brak usuwalny w zgłoszeniu — termin sądu pod rygorem odmowy wpisu | 06: Część V |
| **art. 169 § 1–2** | 6 miesięcy na zgłoszenie (7 dni przy wzorcu) albo prawomocna odmowa → **umowa spółki ulega rozwiązaniu** | 06: Część V, checklista |
| **art. 170 § 1** | gdy spółka nie może niezwłocznie zwrócić wkładów i pokryć wierzytelności — **zarząd dokonuje likwidacji**; bez zarządu likwidatora ustanawia zgromadzenie albo sąd rejestrowy | 06: Część V |
| **art. 170 § 2–4** | odpowiednio przepisy o likwidacji; jednokrotne ogłoszenie z miesięcznym terminem dla wierzycieli; rozwiązanie z dniem zatwierdzenia sprawozdania likwidacyjnego | 06: Część V |
| **art. 172 § 1–2** | braki po rejestracji — wezwanie sądu, grzywny wg przepisów o KRS | 06: Część V |

### 1.2. Elementy obligatoryjne i wkłady (szablon 05)

| Przepis | Treść zweryfikowana | Gdzie użyto |
|---|---|---|
| art. 154 § 1–2 | kapitał min. 5000 zł; udział min. 50 zł | 05: Część I tabela, § 4–5; kontrola końcowa |
| art. 157 § 1 pkt 1–6 | sześć elementów obligatoryjnych umowy | 05: Część I tabela, §§ 1–6 |
| art. 157 § 2 | akt notarialny | 05: nagłówek |
| art. 158 § 1 | wymogi umowy przy aporcie | 05: Część I |
| art. 158 § 3 | przedmiot wkładu w wyłącznej dyspozycji zarządu | 06: mapa czynności |
| **art. 14 § 1** | przedmiotem aportu **nie może być prawo niezbywalne ani świadczenie pracy bądź usług** | 05: Część I — rozgraniczenie aport / art. 176 |
| **art. 14 § 2** | wadliwy aport — obowiązek wyrównania różnicy między wartością przyjętą a zbywczą | 05: Część I |
| **art. 14 § 4** | zakaz potrącenia wierzytelności wspólnika z wierzytelnością spółki o wpłatę na udziały; **dopuszczalne potrącenie umowne** | 05: § 6 ust. 3 |
| art. 163 pkt 2 | wniesienie wkładów na cały kapitał przed powstaniem spółki | 05: § 6 ust. 2; 06: Część V |
| art. 164 § 1 | zgłoszenie podpisują wszyscy członkowie zarządu | 06: Część V |
| art. 167 § 1 pkt 2 | oświadczenie zarządu o wniesieniu wkładów | 06: Część V |
| art. 175 § 1–2 | zawyżony aport — solidarna, niewyłączalna odpowiedzialność | 05: Część I |
| art. 189 § 1–2 | zakaz zwrotu wkładów i wypłat z majątku potrzebnego na pokrycie kapitału | 05: § 6 ust. 4 |

### 1.3. Udziały, dopłaty, zbycie, umorzenie (szablon 05)

| Przepis | Treść zweryfikowana | Gdzie użyto |
|---|---|---|
| art. 159 | obowiązki wspólnika inne niż wkład — dokładnie określone pod rygorem bezskuteczności | 05: § 10 ust. 3 (kara umowna), § 12 ust. 3 (tag-along) |
| art. 174 § 6 | zakaz dokumentów na udziały | 05: § 5 ust. 4 |
| art. 176 § 1–2 | rodzaj i zakres świadczeń w umowie; wynagrodzenie także bez zysku, nie ponad stawki obrotu | 05: § 9 ust. 1–2 |
| art. 176 § 3 | zbycie/obciążenie udziału za zgodą spółki | 05: § 12 ust. 1 (spójne) |
| art. 177 § 1–2 | dopłaty: granica liczbowa na udział; równomierność | 05: § 7 |
| art. 180 § 1 | forma zbycia: pisemna z podpisami notarialnie poświadczonymi | 05: § 12 ust. 1 |
| art. 182 § 1, 3 | ograniczenie zbycia w umowie; zgoda zarządu na piśmie | 05: § 12 ust. 1 |
| art. 183 § 1 | wyłączenie wstąpienia spadkobierców — **warunki spłaty pod rygorem bezskuteczności** | 05: § 12 ust. 6; kontrola końcowa |
| art. 187 § 1 | skuteczność przejścia wobec spółki od zawiadomienia z dowodem | 05: § 12 ust. 3 (mechanizm bezskuteczności wobec spółki) |
| art. 187 § 2 | prawo głosu zastawnika/użytkownika tylko gdy umowa przewiduje | 05: § 12 ust. 5 |
| art. 193 § 2–3 | dzień dywidendy — upoważnienie w umowie; 2 miesiące | 05: § 18 ust. 2 |
| art. 194 | zaliczka na dywidendę — upoważnienie zarządu w umowie | 05: § 18 ust. 3 |
| art. 199 § 1–3 | umorzenie tylko gdy umowa stanowi; uchwała z podstawą, wynagrodzeniem (dolna granica przy przymusowym) i uzasadnieniem | 05: § 13 ust. 1–3 |
| art. 199 § 4–5 | **umorzenie automatyczne** po ziszczeniu zdarzenia, bez uchwały; uchwała zarządu o obniżeniu kapitału | 05: § 13 ust. 4 |
| art. 257 § 1, 3 | podwyższenie na podstawie dotychczasowych postanowień: **maksymalna wysokość + termin**; oświadczenia w formie pisemnej | 05: § 8; kontrola końcowa |
| art. 258 § 1 | prawo pierwszeństwa proporcjonalne; miesiąc od wezwania | 05: § 8 |

### 1.4. Organy i uchwały (szablon 05)

| Przepis | Treść zweryfikowana | Gdzie użyto |
|---|---|---|
| art. 201 § 4 | powołanie/odwołanie uchwałą wspólników | 05: § 15 ust. 1 |
| art. 202 § 2–4 | kadencja w pełnych latach obrotowych; wygaśnięcie mandatu | 05: § 15 ust. 1 |
| art. 203 § 2 | ograniczenie odwołania do ważnych powodów | 05: § 15 ust. 2 |
| art. 205 § 1 | reprezentacja łączna przy zarządzie wieloosobowym | 05: § 16 ust. 1 |
| art. 207 | ograniczenia wewnętrzne członków zarządu z umowy i uchwał | 05: § 16 ust. 2 |
| art. 208 § 5¹–5³, § 8 | tryby zdalne i pisemne uchwał zarządu; **głos prezesa przy równości — wyłącznie w zarządzie** | 05: § 16 ust. 2–3 |
| art. 209 | sprzeczność interesów | 05: § 16 ust. 4 |
| art. 210 § 1 | pełnomocnik do umów z członkiem zarządu | 05: § 16 ust. 5 |
| art. 211 § 1–2 | ustawowy zakaz konkurencji członka zarządu | 05: § 16 ust. 6 |
| art. 212 § 1 | indywidualne prawo kontroli | 05: § 14 |
| art. 213 § 2 | organ nadzoru obowiązkowy: kapitał > 500 000 zł **i** wspólników > 25 — ANIMA nie spełnia | 05: § 14 |
| art. 227 § 2 | tryb pisemny za zgodą wszystkich | 05: § 17 ust. 5 |
| art. 230 | próg dwukrotności kapitału; sankcji nieważności brak | 05: § 17 ust. 4; kontrola końcowa |
| art. 231 § 1 | zwyczajne zgromadzenie do 6 miesięcy po roku obrotowym | 05: § 17 ust. 1 |
| art. 234¹ § 1 | udział zdalny w zgromadzeniu | 05: § 17 ust. 1 |
| art. 236 § 2 | umowa może obniżyć progi żądania zwołania | 05: § 17 ust. 1 („każdy Wspólnik") |
| art. 242 § 1 | jeden głos na udział | 05: § 17 ust. 2 |
| **art. 245** | bezwzględna większość, **jeżeli przepisy lub umowa nie stanowią inaczej** — podstawa podniesienia większości dla katalogu spraw | 05: § 17 ust. 2–3 |
| **art. 246 § 1** | 2/3 dla zmiany umowy/rozwiązania/zbycia przedsiębiorstwa, 3/4 dla istotnej zmiany przedmiotu; **umowa może ustanowić surowsze warunki** | 05: § 17 ust. 3; kontrola końcowa |
| art. 246 § 3 | zgoda indywidualna przy zwiększeniu świadczeń lub uszczupleniu praw | 05: komentarz do § 9 |
| art. 270 pkt 1–2 | rozwiązanie: przyczyny przewidziane w umowie; uchwała z protokołem notarialnym | 05: § 20 ust. 2, § 21 ust. 1 |

## 2. Ustawa o działalności leczniczej — DU/2026/156

✅ [VER: api.sejm.gov.pl ELI DU/2026/156, odczyt lokalny 2026-07-27]

| Przepis | Treść zweryfikowana | Gdzie użyto |
|---|---|---|
| art. 8 pkt 2 | ambulatoryjne świadczenia zdrowotne jako rodzaj działalności leczniczej | 05: § 3 ust. 1 |
| art. 14 ust. 1 | informacje publiczne bez cech reklamy | 05: § 22 ust. 1 |
| art. 17 ust. 1 | warunki podmiotu leczniczego (pomieszczenia, kadra, OC) | 06: Część II (granica: zero pacjentów) |
| art. 25 ust. 2 | obowiązek OC najpóźniej w dniu poprzedzającym rozpoczęcie działalności | 06: mapa czynności |
| **art. 100 ust. 1a** | nazwa zakładu ≠ oznaczenie podmiotu leczniczego | 05: komentarz do § 1–3 |
| **art. 103** | działalność lecznicza dopiero po wpisie do rejestru | 05: § 3 ust. 4; 06: Część II — twarda granica fazy organizacyjnej |

## 3. Ustawa o prawach pacjenta — DU/2024/581

✅ [VER: api.sejm.gov.pl ELI DU/2024/581, odczyt lokalny 2026-07-27]

| Przepis | Treść zweryfikowana | Gdzie użyto |
|---|---|---|
| art. 24 ust. 1–2 | obowiązki dokumentacyjne podmiotu; dostęp za upoważnieniem administratora | 05: § 14 (ograniczenie prawa kontroli) |
| art. 30a | przekazanie dokumentacji przy zaprzestaniu działalności; rola umowy o przechowywanie | 05: § 21 ust. 2 |
| art. 69a ust. 1 | kara do 3× przeciętnego wynagrodzenia — osobiście na ostatniego kierownika/likwidatora/syndyka | 05: § 21 ust. 2 (uzasadnienie obowiązku umownego) |

## 4. Ustawy o zawodzie psychologa — DU/2019/1026 i DU/2026/187

✅ [VER: api.sejm.gov.pl ELI DU/2019/1026 oraz DU/2026/187, odczyt lokalny 2026-07-27]

| Przepis | Treść zweryfikowana | Gdzie użyto |
|---|---|---|
| u.psy 2001 art. 4 ust. 1 | katalog usług psychologicznych | 05: § 3 ust. 1, § 9 ust. 1 |
| u.psy 2001 art. 14 ust. 1–2 | tajemnica bez ograniczenia w czasie | 05: § 11 |
| u.psy 2026 art. 5 ust. 1 | prawo wykonywania zawodu z dniem wpisu do Rejestru Psychologów (od 19.05.2028) | 05: § 9 ust. 3 |

---

## 5. Dług weryfikacyjny szablonów 05–06

⚠️ Poza lokalną bazą aktów; w szablonach wyłącznie w komentarzach z zastrzeżeniem:

| # | Zagadnienie | Gdzie | Co sprawdzić |
|---|---|---|---|
| 1 | Tryb nadania NIP/REGON spółce w organizacji | 06: Część II, mapa czynności | ustawa o zasadach ewidencji i identyfikacji podatników; ustawa o statystyce publicznej |
| 2 | Dopuszczalność obrotu udziałami spółki w organizacji | 06: Część II (zakaz ostrożnościowy) | doktryna i orzecznictwo — brak wprost przepisu; ostrożne stanowisko utrzymać |
| 3 | Kara umowna między wspólnikiem a spółką (§ 10 ust. 3 szablonu 05) — reżim ogólny | 05: § 10 | art. 483–484 KC (akt w `config.json`, do pobrania) |
| 4 | Mediacja i lista stałych mediatorów | 05: § 19 | KPC — przepisy o mediacji (poza bazą) |
| 5 | Grzywny przymuszające z art. 172 § 2 KSH | 06: Część V | ustawa o KRS (w `config.json`) |

## 6. Różnice konstrukcyjne wobec szablonów 01–03 (świadome)

Ta para nie jest kopią z podmienionymi danymi — pięć decyzji projektowych odróżnia ją od wersji 50/50:

1. **Ochrona przez większość kwalifikowaną, nie przez kworum.** Szablon 01 (50/50) chronił kworum całego kapitału — przed uchwałami pod nieobecność. Szablon 05 (60/40) chroni większością 3/4 — przed przegłosowaniem obecnej mniejszości. Obie konstrukcje mają wyraźną podstawę (art. 241 vs art. 245–246 § 1 zd. 3); wybór zależy od struktury udziałów.
2. **Tag-along w umowie zamiast w banku opcji.** Przy 50/50 sprzedaż pakietu nie zmienia kontroli, więc prawo przyłączenia było opcją (C.4). Przy 60/40 zbycie pakietu większościowego zmienia wszystko — klauzula weszła do wzoru (§ 12 ust. 3).
3. **Umorzenie automatyczne we wzorze, nie w opcjach.** Przy 60/40 umorzenie przymusowe uchwałą i tak kontroluje większość; automatyzm dla zdarzeń obiektywnych (art. 199 § 4) zdejmuje spór o głosowanie. W szablonie 01 było to opcją C.3 z ostrzeżeniem.
4. **Klauzula podwyższenia bez zmiany umowy (art. 257 § 1 i 3) we wzorze** — bo przy 60/40 rozwodnienie jest realnym wektorem nacisku większości; pierwszeństwo proporcjonalne (art. 258 § 1) utrzymuje strukturę.
5. **Kara umowna przy zakazie konkurencji** — dodana, z podstawą w art. 159 (dokładne określenie obowiązku); w szablonie 01 sankcją było tylko umorzenie.

Wspólny rdzeń pozostał, bo wynika z ustawy, nie z konwencji: elementy z art. 157 § 1, rygory art. 159 i 183 § 1, konstrukcja art. 176, upoważnienia z art. 193 § 2 i 194, ograniczenie odwołania zarządu (art. 203 § 2), pełnomocnik z art. 210 § 1, przyczyna rozwiązania z art. 270 pkt 1.
