# USMLE Phase I-C · M4 Batch Report — Biochemistry: Laboratory Techniques (plan batch L1)

**Batch:** M4 (fourth Phase I-C production batch, plan batch L1) — PCR & CRISPR/Cas9 · Blotting Procedures · Flow Cytometry & ELISA · Karyotyping
**Source:** First Aid for the USMLE Step 1 2026 — Part 1, pdf 72–75 (book 50–53)
**Status:** ALL FOUR TOPICS PASS — 15/15 QA gates each · tracker synchronized · contract GREEN
**Date:** 2026-10-08

---

## 1. Topics completed

| Topic | Difficulty | Note file | Status |
|---|---|---|---|
| pcr-crispr | D3 | `src/lib/kyp/usmle/notes/pcr-crispr.ts` | chapter-complete, 15/15 gates |
| blotting-procedures | D3 | `src/lib/kyp/usmle/notes/blotting-procedures.ts` | chapter-complete, 15/15 gates |
| flow-cytometry-elisa | D2 | `src/lib/kyp/usmle/notes/flow-cytometry-elisa.ts` | chapter-complete, 15/15 gates |
| karyotyping | D1 | `src/lib/kyp/usmle/notes/karyotyping.ts` | chapter-complete, 15/15 gates |

All six FA subsections formally claimed by these topics (Polymerase chain reaction · CRISPR/Cas9 · Blotting procedures · Flow cytometry · Karyotyping · Spectral karyotyping) are fully covered, plus the same-page content their pinned source ranges carry: microarrays and ELISA under flow cytometry's page, and FISH plus molecular cloning under karyotyping's page (no silent source omission). Audit: 0 depth failures across all 29 topics. Notes registered in `notes/index.ts` in book order after the M3 block.

## 2. Source coverage

- **65 evidence quotes pinned and machine-verified** against the supplied PDF text layer (pcr-crispr 15 · blotting 16 · flow-cytometry-elisa 20 · karyotyping 14) — corpus-wide `verify-evidence.ts`: **386/386 verified, 0 failed**. Special-character traps handled verbatim: the U+2019 apostrophe in "patient's blood" was avoided by quoting around it; the smart quotes in "painted" were reproduced exactly; superscript-degree and superscript notation in figure labels (1°, 2° antibody) quoted as the text layer prints them.
- Source pages read from the pipeline cache and **rendered at 130 DPI + VLM-inspected before visual authoring** (pdf 72 PCR figure, 73 CRISPR + Southern-blot pedigree, 74 flow cytometry instrument + quadrant plot + ELISA wells, 75 G-banded karyogram + SKY paint). One figure-detail conflict was resolved by a **300-DPI crop re-inspection**: the AA lane in the Southern-blot figure shows the normal (bottom) band only, confirming the Aa = two-bands / aa = mutant-only / AA = normal-only pattern before the KYP redraw was authored. A second important finding: **the source PCR figure carries NO temperature numbers** — its steps read heated → cooled → temperature increased; the KYP redraw preserves that wording rather than inventing 95/55/72 °C.
- Dual pdf/book mapping on every topic, evidence item, and visual record (book = pdf − 22); sourceRefs in the production format "First Aid 2026, Part 1 pp. X–Y (keywords)".

## 3. Visual coverage (per contract §3.4)

| Topic | FA figures identified | Accounted | Registry redraws | Adaptations | Unresolved | Omitted |
|---|---|---|---|---|---|---|
| pcr-crispr | 2 (PCR cycle · CRISPR fork) | 2 | 2 | 0 | 0 | 0 |
| blotting-procedures | 1 (pedigree + Southern blot) | 1 | 1 | 0 | 0 | 0 |
| flow-cytometry-elisa | 3 (instrument · quadrant plot · ELISA wells) | 3 | 2 | 1 | 0 | 0 |
| karyotyping | 2 (G-banded karyogram · SKY paint) | 2 | 1 | 1 | 0 | 0 |
| **M4 total** | **8** | **8** | **6** | **2** | **0** | **0** |

All source figures are COPYRIGHTED_NO_REPUBLISH; every one is an **original KYP visual** (6 redraws + 2 adaptations) in the new component file `laboratory.tsx`. Photomicrograph-class figures (the G-banded karyogram and the SKY spread) are drawn as **schematic pattern-preserving originals** per the approved inventory policy — banded homologous pairs with numbered labels and red abnormality arrows; painted pairs with the source's three named readouts (the 17;19 two-color translocation, the chromosome-8 third-copy duplication, and the missing-fluorescence microdeletion).

