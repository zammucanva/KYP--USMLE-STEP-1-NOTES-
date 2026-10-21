# M15 — intracellular-bacteria · QA Evidence

Topic: **Intracellular & Vector-Borne Bacteria: Chlamydia, Rickettsia, Mycoplasma**
(Microbiology, 15/39 — Clinical Bacteriology · CLINICAL BACTERIOLOGY BANNER COMPLETE)
Route: `/usmle/intracellular-bacteria` · Visual: **1 new registry visual** —
`vector-borne-rash-map` (the chlamydiae cycle + serotype cards, the 17-row
zoonotic directory, the RASH COMMON/RASH RARE split with the Mycoplasma closer,
and the Gardnerella block of book 147 by page ownership).

## Machine-measured browser QA (4 passes, re-run after fix)

| Pass | Theme (verified pre-capture) | Overflow | Title |
|---|---|---|---|
| desktop 1440×900 light | light ✓ | 0px | ✓ |
| desktop 1440×900 dark | dark ✓ | 0px | ✓ |
| mobile 390×844 light | light ✓ | 0px | ✓ |
| mobile 390×844 dark | dark ✓ | 0px | ✓ |

## Element capture

- `element-vector-borne-rash-map-{light,dark}.png` — 1102×1523
  (DOM-measured at 1440×900: x=281 y=6379), stdev 23.70/21.60 (real content).

## VLM paint QA — 1 real-defect fix, then CLEAN ×2

- Dual in-browser audit (getBBox right-edge sweep + card-boundary graze sweep
  at 1.5u) found 1 REAL defect: the Mycoplasma LAB RULES panel's last line
  ("of cold agglutinins (IgM)") landed exactly on the card bottom (the height
  formula's tail padding was 10u short). FIXED: myco_h +10; regenerated;
  re-audit: **0 horizontal overflows, 0 card grazes**.
- Round 1 light: **CLEAN** (the VLM's own note on the Mycoplasma padding calls
  it a minor aesthetic observation with no pixels lost — consistent with the
  fix). Round 1 dark: **CLEAN**.

## Source resolution

- The RASH COMMON / RASH RARE grouping resolved by two concordant VLM reads
  (200-DPI census + 2x zoom): RASH COMMON = RMSF + typhus; RASH RARE =
  ehrlichiosis + anaplasmosis + Q fever, with Mycoplasma closing. The text
  layer emits the RASH RARE label at line 64 (content-stream quirk documented).
- The zoonotic table's interleaved triplets quoted as 3 contiguous chunks.

## Gates

- evidence **40/40** first pass (pdf 168-170 / book 146-148) · validate
  CONTRACT GREEN · audit 102 topics / 0 depth failures · tsc 1 documented
  baseline error · tracker synced (102 topics).
