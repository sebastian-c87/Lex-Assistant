# 07. Rejestracja: KRS + RPWDL

**Źródła:**
- KSH t.j. Dz.U. 2024 poz. 18 — ✅ [VER: ELI DU/2024/18, 2026-07-21]
- Ustawa o działalności leczniczej t.j. Dz.U. 2026 poz. 156 — ✅ [VER: ELI DU/2026/156, 2026-07-21]

## Kolejność: KRS → RPWDL (nie odwrotnie)

**Dlaczego:**
- Sp. z o.o. istnieje jako osoba prawna dopiero z chwilą wpisu do KRS (art. 12 KSH)
- Wpis do RPWDL wymaga wskazania danych podmiotu — w tym NIP, REGON, formy organizacyjno-prawnej (art. 100 ust. 1 u.dz.l.)
- Bez KRS spółka nie ma NIP ani REGON (nabywa je z chwilą wpisu do KRS + rejestracji GUS)

**Wyjątek:** można zarejestrować spółkę w organizacji jako podmiot leczniczy — ale w praktyce lepiej poczekać na KRS, żeby uniknąć podwójnych aktualizacji.

## Krok 1: KRS

### Dokumenty do wniosku (uproszczenie — pełną listę reguluje ustawa o KRS)

- Umowa spółki (akt notarialny lub wygenerowana z S24)
- Dowody wniesienia wkładów (wyciąg z rachunku bankowego dla wkładów pieniężnych, potwierdzenie aportu — dla aportu)
- Oświadczenia członków zarządu o wyrażeniu zgody na powołanie + adresach doręczeń
- Lista wspólników z liczbą i wartością nominalną udziałów
- Wzory podpisów członków zarządu (dawniej wymagane; obecnie może być zniesione — ⚠️ WERYFIKACJA aktualnego stanu)
- Uchwała o powołaniu zarządu (jeśli nie w umowie spółki)
- Adres siedziby (może być inny niż siedziba)
- Potwierdzenie PCC (0,5% od kapitału zakładowego)

**Kanały:**
- **PRS (Portal Rejestrów Sądowych)** — od 2021 obowiązkowa forma elektroniczna
- **S24** — jeśli spółka zakładana wzorcem umowy

**Termin na zgłoszenie (po stronie spółki) — art. 169 KSH:**

„§ 1. Jeżeli zawiązanie spółki nie zostało zgłoszone do sądu rejestrowego **w terminie sześciu miesięcy** od dnia zawarcia umowy spółki albo jeżeli postanowienie sądu odmawiające zarejestrowania stało się prawomocne, **umowa spółki ulega rozwiązaniu**.
§ 2. W przypadku spółki, której umowa została zawarta przy wykorzystaniu wzorca umowy, termin, o którym mowa w § 1, wynosi **7 dni**."

✅ [VER: api.sejm.gov.pl ELI DU/2024/18, 2026-07-21]

**→ Kruczek:** 7 dni dotyczy **wyłącznie** ścieżki S24 (wzorzec umowy). Przy akcie notarialnym jest 6 miesięcy. Sankcją nie jest grzywna, a **rozwiązanie umowy spółki** — spółka w organizacji upada, wkłady podlegają zwrotowi.

**Termin sądu rejestrowego:** praktycznie 1–4 tygodnie (⚠️ WERYFIKACJA aktualnych czasów — nie wynika z KSH).

**Koszty:**
- Wpis do KRS: 500 PLN (ścieżka tradycyjna) / 250 PLN (S24) — ⚠️ WERYFIKACJA aktualnych stawek
- Ogłoszenie w MSiG: 100 PLN
- PCC: 0,5% od kapitału zakładowego (przy S24 płatne w portalu; przy akcie notarialnym pobierane przez notariusza)

### Po wpisie do KRS

- Automatyczne nadanie NIP przez US (system CRP KEP)
- Automatyczne nadanie REGON przez GUS
- Otwarcie rachunku bankowego spółki (na podstawie odpisu KRS + NIP)
- Zgłoszenie beneficjentów rzeczywistych do CRBR w terminie 7 dni od wpisu do KRS (⚠️ WERYFIKACJA aktualnego terminu; naruszenie sankcjonowane finansowo)

## Krok 2: RPWDL — rejestr podmiotów wykonujących działalność leczniczą

### Podstawa: art. 100 u.dz.l. — treść wniosku

„1. Podmiot, który zamierza wykonywać działalność leczniczą jako podmiot leczniczy, składa organowi prowadzącemu rejestr […] wniosek o wpis do rejestru podmiotów wykonujących działalność leczniczą, zwanego dalej „rejestrem", zawierający następujące dane:
1) imię i nazwisko, nazwę albo firmę;
2) adres siedziby albo miejsca zamieszkania;
3) adres miejsca udzielania świadczeń zdrowotnych albo miejsca przyjmowania wezwań i przechowywania dokumentacji medycznej – w przypadku wykonywania działalności leczniczej wyłącznie w miejscu wezwania;
4) formę organizacyjno-prawną;
5) **rodzaj działalności leczniczej oraz zakres udzielanych świadczeń zdrowotnych**;
6) **nazwę zakładu leczniczego oraz wykaz jego jednostek lub komórek organizacyjnych**, których działalność jest związana z udzielaniem świadczeń zdrowotnych;
8) numer REGON;
9) Numer Identyfikacji Podatkowej (NIP);"

