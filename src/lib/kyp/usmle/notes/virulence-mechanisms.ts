import type { KypUsMLENote } from "../types";

// Microbiology — Basic Bacteriology banner (M-batch 6).
// Source: First Aid 2026, Part 1 pdf 149 / book 127
// (Bacterial virulence factors — capsule, Protein A, IgA protease, M protein
//  + the antibiotic resistance mechanisms figure: efflux/uptake, enzymatic
//  inactivation, drug target modification)

export const virulenceMechanisms: KypUsMLENote = {
  id: "virulence-mechanisms",
  title: "Virulence Mechanisms & Antimicrobial Resistance Overview",
  subtitle:
    "The immune-evasion arsenal and the drug-proofing geometry. VIRULENCE FACTORS promote evasion of the host immune response: capsular polysaccharide — a highly charged, hydrophilic structure acting as a barrier to phagocytosis and complement-mediated lysis (a major determinant of virulence); Protein A (S aureus) — binds the Fc region of IgG, preventing opsonization and phagocytosis; IgA protease (S pneumoniae, H influenzae type b, Neisseria — SHiN) — cleaves IgA, allowing bacteria to adhere to and colonize mucous membranes; M protein (group A streptococci) — helps prevent phagocytosis, with sequence homology to human cardiac myosin (molecular mimicry) that possibly underlies the autoimmune response seen in acute rheumatic fever. ANTIBIOTIC RESISTANCE MECHANISMS run on three geometries: increased efflux and decreased uptake (tetracyclines, sulfonamides, fluoroquinolones — the drug never accumulates); enzymatic inactivation by drug cleavage (penicillin G and V, penicillinase-sensitive penicillins, cephalosporins, carbapenems — the β-lactamases) and drug modification (aminoglycosides, chloramphenicol); and drug target modification — rRNA (linezolid, macrolides), enzyme (penicillinase-resistant penicillins, cephalosporins, sulfonamides, fluoroquinolones), and cell wall (vancomycin).",
  subject: "Microbiology",
  system: "Section II · High-Yield General Principles — Basic Bacteriology",
  pilotCategory:
    "Basic bacteriology — virulence factors that evade host immunity (capsule, Protein A, IgA protease, M protein) + the three resistance geometries (efflux/decreased uptake, enzymatic inactivation, target modification) and their drug rosters",
  difficulty: 2,
  readTime: 9,
  sourceRef: "First Aid 2026, Part 1 pp. 127–127 (Bacterial virulence factors, Antibiotic resistance mechanisms)",
  tags: [
    "virulence factors",
    "immune evasion",
    "capsular polysaccharide",
    "hydrophilic",
    "complement-mediated lysis",
    "major determinant of virulence",
    "Protein A",
    "Fc region of IgG",
    "opsonization",
    "S aureus",
    "IgA protease",
    "mucous membranes",
    "SHiN",
    "S pneumoniae",
    "H influenzae type b",
    "Neisseria",
    "M protein",
    "group A streptococci",
    "cardiac myosin",
    "molecular mimicry",
    "acute rheumatic fever",
    "antibiotic resistance mechanisms",
    "increased efflux",
    "decreased uptake",
    "tetracyclines",
    "sulfonamides",
    "fluoroquinolones",
    "enzymatic inactivation",
    "drug cleavage",
    "penicillin G",
    "penicillin V",
    "penicillinase-sensitive penicillins",
    "cephalosporins",
    "carbapenems",
    "beta-lactamases",
    "drug modification",
    "aminoglycosides",
    "chloramphenicol",
    "drug target modification",
    "rRNA",
    "linezolid",
    "macrolides",
    "penicillinase-resistant penicillins",
    "vancomycin",
    "cell wall",
    "ribosome",
    "mRNA",
    "DNA",
    "enzyme",
  ],
  core: {
    what: "BACTERIAL VIRULENCE FACTORS promote evasion of the host immune response. CAPSULAR POLYSACCHARIDE: highly charged, hydrophilic structure — acts as a barrier to phagocytosis and complement-mediated lysis; major determinant of virulence. PROTEIN A: binds the Fc region of IgG — prevents opsonization and phagocytosis; expressed by S aureus. IgA PROTEASE: enzyme that cleaves IgA, allowing bacteria to adhere to and colonize mucous membranes; secreted by S pneumoniae, H influenzae type b, and Neisseria (SHiN). M PROTEIN: helps prevent phagocytosis; expressed by group A streptococci; sequence homology with human cardiac myosin (molecular mimicry) possibly underlies the autoimmune response seen in acute rheumatic fever. ANTIBIOTIC RESISTANCE MECHANISMS: INCREASED EFFLUX, DECREASED UPTAKE — tetracyclines, sulfonamides, fluoroquinolones. ENZYMATIC INACTIVATION — drug cleavage: penicillin G, V; penicillinase-sensitive penicillins; cephalosporins; carbapenems (the β-lactamases); drug modification: aminoglycosides, chloramphenicol. DRUG TARGET MODIFICATION — rRNA: linezolid, macrolides; enzyme: penicillinase-resistant penicillins, cephalosporins, sulfonamides, fluoroquinolones; cell wall: vancomycin.",
    why: "Both halves of this page are answers to the same question — how does a bacterium defeat something bigger than itself? The virulence factors defeat the immune system's reach: the capsule's charged hydrophilic shell blocks phagocytes and complement (the same anti-phagocytic coat of M1, now with the complement-lysis barrier made explicit); Protein A cheats opsonization by grabbing IgG's Fc end and presenting it the wrong way round; IgA protease dissolves the mucosal antibody line so SHiN organisms colonize mucous membranes; and M protein's anti-phagocytic job comes with the mimicry cost — sequence homology with cardiac myosin turns a structural disguise into the autoimmune response of acute rheumatic fever. The resistance figure answers the mirror question for drugs: tetracyclines, sulfonamides, and fluoroquinolones are defeated by efflux and closed entry (concentration never accumulates); the β-lactamases cleave the penicillin family (penicillin G/V, the penicillinase-sensitive penicillins, cephalosporins, carbapenems) while modifying enzymes disarm aminoglycosides and chloramphenicol; and target modification re-arms the cell itself — methylated rRNA (linezolid, macrolides), altered target enzymes (the penicillinase-resistant penicillins, cephalosporins, sulfonamides, fluoroquinolones), and the altered wall target (vancomycin).",
    keyIdea: "Read the left half as immune evasion and the right half as drug evasion — four factors, three geometries. EVASION: capsule (charged + hydrophilic → blocks phagocytosis AND complement-mediated lysis — the major virulence determinant); Protein A (S aureus: binds Fc of IgG → no opsonization); IgA protease (SHiN — S pneumoniae, H influenzae type b, Neisseria: cleaves IgA → mucosal colonization); M protein (group A strep: anti-phagocytic + cardiac-myosin homology → molecular mimicry → acute rheumatic fever). RESISTANCE GEOMETRY: ① efflux/uptake (tetracyclines, sulfonamides, fluoroquinolones — the dose never accumulates); ② enzymatic inactivation (drug CLEAVAGE by the β-lactamases: penicillin G/V, penicillinase-sensitive penicillins, cephalosporins, carbapenems; drug MODIFICATION: aminoglycosides, chloramphenicol); ③ target modification (rRNA: linezolid, macrolides; enzyme: penicillinase-resistant penicillins, cephalosporins, sulfonamides, fluoroquinolones; cell wall: vancomycin). The cell anatomy underneath: cell wall, ribosome with rRNA, mRNA, DNA, enzyme — the addresses the three mechanisms act on.",
  },
  mechanisms: [
    {
      id: "immune-evasion-arsenal",
      title: "Four factors that defeat the immune system's reach",
      context: "From the virulence table to the evasion diagram",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A bacterium must survive phagocytes, complement, and antibodies to cause disease",
            sublabel: "Input — the immune pressures each factor defeats.",
            variant: "input",
          },
          {
            id: "s1",
            label: "CAPSULE: highly charged, hydrophilic polysaccharide shell → barrier to phagocytosis AND complement-mediated lysis",
            sublabel: "Process — M1's coat with the complement barrier explicit: a major determinant of virulence.",
            variant: "process",
          },
          {
            id: "s2",
            label: "PROTEIN A (S aureus): binds the Fc region of IgG — the antibody points the wrong way, so opsonization and phagocytosis fail",
            sublabel: "Process — cheating opsonization at the Fc end.",
            variant: "process",
          },
          {
            id: "s3",
            label: "IgA PROTEASE (SHiN — S pneumoniae, H influenzae type b, Neisseria): cleaves secretory IgA → adherence to and colonization of mucous membranes",
            sublabel: "Process — dissolving the mucosal antibody line.",
            variant: "process",
          },
          {
            id: "o1",
            label: "M PROTEIN (group A streptococci): anti-phagocytic — and its sequence homology with human cardiac myosin (molecular mimicry) possibly underlies the autoimmune response seen in acute rheumatic fever",
            sublabel: "Output — the disguise that becomes an autoimmune cost: evasion turning into cross-reactivity.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "phagocytes + complement" },
          { from: "s1", to: "s2", label: "opsonization" },
          { from: "s2", to: "s3", label: "mucosal IgA" },
          { from: "s3", to: "o1", label: "phagocytosis + mimicry" },
        ],
        caption:
          "The four factors divide the immune system's reach among themselves. The capsular polysaccharide's charged, hydrophilic shell stops phagocytes from gripping and complement from lysing — the printed 'major determinant of virulence.' Protein A inverts opsonization: by binding the Fc region of IgG it leaves the antibody's antigen-binding end facing outward and its opsonizing end hidden — the phagocyte's Fc receptor finds nothing to grab (the evasion diagram's blocked Fc-receptor arrow). IgA protease removes the mucosal gate: with secretory IgA cleaved, the SHiN organisms (S pneumoniae, H influenzae type b, Neisseria) adhere to and colonize mucous membranes. M protein's anti-phagocytic job is shared with the capsule — and its sequence homology with human cardiac myosin is the page's deepest teaching: molecular mimicry, the structural disguise by which group A streptococci evade the immune system's recognition, becomes the cross-reactivity that underlies the autoimmune response of acute rheumatic fever (the carditis of the joint infection's aftermath).",
      },
    },
    {
      id: "resistance-geometry",
      title: "Three geometries of drug defeat, mapped onto the cell",
      context: "From the resistance figure to the pharmacology bridge",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A drug must (1) accumulate, (2) stay intact, and (3) find its target — resistance removes any one of the three",
            sublabel: "Input — the drug's journey defines the mechanism classes.",
            variant: "input",
          },
          {
            id: "s1",
            label: "CONCENTRATION FAILS: increased efflux + decreased uptake — tetracyclines, sulfonamides, fluoroquinolones never reach effective intracellular levels",
            sublabel: "Process — geometry ① at the membrane: pumps out, channels shut.",
            variant: "process",
          },
          {
            id: "s2",
            label: "STRUCTURE FAILS: enzymatic inactivation — drug CLEAVAGE (penicillin G, V; penicillinase-sensitive penicillins; cephalosporins; carbapenems — the β-lactamases) and drug MODIFICATION (aminoglycosides, chloramphenicol)",
            sublabel: "Process — geometry ② in the periplasm lobby (M1's β-lactamase address): the drug arrives intact but is disarmed before the target.",
            variant: "process",
          },
          {
            id: "s3",
            label: "RECOGNITION FAILS: drug target modification — rRNA (linezolid, macrolides); enzyme (penicillinase-resistant penicillins, cephalosporins, sulfonamides, fluoroquinolones); cell wall (vancomycin)",
            sublabel: "Process — geometry ③ inside and on the cell: the target changes shape; the lock no longer fits.",
            variant: "process",
          },
          {
            id: "o1",
            label: "OUTPUT — the same drug rosters read as mechanism classes: the exam's question 'which mechanism defeats macrolides' answers 'target modification (rRNA methylation)' — and the antimicrobials chapter's resistance sections return here",
            sublabel: "Output — the overview figure that the entire antimicrobial section hangs from.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "accumulate" },
          { from: "s1", to: "s2", label: "stay intact" },
          { from: "s2", to: "s3", label: "find the target" },
          { from: "s3", to: "o1", label: "classified" },
        ],
        caption:
          "The resistance figure is the drug's journey told in reverse. To work, a drug must accumulate (cross the envelope), remain intact (survive the enzymes), and be recognized (fit its target). Each mechanism class deletes one leg. Efflux and decreased uptake delete accumulation — tetracyclines, sulfonamides, and fluoroquinolones are pumped out or kept out, so their intracellular concentration never crosses the threshold. Enzymatic inactivation deletes integrity: the β-lactamases cleave the entire penicillin family that lacks the steric shield (penicillin G and V, the penicillinase-SENSITIVE penicillins, cephalosporins, carbapenems — the cleavage list), and modifying enzymes disarm the non-β-lactams (aminoglycosides, chloramphenicol). Target modification deletes recognition: methylated rRNA rejects linezolid and macrolides; altered target enzymes reject the penicillinase-RESISTANT penicillins, cephalosporins, sulfonamides, and fluoroquinolones; and the altered wall target rejects vancomycin. The cell schematic beneath (cell wall; ribosome with rRNA; mRNA; DNA; enzyme) is the address list the three geometries act on — the periplasm lobby of M1 carrying the cleavage enzymes, and the target modifications re-arming the wall and enzymes.",
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "virulence-resistance-map",
      title: "The evasion arsenal and the resistance geometry — two panels, one map",
      caption:
        "An original KYP two-panel redraw: the immune-evasion arsenal (capsular polysaccharide, Protein A, IgA protease, M protein — each with mechanism, consequence, and organism) beside the resistance geometry (efflux/uptake, enzymatic inactivation by cleavage + modification, target modification across rRNA/enzyme/cell wall) on a bacterial-cell schematic with the anatomy labels (cell wall, ribosome with rRNA, mRNA, DNA, enzyme).",
      notice:
        "Pure vector page — no printed photos. The source's own typo ('Completment-mediated phagocytosis' in the evasion diagram) is documented in the manifest and NOT reproduced here; the scrambled text-layer wall label ('Ce l lw a ll' = 'Cell wall') is likewise a text-layer artifact, not print.",
    },
    {
      kind: "table",
      title: "The virulence factors — verbatim",
      intro: "The source's table (factor | description), verbatim.",
      columns: ["Factor", "Description (verbatim)"],
      rows: [
        ["Capsular polysaccharide", "Highly charged, hydrophilic structure. Acts as barrier to phagocytosis and complement-mediated lysis. Major determinant of virulence."],
        ["Protein A", "Binds Fc region of IgG. Prevents opsonization and phagocytosis. Expressed by S aureus."],
        ["IgA protease", "Enzyme that cleaves IgA, allowing bacteria to adhere to and colonize mucous membranes. Secreted by S pneumoniae, H influenzae type b, and Neisseria (SHiN)."],
        ["M protein", "Helps prevent phagocytosis. Expressed by group A streptococci. Sequence homology with human cardiac myosin (molecular mimicry); possibly underlies the autoimmune response seen in acute rheumatic fever."],
      ],
      caption:
        "Read each row as one immune pressure defeated: capsule → phagocytosis + complement lysis; Protein A → opsonization (Fc of IgG); IgA protease → mucosal IgA (the SHiN set); M protein → phagocytosis, with the cardiac-myosin mimicry cost (acute rheumatic fever).",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "Mimicry, and the three ways a drug fails",
      body: "THE MIMICRY COST: M protein's sequence homology with human cardiac myosin is the mechanism beneath acute rheumatic fever's autoimmune response — group A strep's pharyngitis leaves carditis because the evasion disguise (molecular mimicry) is also a cross-reactivity; the extension is the same logic driving post-strep glomerulonephritis's different immune complex route. THE CONCENTRATION FAILURES: tetracyclines, sulfonamides, and fluoroquinolones are defeated by efflux and closed entry — the drugs arrive but never accumulate. THE STRUCTURE FAILURES: the β-lactamases cleave every β-lactam on the cleavage list (penicillin G/V, the penicillinase-SENSITIVE penicillins, cephalosporins, carbapenems) — the reason penicillinase-resistant penicillins (and later-generation agents) exist on the OTHER list; modifying enzymes disarm aminoglycosides and chloramphenicol. THE RECOGNITION FAILURES: methylated rRNA rejects linezolid and macrolides; altered target enzymes reject the penicillinase-RESISTANT penicillins (with cephalosporins, sulfonamides, and fluoroquinolones); the altered wall target rejects vancomycin. Every 'which mechanism defeats this drug' question in the antimicrobials chapter is answered from this figure.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "An 8-year-old develops migratory polyarthritis and a new murmur two weeks after a sore throat; antistreptolysin O titer is elevated, and the echocardiogram shows valvulitis.",
        discriminator: "Post-streptococcal autoimmunity after pharyngitis",
        concept: "M protein molecular mimicry — acute rheumatic fever",
        answer:
          "M protein (group A streptococci) has sequence homology with human cardiac myosin — molecular mimicry that possibly underlies the autoimmune response seen in acute rheumatic fever. The evasion factor doubles as the autoimmunity mechanism: the cross-reactive attack lands on the heart (carditis, the new murmur) after the pharyngitis, with ASO as the infection marker.",
      },
      {
        stem: "A blood culture grows S aureus from a patient with a prosthetic valve endocarditis; the laboratory notes that the organism resists opsonization in a serum-killing assay, and a surface protein is isolated that binds the Fc portion of IgG.",
        discriminator: "S aureus + Fc-binding surface protein + failed opsonization",
        concept: "Protein A — the anti-opsonin",
        answer:
          "Protein A binds the Fc region of IgG: the antibody attaches by its Fc end and presents its antigen-binding end outward, so the phagocyte's Fc receptor finds no opsonizing signal — opsonization and phagocytosis fail. Expressed by S aureus (the printed row), it is the immune-evasion half of this page's arsenal.",
      },
      {
        stem: "A patient on long-term suppressive therapy grows a resistant isolate; the laboratory reports that macrolide resistance maps to methylation of the ribosomal RNA binding site.",
        discriminator: "rRNA methylation defeating a ribosomal drug",
        concept: "Drug target modification — the rRNA row",
        answer:
          "Macrolide resistance by rRNA methylation (and linezolid resistance by the same target-modification route) is the recognition failure: the drug arrives intact but the target has changed shape — methylated rRNA no longer binds the macrolide. The three geometry classes: efflux/uptake (tetracyclines, sulfonamides, fluoroquinolones), enzymatic inactivation (the β-lactamase cleavage list + aminoglycoside/chloramphenicol modification), and target modification (rRNA: linezolid/macrolides; enzyme: the resistant-target set; cell wall: vancomycin).",
      },
    ],
    traps: [
      {
        a: "Protein A binds the antigen-binding (Fab) region of IgG",
        b: "Protein A binds the Fc region of IgG — leaving the antibody unable to opsonize",
        whyConfused: "An immune-evasion protein feels like it should block antigen binding.",
        keyDifference:
          "The trick is the direction of binding: Fc-bound IgG is attached 'backwards' — the opsonizing end is occupied by Protein A and the Fab end points uselessly outward. Phagocytes read the Fc end; Protein A hides it. The printed row: 'Binds Fc region of IgG. Prevents opsonization and phagocytosis.'",
        clue: "Any Protein A / S aureus opsonization question.",
      },
      {
        a: "Macrolides are defeated by increased efflux",
        b: "In this figure macrolides sit under DRUG TARGET MODIFICATION (rRNA) — the efflux/uptake list is tetracyclines, sulfonamides, fluoroquinolones",
        whyConfused: "All three classes sound like generic resistance.",
        keyDifference:
          "The figure assigns each drug to one geometry: efflux/uptake → tetracyclines, sulfonamides, fluoroquinolones; enzymatic inactivation → the β-lactam cleavage list (penicillin G/V, penicillinase-sensitive penicillins, cephalosporins, carbapenems) + aminoglycosides and chloramphenicol by modification; target modification → linezolid and macrolides (rRNA), the resistant-target set (enzyme), and vancomycin (cell wall). The exam swaps drugs between the lists — the lists are the answer bank.",
        clue: "Any 'which mechanism' drug-matching question.",
      },
      {
        a: "IgA protease enables bloodstream invasion by cleaving antibodies",
        b: "IgA protease cleaves secretory IgA at MUCOSAL surfaces — allowing adherence to and colonization of mucous membranes",
        whyConfused: "Protease + antibody sounds like systemic immune defeat.",
        keyDifference:
          "The IgA protease story is local: the SHiN organisms (S pneumoniae, H influenzae type b, Neisseria) use it to colonize mucous membranes — the printed mechanism. It defeats the mucosal gate (adherence and colonization), not serum immunity; the systemic infections those organisms cause follow from the colonization, not from cleaving circulating IgA.",
        clue: "Any SHiN-organism mucosal-colonization question.",
      },
    ],
    pivots: [
      {
        lookAlike: "Penicillinase-SENSITIVE vs penicillinase-RESISTANT penicillins (the cleavage list vs the target-modification list)",
        differentiator: "Which geometry defeats which list",
        correctPath:
          "CLEAVAGE list (enzymatic inactivation): penicillin G, V; the penicillinase-SENSITIVE penicillins; cephalosporins; carbapenems — β-lactamases hydrolyze them. TARGET-MODIFICATION list: the penicillinase-RESISTANT penicillins (with cephalosporins, sulfonamides, fluoroquinolones) — resistance there comes from altered targets, not cleavage. The two lists are the figure's trickiest pair: the same drug class appears on both sides of the β-lactamase boundary.",
      },
      {
        lookAlike: "Immune evasion (this page) vs culture failure (M3) vs phagocyte failure (M5's CGD)",
        differentiator: "Who is defeating whom",
        correctPath:
          "VIRULENCE FACTORS (this page) defeat the host's immune reach: capsule vs phagocytosis/complement, Protein A vs opsonization, IgA protease vs mucosal IgA, M protein vs phagocytosis (+ mimicry). RESISTANCE (this page's second half) defeats the drug: efflux/uptake, inactivation, target modification. CULTURE requirements (M3) are the lab's problem, and CGD (M5) is the host's defect — four different failure axes that the exam deliberately crosses.",
      },
    ],
    miniCase: {
      vignette:
        "A 9-year-old girl is evaluated for two weeks of low-grade fever, fatigue, and painful swelling of the knees and ankles that moved from one joint to the other over several days. Three weeks earlier she had a sore throat that was not treated. Examination now reveals a temperature of 37.8 °C, an apical systolic murmur that was not present on last year's physical, subcutaneous nodules over the extensor surfaces, and a marginated ring-shaped rash on the trunk. Antistreptolysin O titer is markedly elevated; throat culture is negative.",
      question:
        "Which virulence factor most likely initiated the process that produced this patient's carditis?",
      options: [
        {
          label: "A",
          text: "M protein, whose sequence homology with human cardiac myosin underlies the autoimmune response",
          correct: true,
          why: "Correct. This is acute rheumatic fever with carditis: migratory polyarthritis, new murmur, subcutaneous nodules, erythema marginatum, elevated ASO after untreated group A streptococcal pharyngitis. M protein's molecular mimicry — sequence homology with human cardiac myosin — is the printed mechanism that possibly underlies the autoimmune response: the cross-reactive immunity that follows the pharyngitis lands on the heart.",
        },
        {
          label: "B",
          text: "Capsular polysaccharide, acting as a barrier to phagocytosis and complement-mediated lysis",
          why: "The capsule is real (a major virulence determinant) and group A strep carries M protein rather than the classic capsule story — but more directly: the question asks for the factor that initiates AUTOIMMUNITY, and the capsule defeats phagocytes/complement without any cross-reactivity. The distractor tests whether the mimicry mechanism is distinguished from the barrier mechanism.",
        },
        {
          label: "C",
          text: "Protein A, binding the Fc region of IgG and preventing opsonization",
          why: "Protein A is real immune evasion — but it is expressed by S AUREUS, not group A streptococci, and it blocks opsonization rather than causing cross-reactive autoimmunity. The distractor swaps the organism and the mechanism class.",
        },
        {
          label: "D",
          text: "IgA protease, cleaving IgA at mucosal surfaces",
          why: "IgA protease is real (the SHiN organisms — S pneumoniae, H influenzae type b, Neisseria) and promotes mucosal colonization — but it has no role in post-streptococcal autoimmunity, and group A strep is not on the SHiN list. The distractor tests the organism assignments of the evasion arsenal.",
        },
        {
          label: "E",
          text: "β-lactamase, cleaving the penicillin prescribed for the pharyngitis",
          why: "β-lactamase is a real resistance enzyme (this page's second half) — but the untreated pharyngitis in the stem was never prescribed penicillin ('was not treated'), and enzyme resistance causes nothing autoimmune. The distractor crosses the page's two halves: drug evasion is not immune evasion.",
        },
      ],
      reasoning:
        "The vignette assembles Jones-criteria acute rheumatic fever: migratory polyarthritis, carditis (the new murmur), subcutaneous nodules, erythema marginatum, and elevated ASO after untreated group A pharyngitis. The mechanism question is this page's deepest row: M protein's molecular mimicry — sequence homology with human cardiac myosin — turns the bacterium's anti-phagocytic disguise into the cross-reactive autoimmune response that lands on the heart. Each distractor pairs a real virulence factor or resistance enzyme with the wrong mechanism class, testing whether mimicry is understood as autoimmunity's entry point.",
    },
  },
  mnemonics: [
    {
      code: "\u201cFour ways to hide from immunity: wear a charged coat (capsule), wear the antibody backwards (Protein A), dissolve the gate (IgA protease), or wear the host's own face (M protein).\u201d",
      meaning:
        "KYP's key for the evasion arsenal: capsule = charged hydrophilic barrier to phagocytosis AND complement lysis; Protein A = Fc-binding (IgG points backwards — no opsonization, S aureus); IgA protease = mucosal IgA cleaved (SHiN colonizes mucous membranes); M protein = anti-phagocytic AND cardiac-myosin homology (molecular mimicry → acute rheumatic fever, group A strep).",
      memorizes: "The four virulence factors and their mechanisms",
      whenToUse: "Any immune-evasion or virulence-factor question.",
      clinical: "Post-strep carditis = mimicry; S aureus prosthetic endocarditis = Protein A; SHiN mucosal disease = IgA protease.",
    },
    {
      code: "\u201cA drug must arrive, survive, and fit. Resistance removes one: never arrives (efflux), doesn't survive (cleavage/modification), no longer fits (target changed).\u201d",
      meaning:
        "KYP's key for the resistance geometry: ARRIVE — efflux/uptake defeats tetracyclines, sulfonamides, fluoroquinolones. SURVIVE — β-lactamases cleave penicillin G/V + penicillinase-sensitive penicillins + cephalosporins + carbapenems; modifying enzymes disarm aminoglycosides and chloramphenicol. FIT — rRNA methylation rejects linezolid/macrolides; altered enzymes reject penicillinase-RESISTANT penicillins/cephalosporins/sulfonamides/fluoroquinolones; altered wall target rejects vancomycin.",
      memorizes: "The three resistance classes and their drug lists",
      whenToUse: "Any resistance-mechanism matching question.",
      clinical: "The antimicrobials chapter's resistance sections are this figure expanded.",
    },
    {
      code: "\u201cThe cleavage list and the target list split at the β-lactamase line: sensitive penicillins get cleaved; resistant ones stop fitting.\u201d",
      meaning:
        "KYP's key for the figure's trickiest pair: penicillinase-SENSITIVE penicillins (with penicillin G/V, cephalosporins, carbapenems) sit on the enzymatic-inactivation list; the penicillinase-RESISTANT penicillins sit on the target-modification list (with sulfonamides and fluoroquinolones — altered targets). Same drug family, two geometries.",
      memorizes: "Sensitive vs resistant penicillins — which list, which mechanism",
      whenToUse: "Any penicillin-resistance mechanism question.",
      clinical: "MRSA's penicillin resistance is target-side (altered PBP — extension), not cleavage-side.",
    },
  ],
  rapidReview: {
    s30: [
      "Virulence factors promote evasion of the host immune response",
      "Capsular polysaccharide: charged, hydrophilic — anti-phagocytosis + anti-complement lysis",
      "Protein A (S aureus): binds Fc of IgG — no opsonization",
      "IgA protease (SHiN): cleaves IgA — mucosal colonization",
      "M protein (group A strep): anti-phagocytic + cardiac-myosin homology (molecular mimicry)",
    ],
    m3: [
      "M protein mimicry possibly underlies the autoimmune response of acute rheumatic fever",
      "Efflux/uptake list: tetracyclines, sulfonamides, fluoroquinolones",
      "Cleavage list: penicillin G, V; penicillinase-sensitive penicillins; cephalosporins; carbapenems (β-lactamases)",
      "Modification list: aminoglycosides, chloramphenicol",
      "Target modification: rRNA (linezolid, macrolides); enzyme (penicillinase-resistant penicillins, cephalosporins, sulfonamides, fluoroquinolones); cell wall (vancomycin)",
    ],
    m10: [
      "Capsule = major determinant of virulence (barrier to phagocytosis AND complement-mediated lysis)",
      "Protein A's IgG binds backwards (Fc end occupied) — the opsonizing end is hidden",
      "IgA protease = the SHiN organisms' mucosal gate-crash (adherence + colonization)",
      "Drug must arrive, survive, fit — resistance removes one leg",
      "Sensitive penicillins → cleavage list; resistant penicillins → target-modification list",
    ],
  },
  recall: [
    {
      q: "State the four virulence factors with their mechanisms and organisms.",
      a: "Capsular polysaccharide — highly charged, hydrophilic structure; barrier to phagocytosis and complement-mediated lysis; major determinant of virulence (the encapsulated set). Protein A — binds Fc region of IgG; prevents opsonization and phagocytosis; S aureus. IgA protease — cleaves IgA, allowing adherence to and colonization of mucous membranes; S pneumoniae, H influenzae type b, Neisseria (SHiN). M protein — helps prevent phagocytosis; group A streptococci; sequence homology with human cardiac myosin (molecular mimicry) possibly underlying the autoimmune response of acute rheumatic fever.",
    },
    {
      q: "Give the three resistance geometries with their drug lists.",
      a: "Increased efflux / decreased uptake: tetracyclines, sulfonamides, fluoroquinolones. Enzymatic inactivation — drug cleavage: penicillin G, V; penicillinase-sensitive penicillins; cephalosporins; carbapenems (the β-lactamases); drug modification: aminoglycosides, chloramphenicol. Drug target modification — rRNA: linezolid, macrolides; enzyme: penicillinase-resistant penicillins, cephalosporins, sulfonamides, fluoroquinolones; cell wall: vancomycin.",
    },
    {
      q: "Which mechanism underlies acute rheumatic fever's carditis, and from which factor?",
      a: "Molecular mimicry: M protein's sequence homology with human cardiac myosin — the group A streptococcal factor whose evasion disguise becomes cross-reactive autoimmunity (possibly underlying the autoimmune response seen in acute rheumatic fever).",
    },
    {
      q: "Contrast the penicillinase-sensitive and penicillinase-resistant penicillins' resistance geometry.",
      a: "The sensitive penicillins (with penicillin G, V, cephalosporins, carbapenems) are defeated by enzymatic inactivation — β-lactamase cleavage. The resistant penicillins sit on the target-modification list (with cephalosporins, sulfonamides, fluoroquinolones as altered target enzymes): resistance arises from altered targets rather than cleavage.",
    },
    {
      q: "How does Protein A defeat opsonization?",
      a: "It binds the Fc region of IgG — the antibody attaches by its opsonizing end, leaving the antigen-binding end pointing outward; the phagocyte's Fc receptor finds no free Fc to grab, so opsonization and phagocytosis fail (expressed by S aureus).",
    },
  ],
  related: [
    {
      title: "Immunodeficiency Infection Patterns",
      topicId: "immunodeficiency-infection-patterns",
      note: "The evasion arsenal is the pathogen side of E38's matrix — each factor defeats a defense layer whose failure (in deficiency) opens the same doors.",
    },
    {
      title: "Complement Disorders",
      topicId: "complement-disorders",
      note: "The capsule's barrier to complement-mediated lysis is the same axis E30 mapped — the charged coat is why the MAC's punch misses the encapsulated.",
    },
    {
      title: "Bacterial Structures: Anatomy & Function",
      topicId: "bacterial-structures",
      note: "The resistance geometry sits on M1's addresses: the periplasm lobby carries the β-lactamases (cleavage), and the wall/target modifications re-arm the structures M1 introduced.",
    },
  ],
  crossLinks: [
    {
      subject: "Pharmacology (Antimicrobials)",
      connection: "This page is the antimicrobials chapter's resistance index: every 'which mechanism defeats this drug' question expands one of the three geometries — efflux/uptake, inactivation (cleavage + modification), or target modification.",
    },
    {
      subject: "Immunology (Autoimmunity)",
      connection: "M protein's molecular mimicry is the canonical infection-triggered autoimmunity: homology with cardiac myosin turns evasion into cross-reactive carditis — the mechanism behind acute rheumatic fever's Jones criteria.",
    },
    {
      subject: "Rheumatology (Post-Infectious)",
      connection: "The migratory polyarthritis of acute rheumatic fever reads this page directly: untreated group A strep pharyngitis, ASO rise, then the cross-reactive syndrome.",
    },
  ],
};
