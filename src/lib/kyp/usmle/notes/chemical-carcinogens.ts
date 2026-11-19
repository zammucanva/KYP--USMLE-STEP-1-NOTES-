import type { KypUsMLENote } from "../types";

// Pathology — NEOPLASIA (P-batch 17). Source: pdf 243 / book 221
// ("Carcinogens" — the 12-row TOXIN/eXPOSUre/OrGAn/ImPACT table). Census
// (pdfimages + VLM, two rounds): ZERO raster images on the page — pure
// text, ONE multi-row table. TOBACCO-ROW INTERLEAVE RESOLVED: the text
// layer splits the tobacco row into TWO clusters — cluster 1 (raw lines
// 70-86 of the page dump: the organ sub-list Bladder/Cervix/Esophagus +
// Oropharynx/Pancreas followed by the full EIGHT-impact block) prints in
// the stream right after the Asbestos row, and cluster 2 (raw lines
// 106-110: "Tobacco smoke" + the organ sub-list Kidney/Larynx/Lung)
// prints after the Ionizing radiation row. VLM census (both rounds) read
// the page: the tobacco row is ONE tall row sitting physically BETWEEN
// ASBESTOS AND ETHANOL, its EXPOSURE cell prints BLANK, and its ORGAN
// cell is one stacked alphabetical list — Bladder, Cervix, Esophagus,
// Kidney, Larynx, Lung, Oropharynx, Pancreas — paired LINE-BY-LINE with
// one stacked 8-impact list (Bladder→Transitional cell carcinoma,
// Cervix→Squamous cell carcinoma, Esophagus→Squamous cell carcinoma/
// adenocarcinoma, Kidney→Renal cell carcinoma, Larynx→Squamous cell
// carcinoma, Lung→Squamous cell and small cell carcinoma, Oropharynx→
// Squamous cell carcinoma, Pancreas→Pancreatic adenocarcinoma); the
// Kidney/Larynx/Lung trio is merely a separately-drawn text frame that
// pdftotext emits last — the stream order of the 8 impacts matches the
// alphabetical organ pairing exactly, so the census is self-consistent.
// Other text-layer quirks (all documented in the manifest): (1) the
// column headers extract as "TOXIn / eXPOSUre / OrGAn / ImPACT" (odd
// internal caps — the page prints TOXIN / EXPOSURE / ORGAN / IMPACT in
// plain caps); (2) the vinyl chloride row's organ cell prints "LiVer"
// (odd internal capital V, visible on the page and carried in the text
// layer — the VLM also reports red-accent V letterforms in that row's
// Vinyl/PVC/Liver words); (3) the EXPOSURE cells for TOBACCO SMOKE,
// ETHANOL, and IONIZING RADIATION print BLANK (their exposure is
// self-evident — smoking, drinking, radiation exposure). NO margin
// mnemonics print on the page (VLM confirmed, both rounds); the four
// KYP mnemonics are original.

