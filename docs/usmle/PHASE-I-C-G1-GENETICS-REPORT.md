# USMLE Phase I-C · G1 Batch Report — Biochemistry: Genetics I

**Batch:** G1 (fifth Phase I-C production batch) — Gene Expression Modifications · Genetic Terminology & Population Genetics · Disorders of Imprinting
**Source:** First Aid for the USMLE Step 1 2026 — Part 1, pdf 76–78 (book 54–56)
**Status:** ALL THREE TOPICS PASS — 15/15 QA gates each · tracker synchronized · contract GREEN
**Date:** 2026-10-09

---

## 1. Topics completed

| Topic | Difficulty | Note file | Status |
|---|---|---|---|
| gene-expression-modifications | D2 | `src/lib/kyp/usmle/notes/gene-expression-modifications.ts` | chapter-complete, 15/15 gates |
| genetic-terms-popgen | D2 | `src/lib/kyp/usmle/notes/genetic-terms-popgen.ts` | chapter-complete, 15/15 gates |
| imprinting-disorders | D3 | `src/lib/kyp/usmle/notes/imprinting-disorders.ts` | chapter-complete, 15/15 gates |

All five FA subsections formally claimed by these topics (Gene expression modifications · Genetic terms · Genetic terms (continued) · Population genetics · Hardy-Weinberg principle) are fully covered, plus the same-page content their pinned ranges carry: RNA interference under gene-expression-modifications, the McCune-Albright mosaicism photograph and the dominant-negative/linkage/UPD term rows under genetic-terms-popgen, and the Prader-Willi vs Angelman table + imprinting figure on the shared page 78 — the table accounted as genetic-terms sv3 (note-block compare) and the figure as imprinting-disorders sv1 (registry redraw), with each note cross-referencing the other (no silent source omission). Audit: 0 depth failures across all 32 topics. Notes registered in `notes/index.ts` in book order after the M4 block.

## 2. Source coverage

- **79 evidence quotes pinned and machine-verified** against the supplied PDF text layer (gene-expression-modifications 16 · genetic-terms-popgen 46 · imprinting-disorders 17) — corpus-wide `verify-evidence.ts`: **465/465 verified, 0 failed**. Special-character quotes handled verbatim per the established rules: the em dashes in "Random insertion—constitutive expression", the × in the penetrance formula, the ≈ in "p ≈ 0.017", the superscript-as-plain-digits "p2 + 2pq + q2 = 1" exactly as the text layer prints it, and the source's own capitalization hook "HeterodIsomy/isodIsomy" (case-insensitive by norm(), preserved in the note for learners).
- Source pages were previously rendered at 130 DPI and VLM-inspected in the checkpoint session (pdf 76 transgenic/RNAi table, pdf 77 McCune-Albright café-au-lait photo + terms-continued + population-genetics tables, pdf 78 HWE square + PWS/AS table + imprinting figure); the three figure findings drove the visual plan. Dual pdf/book mapping on every topic, evidence item, and visual record (book = pdf − 22); sourceRefs in the production format "First Aid 2026, Part 1 pp. X–Y (keywords)".

## 3. Visual coverage (per contract §3.4)

| Topic | FA figures identified | Accounted | Registry redraws | Adaptations | Note-block | Unresolved | Omitted |
|---|---|---|---|---|---|---|---|
| gene-expression-modifications | 0 (table topic) | 0 | 0 | 0 | 0 | 0 | 0 |
| genetic-terms-popgen | 3 (HWE square · café-au-lait photo · PWS-vs-AS table) | 3 | 1 | 1 | 1 | 0 | 0 |
| imprinting-disorders | 1 (chromosome-15 imprinting figure) | 1 | 1 | 0 | 0 | 0 | 0 |
| **G1 total** | **4** | **4** | **2** | **1** | **1** | **0** | **0** |

