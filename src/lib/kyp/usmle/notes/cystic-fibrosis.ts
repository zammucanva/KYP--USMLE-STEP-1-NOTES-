import type { KypUsMLENote } from "../types";

// Biochemistry — Genetics II (G2).
// Source: First Aid 2026, Part 1 pdf 80 / book 58 (Cystic fibrosis)

export const cysticFibrosis: KypUsMLENote = {
  id: "cystic-fibrosis",
  title: "Cystic Fibrosis Genetics",
  subtitle:
    "One gene, two directions: CFTR secretes Cl⁻ in the lung and reabsorbs it in the sweat duct — so ΔF508 thickens airway mucus while making sweat salty, and the same channel explains the pilocarpine test, the electrolyte picture, and the potentiator/corrector pharmacogenomics.",
  subject: "Biochemistry",
  system: "Section II · High-Yield General Principles — Genetics",
  pilotCategory: "Genetics — monogenic disease mechanism across tissues",
  difficulty: 2,
  readTime: 10,
  sourceRef:
    "First Aid 2026, Part 1 pp. 58 (cystic fibrosis; CFTR; ΔF508; sweat test)",
  tags: [
    "cystic fibrosis",
    "CFTR",
    "ΔF508",
    "Phe508 deletion",
    "chloride channel",
    "ENaC",
    "sweat test",
    "pilocarpine",
    "meconium ileus",
    "pancreatic insufficiency",
    "bronchiectasis",
    "ivacaftor",
    "lumacaftor",
    "pharmacogenomics",
  ],
  core: {
    what: "Cystic fibrosis is autosomal recessive, caused by a defect in the CFTR gene on chromosome 7 (deletion; ΔF508) — the most common lethal genetic disease in patients with European ancestry. CFTR encodes an ATP-gated Cl⁻ channel that secretes Cl⁻ in lungs/GI tract and reabsorbs Cl⁻ in sweat glands. The Phe508 deletion → misfolded protein → improper protein trafficking → protein absent from the cell membrane → ↓Cl⁻ (and H₂O and HCO₃⁻) secretion → compensatory ↑Na⁺ reabsorption via epithelial Na⁺ channels (ENaC) → ↑H₂O reabsorption → abnormally thick mucus in lungs/GI tract. Diagnosis: ↑Cl⁻ concentration on pilocarpine-induced sweat test; ↑immunoreactive trypsinogen on newborn screening.",
    why: "This is the flagship single-gene disease of the genetics chapter and the template for channelopathies, protein-trafficking pathology, and pharmacogenomics. Every organ finding — thick mucus, salty sweat, pancreatic insufficiency, meconium ileus, male infertility, even the contraction alkalosis — is one CFTR physiology sentence read in a different tissue.",
    keyIdea: "Hold the tissue split in view: CFTR SECRETES Cl⁻ in the airway (so its failure dries and thickens mucus) and REABSORBS Cl⁻ in the sweat duct (so its failure leaves salt on the skin). Everything else is cascade: misfolded → mis-trafficked → absent from membrane → no Cl⁻/H₂O/HCO₃⁻ movement → ENaC compensation pulls Na⁺ and water inward → dehydrated secretions. Treat the cascade at the level it failed: potentiators hold the gate open (ivacaftor), correctors restore the fold (lumacaftor, tezacaftor) — efficacy varies by mutation.",
  },
  mechanisms: [
    {
      id: "cf-mucus-cascade",
      title: "The ΔF508 cascade — from deletion to dehydrated mucus",
      context: "Airway and GI epithelium",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Phe508 deletion (ΔF508) in the CFTR gene on chromosome 7",
            sublabel: "Input — autosomal recessive; the most common lethal genetic disease in patients with European ancestry.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Misfolded protein → improper protein trafficking",
            sublabel: "Molecular — the channel is synthesized but never reaches the membrane.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Protein absent from cell membrane → ↓Cl⁻ (and H₂O and HCO₃⁻) secretion",
            sublabel: "Molecular — in lungs/GI tract, CFTR normally secretes Cl⁻.",
            variant: "process",
          },
          {
            id: "s3",
            label: "Compensatory ↑Na⁺ reabsorption via epithelial Na⁺ channels (ENaC) → ↑H₂O reabsorption",
            sublabel: "Molecular — the airway dries itself out trying to balance the absent Cl⁻ flow.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Abnormally thick mucus secreted into lungs/GI tract",
            sublabel: "Output — obstruction, infection, and organ failure downstream.",
            variant: "output",
          },
          {
            id: "x1",
            label: "↑Na⁺ reabsorption → more negative transepithelial potential difference",
            sublabel: "Clinical — the electrophysiology readout of ENaC compensation.",
            variant: "inhibit",
          },
          {
            id: "x2",
            label: "In sweat glands the same absent channel fails to REABSORB Cl⁻ → salty sweat",
            sublabel: "Clinical — ↑Cl⁻ concentration in pilocarpine-induced sweat test; the diagnostic flip side.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "misfolds" },
          { from: "s1", to: "s2", label: "trafficking fails" },
          { from: "s2", to: "s3", label: "compensation" },
          { from: "s3", to: "o1", label: "dehydration" },
          { from: "x1", to: "s3", type: "inhibit", label: "electrical shift" },
          { from: "x2", to: "s2", type: "inhibit", label: "opposite direction in duct" },
        ],
        caption:
          "One deletion, one direction per tissue: ΔF508 misfolds CFTR, trafficking fails, the channel never reaches the membrane. Airway/GI lose Cl⁻/H₂O/HCO₃⁻ SECRETION and ENaC compensation reclaims Na⁺ and water — thick mucus. Sweat duct loses Cl⁻ REABSORPTION — salt trapped in sweat. Same protein, opposite failures, one diagnosis.",
      },
    },
    {
      id: "cftr-channel-logic",
      title: "CFTR modulators — where potentiators and correctors act",
      context: "Treatment by mutation class (pharmacogenomics)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "CFTR modulators can be used alone or in combination — efficacy varies by genetic mutation (pharmacogenomics)",
            sublabel: "Input — the genotype decides the drug class that can help.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Potentiators: hold the gate of the CFTR channel open → Cl⁻ flows through the cell membrane (eg, ivacaftor)",
            sublabel: "Pharmacology — for channels that REACHED the membrane but gate poorly.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Correctors: help the CFTR protein form the right 3-D shape → moves to the cell surface (eg, lumacaftor, tezacaftor)",
            sublabel: "Pharmacology — for channels caught in the misfolding/trafficking trap.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Restored Cl⁻ transport → hydrated airway secretions",
            sublabel: "Output — modulators complement airway clearance and enzyme replacement, not replace them.",
            variant: "output",
          },
          {
            id: "x1",
            label: "Supportive stack: chest physiotherapy, aerosolized dornase alfa (DNase), inhaled hypertonic saline → mucus clearance",
            sublabel: "Clinical — azithromycin prevents acute exacerbations; ibuprofen for anti-inflammatory effect.",
            variant: "inhibit",
          },
          {
            id: "x2",
            label: "Pancreatic enzyme replacement therapy (pancrelipase) for pancreatic insufficiency",
            sublabel: "Clinical — the GI half of the disease treated at its enzymatic root.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1" },
          { from: "trigger", to: "s2" },
          { from: "s1", to: "o1", label: "gate open" },
          { from: "s2", to: "o1", label: "fold + traffic" },
          { from: "x1", to: "o1", label: "clearance layer" },
          { from: "x2", to: "o1", label: "enzymatic layer" },
        ],
        caption:
          "Pharmacogenomics in one figure: potentiators (ivacaftor) hold the gate open for channels that made it to the membrane; correctors (lumacaftor, tezacaftor) fix the fold so the channel can traffic there. The rest of the regimen — physiotherapy, DNase, hypertonic saline, azithromycin, ibuprofen, pancrelipase — manages what the channel could not.",
      },
    },
  ],
  blocks: [
    {
      kind: "text",
      title: "One channel, two directions — the tissue split",
      body: [
        "CFTR encodes an ATP-gated Cl⁻ channel, and the source's one-line summary is the whole physiology: it secretes Cl⁻ in lungs/GI tract and reabsorbs Cl⁻ in sweat glands. In the airway, Cl⁻ secretion pulls water into the lumen and keeps mucus hydrated; in the sweat duct, Cl⁻ reabsorption (with ENaC's Na⁺ reabsorption) recycles salt back into the body before sweat reaches the skin.",
        "Delete Phe508 and both directions fail in opposite directions. The airway loses its Cl⁻/H₂O/HCO₃⁻ secretion, and the compensatory ↑Na⁺ reabsorption via ENaC drags water back out of the lumen — the mucus dehydrates into the abnormally thick secretions that obstruct lungs and GI tract. The sweat duct loses its Cl⁻ reabsorption, so chloride never leaves the sweat — salt accumulates on the skin, and the pilocarpine-induced sweat test finds it. Thick mucus and salty sweat are not two diseases; they are the same absent channel read in two tissues.",
      ],
    },
    {
      kind: "visual",
      visualId: "cftr-enac-diagram",
      title: "CFTR and ENaC — airway vs sweat duct, Normal vs CF",
      caption:
        "The source's CFTR/ENaC figure rebuilt: two panels, each with Normal and CF states. SWEAT DUCT — Normal: apical CFTR reabsorbs Cl⁻ from the lumen and ENaC reabsorbs Na⁺ (salt recycled); CF: CFTR defective (dashed) so Cl⁻ is trapped in the lumen → ↑ sweat Cl⁻ (the pilocarpine-induced sweat test) while ENaC keeps reclaiming Na⁺. AIRWAY — Normal: CFTR secretes Cl⁻ (with H₂O) into the lumen → normal hydrated mucus; CF: no Cl⁻/H₂O secretion and ENaC-driven Na⁺/H₂O reabsorption pulls fluid back → dehydrated, thick mucus. Lumen above, interstitium below; the same two channels doing opposite jobs in the two epithelia.",
      notice:
        "The discriminator is the ARROW DIRECTION, not the channel identity: airway CFTR points Cl⁻ OUT (secretion), sweat-duct CFTR points Cl⁻ IN (reabsorption). CF breaks both — so airway mucus dries while sweat stays salty. If you can draw this figure you can answer every CF physiology question on the page.",
    },
    {
      kind: "table",
      title: "The complications — one cascade, five organ systems",
      intro: "Every row is thick mucus plus obstruction plus stasis in a different tissue.",
      columns: ["System", "Source findings"],
      rows: [
        ["Lung", "Recurrent pulmonary infections — S aureus (infancy and early childhood), P aeruginosa (adulthood), allergic bronchopulmonary aspergillosis (ABPA); chronic bronchitis and bronchiectasis → reticulonodular pattern on CXR; nasal polyps; nail clubbing"],
        ["Pancreas/GI", "Pancreatic insufficiency, malabsorption with steatorrhea, fat-soluble vitamin deficiencies (A, D, E, K) progressing to endocrine dysfunction (CF-related diabetes); meconium ileus in newborns; biliary cirrhosis, liver disease"],
        ["Sinus", "Opacification of sinuses; nasal polyps"],
        ["Reproduction", "Infertility in males (absence of vas deferens; spermatogenesis may be unaffected) and subfertility in females (amenorrhea, abnormally thick cervical mucus)"],
        ["Electrolytes", "Contraction alkalosis and hypokalemia (ECF effects analogous to loop diuretic effect) due to ECF H₂O/Na⁺ losses via sweating and concomitant renal K⁺/H⁺ wasting"],
      ],
      caption:
        "Read the infection timeline as age-graded: S aureus first (infancy/early childhood), P aeruginosa later (adulthood), ABPA as the allergic overlay. The electrolyte row is the exam's favorite crossover — a genetic disease mimicking a loop diuretic.",
    },
    {
      kind: "text",
      title: "Diagnosis and treatment — test the duct, treat the cascade",
      body: [
        "Two tests carry the diagnosis. The pilocarpine-induced sweat test finds the ↑Cl⁻ concentration the failed duct reabsorption leaves behind; the newborn screen finds ↑immunoreactive trypsinogen, which rises because of clogging of the pancreatic duct. Both point at the same absent channel from different organs.",
        "Treatment is layered exactly on the cascade. Mucus clearance: chest physiotherapy, aerosolized dornase alfa (DNase) to digest the extracellular DNA of stuck neutrophils, and inhaled hypertonic saline to draw water into the mucus. Inflammation and infection: ibuprofen for anti-inflammatory effect, azithromycin to prevent acute exacerbations. Enzymes: pancreatic enzyme replacement (pancrelipase) for the insufficiency. And the genotype layer — CFTR modulators, used alone or in combination, where efficacy varies by genetic mutation: potentiators hold the gate of the CFTR channel open so Cl⁻ flows through the cell membrane (eg, ivacaftor), and correctors help the CFTR protein form the right 3-D shape so it moves to the cell surface (eg, lumacaftor, tezacaftor).",
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title: "How the exam asks this page",
      body: "Five recurring shapes: (1) the sweat-test stem — salty skin, ↑Cl⁻ on pilocarpine-induced sweat test, sometimes hyponatremic dehydration in a baby; (2) the meconium ileus / failure-to-thrive newborn with ↑immunoreactive trypsinogen; (3) the infection timeline — S aureus in infancy, P aeruginosa in adulthood, ABPA overlay; (4) the electrolyte stem — contraction alkalosis + hypokalemia 'analogous to loop diuretic effect' from sweat losses; (5) the pharmacogenomics stem — which modulator for which mechanism: gate problem → potentiator (ivacaftor), folding/trafficking problem → corrector (lumacaftor/tezacaftor).",
    },
    {
      kind: "callout",
      variant: "why",
      title: "Why a lung disease tastes salty — the loop-diuretic mimicry",
      body: "The sweat duct is the kidney's twisted mirror: normally CFTR reabsorbs Cl⁻ and ENaC follows with Na⁺, reclaiming salt from sweat the way a tubule reclaims filtrate. When CFTR fails, salt is lost to the skin — ECF volume contracts, and the kidney compensates by wasting K⁺ and H⁺, producing the contraction alkalosis with hypokalemia the source calls 'analogous to loop diuretic effect.' A loop diuretic blocks NKCC2 reabsorption in the thick ascending limb; CF blocks Cl⁻ reabsorption in the sweat duct — different epithelium, same electrolyte arithmetic, and the exam loves making you see one in the other.",
    },
  ],
  clinical: [
    {
      kind: "text",
      title: "The lifetime arc — newborn to adulthood",
      body: [
        "The presentation is age-graded. Newborns: meconium ileus — the first stool too thick to pass — and the newborn screen's ↑immunoreactive trypsinogen from pancreatic-duct clogging. Infants and children: failure to thrive with steatorrhea and fat-soluble vitamin deficiency (A, D, E, K), recurrent S aureus pulmonary infections, and the salty skin parents report kissing.",
        "Adolescents and adults: bronchiectasis with the reticulonodular CXR and clubbing, P aeruginosa colonization, ABPA, CF-related diabetes as endocrine dysfunction arrives, biliary cirrhosis, and the reproductive picture — male infertility from absence of the vas deferens with spermatogenesis potentially unaffected, female subfertility from amenorrhea and thick cervical mucus. Survival has been transformed by the layered regimen and by modulators matched to genotype — the pharmacogenomics paragraph made clinical.",
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 2-week-old infant with failure to pass meconium in the first 48 hours develops abdominal distension; radiographs show dilated loops. Newborn screen had shown elevated immunoreactive trypsinogen.",
        discriminator: "Meconium ileus + ↑immunoreactive trypsinogen",
        concept: "Cystic fibrosis — newborn presentation",
        answer: "Autosomal recessive CFTR defect (chromosome 7, ΔF508); ↑immunoreactive trypsinogen due to clogging of the pancreatic duct; confirm with pilocarpine-induced sweat test (↑Cl⁻)",
      },
      {
        stem: "A 3-year-old with chronic cough and recurrent S aureus pneumonia has a sweat Cl⁻ of 98 mmol/L; the mother notes the child's skin tastes salty.",
        discriminator: "↑Cl⁻ on pilocarpine-induced sweat test",
        concept: "Cystic fibrosis — failed duct reabsorption",
        answer: "CFTR is an ATP-gated Cl⁻ channel that secretes Cl⁻ in lungs/GI tract and reabsorbs Cl⁻ in sweat glands — its absence traps Cl⁻ in sweat (↑ on sweat test) while dehydrating airway mucus",
      },
      {
        stem: "An adolescent with CF presents with dehydration, hypokalemia, and contraction alkalosis during a heat wave.",
        discriminator: "ECF effects analogous to loop diuretic effect",
        concept: "CF electrolyte physiology",
        answer: "ECF H₂O/Na⁺ losses via sweating with concomitant renal K⁺/H⁺ wasting — contraction alkalosis and hypokalemia",
      },
      {
        stem: "A patient homozygous for a CFTR gating mutation is started on a modulator that holds the channel's gate open so Cl⁻ can flow through the membrane.",
        discriminator: "Gate problem vs folding problem",
        concept: "CFTR pharmacogenomics",
        answer: "Potentiator — eg, ivacaftor (holds gate of CFTR channel open); correctors (lumacaftor, tezacaftor) instead help the protein form the right 3-D shape and move to the cell surface",
      },
    ],
    traps: [
      {
        a: "Airway CFTR",
        b: "Sweat-duct CFTR",
        whyConfused: "Same protein, same mutation, opposite physiology.",
        keyDifference: "Airway: CFTR SECRETES Cl⁻ into the lumen (loss → dehydrated, thick mucus). Sweat duct: CFTR REABSORBS Cl⁻ from the lumen (loss → salty sweat, ↑ sweat Cl⁻).",
        clue: "'Thick mucus' → airway secretion failed; 'salty skin/sweat test' → duct reabsorption failed.",
      },
      {
        a: "Ivacaftor",
        b: "Lumacaftor/tezacaftor",
        whyConfused: "Both are CFTR modulators and can be combined.",
        keyDifference: "Potentiators (ivacaftor) hold the gate of the CFTR channel open → Cl⁻ flows through the cell membrane — they need the channel present. Correctors (lumacaftor, tezacaftor) help CFTR form the right 3-D shape → moves to the cell surface.",
        clue: "Gate → potentiator; fold/traffic → corrector. Efficacy varies by mutation (pharmacogenomics).",
      },
      {
        a: "S aureus",
        b: "P aeruginosa",
        whyConfused: "Both are classic CF pathogens.",
        keyDifference: "S aureus dominates infancy and early childhood; P aeruginosa dominates adulthood (chronic colonization); allergic bronchopulmonary aspergillosis is the atopic overlay.",
        clue: "Age decides: baby → S aureus; adult → P aeruginosa.",
      },
    ],
    pivots: [
      {
        lookAlike: "A 'contraction alkalosis + hypokalemia' stem offering diuretic abuse, Bulimia, and CF",
        differentiator: "The sweat/heat/salt-loss history and the CF chassis",
        correctPath: "Diuretic abuse → urine chloride low but drug history; CF → chronic sinopulmonary disease, sweat Cl⁻ elevated, losses via sweating with renal K⁺/H⁺ wasting 'analogous to loop diuretic effect.'",
      },
      {
        lookAlike: "A 'male infertility' stem offering CF, Kallmann, and Kartagener",
        differentiator: "What else is missing",
        correctPath: "CF → absence of vas deferens with spermatogenesis potentially unaffected + lung/pancreatic disease; Kallmann → anosmia + absent GnRH; Kartagener → situs inversus + immotile cilia (an AR list-mate).",
      },
    ],
    miniCase: {
      vignette:
        "A 6-month-old boy is referred for failure to thrive and recurrent cough. His mother notes that when she kisses him his skin tastes remarkably salty, and that as a newborn he did not pass meconium until hospital day 3. He has been hospitalized twice for S aureus pneumonia. Stools are bulky and greasy despite formula changes. A pilocarpine sweat test is performed on two occasions: sweat chloride concentrations are 96 and 104 mmol/L (normal < 40). Genetic testing shows a 3-base-pair deletion in the gene on chromosome 7; the child is homozygous for this deletion.",
      question: "Which of the following best explains the elevated sweat chloride?",
      options: [
        {
          label: "A",
          correct: true,
          text: "Failure of CFTR-mediated Cl⁻ reabsorption in the sweat duct, trapping chloride in sweat",
          why: "Correct. CFTR normally secretes Cl⁻ in lungs/GI tract but REABSORBS Cl⁻ in sweat glands. With the ΔF508 deletion → misfolded protein → improper trafficking → protein absent from the membrane, the duct cannot reclaim Cl⁻ from sweat — so sweat Cl⁻ rises (96–104 mmol/L). The meconium delay, steatorrhea, and S aureus pneumonias complete the classic picture.",
        },
        {
          label: "B",
          text: "Failure of CFTR-mediated Cl⁻ secretion into sweat",
          why: "Direction error — the exam's built-in trap. In the sweat duct CFTR reabsorbs Cl⁻ from the lumen; secretion is the AIRWAY direction. Reversing the tissue direction selects the wrong physiology on the very mechanism the question targets.",
        },
        {
          label: "C",
          text: "Excess ENaC-mediated Na⁺ reabsorption drawing Cl⁻ out of the sweat",
          why: "ENaC reclaims Na⁺ and its activity explains the airway's dehydrated mucus (↑H₂O reabsorption) and the more negative transepithelial potential difference — but the sweat Cl⁻ elevation is the absent CFTR reabsorption itself, not a secondary Na⁺ effect.",
        },
        {
          label: "D",
          text: "Primary renal K⁺ and H⁺ wasting from a tubulopathy",
          why: "The child's eventual contraction alkalosis + hypokalemia does arise from renal K⁺/H⁺ wasting — but that is the downstream volume response to salt loss in sweat, and it does not raise sweat chloride; the question asks for the sweat finding's mechanism.",
        },
        {
          label: "E",
          text: "Autoimmune destruction of sweat glands",
          why: "No inflammatory, autoimmune, or gland-loss mechanism operates in CF — the glands are structurally intact; the single missing channel protein explains the sweat, lung, and pancreatic findings together.",
        },
      ],
      reasoning:
        "The answer hangs on the tissue-direction rule: CFTR secretes Cl⁻ in lung/GI but reabsorbs it in the sweat duct. Homozygous ΔF508 (the 3-bp deletion on chromosome 7) makes misfolded, mis-trafficked, membrane-absent protein in BOTH tissues — airway mucus dehydrates (cough, infections) while duct reabsorption fails and Cl⁻ accumulates in sweat (salty skin, sweat Cl⁻ 96–104). Option B is the deliberate reversal; A states the correct direction.",
    },
  },
  mnemonics: [
    {
      code: "“CFTR: Cl⁻ out in the airway, Cl⁻ back in the duct”",
      meaning: "Airway CFTR secretes Cl⁻ into the lumen (hydrating mucus); sweat-duct CFTR reabsorbs Cl⁻ (recycling salt). CF fails both: thick mucus + salty sweat.",
      memorizes: "The tissue-direction split of CFTR physiology",
      whenToUse: "Any CF physiology or sweat-test question.",
      clinical: "↑Cl⁻ on pilocarpine-induced sweat test = duct reabsorption failed; bronchiectasis = airway secretion failed.",
    },
    {
      code: "“PoTaCium gAte — ivacaFToR opens the gAte”",
      meaning: "POTENTIATORS (ivacaftor) hold the gate of the CFTR channel open so Cl⁻ flows; CORRECTORS (lumacaftor, tezacaftor) correct the 3-D shape so the channel reaches the surface.",
      memorizes: "Which CFTR modulator class does what",
      whenToUse: "Pharmacogenomics stems — efficacy varies by genetic mutation.",
      clinical: "Gating mutation → potentiator; folding/trafficking mutation (ΔF508) → corrector ± combination.",
    },
  ],
  rapidReview: {
    s30: [
      "CF: autosomal recessive; CFTR gene on chromosome 7; ΔF508 (Phe508 deletion); most common lethal genetic disease in patients with European ancestry.",
      "CFTR = ATP-gated Cl⁻ channel: secretes Cl⁻ in lungs/GI tract, reabsorbs Cl⁻ in sweat glands.",
      "ΔF508 cascade: misfolded protein → improper trafficking → absent from membrane → ↓Cl⁻/H₂O/HCO₃⁻ secretion.",
      "Compensatory ↑Na⁺ reabsorption via ENaC → ↑H₂O reabsorption → abnormally thick mucus; more negative transepithelial potential difference.",
      "Dx: ↑Cl⁻ in pilocarpine-induced sweat test; ↑immunoreactive trypsinogen (newborn screen).",
      "Infections: S aureus (infancy/early childhood) → P aeruginosa (adulthood) + ABPA; bronchiectasis → reticulonodular CXR.",
      "Meconium ileus in newborns; pancreatic insufficiency with steatorrhea and ADEK deficiencies; male infertility (absence of vas deferens).",
      "Rx: physiotherapy + dornase alfa (DNase) + hypertonic saline; azithromycin; ibuprofen; pancrelipase; CFTR modulators.",
    ],
    m3: [
      "Contraction alkalosis + hypokalemia in CF = ECF H₂O/Na⁺ losses via sweating + renal K⁺/H⁺ wasting — analogous to loop diuretic effect.",
      "Potentiators hold the CFTR gate open (ivacaftor); correctors restore the 3-D shape (lumacaftor, tezacaftor) — used alone or combined.",
      "Spermatogenesis may be UNAFFECTED in CF males — the vas deferens is what is absent.",
      "Azithromycin prevents acute exacerbations (not just antibiotic — anti-inflammatory role).",
      "Dornase alfa digests extracellular DNA from neutrophils trapped in mucus.",
      "Nasal polyps + sinus opacification are part of the sinopulmonary chassis; nail clubbing tracks chronic lung disease.",
    ],
    m10: [
      "The DMD gene is the largest protein-coding human gene; CFTR's 3-bp deletion is the mirror-image minimal mutation — a single codon lost, a protein destroyed.",
      "Ivacaftor's name ends in -caftor like all CFTR modulators; 'iva' vs 'luma/teza' is how brand trivia gets tested — anchor to gate vs fold instead.",
      "CF-related diabetes is the endocrine endpoint of pancreatic destruction — type-1-like physiology from exocrine burnout.",
      "Biliary cirrhosis and liver disease follow the same thick-secretion logic as the pancreatic duct.",
      "The 25/50/25 and 2/3 carrier arithmetic from the modes-of-inheritance note apply to CF families directly (both parents carriers).",
      "Bilateral absence of vas deferens can present as isolated male infertility without lung disease — a CFTR allele story the urology shelf borrows.",
    ],
  },
  recall: [
    {
      q: "State the genetics of cystic fibrosis in one line.",
      a: "Autosomal recessive; defect in the CFTR gene on chromosome 7 (deletion; ΔF508); the most common lethal genetic disease in patients with European ancestry.",
    },
    {
      q: "What does CFTR encode, and in which two directions does it move Cl⁻?",
      a: "An ATP-gated Cl⁻ channel — secretes Cl⁻ in lungs/GI tract, reabsorbs Cl⁻ in sweat glands.",
    },
    {
      q: "Walk the ΔF508 cascade from deletion to thick mucus.",
      a: "Phe508 deletion → misfolded protein → improper protein trafficking → protein absent from cell membrane → ↓Cl⁻ (and H₂O and HCO₃⁻) secretion → compensatory ↑Na⁺ reabsorption via ENaC → ↑H₂O reabsorption → abnormally thick mucus secreted into lungs/GI tract.",
    },
    {
      q: "Why is sweat chloride elevated, and what test measures it?",
      a: "Sweat-duct CFTR fails to reabsorb Cl⁻, trapping it in sweat; the pilocarpine-induced sweat test finds the ↑Cl⁻ concentration.",
    },
    {
      q: "Name the age-graded pulmonary pathogens in CF.",
      a: "S aureus in infancy and early childhood; P aeruginosa in adulthood; allergic bronchopulmonary aspergillosis (ABPA) as the allergic overlay.",
    },
    {
      q: "Distinguish potentiators from correctors, with drug examples.",
      a: "Potentiators hold the gate of the CFTR channel open → Cl⁻ flows through the cell membrane (eg, ivacaftor); correctors help the CFTR protein form the right 3-D shape → moves to the cell surface (eg, lumacaftor, tezacaftor). Efficacy varies by mutation — pharmacogenomics.",
    },
  ],
  related: [
    {
      title: "Modes of Inheritance",
      note: "CF is the autosomal recessive list's flagship — the 25/50/25 and 2/3 carrier arithmetic apply to CF families.",
      topicId: "modes-of-inheritance",
    },
    {
      title: "Genetic Terminology & Population Genetics",
      note: "CF is pleiotropy's source example and the Hardy-Weinberg worked example (q² = 1/3200 → 2pq ≈ 3.5% carriers).",
      topicId: "genetic-terms-popgen",
    },
    {
      title: "Cytoskeleton, Microtubules & Cilia",
      note: "Kartagener syndrome (immotile cilia) is CF's neighbor on the AR list — both present with recurrent sinopulmonary infection by different mechanisms.",
      topicId: "cytoskeleton-cilia",
    },
  ],
  crossLinks: [
    {
      subject: "Pulmonology",
      connection: "Bronchiectasis, reticulonodular CXR, ABPA, and the S aureus → P aeruginosa infection timeline are pulmonology territory.",
    },
    {
      subject: "Gastrointestinal",
      connection: "Meconium ileus, pancreatic insufficiency with steatorrhea and ADEK deficiency, and biliary cirrhosis are the GI face of the same channelopathy.",
    },
    {
      subject: "Pharmacology",
      connection: "CFTR modulators teach pharmacogenomics — potentiator vs corrector matched to the mutation class.",
    },
  ],
};
