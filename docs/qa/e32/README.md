# E32 — respiratory-burst-ifn · QA Evidence

Topic: **Respiratory Burst & Type I Interferons** (Immunology, 15/24)
Route: `/usmle/respiratory-burst-ifn` · Visual: **1 new registry visual** —
`respiratory-burst-enzymes` (six numbered cascade steps around the phagolysosome, CGD-logic
panel, type I IFN panel with mechanism/uses/adverse cards).

## Machine-measured browser QA (4 passes)

| Pass | Theme (verified pre-capture) | Overflow | Title |
|---|---|---|---|
| desktop 1440×900 light | light ✓ | 0px | ✓ |
| desktop 1440×900 dark | dark ✓ | 0px | ✓ |
| mobile 390×844 light | light ✓ | 0px | ✓ |
| mobile 390×844 dark | dark ✓ | 0px | ✓ |

## Element capture

- `element-respiratory-burst-enzymes-{light,dark}.png` — 1102×765 (DOM-measured rect height,
  per the E31 process rule), stdev 29.98/26.05 (real content)

## VLM paint QA — CLEAN ×2 FIRST PASS

- light: **CLEAN** · dark: **CLEAN** (zero defect rounds)

## Gates (this batch)

- Evidence: 26/26 quotes machine-verified FIRST PASS (pdf 129 / book 107), including all 15
  vector diagram labels with their superscript/arrow glyphs (∞ → for the legends).
- Cumulative evidence 2285/2285 EXIT 0 · validate CONTRACT GREEN (2 documented warnings) ·
  audit 78 topics / 0 depth failures · tsc 1 documented baseline.
- Registry: 122 → 123 visuals. Tracker: 78 topics. Immunology: 15/24.

## Census + fidelity notes (manifest notes)

- pdfimages on p129: ZERO images — the phagolysosome cascade diagram is pure vector; one
  original KYP redraw with all six numbered steps and legends.
- Mnemonic boundary (E22+ rule): FA's "NO Safe Microbe" enzyme-sequence mnemonic is in
  manifest evidence for VERIFICATION ONLY — never user-facing; KYP originals replace it.
- KYP-extension boundary: carrier rash, NBT/DHR assay, CGD management, MPO phenotype, and
  the expanded catalase-positive panel are labeled extension.
- Boundary: pdf 130 (cell surface markers) = E33.

No source material stored here.
