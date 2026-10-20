# M7 — bacterial-genetics · QA Evidence

Topic: **Bacterial Genetics: Transformation, Conjugation, Transduction**
(Microbiology, 7/39)
Route: `/usmle/bacterial-genetics` · Visual: **1 new registry visual** —
`gene-transfer-triangle` (four lanes: transformation / conjugation pair
[F+ × F− + Hfr × F−] / transduction pair [generalized + specialized] + the
transposition card + the route-rules card with the ABCD'S roster).

## Machine-measured browser QA (4 passes)

| Pass | Theme (verified pre-capture) | Overflow | Title |
|---|---|---|---|
| desktop 1440×900 light | light ✓ | 0px | ✓ |
| desktop 1440×900 dark | dark ✓ | 0px | ✓ |
| mobile 390×844 light | light ✓ | 0px | ✓ |
| mobile 390×844 dark | dark ✓ | 0px | ✓ |

## Element capture

- `element-gene-transfer-triangle-{light,dark}.png` — 1102×945
  (DOM-measured at x=281 y=4792), stdev 28.90/24.76

## VLM paint QA — CLEAN ×2 FIRST PASS

- light: CLEAN · dark: CLEAN — zero defect rounds, zero fixes.

## Gates (this batch)

- Evidence: 21/21 quotes verified (pdf 150–151 / book 128–129). QUOTE
  CONSTRUCTION: the chapter's most heavily interleaved text layer — quotes
  built PROGRAMMATICALLY from raw line ranges of the cached page text
  (character-exact by construction), with every scramble documented:
  'highfrequency' hyphen-drop (print: high-frequency); 'ﬂanking' with the ﬂ
  ligature (U+FB02); the merged 'DNA F–+cellbacterialHfr' string; the
  'F cell F cell' marker rows and '+/–' marker columns; en-dash F– vs minus
  F− both present (raw joins reproduce both).
- PROCESS DEFECT caught and fixed during the batch: the range helper was
  1-based while dump indices were 0-based — every quote silently dropped
  its last line (the first run still passed containment because contiguous
  slices verify trivially). The off-by-one was detected by the three
  empty-quote drops and fixed to 0-based inclusive; the corrected quotes
  genuinely cover the intended content ends ('DNA, preventing
  transformation.' / 'bridge"). No transfer of chromosomal DNA.' verified
  present).
- Census: p150's five genetics diagrams are raster color-plate art
  (separation plates + index images); p151 top carries the transposition
  diagram — all COPYRIGHTED; all six redrawn in the one registry visual.
- Boundary: the 'Main features of exotoxins and endotoxins' table beginning
  on book 129 is M8's (heading pinned as boundary marker).
- validate: CONTRACT GREEN · audit 94/0 · evidence 2609/2609 · tsc 1
  baseline. No FA mnemonics printed on these pages.
