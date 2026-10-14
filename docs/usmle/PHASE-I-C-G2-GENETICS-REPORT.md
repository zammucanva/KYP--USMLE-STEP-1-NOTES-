# USMLE Phase I-C · G2 Batch Report — Biochemistry: Genetics II

**Batch:** G2 (sixth Phase I-C production batch) — Modes of Inheritance · Cystic Fibrosis Genetics · Muscular Dystrophies · Trinucleotide Repeat Expansion Diseases
**Source:** First Aid for the USMLE Step 1 2026 — Part 1, pdf 79–82 (book 57–60)
**Status:** ALL FOUR TOPICS PASS — 15/15 QA gates each · tracker synchronized · contract GREEN
**Date:** 2026-10-09

---

## 1. Topics completed

| Topic | Difficulty | Note file | Status |
|---|---|---|---|
| modes-of-inheritance | D3 | `src/lib/kyp/usmle/notes/modes-of-inheritance.ts` | chapter-complete, 15/15 gates |
| cystic-fibrosis | D2 | `src/lib/kyp/usmle/notes/cystic-fibrosis.ts` | chapter-complete, 15/15 gates |
| muscular-dystrophies | D2 | `src/lib/kyp/usmle/notes/muscular-dystrophies.ts` | chapter-complete, 15/15 gates |
| trinucleotide-repeat-diseases | D2 | `src/lib/kyp/usmle/notes/trinucleotide-repeat-diseases.ts` | chapter-complete, 15/15 gates |

All five FA subsections formally claimed by these topics (Modes of inheritance · Cystic fibrosis · X-linked recessive diseases · Muscular dystrophies · Trinucleotide repeat expansion diseases) are fully covered, plus the same-page content their pinned ranges carry: the AD/AR disease lists (p80, via the inventory correction below), mitochondrial diseases and Rett syndrome under modes-of-inheritance (p82), lyonization + the XLR list under muscular-dystrophies (p81), and Fragile X syndrome under trinucleotide-repeat-diseases (p82) — no silent source omission. Audit: 0 depth failures across all 36 topics. Notes registered in `notes/index.ts` in book order after the G1 block.

**Inventory correction (documented, not silent):** the Phase I-C extraction left the p80 subsections "Autosomal dominant diseases" and "Autosomal recessive diseases" (the two disease lists) unclaimed — the chapter note promises every FA subsection claimed exactly once. Corrected at production time: modes-of-inheritance's sourcePages extended to pdf [79, 80, 82] (book "57, 58, 60") and its faSubsections updated, so the lists are covered in that note's table with pinned p80 evidence. Recorded in `docs/usmle/G2-SOURCE-CHECKPOINT.md` before authoring.

## 2. Source coverage

- **115 evidence quotes pinned and machine-verified** against the supplied PDF text layer (modes-of-inheritance 41 · cystic-fibrosis 25 · muscular-dystrophies 32 · trinucleotide-repeat-diseases 19) — corpus-wide `verify-evidence.ts`: **580/580 verified, 0 failed**. Special-character quotes handled verbatim: the U+2044 fraction slash in "2⁄3 of cases have", the U+2212 minus sign in "ATP-gated Cl− channel", the U+00B0 in "1° ovarian insufficiency", ΔF508, and the en dash in "multiple sclerosis–like illness".
- Source pages rendered at 130 DPI and VLM-inspected BEFORE visual authoring (pdf 79 five-panel pedigree figure, pdf 80 CFTR/ENaC four-state epithelial diagram, pdf 81 Gowers four-stage illustration + H&E image A, pdf 82 — VLM scan confirmed text + table only, no photographs). The VLM pedigree/figure findings drove the visual plan directly (findings preserved in `download/usmle-g2-qa/vlm/`). Dual pdf/book mapping on every topic, evidence item, and visual record; sourceRefs in the production format "First Aid 2026, Part 1 pp. X–Y (keywords)".

## 3. Visual coverage (per contract §3.4)

| Topic | FA figures identified | Accounted | Registry redraws | Adaptations | Unresolved | Omitted |
|---|---|---|---|---|---|---|
| modes-of-inheritance | 1 (five-panel pedigree figure) | 1 | 1 | 0 | 0 | 0 |
| cystic-fibrosis | 1 (CFTR/ENaC airway-vs-sweat-duct diagram) | 1 | 1 | 0 | 0 | 0 |
| muscular-dystrophies | 2 (Gowers sequence · H&E image A) | 2 | 2 | 0 | 0 | 0 |
| trinucleotide-repeat-diseases | 1 (the four-repeat table) | 1 | 0 | 1 | 0 | 0 |
| **G2 total** | **5** | **5** | **4** | **1** | **0** | **0** |

