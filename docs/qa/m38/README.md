# M38 — hiv-therapy QA evidence (Microbiology 38/39)

Source: pdf 220-221 / book 198-199 (HIV therapy — the ART intro block; the
NRTI/NNRTI/integrase/protease/entry cards; the HIV lifecycle figure; the
prophylaxis table).

## Census
- p220: PURE TEXT (pdfimages: 0 rasters). The three-column drug table prints with
  columns interleaved (mechanism/adverse text before the drug rosters); VLM census
  verified the five row-cards and that the source's own mnemonics print INSIDE the
  MECHANISM cells ('Have you dined (vudine) with my nuclear (nucleosides) family?';
  'Navir (never) tease a protease.') and inside the entry-inhibitor cells
  ('Enfuvirtide inhibits fusion.' / 'Maraviroc inhibits docking.').
- p221: the LIFECYCLE FIGURE = line art on TWO DECORATIVE 1x1+smask color washes
  (171x162 + 231x357 jpeg smasks, 150ppi — the M35 pattern). VLM census confirmed
  a schematic (the CD4+ T CELL ellipse, stylized virions, wavy nucleic-acid lines,
  stage arrows, four colored drug-group boxes) — NO photographs. Stage labels and
  drug rosters print in the text layer.
- VLM quirks documented: the p220 census misread '3 drugs' as '5 drugs' and dropped
  the ↓ arrow in the ZDV pregnancy line — the TEXT LAYER is authoritative (M23
  convention). Figure-vs-table roster differences documented (cabotegravir,
  raltegravir, fosamprenavir, indinavir, saquinavir, nevirapine figure-only).

## Evidence
- gen_m38_json.py: 27/27 quotes verified FIRST RUN. Gates: evidence 3578/3578
  EXIT 0 · CONTRACT GREEN (2 known warnings) · audit 125 topics 0 depth failures ·
  tsc 1 baseline error (next.config.ts).

## Browser QA (m38-browser-qa.sh)
- 4 passes (desktop+mobile, light+dark): overflow 0px x4; title correct x4.
- getBBox paint audit: 91 texts · 0 overlaps · 0 outside viewBox (FIRST PASS).
- Element crops: 1110x1042 light + dark (element-rect.json).

## VLM paint QA (vlm-paint.txt)
- LIGHT: CLEAN. DARK: CLEAN. (All panels rendered, no overlap/spill, ⊣ correct.)

## Verdict
M38 complete: D2 note (2 mechanisms, 3 verbatim tables, 3 patterns, 3 traps,
2 pivots, 5-option miniCase, 4 KYP mnemonics, 5 recall items, 4 related,
4 crossLinks) + original registry redraw of the lifecycle figure + 27-quote
manifest + 4 sv inventory + chapter flip 38/39 + tracker 125. Zero QA fix
rounds — first-pass clean.
