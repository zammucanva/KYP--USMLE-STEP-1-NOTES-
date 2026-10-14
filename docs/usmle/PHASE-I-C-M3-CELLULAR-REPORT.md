# USMLE Phase I-C · M3 Batch Report — Biochemistry: Cellular

**Batch:** M3 (third Phase I-C production batch) — Cell Cycle & Checkpoints · Organelles & Cell Trafficking · Cytoskeleton, Microtubules & Cilia · Collagen & Elastin · Connective Tissue Diseases
**Source:** First Aid for the USMLE Step 1 2026 — Part 1, pdf 66–72, 85 (book 44–50, 63)
**Status:** ALL FIVE TOPICS PASS — 15/15 QA gates each · tracker synchronized · contract GREEN
**Date:** 2026-10-08

---

## 1. Topics completed

| Topic | Difficulty | Note file | Status |
|---|---|---|---|
| cell-cycle | D3 | `src/lib/kyp/usmle/notes/cell-cycle.ts` | chapter-complete, 15/15 gates |
| organelles-cell-trafficking | D2 | `src/lib/kyp/usmle/notes/organelles-cell-trafficking.ts` | chapter-complete, 15/15 gates |
| cytoskeleton-cilia | D3 | `src/lib/kyp/usmle/notes/cytoskeleton-cilia.ts` | chapter-complete, 15/15 gates |
| collagen-elastin | D3 | `src/lib/kyp/usmle/notes/collagen-elastin.ts` | chapter-complete, 15/15 gates |
| connective-tissue-diseases | D2 | `src/lib/kyp/usmle/notes/connective-tissue-diseases.ts` | chapter-complete, 15/15 gates |

All eleven FA subsections claimed by these topics (Cell cycle phases · Rough endoplasmic reticulum · Smooth endoplasmic reticulum · Cell trafficking · Peroxisome · Proteasome · Cytoskeletal elements · Microtubule · Cilia structure · Collagen · Collagen synthesis and structure · Elastin · Osteogenesis imperfecta · Ehlers-Danlos syndrome · Menkes disease, plus the Marfan-vs-homocystinuria contrast from pdf 72 and Williams syndrome from pdf 85) are fully covered; audit: 0 depth failures across all 25 topics. Notes registered in `notes/index.ts` in book order immediately after the M2 block (translation → cell-cycle → organelles → cytoskeleton → collagen → CT-diseases).

## 2. Source coverage

- **122 evidence quotes pinned and machine-verified** against the supplied PDF text layer (cell-cycle 21 · organelles 21 · cytoskeleton 26 · collagen-elastin 24 · connective-tissue diseases 30) — corpus-wide `verify-evidence.ts`: **321/321 verified, 0 failed**. All check-flagged quotes from the M3 source checkpoint were resolved against the exact text-layer wording before authoring (e.g., "nonreceptor (eg, EPO via JAK2)"; "nasal nitric oxide (used as screening test)"; "cystathionine‐β‐synthase" with U+2010 hyphens; "distinctive “elfin” facies" with typographic quotes; "Cross-linking of collagen ↑ with age" with the arrow character).
- Dual pdf/book mapping carried on every topic, every evidence item, and every visual record (book = pdf − 22); sourceRefs in the production display format "First Aid 2026, Part 1 pp. X–Y (keywords)" with non-contiguous ranges printed exactly as the M2 convention ("48, 50" · "49–50, 63").
- First Aid is the sole content source; source-extraction facts, VLM figure findings, and evidence-quote candidates came from the persisted checkpoint `docs/usmle/M3-SOURCE-CHECKPOINT.md` (source pages read + rendered + VLM-inspected in the prior session) — no regeneration of completed work.

## 3. Visual coverage (per contract §3.4)

