#!/usr/bin/env python3
"""Konwerter EUR-Lex HTML → Markdown + indeks JSON artykułów.

Wejście:  HTML aktu UE pobrany z eur-lex.europa.eu (np. akty/rodo/rodo_*.html)
Wyjście:  {basename}.md         — czytelny tekst z hierarchią rozdziałów
          {basename}.index.json — {"arti_N": {"heading": "...", "text": "..."}}

Dlaczego osobny konwerter: `html_act_to_md.py` czyta strukturę ELI
(`div.unit_arti`, `data-id="arti_N"`). EUR-Lex ma zupełnie inny układ:

    div.eli-subdivision#art_5
        p.title-article-norm      → „Artykuł 5"
        div.eli-title             → tytuł artykułu („Zasady dotyczące…")
        div.norm                  → ustęp (czasem z zagnieżdżoną grid-list)
            div.grid-container / div.grid-list  → punkty i litery:
                div.grid-list-column-1 → etykieta („a)", „1.")
                div.grid-list-column-2 → treść

Klucze indeksu celowo mają postać `arti_N` (nie `art_N` jak w EUR-Lex), żeby
zachować konwencję repo z HANDOFF.md i `tools/dump_articles.py`.

Motywy (preambuła) NIE wchodzą do indeksu artykułów — trafiają do .md jako
osobna sekcja, bo są wskazówką interpretacyjną, nie normą.

Użycie:  python tools/eurlex_act_to_md.py <plik.html>
"""
from __future__ import annotations
import json
import re
import sys
from pathlib import Path

from bs4 import BeautifulSoup, Tag


def clean_text(s: str) -> str:
    s = s.replace('\xa0', ' ')
    # EUR-Lex wstawia strzałki znaczników zmian (►C1, ▼B) — informacja o źródle
    # sprostowania, nie treść normy. Usuwamy, żeby cytat był dosłowny.
    s = re.sub(r'[►▼◄]\s*[A-Z]?\d*', ' ', s)
    s = re.sub(r'\s+', ' ', s)
    return s.strip()


def render_block(node: Tag, indent: int = 0) -> list[str]:
    """Renderuje div.norm / grid-list rekurencyjnie na listę wierszy."""
    lines: list[str] = []
    pad = '  ' * indent

    grids = node.find_all('div', class_='grid-container', recursive=False)
    if grids:
        # tekst wprowadzający przed listą (np. „Dane osobowe muszą być:")
        lead = clean_text(''.join(
            str(c.get_text(' ')) if isinstance(c, Tag) else str(c)
            for c in node.children
            if not (isinstance(c, Tag) and 'grid-container' in (c.get('class') or []))
        ))
        if lead:
            lines.append(pad + lead)
        for g in grids:
            label_el = g.find('div', class_='grid-list-column-1')
            body_el = g.find('div', class_='grid-list-column-2')
            label = clean_text(label_el.get_text(' ')) if label_el else ''
            if body_el is None:
                continue
            nested = body_el.find_all('div', class_='grid-container', recursive=False)
            if nested:
                sub = render_block(body_el, indent + 1)
                head = f'{pad}{label}'.rstrip()
                if sub:
                    # pierwszy wiersz podpinamy do etykiety
                    lines.append(f'{head} {sub[0].strip()}'.strip())
                    lines.extend(sub[1:])
                else:
                    lines.append(head)
            else:
                lines.append(f'{pad}{label} {clean_text(body_el.get_text(" "))}'.strip())
        return lines

    txt = clean_text(node.get_text(' '))
    if txt:
        lines.append(pad + txt)
    return lines


def article_text(sub: Tag) -> str:
    """Treść artykułu: wszystko po nagłówku i tytule.

    Uwaga na dwa układy ustępów w EUR-Lex: numerowane ustępy to `div.norm`, ale
    artykuł składający się z JEDNEGO nieponumerowanego akapitu ma `p.norm`
    (tak jest m.in. w art. 10, 16, 44 i 48 RODO). Iterowanie tylko po `div`
    gubiło całą treść takich artykułów — dlatego filtrujemy po klasie, nie po tagu.
    """
    out: list[str] = []
    for child in sub.find_all(['div', 'p'], recursive=False):
        classes = child.get('class') or []
        if 'eli-title' in classes:
            continue
        # nagłówek („Artykuł 10") i podtytuł artykułu — już w heading
        if 'title-article-norm' in classes or 'stitle-article-norm' in classes:
            continue
        out.extend(render_block(child))
    return '\n\n'.join(l for l in out if l)


