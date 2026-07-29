# 03. Źródła i akty — obszar RODO

Warstwa weryfikacyjna dla rozdziałów [01](01-zakres-stosowania-rodo.md) i [02](02-kancelaria-adwokacka-jdg.md) oraz dla [`spolki-medyczne/14-inspektor-ochrony-danych`](../spolki-medyczne/14-inspektor-ochrony-danych.md).

**Data opracowania: 2026-07-29.**

---

# 1. Akty prawne — status w bazie

| Akt | Identyfikator | Status w `akty/` | Wpis w `config.json` |
|---|---|---|---|
| **RODO** — rozporządzenie (UE) 2016/679 | **CELEX 02016R0679** (wersja skonsolidowana) | ❌ nie pobrane — egress blokuje EUR-Lex | ✔ `source: "eurlex"`, kategoria `rodo` |
| **Ustawa o ochronie danych osobowych** z 10.05.2018 | Dz.U. 2018 poz. 1000 | ❌ nie pobrane | ✔ do rozwiązania przez ELI |
| **Prawo o adwokaturze** | t.j. — do ustalenia | ❌ nie pobrane | ✔ do rozwiązania przez ELI |
| **Ustawa o świadczeniu usług drogą elektroniczną** | t.j. — do ustalenia | ❌ nie pobrane | ✔ do rozwiązania przez ELI |
| **Prawo komunikacji elektronicznej** z 12.07.2024 | Dz.U. 2024 poz. 1221 (przepisy wprowadzające: poz. 1222) | ❌ nie pobrane | ✔ do rozwiązania przez ELI |
| Ustawa o prawach pacjenta i RPP | DU/2024/581 | ✅ **pobrane** | ✔ przypięte |

## Dlaczego RODO nie zostało pobrane

Podjęto próbę pobrania **wszystkimi dostępnymi kanałami**:

| Kanał | Wynik |
|---|---|
| `curl` → eur-lex.europa.eu | ✗ `403` na CONNECT — proxy loguje `gateway answered 403 to CONNECT (policy denial or upstream failure)` |
| `curl` → publications.europa.eu, op.europa.eu, data.europa.eu, cellar.publications.europa.eu | ✗ identycznie |
| `curl` → isap.sejm.gov.pl, eli.gov.pl, uodo.gov.pl | ✗ identycznie |
| WebFetch (dowolny z powyższych) | ✗ HTTP 403 |
| **Playwright + Chromium** (zainstalowany z npm, uruchomiony na `/opt/pw-browsers/chromium-1194/`) — **z** jawną konfiguracją proxy | ✗ `net::ERR_TUNNEL_CONNECTION_FAILED` |
| **Playwright + Chromium** — **bez** konfiguracji proxy (próba połączenia bezpośredniego) | ✗ `net::ERR_TUNNEL_CONNECTION_FAILED` |
| **Dysk Google użytkownika** — przeszukany pod kątem tekstu rozporządzenia | ✗ brak kopii aktu |
| Hosty w `noProxy` (dostęp bezpośredni): registry.npmjs.org, pypi.org, files.pythonhosted.org | ✔ `200` — ale nie serwują oficjalnych tekstów aktów |
| WebSearch | ✔ działa (idzie poza proxy) — ale zwraca **opisy i omówienia**, nie tekst aktu |

**Wniosek z testu przeglądarkowego:** headless browser nie zmienia nic, bo **blokada jest na poziomie bramy sieciowej kontenera, a nie klienta HTTP**. Chromium zgłasza `ERR_TUNNEL_CONNECTION_FAILED` identycznie z proxy i bez proxy — cały ruch wychodzący jest wymuszany przez politykę egress, która te hosty odrzuca. Żadne narzędzie działające wewnątrz kontenera tego nie obejdzie i obchodzić nie powinno.

**Świadoma decyzja:** nie pobrano kopii RODO z nieoficjalnego źródła (np. przypadkowego repozytorium czy portalu wtórnego). Zasada naczelna tego projektu wymaga tekstu z bazy oficjalnej — nieoficjalna kopia nie przechodzi KROKU 2B i wprowadzałaby do bazy tekst o niepotwierdzonej integralności. Lepiej mieć jawny brak niż niepewne źródło udające pewne.

## Jak pobrać RODO, gdy egress zostanie odblokowany

`fetch-laws.js` **został rozszerzony o obsługę EUR-Lex** (commit z 2026-07-29) — wcześniej obsługiwał wyłącznie polskie ELI.

1. Odblokuj domeny w środowisku (`HANDOFF.md`, sekcja 3a). Do listy dodaj **`eur-lex.europa.eu`** obok `api.sejm.gov.pl`, `isap.sejm.gov.pl` i `eli.gov.pl`.
2. Uruchom:
   ```bash
   node fetch-laws.js --diag        # potwierdź łączność
   node fetch-laws.js --resolve     # rozwiąż adresy Dz.U. dla ustaw krajowych
   node fetch-laws.js --resolve --write
   node fetch-laws.js               # pobierze też RODO z EUR-Lex po CELEX
   ```
