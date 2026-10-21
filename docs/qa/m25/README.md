# M25 — viral-vaccines-diagnostics · QA Evidence

Topic: **Viral Vaccines, Diagnosis & Emerging Viruses** (Microbiology, 25/39)
Route: `/usmle/viral-vaccines-diagnostics` · Visual: **1 new registry
visual** — `vaccine-diagnostic-map` (the Aedes trio comparison grid + the
yellow-fever/Zika cards + the emerging-set panel + an ORIGINAL redraw of the
SARS-CoV-2 virion cross-section + the prion cascade panel).

## Machine-measured browser QA (4 passes)

| Pass | Theme | Overflow | Title |
|---|---|---|---|
| desktop 1440×900 light | light ✓ | 0px | ✓ |
| desktop 1440×900 dark | dark ✓ | 0px | ✓ |
| mobile 390×844 light | light ✓ | 0px | ✓ |
| mobile 390×844 dark | dark ✓ | 0px | ✓ |

24/24 checks pass.

## Defects found and fixed (real, documented — 2 rounds)

- **YF/Zika card text overrun** (round 1): the card body text wrapped at
  860u from x=152 (right edge 1012 > panel 928 > viewBox 980). **Fix:**
  wrap budget 860→768.
- **ZIKA card bottom overrun** (round 2): the AEDES panel height
  under-allocated the two stacked cards by ~16u (constant 32 allotted vs 48
  needed). **Fix:** AE_H computed from the true card stack (12 + lines×9 + 6
  per card + 12 gap + 8 margin).
- Final in-browser getBBox sweep: **67 texts · 0 overlaps · 0 overruns · 0
  edge violations** (viewBox 980×979).

## Element capture + VLM paint QA

- `element-crop-v0-{light,dark}.png` — 1102×1055 (DOM at 1440×900:
  x=281 y=6147), stdev 25.03/22.42 (real content).
- VLM: light **CLEAN**, dark **CLEAN** (anti-code guard) — first pass.

## Source resolution

- p190: 1 raster (congenital-Zika axial brain imaging A). p191: 3 rasters +
  the labeled virion diagram (rabies bullet TEM A [gray], Negri-bodies
  micrograph B [gray], Ebola filamentous TEM A, the SARS-CoV-2 cross-section
  [188×94 cmyk]) — the cross-section is redrawn ORIGINALLY in the visual.
  p196: 0 rasters.
- Banner typo `MICROCIOLOGY—VIROLOGY` on books 168-169; book 174 prints the
  different banner `MICROCIOLOGY—SYSTEMS` (documented). p191's image labels
  emit at the page top before the banner block; the table columns on p190
  emit grouped; the dengue `antibodydependent` hyphen-drop carried verbatim.
- Page ownership: book 174's prions block belongs to M25; the
  normal-microbiota and foodborne blocks on the same page belong to M28
  (cross-documented in both manifests).

## Gates

- evidence **27/27** first pass · CONTRACT GREEN (after fixing the sourceRef
  book-range format, the MOLECULAR_STRUCTURE vocabulary, and adding a 5th
  recall item) · audit 112 topics / 0 depth failures · tsc 1 baseline ·
  tracker synced (112).
