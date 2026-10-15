# E20 — innate-vs-adaptive-immunity · QA Evidence

Topic: **Innate vs Adaptive Immunity** (Immunology, 3/24)
Route: `/usmle/innate-vs-adaptive-immunity` · Visual: `innate-vs-adaptive-arms` (registry, original KYP diagram — no source artwork exists to redraw)
Rebuilt batch (session 2026-10-16) — the original E20 was destroyed un-pushed with a7a7d3c in the 7th wipe.

## Machine-measured browser QA (24/24 pass)

| Pass | Theme (verified pre-capture) | Overflow | Page errors | Console | SVG in DOM |
|---|---|---|---|---|---|
| desktop 1440×900 light | light ✓ | 0px | 0 | clean | 1+ |
| desktop 1440×900 dark | dark ✓ | 0px | 0 | clean | 1+ |
| mobile 390×844 light | light ✓ | 0px | 0 | clean | 1+ |
| mobile 390×844 dark | dark ✓ | 0px | 0 | clean | 1+ |

Element capture: full-page + PIL crop at the machine-measured doc-rect (281,2840,1102,630);
light stdev 26.01 / dark 22.22 → real content.

## VLM paint QA — 1 defect round, final CLEAN ×2

Round 1 found ONE real defect: the "primary: develops over long periods" label sat directly on
its dashed curve (and the innate label was tight against the red line). Fixed by moving the
primary label below the curve's rising portion with a mini-leader (360,494 → curve at 400,478)
and lifting the innate label to y=466. Re-check: **CLEAN (light)** — "labels remain clear of
their respective lines and curves... leader line provides an unambiguous link". **CLEAN (dark)**
— contrast passes ("no critical visibility or layout errors"); minor non-defect notes (orange
tone preference, axis-label proximity) recorded, no collision.

## Fidelity notes (manifest notes)

- pdfimages clean on pdf 119: no printed artwork; the five-row comparison table is the page's
  only visual element → sv1, note-block verbatim. The registry visual is an additional original
  KYP teaching diagram, not a figure replacement.
- 25/25 quotes machine-verified, including the circled-minus U+229D ("gram ⊝ bacteria") and
  U+2192 arrows as printed.
- Validator catch during production: the note initially shipped 2 vignette patterns (< the
  3-pattern bar) — the DAMP/sterile-inflammation pattern was added and the gates re-run GREEN.

VLM outputs verbatim in `vlm-v0-{light,dark}.txt`. No source material stored here.