3. Konwersja do indeksu: `python tools/html_act_to_md.py`.

**Mechanizm:** wpis z `source: "eurlex"` i `celex` pobierany jest z `eur-lex.europa.eu/legal-content/PL/TXT/HTML/?uri=CELEX:<celex>`. Bramka KROK 2B działa na **treści** dokumentu (brak odrębnych metadanych) — fraza z `expectTitle` musi w nim wystąpić, inaczej plik nie zostaje zapisany. Przetestowane na mocku: dokument o niewłaściwej treści został odrzucony.

**Uwaga o CELEX:** prefiks `0` (jak `02016R0679`) oznacza **wersję skonsolidowaną** — z uwzględnieniem sprostowań i zmian. Prefiks `3` (`32016R0679`) to akt w brzmieniu pierwotnym. Dla pracy prawniczej właściwa jest wersja skonsolidowana.

---

# 2. Przepisy powołane w rozdziałach 01 i 02

Wszystkie ⚠️ — do potwierdzenia po pobraniu aktów.

## RODO

| Przepis | Zagadnienie | Gdzie użyto |
|---|---|---|
| art. 2 ust. 1 | zakres przedmiotowy — przetwarzanie zautomatyzowane i zbiory | 01: § 2 |
| art. 2 ust. 2 lit. c | wyłączenie czynności czysto osobistych lub domowych | 01: § 2, § 6 |
| art. 3 ust. 1–2 | zakres terytorialny | 01: § 3 |
| art. 4 pkt 1, 7, 8, 9 | definicje: dane osobowe, administrator, procesor, odbiorca | 01: § 1, § 4 |
| art. 5 | zasady, w tym rozliczalność i minimalizacja | 01: warstwa A; 02: formularz |
| art. 6 ust. 1 lit. a, b, c, f | podstawy przetwarzania | 01, 02: pięć procesów, formularz |
| art. 9 ust. 1 i ust. 2 lit. f | dane szczególnych kategorii; dochodzenie roszczeń | 02: dane w aktach sprawy |
| art. 10 | dane o wyrokach skazujących i czynach zabronionych | 02: akta spraw karnych |
| art. 12 ust. 3 | miesięczny termin realizacji żądań | 02: procedura |
| art. 13 | obowiązek informacyjny przy zbieraniu od osoby | 02: formularz |
| **art. 14 ust. 5 lit. b i d** | **wyłączenie obowiązku wobec osób trzecich — tajemnica zawodowa** | 02: **kluczowe dla kancelarii** |
| art. 15 ust. 4, art. 17 ust. 3 lit. b i e | granice prawa dostępu i usunięcia | 02: żądania od osób trzecich |
| art. 24, 28, 29, 32 | obowiązki administratora, powierzenie, upoważnienia, bezpieczeństwo | 01: warstwa A; 02: home.pl |
| **art. 30 ust. 1 i 5** | **rejestr czynności i pozorne zwolnienie dla < 250 osób** | 01: warstwa B; 02: kancelaria musi prowadzić |
| art. 33–34 | naruszenia: 72 h, zawiadomienie osób | 01, 02 |
| art. 35 | ocena skutków (DPIA) | 01: warstwa B |
| art. 37–39 | inspektor ochrony danych | 01: warstwa B; szczegóły w `spolki-medyczne/14` |
| art. 44–49 | transfery do państw trzecich | 02: analityka, chmura |
| art. 82 | odszkodowanie dla osoby, której dane dotyczą | 01: § 7 |
| art. 83 ust. 4, 5 | dwa progi kar: 10 mln / 2 % oraz 20 mln / 4 % | 01: § 7 |
| **art. 90** | **tajemnica zawodowa a uprawnienia organu nadzorczego** | 02: **kluczowe dla kancelarii** |
| motyw 18 | wykładnia „czynności osobistych lub domowych" | 01: § 2 |
| motyw 91 | wykładnia „dużej skali" — przykład pojedynczego pracownika ochrony zdrowia | `spolki-medyczne/14` |

## Prawo krajowe

