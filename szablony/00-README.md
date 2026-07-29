# Szablony dokumentów korporacyjnych — sp. z o.o. jako podmiot leczniczy (gabinet psychologiczny)

Zestaw wzorów dokumentów dla spółki z ograniczoną odpowiedzialnością prowadzącej działalność leczniczą w zakresie ambulatoryjnych świadczeń zdrowotnych — usług psychologicznych.

## Spis szablonów

| # | Plik | Zawartość |
|---|---|---|
| 01 | [Umowa spółki](01-umowa-spolki-z-o-o-medyczna.md) | Pełna umowa spółki + metoda konstruowania: co jest obligatoryjne, co warunkowo obligatoryjne, co fakultatywne, czego wpisać nie wolno |
| 02 | [Uchwały i zgromadzenie wspólników](02-uchwaly-i-zgromadzenie-wspolnikow.md) | Zasady zwoływania, kworum, większości, tryby głosowania, protokół + 12 gotowych wzorów uchwał |
| 03 | [Dokumenty założycielskie i korporacyjne](03-dokumenty-zalozycielskie-i-korporacyjne.md) | Załączniki do wniosku KRS, lista wspólników, oświadczenia, księga udziałów, pełnomocnik z art. 210 KSH |
| 04 | [Źródła i weryfikacja](04-zrodla-i-weryfikacja.md) | Wszystkie przepisy użyte w szablonach 01–03, ze znacznikami VER i wskazaniem, co pozostaje niezweryfikowane |
| 05 | [Umowa spółki — wersja niezależna (Fable)](05-umowa-spolki-z-o-o-wersja-fable.md) | Samodzielny wzór w konfiguracji **60/40** — ochrona mniejszości większością 3/4, tag-along, umorzenie automatyczne, podwyższenie bez zmiany umowy, kara umowna |
| 06 | [Spółka w organizacji (Fable)](06-spolka-w-organizacji.md) | Faza od aktu notarialnego do wpisu: dlaczego nie ma odrębnej „umowy spółki w organizacji", firma „w organizacji", pełnomocnik z jednomyślnej uchwały, odpowiedzialność i jej wygaszanie, rejestr czynności, likwidacja |
| 07 | [Źródła i weryfikacja 05–06 (Fable)](07-zrodla-i-weryfikacja-fable.md) | Niezależna warstwa weryfikacyjna nowej pary + różnice konstrukcyjne wobec 01–03 |
| 08 | [Rok obrotowy i estoński CIT](08-rok-obrotowy-i-estonski-cit.md) | **Analiza decyzyjna dla startu we wrześniu 2026**: wydłużyć pierwszy rok obrotowy do 31.12.2027 czy nie; czy estoński CIT się opłaca; **konflikt ryczałtu z konstrukcją art. 176 KSH** użytą w szablonach 01 i 05 |

Szablony 01–04 tworzą komplet dla konfiguracji **50/50**; szablony 05–07 są od nich niezależne (odrębna weryfikacja, konfiguracja **60/40**, inna strategia ochrony wspólników). Wspólny pozostaje tylko rdzeń ustawowy.

## Jak czytać te pliki

Każdy szablon ma dwie warstwy, wizualnie rozdzielone:

- **Treść wzoru** — w blokach cytatu (`>`) albo w blokach kodu. To tekst do przeniesienia do dokumentu.
- **Komentarz redakcyjny** — poza blokami, oznaczony `▸`. Wyjaśnia, dlaczego postanowienie brzmi tak, a nie inaczej, jaki rygor grozi za jego pominięcie i kiedy je zmodyfikować.

**W treści wzorów świadomie nie ma znaczników `[VER: …]` ani numerów ELI** — dokument prawny ma czytać się jak dokument, nie jak notatka badawcza. Cała warstwa weryfikacyjna jest w [04-zrodla-i-weryfikacja.md](04-zrodla-i-weryfikacja.md), gdzie każdy przepis ma przypisany akt, ELI i datę weryfikacji. Komentarze redakcyjne powołują goły numer artykułu — pełny adres znajdziesz w pliku 04.

## Dane w szablonach są fikcyjne

Firma, nazwiska, adresy, kwoty, liczba i wartość udziałów zostały wymyślone, ale trzymają się wewnętrznej spójności — kapitał zgadza się z iloczynem liczby udziałów i ich wartości nominalnej, sumy udziałów wspólników dają całość kapitału, progi kwotowe w klauzulach są proporcjonalne do kapitału.

**Konfiguracja użyta we wszystkich szablonach:**

| Parametr | Wartość |
|---|---|
| Firma | Centrum Psychologiczne VERTIS spółka z ograniczoną odpowiedzialnością |
| Siedziba | Warszawa |
| Adres | ul. Puławska 145 lok. 4, 02-715 Warszawa |
| Kapitał zakładowy | 60 000 zł |
| Udziały | 600 udziałów po 100 zł |
| Wspólnicy | Anna Zawadzka — 300 udziałów (30 000 zł); Marek Sikorski — 300 udziałów (30 000 zł) |
| Zarząd | dwuosobowy: Anna Zawadzka (prezes), Marek Sikorski (wiceprezes) |
| Rada nadzorcza | nie ustanowiono |
| Rok obrotowy | rok kalendarzowy; **pierwszy rok wydłużony — od rozpoczęcia działalności do 31.12.2027** (start działalności: wrzesień 2026) |
| Data zawarcia umowy | 5 sierpnia 2026 r. |

