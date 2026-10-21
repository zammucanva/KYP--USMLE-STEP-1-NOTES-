# M23 — dna-viruses · QA Evidence

Topic: **DNA Viruses: Families & Disease Map** (Microbiology, 23/39)
Route: `/usmle/dna-viruses` · Visual: **1 new registry visual** —
`dna-virus-family-map` (the box-rule/size-poles strip + the 7-family grid +
the 7-virus herpes roster + the identification/receptors strip).

## Machine-measured browser QA (4 passes)

| Pass | Theme | Overflow | Title |
|---|---|---|---|
| desktop 1440×900 light | light ✓ | 0px | ✓ |
| desktop 1440×900 dark | dark ✓ | 0px | ✓ |
| mobile 390×844 light | light ✓ | 0px | ✓ |
| mobile 390×844 dark | dark ✓ | 0px | ✓ |

24/24 checks pass (theme state, overflow, page errors, console, svg presence,
captures).

## Defect found and fixed (real, documented)

- **6 roster row-rect overruns** (geometric audit, first run): the herpes
  roster's row rects inherited the M21 710u width, but this roster's
  SIGNATURE column extends to x≈914 — 6 signature lines overran their row
  rects on the right (HSV-1, VZV, EBV ×2, CMV, HHV-6/7 rows). **Fix:** row
  rects widened 710→876u and the SIGNATURE header chip 414→580; re-audit
  **0 overruns / 0 overlaps / 0 edge violations** (86 texts, viewBox
  980×1114).

## Element capture + geometric audit

- `element-crop-v0-{light,dark}.png` — 1102×1253 (DOM at 1440×900:
  x=281 y=5847), stdev 21.22/18.89 (real content).
- In-browser getBBox sweep: 86 texts · 0 overlaps · 0 overruns (12 big
  rects) · 0 right/left/bottom edge violations.

## VLM paint QA — CLEAN ×2 first pass

- Light **CLEAN**, dark **CLEAN** (anti-code guard).

## Source resolution

- p183: 2 rasters (molluscum-bodies histology A, pharyngitis photo B).
  p184: **0 rasters** — the A-J photo MARKERS print on the table page but
  the photographs print on p185 (cross-page figure convention, documented).
  p185: 13 rasters vs 11 identified markers (A-J gallery + gray Tzanck A)
  — 2-image discrepancy documented as gallery sub-tiling.
- Banner typo `MICROCIOLOGY—VIROLOGY` prints on books 161-163; the VLM
  census normalized it twice differently (MICROBIOLOGY / MICROBIOLOOY) —
  both documented; the text layer is authoritative.
- VZV route text merges with the notes column mid-line; the VZV latency
  note emits after the page footer; EBV/CMV routes emit as multi-line
  blocks.

## Gates

- evidence **35/35** first pass (pdf 183-185 / books 161-163) · CONTRACT
  GREEN · audit 110 topics / 0 depth failures · tsc 1 baseline · tracker
  synced (110).
