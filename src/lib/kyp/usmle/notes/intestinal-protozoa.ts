import type { KypUsMLENote } from "../types";

// Microbiology — PARASITOLOGY banner (M-batch 18).
// Source: First Aid 2026, Part 1 pdf 174 / book 152
//  (Protozoa—gastrointestinal infections: the 5-column table with
//   Giardia lamblia, Entamoeba histolytica, Cryptosporidium).
//  Trichomonas vaginalis — the urogenital protozoan of the topic title —
//  prints on pdf 177 (book 155) under M19's page ownership; its verbatim
//  entry is carried in M19's table block and cross-linked here.

export const intestinalProtozoa: KypUsMLENote = {
  id: "intestinal-protozoa",
  title: "Intestinal & Urogenital Protozoa",
  subtitle:
    "The PARASITOLOGY block organized by THE WATER AXIS. GIARDIA LAMBLIA: giardiasis — bloating, flatulence, foul-smelling, NONBLOODY, FATTY diarrhea (often seen in campers/hikers); transmission CYSTS IN WATER; diagnosis — multinucleated trophozoites or cysts in stool, antigen detection, PCR; treatment tinidazole, nitazoxanide, or metronidazole. ENTAMOEBA HISTOLYTICA: amebiasis — BLOODY diarrhea (dysentery), liver abscess (“anchovy paste” exudate), RUQ pain; histology of colon biopsy shows FLASK-SHAPED ULCERS; transmission CYSTS IN WATER; diagnosis — serology, antigen testing, PCR, and/or trophozoites (with ENGULFED RBCs in the cytoplasm) or cysts with up to 4 nuclei in stool; treatment metronidazole, with paromomycin for asymptomatic cyst passers. CRYPTOSPORIDIUM: severe diarrhea in AIDS, mild disease (watery diarrhea) in immunocompetent hosts; transmission OOCYSTS IN WATER; diagnosis — oocysts on ACID-FAST stain, antigen detection, PCR; treatment — prevention (eg, filtering), with nitazoxanide for severe disease and/or the immunocompromised. The urogenital protozoan TRICHOMONAS VAGINALIS (vaginitis — foul-smelling, greenish discharge; itching and burning; sexually transmitted, cannot exist outside the human because it cannot form cysts; motile trophozoites on wet mount; punctate cervical hemorrhages [“strawberry cervix”]; metronidazole for the patient AND partner(s)) prints on book 155 under M19's page ownership — cross-linked here, carried verbatim there.",
  subject: "Microbiology",
  system: "Section II · High-Yield General Principles — Parasitology",
  pilotCategory:
    "Parasitology — the GI protozoa on the water axis (cysts in water vs oocysts in water) with the stool-axis pair (fatty nonbloody vs bloody dysentery with the anchovy-paste liver abscess and flask-shaped ulcers); the acid-fast oocyst rule for Cryptosporidium; the immune-axis split (AIDS-severe vs immunocompetent-mild); and the urogenital cross-link to Trichomonas (book 155, M19 ownership)",
  difficulty: 2,
  readTime: 9,
  sourceRef: "First Aid 2026, Part 1 pp. 152–152 (Protozoa—gastrointestinal infections; Trichomonas on pp. 155 cross-linked)",
  tags: [
    "intestinal protozoa",
    "Giardia lamblia",
    "giardiasis",
    "fatty diarrhea",
    "campers",
    "hikers",
    "multinucleated trophozoites",
    "tinidazole",
    "nitazoxanide",
    "metronidazole",
    "Entamoeba histolytica",
    "amebiasis",
    "dysentery",
    "liver abscess",
    "anchovy paste",
    "flask-shaped ulcers",
    "engulfed RBCs",
    "cysts with up to 4 nuclei",
    "paromomycin",
    "asymptomatic cyst passers",
    "Cryptosporidium",
    "watery diarrhea",
    "AIDS",
    "oocysts",
    "acid-fast stain",
    "filtering",
    "Trichomonas vaginalis",
    "vaginitis",
    "strawberry cervix",
  ],
  core: {
    what: "THE GI PROTOZOA ON THE WATER AND STOOL AXES. GIARDIA LAMBLIA — giardiasis: bloating, flatulence, foul-smelling, nonbloody, fatty diarrhea, often seen in campers and hikers; transmission is CYSTS IN WATER; diagnosis by multinucleated trophozoites or cysts in stool, antigen detection, or PCR; treatment is tinidazole, nitazoxanide, or metronidazole. ENTAMOEBA HISTOLYTICA — amebiasis: BLOODY diarrhea (dysentery) with liver abscess (the “anchovy paste” exudate) and RUQ pain; the histology of colon biopsy shows FLASK-SHAPED ULCERS; transmission is CYSTS IN WATER; diagnosis by serology, antigen testing, PCR, and/or trophozoites (with ENGULFED RBCs in the cytoplasm) or cysts with up to 4 nuclei in stool; treatment is metronidazole, with paromomycin added for asymptomatic cyst passers. CRYPTOSPORIDIUM — severe diarrhea in AIDS and mild disease (watery diarrhea) in immunocompetent hosts; transmission is OOCYSTS IN WATER; diagnosis by OOCYSTS ON ACID-FAST STAIN, antigen detection, or PCR; treatment is prevention (eg, filtering) — with nitazoxanide for severe disease and/or the immunocompromised host.",
    why: "This block carries three exam institutions. The first is THE STOOL AXIS: fatty and nonbloody points to Giardia (the camper/hiker organism of cyst-contaminated water), while BLOODY dysentery with RUQ pain points to Entamoeba — whose colon biopsy shows the flask-shaped ulcers and whose liver abscess exudes anchovy paste. The second is THE SMEAR AXIS: multinucleated trophozoites or cysts = Giardia; trophozoites with ENGULFED RBCs or cysts with up to 4 nuclei = Entamoeba (the erythrocyte-eating organism); oocysts on ACID-FAST stain = Cryptosporidium. The third is THE IMMUNE AXIS: the same Cryptosporidium runs mild and watery in the immunocompetent but severe in AIDS — the host names the severity, and the therapy follows (prevention by filtering; nitazoxanide when severe or immunocompromised). The urogenital protozoan Trichomonas (the strawberry cervix of metronidazole-treated-partners fame) prints on book 155 under M19's page ownership and is cross-linked.",
    keyIdea: "Run the stool, the smear, and the host. FATTY + NONBLOODY + campers/hikers + cysts in water = Giardia (multinucleated trophozoites or cysts in stool; tinidazole/nitazoxanide/metronidazole). BLOODY dysentery + RUQ pain + anchovy-paste liver abscess + flask-shaped ulcers on biopsy + cysts in water = Entamoeba histolytica (trophozoites with ENGULFED RBCs; cysts with up to 4 nuclei; metronidazole + paromomycin for asymptomatic cyst passers). WATERY diarrhea by OOCYSTS in water = Cryptosporidium — mild in the immunocompetent, SEVERE in AIDS; oocysts on ACID-FAST stain; prevention by filtering, nitazoxanide when severe/immunocompromised. The urogenital half of the title lives on book 155: Trichomonas (motile trophozoites on wet mount; strawberry cervix; treat patient AND partner).",
  },
  mechanisms: [
    {
      id: "water-stool-axis",
      title: "The water axis and the stool axis: cysts, oocysts, and the character of the diarrhea",
      context: "From the printed 5-column table to the identification logic",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A diarrheal illness with a water-exposure history — the table resolves it by stool character and smear",
            sublabel: "Input — the clinical opening.",
            variant: "input",
          },
          {
            id: "s1",
            label: "THE WATER AXIS: cysts in water (Giardia lamblia; Entamoeba histolytica) vs oocysts in water (Cryptosporidium)",
            sublabel: "Process — the transmission column names the waterborne form.",
            variant: "process",
          },
          {
            id: "s2",
            label: "THE STOOL AXIS: FATTY, NONBLOODY diarrhea with bloating, flatulence, foul smell (campers/hikers) = Giardia · BLOODY diarrhea (dysentery) with liver abscess (anchovy paste), RUQ pain, and flask-shaped ulcers on colon biopsy = Entamoeba · watery diarrhea, mild (immunocompetent) to severe (AIDS) = Cryptosporidium",
            sublabel: "Process — the disease column names the organism.",
            variant: "process",
          },
          {
            id: "s3",
            label: "THE SMEAR AXIS: multinucleated trophozoites or cysts in stool (Giardia) · trophozoites with ENGULFED RBCs in the cytoplasm or cysts with up to 4 nuclei (Entamoeba) · OOCYSTS ON ACID-FAST STAIN (Cryptosporidium) — each backed by antigen detection and PCR",
            sublabel: "Process — the diagnosis column names the form.",
            variant: "process",
          },
          {
            id: "o1",
            label: "OUTPUT — the therapy column: tinidazole, nitazoxanide, or metronidazole (Giardia) · metronidazole with paromomycin for asymptomatic cyst passers (Entamoeba) · prevention by filtering with nitazoxanide for severe disease and/or the immunocompromised (Cryptosporidium)",
            sublabel: "Output — three nitroimidazole-anchored ladders.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "water axis" },
          { from: "s1", to: "s2", label: "stool axis" },
          { from: "s2", to: "s3", label: "smear axis" },
          { from: "s3", to: "o1", label: "therapy" },
        ],
        caption:
          "The table runs three axes into one identification. The water axis separates the cyst-formers (Giardia, Entamoeba) from the oocyst-former (Cryptosporidium) — the difference that shows up on the smear as the acid-fast rule. The stool axis then names the disease: Giardia's is the fatty, nonbloody, foul-smelling diarrhea of campers and hikers (the malabsorption picture); Entamoeba's is dysentery — bloody diarrhea with the anchovy-paste liver abscess and the flask-shaped ulcers on colon biopsy histology; Cryptosporidium's is watery, scaled by the host's immunity. The smear axis converts the stool to a diagnosis: multinucleated trophozoites or cysts for Giardia; trophozoites with engulfed RBCs (the erythrocyte-eating organism) or cysts with up to 4 nuclei for Entamoeba; acid-fast oocysts for Cryptosporidium — with antigen detection and PCR backing all three. The therapy column then runs on the nitroimidazole spine: tinidazole, nitazoxanide, or metronidazole for Giardia; metronidazole (plus paromomycin for the asymptomatic cyst passers) for Entamoeba; and prevention-by-filtering with nitazoxanide reserved for severe or immunocompromised Cryptosporidium disease.",
      },
    },
    {
      id: "host-severity-axis",
      title: "The host names the severity: water, immunity, and the urogenital cross-link",
      context: "Cryptosporidium's immune split and the Trichomonas bridge to book 155",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "The same water exposure produces different diseases in different hosts — and one protozoan left the water entirely",
            sublabel: "Input — the host axis and the urogenital exception.",
            variant: "input",
          },
          {
            id: "s1",
            label: "CRYPTOSPORIDIUM'S IMMUNE SPLIT: severe diarrhea in AIDS vs mild disease (watery diarrhea) in immunocompetent hosts — the host names the severity, and the therapy follows: prevention (eg, filtering); nitazoxanide for severe disease and/or the immunocompromised",
            sublabel: "Process — the AIDS-severe / competent-mild rule.",
            variant: "process",
          },
          {
            id: "s2",
            label: "THE UROGENITAL EXCEPTION — TRICHOMONAS VAGINALIS (book 155, M19's page ownership): vaginitis with a foul-smelling, greenish discharge; itching and burning; SEXUAL transmission — it cannot exist outside the human because it cannot form cysts; diagnosis by MOTILE TROPHOZOITES on wet mount with punctate cervical hemorrhages (the “strawberry cervix”); treatment metronidazole for the patient AND partner(s) (prophylaxis; check for STI) — do not confuse with Gardnerella vaginalis, the gram-variable bacterium of bacterial vaginosis",
            sublabel: "Process — the protozoan that left the water axis for the sexual axis.",
            variant: "process",
          },
          {
            id: "o1",
            label: "OUTPUT — the block's map closes across M18 and M19: the waterborne cysts and oocysts (this note) + the urogenital trophozoite (cross-linked to M19's table block, carried verbatim there)",
            sublabel: "Output — the cross-page bridge documented per the page-ownership rule.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "immune split" },
          { from: "s1", to: "s2", label: "the urogenital exception" },
          { from: "s2", to: "o1", label: "the M18-M19 bridge" },
        ],
        caption:
          "The host axis is the block's severity engine: Cryptosporidium runs mild and watery in the immunocompetent but severe in AIDS — which is why its therapy is prevention first (filtering the water) with nitazoxanide reserved for the severe or immunocompromised host. And the topic's urogenital half is the exception that proves the water rule: Trichomonas vaginalis never forms cysts, cannot exist outside the human, and therefore travels by SEXUAL transmission instead — presenting as vaginitis (foul-smelling, greenish discharge with itching and burning), diagnosed by MOTILE trophozoites on a wet mount with the punctate cervical hemorrhages of the strawberry cervix, and treated with metronidazole for the patient AND the partner(s) (with an STI check). Its printed entry lives on book 155 (pdf 177) under M19's page ownership — carried verbatim there, cross-linked here, and distinguished on every exam from Gardnerella vaginalis, the gram-variable BACTERIUM of bacterial vaginosis (M15's page).",
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "intestinal-protozoa-panel",
      title: "The gastrointestinal protozoa — the water panel",
      caption:
        "An original KYP redraw of the source's Protozoa—gastrointestinal infections table (book 152): the three organisms on the ORGANISM | DISEASE | TRANSMISSION | DIAGNOSIS | TREATMENT grid, with the water-axis and stool-axis anchors strip.",
      notice:
        "The printed photos (A the multinucleated trophozoites; B the Giardia cysts; C the flask-shaped ulcers of the colon biopsy; D the trophozoite with engulfed RBCs; E the cysts with up to 4 nuclei; F the acid-fast oocysts) are raster — COPYRIGHTED, described-in-text only. FA's printed mnemonic (the Ghirardelli chocolates gloss for fatty stools) is NOT reproduced — verification only, in the table block below. Trichomonas prints on book 155 (M19's ownership) — cross-linked, not duplicated.",
    },
    {
      kind: "table",
      title: "The gastrointestinal protozoa — verbatim",
      intro: "The source's table (book 152), verbatim (FA's printed mnemonic marked).",
      columns: ["Organism", "Content (verbatim)"],
      rows: [
        ["Giardia lamblia", "DISEASE: Giardiasis—bloating, flatulence, foul-smelling, nonbloody, fatty diarrhea (often seen in campers/hikers)—think fat-rich Ghirardelli chocolates for fatty stools of Giardia (FA mnemonic, printed). TRANSMISSION: Cysts in water. DIAGNOSIS: Multinucleated trophozoites A (printed micrograph — the multinucleated trophozoite; described-in-text only) or cysts B (printed micrograph — the cyst; described-in-text only) in stool, antigen detection, PCR. TREATMENT: Tinidazole, nitazoxanide, or metronidazole."],
        ["Entamoeba histolytica", "DISEASE: Amebiasis—bloody diarrhea (dysentery), liver abscess (“anchovy paste” exudate), RUQ pain; histology of colon biopsy shows flask-shaped ulcers C (printed histology — the flask-shaped ulcer; described-in-text only). TRANSMISSION: Cysts in water. DIAGNOSIS: Serology, antigen testing, PCR, and/or trophozoites (with engulfed RBCs D (printed micrograph — the trophozoite with engulfed RBCs; described-in-text only) in the cytoplasm) or cysts with up to 4 nuclei in stool E (printed micrograph — the 4-nucleus cyst; described-in-text only); Entamoeba Eats Erythrocytes (FA mnemonic, printed). TREATMENT: Metronidazole; paromomycin for asymptomatic cyst passers."],
        ["Cryptosporidium", "DISEASE: Severe diarrhea in AIDS; mild disease (watery diarrhea) in immunocompetent hosts. TRANSMISSION: Oocysts in water. DIAGNOSIS: Oocysts on acid-fast stain F (printed micrograph — the acid-fast oocysts; described-in-text only), antigen detection, PCR. TREATMENT: Prevention (eg, filtering); nitazoxanide (severe disease and/or immunocompromised)."],
        ["Trichomonas vaginalis (cross-linked — prints on book 155 under M19's page ownership)", "Vaginitis—foul-smelling, greenish discharge; itching and burning; do not confuse with Gardnerella vaginalis, a gram-variable bacterium associated with bacterial vaginosis. TRANSMISSION: Sexual (cannot exist outside human because it cannot form cysts). DIAGNOSIS: Trophozoites (motile) D (M19's marker, on book 155 — the motile trophozoites on wet mount; described-in-text there) on wet mount; punctate cervical hemorrhages (“strawberry cervix”). TREATMENT: Metronidazole for patient and partner(s) (prophylaxis; check for STI). [Carried verbatim in M19's table block per the page-ownership rule; summarized here for completeness.]"],
      ],
      caption:
        "The table reads with the visual: the three GI rows are the grid; the Trichomonas row is the documented cross-page bridge (its verbatim entry and photo markers live in M19's table block on book 155 — summarized here, not duplicated). The printed photos' pointers (A-F) are carried verbatim; the photographs are described-in-text only.",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "The protocols the water axis implies",
      body: "THE GIARDIA PROTOCOL: fatty, nonbloody, foul-smelling diarrhea in a camper or hiker; cysts in water; multinucleated trophozoites or cysts in stool (± antigen detection, PCR); treat with tinidazole, nitazoxanide, or metronidazole. THE ENTAMOEBA PROTOCOL: BLOODY dysentery with RUQ pain; the anchovy-paste liver abscess; flask-shaped ulcers on colon biopsy; trophozoites with ENGULFED RBCs or cysts with up to 4 nuclei in stool (± serology, antigen testing, PCR); metronidazole — adding paromomycin for the asymptomatic cyst passers. THE CRYPTOSPORIDIUM PROTOCOL: watery diarrhea scaled by the host — mild in the immunocompetent, SEVERE in AIDS; oocysts in water; oocysts on ACID-FAST stain (± antigen detection, PCR); prevent by FILTERING; nitazoxanide only for severe disease and/or the immunocompromised. THE TRICHOMONAS BRIDGE (book 155, M19's ownership): foul-smelling, greenish discharge with itching and burning; sexual transmission (no cysts — cannot exist outside the human); MOTILE trophozoites on wet mount; the strawberry cervix; metronidazole for the patient AND partner(s) with an STI check.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 22-year-old backpacker returns from a trip drinking untreated stream water with 2 weeks of bloating, flatulence, and foul-smelling stools that float; there is no blood. Stool antigen testing is positive; microscopy shows pear-shaped organisms with multiple nuclei.",
        discriminator: "Untreated stream water + fatty nonbloody floating stools + multinucleated trophozoites",
        concept: "Giardia lamblia — the camper's malabsorption",
        answer:
          "Giardiasis: bloating, flatulence, foul-smelling, nonbloody, FATTY diarrhea, often seen in campers and hikers (cysts in water). Diagnosis: multinucleated trophozoites or cysts in stool, antigen detection, PCR. Treatment: tinidazole, nitazoxanide, or metronidazole.",
      },
      {
        stem: "A 30-year-old man presents with 2 weeks of bloody diarrhea and right-upper-quadrant pain; CT shows a 7-cm liver lesion draining 'anchovy paste'; colon biopsy reveals flask-shaped ulcers; the stool shows trophozoites containing red blood cells.",
        discriminator: "Bloody dysentery + anchovy-paste liver abscess + flask-shaped ulcers + trophozoites with engulfed RBCs",
        concept: "Entamoeba histolytica — the erythrocyte-eating ameba",
        answer:
          "Amebiasis: bloody diarrhea (dysentery), liver abscess (the anchovy-paste exudate), RUQ pain; flask-shaped ulcers on colon biopsy histology. Diagnosis: serology, antigen testing, PCR, and/or trophozoites (with engulfed RBCs) or cysts with up to 4 nuclei in stool. Treatment: metronidazole; paromomycin for asymptomatic cyst passers.",
      },
      {
        stem: "A 35-year-old man with AIDS (CD4 60) develops profuse watery diarrhea over 3 weeks; stool studies show acid-fast oocysts; no blood or leukocytes.",
        discriminator: "AIDS + profuse watery diarrhea + acid-fast oocysts",
        concept: "Cryptosporidium — the immune-scaled oocyst disease",
        answer:
          "Cryptosporidium: severe diarrhea in AIDS; mild disease (watery diarrhea) in immunocompetent hosts. Transmission: oocysts in water. Diagnosis: oocysts on acid-fast stain, antigen detection, PCR. Treatment: prevention (eg, filtering); nitazoxanide for severe disease and/or the immunocompromised.",
      },
    ],
    traps: [
      {
        a: "All waterborne protozoa are diagnosed the same way on stool smear",
        b: "The smear axis differs by organism: multinucleated trophozoites/cysts (Giardia) · trophozoites with ENGULFED RBCs or cysts with up to 4 NUCLEI (Entamoeba) · OOCYSTS ON ACID-FAST STAIN (Cryptosporidium)",
        whyConfused: "All three arrive from contaminated water.",
        keyDifference:
          "The stool character picks the row before the smear does: fatty and nonbloody (the malabsorption of campers) = Giardia; bloody dysentery with the anchovy-paste liver abscess and flask-shaped ulcers = Entamoeba; watery scaled by immunity (severe in AIDS) = Cryptosporidium. The acid-fast rule is Cryptosporidium's alone.",
        clue: "Any waterborne-diarrhea question.",
      },
      {
        a: "Entamoeba colitis and ulcerative colitis present identically",
        b: "Entamoeba's colon biopsy shows FLASK-SHAPED ULCERS — and its liver abscess exudes anchovy paste, findings no IBD produces",
        whyConfused: "Both present with bloody diarrhea.",
        keyDifference:
          "The biopsy converts the mimic: flask-shaped ulcers + trophozoites with engulfed RBCs (Entamoeba Eats Erythrocytes) = amebiasis — treat with metronidazole (paromomycin for the asymptomatic cyst passers). The RUQ pain with the anchovy-paste abscess is the dissemination signature.",
        clue: "Any dysentery-with-biopsy question.",
      },
      {
        a: "Trichomonas vaginitis is confused with bacterial vaginosis",
        b: "Trichomonas is the protozoan with MOTILE trophozoites on wet mount and the strawberry cervix (punctate cervical hemorrhages); Gardnerella is the gram-variable BACTERIUM with clue cells, the KOH whiff, and pH >4.5",
        whyConfused: "Both produce foul-smelling vaginal discharge.",
        keyDifference:
          "The wet mount separates them: MOTILE trophozoites = Trichomonas (metronidazole for patient AND partner(s), with an STI check); CLUE CELLS with stippled margins = Gardnerella (M15's page; metronidazole or clindamycin). Trichomonas cannot exist outside the human — it forms no cysts — which is why it is solely sexual.",
        clue: "Any vaginitis-differential question.",
      },
    ],
    pivots: [
      {
        lookAlike: "Fatty nonbloody vs bloody dysentery (the stool axis)",
        differentiator: "Malabsorption floats vs anchovy paste and flask-shaped ulcers",
        correctPath:
          "GIARDIA: bloating, flatulence, foul-smelling, nonbloody, FATTY diarrhea (campers/hikers); multinucleated trophozoites or cysts; tinidazole/nitazoxanide/metronidazole. ENTAMOEBA: bloody diarrhea (dysentery), liver abscess (anchovy paste), RUQ pain; flask-shaped ulcers on biopsy; trophozoites with engulfed RBCs or cysts with up to 4 nuclei; metronidazole + paromomycin for asymptomatic cyst passers.",
      },
      {
        lookAlike: "Mild vs severe Cryptosporidium (the immune split)",
        differentiator: "Immunocompetent watery vs AIDS-severe",
        correctPath:
          "MILD (immunocompetent): watery diarrhea, self-limited — prevention by filtering. SEVERE (AIDS and/or immunocompromised): profuse watery diarrhea; oocysts on acid-fast stain; nitazoxanide for severe disease. The same oocysts-in-water transmission, scaled by the host.",
      },
    ],
    miniCase: {
      vignette:
        "A 26-year-old woman returns from a 2-week camping trip in the Rockies during which she drank untreated stream water. For 10 days she has had bloating, crampy abdominal pain, and foul-smelling stools that are bulky, greasy, and float; she reports no blood in the stool and no fever. She has lost 4 lb. Stool studies are negative for leukocytes; a stool antigen test is sent; microscopy of a concentrated stool sample shows pear-shaped flagellated organisms with two nuclei.",
      question:
        "Which of the following is the most likely causative organism?",
      options: [
        {
          label: "A",
          text: "Giardia lamblia — multinucleated trophozoites or cysts in stool",
          correct: true,
          why: "Correct. The untreated stream water (cysts in water), the FATTY, NONBLOODY, foul-smelling floating stools of a camper/hiker, the absence of blood and leukocytes, and the pear-shaped flagellated organisms on microscopy — Giardia's giardiasis (bloating, flatulence, malabsorption). Treatment: tinidazole, nitazoxanide, or metronidazole.",
        },
        {
          label: "B",
          text: "Entamoeba histolytica — trophozoites with engulfed red blood cells",
          why: "Entamoeba is the waterborne CIST former, but its disease is BLOODY dysentery with the anchovy-paste liver abscess and flask-shaped ulcers on biopsy — not fatty floating stools without blood. The distractor swaps the stool axis's other end.",
        },
        {
          label: "C",
          text: "Cryptosporidium — oocysts on acid-fast stain",
          why: "Cryptosporidium is the OOCYST organism (acid-fast on smear), causing watery diarrhea scaled by the host's immunity. The fatty malabsorption picture with two-nucleated flagellates on conventional microscopy does not fit — and the acid-fast oocyst rule belongs to a different row.",
        },
        {
          label: "D",
          text: "Trichomonas vaginalis — motile trophozoites on wet mount",
          why: "Trichomonas is the urogenital protozoan of the strawberry cervix (book 155, M19's ownership) — sexually transmitted, forming no cysts. The distractor imports the urogenital half of the title into the GI water axis.",
        },
        {
          label: "E",
          text: "Gardnerella vaginalis — clue cells with stippled margins",
          why: "Gardnerella is the gram-variable BACTERIUM of bacterial vaginosis (M15's page) — the KOH whiff and pH >4.5 organism. It produces no diarrheal illness at all; the distractor crosses kingdoms and organ systems.",
        },
      ],
      reasoning:
        "The vignette stacks Giardia's identifiers: the untreated stream water (cysts in water), the camper context, the bulky greasy FLOATING stools without blood or leukocytes (the malabsorption picture), and the pear-shaped flagellated trophozoites. Each distractor takes another row on the axes — Entamoeba's bloody dysentery, Cryptosporidium's acid-fast oocysts, Trichomonas's urogenital wet mount, or Gardnerella's bacterial vaginosis — none of which matches the fatty, nonbloody, waterborne malabsorption.",
      },
    },
  mnemonics: [
    {
      code: "“Cysts ride the water; oocysts ride it acid-fast.”",
      meaning:
        "KYP's key for the water axis: Giardia and Entamoeba transmit as CYSTS in water; Cryptosporidium transmits as OOCYSTS in water — and shows on the stool smear only with the ACID-FAST stain. FA's printed Ghirardelli gloss (fatty stools of Giardia) is verification-only and stays in the table block.",
      memorizes: "The transmission and smear axes",
      whenToUse: "Any waterborne-protozoa question.",
      clinical: "The stain follows the form: cysts on concentration, oocysts on acid-fast.",
    },
    {
      code: "“The stool names the row: fatty and floating for the camper, bloody with anchovy paste for the liver, and watery scaled by the immune system.”",
      meaning:
        "KYP's key for the stool axis: FATTY NONBLOODY (bloating, flatulence, foul smell; campers/hikers) = Giardia; BLOODY dysentery with the anchovy-paste liver abscess, RUQ pain, and flask-shaped ulcers = Entamoeba (trophozoites with engulfed RBCs; cysts with up to 4 nuclei; metronidazole + paromomycin for asymptomatic cyst passers); watery, mild in the immunocompetent to severe in AIDS = Cryptosporidium (prevention by filtering; nitazoxanide when severe).",
      memorizes: "The three GI protozoa",
      whenToUse: "Any diarrheal-character question.",
      clinical: "Ask about blood, fat, and the host's immunity — in that order.",
    },
    {
      code: "“The protozoan that left the water: no cysts, no outside world — the strawberry cervix rides the sexual axis.”",
      meaning:
        "KYP's key for the urogenital cross-link: Trichomonas vaginalis cannot form cysts and cannot exist outside the human — so it transmits SEXUALLY, presenting as vaginitis (foul-smelling, greenish discharge; itching and burning), diagnosed by MOTILE trophozoites on wet mount with punctate cervical hemorrhages (the strawberry cervix), and treated with metronidazole for the patient AND partner(s) (with an STI check). Its printed entry lives on book 155 under M19's page ownership; distinguish it from Gardnerella (the gram-variable bacterium with clue cells).",
      memorizes: "The urogenital exception",
      whenToUse: "Any Trichomonas or vaginitis-differential question.",
      clinical: "No cysts = no water axis = treat both partners.",
    },
  ],
  rapidReview: {
    s30: [
      "Giardia: fatty NONBLOODY foul-smelling diarrhea (campers/hikers) · cysts in water · multinucleated trophozoites or cysts in stool",
      "Entamoeba: BLOODY dysentery + anchovy-paste liver abscess + flask-shaped ulcers · cysts in water · trophozoites with ENGULFED RBCs",
      "Cryptosporidium: watery diarrhea; severe in AIDS, mild if competent · OOCYSTS in water · oocysts on ACID-FAST stain",
      "Therapy: Giardia tinidazole/nitazoxanide/metronidazole · Entamoeba metronidazole (+ paromomycin for asymptomatic cyst passers) · Crypto prevention/filtering ± nitazoxanide",
      "Trichomonas (book 155, M19 ownership): sexual, no cysts; motile trophozoites; strawberry cervix; metronidazole for patient AND partner(s)",
    ],
    m3: [
      "Giardia diagnosis: multinucleated trophozoites or cysts in stool, antigen detection, PCR",
      "Entamoeba diagnosis: serology, antigen testing, PCR, and/or trophozoites (with engulfed RBCs) or cysts with up to 4 nuclei in stool",
      "Entamoeba histology: flask-shaped ulcers on colon biopsy; liver abscess with the anchovy-paste exudate; RUQ pain",
      "Cryptosporidium: oocysts on acid-fast stain, antigen detection, PCR; prevention (eg, filtering); nitazoxanide (severe and/or immunocompromised)",
      "Trichomonas vs Gardnerella: motile trophozoites + strawberry cervix vs clue cells + whiff + pH >4.5",
    ],
    m10: [
      "The water axis: cysts (Giardia, Entamoeba) vs oocysts (Cryptosporidium) — the acid-fast rule belongs to the oocyst row",
      "The immune axis: Cryptosporidium severe in AIDS / mild watery in the immunocompetent — the host scales the disease",
      "The M18-M19 bridge: Trichomonas prints on book 155 (pdf 177) under M19's page ownership — cross-linked, not duplicated",
      "The photos (6 rasters on book 152): the Giardia trophozoites A and cysts B; the flask-shaped ulcers C; the engulfed-RBC trophozoite D; the 4-nucleus cysts E; the acid-fast oocysts F — all described-in-text only",
      "The urogenital half of the topic title: satisfied by the cross-link (Trichomonas) — no protozoan prints on book 152 beyond the three GI rows",
    ],
  },
  recall: [
    {
      q: "Walk the three GI protozoa on all five columns.",
      a: "GIARDIA LAMBLIA — giardiasis: bloating, flatulence, foul-smelling, nonbloody, fatty diarrhea (campers/hikers); cysts in water; multinucleated trophozoites or cysts in stool, antigen detection, PCR; tinidazole, nitazoxanide, or metronidazole. ENTAMOEBA HISTOLYTICA — amebiasis: bloody diarrhea (dysentery), liver abscess (anchovy paste), RUQ pain, flask-shaped ulcers on colon biopsy; cysts in water; serology, antigen testing, PCR, and/or trophozoites (with engulfed RBCs) or cysts with up to 4 nuclei; metronidazole, paromomycin for asymptomatic cyst passers. CRYPTOSPORIDIUM — severe diarrhea in AIDS, mild watery in the immunocompetent; oocysts in water; oocysts on acid-fast stain, antigen detection, PCR; prevention (filtering), nitazoxanide for severe/immunocompromised.",
    },
    {
      q: "Which smear finding belongs to which organism?",
      a: "Multinucleated trophozoites or cysts = Giardia. Trophozoites with ENGULFED RBCs in the cytoplasm, or cysts with up to 4 nuclei = Entamoeba (Entamoeba Eats Erythrocytes). Oocysts on ACID-FAST stain = Cryptosporidium.",
    },
    {
      q: "How does the host change Cryptosporidium disease and therapy?",
      a: "Immunocompetent: mild disease (watery diarrhea) — prevention (eg, filtering) is the management. AIDS/immunocompromised: SEVERE diarrhea — nitazoxanide is added for severe disease. The same oocysts-in-water transmission, scaled by immunity.",
    },
    {
      q: "Where does Trichomonas print, and how is it diagnosed and treated?",
      a: "It prints on book 155 (pdf 177) under M19's page ownership — cross-linked from this note. Vaginitis: foul-smelling, greenish discharge with itching and burning; sexual transmission (it cannot form cysts, so it cannot exist outside the human); diagnosis by MOTILE trophozoites on wet mount with punctate cervical hemorrhages (the strawberry cervix); metronidazole for the patient AND partner(s) (prophylaxis; check for STI). Do not confuse with Gardnerella vaginalis, the gram-variable bacterium of bacterial vaginosis.",
    },
    {
      q: "Which liver finding belongs to Entamoeba, and what does the colon biopsy show?",
      a: "The liver abscess with the “anchovy paste” exudate, with RUQ pain. The colon biopsy histology shows flask-shaped ulcers; the stool shows trophozoites with engulfed RBCs or cysts with up to 4 nuclei. Treatment: metronidazole; paromomycin for asymptomatic cyst passers.",
    },
  ],
  related: [
    {
      title: "Opportunistic Fungi: Aspergillus, Cryptococcus, Candida, Mucor",
      topicId: "opportunistic-fungi",
      note: "M17's host-defect axis returns: Cryptosporidium's severe-in-AIDS split is the protozoan counterpart of the fungal block's immune-context pair.",
    },
    {
      title: "Intracellular & Vector-Borne Bacteria: Chlamydia, Rickettsia, Mycoplasma",
      topicId: "intracellular-bacteria",
      note: "M15's Gardnerella row (the gram-variable bacterium with clue cells, the KOH whiff, pH >4.5) is the standing contrast for this note's Trichomonas cross-link — the vaginitis differential across kingdoms.",
    },
    {
      title: "Exotoxins vs Endotoxins",
      topicId: "exotoxins-endotoxins",
      note: "M8's axis: the waterborne protozoa run the non-toxigenic disease logic — the stool character, not a toxin, names the organism; the contrast with the toxin-driven enterics of M13 is the exam's differential engine.",
    },
  ],
  crossLinks: [
    {
      subject: "Gastroenterology (Malabsorption)",
      connection: "Giardia's fatty, nonbloody, floating stools are the malabsorption anchor — the small-bowel villous disease that pairs with celiac and pancreatic insufficiency in the steatorrhea differential.",
    },
    {
      subject: "Infectious Disease (AIDS opportunists)",
      connection: "Cryptosporidium's severe-in-AIDS rule joins the M15/M17 immune-context set: the CD4 count scales the disease and picks the therapy (nitazoxanide for severe disease and/or the immunocompromised).",
    },
    {
      subject: "Gynecology (Vaginitis)",
      connection: "The Trichomonas cross-link (book 155): the strawberry cervix with punctate cervical hemorrhages and motile trophozoites on wet mount — metronidazole for patient AND partner(s), distinguished from Gardnerella's clue cells.",
    },
    {
      subject: "Hepatology (Liver abscess)",
      connection: "Entamoeba's anchovy-paste abscess with RUQ pain is the microbiology anchor for the amebic-versus-pyogenic abscess differential — the flask-shaped ulcer finding tying it to the colon.",
    },
  ],
};
