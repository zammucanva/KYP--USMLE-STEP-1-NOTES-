# E31 — cytokines · QA Evidence

Topic: **Important Cytokines** (Immunology, 14/24)
Route: `/usmle/cytokines` · Visual: **1 new registry visual** — `cytokine-network-map`
(macrophage panel with fever/sepsis banner, T-cell panel, Th1 IFN-γ panel, Th2 panel with
attenuation banner, sequencing header "acute first, then recruit").

## Machine-measured browser QA (4 passes)

| Pass | Theme (verified pre-capture) | Overflow | Title |
|---|---|---|---|
| desktop 1440×900 light | light ✓ | 0px | ✓ |
| desktop 1440×900 dark | dark ✓ | 0px | ✓ |
| mobile 390×844 light | light ✓ | 0px | ✓ |
| mobile 390×844 dark | dark ✓ | 0px | ✓ |

## Element capture

- `element-cytokine-network-map-{light,dark}.png` — 1102×776 (rendered height =
  690 × 1102/980 scale), stdev 36.72/33.32 (real content)

## VLM paint QA — 1 false-positive round (crop math), final CLEAN ×2

**Round 0:** both themes flagged "bottom Th2 panel truncated at canvas edge."
**Investigation:** the flags were MY CROP ERROR — the crop height (690px) ignored the
rendered/viewBox scale (1102/980 = 1.1245 → 776px), slicing off the bottom of the capture
(the same error class as E28's zoom-2 lesson). **Fix:** re-crop at the scaled height —
v1 light **CLEAN** + v1 dark **CLEAN**. No code change (the SVG itself was never truncated —
the 4-pass browser QA measured 0px overflow on the full page).
**Process rule recorded:** element-crop height MUST be `viewBoxHeight × rendered/viewBox`
(or read directly from the DOM rect, which is now the standard step).

## Gates (this batch)

- Evidence: 41/41 quotes machine-verified (pdf 128 / book 106) after one documented fix
  (the "From Th1 cells"/"From Th2 cells" headings are separated by the Interferon-gamma
  heading in the text layer — split into two quotes).
- Cumulative evidence 2259/2259 EXIT 0 · validate CONTRACT GREEN (2 documented warnings) ·
  audit 77 topics / 0 depth failures · tsc 1 documented baseline.
- Registry: 121 → 122 visuals. Tracker: 77 topics. Immunology: 14/24.

## Census + fidelity notes (manifest notes)

- pdfimages on p128: ZERO images — pure vector/text page.
- Mnemonic boundary (E22/E24/E28/E29/E30 rule): FA's printed mnemonics ("Hot T-bone stEAK",
  "Clean up on aisle 8", "Ain't too proud 2 BEG 4 help", "I have 5 BAEs", "thirtEEn") are in
  manifest evidence for VERIFICATION ONLY — never user-facing; KYP originals replace them.
- KYP-extension boundary: drug names (anti-TNF, anti-IL-1/6/12/23/17/5, calcineurin
  inhibitors, basiliximab) and IL-12/IFN-γ-axis deficiency genetics are labeled extension.
- Boundary: pdf 129 (respiratory burst / IFN) = E32.

No source material stored here.
