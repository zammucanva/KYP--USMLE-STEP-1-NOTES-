import type { KypUsMLENote } from "../types";

// Microbiology — PARASITOLOGY banner (M-batch 20). Source: pdf 178 / book 156
//  (Nematodes [roundworms] with the Intestinal/Tissue split rails; the
//   source's own banner typo 'MICROCIOLOGY' prints on this page).
//  The Ingested/Cutaneous/Bites route rails print on book 155 (M19's page)
//  — cross-linked from there.

export const helminthsNematodes: KypUsMLENote = {
  id: "helminths-nematodes",
  title: "Nematodes: The Roundworms",
  subtitle:
    "The roundworms organized by THE ROUTE MAP. THE INTESTINAL SET: ENTEROBIUS VERMICULARIS (pinworm) — anal pruritus, worse at night (eggs A visualized via tape test); most common in children aged 5-10; fecal-oral; bendazoles, pyrantel pamoate. ASCARIS LUMBRICOIDES (giant roundworm) — obstruction at the ileocecal valve, biliary obstruction, intestinal perforation; migrates from nose/mouth; larvae to alveoli → LÖEFFLER SYNDROME (pulmonary eosinophilia); fecal-oral with knobby-coated, oval eggs in feces B; bendazoles. STRONGYLOIDES STERCORALIS (threadworm) — GI (duodenitis), pulmonary (dry cough, hemoptysis), cutaneous (pruritus) symptoms; HYPERINFECTION SYNDROME from accelerated autoinfection in the immunocompromised; larvae in soil penetrate skin, rhabditiform larvae in feces; ivermectin or bendazoles. ANCYLOSTOMA spp + NECATOR AMERICANUS (hookworms) — microcytic anemia by sucking blood from the intestinal wall; CUTANEOUS LARVA MIGRANS (pruritic, serpiginous rash C); larvae penetrate skin from barefoot beaches/soil; bendazoles or pyrantel pamoate. TRICHINELLA SPIRALIS — larvae enter bloodstream, encyst in striated muscle D → MYOSITIS; trichinosis: fever, vomiting, nausea, periorbital edema, myalgia; undercooked meat (especially pork); bendazoles. TRICHURIS TRICHIURA (whipworm) — often asymptomatic; loose stools, anemia, RECTAL PROLAPSE in children; fecal-oral; bendazoles. TOXOCARA CANIS — VISCERAL LARVA MIGRANS: migration into blood → inflammation of liver, eyes (visual impairment), CNS (seizures, coma), heart (myocarditis); often asymptomatic; fecal-oral; bendazoles. THE TISSUE SET: ONCHOCERCA VOLVULUS — black skin nodules, RIVER BLINDNESS (“black sight”); female black fly; ivermectin. LOA LOA — swelling in skin, worm in conjunctiva; deer fly, horse fly, mango fly; diethylcarbamazine. WUCHERERIA BANCROFTI + BRUGIA MALAYI — LYMPHATIC FILARIASIS (elephantiasis): worms invade lymph nodes → inflammation → LYMPHEDEMA E, onset after 9 mo-1 yr; female mosquito; diethylcarbamazine.",
  subject: "Microbiology",
  system: "Section II · High-Yield General Principles — Parasitology",
  pilotCategory:
    "Parasitology — the 11 roundworms on the Intestinal/Tissue split with the route rails (Ingested/Cutaneous/Bites — cross-linked from M19's book-155 box); the eosinophilia/Löeffler axis; the hyperinfection syndrome of Strongyloides in the immunocompromised; the anemia pair (hookworm microcytic, whipworm); and the therapy spine (bendazoles intestinal / ivermectin Strongyloides-Onchocerca / diethylcarbamazine Loa-Wuchereria)",
  difficulty: 2,
  readTime: 12,
  sourceRef: "First Aid 2026, Part 1 pp. 156–156 (Nematodes [roundworms]; route rails on p. 155 cross-linked)",
  tags: [
    "nematodes",
    "roundworms",
    "Enterobius vermicularis",
    "pinworm",
    "anal pruritus",
    "tape test",
    "Ascaris lumbricoides",
    "giant roundworm",
    "Löeffler syndrome",
    "pulmonary eosinophilia",
    "ileocecal obstruction",
    "biliary obstruction",
    "Strongyloides stercoralis",
    "threadworm",
    "hyperinfection syndrome",
    "autoinfection",
    "rhabditiform larvae",
    "Ancylostoma",
    "Necator americanus",
    "hookworms",
    "microcytic anemia",
    "cutaneous larva migrans",
    "Trichinella spiralis",
    "trichinosis",
    "periorbital edema",
    "myositis",
    "striated muscle",
    "undercooked pork",
    "Trichuris trichiura",
    "whipworm",
    "rectal prolapse",
    "Toxocara canis",
    "visceral larva migrans",
    "Onchocerca volvulus",
    "river blindness",
    "black fly",
    "Loa loa",
    "worm in conjunctiva",
    "deer fly",
    "Wuchereria bancrofti",
    "Brugia malayi",
    "lymphatic filariasis",
    "elephantiasis",
    "lymphedema",
    "bendazoles",
    "pyrantel pamoate",
    "ivermectin",
    "diethylcarbamazine",
  ],
  core: {
    what: "THE 11 ROUNDWORMS ON THE INTESTINAL/TISSUE SPLIT. INTESTINAL: Enterobius vermicularis (pinworm) — anal pruritus worse at night, eggs A visualized via tape test, most common in children aged 5-10, fecal-oral, bendazoles or pyrantel pamoate. Ascaris lumbricoides (giant roundworm) — obstruction at the ileocecal valve, biliary obstruction, intestinal perforation, migration from nose/mouth; the larvae's migration to the alveoli → Löeffler syndrome (pulmonary eosinophilia); knobby-coated oval eggs in feces B; bendazoles. Strongyloides stercoralis (threadworm) — GI, pulmonary, and cutaneous symptoms; hyperinfection syndrome from accelerated autoinfection in the immunocompromised; rhabditiform larvae in feces; ivermectin or bendazoles. Ancylostoma spp + Necator americanus (hookworms) — microcytic anemia by sucking blood from the intestinal wall; cutaneous larva migrans (pruritic, serpiginous rash C) from barefoot skin penetration; bendazoles or pyrantel pamoate. Trichinella spiralis — larvae enter the bloodstream and encyst in striated muscle D → myositis; trichinosis with fever, vomiting, nausea, periorbital edema, myalgia; undercooked meat (especially pork); bendazoles. Trichuris trichiura (whipworm) — often asymptomatic; loose stools, anemia, rectal prolapse in children; bendazoles. Toxocara canis — visceral larva migrans: migration into blood → inflammation of liver, eyes (visual impairment), CNS (seizures, coma), heart (myocarditis); often asymptomatic; bendazoles. TISSUE: Onchocerca volvulus — black skin nodules, river blindness (“black sight”); female black fly; ivermectin. Loa loa — swelling in skin, worm in conjunctiva; deer fly, horse fly, mango fly; diethylcarbamazine. Wuchereria bancrofti + Brugia malayi — lymphatic filariasis (elephantiasis): worms invade lymph nodes → inflammation → lymphedema E, onset after 9 mo-1 yr; female mosquito; diethylcarbamazine.",
    why: "This block carries three exam institutions. The first is THE ROUTE MAP: the Ingested/Cutaneous/Bites rails (printed on book 155, cross-linked from M19) — the intestinal set splits into the fecal-oral organisms (Enterobius, Ascaris, Trichuris, Toxocara; Trichinella by undercooked pork) and the skin-penetration organisms (Strongyloides, the hookworms); the tissue set rides the flies and mosquitoes (black fly, deer/horse/mango fly, female mosquito). The second is THE SIGNATURE AXIS: each roundworm carries one exam-defining finding — the pinworm's nocturnal anal pruritus with the tape test; Ascaris's Löeffler syndrome (pulmonary eosinophilia from larval migration) with the knobby oval eggs; Strongyloides' hyperinfection syndrome in the immunocompromised; the hookworms' microcytic anemia and cutaneous larva migrans; Trichinella's periorbital edema with myositis; the whipworm's rectal prolapse; Toxocara's visceral larva migrans; Onchocerca's river blindness; the Loa loa worm in the conjunctiva; and the filarial elephantiasis. The third is THE THERAPY SPINE: bendazoles for the intestinal set, ivermectin for Strongyloides and Onchocerca, diethylcarbamazine for Loa loa and the Wuchereria/Brugia pair.",
    keyIdea: "Run the route, the signature, and the drug. INGESTED (fecal-oral): nocturnal anal pruritus + tape test = Enterobius (bendazoles/pyrantel); Löeffler syndrome + knobby oval eggs = Ascaris (bendazoles); rectal prolapse in a child = Trichuris (bendazoles); visceral larva migrans (liver/eyes/CNS/heart) = Toxocara (bendazoles); periorbital edema + myositis after undercooked pork = Trichinella (bendazoles). CUTANEOUS (skin penetration): hyperinfection in the immunocompromised + rhabditiform larvae in feces = Strongyloides (IVERMECTIN or bendazoles); microcytic anemia + serpiginous rash after barefoot beach = hookworms (bendazoles/pyrantel). BITES (flies/mosquito): river blindness + black skin nodules = Onchocerca (IVERMECTIN); worm in conjunctiva + skin swelling = Loa loa (diethylcarbamazine); elephantiasis with lymphedema onset 9 mo-1 yr = Wuchereria/Brugia (diethylcarbamazine).",
  },
  mechanisms: [
    {
      id: "nematode-route-axis",
      title: "The route map: ingested, cutaneous, and the fly-borne tissue set",
      context: "The Intestinal/Tissue split read through the cross-linked route rails",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A roundworm exposure — a food, a soil, a beach, or a fly/mosquito",
            sublabel: "Input — the exposure opening.",
            variant: "input",
          },
          {
            id: "s1",
            label: "THE INGESTED RAIL: fecal-oral — Enterobius (tape test), Ascaris (knobby oval eggs B; Löeffler syndrome from larval migration to alveoli), Trichuris (rectal prolapse), Toxocara (visceral larva migrans); undercooked pork — Trichinella (encystment in striated muscle D)",
            sublabel: "Process — the intestinal set's food routes.",
            variant: "process",
          },
          {
            id: "s2",
            label: "THE CUTANEOUS RAIL: larvae in soil penetrate skin — Strongyloides (rhabditiform larvae in feces; hyperinfection syndrome by accelerated autoinfection in the immunocompromised); the hookworms Ancylostoma/Necator (microcytic anemia from blood-sucking; cutaneous larva migrans C from barefoot beaches)",
            sublabel: "Process — the skin-penetration pair.",
            variant: "process",
          },
          {
            id: "s3",
            label: "THE BITES RAIL (the tissue set): female black fly — Onchocerca (river blindness; black skin nodules); deer/horse/mango fly — Loa loa (worm in conjunctiva; skin swelling); female mosquito — Wuchereria bancrofti + Brugia malayi (lymphatic filariasis: lymph nodes → inflammation → lymphedema E, onset 9 mo-1 yr)",
            sublabel: "Process — the fly- and mosquito-borne set.",
            variant: "process",
          },
          {
            id: "o1",
            label: "OUTPUT — the therapy spine by route: bendazoles for the intestinal set (pyrantel pamoate as the alternative for Enterobius and the hookworms); IVERMECTIN for Strongyloides and Onchocerca; DIETHYLCARBAMAZINE for Loa loa and the Wuchereria/Brugia pair",
            sublabel: "Output — three drugs cover all eleven.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "ingested" },
          { from: "s1", to: "s2", label: "cutaneous" },
          { from: "s2", to: "s3", label: "bites" },
          { from: "s3", to: "o1", label: "therapy spine" },
        ],
        caption:
          "The route map converts the exposure into the organism and then into the drug. The ingested rail: the pinworm's nocturnal pruritus answers to the tape test; Ascaris answers to the knobby-coated oval egg and the Löeffler syndrome (the pulmonary eosinophilia of larval migration) with its ileocecal/biliary obstruction risk; Trichinella answers to undercooked pork with periorbital edema and myositis from striated-muscle encystment; Toxocara answers to visceral larva migrans. The cutaneous rail: the soil-penetrating pair — Strongyloides (whose rhabditiform larvae in feces and whose hyperinfection syndrome in the immunocompromised make it the roundworm that kills) and the hookworms (microcytic anemia from blood-sucking plus the serpiginous cutaneous larva migrans). The bites rail: the tissue set — river blindness from the black fly, the conjunctival worm from the deer fly, and the elephantiasis of the mosquito-borne filarial pair whose lymphedema begins 9 months to a year after infection. The therapy spine then covers all eleven organisms with three drugs: bendazoles (± pyrantel), ivermectin, and diethylcarbamazine.",
      },
    },
    {
      id: "hyperinfection-axis",
      title: "The hyperinfection axis: autoinfection, eosinophilia, and the immunocompromised host",
      context: "Strongyloides' syndrome and the block's host-dependent severity",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "The immunocompromised host meets a soil-penetrating larva",
            sublabel: "Input — the host axis.",
            variant: "input",
          },
          {
            id: "s1",
            label: "STRONGYLOIDES' AUTOINFECTION CYCLE: the rhabditiform larvae in feces; in the immunocompromised, ACCELERATED AUTOINFECTION → HYPERINFECTION SYNDROME — the GI (duodenitis), pulmonary (dry cough, hemoptysis), and cutaneous (pruritus) symptoms amplifying together",
            sublabel: "Process — the one roundworm that autoinfects.",
            variant: "process",
          },
          {
            id: "s2",
            label: "THE LARVAL-MIGRATION PHENOMENA: Ascaris's larvae to the alveoli → LÖEFFLER SYNDROME (pulmonary eosinophilia); the hookworms' larvae through the skin → CUTANEOUS LARVA MIGRANS (the pruritic serpiginous rash); Trichinella's larvae through the blood into STRIATED MUSCLE → myositis with periorbital edema; Toxocara's visceral larva migrans into liver, eyes, CNS, heart",
            sublabel: "Process — where the larvae travel names the syndrome.",
            variant: "process",
          },
          {
            id: "o1",
            label: "OUTPUT — the therapy spine adapted to the host: ivermectin (or bendazoles) for Strongyloides — the hyperinfection syndrome is the reason it must not be missed; bendazoles for the rest of the intestinal set; diethylcarbamazine for the filarial pair",
            sublabel: "Output — the immunocompromised host changes the stakes.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "autoinfection" },
          { from: "s1", to: "s2", label: "larval migration" },
          { from: "s2", to: "o1", label: "host-adapted therapy" },
        ],
        caption:
          "The hyperinfection axis is the block's host-dependent engine. Strongyloides is the roundworm that autoinfects: the rhabditiform larvae complete the cycle inside the same host, and in the immunocompromised the acceleration produces the hyperinfection syndrome — duodenitis, dry cough with hemoptysis, and pruritus amplifying together. That is why Strongyloides gets ivermectin (or bendazoles) and why the rhabditiform larva in feces is its diagnostic form. The larval-migration phenomena then name the other syndromes: Ascaris's alveolar migration produces the Löeffler syndrome (the pulmonary eosinophilia that pairs with blood eosinophilia in the exam), the hookworms' dermal migration produces the serpiginous cutaneous larva migrans, Trichinella's bloodstream route ends in striated-muscle encystment with myositis and periorbital edema, and Toxocara's visceral larva migrans runs through liver, eyes (visual impairment), CNS (seizures, coma), and heart (myocarditis) — often while the patient stays asymptomatic. The output adapts the therapy spine to the host: the immunocompromised state is the reason the hyperinfection syndrome must be anticipated, not discovered.",
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "nematode-route-map",
      title: "The roundworms — the route map (Intestinal/Tissue split)",
      caption:
        "An original KYP redraw of the source's Nematodes (roundworms) table (book 156): the Intestinal set (7 organisms) and the Tissue set (3 rows), with the cross-linked route-rails anchors strip (Ingested/Cutaneous/Bites — printed on book 155 under M19's ownership).",
      notice:
        "The printed photos (A the Enterobius eggs of the tape test; B the knobby-coated oval Ascaris eggs; C the hookworms' cutaneous larva migrans; D the Trichinella cysts in striated muscle; E the filarial lymphedema) are raster — COPYRIGHTED, described-in-text only. The source's own banner typo prints on this page ('MICROCIOLOGY—PARASITOLOGY'). The Intestinal/Tissue split rails emit as standalone lines (22 and 140). FA's printed glosses stay in the table block only.",
    },
    {
      kind: "table",
      title: "The roundworms — verbatim",
      intro: "The source's table (book 156), verbatim.",
      columns: ["Organism", "Content (verbatim)"],
      rows: [
        ["Enterobius vermicularis (pinworm)", "DISEASE: Causes anal pruritus, worse at night (eggs A visualized via tape test — printed micrograph; described-in-text only). Most common in children aged 5-10. TRANSMISSION: Fecal-oral. TREATMENT: Bendazoles, pyrantel pamoate."],
        ["Ascaris lumbricoides (giant roundworm)", "DISEASE: May cause obstruction at ileocecal valve, biliary obstruction, intestinal perforation, migrates from nose/mouth. Migration of larvae to alveoli → Löeffler syndrome (pulmonary eosinophilia). TRANSMISSION: Fecal-oral; knobby-coated, oval eggs seen in feces under microscope B (printed micrograph; described-in-text only). TREATMENT: Bendazoles."],
        ["Strongyloides stercoralis (threadworm)", "DISEASE: GI (eg, duodenitis), pulmonary (eg, dry cough, hemoptysis), and cutaneous (eg, pruritus) symptoms. Hyperinfection syndrome can be caused by accelerated autoinfection in the immunocompromised. TRANSMISSION: Larvae in soil penetrate skin; rhabditiform larvae seen in feces under microscope. TREATMENT: Ivermectin or bendazoles."],
        ["Ancylostoma spp, Necator americanus (hookworms)", "DISEASE: Cause microcytic anemia by sucking blood from intestinal wall. Cutaneous larva migrans—pruritic, serpiginous rash C (printed photo; described-in-text only). TRANSMISSION: Larvae penetrate skin from walking barefoot on contaminated beach/soil. TREATMENT: Bendazoles or pyrantel pamoate."],
        ["Trichinella spiralis", "DISEASE: Larvae enter bloodstream, encyst in striated muscle D (printed micrograph; described-in-text only) → myositis. Trichinosis—fever, vomiting, nausea, periorbital edema, myalgia. TRANSMISSION: Undercooked meat (especially pork); fecal-oral (less likely). TREATMENT: Bendazoles."],
        ["Trichuris trichiura (whipworm)", "DISEASE: Often asymptomatic; loose stools, anemia, rectal prolapse in children. TRANSMISSION: Fecal-oral. TREATMENT: Bendazoles."],
        ["Toxocara canis", "DISEASE: Visceral larva migrans—migration into blood → inflammation of liver, eyes (visual impairment), CNS (seizures, coma), heart (myocarditis). Patients often asymptomatic. TRANSMISSION: Fecal-oral. TREATMENT: Bendazoles."],
        ["Onchocerca volvulus", "DISEASE: Black skin nodules, river blindness (“black sight”). TRANSMISSION: Female black fly. TREATMENT: Ivermectin (ivermectin for river blindness — FA gloss, printed)."],
        ["Loa loa", "DISEASE: Swelling in skin, worm in conjunctiva. TRANSMISSION: Deer fly, horse fly, mango fly. TREATMENT: Diethylcarbamazine."],
        ["Wuchereria bancrofti, Brugia malayi", "DISEASE: Lymphatic filariasis (elephantiasis)—worms invade lymph nodes → inflammation → lymphedema E (printed photo; described-in-text only); symptom onset after 9 mo-1 yr. TRANSMISSION: Female mosquito. TREATMENT: Diethylcarbamazine."],
        ["The route rails (cross-linked — they print on book 155 under M19's page ownership)", "Ingested—Enterobius, Ascaris, Toxocara, Trichinella, Trichuris. Cutaneous—Strongyloides, Ancylostoma, Necator. Bites—Loa loa, Onchocerca volvulus, Wuchereria bancrofti. (You'll get sick if you EATTT these! These get into your feet from the SANd. Lay LOW to avoid getting bitten. — FA mnemonics, printed.) [Carried verbatim in M19's table block per page ownership; cross-linked here.]"],
      ],
      caption:
        "The table reads with the visual: the Intestinal and Tissue rows are the two panels; the route rails row is the cross-page bridge (the rails print on book 155 under M19's ownership — carried verbatim there, cross-linked here). The Intestinal/Tissue split rails emit as standalone lines (22/140) in the text layer; the source's own banner typo 'MICROCIOLOGY' prints at line 6.",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "The protocols the route map implies",
      body: "THE PINWORM PROTOCOL: nocturnal anal pruritus in a child aged 5-10; the TAPE TEST visualizes the eggs A; treat with bendazoles or pyrantel pamoate. THE ASCARIS PROTOCOL: ileocecal/biliary obstruction with the Löeffler syndrome (pulmonary eosinophilia from larval migration); the knobby-coated oval egg in feces; bendazoles. THE STRONGYLOIDES PROTOCOL: the soil-penetrating skin route; rhabditiform larvae in feces; GI + pulmonary + cutaneous symptoms; in the immunocompromised expect the HYPERINFECTION SYNDROME (accelerated autoinfection) — treat with IVERMECTIN (or bendazoles). THE HOOKWORM PROTOCOL: microcytic anemia from blood-sucking plus the serpiginous cutaneous larva migrans after barefoot beach exposure; bendazoles or pyrantel pamoate. THE TRICHINELLA PROTOCOL: undercooked pork; periorbital edema with myositis (encystment in striated muscle); bendazoles. THE WHIPWORM PROTOCOL: rectal prolapse in a child with loose stools and anemia; bendazoles. THE TOXOCARA PROTOCOL: visceral larva migrans — liver, eyes (visual impairment), CNS (seizures, coma), heart (myocarditis), often asymptomatic; bendazoles. THE TISSUE PROTOCOLS: river blindness + black skin nodules from the black fly → ivermectin; the conjunctival worm + skin swelling from the deer/horse/mango fly → diethylcarbamazine; the elephantiasis of the mosquito-borne pair (lymphedema onset 9 mo-1 yr) → diethylcarbamazine.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 7-year-old girl has 3 weeks of perianal itching that is worse at night and wakes her from sleep; the parents report no diarrhea. A transparent tape pressed to the perianal skin in the morning shows colorless ovals under the microscope.",
        discriminator: "Nocturnal perianal pruritus + tape-test eggs + child aged 5-10",
        concept: "Enterobius vermicularis — the pinworm",
        answer:
          "Pinworm: anal pruritus, worse at night (eggs visualized via the tape test); most common in children aged 5-10. Transmission fecal-oral. Treatment: bendazoles or pyrantel pamoate.",
      },
      {
        stem: "A 54-year-old man on high-dose prednisone for a flare of polymyositis develops bloody diarrhea, dry cough with hemoptysis, and a spreading urticarial rash; stool microscopy shows rhabditiform larvae; cultures grow enteric gram-negative rods.",
        discriminator: "Immunocompromised + GI/pulmonary/cutaneous triad + rhabditiform larvae in feces",
        concept: "Strongyloides hyperinfection syndrome",
        answer:
          "Strongyloides stercoralis: larvae in soil penetrate skin; rhabditiform larvae in feces. In the immunocompromised, accelerated autoinfection causes the hyperinfection syndrome — GI (duodenitis), pulmonary (dry cough, hemoptysis), and cutaneous (pruritus) symptoms together. Treatment: ivermectin or bendazoles.",
      },
      {
        stem: "A 31-year-old man presents with 5 days of fever, vomiting, severe myalgia, and soft periorbital swelling after an outdoor pig roast where the pork was eaten pink; creatine kinase is elevated and biopsy of a calf muscle shows larvae encysted within fibers.",
        discriminator: "Undercooked pork + periorbital edema + myositis with encysted larvae in striated muscle",
        concept: "Trichinella spiralis — trichinosis",
        answer:
          "Trichinella spiralis: larvae enter the bloodstream and encyst in striated muscle → myositis; trichinosis presents with fever, vomiting, nausea, periorbital edema, and myalgia. Transmission: undercooked meat (especially pork). Treatment: bendazoles.",
      },
    ],
    traps: [
      {
        a: "Nematodes are diagnosed by serology alone",
        b: "The diagnostic forms are morphological: TAPE-TEST EGGS (Enterobius); KNOBBY-COATED OVAL EGGS in feces (Ascaris); RHABDITIFORM LARVAE in feces (Strongyloides); ENCYSTED LARVAE IN STRIATED MUSCLE (Trichinella)",
        whyConfused: "The protozoa blocks lean on serology and PCR.",
        keyDifference:
          "The roundworm block is a microscopy block: the egg or the larva names the organism — the pinworm's tape test, Ascaris's knobby oval egg, Strongyloides' rhabditiform larva, Trichinella's encysted muscle larva. Therapy then follows the route spine: bendazoles (intestinal), ivermectin (Strongyloides/Onchocerca), diethylcarbamazine (Loa/Wuchereria).",
        clue: "Any worm-identification question.",
      },
      {
        a: "Periorbital edema and eosinophilia always mean Chagas disease",
        b: "TRICHINELLA causes periorbital edema with MYOSITIS (larvae encysted in striated muscle) after undercooked pork; the Romaña sign of T. cruzi is UNILATERAL periorbital swelling from the kissing bug's fecal transmission",
        whyConfused: "Both are periorbital swellings with parasitemia.",
        keyDifference:
          "The muscle tells them apart: Trichinella's myalgia with elevated CK and encysted larvae on muscle biopsy (bendazoles) vs cruzi's megacolon/megaesophagus with the dilated cardiomyopathy (benznidazole — M19's row). The food history (undercooked pork vs the kissing bug) completes the split.",
        clue: "Any periorbital-edema question.",
      },
      {
        a: "Microcytic anemia in a barefoot traveler is hookworm disease until proven otherwise — but all the intestinal worms cause it",
        b: "The hookworms (Ancylostoma, Necator) cause microcytic anemia by SUCKING BLOOD from the intestinal wall; the whipworm causes anemia with RECTAL PROLAPSE; Ascaris obstructs (ileocecal, biliary) with the Löeffler syndrome",
        whyConfused: "All are intestinal roundworms of warm climates.",
        keyDifference:
          "The anemia belongs to the hookworms specifically (the blood-sucking mechanism), and its partner sign is the serpiginous CUTANEOUS LARVA MIGRANS from skin penetration. The whipworm's signature is the pediatric rectal prolapse; Ascaris's is the obstruction + pulmonary eosinophilia; and the pinworm's is the nocturnal pruritus with the tape test.",
        clue: "Any worm-with-anemia question.",
      },
    ],
    pivots: [
      {
        lookAlike: "The skin-penetration pair (Strongyloides vs the hookworms)",
        differentiator: "Rhabditiform larvae + hyperinfection vs microcytic anemia + cutaneous larva migrans",
        correctPath:
          "STRONGYLOIDES: soil larvae penetrate skin; RHABDITIFORM LARVAE in feces; GI/pulmonary/cutaneous symptoms; hyperinfection syndrome in the immunocompromised; IVERMECTIN (or bendazoles). HOOKWORMS (Ancylostoma, Necator): skin penetration from barefoot beaches/soil; microcytic anemia from blood-sucking; the serpiginous cutaneous larva migrans; bendazoles or pyrantel pamoate.",
      },
      {
        lookAlike: "The fly-borne tissue pair (Onchocerca vs Loa loa)",
        differentiator: "River blindness vs the conjunctival worm",
        correctPath:
          "ONCHOCERCA VOLVULUS: female black fly; black skin nodules, river blindness (“black sight”); IVERMECTIN. LOA LOA: deer/horse/mango fly; swelling in skin, worm in conjunctiva; DIETHYLCARBAMAZINE. WUCHERERIA/BRUGIA (female mosquito): the elephantiasis lymphedema (onset 9 mo-1 yr); DIETHYLCARBAMAZINE.",
      },
    ],
    miniCase: {
      vignette:
        "A 6-year-old girl is brought in for 3 weeks of perianal itching that is much worse at night and briefly wakes her; her parents note occasional sleepwalking to scratch and report no diarrhea, no weight loss, and no sick contacts. She attends day school and has a 4-year-old brother with the same complaint. On examination the perianal skin is excoriated without rash elsewhere; the remainder of the examination is normal. A transparent tape strip pressed to the perianal skin at waking is examined under the microscope the same morning.",
      question:
        "Which of the following is the most likely finding on the tape preparation?",
      options: [
        {
          label: "A",
          text: "Colorless, ovoid eggs approximately 50-60 μm long",
          correct: true,
          why: "Correct. This is Enterobius vermicularis (the pinworm): anal pruritus worse at night, most common in children aged 5-10, spreading among household contacts — with the transparent-tape test visualizing the eggs. Treatment: bendazoles or pyrantel pamoate (treat the brother too).",
        },
        {
          label: "B",
          text: "Knobby-coated, oval eggs measuring 60-75 μm with a thick shell",
          why: "That is the ASCARIS egg — the giant roundworm's fecal-egg form, which comes with ileocecal/biliary obstruction and the Löeffler syndrome, not nocturnal perianal pruritus. The distractor takes the other fecal-oral egg.",
        },
        {
          label: "C",
          text: "Rhabditiform larvae swimming among the eggs",
          why: "That is STRONGYLOIDES — the threadworm whose larvae in soil penetrate skin and whose rhabditiform larvae appear in feces; its syndrome is the GI/pulmonary/cutaneous triad with hyperinfection in the immunocompromised. The distractor takes the skin-penetration rail.",
        },
        {
          label: "D",
          text: "Embryonated eggs with bipolar plugs",
          why: "That is the WHIPWORM (Trichuris trichiura) egg form — its disease is the loose-stools-anemia-rectal-prolapse picture of children, not the nocturnal pruritus. The distractor takes the last fecal-oral row.",
        },
        {
          label: "E",
          text: "No eggs — motile trophozoites on a wet mount",
          why: "That is the TRICHOMONAS form (M18/M19's cross-link — the strawberry cervix) or Giardia's trophozoites. The distractor crosses into the protozoa block; pinworm is diagnosed by EGG morphology on tape, never by motile trophozoites.",
        },
      ],
      reasoning:
        "The vignette stacks the pinworm's identifiers: the child aged 5-10, the nocturnal perianal pruritus (the female's perianal egg-laying), the affected younger brother (household spread), and the morning tape test. Each distractor takes another row's morphological form — Ascaris's knobby oval egg (the other fecal-oral organism), Strongyloides' rhabditiform larva (the skin-penetration rail), the whipworm's bipolar-plugged egg (the rectal-prolapse row), or the protozoa's motile trophozoites (a cross-block import).",
      },
    },
  mnemonics: [
    {
      code: "“Three rails, three drugs: the food gets bendazoles, the soil-penetrators get ivermectin when they hyperinfect, and the fly-borne get diethylcarbamazine.”",
      meaning:
        "KYP's key for the therapy spine: bendazoles for the ingested intestinal set (pyrantel pamoate as the alternative); IVERMECTIN for Strongyloides (the hyperinfection syndrome) and Onchocerca (river blindness); DIETHYLCARBAMAZINE for Loa loa and the Wuchereria/Brugia filarial pair. The route rails (Ingested/Cutaneous/Bites) print on book 155 under M19's ownership and cross-link here.",
      memorizes: "The route-therapy spine",
      whenToUse: "Any nematode therapy question.",
      clinical: "The rail names the drug class.",
    },
    {
      code: "“The larvae write the story: to the alveoli for Löeffler, through the skin for the serpiginous rash, into the muscle for periorbital edema, and through the viscera for the eyes-and-brain.”",
      meaning:
        "KYP's key for the migration phenomena: Ascaris's larvae to the alveoli → the Löeffler syndrome (pulmonary eosinophilia); the hookworms' larvae through the skin → cutaneous larva migrans (pruritic, serpiginous); Trichinella's larvae through the blood into striated muscle → myositis with periorbital edema; Toxocara's visceral larva migrans → liver, eyes (visual impairment), CNS (seizures, coma), heart (myocarditis).",
      memorizes: "The larval-migration set",
      whenToUse: "Any eosinophilia-with-organ-disease question.",
      clinical: "Ask where the larva went; the organ names the species.",
    },
    {
      code: "“The one that autoinfects is the one that kills: rhabditiform larvae in feces, hyperinfection in the immunosuppressed, ivermectin on standby.”",
      meaning:
        "KYP's key for the hyperinfection axis: Strongyloides completes its cycle inside the same host (autoinfection), so immunosuppression accelerates it into the hyperinfection syndrome — GI (duodenitis), pulmonary (dry cough, hemoptysis), cutaneous (pruritus) symptoms together, with gram-negative bacteremia when the gut barrier breaks. The diagnostic form is the RHABDITIFORM LARVA in feces; the treatment is ivermectin (or bendazoles).",
      memorizes: "The Strongyloides rule",
      whenToUse: "Any immunocompromised-host stem.",
      clinical: "Screen for Strongyloides before immunosuppression — the exam's favorite.",
    },
  ],
  rapidReview: {
    s30: [
      "Intestinal set: Enterobius (tape test; nocturnal pruritus) · Ascaris (knobby oval eggs; Löeffler) · Strongyloides (rhabditiform larvae; hyperinfection)",
      "Hookworms (Ancylostoma, Necator): microcytic anemia by blood-sucking; cutaneous larva migrans from barefoot soil",
      "Trichinella: undercooked pork → encyst in striated muscle → myositis + periorbital edema",
      "Trichuris: rectal prolapse in children · Toxocara: visceral larva migrans (liver/eyes/CNS/heart)",
      "Tissue set: Onchocerca (river blindness; black fly) · Loa loa (conjunctival worm; deer/horse/mango fly) · Wuchereria/Brugia (elephantiasis; female mosquito)",
    ],
    m3: [
      "Enterobius: most common in children 5-10; tape test; bendazoles or pyrantel pamoate",
      "Ascaris: ileocecal + biliary obstruction, perforation; migrates from nose/mouth; bendazoles",
      "Strongyloides: GI + pulmonary + cutaneous; hyperinfection in the immunocompromised; ivermectin or bendazoles",
      "Route rails (book 155, M19 ownership): Ingested (Enterobius, Ascaris, Toxocara, Trichinella, Trichuris) / Cutaneous (Strongyloides, Ancylostoma, Necator) / Bites (Loa loa, Onchocerca, Wuchereria)",
      "The therapy spine: bendazoles (intestinal) · ivermectin (Strongyloides, Onchocerca) · diethylcarbamazine (Loa loa, Wuchereria/Brugia)",
    ],
    m10: [
      "The banner typo: 'MICROCIOLOGY—PARASITOLOGY' prints on books 156-158 (the source's own; documented at inventory build)",
      "The Intestinal/Tissue split rails emit as standalone lines 22/140; the route rails print on book 155 (M19 ownership) — cross-linked",
      "Photo census on book 156: 5 markers (A tape-test eggs, B Ascaris eggs, C cutaneous larva migrans, D encysted muscle larvae, E filarial lymphedema); pdfimages attribution discrepancy documented",
      "The source's 4-column table (ORGANISM/DISEASE/TRANSMISSION/TREATMENT) emits each row's cells interleaved",
      "FA's printed glosses (ivermectin for river blindness; EATTT/SANd/LOW on book 155) stay in the table block only",
    ],
  },
  recall: [
    {
      q: "Walk the intestinal set with each signature and treatment.",
      a: "ENTEROBIUS (pinworm): nocturnal anal pruritus, tape test, children 5-10; bendazoles/pyrantel. ASCARIS (giant roundworm): ileocecal/biliary obstruction, migration from nose/mouth, Löeffler syndrome; knobby oval eggs; bendazoles. STRONGYLOIDES (threadworm): GI/pulmonary/cutaneous triad; hyperinfection in the immunocompromised; rhabditiform larvae in feces; ivermectin or bendazoles. HOOKWORMS (Ancylostoma, Necator): microcytic anemia from blood-sucking; cutaneous larva migrans; barefoot skin penetration; bendazoles/pyrantel. TRICHINELLA: encystment in striated muscle with myositis, periorbital edema; undercooked pork; bendazoles. TRICHURIS (whipworm): rectal prolapse in children; bendazoles. TOXOCARA: visceral larva migrans (liver, eyes, CNS, heart); bendazoles.",
    },
    {
      q: "Walk the tissue set with vectors and treatments.",
      a: "ONCHOCERCA VOLVULUS: black skin nodules, river blindness; female black fly; ivermectin. LOA LOA: swelling in skin, worm in conjunctiva; deer/horse/mango fly; diethylcarbamazine. WUCHERERIA BANCROFTI + BRUGIA MALAYI: lymphatic filariasis (elephantiasis) — lymph nodes → inflammation → lymphedema, onset 9 mo-1 yr; female mosquito; diethylcarbamazine.",
    },
    {
      q: "What is the hyperinfection syndrome, and who gets it?",
      a: "Strongyloides' accelerated AUTOINFECTION in the immunocompromised: the GI (duodenitis), pulmonary (dry cough, hemoptysis), and cutaneous (pruritus) symptoms amplify together. The diagnostic form is the rhabditiform larva in feces; the treatment is ivermectin (or bendazoles).",
    },
    {
      q: "Which two roundworms cause anemia, and how?",
      a: "The HOOKWORMS (Ancylostoma, Necator) — microcytic anemia by sucking blood from the intestinal wall (with the serpiginous cutaneous larva migrans from skin penetration). TRICHURIS — anemia with loose stools and rectal prolapse in children. Ascaris causes obstruction (ileocecal, biliary) rather than anemia, with the Löeffler pulmonary eosinophilia.",
    },
    {
      q: "Where do the route rails print, and which rails hold which organisms?",
      a: "The Ingested/Cutaneous/Bites rails print on book 155 (pdf 177) under M19's page ownership — cross-linked here, carried verbatim there. INGESTED: Enterobius, Ascaris, Toxocara, Trichinella, Trichuris. CUTANEOUS: Strongyloides, Ancylostoma, Necator. BITES: Loa loa, Onchocerca volvulus, Wuchereria bancrofti.",
    },
  ],
  related: [
    {
      title: "Blood & Tissue Protozoa: Plasmodium, Babesia, Toxoplasma, Trypanosoma, Leishmania",
      topicId: "blood-tissue-protozoa",
      note: "M19's page 155 carries the Nematode-routes box that this note's route map is built on (the cross-link resolved by page ownership) — and its fly-borne trypanosomes share the vector axis with this note's tissue set.",
    },
    {
      title: "Intestinal & Urogenital Protozoa",
      topicId: "intestinal-protozoa",
      note: "M18's water axis pairs with this note's soil rail: the skin-penetration pair (Strongyloides, the hookworms) completes the exposure map that Giardia's cysts-in-water began.",
    },
    {
      title: "Gram-Negative Bacilli: Enterics, Zoonotics & the Water Organisms",
      topicId: "gram-negative-bacilli",
      note: "M12's tree and zoonotic set return: the body louse that transmits B. recurrentis (M19's box) and this note's fly-borne vectors complete the arthropod map across bacteria and worms.",
    },
  ],
  crossLinks: [
    {
      subject: "Pulmonology (Pulmonary Eosinophilia)",
      connection: "The Löeffler syndrome is the microbiology anchor for eosinophilic lung disease: Ascaris's larval migration to the alveoli — pairing with the hypersensitivity pneumonitides in the differential.",
    },
    {
      subject: "Hematology (Eosinophilia)",
      connection: "The roundworm block is the exam's eosinophilia engine: Löeffler's pulmonary eosinophilia, the hookworms' cutaneous larva migrans, and the tissue filariae — the parasitic causes of the eosinophil count.",
    },
    {
      subject: "Infectious Disease (Immunocompromised Host)",
      connection: "Strongyloides' hyperinfection syndrome in the immunocompromised is the block's severity axis — screening before immunosuppression and ivermectin on standby, the same host logic that scales M19's Toxoplasma.",
    },
    {
      subject: "Dermatology (Serpiginous Rash)",
      connection: "Cutaneous larva migrans (the hookworms' pruritic serpiginous rash) is the dermatology anchor for the creeping-eruption differential — paired with scabies' serpiginous burrows (M21's ectoparasites).",
    },
  ],
};
