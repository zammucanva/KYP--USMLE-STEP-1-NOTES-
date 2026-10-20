# M4 — oxygen-requirements · QA Evidence

Topic: **Anaerobes, Aerobes & Oxygen Tolerance** (Microbiology, 4/39)
Route: `/usmle/oxygen-requirements` · TABLE NOTE by design (requiresVisual
false in the inventory — no registry visual; the E22/E35 genre).

## Machine-measured browser QA (4 passes)

| Pass | Theme (verified pre-capture) | Overflow | Title |
|---|---|---|---|
| desktop 1440×900 light | light ✓ | 0px | ✓ |
| desktop 1440×900 dark | dark ✓ | 0px | ✓ |
| mobile 390×844 light | light ✓ | 0px | ✓ |
| mobile 390×844 dark | dark ✓ | 0px | ✓ |

## Element captures (text-anchored, E22 pattern)

- `element-trait-directory-table-{light,dark}.png` — 1150×590 (x=257 y=3819),
  stdev 29.82/29.06
- `element-mechanism-flow-{light,dark}.png` — 1152×563 (x=256 y=7270),
  stdev 35.46/34.96

## VLM paint QA — CLEAN ×4 (both elements × both themes, first pass)

- trait-directory-table: light CLEAN · dark CLEAN
- mechanism-flow: light CLEAN · dark CLEAN — zero defect rounds, zero fixes.

## Gates (this batch)

- Evidence: 17/18 quotes verified (pdf 147 / book 125; 1 sub-3-char photo
  letter 'A' dropped BY DESIGN — covered by the inline figure-pointer quote
  'Streptococcus pneumoniae A ,'). Documented quirks: 'shortchain' hyphen-drop
  at the line join; 'AminO2glycosides' (FA mnemonic word, table text only);
  U+0090 control char before ↓ (stripped per norm); double-space '→  ↑ pH';
  the 'Intracellular bacteria' left-column header emitted by the text layer
  near page end (VLM resolved true position: above Obligate intracellular).
- Census: ONE raster (188x188 cmyk) = photo A, the Encapsulated row's
  micrograph (encapsulated gram-positive diplococci, light microscopy) —
  COPYRIGHTED, described-in-text only. VLM 3-round census resolved the layout
  (header row position; photo ownership; no bottom-third photo).
- validate: CONTRACT GREEN — 2 fixes during the batch: sub-3-char drop logic
  (skip, don't fail — intentional drops covered inline); sv1 note-block +
  kypLocation + coverageAudit kypOriginals reconcile (E35 pattern).
- audit 91/0 · evidence 2554/2554 · tsc 1 baseline.
- FA's 5 printed mnemonics (Anaerobes Can't Breathe Fresh Air / Stay inside /
  Some Nasty Bugs May Live FacultativeLY / Please SHiNE my SKiS / Pee CHUNKSS)
  — carried verbatim in the table block only; KYP originals in mnemonics field.
