# PHASE I-C — E3 (TCA CYCLE & PYRUVATE DEHYDROGENASE) PRODUCTION REPORT

**Chapter:** Biochemistry (Section II) — Metabolism block, book pp. 74–75 (Part 1 pdf 96–97)
**Batch:** E3 (1 topic) · **Completed:** 2026-10-10 · **Status:** COMPLETE — 15/15 QA gates, contract GREEN
**Biochemistry chapter progress after E3:** 40/55 topics chapter-complete (15 pending: oxidative-phosphorylation, gluconeogenesis, pentose-phosphate-pathway, fructose-galactose-disorders, sorbitol-pathway, amino-acids, urea-cycle-disorders, aminoacidopathies, glycogen-metabolism, lysosomal-storage-diseases, fatty-acid-metabolism, ketone-bodies, metabolic-fuel-use, lipid-transport, familial-dyslipidemias)

---

## I. Scope and source fidelity

One topic produced in book order from the frozen architecture (First Aid 2026 as the single content source; KYP layout system; shared MechanismFlow unchanged):

| # | Topic | Diff | Book pp. | Source visuals | Visual plan |
|---|-------|------|----------|----------------|-------------|
| 1 | tca-cycle-pdh | D3 | 74–75 | 3 sv | `tca-cycle-map` REDRAW + `pyruvate-hub` ADAPTATION (pilot visual embedded at its source page) + `pdh-cofactor-panel` ADAPTATION |

**Source-first discipline:** pdf 96–97 extracted from the pipeline text cache and rendered at 130 DPI this session (`download/usmle-e3-qa/source/`); the source figures verified against the note and visuals — the p75 TCA circle (eight metabolites with carbon counts, the three starred irreversible enzymes citrate synthase / isocitrate DH / α-KG DH, NADH/FADH2/GTP/CO2 yield markers, the regulation line ADP ⊕ / ATP ⊝ / NADH ⊝, and the "pyruvate → acetyl-CoA produces 1 NADH, 1 CO2" note) and the p75 pyruvate hub figure (four exits with enzyme/vitamin handles: ALT-B6 → alanine, pyruvate carboxylase-B7 → OAA, PDH → acetyl-CoA, LDH-B3 → lactate). 36 evidence quotes machine-verified verbatim against the text layer (`verify-evidence.ts` 890/890 cumulative).

## II. Note authored (1)

