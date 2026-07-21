---
name: analizator-umow
description: Analiza i redakcja umów w kontekście polskiego prawa. Aktywuj gdy użytkownik — załącza tekst umowy do przejrzenia, prosi o klauzule ("napisz klauzulę o…"), pyta czy postanowienie jest zgodne z prawem, prosi o wzór umowy (umowa spółki, kontrakt terapeutyczny, DPA/powierzenia RODO, umowa najmu lokalu medycznego, kontrakt menedżerski, umowa o pracę z psychologiem), pyta o ryzyko w umowie. Uproszczona adaptacja `Lex-Machina/*/analizator-umow-v1` — dopasowana do Claude Code i naszej bazy.
---

# Analizator umów

## Zakres

Umowy typowe dla praktyki kancelarii w profilu:
- **Umowa spółki z o.o.** (medyczna, psychologiczna) — KSH art. 157 + specyfika medyczna
- **Kontrakt terapeutyczny / umowa o świadczenie usług psychologicznych** — u.p.p. + KC + RODO
- **Umowa powierzenia przetwarzania (DPA / RCP)** — RODO art. 28
- **Kontrakt menedżerski / umowa o pracę z członkiem zarządu** — KSH art. 210 § 1 + KC/KP
- **Umowa najmu lokalu gabinetu** — z klauzulami cesji przy przejściu JDG → sp. z o.o.
- **Umowa aportu przedsiębiorstwa / ZCP** — art. 55¹ KC + KSH art. 14, 158
- **Umowa między wspólnikami** (SHA — shareholders agreement)
- **Umowa o zachowaniu poufności (NDA)** — z klauzulą tajemnicy zawodowej

## Workflow analizy istniejącej umowy

### 1. Klasyfikacja
Rozpoznaj typ umowy po strukturze i tytule; jeśli hybryda — rozłóż na komponenty.

### 2. Identyfikacja stron
- Kto jest kim (osoba fizyczna / prawna, JDG / spółka, KRS / CEIDG)
- Reprezentacja (art. 204, 210 KSH przy spółkach)
- **Kruczek:** umowa między spółką a członkiem zarządu bez pełnomocnika ZW (art. 210 § 1 KSH) — **nieważna**

### 3. Sprawdzenie klauzul obligatoryjnych

Dla umowy spółki z o.o. (art. 157 § 1 KSH):
- [ ] Firma i siedziba
- [ ] Przedmiot działalności
- [ ] Wysokość kapitału zakładowego
- [ ] Czy wspólnik może mieć > 1 udział
- [ ] Liczba i wartość nominalna udziałów per wspólnik
- [ ] Czas trwania (jeśli oznaczony)

Dla umowy powierzenia (art. 28 ust. 3 RODO):
- [ ] Przedmiot i czas trwania przetwarzania
- [ ] Charakter i cel przetwarzania
- [ ] Rodzaj danych osobowych i kategorie osób, których dotyczą
- [ ] Obowiązki i prawa administratora
- [ ] Podpowierzenie tylko za pisemną zgodą + na tych samych warunkach
- [ ] Zwrot/usunięcie danych po zakończeniu
- [ ] Audyty i wsparcie administratora
- [ ] Zachowanie poufności

### 4. Klauzule podwyższonego ryzyka (red flags)

- **„Bez ograniczeń kwotowych" / „nieograniczona odpowiedzialność"** — sprawdź czy proporcjonalne
- **Kary umowne bez górnego limitu** — art. 483 KC / miarkowanie
- **Zakaz konkurencji bez wynagrodzenia** po ustaniu umowy — nieważny w kontekście KP (art. 101² KP); w KC — do 3 lat + ekwiwalent zwyczajowo
- **Klauzula prawa właściwego obcego** — bardzo ostrożnie w umowach z konsumentami/pacjentami
- **Klauzula arbitrażowa w umowie z konsumentem** — mocno ograniczona
- **Klauzula asymetryczna** — jednostronny prawidłowy zapis (np. tylko jedna strona może wypowiedzieć)
- **RODO — brak DPA / brak klauzuli informacyjnej / zgoda „wymagana z automatu"** — naruszenie
- **Umowa z jedynym wspólnikiem-zarządem BEZ formy aktu notarialnego** — art. 210 § 2 KSH = nieważność

### 5. Weryfikacja podstaw prawnych

Każde powołanie na przepis w umowie:
- Sprawdź czy artykuł nadal obowiązuje (`odczyt-aktu` / `eli-weryfikacja`)
- Sprawdź czy tytuł aktu odpowiada tezie (KROK 2B)
- Odnotuj jeśli powołanie na uchylony artykuł — częsty problem w starych szablonach

