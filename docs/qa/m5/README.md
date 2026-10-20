# M5 — organism-groups-quick-reference · QA Evidence

Topic: **Catalase, Pigment, Spore & Encapsulation Groups** (Microbiology, 5/39)
Route: `/usmle/organism-groups-quick-reference` · TABLE NOTE by design
(requiresVisual false — the E22/E35/M4 genre).

## Machine-measured browser QA (4 passes)

| Pass | Theme (verified pre-capture) | Overflow | Title |
|---|---|---|---|
| desktop 1440×900 light | light ✓ | 0px | ✓ |
| desktop 1440×900 dark | dark ✓ | 0px | ✓ |
| mobile 390×844 light | light ✓ | 0px | ✓ |
| mobile 390×844 dark | dark ✓ | 0px | ✓ |

## Element captures (text-anchored)

- `element-trait-directory-table-{light,dark}.png` — 1150×416 (x=257 y=3758),
  stdev 32.05/31.15
- `element-mechanism-flow-{light,dark}.png` — 1152×539 (x=256 y=7087),
  stdev 37.16/36.38

## VLM paint QA — CLEAN ×4 (both elements × both themes, first pass)

- trait-directory-table: light CLEAN · dark CLEAN
- mechanism-flow: light CLEAN · dark CLEAN — zero defect rounds, zero fixes.

## Gates (this batch)

- Evidence: 17/17 quotes verified (pdf 148 / book 126) first run. Documented
  quirks: 'In vivo biofilmproducing bacteria' hyphen-drop at the line join
  (printed 'biofilm-producing'); the biofilm + spore-former row labels are
  two-line left-column labels emitted at page end (VLM census resolved the
  row order: catalase → pigment → biofilm → spore).
- Census: ONE raster (198x130 cmyk) = photo A, the Catalase row's figure
  (a positive catalase test — bubbles of O2; inline letter within the
  mechanism sentence 'bubbles of O2 A before') — COPYRIGHTED,
  described-in-text only.
- validate: CONTRACT GREEN · audit 92/0 · evidence 2571/2571 · tsc 1 baseline.
- FA's 6 printed mnemonics (Notoriously Big Bubbling HASSLE / Israel has
  yellow sand / Aureus (Latin) = gold / Aerugula is green / Think red
  Sriracha hot sauce / Autoclave ABC) — carried verbatim in the table block
  only; KYP originals in the mnemonics field.
