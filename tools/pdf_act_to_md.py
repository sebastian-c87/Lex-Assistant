#!/usr/bin/env python3
"""Konwerter PDF aktu prawnego → Markdown + indeks JSON artykułów.

Wejście:  PDF pobrany z api.sejm.gov.pl/eli (tekst jednolity)
Wyjście:  {basename}.md  — tekst z zachowaniem hierarchii i numeracji
          {basename}.index.json — {"art_N": {"heading": "Art. N.", "text": "..."}}

PDF-y ELI mają dwuszpaltowy layout; pdfplumber radzi sobie z tym w większości
przypadków. Parsujemy przez wykrywanie znaczników:
  - "Art. N." / "Art. Na." - nowy artykuł
  - "§ N." - paragraf
  - "N)" - punkt
  - Nagłówki (Tytuł/Dział/Rozdział/Oddział) — po dużych literach
"""
from __future__ import annotations
import json
import re
import sys
from pathlib import Path

import pdfplumber

ART_RE = re.compile(r'^Art\.\s+(\d+[a-z]?(?:\s*\d+)*)\.?', re.MULTILINE)
SECTION_RE = re.compile(r'^(TYTUŁ|DZIAŁ|Rozdział|Oddział)\s+([IVXLCDM]+|\d+)([a-z]?)\s*$', re.MULTILINE)


def extract_text(pdf_path: Path) -> str:
    text_parts = []
    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            t = page.extract_text(x_tolerance=1.5, y_tolerance=3) or ''
            text_parts.append(t)
    return '\n'.join(text_parts)


def clean(text: str) -> str:
    # łącz przeniesienia wyrazów: "przed-\nsiębiorca" -> "przedsiębiorca"
    text = re.sub(r'(\w)-\n(\w)', r'\1\2', text)
    # zamień linie z pojedynczą literą lub numerem strony na puste
    text = re.sub(r'\n\s*\d+\s*\n', '\n', text)
    # ©Kancelaria Sejmu itp. — usuwaj typowe stopki
    text = re.sub(r'©\s*Kancelaria Sejmu[^\n]*\n', '', text)
    text = re.sub(r'\d{4}-\d{2}-\d{2}\s*\n', '', text)  # daty stron
    return text


def parse(text: str) -> tuple[str, dict]:
    """Zwraca (markdown, index)."""
    lines = text.split('\n')
    md_out: list[str] = []
    index: dict = {}

    current_art_key = None
    current_art_lines: list[str] = []
    current_art_heading = ''
    collisions: list[tuple[str, str]] = []

    def flush_article():
        nonlocal current_art_key, current_art_lines, current_art_heading
        if current_art_key:
            body = '\n'.join(l for l in current_art_lines if l.strip())
            body = re.sub(r'\n{3,}', '\n\n', body).strip()
            # KOLIZJA KLUCZY. PDF spłaszcza indeks górny, więc „Art. 22(1)." i „Art. 221."
            # dają ten sam napis „Art. 221." — w Kodeksie pracy to art. 22(1) (dane osobowe
            # kandydata i pracownika) oraz art. 221 (substancje chemiczne, BHP). Wcześniej
            # drugie wystąpienie po cichu nadpisywało pierwsze i jeden z przepisów znikał
            # z indeksu. Zachowujemy oba: drugie i kolejne dostają sufiks `__wyst2`, `__wyst3`,
            # a na koniec konwersji wypisujemy ostrzeżenie — rozstrzygnięcie, który klucz jest
            # którym artykułem, wymaga oczu człowieka i nie zgadujemy go tutaj.
            key = current_art_key
            if key in index:
                n = 2
                while f'{key}__wyst{n}' in index:
                    n += 1
                collisions.append((key, f'{key}__wyst{n}'))
                key = f'{key}__wyst{n}'
            index[key] = {'heading': current_art_heading, 'text': body}
            md_out.append(f'\n**{current_art_heading}**\n\n{body}\n')
        current_art_key = None
        current_art_lines = []
        current_art_heading = ''

    i = 0
    while i < len(lines):
        line = lines[i].strip()
        if not line:
            if current_art_key:
                current_art_lines.append('')
            i += 1
            continue

        # nagłówek strukturalny: TYTUŁ/DZIAŁ/Rozdział/Oddział + numer, tytuł na następnej linii
        m_sec = SECTION_RE.match(line)
        if m_sec:
            flush_article()
            kind, num, suffix = m_sec.groups()
            # następna niepusta linia jest tytułem sekcji (najczęściej)
            title_line = ''
            j = i + 1
            while j < len(lines) and not lines[j].strip():
                j += 1
            if j < len(lines) and not ART_RE.match(lines[j].strip()) and not SECTION_RE.match(lines[j].strip()):
                title_line = lines[j].strip()
                i = j
            level = {'TYTUŁ': '#', 'DZIAŁ': '##', 'Rozdział': '###', 'Oddział': '####'}.get(kind, '###')
            md_out.append(f'\n{level} {kind} {num}{suffix} — {title_line}\n')
            i += 1
            continue

        m_art = ART_RE.match(line)
        if m_art:
            flush_article()
            num = m_art.group(1).replace(' ', '_')
            current_art_key = f'arti_{num}'
            current_art_heading = f'Art. {m_art.group(1)}.'
            # reszta linii po "Art. N." to początek treści
            rest = line[m_art.end():].strip()
            if rest:
                current_art_lines.append(rest)
            i += 1
            continue

        if current_art_key:
            current_art_lines.append(line)
        i += 1

    flush_article()
    return '\n'.join(md_out), index, collisions


def convert(pdf_path: Path) -> None:
    print(f'→ Konwertuję {pdf_path.name}')
    raw = extract_text(pdf_path)
    cleaned = clean(raw)
    md, idx, collisions = parse(cleaned)

    md_path = pdf_path.with_suffix('.md')
    idx_path = pdf_path.with_suffix('.index.json')
    md_path.write_text(md, encoding='utf-8')
    idx_path.write_text(json.dumps(idx, ensure_ascii=False, indent=2), encoding='utf-8')
    print(f'  ✓ {md_path.name}  ({md_path.stat().st_size:,} B, {len(idx)} artykułów)')
    if collisions:
        print(f'  ⚠ KOLIZJA KLUCZY ({len(collisions)}) — PDF spłaszcza indeks górny, więc np.')
        print(f'    „Art. 22(1)." i „Art. 221." wyglądają identycznie. Drugie wystąpienie zapisano')
        print(f'    pod sufiksem; SPRAWDŹ RĘCZNIE w .md, który klucz jest którym artykułem:')
        for orig, alt in collisions:
            print(f'      {orig}  ->  {alt}')


if __name__ == '__main__':
    if len(sys.argv) < 2:
        print('Użycie: python tools/pdf_act_to_md.py <plik.pdf> [plik2.pdf ...]')
        sys.exit(1)
    for arg in sys.argv[1:]:
        convert(Path(arg))
