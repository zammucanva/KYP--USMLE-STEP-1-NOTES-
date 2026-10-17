import type { KypUsMLENote } from "../types";

// Immunology — Immune Responses (E-batch 35).
// Source: First Aid 2026, Part 1 pdf 135 / book 113
// (Autoantibodies — the serology directory table)

export const autoantibodies: KypUsMLENote = {
  id: "autoantibodies",
  title: "Autoantibodies and Their Disease Associations",
  subtitle:
    "The serology directory: every classic autoantibody paired with its disease. Neurology: anti-postsynaptic ACh receptor (myasthenia gravis) and anti-presynaptic voltage-gated Ca2+ channel (Lambert-Eaton). Rheumatology: ANA (nonspecific screen, often SLE); anti-dsDNA and anti-Smith (SLE); anticardiolipin and lupus anticoagulant plus anti-β2 glycoprotein I (antiphospholipid syndrome); antihistone (drug-induced lupus); anti-U1 RNP (mixed connective tissue disease); rheumatoid factor and the more specific anti-CCP (rheumatoid arthritis); anti-Ro/SSA and anti-La/SSB (Sjögren); anti-Scl-70/anti-topoisomerase I (diffuse scleroderma) versus anticentromere (limited scleroderma/CREST); antisynthetase (anti-Jo-1), anti-SRP, anti-Mi-2 (polymyositis/dermatomyositis); MPO-ANCA/p-ANCA (microscopic polyangiitis, EGPA, ulcerative colitis, primary sclerosing cholangitis) versus PR3-ANCA/c-ANCA (granulomatosis with polyangiitis). Hepatic/GI: antimitochondrial (primary biliary cholangitis); anti-smooth muscle and anti-LKM1 (autoimmune hepatitis); IgA anti-endomysial, anti-tTG, and deamidated gliadin peptide (celiac). Endocrine: antithyroglobulin/anti-TPO (Hashimoto) versus anti-TSH receptor (Graves); anti-GAD and islet cell antibodies (type 1 diabetes); antiparietal cell and anti-intrinsic factor (pernicious anemia). Renal: anti-phospholipase A2 receptor (primary membranous nephropathy) and anti-GBM (Goodpasture). Dermatology: anti-hemidesmosome (bullous pemphigoid) versus anti-desmoglein (pemphigus vulgaris).",
  subject: "Immunology",
  system: "Section II · High-Yield General Principles — Immune Responses",
  pilotCategory: "Immune Responses — autoantibody-disease directory by system (AChR, Ca channel, ANA/dsDNA/Sm, antiphospholipid set, histone, U1 RNP, RF/CCP, Ro/La, Scl-70/centromere, Jo-1/SRP/Mi-2, p-ANCA/c-ANCA, mitochondrial, SMA/LKM1, endomysial/tTG, thyroid set, GAD, parietal/intrinsic factor, PLA2R, GBM, hemidesmosome, desmoglein)",
  difficulty: 2,
  readTime: 9,
  sourceRef:
    "First Aid 2026, Part 1 pp. 113 (Autoantibodies)",
  tags: [
    "autoantibodies",
    "anti-ACh receptor",
    "myasthenia gravis",
    "anti-voltage-gated calcium channel",
    "Lambert-Eaton myasthenic syndrome",
    "anti-beta2 glycoprotein I",
    "antiphospholipid syndrome",
    "ANA",
    "antinuclear antibody",
    "SLE screening",
    "anticardiolipin",
    "lupus anticoagulant",
    "anti-dsDNA",
    "anti-Smith",
    "antihistone",
    "drug-induced lupus",
    "anti-U1 RNP",
    "mixed connective tissue disease",
    "rheumatoid factor",
    "anti-CCP",
    "rheumatoid arthritis",
    "anti-Ro",
    "SSA",
    "anti-La",
    "SSB",
    "Sjogren syndrome",
    "anti-Scl-70",
    "anti-topoisomerase I",
    "diffuse scleroderma",
    "anticentromere",
    "CREST syndrome",
    "limited scleroderma",
    "antisynthetase",
    "anti-Jo-1",
    "anti-SRP",
    "anti-Mi-2",
    "polymyositis",
    "dermatomyositis",
    "antimitochondrial",
    "primary biliary cholangitis",
    "anti-smooth muscle",
    "anti-LKM1",
    "autoimmune hepatitis",
    "MPO-ANCA",
    "p-ANCA",
    "microscopic polyangiitis",
    "eosinophilic granulomatosis with polyangiitis",
    "PR3-ANCA",
    "c-ANCA",
    "granulomatosis with polyangiitis",
    "anti-phospholipase A2 receptor",
    "membranous nephropathy",
    "anti-hemidesmosome",
    "bullous pemphigoid",
    "anti-desmoglein",
    "pemphigus vulgaris",
    "antithyroglobulin",
    "antithyroid peroxidase",
    "Hashimoto thyroiditis",
    "anti-TSH receptor",
    "Graves disease",
    "anti-endomysial",
    "anti-tissue transglutaminase",
    "deamidated gliadin peptide",
    "celiac disease",
    "anti-glutamic acid decarboxylase",
    "islet cell antibodies",
    "type 1 diabetes",
    "antiparietal cell",
    "anti-intrinsic factor",
    "pernicious anemia",
    "anti-GBM",
    "Goodpasture syndrome",
  ],
  core: {
    what: "The autoantibody directory pairs each classic antibody with its disease: anti-postsynaptic ACh receptor — myasthenia gravis; anti-presynaptic voltage-gated Ca2+ channel — Lambert-Eaton myasthenic syndrome; anti-β2 glycoprotein I — antiphospholipid syndrome; antinuclear (ANA) — nonspecific screening antibody, often associated with SLE; anticardiolipin and lupus anticoagulant — SLE and antiphospholipid syndrome; anti-dsDNA and anti-Smith — SLE; antihistone — drug-induced lupus; anti-U1 RNP — mixed connective tissue disease; rheumatoid factor (IgM antibody against IgG Fc region) and anti-cyclic citrullinated peptide (anti-CCP, more specific) — rheumatoid arthritis; anti-Ro/SSA and anti-La/SSB — Sjögren syndrome; anti-Scl-70 (anti-DNA topoisomerase I) — scleroderma (diffuse); anticentromere — limited scleroderma (CREST syndrome); antisynthetase (eg, anti-Jo-1), anti-SRP, antihelicase (anti-Mi-2) — polymyositis and dermatomyositis; antimitochondrial — primary biliary cholangitis; anti-smooth muscle and anti-liver/kidney microsomal-1 — autoimmune hepatitis; MPO-ANCA/perinuclear ANCA (p-ANCA) — microscopic polyangiitis, eosinophilic granulomatosis with polyangiitis, ulcerative colitis, and primary sclerosing cholangitis; PR3-ANCA/cytoplasmic ANCA (c-ANCA) — granulomatosis with polyangiitis; anti-phospholipase A2 receptor — primary membranous nephropathy; anti-hemidesmosome — bullous pemphigoid; anti-desmoglein (anti-desmosome) — pemphigus vulgaris; antithyroglobulin and antithyroid peroxidase (antimicrosomal) — Hashimoto thyroiditis; anti-TSH receptor — Graves disease; IgA anti-endomysial, IgA anti-tissue transglutaminase, and IgA/IgG deamidated gliadin peptide — celiac disease; anti-glutamic acid decarboxylase and islet cell cytoplasmic antibodies — type 1 diabetes mellitus; antiparietal cell and anti-intrinsic factor — pernicious anemia; anti-glomerular basement membrane — Goodpasture syndrome.",
    why: "This table is the highest-density matching exercise in the entire exam: virtually every rheumatology, endocrine, GI, renal, neurologic, and dermatologic vignette resolves to one of these pairs, and the question is asked in BOTH directions — antibody given, name the disease; disease given, name the antibody. The specificity tiers matter as much as the pairs: ANA is a screening antibody (nonspecific — positive in many autoimmune diseases and even healthy people), while anti-dsDNA and anti-Smith are SLE-specific; rheumatoid factor is sensitive but anti-CCP is more specific for RA; and antihistone points specifically at drug-induced lupus (the procainamide/hydralazine stem). The paired-contrast rows are the exam's favorite discriminations: anti-Scl-70 (diffuse scleroderma) versus anticentromere (limited/CREST); c-ANCA (GPA) versus p-ANCA (MPA/EGPA and the UC/PSC company); anti-desmoglein (pemphigus vulgaris, intraepidermal) versus anti-hemidesmosome (bullous pemphigoid, subepidermal); anti-TSH receptor (Graves, stimulating) versus anti-TPO (Hashimoto, destructive); and the neuromuscular pair — postsynaptic ACh receptor (myasthenia) versus presynaptic Ca channel (Lambert-Eaton).",
    keyIdea: "Organize the directory by organ system, then learn it as two-step matching. NEURO: ACh receptor (postsynaptic) = myasthenia gravis; voltage-gated Ca2+ channel (presynaptic) = Lambert-Eaton. RHEUM (the SLE ladder): ANA = screen (nonspecific); anti-dsDNA + anti-Smith = SLE-specific; anticardiolipin + lupus anticoagulant + anti-β2 glycoprotein I = antiphospholipid syndrome; antihistone = drug-induced lupus; anti-U1 RNP = MCTD. RHEUM (the rest): RF + anti-CCP (more specific) = RA; Ro/SSA + La/SSB = Sjögren; Scl-70 (topoisomerase I) = diffuse scleroderma; anticentromere = CREST/limited; Jo-1 (antisynthetase) + SRP + Mi-2 = myositis; c-ANCA (PR3) = GPA; p-ANCA (MPO) = MPA/EGPA + UC + PSC. HEPATIC/GI: antimitochondrial = PBC; smooth muscle + LKM1 = autoimmune hepatitis; IgA endomysial/tTG/deamidated gliadin = celiac. ENDOCRINE: TPO + thyroglobulin = Hashimoto; TSH receptor = Graves; GAD + islet cell = T1DM; parietal cell + intrinsic factor = pernicious anemia. RENAL: phospholipase A2 receptor = membranous nephropathy; anti-GBM = Goodpasture. SKIN: hemidesmosome = bullous pemphigoid; desmoglein = pemphigus vulgaris.",
  },
  mechanisms: [
    {
      id: "antibody-tissue-tropism-map",
      title: "Antibody-target anatomy — where each antibody attacks and what follows",
      context: "Reading the directory mechanistically: target → syndrome",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Immune tolerance fails and antibodies form against a self-antigen",
            sublabel: "Input — the target's location and function predict the entire syndrome.",
            variant: "input",
          },
          {
            id: "s1",
            label: "RECEPTOR-TARGETED DISEASE: the antibody binds a receptor — anti-TSH receptor STIMULATES (Graves), anti-ACh receptor BLOCKS/complements (myasthenia), anti-presynaptic Ca channel reduces acetylcholine release (Lambert-Eaton)",
            sublabel: "Process — receptor antibodies are functional: stimulating, blocking, or modulating, and the syndrome mirrors the receptor's job.",
            variant: "process",
          },
          {
            id: "s2",
            label: "STRUCTURE-TARGETED DISEASE: antibodies bind structural proteins — desmoglein (desmosome) splits the intraepidermal junction (pemphigus), hemidesmosome detaches the epidermis from basement membrane (bullous pemphigoid), GBM attacks the filtration barrier (Goodpasture), centromere/topoisomerase mark the scleroderma subsets",
            sublabel: "Process — the anatomic level of the target sets the blister plane, the organ damage, and the disease subset.",
            variant: "process",
          },
          {
            id: "o1",
            label: "The serologic diagnosis: the antibody names the disease (and its specificity tier) — ANA screens, anti-dsDNA/Sm/CCP confirm, antihistone indicts the drug, and the ANCA pattern splits the vasculitides",
            sublabel: "Output — two-step matching: antibody→disease and disease→antibody, with specificity tiers deciding what a positive result means.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "target chosen" },
          { from: "s1", to: "s2", label: "function or structure" },
          { from: "s2", to: "o1", label: "syndrome + serology" },
        ],
        caption:
          "The directory becomes learnable when read as target anatomy. Receptor antibodies produce FUNCTIONAL disease: the anti-TSH receptor mimics TSH (stimulating antibody — hyperthyroidism with diffuse goiter and orbitopathy), the anti-ACh receptor attacks the postsynaptic neuromuscular junction (fluctuating weakness worse with use, improved by cholinesterase inhibitors), and the anti-presynaptic voltage-gated calcium channel impairs acetylcholine release (Lambert-Eaton's proximal weakness that IMPROVES with use — the exam's paired contrast). Structural antibodies produce ANATOMIC disease at the level they attack: anti-desmoglein dissolves desmosomal adhesion between keratinocytes (flaccid intraepidermal blisters, Nikolsky positive — pemphigus vulgaris), anti-hemidesmosome separates epidermis from the basement membrane (tense subepidermal bullae, Nikolsky negative — bullous pemphigoid), anti-GBM collagens the glomerular and alveolar basement membranes (nephritis + hemoptysis — Goodpasture), and the mitotic-apparatus versus topoisomerase-I targets split scleroderma into its limited (anticentromere, CREST) and diffuse (anti-Scl-70) forms. The enzyme-targeted antibodies complete the map: antimitochondrial (the biliary transporter — PBC), MPO versus PR3 (the two neutrophil granule enzymes that define p-ANCA versus c-ANCA vasculitis), tissue transglutaminase (the gliadin-modifying enzyme — celiac), and GAD (the β-cell enzyme — type 1 diabetes).",
      },
    },
  ],
  blocks: [
    {
      kind: "table",
      title: "Autoantibodies and associated disorders — verbatim",
      intro: "The source's full serology directory, verbatim.",
      columns: ["Autoantibody", "Associated disorder"],
      rows: [
        ["Anti-postsynaptic ACh receptor", "Myasthenia gravis"],
        ["Anti-presynaptic voltage-gated Ca2+ channel", "Lambert-Eaton myasthenic syndrome"],
        ["Anti-β2 glycoprotein I", "Antiphospholipid syndrome"],
        ["Antinuclear (ANA)", "Nonspecific screening antibody, often associated with SLE"],
        ["Anticardiolipin, lupus anticoagulant", "SLE, antiphospholipid syndrome"],
        ["Anti-dsDNA, anti-Smith", "SLE"],
        ["Antihistone", "Drug-induced lupus"],
        ["Anti-U1 RNP (ribonucleoprotein)", "Mixed connective tissue disease"],
        ["Rheumatoid factor (IgM antibody against IgG Fc region), anti-cyclic citrullinated peptide (anti-CCP, more specific)", "Rheumatoid arthritis"],
        ["Anti-Ro/SSA, anti-La/SSB", "Sjögren syndrome"],
        ["Anti-Scl-70 (anti-DNA topoisomerase I)", "Scleroderma (diffuse)"],
        ["Anticentromere", "Limited scleroderma (CREST syndrome)"],
        ["Antisynthetase (eg, anti-Jo-1), anti-SRP, antihelicase (anti-Mi-2)", "Polymyositis, dermatomyositis"],
        ["Antimitochondrial", "1° biliary cholangitis"],
        ["Anti-smooth muscle, anti-liver/kidney microsomal-1", "Autoimmune hepatitis"],
        ["Myeloperoxidase-antineutrophil cytoplasmic antibody (MPO-ANCA)/perinuclear ANCA (p-ANCA)", "Microscopic polyangiitis, eosinophilic granulomatosis with polyangiitis, ulcerative colitis, 1° sclerosing cholangitis"],
        ["PR3-ANCA/cytoplasmic ANCA (c-ANCA)", "Granulomatosis with polyangiitis"],
        ["Anti-phospholipase A2 receptor", "1° membranous nephropathy"],
        ["Anti-hemidesmosome", "Bullous pemphigoid"],
        ["Anti-desmoglein (anti-desmosome)", "Pemphigus vulgaris"],
        ["Antithyroglobulin, antithyroid peroxidase (antimicrosomal)", "Hashimoto thyroiditis"],
        ["Anti-TSH receptor", "Graves disease"],
        ["IgA anti-endomysial, IgA anti-tissue transglutaminase, IgA and IgG deamidated gliadin peptide", "Celiac disease"],
        ["Anti-glutamic acid decarboxylase, islet cell cytoplasmic antibodies", "Type 1 diabetes mellitus"],
        ["Antiparietal cell, anti-intrinsic factor", "Pernicious anemia"],
        ["Anti-glomerular basement membrane", "Goodpasture syndrome"],
      ],
      caption:
        "Read the table twice: once by antibody (given the serology, name the disease) and once by disease (given the vignette, name the antibody) — the exam tests both directions. Then learn the contrast pairs inside it: Scl-70 vs centromere (diffuse vs limited scleroderma), c-ANCA vs p-ANCA (GPA vs MPA/EGPA-UC-PSC), desmoglein vs hemidesmosome (pemphigus vs pemphigoid), TSH receptor vs TPO (Graves vs Hashimoto), and ACh receptor vs Ca channel (myasthenia vs Lambert-Eaton). The specificity tiers: ANA screens, anti-dsDNA/anti-Smith confirm SLE, anti-CCP outspecifies RF, antihistone indicts the drug.",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "The SLE serology ladder and the specificity lesson",
      body: "The lupus panel is the exam's lesson in tiered specificity: ANA is the nonspecific SCREENING antibody (sensitive, present in many autoimmune diseases and a meaningful fraction of healthy people — a positive ANA alone diagnoses nothing); anti-dsDNA and anti-Smith are the SLE-SPECIFIC confirmatory antibodies (anti-dsDNA also tracks disease activity and nephritis risk); anticardiolipin and lupus anticoagulant (with anti-β2 glycoprotein I) define the antiphospholipid overlay — thromboses and recurrent pregnancy loss with a paradoxically prolonged PTT that corrects with excess phospholipid; and antihistone is the drug-induced lupus marker (the procainamide/hydralazine — also minocycline and TNF-inhibitor — stem, with pulmonary-sparing disease). The same logic runs through the whole table: RF is sensitive for RA but anti-CCP is MORE SPECIFIC (the table says so verbatim); the ANCA patterns split the vasculitides by their enzyme target (PR3 = c-ANCA = GPA; MPO = p-ANCA = MPA/EGPA with the UC and PSC company); and the IgA-restricted celiac set (endomysial, tTG, deamidated gliadin) reflects the mucosal immune compartment the disease lives in.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 21-year-old woman presents with 3 weeks of hemoptysis and tea-colored urine; urinalysis shows dysmorphic RBCs and RBC casts; renal biopsy demonstrates linear IgG deposition along the glomerular basement membrane.",
        discriminator: "Hemoptysis + glomerulonephritis + LINEAR (not granular) IF",
        concept: "Anti-glomerular basement membrane — Goodpasture syndrome",
        answer:
          "Anti-GBM antibodies bind the collagen of the glomerular and alveolar basement membranes, producing the pulmonary-renal syndrome: rapidly progressive (crescentic) glomerulonephritis with hematuria/RBC casts and hemoptysis, and a LINEAR immunofluorescence pattern (the granular 'lumpy-bumpy' pattern belongs to immune-complex disease like post-strep or membranoproliferative GN). Plasmapheresis plus steroids and cyclophosphamide removes and suppresses the antibody.",
      },
      {
        stem: "A 55-year-old man has six months of nasal congestion with epistaxis, saddle-nose deformity, cavitary lung lesions, and a necrotizing glomerulonephritis; cytoplasmic staining on ethanol-fixed neutrophils is positive.",
        discriminator: "Upper + lower respiratory + renal triad + c-ANCA",
        concept: "PR3-ANCA (c-ANCA) — granulomatosis with polyangiitis",
        answer:
          "PR3-ANCA (cytoplasmic ANCA, c-ANCA) is the antibody of granulomatosis with polyangiitis: the classic triad of sinus/nasal disease (epistaxis, saddle nose), cavitary lung lesions, and necrotizing (crescentic) glomerulonephritis — necrotizing granulomatous vasculitis of small-to-medium vessels. The p-ANCA (MPO) contrast belongs to microscopic polyangiitis (no granulomas, no upper-airway disease) and EGPA (asthma + eosinophilia), with UC and PSC as p-ANCA's non-vasculitic company.",
      },
      {
        stem: "A patient with chronic hepatitis C and sicca symptoms has positive antinuclear antibodies; further testing shows anti-Ro/SSA and anti-La/SSB with hypergammaglobulinemia and salivary gland lymphocytic infiltration on lip biopsy.",
        discriminator: "Sicca (dry eyes/dry mouth) + Ro/La",
        concept: "Anti-Ro/SSA and anti-La/SSB — Sjögren syndrome",
        answer:
          "Sjögren syndrome is marked by anti-Ro/SSA and anti-La/SSB: lymphocytic destruction of salivary and lacrimal glands (sicca syndrome), often secondary to rheumatoid disease or hepatitis C, with a markedly elevated risk of B-cell lymphoma (the salivary MALT lymphoma the chronic gland swelling warns of). Neonatal lupus (congenital heart block) is the transplacental anti-Ro phenomenon — SSA is the antibody that crosses.",
      },
    ],
    traps: [
      {
        a: "A positive ANA establishes the diagnosis of SLE",
        b: "ANA is a NONSPECIFIC SCREENING antibody; anti-dsDNA and anti-Smith are the specific ones",
        whyConfused: "ANA is the test everyone orders first in suspected lupus.",
        keyDifference:
          "The table grades the ladder verbatim: antinuclear (ANA) is the 'nonspecific screening antibody, often associated with SLE' — sensitive but present in many conditions and healthy people; anti-dsDNA and anti-Smith are the SLE rows (anti-dsDNA also correlating with nephritis and activity). A positive ANA with negative dsDNA/Sm in a low-pretest-probability patient is often meaningless; a negative ANA makes SLE unlikely.",
        clue: "Any ANA-interpretation question.",
      },
      {
        a: "Anticentromere marks diffuse scleroderma",
        b: "Anticentromere = LIMITED scleroderma (CREST); anti-Scl-70 = DIFFUSE",
        whyConfused: "Both are scleroderma antibodies, so the subsets blur.",
        keyDifference:
          "Anti-Scl-70 (anti-DNA topoisomerase I) marks diffuse scleroderma — widespread skin thickening, early internal-organ involvement (renal crisis, ILD); anticentromere marks the LIMITED form, the CREST syndrome (Calcinosis, Raynaud, Esophageal dysmotility, Sclerodactyly, Telangiectasia) — distal skin sparing, later/lung-dominant involvement. The antibody names the subset and prognostic shape.",
        clue: "Any scleroderma-subset question with a CREST stem.",
      },
      {
        a: "Anti-desmoglein causes bullous pemphigoid",
        b: "Anti-desmoglein = PEMPHIGUS VULGARIS; anti-hemidesmosome = BULLOUS PEMPHIGOID",
        whyConfused: "Both are blistering diseases with antibody-targeted adhesion structures.",
        keyDifference:
          "The target sets the blister plane: anti-desmoglein (desmosome) dissolves keratinocyte-to-keratinocyte adhesion INTRAepidermally — flaccid blisters, oral involvement, Nikolsky positive, potentially fatal (pemphigus vulgaris). Anti-hemidesmosome detaches the epidermis from the basement membrane SUBepidermally — tense bullae, Nikolsky negative, older patients, pruritic, more benign (bullous pemphigoid). Depth, tension, and Nikolsky all follow the target.",
        clue: "Any blistering-disease antibody or Nikolsky question.",
      },
    ],
    pivots: [
      {
        lookAlike: "Myasthenia gravis vs Lambert-Eaton myasthenic syndrome (the neuromuscular pair)",
        differentiator: "Pre- or postsynaptic target, and what use does to strength",
        correctPath:
          "Myasthenia gravis: anti-postsynaptic ACh receptor — weakness WORSENS with repeated use (decorates: ptosis and diplopia worse at day's end), improved by cholinesterase inhibitors; associated with thymic hyperplasia/thymoma. Lambert-Eaton: anti-presynaptic voltage-gated Ca2+ channel — acetylcholine release itself is impaired; weakness IMPROVES with repeated use (facilitation), autonomic features (dry mouth), and paraneoplastic association with small cell lung carcinoma. Post- versus presynaptic is the whole discrimination.",
      },
      {
        lookAlike: "Graves vs Hashimoto (the thyroid pair)",
        differentiator: "Stimulating versus destructive antibody",
        correctPath:
          "Graves: anti-TSH receptor — a STIMULATING antibody mimicking TSH: diffuse toxic goiter, orbitopathy, pretibial myxedema; TSH suppressed with elevated T3/T4. Hashimoto: antithyroglobulin and antithyroid peroxidase (antimicrosomal) — destructive antibodies: painless goiter with lymphocytic infiltration, eventual hypothyroidism, Hürthle cells on histology; associated with other autoimmunity and lymphoma risk. Same gland, opposite functional direction — the antibody decides the phenotype.",
      },
    ],
    miniCase: {
      vignette:
        "A 19-year-old man presents to the emergency department with two days of hemoptysis and one week of tea-colored urine. He has had no recent infections, takes no medications, and does not smoke. Examination is notable for blood pressure 158/94, periorbital edema, and bibasilar crackles. Urinalysis: protein 2+, blood 4+, dysmorphic erythrocytes, and erythrocyte casts. Serum creatinine has risen from a baseline of 0.9 to 2.8 mg/dL over five days. ANA is negative; ANCA testing is negative; complement levels are normal. Chest x-ray shows bilateral alveolar infiltrates. A renal biopsy is performed: crescentic glomerulonephritis with LINEAR IgG deposition along the glomerular basement membrane on immunofluorescence.",
      question:
        "Which antibody is most likely responsible for this patient's pulmonary-renal syndrome?",
      options: [
        {
          label: "A",
          text: "Anti-glomerular basement membrane antibody",
          correct: true,
          why: "Correct — Goodpasture syndrome. Anti-GBM antibodies bind the α3 chain of collagen IV in the glomerular AND alveolar basement membranes, producing rapidly progressive crescentic glomerulonephritis with hemoptysis, and — the decisive finding — LINEAR IgG deposition on immunofluorescence (immune-complex diseases give granular deposition). Negative ANA and ANCA with normal complements exclude the lupus and vasculitic mimics. Treatment: plasmapheresis (to remove the antibody) with steroids and cyclophosphamide.",
        },
        {
          label: "B",
          text: "PR3-ANCA (cytoplasmic ANCA)",
          why: "PR3-ANCA (c-ANCA) defines granulomatosis with polyangiitis — also a pulmonary-renal syndrome, but with necrotizing GRANULOMATOUS inflammation (sinusitis, cavitary lesions), positive c-ANCA serology, and pauci-immune (essentially negative) immunofluorescence rather than linear IgG. The linear pattern is the discriminator that names Goodpasture.",
        },
        {
          label: "C",
          text: "MPO-ANCA (perinuclear ANCA)",
          why: "p-ANCA belongs to microscopic polyangiitis and EGPA — pauci-immune crescentic GN with pulmonary capillaritis, positive p-ANCA, and again NO linear deposition. The negative ANCA testing and linear IF point away from the entire ANCA family.",
        },
        {
          label: "D",
          text: "Antinuclear antibody (ANA)",
          why: "ANA-negative lupus nephritis is rare, and immune-complex (lupus) nephritis deposits GRANULARLY ('full house') with hypocomplementemia — the opposite of this patient's negative ANA, normal complements, and linear IF.",
        },
        {
          label: "E",
          text: "Anti-phospholipase A2 receptor antibody",
          why: "Anti-PLA2R is the antibody of PRIMARY MEMBRANOUS NEPHROPATHY — a subepithelial immune-complex disease of nephrotic syndrome (protein-dominant, non-inflammatory), not a crescentic, hematuria-dominant pulmonary-renal syndrome. The presentation's hemoptysis and RBC casts are the wrong phenotype entirely.",
        },
      ],
      reasoning:
        "The vignette assembles the Goodpasture pattern: young man, hemoptysis (alveolar GBM) + rapidly progressive glomerulonephritis (dysmorphic RBCs, RBC casts, rising creatinine), serology-negative for ANA and ANCA with normal complements (excluding SLE and the ANCA vasculitides), and the pathognomonic LINEAR IgG deposition along the GBM — the immune-complex 'granular' pattern's mirror image. The directory's renal rows split exactly on this: anti-GBM (linear, pulmonary-renal) versus anti-PLA2R (membranous, nephrotic) versus the ANCA pair (pauci-immune vasculitis). Distractor B tests the closest mimic (GPA — also hemoptysis + nephritis, but c-ANCA-positive and granulomatous).",
    },
  },
  mnemonics: [
    {
      code: "\u201cThe SLE ladder: ANA knocks on the door, dsDNA and Sm walk in, histone names the drug.\u201d",
      meaning:
        "KYP's key for the lupus serology tiers: ANA is the nonspecific doorknock (screen — many diseases answer); anti-dsDNA and anti-Smith are the ones who walk in (SLE-specific, dsDNA tracking nephritis and activity); anticardiolipin/lupus anticoagulant/anti-β2 glycoprotein I bring the thrombosis overlay (antiphospholipid syndrome); and antihistone names the culprit drug (drug-induced lupus — procainamide, hydralazine).",
      memorizes: "ANA vs dsDNA/Sm vs antiphospholipid set vs antihistone",
      whenToUse: "Any lupus-serology interpretation question.",
      clinical: "A positive ANA alone diagnoses nothing; a negative ANA makes SLE unlikely.",
    },
    {
      code: "\u201cScleroderma splits by its target: the copying enzyme goes diffuse, the spindle anchor stays limited.\u201d",
      meaning:
        "KYP's key for the scleroderma pair: anti-Scl-70 (anti-DNA topoisomerase I — the copying enzyme) marks DIFFUSE scleroderma (widespread skin, early organ involvement, renal crisis); anticentromere (the mitotic spindle's anchor) marks LIMITED scleroderma — the CREST syndrome (Calcinosis, Raynaud, Esophageal dysmotility, Sclerodactyly, Telangiectasia), with distal skin and lung-dominant later disease.",
      memorizes: "Scl-70 = diffuse · centromere = limited/CREST",
      whenToUse: "Any scleroderma-subset or CREST question.",
      clinical: "The subset predicts the complications to screen (renal crisis and ILD in diffuse).",
    },
    {
      code: "\u201cPR3 is Cytoplasmic and makes Cavities; MPO is Perinuclear and MIMICS it poorly.\u201d",
      meaning:
        "KYP's key for the ANCA pair: PR3-ANCA gives CYTOPLASMIC (c-ANCA) staining and GRANULOMATOSIS with polyangiitis (GPA) — the sinus-and-cavities upper/lower/renal triad. MPO-ANCA gives PERINUCLEAR (p-ANCA) staining and the non-granulomatous mimics: Microscopic Polyangiitis and EGPA (Eosinophilic Granulomatosis with Polyangiitis), with UC and PSC as its non-vasculitic company.",
      memorizes: "c-ANCA/PR3 = GPA · p-ANCA/MPO = MPA + EGPA + UC/PSC",
      whenToUse: "Any ANCA-pattern or vasculitis-identification question.",
      clinical: "Both are pauci-immune on biopsy — the serologic pattern and the granulomas separate them.",
    },
  ],
  rapidReview: {
    s30: [
      "ACh receptor (postsynaptic) = myasthenia gravis · Ca2+ channel (presynaptic) = Lambert-Eaton",
      "ANA = nonspecific screen · anti-dsDNA, anti-Smith = SLE · antihistone = drug-induced lupus",
      "Anti-U1 RNP = MCTD · RF + anti-CCP (more specific) = RA",
      "Anti-Scl-70 = diffuse scleroderma · anticentromere = limited (CREST)",
      "Anti-Jo-1 (antisynthetase), SRP, Mi-2 = polymyositis/dermatomyositis",
    ],
    m3: [
      "Anticardiolipin, lupus anticoagulant, anti-β2 glycoprotein I = antiphospholipid syndrome",
      "Anti-Ro/SSA + anti-La/SSB = Sjögren (and neonatal lupus/heart block via transplacental Ro)",
      "c-ANCA (PR3) = GPA · p-ANCA (MPO) = MPA, EGPA, UC, PSC",
      "Antimitochondrial = 1° biliary cholangitis · anti-smooth muscle + LKM1 = autoimmune hepatitis",
      "IgA anti-endomysial, anti-tTG, deamidated gliadin peptide = celiac disease",
    ],
    m10: [
      "Anti-TSH receptor (stimulating) = Graves · anti-TPO + thyroglobulin = Hashimoto",
      "Anti-GAD + islet cell = T1DM · antiparietal cell + anti-intrinsic factor = pernicious anemia",
      "Anti-GBM = Goodpasture (LINEAR IF, pulmonary-renal) · anti-PLA2R = 1° membranous nephropathy",
      "Anti-desmoglein = pemphigus vulgaris (intraepidermal, Nikolsky+) · anti-hemidesmosome = bullous pemphigoid (subepidermal, tense)",
      "Myasthenia worsens with use; Lambert-Eaton improves with use (facilitation) and is paraneoplastic with SCLC",
    ],
  },
  recall: [
    {
      q: "Name the neuromuscular and thyroid autoantibody pairs with their diseases.",
      a: "Anti-postsynaptic ACh receptor — myasthenia gravis; anti-presynaptic voltage-gated Ca2+ channel — Lambert-Eaton myasthenic syndrome. Antithyroglobulin and antithyroid peroxidase (antimicrosomal) — Hashimoto thyroiditis; anti-TSH receptor — Graves disease.",
    },
    {
      q: "Which antibodies define SLE, drug-induced lupus, MCTD, RA, and Sjögren?",
      a: "SLE: anti-dsDNA, anti-Smith (with ANA as the nonspecific screen and anticardiolipin/lupus anticoagulant for the antiphospholipid overlap). Drug-induced lupus: antihistone. Mixed connective tissue disease: anti-U1 RNP. Rheumatoid arthritis: rheumatoid factor (IgM against IgG Fc) and anti-CCP (more specific). Sjögren syndrome: anti-Ro/SSA and anti-La/SSB.",
    },
    {
      q: "Which antibodies split scleroderma and the vasculitides?",
      a: "Scleroderma: anti-Scl-70 (anti-DNA topoisomerase I) — diffuse; anticentromere — limited (CREST syndrome). Vasculitis: PR3-ANCA/c-ANCA — granulomatosis with polyangiitis; MPO-ANCA/p-ANCA — microscopic polyangiitis, eosinophilic granulomatosis with polyangiitis, ulcerative colitis, and primary sclerosing cholangitis.",
    },
    {
      q: "Which antibodies mark the hepatic/GI autoimmune diseases?",
      a: "Antimitochondrial — primary biliary cholangitis. Anti-smooth muscle and anti-liver/kidney microsomal-1 — autoimmune hepatitis. IgA anti-endomysial, IgA anti-tissue transglutaminase, and IgA/IgG deamidated gliadin peptide — celiac disease.",
    },
    {
      q: "Which antibodies define the renal, dermatologic, and other classic associations?",
      a: "Renal: anti-phospholipase A2 receptor — primary membranous nephropathy; anti-glomerular basement membrane — Goodpasture syndrome. Skin: anti-hemidesmosome — bullous pemphigoid; anti-desmoglein (anti-desmosome) — pemphigus vulgaris. Endocrine/other: anti-glutamic acid decarboxylase and islet cell cytoplasmic antibodies — type 1 diabetes mellitus; antiparietal cell and anti-intrinsic factor — pernicious anemia; anti-β2 glycoprotein I — antiphospholipid syndrome; antisynthetase (anti-Jo-1), anti-SRP, anti-Mi-2 — polymyositis/dermatomyositis.",
    },
  ],
  related: [
    {
      title: "Hypersensitivity Reactions",
      topicId: "hypersensitivity-types",
      note: "Most of this table is type II (antibody-mediated cytotoxicity) and type III disease — the mechanism layer under the serology.",
    },
    {
      title: "Immunoglobulin Isotypes & Antigen Memory",
      topicId: "immunoglobulin-isotypes",
      note: "Why the celiac antibodies are IgA-restricted — mucosal compartment immunology (and IgA deficiency's false-negative trap).",
    },
    {
      title: "Complement Disorders",
      topicId: "complement-disorders",
      note: "The consumptive low-C3/C4 of lupus nephritis versus the normal complements of pauci-immune and anti-GBM disease.",
    },
    {
      title: "Effector T Cells: Cytotoxic, Regulatory & the Macrophage Interface",
      topicId: "cytotoxic-regulatory-t-cells",
      note: "The tolerance failures behind every antibody on this page — the Treg brake's clinical shadow.",
    },
  ],
  crossLinks: [
    {
      subject: "Rheumatology",
      connection: "The entire rheumatologic serology ladder — from ANA screening to subset-defining antibodies (Scl-70, centromere, Jo-1, the ANCA pair) — is the diagnostic spine of autoimmune disease.",
    },
    {
      subject: "Endocrinology",
      connection: "Thyroid disease splits by antibody function (stimulating anti-TSH receptor vs destructive anti-TPO), and type 1 diabetes and pernicious anemia are antibody-defined endocrinopathies.",
    },
    {
      subject: "Nephrology",
      connection: "Renal biopsy immunofluorescence is this table in tissue: linear IgG (anti-GBM), granular full-house (lupus), and pauci-immune (ANCA) name the crescentic GNs.",
    },
    {
      subject: "Neurology & Dermatology",
      connection: "The neuromuscular pair (ACh receptor vs Ca channel) and the blistering pair (desmoglein vs hemidesmosome) are the classic target-anatomy discriminations of their fields.",
    },
  ],
};
