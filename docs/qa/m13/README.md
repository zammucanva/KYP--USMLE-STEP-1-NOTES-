# M13 — enteric-pathogens · QA Evidence

Topic: **Enteric Pathogens: Salmonella, Shigella, E. coli Strains & Campylobacter**
(Microbiology, 13/39 — Clinical Bacteriology)
Route: `/usmle/enteric-pathogens` · Visual: **1 new registry visual** —
`enteric-pathogen-map` (the eleven-axis Salmonella-vs-Shigella comparison grid
+ the E. coli strain set with the EHEC/HUS capstone + the four-organism
enteric roster + the MacConkey/EMB lactose-rule anchors strip).

## Source resolution (2 independent VLM reads: 200-DPI census + 2x zoom)

- p164 pure vector; p165 carries 2 rasters (Klebsiella mucoid colonies A,
  Campylobacter comma/S with polar flagella A) — COPYRIGHTED, described-in-text.
- The EHEC row's two columns interleave in the text layer (lines 43-58);
  **"Does not ferment sorbitol (vs other E coli)" resolved to the PRESENTATION
  column** between the dysentery sentence and the printed
  hemorrhage-hamburgers mnemonic line — confirmed by both reads.

## Machine-measured browser QA (4 passes, re-run after fixes)

| Pass | Theme (verified pre-capture) | Overflow | Title |
|---|---|---|---|
| desktop 1440×900 light | light ✓ | 0px | ✓ |
| desktop 1440×900 dark | dark ✓ | 0px | ✓ |
| mobile 390×844 light | light ✓ | 0px | ✓ |
| mobile 390×844 dark | dark ✓ | 0px | ✓ |

## Element capture

- `element-enteric-pathogen-map-{light,dark}.png` — 1102×1462
  (DOM-measured at 1440×900: x=281 y=5651), stdev 23.96/22.30-equivalent
  re-capture at final geometry (real content confirmed).

## VLM paint QA — 1 real-defect fix round + 1 evidenced false-positive disproof

- Round 1 light: CLEAN. Round 1 dark: DEFECTS FOUND (3 claims) — each claim
  investigated geometrically:
  1. **Footer clipped** — REAL DEFECT, proven by getBBox: the single-line
     footer's right edge was **1418.8 > viewBox 980** (the crop cuts at the
     viewport). FIXED: footer rewritten as 3 wrapped lines (right edge ≤ ~660).
  2. **UNIQUE PROPERTIES row / EHEC card "crushed against borders"** — REAL
     for the UNIQUE row (6 units between the last row and the panel border);
     FIXED: row h 88→96 and panel A height 530→552, all downstream panels
     shifted (+22); EHEC card had 48 units bottom pad (adequate; unchanged
     besides the shift).
  3. **"Low-contrast axis labels"** — FALSE POSITIVE, DISPROVEN BY COMPUTED
     CONTRAST: the ROW/AXIS labels are Lab L 95.4 on card Lab L 5.2 in dark →
     relative luminance 0.888 vs 0.0061 → **WCAG contrast ≈ 16.7:1**
     (requirement 4.5:1).
- Post-fix audit: **0 overflowing text elements** (getBBox right-edge sweep
  across every <text> in the SVG).
- Round 2 light: **CLEAN**. Round 2 dark: **CLEAN**.

## Repair propagated to a completed topic (M12)

The footer-overflow audit also caught **two latent defects in M12's
gram-neg-bacilli-map** that its original VLM rounds had missed:
- footer right edge **1887.3 > 980** (single line) — FIXED (3 wrapped lines);
- anchors strip line 1 right edge **980.6 > 980** (331 chars, 981.1 units
  wide) — FIXED (strip rebalanced 4 → 5 lines, right edges ≤ ~904; anchors
  rect h 70→74).
M12 re-captured (4/4 passes, 0px overflow), re-cropped at its unchanged
1440×900 rect (x=281 y=5737, 1102×1496, stdev 23.30/20.98), and
re-verified: **VLM CLEAN ×2** (light + dark) — see `docs/qa/m12/vlm-repair-{light,dark}.txt`.

## Gates

- evidence **41/41** first pass (pdf 164-165 / book 142-143) · validate
  CONTRACT GREEN · audit 100 topics / 0 depth failures · tsc 1 documented
  baseline error · tracker synced (100 topics).
