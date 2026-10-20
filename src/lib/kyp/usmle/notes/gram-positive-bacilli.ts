import type { KypUsMLENote } from "../types";

// Microbiology — Clinical Bacteriology banner (M-batch 10).
// Source: First Aid 2026, Part 1 pdf 158-159 / book 136-137
// (Bacillus cereus + Clostridioides difficile + the Clostridia [tetani,
//  botulinum, perfringens + the septicum rule] + Corynebacterium diphtheriae
//  + Listeria monocytogenes + the Nocardia-vs-Actinomyces comparison; the
//  B-anthracis bridge text on book 135 was covered by M9 per page ownership)

export const gramPositiveBacilli: KypUsMLENote = {
  id: "gram-positive-bacilli",
  title: "Gram-Positive Bacilli: Clostridia, Corynebacterium, Listeria & the Branching Filaments",
  subtitle:
    "The rod block of Clinical Bacteriology, organized by HOW the organism injures. Two clostridia cut the same SNARE proteins at different addresses — tetanospasmin rides retrograde axonal transport to the CNS and silences the Renshaw cell's GABA and glycine (the brake is cut → unopposed stimulation → SPASTIC paralysis), while botulinum toxin acts at the motor-neuron terminal and stops ACh release at the NMJ (the accelerator is cut → no stimulation → FLACCID paralysis, the 5 D's, no sensory deficits; babies eat SPORES in honey — floppy baby — adults eat PREFORMED toxin in cans). C perfringens dissolves membranes with α-toxin (lecithinase → gas gangrene, crepitus, hemolysis) and grows in food left standing below 60°C (10-12-hour enterotoxin). C difficile strips the colon with toxins A and B after clindamycin-class antibiotics and PPIs (pseudomembranous colitis → oral vancomycin or fidaxomicin; FMT for recurrence). B cereus rides reheated rice (emetic cereulide at 1-5 hours, preformed; diarrheal at 8-18 hours). C diphtheriae carries a β-prophage exotoxin that ADP-ribosylates EF-2 (protein synthesis halts → pharyngeal membrane, bull's neck, myocarditis, neuropathies; metachromatic granules, Elek test, antitoxin ± erythromycin/penicillin, toxoid vaccine). L monocytogenes is the facultative intracellular actin-rocket organism of cold foods and pregnancy (cold enrichment, rocket tails, listeriolysin, tumbling motility → amnionitis, granulomatosis infantiseptica, neonatal meningitis; ampicillin). The branching-filament pair closes the block: Nocardia (aerobe, catalase ⊕, weakly acid fast, soil, pulmonary and CNS abscess, sulfonamides) vs Actinomyces (anaerobe, catalase ⊝, not acid fast, normal microbiota, draining sinus tracts with sulfur granules, penicillin).",
  subject: "Microbiology",
  system: "Section II · High-Yield General Principles — Clinical Bacteriology",
  pilotCategory:
    "Clinical bacteriology — gram-positive bacilli: the SNARE neurotoxin axis (tetani retrograde/Renshaw vs botulinum NMJ); the membrane and enterocyte injurers (perfringens α-toxin, difficile toxins A/B, cereus cereulide); the phage-encoded EF-2 blockade (diphtheriae); the intracellular actin machinery (Listeria); and the branching-filament pair (Nocardia vs Actinomyces)",
  difficulty: 2,
  readTime: 13,
  sourceRef:
    "First Aid 2026, Part 1 pp. 136–137 (Bacillus cereus; Clostridioides difficile; Clostridia: C tetani, C botulinum, C perfringens; Corynebacterium diphtheriae; Listeria monocytogenes; Nocardia vs Actinomyces)",
  tags: [
    "gram-positive bacilli",
    "gram-positive rods",
    "SNARE proteins",
    "tetanospasmin",
    "Clostridium tetani",
    "retrograde axonal transport",
    "Renshaw cell",
    "GABA",
    "glycine",
    "spastic paralysis",
    "trismus",
    "lockjaw",
    "risus sardonicus",
    "opisthotonos",
    "tetanus vaccine",
    "tetanus antitoxin",
    "diazepam",
    "Clostridium botulinum",
    "botulism",
    "floppy baby syndrome",
    "botulinum immunoglobulin",
    "Botox",
    "the 5 D's",
    "descending flaccid paralysis",
    "Clostridium perfringens",
    "alpha-toxin",
    "lecithinase",
    "phospholipase",
    "gas gangrene",
    "myonecrosis",
    "crepitus",
    "Clostridium septicum",
    "colonic malignancy",
    "Clostridioides difficile",
    "toxins A and B",
    "pseudomembranous colitis",
    "toxic megacolon",
    "clindamycin",
    "oral vancomycin",
    "fidaxomicin",
    "fecal microbiota transplant",
    "Bacillus cereus",
    "reheated rice syndrome",
    "cereulide",
    "emetic food poisoning",
    "diarrheal food poisoning",
    "Corynebacterium diphtheriae",
    "beta-prophage",
    "ADP-ribosylation",
    "EF-2",
    "pseudomembranous pharyngitis",
    "bull's neck",
    "metachromatic granules",
    "Löffler media",
    "cystine-tellurite agar",
    "Elek test",
    "diphtheria antitoxin",
    "toxoid vaccine",
    "Listeria monocytogenes",
    "facultative intracellular",
    "cold enrichment",
    "rocket tails",
    "actin polymerization",
    "listeriolysin",
    "tumbling motility",
    "granulomatosis infantiseptica",
    "amnionitis",
    "ampicillin",
    "Nocardia",
    "Actinomyces",
    "branching filaments",
    "weakly acid fast",
    "sulfur granules",
    "sinus tracts",
    "TMP-SMX",
    "cerebral abscess",
  ],
  core: {
    what: "THE INJURY CODE OF THE GRAM ⊕ RODS. SNARE CLEAVERS — the Clostridia (gram ⊕, spore-forming, obligate anaerobic rods) whose tetanus and botulinum toxins are proteases that cleave SNARE proteins involved in neurotransmission: C tetani is noninvasive and remains localized to the wound while tetanospasmin spreads by retrograde axonal transport to the CNS and blocks release of GABA and glycine from Renshaw cells in the spinal cord → spastic paralysis (trismus [lockjaw], risus sardonicus [raised eyebrows and open grin], opisthotonos [spasms of spinal extensors]; prevent with the toxoid vaccine; treat with antitoxin +/− vaccine booster, antibiotics, diazepam for spasms, and wound debridement); C botulinum's heat-labile toxin prevents ACh release at the neuromuscular junction → botulism, the 5 D's (diplopia, dysarthria, dysphagia, dyspnea, descending flaccid paralysis) WITHOUT sensory deficits — in babies, ingestion of spores (eg, in honey) causes floppy baby syndrome; in adults, ingestion of preformed toxin (eg, in canned food); treat with human botulinum immunoglobulin (local botulinum toxin A injections treat focal dystonia, hyperhidrosis, muscle spasms, and wrinkles). MEMBRANE DISSOLVER — C perfringens produces α-toxin (lecithinase, a phospholipase) causing myonecrosis (gas gangrene with soft-tissue crepitus) and hemolysis; heavily spore-contaminated food cooked but left standing too long at <60°C germinates spores → vegetative bacteria → enterotoxin → late-onset (10-12 hours) food poisoning resolving in 24 hours; spontaneous gas gangrene via hematogenous seeding (associated with colonic malignancy) is most commonly C septicum. ENTEROCYTE STRIPPER — C difficile produces toxins A and B damaging enterocytes → watery diarrhea → pseudomembranous colitis, often 2° to antibiotic use (especially clindamycin, ampicillin, cephalosporins, fluoroquinolones) and associated with PPIs; fulminant infection = toxic megacolon, ileus, shock; diagnosed by PCR or antigen detection of one or both toxins in stool; treated with oral vancomycin or fidaxomicin (recurrent: repeat the regimen or fecal microbiota transplant). RICE TOXIN — B cereus (gram ⊕ rod) spores survive cooking rice (reheated rice syndrome): keeping rice warm germinates spores and forms enterotoxin — emetic type (nausea and vomiting within 1-5 hours; cereulide, a preformed toxin) vs diarrheal type (watery, nonbloody diarrhea and GI pain within 8-18 hours); supportive care (antibiotics are ineffective against toxins). PROTEIN-SYNTHESIS HALTER — C diphtheriae (gram ⊕ rods in angular arrangements, respiratory droplets) makes its exotoxin from a β-prophage; the toxin ADP-ribosylates EF-2 → necrosis in pharynx, cardiac, and CNS tissue; pseudomembranous pharyngitis (grayish-white membrane) with lymphadenopathy (bull's neck); dissemination → myocarditis, arrhythmias, neuropathies; lab: metachromatic (blue and red) granules, ⊕ Elek test; toxoid vaccine prevents; treat with antitoxin +/– erythromycin or penicillin. INTRACELLULAR ROCKET — L monocytogenes (gram ⊕, facultative intracellular rod) is acquired from unpasteurized dairy and cold deli meats, transplacentally, and by vaginal transmission during birth; grows at refrigeration temperatures (cold enrichment); forms rocket tails via actin polymerization (intracellular movement and cell-to-cell spread, avoiding antibody); listeriolysin generates pores in phagosomes (escape into cytoplasm); tumbling motility in broth; amnionitis, sepsis, spontaneous abortion in pregnancy; granulomatosis infantiseptica; meningitis in the immunocompromised, neonates, and older adults; mild self-limited gastroenteritis in the healthy; treat with ampicillin. THE BRANCHING FILAMENTS — Nocardia (aerobe, catalase ⊕, weakly acid fast, soil; pulmonary infections in the immunocompromised mimicking TB with ⊝ PPD, cutaneous infections after trauma, spread to CNS → cerebral abscess; treat with sulfonamides [TMP-SMX]) vs Actinomyces (anaerobe, catalase ⊝, not acid fast, normal oral/reproductive/GI microbiota; oral/facial abscesses draining through sinus tracts after dental caries/extraction, yellow sulfur granules, PID with IUDs; treat with penicillin) — both gram ⊕ long branching filaments resembling fungi.",
    why: "This block is the exam's mechanism theater: the two clostridial neurotoxins share an enzymatic class (SNARE protease) and differ only in address, which is why one produces spastic and the other flaccid paralysis — the single highest-yield contrast in bacteriology (cut the brake vs cut the accelerator). The injury logic then generalizes: diphtheria's β-prophage toxin is lysogenic conversion made lethal (M7's genetics at the bedside), perfringens' lecithinase is membrane chemistry (phospholipase → myonecrosis and hemolysis), difficile's toxins A/B are the antibiotic-risk signature (clindamycin-class + PPIs → colitis; the treatment is ORAL vancomycin or fidaxomicin because the disease is in the lumen), and cereus' two food clocks (1-5-hour preformed emetic vs 8-18-hour diarrheal) operationalize the preformed-vs-growing distinction the exam tests on every food-poisoning stem. Listeria closes the intracellular logic of M4 (facultative intracellular rod with actin rockets that spread cell to cell without antibody exposure) and carries the pregnancy-cold-foods protocol, while the Nocardia/Actinomyces pair teaches that filamentous bacteria exist, mimic fungi and TB, and split by oxygen, catalase, acid fastness, habitat, and treatment — SNAP.",
    keyIdea: "Read every gram ⊕ rod stem by its injury mechanism and its clock. SPASTIC after a wound = tetanospasmin (retrograde → Renshaw GABA/glycine block; trismus, risus sardonicus, opisthotonos). FLACCID + no sensory deficits = botulinum (NMJ ACh block; 5 D's; baby = spores in honey, adult = preformed in cans). CREPITUS after trauma = perfringens α-toxin (lecithinase → gas gangrene); spontaneous gangrene = C septicum → look for colonic malignancy. DIARRHEA after clindamycin-class antibiotics/PPIs = difficile (toxins A/B → pseudomembranous colitis; oral vancomycin or fidaxomicin; FMT if recurrent). VOMITING 1-5 HOURS after reheated rice = cereulide (preformed); WATERY DIARRHEA 8-18 HOURS = cereus diarrheal; CRAMPS 10-12 HOURS after food left standing <60°C = perfringens enterotoxin. GRAY MEMBRANE + BULL'S NECK = diphtheriae (β-prophage, EF-2, metachromatic granules, Elek test; antitoxin ± erythromycin/penicillin; toxoid vaccine). SEPSIS/MENINGITIS IN PREGNANCY, NEONATE, OR IMMUNOCOMPROMISED + COLD FOODS = Listeria (cold enrichment, rocket tails, listeriolysin, tumbling motility; ampicillin). BRANCHING FILAMENTS: SOIL + AEROBE + WEAKLY ACID FAST + CNS ABSCESS = Nocardia (TMP-SMX); MICROBIOTA + ANAEROBE + SINUS TRACTS + SULFUR GRANULES = Actinomyces (penicillin).",
  },
  mechanisms: [
    {
      id: "snare-axis",
      title: "The SNARE axis: same scissors, different address",
      context: "From the printed two-panel diagram to the exam's spastic-vs-flaccid contrast",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Both clostridial neurotoxins are proteases that cleave SNARE proteins involved in neurotransmission",
            sublabel: "Input — the shared enzymatic class (the Clostridia intro's one-sentence rule).",
            variant: "input",
          },
          {
            id: "s1",
            label: "TETANUS ARM — tetanospasmin: noninvasive, remains localized to the wound; spreads by RETROGRADE AXONAL TRANSPORT to the CNS; blocks release of GABA and glycine from Renshaw cells in the spinal cord",
            sublabel: "Process — the brake is cut: the inhibitory interneuron can no longer restrain the motor neuron.",
            variant: "process",
          },
          {
            id: "s2",
            label: "BOTULISM ARM — heat-labile toxin acts at the MOTOR-NEURON TERMINAL: prevents ACh release at the neuromuscular junction; the Renshaw circuit is untouched",
            sublabel: "Process — the accelerator is cut: no stimulation reaches the muscle.",
            variant: "process",
          },
          {
            id: "s3",
            label: "The age split: BABIES ingest spores (eg, in honey) → colonization → floppy baby syndrome; ADULTS ingest preformed toxin (eg, in canned food) → the 5 D's: diplopia, dysarthria, dysphagia, dyspnea, descending flaccid paralysis — no sensory deficits",
            sublabel: "Process — the route of acquisition sets the demographic of the stem.",
            variant: "process",
          },
          {
            id: "o1",
            label: "OUTPUT — unopposed stimulation = SPASTIC paralysis (trismus, risus sardonicus, opisthotonos; prevent with vaccine; treat with antitoxin +/− booster, antibiotics, diazepam, debridement) vs no stimulation = FLACCID paralysis (human botulinum immunoglobulin; therapeutic Botox for dystonia, hyperhidrosis, spasms, wrinkles)",
            sublabel: "Output — the two paralysis portraits and their management sets.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "Renshaw address" },
          { from: "trigger", to: "s2", label: "NMJ address" },
          { from: "s2", to: "s3", label: "spores vs preformed" },
          { from: "s1", to: "o1", label: "spastic portrait" },
          { from: "s3", to: "o1", label: "flaccid portrait" },
        ],
        caption:
          "The printed diagram is two panels with three characters each — motor neuron, Renshaw cell (inhibitory neuron), and muscle — and the exam question lives in WHERE the toxin's ⊝ lands. Tetanospasmin takes the retrograde axonal route into the CNS and silences the Renshaw cell's GABA and glycine: inhibition removed, the motor neuron runs unopposed, and the muscle locks in spastic paralysis — trismus (lockjaw), risus sardonicus (the raised-eyebrow open grin), and opisthotonos (spasms of the spinal extensors). Botulinum toxin stays at the peripheral terminal and cleaves the SNARE machinery that docks ACh vesicles: no acetylcholine, no stimulation, and the muscle goes quietly flaccid — diplopia, dysarthria, dysphagia, dyspnea, and descending flaccid paralysis, pointedly WITHOUT sensory deficits (the sensory neuron is not involved). The age split completes the arm: an infant gut allows colonization by ingested spores (honey — floppy baby syndrome), while the adult gut requires preformed toxin from improperly canned food. Therapy follows the mechanism: tetanus gets antitoxin with vaccine booster, antibiotics, diazepam for the spasms, and wound debridement; botulism gets human botulinum immunoglobulin — and the same toxin, injected focally as Botox, treats dystonia, hyperhidrosis, muscle spasms, and wrinkles.",
      },
    },
    {
      id: "bacilli-injury-modes",
      title: "The injury modes beyond the synapse — membrane, enterocyte, ribosome, cytoskeleton",
      context: "From the neurotoxins to the rest of the rod block",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "The remaining gram ⊕ rods injure at four non-synaptic addresses",
            sublabel: "Input — the injury code as an organizer.",
            variant: "input",
          },
          {
            id: "s1",
            label: "MEMBRANE — C perfringens α-toxin (lecithinase, a phospholipase) lyses cell membranes: myonecrosis (gas gangrene; soft-tissue crepitus) + hemolysis; in food left standing <60°C, spores germinate → vegetative bacteria → enterotoxin → late-onset (10-12 hours) food poisoning, resolution in 24 hours; spontaneous gas gangrene (hematogenous, with colonic malignancy) is most commonly C septicum",
            sublabel: "Process — phospholipase chemistry plus the standing-food and malignancy rules.",
            variant: "process",
          },
          {
            id: "s2",
            label: "ENTEROCYTE — C difficile toxins A and B damage enterocytes: watery diarrhea → pseudomembranous colitis, often 2° to antibiotics (clindamycin, ampicillin, cephalosporins, fluoroquinolones) with PPI association; fulminant = toxic megacolon, ileus, shock; B cereus rides reheated rice: spores survive cooking, and keeping rice warm germinates them → emetic cereulide (preformed, 1-5 hours) vs diarrheal enterotoxin (8-18 hours)",
            sublabel: "Process — the two enterocyte strippers and their clocks.",
            variant: "process",
          },
          {
            id: "s3",
            label: "RIBOSOME — C diphtheriae's β-prophage exotoxin ADP-ribosylates EF-2 → protein synthesis halts → necrosis in pharynx, cardiac, and CNS tissue (pseudomembranous pharyngitis, bull's neck, myocarditis, arrhythmias, neuropathies); CYTOSKELETON — L monocytogenes polymerizes actin into rocket tails (cell-to-cell spread avoiding antibody), escapes phagosomes via listeriolysin, grows at refrigeration temperatures, and tumbles in broth",
            sublabel: "Process — the phage-encoded halter and the facultative intracellular rocket.",
            variant: "process",
          },
          {
            id: "o1",
            label: "OUTPUT — therapy reads from the address: perfringens = debridement + antitoxin logic of source control; difficile = ORAL vancomycin or fidaxomicin (luminal disease), FMT for recurrence; cereus = supportive (antibiotics are ineffective against toxins); diphtheriae = ANTITOXIN +/– erythromycin or penicillin, prevented by toxoid vaccine; Listeria = ampicillin (the pregnancy/neonate organism); the filaments = sulfonamides (Nocardia) vs penicillin (Actinomyces)",
            sublabel: "Output — each injury mode points to its own management.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "membrane address" },
          { from: "s1", to: "s2", label: "enterocyte address" },
          { from: "s2", to: "s3", label: "ribosome + cytoskeleton" },
          { from: "s3", to: "o1", label: "therapy by address" },
        ],
        caption:
          "The rest of the block generalizes the address logic. At the MEMBRANE, perfringens' α-toxin is a lecithinase (phospholipase): it digests the phospholipids of muscle and red cells — myonecrosis with gas and crepitus, plus hemolysis — and its food-borne arm is a timing rule: heavily spore-contaminated food that was cooked but left standing too long below 60°C lets spores germinate into vegetative bacteria whose enterotoxin strikes at 10-12 hours and resolves within a day; when gas gangrene appears WITHOUT trauma (hematogenous seeding), the organism is most commonly C septicum and the examiner is pointing at a colonic malignancy. At the ENTEROCYTE, difficile's toxins A and B strip the colon after the microbiome has been cleared by clindamycin-class antibiotics (ampicillin, cephalosporins, fluoroquinolones) and PPIs — watery diarrhea becomes pseudomembranous colitis, fulminant disease adds toxic megacolon, ileus, and shock, and the treatment must be luminal: oral vancomycin or fidaxomicin, with fecal microbiota transplant for recurrence — while cereus carries the two clocks of reheated rice: the preformed cereulide emetic toxin at 1-5 hours and the diarrheal enterotoxin at 8-18 hours (supportive care; antibiotics are ineffective against toxins). At the RIBOSOME, diphtheriae's toxin is lysogeny's weapon (β-prophage) — ADP-ribosylation of EF-2 halts elongation, and the grayish-white pharyngeal membrane with bull's-neck lymphadenopathy precedes myocarditis, arrhythmias, and neuropathies; metachromatic granules and the Elek test identify it, antitoxin plus erythromycin or penicillin treats it, and the toxoid vaccine prevents it. At the CYTOSKELETON, Listeria is the block's facultative intracellular rod: cold-enrichment growth, actin rocket tails for antibody-free cell-to-cell spread, listeriolysin for phagosomal escape, and tumbling motility — amnionitis and spontaneous abortion in pregnancy, granulomatosis infantiseptica, and meningitis of the neonate, the immunocompromised, and older adults, all treated with ampicillin. The branching-filament pair closes the block: Nocardia (aerobe, catalase ⊕, weakly acid fast, soil, TB-mimicking pulmonary disease with ⊝ PPD, cerebral abscess, sulfonamides) vs Actinomyces (anaerobe, catalase ⊝, not acid fast, normal microbiota, draining sinus tracts with yellow sulfur granules, PID with IUDs, penicillin).",
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "gram-pos-bacilli-map",
      title: "The toxin map: SNARE axis + mechanism rail + SNAP axis + roster",
      caption:
        "An original KYP redraw of the source's tetanus-vs-botulism SNARE panels (the printed diagram's motor-neuron/Renshaw-cell/muscle layout, left tetanus and right botulism), with the five-mechanism rail (SNARE at the Renshaw cell, SNARE at the NMJ, EF-2 blockade, lecithinase, enterotoxins), the Nocardia-vs-Actinomyces SNAP axis, and the nine-organism roster.",
      notice:
        "The printed photographs (pseudomembranous colitis, gas gangrene, diphtheria pseudomembrane, Listeria rocket tails, Nocardia acid-fast, Actinomyces filaments) are raster — COPYRIGHTED, described-in-text only. FA's printed mnemonics (Difficile causes diarrhea; bad bottles; Perfringens perforates; Cory = club; ABCDEFG; SNAP) are NOT reproduced — verification only, carried verbatim in the note's table block.",
    },
    {
      kind: "table",
      title: "The gram-positive bacilli — verbatim",
      intro: "The source's organism entries (books 136-137), verbatim.",
      columns: ["Organism", "Signature · Diseases (verbatim)"],
      rows: [
        ["Bacillus cereus", "Gram ⊕ rod. Causes food poisoning. Spores survive cooking rice (reheated rice syndrome). Keeping rice warm results in germination of spores and enterotoxin formation. Emetic type causes nausea and vomiting within 1-5 hours. Caused by cereulide, a preformed toxin. Diarrheal type causes watery, nonbloody diarrhea and GI pain within 8-18 hours. Management: supportive care (antibiotics are ineffective against toxins)."],
        ["Clostridioides difficile", "Produces toxins A and B, which damage enterocytes. Both toxins lead to watery diarrhea → pseudomembranous colitis (printed photo A — endoscopic view of yellowish plaques on inflamed mucosa; described-in-text only). Often 2° to antibiotic use, especially clindamycin, ampicillin, cephalosporins, fluoroquinolones; associated with PPIs. Fulminant infection: toxic megacolon, ileus, shock. Difficile causes diarrhea (FA mnemonic, printed). Diagnosed by PCR or antigen detection of one or both toxins in stool. Treatment: oral vancomycin or fidaxomicin. For recurrent cases, consider repeating prior regimen or fecal microbiota transplant."],
        ["Clostridia (the genus rule)", "Gram ⊕, spore-forming, obligate anaerobic rods. Tetanus toxin and botulinum toxin are proteases that cleave SNARE proteins involved in neurotransmission."],
        ["Clostridium tetani", "Pathogen is noninvasive and remains localized to wound site. Produces tetanospasmin, an exotoxin causing tetanus. Tetanospasmin spreads by retrograde axonal transport to CNS and blocks release of GABA and glycine from Renshaw cells in spinal cord. Causes spastic paralysis, trismus (lockjaw), risus sardonicus (raised eyebrows and open grin), opisthotonos (spasms of spinal extensors). Tetanus is tetanic paralysis (FA mnemonic, printed). Prevent with tetanus vaccine. Treat with antitoxin +/− vaccine booster, antibiotics, diazepam (for muscle spasms), and wound debridement."],
        ["Clostridium botulinum", "Produces a heat-labile toxin that damages SNARE proteins, thus preventing ACh release at the neuromuscular junction, causing botulism. In babies, ingestion of spores (eg, in honey) leads to disease (floppy baby syndrome). In adults, disease is caused by ingestion of preformed toxin (eg, in canned food). Symptoms of botulism (the 5 D's): diplopia, dysarthria, dysphagia, dyspnea, descending flaccid paralysis. Does not present with sensory deficits. Botulinum is from bad bottles of food, juice, and honey (FA mnemonic, printed). Treatment: human botulinum immunoglobulin. Local botulinum toxin A (Botox) injections used to treat focal dystonia, hyperhidrosis, muscle spasms, and cosmetic reduction of facial wrinkles."],
        ["Clostridium perfringens", "Produces α-toxin (lecithinase, a phospholipase) that can cause myonecrosis (gas gangrene [printed photo A — clinical photograph of dark necrotic tissue with bullae; described-in-text only]; presents as soft tissue crepitus) and hemolysis. If heavily spore-contaminated food is cooked but left standing too long at <60°C, spore germinate → vegetative bacteria ingested → enterotoxin → late-onset (10-12 hours) food poisoning symptoms, resolution in 24 hours. Perfringens perforates a gangrenous leg (FA mnemonic, printed). Spontaneous gas gangrene (via hematogenous seeding; associated with colonic malignancy) is most commonly caused by Clostridium septicum."],
        ["Corynebacterium diphtheriae", "Gram ⊕ rods occurring in angular arrangements; transmitted via respiratory droplets. Causes diphtheria via exotoxin encoded by β-prophage. Potent exotoxin inhibits protein synthesis via ADP-ribosylation of EF-2, leading to possible necrosis in pharynx, cardiac, and CNS tissue. Symptoms include pseudomembranous pharyngitis (grayish-white membrane [printed photo A — clinical view of the pharyngeal membrane; described-in-text only]) with lymphadenopathy (bull's neck appearance). Toxin dissemination may cause myocarditis, arrhythmias, neuropathies. Lab diagnosis based on gram ⊕ rods with metachromatic (blue and red) granules and ⊕ Elek test for toxin. Toxoid vaccine prevents diphtheria. Coryne = club shaped (metachromatic granules on Löffler media). Black colonies on cystine-tellurite agar (FA mnemonics, printed). ABCDEFG: ADP-ribosylation, β-prophage, Corynebacterium diphtheriae, Elongation Factor 2, Granules (FA mnemonic, printed). Treatment: diphtheria antitoxin +/– erythromycin or penicillin."],
        ["Listeria monocytogenes", "Gram ⊕, facultative intracellular rod; acquired by ingestion of unpasteurized dairy products and cold deli meats, transplacental transmission, and by vaginal transmission during birth. Grows well at refrigeration temperatures (cold enrichment). Forms rocket tails (red in [printed photo A — actin rocket tails; described-in-text only]) via actin polymerization that allow intracellular movement and cell-to-cell spread across cell membranes, thereby avoiding antibody. Listeriolysin generates pores in phagosomes, allowing its escape into cytoplasm. Characteristic tumbling motility in broth. Can cause amnionitis, sepsis, and spontaneous abortion in pregnant patients; granulomatosis infantiseptica; meningitis in immunocompromised patients, neonates, and older adults; mild, self-limited gastroenteritis in healthy individuals. Treatment: ampicillin."],
        ["Nocardia vs Actinomyces (the printed comparison table)", "Both are gram ⊕ and form long, branching filaments resembling fungi. NOCARDIA: aerobe, catalase ⊕; acid fast (weak) [printed photo A — acid-fast filamentous organisms; described-in-text only]; found in soil; causes pulmonary infections in immunocompromised (can mimic TB but with ⊝ PPD), cutaneous infections after trauma in immunocompetent, can spread to CNS → cerebral abscess; treat with sulfonamides (TMP-SMX). ACTINOMYCES: anaerobe, catalase ⊝; not acid fast [printed photo B — branching filaments; described-in-text only]; normal oral, reproductive, and GI microbiota; causes oral/facial abscesses that drain through sinus tracts, often associated with dental caries/extraction and other maxillofacial trauma, forms yellow sulfur granules, can also cause PID with IUDs; treat with penicillin. Treatment is a SNAP: Sulfonamides—Nocardia; Actinomyces—Penicillin (FA mnemonic, printed)."],
      ],
      caption:
        "Read the table with the toxin map: every row is an injury mechanism with its clock, its photograph pointers carried verbatim, and its management. The tetanus/botulism diagram text (motor neuron, Renshaw cell, muscle, unopposed stimulation = spastic paralysis, no stimulation = flaccid paralysis) is the printed diagram this note's visual redraws.",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "The protocols the injury code implies",
      body: "THE TETANUS PROTOCOL: prevent with the toxoid vaccine; when it strikes, give antitoxin +/− vaccine booster, antibiotics, diazepam for the muscle spasms, and wound debridement — source control plus the brake-restoration set. THE BOTULISM PROTOCOL: human botulinum immunoglobulin; remember the age split (babies = spores in honey; adults = preformed toxin in canned food) and that sensory deficits argue AGAINST botulism; the same toxin, injected focally, is therapeutic Botox (focal dystonia, hyperhidrosis, muscle spasms, wrinkles). THE C DIFFICILE PROTOCOL: the disease lives in the lumen — treat with ORAL vancomycin or fidaxomicin (the inciting antibiotic should stop); recurrent disease: repeat the prior regimen or fecal microbiota transplant; fulminant disease adds toxic megacolon, ileus, and shock to the risk equation. THE FOOD CLOCKS: reheated rice with vomiting at 1-5 hours = preformed cereulide (supportive care — antibiotics are ineffective against toxins); watery diarrhea at 8-18 hours = the cereus diarrheal type; cramps at 10-12 hours after food left standing below 60°C = the perfringens enterotoxin (resolves in 24 hours). THE SPONTANEOUS-GANGRENE RULE: gas gangrene without trauma is most commonly C septicum by hematogenous seeding — go looking for the colonic malignancy. THE DIPHTHERIA PROTOCOL: antitoxin FIRST +/– erythromycin or penicillin, toxoid vaccine for prevention; the lab set is metachromatic granules (Löffler media), black colonies on cystine-tellurite agar, and the ⊕ Elek test. THE LISTERIA PROTOCOL: unpasteurized dairy and cold deli meats are the food history; cold enrichment is the lab behavior; ampicillin is the therapy — and the pregnant patient's amnionitis, spontaneous abortion, or granulomatosis infantiseptica, and the neonate's/immunocompromised patient's meningitis, are the disease set. THE FILAMENT RULE: Nocardia is the soil aerobe (weakly acid fast; pulmonary disease mimicking TB with ⊝ PPD; CNS abscess; sulfonamides/TMP-SMX); Actinomyces is the microbiota anaerobe (sinus tracts, sulfur granules, PID with IUDs; penicillin).",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A group of office workers develops nausea and vomiting 3 hours after eating fried rice from a buffet that had been holding cooked rice warm all morning; symptoms resolve within a day; no fever, no blood.",
        discriminator: "Reheated rice + vomiting at 1-5 hours",
        concept: "B cereus emetic type — preformed cereulide",
        answer:
          "Bacillus cereus emetic food poisoning: spores survive cooking the rice, and keeping the rice warm germinates them so the preformed toxin cereulide is already in the food — nausea and vomiting strike within 1-5 hours. The diarrheal type (watery, nonbloody diarrhea and GI pain at 8-18 hours) is the same organism's other clock. Management is supportive care; antibiotics are ineffective against toxins.",
      },
      {
        stem: "A 68-year-old man on day 9 of clindamycin for a dental abscess (with long-standing omeprazole use) develops profuse watery diarrhea and abdominal pain; a CT shows a dilated colon with mucosal plaque-like changes.",
        discriminator: "Clindamycin-class antibiotic (or PPI) + watery diarrhea → pseudomembranous colitis",
        concept: "C difficile — toxins A and B",
        answer:
          "Clostridioides difficile: toxins A and B damage enterocytes → watery diarrhea → pseudomembranous colitis, often 2° to clindamycin, ampicillin, cephalosporins, or fluoroquinolones, and associated with PPIs. Fulminant infection adds toxic megacolon, ileus, and shock. Diagnose by PCR or antigen detection of one or both toxins in stool; treat with oral vancomycin or fidaxomicin; recurrent cases — repeat the regimen or fecal microbiota transplant.",
      },
      {
        stem: "A 31-year-old pregnant woman at 34 weeks presents with fever and contractions after eating deli sandwiches daily for a week; her newborn develops sepsis with granulomatous skin lesions; culture grows a gram ⊕ rod that is motile at 4°C and shows tumbling motility in broth.",
        discriminator: "Cold deli meats/unpasteurized dairy + pregnancy + tumbling motility",
        concept: "L monocytogenes — the facultative intracellular rod of cold foods",
        answer:
          "Listeria monocytogenes: gram ⊕, facultative intracellular rod acquired from unpasteurized dairy and cold deli meats, transplacentally, and by vaginal transmission during birth; grows at refrigeration temperatures (cold enrichment); forms actin rocket tails for cell-to-cell spread (avoiding antibody), escapes phagosomes with listeriolysin, and tumbles in broth. Amnionitis, sepsis, and spontaneous abortion in pregnancy; granulomatosis infantiseptica; meningitis in the immunocompromised, neonates, and older adults. Treat with ampicillin.",
      },
    ],
    traps: [
      {
        a: "Botulism is always caused by eating preformed toxin in food",
        b: "The route is AGE-DEPENDENT: babies ingest SPORES (eg, in honey) that colonize the gut → floppy baby syndrome; adults require PREFORMED toxin (eg, improperly canned food)",
        whyConfused: "The adult foodborne presentation is the famous one, so it gets generalized to infants.",
        keyDifference:
          "The infant gut permits germination and colonization by ingested spores — honey is the classic vehicle, and the result is the floppy baby. The adult gut resists colonization, so disease requires toxin already made in the food (cans, bottles). Same toxin, same SNARE cleavage, different inoculum — and the exam asks which one each age gets.",
        clue: "Any infant botulism or honey-exposure question.",
      },
      {
        a: "Tetanus and botulism toxins both block ACh release at the neuromuscular junction",
        b: "Both are SNARE-cleaving proteases, but their ADDRESSES differ: tetanospasmin travels retrograde to the CNS and blocks GABA/glycine release from RENSHAW CELLS; botulinum toxin acts at the MOTOR-NEURON TERMINAL to block ACh",
        whyConfused: "Same genus, same enzymatic class (SNARE protease) — the mechanisms blur together.",
        keyDifference:
          "Cut the brake vs cut the accelerator: tetanus removes the Renshaw cell's inhibition → unopposed stimulation → SPASTIC paralysis (trismus, risus sardonicus, opisthotonos); botulism removes the stimulation itself → no ACh at the NMJ → FLACCID paralysis (the 5 D's, no sensory deficits). Also divergent: tetanus is noninvasive and stays at the wound (toxin travels the axon); botulism toxin is ingested preformed (adults).",
        clue: "Any spastic-vs-flaccid clostridial toxin question.",
      },
      {
        a: "Gas gangrene only follows traumatic wounds with soil contamination",
        b: "SPONTANEOUS gas gangrene occurs via hematogenous seeding without trauma — most commonly C septicum — and is associated with colonic malignancy",
        whyConfused: "The trauma-to-perfringens association dominates teaching (and most questions).",
        keyDifference:
          "C perfringens α-toxin (lecithinase) drives the post-traumatic myonecrosis with crepitus; but when gas gangrene appears without a wound, the organism is most commonly C septicum arriving by blood from a colonic malignancy — the exam's signal to look for the cancer. Two organisms, two routes, one clinical picture.",
        clue: "Any non-traumatic gas gangrene question.",
      },
    ],
    pivots: [
      {
        lookAlike: "Tetanus vs botulism (the SNARE axis pair)",
        differentiator: "Spastic vs flaccid; Renshaw cell vs NMJ; wound vs food",
        correctPath:
          "TETANUS: wound → noninvasive organism → tetanospasmin retrograde axonal transport → Renshaw cells' GABA/glycine blocked → SPASTIC (trismus, risus sardonicus, opisthotonos); prevent with vaccine, treat with antitoxin +/− booster, antibiotics, diazepam, debridement. BOTULISM: food (adult preformed / baby spores) → toxin at the motor-neuron terminal → no ACh → FLACCID (5 D's — diplopia, dysarthria, dysphagia, dyspnea, descending weakness; NO sensory deficits); treat with human botulinum immunoglobulin.",
      },
      {
        lookAlike: "Nocardia vs Actinomyces (the branching-filament pair)",
        differentiator: "Aerobe vs anaerobe; soil vs microbiota; acid-fast vs not; TMP-SMX vs penicillin",
        correctPath:
          "NOCARDIA: aerobe, catalase ⊕, weakly acid fast, found in soil — pulmonary infections in the immunocompromised (mimics TB with a ⊝ PPD), cutaneous infections after trauma, CNS cerebral abscess; treat with sulfonamides (TMP-SMX). ACTINOMYCES: anaerobe, catalase ⊝, not acid fast, normal oral/reproductive/GI microbiota — oral/facial abscesses draining through sinus tracts after dental caries or extraction, yellow sulfur granules, PID with IUDs; treat with penicillin. Both: gram ⊕ long branching filaments resembling fungi.",
      },
    ],
    miniCase: {
      vignette:
        "A 7-month-old boy is brought to the emergency department with 3 days of poor feeding, constipation, and a weak cry. His mother gives him a bottle of expressed milk and notes he suckles sluggishly and dribbles. On examination he is afebrile and alert but diffusely hypotonic with poor head control, diminished gag reflex, bilateral ptosis, and sluggishly reactive pupils; deep tendon reflexes are absent in all limbs. Sensory examination (withdrawal to pinch) is intact. Two weeks ago, against advice, a relative had begun sweetening his bottles with honey. CSF studies are normal; a stool culture is pending.",
      question:
        "Which mechanism best explains this infant's findings?",
      options: [
        {
          label: "A",
          text: "A heat-labile protease cleaving SNARE proteins at the motor-neuron terminal, preventing acetylcholine release at the neuromuscular junction",
          correct: true,
          why: "Correct. This is infant botulism (floppy baby syndrome): ingested spores from honey colonize the immature gut and produce toxin in vivo. Botulinum toxin cleaves SNARE proteins so ACh vesicles cannot dock at the motor-neuron terminal — descending flaccid paralysis with cranial nerve findings (ptosis, sluggishly reactive pupils, weak suck, diminished gag) and, tellingly, intact sensation. Treatment is human botulinum immunoglobulin plus supportive care.",
        },
        {
          label: "B",
          text: "A protease reaching the CNS by retrograde axonal transport and blocking GABA and glycine release from Renshaw cells",
          why: "This is tetanospasmin's mechanism — but it produces unopposed stimulation and SPASTIC paralysis (trismus, risus sardonicus, opisthotonos), the opposite portrait of this hypotonic, areflexic infant. The distractor tests whether the two SNARE addresses are kept apart.",
        },
        {
          label: "C",
          text: "Ingestion of preformed toxin in improperly canned food, with toxin already made before the meal",
          why: "Preformed toxin is the ADULT route — the adult gut resists colonization by spores, so disease requires toxin pre-made in the food. Infants develop disease from ingested SPORES (honey) that germinate and produce toxin in vivo. The distractor swaps the age split.",
        },
        {
          label: "D",
          text: "A lecithinase (phospholipase) digesting muscle-cell membranes, producing myonecrosis with gas and crepitus",
          why: "This is C perfringens α-toxin — gas gangrene and hemolysis with soft-tissue crepitus, a wound or standing-food disease, not a diffuse descending flaccid paralysis with cranial nerve palsies and constipation. The distractor imports the membrane address into the synapse.",
        },
        {
          label: "E",
          text: "An exotoxin ADP-ribosylating elongation factor 2, halting protein synthesis in pharyngeal and cardiac tissue",
          why: "This is diphtheria toxin (β-prophage encoded, EF-2 target) — pseudomembranous pharyngitis with bull's neck, later myocarditis and neuropathies. It would present with a grayish-white pharyngeal membrane and lymphadenopathy, not afebrile hypotonia with absent reflexes. The distractor swaps the ribosome address for the synapse.",
        },
      ],
      reasoning:
        "The vignette assembles infant botulism piece by piece: the age (7 months — the spore-colonization window), the honey exposure (the classic vehicle), the bulbar and descending hypotonia (weak suck and cry, ptosis, sluggishly reactive pupils, diminished gag, absent reflexes), the constipation (autonomic involvement), and — the exclusion that matters — intact sensation with a normal CSF. Botulinum toxin is a heat-labile SNARE protease acting at the motor-neuron terminal: no ACh release, no stimulation, flaccid paralysis without sensory deficits. Each distractor pairs a real toxin from this block with the wrong address or the wrong age: tetanospasmin (the other SNARE address — spastic, not flaccid), the adult preformed-toxin route (the age split), perfringens lecithinase (the membrane address), and diphtheria EF-2 toxin (the ribosome address).",
    },
  },
  mnemonics: [
    {
      code: "\u201cSame scissors, different address: tetanus cuts the brake cable (Renshaw cell \u2192 spastic), botulism cuts the accelerator cable (NMJ \u2192 flaccid).\u201d",
      meaning:
        "KYP's key for the SNARE axis: both clostridial toxins are SNARE-cleaving proteases — tetanospasmin travels retrograde to the CNS and removes the Renshaw cell's GABA/glycine inhibition (the brake), so the motor neuron runs unopposed into spastic paralysis (trismus, risus sardonicus, opisthotonos); botulinum toxin acts at the motor-neuron terminal and removes ACh release (the accelerator), so the muscle never gets stimulated and goes flaccid (the 5 D's, no sensory deficits).",
      memorizes: "The tetanus-vs-botulism mechanism contrast",
      whenToUse: "Any clostridial neurotoxin or spastic-vs-flaccid question.",
      clinical: "Wound + spasticity = tetanus (antitoxin, diazepam, debridement); food or honey + flaccidity = botulism (immunoglobulin).",
    },
    {
      code: "\u201cThe injury code of the rods: EF-2 stops the factory, lecithinase dissolves the wall, toxins A and B burn the colon, cereulide rides the reheated rice, and actin rockets carry Listeria door to door.\u201d",
      meaning:
        "KYP's key for the non-neurotoxin bacilli: diphtheriae (β-prophage exotoxin ADP-ribosylates EF-2 → protein synthesis halts → pharyngeal membrane, bull's neck, myocarditis, neuropathies); perfringens (α-toxin lecithinase → gas gangrene with crepitus + hemolysis; standing food <60°C → 10-12-hour enterotoxin); difficile (toxins A/B → pseudomembranous colitis after clindamycin-class antibiotics and PPIs); cereus (preformed cereulide → 1-5-hour emetic; 8-18-hour diarrheal); Listeria (actin rocket tails + listeriolysin → cell-to-cell spread avoiding antibody, cold enrichment, ampicillin).",
      memorizes: "The five injury mechanisms beyond the synapse",
      whenToUse: "Any gram ⊕ rod mechanism question.",
      clinical: "Each address has its own therapy: antitoxin for diphtheria, debridement for gangrene, oral vancomycin/fidaxomicin for C diff, supportive care for cereus, ampicillin for Listeria.",
    },
    {
      code: "\u201cThe incubation clock names the toxin: 1-5 hours and vomiting = preformed in the rice; 8-18 hours and diarrhea = the vegetative sequel; 10-12 hours and cramps = the standing food; days of antibiotics then diarrhea = the colon stripped.\u201d",
      meaning:
        "KYP's key for the food-poisoning clocks of the bacilli block: cereulide is preformed (vomiting at 1-5 hours from reheated rice); the cereus diarrheal enterotoxin comes from germinated spores (watery diarrhea at 8-18 hours); the perfringens enterotoxin follows food left standing below 60°C (cramps at 10-12 hours, resolution in 24 hours); and difficile colitis follows a course of clindamycin-class antibiotics (or PPI exposure) rather than a single meal.",
      memorizes: "The four food clocks of the gram ⊕ rods",
      whenToUse: "Any food-poisoning or antibiotic-associated diarrhea timing question.",
      clinical: "Read the hours off the stem, then name the organism and its management.",
    },
  ],
  rapidReview: {
    s30: [
      "Tetanus toxin: retrograde axonal transport → blocks GABA/glycine from Renshaw cells → spastic paralysis",
      "Botulinum toxin: blocks ACh release at the NMJ → flaccid paralysis (the 5 D's, no sensory deficits)",
      "Both clostridial neurotoxins are proteases that cleave SNARE proteins",
      "Babies get botulism from spores (honey — floppy baby); adults from preformed toxin (canned food)",
      "C perfringens α-toxin = lecithinase → gas gangrene (crepitus) + hemolysis",
    ],
    m3: [
      "C difficile: toxins A/B → pseudomembranous colitis; clindamycin/ampicillin/cephalosporins/fluoroquinolones + PPIs; oral vancomycin or fidaxomicin; FMT for recurrence",
      "B cereus: emetic 1-5 h (cereulide, preformed, reheated rice) vs diarrheal 8-18 h; supportive care only",
      "Perfringens food poisoning: food left standing <60°C → 10-12 h onset, resolves in 24 h; spontaneous gas gangrene = C septicum → colonic malignancy",
      "Diphtheria: β-prophage exotoxin ADP-ribosylates EF-2; pseudomembranous pharyngitis, bull's neck; myocarditis, arrhythmias, neuropathies",
      "Listeria: cold enrichment, rocket tails (actin), listeriolysin, tumbling motility; pregnancy + neonates + immunocompromised; ampicillin",
    ],
    m10: [
      "Diphtheria labs: metachromatic granules (Löffler), black colonies on cystine-tellurite, ⊕ Elek test; treat antitoxin +/– erythromycin/penicillin; prevent with toxoid vaccine",
      "Tetanus management: vaccine (prevention); antitoxin +/− booster, antibiotics, diazepam, wound debridement",
      "Botulism management: human botulinum immunoglobulin; Botox = focal dystonia, hyperhidrosis, spasms, wrinkles",
      "Nocardia: aerobe, catalase ⊕, weakly acid fast, soil, mimics TB (⊝ PPD), CNS abscess — sulfonamides (TMP-SMX)",
      "Actinomyces: anaerobe, catalase ⊝, not acid fast, microbiota, sinus tracts, sulfur granules, PID with IUDs — penicillin",
      "C difficile fulminant: toxic megacolon, ileus, shock; dx PCR or toxin antigen in stool",
    ],
  },
  recall: [
    {
      q: "Contrast the two clostridial neurotoxins: address, transport, neurotransmitter, paralysis type.",
      a: "Tetanospasmin (C tetani): noninvasive, stays at the wound; retrograde axonal transport to CNS; blocks GABA and glycine release from Renshaw cells → unopposed stimulation = SPASTIC paralysis (trismus, risus sardonicus, opisthotonos). Botulinum toxin (C botulinum): heat-labile, acts at the motor-neuron terminal; prevents ACh release at the NMJ → no stimulation = FLACCID paralysis (diplopia, dysarthria, dysphagia, dyspnea, descending weakness; NO sensory deficits). Both are proteases that cleave SNARE proteins.",
    },
    {
      q: "Give the C difficile protocol end to end.",
      a: "Risk: antibiotic use (especially clindamycin, ampicillin, cephalosporins, fluoroquinolones) + PPI association. Disease: toxins A and B damage enterocytes → watery diarrhea → pseudomembranous colitis; fulminant = toxic megacolon, ileus, shock. Diagnosis: PCR or antigen detection of one or both toxins in stool. Treatment: ORAL vancomycin or fidaxomicin; recurrent — repeat prior regimen or fecal microbiota transplant.",
    },
    {
      q: "State the diphtheria mechanism, morphology set, and treatment.",
      a: "Mechanism: exotoxin encoded by β-prophage; ADP-ribosylation of EF-2 inhibits protein synthesis → necrosis in pharynx, cardiac, CNS tissue (pseudomembranous pharyngitis with grayish-white membrane, bull's neck; myocarditis, arrhythmias, neuropathies). Morphology/labs: gram ⊕ rods in angular arrangements; metachromatic (blue and red) granules on Löffler media; black colonies on cystine-tellurite agar; ⊕ Elek test for toxin. Treatment: diphtheria antitoxin +/– erythromycin or penicillin; prevention with toxoid vaccine.",
    },
    {
      q: "Why does Listeria spread cell to cell without antibody exposure, and what are its disease associations?",
      a: "It is a gram ⊕ facultative intracellular rod: listeriolysin generates pores in phagosomes (escape into cytoplasm) and actin polymerization forms rocket tails that drive intracellular movement and cell-to-cell spread across cell membranes — no extracellular exposure, so antibody cannot clear it. Grows at refrigeration temperatures (cold enrichment); tumbling motility in broth. Acquisition: unpasteurized dairy, cold deli meats, transplacental, vaginal during birth. Disease: amnionitis, sepsis, spontaneous abortion; granulomatosis infantiseptica; meningitis in immunocompromised, neonates, older adults; mild self-limited gastroenteritis in the healthy. Treatment: ampicillin.",
    },
    {
      q: "Split Nocardia from Actinomyces on five axes.",
      a: "OXYGEN/CATALASE: Nocardia aerobe, catalase ⊕ vs Actinomyces anaerobe, catalase ⊝. ACID FAST: Nocardia weakly ⊕ vs Actinomyces ⊝. HABITAT: Nocardia soil vs Actinomyces normal oral, reproductive, and GI microbiota. DISEASE: Nocardia — pulmonary infections in the immunocompromised (mimic TB with ⊝ PPD), cutaneous after trauma, CNS cerebral abscess vs Actinomyces — oral/facial abscesses draining through sinus tracts (dental caries/extraction), yellow sulfur granules, PID with IUDs. TREATMENT: Nocardia sulfonamides (TMP-SMX) vs Actinomyces penicillin. Both: gram ⊕ long branching filaments resembling fungi.",
    },
  ],
  related: [
    {
      title: "Exotoxins vs Endotoxins",
      topicId: "exotoxins-endotoxins",
      note: "M8's roster returns as the injury code: the SNARE-cleaving neurotoxins, the ADP-ribosylating AB-toxin of diphtheria (EF-2), lecithinase, and the enterotoxins — with the preformed-toxin timing rules (cereulide 1-5 h) that M8's axis first printed.",
    },
    {
      title: "Bacterial Genetics: Transformation, Conjugation, Transduction",
      topicId: "bacterial-genetics",
      note: "Diphtheria toxin is lysogenic conversion made lethal — the β-prophage encoding the EF-2 toxin is M7's phage logic at the bedside, just as the enterococci's resistance economy was the R-plasmid logic.",
    },
    {
      title: "Gram-Positive Cocci: Staphylococcus & Streptococcus",
      topicId: "gram-positive-cocci",
      note: "M9's tree opened Clinical Bacteriology and closed with the B-anthracis bridge on book 135 — this note is its continuation from book 136 (the cocci block's catalase/coagulase/hemolysis ladder is the identification logic these rods replace with injury mechanisms).",
    },
  ],
  crossLinks: [
    {
      subject: "Pharmacology (Antimicrobials)",
      connection: "The therapy column of the block: ORAL vancomycin and fidaxomicin for luminal C difficile disease (and fecal microbiota transplant for recurrence); sulfonamides (TMP-SMX) for Nocardia; penicillin for Actinomyces and diphtheria (with antitoxin); ampicillin for Listeria; antibiotics are ineffective against the preformed toxins (cereulide) — supportive care instead.",
    },
    {
      subject: "Neurology (Neuromuscular)",
      connection: "The SNARE axis is a neurology lesson delivered by bacteriology: spastic (upper-motor-neuron-pattern) paralysis from removing inhibition vs flaccid paralysis from removing stimulation — with botulism's intact sensation distinguishing it from Guillain-Barré-type mimics, and therapeutic Botox as the same molecule turned to medicine.",
    },
    {
      subject: "Obstetrics (Perinatal Infections)",
      connection: "Listeria is the cold-foods organism of pregnancy: transplacental amnionitis, sepsis, and spontaneous abortion; granulomatosis infantiseptica in the neonate; and meningitis of neonates and older adults — the food-counseling and empiric-ampicillin questions of the perinatal section.",
    },
    {
      subject: "Gastroenterology (Antibiotic-Associated Diarrhea)",
      connection: "C difficile is the archetype of antibiotic-associated colitis: microbiome depletion by clindamycin-class agents (with PPIs as the amplifier) → toxins A and B → pseudomembranous colitis, toxic megacolon; and the food-poisoning clocks (cereulide 1-5 h, cereus diarrheal 8-18 h, perfringens 10-12 h) organize the GI timing stems.",
    },
  ],
};
