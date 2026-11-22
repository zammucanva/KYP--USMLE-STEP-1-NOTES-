import type { KypUsMLENote } from "../types";

// Pathology — NEOPLASIA banner opens (P-batch 12). Source: pdf 237-238 /
// book 215-216 (Neoplasia and neoplastic progression + Tumor
// nomenclature — the definition with parenchyma + stroma; the
// five-stage cervical progression Normal -> Dysplasia -> Carcinoma
// in situ/preinvasive -> Invasive carcinoma -> Metastasis with the
// molecular gates [pleomorphism + ↑N:C ratio for dysplasia; the
// intact basement membrane for CIS; metalloproteinases + E-cadherin
// loss for invasion; lymphatics or blood for metastasis]; the
// carcinoma-vs-sarcoma rule; benign and malignant feature lists;
// hamartoma vs choristoma; the 10-row nomenclature table with the
// Mesenchyme category header; the grade-vs-stage fork with the
// TNM staging system [importance M > N > T] and the rule that stage
// trumps grade). Census (pdfimages + VLM): NO raster images on
// either page (pdfimages -list returned zero rows for both pdf 237
// and pdf 238). The TWO vector figures — p237's cervical epithelium
// progression diagram (the basement membrane band, the blood/
// lymphatic vessel, and the five-stage arrow chain) and p238's two
// figures (the grade illustration with the four cell-cluster panels;
// the TNM staging figure with T, N [lymph node], and M [blood/
// lymphatic vessel + spread]) — are redrawn as ORIGINAL KYP figures
// (the P2/P3 pure-vector convention). The nomenclature table and
// the grade-vs-stage block are pure text, carried verbatim in the
// note's tables. NO copyrighted photographs, NO margin mnemonics
// (VLM confirmed on both pages); the KYP memory layer is original.