| Topic | FA figures identified | Accounted | Registry redraws | Adaptations | Unresolved | Omitted |
|---|---|---|---|---|---|---|
| cell-cycle | 1 (cell-cycle circle: Rb-E2F, p53-p21, restriction point) | 1 | 1 | 0 | 0 | 0 |
| organelles-cell-trafficking | 2 (secretory pathway map · RER/Golgi EMs) | 2 | 2 | 0 | 0 | 0 |
| cytoskeleton-cilia | 4 (microtubule · axoneme/basal body · dextrocardia CXR · Na⁺/K⁺-ATPase) | 4 | 3 | 1 | 0 | 0 |
| collagen-elastin | 2 (synthesis pipeline · elastin stretch/relax) | 2 | 1 | 1 | 0 | 0 |
| connective-tissue-diseases | 5 (blue sclerae · OI radiograph · EDS hyperextensibility · pectus · Marfan-vs-homocystinuria table) | 5 | 4 | 1 | 0 | 0 |
| **M3 total** | **14** | **14** | **11** | **3** | **0** | **0** |

All source figures are COPYRIGHTED_NO_REPUBLISH; every one is implemented as an **original KYP visual** (11 redraws + 2 registry adaptations + 1 note-block adaptation) preserving the source figure's educational content. Diagnostic-class visuals (dermatology-photo, radiology) follow the approved inventory policy — **diagnostic-pattern-preserving KYP originals**: blue sclerae rendered as the pale-blue scleral tint over choroid vs a normal white sclera; the OI radiograph as thin cortices + osteopenia + fractures at mixed healing stages vs a normal bone; EDS as stretch-with-recoil + thumb-forearm hypermobility; pectus carinatum as the protruding-sternum profile vs excavatum; dextrocardia CXR as the mirror-image cardiac silhouette with orientation markers. The Marfan-vs-homocystinuria comparison (VISUAL_TABLE) is implemented as the note's `compare` block carrying the source's four discriminator rows verbatim (INHERITANCE / INTELLECT / VASCULAR / LENS) per the approved plan.

**Chapter-cumulative after M3:** 30 textbook visuals accounted (M1: 5, M2: 11, M3: 14), 0 unresolved — matching the approved inventory plan exactly.

## 4. Visuals implemented (registry, painted and VLM-verified)

| Registry visualId | Component file | What it preserves from the source figure |
|---|---|---|
| `cell-cycle-checkpoint-map` | `cellular.tsx` | The circular phase map: G0 outside, interphase G1/S/G2, M (mitosis + cytokinesis); "Rb, p53 modulate G1 restriction point" with the source's own label; cyclin-CDK → Rb P → E2F → gene transcription; the p53 → p21 → CDK-inhibition arm; BCL-2/BCL-XL → BAX/BAK → caspase/apoptosis branch; HPV E6 and Li-Fraumeni chips on the p53 node |
| `secretory-pathway-map` | `cellular.tsx` | The endomembrane flow: nuclear envelope/RER origin, COPII anterograde to cis-Golgi, COPI retrograde (Golgi→Golgi, cis→ER), trans-Golgi clathrin route to late endosome/lysosome, secretory vesicle → exocytosis, plasma-membrane clathrin → early endosome (receptor-mediated endocytosis, LDL receptor), endosome maturation + membrane recycling; coat legend with anterograde/retrograde arrows |
| `rer-golgi-em` | `cellular.tsx` | The EM pair: RER as ribosome-studded stacked cisternae vs Golgi as smooth stacked saccules with budding/fusing vesicles — the diagnostic ultrastructure |
| `microtubule-architecture` | `cellular.tsx` | The cylinder: protofilaments of α/β-tubulin heterodimers, 2 GTP per dimer, negative end near the nucleus, positive end to the periphery, kinesin (anterograde − → +) and dynein (retrograde + → −) motors |
| `cilia-axoneme-basal-body` | `cellular.tsx` | Both cross-sections: 9 doublets + 2 central singlets with dynein arms and nexin links; basal body 9 triplets with no central pair |
| `dextrocardia-cxr` | `cellular.tsx` | Two chest films: normal left-sided cardiac silhouette vs mirror-image right-sided silhouette (situs inversus) with A/R/L orientation markers — the Kartagener film |
| `na-k-atpase-pump` | `cellular.tsx` | The pump cycle: ATP site cytosolic, 3 Na⁺ out (phosphorylated), 2 K⁺ in (dephosphorylated), digoxin inhibition chip |
| `collagen-synthesis-pipeline` | `connective-tissue.tsx` | All eight stations from fibroblast nucleus (collagen mRNA, Gly-X-Y preprocollagen) through RER hydroxylation (vitamin C) + glycosylation + triple helix, Golgi, exocytosis, C/N-terminal cleavage (tropocollagen), fibril self-assembly, to lysyl-oxidase (copper) cross-linking — with the scurvy / OI / Menkes disease chips at their stations |
| `elastin-stretch-relax` | `connective-tissue.tsx` | The single molecule in relaxed and stretched conformations with cross-link sites; fibrillin scaffold; nonhydroxylated-residue contrast; elastase ⊣ α1-antitrypsin control chips |
| `blue-sclerae-oi` | `connective-tissue.tsx` | Normal eye vs OI eye: thin translucent scleral collagen revealing choroidal veins as the blue tint |
| `oi-bone-fragility` | `connective-tissue.tsx` | OI long bone (thin cortex, osteopenia, bowing, fractures at different healing stages) vs normal bone — the film that forces the child-abuse differential |
| `eds-hyperextensible-skin` | `connective-tissue.tsx` | Skin stretch far beyond normal with recoil, thin translucent skin with visible veins and bruising, thumb-forearm hypermobility |
| `pectus-carinatum-marfan` | `connective-tissue.tsx` | Carinatum (protruding sternum) vs excavatum (depressed) chest profiles against a normal chest |

