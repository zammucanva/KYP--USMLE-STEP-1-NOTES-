import type { KypUsMLENote } from "../types";

// Immunology — Immune Responses (E-batch 36).
// Source: First Aid 2026, Part 1 pdf 136 / book 114
// (Immunodeficiencies — B-cell disorders: Bruton agammaglobulinemia,
//  Selective IgA deficiency, Common variable immunodeficiency)

export const bCellImmunodeficiencies: KypUsMLENote = {
  id: "b-cell-immunodeficiencies",
  title: "B-Cell Immunodeficiencies: Bruton, IgA Deficiency & CVID",
  subtitle:
    "The humoral arm's three classic failure modes, each cutting the B-cell lineage at a different station. X-LINKED (BRUTON) AGAMMAGLOBULINEMIA: a defect in BTK, a tyrosine kinase gene, means no B-cell maturation — X-linked recessive (↑ in boys), presenting with recurrent bacterial and enteroviral infections after 6 months as maternal IgG wanes, with absent B cells in peripheral blood, low immunoglobulins of all classes, and absent or scanty lymph nodes and tonsils (primary follicles and germinal centers absent) — live vaccines contraindicated. SELECTIVE IgA DEFICIENCY: the most common primary immunodeficiency, familial, sporadic, or secondary to certain viral infections or medications — the majority are asymptomatic, but airway and GI infections, autoimmune disease (eg, celiac), atopy, and anaphylaxis to IgA in blood products occur; findings are low IgA with normal IgG and IgM, increased susceptibility to giardiasis, and the laboratory quirks of false-negative celiac testing and false-positive serum pregnancy tests. COMMON VARIABLE IMMUNODEFICIENCY: a defect in B-cell differentiation (cause unknown in most cases) — may present in childhood but is usually diagnosed after puberty, with increased risk of autoimmune disease, bronchiectasis, lymphoma, and sinopulmonary infections; findings are low plasma cells and low immunoglobulins, with B cells present.",
  subject: "Immunology",
  system: "Section II · High-Yield General Principles — Immune Responses",
  pilotCategory: "Immune Responses — B-cell disorders by maturation stage: BTK/Bruton (early arrest, absent B cells), selective IgA deficiency (class-specific switch failure, most common primary immunodeficiency), CVID (late differentiation arrest, B cells present with low plasma cells)",
  difficulty: 2,
  readTime: 8,
  sourceRef:
    "First Aid 2026, Part 1 pp. 114 (Immunodeficiencies — B-cell disorders)",
  tags: [
    "immunodeficiency",
    "B-cell disorders",
    "X-linked agammaglobulinemia",
    "Bruton agammaglobulinemia",
    "BTK",
    "tyrosine kinase",
    "B-cell maturation",
    "X-linked recessive",
    "recurrent bacterial infections",
    "enteroviral infections",
    "maternal IgG",
    "absent B cells",
    "absent tonsils",
    "absent lymph nodes",
    "germinal centers",
    "live vaccines contraindicated",
    "selective IgA deficiency",
    "most common primary immunodeficiency",
    "giardiasis",
    "false-negative celiac test",
    "false-positive pregnancy test",
    "anaphylaxis to IgA",
    "blood products",
    "atopy",
    "common variable immunodeficiency",
    "CVID",
    "B-cell differentiation",
    "plasma cells",
    "bronchiectasis",
    "lymphoma risk",
    "sinopulmonary infections",
    "autoimmune disease",
    "hypogammaglobulinemia",
  ],
  core: {
    what: "The B-cell disorders cut the humoral lineage at three stations. X-linked (Bruton) agammaglobulinemia: a defect in BTK, a tyrosine kinase gene, results in no B-cell maturation; it is X-linked recessive (↑ in boys) and presents with recurrent bacterial and enteroviral infections after 6 months (when maternal IgG has waned). Findings: absent B cells in peripheral blood, low immunoglobulins of all classes, and absent or scanty lymph nodes and tonsils (primary follicles and germinal centers absent) — live vaccines are contraindicated. Selective IgA deficiency: the most common primary immunodeficiency; may be familial or sporadic, or arise secondary to certain viral infections or medications. The majority are asymptomatic, but there can be airway and GI infections, autoimmune disease (eg, celiac disease), atopy, and anaphylaxis to IgA in blood products. Findings: low IgA with normal IgG and IgM levels, increased susceptibility to giardiasis, and it can cause a false-negative celiac disease test and a false-positive serum pregnancy test. Common variable immunodeficiency: a defect in B-cell differentiation; the cause is unknown in most cases. It may present in childhood but is usually diagnosed after puberty, with increased risk of autoimmune disease, bronchiectasis, lymphoma, and sinopulmonary infections. Findings: low plasma cells and low immunoglobulins.",
    why: "The B-cell deficiencies are the prototype set for 'recurrent infections' vignettes, and the discriminating variables are the patient's age, the B-cell count, and the immunoglobulin pattern. Bruton's boy is protected by maternal IgG until ~6 months, then loses the shield — recurrent bacterial (encapsulated) and enteroviral infections with ABSENT tonsils and lymph nodes (the physical finding that says no B cells ever arrived); flow shows absent CD19/20+ cells. Selective IgA deficiency is the most common primary immunodeficiency and usually silent — surfacing as giardiasis (IgA is the mucosal defender, E28), celiac or celiac-like autoimmune disease, atopy, or the transfusion-anaphylaxis emergency (anti-IgA antibodies in the IgA-deficient recipient meeting donor IgA — washed cellular products are the fix). Its lab quirks (false-negative celiac serology because the tests are IgA-based; false-positive pregnancy test from heterophile-style interference) are pure exam material. CVID is the late-diagnosed sibling: B cells are present but differentiation into plasma cells fails, so immunoglobulins fall after puberty — sinopulmonary infections that have already produced bronchiectasis, plus the autoimmune and lymphoma risks that make CVID's follow-up a surveillance program. The maturation-stage logic unifies all three: where the lineage stops predicts what is missing and when it presents.",
    keyIdea: "Place each disease on the B-cell assembly line. EARLY STATION (Bruton/XLA): BTK is the tyrosine kinase the pre-B cell needs to mature — without it, NO B cells exist: absent peripheral B cells, all-class hypogammaglobulinemia, absent lymph nodes and tonsils (no follicles, no germinal centers), live vaccines contraindicated, X-linked recessive in boys, presenting after 6 months as maternal IgG wanes, with bacterial and enteroviral infections. MIDDLE STATION (selective IgA deficiency): the class-switch step for IgA fails in an otherwise intact lineage — the most common primary immunodeficiency; mostly asymptomatic, but mucosal infections (giardiasis, airway/GI), autoimmune disease (celiac — and IgA-based celiac tests go falsely negative), atopy, false-positive pregnancy tests, and anaphylaxis to IgA-containing blood products (use washed products); low IgA with NORMAL IgG and IgM. LATE STATION (CVID): B cells mature but differentiation into plasma cells fails — low plasma cells, low immunoglobulins, B cells present; diagnosed usually after puberty with sinopulmonary infections, bronchiectasis, autoimmune disease, and lymphoma risk. Age + B-cell count + Ig pattern names the disease.",
  },
  mechanisms: [
    {
      id: "b-cell-maturation-stage-map",
      title: "One lineage, three cut points — where each disease stops the B-cell assembly line",
      context: "Why each B-cell deficiency produces its specific findings",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A genetic or functional defect strikes the B-cell lineage at a specific maturation station",
            sublabel: "Input — the station predicts the missing product and the presentation's timing.",
            variant: "input",
          },
          {
            id: "s1",
            label: "EARLY CUT (Bruton): BTK tyrosine kinase loss — the pre-B cell cannot mature; no B cells ever reach the periphery",
            sublabel: "Process — downstream of the cut, everything is absent: peripheral B cells, follicles, germinal centers, all immunoglobulin classes; live vaccines find no target lineage to protect (and could harm).",
            variant: "process",
          },
          {
            id: "s2",
            label: "CLASS-SPECIFIC CUT (IgA deficiency): the lineage matures and switches normally except for the IgA isotype",
            sublabel: "Process — IgG and IgM are normal (the response machinery works); the mucosal IgA compartment is missing — giardiasis, airway/GI infections, celiac-type autoimmunity, atopy, and anti-IgA antibodies that fire on transfused IgA.",
            variant: "process",
          },
          {
            id: "s3",
            label: "LATE CUT (CVID): B cells mature but terminal differentiation into plasma cells fails",
            sublabel: "Process — B cells present (flow cytometry distinguishes it from Bruton), plasma cells and immunoglobulins low; the presentation waits until adolescence or beyond and accumulates bronchiectasis, autoimmunity, and lymphoma risk.",
            variant: "process",
          },
          {
            id: "o1",
            label: "The diagnostic triad: patient age + peripheral B-cell count + immunoglobulin pattern names the disease and its management (IVIG replacement for Bruton and CVID; washed blood products and IgG-based celiac testing for IgA deficiency)",
            sublabel: "Output — management is stage-specific: replace what the finished factory would have made, or route around the missing isotype.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "station chosen" },
          { from: "s1", to: "s2", label: "earlier vs later" },
          { from: "s2", to: "s3", label: "class vs terminal" },
          { from: "s3", to: "o1", label: "pattern read" },
        ],
        caption:
          "The B-cell assembly line runs: stem cell → pre-B cell (BTK-dependent) → mature B cell (surface IgM/IgD) → class-switched B cell (IgA/IgG/IgE under cytokine direction) → plasma cell (the immunoglobulin factory). Each disease is a station closed. Bruton's BTK defect closes the FIRST gate: the pre-B cell cannot proceed, so nothing downstream exists — no peripheral B cells (flow shows absent CD19/CD20), no follicular architecture (the absent tonsils and lymph nodes of the physical exam), no immunoglobulins of any class, and a presentation timed to the maternal IgG clock (~6 months, when passive protection fades and the boy's own absent humoral system is exposed). Selective IgA deficiency closes ONE switch: the lineage is intact, IgG and IgM are normal, but the mucosal IgA compartment never materializes — which is why its disease is mucosal (giardiasis, sinopulmonary and GI infections) and autoimmune (celiac disease, itself IgA-tested — the false-negative trap), and why the IgA-deficient patient can make anti-IgA antibodies that turn any IgA-containing blood product into an anaphylaxis risk. CVID closes the LAST gate: mature B cells are present but cannot differentiate into plasma cells — immunoglobulins fall, infections begin insidiously, and the diagnosis typically arrives after puberty with bronchiectasis already established, plus the autoimmune and lymphoma surveillances that define CVID's follow-up. Reading the three together, the exam's discriminators fall out: age of onset, B-cell count, tonsil examination, and the Ig pattern.",
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "b-cell-deficiency-map",
      title: "Three diseases, three maturation stages",
      caption:
        "An original KYP map: three disease cards (Bruton with its BTK defect, absent-B-cell findings, and live-vaccine contraindication; selective IgA deficiency with its most-common-primary status, mucosal/autoimmune/atopic presentation, and lab quirks; CVID with its differentiation defect, after-puberty diagnosis, and plasma-cell findings) above a four-station maturation ladder (stem → mature B → class switching → plasma cell) marking where each disease cuts.",
      notice:
        "The printed immunodeficiency table is pure vector (pdf 136 carries no content rasters); this visual is an original KYP teaching diagram. The T-cell, combined, and phagocyte sections of the same table belong to the E37 note.",
    },
    {
      kind: "table",
      title: "B-cell disorders — verbatim",
      intro: "The source's B-cell disorder rows (DISEASE / DEFECT / PRESENTATION / FINDINGS), verbatim.",
      columns: ["Disease", "Defect · Presentation · Findings (verbatim)"],
      rows: [
        ["X-linked (Bruton) agammaglobulinemia", "Defect in BTK, a tyrosine kinase gene → no B-cell maturation; X-linked recessive (↑ in Boys). Presentation: recurrent bacterial and enteroviral infections after 6 months (↓ maternal IgG). Findings: absent B cells in peripheral blood, ↓ Ig of all classes. Absent/scanty lymph nodes and tonsils (1° follicles and germinal centers absent) → live vaccines contraindicated."],
        ["Selective IgA deficiency", "May be familial or sporadic. Most common 1° immunodeficiency. May also arise 2° to certain viral infections or medications. Presentation: Majority Asymptomatic; can see Airway and GI infections, Autoimmune disease (eg, celiac disease), Atopy, Anaphylaxis to IgA in blood products. Findings: ↓ IgA with normal IgG, IgM levels; ↑ susceptibility to giardiasis; can cause false-negative celiac disease test and false-positive serum pregnancy test."],
        ["Common variable immunodeficiency", "Defect in B-cell differentiation. Cause unknown in most cases. Presentation: may present in childhood but usually diagnosed after puberty; ↑ risk of autoimmune disease, bronchiectasis, lymphoma, sinopulmonary infections. Findings: ↓ plasma cells, ↓ immunoglobulins."],
      ],
      caption:
        "Read the columns as the discriminators: DEFECT tells you the station (BTK = earliest, differentiation = latest); PRESENTATION tells you the clock (6 months for Bruton, any time for IgA deficiency, after puberty for CVID); FINDINGS tell you the counts (absent B cells vs normal-lineage-with-low-IgA vs present B cells with low plasma cells). The IgA row's capitalized presentation words are the source's own emphasis.",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "The management pearls (KYP bridge)",
      body: "Replacement: IVIG (or subcutaneous immunoglobulin) is the mainstay for Bruton and CVID — replacing what the absent plasma-cell factory would have made; live vaccines are contraindicated in Bruton (no B-cell lineage to protect, and vaccine pathogens unprotected in the agammaglobulinemic host — KYP bridge consistent with the printed warning). Transfusion safety in IgA deficiency: anti-IgA antibodies in the recipient can trigger anaphylaxis against IgA in donor products — use washed cellular products (and avoid IgA-containing immunoglobulin preparations); test celiac disease with IgG-based panels (deamidated gliadin IgG, tTG-IgG) since the standard IgA tests go falsely negative. CVID surveillance: periodic imaging and function for bronchiectasis, autoimmune screening, and lymphoma vigilance — the disease's late complications define its follow-up program.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "An 8-month-old boy has had three episodes of otitis media, one hospitalization for pneumococcal pneumonia, and a severe echovirus meningitis since age 6 months; examination reveals absent tonsils and no palpable lymph nodes; there is no thymic shadow concern, and the family history includes a maternal uncle who died of infection in infancy.",
        discriminator: "Boy + infections after 6 months + ABSENT tonsils/nodes",
        concept: "X-linked (Bruton) agammaglobulinemia",
        answer:
          "BTK loss means the pre-B cell cannot mature — no B cells reach the periphery: absent CD19/20+ cells on flow, hypogammaglobulinemia of all classes, and the absent lymphoid tissue (no primary follicles, no germinal centers — hence no tonsils, no nodes). Maternal IgG protected the first 6 months; after it wanes, recurrent bacterial (encapsulated) and enteroviral infections begin. X-linked recessive fits the uncle. Management: immunoglobulin replacement; live vaccines contraindicated.",
      },
      {
        stem: "A 22-year-old woman with recurrent sinusitis and two episodes of giardiasis develops urticaria, wheezing, and hypotension during her first platelet transfusion; her IgA is undetectable with normal IgG and IgM, and she has mild celiac-like symptoms with a negative IgA tissue transglutaminase test.",
        discriminator: "Low IgA alone + transfusion anaphylaxis + giardiasis",
        concept: "Selective IgA deficiency with anti-IgA antibodies",
        answer:
          "Selective IgA deficiency — the most common primary immunodeficiency — spares IgG and IgM but empties the mucosal IgA compartment: giardiasis (IgA is the gut's defender), sinopulmonary infections, celiac-type autoimmunity, and the IgA-based celiac test going falsely negative (use IgG-based testing). The transfusion reaction is the emergency pearl: IgA-deficient patients can form anti-IgA IgG/IgE that fires on IgA in donor plasma — anaphylaxis on first or subsequent transfusions; management is washed cellular products and IgA-deficient immunoglobulin preparations.",
      },
      {
        stem: "A 26-year-old man evaluated for recurrent sinopulmonary infections is found to have bronchiectasis on CT; flow cytometry shows normal numbers of CD19+ B cells, but serum IgG, IgA, and IgM are all low and bone marrow shows reduced plasma cells; he also has autoimmune thrombocytopenia.",
        discriminator: "After-puberty onset + B cells PRESENT + low plasma cells and immunoglobulins",
        concept: "Common variable immunodeficiency",
        answer:
          "CVID is the late cut: B cells mature but differentiation into plasma cells fails — normal peripheral B-cell counts (the flow finding that separates it from Bruton) with low plasma cells and panhypogammaglobulinemia, diagnosed usually after puberty. Sinopulmonary infections progress to bronchiectasis, and the associated risks are autoimmune disease (his thrombocytopenia) and lymphoma. Management: immunoglobulin replacement plus surveillance for the complications.",
      },
    ],
    traps: [
      {
        a: "Bruton agammaglobulinemia presents at birth",
        b: "It presents AFTER 6 MONTHS, when maternal IgG wanes",
        whyConfused: "The BTK defect is congenital, so the disease feels neonatal.",
        keyDifference:
          "The defect is present from birth, but maternal IgG (the placenta-crossing isotype of E28) covers the first ~6 months. The infection clock starts when passive immunity fades — the same timeline as physiologic hypogammaglobulinemia, which is why the ABSENT TONSILS and family history do the discriminating in an exam stem.",
        clue: "Any 'boy with infections starting at 6 months' stem.",
      },
      {
        a: "CVID lacks B cells, like Bruton",
        b: "CVID has B CELLS PRESENT — plasma cells and immunoglobulins are low",
        whyConfused: "Both present with hypogammaglobulinemia and sinopulmonary infections.",
        keyDifference:
          "The flow cytometry is the discriminator: Bruton = absent CD19/20+ cells with absent lymphoid tissue (childhood, X-linked); CVID = normal B-cell counts with failed terminal differentiation (after puberty, cause unknown, with bronchiectasis-autoimmunity-lymphoma company). Same end-product failure, different station — and different age at diagnosis.",
        clue: "Any B-cell-count question in a hypogammaglobulinemia stem.",
      },
      {
        a: "IgA deficiency causes anaphylaxis to IgA because of excess IgA",
        b: "The anaphylaxis is caused by ANTI-IgA antibodies in the IgA-deficient RECIPIENT reacting to donor IgA",
        whyConfused: "Anaphylaxis reads as an overabundance problem.",
        keyDifference:
          "Lacking IgA, the patient's immune system can treat IgA as foreign and make anti-IgA antibodies (IgG/IgE class). When a blood product containing IgA (plasma, platelets, standard immunoglobulin) is transfused, those antibodies fire — anaphylaxis on exposure to someone else's IgA. The fix is IgA avoidance: washed cellular products and IgA-deficient preparations.",
        clue: "Any transfusion-reaction-in-immunodeficiency question.",
      },
    ],
    pivots: [
      {
        lookAlike: "Bruton (XLA) vs CVID (the two panhypogammaglobulinemias)",
        differentiator: "B-cell count, age, and inheritance",
        correctPath:
          "Bruton: X-linked recessive boy, absent B cells, absent tonsils/nodes, onset at ~6 months, BTK defect — the early cut. CVID: either sex, B cells present with low plasma cells, onset after puberty, differentiation defect of unknown cause, bronchiectasis-autoimmune-lymphoma company — the late cut. Flow cytometry (CD19/20) separates them in one tube.",
      },
      {
        lookAlike: "IgA deficiency vs Bruton (the mucosal vs systemic humoral failures)",
        differentiator: "Which immunoglobulins are missing",
        correctPath:
          "IgA deficiency: isolated low IgA with NORMAL IgG and IgM — mucosal vulnerability (giardiasis, airway/GI), celiac association with falsely negative IgA-based testing, transfusion anti-IgA risk; usually asymptomatic. Bruton: ALL classes low with absent B cells — systemic bacterial and enteroviral vulnerability from 6 months, absent lymphoid tissue. One isotype versus the whole factory.",
      },
    ],
    miniCase: {
      vignette:
        "An 8-month-old boy is admitted with his third episode of pneumonia in three months; prior cultures grew Streptococcus pneumoniae and Haemophilus influenzae. His mother recalls that he was healthy until about six months of age, then began having recurrent ear infections. Last month he was treated for a prolonged echovirus gastrointestinal infection. Examination is notable for the absence of tonsils and of palpable cervical, axillary, and inguinal lymph nodes. There is no dermatitis, no petechiae, and no oral thrush. Chest x-ray shows a normal cardiac silhouette and a present thymic shadow. His maternal uncle died at 2 years of age of 'overwhelming infection' in the 1980s. Laboratory studies are pending, including lymphocyte subsets and immunoglobulin levels.",
      question:
        "Which set of laboratory findings is most likely in this patient?",
      options: [
        {
          label: "A",
          text: "Absent CD19+ B cells with low IgG, IgA, and IgM; absent germinal centers on lymph node biopsy",
          correct: true,
          why: "Correct — X-linked (Bruton) agammaglobulinemia. The BTK tyrosine kinase defect arrests the pre-B cell, so no B cells reach the periphery (absent CD19+ cells), all immunoglobulin classes are low, and lymphoid tissue never builds its follicles and germinal centers (the absent tonsils and nodes on exam). The maternal-IgG clock explains the healthy first six months; the uncle's fatal infections fit X-linked recessive inheritance; encapsulated bacteria and enteroviruses are the signature organisms; the present thymic shadow and absent thrush argue against the T-cell deficiencies.",
        },
        {
          label: "B",
          text: "Normal B-cell count with low IgG, IgA, and IgM and reduced plasma cells",
          why: "This is CVID's pattern — B cells present with failed terminal differentiation. It contradicts the absent tonsils and nodes (CVID's B cells populate the lymphoid tissue), the infancy onset (CVID usually declares after puberty), and the X-linked family history.",
        },
        {
          label: "C",
          text: "Low IgA with normal IgG and IgM",
          why: "Selective IgA deficiency spares the systemic immunoglobulins — it would not produce the all-class hypogammaglobulinemia implied by invasive encapsulated bacterial disease and echovirus meningitis/GI disease, nor the absent lymphoid tissue (the IgA-deficient lineage still forms follicles).",
        },
        {
          label: "D",
          text: "Absent T cells with low IgM and normal thymic shadow",
          why: "Internally inconsistent and externally contradicted: DiGeorge (22q11) would show an ABSENT thymic shadow with low T cells, and cellular immunity failure would surface as viral, fungal, and opportunistic infections (thrush is conspicuously absent here) rather than isolated encapsulated bacterial disease. The preserved thymus and the humoral pattern exclude it.",
        },
        {
          label: "E",
          text: "Low CD4+ count with hypergammaglobulinemia and positive HIV serology",
          why: "HIV in an infant produces combined defects with HYPERgammaglobulinemia (polyclonal B-cell activation) — the opposite of this presentation — and the X-linked family history with absent lymphoid tissue points to the BTK lineage arrest.",
        },
      ],
      reasoning:
        "The vignette times the disease to the maternal-IgG clock (healthy until 6 months), selects humoral-pathogen infections (encapsulated bacteria, echovirus), and adds the two physical findings that say the B-cell lineage never populated the periphery: absent tonsils and absent lymph nodes — Bruton's classic triad completed by the X-linked uncle. The question then asks the LAB pattern, and the mechanism names it: BTK arrest means absent CD19+ B cells, all-class hypogammaglobulinemia, and absent follicles/germinal centers. Distractors test the neighboring stations: CVID (B cells present — but then nodes would be present, and the age is wrong), IgA deficiency (one class, not all), DiGeorge (T-cell pattern contradicted by the present thymus and absent thrush), and HIV (hypergammaglobulinemia contradicts hypogammaglobulinemia).",
    },
  },
  mnemonics: [
    {
      code: "\u201cBTK is the ticket out of the marrow: no ticket, no B cells, no factory, no follicles.\u201d",
      meaning:
        "KYP's key for Bruton: the BTK tyrosine kinase is the pre-B cell's ticket to maturity — without it nothing leaves the station: no peripheral B cells, no immunoglobulin factory (all classes low), and no lymphoid architecture (no follicles, no germinal centers — the absent tonsils and nodes). X-linked recessive, presenting at ~6 months as maternal IgG wanes.",
      memorizes: "BTK defect → absent B cells + all-class hypogammaglobulinemia + absent lymphoid tissue",
      whenToUse: "Any boy-with-recurrent-infections stem after 6 months.",
      clinical: "Live vaccines contraindicated; immunoglobulin replacement is the therapy.",
    },
    {
      code: "\u201cOne isotype, one compartment: no IgA, no mucosal guard — Giardia moves in, blood products fight back.\u201d",
      meaning:
        "KYP's key for selective IgA deficiency: only the mucosal isotype is missing (IgG and IgM normal), so the disease is mucosal — giardiasis, airway and GI infections — and autoimmune (celiac, with its IgA tests going falsely negative; use IgG-based testing). The emergency face: anti-IgA antibodies in the recipient fire on transfused IgA — anaphylaxis; wash the products. The most common primary immunodeficiency, and the majority are asymptomatic.",
      memorizes: "IgA deficiency: most common, mucosal pattern, celiac/celiac-test trap, transfusion anaphylaxis",
      whenToUse: "Any giardiasis-plus-sinusitis or transfusion-reaction stem with normal IgG/IgM.",
      clinical: "False-negative celiac serology (IgA-based tests), false-positive pregnancy test; washed blood products.",
    },
    {
      code: "\u201cCVID: the factory is built but the workers never show — B cells present, plasma cells absent, and the diagnosis waits for puberty.\u201d",
      meaning:
        "KYP's key for common variable immunodeficiency: the lineage matures (B cells present on flow — the Bruton discriminator) but terminal differentiation into plasma cells fails, so immunoglobulins of all classes fall. Onset is late (usually after puberty), and the follow-up program is defined by its complications: sinopulmonary infections → bronchiectasis, autoimmune disease, and lymphoma.",
      memorizes: "CVID: late arrest, B cells present, low plasma cells/Ig, bronchiectasis-autoimmunity-lymphoma",
      whenToUse: "Any after-puberty hypogammaglobulinemia with bronchiectasis or autoimmunity.",
      clinical: "Immunoglobulin replacement plus surveillance for bronchiectasis, autoimmunity, and lymphoma.",
    },
  ],
  rapidReview: {
    s30: [
      "Bruton: BTK tyrosine kinase → no B-cell maturation; X-linked recessive (boys)",
      "Bruton presents AFTER 6 months (maternal IgG wanes): bacterial + enteroviral infections",
      "Bruton findings: absent B cells, ↓ ALL Ig classes, absent lymph nodes/tonsils → live vaccines contraindicated",
      "Selective IgA deficiency: MOST COMMON 1° immunodeficiency; ↓ IgA with NORMAL IgG/IgM",
      "CVID: B-cell differentiation defect — B cells PRESENT, ↓ plasma cells, ↓ immunoglobulins",
    ],
    m3: [
      "IgA deficiency: majority asymptomatic — airway/GI infections, celiac, atopy, anaphylaxis to IgA in blood products",
      "IgA deficiency labs: giardiasis susceptibility, false-NEGATIVE celiac test, false-POSITIVE pregnancy test",
      "CVID: usually diagnosed after puberty; sinopulmonary infections → bronchiectasis",
      "CVID risks: autoimmune disease, lymphoma, bronchiectasis",
      "Bruton: absent/scanty lymph nodes and tonsils (no 1° follicles, no germinal centers)",
    ],
    m10: [
      "Flow discriminator: Bruton absent CD19/20+ vs CVID normal B cells with low plasma cells",
      "IgA-deficient transfusion risk: anti-IgA antibodies → anaphylaxis — use WASHED products",
      "Celiac testing in IgA deficiency: use IgG-based panels (IgA tests falsely negative)",
      "IVIG replacement: Bruton and CVID (replace the absent product)",
      "The three stations: BTK = early cut, IgA switch = class cut, differentiation = late cut",
    ],
  },
  recall: [
    {
      q: "Give Bruton agammaglobulinemia's defect, inheritance, presentation, and findings.",
      a: "Defect in BTK, a tyrosine kinase gene → no B-cell maturation; X-linked recessive (↑ in boys). Presentation: recurrent bacterial and enteroviral infections after 6 months (↓ maternal IgG). Findings: absent B cells in peripheral blood, ↓ Ig of all classes; absent/scanty lymph nodes and tonsils (1° follicles and germinal centers absent) → live vaccines contraindicated.",
    },
    {
      q: "Why is selective IgA deficiency often discovered incidentally, and what are its findings?",
      a: "The majority of patients are asymptomatic. It is the most common 1° immunodeficiency (familial, sporadic, or secondary to viral infections/medications). Findings: ↓ IgA with normal IgG and IgM; ↑ susceptibility to giardiasis; can cause false-negative celiac disease test and false-positive serum pregnancy test. Clinical faces: airway and GI infections, autoimmune disease (eg, celiac), atopy, anaphylaxis to IgA in blood products.",
    },
    {
      q: "How does CVID differ from Bruton on laboratory testing?",
      a: "CVID is a defect in B-cell differentiation (cause unknown in most cases) with B cells PRESENT but ↓ plasma cells and ↓ immunoglobulins; Bruton has ABSENT B cells with no maturation at all. CVID is usually diagnosed after puberty (may present in childhood) with ↑ risk of autoimmune disease, bronchiectasis, lymphoma, and sinopulmonary infections.",
    },
    {
      q: "Which transfusion hazard is specific to IgA deficiency, and how is it managed?",
      a: "IgA-deficient patients can develop anti-IgA antibodies that react with IgA in transfused blood products, causing anaphylaxis. Management: wash cellular products to remove donor plasma IgA, and use IgA-deficient immunoglobulin preparations when replacement is needed.",
    },
    {
      q: "Why do Bruton patients stay healthy for the first six months?",
      a: "Maternal IgG crosses the placenta (the only transplacental isotype) and provides passive protection that wanes over the first months of life — so the absent humoral system is exposed at ~6 months, when recurrent bacterial and enteroviral infections begin. This timing mirrors the physiologic hypogammaglobulinemia window of E28.",
    },
  ],
  related: [
    {
      title: "Immunoglobulin Isotypes & Antigen Memory",
      topicId: "immunoglobulin-isotypes",
      note: "The isotype biology each deficiency strips away — IgA's mucosal role and the maternal-IgG clock that times Bruton's presentation.",
    },
    {
      title: "T-Cell & Phagocyte Immunodeficiencies",
      topicId: "t-cell-phagocyte-immunodeficiencies",
      note: "The other rows of the same printed table — T-cell, combined, and phagocyte stations of the deficiency map.",
    },
    {
      title: "Immunodeficiency Infection Patterns",
      topicId: "immunodeficiency-infection-patterns",
      note: "The organism patterns each deficiency predicts — bacteria/enterovirus (humoral) versus the viral/fungal/opportunist patterns of cellular failure.",
    },
    {
      title: "Active vs Passive Immunity & Vaccination",
      topicId: "active-passive-immunity",
      note: "Live-vaccine contraindication logic and IVIG as the passive-replacement therapy for the antibody-deficient.",
    },
  ],
  crossLinks: [
    {
      subject: "Pediatrics (Infection Onset Timing)",
      connection: "The 6-month clock is universal: maternal IgG waning exposes both Bruton and physiologic hypogammaglobulinemia — the exam's age-discrimination hinge.",
    },
    {
      subject: "Gastroenterology",
      connection: "Giardiasis and celiac-type disease are IgA deficiency's GI signatures — with the practical trap that IgA-based celiac serology is falsely negative (order IgG-based panels).",
    },
    {
      subject: "Transfusion Medicine",
      connection: "Anaphylaxis to IgA in blood products is the classic IgA-deficiency emergency — washed cellular products and IgA-deficient immunoglobulin are the fixes.",
    },
    {
      subject: "Pulmonology",
      connection: "CVID's sinopulmonary infections march to bronchiectasis — immunoglobulin replacement plus airway surveillance defines its long-term program.",
    },
  ],
};
