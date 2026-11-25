# Jak wyszukiwać przepisy i zmiany w prawie — instrukcja

Wyszukiwarka działa na Twoim komputerze i korzysta wyłącznie z oficjalnych, publicznych źródeł:
Dziennika Ustaw (api.sejm.gov.pl/eli), serwisu Sejmu RP (projekty ustaw) i bazy orzeczeń SAOS.
Nie trzeba zakładać kont ani podawać kluczy.

## Pierwsze uruchomienie (raz)

1. Zainstaluj **Node.js** — wejdź na <https://nodejs.org/>, kliknij duży przycisk **LTS**, zainstaluj
   „dalej, dalej, zakończ".
2. Pobierz ten folder (Lex-Assistant) na komputer — np. z GitHuba: zielony przycisk **Code → Download ZIP**,
   potem rozpakuj.

## Uruchamianie

- **Windows:** dwuklik na **`SZUKAJ.bat`**
- **Mac:** dwuklik na **`SZUKAJ.command`** (za pierwszym razem: prawy przycisk → Otwórz → Otwórz,
  bo macOS pyta o pliki pobrane z internetu)

Otworzy się czarne okno z menu. Wpisujesz **numer opcji** i naciskasz **Enter**.

## Co wybrać

| Chcę… | Opcja | Przykład tego, co wpisać |
|---|---|---|
| znaleźć ustawę | **1** | `o kredycie konsumenckim` |
| sprawdzić, co się zmieniło w ustawie | **2** | `kodeks cywilny`, potem datę `1.01.2026` |
| sprawdzić, jakie zmiany są dopiero w Sejmie | **3** | `Prawo bankowe` |
| zrobić zbiorczy raport (np. cała bankowość) | **4** | `bankowosc` albo `ubezpieczenia` |
| przeczytać artykuł (bez internetu) | **5** | wybierz akt, potem `201` lub `7^1` |
| znaleźć orzeczenia | **6** | `gwarancja bankowa` albo `I ACa 2664/23` |

Grupy do opcji 4: `bankowosc`, `ubezpieczenia`, `gwarancj` (gwarancje i zabezpieczenia), `postepowan` (KPC, KPK, KPA, KPW, PPSA), `kodeks`,
`prawo_medyczne`, `podatki` — albo dowolny fragment nazwy ustawy.

Po każdym wyniku program pyta, czy go **zapisać do pliku** — wpisz `t` i Enter. Pliki trafiają do folderu
**`raporty`** w folderze Lex-Assistant (można je otworzyć w Notatniku albo Wordzie).

## Jak czytać wynik „zmiany w akcie"

- **Najnowszy tekst jednolity** — ostatnia oficjalna wersja ujednolicona.
- **Zmiany, których NIE MA jeszcze w tekście jednolitym** — najważniejsza część. Tekst jednolity jest
  nieaktualny o te nowelizacje — trzeba je czytać razem z nim.
- **⏳ jeszcze nie obowiązuje** — zmiana uchwalona i ogłoszona, ale wchodzi w życie później.
- Data „wchodzi w życie" dotyczy całej ustawy zmieniającej. Poszczególne przepisy mogą mieć inne terminy —
  są w przepisach końcowych tej ustawy (link w wyniku).

## Ważne zastrzeżenia

- Projekty ustaw są wyszukiwane **po tytule**. Projekt „o zmianie niektórych ustaw…" może zmieniać Twoją
  ustawę, choć jej nazwy nie ma w tytule.
- Brak orzeczenia w SAOS **nie oznacza**, że nie istnieje — SAOS nie zawiera wszystkich orzeczeń
  (sprawdź też sn.pl, orzeczenia.nsa.gov.pl, orzeczenia.ms.gov.pl).
- Prace rządowe przed skierowaniem do Sejmu (legislacja.gov.pl) nie mają publicznego API — program pokazuje
  link do RCL tylko dla projektów, które są już w Sejmie.

## Coś nie działa?

- **„Brak programu Node.js"** — wróć do kroku 1 instrukcji.
- **„Nie udało się pobrać danych"** — sprawdź internet; serwery Sejmu bywają chwilowo przeciążone, spróbuj
  za kilka minut.
- Okno zamyka się od razu — uruchom ponownie; jeśli się powtarza, zrób zrzut ekranu i prześlij.