Visual placement rule honored: every visual sits inside the block flow **beside the concept it teaches**; no end-of-page galleries. No "Visual unavailable" anywhere (registry keys 42/42 resolve — 14 pilot + 5 M1 + 10 M2 + 13 M3).

## 5. Mechanisms (shared KYP MechanismFlow — not replaced)

| Topic | Flows (12 total) |
|---|---|
| cell-cycle | rb-e2f-gate (inhibit edge: checkpoint control at the gate) · p53-dna-damage-arrest (3 inhibit edges: p21 ⊣ CDK, HPV E6 ⊣ p53, Li-Fraumeni ⊣ p53) · g0-cell-type-strategy |
| organelles-cell-trafficking | secretory-pathway-flow (2 inhibit-style back edges: COPI retrograde retrieval, clathrin endocytosis branch) · m6p-icell-disease (inhibit edge: no M6P tag) |
| cytoskeleton-cilia | kinesin-dynein-transport (3 inhibit edges: pathogens ⊣ dynein, HSV ⊣ kinesin, slow transport rate-limit) · pcd-kartagener · na-k-atpase-cycle (inhibit edge: digoxin ⊣ pump) |
| collagen-elastin | collagen-synthesis-pipeline (2 inhibit edges: no vitamin C, no copper) · elastin-crosslink-cycle (inhibit edge: elastase ⊣ elastin) |
| connective-tissue-diseases | oi-collagen-type-i (inhibit edge: bisphosphonates ⊣ resorption) · marfan-fibrillin-tgf-beta |

Render verified on-screen (labeled nodes, arrows, T-bar inhibition edges) via browser screenshots in both themes.

## 6. kypExtensions (traceable, manifest-recorded)

- **usmle-attack-layer** (all five topics) — KYP-original exam-strategy synthesis (patterns/traps/pivots/mini-case with answer autopsy) over source-verified facts.
- **g0-strategy-layer** (cell-cycle) — the three-strategy framing of the cell-type table (Permanent-Parks / Stable-Stands-by / Labile-Launches) with the chemotherapy-toxicity mapping as the labile-column invoice.
- **peroxisome-cluster-layer** (organelles-cell-trafficking) — the "three defects, three ages" discrimination framework for Zellweger / Refsum / ALD.
- **motor-polarity-layer** (cytoskeleton-cilia) — the polarity-axis frame (minus at nucleus, plus at periphery) resolving every motor/pathogen/drug question, plus the vinca-vs-taxane biochemical contrast.
- **station-cofactor-layer** (collagen-elastin) — the pipeline-as-stations frame mapping each synthesis step to its cofactor and its disease (hydroxylation = vitamin C = scurvy; triple helix = OI; cross-linking = copper = Menkes).
- **type-to-gene-card** (connective-tissue-diseases) — the molecule-first organization of the disease cluster plus the OI-vs-child-abuse differential framing with its stakes.
- No external additions were presented as though they came from First Aid; every extension carries id, summary, origin, rationale, and location in its manifest (10 extensions total, all traceable).

