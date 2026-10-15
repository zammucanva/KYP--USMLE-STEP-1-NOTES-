# E18 — familial-dyslipidemias · QA Evidence

Topic: **Abetalipoproteinemia & Familial Dyslipidemias** (Biochemistry, final topic — 55/55)
Route: `/usmle/familial-dyslipidemias` · Visual: `lipid-laden-enterocytes` (registry, original KYP redraw)
Rebuilt batch (session 2026-10-16) — the prior session's identical batch was lost un-pushed in an environment wipe.

## Machine-measured browser QA (24/24 pass)

| Pass | Theme state (html.dark verified pre-capture) | Horizontal overflow | Page errors | Console |
|---|---|---|---|---|
| desktop 1440×900 light | light ✓ | 0px | 0 | clean |
| desktop 1440×900 dark | dark ✓ | 0px | 0 | clean |
| mobile 390×844 light | light ✓ | 0px | 0 | clean |
| mobile 390×844 dark | dark ✓ | 0px | 0 | clean |

Theme is set through the app's own mechanism (`localStorage.theme` + reload), verified via
`document.documentElement.classList` before every capture. SVG visual content confirmed present
in the DOM on every pass.

## Element capture method

Direct SVG element-crop screenshots render blank (known browser defect — proven via stdev 0.0 in a
prior session). Therefore: full-page screenshot per theme, then PIL crop at the machine-measured
document-coordinates rect of the first registry SVG (`281,4222,1102,630`).

- `element-crop-light.png` — crop stdev 28.05 → real content
- `element-crop-dark.png` — crop stdev 26.94 → real content
- `page-full-light.png` / `page-full-dark.png` — source full-page captures (1440×12842)
- `page-{desktop,mobile}-{light,dark}.png` — the four viewport passes (top-of-page)
- `element-rect-{light,dark}.txt` — machine-measured rects

## VLM paint QA — CLEAN ×2 (independent content verification)

- **light**: all three expected elements present (villus with lipid-distended enterocytes; normal
  biconcave RBC vs spiked acanthocyte; disease summary strip with AR/MTP/absent
  particles/infant presentation/vitamin E manifestations/treatment). No overlaps, no clipping,
  no collisions, nothing past the canvas edge. Verdict: CLEAN.
- **dark**: same elements present; contrast explicitly verified (light text + bright accents on
  deep background, accessibility pass). Verdict: CLEAN.

VLM outputs preserved verbatim in `vlm-light.txt` / `vlm-dark.txt`.

## Census + seed corrections (documented in manifest notes)

- `pdfimages -list` on pdf p114: exactly one raster (185×164 cmyk jpeg) = the histology
  micrograph ("arrow in A"); all other visual elements on the page are text/table.
- p114 carries 3 accounted visual elements; the third (Lipoprotein functions prose section) is
  owned by `lipid-transport` sv5 and deliberately not re-claimed.
- Seed correction: seed sv2 claimed "type I–V" — the printed table has types I–IV only
  (NO type V row). Corrected in inventory + chapter productionRationale.

No source material (PDF pages/crops) is stored here — site screenshots only.
