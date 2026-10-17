# E41 — recombinant-cytokines · QA Evidence (FINAL IMMUNOLOGY TOPIC)

Topic: **Recombinant Cytokines & Clinical Uses** (Immunology, **24/24 — CHAPTER COMPLETE**)
Route: `/usmle/recombinant-cytokines` · Visual: **none by inventory design** (requiresVisual
false — table note, E22/E35 pattern; the verbatim cytokine table IS the visual element).

## Machine-measured browser QA (4 passes)

| Pass | Theme (verified pre-capture) | Overflow | Title |
|---|---|---|---|
| desktop 1440×900 light | light ✓ | 0px | ✓ |
| desktop 1440×900 dark | dark ✓ | 0px | ✓ |
| mobile 390×844 light | light ✓ | 0px | ✓ |
| mobile 390×844 dark | dark ✓ | 0px | ✓ |

## Element capture

- `element-cytokine-table-{light,dark}.png` — 1150×275 at the element's TRUE rect
  (x=257 — HTML tables offset differently from the SVG visuals), stdev 27.37/26.54

## VLM paint QA — 1 false-positive round (crop offset), final CLEAN ×2

**Round 0:** light flagged "first column clipped ('ythropoietin')" — investigation showed the
HTML table's rect is x=257 w=1150 (not the SVG-standard x=281), so my crop had sliced 24px off
the table's left edge; dark passed. **Fix:** re-crop at the measured rect — v1 light **CLEAN**
+ v1 dark **CLEAN** (explicitly verifying the first column's left edge). No code change (the
rendered page was never clipped — the 4-pass browser QA had measured 0px overflow throughout).
**Process rule recorded:** element-crop x-offset must come from the DOM rect (SVG visuals
render at x=281; HTML tables at their own geometry).

## Gates (this batch)

- Evidence: 11/11 quotes machine-verified FIRST PASS (pdf 141 / book 119).
- Cumulative evidence 2483/2483 EXIT 0 · validate CONTRACT GREEN (2 documented warnings) ·
  audit 87 topics / 0 depth failures · tsc 1 documented baseline.
- Registry: 130 (unchanged — table note). Tracker: 87 topics. **Immunology: 24/24 —
  extractionStatus=verified, completedAt set.**

## Census + fidelity notes (manifest notes)

- No content rasters in this topic's section (p141's two rasters are E37's micrographs,
  pinned there).
- KYP-extension labels: capillary-leak syndrome (aldesleukin), eltrombopag hepatotoxicity,
  additional EPO/ITP indications.
- productionStatus = **chapter-complete** (the final Immunology topic).

No source material stored here.