All source figures are COPYRIGHTED_NO_REPUBLISH; every one is an **original KYP visual** (4 redraws + 1 adaptation in `genetics.tsx`, extending the G1 component file). Photograph-class figures (the Gowers illustration and the H&E histology image) are drawn as **schematic pattern-preserving originals** — the four-stage sequence and the fibers-plus-pale-patches pattern with red arrows and the bracket, without reproducing the photographs.

**Chapter-cumulative after G2:** 47 textbook visuals accounted (M1: 5, M2: 11, M3: 14, M4: 8, G1: 4, G2: 5), 0 unresolved — matching the approved inventory plan exactly. Registry now 58/58 keys (all resolvable; no "Visual unavailable").

## 4. Visuals implemented (registry, painted and VLM-verified)

| Registry visualId | What it preserves from the source figure |
|---|---|
| `inheritance-pedigrees` | The five-panel figure: five 3-generation pedigrees (AD vertical; AR horizontal with unaffected parents; XLR with the carrier-dot mother, no male-to-male; XLD with the affected-father pattern; mitochondrial mother-only with affected-father-transmits-nothing) with the Punnett squares (Aa×aa, Aa×Aa, carrier-mother XX×XY, affected-father X·Y×XX), the per-mode rule text, and the four-symbol legend. |
| `cftr-enac-diagram` | The four-state epithelial diagram: Sweat duct (Normal: CFTR reabsorbs Cl⁻ + ENaC reclaims Na⁺; CF: ΔF508 channel dashed+slashed, Cl⁻ blocked → salty-sweat/pilocarpine readout) and Airway (Normal: Cl⁻/H₂O secreted → hydrated mucus; CF: no secretion + ENaC-driven Na⁺/H₂O reabsorption → dehydrated mucus + the more-negative transepithelial potential difference), with lumen/cell/interstitium labels. |
| `gowers-sequence` | The four-stage climb as a schematic figure sequence: hands-and-knees → buttocks raised → hands-on-thighs ("Pushing on leg to stand") → standing with exaggerated lumbar lordosis; calf pseudohypertrophy, lordosis, and thigh atrophy labeled; the "classically Duchenne, also other dystrophies and inflammatory myopathies (eg, polymyositis)" note. |
| `dmd-histology-pattern` | Image A's diagnostic pattern: polygonal fibers with peripheral nuclei, three arrowed pale fibrofatty-replacement patches, the muscle-fibers bracket, the boxed A — annotated with pseudohypertrophy, myonecrosis, ↑CK/aldolase, and the deleted-dystrophin line. |
| `anticipation-expansion-panel` | The four-row table (Huntington (CAG)n AD "Caudate has ↓ACh and GABA" · myotonic (CTG)n AD "Cataracts, Toupee, Gonadal atrophy" · fragile X (CGG)n XD "Chin, Giant Gonads" · Friedreich (GAA)n AR "Ataxic GAAit") + the anticipation ladder (severity ↑ / onset ↓) + the FMR1 threshold rows (premutation 50–200 vs full mutation >200) + the Fragile EGG oogenesis note. |

Visual placement rule honored: every visual sits beside the concept it teaches. No galleries; no unresolved educational visuals.

## 5. Mechanisms (shared KYP MechanismFlow — not replaced)

| Topic | Flows (8 total) |
|---|---|
| modes-of-inheritance | pedigree-decision-tree (male-to-male → affected-father → mother-only three-question sort) · heteroplasmy-threshold (mtDNA mix → high-energy tissues → variable expression; MELAS/MERRF nodes) |
| cystic-fibrosis | cf-mucus-cascade (Phe508 → misfold → mis-traffic → absent → ↓Cl⁻/H₂O/HCO₃⁻ → ENaC compensation → thick mucus) · cftr-channel-logic (potentiators hold the gate vs correctors fix the fold) |
| muscular-dystrophies | dystrophin-frameshift-logic (frameshift/nonsense → truncated/absent vs in-frame → partially functional; 2⁄3 large deletions node) · gowers-proximal-ascension (pelvic girdle first → fibrofatty replacement → the climb) |
| trinucleotide-repeat-diseases | anticipation-expansion-engine (expansion in gametogenesis → threshold ladder; Fragile EGG) · fragile-x-methylation-cascade (CGG expansion → hypermethylation of cytosines → ↓FMR1 expression) |

Render verified on-screen in both themes via browser screenshots.

## 6. kypExtensions (traceable, manifest-recorded)

- **usmle-attack-layer** (all four topics) — KYP-original exam-strategy synthesis (patterns/traps/pivots/mini-case with answer autopsy).
- **pedigree-three-questions-layer** (modes-of-inheritance) — the decision-tree reading order and the two absolute father rules.
- **tissue-split-frame** (cystic-fibrosis) — the one-channel-two-directions frame (airway secretes vs duct reabsorbs).
- **reading-frame-layer** (muscular-dystrophies) — the frame-not-size discriminator and the largest-gene mutational-surface logic.
- **threshold-ladder-layer** (trinucleotide-repeat-diseases) — the repeat-count-as-phenotype ladder and the anchor-first-by-triplet sort.
- 8 extensions total, every one carrying id/summary/origin/rationale/location; none presented as First Aid content.

