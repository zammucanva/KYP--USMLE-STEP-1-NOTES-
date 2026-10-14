# USMLE Phase I-C — Biochemistry Chapter Inventory Report

**Chapter:** Biochemistry (Chapter 1, Section II · High-Yield General Principles)
**Source:** First Aid for the USMLE Step 1 2026 — Part 1, pdf 49–114 (book 27–92); content pages pdf 54–114 (book 32–92)
**Extraction status:** `extracted` · tracker synchronized · contract validation GREEN (0 errors)
**Date:** 2026-10-07

---

## 1. Extraction method

- **Subsection extraction:** PDF text-layer font-level analysis (PyMuPDF). FA subsection
  heading bars render as 10 pt MyriadPro-Bold `#004b6c` spans; minor sub-headings as
  `#165d7e` semibold. 130 subsection headings captured with page + column position.
- **Visual identification:** every page rendered at 110 DPI; all 60 content pages with
  raster/vector density passed through VLM figure identification; results cross-verified
  against the text layer (figure labels, photo markers, table headers) and the embedded
  image/raster placement scan.
- **Page mapping:** Part 1 linear offset (book = pdf − 22) per the calibrated book map;
  dual pdf/book mapping recorded on every topic and every textbook visual.
- **Front matter:** pdf 49–53 = Section II intro / database guide / acknowledgments /
  chapter title page (tab index confirms group starts: Molecular 32, Cellular 44,
  Lab Techniques 50, Genetics 54, Nutrition 63, Metabolism 71).

## 2. FA group structure (confirmed from the source)

| FA group | PDF pages | Book pages | KYP topics |
|---|---|---|---|
| Molecular | 54–65 | 32–43 | 10 |
| Cellular | 66–71 | 44–49 | 5 |
| Laboratory Techniques | 72–75 | 50–53 | 4 |
| Genetics | 76–85 | 54–63 | 9 |
| Nutrition | 85–92 | 63–70 | 8 |
| Metabolism | 93–114 | 71–92 | 18 |

**Topic granularity** follows the approved pilot pattern (teachable units spanning 1–6 FA
subsections). **130/130 FA subsections are claimed by exactly one topic** (machine-verified;
the pilot note's five FA subsections + rate-limiting table and hexokinase-vs-glucokinase are
credited to the approved glycolysis-regulation note).

## 3. Topic inventory (55 topics = 1 approved pilot + 54 pending)

Difficulty: **D1×6 · D2×21 · D3×28** · mechanism-heavy: 45/55

### Molecular (10)
| Topic | FA subsections | PDF | Book | Diff | Visuals planned |
|---|---|---|---|---|---|
| chromatin-organization | Chromatin structure | 54 | 32 | 2 | packing hierarchy · EM pattern |
| nucleotides-synthesis | Nucleotides; De novo pyrimidine and purine synthesis | 55–56 | 33–34 | 3 | ring atom sources · synthesis map |
| purine-salvage-disorders | Purine salvage deficiencies | 57 | 35 | 3 | purine metabolism map |
| dna-replication | DNA replication | 58 | 36 | 3 | replication fork machinery |
| dna-repair | DNA repair | 59 | 37 | 3 | repair-pathways composite |
| dna-mutations | Mutations in DNA | 60 | 38 | 2 | mutation-types panel |
| lac-operon | Lac operon | 61 | 39 | 3 | operon states diagram |
| eukaryotic-gene-organization | Functional organization…; Regulation of gene expression | 61–62 | 39–40 | 2 | gene anatomy |
| rna-processing | RNA processing; RNA polymerases; Introns vs exons; Splicing of pre-mRNA | 62–63 | 40–41 | 3 | mRNA anatomy · alt-splicing · lariat |
| translation-protein-synthesis | Genetic code; tRNA; Start/stop codons; Protein synthesis; PTM; Chaperone | 57, 64–65 | 35, 42–43 | 3 | tRNA charging · translation stages |

### Cellular (5)
| Topic | FA subsections | PDF | Book | Diff |
|---|---|---|---|---|
| cell-cycle | Cell cycle phases | 66 | 44 | 3 |
| organelles-cell-trafficking | RER; SER; Cell trafficking; Peroxisome; Proteasome | 67–68 | 45–46 | 2 |
| cytoskeleton-cilia | Cytoskeletal elements; Microtubule; Cilia structure | 68–69 | 46–47 | 3 |
| collagen-elastin | Collagen; Collagen synthesis and structure; Elastin | 70, 72 | 48, 50 | 3 |
| connective-tissue-diseases | Osteogenesis imperfecta; Ehlers-Danlos; Menkes (+Marfan contrast p72, Williams p85) | 71–72, 85 | 49–50, 63 | 2 |

