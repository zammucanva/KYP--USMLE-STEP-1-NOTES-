import type { KypUsMLENote } from "../types";

// Microbiology — Basic Bacteriology banner (M-batch 3).
// Source: First Aid 2026, Part 1 pdf 146 / book 124
// (Special culture requirements: the BUG / MEDIA USED FOR ISOLATION /
//  MEDIA CONTENTS-OTHER directory — 10 rows, pure vector page)

export const specialCultureRequirements: KypUsMLENote = {
  id: "special-culture-requirements",
  title: "Special Culture Requirements",
  subtitle:
    "The bug-to-medium directory: H influenzae grows on chocolate agar (factors V [NAD+] and X [hematin]); N gonorrhoeae and N meningitidis on Thayer-Martin agar, which selectively favors Neisseria by inhibiting gram-positive organisms with vancomycin, gram-negative organisms except Neisseria with trimethoprim and colistin, and fungi with nystatin — very typically cultures Neisseria; B pertussis on Bordet-Gengou agar (potato extract) or Regan-Lowe medium (charcoal, blood, and antibiotic); C diphtheriae on tellurite agar or Löffler medium; M tuberculosis on Löwenstein-Jensen medium, Middlebrook medium, or rapid automated broth cultures; M pneumoniae on Eaton agar (requires cholesterol); the lactose-fermenting enterics on MacConkey agar, where fermentation produces acid and the colonies turn pink; E coli on eosin–methylene blue agar with its green metallic sheen; Brucella, Francisella, Legionella, and Pasteurella on buffered charcoal yeast extract agar with cysteine and iron; and the fungi on Sabouraud agar.",
  subject: "Microbiology",
  system: "Section II · High-Yield General Principles — Basic Bacteriology",
  pilotCategory:
    "Basic bacteriology — special culture requirements: the 10-row bug-to-medium directory (chocolate/Thayer-Martin/Bordet-Gengou/Regan-Lowe/tellurite/Löffler/Löwenstein-Jensen/Middlebrook/Eaton/MacConkey/EMB/BCYE/Sabouraud) and what each medium's chemistry is doing",
  difficulty: 2,
  readTime: 8,
  sourceRef: "First Aid 2026, Part 1 pp. 124–124 (Special culture requirements)",
  tags: [
    "special culture requirements",
    "culture media",
    "chocolate agar",
    "factors V and X",
    "NAD+",
    "hematin",
    "H influenzae",
    "Thayer-Martin agar",
    "N gonorrhoeae",
    "N meningitidis",
    "Neisseria",
    "vancomycin",
    "trimethoprim",
    "colistin",
    "nystatin",
    "B pertussis",
    "Bordet-Gengou agar",
    "Regan-Lowe medium",
    "potato extract",
    "charcoal",
    "C diphtheriae",
    "tellurite agar",
    "Löffler medium",
    "M tuberculosis",
    "Löwenstein-Jensen medium",
    "Middlebrook medium",
    "rapid automated broth cultures",
    "M pneumoniae",
    "Eaton agar",
    "cholesterol",
    "lactose-fermenting enterics",
    "MacConkey agar",
    "pink colonies",
    "E coli",
    "eosin-methylene blue",
    "EMB agar",
    "green metallic sheen",
    "Brucella",
    "Francisella",
    "Legionella",
    "Pasteurella",
    "buffered charcoal yeast extract",
    "BCYE",
    "cysteine",
    "iron",
    "fungi",
    "Sabouraud agar",
  ],
  core: {
    what: "The printed directory, row by row: H INFLUENZAE — chocolate agar; factors V (NAD+) and X (hematin). N GONORRHOEAE, N MENINGITIDIS — Thayer-Martin agar; selectively favors growth of Neisseria by inhibiting growth of gram ⊕ organisms with vancomycin, gram ⊝ organisms except Neisseria with trimethoprim and colistin, and fungi with nystatin — very typically cultures Neisseria. B PERTUSSIS — Bordet-Gengou agar (Bordet for Bordetella); Regan-Lowe medium; potato extract / charcoal, blood, and antibiotic. C DIPHTHERIAE — tellurite agar, Löffler medium. M TUBERCULOSIS — Löwenstein-Jensen medium, Middlebrook medium, rapid automated broth cultures. M PNEUMONIAE — Eaton agar; requires cholesterol. LACTOSE-FERMENTING ENTERICS — MacConkey agar; fermentation produces acid, causing colonies to turn pink. E COLI — eosin–methylene blue (EMB) agar; colonies with green metallic sheen. BRUCELLA, FRANCISELLA, LEGIONELLA, PASTEURELLA — buffered charcoal yeast extract agar with cysteine and iron. FUNGI — Sabouraud agar.",
    why: "This page is the lab-identification spine of the clinical bacteriology section: after M2's stains give a morphology, this directory tells you what to pour into the plate. Each medium is doing one of three jobs — enriching (supplying what the bug cannot make: chocolate's V/X factors from lysed blood, Eaton's cholesterol), selecting (suppressing everything else: Thayer-Martin's antibiotic trio that leaves only Neisseria, tellurite for the diphtheria rod, Löwenstein-Jensen/Middlebrook for the tubercle bacillus, BCYE's cysteine-and-iron for the intracellular foursome), or indicating (color readouts: MacConkey's pink-acid colonies, EMB's green metallic sheen). Every later organism entry names its medium, and every 'the culture is negative' question is a question about which medium was in the plate.",
    keyIdea: "Read each medium as a design, not a name. ENRICH: chocolate agar (heated-blood lysis releases factors V [NAD+] and X [hematin] — the nutrients H influenzae cannot make); Eaton agar supplies the cholesterol M pneumoniae requires; Bordet-Gengou's potato extract and Regan-Lowe's charcoal-blood-antibiotic feed B pertussis. SELECT: Thayer-Martin removes everything but Neisseria — vancomycin (gram ⊕), trimethoprim + colistin (gram ⊝ except Neisseria), nystatin (fungi) — 'very typically cultures Neisseria'; tellurite/Löffler select C diphtheriae; Löwenstein-Jensen, Middlebrook, and rapid automated broth cultures grow M tuberculosis; buffered charcoal yeast extract with cysteine and iron grows Brucella, Francisella, Legionella, and Pasteurella; Sabouraud selects fungi over bacteria. INDICATE: MacConkey — lactose-fermenting enterics' fermentation produces acid, causing the COLONIES to turn pink; EMB — E coli's colonies with green metallic sheen.",
  },
  mechanisms: [
    {
      id: "medium-design-logic",
      title: "Three medium jobs: enrich, select, indicate",
      context: "From the directory to the design logic",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "The lab must grow an organism that routine media miss — fastidious, slow, or buried in normal flora",
            sublabel: "Input — the problem each row solves: a growth requirement or a contamination problem.",
            variant: "input",
          },
          {
            id: "s1",
            label: "ENRICH — supply what the bug cannot make: chocolate agar (heated blood releases factors V [NAD+] and X [hematin] for H influenzae); Eaton agar (cholesterol for M pneumoniae); Bordet-Gengou (potato extract) and Regan-Lowe (charcoal, blood, antibiotic) for B pertussis",
            sublabel: "Process — the enriched-media family: add the missing nutrient.",
            variant: "process",
          },
          {
            id: "s2",
            label: "SELECT — suppress everything else: Thayer-Martin (vancomycin removes gram ⊕; trimethoprim + colistin remove gram ⊝ EXCEPT Neisseria; nystatin removes fungi); tellurite/Löffler (C diphtheriae); Löwenstein-Jensen + Middlebrook + rapid automated broth (M tuberculosis); BCYE with cysteine and iron (Brucella, Francisella, Legionella, Pasteurella); Sabouraud (fungi)",
            sublabel: "Process — the selective-media family: the antibiotic or inhibitor list is the medium's identity.",
            variant: "process",
          },
          {
            id: "s3",
            label: "INDICATE — the color readouts: MacConkey (lactose-fermenting enterics — fermentation produces acid, causing colonies to turn pink); EMB (E coli — colonies with green metallic sheen)",
            sublabel: "Process — the indicator family: the plate reports metabolism as color.",
            variant: "process",
          },
          {
            id: "o1",
            label: "OUTPUT — the organism grows (and announces itself): 'very typically cultures Neisseria' on Thayer-Martin, pink colonies on MacConkey, green metallic sheen on EMB — and the medium's name becomes part of the organism's identification",
            sublabel: "Output — the medium choice is diagnostic data before the plates even open.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "missing nutrient" },
          { from: "s1", to: "s2", label: "or contamination" },
          { from: "s2", to: "s3", label: "or readout" },
          { from: "s3", to: "o1", label: "identified" },
        ],
        caption:
          "Every row of the directory is one of three designs. The enriched media hand the organism its missing chemistry: chocolate agar is blood heated until it lyses, releasing factors V (NAD+) and X (hematin) that H influenzae cannot synthesize; Eaton agar carries the cholesterol M pneumoniae requires; Bordet-Gengou's potato extract (and Regan-Lowe's charcoal-blood-antibiotic formula) does the same for B pertussis. The selective media invert the problem — instead of feeding the target, they poison everyone else: Thayer-Martin's three antibiotics (vancomycin for gram ⊕, trimethoprim and colistin for gram ⊝ except Neisseria, nystatin for fungi) leave a plate that 'very typically cultures Neisseria'; tellurite and Löffler do it for C diphtheriae; Löwenstein-Jensen, Middlebrook, and rapid automated broth cultures do it for M tuberculosis (slow growth needing weeks — the automated broth shortcuts it); BCYE pairs cysteine and iron for Brucella, Francisella, Legionella, and Pasteurella; and Sabouraud's low pH selects fungi over bacteria. The indicator media report metabolism as color: on MacConkey, the lactose-fermenting enterics' fermentation produces acid, causing the colonies (not the plate) to turn pink; on EMB, E coli's colonies take the green metallic sheen — the signature readout of the row.",
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "bug-media-matching-map",
      title: "The bug-to-medium directory, organized by medium job",
      caption:
        "An original KYP matching map: the three medium jobs (ENRICH — chocolate's V/X, Eaton's cholesterol, BG potato/RL charcoal; SELECT — Thayer-Martin's antibiotic trio, tellurite/Löffler, LJ/Middlebrook/rapid broth, BCYE cysteine+iron, Sabouraud; INDICATE — MacConkey pink-acid colonies, EMB green metallic sheen) beside the 10-row bug-to-medium directory with job chips on every row.",
      notice:
        "Pure vector page (no printed figures). FA's printed mnemonics ('The Ella siblings…'; 'Sab's a fun guy!') are NOT reproduced — verification only; KYP originals replace them.",
    },
    {
      kind: "table",
      title: "The special culture requirements — verbatim",
      intro: "The source's directory (BUG / MEDIA USED FOR ISOLATION / MEDIA CONTENTS-OTHER), verbatim.",
      columns: ["Bug", "Medium · Contents/Other (verbatim)"],
      rows: [
        ["H influenzae", "Chocolate agar · Factors V (NAD+) and X (hematin)"],
        ["N gonorrhoeae, N meningitidis", "Thayer-Martin agar · Selectively favors growth of Neisseria by inhibiting growth of gram ⊕ organisms with vancomycin, gram ⊝ organisms except Neisseria with trimethoprim and colistin, and fungi with nystatin. Very typically cultures Neisseria."],
        ["B pertussis", "Bordet-Gengou agar (Bordet for Bordetella); Regan-Lowe medium · Potato extract; charcoal, blood, and antibiotic."],
        ["C diphtheriae", "Tellurite agar, Löffler medium"],
        ["M tuberculosis", "Löwenstein-Jensen medium, Middlebrook medium, rapid automated broth cultures"],
        ["M pneumoniae", "Eaton agar · Requires cholesterol"],
        ["Lactose-fermenting enterics", "MacConkey agar · Fermentation produces acid, causing colonies to turn pink."],
        ["E coli", "Eosin–methylene blue (EMB) agar · Colonies with green metallic sheen."],
        ["Brucella, Francisella, Legionella, Pasteurella", "Buffered charcoal yeast extract agar with cysteine and iron · The Ella siblings, Bruce, Francis, a legionnaire, and a pasteur (pastor), built the Sistine (cysteine) chapel out of charcoal and iron."],
        ["Fungi", "Sabouraud agar · 'Sab's a fun guy!'"],
      ],
      caption:
        "Read the medium column as the lab's answer to each bug's problem: enrichment where the bug is fastidious (chocolate, Eaton, BG/RL), selection where it needs protection from neighbors (Thayer-Martin, tellurite, LJ, BCYE, Sabouraud), and indication where metabolism can be read as color (MacConkey's pink-acid colonies; EMB's green metallic sheen). The two FA mnemonics printed in the contents cells (the Ella siblings; Sab's a fun guy) are carried verbatim as the source's table text — never reproduced in the visual.",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "The medium is part of the workup",
      body: "THE NEISSERIA PLATE: Thayer-Martin is not a generic enriched agar — it is a chemical gate that removes gram ⊕ (vancomycin), gram ⊝ except Neisseria (trimethoprim + colistin), and fungi (nystatin); what survives 'very typically cultures Neisseria.' The printed phrase is the exam's own. THE PINK AND THE SHEEN: on MacConkey it is the COLONIES that turn pink (fermentation produces acid) — not the plate; on EMB, E coli's colonies show the green metallic sheen. Both readouts belong to the gram ⊝ enteric lane (the later clinical bacteriology rows). THE SLOW GROWERS: M tuberculosis needs Löwenstein-Jensen or Middlebrook for weeks — or a rapid automated broth culture (the modern shortcut); C diphtheriae takes tellurite or Löffler. THE CYSTEINE-AND-IRON FOURSOME: Brucella, Francisella, Legionella, and Pasteurella share BCYE (buffered charcoal yeast extract with cysteine and iron) — the medium that hands them the amino acid and the metal their enzymatic machinery needs. THE CHOCOLATE EXPLANATION: the agar is not chocolate — it is blood heated to lysis, which releases the V (NAD+) and X (hematin) that H influenzae cannot make (extension: the same lysis is why heated blood grows other fastidious hemin-requiring organisms).",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 6-week-old infant has paroxysms of rapid coughing ending in a whoop and post-tussive emesis; the WBC is 28,000 with 70% lymphocytes. The laboratory asks which medium to plate.",
        discriminator: "Whooping cough + lymphocytosis + medium selection",
        concept: "Bordet-Gengou / Regan-Lowe for B pertussis",
        answer:
          "Bordetella pertussis grows on Bordet-Gengou agar (the potato-extract medium — Bordet for Bordetella, the printed cue) or Regan-Lowe medium (charcoal, blood, and antibiotic). The clinical picture is classic pertussis (paroxysmal cough, whoop, post-tussive emesis, marked lymphocytosis); the lab answer is the special medium — routine agar does not grow it.",
      },
      {
        stem: "A 19-year-old with fever and nuchal rigidity has a CSF gram stain showing gram ⊝ diplococci; the laboratory plates the specimen on a medium expected to grow only the suspected genus.",
        discriminator: "CSF + gram ⊝ diplococci + selective plate",
        concept: "Thayer-Martin for Neisseria",
        answer:
          "Thayer-Martin agar selectively favors the growth of Neisseria by inhibiting gram ⊕ organisms with vancomycin, gram ⊝ organisms except Neisseria with trimethoprim and colistin, and fungi with nystatin — 'very typically cultures Neisseria.' The stem's gram ⊝ diplococci in CSF is the meningococcemia/meningitis signature; the plate is the printed one.",
      },
      {
        stem: "A stool workup on a patient with bloody diarrhea plates the specimen on MacConkey agar; the next morning the plate shows pink colonies.",
        discriminator: "MacConkey + pink colonies",
        concept: "Lactose-fermenting enterics — the acid readout",
        answer:
          "MacConkey is the indicator medium for the enteric lane: lactose-fermenting enterics ferment lactose to acid, and the acid causes the COLONIES (not the plate) to turn pink. The readout separates the lactose fermenters from the non-fermenters (the later clinical-bacteriology directory's key split); E coli's own signature plate is EMB, where its colonies take the green metallic sheen.",
      },
    ],
    traps: [
      {
        a: "Thayer-Martin inhibits gram ⊝ organisms with trimethoprim and colistin",
        b: "It inhibits gram ⊝ organisms EXCEPT Neisseria with trimethoprim and colistin — that is the entire point of the medium",
        whyConfused: "The antibiotic list reads like a broad-spectrum barrage.",
        keyDifference:
          "Thayer-Martin is a Neisseria-selective plate: vancomycin removes gram ⊕, nystatin removes fungi, and trimethoprim + colistin remove gram ⊝ — but crucially EXCEPT Neisseria, which tolerates them. The 'except Neisseria' clause is the design; 'very typically cultures Neisseria' is the printed consequence.",
        clue: "Any Thayer-Martin mechanism question.",
      },
      {
        a: "On MacConkey agar the medium/plate turns pink",
        b: "Fermentation produces acid, causing the COLONIES to turn pink",
        whyConfused: "The color change feels like a plate-wide pH indicator event.",
        keyDifference:
          "The readout is per-colony: the lactose-fermenting enterics' colonies turn pink as their fermentation acidifies their immediate environment. The exam tests the subject of 'turn pink' — it is the colonies of the lactose fermenters (E coli's own EMB signature being the green metallic sheen instead).",
        clue: "Any MacConkey pink-colony question.",
      },
      {
        a: "Buffered charcoal yeast extract agar is the fungal medium",
        b: "BCYE (cysteine + iron) grows Brucella, Francisella, Legionella, and Pasteurella; Sabouraud is the fungal medium",
        whyConfused: "'Charcoal yeast extract' sounds like a brewing medium for anything.",
        keyDifference:
          "BCYE's cysteine and iron supply the intracellular foursome's enzymatic needs; Sabouraud (low pH) is the printed fungal medium. The two appear together as 'special culture requirements' — the exam swaps the organisms between them to test the directory.",
        clue: "Any BCYE / Sabouraud organism-matching question.",
      },
    ],
    pivots: [
      {
        lookAlike: "Chocolate agar vs Thayer-Martin agar (the two Neisseria/H-flu plates)",
        differentiator: "Enrich vs select",
        correctPath:
          "CHOCOLATE agar enriches: heated-blood lysis releases factors V (NAD+) and X (hematin) — the medium for H influenzae (and it grows other fastidious organisms too, Neisseria included). THAYER-MARTIN selects: the same growth support plus vancomycin/trimethoprim-colistin/nystatin, which removes everything except Neisseria — the medium for N gonorrhoeae and N meningitidis from contaminated sites. Enrichment answers 'cannot make it'; selection answers 'everything else is there.'",
      },
      {
        lookAlike: "MacConkey vs EMB (the two indicator plates)",
        differentiator: "Pink-acid colonies vs green metallic sheen",
        correctPath:
          "MACCONKEY: the lactose-fermenting enterics' fermentation produces acid, causing colonies to turn pink — the lactose-fermentation readout. EMB: E coli's colonies show the green metallic sheen — the E coli signature plate. Both are the gram ⊝ enteric lane's color media; the readouts (pink-acid vs green-sheen) and the target populations (lactose fermenters as a class vs E coli as the row organism) are the exam's swap pair.",
      },
    ],
    miniCase: {
      vignette:
        "A 3-week-old infant is brought in for two weeks of worsening cough, now with paroxysms of 10–15 rapid coughs in a single breath, ending in a high-pitched inspiratory whoop and vomiting. The baby is afebrile; between paroxysms she feeds normally. White cell count 31,000 with 78% lymphocytes; chest x-ray is clear. A nasopharyngeal specimen is sent for culture, and the microbiologist requests a potato-extract medium as well as a charcoal-blood-antibiotic formula.",
      question:
        "Which organism is most likely, and what is the purpose of the requested media?",
      options: [
        {
          label: "A",
          text: "Bordetella pertussis — the media (Bordet-Gengou; Regan-Lowe) supply its growth requirements while suppressing contaminants",
          correct: true,
          why: "Correct. The paroxysmal whooping cough with post-tussive emesis and marked lymphocytosis in an afebrile infant is pertussis. B pertussis requires Bordet-Gengou agar (potato extract — 'Bordet for Bordetella') or Regan-Lowe medium (charcoal, blood, and antibiotic): enriched to feed it and selective enough to suppress the nasopharyngeal flora. Routine media do not grow it.",
        },
        {
          label: "B",
          text: "H influenzae — chocolate agar is needed to supply factors V and X",
          why: "H influenzae does need chocolate agar's factors V (NAD+) and X (hematin) — but it does not cause this whooping picture (it causes pneumonia/epiglottitis/meningitis in this age group), and the stem's media (potato extract; charcoal-blood-antibiotic) are not chocolate agar. The distractor tests the enriched-media row's owner.",
        },
        {
          label: "C",
          text: "N meningitidis — Thayer-Martin is needed to select for Neisseria",
          why: "Thayer-Martin is a real medium and Neisseria a real fastidious genus — but meningococcus presents with fever and sepsis/meningitis (not an afebrile paroxysmal whoop with lymphocytosis), and Thayer-Martin's vancomycin/trimethoprim-colistin/nystatin formula is not what the microbiologist requested.",
        },
        {
          label: "D",
          text: "M pneumoniae — Eaton agar is needed for its cholesterol requirement",
          why: "M pneumoniae does require Eaton agar's cholesterol — but it causes atypical pneumonia in older children and young adults (dry cough, patchy infiltrates), not paroxysms with whoop and lymphocytosis in a neonate. The distractor tests the cholesterol row's owner.",
        },
        {
          label: "E",
          text: "M tuberculosis — Löwenstein-Jensen is needed for its slow growth",
          why: "M tuberculosis does need Löwenstein-Jensen/Middlebrook/rapid broth — but TB in a 3-week-old is not this presentation, TB is not afebrile-with-lymphocytosis whooping, and the requested media are not LJ. The distractor tests the slow-grower row's owner.",
        },
      ],
      reasoning:
        "The vignette assembles the classic pertussis picture: afebrile infant, paroxysmal cough with inspiratory whoop, post-tussive emesis, and a lymphocyte-dominant leukocytosis (the whooping-cough count). The lab question is the medium: B pertussis grows on Bordet-Gengou (potato extract) or Regan-Lowe (charcoal, blood, antibiotic) — the enriched-plus-selective formula for a fastidious coccobacillus in a contaminated site. Each distractor pairs a real medium with the wrong organism, testing the directory row by row.",
    },
  },
  mnemonics: [
    {
      code: "\u201cEvery medium has one job: hand it what it can't make (enrich), poison everyone else (select), or make the plate report metabolism as color (indicate).\u201d",
      meaning:
        "KYP's key for the directory: ENRICH = chocolate (V/X for H influenzae), Eaton (cholesterol for M pneumoniae), BG/RL (potato/charcoal-blood for B pertussis); SELECT = Thayer-Martin (the Neisseria gate), tellurite/Löffler (diphtheria), LJ/Middlebrook/rapid broth (TB), BCYE cysteine+iron (the intracellular foursome), Sabouraud (fungi); INDICATE = MacConkey (pink-acid colonies of the lactose fermenters) and EMB (E coli's green metallic sheen).",
      memorizes: "The medium jobs and their rows",
      whenToUse: "Any culture-medium selection question.",
      clinical: "Negative culture on the wrong plate is a false negative — the medium is part of the workup.",
    },
    {
      code: "\u201cChocolate is blood cooked until it gives up its V and X; Thayer-Martin is chocolate with three bodyguards who only let Neisseria through.\u201d",
      meaning:
        "KYP's key for the two most-tested plates: chocolate agar = heated-blood lysis releasing factors V (NAD+) and X (hematin) for H influenzae; Thayer-Martin = the selective overlay (vancomycin for gram ⊕, trimethoprim + colistin for gram ⊝ except Neisseria, nystatin for fungi) — 'very typically cultures Neisseria.'",
      memorizes: "Chocolate vs Thayer-Martin",
      whenToUse: "Any H influenzae / Neisseria culture question.",
      clinical: "Enrichment for fastidious growth; selection for contaminated sites.",
    },
    {
      code: "\u201cPink is the acid report of the fermenters; green metal is E coli's signature on EMB.\u201d",
      meaning:
        "KYP's key for the indicator pair: MacConkey — the lactose-fermenting enterics' fermentation produces acid, causing the COLONIES to turn pink; EMB — E coli's colonies carry the green metallic sheen. The two color readouts of the gram ⊝ enteric lane.",
      memorizes: "MacConkey vs EMB readouts",
      whenToUse: "Any enteric culture or lactose-fermentation question.",
      clinical: "The colony color is the metabolism readout — pink acid vs green sheen.",
    },
  ],
  rapidReview: {
    s30: [
      "H influenzae: chocolate agar (factors V [NAD+] and X [hematin])",
      "N gonorrhoeae / N meningitidis: Thayer-Martin",
      "Thayer-Martin trio: vancomycin (⊕), trimethoprim + colistin (⊝ except Neisseria), nystatin (fungi)",
      "B pertussis: Bordet-Gengou (potato extract); Regan-Lowe (charcoal, blood, antibiotic)",
      "C diphtheriae: tellurite agar, Löffler medium",
    ],
    m3: [
      "M tuberculosis: Löwenstein-Jensen, Middlebrook, rapid automated broth cultures",
      "M pneumoniae: Eaton agar — requires cholesterol",
      "Lactose-fermenting enterics: MacConkey — fermentation acid → colonies turn pink",
      "E coli: EMB — colonies with green metallic sheen",
      "Brucella, Francisella, Legionella, Pasteurella: BCYE with cysteine and iron",
    ],
    m10: [
      "Thayer-Martin: 'very typically cultures Neisseria' — the printed phrase",
      "Chocolate agar = heated blood; the lysis releases V and X",
      "MacConkey readout: the COLONIES turn pink (not the plate)",
      "Sabouraud = the fungal medium (fungi over bacteria)",
      "The medium's name is identification data before the plate opens",
    ],
  },
  recall: [
    {
      q: "Which medium grows H influenzae, and what does it supply?",
      a: "Chocolate agar — factors V (NAD+) and X (hematin): heated blood lyses, releasing the factors H influenzae cannot synthesize.",
    },
    {
      q: "Explain Thayer-Martin's selectivity, including the 'except' clause.",
      a: "Thayer-Martin selectively favors growth of Neisseria by inhibiting gram ⊕ organisms with vancomycin, gram ⊝ organisms except Neisseria with trimethoprim and colistin, and fungi with nystatin. Very typically cultures Neisseria.",
    },
    {
      q: "Name the pertussis media and their contents.",
      a: "Bordet-Gengou agar (potato extract — Bordet for Bordetella) and Regan-Lowe medium (charcoal, blood, and antibiotic).",
    },
    {
      q: "What are the two enteric indicator readouts?",
      a: "MacConkey agar: lactose-fermenting enterics — fermentation produces acid, causing colonies to turn pink. EMB agar: E coli — colonies with green metallic sheen.",
    },
    {
      q: "Which organisms share BCYE, and what does it supply? Which medium grows fungi?",
      a: "Buffered charcoal yeast extract agar with cysteine and iron grows Brucella, Francisella, Legionella, and Pasteurella. Fungi grow on Sabouraud agar.",
    },
  ],
  related: [
    {
      title: "Stains & Difficult-to-Stain Organisms",
      topicId: "stains-identification",
      note: "The two lab spines: stains read the wall (M2), media read the nutrition and fermentation (M3) — Mycoplasma fails both (no wall to stain, no routine medium to grow it).",
    },
    {
      title: "Bacterial Structures: Anatomy & Function",
      topicId: "bacterial-structures",
      note: "Thayer-Martin's selectivity is M1's gram wall turned into an antibiotic gate: vancomycin removes the thick-walled ⊕, trimethoprim/colistin the ⊝ envelope — except Neisseria.",
    },
    {
      title: "Complement Disorders",
      topicId: "complement-disorders",
      note: "The Neisseria family that Thayer-Martin 'very typically cultures' is the same genus E30's terminal-complement deficiency opens the door to.",
    },
  ],
  crossLinks: [
    {
      subject: "Infectious Disease Diagnostics",
      connection: "The medium choice is the workup's second question (after the stain): fastidious organism → enrich; contaminated site → select; enteric lane → indicate.",
    },
    {
      subject: "Pharmacology (Antimicrobials)",
      connection: "Thayer-Martin is pharmacology turned into a plate: vancomycin, trimethoprim, colistin, and nystatin as a selection cocktail — the same drugs reappear as therapy in the antimicrobials chapter.",
    },
    {
      subject: "Biochemistry (Metabolism)",
      connection: "The indicator media read fermentation chemistry: acid from lactose fermentation turns MacConkey colonies pink — metabolism made visible as color.",
    },
  ],
};