## 7. QA results — failures found and fixed

| # | Finding | Fix | Verified |
|---|---|---|---|
| 1 | **5 brace-structure defects** in `connective-tissue-diseases.ts` after authoring (duplicated visual-block closers; one mechanism flow-closer mislaid during scripted cleanup) | Manual + targeted repairs restoring the exact object nesting | tsc clean (baseline only) |
| 2 | **VLM answer mix-up** on first pass: `connective-tissue-diseases-fig2` (bone radiograph) described as "blue sclerae comparison" | Pointed re-checks with forced-choice prompts on figs 2–4 | fig2 = B (bone radiograph with OI fractures) · fig3 = C (skin stretching) · fig4 = D (pectus profiles) — all correct; capture defect ruled out |
| 3 | **VLM rate limiting (429)** during page-level dark-mode checks | Exponential backoff (45 s → 90 s) then paced calls (20 s intervals) per the failure-recovery directive | All 7 page-level checks completed: CLEAN ×7 |
| 4 | **Dev-server process reaping** — background `next dev` does not survive between sandbox tool calls | Browser QA restructured into a single process-lifetime script (server + warmup + captures + teardown) | 33/33 captures completed in one pass |

Final QA matrix (evidence in `download/usmle-m3-qa/`, 33 captures: 20 page screenshots + 13 element-level visual captures):

- Desktop 1440×900 + mobile 390×844 × light + dark × 5 topics (dark verified via `documentElement.dark` class check — **DARK-OK × 5**): all paint, labels readable (VLM-verified per visual at element level, both themes at page level)
- **VLM element-level: 13/13 VERDICT CLEAN** (renders fully, no overlapping/clipped labels, legible text, correct content identified)
- **VLM page-level: 5/5 dark-desktop CLEAN + 2/2 mobile CLEAN** (wide tables/diagrams pan inside their frames by design)
- Mobile page-level horizontal overflow: **0 px on all 5 topics** (programmatic `scrollWidth − clientWidth` check)
- Console/page errors: **0** across all captures; `agent-browser errors` empty at every checkpoint
- Pipeline machine gates: `validate.ts` **CONTRACT GREEN (0 errors, 2 pre-existing pilot warnings)** · `verify-evidence.ts` **321/321** · `audit.ts` **0 depth failures across 25 topics**
- tsc: source-clean; baseline = 1 documented next.config.ts error (see PRE-EXISTING-TSC-ERRORS.md)

## 8. Tracker status

Regenerated only by `sync-tracker.ts`: **25 topics produced** (10 pilot-complete + **15 chapter-complete** [M1 4 + M2 6 + M3 5]), notes ⇄ manifests ⇄ tracker 1:1. Biochemistry chapter: 55 registered · 16 produced · 39 remaining · qaStatus pass. No git operations (no commit, no push, no deployment).

## 9. Unresolved / flagged items (none block M3)

1. **next.config.ts redirects type widening** — the single documented pre-existing tsc error (unrelated to USMLE production; not repaired per directive).
2. **VLM viewport-boundary note** — element-level captures are viewport-framed, so the cell-cycle figure's lower edge falls outside a single capture frame (capture artifact, not a page defect; the full-page capture shows the complete visual).
3. **Chapter progress note** — Biochemistry is now 16/55 topics produced (29% of the chapter). The remaining 39 topics are batched M4+ per the approved inventory order (next: Laboratory Techniques at pdf 72–77).

**M3 is complete. Per the production-autonomy directive, M4 (Laboratory Techniques) continues automatically.**