### Laboratory Techniques (4)
| Topic | FA subsections | PDF | Book | Diff |
|---|---|---|---|---|
| pcr-crispr | Polymerase chain reaction; CRISPR/Cas9 | 72–73 | 50–51 | 3 |
| blotting-procedures | Blotting procedures | 73 | 51 | 3 |
| flow-cytometry-elisa | Flow cytometry (+ELISA figure) | 74 | 52 | 2 |
| karyotyping | Karyotyping; Spectral karyotyping | 75 | 53 | 1 |

### Genetics (9)
| Topic | FA subsections | PDF | Book | Diff |
|---|---|---|---|---|
| gene-expression-modifications | Gene expression modifications | 76 | 54 | 2 |
| genetic-terms-popgen | Genetic terms; Population genetics; Hardy-Weinberg principle | 76–78 | 54–56 | 2 |
| imprinting-disorders | Disorders of imprinting | 78 | 56 | 3 |
| modes-of-inheritance | Modes of inheritance; Mitochondrial diseases; Rett syndrome | 79, 82 | 57, 60 | 3 |
| cystic-fibrosis | Cystic fibrosis | 80 | 58 | 2 |
| muscular-dystrophies | Muscular dystrophies | 81 | 59 | 2 |
| trinucleotide-repeat-diseases | Trinucleotide repeat expansion; Fragile X syndrome | 82 | 60 | 2 |
| autosomal-trisomies | Autosomal trisomies | 83 | 61 | 2 |
| chromosomal-disorders | Genetic disorders by chromosome; Robertsonian translocation; Cri-du-chat; Williams | 84–85 | 62–63 | 2 |

### Nutrition (8)
| Topic | FA subsections | PDF | Book | Diff |
|---|---|---|---|---|
| nutrition-fundamentals | Essential fatty acids; Vitamins: fat/water soluble; Dietary supplementation | 85 | 63 | 1 |
| vitamin-a | Vitamin A | 86 | 64 | 1 |
| vitamin-d | Vitamin D | 90 | 68 | 2 |
| vitamins-e-k | Vitamin E; Vitamin K | 90–91 | 68–69 | 1 |
| b-vitamins-1 | Vitamin B1; B2; B3; B5 | 86–87 | 64–65 | 3 |
| b-vitamins-2 | Vitamin B6; B7; B9; B12 | 88–89 | 66–67 | 3 |
| vitamin-c-zinc-pem | Vitamin C; Zinc; Protein-energy malnutrition | 89, 91 | 67, 69 | 2 |
| ethanol-metabolism | Ethanol metabolism | 92 | 70 | 2 |

### Metabolism (18) — glycolysis-regulation = approved pilot
| Topic | FA subsections | PDF | Book | Diff |
|---|---|---|---|---|
| enzyme-terminology | Enzyme terminology | 93 | 71 | 1 |
| metabolism-overview | Metabolic compartmentation; Summary of pathways; Activated carriers; Universal electron acceptors | 94–95 | 72–73 | 2 |
| **glycolysis-regulation** | **PILOT — complete (15/15 QA gates)** | 93–97, 106 | 71–75, 84 | 3 |
| tca-cycle-pdh | TCA cycle; PDH complex (+deficiency); Pyruvate metabolism | 96–97 | 74–75 | 3 |
| oxidative-phosphorylation | Electron transport chain and oxidative phosphorylation | 98 | 76 | 3 |
| gluconeogenesis | Gluconeogenesis, irreversible enzymes | 98 | 76 | 2 |
| pentose-phosphate-pathway | Pentose phosphate pathway; G6PD deficiency | 99 | 77 | 3 |
| fructose-galactose-disorders | Disorders of fructose metabolism; Disorders of galactose metabolism; Lactase deficiency | 100–101 | 78–79 | 2 |
| sorbitol-pathway | Sorbitol | 101 | 79 | 1 |
| amino-acids | Amino acids; Amino acid derivatives; Catecholamine synthesis/tyrosine catabolism | 101, 103 | 79, 81 | 3 |
| urea-cycle-disorders | Urea cycle; Transport of ammonia by alanine; Hyperammonemia; OTC deficiency | 102–103 | 80–81 | 3 |
| aminoacidopathies | Phenylketonuria; MSUD; Alkaptonuria; Homocystinuria; Cystinuria; Organic acidemias | 104–105 | 82–83 | 3 |
| glycogen-metabolism | Glycogen regulation by insulin and glucagon/epinephrine; Glycogen; Glycogen storage diseases | 106–107 | 84–85 | 3 |
| lysosomal-storage-diseases | Lysosomal storage diseases | 108 | 86 | 3 |
| fatty-acid-metabolism | Fatty acid metabolism | 109 | 87 | 3 |
| ketone-bodies | Ketone bodies; Fasted vs fed state | 110 | 88 | 3 |
| metabolic-fuel-use | Metabolic fuel use | 111 | 89 | 2 |
| lipid-transport | Lipid transport; Key enzymes in lipid transport; Major apolipoproteins; Lipoprotein functions | 112–114 | 90–92 | 3 |
| familial-dyslipidemias | Abetalipoproteinemia; Familial dyslipidemias | 114 | 92 | 2 |