### 6. Wnioski

Struktura raportu:
- **Streszczenie** (typ, strony, przedmiot, cel)
- **Zgodność z ustawą** — checkboxy dla klauzul obligatoryjnych
- **Klauzule podwyższonego ryzyka** — z uzasadnieniem
- **Braki** — czego nie ma, a powinno być
- **Rekomendacje redakcyjne** — konkretne zdania do wstawienia / zmiany
- **Ryzyka prawne** — cywilne, karne (art. 233 § 6 KK przy oświadczeniach!), podatkowe, zawodowe

## Workflow tworzenia umowy od podstaw

1. **Wywiad** — parametry (strony, cel, wartość, czas, jurysdykcja)
2. **Wybór szablonu** — z `wiedza/` lub tworzenie od zera
3. **Klauzule obligatoryjne** — z checklisty powyżej
4. **Klauzule chroniące klienta** — dobrane do interesu strony, którą reprezentujemy
5. **Klauzule wykonawcze** — mechanizmy egzekwowania (kary umowne, klauzula rezolucyjna, arbitraż)
6. **Klauzule końcowe** — prawo właściwe, jurysdykcja, klauzula salwatoryjna, forma zmian
7. **RODO** — zawsze klauzula informacyjna + powiązanie z DPA (jeśli powierzenie)

## Wzory bazowe

W tym momencie w repo nie ma jeszcze wzorów jako plików gotowych. Przy pytaniu użytkownika o wzór:
1. Zaproponuj szkielet + wypełnienie
2. Zapisz jako `wiedza/wzory/<typ>-<wariant>.md` z metadanymi (data, wersja, oparte na art. …)
3. Wskaż potrzebę weryfikacji przez adwokata przed użyciem

## Kluczowe kruczki dla profilu kancelarii

### Kontrakt terapeutyczny (umowa z pacjentem)

Musi zawierać:
- Strony (spółka jako podmiot leczniczy, nie psycholog osobiście)
- Zakres świadczeń (poziom TREŚĆ z u.dz.l. art. 2 pkt 10 — świadczenie zdrowotne)
- Cennik i zasady płatności
- Klauzula tajemnicy (u.p.p. art. 13–14 + u.psy 2001 art. 14 / od 2028 u.psy 2026)
- Klauzula RODO (art. 9 ust. 2 lit. h — leczenie; nie zgoda!)
- Zasady odwoływania sesji, płatność za nieodwołaną
- Zgoda na dokumentację medyczną (obligatoryjna z u.p.p.)
- Zgoda na nagrywanie/superwizję **osobno, wyraźnie** (art. 22 u.p.p.)
- Informacja o sprzeciwie wobec ujawnienia tajemnicy po śmierci (art. 14 ust. 4 u.p.p.)

### DPA dla spółki medycznej

Musi zawierać:
- Kategorie danych: **dane szczególnej kategorii — o zdrowiu** (art. 9 RODO)
- Podstawa: art. 28 RODO + u.p.p. art. 24 ust. 5–7 (tajemnica procesora także po śmierci)
- Podpowierzenie tylko po pisemnej zgodzie
- Audyt na żądanie administratora
- Zwrot danych bez zbędnej zwłoki (u.p.p. art. 24 ust. 5)
- Klauzula, że realizacja umowy nie może zakłócać dostępu do dokumentacji medycznej

### Umowa spółki medycznej — nietypowe klauzule

Z `wiedza/spolki-medyczne/03-udzialy-i-wspolnicy.md` i `05-wynagrodzenia-i-swiadczenia.md`:
- Klauzula z art. 176 KSH (powtarzające się świadczenia niepieniężne wspólników)
- Klauzula z art. 177 KSH (dopłaty)
- Ograniczenie zbycia udziałów (art. 182)
- Warunek posiadania prawa wykonywania zawodu psychologa
- Klauzula na wypadek utraty prawa wykonywania zawodu
- Klauzula tie-breaker (art. 208 § 8 KSH)

## Zasady prezentacji wyników

Nie wysyłaj gotowego dokumentu jako "produktu do użycia" — status **DRAFT** do świadomej akceptacji adwokata. Wprost:
> „DRAFT — do sprawdzenia i akceptacji przez adwokata przed podpisaniem"

Dołącz listę pytań otwartych, na które trzeba domówić parametry.

## Powiązania

- `prawo-hardgate` — wszystkie cytaty przez bramkę
- `spolki-medyczne` — dla umów w kontekście gabinetu psychologicznego
- `odczyt-aktu` — dla konkretnych podstaw prawnych
- `eli-weryfikacja` — dla podstaw poza naszymi aktami (np. KP, KC pełny)
