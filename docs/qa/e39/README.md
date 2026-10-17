# E39 — transplant-rejection · QA Evidence

Topic: **Transplant Rejection & Graft-Versus-Host Disease** (Immunology, 22/24)
Route: `/usmle/transplant-rejection` · Visual: **1 new registry visual** —
`rejection-timeline-map` (timeline bar; hyperacute/acute/chronic cards; GVHD panel;
direction/hypersensitivity/biopsy-descriptions strip).

## Machine-measured browser QA (4 passes)

| Pass | Theme (verified pre-capture) | Overflow | Title |
|---|---|---|---|
| desktop 1440×900 light | light ✓ | 0px | ✓ |
| desktop 1440×900 dark | dark ✓ | 0px | ✓ |
| mobile 390×844 light | light ✓ | 0px | ✓ |
| mobile 390×844 dark | dark ✓ | 0px | ✓ |

## Element capture

- `element-rejection-timeline-map-{light,dark}.png` — 1102×776 (DOM-measured), stdev 25.62/23.56

## VLM paint QA — CLEAN ×2 FIRST PASS

- light: **CLEAN** · dark: **CLEAN** (zero defect rounds)

## Gates (this batch)

- Evidence: 11/11 quotes machine-verified (pdf 139 / book 117) after one documented fix
  (the chronic-rejection organ examples carry ▘ U+2598 bullet glyphs — included in the
  quote, the same glyph class as E27's Fab/Fc bullets).
- Cumulative evidence 2429/2429 EXIT 0 · validate CONTRACT GREEN (2 documented warnings) ·
  audit 85 topics / 0 depth failures · tsc 1 documented baseline.
- Registry: 128 → 129 visuals. Tracker: 85 topics. Immunology: 22/24.

## Census + fidelity notes (manifest notes)

- p139's THREE content rasters (the A/B/C histopathology micrographs: glomerular thrombosis,
  interstitial lymphocytic infiltrate, graft arteriosclerosis) are COPYRIGHTED — described
  in the visual's biopsy-figures card and the note's callout, never reproduced (4-sv
  inventory with described-in-text entries).
- No FA mnemonic phrases printed on this page; KYP originals authored.
- Boundary: pdf 140-141 (Immununosuppressants) = E40; pdf 141 (recombinant cytokines) = E41.

No source material stored here.