## 4. Textbook visual inventory & KYP implementation plan

**112 meaningful textbook visuals identified** → every one has a KYP outcome:

| Outcome | Count | Meaning |
|---|---|---|
| ORIGINAL_KYP_REDRAW → registry SVG | 77 | New KYP artwork preserving the source figure's educational content (labels, relationships, sequence, directionality) |
| ORIGINAL_KYP_ADAPTATION → registry SVG | 15 | Substantially original KYP visualization of the same concept |
| ORIGINAL_* → note-block | 15 | Implemented as KYP tables/compare blocks inside the note (visual-table sources) |
| SOURCE_REFERENCE (with reason) | 5 | Genuinely absorbed by another note (receiving location named — 3 by the approved pilot note) or duplicate view |
| SOURCE_REPRODUCTION | 0 | None — First Aid is COPYRIGHTED_NO_REPUBLISH; no republish license exists |

- `accountedFor = 112/112` · `unresolved = 0` · `omitted-with-reason = 5` (all name the receiving note)
- **Diagnostic-pattern policy** (per instruction): histology, clinical photographs, radiology,
  ECG-grade visuals and cytogenetics are implemented as KYP originals that preserve the
  diagnostic pattern — cherry-red macula contrast, dark-peripheral heterochromatin on EM,
  dextrocardia cardiac silhouette, crumpled-tissue-paper Gaucher cytoplasm, lipid-laden
  enterocytes — never superficial redraws.
- **92 new registry SVGs** are planned (visual ids listed per topic in the chapter file's
  `textbookVisuals[]` records, e.g. `replication-fork-machinery`, `tca-cycle-map`,
  `sphingolipid-pathway-map`, `lipid-transport-map`, `ethanol-metabolism-map`).
- Records are shaped to transfer 1:1 into `content/usmle/visual-inventory/<topicId>.json`
  at production time (visualId `<topicId>-sv<N>` numbering already assigned).

## 5. sourceRef pattern verification (checklist item 8)

All 10 pilot notes follow the frozen pattern
`First Aid 2026, Part N pp. X–Y (source keywords)` citing **PDF pages**, e.g. glycolysis:
`First Aid 2026, Part 1 pp. 93–97, 106 (rate-limiting enzymes; glycolysis regulation; pyruvate metabolism)`.
New Biochemistry notes will use the identical pattern; the precise dual mapping (pdf +
printed book page) is carried in manifests and the chapter inventory. The pilot's known
`pendingCorrection` (display-string dual mapping) remains flagged for user decision —
nothing silently edited.

## 6. Rights posture

Every First Aid 2026 visual: `rightsStatus = COPYRIGHTED_NO_REPUBLISH`. No republish
license exists, therefore `SOURCE_REPRODUCTION` is unused and every educationally
meaningful visual receives an original KYP equivalent (registry SVG or note-block).
No `UNCLEAR` rights cases — no stop condition fired.

## 7. Pipeline state

- `content/usmle/chapters/biochemistry.json` — extractionStatus `extracted`, 55 topics
- `validate.ts` — **CONTRACT GREEN, 0 errors** (2 pre-existing warnings are pilot
  cross-chapter citations in other chapters, unchanged)
- `sync-tracker.ts` — regenerated: Biochemistry 55 registered / 1 produced / 54 remaining
- `audit.ts` — 10 topics, 0 depth failures (unchanged; new topics enter audit as produced)
- No git operations. Nothing pushed. Architecture, KYP UI, MechanismFlow untouched.

## 8. Production plan (batches, per contract §9.2 — one topic at a time)

M1 dna-replication → dna-repair → dna-mutations → chromatin-organization
M2 nucleotides-synthesis → purine-salvage-disorders → lac-operon → eukaryotic-gene-organization
M3 rna-processing → translation-protein-synthesis
C1 cell-cycle → organelles-cell-trafficking → cytoskeleton-cilia
C2 collagen-elastin → connective-tissue-diseases
L1 pcr-crispr → blotting-procedures → flow-cytometry-elisa → karyotyping
G1 gene-expression-modifications → genetic-terms-popgen → imprinting-disorders
G2 modes-of-inheritance → cystic-fibrosis → muscular-dystrophies → trinucleotide-repeat-diseases
G3 autosomal-trisomies → chromosomal-disorders
N1 nutrition-fundamentals → vitamin-a → vitamins-e-k → vitamin-d
N2 b-vitamins-1 → b-vitamins-2 → vitamin-c-zinc-pem → ethanol-metabolism
E1 enzyme-terminology → metabolism-overview → tca-cycle-pdh → oxidative-phosphorylation → gluconeogenesis
E2 pentose-phosphate-pathway → fructose-galactose-disorders → sorbitol-pathway
E3 amino-acids → urea-cycle-disorders → aminoacidopathies
E4 glycogen-metabolism → lysosomal-storage-diseases
E5 fatty-acid-metabolism → ketone-bodies → metabolic-fuel-use → lipid-transport → familial-dyslipidemias
