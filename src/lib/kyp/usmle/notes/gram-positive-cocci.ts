import type { KypUsMLENote } from "../types";

// Microbiology — Clinical Bacteriology banner (M-batch 9).
// Source: First Aid 2026, Part 1 pdf 154-157 / book 132-135
// (the Gram-positive lab algorithm tree + hemolysis definitions + the
//  staphylococci [aureus/epidermidis/saprophyticus] + the streptococci
//  [pneumoniae/viridans/pyogenes/agalactiae/gallolyticus] + the enterococci,
//  with the B-anthracis bridge section that closes book 135)

export const gramPositiveCocci: KypUsMLENote = {
  id: "gram-positive-cocci",
  title: "Gram-Positive Cocci: Staphylococcus & Streptococcus",
  subtitle:
    "The most-tested organism block in bacteriology, organized by the lab algorithm. CATALASE splits the gram ⊕ cocci: negative in pairs or chains = Streptococcus; positive in clusters = Staphylococcus. The staphylococci split by COAGULASE (S aureus: coagulase ⊕, β-hemolytic, Protein A binds Fc-IgG; S epidermidis and S saprophyticus: coagulase ⊝) and then by NOVOBIOCIN (epidermidis sensitive — prosthetic-device biofilms; saprophyticus resistant — UTI in young females). The streptococci split by HEMOLYSIS: α-partial-green (optochin+bile: S pneumoniae [encapsulated, lancet diplococci, MOPS] vs viridans [mutans/mitis caries, sanguinis endocarditis]); β-complete-clear (bacitracin+PYR: group A S pyogenes [M protein, pyogenic/toxigenic/immunologic] vs group B S agalactiae [Babies, CAMP factor, hippurate ⊕]); γ-none (6.5% NaCl: Enterococcus [E faecalis, E faecium — intrinsically penicillin-G-resistant, VRE] vs nonenterococcus S gallolyticus [bacteremia, endocarditis, colon cancer]). The B-anthracis bridge (the bacilli section beginning on this note's final page): the three-component anthrax toxin — protective antigen, lethal factor (MAP-kinase inhibition → macrophage apoptosis), edema factor (adenylyl cyclase → ↑ cAMP) — with the poly-D-glutamate capsule and the medusa-head colonies.",
  subject: "Microbiology",
  system: "Section II · High-Yield General Principles — Clinical Bacteriology",
  pilotCategory:
    "Clinical bacteriology — gram-positive cocci: the catalase/coagulase/hemolysis decision tree; the staphylococci (aureus [TSST-1, scalded skin, MRSA/PVL], epidermidis [novobiocin-sensitive biofilms], saprophyticus [novobiocin-resistant UTI]); the streptococci (pneumoniae [MOPS, optochin, conjugate vaccines], viridans [optochin-resistant caries/endocarditis], pyogenes [bacitracin-sensitive, M protein, ASO], agalactiae [CAMP, babies], gallolyticus [colon cancer]); the enterococci (6.5% NaCl, VRE); plus the B-anthracis bridge",
  difficulty: 2,
  readTime: 12,
  sourceRef: "First Aid 2026, Part 1 pp. 132–135 (Gram-positive lab algorithm; Hemolytic bacteria; Staphylococcus; Streptococcus; Enterococci; Bacillus anthracis bridge)",
  tags: [
    "gram-positive cocci",
    "lab algorithm",
    "catalase",
    "coagulase",
    "hemolysis",
    "alpha hemolysis",
    "beta hemolysis",
    "gamma hemolysis",
    "optochin",
    "bile solubility",
    "bacitracin",
    "PYR",
    "novobiocin",
    "6.5% NaCl",
    "CAMP test",
    "hippurate",
    "mannitol fermentation",
    "Staphylococcus aureus",
    "Protein A",
    "TSST-1",
    "scalded skin syndrome",
    "exfoliative toxin",
    "MRSA",
    "mecA",
    "Panton-Valentine leukocidin",
    "PVL",
    "Staphylococcus epidermidis",
    "biofilm",
    "Staphylococcus saprophyticus",
    "UTI",
    "Streptococcus pneumoniae",
    "lancet-shaped diplococci",
    "MOPS",
    "rusty sputum",
    "PCV13",
    "PPSV23",
    "viridans streptococci",
    "S mutans",
    "S mitis",
    "S sanguinis",
    "dental caries",
    "infective endocarditis",
    "Streptococcus pyogenes",
    "group A strep",
    "M protein",
    "rheumatic fever",
    "glomerulonephritis",
    "ASO titer",
    "anti-DNase B",
    "scarlet fever",
    "Streptococcus agalactiae",
    "group B strep",
    "CAMP factor",
    "intrapartum prophylaxis",
    "Streptococcus gallolyticus",
    "S bovis",
    "colon cancer",
    "Enterococcus faecalis",
    "Enterococcus faecium",
    "VRE",
    "penicillin G resistance",
    "Bacillus anthracis",
    "anthrax toxin",
    "protective antigen",
    "lethal factor",
    "edema factor",
    "medusa head",
    "woolsorter disease",
  ],
  core: {
    what: "THE TREE: gram ⊕ cocci — catalase ⊝ (pairs or chains) = Streptococcus; catalase ⊕ (clusters) = Staphylococcus. STAPH: coagulase ⊕ → S aureus (gram ⊕, β-hemolytic, catalase ⊕, coagulase ⊕ cocci in clusters; Protein A binds Fc-IgG inhibiting complement activation and phagocytosis; colonizes skin, nares, ears, axilla, groin; inflammatory disease [skin infections, organ abscesses, pneumonia often after influenza, infective endocarditis, septic arthritis, osteomyelitis], toxin-mediated disease [TSST-1, scalded skin syndrome, rapid-onset food poisoning]; MRSA — resistance from altered penicillin-binding proteins [mecA gene]; some strains release Panton-Valentine leukocidin). Coagulase ⊝ → novobiocin: SENSITIVE → S epidermidis (catalase ⊕, coagulase ⊝, urease ⊕; does not ferment mannitol; normal skin microbiota; contaminates blood cultures; infects prosthetic devices and IV catheters via adherent biofilms); RESISTANT → S saprophyticus (normal microbiota of female genital tract and perineum; second most common cause of uncomplicated UTI in young females). STREP: α-hemolytic (partial oxidation of hemoglobin → greenish/brownish color without clearing) — optochin SENSITIVE + bile SOLUBLE → S pneumoniae (encapsulated; IgA protease; lancet-shaped diplococci; MOPS — meningitis, otitis media in children, pneumonia with rusty sputum, sinusitis; no virulence without capsule; asplenia predisposes; conjugate PCV13/15/20 + polysaccharide PPSV23 vaccines); optochin RESISTANT + bile INSOLUBLE → viridans streptococci (normal oropharynx; S mutans + S mitis dental caries; S sanguinis dextras bind fibrin-platelet aggregates on damaged valves → infective endocarditis). β-hemolytic (complete lysis of RBCs → pale/clear area) — bacitracin SENSITIVE + PYR ⊕ → group A S pyogenes (cocci in chains; hyaluronic acid capsule + M protein inhibit phagocytosis; M protein structurally similar to host myosin → autoimmunity [rheumatic carditis]; pyogenic [pharyngitis, cellulitis, honey-crusted impetigo, erysipelas], toxigenic [scarlet fever, toxic shock–like syndrome, necrotizing fasciitis], immunologic [rheumatic fever, glomerulonephritis]; DNase, erythrogenic exotoxin, streptokinase, streptolysin O; ASO titer or anti-DNase B); bacitracin RESISTANT → group B S agalactiae (polysaccharide capsule; CAMP factor enlarges S aureus hemolysis; hippurate ⊕, PYR ⊝; colonizes vagina; pneumonia, meningitis, sepsis mainly in babies; screen at 35-37 weeks; ⊕ culture → intrapartum penicillin/ampicillin). γ (no hemolysis) — growth in 6.5% NaCl and bile: Enterococcus (E faecalis, E faecium; catalase ⊝, PYR ⊕, typically nonhemolytic; normal colonic microbiota; intrinsically resistant to penicillin G; UTI, biliary tract infections, infective endocarditis after GI/GU procedures; VRE) vs nonenterococcus S gallolyticus (formerly S bovis; colonizes the gut; bacteremia and endocarditis; ↑ incidence of colon cancer).",
    why: "This block is the exam's favorite because the tree IS the thought process: every gram ⊕ coccus question resolves through the same gates in the same order — catalase, then coagulase (or hemolysis), then the third-level test (novobiocin / optochin+bile / bacitracin+PYR / NaCl). The tree also encodes the disease logic: coagulase makes S aureus the abscess former (fibrin clot around itself) while Protein A defeats opsonization — M6's virulence factors at work; the capsule makes S pneumoniae (no virulence without capsule) and S agalactiae the pediatric invaders — which is why both have vaccines or prophylaxis protocols at their gates (pneumococcal conjugate vaccines; group-B screening at 35-37 weeks with intrapartum penicillin); and M protein's myosin homology makes S pyogenes the autoimmunity organism (rheumatic fever's carditis, M6's mimicry) while its pyogenic/toxigenic/immunologic triad organizes every group-A question. The third-level tests are the discriminating memoranda: novobiocin (epidermidis sensitive / saprophyticus resistant), optochin + bile (pneumoniae sensitive + soluble / viridans resistant + insoluble), bacitracin + PYR (pyogenes sensitive + ⊕ / agalactiae resistant, ⊝), and 6.5% NaCl (Enterococcus grows — with intrinsic penicillin-G resistance and VRE).",
    keyIdea: "Run the tree top-down, and attach the disease at the leaf. CATALASE ⊝ → chains: HEMOLYSIS α (partial, green) → OPTOCHIN SENSITIVE + BILE SOLUBLE = S pneumoniae (lancet diplococci, MOPS, rusty sputum, asplenia risk, PCV/PPSV) vs OPTOCHIN RESISTANT + BILE INSOLUBLE = viridans (mutans/mitis caries; sanguinis dextrans → endocarditis). HEMOLYSIS β (complete, clear) → BACITRACIN SENSITIVE + PYR ⊕ = group A S pyogenes (M protein ≈ myosin → rheumatic carditis; pyogenic/toxigenic/immunologic; ASO/anti-DNase B; scarlet fever) vs BACITRACIN RESISTANT = group B S agalactiae (Babies; CAMP; hippurate ⊕; 35-37-week screen → intrapartum penicillin). HEMOLYSIS γ → 6.5% NaCl GROWS = Enterococcus (catalase ⊝, PYR ⊕, penicillin-G-intrinsic, VRE) vs nonenterococcus S gallolyticus (bovis in the blood = cancer in the colon). CATALASE ⊕ → clusters: COAGULASE ⊕ = S aureus (Protein A binds Fc-IgG; TSST-1 superantigen; scalded skin; heat-stable enterotoxin food poisoning at 2-6 hr; MRSA by mecA-altered PBVs; PVL) vs COAGULASE ⊝ → NOVOBIOCIN SENSITIVE = S epidermidis (biofilms on prosthetics and catheters; no mannitol fermentation) vs RESISTANT = S saprophyticus (young-female UTI, #2 to E coli).",
  },
  mechanisms: [
    {
      id: "cocci-tree-logic",
      title: "The lab tree: three gates, nine leaves",
      context: "From the printed algorithm to the exam's thought process",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A gram ⊕ coccus on culture must be identified before therapy",
            sublabel: "Input — the identification problem the tree resolves.",
            variant: "input",
          },
          {
            id: "s1",
            label: "GATE 1 — CATALASE: ⊝ in pairs or chains → Streptococcus; ⊕ in clusters → Staphylococcus",
            sublabel: "Process — the first split: the staphylococci carry catalase (M5's directory); the streptococci do not.",
            variant: "process",
          },
          {
            id: "s2",
            label: "GATE 2 (staph) — COAGULASE: ⊕ → S aureus (fibrin-clot abscess; Protein A); ⊝ → GATE 3 NOVOBIOCIN: sensitive → S epidermidis (biofilm devices); resistant → S saprophyticus (UTI)",
            sublabel: "Process — the coagulase/novobiocin ladder.",
            variant: "process",
          },
          {
            id: "s3",
            label: "GATE 2 (strep) — HEMOLYSIS: α (partial, green) → OPTOCHIN + BILE: sensitive/soluble → S pneumoniae vs resistant/insoluble → viridans; β (complete, clear) → BACITRACIN + PYR: sensitive/⊕ → S pyogenes vs resistant → S agalactiae; γ → 6.5% NaCl: grows → Enterococcus vs S gallolyticus",
            sublabel: "Process — the hemolysis ladder with its third-level tests.",
            variant: "process",
          },
          {
            id: "o1",
            label: "OUTPUT — each leaf carries its disease set and its management gate: pneumococcal conjugate vaccines and asplenia risk (pneumoniae); 35-37-week screening with intrapartum prophylaxis (agalactiae); colonoscopy after S gallolyticus bacteremia; anti-MRSA agents and PVL awareness (aureus); novobiocin-guided coag-neg staph speciation",
            sublabel: "Output — the tree is not just identification: each leaf is a management protocol.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "catalase" },
          { from: "s1", to: "s2", label: "coagulase / novobiocin" },
          { from: "s1", to: "s3", label: "hemolysis ladder" },
          { from: "s3", to: "o1", label: "leaf protocols" },
        ],
        caption:
          "The tree is a three-gate algorithm whose every branch ends in an organism with a known disease set. Catalase first: the staphylococci (catalase ⊕, clusters) split by coagulase — S aureus is the coagulase-positive abscess former (Protein A binding Fc-IgG to inhibit complement activation and phagocytosis, TSST-1 the superantigen, the heat-stable enterotoxin causing rapid-onset food poisoning at 2-6 hours, MRSA by the mecA gene's altered penicillin-binding proteins, and PVL killing leukocytes) — while the coagulase-negative pair splits by novobiocin (S epidermidis sensitive: the biofilm organism of prosthetic devices, IV catheters, and contaminated blood cultures, which does not ferment mannitol; S saprophyticus resistant: the second most common uncomplicated UTI of young females). The streptococci (catalase ⊝, pairs or chains) split by hemolysis: the α branch (partial oxidation of hemoglobin — greenish without clearing) uses optochin and bile to separate S pneumoniae (encapsulated lancet diplococci with the IgA protease; MOPS — meningitis, otitis media, pneumonia with rusty sputum, sinusitis; no virulence without capsule; asplenia predisposes; conjugate and polysaccharide vaccines) from the viridans group (optochin-resistant oropharyngeal microbiota — mutans/mitis caries, sanguinis endocarditis); the β branch (complete lysis — pale/clear) uses bacitracin and PYR to separate group A S pyogenes (the M protein's myosin homology driving rheumatic carditis; the pyogenic/toxigenic/immunologic triad; ASO and anti-DNase B) from group B S agalactiae (the babies' organism — CAMP factor, hippurate ⊕, the 35-37-week screen and intrapartum penicillin); and the γ branch uses 6.5% NaCl to separate the enterococci (E faecalis, E faecium — intrinsically penicillin-G-resistant, VRE, endocarditis after GI/GU procedures) from S gallolyticus (bacteremia, endocarditis, and the colon-cancer association).",
      },
    },
    {
      id: "virulence-at-the-leaf",
      title: "The virulence factors at each leaf — M6's arsenal, species by species",
      context: "From the tree to the mechanism of each disease",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Each leaf organism injures the host through the factors M6 catalogued",
            sublabel: "Input — the arsenal applied per species.",
            variant: "input",
          },
          {
            id: "s1",
            label: "S AUREUS: Protein A binds Fc-IgG (no opsonization); coagulase forms the fibrin clot around itself → abscess; TSST-1 is the superantigen (MHC II + TCR → polyclonal T-cell activation — fever, vomiting, diarrhea, rash, desquamation, shock; ↑ AST/ALT/bilirubin; tampons/nasal packing); exfoliative toxin scalds; the heat-stable enterotoxin feeds (2-6 hr, nonbloody); PVL kills leukocytes and necroses tissue",
            sublabel: "Process — the staph leaf: the toxin set of M8's roster at full strength.",
            variant: "process",
          },
          {
            id: "s2",
            label: "S PYOGENES: M protein ≈ myosin (molecular mimicry → acute rheumatic fever's carditis; antibodies to M protein enhance host defenses); hyaluronic acid capsule; DNase, erythrogenic exotoxin (scarlet fever's sandpaper rash, strawberry tongue, circumoral pallor), streptokinase, streptolysin O (the ASO antigen)",
            sublabel: "Process — the group-A leaf: mimicry + the pyogenic/toxigenic/immunologic triad.",
            variant: "process",
          },
          {
            id: "s3",
            label: "S PNEUMONIAE + S AGALACTIAE: the polysaccharide capsule is THE virulence (no virulence without capsule — pneumoniae; the capsule confers virulence — agalactiae): both pediatric invaders, both gated by protocols (conjugate vaccines; 35-37-week screening → intrapartum penicillin)",
            sublabel: "Process — the capsulate leaves: M4's encapsulated row returns as two species.",
            variant: "process",
          },
          {
            id: "o1",
            label: "OUTPUT — therapy and prevention read from the leaf: anti-staph agents by resistance class (MRSA = mecA-altered PBVs — M6's target-modification list); penicillin for group A and group B (with intrapartum prophylaxis); conjugate + polysaccharide vaccines for the pneumococcus; and colonoscopy when bovis appears in the blood",
            sublabel: "Output — the management column of the tree.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "staph leaf" },
          { from: "s1", to: "s2", label: "group-A leaf" },
          { from: "s2", to: "s3", label: "capsulate leaves" },
          { from: "s3", to: "o1", label: "therapy column" },
        ],
        caption:
          "The tree's leaves are virulence profiles. S aureus is the toxin set at full strength: Protein A defeats opsonization (M6), coagulase walls the abscess, TSST-1 floods the cytokines (M8's superantigen — binding MHC II and the T-cell receptor for polyclonal activation; fever, vomiting, diarrhea, desquamation, shock, end-organ failure with ↑ AST/ALT/bilirubin — prolonged tampons or nasal packing; compare S pyogenes' toxic shock–like syndrome with its painful skin infection), the exfoliative toxin scalds the skin, and the heat-stable enterotoxin (not destroyed by cooking) causes the 2-6-hour rapid-onset food poisoning. S pyogenes is the mimicry leaf: the M protein's structural similarity to host myosin underlies the autoimmunity of acute rheumatic fever (carditis), while the same organism's pyogenic (honey-crusted impetigo, erysipelas, cellulitis, pharyngitis), toxigenic (scarlet fever's erythrogenic toxin — the fine blanching sandpaper rash sparing palms and soles, strawberry tongue, circumoral pallor), and immunologic (rheumatic fever, glomerulonephritis — the strains causing impetigo can induce glomerulonephritis) triads organize every group-A stem; ASO titer or anti-DNase B antibodies indicate recent infection. The capsulate pair: S pneumoniae has no virulence without its capsule (the asplenia connection — M4's opsonization row) and S agalactiae's capsule confers its virulence — the reason both carry protocol gates at their leaves (the pneumococcal conjugate PCV13/15/20 and polysaccharide PPSV23 vaccines; the 35-37-week rectal/vaginal screen with intrapartum penicillin/ampicillin for ⊕ cultures). And S gallolyticus closes the tree with the clinical rule the exam quotes: bovis in the blood = cancer in the colon.",
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "gram-pos-cocci-tree",
      title: "The lab-algorithm tree + the nine-organism roster",
      caption:
        "An original KYP redraw of the source's Gram-positive lab algorithm: the catalase root, the coagulase/novobiocin staph branch, the α/β/γ hemolysis strep branch with its third-level tests (optochin+bile, bacitracin+PYR, 6.5% NaCl), the test-signature rail (one per gate), and the nine-organism roster with test signatures and diseases.",
      notice:
        "The printed photos (α/β hemolysis on blood agar, S aureus cocci in clusters, S pneumoniae lancet-shaped diplococci, S pyogenes cocci in chains) are raster — COPYRIGHTED, described-in-text only. FA's printed mnemonics (op-to-chin; 'Ph'yogenes; Group B for Babies; bovis/colon; sanguinis/blood) are NOT reproduced — verification only, carried verbatim in the note's table block.",
    },
    {
      kind: "table",
      title: "The gram-positive cocci — verbatim",
      intro: "The source's organism entries (books 133-135), verbatim.",
      columns: ["Organism", "Signature · Diseases (verbatim)"],
      rows: [
        ["Hemolysis definitions", "α-hemolytic bacteria: partial oxidation of hemoglobin → greenish or brownish color without clearing around growth on blood agar; include S pneumoniae and viridans streptococci. β-hemolytic bacteria: complete lysis of RBCs → pale/clear area surrounding colony on blood agar; include S aureus, S pyogenes (group A strep), S agalactiae (group B strep), Listeria monocytogenes."],
        ["S aureus", "Gram ⊕, β-hemolytic, catalase ⊕, coagulase ⊕ cocci in clusters. Protein A (virulence factor) binds Fc-IgG, inhibiting complement activation and phagocytosis. Commonly colonizes the skin, nares, ears, axilla, and groin. Inflammatory disease — skin infections, organ abscesses, pneumonia (often after influenza virus infection), infective endocarditis, septic arthritis, osteomyelitis. Toxin-mediated disease — toxic shock syndrome (TSST-1), scalded skin syndrome (exfoliative toxin), rapid-onset food poisoning (enterotoxins). MRSA — important cause of serious healthcare-associated and community-acquired infections; resistance due to altered penicillin-binding proteins (conferred by mecA gene). Some strains release Panton-Valentine leukocidin (PVL), which kills leukocytes and causes tissue necrosis. TSST-1 is a superantigen that binds to MHC II and T-cell receptor, resulting in polyclonal T-cell activation and cytokine release — staphylococcal TSS: fever, vomiting, diarrhea, rash, desquamation, shock, end-organ failure (↑ AST, ↑ ALT, ↑ bilirubin); prolonged vaginal tampons or nasal packing; compare S pyogenes TSS (toxic shock–like syndrome associated with painful skin infection). Food poisoning due to ingestion of preformed toxin → short incubation period (2-6 hr) followed by nonbloody diarrhea and emesis; enterotoxin is heat stable → not destroyed by cooking. S aureus makes coagulase and toxins; forms fibrin clot around itself → abscess."],
        ["S epidermidis", "Gram ⊕, catalase ⊕, coagulase ⊝, urease ⊕ cocci in clusters. Novobiocin sensitive. Does not ferment mannitol (vs S aureus). Normal microbiota of skin; contaminates blood cultures. Infects prosthetic devices (eg, hip implant, heart valve) and IV catheters by producing adherent biofilms."],
        ["S saprophyticus", "Gram ⊕, catalase ⊕, coagulase ⊝, urease ⊕ cocci in clusters. Novobiocin resistant. Normal microbiota of female genital tract and perineum. Second most common cause of uncomplicated UTI in young females (most common is E coli)."],
        ["S pneumoniae", "Gram ⊕, α-hemolytic, lancet-shaped diplococci. Encapsulated. IgA protease. Optochin sensitive and bile soluble. Most commonly causes MOPS: Meningitis, Otitis media (in children), Pneumonia (rusty sputum), Sinusitis. Pneumococcal pneumonia associated with 'rusty' sputum. Patients with anatomic or functional hyposplenia or asplenia are predisposed. No virulence without capsule. Vaccines in both conjugate (PCV13, PCV15, PCV20) and polysaccharide (PPSV23) formulations."],
        ["Viridans group streptococci", "Gram ⊕, α-hemolytic cocci. Optochin resistant and bile insoluble. Normal microbiota of the oropharynx. S mutans and S mitis cause dental caries. S sanguinis makes dextrans that bind to fibrin-platelet aggregates on damaged heart valves, causing infective endocarditis."],
        ["S pyogenes (group A strep)", "Gram ⊕ cocci in chains. Group A strep cause: pyogenic — pharyngitis, cellulitis, impetigo ('honey-crusted' lesions), erysipelas; toxigenic — scarlet fever, toxic shock–like syndrome, necrotizing fasciitis; immunologic — rheumatic fever, glomerulonephritis. Bacitracin sensitive, β-hemolytic, PYR ⊕. Hyaluronic acid capsule and M protein inhibit phagocytosis. Antibodies to M protein enhance host defenses; structurally similar to host proteins (ie, myosin) → autoimmunity (carditis of acute rheumatic fever). Diagnose strep pharyngitis via throat swab (antigen detection assay — rapid, in-office; or culture on blood agar, 48 hours). Key virulence factors: DNase, erythrogenic exotoxin, streptokinase, streptolysin O. ASO titer or anti-DNase B antibodies indicate recent S pyogenes infection. Scarlet fever — fine, blanching, generalized sandpaperlike rash sparing palms and soles, strawberry tongue, circumoral pallor in the setting of group A streptococcal pharyngitis (erythrogenic toxin ⊕)."],
        ["S agalactiae (group B strep)", "Gram ⊕ cocci, bacitracin resistant, β-hemolytic; colonizes vagina; causes pneumonia, meningitis, and sepsis, mainly in babies. Polysaccharide capsule confers virulence. Produces CAMP factor, which enlarges the area of hemolysis formed by S aureus (CAMP stands for the authors of the test, not cyclic AMP). Hippurate test ⊕. PYR ⊝. Screen pregnant patients at 35-37 weeks of gestation with rectal and vaginal swabs; patients with ⊕ culture receive intrapartum penicillin/ampicillin prophylaxis."],
        ["S gallolyticus", "Formerly S bovis. Gram ⊕ cocci, colonizes the gut. Can cause bacteremia and infective endocarditis. Patients with S gallolyticus endocarditis have ↑ incidence of colon cancer."],
        ["Enterococci", "Gram ⊕ cocci. E faecalis and E faecium are normal colonic microbiota that are intrinsically resistant to penicillin G and cause UTI, biliary tract infections, and infective endocarditis (following GI/GU procedures). Catalase ⊝, PYR ⊕, typically nonhemolytic. VRE (vancomycin-resistant enterococci) are an important cause of healthcare-associated infection. Enterococci are more resilient than streptococci, can grow in 6.5% NaCl and bile (lab test)."],
        ["Bacillus anthracis (the bridge to M10's bacilli)", "Gram ⊕, spore-forming rod that produces anthrax toxin — exotoxins consisting of protective antigen, lethal factor (inhibits MAP kinase → macrophage apoptosis), and edema factor (acts as adenylyl cyclase → ↑ intracellular cAMP, upsetting homeostasis → edema, necrosis). Polypeptide capsule (poly D-glutamate). Colonies show a halo of projections ('medusa head' appearance). Cutaneous anthrax — painless papule surrounded by vesicles → ulcer with black eschar (painless, necrotic) → uncommonly progresses to bacteremia and death. Pulmonary anthrax — inhalation of spores (contaminated animals/products; bioweapon potential) → flulike symptoms rapidly progressing to fever, pulmonary hemorrhage, mediastinitis (CXR: widened mediastinum), shock; woolsorter's disease; prophylaxis with ciprofloxacin or doxycycline when exposed. Both forms may be complicated by hemorrhagic meningitis."],
      ],
      caption:
        "Read the table with the tree: every signature is a gate answer, and every disease set is a leaf. The anthrax row is the bridge section that begins M10's gram-positive bacilli (its text lives on this note's final page; M10 continues from book 136).",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "The protocols the tree implies",
      body: "THE STAPH PROTOCOLS: coagulase-positive means abscess-forming (the fibrin-clot wall) — drain it; MRSA means mecA-altered penicillin-binding proteins (M6's target-modification list — the β-lactam's target changed shape, so only the agents that survive MRSA's enzymes work); PVL predicts necrosis. THE STREP PROTOCOLS: group A gets penicillin (and the antigen detection assay or 48-hour blood-agar culture for pharyngitis — rapid in-office vs cultured); rheumatic fever follows untreated pharyngitis while glomerulonephritis follows impetigo strains (the 'Ph'yogenes rule: pharyngitis → rheumatic 'phever' and glomerulonephritis; impetigo strains → glomerulonephritis); ASO or anti-DNase B documents recent infection. THE GROUP-B PROTOCOL: screen at 35-37 weeks with rectal AND vaginal swabs; ⊕ culture → intrapartum penicillin/ampicillin (the babies' pneumonia/meningitis/sepsis prevention). THE PNEUMOCOCCAL PROTOCOL: asplenia or hyposplenia predisposes (M4's opsonization row) — vaccinate with conjugate (PCV13/15/20) AND polysaccharide (PPSV23) formulations; no capsule, no virulence — the conjugate principle (M4) is why PCV exists. THE ENTEROCOCCAL RULES: intrinsically resistant to penicillin G (the wall's low-affinity PBVs — extension), grows in 6.5% NaCl and bile, VRE is healthcare-associated — and after GI/GU procedures, watch for endocarditis. THE GALLOLYTICUS RULE: bovis in the blood = cancer in the colon — colonoscopy follows every S gallolyticus bacteremia.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 26-year-old menstruating woman using superabsorbent tampons presents with fever, vomiting, diarrhea, a diffuse rash, and hypotension; laboratory studies show ↑ AST, ↑ ALT, and ↑ bilirubin.",
        discriminator: "Tampon use + desquamation-shock syndrome",
        concept: "Staphylococcal TSS — TSST-1",
        answer:
          "TSST-1 is a superantigen that binds to MHC II and the T-cell receptor, resulting in polyclonal T-cell activation and cytokine release. Staphylococcal TSS: fever, vomiting, diarrhea, rash, desquamation, shock, end-organ failure (↑ AST/ALT/bilirubin) — associated with prolonged vaginal tampon use or nasal packing. Compare S pyogenes' toxic shock–like syndrome, which is associated with a painful skin infection.",
      },
      {
        stem: "A 34-year-old woman 3 days after a hip replacement has persistent low-grade fevers; blood cultures drawn through a central line grow gram ⊕, catalase ⊕, coagulase ⊝ cocci in clusters that are novobiocin sensitive and do not ferment mannitol.",
        discriminator: "Prosthetic device + coagulase ⊝ + novobiocin sensitive",
        concept: "S epidermidis — the biofilm organism",
        answer:
          "S epidermidis: gram ⊕, catalase ⊕, coagulase ⊝, urease ⊕ cocci in clusters; novobiocin sensitive; does not ferment mannitol (vs S aureus). Normal skin microbiota that contaminates blood cultures and infects prosthetic devices (hip implants, heart valves) and IV catheters by producing adherent biofilms — the coagulase-negative staph of surgery, managed with device-targeted therapy (extension: often requiring hardware revision).",
      },
      {
        stem: "A newborn whose mother screened positive at 36 weeks presents at day 2 of life with fever, poor feeding, and a bulging fontanelle; CSF grows gram ⊕ cocci that are β-hemolytic, bacitracin resistant, hippurate positive.",
        discriminator: "Neonate + group-B screen + bacitracin resistant",
        concept: "S agalactiae — the babies' organism",
        answer:
          "S agalactiae (group B): colonizes the vagina; causes pneumonia, meningitis, and sepsis mainly in babies — the polysaccharide capsule confers virulence, the CAMP factor enlarges S aureus hemolysis, hippurate ⊕, PYR ⊝. Prevention is the protocol: screen at 35-37 weeks (rectal + vaginal swabs) and give intrapartum penicillin/ampicillin for ⊕ cultures.",
      },
    ],
    traps: [
      {
        a: "S epidermidis and S saprophyticus are distinguished by coagulase",
        b: "Both are coagulase ⊝ — the split is NOVOBIOCIN (epidermidis sensitive, saprophyticus resistant); mannitol fermentation separates them from S aureus",
        whyConfused: "Coagulase is the famous staph test, so it feels like it must separate all three.",
        keyDifference:
          "The staph ladder has two rungs after catalase: coagulase separates S aureus from BOTH coag-neg species; novobiocin then separates the coag-neg pair (epidermidis sensitive — devices and biofilms; saprophyticus resistant — young-female UTI, #2 to E coli). Mannitol: S aureus ferments it; S epidermidis does not.",
        clue: "Any coagulase-negative staph speciation question.",
      },
      {
        a: "Optochin sensitivity separates S pneumoniae from S pyogenes",
        b: "Optochin (with bile solubility) separates the TWO α-hemolytic streptococci: pneumoniae (sensitive, soluble) from viridans (resistant, insoluble); S pyogenes is β-hemolytic and splits by bacitracin instead",
        whyConfused: "Both tests use antibiotic discs on blood agar.",
        keyDifference:
          "The hemolysis branch picks the third-level test: α (partial, green) → optochin + bile (pneumoniae vs viridans); β (complete, clear) → bacitracin + PYR (pyogenes vs agalactiae); γ → 6.5% NaCl (Enterococcus vs nonenterococcus). The disc follows the hemolysis color, not the other way round.",
        clue: "Any third-level test selection question.",
      },
      {
        a: "S aureus food poisoning causes diarrhea hours after eating undercooked chicken",
        b: "Staph food poisoning comes from PREFORMED heat-stable enterotoxin — short incubation (2-6 hr) after ingesting food where the toxin was already made; cooking does not destroy it",
        whyConfused: "Foodborne illness sounds like an infection from the meal.",
        keyDifference:
          "The 2-6-hour incubation with nonbloody diarrhea and emesis is the preformed-toxin signature: the enterotoxin was made in the food (by colonizing S aureus), and it is heat stable — not destroyed by cooking. The exam contrasts the short incubation (preformed toxin) with the long incubation of infectious causes (the food poisoning chapter's split).",
        clue: "Any rapid-onset food poisoning question.",
      },
    ],
    pivots: [
      {
        lookAlike: "Staph TSS vs strep TSLS (the two superantigen syndromes)",
        differentiator: "Tampons/nasal packing vs painful skin infection",
        correctPath:
          "STAPH TSS (TSST-1): fever, vomiting, diarrhea, rash with desquamation, shock, end-organ failure (↑ AST/ALT/bilirubin) — prolonged tampons or nasal packing. STREP TSLS (erythrogenic exotoxin relatives — the toxic shock–like syndrome): the same shock physiology but associated with a painful skin infection (necrotizing fasciitis context — extension). Same superantigen mechanism (M8's cross-link), different organism and portal.",
      },
      {
        lookAlike: "S pneumoniae vs viridans (the two α-hemolytic streptococci)",
        differentiator: "Optochin + bile; capsule; site",
        correctPath:
          "S PNEUMONIAE: lancet-shaped diplococci, ENCAPSULATED (no virulence without capsule), IgA protease, optochin SENSITIVE + bile SOLUBLE — MOPS (meningitis, otitis media, pneumonia with rusty sputum, sinusitis); asplenia predisposes; PCV13/15/20 + PPSV23. VIRIDANS: no capsule, optochin RESISTANT + bile INSOLUBLE, oropharyngeal microbiota — mutans/mitis dental caries; sanguinis dextrans on damaged valves → endocarditis. The tree's α branch in full.",
      },
    ],
    miniCase: {
      vignette:
        "A 22-year-old woman presents from a college dorm with 12 hours of fever, diffuse myalgias, vomiting, and diarrhea. She uses superabsorbent tampons overnight. Examination: temperature 39.4 °C, blood pressure 82/48 with orthostatic drop, a diffuse blanching erythema, hyperemia of the oropharynx and conjunctivae, and no focal neurological findings. Laboratories: creatinine 1.8 mg/dL, AST 210 U/L, ALT 190 U/L, total bilirubin 3.1 mg/dL, platelets 92 × 10⁹/L, and a blood culture drawn before antibiotics that remains sterile at 48 hours. A chest x-ray is clear; there is no evidence of a skin wound or cellulitis on two full-body examinations.",
      question:
        "Which microbial product most likely mediates this patient's syndrome?",
      options: [
        {
          label: "A",
          text: "TSST-1, a superantigen binding MHC II and the T-cell receptor to drive polyclonal T-cell activation",
          correct: true,
          why: "Correct. This is staphylococcal toxic shock syndrome: prolonged tampon use, fever, vomiting, diarrhea, diffuse blanching rash (which will desquamate), hypotension, and end-organ failure (↑ AST/ALT/bilirubin, renal injury, thrombocytopenia) with sterile cultures. TSST-1 is the superantigen that binds MHC II and the T-cell receptor outside the antigen-binding site — the polyclonal T-cell activation and cytokine release of M8's superantigen row, printed again here.",
        },
        {
          label: "B",
          text: "Lipid A of lipopolysaccharide, inducing TNF, IL-1, and IL-6",
          why: "Endotoxin causes fever, shock, and multi-organ failure — but it comes from gram ⊝ rods (the culture here is sterile, and the desquamating rash with tampon exposure is the staph signature). The distractor imports M8's cascade into M9's superantigen leaf.",
        },
        {
          label: "C",
          text: "Coagulase, forming a fibrin clot around the organism",
          why: "Coagulase is real S aureus virulence — but it forms abscess walls (the inflammatory leaf), not a diffuse cytokine-syndrome with rash, desquamation, and sterile cultures. The distractor tests whether the toxin set is kept apart from the enzyme set.",
        },
        {
          label: "D",
          text: "Exfoliative toxin, causing scalded skin syndrome",
          why: "Exfoliative toxin is real (the scalded-skin leaf) — but that syndrome presents with superficial skin separation, not this fulminant shock with end-organ failure. The distractor swaps one staph toxin for another, testing whether TSST-1 is matched to its own disease.",
        },
        {
          label: "E",
          text: "Protein A, binding the Fc region of IgG",
          why: "Protein A is real S aureus virulence (M6's arsenal) — but it defeats opsonization locally (abscess protection); it does not drive polyclonal T-cell activation or the systemic cytokine flood. The distractor tests the virulence factor's mechanism class.",
        },
      ],
      reasoning:
        "The vignette assembles classic staphylococcal TSS: prolonged superabsorbent tampon use, the fever-vomiting-diarrhea triad with a diffuse blanching rash, hypotension with end-organ failure (renal, hepatic — the ↑ AST/ALT/bilirubin), and sterile blood cultures (the toxin, not the bacteremia, drives the syndrome). The mechanism is TSST-1's superantigen action — MHC II + TCR cross-linking outside the antigen-binding site, the same mechanism M8 printed for the superantigen row. Each distractor pairs a real microbial product (endotoxin, coagulase, exfoliative toxin, Protein A) with the wrong syndrome, testing whether the superantigen mechanism is attached to its organism.",
    },
  },
  mnemonics: [
    {
      code: "\u201cThe tree runs catalase → coagulase → hemolysis, and every third test belongs to its hemolysis color: optochin for green, bacitracin for clear, salt for none.\u201d",
      meaning:
        "KYP's key for the algorithm: catalase splits cocci (staph ⊕ clusters / strep ⊝ chains); coagulase splits staph (aureus ⊕ vs epidermidis/saprophyticus ⊝); novobiocin splits the coag-negs (sensitive = epidermidis, resistant = saprophyticus); hemolysis picks the third test — α→optochin+bile (pneumoniae vs viridans), β→bacitracin+PYR (pyogenes vs agalactiae), γ→6.5% NaCl (Enterococcus vs nonenterococcus).",
      memorizes: "The lab algorithm",
      whenToUse: "Any gram-positive coccus identification question.",
      clinical: "The disc follows the hemolysis color.",
    },
    {
      code: "\u201cThe capsulate leaves carry the pediatric protocols: the pneumococcus gets vaccines at its gate; group B gets a screen at 35-37 weeks.\u201d",
      meaning:
        "KYP's key for the prevention column: S pneumoniae (no virulence without capsule; asplenia predisposes) — conjugate PCV13/15/20 + polysaccharide PPSV23; S agalactiae (babies) — rectal/vaginal screen at 35-37 weeks, ⊕ culture → intrapartum penicillin/ampicillin. Both are M4's encapsulated row returned as species with protocol gates.",
      memorizes: "The two capsulate species and their protocols",
      whenToUse: "Any vaccine or prophylaxis question.",
      clinical: "Asplenia → pneumococcal vaccines; 35-37-week screen → intrapartum penicillin.",
    },
    {
      code: "\u201cGroup A runs the triad — pyogenic, toxigenic, immunologic — and its M protein wears the host's own myosin.\u201d",
      meaning:
        "KYP's key for S pyogenes: pyogenic (pharyngitis, cellulitis, honey-crusted impetigo, erysipelas), toxigenic (scarlet fever's erythrogenic toxin, TSLS, necrotizing fasciitis), immunologic (rheumatic fever, glomerulonephritis — pharyngitis strains → rheumatic fever + glomerulonephritis; impetigo strains → glomerulonephritis). M protein ≈ myosin → the carditis of acute rheumatic fever (M6's mimicry). ASO / anti-DNase B for recent infection.",
      memorizes: "Group A's disease triad and its autoimmunity",
      whenToUse: "Any group-A strep question.",
      clinical: "Honey-crusted impetigo; sandpaper rash with strawberry tongue (scarlet fever).",
    },
  ],
  rapidReview: {
    s30: [
      "Catalase: staph ⊕ (clusters) vs strep ⊝ (chains/pairs)",
      "Coagulase: S aureus ⊕ (fibrin-clot abscess) vs epidermidis/saprophyticus ⊝",
      "Novobiocin: epidermidis SENSITIVE vs saprophyticus RESISTANT",
      "α hemolysis = partial, green; β = complete, clear; γ = none",
      "S aureus: Protein A binds Fc-IgG; TSST-1; heat-stable enterotoxin (2-6 hr food poisoning)",
    ],
    m3: [
      "Optochin + bile: pneumoniae sensitive + soluble vs viridans resistant + insoluble",
      "Bacitracin + PYR: pyogenes sensitive + ⊕ vs agalactiae resistant (PYR ⊝, hippurate ⊕, CAMP)",
      "6.5% NaCl: Enterococcus grows (catalase ⊝, PYR ⊕, penicillin-G-intrinsic, VRE)",
      "MOPS = meningitis, otitis media, pneumonia (rusty sputum), sinusitis; asplenia predisposes",
      "Viridans: mutans/mitis caries; sanguinis dextrans → endocarditis on damaged valves",
    ],
    m10: [
      "Group A triad: pyogenic / toxigenic / immunologic (rheumatic fever, glomerulonephritis)",
      "M protein ≈ myosin → acute rheumatic fever carditis (antibodies to M protein help)",
      "ASO titer or anti-DNase B = recent S pyogenes infection",
      "MRSA = mecA-altered PBVs (M6's target-modification list); PVL kills leukocytes + necrosis",
      "S gallolyticus (bovis) bacteremia → colonoscopy (↑ colon cancer)",
      "S epidermidis: biofilms on prosthetics/catheters; no mannitol fermentation; contaminates cultures",
    ],
  },
  recall: [
    {
      q: "State the staph ladder and each leaf's test signature.",
      a: "Catalase ⊕ clusters → coagulase: ⊕ = S aureus (β-hemolytic; Protein A binds Fc-IgG; MRSA by mecA-altered PBVs); ⊝ → novobiocin: SENSITIVE = S epidermidis (no mannitol fermentation; biofilms on prosthetic devices and IV catheters; contaminates blood cultures); RESISTANT = S saprophyticus (normal female genital-tract/perineum microbiota; second most common uncomplicated UTI in young females after E coli).",
    },
    {
      q: "State the strep ladder and each leaf's test signature.",
      a: "Catalase ⊝ chains/pairs → hemolysis: α (partial, green) → optochin + bile: SENSITIVE + SOLUBLE = S pneumoniae (encapsulated lancet diplococci; IgA protease; MOPS; no virulence without capsule; PCV + PPSV) vs RESISTANT + INSOLUBLE = viridans (mutans/mitis caries; sanguinis IE). β (complete, clear) → bacitracin + PYR: SENSITIVE + ⊕ = S pyogenes (hyaluronic acid capsule; M protein ≈ myosin; pyogenic/toxigenic/immunologic) vs RESISTANT = S agalactiae (CAMP; hippurate ⊕; PYR ⊝; babies; 35-37-week screen → intrapartum penicillin). γ → 6.5% NaCl: grows = Enterococcus (catalase ⊝, PYR ⊕, penicillin-G-intrinsic, VRE) vs nonenterococcus S gallolyticus (bacteremia/IE; ↑ colon cancer).",
    },
    {
      q: "What defines α vs β hemolysis, and which organisms are the β-hemolytic examples?",
      a: "α: partial oxidation of hemoglobin → greenish/brownish color WITHOUT clearing around growth on blood agar (S pneumoniae, viridans). β: complete lysis of RBCs → pale/clear area surrounding the colony (S aureus, S pyogenes [group A], S agalactiae [group B], Listeria monocytogenes).",
    },
    {
      q: "Give the group-B protocol and the pneumococcal vaccine set.",
      a: "Group B: screen pregnant patients at 35-37 weeks with rectal and vaginal swabs; ⊕ culture → intrapartum penicillin/ampicillin prophylaxis. Pneumococcal: conjugate (PCV13, PCV15, PCV20) and polysaccharide (PPSV23) formulations; asplenia/hyposplenia predisposes; no virulence without capsule.",
    },
    {
      q: "What are the anthrax bridge facts (from this note's final page)?",
      a: "B anthracis: gram ⊕, spore-forming rod; anthrax toxin = protective antigen + lethal factor (inhibits MAP kinase → macrophage apoptosis) + edema factor (adenylyl cyclase → ↑ cAMP → edema, necrosis); poly-D-glutamate capsule; medusa-head colonies. Cutaneous: painless papule → vesicles → black eschar. Pulmonary: woolsorter's disease — widened mediastinum, hemorrhagic meningitis; ciprofloxacin/doxycycline prophylaxis.",
    },
  ],
  related: [
    {
      title: "Exotoxins vs Endotoxins",
      topicId: "exotoxins-endotoxins",
      note: "M8's toxin roster returns species by species: TSST-1 (the superantigen row), the exfoliative and heat-stable enterotoxins, erythrogenic exotoxin, streptolysin O — and lethal factor/edema factor in the anthrax bridge.",
    },
    {
      title: "Virulence Mechanisms & Antimicrobial Resistance Overview",
      topicId: "virulence-mechanisms",
      note: "M6's arsenal at the leaves: Protein A binds Fc-IgG (S aureus), M protein ≈ myosin (S pyogenes), the capsules (pneumoniae/agalactiae), and MRSA's mecA-altered PBVs — the target-modification list.",
    },
    {
      title: "Bacterial Genetics: Transformation, Conjugation, Transduction",
      topicId: "bacterial-genetics",
      note: "The enterococci's intrinsic penicillin-G resistance and VRE are the resistance economy M7 mapped — the R plasmids and transposons behind the healthcare-associated outbreaks.",
    },
  ],
  crossLinks: [
    {
      subject: "Pharmacology (Antimicrobials)",
      connection: "The therapy column of the tree: anti-MRSA agents for the mecA-altered PBP set; penicillin/ampicillin for group A and group B (with intrapartum prophylaxis); the enterococci's penicillin-G-intrinsic resistance and the VRE problem — M6's three geometries at the species level.",
    },
    {
      subject: "Cardiology (Endocarditis)",
      connection: "Two leaves reach the valves: S sanguinis' dextrans on damaged valves (viridans — after dental procedures) and the enterococci after GI/GU procedures — the endocarditis-prophylaxis questions of the cardio section.",
    },
    {
      subject: "Oncology (Screening)",
      connection: "S gallolyticus bacteremia is a colon-cancer marker: bovis in the blood = cancer in the colon — the bacteriology finding that orders a colonoscopy.",
    },
    {
      subject: "Obstetrics (Perinatal)",
      connection: "The 35-37-week screen with intrapartum penicillin is the group-B protocol — the neonatal sepsis prevention that M4's encapsulated row predicted.",
    },
  ],
};
