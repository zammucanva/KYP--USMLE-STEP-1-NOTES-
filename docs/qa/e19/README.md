# E19 — lymphoid-structures · QA Evidence

Topic: **Lymphoid Structures: Lymph Node, Spleen & Thymus** (Immunology, 2/24)
Route: `/usmle/lymphoid-structures` · Visuals: `lymph-node-map`, `lymphatic-drainage-map`, `spleen-thymus-map` (registry, original KYP redraws)
Rebuilt batch (session 2026-10-16) — the original E19 was destroyed un-pushed with 4c22047 in the 7th environment wipe.

## Machine-measured browser QA (24/24 pass)

| Pass | Theme state (html.dark verified pre-capture) | Horizontal overflow | Page errors | Console | SVGs in DOM |
|---|---|---|---|---|---|
| desktop 1440×900 light | light ✓ | 0px | 0 | clean | 3+ |
| desktop 1440×900 dark | dark ✓ | 0px | 0 | clean | 3+ |
| mobile 390×844 light | light ✓ | 0px | 0 | clean | 3+ |
| mobile 390×844 dark | dark ✓ | 0px | 0 | clean | 3+ |

Theme set through the app's own mechanism (`localStorage.theme` + reload), verified via
`document.documentElement.classList` before every capture.

## Element captures

Full-page screenshot per theme, then PIL crop at machine-measured document-coordinate rects
of the three registry SVGs (`281,4128,1102,720` / `281,5170,1102,742` / `281,7363,1102,742`):

- light crops stdev 27.43 / 27.04 / 31.55 → real content
- dark crops stdev 25.91 / 24.47 / 28.70 → real content

## VLM paint QA — 2 fix rounds, final CLEAN ×3 (+dark)

**Round 1 found REAL defects (fixed):**
- v0 (lymph node): HEV label overlapped its own vessel line → relocated below-right with a
  leader; EBV callout text overflowed its 232px box and the canvas edge → callout helper
  rewritten to multi-line; footer reading-order line exceeded the canvas → split into 3 lines;
  1° follicle sublabels low-contrast → foreground color + size bump.
- v1 (drainage): supraclavicular (Virchow) label collided with the shoulder outline → moved to
  clear space at (60,176); duct arrows ambiguous → "drains into" labels added.
- v2 (spleen/thymus): PALS label crossed the central artery → moved above the organ with a
  leader; marginal-zone text crossed the dashed boundary → moved to the top with a leader;
  thymus cortex/medulla labels cramped at shape edges → relocated outside with leaders;
  Hassall rings enlarged; germinal-center text bumped.

**Round 2 (v2 residual, fixed):** "Capsule + trabecula" straddled the organ's boundary curve →
moved to (52,184) with a leader; follicle label grazed the dashed marginal curve → moved right
of the follicle; marginal-zone leader crossed the "central artery" label → label moved left of
the artery origin with a mini-leader.

**Final verdicts: CLEAN ×3 (light) + CLEAN (v2 dark, contrast explicitly passed).**

**Documented false positives (disproven):** the round-1 v1 report claims a grey "retroauricular"
label — no such string exists anywhere in the SVG source; the v2 report cites footer text "CXR
pdf 18 / book 30" — the actual footer reads "pdf 118 / book 96". Both are VLM misreadings,
verified against the source coordinates and the rendered crops.

VLM outputs preserved verbatim in `vlm-v*.txt` (all rounds, including the defect reports).

## Census + fidelity notes (documented in manifest notes)

- p116 carries 2 printed elements (histology micrograph + schematic) → consolidated as sv1;
  p117 carries the body map + 16-cluster table → sv2/sv3; p118 carries the spleen diagram +
  neonatal CXR → consolidated as sv4. Histology/radiograph conveyed schematically — never
  reproduced (COPYRIGHTED_NO_REPUBLISH).
- Table row assignments (mediastinal vs hilar pathology; the two merged pathology cells)
  verified by three independent high-resolution VLM reads of a 400-DPI crop, agreeing on the
  printed 2026 layout.
- Evidence: 122/122 quotes machine-verified (p116: 31, p117: 60, p118: 31), including the
  fi/fl ligature code points and the printed 1°/1º variants.

No source material (PDF pages/crops) is stored here — site screenshots only.
