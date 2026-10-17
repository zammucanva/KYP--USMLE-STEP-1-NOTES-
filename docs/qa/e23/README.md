# E23 — nk-b-t-cell-functions · QA Evidence

Topic: **Major Functions of NK, B and T Cells** (Immunology, 6/24)
Route: `/usmle/nk-b-t-cell-functions` · Visuals: **2 new registry visuals** —
`nk-kill-model` (the kill decision: activating signal + missing self + ADCC strip) and
`b-t-division-of-labor` (B vs T function panels + exam sorter strip).

## Machine-measured browser QA (4 passes, 24/24 checks)

| Pass | Theme (verified pre-capture) | Overflow | Title |
|---|---|---|---|
| desktop 1440×900 light | light ✓ | 0px | ✓ |
| desktop 1440×900 dark | dark ✓ | 0px | ✓ |
| mobile 390×844 light | light ✓ | 0px | ✓ |
| mobile 390×844 dark | dark ✓ | 0px | ✓ |

Full-page captures: `full-*.png` (desktop 1440×13335, mobile 390×22332).

## Element captures (text-anchored doc-coords + PIL crop from full-page)

- `element-nk-kill-model-{light,dark}.png` — 1102×729, stdev 25.35/22.63 (real content)
- `element-b-t-division-of-labor-{light,dark}.png` — 1102×697, stdev 25.27/23.80 (real content)
- Doc-coords measured in-browser at viewport 1440; y-offsets verified identical in light and dark.

## VLM paint QA — 2 defect rounds, both FIXED, final CLEAN ×4

**Round 0 (initial):**
- nk-kill-model **light**: DEFECTS — "activating signal ✓" label overlapped the TARGET CELL
  panel edge and the activating arrow crossed the label text. (Dark passed.)
- b-t-division-of-labor **light**: DEFECTS — "helps B cells make antibodies" label collided
  with the "CD4+ — the helper" header; the dashed arrow crossed the label. (Dark passed.)

**Fix 1 (nk-kill-model):** label moved up + right (x 316→336, y 170/179 → 157/166), arrow
rerouted lower (y 178-183) with explicit arrowhead; MHC I label relocated beside the MHC I
molecule (y 204/213 → 244/253) so it no longer annotates the second stress-ligand circle.
→ v1 light **CLEAN**.

**Fix 2 (b-t-division-of-labor):** the cross-panel annotation was moved out of the
header-adjacent band (y 129 grazed the "CD4+ — the helper" text top) into the empty inter-row
band (y 174–206) as a dashed elbow arrow (drop from CD4+ row at x 640 → horizontal at y 190 →
arrowhead into the B panel), label above the line at y 182. Geometry pre-verified against the
row pitch (row-1 sub-labels end y 174; row-2 headers top y 208).
→ v2 light **CLEAN**.

**Final state:** nk-kill-model light v1 CLEAN + dark CLEAN; b-t-division light v2 CLEAN +
dark CLEAN. All four verdicts verbatim in `vlm-*.txt`.

## Gates (this batch)

- Evidence: 19/19 quotes machine-verified FIRST PASS (pdf 121 / book 99), incl. the
  `IFN-γ \x8e→ macrophage` text-layer quirk (0x8e stripped by norm; documented in manifest).
- Cumulative evidence 1984/1984 EXIT 0 · validate CONTRACT GREEN (2 documented cross-chapter
  warnings only) · audit 69 topics / 0 depth failures · tsc 1 documented baseline error
  (next.config.ts, pre-existing; no new errors from this batch).
- Registry: 111 → 113 visuals. Tracker: 69 topics. Immunology: 6/24.

## Census + fidelity notes (manifest notes)

- pdfimages: **ZERO rasters on pdf 121** — both subsections are prose; the B/T function
  roster is the page's only structured visual element (sv1 → note-block verbatim table).
- Both registry visuals are ORIGINAL KYP teaching diagrams (no source artwork exists).
- Boundary: the HLA subtypes table on the same printed page belongs to E22 hla-subtypes
  (not re-claimed); pdf 122 (T-cell differentiation) belongs to E24 t-cell-development.

No source material stored here.
