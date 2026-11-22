import type { KypUsMLENote } from "../types";

// Immunology — Immunosuppressants banner (E-batch 41 — FINAL immunology topic).
// Source: First Aid 2026, Part 1 pdf 141 / book 119
// (Recombinant cytokines and clinical uses)

export const recombinantCytokines: KypUsMLENote = {
  id: "recombinant-cytokines",
  title: "Recombinant Cytokines & Clinical Uses",
  subtitle:
    "The pharmacologic cytokine directory in two halves. BONE MARROW STIMULATION: erythropoietin as epoetin alfa (an EPO analog) for anemias — especially in renal failure — with the associated risks of hypertension and thromboembolic events; the colony-stimulating factors filgrastim (G-CSF) and sargramostim (GM-CSF) for leukopenia and the recovery of granulocyte and monocyte counts; and thrombopoietin as romiplostim (a TPO analog) and eltrombopag (a TPO receptor agonist) for autoimmune thrombocytopenia as platelet stimulators. IMMUNOTHERAPY: interleukin-2 as aldesleukin for renal cell carcinoma and metastatic melanoma; and the interferons — IFN-α for chronic hepatitis C (not preferred) and B plus renal cell carcinoma, IFN-β for multiple sclerosis, and IFN-γ for chronic granulomatous disease. Each agent is a recombinant version of a cytokine whose biology the chapter has already built: EPO the renal anemia hormone, the CSFs the marrow lineage growers, TPO the platelet stimulator, IL-2 the T-cell growth factor, and the interferons the innate antiviral and macrophage-arming signals.",
  subject: "Immunology",
  system: "Section II · High-Yield General Principles — Immunosuppressants",
  pilotCategory: "Immunosuppressants — recombinant cytokines by category (bone marrow stimulation: epoetin alfa, filgrastim/sargramostim, romiplostim/eltrombopag; immunotherapy: aldesleukin, IFN-α/β/γ) with agents and clinical uses",
  difficulty: 2,
  readTime: 6,
  sourceRef:
    "First Aid 2026, Part 1 pp. 119 (Recombinant cytokines and clinical uses)",
  tags: [
    "recombinant cytokines",
    "erythropoietin",
    "epoetin alfa",
    "EPO analog",
    "anemia",
    "renal failure",
    "hypertension risk",
    "thromboembolic events",
    "colony stimulating factors",
    "filgrastim",
    "G-CSF",
    "sargramostim",
    "GM-CSF",
    "leukopenia",
    "granulocyte recovery",
    "monocyte counts",
    "thrombopoietin",
    "romiplostim",
    "TPO analog",
    "eltrombopag",
    "TPO receptor agonist",
    "autoimmune thrombocytopenia",
    "platelet stimulator",
    "interleukin-2",
    "aldesleukin",
    "renal cell carcinoma",
    "metastatic melanoma",
    "interferons",
    "IFN-alpha",
    "chronic hepatitis C",
    "chronic hepatitis B",
    "IFN-beta",
    "multiple sclerosis",
    "IFN-gamma",
    "chronic granulomatous disease",
    "bone marrow stimulation",
    "immunotherapy",
  ],
  core: {
    what: "Recombinant cytokines divide into two clinical categories. BONE MARROW STIMULATION: Erythropoietin — epoetin alfa (an EPO analog), for anemias (especially in renal failure); associated with ↑ risk of hypertension and thromboembolic events. Colony-stimulating factors — filgrastim (G-CSF) and sargramostim (GM-CSF), for leukopenia and the recovery of granulocyte and monocyte counts. Thrombopoietin — romiplostim (a TPO analog) and eltrombopag (a TPO receptor agonist), for autoimmune thrombocytopenia as platelet stimulators. IMMUNOTHERAPY: Interleukin-2 — aldesleukin, for renal cell carcinoma and metastatic melanoma. Interferons — IFN-α for chronic hepatitis C (not preferred) and B plus renal cell carcinoma; IFN-β for multiple sclerosis; IFN-γ for chronic granulomatous disease.",
    why: "This table is the chapter's biology turned into a formulary: every agent is a recombinant protein whose native cytokine the preceding pages have already explained. Epoetin alfa replaces the renal EPO that fails in chronic kidney disease (the anemia of CKD) — with the hypertension and thromboembolic risks that come with raising hematocrit and viscosity. Filgrastim (G-CSF) and sargramostim (GM-CSF) grow the myeloid lineages — the leukopenia rescue after chemotherapy and the neutrophil recovery every transplant and oncology protocol schedules (E37's and E38's granulocyte column management). Romiplostim and eltrombopag stimulate platelet production through the thrombopoietin receptor — the autoimmune thrombocytopenia (ITP) therapies that avoid splenectomy and the immunoglobulin treadmill. Aldesleukin is recombinant IL-2 — the T-cell growth factor of E31 delivered in high doses to expand antitumor T cells (renal cell carcinoma and metastatic melanoma, the classic immunotherapy-responsive tumors). And the interferons complete the set with their native biology intact: IFN-α (the antiviral of E32, now second-line for chronic hepatitis B and 'not preferred' for hepatitis C in the direct-acting-antiviral era, plus renal cell carcinoma), IFN-β (the MS immunomodulator), and IFN-γ (the macrophage armer — used therapeutically IN chronic granulomatous disease, exactly the deficiency E32 and E37 described: replacing the activation the burst cannot deliver).",
    keyIdea: "Sort by what the cytokine does natively, and the drug list writes itself. BONE MARROW STIMULATION (the lineage growers): EPO → epoetin alfa (renal-failure anemia; watch hypertension and thromboembolism); G-CSF/GM-CSF → filgrastim/sargramostim (leukopenia; granulocyte and monocyte recovery); TPO → romiplostim and eltrombopag (autoimmune thrombocytopenia; platelet stimulation). IMMUNOTHERAPY (the response amplifiers): IL-2 → aldesleukin (renal cell carcinoma, metastatic melanoma — high-dose T-cell expansion); IFN-α (chronic hepatitis B, and C 'not preferred' post-DAAs, plus renal cell carcinoma), IFN-β (multiple sclerosis), IFN-γ (chronic granulomatous disease — arming the macrophages the oxidase deficiency leaves underpowered). Every row is a cytokine from the chapter's earlier pages, recombinantly produced and clinically aimed.",
  },
  mechanisms: [
    {
      id: "native-biology-to-drug-map",
      title: "From native cytokine biology to the clinical indication",
      context: "Why each recombinant cytokine works where it does",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A cytokine's native role is identified, cloned, and manufactured",
            sublabel: "Input — the chapter's biology (EPO, CSFs, TPO, IL-2, interferons) becomes a drug catalog.",
            variant: "input",
          },
          {
            id: "s1",
            label: "LINEAGE GROWTH FACTORS replace failed production: epoetin alfa for the renal EPO failure of CKD anemia; filgrastim/sargramostim for chemotherapy leukopenia; romiplostim/eltrombopag for platelet stimulation in ITP",
            sublabel: "Process — the marrow stimulation category: give the hormone the failing organ no longer makes (or the marrow needs more of).",
            variant: "process",
          },
          {
            id: "s2",
            label: "RESPONSE AMPLIFIERS arm the immune attack: aldesleukin (high-dose IL-2) expands antitumor T cells; IFN-α antivirally suppresses chronic hepatitis B; IFN-β modulates multiple sclerosis; IFN-γ arms CGD macrophages",
            sublabel: "Process — the immunotherapy category: each interferon keeps its native job (antiviral, immunomodulatory, macrophage-arming) and is aimed at the disease that job addresses.",
            variant: "process",
          },
          {
            id: "o1",
            label: "The clinical directory: anemia/leukopenia/thrombocytopenia on the stimulation side; RCC, melanoma, hepatitis B/C, MS, and CGD on the immunotherapy side — with the toxicity tags (EPO's hypertension and thromboembolism; the interferons' flulike syndrome of E32)",
            sublabel: "Output — a two-column formulary whose logic is the chapter's own cytokine biology.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "lineage growers" },
          { from: "s1", to: "s2", label: "response amplifiers" },
          { from: "s2", to: "o1", label: "directory" },
        ],
        caption:
          "The table's two banners are two pharmacologic strategies. The bone-marrow-stimulation strategy replaces missing lineage drivers: renal failure starves the anemia of its EPO (epoetin alfa replaces it — at the price of hypertension and thromboembolic events as hematocrit and viscosity rise); chemotherapy and transplant protocols starve the marrow of white-cell recovery time (filgrastim delivers G-CSF for granulocyte recovery, sargramostim the GM-CSF that also covers monocytes — the leukopenia rescue of E38's granulocyte column); and immune platelet destruction leaves the thrombopoietin axis underdriven (romiplostim, a TPO analog, and eltrombopag, a TPO receptor agonist, stimulate platelet production in autoimmune thrombocytopenia — the medical ITP therapy). The immunotherapy strategy amplifies immune responses: aldesleukin is IL-2 itself (E31's T-cell growth factor), given in high doses to expand the antitumor T-cell response in renal cell carcinoma and metastatic melanoma; and the interferons keep their E32 biology — IFN-α (the antiviral and antitumor signal: chronic hepatitis B, the 'not preferred' chronic hepatitis C in the direct-acting-antiviral era, and renal cell carcinoma), IFN-β (the MS immunomodulator), and IFN-γ (the macrophage armer — given therapeutically to CGD patients, replacing exactly the activation E32's oxidase deficiency and E37's deficiency table described, and connecting this final immunology topic back to the respiratory burst where the chapter's effector chemistry began).",
      },
    },
  ],
  blocks: [
    {
      kind: "table",
      title: "Recombinant cytokines — verbatim",
      intro: "The source's cytokine table (CYTOKINE / AGENT / CLINICAL USES), verbatim.",
      columns: ["Cytokine", "Agent · Clinical uses (verbatim)"],
      rows: [
        ["Erythropoietin", "Epoetin alfa (EPO analog). Anemias (especially in renal failure). Associated with ↑ risk of hypertension, thromboembolic events."],
        ["Colony stimulating factors", "Filgrastim (G-CSF), sargramostim (GM-CSF). Leukopenia; recovery of granulocyte and monocyte counts."],
        ["Thrombopoietin", "Romiplostim (TPO analog), eltrombopag (think “elthrombopag.” TPO receptor agonist). Autoimmune thrombocytopenia. Platelet stimulator."],
        ["Interleukin-2", "Aldesleukin. Renal cell carcinoma, metastatic melanoma."],
        ["Interferons", "IFN-α: Chronic hepatitis C (not preferred) and B, renal cell carcinoma. IFN-β: Multiple sclerosis. IFN-γ: Chronic granulomatous disease."],
      ],
      caption:
        "Read the table in two halves (the printed banners Bone marrow stimulation and Immunotherapy): the stimulation agents are the lineage-growers (EPO for red cells, CSFs for white cells, TPO agonists for platelets — one per blood lineage), and the immunotherapy agents are the response-amplifiers (IL-2 for the antitumor T-cell expansion of RCC and melanoma; the interferons keeping their native jobs in hepatitis, MS, and CGD). The source's 'elthrombopag' spelling cue is quoted verbatim.",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "The lineage logic and the chapter's closing loop (KYP bridge)",
      body: "The marrow-stimulation column is one drug per blood lineage: epoetin alfa (red cells — the renal-failure anemia), filgrastim/sargramostim (white cells — the chemotherapy leukopenia rescue, granulocyte and monocyte recovery), and romiplostim/eltrombopag (platelets — autoimmune thrombocytopenia, the platelet stimulators that made ITP a medical disease). The immunotherapy column closes the chapter's loops: aldesleukin is IL-2 itself — the growth factor the calcineurin inhibitors of E40 suppress and the T cells of E26 expand — used in high doses for renal cell carcinoma and metastatic melanoma; and IFN-γ for chronic granulomatous disease is the macrophage-arming therapy for exactly the phagocyte deficiency E32's respiratory burst and E37's spectrum map described. The interferons' adverse effects (E32's flulike symptoms, depression, neutropenia, myopathy, autoimmunity) are the costs of chronic innate-alarm pharmacology. The toxicity tags to carry: EPO — hypertension and thromboembolic events.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 62-year-old man on hemodialysis has a hemoglobin of 8.9 g/dL with low endogenous erythropoietin; epoetin alfa is started, and over the following months his hemoglobin rises — along with his blood pressure, and he develops a calf-vein thrombosis.",
        discriminator: "Renal-failure anemia responding to EPO with hypertension and thromboembolism",
        concept: "Epoetin alfa — the EPO analog and its risks",
        answer:
          "Epoetin alfa replaces the renal EPO that chronic kidney disease no longer provides, treating the anemia of renal failure — with the printed risks: ↑ hypertension and thromboembolic events (rising hematocrit increases viscosity; EPO also has direct vascular effects). Monitoring blood pressure, using the lowest effective dose, and prophylaxis for thromboembolism in high-risk patients are part of therapy.",
      },
      {
        stem: "An oncology patient develops severe neutropenia after a chemotherapy cycle; a daily injection is begun that shortens the neutropenic window, and the monocyte count also recovers when the alternative agent is used.",
        discriminator: "Post-chemotherapy neutropenia rescued by lineage growth factors",
        concept: "Filgrastim (G-CSF) and sargramostim (GM-CSF)",
        answer:
          "Filgrastim is recombinant G-CSF — granulocyte colony stimulation, shortening neutropenia and reducing febrile neutropenia after chemotherapy (E38's granulocyte-column rescue). Sargramostim is GM-CSF — stimulating granulocytes AND monocytes (the printed 'recovery of granulocyte and monocyte counts'). Bone aches are the classic side effect of the growth factors (marrow expansion); timing matters (days after chemotherapy, not simultaneously).",
      },
      {
        stem: "A 30-year-old with chronic ITP and a platelet count of 18,000/μL who has failed corticosteroids and IVIG begins a subcutaneous TPO analog; her platelet count rises to 95,000 over 8 weeks without splenectomy.",
        discriminator: "ITP treated with platelet-lineage stimulation",
        concept: "Romiplostim and eltrombopag — thrombopoietin receptor agonists",
        answer:
          "Romiplostim (a TPO analog) and eltrombopag (a TPO receptor agonist — the source's 'elthrombopag' cue) stimulate platelet production through the thrombopoietin receptor, treating autoimmune thrombocytopenia as platelet stimulators. They are the medical alternative to splenectomy in chronic ITP — and are also used in chronic hepatitis C-associated thrombocytopenia and aplastic anemia (labeled extension). Hepatotoxicity monitoring accompanies eltrombopag.",
      },
    ],
    traps: [
      {
        a: "Aldesleukin is an anti-interleukin antibody",
        b: "Aldesleukin IS interleukin-2 — recombinant IL-2 given to EXPAND T cells",
        whyConfused: "The '-mab' era makes biologics feel like antibodies.",
        keyDifference:
          "Aldesleukin is the cytokine itself (recombinant IL-2), not an antibody against it. Its high-dose use in renal cell carcinoma and metastatic melanoma expands the patient's own antitumor T cells and NK cells — E31's growth factor delivered as therapy, with capillary-leak syndrome as the dose-limiting toxicity (labeled extension). The antibody strategy against IL-2's RECEPTOR is basiliximab (E40).",
        clue: "Any aldesleukin or IL-2-therapy question.",
      },
      {
        a: "IFN-α is first-line therapy for chronic hepatitis C",
        b: "The table specifies chronic hepatitis C '(not preferred)' for IFN-α — the direct-acting antiviral era has replaced it",
        whyConfused: "IFN-α was the hepatitis C standard for decades.",
        keyDifference:
          "The printed table keeps hepatitis C in IFN-α's column but flags it 'not preferred' — direct-acting antivirals have taken over. IFN-α remains in use for chronic hepatitis B and renal cell carcinoma (and E32's full clinical panel). The flag is the table's own currency marker, and exams test both the indication and its demotion.",
        clue: "Any hepatitis C therapy question referencing interferon.",
      },
      {
        a: "IFN-γ treats chronic granulomatous disease because it replaces the missing NADPH oxidase",
        b: "IFN-γ ARMS the macrophages (its native job) — supporting the defective oxidative kill without replacing the enzyme",
        whyConfused: "The indication sits next to an enzyme-deficiency disease.",
        keyDifference:
          "IFN-γ is the Th1 macrophage-activating cytokine (E31). In CGD, where NADPH oxidase fails (E32), IFN-γ therapy enhances the macrophages' and neutrophils' oxidative and non-oxidative killing — reducing infection frequency without correcting the genetic enzyme defect (that remains the job of hematopoietic stem cell transplantation or gene therapy). The therapy is immunologic support, not enzyme replacement.",
        clue: "Any CGD-therapy or IFN-γ-use question.",
      },
    ],
    pivots: [
      {
        lookAlike: "The three marrow-stimulation agents (one per lineage)",
        differentiator: "Which cell count is low",
        correctPath:
          "Red cells low (renal-failure anemia): epoetin alfa — with hypertension and thromboembolic risks. White cells low (chemotherapy leukopenia): filgrastim (G-CSF, granulocytes) or sargramostim (GM-CSF, granulocytes AND monocytes). Platelets low (autoimmune thrombocytopenia): romiplostim or eltrombopag — the TPO receptor agonists. The cytopenia names the drug.",
      },
      {
        lookAlike: "The three interferons (α, β, γ) as drugs",
        differentiator: "Native job and clinical aim",
        correctPath:
          "IFN-α: the antiviral/antitumor signal — chronic hepatitis B (and C, not preferred) plus renal cell carcinoma. IFN-β: the MS immunomodulator. IFN-γ: the macrophage armer — chronic granulomatous disease. All three share the flulike-adverse-effect profile of E32 (labeled extension), and each keeps the biology the chapter assigned it.",
      },
    ],
    miniCase: {
      vignette:
        "A 24-year-old man with X-linked chronic granulomatous disease, followed since childhood for recurrent staphylococcal abscesses and a prior Aspergillus pneumonia, is reviewed for adjunctive therapy. His current regimen includes antibacterial and antifungal prophylaxis. His physician adds a subcutaneous recombinant cytokine administered three times weekly, explaining that it will 'boost the killing power' of his phagocytes; over the following year, his serious infection rate falls from roughly one per year to none, without any change in his genetic defect.",
      question:
        "Which mechanism best explains the benefit of the added therapy in this patient?",
      options: [
        {
          label: "A",
          text: "Interferon-γ enhancing macrophage and neutrophil oxidative and non-oxidative killing, supporting the defective respiratory burst",
          correct: true,
          why: "Correct — IFN-γ is the recombinant cytokine used in chronic granulomatous disease. It is the Th1 macrophage-arming signal (E31): in CGD it enhances phagocyte oxidative and non-oxidative killing and improves antigen presentation, reducing the frequency of serious infections (abscesses, pneumonia) — without correcting the underlying NADPH oxidase defect, which remains the province of HSCT or gene therapy. It closes the chapter's loop: E32's burst chemistry, E37's deficiency map, and E31's cytokine biology all converge on this therapy.",
        },
        {
          label: "B",
          text: "Interferon-α inducing the antiviral state in surrounding cells",
          why: "IFN-α primes LOCAL cells against VIRUSES (↓ protein synthesis, ↑ MHC — E32's mechanism) and is used in chronic hepatitis B/C and renal cell carcinoma. CGD's problem is intracellular bacteria and catalase-positive fungi — the macrophage-arming job belongs to IFN-γ, not the antiviral arm.",
        },
        {
          label: "C",
          text: "Aldesleukin expanding cytotoxic T cells against infected cells",
          why: "Aldesleukin (IL-2) expands T cells — its indications are renal cell carcinoma and metastatic melanoma. It does not correct or support the phagocyte oxidative kill, and expanding T cells does not address the catalase-positive organism pattern of CGD.",
        },
        {
          label: "D",
          text: "Filgrastim increasing the neutrophil count",
          why: "Filgrastim (G-CSF) raises neutrophil NUMBERS — useful in leukopenia, but this patient is not neutropenic: his neutrophils are present and numerically normal; they cannot kill because of the oxidase defect. Boosting the count does not fix the chemistry; IFN-γ's functional enhancement does.",
        },
        {
          label: "E",
          text: "Epoetin alfa improving tissue oxygenation and wound healing",
          why: "Epoetin alfa treats renal-failure anemia — no anemia or erythropoietin axis failure is present, and improved oxygen delivery would not address the phagocyte killing defect that defines CGD.",
        },
      ],
      reasoning:
        "The vignette is the IFN-γ row of the table applied: a CGD patient (E32/E37's deficiency) receives the recombinant macrophage-arming cytokine, and his serious infection rate falls — the adjunctive benefit the printed indication names. The mechanism question tests whether the interferons are distinguished by their native jobs: IFN-γ arms phagocytes (correct here), IFN-α primes antiviral defense (wrong disease), aldesleukin expands T cells (wrong indication), filgrastim raises counts (wrong problem — the count is normal), and epoetin addresses anemia (absent). The case closes the immunology chapter's longest loop: from the respiratory burst's chemistry to the cytokine that clinically supports it.",
    },
  },
  mnemonics: [
    {
      code: "\u201cOne grower per lineage: EPO for red, CSF for white, TPO for platelets — then the amplifiers: IL-2 grows the army, the interferons aim it.\u201d",
      meaning:
        "KYP's key for the two banners: BONE MARROW STIMULATION gives one lineage-grower per cell line — epoetin alfa (red cells, renal-failure anemia; hypertension and thromboembolism risks), filgrastim/sargramostim (white cells, leukopenia and granulocyte/monocyte recovery), romiplostim/eltrombopag (platelets, autoimmune thrombocytopenia). IMMUNOTHERAPY amplifies responses — aldesleukin (IL-2) expands antitumor T cells (RCC, melanoma), and the interferons aim the attack (α: hepatitis B/C + RCC; β: MS; γ: CGD).",
      memorizes: "The two-category directory and every agent-use pair",
      whenToUse: "Any recombinant-cytokine matching question.",
      clinical: "The cytopenia or the tumor names the drug; the banner names the strategy.",
    },
    {
      code: "\u201cIFN-γ is the macrophage's personal trainer — and in CGD, the trainer is hired when the gym is broken.\u201d",
      meaning:
        "KYP's key for the IFN-γ/CGD pairing: IFN-γ's native job is arming macrophages (E31's Th1 signal). In chronic granulomatous disease the oxidase 'gym' is broken (E32), but IFN-γ still trains the phagocytes — enhancing oxidative and non-oxidative killing enough to reduce infections — which is why it is the adjunctive therapy for CGD without being enzyme replacement.",
      memorizes: "IFN-γ → chronic granulomatous disease (and why)",
      whenToUse: "Any CGD-therapy or interferon-matching question.",
      clinical: "Given subcutaneously three times weekly; HSCT or gene therapy remains the definitive option.",
    },
    {
      code: "\u201cEPO raises red — and pressure: hematocrit up, viscosity up, clots up.\u201d",
      meaning:
        "KYP's key for epoetin alfa's risk tag: treating renal-failure anemia raises hematocrit — and with it blood viscosity (and direct vascular tone effects): the printed toxicities are hypertension and thromboembolic events. Monitor the blood pressure, dose to target (not maximal), and prophylax high-risk patients.",
      memorizes: "Epoetin alfa: anemia (especially renal failure) + hypertension/thromboembolism risks",
      whenToUse: "Any EPO-therapy or CKD-anemia question.",
      clinical: "Also used in anemia of malignancy and zidovudine-induced anemia (labeled extension); iron repletion accompanies effective EPO therapy.",
    },
  ],
  rapidReview: {
    s30: [
      "Bone marrow stimulation: EPO (epoetin alfa) · CSFs (filgrastim, sargramostim) · TPO agonists (romiplostim, eltrombopag)",
      "Epoetin alfa: anemias especially renal failure — ↑ hypertension, thromboembolic events",
      "Filgrastim (G-CSF) / sargramostim (GM-CSF): leukopenia; granulocyte + monocyte recovery",
      "Romiplostim (TPO analog) / eltrombopag (TPO receptor agonist): autoimmune thrombocytopenia",
      "Aldesleukin (IL-2): renal cell carcinoma, metastatic melanoma",
    ],
    m3: [
      "IFN-α: chronic hepatitis C (not preferred) and B + renal cell carcinoma",
      "IFN-β: multiple sclerosis",
      "IFN-γ: chronic granulomatous disease (macrophage arming)",
      "The two banners: Bone marrow stimulation / Immunotherapy",
      "Eltrombopag — the source's own 'elthrombopag' spelling cue",
    ],
    m10: [
      "Aldesleukin IS IL-2 (not an antibody); basiliximab is the anti-IL-2R antibody",
      "IFN-γ in CGD: functional support, not enzyme replacement (HSCT is definitive)",
      "G-CSF vs GM-CSF: granulocytes only vs granulocytes + monocytes",
      "Interferon adverse effects: flulike, depression, neutropenia, myopathy, autoimmunity (E32)",
      "IFN-α 'not preferred' for hepatitis C — the direct-acting-antiviral era",
    ],
  },
  recall: [
    {
      q: "List the bone-marrow-stimulation agents with their cytokines and uses.",
      a: "Erythropoietin — epoetin alfa (EPO analog): anemias, especially in renal failure (risks: hypertension, thromboembolic events). Colony-stimulating factors — filgrastim (G-CSF), sargramostim (GM-CSF): leukopenia; recovery of granulocyte and monocyte counts. Thrombopoietin — romiplostim (TPO analog), eltrombopag (TPO receptor agonist): autoimmune thrombocytopenia; platelet stimulators.",
    },
    {
      q: "What is aldesleukin, and what are its uses?",
      a: "Aldesleukin is recombinant interleukin-2 (the T-cell growth factor itself, not an antibody). Clinical uses: renal cell carcinoma and metastatic melanoma — high-dose expansion of antitumor T-cell responses.",
    },
    {
      q: "Match the three interferons to their clinical uses.",
      a: "IFN-α: chronic hepatitis C (not preferred) and B, renal cell carcinoma. IFN-β: multiple sclerosis. IFN-γ: chronic granulomatous disease.",
    },
    {
      q: "Why does IFN-γ help in chronic granulomatous disease?",
      a: "IFN-γ is the Th1 macrophage-arming cytokine: in CGD it enhances phagocyte oxidative and non-oxidative killing and antigen presentation, reducing serious infections — adjunctive functional support without correcting the underlying NADPH oxidase defect (HSCT or gene therapy remains definitive).",
    },
    {
      q: "What risks accompany epoetin alfa therapy?",
      a: "An increased risk of hypertension and thromboembolic events — the printed toxicity tag, accompanying the hematocrit/viscosity rise (plus direct vascular effects) of treating the anemia of renal failure.",
    },
  ],
  related: [
    {
      title: "Important Cytokines",
      topicId: "cytokines",
      note: "The native biology this formulary recombinantly delivers — IL-2 the T-cell grower, the interferons' native jobs.",
    },
    {
      title: "Respiratory Burst & Type I Interferons",
      topicId: "respiratory-burst-ifn",
      note: "The CGD oxidase defect that IFN-γ therapy supports, and the interferons' mechanism and adverse-effect profile.",
    },
    {
      title: "T-Cell, Combined & Phagocyte Immunodeficiencies",
      topicId: "t-cell-phagocyte-immunodeficiencies",
      note: "The deficiency table whose CGD row names the IFN-γ indication, and whose transplant therapies complete the picture.",
    },
    {
      title: "Immunosuppressants",
      topicId: "immunosuppressants",
      note: "The E40 table's IL-2 axis — suppressed by calcineurin inhibitors, blocked at the receptor by basiliximab, and here delivered as aldesleukin.",
    },
  ],
  crossLinks: [
    {
      subject: "Nephrology (CKD Anemia)",
      connection: "Epoetin alfa is the renal-failure anemia therapy — with hypertension and thromboembolism as the price of raising hematocrit in a vascular-disease population.",
    },
    {
      subject: "Oncology (Supportive Care & Immunotherapy)",
      connection: "Filgrastim schedules around chemotherapy cycles, and aldesleukin's high-dose IL-2 is the original immunotherapy of renal cell carcinoma and melanoma.",
    },
    {
      subject: "Hematology (ITP)",
      connection: "TPO receptor agonists (romiplostim, eltrombopag) made chronic ITP a medical disease — platelet stimulation instead of splenectomy.",
    },
    {
      subject: "Neurology (Multiple Sclerosis)",
      connection: "IFN-β is one of MS's classic immunomodulators — the type I interferon platform turned chronic-disease therapy.",
    },
  ],
};
