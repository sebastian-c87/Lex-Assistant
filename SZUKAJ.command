#!/bin/bash
# Lex-Assistant — wyszukiwarka przepisów (macOS: dwuklik; Linux: ./SZUKAJ.command)
cd "$(dirname "$0")" || exit 1
if ! command -v node >/dev/null 2>&1; then
  echo
  echo "Brak programu Node.js na tym komputerze."
  echo "Zainstaluj wersję LTS ze strony https://nodejs.org/ i uruchom ten plik ponownie."
  echo
  read -r -p "Naciśnij Enter, aby zamknąć..."
  exit 1
fi
NODE_NO_WARNINGS=1 node szukaj.js
echo
read -r -p "Naciśnij Enter, aby zamknąć..."