### Nazwa zakładu leczniczego (art. 100 ust. 1a)

„Nazwa zakładu leczniczego, o której mowa w ust. 1 pkt 6, **nie może być taka sama jak oznaczenie podmiotu leczniczego** zgodnie z ust. 1 pkt 1."

**→ Kruczek:** jeśli spółka nazywa się „Ośrodek Psychologiczny XYZ sp. z o.o.", nazwa zakładu leczniczego (gabinetu) musi być inna, np. „Poradnia Psychologiczna XYZ" albo „Zakład Leczniczy XYZ Warszawa".

### Oświadczenie pod rygorem odpowiedzialności karnej (art. 100 ust. 2)

„Wraz z wnioskiem wnioskodawca składa oświadczenie następującej treści: „Świadomy odpowiedzialności karnej za złożenie fałszywego oświadczenia wynikającej z art. 233 § 6 ustawy z dnia 6 czerwca 1997 r. – Kodeks karny oświadczam, że:
1) dane zawarte we wniosku o wpis do rejestru podmiotów wykonujących działalność leczniczą są kompletne i zgodne z prawdą;
2) **znane mi są i spełniam warunki wykonywania działalności leczniczej w zakresie objętym składanym wnioskiem** określone w ustawie z dnia 15 kwietnia 2011 r. o działalności leczniczej;
3) nie prowadzę hurtowni farmaceutycznej […];
4) nie zajmuję się pośrednictwem w obrocie produktami leczniczymi […]"

**→ Kruczek karno-prawny:** oświadczenie pkt 2 = potwierdzenie, że spółka:
- ma pomieszczenia spełniające wymagania (art. 17, 22 u.dz.l.)
- zapewnia kadrę z prawem wykonywania zawodu
- ma umowę OC obowiązkowego (art. 17 ust. 1 pkt 4)
- używa właściwych wyrobów medycznych

**Nieprawdziwe oświadczenie → odpowiedzialność karna z art. 233 § 6 KK** (⚠️ WERYFIKACJA aktualnego brzmienia).

### Organ prowadzący rejestr (art. 106 ust. 1 u.dz.l.)

Dla spółki-podmiotu leczniczego: **wojewoda właściwy dla siedziby**.

„Organem prowadzącym rejestr jest:
1) **wojewoda właściwy dla siedziby albo miejsca zamieszkania podmiotu leczniczego** – w odniesieniu do podmiotów leczniczych,
2) okręgowa rada lekarska […] – w odniesieniu do praktyk lekarskich,
3) okręgowa rada pielęgniarek i położnych […],
4) Krajowa Rada Fizjoterapeutów […],
5) Krajowa Rada Diagnostów Laboratoryjnych […]"

**→ Kruczek:** psycholog nie ma „swojej" rady (w u.dz.l. nie ma katalogu dla psychologów jako praktyki) — dlatego jedyna droga to zarejestrowanie sp. z o.o. u wojewody.

### Jawność rejestru (art. 106 ust. 1a)

„Rejestr jest jawny."

→ Dane spółki jako podmiotu leczniczego, jej zakładu i jednostek organizacyjnych — publicznie dostępne (rejestr online: `rpwdl.ezdrowie.gov.pl` — ⚠️ WERYFIKACJA aktualnego adresu).

## Krok 3: Kiedy można zacząć udzielać świadczeń?

Art. 103 u.dz.l.: „Działalność leczniczą można rozpocząć **po uzyskaniu wpisu do rejestru**, z zastrzeżeniem art. 104."

### Art. 104 u.dz.l. — furtka 30 + 40 dni (treść zweryfikowana)

„1. Organ prowadzący rejestr dokonuje wpisu do rejestru **w terminie 30 dni** od dnia wpływu wniosku o wpis do rejestru wraz z oświadczeniem.
2. Jeżeli właściwy organ nie dokona wpisu w terminie, o którym mowa w ust. 1, a od dnia wpływu wniosku do tego organu **upłynęło 40 dni**, wnioskodawca **może rozpocząć działalność po uprzednim zawiadomieniu o tym na piśmie organu**, który nie dokonał wpisu. **Nie dotyczy to przypadku, gdy organ wezwał tego wnioskodawcę do uzupełnienia wniosku** o wpis nie później niż przed upływem 7 dni od dnia jego otrzymania. W takiej sytuacji termin, o którym mowa w zdaniu pierwszym, biegnie od dnia wpływu uzupełnienia wniosku o wpis.
3. Organ prowadzący rejestr wydaje z urzędu **zaświadczenie o dokonaniu wpisu** do rejestru."

