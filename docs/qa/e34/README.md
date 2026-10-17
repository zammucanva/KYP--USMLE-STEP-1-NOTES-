# E34 — active-passive-immunity · QA Evidence

Topic: **Active vs Passive Immunity & Vaccination** (Immunology, 17/24)
Route: `/usmle/active-passive-immunity` · Visual: **1 new registry visual** —
`vaccine-type-spectrum` (active/passive strip; five vaccine-type cards with WHAT/PROS/CONS/
EXAMPLES; conjugate-trick panel; combined-protocol card).

## Machine-measured browser QA (4 passes)

| Pass | Theme (verified pre-capture) | Overflow | Title |
|---|---|---|---|
| desktop 1440×900 light | light ✓ | 0px | ✓ |
| desktop 1440×900 dark | dark ✓ | 0px | ✓ |
| mobile 390×844 light | light ✓ | 0px | ✓ |
| mobile 390×844 dark | dark ✓ | 0px | ✓ |

## Element capture

- `element-vaccine-type-spectrum-{light,dark}.png` — 1102×787 (DOM-measured rect), stdev 27.55/23.64

## VLM paint QA — CLEAN ×2 FIRST PASS

- light: **CLEAN** · dark: **CLEAN** (zero defect rounds)

## Gates (this batch)

- Evidence: 25/25 quotes machine-verified (pdf 130-131 / book 108-109) after a documented
  first-run correction round: the p131 vaccine table's columns INTERLEAVE in the text layer
  (pdftotext reads across columns line-by-line), so five multi-line quotes were rewritten to
  the physical line order (desc+pros, cons+HIV-exception, subunit pros/cons+examples with the
  HBsAg merge, mRNA description+pros, and the split top/bottom table headers).
- Cumulative evidence 2326/2326 EXIT 0 · validate CONTRACT GREEN (2 documented warnings) ·
  audit 80 topics / 0 depth failures · tsc 1 documented baseline.
- Registry: 124 → 125 visuals. Tracker: 80 topics. Immunology: 17/24.

## Census + fidelity notes (manifest notes)

- p130: zero images (pure vector). p131: 3 separation-space rasters — VLM-verified decorative
  spotlight/hexagon callout shapes (page furniture, not content artwork); documented.
- Mnemonic boundary (E22+ rule): FA's "Attention teachers!..." and "A TRIP could Kill you"
  are in manifest evidence for VERIFICATION ONLY — never user-facing; KYP originals replace
  them.
- Boundary: the Cell surface proteins roster on p130 is owned by E33 (pinned there as
  boundary evidence).

No source material stored here.
