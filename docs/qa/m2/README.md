# M2 — stains-identification · QA Evidence

Topic: **Stains & Difficult-to-Stain Organisms** (Microbiology, 2/39)
Route: `/usmle/stains-identification` · Visual: **1 new registry visual** —
`gram-stain-decision-map` (gram readout + four failure-mode cards + six-stain
roster + auramine-rhodamine footnote).

## Machine-measured browser QA (4 passes)

| Pass | Theme (verified pre-capture) | Overflow | Title |
|---|---|---|---|
| desktop 1440×900 light | light ✓ | 0px | ✓ |
| desktop 1440×900 dark | dark ✓ | 0px | ✓ |
| mobile 390×844 light | light ✓ | 0px | ✓ |
| mobile 390×844 dark | dark ✓ | 0px | ✓ |

## Element capture

- `element-gram-stain-decision-map-{light,dark}.png` — 1102×877 (DOM-measured at
  x=281 y=3524; identical rects verified in light and dark), stdev 26.49/22.91

## VLM paint QA — CLEAN ×2 FIRST PASS

- light: all 4 classes PASS · dark: all 4 classes PASS — zero defect rounds,
  zero fixes needed (M1's rail-clearance lesson applied at design time).

## Gates (this batch)

- Evidence: 15/15 quotes machine-verified (pdf 145 / book 123) first run.
  Documented quirks: photo callout letters A-E quoted inline within their
  rows ('Trypanosomes A ,' / 'whipplei B )' / 'Mycobacteria C ,' /
  'neoformans D ;' / 'Coccidioides E ,'); standalone single-letter captions
  are sub-3-char (covered inline); text-layer control char U+0090 before the
  ↓ glyph (muramic acid row) stripped per norm().
- validate: CONTRACT GREEN — 1 fix during the batch (3rd trap added:
  auramine-rhodamine screening vs Ziehl-Neelsen confirmation).
- Census: 5 content rasters = the A-E micrographs (Trypanosomes, T. whipplei,
  Mycobacteria, C. neoformans, Coccidioides) — COPYRIGHTED, described-in-text
  only. FA's printed mnemonics (2 verification-only quotes + the poor-stainer
  block's own) NOT reproduced in the visual; KYP originals authored.