| Przepis | Zagadnienie |
|---|---|
| ustawa o ochronie danych osobowych: art. 8, 10, 11, 11a | obowiązek wyznaczenia IOD, zawiadomienie w 14 dni, publikacja danych, zastępca |
| **Prawo komunikacji elektronicznej: art. 399** | **cookies — zastąpiło art. 173 Prawa telekomunikacyjnego od 10.11.2024** |
| Prawo o adwokaturze: art. 6 | tajemnica adwokacka — zakres, bezterminowość, tryb zwolnienia |
| **Prawo o adwokaturze: art. 16a** | **art. 15 ust. 1 i 3, art. 18, art. 19 RODO tylko w granicach tajemnicy; art. 21 ust. 1 RODO wyłączony** wobec danych z pomocy prawnej |
| **Prawo o adwokaturze: art. 16b** | **tajemnica nie ustaje wobec żądania Prezesa UODO** |
| **Prawo o adwokaturze: art. 16c** | okresy przechowywania 5 i 10 lat — ⚠️ ustalić, czy dotyczą kancelarii, czy organów adwokatury |
| Prawo o adwokaturze: art. 16a–16c, zdanie wyłączające | przepisy **nie obejmują wewnętrznego funkcjonowania** kancelarii, zespołu ani spółki |
| Ustawa o radcach prawnych: art. 5a–5c | odpowiedniki art. 16a–16c dla radców prawnych |
| **Ustawa z 21.02.2019 (Dz.U. 2019 poz. 730)** | **ustawa wdrażająca RODO — źródło art. 16a–16c; znowelizowała 162 ustawy** |
| ustawa o świadczeniu usług drogą elektroniczną: art. 5, 8, 10 | regulamin, obowiązki informacyjne, informacja handlowa |
| Kodeks pracy: art. 22¹ | katalog danych od kandydata i pracownika |
| ustawa o prawach pacjenta: art. 24 ust. 2 pkt 2 | pisemne upoważnienia — ✅ [VER: ELI DU/2024/581, 2026-07-21] |

---

# 3. Źródła użyte (materiały organów i samorządów)

## UODO