✅ [VER: api.sejm.gov.pl ELI DU/2026/156, 2026-07-21]

**→ Sprostowanie wcześniejszej wersji tego pliku:** to NIE jest „domniemanie wpisu po 30 dniach". Mechanizm jest dwuetapowy i warunkowy:
- 30 dni = termin dla organu (instrukcyjny, sam upływ nie uprawnia do startu),
- 40 dni = dopiero wtedy wnioskodawca może zacząć, i **wyłącznie po pisemnym zawiadomieniu** organu,
- wezwanie do uzupełnienia w ciągu pierwszych 7 dni **resetuje** bieg 40 dni od dnia wpływu uzupełnienia.

**→ Kruczek procesowy:** licząc 40 dni trzymaj dowód doręczenia zawiadomienia — start działalności bez zawiadomienia to działalność bez wpisu (art. 103 u.dz.l.), z konsekwencjami dla ważności rozliczeń i dla oświadczenia z art. 100 ust. 2.

**→ Praktyczne konsekwencje:**
- Nie można umawiać pacjentów przed wpisem do RPWDL
- Nie można wystawiać rachunków za świadczenia przed wpisem
- Nie można ogłaszać się jako gabinet do czasu wpisu (etycznie i prawnie)

## Krok 4: Aktualizacja wpisu przy zmianach

Wpis do rejestru musi być aktualizowany — art. 106 ust. 3 u.dz.l. wymienia dane, które podlegają wpisowi. Jeśli się zmieniają (np. dodatkowa lokalizacja, zmiana adresu, zmiana rodzaju świadczeń), trzeba zgłosić do wojewody.

**⚠️ Termin i procedura wymagają weryfikacji z konkretnymi przepisami (art. 107 u.dz.l.).**

## Timeline: od decyzji do pierwszego pacjenta

| Krok | Czas | Uwagi |
|---|---|---|
| Umowa spółki (akt notarialny) | 1 dzień | Termin u notariusza |
| Zgłoszenie do KRS | **6 miesięcy** od zawarcia umowy (akt notarialny) / **7 dni** (wzorzec umowy S24) | Art. 169 § 1 i § 2 KSH — po upływie umowa spółki **ulega rozwiązaniu** |
| Wpis do KRS | 1–4 tygodnie | Zależy od sądu |
| Nadanie NIP + REGON | do 7 dni po KRS | Automatycznie |
| Otwarcie rachunku | 1–3 dni po NIP | |
| Zgłoszenie beneficjentów CRBR | 7 dni od KRS | Sankcja finansowa |
| Wynajęcie/przygotowanie lokalu | równolegle | Musi spełniać wymogi u.dz.l. |
| Umowa OC obowiązkowego | równolegle | Warunek RPWDL |
| Wniosek do RPWDL (wojewoda) | po KRS | |
| Wpis do RPWDL | zwykle 14–30 dni | Uzależnione od kompletności |
| **Rozpoczęcie działalności** | po wpisie do RPWDL | Art. 103 u.dz.l. |

**Realistyczny total: 6–10 tygodni od decyzji do pierwszego pacjenta.**

## Kruczki, które łatwo przegapić

- [ ] **Lokal musi być gotowy przed wnioskiem RPWDL** — w oświadczeniu potwierdzasz spełnienie warunków art. 17 (pomieszczenia). Kontrola sanepidu wcześniej.
- [ ] **OC obowiązkowe** — polisa musi obowiązywać od dnia rozpoczęcia działalności, nie od dnia wniosku
- [ ] **Kadry** — przy wniosku musisz mieć zatrudnionych psychologów z prawem wykonywania zawodu (lub podpisane umowy warunkowe na dzień wpisu)
- [ ] **Regulamin organizacyjny** — art. 24 u.dz.l. wymaga; treść: opis struktury, zasad udzielania świadczeń, prawa i obowiązki pacjentów, cennik
- [ ] **Cennik świadczeń** — powinien być publikowany zgodnie z u.p.p. (art. 12 — ⚠️ WERYFIKACJA)
- [ ] **CRBR** — beneficjent rzeczywisty do zgłoszenia. Kara za brak: do 1 mln PLN
- [ ] **Zgłoszenie do NFZ** — TYLKO jeśli spółka planuje kontrakt z NFZ; do usług prywatnych nie wymagane
- [ ] **PIP i BHP** — jeśli spółka ma pracowników

## Powiązania

- Podstawy podmiotu leczniczego → [01-podmiot-leczniczy-podstawy](01-podmiot-leczniczy-podstawy.md)
- Wymagania OC, pomieszczenia → [12-checklist-i-kruczki](12-checklist-i-kruczki.md)
- RODO i dokumentacja pacjentów → [08-rodo-i-dokumentacja](08-rodo-i-dokumentacja.md)
