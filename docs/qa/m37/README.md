# M37 — antiparasitic-antiviral QA evidence (Microbiology 37/39)

Source: pdf 218-219 / book 196-197 (Antihelminthic therapy; oseltamivir/zanamivir,
baloxavir, remdesivir; acyclovir/famciclovir/valacyclovir, ganciclovir, foscarnet,
cidofovir; disinfection and sterilization; antimicrobials to avoid in pregnancy).

## Census
- pdfimages: ZERO rasters on both pages — both pages are PURE TEXT (every card
  prints in the text layer). No source figure exists to redraw → the registry
  visual `antiviral-target-map` is an ORIGINAL KYP SYNTHESIS (the M33/M34
  no-raster convention).
- VLM census (render-p218/p219.png → vlm-census-p218/p219.txt): the disinfection
  table's scrambled text layer reassembles as Chlorine^a = "Oxidizes and denatures
  proteins", Ethylene oxide^a = "Alkylating agent", Hydrogen peroxide^a = "Free
  radical oxidation" (Autoclave^a also sporicidal; footnote "a Sporicidal.");
  the pregnancy table prints 8 rows + the source's own mnemonic
  "Safe children take really good care." (mapping its red-text rows:
  Sulfonamides, Clarithromycin, Tetracyclines, Ribavirin, Griseofulvin,
  Chloramphenicol); NO margin mnemonics exist on either page (the "bendy worms"
  gloss is inline text, carried only in the verbatim tables per the E38 precedent).

## Evidence
- gen_m37_json.py: 34/34 quotes verified FIRST RUN (raw line ranges, normalized
  containment against the pinned pages). Gates: evidence 3551/3551 EXIT 0 ·
  CONTRACT GREEN (2 known warnings) · audit 124 topics 0 depth failures ·
  tsc 1 baseline error (next.config.ts, documented baseline).

## Browser QA (m37-browser-qa.sh)
- 4 passes (desktop 1440x900 + mobile 390x844 × light + dark): overflow 0px ×4;
  title correct ×4 ("Antiparasitic & Non-HIV Antiviral Agents — USMLE 2026
  Microbiology · Know Your Pill"). Full captures: full-{desktop,mobile}-{light,dark}.png.
- getBBox paint audit: 139 texts · 0 overlaps · 0 outside viewBox (FIRST PASS,
  no fix rounds).
- Element crops (from full-page desktop captures, element-rect.json): 1110×1020
  light + dark.

## VLM paint QA (vlm-paint.txt)
- LIGHT: CLEAN — all four panels fully rendered, no overlap/spill, glyphs correct,
  readable.
- DARK: CLEAN — same.

## Verdict
M37 complete: D2 note (2 mechanisms, 4 verbatim tables, 3 patterns, 3 traps,
2 pivots, 5-option miniCase, 4 KYP mnemonics, 5 recall items, 4 related,
4 crossLinks) + original registry visual + 34-quote manifest + 5 sv inventory +
chapter flip 37/39 + tracker 124. Zero QA fix rounds — first-pass clean.
