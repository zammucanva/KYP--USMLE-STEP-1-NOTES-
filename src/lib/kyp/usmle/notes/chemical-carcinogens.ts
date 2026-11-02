import type { KypUsMLENote } from "../types";

// Pathology — NEOPLASIA banner (P-batch 17). Source: pdf 243 /
// book 221 (Carcinogens — a single TOXIN | EXPOSURE | ORGAN |
// IMPACT table with 11 toxin entries). Census (pdfimages + VLM):
// NO raster images on the page (pdfimages -list returned zero
// rows). The page is pure text — no figures, no photographs. The
// visual is an ORIGINAL KYP adaptation rendering the table as a
// toxin-organ-impact grid map (no source figure to redraw). The
// table is carried verbatim in the note's table block. NO
// copyrighted photographs, NO margin mnemonics (VLM confirmed);
// the KYP memory layer is original.

export const chemicalCarcinogens: KypUsMLENote = {
  id: "chemical-carcinogens",
  title: "Chemical Carcinogens & Organ Cancers",
  subtitle:
    "The 11 toxins, their exposures, and the organs they seed (book 221) — the TOXIN | EXPOSURE | ORGAN | IMPACT table: AFLATOXINS (Aspergillus) from stored grains and nuts → liver (hepatocellular carcinoma); ALKYLATING AGENTS from oncologic chemotherapy → blood (leukemia/lymphoma); AROMATIC AMINES (benzidine, 2-naphthylamine) from textile dyes and tobacco smoke → bladder (transitional cell carcinoma); ARSENIC from herbicides, metal smelting, wood preservation → liver (hepatic angiosarcoma), lung (lung cancer), skin (SCC); ASBESTOS from old roofing and shipyards → lung (bronchogenic carcinoma > mesothelioma); TOBACCO SMOKE → 8 organs (bladder TCC, cervix SCC, esophagus SCC/adenocarcinoma, kidney RCC, larynx SCC, lung SCC + small cell, oropharynx SCC, pancreas adenocarcinoma); ETHANOL → esophagus (SCC), liver (HCC), breast (breast cancer); IONIZING RADIATION → blood (leukemia), thyroid (papillary); NICKEL/CHROMIUM/BERYLLIUM/SILICA from occupational exposure → lung (lung cancer); NITROSAMINES from smoked foods → stomach (gastric cancer intestinal type); RADON from uranium decay in basements → lung (lung cancer, 2nd leading cause after tobacco smoke); VINYL CHLORIDE from PVC pipes → liver (hepatic angiosarcoma).",
  subject: "Pathology",
  system: "Section II · High-Yield General Principles — Pathology: Neoplasia",
  pilotCategory:
    "The carcinogen table's complete architecture — all 11 toxins (aflatoxins, alkylating agents, aromatic amines, arsenic, asbestos, tobacco smoke, ethanol, ionizing radiation, nickel/chromium/beryllium/silica, nitrosamines, radon, vinyl chloride), their exposure sources (stored grains, chemotherapy, textile dyes, herbicides, roofing/shipyards, tobacco, alcohol, radiation, occupational, smoked foods, uranium decay basements, PVC pipes), their target organs (liver, blood, bladder, lung, skin, cervix, esophagus, kidney, larynx, oropharynx, pancreas, breast, thyroid, stomach), and their cancer types (HCC, leukemia/lymphoma, TCC, angiosarcoma, SCC, bronchogenic carcinoma, mesothelioma, RCC, small cell, adenocarcinoma, papillary thyroid, gastric intestinal type).",
  difficulty: 2,
  readTime: 9,
  sourceRef:
    "First Aid 2026, Part 1 pp. 221 (Pathology — Neoplasia: Carcinogens — the TOXIN | EXPOSURE | ORGAN | IMPACT table with 11 entries: aflatoxins, alkylating agents, aromatic amines, arsenic, asbestos, tobacco smoke [8 organs], ethanol [3 organs], ionizing radiation [2 organs], nickel/chromium/beryllium/silica, nitrosamines, radon, vinyl chloride)",
  tags: [
    "chemical carcinogens",
    "toxins",
    "cancer exposures",
    "aflatoxins",
    "Aspergillus",
    "stored grains",
    "hepatocellular carcinoma",
    "alkylating agents",
    "chemotherapy",
    "leukemia",
    "lymphoma",
    "aromatic amines",
    "benzidine",
    "2-naphthylamine",
    "textile dyes",
    "transitional cell carcinoma",
    "bladder cancer",
    "arsenic",
    "herbicides",
    "vineyard workers",
    "metal smelting",
    "wood preservation",
    "hepatic angiosarcoma",
    "lung cancer",
    "squamous cell carcinoma",
    "skin cancer",
    "asbestos",
    "roofing material",
    "shipyard workers",
    "bronchogenic carcinoma",
    "mesothelioma",
    "tobacco smoke",
    "cervical cancer",
    "esophageal cancer",
    "renal cell carcinoma",
    "laryngeal cancer",
    "small cell lung cancer",
    "oropharyngeal cancer",
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
    "occupational exposure",
    "nitrosamines",
    "smoked foods",
    "gastric cancer",
    "intestinal type",
    "radon",
    "uranium decay",
    "basements",
    "vinyl chloride",
    "PVC pipes",
    "hepatic angiosarcoma",
  ],
  core: {
    what:
      "The 11-toxin CARCINOGEN table (TOXIN | EXPOSURE | ORGAN | IMPACT): AFLATOXINS (Aspergillus) — stored grains and nuts → LIVER → hepatocellular carcinoma. ALKYLATING AGENTS — oncologic chemotherapy → BLOOD → leukemia/lymphoma. AROMATIC AMINES (eg, benzidine, 2-naphthylamine) — textile industry (dyes), tobacco smoke (2-naphthylamine) → BLADDER → transitional cell carcinoma. ARSENIC — herbicides (vineyard workers), metal smelting, wood preservation → LIVER (hepatic angiosarcoma), LUNG (lung cancer), SKIN (squamous cell carcinoma). ASBESTOS — old roofing material, shipyard workers → LUNG → bronchogenic carcinoma > mesothelioma. TOBACCO SMOKE → 8 organs: BLADDER (transitional cell carcinoma), CERVIX (SCC), ESOPHAGUS (SCC/adenocarcinoma), KIDNEY (renal cell carcinoma), LARYNX (SCC), LUNG (squamous cell and small cell carcinoma), OROPHARYNX (SCC), PANCREAS (pancreatic adenocarcinoma). ETHANOL → ESOPHAGUS (SCC), LIVER (hepatocellular carcinoma), BREAST (breast cancer). IONIZING RADIATION → BLOOD (leukemia), THYROID (papillary thyroid carcinoma). NICKEL, CHROMIUM, BERYLLIUM, SILICA — occupational exposure → LUNG → lung cancer. NITROSAMINES — smoked foods → STOMACH → gastric cancer (intestinal type). RADON — byproduct of uranium decay, accumulates in basements → LUNG → lung cancer (2nd leading cause after tobacco smoke). VINYL CHLORIDE — used to make PVC pipes → LIVER → hepatic angiosarcoma.",
    why:
      "This page is the environmental and occupational pathology of cancer — the 11 toxins whose exposures predict specific organ cancers. The table's logic is exposure-to-organ-to-cancer-type: each toxin has a characteristic exposure (stored grains for aflatoxins, chemotherapy for alkylating agents, textile dyes for aromatic amines, herbicides/smelting/preservation for arsenic, roofing/shipyards for asbestos, tobacco smoke for 8 organs, alcohol for esophagus/liver/breast, radiation for blood/thyroid, occupational metals for lung, smoked foods for stomach, uranium-decay basements for radon, PVC manufacturing for vinyl chloride), and each toxin targets specific organs with specific cancer types. The two hepatic angiosarcoma causes (arsenic and vinyl chloride) are the classic exam pair — the liver's vascular endothelium is the shared target. Tobacco smoke's 8-organ list is the table's longest entry — tobacco is the most carcinogenic exposure by organ count. Radon is the second leading cause of lung cancer after tobacco smoke — the basement-accumulation rule names the residential exposure. And the asbestos rule (bronchogenic carcinoma > mesothelioma) corrects the common misconception that asbestos causes mesothelioma more than bronchogenic carcinoma — bronchogenic carcinoma is actually more common in asbestos-exposed workers, though mesothelioma is the more specific association.",
    keyIdea:
      "Read the carcinogen table through two axes. TOXIN AXIS — 11 named carcinogens: aflatoxins (Aspergillus, stored grains → liver HCC), alkylating agents (chemotherapy → blood leukemia/lymphoma), aromatic amines (benzidine/2-naphthylamine, textile dyes → bladder TCC), arsenic (herbicides/smelting/preservation → liver angiosarcoma + lung + skin SCC), asbestos (roofing/shipyards → lung bronchogenic > mesothelioma), tobacco smoke (8 organs: bladder TCC, cervix SCC, esophagus SCC/adenocarcinoma, kidney RCC, larynx SCC, lung SCC+small cell, oropharynx SCC, pancreas adenocarcinoma), ethanol (esophagus SCC + liver HCC + breast), ionizing radiation (blood leukemia + thyroid papillary), nickel/chromium/beryllium/silica (occupational → lung), nitrosamines (smoked foods → stomach intestinal type), radon (uranium decay basements → lung, 2nd after tobacco), vinyl chloride (PVC pipes → liver angiosarcoma). ORGAN AXIS — the two hepatic angiosarcoma causes are arsenic and vinyl chloride; the two bladder TCC causes are aromatic amines and tobacco smoke; tobacco smoke is the only 8-organ toxin; radon is the 2nd leading lung cancer cause after tobacco.",
  },
  mechanisms: [
    {
      id: "toxin-organ-axis",
      title: "The toxin-organ axis: 11 carcinogens and their target organs",
      context: "The carcinogen table (book 221)",
      flow: {
        nodes: [
          {
            id: "input",
            label: "An exposure occurs — which toxin and which organ?",
            sublabel:
              "Input — the carcinogen table maps 11 toxins to their target organs and cancer types. The toxin-organ axis is the first discriminator: name the toxin, then name the organ, then name the cancer type.",
            variant: "input",
          },
          {
            id: "liver",
            label: "LIVER toxins — aflatoxins, arsenic, vinyl chloride, ethanol",
            sublabel:
              "Aflatoxins (Aspergillus, stored grains) → HCC. Arsenic → hepatic angiosarcoma. Vinyl chloride (PVC pipes) → hepatic angiosarcoma. Ethanol → HCC. The two angiosarcoma causes (arsenic + vinyl chloride) are the classic exam pair.",
            variant: "process",
          },
          {
            id: "lung",
            label: "LUNG toxins — asbestos, tobacco, arsenic, radon, nickel/chromium/beryllium/silica",
            sublabel:
              "Asbestos → bronchogenic carcinoma > mesothelioma. Tobacco → squamous cell and small cell carcinoma. Arsenic → lung cancer. Radon → lung cancer (2nd leading cause after tobacco). Nickel/chromium/beryllium/silica → lung cancer (occupational).",
            variant: "process",
          },
          {
            id: "multi",
            label: "MULTI-ORGAN toxins — tobacco (8 organs), ethanol (3), arsenic (3), ionizing radiation (2)",
            sublabel:
              "Tobacco smoke leads with 8 organs (bladder, cervix, esophagus, kidney, larynx, lung, oropharynx, pancreas). Ethanol has 3 (esophagus, liver, breast). Arsenic has 3 (liver, lung, skin). Ionizing radiation has 2 (blood, thyroid).",
            variant: "process",
          },
          {
            id: "output",
            label: "Name the toxin, name the organ, name the cancer",
            sublabel:
              "Output — the 11-toxin table resolves any exposure-to-cancer question: identify the exposure, map to the toxin, then map to the organ and cancer type. The two angiosarcoma causes (arsenic + vinyl chloride) and the 8-organ tobacco list are the highest-yield facts.",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "liver", label: "liver toxins" },
          { from: "input", to: "lung", label: "lung toxins" },
          { from: "input", to: "multi", label: "multi-organ toxins" },
          { from: "liver", to: "output", label: "HCC / angiosarcoma" },
          { from: "lung", to: "output", label: "bronchogenic / SCC / small cell" },
          { from: "multi", to: "output", label: "tobacco 8 / ethanol 3 / arsenic 3 / radiation 2" },
        ],
      },
    },
    {
      id: "exposure-route-axis",
      title: "The exposure-route axis: occupational, dietary, iatrogenic, and environmental sources",
      context: "The EXPOSURE column of the carcinogen table (book 221)",
      flow: {
        nodes: [
          {
            id: "input",
            label: "A patient's exposure history — which route?",
            sublabel:
              "Input — the exposure column names the source for each toxin. The exposure-route axis organizes the 11 toxins by source category.",
            variant: "input",
          },
          {
            id: "occupational",
            label: "OCCUPATIONAL — asbestos, aromatic amines, nickel/chromium/beryllium/silica, vinyl chloride",
            sublabel:
              "Asbestos: old roofing material, shipyard workers. Aromatic amines: textile industry (dyes). Nickel/chromium/beryllium/silica: occupational exposure. Vinyl chloride: PVC pipe manufacturing. The occupational exposures are the workplace-cancer roll call.",
            variant: "process",
          },
          {
            id: "dietary",
            label: "DIETARY — aflatoxins, nitrosamines",
            sublabel:
              "Aflatoxins: stored grains and nuts (Aspergillus contamination). Nitrosamines: smoked foods. The dietary exposures are the food-contamination pair.",
            variant: "process",
          },
          {
            id: "environmental",
            label: "ENVIRONMENTAL — radon, arsenic, ionizing radiation",
            sublabel:
              "Radon: byproduct of uranium decay, accumulates in basements (residential). Arsenic: herbicides (vineyard workers), metal smelting, wood preservation. Ionizing radiation: environmental or therapeutic. The environmental exposures are the residential and agricultural exposures.",
            variant: "process",
          },
          {
            id: "iatrogenic",
            label: "IATROGENIC / LIFESTYLE — alkylating agents, tobacco smoke, ethanol",
            sublabel:
              "Alkylating agents: oncologic chemotherapy (the treatment causes cancer). Tobacco smoke: the 8-organ lifestyle carcinogen. Ethanol: the 3-organ lifestyle carcinogen. The iatrogenic and lifestyle exposures close the table.",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "occupational", label: "workplace" },
          { from: "input", to: "dietary", label: "food" },
          { from: "input", to: "environmental", label: "residential" },
          { from: "input", to: "iatrogenic", label: "treatment + lifestyle" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "carcinogen-organ-map",
      title: "The carcinogen-organ map (an original KYP adaptation)",
      caption:
        "An original KYP adaptation of the source page (book 221): the 11-toxin grid arranged by organ target — the liver toxins (aflatoxins → HCC, arsenic + vinyl chloride → hepatic angiosarcoma, ethanol → HCC), the lung toxins (asbestos → bronchogenic > mesothelioma, tobacco → SCC + small cell, arsenic + radon + nickel/chromium/beryllium/silica → lung cancer), the multi-organ toxins (tobacco 8 organs, ethanol 3, arsenic 3, ionizing radiation 2), and the single-organ toxins (alkylating agents → blood, aromatic amines → bladder, nitrosamines → stomach). The two hepatic angiosarcoma causes (arsenic + vinyl chloride) are highlighted as the classic exam pair, and the asbestos rule (bronchogenic > mesothelioma) and the radon rule (2nd leading cause after tobacco) are called out.",
      notice:
        "Census (pdfimages + VLM): NO raster images on the page (pdfimages -list returned zero rows for pdf 243). The page is a single pure-text table — TOXIN | EXPOSURE | ORGAN | IMPACT — with 11 toxin entries. The visual is an ORIGINAL KYP adaptation rendering the table as a toxin-organ-impact grid map (no source figure to redraw). The table is carried verbatim in this note's table block. No copyrighted photographs exist on the page; nothing reproduced. No margin mnemonics (VLM confirmed); the KYP memory layer stays original.",
    },
    {
      kind: "table",
      title: "Book 221 — the carcinogen table (carried verbatim)",
      intro: "The 11 toxins, their exposures, their target organs, and their cancer types, as printed.",
      columns: ["TOXIN", "EXPOSURE", "ORGAN", "IMPACT"],
      rows: [
        ["Aflatoxins (Aspergillus)", "Stored grains and nuts", "Liver", "Hepatocellular carcinoma"],
        ["Alkylating agents", "Oncologic chemotherapy", "Blood", "Leukemia/lymphoma"],
        ["Aromatic amines (eg, benzidine, 2-naphthylamine)", "Textile industry (dyes), tobacco smoke (2-naphthylamine)", "Bladder", "Transitional cell carcinoma"],
        ["Arsenic", "Herbicides (vineyard workers), metal smelting, wood preservation", "Liver / Lung / Skin", "Hepatic angiosarcoma / Lung cancer / Squamous cell carcinoma"],
        ["Asbestos", "Old roofing material, shipyard workers", "Lung", "Bronchogenic carcinoma > mesothelioma"],
        ["Tobacco smoke", "(tobacco smoke)", "Bladder / Cervix / Esophagus / Kidney / Larynx / Lung / Oropharynx / Pancreas", "Transitional cell carcinoma / SCC / SCC/adenocarcinoma / Renal cell carcinoma / SCC / Squamous cell and small cell carcinoma / SCC / Pancreatic adenocarcinoma"],
        ["Ethanol", "(ethanol)", "Esophagus / Liver / Breast", "Squamous cell carcinoma / Hepatocellular carcinoma / Breast cancer"],
        ["Ionizing radiation", "(ionizing radiation)", "Blood / Thyroid", "Leukemia / Papillary thyroid carcinoma"],
        ["Nickel, chromium, beryllium, silica", "Occupational exposure", "Lung", "Lung cancer"],
        ["Nitrosamines", "Smoked foods", "Stomach", "Gastric cancer (intestinal type)"],
        ["Radon", "Byproduct of uranium decay, accumulates in basements", "Lung", "Lung cancer (2nd leading cause after tobacco smoke)"],
        ["Vinyl chloride", "Used to make PVC pipes", "Liver", "Hepatic angiosarcoma"],
      ],
      caption:
        "11 toxins, 4 columns. The two hepatic angiosarcoma causes (arsenic + vinyl chloride) are the classic exam pair. Tobacco smoke leads with 8 organs. Radon is the 2nd leading cause of lung cancer after tobacco. Asbestos causes bronchogenic carcinoma more than mesothelioma (the common misconception). And the occupational exposures (asbestos, aromatic amines, nickel/chromium/beryllium/silica, vinyl chloride) are the workplace-cancer roll call.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem:
          "A 55-year-old man who has worked in a polyvinyl chloride (PVC) pipe manufacturing plant for 25 years presents with right-upper-quadrant pain, weight loss, and elevated alkaline phosphatase; a liver biopsy shows a malignant vascular tumor.",
        discriminator:
          "Vinyl chloride → hepatic angiosarcoma (the PVC pipe manufacturing exposure)",
        concept: "The vinyl chloride / hepatic angiosarcoma axis",
        answer:
          "The carcinogen table's vinyl chloride row: vinyl chloride (used to make PVC pipes) → liver → hepatic angiosarcoma. The 25-year occupational exposure in a PVC pipe plant is the classic exposure history, and the malignant vascular tumor (angiosarcoma) is the characteristic cancer type. The other cause of hepatic angiosarcoma on the table is arsenic — the two are the classic exam pair for this rare liver cancer.",
      },
      {
        stem:
          "A 60-year-old man with a 40-pack-year smoking history presents with painless hematuria; cystoscopy reveals a transitional cell carcinoma of the bladder.",
        discriminator:
          "Tobacco smoke → bladder transitional cell carcinoma (and aromatic amines are the other cause)",
        concept: "The bladder TCC axis",
        answer:
          "The carcinogen table's tobacco smoke row lists bladder → transitional cell carcinoma among its 8 organs, and the aromatic amines row (benzidine, 2-naphthylamine from textile dyes and tobacco smoke) also causes bladder TCC. The two causes of bladder TCC on the table are tobacco smoke and aromatic amines — the 40-pack-year history names tobacco as the exposure here. The other tobacco-smoke organs (cervix SCC, esophagus SCC/adenocarcinoma, kidney RCC, larynx SCC, lung SCC + small cell, oropharynx SCC, pancreas adenocarcinoma) complete the 8-organ list.",
      },
      {
        stem:
          "A 70-year-old man who recently retired from a 40-year career as a shipyard worker presents with progressive dyspnea and chest pain; CT shows a pleural-based mass, and a biopsy confirms mesothelioma.",
        discriminator:
          "Asbestos → bronchogenic carcinoma > mesothelioma (mesothelioma is the more specific but NOT the more common association)",
        concept: "The asbestos / lung cancer axis",
        answer:
          "The carcinogen table's asbestos row: asbestos (old roofing material, shipyard workers) → lung → bronchogenic carcinoma > mesothelioma. The shipyard work is the classic exposure, and mesothelioma is the specific association — but the table's printed rule is that bronchogenic carcinoma is actually MORE COMMON than mesothelioma in asbestos-exposed workers (the > sign). The common misconception is that asbestos causes mesothelioma more than bronchogenic carcinoma; the table corrects this. The 40-year shipyard career and the pleural-based mass fit the mesothelioma presentation, but bronchogenic carcinoma would be statistically more likely.",
      },
    ],
    traps: [
      {
        a: "Hepatic angiosarcoma from arsenic",
        b: "Hepatic angiosarcoma from vinyl chloride",
        whyConfused: "Both cause the same rare liver cancer (hepatic angiosarcoma)",
        keyDifference:
          "ARSENIC exposure is herbicides (vineyard workers), metal smelting, wood preservation — an agricultural/industrial exposure. VINYL CHLORIDE exposure is PVC pipe manufacturing — a specific industrial exposure. Both target the liver's vascular endothelium (angiosarcoma), but the exposure histories differ.",
        clue:
          "Vineyard/herbicide/smelting/wood preservation = arsenic; PVC pipe manufacturing = vinyl chloride — the exposure names the toxin, and both cause hepatic angiosarcoma",
      },
      {
        a: "Asbestos causes mesothelioma",
        b: "Asbestos causes bronchogenic carcinoma",
        whyConfused: "Both are asbestos-associated lung cancers",
        keyDifference:
          "The table's printed rule is 'Bronchogenic carcinoma > mesothelioma' — bronchogenic carcinoma is MORE COMMON than mesothelioma in asbestos-exposed workers. Mesothelioma is the more SPECIFIC association (asbestos is the dominant cause of mesothelioma), but bronchogenic carcinoma is the more COMMON cancer in asbestos-exposed workers (especially with tobacco co-exposure).",
        clue:
          "The > sign in 'Bronchogenic carcinoma > mesothelioma' means bronchogenic is more common; mesothelioma is more specific but not more common",
      },
      {
        a: "Tobacco smoke causes lung cancer",
        b: "Tobacco smoke causes bladder cancer",
        whyConfused: "Both are tobacco-smoke-associated cancers",
        keyDifference:
          "Tobacco smoke causes 8 organ cancers: bladder (TCC), cervix (SCC), esophagus (SCC/adenocarcinoma), kidney (RCC), larynx (SCC), lung (SCC + small cell), oropharynx (SCC), pancreas (adenocarcinoma). Lung is the most well-known, but bladder TCC is the second-most-common tobacco cancer and the most tested non-lung association.",
        clue:
          "Tobacco smoke is the 8-organ carcinogen — bladder TCC and pancreatic adenocarcinoma are the highest-yield non-lung associations",
      },
      {
        a: "Radon (2nd leading cause of lung cancer)",
        b: "Tobacco smoke (1st leading cause of lung cancer)",
        whyConfused: "Both are lung cancer causes",
        keyDifference:
          "TOBACCO SMOKE is the #1 cause of lung cancer. RADON is the #2 cause — the table's printed note: 'Lung cancer (2nd leading cause after tobacco smoke).' Radon is a byproduct of uranium decay that accumulates in basements (residential exposure). The two are the leading lung cancer causes in order.",
        clue:
          "Radon = 2nd leading cause (after tobacco); uranium decay in basements = the residential exposure",
      },
    ],
    pivots: [
      {
        lookAlike: "An exposure history — which toxin and which organ cancer?",
        differentiator:
          "Map the exposure to the toxin, then to the organ: stored grains → aflatoxins → liver HCC; chemotherapy → alkylating agents → blood leukemia; textile dyes → aromatic amines → bladder TCC; herbicides/smelting/preservation → arsenic → liver angiosarcoma + lung + skin; roofing/shipyards → asbestos → lung bronchogenic > mesothelioma; tobacco → 8 organs; alcohol → esophagus/liver/breast; radiation → blood/thyroid; occupational metals → lung; smoked foods → nitrosamines → stomach; uranium-decay basements → radon → lung (2nd after tobacco); PVC pipes → vinyl chloride → liver angiosarcoma.",
        correctPath:
          "Name the exposure, then name the toxin, then name the organ and cancer — the 11-toxin table resolves any exposure-to-cancer question",
      },
      {
        lookAlike: "A liver cancer — which toxin?",
        differentiator:
          "HCC = aflatoxins (Aspergillus, stored grains) or ethanol; HEPATIC ANGIOSARCOMA = arsenic or vinyl chloride (the classic pair). The cancer type names the toxin family: HCC = dietary/alcohol; angiosarcoma = industrial (arsenic/vinyl chloride).",
        correctPath:
          "HCC → aflatoxins or ethanol; hepatic angiosarcoma → arsenic or vinyl chloride — the cancer type narrows the toxin",
      },
    ],
    miniCase: {
      vignette:
        "A 58-year-old man presents with 3 months of progressive right-upper-quadrant pain, 15-lb weight loss, and early satiety. He has worked in a polyvinyl chloride (PVC) pipe manufacturing plant for 28 years. Laboratory studies show elevated alkaline phosphatase and GGT with normal bilirubin. CT shows a large, heterogeneously enhancing liver mass with areas of necrosis; biopsy reveals a malignant proliferation of atypical endothelial cells forming irregular vascular channels that stain positive for CD31 and CD34.",
      question:
        "Name the toxin, the exposure, the target organ, and the cancer type, and identify the other toxin on the same page that causes the same cancer.",
      options: [
        {
          label:
            "Vinyl chloride (used to make PVC pipes) → liver → hepatic angiosarcoma. The 28-year PVC plant exposure is the classic occupational history, and the CD31/CD34-positive atypical endothelial cells forming vascular channels is the angiosarcoma histology. The OTHER toxin on the same page that causes hepatic angiosarcoma is ARSENIC (herbicides, vineyard workers, metal smelting, wood preservation) — the two are the classic exam pair for this rare liver cancer.",
          text: "Vinyl chloride from PVC pipes → hepatic angiosarcoma; arsenic is the other cause.",
          correct: true,
          why:
            "Correct on all four layers. (1) THE TOXIN: vinyl chloride — the table's printed row: 'Vinyl chloride / Used to make PVC pipes / LiVer / Hepatic angiosarcoma.' The 28-year PVC pipe manufacturing exposure is the classic occupational history. (2) THE EXPOSURE: 'Used to make PVC pipes' — the occupational PVC manufacturing exposure. (3) THE ORGAN: liver — the table's printed organ for vinyl chloride. (4) THE CANCER TYPE: hepatic angiosarcoma — the malignant vascular tumor of the liver's endothelial cells. The CD31 and CD34 positivity (endothelial cell markers) and the irregular vascular channel formation confirm the angiosarcoma histology. The OTHER toxin on the same page that causes hepatic angiosarcoma is ARSENIC — the table's arsenic row lists liver → hepatic angiosarcoma as one of its three organ impacts (along with lung → lung cancer and skin → SCC). The arsenic exposure is herbicides (vineyard workers), metal smelting, and wood preservation — a different exposure route but the same liver cancer. The arsenic + vinyl chloride pair is the classic exam association for hepatic angiosarcoma.",
        },
        {
          label:
            "Aflatoxins (Aspergillus) from stored grains and nuts → liver → hepatocellular carcinoma. The PVC plant exposure is incidental; the cancer is HCC from dietary aflatoxin contamination.",
          text: "Aflatoxins → HCC; the PVC exposure is a red herring.",
          why:
            "Wrong cancer type: the biopsy shows a malignant proliferation of atypical ENDOTHELIAL cells forming vascular channels (CD31/CD34-positive) — this is ANGIOSARCOMA (a vascular tumor), not hepatocellular carcinoma (a hepatocyte tumor). Aflatoxins cause HCC (the hepatocyte cancer), not angiosarcoma (the endothelial cancer). The 28-year PVC plant exposure is the relevant occupational history, not a red herring — vinyl chloride is the table's named cause of hepatic angiosarcoma. The CD31/CD34 positivity is the endothelial marker that distinguishes angiosarcoma from HCC.",
        },
        {
          label:
            "Asbestos from old roofing material → lung → bronchogenic carcinoma. The PVC plant also had asbestos roofing; the liver mass is a metastasis from the primary lung cancer",
          text: "Asbestos → bronchogenic carcinoma; the liver mass is a metastasis.",
          why:
            "Wrong toxin and wrong cancer: the biopsy shows a PRIMARY liver tumor (atypical endothelial cells forming vascular channels = angiosarcoma), not a metastasis from a lung primary. Asbestos causes lung cancer (bronchogenic carcinoma > mesothelioma), not liver angiosarcoma. And the table's arsenic row, not the asbestos row, is the one that causes hepatic angiosarcoma (along with vinyl chloride). The 28-year PVC plant exposure is the relevant history — vinyl chloride is the named cause of hepatic angiosarcoma, and the CD31/CD34-positive endothelial tumor confirms it.",
        },
        {
          label:
            "Arsenic from herbicides and wood preservation → liver → hepatic angiosarcoma. The patient also does woodworking as a hobby; the PVC plant exposure is incidental",
          text: "Arsenic from wood preservation → hepatic angiosarcoma; the PVC is incidental.",
          why:
            "Wrong toxin for this exposure: while arsenic DOES cause hepatic angiosarcoma (the table's arsenic row), the stem's exposure is 28 years in a PVC pipe manufacturing plant — the vinyl chloride exposure, not the arsenic exposure. Arsenic's exposure is herbicides (vineyard workers), metal smelting, and wood preservation — none of which are in the stem. The PVC plant is the table's specific exposure for vinyl chloride. The cancer type (hepatic angiosarcoma) is correct for both arsenic and vinyl chloride, but the exposure names the toxin: PVC = vinyl chloride; herbicides/smelting/preservation = arsenic.",
        },
        {
          label:
            "Thorotrast (historical contrast agent) → liver → hepatic angiosarcoma. The PVC exposure is a modern equivalent; the table's vinyl chloride entry is outdated",
          text: "Thorotrast → hepatic angiosarcoma; the table is outdated.",
          why:
            "Wrong toxin and not on the table: Thorotrast (a historical radioactive contrast agent) is indeed a cause of hepatic angiosarcoma, but it is NOT on the printed carcinogen table (which lists only arsenic and vinyl chloride as the hepatic angiosarcoma causes). The table's vinyl chloride entry is current and relevant — the 28-year PVC plant exposure is the named occupational history. The question asks for the toxin ON THE SAME PAGE that causes the same cancer, and the table's two entries are arsenic and vinyl chloride (not Thorotrast). The CD31/CD34-positive endothelial tumor confirms angiosarcoma, and the PVC exposure names vinyl chloride as the toxin.",
        },
      ],
      reasoning:
        "The stem walks the vinyl chloride row end to end. (1) THE TOXIN: vinyl chloride — the table's printed row 'Vinyl chloride / Used to make PVC pipes / LiVer / Hepatic angiosarcoma.' The 28-year PVC plant exposure is the classic occupational history. (2) THE CANCER TYPE: hepatic angiosarcoma — the CD31/CD34-positive atypical endothelial cells forming irregular vascular channels is the angiosarcoma histology (a vascular tumor, not a hepatocyte tumor like HCC). (3) THE ORGAN: liver — the table's printed organ. (4) THE OTHER TOXIN: arsenic — the table's arsenic row also lists liver → hepatic angiosarcoma (along with lung → lung cancer and skin → SCC). The distractors fail at: aflatoxins (cause HCC, not angiosarcoma — wrong cancer type), asbestos (causes lung cancer, not liver angiosarcoma — wrong organ), arsenic (causes angiosarcoma but the exposure is herbicides/smelting/preservation, not PVC — wrong exposure for this stem), and Thorotrast (causes angiosarcoma but is NOT on the printed table — the question asks for the toxin on the same page).",
    },
  },
  mnemonics: [
    {
      code: "LIVER ANGIOSARCOMA = ARSENIC + VINYL CHLORIDE",
      meaning:
        "The two causes of hepatic angiosarcoma on the carcinogen table: ARSENIC (herbicides, vineyard workers, metal smelting, wood preservation) and VINYL CHLORIDE (used to make PVC pipes). Both target the liver's vascular endothelium. The two are the classic exam pair — name either exposure, and the cancer is hepatic angiosarcoma.",
      memorizes: "The two hepatic angiosarcoma causes",
      whenToUse: "Any hepatic angiosarcoma question — name the two toxins",
      clinical:
        "Arsenic (herbicides/smelting/preservation) and vinyl chloride (PVC pipes) — the two hepatic angiosarcoma causes. The exposure names the toxin.",
    },
    {
      code: "TOBACCO = EIGHT ORGANS",
      meaning:
        "Tobacco smoke is the 8-organ carcinogen: BLADDER (TCC), CERVIX (SCC), ESOPHAGUS (SCC/adenocarcinoma), KIDNEY (RCC), LARYNX (SCC), LUNG (SCC + small cell), OROPHARYNX (SCC), PANCREAS (adenocarcinoma). The longest organ list on the table — tobacco is the most carcinogenic exposure by organ count.",
      memorizes: "Tobacco smoke's 8 organ cancers",
      whenToUse: "Any tobacco-smoke cancer question — list the 8 organs",
      clinical:
        "Bladder TCC and pancreatic adenocarcinoma are the highest-yield non-lung tobacco associations; the 8-organ list makes tobacco the table's most carcinogenic exposure.",
    },
    {
      code: "RADON = BASEMENT URANIUM, 2ND TO TOBACCO",
      meaning:
        "Radon is the 2nd leading cause of lung cancer after tobacco smoke. The exposure: byproduct of uranium decay, accumulates in basements (residential). The table's printed note: 'Lung cancer (2nd leading cause after tobacco smoke).' The basement-accumulation rule names the residential exposure.",
      memorizes: "Radon's exposure and rank",
      whenToUse: "Any radon or residential-lung-cancer question",
      clinical:
        "Radon = uranium decay in basements = 2nd leading lung cancer cause (after tobacco). The residential exposure is the basement-accumulation rule.",
    },
    {
      code: "NITROSAMINES = SMOKED FOODS → STOMACH",
      meaning:
        "Nitrosamines from smoked foods cause gastric cancer (intestinal type). The dietary exposure (smoked foods) and the stomach target (intestinal type gastric cancer) are the table's printed pair. Nitrosamines are the food-preservation carcinogen — the smoked/cured/nitrite-preserved food chain.",
      memorizes: "The nitrosamine / stomach cancer axis",
      whenToUse: "Any gastric cancer or smoked-foods exposure question",
      clinical:
        "Smoked foods → nitrosamines → stomach → gastric cancer (intestinal type). The dietary carcinogen for stomach cancer.",
    },
  ],
  rapidReview: {
    s30: [
      "Aflatoxins (Aspergillus) — stored grains and nuts — liver — hepatocellular carcinoma",
      "Alkylating agents — oncologic chemotherapy — blood — leukemia/lymphoma",
      "Aromatic amines (benzidine, 2-naphthylamine) — textile dyes, tobacco smoke — bladder — transitional cell carcinoma",
      "Arsenic — herbicides (vineyard workers), metal smelting, wood preservation — liver (hepatic angiosarcoma), lung (lung cancer), skin (SCC)",
      "Asbestos — old roofing, shipyard workers — lung — bronchogenic carcinoma > mesothelioma",
      "Tobacco smoke — 8 organs: bladder (TCC), cervix (SCC), esophagus (SCC/adenocarcinoma), kidney (RCC), larynx (SCC), lung (SCC + small cell), oropharynx (SCC), pancreas (adenocarcinoma)",
      "Ethanol — esophagus (SCC), liver (HCC), breast (breast cancer)",
      "Ionizing radiation — blood (leukemia), thyroid (papillary thyroid carcinoma)",
      "Nickel, chromium, beryllium, silica — occupational exposure — lung — lung cancer",
      "Nitrosamines — smoked foods — stomach — gastric cancer (intestinal type)",
      "Radon — uranium decay, basements — lung — lung cancer (2nd leading cause after tobacco smoke)",
      "Vinyl chloride — PVC pipes — liver — hepatic angiosarcoma",
    ],
    m3: [
      "LIVER ANGIOSARCOMA = ARSENIC + VINYL CHLORIDE — the two toxins that cause the rare liver vascular cancer",
      "TOBACCO = EIGHT ORGANS — bladder TCC, cervix SCC, esophagus SCC/adenocarcinoma, kidney RCC, larynx SCC, lung SCC+small cell, oropharynx SCC, pancreas adenocarcinoma",
      "RADON = BASEMENT URANIUM, 2ND TO TOBACCO — radon is the 2nd leading lung cancer cause after tobacco; uranium decay accumulates in basements",
      "NITROSAMINES = SMOKED FOODS → STOMACH (intestinal type gastric cancer)",
      "Asbestos causes bronchogenic carcinoma > mesothelioma (bronchogenic is MORE COMMON, mesothelioma is more SPECIFIC)",
    ],
    m10: [
      "The two hepatic angiosarcoma causes (arsenic + vinyl chloride) target the liver's vascular endothelium — the CD31/CD34-positive endothelial tumor",
      "Aflatoxins (Aspergillus from stored grains) and ethanol both cause HCC (the hepatocyte cancer) — distinct from the angiosarcoma pair",
      "Tobacco smoke is the table's only 8-organ carcinogen; the bladder TCC and pancreatic adenocarcinoma associations are the highest-yield non-lung facts",
      "Radon's basement-accumulation rule is the residential exposure — uranium decay seeps into basements as a residential lung cancer risk",
      "The occupational exposures: asbestos (roofing/shipyards), aromatic amines (textile dyes), nickel/chromium/beryllium/silica (occupational metals), vinyl chloride (PVC pipes) — the workplace-cancer roll call",
    ],
  },
  recall: [
    {
      q: "The aflatoxins, alkylating agents, and aromatic amines rows verbatim.",
      a: "AFLATOXINS (Aspergillus) / Stored grains and nuts / Liver / Hepatocellular carcinoma. ALKYLATING AGENTS / Oncologic chemotherapy / Blood / Leukemia/lymphoma. AROMATIC AMINES (eg, benzidine, 2-naphthylamine) / Textile industry (dyes), tobacco smoke (2-naphthylamine) / Bladder / Transitional cell carcinoma.",
    },
    {
      q: "The arsenic and asbestos rows verbatim.",
      a: "ARSENIC / Herbicides (vineyard workers), metal smelting, wood preservation / Liver (Hepatic angiosarcoma), Lung (Lung cancer), Skin (Squamous cell carcinoma). ASBESTOS / Old roofing material, shipyard workers / Lung / Bronchogenic carcinoma > mesothelioma.",
    },
    {
      q: "The tobacco smoke row verbatim — all 8 organs and their cancer types.",
      a: "TOBACCO SMOKE / (tobacco smoke) / Bladder (Transitional cell carcinoma), Cervix (Squamous cell carcinoma), Esophagus (Squamous cell carcinoma/adenocarcinoma), Kidney (Renal cell carcinoma), Larynx (Squamous cell carcinoma), Lung (Squamous cell and small cell carcinoma), Oropharynx (Squamous cell carcinoma), Pancreas (Pancreatic adenocarcinoma).",
    },
    {
      q: "The ethanol, ionizing radiation, nickel/chromium/beryllium/silica, and nitrosamines rows verbatim.",
      a: "ETHANOL / (ethanol) / Esophagus (Squamous cell carcinoma), Liver (Hepatocellular carcinoma), Breast (Breast cancer). IONIZING RADIATION / (ionizing radiation) / Blood (Leukemia), Thyroid (Papillary thyroid carcinoma). NICKEL, CHROMIUM, BERYLLIUM, SILICA / Occupational exposure / Lung / Lung cancer. NITROSAMINES / Smoked foods / Stomach / Gastric cancer (intestinal type).",
    },
    {
      q: "The radon and vinyl chloride rows verbatim.",
      a: "RADON / Byproduct of uranium decay, accumulates in basements / Lung / Lung cancer (2nd leading cause after tobacco smoke). VINYL CHLORIDE / Used to make PVC pipes / LiVer / Hepatic angiosarcoma.",
    },
  ],
  related: [
    {
      title: "Hallmarks of Cancer",
      topicId: "cancer-hallmarks",
      note: "The carcinogens are the environmental mutagens that drive hallmark 1's DNA mutations: aflatoxins cause TP53 mutations (HCC), alkylating agents cause DNA crosslinks (leukemia), aromatic amines cause DNA adducts (bladder TCC), UV radiation causes pyrimidine dimers (skin SCC), and ionizing radiation causes double-strand breaks (leukemia, thyroid). Each toxin's cancer type reflects the mutational signature in the target organ.",
    },
    {
      title: "Neoplasia Nomenclature & Progression",
      topicId: "neoplasia-nomenclature",
      note: "The carcinogen table's cancer types are the nomenclature page's named malignancies: hepatocellular carcinoma (epithelial, carcinoma), transitional cell carcinoma (epithelial, carcinoma), squamous cell carcinoma (epithelial, carcinoma), renal cell carcinoma (epithelial, carcinoma), adenocarcinoma (epithelial, carcinoma), angiosarcoma (mesenchymal, sarcoma — the blood vessel breaker), mesothelioma (the serosal malignancy), leukemia/lymphoma (the blood cell breakers). The nomenclature page names the tissue of origin; this page names the toxin that causes each.",
    },
    {
      title: "Oncogenes & Tumor Suppressors",
      topicId: "oncogenes-tumor-suppressors",
      note: "The carcinogens produce the mutations in the oncogenes and tumor suppressors: aflatoxins cause TP53 mutations (HCC), vinyl chloride causes TP53 and HRAS mutations (angiosarcoma), arsenic causes TP53 and KRAS mutations (multiple cancers), UV radiation causes TP53 and RAS mutations (skin cancer), and ionizing radiation causes double-strand breaks that inactivate tumor suppressors across the genome. The carcinogen → mutation → gene → cancer chain links this page to the oncogene/suppressor page.",
    },
    {
      title: "Metastasis: Organ Patterns & Routes",
      topicId: "metastasis-patterns",
      note: "The carcinogen table's organ cancers are the primary tumors that produce the metastasis patterns: lung cancer (tobacco, asbestos, radon, arsenic, nickel/chromium/beryllium/silica) metastasizes to brain and bone; liver cancer (aflatoxins, ethanol, arsenic, vinyl chloride) metastasizes less commonly (the liver is more often a metastasis target than a primary site); pancreatic adenocarcinoma (tobacco) metastasizes to liver; bladder TCC (tobacco, aromatic amines) metastasizes to lung and bone. The carcinogen page names the primary; the metastasis page names the spread.",
    },
  ],
  crossLinks: [
    {
      subject: "Public health (cancer prevention and screening)",
      connection:
        "The carcinogen table is the public-health page's cancer-prevention framework: tobacco cessation (8 organs), alcohol moderation (esophagus, liver, breast), radon residential testing (basements), occupational safety (asbestos, aromatic amines, nickel/chromium/beryllium/silica, vinyl chloride), and food safety (aflatoxins in stored grains, nitrosamines in smoked foods). Each toxin's exposure has a corresponding public-health intervention.",
    },
    {
      subject: "Pathology (cancer histology by organ)",
      connection:
        "The carcinogen table's cancer types are the pathology page's organ-specific histologies: HCC (the hepatocyte cancer, aflatoxins/ethanol), hepatic angiosarcoma (the endothelial cancer, arsenic/vinyl chloride), transitional cell carcinoma (the urothelial cancer, aromatic amines/tobacco), squamous cell carcinoma (the squamous epithelial cancer, tobacco/arsenic/radiation), renal cell carcinoma (the renal tubular cancer, tobacco), adenocarcinoma (the glandular cancer, tobacco/pancreas), and mesothelioma (the serosal cancer, asbestos). Each toxin produces a characteristic histology in its target organ.",
    },
    {
      subject: "Occupational medicine (workplace carcinogens)",
      connection:
        "The occupational exposures are the occupational-medicine page's workplace-cancer roll call: asbestos (roofing, shipyards), aromatic amines (textile dyes), nickel/chromium/beryllium/silica (metal refining, mining, construction), vinyl chloride (PVC manufacturing), arsenic (smelting, wood preservation), and radon (uranium mining, basement accumulation). Each has a corresponding OSHA regulation and workplace exposure limit.",
    },
    {
      subject: "Genetics (mutational signatures by carcinogen)",
      connection:
        "Each carcinogen has a characteristic mutational signature: aflatoxins cause TP53 codon 249 mutations (HCC), aromatic amines cause TP53 and RAS mutations (bladder TCC), UV radiation causes CC→TT dipyrimidine dimers (skin SCC), ionizing radiation causes double-strand breaks and large deletions (leukemia, thyroid), and alkylating agents cause O6-alkylguanine adducts (leukemia/lymphoma). The mutational signature names the carcinogen.",
    },
  ],
};
