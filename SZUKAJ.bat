@echo off
chcp 65001 >nul
title Lex-Assistant - wyszukiwarka przepisow
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo.
  echo Brak programu Node.js na tym komputerze.
  echo Zainstaluj wersje LTS ze strony https://nodejs.org/ ^(przycisk "LTS"^),
  echo a potem uruchom ten plik ponownie.
  echo.
  pause
  exit /b 1
)
set NODE_NO_WARNINGS=1
node szukaj.js
echo.
pause
