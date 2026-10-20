# M6 — virulence-mechanisms · QA Evidence

Topic: **Virulence Mechanisms & Antimicrobial Resistance Overview**
(Microbiology, 6/39)
Route: `/usmle/virulence-mechanisms` · Visual: **1 new registry visual** —
`virulence-resistance-map` (evasion arsenal panel + resistance geometry panel
with the bacterial-cell schematic; redraws BOTH printed diagrams).

## Machine-measured browser QA (4 passes)

| Pass | Theme (verified pre-capture) | Overflow | Title |
|---|---|---|---|
| desktop 1440×900 light | light ✓ | 0px | ✓ |
| desktop 1440×900 dark | dark ✓ | 0px | ✓ |
| mobile 390×844 light | light ✓ | 0px | ✓ |
| mobile 390×844 dark | dark ✓ | 0px | ✓ |

## REAL DEFECT found and fixed (mobile overflow)

- Round 1: mobile light AND dark showed **overflow: 19px** (scrollWidth 409 vs
  390) — the only page in the M series to fail a pass. Root cause traced
  through the DOM chain (body → main → section → max-w container → space-y-10
  → callout): the clinical callout contained a 44-character slash-chain token
  ('resistant-penicillin/cephalosporin/sulfonamide/fluoroquinolone') that
  browsers do not break, producing a 344px unbreakable line in a 292px box.
  **FIXED**: the sentence rewritten with the penicillinase-RESISTANT list in
  parenthetical comma form. Round 2: all 4 passes 0px.

## Element capture

- `element-virulence-resistance-map-{light,dark}.png` — 1102×900
  (DOM-measured at x=281 y=4406), stdev 27.99/24.25

## VLM paint QA — CLEAN ×2 (after the fix)

- light: CLEAN · dark: CLEAN — both first pass on the fixed composition.
  A geometry bug also fixed at design time (left-panel summary text
  overflowed the panel edge into the anchors strip — compressed to 2 lines
  inside the panel).

## Gates (this batch)

- Evidence: 17/17 quotes verified (pdf 149 / book 127) first run. Documented
  quirks: the source's OWN printed typo 'Completment-mediated phagocytosis'
  (quoted as printed; the redraw spells it correctly); the 'Cell wall'
  anatomy label emitted as scrambled fragments ('Ce l lw a ll' — quoted as
  emitted); this page's chapter banner emits the ▶ bullet as private-use
  U+F07D with lowercase small-caps; the two penicillin lists (SENSITIVE on
  the cleavage list / RESISTANT on the target-modification list) each quoted
  in physical position.
- Census: p149 is a PURE VECTOR page (no rasters — no printed photos). TWO
  printed diagrams, both redrawn in the one registry visual.
- validate: CONTRACT GREEN · audit 93/0 · evidence 2588/2588 · tsc 1 baseline.
- No FA mnemonics printed on this page (none to reproduce).
