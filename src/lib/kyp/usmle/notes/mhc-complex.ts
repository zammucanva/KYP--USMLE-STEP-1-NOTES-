import type { KypUsMLENote } from "../types";

// Immunology — Cellular Components (E-batch 21).
// Source: First Aid 2026, Part 1 pdf 120 / book 98
// (MHC I and II; bare lymphocyte syndrome)

export const mhcComplex: KypUsMLENote = {
  id: "mhc-complex",
  title: "MHC I vs MHC II and Bare Lymphocyte Syndrome",
  subtitle:
    "The major histocompatibility complex — MHC molecules encoded by HLA genes that present antigen fragments to T cells and bind T-cell receptors (TCRs). MHC I: HLA-A/B/C loci, one long chain plus one short chain (3 α, 1 β) with β2-microglobulin, expressed on all nucleated cells, APCs, and platelets (except RBCs), presenting endogenous antigens (viral or cytosolic proteins) loaded in the RER via TAP to CD8+ cytotoxic T cells. MHC II: HLA-DP/DQ/DR loci, two equal-length chains (2 α, 2 β), expressed on APCs, presenting exogenous antigens (bacterial proteins) loaded after invariant-chain release in a lysosome to CD4+ helper T cells. And bare lymphocyte syndrome — autosomal recessive ↓MHC expression → T-cell dysfunction: type I (TAP mutation → ↓MHC I → ↓CD8+ T cells, chronic respiratory infections with normal Ig) and type II (transcription factor mutations → ↓MHC II → ↓CD4+ T cells with SCID-like infections and ↓Ig).",
  subject: "Immunology",
  system: "Section II · High-Yield General Principles — Cellular Components",
  pilotCategory: "Cellular Components — MHC I vs II loci, structure, expression, antigen loading, TAP, β2-microglobulin, invariant chain, bare lymphocyte syndrome",
  difficulty: 2,
  readTime: 7,
  sourceRef:
    "First Aid 2026, Part 1 pp. 98 (MHC I and II; bare lymphocyte syndrome)",
  tags: [
    "MHC",
    "HLA",
    "MHC I",
    "MHC II",
    "HLA-A",
    "HLA-B",
    "HLA-C",
    "HLA-DP",
    "HLA-DQ",
    "HLA-DR",
    "TAP",
    "transporter associated with antigen processing",
    "beta-2 microglobulin",
    "invariant chain",
    "CD8",
    "CD4",
    "endogenous antigen",
    "exogenous antigen",
    "RER",
    "lysosome",
    "bare lymphocyte syndrome",
    "cytotoxic T cells",
    "helper T cells",
  ],
  core: {
    what: "MHC molecules are encoded by HLA genes; they present antigen fragments to T cells and bind T-cell receptors (TCRs). MHC I is encoded at HLA-A, HLA-B, and HLA-C (loci have 1 letter); it is built from 1 long chain and 1 short chain (3 α, 1 β) and associates with β2-microglobulin. It is expressed on all nucleated cells, APCs, and platelets (except RBCs), binds TCR and CD8 (CD8 × MHC 1 = 8), and presents endogenous antigens (eg, viral or cytosolic proteins) to CD8+ cytotoxic T cells — with antigen peptides loaded onto MHC I in the RER after delivery via TAP (transporter associated with antigen processing). MHC II is encoded at HLA-DP, HLA-DQ, and HLA-DR (loci have 2 letters); it is built from 2 equal-length chains (2 α, 2 β), is expressed on APCs, binds TCR and CD4 (CD4 × MHC 2 = 8), and presents exogenous antigens (eg, bacterial proteins) to CD4+ helper T cells — with antigen loaded following release of the invariant chain in a lysosome. Bare lymphocyte syndrome is autosomal recessive ↓MHC expression → T-cell dysfunction: type I is a TAP mutation → ↓MHC I → ↓CD8+ T cells → chronic respiratory infections, skin granulomas, vasculitis, with normal Ig; type II is transcription factor mutations → ↓MHC II → ↓CD4+ T cells + antigen-presenting cell/B-cell dysfunction → SCID-like infections with ↓Ig; treatment is allogeneic hematopoietic stem cell transplant and IVIG.",
    why: "Everything downstream in immunology routes through this table: which cell displays which antigen to which T cell. The endogenous/exogenous split explains why viruses (which make proteins inside the cell) are CD8 business while extracellular bacteria (phagocytosed) are CD4 business — and the loading machinery (TAP/RER vs invariant chain/lysosome) is the drug-and-disease handle: TAP failure is bare lymphocyte syndrome type I. The expression row predicts histology and transplantation: every nucleated cell can wave an MHC I flag (which is also why RBCs, lacking MHC I, are invisible to CD8 and why platelets matter in transfusion), while only professional APCs carry MHC II. The CD8×1=8 and CD4×2=8 arithmetic is the single most reliable exam key.",
    keyIdea: "One scaffold, two settings. Same job — hold a peptide in a groove for a TCR — but MHC I uses a long chain (α1-α2-α3) plus β2-microglobulin, grabs ENDINGENOUS peptide in the RER (delivered by TAP from the cytosol), shows it to CD8 cytotoxic T cells, and stands on every nucleated cell plus platelets. MHC II uses two equal-length chains (α1-α2, β1-β2), takes up EXOGENous peptide in a lysosome after the invariant chain vacates the groove, shows it to CD4 helper T cells, and stands only on APCs. Loci letters sort the genes (A/B/C = 1 letter = class I; DP/DQ/DR = 2 letters = class II). When the scaffold fails: bare lymphocyte syndrome — TAP mutation kills MHC I loading (↓CD8, chronic respiratory infections, normal Ig); transcription factor mutations kill MHC II expression (↓CD4, APC/B-cell dysfunction, ↓Ig, SCID-like).",
  },
  mechanisms: [
    {
      id: "mhc-i-endogenous-presentation",
      title: "The endogenous route — cytosol → TAP → RER → MHC I → CD8",
      context: "MHC I antigen presentation (all nucleated cells)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "An endogenous antigen appears in the cytosol: viral proteins made by the cell's own ribosomes, or cytosolic/ tumor proteins",
            sublabel: "Input — the cell's inside story.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Cytosolic proteolysis generates peptide fragments",
            sublabel: "Process — the proteasome grinds intracellular proteins.",
            variant: "process",
          },
          {
            id: "s2",
            label: "TAP (transporter associated with antigen processing) pumps the peptides into the RER",
            sublabel: "Process — the one-way ticket into the ER lumen.",
            variant: "process",
          },
          {
            id: "s3",
            label: "Peptides load onto MHC I (long α chain + β2-microglobulin) in the RER and the complex travels to the cell surface",
            sublabel: "Process — groove filled before export.",
            variant: "process",
          },
          {
            id: "o1",
            label: "TCR + CD8 on a cytotoxic T cell recognizes the MHC I–peptide complex → the infected cell is killed",
            sublabel: "Output — CD8 × MHC 1 = 8.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "cytosolic proteins" },
          { from: "s1", to: "s2", label: "peptides" },
          { from: "s2", to: "s3", label: "into RER" },
          { from: "s3", to: "o1", label: "surface display" },
        ],
        caption:
          "Because every nucleated cell builds MHC I, every nucleated cell files a daily report of its own cytosol — which is exactly what a virus cannot avoid triggering. The peptide is generated inside, pumped into the RER by TAP, loaded into the groove of the nascent MHC I (α1/α2 domains form the groove; α3 pairs with β2-microglobulin), and displayed for CD8 patrol. TAP failure (bare lymphocyte syndrome type I) strands the peptides in the cytosol: MHC I is poorly loaded, CD8+ T cells lack positive selection and dwindle, and chronic respiratory infections, skin granulomas, and vasculitis follow — with normal Ig, because the MHC II/B-cell axis is intact.",
      },
    },
    {
      id: "mhc-ii-exogenous-presentation",
      title: "The exogenous route — phagosome → lysosome → MHC II → CD4",
      context: "MHC II antigen presentation (APCs)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "An exogenous antigen is taken up by a professional APC: bacterial proteins, extracellular debris",
            sublabel: "Input — the outside story.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Endocytosis/phagocytosis delivers the antigen to acidic compartments",
            sublabel: "Process — the sampling route.",
            variant: "process",
          },
          {
            id: "s2",
            label: "In a lysosome, the invariant chain is released from the MHC II groove and the exogenous peptide loads",
            sublabel: "Process — the invariant chain is the placeholder that vacates on arrival.",
            variant: "process",
          },
          {
            id: "s3",
            label: "The MHC II–peptide complex travels to the APC surface",
            sublabel: "Process — display on the professional presenter.",
            variant: "process",
          },
          {
            id: "o1",
            label: "TCR + CD4 on a helper T cell recognizes the complex → the helper program starts",
            sublabel: "Output — CD4 × MHC 2 = 8.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "endocytosis" },
          { from: "s1", to: "s2", label: "lysosome" },
          { from: "s2", to: "s3", label: "invariant chain released" },
          { from: "s3", to: "o1", label: "surface display" },
        ],
        caption:
          "MHC II is the APC's specialty: the groove (α1 + β1 domains of the two equal-length chains) is born blocked by the invariant chain, so it cannot accidentally grab endogenous peptides in the RER — the placeholder comes out only in the lysosome, where exogenous peptides wait. Transcription-factor failure of MHC II expression (bare lymphocyte syndrome type II) leaves the helper arm unprimed: ↓CD4+ T cells plus antigen-presenting cell and B-cell dysfunction, SCID-like infections, and ↓Ig — and allogeneic hematopoietic stem cell transplant with IVIG is the treatment for both types.",
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "mhc-structure-comparison",
      title: "The two scaffolds, side by side",
      caption:
        "An original KYP redraw of the source's two molecular diagrams: MHC I (α1-α2 groove holding an endogenous peptide, α3 domain, β2-microglobulin short chain, transmembrane tail, CD8 binding, TAP/RER loading box, expression on all nucleated cells/APCs/platelets except RBCs) beside MHC II (equal-length α and β chains with the α1-β1 groove holding an exogenous peptide, invariant-chain/lysosome loading box, CD4 binding, APC-only expression), with the loci strip (HLA-A/B/C one letter; HLA-DP/DQ/DR two letters) and the CD8×1=8 / CD4×2=8 arithmetic.",
      notice:
        "The source presents two labeled molecular structure diagrams and a seven-row table (pdf 120 / book 98); KYP redraws both diagrams as one comparative schematic — the verbatim table is the note's next block.",
    },
    {
      kind: "table",
      title: "MHC I vs MHC II — verbatim",
      intro: "The source's seven-row comparison table, verbatim.",
      columns: ["", "MHC I", "MHC II"],
      rows: [
        ["LOCI", "HLA-A, HLA-B, HLA-C — MHC I loci have 1 letter", "HLA-DP, HLA-DQ, HLA-DR — MHC II loci have 2 letters"],
        ["BINDING", "TCR and CD8 (CD8 × MHC 1 = 8)", "TCR and CD4 (CD4 × MHC 2 = 8)"],
        ["STRUCTURE", "1 long chain, 1 short chain (3 α, 1 β)", "2 equal-length chains (2 α, 2 β)"],
        ["EXPRESSION", "All nucleated cells, APCs, platelets (except RBCs)", "APCs"],
        ["FUNCTION", "Present endogenous antigens (eg, viral or cytosolic proteins) to CD8+ cytotoxic T cells", "Present exogenous antigens (eg, bacterial proteins) to CD4+ helper T cells"],
        ["ANTIGEN LOADING", "Antigen peptides loaded onto MHC I in RER after delivery via TAP (transporter associated with antigen processing)", "Antigen loaded following release of invariant chain in a lysosome"],
        ["ASSOCIATED PROTEINS", "β2-microglobulin", "Invariant chain"],
      ],
      caption:
        "Seven rows, seven discriminating questions. The mnemonics printed in the table itself — loci letter counts (1 vs 2) and the CD8×1=8 / CD4×2=8 products — are the fastest keys; the loading row is the mechanistic one that bare lymphocyte syndrome type I (TAP) breaks; the expression row explains transplantation histocompatibility and why RBCs are the exception.",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "Bare lymphocyte syndrome — when the scaffold is missing",
      body: "Autosomal recessive. ↓ MHC expression → T-cell dysfunction. Type I: TAP mutation → ↓ MHC I → ↓ CD8+ T cells → chronic respiratory infections, skin granulomas, vasculitis; normal Ig. Type II: transcription factor mutations → ↓ MHC II → ↓ CD4+ T cells + antigen-presenting cell/B-cell dysfunction → SCID-like infections; ↓ Ig. Treatment: allogeneic hematopoietic stem cell transplant, IVIG.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A child has recurrent severe viral respiratory infections and is found to have very low CD8+ T-cell counts with normal immunoglobulin levels; skin granulomas and vasculitis are noted.",
        discriminator: "↓CD8 with normal Ig = isolated MHC I failure",
        concept: "Bare lymphocyte syndrome type I (TAP mutation)",
        answer:
          "A TAP mutation strands endogenous peptides in the cytosol: MHC I cannot be loaded in the RER, surface MHC I falls, and CD8+ T cells lose positive selection (↓MHC I → ↓CD8+ T cells). The result is chronic respiratory infections, skin granulomas, and vasculitis — but Ig is normal because the MHC II/B-cell axis is untouched. Contrast type II, where transcription factor mutations abolish MHC II: ↓CD4+ T cells, APC/B-cell dysfunction, SCID-like infections, and ↓Ig.",
      },
      {
        stem: "A virus-infected cell presents viral peptide on its surface to a cytotoxic T lymphocyte; the question asks which MHC molecule and which loading compartment were used.",
        discriminator: "Endogenous antigen + CD8 = MHC I + RER (TAP)",
        concept: "The endogenous presentation route",
        answer:
          "Viral proteins synthesized in the cytosol are degraded, pumped into the RER by TAP (transporter associated with antigen processing), loaded onto MHC I (3 α + 1 β chain complex with β2-microglobulin), and displayed to TCR + CD8 on cytotoxic T cells. MHC I stands on all nucleated cells and platelets (not RBCs), which is how every infected cell becomes a target.",
      },
      {
        stem: "A dendritic cell presents phagocytosed bacterial antigen to a helper T cell; the question asks which molecule held the peptide and what occupied its groove during assembly.",
        discriminator: "Exogenous antigen + CD4 = MHC II + invariant chain",
        concept: "The exogenous presentation route",
        answer:
          "Exogenous (bacterial) protein taken up by the APC is degraded in the lysosome, where the invariant chain — which had blocked the MHC II groove during assembly — is released, and the peptide loads. The complex (two equal-length chains, 2 α and 2 β) displays to TCR + CD4 on helper T cells. MHC II expression is the APC's professional signature.",
      },
      {
        stem: "A pharmacology question asks which immune cells lose their targeting when a tumor downregulates MHC I, and which cell population compensates.",
        discriminator: "MHC I loss blinds CD8 but activates NK",
        concept: "Missing-self recognition",
        answer:
          "With MHC I downregulated, CD8+ cytotoxic T cells can no longer see the tumor's endogenous peptides — but NK cells, which are triggered by the ABSENCE of self-MHC I, attack the MHC-I-negative cell. RBCs, the physiologic MHC-I-negative cell, are the proof that this axis is normally silent when MHC I is legitimately absent.",
      },
    ],
    traps: [
      {
        a: "MHC II is found on all nucleated cells",
        b: "MHC II is on APCs only; MHC I is on all nucleated cells + platelets",
        whyConfused: "Both are 'MHC' and both present antigen.",
        keyDifference:
          "The expression rows differ absolutely: MHC I — all nucleated cells, APCs, platelets (except RBCs); MHC II — APCs. A cell's MHC I flag is universal (self-report of the cytosol); MHC II is the professional presenter's badge. This is also the transplantation and transfusion relevance: platelets carry MHC I.",
        clue: "Any 'which cells express MHC II' question.",
      },
      {
        a: "β2-microglobulin is part of MHC II",
        b: "β2-microglobulin is the short chain associated with MHC I; the invariant chain is MHC II's associated protein",
        whyConfused: "Both are 'associated proteins' in the table's last row.",
        keyDifference:
          "MHC I = 1 long chain (α1-α2-α3) + 1 short chain: β2-microglobulin. MHC II = 2 equal-length chains; its associated protein is the invariant chain that blocks the groove until the lysosome. β2-microglobulin is also the amyloid of dialysis-associated amyloidosis — an MHC I connection.",
        clue: "Any associated-protein or chain-structure question.",
      },
      {
        a: "Bare lymphocyte syndrome lowers Ig in every case",
        b: "Type I has NORMAL Ig; only type II has ↓Ig",
        whyConfused: "Both are 'immunodeficiency' with autosomal recessive inheritance.",
        keyDifference:
          "Type I (TAP mutation, ↓MHC I, ↓CD8) leaves the MHC II axis — and B cells — intact: normal Ig. Type II (transcription factor mutations, ↓MHC II) breaks helper T-cell priming AND antigen-presenting cell/B-cell function: ↓Ig with SCID-like infections. The Ig level is the fastest discriminator between the two types.",
        clue: "Any BLS-type question with an Ig level in the stem.",
      },
      {
        a: "Exogenous antigens are presented on MHC I to CD4 cells",
        b: "Exogenous → MHC II → CD4; endogenous → MHC I → CD8",
        whyConfused: "Cross-presentation blurs the neat rule.",
        keyDifference:
          "The canonical routes keep antigen origin and MHC class paired: what the cell synthesized (viral, cytosolic) rides MHC I to CD8; what the cell ingested (bacterial, extracellular) rides MHC II to CD4. Cross-presentation exists (dendritic cells can shuttle exogenous antigen onto MHC I) but is the exception the exam uses to test whether you know the rule first.",
        clue: "Any origin-to-MHC-to-coreceptor matching question.",
      },
    ],
    pivots: [
      {
        lookAlike: "The two bare lymphocyte syndrome types",
        differentiator: "MHC class lost → T-cell subset lost → Ig level",
        correctPath:
          "Type I: TAP mutation → ↓MHC I → ↓CD8+ T cells → chronic respiratory infections, skin granulomas, vasculitis — NORMAL Ig. Type II: transcription factor mutations → ↓MHC II → ↓CD4+ T cells + APC/B-cell dysfunction → SCID-like infections — ↓Ig. Both autosomal recessive; both treated with allogeneic hematopoietic stem cell transplant and IVIG.",
      },
      {
        lookAlike: "The immunodeficient child with low CD8 vs low CD4",
        differentiator: "Which MHC pathway failed",
        correctPath:
          "Low CD8+ with normal Ig and viral/granulomatous trouble → MHC I pathway (TAP — bare lymphocyte type I). Low CD4+ with ↓Ig and SCID-like opportunistic infections → MHC II pathway (transcription factors — bare lymphocyte type II; consider also MHC II regulatory failure vs other SCID forms, distinguished by the MHC expression assay).",
      },
    ],
    miniCase: {
      vignette:
        "A 3-year-old girl is referred for evaluation of recurrent sinopulmonary infections since infancy, including three hospitalizations for pneumonia. She has been treated for recurrent skin nodules that biopsied as noncaseating granulomas, and last year developed a palpable purpuric rash on her legs diagnosed as leukocytoclastic vasculitis. Laboratory evaluation shows a normal complete blood count, normal quantitative immunoglobulins (IgG, IgM, IgA all appropriate for age), and intact antibody responses to prior vaccinations. Flow cytometry shows a markedly reduced CD8+ T-cell population with a normal CD4+ count; HLA typing on her lymphocytes demonstrates profoundly diminished class I MHC expression.",
      question:
        "Which molecular defect best explains this child's findings, and what is the expected CD4+ T-cell and immunoglobulin profile?",
      options: [
        {
          label: "A",
          text: "A TAP (transporter associated with antigen processing) mutation — peptides cannot reach the RER, MHC I is poorly loaded, CD8+ T cells are deficient; CD4+ T cells and Ig are normal",
          correct: true,
          why: "Correct — this is bare lymphocyte syndrome type I: TAP mutation → ↓MHC I → ↓CD8+ T cells → chronic respiratory infections, skin granulomas, vasculitis, with normal Ig. The MHC II axis (CD4+ T cells, B-cell help, antibody production) is intact, which is exactly the profile in the vignette.",
        },
        {
          label: "B",
          text: "A transcription factor mutation abolishing MHC II expression — CD4+ T cells would be deficient with hypogammaglobulinemia",
          why: "That is bare lymphocyte syndrome type II: it would produce ↓CD4+ T cells, APC/B-cell dysfunction, ↓Ig, and SCID-like infections — the opposite of this child's normal CD4 count and normal antibody responses.",
        },
        {
          label: "C",
          text: "A RAG1 mutation with failed V(D)J recombination — both T and B cells would be absent",
          why: "RAG mutations cause SCID with absent T and B cells (T–B– SCID) — this child has a normal CD4 count, normal Ig, and specific loss of CD8+ only.",
        },
        {
          label: "D",
          text: "A β2-microglobulin gene mutation — MHC I would be unstable but CD8+ T cells would be normal",
          why: "β2-microglobulin is the MHC I short chain; its loss also impairs MHC I stability and CD8+ T-cell development (a known BLS type I–like mechanism), so CD8+ would NOT be normal — and class I expression would be low. The distractor is internally inconsistent.",
        },
        {
          label: "E",
          text: "DiGeorge syndrome with thymic aplasia — both CD4+ and CD8+ T cells would be depressed",
          why: "Thymic aplasia removes the selection organ for ALL T cells, not CD8 selectively, and would not explain the granulomas/vasculitis or the isolated class I loss.",
        },
      ],
      reasoning:
        "The vignette is the type I/type II discriminator in one patient: selectively low CD8+ T cells, intact CD4+ counts, normal Ig with intact vaccine responses, plus the type I signature triad (chronic respiratory infections, skin granulomas, vasculitis) and confirmed low class I MHC. The chain is mechanical: TAP is the only route peptides have into the RER; without it, MHC I groves stay empty, surface class I collapses, and CD8+ T cells that require class I for positive selection never mature. The CD4/MHC II axis runs on the invariant chain and lysosomal loading instead — untouched, hence the normal helper and antibody arms. Treatment for both BLS types is allogeneic hematopoietic stem cell transplant with IVIG support.",
    },
  },
  mnemonics: [
    {
      code: "\u201cCD8 × MHC 1 = 8 · CD4 × MHC 2 = 8.\u201d",
      meaning:
        "The source's own printed arithmetic: multiply the coreceptor by the MHC class and both equal 8 — pairing CD8 with MHC I and CD4 with MHC II in one operation.",
      memorizes: "Coreceptor–MHC pairing",
      whenToUse: "Any 'which coreceptor binds which MHC' question.",
      clinical: "CD8+ cytotoxic T cells read MHC I (endogenous); CD4+ helper T cells read MHC II (exogenous).",
    },
    {
      code: "\u201cMHC I loci have 1 letter (A, B, C); MHC II loci have 2 letters (DP, DQ, DR).\u201d",
      meaning:
        "The source's own loci mnemonic: class I genes are single-letter HLA loci (HLA-A, HLA-B, HLA-C); class II genes are two-letter loci (HLA-DP, HLA-DQ, HLA-DR).",
      memorizes: "Which HLA loci belong to which class",
      whenToUse: "Any HLA-locus-to-class matching question (and the HLA-disease association chapter ahead).",
      clinical: "The HLA-disease associations in the next topic (B27, DQ2/DQ8, DR...) inherit this letter rule.",
    },
    {
      code: "\u201cOne flag for all; two flags for professionals.\u201d",
      meaning:
        "KYP's key for the structure/expression pair: MHC I is ONE scaffold (a long chain + short β2-microglobulin) flying on every nucleated cell (and platelets — RBCs excepted), while MHC II is TWO equal chains carried only by the professional presenters (APCs), its groove guarded by the invariant chain until the lysosome.",
      memorizes: "Structure + expression + associated protein per class",
      whenToUse: "Any expression-range or associated-protein question.",
      clinical: "MHC I loss on a tumor cell → NK-cell attack (missing self); MHC II restricted to APCs is why helper responses need dendritic cells, macrophages, and B cells.",
    },
  ],
  rapidReview: {
    s30: [
      "MHC I: HLA-A/B/C, 1 long + 1 short chain (3 α, 1 β), β2-microglobulin",
      "MHC II: HLA-DP/DQ/DR, 2 equal-length chains (2 α, 2 β), invariant chain",
      "CD8 × MHC 1 = 8 · CD4 × MHC 2 = 8",
      "MHC I on all nucleated cells + platelets (except RBCs); MHC II on APCs only",
    ],
    m3: [
      "MHC I: endogenous (viral, cytosolic) → RER loading via TAP → CD8+ cytotoxic",
      "MHC II: exogenous (bacterial) → lysosome, invariant chain released → CD4+ helper",
      "BLS type I: TAP mutation → ↓MHC I → ↓CD8, chronic respiratory infections + granulomas + vasculitis, NORMAL Ig",
      "BLS type II: transcription factor mutations → ↓MHC II → ↓CD4 + APC/B-cell dysfunction → SCID-like, ↓Ig",
    ],
    m10: [
      "BLS treatment: allogeneic hematopoietic stem cell transplant + IVIG",
      "RBCs are the MHC-I-negative cell; platelets DO carry MHC I",
      "MHC encoded by HLA genes; present antigen fragments to T cells, bind TCRs",
      "β2-microglobulin (MHC I short chain) is also dialysis-amyloid",
    ],
  },
  recall: [
    {
      q: "Name the HLA loci for each MHC class and the printed mnemonic that distinguishes them.",
      a: "MHC I: HLA-A, HLA-B, HLA-C — loci have 1 letter. MHC II: HLA-DP, HLA-DQ, HLA-DR — loci have 2 letters.",
    },
    {
      q: "Compare MHC I and MHC II chain structure and state each one's associated protein.",
      a: "MHC I: 1 long chain, 1 short chain (3 α, 1 β); associated protein β2-microglobulin. MHC II: 2 equal-length chains (2 α, 2 β); associated protein invariant chain.",
    },
    {
      q: "Which cells express MHC I, and what is the exception? Which cells express MHC II?",
      a: "MHC I: all nucleated cells, APCs, platelets — except RBCs. MHC II: APCs.",
    },
    {
      q: "Trace antigen loading for each MHC class.",
      a: "MHC I: antigen peptides are loaded onto MHC I in the RER after delivery via TAP (transporter associated with antigen processing) — endogenous peptides from the cytosol. MHC II: antigen is loaded following release of the invariant chain in a lysosome — exogenous peptides from endocytosed material.",
    },
    {
      q: "What antigen type and T-cell partner does each MHC class serve?",
      a: "MHC I presents endogenous antigens (eg, viral or cytosolic proteins) to CD8+ cytotoxic T cells (binds TCR and CD8). MHC II presents exogenous antigens (eg, bacterial proteins) to CD4+ helper T cells (binds TCR and CD4).",
    },
    {
      q: "Differentiate the two types of bare lymphocyte syndrome (inheritance, defect, T-cell loss, infections, Ig level) and give the treatment.",
      a: "Both autosomal recessive ↓MHC expression → T-cell dysfunction. Type I: TAP mutation → ↓MHC I → ↓CD8+ T cells → chronic respiratory infections, skin granulomas, vasculitis; normal Ig. Type II: transcription factor mutations → ↓MHC II → ↓CD4+ T cells + APC/B-cell dysfunction → SCID-like infections; ↓Ig. Treatment for both: allogeneic hematopoietic stem cell transplant, IVIG.",
    },
    {
      q: "Why do NK cells attack a tumor cell that has downregulated MHC I, and why is this not a problem for RBCs?",
      a: "NK cells are triggered by the absence of self-MHC I (missing-self recognition) — MHC I normally delivers the inhibitory signal that holds NK cells back. RBCs physiologically lack MHC I; NK tolerance to RBCs reflects the fact that RBCs also lack the ligands that activate NK cells and are not NK targets in circulation.",
    },
  ],
  related: [
    {
      title: "Innate vs Adaptive Immunity",
      topicId: "innate-vs-adaptive-immunity",
      note: "MHC-restricted recognition is the adaptive arm's specialty — the TCR side of the TLR comparison.",
    },
    {
      title: "HLA Subtypes Associated with Diseases",
      topicId: "hla-subtypes",
      note: "The HLA loci named here (B27, DQ2/DQ8, DR...) become disease associations in the next topic.",
    },
    {
      title: "Lymphocyte Activation, Peripheral Tolerance & Anergy",
      topicId: "lymphocyte-activation-tolerance",
      note: "Signal 1 (TCR + MHC) meets signal 2 (costimulation) — the activation gate this table's molecules open.",
    },
    {
      title: "T-Cell Development: Thymic Selection & Subset Lineages",
      topicId: "t-cell-development",
      note: "Positive selection is MHC-dependent — why ↓MHC in bare lymphocyte syndrome yields fewer CD8+ (or CD4+) T cells.",
    },
  ],
  crossLinks: [
    {
      subject: "Microbiology (Virology)",
      connection: "Viruses are endogenous-antigen factories: cytosolic viral proteins → TAP → MHC I → CD8 killing; some viruses downregulate MHC I and fall to NK cells instead.",
    },
    {
      subject: "Transplantation & Pathology",
      connection: "Graft rejection is MHC-driven — donor class I/II molecules are the immunologic fingerprints; BLS's MHC assays grew directly from transplant typing.",
    },
    {
      subject: "Nephrology (Dialysis amyloid)",
      connection: "β2-microglobulin, the MHC I short chain, accumulates in dialysis-associated amyloidosis — structure meeting clinical medicine.",
    },
    {
      subject: "Pharmacology (Immune checkpoint)",
      connection: "Tumor MHC I status determines whether CD8 T cells (MHC-restricted) or NK cells (missing-self) are the effective arm — the biology behind checkpoint-response prediction.",
    },
  ],
};
