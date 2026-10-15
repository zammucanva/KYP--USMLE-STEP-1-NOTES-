# E22 — hla-subtypes · QA Evidence

Topic: **HLA Subtypes Associated with Diseases** (Immunology, 5/24)
Route: `/usmle/hla-subtypes` · Visual: none (table-only note by design — chapter inventory
requiresVisual false; the MechanismFlow renders as a div-based flow, and the page's only
SVGs are 12–20px UI icons).

## Machine-measured browser QA (24/24 pass)

| Pass | Theme (verified pre-capture) | Overflow | Page errors | Console |
|---|---|---|---|---|
| desktop 1440×900 light | light ✓ | 0px | 0 | clean |
| desktop 1440×900 dark | dark ✓ | 0px | 0 | clean |
| mobile 390×844 light | light ✓ | 0px | 0 | clean |
| mobile 390×844 dark | dark ✓ | 0px | 0 | clean |

## Element captures (text-anchored doc-coords + full-page PIL crop)

- Mechanism flow ("Why an HLA allele raises disease risk"): 1056×1003, stdev 23.40/23.11
- Verbatim table block: 1056×978, stdev 27.27/27.02
Both real content in light and dark.

## VLM paint QA — CLEAN ×2

- Table block: columns readable, no cross-column collisions, no clipped text, distinct row
  borders, em-dash placeholders render correctly in all six empty mnemonic cells. CLEAN.
- Mechanism flow: no node collisions, no edge-text crossing, no clipping, high legibility.
  CLEAN.

## Fidelity notes (manifest notes)

- 26/26 quotes machine-verified, including curly quotes in DR4's printed mnemonic
  ("There are 4 walls in 1 "rheum" (room)") and the ↑/→ arrows of the allele-numbered rows.
- The page's single visual element is the three-column association table (sv1 → note-block
  verbatim); no rasters or figures exist on the printed section.

VLM outputs verbatim in `vlm-*.txt`. No source material stored here.
