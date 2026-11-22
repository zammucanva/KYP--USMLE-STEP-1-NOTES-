import type { KypUsMLENote } from "../types";

// Microbiology — PARASITOLOGY banner (M-batch 21). Source: pdf 179-180 /
//  books 157-158 (Cestodes [tapeworms]; Trematodes [flukes] begins; the
//  Ectoparasites and Parasite-hints blocks print on book 158 under M21's
//  page ownership per the inventory map — the M9/M15 page-ownership rule).
//  The source's banner typo 'MICROCIOLOGY' prints on books 157-158.

export const cestodesTrematodes: KypUsMLENote = {
  id: "cestodes-trematodes",
  title: "Cestodes & Trematodes: Tapeworms and Flukes",
  subtitle:
    "The flatworms and their ectoparasite cousins organized by THE HINT MAP. THE CESTODES (book 157): TAENIA SOLIUM — the intestinal tapeworm from ingestion of larvae encysted in undercooked pork, AND cysticercosis/neurocysticercosis (cystic CNS lesions, seizures B) from ingestion of EGGS in food contaminated with HUMAN FECES — praziquantel, with albendazole for neurocysticercosis. DIPHYLLOBOTHRIUM LATUM — vitamin B12 deficiency (the tapeworm competes for B12 in the intestine) → MEGALOBLASTIC ANEMIA; ingestion of larvae in raw freshwater fish; praziquantel, niclosamide. ECHINOCOCCUS GRANULOSUS — HYDATID CYSTS (“eggshell calcification”) most commonly in liver E and lungs, with rupture causing ANAPHYLAXIS; sheep are an intermediate host; ingestion of eggs in food contaminated with DOG FECES; albendazole, surgery for complicated cysts. THE TREMATODES (book 157): SCHISTOSOMA — liver and spleen enlargement, fibrosis, inflammation, PORTAL HYPERTENSION (the S. mansoni egg with its LATERAL SPINE A); S. mansoni and S. japonicum both cause intestinal schistosomiasis (diarrhea, abdominal pain, iron deficiency anemia); chronic infection with S. HAEMATOBIUM (the egg with its TERMINAL SPINE B) → SQUAMOUS CELL CARCINOMA of the bladder (painless hematuria) and pulmonary hypertension; snails are the intermediate host — cercariae penetrate the skin of humans in contact with contaminated fresh water (eg, swimming or bathing); praziquantel. CLONORCHIS SINENSIS — biliary tract inflammation → PIGMENTED GALLSTONES; associated with CHOLANGIOCARCINOMA; undercooked fish; praziquantel. THE ECTOPARASITES (book 158, page ownership): SARCOPTES SCABIEI — mites burrow into the stratum corneum causing SCABIES (pruritus worse at night; serpiginous burrows often between fingers and toes A); common in children and crowded populations (jails, nursing homes); skin-to-skin contact (most common) or fomites; permethrin cream, oral ivermectin, washing/drying all clothing/bedding, treat close contacts. PEDICULUS HUMANUS + PHTHIRUS PUBIS — head/body/pubic lice: intense pruritus with excoriations; body lice transmit R. prowazekii (epidemic typhus), B. recurrentis (relapsing fever), and BARTONELLA QUINTANA (trench fever); pyrethroids, malathion, or ivermectin lotion with nit B combing; children with head lice can be treated at home without interrupting school attendance. CIMEX LECTULARIUS + C. HEMIPTERUS — bed bugs: painless bites with pruritic erythematous papules with a central hemorrhagic punctum; a clustered or linear pattern upon awakening is suggestive; diagnosis by direct identification in the dwelling; bites self-resolve within 1 week — ERADICATION of the infestation is critical. THE PARASITE-HINTS DIRECTORY (book 158): biliary tract disease/cholangiocarcinoma → Clonorchis sinensis; brain cysts/seizures → Taenia solium (neurocysticercosis); hematuria/SCC bladder → Schistosoma haematobium; liver hydatid cysts/exposure to infected dogs → Echinococcus granulosus; iron deficiency anemia → Ancylostoma, Necator; myalgias/periorbital edema → Trichinella spiralis; nocturnal perianal pruritus → Enterobius; portal hypertension → S. mansoni, S. japonicum; B12 deficiency → Diphyllobothrium latum.",
  subject: "Microbiology",
  system: "Section II · High-Yield General Principles — Parasitology",
  pilotCategory:
    "Parasitology — the cestodes on the two-host axis (Taenia's pork-larvae vs human-feces-eggs split; Echinococcus' dog-sheep chain); the trematodes on the spine-and-cancer axis (the lateral-spine/portal-hypertension mansoni vs the terminal-spine/SCC-bladder haematobium; Clonorchis' pigmented stones and cholangiocarcinoma); the ectoparasites with their vector set (body lice transmitting prowazekii, recurrentis, quintana); and the 9-row Parasite-hints directory",
  difficulty: 2,
  readTime: 13,
  sourceRef: "First Aid 2026, Part 1 pp. 157–158 (Cestodes; Trematodes; Ectoparasites; Parasite hints)",
  tags: [
    "cestodes",
    "tapeworms",
    "Taenia solium",
    "cysticercosis",
    "neurocysticercosis",
    "cystic CNS lesions",
    "seizures",
    "undercooked pork",
    "praziquantel",
    "albendazole",
    "Diphyllobothrium latum",
    "vitamin B12 deficiency",
    "megaloblastic anemia",
    "raw freshwater fish",
    "niclosamide",
    "Echinococcus granulosus",
    "hydatid cysts",
    "eggshell calcification",
    "anaphylaxis",
    "dog feces",
    "sheep",
    "trematodes",
    "flukes",
    "Schistosoma",
    "portal hypertension",
    "lateral spine",
    "terminal spine",
    "S. mansoni",
    "S. japonicum",
    "intestinal schistosomiasis",
    "S. haematobium",
    "squamous cell carcinoma of the bladder",
    "painless hematuria",
    "pulmonary hypertension",
    "snails",
    "cercariae",
    "Clonorchis sinensis",
    "pigmented gallstones",
    "cholangiocarcinoma",
    "undercooked fish",
    "Sarcoptes scabiei",
    "scabies",
    "serpiginous burrows",
    "permethrin",
    "Pediculus humanus",
    "Phthirus pubis",
    "lice",
    "trench fever",
    "Bartonella quintana",
    "pyrethroids",
    "malathion",
    "nit combing",
    "Cimex lectularius",
    "bed bugs",
    "hemorrhagic punctum",
    "parasite hints",
  ],
  core: {
    what: "THE FLATWORMS AND THEIR COUSINS ON THE HINT MAP. CESTODES (book 157): TAENIA SOLIUM carries two diseases split by what is ingested — the INTESTINAL TAPEWORM from larvae encysted in undercooked pork, and CYSTICERCOSIS/NEUROCYSTICERCOSIS (cystic CNS lesions, seizures B) from eggs in food contaminated with HUMAN feces; praziquantel treats both, with albendazole for the neurocysticercosis. DIPHYLLOBOTHRIUM LATUM competes for vitamin B12 in the intestine → MEGALOBLASTIC ANEMIA; from larvae in raw freshwater fish; praziquantel or niclosamide. ECHINOCOCCUS GRANULOSUS builds HYDATID CYSTS with eggshell calcification, most commonly in liver E and lungs — rupture causes ANAPHYLAXIS; sheep are the intermediate host and DOG FECES carry the eggs; albendazole, with surgery for complicated cysts. TREMATODES (book 157): SCHISTOSOMA runs the spine axis — the S. MANSONI egg with its LATERAL SPINE A drives liver/spleen enlargement, fibrosis, and PORTAL HYPERTENSION; S. mansoni and S. japonicum both cause intestinal schistosomiasis (diarrhea, abdominal pain, iron deficiency anemia); chronic S. HAEMATOBIUM infection (the egg with its TERMINAL SPINE B) leads to SQUAMOUS CELL CARCINOMA of the bladder with PAINLESS HEMATURIA and pulmonary hypertension; snails are the intermediate host and cercariae penetrate the skin in contaminated fresh water (swimming, bathing); praziquantel. CLONORCHIS SINENSIS drives biliary tract inflammation → PIGMENTED GALLSTONES and is associated with CHOLANGIOCARCINOMA; undercooked fish; praziquantel. ECTOPARASITES (book 158, page ownership): SARCOPTES SCABIEI burrow into the stratum corneum — SCABIES with pruritus worse at night and serpiginous burrows between fingers and toes A; common in children and crowded populations (jails, nursing homes); skin-to-skin contact or fomites; permethrin cream, oral ivermectin, washing/drying all clothing and bedding, treating close contacts. PEDICULUS HUMANUS + PHTHIRUS PUBIS — blood-sucking lice causing intense pruritus with excoriations on the scalp/neck (head), waistband/axilla (body), or pubic/perianal regions (pubic B); body lice transmit R. prowazekii (epidemic typhus), B. recurrentis (relapsing fever), and BARTONELLA QUINTANA (trench fever); pyrethroids, malathion, or ivermectin lotion with nit combing; children with head lice can be treated at home without interrupting school. CIMEX LECTULARIUS + C. HEMIPTERUS — bed bugs: painless bites becoming pruritic erythematous papules with a central hemorrhagic punctum; clustered or linear patterns upon awakening are suggestive; diagnosis by direct identification in the dwelling; bites self-resolve within a week — eradication of the infestation is critical. THE PARASITE-HINTS DIRECTORY closes the page: nine association → organism pairs from biliary tract disease/cholangiocarcinoma (Clonorchis) to B12 deficiency (Diphyllobothrium).",
    why: "This block carries four exam institutions. The first is THE TWO-HOST AXIS of Taenia solium: the same worm causes intestinal tapeworm (undercooked pork — the LARVAE) and neurocysticercosis (eggs in food contaminated with HUMAN feces) — the what-you-ate split that every cestode question turns on, mirrored by Echinococcus' dog-feces eggs with sheep as the intermediate host. The second is THE SPINE AXIS of Schistosoma: the LATERAL spine of S. mansoni (with portal hypertension from the liver/spleen fibrosis) versus the TERMINAL spine of S. haematobium (with the SCC of the bladder and painless hematuria, plus pulmonary hypertension) — the egg's shape names the cancer. The third is THE CANCER SET: haematobium's SCC of the bladder and Clonorchis' cholangiocarcinoma with its pigmented gallstones — the parasitology anchors of oncology. The fourth is THE ECTOPARASITE VECTOR SET: the body lice that carry prowazekii, recurrentis, and quintana — the arthropod block that closes the infectious map, together with scabies' crowded-population epidemiology and the bed bugs' eradication rule.",
    keyIdea: "Run the host, the spine, and the hint. TAENIA SOLIUM: pork LARVAE → intestinal tapeworm; HUMAN-FECES EGGS → neurocysticercosis (cystic CNS lesions, seizures); praziquantel + albendazole. DIPHYLLOBOTHRIUM: raw freshwater fish; B12 competition → MEGALOBLASTIC anemia. ECHINOCOCCUS: dog-feces eggs + sheep intermediate; hydatid cysts with eggshell calcification in liver/lungs; rupture → ANAPHYLAXIS; albendazole + surgery. SCHISTOSOMA: snails + cercariae through the skin; LATERAL-spine mansoni/japonicum → PORTAL hypertension + intestinal disease; TERMINAL-spine haematobium → SCC of the bladder with PAINLESS hematuria + pulmonary hypertension; praziquantel. CLONORCHIS: undercooked fish; biliary inflammation → PIGMENTED stones + CHOLANGIOCARCINOMA. ECTOPARASITES: scabies (nocturnal pruritus, serpiginous burrows; crowded populations; permethrin/ivermectin + treat contacts); lice (body lice transmit prowazekii, recurrentis, QUINTANA; pyrethroids/malathion/ivermectin lotion + nit combing); bed bugs (painless bites with hemorrhagic punctum; eradication critical).",
  },
  mechanisms: [
    {
      id: "cestode-two-host-axis",
      title: "The two-host axis: what you ate names the disease",
      context: "Taenia solium's split and Echinococcus' dog-sheep chain",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A cestode exposure — a meat, a fish, or a food contaminated with feces",
            sublabel: "Input — the cestode opening.",
            variant: "input",
          },
          {
            id: "s1",
            label: "TAENIA SOLIUM'S SPLIT: undercooked PORK (the larvae encysted in meat) → the INTESTINAL TAPEWORM; eggs in food contaminated with HUMAN FECES → CYSTICERCOSIS, NEUROCYSTICERCOSIS (cystic CNS lesions, seizures B) — praziquantel for both, with ALBENDAZOLE for the neurocysticercosis",
            sublabel: "Process — larvae make the worm; eggs make the cysts.",
            variant: "process",
          },
          {
            id: "s2",
            label: "DIPHYLLOBOTHRIUM LATUM: larvae in raw freshwater FISH → the tapeworm competes for vitamin B12 in the intestine → MEGALOBLASTIC ANEMIA (praziquantel, niclosamide). ECHINOCOCCUS GRANULOSUS: eggs in food contaminated with DOG FECES (SHEEP the intermediate host) → HYDATID CYSTS with eggshell calcification in liver E and lungs; RUPTURE → ANAPHYLAXIS (albendazole; surgery for complicated cysts)",
            sublabel: "Process — the fish and the dog chains.",
            variant: "process",
          },
          {
            id: "o1",
            label: "OUTPUT — the hint-directory rows for the cestodes: brain cysts, seizures → Taenia solium (neurocysticercosis); liver hydatid cysts, exposure to infected dogs → Echinococcus granulosus; vitamin B12 deficiency → Diphyllobothrium latum",
            sublabel: "Output — the association directory closes the loop.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "the Taenia split" },
          { from: "s1", to: "s2", label: "fish + dog chains" },
          { from: "s2", to: "o1", label: "the hints" },
        ],
        caption:
          "The two-host axis is the cestode block's engine. For Taenia solium, WHAT IS INGESTED decides the disease: eating the larvae encysted in undercooked pork gives the intestinal tapeworm, while eating eggs in food contaminated with human feces gives cysticercosis — the neurocysticercosis whose cystic CNS lesions present with seizures, treated with praziquantel plus albendazole. Diphyllobothrium latum rides raw freshwater fish into the intestine, where it competes for vitamin B12 and produces the megaloblastic anemia (praziquantel or niclosamide). Echinococcus granulosus closes the set with its dog-sheep chain: the eggs from dog feces (with sheep as the intermediate host) build hydatid cysts — eggshell-calcified, in liver and lungs — whose rupture can cause anaphylaxis; albendazole treats them, and surgery handles the complicated cysts. The hint-directory rows then fix the associations: brain cysts with seizures → Taenia; liver hydatid cysts with dog exposure → Echinococcus; B12 deficiency → Diphyllobothrium.",
      },
    },
    {
      id: "trematode-spine-axis",
      title: "The spine axis: the egg's shape names the cancer",
      context: "Schistosoma's species split and Clonorchis' biliary chain",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Fresh-water exposure — cercariae from snails penetrate the skin (swimming or bathing)",
            sublabel: "Input — the trematode opening.",
            variant: "input",
          },
          {
            id: "s1",
            label: "THE LATERAL SPINE (S. MANSONI A): liver and spleen enlargement, fibrosis, inflammation, PORTAL HYPERTENSION; with S. JAPONICUM, also intestinal schistosomiasis (diarrhea, abdominal pain, iron deficiency anemia)",
            sublabel: "Process — the portal-venous pair.",
            variant: "process",
          },
          {
            id: "s2",
            label: "THE TERMINAL SPINE (S. HAEMATOBIUM B): chronic infection → SQUAMOUS CELL CARCINOMA of the bladder (PAINLESS HEMATURIA) and PULMONARY HYPERTENSION; praziquantel for all",
            sublabel: "Process — the bladder cancer pair.",
            variant: "process",
          },
          {
            id: "s3",
            label: "THE BILIARY CHAIN (CLONORCHIS SINENSIS): undercooked fish → biliary tract inflammation → PIGMENTED GALLSTONES; associated with CHOLANGIOCARCINOMA; praziquantel",
            sublabel: "Process — the biliary cancer pair.",
            variant: "process",
          },
          {
            id: "o1",
            label: "OUTPUT — the ectoparasite close (book 158, page ownership): scabies (the nocturnal pruritus and serpiginous burrows of crowded populations — permethrin, ivermectin, and treating close contacts); the lice whose body form transmits PROWAZEKII, RECURRENTIS, and QUINTANA; and the bed bugs whose painless bites with a hemorrhagic punctum demand ERADICATION",
            sublabel: "Output — the arthropods close the parasitology chapter.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "lateral spine" },
          { from: "s1", to: "s2", label: "terminal spine" },
          { from: "s2", to: "s3", label: "biliary chain" },
          { from: "s3", to: "o1", label: "the ectoparasite close" },
        ],
        caption:
          "The spine axis is the trematode block's engine. The snail-borne cercariae penetrate the skin in contaminated fresh water, and the egg's shape then names the disease: the LATERAL spine of S. mansoni drives the hepatic fibrosis behind portal hypertension (with S. japonicum, the intestinal schistosomiasis of diarrhea, abdominal pain, and iron-deficiency anemia), while the TERMINAL spine of S. haematobium drives the chronic bladder disease that becomes squamous cell carcinoma with painless hematuria — plus the pulmonary hypertension of the chronic infection. Clonorchis sinensis carries the biliary chain: undercooked fish, biliary inflammation, pigmented gallstones, and the cholangiocarcinoma association. The page then closes with the ectoparasites (book 158 under this topic's page ownership): scabies in the crowded populations of jails and nursing homes (permethrin, ivermectin, and treating the contacts), the body lice that transmit epidemic typhus, relapsing fever, and trench fever, and the bed bugs whose clustered, linear morning bites require eradication rather than treatment of the bites alone.",
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "cestode-trematode-map",
      title: "The cestodes + trematodes + ectoparasites — the hint map",
      caption:
        "An original KYP redraw of the source's three blocks (books 157-158): the CESTODES grid (Taenia solium, Diphyllobothrium latum, Echinococcus granulosus), the TREMATODES grid (Schistosoma, Clonorchis sinensis), the ECTOPARASITES rows (Sarcoptes scabiei, Pediculus/Phthirus, Cimex), and the 9-row Parasite-hints anchors strip.",
      notice:
        "The printed photos (A the Taenia solium proglottids; B the neurocysticercosis CNS imaging; C the Echinococcus granulosus worms; D the hydatid cysts; E the liver cysts; the Schistosoma mansoni lateral-spine egg A; the haematobium terminal-spine egg B; the scabies burrows A; the nits B) are raster — COPYRIGHTED, described-in-text only. The source's banner typo 'MICROCIOLOGY—PARASITOLOGY' prints on books 157-158. FA's printed glosses (DiphylloB12 latum) stay in the table block only.",
    },
    {
      kind: "table",
      title: "The cestodes, trematodes, and ectoparasites — verbatim",
      intro: "The source's blocks (books 157-158), verbatim (FA's printed glosses marked).",
      columns: ["Block / Organism", "Content (verbatim)"],
      rows: [
        ["Cestodes — Taenia solium", "DISEASE: Intestinal tapeworm (from ingestion of larvae encysted in undercooked pork) AND cysticercosis, neurocysticercosis (cystic CNS lesions, seizures B — printed imaging; described-in-text only) (from ingestion of eggs in food contaminated with human feces). TRANSMISSION: undercooked pork (larvae); eggs in food contaminated with human feces. TREATMENT: Praziquantel; albendazole for neurocysticercosis."],
        ["Cestodes — Diphyllobothrium latum", "DISEASE: Vitamin B12 deficiency (“DiphylloB12 latum” — FA gloss, printed; tapeworm competes for B12 in intestine) → megaloblastic anemia. TRANSMISSION: Ingestion of larvae in raw freshwater fish. TREATMENT: Praziquantel, niclosamide."],
        ["Cestodes — Echinococcus granulosus", "DISEASE: Hydatid cysts (“eggshell calcification”) most commonly in liver E and lungs (printed imaging — described-in-text only); cyst rupture can cause anaphylaxis. Sheep are an intermediate host. TRANSMISSION: Ingestion of eggs in food contaminated with dog feces. TREATMENT: Albendazole; surgery for complicated cysts."],
        ["Trematodes — Schistosoma", "DISEASE: Liver and spleen enlargement (A shows S mansoni egg with lateral spine — printed micrograph; described-in-text only), fibrosis, inflammation, portal hypertension; S mansoni and S japonicum can both also cause intestinal schistosomiasis, presenting with diarrhea, abdominal pain, iron deficiency anemia. Chronic infection with S haematobium (egg with terminal spine B — printed micrograph; described-in-text only) can lead to squamous cell carcinoma of the bladder (painless hematuria) and pulmonary hypertension. TRANSMISSION: Snails are intermediate host; cercariae penetrate skin of humans in contact with contaminated fresh water (eg, swimming or bathing). TREATMENT: Praziquantel."],
        ["Trematodes — Clonorchis sinensis", "DISEASE: Biliary tract inflammation → pigmented gallstones. Associated with cholangiocarcinoma. TRANSMISSION: Undercooked fish. TREATMENT: Praziquantel. [The Clonorchis heading emits at the page end — line 126-128 of the dump; the Schistosoma and Clonorchis rows interleave in the text layer.]"],
        ["Ectoparasites — Sarcoptes scabiei (book 158, page ownership)", "DISEASE: Mites burrow into stratum corneum and cause scabies—pruritus (worse at night) and serpiginous burrows (lines) often between fingers and toes A (printed photo; described-in-text only). Common in children, crowded populations (jails, nursing homes); transmission through skin-to-skin contact (most common) or via fomites. TREATMENT: permethrin cream, oral ivermectin, washing/drying all clothing/bedding, treat close contacts."],
        ["Ectoparasites — Pediculus humanus and Phthirus pubis (book 158, page ownership)", "DISEASE: Blood-sucking lice that cause intense pruritus with associated excoriations, commonly on scalp and neck (head lice), waistband and axilla (body lice), or pubic and perianal regions (pubic lice) B (printed photo — the nits; described-in-text only). Body lice can transmit Rickettsia prowazekii (epidemic typhus), Borrelia recurrentis (relapsing fever), Bartonella quintana (trench fever). TREATMENT: pyrethroids, malathion, or ivermectin lotion, and nit combing. Children with head lice can be treated at home without interrupting school attendance."],
        ["Ectoparasites — Cimex lectularius and Cimex hemipterus (book 158, page ownership)", "DISEASE: Bed bugs. Blood-feeding insects that infest dwellings. Painless bites result in a range of skin reactions, typically pruritic, erythematous papules with central hemorrhagic punctum. A clustered or linear pattern of bites seen upon awakening is suggestive. Diagnosis is confirmed by direct identification of bed bugs in patient's dwelling. TRANSMISSION: can spread among rooms; cohabitants may exhibit similar symptoms; also via travelers from infested hotels and the use of unwashed, used bedding. TREATMENT: bites self resolve within 1 week. Eradication of the infestation is critical."],
        ["The Parasite-hints directory (book 158, page ownership)", "ASSOCIATIONS → ORGANISM: Biliary tract disease, cholangiocarcinoma → Clonorchis sinensis. Brain cysts, seizures → Taenia solium (neurocysticercosis). Hematuria, squamous cell bladder cancer → Schistosoma haematobium. Liver (hydatid) cysts, exposure to infected dogs → Echinococcus granulosus. Iron deficiency anemia → Ancylostoma, Necator. Myalgias, periorbital edema → Trichinella spiralis. Nocturnal perianal pruritus → Enterobius. Portal hypertension → Schistosoma mansoni, Schistosoma japonicum. Vitamin B12 deficiency → Diphyllobothrium latum."],
      ],
      caption:
        "The table reads with the visual: the cestode and trematode rows are the two grids; the ectoparasite rows and the hints directory print on book 158 under this topic's page ownership (the M9/M15 page-ownership rule). The Clonorchis heading emits at the page end (the Schistosoma and Clonorchis rows interleave in the text layer); the source's banner typo 'MICROCIOLOGY' prints on books 157-158.",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "The protocols the hint map implies",
      body: "THE TAENIA PROTOCOL: pork larvae → intestinal tapeworm; human-feces eggs → NEUROCYSTICERCOSIS (cystic CNS lesions, seizures); praziquantel + albendazole. THE DIPHYLLOBOTHRIUM PROTOCOL: raw freshwater fish; the B12 competition → MEGALOBLASTIC anemia; praziquantel or niclosamide. THE ECHINOCOCCUS PROTOCOL: dog-feces eggs with sheep as intermediate host; hydatid cysts with eggshell calcification in liver and lungs; RUPTURE → ANAPHYLAXIS (never aspirate blindly); albendazole, surgery for complicated cysts. THE SCHISTOSOMA PROTOCOL: snails + cercariae through the skin; LATERAL-spine mansoni/japonicum → portal hypertension + intestinal schistosomiasis (diarrhea, iron-deficiency anemia); TERMINAL-spine haematobium → SCC of the bladder with PAINLESS hematuria + pulmonary hypertension; praziquantel. THE CLONORCHIS PROTOCOL: undercooked fish; biliary inflammation → PIGMENTED stones + CHOLANGIOCARCINOMA; praziquantel. THE ECTOPARASITE PROTOCOLS: scabies — permethrin, oral ivermectin, wash everything, TREAT CLOSE CONTACTS; lice — pyrethroids/malathion/ivermectin lotion + nit combing (head lice do not interrupt school); bed bugs — the bites self-resolve; ERADICATION of the infestation is the treatment.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 26-year-old man who cooks pork outdoors presents with a first-time seizure; MRI of the brain shows multiple cystic lesions with subtle calcification; he emigrates from a region where pigs roam near latrines.",
        discriminator: "Seizures + cystic CNS lesions + human-feces-contaminated food exposure",
        concept: "Neurocysticercosis — Taenia solium from eggs",
        answer:
          "Taenia solium: eating the eggs (in food contaminated with human feces) — not the larvae — gives cysticercosis with neurocysticercosis (cystic CNS lesions, seizures). The intestinal tapeworm comes from the larvae in undercooked pork. Treatment: praziquantel, with albendazole for neurocysticercosis.",
      },
      {
        stem: "A 31-year-old man returns from a 3-week fishing trip in Latin America with 2 weeks of painless terminal-hematuria; urinalysis shows no dysmorphic RBCs; urine microscopy reveals eggs with a terminal spine; cystoscopy later finds a bladder mass.",
        discriminator: "Painless hematuria + terminal-spine eggs + the bladder mass",
        concept: "Schistosoma haematobium — the SCC-of-the-bladder schistosome",
        answer:
          "Chronic S. haematobium infection (the egg with its TERMINAL spine) leads to squamous cell carcinoma of the bladder with painless hematuria and pulmonary hypertension. Snails are the intermediate host; cercariae penetrate the skin in contaminated fresh water. Treatment: praziquantel.",
      },
      {
        stem: "A 9-year-old boy from a sheep-farming family presents with right-upper-quadrant discomfort; imaging shows a large cystic liver lesion with a calcified rim; during workup he develops urticaria, wheezing, and hypotension after a minor trauma to the abdomen.",
        discriminator: "Sheep/dog exposure + eggshell-calcified liver cyst + anaphylaxis after rupture",
        concept: "Echinococcus granulosus — the hydatid cyst",
        answer:
          "Echinococcus granulosus: hydatid cysts with eggshell calcification, most commonly in liver and lungs; sheep are the intermediate host; the eggs come from food contaminated with dog feces. Cyst rupture causes ANAPHYLAXIS. Treatment: albendazole, with surgery for complicated cysts.",
      },
    ],
    traps: [
      {
        a: "Eating undercooked pork causes neurocysticercosis",
        b: "Undercooked PORK (the larvae) causes the INTESTINAL TAPEWORM; the EGGS in food contaminated with HUMAN FECES cause CYSTICERCOSIS/NEUROCYSTICERCOSIS",
        whyConfused: "It is the same worm, so the route feels interchangeable.",
        keyDifference:
          "The what-you-ate split is the block's most-tested line: larvae → the adult tapeworm in the gut (praziquantel); eggs → the cysticerci in the brain (praziquantel + ALBENDAZOLE). The same logic runs the Echinococcus chain (dog-feces eggs; sheep intermediate) and the Diphyllobothrium fish route (B12 competition → megaloblastic anemia).",
        clue: "Any cestode-transmission question.",
      },
      {
        a: "Bladder cancer with hematuria is always transitional cell carcinoma",
        b: "Chronic S. haematobium infection (the TERMINAL-spine egg) causes SQUAMOUS CELL CARCINOMA of the bladder with PAINLESS hematuria — while the LATERAL-spine S. mansoni drives PORTAL hypertension",
        whyConfused: "Painless hematuria reads as a urology TCC stem.",
        keyDifference:
          "The spine names the species and the cancer: terminal spine = haematobium (SCC bladder + pulmonary hypertension; praziquantel); lateral spine = mansoni (liver/spleen fibrosis with portal hypertension; with japonicum, the intestinal schistosomiasis of diarrhea and iron-deficiency anemia). The egg's shape is the exam's answer key.",
        clue: "Any hematuria-or-portal-hypertension parasitology question.",
      },
      {
        a: "Body lice are a hygiene nuisance without systemic consequences",
        b: "Body lice transmit Rickettsia prowazekii (epidemic typhus), Borrelia recurrentis (relapsing fever), and BARTONELLA QUINTANA (trench fever) — the three-disease vector set",
        whyConfused: "Lice feel like a dermatology topic.",
        keyDifference:
          "The ectoparasite block is a vector block: the body louse carries the prowazekii-recurrentis-quintana triad (the same organisms as M19's box); scabies carries the crowded-population epidemiology (jails, nursing homes) with permethrin/ivermectin and contact treatment; bed bugs self-resolve but demand ERADICATION of the dwelling.",
        clue: "Any lice-or-scabies question.",
      },
    ],
    pivots: [
      {
        lookAlike: "Lateral spine vs terminal spine (the Schistosoma pair)",
        differentiator: "Portal hypertension vs SCC of the bladder",
        correctPath:
          "S. MANSONI (LATERAL spine A): liver/spleen enlargement, fibrosis, PORTAL HYPERTENSION; with S. japonicum, intestinal schistosomiasis (diarrhea, abdominal pain, iron-deficiency anemia). S. HAEMATOBIUM (TERMINAL spine B): chronic infection → SQUAMOUS CELL CARCINOMA of the bladder (painless hematuria) + pulmonary hypertension. All: snails intermediate; cercariae through the skin; praziquantel.",
      },
      {
        lookAlike: "The two biliary diseases (Clonorchis vs the cholangiocarcinoma set)",
        differentiator: "Pigmented stones and the fish route",
        correctPath:
          "CLONORCHIS SINENSIS: undercooked fish; biliary tract inflammation → PIGMENTED GALLSTONES; associated with CHOLANGIOCARCINOMA; praziquantel. (The hint directory: biliary tract disease, cholangiocarcinoma → Clonorchis sinensis — the parasitology anchor for the biliary cancer questions.)",
      },
    ],
    miniCase: {
      vignette:
        "A 24-year-old man presents with a witnessed generalized tonic-clonic seizure. He emigrated 4 years ago from a rural region of Latin America where pigs roam freely around unlined latrines; he regularly ate pork cooked outdoors. MRI of the brain shows several well-circumscribed cystic lesions, some with subtle rim calcification, scattered in the cortex and one in the cerebellum; there is no ring enhancement with contrast and no edema. Neurologic examination is normal; he is afebrile.",
      question:
        "Which of the following best explains the route by which this patient acquired the disease?",
      options: [
        {
          label: "A",
          text: "Ingestion of eggs in food contaminated with human feces",
          correct: true,
          why: "Correct. Neurocysticercosis comes from eating the EGGS (shed in human feces and contaminating food), not from the larvae: the eggs hatch, the oncospheres cross the gut, and the cysticerci encyst in the brain as cystic lesions with rim calcification. The intestinal tapeworm (from the pork larvae) is the OTHER half of Taenia solium's split. Treatment: praziquantel, with albendazole for neurocysticercosis.",
        },
        {
          label: "B",
          text: "Ingestion of larvae encysted in undercooked pork",
          why: "That route gives the INTESTINAL TAPEWORM (the adult in the gut) — not the brain cysts. The distractor swaps Taenia solium's two hosts' products; it is the single most-tested line of the cestode block.",
        },
        {
          label: "C",
          text: "Cercariae penetrating the skin during swimming",
          why: "That is the SCHISTOSOMA route (snails + fresh water) — the lateral/terminal-spine eggs, portal hypertension, and SCC of the bladder. The distractor imports the trematode block into the cestode block.",
        },
        {
          label: "D",
          text: "Ingestion of eggs in food contaminated with dog feces",
          why: "That is the ECHINOCOCCUS route (sheep intermediate; hydatid cysts with eggshell calcification in liver and lungs — rupture causing anaphylaxis). The distractor takes the other dog-feces cestode.",
        },
        {
          label: "E",
          text: "Larvae in raw freshwater fish",
          why: "That is the DIPHYLLOBOTHRIUM route — the B12-competition megaloblastic anemia. The distractor takes the last cestode row into a neurologic presentation it never causes.",
        },
      ],
      reasoning:
        "The vignette stacks the neurocysticercosis identifiers: the seizures with cystic, rim-calcified CNS lesions, the pig-near-latrine geography (human-feces contamination of food), and the afebrile, non-enhancing imaging. The route question is the block's core split: eggs (human feces) → cysticercosis; larvae (pork) → the intestinal tapeworm. Each distractor imports another block's route — the Schistosoma cercariae, the Echinococcus dog chain, or the Diphyllobothrium fish — none of which produces cystic brain lesions.",
      },
    },
  mnemonics: [
    {
      code: "“Larvae make the worm; eggs make the cysts — and the spine makes the cancer.”",
      meaning:
        "KYP's key for the flatworm block: Taenia solium — pork LARVAE → the intestinal tapeworm; HUMAN-FECES EGGS → cysticercosis/neurocysticercosis (praziquantel + albendazole). Echinococcus — dog-feces eggs with sheep intermediate → hydatid cysts whose rupture anaphylaxes. Schistosoma — the LATERAL-spine mansoni (portal hypertension) vs the TERMINAL-spine haematobium (SCC of the bladder, painless hematuria).",
      memorizes: "The two-host and spine axes",
      whenToUse: "Any cestode-or-trematode question.",
      clinical: "Ask what was eaten and which spine the egg carries.",
    },
    {
      code: "“The cancer set of the parasites: the bladder from the terminal spine, the bile ducts from the fish.”",
      meaning:
        "KYP's key for the cancer set: chronic S. haematobium → squamous cell carcinoma of the bladder (painless hematuria) + pulmonary hypertension; Clonorchis sinensis → biliary inflammation with PIGMENTED gallstones and cholangiocarcinoma. The hint directory fixes the rows: hematuria/SCC bladder → haematobium; biliary disease/cholangiocarcinoma → Clonorchis.",
      memorizes: "The parasitology-oncology anchors",
      whenToUse: "Any cancer-association stem.",
      clinical: "The parasite precedes the tumor by years.",
    },
    {
      code: "“The arthropods close the chapter: burrows at night, nits by day, and the morning bites in a line.”",
      meaning:
        "KYP's key for the ectoparasites (book 158, this topic's page ownership): Sarcoptes scabiei — nocturnal pruritus with serpiginous burrows between fingers and toes, in children and crowded populations (jails, nursing homes); permethrin/ivermectin + wash everything + treat contacts. Pediculus/Phthirus — the head/body/pubic lice whose body form transmits prowazekii (epidemic typhus), recurrentis (relapsing fever), and QUINTANA (trench fever); pyrethroids/malathion/ivermectin lotion + nit combing. Cimex — bed bugs with painless bites and hemorrhagic punctum in clustered/linear morning patterns; the bites self-resolve — ERADICATION is the treatment.",
      memorizes: "The ectoparasite set",
      whenToUse: "Any pruritus-or-vector question.",
      clinical: "The body louse is a three-disease vector; scabies is a household disease.",
    },
  ],
  rapidReview: {
    s30: [
      "Taenia solium: pork LARVAE → intestinal tapeworm; HUMAN-FECES EGGS → neurocysticercosis (cystic CNS lesions, seizures)",
      "Diphyllobothrium latum: raw freshwater fish; competes for B12 → MEGALOBLASTIC anemia; praziquantel/niclosamide",
      "Echinococcus granulosus: dog-feces eggs, sheep intermediate; hydatid cysts (eggshell calcification) in liver/lungs; rupture → ANAPHYLAXIS; albendazole + surgery",
      "Schistosoma: LATERAL-spine mansoni → portal hypertension; TERMINAL-spine haematobium → SCC bladder (painless hematuria) + pulmonary hypertension",
      "Clonorchis sinensis: undercooked fish; biliary inflammation → PIGMENTED stones + cholangiocarcinoma; praziquantel",
    ],
    m3: [
      "Taenia therapy: praziquantel; ALBENDAZOLE for neurocysticercosis",
      "Schistosoma transmission: snails intermediate; cercariae penetrate skin in contaminated fresh water (swimming, bathing)",
      "S. mansoni + S. japonicum: intestinal schistosomiasis (diarrhea, abdominal pain, iron deficiency anemia)",
      "Scabies: stratum corneum burrows; nocturnal pruritus; crowded populations (jails, nursing homes); permethrin/ivermectin + wash + treat contacts",
      "Body lice transmit: R. prowazekii (epidemic typhus), B. recurrentis (relapsing fever), BARTONELLA QUINTANA (trench fever)",
    ],
    m10: [
      "The hint directory (book 158): Clonorchis (biliary/cholangiocarcinoma) · Taenia (brain cysts/seizures) · haematobium (hematuria/SCC bladder) · Echinococcus (hydatid/dogs) · hookworms (iron deficiency) · Trichinella (myalgias/periorbital edema) · Enterobius (nocturnal pruritus) · mansoni/japonicum (portal hypertension) · Diphyllobothrium (B12)",
      "The ectoparasites + hints print on book 158 under M21's page ownership (the M9/M15 rule)",
      "The banner typo 'MICROCIOLOGY—PARASITOLOGY' prints on books 157-158; PARASITOLOGY COMPLETE at M21",
      "The Clonorchis heading emits at the page end (line 126-128); the Schistosoma/Clonorchis rows interleave in the text layer",
      "FA's printed glosses (DiphylloB12 latum; EATTT/SANd/LOW are M19/M20's) stay in the table block only",
    ],
  },
  recall: [
    {
      q: "Walk Taenia solium's two-disease split with routes and treatment.",
      a: "INTESTINAL TAPEWORM: ingestion of larvae encysted in undercooked pork. CYSTICERCOSIS/NEUROCYSTICERCOSIS: ingestion of eggs in food contaminated with human feces — cystic CNS lesions, seizures. Treatment: praziquantel; albendazole for neurocysticercosis.",
    },
    {
      q: "Walk the trematode spine axis and the cancer set.",
      a: "S. MANSONI (LATERAL spine): liver/spleen enlargement, fibrosis, inflammation, portal hypertension; with S. japonicum, intestinal schistosomiasis (diarrhea, abdominal pain, iron-deficiency anemia). S. HAEMATOBIUM (TERMINAL spine): chronic infection → squamous cell carcinoma of the bladder (painless hematuria) and pulmonary hypertension. Clonorchis sinensis: biliary inflammation → pigmented gallstones; cholangiocarcinoma. All from snails + cercariae penetrating the skin in fresh water; praziquantel treats all.",
    },
    {
      q: "Give the Echinococcus chain with its emergency.",
      a: "Ingestion of eggs in food contaminated with dog feces; sheep are the intermediate host. Hydatid cysts with eggshell calcification, most commonly in liver and lungs; cyst rupture can cause ANAPHYLAXIS. Treatment: albendazole; surgery for complicated cysts.",
    },
    {
      q: "Give the ectoparasite set with vectors and treatments.",
      a: "SARCOPTES SCABIEI: scabies — nocturnal pruritus, serpiginous burrows between fingers and toes; crowded populations (jails, nursing homes); permethrin cream, oral ivermectin, washing/drying all clothing and bedding, treating close contacts. PEDICULUS HUMANUS + PHTHIRUS PUBIS: head/body/pubic lice — body lice transmit R. prowazekii, B. recurrentis, and Bartonella quintana; pyrethroids, malathion, or ivermectin lotion with nit combing (head lice do not interrupt school). CIMEX: bed bugs — painless bites with pruritic papules and a central hemorrhagic punctum in clustered/linear morning patterns; bites self-resolve in a week; ERADICATION of the infestation is critical.",
    },
    {
      q: "Recite the Parasite-hints directory.",
      a: "Biliary tract disease, cholangiocarcinoma → Clonorchis sinensis. Brain cysts, seizures → Taenia solium (neurocysticercosis). Hematuria, squamous cell bladder cancer → Schistosoma haematobium. Liver hydatid cysts, exposure to infected dogs → Echinococcus granulosus. Iron deficiency anemia → Ancylostoma, Necator. Myalgias, periorbital edema → Trichinella spiralis. Nocturnal perianal pruritus → Enterobius. Portal hypertension → Schistosoma mansoni, S. japonicum. Vitamin B12 deficiency → Diphyllobothrium latum.",
    },
  ],
  related: [
    {
      title: "Nematodes: The Roundworms",
      topicId: "helminths-nematodes",
      note: "M20's route map and this note's two-host map share the hint directory (book 158): the hookworm and Trichinella rows point back at M20's organisms while the flatworm rows live here — the parasitology chapter's cross-referenced close.",
    },
    {
      title: "Blood & Tissue Protozoa: Plasmodium, Babesia, Toxoplasma, Trypanosoma, Leishmania",
      topicId: "blood-tissue-protozoa",
      note: "M19's CNS table (Toxoplasma's ring-enhancing lesions) is the imaging contrast for this note's neurocysticercosis — cystic vs ring-enhancing is the parasitology differential's answer key.",
    },
    {
      title: "Intracellular & Vector-Borne Bacteria: Chlamydia, Rickettsia, Mycoplasma",
      topicId: "intracellular-bacteria",
      note: "M15's rickettsial set is the recipient of this note's lice vectors: the body louse carrying prowazekii (epidemic typhus) is the ectoparasite block's bridge back to the bacterial chapter.",
    },
  ],
  crossLinks: [
    {
      subject: "Neurology (Seizures)",
      connection: "Neurocysticercosis is the parasitology anchor for adult-onset seizures in endemic regions — the cystic CNS lesions with rim calcification, treated with praziquantel and albendazole, contrasted with Toxoplasma's ring-enhancing lesions.",
    },
    {
      subject: "Oncology (Squamous Cell Bladder Cancer)",
      connection: "Chronic S. haematobium infection is the parasitology anchor for SCC of the bladder — painless hematuria years after the terminal-spine eggs; pairs with Clonorchis' cholangiocarcinoma as the block's cancer set.",
    },
    {
      subject: "Gastroenterology (Portal Hypertension)",
      connection: "S. mansoni's hepatic fibrosis (the lateral-spine egg) is the parasitology anchor for portal hypertension — the presinusoidal cause that pairs with cirrhosis in the variceal differential.",
    },
    {
      subject: "Dermatology (Pruritus)",
      connection: "The ectoparasite set is the pruritus anchor: scabies' nocturnal serpiginous burrows in crowded populations, the lice's excoriations, and the bed bugs' morning-line patterns — with permethrin/ivermectin and contact treatment as the protocols.",
    },
  ],
};
