# M27 — hiv-aids · QA Evidence

Topic: **HIV & AIDS: Virology Through Opportunists** (Microbiology, 27/39)
Route: `/usmle/hiv-aids` · Visual: **1 new registry visual** —
`hiv-lifecycle-map` (the ORIGINAL virion cross-section redraw with 6
leader-line labels + the 3-gene strip + the entry-coreceptor strip + the
diagnosis algorithm panel + the tier-colored CD4 ladder with 18 pathogen
rows; 1468u).

## Machine-measured browser QA (4 passes)

| Pass | Theme | Overflow | Title |
|---|---|---|---|
| desktop 1440×900 light | light ✓ | 0px | ✓ |
| desktop 1440×900 dark | dark ✓ | 0px | ✓ |
| mobile 390×844 light | light ✓ | 0px | ✓ |
| mobile 390×844 dark | dark ✓ | 0px | ✓ |

24/24 checks pass. Geometric audit FIRST RUN clean: **111 texts · 0
overlaps · 0 overruns · 0 edge violations**.

## Element capture + VLM paint QA

- `element-crop-v0-{light,dark}.png` — 1102×1651 (DOM at 1440×900:
  x=281 y=5546), stdev 20.61/18.50 (real content).
- VLM: light **CLEAN**, dark **CLEAN** (anti-code guard) — first pass.

## Source resolution

- BOTH pages PURE VECTOR (0 rasters on 194 and 195) — the labeled virion
  diagram and the diagnosis-algorithm flowchart are vector in the source
  and are redrawn originally; no copyrighted photos on this topic.
- Banner typo `MICROCIOLOGY—VIROLOGY` on books 172-173. p194's virion
  labels emit in two interleaved column blocks; the algorithm's NAT
  branches repeat; the `antibodynegative` hyphen-drop at line 103;
  p195's CD4 thresholds emit INSIDE the tier rows (<500 at 22, <200 at
  55, <100 at 89); the MAI/MAC presentation text merges across lines
  136-139; detached superscript-3 markers at lines 20/88.
- FA's RIP "Pol" gloss quoted in the gene strip, verification-only.
- Scope note: HIV therapy (NRTIs through integrase inhibitors) is M38 —
  this note covers virology, diagnostics, and the opportunist ladder.

## Gates

- evidence **31/31** first pass (pdf 194-195 / books 172-173) · CONTRACT
  GREEN · audit 114 topics / 0 depth failures · tsc 1 baseline · tracker
  synced (114).