**Numery PESEL i serie dokumentów tożsamości zostawiono jako pola do wypełnienia**, nie wymyślono ich. PESEL ma cyfrę kontrolną — wygenerowany „losowo" numer poprawny formalnie należałby do konkretnej żywej osoby. W dokumencie do podpisu i tak wpisuje je notariusz z okazanych dokumentów.

Pola do wypełnienia mają postać `[___]` albo `[opis wartości]`.

## Warstwa medyczna — czym ta umowa różni się od zwykłej sp. z o.o.

Cztery rzeczy wynikające z tego, że spółka jest podmiotem leczniczym. Każda ma odzwierciedlenie w konkretnym paragrafie szablonu 01:

1. **Kierownikiem podmiotu leczniczego jest zarząd**, a nie prezes indywidualnie — ustawa o działalności leczniczej definiuje „kierownika" tak, że obejmuje zarząd spółki kapitałowej. Obowiązki kierownika (m.in. ustalenie regulaminu organizacyjnego) spoczywają na zarządzie kolektywnie. → § 4 ust. 1 i § 19 ust. 2 pkt 4 szablonu 01.
2. **Świadczeń mogą udzielać wyłącznie osoby wykonujące zawód medyczny** — spółka odpowiada za spełnienie tego warunku. Stąd wymóg kwalifikacyjny wobec wspólników zobowiązanych do świadczeń i wobec członków zarządu nadzorujących ich udzielanie. → § 10 ust. 3 i § 17 ust. 7 szablonu 01.
3. **Nazwa zakładu leczniczego nie może być taka sama jak firma spółki** — to nie postanowienie umowy, ale ograniczenie, które trzeba uwzględnić **projektując firmę**. Jeśli firma zużyje jedyną sensowną nazwę, w rejestrze podmiotów wykonujących działalność leczniczą zostaniecie z nazwą sztuczną. → uwaga przy § 1 szablonu 01.
4. **Cezura 19 maja 2028 r.** — od tego dnia prawo wykonywania zawodu psychologa powstaje z chwilą wpisu do Rejestru Psychologów. Zobowiązanie do uzyskania i utrzymania wpisu trzeba wpisać do umowy **teraz**, bo dopisanie go później wymaga zmiany umowy w formie aktu notarialnego. → § 10 ust. 4 szablonu 01, z sankcją w § 16 ust. 3 pkt 2.
5. **Dokumentacja medyczna przeżywa spółkę** — obowiązek jej przechowywania biegnie 20 lat od ostatniego wpisu, a za niedopełnienie obowiązków po zaprzestaniu działalności karę pieniężną ponosi **osobiście** ostatni kierownik, likwidator albo syndyk. Stąd obowiązek zawarcia umowy o przechowywanie dokumentacji z wyprzedzeniem. → § 29 ust. 3–4 szablonu 01.

## Ograniczenia tych szablonów — przeczytaj przed użyciem

- **To nie substytut pracy notariusza.** Umowa spółki z o.o. wymaga formy aktu notarialnego. Notariusz sporządza akt na podstawie ustalonej treści — szablon służy do przygotowania tej treści przed wizytą, żeby nie improwizować klauzul przy stole.
- **Postanowienia podatkowe i składkowe świadomie pominięto.** Skutki podatkowe wynagrodzenia z powtarzających się świadczeń niepieniężnych, dywidendy i wynagrodzenia zarządu wymagają rozstrzygnięcia z doradcą podatkowym na dzień czynności. Szablon konstruuje podstawę korporacyjną, nie optymalizację.
- **Nie ma tu klauzul, których dopuszczalność jest sporna** — np. przyznania przewodniczącemu zgromadzenia głosu rozstrzygającego przy równości głosów wspólników. Zamiast tego szablon podaje mechanizmy, których podstawa jest wyraźna w ustawie. Uzasadnienie: § 24 szablonu 01.
- **Weryfikacja obejmuje Kodeks spółek handlowych, ustawę o działalności leczniczej, ustawę o prawach pacjenta i obie ustawy o zawodzie psychologa** — te akty mamy lokalnie w `akty/`. Wszystko poza nimi (koszty notarialne, PCC, KRS, RODO w części, przepisy podatkowe) jest w pliku 04 oznaczone jako niezweryfikowane, z podaniem, co sprawdzić.

## Powiązania z bazą wiedzy

- Dlaczego psycholog w sp. z o.o. jest podmiotem leczniczym → [`wiedza/spolki-medyczne/01-podmiot-leczniczy-podstawy.md`](../wiedza/spolki-medyczne/01-podmiot-leczniczy-podstawy.md)
- S24 vs akt notarialny, przebieg zakładania → [`02-sp-z-o-o-zakladanie.md`](../wiedza/spolki-medyczne/02-sp-z-o-o-zakladanie.md)
- Udziały, ryzyko 50/50, wyjście wspólnika → [`03-udzialy-i-wspolnicy.md`](../wiedza/spolki-medyczne/03-udzialy-i-wspolnicy.md)
- Wynagrodzenia wspólników, art. 176 KSH → [`05-wynagrodzenia-i-swiadczenia.md`](../wiedza/spolki-medyczne/05-wynagrodzenia-i-swiadczenia.md)
- Aport z JDG → [`06-aport-jdg.md`](../wiedza/spolki-medyczne/06-aport-jdg.md)
- Pełna lista urzędów i terminów → [`13-mapa-instytucji-krok-po-kroku.md`](../wiedza/spolki-medyczne/13-mapa-instytucji-krok-po-kroku.md)
