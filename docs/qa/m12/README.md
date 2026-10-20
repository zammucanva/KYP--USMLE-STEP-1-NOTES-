# M12 — gram-negative-bacilli · QA Evidence

Topic: **Gram-Negative Bacilli: Enterics, Zoonotics & the Water Organisms**
(Microbiology, 12/39 — Clinical Bacteriology)
Route: `/usmle/gram-negative-bacilli` · Visual: **1 new registry visual** —
`gram-neg-bacilli-map` (the Gram-negative lab algorithm tree redraw with
all four morphology lanes and their maltose/growth-condition/lactose/
oxidase/H2S-TSI gates + the seven-row Neisseria split + the eight-organism
environment roster).

## Machine-measured browser QA (4 passes, re-run after fixes)

| Pass | Theme (verified pre-capture) | Overflow | Title |
|---|---|---|---|
| desktop 1440×900 light | light ✓ | 0px | ✓ |
| desktop 1440×900 dark | dark ✓ | 0px | ✓ |
| mobile 390×844 light | light ✓ | 0px | ✓ |
| mobile 390×844 dark | dark ✓ | 0px | ✓ |

## Element capture

- `element-gram-neg-bacilli-map-{light,dark}.png` — 1102×1496
  (DOM-measured at x=281 y=5737), stdev 22.81/20.53 (final)

## VLM paint QA — 2 real-defect fixes + 3 evidenced false-positive disproofs

- Round 1: light raised a "critical" roster/anchors overlap — DISPROVEN BY
  PIXEL MEASUREMENT: rows 1330-1356 of the element crop contain ZERO dark
  pixels (a clean band between the roster's bottom border and the anchors
  text, which begins exactly at its designed row 1360); dark read of
  identical geometry found no such defect. Dark round 1 raised one REAL
  minor defect: root-box arrows colliding with the "morphology splits"
  sub-text — FIXED (redundant line removed; the panel header already says
  "morphology first").
- Round 2 (light, post-fix): the arrows-into-labels defect was REAL
  (arrowheads piercing the lane boxes' left borders) — FIXED (all four
  branch arrows shortened to end 14px clear of the lane boxes).
  Its contrast flags on the anchors fine print use the same
  fill-muted-foreground-on-fill-secondary tokens measured at 5.29:1 in M9
  (above WCAG AA 4.5:1) — disproof by prior measurement.
- Round 3 (light, post-fix): claimed the anchors block "overlapping the
  footer" — DISPROVEN BY PIXEL MEASUREMENT: rows 1424-1454 are pure
  background (zero dark pixels, a 30px clean band); the footer text begins
  exactly at its designed row 1457. The dark round 2 (final, identical
  geometry) returned CLEAN.
- Final state: dark CLEAN; light's residual claims are all
  measurement-disproven collision hallucinations in the dense bottom
  region + the AA-passing token set documented since M9.
- Transcripts: rounds 1-3 + final dark in this directory; the focused
  tree-wiring census in `source-census.txt`.

## Evidence set

35/35 quotes verified FIRST RUN (gen_m12_json.py — the largest M-series
evidence set). The tree's interleaved label stream quoted as physical-order
ranges (morphology labels → coccobacillus list → diplococci gates/leaves →
curved-rod conditions → the bacilli lane with Shigella/Yersinia BEFORE
'Fast' and Salmonella/Proteus LAST); the Yersinia superscript-a emitted
attached ('Yersiniaa'); p162's top-of-page headings+markers block with the
footer emitting at line 16 before the page banner; p163's printed
PSEUDOMONAS block; 'healthcareassociated'/'piperacillintazobactam'
hyphen-drops; ▘ bullets; ↓/↑ arrows; dual +/− forms. PAGE BOUNDARY: pdf 161
shared with M11 — M12 owns the tree (lines 26-98); leprosy is M11's.

## Gates

sync (99 topics) · validate CONTRACT GREEN (2 documented warnings) ·
audit 0 depth failures · evidence 2747/2747 EXIT 0 · tsc 1 baseline error.