**Chapter-cumulative after M4:** 38 textbook visuals accounted (M1: 5, M2: 11, M3: 14, M4: 8), 0 unresolved — matching the approved inventory plan exactly. Registry now 50/50 keys.

## 4. Visuals implemented (registry, painted and VLM-verified)

| Registry visualId | What it preserves from the source figure |
|---|---|
| `pcr-cycle-steps` | The three-step cycle with the source's own wording — denaturation (heated), annealing (sample is cooled; DNA primers anneal to the specific sequence), elongation (temperature is increased; dNTPs after each primer) — the REPEAT loop ("until the amount of DNA is sufficient"), the 5′/3′-labeled double-stranded DNA input, and the neonatal-HIV / herpes-encephalitis diagnostic chips. Deliberately NO temperature numbers, matching the source. |
| `crispr-cas9-mechanism` | Cas9 with gRNA hybridized to target DNA → double-strand break → fork: NHEJ branch with the indel-marked rejoin to "Frameshift/inactivation (knock-out)", HDR + Donor DNA branch to "Edited sequence (knock-in)", plus the application chips (virulence factors, sickle cell allele replacement, tumor targeting). |
| `southern-blot-pedigree` | The pedigree (I: two Aa parents with mutant-allele dots; II: affected aa daughter, Aa son, AA son), arrows to five lanes labeled Aa Aa aa Aa AA, the exact band pattern verified by 300-DPI crop (Aa = red top mutant + black bottom normal; aa = mutant only; AA = normal only), legend, the three-step procedure, and the SNoW DRoP family panel with Northern/Western/Southwestern one-liners. |
| `flow-cytometry-laser-path` | The instrument as an adaptation of the source schematic: cell carrying anti-CD3 and anti-CD8 antibodies each with a unique fluorescent label, the laser firing across the stream ("laser makes label fluoresce"), the detector ("fluorescence is detected; labeled cells are counted"), the histogram (one measure) vs scatter plot (two measures) outputs, and the use list (leukemia, PNH, fetal RBCs, CD4 count in HIV) with the microarray note. |
| `cd-cd-quadrant-plot` | The source's log-plot (10⁰–10⁴ both axes, X = CD8, Y = CD3) with all four quadrant populations and the source's own explanation of the empty right-lower quadrant — all CD8-expressing cells also express CD3 — plus ⊕/⊖ axis markers. |
| `elisa-direct-indirect` | Both well-stacks: Direct (patient antigen fixed, labeled 1° antibody with enzyme, substrate → detectable signal) vs Indirect (fixed antigen, patient 1° antibody, labeled 2° antibody, substrate → signal), with the shared engine, the "less specific than Western blot" performance note, and the HIV-screen chip. |
| `g-banded-karyotype-schematic` | The process strip (colchicine added → disrupts mitotic spindle assembly → arrest at metaphase → Giemsa stain → ordered/numbered by morphology, size, arm-length ratio, banding pattern), a stylized banded karyogram (pairs 1–22 + X/Y) with red abnormality arrows as in the source's cancer-cell image, sample sources, diagnostic use, nomenclature examples, and the molecular-cloning note. |
| `sky-karyotype-schematic` | The painted-pair concept with the source's three readouts isolated and labeled: the two-color 17;19 unbalanced translocation chromosome, the third copy of the chromosome-8 color (duplication → trisomy/tetrasomy), and the missing fluorescent stretch on one homolog (microdeletion), plus the FISH one-liner (specific localization). |

Visual placement rule honored: every visual sits beside the concept it teaches; no galleries. No "Visual unavailable" anywhere (registry 50/50 resolve).

## 5. Mechanisms (shared KYP MechanismFlow — not replaced)

| Topic | Flows (8 total) |
|---|---|
| pcr-crispr | pcr-thermal-cycle (inhibit edge: non-heat-stable polymerase ⊣ elongation) · crispr-cas9-editing-fork (inhibit edge: pathogen/tumor targeting) |
| blotting-procedures | southern-blot-workflow (3-step chain to heterozygosity and FMR1 outputs) · blot-family-selector (sample × probe → blot) |
| flow-cytometry-elisa | flow-cytometry-immunophenotype (stain → laser → detector → plot → uses) · elisa-detection-logic (direct vs indirect fork converging on substrate → signal) |
| karyotyping | metaphase-arrest-to-karyogram (colchicine → spindle ⊣ → metaphase → Giemsa → karyogram) · sky-paint-readout (inhibit edge: FISH zooms to one locus) |

