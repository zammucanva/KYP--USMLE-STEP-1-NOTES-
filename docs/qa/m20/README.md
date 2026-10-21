# M20 — helminths-nematodes · QA Evidence

Topic: **Nematodes: The Roundworms** (Microbiology, 20/39)
Route: `/usmle/helminths-nematodes` · Visual: **1 new registry visual** —
`nematode-route-map` (the Intestinal [7 organisms] + Tissue [3 organisms]
panels with the cross-linked route-rails anchors strip).

## Machine-measured browser QA (4 passes)

| Pass | Theme | Overflow | Title |
|---|---|---|---|
| desktop 1440×900 light | light ✓ | 0px | ✓ |
| desktop 1440×900 dark | dark ✓ | 0px | ✓ |
| mobile 390×844 light | light ✓ | 0px | ✓ |
| mobile 390×844 dark | dark ✓ | 0px | ✓ |

## Element capture

- `element-nematode-route-map-{light,dark}.png` — 1102×987 (DOM at 1440×900:
  x=281 y=4529), stdev 22.89/19.27 (real content).

## VLM paint QA — CLEAN ×2 (one invalid round retried)

- Round 1 light: **CLEAN** (explicit TREATMENT-column check passed).
- Round 1 dark: INVALID OUTPUT (the VLM returned an HTML mockup instead of a
  QA report — an invalid-QA retry, not a defect round; documented). Round 2
  dark (with an anti-code guard in the prompt): **CLEAN**.
- Dual+enhanced in-browser audit: **0/0/0** (viewBox / panel-edge / row-right).

## Rename note

The chapter topicId is `helminths-nematodes` (the inventory's id) — the note,
manifest, and inventory were renamed from `nematodes` accordingly (the first
manifest run failed on the flip; caught and fixed before commit).

## Gates

- evidence **18/18** first pass (pdf 178 / book 156) · CONTRACT GREEN · audit
  108 topics / 0 depth failures · tsc 1 baseline · tracker synced (108).