## 7. QA results — failures found and fixed

| # | Finding | Fix | Verified |
|---|---|---|---|
| 1 | **Six JSX/TS authoring defects** (extra `},` in the modes rule-card table; `width="378}` / `height="56}` typos; raw `>` in JSX text; `y={y = 102}` invalid expression; two malformed `x="544} "` placeholder lines) | Targeted edits per defect | tsc clean (baseline only) |
| 2 | **XLR pedigree stray symbol** — a duplicate square drawn under the carrier daughter; plus the Gen II son was drawn unaffected | Duplicate removed; Gen II son made affected (matches the source panel) | Element capture + VLM CLEAN |
| 3 | **VLM round 1: 4 of 13 verdicts ISSUES** — cftr-light (Cl⁻ label vs CFTR channel; ✕ marks obscuring the CFTR (ΔF508) name; bottom line truncation), gowers light+dark (stage-3 text block rendered BELOW its box onto the bottom strip; stage-4 legs + "Thigh atrophy" label clipped at the box edge), dmd-dark (floating "fibrofatty replacement" labels overlapping the fibers; arrow label near the A box) | cftr: channel/ENaC names moved BELOW the shapes (never colliding with ✕ or arrows), arrows shifted clear, bottom strip split to two lines; gowers: stage-3 figure raised 40px with text inside the box, stage-4 figure shifted right+up with the label block in the clear left column; dmd: floating patch labels replaced by one caption line + clean arrowheads, A box moved top-left with the field caption shifted right | Re-captured; **all three visuals VLM CLEAN in both themes** (cftr took one extra pass: the ENaC-label-vs-arrow collision was real and fixed by moving the Na⁺/H₂O arrows to the clear right side) |
| 4 | **dmd-histology element capture failed** (aria-label prefix mismatch: "Duchenne muscle…" vs the actual "Duchenne muscular dystrophy muscle histology…") | Selector corrected; re-captured | 10/10 element captures |
| 5 | **Dev-server QA infrastructure** — orphaned `next dev` processes from earlier runs hold Next 16's project-wide dev lock and block new servers; a corrupted generated `.next/dev/types/validator.ts` produced 8 phantom tsc errors; a /tmp-located script could not resolve playwright | All QA scripts run from `/home/z/my-project/scripts/` with execSync pkill + dev-lock cleanup in `finally`; corrupted generated types deleted (source unaffected) | Gates re-verified green |

Final QA matrix (evidence in `download/usmle-g2-qa/` — 22 captures: 12 page screenshots + 10 element-level visual captures + source-page renders + results.json + server logs):

- Desktop 1440 + mobile 390 × light × dark × 4 topics: dark applied on all dark captures; mobile horizontal overflow **0 px × 4**; application console/page errors **0** (HMR dev-mode noise excluded at collection)
- **VLM element-level: 10/10 VERDICT CLEAN** (5 visuals × light/dark); **page-level: dark 2/2 + mobile 1/1 CLEAN** (13/13 paced calls, no 429s; the 4 source-page extraction artifacts in the same folder are pre-authoring inspections, not QA verdicts)
- Machine gates: `validate.ts` **CONTRACT GREEN (0 errors, 2 pre-existing pilot warnings)** · `verify-evidence.ts` **580/580** · `audit.ts` **0 depth failures across 36 topics** · tsc source-clean (1 documented pre-existing next.config error)

## 8. Tracker status

Regenerated only by `sync-tracker.ts`: **36 topics produced** (10 pilot-complete + **26 chapter-complete** [M1 4 + M2 6 + M3 5 + M4 4 + G1 3 + G2 4]), notes ⇄ manifests ⇄ tracker 1:1. Biochemistry chapter: 55 registered · 27 produced · 28 remaining · qaStatus pass. No git operations.

## 9. Unresolved / flagged items (none block G2)

1. **next.config.ts redirects type widening** — the single documented pre-existing tsc error (unrelated; not repaired per directive).
2. **Element-capture viewport note** — tall visuals are partially framed in single-viewport element captures (capture artifact; full-page captures show them completely).
3. **Chapter progress note** — Biochemistry is now 27/55 topics produced (49%). Next batch per the approved plan: **G3 (autosomal-trisomies → chromosomal-disorders, pdf 83–85 / book 61–63)**, closing the Genetics group, then N1–N2 (nutrition), E1–E5 (enzymes/metabolism) through 55/55.
