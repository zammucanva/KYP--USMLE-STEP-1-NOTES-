# USMLE Phase I-C · M2 Batch Report — Biochemistry: Molecular II

**Batch:** M2 (second Phase I-C production batch) — Nucleotides · Purine Salvage · Lac Operon · Eukaryotic Gene Organization · RNA Processing · Translation
**Source:** First Aid for the USMLE Step 1 2026 — Part 1, pdf 55–57, 61–65 (book 33–35, 39–43)
**Status:** ALL SIX TOPICS PASS — 15/15 QA gates each · tracker synchronized · contract GREEN
**Date:** 2026-10-08

---

## 1. Topics completed

| Topic | Difficulty | Note file | Status |
|---|---|---|---|
| nucleotides-synthesis | D3 | `src/lib/kyp/usmle/notes/nucleotides-synthesis.ts` | chapter-complete, 15/15 gates |
| purine-salvage-disorders | D3 | `src/lib/kyp/usmle/notes/purine-salvage-disorders.ts` | chapter-complete, 15/15 gates |
| lac-operon | D3 | `src/lib/kyp/usmle/notes/lac-operon.ts` | chapter-complete, 15/15 gates |
| eukaryotic-gene-organization | D2 | `src/lib/kyp/usmle/notes/eukaryotic-gene-organization.ts` | chapter-complete, 15/15 gates |
| rna-processing | D3 | `src/lib/kyp/usmle/notes/rna-processing.ts` | chapter-complete, 15/15 gates |
| translation-protein-synthesis | D3 | `src/lib/kyp/usmle/notes/translation-protein-synthesis.ts` | chapter-complete, 15/15 gates |

All eleven FA subsections claimed by these topics (Nucleotides · De novo pyrimidine and purine synthesis · Purine salvage deficiencies · Lac operon · Functional organization of a eukaryotic gene · Regulation of gene expression · RNA processing · RNA polymerases · Introns vs exons · Splicing of pre-mRNA · Genetic code features · tRNA · Start and stop codons · Protein synthesis · Posttranslative modifications · Chaperone protein) are fully covered; audit: 0 depth failures across all 20 topics.

## 2. Source coverage

- **105 evidence quotes pinned and machine-verified** against the supplied PDF text layer (nucleotides 17 · purine salvage 12 · lac operon 11 · gene organization 11 · RNA processing 25 · translation 29) — corpus-wide `verify-evidence.ts`: **199/199 verified, 0 failed**. One initial quote ("5′ end of **the** incoming nucleotide") was corrected to the text layer's exact wording ("end of incoming nucleotide") before pass — source fidelity held, no improvisation.
- Dual pdf/book mapping carried on every topic, every evidence item, and every visual record (book = pdf − 22; page-number prints confirmed on rendered pages).
- First Aid is the sole content source. Before M2 production, the global book-page cleanup was executed: **154 inventory records fixed** (bookPages=pdf → converted), **14/14 note sourceRefs standardized** to the production display format "First Aid 2026, Part N pp. X–Y (keywords)" citing printed book pages, and the pilot pendingCorrections resolved (see worklog `usmle-m1-approval-cleanup`).
- Pre-existing TSC errors: 7 USMLE-scoped errors fixed surgically, 4 unrelated documented in `docs/usmle/PRE-EXISTING-TSC-ERRORS.md` (not repaired per directive).

## 3. Visual coverage (per contract §3.4)

| Topic | FA figures identified | Accounted | Registry redraws | Adaptations | Absorbed | Unresolved | Omitted |
|---|---|---|---|---|---|---|---|
| nucleotides-synthesis | 2 (atom sources · de novo map) | 2 | 2 | 0 | 0 | 0 | 0 |
| purine-salvage-disorders | 1 (purine metabolism map) | 1 | 1 | 0 | 0 | 0 | 0 |
| lac-operon | 1 (operon + four states) | 1 | 1 | 0 | 0 | 0 | 0 |
| eukaryotic-gene-organization | 1 (gene anatomy + dogma flow) | 1 | 0 | 1 | 0 | 0 | 0 |
| rna-processing | 3 (mRNA anatomy · alt splicing · spliceosome) | 3 | 2 | 1 | 0 | 0 | 0 |
| translation-protein-synthesis | 3 (tRNA · ribosome stages · code table) | 3 | 2 | 0 | 1 | 0 | 0 |
| **M2 total** | **11** | **11** | **8** | **2** | **1** | **0** | **0** |

