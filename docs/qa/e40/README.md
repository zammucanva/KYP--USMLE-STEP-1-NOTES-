# E40 — immunosuppressants · QA Evidence

Topic: **Immunosuppressants: The Transplant & Autoimmune Drug Map** (Immunology, 23/24)
Route: `/usmle/immunosuppressants` · Visual: **1 new registry visual** —
`immunosuppressant-target-map` (T-helper-cell with four blockade levels + rules panel +
seven-drug roster).

## Machine-measured browser QA (4 passes)

| Pass | Theme (verified pre-capture) | Overflow | Title |
|---|---|---|---|
| desktop 1440×900 light | light ✓ | 0px | ✓ |
| desktop 1440×900 dark | dark ✓ | 0px | ✓ |
| mobile 390×844 light | light ✓ | 0px | ✓ |
| mobile 390×844 dark | dark ✓ | 0px | ✓ |

## Element capture

- `element-immunosuppressant-target-map-{light,dark}.png` — 1102×787 (DOM-measured), stdev 27.49/24.59

## VLM paint QA — CLEAN ×2 FIRST PASS

- light: **CLEAN** · dark: **CLEAN** (zero defect rounds)

## Gates (this batch)

- Evidence: 43/43 quotes machine-verified (pdf 140-141 / book 118-119) after two documented
  correction rounds (the drug tables' columns interleave — including MERGED lines such as
  "Glucocorticoid-sparing GI upset," and "diabetes, amenorrhea, Adrenal insufficiency" —
  and the text-layer's merged "drugeluting" spelling; all quotes follow the physical order).
- Cumulative evidence 2472/2472 EXIT 0 · validate CONTRACT GREEN (2 documented warnings) ·
  audit 86 topics / 0 depth failures · tsc 1 documented baseline.
- Registry: 129 → 130 visuals. Tracker: 86 topics. Immunology: 23/24.

## Census + fidelity notes (manifest notes)

- p140's rasters are 1×1 artifacts + one decorative strip; the T-helper-cell diagram is pure
  vector — one original KYP redraw (24 label quotes verified). p141's rasters belong to
  E41's cytokines section.
- Mnemonic boundary (E22+ table-block precedent): FA's phrases ("Sir Basil's kidney
  transplant", "Kidney sir-vives", "Pansirtopenia" [also verbatim toxicity text],
  "azathiopurine") are in manifest evidence where they are the source's own text; NOT
  reproduced in the registry visual; KYP originals in the mnemonics field.
- Boundary: the Recombinant cytokines table on p141's lower half = E41.

No source material stored here.