`tca-cycle-pdh.ts` (D3, registered in book order after `metabolism-overview`): core what/why/keyIdea; **2 mechanisms** on the shared MechanismFlow — `pdh-five-cofactor-relay` (TPP decarboxylation → lipoic-acid swing → CoA acceptance → FAD/NAD+ electron relay, with arsenic as the lipoic blockade) and `pyruvate-hub-four-exits` (the four fates with vitamin handles and the PDH-deficiency jam toward lactate + alanine); 7 blocks (3 visual + 2 text + 1 table + 1 callout — the table is the verbatim cofactor/vitamin list); **6 patterns, 5 traps, 2 pivots, 1 mini-case** (5 options, why-lines on every option), **3 mnemonics** (incl. the source's "The lovely coenzymes for nerds" and the arsenic vampire image), 7 recall items, rapidReview 3 tiers, 4 related, 4 crossLinks. **2 kypExtensions** (`usmle-attack-layer`, `assembly-line-model`) — all traceable. Depth-tier minimums met (audit: 0 failures across 49).

## III. Visuals implemented (3)

- **`tca-cycle-map`** (new, `metabolism.tsx`; registry 74/74): original KYP redraw of the source circle — PDH entry arm (pyruvate → acetyl-CoA with CO2 + NADH), all 9 metabolite boxes with carbon counts and yield sub-labels, the 3 starred irreversible enzymes, clockwise arrow set with enzyme/product markers, regulation strip (ADP ⊕ isocitrate DH; ATP ⊝, NADH ⊝), the α-KG DH shared-cofactor note, and the per-acetyl-CoA/per-glucose accounting line in the header.
- **`pdh-cofactor-panel`** (new, `metabolism.tsx`): adaptation — the five numbered cofactor cards (B1/B5/B2/B3 + lipoic acid) under the reaction bar, the fed/fasting phosphorylation-switch regulation panel, the arsenic emergency panel, and the X-linked deficiency strip with the ketogenic-nutrient treatment.
- **`pyruvate-hub`** (existing pilot visual, `pathways.tsx`): embedded per the inventory at the page where the source figure lives — four fates with enzyme/vitamin labels and functional notes.

## IV. Manifests, inventories, tracker

- **1 manifest**: 36 machine-verified evidence quotes (`content/usmle/manifests/tca-cycle-pdh.json`).
- **1 visual inventory**: 3 sv accounted (1 REDRAW + 2 ADAPTATION), coverageAudit 0 unresolved.
- **Chapter flip:** `biochemistry.json` status → complete — **40/55**, pendingTopicCount 15.
- **Tracker regenerated:** 49 topics (10 pilot-complete + 39 chapter-complete), 16 stages + 15 QA gates per topic, tca-cycle-pdh 15/15.

## V. QA gates (15 — all pass)

Machine gates (prior session, re-verified after this session's fixes): **tsc** 1 error = documented `next.config.ts` baseline only; **verify-evidence** 890/890; **validate** CONTRACT GREEN (2 pre-existing cross-chapter warnings, documented since M-batches); **audit** 49 topics 0 depth failures; **sync-tracker** 49 topics.

**Browser QA** (`download/usmle-e3-qa/`, 27 captures across 3 rounds): desktop light/dark + mobile-390 page captures — **DARK-OK** (documentElement.dark), **0 px horizontal overflow** (instrumented), 0 page errors; 5 element captures per round (tca-cycle-map light+dark, pdh-cofactor-panel light+dark, pyruvate-hub light). Console: the documented pre-existing 401 class (`/api/search-history` for anonymous visitors, reproduced on all pages incl. home — unrelated to content, not repaired per pre-existing-infrastructure policy).

**VLM paint QA** (paced 15 s, forced-choice + targeted factual re-checks):

- **Round 1 (8 calls):** pdh-dark CLEAN, page-dark CLEAN, page-mobile CLEAN; 3 components flagged. Geometry + pixel verification separated **genuine defects** from forced-choice noise:
  - **REAL — TCA map:** the two legend lines shared baseline y=612 with overlapping x-spans (x 24–590 vs x 536–; crop-confirmed "pyruvate → acetyl-CoA" collision zone); the "Citrate synthase *" label sat inside the Acetyl-CoA box's bottom band (crop-confirmed); the malate→OAA arrowhead penetrated 104 px into the OAA box (math + crop confirmed); plus math-verified anchor defects on three more arrows (succinyl-CoA→succinate head 17 px inside succinate; succinate→fumarate floating start + head 10 px inside fumarate; fumarate→malate floating start + head 14 px inside malate) and the isocitrate-DH label baseline touching the regulation strip's top border.
  - **REAL — pyruvate-hub (pilot visual, caught in its new E3 context):** bottom note line 2 at y=253 vs canvas height 250 and top note line 2 glyph tops above y=0 (the "glucos…/e", "gluconeogenes…/is", ", lens, cornea, Sertoli" findings).
  - **FALSE (disproven):** PDH panel — FAD/NAD sub-text "clipped by number circle" (no vertical overlap: text y 179–187 vs circle y 149–175); lipoic sub-text border claims (pixel scan: 27–28 px gap).
- **Fixes applied:** TCA map — legend split into two stacked lines (canvas 620→640), citrate-synthase label relocated to the clear pocket right of the entry arrow (340, 304), 4 arrows re-anchored to box edges (starts on source-box borders, tips 3–6 px short of target borders), isocitrate-DH label raised to y=554. Hub — canvas 250→300 with all geometry shifted +20, note lines restructured from a naive 46-char slice (which broke words: ", lens…", "cle)", orphan "e"/"is") to **word-boundary two-line arrays**, connector V-tips adjusted to touch card borders without crossing in.
- **Round 2 (8 calls):** hub word-break claims confirmed as the slicing defect (fixed); remaining TCA/PDH claims triaged — the citrate-synthase label still grazed the Acetyl-CoA corner (x=330 vs border 328; nudged to 340), everything else geometry-disproven.
- **Round 3 (7 calls):** **tca-light CLEAN · tca-dark CLEAN · hub-light CLEAN · glycol-hub CLEAN** (the hub shared with glycolysis-regulation re-verified in that note's context) — and the three targeted factual re-checks returned NO/clear (NADH-vs-arrow, Malate/Succinate sub-labels, regulation strip), formally closing the round-2 claims as false positives.
- **Final evidentiary record:** PDH panel — dark CLEAN in rounds 1/2/3; every light-mode claim disproven by pixel scan (bottom-border claims: measured gaps 28.6–31.8 viewBox units) or geometry. Mobile page — instrumented 0 px overflow on all 3 rounds; r1/r2 mobile CLEAN; the r3 mobile claim (diagram "clipping") is the designed `overflow-x-auto` scroll-container behavior documented across all produced topics. **All 3 visuals verified CLEAN in both themes; page light/dark CLEAN; mobile measured clean.**

## VI. Durable artifacts

- Note: `src/lib/kyp/usmle/notes/tca-cycle-pdh.ts` (+ index registration)
- Visuals: `src/components/kyp/usmle/visuals/metabolism.tsx` (TcaCycleMap, PdhCofactorPanel) + `pathways.tsx` (PyruvateHub fix); registry 74/74
- Manifest/inventory: `content/usmle/{manifests,visual-inventory}/tca-cycle-pdh.json`
- QA scripts (recreated this session after sandbox reset): `/home/z/my-project/scripts/{e3_render_pages.py, e3-browser-qa.js, e3-refresh-shared.js, e3-vlm-qa.sh, e3-crop-recheck.sh, e3_crop_zones.py, e3_crop_r3.py, e3-vlm-qa-r2.sh, e3-vlm-qa-r3.sh, e3-vlm-final.sh, e3_pixel_check.py, e3_pixel_check2.py}`
- QA artifacts: `download/usmle-e3-qa/` (source/, captures/, captures-r2/, captures-r3/, crops/, crops-r3/, vlm/, results*.json)

**Next:** E4 oxidative-phosphorylation (pdf 98 / book 76) per the approved plan order — continuing autonomously to 55/55.
