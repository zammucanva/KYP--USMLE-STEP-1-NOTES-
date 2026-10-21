# M17 — opportunistic-fungi · QA Evidence

Topic: **Opportunistic Fungi: Aspergillus, Cryptococcus, Candida, Mucor**
(Microbiology, 17/39 — MYCOLOGY BANNER COMPLETE)
Route: `/usmle/opportunistic-fungi` · Visual: **1 new registry visual** —
`opportunistic-fungi-panel` (the 2×2 organism-card grid + the morphology
anchors strip).

## Machine-measured browser QA (4 passes)

| Pass | Theme (verified pre-capture) | Overflow | Title |
|---|---|---|---|
| desktop 1440×900 light | light ✓ | 0px | ✓ |
| desktop 1440×900 dark | dark ✓ | 0px | ✓ |
| mobile 390×844 light | light ✓ | 0px | ✓ |
| mobile 390×844 dark | dark ✓ | 0px | ✓ |

## Element capture

- `element-opportunistic-fungi-panel-{light,dark}.png` — 1102×478 (DOM at
  1440×900: x=281 y=5014), stdev 25.41/23.37 (real content).

## VLM paint QA — CLEAN first pass ×2

- Round 1 light: **PASS/CLEAN** ("clean, well-structured, and free of rendering
  errors; all text legible; alignment professional").
- Round 1 dark: **PASS/CLEAN** (the VLM's own note: footer contrast lower but
  "does not constitute a failure" — the same token pair measured across the
  M-series: 14.7-16.7:1 in dark).
- Dual in-browser audit (getBBox viewBox sweep + card graze sweep): **0/0**.

## Source resolution

- 9 displayed photo panels (A-I) vs pdfimages 5 XObjects — grouping
  discrepancy documented in the census; all described-in-text only.
- The E figure marker emits at line 73, AFTER the printed footer (71) —
  late-emission quirk documented.

## Gates

- evidence **15/15** first pass (pdf 172 / book 150) · CONTRACT GREEN (after
  the sourceRef pp-format fix) · audit 104 topics / 0 depth failures · tsc 1
  documented baseline error · tracker synced (104 topics).
