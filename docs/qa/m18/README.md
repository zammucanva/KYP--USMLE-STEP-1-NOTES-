# M18 — intestinal-protozoa · QA Evidence

Topic: **Intestinal & Urogenital Protozoa** (Microbiology, 18/39 — PARASITOLOGY begins)
Route: `/usmle/intestinal-protozoa` · Visual: **1 new registry visual** —
`intestinal-protozoa-panel` (the 3-organism × 5-column water-panel grid + the
water/stool/smear anchors strip).

## Machine-measured browser QA (4 passes)

| Pass | Theme | Overflow | Title |
|---|---|---|---|
| desktop 1440×900 light | light ✓ | 0px | ✓ |
| desktop 1440×900 dark | dark ✓ | 0px | ✓ |
| mobile 390×844 light | light ✓ | 0px | ✓ |
| mobile 390×844 dark | dark ✓ | 0px | ✓ |

## Element capture

- `element-intestinal-protozoa-panel-{light,dark}.png` — 1102×471
  (DOM at 1440×900: x=281 y=4097), stdev 27.94/24.73 (real content).

## VLM paint QA — CLEAN ×2 FIRST PASS

- The generator caught its own column-budget error pre-append (the TREATMENT
  column 104u too narrow — fixed before any render; the M16 lesson applied).
- Dual+enhanced in-browser audit (viewBox / panel-edge 942 / row-right /
  1.5u graze): **0/0/0**.
- Round 1 light: **CLEAN**. Round 1 dark: **CLEAN**.

## Gates

- evidence **12/12** first pass (pdf 174 / book 152) · CONTRACT GREEN · audit
  105 topics / 0 depth failures · tsc 1 baseline · tracker synced (105).