All source figures are COPYRIGHTED_NO_REPUBLISH; every one is implemented as an **original KYP visual** (8 redraws + 2 adaptations) preserving the source figure's educational content — labels, relationships, sequence, directionality, drug-attachment points, diagnostic anchors — without copying artwork, styling, or layout. The genetic-code property list (no drawn figure in source) is absorbed verbatim into the note's genetic-code table (absorbed-figure rule; content preserved with zero information loss; documented with omissionReason + inventory notes).

**Chapter-cumulative after M2:** 16 textbook visuals accounted for (M1: 5, M2: 11), 0 unresolved — matching the approved inventory's plan for these 10 topics exactly.

## 4. Visuals actually implemented (registry, painted and VLM-verified)

| Registry visualId | Component file | What it preserves from the source figure |
|---|---|---|
| `nucleotide-ring-atom-sources` | `nucleotides.tsx` | Purine double ring with every atom color-coded to precursor (Gly→C4/C5/N7 · Asp→N1 · Gln→N3/N9 · CO₂→C6 · THF→C2/C8) and pyrimidine ring (carbamoyl phosphate→C2/N3 · Asp→N1/C4/C5/C6) — atom assignments verified against the rendered source page by VLM before drawing; deamination set; ring mnemonics |
| `nucleotide-de-novo-salvage-map` | `nucleotides.tsx` | Both de novo lanes with rate-limiting markers (CPS2\*, PRPP amidotransferase\*), orotic aciduria annotation, and every inhibitor at its exact step: leflunomide, hydroxyurea, 5-FU/capecitabine, MTX/TMP/pyrimethamine, 6-MP/MTX/azathioprine, mycophenolate/ribavirin; DHF→DHFR→THF folate loop; CPS1 vs CPS2 distinction strip |
| `purine-metabolism-map` | `nucleotides.tsx` | Circular purine economy: PRPP hub, de novo → IMP branch, AMP/GMP arms with nucleoside/free-base degradation, HGPRT + APRT salvage arcs, ADA step with cladribine/pentostatin + SCID block, Lesch-Nyhan block on HGPRT, XO ladder (allopurinol/febuxostat) to uric acid → allantoin (rasburicase) → excretion; both disease-mechanism chips |
| `lac-operon-states` | `gene-expression.tsx` | Operon anatomy strip (lacI, CAP site, promoter, operator, lacZ/Y/A with RNA pol), both cascades (glucose ⊣ adenylate cyclase; ATP→cAMP→CAP; allolactose ⊣ repressor), and the source's four-state truth table with expression outcomes |
| `eukaryotic-gene-anatomy` | `gene-expression.tsx` | Coding-strand anatomy strip (enhancer/silencer, CAAT, TATAAA, transcription start, GT…AG intron marks, 5′/3′ UTR, ORF, AATAAA) + the DNA → pre-mRNA → mature mRNA (Gppp cap, AAUAAA, poly-A) → protein flow |
| `mrna-maturation-anatomy` | `gene-expression.tsx` | Mature mRNA 5′→3′ anatomy: 7-methylguanosine cap (cotranscriptional), UTRs, AUG/Kozak, coding region, stop, AAUAAA, ~200-A tail; the three processing steps; P-body quality control; the two named failure modes |
| `alternative-splicing-paths` | `gene-expression.tsx` | One six-exon hnRNA spliced three ways (1-2-4-5-6 · 1-3-5-6 · 1-3-4-5-6) to three mRNAs and three protein isoforms, with First Aid's own examples (transmembrane vs secreted Ig, tropomyosin, dopamine receptors, tumor evasion) |
| `spliceosome-lariat` | `gene-expression.tsx` | Three-step cycle: U1/U2 snRNP assembly on GU donor + branch A + AG acceptor → 5′ cleavage with 2′–5′ lariat noose → 3′ cleavage, exon ligation, lariat release; SMA (↓SMN) and anti-U1 snRNP → SLE/MCTD clinical chips |
| `trna-structure-charging` | `translation.tsx` | Cloverleaf (3′-ACC acceptor, T-arm TΨC Tethers, D-arm Detection, variable arm, anticodon loop opposite the aminoacyl end), charging panel (1 synthetase per aa, ATP→AMP+PPi, hydrolytic editing, mischarged-tRNA rule), antiparallel 5′-AUG-3′/3′-UAC-5′ pairing with wobble position |
| `translation-ribosome-stages` | `translation.tsx` | Three ribosome panels (initiation with P-site initiator exception; E-P-A elongation with rRNA ribozyme peptidyl transferase + 3-nt translocation; termination with eRF over UGA/UAA/UAG), subunit arithmetic (80S even / 70S prime), ATP-vs-GTP ledger, going-APE mnemonic, toxin-target strip |