All source figures are COPYRIGHTED_NO_REPUBLISH; every one is an **original KYP visual** (2 redraws + 1 adaptation in the new component file `genetics.tsx`) or a **note-block implementation** (the PWS-vs-AS table realized as the note's compare block — source-reference alone never counts as implementation). The café-au-lait photograph is drawn as a pattern-preserving schematic (torso outline, unilateral ragged-edged macules respecting the midline, McCune-Albright-vs-NF1 border contrast, somatic-vs-germline definition panel) rather than a photograph reproduction.

**Chapter-cumulative after G1:** 42 textbook visuals accounted (M1: 5, M2: 11, M3: 14, M4: 8, G1: 4), 0 unresolved — matching the approved inventory plan exactly. Registry remains 53/53 keys (all resolvable; no "Visual unavailable").

## 4. Visuals implemented (registry, painted and VLM-verified)

| Registry visualId | What it preserves from the source figure |
|---|---|
| `hwe-punnett-square` | The source's 2×2 allele-combination square — column/row gametes A (p) and a (q), cells AA (p²), Aa (pq), Aa (pq), aa (q²) — with p + q = 1 and p² + 2pq + q² = 1 beneath; the equations panel exactly as printed (homozygosity/homozygosity/heterozygosity-as-carrier-frequency, X-linked males = q / females = q², rare-AR p ≈ 1); the worked CF example (1/3200 → q ≈ 0.017 → p ≈ 0.982 → 2pq ≈ 0.035); and the five-assumptions strip. |
| `cafe-au-lait-mosaic-pattern` | The mosaicism photo's diagnostic pattern — large light-brown macules with RAGGED edges, strictly UNILATERAL respecting the midline — plus the border-contrast chip (ragged McCune-Albright vs smooth NF1), the somatic-vs-germline (gonadal) mosaicism definition panel with the suspect-gonadal-when-parents-unaffected rule, and the GNAS lethal-pre-fertilization/survivable-as-mosaic line. |
| `imprinting-chromosome15` | The imprinting figure's full structure — P (paternal) / M (maternal) chromosome columns; Normal group with exactly one active (green) copy per locus; Prader-Willi group with the paternal deletion symbol against the already-silenced maternal copy ("NO active copy left"); Angelman group with maternal UBE3A deleted against silenced paternal UBE3A; the source's legend (P = Paternal, M = Maternal, active gene, silenced gene (imprinting), gene deletion/mutation); and the source's own POP / MAMAS mnemonic lines plus the 25%/5% UPD shares. |

Visual placement rule honored: every visual sits beside the concept it teaches (café-au-lait after the mosaicism terms, HWE square inside the population-genetics flow, imprinting figure directly under the methylation concept). No galleries; no unresolved educational visuals.

## 5. Mechanisms (shared KYP MechanismFlow — not replaced)

| Topic | Flows (6 total) |
|---|---|
| gene-expression-modifications | transgenic-strategies (random vs targeted fork, constitutive vs conditional outputs) · gene-silencing-rna (miRNA loose-pairing vs siRNA complete-pairing fork) |
| genetic-terms-popgen | drift-selection-bottleneck (selection vs drift fork; bottleneck → founder subtype; "chance, not selection" inhibit edge) · hwe-allele-math (prevalence → q → p → 2pq with the rare-disease and X-linked shortcut nodes) |
| imprinting-disorders | imprinting-parent-of-origin (methylation silencing → one active copy; the three failure modes as inhibit nodes) · pws-vs-as-logic (deletion-direction fork to the two syndromes, UPD branches with 25%/5% labels) |

Render verified on-screen in both themes via browser screenshots.

## 6. kypExtensions (traceable, manifest-recorded)

- **usmle-attack-layer** (all three topics) — KYP-original exam-strategy synthesis (patterns/traps/pivots/mini-case with answer autopsy).
- **silencer-stringency-frame** (gene-expression-modifications) — the WHO-chooses-the-target / HOW-strict-the-pairing sort key.
- **term-sorting-layer** (genetic-terms-popgen) — the "sort the terms by WHAT VARIES" frame that organizes all fifteen terms.
- **parent-of-origin-logic-layer** (imprinting-disorders) — the three-question derivation and the four-step UPD bridge ("two silenced copies equal zero expression").
- 6 extensions total, every one carrying id/summary/origin/rationale/location; none presented as First Aid content.

## 7. QA results — failures found and fixed

| # | Finding | Fix | Verified |
|---|---|---|---|
| 1 | **CompareBlock schema violation** — the PWS-vs-AS compare block carried a `caption` property not in the type (tsc TS2353) | Caption removed; the POP/MAMAS one-liner folded into the compare `intro` | tsc clean (baseline only) |
| 2 | **VLM: imprinting-chromosome15 text clipping** (both themes) — the PWS/AS box sentences were single un-wrapped SVG text runs exceeding their container width | Sentences split into two lines each; sentences moved under the pill (top of each box) | Re-captured; VLM re-verdict **CLEAN × 2** |
| 3 | **Latent viewBox defect in the AS group** (found during fix review) — chromosome rods (y to y+150) exceeded the 184px AS box bottom, and the rod labels rendered at y=600 — **outside the 580px viewBox, invisible** | `Chromosome` component made parametric (`len` prop); full layout re-geometry (header 20–74, row 1 88–308, row 2 328–574) with all labels inside box + viewBox; Normal-box sentence/legend collision resolved by moving P/M legend to the top-right | Element captures light + dark VLM CLEAN |
| 4 | **Dev-server QA infrastructure** — background `next dev` processes are killed between tool invocations, and Next 16's dev-lock blocks a second instance | QA moved to single-process scripts (server spawn + captures + kill in one run); orphaned server found and cleaned; the fix-recapture reused the running instance | 15/15 captures + 9/9 VLM calls completed |

Final QA matrix (evidence in `download/usmle-g1-qa/` — 15 captures: 9 page screenshots + 6 element-level visual captures + results.json + server logs):

- Desktop 1440 + mobile 390 × light × dark × 3 topics: dark applied on all dark captures (documentElement.dark); mobile horizontal overflow **0 px × 3**; application console/page errors **0** (the only console entries are dev-mode HMR WebSocket handshake notices — infrastructure noise from `next dev`, not application code; 27/27 classified, 0 non-HMR)
- **VLM element-level: 6/6 VERDICT CLEAN** (hwe-square, cafe-au-lait, imprinting-chr15 × light/dark); **page-level: dark 2/2 + mobile 1/1 CLEAN** (9/9 paced calls, no 429s)
- Machine gates: `validate.ts` **CONTRACT GREEN (0 errors, 2 pre-existing pilot warnings)** · `verify-evidence.ts` **465/465** · `audit.ts` **0 depth failures across 32 topics** · tsc source-clean (1 documented pre-existing next.config error)

## 8. Tracker status

Regenerated only by `sync-tracker.ts`: **32 topics produced** (10 pilot-complete + **22 chapter-complete** [M1 4 + M2 6 + M3 5 + M4 4 + G1 3]), notes ⇄ manifests ⇄ tracker 1:1. Biochemistry chapter: 55 registered · 23 produced · 32 remaining · qaStatus pass. No git operations.

## 9. Unresolved / flagged items (none block G1)

1. **next.config.ts redirects type widening** — the single documented pre-existing tsc error (unrelated; not repaired per directive).
2. **Element-capture viewport note** — tall visuals are partially framed in single-viewport element captures (capture artifact; full-page captures show them completely).
3. **Chapter progress note** — Biochemistry is now 23/55 topics produced (42%). Next batch per the approved plan: **G2 (modes-of-inheritance → cystic-fibrosis → muscular-dystrophies → trinucleotide-repeat-diseases, pdf 79–82 / book 57–60)**, then G3, N1–N2, E1–E5 and the remaining plan batches through 55/55.
