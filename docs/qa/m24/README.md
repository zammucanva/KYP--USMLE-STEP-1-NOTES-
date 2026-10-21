# M24 — rna-viruses · QA Evidence

Topic: **RNA Viruses: Families & Disease Map** (Microbiology, 24/39)
Route: `/usmle/rna-viruses` · Visual: **1 new registry visual** —
`rna-virus-family-map` (the cytoplasm-rule/sense-code strip + the
sense-coded 17-family grid + the influenza shift/drift panel + the pediatric
clinical set + the GI trio panel; 1646u — the largest M-visual to date).

## Machine-measured browser QA (4 passes)

| Pass | Theme | Overflow | Title |
|---|---|---|---|
| desktop 1440×900 light | light ✓ | 0px | ✓ |
| desktop 1440×900 dark | dark ✓ | 0px | ✓ |
| mobile 390×844 light | light ✓ | 0px | ✓ |
| mobile 390×844 dark | dark ✓ | 0px | ✓ |

24/24 checks pass.

## Element capture + geometric audit (first-run clean)

- `element-crop-v0-{light,dark}.png` — 1102×1851 (DOM at 1440×900:
  x=281 y=6167), stdev 19.50/17.65 (real content).
- In-browser getBBox sweep: **133 texts · 0 overlaps · 0 overruns · 0 edge
  violations** (viewBox 980×1646) — first run, no repairs needed.

## VLM paint QA — CLEAN ×2 first pass

- Light **CLEAN**, dark **CLEAN** (anti-code guard).

## Source resolution

- p186: 0 rasters (pure vector 17-family table). p187: 1 raster (rotavirus
  EM A — the wheel-like capsid). p188: 1 raster (blueberry-muffin congenital
  rubella rash A). p189: 3 rasters (steeple-sign x-ray A [gray, T = trachea],
  Koplik spots A, mumps parotitis A).
- Banner typo `MICROCIOLOGY—VIROLOGY` on books 164-167. Arbovirus
  superscript prints as trailing 'a' (Yellow fevera, Denguea); PERCH emits
  standalone; p188's shift/drift definitions interleave with the figure
  labels and rubella's text emits after the Paramyxoviruses heading; p189's
  croup column split leaves 'Acute' mid-sentence; ▘ bullets on the SSPE
  sequelae.
- The 2026 reclassification documented: rubella appears BOTH in the Toga
  CREW row ('formerly a togavirus') and in its own Matonavirus row — both
  carried verbatim in the note's table.

## Gates

- evidence **38/38** first pass (pdf 186-189 / books 164-167) · CONTRACT
  GREEN · audit 111 topics / 0 depth failures · tsc 1 baseline · tracker
  synced (111).
