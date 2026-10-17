import type { KypUsMLENote } from "../types";

// Immunology — Cellular Components (E-batch 26).
// Source: First Aid 2026, Part 1 pdf 123 / book 101
// (T- and B-cell activation; Peripheral tolerance; Anergy)

export const lymphocyteActivationTolerance: KypUsMLENote = {
  id: "lymphocyte-activation-tolerance",
  title: "Lymphocyte Activation, Peripheral Tolerance & Anergy",
  subtitle:
    "The two-signal rule that gates every adaptive response. T-cell activation: signal 1 is antigen recognition — exogenous antigen on MHC II recognized by TCR on the Th (CD4+) cell, endogenous or cross-presented antigen on MHC I presented to the Tc (CD8+) cell — and signal 2 is the costimulatory interaction of B7 protein (CD80/86) on the APC with CD28 on the naïve T cell; with both signals the Th cell produces cytokines and the Tc cell can recognize and kill virus-infected cells. B-cell activation reuses the pattern: the B cell endocytoses antigen via its B-cell receptor, presents it on MHC II to the TCR of an activated Th cell (signal 1), CD40 on the B cell binds CD40L on the Th cell (signal 2), and Th-cell cytokines determine Ig class switching — B cells are activated, produce IgM, then undergo class switching and affinity maturation. Without signal 2, exposure to antigen induces ANERGY: a state in which the cell cannot become activated by its antigen. Anergy is one of three peripheral tolerance mechanisms (with regulatory T-cell suppression and Fas-FasL apoptosis) that suppress or inactivate self-reactive T/B cells outside the thymus and bone marrow — preserving self-tolerance, whose loss means autoimmunity.",
  subject: "Immunology",
  system: "Section II · High-Yield General Principles — Cellular Components",
  pilotCategory: "Cellular Components — two-signal activation (MHC-TCR + B7-CD28, MHC-TCR + CD40-CD40L), IgM-first response, class switching, affinity maturation, anergy, peripheral tolerance",
  difficulty: 2,
  readTime: 7,
  sourceRef:
    "First Aid 2026, Part 1 pp. 101 (T- and B-cell activation; Peripheral tolerance; Anergy)",
  tags: [
    "lymphocyte activation",
    "T-cell activation",
    "B-cell activation",
    "signal 1",
    "signal 2",
    "costimulation",
    "APC",
    "antigen-presenting cell",
    "B cells",
    "dendritic cells",
    "Langerhans cells",
    "macrophages",
    "MHC II",
    "MHC I",
    "TCR",
    "CD4",
    "CD8",
    "B7",
    "CD80",
    "CD86",
    "CD28",
    "CD40",
    "CD40L",
    "BCR",
    "B-cell receptor",
    "endocytosis",
    "class switching",
    "affinity maturation",
    "IgM",
    "anergy",
    "peripheral tolerance",
    "self-tolerance",
    "autoimmunity",
    "Fas-FasL",
    "apoptosis",
    "regulatory T cells",
  ],
  core: {
    what: "Antigen-presenting cells are B cells, dendritic cells, Langerhans cells, and macrophages; the APC ingests and processes antigen, then migrates to the draining lymph node. Two signals are required for T-cell activation, B-cell activation, and class switching. T-cell activation: signal 1 is the presentation of exogenous antigen on MHC II to the TCR of the Th (CD4+) cell (or endogenous/cross-presented antigen on MHC I to the Tc [CD8+] cell); signal 2 is the costimulatory interaction of B7 protein (CD80/86) on the dendritic cell with CD28 on the naïve T cell — the proliferation-and-survival signal. The activated Th cell produces cytokines, and the Tc cell becomes able to recognize and kill virus-infected cells. B-cell activation and class switching follow the same two-signal architecture on a B-cell chassis: after Th-cell activation as above, the B cell performs B-cell-receptor-mediated endocytosis, presents the exogenous antigen on MHC II to the TCR on the Th cell (signal 1), CD40 on the B cell binds CD40L on the Th cell (signal 2), and the Th cells secrete cytokines that determine Ig class switching; the B cells are activated and produce IgM, then undergo class switching and affinity maturation. When a T or B cell is exposed to its antigen WITHOUT the costimulatory signal, it becomes anergic — a state during which it cannot become activated by exposure to its antigen. Anergy is one example of peripheral tolerance, the suppression or inactivation of self-reactive T/B cells outside the thymus and bone marrow that preserves self-tolerance; its mechanisms are anergy, regulatory T-cell suppression, and apoptosis (the Fas-FasL pathway), and its loss causes autoimmunity.",
    why: "The two-signal rule is the immune system's safety interlock: antigen recognition alone is not a trigger but a tolerance signal, which is why self-protein encounter in the periphery (no co-stimulation, because healthy tissue does not express B7 at meaningful levels) inactivates self-reactive clones instead of activating them. This page is the mechanistic bridge between the MHC/TCR hardware (E21), the T-cell school (E24), and every downstream disease: hyper-IgM (CD40L-CD40 failure), autoimmune tolerance breakdown (anergy/Treg/Fas failures — ALPS is the Fas failure), transplant costimulation biology, and the checkpoint-inhibitor era of immunotherapy (CTLA-4 and PD-1 are the pharmacologic handles on this exact gate — the 'off switches' on signal 2). Class switching and affinity maturation — introduced here as the activated B cell's outcome — set up the entire antibody-structure and isotypes sequence (E27-E28).",
    keyIdea: "Hold one gate with two doors. SIGNAL 1 always means antigen recognition through the MHC-TCR axis: exogenous antigen on MHC II → TCR + CD4 on the Th cell; endogenous or cross-presented antigen on MHC I → TCR + CD8 on the Tc cell; for B cells, the antigen arrives via BCR-mediated endocytosis and goes back out on MHC II for the Th cell's TCR. SIGNAL 2 is always a second receptor pair whose job is to prove the encounter is 'licensed': B7 (CD80/86) on the APC ↔ CD28 on the naïve T cell; CD40L on the activated Th cell ↔ CD40 on the B cell (plus the cytokines that direct Ig class switching). Both signals → activation: Th cytokines, Tc killing, B-cell IgM production followed by class switching and affinity maturation. Signal 1 WITHOUT signal 2 → anergy — the cell is switched OFF by its antigen, a peripheral tolerance mechanism alongside Treg suppression and Fas-FasL apoptosis. Peripheral tolerance guards the periphery the way thymic/bone-marrow selection guarded development; both layers failing = autoimmunity.",
  },
  mechanisms: [
    {
      id: "two-signal-activation",
      title: "The two-signal activation gate — recognition plus costimulation",
      context: "How T cells and B cells are licensed to respond",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "An APC ingests and processes antigen, then migrates to the draining lymph node",
            sublabel: "Input — APCs: B cells, dendritic cells, Langerhans cells, macrophages.",
            variant: "input",
          },
          {
            id: "s1",
            label: "SIGNAL 1 — antigen recognition: exogenous antigen on MHC II → TCR on the Th (CD4+) cell; endogenous/cross-presented on MHC I → Tc (CD8+) cell",
            sublabel: "Process — the specific but reversible first look; B cells present BCR-endocytosed antigen on MHC II the same way.",
            variant: "process",
          },
          {
            id: "s2",
            label: "SIGNAL 2 — costimulation: B7 (CD80/86) on the APC binds CD28 on the naïve T cell (T-cell route); CD40L on the Th cell binds CD40 on the B cell (B-cell route)",
            sublabel: "Process — the license: without it the encounter ends in anergy instead of proliferation and survival.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Activation: Th cell produces cytokines; Tc cell kills virus-infected cells; B cells produce IgM, then class-switch (Th-cytokine-directed) and affinity-mature",
            sublabel: "Output — two signals were required for T-cell activation, B-cell activation, AND class switching.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "peptide-MHC" },
          { from: "s1", to: "s2", label: "TCR engaged" },
          { from: "s2", to: "o1", label: "licensed" },
        ],
        caption:
          "Activation is an AND-gate, and the design is deliberate: signal 1 alone would let any self-reactive clone that escaped central selection fire on every tissue protein it met. Signal 2 solves this — B7 (CD80/86) is induced on APCs by danger signals and is not constitutively present on healthy parenchyma, so co-stimulation is the tissue's testimony that the antigen is real trouble. For T cells the pair is B7-CD28; for B cells the Th cell brings both the antigen-specific help (TCCR reading MHC II-peptide the B cell displays after BCR-mediated endocytosis) and the CD40L-CD40 handshake, plus the cytokines that SELECT the Ig class the B cell will switch to. The B cell's reward for passing both gates: IgM first, then class switching and affinity maturation — the response matures from the default IgM output into tailored isotypes with improving fit. The same interlock explains anergy: self-antigen without B7 (no danger) = signal 1 only = the clone is switched off rather than up.",
      },
    },
    {
      id: "peripheral-tolerance-anergy",
      title: "Peripheral tolerance — anergy, Treg suppression, and the Fas-FasL off switch",
      context: "Containing self-reactive clones that escaped central selection",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A self-reactive T or B cell that escaped thymic/bone-marrow selection meets its self-antigen in the periphery",
            sublabel: "Input — healthy tissue lacks B7 and CD40L licensing, so the encounter is signal-1-only.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Anergy: exposure to antigen without the costimulatory signal leaves the cell unable to activate on that antigen",
            sublabel: "Process — the antigen itself becomes the off switch; the anergic cell cannot respond even if costimulation arrives later.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Backup layers: regulatory T cells suppress the residual response, and Fas-FasL apoptosis deletes activated self-reactive clones",
            sublabel: "Process — three mechanisms in series: anergy, regulatory T-cell suppression, apoptosis (Fas-FasL pathway).",
            variant: "process",
          },
          {
            id: "o1",
            label: "Self-tolerance preserved — or, if the layers fail, autoimmunity",
            sublabel: "Output — peripheral tolerance is suppression/inactivation of self-reactive T/B cells outside thymus and bone marrow; loss → autoimmunity.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "signal 1 only" },
          { from: "s1", to: "s2", label: "layered brakes" },
          { from: "s2", to: "o1", label: "tolerance vs autoimmunity" },
        ],
        caption:
          "Peripheral tolerance is the second half of the tolerance system — central selection (E24) deletes high-affinity self-reactive clones during development, but the periphery needs its own defenses because not every self-antigen is displayed in the thymus and bone marrow. The first mechanism is anergy: a T or B cell exposed to its antigen without costimulation enters a state in which it cannot become activated by that antigen — the encounter that could have been an attack becomes a lasting off switch. The second is regulatory T-cell suppression (E25's IL-10/TGF-β brake). The third is apoptosis through the Fas-FasL pathway, which deletes chronically re-stimulated or activated lymphocytes — its inherited failure (FAS mutations) produces autoimmune lymphoproliferative syndrome (ALPS): lymphadenopathy, splenomegaly, and autoimmunity from clones that refuse to die. The layered design explains autoimmunity as a multi-point failure: one brake can fail silently because the others hold.",
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "activation-signal-model",
      title: "The two-signal model — activation licensed, or anergy imposed",
      caption:
        "An original KYP redraw of the source's two activation diagrams: the T-cell route (APC with MHC II/I antigen → TCR as signal 1; B7 [CD80/86] → CD28 as signal 2; outputs — Th cytokines, Tc killing) beside the B-cell route (BCR endocytosis → antigen on MHC II → Th-cell TCR as signal 1; CD40L → CD40 as signal 2; Th cytokines directing Ig class switching; outputs — IgM production, class switching, affinity maturation), with the bottom strip carrying anergy (signal 1 without signal 2 = the off switch) and the three peripheral tolerance mechanisms.",
      notice:
        "The source diagrams are pure vector (pdf 123 carries only 1×1 pixel artifacts); this visual is an original KYP teaching diagram preserving the signal-pair logic, not the source artwork.",
    },
    {
      kind: "table",
      title: "T-cell vs B-cell activation — verbatim",
      intro: "The source's activation sequences, verbatim and side by side.",
      columns: ["", "T-cell activation", "B-cell activation and class switching"],
      rows: [
        [
          "PREREQUISITE",
          "APC ingests and processes antigen, then migrates to the draining lymph node. APCs: B cells, dendritic cells, Langerhans cells, macrophages.",
          "Th-cell activation as above (the helper is licensed first).",
        ],
        [
          "SIGNAL 1",
          "Exogenous antigen is presented on MHC II and recognized by TCR on Th (CD4+) cell. Endogenous or cross-presented antigen is presented on MHC I to Tc (CD8+) cell.",
          "B-cell receptor–mediated endocytosis. Exogenous antigen is presented on MHC II and recognized by TCR on Th cell.",
        ],
        [
          "SIGNAL 2",
          "Proliferation and survival: costimulatory signal via interaction of B7 protein (CD80/86) on dendritic cell and CD28 on naïve T cell.",
          "CD40 receptor on B cell binds CD40 ligand (CD40L) on Th cell.",
        ],
        [
          "CYTOKINE DIRECTIVE",
          "Activated Th cell produces cytokines. Tc cell able to recognize and kill virus-infected cell.",
          "Th cells secrete cytokines that determine Ig class switching of B cells.",
        ],
        [
          "OUTCOME",
          "Two signals required for T-cell activation.",
          "B cells are activated and produce IgM. They undergo class switching and affinity maturation.",
        ],
      ],
      caption:
        "Read each column top to bottom as a sequence and each row as the shared architecture: the same two-signal design runs on both chassis, with the receptor pairs swapped (B7-CD28 for the T cell, CD40L-CD40 for the B cell) and the B cell adding the cytokine-directed class-switching step. The rule that licenses everything: two signals are required for T-cell activation, B-cell activation, and class switching.",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "Peripheral tolerance and anergy — the off switch the drugs borrowed",
      body: "Peripheral tolerance is the suppression/inactivation of self-reactive T/B cells outside the thymus and bone marrow → preserves self-tolerance; its loss → autoimmunity. Its three mechanisms: anergy, regulatory T-cell suppression, and apoptosis (Fas-FasL pathway) — FAS failure produces autoimmune lymphoproliferative syndrome (lymphadenopathy, splenomegaly, autoimmunity from clones that cannot be deleted). Anergy is the state during which a cell cannot become activated by exposure to its antigen — induced when T and B cells see antigen without signal 2. KYP extension (beyond this page, for exam relevance): the costimulatory gate became a drug class — CTLA-4-Ig (abatacept) BLOCKS B7-CD28 to treat rheumatoid arthritis, while checkpoint inhibitors (ipilimumab anti-CTLA-4, nivolumab anti-PD-1) RELEASE the inhibitory checkpoints on signal 2 so anti-tumor T cells stay active.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A T cell recognizes its antigen on MHC II, but the presenting cell expresses no B7; instead of proliferating, the T cell becomes unresponsive — and stays unresponsive even when later re-exposed with full costimulation.",
        discriminator: "Signal 1 without signal 2 = lasting unresponsiveness",
        concept: "Anergy — a peripheral tolerance mechanism",
        answer:
          "T and B cells become anergic when exposed to their antigen without costimulatory signal (signal 2). Anergy is the state during which a cell cannot become activated by exposure to its antigen — the antigen encounter itself imposes the off state. It is one of the three peripheral tolerance mechanisms (anergy, regulatory T-cell suppression, Fas-FasL apoptosis) that inactivate self-reactive clones outside the thymus and bone marrow; healthy tissue lacks B7, so self-antigen encounters are signal-1-only by default.",
      },
      {
        stem: "A boy with recurrent pyogenic infections has undetectable IgG, IgA, and IgE with markedly elevated IgM; his T cells proliferate normally to mitogens.",
        discriminator: "Class switching failure with normal T-cell proliferation",
        concept: "CD40L-CD40 signal-2 failure (B-cell route) — hyper-IgM",
        answer:
          "B-cell class switching requires BOTH signal 2 pairs in sequence: the T cell's own activation (B7-CD28) and then CD40L on the activated Th cell binding CD40 on the B cell, with Th cytokines directing the switch. CD40L deficiency delivers signal 1 (MHC II-TCR) but no signal 2 — B cells produce IgM (the default, no-switch product) and cannot class-switch to IgG/IgA/IgE or complete germinal-center affinity maturation. The T-cell side is intact, so mitogen proliferation is normal.",
      },
      {
        stem: "A patient treated with a fusion protein for rheumatoid arthritis develops fewer flares; the drug's mechanism is binding B7 on antigen-presenting cells.",
        discriminator: "Blocking B7-CD28 co-stimulation treats autoimmunity",
        concept: "Pharmacologic use of the two-signal gate (CTLA-4-Ig)",
        answer:
          "Because two signals are required for T-cell activation, blocking signal 2 prevents autoreactive T cells from being licensed — even when they see self-antigen on MHC (signal 1). Abatacept (CTLA-4-Ig) is a fusion protein that binds B7 (CD80/86) on APCs, denying CD28 its ligand: self-reactive T cells get signal 1 without signal 2 and are driven toward anergy instead of activation — the two-signal rule turned into a drug (KYP extension: the drug names are beyond this page; the gate is this page).",
      },
    ],
    traps: [
      {
        a: "Signal 1 alone produces a weak response",
        b: "Signal 1 alone produces NO response — it produces ANERGY",
        whyConfused: "Intuition says partial input gives partial output.",
        keyDifference:
          "The two-signal design is an AND-gate, not a dimmer: antigen recognition without costimulation actively switches the cell OFF (a state in which it cannot become activated by its antigen), rather than weakly switching it on. This is the mechanism that makes peripheral tolerance self-reinforcing — the self-antigen encounter is what imposes the unresponsive state.",
        clue: "Any 'T cell sees antigen without B7/CD28 — what happens' question.",
      },
      {
        a: "B cells activate independently because their BCR binds antigen directly",
        b: "B-cell ACTIVATION and CLASS SWITCHING still need Th-cell help (MHC II-TCR + CD40L-CD40 + cytokines)",
        whyConfused: "BCR binding is antigen-specific and MHC-unrestricted, so B cells look autonomous.",
        keyDifference:
          "BCR-mediated endocytosis is how the B cell LOADS signal 1 (it presents the endocytosed antigen on MHC II to the Th cell's TCR); the Th cell then supplies CD40L for CD40 (signal 2) and the cytokines that determine WHICH Ig class the B cell switches to. T-independent antigens (polysaccharides) are the tested exception, but this page's rule is the Th-dependent path: two signals are required for B-cell activation and class switching.",
        clue: "Any class-switching or IgM-only (hyper-IgM) question.",
      },
      {
        a: "Anergy and deletion are the same thing",
        b: "Anergy = functional inactivation (the cell lives but cannot respond); apoptosis = deletion (the cell dies)",
        whyConfused: "Both are 'peripheral tolerance mechanisms' and both silence the clone.",
        keyDifference:
          "The source separates them precisely: anergy is a state during which a cell cannot become activated by exposure to its antigen (inactivation); apoptosis via the Fas-FasL pathway is deletion. Treg suppression is the third mechanism. The distinction matters clinically — ALPS (FAS failure) accumulates living, activated, self-reactive clones (lymphadenopathy/splenomegaly), while anergy failures release silent clones that can respond later.",
        clue: "Any 'which peripheral tolerance mechanism' or ALPS question.",
      },
    ],
    pivots: [
      {
        lookAlike: "T-cell signal 2 vs B-cell signal 2 (which receptor pair, which cell)",
        differentiator: "B7-CD28 (APC→T cell) vs CD40L-CD40 (T cell→B cell)",
        correctPath:
          "T-cell activation: B7 (CD80/86) on dendritic cell/APC binds CD28 on the naïve T cell — the APC licenses the T cell. B-cell activation: CD40L on the activated Th cell binds CD40 on the B cell — the licensed T cell licenses the B cell. Direction matters: the same CD40L-CD40 pair appears with macrophages in E25's loop; blocking the wrong pair predicts the wrong disease (B7 blockade = abatacept; CD40L failure = hyper-IgM).",
      },
      {
        lookAlike: "Central tolerance (E24) vs peripheral tolerance (this page)",
        differentiator: "Where and against what",
        correctPath:
          "Central tolerance = thymic (T) and bone-marrow (B) selection during development: positive selection keeps MHC-users, negative selection deletes high self-affinity clones (AIRE displays organ antigens). Peripheral tolerance = suppression/inactivation of self-reactive cells OUTSIDE thymus/bone marrow, after they reach the tissues: anergy (signal 1 without signal 2), Treg suppression, Fas-FasL apoptosis. AIRE failure = organ-specific autoimmunity from escaped clones; anergy/Fas failures = systemic autoimmunity from clones that respond or refuse to die.",
      },
    ],
    miniCase: {
      vignette:
        "A 3-year-old boy has had six episodes of otitis media and two bouts of pneumonia with encapsulated organisms in the past year. Laboratory studies show IgG 40 mg/dL, IgA undetectable, IgE undetectable, and IgM 900 mg/dL (elevated); peripheral-blood smear shows normal lymphocyte counts, and T-cell proliferation to phytohemagglutinin is normal. His older maternal brother died at age 5 of Pneumocystis pneumonia. Flow cytometry on the boy's activated T cells is pending.",
      question:
        "Which molecular defect best explains this patient's immunoglobulin profile?",
      options: [
        {
          label: "A",
          text: "Mutation in CD40L preventing the Th-cell signal required for B-cell class switching",
          correct: true,
          why: "Correct — X-linked hyper-IgM syndrome. B-cell activation and class switching require the two-signal sequence: the Th cell recognizes the B cell's MHC II-presented antigen (signal 1) and CD40L on the Th cell binds CD40 on the B cell (signal 2), with Th cytokines directing the switch. CD40L failure leaves signal 1 intact (IgM is still produced — the no-switch default) but blocks class switching to IgG/IgA/IgE and germinal-center maturation: low everything-but-IgM, recurrent encapsulated infections (no opsonizing IgG), opportunistic infections (impaired T-cell-macrophage cooperation via the same CD40L-CD40 pair), X-linked inheritance.",
        },
        {
          label: "B",
          text: "Absence of CD28 on naïve T cells, preventing the costimulatory signal for T-cell activation",
          why: "CD28 loss would block T-CELL activation itself (signal 2 at the B7-CD28 gate) — T-cell proliferation to mitogens would be impaired and Th-cell cytokine output would collapse broadly, not selectively spare IgM while deleting the other classes. The normal proliferation and isolated class-switch failure localize the defect downstream, at the T-B interface.",
        },
        {
          label: "C",
          text: "Mutation in AIRE impairing negative selection in the thymic medulla",
          why: "AIRE deficiency is central tolerance failure: organ-specific autoimmunity (candidiasis, hypoparathyroidism, adrenal insufficiency) with NORMAL immunoglobulin isotypes — not a class-switching defect. The brother's fatal opportunistic infection and the IgM-only profile point to the CD40L-CD40 axis.",
        },
        {
          label: "D",
          text: "B-cell mutation in the membrane IgM locus preventing immunoglobulin production",
          why: "The patient's IgM is HIGH — B cells produce immunoglobulin vigorously; the defect is the switch away from IgM, which is a T-cell-dependent, CD40L-CD40- and cytokine-directed event, not a B-cell production failure.",
        },
        {
          label: "E",
          text: "Deficiency of the Fas (CD95) receptor causing failure of activation-induced apoptosis",
          why: "Fas failure (ALPS) is a peripheral-tolerance breakdown: lymphadenopathy, splenomegaly, and autoimmunity from lymphocytes that cannot undergo activation-induced cell death — immunoglobulins are typically normal or polyclonally elevated, not IgM-only with loss of the switched classes.",
        },
      ],
      reasoning:
        "The pattern to assemble is 'IgM-only': class switching and affinity maturation require the Th-dependent two-signal sequence — BCR endocytosis → MHC II presentation to the Th TCR (signal 1), CD40L-CD40 engagement (signal 2), and Th cytokines that select the isotype. Failure at CD40L (X-linked, fits the brother's history) spares signal 1 (hence robust IgM) but blocks the switch and the macrophage-activating handshake (hence Pneumocystis in the sibling). The distractors each break a different layer of this page's map: CD28 (T-cell signal 2 — would flatten proliferation), AIRE (central display), IgM locus (would lose IgM too), Fas (deletion, not switching).",
    },
  },
  mnemonics: [
    {
      code: "\u201cOne key, one license: TCR turns the key; B7-CD28 or CD40L-CD40 signs the license.\u201d",
      meaning:
        "KYP's key for the two-signal gate: signal 1 (the key — antigen on MHC recognized by TCR) is specific but unlocks nothing alone; signal 2 (the license) is the costimulatory receptor pair that proves the encounter is licensed — B7 (CD80/86) on the APC with CD28 on the naïve T cell, or CD40L on the Th cell with CD40 on the B cell. Key without license = the cell is impounded (anergy).",
      memorizes: "The two signals and their receptor pairs, and the anergy consequence",
      whenToUse: "Any activation, costimulation, or anergy question.",
      clinical: "CTLA-4-Ig (abatacept) blocks the license for autoimmune T cells; checkpoint inhibitors release the inhibitor's grip on it for anti-tumor T cells (KYP extension).",
    },
    {
      code: "\u201cIgM is the first draft; class switching is the edit; affinity maturation is the polish.\u201d",
      meaning:
        "KYP's key for the activated B cell's outcome sequence: the newly activated B cell produces IgM (the germline-encoded default — the first draft), Th-cell cytokines direct class switching (IL-4 → IgE/IgG, TGF-β → IgA — the edit that chooses the format), and affinity maturation refines the binding site (the polish). All three require the licensed Th interaction.",
      memorizes: "IgM-first, then switching and affinity maturation (and their Th dependence)",
      whenToUse: "Any B-cell activation or isotype-sequence question.",
      clinical: "IgM-only profile with loss of switched classes = the CD40L-CD40 signal-2 failure of hyper-IgM.",
    },
    {
      code: "\u201cThe periphery polices with three Ps: anergy (Paralysis), Tregs (Patrol), Fas-FasL (Programmed death).\u201d",
      meaning:
        "KYP's key for the three peripheral tolerance mechanisms: anergy paralyses the clone (it cannot be activated by its antigen), regulatory T cells patrol and suppress (IL-10/TGF-β brake from E25), and the Fas-FasL pathway imposes programmed death on activated self-reactive clones. Loss of the layer = autoimmunity.",
      memorizes: "Peripheral tolerance mechanisms and their order of defense",
      whenToUse: "Any peripheral-tolerance or autoimmunity-mechanism question.",
      clinical: "FAS mutations → autoimmune lymphoproliferative syndrome (ALPS): the deletion layer fails, glands fill with clones that refuse to die.",
    },
  ],
  rapidReview: {
    s30: [
      "APCs: B cells, dendritic cells, Langerhans cells, macrophages",
      "Two signals required for T-cell activation, B-cell activation, AND class switching",
      "T signal 1: exogenous antigen on MHC II → TCR/CD4 (endogenous or cross-presented on MHC I → CD8)",
      "T signal 2: B7 (CD80/86) on APC ↔ CD28 on naïve T cell",
      "B signal 1: BCR endocytosis → antigen on MHC II → Th TCR · B signal 2: CD40 ↔ CD40L",
    ],
    m3: [
      "Activated Th cell produces cytokines; Tc cell kills virus-infected cells",
      "Th cytokines determine Ig class switching",
      "Activated B cells: IgM first → class switching + affinity maturation",
      "Anergy = cannot be activated by antigen (exposed WITHOUT signal 2)",
      "Peripheral tolerance = outside thymus/bone marrow; loss → autoimmunity",
    ],
    m10: [
      "Signal 1 alone = anergy, not a weak response (AND-gate, not a dimmer)",
      "Peripheral tolerance trio: anergy · Treg suppression · Fas-FasL apoptosis",
      "Fas failure → ALPS: lymphadenopathy, splenomegaly, autoimmunity",
      "CD40L failure = hyper-IgM: high IgM, low switched classes, X-linked",
      "B7-CD28 blockade (abatacept) treats RA; anti-CTLA-4/PD-1 unleash anti-tumor T cells (KYP extension)",
    ],
  },
  recall: [
    {
      q: "Name the professional APCs and state the universal rule about signals.",
      a: "APCs: B cells, dendritic cells, Langerhans cells, macrophages. Two signals are required for T-cell activation, B-cell activation, and class switching.",
    },
    {
      q: "Define signal 1 and signal 2 for T-cell activation.",
      a: "Signal 1 (T-cell activation): exogenous antigen presented on MHC II and recognized by TCR on the Th (CD4+) cell; endogenous or cross-presented antigen presented on MHC I to the Tc (CD8+) cell. Signal 2 (proliferation and survival): costimulatory signal via interaction of B7 protein (CD80/86) on the dendritic cell and CD28 on the naïve T cell.",
    },
    {
      q: "Walk through B-cell activation and class switching.",
      a: "Th-cell activation as above; B-cell receptor–mediated endocytosis; exogenous antigen presented on MHC II and recognized by TCR on Th cell (signal 1); CD40 receptor on B cell binds CD40L on Th cell (signal 2); Th cells secrete cytokines that determine Ig class switching. B cells are activated and produce IgM, then undergo class switching and affinity maturation.",
    },
    {
      q: "Define anergy and name the peripheral tolerance mechanisms.",
      a: "Anergy is a state during which a cell cannot become activated by exposure to its antigen; T and B cells become anergic when exposed to their antigen without costimulatory signal (signal 2). Peripheral tolerance mechanisms: anergy, regulatory T-cell suppression, apoptosis (Fas-FasL pathway).",
    },
    {
      q: "What is peripheral tolerance, and what happens when it fails?",
      a: "Suppression/inactivation of self-reactive T/B cells (outside thymus/bone marrow) → preserves self-tolerance. Loss → autoimmunity.",
    },
  ],
  related: [
    {
      title: "T-Cell Development: Thymic Selection & Subset Lineages",
      topicId: "t-cell-development",
      note: "Central tolerance — the selection school whose periphery-facing counterpart is this page's anergy/Treg/Fas system.",
    },
    {
      title: "Effector T Cells: Cytotoxic, Regulatory & the Macrophage Interface",
      topicId: "cytotoxic-regulatory-t-cells",
      note: "The Treg brake (one of the three peripheral tolerance layers) and the CD40L-CD40 handshake this page licenses.",
    },
    {
      title: "MHC Complex I and II: The Antigen Display Scaffolds",
      topicId: "mhc-complex",
      note: "The MHC I/II scaffolds that carry signal 1 to CD8+ and CD4+ T cells respectively.",
    },
    {
      title: "Antibody Structure & Function",
      topicId: "antibody-structure",
      note: "What class switching and affinity maturation are rearranging — Fab/Fc anatomy and the isotype series.",
    },
  ],
  crossLinks: [
    {
      subject: "Immunology (Hyper-IgM)",
      connection: "CD40L deficiency is the signal-2 failure of the B-cell route: IgM-only profile, encapsulated plus opportunistic infections — the two-signal rule read as a disease.",
    },
    {
      subject: "Rheumatology & Oncology Pharmacology",
      connection: "The costimulatory gate is a drug class: abatacept blocks B7-CD28 for autoimmunity; ipilimumab and nivolumab release CTLA-4/PD-1 brakes for cancer (KYP extension beyond this page).",
    },
    {
      subject: "Immunology (ALPS)",
      connection: "FAS/FASL mutations break the apoptotic layer of peripheral tolerance — can't-delete clones accumulate as lymphadenopathy, splenomegaly, and autoimmunity.",
    },
    {
      subject: "Transplantation",
      connection: "Costimulation blockade is transplant medicine's mechanistic dream — inducing donor-specific anergy (signal 1 without signal 2) rather than global immunosuppression.",
    },
  ],
};
