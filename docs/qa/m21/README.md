# M21 — cestodes-trematodes · QA Evidence

Topic: **Cestodes & Trematodes: Tapeworms and Flukes** (Microbiology, 21/39 —
PARASITOLOGY COMPLETE)
Route: `/usmle/cestodes-trematodes` · Visual: **1 new registry visual** —
`cestode-trematode-map` (the CESTODES + TREMATODES grids, the ECTOPARASITES
rows, and the 9-row Parasite-hints anchors strip).

## Machine-measured browser QA (4 passes)

| Pass | Theme | Overflow | Title |
|---|---|---|---|
| desktop 1440×900 light | light ✓ | 0px | ✓ |
| desktop 1440×900 dark | dark ✓ | 0px | ✓ |
| mobile 390×844 light | light ✓ | 0px | ✓ |
| mobile 390×844 dark | dark ✓ | 0px | ✓ |

## Element capture

- `element-cestode-trematode-map-{light,dark}.png` — 1102×1068 (DOM at
  1440×900: x=281 y=5233), stdev 24.45/21.51 (real content).

## VLM paint QA — CLEAN ×2 (one invalid round retried)

- Round 1 light + dark: INVALID OUTPUTS (the VLM returned HTML mockups with
  hallucinated strings — invalid-QA retries, not defect rounds; documented).
- Round 2 (with the anti-code guard): light **CLEAN**, dark **CLEAN**.
- Dual+enhanced in-browser audit: **0/0/0**.

## Source resolution

- The Ectoparasites + Parasite-hints blocks print on book 158 under M21's
  page ownership (the M9/M15 rule); the Clonorchis heading emits at the page
  end; the lice heading emits mid-page among the hints directory.

## Gates

- evidence **25/25** first pass (pdf 179-180 / books 157-158) · CONTRACT
  GREEN · audit 108 topics / 0 depth failures · tsc 1 baseline · tracker
  synced (108).
