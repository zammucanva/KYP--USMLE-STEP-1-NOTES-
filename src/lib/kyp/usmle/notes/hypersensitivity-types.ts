import type { KypUsMLENote } from "../types";

// Ported from the KYP USMLE 2026 pilot corpus.
// Source: First Aid 2026, Part 1 pp. 131–134 (hypersensitivity types; transfusion reactions)

export const hypersensitivityTypes: KypUsMLENote = {
  id: "hypersensitivity-types",
  title: "Hypersensitivity Types",
  subtitle: "Gell-Coombs in four mechanisms: IgE mast cells, antibody on cells, immune complexes in tissues, and T cells with macrophages — learn the mechanism and every disease classifies itself.",
  subject: "Immunology",
  system: "Section II · High-Yield General Principles — Immune Responses",
  pilotCategory: "Immunology",
  difficulty: 2,
  readTime: 12,
  sourceRef: "First Aid 2026, Part 1 pp. 109–112 (hypersensitivity types; transfusion reactions)",
  tags: [
    "Gell-Coombs",
    "anaphylaxis",
    "Coombs test",
    "serum sickness",
    "contact dermatitis",
  ],
  core: {
    what: "Hypersensitivity reactions are immune responses that damage the host. The Gell-Coombs classification sorts them into four mechanisms: type I (anaphylactic/atopic, IgE), type II (antibody-mediated cytotoxicity/dysfunction, IgG/IgM), type III (immune complex deposition), type IV (delayed, T-cell mediated).",
    why: "Every autoimmune disease, drug reaction, transfusion reaction, transplant outcome, and allergy on the exam maps to one of these four mechanisms — the mechanism predicts the test (skin test, Coombs, biopsy), the timeline (minutes, hours, days), and the treatment.",
    keyIdea: "TYPES I, II, AND III ARE ALL ANTIBODY-MEDIATED — the difference is WHERE the antibody acts: crosslinking mast-cell IgE (I), binding cell surfaces (II), or forming circulating complexes that deposit in tissues (III). Type IV abandons antibodies entirely for T cells. Timeline predicts type: minutes = I, hours-days = II/III, 48–72 h = IV.",
  },
  blocks: [
    {
      kind: "visual",
      visualId: "hypersensitivity-mechanisms",
      title: "Four mechanisms, four pictures",
      caption: "Original schematics: IgE-crosslinked mast cell (I), antibody-coated cell with NK cell ADCC (II), Ag-Ab-C3b complex deposition with neutrophils (III), Th1-APC-macrophage cytokine loop (IV).",
      notice: "Track WHERE the antibody is in I–III: on the mast cell surface (I), on the target cell (II), in a circulating complex (III). In IV there is no antibody at all — the T cell IS the effector.",
    },
    {
      kind: "table",
      title: "Type-by-type summary — the classification backbone",
      columns: [
        "Type",
        "Effector",
        "Timeline",
        "Prototype examples",
        "Test",
      ],
      rows: [
        [
          "I — Anaphylactic/atopic",
          "IgE + mast cells (histamine, tryptase, leukotrienes)",
          "Minutes (immediate) + hours (late)",
          "Anaphylaxis (food, drug, bee sting), allergic asthma",
          "Skin test; allergen-specific IgE ELISA",
        ],
        [
          "II — Cytotoxic/dysfunction",
          "IgG/IgM on cell surfaces; complement, phagocytes, NK (ADCC)",
          "Hours–days",
          "AIHA, ITP, transfusion reactions, erythroblastosis fetalis; Goodpasture, rheumatic fever, hyperacute rejection; myasthenia gravis, Graves, pemphigus",
          "Direct/indirect Coombs; linear IF",
        ],
        [
          "III — Immune complex",
          "Ag-Ab-C3b complexes → neutrophils",
          "1–2 weeks",
          "Serum sickness, Arthus, SLE, PAN, poststrep GN, IgA vasculitis, reactive arthritis",
          "↓ C3, C4; tissue biopsy",
        ],
        [
          "IV — Delayed, cell-mediated",
          "CD8+ cytotoxic; CD4+ Th1 cytokines → macrophages",
          "48–72 h",
          "Contact dermatitis, TB (PPD), SCARs (SJS/TEN/DRESS/AGEP), GVHD, type 1 DM",
          "PPD, patch test, Candida skin test",
        ],
      ],
    },
    {
      kind: "text",
      title: "Serum sickness vs Arthus reaction — the two type III prototypes",
      body: [
        "SERUM SICKNESS is the prototypic SYSTEMIC immune-complex disease: antibodies to a foreign protein appear 1–2 weeks after exposure; complexes then deposit in tissues with complement activation (↓ serum C3, C4) → fever, urticaria, arthralgia, proteinuria, and lymphadenopathy. Serum sickness–LIKE reactions follow certain drugs acting as haptens (penicillins, monoclonal antibodies) and infections such as hepatitis B.",
        "The ARTHUS reaction is the prototypic LOCAL immune-complex disease: intradermal injection of antigen into a presensitized individual with circulating IgG produces local immune-complex formation in the skin — classically an enhanced local reaction to a BOOSTER VACCINATION — with edema, fibrinoid necrosis, and complement activation, peaking at hours.",
      ],
    },
    {
      kind: "table",
      title: "Transfusion reactions — hypersensitivity applied to the blood bank",
      columns: [
        "Reaction",
        "Mechanism",
        "Timing",
        "Findings",
      ],
      rows: [
        [
          "Acute hemolytic",
          "Type II — anti-ABO antibodies → complement-mediated INTRAVASCULAR hemolysis",
          "Minutes to 24 h",
          "Hypotension, flank pain, hemoglobinuria, DIC",
        ],
        [
          "Febrile nonhemolytic",
          "Cytokines from donor WBCs during storage, or recipient anti-HLA vs donor WBCs",
          "<4 h",
          "Fever without hemolysis; diagnosis of EXCLUSION",
        ],
        [
          "TRALI",
          "Donor anti-HLA/antineutrophil antibodies → neutrophil activation → noncardiogenic pulmonary edema",
          "<6 h",
          "Dyspnea, acute hypoxemia, bilateral infiltrates ± mild fever; NORMAL BNP, normal cardiac function",
        ],
        [
          "Allergic (urticarial)",
          "Type I — IgE to donor plasma proteins (classically anti-IgA in IgA-deficient recipients)",
          "During transfusion to 4 h",
          "Urticaria, pruritus, wheezing",
        ],
        [
          "TACO",
          "Volume overload → cardiogenic pulmonary edema",
          "6–12 h",
          "Dyspnea, JVD, hypertension, S3 gallop, ↑ BNP",
        ],
      ],
      caption: "TRALI vs TACO is the classic discriminator pair: noncardiogenic (normal BNP, normal heart) vs cardiogenic (↑ BNP, S3).",
    },
    {
      kind: "table",
      title: "Drug hypersensitivity — type IV's severe cutaneous ladder",
      columns: [
        "Syndrome",
        "Key features",
      ],
      rows: [
        [
          "Acute generalized exanthematous pustulosis (AGEP)",
          "Rapid-onset sterile pustules, fever, leukocytosis with eosinophilia",
        ],
        [
          "Stevens-Johnson syndrome (SJS) / toxic epidermal necrolysis (TEN)",
          "Nikolsky-sign epidermal necrosis; mucosal involvement; TEN = >30% body surface detachment",
        ],
        [
          "DRESS syndrome",
          "Drug rash with eosinophilia and systemic symptoms (hepatitis, nephritis, thyroiditis); long latency (2–8 weeks)",
        ],
      ],
      caption: "All are type IV, T-cell mediated; eosinophilia and severe cutaneous involvement are the shared flags.",
    },
  ],
  clinical: [
    {
      kind: "list",
      title: "Putting the classification to work at the bedside",
      items: [
        {
          lead: "Anaphylaxis within minutes of a drug or sting",
          text: "Type I — IM epinephrine first, everything else second (antihistamines, steroids adjunctive).",
        },
        {
          lead: "Positive direct Coombs with jaundice after a new drug",
          text: "Type II drug-induced autoimmune hemolytic anemia (eg, penicillins, cephalosporins, methyldopa pattern) — stop the drug.",
        },
        {
          lead: "Urticaria + arthralgia + low complement 10 days after starting a biologic",
          text: "Type III serum sickness-like reaction — stop the drug, supportive care.",
        },
        {
          lead: "Ecstasy of itching 2 days after wearing a nickel watch / poison ivy",
          text: "Type IV contact dermatitis — patch test positive; topical steroids; remember the 48–72 h delay.",
        },
        {
          lead: "Transfusion stopped for fever alone, patient comfortable",
          text: "Work through the febrile ladder: acute hemolysis (check visually for hemolysis, repeat type/crossmatch) → TRALI (hypoxemia?) → febrile nonhemolytic (diagnosis of exclusion) → TACO (volume overload signs).",
        },
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A beekeeper stung minutes ago develops diffuse urticaria, wheezing, hypotension, and tongue swelling.",
        discriminator: "Minutes + mucocutaneous + respiratory + circulatory",
        concept: "IgE-mast cell degranulation — histamine and leukotrienes",
        answer: "Type I anaphylaxis — IM epinephrine",
      },
      {
        stem: "A patient on penicillin for 7 days develops fatigue and jaundice; hemoglobin 9.2, LDH elevated, haptoglobin low; direct Coombs positive.",
        discriminator: "Positive DIRECT Coombs (antibody on the RBC)",
        concept: "Type II — opsonized cells cleared by phagocytes/complement",
        answer: "Drug-induced autoimmune hemolytic anemia — stop the penicillin",
      },
      {
        stem: "Two weeks after starting antithymocyte globulin, a patient has fever, urticarial rash, arthralgias, proteinuria, and low C3/C4.",
        discriminator: "1–2 week latency + multi-organ immune-complex signs + hypocomplementemia",
        concept: "Type III — antigen-antibody-complement complexes depositing in tissues",
        answer: "Serum sickness",
      },
      {
        stem: "A nurse develops a pruritic, vesicular, weeping rash on the wrist 2 days after resuming latex-glove exposure; patch test positive at 72 h.",
        discriminator: "48–72 h delay + eczematous local reaction",
        concept: "Type IV — Th1 cytokines recruiting macrophages",
        answer: "Contact dermatitis",
      },
    ],
    traps: [
      {
        a: "Serum sickness (type III)",
        b: "Type I drug allergy",
        whyConfused: "Both feature urticaria after drug exposure.",
        keyDifference: "Serum sickness waits 1–2 WEEKS, involves joints/kidney, and drops complement. Type I strikes in MINUTES with anaphylaxis/bronchospasm.",
        clue: "Latency period is the discriminator — minutes vs 7–14 days.",
      },
      {
        a: "Myasthenia gravis",
        b: "Graves disease",
        whyConfused: "Both type II receptor-autoantibody diseases of neuromuscular/endocrine targets.",
        keyDifference: "MG antibody BLOCKS the ACh receptor (weakness worsens with use). Graves antibody ACTIVATES the TSH receptor (hyperthyroidism).",
        clue: "Blockade vs stimulation — the two faces of type II dysfunction.",
      },
      {
        a: "Direct Coombs",
        b: "Indirect Coombs",
        whyConfused: "Same assay format, opposite patient compartments.",
        keyDifference: "Direct = antibodies already ATTACHED to the patient's RBCs (hemolysis workup). Indirect = UNBOUND antibody in serum (prenatal screening, crossmatching).",
        clue: "Direct = on the cell (D = 'on the red cell Directly'); Indirect = In the serum.",
      },
      {
        a: "Type IV contact dermatitis",
        b: "Type I atopic dermatitis/urticaria",
        whyConfused: "Both are itchy skin reactions to environmental antigens.",
        keyDifference: "Type IV is eczematous, delayed 48–72 h, mononuclear infiltrate, patch-test positive. Type I is urticarial, minutes, wheal-and-flare, skin-prick positive.",
        clue: "Timing and morphology — delayed eczema vs immediate hives.",
      },
    ],
    pivots: [
      {
        lookAlike: "Rash after a drug — which type?",
        differentiator: "Timeline: minutes (I) → hours-days with cytopenias (II) → 1–2 weeks with joints/complement drop (III) → 2+ days with eczema/eosinophilia/SCAR features (IV)",
        correctPath: "Anchor on the clock first, then the organ involved — the classification falls out.",
      },
      {
        lookAlike: "Hypotension during transfusion",
        differentiator: "Hemoglobinuria/DIC (acute hemolytic type II) vs hypoxemia + bilateral infiltrates with normal BNP (TRALI) vs JVD/S3/↑BNP (TACO) vs urticaria/wheeze (allergic type I)",
        correctPath: "Stop the transfusion; the lab constellation names the reaction type.",
      },
    ],
    miniCase: {
      vignette: "A 24-year-old woman is started on penicillin for cellulitis. Nine days later she returns with fever to 38.4°C, a diffuse urticarial rash, painful swollen knees and ankles, and 2+ protein on urinalysis. She has small tender lymph nodes. Laboratory studies reveal low serum C3 and C4. Her hemoglobin is stable and a direct Coombs test is negative.",
      question: "Which of the following mechanisms best explains this patient's presentation?",
      options: [
        {
          label: "A",
          text: "IgE-mediated mast cell degranulation",
          why: "Wrong timeline — type I reactions occur within minutes of exposure, not 9 days, and would cause anaphylaxis/bronchospasm rather than arthritis and proteinuria.",
        },
        {
          correct: true,
          label: "B",
          text: "Immune complex deposition with complement activation",
          why: "Correct. The 1–2 week latency after a drug (hapten), plus fever, urticaria, arthralgia, proteinuria, lymphadenopathy, and hypocomplementemia is textbook serum sickness — a type III reaction.",
        },
        {
          label: "C",
          text: "Antibody binding to cell-surface antigens",
          why: "Type II would produce cytopenias or target-organ dysfunction with a positive Coombs or linear IF — her counts are stable and Coombs is negative.",
        },
        {
          label: "D",
          text: "Cytotoxic T-cell killing of drug-modified keratinocytes",
          why: "That is the mechanism of SJS/TEN and other type IV SCARs — those present with epidermal necrosis/Nikolsky sign and mucositis, not urticaria with arthritis and low complement.",
        },
      ],
      reasoning: "The clock is the classifier: 9 days + multisystem (skin, joints, kidney, nodes) + consumed complement = circulating immune complexes. Stop the drug; symptoms typically resolve as complexes clear.",
    },
  },
  mnemonics: [
    {
      code: "“First and Fast, Fourth and Last”",
      meaning: "Type I = first and fastest (minutes); type IV = last in both order and onset (delayed 48–72 h).",
      memorizes: "Timeline anchors of the classification",
      whenToUse: "Any timeline-based hypersensitivity question.",
      clinical: "Minutes = epinephrine-time; 48–72 h = patch/PPD-time.",
    },
    {
      code: "“ACID”",
      meaning: "Anaphylactic (I), Cytotoxic (II), Immune complex (III), Delayed (IV) — the classic order.",
      memorizes: "The four Gell-Coombs types in sequence",
      whenToUse: "Recall scaffold before diving into mechanisms.",
      clinical: "Types I–III share antibodies; type IV is the T-cell outsider.",
    },
    {
      code: "“4 T's: T cells, Transplant rejections, TB skin tests, Touching”",
      meaning: "The type IV world: cell-mediated immunity at work.",
      memorizes: "Type IV examples",
      whenToUse: "Distinguishing type IV disease lists.",
      clinical: "PPD read at 48–72 h because sensitized T cells need that long to recruit macrophages.",
    },
    {
      code: "“In type III, 3 things stuck together”",
      meaning: "Antigen-antibody-complement = the circulating trio.",
      memorizes: "The composition of the pathogenic unit in type III",
      whenToUse: "Serum sickness, lupus nephritis, poststrep GN questions.",
      clinical: "Where the trio deposits (kidney, joints, skin, vessels) is where the disease appears.",
    },
  ],
  rapidReview: {
    s30: [
      "I = IgE mast cells (minutes): anaphylaxis, asthma — skin test/ELISA.",
      "II = IgG/IgM on cells (destruction, inflammation, or receptor dysfunction) — Coombs, linear IF.",
      "III = Ag-Ab-C3b complexes → neutrophils → ↓C3/C4 — serum sickness, SLE, poststrep GN.",
      "IV = T cells, 48–72 h — contact dermatitis, PPD, SCARs, GVHD.",
      "I, II, III are antibody-mediated; IV is not.",
    ],
    m3: [
      "Type I mediators: histamine, tryptase (activation marker), leukotrienes; late phase = chemokines → eosinophils.",
      "Type II subtypes with examples: destruction (AIHA, ITP, transfusion, erythroblastosis fetalis), inflammation (Goodpasture, rheumatic fever, hyperacute rejection), dysfunction (myasthenia BLOCK, Graves ACTIVATE, pemphigus).",
      "Serum sickness: 1–2 week latency, fever/urticaria/arthralgia/proteinuria/lymphadenopathy, hapten drugs (penicillin, mAbs), hepatitis B. Arthus: local, presensitized IgG, booster vaccines, fibrinoid necrosis.",
      "Direct Coombs = antibody on RBC (hemolysis workup); indirect = antibody in serum (prenatal, crossmatch).",
      "Transfusion reactions: acute hemolytic (type II, anti-ABO, intravascular, minutes-24 h); febrile nonhemolytic (cytokines/anti-HLA, exclusion dx); TRALI (donor anti-HLA → noncardiogenic pulmonary edema, normal BNP); allergic (type I anti-IgA); TACO (volume overload, ↑BNP, JVD, S3).",
    ],
    m10: [
      "SCAR ladder: AGEP (pustules), SJS (<10% BSA + mucositis), TEN (>30% BSA, Nikolsky), DRESS (eosinophilia + systemic, 2–8 week latency) — all type IV.",
      "Complement logic: type III CONSUMES C3/C4; hereditary angioedema (C1 inhibitor deficiency) consumes C4 selectively — different mechanism (bradykinin, not histamine) → ACE inhibitors dangerous, respond to C1-INH/kallikrein inhibitors, NOT antihistamines.",
      "PPD/patch/Candida skin tests all read at 48–72 h — the delay is the biology.",
      "Vaccine-type immunology (live attenuated vs toxoid vs subunit) determines which arm of the response is trained — live vaccines mimic type I/IV-ready immunity; contraindicated in pregnancy and immunodeficiency (except MMR/varicella at CD4 ≥200 in HIV, with specialist input).",
      "Transplant rejection types: hyperacute (type II, preformed antibody, minutes-hours), acute (cellular + humoral, weeks-months), chronic (vascular intimal fibrosis). GVHD = donor T cells attacking host — the ultimate type IV.",
    ],
  },
  recall: [
    {
      q: "Which mast-cell product is the laboratory marker of activation in anaphylaxis?",
      a: "Tryptase (histamine is the effector vasoactive amine; leukotrienes mediate bronchoconstriction).",
    },
    {
      q: "The three type II mechanisms and one example each?",
      a: "Destruction (AIHA), inflammation (Goodpasture), dysfunction — blockade (myasthenia) or activation (Graves).",
    },
    {
      q: "What laboratory pattern defines active type III disease?",
      a: "Low serum C3 and C4 (consumed by immune complexes) with vasculitic/systemic features.",
    },
    {
      q: "Timeline of the PPD and what it measures?",
      a: "48–72 h — measures delayed-type (type IV) T-cell memory of TB antigens; induration, not erythema.",
    },
    {
      q: "TRALI vs TACO — the two-line distinction?",
      a: "TRALI: donor anti-HLA → noncardiogenic pulmonary edema, normal BNP, normal heart. TACO: volume overload → cardiogenic edema, ↑BNP, JVD, S3.",
    },
    {
      q: "Which hypersensitivity type is hemolytic disease of the newborn?",
      a: "Type II — maternal anti-Rh(D) IgG crossing the placenta; prevented by antenatal RhIG (indirect Coombs screens the mother).",
    },
  ],
  related: [
    {
      title: "Urinary Casts",
      note: "Poststreptococcal glomerulonephritis is type III in the kidney — RBC casts + low C3 tie the two notes together.",
      topicId: "urinary-casts",
    },
    {
      title: "Sympathomimetics",
      note: "Epinephrine (α + β) is the type I antidote — receptor physiology from the autonomic note becomes the rescue drug here.",
      topicId: "sympathomimetics",
    },
    {
      title: "Diabetes Mellitus",
      note: "Type 1 diabetes is a type IV autoimmune disease — the Gell-Coombs framework and the endocrine failure meet in the β cell.",
      topicId: "diabetes-mellitus",
    },
    {
      title: "Transplant immunology",
      note: "Hyperacute (II) vs acute cellular (IV) vs chronic rejection — the same classification applied to a single organ.",
    },
  ],
  crossLinks: [
    {
      subject: "Pathology",
      connection: "Fibrinoid necrosis (Arthus, malignant hypertension, vasculitis) is the histologic signature of type III vascular injury.",
    },
    {
      subject: "Dermatology",
      connection: "Urticaria (I), pemphigus (II), immune-complex purpura (III), contact dermatitis and SJS/TEN (IV) — the skin displays all four types.",
    },
    {
      subject: "Pharmacology",
      connection: "Drug haptens drive type II (penicillin hemolysis), type III (serum sickness), and type IV (DRESS/SJS) — the same drug, three mechanisms.",
    },
    {
      subject: "Microbiology",
      connection: "Group A strep and hepatitis B are the classic infectious type III triggers; TB is the type IV test organism.",
    },
  ],
  mechanisms: [
    {
      id: "type1",
      title: "Type I — anaphylactic and atopic (two phases)",
      context: "Minutes to hours",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Allergen crosslinks preformed, surface-bound IgE on sensitized mast cells",
            sublabel: "Prior sensitization loaded mast cells with allergen-specific IgE via Fc receptors.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Immediate phase (minutes): degranulation",
            sublabel: "Molecular — Released: histamine (a vasoactive amine), tryptase (the marker of mast cell activation), and leukotrienes → vasodilation, bronchoconstriction, urticaria, shock.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Late phase (hours): recruited inflammation",
            sublabel: "cellular — Mast-cell chemokines attract eosinophils and other inflammatory cells → sustained inflammation and tissue damage (eg, late asthmatic response).",
            variant: "process",
          },
          {
            id: "o1",
            label: "Examples: anaphylaxis (food, drug, bee sting), allergic asthma",
            sublabel: "Clinical: 'First and Fast.'",
            variant: "output",
          },
          {
            id: "o2",
            label: "Tests: skin test or blood ELISA for allergen-specific IgE",
            sublabel: "Lab: Tryptase marks activation; eosinophilia marks the late phase.",
            variant: "output",
          },
          {
            id: "o3",
            label: "Treatment: epinephrine for anaphylaxis; antihistamines/steroids for milder",
            sublabel: "Clinical: Avoidance and desensitization for prevention.",
            variant: "output",
          },
        ],
        edges: [
          {
            from: "trigger",
            to: "s1",
          },
          {
            from: "s1",
            to: "s2",
          },
          {
            from: "s2",
            to: "o1",
          },
          {
            from: "s2",
            to: "o2",
          },
          {
            from: "s2",
            to: "o3",
          },
        ],
        caption:
          "Sensitize once with IgE on mast cells; re-expose crosses two IgE molecules and the cell dumps histamine in minutes. The late phase is eosinophil recruitment — two waves, one mechanism.",
      },
    },
    {
      id: "type2",
      title: "Type II — antibody binds the cell surface (three outcomes)",
      context: "Hours to days",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "IgG/IgM bind cell-surface antigens or extracellular matrix",
            sublabel: "The antibody's Fc region and complement do the damage.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Cellular destruction",
            sublabel: "cellular — Opsonization (C3b, IgG) → phagocytosis, complement-mediated lysis (MAC), or NK-cell killing via Fc receptors (antibody-dependent cellular cytotoxicity, ADCC).",
            variant: "process",
          },
          {
            id: "s2",
            label: "Inflammation",
            sublabel: "cellular — Complement activation (C3a, C5a) and Fc-receptor engagement recruit neutrophils → bystander tissue damage.",
            variant: "process",
          },
          {
            id: "s3",
            label: "Cellular dysfunction (no cell death)",
            sublabel: "Molecular — Antibodies bind receptors and either BLOCK or ACTIVATE downstream signaling — disease without destruction.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Destruction examples: autoimmune hemolytic anemia (incl. drug-induced), immune thrombocytopenia, transfusion reactions, hemolytic disease of the newborn",
            sublabel: "Clinical: Direct Coombs ⊕ (antibody ON the RBC).",
            variant: "output",
          },
          {
            id: "o2",
            label: "Inflammation examples: Goodpasture syndrome, rheumatic fever, hyperacute transplant rejection",
            sublabel: "Clinical: Linear IF on biopsy (anti-basement membrane).",
            variant: "output",
          },
          {
            id: "o3",
            label: "Dysfunction examples: myasthenia gravis (block), Graves disease (activate), pemphigus vulgaris",
            sublabel: "Clinical: Receptor-directed disease — no cytopenia required.",
            variant: "output",
          },
        ],
        edges: [
          {
            from: "trigger",
            to: "s1",
          },
          {
            from: "s1",
            to: "s2",
          },
          {
            from: "s2",
            to: "s3",
          },
          {
            from: "s3",
            to: "o1",
          },
          {
            from: "s3",
            to: "o2",
          },
          {
            from: "s3",
            to: "o3",
          },
        ],
        caption:
          "Antibody binds the cell surface and chooses one of three weapons — complement lysis, opsonophagocytosis, or receptor modulation (Graves stimulating, myasthenia blocking).",
      },
    },
    {
      id: "type3",
      title: "Type III — immune complexes deposit in tissues",
      context: "1–2 weeks after exposure",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Antigen-antibody complexes (mostly IgG) form in circulation",
            sublabel: "In type III, imagine the complex as 3 things stuck together: antigen-antibody-complement.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Complexes activate complement and deposit in vessels/tissues",
            sublabel: "Molecular — Favored sites: kidney, joints, skin, vessels — anywhere with filtration or turbulence.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Complement (C5a) attracts neutrophils",
            sublabel: "cellular — Neutrophils release lysosomal enzymes trying to eat the complexes → endothelial and tissue damage.",
            variant: "process",
          },
          {
            id: "o1",
            label: "↓ serum C3 and C4 with vasculitis and systemic features",
            sublabel: "Lab: The lab signature of active immune-complex disease.",
            variant: "output",
          },
          {
            id: "o2",
            label: "Examples: serum sickness, Arthus reaction, SLE, reactive arthritis, polyarteritis nodosa, poststreptococcal GN, IgA vasculitis",
            sublabel: "Clinical: The diseases cluster at kidney/skin/joints.",
            variant: "output",
          },
        ],
        edges: [
          {
            from: "trigger",
            to: "s1",
          },
          {
            from: "s1",
            to: "s2",
          },
          {
            from: "s2",
            to: "o1",
          },
          {
            from: "s2",
            to: "o2",
          },
        ],
        caption:
          "Antigen-plus-antibody complexes form in slight antigen excess, circulate, and lodge where filtration captures them — joints, kidneys, vessels — complement screams, neutrophils digest the tissue.",
      },
    },
    {
      id: "type4",
      title: "Type IV — delayed, T-cell mediated (two mechanisms)",
      context: "48–72 hours",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Sensitized T cells re-encounter antigen",
            sublabel: "No antibodies participate — the only type that is NOT antibody-mediated.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Direct cytotoxicity (CD8+)",
            sublabel: "cellular — Cytotoxic T cells kill antigen-bearing targets cell-to-cell.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Inflammatory reaction (CD4+ Th1)",
            sublabel: "cellular — Effector CD4+ cells recognize antigen on antigen-presenting cells and release cytokines (IFN-γ, IL-2, TNF-α) → activate macrophages → granulomatous/mononuclear inflammation.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Examples: contact dermatitis (poison ivy, nickel), drug reactions with eosinophilia and SCARs (AGEP, SJS, TEN, DRESS), graft-versus-host disease",
            sublabel: "Clinical: 'Fourth and last (delayed).'",
            variant: "output",
          },
          {
            id: "o2",
            label: "Tests: PPD for TB, patch test for contact dermatitis, Candida skin test for T-cell function",
            sublabel: "Lab: Read at 48–72 h — the timing IS the mechanism.",
            variant: "output",
          },
          {
            id: "o3",
            label: "4 T's: T cells, Transplant rejections, TB skin tests, Touching (contact dermatitis)",
            sublabel: "Effect: The recall scaffold.",
            variant: "output",
          },
        ],
        edges: [
          {
            from: "trigger",
            to: "s1",
          },
          {
            from: "s1",
            to: "s2",
          },
          {
            from: "s2",
            to: "o1",
          },
          {
            from: "s2",
            to: "o2",
          },
          {
            from: "s2",
            to: "o3",
          },
        ],
        caption:
          "No antibody at all: T cells do the killing — CD4 delayed hypersensitivity (PPD, contact dermatitis) or CD8 cytotoxicity. The 24–72 hour delay is the time to recruit and expand.",
      },
    },
  ],
};
