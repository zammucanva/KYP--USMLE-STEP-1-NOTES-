# M10 — gram-positive-bacilli · QA Evidence

Topic: **Gram-Positive Bacilli: Clostridia, Corynebacterium, Listeria & the
Branching Filaments** (Microbiology, 10/39 — Clinical Bacteriology)
Route: `/usmle/gram-positive-bacilli` · Visual: **1 new registry visual** —
`gram-pos-bacilli-map` (the SNARE-axis redraw of the printed tetanus-vs-
botulism panels + the five-mechanism rail + the Nocardia-vs-Actinomyces SNAP
axis + the 9-organism roster).

## Machine-measured browser QA (4 passes)

| Pass | Theme (verified pre-capture) | Overflow | Title |
|---|---|---|---|
| desktop 1440×900 light | light ✓ | 0px | ✓ |
| desktop 1440×900 dark | dark ✓ | 0px | ✓ |
| mobile 390×844 light | light ✓ | 0px | ✓ |
| mobile 390×844 dark | dark ✓ | 0px | ✓ |

## Element capture

- `element-gram-pos-bacilli-map-{light,dark}.png` — 1102×1349
  (DOM-measured at x=281 y=5548), stdev 24.30/21.82

## VLM paint QA — CLEAN ×2 FIRST PASS

- Light: CLEAN — no overlaps, no clipping, contrast/readability excellent,
  alignment verified; content check independently described the SNARE axis
  (tetanus retrograde/Renshaw/spastic vs botulinum NMJ/flaccid), the
  five-mechanism rail, the SNAP axis, and the 9-organism roster.
- Dark: CLEAN — same five checks passed; cyan/red headers legible on the
  charcoal background, roster rows flush.
- Transcripts: `vlm-bacilli-map-{light,dark}.txt`; source-page census
  (200-DPI raster VLM read of pdf 158-159 resolving the two-panel SNARE
  diagram layout, the Nocardia-vs-Actinomyces table structure, and the six
  photo positions/markers): `source-census.txt`.

## Design-time lessons applied (zero fixes needed)

- M6's slash-chain lesson: no long unbreakable tokens; all anchor text in
  comma/dot form.
- M1's rail-geometry lesson: all SNARE-panel labels short and pre-fitted to
  their boxes; roster rows carry one 86-char line each per field.
- The `<` characters in the perfringens cards and anchors strip escaped as
  `&lt;` in JSX.

## Evidence set

23/23 quotes verified first run (gen_m10_json.py, 0-based inclusive ranges;
the heading interleave — `Clostridium botulinum` and `Clostridium
perfringens` headings emitted after the SNARE diagram's label stream —
documented and quoted in physical order; `cellto-cell` hyphen-drop and the
source's own `spore germinate` quoted as printed; both `+/−` (U+2212) and
`+/–` (en dash) forms in one spread documented).

## Gates

sync (97 topics) · validate CONTRACT GREEN (2 documented warnings) ·
audit 0 depth failures · evidence 2693/2693 EXIT 0 · tsc 1 baseline error.