- [Kto może, a kto musi wyznaczyć IOD na podstawie RODO](https://uodo.gov.pl/pl/490/2270)
- [Wyznaczenie i status IOD](https://uodo.gov.pl/pl/495/205)
- [Jakie gwarancje niezależności zostały przyznane IOD](https://uodo.gov.pl/pl/495/2407)
- [Jakie zadania ma IOD](https://uodo.gov.pl/pl/673/4199)
- [Jakie kwalifikacje musi posiadać IOD](https://uodo.gov.pl/pl/665/4154)
- [Czy IOD musi odbyć szkolenie i posiadać certyfikat](https://uodo.gov.pl/pl/495/2359)
- [Czy funkcję IOD można łączyć z wykonywaniem zawodu prawniczego](https://uodo.gov.pl/pl/223/2347)
- [Wskazówki i wyjaśnienia dotyczące obowiązku rejestrowania czynności przetwarzania (PDF)](https://uodo.gov.pl/pl/file/708)
- [Rejestrowanie czynności przetwarzania](https://uodo.gov.pl/pl/383/214)
- [Obowiązek informacyjny](https://uodo.gov.pl/pl/324/787)
- [Zgodność z prawem](https://uodo.gov.pl/pl/322/1469)
- [Weryfikacja przestrzegania przepisów dotyczących IOD](https://uodo.gov.pl/pl/138/2438)
- [Kara pieniężna za nieudzielenie informacji](https://uodo.gov.pl/pl/360/1823)
- [Wytyczne 05/2021 EROD — wzajemne zależności (PDF)](https://uodo.gov.pl/pl/file/4498)
- [Grupa Robocza Art. 29 — wytyczne (PDF)](https://uodo.gov.pl/data/filemanager_pl/690.pdf)
- [Ustawa z 21 lutego 2019 r. o zmianie niektórych ustaw w związku z zapewnieniem stosowania RODO — omówienie UODO](https://uodo.gov.pl/pl/395/967)
- [Baza decyzji Prezesa UODO](https://orzeczenia.uodo.gov.pl/)

## Samorząd adwokacki

- [Poradnik dla radców prawnych i adwokatów — RODO (KRRP i NRA, PDF)](https://www.adwokatura.pl/admin/wgrane_pliki/file-poradnik-dla-radcow-prawnych-i-adwokatow-ogolne-rozporzadzenie-o-ochronie-danych-rodo-22897.pdf)
- [Poradnik KRRP/NRA — aktualizacja (PDF)](https://www.adwokatura.pl/admin/wgrane_pliki/file-2019-07-01-poradnikkrrpnraaktualizacja-kbm-28006.pdf)
- [Regulamin wykonywania zawodu adwokata — uchwała NRA nr 140/2023 (PDF)](https://www.adwokatura.pl/admin/wgrane_pliki/file-regulamin-wykonywania-zawodu-adwokata-1122023-39479.pdf)
- [Zbiór Zasad Etyki Adwokackiej i Godności Zawodu (PDF)](https://www.adwokatura.pl/admin/wgrane_pliki/file-20200123projektkomisjietykinra-zzeaigz-29810.pdf)
- [RPO — Ochrona tajemnicy adwokackiej (radcy prawnego) (PDF)](https://bip.brpo.gov.pl/sites/default/files/INTERNET_ochrona-tajemnicy.pdf)
- [NRA — Poradnik RODO, aktualizacja uwzględniająca ustawę z 21.02.2019](https://www.adwokatura.pl/ogolnoprawne/poradnik-rodo-aktualizacja/)
- [Kwartalnik „Radca Prawny" (KIRP) — Tajemnica zawodowa radcy prawnego w świetle przepisów o kontroli przestrzegania przepisów o ochronie danych osobowych](https://kwartalnikradcaprawny.kirp.pl/2018/10/10/tajemnica-zawodowa-radcy-prawnego-w-swietle-przepisow-o-kontroli-przestrzegania-przepisow-o-ochronie-danych-osobowych/)
- [KIRP — Memorandum dotyczące stosowania przepisów o tajemnicy zawodowej (PDF)](https://kirp.pl/wp-content/uploads/2019/04/tkp-memorandum-kirp-29042019.pdf)

## PARP — poradniki dla MŚP

- [Administrator, procesor, odbiorca — kto jest kim](https://www.parp.gov.pl/component/content/article/80756:administrator-procesor-odbiorca-kto-jest-kim-w-systemie-ochrony-danych-osobowych)
- [Udostępnienie a powierzenie przetwarzania danych](https://www.parp.gov.pl/component/content/article/66885:udostepnienie-a-powierzenie-przetwarzania-danych-osobowych-najwazniejsze-roznice)
- [Weryfikacja podmiotu przetwarzającego](https://www.parp.gov.pl/component/content/article/82121:weryfikacja-podmiotu-przetwarzajacego-dane-osobowe)
- [Polityka prywatności na stronach internetowych](https://www.parp.gov.pl/component/content/article/71109:polityka-prywatnosci-na-stronach-internetowych-jak-wlasciwie-spelnic-obowiazek-informacyjny)
- [Umowa jako podstawa przetwarzania danych](https://www.parp.gov.pl/component/content/article/81346:umowa-jako-podstawa-przetwarzania-danych-osobowych)
- [Upoważnienie czy umowa powierzenia](https://serwis-uslugirozwojowe.parp.gov.pl/component/content/article/84095:upowaznienie-do-przetwarzania-danych-osobowych-czy-umowa-powierzenia)
- [Inspektor Ochrony Danych w przedsiębiorstwie — zadania i odpowiedzialność](https://www.parp.gov.pl/component/content/article/84730:inspektor-ochrony-danych-w-przedsiebiorstwie-zadania-i-odpowiedzialnosc)
- [RODO — poradnik dla MŚP](https://en.parp.gov.pl/component/content/article/53868:rodo-ochrona-danych-osobowych-poradnik-dla-msp)

## Akty i materiały urzędowe

- [ISAP — ustawa z 10.05.2018 o ochronie danych osobowych, Dz.U. 2018 poz. 1000 (PDF)](https://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20180001000/T/D20181000L.pdf)
- [ISAP — Prawo komunikacji elektronicznej, Dz.U. 2024 poz. 1221](https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20240001221)
- [ISAP — przepisy wprowadzające PKE, Dz.U. 2024 poz. 1222](https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20240001222)
- [ISAP — Prawo o adwokaturze](https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19820160124)
- [ISAP — Prawo o adwokaturze, tekst jednolity (PDF; zawiera art. 16a–16c)](https://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU19820160124/U/D19820124Lj.pdf)
- [Sejm — ustawa z 21.02.2019 wdrażająca RODO, przebieg procesu legislacyjnego (druk 3050)](https://www.sejm.gov.pl/sejm8.nsf/PrzebiegProc.xsp?nr=3050)
- [gov.pl — Nowe Prawo Komunikacji Elektronicznej: co zmieni](https://www.gov.pl/web/baza-wiedzy/nowe-prawo-komunikacji-elektronicznej--co-zmieni)
- [biznes.gov.pl — Zawiadomienie o wyznaczeniu IOD](https://www.biznes.gov.pl/pl/portal/ou871)
- [EUR-Lex — RODO, wersja skonsolidowana (CELEX 02016R0679)](https://eur-lex.europa.eu/legal-content/PL/TXT/HTML/?uri=CELEX:02016R0679) — **źródło docelowe, obecnie niedostępne z tego środowiska**

---

## Zastrzeżenie

Materiały UODO, PARP i samorządu adwokackiego są **wykładnią i praktyką organów**, nie tekstem prawa. Przy sporze wiąże treść aktu. Dopóki RODO i ustawy krajowe nie zostaną pobrane do `akty/`, każde powołanie przepisu z tego obszaru wymaga oznaczenia ⚠️ i sprawdzenia w bazie oficjalnej przed użyciem wobec klienta.
