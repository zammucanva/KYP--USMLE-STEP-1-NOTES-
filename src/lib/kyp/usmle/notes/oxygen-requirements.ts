import type { KypUsMLENote } from "../types";

// Microbiology — Basic Bacteriology banner (M-batch 4).
// Source: First Aid 2026, Part 1 pdf 147 / book 125
// (Anaerobes / Facultative anaerobes / Intracellular bacteria [obligate +
//  facultative] / Encapsulated bacteria / Urease-positive organisms —
//  the trait directory; TABLE NOTE, no registry visual by design)

export const oxygenRequirements: KypUsMLENote = {
  id: "oxygen-requirements",
  title: "Anaerobes, Aerobes & Oxygen Tolerance",
  subtitle:
    "The trait directory. ANAEROBES (Clostridioides, Clostridium, Bacteroides, Fusobacterium, Actinomyces israelii) lack catalase and/or superoxide dismutase and are thus susceptible to oxidative damage — generally foul smelling (short-chain fatty acids), difficult to culture, and produce gas in tissue (CO2 and H2); they are normal GI microbiota, typically pathogenic elsewhere (eg, aspiration pneumonia), and aminoglycosides are ineffective against them because these antibiotics require O2 to enter the bacterial cell. FACULTATIVE ANAEROBES may use O2 as a terminal electron acceptor to generate ATP but can also use fermentation and other O2-independent pathways (streptococci, staphylococci, enteric gram ⊝ bacteria). OBLIGATE INTRACELLULAR (Rickettsia, Chlamydia, Coxiella) rely on host ATP. FACULTATIVE INTRACELLULAR (Salmonella, Neisseria, Brucella, Mycobacterium, Listeria, Francisella, Legionella, Yersinia pestis) can live in or out of cells. ENCAPSULATED BACTERIA (Pseudomonas aeruginosa, Streptococcus pneumoniae, Haemophilus influenzae type b, Neisseria meningitidis, Escherichia coli, Salmonella, Klebsiella pneumoniae, group B Strep) carry capsules as an antiphagocytic virulence factor — opsonized and cleared by the spleen, so asplenics have ↓ opsonizing ability and ↑ risk of severe infections (vaccines against N meningitidis, S pneumoniae, H influenzae); capsular polysaccharide ± protein conjugate serves as vaccine antigen (a polysaccharide antigen alone cannot be presented to T cells — conjugation to a carrier protein enhances immunogenicity). UREASE-POSITIVE ORGANISMS (Proteus, Cryptococcus, H pylori, Ureaplasma, Nocardia, Klebsiella, S epidermidis, S saprophyticus) hydrolyze urea to release ammonia and CO2 → ↑ pH — predisposing to struvite (magnesium ammonium phosphate) stones, particularly Proteus.",
  subject: "Microbiology",
  system: "Section II · High-Yield General Principles — Basic Bacteriology",
  pilotCategory:
    "Basic bacteriology — oxygen tolerance and the trait directory: anaerobes (catalase/SOD lack, aminoglycoside-ineffective), facultative anaerobes, obligate vs facultative intracellular, encapsulated bacteria (opsonization, asplenia, conjugate vaccines), urease-positive organisms (struvite stones)",
  difficulty: 1,
  readTime: 8,
  sourceRef: "First Aid 2026, Part 1 pp. 125–125 (Anaerobes, Facultative anaerobes, Intracellular bacteria, Encapsulated bacteria, Urease-positive organisms)",
  tags: [
    "anaerobes",
    "oxygen tolerance",
    "catalase",
    "superoxide dismutase",
    "oxidative damage",
    "Clostridioides",
    "Clostridium",
    "Bacteroides",
    "Fusobacterium",
    "Actinomyces israelii",
    "short-chain fatty acids",
    "foul smelling",
    "gas in tissue",
    "aspiration pneumonia",
    "aminoglycosides",
    "require O2 to enter",
    "facultative anaerobes",
    "terminal electron acceptor",
    "fermentation",
    "streptococci",
    "staphylococci",
    "enteric gram-negative bacteria",
    "obligate intracellular",
    "Rickettsia",
    "Chlamydia",
    "Coxiella",
    "host ATP",
    "facultative intracellular",
    "Salmonella",
    "Neisseria",
    "Brucella",
    "Mycobacterium",
    "Listeria",
    "Francisella",
    "Legionella",
    "Yersinia pestis",
    "encapsulated bacteria",
    "Pseudomonas aeruginosa",
    "Streptococcus pneumoniae",
    "Haemophilus influenzae type b",
    "Klebsiella pneumoniae",
    "group B Strep",
    "antiphagocytic virulence factor",
    "opsonization",
    "spleen",
    "asplenia",
    "conjugate vaccine",
    "carrier protein",
    "polysaccharide antigen",
    "urease-positive organisms",
    "Proteus",
    "Cryptococcus",
    "H pylori",
    "Ureaplasma",
    "Nocardia",
    "S epidermidis",
    "S saprophyticus",
    "struvite stones",
    "magnesium ammonium phosphate",
    "ammonia",
    "CO2",
    "pH",
  ],
  core: {
    what: "ANAEROBES: examples include Clostridioides, Clostridium, Bacteroides, Fusobacterium, and Actinomyces israelii; they lack catalase and/or superoxide dismutase and are thus susceptible to oxidative damage; generally foul smelling (short-chain fatty acids), difficult to culture, and produce gas in tissue (CO2 and H2); normal microbiota in the GI tract, typically pathogenic elsewhere (eg, aspiration pneumonia); aminoglycosides are ineffective against anaerobes because these antibiotics require O2 to enter into the bacterial cell. FACULTATIVE ANAEROBES: may use O2 as a terminal electron acceptor to generate ATP, but can also use fermentation and other O2-independent pathways — streptococci, staphylococci, and enteric gram ⊝ bacteria. OBLIGATE INTRACELLULAR: Rickettsia, Chlamydia, Coxiella — rely on host ATP. FACULTATIVE INTRACELLULAR: Salmonella, Neisseria, Brucella, Mycobacterium, Listeria, Francisella, Legionella, Yersinia pestis. ENCAPSULATED BACTERIA: Pseudomonas aeruginosa, Streptococcus pneumoniae, Haemophilus influenzae type b, Neisseria meningitidis, Escherichia coli, Salmonella, Klebsiella pneumoniae, and group B Strep — capsules serve as an antiphagocytic virulence factor; opsonized and cleared by the spleen; asplenics have ↓ opsonizing ability and ↑ risk of severe infections (need vaccines against N meningitidis, S pneumoniae, H influenzae); capsular polysaccharide +/– protein conjugate can serve as an antigen in vaccines — a polysaccharide antigen alone cannot be presented to T cells; immunogenicity is enhanced by conjugating capsule antigens to a carrier protein. UREASE-POSITIVE ORGANISMS: Proteus, Cryptococcus, H pylori, Ureaplasma, Nocardia, Klebsiella, S epidermidis, S saprophyticus — urease hydrolyzes urea to release ammonia and CO2 → ↑ pH; predisposes to struvite (magnesium ammonium phosphate) stones, particularly Proteus.",
    why: "This page assigns every major organism its survival strategy — and each entry is a mechanism, not a roster. The anaerobe row is an enzymology statement: no catalase and/or no superoxide dismutase means oxygen's reactive byproducts go unneutralized, so the organism dies in air — the same missing enzymes explain the three clinical signatures (foul smell from short-chain fatty acids, gas in tissue from CO2/H2, and the aminoglycoside failure: the drug physically needs O2-dependent transport to enter). The intracellular split is an energy statement: obligate (Rickettsia, Chlamydia, Coxiella) have given up making their own ATP entirely, while facultative intracellular organisms keep both addresses. The encapsulated row is an immunity statement: the capsule defeats phagocytosis (M1's coat), the spleen clears them by opsonization — so asplenics lose the clearance organ and need the three conjugate vaccines (whose design principle is printed here: polysaccharide alone cannot be presented to T cells, so conjugate to a carrier protein). The urease row is a chemistry statement: ammonia raises pH and crystallizes struvite stones.",
    keyIdea: "Read each row as a survival strategy with its clinical corollaries. OXYGEN HANDLING: anaerobes lack catalase and/or SOD (oxidative damage in air) — foul smelling, gas-forming, difficult to culture, and aminoglycoside-resistant by transport (need O2 to enter); facultative anaerobes keep both ATP routes (terminal electron acceptor OR fermentation) — the streptococci, staphylococci, and enteric gram ⊝. ADDRESS: obligate intracellular (Rickettsia, Chlamydia, Coxiella — host ATP) vs facultative intracellular (Salmonella, Neisseria, Brucella, Mycobacterium, Listeria, Francisella, Legionella, Yersinia pestis — both addresses). SURFACE: the encapsulated list (Pseudomonas aeruginosa, S pneumoniae, H influenzae type b, N meningitidis, E coli, Salmonella, Klebsiella pneumoniae, group B Strep) — antiphagocytic capsules; opsonized and cleared by the spleen (asplenia → severe infections; vaccinate against meningococcus, pneumococcus, H influenzae; conjugate the polysaccharide to a carrier protein because polysaccharide alone cannot be presented to T cells). CHEMISTRY: urease-positive organisms (Proteus, Cryptococcus, H pylori, Ureaplasma, Nocardia, Klebsiella, S epidermidis, S saprophyticus) — ammonia + CO2, ↑ pH, struvite stones (particularly Proteus).",
  },
  mechanisms: [
    {
      id: "oxygen-tolerance-spectrum",
      title: "The oxygen-handling machinery defines the class — with three clinical corollaries",
      context: "From the trait directory to the enzymology",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Every organism must handle oxygen's reactive byproducts — or avoid oxygen entirely",
            sublabel: "Input — the selection pressure: reactive oxygen species damage DNA, proteins, and membranes.",
            variant: "input",
          },
          {
            id: "s1",
            label: "THE MACHINERY: catalase decomposes peroxide; superoxide dismutase dismutates superoxide. ANAEROBES lack catalase and/or SOD — susceptible to oxidative damage in air",
            sublabel: "Process — the enzymology of the first row: no enzymes, no aerobic life.",
            variant: "process",
          },
          {
            id: "s2",
            label: "THE COROLLARIES: ① metabolism without O2 → short-chain fatty acids (foul smell) and gas in tissue (CO2, H2); ② difficult to culture (needs anaerobic methods); ③ aminoglycosides ineffective — these antibiotics require O2 to enter into the bacterial cell",
            sublabel: "Process — three exam signatures from one missing enzyme set.",
            variant: "process",
          },
          {
            id: "s3",
            label: "THE OTHER STRATEGIES: facultative anaerobes keep both ATP routes (O2 terminal electron acceptor or fermentation) — streptococci, staphylococci, enteric gram ⊝; obligate intracellular rely on host ATP (Rickettsia, Chlamydia, Coxiella); facultative intracellular keep both addresses (Salmonella, Neisseria, Brucella, Mycobacterium, Listeria, Francisella, Legionella, Yersinia pestis)",
            sublabel: "Process — the rest of the directory: energy route (facultative) and address (intracellular).",
            variant: "process",
          },
          {
            id: "o1",
            label: "OUTPUT — the trait readouts that organize the rest of the chapter: foul-smelling gas-forming abscesses (anaerobes), aspiration pneumonia in a GI-commensal gone wrong, aminoglycoside failure in anaerobic sites, opsonization-dependent clearance of the encapsulated (asplenia risk + conjugate-vaccine design), and struvite stones from urease (↑ pH)",
            sublabel: "Output — every row of this table returns as a clinical stem in the organism sections.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "ROS pressure" },
          { from: "s1", to: "s2", label: "missing enzymes" },
          { from: "s2", to: "s3", label: "strategies" },
          { from: "s3", to: "o1", label: "clinical readouts" },
        ],
        caption:
          "The first row is an enzymology rule: anaerobes (Clostridioides, Clostridium, Bacteroides, Fusobacterium, Actinomyces israelii) lack catalase and/or superoxide dismutase, so oxygen's reactive byproducts go unneutralized and the cells suffer oxidative damage in air. Three clinical signatures follow from that one deficit. Metabolism shifts to short-chain fatty acids (the foul smell) and gas in tissue (CO2 and H2); growth needs anaerobic culture methods (difficult to culture); and aminoglycosides fail because their entry into the bacterial cell is itself O2-dependent — the printed corollary that turns a microbiology row into a pharmacology answer. The facultative anaerobes keep both ATP routes (O2 as terminal electron acceptor, or fermentation and other O2-independent pathways) — the streptococci, staphylococci, and enteric gram ⊝ bacteria. The intracellular pair splits by ATP dependence: obligate (Rickettsia, Chlamydia, Coxiella — host ATP) versus facultative (Salmonella, Neisseria, Brucella, Mycobacterium, Listeria, Francisella, Legionella, Yersinia pestis). The encapsulated row is the immunity bridge: capsules are antiphagocytic, clearance is splenic opsonization — asplenics lose it (↓ opsonizing ability, ↑ severe infections), and the vaccine design principle is printed with the row: a polysaccharide antigen alone cannot be presented to T cells, so capsule antigens are conjugated to carrier proteins (the immunogenicity fix). The urease row closes with chemistry: urea hydrolyzed to ammonia and CO2 raises pH and predisposes to struvite stones — particularly Proteus.",
      },
    },
  ],
  blocks: [
    {
      kind: "table",
      title: "The trait directory — verbatim",
      intro: "The source's table (category rows with their descriptions, examples, and printed mnemonics), verbatim.",
      columns: ["Category", "Description · Examples · Notes (verbatim)"],
      rows: [
        ["Anaerobes", "Examples include Clostridioides, Clostridium, Bacteroides, Fusobacterium, and Actinomyces israelii. They lack catalase and/or superoxide dismutase and are thus susceptible to oxidative damage. Generally foul smelling (short-chain fatty acids), are difficult to culture, and produce gas in tissue (CO2 and H2). Anaerobes are normal microbiota in GI tract, typically pathogenic elsewhere (eg, causes aspiration pneumonia). Aminoglycosides are ineffective against anaerobes because these antibiotics require O2 to enter into bacterial cell."],
        ["Facultative anaerobes", "May use O2 as a terminal electron acceptor to generate ATP, but can also use fermentation and other O2-independent pathways. Streptococci, staphylococci, and enteric gram ⊝ bacteria."],
        ["Intracellular bacteria — Obligate intracellular", "Rickettsia, Chlamydia, Coxiella. Rely on host ATP."],
        ["Intracellular bacteria — Facultative intracellular", "Salmonella, Neisseria, Brucella, Mycobacterium, Listeria, Francisella, Legionella, Yersinia pestis."],
        ["Encapsulated bacteria", "Examples are Pseudomonas aeruginosa, Streptococcus pneumoniae, Haemophilus influenzae type b, Neisseria meningitidis, Escherichia coli, Salmonella, Klebsiella pneumoniae, and group B Strep. Their capsules serve as an antiphagocytic virulence factor. Capsular polysaccharide +/– protein conjugate can serve as an antigen in vaccines. A polysaccharide antigen alone cannot be presented to T cells; immunogenicity can be enhanced by conjugating capsule antigens to a carrier protein. Are opsonized, and then cleared by spleen. Asplenics (No Spleen Here) have ↓ opsonizing ability and thus ↑ risk for severe infections; need vaccines to protect against: N meningitidis, S pneumoniae, H influenzae."],
        ["Urease-positive organisms", "Proteus, Cryptococcus, H pylori, Ureaplasma, Nocardia, Klebsiella, S epidermidis, S saprophyticus. Urease hydrolyzes urea to release ammonia and CO2 → ↑ pH. Predisposes to struvite (magnesium ammonium phosphate) stones, particularly Proteus."],
      ],
      caption:
        "Read each row as one survival strategy with its clinical corollary: missing catalase/SOD (anaerobes — oxidative damage, foul smell, gas, aminoglycoside failure); dual ATP routes (facultative anaerobes); host ATP (obligate intracellular) vs both addresses (facultative intracellular); the antiphagocytic capsule with splenic opsonization (encapsulated — asplenia risk and the conjugate-vaccine principle); and urease chemistry (↑ pH, struvite stones — particularly Proteus). The printed FA mnemonics are carried verbatim as the source's table text (E20+ precedent); KYP originals replace them in the mnemonics field.",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "The three corollaries the exam keeps asking",
      body: "AMINOGLYCOSIDES AND ANAEROBES: the printed rule — aminoglycosides are ineffective against anaerobes because these antibiotics require O2 to enter into the bacterial cell. Every 'which antibiotic fails in an anaerobic abscess' question is this line; every anaerobic-site therapy question avoids aminoglycosides. THE ASPLENIA SET: the encapsulated organisms are opsonized and cleared by the spleen — asplenics have ↓ opsonizing ability and ↑ risk of severe infections, and need the three vaccines (N meningitidis, S pneumoniae, H influenzae). The same row prints the vaccine-design principle: a polysaccharide antigen alone cannot be presented to T cells, so capsule antigens are conjugated to carrier proteins — the reason the pediatric vaccines are conjugates. THE STRUVITE SET: urease-positive organisms raise urinary pH (ammonia + CO2), and the magnesium ammonium phosphate stones that follow are the struvite stones — particularly Proteus (the name most often paired with the stone on the exam).",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 58-year-old alcoholic man aspirates after a seizure; a week later he has a foul-smelling sputum, a lung infiltrate with a gas-fluid level on imaging, and the laboratory reports the organism grew only under anaerobic conditions.",
        discriminator: "Aspiration + foul smell + gas in tissue + anaerobic culture",
        concept: "Anaerobes — normal GI microbiota, pathogenic elsewhere",
        answer:
          "Anaerobes are normal microbiota in the GI tract, typically pathogenic elsewhere — aspiration pneumonia is the printed example. The signatures: foul smell (short-chain fatty acids), gas in tissue (CO2 and H2), difficult to culture (anaerobic methods), and the missing catalase and/or superoxide dismutase that makes them susceptible to oxidative damage in air. The organisms: Clostridioides, Clostridium, Bacteroides, Fusobacterium, Actinomyces israelii.",
      },
      {
        stem: "A patient with a dental abscess and a deep neck-space infection is started on gentamicin; over 48 hours the infection progresses and the anaerobic culture eventually grows Bacteroides.",
        discriminator: "Aminoglycoside failure in an anaerobic infection",
        concept: "Aminoglycosides require O2 to enter the bacterial cell",
        answer:
          "The printed corollary: aminoglycosides are ineffective against anaerobes because these antibiotics require O2 to enter into the bacterial cell — an anaerobic abscess is both an anaerobic organism and an anaerobic site, so the aminoglycoside never enters. The therapy answer is an anti-anaerobic agent (extension: metronidazole or a β-lactam/β-lactamase inhibitor combination — the antimicrobials chapter), never an aminoglycoside alone.",
      },
      {
        stem: "A 4-year-old who underwent splenectomy for hereditary spherocytosis develops fulminant sepsis with gram ⊝ diplococci; the pediatrician reviews which vaccines she should have received.",
        discriminator: "Asplenia + fulminant sepsis in an encapsulated organism",
        concept: "Encapsulated bacteria — opsonized and cleared by the spleen",
        answer:
          "Encapsulated organisms are opsonized and then cleared by the spleen; asplenics have ↓ opsonizing ability and ↑ risk of severe infections. The three printed vaccine targets: N meningitidis, S pneumoniae, H influenzae — and the conjugate principle printed with them: a polysaccharide antigen alone cannot be presented to T cells, so immunogenicity is enhanced by conjugating capsule antigens to a carrier protein (the design of the pediatric conjugate vaccines).",
      },
    ],
    traps: [
      {
        a: "Aminoglycosides kill anaerobes if the dose is high enough",
        b: "Aminoglycosides are ineffective against anaerobes because these antibiotics require O2 to enter into the bacterial cell",
        whyConfused: "Dose-response intuition suggests potency solves everything.",
        keyDifference:
          "The failure is a transport problem, not a potency problem: aminoglycoside entry into the bacterial cell is O2-dependent, so in an anaerobic organism (and an anaerobic site) the drug never reaches its ribosomal target. No dose overcomes a missing transport mechanism — the printed rule is absolute.",
        clue: "Any aminoglycoside-plus-anaerobe question (abscess, Bacteroides, Clostridium).",
      },
      {
        a: "Obligate intracellular organisms make their own ATP but prefer host cells",
        b: "Obligate intracellular organisms (Rickettsia, Chlamydia, Coxiella) rely on host ATP entirely",
        whyConfused: "Both 'intracellular' labels sound like a lifestyle preference.",
        keyDifference:
          "OBLIGATE intracellular = host ATP (they cannot generate their own — Rickettsia, Chlamydia, Coxiella). FACULTATIVE intracellular = both addresses work (Salmonella, Neisseria, Brucella, Mycobacterium, Listeria, Francisella, Legionella, Yersinia pestis). The energy question ('does it need the host's ATP?') is the divider; the address question ('can it also live outside?') follows from it.",
        clue: "Any intracellular-organism classification question.",
      },
      {
        a: "Anaerobes are primarily environmental organisms that occasionally infect humans",
        b: "Anaerobes are normal microbiota in the GI tract, typically pathogenic elsewhere (eg, aspiration pneumonia)",
        whyConfused: "The word 'anaerobe' evokes clostridia in soil.",
        keyDifference:
          "The clinical anaerobes of this page are the body's own GI microbiota displaced to wrong sites: aspiration pneumonia, dental and neck abscesses, intra-abdominal infection after perforation. The soil story belongs to the Clostridium entries in the clinical bacteriology chapter; the printed row says 'normal microbiota in GI tract, typically pathogenic elsewhere.'",
        clue: "Any aspiration/abscess question asking where the anaerobe came from.",
      },
    ],
    pivots: [
      {
        lookAlike: "Obligate vs facultative intracellular (the two 'inside cells' classes)",
        differentiator: "Host ATP vs both addresses",
        correctPath:
          "OBLIGATE INTRACELLULAR: Rickettsia, Chlamydia, Coxiella — rely on host ATP; they cannot be cultured on cell-free media (M3's counterpart: they need cells or embryonated eggs — extension). FACULTATIVE INTRACELLULAR: Salmonella, Neisseria, Brucella, Mycobacterium, Listeria, Francisella, Legionella, Yersinia pestis — they survive inside cells but also grow outside them; the intracellular survival is a virulence strategy (granuloma logic for the mycobacteria — extension), not an ATP dependence.",
      },
      {
        lookAlike: "Anaerobe vs facultative anaerobe (the two O2 classes on this page)",
        differentiator: "Missing enzymes vs dual ATP routes",
        correctPath:
          "ANAEROBE: lacks catalase and/or superoxide dismutase — susceptible to oxidative damage in air; foul smelling, gas-forming, difficult to culture; aminoglycosides ineffective. FACULTATIVE ANAEROBE: may use O2 as a terminal electron acceptor to generate ATP but can also use fermentation and other O2-independent pathways — streptococci, staphylococci, and the enteric gram ⊝ bacteria. One class cannot handle oxygen at all; the other switches routes at will.",
      },
    ],
    miniCase: {
      vignette:
        "A 62-year-old man with poor dentition and alcohol use disorder presents after a witnessed seizure. Over the following week he develops fever, a productive cough with putrid sputum, and right-lower-lobe dullness. Chest CT shows a 6-cm cavity with an air-fluid level. Sputum gram stain shows mixed flora; the specimen sent for culture grows organisms only in the anaerobic chamber after five days. The team starts empiric gentamicin for gram-negative coverage; two days later the patient's fever curve is unchanged and the cavity is slightly larger.",
      question:
        "Which mechanism best explains the failure of gentamicin in this infection?",
      options: [
        {
          label: "A",
          text: "Aminoglycosides require O2 to enter into the bacterial cell",
          correct: true,
          why: "Correct. The printed rule: aminoglycosides are ineffective against anaerobes because these antibiotics require O2 to enter into the bacterial cell. This is an anaerobic infection in an anaerobic site (aspiration pneumonia with cavity formation — the printed example of GI microbiota gone wrong: foul smell from short-chain fatty acids, gas in the air-fluid level from CO2 and H2, growth only in the anaerobic chamber). Gentamicin cannot enter; the therapy must change class.",
        },
        {
          label: "B",
          text: "The organisms produce β-lactamase in the periplasm, hydrolyzing the drug",
          why: "β-lactamase is a real resistance mechanism (M1's periplasm lobby) — but the drug here is an aminoglycoside, which no β-lactamase hydrolyzes; β-lactamases act on β-lactams. The distractor swaps the drug class the enzyme targets.",
        },
        {
          label: "C",
          text: "The organisms lack catalase and superoxide dismutase, so they survive gentamicin",
          why: "The enzyme lack is REAL — anaerobes lack catalase and/or superoxide dismutase — but it explains the organisms' susceptibility to oxidative damage in air (why they need the anaerobic chamber), not resistance to an aminoglycoside. The mechanism of the drug failure is the O2-dependent entry, printed separately.",
        },
        {
          label: "D",
          text: "The organisms are obligate intracellular and rely on host ATP, sequestered from the drug",
          why: "Obligate intracellular life (Rickettsia, Chlamydia, Coxiella) is a real strategy — but the organisms here grew in anaerobic culture (cell-free media), which obligate intracellular organisms cannot do; and the flora is mixed GI microbiota. The distractor tests the intracellular row against the anaerobe row.",
        },
        {
          label: "E",
          text: "The capsule prevents aminoglycoside penetration into the organism",
          why: "Capsules are real antiphagocytic virulence factors (the encapsulated row) — but capsules defeat phagocytes and opsonization, not aminoglycoside entry; and the anaerobes of this infection (Bacteroides, Fusobacterium — mixed flora) are not the capsule-list organisms. The distractor tests whether the antiphagocytic coat is being confused with a drug-permeability barrier.",
        },
      ],
      reasoning:
        "The vignette assembles the classic anaerobic aspiration pneumonia: alcohol use disorder, seizure with aspiration, putrid sputum, cavitary air-fluid level, growth only in the anaerobic chamber. The pharmacology question is the printed corollary: aminoglycosides require O2 to enter into the bacterial cell, so they fail against anaerobes — in an anaerobic organism at an anaerobic site. Each distractor pairs a real mechanism (β-lactamase; catalase/SOD lack; host-ATP dependence; capsule) with the wrong drug or the wrong row — testing whether the aminoglycoside rule is attached to its own mechanism.",
    },
  },
  mnemonics: [
    {
      code: "\u201cThe anaerobe's missing toolkit: no catalase, no SOD — no air. And the aminoglycoside rides an O2-dependent door.\u201d",
      meaning:
        "KYP's key for the first row: lacking catalase and/or superoxide dismutase, the anaerobe cannot neutralize oxygen's reactive byproducts — so it dies in air. The corollary: aminoglycosides require O2 to enter the bacterial cell, so they fail against anaerobes regardless of dose.",
      memorizes: "Anaerobe enzymology + the aminoglycoside rule",
      whenToUse: "Any anaerobe or aminoglycoside-effectiveness question.",
      clinical: "Foul smell + gas in tissue + anaerobic-chamber growth = the same missing enzymes.",
    },
    {
      code: "\u201cHost ATP is the obligate tax; the facultative keep two addresses.\u201d",
      meaning:
        "KYP's key for the intracellular split: OBLIGATE (Rickettsia, Chlamydia, Coxiella) pay the host-ATP tax — they cannot make their own; FACULTATIVE (Salmonella, Neisseria, Brucella, Mycobacterium, Listeria, Francisella, Legionella, Yersinia pestis) keep both addresses — inside cells by choice, outside by ability.",
      memorizes: "Obligate vs facultative intracellular",
      whenToUse: "Any intracellular-organism question.",
      clinical: "Obligate → cell culture/serology; facultative → they grow on media but survive inside macrophages.",
    },
    {
      code: "\u201cThe spleen opsonizes the capsuled; without it, vaccinate the three (meningococcus, pneumococcus, H flu) — and remember why the vaccines are conjugates: sugar alone cannot talk to T cells.\u201d",
      meaning:
        "KYP's key for the encapsulated row: capsules are antiphagocytic, clearance is splenic opsonization — asplenics lose it and need the three vaccines. The design principle printed with the row: a polysaccharide antigen alone cannot be presented to T cells, so capsule antigens are conjugated to carrier proteins.",
      memorizes: "Encapsulated organisms, asplenia risk, conjugate-vaccine logic",
      whenToUse: "Any asplenia, encapsulated-organism, or vaccine-design question.",
      clinical: "Postsplenectomy sepsis prophylaxis = the three conjugate/polysaccharide vaccines + antibiotic counseling.",
    },
  ],
  rapidReview: {
    s30: [
      "Anaerobes: lack catalase and/or SOD — susceptible to oxidative damage",
      "Anaerobe examples: Clostridioides, Clostridium, Bacteroides, Fusobacterium, Actinomyces israelii",
      "Anaerobe signs: foul smell (short-chain FAs), gas in tissue (CO2, H2), difficult to culture",
      "Anaerobes: normal GI microbiota, pathogenic elsewhere (aspiration pneumonia)",
      "Aminoglycosides ineffective vs anaerobes — require O2 to enter the cell",
    ],
    m3: [
      "Facultative anaerobes: O2 terminal electron acceptor OR fermentation — streptococci, staphylococci, enteric gram ⊝",
      "Obligate intracellular: Rickettsia, Chlamydia, Coxiella — rely on host ATP",
      "Facultative intracellular: Salmonella, Neisseria, Brucella, Mycobacterium, Listeria, Francisella, Legionella, Yersinia pestis",
      "Encapsulated: Pseudomonas, S pneumoniae, H influenzae type b, N meningitidis, E coli, Salmonella, Klebsiella, group B Strep",
      "Urease-positive: Proteus, Cryptococcus, H pylori, Ureaplasma, Nocardia, Klebsiella, S epidermidis, S saprophyticus",
    ],
    m10: [
      "Asplenics: ↓ opsonizing ability, ↑ severe infections — vaccines vs N meningitidis, S pneumoniae, H influenzae",
      "Conjugate principle: polysaccharide alone cannot be presented to T cells; conjugate to carrier protein",
      "Urease: urea → ammonia + CO2 → ↑ pH → struvite (magnesium ammonium phosphate) stones, particularly Proteus",
      "Encapsulated capsules = antiphagocytic virulence factor; cleared by splenic opsonization",
      "Every row of the directory returns as a clinical stem in the organism sections",
    ],
  },
  recall: [
    {
      q: "Why are anaerobes susceptible to oxidative damage, and what are the three clinical signatures that follow?",
      a: "They lack catalase and/or superoxide dismutase. The signatures: foul smell (short-chain fatty acids), gas in tissue (CO2 and H2), and difficulty culturing (anaerobic methods needed). They are normal GI microbiota, typically pathogenic elsewhere (eg, aspiration pneumonia).",
    },
    {
      q: "Why are aminoglycosides ineffective against anaerobes?",
      a: "Because these antibiotics require O2 to enter into the bacterial cell — a transport requirement, not a potency issue.",
    },
    {
      q: "Contrast obligate and facultative intracellular organisms.",
      a: "Obligate intracellular (Rickettsia, Chlamydia, Coxiella) rely on host ATP. Facultative intracellular (Salmonella, Neisseria, Brucella, Mycobacterium, Listeria, Francisella, Legionella, Yersinia pestis) survive within cells but can also live and grow outside them.",
    },
    {
      q: "List the encapsulated organisms and the asplenia consequence with its vaccine set.",
      a: "Pseudomonas aeruginosa, Streptococcus pneumoniae, Haemophilus influenzae type b, Neisseria meningitidis, Escherichia coli, Salmonella, Klebsiella pneumoniae, and group B Strep. They are opsonized and cleared by the spleen; asplenics have ↓ opsonizing ability and ↑ risk of severe infections — need vaccines against N meningitidis, S pneumoniae, and H influenzae.",
    },
    {
      q: "Why must capsule vaccines be conjugated, and which organisms are the urease-positive set?",
      a: "A polysaccharide antigen alone cannot be presented to T cells; immunogenicity is enhanced by conjugating capsule antigens to a carrier protein. Urease-positive: Proteus, Cryptococcus, H pylori, Ureaplasma, Nocardia, Klebsiella, S epidermidis, S saprophyticus — urease hydrolyzes urea to ammonia + CO2 (↑ pH), predisposing to struvite stones, particularly Proteus.",
    },
  ],
  related: [
    {
      title: "Bacterial Structures: Anatomy & Function",
      topicId: "bacterial-structures",
      note: "The capsule of the encapsulated row is M1's anti-phagocytic coat; the aminoglycoside-O2 rule is M1's drug-geometry bridge — and the periplasm/β-lactamase distractor comes from the same map.",
    },
    {
      title: "Complement Disorders",
      topicId: "complement-disorders",
      note: "Opsonization and splenic clearance are the same immune economy E30 mapped — the encapsulated row is where asplenia meets the terminal-complement/Neisseria story.",
    },
    {
      title: "Special Culture Requirements",
      topicId: "special-culture-requirements",
      note: "The anaerobe row's 'difficult to culture' is M3's territory: the medium and atmosphere are part of the workup — and the obligate intracellular organisms cannot be cultured on cell-free media at all.",
    },
  ],
  crossLinks: [
    {
      subject: "Pharmacology (Antimicrobials)",
      connection: "The aminoglycoside-O2 rule is microbiology turned into pharmacology: the drug class fails in every anaerobic site — abscess, anaerobic pneumonia, intra-abdominal sepsis — and the antimicrobials chapter builds the alternatives.",
    },
    {
      subject: "Immunology (Vaccine Design)",
      connection: "The conjugate-vaccine principle printed with the encapsulated row: polysaccharide alone cannot recruit T cells, so capsule antigens ride carrier proteins — the design of the pediatric conjugate vaccines.",
    },
    {
      subject: "Nephrology (Stones)",
      connection: "The urease row is the stone chapter's bridge: ammonia raises urine pH, struvite (magnesium ammonium phosphate) crystallizes in alkaline urine — the infection stone of Proteus.",
    },
    {
      subject: "Surgery (Infectious Disease)",
      connection: "Aspiration pneumonia and the GI-flora anaerobic abscesses (dental, neck, intra-abdominal) are this row's clinical territory — normal microbiota displaced to wrong sites.",
    },
  ],
};
