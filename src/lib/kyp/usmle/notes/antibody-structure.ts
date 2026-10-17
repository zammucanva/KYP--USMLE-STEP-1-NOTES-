import type { KypUsMLENote } from "../types";

// Immunology — Immune Responses (E-batch 27).
// Source: First Aid 2026, Part 1 pdf 124 / book 102
// (Antibody structure and function)

export const antibodyStructure: KypUsMLENote = {
  id: "antibody-structure",
  title: "Antibody Structure & Function",
  subtitle:
    "The immunoglobulin anatomy every isotype and engineering question is built on. The antibody is a Y of two heavy chains and two light chains joined by disulfide bonds. Each FAB arm (Fragment, antigen binding) is built from a light chain (VL + CL domains) and part of a heavy chain (VH + CH1); the hypervariable V domains at the tips form the two antigen-binding sites — the idiotype — that recognize epitopes. The Fc stem is heavy-chain only (CH2 + CH3): Constant, Carboxy terminal, Complement binding (the Fc region of IgM and IgG fixes complement), Carbohydrate side chains, and Confers isotype (IgM, IgD, etc). The hinge provides flexibility between the Fab arms, allowing simultaneous binding to multiple epitopes. Chain contributions: the heavy chain contributes to Fc and Fab regions; the light chain contributes only to Fab. Diversity is generated antigen-independently (RAG1/RAG2 random VJ or V(D)J recombination, TdT random nucleotide addition, random heavy-light combination), while specificity is refined antigen-dependently (somatic hypermutation with affinity maturation in the variable region; isotype switching in the constant region). Functionally, antibodies neutralize (prevent bacterial adherence), opsonize (mark pathogens for phagocytic destruction via C3b), and activate complement (opsonization and lysis via MAC).",
  subject: "Immunology",
  system: "Section II · High-Yield General Principles — Immune Responses",
  pilotCategory: "Immune Responses — IgG Y anatomy (V/C domains, hinge, Fab/Fc), idiotype, isotype, diversity generation (RAG1/2, TdT), specificity refinement (somatic hypermutation, class switching), neutralization/opsonization/complement functions",
  difficulty: 2,
  readTime: 7,
  sourceRef:
    "First Aid 2026, Part 1 pp. 102 (Antibody structure and function)",
  tags: [
    "antibody structure",
    "immunoglobulin",
    "IgG",
    "heavy chain",
    "light chain",
    "Fab fragment",
    "Fc region",
    "hinge region",
    "idiotype",
    "isotype",
    "hypervariable region",
    "antigen-binding site",
    "epitope",
    "VH",
    "VL",
    "CH1",
    "CH2",
    "CH3",
    "CL",
    "disulfide bond",
    "complement binding",
    "macrophage binding",
    "neutralization",
    "opsonization",
    "C3b",
    "complement activation",
    "membrane attack complex",
    "MAC",
    "antibody diversity",
    "RAG1",
    "RAG2",
    "V(D)J recombination",
    "terminal deoxynucleotidyl transferase",
    "TdT",
    "somatic hypermutation",
    "affinity maturation",
    "isotype switching",
    "class switching",
    "constant region",
    "variable region",
  ],
  core: {
    what: "Antibodies are Y-shaped molecules of two heavy (H) and two light (L) chains joined by disulfide (SS) bonds, divided into functional regions. Each arm is a Fab fragment — Fragment, antigen binding — consisting of light and heavy chains; it recognizes antigens and determines the idiotype (the antigen-binding site), with the hypervariable VH and VL domains at the tips forming the two identical binding sites that recognize epitopes. The stem is the Fc region — the 5 C's: Constant, Carboxy terminal, Complement binding (the Fc region of IgM and IgG fixes complement), Carbohydrate side chains, and Confers (determines) isotype (IgM, IgD, etc). The hinge region provides flexibility between the Fab arms, allowing simultaneous binding to multiple epitopes. Chain contributions: the heavy chain contributes to Fc and Fab regions; the light chain contributes only to the Fab region. Antibody diversity is generated antigen-independently by (1) random recombination of VJ (light-chain) or V(D)J (heavy-chain) genes by RAG1 and RAG2, (2) random addition of nucleotides to DNA during recombination by terminal deoxynucleotidyl transferase (TdT), and (3) random combination of heavy chains with light chains; antibody specificity is generated antigen-dependently by (4) somatic hypermutation and affinity maturation (variable region) and (5) isotype switching (constant region). The three effector functions: neutralization (antibody prevents bacterial adherence), opsonization (antibody promotes phagocytosis by marking pathogens for destruction, with C3b), and complement activation (antibody activates complement, enhancing opsonization and lysis via the membrane attack complex).",
    why: "This anatomy is the reference frame for the entire antibody arm of the chapter: the isotype table (E28) is a tour of Fc differences (the 5th C — confers isotype); complement fixation (E29) starts at the Fc of IgM and IgG; the laboratory techniques (ELISA, flow cytometry) label Fc or Fab to exploit exactly this division of labor; and therapeutic monoclonal antibodies are engineered on the same chassis. The diversity-versus-specificity split is the developmental bridge from E26's activation biology: RAG1/RAG2 and TdT build the naive repertoire BEFORE any antigen (antigen-independent), while somatic hypermutation and isotype switching refine it AFTER antigen encounter (antigen-dependent) — the mechanistic reason vaccine responses improve with boosters. Each enzyme is also a disease: RAG1/RAG2 failure = SCID (no repertoire), TdT loss = reduced junctional diversity, and the step-4/5 machinery (AID-dependent) failure = hyper-IgM phenotypes.",
    keyIdea: "Hold the Y by its regions, not its chains. FAB (both chains): the recognizer — hypervariable VH/VL tips form the two identical antigen-binding sites (the idiotype) that read epitopes; light chains live ONLY here. HINGE (heavy chains): the flexible joint — lets both arms bind the same antigen at two epitopes simultaneously (avidity). FC (heavy chains only): the effector — the 5 C's: Constant, Carboxy terminal, Complement binding (IgM and IgG Fc fix complement), Carbohydrate side chains, Confers isotype. Then attach the generation timeline: DIVERSITY (antigen-independent, before any encounter): RAG1/RAG2 randomly recombine VJ (light) and V(D)J (heavy) genes; TdT randomly adds nucleotides at the junctions; heavy and light chains combine randomly — three random processes make the naive repertoire. SPECIFICITY (antigen-dependent, after encounter): somatic hypermutation + affinity maturation refine the variable region; isotype switching swaps the constant region. And the three outputs: neutralize (block adherence), opsonize (C3b marks for phagocytes), activate complement (MAC lysis).",
  },
  mechanisms: [
    {
      id: "fab-fc-division-of-labor",
      title: "The Fab/Fc division of labor — recognition upstairs, effectors downstairs",
      context: "How antibody anatomy maps to antibody function",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "An epitope appears (eg, a bacterial surface antigen)",
            sublabel: "Input — the molecular shape the antibody must recognize.",
            variant: "input",
          },
          {
            id: "s1",
            label: "FAB ARMS: hypervariable VH/VL domains form the antigen-binding sites — the idiotype — that recognize epitopes; the hinge flexes so both arms bind simultaneously",
            sublabel: "Process — Fab = Fragment, antigen binding; light chain contributes only here; heavy chain contributes to both Fab and Fc.",
            variant: "process",
          },
          {
            id: "s2",
            label: "FC STEM: once antigen is engaged, the constant heavy-chain stem recruits effectors — complement binding at CH2 (IgM and IgG fix complement) and macrophage binding",
            sublabel: "Process — the 5 C's: Constant, Carboxy terminal, Complement binding, Carbohydrate side chains, Confers isotype.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Three effector outputs: neutralization (prevent bacterial adherence) · opsonization (C3b marks the pathogen for phagocytosis) · complement activation (opsonization and lysis via MAC)",
            sublabel: "Output — recognition and destruction are physically separated so one binding module can pair with many effector modules.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "epitope-idiotype fit" },
          { from: "s1", to: "s2", label: "antigen engaged" },
          { from: "s2", to: "o1", label: "effector recruitment" },
        ],
        caption:
          "The Y-shape is a division of labor in hardware. The Fab arms carry the diversity: hypervariable loops in VH and VL form a three-dimensional pocket unique to each clone — the idiotype — and the two identical arms mean one antibody can cross-link two copies of the same epitope (the hinge's flexibility lets them reach multiple epitopes simultaneously, multiplying binding strength as avidity). The Fc stem carries the consequences: its constant heavy-chain domains are the same within an isotype (the 5th C — confers isotype), bind complement (the Fc of IgM and IgG fixes it), bear carbohydrate side chains, and present the carboxy terminal end. Because recognition (Fab) and effector function (Fc) are separate modules, the immune system can pair any specificity with any effector program — which is exactly what isotype switching (E26, step 5) rearranges, and what therapeutic antibody engineering exploits (humanized Fc on foreign Fab). The chain contributions follow: heavy chains build both regions, light chains only Fab.",
      },
    },
    {
      id: "diversity-vs-specificity-generation",
      title: "Diversity first (antigen-independent), specificity second (antigen-dependent)",
      context: "How the antibody repertoire is built and then refined",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A developing B cell must build a receptor before it has ever met antigen",
            sublabel: "Input — the naive repertoire problem: recognize anything, attack nothing (tolerance is selected separately).",
            variant: "input",
          },
          {
            id: "s1",
            label: "ANTIGEN-INDEPENDENT DIVERSITY: RAG1/RAG2 randomly recombine VJ (light-chain) and V(D)J (heavy-chain) gene segments; TdT randomly adds nucleotides at the junctions; heavy chains then combine with light chains at random",
            sublabel: "Process — three random processes in sequence: recombination, junctional addition, chain pairing. No antigen required.",
            variant: "process",
          },
          {
            id: "s2",
            label: "ANTIGEN-DEPENDENT SPECIFICITY: after antigen encounter, somatic hypermutation mutates the variable region and selection matures affinity; isotype switching swaps the constant region",
            sublabel: " Process — the response refines what diversity built: better fit (variable region) and the right format (constant region).",
            variant: "process",
          },
          {
            id: "o1",
            label: "A mature response: high-affinity, isotype-appropriate antibodies — and a memory pool that re-enters at this refined state",
            sublabel: "Output — the reason primary responses are IgM and slow, secondary responses are specific, fast, and high-affinity.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "before antigen" },
          { from: "s1", to: "s2", label: "antigen arrives" },
          { from: "s2", to: "o1", label: "affinity + isotype matured" },
        ],
        caption:
          "The source numbers the steps 1-5, and the split is the exam's favorite discriminator. Steps 1-3 build DIVERSITY without antigen: RAG1 and RAG2 cut and rejoin the V(D)J segments of the heavy chain and VJ segments of the light chain (each B cell assembles its own unique receptor); TdT adds random nucleotides at the junctions (junctional diversity — N-nucleotides, absent in most light chains, which is one reason heavy-chain rearrangement contributes more diversity); and any heavy chain can pair with any light chain (combinatorial pairing). Steps 4-5 refine SPECIFICITY after antigen: somatic hypermutation introduces point mutations in the VARIABLE region, and germinal-center selection keeps the B cells whose mutations improved the fit (affinity maturation); isotype switching replaces the CONSTANT region, changing the effector program without touching the antigen-binding site. Failures map to diseases: RAG1/RAG2 null mutations = no repertoire at all (T-B-NK+ SCID); AID defects (the enzyme behind steps 4-5) = hyper-IgM with preserved diversity.",
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "antibody-anatomy",
      title: "The IgG Y — regions, chains, and the function trio",
      caption:
        "An original KYP diagram of the antibody anatomy: the expanded Y with both Fab arms (VL/CL light-chain halves and VH/CH1 heavy-chain halves, hypervariable regions and epitopes at the tips), the hinge with its disulfide bonds (flexibility between Fab arms for simultaneous multi-epitope binding), the heavy-chain-only Fc stem (CH2/CH3 with complement and macrophage binding pointers), the domain key (C/V/L/H/SS), the region-jobs rail (Fab = idiotype; Hinge = flexibility; Fc = the 5 C's), the printed chain-contribution anchors, and the bottom function trio — neutralization, opsonization (C3b), and complement activation (MAC).",
      notice:
        "The printed page's antibody figure is copyrighted artwork; this visual conveys its teaching content as an original KYP schematic — never a reproduction. The verbatim region definitions and diversity steps are the note's table block.",
    },
    {
      kind: "table",
      title: "Region definitions and repertoire generation — verbatim",
      intro: "The source's region definitions and the five numbered steps, verbatim.",
      columns: ["", "Definition / steps (verbatim)"],
      rows: [
        ["Fab", "Fragment, antigen binding. Determines idiotype: antigen binding site."],
        ["Hinge region", "Provides flexibility between Fab arms, allowing simultaneous binding to multiple epitopes."],
        ["Fc (5 C's)", "Constant · Carboxy terminal · Complement binding · Carbohydrate side chains · Confers (determines) isotype (IgM, IgD, etc)."],
        ["Generation of antibody diversity (antigen independent)", "1. Random recombination of VJ (light-chain) or V(D)J (heavy-chain) genes by RAG1 and RAG2 · 2. Random addition of nucleotides to DNA during recombination by terminal deoxynucleotidyl transferase (TdT) · 3. Random combination of heavy chains with light chains."],
        ["Generation of antibody specificity (antigen dependent)", "4. Somatic hypermutation and affinity maturation (variable region) · 5. Isotype switching (constant region)."],
      ],
      caption:
        "Read the last two rows as a timeline: steps 1-3 happen BEFORE antigen (build the library — every B cell gets a random, unique binding site), steps 4-5 happen AFTER antigen (edit the entry — improve the fit in the variable region, choose the format in the constant region). The region rows are the anatomy: Fab decides WHAT binds; Fc decides WHAT HAPPENS NEXT; the hinge lets one molecule grab with both hands.",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "The four printed anchors — chain contributions and complement fixation",
      body: "Fab fragment consisting of light (L) and heavy (H) chains recognizes antigens. Fc region of IgM and IgG fixes complement. Heavy chain contributes to Fc and Fab regions. Light chain contributes only to Fab region. These four sentences are the structural facts every question hinges on: a light-chain question is always a Fab question; a complement-fixation question is always an Fc question and always names IgM and IgG; and the heavy chain's double citizenship is what lets isotype switching (constant region swap) preserve antigen binding (variable region untouched).",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 4-month-old infant with recurrent severe bacterial, viral, and fungal infections has laboratory studies showing lymphopenia with absent B cells and absent T cells; NK cells are normal. Bone marrow biopsy shows absent mature lymphoid precursors.",
        discriminator: "No B cells, no T cells, normal NK (T-B-NK+ SCID)",
        concept: "RAG1/RAG2 failure — no antigen-independent diversity",
        answer:
          "Steps 1-3 of diversity generation are antigen-independent: RAG1 and RAG2 randomly recombine VJ (light-chain) and V(D)J (heavy-chain) genes in B cells and the same machinery builds TCRs in T cells. Biallelic RAG loss means neither lineage assembles a receptor — no mature B cells, no mature T cells, normal NK cells (T-B-NK+ SCID). Hypomorphic RAG mutations allow some rearrangement and present as Omenn syndrome (oligoclonal, autoreactive T cells, erythroderma, lymphadenopathy).",
      },
      {
        stem: "A researcher treats purified IgG with an enzyme; analysis shows one intact antigen-binding bivalent piece and separate crystallizable fragments. A different enzyme yields a single bivalent antigen-binding piece that cannot crystallize.",
        discriminator: "Cleavage pattern maps onto Fab/Fc architecture",
        concept: "Proteolytic fragments reflect Fab/Fc separation (KYP bridge)",
        answer:
          "The domain architecture — two independent Fab arms and a separable Fc stem joined at a hinge — predicts the fragments: cleavage ABOVE the hinge releases intact Fab arms plus the Fc stem; cleavage BELOW the hinge leaves the two arms connected as a bivalent fragment with a damaged Fc. (Enzyme names and exact products are laboratory-medicine content beyond this printed page; the principle this page supplies is that the Y's modular design is what makes such fragments possible.)",
      },
      {
        stem: "A patient's secondary antibody response to influenza vaccine, measured 4 weeks after boost, shows a 40-fold rise in IgG with substantially higher binding affinity than the primary response's IgM.",
        discriminator: "Antigen-dependent specificity refinement after re-exposure",
        concept: "Somatic hypermutation + affinity maturation (variable region); isotype switching (constant region)",
        answer:
          "Steps 4 and 5 are antigen-dependent: after antigen encounter, somatic hypermutation introduces mutations in the VARIABLE region, and germinal-center selection retains B cells with improved fit (affinity maturation) — the secondary response's antibodies bind more tightly than the primary's. Isotype switching simultaneously swaps the CONSTANT region (IgM to IgG and others), which is why the primary response is IgM-dominant and the secondary is IgG-dominant, faster, and higher-affinity.",
      },
    ],
    traps: [
      {
        a: "Light chains contribute to the Fc region",
        b: "Light chains contribute ONLY to the Fab region",
        whyConfused: "Both chains are drawn throughout the Y's arms; the Fc looks like 'the rest.'",
        keyDifference:
          "The heavy chain is the long chain: it runs the full length of the molecule — VH/CH1 in the Fab arms AND CH2/CH3 in the Fc stem. The light chain is short: VL/CL live only in the Fab arms. This is why isotype switching (a constant-region change, heavy-chain territory) never alters the antigen-binding site — and why any light-chain question is a Fab question.",
        clue: "Any 'which chain builds which region' question.",
      },
      {
        a: "All antibodies fix complement equally",
        b: "The Fc region of IGM and IgG fixes complement (the printed pair)",
        whyConfused: "Complement activation is taught as a general antibody function.",
        keyDifference:
          "Complement fixation is an Fc function and is isotype-dependent: the source names IgM and IgG explicitly (IgM is the most efficient fixer — its pentamer presents five Fc regions; IgG fixes via its single Fc). IgE and IgD do not fix complement meaningfully. The anatomy makes the logic visible: complement binding is a property of the constant stem, not the variable arms.",
        clue: "Any 'which isotype fixes complement' stem.",
      },
      {
        a: "Somatic hypermutation changes the isotype",
        b: "Somatic hypermutation changes the VARIABLE region (affinity); isotype switching changes the CONSTANT region (class)",
        whyConfused: "Both are antigen-dependent refinement steps and both edit the B cell's immunoglobulin gene.",
        keyDifference:
          "Two different jobs on two different regions: somatic hypermutation mutates the variable region, and selection matures AFFINITY (better fit — IgG that binds 100× tighter than the original IgM); isotype switching replaces the constant region, changing the CLASS (IgM → IgG/IgA/IgE) while the binding site is untouched. AID drives both, but they are separable processes — hyper-IgM type 2 (AID deficiency) loses both, CD40L deficiency (E26) loses the switching signal upstream.",
        clue: "Any affinity-versus-class or step-4-versus-step-5 question.",
      },
    ],
    pivots: [
      {
        lookAlike: "Antigen-independent vs antigen-dependent generation (before or after antigen)",
        differentiator: "Presence of antigen and selection",
        correctPath:
          "Antigen-INDEPENDENT (diversity, steps 1-3): RAG1/RAG2 recombination of VJ/V(D)J, TdT junctional nucleotide addition, random heavy-light pairing — all in the naive B cell, before any encounter; failures = SCID phenotypes. Antigen-DEPENDENT (specificity, steps 4-5): somatic hypermutation with affinity maturation (variable region) and isotype switching (constant region) — inside the germinal-center response; failures = hyper-IgM phenotypes. Booster responses exist because step 4/5 refinements persist in memory cells.",
      },
      {
        lookAlike: "Idiotype vs isotype (which end, which question)",
        differentiator: "Variable region vs constant region",
        correctPath:
          "Idiotype = the antigen-binding site, determined by the hypervariable VH/VL loops — the FAB question (what does it bind). Isotype = the class, conferred by the Fc's constant region (IgM, IgD, etc) — the FC question (what does it recruit). One antibody's idiotype is unique to its clone; its isotype is shared by every antibody of that class. Anti-idiotype vs anti-isotype antibodies exploit exactly this split.",
      },
    ],
    miniCase: {
      vignette:
        "A 5-month-old boy is admitted with oral thrush, chronic diarrhea, and Pneumocystis pneumonia. Weight has fallen from the 50th to the 5th percentile. Laboratory studies: absolute lymphocyte count 1.2 × 10⁹/L (low) with flow cytometry showing absent CD3+ and CD19+ cells but normal CD56+ cells; serum IgG, IgA, and IgM are all profoundly low; thymic shadow is absent on chest x-ray but parathyroid function and cardiac anatomy are normal. Maternal infections during pregnancy were negative; there is no family history of autoimmune disease.",
      question:
        "Which molecular defect best explains this infant's absence of both T and B cells with preserved NK cells?",
      options: [
        {
          label: "A",
          text: "Null mutation in RAG1 preventing V(D)J recombination in developing lymphocytes",
          correct: true,
          why: "Correct — RAG1/RAG2 randomly recombine VJ (light-chain) and V(D)J (heavy-chain) immunoglobulin genes in B cells and the TCR genes in T cells (antigen-independent diversity, steps 1-3). Biallelic null RAG mutations mean neither lineage can assemble an antigen receptor: no mature B cells (absent CD19+, panhypogammaglobulinemia) and no mature T cells (absent CD3+, thrush, Pneumocystis, chronic diarrhea) — T-B-NK+ SCID, since NK cells require no RAG-dependent receptor rearrangement.",
        },
        {
          label: "B",
          text: "Deficiency of terminal deoxynucleotidyl transferase (TdT) reducing junctional diversity",
          why: "TdT adds random nucleotides at V(D)J junctions (step 2). Its loss narrows the repertoire (fewer junctional combinations) but does NOT abolish receptor assembly — B and T cells would be present, numerically normal, with a restricted diversity: combined immunodeficiency far milder than absent lineages.",
        },
        {
          label: "C",
          text: "Activation-induced cytidine deaminase (AID) deficiency blocking somatic hypermutation and class switching",
          why: "AID drives the antigen-dependent steps 4-5 (variable-region hypermutation and constant-region switching). Its loss preserves steps 1-3: B and T cells develop normally, but the response stays IgM-only (hyper-IgM type 2) with poor affinity maturation — not absent lineages.",
        },
        {
          label: "D",
          text: "22q11.2 deletion with thymic aplasia and absent parathyroids",
          why: "DiGeorge removes the thymic environment for T-cell development (and the parathyroids): low T cells with NORMAL B cells and normal-to-high immunoglobulins, plus the hypocalcemia and conotruncal defects this infant lacks. The absent B cells and panhypogammaglobulinemia point to a lymphocyte-intrinsic gene, not a gland.",
        },
        {
          label: "E",
          text: "X-linked IL-2 receptor γ-chain mutation preventing lymphocyte survival signals",
          why: "Common γ-chain SCID (X-linked) also produces T-B-NK+ counts and severe infections — but by a signaling failure after receptor rearrangement: B cells are PRESENT (they develop, since BCR signaling is less γ-chain-dependent) though they cannot function, and the inheritance is X-linked. This infant's ABSENT B cells plus autosomal-recessive pattern fits RAG null instead.",
        },
      ],
      reasoning:
        "The vignette assembles the RAG-null phenotype: absent T cells (CD3-) AND absent B cells (CD19-) with preserved NK cells (CD56+), panhypogammaglobulinemia, and early opportunistic infections — the T-B-NK+ SCID pattern. The discriminator is that BOTH adaptive lineages are missing while NK cells survive: only a defect shared by both lineages' receptor-assembly machinery produces this, and the shared machinery is exactly the source's step 1 — RAG1/RAG2 V(D)J/VJ recombination. Distractors break other layers: TdT (step 2 only — restricted, not absent), AID (steps 4-5 — hyper-IgM, cells present), DiGeorge (environmental, B cells spared), γ-chain (signaling, B cells present).",
    },
  },
  mnemonics: [
    {
      code: "\u201cLight chains live upstairs: L is for Living-room (Fab only). Heavy chains own the whole house.\u201d",
      meaning:
        "KYP's key for chain contributions: the light chain (VL/CL) lives only in the Fab arms — the living room upstairs, where guests (antigens) are received. The heavy chain runs the full property: VH/CH1 in the arms plus CH2/CH3 in the Fc stem downstairs — where the staff (complement, macrophages) are hired.",
      memorizes: "Heavy chain → Fc + Fab; light chain → Fab only",
      whenToUse: "Any chain-contribution or isotype-switching-preserves-binding question.",
      clinical: "Isotype switching swaps the heavy chain's constant region (downstairs) — the light chain and the binding site are untouched.",
    },
    {
      code: "\u201cThe Fc files under 5 C's: Constant, Carboxy, Complement, Carbohydrate, Confers-isotype.\u201d",
      meaning:
        "KYP's filing key for the Fc region's five properties, straight from the source's list: it is the Constant region, ends in the Carboxy terminal, binds Complement (IgM and IgG fix it), carries Carbohydrate side chains, and Confers (determines) the isotype — IgM, IgD, etc.",
      memorizes: "The 5 C's of the Fc region",
      whenToUse: "Any Fc-function or isotype-determination question.",
      clinical: "Complement fixation belongs to IgM and IgG Fc — the anatomical reason complement questions are Fc questions.",
    },
    {
      code: "\u201cBuild random, refine on demand: RAG-TdT-pair before the fight; hypermutate-switch during it.\u201d",
      meaning:
        "KYP's timeline key for the five steps: BEFORE antigen (build the library randomly — RAG1/2 recombination, TdT junctional additions, random heavy-light pairing), and AFTER antigen (refine on demand — somatic hypermutation with affinity maturation in the variable region, isotype switching in the constant region).",
      memorizes: "Steps 1-3 (antigen-independent) vs steps 4-5 (antigen-dependent)",
      whenToUse: "Any repertoire-generation, SCID-vs-hyper-IgM, or vaccine-kinetics question.",
      clinical: "RAG null = no library (T-B-NK+ SCID); AID loss = no refinement (hyper-IgM type 2); boosters work because refinement persists in memory.",
    },
  ],
  rapidReview: {
    s30: [
      "Fab = Fragment, antigen binding — determines idiotype (antigen-binding site)",
      "Hinge: flexibility between Fab arms → simultaneous binding to multiple epitopes",
      "Fc 5 C's: Constant · Carboxy terminal · Complement binding · Carbohydrate · Confers isotype",
      "Heavy chain → Fc AND Fab · light chain → Fab ONLY",
      "Fc of IgM and IgG fixes complement",
    ],
    m3: [
      "Diversity (antigen independent): 1 RAG1/2 VJ & V(D)J recombination · 2 TdT nucleotide addition · 3 random H+L pairing",
      "Specificity (antigen dependent): 4 somatic hypermutation + affinity maturation (variable region) · 5 isotype switching (constant region)",
      "Neutralization: antibody prevents bacterial adherence",
      "Opsonization: antibody marks pathogens for phagocytosis (C3b)",
      "Complement activation: opsonization + lysis (MAC)",
    ],
    m10: [
      "Hypervariable VH/VL tips = the idiotype = two identical binding sites",
      "Isotype switching changes the constant region ONLY — binding site preserved",
      "RAG1/2 null = T-B-NK+ SCID (no receptor assembly); hypomorphic = Omenn",
      "TdT loss = restricted junctional diversity, cells present",
      "AID loss = hyper-IgM type 2 (steps 4-5 gone, steps 1-3 intact)",
    ],
  },
  recall: [
    {
      q: "Define Fab, hinge, and Fc by their jobs.",
      a: "Fab: Fragment, antigen binding; determines idiotype — the antigen binding site. Hinge region: provides flexibility between Fab arms, allowing simultaneous binding to multiple epitopes. Fc (5 C's): Constant, Carboxy terminal, Complement binding, Carbohydrate side chains, Confers (determines) isotype (IgM, IgD, etc).",
    },
    {
      q: "Which chains build which regions, and which Fc regions fix complement?",
      a: "Heavy chain contributes to Fc and Fab regions; light chain contributes only to the Fab region. The Fc region of IgM and IgG fixes complement.",
    },
    {
      q: "List the antigen-independent diversity steps.",
      a: "1. Random recombination of VJ (light-chain) or V(D)J (heavy-chain) genes by RAG1 and RAG2. 2. Random addition of nucleotides to DNA during recombination by terminal deoxynucleotidyl transferase (TdT). 3. Random combination of heavy chains with light chains.",
    },
    {
      q: "List the antigen-dependent specificity steps.",
      a: "4. Somatic hypermutation and affinity maturation (variable region). 5. Isotype switching (constant region).",
    },
    {
      q: "Name the three antibody effector functions shown on the source page.",
      a: "Neutralization — antibody prevents bacterial adherence. Opsonization — antibody promotes phagocytosis by marking pathogens for destruction (C3b). Complement activation — antibody activates complement, enhancing opsonization and lysis (membrane attack complex).",
    },
  ],
  related: [
    {
      title: "Immunoglobulin Isotypes & Functions",
      topicId: "immunoglobulin-isotypes",
      note: "The isotype tour of the Fc region — what each constant region recruits (complement, Fc receptors, secretory transport).",
    },
    {
      title: "Lymphocyte Activation, Peripheral Tolerance & Anergy",
      topicId: "lymphocyte-activation-tolerance",
      note: "Where the antigen-dependent steps run: the germinal-center response that hypermutates and switches after the two-signal activation.",
    },
    {
      title: "Complement Pathways & Disorders",
      topicId: "complement-pathways",
      note: "The cascade the IgM/IgG Fc triggers — classical pathway entry, C3b opsonization, MAC lysis.",
    },
    {
      title: "T-Cell Development: Thymic Selection & Subset Lineages",
      topicId: "t-cell-development",
      note: "The same RAG machinery builds TCRs in the thymus — the shared-mutation reason RAG nulls lack both lineages.",
    },
  ],
  crossLinks: [
    {
      subject: "Immunology (SCID and Hyper-IgM)",
      connection: "RAG1/RAG2 null = no library (T-B-NK+ SCID); AID or CD40L failure = no refinement (hyper-IgM) — the five steps read as a disease map.",
    },
    {
      subject: "Laboratory Medicine (Immunoassays)",
      connection: "ELISA, flow cytometry, and immunofluorescence all exploit the Fab/Fc split — labeled anti-Fc or anti-Fab secondary antibodies target one module of this anatomy.",
    },
    {
      subject: "Pharmacology (Monoclonal Antibodies)",
      connection: "Therapeutic antibodies are engineered on this chassis — humanized Fc on a foreign-derived Fab, or isotype choice (IgG1 vs IgG4) to tune effector function.",
    },
    {
      subject: "Microbiology (Vaccinology)",
      connection: "Booster doses work because steps 4-5 persist in memory cells — higher-affinity, isotype-switched antibody on re-exposure.",
    },
  ],
};
