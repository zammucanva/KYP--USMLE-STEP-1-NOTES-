# M31 antimicrobial-overview — QA record (31/39)

Source: pdf 205 / book 183 — the mechanisms-of-action chart + the first β-lactam card (Penicillin G, V).
Census: 4 tiny index rasters (88-92px at 314ppi — the chart's marker glyphs) + 9 standalone dash marker
lines in the text layer; all redrawn as vector marks in the registry visual.

## Production
- Visual: `antimicrobial-target-map` (AntimicrobialTargetMap, micro.tsx; registry 139→140). 111 texts,
  budget audit 0 overruns first pass. Canvas 980x1052.
- Note: D2, 2 mechanisms (target-layer-logic, wall-two-stage-logic), exam callout, verbatim Penicillin G, V
  card in the note's table block (page ownership p205; M32 continues the directory), 3 patterns / 3 traps /
  2 pivots / TMP-SMX selective-toxicity miniCase with three true-but-irrelevant distractors, 3 KYP mnemonics,
  5 recall items, 4 crossLinks (crossLinks required by page.tsx — discovered via 500).
- Manifest: gen_m31_json.py — 40/40 quotes verified FIRST RUN (raw-order p205; the fl ligature set carried
  in quotes; the double-printed chapter banner lines 4/8; the scattered folate labels PABA 41 / DHF 63 /
  THF 75; the split rim labels Cell m embrane / Cell wal l; the 50S roster inside the cross-linking block;
  the 30S roster after the Monobactams).
- Inventory: sv1 the chart (SUMMARY_FIGURE, ORIGINAL_KYP_REDRAW) + sv2 the drug card (note-block);
  coverageAudit 2/2 complete.

## Gates
- validate: CONTRACT GREEN (0 errors, 2 documented warnings) · audit 118 topics / 0 depth failures ·
  tsc: 1 documented baseline (next.config.ts).

## QA fix rounds (3 real defects)
1. 500 on route — note missing `crossLinks` (page.tsx reads note.crossLinks.length); added 4 crossLinks.
2. Mobile 390px: 83px overflow — unbreakable slash-rosters in core.keyIdea (M22-class defect); rewritten
   comma-form per the source's own style: Ciprofloxacin/Ofloxacin/... → comma lists (7 tokens across
   keyIdea + mechanism label + trap clue + rapidReview).
3. Mobile 390px: 9px residual — rapidReview s30 slash-rosters (azithromycin/..., gentamicin/... — the
   53-char 371px line); comma-form rewrite. → 0px all passes.

## Final QA
- Browser 4-pass (1440x900 + 390x844, light + dark): overflow 0px x4, titles verified.
- getBBox sweep: 112 texts, overlaps 0, overruns 0, edges 0.
- Element crops 1110x1191 (light + dark) at DOM rect x=281 y=4511 (true HTML geometry).
- VLM paint QA (glm-4.6v, guard anti-code): CLEAN x2 — light and dark, first pass after fixes.
