# E26 — lymphocyte-activation-tolerance · QA Evidence

Topic: **Lymphocyte Activation, Peripheral Tolerance & Anergy** (Immunology, 9/24 — final
"Cellular Components" banner topic)
Route: `/usmle/lymphocyte-activation-tolerance` · Visual: **1 new registry visual** —
`activation-signal-model` (T-cell route + B-cell route two-signal panels + anergy /
peripheral-tolerance strip).

## Machine-measured browser QA (4 passes)

| Pass | Theme (verified pre-capture) | Overflow | Title |
|---|---|---|---|
| desktop 1440×900 light | light ✓ | 0px | ✓ |
| desktop 1440×900 dark | dark ✓ | 0px | ✓ |
| mobile 390×844 light | light ✓ | 0px | ✓ |
| mobile 390×844 dark | dark ✓ | 0px | ✓ |

## Element capture

- `element-activation-signal-model-{light,dark}.png` — 1102×724, stdev 27.80/25.54 (real content)

## VLM paint QA — 1 investigated round, geometry-confirmed fix, final CLEAN ×2

**Round 0:** light **CLEAN** first pass. Dark reported a defect: "dashed teal arrow crosses
the text label 'TCR:CD3 transmembrane/ITAM's signaling'". **Investigation:** that label text
does not exist anywhere in the component (grep = 0 hits for CD3/ITAM) — a targeted VLM re-read
confirmed the arrow label is actually "Th cytokines determine Ig class switching", that the
arrow arcs between boxes, and that "CD3"/"ITAM" appear nowhere in the image (VLM hallucination
on the label text). HOWEVER, independent geometry math showed a REAL proximity risk: the
curve's center dip (y≈324 at x≈723) sat inside the label's vertical span (y≈319–327).
**Fix 1 (belt-and-braces):** curve flattened (dip 324→312) and label moved to y=330 — 11px
clearance below the curve, 10px above the outcome box. → v1 light **CLEAN** + v1 dark **CLEAN**.

All verdicts verbatim in `vlm-*.txt` (including the disproven round-0 dark flag and the
targeted re-check that disproved it).

## Gates (this batch)

- Evidence: 35/35 quotes machine-verified FIRST PASS (pdf 123 / book 101), including all
  diagram vector labels, the activation sequences, tolerance, and anergy prose.
- Cumulative evidence 2071/2071 EXIT 0 · validate CONTRACT GREEN (2 documented warnings) ·
  audit 72 topics / 0 depth failures · tsc 1 documented baseline.
- Registry: 116 → 117 visuals. Tracker: 72 topics. Immunology: 9/24.

## Census + fidelity notes (manifest notes)

- pdf 123 carries only two 1×1 pixel artifacts — the activation diagrams are PURE VECTOR;
  no copyrighted raster artwork exists; the visual is an original KYP teaching diagram.
- KYP-extension boundary (documented): CTLA-4/PD-1 drug content (abatacept, ipilimumab,
  nivolumab) is NOT on this printed page (no CTLA token in the p123 text layer) and appears
  only as clearly-labeled extension material — never as source evidence.
- Boundary: pdf 124 (Antibody structure and function) begins IMMUNE RESPONSES = E27, not
  claimed here.

No source material stored here.