Render verified on-screen in both themes via browser screenshots.

## 6. kypExtensions (traceable, manifest-recorded)

- **usmle-attack-layer** (all four topics) — KYP-original exam-strategy synthesis (patterns/traps/pivots/mini-case with answer autopsy).
- **pcr-application-layer** (pcr-crispr) — the antibody-logic of the neonatal-HIV application (maternal IgG defeats serology) and the 2ⁿ-per-cycle arithmetic behind "until the amount of DNA is sufficient".
- **blot-family-selector-layer** (blotting-procedures) — the sample × probe selector frame plus the "two bands = two alleles" band-count rule.
- **immunodetection-stack** (flow-cytometry-elisa) — the per-cell vs bulk-analyte vs protein-size test-choice frame across flow/ELISA/Western/microarray.
- **zoom-levels-layer** (karyotyping) — the karyotype/SKY/FISH three-zoom frame and the paint-dictionary conditionals.
- 8 extensions total, every one carrying id/summary/origin/rationale/location; none presented as First Aid content.

## 7. QA results — failures found and fixed

| # | Finding | Fix | Verified |
|---|---|---|---|
| 1 | **Recurring visual-block brace defect** (extra closing brace after `notice` in 3 note files — the same authoring pattern that hit M3) | Manual targeted edits + indentation-aware scan-fix script over the 4 M4 notes | tsc clean (baseline only) |
| 2 | **Contract violation: karyotyping traps = 2 < 3** (validateNote enforces ≥3 traps on every note; the D1 audit tier only demands 2) | Added a third trap (translocation vs duplication paint rules) | validate CONTRACT GREEN |
| 3 | **VLM figure-detail conflict** — two passes disagreed on the AA lane of the Southern-blot source figure (130-DPI ambiguity) | 300-DPI crop re-inspection: AA = normal band only; pattern confirmed (Aa two bands / aa mutant-only / AA normal-only) before authoring | High-DPI VLM read; redraw matches |
| 4 | **Invalid JSX in laboratory.tsx** (`y={245" as never}` ×2 from authoring; malformed destructuring in the Chrom renderer) | Fixed to plain numeric attributes and a clean `[-5, 5].map((dx, k) => …)` | tsc clean |

Final QA matrix (evidence in `download/usmle-m4-qa/`, 24 captures: 16 page screenshots + 8 element-level visual captures + source-page renders):

- Desktop 1440 + mobile 390 × light × dark × 4 topics: DARK-OK × 4 (documentElement.dark); mobile horizontal overflow **0 px × 4**; console/page errors **0**
- **VLM element-level: 8/8 VERDICT CLEAN**; **page-level dark 4/4 CLEAN + mobile 1/1 CLEAN** (13/13 paced calls, no 429s)
- Machine gates: `validate.ts` **CONTRACT GREEN (0 errors, 2 pre-existing pilot warnings)** · `verify-evidence.ts` **386/386** · `audit.ts` **0 depth failures across 29 topics** · tsc source-clean (1 documented pre-existing next.config error)

## 8. Tracker status

Regenerated only by `sync-tracker.ts`: **29 topics produced** (10 pilot-complete + **19 chapter-complete** [M1 4 + M2 6 + M3 5 + M4 4]), notes ⇄ manifests ⇄ tracker 1:1. Biochemistry chapter: 55 registered · 20 produced · 35 remaining · qaStatus pass. No git operations.

## 9. Unresolved / flagged items (none block M4)

1. **next.config.ts redirects type widening** — the single documented pre-existing tsc error (unrelated; not repaired per directive).
2. **Element-capture viewport note** — tall visuals are partially framed in single-viewport element captures (capture artifact; full-page captures show them completely).
3. **Chapter progress note** — Biochemistry is now 20/55 topics produced (36%). Next batch per the approved plan: **G1 (gene-expression-modifications → genetic-terms-popgen → imprinting-disorders, pdf 76–78 / book 54–56)**, then G2, G3, N1–N2, E1–E5.

**M4 is complete. Per the production-autonomy directive, G1 (Genetics I) continues automatically.**
