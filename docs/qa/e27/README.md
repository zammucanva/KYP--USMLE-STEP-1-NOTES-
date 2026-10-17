# E27 — antibody-structure · QA Evidence

Topic: **Antibody Structure & Function** (Immunology, 10/24 — first Immune Responses banner topic)
Route: `/usmle/antibody-structure` · Visual: **1 new registry visual** — `antibody-anatomy`
(expanded Y schematic: Fab arms with VL/CL + VH/CH1 halves, hypervariable tips + epitopes,
hinge with SS bonds, heavy-chain-only Fc stem CH2/CH3 with complement/macrophage pointers,
region-jobs rail, chain-contribution anchors, diversity steps 1-5, function trio strip).

## Machine-measured browser QA (4 passes)

| Pass | Theme (verified pre-capture) | Overflow | Title |
|---|---|---|---|
| desktop 1440×900 light | light ✓ | 0px | ✓ |
| desktop 1440×900 dark | dark ✓ | 0px | ✓ |
| mobile 390×844 light | light ✓ | 0px | ✓ |
| mobile 390×844 dark | dark ✓ | 0px | ✓ |

## Element capture

- `element-antibody-anatomy-{light,dark}.png` — 1102×708, stdev 25.77/23.28 (real content)

## VLM paint QA — CLEAN ×2 FIRST PASS

- light: **CLEAN** · dark: **CLEAN** (zero defect rounds)

## Gates (this batch)

- Evidence: 37/37 quotes machine-verified (pdf 124 / book 102) after two documented first-run
  corrections: (1) the VH/VL/CL diagram labels are 2-char — below the ≥3-char quote floor —
  and are covered by the multi-line hypervariable-region label instead; (2) the Fab/Fc
  definition lines carry a `▘` bullet glyph (U+2598, not stripped by norm — preceded by an
  \x83 byte that IS stripped) — quotes updated to include the glyph; verified.
- Cumulative evidence 2108/2108 EXIT 0 · validate CONTRACT GREEN (2 documented warnings) ·
  audit 73 topics / 0 depth failures · tsc 1 documented baseline.
- Registry: 117 → 118 visuals. Tracker: 73 topics. Immunology: 10/24.

## Census + fidelity notes (manifest notes)

- p124 rasters (pdfimages): 467×329 cmyk jpeg (a function illustration), two index strips
  (page furniture), 1×1 artifact. The Y-anatomy diagram is VECTOR-DRAWN. All artwork is
  COPYRIGHTED — conveyed within ONE original KYP registry visual; nothing reproduced.
- Scope correction (documented): the inventory rationale's "papain vs pepsin cleavage map" is
  NOT printed on p124 (only GI-physiology pepsin on pdf 400-403) — E27 is scoped to the
  actual printed content; the cleavage concept appears only as a labeled KYP bridge in
  pattern 2.
- Boundary: pdf 123 = E26; pdf 125 (isotypes) = E28.

No source material stored here.
