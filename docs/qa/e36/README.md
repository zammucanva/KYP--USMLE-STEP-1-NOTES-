# E36 — b-cell-immunodeficiencies · QA Evidence

Topic: **B-Cell Immunodeficiencies: Bruton, IgA Deficiency & CVID** (Immunology, 19/24)
Route: `/usmle/b-cell-immunodeficiencies` · Visual: **1 new registry visual** —
`b-cell-deficiency-map` (three disease cards + four-station maturation ladder).

## Machine-measured browser QA (4 passes)

| Pass | Theme (verified pre-capture) | Overflow | Title |
|---|---|---|---|
| desktop 1440×900 light | light ✓ | 0px | ✓ |
| desktop 1440×900 dark | dark ✓ | 0px | ✓ |
| mobile 390×844 light | light ✓ | 0px | ✓ |
| mobile 390×844 dark | dark ✓ | 0px | ✓ |

## Element capture

- `element-b-cell-deficiency-map-{light,dark}.png` — 1102×720 (DOM-measured), stdev 25.13/23.06

## VLM paint QA — CLEAN ×2 FIRST PASS

- light: **CLEAN** · dark: **CLEAN** (zero defect rounds)

## Gates (this batch)

- Evidence: 13/13 quotes machine-verified (pdf 136 / book 114) after a documented
  interleave-quoting correction round (E34 lesson applied): Bruton's and IgA deficiency's
  rows interleave across the table's columns — quotes rewritten to the physical line order.
- Process miss caught by the validators (working as designed): the note was briefly
  unwired from the notes index, producing 5 "no shipped note" contract violations — fixed
  by wiring the index; CONTRACT GREEN after.
- Cumulative evidence 2367/2367 EXIT 0 · audit 82 topics / 0 depth failures · tsc 1 baseline.
- Registry: 125 → 126 visuals. Tracker: 82 topics. Immunology: 19/24.

## Census + fidelity notes (manifest notes)

- pdfimages on p136: ZERO content images — the immunodeficiency table is pure vector.
- Boundary: T-cell disorders heading + rows on p136 and all of p137 = E37 (heading pinned
  here as boundary evidence only).
- No FA mnemonic phrases printed in this block (the IgA row's capitalized presentation
  words are the source's own emphasis, quoted verbatim).

No source material stored here.
