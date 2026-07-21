---
name: prawny-router
description: Klasyfikuje pytanie prawne użytkownika i kieruje do właściwych źródeł lokalnych + skilli szczegółowych. Aktywuj przy otwartym pytaniu prawnym, gdy — użytkownik przedstawia sprawę bez wskazania dziedziny ("mam sprawę", "klient pyta o…", "jak podejść do…"), lub gdy kwestia dotyka kilku dziedzin (np. sp. z o.o. medyczna = KSH + u.dz.l. + RODO). Rozstrzyga kolejność zasobów, wskazuje relevant art., proponuje kolejny skill. Punkt wejścia dla każdej nowej rozmowy prawnej.
---

# Prawny router — klasyfikacja i orkiestracja

Wersja adaptowana z `Lex-Machina/*/prawny-router-v3` (GPL v3). Uproszczona — bez macierzy aktywacji [1]–[10] i step-trackera, dopasowana do stylu Claude Code.

## Krok 1: Klasyfikacja dziedziny

Rozpoznaj po słowach kluczowych i wskazanych aktach:

| Dziedzina | Sygnały językowe | Zasoby lokalne |
|---|---|---|
| **Spółki / prawo handlowe** | sp. z o.o., s.a., wspólnik, zarząd, KRS, KSH, udziały, dywidenda | `akty/ksh/*.index.json`; skill `odczyt-aktu` (moduł `ksh`) |
| **Prawo medyczne — podmiot leczniczy** | podmiot leczniczy, RPWDL, gabinet, praktyka, u.dz.l., wojewoda | `akty/prawo_medyczne/...dzialalnosci_leczniczej...`; moduł `udzl` |
| **Prawa pacjenta / dokumentacja** | pacjent, tajemnica medyczna, dokumentacja medyczna, RPP | moduł `pp` |
| **Zawód psychologa** | psycholog, prawo wykonywania zawodu, Rejestr Psychologów, Krajowa Izba | moduły `psy2001` (do 19.05.2028) + `psy2026` (od) |
| **Ochrona zdrowia psychicznego** | zaburzenia psychiczne, przymusowe umieszczenie, ubezwłasnowolnienie | moduł `ozp` |
| **RODO / ochrona danych** | RODO, GDPR, ADO, IOD, RCP, DPIA, incydent, powierzenie | brak lokalnie; RODO przez EUR-Lex, UODO przez ELI DU/2019/1781 |
| **Prawo cywilne** | KC, zobowiązania, umowy, własność, spadki | brak lokalnie; ELI DU/2026/795 (t.j. KC) — dorzucić do config gdy potrzeba |
| **Prawo karne** | KK, KPK, KKW, wykroczenia, przestępstwo, zarzut | brak lokalnie; ELI DU/2025/383 (KK), DU/2025/911 (KKW) |
| **Prawo pracy** | KP, umowa o pracę, ZUS, świadczenia | brak lokalnie; dorzucić |
| **Sądowoadministracyjne** | WSA, NSA, KPA, decyzja administracyjna, skarga | brak lokalnie |
| **UE** | dyrektywa, rozporządzenie UE, TSUE, CELEX | CELLAR EUR-Lex |

## Krok 2: Wybór trybu

Adopcja z Lex-Machina, dwa tryby:

**PRAWNIK** — użytkownik oczekuje precyzji zawodowej:
- Cytaty dosłowne przepisów (poziom FRAGMENT)
- Odesłania do konkretnych artykułów i orzeczeń
- Analiza z wagą argumentów za/przeciw
- Ryzyka procesowe, tryb postępowania

**LAIK** — pytanie ogólne, prowadzenie za rękę:
- Wyjaśnienie w prostym języku (poziom TREŚĆ — parafraza z odesłaniem)
- Kolejne kroki „co zrobić"
- Sugestia konsultacji z profesjonalistą przy skomplikowanych sprawach

W kontekście tego projektu **domyślny tryb: PRAWNIK** (obsługa adwokata).

## Krok 3: Bramki obowiązkowe

Niezależnie od dziedziny, każde powołanie przepisu / sygnatury przechodzi przez:

1. `prawo-hardgate` — pryzmat cytowania (zawsze aktywny)
2. `odczyt-aktu` — dla aktów w naszych indeksach (poziom 0 — najszybciej)
3. `eli-weryfikacja` — dla aktów spoza + gdy trzeba potwierdzić najnowszy t.j.
4. `saos-sygnatura` — gdy w odpowiedzi ma paść jakakolwiek sygnatura

## Krok 4: Specjalizowane skille tematyczne

- **`spolki-medyczne`** — spółka z o.o. świadcząca usługi psychologiczne (kompletna baza `wiedza/spolki-medyczne/`). Aktywuj gdy pytanie łączy KSH + prawo medyczne (typowe dla profilu kancelarii).
- **`analizator-umow`** — analiza / redakcja umów (z uwzględnieniem klauzul RODO gdy dot. dokumentacji medycznej).

## Krok 5: Anonimizacja (KROK 0A z Lex-Machina — uproszczony)

Jeśli w opisie sprawy pojawiają się dane osobowe klienta (imię, nazwisko, PESEL, adres, sygnatura konkretnej sprawy klienta) — zwróć uwagę, że:
- Analiza może być prowadzona, ale w odpowiedzi zamień dane na oznaczenia typu `[Klient K]`, `[Pełnomocnik P]`, `[Sygn. XX]`
- Chroni to przed przypadkowym wyciekiem przy eksporcie / dzieleniu odpowiedzi

## Wzorzec wywołania (przykłady)

**Użytkownik:** „Wspólnik chce wyjść ze spółki medycznej, jak to zrobić?"
→ Klasyfikacja: **spółki + prawo medyczne** (dwie dziedziny)
→ Zasoby: `wiedza/spolki-medyczne/03-udzialy-i-wspolnicy.md` + KSH art. 180, 182, 199, 200
→ Kolejny skill: `spolki-medyczne` + `odczyt-aktu ksh 180 182 199 200`
→ Tryb: PRAWNIK

**Użytkownik:** „Czy pacjent może żądać usunięcia swojej dokumentacji?"
→ Klasyfikacja: **prawa pacjenta + RODO**
→ Zasoby: u.p.p. art. 29 (obligacja 20 lat) + RODO art. 17 ust. 3 (brak prawa do usunięcia gdy obowiązek prawny)
→ Kolejny skill: `odczyt-aktu pp 29` + rozdz. `wiedza/spolki-medyczne/08-rodo-i-dokumentacja.md`
→ Tryb: PRAWNIK

**Użytkownik:** „Jest wyrok SN III CZP 27/19, co on stanowi?"
→ Klasyfikacja: **orzecznictwo** — najpierw weryfikacja
→ Skill: `saos-sygnatura` (przed jakąkolwiek analizą tezy)

## Wynik działania routera

Zwróć użytkownikowi:
1. **Rozpoznaną dziedzinę / dziedziny**
2. **Krótki zarys „jak podchodzimy do sprawy"** (2–3 punkty)
3. **Pytanie doprecyzowujące jeśli konieczne** (max 2 pytania)
4. **Propozycję pierwszego kroku** (który skill / plik / API)

Nie wchodź od razu w merytoryczną odpowiedź, jeśli pytanie jest szerokie — pozwól użytkownikowi zawęzić.

## Powiązania

- `prawo-hardgate` — meta-workflow
- `odczyt-aktu` / `eli-weryfikacja` / `saos-sygnatura` — bramki
- `spolki-medyczne` — dedykowana baza wiedzy
- `analizator-umow` — narzędzie procesowe
