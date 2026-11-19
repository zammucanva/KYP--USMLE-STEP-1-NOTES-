import type { KypUsMLENote } from "../types";

// Pathology — NEOPLASIA banner (P-batch 12). Source: pdf 237-238 /
// book 215-216 (Neoplasia and neoplastic progression + Tumor
// nomenclature + Tumor grade vs stage — the parenchyma-plus-stroma
// definition; the five-station progression [normal basal→apical
// polarity / dysplasia pleomorphism + ↑N:C ratio, often reversible /
// carcinoma in situ — irreversible, full-thickness, intact basement
// membrane / invasive carcinoma — metalloproteinases (collagenases +
// hydrolases) breach + E-cadherin inactivation / metastasis —
// lymphatics or blood]; the nomenclature rules [carcinoma epithelial
// vs sarcoma mesenchymal, both imply malignancy; benign traits —
// well-differentiated, well-demarcated, low mitotic activity, no
// metastases, no necrosis; malignant traits — poor differentiation,
// erratic growth, local invasion, metastasis, ↓ apoptosis];
// hamartoma (Peutz-Jeghers polyps) vs choristoma (gastric tissue in
// Meckel diverticulum); the 9-row nomenclature table with the
// MESENCHYME row-group label and the Blood cells row whose BENIGN
// cell prints EMPTY (Leukemia, lymphoma malignant-only); and grade vs
// stage with TNM, importance M > N > T, c/p prefixes, and stage
// (spread) determining survival). Census (pdfimages + VLM): ZERO
// raster images on either page — pure text + TWO VECTOR LINE-ART
// FIGURES. Page 237's progression figure: FIVE numbered tissue
// panels (①–⑤) left-to-right joined by arrows — normal organized
// epithelium over an intact basement membrane with a vessel in the
// stroma → darker disorganized cells still above the membrane →
// bulky atypical cells filling the whole epithelial thickness with
// the membrane intact → cells breaching the membrane into the stroma
// → cells entering the vessel lumen; the labels "Epithelial cell
// layer / Basement membrane / Blood or lymphatic vessel" print ONCE
// over panel 1 with pointer lines (VLM) — but the text layer
// interleaves them as 3× column-repetitions with fused fragments
// ("cellayer", "Bloodor", "orlymphatic") plus four standalone →
// arrows (raw lines 16-47 — the M38 interleave pattern). Page 238's
// grade-vs-stage art: Low grade/High grade tissue circles printed
// 2×, T with a primary-tumor glyph, N with TWO lymph-node drawings,
// M with a blood-or-lymphatic-vessel drawing and "Spread to other
// organs and tissues" — labels duplicated/interleaved with fused
// fragments ("NBlood or", "Mlymphatic vessel", "Spreadorto other",
// "organs andvessel", raw lines 106-131). Table quirks: "Mesenchyme"
// prints as a bold ROW-GROUP label above the seven indented rows
// (Blood cells, Blood vessels, Smooth muscle, Striated muscle,
// Connective tissue, Bone, Fat), interleaving in the text layer on
// the same band as the Blood cells row's "Leukemia, lymphoma" (raw
// 33-37); the Blood cells BENIGN cell is EMPTY; the
// "FAS1_2026_04-Pathol.indd 216" footer prints MID-BAND between the
// grade/stage headers and their column bodies (raw 84). VLM census
// (glm-4.6v): all five panels, the group label, and the empty
// benign cell CONFIRMED; NO margin notes or mnemonics on either page
// (only typographic red-letter highlights) — the KYP memory layer is
// original. BOTH figures redrawn as ORIGINAL KYP glyphs (the P2/P3
// pure-vector convention); the table carried verbatim in note
// blocks and redrawn as clean KYP table art.

