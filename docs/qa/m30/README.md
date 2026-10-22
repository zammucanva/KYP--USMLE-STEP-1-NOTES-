# M30 — bugs-by-system-rash-std-torch · QA Evidence

Topic: **Bugs by System: Rash, STDs, TORCH & Nosocomial** (Microbiology,
30/39)
Route: `/usmle/bugs-by-system-rash-std-torch` · Visual: **1 new registry
visual** — `systems-bug-matrix-2` (the red-rashes-of-childhood directory with
the topography key + the UTI syndrome cards with the species ladder and
markers + the 3-way vaginal comparison + the 13-row STD directory with the
pain axis + the TORCH maternal-fetal map with the calcification key + the
8-row nosocomial routing; 2327u).

## Machine-measured browser QA (4 passes)

| Pass | Theme | Overflow | Title |
|---|---|---|---|
| desktop 1440×900 light | light ✓ | 0px | ✓ |
| desktop 1440×900 dark | dark ✓ | 0px | ✓ |
| mobile 390×844 light | light ✓ | 0px | ✓ |
| mobile 390×844 dark | dark ✓ | 0px | ✓ |

## Defects found and fixed (real, documented)

1. **Unterminated-string typo** in the TORCH panel-title generator line
   (`800'` for `800"`) — SyntaxError at generation; fixed by line rewrite.
2. **3 pre-append budget overruns** (the TORCH intro strip 876.6u/860u; two
   neonatal-manifestation lines 294.8u and 297.0u against 292u) — wrap widths
   tightened to the true column budgets (880→860, 300→292, 290→288).
3. **`fontWeight=800` unquoted JSX attribute** (generator emitted unquoted
   numeric props) — fixed to `fontWeight="800"`; micro.tsx reverted and
   regenerated once.
4. **Missing footer `</g>`** — the footer group never closed; fixed and
   regenerated.
5. **Triple registry registration** (the generator's registry edit ran on
   each retry) — TS1117 duplicate keys; registry.tsx reverted and
   registered exactly once.
6. **miniCase missing `reasoning` field** — caught by the contract
   validator; the reasoning paragraph authored and added.

Post-fix audit: **189 texts · 0 overlaps · 0 overruns · 0 edge violations**
(in-browser getBBox sweep) — first run after the fixes above.

## Element capture + VLM paint QA

- `element-crop-v0-{light,dark}.png` — 1110×2625 (DOM at 1440×900:
  x=281 y=6300.7), stdev 24.02/19.88 (real content).
- VLM: light **CLEAN**, dark **CLEAN** (anti-code guard) — first pass.

## Source resolution

- 20 clinical-photo rasters across books 177-181 (rash A-E; vaginal A-D;
  STD A-F; TORCH A-C; PID A-B) — all COPYRIGHTED, described-in-text only;
  p204 pure vector.
- SYSTEMS banner typo `MICROCIOLOGY—SYSTEMS` on books 177-181. The
  diagnostic-markers block emits between the S saprophyticus and Klebsiella
  rows; the vaginal table emits row-by-row across its columns;
  Trichomonas vaginalis emits after the timestamp footer (p201); the HSV-2
  agent-acquisition line merge (p202); the PID heading + A/B markers emit
  before the banner with the printed page number mid-page (p203); the
  system labels emit at the page end (p204).

## Gates

- evidence **56/56** first run · CONTRACT GREEN (after the miniCase
  reasoning fix + single registry registration) · audit 117 topics / 0
  depth failures · tsc 1 baseline · tracker synced (117).
