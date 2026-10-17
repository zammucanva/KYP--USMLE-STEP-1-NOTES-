# E33 — cd-markers · QA Evidence

Topic: **Cell Surface Proteins: The CD Marker Map** (Immunology, 16/24)
Route: `/usmle/cd-markers` · Visual: **1 new registry visual** — `cd-marker-map`
(eight cell rows with function-annotated marker chips + drug-target/flow-reading bridge).

## Machine-measured browser QA (4 passes)

| Pass | Theme (verified pre-capture) | Overflow | Title |
|---|---|---|---|
| desktop 1440×900 light | light ✓ | 0px | ✓ |
| desktop 1440×900 dark | dark ✓ | 0px | ✓ |
| mobile 390×844 light | light ✓ | 0px | ✓ |
| mobile 390×844 dark | dark ✓ | 0px | ✓ |

## Element capture

- `element-cd-marker-map-{light,dark}.png` — 1102×720 (DOM-measured rect), stdev 34.41/31.71

## VLM paint QA — CLEAN ×2 FIRST PASS

- light: **CLEAN** · dark: **CLEAN** (zero defect rounds)

## Gates (this batch)

- Evidence: 16/16 quotes machine-verified FIRST PASS (pdf 130 / book 108), including the
  E34 boundary marker (the Passive vs active immunity table header on the same page,
  documented as owned by E34).
- Cumulative evidence 2301/2301 EXIT 0 · validate CONTRACT GREEN (2 documented warnings) ·
  audit 79 topics / 0 depth failures · tsc 1 documented baseline.
- Registry: 123 → 124 visuals. Tracker: 79 topics. Immunology: 16/24.

## Census + fidelity notes (manifest notes)

- pdfimages on p130: ZERO images — pure vector/table page.
- Mnemonic boundary (E22+ rule): FA's "Must be 21 to drink at a Barr" is in manifest
  evidence for VERIFICATION ONLY — never user-facing; KYP originals replace it.
- KYP-extension boundary: drug names (rituximab, muromonab, basiliximab, alemtuzumab,
  maraviroc), CCR5-Δ32, and flow-panel shortcuts are labeled extension.
- Boundary: the Passive vs active immunity table on the same printed page = E34.

No source material stored here.
