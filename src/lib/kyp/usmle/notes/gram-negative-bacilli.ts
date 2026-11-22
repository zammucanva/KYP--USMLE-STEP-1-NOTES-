import type { KypUsMLENote } from "../types";

// Microbiology — Clinical Bacteriology banner (M-batch 12).
// Source: First Aid 2026, Part 1 pdf 161-163 / book 139-141
// (the Gram-negative lab algorithm tree on book 139's lower half — the
//  shared-page section M11's manifest documented as M12's content — plus
//  Neisseria [gonococci vs meningococci], Haemophilus influenzae,
//  Burkholderia cepacia complex, Bordetella pertussis, Brucella,
//  Legionella pneumophila, and Pseudomonas aeruginosa on books 140-141)

export const gramNegativeBacilli: KypUsMLENote = {
  id: "gram-negative-bacilli",
  title: "Gram-Negative Bacilli: Enterics, Zoonotics & the Water Organisms",
  subtitle:
    "The gram ⊝ block organized by the LAB ALGORITHM TREE. Morphology splits first: DIPLOCOCCI (aerobic, oxidase ⊕) split by MALTOSE — glucose only = N gonorrhoeae (with Moraxella; intracellular in neutrophils, IgA protease, LOS endotoxin, antigenic pilus variation so no vaccine; gonorrhea, septic arthritis, neonatal conjunctivitis at 2-5 days, PID, Fitz-Hugh–Curtis; NAAT; single-dose IM ceftriaxone ± doxycycline) vs glucose + maltose = N meningitidis (polysaccharide capsule, type B vaccine; respiratory spread in close quarters — barracks, dorms; meningococcemia with petechiae and toe gangrene, meningitis, Waterhouse-Friderichsen adrenal hemorrhage; ceftriaxone/penicillin G + contact prophylaxis). COCCOBACILLI run the aerobic roster: H influenzae (chocolate agar factors V [NAD+] and X [hematin], S aureus satellitism, nontypeable strains dominate post-vaccine, cherry-red epiglottitis with thumb sign, Hib PRP-toxoid vaccine, NOT the flu), B pertussis (pertussis toxin disables Gi, adenylate cyclase toxin ↑ cAMP, tracheal cytotoxin; catarrhal → paroxysmal whoop → convalescent; LYMPHOCYTOSIS; Tdap/DTaP; macrolides), Brucella (unpasteurized milk, survives in RES macrophages, noncaseating granulomas, undulant fever), plus Pasteurella, F tularensis, A baumannii on the tree. CURVED RODS (oxidase ⊕) split by growth condition: 42°C = Campylobacter jejuni; alkaline media = Vibrio cholerae; urease = H pylori. BACILLI split by LACTOSE: non-lactose oxidase ⊕ = Pseudomonas (water, grapelike odor, green pigment, acidic-environment virulence, ecthyma gangrenosum, swimmer's ear, CF mucoid biofilm; PEEP toxins — Phospholipase C, Endotoxin, Exotoxin A inactivating EF-2, green Pigment; antipseudomonal agents, aminoglycoside monotherapy avoided in acidic foci) and Burkholderia (CF pneumonia, MDR, lung-transplant contraindication); non-lactose oxidase ⊝ split by H2S on TSI — ⊝ = Shigella and Yersinia (pleomorphic rod/coccobacillus), ⊕ = Salmonella and Proteus; lactose ⊕ split by speed — fast = E coli, Klebsiella, Enterobacter; slow = Citrobacter, Serratia. Legionella closes the water chapter: silver stain, charcoal yeast extract with iron and cysteine, urine antigen, hyponatremia with elevated transaminases, aerosolized water (AC systems, cruise ships, nursing homes) with NO person-to-person spread — Legionnaires disease (severe unilateral lobar pneumonia with GI/CNS symptoms) vs Pontiac fever (mild flulike illness).",
  subject: "Microbiology",
  system: "Section II · High-Yield General Principles — Clinical Bacteriology",
  pilotCategory:
    "Clinical bacteriology — the gram-negative lab algorithm tree (morphology → maltose/oxidase/lactose/H2S-TSI gates); the Neisseria pair (gonococci vs meningococci on capsule, maltose, vaccine, spread, diseases, diagnosis, treatment); Haemophilus (chocolate agar V/X, nontypeable shift, epiglottitis); Bordetella (the three stages, Gi-disabling toxin, lymphocytosis); Brucella (undulant fever, macrophage survival); Legionella (the water organism with its stain/media/antigen set); Pseudomonas (the water organism with PEEP, ecthyma, CF biofilm); Burkholderia (CF, transplant)",
  difficulty: 2,
  readTime: 14,
  sourceRef:
    "First Aid 2026, Part 1 pp. 139–141 (Gram-negative lab algorithm; Neisseria; Haemophilus influenzae; Burkholderia cepacia complex; Bordetella pertussis; Brucella; Legionella pneumophila; Pseudomonas aeruginosa)",
  tags: [
    "gram-negative bacilli",
    "gram-negative lab algorithm",
    "diplococci",
    "coccobacilli",
    "curved rods",
    "bacilli",
    "lactose fermentation",
    "oxidase",
    "maltose fermentation",
    "H2S production",
    "TSI agar",
    "Neisseria gonorrhoeae",
    "gonococci",
    "IgA protease",
    "LOS",
    "lipooligosaccharide",
    "Neisseria meningitidis",
    "meningococci",
    "Waterhouse-Friderichsen syndrome",
    "Fitz-Hugh-Curtis syndrome",
    "neonatal conjunctivitis",
    "NAAT",
    "ceftriaxone",
    "Moraxella",
    "Haemophilus influenzae",
    "chocolate agar",
    "factor V",
    "factor X",
    "NAD+",
    "hematin",
    "satellitism",
    "nontypeable H influenzae",
    "epiglottitis",
    "thumb sign",
    "polyribosylribitol phosphate",
    "Hib vaccine",
    "Bordetella pertussis",
    "pertussis toxin",
    "adenylate cyclase toxin",
    "tracheal cytotoxin",
    "whooping cough",
    "catarrhal",
    "paroxysmal",
    "convalescent",
    "lymphocytosis",
    "Tdap",
    "DTaP",
    "macrolides",
    "Brucella",
    "undulant fever",
    "noncaseating granulomas",
    "Pasteurella",
    "Francisella tularensis",
    "Acinetobacter baumannii",
    "Campylobacter jejuni",
    "42 degrees",
    "Vibrio cholerae",
    "alkaline media",
    "Helicobacter pylori",
    "urease",
    "Pseudomonas",
    "Pseudomonas aeruginosa",
    "ecthyma gangrenosum",
    "swimmer's ear",
    "otitis externa",
    "hot tub folliculitis",
    "grapelike odor",
    "green pigment",
    "pyocyanin",
    "mucoid capsule",
    "cystic fibrosis",
    "biofilm",
    "Exotoxin A",
    "EF-2",
    "phospholipase C",
    "antipseudomonal",
    "piperacillin-tazobactam",
    "ceftazidime",
    "cefepime",
    "Burkholderia cepacia",
    "lung transplant",
    "Legionella pneumophila",
    "silver stain",
    "charcoal yeast extract",
    "urine antigen",
    "hyponatremia",
    "Legionnaires disease",
    "Pontiac fever",
    "E coli",
    "Klebsiella",
    "Enterobacter",
    "Citrobacter",
    "Serratia",
    "Salmonella",
    "Shigella",
    "Yersinia",
    "Proteus",
  ],
  core: {
    what: "THE GRAM ⊝ (PINK) ALGORITHM. MORPHOLOGY FIRST: DIPLOCOCCI — gram ⊝ diplococci that metabolize glucose and produce IgA proteases with lipooligosaccharides (LOS) bearing strong endotoxin activity; N gonorrhoeae is often intracellular (within neutrophils); the maltose gate: meningococci produce maltose AND glucose acid, gonococci glucose only — the pair splits seven ways (capsule: none vs polysaccharide; maltose: none vs acid detection; vaccine: none due to antigenic variation of pilus proteins vs type B vaccine for at-risk individuals; spread: sexual/perinatal vs respiratory and oral secretions in close quarters [army barracks, college dorms]; diseases: gonorrhea, septic arthritis, neonatal conjunctivitis 2-5 days after birth, PID, Fitz-Hugh–Curtis syndrome vs meningococcemia with petechial hemorrhages and gangrene of toes, meningitis, Waterhouse-Friderichsen syndrome [acute hemorrhagic adrenal insufficiency]; diagnosis: NAAT vs culture-based tests or PCR; treatment: single-dose IM ceftriaxone with doxycycline if chlamydial coinfection not excluded, condoms ↓ sexual transmission, erythromycin eye ointment prevents neonatal blindness vs ceftriaxone or penicillin G with rifampin/ciprofloxacin/ceftriaxone prophylaxis for close contacts). COCCOBACILLI — the aerobic roster: H influenzae (small gram ⊝ coccobacillary rod, respiratory droplets; nontypeable [unencapsulated] strains now the most common cause of mucosal infections — otitis media, conjunctivitis, bronchitis — AND invasive infections since the type b vaccine; IgA protease; culture on chocolate agar with factors V [NAD+] and X [hematin], or satellitism around S aureus which provides factor V via RBC hemolysis; epiglottitis with cherry-red endoscopic appearance and thumb sign on lateral neck x-ray, meningitis, otitis media, pneumonia; the type b vaccine is polyribosylribitol phosphate conjugated to diphtheria toxoid, given 2-18 months; does not cause the flu; amoxicillin +/− clavulanate for mucosal disease, ceftriaxone for meningitis, rifampin prophylaxis for close contacts); B pertussis (aerobic coccobacillus; pertussis toxin disables Gi, adenylate cyclase toxin ↑ cAMP, tracheal cytotoxin destroys respiratory ciliated epithelium; catarrhal → paroxysmal [inspiratory whoop, posttussive vomiting] → convalescent; prevented by Tdap [preTeens and adulTs] and DTaP [chilDren]; produces lymphocytosis unlike most acute bacterial infections; macrolides, TMP-SMX if allergic); Brucella (aerobic coccobacillus; unpasteurized milk; survives in macrophages of the reticuloendothelial system; noncaseating granulomas; undulant fever, night sweats, arthralgia; doxycycline + rifampin or streptomycin); with Pasteurella, Francisella tularensis, and Acinetobacter baumannii on the tree. CURVED RODS — oxidase ⊕, split by growth condition: 42°C = Campylobacter jejuni; alkaline media = Vibrio cholerae; urease = Helicobacter pylori. BACILLI — lactose first: NON-lactose with oxidase ⊕ = Pseudomonas and Burkholderia; NON-lactose with oxidase ⊝ split by H2S on TSI agar — ⊝ = Shigella and Yersinia (footnote: pleomorphic rod/coccobacillus), ⊕ = Salmonella and Proteus; lactose ⊕ split by speed — fast = E coli, Klebsiella, Enterobacter; slow = Citrobacter, Serratia. THE WATER ORGANISMS: L pneumophila (gram ⊝ rod that stains poorly — silver stain; grows on charcoal yeast extract with iron and cysteine; detected by urine antigen; labs may show hyponatremia and elevated transaminases; aerosol transmission from environmental water — air conditioning systems, hot water tanks, cruise ships, nursing homes — with NO person-to-person transmission; Legionnaires disease = severe often unilateral lobar pneumonia with fever and GI/CNS symptoms in older, smoking, chronic-lung-disease patients; Pontiac fever = mild flulike illness; macrolide or quinolone); P aeruginosa (aerobic, motile, catalase ⊕, non-lactose fermenting, oxidase ⊕ rod of water with increased virulence in acidic environments and a grapelike odor; pneumonia, sepsis, ecthyma gangrenosum, UTIs, otitis externa [swimmer's ear], nosocomial catheter infections, injection-drug-use infections, hot tub folliculitis, burn wound infections, corneal ulcers in contact lens wearers; the mucoid polysaccharide capsule drives chronic CF pneumonia via biofilm; PEEP — Phospholipase C degrading cell membranes, Endotoxin causing fever and shock, Exotoxin A inactivating EF-2, green Pigment; antipseudomonal penicillins + β-lactamase inhibitors, 3rd/4th-generation cephalosporins, monobactams, fluoroquinolones, carbapenems — aminoglycoside monotherapy avoided for poor performance in acidic environments); B cepacia complex (aerobic, catalase ⊕, often multidrug resistant; pneumonia in underlying lung disease such as cystic fibrosis; a relative contraindication to lung transplant).",
    why: "This block carries two exam institutions. The first is the TREE: every gram ⊝ rod or diplococcus question resolves through morphology → maltose/oxidase/lactose/H2S gates, and the tree's leaves pre-load the later topics (Salmonella/Shigella/Yersinia for the enterics chapter, Campylobacter/Vibrio/H pylori for the GI chapter) — the same tree M9 drew for the gram ⊕ cocci, inverted. The second is the RESERVOIR LOGIC: the coccobacilli and water organisms are named by where the patient met them — unpasteurized milk (Brucella with its macrophage survival and undulant fever), aerosolized water with no person-to-person spread (Legionella with its silver stain, charcoal yeast extract, and urine antigen), water and acidic environments (Pseudomonas with ecthyma gangrenosum, swimmer's ear, and the CF biofilm), respiratory droplets in close quarters (meningococci with Waterhouse-Friderichsen), and the special media set (chocolate agar's factors V and X — the satellitism trick). The vaccine column is a mini-course in immunology: the conjugate principle (Hib PRP → diphtheria toxoid), the antigenic-variation principle (no gonococcal vaccine), and the type B meningococcal vaccine for at-risk individuals.",
    keyIdea: "Run the tree, then read the reservoir. GRAM ⊝ DIPLOCOCCI + maltose: glucose only = gonorrhoeae (sexual/perinatal; NAAT; ceftriaxone; erythromycin eyes for the neonate) vs glucose + maltose = meningitidis (close quarters; capsule; petechiae + toe gangrene + Waterhouse-Friderichsen; ceftriaxone/penicillin G + contact prophylaxis). COCCOBACILLI: chocolate agar V/X + thumb-sign epiglottitis = H influenzae (nontypeable now dominant; Hib PRP-toxoid vaccine; NOT the flu); whoop in three stages + lymphocytosis + Gi-disabling toxin = B pertussis (Tdap/DTaP; macrolides); unpasteurized milk + undulant fever + RES macrophages = Brucella (doxycycline + rifampin). CURVED RODS: 42°C Campylobacter / alkaline Vibrio / urease H pylori. BACILLI: lactose ⊝ + oxidase ⊕ = Pseudomonas (water, green pigment, ecthyma, CF biofilm; Exotoxin A hits EF-2 like diphtheria) and Burkholderia (CF, transplant contraindication); lactose ⊝ + oxidase ⊝ → H2S on TSI: ⊝ Shigella/Yersinia vs ⊕ Salmonella/Proteus; lactose ⊕ fast E coli/Klebsiella/Enterobacter vs slow Citrobacter/Serratia. WATER AEROSOLS + NO PERSON-TO-PERSON + hyponatremia + ↑ transaminases = Legionella (silver stain, charcoal yeast extract + iron + cysteine, urine antigen; Legionnaires severe lobar pneumonia vs Pontiac mild flu).",
  },
  mechanisms: [
    {
      id: "gram-neg-tree-logic",
      title: "The gram ⊝ tree: morphology, then the discriminating tests",
      context: "From the printed lab algorithm to the exam's identification logic",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A gram ⊝ (pink) organism on stain must be placed before therapy and prophylaxis can be chosen",
            sublabel: "Input — the identification problem the tree resolves.",
            variant: "input",
          },
          {
            id: "s1",
            label: "GATE 1 — MORPHOLOGY: diplococci (the Neisseria pair + Moraxella) · coccobacilli (H influenzae, B pertussis, Pasteurella, Brucella, F tularensis, A baumannii) · curved rods (Campylobacter, Vibrio, H pylori) · bacilli (the enteric and water rods)",
            sublabel: "Process — the four-lane split that picks the downstream test.",
            variant: "process",
          },
          {
            id: "s2",
            label: "GATE 2 — THE DISCRIMINATORS: diplococci by MALTOSE (glucose only = gonorrhoeae; glucose + maltose = meningitidis); curved rods by GROWTH CONDITION (42°C Campylobacter, alkaline Vibrio, urease H pylori); bacilli by LACTOSE (⊝ → oxidase: ⊕ = Pseudomonas/Burkholderia; ⊝ → H2S on TSI: ⊝ = Shigella/Yersinia, ⊕ = Salmonella/Proteus; ⊕ → speed: fast = E coli/Klebsiella/Enterobacter, slow = Citrobacter/Serratia)",
            sublabel: "Process — each lane's signature test, exactly as the printed tree wires them.",
            variant: "process",
          },
          {
            id: "o1",
            label: "OUTPUT — each leaf carries its disease set and management column: the Neisseria pair's seven-row split (capsule, maltose, vaccine, spread, diseases, diagnosis, treatment); the special-media set (chocolate agar V/X for Haemophilus; charcoal yeast extract + iron + cysteine for Legionella); the CF pair (Pseudomonas biofilm, Burkholderia transplant contraindication)",
            sublabel: "Output — the tree is the pre-load for the enterics and GI chapters.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "morphology" },
          { from: "s1", to: "s2", label: "maltose / growth condition / lactose" },
          { from: "s2", to: "o1", label: "leaf protocols" },
        ],
        caption:
          "The printed algorithm is the gram-negative mirror of M9's cocci tree: morphology first, then one discriminating test per lane. The diplococci are the Neisseria pair — both metabolize glucose, produce IgA protease, and carry LOS with strong endotoxin activity — and the maltose fermentation is their separator (gonococci make glucose acid only; meningococci make maltose and glucose acid), which is why the seven-row comparison starts with the capsule and ends with the treatment. The coccobacilli need no second gate: they are the aerobic roster from Haemophilus (chocolate agar, factors V and X) through Bordetella, Pasteurella, Brucella, Francisella, and Acinetobacter. The curved rods are oxidase ⊕ and split by growth condition — 42°C for Campylobacter jejuni, alkaline media for Vibrio cholerae, urease for Helicobacter pylori. The bacilli lane is the tree's workhorse: lactose fermentation first — the non-lactose fermenters split by oxidase (⊕ = Pseudomonas and Burkholderia; ⊝ = the TSI lane where hydrogen sulfide separates Shigella and Yersinia from Salmonella and Proteus) and the lactose fermenters split by speed (fast = E coli, Klebsiella, Enterobacter; slow = Citrobacter, Serratia). Yersinia carries the tree's own footnote (pleomorphic rod/coccobacillus), and the source's note that important tests are bold and important pathogens bold italics marks the exam's emphasis hierarchy.",
      },
    },
    {
      id: "reservoir-to-disease",
      title: "From reservoir to disease: the environment names the organism",
      context: "The coccobacilli and water organisms as an exposure-history map",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Every organism in this block has an address: a food, a water source, a living arrangement, or a proximity",
            sublabel: "Input — the exposure history as the diagnostic test.",
            variant: "input",
          },
          {
            id: "s1",
            label: "THE FOOD/WATER SET: Brucella — unpasteurized milk and animal products, surviving in macrophages of the reticuloendothelial system (noncaseating granulomas, undulant fever with night sweats and arthralgia; doxycycline + rifampin or streptomycin); Legionella — aerosolized environmental water (air conditioning systems, hot water tanks, cruise ships, nursing homes) with NO person-to-person transmission, staining poorly on gram stain (use silver stain), growing on charcoal yeast extract with iron and cysteine, detected by urine antigen, with hyponatremia and elevated transaminases — Legionnaires disease (severe, often unilateral lobar pneumonia with GI and CNS symptoms in older smokers with chronic lung disease) vs Pontiac fever (mild flulike illness); macrolide or quinolone",
            sublabel: "Process — the unpasteurized-milk and water-aerosol exposures.",
            variant: "process",
          },
          {
            id: "s2",
            label: "THE HUMAN-PROXIMITY SET: N meningitidis — respiratory and oral secretions in close quarters (army barracks, college dorms): meningococcemia with petechial hemorrhages and gangrene of toes, meningitis, Waterhouse-Friderichsen syndrome; prophylaxis for close contacts (rifampin, ciprofloxacin, or ceftriaxone); N gonorrhoeae — sexual and perinatal transmission: neonatal conjunctivitis 2-5 days after birth prevented by erythromycin eye ointment; H influenzae and B pertussis — respiratory droplets (the epiglottitis and whooping-cough pair of the pediatric airway)",
            sublabel: "Process — the barracks, the birth canal, and the droplet.",
            variant: "process",
          },
          {
            id: "s3",
            label: "THE WATER-ROD SET: P aeruginosa — water everywhere, ↑ virulence in acidic environments, grapelike odor, green pigment; the disease list runs pneumonia, sepsis, ecthyma gangrenosum (the necrotic lesion of bacteremia in the immunocompromised), UTIs, otitis externa (swimmer's ear), nosocomial catheter and equipment infections, injection-drug-use infections, hot tub folliculitis, burn wounds, and corneal ulcers in contact lens wearers; the mucoid polysaccharide capsule builds the chronic CF biofilm; PEEP = Phospholipase C, Endotoxin, Exotoxin A (inactivates EF-2 — diphtheria's target), green Pigment; B cepacia complex — CF pneumonia, multidrug resistant, a relative contraindication to lung transplant",
            sublabel: "Process — the water rods and the cystic-fibrosis pair.",
            variant: "process",
          },
          {
            id: "o1",
            label: "OUTPUT — therapy reads from the address: macrolides for the whoop and the water pneumonia (pertussis, Legionella); antipseudomonal agents in combination for Pseudomonas (with aminoglycoside monotherapy avoided in acidic environments); ceftriaxone for both Neisseria (plus doxycycline for gonococcal chlamydia co-infection, plus contact prophylaxis for meningococci); doxycycline-rifampin for Brucella",
            sublabel: "Output — the management column of the reservoir map.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "food and water" },
          { from: "s1", to: "s2", label: "human proximity" },
          { from: "s2", to: "s3", label: "the water rods" },
          { from: "s3", to: "o1", label: "therapy by address" },
        ],
        caption:
          "The reservoir is the fastest diagnostic test in this block. Unpasteurized milk with undulant fever is Brucella — an aerobic coccobacillus that survives inside macrophages of the reticuloendothelial system and forms noncaseating granulomas (doxycycline with rifampin or streptomycin). An air-conditioned hotel, a cruise ship, or a nursing home with a severe unilateral lobar pneumonia, hyponatremia, and elevated transaminases is Legionella — the organism that stains poorly (silver stain), grows only on charcoal yeast extract with iron and cysteine, announces itself by urine antigen, and never passes person to person; the same water source can instead produce the mild flulike Pontiac fever. Water in the broader sense owns Pseudomonas: the swimmer's ear, the hot tub folliculitis, the burn wound, the catheter, the contact-lens corneal ulcer, and the cystic-fibrosis biofilm (mucoid capsule), with ecthyma gangrenosum as its bacteremic signature in the immunocompromised and PEEP as its toxin set (Phospholipase C on membranes, Endotoxin for fever and shock, Exotoxin A inactivating EF-2 — diphtheria's target again, and the green Pigment that names the plate); therapy is combination antipseudomonal coverage, with aminoglycoside monotherapy avoided because it performs poorly in the acidic environments Pseudomonas favors. The human addresses complete the map: the college dorm (meningococci — petechiae, toe gangrene, Waterhouse-Friderichsen, with prophylaxis for close contacts), the birth canal (gonococcal neonatal conjunctivitis at 2-5 days, prevented by erythromycin ointment), and the pediatric airway (Haemophilus epiglottitis with its thumb sign; Bordetella's three-stage whoop with its lymphocytosis).",
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "gram-neg-bacilli-map",
      title: "The lab algorithm tree + the Neisseria split + the environment roster",
      caption:
        "An original KYP redraw of the source's Gram-negative lab algorithm tree (the morphology root with the diplococci/coccobacilli/curved rods/bacilli lanes and their maltose, growth-condition, lactose, oxidase, and H2S-TSI gates, with the Yersinia footnote), the seven-row gonococci-vs-meningococci comparison, and the eight-organism environment roster.",
      notice:
        "The printed images (gonococci within neutrophils, meningococcemic gangrene of toes, the thumb-sign lateral neck x-ray, the unilateral lobar pneumonia imaging, the green-pigment plate, ecthyma gangrenosum) are raster — COPYRIGHTED, described-in-text only. FA's printed mnemonics (the French legionnaire with his silver helmet and campfire; PSEUDOMONAS; PEEP) are NOT reproduced — verification only, carried verbatim in the note's table block.",
    },
    {
      kind: "table",
      title: "The gram-negative bacilli — verbatim",
      intro: "The source's entries (books 139-141), verbatim.",
      columns: ["Organism", "Signature · Diseases (verbatim)"],
      rows: [
        ["The gram-negative lab algorithm (the tree)", "Gram ⊝ (pink) → Diplococci (aerobic; oxidase → maltose fermentation: N gonorrhoeae, Moraxella [no maltose] vs N meningitidis [maltose]) · Coccobacilli (aerobic: Haemophilus influenzae, Bordetella pertussis, Pasteurella, Brucella, Francisella tularensis, Acinetobacter baumannii) · Curved rods (oxidase ⊕: grows in 42°C → Campylobacter jejuni; grows in alkaline media → Vibrio cholerae; produces urease → Helicobacter pylori) · Bacilli (lactose fermentation → oxidase → H2S production on TSI agar: non-lactose oxidase ⊕ → Pseudomonas, Burkholderia [fast]; non-lactose oxidase ⊝ → Shigella, Yersinia ᵃ [H2S ⊝] vs Salmonella, Proteus [H2S ⊕]; lactose fast → E coli, Klebsiella, Enterobacter; lactose slow → Citrobacter, Serratia). Important tests are in bold. Important pathogens are in bold italics. ᵃ Pleomorphic rod/coccobacillus."],
        ["Neisseria (the genus rule)", "Gram ⊝ diplococci. Metabolize glucose and produce IgA proteases. Contain lipooligosaccharides (LOS) with strong endotoxin activity. N gonorrhoeae is often intracellular (within neutrophils) A [printed micrograph — gram ⊝ diplococci inside neutrophils; described-in-text only]. Acid production: meningococci—maltose and glucose; gonococci—glucose."],
        ["Gonococci vs meningococci (the printed comparison)", "GONOCOCCI: No polysaccharide capsule; no maltose acid detection; no vaccine due to antigenic variation of pilus proteins; sexually or perinatally transmitted; causes gonorrhea, septic arthritis, neonatal conjunctivitis (2-5 days after birth), pelvic inflammatory disease (PID), and Fitz-Hugh–Curtis syndrome; diagnosed with NAAT; condoms ↓ sexual transmission, erythromycin eye ointment prevents neonatal blindness; treatment: single dose IM ceftriaxone, if chlamydial coinfection not excluded by molecular testing, add doxycycline. MENINGOCOCCI: polysaccharide capsule; maltose acid detection; vaccine (type B vaccine available for at-risk individuals); transmitted via respiratory and oral secretions, more common among individuals in close quarters (eg, army barracks, college dorms); causes meningococcemia with petechial hemorrhages and gangrene of toes B [printed photograph — meningococcemic toe gangrene; described-in-text only], meningitis, Waterhouse-Friderichsen syndrome (acute hemorrhagic adrenal insufficiency); diagnosed via culture-based tests or PCR; rifampin, ciprofloxacin, or ceftriaxone prophylaxis in close contacts; treatment: ceftriaxone or penicillin G."],
        ["H influenzae", "Small gram ⊝ (coccobacillary) rod. Transmitted through respiratory droplets. Nontypeable (unencapsulated) strains are the most common cause of mucosal infections (otitis media, conjunctivitis, bronchitis) as well as invasive infections since the vaccine for capsular type b was introduced. Produces IgA protease. Culture on chocolate agar, which contains factors V (NAD+) and X (hematin) for growth; can also be grown with S aureus, which provides factor V via RBC hemolysis. Haemophilus causes epiglottitis (endoscopic appearance can be cherry red in children; thumb sign on lateral neck x-ray A [printed radiograph — the swollen epiglottis; described-in-text only]), meningitis, otitis media, and pneumonia. Vaccine contains type b capsular polysaccharide (polyribosylribitol phosphate) conjugated to diphtheria toxoid or other protein. Given between 2 and 18 months of age. Does not cause the flu (influenza virus does). Treatment: amoxicillin +/− clavulanate for mucosal infections; ceftriaxone for meningitis; rifampin prophylaxis for close contacts."],
        ["B pertussis", "Gram ⊝, aerobic coccobacillus. Virulence factors include pertussis toxin (disables Gi), adenylate cyclase toxin (↑ cAMP), and tracheal cytotoxin (destroys respiratory ciliated epithelium). Three clinical stages: Catarrhal—low-grade fevers, coryza. Paroxysmal—paroxysms of intense cough followed by inspiratory whoop (whooping cough), posttussive vomiting. Convalescent—gradual recovery of chronic cough. Prevented by Tdap, DTaP vaccines (Tdap for preTeens and adulTs, DTaP for chilDren). Produces lymphocytosis (unlike most acute bacterial infections). Treatment: macrolides; if allergic use TMP-SMX."],
        ["Brucella", "Gram ⊝, aerobic coccobacillus. Transmitted via ingestion of contaminated animal products (eg, unpasteurized milk). Survives in macrophages in the reticuloendothelial system. Can form noncaseating granulomas. Typically presents with undulant fever, night sweats, and arthralgia. Treatment: doxycycline + rifampin or streptomycin."],
        ["L pneumophila", "Gram ⊝ rod. Gram stains poorly—use silver stain. Grow on charcoal yeast extract medium with iron and cysteine. Detected by presence of antigen in urine. Labs may show hyponatremia and elevated transaminases. Aerosol transmission from environmental water source (eg, air conditioning systems, hot water tanks). Outbreaks associated with cruise ships, nursing homes. No person-to-person transmission. Treatment: macrolide or quinolone. Think of a French legionnaire (soldier) with his silver helmet, sitting around a campfire (charcoal) with his iron dagger—he is missing his sister (cysteine) (FA mnemonic, printed). Legionnaires' disease—severe pneumonia (often unilateral and lobar A [printed imaging — lobar consolidation; described-in-text only]), fever, GI and CNS symptoms. Risk factors include older age, tobacco smoking, chronic lung disease. Pontiac fever—mild flulike symptoms."],
        ["P aeruginosa", "Aeruginosa—aerobic; motile, catalase ⊕, gram ⊝ rod. Non-lactose fermenting. Oxidase ⊕. Frequently found in water. Increased virulence in acidic environments. Has a grapelike odor. PSEUDOMONAS is associated with: Pneumonia, Sepsis, Ecthyma gangrenosum, UTIs, Diabetes, Osteomyelitis, Mucoid polysaccharide capsule, Otitis externa (swimmer's ear), Nosocomial (healthcare-associated) infections (eg, catheters, equipment), Addiction (injection drug use), Skin infections (eg, hot tub folliculitis, wound infection in burn victims) (FA mnemonic, printed). Mucoid polysaccharide capsule may contribute to chronic pneumonia in patients with cystic fibrosis due to biofilm formation. Produces PEEP: Phospholipase C (degrades cell membranes); Endotoxin (fever, shock); Exotoxin A (inactivates EF-2); green Pigment A [printed color plate — green pigment on agar; described-in-text only]. Corneal ulcers/keratitis in contact lens wearers/minor eye trauma. Ecthyma gangrenosum—rapidly progressive, necrotic cutaneous lesion B [printed photograph — the necrotic eschar of ecthyma gangrenosum; described-in-text only] caused by Pseudomonas bacteremia. Typically seen in immunocompromised patients. Treatments: antipseudomonal penicillins in combination with β-lactamase inhibitor (eg, piperacillin-tazobactam); 3rd- and 4th-generation cephalosporins (eg, ceftazidime, cefepime); monobactams; fluoroquinolones (eg, ciprofloxacin, levofloxacin); carbapenems. Despite antipseudomonal activity, aminoglycoside monotherapy is avoided due to poor performance in acidic environments."],
        ["B cepacia complex", "Aerobic, catalase ⊕, gram ⊝ rod. Causes pneumonia in patients with underlying lung disease, such as cystic fibrosis. Often multidrug resistant. Infection is a relative contraindication to undergoing lung transplant due to its association with poor outcomes."],
      ],
      caption:
        "Read the table with the tree: the tree places every organism, the Neisseria rows split the diplococci seven ways, and the reservoir rows carry the exposure histories. The printed images' pointers (A/B markers) are carried verbatim; the photographs themselves are described-in-text only.",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "The protocols the tree and reservoir imply",
      body: "THE NEISSERIA PROTOCOLS: gonococci — NAAT to diagnose, single-dose IM ceftriaxone to treat (add doxycycline unless molecular testing excludes chlamydia), erythromycin eye ointment for the exposed neonate (conjunctivitis at 2-5 days); meningococci — culture or PCR, ceftriaxone or penicillin G, and PROPHYLAXIS FOR CLOSE CONTACTS (rifampin, ciprofloxacin, or ceftriaxone) because the dorm and the barracks are the transmission story; Waterhouse-Friderichsen is the adrenal-apoplexy complication to name. THE HAEMOPHILUS PROTOCOL: chocolate agar (factors V [NAD+] and X [hematin]) or satellitism around S aureus grows it; nontypeable strains now dominate mucosal and invasive disease (the type b vaccine worked); the Hib vaccine is PRP conjugated to diphtheria toxoid (2-18 months); amoxicillin +/− clavulanate for mucosal disease, ceftriaxone for meningitis, rifampin for close contacts — and it does NOT cause the flu. THE PERTUSSIS PROTOCOL: three stages (catarrhal → paroxysmal whoop → convalescent), lymphocytosis as the lab signature, Tdap for preTeens and adulTs / DTaP for chilDren, macrolides (TMP-SMX if allergic). THE BRUCELLA PROTOCOL: ask for unpasteurized milk; expect undulant fever, night sweats, arthralgia, noncaseating granulomas; treat with doxycycline + rifampin or streptomycin. THE LEGIONELLA PROTOCOL: the water source (AC, hot water tanks, cruise ships, nursing homes) with NO person-to-person spread; silver stain (poor gram stain), charcoal yeast extract with iron and cysteine, urine antigen, hyponatremia with elevated transaminases; macrolide or quinolone. THE PSEUDOMONAS PROTOCOL: water + acidic environments + grapelike odor; ecthyma gangrenosum in the bacteremic immunocompromised; swimmer's ear, hot tub folliculitis, burn wounds, contact-lens keratitis, CF biofilm; combination antipseudomonal therapy (piperacillin-tazobactam, ceftazidime/cefepime, monobactams, fluoroquinolones, carbapenems) with aminoglycoside MONOtherapy avoided in acidic foci; Burkholderia cepacia in CF is the transplant-contraindication organism.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "An 18-year-old college freshman is brought from his dormitory with fever, confusion, and a purpuric rash over the trunk and extremities; several toes are dusky black; blood pressure is 70/40 and a cortisol level drawn during resuscitation is undetectable.",
        discriminator: "Dormitory + petechiae + toe gangrene + shock with adrenal insufficiency",
        concept: "Meningococcemia with Waterhouse-Friderichsen syndrome",
        answer:
          "N meningitidis: the polysaccharide-capsulated, maltose-fermenting gram ⊝ diplococcus of respiratory spread in close quarters (army barracks, college dorms). Meningococcemia causes petechial hemorrhages and gangrene of the toes; meningitis follows; Waterhouse-Friderichsen syndrome is the acute hemorrhagic adrenal insufficiency behind the refractory shock. Diagnose by culture-based tests or PCR; treat with ceftriaxone or penicillin G; give close contacts prophylaxis (rifampin, ciprofloxacin, or ceftriaxone); the type B vaccine is available for at-risk individuals.",
      },
      {
        stem: "A 62-year-old smoker returns from a cruise with 2 days of high fever, productive cough, diarrhea, and confusion; chest imaging shows a dense unilateral lower-lobe consolidation; laboratories reveal sodium 126 mEq/L, AST 90 U/L, and ALT 85 U/L; a urinary antigen test is positive.",
        discriminator: "Cruise ship + severe pneumonia + GI/CNS symptoms + hyponatremia + ↑ transaminases + urine antigen",
        concept: "Legionella pneumophila — the water-aerosol pneumonia",
        answer:
          "Legionnaires disease: Legionella pneumophila is the gram ⊝ rod that stains poorly (silver stain), grows on charcoal yeast extract with iron and cysteine, and is detected by urine antigen; labs show hyponatremia and elevated transaminases. Transmission is aerosol from environmental water (air conditioning systems, hot water tanks; cruise ships and nursing homes for outbreaks) with NO person-to-person spread. Risk factors: older age, tobacco smoking, chronic lung disease. Treat with a macrolide or quinolone. (The same exposure can produce the mild flulike Pontiac fever.)",
      },
      {
        stem: "A 6-year-old with cystic fibrosis has progressive dyspnea and a cough productive of green sputum; sputum grows an oxidase ⊕, non-lactose-fermenting gram ⊝ rod with a grapelike odor; the team is planning lung-transplant evaluation.",
        discriminator: "CF + green sputum + oxidase ⊕ non-lactose fermenter + grapelike odor",
        concept: "P aeruginosa — the CF biofilm organism",
        answer:
          "Pseudomonas aeruginosa: aerobic, motile, catalase ⊕, oxidase ⊕, non-lactose fermenting gram ⊝ rod of water, with a grapelike odor, green pigment, and increased virulence in acidic environments. In CF, the mucoid polysaccharide capsule drives chronic pneumonia via biofilm formation. The toxin set is PEEP (Phospholipase C, Endotoxin, Exotoxin A which inactivates EF-2, green Pigment). Treat with antipseudomonal combinations (piperacillin-tazobactam, ceftazidime/cefepime, monobactams, fluoroquinolones, carbapenems); avoid aminoglycoside monotherapy (poor performance in acidic environments). (A relative contraindication to lung transplant is Burkholderia cepacia infection — the tree's other CF organism.)",
      },
    ],
    traps: [
      {
        a: "H influenzae causes the flu",
        b: "H influenzae does NOT cause the flu — influenza virus does; Haemophilus causes epiglottitis, meningitis, otitis media, and pneumonia",
        whyConfused: "The genus name carries 'influenza.'",
        keyDifference:
          "The name is a historical misnomer from the era before viruses were isolable. The modern exam point: nontypeable (unencapsulated) H influenzae strains are now the most common cause of mucosal infections (otitis media, conjunctivitis, bronchitis) AND invasive infections since the type b vaccine; the organism grows on chocolate agar (factors V [NAD+] and X [hematin]) and satellites around S aureus.",
        clue: "Any H influenzae identification or epiglottitis question.",
      },
      {
        a: "Legionella spreads person to person like other pneumonias",
        b: "Legionella is transmitted ONLY by aerosols from environmental water sources — there is NO person-to-person transmission",
        whyConfused: "Most pneumonia stems from person-to-person spread, so the water source feels incidental.",
        keyDifference:
          "The reservoir is the water system (air conditioning, hot water tanks, cruise ships, nursing homes) — the exposure history IS the transmission story, and it is why outbreaks are building-associated and why prophylaxis of contacts is NOT indicated (unlike meningococci, where close-contact prophylaxis is the protocol). The workup set: silver stain (poor gram stain), charcoal yeast extract + iron + cysteine, urine antigen, hyponatremia + elevated transaminases.",
        clue: "Any outbreak or water-exposure pneumonia question.",
      },
      {
        a: "Aminoglycosides are the antipseudomonal backbone",
        b: "Aminoglycosides have antipseudomonal activity, but MONOtherapy is avoided due to poor performance in the acidic environments Pseudomonas favors",
        whyConfused: "Aminoglycosides are classic gram ⊝ agents (and Pseudomonas is the classic gram ⊝ rod).",
        keyDifference:
          "Pseudomonas increases its virulence in acidic environments — exactly where aminoglycosides underperform — so monotherapy is avoided in favor of combination regimens: antipseudomonal penicillins with β-lactamase inhibitors (piperacillin-tazobactam), 3rd/4th-generation cephalosporins (ceftazidime, cefepime), monobactams, fluoroquinolones, and carbapenems.",
        clue: "Any Pseudomonas therapy-selection question.",
      },
    ],
    pivots: [
      {
        lookAlike: "Gonococci vs meningococci (the diplococci pair)",
        differentiator: "Capsule, maltose, vaccine, spread, Waterhouse-Friderichsen",
        correctPath:
          "GONOCOCCI: no capsule, no maltose acid, no vaccine (antigenic variation of pilus proteins), sexual/perinatal spread — gonorrhea, septic arthritis, neonatal conjunctivitis (2-5 days), PID, Fitz-Hugh–Curtis; NAAT; single-dose IM ceftriaxone (+ doxycycline if chlamydia not excluded); condoms + erythromycin eye ointment. MENINGOCOCCI: capsule, maltose ⊕, type B vaccine for at-risk individuals, respiratory spread in close quarters — meningococcemia (petechiae, toe gangrene), meningitis, Waterhouse-Friderichsen; culture/PCR; ceftriaxone or penicillin G + contact prophylaxis (rifampin/ciprofloxacin/ceftriaxone).",
      },
      {
        lookAlike: "Pseudomonas vs Burkholderia (the CF non-lactose pair)",
        differentiator: "Grapelike odor/green pigment vs MDR/transplant contraindication",
        correctPath:
          "PSEUDOMONAS: oxidase ⊕ non-lactose fermenter of water — grapelike odor, green pigment (PEEP toxin set with Exotoxin A on EF-2), ecthyma gangrenosum, swimmer's ear, burn wounds, contact-lens keratitis, CF biofilm (mucoid capsule); combination antipseudomonal therapy. BURKHOLDERIA CEPACIA COMPLEX: the other CF organism — aerobic, catalase ⊕, often multidrug resistant, and a RELATIVE CONTRAINDICATION to lung transplant because of poor outcomes. Both sit on the tree's oxidase ⊕ non-lactose branch.",
      },
    ],
    miniCase: {
      vignette:
        "A 19-year-old college sophomore presents in September with 12 hours of fever, severe myalgias, and a rapidly spreading purpuric rash over the trunk and extremities. She lives in a dormitory and reports that two students on her floor were hospitalized last week with meningitis. Temperature is 39.8 °C, blood pressure 68/38, heart rate 128. Examination shows petechiae on the palate and conjunctivae, a diffuse purpuric rash, and cool dusky toes with absent capillary refill on the left foot. Laboratory studies are notable for sodium 129 mEq/L, glucose 190 mg/dL, lactate 7.8 mmol/L, and a cortisol level drawn during resuscitation of 1.2 μg/dL (unchanged after cosyntropin). Blood cultures are pending; a lumbar puncture shows 1,800 neutrophils/μL with a glucose of 18 mg/dL.",
      question:
        "Which prophylactic measure is most appropriate for the students who share her dormitory floor?",
      options: [
        {
          label: "A",
          text: "Rifampin, ciprofloxacin, or ceftriaxone prophylaxis for close contacts",
          correct: true,
          why: "Correct. This is meningococcal meningitis with meningococcemia and Waterhouse-Friderichsen syndrome (purpura, shock, and an inappropriately low cortisol unresponsive to cosyntropin — acute hemorrhagic adrenal insufficiency). N meningitidis spreads by respiratory and oral secretions and is more common in close quarters (college dorms, army barracks); close contacts receive rifampin, ciprofloxacin, or ceftriaxone prophylaxis. The patient herself is treated with ceftriaxone or penicillin G.",
        },
        {
          label: "B",
          text: "Erythromycin eye ointment for all floor residents",
          why: "Erythromycin ointment prevents NEONATAL gonococcal conjunctivitis (the 2-5-day disease of the birth canal) — it is the gonococcus protocol, not the meningococcus protocol, and it is applied to infants' eyes, not to dormitory contacts. The distractor swaps the two Neisseria.",
        },
        {
          label: "C",
          text: "No prophylaxis is indicated because the organism does not spread person to person",
          why: "That is LEGIONELLA's rule — aerosols from environmental water with no person-to-person transmission, so contacts are not treated. Meningococci are the opposite: respiratory-spread in close quarters is precisely the indication for contact prophylaxis. The distractor imports the water organism's epidemiology.",
        },
        {
          label: "D",
          text: "Rifampin prophylaxis for the patient's household contacts only if cultures grow a maltose-nonfermenting organism",
          why: "The maltose gate runs the wrong way: N meningitidis FERMENTS maltose (glucose + maltose acid) while gonococci ferment glucose only. And prophylaxis for meningococcal disease does not wait for or depend on the maltose result — the clinical syndrome plus the close-quarters exposure is the trigger. The distractor scrambles the tree gate and the prophylaxis rule.",
        },
        {
          label: "E",
          text: "Administration of the type B vaccine to all floor residents as immediate prophylaxis",
          why: "The type B meningococcal vaccine exists (for at-risk individuals) but vaccination is not IMMEDIATE prophylaxis for exposed contacts — the antibody response takes days to weeks; rifampin, ciprofloxacin, or ceftriaxone prophylaxis is what protects contacts in the exposure window. The distractor confuses prevention strategy with outbreak response.",
        },
      ],
      reasoning:
        "The vignette is meningococcal disease in full: the dormitory cluster, the fulminant petechial-purpuric rash, the dusky toes (meningococcemic gangrene), the shock, and the unresponsive low cortisol (Waterhouse-Friderichsen — acute hemorrhagic adrenal insufficiency), with a neutrophilic hypoglycorrhachic CSF. The question tests the public-health arm of the protocol: N meningitidis transmits by respiratory and oral secretions in close quarters, so close contacts receive rifampin, ciprofloxacin, or ceftriaxone prophylaxis. Each distractor imports another organism's protocol (the gonococcus's erythromycin eyes, Legionella's no-person-to-person rule) or inverts the tree (the maltose gate) or the timing (vaccine vs immediate chemoprophylaxis).",
    },
  },
  mnemonics: [
    {
      code: "\u201cMorphology picks the test: diplococci get maltose, curved rods get a growth condition, and bacilli get lactose — then oxidase, then the TSI smear.\u201d",
      meaning:
        "KYP's key for the gram ⊝ tree: diplococci split by maltose fermentation (gonorrhoeae ⊝ glucose-only with Moraxella; meningitidis ⊕ glucose + maltose); coccobacilli are the aerobic roster (H influenzae, B pertussis, Pasteurella, Brucella, F tularensis, A baumannii) with no second gate; curved rods split by growth condition (42°C Campylobacter, alkaline Vibrio, urease H pylori); bacilli split by lactose (⊝ + oxidase ⊕ = Pseudomonas, Burkholderia; ⊝ + oxidase ⊝ split by H2S on TSI — ⊝ Shigella/Yersinia vs ⊕ Salmonella/Proteus; ⊕ split by speed — fast E coli/Klebsiella/Enterobacter, slow Citrobacter/Serratia).",
      memorizes: "The gram-negative lab algorithm",
      whenToUse: "Any gram ⊝ organism identification question.",
      clinical: "The leaf carries the disease set — and the enterics leaves pre-load the GI chapter.",
    },
    {
      code: "\u201cThe address names the organism: the dorm gives petechiae and dead adrenals, the cruise ship gives a lone lobe with low sodium, the farm milk gives an undulating fever, and the swimming pool gives a green-scented ear.\u201d",
      meaning:
        "KYP's key for the reservoir map: close quarters (dorms, barracks) = meningococci (meningococcemia, toe gangrene, Waterhouse-Friderichsen — prophylax the contacts); aerosolized water on a cruise ship or nursing home = Legionella (severe unilateral lobar pneumonia, GI/CNS symptoms, hyponatremia + ↑ transaminases, urine antigen, NO person-to-person spread); unpasteurized milk = Brucella (macrophage survival, noncaseating granulomas, undulant fever); water for swimming and burns = Pseudomonas (swimmer's ear, hot tub folliculitis, ecthyma gangrenosum, grapelike odor, green pigment, CF biofilm).",
      memorizes: "The exposure-to-organism map",
      whenToUse: "Any environmental-exposure or outbreak stem.",
      clinical: "Ask where the patient has been before asking what the culture grew.",
    },
    {
      code: "\u201cTwo media lessons: Haemophilus eats chocolate (factors V and X from lysed cells), and Legionella needs the campfire set — charcoal, iron, and the missing sister cysteine.\u201d",
      meaning:
        "KYP's key for the special-media pair: H influenzae grows on chocolate agar (heated blood releasing factors V [NAD+] and X [hematin]) or by satelliting around S aureus (factor V from hemolysis); Legionella stains poorly (silver stain) and grows only on charcoal yeast extract with iron and cysteine, announced by urine antigen. FA's own printed image (the French legionnaire with the silver helmet at the charcoal campfire with his iron dagger, missing his sister cysteine) is verification-only and stays in the table block.",
      memorizes: "The growth-requirement pair of the gram ⊝ block",
      whenToUse: "Any media-selection or stain-selection question.",
      clinical: "Chocolate agar for the coccobacillus; silver + charcoal-iron-cysteine for the water rod.",
    },
  ],
  rapidReview: {
    s30: [
      "Morphology first: diplococci / coccobacilli / curved rods / bacilli",
      "Maltose: meningitidis ⊕ (glucose + maltose) vs gonorrhoeae ⊝ (glucose only) + Moraxella",
      "Curved rods: 42°C Campylobacter · alkaline Vibrio · urease H pylori",
      "Bacilli: lactose ⊝ → oxidase ⊕ = Pseudomonas, Burkholderia; lactose ⊕ fast = E coli, Klebsiella, Enterobacter; slow = Citrobacter, Serratia",
      "H2S on TSI: Salmonella, Proteus ⊕ vs Shigella, Yersinia ⊝ (Yersinia = pleomorphic rod/coccobacillus)",
    ],
    m3: [
      "Gonococci: no capsule, no vaccine (pilus antigenic variation), sexual/perinatal; NAAT; IM ceftriaxone ± doxycycline",
      "Meningococci: capsule, maltose ⊕, type B vaccine, close quarters; petechiae + toe gangrene + Waterhouse-Friderichsen; ceftriaxone/penicillin G + contact prophylaxis",
      "H influenzae: chocolate agar V (NAD+) + X (hematin); satellitism around S aureus; nontypeable strains dominate post-Hib; thumb-sign epiglottitis; NOT the flu",
      "B pertussis: toxin disables Gi; ↑cAMP; tracheal cytotoxin; 3 stages; LYMPHOCYTOSIS; Tdap/DTaP; macrolides",
      "Brucella: unpasteurized milk; RES macrophages; noncaseating granulomas; undulant fever; doxycycline + rifampin or streptomycin",
    ],
    m10: [
      "Legionella: silver stain; charcoal yeast extract + iron + cysteine; urine antigen; hyponatremia + ↑ transaminases; water aerosols, NO person-to-person; Legionnaires vs Pontiac fever; macrolide or quinolone",
      "Pseudomonas: water, acidic-environment virulence, grapelike odor, green pigment; swimmer's ear, hot tub folliculitis, burns, contact-lens keratitis, ecthyma gangrenosum",
      "Pseudomonas PEEP: Phospholipase C, Endotoxin, Exotoxin A (EF-2), green Pigment; mucoid capsule → CF biofilm",
      "Antipseudomonal: piperacillin-tazobactam, ceftazidime/cefepime, monobactams, fluoroquinolones, carbapenems; aminoglycoside MONOtherapy avoided (acidic foci)",
      "B cepacia: CF pneumonia, MDR, relative contraindication to lung transplant",
    ],
  },
  recall: [
    {
      q: "Walk the gram ⊝ tree: morphology, then every gate to its leaves.",
      a: "GRAM ⊝ (pink) → DIPLOCOCCI (aerobic, oxidase): maltose fermentation — ⊝ (glucose only) = N gonorrhoeae + Moraxella; ⊕ (glucose + maltose) = N meningitidis. COCCOBACILLI (aerobic): H influenzae, B pertussis, Pasteurella, Brucella, F tularensis, A baumannii. CURVED RODS (oxidase ⊕): 42°C → C jejuni; alkaline media → V cholerae; urease → H pylori. BACILLI: lactose — ⊝ + oxidase ⊕ → Pseudomonas, Burkholderia; ⊝ + oxidase ⊝ → H2S on TSI: ⊝ → Shigella, Yersiniaᵃ (pleomorphic rod/coccobacillus); ⊕ → Salmonella, Proteus; ⊕ → speed: fast → E coli, Klebsiella, Enterobacter; slow → Citrobacter, Serratia.",
    },
    {
      q: "Give the gonococci-vs-meningococci split on all seven axes.",
      a: "CAPSULE: none vs polysaccharide. MALTOSE: no acid vs acid detection. VACCINE: none (antigenic variation of pilus proteins) vs type B vaccine for at-risk individuals. SPREAD: sexual or perinatal vs respiratory/oral secretions in close quarters (barracks, dorms). DISEASES: gonorrhea, septic arthritis, neonatal conjunctivitis (2-5 days), PID, Fitz-Hugh–Curtis vs meningococcemia (petechial hemorrhages, gangrene of toes), meningitis, Waterhouse-Friderichsen (acute hemorrhagic adrenal insufficiency). DIAGNOSIS: NAAT vs culture-based tests or PCR. TREATMENT: single-dose IM ceftriaxone (+ doxycycline if chlamydia not excluded); condoms, erythromycin eye ointment vs ceftriaxone or penicillin G; rifampin/ciprofloxacin/ceftriaxone prophylaxis for close contacts.",
    },
    {
      q: "What grows Haemophilus, and what shifted after the Hib vaccine?",
      a: "Chocolate agar — which contains factors V (NAD+) and X (hematin) from the heated blood; alternatively, satellitism around S aureus, which provides factor V via RBC hemolysis. After the type b vaccine (polyribosylribitol phosphate conjugated to diphtheria toxoid, given 2-18 months), NONTYPEABLE (unencapsulated) strains became the most common cause of both mucosal infections (otitis media, conjunctivitis, bronchitis) and invasive infections. It does not cause the flu.",
    },
    {
      q: "State the Legionella workup set and its transmission rule.",
      a: "Gram stain is poor — use SILVER STAIN; grows on charcoal yeast extract medium with iron and cysteine; detected by antigen in URINE; labs may show hyponatremia and elevated transaminases. Transmission: aerosols from environmental water sources (air conditioning systems, hot water tanks; outbreaks on cruise ships and in nursing homes) with NO person-to-person transmission. Legionnaires disease: severe pneumonia (often unilateral and lobar) with fever and GI/CNS symptoms in older smokers with chronic lung disease. Pontiac fever: mild flulike illness. Treatment: macrolide or quinolone.",
    },
    {
      q: "Give Pseudomonas's signature set and its therapy rules.",
      a: "Aerobic, motile, catalase ⊕, oxidase ⊕, non-lactose-fermenting gram ⊝ rod; found in water; increased virulence in acidic environments; grapelike odor; green pigment. Diseases: pneumonia (CF biofilm via the mucoid capsule), sepsis, ecthyma gangrenosum (necrotic lesion of bacteremia in the immunocompromised), UTIs, otitis externa (swimmer's ear), nosocomial catheter/equipment infections, injection-drug-use infections, hot tub folliculitis, burn wound infections, corneal ulcers (contact lens wearers). Toxins (PEEP): Phospholipase C, Endotoxin, Exotoxin A (inactivates EF-2), green Pigment. Therapy: antipseudomonal penicillin + β-lactamase inhibitor (piperacillin-tazobactam), 3rd/4th-generation cephalosporins (ceftazidime, cefepime), monobactams, fluoroquinolones, carbapenems; aminoglycoside monotherapy avoided (poor performance in acidic environments).",
    },
  ],
  related: [
    {
      title: "Gram-Positive Cocci: Staphylococcus & Streptococcus",
      topicId: "gram-positive-cocci",
      note: "M9's tree is the gram ⊕ mirror of this note's algorithm — morphology first, then the discriminating test per lane; the two trees together close the identification logic of Clinical Bacteriology.",
    },
    {
      title: "Special Culture Requirements",
      topicId: "special-culture-requirements",
      note: "M3's media directory returns at the species level: chocolate agar's factors V and X for Haemophilus, charcoal yeast extract with iron and cysteine for Legionella — the enrich/select/indicate logic applied to real organisms.",
    },
    {
      title: "Exotoxins vs Endotoxins",
      topicId: "exotoxins-endotoxins",
      note: "M8's axis runs through the block: the Neisseria LOS (strong endotoxin activity driving meningococcemic shock), Pseudomonas Exotoxin A hitting EF-2 exactly like diphtheria, and pertussis toxin disabling Gi — the ADP-ribosylation family at work.",
    },
  ],
  crossLinks: [
    {
      subject: "Pharmacology (Antimicrobials)",
      connection: "The therapy column of the tree: ceftriaxone across the Neisseria; macrolides for pertussis and Legionella; the antipseudomonal armamentarium (piperacillin-tazobactam, ceftazidime/cefepime, monobactams, fluoroquinolones, carbapenems) with the aminoglycoside-mono caveat in acidic foci; and doxycycline-rifampin for Brucella.",
    },
    {
      subject: "Immunology (Vaccines)",
      connection: "The vaccine column is the conjugate principle in action: Hib's polyribosylribitol phosphate conjugated to diphtheria toxoid (the infant immune system's T-cell-dependent response), the meningococcal type B vaccine for at-risk individuals, Tdap/DTaP for pertussis — and the gonococcus's antigenic pilus variation as the reason no vaccine exists.",
    },
    {
      subject: "Endocrinology (Adrenal)",
      connection: "Waterhouse-Friderichsen syndrome — the acute hemorrhagic adrenal insufficiency of meningococcemia — is the bacteriology anchor for every adrenal-crisis question: bilateral adrenal hemorrhage, refractory shock, and an inappropriately low cortisol.",
    },
    {
      subject: "Pulmonology (Cystic Fibrosis)",
      connection: "The CF airway is this block's stage: Pseudomonas's mucoid capsule building the chronic biofilm, Burkholderia cepacia as the multidrug-resistant transplant contraindication, and H influenzae and S aureus as the earlier colonizers of the sequence.",
    },
  ],
};
