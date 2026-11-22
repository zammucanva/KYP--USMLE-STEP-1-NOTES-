import type { KypUsMLENote } from "../types";

// Pathology — CELLULAR INJURY banner (P-batch 6). Source: pdf 229 /
// book 207 (Calcification & radiation injury — the radiation
// susceptibility and dermatitis blocks, ionizing radiation toxicity
// with acute radiation syndrome, the Dystrophic-vs-Metastatic
// calcification table, and the psammoma bodies block). Census:
// pdfimages reports TWO cmyk JPEG rasters (~188x184 and ~188x188 at
// 150 dpi), BOTH lettered 'A' (another duplicated-lettering quirk,
// documented): A#1 = an H&E micrograph of dystrophic calcification
// (a large amorphous deeply basophilic purple deposit with a black
// arrow), sitting in the table's dystrophic column; A#2 = an H&E
// micrograph of psammoma bodies (small round concentrically
// laminated calcified spherules, onion-skin, with a red arrow),
// below the table beside the psammoma block. BOTH COPYRIGHTED —
// described-in-text only, NEVER reproduced (the M32 convention).
// The source prints its own mnemonic 'PSoMMOMa Bodies.' (raw 98)
// beside the psammoma list — carried VERBATIM in this note's tables
// per the E38 precedent (Papillary thyroid/kidney, Somatostatinoma,
// Meningioma, Mesothelioma, Ovarian serous, Milk-prolactinoma); the
// KYP memory layer stays original. NO other margin notes or
// mnemonics (VLM confirmed).