Visual placement rule honored: every visual sits inside the block flow **beside the concept it teaches**; no end-of-page galleries. No "Visual unavailable" anywhere (registry keys 24/24 resolve — 14 pilot/M1 + 10 new).

## 5. Mechanisms (shared KYP MechanismFlow — not replaced)

| Topic | Flows (16 total) |
|---|---|
| nucleotides-synthesis | pyrimidine-de-novo (with inhibit edge: antifolates ⊣ dTMP output) · purine-de-novo (inhibit edge: 6-MP ⊣ IMP branches) |
| purine-salvage-disorders | ada-deficiency-scid (inhibit edge: pentostatin/cladribine ⊣ ADA) · hgprt-lesch-nyhan · urate-lowering-logic (dual inhibit edges: XO ⊣ / pool dissolution) |
| lac-operon | cap-camp-cascade · allolactose-repressor-switch (inhibit edge: inducer ⊣ repressor) · four-state-logic |
| eukaryotic-gene-organization | gene-expression-flow · promoter-mutation-consequence |
| rna-processing | hnrna-to-mrna-maturation (2 inhibit edges: AAUAAA mutation, Kozak mutation) · spliceosome-lariat-cycle (2 inhibit edges: ↓SMN, anti-U1) · rna-polymerase-portfolio (3 inhibit edges: α-amanitin, dactinomycin ×2) |
| translation-protein-synthesis | trna-charging-fidelity (inhibit edge: hydrolytic editing) · translation-ribosome-cycle (inhibit edge: toxin ⊣ translocation) · ptm-chaperone-folding |

Render verified on-screen (labeled nodes, arrows, T-bar inhibition edges) via browser screenshot + VLM in both themes.

## 6. kypExtensions (traceable, manifest-recorded)

- **usmle-attack-layer** (all six topics) — KYP-original exam-strategy synthesis (patterns/traps/pivots/mini-case) over source-verified facts.
- **cps-regulators** (nucleotides-synthesis) — the allosteric regulator row (N-acetylglutamate; ATP/PRPP/UTP) beyond First Aid's location/pathway/tissue facts.
- **salvage-adjacent-clinical-detail** (purine-salvage-disorders) — PEG-ADA/HSCT/gene-therapy depth, rasburicase G6PD contraindication, APRT distractor.
- **operon-mutation-layer** (lac-operon) — constitutive mutations, cis/trans complementation logic, promoter-vs-CAP-site consequences.
- **enhancer-looping-why** (eukaryotic-gene-organization) — the DNA-looping mechanism behind enhancer distance-independence.
- **amanitin-clinical-detail** (rna-processing) — the delayed amatoxin timeline and anti-U1-70k/MCTD antibody nuance.
- **energy-ledger-calculation** (translation-protein-synthesis) — the cost-per-amino-acid arithmetic framing.
- No external additions were presented as though they came from First Aid; every extension carries id, summary, origin, rationale, and location in its manifest.

