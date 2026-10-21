# M29 — bugs-by-system-gi-meningitis · QA Evidence

Topic: **Bugs by System: GI, Pneumonia, Meningitis & CSF** (Microbiology,
29/39)
Route: `/usmle/bugs-by-system-gi-meningitis` · Visual: **1 new registry
visual** — `systems-bug-matrix` (the bloody/watery diarrhea split + the
5-column pneumonia ladder with special groups + the 4-column meningitis
ladder with the CSF key and empiric strip + the brain-abscess rules + the
osteomyelitis risk-factor map; 1550u).

## Machine-measured browser QA (4 passes)

| Pass | Theme | Overflow | Title |
|---|---|---|---|
| desktop 1440×900 light | light ✓ | 0px | ✓ |
| desktop 1440×900 dark | dark ✓ | 0px | ✓ |
| mobile 390×844 light | light ✓ | 0px | ✓ |
| mobile 390×844 dark | dark ✓ | 0px | ✓ |

24/24 checks pass.

## Defects found and fixed (real, documented — 3 rounds)

1. **Two truncated generator lines** (pre-generation syntax) — the
   pneumonia and osteomyelitis panel-title strings; fixed by line rewrite.
2. **Empiric-strip text overrun** (pre-append audit): 867.1u of text
   against an 864u budget — wrap tightened 880→860.
3. **Pneumonia title grazing the diarrhea panel's content** (in-browser
   getBBox): the DIA_H height under-allocated the row stack by ~40u —
   recomputed from the true content stack (58 + max-col-sum + gaps + 10).
   Final audit: **123 texts · 0 overlaps · 0 overruns · 0 edge violations**.

## Element capture + VLM paint QA

- `element-crop-v0-{light,dark}.png` — 1102×1698 (DOM at 1440×900:
  x=281 y=5850), stdev 27.18/21.83 (real content).
- VLM: light **CLEAN**, dark **CLEAN** (anti-code guard) — first pass.

## Source resolution

- p197: 0 rasters. p198: 1 gray raster (the osteomyelitis radiograph + MRI
  pair A) — described-in-text only.
- SYSTEMS banner typo `MICROCIOLOGY—SYSTEMS` on books 175-176. The
  pneumonia age headers emit grouped before the organism blocks with FA's
  two glosses (Runts May Cough; Chunky Sputum) interleaved mid-column; the
  virus row of the diarrhea table wraps across lines; the CSF table emits
  row-by-row in 5-cell groups; the osteomyelitis footnote marker at line
  100 with the workup text at 131-134.

## Gates

- evidence **34/34** first pass · CONTRACT GREEN (after re-syncing the
  tracker, which the note's initial TS syntax error had blocked) · audit
  116 topics / 0 depth failures · tsc 1 baseline (the note's `to "s3"`
  missing-colon typo fixed) · tracker synced (116).
