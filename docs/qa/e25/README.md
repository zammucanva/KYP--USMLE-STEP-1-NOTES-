# E25 — cytotoxic-regulatory-t-cells · QA Evidence

Topic: **Effector T Cells: Cytotoxic, Regulatory & the Macrophage Interface** (Immunology, 8/24)
Route: `/usmle/cytotoxic-regulatory-t-cells` · Visuals: **2 new registry visuals** —
`ctl-kill-cycle` (CTL/target synapse + preformed granule payload + target-spectrum rail +
CTL-vs-NK guidance strip) and `treg-suppression-model` (marker panel + suppression arrows +
IL-10/TGF-β secretion + IPEX strip).

## Machine-measured browser QA (4 passes)

| Pass | Theme (verified pre-capture) | Overflow | Title |
|---|---|---|---|
| desktop 1440×900 light | light ✓ | 0px | ✓ |
| desktop 1440×900 dark | dark ✓ | 0px | ✓ |
| mobile 390×844 light | light ✓ | 0px | ✓ |
| mobile 390×844 dark | dark ✓ | 0px | ✓ |

(Dev server restarted before QA per the E24 process note — generateStaticParams cache.)

## Element captures (text-anchored doc-coords + PIL crop)

- `element-ctl-kill-cycle-{light,dark}.png` — 1102×630, stdev 24.65/21.71 (real content)
- `element-treg-suppression-model-{light,dark}.png` — 1102×630, stdev 27.65/23.66 (real content)

## VLM paint QA — CLEAN ×4 FIRST PASS

- ctl-kill-cycle light: **CLEAN** · ctl-kill-cycle dark: **CLEAN**
- treg-suppression-model light: **CLEAN** · treg-suppression-model dark: **CLEAN**

Zero defect rounds — the geometry pre-checks (panel-edge clearances, arrow bands) from the
E23/E24 lessons were applied at authoring time.

## Gates (this batch)

- Evidence: 15/15 quotes machine-verified FIRST PASS (pdf 122 / book 100).
- Cumulative evidence 2036/2036 EXIT 0 · validate CONTRACT GREEN (2 documented warnings) ·
  audit 71 topics / 0 depth failures · tsc 1 documented baseline.
- Registry: 114 → 116 visuals. Tracker: 71 topics. Immunology: 8/24.

## Census + fidelity notes (manifest notes)

- This topic's three sections are prose; the printed page's rasters (thymus illustration,
  cell icon) belong to E24's Differentiation diagram and are NOT part of this scope.
- Both registry visuals are ORIGINAL KYP teaching diagrams (no source artwork exists).
- Boundary: Differentiation of T cells + selection prose on the same page = E24 (not re-claimed).
- The macrophage-lymphocyte interaction is mechanism 2 + callout (three-lane bidirectional
  loop), per the inventory's two visual hints.

No source material stored here.