export const chemicalCarcinogens: KypUsMLENote = {
  id: "chemical-carcinogens",
  title: "Chemical Carcinogens & Organ Cancers",
  subtitle:
    "The exposure → organ → impact table (book 221) — every row a route: aflatoxins (Aspergillus on stored grains and nuts → Liver → Hepatocellular carcinoma); alkylating agents (oncologic chemotherapy → Blood → Leukemia/lymphoma); aromatic amines (textile dyes + tobacco smoke's 2-naphthylamine → Bladder → Transitional cell carcinoma); arsenic (herbicides for vineyard workers, metal smelting, wood preservation → Liver + Lung + Skin → Hepatic angiosarcoma + Lung cancer + Squamous cell carcinoma); asbestos (old roofing, shipyards → Lung → Bronchogenic carcinoma > mesothelioma); tobacco smoke — the eight-arm octopus (Bladder→Transitional cell carcinoma, Cervix→Squamous cell carcinoma, Esophagus→Squamous cell carcinoma/adenocarcinoma, Kidney→Renal cell carcinoma, Larynx→Squamous cell carcinoma, Lung→Squamous cell and small cell carcinoma, Oropharynx→Squamous cell carcinoma, Pancreas→Pancreatic adenocarcinoma); ethanol (Esophagus/Liver/Breast → Squamous cell carcinoma/Hepatocellular carcinoma/Breast cancer); ionizing radiation (Blood/Thyroid → Leukemia/Papillary thyroid carcinoma); nickel, chromium, beryllium, silica (occupational → Lung → Lung cancer); nitrosamines (smoked foods → Stomach → Gastric cancer, intestinal type); radon (uranium decay in basements → Lung → Lung cancer, 2nd leading cause after tobacco smoke); vinyl chloride (PVC pipes → Liver → Hepatic angiosarcoma).",
  subject: "Pathology",
  system: "Section II · High-Yield General Principles — Pathology: Neoplasia",
  pilotCategory:
    "The complete exposure layer — the full 12-row carcinogen table carried verbatim, with the four multi-organ fans (arsenic 3, tobacco 8, ethanol 3, ionizing radiation 2), the tobacco row's census-resolved line-by-line organ→impact pairing, the hepatic angiosarcoma fork (vinyl chloride + arsenic vs the HCC toxins), and the two printed rank facts (bronchogenic carcinoma > mesothelioma; radon 2nd after tobacco smoke).",
  difficulty: 1,
  readTime: 6,
  sourceRef:
    "First Aid 2026, Part 1 pp. 221–221 (Pathology — Neoplasia: Carcinogens [the 12-row TOXIN / EXPOSURE / ORGAN / IMPACT table — aflatoxins through vinyl chloride — including the tobacco row's eight census-resolved organ→impact pairs, the blank EXPOSURE cells for tobacco smoke, ethanol, and ionizing radiation, and the text layer's odd-caps header and “LiVer” quirk])",
  tags: [
    "chemical carcinogens",
    "carcinogens",
    "cancer epidemiology",
    "aflatoxins",
    "Aspergillus",
    "mycotoxins",
    "hepatocellular carcinoma",
    "alkylating agents",
    "oncologic chemotherapy",
    "leukemia",
    "lymphoma",
    "aromatic amines",
    "benzidine",
    "2-naphthylamine",
    "transitional cell carcinoma",
    "bladder cancer",
    "arsenic",
    "hepatic angiosarcoma",
    "angiosarcoma",
    "lung cancer",
    "squamous cell carcinoma",
    "asbestos",
    "mesothelioma",
    "bronchogenic carcinoma",
    "tobacco smoke",
    "smoking",
    "renal cell carcinoma",
    "pancreatic adenocarcinoma",
    "ethanol",
    "alcohol",
    "breast cancer",
    "ionizing radiation",
    "papillary thyroid carcinoma",
    "nickel",
    "chromium",
    "beryllium",
    "silica",
    "nitrosamines",
    "gastric cancer",
    "radon",
    "vinyl chloride",
    "PVC",
    "occupational exposure",
    "vineyard workers",
    "shipyard workers",
    "textile industry",
    "exposure history",
  ],
  core: {
    what: "THE CARCINOGENS TABLE (12 rows, 4 columns — TOXIN / EXPOSURE / ORGAN / IMPACT): AFLATOXINS (Aspergillus) — stored grains and nuts → Liver → Hepatocellular carcinoma. ALKYLATING AGENTS — oncologic chemotherapy → Blood → Leukemia/lymphoma. AROMATIC AMINES (eg, benzidine, 2-naphthylamine) — textile industry (dyes), tobacco smoke (2-naphthylamine) → Bladder → Transitional cell carcinoma. ARSENIC — herbicides (vineyard workers), metal smelting, wood preservation → Liver + Lung + Skin → Hepatic angiosarcoma + Lung cancer + Squamous cell carcinoma. ASBESTOS — old roofing material, shipyard workers → Lung → Bronchogenic carcinoma > mesothelioma. TOBACCO SMOKE (exposure cell blank) → Bladder (Transitional cell carcinoma), Cervix (Squamous cell carcinoma), Esophagus (Squamous cell carcinoma/adenocarcinoma), Kidney (Renal cell carcinoma), Larynx (Squamous cell carcinoma), Lung (Squamous cell and small cell carcinoma), Oropharynx (Squamous cell carcinoma), Pancreas (Pancreatic adenocarcinoma). ETHANOL (exposure cell blank) → Esophagus + Liver + Breast → Squamous cell carcinoma + Hepatocellular carcinoma + Breast cancer. IONIZING RADIATION (exposure cell blank) → Blood + Thyroid → Leukemia + Papillary thyroid carcinoma. NICKEL, CHROMIUM, BERYLLIUM, SILICA — occupational exposure → Lung → Lung cancer. NITROSAMINES — smoked foods → Stomach → Gastric cancer (intestinal type). RADON — byproduct of uranium decay, accumulates in basements → Lung → Lung cancer (2nd leading cause after tobacco smoke). VINYL CHLORIDE — used to make PVC pipes → Liver (printed “LiVer”) → Hepatic angiosarcoma.",
    why: "This page earns its yield because the exposure history is the cheapest diagnostic test in medicine — one question about a job, a diet, or a habit can name the cancer before the biopsy. The table answers three questions in order. FIRST — WHICH EXPOSURE? Every row names a source you can ask about: the vineyard sprayer (arsenic), the shipyard roofer (asbestos), the dye chemist (aromatic amines), the basement dweller in a uranium belt (radon), the grain-store inspector (aflatoxins), the cured-smoker (tobacco), and the cured patient (alkylating agents — the treatment itself). SECOND — WHICH ORGAN? The route of entry and the target tissue set the destination: inhaled toxins strike the airway surfaces (asbestos, radon, the nickel family, tobacco's larynx/lung/oropharynx arms), ingested toxins meet the portal bed or the gut mucosa (aflatoxin → the liver; nitrosamines → the stomach; ethanol's esophagus/liver/breast trio), and systemic agents hit marrow and blood (alkylating agents → blood; ionizing radiation → blood + thyroid). Four rows fan out to multiple organs — arsenic (Liver/Lung/Skin), ethanol (Esophagus/Liver/Breast), ionizing radiation (Blood/Thyroid), and tobacco's eight. THIRD — WHICH HISTOLOGY? The impact column is histology-specific, not generic: the squamous surfaces get squamous cell carcinoma, the bladder gets transitional cell carcinoma (from aromatic amines OR tobacco's 2-naphthylamine), the kidney gets renal cell carcinoma, the liver splits between the vessel wall (hepatic angiosarcoma — vinyl chloride + arsenic) and the hepatocyte (hepatocellular carcinoma — aflatoxin + ethanol), the stomach gets the intestinal type, and the blood gets leukemia/lymphoma.",
    keyIdea:
      "Read every carcinogen question through four frames. FRAME 1 — THE EXPOSURE: the job/diet/habit names the toxin (vineyard = arsenic; shipyard/roofing = asbestos; dye industry = aromatic amines; basement in a uranium belt = radon; stored grains/nuts = aflatoxins; smoked foods = nitrosamines; PVC pipes = vinyl chloride; chemotherapy = alkylating agents). FRAME 2 — THE ORGAN: route of entry sets the target — inhaled → airway surfaces; ingested → portal bed or gut mucosa; systemic → marrow/blood/thyroid. FRAME 3 — THE FANS: arsenic fans three (Liver/Lung/Skin), ethanol fans three (Esophagus/Liver/Breast), ionizing radiation fans two (Blood/Thyroid), tobacco is the octopus with eight arms — printed alphabetically: Bladder, Cervix, Esophagus, Kidney, Larynx, Lung, Oropharynx, Pancreas. FRAME 4 — THE HISTOLOGY: the impact is histology-specific — SCC on the squamous surfaces, TCC in the bladder, RCC in the kidney, mixed squamous-and-small-cell in the smoker's lung, intestinal-type in the nitrosamine stomach, and the liver fork: ANGIOSARCOMA of the vessel wall (vinyl chloride + arsenic) vs CARCINOMA of the hepatocyte (aflatoxin + ethanol → HCC).",
  },
  mechanisms: [
    {
      id: "carcinogen-route-map",
      title: "The exposure → organ → impact route map: how a toxin's entry route picks the organ, the organ picks the histology",
      context: "The 12-row Carcinogens table (book 221); the routing synthesis is KYP's layer over the printed rows",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A person is exposed — the table's EXPOSURE column names the source",
            sublabel: "Input — ask the occupation, the diet, and the habit first: vineyard sprayer, shipyard roofer, dye chemist, grain-store inspector, basement dweller, smoker, drinker, or chemotherapy survivor (three rows — tobacco smoke, ethanol, ionizing radiation — print BLANK exposure cells because the exposure is self-evident).",
            variant: "input",
          },
          {
            id: "entry",
            label: "THE ROUTE OF ENTRY SETS THE FIRST TARGET",
            sublabel: "Inhaled toxins strike the airway surfaces (asbestos, radon, nickel/chromium/beryllium/silica, tobacco's larynx/lung/oropharynx arms); ingested toxins meet the portal bed or the gut mucosa (aflatoxin → liver; nitrosamines → stomach; ethanol's esophagus/liver/breast); occupational toxins act where they are handled (arsenic, vinyl chloride); systemic agents circulate everywhere (alkylating agents → blood; ionizing radiation → blood + thyroid).",
            variant: "process",
          },
          {
            id: "fans",
            label: "THE MULTI-ORGAN FANS",
            sublabel: "Four rows fan out: ARSENIC fans three (Liver → Hepatic angiosarcoma; Lung → Lung cancer; Skin → Squamous cell carcinoma); ETHANOL fans three (Esophagus → Squamous cell carcinoma; Liver → Hepatocellular carcinoma; Breast → Breast cancer); IONIZING RADIATION fans two (Blood → Leukemia; Thyroid → Papillary thyroid carcinoma); and TOBACCO is the octopus with eight arms, printed alphabetically — Bladder, Cervix, Esophagus, Kidney, Larynx, Lung, Oropharynx, Pancreas.",
            variant: "process",
          },
          {
            id: "histology",
            label: "THE IMPACT IS HISTOLOGY-SPECIFIC",
            sublabel: "The impact column never says just “cancer”: the squamous surfaces get SCC; the bladder gets Transitional cell carcinoma (aromatic amines OR tobacco's 2-naphthylamine); the kidney gets Renal cell carcinoma; the smoker's lung gets Squamous cell AND small cell carcinoma; the nitrosamine stomach gets the intestinal type; the blood gets Leukemia/lymphoma; and the liver forks — ANGIOSARCOMA of the vessel wall (vinyl chloride + arsenic) vs HCC of the hepatocyte (aflatoxin + ethanol).",
            variant: "process",
          },
          {
            id: "output",
            label: "Answer protocol: exposure → organ chip → impact line",
            sublabel: "Output — name the exposure from the history, route it to the organ by entry route, then read the impact as a histology, not a generality: the answer to any “which cancer does ___ cause” question is a tissue diagnosis printed in the IMPACT column.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "entry", label: "name the source" },
          { from: "entry", to: "fans", label: "where it travels" },
          { from: "fans", to: "histology", label: "the organ picks the histology" },
          { from: "histology", to: "output", label: "read the IMPACT column" },
        ],
      },
    },
    {
      id: "angiosarcoma-duo-map",
      title: "The liver fork and the two rank facts: angiosarcoma from the vessel duo vs carcinoma from the hepatocyte toxins — plus bronchogenic > mesothelioma and radon 2nd after tobacco",
      context: "The vinyl chloride, arsenic, aflatoxin, ethanol, asbestos, and radon rows (book 221); the fork-and-rank synthesis is KYP's exam layer",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A liver mass in a worker — or a lung-cancer attribution question",
            sublabel: "Input — the two highest-yield discriminations on this page: which liver cancer (by cell of origin), and which lung-cancer rank fact (asbestos or radon).",
            variant: "input",
          },
          {
            id: "fork",
            label: "THE LIVER FORK — VESSEL WALL vs HEPATOCYTE",
            sublabel: "HEPATIC ANGIOSARCOMA = the malignant vascular spindle-cell tumor of the vessel wall (CD31+/CD34+), and exactly TWO toxins print it: VINYL CHLORIDE (used to make PVC pipes) and ARSENIC (herbicides — vineyard workers, metal smelting, wood preservation). HEPATOCELLULAR CARCINOMA = the hepatocyte tumor: AFLATOXIN (Aspergillus on stored grains and nuts) and ETHANOL's liver arm. Same organ, different cell of origin — the biopsy decides the toxin.",
            variant: "process",
          },
          {
            id: "ranks",
            label: "THE TWO PRINTED RANK FACTS",
            sublabel: "ASBESTOS → Bronchogenic carcinoma > mesothelioma: the signature tumor (mesothelioma) is NOT the most common — the bronchial carcinoma is. RADON → Lung cancer (2nd leading cause after tobacco smoke): the gas from uranium decay accumulates in basements and ranks second only to smoking.",
            variant: "process",
          },
          {
            id: "output",
            label: "Read the occupation, then the cell of origin, then the rank",
            sublabel: "Output — PVC-pipe maker or vineyard sprayer with a liver mass → angiosarcoma (the pair); grain-store or heavy-drinking patient with a liver mass → HCC (the hepatocyte toxins); shipyard worker → expect bronchogenic carcinoma first (mesothelioma is the signature, not the leader); lifetime nonsmoker in a uranium belt → radon, the #2 cause.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "fork", label: "liver mass" },
          { from: "trigger", to: "ranks", label: "lung attribution" },
          { from: "fork", to: "output", label: "cell of origin" },
          { from: "ranks", to: "output", label: "rank, not signature" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "carcinogen-organ-map",
      title: "The carcinogen organ map (an original KYP adaptation)",
      caption:
        "An original KYP adaptation of the source page (book 221): the 12 toxin cards grouped into four bands (FUNGI & CHEMICALS — aflatoxins, alkylating agents, aromatic amines, vinyl chloride; METALS & DUSTS — arsenic with its three-arm fan, asbestos, the nickel/chromium/beryllium/silica quartet; RADIATION — ionizing radiation with its two-arm fan, radon; LIFESTYLE — tobacco's eight-arm octopus, ethanol's three-arm fan, nitrosamines), each card carrying its TOXIN name, EXPOSURE line, → ORGAN chip(s), and → IMPACT line; the HEPATIC ANGIOSARCOMA PAIR callout (vinyl chloride + arsenic vs the hepatocyte toxins); and the radon 2nd-leading-cause note.",
      notice:
        "Census (pdfimages + VLM, two rounds): ZERO raster images on this page — it is pure text, ONE 12-row table (TOXIN / EXPOSURE / ORGAN / IMPACT), so this visual is a pure ORIGINAL KYP ADAPTATION. TOBACCO-ROW INTERLEAVE, RESOLVED: the pdftotext layer splits the tobacco row into two clusters (raw lines 70-86 — the Bladder/Cervix/Esophagus + Oropharynx/Pancreas organ sub-list and the full 8-impact block — printed in the stream after the Asbestos row; and raw lines 106-110 — “Tobacco smoke” + the Kidney/Larynx/Lung sub-list — printed after the Ionizing radiation row). The VLM read the page in both rounds: ONE tall row physically between Asbestos and Ethanol, EXPOSURE cell blank, one stacked alphabetical ORGAN list (Bladder, Cervix, Esophagus, Kidney, Larynx, Lung, Oropharynx, Pancreas) paired line-by-line with one stacked 8-impact list. Text-layer quirks carried in the note: the header's odd internal caps (“TOXIn / eXPOSUre / OrGAn / ImPACT” — the page prints plain TOXIN / EXPOSURE / ORGAN / IMPACT), the vinyl chloride row's organ printed “LiVer” (odd internal capital V, visible on the page), and the BLANK exposure cells for tobacco smoke, ethanol, and ionizing radiation. NO margin mnemonics print on the page (VLM confirmed); the four KYP mnemonics are original.",
    },
    {
      kind: "table",
      title: "Book 221 — the Carcinogens table (carried verbatim)",
      intro:
        "The 12-row table, as printed. (Text-layer quirks: the header extracts with odd internal caps — “TOXIn / eXPOSUre / OrGAn / ImPACT”; the vinyl chloride row's organ cell prints “LiVer”; and the tobacco, ethanol, and ionizing-radiation rows print BLANK exposure cells. The tobacco row physically sits between Asbestos and Ethanol — the text layer interleaves it; see the pairing table below.)",
      columns: ["TOXIN", "EXPOSURE", "ORGAN", "IMPACT"],
      rows: [
        [
          "Aflatoxins (Aspergillus)",
          "Stored grains and nuts",
          "Liver",
          "Hepatocellular carcinoma",
        ],
        [
          "Alkylating agents",
          "Oncologic chemotherapy",
          "Blood",
          "Leukemia/lymphoma",
        ],
        [
          "Aromatic amines (eg, benzidine, 2-naphthylamine)",
          "Textile industry (dyes), tobacco smoke (2-naphthylamine)",
          "Bladder",
          "Transitional cell carcinoma",
        ],
        [
          "Arsenic",
          "Herbicides (vineyard workers), metal smelting, wood preservation",
          "Liver / Lung / Skin",
          "Hepatic angiosarcoma / Lung cancer / Squamous cell carcinoma",
        ],
        [
          "Asbestos",
          "Old roofing material, shipyard workers",
          "Lung",
          "Bronchogenic carcinoma > mesothelioma",
        ],
        [
          "Tobacco smoke",
          "[blank in print]",
          "Bladder / Cervix / Esophagus / Kidney / Larynx / Lung / Oropharynx / Pancreas [one stacked alphabetical list, paired line-by-line with the impacts]",
          "Transitional cell carcinoma / Squamous cell carcinoma / Squamous cell carcinoma/adenocarcinoma / Renal cell carcinoma / Squamous cell carcinoma / Squamous cell and small cell carcinoma / Squamous cell carcinoma / Pancreatic adenocarcinoma",
        ],
        [
          "Ethanol",
          "[blank in print]",
          "Esophagus / Liver / Breast",
          "Squamous cell carcinoma / Hepatocellular carcinoma / Breast cancer",
        ],
        [
          "Ionizing radiation",
          "[blank in print]",
          "Blood / Thyroid",
          "Leukemia / Papillary thyroid carcinoma",
        ],
        [
          "Nickel, chromium, beryllium, silica",
          "Occupational exposure",
          "Lung",
          "Lung cancer",
        ],
        [
          "Nitrosamines",
          "Smoked foods",
          "Stomach",
          "Gastric cancer (intestinal type)",
        ],
        [
          "Radon",
          "Byproduct of uranium decay, accumulates in basements",
          "Lung",
          "Lung cancer (2nd leading cause after tobacco smoke)",
        ],
        [
          "Vinyl chloride",
          "Used to make PVC pipes",
          "LiVer [sic — Liver; odd internal capital V as printed]",
          "Hepatic angiosarcoma",
        ],
      ],
      caption:
        "Read every row as a three-beat route — exposure, organ, histology-specific impact — and note the two design constants: the multi-organ rows pair their stacked lists line-by-line (arsenic: Liver→Hepatic angiosarcoma, Lung→Lung cancer, Skin→Squamous cell carcinoma), and the two rank facts print inside cells (asbestos: bronchogenic carcinoma > mesothelioma; radon: 2nd leading cause after tobacco smoke).",
    },
    {
      kind: "table",
      title: "The tobacco row, organ → impact pair by pair (the census-resolved pairing)",
      intro:
        "The tobacco row's eight arms, in printed order — the VLM census resolved the text-layer interleave: one stacked alphabetical organ list paired line-by-line with one stacked impact list (two impacts wrap to extra printed lines, which is why the raw text layer splits the row into two clusters).",
      columns: ["ORGAN (printed order)", "IMPACT (printed order)"],
      rows: [
        ["Bladder", "Transitional cell carcinoma"],
        ["Cervix", "Squamous cell carcinoma"],
        ["Esophagus", "Squamous cell carcinoma/adenocarcinoma"],
        ["Kidney", "Renal cell carcinoma"],
        ["Larynx", "Squamous cell carcinoma"],
        ["Lung", "Squamous cell and small cell carcinoma"],
        ["Oropharynx", "Squamous cell carcinoma"],
        ["Pancreas", "Pancreatic adenocarcinoma"],
      ],
      caption:
        "Five of the eight arms land on squamous surfaces (cervix, esophagus, larynx, oropharynx — plus the esophagus's adenocarcinoma option), and the three glandular exceptions are histology-specific: the bladder gets transitional cell, the kidney gets renal cell, and the pancreas gets adenocarcinoma — the octopus's arms never cross.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 67-year-old retired shipyard worker who also re-roofed houses presents with dyspnea and chest tightness; CT shows pleural plaques and a large peripheral lung mass, and biopsy shows a carcinoma arising from the bronchial epithelium.",
        discriminator: "Asbestos — old roofing material and shipyard work → Lung → Bronchogenic carcinoma > mesothelioma",
        concept: "The asbestos row + the first rank fact",
        answer:
          "The exposure column prints “Old roofing material, shipyard workers,” and the impact column prints the rank fact verbatim: Bronchogenic carcinoma > mesothelioma — mesothelioma is the signature asbestos tumor, but the bronchial carcinoma is the more common one. Pleural plaques mark the exposure; the mass is usually the bronchogenic carcinoma.",
      },
      {
        stem: "A 61-year-old vineyard worker who sprayed herbicides for 30 years (with earlier work at a metal smelter) develops rough hyperkeratotic papules on his palms; years later a liver mass is biopsied.",
        discriminator: "Arsenic — the three-arm fan: Skin (Squamous cell carcinoma), Liver (Hepatic angiosarcoma), Lung (Lung cancer)",
        concept: "The arsenic row — a three-organ fan",
        answer:
          "Arsenic prints three organs with three impacts, paired line-by-line: Liver → Hepatic angiosarcoma, Lung → Lung cancer, Skin → Squamous cell carcinoma. The palmar arsenical keratoses announce the exposure; the liver mass in this setting is the angiosarcoma of the vessel wall (the pair with vinyl chloride), not a hepatocyte tumor.",
      },
      {
        stem: "A 66-year-old woman who worked 28 years in a textile dye plant presents with painless gross hematuria; cystoscopy shows a papillary bladder tumor, and biopsy shows transitional cell carcinoma.",
        discriminator: "Aromatic amines (benzidine, 2-naphthylamine) — dye industry → Bladder → Transitional cell carcinoma",
        concept: "The aromatic amines row — the two-source toxin",
        answer:
          "The exposure column prints “Textile industry (dyes), tobacco smoke (2-naphthylamine)” — the same aromatic amine appears in two exposure streams, and both converge on the bladder as transitional cell carcinoma. The renal pelvis and bladder store the concentrated amine long enough for the urothelium to pay for it.",
      },
      {
        stem: "A 70-year-old lifetime nonsmoker living in a uranium-belt region presents with a persistent cough; imaging shows a lung mass, and the home radon test reads markedly elevated.",
        discriminator: "Radon — uranium decay accumulating in basements → Lung → Lung cancer (2nd leading cause after tobacco smoke)",
        concept: "The radon row + the second rank fact",
        answer:
          "Radon is a byproduct of uranium decay that accumulates in basements, and the impact column prints the rank fact verbatim: Lung cancer (2nd leading cause after tobacco smoke). A nonsmoker with a lung cancer and a hot basement points here — the gas does the smoking when the patient doesn't.",
      },
      {
        stem: "A 55-year-old man cured of diffuse large B-cell lymphoma 8 years ago with multi-agent chemotherapy presents with pancytopenia; marrow biopsy shows sheets of blasts consistent with acute myeloid leukemia.",
        discriminator: "Alkylating agents — oncologic chemotherapy → Blood → Leukemia/lymphoma",
        concept: "The alkylating agents row — the iatrogenic carcinogen",
        answer:
          "The exposure column prints “Oncologic chemotherapy” — the treatment that cured the first cancer seeds the second: alkylating agents → Blood → Leukemia/lymphoma. A secondary acute leukemia years after alkylator-based therapy is the classic delayed complication, which is why the table's shortest row is also its most ironic.",
      },
    ],
    traps: [
      {
        a: "Hepatic angiosarcoma (vinyl chloride + arsenic)",
        b: "Hepatocellular carcinoma (aflatoxin + ethanol)",
        whyConfused: "Both are liver cancers from toxin rows on the same page",
        keyDifference: "The liver forks by cell of origin: the VESSEL WALL sarcoma (CD31+ spindle cells) is hepatic angiosarcoma — printed for vinyl chloride (PVC pipes) and arsenic; the HEPATOCYTE carcinoma is hepatocellular carcinoma — printed for aflatoxin and for ethanol's liver arm",
        clue: "PVC-pipe maker or vineyard sprayer + a spindle-cell vascular liver tumor → angiosarcoma; stored-grains/nuts exposure (Aspergillus) or heavy drinking + a hepatocyte mass (often with cirrhosis, ± AFP) → HCC",
      },
      {
        a: "Bronchogenic carcinoma (asbestos)",
        b: "Mesothelioma (asbestos)",
        whyConfused: "Both are asbestos-associated malignancies asked about the same worker",
        keyDifference: "The printed impact is a rank order: Bronchogenic carcinoma > mesothelioma — the bronchial carcinoma is the MORE COMMON asbestos cancer; mesothelioma is the signature (pleura-based) one, not the most common",
        clue: "A shipyard/roofing exposure plus a lung MASS → think bronchogenic carcinoma first; a pleural-based rind encasing the lung → the signature mesothelioma — but never call mesothelioma the #1",
      },
      {
        a: "Radon",
        b: "Tobacco smoke",
        whyConfused: "Both cause lung cancer and both print rank language on the page",
        keyDifference: "Radon's impact prints “Lung cancer (2nd leading cause AFTER tobacco smoke)” — tobacco is #1, radon #2; tobacco also fans to seven OTHER organs while radon stops at the lung",
        clue: "A ranking question about lung cancer causes → tobacco first, radon second; a nonsmoker in a uranium-belt basement → radon, the #2",
      },
      {
        a: "Aromatic amines from the textile industry (dyes)",
        b: "Aromatic amines from tobacco smoke (2-naphthylamine)",
        whyConfused: "Both exposure streams print in the SAME row and both land on the bladder",
        keyDifference: "One exposure cell carries TWO sources — “Textile industry (dyes), tobacco smoke (2-naphthylamine)” — and both converge on Bladder → Transitional cell carcinoma; tobacco's own row independently lists Bladder → Transitional cell carcinoma among its eight arms",
        clue: "Painless hematuria with a urothelial tumor: ask about dye work AND smoking — either source alone explains the transitional cell carcinoma",
      },
      {
        a: "Tobacco's lung arm: Squamous cell AND small cell carcinoma",
        b: "A single-histology lung cancer",
        whyConfused: "Lung cancer questions usually expect one histology",
        keyDifference: "The printed impact for tobacco's lung arm is the PAIR “Squamous cell and small cell carcinoma” — the two histologies smoking is famous for — while the nickel/chromium/beryllium/silica row prints just “Lung cancer” and asbestos prints the bronchogenic > mesothelioma rank",
        clue: "A smoker's lung histology question → squamous cell and small cell; an occupational-dust exposure → plain “Lung cancer”; asbestos → the rank order",
      },
    ],
    pivots: [
      {
        lookAlike: "A liver mass in a worker — angiosarcoma or hepatocellular carcinoma?",
        differentiator: "Follow the occupation and the cell of origin: PVC-pipe work or arsenic exposure (vineyard/smelting/wood) with a CD31+ vascular spindle-cell tumor → hepatic angiosarcoma; aflatoxin (stored grains/nuts) or heavy ethanol with a hepatocyte tumor (± cirrhosis, ± AFP) → hepatocellular carcinoma",
        correctPath: "Biopsy first, occupation second: vessel-wall sarcoma → ask about PVC pipes and herbicides; hepatocyte carcinoma → ask about stored grains/nuts and alcohol, and image the liver in the context of cirrhosis",
      },
      {
        lookAlike: "Painless hematuria — which tobacco target, the bladder or the kidney?",
        differentiator: "Tobacco fans to BOTH: Bladder → Transitional cell carcinoma (also the aromatic amines' target) and Kidney → Renal cell carcinoma — the urothelium gives the papillary tumor, the renal tubule gives the clear-cell one",
        correctPath: "Cystoscopy for the urothelial (transitional cell) carcinoma; a renal mass workup (CT, ± biopsy) for the renal cell carcinoma — the exposure is the same, the histology routes the workup",
      },
      {
        lookAlike: "A lung cancer in an older man — tobacco, asbestos, the nickel family, or radon?",
        differentiator: "The exposure column discriminates: smoking (the octopus — lung arm = Squamous cell and small cell carcinoma); shipyard/roofing (asbestos — Bronchogenic carcinoma > mesothelioma, with pleural plaques); occupational dust exposure (Nickel, chromium, beryllium, silica — Lung cancer); uranium-belt basement (radon — Lung cancer, 2nd leading cause after tobacco smoke)",
        correctPath: "Take the exposure history in this order — smoking, occupation (shipyard, mine, smelter), then the home (basement radon) — and match the histology: paired squamous-and-small-cell → tobacco; pleural disease + a bronchial mass → asbestos; a nonsmoker with a hot basement → radon",
      },
    ],
    miniCase: {
      vignette:
        "A 63-year-old man presents with 4 months of fatigue, a 12-lb weight loss, and new right-upper-quadrant fullness. He worked for 35 years at a vineyard, where he sprayed herbicides; before that he spent 10 years at a metal smelting plant. He has smoked 1 pack/day for 20 years and drinks a glass of wine with dinner. Skin examination shows scattered rough, hyperkeratotic, papular lesions on both palms. Contrast ultrasound shows a 6-cm liver mass; biopsy reveals a malignant proliferation of CD31-positive spindle cells lining vascular channels — a sarcoma of the vessel walls, not a mass of hepatocytes. Labs: α-fetoprotein normal; HBV and HCV serologies negative; no stigmata of cirrhosis.",
      question:
        "Identify the toxin, trace its route from exposure to organ to impact, and explain why the biopsy and the skin findings rule out the other liver-targeting toxins on the page.",
      options: [
        {
          label: "Arsenic — herbicides (vineyard workers), metal smelting, wood preservation → Liver (also Lung and Skin) → Hepatic angiosarcoma; the palmar lesions are the arsenical keratoses of the skin arm (Squamous cell carcinoma risk)",
          text: "The vineyard sprayer's liver mass is a vessel-wall sarcoma — arsenic's angiosarcoma arm.",
          correct: true,
          why: "Correct on all three layers. (1) THE EXPOSURE: the printed cell is “Herbicides (vineyard workers), metal smelting, wood preservation” — his 35 years of spraying plus the smelter years are two of arsenic's three named sources. (2) THE ORGAN + IMPACT: arsenic fans to Liver, Lung, and Skin, and the liver arm prints Hepatic angiosarcoma — exactly the CD31+ vascular spindle-cell sarcoma on biopsy. (3) THE SKIN: the palmar hyperkeratotic papules are arsenical keratoses — the visible face of the skin arm (Squamous cell carcinoma), corroborating the exposure. The angiosarcoma duo is vinyl chloride OR arsenic, and the occupation picks arsenic.",
        },
        {
          label: "Aflatoxins (Aspergillus) from stored grains and nuts → Liver → Hepatocellular carcinoma",
          text: "A mycotoxin liver cancer — the grain and nut story.",
          why: "Wrong cell of origin and wrong exposure: aflatoxin's printed impact is Hepatocellular carcinoma — a tumor of hepatocytes, not the CD31+ vessel-wall spindle cells on biopsy. His AFP is normal, there is no cirrhosis, and the exposure column reads “Stored grains and nuts” (Aspergillus contamination), not vineyard herbicides. The biopsy is the discriminator: hepatocyte tumor → think aflatoxin/ethanol; vessel-wall sarcoma → think vinyl chloride/arsenic.",
        },
        {
          label: "Vinyl chloride from PVC pipe manufacturing → Liver → Hepatic angiosarcoma",
          text: "Right impact, wrong pipe — the angiosarcoma duo's other member.",
          why: "Right histology, wrong exposure: vinyl chloride DOES print Hepatic angiosarcoma (the duo with arsenic), but its exposure column reads “Used to make PVC pipes” — and he makes no pipes. The angiosarcoma pair means the biopsy cannot distinguish the two; only the exposure history can, and his is herbicides and smelting, not pipe work. The palmar keratoses tilt it further: arsenic's skin arm is on the table, vinyl chloride's is not.",
        },
        {
          label: "Tobacco smoke → Lung → Squamous cell and small cell carcinoma, metastatic to the liver",
          text: "The smoker's octopus explains every mass.",
          why: "Wrong organ list: tobacco fans to EIGHT organs — Bladder, Cervix, Esophagus, Kidney, Larynx, Lung, Oropharynx, Pancreas — and the liver is NOT one of them; there is no printed tobacco → liver arm. His 20 pack-years matter for the lung (Squamous cell and small cell carcinoma) and the bladder (Transitional cell carcinoma), but a CD31+ vessel-wall sarcoma in the liver is not on tobacco's map, and the case gives no lung primary.",
        },
        {
          label: "Ethanol → Liver → Hepatocellular carcinoma, arising in a drinking-related cirrhotic liver",
          text: "One glass a night — the classic HCC story.",
          why: "Wrong impact and wrong dose: ethanol's liver arm prints Hepatocellular carcinoma — the hepatocyte tumor again, not the angiosarcoma on biopsy — and ethanol-related HCC arises on the stage of cirrhosis, which he lacks (normal AFP, no viral hepatitis, no cirrhotic stigmata). A single glass of wine with dinner is also far below the exposure that matters; the ethanol row's three arms (Esophagus, Liver, Breast) never produce a vascular sarcoma.",
        },
      ],
      reasoning:
        "The case walks the page's four frames. (1) THE EXPOSURE: vineyard herbicides + metal smelting = two of arsenic's three printed sources (wood preservation is the third) — the occupation names the toxin before any imaging. (2) THE ORGAN + IMPACT: arsenic's liver arm prints Hepatic angiosarcoma, and the biopsy's CD31+ spindle cells lining vascular channels are that vessel-wall sarcoma — the liver fork's angiosarcoma side, shared only with vinyl chloride. (3) THE SKIN: the palmar hyperkeratotic papules are arsenical keratoses — the skin arm of the same fan (Squamous cell carcinoma) — which vinyl chloride lacks. (4) THE ELIMINATIONS: aflatoxin and ethanol give hepatocyte tumors (HCC), and his AFP is normal with no cirrhosis; vinyl chloride gives the right histology but the wrong exposure (PVC pipes); tobacco's eight arms skip the liver entirely. Occupation first, cell of origin second, exposure history to split the duo.",
    },
  },
  mnemonics: [
    {
      code: "PVC + ARSENIC = ANGIOSARCOMA",
      meaning: "The hepatic angiosarcoma pair: Vinyl chloride (used to make PVC pipes) and ARSENIC (herbicides — vineyard workers, metal smelting, wood preservation) are the ONLY two toxins whose printed liver impact is Hepatic angiosarcoma — the sarcoma of the vessel wall (CD31+ spindle cells), NOT the hepatocyte; the hepatocyte tumors are Hepatocellular carcinoma from AFLATOXIN (stored grains and nuts) and ETHANOL's liver arm.",
      memorizes: "The liver fork — which toxin gives which liver cancer",
      whenToUse: "Any liver-mass question with an occupational or dietary exposure — angiosarcoma vs hepatocellular carcinoma",
      clinical: "PVC-pipe maker or vineyard sprayer with a vascular spindle-cell liver sarcoma → angiosarcoma; grain-store exposure or heavy drinking with a hepatocyte mass (± cirrhosis, ± AFP) → HCC.",
    },
    {
      code: "SMOKE'S EIGHT ARMS: BCE-KLLOP",
      meaning: "Tobacco's organ list in printed (alphabetical) order, paired line-by-line with its impacts: B Bladder → Transitional cell carcinoma; C Cervix → Squamous cell carcinoma; E Esophagus → Squamous cell carcinoma/adenocarcinoma; K Kidney → Renal cell carcinoma; L Larynx → Squamous cell carcinoma; L Lung → Squamous cell and small cell carcinoma; O Oropharynx → Squamous cell carcinoma; P Pancreas → Pancreatic adenocarcinoma. (The liver is NOT on the list.)",
      memorizes: "The tobacco row — all eight organ→impact pairs",
      whenToUse: "Any “which cancer does smoking cause” or “which organ does tobacco spare” question",
      clinical: "A smoker with painless hematuria → the B arm (transitional cell carcinoma); a smoker with a kidney mass → the K arm (renal cell carcinoma); a smoker's lung histology → the second L arm (squamous cell AND small cell).",
    },
    {
      code: "RADON IS #2, MESOTHELIOMA IS NOT #1",
      meaning: "The two printed rank facts: RADON's impact column reads “Lung cancer (2nd leading cause after tobacco smoke)” — tobacco is #1, radon #2; and ASBESTOS's impact column reads “Bronchogenic carcinoma > mesothelioma” — the bronchial carcinoma is the more common asbestos cancer, mesothelioma only the signature one.",
      memorizes: "The two rank facts (lung-cancer causes; asbestos histologies)",
      whenToUse: "Any ranking question — most common lung cancer cause, or most common asbestos malignancy",
      clinical: "A nonsmoker in a uranium-belt basement → radon, the #2 cause; a shipyard worker with a lung mass → bronchogenic carcinoma first, mesothelioma only if the pleura is the star.",
    },
    {
      code: "ARSENIC = LLS · ETHANOL = ELB · RADIATION = BT",
      meaning: "The multi-organ fans, letter by letter: ARSENIC fans three — Liver (Hepatic angiosarcoma), Lung (Lung cancer), Skin (Squamous cell carcinoma) = LLS; ETHANOL fans three — Esophagus (Squamous cell carcinoma), Liver (Hepatocellular carcinoma), Breast (Breast cancer) = ELB; IONIZING RADIATION fans two — Blood (Leukemia), Thyroid (Papillary thyroid carcinoma) = BT.",
      memorizes: "The three multi-organ fans with their line-by-line impacts",
      whenToUse: "Any question about arsenic, ethanol, or ionizing-radiation target organs",
      clinical: "A vineyard sprayer with a skin lesion → the S of LLS; a heavy drinker with a breast or liver cancer → ELB; a radiation-exposed patient with a thyroid nodule → the T of BT (papillary thyroid carcinoma).",
    },
  ],
  rapidReview: {
    s30: [
      "Aflatoxins (Aspergillus) — stored grains and nuts → Liver → Hepatocellular carcinoma",
      "Alkylating agents — oncologic chemotherapy → Blood → Leukemia/lymphoma",
      "Aromatic amines (benzidine, 2-naphthylamine) — textile industry (dyes), tobacco smoke (2-naphthylamine) → Bladder → Transitional cell carcinoma",
      "Arsenic — herbicides (vineyard workers), metal smelting, wood preservation → Liver + Lung + Skin → Hepatic angiosarcoma + Lung cancer + Squamous cell carcinoma",
      "Asbestos — old roofing material, shipyard workers → Lung → Bronchogenic carcinoma > mesothelioma",
      "Tobacco smoke — eight arms: Bladder (TCC), Cervix (SCC), Esophagus (SCC/adenocarcinoma), Kidney (RCC), Larynx (SCC), Lung (squamous cell and small cell carcinoma), Oropharynx (SCC), Pancreas (pancreatic adenocarcinoma)",
      "Ethanol — Esophagus + Liver + Breast → SCC + Hepatocellular carcinoma + Breast cancer; Ionizing radiation — Blood + Thyroid → Leukemia + Papillary thyroid carcinoma",
      "Nickel, chromium, beryllium, silica — occupational exposure → Lung → Lung cancer; Nitrosamines — smoked foods → Stomach → Gastric cancer (intestinal type); Radon — uranium decay, basements → Lung → Lung cancer (2nd leading cause after tobacco smoke); Vinyl chloride — PVC pipes → Liver → Hepatic angiosarcoma",
    ],
    m3: [
      "PVC + ARSENIC = ANGIOSARCOMA — the vessel-wall pair, vs the hepatocyte toxins (aflatoxin, ethanol → HCC)",
      "SMOKE'S EIGHT ARMS: BCE-KLLOP — Bladder/Cervix/Esophagus/Kidney/Larynx/Lung/Oropharynx/Pancreas, paired line-by-line with TCC/SCC/SCC-adeno/RCC/SCC/squamous+small/SCC/pancreatic adeno",
      "RADON IS #2, MESOTHELIOMA IS NOT #1 — the two printed rank facts",
      "ARSENIC = LLS · ETHANOL = ELB · RADIATION = BT — the three multi-organ fans",
      "No mnemonic prints on book 221 (VLM confirmed) — all four codes above are original KYP designs",
    ],
    m10: [
      "The tobacco row is the page's tall row: physically it sits BETWEEN ASBESTOS AND ETHANOL (not alphabetical), its EXPOSURE cell prints BLANK, and its organ list prints alphabetically — the text layer splits it into two clusters (an artifact of separately-drawn text frames), resolved by the VLM census",
      "Three rows print blank EXPOSURE cells — tobacco smoke, ethanol, and ionizing radiation — because the exposure is self-evident (smoking, drinking, radiation)",
      "The vinyl chloride row's organ cell prints “LiVer” — an odd internal capital V carried on the page and in the text layer; the header extracts as “TOXIn / eXPOSUre / OrGAn / ImPACT” (odd internal caps; the page prints plain capitals)",
      "The angiosarcoma duo is indistinguishable by biopsy — CD31+ vessel-wall sarcoma either way; ONLY the exposure history (PVC pipes vs herbicides/smelting/wood) splits vinyl chloride from arsenic",
      "Two rows converge on the bladder as Transitional cell carcinoma — the aromatic amines row (dyes + tobacco's 2-naphthylamine) and tobacco's own Bladder arm — the same cancer from two different rows",
      "The multi-organ rows pair their stacked lists LINE-BY-LINE (arsenic: Liver→Hepatic angiosarcoma, Lung→Lung cancer, Skin→SCC) — read them as parallel columns, never as a free list",
    ],
  },
  recall: [
    {
      q: "The Aflatoxins, Alkylating agents, and Aromatic amines rows verbatim — toxin, exposure, organ, impact.",
      a: "Aflatoxins (Aspergillus) — Stored grains and nuts — Liver — Hepatocellular carcinoma. Alkylating agents — Oncologic chemotherapy — Blood — Leukemia/lymphoma. Aromatic amines (eg, benzidine, 2-naphthylamine) — Textile industry (dyes), tobacco smoke (2-naphthylamine) — Bladder — Transitional cell carcinoma.",
    },
    {
      q: "The Arsenic and Asbestos rows verbatim — toxin, exposure, organ(s), impact(s).",
      a: "Arsenic — Herbicides (vineyard workers), metal smelting, wood preservation — Liver, Lung, Skin — Hepatic angiosarcoma, Lung cancer, Squamous cell carcinoma. Asbestos — Old roofing material, shipyard workers — Lung — Bronchogenic carcinoma > mesothelioma.",
    },
    {
      q: "The Tobacco smoke row verbatim — all eight organ→impact pairs in printed order.",
      a: "Tobacco smoke (exposure cell blank) — Bladder → Transitional cell carcinoma; Cervix → Squamous cell carcinoma; Esophagus → Squamous cell carcinoma/adenocarcinoma; Kidney → Renal cell carcinoma; Larynx → Squamous cell carcinoma; Lung → Squamous cell and small cell carcinoma; Oropharynx → Squamous cell carcinoma; Pancreas → Pancreatic adenocarcinoma. (The organ list prints alphabetically as one stacked list, paired line-by-line with the impact list.)",
    },
    {
      q: "The Ethanol and Ionizing radiation rows verbatim — organs and impacts.",
      a: "Ethanol (exposure cell blank) — Esophagus, Liver, Breast — Squamous cell carcinoma, Hepatocellular carcinoma, Breast cancer. Ionizing radiation (exposure cell blank) — Blood, Thyroid — Leukemia, Papillary thyroid carcinoma.",
    },
    {
      q: "The Nickel, Nitrosamines, Radon, and Vinyl chloride rows verbatim — exposure, organ, impact.",
      a: "Nickel, chromium, beryllium, silica — Occupational exposure — Lung — Lung cancer. Nitrosamines — Smoked foods — Stomach — Gastric cancer (intestinal type). Radon — Byproduct of uranium decay, accumulates in basements — Lung — Lung cancer (2nd leading cause after tobacco smoke). Vinyl chloride — Used to make PVC pipes — LiVer [sic — Liver] — Hepatic angiosarcoma.",
    },
    {
      q: "The page's text-layer quirks — the header, the LiVer cell, the blank exposure cells, and the tobacco interleave.",
      a: "The header extracts as “TOXIn / eXPOSUre / OrGAn / ImPACT” (odd internal caps; the page prints plain TOXIN / EXPOSURE / ORGAN / IMPACT). The vinyl chloride row's organ prints “LiVer” (odd internal capital V). The tobacco smoke, ethanol, and ionizing radiation rows print BLANK exposure cells. And the tobacco row extracts as TWO clusters (organs Bladder/Cervix/Esophagus + Oropharynx/Pancreas with the full 8-impact block after the Asbestos row; “Tobacco smoke” + Kidney/Larynx/Lung after the Ionizing radiation row) — on the page it is ONE row between Asbestos and Ethanol, with one stacked alphabetical 8-organ list paired line-by-line with one stacked 8-impact list (VLM census, two rounds).",
    },
  ],
  related: [
    {
      title: "Neoplasia Nomenclature & Grading",
      topicId: "neoplasia-nomenclature",
      note: "The impact column speaks the naming language: -sarcoma (angiosarcoma — the vessel wall), transitional cell carcinoma (the urothelium), squamous cell carcinoma (the surfaces), renal cell carcinoma (the tubule) — this page is the nomenclature page's applied workbook.",
    },
    {
      title: "Oncogenes & Tumor Suppressors",
      topicId: "oncogenes-tumor-suppressors",
      note: "Carcinogens write the mutations the genetics page catalogs: alkylating agents are the mutagens that damage DNA directly (the same class that cures the first cancer and seeds the second), and aflatoxin's HCC is the classic p53 story — the exposure layer sits on top of the gene layer.",
    },
    {
      title: "Cancer Hallmarks",
      topicId: "cancer-hallmarks",
      note: "Chemical carcinogens are the initiators of the hallmark cascade — DNA adducts and alkylated bases set the mutating machine running; this page supplies the initiators, that page the phenotypes they buy.",
    },
    {
      title: "Ethanol Metabolism",
      topicId: "ethanol-metabolism",
      note: "The biochemistry behind ethanol's three arms: the ADH/ALDH oxidation that generates the acetaldehyde adducts — and why the esophagus (SCC), liver (HCC on the road to cirrhosis), and breast (breast cancer) pay for the drinking.",
    },
  ],
  crossLinks: [
    {
      subject: "Pharmacology (oncologic chemotherapy)",
      connection:
        "The alkylating agents row is pharmacology turned on itself: the drugs that cross-link DNA to cure lymphomas and leukemias are the same class that causes them — Blood → Leukemia/lymphoma is the printed iatrogenic cancer, the reason long-term survivors get surveillance marrow checks.",
    },
    {
      subject: "Occupational & environmental medicine (the exposure history)",
      connection:
        "This page is the occupational-medicine syllabus in one table: vineyard herbicides (arsenic), shipyards and old roofing (asbestos), textile dyes (aromatic amines), smelters, and basements over uranium decay (radon) — the job title is often the diagnosis.",
    },
    {
      subject: "Microbiology (Aspergillus)",
      connection:
        "Aflatoxin is a mycotoxin: Aspergillus growing on stored grains and nuts makes the aflatoxin that the liver converts into the mutagen — the fungal-growth link that makes food storage a cancer risk factor.",
    },
    {
      subject: "Epidemiology & public health (radon mitigation)",
      connection:
        "Radon is the public-health carcinogen: an invisible, odorless gas from uranium decay that accumulates in basements and stands as the 2nd leading cause of lung cancer after tobacco smoke — the reason radon testing and mitigation are population-level interventions, not personal choices.",
    },
  ],
};
