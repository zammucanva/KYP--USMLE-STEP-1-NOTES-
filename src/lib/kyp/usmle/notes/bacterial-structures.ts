import type { KypUsMLENote } from "../types";

// Microbiology — Basic Bacteriology banner (M-batch 1).
// Source: First Aid 2026, Part 1 pdf 144 / book 122
// (Bacterial structures: the 9-row STRUCTURE/CHEMICAL COMPOSITION/FUNCTION
//  table + the Gram⊕/Gram⊝ cell-wall comparison figure)

export const bacterialStructures: KypUsMLENote = {
  id: "bacterial-structures",
  title: "Bacterial Structures: Anatomy & Function",
  subtitle:
    "The anatomical vocabulary every later organism entry uses: flagellum (proteins; motility), pilus/fimbria (glycoprotein; adherence — the sex pilus forms during conjugation), spore (keratinlike coat, dipicolinic acid, peptidoglycan, DNA; survival against dehydration, heat, and chemicals), capsule (discrete polysaccharide layer; protects against phagocytosis), slime (S) layer (loose polysaccharide network; adherence to surfaces and biofilm formation, e.g., indwelling catheters), outer membrane (outer leaflet containing endotoxin LPS/LOS — lipid A induces TNF and IL-1, antigenic O polysaccharide; embedded porins and OMPs; inner leaflet phospholipids — GRAM NEGATIVE ONLY), periplasm (the space between cytoplasmic and outer membranes in gram-negative bacteria, peptidoglycan in the middle, accumulating exiting components including β-lactamases — GRAM NEGATIVE ONLY), cell wall (peptidoglycan: sugar backbone with peptide side chains cross-linked by transpeptidase; netlike rigid support protecting against osmotic pressure), and cytoplasmic membrane (phospholipid bilayer sac with embedded proteins — PBPs and other enzymes; lipoteichoic acids extend from membrane to exterior in GRAM POSITIVE only, inducing TNF-α and IL-1).",
  subject: "Microbiology",
  system: "Section II · High-Yield General Principles — Basic Bacteriology",
  pilotCategory:
    "Basic bacteriology — bacterial structures: flagellum, pilus/fimbria, spore, capsule, slime (S) layer, outer membrane, periplasm, cell wall, cytoplasmic membrane — chemical composition, function, and each part's gram-status address",
  difficulty: 2,
  readTime: 8,
  sourceRef: "First Aid 2026, Part 1 pp. 122–122 (Bacterial structures)",
  tags: [
    "bacterial structures",
    "flagellum",
    "motility",
    "pilus",
    "fimbria",
    "sex pilus",
    "conjugation",
    "glycoprotein",
    "adherence",
    "spore",
    "endospore",
    "dipicolinic acid",
    "keratinlike coat",
    "sporulation",
    "sterilization resistance",
    "capsule",
    "polysaccharide capsule",
    "anti-phagocytic",
    "slime layer",
    "S layer",
    "biofilm",
    "indwelling catheters",
    "outer membrane",
    "endotoxin",
    "LPS",
    "LOS",
    "lipid A",
    "O polysaccharide",
    "porins",
    "OMPs",
    "outer membrane proteins",
    "periplasm",
    "beta-lactamases",
    "wide periplasmic space",
    "cell wall",
    "peptidoglycan",
    "transpeptidase",
    "osmotic pressure",
    "cytoplasmic membrane",
    "PBPs",
    "penicillin-binding proteins",
    "lipoteichoic acid",
    "gram positive",
    "gram negative",
    "TNF",
    "IL-1",
    "septic shock",
    "gram stain",
  ],
  core: {
    what: "FLAGELLUM: proteins — motility. PILUS/FIMBRIA: glycoprotein — mediates adherence of bacteria to cell surface; the sex pilus forms during conjugation. SPORE: keratinlike coat, dipicolinic acid, peptidoglycan, DNA — survival: resists dehydration, heat, chemicals. CAPSULE: discrete layer usually made of polysaccharides (and rarely proteins) — protects against phagocytosis. SLIME (S) LAYER: loose network of polysaccharides — mediates adherence to surfaces and plays a role in biofilm formation (e.g., indwelling catheters). OUTER MEMBRANE: outer leaflet contains endotoxin (LPS/LOS) — lipid A induces TNF and IL-1 and the O polysaccharide component is antigenic; embedded proteins are porins and other outer membrane proteins (OMPs — most antigenic; porins transport across the outer membrane); inner leaflet phospholipids — GRAM ⊝ ONLY. PERIPLASM: the space between the cytoplasmic membrane and the outer membrane in gram-negative bacteria (peptidoglycan in the middle) — accumulates components exiting gram-negative cells, including hydrolytic enzymes (e.g., β-lactamases) — GRAM ⊝ ONLY. CELL WALL: peptidoglycan is a sugar backbone with peptide side chains cross-linked by transpeptidase — netlike structure gives rigid support and protects against osmotic pressure damage. CYTOPLASMIC MEMBRANE: phospholipid bilayer sac with embedded proteins (e.g., penicillin-binding proteins [PBPs]) and other enzymes — site of oxidative and transport enzymes; PBPs are involved in cell wall synthesis; lipoteichoic acids (GRAM POSITIVE only) extend from the membrane to the exterior and induce TNF-α and IL-1.",
    why: "This page is the parts list for every organism entry that follows in the chapter: when a later note says an organism is 'catalase-positive' or 'encapsulated' or 'gram-negative rod,' the referent is one of these nine structures. Three discriminations do most of the exam work. First, the gram split: the outer membrane and the periplasm exist ONLY in gram-negative bacteria (the periplasm is literally defined as the space between the cytoplasmic membrane and the outer membrane, with the peptidoglycan wall thin and in the middle), while lipoteichoic acids exist ONLY in gram-positive bacteria, spanning from the cytoplasmic membrane to the exterior — so the same inflammatory cytokine pair (TNF, IL-1) is induced from two different addresses: lipid A in the gram-negative outer membrane's outer leaflet, and lipoteichoic acids along the gram-positive wall. Second, the surface pair: capsule versus slime — a discrete layer (anti-phagocytic) versus a loose network (adherence and biofilm, the indwelling-catheter story). Third, the survival kit: the spore's keratinlike coat and dipicolinic acid are why spores resist dehydration, heat, and chemicals — the sterilization rationale. The wall's transpeptidase cross-links are the penicillin story's anatomic setup (PBPs at the cytoplasmic membrane; β-lactamases parked in the gram-negative periplasm waiting for the drug).",
    keyIdea: "Read the bacterium as a stack of coats, and each coat's chemistry owns one function. SURFACE: capsule (discrete polysaccharides — anti-phagocytosis) over slime (S layer; loose network — adherence, biofilm on indwelling catheters). APPENDAGES: flagellum (proteins — motility) and pilus/fimbria (glycoprotein — adherence; the sex pilus forms during conjugation). THE WALL: peptidoglycan — sugar backbone with peptide side chains cross-linked by transpeptidase into a netlike sheet that gives rigid support and protects against osmotic pressure; thick and exposed in GRAM ⊕, thin and suspended mid-periplasm in GRAM ⊝. THE GRAM ⊝ EXTRAS: an outer membrane whose outer leaflet is endotoxin (LPS/LOS — lipid A induces TNF and IL-1; O polysaccharide antigenic; porins and OMPs embedded, most antigenic, porins transport across; inner leaflet phospholipids) and a periplasm that accumulates exiting components including β-lactamases. THE MEMBRANE: cytoplasmic membrane — phospholipid bilayer with PBPs (wall synthesis) and oxidative/transport enzymes; in GRAM ⊕ ONLY, lipoteichoic acids run from this membrane to the exterior and induce TNF-α and IL-1. THE SPARE PANTRY: the spore — keratinlike coat, dipicolinic acid, peptidoglycan, DNA — survival against dehydration, heat, and chemicals.",
  },
  mechanisms: [
    {
      id: "envelope-layer-logic",
      title: "The layered envelope: each layer's chemistry owns a function",
      context: "From the structure table to the gram-split cell map",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A bacterium must survive its environment (osmotic pressure, dehydration, heat, chemicals) and its host (phagocytes, immune detection)",
            sublabel: "Input — the selection pressures that shaped the nine structures.",
            variant: "input",
          },
          {
            id: "s1",
            label: "SURFACE LAYER: capsule — discrete polysaccharide layer (rarely proteins) → anti-phagocytosis; slime (S) layer — loose polysaccharide network → adherence to surfaces + biofilm (e.g., indwelling catheters)",
            sublabel: "Process — the outermost coats: attachment and immune evasion. Phagocytes cannot grip the capsule; catheters get colonized by the slime.",
            variant: "process",
          },
          {
            id: "s2",
            label: "APPENDAGES: flagellum (proteins) → motility; pilus/fimbria (glycoprotein) → adherence to cell surfaces — and the sex pilus forms during conjugation",
            sublabel: "Process — movement and attachment; the sex pilus is the conduit of bacterial gene transfer.",
            variant: "process",
          },
          {
            id: "s3",
            label: "WALL: peptidoglycan — sugar backbone with peptide side chains cross-linked by transpeptidase → netlike rigid support against osmotic pressure. GRAM ⊕: thick and exposed. GRAM ⊝: thin, suspended in the middle of the periplasm.",
            sublabel: "Process — the exoskeleton. The cross-linking enzyme (transpeptidase/PBP) is the penicillin target of the pharmacology chapter.",
            variant: "process",
          },
          {
            id: "s4",
            label: "THE GRAM ⊝ EXTRAS: outer membrane (outer leaflet endotoxin LPS/LOS — lipid A induces TNF and IL-1; antigenic O polysaccharide; embedded porins + OMPs, most antigenic, porins transport; inner leaflet phospholipids) + periplasm (space between cytoplasmic and outer membranes, accumulating exiting components incl. β-lactamases)",
            sublabel: "Process — the extra envelope gram-positive bacteria lack: a second membrane and a loaded enzymatic lobby.",
            variant: "process",
          },
          {
            id: "o1",
            label: "OUTPUT — the inflammatory signal and the survival kit: TNF and IL-1 induced from two different addresses (GRAM ⊝ lipid A in the outer membrane; GRAM ⊕ lipoteichoic acids from membrane to exterior through the wall) + the spore (keratinlike coat, dipicolinic acid, peptidoglycan, DNA) resisting dehydration, heat, and chemicals",
            sublabel: "Output — two coats of arms and a bunker: the cytokine address book and the sterilization-resistant spore.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "surface" },
          { from: "s1", to: "s2", label: "appendages" },
          { from: "s2", to: "s3", label: "wall" },
          { from: "s3", to: "s4", label: "gram ⊝ extras" },
          { from: "s4", to: "o1", label: "function" },
        ],
        caption:
          "The table's nine structures resolve into a layered model. At the surface, the capsule's discrete polysaccharide layer defeats phagocytosis while the slime's loose network anchors biofilms on indwelling catheters — attachment versus immune evasion, two coats with different weaves. The appendages split movement from attachment: flagellum (pure protein) powers motility; pilus/fimbria (glycoprotein) mediates adherence, and its specialized variant — the sex pilus — forms during conjugation, the anatomical basis of bacterial gene exchange. The wall is the exoskeleton: peptidoglycan's sugar backbone cross-linked by transpeptidase into a net that resists osmotic lysis; gram-positive bacteria wear it thick and exposed, gram-negative bacteria wear it thin, slung mid-periplasm beneath an outer membrane that gram-positive cells never built. That gram-negative outer membrane is a second bilayer with a toxin in its outer face: endotoxin (LPS/LOS), whose lipid A induces TNF and IL-1 and whose O polysaccharide is the antigenic serotype handle — porins and OMPs embedded in it (most antigenic) are its transport and identity proteins. The periplasm it bounds is a loaded lobby: hydrolytic enzymes exiting the cell, including the β-lactamases. Beneath both architectures, the cytoplasmic membrane carries the PBPs of wall synthesis and the oxidative/transport enzymes — and in gram-positive cells ONLY, lipoteichoic acids extend from this membrane through the wall to the exterior, inducing TNF-α and IL-1: the same cytokine pair as lipid A, from a different address. Finally the spore: keratinlike coat and dipicolinic acid over peptidoglycan and DNA — the bunker that resists dehydration, heat, and chemicals.",
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "bacterial-cell-anatomy",
      title: "The layered-envelope map — two gram archetypes, one parts list",
      caption:
        "An original KYP redraw of the source's cell comparison figure: the GRAM ⊕ panel (thick peptidoglycan wall; lipoteichoic acids running from the cytoplasmic membrane to the exterior; capsule/slime surface; flagellum and pilus) beside the GRAM ⊝ panel (outer membrane with endotoxin LPS/LOS in the outer leaflet — lipid A inducing TNF/IL-1, antigenic O polysaccharide — plus embedded porins/OMPs and phospholipid inner leaflet; the wide periplasm with β-lactamases and the thin wall in the middle; the same cytoplasmic membrane with PBPs), the common/unique key strip, the nine-structure roster, and the toxin-layers/sporulation/enzyme-address cards.",
      notice:
        "The printed Gram⊕/Gram⊝ cell drawings are raster art (p144's content rasters: gray + cmyk duplicates with soft masks) — COPYRIGHTED, never reproduced; conveyed schematically in this original redraw. FA's printed figure organization is not copied; this is a KYP composition.",
    },
    {
      kind: "table",
      title: "The nine structures — verbatim",
      intro: "The source's structure table (STRUCTURE / CHEMICAL COMPOSITION / FUNCTION), verbatim.",
      columns: ["Structure", "Chemical composition · Function (verbatim)"],
      rows: [
        ["Flagellum", "Proteins · Motility"],
        ["Pilus/fimbria", "Glycoprotein · Mediate adherence of bacteria to cell surface; sex pilus forms during conjugation"],
        ["Spore", "Keratinlike coat, dipicolinic acid, peptidoglycan, DNA · Survival: resist dehydration, heat, chemicals"],
        ["Capsule", "Discrete layer usually made of polysaccharides (and rarely proteins) · Protects against phagocytosis"],
        ["Slime (S) layer", "Loose network of polysaccharides · Mediates adherence to surfaces, plays a role in biofilm formation (eg, indwelling catheters)"],
        ["Outer membrane", "Outer leaflet: contains endotoxin (LPS/LOS); embedded proteins: porins and other outer membrane proteins (OMPs); inner leaflet: phospholipids · GRAM ⊝ ONLY — Endotoxin: lipid A induces TNF and IL-1; antigenic O polysaccharide component; most OMPs are antigenic; porins: transport across outer membrane"],
        ["Periplasm", "Space between cytoplasmic membrane and outer membrane in gram ⊝ bacteria (peptidoglycan in middle) · GRAM ⊝ ONLY — Accumulates components exiting gram ⊝ cells, including hydrolytic enzymes (eg, β-lactamases)"],
        ["Cell wall", "Peptidoglycan is a sugar backbone with peptide side chains cross-linked by transpeptidase · Netlike structure gives rigid support, protects against osmotic pressure damage"],
        ["Cytoplasmic membrane", "Phospholipid bilayer sac with embedded proteins (eg, penicillin-binding proteins [PBPs]) and other enzymes; lipoteichoic acids (gram positive) only extend from membrane to exterior · Site of oxidative and transport enzymes; PBPs involved in cell wall synthesis; lipoteichoic acids induce TNF-α and IL-1"],
      ],
      caption:
        "Read the chemical column as the drug-target map (glycoprotein pili, polysaccharide capsule, LPS lipid A, peptidoglycan/transpeptidase, PBPs) and the function column as the exam answer bank: motility, adherence + conjugation, survival (sterilization), anti-phagocytosis, biofilm on catheters, endotoxin/TNF-IL-1 induction, β-lactamase accumulation, osmotic protection, and wall synthesis. The two GRAM ⊝ ONLY rows (outer membrane, periplasm) and the GRAM ⊕ ONLY lipoteichoic acid note are the address book of the gram split.",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "The address book: which part does what to the host",
      body: "SEPTIC SHOCK SIGNAL: lipid A (the gram-negative outer membrane's outer leaflet) and lipoteichoic acids (gram-positive, membrane to exterior) both induce TNF and IL-1 — the cytokines that drive the systemic inflammatory response; the gram stain of the isolate tells you which address the signal came from. ANTIGENIC HANDLES: the O polysaccharide of LPS and most OMPs are the antigenic/serotype surfaces of gram-negative bacteria — the identity proteins the immune system (and the serology lab) reads. THE PHAGOCYTOSIS ESCAPE: an encapsulated organism (discrete polysaccharide layer) resists phagocytosis — the classic virulence switch (extension: Staphylococcus aureus, Streptococcus pneumoniae, Klebsiella pneumoniae are the textbook encapsulated trio). THE CATHETER STORY: the slime layer's loose network builds biofilms on indwelling catheters — adherence to surfaces as a foreign-body infection mechanism. THE DRUG GEOMETRY: penicillin-binding proteins sit at the cytoplasmic membrane (wall synthesis), while gram-negative bacteria park β-lactamases in the periplasm — hydrolytic enzymes waiting for the drug between the outer membrane and the wall (the pharmacology chapter's resistance setup). THE STERILIZATION RATIONALE: the spore's keratinlike coat plus dipicolinic acid is why spores survive dehydration, heat, and chemicals — and why sterilization standards are set beyond ordinary boiling (extension: autoclave at 121 °C).",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 74-year-old man with a long-term indwelling urinary catheter develops fever; the catheter tip culture grows a mucoid organism embedded in a thick extracellular matrix on the plastic surface.",
        discriminator: "Indwelling catheter + matrix-embedded organism on a surface",
        concept: "Slime (S) layer — biofilm formation",
        answer:
          "The slime (S) layer is a loose network of polysaccharides that mediates adherence to surfaces and plays a role in biofilm formation (e.g., indwelling catheters) — as opposed to the capsule, a discrete layer whose job is anti-phagocytosis. Foreign-body infections are the slime layer's home turf: the matrix shields the embedded organisms from both host defenses and antibiotics, and management hinges on removing or replacing the device.",
      },
      {
        stem: "A blood culture from a febrile, hypotensive patient grows a gram-negative rod; the isolate's inflammatory activity is traced to a component of its outer membrane that induces TNF and IL-1.",
        discriminator: "Gram-negative rod + TNF/IL-1 induction + outer membrane",
        concept: "Endotoxin — lipid A of LPS/LOS",
        answer:
          "The outer membrane's outer leaflet contains endotoxin (LPS/LOS): lipid A induces TNF and IL-1 (the septic-shock cytokines), the O polysaccharide component is antigenic (the serotype handle), porins transport across the membrane, and most OMPs are antigenic. The structural answer for 'which component induces TNF/IL-1 in a gram-negative organism' is always lipid A — never the O polysaccharide (antigenicity, not cytokine induction) and never porins (transport).",
      },
      {
        stem: "A surgical instrument that was processed by a low-temperature sterilization method nevertheless transmits a spore-forming organism; the infection control team asks which structural feature let the spores survive the process.",
        discriminator: "Spore survival after inadequate sterilization",
        concept: "The spore coat — keratinlike coat + dipicolinic acid",
        answer:
          "The spore carries a keratinlike coat, dipicolinic acid, peptidoglycan, and DNA — the composition whose function is survival: resistance to dehydration, heat, and chemicals. This is why spores drive sterilization standards (autoclave parameters, not mere disinfection), why spore-formers (the later chapter's Clostridium and Bacillus rosters) persist on instruments and in the environment, and why 'spores were present' is the standard root-cause phrase of post-procedure outbreak investigations.",
      },
    ],
    traps: [
      {
        a: "Both gram-positive and gram-negative bacteria have a periplasm",
        b: "The periplasm is the space between the cytoplasmic membrane and the OUTER membrane — a gram-negative-only compartment (peptidoglycan in the middle), accumulating exiting components including β-lactamases",
        whyConfused: "Every bacterium has a wall and membranes, so an 'in-between space' feels universal.",
        keyDifference:
          "Gram-positive bacteria have no outer membrane, so there is no bounded periplasm to load with enzymes; their wall is thick and directly exposed. The periplasm with its β-lactamases is a GRAM ⊝ ONLY structure — one of the two rows the table marks explicitly, and the anatomic reason gram-negative organisms hydrolyze β-lactams before the drug reaches its wall targets.",
        clue: "Any question about β-lactamase location, periplasmic enzymes, or 'which gram has a second membrane.'",
      },
      {
        a: "Lipoteichoic acids are components of the gram-negative outer membrane",
        b: "Lipoteichoic acids (GRAM POSITIVE only) extend from the cytoplasmic membrane to the exterior through the wall — and induce TNF-α and IL-1",
        whyConfused: "Both organisms induce TNF/IL-1, so the inducing structure feels shared.",
        keyDifference:
          "The cytokine pair is shared; the address is not. GRAM ⊝: lipid A of LPS/LOS, in the outer leaflet of the outer membrane. GRAM ⊕: lipoteichoic acids, spanning membrane-to-exterior. A gram-negative isolate answers 'lipid A'; a gram-positive isolate answers 'lipoteichoic acids' — and the gram stain is the selector between them.",
        clue: "Any TNF/IL-1 induction question that names the organism's gram status.",
      },
      {
        a: "Porins are the antigenic polysaccharide of the outer membrane",
        b: "Porins are EMBEDDED TRANSPORT PROTEINS of the outer membrane; the antigenic polysaccharide is the O component of LPS/LOS",
        whyConfused: "Both are 'outer membrane things that the immune system sees.'",
        keyDifference:
          "The outer membrane's outer leaflet carries endotoxin (LPS/LOS): lipid A (TNF/IL-1 induction) + O polysaccharide (the antigenic serotype handle). The embedded proteins are a different population: porins and other OMPs — porins TRANSPORT across the outer membrane, and most OMPs are antigenic (protein antigens, not the O polysaccharide). Transport channel vs antigenic sugar — the two answer banks never swap.",
        clue: "Any question mixing 'transport across the outer membrane' with 'antigenic component of LPS.'",
      },
    ],
    pivots: [
      {
        lookAlike: "Capsule vs slime (S) layer (the two surface coats)",
        differentiator: "Discrete layer vs loose network; anti-phagocytosis vs biofilm",
        correctPath:
          "CAPSULE: a discrete layer usually made of polysaccharides (and rarely proteins) — protects against phagocytosis (the immune-evasion coat; the classic encapsulated pathogens). SLIME (S) LAYER: a loose network of polysaccharides — mediates adherence to surfaces and biofilm formation (e.g., indwelling catheters) — the foreign-body coat. Both are surface polysaccharide chemistry; one defeats phagocytes, the other colonizes surfaces.",
      },
      {
        lookAlike: "Gram ⊕ wall vs gram ⊝ envelope (the architecture split)",
        differentiator: "Exposed thick wall vs outer membrane + periplasm + thin mid-slung wall",
        correctPath:
          "GRAM ⊕: thick peptidoglycan wall (sugar backbone, peptide side chains cross-linked by transpeptidase) directly exposed; lipoteichoic acids extend from the cytoplasmic membrane to the exterior (TNF-α, IL-1). GRAM ⊝: thin peptidoglycan wall suspended in the middle of a periplasm bounded by an outer membrane — whose outer leaflet carries LPS/LOS (lipid A → TNF/IL-1; O polysaccharide antigenic), with porins/OMPs embedded (most antigenic; porins transport) and β-lactamases accumulating in the periplasm. Same cytoplasmic membrane beneath both (PBPs; oxidative and transport enzymes).",
      },
    ],
    miniCase: {
      vignette:
        "A 63-year-old woman on chemotherapy for leukemia develops rigors and hypotension overnight. Blood cultures grow a gram-negative rod. Her serum studies show markedly elevated TNF and IL-1; the microbiology laboratory reports that the organism's inflammatory activity co-purifies with its outer membrane and is abolished by treatment that removes the membrane's outer leaflet glycolipid. A gram stain of the isolate shows pink rods; no gram-positive organisms are seen in any culture.",
      question:
        "Which structural component most likely induced the patient's TNF and IL-1?",
      options: [
        {
          label: "A",
          text: "Lipid A of the lipopolysaccharide in the outer leaflet of the outer membrane",
          correct: true,
          why: "Correct. In a gram-negative rod, the TNF/IL-1-inducing structure is lipid A — the glycolipid 'toxin face' of LPS/LOS in the outer leaflet of the outer membrane (endotoxin). The stem's gram-negative rod, the co-purification with the outer membrane, and the loss of activity when the outer-leaflet glycolipid is removed all point to lipid A; the O polysaccharide is the antigenic serotype handle, porins are transport channels, and the rest of the envelope options below belong to gram-positive architecture or to non-inflammatory jobs.",
        },
        {
          label: "B",
          text: "Lipoteichoic acids extending from the cytoplasmic membrane to the exterior",
          why: "Lipoteichoic acids DO induce TNF-α and IL-1 — but only in GRAM POSITIVE bacteria, and no gram-positive organism was isolated (gram stain: pink gram-negative rods only). This option tests whether the cytokine address book is being read by gram status.",
        },
        {
          label: "C",
          text: "The antigenic O polysaccharide component of LPS/LOS",
          why: "The O polysaccharide is real outer-membrane chemistry and is antigenic — but its job is serotype antigenicity (the identity handle), not TNF/IL-1 induction. The inducing moiety is the lipid A end of the same LPS molecule.",
        },
        {
          label: "D",
          text: "Porins and other outer membrane proteins",
          why: "Porins transport solutes across the outer membrane and most OMPs are antigenic (protein antigens) — but transport channels and antigenicity are not cytokine induction. This distractor swaps the membrane's logistics staff for its toxin.",
        },
        {
          label: "E",
          text: "β-lactamases accumulating in the periplasm",
          why: "β-lactamases are the gram-negative periplasm's hydrolytic enzymes — genuine gram-negative-only structures, but their function is degrading β-lactam antibiotics, not inducing cytokines. This option tests whether the periplasm's job list is confused with the outer leaflet's.",
        },
      ],
      reasoning:
        "The vignette assembles the classic endotoxin picture: gram-negative rod bacteremia with TNF/IL-1-driven systemic inflammation. The mechanism is structural: the outer membrane's outer leaflet carries LPS/LOS, whose lipid A is the cytokine-inducing moiety — and the stem confirms it three ways (gram-negative isolate, activity co-purifying with the outer membrane, loss of activity on removal of the outer-leaflet glycolipid). Each distractor pairs a real structure with the wrong function or the wrong gram status — the trap map of this note.",
    },
  },
  mnemonics: [
    {
      code: "\u201cThe envelope is a stack of coats: the slime cloak is loose, the capsule armor is discrete; gram ⊕ wears its thick peptidoglycan armor on the outside, while gram ⊝ hides a thin one under an outer-membrane rain jacket with a toxin pin (lipid A) on the lapel.\u201d",
      meaning:
        "KYP's key for the architecture split: the surface coats (slime = loose network, biofilm; capsule = discrete layer, anti-phagocytic) are shared chemistry; the wall is shared but worn differently (thick and exposed in gram ⊕; thin and mid-periplasm in gram ⊝); and only gram ⊝ built the outer membrane — the second coat whose outer leaflet carries the endotoxin (LPS/LOS, lipid A → TNF/IL-1). Gram ⊕ instead runs lipoteichoic acids from its membrane to the exterior.",
      memorizes: "The layered envelope and the gram-status address of every part",
      whenToUse: "Any structure-identification or architecture question.",
      clinical: "The gram stain selects the address: gram ⊝ → lipid A; gram ⊕ → lipoteichoic acids.",
    },
    {
      code: "\u201cTNF and IL-1 live at two addresses: lipid A at the gram ⊝ outer-membrane lobby; lipoteichoic acids along the gram ⊕ wall hallway.\u201d",
      meaning:
        "KYP's key for the toxin-layer distinction: the septic-shock cytokine pair (TNF, IL-1) is induced by gram-negative lipid A (the outer leaflet of the outer membrane) and by gram-positive lipoteichoic acids (membrane-to-exterior) — same signal, different anatomy. The antigenic handles are different still: O polysaccharide (LPS) and most OMPs for gram ⊝; no outer membrane exists in gram ⊕.",
      memorizes: "Which component induces TNF/IL-1, by gram status",
      whenToUse: "Any endotoxin/inflammation stem that names the organism or its gram stain.",
      clinical: "Blood-culture gram stain → the inflammatory structure: pink rods = lipid A; purple cocci = lipoteichoic acids.",
    },
    {
      code: "\u201cThe spore is a pantry in a fireproof bag: keratinlike cloth on the outside, dipicolinic acid fireproofing in the walls, peptidoglycan and DNA as the pantry.\u201d",
      meaning:
        "KYP's key for spore composition → survival function: keratinlike coat + dipicolinic acid + peptidoglycan + DNA = resist dehydration, heat, chemicals. This is why spore-formers survive on instruments and in dust (and why sterilization standards exist beyond boiling).",
      memorizes: "Spore chemistry and its sterilization consequences",
      whenToUse: "Any question about spore survival, sterilization parameters, or spore-forming organisms.",
      clinical: "Autoclave parameters are set by spore resistance, not by ordinary bacterial cells.",
    },
  ],
  rapidReview: {
    s30: [
      "Flagellum: proteins — motility",
      "Pilus/fimbria: glycoprotein — adherence; sex pilus forms during conjugation",
      "Spore: keratinlike coat + dipicolinic acid + peptidoglycan + DNA — survival (dehydration, heat, chemicals)",
      "Capsule: discrete polysaccharide layer — anti-phagocytosis",
      "Slime (S) layer: loose polysaccharide network — adherence + biofilm (indwelling catheters)",
    ],
    m3: [
      "Outer membrane (GRAM ⊝ ONLY): outer leaflet LPS/LOS (lipid A → TNF/IL-1; O polysaccharide antigenic); embedded porins/OMPs; inner leaflet phospholipids",
      "Periplasm (GRAM ⊝ ONLY): space between cytoplasmic and outer membranes; peptidoglycan in the middle; accumulates β-lactamases",
      "Cell wall: peptidoglycan — sugar backbone, peptide side chains cross-linked by transpeptidase; rigid support vs osmotic pressure",
      "Cytoplasmic membrane: phospholipid bilayer; PBPs (wall synthesis); oxidative + transport enzymes",
      "Lipoteichoic acids (GRAM ⊕ ONLY): membrane → exterior; induce TNF-α and IL-1",
    ],
    m10: [
      "TNF/IL-1 address book: gram ⊝ = lipid A (outer leaflet); gram ⊕ = lipoteichoic acids (membrane-to-exterior)",
      "O polysaccharide + most OMPs = the antigenic/serotype surfaces of gram ⊝",
      "Porins = transport across the outer membrane (a channel, not an antigen)",
      "Capsule = anti-phagocytosis; slime = biofilm on catheters — two different surface coats",
      "PBPs at the cytoplasmic membrane (penicillin targets); β-lactamases in the gram ⊝ periplasm (the resistance lobby)",
    ],
  },
  recall: [
    {
      q: "Give the chemical composition and function of the spore, capsule, and slime (S) layer.",
      a: "Spore: keratinlike coat, dipicolinic acid, peptidoglycan, DNA — survival: resist dehydration, heat, chemicals. Capsule: discrete layer usually made of polysaccharides (and rarely proteins) — protects against phagocytosis. Slime (S) layer: loose network of polysaccharides — mediates adherence to surfaces, plays a role in biofilm formation (e.g., indwelling catheters).",
    },
    {
      q: "Which structures are gram-negative only, and what does each do?",
      a: "Outer membrane: outer leaflet contains endotoxin (LPS/LOS) — lipid A induces TNF and IL-1; antigenic O polysaccharide component; most OMPs are antigenic; porins transport across the outer membrane; inner leaflet phospholipids. Periplasm: the space between the cytoplasmic membrane and the outer membrane (peptidoglycan in the middle) — accumulates components exiting gram-negative cells, including hydrolytic enzymes (e.g., β-lactamases).",
    },
    {
      q: "What does the cytoplasmic membrane carry, and which structure is gram-positive only?",
      a: "The cytoplasmic membrane is a phospholipid bilayer sac with embedded proteins (e.g., penicillin-binding proteins [PBPs]) and other enzymes — the site of oxidative and transport enzymes; PBPs are involved in cell wall synthesis. GRAM ⊕ ONLY: lipoteichoic acids extend from the membrane to the exterior and induce TNF-α and IL-1.",
    },
    {
      q: "Describe the cell wall's composition and the consequence of its architecture.",
      a: "Peptidoglycan is a sugar backbone with peptide side chains cross-linked by transpeptidase. The netlike structure gives rigid support and protects against osmotic pressure damage. In gram-positive bacteria the wall is thick and exposed; in gram-negative bacteria it is thin, suspended in the middle of the periplasm.",
    },
    {
      q: "Contrast flagellum and pilus/fimbria.",
      a: "Flagellum: proteins — motility. Pilus/fimbria: glycoprotein — mediates adherence of bacteria to the cell surface; the sex pilus forms during conjugation (the conduit of bacterial gene transfer).",
    },
  ],
  related: [
    {
      title: "Important Cytokines",
      topicId: "cytokines",
      note: "TNF and IL-1 — the pair induced by lipid A (gram ⊝) and lipoteichoic acids (gram ⊕) — are the acute-phase cytokines of E31's network map.",
    },
    {
      title: "Complement Disorders",
      topicId: "complement-disorders",
      note: "Terminal complement deficiency → Neisseria: the gram-negative outer membrane/LPS architecture meets the MAC's missing punch (the E30 bridge).",
    },
    {
      title: "Immunodeficiency Infection Patterns",
      topicId: "immunodeficiency-infection-patterns",
      note: "The bug-pattern matrix's layer logic (which defense layer fails → which organism niche opens) reads this parts list: capsule vs slime, wall vs outer membrane.",
    },
  ],
  crossLinks: [
    {
      subject: "Pharmacology (Antimicrobials)",
      connection: "The drug geometry of this page: PBPs at the cytoplasmic membrane are the penicillin targets; β-lactamases parked in the gram-negative periplasm are the hydrolytic resistance lobby; porins decide which drugs cross the outer membrane at all.",
    },
    {
      subject: "Immunology (Innate Immunity)",
      connection: "Lipid A and lipoteichoic acids are the canonical PAMP-like inflammatory triggers of the gram split — both funnel into TNF/IL-1, the cytokines that drive fever and the systemic inflammatory response.",
    },
    {
      subject: "Cell Biology (Membranes)",
      connection: "The outer membrane is the bacterium's second bilayer — an asymmetrical one (LPS outer face, phospholipid inner face), unlike the symmetrical cytoplasmic membrane both grams share.",
    },
    {
      subject: "Infectious Disease Control",
      connection: "The spore's keratinlike coat + dipicolinic acid set the bar for sterilization (autoclave parameters) and explain the environmental persistence of spore-forming genera in the clinical bacteriology chapter.",
    },
  ],
};
