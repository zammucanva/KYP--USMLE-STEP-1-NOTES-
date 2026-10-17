# E38 — immunodeficiency-infection-patterns · QA Evidence

Topic: **Infections in Immunodeficiency: The Bug-Pattern Matrix** (Immunology, 21/24)
Route: `/usmle/immunodeficiency-infection-patterns` · Visual: **1 new registry visual** —
`bug-pattern-matrix` (3 pathogen rows × 4 deficiency columns + printed-rule/column-logic strip).

## Machine-measured browser QA (4 passes)

| Pass | Theme (verified pre-capture) | Overflow | Title |
|---|---|---|---|
| desktop 1440×900 light | light ✓ | 0px | ✓ |
| desktop 1440×900 dark | dark ✓ | 0px | ✓ |
| mobile 390×844 light | light ✓ | 0px | ✓ |
| mobile 390×844 dark | dark ✓ | 0px | ✓ |

## Element capture

- `element-bug-pattern-matrix-{light,dark}.png` — 1102×742 (DOM-measured), stdev 26.56/25.07

## VLM paint QA — CLEAN ×2 FIRST PASS

- light: **CLEAN** · dark: **CLEAN** (zero defect rounds)

## Gates (this batch)

- Evidence: 16/16 quotes machine-verified (pdf 138 / book 116) after documented corrections:
  the table headers split (↓COMPLEMENT sits at the page bottom in the text layer), and the
  granulocyte-mnemonic/complement/organism cells interleaved as one physical block. Cell
  contents were resolved by a 200-DPI VLM read BEFORE quoting (the pdftotext interleave
  scrambles column assignments).
- Cumulative evidence 2418/2418 EXIT 0 · validate CONTRACT GREEN (2 documented warnings) ·
  audit 84 topics / 0 depth failures · tsc 1 documented baseline.
- Registry: 127 → 128 visuals. Tracker: 84 topics. Immunology: 21/24.

## Census + fidelity notes (manifest notes)

- pdfimages on p138: ZERO images — pure vector/table page.
- Mnemonic handling (reconciled precedent): FA's two printed bacteria-row phrases
  ("Please SHINE my SKiS"; "Some Bacteria Produce No Serious granules") are quoted in the
  manifest AND carried verbatim in the note's verbatim TABLE block (source-fidelity table
  content, per E20/E21/E22/E28 precedent), while the registry VISUAL omits them and the
  mnemonics field carries KYP originals — the established table-block vs. visual distinction.
- Boundary: pdf 139 (transplant rejection) = E39.

No source material stored here.
