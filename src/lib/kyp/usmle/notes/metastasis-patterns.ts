import type { KypUsMLENote } from "../types";

// Pathology — NEOPLASIA banner (P-batch 15). Source: pdf 241 /
// book 219 (Common metastases — the CLaSH rule, the 4-hematogenous-
// carcinoma exception list, the metastasis-vs-primary rule, and the
// 4-row site-of-metastasis table with the bone blastic/mixed/lytic
// fork). Census (pdfimages + VLM): TWO copyrighted photographs —
// the "A" marker (image 0, 188x245 gray jpeg at 150 dpi — the bone
// metastasis axial-skeleton image beside the Bone row's
// "Predilection for axial skeleton A" note) and the "B" marker
// (image 1, 188x150 cmyk jpeg at 150 dpi — the liver parenchyma
// image beside the Liver row's "Scattered throughout liver
// parenchyma B" note) — BOTH described-in-text only, NEVER
// reproduced (the M32 convention). The page has NO vector figures
// — the CLaSH rule (the source's own acronym, attributed), the
// 4-hematogenous-carcinoma exception list, and the 4-row
// site-of-metastasis table are pure text, carried verbatim in the
// note's table block. NO margin mnemonics beyond the source's CLaSH
// (VLM confirmed); the KYP memory layer is original.