export const neoplasiaNomenclature: KypUsMLENote = {
  id: "neoplasia-nomenclature",
  title: "Neoplasia Nomenclature & Progression",
  subtitle:
    "The five stations of a cancer's life and the two axes that prognose it (book 215-216) — NEOPLASIA: uncontrolled, often monoclonal proliferation of cells; can be benign or malignant; any neoplastic growth has two components, parenchyma (neoplastic cells) and supporting stroma (nonneoplastic; eg, blood vessels, connective tissue). THE PROGRESSION — Normal cells (basal → apical polarity) → DYSPLASIA (loss of uniformity in cell size and shape [pleomorphism]; loss of tissue orientation; nuclear changes [eg, ↑ nuclear:cytoplasmic ratio]; often reversible) → CARCINOMA IN SITU / PREINVASIVE (irreversible severe dysplasia that involves the entire thickness of epithelium but does not penetrate the intact basement membrane) → INVASIVE CARCINOMA (cells have invaded basement membrane using collagenases and hydrolases [metalloproteinases]; cell-cell contacts lost by inactivation of E-cadherin) → METASTASIS (spread to distant organ[s] via lymphatics or blood). NOMENCLATURE — carcinoma implies epithelial origin, sarcoma denotes mesenchymal origin, both generally imply malignancy; benign tumors are usually well-differentiated and well-demarcated with low mitotic activity, no metastases, and no necrosis; malignant tumors may show poor differentiation, erratic growth, local invasion, metastasis, and ↓ apoptosis; hamartoma = disorganized overgrowth of tissues in their native location (eg, Peutz-Jeghers polyps) and choristoma = normal tissue in a foreign location (eg, gastric tissue in distal ileum in Meckel diverticulum); the 10-row cell-type table (Epithelium; Mesenchyme [Blood cells, Blood vessels, Smooth muscle, Striated muscle, Connective tissue, Bone, Fat, Melanocyte]) with the benign and malignant name for each. GRADE VS STAGE — grade = degree of cell differentiation and mitotic activity on histology, low- to high-grade/anaplastic, correlates with aggressiveness; stage = degree of invasion and spread, depth correlates with metastasis risk, clinical (c) or pathologic (p); TNM staging (importance M > N > T) — primary tumor size/invasion, regional lymph node metastasis, distant metastasis; stage generally has more prognostic value than grade (a high-stage yet low-grade tumor is usually worse than a low-stage yet high-grade tumor); stage determines survival.",
  subject: "Pathology",
  system: "Section II · High-Yield General Principles — Pathology: Neoplasia",
  pilotCategory:
    "The neoplasia spread's complete architecture — the definition with parenchyma + stroma, the five-stage progression with each molecular gate (pleomorphism + ↑N:C ratio; intact basement membrane; metalloproteinases + E-cadherin loss; lymphatics or blood), the carcinoma-vs-sarcoma rule, the benign and malignant feature lists, hamartoma vs choristoma, the full 10-row nomenclature table, and the grade-vs-stage fork with the TNM priority and the stage-trumps-grade rule.",
  difficulty: 2,
  readTime: 9,
  sourceRef:
    "First Aid 2026, Part 1 pp. 215–216 (Pathology — Neoplasia: Neoplasia and neoplastic progression [definition, the five-stage cervical progression with the molecular gates]; Tumor nomenclature [carcinoma vs sarcoma, benign vs malignant features, hamartoma vs choristoma, the cell-type nomenclature table with the Mesenchyme category header, grade vs stage, the TNM staging system with importance M > N > T, and the stage-trumps-grade rule]; the two vector figures — the cervical progression diagram and the grade + TNM illustrations — described in text, never reproduced)",
  tags: [
    "neoplasia",
    "neoplastic progression",
    "parenchyma",
    "stroma",
    "monoclonal proliferation",
    "dysplasia",
    "pleomorphism",
    "nuclear-to-cytoplasmic ratio",
    "reversible dysplasia",
    "carcinoma in situ",
    "preinvasive carcinoma",
    "basement membrane",
    "irreversible dysplasia",
    "invasive carcinoma",
    "metalloproteinases",
    "collagenases",
    "hydrolases",
    "E-cadherin",
    "cell-cell contacts",
    "metastasis",
    "lymphatic spread",
    "hematogenous spread",
    "tumor nomenclature",
    "carcinoma",
    "epithelial origin",
    "sarcoma",
    "mesenchymal origin",
    "benign tumor",
    "well-differentiated",
    "well-demarcated",
    "low mitotic activity",
    "malignant tumor",
    "poor differentiation",
    "erratic growth",
    "local invasion",
    "decreased apoptosis",
    "hamartoma",
    "Peutz-Jeghers polyps",
    "choristoma",
    "Meckel diverticulum",
    "ectopic tissue",
    "adenoma",
    "papilloma",
    "adenocarcinoma",
    "papillary carcinoma",
    "leukemia",
    "lymphoma",
    "hemangioma",
    "angiosarcoma",
    "leiomyoma",
    "leiomyosarcoma",
    "rhabdomyoma",
    "rhabdomyosarcoma",
    "fibroma",
    "fibrosarcoma",
    "osteoma",
    "osteosarcoma",
    "lipoma",
    "liposarcoma",
    "nevus",
    "mole",
    "melanoma",
    "tumor grade",
    "tumor stage",
    "cell differentiation",
    "anaplastic",
    "high-grade",
    "low-grade",
    "TNM staging",
    "primary tumor",
    "regional lymph node",
    "distant metastasis",
    "clinical findings",
    "pathologic findings",
    "prognosis",
    "stage trumps grade",
  ],
  core: {
    what:
      "NEOPLASIA: uncontrolled, often monoclonal proliferation of cells; can be benign or malignant. Any neoplastic growth has two components — parenchyma (neoplastic cells) and supporting stroma (nonneoplastic; eg, blood vessels, connective tissue). THE PROGRESSION: Normal cells (basal → apical polarity; the cervical example shows normal cells and the spectrum of dysplasia) → DYSPLASIA (loss of uniformity in cell size and shape [pleomorphism]; loss of tissue orientation; nuclear changes [eg, ↑ nuclear:cytoplasmic ratio]; often reversible) → CARCINOMA IN SITU / PREINVASIVE (irreversible severe dysplasia that involves the entire thickness of epithelium but does not penetrate the intact basement membrane) → INVASIVE CARCINOMA (cells have invaded basement membrane using collagenases and hydrolases [metalloproteinases]; cell-cell contacts lost by inactivation of E-cadherin) → METASTASIS (spread to distant organ[s] via lymphatics or blood). NOMENCLATURE: carcinoma implies epithelial origin, sarcoma denotes mesenchymal origin; both terms generally imply malignancy. Benign tumors are usually well-differentiated and well-demarcated, with low mitotic activity, no metastases, and no necrosis. Malignant tumors (cancers) may show poor differentiation, erratic growth, local invasion, metastasis, and ↓ apoptosis. Hamartoma = disorganized overgrowth of tissues in their native location (eg, Peutz-Jeghers polyps). Choristoma = normal tissue in a foreign location (eg, gastric tissue located in distal ileum in Meckel diverticulum). THE NOMENCLATURE TABLE — Epithelium: Adenoma, papilloma / Adenocarcinoma, papillary carcinoma. Mesenchyme (category header): Blood cells (— / Leukemia, lymphoma), Blood vessels (Hemangioma / Angiosarcoma), Smooth muscle (Leiomyoma / Leiomyosarcoma), Striated muscle (Rhabdomyoma / Rhabdomyosarcoma), Connective tissue (Fibroma / Fibrosarcoma), Bone (Osteoma / Osteosarcoma), Fat (Lipoma / Liposarcoma), Melanocyte (Nevus/mole / Melanoma). GRADE: degree of cell differentiation (tissue of origin resemblance) and mitotic activity on histology; ranges from low-grade (well differentiated) to high-grade (poorly differentiated or undifferentiated [anaplastic]); higher grade often correlates with higher aggressiveness. STAGE: degree of invasion and spread from initial site; depth of invasion correlates to risk of metastasis; based on clinical (c) or pathologic (p) findings. TNM STAGING SYSTEM (importance: M > N > T): ▘ Primary tumor size/invasion. ▘ Regional lymph node metastasis. ▘ Distant metastasis. Stage generally has more prognostic value than grade (eg, a high-stage yet low-grade tumor is usually worse than a low-stage yet high-grade tumor). Stage (spread) determines survival.",
    why:
      "This two-page spread opens the Neoplasia banner with the cancer life cycle and the two axes that prognose it. The progression diagram is the spine: a cervical epithelium walking through five stations, each gated by a molecular event — pleomorphism and the rising nuclear:cytoplasmic ratio at dysplasia (still reversible), the intact basement membrane at carcinoma in situ (irreversible but contained), the metalloproteinase breach and E-cadherin loss at invasive carcinoma (the walls are down), and the lymphatic or blood route at metastasis (the distance is closed). The basement membrane is the single most important line on the page: above it the disease is curable by excision, below it the disease is in the body. The nomenclature block then names every tumor by its tissue of origin: carcinoma for epithelium, sarcoma for mesenchyme, with the benign and malignant forms paired across the cell-type table — the -oma ending naming the benign mesenchymal tumor (lipoma, osteoma, leiomyoma) and the -sarcoma ending naming its malignant counterpart (liposarcoma, osteosarcoma, leiomyosarcoma), with blood cells and melanocyte breaking the pattern (leukemia and lymphoma for blood, melanoma for melanocyte, where the benign names are nevus/mole). The hamartoma-vs-choristoma pair closes the nomenclature: native-but-disorganized (Peutz-Jeghers) against foreign-but-normal (Meckel's ectopic gastric tissue). Then grade and stage give the two prognostic axes — grade reads differentiation under the microscope (low to high to anaplastic, correlating with aggressiveness), stage reads the body (depth of invasion, lymph nodes, distant metastasis, by clinical or pathologic findings) — and the TNM system ranks them by importance (M > N > T), with the final rule that stage trumps grade: a high-stage low-grade tumor is worse than a low-stage high-grade tumor, because spread determines survival.",
    keyIdea:
      "Read every neoplasia question through five frames. FRAME 1 — THE DEFINITION: neoplasia is uncontrolled, often monoclonal proliferation; parenchyma (the neoplastic cells) + stroma (the nonneoplastic support) compose every growth. FRAME 2 — THE PROGRESSION (the basement membrane is the line): Normal (basal-apical polarity) → Dysplasia (pleomorphism + ↑N:C ratio, reversible) → Carcinoma in situ (full-thickness severe dysplasia, basement membrane INTACT, irreversible) → Invasive carcinoma (basement membrane BREACHED by metalloproteinases; E-cadherin lost) → Metastasis (lymphatics or blood to distant organs). FRAME 3 — THE NOMENCLATURE: carcinoma = epithelial, sarcoma = mesenchymal, both malignant; benign = well-differentiated, well-demarcated, low mitotic activity, no metastases, no necrosis; malignant = poor differentiation, erratic growth, local invasion, metastasis, ↓ apoptosis; hamartoma = native tissue disorganized (Peutz-Jeghers); choristoma = normal tissue foreign (Meckel ectopic gastric). FRAME 4 — THE TABLE: pair every cell type with its benign (-oma) and malignant (-carcinoma for epithelium, -sarcoma for mesenchyme) name; blood cells break the pattern (leukemia, lymphoma) and melanocyte breaks the benign (nevus/mole) but follows the malignant (melanoma). FRAME 5 — THE TWO AXES: GRADE = differentiation (low → high → anaplastic, aggressiveness); STAGE = spread (depth → nodes → distant, by clinical or pathologic findings); TNM with M > N > T; stage trumps grade because spread determines survival.",
  },
  mechanisms: [
    {
      id: "progression-cascade",
      title: "The progression cascade: from a polarized epithelium to a distant metastasis",
      context: "The neoplastic progression figure (book 215)",
      flow: {
        nodes: [
          {
            id: "normal",
            label: "NORMAL — basal → apical polarity",
            sublabel:
              "Input — the cervical example shows normal cells and the spectrum of dysplasia; the epithelium is polarized and the basement membrane is intact beneath it.",
            variant: "input",
          },
          {
            id: "dysplasia",
            label: "DYSPLASIA — pleomorphism + ↑ N:C ratio",
            sublabel:
              "Loss of uniformity in cell size and shape (pleomorphism); loss of tissue orientation; nuclear changes (eg, ↑ nuclear:cytoplasmic ratio). Often REVERSIBLE — the gate can swing back.",
            variant: "process",
          },
          {
            id: "cis",
            label: "CARCINOMA IN SITU — full-thickness, basement membrane INTACT",
            sublabel:
              "Irreversible severe dysplasia that involves the ENTIRE thickness of epithelium but does NOT penetrate the intact basement membrane. The line is drawn but not crossed.",
            variant: "process",
          },
          {
            id: "invasive",
            label: "INVASIVE CARCINOMA — basement membrane BREACHED",
            sublabel:
              "Cells have invaded the basement membrane using collagenases and hydrolases (metalloproteinases). Cell-cell contacts lost by inactivation of E-cadherin. The walls are down.",
            variant: "process",
          },
          {
            id: "metastasis",
            label: "METASTASIS — distant organ(s) via lymphatics or blood",
            sublabel:
              "Output — spread to distant organ(s) via lymphatics or blood. The distance is closed; the disease is in the body.",
            variant: "output",
          },
        ],
        edges: [
          { from: "normal", to: "dysplasia", label: "pleomorphism + ↑N:C" },
          { from: "dysplasia", to: "cis", label: "full-thickness, irreversible" },
          { from: "cis", to: "invasive", label: "metalloproteinases + ↓E-cadherin" },
          { from: "invasive", to: "metastasis", label: "lymphatics or blood" },
        ],
      },
    },
    {
      id: "grade-vs-stage-axis",
      title: "The grade-vs-stage axis: differentiation under the microscope vs spread through the body",
      context: "The tumor grade vs stage block (book 216)",
      flow: {
        nodes: [
          {
            id: "input",
            label: "A tumor is sampled — what predicts survival?",
            sublabel:
              "Input — every solid tumor is graded on histology and staged on imaging and pathology. The two axes are independent and the page's rule names the winner.",
            variant: "input",
          },
          {
            id: "grade",
            label: "GRADE — differentiation + mitotic activity on histology",
            sublabel:
              "Degree of cell differentiation (tissue of origin resemblance) and mitotic activity. Low-grade (well differentiated) → high-grade (poorly differentiated or undifferentiated [anaplastic]). Higher grade correlates with higher aggressiveness.",
            variant: "process",
          },
          {
            id: "stage",
            label: "STAGE — invasion + spread from the initial site",
            sublabel:
              "Degree of invasion and spread; depth of invasion correlates to risk of metastasis. Based on clinical (c) or pathologic (p) findings. The TNM staging system (importance: M > N > T) — primary tumor size/invasion; regional lymph node metastasis; distant metastasis.",
            variant: "process",
          },
          {
            id: "rule",
            label: "THE RULE — stage trumps grade; spread determines survival",
            sublabel:
              "Output — stage generally has more prognostic value than grade (eg, a high-stage yet low-grade tumor is usually worse than a low-stage yet high-grade tumor). Stage (spread) determines survival.",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "grade", label: "under the microscope" },
          { from: "input", to: "stage", label: "through the body" },
          { from: "grade", to: "rule", label: "aggressiveness" },
          { from: "stage", to: "rule", label: "spread → survival" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "neoplasia-progression-map",
      title: "The neoplasia progression and nomenclature map (an original KYP adaptation with redrawn figures)",
      caption:
        "An original KYP adaptation of the source pages (book 215-216): the definition panel (parenchyma + stroma); the five-station progression cascade as an original KYP redraw of the source's cervical epithelium diagram (Normal → Dysplasia → Carcinoma in situ → Invasive carcinoma → Metastasis, with the basement membrane band intact through CIS and breached at Invasive, the metalloproteinase and E-cadherin gates labeled, and the blood/lymphatic vessel at the base for metastasis); the nomenclature panel (carcinoma vs sarcoma, benign vs malignant features, hamartoma vs choristoma); the 10-row nomenclature table grid; and the grade-vs-stage fork with the TNM staging figure as an original KYP redraw (T primary tumor, N lymph node, M blood/lymphatic vessel with spread to other organs and tissues, importance M > N > T) and the stage-trumps-grade rule.",
      notice:
        "Census (pdfimages + VLM): NO raster images on either page (pdfimages -list returned zero rows for both pdf 237 and pdf 238). The TWO vector figures — p237's cervical epithelium progression diagram (the basement membrane band, the blood/lymphatic vessel, and the five-stage arrow chain) and p238's two figures (the grade illustration with the four cell-cluster panels; the TNM staging figure with T, N [lymph node], and M [blood/lymphatic vessel + spread]) — are redrawn as ORIGINAL KYP figures with original glyphs (the P2/P3 pure-vector convention). The nomenclature table and the grade-vs-stage block are pure text, carried verbatim in this note's tables. No copyrighted photographs exist on either page (VLM census confirmed); nothing reproduced. No margin mnemonics on either page; the KYP memory layer stays original.",
    },
    {
      kind: "table",
      title: "Book 215 — the neoplasia definition and the five-stage progression (carried verbatim)",
      intro: "The cancer life cycle and its molecular gates, as printed.",
      columns: ["STAGE", "VERBATIM — book 215"],
      rows: [
        [
          "THE DEFINITION",
          "Uncontrolled, often monoclonal proliferation of cells. Can be benign or malignant. Any neoplastic growth has two components: parenchyma (neoplastic cells) and supporting stroma (nonneoplastic; eg, blood vessels, connective tissue).",
        ],
        [
          "NORMAL CELLS",
          "Normal cells with basal → apical polarity. See cervical example, which shows normal cells and spectrum of dysplasia, as discussed below.",
        ],
        [
          "DYSPLASIA",
          "Loss of uniformity in cell size and shape (pleomorphism); loss of tissue orientation; nuclear changes (eg, ↑ nuclear:cytoplasmic ratio); often reversible.",
        ],
        [
          "CARCINOMA IN SITU / PREINVASIVE",
          "Irreversible severe dysplasia that involves the entire thickness of epithelium but does not penetrate the intact basement membrane.",
        ],
        [
          "INVASIVE CARCINOMA",
          "Cells have invaded basement membrane using collagenases and hydrolases (metalloproteinases). Cell-cell contacts lost by inactivation of E-cadherin.",
        ],
        [
          "METASTASIS",
          "Spread to distant organ(s) via lymphatics or blood.",
        ],
      ],
      caption:
        "Five stations, each with a molecular gate: pleomorphism and the rising N:C ratio at dysplasia (reversible); the intact basement membrane at CIS (irreversible but contained); the metalloproteinase breach and E-cadherin loss at invasive carcinoma (the walls are down); the lymphatic or blood route at metastasis (the distance is closed). The basement membrane is the single most important line on the page.",
    },
    {
      kind: "table",
      title: "Book 216 — tumor nomenclature: the rules and the cell-type table (carried verbatim)",
      intro: "The naming rules, the benign-vs-malignant feature lists, the hamartoma-vs-choristoma pair, and the full cell-type nomenclature table, as printed.",
      columns: ["BLOCK", "VERBATIM — book 216"],
      rows: [
        [
          "CARCINOMA vs SARCOMA",
          "Carcinoma implies epithelial origin, whereas sarcoma denotes mesenchymal origin. Both terms generally imply malignancy.",
        ],
        [
          "BENIGN TUMORS",
          "Usually well-differentiated and well-demarcated, with low mitotic activity, no metastases, and no necrosis.",
        ],
        [
          "MALIGNANT TUMORS (CANCERS)",
          "May show poor differentiation, erratic growth, local invasion, metastasis, and ↓ apoptosis.",
        ],
        [
          "HAMARTOMA vs CHORISTOMA",
          "Terms for non-neoplastic malformations include hamartoma (disorganized overgrowth of tissues in their native location, eg, Peutz-Jeghers polyps) and choristoma (normal tissue in a foreign location, eg, gastric tissue located in distal ileum in Meckel diverticulum).",
        ],
        [
          "NOMENCLATURE TABLE — EPITHELIUM",
          "BENIGN: Adenoma, papilloma. MALIGNANT: Adenocarcinoma, papillary carcinoma.",
        ],
        [
          "NOMENCLATURE TABLE — MESENCHYME (category header)",
          "The mesenchymal rows group under this header: Blood cells, Blood vessels, Smooth muscle, Striated muscle, Connective tissue, Bone, Fat.",
        ],
        [
          "NOMENCLATURE TABLE — BLOOD CELLS",
          "BENIGN: —. MALIGNANT: Leukemia, lymphoma.",
        ],
        [
          "NOMENCLATURE TABLE — BLOOD VESSELS",
          "BENIGN: Hemangioma. MALIGNANT: Angiosarcoma.",
        ],
        [
          "NOMENCLATURE TABLE — SMOOTH MUSCLE",
          "BENIGN: Leiomyoma. MALIGNANT: Leiomyosarcoma.",
        ],
        [
          "NOMENCLATURE TABLE — STRIATED MUSCLE",
          "BENIGN: Rhabdomyoma. MALIGNANT: Rhabdomyosarcoma.",
        ],
        [
          "NOMENCLATURE TABLE — CONNECTIVE TISSUE",
          "BENIGN: Fibroma. MALIGNANT: Fibrosarcoma.",
        ],
        [
          "NOMENCLATURE TABLE — BONE",
          "BENIGN: Osteoma. MALIGNANT: Osteosarcoma.",
        ],
        [
          "NOMENCLATURE TABLE — FAT",
          "BENIGN: Lipoma. MALIGNANT: Liposarcoma.",
        ],
        [
          "NOMENCLATURE TABLE — MELANOCYTE",
          "BENIGN: Nevus/mole. MALIGNANT: Melanoma.",
        ],
      ],
      caption:
        "The naming rules — carcinoma for epithelium, sarcoma for mesenchyme, both malignant; the -oma ending for the benign mesenchymal form and the -sarcoma ending for its malignant counterpart; blood cells breaking the pattern (leukemia, lymphoma) and melanocyte breaking the benign (nevus/mole) but matching the malignant (melanoma). Hamartoma = native tissue disorganized (Peutz-Jeghers); choristoma = normal tissue foreign (Meckel ectopic gastric).",
    },
    {
      kind: "table",
      title: "Book 216 — tumor grade vs stage (carried verbatim)",
      intro: "The two prognostic axes, the TNM priority, and the stage-trumps-grade rule, as printed.",
      columns: ["AXIS", "VERBATIM — book 216"],
      rows: [
        [
          "GRADE",
          "Degree of cell differentiation (tissue of origin resemblance) and mitotic activity on histology. Ranges from low-grade (well differentiated) to high-grade (poorly differentiated or undifferentiated [anaplastic]). Higher grade often correlates with higher aggressiveness.",
        ],
        [
          "STAGE",
          "Degree of invasion and spread from initial site. Depth of invasion correlates to risk of metastasis. Based on clinical (c) or pathologic (p) findings.",
        ],
        [
          "TNM STAGING SYSTEM (importance: M > N > T)",
          "▘ Primary tumor size/invasion. ▘ Regional lymph node metastasis. ▘ Distant metastasis.",
        ],
        [
          "THE PROGNOSTIC RULE",
          "Stage generally has more prognostic value than grade (eg, a high-stage yet low-grade tumor is usually worse than a low-stage yet high-grade tumor). Stage (spread) determines survival.",
        ],
      ],
      caption:
        "Grade reads differentiation under the microscope (low → high → anaplastic, aggressiveness); stage reads the body (depth → nodes → distant, by clinical or pathologic findings). The TNM priority is M > N > T — distant metastasis weighs most, then regional nodes, then primary tumor size. And the final rule: stage trumps grade, because spread determines survival.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem:
          "A 54-year-old woman's routine cervical cytology shows high-grade squamous intraepithelial lesion; colposcopy-directed biopsy reveals severe dysplasia involving the full thickness of the squamous epithelium. The basement membrane is intact, and there is no stromal invasion.",
        discriminator:
          "Carcinoma in situ — full-thickness severe dysplasia with the basement membrane intact (the line is drawn but not crossed)",
        concept: "The basement membrane is the line",
        answer:
          "The progression's third station: irreversible severe dysplasia that involves the entire thickness of epithelium but does NOT penetrate the intact basement membrane — carcinoma in situ (preinvasive). The basement membrane is the single most important line on the page: above it the disease is curable by excision (cone biopsy / LEEP), below it the disease is invasive. The molecular gate to the next station (invasive carcinoma) is the metalloproteinase breach (collagenases and hydrolases) plus E-cadherin loss — neither has occurred here.",
      },
      {
        stem:
          "A 62-year-old man has a 7-cm soft-tissue mass in the right thigh; core needle biopsy shows a malignant spindle-cell neoplasm with pleomorphic cells and mitotic figures, and the tumor cells stain positive for vimentin but negative for cytokeratin.",
        discriminator:
          "Sarcoma — mesenchymal origin (the carcinoma-vs-sarcoma rule names the family)",
        concept: "Carcinoma epithelial, sarcoma mesenchymal",
        answer:
          "The nomenclature rule: carcinoma implies epithelial origin, sarcoma denotes mesenchymal origin, both terms generally imply malignancy. The spindle-cell morphology, vimentin positivity, and cytokeratin negativity confirm mesenchymal origin → the tumor is a sarcoma (in the thigh, likely a liposarcoma, leiomyosarcoma, or fibrosarcoma depending on the dominant cell type). The cell-type table pairs the benign (-oma: lipoma, leiomyoma, fibroma) with the malignant (-sarcoma: liposarcoma, leiomyosarcoma, fibrosarcoma) for each mesenchymal lineage.",
      },
      {
        stem:
          "A 58-year-old man has a 4-cm well-differentiated colorectal adenocarcinoma confined to the submucosa on endoscopic ultrasound; CT of chest, abdomen, and pelvis shows no lymphadenopathy and no distant metastases.",
        discriminator:
          "Low stage despite low-grade differentiation — stage trumps grade; spread determines survival",
        concept: "The stage-trumps-grade rule",
        answer:
          "The page's final rule: stage generally has more prognostic value than grade (a high-stage yet low-grade tumor is usually worse than a low-stage yet high-grade tumor). This tumor is well-differentiated (low-grade) AND low-stage (T1, N0, M0 by the TNM system, where importance is M > N > T) — both axes favorable. Stage (spread) determines survival, so the absence of nodal and distant disease is the dominant prognostic feature, and the well-differentiated histology adds further favorable weight.",
      },
    ],
    traps: [
      {
        a: "Carcinoma in situ",
        b: "Invasive carcinoma",
        whyConfused: "Both are severe dysplasia of the epithelium",
        keyDifference:
          "CIS involves the entire thickness of epithelium but does NOT penetrate the intact basement membrane (the line is drawn but not crossed); invasive carcinoma has BREACHED the basement membrane using collagenases and hydrolases (metalloproteinases), with cell-cell contacts lost by inactivation of E-cadherin",
        clue:
          "The basement membrane on histology is the single discriminator: intact = CIS (preinvasive, curable by excision); breached = invasive carcinoma",
      },
      {
        a: "Dysplasia",
        b: "Carcinoma in situ",
        whyConfused: "Both are disordered epithelial cells with pleomorphism and ↑ N:C ratio",
        keyDifference:
          "DYSPLASIA is often REVERSIBLE and may involve only part of the epithelial thickness; CARCINOMA IN SITU is IRREVERSIBLE and involves the ENTIRE thickness of epithelium (but the basement membrane is still intact)",
        clue:
          "Reversibility and full-thickness involvement separate them: dysplasia can regress (and may be partial-thickness); CIS is irreversible and full-thickness",
      },
      {
        a: "Hamartoma",
        b: "Choristoma",
        whyConfused: "Both are non-neoplastic malformations (not true tumors)",
        keyDifference:
          "HAMARTOMA = disorganized overgrowth of tissues in their NATIVE location (eg, Peutz-Jeghers polyps in the gut); CHORISTOMA = NORMAL tissue in a FOREIGN location (eg, gastric tissue located in distal ileum in Meckel diverticulum)",
        clue:
          "Native-but-disorganized = hamartoma; foreign-but-normal = choristoma — the location (native vs foreign) is the discriminator",
      },
      {
        a: "Tumor grade",
        b: "Tumor stage",
        whyConfused: "Both prognose a tumor and both use low/high language",
        keyDifference:
          "GRADE = degree of cell DIFFERENTIATION and mitotic activity on histology (low-grade well-differentiated to high-grade anaplastic; correlates with aggressiveness); STAGE = degree of invasion and SPREAD from the initial site (depth → nodes → distant, by clinical [c] or pathologic [p] findings); TNM with M > N > T. Stage trumps grade — spread determines survival",
        clue:
          "Under the microscope = grade; through the body = stage; when they disagree, stage wins (a high-stage low-grade tumor is worse than a low-stage high-grade tumor)",
      },
    ],
    pivots: [
      {
        lookAlike: "An epithelial biopsy with severe atypia — where in the progression is it?",
        differentiator:
          "Read the basement membrane first: intact + partial-thickness atypia = dysplasia (often reversible); intact + full-thickness atypia = carcinoma in situ (irreversible but preinvasive); breached = invasive carcinoma (metalloproteinases + E-cadherin loss); distant organ involvement = metastasis (lymphatics or blood)",
        correctPath:
          "Basement membrane intact + full-thickness = CIS — the line is drawn but not crossed, and excision is curative",
      },
      {
        lookAlike: "A tumor name ending in -oma — benign or malignant?",
        differentiator:
          "For mesenchymal tumors the -oma ending is BENIGN (lipoma, osteoma, leiomyoma, fibroma, hemangioma, rhabdomyoma) and the -sarcoma ending is its malignant counterpart (liposarcoma, osteosarcoma, leiomyosarcoma, fibrosarcoma, angiosarcoma, rhabdomyosarcoma); for epithelial tumors -oma is benign (adenoma, papilloma) and -carcinoma is malignant (adenocarcinoma, papillary carcinoma). The two breakers: blood cells (leukemia, lymphoma — malignant, no benign form in the table) and melanocyte (nevus/mole benign, melanoma malignant)",
        correctPath:
          "Identify the tissue of origin first (epithelium vs mesenchyme vs blood vs melanocyte), then apply the -oma / -carcinoma / -sarcoma rule — and remember the two breakers",
      },
    ],
    miniCase: {
      vignette:
        "A 51-year-old woman undergoes routine cervical cytology that reveals a high-grade squamous intraepithelial lesion. Colposcopy with directed biopsy shows severe dysplasia involving the full thickness of the squamous epithelium; the basement membrane is intact and there is no stromal invasion. A cervical cone biopsy is performed to confirm the extent. Pelvic MRI shows no mass, no parametrial involvement, and no lymphadenopathy. The lesion is completely excised at the cone margin. The pathologist grades the lesion as high-grade (poorly differentiated cytology) but stages it as Tis (carcinoma in situ), N0, M0.",
      question:
        "Name the stage of the neoplastic progression, identify the molecular gate that has NOT yet been crossed, and explain why the high-grade cytology does not override the favorable prognosis.",
      options: [
        {
          label:
            "Carcinoma in situ (preinvasive) — full-thickness severe dysplasia with the basement membrane intact; the metalloproteinase breach (collagenases/hydrolases) and E-cadherin loss have NOT occurred; stage trumps grade, and the Tis N0 M0 stage (no invasion, no nodes, no distant metastasis) determines survival — excision is curative",
          text: "The line is drawn but not crossed; spread, not differentiation, decides the prognosis.",
          correct: true,
          why:
            "Correct on all three layers. (1) THE STATION: the biopsy's full-thickness severe dysplasia WITHOUT basement membrane penetration = CARCINOMA IN SITU / PREINVASIVE — the third station of the progression (Normal → Dysplasia → CIS → Invasive → Metastasis). The line is drawn but not crossed. (2) THE MOLECULAR GATE: the gate from CIS to invasive carcinoma is the metalloproteinase breach — collagenases and hydrolases dissolving the basement membrane — plus the inactivation of E-cadherin dissolving cell-cell contacts; NEITHER has occurred (the basement membrane is intact, no stromal invasion). (3) THE PROGNOSIS: the page's final rule is verbatim — stage generally has more prognostic value than grade (a high-stage yet low-grade tumor is usually worse than a low-stage yet high-grade tumor); stage (spread) determines survival. The Tis N0 M0 stage (no invasion, no nodes, no distant metastasis by the TNM system, importance M > N > T) places the lesion in the curable-by-excision tier, and the high-grade cytology does not override it because the tumor has not yet gained access to the body.",
        },
        {
          label:
            "Invasive carcinoma — the full-thickness atypia means the basement membrane has been breached; the high-grade cytology confirms invasion",
          text: "Full-thickness equals invasive; the grade is the giveaway.",
          why:
            "Wrong station and wrong gate: the biopsy explicitly shows the basement membrane INTACT and no stromal invasion — full-thickness severe dysplasia confined to the epithelium is the definition of carcinoma in situ (preinvasive), not invasive carcinoma. The molecular gate (metalloproteinase breach + E-cadherin loss) has not been crossed. Grade describes differentiation, not invasion — a high-grade CIS is still preinvasive until the basement membrane falls.",
        },
        {
          label:
            "Dysplasia — the lesion is reversible and the cone biopsy was unnecessary; the high-grade cytology is a reactive change",
          text: "Reversible dysplasia should be observed, not excised.",
          why:
            "Wrong station and wrong reversibility: dysplasia is OFTEN reversible and may involve only PART of the epithelial thickness; carcinoma in situ is IRREVERSIBLE and involves the ENTIRE thickness — the biopsy's full-thickness severe dysplasia meets the CIS criterion, not dysplasia. The cone biopsy was appropriate because CIS, though preinvasive, is the irreversible step that warrants excision to prevent progression to invasive carcinoma.",
        },
        {
          label:
            "Metastatic carcinoma — the high-grade cytology implies distant spread; the negative MRI is a false negative",
          text: "High grade means the tumor has already spread; imaging misses it.",
          why:
            "Wrong station and wrong understanding of metastasis: metastasis is spread to distant organ(s) via lymphatics or blood, and it requires the prior stations (CIS → invasive carcinoma) to have occurred — neither is present here (the basement membrane is intact). Grade does not determine metastasis; stage does (depth of invasion correlates to risk of metastasis, by the page's rule). The negative MRI with no mass, no parametrial involvement, and no lymphadenopathy correctly stages the lesion as M0.",
        },
        {
          label:
            "Hamartoma — the lesion is a non-neoplastic malformation of the cervical epithelium; the cytology is overcalled",
          text: "Disorganized native tissue — a malformation, not a neoplasm.",
          why:
            "Wrong category entirely: hamartoma is disorganized overgrowth of tissues in their NATIVE location (eg, Peutz-Jeghers polyps in the gut) — a non-neoplastic malformation. The cervical lesion's full-thickness severe dysplasia with intact basement membrane is the definition of carcinoma in situ, a TRUE NEOPLASTIC lesion (irreversible, monoclonal proliferation). The cytologic atypia is not a malformation; it is neoplastic progression.",
        },
      ],
      reasoning:
        "The stem walks all five frames of the spread. (1) THE DEFINITION: the cervical lesion is a neoplastic proliferation (parenchyma of dysplastic squamous cells). (2) THE PROGRESSION: the biopsy's full-thickness severe dysplasia WITHOUT basement membrane penetration = CARCINOMA IN SITU / PREINVASIVE — the third station. The gate from CIS to invasive carcinoma (the metalloproteinase breach by collagenases/hydrolases, plus E-cadherin loss dissolving cell-cell contacts) has NOT been crossed. (3) THE NOMENCLATURE: cervical squamous carcinoma = carcinoma = epithelial origin. (4) THE TWO AXES: the pathologist grades high (poorly differentiated cytology) but stages Tis N0 M0 — preinvasive, no nodes, no distant metastasis. (5) THE PROGNOSTIC RULE: stage trumps grade — a high-stage low-grade tumor is worse than a low-stage high-grade tumor, and stage (spread) determines survival; the Tis N0 M0 stage places the lesion in the curable-by-excision tier, and the cone biopsy with clear margins is the definitive treatment. The distractors fail at: invasive carcinoma (the basement membrane is intact — the gate is uncrossed), dysplasia (the lesion is full-thickness and irreversible — beyond dysplasia), metastatic carcinoma (no distant spread, and metastasis requires prior invasion — which has not occurred), and hamartoma (the lesion is neoplastic, not a malformation).",
    },
  },
  mnemonics: [
    {
      code: "THE BASEMENT MEMBRANE IS THE LINE",
      meaning:
        "The progression's single most important discriminator: the basement membrane is INTACT at dysplasia and carcinoma in situ (preinvasive, curable by excision) and BREACHED at invasive carcinoma (metalloproteinases — collagenases and hydrolases — plus E-cadherin loss). The line is drawn but not crossed at CIS; crossed at invasive; the body is reached at metastasis.",
      memorizes: "The progression's molecular gate",
      whenToUse: "Any cervical or epithelial biopsy question asking whether the lesion is in situ or invasive",
      clinical:
        "Above the line, excision cures; below the line, the disease is in the body — the basement membrane is the surgeon's friend and the patient's gate.",
    },
    {
      code: "CARCINOMA EPITHELIAL, SARCOMA MESENCHYME",
      meaning:
        "The nomenclature rule verbatim: carcinoma implies epithelial origin, sarcoma denotes mesenchymal origin, both terms generally imply malignancy. The benign epithelial forms are adenoma and papilloma (malignant: adenocarcinoma, papillary carcinoma); the benign mesenchymal forms end in -oma (lipoma, osteoma, leiomyoma, fibroma, hemangioma, rhabdomyoma) and their malignant counterparts end in -sarcoma (liposarcoma, osteosarcoma, leiomyosarcoma, fibrosarcoma, angiosarcoma, rhabdomyosarcoma). The two breakers: blood cells (leukemia, lymphoma — malignant, no benign form) and melanocyte (nevus/mole benign, melanoma malignant).",
      memorizes: "The nomenclature table",
      whenToUse: "Any tumor-naming question (carcinoma vs sarcoma; benign vs malignant -oma vs -sarcoma)",
      clinical:
        "Name the tissue of origin first, then apply the ending rule — and remember the two breakers (blood and melanocyte).",
    },
    {
      code: "GRADE DIFFERENTIATES, STAGE SPREADS",
      meaning:
        "The two prognostic axes: GRADE = degree of cell DIFFERENTIATION (tissue of origin resemblance) and mitotic activity on histology, from low-grade (well-differentiated) to high-grade (anaplastic), correlating with aggressiveness; STAGE = degree of invasion and SPREAD from the initial site, depth correlating with metastasis risk, by clinical (c) or pathologic (p) findings. Grade reads the microscope; stage reads the body.",
      memorizes: "The grade-vs-stage fork",
      whenToUse: "Any prognostic question distinguishing grade from stage",
      clinical:
        "Under the microscope = grade; through the body = stage — and when they disagree, stage wins.",
    },
    {
      code: "M N T — THE PROGNOSTIC PRIORITY",
      meaning:
        "The TNM staging system's importance ranking, verbatim: M > N > T. M (distant metastasis) weighs most, then N (regional lymph node metastasis), then T (primary tumor size/invasion). And the rule that uses this ranking: stage generally has more prognostic value than grade (a high-stage yet low-grade tumor is usually worse than a low-stage yet high-grade tumor); stage (spread) determines survival.",
      memorizes: "The TNM priority and the stage-trumps-grade rule",
      whenToUse: "Any TNM staging question or any grade-vs-stage prognostic question",
      clinical:
        "Distant metastasis is the heaviest weight on survival, then nodes, then primary size — and the whole stage axis outweighs the grade axis because spread determines survival.",
    },
  ],
  rapidReview: {
    s30: [
      "Neoplasia: uncontrolled, often monoclonal proliferation of cells; benign or malignant; parenchyma (neoplastic cells) + supporting stroma (nonneoplastic; eg, blood vessels, connective tissue)",
      "Progression: Normal (basal → apical polarity) → Dysplasia (pleomorphism, ↑ N:C ratio, often reversible) → Carcinoma in situ/preinvasive (irreversible, full-thickness, basement membrane INTACT) → Invasive carcinoma (basement membrane BREACHED by metalloproteinases [collagenases, hydrolases]; E-cadherin lost) → Metastasis (lymphatics or blood to distant organs)",
      "Carcinoma = epithelial; sarcoma = mesenchymal; both generally imply malignancy",
      "Benign: well-differentiated, well-demarcated, low mitotic activity, no metastases, no necrosis; Malignant: poor differentiation, erratic growth, local invasion, metastasis, ↓ apoptosis",
      "Hamartoma = disorganized overgrowth of tissues in their NATIVE location (eg, Peutz-Jeghers polyps); Choristoma = normal tissue in a FOREIGN location (eg, gastric tissue in distal ileum in Meckel diverticulum)",
      "Nomenclature table — Epithelium: adenoma/papilloma → adenocarcinoma/papillary carcinoma; Mesenchyme: blood cells (—, leukemia/lymphoma), blood vessels (hemangioma/angiosarcoma), smooth muscle (leiomyoma/leiomyosarcoma), striated muscle (rhabdomyoma/rhabdomyosarcoma), connective tissue (fibroma/fibrosarcoma), bone (osteoma/osteosarcoma), fat (lipoma/liposarcoma), melanocyte (nevus-mole/melanoma)",
      "Grade = degree of cell differentiation + mitotic activity on histology (low → high → anaplastic; correlates with aggressiveness); Stage = degree of invasion and spread (depth → nodes → distant, by clinical [c] or pathologic [p] findings)",
      "TNM staging system (importance: M > N > T): ▘ Primary tumor size/invasion; ▘ Regional lymph node metastasis; ▘ Distant metastasis",
      "Stage trumps grade: a high-stage yet low-grade tumor is usually worse than a low-stage yet high-grade tumor; stage (spread) determines survival",
    ],
    m3: [
      "THE BASEMENT MEMBRANE IS THE LINE — intact = dysplasia or CIS (preinvasive); breached = invasive carcinoma (metalloproteinases + ↓E-cadherin)",
      "CARCINOMA EPITHELIAL, SARCOMA MESENCHYME — both imply malignancy; -oma benign mesenchymal, -sarcoma malignant mesenchymal; blood (leukemia/lymphoma) and melanocyte (nevus/melanoma) are the breakers",
      "GRADE DIFFERENTIATES, STAGE SPREADS — grade under the microscope, stage through the body",
      "M N T THE PROGNOSTIC PRIORITY — M > N > T; stage trumps grade because spread determines survival",
      "Hamartoma = native but disorganized (Peutz-Jeghers); choristoma = foreign but normal (Meckel ectopic gastric)",
    ],
    m10: [
      "Dysplasia is OFTEN REVERSIBLE and may be partial-thickness; CIS is IRREVERSIBLE and full-thickness — both above the basement membrane",
      "The molecular gate from CIS to invasive carcinoma: collagenases and hydrolases (metalloproteinases) breach the basement membrane; E-cadherin inactivation dissolves cell-cell contacts",
      "The two nomenclature breakers: blood cells (leukemia, lymphoma — malignant, no benign form in the table) and melanocyte (nevus/mole benign, melanoma malignant — the -oma ending is benign here, unlike mesenchymal tumors)",
      "The TNM importance ranking (M > N > T) reflects what kills the patient: distant metastasis > regional nodes > primary tumor size",
      "The two vector figures (cervical progression diagram on book 215; grade illustration + TNM staging figure on book 216) — both pure vector line art, no rasters (pdfimages confirmed zero), redrawn as ORIGINAL KYP figures",
    ],
  },
  recall: [
    {
      q: "The neoplasia definition and the five-stage progression verbatim — including each molecular gate.",
      a: "DEFINITION: Uncontrolled, often monoclonal proliferation of cells. Can be benign or malignant. Any neoplastic growth has two components: parenchyma (neoplastic cells) and supporting stroma (nonneoplastic; eg, blood vessels, connective tissue). NORMAL CELLS: Normal cells with basal → apical polarity. DYSPLASIA: Loss of uniformity in cell size and shape (pleomorphism); loss of tissue orientation; nuclear changes (eg, ↑ nuclear:cytoplasmic ratio); often reversible. CARCINOMA IN SITU / PREINVASIVE: Irreversible severe dysplasia that involves the entire thickness of epithelium but does not penetrate the intact basement membrane. INVASIVE CARCINOMA: Cells have invaded basement membrane using collagenases and hydrolases (metalloproteinases). Cell-cell contacts lost by inactivation of E-cadherin. METASTASIS: Spread to distant organ(s) via lymphatics or blood.",
    },
    {
      q: "The carcinoma-vs-sarcoma rule and the benign/malignant feature lists verbatim.",
      a: "Carcinoma implies epithelial origin, whereas sarcoma denotes mesenchymal origin. Both terms generally imply malignancy. Benign tumors are usually well-differentiated and well-demarcated, with low mitotic activity, no metastases, and no necrosis. Malignant tumors (cancers) may show poor differentiation, erratic growth, local invasion, metastasis, and ↓ apoptosis.",
    },
    {
      q: "The hamartoma-vs-choristoma definitions verbatim.",
      a: "Terms for non-neoplastic malformations include hamartoma (disorganized overgrowth of tissues in their native location, eg, Peutz-Jeghers polyps) and choristoma (normal tissue in a foreign location, eg, gastric tissue located in distal ileum in Meckel diverticulum).",
    },
    {
      q: "The tumor nomenclature table verbatim — all rows.",
      a: "CELL TYPE | BENIGN | MALIGNANT. Epithelium: Adenoma, papilloma | Adenocarcinoma, papillary carcinoma. Mesenchyme (category header). Blood cells: — | Leukemia, lymphoma. Blood vessels: Hemangioma | Angiosarcoma. Smooth muscle: Leiomyoma | Leiomyosarcoma. Striated muscle: Rhabdomyoma | Rhabdomyosarcoma. Connective tissue: Fibroma | Fibrosarcoma. Bone: Osteoma | Osteosarcoma. Fat: Lipoma | Liposarcoma. Melanocyte: Nevus/mole | Melanoma.",
    },
    {
      q: "The grade, stage, TNM, and the prognostic rule verbatim.",
      a: "GRADE: Degree of cell differentiation (tissue of origin resemblance) and mitotic activity on histology. Ranges from low-grade (well differentiated) to high-grade (poorly differentiated or undifferentiated [anaplastic]). Higher grade often correlates with higher aggressiveness. STAGE: Degree of invasion and spread from initial site. Depth of invasion correlates to risk of metastasis. Based on clinical (c) or pathologic (p) findings. TNM STAGING SYSTEM (importance: M > N > T): ▘ Primary tumor size/invasion. ▘ Regional lymph node metastasis. ▘ Distant metastasis. Stage generally has more prognostic value than grade (eg, a high-stage yet low-grade tumor is usually worse than a low-stage yet high-grade tumor). Stage (spread) determines survival.",
    },
  ],
  related: [
    {
      title: "Cellular Adaptations: Hypertrophy Through Dysplasia",
      topicId: "cellular-adaptations",
      note: "Dysplasia is the cellular-adaptation page's disordered endpoint — the loss of uniformity in cell size and shape (pleomorphism) and the rising N:C ratio that this page names as the first gate of neoplastic progression. The adaptation-to-neoplasia bridge is the reversibility line: hypertrophy, hyperplasia, atrophy, and metaplasia are reversible; dysplasia is often reversible; carcinoma in situ is irreversible.",
    },
    {
      title: "Apoptosis: Intrinsic, Extrinsic & Misfolded Proteins",
      topicId: "apoptosis-pathways",
      note: "The malignant-tumor feature list names ↓ apoptosis as a hallmark — the cell that refuses to die. The apoptosis page's intrinsic and extrinsic cascades are the molecular machinery that the cancer cell disables to gain the survival advantage this page catalogues.",
    },
    {
      title: "Cell Injury: Reversible, Irreversible & Ferroptosis",
      topicId: "cell-injury-mechanisms",
      note: "The reversible-to-irreversible line on the cell-injury page is the same line that separates dysplasia from carcinoma in situ: a threshold beyond which the cell cannot return. Neoplasia's progression is the disease version of the injury page's reversibility fork.",
    },
    {
      title: "Wound Healing: Mediators & Phases",
      topicId: "wound-healing",
      note: "The metalloproteinases (collagenases and hydrolases) that breach the basement membrane at invasive carcinoma are the wound-healing page's remodeling enzymes turned against the host — the same enzymes that swap type III to type I collagen in scar maturation now dissolve the gate that contains the neoplasm.",
    },
  ],
  crossLinks: [
    {
      subject: "Genetics (oncogenes and tumor suppressors)",
      connection:
        "The molecular gates of the progression — pleomorphism and ↑ N:C ratio, the metalloproteinase breach, E-cadherin loss, metastatic spread — are the phenotypic readout of the oncogene and tumor-suppressor mutations catalogued on book 220. E-cadherin loss is the CDH1 gate; the basement-membrane breach is the matrix-metalloproteinase axis upstream of RAS and MYC.",
    },
    {
      subject: "Pathology (metastasis patterns and routes)",
      connection:
        "The metastasis station (spread to distant organ[s] via lymphatics or blood) is the gateway to the metastasis-patterns page (book 219) — the organ-specific tropisms (lung to brain, breast to bone, colon to liver) and the route logic (epithelial carcinomas favor lymphatics first; sarcomas favor blood) that build on this page's lymphatics-or-blood rule.",
    },
    {
      subject: "Pathology (tumor markers and molecular diagnostics)",
      connection:
        "The cell-type nomenclature table is the foundation for the tumor-marker and IHC page (book 222-223): each name pairs with a marker (adenocarcinoma + cytokeratin; sarcoma + vimentin; lymphoma + CD45; melanoma + S100/HMB-45) — the immunohistochemical fingerprint that resolves the nomenclature when morphology is ambiguous.",
    },
    {
      subject: "Surgery and oncology (TNM-guided treatment)",
      connection:
        "The TNM staging system (importance M > N > T) is the surgical and oncologic staging language — T1N0M0 cancers are often cured by excision alone; node-positive disease adds lymphadenectomy and systemic therapy; distant metastases shift the goal from cure to control. The stage-trumps-grade rule is the multidisciplinary tumor board's first principle.",
    },
  ],
};