## 7. QA results — failures found and fixed

| # | Finding | Fix | Verified |
|---|---|---|---|
| 1 | **Evidence quote mismatch** — "end of **the** incoming nucleotide" not found on pdf 55 (text layer reads "end of incoming nucleotide") | Quote corrected to the text layer's exact wording | verify-evidence 199/199 pass |
| 2 | **7 duplicated closing braces** in 4 M2 note files after authoring (visual-block objects) + 3 inconsistent 6-space closers | Removed duplicates via indentation-aware script; normalized closers | tsc clean (baseline only) |
| 3 | **Label collisions in nucleotide-de-novo-salvage-map** (VLM full-page pass): CPS2 sublabel overflowed its box onto PRPP; "N⁵,N¹⁰-methylene-THF" and "donates methyl" texts printed ON the DHF/THF boxes; hydroxyurea chip overlapped the reductase label; 5-FU chip overlapped the dTMP box; leflunomide chip crowded its T-bar | Re-laid the folate-cycle section as node boxes with a curved dashed methyl-donor arrow; moved every inhibitor chip/T-bar to open zones with clearance; shortened CPS2 sub to "rate-limiting · cytosol" with the full enzyme name as a free label below | Focused VLM re-inspection of the element: **CLEAN — no overlaps, no cutoffs** |
| 4 | **Transient 500** on first compile of /usmle/nucleotides-synthesis (Turbopack cold-compile cache race; dev artifact JSON.parse error) | Resolved on warm compile; page 200 stable across all subsequent checks; unrelated to content | 200 × all later requests; 0 page errors |

Final QA matrix (evidence in `download/usmle-m2-qa/`, 24 page screenshots + 10 element-level visual captures):

- Desktop 1440×900 + mobile 390×844 × light + dark × 6 topics (dark verified via `documentElement.dark` class check — DARK-OK × 12): all paint, labels readable (VLM-verified per visual at element level, both themes at page level)
- Mobile page-level horizontal overflow: **0 px** on all 12 mobile combos (wide diagrams pan inside their figure frames)
- Console/page errors: **0** across all 24 captures; hydration: **0** warnings
- Hub `/usmle`: 20 topics, 11 Biochemistry cards (M1+M2 grouped), dynamic count badge (stale "Ten pilot topics" copy corrected)
- Pipeline machine gates: `validate.ts` **CONTRACT GREEN (0 errors, 2 pre-existing pilot warnings)** · `verify-evidence.ts` **199/199** · `audit.ts` **0 depth failures across 20 topics**
- tsc: source-clean; baseline = 1 documented next.config.ts error + transient `.next/dev/types/*` generated churn (documented in PRE-EXISTING-TSC-ERRORS.md)

## 8. Tracker status

Regenerated only by `sync-tracker.ts`: **20 topics produced** (10 pilot-complete + **10 chapter-complete** [M1 4 + M2 6]), notes ⇄ manifests ⇄ tracker 1:1. Biochemistry chapter: 55 registered · 11 produced · 44 remaining · qaStatus pass. No git operations (no commit, no push, no deployment).

## 9. Unresolved / flagged items (none block M2)

1. **Dev-server type-artifact churn** — while `next dev` runs, `.next/dev/types/routes.d.ts` may transiently show parse errors (observed 2026-10-08). Generated artifact, not source; documented in the TSC registry; regenerated on next build. No production impact.
2. **next.config.ts redirects type widening** — the single remaining documented pre-existing tsc error (unrelated to USMLE production; not repaired per directive).
3. **Chapter progress note** — Biochemistry is now 11/55 topics produced (20% of the chapter). The remaining 44 topics are batched M3+ per the approved inventory order.

**M2 is complete. Per the production-autonomy directive, M3 (Cellular: cell cycle, organelles/trafficking, cytoskeleton/cilia, collagen/elastin, connective-tissue diseases) continues automatically.**
