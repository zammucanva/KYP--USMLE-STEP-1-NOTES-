import type { KypUsMLENote } from "../types";

// Immunology — Cellular Components (E-batch 25).
// Source: First Aid 2026, Part 1 pdf 122 / book 100
// (Macrophage-lymphocyte interaction; Cytotoxic T cells; Regulatory T cells)

export const cytotoxicRegulatoryTCells: KypUsMLENote = {
  id: "cytotoxic-regulatory-t-cells",
  title: "Effector T Cells: Cytotoxic, Regulatory & the Macrophage Interface",
  subtitle:
    "The CD8+ cytotoxic T cell is the adaptive executioner: it kills virus-infected, neoplastic, and donor graft cells by inducing apoptosis, releasing cytotoxic granules containing preformed proteins (perforin, granzyme B), and its CD8 binds MHC I on virus-infected cells — the same perforin/granzyme ammunition as NK cells but TCR-guided and MHC I-restricted. The regulatory T cell (Treg) is the active brake: it maintains specific immune tolerance by suppressing CD4+ and CD8+ T-cell effector functions, is identified by expression of CD3, CD4, CD25, and FOXP3, and when activated produces anti-inflammatory cytokines (IL-10, TGF-β); genetic FOXP3 deficiency causes IPEX (Immune dysregulation, Polyendocrinopathy, Enteropathy, X-linked) syndrome — enteropathy, endocrinopathy, nail dystrophy, dermatitis, and diabetes in male infants. Between them sits the macrophage-lymphocyte interaction: Th1 cells secrete IFN-γ which enhances monocyte/macrophage microbe killing, T-cell CD40L binds CD40 on macrophages to enhance the same function further, and macrophages activate lymphocytes in return via antigen presentation — a bidirectional activation loop.",
  subject: "Immunology",
  system: "Section II · High-Yield General Principles — Cellular Components",
  pilotCategory: "Cellular Components — CD8+ CTL kill machinery and target spectrum, Treg markers/suppression/IPEX, Th1-macrophage activation loop",
  difficulty: 2,
  readTime: 7,
  sourceRef:
    "First Aid 2026, Part 1 pp. 100 (Macrophage-lymphocyte interaction; Cytotoxic T cells; Regulatory T cells)",
  tags: [
    "cytotoxic T cells",
    "CD8+",
    "perforin",
    "granzyme B",
    "cytotoxic granules",
    "apoptosis",
    "virus-infected cells",
    "neoplastic cells",
    "donor graft cells",
    "MHC I",
    "cellular rejection",
    "regulatory T cells",
    "Treg",
    "immune tolerance",
    "CD3",
    "CD4",
    "CD25",
    "FOXP3",
    "IL-10",
    "TGF-beta",
    "anti-inflammatory cytokines",
    "IPEX",
    "immune dysregulation",
    "polyendocrinopathy",
    "enteropathy",
    "X-linked",
    "nail dystrophy",
    "dermatitis",
    "macrophage-lymphocyte interaction",
    "Th1",
    "IFN-gamma",
    "CD40L",
    "CD40",
    "antigen presentation",
    "macrophage activation",
  ],
  core: {
    what: "Cytotoxic T cells kill virus-infected, neoplastic, and donor graft cells by inducing apoptosis. They release cytotoxic granules containing preformed proteins (eg, perforin, granzyme B), and they carry CD8, which binds to MHC I on virus-infected cells — making every kill antigen-specific and MHC I-restricted. Regulatory T cells do the opposite: they help maintain specific immune tolerance by suppressing CD4+ and CD8+ T-cell effector functions. They are identified by expression of CD3, CD4, CD25, and FOXP3; activated Tregs produce anti-inflammatory cytokines (eg, IL-10, TGF-β). Genetic deficiency of FOXP3 causes IPEX (Immune dysregulation, Polyendocrinopathy, Enteropathy, X-linked) syndrome: autoimmunity characterized by enteropathy, endocrinopathy, nail dystrophy, dermatitis, and/or other autoimmune dermatologic conditions, associated with diabetes in male infants. The macrophage-lymphocyte interaction links helper and innate effector cells: Th1 cells secrete IFN-γ, which enhances the ability of monocytes and macrophages to kill microbes they ingest; this function is also enhanced by the interaction of T-cell CD40L with CD40 on macrophages; and macrophages activate lymphocytes via antigen presentation — activation flowing in both directions.",
    why: "This page completes the effector map the chapter has been building: E23 named the CD8+ kill as a T-cell function (similar to NK cells); here the machinery, guidance, and target spectrum are specified — the level of detail exam stems actually test. The Treg half supplies the counterweight: tolerance is not passive absence of activation but ACTIVE suppression, which is why losing one transcription factor (FOXP3) produces a devastating autoimmune syndrome in male infants. The IPEX vignette (X-linked, enteropathy + endocrinopathy + dermatitis/nail dystrophy + infant diabetes) is a Step 1 classic, and the CD3/CD4/CD25/FOXP3 marker set is asked as flow-cytometry identification. The macrophage loop then explains how Th1 cells command the innate killers: IFN-γ plus the CD40L-CD40 handshake turns ingesting macrophages into microbe killers — the same CD40L molecule whose deficiency (hyper-IgM) appears later in the chapter.",
    keyIdea: "Two T-cell fates with opposite jobs, plus the interface that arms the innate killers. KILL (CD8+ cytotoxic): target cell displays foreign peptide on MHC I → TCR recognizes it and CD8 binds MHC I → immunological synapse → release of PREFORMED perforin + granzyme B granules → perforin pores, granzyme B entry → apoptosis. Targets: virus-infected, neoplastic, and donor graft cells — the last explaining acute and chronic cellular organ rejection. BRAKE (Treg): CD3+ CD4+ CD25+ FOXP3+ cells suppress CD4+ and CD8+ effector functions (specific immune tolerance); activated Tregs secrete IL-10 and TGF-β; FOXP3 deficiency = IPEX (Immune dysregulation, Polyendocrinopathy, Enteropathy, X-linked — enteropathy, endocrinopathy, nail dystrophy, dermatitis, male-infant diabetes). INTERFACE (macrophage-lymphocyte): Th1 → IFN-γ → macrophages kill ingested microbes better; T-cell CD40L ↔ macrophage CD40 → same enhancement; macrophage → antigen presentation → lymphocyte activation. Hold the symmetry with NK cells: same perforin/granzyme ammunition, but CD8+ kills are MHC I-restricted while NK kills preferentially MHC I-negative targets.",
  },
  mechanisms: [
    {
      id: "cd8-perforin-granzyme-kill",
      title: "The CD8+ kill — preformed granules, MHC I-guided",
      context: "How a cytotoxic T cell kills a virus-infected, neoplastic, or graft cell",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A target cell displays foreign peptide on MHC I (viral, tumor, or donor-graft antigen)",
            sublabel: "Input — every nucleated cell reports its contents on MHC I; the CD8+ T cell reads the report.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Dual recognition at the immunological synapse: TCR binds the peptide-MHC I complex; CD8 binds MHC I",
            sublabel: "Process — the kill is antigen-specific AND MHC I-restricted (CD8 is the clamp, TCR the reader).",
            variant: "process",
          },
          {
            id: "s2",
            label: "The CTL releases cytotoxic granules containing preformed proteins: perforin and granzyme B",
            sublabel: "Process — no new protein synthesis needed; the granules are ready-made and directional.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Perforin forms pores, granzyme B enters, and the target undergoes apoptosis",
            sublabel: "Output — virus-infected, neoplastic, and donor graft cells die by programmed cell death (the engine of cellular organ rejection).",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "peptide-MHC I" },
          { from: "s1", to: "s2", label: "synapse forms" },
          { from: "s2", to: "o1", label: "granule exocytosis" },
        ],
        caption:
          "The CD8+ cytotoxic T cell is a guided weapon. Guidance comes from the pair of receptors at the immunological synapse: the TCR, which reads the specific foreign peptide cradled in MHC I, and CD8, which binds the MHC I molecule itself — the source's anchor sentence ('Cytotoxic T cells have CD8, which binds to MHC I on virus-infected cells'). The payload is preformed: cytotoxic granules loaded with perforin and granzyme B wait inside the CTL, so killing begins the moment the synapse forms. Perforin punches pores in the target membrane; granzyme B enters through them and triggers the apoptosis program. Three target classes share this fate — virus-infected cells (viral peptides on MHC I), neoplastic cells (tumor antigens on MHC I), and donor graft cells (allo-MHC recognized as foreign) — the last being exactly why acute and chronic cellular organ rejection are T-cell functions. Compare NK cells: identical ammunition, opposite MHC logic (NK kills when MHC I is absent).",
      },
    },
    {
      id: "th1-macrophage-activation-loop",
      title: "The Th1-macrophage loop — IFN-γ plus the CD40L-CD40 handshake",
      context: "Macrophage-lymphocyte interaction: bidirectional activation",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A Th1 cell meets a macrophage presenting its antigen on MHC II",
            sublabel: "Input — the helper cell recognizes the ingested microbe's peptides.",
            variant: "input",
          },
          {
            id: "s1",
            label: "The Th1 cell secretes IFN-γ, which enhances the ability of monocytes and macrophages to kill the microbes they ingest",
            sublabel: "Process — the cytokine arm: ingesting cells become killing cells.",
            variant: "process",
          },
          {
            id: "s2",
            label: "T-cell CD40L interacts with CD40 on the macrophage — the same function is further enhanced",
            sublabel: "Process — the contact arm: the co-stimulatory handshake (the molecule missing in hyper-IgM syndrome).",
            variant: "process",
          },
          {
            id: "o1",
            label: "The macrophage activates lymphocytes in return via antigen presentation — the loop closes",
            sublabel: "Output — bidirectional activation: better killing AND better T-cell priming.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "antigen recognized" },
          { from: "s1", to: "s2", label: "cytokine arm" },
          { from: "s2", to: "o1", label: "contact arm" },
        ],
        caption:
          "The macrophage-lymphocyte interaction is a two-way street with three lanes. Lane 1 (cytokine): the Th1 cell secretes IFN-γ, enhancing the ability of monocytes and macrophages to kill the microbes they have ingested — the difference between a macrophage that merely eats and one that digests. Lane 2 (contact): T-cell CD40L binds CD40 on the macrophage, further enhancing that microbicidal function — the same CD40L-CD40 pair that B cells need for class switching, which is why CD40L deficiency (hyper-IgM) cripples both macrophage activation and antibody maturation. Lane 3 (return): macrophages activate lymphocytes via antigen presentation, so the macrophage is not just a target of T-cell commands but an active amplifier of the response. This loop is the effector arm of Th1 immunity — the interface where the adaptive decision (E24's switchboard) meets innate execution.",
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "ctl-kill-cycle",
      title: "The CD8+ cytotoxic kill cycle",
      caption:
        "An original KYP diagram of the CTL kill: the cytotoxic T cell (CD8 + TCR, preformed perforin/granzyme B granules) forming the immunological synapse with an MHC I+ target cell displaying foreign peptide; granule release, perforin pores, granzyme B entry, apoptosis; and the target-spectrum rail — virus-infected, neoplastic, and donor graft cells, all killed by inducing apoptosis. The bottom strip contrasts the guidance systems: CD8+ kills are MHC I-restricted, NK kills are missing-self/ADCC — a target cannot escape both.",
      notice:
        "The source presents these facts as prose (pdf 122 carries no CTL artwork — its rasters are the thymus illustration and cell icons owned by E24); this visual is an original KYP teaching diagram.",
    },
    {
      kind: "table",
      title: "Cytotoxic vs regulatory T cells — verbatim",
      intro: "The source's two effector-T-cell sections, verbatim and side by side.",
      columns: ["", "Cytotoxic T cells", "Regulatory T cells"],
      rows: [
        [
          "FUNCTION",
          "Kill virus-infected, neoplastic, and donor graft cells by inducing apoptosis.",
          "Help maintain specific immune tolerance by suppressing CD4+ and CD8+ T-cell effector functions.",
        ],
        [
          "MECHANISM",
          "Release cytotoxic granules containing preformed proteins (eg, perforin, granzyme B).",
          "Activated regulatory T cells (Tregs) produce anti-inflammatory cytokines (eg, IL-10, TGF-β).",
        ],
        [
          "IDENTITY / RECOGNITION",
          "Cytotoxic T cells have CD8, which binds to MHC I on virus-infected cells.",
          "Identified by expression of CD3, CD4, CD25, and FOXP3.",
        ],
        [
          "FAILURE SYNDROME",
          "— (over-activity: acute and chronic cellular organ rejection of donor graft cells)",
          "IPEX (Immune dysregulation, Polyendocrinopathy, Enteropathy, X-linked) syndrome—genetic deficiency of FOXP3 → autoimmunity. Characterized by enteropathy, endocrinopathy, nail dystrophy, dermatitis, and/or other autoimmune dermatologic conditions. Associated with diabetes in male infants.",
        ],
      ],
      caption:
        "Read the two columns as opposite jobs on the same CD8/CD4 chassis: the cytotoxic cell spends its granules on infected, neoplastic, and grafted targets; the regulatory cell spends IL-10 and TGF-β suppressing CD4+ and CD8+ effectors. The marker row doubles as a flow-cytometry question: CD3/CD4/CD25/FOXP3 identifies the Treg. The failure row is the asymmetry worth remembering — CTL failure means infection and tumor escape, Treg failure (FOXP3/IPEX) means autoimmunity.",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "Macrophage-lymphocyte interaction — the bidirectional activation loop",
      body: "Th1 cells secrete IFN-γ, which enhances the ability of monocytes and macrophages to kill the microbes they ingest. This function is also enhanced by the interaction of T-cell CD40L with CD40 on macrophages. Macrophages also activate lymphocytes via antigen presentation. Three lanes, two directions: the T cell arms the macrophage (cytokine + contact), and the macrophage amplifies the T cell (antigen presentation) — the effector interface of Th1 immunity and the reason CD40L deficiency (hyper-IgM syndrome) weakens macrophage microbicidal activation as well as antibody class switching.",
    },
    {
      kind: "visual",
      visualId: "treg-suppression-model",
      title: "The Treg brake — and what its loss (IPEX) unleashes",
      caption:
        "An original KYP diagram of the regulatory T cell: surface CD3, CD4, CD25 with nuclear FOXP3 (the master transcription factor); suppression arrows to CD4+ helper and CD8+ cytotoxic effector functions (specific immune tolerance); the secretion arm — activated Tregs produce IL-10 and TGF-β; and the bottom IPEX strip: FOXP3 deficiency → Immune dysregulation, Polyendocrinopathy, Enteropathy, X-linked — enteropathy, endocrinopathy, dermatitis/nail dystrophy, diabetes in male infants.",
      notice:
        "Original KYP teaching diagram (the source section is prose; no textbook artwork exists). The verbatim Treg text is the note's table block.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 4-month-old boy has intractable watery diarrhea and failure to thrive since birth, recently diagnosed with type 1 diabetes; exam shows eczematous dermatitis and dystrophic nails; an older brother died of sepsis in infancy.",
        discriminator: "Male infant + enteropathy + endocrinopathy + dermatitis/nail dystrophy",
        concept: "IPEX — FOXP3 deficiency",
        answer:
          "FOXP3 is the master transcription factor of regulatory T cells (CD3+ CD4+ CD25+ FOXP3+). Its X-linked deficiency removes the active brake on CD4+ and CD8+ effector functions: enteropathy (intractable diarrhea, failure to thrive), endocrinopathy (type 1 diabetes in male infants), dermatitis, and nail dystrophy — immune dysregulation, polyendocrinopathy, enteropathy, X-linked. Replacement: supportive + immunosuppression; the marker set CD3/CD4/CD25/FOXP3 identifies the missing lineage.",
      },
      {
        stem: "A cytotoxicity assay pairs CTLs with matched target cells; killing occurs only when the target expresses the specific peptide on MHC I, and is abolished by calcium chelation that blocks granule exocytosis.",
        discriminator: "MHC I-restricted + granule-dependent killing",
        concept: "CD8+ CTL perforin/granzyme mechanism",
        answer:
          "Cytotoxic T cells kill via preformed cytotoxic granules (perforin, granzyme B) released at the immunological synapse after dual recognition: TCR binds the specific peptide-MHC I, and CD8 binds MHC I. Chelating calcium blocks the degranulation (perforin polymerization) — proving granule-mediated killing rather than Fas-FasL or cytokine-mediated death. Targets: virus-infected, neoplastic, donor graft cells, all by apoptosis.",
      },
      {
        stem: "A mouse with genetically deleted CD40L is infected with intracellular bacteria; its macrophages ingest the organisms but cannot clear the infection despite normal T-cell numbers.",
        discriminator: "Ingestion without killing = missing activation signal",
        concept: "Th1-macrophage loop — IFN-γ and CD40L-CD40",
        answer:
          "Macrophage microbicidal activation requires two Th1-derived signals: IFN-γ (which enhances the ability of monocytes and macrophages to kill ingested microbes) and the CD40L-CD40 interaction (T-cell CD40L with CD40 on macrophages, further enhancing the same function). Without CD40L, the handshake fails; macrophages eat but do not kill. The same mutation in humans (CD40L deficiency) causes hyper-IgM syndrome — class switching AND macrophage activation both fail.",
      },
    ],
    traps: [
      {
        a: "Tregs suppress immunity by doing nothing (passive anergy)",
        b: "Tregs ACTIVELY suppress — they are tolerance's effectors",
        whyConfused: "'Regulatory' and 'tolerance' sound like the absence of a response.",
        keyDifference:
          "Regulatory T cells help maintain specific immune tolerance BY SUPPRESSING CD4+ and CD8+ effector functions — an active, contact- and cytokine-mediated process. Activated Tregs produce anti-inflammatory cytokines (IL-10, TGF-β). This is why losing FOXP3 (one transcription factor) unleashes multi-organ autoimmunity (IPEX): the brake is a working machine, not a default state.",
        clue: "Any IPEX question or 'tolerance is active suppression' stem.",
      },
      {
        a: "CD8+ T cells kill cells that lack MHC I",
        b: "CD8+ REQUIRES MHC I (CD8 binds it); NK cells kill MHC I-negative cells",
        whyConfused: "Both killers use perforin/granzymes, so the guidance systems blur.",
        keyDifference:
          "The ammunition is shared ('similar to NK cells'), the guidance is opposite: the CTL's CD8 binds MHC I on virus-infected cells and its TCR reads the peptide — no MHC I, no kill. NK cells integrate an activating signal plus the ABSENCE of the MHC I inhibitory signal (missing self) or CD16-bound IgG (ADCC). MHC I downregulation hides a target from CD8+ but exposes it to NK.",
        clue: "Any 'which killer recognizes what' or MHC I-downregulation stem.",
      },
      {
        a: "Treg markers are CD8, CD25, and IL-2",
        b: "Treg markers are CD3, CD4, CD25, and FOXP3",
        whyConfused: "CD25 (IL-2 receptor α) appears in both Treg and activation contexts; IL-2 is the Treg growth factor.",
        keyDifference:
          "The source's identification set is exact: CD3, CD4, CD25, and FOXP3. FOXP3 is the decisive nuclear marker (the deficiency gene in IPEX); CD25 marks the IL-2 receptor α chain — Tregs depend on IL-2 they cannot make themselves, which is why IL-2 low-dose therapy expands Tregs. Flow panels asking 'which cell is this' hinge on FOXP3.",
        clue: "Any flow-cytometry or marker-list question about Tregs.",
      },
    ],
    pivots: [
      {
        lookAlike: "IPEX vs AIRE deficiency vs DiGeorge (three tolerance/development failures)",
        differentiator: "Which layer failed: the brake, the display, or the school itself",
        correctPath:
          "IPEX (FOXP3, X-linked): selection and display intact, but the Treg BRAKE is absent — enteropathy, endocrinopathy (male-infant diabetes), dermatitis, nail dystrophy. AIRE deficiency (APS-1, autosomal recessive): the thymic medulla cannot DISPLAY organ-specific antigens, so negative selection misses self-reactive clones — candidiasis, hypoparathyroidism, adrenal insufficiency. DiGeorge (22q11/thymic aplasia): the thymic SCHOOL is absent — no T cells at all, with tetany from absent parathyroids. Brake vs display vs school.",
      },
      {
        lookAlike: "CD8+ CTL kill vs NK kill vs Fas-FasL kill (three apoptosis routes)",
        differentiator: "Recognition requirement and effector molecule",
        correctPath:
          "CD8+ CTL: TCR + CD8, MHC I-restricted, kills by preformed perforin/granzyme B granules (calcium-dependent exocytosis). NK: germline receptors, kills MHC I-negative (missing self) or IgG-coated (ADCC/CD16) targets with the same granules. Fas-FasL: receptor-ligand apoptosis without granules (the cytotoxicity assay that survives calcium chelation). Match the assay result to the mechanism.",
      },
    ],
    miniCase: {
      vignette:
        "A 5-month-old boy is admitted for failure to thrive with watery, non-bloody diarrhea since the first weeks of life despite formula changes. He was diagnosed with new-onset type 1 diabetes last month. Physical examination reveals widespread eczematous dermatitis and dystrophic, ridged nails; there is no hepatosplenomegaly. Family history is notable for a maternal uncle who died in infancy of 'sepsis and diabetes.' Laboratory studies show eosinophilia and elevated IgE; autoantibodies against enterocytes and pancreatic islet cells are present. Flow cytometry shows normal numbers of CD3+ CD4+ CD25+ cells.",
      question:
        "Which molecular finding is most likely responsible for this infant's syndrome?",
      options: [
        {
          label: "A",
          text: "Loss-of-function mutation in FOXP3 abolishing regulatory T-cell function",
          correct: true,
          why: "Correct — IPEX (Immune dysregulation, Polyendocrinopathy, Enteropathy, X-linked): genetic deficiency of FOXP3, the master transcription factor of regulatory T cells. Without FOXP3 the CD3/CD4/CD25+ cells exist (the flow panel is normal) but cannot suppress — enteropathy (intractable diarrhea, failure to thrive), endocrinopathy (type 1 diabetes in a male infant), dermatitis, nail dystrophy, autoantibodies, eosinophilia/IgE. X-linked inheritance fits the affected uncle.",
        },
        {
          label: "B",
          text: "Deletion of 22q11.2 causing thymic aplasia with absent T cells",
          why: "DiGeorge syndrome removes the thymus — flow cytometry would show LOW CD3+ T cells (and the presentation features tetany from absent parathyroids and conotruncal defects), not a normal CD3/CD4/CD25+ panel with autoimmunity. The school is missing, not the brake.",
        },
        {
          label: "C",
          text: "AIRE mutation impairing negative selection in the thymic medulla",
          why: "AIRE deficiency (autoimmune polyendocrine syndrome) also gives endocrinopathy (hypoparathyroidism, adrenal insufficiency) — but the hallmark is chronic mucocutaneous candidiasis, inheritance is autosomal recessive, and enteropathy with male-infant diabetes is not the classic tetrad. It is a display failure in the medulla, not a Treg failure.",
        },
        {
          label: "D",
          text: "CD40L deficiency causing defective macrophage activation and class switching",
          why: "CD40L deficiency (X-linked hyper-IgM) impairs the CD40L-CD40 handshake — macrophage microbicidal activation and B-cell class switching fail, giving recurrent pyogenic/opportunistic infections and LOW IgG with elevated IgM, not enteropathy with islet autoantibodies.",
        },
        {
          label: "E",
          text: "Perforin gene mutation preventing cytotoxic granule killing",
          why: "Perforin deficiency (familial hemophagocytic lymphohistiocytosis) blocks CTL and NK granule-mediated killing — uncontrolled macrophage/lymphocyte activation, fever, hepatosplenomegaly, cytopenias. This infant's normal-size organs, autoantibody profile, and dermatitis/nail findings instead point to the missing Treg brake.",
        },
      ],
      reasoning:
        "The vignette stacks the IPEX features from the source: Immune dysregulation (autoantibodies, eosinophilia, high IgE), Polyendocrinopathy (type 1 diabetes in a male infant), Enteropathy (intractable watery diarrhea, failure to thrive), X-linked inheritance (affected maternal uncle), plus the dermatologic markers — dermatitis and nail dystrophy. The decisive laboratory clue is the NORMAL CD3+ CD4+ CD25+ count: the Treg lineage is present but functionally crippled, which localizes the defect to FOXP3 (nuclear, not surface) rather than a developmental absence. Distractors each break a different layer: DiGeorge (no school), AIRE (no display), CD40L (no handshake), perforin (no payload).",
    },
  },
  mnemonics: [
    {
      code: "\u201cThe Treg panel reads 3-4-25 plus the boss in the nucleus.\u201d",
      meaning:
        "KYP's key for the Treg marker set: surface CD3 (T-cell), CD4 (helper chassis), CD25 (IL-2 receptor α — the growth-dependency handle), and FOXP3 in the nucleus — the master transcription factor that IS the Treg program; its X-linked deficiency is IPEX.",
      memorizes: "The CD3/CD4/CD25/FOXP3 identification set",
      whenToUse: "Any flow-cytometry or marker-list question about regulatory T cells.",
      clinical: "FOXP3 loss = IPEX; low-dose IL-2 (via CD25) selectively expands Tregs in autoimmunity and transplant protocols.",
    },
    {
      code: "\u201cCD8+ brings pre-packed lunch: perforin and granzyme B, ready before the meeting.\u201d",
      meaning:
        "KYP's key for the CTL payload: the cytotoxic granules are PREFORMED proteins (perforin, granzyme B) — synthesized before the encounter, released the instant the synapse forms. No manufacturing delay: recognition (TCR + CD8 on MHC I) is immediately followed by degranulation and target apoptosis.",
      memorizes: "Granule contents, preformed nature, and target spectrum (virus-infected, neoplastic, donor graft)",
      whenToUse: "Any mechanism or kinetics question about cytotoxic T-cell killing.",
      clinical: "Donor graft cells as targets = acute and chronic cellular organ rejection; calcium chelation blocks the degranulation (assay discriminator).",
    },
    {
      code: "\u201cIFN-γ loads the gun; CD40L-CD40 pulls the trigger; the macrophage reloads the T cell.\u201d",
      meaning:
        "KYP's key for the macrophage-lymphocyte loop's three lanes: IFN-γ from Th1 enhances macrophage killing of ingested microbes (loads), the CD40L-CD40 contact further enhances the same function (trigger), and antigen presentation by macrophages activates the lymphocytes back (reload) — bidirectional.",
      memorizes: "The Th1-macrophage activation loop",
      whenToUse: "Any question on macrophage activation, CD40L deficiency, or Th1 effector function.",
      clinical: "CD40L deficiency (hyper-IgM) breaks lane 2 — macrophage activation AND class switching fail together.",
    },
  ],
  rapidReview: {
    s30: [
      "CD8+ CTLs kill virus-infected, neoplastic, and donor graft cells by inducing apoptosis",
      "Payload: preformed cytotoxic granules — perforin + granzyme B",
      "CD8 binds MHC I on virus-infected cells (kill is MHC I-restricted)",
      "Tregs suppress CD4+ and CD8+ effector functions = specific immune tolerance",
      "Treg markers: CD3, CD4, CD25, FOXP3 (nuclear)",
    ],
    m3: [
      "Activated Tregs produce anti-inflammatory IL-10 and TGF-β",
      "FOXP3 deficiency → IPEX: Immune dysregulation, Polyendocrinopathy, Enteropathy, X-linked",
      "IPEX phenotype: enteropathy, endocrinopathy (male-infant diabetes), nail dystrophy, dermatitis",
      "Th1 → IFN-γ → macrophages kill ingested microbes better",
      "T-cell CD40L ↔ macrophage CD40 further enhances that function",
    ],
    m10: [
      "Macrophages activate lymphocytes back via antigen presentation (bidirectional loop)",
      "CTL vs NK: same granules, opposite MHC I logic (required vs absent)",
      "Cellular organ rejection (acute + chronic) = CD8+ machinery on graft cells",
      "CD40L deficiency (hyper-IgM) also weakens macrophage activation",
      "IPEX vs AIRE vs DiGeorge: brake vs display vs school",
    ],
  },
  recall: [
    {
      q: "What do cytotoxic T cells kill, and by what mechanism?",
      a: "They kill virus-infected, neoplastic, and donor graft cells by inducing apoptosis, releasing cytotoxic granules containing preformed proteins (eg, perforin, granzyme B). Cytotoxic T cells have CD8, which binds to MHC I on virus-infected cells.",
    },
    {
      q: "How do regulatory T cells maintain tolerance, and how are they identified?",
      a: "They help maintain specific immune tolerance by suppressing CD4+ and CD8+ T-cell effector functions. They are identified by expression of CD3, CD4, CD25, and FOXP3; activated Tregs produce anti-inflammatory cytokines (eg, IL-10, TGF-β).",
    },
    {
      q: "What is IPEX syndrome, and what are its features?",
      a: "IPEX (Immune dysregulation, Polyendocrinopathy, Enteropathy, X-linked) syndrome — genetic deficiency of FOXP3 → autoimmunity. Characterized by enteropathy, endocrinopathy, nail dystrophy, dermatitis, and/or other autoimmune dermatologic conditions; associated with diabetes in male infants.",
    },
    {
      q: "Describe the macrophage-lymphocyte interaction.",
      a: "Th1 cells secrete IFN-γ, which enhances the ability of monocytes and macrophages to kill the microbes they ingest. This function is also enhanced by the interaction of T-cell CD40L with CD40 on macrophages. Macrophages also activate lymphocytes via antigen presentation.",
    },
    {
      q: "How does the CD8+ kill differ from the NK-cell kill with the same perforin/granzyme ammunition?",
      a: "CD8+ CTL killing requires antigen-specific TCR recognition plus CD8 binding to MHC I (MHC I-restricted). NK cells use germline-encoded receptors and kill preferentially when the MHC I inhibitory signal is absent (missing self) or via CD16 binding the Fc region of bound IgG (ADCC) — so MHC I downregulation escapes CD8+ but triggers NK.",
    },
  ],
  related: [
    {
      title: "T-Cell Development: Thymic Selection & Subset Lineages",
      topicId: "t-cell-development",
      note: "The switchboard that produces the Th1 (IFN-γ) and Treg (TGF-β/IL-2) lineages whose effector arms these cells execute.",
    },
    {
      title: "Major Functions of NK, B and T Cells",
      topicId: "nk-b-t-cell-functions",
      note: "The CD8+ kill 'similar to NK cells' from the function roster — here with machinery, guidance, and targets.",
    },
    {
      title: "MHC Complex I and II: The Antigen Display Scaffolds",
      topicId: "mhc-complex",
      note: "MHC I is the guidance system the CD8+ kill depends on — and the molecule NK cells read in reverse.",
    },
    {
      title: "Transplant Rejection",
      topicId: "transplant-rejection",
      note: "Donor graft cells as CTL targets — the acute and chronic cellular rejection this machinery produces.",
    },
  ],
  crossLinks: [
    {
      subject: "Endocrinology",
      connection: "IPEX diabetes and AIRE polyendocrine failure are the two classic thymic/tolerance-linked endocrinopathies — male-infant diabetes (FOXP3, X-linked) vs hypoparathyroid + adrenal failure (AIRE, AR).",
    },
    {
      subject: "Gastroenterology",
      connection: "IPEX enteropathy is intractable watery diarrhea of infancy with anti-enterocyte antibodies — a tolerance failure, distinct from celiac (DQ2/DQ8) and infectious enteritis.",
    },
    {
      subject: "Immunology (Hyper-IgM)",
      connection: "CD40L deficiency breaks the same CD40L-CD40 handshake the Th1-macrophage loop uses — explaining why hyper-IgM patients have both class-switch failure and opportunistic intracellular infections.",
    },
    {
      subject: "Transplantation",
      connection: "Acute and chronic cellular rejection are CD8+ CTL attacks on donor graft cells — the same preformed-granule kill, aimed at allo-MHC I.",
    },
  ],
};
