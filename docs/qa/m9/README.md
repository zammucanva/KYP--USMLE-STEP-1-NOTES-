# M9 — gram-positive-cocci · QA Evidence

Topic: **Gram-Positive Cocci: Staphylococcus & Streptococcus** (Microbiology,
9/39 — Clinical Bacteriology begins)
Route: `/usmle/gram-positive-cocci` · Visual: **1 new registry visual** —
`gram-pos-cocci-tree` (the catalase/coagulase/hemolysis tree + the
test-signature rail + the 9-organism roster).

## Machine-measured browser QA (4 passes)

| Pass | Theme (verified pre-capture) | Overflow | Title |
|---|---|---|---|
| desktop 1440×900 light | light ✓ | 0px | ✓ |
| desktop 1440×900 dark | dark ✓ | 0px | ✓ |
| mobile 390×844 light | light ✓ | 0px | ✓ |
| mobile 390×844 dark | dark ✓ | 0px | ✓ |

## Element capture

- `element-gram-pos-cocci-tree-{light,dark}.png` — 1102×1012
  (DOM-measured at x=281 y=4913), stdev 24.02/21.10

## VLM paint QA — CLEAN ×2 after one evidenced false positive

- Round 1: dark CLEAN; light raised (D) "the Anchors line is very low
  contrast" — DISPROVEN BY MEASUREMENT: canvas-normalized contrast of
  fill-muted-foreground (88,102,109) on the fill-secondary strip
  (233,244,245) = **5.29:1**, above WCAG AA 4.5:1; the same tokens and
  font size as the M1–M8 anchors strips (all previously CLEAN). The dark
  read of identical geometry returned PASS.
- Round 3: light **CLEAN**.

## Gates (this batch)

- Evidence: 28/28 quotes verified (pdf 154–157 / book 132–135) FIRST RUN
  — programmatic 0-based ranges. Documented quirks: the tree's small-caps
  V/W artifacts ('sensitiVity', 'groWs', 'GroWth', 'NoVobiocin');
  'ﬁlaments' ligature; merged hyphen-drops ('healthcareassociated',
  'penicillinbinding', 'fibrinplatelet'); double-space arrows; 5 inline
  photo markers A with standalone markers sub-3-char (dropped by design).
- Census: the lab-algorithm tree is PURE VECTOR; the 5 printed photos
  (α/β hemolysis agar, S aureus clusters, S pneumoniae diplococci,
  S pyogenes chains, the anthrax black eschar) are rasters — COPYRIGHTED,
  described-in-text only.
- Boundary: the B-anthracis section on book 135 is this note's page
  (covered as the bridge per page ownership; M10 continues from book 136).
- validate: CONTRACT GREEN · audit 96/0 · evidence 2670/2670 · tsc 1
  baseline. One code fix during the batch: a stray broken JSX line in the
  visual caught before render (removed).