export const metastasisPatterns: KypUsMLENote = {
  id: "metastasis-patterns",
  title: "Metastasis: Organ Patterns & Routes",
  subtitle:
    "The route rule, its four exceptions, and the four target organs (book 219) — CLaSH (the source's own acronym): most Carcinomas spread via Lymphatics; most Sarcomas spread Hematogenously. FOUR HEMATOGENOUS CARCINOMAS (the exceptions): follicular thyroid carcinoma, choriocarcinoma, renal cell carcinoma, hepatocellular carcinoma. THE METASTASIS-VS-PRIMARY RULE: metastasis to bone, liver, lung, and brain is more common than 1° malignancy in these organs; metastases often appear as multiple lesions (vs 1° tumors which generally appear as solitary lesions). THE 4-ROW SITE-OF-METASTASIS TABLE — BONE: Prostate, breast >> lung > kidney, colon; predilection for axial skeleton; blastic (prostate, small cell lung cancer) / mixed (breast) / lytic (kidney, colon, non-small cell lung cancer). LIVER: Colon > breast >> pancreas, lung, prostate; scattered throughout liver parenchyma. LUNG: Colon, breast >> kidney, prostate; typically involve both lungs. BRAIN: Lung > breast >> melanoma > colon, prostate; usually seen at gray-white matter junction.",
  subject: "Pathology",
  system: "Section II · High-Yield General Principles — Pathology: Neoplasia",
  pilotCategory:
    "The metastasis page's complete architecture — the CLaSH route rule (carcinoma-lymphatic vs sarcoma-hematogenous), the four hematogenous-carcinoma exceptions (follicular thyroid, choriocarcinoma, renal cell, hepatocellular), the metastasis-vs-primary rule (more common than 1° in bone/liver/lung/brain; multiple vs solitary lesions), and the 4-row site-of-metastasis table (Bone: prostate/breast/lung/kidney/colon with the blastic/mixed/lytic fork; Liver: colon/breast/pancreas/lung/prostate; Lung: colon/breast/kidney/prostate; Brain: lung/breast/melanoma/colon/prostate with the gray-white junction note) — plus the two copyrighted photographs (A = bone axial-skeleton, B = liver parenchyma) described in text.",
  difficulty: 2,
  readTime: 8,
  sourceRef:
    "First Aid 2026, Part 1 pp. 219 (Pathology — Neoplasia: Common metastases — the CLaSH rule [the source's own acronym, attributed], the four hematogenous-carcinoma exceptions [follicular thyroid, choriocarcinoma, renal cell, hepatocellular], the metastasis-vs-primary rule, and the 4-row site-of-metastasis table [Bone, Liver, Lung, Brain with their tumor lists, the axial-skeleton predilection, the bone blastic/mixed/lytic fork, the scattered-liver-parenchyma note, the bilateral-lung note, and the gray-white-matter-junction note]; the two lettered photographs A and B, described in text)",
  tags: [
    "metastasis",
    "metastatic patterns",
    "CLaSH",
    "carcinoma lymphatic spread",
    "sarcoma hematogenous spread",
    "hematogenous carcinomas",
    "follicular thyroid carcinoma",
    "choriocarcinoma",
    "renal cell carcinoma",
    "hepatocellular carcinoma",
    "bone metastasis",
    "liver metastasis",
    "lung metastasis",
    "brain metastasis",
    "axial skeleton predilection",
    "blastic bone metastasis",
    "prostate cancer blastic",
    "small cell lung cancer blastic",
    "mixed bone metastasis",
    "breast cancer mixed",
    "lytic bone metastasis",
    "kidney cancer lytic",
    "colon cancer lytic",
    "non-small cell lung cancer lytic",
    "colon liver metastasis",
    "breast liver metastasis",
    "pancreas liver metastasis",
    "lung brain metastasis",
    "breast brain metastasis",
    "melanoma brain metastasis",
    "gray-white matter junction",
    "multiple lesions",
    "solitary primary tumor",
    "metastasis more common than primary",
  ],
  core: {
    what:
      "THE CLaSH RULE (the source's own acronym): most Carcinomas spread via Lymphatics; most Sarcomas spread Hematogenously (CLaSH). FOUR HEMATOGENOUS CARCINOMAS (the exceptions that route hematogenously despite being carcinomas): follicular thyroid carcinoma, choriocarcinoma, renal cell carcinoma, and hepatocellular carcinoma. THE METASTASIS-VS-PRIMARY RULE: metastasis to bone, liver, lung, and brain is more common than 1° malignancy in these organs; metastases often appear as multiple lesions (vs 1° tumors which generally appear as solitary lesions). THE 4-ROW SITE-OF-METASTASIS TABLE — BONE: 10 tumor list 'Prostate, breast >> lung > kidney, colon'; predilection for axial skeleton (photograph A — copyrighted, described); bone metastasis can be BLASTIC (eg, prostate, small cell lung cancer), MIXED (eg, breast), or LYTIC (eg, kidney, colon, non-small cell lung cancer). LIVER: 10 tumor list 'Colon > breast >> pancreas, lung, prostate'; scattered throughout liver parenchyma (photograph B — copyrighted, described). LUNG: 10 tumor list 'Colon, breast >> kidney, prostate'; typically involve both lungs. BRAIN: 10 tumor list 'Lung > breast >> melanoma > colon, prostate'; usually seen at gray-white matter junction.",
    why:
      "This page is the metastasis chapter's two-axis map: the route axis (how a tumor spreads) and the tropism axis (where it lands). The route axis is the CLaSH rule — carcinomas to lymphatics, sarcomas to blood — with four named exceptions that break the carcinoma-lymphatic default (follicular thyroid, choriocarcinoma, renal cell, hepatocellular all route hematogenously because of their vascular biology: follicular thyroid's angioinvasion, choriocarcinoma's early blood-vessel invasion, renal cell's renal-vein invasion, hepatocellular's hepatic-vein invasion). The tropism axis is the 4-row table: bone, liver, lung, and brain are the four organs where metastasis is more common than primary disease, and each row names the tumors that most commonly seed it. Bone leads with prostate and breast (the two most common causes of cancer bone metastasis, both with axial-skeleton predilection) and splits into the blastic/mixed/lytic fork — prostate and small cell lung cancer make blastic (sclerotic) bone; breast makes mixed; kidney, colon, and non-small cell lung cancer make lytic (destructive) bone. Liver leads with colon (the portal-vein first-capillary-bed rule from P13's metastasis hallmark) then breast, with pancreas, lung, and prostate trailing. Lung leads with colon and breast (both hematogenous to the pulmonary capillary bed). Brain leads with lung and breast then melanoma (the neurotropic tumor) with colon and prostate trailing, all at the gray-white matter junction (the hemodynamic deposit site). And the metastasis-vs-primary rule closes the page: in bone, liver, lung, and brain, metastases are more common than primaries, and metastases are multiple while primaries are solitary — the imaging heuristic that names a multi-lesion organ deposit a metastasis until proven otherwise.",
    keyIdea:
      "Read every metastasis question through two axes. ROUTE AXIS — CLaSH: carcinomas to lymphatics, sarcomas to blood; FOUR EXCEPTIONS that route hematogenously despite being carcinomas: follicular thyroid, choriocarcinoma, renal cell, hepatocellular (the four vascular-biology exceptions). TROPISM AXIS — the 4-row site-of-metastasis table: BONE (prostate, breast >> lung > kidney, colon; axial skeleton; blastic [prostate, SCLC] / mixed [breast] / lytic [kidney, colon, NSCLC]); LIVER (colon > breast >> pancreas, lung, prostate; scattered throughout parenchyma); LUNG (colon, breast >> kidney, prostate; bilateral); BRAIN (lung > breast >> melanoma > colon, prostate; gray-white junction). And the metastasis-vs-primary rule: metastasis is more common than 1° in bone/liver/lung/brain; metastases are MULTIPLE, primaries are SOLITARY.",
  },
  mechanisms: [
    {
      id: "clash-route-axis",
      title: "The CLaSH route axis: carcinoma-lymphatic vs sarcoma-hematogenous, with four exceptions",
      context: "The CLaSH rule and the 4-hematogenous-carcinoma list (book 219)",
      flow: {
        nodes: [
          {
            id: "input",
            label: "A tumor has acquired the capacity to spread (hallmark 9)",
            sublabel:
              "Input — the invasion-metastasis cascade (hallmark 8-9) has delivered tumor cells to the vascular compartment. The route question is: lymphatics or blood?",
            variant: "input",
          },
          {
            id: "default",
            label: "THE DEFAULT — CLaSH: Carcinomas-Lymphatics, Sarcomas-Hematogenous",
            sublabel:
              "Most Carcinomas spread via Lymphatics (the lymph-node-first route); most Sarcomas spread Hematogenously (the blood-vessel-first route). The CLaSH acronym (the source's own) names the default.",
            variant: "process",
          },
          {
            id: "exceptions",
            label: "THE FOUR EXCEPTIONS — hematogenous carcinomas",
            sublabel:
              "Four carcinomas route hematogenously despite the carcinoma-lymphatic default: follicular thyroid carcinoma (angioinvasion), choriocarcinoma (early blood-vessel invasion), renal cell carcinoma (renal-vein invasion), hepatocellular carcinoma (hepatic-vein invasion). The vascular-biology exceptions.",
            variant: "process",
          },
          {
            id: "output",
            label: "Name the route, then name the tropism",
            sublabel:
              "Output — the route axis answers 'how does it spread?' (CLaSH default + 4 exceptions); the tropism axis answers 'where does it land?' (the 4-row site-of-metastasis table). Together they predict the imaging pattern.",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "default", label: "the CLaSH default" },
          { from: "default", to: "exceptions", label: "4 carcinomas break the default" },
          { from: "exceptions", to: "output", label: "route named" },
        ],
      },
    },
    {
      id: "site-tropism-axis",
      title: "The site-tropism axis: the four target organs and their tumor lists",
      context: "The 4-row site-of-metastasis table (book 219)",
      flow: {
        nodes: [
          {
            id: "input",
            label: "Metastasis to bone, liver, lung, or brain — more common than 1°",
            sublabel:
              "Input — in these four organs, metastasis is more common than primary malignancy. Metastases often appear as MULTIPLE lesions (vs 1° tumors which generally appear as SOLITARY lesions).",
            variant: "input",
          },
          {
            id: "bone",
            label: "BONE — prostate, breast >> lung > kidney, colon; axial skeleton",
            sublabel:
              "10 tumor list: Prostate, breast >> lung > kidney, colon. Predilection for axial skeleton (photograph A — copyrighted, described). Bone metastasis fork: BLASTIC (prostate, small cell lung cancer), MIXED (breast), LYTIC (kidney, colon, non-small cell lung cancer).",
            variant: "process",
          },
          {
            id: "liver",
            label: "LIVER — colon > breast >> pancreas, lung, prostate; scattered parenchyma",
            sublabel:
              "10 tumor list: Colon > breast >> pancreas, lung, prostate. Scattered throughout liver parenchyma (photograph B — copyrighted, described). Colon leads via the portal-vein first-capillary-bed rule.",
            variant: "process",
          },
          {
            id: "lung",
            label: "LUNG — colon, breast >> kidney, prostate; bilateral",
            sublabel:
              "10 tumor list: Colon, breast >> kidney, prostate. Typically involve BOTH lungs — the bilateral hematogenous deposit pattern.",
            variant: "process",
          },
          {
            id: "brain",
            label: "BRAIN — lung > breast >> melanoma > colon, prostate; gray-white junction",
            sublabel:
              "10 tumor list: Lung > breast >> melanoma > colon, prostate. Usually seen at the gray-white matter junction — the hemodynamic deposit site where the white matter's narrow capillaries trap the embolic tumor cells.",
            variant: "process",
          },
          {
            id: "output",
            label: "The imaging heuristic — multiple lesions in these organs = metastasis until proven otherwise",
            sublabel:
              "Output — in bone, liver, lung, and brain, multiple lesions are metastases until a primary is found; the tumor list per organ predicts the source, and the bone blastic/mixed/lytic fork refines the prediction.",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "bone", label: "axial skeleton" },
          { from: "input", to: "liver", label: "portal bed" },
          { from: "input", to: "lung", label: "bilateral" },
          { from: "input", to: "brain", label: "gray-white junction" },
          { from: "bone", to: "output", label: "blastic/mixed/lytic" },
          { from: "liver", to: "output", label: "scattered parenchyma" },
          { from: "lung", to: "output", label: "bilateral" },
          { from: "brain", to: "output", label: "junction deposits" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "metastasis-pattern-map",
      title: "The metastasis pattern map (an original KYP adaptation with the CLaSH rule and the 4-row site grid)",
      caption:
        "An original KYP adaptation of the source page (book 219): the CLaSH panel (the source's own acronym: Carcinomas-Lymphatics, Sarcomas-Hematogenous) with the four hematogenous-carcinoma exceptions (follicular thyroid, choriocarcinoma, renal cell, hepatocellular); the metastasis-vs-primary rule (more common than 1° in bone/liver/lung/brain; multiple vs solitary lesions); the 4-row site-of-metastasis grid (Bone: prostate, breast >> lung > kidney, colon with the axial-skeleton predilection [photograph A described] and the blastic/mixed/lytic fork; Liver: colon > breast >> pancreas, lung, prostate with the scattered-parenchyma note [photograph B described]; Lung: colon, breast >> kidney, prostate with the bilateral note; Brain: lung > breast >> melanoma > colon, prostate with the gray-white-junction note); and the imaging heuristic (multiple lesions = metastasis until proven otherwise).",
      notice:
        "Census (pdfimages + VLM): TWO copyrighted photographs on the page — the 'A' marker (image 0, 188x245 gray jpeg at 150 dpi — the bone metastasis axial-skeleton image beside the Bone row's 'Predilection for axial skeleton A' note) and the 'B' marker (image 1, 188x150 cmyk jpeg at 150 dpi — the liver parenchyma image beside the Liver row's 'Scattered throughout liver parenchyma B' note). BOTH described in text in this note's table and in the registry visual, NEVER reproduced (the M32 convention). The page has NO vector figures — the CLaSH rule (the source's own acronym, attributed), the 4-hematogenous-carcinoma exception list, and the 4-row site-of-metastasis table are pure text, carried verbatim in this note's table. No margin mnemonics beyond the source's CLaSH (VLM confirmed); the KYP memory layer stays original.",
    },
    {
      kind: "table",
      title: "Book 219 — the CLaSH rule, the four exceptions, and the site-of-metastasis table (carried verbatim)",
      intro: "The route rule, its exceptions, the metastasis-vs-primary heuristic, and the 4-row site grid, as printed.",
      columns: ["BLOCK", "VERBATIM — book 219"],
      rows: [
        [
          "THE CLaSH RULE",
          "Most Carcinomas spread via Lymphatics; most Sarcomas spread Hematogenously (CLaSH). [The source's own acronym — attributed.]",
        ],
        [
          "THE FOUR HEMATOGENOUS CARCINOMAS",
          "However, four carcinomas route hematogenously: follicular thyroid carcinoma, choriocarcinoma, renal cell carcinoma, and hepatocellular carcinoma.",
        ],
        [
          "THE METASTASIS-VS-PRIMARY RULE",
          "Metastasis to bone, liver, lung, and brain is more common than 1° malignancy in these organs. Metastases often appear as multiple lesions (vs 1° tumors which generally appear as solitary lesions).",
        ],
        [
          "BONE (photograph A — copyrighted, described)",
          "SITE: Bone. 10 TUMOR: Prostate, breast >> lung > kidney, colon. NOTES: Predilection for axial skeleton A. Bone metastasis can be: ▘ Blastic (eg, prostate, small cell lung cancer). ▘ Mixed (eg, breast). ▘ Lytic (eg, kidney, colon, non-small cell lung cancer). [Photograph A, described in text: a gray jpeg radiograph/photograph (188x245 at 150 dpi) showing the axial skeleton's predilection for bone metastasis — copyrighted, never reproduced.]",
        ],
        [
          "LIVER (photograph B — copyrighted, described)",
          "SITE: Liver. 10 TUMOR: Colon > breast >> pancreas, lung, prostate. NOTES: Scattered throughout liver parenchyma B. [Photograph B, described in text: a cmyk jpeg histology/photograph (188x150 at 150 dpi) showing metastatic deposits scattered throughout the liver parenchyma — copyrighted, never reproduced.]",
        ],
        [
          "LUNG",
          "SITE: Lung. 10 TUMOR: Colon, breast >> kidney, prostate. NOTES: Typically involve both lungs.",
        ],
        [
          "BRAIN",
          "SITE: Brain. 10 TUMOR: Lung > breast >> melanoma > colon, prostate. NOTES: Usually seen at gray-white matter junction.",
        ],
      ],
      caption:
        "The CLaSH rule names the route default (carcinomas-lymphatic, sarcomas-hematogenous); the four hematogenous carcinomas are the vascular-biology exceptions. The 4-row site grid names the tropism — bone (prostate/breast, axial skeleton, blastic/mixed/lytic), liver (colon first via the portal bed, scattered parenchyma), lung (colon/breast, bilateral), brain (lung/breast/melanoma, gray-white junction). And the metastasis-vs-primary rule: in these four organs, multiple lesions are metastases until proven otherwise.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem:
          "A 72-year-old man with newly diagnosed prostate cancer presents with back pain; a bone scan shows multiple intense uptake lesions throughout the axial skeleton including the lumbar spine, pelvis, and ribs.",
        discriminator:
          "Prostate cancer bone metastasis — blastic lesions in the axial skeleton (the prostate/breast >> lung > kidney/colon list with the blastic fork)",
        concept: "The bone tropism + blastic fork",
        answer:
          "The bone row's first-listed tumor: prostate, breast >> lung > kidney, colon, with the predilection for the axial skeleton. Prostate cancer bone metastases are BLASTIC (sclerotic) — one of the blastic fork's named examples (along with small cell lung cancer). The multiple lesions in the axial skeleton (lumbar spine, pelvis, ribs) fit the printed predilection, and the blastic appearance on bone scan (intense uptake) reflects the osteoblastic response that prostate metastases trigger. The CLaSH rule is the route context: prostate is a carcinoma, so it spreads lymphatically by default, but bone metastasis in prostate cancer is hematogenous (the axial skeleton's valveless venous plexus — Batson's plexus — providing the route).",
      },
      {
        stem:
          "A 58-year-old woman with a history of stage III colorectal cancer presents with right-upper-quadrant pain and elevated liver function tests; CT shows multiple hypodense lesions scattered throughout the liver parenchyma.",
        discriminator:
          "Colon cancer liver metastasis — colon is the first-listed liver tumor via the portal-vein first-capillary-bed rule; scattered parenchyma",
        concept: "The liver tropism + portal-bed rule",
        answer:
          "The liver row's first-listed tumor: Colon > breast >> pancreas, lung, prostate, with the scattered-throughout-liver-parenchyma note. Colon cancer seeds the liver via the portal vein — the first capillary bed downstream of the colon's venous drainage (P13's first-capillary-bed rule from the metastasis hallmark). The multiple hypodense lesions scattered throughout the parenchyma fit the printed note (and the metastasis-vs-primary rule: multiple lesions = metastasis until proven otherwise). The CLaSH route context: colon is a carcinoma (lymphatic default), but the portal venous system delivers hematogenous metastases to the liver as the first capillary bed.",
      },
      {
        stem:
          "A 45-year-old man presents with headache and ataxia; brain MRI shows a single ring-enhancing lesion at the gray-white matter junction. He has a 30-pack-year smoking history and a 3-cm right upper lobe lung mass on chest CT.",
        discriminator:
          "Lung cancer brain metastasis — lung is the first-listed brain tumor; gray-white matter junction is the printed note",
        concept: "The brain tropism + gray-white junction",
        answer:
          "The brain row's first-listed tumor: Lung > breast >> melanoma > colon, prostate, with the 'usually seen at gray-white matter junction' note. Lung cancer is the most common source of brain metastases (the first-listed brain tumor), and the gray-white matter junction is the hemodynamic deposit site where the white matter's narrow capillaries trap embolic tumor cells. The CLaSH route context: lung is a carcinoma (lymphatic default), but brain metastasis is hematogenous — the systemic venous circulation delivering tumor emboli through the right heart, pulmonary circulation, left heart, and systemic arterial tree to the brain. The smoking history and the lung mass confirm the primary.",
      },
    ],
    traps: [
      {
        a: "Carcinoma (lymphatic route)",
        b: "Sarcoma (hematogenous route)",
        whyConfused: "Both are malignant tumors that can metastasize",
        keyDifference:
          "CARCINOMAS spread via LYMPHATICS (the lymph-node-first route, the CLaSH default); SARCOMAS spread HEMATOGENOUSLY (the blood-vessel-first route, the CLaSH default). The route difference reflects the tumor's vascular biology — carcinomas arise from epithelial cells with lymphatic access; sarcomas arise from mesenchymal cells with blood-vessel access.",
        clue:
          "An epithelial tumor (carcinoma) spreading to regional nodes first = lymphatic; a mesenchymal tumor (sarcoma) spreading to lung/bone first = hematogenous — the CLaSH default",
      },
      {
        a: "Hematogenous carcinoma (the 4 exceptions)",
        b: "Lymphatic carcinoma (the CLaSH default)",
        whyConfused: "Both are carcinomas, but they route differently",
        keyDifference:
          "The FOUR HEMATOGENOUS CARCINOMAS route by blood despite being carcinomas: follicular thyroid (angioinvasion), choriocarcinoma (early blood-vessel invasion), renal cell (renal-vein invasion), hepatocellular (hepatic-vein invasion). All other carcinomas follow the CLaSH lymphatic default. The four exceptions share a vascular-biology signature — early blood-vessel invasion.",
        clue:
          "A carcinoma with early hematogenous spread (follicular thyroid to bone, choriocarcinoma to lung/brain, renal cell to renal vein/hepatic vein, hepatocellular to hepatic vein) = one of the four exceptions; a carcinoma with lymph-node-first spread = the CLaSH default",
      },
      {
        a: "Blastic bone metastasis",
        b: "Lytic bone metastasis",
        whyConfused: "Both are bone metastases on imaging",
        keyDifference:
          "BLASTIC (sclerotic, ↑ uptake on bone scan) = prostate, small cell lung cancer — the osteoblastic response dominates. LYTIC (destructive, ↓ uptake or cold spots on bone scan) = kidney, colon, non-small cell lung cancer — the osteoclastic response dominates. MIXED = breast (both responses present).",
        clue:
          "Prostate or SCLC = blastic; kidney, colon, or NSCLC = lytic; breast = mixed — the primary tumor names the bone response",
      },
      {
        a: "Metastasis to an organ",
        b: "Primary tumor of the same organ",
        whyConfused: "Both present as a mass in bone, liver, lung, or brain",
        keyDifference:
          "In BONE, LIVER, LUNG, and BRAIN, metastasis is MORE COMMON than 1° malignancy. METASTASES often appear as MULTIPLE lesions; 1° tumors generally appear as SOLITARY lesions. The multiple-vs-solitary heuristic is the imaging discriminator — multiple lesions in these organs are metastases until a primary is found.",
        clue:
          "Multiple lesions in bone/liver/lung/brain = metastasis until proven otherwise; a solitary lesion could be primary — the metastasis-vs-primary rule",
      },
    ],
    pivots: [
      {
        lookAlike: "A metastasis pattern — which route and which primary?",
        differentiator:
          "ROUTE: CLaSH default (carcinoma-lymphatic, sarcoma-hematogenous) + 4 hematogenous-carcinoma exceptions (follicular thyroid, choriocarcinoma, renal cell, hepatocellular). TROPISM: Bone (prostate, breast >> lung > kidney, colon; blastic/mixed/lytic), Liver (colon > breast >> pancreas, lung, prostate), Lung (colon, breast >> kidney, prostate), Brain (lung > breast >> melanoma > colon, prostate). PRIMARY HEURISTIC: multiple lesions in bone/liver/lung/brain = metastasis until proven otherwise.",
        correctPath:
          "Name the route (CLaSH + 4 exceptions), then name the tropism (the 4-row table), then apply the multiple-vs-solitary heuristic to confirm metastasis over primary",
      },
      {
        lookAlike: "A bone metastasis on imaging — blastic, mixed, or lytic?",
        differentiator:
          "BLASTIC (sclerotic, ↑ uptake): prostate, small cell lung cancer. MIXED: breast. LYTIC (destructive, cold spots): kidney, colon, non-small cell lung cancer. The primary tumor names the bone response — the blastic/mixed/lytic fork.",
        correctPath:
          "Identify the primary tumor, then map to the bone response: prostate or SCLC = blastic; breast = mixed; kidney, colon, or NSCLC = lytic",
      },
    ],
    miniCase: {
      vignette:
        "A 69-year-old man presents with 2 months of progressive lower back pain radiating to his left hip, weight loss, and urinary hesitancy. He has no prior cancer history. Digital rectal exam reveals a hard, nodular prostate. PSA is 87 ng/mL (reference 0-4). A bone scan shows multiple intense uptake lesions in the lumbar spine, sacrum, pelvis, and left proximal femur. A core needle biopsy of the prostate confirms adenocarcinoma, Gleason 4+5=9. The bone lesions are sclerotic on plain radiographs of the pelvis and lumbar spine.",
      question:
        "Name the route of spread, the metastatic pattern, and the bone-response type, and explain why the multiple sclerotic lesions fit the printed metastasis rules.",
      options: [
        {
          label:
            "CLaSH default route (carcinoma → lymphatic) with axial-skeleton bone metastasis via Batson's vertebral venous plexus; the metastatic pattern is prostate (first-listed bone tumor) with axial-skeleton predilection; the bone response is BLASTIC (prostate is a named blastic example). The multiple sclerotic lesions fit the metastasis-vs-primary rule (multiple lesions in bone = metastasis until proven otherwise).",
          text: "Prostate to axial skeleton, blastic — the first-listed bone tumor with the blastic fork.",
          correct: true,
          why:
            "Correct on all four layers. (1) THE ROUTE: prostate is a carcinoma, so the CLaSH default is lymphatic — but prostate cancer's bone metastasis is hematogenous via Batson's vertebral venous plexus (the valveless plexus connecting the prostatic venous plexus to the vertebral veins), a classic anatomical exception to the lymphatic-default route for bone deposition. (2) THE METASTATIC PATTERN: prostate is the FIRST-listed tumor in the Bone row ('Prostate, breast >> lung > kidney, colon'), and the printed note is 'Predilection for axial skeleton' — the lumbar spine, sacrum, pelvis, and proximal femur are all axial-skeleton sites. (3) THE BONE RESPONSE: prostate is a NAMED BLASTIC example ('Blastic (eg, prostate, small cell lung cancer)') — the osteoblastic response produces sclerotic lesions on plain radiographs and intense uptake on bone scan, both present here. (4) THE METASTASIS-VS-PRIMARY RULE: 'Metastases often appear as multiple lesions (vs 1° tumors which generally appear as solitary lesions)' — the multiple lesions throughout the axial skeleton fit the metastasis-over-primary heuristic, confirmed by the 87 ng/mL PSA and the prostate biopsy.",
        },
        {
          label:
            "CLaSH exception route (hematogenous carcinoma) — prostate is one of the four hematogenous carcinomas (follicular thyroid, choriocarcinoma, renal cell, hepatocellular); the bone response is LYTIC",
          text: "Prostate is a hematogenous carcinoma exception; the lesions should be lytic.",
          why:
            "Wrong exception list and wrong bone response: the four hematogenous carcinomas are follicular thyroid, choriocarcinoma, renal cell, and hepatocellular — prostate is NOT on this list. Prostate follows the CLaSH carcinoma-lymphatic default for nodal spread, with bone metastasis via Batson's vertebral venous plexus (an anatomical route, not a CLaSH exception). And prostate bone metastases are BLASTIC (sclerotic, intense uptake), not lytic — the prostate is the first-named blastic example ('Blastic (eg, prostate, small cell lung cancer)').",
        },
        {
          label:
            "Lung cancer bone metastasis — the prostate is incidental; the bone lesions are lytic and from an occult lung primary; the PSA is a false elevation",
          text: "The bone lesions are lytic lung metastases; the prostate is a red herring.",
          why:
            "Wrong primary and wrong bone response: the bone scan's multiple intense uptake lesions are SCLEROTIC (blastic), not lytic — lung cancer's bone metastases are typically LYTIC (non-small cell lung cancer is a named lytic example). The 87 ng/mL PSA with a hard nodular prostate and adenocarcinoma on biopsy is the primary, not a false elevation. And lung is the third-listed bone tumor (after prostate and breast), not the first — prostate is the printed first-listed bone tumor, and the sclerotic lesions confirm it.",
        },
        {
          label:
            "Primary bone tumor (osteosarcoma) — the multiple lesions are a primary bone malignancy with skip metastases; the prostate finding is benign prostatic hyperplasia",
          text: "Osteosarcoma with skip metastases; the prostate is BPH.",
          why:
            "Wrong primary entirely: osteosarcoma is a primary bone tumor (solitary in the metaphysis of a long bone in a young patient), not a metastasis pattern — and the printed rule is 'metastases often appear as MULTIPLE lesions (vs 1° tumors which generally appear as SOLITARY lesions)'. The multiple axial-skeleton lesions in a 69-year-old with an 87 ng/mL PSA and prostate adenocarcinoma biopsy are metastatic prostate cancer, not a primary bone tumor. The hard nodular prostate with adenocarcinoma on biopsy is not BPH (which would not elevate PSA to 87 or produce a hard nodular gland).",
        },
        {
          label:
            "Breast cancer bone metastasis — the prostate is incidental; the bone response is mixed (breast is the named mixed example); the PSA is unrelated",
          text: "Breast cancer with mixed bone metastases; the prostate is incidental.",
          why:
            "Wrong primary and wrong bone response: breast is the second-listed bone tumor (after prostate) and produces MIXED (not purely blastic) bone metastases — the sclerotic intense-uptake lesions here are purely blastic, fitting prostate (the named blastic example), not breast's mixed pattern. The 87 ng/mL PSA with a hard nodular prostate and adenocarcinoma on biopsy is the primary, not an incidental finding. And the patient is male — breast cancer in a 69-year-old man is possible but rare, and the prostate biopsy confirms the primary.",
        },
      ],
      reasoning:
        "The stem walks the bone row end to end. (1) THE ROUTE: prostate is a carcinoma (CLaSH lymphatic default for nodal spread) with bone metastasis via Batson's vertebral venous plexus (the valveless plexus delivering prostatic venous blood to the vertebral veins). (2) THE METASTATIC PATTERN: prostate is the first-listed bone tumor ('Prostate, breast >> lung > kidney, colon'), and the printed 'Predilection for axial skeleton' note fits the lumbar spine, sacrum, pelvis, and proximal femur. (3) THE BONE RESPONSE: prostate is a named blastic example ('Blastic (eg, prostate, small cell lung cancer)') — the sclerotic radiographs and intense bone-scan uptake confirm the osteoblastic response. (4) THE METASTASIS-VS-PRIMARY RULE: the multiple lesions fit the metastasis-over-primary heuristic, confirmed by the 87 ng/mL PSA and the prostate adenocarcinoma biopsy. The distractors fail at: CLaSH-exception (prostate is NOT one of the four hematogenous carcinomas), lung primary (lung bone metastases are lytic, not blastic), primary bone tumor (osteosarcoma is solitary in a long-bone metaphysis in a young patient, not multiple axial-skeleton lesions in a 69-year-old), and breast primary (breast is mixed, not purely blastic; and the prostate biopsy is the confirmed primary).",
    },
  },
  mnemonics: [
    {
      code: "CLaSH (source's own acronym — attributed)",
      meaning:
        "The route rule verbatim, attributed to the source: most Carcinomas spread via Lymphatics; most Sarcomas spread Hematogenously (CLaSH). The acronym is the source's own — this note attributes it and builds the four-exception list and the four-row site grid as KYP's framing on top of it.",
      memorizes: "The route default",
      whenToUse: "Any route-of-spread question — CLaSH names the default",
      clinical:
        "Carcinoma = lymphatics (nodes first); sarcoma = blood (lung/bone first) — the CLaSH default, with four named carcinoma exceptions.",
    },
    {
      code: "FOUR HEMATOGENOUS CARCINOMAS",
      meaning:
        "The four carcinomas that route hematogenously despite the CLaSH lymphatic default: Follicular thyroid carcinoma (angioinvasion), Choriocarcinoma (early blood-vessel invasion), Renal cell carcinoma (renal-vein invasion), Hepatocellular carcinoma (hepatic-vein invasion). Each has a vascular-biology signature — early blood-vessel invasion that hands tumor cells to the systemic circulation.",
      memorizes: "The four CLaSH exceptions",
      whenToUse: "Any carcinoma-with-hematogenous-spread question — name the four exceptions",
      clinical:
        "Follicular thyroid to bone, choriocarcinoma to lung/brain, renal cell to renal vein (and up the IVC), hepatocellular to hepatic vein — the four carcinomas that break the lymphatic default.",
    },
    {
      code: "BLASTIC, MIXED, LYTIC",
      meaning:
        "The bone metastasis response fork: BLASTIC (sclerotic, ↑ uptake on bone scan) = prostate, small cell lung cancer (the osteoblastic response dominates); MIXED = breast (both osteoblastic and osteoclastic); LYTIC (destructive, cold spots or ↓ uptake) = kidney, colon, non-small cell lung cancer (the osteoclastic response dominates).",
      memorizes: "The bone-response fork",
      whenToUse: "Any bone-metastasis imaging question — name the primary, then name the response",
      clinical:
        "Prostate or SCLC = blastic; breast = mixed; kidney, colon, or NSCLC = lytic — the primary tumor names the bone response.",
    },
    {
      code: "MULTIPLE METASTASES, LONE PRIMARY",
      meaning:
        "The metastasis-vs-primary imaging heuristic: in bone, liver, lung, and brain, METASTASES often appear as MULTIPLE lesions (vs 1° tumors which generally appear as SOLITARY lesions). And in these four organs, metastasis is more common than 1° malignancy — so multiple lesions are metastases until a primary is found.",
      memorizes: "The metastasis-vs-primary rule",
      whenToUse: "Any imaging question with multiple lesions in bone/liver/lung/brain",
      clinical:
        "Multiple lesions in these four organs = metastasis until proven otherwise; a solitary lesion could be primary — the multiple-vs-lone heuristic.",
    },
  ],
  rapidReview: {
    s30: [
      "CLaSH (source's own acronym): most Carcinomas spread via Lymphatics; most Sarcomas spread Hematogenously",
      "Four hematogenous carcinomas (the exceptions): follicular thyroid carcinoma, choriocarcinoma, renal cell carcinoma, hepatocellular carcinoma",
      "Metastasis to bone, liver, lung, and brain is more common than 1° malignancy in these organs; metastases often appear as MULTIPLE lesions (vs 1° tumors which generally appear as SOLITARY lesions)",
      "BONE: Prostate, breast >> lung > kidney, colon; predilection for axial skeleton; BLASTIC (prostate, SCLC) / MIXED (breast) / LYTIC (kidney, colon, NSCLC)",
      "LIVER: Colon > breast >> pancreas, lung, prostate; scattered throughout liver parenchyma",
      "LUNG: Colon, breast >> kidney, prostate; typically involve both lungs",
      "BRAIN: Lung > breast >> melanoma > colon, prostate; usually seen at gray-white matter junction",
      "TWO copyrighted photographs (described in text, never reproduced): A = bone axial-skeleton (188x245 gray jpeg), B = liver parenchyma (188x150 cmyk jpeg)",
    ],
    m3: [
      "CLaSH — Carcinomas-Lymphatics, Sarcomas-Hematogenous (the source's own acronym, attributed)",
      "FOUR HEMATOGENOUS CARCINOMAS — follicular thyroid, choriocarcinoma, renal cell, hepatocellular (the vascular-biology exceptions)",
      "BLASTIC, MIXED, LYTIC — prostate/SCLC blastic; breast mixed; kidney/colon/NSCLC lytic",
      "MULTIPLE METASTASES, LONE PRIMARY — multiple lesions in bone/liver/lung/brain = metastasis until proven otherwise",
      "Bone leads prostate+breast; liver leads colon (portal bed); lung leads colon+breast; brain leads lung+breast+melanoma",
    ],
    m10: [
      "The four hematogenous carcinomas share a vascular-biology signature: early blood-vessel invasion (follicular thyroid angioinvasion, choriocarcinoma early blood-vessel invasion, renal cell renal-vein invasion, hepatocellular hepatic-vein invasion)",
      "Prostate bone metastasis is via Batson's vertebral venous plexus (the valveless plexus connecting the prostatic venous plexus to the vertebral veins) — an anatomical route, not a CLaSH exception",
      "Colon leads liver metastasis via the portal-vein first-capillary-bed rule (P13's metastasis hallmark)",
      "Brain metastases deposit at the gray-white matter junction because the white matter's narrow capillaries trap the embolic tumor cells (hemodynamic deposit)",
      "The two copyrighted photographs (A = bone axial-skeleton, B = liver parenchyma) are described in text only, never reproduced (the M32 convention) — both lettered in the source beside their respective row notes",
    ],
  },
  recall: [
    {
      q: "The CLaSH rule and the four hematogenous carcinomas verbatim.",
      a: "Most Carcinomas spread via Lymphatics; most Sarcomas spread Hematogenously (CLaSH). However, four carcinomas route hematogenously: follicular thyroid carcinoma, choriocarcinoma, renal cell carcinoma, and hepatocellular carcinoma. [The CLaSH acronym is the source's own — attributed.]",
    },
    {
      q: "The metastasis-vs-primary rule verbatim.",
      a: "Metastasis to bone, liver, lung, and brain is more common than 1° malignancy in these organs. Metastases often appear as multiple lesions (vs 1° tumors which generally appear as solitary lesions).",
    },
    {
      q: "The Bone row verbatim — including the axial-skeleton note and the blastic/mixed/lytic fork.",
      a: "SITE: Bone. 10 TUMOR: Prostate, breast >> lung > kidney, colon. NOTES: Predilection for axial skeleton A. Bone metastasis can be: ▘ Blastic (eg, prostate, small cell lung cancer). ▘ Mixed (eg, breast). ▘ Lytic (eg, kidney, colon, non-small cell lung cancer). [Photograph A, described in text: a gray jpeg radiograph/photograph showing the axial skeleton's predilection for bone metastasis — copyrighted, never reproduced.]",
    },
    {
      q: "The Liver, Lung, and Brain rows verbatim.",
      a: "LIVER: 10 TUMOR: Colon > breast >> pancreas, lung, prostate. NOTES: Scattered throughout liver parenchyma B. [Photograph B, described in text: a cmyk jpeg showing metastatic deposits scattered throughout the liver parenchyma — copyrighted, never reproduced.] LUNG: 10 TUMOR: Colon, breast >> kidney, prostate. NOTES: Typically involve both lungs. BRAIN: 10 TUMOR: Lung > breast >> melanoma > colon, prostate. NOTES: Usually seen at gray-white matter junction.",
    },
    {
      q: "The two copyrighted photographs on the page — described in text.",
      a: "Photograph A (image 0, 188x245 gray jpeg at 150 dpi): the bone metastasis axial-skeleton image, lettered A beside the Bone row's 'Predilection for axial skeleton A' note — showing the axial skeleton's predilection for bone metastasis. COPYRIGHTED — described in text, never reproduced. Photograph B (image 1, 188x150 cmyk jpeg at 150 dpi): the liver parenchyma image, lettered B beside the Liver row's 'Scattered throughout liver parenchyma B' note — showing metastatic deposits scattered throughout the liver parenchyma. COPYRIGHTED — described in text, never reproduced. Both follow the M32 convention.",
    },
  ],
  related: [
    {
      title: "Hallmarks of Cancer",
      topicId: "cancer-hallmarks",
      note: "This page is the tropism-and-route application of hallmark 9 (metastasis): the CLaSH rule and the four exceptions are the route half of the metastasis cascade (lymphatics or blood → adhesion → extravasation → homing), and the 4-row site grid is the tropism half — the organ-specific destinations the cascade produces. The first-capillary-bed rule (P13's hallmark 9) explains colon-to-liver (portal bed) and lung-to-brain (systemic arterial bed).",
    },
    {
      title: "Neoplasia Nomenclature & Progression",
      topicId: "neoplasia-nomenclature",
      note: "The CLaSH rule's carcinoma-vs-sarcoma split is the nomenclature page's epithelial-vs-mesenchymal distinction (carcinoma = epithelial, sarcoma = mesenchymal) applied to route of spread — the tissue of origin names the route. The four hematogenous carcinomas are the named exceptions where a carcinoma breaks the lymphatic default.",
    },
    {
      title: "Cancer Immunotherapy & Epidemiology",
      topicId: "cancer-immunotherapy-epidemiology",
      note: "The epidemiology page's incidence and mortality lists name the tumors that appear in this page's site-of-metastasis table: prostate and breast (the bone leaders), lung (the brain leader and mortality leader), colon (the liver leader). The metastasis patterns explain the mortality rankings — lung's efficient metastasis to brain and bone drives its mortality leadership despite its incidence rank.",
    },
    {
      title: "Tissue Injury, Infarcts & Free Radicals",
      topicId: "tissue-injury-infarcts",
      note: "The bone metastasis blastic/mixed/lytic fork parallels the infarct-type page's white-vs-red infarct fork — both describe organ-specific responses to injury. Bone's blastic response (osteoblastic) and lytic response (osteoclastic) are the two opposite bone-resorption patterns, just as white infarcts (solid organs) and red infarcts (lung/spongy tissues) are the two opposite infarct morphologies.",
    },
  ],
  crossLinks: [
    {
      subject: "Anatomy (Batson's vertebral venous plexus)",
      connection:
        "Prostate cancer's axial-skeleton bone metastasis is the anatomical application of Batson's vertebral venous plexus — the valveless plexus connecting the prostatic venous plexus to the vertebral veins, allowing retrograde hematogenous spread to the axial skeleton without passing through the lungs. The CLaSH default (prostate is a carcinoma = lymphatic) is bypassed by this anatomical route.",
    },
    {
      subject: "Pathology (the four hematogenous carcinomas)",
      connection:
        "The four hematogenous carcinomas (follicular thyroid, choriocarcinoma, renal cell, hepatocellular) each have a vascular-biology signature: follicular thyroid's angioinvasion (capsular and vascular invasion distinguishing it from papillary), choriocarcinoma's early blood-vessel invasion (the trophoblastic tumor's vascular tropism), renal cell's renal-vein invasion (the direct extension up the IVC), hepatocellular's hepatic-vein invasion (the vascular invasion pattern). The vascular invasion is the metastasis hallmark's gate.",
    },
    {
      subject: "Radiology (bone scan and blastic/mixed/lytic patterns)",
      connection:
        "The bone blastic/mixed/lytic fork is the radiology page's bone-metastasis imaging frame: blastic lesions show intense uptake on bone scan (osteoblastic response) and sclerosis on plain film; lytic lesions show cold spots or normal uptake initially (osteoclastic response) with destructive radiolucency later. Breast's mixed pattern shows both. The primary tumor names the expected imaging pattern.",
    },
    {
      subject: "Neurology (brain metastasis at the gray-white junction)",
      connection:
        "The brain metastasis gray-white-matter-junction deposition is the neurology page's hemodynamic deposit rule — the white matter's narrow capillaries trap embolic tumor cells (and septic emboli in endocarditis) at the interface between the gray matter's generous capillary bed and the white matter's sparse one. The junction is both the imaging landmark and the pathophysiological deposit site.",
    },
  ],
};
