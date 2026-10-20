# M1 — bacterial-structures · QA Evidence

Topic: **Bacterial Structures: Anatomy & Function** (Microbiology, 1/39)
Route: `/usmle/bacterial-structures` · Visual: **1 new registry visual** —
`bacterial-cell-anatomy` (two gram-archetype envelope panels + common/unique key +
9-structure roster + toxin-layers/sporulation/enzyme-address cards). First visual
of the new `micro.tsx` registry file (M-batch series).

## Machine-measured browser QA (4 passes)

| Pass | Theme (verified pre-capture) | Overflow | Title |
|---|---|---|---|
| desktop 1440×900 light | light ✓ | 0px | ✓ |
| desktop 1440×900 dark | dark ✓ | 0px | ✓ |
| mobile 390×844 light | light ✓ | 0px | ✓ |
| mobile 390×844 dark | dark ✓ | 0px | ✓ |

## Element capture

- `element-bacterial-cell-anatomy-{light,dark}.png` — 1102×877 (DOM-measured at
  x=281 y=3750; identical rects verified in light and dark), stdev 28.84/24.85

## VLM paint QA — CLEAN ×2 after one real defect + 3 disproven false positives

- Round 1 (initial composition): light FAIL (A)+(C) — REAL defect: the original
  3-line lipoteichoic-acid rail design (x≈110/186/262) crossed the wall description
  text and the lipoteichoic label. **FIXED**: rails redesigned as 2 side rails at
  x[98–104] and x[268–274] with arrowheads — outside every text span in the panel.
- Round 2: 3 flags raised, all **disproven with gathered evidence** (per the
  false-positive protocol):
  - Light (B) "truncated words ('no outer mem', 'wide periplas')" — DISPROVEN:
    `getComputedTextLength()` returns full-string lengths (128.93px for "thick
    peptidoglycan wall · no outer membrane"; 96.53px for "outer membrane + wide
    periplasm"), zero `clipPath` elements in the SVG, canvas 980 — SVG text cannot
    truncate here; the dark read of identical geometry returned PASS.
  - Light (C) "red arrows through the lipoteichoic text" — DISPROVEN: rail
    x-ranges [98,104]∪[268,274] vs measured text spans x[129,243] ("Lipoteichoic
    acids (GRAM ⊕ ONLY) extend") and x[157,215] ("induce TNF-α and IL-1") — no
    intersection (rails pass through the wall band, not through text); the dark
    read of the same geometry returned PASS.
  - Dark (D) "very dark grey, difficult to read" — DISPROVEN by measurement:
    canvas-normalized contrast vs the card background (rgb 9,18,28) =
    **7.10:1** (fill-muted-foreground), 5.96:1 (fill-emergency), 8.12:1
    (fill-brand), 16.78:1 (fill-foreground) — all above WCAG AA 4.5:1; these are
    the same design tokens as the 130 prior registry visuals.
- Round 3: light **CLEAN** · dark **CLEAN** (all four classes PASS).

## Gates (this batch)

- Evidence: 24/24 quotes machine-verified (pdf 144 / book 122) — the 9-row table's
  cells are contiguous text-layer blocks; ONE documented quirk: the table's Spore
  row label is emitted in the FIGURE region (between "Specialized structures" and
  "Cell envelope") — quoted at its physical position; the figure-region labels
  interleave by visual row across both cells, side assignments resolved by the
  VLM 200-DPI census read (Gram ⊕ LEFT / Gram ⊝ RIGHT).
- validate: CONTRACT GREEN (2 documented cross-chapter warnings) — 2 fixes during
  the batch: sourceRef format `pp. 122–122` (validator cross-check), visualType
  corrected to `MICROBIOLOGY_IMAGE` (vocabulary).
- audit: 88 topics / 0 depth failures · evidence 2507/2507 EXIT 0 · tsc 1
  documented baseline.
- Census: p144 rasters = 4×1x1 artifacts (furniture) + the two cell comparison
  drawings (gray + cmyk duplicates, soft masks) — COPYRIGHTED, described-in-text
  only; redrawn as ONE original KYP registry visual. No FA mnemonics printed on
  this page.
