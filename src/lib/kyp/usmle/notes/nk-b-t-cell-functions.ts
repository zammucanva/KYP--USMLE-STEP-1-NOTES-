import type { KypUsMLENote } from "../types";

// Immunology — Cellular Components (E-batch 23).
// Source: First Aid 2026, Part 1 pdf 121 / book 99
// (Major functions of natural killer cells; Major functions of B and T cells)

export const nkBTCellFunctions: KypUsMLENote = {
  id: "nk-b-t-cell-functions",
  title: "Major Functions of NK, B and T Cells",
  subtitle:
    "The effector roster of the immune system. NK cells — lymphocytes of the INNATE arm — kill virally infected and tumor cells with perforin and granzymes, driven by a two-part kill decision: a nonspecific activation signal on the target and/or the absence of an inhibitory signal (MHC I — 'missing self'). Their activity is enhanced by IL-2, IL-12, IFN-α, and IFN-β; they produce IFN-γ to activate macrophages; and they kill antibody-coated targets via ADCC (CD16 binds the Fc region of bound IgG). B cells run humoral immunity: recognize and present antigen (optimizing specificity by somatic hypermutation), produce antibody as plasma cells, and maintain immunologic memory. T cells run cell-mediated immunity: CD4+ helpers assist B-cell antibody production and recruit phagocytes and other leukocytes with cytokines, CD8+ cytotoxic cells kill virus-infected and tumor cells with perforin and granzymes (like NK cells), and T cells mediate type IV hypersensitivity and acute/chronic cellular organ rejection.",
  subject: "Immunology",
  system: "Section II · High-Yield General Principles — Cellular Components",
  pilotCategory: "Cellular Components — NK cell kill logic (missing self, ADCC), B-cell humoral functions, T-cell effector functions",
  difficulty: 2,
  readTime: 7,
  sourceRef:
    "First Aid 2026, Part 1 pp. 99 (Major functions of natural killer cells; Major functions of B and T cells)",
  tags: [
    "natural killer cells",
    "NK cells",
    "perforin",
    "granzymes",
    "missing self",
    "MHC I",
    "tumor immunity",
    "viral immunity",
    "IL-2",
    "IL-12",
    "IFN-alpha",
    "IFN-beta",
    "IFN-gamma",
    "macrophage activation",
    "ADCC",
    "antibody-dependent cell-mediated cytotoxicity",
    "CD16",
    "Fc receptor",
    "IgG",
    "B cells",
    "humoral immunity",
    "somatic hypermutation",
    "plasma cells",
    "immunoglobulins",
    "memory B cells",
    "T cells",
    "cell-mediated immunity",
    "CD4+ T cells",
    "CD8+ T cells",
    "helper T cells",
    "cytotoxic T cells",
    "type IV hypersensitivity",
    "cellular organ rejection",
  ],
  core: {
    what: "Natural killer cells are lymphocyte members of the innate immune system that use perforin and granzymes to induce apoptosis of virally infected cells and tumor cells. The kill decision integrates two inputs: NK cells are induced to kill when exposed to a nonspecific activation signal on the target cell and/or to an absence of an inhibitory signal such as MHC I on the target cell surface — the 'missing self' principle, which is why NK cells preferentially attack cells that have downregulated MHC I (a common viral and tumor escape mechanism). NK activity is enhanced by IL-2, IL-12, IFN-α, and IFN-β; NK cells produce IFN-γ, which activates macrophages; and they also kill via antibody-dependent cell-mediated cytotoxicity (ADCC), in which CD16 on the NK cell binds the Fc region of IgG bound to a target, activating the NK cell. B cells mediate humoral immunity with three functions: recognize and present antigen (undergoing somatic hypermutation to optimize antigen specificity), produce antibody (differentiating into plasma cells that secrete specific immunoglobulins), and maintain immunologic memory (memory B cells persist and accelerate the future response to antigen). T cells mediate cell-mediated immunity: CD4+ T cells help B cells make antibodies and produce cytokines to recruit phagocytes and activate other leukocytes; CD8+ T cells directly kill virus-infected and tumor cells via perforin and granzymes (similar to NK cells); and T cells drive type IV hypersensitivity reactions as well as acute and chronic cellular organ rejection.",
    why: "This page is the effector roster the rest of the chapter deploys. Every later topic — T-cell development and subset cytokines, antibody structure and isotypes, immunodeficiency patterns, transplant rejection, hypersensitivity — assumes you can already say what each lymphocyte does for a living. The NK kill decision is the highest-yield single concept here: viruses and tumors downregulate MHC I to escape CD8+ T cells, and the missing-self logic of NK cells is the countermeasure that catches exactly those cells — CD8 and NK are complementary, not redundant, which is why the exam loves pairing them. The B-cell function triad (recognize/present, produce, remember) maps one-to-one onto humoral immunodeficiency phenotypes, vaccine responses, and the somatic hypermutation concept. And the T-cell function list contains two pure recall anchors — type IV hypersensitivity and acute/chronic cellular organ rejection are T-cell (cell-mediated) phenomena — that are tested across organ systems.",
    keyIdea: "Sort each lymphocyte by its job. NK cell: innate lymphocyte; kills virally infected and tumor cells with perforin/granzymes; kills when an activating signal is present AND/OR the MHC I inhibitory signal is absent (missing self); amplified by IL-2, IL-12, IFN-α/β; outputs IFN-γ for macrophage activation; kills antibody-coated targets through CD16 binding the Fc region of bound IgG (ADCC). B cell: humoral arm; recognizes and presents antigen (somatic hypermutation optimizes specificity), produces antibody (plasma cells secrete immunoglobulins), maintains memory (memory B cells accelerate future responses). T cell: cell-mediated arm; CD4+ helps B cells make antibodies and produces cytokines that recruit phagocytes and activate other leukocytes; CD8+ directly kills virus-infected and tumor cells via perforin and granzymes (similar to NK cells); T cells mediate type IV hypersensitivity and acute/chronic cellular organ rejection. The killer comparison to hold: CD8+ kills with the same perforin/granzyme machinery as NK, but CD8+ requires MHC I presentation (adaptive, antigen-specific), while NK kills preferentially when MHC I is absent (innate, pattern-based).",
  },
  mechanisms: [
    {
      id: "nk-kill-decision",
      title: "The NK kill decision — activating signal + missing self → perforin/granzymes",
      context: "How an innate lymphocyte decides to kill without a TCR",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A host cell is stressed: virally infected or tumor, with surface MHC I downregulated",
            sublabel: "Input — viruses and tumors reduce MHC I to escape CD8+ T cells; stress ligands appear on the surface (the nonspecific activation signal).",
            variant: "input",
          },
          {
            id: "s1",
            label: "Activating receptors on the NK cell recognize the nonspecific activation signal",
            sublabel: "Process — the 'go' input: an activating signal on the target cell induces killing.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Inhibitory receptors find no MHC I to engage — the self-check fails",
            sublabel: "Process — the 'brake' input: MHC I on the target surface is the inhibitory signal; with it absent, the kill program is unrestrained (missing self).",
            variant: "process",
          },
          {
            id: "s3",
            label: "Perforin forms pores and granzymes enter, inducing apoptosis",
            sublabel: "Process — the same cytotoxic granule machinery CD8+ T cells use, delivered without MHC-restricted antigen recognition.",
            variant: "process",
          },
          {
            id: "o1",
            label: "The virally infected or tumor cell undergoes apoptosis",
            sublabel: "Output — activity enhanced by IL-2, IL-12, IFN-α, IFN-β; NK cells also produce IFN-γ → macrophage activation.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "stress ligand" },
          { from: "s1", to: "s2", label: "activation unrestrained" },
          { from: "s2", to: "s3", label: "degranulation" },
          { from: "s3", to: "o1", label: "apoptosis" },
        ],
        caption:
          "NK cells integrate two receptor inputs. The activating arm fires when a nonspecific activation signal appears on the target cell — stress ligands that virally infected and transformed cells display. The inhibitory arm reads MHC I: a healthy nucleated cell bristling with MHC I engages NK inhibitory receptors and lives; a cell that has downregulated MHC I (a classic viral and tumor escape from CD8+ surveillance) provides no inhibitory signal, and the kill proceeds — 'missing self'. Either input alone can tip the decision: killing is induced by the activation signal AND/OR the absence of the inhibitory signal. The effector arm is perforin (pores) + granzymes (apoptosis induction) — identical ammunition to CD8+ T cells. The volume knobs: IL-2, IL-12, IFN-α, and IFN-β enhance NK activity, and NK cells themselves produce IFN-γ, which activates macrophages — linking innate killing to macrophage effector function.",
      },
    },
    {
      id: "adcc-kill-route",
      title: "ADCC — CD16 reads the Fc tail of bound IgG",
      context: "The antibody-dependent route to NK activation",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "IgG antibodies coat a target cell (eg, a virus-infected or tumor cell)",
            sublabel: "Input — antigen-specific antibodies bind surface antigen; the Fc regions of the bound IgG protrude.",
            variant: "input",
          },
          {
            id: "s1",
            label: "CD16 (the Fc receptor) on the NK cell binds the Fc region of the bound IgG",
            sublabel: "Process — the antibody provides the antigen specificity the NK cell itself lacks.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Fc-receptor engagement activates the NK cell",
            sublabel: "Process — CD16 cross-linking is itself an activating signal, independent of the missing-self pathway.",
            variant: "process",
          },
          {
            id: "o1",
            label: "The antibody-coated target is killed by the same perforin/granzyme machinery",
            sublabel: "Output — antibody-dependent cell-mediated cytotoxicity: innate killer, adaptive guidance.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "Fc region" },
          { from: "s1", to: "s2", label: "CD16 binding" },
          { from: "s2", to: "o1", label: "perforin + granzymes" },
        ],
        caption:
          "ADCC is the hybrid kill: antigen specificity comes from the antibody (adaptive arm), and the lethal effector is the NK cell (innate arm). CD16 — an Fc receptor for IgG — binds the Fc region of IgG that is already bound to the target cell surface, and this engagement activates the NK cell to kill through its standard perforin/granzyme granules. The clinical payoff is therapeutic monoclonal antibodies: agents like rituximab (anti-CD20) coat lymphoma cells with human IgG1, and NK cells (and macrophages) clear the coated cells through Fc-dependent mechanisms. ADCC explains why a patient's immune effector cells matter even when the drug provides the specificity.",
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "nk-kill-model",
      title: "The NK kill decision — two inputs, one granule payload",
      caption:
        "An original KYP diagram of the NK kill logic: the target cell (left) presenting a stress ligand (the nonspecific activation signal) and downregulated MHC I (missing self); the NK cell (center) integrating its activating receptor ('go') and inhibitory receptor ('brake' — no MHC I to engage); the output — perforin pores and granzymes inducing apoptosis. Side rails carry the volume knobs (activity enhanced by IL-2, IL-12, IFN-α, IFN-β), the NK cell's own output (IFN-γ → macrophage activation), and the ADCC route (CD16 binds the Fc region of bound IgG → activation → kill).",
      notice:
        "The source page presents these functions as prose (pdfimages confirms no rasters on pdf 121); this visual is an original KYP teaching diagram built from the source sentences.",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "The MHC I double-cross — why ↓MHC I escapes CD8+ but walks into NK",
      body: "Viruses (eg, HSV, CMV, HIV) and tumor cells downregulate MHC I to evade CD8+ cytotoxic T cells, which can only see antigen displayed on MHC I. The escape has a cost: an NK inhibitory receptor with no MHC I to engage means no inhibitory signal — and the NK cell kills. CD8+ T cells and NK cells are therefore complementary surveillance systems: CD8+ requires MHC I presentation to kill; NK cells kill preferentially when MHC I is absent (missing self). A cell cannot hide from both at once — unless it keeps MHC I while displaying no antigen, or (as some tumors and viruses do) expresses enough inhibitory ligands to blunt NK activation.",
    },
    {
      kind: "table",
      title: "Major functions of B and T cells — verbatim",
      intro: "The source's function roster for the two adaptive lymphocyte lineages, verbatim.",
      columns: ["", "B cells", "T cells"],
      rows: [
        [
          "IMMUNITY TYPE",
          "Humoral immunity.",
          "Cell-mediated immunity.",
        ],
        [
          "FUNCTION 1",
          "Recognize and present antigen—undergo somatic hypermutation to optimize antigen specificity.",
          "CD4+ T cells help B cells make antibodies and produce cytokines to recruit phagocytes and activate other leukocytes.",
        ],
        [
          "FUNCTION 2",
          "Produce antibody—differentiate into plasma cells to secrete specific immunoglobulins.",
          "CD8+ T cells directly kill virus-infected and tumor cells via perforin and granzymes (similar to NK cells).",
        ],
        [
          "FUNCTION 3",
          "Maintain immunologic memory—memory B cells persist and accelerate future response to antigen.",
          "Type IV hypersensitivity reaction.",
        ],
        [
          "FUNCTION 4",
          "",
          "Acute and chronic cellular organ rejection.",
        ],
      ],
      caption:
        "Read each column as a job description. B cells: recognize/present (with somatic hypermutation refining specificity), produce (plasma cells → immunoglobulins), remember (memory B cells). T cells: help (CD4+ → B-cell antibody production + cytokine recruitment of phagocytes and other leukocytes), kill (CD8+ → perforin/granzymes, like NK), and two exam-favorite consequences of cell-mediated immunity — type IV hypersensitivity and acute/chronic cellular organ rejection. Note the symmetry: B cells carry all three classic adaptive functions internally, while T cells distribute theirs across CD4+ and CD8+ subsets.",
    },
    {
      kind: "visual",
      visualId: "b-t-division-of-labor",
      title: "B and T cells — the division of labor",
      caption:
        "An original KYP diagram: the B-cell panel (humoral immunity — recognize and present antigen with somatic hypermutation optimizing specificity; produce antibody via plasma cells; maintain memory with persistent memory B cells) beside the T-cell panel (cell-mediated immunity — CD4+ helpers assisting B-cell antibody production and recruiting phagocytes/leukocytes via cytokines; CD8+ cytotoxic cells killing virus-infected and tumor cells with perforin/granzymes like NK cells; and the two context rows — type IV hypersensitivity and acute/chronic cellular organ rejection).",
      notice:
        "Original KYP synthesis diagram (the source presents these functions as a compact list; no textbook artwork exists on pdf 121). The verbatim function table is the note's previous block.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A tumor cell line is engineered to lack MHC I expression; it is injected into two mice — one lacking NK cells and one with normal NK cells.",
        discriminator: "MHC I-negative target killed only when NK cells are present",
        concept: "Missing-self recognition (NK cells)",
        answer:
          "The NK cell kill decision integrates an activating signal and the ABSENCE of the inhibitory signal (MHC I on the target surface). A cell without MHC I engages no NK inhibitory receptor, so the brake is off; combined with stress-ligand activation, the NK cell uses perforin and granzymes to induce apoptosis. The same MHC I-negative cell is invisible to CD8+ T cells (which require MHC I presentation) — the two killer systems are complementary.",
      },
      {
        stem: "A patient with CD20+ lymphoma receives rituximab (a monoclonal IgG antibody against CD20); tumor cells are cleared even though the patient's own antibodies are exhausted.",
        discriminator: "Therapeutic IgG coating → Fc-dependent killing",
        concept: "Antibody-dependent cell-mediated cytotoxicity (ADCC)",
        answer:
          "Rituximab-coated lymphoma cells display bound IgG with Fc regions protruding. CD16 on NK cells binds the Fc region of the bound IgG, activating the NK cell to kill via perforin and granzymes — antibody-dependent cell-mediated cytotoxicity. The drug supplies antigen specificity; the patient's NK cells supply the lethal machinery.",
      },
      {
        stem: "A child has recurrent sinopulmonary infections; serology shows near-absent serum immunoglobulins of all isotypes, and vaccination produces no antibody response, but delayed-type hypersensitivity skin testing is intact.",
        discriminator: "Absent antibodies with intact cell-mediated immunity",
        concept: "B-cell function failure (humoral arm) with preserved T-cell function",
        answer:
          "The B-cell function list — recognize antigen, produce antibody (plasma cells), maintain memory — is globally absent, while T-cell cell-mediated responses (the intact DTH skin test) are preserved. The pattern localizes the defect to the B-cell/plasma-cell axis: antibody production is the B cell's job, and type IV hypersensitivity (the skin test) is a T-cell function.",
      },
    ],
    traps: [
      {
        a: "NK cells kill any cell that expresses MHC I",
        b: "NK cells kill when MHC I is ABSENT (missing self)",
        whyConfused: "MHC I is taught as the 'self' flag in transplant and CD8 contexts.",
        keyDifference:
          "For CD8+ T cells, MHC I presence + antigen = kill signal. For NK cells, MHC I presence = inhibitory signal (do NOT kill); its absence removes the brake. Opposite logic with the same molecule — NK cells are the ones that catch MHC I-downregulated virus-infected and tumor cells.",
        clue: "Any stem describing a tumor or virus that 'downregulates MHC I' or an 'MHC I-deficient target'.",
      },
      {
        a: "NK cells are adaptive because they are lymphocytes",
        b: "NK cells are INNATE lymphocytes — no antigen-specific receptor",
        whyConfused: "Everything lymphocyte-shaped feels adaptive.",
        keyDifference:
          "The source is explicit: NK cells are a 'lymphocyte member of the innate immune system.' They use germline-encoded activating/inhibitory receptors (no V(D)J TCR/BCR), respond without prior sensitization, and form no antigen-specific memory — the innate profile from the innate-vs-adaptive note, now with the kill logic attached.",
        clue: "Any 'which lymphocyte is innate' or 'pattern-based killing' question.",
      },
      {
        a: "CD8+ T cells kill antibody-coated cells via ADCC",
        b: "ADCC is the NK cell's CD16-dependent route",
        whyConfused: "Both CD8+ T cells and NK cells kill virus-infected and tumor cells with perforin/granzymes.",
        keyDifference:
          "The ammunition is the same (perforin, granzymes), but the guidance differs: CD8+ kills are TCR- and MHC I-restricted (antigen-specific), while ADCC is guided by antibody — CD16 on the NK cell binds the Fc region of IgG already bound to the target. Antibody-coated target + Fc receptor = ADCC, an NK-cell (and macrophage) function.",
        clue: "Any stem pairing a monoclonal antibody drug with immune effector killing.",
      },
    ],
    pivots: [
      {
        lookAlike: "NK cell killing vs CD8+ T-cell killing (which killer, which rule)",
        differentiator: "Recognition requirement and MHC I direction",
        correctPath:
          "CD8+ cytotoxic T cell: adaptive, TCR-mediated, REQUIRES antigen on MHC I; kills virus-infected and tumor cells via perforin/granzymes. NK cell: innate, germline-encoded receptors, kills preferentially when MHC I is ABSENT (missing self) or when CD16 binds Fc of bound IgG (ADCC); also perforin/granzymes. Same payload, opposite MHC I logic — the exam's favorite symmetry.",
      },
      {
        lookAlike: "Humoral defect vs cell-mediated defect (which arm failed)",
        differentiator: "Antibody levels vs delayed-type/cellular responses",
        correctPath:
          "Recurrent encapsulated-bacteria infections + absent/low immunoglobulins + poor vaccine antibody response = B-cell (humoral) failure. Recurrent viral/fungal/opportunistic infections + absent delayed-type hypersensitivity + (per the source) failed type IV hypersensitivity and cellular rejection = T-cell (cell-mediated) failure. The function roster on this page is the map both phenotypes are read from.",
      },
    ],
    miniCase: {
      vignette:
        "A 58-year-old woman with metastatic HER2-positive breast cancer begins adjuvant therapy including trastuzumab, a humanized IgG1 monoclonal antibody against HER2. Six weeks later, imaging shows regression of her metastatic hepatic lesions. Tumor biopsy at a residual site shows HER2-positive cells coated with the therapeutic antibody and undergoing apoptosis adjacent to cells containing cytotoxic granules. Her oncologist explains that the drug works partly 'by marking the cells for the immune system.'",
      question:
        "Which immune effector mechanism most directly accounts for the antibody-coated tumor cell apoptosis in this patient?",
      options: [
        {
          label: "A",
          text: "NK cells bind the Fc region of the antibody-coated tumor cells through CD16 and kill them via perforin and granzymes",
          correct: true,
          why: "Correct — antibody-dependent cell-mediated cytotoxicity. Trastuzumab coats HER2-positive cells with IgG1; CD16 (the Fc receptor) on NK cells binds the Fc region of the bound IgG, activating the NK cell, which kills the coated tumor cell with the same perforin/granzyme granules it uses against virus-infected cells. The antibody supplies specificity; the innate killer supplies the machinery.",
        },
        {
          label: "B",
          text: "CD8+ cytotoxic T cells recognize the antibody's Fc portion presented on MHC I and lyse the tumor cell",
          why: "CD8+ T cells recognize peptide antigen on MHC I through their TCR — they cannot recognize free or bound antibody Fc. The antibody-coated cell is instead an ADCC target; confusing the two kill-guidance systems is the classic trap.",
        },
        {
          label: "C",
          text: "The monoclonal antibody directly activates complement, and the membrane attack complex induces tumor cell apoptosis",
          why: "Complement (if activated) produces necrotic osmotic lysis via the membrane attack complex, not granule-mediated apoptosis — and the question asks for the mechanism most directly explaining apoptosis adjacent to granule-containing cells. IgG1 also fixes complement weakly relative to its ADCC role here.",
        },
        {
          label: "D",
          text: "B cells differentiate into plasma cells and secrete additional anti-HER2 immunoglobulins that directly lyse the tumor",
          why: "Plasma-cell antibody production is the B cell's humoral function, but antibodies do not directly lyse cells; they opsonize, neutralize, and recruit effectors. In this patient the specificity is already supplied by the drug — the defect to explain is the killing itself.",
        },
        {
          label: "E",
          text: "Tumor cells downregulate MHC I in response to the antibody, and NK cells kill them through their T-cell receptors",
          why: "The missing-self half of the sentence is real (↓MHC I removes the NK inhibitory signal), but NK cells have no T-cell receptors — they recognize with germline-encoded activating and inhibitory receptors plus CD16. The described mechanism is ADCC, not TCR-mediated recognition.",
        },
      ],
      reasoning:
        "The vignette assembles the three ADCC components named in the source: an antibody-coated target cell (trastuzumab on HER2-positive tumor cells), CD16 binding the Fc region of the bound IgG on an NK cell, and activation of the NK cell to kill with perforin and granzymes (the observed granule-adjacent apoptosis). Distractor B inverts the CD8/NK guidance systems, D substitutes the B-cell function list for the killing mechanism, E mixes the missing-self pathway with a nonexistent NK TCR, and C substitutes complement lysis for granule-mediated apoptosis. The question also cements the chapter's larger symmetry: CD8+ kills with MHC I present, NK kills with it absent or via antibody Fc.",
    },
  },
  mnemonics: [
    {
      code: "\u201cNo key, no mercy: MHC I is the key that tells NK \u2018don\u2019t kill me.\u2019\u201d",
      meaning:
        "KYP's key for the missing-self rule: a healthy nucleated cell shows its key (MHC I) to the NK inhibitory receptor and is spared. Virus-infected and tumor cells lose the key (↓MHC I to escape CD8+ T cells) — no inhibitory signal — and the NK cell, especially with an activating stress signal present, kills with perforin and granzymes.",
      memorizes: "The NK kill decision and its MHC I direction",
      whenToUse: "Any stem with MHC I downregulation, tumor immune escape, or NK-versus-CD8 comparisons.",
      clinical: "CMV and HSV encode MHC I-blocking proteins; tumors with β2-microglobulin loss escape CD8+ but become NK targets.",
    },
    {
      code: "\u201cB cells run on RPM: Recognize, Produce, Remember.\u201d",
      meaning:
        "KYP's key for the B-cell function triad: Recognize and present antigen (refining specificity by somatic hypermutation), Produce antibody (differentiate into plasma cells secreting immunoglobulins), Maintain immunologic Memory (memory B cells persist and accelerate future responses). T cells run the cell-mediated lane: CD4+ helps (B cells + phagocyte recruitment), CD8+ kills (perforin/granzymes, like NK), and T cells own type IV hypersensitivity and cellular organ rejection.",
      memorizes: "The B-cell function list and the T-cell function list",
      whenToUse: "Any 'which lymphocyte performs this function' or humoral-vs-cell-mediated sorting question.",
      clinical: "Absent RPM (agammaglobulinemia with failed vaccination) = B-cell failure; intact antibodies but absent DTH and cellular rejection = T-cell failure.",
    },
  ],
  rapidReview: {
    s30: [
      "NK cells: lymphocyte members of the INNATE immune system",
      "NK kill: perforin + granzymes → apoptosis of virally infected and tumor cells",
      "NK trigger: activating signal AND/OR absence of inhibitory signal (MHC I = missing self)",
      "B cells: humoral — recognize/present antigen, produce antibody (plasma cells), maintain memory",
      "T cells: cell-mediated — CD4+ helps, CD8+ kills (perforin/granzymes, like NK)",
    ],
    m3: [
      "NK activity enhanced by IL-2, IL-12, IFN-α, IFN-β",
      "NK cells produce IFN-γ → macrophage activation",
      "ADCC: CD16 binds Fc region of bound IgG → NK activation → kill",
      "CD4+ T cells: help B cells make antibodies + cytokines recruiting phagocytes/leukocytes",
      "T cells mediate type IV hypersensitivity + acute/chronic cellular organ rejection",
    ],
    m10: [
      "↓MHC I escapes CD8+ but triggers NK (missing self) — the complementary pair",
      "Somatic hypermutation optimizes B-cell antigen specificity",
      "Memory B cells persist → accelerated future antibody response",
      "Monoclonal antibody drugs (rituximab, trastuzumab) work partly via ADCC",
    ],
  },
  recall: [
    {
      q: "State the two conditions that induce an NK cell to kill, and the effector molecules it uses.",
      a: "NK cells are induced to kill when exposed to a nonspecific activation signal on the target cell and/or to an absence of an inhibitory signal such as MHC I on the target cell surface. They use perforin and granzymes to induce apoptosis of virally infected cells and tumor cells.",
    },
    {
      q: "Which cytokines enhance NK cell activity, and which cytokine do NK cells produce, with what effect?",
      a: "Activity is enhanced by IL-2, IL-12, IFN-α, and IFN-β. NK cells produce IFN-γ, which activates macrophages.",
    },
    {
      q: "Describe antibody-dependent cell-mediated cytotoxicity (ADCC).",
      a: "NK cells also kill via ADCC: CD16 on the NK cell binds the Fc region of IgG bound to a target cell, activating the NK cell to kill the antibody-coated target.",
    },
    {
      q: "List the three B-cell functions with their mechanisms.",
      a: "Recognize and present antigen (undergoing somatic hypermutation to optimize antigen specificity); produce antibody (differentiating into plasma cells to secrete specific immunoglobulins); maintain immunologic memory (memory B cells persist and accelerate future response to antigen).",
    },
    {
      q: "What are the functions of CD4+ and CD8+ T cells, and which two exam phenomena are T-cell (cell-mediated) functions?",
      a: "CD4+ T cells help B cells make antibodies and produce cytokines to recruit phagocytes and activate other leukocytes. CD8+ T cells directly kill virus-infected and tumor cells via perforin and granzymes (similar to NK cells). T cells mediate type IV hypersensitivity reactions and acute and chronic cellular organ rejection.",
    },
  ],
  related: [
    {
      title: "MHC Complex I and II: The Antigen Display Scaffolds",
      topicId: "mhc-complex",
      note: "The molecule whose presence guides CD8+ and whose absence guides NK — the two recognition logics meet on MHC I.",
    },
    {
      title: "Innate vs Adaptive Immunity",
      topicId: "innate-vs-adaptive-immunity",
      note: "NK cells are the lymphocyte listed on the innate side — this note supplies their kill logic.",
    },
    {
      title: "T-Cell Development: Thymic Selection & Subset Lineages",
      topicId: "t-cell-development",
      note: "How the CD4+/CD8+ subsets and the Th1/Th2/Th17/Treg lineages are built — the producers of this note's cytokines.",
    },
    {
      title: "Hypersensitivity Reactions",
      topicId: "hypersensitivity-types",
      note: "Type IV (delayed, cell-mediated) is the T-cell function that appears in this roster — the other three are antibody/complement-driven.",
    },
  ],
  crossLinks: [
    {
      subject: "Oncology (Tumor Immune Escape)",
      connection: "Tumors downregulate MHC I (often via β2-microglobulin loss) to escape CD8+ surveillance — and become NK-cell targets by missing self; therapeutic antibodies add ADCC on top.",
    },
    {
      subject: "Microbiology (Viral Immune Evasion)",
      connection: "CMV, HSV, HIV and other viruses encode MHC I-interference proteins — the selective pressure that paired NK missing-self recognition with the CD8 pathway.",
    },
    {
      subject: "Pharmacology (Monoclonal Antibodies)",
      connection: "Rituximab, trastuzumab and other IgG1 therapeutics exploit ADCC — CD16-bearing NK cells are the effector arm that turns antibody coating into tumor cell apoptosis.",
    },
    {
      subject: "Transplantation",
      connection: "Acute and chronic cellular organ rejection are T-cell functions on this roster — the direct link from this page to the transplant-rejection clock.",
    },
  ],
};
