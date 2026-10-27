# M39 — hcv-therapy QA evidence (Microbiology 39/39 — CHAPTER COMPLETE)

Source: pdf 222 / book 200 (Hepatitis C therapy — the NS5A, NS5B, NS3/4A,
and ribavirin cards; the HCV replication-cycle figure).

## Census
- p222: PURE TEXT (pdfimages: 0 rasters) — the replication cycle prints as
  VECTOR LINE ART with all labels in the text layer. VLM census confirmed the
  hepatocyte schematic (nucleus, ER, Golgi apparatus, ribosome, membranous web
  derived from ER; the virion with its lipoprotein; numbered arrows) — NO
  photographs. Drug placements VLM-verified: NS3/4A (glecaprevir, grazoprevir)
  at TRANSLATION; NS5B (sofosbuvir) at REPLICATION on the membranous web; NS5A
  at ASSEMBLY; ribavirin at the IMP→GMP→GTP strip (inhibition at IMP
  dehydrogenase).
- The drug rosters print TWICE (the table's DRUG column and the figure's drug
  boxes) — documented. Text quirks: the banner typo; 'N u cle us' split spacing
  (raw 93); the mechanism/toxicity text prints before the rosters (the M38
  interleaving pattern); the footer splits around the figure labels.

## Evidence
- gen_m39_json.py: 18/18 quotes verified FIRST RUN. Gates after fixes: evidence
  3596/3596 EXIT 0 · CONTRACT GREEN (2 known warnings) · audit 126 topics 0
  depth failures · tsc 1 baseline error.

## Fixes (2 documented)
1. sourceRef format: "p. 200" → "pp. 200–200" (the M31 pp.-range rule).
2. Depth: recall 4 < 5 — a 5th recall item added (the figure-placements walk).
   (A transient syntax error during the patch was repaired in the same round.)

## Browser QA (m39-browser-qa.sh)
- 4 passes (desktop+mobile, light+dark): overflow 0px x4; title correct x4.
- getBBox paint audit: 107 texts · 0 overlaps · 0 outside viewBox — re-run
  after the fix round (the literal \u2212 escape in two replication-box lines
  replaced with the real − character; VLM specifically verified the − renders).
- Element crops: 1110x975 light + dark (element-rect.json).

## VLM paint QA (vlm-paint.txt)
- LIGHT: CLEAN (symbols ⊣ ↔ → − all proper). DARK: CLEAN (same).

## Verdict
M39 complete: D2 note (2 mechanisms, 2 verbatim tables, 3 patterns, 3 traps,
2 pivots, 5-option miniCase, 4 KYP mnemonics, 5 recall items, 4 related,
4 crossLinks) + original registry redraw of the replication-cycle figure +
18-quote manifest + 3 sv inventory + chapter flip 39/39 + extractionStatus
verified + completedAt set + tracker 126. 1 real-defect fix round (the literal
escape), then clean.

MICROBIOLOGY CHAPTER: 39/39 COMPLETE.
