import type { KypUsMLENote } from "../types";

// Microbiology — Basic Bacteriology banner (M-batch 5).
// Source: First Aid 2026, Part 1 pdf 148 / book 126
// (Catalase-positive organisms / Pigment-producing bacteria / In vivo
//  biofilm-producing bacteria / Spore-forming bacteria — the trait-group
//  directories; TABLE NOTE, no registry visual by design)

export const organismGroupsQuickReference: KypUsMLENote = {
  id: "organism-groups-quick-reference",
  title: "Catalase, Pigment, Spore & Encapsulation Groups",
  subtitle:
    "The trait-group directories. CATALASE-POSITIVE ORGANISMS: catalase degrades H2O2 into H2O and bubbles of O2 before it can be converted to microbicidal products by the enzyme myeloperoxidase — so people with chronic granulomatous disease (NADPH oxidase deficiency) have recurrent infections with certain catalase-positive organisms: Candida, Pseudomonas, Nocardia, Bordetella pertussis, Burkholderia cepacia, Helicobacter pylori, Aspergillus, Staphylococci, Serratia, Listeria, and E coli. PIGMENT-PRODUCING BACTERIA: Actinomyces israelii (yellow 'sulfur' granules, composed of filaments of bacteria), S aureus (golden yellow pigment), P aeruginosa (blue-green pigment — pyocyanin and pyoverdin), Serratia marcescens (red pigment). IN VIVO BIOFILM-PRODUCING BACTERIA: S epidermidis (catheter and prosthetic device infections), viridans streptococci (S mutans, S sanguinis — dental plaques, infective endocarditis), P aeruginosa (respiratory tree colonization in cystic fibrosis, ventilator-associated pneumonia, contact lens–associated keratitis), nontypeable (unencapsulated) H influenzae (otitis media). SPORE-FORMING BACTERIA: some gram ⊕ bacteria form spores when nutrients are limited; spores lack metabolic activity and are highly resistant to heat and chemicals; the core contains dipicolinic acid (responsible for heat resistance) — so spores must be killed by autoclaving (steaming at 121 °C for 15 minutes at 15 psi, as done to surgical equipment); hydrogen peroxide and iodine-based agents are also sporicidal. The examples: B anthracis (anthrax), B cereus (food poisoning), Clostridium botulinum (botulism), Clostridioides difficile (pseudomembranous colitis), Clostridium perfringens (gas gangrene), Clostridium tetani (tetanus).",
  subject: "Microbiology",
  system: "Section II · High-Yield General Principles — Basic Bacteriology",
  pilotCategory:
    "Basic bacteriology — trait-group directories: the catalase-positive set (the CGD axis), pigment-producing bacteria (sulfur granules, gold, pyocyanin, red), in vivo biofilm producers (devices, plaques, CF airways, otitis media), and spore formers (dipicolinic acid, autoclave parameters)",
  difficulty: 1,
  readTime: 8,
  sourceRef: "First Aid 2026, Part 1 pp. 126–126 (Catalase-positive organisms, Pigment-producing bacteria, In vivo biofilm-producing bacteria, Spore-forming bacteria)",
  tags: [
    "catalase-positive organisms",
    "catalase",
    "H2O2",
    "myeloperoxidase",
    "chronic granulomatous disease",
    "NADPH oxidase deficiency",
    "Candida",
    "Pseudomonas",
    "Nocardia",
    "Bordetella pertussis",
    "Burkholderia cepacia",
    "Helicobacter pylori",
    "Aspergillus",
    "Staphylococci",
    "Serratia",
    "Listeria",
    "E coli",
    "pigment-producing bacteria",
    "Actinomyces israelii",
    "sulfur granules",
    "yellow pigment",
    "S aureus",
    "golden yellow pigment",
    "P aeruginosa",
    "pyocyanin",
    "pyoverdin",
    "blue-green pigment",
    "Serratia marcescens",
    "red pigment",
    "biofilm",
    "S epidermidis",
    "catheter infections",
    "prosthetic device infections",
    "viridans streptococci",
    "S mutans",
    "S sanguinis",
    "dental plaques",
    "infective endocarditis",
    "cystic fibrosis",
    "ventilator-associated pneumonia",
    "contact lens keratitis",
    "nontypeable H influenzae",
    "unencapsulated",
    "otitis media",
    "spore-forming bacteria",
    "spores",
    "dipicolinic acid",
    "heat resistance",
    "autoclave",
    "121 C",
    "15 psi",
    "sporicidal",
    "hydrogen peroxide",
    "iodine",
    "B anthracis",
    "anthrax",
    "B cereus",
    "food poisoning",
    "Clostridium botulinum",
    "botulism",
    "Clostridioides difficile",
    "pseudomembranous colitis",
    "Clostridium perfringens",
    "gas gangrene",
    "Clostridium tetani",
    "tetanus",
  ],
  core: {
    what: "CATALASE-POSITIVE ORGANISMS: catalase degrades H2O2 into H2O and bubbles of O2 before it can be converted to microbicidal products by the enzyme myeloperoxidase; people with chronic granulomatous disease (NADPH oxidase deficiency) have recurrent infections with certain catalase-positive organisms — Candida, Pseudomonas, Nocardia, Bordetella pertussis, Burkholderia cepacia, H pylori, Aspergillus, Staphylococci, Serratia, Listeria, E coli. PIGMENT-PRODUCING BACTERIA: Actinomyces israelii — yellow 'sulfur' granules composed of filaments of bacteria; S aureus — golden yellow pigment; P aeruginosa — blue-green pigment (pyocyanin and pyoverdin); Serratia marcescens — red pigment. IN VIVO BIOFILM-PRODUCING BACTERIA: S epidermidis — catheter and prosthetic device infections; viridans streptococci (S mutans, S sanguinis) — dental plaques, infective endocarditis; P aeruginosa — respiratory tree colonization in patients with cystic fibrosis, ventilator-associated pneumonia, contact lens–associated keratitis; nontypeable (unencapsulated) H influenzae — otitis media. SPORE-FORMING BACTERIA: some gram ⊕ bacteria can form spores when nutrients are limited; spores lack metabolic activity and are highly resistant to heat and chemicals; the core contains dipicolinic acid (responsible for heat resistance); must autoclave to kill spores (as is done to surgical equipment) by steaming at 121 °C for 15 minutes at 15 psi; hydrogen peroxide and iodine-based agents are also sporicidal. Examples: B anthracis (anthrax), B cereus (food poisoning), Clostridium botulinum (botulism), Clostridioides difficile (pseudomembranous colitis), Clostridium perfringens (gas gangrene), Clostridium tetani (tetanus).",
    why: "Each of these directories is an identification shortcut keyed to a mechanism. The catalase row is an immunology statement: in CGD the phagocyte cannot make its own H2O2 (no NADPH oxidase), so the only peroxide available is what the microbe itself produces — and a catalase-positive microbe destroys even that before myeloperoxidase can turn it into microbicidal products. Hence the CGD organism set (Staphylococci, Aspergillus, Candida, Nocardia, Serratia...) is the catalase-positive set. The pigment row is a bedside-identification statement: the four color-organism pairs (sulfur granules, gold, blue-green, red) are visible to the naked eye and name the organism before any lab. The biofilm row is a device-era statement: each organism is listed with the surface it colonizes — catheters and prosthetics for S epidermidis, dental plaques and endocarditis for viridans streptococci, the CF airway/ventilator/contact lens for Pseudomonas, the middle ear for nontypeable H influenzae. The spore row is a sterilization statement: dipicolinic acid in the core is the heat-resistance mechanism, which is why surgical instruments are autoclaved at 121 °C/15 min/15 psi rather than boiled.",
    keyIdea: "Four directories, four mechanisms. CATALASE (the CGD axis): catalase degrades H2O2 into H2O and O2 bubbles before myeloperoxidase can make microbicidal products — so CGD (NADPH oxidase deficiency) selects for catalase-positive organisms: Candida, Pseudomonas, Nocardia, Bordetella pertussis, Burkholderia cepacia, H pylori, Aspergillus, Staphylococci, Serratia, Listeria, E coli. PIGMENT (the naked-eye ID): Actinomyces israelii = yellow 'sulfur' granules (filament masses); S aureus = golden yellow; P aeruginosa = blue-green (pyocyanin + pyoverdin); Serratia marcescens = red. BIOFILM (the device map): S epidermidis → catheters and prosthetic devices; viridans streptococci (S mutans, S sanguinis) → dental plaques and infective endocarditis; P aeruginosa → CF respiratory tree, ventilator-associated pneumonia, contact lens keratitis; nontypeable (unencapsulated) H influenzae → otitis media. SPORES (the sterilization bar): dipicolinic acid in the core = heat resistance; autoclave at 121 °C for 15 min at 15 psi (hydrogen peroxide and iodine-based agents are also sporicidal); the formers are the gram ⊕ genera Bacillus (anthracis, cereus) and Clostridium/Clostridioides (botulinum, difficile, perfringens, tetani).",
  },
  mechanisms: [
    {
      id: "catalase-cgd-axis",
      title: "The catalase-CGD axis: who survives a phagocyte that cannot burst",
      context: "From the trait directories to the host-pathogen mechanism",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A phagocyte ingests a microbe and needs H2O2 to feed the myeloperoxidase system",
            sublabel: "Input — the oxidative killing circuit: NADPH oxidase → O2·− → H2O2 → myeloperoxidase → microbicidal products.",
            variant: "input",
          },
          {
            id: "s1",
            label: "HOST SIDE: in chronic granulomatous disease, NADPH oxidase deficiency means the phagocyte makes no respiratory burst — no endogenous H2O2",
            sublabel: "Process — the missing host enzyme (E32's respiratory-burst story).",
            variant: "process",
          },
          {
            id: "s2",
            label: "MICROBE SIDE: the only remaining H2O2 is what the microbe's own metabolism produces — and a CATALASE-POSITIVE microbe degrades that H2O2 into H2O and O2 bubbles before myeloperoxidase can convert it to microbicidal products",
            sublabel: "Process — the printed mechanism: catalase beats myeloperoxidase to the substrate.",
            variant: "process",
          },
          {
            id: "s3",
            label: "SELECTION: CGD patients have recurrent infections with the catalase-positive set — Candida, Pseudomonas, Nocardia, Bordetella pertussis, Burkholderia cepacia, H pylori, Aspergillus, Staphylococci, Serratia, Listeria, E coli",
            sublabel: "Process — the directory is the disease's organism menu.",
            variant: "process",
          },
          {
            id: "o1",
            label: "OUTPUT — the other three directories as identification and sterilization data: pigment pairs (yellow sulfur granules / gold / blue-green / red), biofilm-device pairs (catheters, plaques, CF airways, otitis media), and spore chemistry (dipicolinic acid → autoclave 121 °C/15 min/15 psi; H2O2 and iodine also sporicidal)",
            sublabel: "Output — each directory converts a trait into an exam answer bank.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "host enzyme missing" },
          { from: "s1", to: "s2", label: "microbe enzyme wins" },
          { from: "s2", to: "s3", label: "selection" },
          { from: "s3", to: "o1", label: "directories" },
        ],
        caption:
          "The catalase row is immunology wearing a bacteriology label. The normal phagocyte generates its own H2O2 by the respiratory burst (NADPH oxidase on O2), then myeloperoxidase converts H2O2 with halide into microbicidal products. In chronic granulomatous disease the burst never happens — so the only H2O2 in the phagolysosome is whatever the ingested microbe's own metabolism exhales. A catalase-positive microbe then destroys that peroxide (catalase degrades H2O2 into H2O and bubbles of O2) faster than myeloperoxidase can use it — and the microbe survives inside the phagocyte it was meant to die in. The printed consequence: CGD patients suffer recurrent infections with the catalase-positive set — Candida, Pseudomonas, Nocardia, Bordetella pertussis, Burkholderia cepacia, H pylori, Aspergillus, Staphylococci, Serratia, Listeria, E coli. The pigment directory converts color into identity: Actinomyces israelii's yellow 'sulfur' granules are masses of bacterial filaments; S aureus's golden yellow is in its name (aureus = gold, the printed cue); P aeruginosa's blue-green is the pyocyanin-pyoverdin pair (and pyocyanin is the CF airway's blue-green signature); Serratia marcescens's red pigment is the fourth pair. The biofilm directory maps devices to organisms: S epidermidis on catheters and prosthetics, viridans streptococci (S mutans, S sanguinis) on dental plaques and damaged valves (infective endocarditis), P aeruginosa in the CF respiratory tree, on ventilators, and on contact lenses (keratitis), and nontypeable — unencapsulated — H influenzae in otitis media (the capsule-less variant stays local in the middle ear rather than invading). The spore directory is the sterilization rationale: spores form when nutrients are limited, lack metabolic activity, resist heat and chemicals, and owe their heat resistance to dipicolinic acid in the core — the printed autoclave parameters (121 °C, 15 minutes, 15 psi) are set by that chemistry, with hydrogen peroxide and iodine-based agents named sporicidal alongside.",
      },
    },
  ],
  blocks: [
    {
      kind: "table",
      title: "The four trait directories — verbatim",
      intro: "The source's table (four category rows with their descriptions, organism lists, and printed mnemonics), verbatim.",
      columns: ["Directory", "Description · Organisms · Notes (verbatim)"],
      rows: [
        ["Catalase-positive organisms", "Catalase degrades H2O2 into H2O and bubbles of O2 before it can be converted to microbicidal products by the enzyme myeloperoxidase. People with chronic granulomatous disease (NADPH oxidase deficiency) have recurrent infections with certain catalase ⊕ organisms. Catalase ⊕ organisms include Candida, Pseudomonas, Nocardia, Bordetella pertussis, Burkholderia cepacia, Helicobacter pylori, Aspergillus, Staphylococci, Serratia, Listeria, E coli."],
        ["Pigment-producing bacteria", "Actinomyces israelii — yellow 'sulfur' granules, which are composed of filaments of bacteria. S aureus — golden yellow pigment. P aeruginosa — blue-green pigment (pyocyanin and pyoverdin). Serratia marcescens — red pigment."],
        ["In vivo biofilm-producing bacteria", "S epidermidis — catheter and prosthetic device infections. Viridans streptococci (S mutans, S sanguinis) — dental plaques, infective endocarditis. P aeruginosa — respiratory tree colonization in patients with cystic fibrosis, ventilator-associated pneumonia; contact lens–associated keratitis. Nontypeable (unencapsulated) H influenzae — otitis media."],
        ["Spore-forming bacteria", "Some gram ⊕ bacteria can form spores when nutrients are limited. Spores lack metabolic activity and are highly resistant to heat and chemicals. Core contains dipicolinic acid (responsible for heat resistance). Must autoclave to kill spores (as is done to surgical equipment) by steaming at 121 °C for 15 minutes at a pressure of 15 psi. Hydrogen peroxide and iodine-based agents are also sporicidal. Examples: B anthracis (anthrax), B cereus (food poisoning), Clostridium botulinum (botulism), Clostridioides difficile (pseudomembranous colitis), Clostridium perfringens (gas gangrene), Clostridium tetani (tetanus)."],
      ],
      caption:
        "Read the rows as four answer banks: the CGD organism menu (catalase-positive), the naked-eye identification set (pigment pairs), the device-colonization map (biofilm pairs), and the sterilization standard-setters (spore formers — autoclave 121 °C/15 min/15 psi). The printed FA mnemonics are carried verbatim as the source's table text (E20+ precedent); KYP originals replace them in the mnemonics field.",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "The four directories at the bedside",
      body: "THE CGD MENU: a child with recurrent abscesses, osteomyelitis, or pneumonias growing Staphylococci, Aspergillus, Candida, Nocardia, Serratia, or Burkholderia is the CGD presentation — and the mechanism is the printed catalase axis (the microbe's catalase destroys the only H2O2 a burst-less phagocyte ever sees). THE COLOR READOUT: yellow 'sulfur' granules draining a jaw/neck abscess = Actinomyces; golden colonies on a plate = S aureus; blue-green (pyocyanin) discharge — classically in CF sputum or the blue-green pus of a burn wound = P aeruginosa; red colonies (classically on bread or sputum culture, extension) = Serratia marcescens. THE DEVICE MAP: catheter and prosthetic infections = S epidermidis; dental plaques seeding damaged valves = viridans streptococci (S mutans, S sanguinis — infective endocarditis after dental procedures); CF airway colonization and ventilator-associated pneumonia = P aeruginosa; contact lens keratitis = P aeruginosa; otitis media in a child = nontypeable (unencapsulated) H influenzae. THE STERILIZATION BAR: spores set the autoclave parameters — 121 °C for 15 minutes at 15 psi — with hydrogen peroxide and iodine-based agents also sporicidal; the formers are the gram ⊕ genera Bacillus and Clostridium/Clostridioides (the anthrax, food-poisoning, botulism, pseudomembranous-colitis, gas-gangrene, and tetanus organisms).",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 3-year-old boy has recurrent liver abscesses, osteomyelitis, and pneumonias; organisms grown over time include Staphylococcus aureus, Aspergillus, Serratia, and Nocardia. A diagnostic workup is sent for suspected phagocyte dysfunction.",
        discriminator: "Recurrent abscesses + this organism set + phagocyte dysfunction workup",
        concept: "The catalase-positive set in chronic granulomatous disease",
        answer:
          "In CGD (NADPH oxidase deficiency) the phagocyte makes no respiratory burst, so the only H2O2 is the microbe's own — and catalase-positive organisms (Staphylococci, Aspergillus, Candida, Nocardia, Serratia, Burkholderia cepacia, Pseudomonas, H pylori, Listeria, E coli, Bordetella pertussis) degrade it before myeloperoxidase can convert it to microbicidal products. The organism menu IS the mechanism: catalase-positive organisms recur in CGD.",
      },
      {
        stem: "A 24-year-old man with cystic fibrosis has a chronic productive cough; the sputum is blue-green, and the laboratory reports the pigment as pyocyanin with pyoverdin.",
        discriminator: "Blue-green sputum pigment in CF",
        concept: "P aeruginosa — the pigment pair",
        answer:
          "P aeruginosa produces a blue-green pigment (pyocyanin and pyoverdin) — the CF airway's colonizer (respiratory tree colonization in patients with cystic fibrosis, ventilator-associated pneumonia) and the contact-lens keratitis organism. The pigment row's other pairs: Actinomyces israelii (yellow 'sulfur' granules — filaments of bacteria), S aureus (golden yellow), Serratia marcescens (red).",
      },
      {
        stem: "A hospital's sterile-processing unit reviews why surgical instruments are steamed at 121 °C for 15 minutes at 15 psi instead of being boiled.",
        discriminator: "Sterilization parameters set by spores",
        concept: "Spore chemistry — dipicolinic acid",
        answer:
          "Spores lack metabolic activity and are highly resistant to heat and chemicals; the core contains dipicolinic acid, responsible for heat resistance. Boiling does not kill them — autoclaving does (121 °C, 15 minutes, 15 psi), as done to surgical equipment; hydrogen peroxide and iodine-based agents are also sporicidal. The formers are the gram ⊕ genera Bacillus (anthracis, cereus) and Clostridium/Clostridioides (botulinum, difficile, perfringens, tetani) — spores form when nutrients are limited.",
      },
    ],
    traps: [
      {
        a: "In CGD, the microbe's catalase destroys the host's myeloperoxidase",
        b: "Catalase degrades the H2O2 (into H2O and O2 bubbles) before MYELOPEROXIDASE can convert it to microbicidal products",
        whyConfused: "Both enzymes belong to the peroxide story, so the attacker and the victim blur.",
        keyDifference:
          "Myeloperoxidase is the HOST enzyme (it needs H2O2 to make microbicidal products); catalase is the MICROBE's enzyme (it removes that H2O2 first). In CGD the host supplies even less H2O2 (no NADPH oxidase), so the microbe's catalase clears the last remaining substrate — the organism list (the catalase-positive set) is the consequence.",
        clue: "Any CGD enzyme-mechanism question.",
      },
      {
        a: "Boiling instruments for 15 minutes kills spores",
        b: "Spores must be autoclaved — steaming at 121 °C for 15 minutes at 15 psi (hydrogen peroxide and iodine-based agents are also sporicidal)",
        whyConfused: "Both are 'heat for 15 minutes.'",
        keyDifference:
          "Dipicolinic acid in the spore core confers heat resistance that defeats boiling; the printed parameters are 121 °C at 15 psi — the autoclave, not the stove. The exam swaps the temperature/pressure/moisture to test whether the parameters are attached to the right process.",
        clue: "Any sterilization-parameter question (or 'why did the spores survive?').",
      },
      {
        a: "Serratia marcescens produces the blue-green pigment",
        b: "Serratia produces the RED pigment; the blue-green pair (pyocyanin + pyoverdin) belongs to P aeruginosa",
        whyConfused: "Two pigment-producing gram ⊝ rods in the same row.",
        keyDifference:
          "The pigment row's four pairs never swap: yellow 'sulfur' granules = Actinomyces israelii (filaments of bacteria); golden yellow = S aureus; blue-green (pyocyanin, pyoverdin) = P aeruginosa; red = Serratia marcescens. Color-to-organism matching is the exam's favorite version of this row.",
        clue: "Any pigment-identification question.",
      },
    ],
    pivots: [
      {
        lookAlike: "Catalase-positive (CGD) vs encapsulated (asplenia) — the two immune-selection menus",
        differentiator: "Which host defect selects the set",
        correctPath:
          "CATALASE-POSITIVE set (Candida, Pseudomonas, Nocardia, Bordetella pertussis, Burkholderia cepacia, H pylori, Aspergillus, Staphylococci, Serratia, Listeria, E coli) is selected by the PHAGOCYTE's missing burst (CGD — M4/M5's axis). The ENCAPSULATED set (S pneumoniae, H influenzae, N meningitidis, Klebsiella, group B Strep...) is selected by the SPLEEN's missing opsonization (asplenia — M4's row). Two immune defects, two organism menus, two vaccine/management answers.",
      },
      {
        lookAlike: "The biofilm producers by surface (the device map)",
        differentiator: "Which surface, which organism",
        correctPath:
          "CATHETERS AND PROSTHETIC DEVICES → S epidermidis. DENTAL PLAQUES → viridans streptococci (S mutans, S sanguinis) — seeding damaged valves = infective endocarditis. CF AIRWAY / VENTILATOR / CONTACT LENS → P aeruginosa (blue-green pigment on top of the biofilm). MIDDLE EAR (otitis media) → nontypeable (unencapsulated) H influenzae — the capsule-less variant that stays local. Each surface names its organism; the exam reads the device first, then asks for the colonizer.",
      },
    ],
    miniCase: {
      vignette:
        "A 2-year-old boy has had three episodes of Staphylococcus aureus skin abscesses requiring drainage in six months, a liver abscess growing Serratia, and a pneumonia with a filamentous organism identified as Nocardia. Between episodes he is well. Laboratory evaluation shows normal immunoglobulins and lymphocyte subsets; a nitroblue tetrazolium slide test fails to turn blue (extension). His older brother died in infancy of a similar infection pattern.",
      question:
        "Which microbial enzyme most directly explains why these particular organisms recur in this patient?",
      options: [
        {
          label: "A",
          text: "Catalase, which degrades H2O2 into H2O and O2 before myeloperoxidase can convert it to microbicidal products",
          correct: true,
          why: "Correct. The pattern is chronic granulomatous disease (NADPH oxidase deficiency — the failed nitroblue tetrazolium test, X-linked history, and the catalase-positive organism menu: Staphylococci, Serratia, Nocardia, Aspergillus, Candida...). With no respiratory burst, the only H2O2 in the phagolysosome is the microbe's own — and a catalase-positive microbe destroys it before the host's myeloperoxidase can use it. Catalase is the microbial enzyme that selects the set.",
        },
        {
          label: "B",
          text: "Myeloperoxidase, which converts H2O2 to microbicidal products inside the phagolysosome",
          why: "Myeloperoxidase is the HOST's enzyme (the victim of the story, not the attacker) — and myeloperoxidase deficiency is a different disease (extension: candidiasis susceptibility without the abscess pattern). The question asks for the MICROBIAL enzyme; MPO is host-side.",
        },
        {
          label: "C",
          text: "Superoxide dismutase, which dismutates superoxide in the phagolysosome",
          why: "Superoxide dismutase is real (and is the anaerobe's missing toolkit from M4) — but it is neither the CGD mechanism nor the reason these organisms recur here. The distractor imports M4's row into M5's.",
        },
        {
          label: "D",
          text: "Urease, which hydrolyzes urea and raises local pH",
          why: "Urease is real chemistry (M4's row — struvite stones, H pylori) — but it explains urinary pH and stone formation, not survival inside a burst-less phagocyte. The distractor tests whether the two M4 rows are being kept apart.",
        },
        {
          label: "E",
          text: "Coagulase, which walls off the abscess from host defenses",
          why: "Coagulase is a real S aureus virulence factor (the clinical bacteriology chapter's row) — but it is a single-organism factor, not the mechanism selecting this multi-organism set (Serratia and Nocardia are not coagulase producers). The distractor tests whether the CGD selection logic is understood as host-side, not organism-side.",
        },
      ],
      reasoning:
        "The vignette assembles the classic CGD picture: recurrent staphylococcal abscesses, a Serratia liver abscess, Nocardia pneumonia, normal adaptive immunity, a failed nitroblue tetrazolium test, and a brother who died similarly (X-linked inheritance — extension). The mechanism question is the printed catalase axis: with NADPH oxidase missing, the phagocyte supplies no H2O2 of its own, so the microbe's own peroxide becomes the only substrate — and the catalase-positive organisms destroy it before myeloperoxidase can act. Each distractor pairs a real enzyme with the wrong side (host vs microbe) or the wrong disease axis — testing whether the selection mechanism is understood at the enzyme level.",
    },
  },
  mnemonics: [
    {
      code: "\u201cIn CGD the phagocyte cannot spark, so the microbe's own exhaust becomes the only fuel — and catalase-positive microbes take even that away.\u201d",
      meaning:
        "KYP's key for the CGD axis: no respiratory burst (NADPH oxidase deficiency) → no host H2O2 → the microbe's metabolic H2O2 is the only substrate left — and catalase-positive organisms (Candida, Pseudomonas, Nocardia, Bordetella pertussis, Burkholderia cepacia, H pylori, Aspergillus, Staphylococci, Serratia, Listeria, E coli) degrade it before myeloperoxidase can use it.",
      memorizes: "The catalase-positive set and why CGD selects it",
      whenToUse: "Any CGD organism-selection question.",
      clinical: "Recurrent abscesses with this organism set = phagocyte-burst workup.",
    },
    {
      code: "\u201cThe color row never swaps: sulfur-yellow granules in the jaw, gold on the plate, blue-green in the CF sputum, red on the culture.\u201d",
      meaning:
        "KYP's key for the pigment pairs: Actinomyces israelii = yellow 'sulfur' granules (filament masses); S aureus = golden yellow (aureus = gold); P aeruginosa = blue-green (pyocyanin + pyoverdin — the CF airway signature); Serratia marcescens = red.",
      memorizes: "Pigment-organism matching",
      whenToUse: "Any pigment or CF-sputum question.",
      clinical: "Blue-green discharge in CF or a burn wound = Pseudomonas until proven otherwise.",
    },
    {
      code: "\u201cSpores are the reason the autoclave exists: dipicolinic acid sets the bar at 121 °C, 15 minutes, 15 psi.\u201d",
      meaning:
        "KYP's key for the spore row: spores form when nutrients are limited, lack metabolic activity, and resist heat and chemicals because of dipicolinic acid in the core — so killing them requires the autoclave (steaming 121 °C for 15 minutes at 15 psi); hydrogen peroxide and iodine-based agents are also sporicidal. The formers: Bacillus (anthracis, cereus) and Clostridium/Clostridioides (botulinum, difficile, perfringens, tetani).",
      memorizes: "Spore chemistry, the autoclave parameters, and the spore-forming genera",
      whenToUse: "Any sterilization or spore-former question.",
      clinical: "Surgical instruments are autoclaved because spores survive boiling.",
    },
  ],
  rapidReview: {
    s30: [
      "Catalase degrades H2O2 → H2O + O2 bubbles (before myeloperoxidase)",
      "CGD (NADPH oxidase deficiency): recurrent infections with catalase-positive organisms",
      "Catalase ⊕: Candida, Pseudomonas, Nocardia, Bordetella, Burkholderia cepacia, H pylori, Aspergillus, Staphylococci, Serratia, Listeria, E coli",
      "Spores: dipicolinic acid core = heat resistance; form when nutrients are limited",
      "Autoclave: 121 °C, 15 min, 15 psi; H2O2 and iodine-based agents also sporicidal",
    ],
    m3: [
      "Pigments: Actinomyces israelii = yellow 'sulfur' granules (filaments)",
      "S aureus = golden yellow; P aeruginosa = blue-green (pyocyanin + pyoverdin)",
      "Serratia marcescens = red pigment",
      "Biofilm: S epidermidis = catheters/prosthetics; viridans (S mutans, S sanguinis) = dental plaques + IE",
      "P aeruginosa = CF colonization, VAP, contact lens keratitis; nontypeable H influenzae = otitis media",
    ],
    m10: [
      "Spore-forming examples: B anthracis, B cereus, C botulinum, C difficile, C perfringens, C tetani",
      "The pigment pair-to-organism match never swaps (color is the ID)",
      "Biofilm row = device map: read the surface first, name the organism second",
      "CGD menu = catalase-positive menu (one mechanism, one organism list)",
      "Nontypeable H influenzae = UNencapsulated = the local otitis variant",
    ],
  },
  recall: [
    {
      q: "Explain the catalase-CGD axis in one sentence.",
      a: "Catalase degrades H2O2 into H2O and bubbles of O2 before it can be converted to microbicidal products by myeloperoxidase — so in CGD (NADPH oxidase deficiency, no endogenous H2O2), the catalase-positive organisms destroy the microbe's own H2O2 and survive: Candida, Pseudomonas, Nocardia, Bordetella pertussis, Burkholderia cepacia, H pylori, Aspergillus, Staphylococci, Serratia, Listeria, E coli.",
    },
    {
      q: "List the four pigment pairs.",
      a: "Actinomyces israelii — yellow 'sulfur' granules (filaments of bacteria); S aureus — golden yellow pigment; P aeruginosa — blue-green pigment (pyocyanin and pyoverdin); Serratia marcescens — red pigment.",
    },
    {
      q: "Which organisms make up the biofilm directory, and with what surfaces?",
      a: "S epidermidis — catheter and prosthetic device infections; viridans streptococci (S mutans, S sanguinis) — dental plaques, infective endocarditis; P aeruginosa — respiratory tree colonization in cystic fibrosis, ventilator-associated pneumonia, contact lens–associated keratitis; nontypeable (unencapsulated) H influenzae — otitis media.",
    },
    {
      q: "Give the spore block's chemistry and the autoclave parameters.",
      a: "Spores form when nutrients are limited; they lack metabolic activity and are highly resistant to heat and chemicals; the core contains dipicolinic acid (responsible for heat resistance). Must autoclave to kill spores — steaming at 121 °C for 15 minutes at 15 psi (as done to surgical equipment); hydrogen peroxide and iodine-based agents are also sporicidal.",
    },
    {
      q: "Name the six spore-forming examples with their diseases.",
      a: "B anthracis (anthrax), B cereus (food poisoning), Clostridium botulinum (botulism), Clostridioides difficile (pseudomembranous colitis), Clostridium perfringens (gas gangrene), Clostridium tetani (tetanus).",
    },
  ],
  related: [
    {
      title: "Respiratory Burst & Type I IFN",
      topicId: "respiratory-burst-ifn",
      note: "The CGD side of the axis: E32's respiratory-burst machinery (NADPH oxidase → H2O2 → myeloperoxidase) is the host half this page's catalase story disables.",
    },
    {
      title: "Anaerobes, Aerobes & Oxygen Tolerance",
      topicId: "oxygen-requirements",
      note: "The sibling trait directory (M4): catalase/SOD as the anaerobe's missing toolkit there, the CGD selection menu here — two sides of the same peroxide chemistry.",
    },
    {
      title: "Bacterial Structures: Anatomy & Function",
      topicId: "bacterial-structures",
      note: "The spore's keratinlike coat + dipicolinic acid (M1's sporulation kit) is why the autoclave parameters exist — M1's survival chemistry becomes this page's sterilization standard.",
    },
  ],
  crossLinks: [
    {
      subject: "Immunology (Phagocyte Defects)",
      connection: "The catalase-CGD axis is immunology through a bacteriology lens: the organism list of a phagocyte-burst defect is written in the microbe's catalase status.",
    },
    {
      subject: "Ophthalmology (Infectious Disease)",
      connection: "Contact lens–associated keratitis (P aeruginosa biofilm + pyocyanin) is the biofilm row's ocular entry — the device map includes the eye.",
    },
    {
      subject: "Hospital Sterile Processing",
      connection: "The autoclave parameters (121 °C, 15 min, 15 psi) are set by spore chemistry — dipicolinic acid's heat resistance defines the margin boiling cannot reach.",
    },
  ],
};
