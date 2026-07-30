#!/usr/bin/env python3
"""Konwerter ELI HTML → Markdown + indeks JSON artykułów.

Wejście:  HTML aktu prawnego pobrany z api.sejm.gov.pl/eli (np. akty/ksh/*.html)
Wyjście:  {basename}.md  — czytelny tekst jednolity z zachowaniem struktury
          {basename}.index.json — {"art_1": {"heading": "...", "text": "..."}, ...}

Użycie:  python tools/html_act_to_md.py <plik.html>
"""
from __future__ import annotations
import json
import re
import sys
from pathlib import Path
from bs4 import BeautifulSoup, Tag

UNIT_HEADING = {
    'unit_titl': '#',
    'unit_bran': '##',
    'unit_chpt': '###',
    'unit_schp': '####',
}


def clean_text(s: str) -> str:
    s = s.replace('\xa0', ' ')
    s = re.sub(r'[ \t]+', ' ', s)
    s = re.sub(r' *\n *', ' ', s)
    return s.strip()


def collect_section_header(node: Tag) -> str:
    """Nagłówek działu/tytułu/rozdziału: h3 + p align=center przed unit-inner."""
    parts: list[str] = []
    for child in node.find_all(recursive=False):
        if child.name == 'div' and 'unit-inner' in (child.get('class') or []):
            break
        if child.name in ('h3', 'h2', 'p'):
            txt = clean_text(child.get_text(' '))
            if txt:
                parts.append(txt)
    return ' — '.join(parts)


def render_unit(node: Tag, out: list[str], index: dict, current_art: dict | None) -> None:
    classes = node.get('class', [])
    data_id = node.get('data-id', '')

    if 'unit_titl' in classes or 'unit_bran' in classes or 'unit_chpt' in classes or 'unit_schp' in classes:
        header = collect_section_header(node)
        level = next((UNIT_HEADING[c] for c in classes if c in UNIT_HEADING), '###')
        if header:
            out.append(f'\n{level} {header}\n')
        inner = node.find('div', class_='unit-inner', recursive=False)
        target = inner if inner else node
        for child in target.find_all('div', class_='unit', recursive=False):
            render_unit(child, out, index, current_art)
        return

    if 'unit_arti' in classes:
        h = node.find('h3', recursive=False)
        header = clean_text(h.get_text(' ')) if h else ''
        art_key = data_id or ''
        parts: list[str] = []
        inner = node.find('div', class_='unit-inner', recursive=False)
        target = inner if inner else node
        # direct text of article (bez podziału na paragrafy) LUB paragrafy
        has_paras = bool(target.find('div', class_='unit_para', recursive=False))
        if has_paras:
            for child in target.find_all('div', class_='unit', recursive=False):
                para_out: list[str] = []
                render_para(child, para_out)
                parts.append(''.join(para_out).strip())
        else:
            # tekst bez §
            for tx in target.find_all('div', class_='pro-text', recursive=False):
                parts.append(clean_text(tx.get_text(' ')))

        body = '\n\n'.join(p for p in parts if p)
        out.append(f'\n**{header}**\n\n{body}\n')
        if art_key:
            index[art_key] = {'heading': header, 'text': body}
        return

    # fallback: recurse
    inner = node.find('div', class_='unit-inner', recursive=False)
    target = inner if inner else node
    for child in target.find_all('div', class_='unit', recursive=False):
        render_unit(child, out, index, current_art)


def render_para(node: Tag, out: list[str]) -> None:
    """Render paragraph/point/letter recursively as prefixed lines."""
    classes = node.get('class', [])
    h = node.find('h3', recursive=False)
    label = clean_text(h.get_text(' ')) if h else ''

    inner = node.find('div', class_='unit-inner', recursive=False)
    target = inner if inner else node

    # zbierz bezpośredni tekst tej jednostki (pierwszy .pro-text)
    direct_text_el = target.find('div', class_='pro-text', recursive=False)
    direct_text = clean_text(direct_text_el.get_text(' ')) if direct_text_el else ''

    if 'unit_para' in classes:
        prefix = label  # np. "§ 1."
        line = f'{prefix} {direct_text}' if direct_text else prefix
        out.append(line + '\n')
    elif 'unit_pint' in classes:
        out.append(f'  {label} {direct_text}\n' if direct_text else f'  {label}\n')
    elif 'unit_pass' in classes:
        out.append(f'    {label} {direct_text}\n' if direct_text else f'    {label}\n')
    elif 'unit_lett' in classes:
        out.append(f'    {label} {direct_text}\n' if direct_text else f'    {label}\n')
    else:
        if direct_text:
            out.append(direct_text + '\n')

    # dzieci — dalej rekurencyjnie
    for child in target.find_all('div', class_='unit', recursive=False):
        render_para(child, out)


def convert(html_path: Path) -> None:
    html = html_path.read_text(encoding='utf-8')
    soup = BeautifulSoup(html, 'lxml')

    h1 = soup.find('h1')
    title = clean_text(h1.get_text(' ')) if h1 else html_path.stem

    # Wybór kontenera z treścią. ELI HTML dzieli dokument na sekcje part_1, part_2, …
    # i ich znaczenie ZALEŻY OD TYPU AKTU:
    #   • obwieszczenie (t.j.) — part_1 to treść obwieszczenia, tekst jednolity siedzi
    #     w załączniku, czyli part_2,
    #   • zwykła ustawa      — cała treść jest w part_1, a part_2 (jeśli jest) to
    #     prawdziwy załącznik do ustawy (wzory, tabele, formularze).
    # Sztywne part_2 dawało więc 0 artykułów dla zwykłych ustaw (wykryte na
    # „Przepisach wprowadzających PKE"). Wybieramy sekcję z NAJWIĘKSZĄ liczbą
    # artykułów — działa dla obu układów bez rozpoznawania typu aktu.
    parts = [el for el in soup.find_all(id=True) if str(el.get('id', '')).startswith('part_')]
    root = max(parts, key=lambda el: len(el.select('.unit_arti')), default=None)
    if root is None or not root.select('.unit_arti'):
        root = soup.body

    out: list[str] = [f'# {title}\n']
    index: dict = {}

    # Top-level unit_titl są zagnieżdżone głębiej (part > div.part > ...).
    # Znajdujemy najwyższe unit_titl — te bez rodzica unit_titl.
    top_titls = [t for t in root.select('.unit_titl') if not t.find_parent(class_='unit_titl')]
    if top_titls:
        for t in top_titls:
            render_unit(t, out, index, None)
    else:
        # fallback: iteruj po unit_arti bezpośrednio
        for a in root.select('.unit_arti'):
            render_unit(a, out, index, None)

    md_path = html_path.with_suffix('.md')
    idx_path = html_path.with_suffix('.index.json')
    md_path.write_text(''.join(out), encoding='utf-8')
    idx_path.write_text(json.dumps(index, ensure_ascii=False, indent=2), encoding='utf-8')

    md_size = md_path.stat().st_size
    print(f'✓ {md_path}  ({md_size:,} B, {len(index)} artykułów)')
    print(f'✓ {idx_path}')


if __name__ == '__main__':
    if len(sys.argv) < 2:
        print('Użycie: python tools/html_act_to_md.py <plik.html> [plik2.html ...]')
        sys.exit(1)
    for arg in sys.argv[1:]:
        convert(Path(arg))
