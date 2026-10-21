# M28 — normal-flora · QA Evidence

Topic: **Normal Flora & Colonization** (Microbiology, 28/39)
Route: `/usmle/normal-flora` · **TABLE NOTE** (requiresVisual false — the
E22/E35 pattern): both source tables carried verbatim in the note's table
blocks; no registry visual per the approved inventory.

## Machine-measured browser QA (4 passes)

| Pass | Theme | Overflow | Title |
|---|---|---|---|
| desktop 1440×900 light | light ✓ | 0px | ✓ |
| desktop 1440×900 dark | dark ✓ | 0px | ✓ |
| mobile 390×844 light | light ✓ | 0px | ✓ |
| mobile 390×844 dark | dark ✓ | 0px | ✓ |

24/24 checks pass.

## Table element capture + VLM QA

- `table-{light,dark}.png` — the microbiota table at its DOM rect
  (x=257 y=3859, 1150×459), stdev 23.53/23.19 (real content).
- VLM table QA: light **CLEAN**, dark **CLEAN** — first pass.

## Source resolution

- Page ownership: book 174's Prions block belongs to M25; the microbiota
  and foodborne blocks belong here (cross-documented in both manifests).
- The SYSTEMS banner typo `MICROCIOLOGY—SYSTEMS` prints on book 174 (the
  VIROLOGY banner's sibling). The microbiota headers interleave; the
  vagina row's 'group B'/'strep' splits across lines; the S aureus source
  text emits BEFORE its label; the seafood superscript prints detached.
- FA's printed B cereus gloss quoted in the table block,
  verification-only. Page is pure text — 0 rasters.

## Gates

- evidence **19/19** first pass · CONTRACT GREEN · audit 115 topics / 0
  depth failures (after adding a 5th recall item per the validator) · tsc
  1 baseline · tracker synced (115).
