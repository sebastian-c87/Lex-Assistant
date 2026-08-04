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
    # RODO i otoczenie ochrony danych (dodane 2026-07-29)
    'rodo': 'akty/rodo/rodo_-_rozporzadzenie_ue_2016_679_wersja_skonsolidowana_ze_sprostowaniami_l_127-2018_i_l_74-2021_.index.json',
    # motywy RODO — klucze `motyw_N`; w tym pliku są też `arti_N`, ale w brzmieniu
    # PIERWOTNYM (bez sprostowań) — do cytowania artykułów używaj klucza `rodo`
    'rodo_motywy': 'akty/rodo/rodo_-_rozporzadzenie_ue_2016-679_brzmienie_z_dz_u_ue_l_119_zrodlo_motywow_-_preambula_.index.json',
    'uodo': 'akty/ochrona_danych/ustawa_o_ochronie_danych_osobowych_uodo_2018_tekst_jednolity_z_30_08_2019_.index.json',
    'poa': 'akty/zawody_prawnicze/prawo_o_adwokaturze_tekst_jednolity_z_11_10_2024_.index.json',
    'usude': 'akty/internet_i_komunikacja/ustawa_o_swiadczeniu_uslug_droga_elektroniczna_tekst_jednolity_z_10_10_2024_.index.json',
    'pke': 'akty/internet_i_komunikacja/prawo_komunikacji_elektronicznej_ustawa_z_12_07_2024_.index.json',
    'pke_wpr': 'akty/internet_i_komunikacja/przepisy_wprowadzajace_ustawe_-_prawo_komunikacji_elektronicznej_ustawa_z_12_07_2024_.index.json',
    'wdrozeniowa2019': 'akty/rodo/ustawa_z_21_02_2019_o_zmianie_niektorych_ustaw_w_zwiazku_z_zapewnieniem_stosowania_rodo_dz_u_2019_poz_730_.index.json',
    # Otoczenie kancelarii: AML, obowiazki informacyjne przedsiebiorcy, zatrudnienie
    'aml': 'akty/rejestry_i_procedury/ustawa_o_przeciwdzialaniu_praniu_pieniedzy_i_finansowaniu_terroryzmu_t_j_z_9_05_2025_.index.json',
    'przeds': 'akty/internet_i_komunikacja/prawo_przedsiebiorcow_t_j_z_20_10_2025_.index.json',
    # UWAGA: w KP klucz `arti_221` to art. 22(1) (dane osobowe kandydata i pracownika),
    # a `arti_221__wyst2` to art. 221 (substancje chemiczne, BHP) - PDF splaszcza indeks
    # gorny, wiec konwerter rozdziela kolizje sufiksem. Analogicznie inne pary 22x/2x(1).
    'kp': 'akty/prawo_pracy/kodeks_pracy_t_j_z_14_02_2025_.index.json',
    'krs': 'akty/rejestry_i_procedury/ustawa_o_krajowym_rejestrze_sadowym_t_j_z_26_06_2025_.index.json',
}

def dump(act, keys):
    d = json.load(open(INDEXES[act], encoding='utf-8'))
    for k in keys:
        # `motyw_N` (preambuła RODO) obok `arti_N` — prefiks podany wprost wygrywa
        key = k if k.startswith(('arti_', 'motyw_')) else f'arti_{k}'
        # kolizje z konwersji PDF: art. 22(1) i art. 221 daja ten sam klucz
        if key not in d and f'{key}__wyst2' in d:
            key = f'{key}__wyst2'
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
