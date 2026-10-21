import type { KypUsMLENote } from "../types";

// Microbiology — Clinical Bacteriology banner (M-batch 15).
// Source: First Aid 2026, Part 1 pdf 168-170 / book 146-148
//  (the Chlamydiae section of the SHARED page 168 — M15's per the chapter
//   inventory boundary (the diagnosing-syphilis tree above it is M14's);
//   Gardnerella vaginalis + the 17-row zoonotic directory on book 147;
//   the RASH COMMON / RASH RARE rickettsial split + Mycoplasma pneumoniae
//   on book 148).

export const intracellularBacteria: KypUsMLENote = {
  id: "intracellular-bacteria",
  title: "Intracellular & Vector-Borne Bacteria: Chlamydia, Rickettsia, Mycoplasma",
  subtitle:
    "The obligate-intracellular and vector-borne block organized by THE RASH MAP. THE CHLAMYDIAE (cannot make their own ATP; obligate intracellular; mucosal infections; two forms — the ELEMENTARY BODY [small, dense] is infectious, enters via endocytosis, and transforms into the RETICULATE BODY, which replicates by fission and reorganizes into elementary bodies; the cell wall lacks classic peptidoglycan [reduced muramic acid] → β-lactams ineffective): C. trachomatis (neonatal and follicular adult conjunctivitis, nongonococcal urethritis, PID, reactive arthritis) with its serotype tri-split — types A-B-C (chronic infection, blindness from follicular conjunctivitis in resource-limited areas), types D-K (urethritis/PID, neonatal pneumonia with staccato cough and eosinophilia, neonatal conjunctivitis 1-2 weeks after birth via vaginal birth), types L1-L3 (lymphogranuloma venereum — small painless ulcers → swollen painful inguinal nodes that ulcerate [buboes]; doxycycline) — plus C. pneumoniae and C. psittaci (atypical pneumonia, aerosol; psittaci's avian reservoir in parrots); lab = PCR/NAAT with cytoplasmic inclusions (reticulate bodies) on Giemsa or fluorescent antibody stain; treatment doxycycline, azithromycin (pregnancy), + ceftriaxone only if concurrent gonorrhea testing is positive. THE ZOONOTIC DIRECTORY (17 rows): Anaplasma (Ixodes ticks on deer and mice), Bartonella (cat scratch; cat scratch disease + bacillary angiomatosis), B. burgdorferi (Ixodes; Lyme), B. recurrentis (louse; relapsing fever from variable surface antigens), Brucella (unpasteurized dairy; undulant fever), Campylobacter (pet feces/contaminated meats; bloody diarrhea), C. psittaci (parrots, other birds; psittacosis), Coxiella burnetii (aerosols of cattle/sheep amniotic fluid; Q fever), Ehrlichia chaffeensis (Amblyomma Lone Star tick), Francisella tularensis (ticks, rabbits, deer flies; tularemia), Leptospira (animal urine in water), M. leprae (humans with lepromatous leprosy; armadillo [rare]), Pasteurella multocida (animal bite — cats, dogs; cellulitis, osteomyelitis), R. prowazekii (human body louse; epidemic typhus), R. rickettsii (Dermacentor dog tick; RMSF), R. typhi (fleas; endemic typhus), Salmonella spp except S typhi (reptiles and poultry), Yersinia pestis (fleas; rats and prairie dogs are reservoirs; plague). RASH COMMON: RMSF (R. rickettsii, tick vector; despite its name, primarily the South Atlantic states, especially North Carolina; the rash starts at wrists and ankles then spreads to trunk, palms, and soles; classic triad headache + fever + rash = VASCULITIS) and typhus (endemic — fleas, R typhi; epidemic — human body louse, R prowazekii; rash starts centrally and spreads out, SPARING palms and soles). RASH RARE: ehrlichiosis (Ehrlichia, tick; MONOCYTES with morulae — mulberrylike inclusions), anaplasmosis (Anaplasma, tick; GRANULOCYTES with morulae), and Q fever (Coxiella burnetii, NO arthropod vector; aerosols of cattle/sheep amniotic fluid; headache, cough, flulike symptoms, pneumonia ± hepatitis; common cause of culture ⊝ endocarditis). MYCOPLASMA PNEUMONIAE (the atypical closer): walking pneumonia (insidious onset, headache, nonproductive cough, patchy/diffuse interstitial infiltrate, macular rash); <30 years old; outbreaks in military recruits, prisons, colleges; NO CELL WALL → penicillin ineffective, not seen on Gram stain; pleomorphic; membrane sterols; Eaton agar; CXR more severe than the presentation; cold agglutinins (IgM) agglutinate RBCs; macrolides, doxycycline, or fluoroquinolone. GARDNERELLA VAGINALIS (book 147, page ownership): pleomorphic gram-variable rod of bacterial vaginosis — gray vaginal discharge with a fishy smell, NONPAINFUL (vs vaginitis); associated with sexual activity but NOT sexually transmitted; anaerobic overgrowth (↓ lactobacilli); clue cells (vaginal epithelial cells covered with Gardnerella, stippled along the outer margin); amine whiff test (10% KOH enhances the odor); pH >4.5; metronidazole or clindamycin.",
  subject: "Microbiology",
  system: "Section II · High-Yield General Principles — Clinical Bacteriology",
  pilotCategory:
    "Clinical bacteriology — the chlamydiae EB/RB cycle with the no-peptidoglycan wall rule (β-lactams fail) and the serotype tri-split; the 17-row zoonotic directory read as a transmission map; the RASH COMMON vs RASH RARE split (RMSF's wrists-to-palms vasculitis triad vs typhus's central-sparing rash; the morulae cell-lineage axis; Q fever's no-rash-no-vector with culture-negative endocarditis); Mycoplasma's no-cell-wall atypical pneumonia with cold agglutinins; and Gardnerella's nonpainful vaginosis (pH, whiff, clue cells)",
  difficulty: 2,
  readTime: 14,
  sourceRef:
    "First Aid 2026, Part 1 pp. 146–148 (Chlamydiae; Gardnerella vaginalis; Zoonotic bacteria; Rickettsial diseases and vector-borne illnesses; Mycoplasma pneumoniae)",
  tags: [
    "chlamydiae",
    "obligate intracellular",
    "elementary body",
    "reticulate body",
    "Chlamydia trachomatis",
    "nongonococcal urethritis",
    "PID",
    "reactive arthritis",
    "follicular conjunctivitis",
    "trachoma",
    "lymphogranuloma venereum",
    "buboes",
    "Chlamydophila pneumoniae",
    "Chlamydophila psittaci",
    "psittacosis",
    "parrots",
    "azithromycin",
    "doxycycline",
    "zoonotic bacteria",
    "Anaplasma",
    "Bartonella",
    "cat scratch disease",
    "bacillary angiomatosis",
    "Borrelia recurrentis",
    "relapsing fever",
    "Brucella",
    "Campylobacter",
    "Coxiella burnetii",
    "Q fever",
    "culture-negative endocarditis",
    "Ehrlichia chaffeensis",
    "Francisella tularensis",
    "tularemia",
    "Mycobacterium leprae",
    "armadillo",
    "Pasteurella multocida",
    "Rickettsia prowazekii",
    "Rickettsia rickettsii",
    "Rocky Mountain spotted fever",
    "Rickettsia typhi",
    "Salmonella spp",
    "Yersinia pestis",
    "plague",
    "fleas",
    "rash common",
    "rash rare",
    "vasculitis",
    "palms and soles",
    "wrist rash",
    "North Carolina",
    "morulae",
    "ehrlichiosis",
    "anaplasmosis",
    "MEGA",
    "Mycoplasma pneumoniae",
    "walking pneumonia",
    "atypical pneumonia",
    "no cell wall",
    "Eaton agar",
    "cold agglutinins",
    "Gardnerella vaginalis",
    "bacterial vaginosis",
    "clue cells",
    "whiff test",
    "metronidazole",
    "clindamycin",
  ],
  core: {
    what: "THE OBLIGATE-INTRACELLULAR SET AND ITS VECTORS. Chlamydiae cannot make their own ATP — obligate intracellular organisms causing mucosal infections, with two forms: the ELEMENTARY BODY (small, dense) is infectious, enters the cell via endocytosis, and transforms into the RETICULATE BODY, which replicates in the cell by fission and reorganizes into elementary bodies. The chlamydial cell wall lacks classic peptidoglycan (reduced muramic acid), rendering β-lactam antibiotics ineffective — the therapy axis is doxycycline or azithromycin (pregnancy), with ceftriaxone added only if concurrent gonorrhea testing is positive. C. trachomatis causes neonatal and follicular adult conjunctivitis, nongonococcal urethritis, PID, and reactive arthritis; its serotypes split three ways — types A-B-C (chronic infection causing blindness via follicular conjunctivitis in resource-limited areas), types D-K (urethritis/PID, neonatal pneumonia with the staccato cough and eosinophilia, neonatal conjunctivitis 1-2 weeks after birth — acquired during vaginal birth), types L1-L3 (lymphogranuloma venereum: small, painless ulcers on genitals → swollen, painful inguinal lymph nodes that ulcerate [buboes]; treat with doxycycline). C. pneumoniae and C. psittaci cause atypical pneumonia transmitted by aerosol (psittaci's reservoir: parrots and other birds). Lab: PCR, NAAT; cytoplasmic inclusions (reticulate bodies) on Giemsa or fluorescent antibody–stained smear. THE ZOONOTIC DIRECTORY maps 17 species to diseases and transmissions: Anaplasma spp (anaplasmosis; Ixodes ticks that live on deer and mice), Bartonella spp (cat scratch disease and bacillary angiomatosis; cat scratch), B. burgdorferi (Lyme disease; Ixodes ticks), B. recurrentis (relapsing fever — recurrent due to variable surface antigens; louse), Brucella spp (brucellosis/undulant fever; unpasteurized dairy, inhalation of or contact with infected animal tissue or fluids), Campylobacter (bloody diarrhea; feces from infected pets/animals, contaminated meats/foods/hands), C. psittaci (psittacosis; parrots, other birds), C. burnetii (Q fever; aerosols of cattle/sheep amniotic fluid), E. chaffeensis (ehrlichiosis; Amblyomma — the Lone Star tick), F. tularensis (tularemia; ticks, rabbits, deer flies), Leptospira spp (leptospirosis; animal urine in water, recreational water use), M. leprae (leprosy; humans with lepromatous leprosy, armadillo [rare]), P. multocida (cellulitis, osteomyelitis; animal bite — cats, dogs), R. prowazekii (epidemic typhus; human to human via the human body louse), R. rickettsii (Rocky Mountain spotted fever; Dermacentor — the dog tick), R. typhi (endemic typhus; fleas), Salmonella spp except S typhi (diarrhea which may be bloody, vomiting, fever, abdominal cramps; reptiles and poultry), and Y. pestis (plague; fleas, with rats and prairie dogs as reservoirs). RASH COMMON: RMSF — R. rickettsii with the tick vector; despite its name, the disease occurs primarily in the South Atlantic states, especially North Carolina; the rash typically starts at the wrists and ankles and then spreads to the trunk, palms, and soles; the classic triad is headache, fever, rash (a VASCULITIS). Typhus — endemic (fleas) is R typhi; epidemic (human body louse) is R prowazekii; the rash starts centrally and spreads out, SPARING palms and soles. RASH RARE: ehrlichiosis — Ehrlichia with the tick vector; MONOCYTES with morulae (mulberrylike inclusions) in the cytoplasm; anaplasmosis — Anaplasma with the tick vector; GRANULOCYTES with morulae; Q fever — C. burnetii with NO arthropod vector, inhaled as aerosols from cattle/sheep amniotic fluid; presents with headache, cough, flulike symptoms, pneumonia, possibly with hepatitis; a common cause of culture ⊝ endocarditis. MYCOPLASMA PNEUMONIAE: the classic cause of atypical walking pneumonia (insidious onset, headache, nonproductive cough, patchy or diffuse interstitial infiltrate, macular rash); frequent under 30 years old with outbreaks in military recruits, prisons, and colleges; NOT seen on Gram stain (pleomorphic — the membrane contains sterols for stability; grown on Eaton agar); penicillin is ineffective since Mycoplasma has NO CELL WALL; the CXR appears more severe than the patient presentation; high titer of cold agglutinins (IgM), which can agglutinate RBCs; treatment: macrolides, doxycycline, or fluoroquinolone. GARDNERELLA VAGINALIS: the pleomorphic, gram-variable rod of bacterial vaginosis — a gray vaginal discharge with a fishy smell, NONPAINFUL (vs vaginitis); associated with sexual activity but not sexually transmitted; overgrowth of certain anaerobic bacteria (due to ↓ lactobacilli); clue cells (vaginal epithelial cells covered with Gardnerella) with a stippled appearance along the outer margin; the amine whiff test (10% KOH) enhances the fishy odor; vaginal pH >4.5 during infection; treatment: metronidazole or clindamycin.",
    why: "This block carries four exam institutions. The first is THE CYCLE-WALL PAIR: the EB/RB cycle explains why chlamydia is an obligate intracellular mucosal pathogen, and the missing peptidoglycan explains why β-lactams fail — the therapy axis (doxycycline/azithromycin) follows from the wall, not from resistance. The serotype split then maps the trachoma-to-LGV spectrum (A-C blindness, D-K the genital/neonatal set with the 1-2-week conjunctivitis, L1-L3 the buboes). The second is THE VECTOR TABLE: the zoonotic directory is the exposure-history map — the tick boards (Ixodes on deer and mice carrying Anaplasma and Borrelia; Amblyomma the Lone Star tick for Ehrlichia; Dermacentor the dog tick for RMSF), the louse (prowazekii; B. recurrentis with its variable surface antigens), the fleas (typhi, pestis), and the aerosol exceptions (psittaci from birds; Coxiella from cattle/sheep amniotic fluid). The third is THE RASH GEOGRAPHY: RMSF's rash starts at the wrists and ankles and spreads to the trunk, palms, and soles on a vasculitis (the headache-fever-rash triad), while typhus starts centrally and SPARES the palms and soles — and the rash-rare set is identified by its cells (monocytes with morulae = ehrlichiosis; granulocytes with morulae = anaplasmosis) or by its absence (Q fever: no rash, no vector, culture-negative endocarditis). The fourth is THE NO-WALL CLOSER: Mycoplasma (not seen on Gram stain, pleomorphic, sterols, Eaton agar, cold agglutinins, CXR worse than the patient, penicillin ineffective) with Gardnerella's nonpainful vaginosis completing the page (the pH-whiff-clue-cell set that separates vaginosis from vaginitis).",
    keyIdea: "Run the cycle, the table, the rash, and the wall. CHLAMYDIAE: no ATP → obligate intracellular; EB infects (endocytosis) → RB replicates (fission) → reorganizes to EBs; no peptidoglycan → β-lactams fail → doxycycline or azithromycin (pregnancy), + ceftriaxone only for concurrent gonorrhea; serotypes A-C = blindness, D-K = urethritis/PID + neonatal pneumonia (staccato cough, eosinophilia) + conjunctivitis at 1-2 WEEKS (vs gonococcal 2-5 DAYS), L1-L3 = LGV buboes. ZOONOTIC TABLE: match the vector to the species — Ixodes (deer/mice) = Anaplasma + Borrelia; louse = prowazekii + recurrentis (variable surface antigens); fleas = typhi + pestis (rats/prairie dogs); Lone Star tick = Ehrlichia; dog tick = RMSF; cat scratch = Bartonella; animal bite = Pasteurella; unpasteurized dairy = Brucella; reptiles/poultry = nontyphoidal Salmonella; aerosols = psittaci (parrots) + Coxiella (cattle/sheep amniotic fluid → Q fever, culture-negative endocarditis). RASH COMMON: RMSF wrists/ankles → trunk, palms, soles (vasculitis triad; South Atlantic — North Carolina, not the Rockies); typhus central, sparing palms/soles. RASH RARE: morulae in MONOCYTES = ehrlichiosis; in GRANULOCYTES = anaplasmosis; Q fever = no rash, no vector. MYCOPLASMA: walking pneumonia <30 (recruits/prisons/colleges); no cell wall → penicillin fails, not on Gram stain; cold agglutinins (IgM); CXR worse than patient; macrolides/doxycycline/fluoroquinolone. GARDNERELLA: gray fishy NONPAINFUL discharge; not sexually transmitted; ↓ lactobacilli + anaerobe overgrowth; clue cells (stippled margins); whiff test with KOH; pH >4.5; metronidazole or clindamycin.",
  },
  mechanisms: [
    {
      id: "obligate-intracellular-cycle",
      title: "The chlamydiae cycle: two bodies, one wall rule",
      context: "From the printed life-cycle section to the therapy axis",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Chlamydiae cannot make their own ATP — obligate intracellular organisms that cause mucosal infections",
            sublabel: "Input — the energy rule that forces the cycle.",
            variant: "input",
          },
          {
            id: "s1",
            label: "THE TWO FORMS: the ELEMENTARY BODY (small, dense) is infectious and enters the cell via ENDOCYTOSIS; it transforms into the RETICULATE BODY, which replicates in the cell by FISSION and reorganizes into elementary bodies",
            sublabel: "Process — EB infects, RB replicates, EBs re-emerge.",
            variant: "process",
          },
          {
            id: "s2",
            label: "THE WALL RULE: the chlamydial cell wall lacks classic peptidoglycan (due to reduced muramic acid) → β-LACTAM ANTIBIOTICS INEFFECTIVE — therapy is doxycycline or azithromycin (pregnancy), with ceftriaxone added only if concurrent gonorrhea testing is positive",
            sublabel: "Process — the missing target names the drug class.",
            variant: "process",
          },
          {
            id: "s3",
            label: "THE SEROTYPE SPLIT (C. trachomatis): types A-B-C — chronic infection, blindness from follicular conjunctivitis in resource-limited areas · types D-K — urethritis/PID, neonatal pneumonia (staccato cough) with eosinophilia, neonatal conjunctivitis 1-2 weeks after birth (acquired during vaginal birth) · types L1-L3 — lymphogranuloma venereum: small painless ulcers → swollen, painful inguinal lymph nodes that ulcerate (buboes); treat with doxycycline",
            sublabel: "Process — the trachoma-to-LGV spectrum.",
            variant: "process",
          },
          {
            id: "o1",
            label: "OUTPUT — the lab and the rest of the genus: PCR, NAAT; cytoplasmic inclusions (reticulate bodies) on Giemsa or fluorescent antibody–stained smear; C. pneumoniae and C. psittaci cause atypical pneumonia transmitted by aerosol (psittaci's avian reservoir: parrots, other birds)",
            sublabel: "Output — the identification column and the atypical pair.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "no ATP → the cycle" },
          { from: "s1", to: "s2", label: "the wall rule" },
          { from: "s2", to: "s3", label: "the serotype map" },
          { from: "s3", to: "o1", label: "lab + genus" },
        ],
        caption:
          "The cycle and the wall are one lesson. Because chlamydiae cannot make their own ATP, they must live intracellularly — and the two-body cycle is how: the small, dense ELEMENTARY body is the infectious courier (endocytosis), the RETICULATE body is the intracellular factory (fission), and reorganization back into elementary bodies closes the loop. The same wall that makes them obligate also picks the therapy: with classic peptidoglycan absent (reduced muramic acid), there is no β-lactam target — so doxycycline or azithromycin (the pregnancy choice) carries the block, and ceftriaxone is added only when concurrent gonorrhea testing is positive. The serotype split then runs the same organism from blindness to buboes: A-B-C build the chronic follicular conjunctivitis of resource-limited areas; D-K build the genital and neonatal set (urethritis, PID, the staccato-cough neonatal pneumonia with eosinophilia, and the conjunctivitis that appears 1-2 weeks after a vaginal birth — the timing axis that separates it from gonococcal conjunctivitis at 2-5 days); L1-L3 build lymphogranuloma venereum, whose small painless ulcers are followed by the swollen, painful, ulcerating inguinal nodes (buboes) treated with doxycycline. The lab column completes the map: PCR/NAAT for identification, cytoplasmic inclusions (the reticulate bodies) on Giemsa or fluorescent antibody stain, and the atypical-pneumonia pair — C. pneumoniae and the psittaci of parrots and other birds — arriving by aerosol.",
      },
    },
    {
      id: "rash-geography-logic",
      title: "The rash map: common wrists, rare cells, no wall",
      context: "RASH COMMON vs RASH RARE, the morulae axis, Q fever, Mycoplasma — and Gardnerella's vaginosis",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A febrile patient with a possible exposure history — the rash decides the branch, and the vector names the organism",
            sublabel: "Input — the decision the rash map resolves.",
            variant: "input",
          },
          {
            id: "s1",
            label: "RASH COMMON: RMSF — R. rickettsii (tick vector); despite its name, primarily the South Atlantic states, especially North Carolina; the rash typically starts at the WRISTS AND ANKLES and spreads to the trunk, palms, and soles; classic triad headache + fever + rash (VASCULITIS). TYPHUS — endemic (fleas) R typhi; epidemic (human body louse) R prowazekii; the rash starts CENTRALLY and spreads out, SPARING palms and soles",
            sublabel: "Process — the two rash geometries of the rickettsiales.",
            variant: "process",
          },
          {
            id: "s2",
            label: "RASH RARE: Ehrlichiosis — Ehrlichia (tick); MONOCYTES with morulae (mulberrylike inclusions) in the cytoplasm. Anaplasmosis — Anaplasma (tick); GRANULOCYTES with morulae. Q FEVER — Coxiella burnetii with NO arthropod vector: inhaled as aerosols of cattle/sheep amniotic fluid; headache, cough, flulike symptoms, pneumonia possibly with hepatitis; common cause of culture ⊝ endocarditis",
            sublabel: "Process — the cells name the disease; the absence of rash and vector names Coxiella.",
            variant: "process",
          },
          {
            id: "s3",
            label: "MYCOPLASMA PNEUMONIAE (the atypical closer): walking pneumonia (insidious onset, headache, nonproductive cough, patchy or diffuse interstitial infiltrate, macular rash); <30 years old; outbreaks in military recruits, prisons, colleges; NO CELL WALL — penicillin ineffective, not seen on Gram stain; pleomorphic; membrane sterols; Eaton agar; CXR more severe than the presentation; cold agglutinins (IgM) agglutinate RBCs; macrolides, doxycycline, or fluoroquinolone",
            sublabel: "Process — the no-wall organism and its lab set.",
            variant: "process",
          },
          {
            id: "o1",
            label: "OUTPUT — the page completes with GARDNERELLA VAGINALIS (book 147, page ownership): the pleomorphic gram-variable rod of bacterial vaginosis — gray fishy NONPAINFUL discharge (vs vaginitis); associated with sexual activity but NOT sexually transmitted; anaerobic overgrowth with ↓ lactobacilli; clue cells with stippled outer margins; amine whiff test (10% KOH); pH >4.5; metronidazole or clindamycin",
            sublabel: "Output — the vaginosis-vs-vaginitis split closes the topic.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "rash common" },
          { from: "s1", to: "s2", label: "rash rare" },
          { from: "s2", to: "s3", label: "the no-wall closer" },
          { from: "s3", to: "o1", label: "Gardnerella" },
        ],
        caption:
          "The rash map runs on geometry, cells, and absence. Geometry: RMSF's rash begins at the wrists and ankles and spreads to the trunk, palms, and soles — the vasculitis behind the classic headache-fever-rash triad — and despite its name the disease lives in the South Atlantic states, especially North Carolina; typhus runs the opposite geometry, starting centrally and spreading outward while SPARING the palms and soles. Cells: the rash-rare set is named by its morulae — mulberrylike inclusions in the cytoplasm of MONOCYTES for ehrlichiosis and of GRANULOCYTES for anaplasmosis — the cell-lineage axis that turns a smear into a diagnosis. Absence: Q fever has no rash, no arthropod vector, and often no positive culture — Coxiella burnetii arrives as aerosols of cattle/sheep amniotic fluid, presents with headache, cough, flulike symptoms, and pneumonia possibly with hepatitis, and is a common cause of culture-NEGATIVE endocarditis. Mycoplasma then closes the infectious block with the no-wall rule: the walking pneumonia of patients under 30 (military recruits, prisons, colleges), with a CXR that looks worse than the patient, cold agglutinins (IgM) that agglutinate RBCs, pleomorphism with membrane sterols on Eaton agar, invisibility on Gram stain, and penicillin ineffectiveness — treated with macrolides, doxycycline, or fluoroquinolones. And by page ownership, book 147's Gardnerella completes the note: the nonpainful, gray, fishy discharge of bacterial vaginosis (as opposed to painful vaginitis), not sexually transmitted, built on anaerobic overgrowth with reduced lactobacilli, identified by clue cells with stippled margins, the KOH whiff test, and a pH above 4.5 — treated with metronidazole or clindamycin.",
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "vector-borne-rash-map",
      title: "The chlamydiae cycle + the zoonotic directory + the rash split + Gardnerella",
      caption:
        "An original KYP redraw of the source's chlamydiae life-cycle section (the EB/RB cycle, the wall rule, and the serotype tri-split) with the 17-row zoonotic directory (SPECIES | DISEASE | TRANSMISSION AND SOURCE), the RASH COMMON vs RASH RARE split (RMSF, typhus, ehrlichiosis, anaplasmosis, Q fever) with the Mycoplasma closer, and the Gardnerella block of book 147.",
      notice:
        "The printed images (the chlamydial follicular-conjunctivitis photo, the Gardnerella clue cells, the RMSF wrist rash, the monocyte morulae of ehrlichiosis, the granulocyte morulae of anaplasmosis, and the pleomorphic Mycoplasma) are raster — COPYRIGHTED, described-in-text only. FA's printed mnemonics (Chlamys = cloak; ABC = Africa, Blindness, Chronic; D-K = everything else; you drive CARS using your palms and soles; Rickettsii on the wrists, typhus on the trunk; MEGA; the Quite Complicated bug; cold without a coat) are NOT reproduced in the visual — verification only, carried verbatim in the table block below.",
    },
    {
      kind: "table",
      title: "The intracellular & vector-borne pages — verbatim",
      intro: "The source's entries (books 146-148), verbatim (FA's printed mnemonics marked as such).",
      columns: ["Organism / Section", "Content (verbatim)"],
      rows: [
        ["Chlamydiae — the cycle and the wall", "Chlamydiae cannot make their own ATP. They are obligate intracellular organisms that cause mucosal infections. 2 forms: Elementary body (small, dense) is “enfectious” (FA's printed gloss) and enters cell via endocytosis; transforms into reticulate body. Reticulate body replicates in cell by fission; reorganizes into elementary bodies. Chlamydia trachomatis causes neonatal and follicular adult conjunctivitis A (printed photo — the chlamydial conjunctivitis; described-in-text only), nongonococcal urethritis, PID, and reactive arthritis. Chlamydophila pneumoniae and Chlamydophila psittaci cause atypical pneumonia; transmitted by aerosol. Chlamydial cell wall lacks classic peptidoglycan (due to reduced muramic acid), rendering β-lactam antibiotics ineffective. Chlamys = cloak (intracellular). (FA mnemonic, printed.) C psittaci—has an avian reservoir (parrots), causes atypical pneumonia. Lab diagnosis: PCR, NAAT. Cytoplasmic inclusions (reticulate bodies) seen on Giemsa or fluorescent antibody–stained smear. Treatment: doxycycline, azithromycin (for pregnant patients). Add ceftriaxone if concurrent gonorrhea testing is positive."],
        ["Chlamydia trachomatis serotypes — types A, B, and C", "Chronic infection, cause blindness due to follicular conjunctivitis in resource-limited areas. ABC = Africa, Blindness, Chronic infection. (FA mnemonic, printed.)"],
        ["Types D–K", "Urethritis/PID, neonatal pneumonia (staccato cough) with eosinophilia, neonatal conjunctivitis (1-2 weeks after birth). D–K = everything else. (FA mnemonic, printed.) Neonatal disease can be acquired during vaginal birth if pregnant patient is infected."],
        ["Types L1, L2, and L3", "Lymphogranuloma venereum—small, painless ulcers on genitals → swollen, painful inguinal lymph nodes that ulcerate (buboes). Treat with doxycycline."],
        ["Gardnerella vaginalis (book 147, page ownership)", "A pleomorphic, gram-variable rod involved in bacterial vaginosis. Presents as a gray vaginal discharge with a fishy smell; nonpainful (vs vaginitis). Associated with sexual activity, but not sexually transmitted. Bacterial vaginosis is also characterized by overgrowth of certain anaerobic bacteria in vagina (due to ↓ lactobacilli). Clue cells (vaginal epithelial cells covered with Gardnerella) have stippled appearance along outer margin (arrow in A) (printed photo — the clue cells; described-in-text only). Amine whiff test—mixing discharge with 10% KOH enhances fishy odor. Vaginal pH >4.5 during infection. Treatment: metronidazole or clindamycin."],
        ["Zoonotic bacteria — the directory (17 rows, verbatim)", "Zoonosis—infectious disease transmitted between animals and humans. Anaplasma spp — Anaplasmosis — Ixodes ticks (live on deer and mice). Bartonella spp — Cat scratch disease, bacillary angiomatosis — Cat scratch. Borrelia burgdorferi — Lyme disease — Ixodes ticks (live on deer and mice). Borrelia recurrentis — Relapsing fever — Louse (recurrent due to variable surface antigens). Brucella spp — Brucellosis/undulant fever — Unpasteurized dairy; inhalation of or contact with infected animal tissue or fluids. Campylobacter — Bloody diarrhea — Feces from infected pets/animals; contaminated meats/foods/hands. Chlamydophila psittaci — Psittacosis — Parrots, other birds. Coxiella burnetii — Q fever — Aerosols of cattle/sheep amniotic fluid. Ehrlichia chaffeensis — Ehrlichiosis — Amblyomma (Lone Star tick). Francisella tularensis — Tularemia — Ticks, rabbits, deer flies. Leptospira spp — Leptospirosis — Animal urine in water; recreational water use. Mycobacterium leprae — Leprosy — Humans with lepromatous leprosy; armadillo (rare). Pasteurella multocida — Cellulitis, osteomyelitis — Animal bite, cats, dogs. Rickettsia prowazekii — Epidemic typhus — Human to human via human body louse. Rickettsia rickettsii — Rocky Mountain spotted fever — Dermacentor (dog tick). Rickettsia typhi — Endemic typhus — Fleas. Salmonella spp (except S typhi) — Diarrhea (which may be bloody), vomiting, fever, abdominal cramps — Reptiles and poultry. Yersinia pestis — Plague — Fleas (rats and prairie dogs are reservoirs)."],
        ["Rickettsial diseases and vector-borne illnesses — RASH COMMON", "Treatment: doxycycline. Rocky Mountain spotted fever: Rickettsia rickettsii, vector is tick. Despite its name, disease occurs primarily in the South Atlantic states, especially North Carolina. Rash typically starts at wrists A (printed photo — the wrist rash; described-in-text only) and ankles and then spreads to trunk, palms, and soles. Classic triad—headache, fever, rash (vasculitis). Palms and soles rash is seen in Coxsackievirus A infection (hand, foot, and mouth disease), Rocky Mountain spotted fever, and 2° Syphilis (you drive CARS using your palms and soles — FA mnemonic, printed). Typhus: Endemic (fleas)—R typhi. Epidemic (human body louse)—R prowazekii. Rash starts centrally and spreads out, sparing palms and soles. Rickettsii on the wrists, typhus on the trunk. (FA mnemonic, printed.)"],
        ["RASH RARE", "Ehrlichiosis: Ehrlichia, vector is tick. Monocytes with morulae B (printed photo — the monocyte morulae; described-in-text only) (mulberrylike inclusions) in cytoplasm. MEGA: Monocytes = Ehrlichiosis, Granulocytes = Anaplasmosis. (FA mnemonic, printed.) Anaplasmosis: Anaplasma, vector is tick. Granulocytes with morulae C (printed photo — the granulocyte morulae; described-in-text only) in cytoplasm. Q fever: Coxiella burnetii, no arthropod vector. Bacterium inhaled as aerosols from cattle/sheep amniotic fluid. Presents with headache, cough, flulike symptoms, pneumonia, possibly in combination with hepatitis. Common cause of culture ⊝ endocarditis. Q fever is caused by a Quite Complicated bug because it has no rash or vector and its causative organism can survive outside in its endospore form. Not in the Rickettsia genus, but closely related. (FA mnemonic, printed.)"],
        ["Mycoplasma pneumoniae", "Classic cause of atypical “walking pneumonia” (insidious onset, headache, nonproductive cough, patchy or diffuse interstitial infiltrate, macular rash). Occurs frequently in those <30 years old; outbreaks in military recruits, prisons, colleges. Treatment: macrolides, doxycycline, or fluoroquinolone (penicillin ineffective since Mycoplasma has no cell wall). Not seen on Gram stain. Pleomorphic A (printed photo — the pleomorphic Mycoplasma; described-in-text only). Bacterial membrane contains sterols for stability. Grown on Eaton agar. CXR appears more severe than patient presentation. High titer of cold agglutinins (IgM), which can agglutinate RBCs. Mycoplasma gets cold without a coat (no cell wall). (FA mnemonic, printed.)"],
      ],
      caption:
        "The table reads with the visual: the cycle rows carry the EB/RB logic, the directory rows map the vectors, the rash rows split common from rare, and the Gardnerella row completes book 147 by page ownership. The printed photos' pointers (the A/B/C markers) are carried verbatim; the photographs themselves are described-in-text only. The RASH COMMON / RASH RARE grouping resolved by two concordant VLM reads (RASH COMMON = RMSF + typhus; RASH RARE = ehrlichiosis + anaplasmosis + Q fever, with Mycoplasma closing) — the text layer emits the RASH RARE label at line 64 between the Q fever block and the figure row (a content-stream quirk documented).",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "The protocols the rash map implies",
      body: "THE CHLAMYDIA PROTOCOL: no ATP → obligate intracellular; EB (infectious, endocytosis) → RB (fission) → EBs; the wall lacks peptidoglycan → β-lactams fail → doxycycline or azithromycin (pregnancy), adding ceftriaxone only for concurrent positive gonorrhea testing. Serotypes: A-C = the blindness set (resource-limited areas); D-K = urethritis/PID + neonatal pneumonia (staccato cough, eosinophilia) + conjunctivitis at 1-2 WEEKS after vaginal birth (vs the gonococcal 2-5 DAYS of M12's pair); L1-L3 = LGV (painless ulcers → painful ulcerating inguinal buboes; doxycycline). Lab: PCR/NAAT; cytoplasmic inclusions on Giemsa or FA stain. THE RICKETTSIAL PROTOCOL: doxycycline across the whole set. RMSF: tick exposure in the South Atlantic (North Carolina — despite the name); rash wrists/ankles → trunk, palms, soles; triad = headache + fever + rash (vasculitis). Typhus: endemic (fleas, R typhi) vs epidemic (human body louse, R prowazekii); rash central, sparing palms/soles. THE RASH-RARE PROTOCOL: morulae in MONOCYTES = ehrlichiosis (Ehrlichia, tick); in GRANULOCYTES = anaplasmosis (Anaplasma, tick); Q fever = Coxiella with NO rash, NO vector — aerosols of cattle/sheep amniotic fluid; headache, cough, flulike symptoms, pneumonia ± hepatitis; the common cause of culture-NEGATIVE endocarditis. THE MYCOPLASMA PROTOCOL: walking pneumonia under 30 (recruits, prisons, colleges); nonproductive cough with patchy/diffuse interstitial infiltrate; CXR worse than the patient; cold agglutinins (IgM) agglutinating RBCs; not seen on Gram stain (no cell wall — penicillin ineffective); Eaton agar; membrane sterols; macrolides, doxycycline, or fluoroquinolone. THE GARDNERELLA PROTOCOL: gray fishy NONPAINFUL discharge (vaginosis — not the painful vaginitis of Candida or Trichomonas); not sexually transmitted; ↓ lactobacilli with anaerobic overgrowth; clue cells (stippled margins); KOH whiff test; pH >4.5; metronidazole or clindamycin.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 7-year-old boy from North Carolina presents with 4 days of fever to 39.5 °C and severe headache; 2 days ago a blanching erythematous rash appeared on his wrists and ankles and has now spread to his palms, soles, and trunk. He was camping 10 days before onset. Examination shows a toxic-appearing child with conjunctival injection; no meningeal signs.",
        discriminator: "North Carolina camping + wrists/ankles-to-palms/soles rash + headache-fever-rash triad",
        concept: "Rocky Mountain spotted fever — the vasculitis rash",
        answer:
          "RMSF: Rickettsia rickettsii with the tick vector. Despite its name, the disease occurs primarily in the South Atlantic states, especially North Carolina. The rash typically starts at the wrists and ankles and then spreads to the trunk, palms, and soles; the classic triad is headache, fever, rash (a vasculitis). Treatment: doxycycline — start empirically, without waiting for serology.",
      },
      {
        stem: "A 54-year-old cattle rancher presents with 3 weeks of low-grade fever, night sweats, and weight loss; a new diastolic murmur is heard, and blood cultures are negative after 5 days ×3. Transesophageal echo shows a small aortic-valve vegetation. He reports no rash and recalls no tick or louse exposure; his work includes assisting calving.",
        discriminator: "Rancher + aerosols of cattle/sheep amniotic fluid + culture-negative endocarditis + no rash, no vector",
        concept: "Q fever — Coxiella burnetii",
        answer:
          "Q fever: Coxiella burnetii with NO arthropod vector — the bacterium is inhaled as aerosols of cattle/sheep amniotic fluid (assisting calving is the exposure). Presents with headache, cough, flulike symptoms, pneumonia possibly in combination with hepatitis — and is a common cause of culture ⊝ endocarditis. Not in the Rickettsia genus, but closely related; treatment is doxycycline.",
      },
      {
        stem: "A 27-year-old woman presents with a 5-day history of malodorous gray vaginal discharge; she denies pain, itching, or dysuria. On examination there is no cervical motion tenderness and the discharge has a fishy odor that intensifies when mixed with 10% KOH on a slide; pH is 5.2. Saline microscopy shows epithelial cells covered with stippled bacteria along their margins.",
        discriminator: "Nonpainful gray discharge + KOH whiff + pH 5.2 + clue cells with stippled margins",
        concept: "Bacterial vaginosis — Gardnerella vaginalis",
        answer:
          "Gardnerella vaginalis: the pleomorphic, gram-variable rod of bacterial vaginosis — a gray vaginal discharge with a fishy smell, NONPAINFUL (vs vaginitis). Associated with sexual activity but not sexually transmitted; characterized by anaerobic overgrowth (due to ↓ lactobacilli). Clue cells (vaginal epithelial cells covered with Gardnerella) have the stippled appearance along the outer margin. Whiff test with 10% KOH enhances the odor; pH >4.5. Treatment: metronidazole or clindamycin.",
      },
    ],
    traps: [
      {
        a: "All neonatal conjunctivitis presents in the first days of life",
        b: "Gonococcal conjunctivitis appears 2-5 DAYS after birth; CHLAMYDIAL (D-K) conjunctivitis appears 1-2 WEEKS after birth, acquired during vaginal birth (with the D-K neonatal pneumonia's staccato cough and eosinophilia)",
        whyConfused: "Both are perinatal eye infections passed through the birth canal.",
        keyDifference:
          "The timing axis names the organism: 2-5 days = N. gonorrhoeae (M12's pair — erythromycin ointment prophylaxis); 1-2 weeks = Chlamydia trachomatis types D-K (doxycycline/azithromycin; erythromycin for the neonate). The D-K set also carries neonatal pneumonia (staccato cough) with eosinophilia — the respiratory twin of the conjunctivitis.",
        clue: "Any neonatal conjunctivitis timing question.",
      },
      {
        a: "Rocky Mountain spotted fever occurs in the Rocky Mountain states",
        b: "Despite its name, RMSF occurs primarily in the SOUTH ATLANTIC states, especially North Carolina — and the rash starts at the WRISTS AND ANKLES, spreading to the trunk, palms, and soles (the vasculitis triad: headache, fever, rash)",
        whyConfused: "The disease name carries the geography.",
        keyDifference:
          "The geography plus the rash geometry is the identification pair: South Atlantic + wrists/ankles-to-palms/soles = RMSF (Dermacentor dog tick). Central-starting rash that SPARES palms and soles = typhus (fleas — R typhi endemic; human body louse — R prowazekii epidemic). The morulae pair (monocytes = ehrlichiosis, granulocytes = anaplasmosis) and Q fever's no-rash-no-vector culture-negative endocarditis complete the rickettsial set — all treated with doxycycline.",
        clue: "Any spotted-fever geography or rash-distribution question.",
      },
      {
        a: "Mycoplasma pneumonia is treated with β-lactams like other pneumonias",
        b: "Mycoplasma has NO CELL WALL — penicillin is ineffective; it is not seen on Gram stain, and therapy is macrolides, doxycycline, or fluoroquinolones",
        whyConfused: "It presents as pneumonia, and pneumonias feel penicillin-responsive.",
        keyDifference:
          "The no-wall rule is the therapy axis (mirroring the chlamydiae's no-peptidoglycan rule on the same topic): pleomorphic, membrane sterols, Eaton agar, cold agglutinins (IgM) that agglutinate RBCs, and a CXR that appears more severe than the patient's presentation — the atypical walking pneumonia of patients under 30 (military recruits, prisons, colleges). The same logic explains why chlamydiae resist β-lactams (reduced muramic acid): both organisms lack the target.",
        clue: "Any atypical-pneumonia therapy or Gram-stain question.",
      },
    ],
    pivots: [
      {
        lookAlike: "RASH COMMON vs RASH RARE (the rickettsial split)",
        differentiator: "Wrists-to-palms vasculitis vs morulae cells / no rash at all",
        correctPath:
          "RASH COMMON: RMSF (R. rickettsii, tick; South Atlantic especially North Carolina; rash wrists/ankles → trunk, palms, soles; triad headache + fever + rash [vasculitis]) and typhus (endemic fleas — R typhi; epidemic human body louse — R prowazekii; rash central, spreading out, sparing palms and soles). RASH RARE: ehrlichiosis (MONOCYTE morulae), anaplasmosis (GRANULOCYTE morulae), Q fever (no rash, no vector, culture ⊝ endocarditis, aerosols of cattle/sheep amniotic fluid). Mycoplasma closes: macular rash possible; the no-wall atypical pneumonia.",
      },
      {
        lookAlike: "Elementary body vs reticulate body (the chlamydial cycle)",
        differentiator: "Infectious courier vs intracellular factory",
        correctPath:
          "ELEMENTARY BODY: small, dense; INFECTIOUS; enters the cell via endocytosis; transforms into the reticulate body. RETICULATE BODY: replicates in the cell by fission; reorganizes into elementary bodies. The lab sees the reticulate bodies as cytoplasmic inclusions on Giemsa or fluorescent antibody–stained smear; PCR/NAAT identifies the organism; doxycycline or azithromycin (pregnancy) treats it — β-lactams fail because the wall lacks classic peptidoglycan (reduced muramic acid).",
      },
    ],
    miniCase: {
      vignette:
        "An 8-year-old boy is brought to the emergency department in June from rural North Carolina with 5 days of fever to 40 °C, severe headache, and myalgias. Two days ago a blanching maculopapular rash appeared on his wrists and ankles; today it covers his palms, soles, and much of his trunk. He sleeps in a tent and reports tick exposures on the family property; his parents removed a tick from his scalp 8 days ago. On examination he is toxic-appearing with conjunctival injection; there are no meningeal signs. Laboratory studies show a normal CBC and basic metabolic panel; rapid influenza and SARS-CoV-2 tests are negative.",
      question:
        "Which of the following is the most appropriate next step in management?",
      options: [
        {
          label: "A",
          text: "Begin empiric doxycycline now, without waiting for confirmatory serology",
          correct: true,
          why: "Correct. This is Rocky Mountain spotted fever: the South Atlantic geography (North Carolina — despite the name), the tick exposure, and the rash that started at the wrists and ankles before spreading to the trunk, palms, and soles, all on the headache-fever-rash vasculitis triad. Doxycycline is the treatment for the entire rickettsial set, and it must be started EMPIRICALLY — the classic exam point is that delaying therapy for confirmatory serology increases mortality.",
        },
        {
          label: "B",
          text: "Await acute and convalescent-phase serology before starting antibiotics",
          why: "Serology (or the indirect fluorescent antibody test) confirms RMSF retrospectively, but treatment decisions cannot wait for it — the mortality of delayed RMSF therapy is the teaching point of the whole rickettsial block. The distractor converts a confirmatory tool into a gating step.",
        },
        {
          label: "C",
          text: "Treat with intravenous penicillin G after blood cultures return",
          why: "Penicillin G is the syphilis protocol (M14's clock) and the gonococcal protocol — it has no role in RMSF. No organism in this block has a peptidoglycan β-lactam target except... none: the rickettsiales are treated with doxycycline, and both chlamydiae (reduced muramic acid) and Mycoplasma (no cell wall) famously resist β-lactams. The distractor imports the spirochete's drug.",
        },
        {
          label: "D",
          text: "Begin azithromycin for atypical pneumonia",
          why: "Azithromycin is the chlamydiae/Mycoplasma atypical-pneumonia drug (and the pregnancy choice for chlamydia). This patient has no cough or infiltrate — his syndrome is the vasculitis triad. The distractor imports the rash-rare/atypical branch of the map onto the rash-common branch.",
        },
        {
          label: "E",
          text: "Initiate metronidazole for a polymicrobial anaerobic overgrowth",
          why: "Metronidazole is the Gardnerella/bacterial-vaginosis protocol (with clindamycin) — the gray nonpainful discharge with pH >4.5, KOH whiff, and clue cells. The distractor imports book 147's other organism into a tick-borne vasculitis.",
        },
      ],
      reasoning:
        "The vignette stacks RMSF's identifiers: the June tick season, rural North Carolina (the South Atlantic geography that the disease's name hides), the 8-day incubation after a tick, and the pathognomonic rash migration — wrists and ankles first, then palms, soles, and trunk — on the headache-fever-rash triad of a vasculitis. The management answer is the block's core rule: doxycycline empirically, now. Each distractor imports another protocol from this topic or its neighbors: waiting on serology (the mortality trap), penicillin G (the syphilis/gonococcus import), azithromycin (the atypical-pneumonia import), or metronidazole (the Gardnerella import).",
      },
    },
  mnemonics: [
    {
      code: "“The courier and the factory: the small dense body delivers, the reticulate body builds; and with no peptidoglycan in the wall, the β-lactams have nothing to bite.”",
      meaning:
        "KYP's key for the chlamydiae cycle: the ELEMENTARY body (small, dense) is the infectious courier that enters by endocytosis; the RETICULATE body is the intracellular factory replicating by fission before reorganizing back into elementary bodies. The wall lacks classic peptidoglycan (reduced muramic acid) → β-lactams are ineffective → doxycycline or azithromycin (pregnancy), with ceftriaxone added only for concurrent positive gonorrhea testing. Lab: cytoplasmic inclusions (the reticulate bodies) on Giemsa or FA stain; PCR/NAAT.",
      memorizes: "The EB/RB cycle and the wall rule",
      whenToUse: "Any chlamydia therapy, cycle, or stain question.",
      clinical: "The missing target names the drug class — the same rule Mycoplasma uses one page later.",
    },
    {
      code: "“The serotypes run from blindness to buboes: A-C close the eye, D-K take the birth canal at 1-2 weeks (not 2-5 days), and L1-L3 build the painful groin.”",
      meaning:
        "KYP's key for the C. trachomatis serotypes: A-B-C = chronic infection and blindness from follicular conjunctivitis in resource-limited areas; D-K = urethritis/PID, neonatal pneumonia (staccato cough with eosinophilia), and neonatal conjunctivitis at 1-2 WEEKS after vaginal birth (the timing axis that separates it from the gonococcal 2-5 DAYS); L1-L3 = lymphogranuloma venereum with small painless ulcers → swollen painful inguinal nodes that ulcerate (buboes), treated with doxycycline. FA's printed glosses (ABC = Africa, Blindness, Chronic; D-K = everything else) are verification-only and stay in the table block.",
      memorizes: "The trachoma-to-LGV spectrum",
      whenToUse: "Any serotype or neonatal-conjunctivitis timing question.",
      clinical: "The timing axis doubles as the organism axis: 2-5 days gonococcus, 1-2 weeks chlamydia.",
    },
    {
      code: "“Read the rash like a map: wrists-to-palms is the mountain (despite the name, the Carolinas), central-sparing is the louse and the flea, the morulae name the cell line, and the no-rash-no-vector rancher grows a culture-negative valve.”",
      meaning:
        "KYP's key for the rash map: RMSF's rash starts at the wrists and ankles and spreads to the trunk, palms, and soles (vasculitis triad — South Atlantic, especially North Carolina); typhus starts centrally and spreads out, SPARING palms and soles (fleas — R typhi; human body louse — R prowazekii); the morulae identify the rash-rare pair (monocytes = ehrlichiosis, granulocytes = anaplasmosis); Q fever has no rash and no vector — aerosols of cattle/sheep amniotic fluid, culture-negative endocarditis. Mycoplasma closes with the no-wall atypical pneumonia (cold agglutinins; CXR worse than the patient). FA's printed glosses (CARS; wrists/trunk; MEGA; Quite Complicated; cold without a coat) are verification-only and stay in the table block.",
      memorizes: "The rickettsial rash geography and the rash-rare set",
      whenToUse: "Any fever-with-rash or exposure-history stem.",
      clinical: "All of it is treated with doxycycline — start empirically.",
    },
  ],
  rapidReview: {
    s30: [
      "Chlamydiae: no ATP → obligate intracellular; EB (infectious, endocytosis) → RB (fission) → EBs",
      "Chlamydial wall lacks peptidoglycan (reduced muramic acid) → β-lactams INEFFECTIVE → doxycycline or azithromycin (pregnancy)",
      "Serotypes: A-C blindness · D-K urethritis/PID + neonatal pneumonia (staccato cough, eosinophilia) + conjunctivitis 1-2 weeks · L1-L3 LGV buboes",
      "RASH COMMON: RMSF (wrists/ankles → trunk, palms, soles; vasculitis triad; South Atlantic — North Carolina) · typhus (central, sparing palms/soles)",
      "RASH RARE: monocyte morulae = ehrlichiosis · granulocyte morulae = anaplasmosis · Q fever (no rash, no vector)",
    ],
    m3: [
      "Q fever: Coxiella burnetii — aerosols of cattle/sheep amniotic fluid; headache, cough, flulike, pneumonia ± hepatitis; culture ⊝ endocarditis; doxycycline",
      "Zoonotic table vectors: Ixodes (deer/mice) = Anaplasma + Borrelia · louse = prowazekii + recurrentis (variable surface antigens) · fleas = typhi + pestis (rats/prairie dogs) · Lone Star tick = Ehrlichia · dog tick = RMSF",
      "More zoonotic rows: Bartonella (cat scratch; bacillary angiomatosis) · Pasteurella (animal bite — cellulitis, osteomyelitis) · Brucella (unpasteurized dairy) · psittaci (parrots) · M. leprae (lepromatous humans; armadillo rare) · nontyphoidal Salmonella (reptiles, poultry)",
      "Mycoplasma pneumoniae: walking pneumonia <30 (recruits/prisons/colleges); NO CELL WALL — penicillin ineffective, not on Gram stain; Eaton agar; sterols",
      "Mycoplasma labs: cold agglutinins (IgM) agglutinate RBCs; CXR more severe than presentation; macrolides/doxycycline/fluoroquinolone",
    ],
    m10: [
      "Gardnerella: pleomorphic gram-variable rod; bacterial VAGINOSIS — gray fishy NONPAINFUL discharge (vs vaginitis); NOT sexually transmitted; ↓ lactobacilli + anaerobe overgrowth",
      "Gardnerella labs: clue cells (stippled outer margins); KOH whiff test; pH >4.5; metronidazole or clindamycin",
      "Chlamydia lab: PCR/NAAT; cytoplasmic inclusions (reticulate bodies) on Giemsa or fluorescent antibody stain",
      "Chlamydia therapy detail: add ceftriaxone ONLY if concurrent gonorrhea testing is positive; azithromycin is the pregnancy choice",
      "The full rickettsial therapy line: doxycycline for everything — RMSF, typhus, ehrlichiosis, anaplasmosis, Q fever",
    ],
  },
  recall: [
    {
      q: "Walk the chlamydiae cycle, the wall rule, and the serotype split.",
      a: "Chlamydiae cannot make their own ATP (obligate intracellular, mucosal infections). ELEMENTARY BODY (small, dense) is infectious — enters via endocytosis, transforms into the RETICULATE BODY, which replicates by fission and reorganizes into elementary bodies. The cell wall lacks classic peptidoglycan (reduced muramic acid) → β-lactams ineffective; treatment is doxycycline or azithromycin (pregnancy), adding ceftriaxone only if concurrent gonorrhea testing is positive. Serotypes: A-B-C — chronic infection, blindness from follicular conjunctivitis in resource-limited areas; D-K — urethritis/PID, neonatal pneumonia (staccato cough) with eosinophilia, neonatal conjunctivitis 1-2 weeks after birth (vaginal birth); L1-L3 — lymphogranuloma venereum (small painless ulcers → swollen painful inguinal nodes that ulcerate [buboes]; doxycycline). Lab: PCR, NAAT; cytoplasmic inclusions on Giemsa or FA-stained smear.",
    },
    {
      q: "Name the 17 zoonotic rows with their vectors (the transmission map).",
      a: "Anaplasma spp — anaplasmosis — Ixodes ticks (deer and mice). Bartonella spp — cat scratch disease, bacillary angiomatosis — cat scratch. Borrelia burgdorferi — Lyme disease — Ixodes ticks. Borrelia recurrentis — relapsing fever (variable surface antigens) — louse. Brucella spp — brucellosis/undulant fever — unpasteurized dairy; infected animal tissue or fluids. Campylobacter — bloody diarrhea — feces from infected pets/animals; contaminated meats/foods/hands. Chlamydophila psittaci — psittacosis — parrots, other birds. Coxiella burnetii — Q fever — aerosols of cattle/sheep amniotic fluid. Ehrlichia chaffeensis — ehrlichiosis — Amblyomma (Lone Star tick). Francisella tularensis — tularemia — ticks, rabbits, deer flies. Leptospira spp — leptospirosis — animal urine in water; recreational water use. Mycobacterium leprae — leprosy — humans with lepromatous leprosy; armadillo (rare). Pasteurella multocida — cellulitis, osteomyelitis — animal bite (cats, dogs). Rickettsia prowazekii — epidemic typhus — human to human via human body louse. Rickettsia rickettsii — Rocky Mountain spotted fever — Dermacentor (dog tick). Rickettsia typhi — endemic typhus — fleas. Salmonella spp except S typhi — diarrhea (possibly bloody), vomiting, fever, cramps — reptiles and poultry. Yersinia pestis — plague — fleas (rats and prairie dogs are reservoirs).",
    },
    {
      q: "Split RASH COMMON from RASH RARE with the identifying features.",
      a: "RASH COMMON — RMSF: R. rickettsii, tick vector; South Atlantic states especially North Carolina (despite the name); rash starts at the wrists and ankles, spreading to trunk, palms, and soles; classic triad headache + fever + rash (vasculitis). Typhus: endemic (fleas) R typhi; epidemic (human body louse) R prowazekii; rash starts centrally and spreads out, SPARING palms and soles. RASH RARE — ehrlichiosis: Ehrlichia, tick; MONOCYTES with morulae (mulberrylike inclusions). Anaplasmosis: Anaplasma, tick; GRANULOCYTES with morulae. Q fever: Coxiella burnetii, no arthropod vector; aerosols of cattle/sheep amniotic fluid; headache, cough, flulike symptoms, pneumonia ± hepatitis; common cause of culture ⊝ endocarditis. Mycoplasma pneumoniae closes the block: the atypical walking pneumonia with a possible macular rash.",
    },
    {
      q: "Give the Mycoplasma set: clinical, lab, therapy.",
      a: "Atypical walking pneumonia (insidious onset, headache, nonproductive cough, patchy or diffuse interstitial infiltrate, macular rash); <30 years old; outbreaks in military recruits, prisons, colleges. NOT seen on Gram stain (pleomorphic); bacterial membrane contains sterols for stability; grown on Eaton agar; CXR appears more severe than the patient presentation; high titer of cold agglutinins (IgM) which can agglutinate RBCs. Treatment: macrolides, doxycycline, or fluoroquinolone — penicillin ineffective (no cell wall).",
    },
    {
      q: "Give the Gardnerella set and the vaginosis-vs-vaginitis distinction.",
      a: "Gardnerella vaginalis: a pleomorphic, gram-variable rod. Bacterial vaginosis: gray vaginal discharge with a fishy smell, NONPAINFUL (vs the painful vaginitis of Candida/Trichomonas); associated with sexual activity but NOT sexually transmitted; overgrowth of certain anaerobic bacteria (due to ↓ lactobacilli). Clue cells (vaginal epithelial cells covered with Gardnerella) with a stippled appearance along the outer margin. Amine whiff test: 10% KOH enhances the fishy odor. Vaginal pH >4.5 during infection. Treatment: metronidazole or clindamycin.",
    },
  ],
  related: [
    {
      title: "Spirochetes: Treponema, Borrelia, Leptospira",
      topicId: "spirochetes-syphilis",
      note: "M14's shared page 168 boundary (the diagnosing-syphilis tree above, the Chlamydiae section below) and its Ixodes vector (which also carries Anaplasma — this note's zoonotic table returns the co-vector favor).",
    },
    {
      title: "Gram-Negative Bacilli: Enterics, Zoonotics & the Water Organisms",
      topicId: "gram-negative-bacilli",
      note: "M12's tree placed Brucella, Pasteurella, and Francisella on its coccobacillus lane; this note's zoonotic directory completes their transmission rows (unpasteurized dairy; animal bite; ticks, rabbits, deer flies).",
    },
    {
      title: "Enteric Pathogens: Salmonella, Shigella, E. coli Strains & Campylobacter",
      topicId: "enteric-pathogens",
      note: "M13's roster (Campylobacter's bloody diarrhea, the nontyphoidal Salmonella row) returns here as two rows of the zoonotic directory — the same organisms read as a transmission map.",
    },
  ],
  crossLinks: [
    {
      subject: "Pharmacology (Antimicrobials)",
      connection: "The therapy column: doxycycline across the entire rickettsial set (RMSF, typhus, ehrlichiosis, anaplasmosis, Q fever); azithromycin for chlamydiae in pregnancy (with ceftriaxone only for concurrent gonorrhea); the β-lactam failure pair (chlamydiae's reduced muramic acid, Mycoplasma's absent wall); metronidazole or clindamycin for Gardnerella.",
    },
    {
      subject: "Cardiology (Endocarditis)",
      connection: "Q fever is the microbiology anchor for culture-negative endocarditis: Coxiella burnetii on the aortic valve after aerosols of cattle/sheep amniotic fluid — the classic 'blood cultures negative, vegetation present' stem.",
    },
    {
      subject: "Ophthalmology (Neonatal conjunctivitis)",
      connection: "The timing axis: gonococcal conjunctivitis at 2-5 days (M12's pair) vs chlamydial D-K conjunctivitis at 1-2 weeks with the staccato-cough pneumonia twin — the birth-canal infections ranked by their clock.",
    },
    {
      subject: "Pulmonology (Atypical pneumonia)",
      connection: "Mycoplasma pneumoniae and the chlamydophilae (C. pneumoniae, C. psittaci) are the atypical-pneumonia anchors: walking pneumonia under 30 with cold agglutinins and a CXR worse than the patient, treated with macrolides — never β-lactams.",
    },
  ],
};
