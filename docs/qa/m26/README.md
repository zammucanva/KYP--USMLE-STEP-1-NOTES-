# M26 — hepatitis-viruses · QA Evidence

Topic: **Hepatitis Viruses: A Through E** (Microbiology, 26/39)
Route: `/usmle/hepatitis-viruses` · Visual: **1 new registry visual** —
`hepatitis-serology-map` (the mechanism strip + the 5-virus grid + the
ORIGINAL serology-clock timeline redraw + the 7-scenario patterns table +
the extrahepatic B-vs-C panel; 1316u).

## Machine-measured browser QA (4 passes)

| Pass | Theme | Overflow | Title |
|---|---|---|---|
| desktop 1440×900 light | light ✓ | 0px | ✓ |
| desktop 1440×900 dark | dark ✓ | 0px | ✓ |
| mobile 390×844 light | light ✓ | 0px | ✓ |
| mobile 390×844 dark | dark ✓ | 0px | ✓ |

24/24 checks pass. Geometric audit FIRST RUN clean: **148 texts · 0
overlaps · 0 overruns · 0 edge violations**.

## Element capture + VLM paint QA

- `element-crop-v0-{light,dark}.png` — 1102×1480 (DOM at 1440×900:
  x=281 y=5554), stdev 23.12/20.97 (real content).
- VLM: light **CLEAN**, dark **CLEAN** (anti-code guard) — first pass.

## Source resolution

- p192: 1 raster (Councilman-bodies histology A). p193: 17 tiny sep
  rasters (the patterns table's ⊕/⊝ marks) — redrawn as text marks; the
  timeline figure itself is vector (redrawn originally).
- **The source's own column-header typos print on book 170: 'INCUCATION'
  (missing BAT) and 'LIVER CIOPSY' (missing BI)** — both documented and
  carried verbatim in the note's table with the typos marked.
- The 5-virus table columns emit in grouped blocks; HDV/HEV notes
  interleave at the page end; the timeline labels emit in two passes; the
  (IgM)/(IgG) qualifiers attach to the pattern names. FA's 'vowels hit
  your bowels' gloss quoted in the table block, verification-only.

## Gates

- evidence **35/35** first pass (pdf 192-193 / books 170-171) · CONTRACT
  GREEN · audit 113 topics / 0 depth failures · tsc 1 baseline · tracker
  synced (113).
