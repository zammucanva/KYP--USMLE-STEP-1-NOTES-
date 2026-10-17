# E35 — autoantibodies · QA Evidence

Topic: **Autoantibodies and Their Disease Associations** (Immunology, 18/24)
Route: `/usmle/autoantibodies` · Visual: **none by inventory design** (requiresVisual false —
table note, E22 pattern; the note's 26-row verbatim table IS the visual element; the
MechanismFlow renders as a div-based flow; page SVGs are 12-20px UI icons only).

## Machine-measured browser QA (4 passes)

| Pass | Theme (verified pre-capture) | Overflow | Title |
|---|---|---|---|
| desktop 1440×900 light | light ✓ | 0px | ✓ |
| desktop 1440×900 dark | dark ✓ | 0px | ✓ |
| mobile 390×844 light | light ✓ | 0px | ✓ |
| mobile 390×844 dark | dark ✓ | 0px | ✓ |

## Element capture

- `element-antibody-table-{light,dark}.png` — the 26-row verbatim table, 1102×1303,
  stdev 28.44/28.69 (real content)

## VLM paint QA — CLEAN ×2 FIRST PASS

- light: **CLEAN** · dark: **CLEAN** (zero defect rounds; columns clean, no cell clipping)

## Gates (this batch)

- Evidence: 28/28 quotes machine-verified FIRST PASS (pdf 135 / book 113) — all 26
  antibody/disease pairs plus the heading and table headers.
- Cumulative evidence 2354/2354 EXIT 0 · validate CONTRACT GREEN (2 documented warnings) ·
  audit 81 topics / 0 depth failures · tsc 1 documented baseline.
- Registry: 125 (unchanged — table note). Tracker: 81 topics. Immunology: 18/24.

## Census + fidelity notes (manifest notes)

- pdfimages on p135: ZERO images — pure vector/table page.
- Gap check documented: pdf 132-134 (Hypersensitivity types) is owned by the pilot topic
  hypersensitivity-types [131-134, complete] — no silent gap between E34 (ends 131) and
  E35 (135).
- No FA mnemonic phrases printed on this page; KYP originals authored.
- Boundary: pdf 136 begins E36 b-cell-immunodeficiencies.

No source material stored here.