export const neoplasiaNomenclature: KypUsMLENote = {
  id: "neoplasia-nomenclature",
  title: "Neoplasia Nomenclature & Progression",
  subtitle:
    "From polarity to metastasis, and the naming code that classifies every mass (book 215-216) — NEOPLASIA: uncontrolled, often monoclonal proliferation of cells; can be benign or malignant; every neoplastic growth has two components — parenchyma (the neoplastic cells) and supporting stroma (nonneoplastic; blood vessels, connective tissue). THE FIVE-STATION PROGRESSION — Normal cells with basal → apical polarity (the cervical example); Dysplasia (pleomorphism, loss of tissue orientation, ↑ nuclear:cytoplasmic ratio; often reversible); Carcinoma in situ/preinvasive (irreversible severe dysplasia involving the entire thickness of epithelium but NOT penetrating the intact basement membrane); Invasive carcinoma (cells invade the basement membrane using collagenases and hydrolases [metalloproteinases]; cell-cell contacts lost by inactivation of E-cadherin); Metastasis (spread to distant organ(s) via lymphatics or blood). TUMOR NOMENCLATURE — carcinoma implies epithelial origin, sarcoma denotes mesenchymal origin, and both terms generally imply malignancy; benign tumors are usually well-differentiated and well-demarcated with low mitotic activity, no metastases, and no necrosis; malignant tumors (cancers) may show poor differentiation, erratic growth, local invasion, metastasis, and ↓ apoptosis; hamartoma (disorganized overgrowth of tissues in their native location, eg, Peutz-Jeghers polyps) against choristoma (normal tissue in a foreign location, eg, gastric tissue located in distal ileum in Meckel diverticulum); and the full naming table — Epithelium (Adenoma, papilloma vs Adenocarcinoma, papillary carcinoma), the Mesenchyme group (Blood cells: no benign, Leukemia/lymphoma; Blood vessels: Hemangioma vs Angiosarcoma; Smooth muscle: Leiomyoma vs Leiomyosarcoma; Striated muscle: Rhabdomyoma vs Rhabdomyosarcoma; Connective tissue: Fibroma vs Fibrosarcoma; Bone: Osteoma vs Osteosarcoma; Fat: Lipoma vs Liposarcoma), and Melanocyte (Nevus/mole vs Melanoma). GRADE VS STAGE — grade is the microscope's axis (degree of cell differentiation and mitotic activity on histology, from low-grade well-differentiated to high-grade anaplastic), stage is the map's axis (degree of invasion and spread from the initial site, clinical [c] or pathologic [p]); TNM staging with importance M > N > T; stage generally has more prognostic value than grade — stage (spread) determines survival.",
  subject: "Pathology",
  system: "Section II · High-Yield General Principles — Pathology: Neoplasia",
  pilotCategory:
    "The neoplasia banner's complete nomenclature layer — the parenchyma-plus-stroma definition, the five-station neoplastic progression from basal-to-apical polarity through dysplasia and carcinoma in situ to basement-membrane breach and metastasis (with the metalloproteinase and E-cadherin mechanisms), the full benign-versus-malignant naming table across all nine cell-type rows including the Mesenchyme group label and the malignant-only Blood cells row, the hamartoma-versus-choristoma malformation pair, and the grade-versus-stage axis with the TNM system (importance M > N > T) and the stage-determines-survival rule.",
  difficulty: 2,
  readTime: 8,
  sourceRef:
    "First Aid 2026, Part 1 pp. 215–216 (Pathology — Neoplasia: Neoplasia and neoplastic progression [the parenchyma-plus-stroma definition; the five-station progression figure; the five station definitions]; Tumor nomenclature [carcinoma-vs-sarcoma, benign-versus-malignant traits, hamartoma-versus-choristoma, the 9-row nomenclature table with the Mesenchyme group label]; Tumor grade vs stage [both columns, the TNM bullets with M > N > T, the grade-versus-stage figure])",
  tags: [
    "neoplasia",
    "neoplastic progression",
    "parenchyma",
    "stroma",
    "monoclonal proliferation",
    "benign tumor",
    "malignant tumor",
    "cancer",
    "basal-to-apical polarity",
    "cervical dysplasia",
    "dysplasia",
    "pleomorphism",
    "nuclear-to-cytoplasmic ratio",
    "often reversible",
    "carcinoma in situ",
    "preinvasive",
    "irreversible",
    "full-thickness atypia",
    "basement membrane",
    "invasive carcinoma",
    "collagenases",
    "hydrolases",
    "metalloproteinases",
    "E-cadherin",
    "cell-cell contacts",
    "metastasis",
    "lymphatic spread",
    "hematogenous spread",
    "tumor nomenclature",
    "carcinoma",
    "sarcoma",
    "epithelial origin",
    "mesenchymal origin",
    "adenoma",
    "papilloma",
    "adenocarcinoma",
    "papillary carcinoma",
    "mesenchyme",
    "blood cells",
    "leukemia",
    "lymphoma",
    "hemangioma",
    "angiosarcoma",
    "leiomyoma",
    "leiomyosarcoma",
    "smooth muscle",
    "rhabdomyoma",
    "rhabdomyosarcoma",
    "striated muscle",
    "fibroma",
    "fibrosarcoma",
    "connective tissue",
    "osteoma",
    "osteosarcoma",
    "bone",
    "lipoma",
    "liposarcoma",
    "fat",
    "melanocyte",
    "nevus",
    "mole",
    "melanoma",
    "well-differentiated",
    "well-demarcated",
    "low mitotic activity",
    "no metastases",
    "no necrosis",
    "poor differentiation",
    "erratic growth",
    "local invasion",
    "decreased apoptosis",
    "hamartoma",
    "choristoma",
    "Peutz-Jeghers polyps",
    "Meckel diverticulum",
    "ectopic gastric tissue",
    "tumor grade",
    "tumor stage",
    "TNM staging",
    "primary tumor size",
    "regional lymph node metastasis",
    "distant metastasis",
    "anaplastic",
    "clinical staging",
    "pathologic staging",
    "stage determines survival",
  ],
  core: {
    what: "NEOPLASIA: uncontrolled, often monoclonal proliferation of cells; can be benign or malignant; any neoplastic growth has two components — parenchyma (neoplastic cells) and supporting stroma (nonneoplastic; eg, blood vessels, connective tissue). THE PROGRESSION — Normal cells: normal cells with basal → apical polarity (see the cervical example, which shows normal cells and spectrum of dysplasia). Dysplasia: loss of uniformity in cell size and shape (pleomorphism); loss of tissue orientation; nuclear changes (eg, ↑ nuclear:cytoplasmic ratio); often reversible. Carcinoma in situ/preinvasive: irreversible severe dysplasia that involves the entire thickness of epithelium but does not penetrate the intact basement membrane. Invasive carcinoma: cells have invaded basement membrane using collagenases and hydrolases (metalloproteinases); cell-cell contacts lost by inactivation of E-cadherin. Metastasis: spread to distant organ(s) via lymphatics or blood. THE NOMENCLATURE — carcinoma implies epithelial origin, whereas sarcoma denotes mesenchymal origin; both terms generally imply malignancy. Benign tumors are usually well-differentiated and well-demarcated, with low mitotic activity, no metastases, and no necrosis. Malignant tumors (cancers) may show poor differentiation, erratic growth, local invasion, metastasis, and ↓ apoptosis. Terms for non-neoplastic malformations include hamartoma (disorganized overgrowth of tissues in their native location, eg, Peutz-Jeghers polyps) and choristoma (normal tissue in a foreign location, eg, gastric tissue located in distal ileum in Meckel diverticulum). THE TABLE — Epithelium: Adenoma, papilloma vs Adenocarcinoma, papillary carcinoma. Mesenchyme (row-group label): Blood cells — no benign form, Leukemia, lymphoma; Blood vessels — Hemangioma vs Angiosarcoma; Smooth muscle — Leiomyoma vs Leiomyosarcoma; Striated muscle — Rhabdomyoma vs Rhabdomyosarcoma; Connective tissue — Fibroma vs Fibrosarcoma; Bone — Osteoma vs Osteosarcoma; Fat — Lipoma vs Liposarcoma. Melanocyte: Nevus/mole vs Melanoma. GRADE VS STAGE — Grade: degree of cell differentiation (tissue of origin resemblance) and mitotic activity on histology; ranges from low-grade (well differentiated) to high-grade (poorly differentiated or undifferentiated [anaplastic]); higher grade often correlates with higher aggressiveness. Stage: degree of invasion and spread from initial site; depth of invasion correlates to risk of metastasis; based on clinical (c) or pathologic (p) findings. TNM staging system (importance: M > N > T): ▘ Primary tumor size/invasion; ▘ Regional lymph node metastasis; ▘ Distant metastasis. Stage generally has more prognostic value than grade (eg, a high-stage yet low-grade tumor is usually worse than a low-stage yet high-grade tumor). Stage (spread) determines survival.",
    why: "This two-page spread is the neoplasia banner's grammar lesson: first the process (how a normal epithelium becomes a metastatic cancer), then the vocabulary (what every mass is called), then the two rulers (grade and stage). The progression is drawn on the cervix but applies to every epithelium: a normal layer keeps its basal-to-apical polarity; dysplasia scrambles it (pleomorphism, lost orientation, ↑ nuclear:cytoplasmic ratio) and is still reversible; carcinoma in situ is the point of no return — the entire thickness is replaced but the basement membrane still holds; invasive carcinoma breaks the membrane with metalloproteinases (collagenases and hydrolases) and dissolves cell-cell contacts by inactivating E-cadherin; metastasis boards a lymphatic or blood vessel and founds a distant colony. The naming code follows the tissue: carcinoma for epithelium, sarcoma for mesenchyme, both implying malignancy — with the table supplying the benign counterpart for each cell type (adenoma for epithelium, hemangioma through liposarcoma for the mesenchymal rows) except blood cells, which have NO benign form (leukemia and lymphoma are malignant by definition), and melanocyte, whose malignant form drops every suffix convention (melanoma, not melanocarcinoma). Hamartoma and choristoma guard the border of the neoplastic world: disorganized native tissue (Peutz-Jeghers polyps) against normal tissue in the wrong place (gastric mucosa in a Meckel diverticulum) — malformations, not neoplasms. Finally the two rulers: grade reads the tumor under the microscope (differentiation + mitotic activity, from well-differentiated to anaplastic), stage maps it through the body (invasion depth and spread, clinical or pathologic, TNM with M > N > T) — and stage wins prognostically, because spread, not appearance, determines survival.",
    keyIdea:
      "Read every tumor question through four frames. FRAME 1 — THE MEMBRANE: the basement membrane is the single boundary of the progression — above it, dysplasia (reversible, ↑N:C, pleomorphism) and carcinoma in situ (irreversible, full-thickness); below it, invasive carcinoma (metalloproteinases [collagenases + hydrolases] digested the membrane, E-cadherin inactivation freed the cells) and metastasis (lymphatics or blood to distant organs). FRAME 2 — THE NAMING CODE: carcinoma = epithelial, sarcoma = mesenchymal, both malignant; benigns take the -oma of their cell type (adenoma, papilloma; hemangioma; leiomyoma; rhabdomyoma; fibroma; osteoma; lipoma; nevus/mole) — but blood cells have no benign name (leukemia, lymphoma are malignant-only) and melanoma is malignant despite its bare -oma. FRAME 3 — THE MALFORMATION PAIR: hamartoma = disorganized tissue NATIVE to the site (Peutz-Jeghers polyps); choristoma = NORMAL tissue in a FOREIGN site (gastric mucosa in the Meckel diverticulum) — neither is a neoplasm. FRAME 4 — THE TWO RULERS: GRADE = microscope (differentiation + mitotic activity; low-grade well-differentiated → high-grade anaplastic; correlates with aggressiveness); STAGE = map (invasion depth + spread; clinical [c] or pathologic [p]; TNM with importance M > N > T); stage has more prognostic value than grade — a high-stage low-grade tumor usually beats (is worse than) a low-stage high-grade one, because stage (spread) determines survival.",
  },
  mechanisms: [
    {
      id: "progression-breach-map",
      title: "The basement-membrane breach cascade: from polarity to metastasis",
      context: "The Neoplasia and neoplastic progression figure (book 215)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A normal epithelium with basal → apical polarity",
            sublabel: "Input — the cervical example: an orderly layer whose cells keep uniform size, shape, and orientation above an intact basement membrane, with a blood or lymphatic vessel in the stroma below.",
            variant: "input",
          },
          {
            id: "dysplasia",
            label: "THE BEND — dysplasia (reversible)",
            sublabel: "Loss of uniformity in cell size and shape (pleomorphism); loss of tissue orientation; nuclear changes (eg, ↑ nuclear:cytoplasmic ratio) — the cells remain ABOVE the intact basement membrane, and the change is often reversible.",
            variant: "process",
          },
          {
            id: "cis",
            label: "THE POINT OF NO RETURN — carcinoma in situ",
            sublabel: "Irreversible severe dysplasia that involves the ENTIRE thickness of epithelium but does not penetrate the intact basement membrane — preinvasive disease, still contained.",
            variant: "process",
          },
          {
            id: "breach",
            label: "THE BREACH — invasive carcinoma",
            sublabel: "Cells have invaded the basement membrane using collagenases and hydrolases (metalloproteinases); cell-cell contacts are lost by inactivation of E-cadherin — the two molecular weapons of invasion.",
            variant: "process",
          },
          {
            id: "metastasis",
            label: "THE ESCAPE — metastasis",
            sublabel: "Spread to distant organ(s) via lymphatics or blood — tumor cells board a vessel in the stroma and found colonies far from the primary site.",
            variant: "process",
          },
          {
            id: "output",
            label: "The two names the breach creates",
            sublabel: "Output — above the membrane: in situ (preinvasive); below it: invasive; distant colony: metastatic. The parenchyma (neoplastic cells) does all of this; the supporting stroma (nonneoplastic blood vessels and connective tissue) feeds it.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "dysplasia", label: "accumulated atypia" },
          { from: "dysplasia", to: "cis", label: "full thickness" },
          { from: "cis", to: "breach", label: "metalloproteinases + E-cadherin loss" },
          { from: "breach", to: "metastasis", label: "lymphatics or blood" },
          { from: "metastasis", to: "output", label: "naming by depth" },
        ],
      },
    },
    {
      id: "grade-vs-stage-map",
      title: "The two rulers: what the microscope (grade) and the map (stage) each measure",
      context: "The Tumor grade vs stage block and figure (book 216)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A newly biopsied neoplasm needs two descriptions",
            sublabel: "Input — every tumor report carries two independent axes: how the cells look (grade) and how far they have traveled (stage).",
            variant: "input",
          },
          {
            id: "grade",
            label: "GRADE — the microscope's axis",
            sublabel: "Degree of cell differentiation (tissue of origin resemblance) and mitotic activity on histology; ranges from low-grade (well differentiated) to high-grade (poorly differentiated or undifferentiated [anaplastic]); higher grade often correlates with higher aggressiveness.",
            variant: "process",
          },
          {
            id: "stage",
            label: "STAGE — the map's axis",
            sublabel: "Degree of invasion and spread from the initial site; depth of invasion correlates to risk of metastasis; based on clinical (c) or pathologic (p) findings; scored by TNM with importance M > N > T — Primary tumor size/invasion, Regional lymph node metastasis, Distant metastasis.",
            variant: "process",
          },
          {
            id: "output",
            label: "The prognostic verdict",
            sublabel: "Output — stage generally has more prognostic value than grade: a high-stage yet low-grade tumor is usually worse than a low-stage yet high-grade tumor. Stage (spread) determines survival.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "grade", label: "the biopsy slide" },
          { from: "trigger", to: "stage", label: "the body survey" },
          { from: "grade", to: "output", label: "aggressiveness correlation" },
          { from: "stage", to: "output", label: "survival determination" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "nomenclature-progression-map",
      title: "The neoplastic progression and nomenclature map (an original KYP adaptation with redrawn vector figures)",
      caption:
        "An original KYP adaptation of the source pages (book 215-216): TOP — the five-station progression as original KYP glyphs (a normal epithelial band with basal-to-apical polarity dots above an intact basement-membrane line and a stromal vessel; a pleomorphic dysplastic layer still above the intact line, tagged often reversible; a full-thickness atypical layer with the line intact — carcinoma in situ; a breached line with collagenase/hydrolase arrows and an E-cadherin break marker — invasive carcinoma; and cells entering the vessel lumen for distant spread — metastasis), with the figure's three labels (Epithelial cell layer, Basement membrane, Blood or lymphatic vessel) and the two molecular weapons of the breach; MIDDLE — the naming rules panel (carcinoma epithelial vs sarcoma mesenchymal, both implying malignancy; benign traits against malignant traits) and the malformation pair (hamartoma with Peutz-Jeghers polyps vs choristoma with the Meckel diverticulum's gastric tissue); LOWER — the verbatim 9-row nomenclature table rendered as clean KYP table art, with the Mesenchyme row-group label spanning its rows and the Blood cells row's empty BENIGN cell; BOTTOM — grade vs stage (the microscope's low/high-grade circles against the map's T/N/M with lymph node and vessel glyphs, the importance order M > N > T, the c/p prefixes, and the stage-determines-survival rule).",
      notice:
        "Census (pdfimages + VLM): ZERO raster images on either source page — everything is text plus TWO VECTOR LINE-ART FIGURES. Page 237's progression figure (five numbered tissue panels joined by arrows; the labels print once over panel 1 with pointer lines) and page 238's grade-vs-stage art (low/high-grade tissue circles, T with a primary-tumor glyph, N with lymph-node drawings, M with a blood-or-lymphatic-vessel glyph and 'Spread to other organs and tissues') are BOTH redrawn here with original KYP glyphs (the P2/P3 pure-vector convention) — nothing is reproduced. Text-layer quirks documented: page 237's figure labels interleave as 3× column-repetitions with fused fragments ('cellayer', 'Bloodor', 'orlymphatic') plus four standalone arrows; page 238's grade/stage art labels duplicate 2× and interleave fused ('NBlood or', 'Mlymphatic vessel', 'Spreadorto other', 'organs andvessel'); 'Mesenchyme' prints as a bold row-group label interleaving on the same text band as the Blood cells row's 'Leukemia, lymphoma'; the Blood cells BENIGN cell is empty; and the indd footer prints mid-band between the grade/stage headers and their column bodies. NO margin mnemonics print on either page (VLM census confirmed — only typographic red-letter highlights); the KYP memory layer stays original.",
    },
    {
      kind: "table",
      title: "Book 215 — the neoplasia definition and the five progression stations (carried verbatim)",
      intro: "The definition and the five station definitions, as printed.",
      columns: ["STATION", "VERBATIM — book 215"],
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
          "CARCINOMA IN SITU/PREINVASIVE",
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
        "The membrane is the whole cascade's hinge: reversible dysplasia sits above it, irreversible carcinoma in situ fills the full thickness but stops at it, invasive carcinoma breaches it with collagenases and hydrolases (metalloproteinases) once E-cadherin no longer holds the cells together, and metastasis boards a lymphatic or blood vessel for distant organs.",
    },
    {
      kind: "table",
      title: "Book 216 — the nomenclature rules and the malformation pair (carried verbatim)",
      intro: "The naming code, as printed.",
      columns: ["RULE", "VERBATIM — book 216"],
      rows: [
        [
          "CARCINOMA VS SARCOMA",
          "Carcinoma implies epithelial origin, whereas sarcoma denotes mesenchymal origin. Both terms generally imply malignancy.",
        ],
        [
          "BENIGN TUMORS",
          "Benign tumors are usually well-differentiated and well-demarcated, with low mitotic activity, no metastases, and no necrosis.",
        ],
        [
          "MALIGNANT TUMORS (CANCERS)",
          "Malignant tumors (cancers) may show poor differentiation, erratic growth, local invasion, metastasis, and ↓ apoptosis.",
        ],
        [
          "HAMARTOMA",
          "Terms for non-neoplastic malformations include hamartoma (disorganized overgrowth of tissues in their native location, eg, Peutz-Jeghers polyps)…",
        ],
        [
          "CHORISTOMA",
          "…and choristoma (normal tissue in a foreign location, eg, gastric tissue located in distal ileum in Meckel diverticulum).",
        ],
      ],
      caption:
        "Two sentences carry the whole vocabulary: the origin suffixes (carcinoma epithelial, sarcoma mesenchymal, both malignant), the trait lists (benign — differentiated, demarcated, quiet, contained, alive; malignant — undifferentiated, erratic, invasive, metastatic, apoptosis-evading), and the malformation pair (hamartoma native-but-disorganized; choristoma foreign-but-normal) — neither malformation is a neoplasm.",
    },
    {
      kind: "table",
      title: "Book 216 — the tumor nomenclature table (carried verbatim, all rows)",
      intro:
        "Exactly as printed. 'Mesenchyme' is a row-GROUP label spanning the seven indented rows from Blood cells through Fat (its BENIGN and MALIGNANT cells print empty); the Blood cells row's BENIGN cell also prints EMPTY — leukemia and lymphoma are malignant-only, with no benign counterpart named.",
      columns: ["CeLL TYPe", "BeNIGN", "MALIGNANT"],
      rows: [
        ["Epithelium", "Adenoma, papilloma", "Adenocarcinoma, papillary carcinoma"],
        ["Mesenchyme", "", ""],
        ["Blood cells", "", "Leukemia, lymphoma"],
        ["Blood vessels", "Hemangioma", "Angiosarcoma"],
        ["Smooth muscle", "Leiomyoma", "Leiomyosarcoma"],
        ["Striated muscle", "Rhabdomyoma", "Rhabdomyosarcoma"],
        ["Connective tissue", "Fibroma", "Fibrosarcoma"],
        ["Bone", "Osteoma", "Osteosarcoma"],
        ["Fat", "Lipoma", "Liposarcoma"],
        ["Melanocyte", "Nevus/mole", "Melanoma"],
      ],
      caption:
        "The code in one sweep: every mesenchymal row pairs a bare -oma benign with its -sarcoma malignant (hemangioma/angiosarcoma, leiomyoma/leiomyosarcoma, rhabdomyoma/rhabdomyosarcoma, fibroma/fibrosarcoma, osteoma/osteosarcoma, lipoma/liposarcoma); the epithelium pairs adenoma/papilloma with adenocarcinoma/papillary carcinoma; blood cells break the pattern with an EMPTY benign cell (leukemia, lymphoma — malignant-only); and the melanocyte row ends with melanoma, the malignant name that wears no carcinoma/sarcoma suffix at all.",
    },
    {
      kind: "table",
      title: "Book 216 — tumor grade vs stage (carried verbatim, both columns)",
      intro: "The two rulers, as printed — including the TNM bullets and the prognostic verdict.",
      columns: ["GRADE (verbatim)", "STAGE (verbatim)"],
      rows: [
        [
          "Degree of cell differentiation (tissue of origin resemblance) and mitotic activity on histology.",
          "Degree of invasion and spread from initial site. Depth of invasion correlates to risk of metastasis. Based on clinical (c) or pathologic (p) findings.",
        ],
        [
          "Ranges from low-grade (well differentiated) to high-grade (poorly differentiated or undifferentiated [anaplastic]).",
          "TNM staging system (importance: M > N > T): ▘ Primary tumor size/invasion. ▘ Regional lymph node metastasis. ▘ Distant metastasis.",
        ],
        [
          "Higher grade often correlates with higher aggressiveness.",
          "Stage generally has more prognostic value than grade (eg, a high-stage yet low-grade tumor is usually worse than a low-stage yet high-grade tumor). Stage (spread) determines survival.",
        ],
      ],
      caption:
        "Grade looks at the cells (differentiation + mitotic activity, low-grade to anaplastic, tracking aggressiveness); stage looks at the geography (invasion depth, spread, clinical c or pathologic p, TNM scored with distant metastasis M outweighing nodes N outweighing the primary T) — and the verdict prints verbatim: stage (spread) determines survival.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 31-year-old woman has an abnormal Pap smear; cervical biopsy shows cells with increased nuclear:cytoplasmic ratios and pleomorphism involving the entire thickness of the epithelium. The basement membrane is intact, and no cells are present in the stroma.",
        discriminator: "Carcinoma in situ — irreversible severe dysplasia involving the entire epithelial thickness without penetrating the intact basement membrane",
        concept: "The membrane boundary in the progression",
        answer:
          "Full-thickness atypia with an intact basement membrane is carcinoma in situ (preinvasive disease) — the point in the progression where dysplasia has become irreversible but the two molecular weapons of invasion have not yet fired: the metalloproteinases (collagenases and hydrolases) that digest the basement membrane, and the E-cadherin inactivation that dissolves cell-cell contacts. Treatment at this stage can still be local, because no cell has crossed the membrane.",
      },
      {
        stem: "A 16-year-old boy presents with a painful enlarging mass around the knee; radiographs show a destructive metaphyseal lesion with a sunburst pattern and lifting of the periosteum. Biopsy shows a malignant tumor forming osteoid.",
        discriminator: "Osteosarcoma — the sarcoma suffix denotes mesenchymal (bone) origin and implies malignancy; its benign table counterpart is osteoma",
        concept: "The naming code by tissue of origin",
        answer:
          "The name decodes by the table: bone is a mesenchymal cell type, its benign form is osteoma, and its malignant form is osteosarcoma — the -sarcoma suffix marks mesenchymal origin AND malignancy (both carcinoma and sarcoma generally imply malignancy). An epithelial malignancy at the same site would be a carcinoma (eg, metastatic or a primary surface epithelial tumor), never a sarcoma.",
      },
      {
        stem: "A 9-year-old boy presents with painless recurrent lower-GI bleeding and iron-deficiency anemia; a technetium-99m pertechnetate scan shows intense uptake in a distal ileal Meckel diverticulum. Resection shows gastric mucosa with parietal cells within the ileal wall.",
        discriminator: "Choristoma — histologically normal tissue in a foreign location (gastric tissue in the distal ileum in Meckel diverticulum), a non-neoplastic malformation",
        concept: "The malformation pair",
        answer:
          "Gastric tissue in the ileum is the printed example of a choristoma: normal tissue in a foreign location. It is not a hamartoma (disorganized overgrowth of tissues in their NATIVE location — eg, the Peutz-Jeghers polyp's native ileal elements grown disorganized), and neither is a neoplasm: the pertechnetate uptake comes from ectopic parietal-cell mucosa, not from clonal proliferation. The same diverticulum can also harbor ectopic pancreatic tissue.",
      },
      {
        stem: "Two patients have biopsy-proved colon adenocarcinomas. Patient A's tumor is high-grade but confined to the mucosa (Tis, N0, M0). Patient B's tumor is low-grade but has penetrated the serosa and metastasized to distant liver (T4b, N1, M1). Which finding dominates each prognosis?",
        discriminator: "Stage (spread) determines survival — stage generally has more prognostic value than grade, and in TNM the importance order is M > N > T",
        concept: "The two rulers and the verdict",
        answer:
          "Patient B fares worse: the printed rule is that stage generally has more prognostic value than grade — a high-stage yet low-grade tumor is usually worse than a low-stage yet high-grade tumor — because stage (spread) determines survival. Within the TNM system, the importance ordering is M > N > T: distant metastasis (B's M1 liver disease) outweighs any nodal or primary-tumor detail, and outweighs Patient A's high grade, which correlates with aggressiveness but is stage 0 disease.",
      },
    ],
    traps: [
      {
        a: "Carcinoma in situ",
        b: "Invasive carcinoma",
        whyConfused: "Both show severe (full-thickness) cellular atypia on histology",
        keyDifference: "CARCINOMA IN SITU involves the entire thickness of epithelium but does NOT penetrate the intact basement membrane (preinvasive, contained); INVASIVE CARCINOMA has crossed the membrane — collagenases and hydrolases (metalloproteinases) digested it and E-cadherin inactivation dissolved cell-cell contacts",
        clue: "The single question that separates them: is the basement membrane breached? Intact membrane with full-thickness atypia = in situ; cells in the stroma = invasive",
      },
      {
        a: "Hamartoma",
        b: "Choristoma",
        whyConfused: "Both are non-neoplastic malformations, not true tumors",
        keyDifference: "HAMARTOMA is a disorganized overgrowth of tissues in their NATIVE location (eg, Peutz-Jeghers polyps); CHORISTOMA is histologically NORMAL tissue in a FOREIGN location (eg, gastric tissue in the distal ileum in Meckel diverticulum) — right tissue wrong place against wrong architecture right place",
        clue: "Ask 'is the tissue where it belongs?': disorganized but native = hamartoma; organized but ectopic = choristoma",
      },
      {
        a: "Benign -oma names",
        b: "Malignant names that wear the -oma suffix",
        whyConfused: "Most -oma names are benign (adenoma, lipoma, osteoma, hemangioma, leiomyoma, rhabdomyoma, fibroma, nevus)",
        keyDifference: "The table's malignant-only exceptions: the Blood cells row has an EMPTY benign cell — leukemia and lymphoma are malignant with no benign counterpart — and melanoma (melanocyte row) is malignant despite the bare -oma, never melanocarcinoma; carcinoma and sarcoma suffixes always imply malignancy",
        clue: "Hematologic (leukemia, lymphoma) and melanocytic (melanoma) malignancies drop the benign suffix convention entirely — three malignant names hiding among the -omas",
      },
      {
        a: "Tumor grade",
        b: "Tumor stage",
        whyConfused: "Both are prognostic descriptors reported for every tumor",
        keyDifference: "GRADE is the microscope's axis — degree of cell differentiation and mitotic activity on histology (low-grade well-differentiated to high-grade anaplastic; correlates with aggressiveness); STAGE is the map's axis — degree of invasion and spread from the initial site, clinical (c) or pathologic (p), scored by TNM with importance M > N > T; stage generally has MORE prognostic value",
        clue: "Slide = grade, body survey = stage; when they disagree, trust the stage — stage (spread) determines survival",
      },
    ],
    pivots: [
      {
        lookAlike: "A polyp or mass found on imaging or endoscopy — neoplasm or malformation?",
        differentiator: "Route by tissue architecture and location: clonal proliferation with parenchyma + stroma = a neoplasm (then name it by cell type and behavior); disorganized overgrowth of tissues NATIVE to the site = hamartoma (Peutz-Jeghers); histologically normal tissue in a FOREIGN location = choristoma (gastric mucosa in Meckel diverticulum)",
        correctPath: "Right tissue wrong architecture = hamartoma; right architecture wrong address = choristoma; clonal growth with its own stroma = neoplasm, subclassified by the naming table",
      },
      {
        lookAlike: "A tumor name ending in -oma — benign or malignant?",
        differentiator: "Most -oma names are benign (adenoma, papilloma, hemangioma, leiomyoma, rhabdomyoma, fibroma, osteoma, lipoma, nevus/mole), but the malignant-only exceptions are leukemia and lymphoma (the Blood cells row's EMPTY benign cell) and melanoma (the melanocyte row's malignant bare -oma)",
        correctPath: "Add the tissue rule: -carcinoma = epithelial malignant, -sarcoma = mesenchymal malignant; a bare -oma is benign UNLESS it is leukemia, lymphoma, or melanoma",
      },
      {
        lookAlike: "Two tumor reports — one graded high, one staged high — which drives the prognosis?",
        differentiator: "Grade measures differentiation and mitotic activity on histology and correlates with aggressiveness; stage measures invasion and spread (depth of invasion correlating with metastasis risk; clinical [c] or pathologic [p]; TNM with importance M > N > T)",
        correctPath: "Stage wins: stage generally has more prognostic value than grade — a high-stage yet low-grade tumor is usually worse than a low-stage yet high-grade tumor, because stage (spread) determines survival",
      },
    ],
    miniCase: {
      vignette:
        "A 9-year-old boy is evaluated for recurrent painless melena and iron-deficiency anemia that has failed oral iron therapy. Examination is notable only for pallor. A technetium-99m pertechnetate scan shows intense focal uptake in the right lower quadrant, and a laparoscopic exploration reveals a 4-cm ileal outpouching supplied by a persistent vitelline artery. The resected specimen shows a blob of histologically normal gastric mucosa with parietal cells resting inside the ileal wall, immediately adjacent to a 1.5-cm pedunculated polyp whose core is a disorganized tangle of mature smooth muscle, ileal-type glands, and connective tissue native to that segment. The boy's older sister, who has dark brown macules on her lips and oral mucosa, had multiple similar polyps removed from her small bowel last year; her biopsy report used a single term for them.",
      question:
        "Which pair of terms correctly names the boy's gastric-mucosa finding and the sister's polyps, and what distinguishes each from a true neoplasm?",
      options: [
        {
          label: "The boy's gastric mucosa is a choristoma (normal tissue in a foreign location, in the Meckel diverticulum) and the sister's polyps are hamartomas (disorganized overgrowth of native tissues — Peutz-Jeghers polyps); both are non-neoplastic malformations, not clonal proliferations",
          text: "Right tissue wrong address; right address wrong architecture.",
          correct: true,
          why: "Correct on both terms and the boundary. (1) THE BOY: histologically normal gastric mucosa with parietal cells in the distal ileum is the printed example of a CHORISTOMA — normal tissue in a foreign location — and the pertechnetate uptake is the ectopic parietal cells concentrating tracer, the classic Meckel-diverticulum signature (rule of 2s, persistent vitelline artery). (2) THE SISTER: the lip macules (Peutz-Jeghers pigmentation) plus small-bowel pedunculated polyps composed of disorganized but NATIVE smooth muscle, glands, and connective tissue are the printed example of a HAMARTOMA — disorganized overgrowth of tissues in their native location. (3) THE BOUNDARY: both are non-neoplastic malformations — neither is a monoclonal neoplastic proliferation with parenchyma and supporting stroma — which is why First Aid lists them under 'terms for non-neoplastic malformations.' The distinction is a location question: native-but-disorganized = hamartoma; foreign-but-normal = choristoma.",
        },
        {
          label: "Both lesions are adenomas — benign epithelial neoplasms arising from ileal glandular epithelium, and the sister's pigmentation is incidental",
          text: "A polyp is a polyp; glands make them all adenomas.",
          why: "Wrong family entirely: an adenoma is a true BENIGN NEOPLASM of epithelium (the table's Adenoma, papilloma row) — a clonal proliferation. The boy's lesion is normal gastric mucosa in the wrong place (a choristoma), and the sister's polyp is a disorganized mixture of native smooth muscle, glands, and connective tissue (a hamartoma) — neither is a clonal epithelial proliferation, and Peutz-Jeghers pigmentation is a syndrome marker, not an incidental finding.",
        },
        {
          label: "The boy's finding is a hamartoma and the sister's polyps are choristomas — the terms are simply interchangeable names for ectopic tissue",
          text: "Same idea, two words; swap them freely.",
          why: "Reversed and conflated: the terms are NOT interchangeable. HAMARTOMA = disorganized tissues in their NATIVE location (the sister's Peutz-Jeghers polyps — native ileal elements, wrong architecture); CHORISTOMA = normal tissue in a FOREIGN location (the boy's gastric mucosa — right architecture, wrong organ). Swapping them inverts the definitions on the printed page.",
        },
        {
          label: "The boy's gastric mucosa represents an early adenocarcinoma arising within the Meckel diverticulum, and the sister's polyps are premalignant dysplasias destined for carcinoma in situ",
          text: "Any finding beside a polyp in the gut is on the road to cancer.",
          why: "Overcalling both lesions: the gastric mucosa is histologically NORMAL — no pleomorphism, no ↑ nuclear:cytoplasmic ratio, no full-thickness atypia, no basement-membrane breach — so no dysplasia, carcinoma in situ, or invasive carcinoma exists in this specimen; ectopic mucosa is a malformation, not an early malignancy (though longstanding ectopic gastric acid can ulcerate adjacent ileum, that is injury, not neoplasia). The sister's hamartomatous Peutz-Jeghers polyps are also not dysplasias — PJS instead carries a separate germline cancer risk, but the polyp itself is a malformation.",
        },
        {
          label: "The sister's polyps are leiomyomas — benign smooth-muscle neoplasms — because the pathologist noted abundant smooth muscle in the polyp core",
          text: "The muscle names the tumor.",
          why: "Misreading the architecture: a leiomyoma is a clonal benign neoplasm of SMOOTH MUSCLE (the table's Smooth muscle row — Leiomyoma vs Leiomyosarcoma), a uniform proliferation of muscle alone. The sister's polyp is a disorganized MIXTURE of mature smooth muscle plus native ileal glands and connective tissue — a hamartoma — and the clinical context (lip pigmentation, multiple small-bowel polyps) is Peutz-Jeghers syndrome, the printed hamartoma example. One tissue type, uniform = leiomyoma; many native tissues, disorganized = hamartoma.",
        },
      ],
      reasoning:
        "The case forces the malformation pair against the neoplastic vocabulary. (1) THE BOY'S LESION: normal gastric mucosa with parietal cells in the distal ileum = the printed CHORISTOMA example (normal tissue in a foreign location — the Meckel diverticulum); the pertechnetate uptake and the vitelline artery confirm the ectopic parietal cells in a true diverticulum. (2) THE SISTER'S LESION: disorganized native smooth muscle + ileal glands + connective tissue in a pedunculated small-bowel polyp, with mucocutaneous pigmentation = the printed HAMARTOMA example (Peutz-Jeghers polyps — disorganized overgrowth of tissues in their native location). (3) THE BOUNDARY: First Aid files both under 'terms for non-neoplastic malformations' — neither is a neoplasm (no monoclonal parenchyma + stroma), which excludes adenoma (benign epithelial neoplasm), adenocarcinoma/carcinoma in situ (malignant or preinvasive epithelial neoplasia), and leiomyoma (benign smooth-muscle neoplasm). (4) THE MEMORY CODE: right tissue wrong architecture = hamartoma; right architecture wrong address = choristoma — the location question that resolves the pair.",
    },
  },
  mnemonics: [
    {
      code: "PARENCHYMA PROPAGATES, STROMA SUPPORTS",
      meaning: "Every neoplastic growth has two components: the PARENCHYMA — the neoplastic cells themselves, the clonal population doing the propagating — and the supporting STROMA — nonneoplastic blood vessels and connective tissue feeding and scaffolding it. The neoplasm is uncontrolled, often monoclonal proliferation; benign or malignant is the behavior question, parenchyma-versus-stroma is the architecture question.",
      memorizes: "The neoplasia definition and its two components",
      whenToUse: "Any question asking what composes a neoplastic growth or distinguishing the tumor cells from their supporting tissue",
      clinical: "The cancer is the parenchyma; the stroma is the supply line it recruits — a fact antiangiogenic and stroma-directed therapies exploit.",
    },
    {
      code: "POLARITY, PLEOMORPHIC, PAN-THICKNESS, PIERCE, PASS",
      meaning: "The five stations of neoplastic progression: POLARITY — normal cells with basal → apical polarity; PLEOMORPHIC — dysplasia (loss of uniformity in cell size and shape, lost tissue orientation, ↑ nuclear:cytoplasmic ratio; often REVERSIBLE); PAN-THICKNESS — carcinoma in situ (irreversible severe dysplasia involving the entire thickness of epithelium, intact basement membrane); PIERCE — invasive carcinoma (cells invade the basement membrane using collagenases and hydrolases [metalloproteinases]; cell-cell contacts lost by E-cadherin inactivation); PASS — metastasis (spread to distant organ(s) via lymphatics or blood).",
      memorizes: "The five-station progression figure and its definitions",
      whenToUse: "Any cervical-cytology, biopsy-depth, or progression-stage question",
      clinical: "The membrane is the hinge: reversible above it (POLARITY, PLEOMORPHIC), contained at it (PAN-THICKNESS), lethal below it (PIERCE, PASS).",
    },
    {
      code: "CARCINOMA CLAIMS THE COVERING, SARCOMA CLAIMS THE SOFT",
      meaning: "The naming code by tissue of origin: CARCINOMA = epithelial (the covering) — benign adenoma/papilloma, malignant adenocarcinoma/papillary carcinoma; SARCOMA = mesenchymal (the soft tissues) — benign hemangioma, leiomyoma, rhabdomyoma, fibroma, osteoma, lipoma against malignant angiosarcoma, leiomyosarcoma, rhabdomyosarcoma, fibrosarcoma, osteosarcoma, liposarcoma; BOTH suffixes imply malignancy. The two rebels: BLOOD CELLS have no benign name at all (leukemia, lymphoma — malignant-only) and MELANOCYTE keeps a bare -oma for its malignant form (nevus/mole benign, melanoma malignant).",
      memorizes: "The tumor nomenclature table and the carcinoma-versus-sarcoma rule",
      whenToUse: "Any tumor-naming or naming-pair question (what is the benign counterpart of…, which suffix means malignant…)",
      clinical: "Read the suffix first (carcinoma/sarcoma = malignant), then the tissue (covering vs soft), then check the two rebel rows — hematologic and melanocytic — where the suffix conventions break.",
    },
    {
      code: "MICROSCOPE FOR GRADE, MAP FOR STAGE, M BEATS N BEATS T",
      meaning: "The two rulers: GRADE = MICROSCOPE — degree of cell differentiation (tissue of origin resemblance) and mitotic activity on histology, from low-grade (well differentiated) to high-grade (poorly differentiated or undifferentiated [anaplastic]); higher grade correlates with higher aggressiveness. STAGE = MAP — degree of invasion and spread from the initial site; depth of invasion correlates to risk of metastasis; clinical (c) or pathologic (p) findings; TNM scored with importance M > N > T (Distant metastasis beats Regional lymph node beats Primary tumor). And the verdict: stage generally has more prognostic value than grade — stage (spread) determines survival.",
      memorizes: "Grade vs stage, the TNM importance order, and the prognostic verdict",
      whenToUse: "Any grading-versus-staging question, TNM interpretation, or prognosis-comparison stem",
      clinical: "The slide tells you how angry the cells are; the map tells you where they have been — and the map wins, because spread, not appearance, sets survival.",
    },
  ],
  rapidReview: {
    s30: [
      "Neoplasia: uncontrolled, often monoclonal proliferation of cells; benign or malignant; two components — parenchyma (neoplastic cells) + supporting stroma (nonneoplastic; eg, blood vessels, connective tissue)",
      "Normal cells: basal → apical polarity (cervical example shows normal cells and spectrum of dysplasia)",
      "Dysplasia: pleomorphism, loss of tissue orientation, ↑ nuclear:cytoplasmic ratio; often REVERSIBLE",
      "Carcinoma in situ: irreversible severe dysplasia involving the ENTIRE thickness of epithelium; does NOT penetrate the intact basement membrane",
      "Invasive carcinoma: cells invade basement membrane via collagenases and hydrolases (metalloproteinases); cell-cell contacts lost by E-cadherin inactivation",
      "Metastasis: spread to distant organ(s) via lymphatics or blood",
      "Carcinoma = epithelial origin; sarcoma = mesenchymal origin; both terms generally imply malignancy",
      "Benign: well-differentiated, well-demarcated, low mitotic activity, no metastases, no necrosis; Malignant: poor differentiation, erratic growth, local invasion, metastasis, ↓ apoptosis",
      "Hamartoma = disorganized overgrowth of native tissues (Peutz-Jeghers polyps); choristoma = normal tissue in a foreign location (gastric tissue in distal ileum in Meckel diverticulum)",
      "Nomenclature table: adenoma/papilloma vs adenocarcinoma/papillary carcinoma; blood cells malignant-only (leukemia, lymphoma — empty benign cell); hemangioma/angiosarcoma; leiomyoma/leiomyosarcoma; rhabdomyoma/rhabdomyosarcoma; fibroma/fibrosarcoma; osteoma/osteosarcoma; lipoma/liposarcoma; nevus/mole vs melanoma",
      "Grade = differentiation + mitotic activity (low-grade to anaplastic; correlates with aggressiveness); Stage = invasion + spread (c/p; TNM with M > N > T); stage has more prognostic value — stage (spread) determines survival",
    ],
    m3: [
      "PARENCHYMA PROPAGATES, STROMA SUPPORTS — the two components of every neoplastic growth",
      "POLARITY, PLEOMORPHIC, PAN-THICKNESS, PIERCE, PASS — the five stations; the membrane is the hinge",
      "CARCINOMA CLAIMS THE COVERING, SARCOMA CLAIMS THE SOFT — plus the two rebels: leukemia/lymphoma (no benign) and melanoma (malignant -oma)",
      "MICROSCOPE FOR GRADE, MAP FOR STAGE, M BEATS N BEATS T — and the map wins: stage determines survival",
      "The location question for malformations: native-but-disorganized = hamartoma; normal-but-foreign = choristoma",
    ],
    m10: [
      "The two molecular weapons of the breach: metalloproteinases (collagenases + hydrolases) digest the basement membrane; E-cadherin inactivation dissolves cell-cell contacts — both must act for invasion",
      "The table's structure: Mesenchyme is a ROW-GROUP label spanning Blood cells, Blood vessels, Smooth muscle, Striated muscle, Connective tissue, Bone, and Fat; Epithelium and Melanocyte stand outside the group",
      "The three malignant -oma names that break the benign-suffix convention: leukemia, lymphoma (blood cells — benign cell empty) and melanoma (melanocyte — malignant despite the bare suffix)",
      "Depth of invasion correlates to risk of metastasis — the reason stage, which measures invasion and spread, out-prognoses grade, which measures appearance",
      "cTNM = clinical (imaging/exam) staging; pTNM = pathologic (surgical pathology) staging — the prefixes on every TNM statement",
    ],
  },
  recall: [
    {
      q: "The neoplasia definition verbatim — including the two components.",
      a: "Uncontrolled, often monoclonal proliferation of cells. Can be benign or malignant. Any neoplastic growth has two components: parenchyma (neoplastic cells) and supporting stroma (nonneoplastic; eg, blood vessels, connective tissue).",
    },
    {
      q: "The five progression station definitions verbatim (book 215).",
      a: "NORMAL CELLS: Normal cells with basal → apical polarity. See cervical example, which shows normal cells and spectrum of dysplasia, as discussed below. DYSPLASIA: Loss of uniformity in cell size and shape (pleomorphism); loss of tissue orientation; nuclear changes (eg, ↑ nuclear:cytoplasmic ratio); often reversible. CARCINOMA IN SITU/PREINVASIVE: Irreversible severe dysplasia that involves the entire thickness of epithelium but does not penetrate the intact basement membrane. INVASIVE CARCINOMA: Cells have invaded basement membrane using collagenases and hydrolases (metalloproteinases). Cell-cell contacts lost by inactivation of E-cadherin. METASTASIS: Spread to distant organ(s) via lymphatics or blood.",
    },
    {
      q: "The nomenclature rules and the malformation pair verbatim (book 216).",
      a: "Carcinoma implies epithelial origin, whereas sarcoma denotes mesenchymal origin. Both terms generally imply malignancy. Benign tumors are usually well-differentiated and well-demarcated, with low mitotic activity, no metastases, and no necrosis. Malignant tumors (cancers) may show poor differentiation, erratic growth, local invasion, metastasis, and ↓ apoptosis. Terms for non-neoplastic malformations include hamartoma (disorganized overgrowth of tissues in their native location, eg, Peutz-Jeghers polyps) and choristoma (normal tissue in a foreign location, eg, gastric tissue located in distal ileum in Meckel diverticulum).",
    },
    {
      q: "The tumor nomenclature table verbatim — all rows, including the Mesenchyme group label and the Blood cells row.",
      a: "CeLL TYPe | BeNIGN | MALIGNANT — Epithelium: Adenoma, papilloma | Adenocarcinoma, papillary carcinoma. Mesenchyme (row-group label, empty benign and malignant cells): Blood cells: — | Leukemia, lymphoma. Blood vessels: Hemangioma | Angiosarcoma. Smooth muscle: Leiomyoma | Leiomyosarcoma. Striated muscle: Rhabdomyoma | Rhabdomyosarcoma. Connective tissue: Fibroma | Fibrosarcoma. Bone: Osteoma | Osteosarcoma. Fat: Lipoma | Liposarcoma. Melanocyte: Nevus/mole | Melanoma.",
    },
    {
      q: "The grade column verbatim (book 216).",
      a: "Degree of cell differentiation (tissue of origin resemblance) and mitotic activity on histology. Ranges from low-grade (well differentiated) to high-grade (poorly differentiated or undifferentiated [anaplastic]). Higher grade often correlates with higher aggressiveness.",
    },
    {
      q: "The stage column verbatim — including the TNM bullets and the prognostic verdict (book 216).",
      a: "Degree of invasion and spread from initial site. Depth of invasion correlates to risk of metastasis. Based on clinical (c) or pathologic (p) findings. TNM staging system (importance: M > N > T): ▘ Primary tumor size/invasion. ▘ Regional lymph node metastasis. ▘ Distant metastasis. Stage generally has more prognostic value than grade (eg, a high-stage yet low-grade tumor is usually worse than a low-stage yet high-grade tumor). Stage (spread) determines survival.",
    },
  ],
  related: [
    {
      title: "Cellular Adaptations: Hypertrophy Through Dysplasia",
      topicId: "cellular-adaptations",
      note: "Dysplasia is the shared station: the adaptations page defines it among the reversible responses to stress, and this page takes it to its irreversible endpoint — carcinoma in situ — the moment the basement membrane becomes the only barrier.",
    },
    {
      title: "Hallmarks of Cancer",
      topicId: "cancer-hallmarks",
      note: "The very next page (book 217): the molecular machinery beneath this progression — growth-signal self-sufficiency, anti-growth insensitivity, and the ↓ apoptosis named in the malignant-trait list, all as acquired DNA mutations affecting fundamental cellular processes.",
    },
    {
      title: "Metastasis: Organ Patterns & Routes",
      topicId: "metastasis-patterns",
      note: "The fifth station expanded: where the lymphatic and hematogenous routes carry each parenchyma — the organ-tropism patterns that turn 'spread to distant organ(s)' into specific expected destinations.",
    },
    {
      title: "Apoptosis: Intrinsic, Extrinsic & Misfolded Proteins",
      topicId: "apoptosis-pathways",
      note: "The malignant trait '↓ apoptosis' mechanized: the intrinsic and extrinsic pathways a cancer must evade — the trait list's last entry is the evasion biology detailed there.",
    },
    {
      title: "Tumor Markers, Molecular Diagnostics & IHC",
      topicId: "tumor-markers-molecular",
      note: "The naming table in daily practice: immunohistochemistry and molecular markers assign the tissue of origin that the carcinoma-versus-sarcoma code requires when morphology alone cannot.",
    },
  ],
  crossLinks: [
    {
      subject: "Immunology (the hematologic malignancies)",
      connection:
        "The Blood cells row's empty BENIGN cell is the table's immunology crossover: leukemias and lymphomas are malignancies of leukocyte lineages — liquid and nodal diseases with no benign counterpart in the naming table, staged by different systems (eg, Ann Arbor, Rai/Binet) than solid-tumor TNM.",
    },
    {
      subject: "Cell biology (E-cadherin and cell adhesion)",
      connection:
        "The invasion step is a junction-molecule story: E-cadherin — the adherens-junction calcium-binding adhesion molecule of epithelial layers — is inactivated so cell-cell contacts are lost; its loss is the molecular license for a carcinoma in situ to become invasive.",
    },
    {
      subject: "Genetics (monoclonality)",
      connection:
        "The definition's 'often monoclonal proliferation' links to clonality as neoplasia's genetic signature — the clonal expansion that distinguishes a neoplasm from the polyclonal hyperplasia of the cellular-adaptations page.",
    },
    {
      subject: "Oncology and surgery (TNM in practice)",
      connection:
        "The c/p prefixes and the M > N > T hierarchy are the staging language of every tumor board: clinical (c) staging from imaging and exam, pathologic (p) staging from the resection — with distant metastasis (M) the stage-setter because spread, not the primary's size or the nodes' burden, sets survival.",
    },
  ],
};
