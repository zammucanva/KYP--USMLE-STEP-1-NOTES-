import type { KypUsMLENote } from "../types";

// Microbiology — Clinical Bacteriology banner (M-batch 11).
// Source: First Aid 2026, Part 1 pdf 160-161 / book 138-139
// (the Mycobacteria species roster + TB symptoms + cord factor/sulfatides
//  virulence + the printed TB progression flowchart + PPD/IGRA rules +
//  the Langhans/Langerhans rule + Leprosy with its two forms. pdf 161 is a
//  SHARED page per the chapter inventory: M11 owns the leprosy subsection;
//  the Gram-negative lab algorithm tree on 161's lower half is M12's content)

export const mycobacteria: KypUsMLENote = {
  id: "mycobacteria",
  title: "Mycobacteria: Tuberculosis & Leprosy",
  subtitle:
    "The acid-fast rods organized by SPECTRUM. TB runs the printed progression: inhaled M tuberculosis seeds the mid/lower lobes (Ghon focus + hilar nodes = GHON COMPLEX → primary tuberculosis), then >90% heal by fibrosis and calcification (PPD ⊕, latent) until REACTIVATION strikes the immunocompromised (HIV, transplant recipients, TNF-α inhibitor use) — 2° tuberculosis with fibrocaseous cavitary lesions in the UPPER lobes (the apices; the bacteria are highly aerobic), caseating granulomas with central necrosis and Langhans giant cells — while <10% take the PROGRESSIVE PRIMARY road (AIDS, malnutrition): progressive lung disease or BACTEREMIA → MILIARY tuberculosis across meninges, vertebrae (Pott disease), joints and long bones, lymph nodes, lungs, liver, spleen, and adrenal gland. The virulence rail explains the granuloma: cord factor (serpentine cord in virulent strains) activates macrophages and induces TNF-α; sulfatides inhibit phagolysosomal fusion. The test rail: PPD ⊕ = current/past infection or BCG; PPD ⊝ in no infection AND in the immunocompromised (low CD4+ — a negative PPD does not exclude TB); IGRA has fewer BCG false positives. Leprosy (M leprae — cool temperatures, skin and superficial nerves, glove-and-stocking loss, cannot be grown in vitro, dx skin biopsy or tissue PCR, US reservoir armadillos) is the Th1/Th2 lesson: LEPROMATOUS (Th2, low cell-mediated immunity, high bacterial load, diffuse skin, leonine facies, communicable, can be lethal — clofazimine ADDED to dapsone + rifampin) vs TUBERCULOID (Th1, high cell-mediated immunity, low load, a few hypoesthetic hairless plaques — dapsone + rifampin). The roster: M tuberculosis and M avium–intracellulare (both often multidrug-resistant; the latter disseminated non-TB disease in AIDS), M scrofulaceum (cervical lymphadenitis in children), M marinum (aquarium handlers).",
  subject: "Microbiology",
  system: "Section II · High-Yield General Principles — Clinical Bacteriology",
  pilotCategory:
    "Clinical bacteriology — the acid-fast rods: the TB primary/healing/reactivation/miliary spectrum with Ghon complex and caseation; PPD/IGRA interpretation including the immunocompromised false-negative; cord factor and sulfatides; the Langhans-vs-Langerhans rule; the lepromatous-tuberculoid leprosy Th1/Th2 axis; and the NTM roster (avium-intracellulare, scrofulaceum, marinum)",
  difficulty: 2,
  readTime: 12,
  sourceRef:
    "First Aid 2026, Part 1 pp. 138–139 (Mycobacteria; Tuberculosis; Leprosy)",
  tags: [
    "mycobacteria",
    "acid-fast rods",
    "Mycobacterium tuberculosis",
    "tuberculosis",
    "Ghon focus",
    "Ghon complex",
    "hilar nodes",
    "primary tuberculosis",
    "reactivation tuberculosis",
    "secondary tuberculosis",
    "fibrocaseous cavitary lesion",
    "upper lobes",
    "caseating granulomas",
    "Langhans giant cell",
    "Langerhans cell",
    "miliary tuberculosis",
    "Pott disease",
    "bacteremia",
    "PPD",
    "purified protein derivative",
    "IGRA",
    "interferon-gamma release assay",
    "BCG vaccination",
    "cord factor",
    "serpentine cord",
    "sulfatides",
    "phagolysosomal fusion",
    "TNF-alpha",
    "night sweats",
    "hemoptysis",
    "M avium-intracellulare",
    "M scrofulaceum",
    "cervical lymphadenitis",
    "M marinum",
    "aquarium handlers",
    "Mycobacterium leprae",
    "leprosy",
    "Hansen disease",
    "leonine facies",
    "lepromatous leprosy",
    "tuberculoid leprosy",
    "Th1 Th2 axis",
    "glove and stocking",
    "armadillos",
    "dapsone",
    "rifampin",
    "clofazimine",
    "skin biopsy",
    "tissue PCR",
  ],
  core: {
    what: "THE ACID-FAST RODS (pink rods on stain; grow slowly in culture) AND THE TB SPECTRUM. PRIMARY INFECTION: inhaled M tuberculosis establishes the Ghon focus (usually mid/lower lobes); with the involved hilar nodes it forms the GHON COMPLEX → primary tuberculosis. THE >90% ROAD: healing by fibrosis and calcification (PPD ⊕) — latent infection — until REACTIVATION (risk highest in immunocompromised individuals: HIV, organ transplant recipients, TNF-α inhibitor use) drives 2° tuberculosis: the fibrocaseous cavitary lesion (usually upper lobes — reactivation has a predilection for the apices because the bacteria are highly aerobic) and localized destructive disease (cavity, caseation, scar); caseating granulomas with central necrosis and the Langhans giant cell (fused macrophages — NOT the Langerhans cell, a dermal APC) are characteristic of 2° TB. THE <10% ROAD: progressive primary tuberculosis (AIDS, malnutrition) — progressive lung disease, or BACTEREMIA → MILIARY TUBERCULOSIS seeding meninges, vertebrae (Pott disease), joints and long bones, lymph nodes, lungs, liver, spleen, and adrenal gland. SYMPTOMS: fever, night sweats, weight loss, cough (nonproductive or productive), hemoptysis. VIRULENCE: cord factor creates the serpentine cord appearance in virulent strains, activates macrophages (promoting granuloma formation), and induces TNF-α release; sulfatides (surface glycolipids) inhibit phagolysosomal fusion. SKIN TEST RULES: PPD ⊕ if current or past infection (or BCG vaccination); PPD ⊝ if no infection and in immunocompromised patients (especially low CD4+ counts); interferon-γ release assay (IGRA) has fewer false positives from BCG vaccination. LEPROSY (Hansen disease): M leprae is an acid-fast bacillus that likes cool temperatures (infects skin and superficial nerves — glove-and-stocking loss of sensation) and cannot be grown in vitro; diagnosed via skin biopsy or tissue PCR; reservoir in the United States: armadillos. Two forms (many cases fall temporarily between the extremes): LEPROMATOUS — diffuse over the skin with leonine (lionlike) facies, communicable (high bacterial load), low cell-mediated immunity with a largely Th2 response, can be lethal; TUBERCULOID — limited to a few hypoesthetic, hairless skin plaques, high cell-mediated immunity with a largely Th1 response and low bacterial load. Treatment: dapsone and rifampin for tuberculoid; clofazimine is added for lepromatous. THE NTM ROSTER: M tuberculosis (TB, often resistant to multiple drugs); M avium–intracellulare (disseminated, non-TB disease in AIDS; often resistant to multiple drugs); M scrofulaceum (cervical lymphadenitis in children); M marinum (skin infection in aquarium handlers).",
    why: "This block is the immune system's bacteriology final: every outcome on the spectrum is a cell-mediated immunity verdict. The >90% road is the competent Th1 host walling the organism into a calcified granuloma; reactivation is what happens when that wall's guards go down (HIV, transplant, TNF-α inhibitors — the drugs that block the very cytokine cord factor induces); and the <10% road is the never-competent host (AIDS, malnutrition) skipping latency straight to miliary spread. The leprosy spectrum makes the same point at the skin — Th1 tuberculoid (contained, paucibacillary) vs Th2 lepromatous (diffuse, multibacillary, lethal) — which is E31's IL-12/IFN-γ axis printed as a disease, and why the treatment rule tracks the immune pole (clofazimine ADDED for the lepromatous). The testing logic (PPD ⊝ in the immunocompromised; IGRA's BCG advantage) and the Langhans-vs-Langerhans rule are the exam's favorite discriminators, while the organ list of miliary TB (Pott disease in the vertebrae, adrenal involvement) recycles across every section of the exam.",
    keyIdea: "Read every TB stem through the spectrum: EXPOSURE + mid/lower-lobe focus + hilar nodes = Ghon complex (primary). CALCIFIED + PPD ⊕ + years later + apical cavitary disease in an immunocompromised host = reactivation 2° TB (fibrocaseous cavities, caseating granulomas with Langhans giant cells). AIDS/MALNUTRITION + immediate progression or multi-organ seeding = progressive primary/miliary TB (meninges, Pott disease in vertebrae, joints and long bones, nodes, lungs, liver, spleen, adrenals). A NEGATIVE PPD in a sick or immunocompromised patient excludes nothing (low CD4+ = anergy) — use IGRA when BCG muddies the PPD. Leprosy: cool-skin organism (glove-and-stocking, armadillos, no in vitro culture) — Th2/leonine/lethal/communicable = lepromatous (add clofazimine); Th1/plaques/paucibacillary = tuberculoid. NTM quick keys: AIDS disseminated = avium–intracellulare; cervical lymphadenitis in a child = scrofulaceum; fish tank = marinum.",
  },
  mechanisms: [
    {
      id: "tb-spectrum",
      title: "The TB spectrum: two roads out of the Ghon complex",
      context: "From the printed progression flowchart to the exam's staging questions",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Inhaled M tuberculosis seeds a Ghon focus (usually mid/lower lobes); with the involved hilar nodes it forms the Ghon complex → PRIMARY TUBERCULOSIS",
            sublabel: "Input — the entry event every TB stem describes.",
            variant: "input",
          },
          {
            id: "s1",
            label: "THE >90% ROAD: healing by fibrosis and calcification (PPD ⊕) — latent infection — until REACTIVATION (risk highest in immunocompromised: HIV, organ transplant recipients, TNF-α inhibitor use) → 2° TUBERCULOSIS: fibrocaseous cavitary lesion (usually upper lobes — the apices; the bacteria are highly aerobic) → localized destructive disease (cavity, caseation, scar)",
            sublabel: "Process — the competent host contains, then decontains: the latency clock and its immune gates.",
            variant: "process",
          },
          {
            id: "s2",
            label: "THE <10% ROAD: progressive primary tuberculosis (AIDS, malnutrition) — the host cannot wall it off: progressive lung disease, or BACTEREMIA → MILIARY TUBERCULOSIS seeding meninges, vertebrae (Pott disease), joints and long bones, lymph nodes, lungs, liver, spleen, and adrenal gland",
            sublabel: "Process — the never-competent host: no latent interval, direct progression or hematogenous spread.",
            variant: "process",
          },
          {
            id: "o1",
            label: "OUTPUT — the stage names the management: primary/latent (test and treat latency), reactivation 2° TB (caseating granulomas with Langhans giant cells; upper-lobe cavities), miliary (the multi-organ shotgun — TB meningitis, Pott disease, adrenal insufficiency) — with symptoms throughout: fever, night sweats, weight loss, cough, hemoptysis",
            sublabel: "Output — staging, histology, and the symptom set.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: ">90% heal → reactivate" },
          { from: "trigger", to: "s2", label: "<10% progress" },
          { from: "s1", to: "o1", label: "2° TB portrait" },
          { from: "s2", to: "o1", label: "miliary portrait" },
        ],
        caption:
          "The printed flowchart is the exam's TB syllabus in one image. Infection begins when inhaled M tuberculosis seeds the mid or lower lobes — the Ghon focus — and drags the hilar nodes in to form the Ghon complex: that is primary tuberculosis, and more than 90% of competent hosts then heal by fibrosis and calcification, leaving a positive PPD and a latent organism. Reactivation is the failure of containment: risk is highest exactly where cell-mediated immunity fails (HIV, organ transplant recipients, TNF-α inhibitor use — the drug class that blocks the cytokine cord factor induces), and the returning disease prefers the apices of the upper lobes because the bacteria are highly aerobic — the fibrocaseous cavitary lesion of 2° tuberculosis, with caseating granulomas, central necrosis, and Langhans giant cells (fused macrophages), progressing to localized destructive disease with cavity, caseation, and scar. The minority road skips latency: in AIDS and malnutrition the primary focus progresses directly (progressive primary tuberculosis) or spills into blood — bacteremia seeding miliary tuberculosis across the meninges, vertebrae (Pott disease), joints and long bones, lymph nodes, lungs, liver, spleen, and adrenal gland. Symptoms span the whole spectrum: fever, night sweats, weight loss, cough (nonproductive or productive), and hemoptysis.",
      },
    },
    {
      id: "cell-mediated-axis",
      title: "The cell-mediated axis: granuloma logic and the leprosy pole",
      context: "From virulence factors to the Th1/Th2 spectrum at the skin",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "The mycobacteria live and die by the macrophage: cord factor and sulfatides decide whether the phagosome becomes a tomb or a home",
            sublabel: "Input — the intracellular address book.",
            variant: "input",
          },
          {
            id: "s1",
            label: "CORD FACTOR (trehalose dimycolate): creates the serpentine cord appearance in virulent M tuberculosis strains; activates macrophages (promoting granuloma formation) and induces release of TNF-α — the cytokine that builds the caseating wall and the target of the TNF-α inhibitors that reactivate TB",
            sublabel: "Process — the granuloma builder.",
            variant: "process",
          },
          {
            id: "s2",
            label: "SULFATIDES (surface glycolipids): inhibit phagolysosomal fusion — the organism survives inside the macrophage, and slow growth in culture mirrors the intracellular pace",
            sublabel: "Process — the phagosome escape.",
            variant: "process",
          },
          {
            id: "s3",
            label: "THE LEPROSY POLE: M leprae (cool temperatures — skin and superficial nerves, glove-and-stocking loss; cannot be grown in vitro; dx skin biopsy or tissue PCR; US reservoir armadillos) — LEPROMATOUS (largely Th2, low cell-mediated immunity, high bacterial load, diffuse skin with leonine facies, communicable, can be lethal) vs TUBERCULOID (largely Th1, high cell-mediated immunity, low load, a few hypoesthetic hairless plaques)",
            sublabel: "Process — E31's IL-12/IFN-γ circuit printed as a skin disease.",
            variant: "process",
          },
          {
            id: "o1",
            label: "OUTPUT — the immune pole sets the therapy: dapsone + rifampin for tuberculoid; CLOFAZIMINE ADDED for lepromatous — and the PPD/IGRA rail reads the axis (PPD ⊝ in the immunocompromised [low CD4+]; IGRA with fewer BCG false positives)",
            sublabel: "Output — the Th1/Th2 axis as treatment stratification and test interpretation.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "granuloma builder" },
          { from: "s1", to: "s2", label: "phagosome escape" },
          { from: "s2", to: "s3", label: "the axis at the skin" },
          { from: "s3", to: "o1", label: "pole-based therapy" },
        ],
        caption:
          "The granuloma is the mycobacterial battlefield. Cord factor creates the serpentine cord appearance of virulent strains and works the macrophage twice — activating it (which promotes granuloma formation) and inducing TNF-α release — so the competent host builds the caseating wall that defines 2° TB histology; sulfatides, the surface glycolipids, counter by inhibiting phagolysosomal fusion, letting the organism persist intracellularly (and grow only slowly in culture). The same axis, tuned to its poles, is leprosy: M leprae prefers cool tissue (skin and superficial nerves — hence glove-and-stocking sensory loss), cannot be grown in vitro (diagnose by skin biopsy or tissue PCR), and rides armadillos in the United States. At the Th2 pole the host loses: lepromatous disease spreads diffusely over the skin with leonine facies, is communicable (high bacterial load), and can be lethal. At the Th1 pole the host contains: a few hypoesthetic, hairless plaques with a low bacterial load. The treatment rule follows the pole — dapsone and rifampin for tuberculoid, with clofazimine ADDED for lepromatous — and the test rail reads the same axis: a PPD turns negative with the cell-mediated immunity it depends on (low CD4+ anergy), while the interferon-γ release assay sidesteps BCG's false positives.",
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "tb-spectrum-map",
      title: "The TB spectrum map + the leprosy pole + the species roster",
      caption:
        "An original KYP redraw of the source's tuberculosis progression flowchart (Ghon complex → primary → the >90% healing/reactivation road with 2° TB and localized destructive disease, and the <10% progressive primary road with bacteremia → miliary seeding), with the virulence/test rail (cord factor, sulfatides, PPD/IGRA, the giant-cell rule), the leprosy Th1/Th2 spectrum, and the five-species roster.",
      notice:
        "The printed micrographs (acid-fast rods with arrows; Langhans giant cell histology; leonine facies; tuberculoid plaques) are raster — COPYRIGHTED, described-in-text only. FA's printed mnemonic (Daring rifles target cloaked leprechauns) is NOT reproduced — verification only, carried verbatim in the note's table block.",
    },
    {
      kind: "table",
      title: "The mycobacteria — verbatim",
      intro: "The source's entries (books 138-139), verbatim.",
      columns: ["Organism / Concept", "Signature · Diseases (verbatim)"],
      rows: [
        ["Mycobacteria (the genus rule)", "Acid-fast rods (pink rods, arrows in A [printed micrograph — acid-fast rods with red arrows; described-in-text only]). Grows slowly in culture. Mycobacterium tuberculosis (TB, often resistant to multiple drugs). M avium–intracellulare (causes disseminated, non-TB disease in AIDS; often resistant to multiple drugs). M scrofulaceum (cervical lymphadenitis in children). M marinum (skin infection in aquarium handlers)."],
        ["TB symptoms + virulence", "TB symptoms include fever, night sweats, weight loss, cough (nonproductive or productive), hemoptysis. Cord factor creates a serpentine cord appearance in virulent M tuberculosis strains; activates macrophages (promoting granuloma formation) and induces release of TNF-α. Sulfatides (surface glycolipids) inhibit phagolysosomal fusion."],
        ["The TB progression spectrum (the printed flowchart)", "M tuberculosis → Ghon focus (usually mid/lower lobes) + hilar nodes = Ghon complex → Primary tuberculosis. >90%: Healing by fibrosis, Calcification (PPD ⊕) → Reactivation → 2° tuberculosis: fibrocaseous cavitary lesion (usually upper lobes) → localized destructive disease (cavity, caseation, scar). <10%: Progressive primary tuberculosis (AIDS, malnutrition) → progressive lung disease; Bacteremia → Miliary tuberculosis: meninges, vertebrae (Pott disease), joints and long bones, lymph nodes, lungs, liver, spleen, adrenal gland."],
        ["PPD / IGRA rules", "PPD ⊕ if current/past infection (or BCG vaccination). PPD ⊝ if no infection and in immunocompromised patients (especially with low CD4+ cell count). Interferon-γ release assay (IGRA) has fewer false positives from BCG vaccination."],
        ["The histology rule", "Caseating granulomas with central necrosis and Langhans giant cell (single example in A [printed histology micrograph with blue arrows; described-in-text only]) are characteristic of 2° tuberculosis. Do not confuse Langhans giant cell (fused macrophages) with Langerhans cell (dermal APC)."],
        ["The reactivation rule", "TB reactivation risk highest in immunocompromised individuals (eg, HIV, organ transplant recipients, TNF-α inhibitor use). Reactivation has a predilection for the apices of the lung (due to the bacteria being highly aerobic)."],
        ["M leprae + the leprosy spectrum", "Also called Hansen disease. Caused by Mycobacterium leprae, an acid-fast bacillus that likes cool temperatures (infects skin and superficial nerves—glove and stocking loss of sensation) and cannot be grown in vitro. Diagnosed via skin biopsy or tissue PCR. Reservoir in United States: armadillos. Leprosy has 2 forms (many cases fall temporarily between two extremes): Lepromatous—presents diffusely over the skin, with leonine (lionlike) facies A [printed photograph — leonine facies; described-in-text only], and is communicable (high bacterial load); characterized by low cell-mediated immunity with a largely Th2 response. Lepromatous form can be lethal. Tuberculoid—limited to a few hypoesthetic, hairless skin plaques B [printed photograph — tuberculoid plaques; described-in-text only]; characterized by high cell-mediated immunity with a largely Th1 response and low bacterial load. Treatment: dapsone and rifampin for tuberculoid form; clofazimine is added for lepromatous form. Daring rifles target cloaked leprechauns (FA mnemonic, printed)."],
      ],
      caption:
        "Read the table with the spectrum map: every row is a station on the Ghon-to-miliary railroad or a reading of the cell-mediated axis. The printed flowchart's labels (Ghon complex, primary tuberculosis, the >90%/<10% split, reactivation, 2° tuberculosis, miliary tuberculosis, Pott disease) are redrawn in the visual; the photograph pointers are carried verbatim.",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "The protocols the spectrum implies",
      body: "THE STAGING PROTOCOL: name the stage before answering — Ghon complex (primary exposure), calcified latency (PPD ⊕, healed), reactivation 2° TB (apical cavitary disease in the immunocompromised), progressive primary (AIDS/malnutrition, no latent interval), miliary (the multi-organ seeding). THE IMMUNE GATE: reactivation risk tracks the cell-mediated axis — HIV, organ transplant recipients, and TNF-α inhibitor use are the exam's three triggers (the third is poetic: the drug blocks the cytokine cord factor induces). THE APICAL RULE: reactivation disease goes to the upper lobes because the bacteria are highly aerobic — the contrast with the primary Ghon focus (mid/lower lobes) is a favorite imaging pair. THE TESTING RULES: PPD ⊕ = current or past infection OR BCG vaccination; PPD ⊝ in no infection AND in the immunocompromised (low CD4+ — a negative test in a sick patient excludes nothing); IGRA has fewer BCG false positives. THE HISTOLOGY RULE: caseating granulomas with central necrosis and Langhans giant cells = 2° TB; Langhans (fused macrophages) is not Langerhans (the dermal APC). THE LEPROSY PROTOCOL: cool-skin organism — glove-and-stocking sensory loss, cannot be grown in vitro (skin biopsy or tissue PCR), armadillos in the US; Th2/leonine/communicable/lethal = lepromatous (dapsone + rifampin + CLOFAZIMINE); Th1/plaques/paucibacillary = tuberculoid (dapsone + rifampin). THE NTM KEYS: disseminated non-TB disease in AIDS = M avium–intracellulare (often multidrug-resistant, like M tuberculosis itself); cervical lymphadenitis in a child = M scrofulaceum; a fish tank on the history = M marinum.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 58-year-old man who started infliximab 4 months ago for rheumatoid arthritis presents with 3 weeks of night sweats, weight loss, and a productive cough; chest CT shows a cavitary lesion in the right apex.",
        discriminator: "TNF-α inhibitor + upper-lobe cavity",
        concept: "Reactivation 2° tuberculosis",
        answer:
          "TB reactivation risk is highest in immunocompromised individuals — HIV, organ transplant recipients, and TNF-α inhibitor use (the drug blocks the TNF-α that cord factor induces and the granuloma needs). Reactivation has a predilection for the apices of the lung because the bacteria are highly aerobic: the fibrocaseous cavitary lesion of 2° tuberculosis, with caseating granulomas, central necrosis, and Langhans giant cells. The prior primary infection was a mid/lower-lobe Ghon focus with hilar nodes (Ghon complex) that healed by fibrosis and calcification with PPD ⊕.",
      },
      {
        stem: "A 29-year-old with poorly controlled AIDS (CD4+ count 40/μL) presents with 2 weeks of fever and weight loss; imaging shows innumerable small nodules throughout both lungs, and MRI reveals vertebral body destruction with epidural extension.",
        discriminator: "Severe immunocompromise + multi-organ seeding",
        concept: "Progressive primary TB → bacteremia → miliary tuberculosis",
        answer:
          "In AIDS and malnutrition the primary infection cannot be walled off: progressive primary tuberculosis progresses directly to bacteremia and miliary tuberculosis — hematogenous seeding of meninges (TB meningitis), vertebrae (Pott disease), joints and long bones, lymph nodes, lungs, liver, spleen, and adrenal gland. Expect a falsely PPD ⊝ (low CD4+ anergy) — a negative test in the immunocompromised excludes nothing; IGRA or tissue diagnosis carries the workup.",
      },
      {
        stem: "A 41-year-old man emigrated from a leprosy-endemic region 5 years ago; he has slowly developed thickened, nodular facial skin with loss of eyebrows and hypoesthesia in a glove-and-stocking distribution; a skin biopsy shows numerous acid-fast bacilli; his wife asks whether she is at risk.",
        discriminator: "Diffuse skin + leonine facies + high bacterial load + communicable",
        concept: "Lepromatous leprosy — the Th2 pole",
        answer:
          "Lepromatous leprosy (Hansen disease): M leprae likes cool temperatures (skin and superficial nerves — glove-and-stocking loss of sensation), cannot be grown in vitro (diagnose via skin biopsy or tissue PCR; US reservoir: armadillos). The lepromatous form presents diffusely over the skin with leonine (lionlike) facies, is communicable (high bacterial load), carries low cell-mediated immunity with a largely Th2 response, and can be lethal. Treatment: dapsone + rifampin WITH clofazimine added (the tuberculoid form gets dapsone + rifampin alone).",
      },
    ],
    traps: [
      {
        a: "A negative PPD rules out tuberculosis",
        b: "PPD ⊝ occurs both with NO infection and in IMMUNOCOMPROMISED patients (especially low CD4+ counts) — anergy can mask active TB",
        whyConfused: "Negative test feels like negative disease.",
        keyDifference:
          "The PPD is a cell-mediated readout: it reports the host's Th1 competence, not just the organism's presence. In HIV with low CD4+ counts, miliary TB can coexist with a negative PPD. The IGRA (interferon-γ release assay) has fewer false positives from BCG vaccination, and tissue/biopsy diagnosis carries the immunocompromised workup.",
        clue: "Any PPD interpretation question in an immunocompromised patient.",
      },
      {
        a: "Primary TB causes the apical cavitary disease seen on this chest x-ray",
        b: "The PRIMARY focus is usually mid/lower lobe (the Ghon focus with hilar nodes = Ghon complex); the APICAL cavitary lesion is REACTIVATION 2° TB — the bacteria are highly aerobic",
        whyConfused: "Both are pulmonary TB; the lobe is the discriminator.",
        keyDifference:
          "The spectrum assigns lobes: primary infection seeds the mid/lower lobes (Ghon focus + hilar nodes = Ghon complex; >90% heal by fibrosis/calcification with PPD ⊕), while reactivation returns to the upper-lobe apices with the fibrocaseous cavitary lesion, caseating granulomas, and Langhans giant cells. Lobe + timing + immune status = the stage.",
        clue: "Any chest imaging + TB staging question.",
      },
      {
        a: "Langhans giant cells and Langerhans cells are the same thing",
        b: "Langhans giant cell = FUSED MACROPHAGES in the caseating granulomas of 2° TB; Langerhans cell = the DERMAL APC (the dendritic cell of the skin)",
        whyConfused: "Near-identical eponyms (and both appear in dermatology and pathology contexts).",
        keyDifference:
          "The source prints the rule itself: caseating granulomas with central necrosis and the Langhans giant cell characterize 2° tuberculosis; do not confuse Langhans giant cell (fused macrophages) with Langerhans cell (dermal antigen-presenting cell). One is histology of granulomatous disease; the other is the skin's immune sentinel.",
        clue: "Any histology-vs-cell-identity question.",
      },
    ],
    pivots: [
      {
        lookAlike: "Lepromatous vs tuberculoid leprosy (the two poles)",
        differentiator: "Th2 vs Th1; diffuse vs plaques; bacterial load; communicability",
        correctPath:
          "LEPROMATOUS: largely Th2, low cell-mediated immunity, HIGH bacterial load, diffuse skin involvement, leonine facies, communicable, can be lethal — dapsone + rifampin + CLOFAZIMINE. TUBERCULOID: largely Th1, high cell-mediated immunity, LOW bacterial load, a few hypoesthetic hairless plaques — dapsone + rifampin. Many cases fall temporarily between the two extremes.",
      },
      {
        lookAlike: "Reactivation 2° TB vs miliary TB (the two escape routes)",
        differentiator: "Local apical cavity vs hematogenous multi-organ spread",
        correctPath:
          "REACTIVATION 2° TB: the latent calcified focus returns in the immunocompromised (HIV, transplant, TNF-α inhibitors) — fibrocaseous cavitary lesion usually in the UPPER lobes (highly aerobic organisms), caseating granulomas with Langhans giant cells, localized destructive disease. MILIARY TB: bacteremia seeds meninges, vertebrae (Pott disease), joints and long bones, lymph nodes, lungs, liver, spleen, and adrenal gland — the shotgun pattern, arising from progressive primary disease (AIDS, malnutrition) or disseminated reactivation.",
      },
    ],
    miniCase: {
      vignette:
        "A 62-year-old woman with rheumatoid arthritis presents with 5 weeks of fevers, drenching night sweats, a 6-kg weight loss, and a productive cough with occasional blood-streaked sputum. She emigrated from the Philippines 30 years ago; her rheumatologist added adalimumab 5 months ago after methotrexate failed. She received BCG vaccination as an infant. Chest radiograph shows a 3-cm cavitary opacity in the right apex with surrounding fibrotic streaks; a calcified right hilar node is noted. Sputum stains show acid-fast rods; cultures are pending. A tuberculin skin test placed yesterday shows 0 mm of induration.",
      question:
        "Which mechanism best explains the apical location of this patient's cavitary lesion?",
      options: [
        {
          label: "A",
          text: "Reactivation of a latent Ghon-complex infection in a host with impaired cell-mediated immunity, with organism preference for the highly aerobic environment of the apices",
          correct: true,
          why: "Correct. This is reactivation 2° tuberculosis: remote exposure (the calcified hilar node — the healed Ghon complex), immune gate opened by TNF-α inhibitor therapy (adalimumab blocks the TNF-α that cord factor induces and the granuloma needs), and reactivation disease in the upper-lobe apex because the bacteria are highly aerobic — the fibrocaseous cavitary lesion with caseating granulomas and Langhans giant cells. The 0-mm PPD reflects anergy under TNF-α blockade (and does not exclude TB).",
        },
        {
          label: "B",
          text: "Primary progressive infection seeded from the gastrointestinal tract to the lower lobes via the portal circulation",
          why: "Primary TB seeds the mid/lower lobes by inhalation (the Ghon focus), not the GI tract — and primary progressive disease (the <10% road) arises immediately in AIDS/malnutrition without the decades-long latent interval this stem describes. The distractor swaps the road and the route.",
        },
        {
          label: "C",
          text: "Hematogenous spread seeding the lung apices as part of miliary tuberculosis",
          why: "Miliary TB is the bacteremic shotgun — innumerable small nodules across lungs, liver, spleen, meninges, vertebrae (Pott disease), and adrenals — not a single dominant apical cavity with fibrotic streaks. The distractor imports the <10% road's endpoint into the reactivation portrait.",
        },
        {
          label: "D",
          text: "Sulfatide-mediated inhibition of phagolysosomal fusion driving apical neutrophilic abscess formation",
          why: "Sulfatides inhibiting phagolysosomal fusion is real M tuberculosis virulence — but it produces intracellular survival and granulomatous (caseating) disease, not neutrophilic abscesses; and virulence factors do not explain the lobe. The apical preference is an oxygen story (highly aerobic organisms).",
        },
        {
          label: "E",
          text: "BCG-vaccination-derived organisms reactivating in the apical scar",
          why: "BCG is an attenuated live vaccine that can cause false-positive PPDs (the reason IGRA exists) but does not classically reactivate into apical cavitary 2° TB; this patient's calcified hilar node marks a true prior M tuberculosis infection. The distractor tests whether the BCG history overrides the imaging logic.",
        },
      ],
      reasoning:
        "The vignette assembles reactivation TB end to end: remote exposure in an endemic country with a calcified hilar node (the healed Ghon complex), the immune gate opened by adalimumab (TNF-α inhibitor use — one of the three reactivation risks with HIV and transplant), the constitutional-pulmonary symptom set (fever, night sweats, weight loss, productive cough with hemoptysis), the apical cavitary lesion with fibrotic streaks, and the anergic 0-mm PPD that excludes nothing. The question's mechanism — why the apex — is the aerobic preference of M tuberculosis, the same fact that puts the primary Ghon focus in the mid/lower lobes and reactivation in the upper lobes. Each distractor swaps in a piece of the wrong road (primary progressive, miliary), the wrong mechanism (sulfatides), or the wrong exposure story (BCG).",
    },
  },
  mnemonics: [
    {
      code: "\u201cThe railroad runs Ghon → calcify → reactivate, and the apex is the last stop because the organism wants oxygen.\u201d",
      meaning:
        "KYP's key for the TB spectrum: inhaled M tuberculosis seeds the mid/lower lobes (Ghon focus) plus hilar nodes (Ghon complex); >90% heal by fibrosis and calcification (PPD ⊕, latent); reactivation in the immunocompromised (HIV, transplant, TNF-α inhibitors) returns as the apical fibrocaseous cavitary lesion of 2° TB (the bacteria are highly aerobic); <10% in AIDS/malnutrition skip latency — progressive lung disease or bacteremia → miliary seeding (meninges, Pott disease, joints, nodes, liver, spleen, adrenals).",
      memorizes: "The TB progression spectrum and its two roads",
      whenToUse: "Any TB staging, imaging, or risk-factor question.",
      clinical: "Mid/lower focus = primary; apical cavity = reactivation; everything at once = miliary.",
    },
    {
      code: "\u201cThe wall is built of TNF-α (cord factor orders it) — and the drugs that block the mason wake the sleeping organism.\u201d",
      meaning:
        "KYP's key for the granuloma logic: cord factor (serpentine cord in virulent strains) activates macrophages and induces TNF-α release — the cytokine that builds the caseating wall — while sulfatides inhibit phagolysosomal fusion, letting the organism persist inside. The clinical corollary: TNF-α inhibitors (infliximab, adalimumab) are reactivation triggers because they remove the wall's mason; PPD ⊝ in low-CD4+ anergy is the same cell-mediated dependency read as a test.",
      memorizes: "The virulence-test pair (cord factor/sulfatides) and the reactivation risk set",
      whenToUse: "Any biologic-therapy risk, PPD interpretation, or granuloma question.",
      clinical: "Starting a TNF-α inhibitor? Screen for latent TB first (IGRA beats BCG-confounded PPD).",
    },
    {
      code: "\u201cThe leprosy seesaw: Th1 holds a few plaques; Th2 loses the whole face — and clofazimine joins the fight only when the face is lost.\u201d",
      meaning:
        "KYP's key for the leprosy pole: TUBERCULOID = largely Th1, high cell-mediated immunity, low bacterial load, a few hypoesthetic hairless plaques (dapsone + rifampin). LEPROMATOUS = largely Th2, low cell-mediated immunity, high bacterial load, diffuse skin with leonine facies, communicable, can be lethal (CLOFAZIMINE ADDED). The organism: cool temperatures (skin and superficial nerves — glove-and-stocking), no in vitro culture (skin biopsy/tissue PCR), armadillos in the US. Many cases fall temporarily between the poles.",
      memorizes: "The leprosy spectrum and its treatment stratification",
      whenToUse: "Any leprosy form-comparison or treatment question.",
      clinical: "Leonine facies = lepromatous = add clofazimine; a few numb plaques = tuberculoid.",
    },
  ],
  rapidReview: {
    s30: [
      "Ghon complex = Ghon focus (mid/lower lobes) + hilar nodes",
      ">90% of primary TB heals by fibrosis + calcification (PPD ⊕, latent)",
      "Reactivation: apices/upper lobes — the bacteria are highly aerobic",
      "Reactivation risk: HIV · organ transplant · TNF-α inhibitor use",
      "Miliary TB = bacteremia seeding meninges, vertebrae (Pott), joints, nodes, lungs, liver, spleen, adrenals",
    ],
    m3: [
      "Cord factor: serpentine cord; activates macrophages (granuloma) + induces TNF-α",
      "Sulfatides: surface glycolipids inhibiting phagolysosomal fusion",
      "PPD ⊝ in the immunocompromised (low CD4+) — anergy, not exclusion; IGRA has fewer BCG false positives",
      "Caseating granulomas + central necrosis + Langhans giant cell (fused macrophages) = 2° TB; ≠ Langerhans (dermal APC)",
      "M leprae: cool temps (skin + superficial nerves), glove-and-stocking, no in vitro culture, skin biopsy/tissue PCR, armadillos (US)",
    ],
    m10: [
      "Lepromatous: Th2, low CMI, high load, diffuse, leonine facies, communicable, lethal — dapsone + rifampin + CLOFAZIMINE",
      "Tuberculoid: Th1, high CMI, low load, hypoesthetic hairless plaques — dapsone + rifampin",
      "M avium–intracellulare: disseminated non-TB disease in AIDS, often multidrug-resistant",
      "M scrofulaceum: cervical lymphadenitis in children; M marinum: aquarium handlers",
      "TB symptoms: fever, night sweats, weight loss, cough, hemoptysis",
    ],
  },
  recall: [
    {
      q: "Walk the TB spectrum from inhalation to miliary disease.",
      a: "Inhaled M tuberculosis → Ghon focus (usually mid/lower lobes) + hilar nodes = GHON COMPLEX → primary tuberculosis. >90%: healing by fibrosis and calcification (PPD ⊕) → latent → REACTIVATION (HIV, transplant, TNF-α inhibitors) → 2° TB: fibrocaseous cavitary lesion (usually upper lobes — highly aerobic), caseating granulomas with central necrosis and Langhans giant cells → localized destructive disease (cavity, caseation, scar). <10%: progressive primary tuberculosis (AIDS, malnutrition) → progressive lung disease OR bacteremia → MILIARY TB (meninges, vertebrae [Pott disease], joints and long bones, lymph nodes, lungs, liver, spleen, adrenal gland).",
    },
    {
      q: "State the PPD and IGRA rules.",
      a: "PPD ⊕ if current or past infection (or BCG vaccination). PPD ⊝ if no infection AND in immunocompromised patients (especially low CD4+ counts — anergy; a negative PPD does not exclude TB). Interferon-γ release assay (IGRA) has fewer false positives from BCG vaccination.",
    },
    {
      q: "What do cord factor and sulfatides do, and which drug class reactivates TB by the same logic?",
      a: "Cord factor creates the serpentine cord appearance in virulent M tuberculosis strains, activates macrophages (promoting granuloma formation), and induces release of TNF-α. Sulfatides (surface glycolipids) inhibit phagolysosomal fusion — intracellular survival. TNF-α inhibitors (eg, infliximab, adalimumab) block the granuloma-maintaining cytokine and are a highest reactivation-risk class (with HIV and organ transplantation).",
    },
    {
      q: "Contrast the two leprosy forms on immunity, load, morphology, prognosis, and treatment.",
      a: "LEPROMATOUS: low cell-mediated immunity, largely Th2; HIGH bacterial load; diffuse skin involvement with leonine (lionlike) facies; communicable; can be lethal; dapsone + rifampin + CLOFAZIMINE. TUBERCULOID: high cell-mediated immunity, largely Th1; LOW bacterial load; a few hypoesthetic, hairless skin plaques; dapsone + rifampin. Many cases fall temporarily between the two extremes.",
    },
    {
      q: "Give the NTM one-liners.",
      a: "M tuberculosis: TB, often resistant to multiple drugs. M avium–intracellulare: disseminated, non-TB disease in AIDS; often resistant to multiple drugs. M scrofulaceum: cervical lymphadenitis in children. M marinum: skin infection in aquarium handlers. M leprae: leprosy (Hansen disease) — cool temperatures, cannot be grown in vitro, US reservoir armadillos.",
    },
  ],
  related: [
    {
      title: "Exotoxins vs Endotoxins",
      topicId: "exotoxins-endotoxins",
      note: "M8's TNF/IL-1 cascade is the downstream readout of cord factor's macrophage activation — the same cytokine wall the granuloma builds on and the TNF-α inhibitors unbuild.",
    },
    {
      title: "Immunosuppressants",
      topicId: "immunosuppressants",
      note: "The TNF-α inhibitor class that reactivates latent TB is E40's 4-level blockade map at the cytokine layer — the microbiology consequence of the pharmacology mechanism.",
    },
    {
      title: "Stains & Difficult-to-Stain Organisms",
      topicId: "stains-identification",
      note: "M2's auramine-rhodamine and acid-fast logic is why these rods stain pink/carbol-fuchsin and resist decolorization — the stain is the genus's name.",
    },
  ],
  crossLinks: [
    {
      subject: "Immunology (Cytokines)",
      connection: "The mycobacterial granuloma is E31's IL-12 / IFN-γ / Th1 circuit at war: cord factor's TNF-α builds the wall, sulfatides protect the organism inside it, TNF-α inhibitors remove the mason (reactivation), and the leprosy pole (Th1 vs Th2) is the axis itself printed as a skin disease.",
    },
    {
      subject: "Pharmacology (Anti-mycobacterials)",
      connection: "The treatment column: the leprosy stratification (dapsone + rifampin; clofazimine ADDED for lepromatous) and the multidrug-resistance flags on M tuberculosis and M avium–intracellulare that force combination regimens.",
    },
    {
      subject: "Orthopedics / Rheumatology (Pott Disease)",
      connection: "Vertebral destruction with epidural extension in miliary TB is Pott disease — the spine's entry on the miliary organ list and the exam's favorite skeletal TB presentation (joints and long bones complete the set).",
    },
    {
      subject: "Endocrinology (Adrenal)",
      connection: "The adrenal gland on the miliary list explains TB's classic link to primary adrenal insufficiency — the infected, calcified, destroyed cortex behind the exam's adrenal-failure-attribution questions.",
    },
  ],
};
