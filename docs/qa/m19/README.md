# M19 — blood-tissue-protozoa · QA Evidence

Topic: **Blood & Tissue Protozoa: Plasmodium, Babesia, Toxoplasma, Trypanosoma, Leishmania**
(Microbiology, 19/39 — PARASITOLOGY continues; 9 organisms, the largest topic)
Route: `/usmle/blood-tissue-protozoa` · Visual: **1 new registry visual** —
`blood-tissue-protozoa-map` (the three protozoa grids — CNS, hematologic,
others — with the vector-axis anchors strip).

## Machine-measured browser QA (4 passes, re-run after fix)

| Pass | Theme | Overflow | Title |
|---|---|---|---|
| desktop 1440×900 light | light ✓ | 0px | ✓ |
| desktop 1440×900 dark | dark ✓ | 0px | ✓ |
| mobile 390×844 light | light ✓ | 0px | ✓ |
| mobile 390×844 dark | dark ✓ | 0px | ✓ |

## Element capture

- `element-blood-tissue-protozoa-map-{light,dark}.png` — 1102×1109
  (DOM at 1440×900: x=281 y=5782), stdev 25.39/21.69 (real content).

## VLM paint QA — 1 real-defect fix, then CLEAN ×2

- The enhanced in-browser audit (panel-edge 942 + row-right checks, added in
  M16's round) caught the TREATMENT column being 124 units wide against
  160-unit wrapped text — the text overran the row rect into the panel border
  (4 panel-edge + 4 row-right violations). FIXED: all five columns rebalanced
  (ORGANISM 100 | DISEASE 214 | TRANSMISSION 116 | DIAGNOSIS 230 | TREATMENT
  180); re-audit **0/0/0**.
- Round 1 light: **CLEAN**. Round 1 dark: **CLEAN**.

## Source resolution

- The two cross-page bridges resolved by PAGE OWNERSHIP: Trichomonas prints
  on book 155 (this note's table block carries it verbatim; M18 cross-links)
  and the Nematode-routes box prints on book 155 (carried verbatim here;
  cross-linked forward to M20).
- The TREATMENT header on book 153 emits at the page bottom (line 96) —
  late header emission documented.

## Gates

- evidence **32/32** first pass (pdf 175-177 / book 153-155) · CONTRACT GREEN
  · audit 106 topics / 0 depth failures · tsc 1 baseline · tracker synced.