export const calcificationRadiationInjury: KypUsMLENote = {
  id: "calcification-radiation-injury",
  title: "Calcification & Radiation Injury",
  subtitle:
    "Where calcium lands and why, and what ionizing radiation does on its way through (book 207). RADIATION — stem cells of rapidly regenerating tissues (skin, bone marrow, GI tract, gonads) are the most susceptible; radiotherapy damages cancer cells more because they have dysfunctional DNA repair mechanisms in addition to high replicative rates; radiation dermatitis is acute (erythema, peeling, pain, pruritis) or chronic (atrophy, pigmentation changes, telangiectasia, fibrosis due to ↑ TGF-β). IONIZING TOXICITY — DNA double-strand breaks and cellular damage directly and indirectly through free radicals; complications (localized inflammation and fibrosis; neoplasia — leukemia, thyroid cancer); acute radiation syndrome after sudden whole-body high-dose exposure (nausea, vomiting, diarrhea, hair loss, erythema, cytopenias, headache, altered mental status). THE CALCIFICATION SPLIT — DYSTROPHIC: Ca2+ in abnormal (diseased) tissues, localized, 2° to injury or necrosis (TB and granulomatous infections, chronic abscesses, fat necrosis, infarcts, thrombi, schistosomiasis, congenital CMV/toxoplasmosis/rubella, psammoma bodies, CREST, atherosclerotic plaques); METASTATIC: Ca2+ in normal tissues, widespread, 2° to hyperphosphatemia (CKD) or hypercalcemia (1° hyperparathyroidism, sarcoidosis, hypervitaminosis D), targeting the interstitial kidney, lung, and gastric mucosa (tissues that lose acid quickly; ↑ pH favors Ca2+ deposition), with nephrocalcinosis of collecting ducts → nephrogenic DI and renal failure. PSAMMOMA BODIES — concentrically laminated calcified spherules, deeply basophilic on H&E, in papillary thyroid and kidney carcinoma, somatostatinoma, meningioma, mesothelioma, ovarian serous papillary cystadenocarcinoma, and prolactinoma ('Milk') — the source's own PSoMMOMa mnemonic carried verbatim.",
  subject: "Pathology",
  system: "Section II · High-Yield General Principles — Pathology: Cellular Injury",
  pilotCategory:
    "The calcification split — dystrophic (injured tissue, normal serum calcium, localized, necrosis-associated) against metastatic (normal tissue, hypercalcemia or hyperphosphatemia, widespread, acid-losing tissue targeting) — with the psammoma-body tumor roster and radiation injury's selectivity logic (dysfunctional DNA repair plus high replicative rates) and its acute radiation syndrome.",
  difficulty: 2,
  readTime: 9,
  sourceRef:
    "First Aid 2026, Part 1 pp. 207–207 (Calcification & radiation injury — the radiation susceptibility and dermatitis blocks; ionizing radiation toxicity and acute radiation syndrome; the Dystrophic vs Metastatic calcification table; the psammoma bodies block with the source's own 'PSoMMOMa Bodies.' mnemonic; the two lettered photographs, described in text)",
  tags: [
    "calcification",
    "dystrophic calcification",
    "metastatic calcification",
    "calcific aortic stenosis",
    "hyperphosphatemia",
    "hypercalcemia",
    "chronic kidney disease",
    "primary hyperparathyroidism",
    "sarcoidosis",
    "hypervitaminosis D",
    "nephrocalcinosis",
    "nephrogenic diabetes insipidus",
    "renal failure",
    "psammoma bodies",
    "papillary thyroid carcinoma",
    "papillary renal carcinoma",
    "somatostatinoma",
    "meningioma",
    "mesothelioma",
    "ovarian serous cystadenocarcinoma",
    "prolactinoma",
    "CREST syndrome",
    "atherosclerotic plaques",
    "schistosomiasis",
    "congenital CMV",
    "toxoplasmosis",
    "rubella",
    "tuberculosis",
    "granulomatous infections",
    "fat necrosis",
    "infarcts",
    "thrombi",
    "basophilic staining",
    "H&E stain",
    "radiation injury",
    "ionizing radiation",
    "double strand breaks",
    "free radicals",
    "stem cells",
    "rapidly regenerating tissues",
    "radiotherapy",
    "cancer therapy",
    "dysfunctional DNA repair",
    "replicative rate",
    "radiation dermatitis",
    "TGF-beta",
    "telangiectasia",
    "fibrosis",
    "acute radiation syndrome",
    "nuclear reactor accidents",
    "leukemia",
    "thyroid cancer",
    "radiation-induced neoplasia",
  ],
  core: {
    what: "RADIATION INJURY: stem cells of rapidly regenerating tissues (eg, skin, bone marrow, GI tract, gonads) are the most susceptible to radiation injury; radiotherapy damages cancer cells more than healthy cells because cancer cells have dysfunctional DNA repair mechanisms in addition to high replicative rates; radiation dermatitis — acute presents with erythema, peeling, pain, and pruritis; chronic presents with atrophy, pigmentation changes, telangiectasia, and fibrosis due to ↑ TGF-β. IONIZING RADIATION TOXICITY: ionizing radiation causes DNA (eg, double strand breaks) and cellular damage both directly and indirectly through the production of free radicals; complications usually arise at significant doses (eg, radiotherapy, nuclear reactor accidents): localized inflammation and fibrosis; neoplasia (eg, leukemia, thyroid cancer); acute radiation syndrome — after sudden whole-body exposure to high doses → nausea, vomiting, diarrhea, hair loss, erythema, cytopenias, headache, altered mental status. TYPES OF CALCIFICATION (the table, verbatim): DYSTROPHIC — Ca2+ deposition in abnormal (diseased) tissues; tends to be localized (eg, calcific aortic stenosis); associated conditions: TB (lung, pericardium) and other granulomatous infections, liquefactive necrosis of chronic abscesses, fat necrosis, infarcts, thrombi, infections (schistosomiasis, congenital CMV, toxoplasmosis, rubella), psammoma bodies, CREST syndrome, atherosclerotic plaques; etiology 2° to injury or necrosis. METASTATIC — Ca2+ deposition in normal tissues; widespread (ie, diffuse, metastatic); predominantly in interstitial tissues of kidney, lung, and gastric mucosa (these tissues lose acid quickly; ↑ pH favors Ca2+ deposition); nephrocalcinosis of collecting ducts may lead to nephrogenic diabetes insipidus and renal failure; etiology 2° to hyperphosphatemia (eg, chronic kidney disease) or hypercalcemia (eg, 1° hyperparathyroidism, sarcoidosis, hypervitaminosis D). Calcium deposits appear deeply basophilic on H&E stain. PSAMMOMA BODIES: concentrically laminated calcified spherules; usually seen in certain types of tumors — papillary carcinoma of thyroid gland and kidney, somatostatinoma, meningioma, mesothelioma, ovarian serous papillary cystadenocarcinoma, milk (prolactinoma); histology: basophilic staining of Ca2+ deposits within tissue. The source prints its own mnemonic beside the list: 'PSoMMOMa Bodies.' — carried verbatim.",
    why: "This page pairs two high-yield halves that share one mineral. The calcification split is the exam's cleanest two-column discriminator: DYSTROPHIC calcification happens where tissue is already dead or diseased with a NORMAL serum calcium — calcium raining into necrotic debris (the granuloma of TB, the chronic abscess, the fat necrosis, the infarct, the thrombus, the atherosclerotic plaque, the CREST vessel, the psammoma body) — while METASTATIC calcification happens in NORMAL tissue when the serum cannot hold its calcium or phosphate: CKD's hyperphosphatemia, 1° hyperparathyroidism's hypercalcemia, sarcoidosis and hypervitaminosis D. And the metastatic side even explains its own tissue targeting with chemistry — the interstitial kidney, lung, and gastric mucosa are the tissues that lose acid quickly, their rising pH dumping calcium out of solution, with the collecting-duct nephrocalcinosis progressing to nephrogenic DI and renal failure. The psammoma body then gives the mineral a diagnostic career: a concentrically laminated calcified spherule that names six tumors (the source's own PSoMMOMa mnemonic), each basophilic on H&E. The radiation half runs on selectivity logic: ionizing radiation breaks DNA (double-strand breaks, directly and via free radicals), and the cells that suffer most are the ones that cannot repair (cancer cells' dysfunctional DNA repair) and divide fastest (high replicative rates) — the therapeutic window of radiotherapy — while the same sensitivity makes the skin, marrow, gut, and gonads (rapidly regenerating stem-cell tissues) the collateral-damage organs, chronic dermatitis fibrosing through TGF-β, significant exposures seeding leukemia and thyroid cancer, and a whole-body dose producing the acute radiation syndrome's nausea, cytopenias, and altered mental status.",
    keyIdea:
      "Route calcium by the SERUM and the TISSUE. DYSTROPHIC: abnormal (diseased) tissue + normal calcium + localized + 2° to injury or necrosis — TB and granulomatous infections, chronic abscesses, fat necrosis, infarcts, thrombi, schistosomiasis, congenital CMV/toxoplasmosis/rubella, psammoma bodies, CREST, atherosclerotic plaques, calcific aortic stenosis. METASTATIC: normal tissue + hyperphosphatemia (CKD) or hypercalcemia (1° hyperparathyroidism, sarcoidosis, hypervitaminosis D) + widespread — targeting interstitial kidney, lung, gastric mucosa (they lose acid quickly; ↑ pH favors Ca2+ deposition), with collecting-duct nephrocalcinosis → nephrogenic DI and renal failure. All calcium is DEEPLY BASOPHILIC on H&E. PSAMMOMA BODIES: concentrically laminated calcified spherules in papillary thyroid and kidney carcinoma, somatostatinoma, meningioma, mesothelioma, ovarian serous papillary cystadenocarcinoma, and prolactinoma — the source's own PSoMMOMa mnemonic. RADIATION: double-strand breaks + free radicals; cancer cells hit hardest (dysfunctional DNA repair + high replicative rates); the rapidly regenerating stem-cell tissues (skin, marrow, GI, gonads) most susceptible; dermatitis acute (erythema, peeling, pain, pruritis) vs chronic (atrophy, pigmentation, telangiectasia, fibrosis via ↑ TGF-β); complications — localized inflammation and fibrosis, neoplasia (leukemia, thyroid cancer); acute radiation syndrome — nausea, vomiting, diarrhea, hair loss, erythema, cytopenias, headache, altered mental status.",
  },
  mechanisms: [
    {
      id: "dystrophic-vs-metastatic",
      title: "The calcification split: injured tissue with normal calcium against normal tissue with an overloaded serum",
      context: "The Types of calcification table (book 207)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Calcium deposits appear on histology (deeply basophilic on H&E) — which type?",
            sublabel: "Input — any calcification vignette: a calcified granuloma, a stiff valve, nephrocalcinosis, or a screened hypercalcemia.",
            variant: "input",
          },
          {
            id: "dystrophic",
            label: "DYSTROPHIC — abnormal (diseased) tissue, localized, 2° to injury or necrosis",
            sublabel: "The serum calcium is normal; the tissue is not. TB (lung, pericardium) and other granulomatous infections, liquefactive necrosis of chronic abscesses, fat necrosis, infarcts, thrombi, infections (schistosomiasis, congenital CMV, toxoplasmosis, rubella), psammoma bodies, CREST syndrome, atherosclerotic plaques — and calcific aortic stenosis as the named localized example.",
            variant: "process",
          },
          {
            id: "metastatic",
            label: "METASTATIC — normal tissue, widespread, 2° to hyperphosphatemia or hypercalcemia",
            sublabel: "The tissue is normal; the serum is overloaded: hyperphosphatemia (eg, chronic kidney disease) or hypercalcemia (eg, 1° hyperparathyroidism, sarcoidosis, hypervitaminosis D) — and the deposits land in the interstitial kidney, lung, and gastric mucosa.",
            variant: "process",
          },
          {
            id: "targeting",
            label: "THE pH TARGETING RULE — why kidney, lung, and gastric mucosa",
            sublabel: "These tissues lose acid quickly; the rising local pH favors Ca2+ deposition — chemistry explaining geography. Nephrocalcinosis of the collecting ducts may lead to nephrogenic diabetes insipidus and renal failure.",
            variant: "process",
          },
          {
            id: "output",
            label: "Name the type by answering two questions: is the tissue diseased, and is the serum overloaded?",
            sublabel: "Output — diseased tissue + normal serum = dystrophic; normal tissue + high Ca2+/phosphate = metastatic; a laminated spherule in a tumor = a psammoma body.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "dystrophic", label: "tissue diseased" },
          { from: "trigger", to: "metastatic", label: "serum overloaded" },
          { from: "metastatic", to: "targeting", label: "where it lands" },
          { from: "dystrophic", to: "output", label: "localized" },
          { from: "targeting", to: "output", label: "widespread" },
        ],
      },
    },
    {
      id: "radiation-selectivity",
      title: "Radiation selectivity: why cancer cells die and which normal tissues pay the price",
      context: "The radiation blocks (book 207)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Ionizing radiation passes through tissue — therapeutic or accidental",
            sublabel: "Input — a radiotherapy fraction, a nuclear reactor accident, or a whole-body exposure.",
            variant: "input",
          },
          {
            id: "damage",
            label: "THE DAMAGE — DNA double-strand breaks, directly and via free radicals",
            sublabel: "Ionizing radiation causes DNA (eg, double strand breaks) and cellular damage both directly and indirectly through the production of free radicals.",
            variant: "process",
          },
          {
            id: "selectivity",
            label: "THE SELECTIVITY — dysfunctional repair + high replicative rate",
            sublabel: "Radiotherapy damages cancer cells more than healthy cells because cancer cells have dysfunctional DNA repair mechanisms in addition to high replicative rates — the therapeutic window in two properties.",
            variant: "process",
          },
          {
            id: "collateral",
            label: "THE COLLATERAL — the rapidly regenerating stem-cell tissues",
            sublabel: "Skin, bone marrow, GI tract, gonads — their rapidly dividing stem cells are the most susceptible to radiation injury: the dermatitis (acute: erythema, peeling, pain, pruritis; chronic: atrophy, pigmentation changes, telangiectasia, fibrosis via ↑ TGF-β), the cytopenias, and the acute radiation syndrome (nausea, vomiting, diarrhea, hair loss, erythema, cytopenias, headache, altered mental status).",
            variant: "process",
          },
          {
            id: "output",
            label: "THE LATE COMPLICATIONS — fibrosis and neoplasia",
            sublabel: "Output — significant doses (radiotherapy, nuclear reactor accidents) bring localized inflammation and fibrosis and neoplasia (eg, leukemia, thyroid cancer).",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "damage", label: "energy deposited" },
          { from: "damage", to: "selectivity", label: "who repairs it" },
          { from: "damage", to: "collateral", label: "who is dividing" },
          { from: "collateral", to: "output", label: "acute syndrome" },
          { from: "selectivity", to: "output", label: "late neoplasia" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "calcification-split-map",
      title: "The calcification split and the radiation panel (an original KYP adaptation)",
      caption:
        "An original KYP adaptation of the source page (book 207 — the radiation blocks, the Dystrophic-vs-Metastatic table, and the psammoma block; the two copyrighted photographs described in text): the radiation panel (the rapidly-regenerating stem-cell susceptibility [skin, marrow, GI, gonads], the cancer-cell selectivity [dysfunctional DNA repair + high replicative rates], the dermatitis pair, the double-strand-break + free-radical mechanism, and acute radiation syndrome); the calcification SPLIT as two columns — DYSTROPHIC (in abnormal/diseased tissue, localized, 2° to injury or necrosis, with the full associated-conditions list from TB and granulomatous infections through CREST and atherosclerotic plaques) against METASTATIC (in normal tissue, widespread, 2° to hyperphosphatemia [CKD] or hypercalcemia [1° hyperparathyroidism, sarcoidosis, hypervitaminosis D], with the pH-targeting rule for kidney, lung, and gastric mucosa and the nephrocalcinosis → nephrogenic DI + renal failure chain); and the psammoma-body panel (concentrically laminated calcified spherules, deeply basophilic on H&E, with the six-tumor roster and the source's own 'PSoMMOMa Bodies.' mnemonic carried verbatim).",
      notice:
        "The source page prints TWO COPYRIGHTED H&E PHOTOGRAPHS, BOTH lettered 'A' (another duplicated-lettering quirk, documented): A#1 = dystrophic calcification (a large amorphous deeply basophilic deposit with a black arrow) inside the table's dystrophic column; A#2 = psammoma bodies (concentrically laminated onion-skin spherules with a red arrow) beside the psammoma block. Both described in text in this note's tables, NEVER reproduced (the M32 convention). The source's own mnemonic 'PSoMMOMa Bodies.' prints beside the tumor list (raw 98) — carried VERBATIM in the tables per the E38 precedent; the KYP memory layer stays original. No other margin notes (VLM census confirmed).",
    },
    {
      kind: "table",
      title: "Book 207 — the calcification table (carried verbatim)",
      intro: "The page's two-column comparison, as printed — the exam's cleanest calcification discriminator.",
      columns: ["FIELD", "DYSTROPHIC (verbatim) · METASTATIC (verbatim) — book 207"],
      rows: [
        ["The H&E note + header", "Calcium deposits appear deeply basophilic (arrow in A) on H&E stain. Types of calcification: Dystrophic calcification · Metastatic calcification."],
        ["Ca2+ DEPOSITION", "DYSTROPHIC: In abnormal (diseased) tissues. METASTATIC: In normal tissues."],
        ["EXTENT", "DYSTROPHIC: Tends to be localized (eg, calcific aortic stenosis). METASTATIC: Widespread (ie, diffuse, metastatic)."],
        ["ASSOCIATED CONDITIONS", "DYSTROPHIC: TB (lung, pericardium) and other granulomatous infections, liquefactive necrosis of chronic abscesses, fat necrosis, infarcts, thrombi, infections (schistosomiasis, congenital CMV, toxoplasmosis, rubella), psammoma bodies, CREST syndrome, atherosclerotic plaques. METASTATIC: Predominantly in interstitial tissues of kidney, lung, and gastric mucosa (these tissues lose acid quickly; ↑ pH favors Ca2+ deposition). Nephrocalcinosis of collecting ducts may lead to nephrogenic diabetes insipidus and renal failure."],
        ["ETIOLOGY", "DYSTROPHIC: 2° to injury or necrosis. METASTATIC: 2° to hyperphosphatemia (eg, chronic kidney disease) or hypercalcemia (eg, 1° hyperparathyroidism, sarcoidosis, hypervitaminosis D)."],
      ],
      caption:
        "The split in one read: diseased tissue with a normal serum (dystrophic, localized, necrosis-associated) against normal tissue with an overloaded serum (metastatic, widespread, acid-losing tissue targeting) — and every calcium deposit deeply basophilic on H&E.",
    },
    {
      kind: "table",
      title: "Book 207 — the radiation blocks and the psammoma roster (carried verbatim, with the source's own mnemonic)",
      intro: "The radiation susceptibility, ionizing toxicity, and psammoma blocks, as printed — including the source's own PSoMMOMa mnemonic beside the tumor list.",
      columns: ["BLOCK", "PRINTED CONTENT — verbatim (book 207)"],
      rows: [
        ["Radiation susceptibility + selectivity", "Stem cells of rapidly regenerating tissues (eg, skin, bone marrow, GI tract, gonads) are the most susceptible to radiation injury. Radiotherapy damages cancer cells more than healthy cells because cancer cells have dysfunctional DNA repair mechanisms in addition to high replicative rates."],
        ["Radiation dermatitis", "Radiation dermatitis—acute presents with erythema, peeling, pain, and pruritis. Chronic presents with atrophy, pigmentation changes, telangiectasia, and fibrosis due to ↑ TGF-β."],
        ["Ionizing radiation toxicity", "Ionizing radiation causes DNA (eg, double strand breaks) and cellular damage both directly and indirectly through the production of free radicals. Complications usually arise when patient is exposed to significant doses (eg, radiotherapy, nuclear reactor accidents): localized inflammation and fibrosis; neoplasia (eg, leukemia, thyroid cancer). Acute radiation syndrome—develops after sudden whole-body exposure to high doses of ionizing radiation → nausea, vomiting, diarrhea, hair loss, erythema, cytopenias, headache, altered mental status."],
        ["Psammoma bodies (with the source's own mnemonic)", "Concentrically laminated calcified spherules (A). Usually seen in certain types of tumors: papillary carcinoma of thyroid gland and kidney; somatostatinoma; meningioma; mesothelioma; ovarian serous papillary cystadenocarcinoma; milk (prolactinoma). Histology: Basophilic staining of Ca2+ deposits within tissue. The source prints beside the list: 'PSoMMOMa Bodies.' (Papillary, Somatostatinoma, Meningioma, Mesothelioma, Ovarian, Milk) — carried verbatim."],
        ["The two photographs (COPYRIGHTED — described in text, never reproduced)", "A#1 (in the table's dystrophic column): an H&E micrograph of a large, amorphous, deeply basophilic purple calcium deposit with a black arrow — the dystrophic deposit itself. A#2 (beside the psammoma block): an H&E micrograph of small round concentrically laminated calcified spherules (onion-skin psammoma bodies) with a red arrow. Both lettered 'A' — the duplicated-lettering quirk, documented."],
      ],
      caption:
        "The radiation half (selectivity, dermatitis, toxicity, the acute syndrome) and the psammoma roster with its own printed mnemonic — the source's PSoMMOMa, carried verbatim per the established precedent, with the two copyrighted photographs described in text.",
    },
    {
      kind: "callout",
      variant: "exam",
      title: "The three routing rules this page teaches",
      body:
        "Rule 1 — THE SERUM DECIDES THE TYPE: diseased tissue with a NORMAL calcium = DYSTROPHIC (localized, 2° to injury or necrosis — the granuloma, the abscess, the infarct, the thrombus, the plaque, the CREST vessel, the psammoma body); normal tissue with hyperphosphatemia (CKD) or hypercalcemia (1° hyperparathyroidism, sarcoidosis, hypervitaminosis D) = METASTATIC (widespread, landing in the interstitial kidney, lung, and gastric mucosa — the acid-losing tissues whose rising pH favors Ca2+ deposition — with collecting-duct nephrocalcinosis progressing to nephrogenic DI and renal failure). Rule 2 — A LAMINATED SPHERULE IN A TUMOR IS A PSAMMOMA BODY: concentrically laminated, deeply basophilic on H&E, naming six tumors — papillary thyroid and kidney carcinoma, somatostatinoma, meningioma, mesothelioma, ovarian serous papillary cystadenocarcinoma, and prolactinoma (the source's own PSoMMOMa mnemonic, carried verbatim). Rule 3 — RADIATION SELECTIVITY IS TWO PROPERTIES: cancer cells are hit hardest because they have DYSFUNCTIONAL DNA REPAIR in addition to HIGH REPLICATIVE RATES — while the same sensitivity makes the rapidly regenerating stem-cell tissues (skin, marrow, GI, gonads) the collateral organs, chronic dermatitis fibrosing through ↑ TGF-β, significant exposures (radiotherapy, nuclear reactor accidents) seeding leukemia and thyroid cancer, and the whole-body dose delivering acute radiation syndrome (nausea, vomiting, diarrhea, hair loss, erythema, cytopenias, headache, altered mental status).",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 68-year-old man with end-stage renal disease on dialysis has a markedly elevated phosphate; imaging shows diffuse calcification in the lung parenchyma and gastric wall, and he develops high-output urine unresponsive to desmopressin.",
        discriminator: "Metastatic calcification — hyperphosphatemia of CKD depositing in normal acid-losing tissues; nephrocalcinosis → nephrogenic DI",
        concept: "The overloaded serum",
        answer:
          "Metastatic calcification: Ca2+ deposition in NORMAL tissues, 2° to the hyperphosphatemia of chronic kidney disease (the metastatic etiology), landing predominantly in the interstitial kidney, lung, and gastric mucosa — tissues that lose acid quickly, the rising pH favoring Ca2+ deposition. The collecting-duct nephrocalcinosis explains the nephrogenic diabetes insipidus (desmopressin-unresponsive) and threatens renal failure.",
      },
      {
        stem: "A chest CT of a 74-year-old woman with remote treated TB shows a densely calcified solitary left upper lobe nodule; serum calcium and phosphate are normal.",
        discriminator: "Dystrophic calcification — abnormal (diseased) tissue, normal serum, localized, 2° to injury or necrosis",
        concept: "The injured tissue",
        answer:
          "Dystrophic calcification: the healed granuloma of TB (lung) is the first listed associated condition — calcium deposited in abnormal tissue after injury or necrosis, with a normal serum calcium, tending to stay localized. The granulomatous-infection family (TB, pericardium involved too), the chronic abscess, the fat necrosis, the infarct, and the atherosclerotic plaque all calcify by the same rule.",
      },
      {
        stem: "A 55-year-old woman undergoes thyroidectomy for a papillary carcinoma; the pathologist notes concentrically laminated basophilic structures within the tumor papillae.",
        discriminator: "Psammoma bodies — concentrically laminated calcified spherules, basophilic on H&E, the papillary-thyroid entry of the PSoMMOMa roster",
        concept: "The laminated spherule",
        answer:
          "Psammoma bodies: concentrically laminated calcified spherules with basophilic staining of the Ca2+ deposits within tissue, usually seen in papillary carcinoma of the thyroid gland (and kidney), somatostatinoma, meningioma, mesothelioma, ovarian serous papillary cystadenocarcinoma, and milk (prolactinoma) — the source's own PSoMMOMa mnemonic, carried verbatim in this note's tables.",
      },
    ],
    traps: [
      {
        a: "Dystrophic calcification",
        b: "Metastatic calcification",
        whyConfused: "Both deposit Ca2+ and both look deeply basophilic on H&E",
        keyDifference: "Dystrophic = abnormal (diseased) tissue, localized, normal serum calcium, 2° to injury or necrosis; Metastatic = normal tissue, widespread, 2° to hyperphosphatemia (CKD) or hypercalcemia (1° hyperparathyroidism, sarcoidosis, hypervitaminosis D), targeting the acid-losing kidney, lung, and gastric mucosa",
        clue: "Check the serum first: normal Ca2+/phosphate with diseased tissue = dystrophic; overloaded serum with normal tissue = metastatic",
      },
      {
        a: "Psammoma bodies",
        b: "Dystrophic calcification in general",
        whyConfused: "Psammoma bodies are listed among dystrophic calcification's associated conditions",
        keyDifference: "A psammoma body is a specific morphology — a concentrically laminated calcified spherule — that names six tumors (papillary thyroid/kidney, somatostatinoma, meningioma, mesothelioma, ovarian serous, prolactinoma); dystrophic calcification in general is amorphous, not laminated, and follows any necrotic or diseased tissue",
        clue: "Laminated/onion-skin in a tumor = psammoma body (name the tumor from the roster); amorphous basophilia in dead tissue = ordinary dystrophic calcification",
      },
      {
        a: "Acute radiation dermatitis",
        b: "Chronic radiation dermatitis",
        whyConfused: "The same skin, the same beam, different timelines",
        keyDifference: "Acute: erythema, peeling, pain, pruritis; Chronic: atrophy, pigmentation changes, telangiectasia, and fibrosis due to ↑ TGF-β — the cytokine that turns chronic radiation skin into scar",
        clue: "Early inflammatory quartet vs late atrophy-telangiectasia-fibrosis set; 'TGF-β fibrosis' in an option = chronic",
      },
    ],
    pivots: [
      {
        lookAlike: "Hypercalcemia causes that calcify normal tissue — which etiology?",
        differentiator: "The metastatic etiologies print as a pair: hyperphosphatemia (eg, chronic kidney disease) and hypercalcemia (eg, 1° hyperparathyroidism, sarcoidosis, hypervitaminosis D)",
        correctPath: "CKD or dialysis in the stem → hyperphosphatemia route; PTH elevation, granulomatous sarcoid vitamin D activation, or vitamin D overdose → hypercalcemia route — both land in the same acid-losing tissues",
      },
      {
        lookAlike: "The radiation susceptibility question — why cancer cells and why marrow, skin, gut, gonads?",
        differentiator: "Two different reasons: cancer cells are SELECTIVELY damaged because of dysfunctional DNA repair PLUS high replicative rates; the normal stem-cell tissues (skin, bone marrow, GI tract, gonads) are most susceptible because they divide fastest",
        correctPath: "Therapeutic ratio questions → the cancer-cell pair (no repair + fast divide); collateral-damage questions (dermatitis, cytopenias, infertility) → the rapidly regenerating stem-cell list",
      },
    ],
    miniCase: {
      vignette:
        "A 66-year-old man with stage 5 chronic kidney disease on hemodialysis for 6 years has persistently elevated phosphate despite binders. He develops progressive dyspnea; chest CT shows diffuse, fine reticular densities in both lungs without consolidation or adenopathy, and gastric biopsies (done for iron-deficiency workup) show basophilic deposits in the interstitium of the gastric mucosa. His serum calcium is at the upper limit of normal, intact PTH is elevated, and 1,25-dihydroxy vitamin D is low. Urine output is high and does not concentrate after desmopressin administration. A plain radiograph of a healed rib fracture site from 3 years ago shows dense localized calcification.",
      question: "Name the two calcification processes in this patient, state the driving derangement for each, and explain the desmopressin-unresponsive high urine output.",
      options: [
        {
          label: "Metastatic calcification of lung and gastric mucosa (hyperphosphatemia of CKD, normal tissue targeted by the acid-losing pH rule) + dystrophic calcification of the healed fracture/necrotic site; the nephrocalcinosis of collecting ducts causes nephrogenic diabetes insipidus",
          text: "Two processes, two rules: the overloaded serum rained into the acid-losing tissues, the old injury calcified on its own.",
          correct: true,
          why: "Correct on all three layers. The diffuse lung interstitial and gastric mucosal basophilic deposits in a dialysis patient with hyperphosphatemia are METASTATIC calcification — Ca2+ deposition in NORMAL tissues 2° to hyperphosphatemia (eg, chronic kidney disease), landing predominantly in the interstitial tissues of kidney, lung, and gastric mucosa because these tissues lose acid quickly and the rising pH favors Ca2+ deposition. The dense localized calcification at the old fracture/rib injury site is DYSTROPHIC calcification — abnormal tissue, normal serum at the time, 2° to injury, tending to stay localized. The desmopressin-unresponsive high urine output is nephrogenic diabetes insipidus from nephrocalcinosis of the collecting ducts — the printed complication that may also progress to renal failure.",
        },
        {
          label: "Both processes are dystrophic — the lungs and stomach were injured by uremic toxins, and dystrophic calcification explains all deposits",
          text: "All the calcium is in injured tissue; the type does not change.",
          why: "Wrong type assignment for the lung and gastric findings: dystrophic calcification is LOCALIZED and follows diseased/necrotic tissue — the diffuse, bilateral, interstitial pattern in TWO acid-losing organs of a hyperphosphatemic dialysis patient is the metastatic signature (normal tissue, widespread, serum-driven). Only the old fracture site is dystrophic.",
        },
        {
          label: "Psammoma bodies throughout — the laminated spherules of a papillary malignancy involve lung and stomach",
          text: "The basophilic deposits are concentrically laminated spherules of tumor type.",
          why: "Wrong morphology and wrong clinical picture: psammoma bodies are concentrically laminated calcified spherules inside specific tumors (the PSoMMOMA roster), not diffuse interstitial deposits; the chest shows no mass or adenopathy, and a healed fracture site does not produce psammoma bodies. The stem's deposits are amorphous basophilia in normal tissue.",
        },
        {
          label: "The high urine output is central diabetes insipidus from metastatic calcification of the hypothalamus",
          text: "The calcium suppressed ADH release, so desmopressin should not work anyway.",
          why: "Wrong lesion and wrong pharmacology: central DI WOULD respond to desmopressin (it replaces the missing hormone); the lack of response is the defining evidence of the NEPHROGENIC form — the printed collecting-duct nephrocalcinosis of metastatic calcification, which damages the renal response to ADH rather than its release.",
        },
        {
          label: "The findings are radiation injury from repeated CT surveillance imaging",
          text: "Cumulative ionizing radiation caused the dermatitis-like calcification and cytopenias.",
          why: "Wrong mechanism entirely: CT surveillance doses are far below the significant doses (radiotherapy, nuclear reactor accidents) that cause radiation complications, radiation does not produce diffuse interstitial calcification, and the stem's elevated phosphate with renal failure names the metabolic driver. No dermatitis, cytopenias, or exposure history supports the radiation route.",
        },
      ],
      reasoning:
        "The stem deliberately contains BOTH halves of the calcification split plus the DI complication. (1) The DIFFUSE lung + gastric mucosal interstitial deposits in a hyperphosphatemic dialysis patient = METASTATIC calcification — the table's metastatic column verbatim: normal tissues, widespread, 2° to hyperphosphatemia (chronic kidney disease), predominantly in the interstitial tissues of kidney, lung, and gastric mucosa because these tissues lose acid quickly and the rising pH favors Ca2+ deposition. (2) The dense LOCALIZED calcification at the healed rib injury = DYSTROPHIC calcification — abnormal tissue, 2° to injury, localized (the mirror-image column). (3) The desmopressin-unresponsive polyuria = NEPHROGENIC diabetes insipidus from nephrocalcinosis of the collecting ducts — the printed complication chain that may end in renal failure. The distractors each misroute one layer: calling everything dystrophic (ignores the serum and the diffuse pattern), calling them psammoma bodies (wrong morphology — laminated spherules belong to the tumor roster), blaming central DI (desmopressin would work in central DI — the unresponsiveness is the nephrogenic proof), and invoking radiation (no dose history, wrong lesion pattern). The two-question rule closes the case: is the tissue diseased, and is the serum overloaded?",
    },
  },
  mnemonics: [
    {
      code: "INJURED TISSUE, NORMAL CALCIUM",
      meaning: "The dystrophic rule: calcium deposits in abnormal (diseased) tissue with a NORMAL serum — localized, 2° to injury or necrosis (TB and granulomatous infections, chronic abscesses, fat necrosis, infarcts, thrombi, schistosomiasis, congenital CMV/toxoplasmosis/rubella, psammoma bodies, CREST, atherosclerotic plaques).",
      memorizes: "The dystrophic column of the split",
      whenToUse: "Any calcification question with diseased tissue and a normal serum",
      clinical: "The calcified granuloma, the stenosed calcific aortic valve, the calcified plaque — dead tissue collecting mineral it did not invite.",
    },
    {
      code: "NORMAL TISSUE, OVERLOADED SERUM",
      meaning: "The metastatic rule: calcium deposits in NORMAL tissue when the serum cannot hold it — hyperphosphatemia (eg, chronic kidney disease) or hypercalcemia (eg, 1° hyperparathyroidism, sarcoidosis, hypervitaminosis D) — and the deposits go widespread.",
      memorizes: "The metastatic column of the split",
      whenToUse: "Any calcification question with CKD or a hypercalcemia workup",
      clinical: "The dialysis patient's lungs and stomach on imaging; the hyperparathyroid's nephrocalcinosis — healthy tissue mineralizing because the blood is saturated.",
    },
    {
      code: "LOSE ACID, GAIN CALCIUM",
      meaning: "The tissue-targeting rule of metastatic calcification: the interstitial kidney, lung, and gastric mucosa LOSE ACID quickly — the rising local pH favors Ca2+ deposition — which is why the metastatic deposits land there, and why collecting-duct nephrocalcinosis leads to nephrogenic DI and renal failure.",
      memorizes: "Where metastatic calcification lands and why",
      whenToUse: "Any 'why these organs?' question in metastatic calcification",
      clinical: "Chemistry explaining geography: the acid-losing organs are the mineral's landing zone.",
    },
    {
      code: "NO REPAIR, FAST DIVIDE",
      meaning: "Radiation selectivity in two properties: cancer cells have DYSFUNCTIONAL DNA REPAIR in addition to HIGH REPLICATIVE RATES — the reason radiotherapy damages them more than healthy cells; the same sensitivity makes the rapidly regenerating stem-cell tissues (skin, marrow, GI, gonads) the most susceptible normal tissues.",
      memorizes: "The therapeutic window and the collateral list",
      whenToUse: "Any radiotherapy-mechanism or radiation-side-effect question",
      clinical: "The tumor that cannot fix its double-strand breaks; the marrow, skin, gut, and gonads that pay for dividing fast — with chronic dermatitis fibrosing through ↑ TGF-β and acute radiation syndrome after whole-body doses.",
    },
  ],
  rapidReview: {
    s30: [
      "Dystrophic calcification: in abnormal (diseased) tissues, localized (eg, calcific aortic stenosis), 2° to injury or necrosis — TB (lung, pericardium) and other granulomatous infections, liquefactive necrosis of chronic abscesses, fat necrosis, infarcts, thrombi, infections (schistosomiasis, congenital CMV, toxoplasmosis, rubella), psammoma bodies, CREST syndrome, atherosclerotic plaques",
      "Metastatic calcification: in normal tissues, widespread, predominantly interstitial kidney, lung, gastric mucosa (lose acid quickly; ↑ pH favors Ca2+ deposition); nephrocalcinosis of collecting ducts → nephrogenic DI and renal failure; 2° to hyperphosphatemia (CKD) or hypercalcemia (1° hyperparathyroidism, sarcoidosis, hypervitaminosis D)",
      "Calcium deposits appear deeply basophilic on H&E; psammoma bodies = concentrically laminated calcified spherules in papillary thyroid/kidney carcinoma, somatostatinoma, meningioma, mesothelioma, ovarian serous papillary cystadenocarcinoma, milk (prolactinoma) — the source's own 'PSoMMOMa Bodies.' mnemonic, carried verbatim",
      "Radiation: stem cells of rapidly regenerating tissues (skin, bone marrow, GI tract, gonads) most susceptible; radiotherapy damages cancer cells more (dysfunctional DNA repair + high replicative rates); dermatitis — acute erythema/peeling/pain/pruritis, chronic atrophy/pigmentation/telangiectasia/fibrosis via ↑ TGF-β",
      "Ionizing radiation: DNA double-strand breaks + cellular damage directly and via free radicals; complications at significant doses — localized inflammation and fibrosis, neoplasia (leukemia, thyroid cancer); acute radiation syndrome — nausea, vomiting, diarrhea, hair loss, erythema, cytopenias, headache, altered mental status",
    ],
    m3: [
      "The two-question rule: diseased tissue + normal serum = dystrophic; normal tissue + overloaded serum = metastatic",
      "The metastatic landing zone: interstitial kidney, lung, gastric mucosa (acid-losing → ↑pH → Ca2+ deposits) with nephrocalcinosis → nephrogenic DI",
      "The psammoma roster (the source's own PSoMMOMa): Papillary thyroid/kidney, Somatostatinoma, Meningioma, Mesothelioma, Ovarian serous, Milk-prolactinoma",
      "Radiation selectivity: no repair + fast divide (cancer cells); fast divide alone (skin, marrow, GI, gonads stem cells) — chronic dermatitis fibroses via TGF-β",
    ],
    m10: [
      "Census: p229 (book 207) carries TWO cmyk JPEG rasters (~188x184 and ~188x188 at 150 dpi), BOTH lettered 'A' (the duplicated-lettering quirk again — the text layer prints 'A' twice at raw 100 and 102): A#1 = dystrophic calcification H&E (large amorphous deeply basophilic deposit, black arrow) in the table's dystrophic column; A#2 = psammoma bodies H&E (concentrically laminated onion-skin spherules, red arrow) beside the psammoma block — BOTH COPYRIGHTED, described-in-text only, never reproduced (the M32 convention)",
      "The source prints its own mnemonic 'PSoMMOMa Bodies.' (raw 98) beside the psammoma tumor list — carried VERBATIM in the tables per the E38 precedent; the KYP memory layer stays original",
      "The calcification table's two columns interleave in the text layer (the dystrophic associated-conditions list prints before the metastatic conditions, raw 53-72 — the M38 interleaving pattern); reading order documented in the manifest",
      "No other margin notes or mnemonics on the page (VLM census confirmed)",
      "The page is otherwise pure text: the radiation blocks, the calcification table, and the psammoma block — the registry visual is a KYP adaptation, not a redraw",
    ],
  },
  recall: [
    {
      q: "Carry the calcification table verbatim — both columns, all four fields.",
      a: "Ca2+ DEPOSITION: dystrophic in abnormal (diseased) tissues; metastatic in normal tissues. EXTENT: dystrophic tends to be localized (eg, calcific aortic stenosis); metastatic widespread (ie, diffuse, metastatic). ASSOCIATED CONDITIONS: dystrophic — TB (lung, pericardium) and other granulomatous infections, liquefactive necrosis of chronic abscesses, fat necrosis, infarcts, thrombi, infections (schistosomiasis, congenital CMV, toxoplasmosis, rubella), psammoma bodies, CREST syndrome, atherosclerotic plaques; metastatic — predominantly in interstitial tissues of kidney, lung, and gastric mucosa (these tissues lose acid quickly; ↑ pH favors Ca2+ deposition); nephrocalcinosis of collecting ducts may lead to nephrogenic diabetes insipidus and renal failure. ETIOLOGY: dystrophic 2° to injury or necrosis; metastatic 2° to hyperphosphatemia (eg, chronic kidney disease) or hypercalcemia (eg, 1° hyperparathyroidism, sarcoidosis, hypervitaminosis D). Calcium deposits appear deeply basophilic on H&E stain.",
    },
    {
      q: "State the psammoma-body definition, the full tumor roster, and the source's own mnemonic.",
      a: "DEFINITION: concentrically laminated calcified spherules; histology: basophilic staining of Ca2+ deposits within tissue. TUMORS: papillary carcinoma of thyroid gland and kidney; somatostatinoma; meningioma; mesothelioma; ovarian serous papillary cystadenocarcinoma; milk (prolactinoma). The source's own mnemonic, printed beside the list and carried verbatim: 'PSoMMOMa Bodies.'",
    },
    {
      q: "Why does radiotherapy damage cancer cells more than healthy cells, and which normal tissues are most susceptible?",
      a: "Radiotherapy damages cancer cells more than healthy cells because cancer cells have DYSFUNCTIONAL DNA REPAIR MECHANISMS in addition to HIGH REPLICATIVE RATES. The most susceptible normal tissues are the stem cells of rapidly regenerating tissues: skin, bone marrow, GI tract, and gonads.",
    },
    {
      q: "Contrast acute and chronic radiation dermatitis, and list acute radiation syndrome's findings.",
      a: "ACUTE DERMATITIS: erythema, peeling, pain, and pruritis. CHRONIC DERMATITIS: atrophy, pigmentation changes, telangiectasia, and fibrosis due to ↑ TGF-β. ACUTE RADIATION SYNDROME (after sudden whole-body exposure to high doses): nausea, vomiting, diarrhea, hair loss, erythema, cytopenias, headache, altered mental status.",
    },
    {
      q: "State ionizing radiation's damage mechanism and its two listed complications.",
      a: "MECHANISM: ionizing radiation causes DNA (eg, double strand breaks) and cellular damage both directly and indirectly through the production of free radicals. COMPLICATIONS (at significant doses, eg, radiotherapy or nuclear reactor accidents): localized inflammation and fibrosis; and neoplasia (eg, leukemia, thyroid cancer).",
    },
  ],
  related: [
    {
      title: "Necrosis: The Five Morphologic Patterns",
      topicId: "necrosis-types",
      note: "Dystrophic calcification is necrosis's mineral aftermath — the '2° to injury or necrosis' etiology means the granuloma, the fat necrosis, and the infarct of that page each become a calcified lesion on this one.",
    },
    {
      title: "Cell Injury: Reversible, Irreversible & Ferroptosis",
      topicId: "cell-injury-mechanisms",
      note: "Ionizing radiation injures through the same free radicals that page catalogs — radiation is a listed initiator, and the double-strand breaks add DNA damage to the lipid and protein attack.",
    },
    {
      title: "DNA Repair Pathways",
      topicId: "dna-repair",
      note: "The cancer-cell selectivity of radiotherapy IS this chapter's logic: the double-strand break is the lesion, and the cell that cannot repair it (dysfunctional repair + high replicative rate) is the one that dies.",
    },
    {
      title: "Acid-Base Physiology",
      topicId: "acid-base-physiology",
      note: "The metastatic landing zone is an acid-base rule in tissue: kidney, lung, and gastric mucosa lose acid quickly, the local pH rises, and Ca2+ falls out of solution — chemistry deciding geography.",
    },
  ],
  crossLinks: [
    {
      subject: "Nephrology (nephrocalcinosis)",
      connection:
        "Metastatic calcification's renal chapter: collecting-duct nephrocalcinosis causing nephrogenic diabetes insipidus (the desmopressin-unresponsive polyuria) and progressing to renal failure — the complication that closes the table.",
    },
    {
      subject: "Endocrinology (hypercalcemia)",
      connection:
        "The metastatic etiologies are endocrine diseases: 1° hyperparathyroidism's PTH-driven calcium, sarcoidosis's granuloma-activated vitamin D, and hypervitaminosis D — each saturating the serum until normal tissue mineralizes.",
    },
    {
      subject: "Oncology (the psammoma roster)",
      connection:
        "The laminated spherule names six tumors across four systems — papillary thyroid and kidney, meningioma, mesothelioma, ovarian serous, and prolactinoma — a histologic clue that travels from neck to brain to pleura to pelvis.",
    },
    {
      subject: "Dermatology and radiation oncology",
      connection:
        "The dermatitis pair is every radiotherapy field's skin story — acute inflammation first, then the chronic TGF-β fibrosis, atrophy, and telangiectasia that follow the beam's exit site.",
    },
  ],
};