def convert(html_path: Path) -> None:
    soup = BeautifulSoup(html_path.read_text(encoding='utf-8'), 'lxml')

    title_el = soup.find('p', class_='title-doc-first') or soup.find('h1')
    title = clean_text(title_el.get_text(' ')) if title_el else html_path.stem

    out: list[str] = [f'# {title}\n']
    index: dict = {}

    # Nagłówki rozdziałów/sekcji: EUR-Lex nadaje im id cpt_*, sct_* .
    seen_divisions: set[str] = set()

    subs = soup.select('div.eli-subdivision[id^="art_"]')
    # id-y typu art_5.tit_1 to tytuły artykułów, nie artykuły — odfiltrowujemy
    subs = [s for s in subs if re.fullmatch(r'art_\d+[a-z]?', s.get('id', ''))]

    for sub in subs:
        art_id = sub['id']
        num = art_id[len('art_'):]

        # nagłówek rozdziału, jeśli ten artykuł otwiera nowy
        division = sub.find_parent('div', id=re.compile(r'^(cpt|sct)_'))
        if division is not None and division.get('id') not in seen_divisions:
            seen_divisions.add(division.get('id'))
            head_parts = [clean_text(p.get_text(' '))
                          for p in division.find_all('p', class_=re.compile('title-division'), limit=3)]
            head = ' — '.join(h for h in head_parts if h)
            if head:
                level = '##' if division.get('id', '').startswith('cpt_') else '###'
                out.append(f'\n{level} {head}\n')

        num_el = sub.find('p', class_='title-article-norm')
        heading = clean_text(num_el.get_text(' ')) if num_el else f'Artykuł {num}'
        stitle_el = sub.find('p', class_='stitle-article-norm')
        stitle = clean_text(stitle_el.get_text(' ')) if stitle_el else ''
        full_heading = f'{heading} — {stitle}' if stitle else heading

        body = article_text(sub)
        out.append(f'\n**{full_heading}**\n\n{body}\n')
        index[f'arti_{num}'] = {'heading': full_heading, 'text': body}

    # Preambuła — pod kluczami `motyw_N`, osobno od artykułów. Wersje SKONSOLIDOWANE
    # EUR-Lex nie mają preambuły; brzmienie z Dz.U. UE ją zawiera. Motywy są wskazówką
    # interpretacyjną, nie normą — dlatego własny prefiks klucza, nie `arti_`.
    recitals = soup.select('div.eli-subdivision[id^="rct_"]')
    if recitals:
        out.append('\n## Preambuła (motywy)\n')
        for r in recitals:
            num = r.get('id', '')[len('rct_'):]
            body = clean_text(r.get_text(' '))
            # w Dz.U. UE tekst motywu zaczyna się od jego numeru w nawiasie — zdejmujemy
            body = re.sub(r'^\(\d{1,3}\)\s*', '', body)
            out.append(f'\n**Motyw {num}**\n\n{body}\n')
            index[f'motyw_{num}'] = {'heading': f'Motyw {num}', 'text': body}

    md_path = html_path.with_suffix('.md')
    idx_path = html_path.with_suffix('.index.json')
    md_path.write_text(''.join(out), encoding='utf-8')
    idx_path.write_text(json.dumps(index, ensure_ascii=False, indent=2), encoding='utf-8')

    print(f'✓ {md_path}  ({md_path.stat().st_size:,} B, {len(index)} artykułów, {len(recitals)} motywów)')
    print(f'✓ {idx_path}')


if __name__ == '__main__':
    if len(sys.argv) < 2:
        print('Użycie: python tools/eurlex_act_to_md.py <plik.html> [plik2.html ...]')
        sys.exit(1)
    for arg in sys.argv[1:]:
        convert(Path(arg))
