#!/usr/bin/env python3
"""Wyświetla treść wskazanych artykułów z lokalnych indeksów JSON."""
import json, sys
from pathlib import Path

INDEXES = {
    'ksh': 'akty/ksh/kodeks_spolek_handlowych_tekst_jednolity_.index.json',
    'udzl': 'akty/prawo_medyczne/ustawa_o_dzialalnosci_leczniczej_t_j_z_5_02_2026_.index.json',
    'pp': 'akty/prawo_medyczne/ustawa_o_prawach_pacjenta_i_rzeczniku_praw_pacjenta_tekst_jednolity_.index.json',
    'psy2001': 'akty/prawo_medyczne/ustawa_o_zawodzie_psychologa_i_samorzadzie_zawodowym_psychologow_--_stara_ustawa_z_2001_t_j_z_2019_obowiazuje_do_2028-05-19.index.json',
    'psy2026': 'akty/prawo_medyczne/ustawa_o_zawodzie_psychologa_oraz_samorzadzie_zawodowym_psychologow_--_nowa_ustawa_podpisana_12_02_2026_wchodzi_w_zycie_glownie_19_05_2028.index.json',
    'ozp': 'akty/prawo_medyczne/ustawa_o_ochronie_zdrowia_psychicznego_tekst_jednolity_.index.json',
}

def dump(act, keys):
    d = json.load(open(INDEXES[act], encoding='utf-8'))
    for k in keys:
        key = k if k.startswith('arti_') else f'arti_{k}'
        if key in d:
            print(f'\n### [{act}] {d[key]["heading"]}\n{d[key]["text"]}')
        else:
            print(f'\n### [{act}] {key} — BRAK')

if __name__ == '__main__':
    # użycie: python tools/dump_articles.py ksh 1 3 4 12 | udzl 1 4 5 100 103
    args = sys.argv[1:]
    current_act = None
    keys = []
    def flush():
        if current_act and keys:
            dump(current_act, keys)
    for a in args:
        if a in INDEXES:
            flush()
            current_act = a
            keys = []
        else:
            keys.append(a)
    flush()
