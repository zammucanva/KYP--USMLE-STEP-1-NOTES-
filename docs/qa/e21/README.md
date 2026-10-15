# E21 — mhc-complex · QA Evidence

Topic: **MHC I vs MHC II and Bare Lymphocyte Syndrome** (Immunology, 4/24)
Route: `/usmle/mhc-complex` · Visual: `mhc-structure-comparison` (registry, original KYP redraw of the source's two molecular diagrams)
Rebuilt batch (session 2026-10-16) — the original E21 was destroyed un-pushed with 4030b09 in the 7th wipe.

## Machine-measured browser QA (24/24 pass)

| Pass | Theme (verified pre-capture) | Overflow | Page errors | Console | SVG in DOM |
|---|---|---|---|---|---|
| desktop 1440×900 light | light ✓ | 0px | 0 | clean | 1+ |
| desktop 1440×900 dark | dark ✓ | 0px | 0 | clean | 1+ |
| mobile 390×844 light | light ✓ | 0px | 0 | clean | 1+ |
| mobile 390×844 dark | dark ✓ | 0px | 0 | clean | 1+ |

Element capture: full-page + PIL crop at machine-measured doc-rect (281,3837,1102,697);
light stdev 28.64 / dark 26.14 → real content.

## VLM paint QA — CLEAN ×2 FIRST PASS (this rebuild)

Light: "none detected... all text elements have sufficient padding; CD8/CD4 circles clearly
separated; short-chain label neatly positioned; curved lines arc cleanly without intersecting
text" — Verdict CLEAN. Dark: "no instances of dark-on-dark text; all labels well-spaced; no
truncation" — CLEAN. (The lost original batch had required 2 label/tail fixes; this rebuild's
placement benefited from those documented lessons — measured clearances from the start.)

## Fidelity notes (manifest notes)

- Census: pdf 120 carries 3 visual elements — the seven-row comparison table (sv1 → note-block
  verbatim) and two vector molecular structure diagrams (sv2/sv3 → redrawn into the single
  comparative registry visual). No real rasters (only two 1×1 artifacts).
- 48/48 quotes machine-verified, exactly reproducing the lost batch's count — including the
  transcription-fidelity points: the source's FUNCTION row word is "cytosolic" (not
  cytoplasmic); the figure label prints "β2−Microglobulin" with U+2212 while the table row
  uses a hyphen; the BLS block prints ↓/→ arrows.
- sourceRef format: "First Aid 2026, Part 1 pp. 98 (…)" — single-page pp. format as the
  contract requires.

VLM outputs verbatim in `vlm-v0-{light,dark}.txt`. No source material stored here.
