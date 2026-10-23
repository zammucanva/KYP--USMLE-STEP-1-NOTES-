import type { KypUsMLENote } from "../types";

// Microbiology — ANTIMICROBIALS banner (M-batch 31). Source: pdf 205 / book
// 183 (Antimicrobial therapy — the mechanisms-of-action chart + the first
// drug-directory card, Penicillin G, V). Rasters: 4 tiny index images
// (88-92px at 314ppi — the chart's marker glyphs) + 9 standalone dash marker
// lines in the text layer; all redrawn as vector marks. The chapter banner
// typo 'MICROCIOLOGY—ANTIMICROCIALS' prints twice on book 183. The fl
// ligatures (Ciproﬂoxacin set) print in the text layer; normalized in the
// redraw, carried in the quotes.

export const antimicrobialOverview: KypUsMLENote = {
  id: "antimicrobial-overview",
  title: "Antimicrobial Mechanisms: The Target Map",
  subtitle:
    "The opening page of the antimicrobials banner. THE MECHANISMS-OF-ACTION CHART (book 183): one bacterial cell, nine numbered target sites, seven drug-class zones. ① FOLIC ACID SYNTHESIS AND REDUCTION (DNA methylation) — Sulfonamides (Sulfamethoxazole, Sulfadiazine) block PABA → DHF; Trimethoprim blocks DHF → THF. ② MEMBRANE INTEGRITY — Daptomycin (gram ⊕), Polymyxins (gram ⊝). ③ DNA INTEGRITY (via free radicals) — Metronidazole. ④ mRNA SYNTHESIS (RNA polymerase) — Rifampin. ⑤ GYRASE (DNA gyrase) — Fluoroquinolones (Ciprofloxacin, Ofloxacin, Levofloxacin, Moxifloxacin). ⑥ PROTEIN SYNTHESIS 50S SUBUNIT — Chloramphenicol, Clindamycin, Linezolid, Macrolides (Azithromycin, Clarithromycin, Erythromycin), Streptogramins (Quinupristin, Dalfopristin). ⑦ 30S SUBUNIT — Aminoglycosides (Gentamicin, Neomycin, Amikacin, Tobramycin, Streptomycin), Glycylcycline (Tigecycline), Tetracyclines (Tetracycline, Doxycycline, Minocycline). ⑧ PEPTIDOGLYCAN SYNTHESIS — Glycopeptides (Vancomycin, Bacitracin). ⑨ PEPTIDOGLYCAN CROSS-LINKING — the β-lactam directory: penicillinase-sensitive penicillins (Penicillin G, V; Ampicillin; Amoxicillin), penicillinase-resistant (Oxacillin, Nafcillin, Dicloxacillin), antipseudomonal (Piperacillin; Cephalosporins I-V with the five generation examples), Carbapenems (Imipenem, Meropenem, Ertapenem), Monobactams (Aztreonam). And the directory's first card printing on the same page — PENICILLIN G, V: the prototype β-lactam, a D-Ala-D-Ala structural analog binding PBPs (transpeptidases), blocking the cross-linking, activating autolytic enzymes.",
  subject: "Microbiology",
  system: "Section II · High-Yield General Principles — Antimicrobials",
  pilotCategory:
    "Antimicrobials banner opener — the whole pharmacologic-attack surface of the bacterial cell on one map: the six layers (membrane, wall-synthesis, wall-cross-linking, folate, nucleic-acid, ribosomal), the nine numbered doors, every class roster printed on the chart, and the first β-lactam card with its four-row card stack (mechanism, clinical use, adverse effects, resistance)",
  difficulty: 2,
  readTime: 12,
  sourceRef:
    "First Aid 2026, Part 1 pp. 183–183 (Antimicrobial therapy — the mechanisms-of-action chart; the Penicillin G, V card)",
  tags: [
    "antimicrobial therapy",
    "mechanisms of action",
    "sulfonamides",
    "sulfamethoxazole",
    "sulfadiazine",
    "trimethoprim",
    "PABA",
    "DHF",
    "THF",
    "folic acid synthesis",
    "daptomycin",
    "polymyxins",
    "membrane integrity",
    "metronidazole",
    "free radicals",
    "rifampin",
    "RNA polymerase",
    "fluoroquinolones",
    "ciprofloxacin",
    "DNA gyrase",
    "chloramphenicol",
    "clindamycin",
    "linezolid",
    "macrolides",
    "azithromycin",
    "streptogramins",
    "quinupristin",
    "dalfopristin",
    "aminoglycosides",
    "gentamicin",
    "tigecycline",
    "tetracyclines",
    "doxycycline",
    "vancomycin",
    "bacitracin",
    "glycopeptides",
    "peptidoglycan synthesis",
    "peptidoglycan cross-linking",
    "penicillin G",
    "penicillin V",
    "ampicillin",
    "amoxicillin",
    "oxacillin",
    "piperacillin",
    "cephalosporins",
    "cefazolin",
    "cefoxitin",
    "ceftriaxone",
    "cefepime",
    "ceftaroline",
    "imipenem",
    "meropenem",
    "ertapenem",
    "aztreonam",
    "PBPs",
    "transpeptidase",
    "D-Ala-D-Ala",
    "β-lactamase",
  ],
  core: {
    what: "THE CHART (book 183). One bacterial cell, nine numbered target sites, and around it every antibacterial class the exam tests. ① THE FOLATE FACTORY — FOLIC ACID SYNTHESIS AND REDUCTION (DNA methylation): Sulfonamides (Sulfamethoxazole, Sulfadiazine) block PABA → DHF, and Trimethoprim blocks DHF → THF; two steps of the one-carbon cycle, two drug doors on the same cascade. ② MEMBRANE INTEGRITY — Daptomycin (gram ⊕) and Polymyxins (gram ⊝): the physical-disruption pair, one per gram polarity. ③ DNA INTEGRITY (via free radicals) — Metronidazole: the free-radical fragmentation that makes it the anaerobe killer. ④ mRNA SYNTHESIS (RNA polymerase) — Rifampin: the polymerase block behind the orange-body inducer that is never given as monotherapy. ⑤ GYRASE (DNA gyrase) — Fluoroquinolones (Ciprofloxacin, Ofloxacin, Levofloxacin, Moxifloxacin): the supercoil gate stays locked. ⑥ THE 50S SUBUNIT — Chloramphenicol, Clindamycin, Linezolid; the Macrolides (Azithromycin, Clarithromycin, Erythromycin); the Streptogramins (Quinupristin + Dalfopristin). ⑦ THE 30S SUBUNIT — the Aminoglycosides (Gentamicin, Neomycin, Amikacin, Tobramycin, Streptomycin), Glycylcycline (Tigecycline), and the Tetracyclines (Tetracycline, Doxycycline, Minocycline). ⑧ PEPTIDOGLYCAN SYNTHESIS — the Glycopeptides (Vancomycin, Bacitracin): the bricklayers. ⑨ PEPTIDOGLYCAN CROSS-LINKING — the β-lactam directory: penicillinase-sensitive (Penicillin G, V; Ampicillin; Amoxicillin), penicillinase-resistant (Oxacillin, Nafcillin, Dicloxacillin), antipseudomonal (Piperacillin; the Cephalosporins I-V — 1st Cefazolin, etc; 2nd Cefoxitin, etc; 3rd Ceftriaxone, etc; 4th Cefepime; 5th Ceftaroline), the Carbapenems (Imipenem, Meropenem, Ertapenem), and the Monobactams (Aztreonam). THE FIRST CARD (same page): Penicillin G (IV and IM form) and penicillin V (oral) — the prototype β-lactams; D-Ala-D-Ala structural analogs that bind penicillin-binding proteins (transpeptidases), block transpeptidase cross-linking of peptidoglycan, and activate autolytic enzymes.",
    why: "This single page is the address book every later antimicrobial page dials into. The chart's logic is spatial: each drug class sits at the cellular layer it attacks, so the map reads as six layers — the membrane pair (②), the two-stage wall (⑧ builds, ⑨ links), the folate factory (①), the three nucleic-acid doors (③ integrity, ④ transcription, ⑤ topology), and the two ribosomal doors (⑥ the 50S cap, ⑦ the 30S base). Learning the layers first converts every later drug page from a list into a location: a β-lactam is always 'the wall's welding step, ⑨'; a macrolide is always 'the big ribosomal cap, ⑥'; a fluoroquinolone is always 'the gyrase, ⑤'. The folate layer carries the deepest exam idea on the page — SELECTIVE TOXICITY BY PATHWAY ABSENCE: bacteria synthesize folate de novo (PABA → DHF → THF), while human cells import dietary folate and lack the factory, which is exactly why sulfonamides and trimethoprim can starve the pathogen without starving us. The wall pair carries the second idea — TWO STAGES, TWO FAMILIES: glycopeptides block the building of the wall itself (⑧), while β-lactams block the cross-linking that welds it (⑨), which is why vancomycin retains activity against β-lactamase producers and why β-lactam resistance (the enzyme, or PBP mutations) never touches vancomycin's step.",
    keyIdea:
      "Route every drug to its door. FOLATE ① — Sulfonamides (Sulfamethoxazole, Sulfadiazine) ⊣ PABA→DHF; Trimethoprim ⊣ DHF→THF; we eat folate, bacteria build it. MEMBRANE ② — Daptomycin gram ⊕, Polymyxins gram ⊝. NUCLEIC ACID ③④⑤ — Metronidazole free radicals (③ DNA integrity), Rifampin RNA polymerase (④ mRNA synthesis), Fluoroquinolones (Ciprofloxacin, Ofloxacin, Levofloxacin, Moxifloxacin) at DNA gyrase (⑤). RIBOSOME ⑥⑦ — 50S: Chloramphenicol, Clindamycin, Linezolid; Macrolides (Azithromycin, Clarithromycin, Erythromycin); Streptogramins (Quinupristin + Dalfopristin). 30S: Aminoglycosides (Gentamicin, Neomycin, Amikacin, Tobramycin, Streptomycin); Glycylcycline (Tigecycline); Tetracyclines (Tetracycline, Doxycycline, Minocycline). WALL ⑧⑨ — ⑧ PEPTIDOGLYCAN SYNTHESIS: Vancomycin, Bacitracin (glycopeptides — the bricklayers); ⑨ PEPTIDOGLYCAN CROSS-LINKING: the β-lactams — penicillinase-sensitive (Penicillin G, V, Ampicillin, Amoxicillin), penicillinase-resistant (Oxacillin, Nafcillin, Dicloxacillin), antipseudomonal (Piperacillin + Cephalosporins I-V: 1st Cefazolin etc, 2nd Cefoxitin etc, 3rd Ceftriaxone etc, 4th Cefepime, 5th Ceftaroline), Carbapenems (Imipenem, Meropenem, Ertapenem), Monobactams (Aztreonam). THE PROTOTYPE CARD — Penicillin G (IV/IM) and V (oral): D-Ala-D-Ala analogs → bind PBPs (transpeptidases) → block cross-linking → activate autolysins; mostly gram ⊕ (S pneumoniae, S pyogenes, Actinomyces) plus gram ⊝ cocci (N meningitidis) and spirochetes (T pallidum); β-lactamase sensitive; hypersensitivity, direct Coombs ⊕ hemolytic anemia, interstitial nephritis; resistance = β-lactamase cleaving the ring or PBP mutations.",
  },
  mechanisms: [
    {
      id: "target-layer-logic",
      title: "The six-layer map: name the layer, then the door, then the stage",
      context: "Reading any antibacterial drug or class off the chart",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "An antibacterial class appears in a stem, a drug list, or a mechanism question",
            sublabel: "Input — any of the ~40 drugs printed on the chart.",
            variant: "input",
          },
          {
            id: "layer",
            label: "Which cellular layer does it attack? — membrane ② · wall ⑧/⑨ · folate ① · nucleic acid ③④⑤ · ribosome ⑥⑦",
            sublabel: "The first routing decision. Six layers; every class belongs to exactly one.",
            variant: "process",
          },
          {
            id: "door",
            label: "Which door within the layer? — ② which gram polarity · ⑧ build vs ⑨ link · ③ integrity vs ④ transcription vs ⑤ topology · ⑥ 50S cap vs ⑦ 30S base",
            sublabel: "The second routing decision — the stage or the subunit.",
            variant: "process",
          },
          {
            id: "roster",
            label: "The class roster at that door — e.g. ⑤ GYRASE: Ciprofloxacin, Ofloxacin, Levofloxacin, Moxifloxacin",
            sublabel: "The drug list printed on the chart, in the source's own order.",
            variant: "process",
          },
          {
            id: "effect",
            label: "The blocked function at that door — e.g. the supercoil gate stays locked: DNA replication stalls",
            sublabel: "What the bacterium can no longer do.",
            variant: "output",
          },
          {
            id: "consequence",
            label: "The clinical phenotype — e.g. anaerobes die under metronidazole's free radicals; VRE escapes vancomycin by rewriting the target",
            sublabel: "The downstream clinical/exam consequence.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "layer", label: "recognize the class" },
          { from: "layer", to: "door", label: "pick the stage/subunit" },
          { from: "door", to: "roster", label: "recall the printed roster" },
          { from: "roster", to: "effect", label: "the block" },
          { from: "effect", to: "consequence", label: "express it clinically" },
        ],
      },
    },
    {
      id: "wall-two-stage-logic",
      title: "The wall pair: ⑧ the bricklayers vs ⑨ the weld-freezers",
      context: "The two headings printed under CELL WALL SYNTHESIS on book 183",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A drug attacks the cell wall — which of the two stages does it hit?",
            sublabel: "The wall zone is the only layer with TWO printed stages.",
            variant: "input",
          },
          {
            id: "synthesis",
            label: "⑧ PEPTIDOGLYCAN SYNTHESIS — the Glycopeptides: Vancomycin, Bacitracin",
            sublabel: "They block the building of the wall itself — the brick delivery step.",
            variant: "process",
          },
          {
            id: "crosslink",
            label: "⑨ PEPTIDOGLYCAN CROSS-LINKING — the β-lactams: the D-Ala-D-Ala structural analogs",
            sublabel: "They bind PBPs (transpeptidases) and freeze the welds; they also activate autolytic enzymes.",
            variant: "process",
          },
          {
            id: "beta-lactam roster",
            label: "The ⑨ directory: penicillinase-sensitive (Penicillin G, V; Ampicillin; Amoxicillin) · resistant (Oxacillin, Nafcillin, Dicloxacillin) · antipseudomonal (Piperacillin + Cephalosporins I-V) · Carbapenems (Imipenem, Meropenem, Ertapenem) · Monobactams (Aztreonam)",
            sublabel: "Five families, one door — all welded shut the same way.",
            variant: "process",
          },
          {
            id: "effect",
            label: "The wall fails at its stage — osmotic lysis at the weak, unwelded (or unbuilt) wall",
            sublabel: "Bactericidal by physical failure.",
            variant: "output",
          },
          {
            id: "consequence",
            label: "Resistance routes differently per stage: β-lactamase cleaves the ring or PBPs mutate (⑨); the terminal D-Ala-D-Lac swap escapes vancomycin (⑧)",
            sublabel: "The stage you block determines the resistance you will meet — and why glycopeptides survive β-lactamase.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "synthesis", label: "builds the wall" },
          { from: "trigger", to: "crosslink", label: "welds the wall" },
          { from: "crosslink", to: "beta-lactam roster", label: "one door, five families" },
          { from: "synthesis", to: "effect", label: "no bricks" },
          { from: "crosslink", to: "effect", label: "no welds" },
          { from: "effect", to: "consequence", label: "stage-specific resistance" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "antimicrobial-target-map",
      title: "The antimicrobial target map — the mechanisms-of-action chart, redrawn",
      caption:
        "An original KYP redraw of the source chart (book 183): the bacterial cell with its nine numbered target sites (the folate cascade PABA→DHF→THF with its two blocked steps, the membrane band with its gram keys, DNA and DNA gyrase, RNA polymerase emitting mRNA, and the two 70S ribosome pairs), the seven satellite zone panels carrying every printed drug roster, and the β-lactam cross-linking directory with the five-generation cephalosporin list.",
      notice:
        "The 4 tiny index rasters and the 9 standalone dash markers of the printed chart are redrawn as vector marks. The source's zone glosses — (DNA methylation), (via free radicals), (RNA polymerase), gram ⊕ / gram ⊝ — are carried verbatim. The fl ligature set (Ciproﬂoxacin…) prints in the text layer and is normalized in the redraw; the split rim labels (Cell m embrane / Cell wal l) are redrawn clean.",
    },
    {
      kind: "table",
      title: "Penicillin G, V — the directory's first card (book 183, carried verbatim)",
      intro:
        "The drug directory prints its first card on this page (the directory continues on books 184-186 in M32 — the β-lactam pages). Per the page-ownership convention the card is carried here verbatim, as printed.",
      columns: ["FIELD", "PRINTED CONTENT — verbatim (book 183)"],
      rows: [
        ["Drug", "Penicillin G, V"],
        ["Prototype", "Penicillin G (IV and IM form), penicillin V (oral). Prototype β-lactam antibiotics."],
        ["Mechanism", "D-Ala-D-Ala structural analog. Bind penicillin-binding proteins (transpeptidases). Block transpeptidase cross-linking of peptidoglycan in cell wall. Activate autolytic enzymes."],
        ["Clinical use", "Mostly used for gram ⊕ organisms (S pneumoniae, S pyogenes, Actinomyces). Also used for gram ⊝ cocci (mainly N meningitidis) and spirochetes (mainly T pallidum). Bactericidal for gram ⊕ cocci, gram ⊕ rods, gram ⊝ cocci, and spirochetes. β-lactamase sensitive."],
        ["Adverse effects", "Hypersensitivity reactions, direct Coombs ⊕ hemolytic anemia, drug-induced interstitial nephritis."],
        ["Resistance", "β-lactamase cleaves the β-lactam ring. Mutations in PBPs."],
      ],
      caption:
        "The card's four-row stack (mechanism / clinical use / adverse effects / resistance) is the template every later card in the directory repeats — M32 carries the continuation (books 184-186).",
    },
    {
      kind: "callout",
      variant: "exam",
      title: "The routing rule the map teaches",
      body:
        "When a stem asks a mechanism question, route before you recall: first the LAYER (membrane, wall, folate, nucleic acid, ribosome), then the DOOR (which stage, which subunit, which gram polarity), and only then the roster. Most wrong answers are true statements parked at the wrong door — 'human cells lack DNA gyrase' is true, but it answers nothing about a folate-block question. The chart is the whole antimicrobials banner in miniature: every later page (M32-M39) zooms into one door of this map.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 24-year-old with a localized anaerobic abscess is treated with a drug whose reduced products form free radicals that fragment the microbial DNA.",
        discriminator: "Free radicals generated only in anaerobes (the redox activation) — DNA integrity lost",
        concept: "③ DNA INTEGRITY (via free radicals) — Metronidazole",
        answer:
          "Metronidazole sits at door ③ on the map: its nitro group is reduced in anaerobic conditions to radicals that fragment DNA — the chart's own gloss, '(via free radicals)', is the discriminator. The door explains the phenotype: strictly anaerobic organisms activate the drug, which is why the spectrum is anaerobes plus certain parasites.",
      },
      {
        stem: "A transplant patient on Pneumocystis prophylaxis develops a megaloblastic anemia several weeks after starting a two-drug combination.",
        discriminator: "Two sequential blocks on the same one-carbon cascade — the DHF→THF step plus the PABA→DHF step",
        concept: "① FOLATE factory — Trimethoprim + Sulfamethoxazole (TMP-SMX)",
        answer:
          "The pair blocks door ① at both of its printed steps: sulfonamides are PABA analogs blocking PABA→DHF, and trimethoprim blocks DHF→THF (dihydrofolate reductase). The marrow is a human folate-dependent tissue, so at high doses the block can spill into our cells — the chart's '(DNA methylation)' gloss marks THF's role in one-carbon transfers. The map's selectivity rule: bacteria build folate, we eat it.",
      },
      {
        stem: "A patient on a drug for mycobacterial disease reports that his sweat, urine, and tears have turned orange.",
        discriminator: "RNA polymerase inhibition — the enzyme-level block at door ④",
        concept: "④ mRNA SYNTHESIS (RNA polymerase) — Rifampin",
        answer:
          "Rifampin is the only drug on the chart at door ④: it binds bacterial DNA-dependent RNA polymerase and blocks mRNA synthesis. The orange secretions are the drug's signature, and the door explains its use and its hazard — never monotherapy (a single-step block at one enzyme selects fast-resistant mutants), which is why it is always paired.",
      },
    ],
    traps: [
      {
        a: "Vancomycin blocks peptidoglycan cross-linking",
        b: "β-lactams block peptidoglycan cross-linking",
        whyConfused:
          "Both are wall drugs printed under the same CELL WALL SYNTHESIS zone; the chart separates them only by the two printed stage headings.",
        keyDifference:
          "The wall has two stages: ⑧ PEPTIDOGLYCAN SYNTHESIS (the glycopeptides — Vancomycin, Bacitracin — block the building of the wall itself) vs ⑨ PEPTIDOGLYCAN CROSS-LINKING (the β-lactams — D-Ala-D-Ala analogs binding PBPs, freezing the welds, activating autolysins).",
        clue: "The word CROSS-LINK belongs to the β-lactam door; the word SYNTHESIS (as a stage under the wall) belongs to the glycopeptide door.",
      },
      {
        a: "Macrolides block the 30S subunit",
        b: "Aminoglycosides and tetracyclines block the 30S subunit",
        whyConfused:
          "The chart prints both sub-unit rosters under PROTEIN SYNTHESIS; the 50S/30S split is the door each family uses.",
        keyDifference:
          "⑥ 50S: Chloramphenicol, Clindamycin, Linezolid, the Macrolides (Azithromycin, Clarithromycin, Erythromycin), and the Streptogramins (Quinupristin + Dalfopristin). ⑦ 30S: the Aminoglycosides (Gentamicin, Neomycin, Amikacin, Tobramycin, Streptomycin), Glycylcycline (Tigecycline), and the Tetracyclines (Tetracycline, Doxycycline, Minocycline). Macrolides are 50S drugs, always.",
        clue: "The big cap (50S) takes the -mides and -mycins of the macrolide, streptogramin, lincosamide, and phenicol set; the small base (30S) takes the aminoglycoside -mycins and the -cyclines.",
      },
      {
        a: "Polymyxins are the gram ⊕ membrane drug",
        b: "Daptomycin is the gram ⊕ membrane drug",
        whyConfused:
          "The chart prints the membrane pair on two lines with the gram symbols as the only separator.",
        keyDifference:
          "The printed keys are exact: Daptomycin (gram ⊕) and Polymyxins (gram ⊝) — the physical-disruption pair, one per gram polarity. Polymyxins bind the gram ⊝ outer membrane's LPS; daptomycin inserts into the gram ⊕ membrane.",
        clue: "Match the symbol: ⊕ goes with daptomycin, ⊝ goes with polymyxins — as printed on the chart.",
      },
    ],
    pivots: [
      {
        lookAlike: "A stem describing rash, anemia, or nephritis in a patient on antibiotics",
        differentiator: "Whether the drug in the stem is the prototype β-lactam (the Penicillin G, V card)",
        correctPath:
          "Route through the card: hypersensitivity reactions, direct Coombs ⊕ hemolytic anemia, and drug-induced interstitial nephritis are the printed adverse effects of Penicillin G/V; β-lactamase cleaving the ring and PBP mutations are its printed resistance lines.",
      },
      {
        lookAlike: "A mechanism question offering 'human cells lack…' statements as answer options",
        differentiator: "Which absent-or-present human pathway actually answers the question being asked",
        correctPath:
          "Human cells lack the folate factory (we import dietary folate — so ① is selectively toxic), lack peptidoglycan (so ⑧⑨ are selective), and have 80S ribosomes instead of 70S (so ⑥⑦ are selective) — but each of those truths only answers the question at its own door. Match the layer, not just the truth.",
      },
    ],
    miniCase: {
      vignette:
        "A 31-year-old renal-transplant recipient on Pneumocystis jirovecii prophylaxis with a fixed-dose combination drug develops gradual fatigue and a normocytic-to-macrocytic shift on his surveillance CBC over six weeks. His transplant nephrologist reviews the chart and asks the team why the same combination can starve Pneumocystis without starving the patient's own marrow at standard doses.",
      question:
        "Which mechanism explains the selective toxicity of the combination, and which of the listed 'human cells lack…' facts is the one that actually answers it?",
      options: [
        {
          label: "A",
          text: "Human cells import dietary folate and lack the PABA → DHF → THF factory — the two-drug block (sulfonamide at PABA→DHF, trimethoprim at DHF→THF) hits a pathway our cells do not run",
          correct: true,
          why:
            "Correct. The chart's ① zone is the one-carbon factory: bacteria (and Pneumocystis) synthesize folate de novo from PABA, while human cells take up dietary folate through reduced-folate transporters. The selectivity of TMP-SMX rests entirely on that pathway absence — door ① exists in the pathogen and not in us.",
        },
        {
          label: "B",
          text: "Human cells lack DNA gyrase — the combination unhooks the supercoil gate",
          why:
            "True statement, wrong door. Human cells do lack bacterial DNA gyrase (we use topoisomerase I/II), but that is the ⑤ fluoroquinolone rationale and answers nothing about a folate-blocking combination. This is the classic true-but-irrelevant distractor.",
        },
        {
          label: "C",
          text: "Human cells lack peptidoglycan — the combination prevents cell-wall cross-linking",
          why:
            "True statement (we have no peptidoglycan), but that is the ⑧⑨ wall rationale — the glycopeptide/β-lactam doors. Irrelevant to a folate question; the tempting part is that it is also a genuine selectivity principle.",
        },
        {
          label: "D",
          text: "Human cells have 80S ribosomes — the combination freezes the 70S small subunit",
          why:
            "Half-true misdirection: human cells do have 80S (not 70S) ribosomes, which is the ⑥⑦ selectivity rationale for ribosomal drugs — but the combination in the stem is not a ribosomal drug. Another true fact parked at the wrong door.",
        },
      ],
      reasoning:
        "Route the stem to its layer first: a fixed-dose prophylactic combination with a macrocytic shift points at the folate factory, door ①. Then apply the map's selectivity rule — the only 'human cells lack…' fact that answers a ① question is the absence of the PABA→DHF→THF pathway. Options B, C, and D are each individually true (that is what makes them tempting), but they answer ⑤, ⑧⑨, and ⑥⑦ questions respectively. The exam's design: every distractor is a real fact from the same chart, sitting one door away.",
    },
  },
  mnemonics: [
    {
      code: "MY WALL, MY FACTORY, MY BOOKS",
      meaning:
        "MY WALL — ⑧ the bricklayers (vancomycin, bacitracin) and ⑨ the weld-freezers (all five β-lactam families). MY FACTORY — ① the one-carbon plant (sulfonamides at the first step, trimethoprim at the second). MY BOOKS — ③④⑤ the three nucleic-acid doors (metronidazole shreds, rifampin silences, fluoroquinolones unhook) and ⑥⑦ the two reading doors (the 50S cap, the 30S base).",
      memorizes: "The six layers of the chart and which drug families live at each layer.",
      whenToUse: "Whenever a mechanism question or a drug-class page opens — route the layer before touching the roster.",
      clinical: "Layer-first routing converts any antimicrobial stem into a location on the cell.",
    },
    {
      code: "WE EAT IT, THEY BUILD IT",
      meaning: "Human cells import dietary folate; bacteria run the PABA → DHF → THF factory. The two steps are the two drug doors: sulfonamides at PABA→DHF, trimethoprim at DHF→THF.",
      memorizes: "Why the ① layer is the chart's showcase of selective toxicity — pathway absence in the host.",
      whenToUse: "Any TMP-SMX question, and any 'why is this drug selective for the pathogen' question.",
      clinical: "The same rule predicts the dose-dependent spillover: at high enough blocks the marrow feels the one-carbon squeeze.",
    },
    {
      code: "CAP READS, BASE BUILDS",
      meaning: "The 50S cap (⑥) carries the big-subunit drugs — chloramphenicol, clindamycin, linezolid, the macrolides, the streptogramins; the 30S base (⑦) carries the small-subunit drugs — the aminoglycosides, tigecycline, the tetracyclines.",
      memorizes: "The ⑥/⑦ ribosomal split and every family on each side of it.",
      whenToUse: "Any protein-synthesis-inhibitor question — decide the subunit before the drug.",
      clinical: "The subunit choice predicts the resistance story too: ⑦ blockers need transport-in (the aminoglycoside O₂-dependent step), ⑥ blockers do not.",
    },
  ],
  rapidReview: {
    s30: [
      "Chart doors: ① folate (sulfonamides ⊣ PABA→DHF · trimethoprim ⊣ DHF→THF) · ② membrane (daptomycin ⊕, polymyxins ⊝) · ③ DNA integrity (metronidazole, free radicals) · ④ mRNA (rifampin, RNA polymerase) · ⑤ gyrase (ciprofloxacin, ofloxacin, levofloxacin, moxifloxacin)",
      "Wall stages: ⑧ PEPTIDOGLYCAN SYNTHESIS = glycopeptides (vancomycin, bacitracin) · ⑨ PEPTIDOGLYCAN CROSS-LINKING = β-lactams (D-Ala-D-Ala analogs → PBPs → frozen welds → autolysins)",
      "β-lactam directory: penicillinase-sensitive (Penicillin G,V / ampicillin / amoxicillin) · resistant (oxacillin / nafcillin / dicloxacillin) · antipseudomonal (piperacillin + cephalosporins I-V) · carbapenems (imipenem / meropenem / ertapenem) · monobactams (aztreonam)",
      "Cephalosporin generations as printed: 1st—Cefazolin, etc · 2nd—Cefoxitin, etc · 3rd—Ceftriaxone, etc · 4th—Cefepime · 5th—Ceftaroline",
      "Ribosomal split: ⑥ 50S = chloramphenicol, clindamycin, linezolid, macrolides (azithromycin, clarithromycin, erythromycin), streptogramins (quinupristin + dalfopristin) · ⑦ 30S = aminoglycosides (gentamicin, neomycin, amikacin, tobramycin, streptomycin), tigecycline, tetracyclines (tetracycline, doxycycline, minocycline)",
    ],
    m3: [
      "Penicillin G, V card: prototype β-lactams — G is IV/IM, V is oral; D-Ala-D-Ala analogs bind PBPs (transpeptidases), block cross-linking, activate autolytic enzymes",
      "Penicillin G, V spectrum: mostly gram ⊕ (S pneumoniae, S pyogenes, Actinomyces) + gram ⊝ cocci (mainly N meningitidis) + spirochetes (mainly T pallidum); bactericidal for gram ⊕ cocci/rods, gram ⊝ cocci, spirochetes; β-lactamase sensitive",
      "Penicillin G, V adverse effects: hypersensitivity, direct Coombs ⊕ hemolytic anemia, drug-induced interstitial nephritis; resistance = β-lactamase cleaves the ring, or PBP mutations",
      "Zone glosses carried verbatim: (DNA methylation) for ① · (via free radicals) for ③ · (RNA polymerase) for ④ · gram ⊕ daptomycin vs gram ⊝ polymyxins for ②",
      "Streptogramins print as the pair Quinupristin + Dalfopristin — one roster line, two drugs, same ⑥ door",
    ],
    m10: [
      "The chart's 4 tiny rasters are marker glyphs — redrawn as vector marks; the 9 standalone dash lines in the text layer are the same markers printing as text",
      "The fl ligature set (Ciproﬂoxacin, Oﬂoxacin, Levoﬂoxacin, Moxiﬂoxacin) prints in the raw text layer — carried in quotes, normalized in the redraw",
      "The chapter banner typo MICROCIOLOGY—ANTIMICROCIALS prints twice on book 183 (raw lines 4 and 8); the split rim labels Cell m embrane / Cell wal l print at raw lines 81-82 and 99-100",
      "The folate path labels scatter across the raw layer: PABA (41), DHF (63), THF (75) — each printing inside other zones' blocks",
      "The Penicillin G, V card (raw lines 156-178) is the directory's first card — page-owned by M31; the directory continues in M32 (books 184-186)",
    ],
  },
  recall: [
    {
      q: "Walk the chart door by door, with every class roster printed on it.",
      a: "① FOLIC ACID SYNTHESIS AND REDUCTION (DNA methylation): Sulfonamides — Sulfamethoxazole, Sulfadiazine (⊣ PABA→DHF); Trimethoprim (⊣ DHF→THF). ② MEMBRANE INTEGRITY: Daptomycin (gram ⊕), Polymyxins (gram ⊝). ③ DNA INTEGRITY (via free radicals): Metronidazole. ④ mRNA SYNTHESIS (RNA polymerase): Rifampin. ⑤ GYRASE (DNA gyrase): Fluoroquinolones — Ciprofloxacin, Ofloxacin, Levofloxacin, Moxifloxacin. ⑥ 50S SUBUNIT: Chloramphenicol, Clindamycin, Linezolid; Macrolides — Azithromycin, Clarithromycin, Erythromycin; Streptogramins — Quinupristin, Dalfopristin. ⑦ 30S SUBUNIT: Aminoglycosides — Gentamicin, Neomycin, Amikacin, Tobramycin, Streptomycin; Glycylcycline — Tigecycline; Tetracyclines — Tetracycline, Doxycycline, Minocycline. ⑧ PEPTIDOGLYCAN SYNTHESIS: the Glycopeptides — Vancomycin, Bacitracin. ⑨ PEPTIDOGLYCAN CROSS-LINKING: penicillinase-sensitive penicillins — Penicillin G, V, Ampicillin, Amoxicillin; penicillinase-resistant — Oxacillin, Nafcillin, Dicloxacillin; Antipseudomonal — Piperacillin, Cephalosporins (I-V): 1st—Cefazolin, etc, 2nd—Cefoxitin, etc, 3rd—Ceftriaxone, etc, 4th—Cefepime, 5th—Ceftaroline; Carbapenems — Imipenem, Meropenem, Ertapenem; Monobactams — Aztreonam.",
    },
    {
      q: "Separate the two wall stages and their families, then explain why glycopeptides survive β-lactamase.",
      a: "⑧ PEPTIDOGLYCAN SYNTHESIS — the Glycopeptides (Vancomycin, Bacitracin) block the building of the wall itself: the bricklayers stop brick delivery, so the wall is never assembled. ⑨ PEPTIDOGLYCAN CROSS-LINKING — the β-lactams are D-Ala-D-Ala structural analogs; they bind penicillin-binding proteins (transpeptidases), block transpeptidase cross-linking of peptidoglycan, and activate autolytic enzymes — the welds stay frozen. The stages are mechanistically separate, so resistance at one door does not reach the other: β-lactamase cleaves the β-lactam ring and PBP mutations change the ⑨ target, but neither touches the ⑧ step — which is why vancomycin retains activity against β-lactamase-producing organisms, and why the terminal D-Ala-D-Lac swap (the VRE move) is the resistance that finally escapes vancomycin at its own door.",
    },
    {
      q: "Give the folate layer's two steps, its drugs, and the selectivity rule — then the two-stage version of the same idea for the wall.",
      a: "FOLATE ①: the one-carbon factory runs PABA → DHF → THF. Sulfonamides (Sulfamethoxazole, Sulfadiazine) are PABA analogs that block PABA→DHF; Trimethoprim blocks DHF→THF (dihydrofolate reductase). SELECTIVITY RULE: bacteria synthesize folate de novo; human cells import dietary folate and lack the factory — the pathway absence is the selective toxicity. The same layer-first idea generalizes: we lack peptidoglycan (so ⑧⑨ are selective), we use topoisomerases instead of bacterial DNA gyrase (so ⑤ is selective), and our ribosomes are 80S not 70S (so ⑥⑦ are selective). WALL ⑧⑨ two-stage: the glycopeptides block synthesis (the build), the β-lactams block cross-linking (the weld) — one wall zone, two printed stages, two families that never share a resistance mechanism.",
    },
    {
      q: "Recite the ribosomal split — every ⑥ 50S drug and every ⑦ 30S drug as printed.",
      a: "⑥ 50S SUBUNIT: Chloramphenicol, Clindamycin, Linezolid — then the Macrolides: Azithromycin, Clarithromycin, Erythromycin — then the Streptogramins: Quinupristin + Dalfopristin (the printed pair). ⑦ 30S SUBUNIT: the Aminoglycosides — Gentamicin, Neomycin, Amikacin, Tobramycin, Streptomycin — then Glycylcycline: Tigecycline — then the Tetracyclines: Tetracycline, Doxycycline, Minocycline. The cap reads (⑥ — the big subunit, the freeze-the-cap drugs) and the base builds (⑦ — the small subunit, the reading-head drugs); the aminoglycosides' 30S entry is transport-in dependent (the O₂-dependent step), which is why they are useless against anaerobes.",
    },
    {
      q: "Carry the Penicillin G, V card verbatim — all four printed rows plus its ownership note.",
      a: "PROTOTYPE: Penicillin G (IV and IM form), penicillin V (oral). Prototype β-lactam antibiotics. MECHANISM: D-Ala-D-Ala structural analog. Bind penicillin-binding proteins (transpeptidases). Block transpeptidase cross-linking of peptidoglycan in cell wall. Activate autolytic enzymes. CLINICAL USE: Mostly used for gram ⊕ organisms (S pneumoniae, S pyogenes, Actinomyces). Also used for gram ⊝ cocci (mainly N meningitidis) and spirochetes (mainly T pallidum). Bactericidal for gram ⊕ cocci, gram ⊕ rods, gram ⊝ cocci, and spirochetes. β-lactamase sensitive. ADVERSE EFFECTS: Hypersensitivity reactions, direct Coombs ⊕ hemolytic anemia, drug-induced interstitial nephritis. RESISTANCE: β-lactamase cleaves the β-lactam ring. Mutations in PBPs. OWNERSHIP: the card prints on book 183 (raw lines 156-178), the first row of the drug directory — page-owned by M31 and carried verbatim; the directory continues in M32 (books 184-186: the remaining penicillins, cephalosporins, carbapenems, vancomycin cards).",
    },
  ],
  crossLinks: [
    {
      subject: "Biochemistry (One-Carbon Metabolism)",
      connection:
        "The folate factory is the one-carbon cycle in pharmacologic cross-section: THF as the methyl carrier for dTMP synthesis and the DNA-methylation gloss printed on the chart — the same pathway the biochemistry chapter teaches from the enzyme side, seen here from the drug-block side.",
    },
    {
      subject: "Pharmacology (Selective Toxicity)",
      connection:
        "Every door on this map is a selective-toxicity argument: pathway absence (folate — we eat it, they build it), structure absence (peptidoglycan), enzyme divergence (gyrase, RNA polymerase), and subunit divergence (70S vs 80S) — the four standard rationales in one chart.",
    },
    {
      subject: "Microbiology — Cell Wall Structure (M1)",
      connection:
        "The wall band carries the two-stage attack on the structure M1 drew: the periplasm and PBP addresses return as the ⑨ target (transpeptidases at the membrane), and the gram ⊕/ gram ⊝ architecture explains why the membrane pair splits by gram polarity.",
    },
    {
      subject: "Infectious Disease (Empiric Therapy)",
      connection:
        "The target map is the scaffold empiric therapy hangs from: route the bug to its likely identity, then pick the door that covers it — the layer-first rule that later pages (M32-M39) turn into drug-by-drug directories.",
    },
  ],
  related: [
    {
      title: "Cell Wall Inhibitors: Penicillins, Cephalosporins, Carbapenems, Vancomycin",
      topicId: "cell-wall-inhibitors",
      note: "M32 zooms into door ⑨ and door ⑧'s clinical side: the full drug directory from book 184 onward — the β-lactam cards (Penicillin G, V's continuation), the cephalosporin generations in clinical form, and the vancomycin card. This page's first card is the template M32 repeats.",
    },
    {
      title: "Protein Synthesis Inhibitors: 30S, 50S & Beyond",
      topicId: "protein-synthesis-inhibitors",
      note: "M33 zooms into doors ⑥⑦: the 50S/30S rosters in clinical form, the aminoglycoside transport-in step, and the -cidal vs -static split the ribosomal doors create.",
    },
    {
      title: "DNA, RNA & Folate Inhibitors",
      topicId: "dna-rna-folate-inhibitors",
      note: "M34 zooms into doors ①③④⑤: the fluoroquinolones, rifampin, metronidazole, and the TMP-SMX pair in clinical form — the nucleic-acid and folate layers of this map.",
    },
    {
      title: "Bacterial structures (M1)",
      topicId: "bacterial-structures",
      note: "The map's cell side — the wall band, the membrane band, and the periplasm — is M1's layered-envelope anatomy in pharmacologic use: every door on this chart sits on a structure M1 drew.",
    },
  ],
};
