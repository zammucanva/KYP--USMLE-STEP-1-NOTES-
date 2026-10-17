# E30 — complement-disorders · QA Evidence

Topic: **Complement Disorders & Pathway Testing** (Immunology, 13/24)
Route: `/usmle/complement-disorders` · Visual: **1 new registry visual** —
`complement-deficiency-map` (three deficiency cards; CH50/AH50/combined testing panel; full
PNH panel with mechanism chain, two hemolysis routes, labs/triad/treatment).

## Machine-measured browser QA (4 passes)

| Pass | Theme (verified pre-capture) | Overflow | Title |
|---|---|---|---|
| desktop 1440×900 light | light ✓ | 0px | ✓ |
| desktop 1440×900 dark | dark ✓ | 0px | ✓ |
| mobile 390×844 light | light ✓ | 0px | ✓ |
| mobile 390×844 dark | dark ✓ | 0px | ✓ |

## Element capture

- `element-complement-deficiency-map-{light,dark}.png` — 1102×731, stdev 28.52/25.26 (real content)

## VLM paint QA — 1 defect round, FIXED, final CLEAN ×2

**Round 0:** both themes flagged the same real defect — the two branch arrows from the PNH
mechanism chain to the EXTRAVASCULAR/INTRAVASCULAR cards started INSIDE the last chain box
(524,433), crossing its text ("Complement-mediated hemolysis of RBCs").
**Fix 1:** arrow origins moved to the box's right edge (x=584) with explicit arrowheads at
the card edges. → v1 light **CLEAN** + v1 dark **CLEAN**.

## Gates (this batch)

- Evidence: 26/26 quotes machine-verified FIRST PASS (pdf 127 / book 105), including the
  labs quote with the printed 'A ' figure-pointer token verbatim.
- Two first-run contract violations fixed in-script (documented): sv1's implementationType
  "ORIGINAL_KYP_DESCRIPTION" is not in the vocabulary → ORIGINAL_KYP_ADAPTATION with
  kypVisualId; coverageAudit kypOriginals corrected to 2 per the reconcile rule.
- Cumulative evidence 2218/2218 EXIT 0 · validate CONTRACT GREEN (2 documented warnings) ·
  audit 76 topics / 0 depth failures · tsc 1 documented baseline.
- Registry: 120 → 121 visuals. Tracker: 76 topics. Immunology: 13/24.

## Census + fidelity notes (manifest notes)

- pdfimages on p127: ONE content raster — 194×185 cmyk jpeg = the dark-urine clinical
  photograph (figure A). COPYRIGHTED — conveyed as a DESCRIPTION in the registry visual's
  labs card and the note text; never reproduced.
- Mnemonic boundary (E22/E24/E28/E29 rule): FA's "CAT" testing mnemonic and "SLEarly" tag
  are in manifest evidence for VERIFICATION ONLY — never user-facing; KYP originals replace
  them.
- Boundary: pdf 128 (cytokines) = E31.

No source material stored here.
