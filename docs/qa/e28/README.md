# E28 — immunoglobulin-isotypes · QA Evidence

Topic: **Immunoglobulin Isotypes & Antigen Memory** (Immunology, 11/24)
Route: `/usmle/immunoglobulin-isotypes` · Visual: **1 new registry visual** —
`isotype-comparison-table` (five-column grid with drawn monomer/dimer/pentamer schematics,
timing/abundance, complement/effects, signature roles, disease associations, plus
affinity-vs-avidity and TI/TD cards).

## Machine-measured browser QA (4 passes)

| Pass | Theme (verified pre-capture) | Overflow | Title |
|---|---|---|---|
| desktop 1440×900 light | light ✓ | 0px | ✓ |
| desktop 1440×900 dark | dark ✓ | 0px | ✓ |
| mobile 390×844 light | light ✓ | 0px | ✓ |
| mobile 390×844 dark | dark ✓ | 0px | ✓ |

## Element capture

- `element-isotype-comparison-table-{light,dark}.png` — 1102×742, stdev 22.81/20.75 (real content)

## VLM paint QA — dark CLEAN; light flag investigated and DISPROVEN

- **Dark: CLEAN** first pass.
- **Light v0:** flagged "IgM structure cell text truncated at right edge ('avio' instead of
  'avidity')".
- **Investigation (3 zoom rounds, all saved):** zoom 1 landed on the wrong cell (IgG) —
  transcription there was complete; zoom 2 hit the IgM cell but was accidentally cropped
  mid-text by the zoom boundary itself (scale error 1102/980 in crop math — a QA-tooling
  mistake, not a render defect); zoom 3 (corrected crop, full IgM cell at 3×) transcribed
  ALL five lines completely — "monomer on / B cell; pentamer / + J chain when /
  secreted – avid / binding" — and confirmed: "No words are truncated or obscured."
- **Verdict: light defect was a VLM misread** (the rendered text is "secreted – avid
  binding"; the model expected "avidity"). Disproven by exact transcription at 3× zoom.
  No code change required.

## Gates (this batch)

- Evidence: 38/38 quotes machine-verified FIRST PASS (pdf 125 / book 103), including all
  five isotype profiles, affinity/avidity, and the TI/TD antigen text.
- Cumulative evidence 2146/2146 EXIT 0 · validate CONTRACT GREEN (2 documented warnings) ·
  audit 74 topics / 0 depth failures · tsc 1 documented baseline.
- Registry: 118 → 119 visuals. Tracker: 74 topics. Immunology: 11/24.

## Census + fidelity notes (manifest notes)

- pdf 125 carries only a 1×1 pixel artifact — pure vector page; structure icons conveyed as
  drawn schematics inside the one original KYP grid.
- **Mnemonic boundary (E22/E24 rule):** the page's FA mnemonic phrases ("IgMom and IgDad…",
  "IgG Greets the Growing fetus", "warm weather is Good!") are quoted in the manifest
  evidence for VERIFICATION ONLY — never reproduced in user-facing note content; KYP
  originals replace them.
- Boundary: pdf 124 = E27; pdf 126 (complement) = E29.

No source material stored here.
