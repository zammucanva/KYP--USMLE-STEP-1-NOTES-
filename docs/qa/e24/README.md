# E24 — t-cell-development · QA Evidence

Topic: **T-Cell Development: Thymic Selection & Subset Lineages** (Immunology, 7/24)
Route: `/usmle/t-cell-development` · Visual: **1 new registry visual** —
`t-cell-selection-map` (the thymic school: BM precursor → double-positive → cortex positive
selection / medulla negative selection + AIRE → single-positive outputs; plus the helper
lineage switchboard with (+)/(−) cytokine regulators).

## Machine-measured browser QA (4 passes)

| Pass | Theme (verified pre-capture) | Overflow | Title |
|---|---|---|---|
| desktop 1440×900 light | light ✓ | 0px | ✓ |
| desktop 1440×900 dark | dark ✓ | 0px | ✓ |
| mobile 390×844 light | light ✓ | 0px | ✓ |
| mobile 390×844 dark | dark ✓ | 0px | ✓ |

Note: the first QA run hit a 404 because the dev server had cached
`generateStaticParams` from before the note existed (dynamicParams=false); server restart
re-evaluated the slug list and the route returned 200. A stale-session resource crunch
(fork exhaustion) was cleared with `agent-browser close --all` before re-running.

## Element capture

- `element-t-cell-selection-map-{light,dark}.png` — 1102×663, stdev 28.30/25.38 (real content)
- Doc-coords measured in-browser (svg aria-label anchored).

## VLM paint QA — 1 defect round, FIXED, final CLEAN ×2

**Round 0 (light):** DEFECT — the section-1 label "THE THYMIC SCHOOL — selection builds a
self-tolerant, MHC-restricted repertoire" ran into the THYMUS panel (which tops at y=76,
higher than its sibling panels) and appeared truncated at the panel edge.
**Fix 1:** label shortened to "THE THYMIC SCHOOL" (clears the thymus panel's left edge at
x=216; the descriptive tail was redundant with panel content). → v1 light **CLEAN**.
**Dark:** **CLEAN** first pass.

## Gates (this batch)

- Evidence: 37/37 quotes machine-verified FIRST PASS (pdf 122 / book 100), including all
  +/− regulator lists, the four table rows, and the selection prose.
- Cumulative evidence 2021/2021 EXIT 0 · validate CONTRACT GREEN (2 documented warnings) ·
  audit 70 topics / 0 depth failures · tsc 1 documented baseline.
- Registry: 113 → 114 visuals. Tracker: 70 topics. Immunology: 7/24.

## Census + fidelity notes (manifest notes)

- pdf 122 rasters: 541×255 separation-space image = **thymus anatomical illustration**
  (top of Thymus column); 303×303 indexed circle = cell icon (+smask); 1×1 artifact. The
  Differentiation diagram is otherwise vector/text. The thymus raster is COPYRIGHTED —
  conveyed as an ORIGINAL KYP schematic (never reproduced).
- Printed-glyph finding: Th2 function cell prints **"Activate eosinophils, ↑IgE"** — the ↑
  (symbol-font instance) is dropped by pdftotext; the machine-verifiable quote uses the
  text-layer form, and the note's user-facing table + visual show the printed form with ↑
  (VLM-verified at 400% zoom).
- The source's printed acronym for the AIRE syndrome is NOT reproduced as a mnemonic;
  KYP-authored mnemonics are used instead.
- Boundary: Macrophage-lymphocyte interaction / Cytotoxic T cells / Regulatory T cells on
  the same printed page are owned by E25 cytotoxic-regulatory-t-cells (not re-claimed).

No source material stored here.
