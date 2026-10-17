import type { KypUsMLENote } from "../types";

// Immunology — Cellular Components (E-batch 24).
// Source: First Aid 2026, Part 1 pdf 122 / book 100
// (Differentiation of T cells; Positive selection; Negative selection)

export const tCellDevelopment: KypUsMLENote = {
  id: "t-cell-development",
  title: "T-Cell Development: Thymic Selection & Subset Lineages",
  subtitle:
    "How the thymus builds a self-tolerant, MHC-restricted T-cell repertoire, and how the helper lineages are chosen. A T-cell precursor leaves the bone marrow for the thymus as a double-positive (CD4+ CD8+) thymocyte. POSITIVE SELECTION in the thymic cortex keeps T cells that recognize self-peptide-MHC complexes — those thymocytes receive a survival signal, allowing cooperation in immune responses. NEGATIVE SELECTION in the medulla removes T cells that bind too strongly to self-peptides: high self-affinity TCRs undergo apoptosis or the cell becomes a regulatory T cell, a process driven by the autoimmune regulator (AIRE) protein — AIRE deficiency causes autoimmune polyendocrine syndrome (chronic mucocutaneous candidiasis, hypoparathyroidism, adrenal insufficiency, recurrent Candida infections). Survivors exit as single-positive CD8+ cytotoxic or CD4+ helper T cells. In the lymph node, the naive CD4+ (Th0) cell's fate is set by the local cytokine milieu: IFN-γ/IL-12 drive Th1 (activates macrophages and cytotoxic T cells), IL-2/IL-4 drive Th2 (activates eosinophils, ↑IgE) while IFN-γ inhibits it, TGF-β/IL-1/IL-6 drive Th17 (neutrophilic infiltration) while IFN-γ and IL-4 inhibit it, and TGF-β/IL-2 drive Treg (prevents autoimmunity, maintains tolerance) while IL-6 inhibits it — a cross-regulating switchboard.",
  subject: "Immunology",
  system: "Section II · High-Yield General Principles — Cellular Components",
  pilotCategory: "Cellular Components — thymic positive/negative selection, AIRE, CD4/CD8 lineage commitment, Th1/Th2/Th17/Treg differentiation cytokines",
  difficulty: 2,
  readTime: 8,
  sourceRef:
    "First Aid 2026, Part 1 pp. 100 (Differentiation of T cells; Positive selection; Negative selection)",
  tags: [
    "T-cell development",
    "thymus",
    "thymic cortex",
    "thymic medulla",
    "T-cell precursor",
    "double positive",
    "CD4+ CD8+",
    "positive selection",
    "negative selection",
    "self-peptide MHC",
    "survival signal",
    "apoptosis",
    "regulatory T cells",
    "AIRE",
    "autoimmune regulator",
    "autoimmune polyendocrine syndrome",
    "chronic mucocutaneous candidiasis",
    "hypoparathyroidism",
    "adrenal insufficiency",
    "Th0",
    "Th1",
    "Th2",
    "Th17",
    "Treg",
    "IFN-gamma",
    "IL-12",
    "IL-2",
    "IL-4",
    "IL-10",
    "TGF-beta",
    "IL-1",
    "IL-6",
    "IL-17",
    "IL-21",
    "IL-22",
    "IL-35",
    "eosinophils",
    "IgE",
    "neutrophilic infiltration",
    "central tolerance",
  ],
  core: {
    what: "T-cell precursors originate in the bone marrow and travel to the thymus, where they arrive as double-positive (CD4+ CD8+) thymocytes. Positive selection occurs in the thymic cortex: it keeps T cells that recognize self-peptides (to allow for cooperation in immune responses) — double-positive thymocytes expressing TCRs that recognize self-peptide-MHC complexes receive a survival signal. Negative selection occurs in the thymic medulla: it removes T cells that bind too strongly to self-peptides — thymocytes expressing TCRs with high affinity for self antigens undergo apoptosis or become regulatory T cells. The autoimmune regulator (AIRE) protein drives negative selection; AIRE deficiency leads to autoimmune polyendocrine syndrome: Chronic mucocutaneous candidiasis, Hypoparathyroidism, Adrenal insufficiency, and Recurrent Candida infections. Selected thymocytes exit as single-positive CD8+ cytotoxic or CD4+ helper T cells, travel through the peripheral blood to lymph nodes, and there the naive CD4+ (Th0) cell differentiates along four lineages set by the cytokine milieu: Th1 (promoted by IFN-γ and IL-12; inhibited by IL-4 and IL-10; secretes IFN-γ, IL-2; activates macrophages and cytotoxic T cells), Th2 (promoted by IL-2 and IL-4; inhibited by IFN-γ; secretes IL-4, IL-5, IL-6, IL-10, IL-13; activates eosinophils and raises IgE), Th17 (promoted by TGF-β, IL-1, and IL-6; inhibited by IFN-γ and IL-4; secretes IL-17, IL-21, IL-22; induces neutrophilic infiltration), and Treg (promoted by TGF-β and IL-2; inhibited by IL-6; secretes TGF-β, IL-10, IL-35; prevents autoimmunity and maintains tolerance).",
    why: "Thymic selection is the mechanism of CENTRAL TOLERANCE — the reason the immune system does not attack self, and the explanation for every autoimmunity vignette that points to a tolerance failure. The two selections have opposite logic and complementary locations (cortex keeps MHC-recognizers; medulla deletes self-reactive cells), which makes them a reliable discriminator pair. AIRE deficiency is the classic single-gene tolerance failure: without medullary self-antigen display, negative selection cannot see organ-specific proteins, and the polyendocrine syndrome follows. The helper-lineage switchboard then determines effector strategy: Th1 for intracellular microbes (macrophage/CTL activation), Th2 for helminths and allergy (eosinophils, IgE), Th17 for extracellular bacteria and fungi (neutrophil recruitment), Treg for the brakes — and the cross-inhibition (IFN-γ suppressing Th2, IL-4/IL-10 suppressing Th1) explains why immune responses polarize.",
    keyIdea: "Hold the pathway as two schools. First the thymic school: bone marrow precursor → double-positive CD4+ CD8+ thymocyte → POSITIVE selection in the cortex (recognize self-peptide-MHC = survival signal; no recognition = death by neglect) → NEGATIVE selection in the medulla (bind self too strongly = apoptosis or Treg diversion; AIRE drives the display of self antigens here) → single-positive CD8+ (cytotoxic) or CD4+ (helper) output → peripheral blood → lymph node. Then the lineage school: naive CD4+ (Th0) + cytokine milieu → Th1 (IFN-γ, IL-12 push; IL-4, IL-10 block; secretes IFN-γ/IL-2; activates macrophages + CTLs), Th2 (IL-2, IL-4 push; IFN-γ blocks; secretes IL-4/5/6/10/13; eosinophils + ↑IgE), Th17 (TGF-β, IL-1, IL-6 push; IFN-γ, IL-4 block; secretes IL-17/21/22; neutrophilic infiltration), Treg (TGF-β, IL-2 push; IL-6 blocks; secretes TGF-β/IL-10/IL-35; prevents autoimmunity, maintains tolerance). AIRE failure = autoimmune polyendocrine syndrome: Chronic mucocutaneous candidiasis, Hypoparathyroidism, Adrenal insufficiency, Recurrent Candida infections.",
  },
  mechanisms: [
    {
      id: "thymic-selection-gauntlet",
      title: "The thymic gauntlet — positive selection in the cortex, negative selection in the medulla",
      context: "Central tolerance: building a repertoire that is MHC-restricted and self-tolerant",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A bone-marrow T-cell precursor arrives in the thymus as a double-positive (CD4+ CD8+) thymocyte",
            sublabel: "Input — TCR gene rearrangement has already generated a random receptor repertoire.",
            variant: "input",
          },
          {
            id: "s1",
            label: "POSITIVE SELECTION (cortex): thymocytes whose TCRs recognize self-peptide–MHC complexes receive a survival signal",
            sublabel: "Process — keeps T cells that recognize self-peptides to allow for cooperation in immune responses; non-recognizers die by neglect.",
            variant: "process",
          },
          {
            id: "s2",
            label: "NEGATIVE SELECTION (medulla): TCRs with high affinity for self antigens undergo apoptosis — or the cell becomes a regulatory T cell",
            sublabel: "Process — removes T cells that bind too strongly to self-peptides; AIRE drives medullary self-antigen display.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Single-positive output: CD8+ cytotoxic and CD4+ helper T cells, MHC-restricted and self-tolerant, exit to peripheral blood and lymph nodes",
            sublabel: "Output — the naive repertoire; failures of this gauntlet cause autoimmunity (AIRE deficiency → autoimmune polyendocrine syndrome).",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "cortex" },
          { from: "s1", to: "s2", label: "survivors to medulla" },
          { from: "s2", to: "o1", label: "self-tolerant survivors" },
        ],
        caption:
          "The two selections test the same random TCR repertoire against opposite criteria. In the cortex, a thymocyte must prove it can use MHC at all: TCRs that recognize self-peptide–MHC complexes receive a survival signal (positive selection — 'keep what can cooperate'); those that cannot, die by neglect. Survivors migrate to the medulla, where the bar inverts: TCRs that bind self-peptides TOO strongly — high self-affinity — trigger apoptosis, though some of these cells are diverted to become regulatory T cells instead (negative selection). AIRE (autoimmune regulator) is the protein that drives negative selection by enabling medullary epithelial cells to display organ-specific self antigens; without AIRE, the medulla cannot present thyroid, parathyroid, adrenal, and gut antigens, and self-reactive clones escape — the autoimmune polyendocrine syndrome of chronic mucocutaneous candidiasis, hypoparathyroidism, adrenal insufficiency, and recurrent Candida infections. The output cells are single-positive: CD8+ cytotoxic (MHC I-restricted) and CD4+ helper (MHC II-restricted), each tolerant to self.",
      },
    },
    {
      id: "helper-lineage-switchboard",
      title: "The helper switchboard — cytokine milieu sets Th1 / Th2 / Th17 / Treg fate",
      context: "Naive CD4+ (Th0) differentiation in the lymph node",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A naive CD4+ (Th0) cell in the lymph node meets its antigen with co-stimulation and proliferates via IL-2",
            sublabel: "Input — clonal expansion first; lineage choice follows the local cytokines.",
            variant: "input",
          },
          {
            id: "s1",
            label: "The cytokine milieu flips the switch: IFN-γ + IL-12 → Th1 · IL-2 + IL-4 → Th2 · TGF-β + IL-1 + IL-6 → Th17 · TGF-β + IL-2 → Treg",
            sublabel: "Process — each lineage also suppresses its rivals: IL-4/IL-10 block Th1; IFN-γ blocks Th2 and Th17; IL-6 blocks Treg.",
            variant: "process",
          },
          {
            id: "s2",
            label: "The committed lineage expands and secretes its effector set: Th1 → IFN-γ, IL-2 · Th2 → IL-4, IL-5, IL-6, IL-10, IL-13 · Th17 → IL-17, IL-21, IL-22 · Treg → TGF-β, IL-10, IL-35",
            sublabel: "Process — the secreted products recruit the matching effector arm.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Function: Th1 activates macrophages and cytotoxic T cells · Th2 activates eosinophils and ↑IgE · Th17 induces neutrophilic infiltration · Treg prevents autoimmunity (maintains tolerance)",
            sublabel: "Output — intracellular killers, anti-helminth/allergy effectors, neutrophil recruiters, and the brake.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "antigen + co-stimulation" },
          { from: "s1", to: "s2", label: "lineage commitment" },
          { from: "s2", to: "o1", label: "effector function" },
        ],
        caption:
          "The Th0 cell is a pluripotent decision point, and the local cytokine environment is the ballot. IL-12 (from dendritic cells) and IFN-γ vote Th1 — the intracellular-microbe program that activates macrophages and cytotoxic T cells; the rival Th2 cytokines IL-4 and IL-10 vote against it. IL-2 and IL-4 vote Th2 — the eosinophil/IgE program for helminths and allergy; IFN-γ votes against Th2. TGF-β plus the inflammatory IL-1 and IL-6 vote Th17 — the neutrophil-recruitment program for extracellular bacteria and fungi; IFN-γ and IL-4 both oppose it. TGF-β with IL-2 (and without IL-6) votes Treg — the tolerance program secreting TGF-β, IL-10, and IL-35. The cross-inhibition is the point: responses polarize because each lineage's products actively repress the alternatives, which is why chronic infections and autoimmune diseases show skewed Th1/Th17 vs Th2/Treg balance.",
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "t-cell-selection-map",
      title: "The thymic school and the helper switchboard",
      caption:
        "An original KYP redraw of the source's differentiation diagram: the bone-marrow T-cell precursor entering the thymus as a double-positive CD4+ CD8+ thymocyte; the cortex (positive selection — self-peptide-MHC recognition earns a survival signal) and medulla (negative selection — high self-affinity means apoptosis or Treg diversion, AIRE-driven); single-positive CD8+ cytotoxic and CD4+ helper outputs to peripheral blood and lymph node; then the Th0 switchboard with each lineage's promoting (+) and inhibiting (−) cytokines (Th1: IFN-γ/IL-12 in, IL-4/IL-10 out; Th2: IL-2/IL-4 in, IFN-γ out; Th17: TGF-β/IL-1/IL-6 in, IFN-γ/IL-4 out; Treg: TGF-β/IL-2 in, IL-6 out).",
      notice:
        "The printed page's thymus illustration is copyrighted artwork (raster on pdf 122); this visual conveys its teaching content as an original KYP schematic — never a reproduction. The verbatim selection text and Secretes/Function table are the note's table and callout blocks.",
    },
    {
      kind: "table",
      title: "Helper subsets — Secretes / Function (verbatim)",
      intro: "The source's differentiation-diagram table for the four CD4+ lineages, verbatim.",
      columns: ["", "Secretes", "Function"],
      rows: [
        ["Th1", "IFN-γ, IL-2", "Activate macrophages and cytotoxic T cells"],
        ["Th2", "IL-4, IL-5, IL-6, IL-10, IL-13", "Activate eosinophils, ↑IgE"],
        ["Th17", "IL-17, IL-21, IL-22", "Induce neutrophilic infiltration"],
        ["Treg", "TGF-β, IL-10, IL-35", "Prevent autoimmunity (maintain tolerance)"],
      ],
      caption:
        "Read each lineage as secretes → recruits. Th1's IFN-γ/IL-2 arm macrophages and cytotoxic T cells for intracellular microbes; Th2's IL-4/5/6/10/13 arm eosinophils and class-switch to IgE for helminths and allergy; Th17's IL-17/21/22 pour neutrophils onto extracellular bacteria and fungi; Treg's TGF-β/IL-10/IL-35 hold the brake. (The printed Th2 function cell reads 'Activate eosinophils, ↑IgE' — the up-arrow is confirmed on the printed page.)",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "AIRE deficiency — autoimmune polyendocrine syndrome",
      body: "The autoimmune regulator (AIRE) protein drives negative selection by enabling medullary thymic epithelial cells to display organ-specific self antigens. Deficiency leads to autoimmune polyendocrine syndrome: Chronic mucocutaneous candidiasis, Hypoparathyroidism, Adrenal insufficiency, and Recurrent Candida infections. The candidiasis is prominent because anti-IL-17/AIRE-dependent tolerance to Candida fails — the fungus that Th17 immunity normally holds in check. Distinguish from IPEX (FOXP3 deficiency, dysfunctional Tregs — see the cytotoxic/regulatory note): AIRE fails BEFORE deletion (medulla cannot display self), FOXP3 fails AFTER selection (no suppressive brake).",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 6-year-old presents with chronic mucocutaneous candidiasis, tetany from hypocalcemia, and fatigue with hyperpigmentation; labs show low PTH and cortisol autoantibodies.",
        discriminator: "Mucocutaneous candidiasis + hypoparathyroidism + adrenal insufficiency",
        concept: "AIRE deficiency → autoimmune polyendocrine syndrome",
        answer:
          "AIRE drives negative selection in the thymic medulla by enabling display of organ-specific self antigens. Without AIRE, thymocytes with high self-affinity for parathyroid, adrenal, and other organ antigens are never deleted — they exit to the periphery and attack: hypoparathyroidism (tetany, low PTH), adrenal insufficiency (fatigue, hyperpigmentation), and chronic mucocutaneous + recurrent Candida infections (loss of IL-17-family tolerance to Candida).",
      },
      {
        stem: "A mouse strain has a thymus-specific defect: double-positive thymocytes cannot signal through their TCR when it contacts self-peptide–MHC in the cortex.",
        discriminator: "Death at the CORTEX stage = positive-selection failure",
        concept: "Positive selection keeps self-MHC recognizers",
        answer:
          "Positive selection in the thymic cortex keeps T cells that recognize self-peptides — double-positive thymocytes whose TCRs recognize self-peptide-MHC complexes receive a survival signal (needed for cooperation in immune responses). A TCR that cannot signal here earns no survival signal: the thymocyte dies by neglect, and the animal has virtually no mature CD4+ or CD8+ T cells despite a normal-looking thymus.",
      },
      {
        stem: "A patient with a chronic extracellular bacterial infection has biopsy findings dominated by neutrophil infiltration; the responding CD4+ lineage secretes IL-17, IL-21, and IL-22.",
        discriminator: "IL-17 family + neutrophils = Th17",
        concept: "Th17 lineage — differentiation and function",
        answer:
          "Th17 differentiation is promoted by TGF-β with IL-1 and IL-6 (and opposed by IFN-γ and IL-4). Th17 cells secrete IL-17, IL-21, and IL-22, which induce neutrophilic infiltration — the effector program for extracellular bacteria and fungi. Contrast Th1 (IFN-γ, IL-2; macrophages + CTLs) and Th2 (IL-4/5/6/10/13; eosinophils, ↑IgE).",
      },
    ],
    traps: [
      {
        a: "Positive selection deletes self-reactive cells",
        b: "NEGATIVE selection deletes self-reactive cells; positive selection KEEPS self-MHC recognizers",
        whyConfused: "'Positive' sounds like the desirable outcome (tolerance), and both happen in the thymus.",
        keyDifference:
          "Positive selection (CORTEX) is a survival gate: TCRs that recognize self-peptide-MHC receive a survival signal — self-recognition is REQUIRED, not punished, because the TCR must be able to use MHC. Negative selection (MEDULLA) is the deletion gate: TCRs with HIGH affinity for self antigens undergo apoptosis or become Tregs. Cortex keeps; medulla culls.",
        clue: "Any stem naming a thymic zone or asking which selection recognizes vs deletes.",
      },
      {
        a: "Th2 differentiation is driven by IL-4 alone",
        b: "The source's diagram lists IL-2 AND IL-4 as Th2 promoters (IFN-γ inhibits)",
        whyConfused: "IL-4 is the classic Th2 cytokine; IL-2 is usually taught as generic T-cell growth factor.",
        keyDifference:
          "Follow the printed regulator set: Th2 (+) IL-2, IL-4 and (−) IFN-γ. IL-2 drives the clonal proliferation that precedes lineage commitment, IL-4 drives Th2 commitment itself, and IFN-γ from Th1 cells actively blocks Th2. The mirror image: Th1 (+) IFN-γ, IL-12 and (−) IL-4, IL-10.",
        clue: "Any 'which cytokine pushes/pulls which lineage' question using the source's +/- lists.",
      },
      {
        a: "Tregs develop only in the thymic medulla as a separate lineage",
        b: "Medullary high-self-affinity thymocytes can BECOME Tregs; peripheral Treg differentiation also runs on TGF-β + IL-2",
        whyConfused: "Treg is both a thymic fate decision and a peripheral differentiation outcome.",
        keyDifference:
          "In negative selection, thymocytes with high self-affinity 'undergo apoptosis OR become regulatory T cells' — the thymic Treg fate. In the periphery, the Th0 switchboard sends TGF-β + IL-2 (without IL-6) toward induced Tregs, which secrete TGF-β, IL-10, IL-35. Both routes produce the same brake; IL-6 is the toggle (IL-6 present → Th17, IL-6 absent → Treg).",
        clue: "Any stem contrasting Treg versus Th17 fate from the same TGF-β signal.",
      },
    ],
    pivots: [
      {
        lookAlike: "AIRE deficiency vs FOXP3 deficiency (which tolerance layer failed)",
        differentiator: "Central (thymic) vs peripheral (Treg) tolerance",
        correctPath:
          "AIRE deficiency = the thymic medulla cannot display organ-specific self antigens → negative selection fails → organ-specific autoimmunity: chronic mucocutaneous candidiasis, hypoparathyroidism, adrenal insufficiency, recurrent Candida infections. FOXP3 deficiency (IPEX) = thymic selection completed, but the Treg brake is broken (no functional CD3/CD4/CD25/FOXP3 suppressors; no IL-10/TGF-β) → enteropathy, endocrinopathy, dermatitis, male-infant diabetes. AIRE = the display fails; FOXP3 = the brake fails.",
      },
      {
        lookAlike: "Cortex vs medulla failure (where did the thymocyte die)",
        differentiator: "Which selection, which signal",
        correctPath:
          "Cortex failure (no self-peptide-MHC recognition) = death by neglect at the double-positive stage → no mature T cells at all (severe combined immunodeficiency phenotype if complete). Medulla failure (AIRE absent, self too strongly displayed or not displayed) = self-reactive clones escape deletion → organ-specific autoimmunity with intact T-cell counts. Location + cell count distinguishes them.",
      },
    ],
    miniCase: {
      vignette:
        "A 5-year-old girl is referred for recurrent oral and esophageal Candida infections since age 2 that respond only temporarily to antifungals. Over the past year she has had two hospitalizations: once for carpopedal spasm with serum calcium 6.8 mg/dL and undetectable PTH, and once for hypotension and hyperpigmentation with low morning cortisol and anti-21-hydroxylase antibodies. Her T-cell count, immunoglobulins, and vaccine antibody responses are normal. Genetic testing is pending.",
      question:
        "Which protein's deficiency best explains this patient's combined endocrine and candidal phenotype?",
      options: [
        {
          label: "A",
          text: "Autoimmune regulator (AIRE) — failed display of organ-specific self antigens in the thymic medulla, impairing negative selection",
          correct: true,
          why: "Correct — AIRE drives negative selection by enabling medullary thymic epithelial cells to express organ-specific proteins (parathyroid, adrenal, pancreatic, gut). Without AIRE, self-reactive thymocytes against these organs escape deletion and attack them: hypoparathyroidism (low PTH, tetany, hypocalcemia) and adrenal insufficiency (low cortisol, hyperpigmentation, anti-21-hydroxylase). The chronic mucocutaneous candidiasis reflects failed tolerance to Candida antigens. T-cell counts are normal because selection otherwise proceeds — only self-tolerance to the displayed organ set is lost.",
        },
        {
          label: "B",
          text: "FOXP3 — loss of regulatory T-cell function causing immune dysregulation, polyendocrinopathy, enteropathy, X-linked syndrome",
          why: "FOXP3 deficiency (IPEX) also produces autoimmunity and endocrinopathy, but the classic IPEX presentation is male infants with enteropathy, dermatitis, early-onset diabetes, and eczema — and Treg function (not antigen display) is the failed layer. This girl's dominant candidiasis + hypoparathyroidism + adrenal insufficiency with normal T-cell numbers fits AIRE's negative-selection failure.",
        },
        {
          label: "C",
          text: "RAG1/2 — failure of V(D)J recombination, so no TCR diversity is generated for either selection",
          why: "RAG failure would eliminate TCR rearrangement entirely: no double-positive thymocytes with diverse receptors, no mature T cells, severe combined immunodeficiency with LOW T-cell counts and opportunistic infections — not organ-specific autoimmunity with normal counts.",
        },
        {
          label: "D",
          text: "IL-12 receptor — inability to generate Th1 responses, with mycobacterial and salmonella susceptibility",
          why: "IL-12 signaling failure produces Th1 defects (IFN-γ deficiency phenotype): disseminated mycobacterial and salmonella infections, not organ-specific autoimmunity. IL-12 is a Th1 promoter in the peripheral switchboard, not a tolerance protein.",
        },
        {
          label: "E",
          text: "MHC class II deficiency — no CD4+ T-cell selection, producing a bare-lymphocyte phenotype",
          why: "MHC II absence fails positive selection of CD4+ cells (no self-peptide-MHC II recognition in the cortex) → low CD4+ counts, impaired antibody responses, SCID-like infections. Her normal T-cell counts and vaccine responses argue against a selection or MHC defect; the issue is deletion of organ-specific self-reactive clones.",
        },
      ],
      reasoning:
        "The vignette assembles the AIRE-deficiency tetrad from the source: Chronic mucocutaneous candidiasis, Hypoparathyroidism (tetany, undetectable PTH), Adrenal insufficiency (low cortisol, hyperpigmentation, adrenal autoantibodies), and Recurrent Candida infections. The discriminator against the other tolerance/selection options is the PATTERN: organ-specific autoimmunity (parathyroid + adrenal) with NORMAL T-cell counts and function — selection happened, but the medulla could not display these organs' antigens for deletion. Distractors fail at different layers: RAG (no repertoire), MHC II (no CD4 selection), IL-12R (no Th1 effector function), FOXP3 (no Treg brake — different syndrome, male infants, enteropathy-dominant).",
    },
  },
  mnemonics: [
    {
      code: "\u201cThe cortex keeps; the medulla culls.\u201d",
      meaning:
        "KYP's key for the two thymic selections: POSITIVE selection in the CORTEX keeps T cells that recognize self-peptide-MHC (they receive a survival signal — the ability to use MHC is required for cooperation in immune responses). NEGATIVE selection in the MEDULLA culls T cells that bind self too strongly (apoptosis, or diversion to become Tregs).",
      memorizes: "Which selection happens where, and what each does",
      whenToUse: "Any thymus-zone or selection-direction question.",
      clinical: "Cortex failure → no mature T cells; medulla failure (AIRE) → organ-specific autoimmunity with normal counts.",
    },
    {
      code: "\u201cNo AIRE, no self-display: the medulla goes blind and the glands pay — Candida, Hypopara, Adrenal, Recurrent Candida.\u201d",
      meaning:
        "KYP's key for the AIRE-deficiency syndrome: AIRE is what lets the thymic medulla DISPLAY organ-specific self antigens for negative selection. Without it the medulla is blind to parathyroid, adrenal, and Candida antigens — the four-organ phenotype is chronic/recurrent Candida infections (mucocutaneous), Hypoparathyroidism, and Adrenal insufficiency.",
      memorizes: "AIRE function + autoimmune polyendocrine syndrome components",
      whenToUse: "Any vignette with candidiasis plus hypocalcemia/low PTH plus adrenal insufficiency.",
      clinical: "Autoimmune polyendocrine syndrome type 1: check PTH, cortisol, and Candida when two of the three appear.",
    },
    {
      code: "\u201cIL-6 is the Th17/Treg toggle: with it, TGF-β makes Th17; without it, TGF-β + IL-2 makes the brake.\u201d",
      meaning:
        "KYP's key for the switchboard's most-tested fork: TGF-β is the shared starting signal. Add inflammatory IL-1/IL-6 → Th17 (IL-17/21/22, neutrophil recruitment). Omit IL-6, keep IL-2 → Treg (TGF-β/IL-10/IL-35, tolerance). The same cytokine becomes inflammation or regulation depending on IL-6.",
      memorizes: "The Th17 vs Treg differentiation fork and its regulators",
      whenToUse: "Any question on Treg vs Th17 differentiation signals or IL-6's role in autoimmunity.",
      clinical: "IL-6 blockade (tocilizumab) shifts the balance toward Treg — mechanistically relevant in autoimmune therapy.",
    },
  ],
  rapidReview: {
    s30: [
      "Positive selection: thymic CORTEX — recognize self-peptide MHC → survival signal",
      "Negative selection: thymic MEDULLA — high self-affinity → apoptosis or Treg",
      "AIRE drives negative selection; deficiency → autoimmune polyendocrine syndrome",
      "Output: single-positive CD8+ cytotoxic / CD4+ helper → blood → lymph node",
      "APS components: Chronic mucocutaneous candidiasis, Hypoparathyroidism, Adrenal insufficiency, Recurrent Candida",
    ],
    m3: [
      "Th1: (+) IFN-γ, IL-12 · (−) IL-4, IL-10 · secretes IFN-γ, IL-2 → macrophages + CTL",
      "Th2: (+) IL-2, IL-4 · (−) IFN-γ · secretes IL-4/5/6/10/13 → eosinophils, ↑IgE",
      "Th17: (+) TGF-β, IL-1, IL-6 · (−) IFN-γ, IL-4 · secretes IL-17/21/22 → neutrophils",
      "Treg: (+) TGF-β, IL-2 · (−) IL-6 · secretes TGF-β/IL-10/IL-35 → tolerance",
      "Double-positive CD4+ CD8+ = the thymocyte that enters selection",
    ],
    m10: [
      "Cortex keeps self-MHC recognizers; medulla deletes high-self-affinity clones",
      "AIRE failure = normal T-cell counts + organ-specific autoimmunity",
      "FOXP3 failure (IPEX) = Treg brake lost — different layer than AIRE",
      "IL-6 present → Th17; IL-6 absent + TGF-β/IL-2 → Treg",
      "IFN-γ suppresses Th2 AND Th17; IL-4/IL-10 suppress Th1",
    ],
  },
  recall: [
    {
      q: "Contrast positive and negative selection: location, criterion, and outcome.",
      a: "Positive selection — thymic cortex: keeps T cells that recognize self-peptides (to allow for cooperation in immune responses); double-positive thymocytes whose TCRs recognize self-peptide-MHC complexes receive a survival signal. Negative selection — thymic medulla: removes T cells that bind too strongly to self-peptides; thymocytes with TCRs of high affinity for self antigens undergo apoptosis or become regulatory T cells.",
    },
    {
      q: "What is AIRE's role, and what syndrome does its deficiency cause? List the components.",
      a: "The autoimmune regulator (AIRE) protein drives negative selection. Deficiency leads to autoimmune polyendocrine syndrome: Chronic mucocutaneous candidiasis, Hypoparathyroidism, Adrenal insufficiency, Recurrent Candida infections.",
    },
    {
      q: "For each helper lineage, name the differentiation signals (promoters and inhibitors).",
      a: "Th1: promoted by IFN-γ, IL-12; inhibited by IL-4, IL-10. Th2: promoted by IL-2, IL-4; inhibited by IFN-γ. Th17: promoted by TGF-β, IL-1, IL-6; inhibited by IFN-γ, IL-4. Treg: promoted by TGF-β, IL-2; inhibited by IL-6.",
    },
    {
      q: "What does each helper lineage secrete, and what does it recruit?",
      a: "Th1 secretes IFN-γ, IL-2 → activates macrophages and cytotoxic T cells. Th2 secretes IL-4, IL-5, IL-6, IL-10, IL-13 → activates eosinophils, ↑IgE. Th17 secretes IL-17, IL-21, IL-22 → induces neutrophilic infiltration. Treg secretes TGF-β, IL-10, IL-35 → prevents autoimmunity (maintains tolerance).",
    },
    {
      q: "Which cell stage enters the thymus, and which stages leave it?",
      a: "A T-cell precursor from the bone marrow enters as a double-positive (CD4+ CD8+) thymocyte; after positive selection in the cortex and negative selection in the medulla, single-positive CD8+ cytotoxic and CD4+ helper T cells leave via the peripheral blood to lymph nodes.",
    },
  ],
  related: [
    {
      title: "MHC Complex I and II: The Antigen Display Scaffolds",
      topicId: "mhc-complex",
      note: "Positive selection is a test of MHC use — the scaffolds the cortex checks are MHC I and II themselves.",
    },
    {
      title: "Major Functions of NK, B and T Cells",
      topicId: "nk-b-t-cell-functions",
      note: "The CD4+/CD8+ outputs of the thymic school are the effector roster this page's functions deploy.",
    },
    {
      title: "Effector T Cells: Cytotoxic, Regulatory & the Macrophage Interface",
      topicId: "cytotoxic-regulatory-t-cells",
      note: "The CD8+ kill, the Th1-macrophage loop, and the Treg brake (FOXP3/IPEX) — the peripheral fate of these lineages.",
    },
    {
      title: "Lymphoid Structures: Lymph Node, Spleen & Thymus",
      topicId: "lymphoid-structures",
      note: "The thymic architecture (cortex/medulla) where selection physically happens — and the lymph node where the switchboard runs.",
    },
  ],
  crossLinks: [
    {
      subject: "Endocrinology",
      connection: "AIRE deficiency is the autoimmune polyendocrine syndrome: hypoparathyroidism (tetany, hypocalcemia) and primary adrenal insufficiency (hyperpigmentation, low cortisol) — always check Candida when both glands fail.",
    },
    {
      subject: "Microbiology (Candida)",
      connection: "Chronic mucocutaneous candidiasis recurs when AIRE-dependent tolerance to Candida antigens fails — the Th17/IL-17 axis normally holds this commensal in check.",
    },
    {
      subject: "Dermatology & Rheumatology",
      connection: "Th17 and IL-17 drive neutrophilic infiltration in psoriasis and spondyloarthropathies — biologics targeting IL-17 and IL-23 exist for exactly this pathway.",
    },
    {
      subject: "Pharmacology (Immunosuppression)",
      connection: "Treg biology underlies tolerance-induction strategies and IL-2 low-dose therapy; IL-6 blockade tilts the Th17/Treg toggle toward regulation.",
    },
  ],
};
