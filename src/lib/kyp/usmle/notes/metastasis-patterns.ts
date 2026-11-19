import type { KypUsMLENote } from "../types";

// Pathology — NEOPLASIA (P-batch 15). Source: pdf 241 / book 219
// (Common metastases — the CLaSH route rule [Most Carcinomas spread
// via Lymphatics; most Sarcomas spread Hematogenously] with the four
// carcinomas that route hematogenously [follicular thyroid carcinoma,
// choriocarcinoma, renal cell carcinoma, hepatocellular carcinoma];
// the frequency rule [metastasis to bone, liver, lung, and brain is
// more common than 1° malignancy in these organs]; the multiple-vs-
// solitary rule; and the 4-row SITe Of MeTASTASIS table [Bone/Liver/
// Lung/Brain × 1° TUMOR/NOTeS — the text layer prints the column
// header as "10 TUMOR", a mangled degree sign] with the Bone row's
// Blastic/Mixed/Lytic fork). Census (pdfimages + VLM): TWO
// copyrighted photographs — A (the 188x245 8bpc raster beside the
// Bone row: a sagittal MR image of the spine showing the axial
// skeleton — a grayscale vertebral column with bright fatty marrow,
// red arrows pointing to metastatic lesions at the labeled vertebral
// levels T8 and L1, the boxed letter A at the image's top-left) and
// B (the 188x150 8bpc raster beside the Liver row: a gross liver
// specimen — the cut surface of two liver halves on a teal
// background, dark reddish-brown parenchyma with large pale
// yellow-white/cream nodular metastatic masses with central necrotic
// discoloration, one large mass in each half, a white asterisk
// photographer credit at bottom-right, the boxed letter B at the
// image's top-left) — BOTH described-in-text only, NEVER reproduced
// (the M32 convention). The source's own mnemonic (CLaSH) is quoted
// verbatim in the tables and is NOT one of KYP's four; NO margin
// notes or mnemonics print on the page (VLM confirmed).

export const metastasisPatterns: KypUsMLENote = {
  id: "metastasis-patterns",
  title: "Metastasis: Organ Patterns & Routes",
  subtitle:
    "Where tumors go when they leave home (book 219) — THE ROUTE RULE: Most Carcinomas spread via Lymphatics; most Sarcomas spread Hematogenously (CLaSH), with four carcinomas that ride the blood anyway — follicular thyroid carcinoma, choriocarcinoma, renal cell carcinoma, hepatocellular carcinoma. THE FREQUENCY RULE: metastasis to bone, liver, lung, and brain is more common than 1° malignancy in these organs. THE LESION-NUMBER RULE: metastases often appear as multiple lesions (vs 1° tumors, which generally appear as solitary lesions). THE SITE-OF-METASTASIS TABLE — BONE (Prostate, breast >> lung > kidney, colon; predilection for the axial skeleton; Blastic from prostate and small cell lung cancer, Mixed from breast, Lytic from kidney, colon, and non-small cell lung cancer) · LIVER (Colon > breast >> pancreas, lung, prostate; scattered throughout the liver parenchyma) · LUNG (Colon, breast >> kidney, prostate; typically involve both lungs) · BRAIN (Lung > breast >> melanoma > colon, prostate; usually seen at the gray-white matter junction).",
  subject: "Pathology",
  system: "Section II · High-Yield General Principles — Pathology: Neoplasia",
  pilotCategory:
    "The complete metastasis routing layer — the CLaSH lymphatic/hematogenous split with the four hematogenous-exception carcinomas, the frequency and multiple-vs-solitary rules, and the full four-organ site-of-metastasis table (Bone with its blastic/mixed/lytic fork, Liver with the scattered-parenchyma pattern, Lung with the both-lungs rule, Brain with the gray-white-junction rule), plus the two lettered photographs described in text.",
  difficulty: 2,
  readTime: 7,
  sourceRef:
    "First Aid 2026, Part 1 pp. 219–219 (Pathology — Neoplasia: Common metastases [the CLaSH route rule with the four hematogenous carcinomas, the frequency rule, and the multiple-vs-solitary rule; the SITe Of MeTASTASIS table — Bone, Liver, Lung, Brain — with the blastic/mixed/lytic bone fork; the two lettered photographs, described in text])",
  tags: [
    "metastasis",
    "common metastases",
    "metastatic patterns",
    "CLaSH",
    "carcinoma",
    "sarcoma",
    "lymphatic spread",
    "hematogenous spread",
    "hematogenous routing",
    "follicular thyroid carcinoma",
    "choriocarcinoma",
    "renal cell carcinoma",
    "hepatocellular carcinoma",
    "bone metastasis",
    "axial skeleton",
    "blastic lesions",
    "lytic lesions",
    "mixed lesions",
    "prostate cancer",
    "breast cancer",
    "small cell lung cancer",
    "non-small cell lung cancer",
    "kidney cancer",
    "colon cancer",
    "liver metastasis",
    "portal vein",
    "liver parenchyma",
    "lung metastasis",
    "brain metastasis",
    "gray-white matter junction",
    "melanoma",
    "pancreatic cancer",
    "multiple lesions",
    "solitary lesion",
    "primary tumor",
    "seed and soil",
    "first capillary bed",
    "sentinel lymph node",
    "tumor staging",
  ],
  core: {
    what: "COMMON METASTASES — THE ROUTE RULE: Most Carcinomas spread via Lymphatics; most Sarcomas spread Hematogenously (CLaSH). However, four carcinomas route hematogenously: follicular thyroid carcinoma, choriocarcinoma, renal cell carcinoma, and hepatocellular carcinoma. THE FREQUENCY RULE: Metastasis to bone, liver, lung, and brain is more common than 1° malignancy in these organs. THE LESION-NUMBER RULE: Metastases often appear as multiple lesions (vs 1° tumors which generally appear as solitary lesions). THE SITE-OF-METASTASIS TABLE — BONE: 1° tumors Prostate, breast >> lung > kidney, colon; predilection for the axial skeleton; bone metastasis can be Blastic (eg, prostate, small cell lung cancer), Mixed (eg, breast), or Lytic (eg, kidney, colon, non-small cell lung cancer). LIVER: Colon > breast >> pancreas, lung, prostate; scattered throughout liver parenchyma. LUNG: Colon, breast >> kidney, prostate; typically involve both lungs. BRAIN: Lung > breast >> melanoma > colon, prostate; usually seen at the gray-white matter junction.",
    why: "This single page is the traffic map of late-stage cancer, and it earns its yield by answering three questions in order. FIRST — WHICH LANE? Epithelial tumors (carcinomas) default to the lymphatics: they drain to their regional nodes first, which is why nodal status is a staging checkpoint for carcinomas; mesenchymal tumors (sarcomas) default to the blood, invading vessels early and skipping the node line. The page then names the four carcinomas that break the default — follicular thyroid carcinoma, choriocarcinoma, renal cell carcinoma, and hepatocellular carcinoma — tumors that ride the bloodstream as their characteristic early route (the renal mass that goes to the lung, the molar pregnancy that goes to the lung, the thyroid nodule that goes to bone, the liver tumor that seeds via the hepatic veins). SECOND — WHY THESE FOUR ORGANS? Because the bloodstream delivers seeds to the first capillary bed downstream (colon via the portal vein to the liver — which is exactly why colon tops the liver list; the liver via the hepatic veins and IVC to the lungs; the lung via the systemic arteries to the brain and bone) and because the red-marrow-rich axial skeleton is fertile soil — the printed 'predilection for axial skeleton.' The two rules follow: metastasis to bone, liver, lung, and brain OUTNUMBERS 1° malignancy in those organs, so a tumor found there is statistically a metastasis until proven otherwise. THIRD — WHAT DOES IT LOOK LIKE? Metastases arrive as multiple lesions (a shower of seeds) against the solitary mass of a 1° tumor, and bone answers in three radiographic voices — Blastic (built up: prostate, small cell lung cancer), Mixed (breast), Lytic (punched out: kidney, colon, non-small cell lung cancer) — while brain metastases mark their address precisely: the gray-white matter junction, where the vessels narrow and the seeds lodge.",
    keyIdea:
      "Read every metastasis question through four frames. FRAME 1 — THE LANE (CLaSH): carcinoma → lymphatics (nodes first, nodal staging); sarcoma → blood; and the four blood-riding carcinomas — Follicular thyroid, Choriocarcinoma, Renal cell, Hepatocellular — that route hematogenously anyway. FRAME 2 — THE LISTS: Bone = Prostate, breast >> lung > kidney, colon; Liver = Colon > breast >> pancreas, lung, prostate; Lung = Colon, breast >> kidney, prostate (both lungs); Brain = Lung > breast >> melanoma > colon, prostate (gray-white junction). FRAME 3 — THE BONE FORK: Blastic builds (prostate, small cell lung cancer) · Mixed (breast) · Lytic carves (kidney, colon, non-small cell lung cancer) — all preferring the axial skeleton. FRAME 4 — THE COUNTERS: mets to bone/liver/lung/brain outnumber 1° malignancies there, and METASTASES = MULTIPLE lesions vs the SOLITARY 1° tumor — count the spots before you name the tumor.",
  },
  mechanisms: [
    {
      id: "clash-route-map",
      title: "The CLaSH route split: carcinomas take the lymphatics, sarcomas take the blood — and the four carcinomas that ride the bloodstream anyway",
      context: "The route paragraph (book 219)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A primary tumor sheds its first cells",
            sublabel: "Input — the first question is tissue origin: carcinoma (epithelial) or sarcoma (mesenchymal)? The answer sets the default escape route.",
            variant: "input",
          },
          {
            id: "lymphatic",
            label: "THE CARCINOMA DEFAULT → LYMPHATICS",
            sublabel: "Most Carcinomas spread via Lymphatics (CLaSH): the regional draining nodes catch the first cells — the sentinel node first, then distant stations — which is why nodal status stages carcinomas.",
            variant: "process",
          },
          {
            id: "blood",
            label: "THE SARCOMA DEFAULT → BLOOD",
            sublabel: "most Sarcomas spread Hematogenously (CLaSH): mesenchymal tumors invade vessels early and skip the node line — a sarcoma with negative nodes and distant disease is the rule, not the exception.",
            variant: "process",
          },
          {
            id: "exceptions",
            label: "THE FOUR BLOOD-RIDING CARCINOMAS",
            sublabel: "Follicular thyroid carcinoma, choriocarcinoma, renal cell carcinoma, and hepatocellular carcinoma route hematogenously — the four carcinomas that behave like sarcomas on the highway, spreading early through the blood.",
            variant: "process",
          },
          {
            id: "output",
            label: "Why the organ table exists",
            sublabel: "Output — blood-borne seeds lodge in the first capillary bed and the fertile soils, so metastasis to bone, liver, lung, and brain is more common than 1° malignancy in these organs, and metastases often appear as multiple lesions (vs 1° tumors which generally appear as solitary lesions).",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "lymphatic", label: "carcinoma" },
          { from: "trigger", to: "blood", label: "sarcoma" },
          { from: "lymphatic", to: "exceptions", label: "four break the default" },
          { from: "exceptions", to: "output", label: "early blood-borne spread" },
          { from: "blood", to: "output", label: "first capillary bed" },
        ],
      },
    },
    {
      id: "soil-seed-map",
      title: "The seed's first capillary bed: how the bloodstream routes the organ table — and the bone's three answers",
      context: "The 4-row site-of-metastasis table (book 219); the first-capillary-bed synthesis is KYP's routing layer",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Tumor cells enter the venous system",
            sublabel: "Input — the seed is loose in the blood; where it lodges is anatomy (the first capillary bed downstream) plus fertility (the soil).",
            variant: "input",
          },
          {
            id: "firstbed",
            label: "THE FIRST CAPILLARY BED RULES THE RANKS",
            sublabel: "Colon drains via the portal vein → the liver is its first bed (Colon tops the liver list); the liver drains via the hepatic veins → IVC → right heart → the lungs (typically both); the lung drains into the systemic arterial tree → brain, bone, and everywhere else.",
            variant: "process",
          },
          {
            id: "axial",
            label: "THE BONE PREFERS THE AXIAL SKELETON",
            sublabel: "The red-marrow-rich axial skeleton — spine, pelvis, ribs, skull — is the fertile soil; Prostate and breast dominate the bone list (Prostate, breast >> lung > kidney, colon).",
            variant: "process",
          },
          {
            id: "fork",
            label: "THE BONE'S THREE RADIOGRAPHIC ANSWERS",
            sublabel: "BLASTIC — builds bone (eg, prostate, small cell lung cancer); MIXED (eg, breast); LYTIC — punches out (eg, kidney, colon, non-small cell lung cancer).",
            variant: "process",
          },
          {
            id: "output",
            label: "Read each organ by rank, then count the lesions",
            sublabel: "Output — Bone: Prostate, breast >> lung > kidney, colon (axial skeleton); Liver: Colon > breast >> pancreas, lung, prostate (scattered throughout the parenchyma); Lung: Colon, breast >> kidney, prostate (both lungs); Brain: Lung > breast >> melanoma > colon, prostate (gray-white matter junction) — and multiple lesions point to metastasis, solitary to 1°.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "firstbed", label: "anatomic routing" },
          { from: "firstbed", to: "axial", label: "the soil decides" },
          { from: "axial", to: "fork", label: "the bone responds" },
          { from: "fork", to: "output", label: "rank + lesion count" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "metastasis-route-map",
      title: "The metastasis route map (an original KYP adaptation)",
      caption:
        "An original KYP adaptation of the source page (book 219): the route split (the primary-tumor glyph dividing into the CARCINOMA→LYMPHATICS lane with its regional-node glyph and the SARCOMA→BLOOD lane, the four blood-riding carcinomas flagged onto the blood lane, and the first-capillary-bed logic); the four organ target cards (Bone with its blastic/mixed/lytic fork, Liver with the scattered-parenchyma pattern, Lung with the both-lungs rule, Brain with the gray-white-junction rule — each with its verbatim tumor ranking); the photographs-described panel (lettered A and B, text-only); and the multiple-vs-solitary discriminator strip.",
      notice:
        "Census (pdfimages + VLM): TWO copyrighted photographs on this page — A (the 188x245 raster beside the Bone row: a sagittal MR image of the spine showing the axial skeleton, with red arrows on metastatic lesions at the labeled vertebral levels T8 and L1, the boxed letter A at its top-left) and B (the 188x150 raster beside the Liver row: a gross liver specimen — the cut surface of two liver halves with large pale yellow-white nodular metastatic masses with central necrotic discoloration in the dark reddish-brown parenchyma, the boxed letter B at its top-left). BOTH described in text in this note's photographs block and in the registry visual, NEVER reproduced (the M32 convention). The text layer prints the table's second column header as “10 TUMOR” — a mangled 1° degree sign; the table is carried verbatim in the note. CLaSH is the source's own mnemonic (quoted verbatim); the four KYP mnemonics are original, and NO margin mnemonics print on the page (VLM census confirmed).",
    },
    {
      kind: "table",
      title: "Book 219 — the route rules (carried verbatim)",
      intro: "The paragraph above the table, as printed — the route default, its four exceptions, and the two counting rules.",
      columns: ["RULE", "VERBATIM — book 219"],
      rows: [
        [
          "THE CLaSH RULE",
          "Most Carcinomas spread via Lymphatics; most Sarcomas spread Hematogenously (CLaSH). [The source's own mnemonic, quoted verbatim — not a KYP code.]",
        ],
        [
          "THE FOUR HEMATOGENOUS CARCINOMAS",
          "However, four carcinomas route hematogenously: follicular thyroid carcinoma, choriocarcinoma, renal cell carcinoma, and hepatocellular carcinoma.",
        ],
        [
          "THE FREQUENCY RULE",
          "Metastasis to bone, liver, lung, and brain is more common than 1° malignancy in these organs.",
        ],
        [
          "THE LESION-NUMBER RULE",
          "Metastases often appear as multiple lesions (vs 1° tumors which generally appear as solitary lesions).",
        ],
      ],
      caption:
        "One paragraph, four exam rules: the tissue of origin picks the lane, four carcinomas defect to the blood, the four target organs are metastasis-dominated, and the lesion count is the first discriminator between a metastasis and a primary.",
    },
    {
      kind: "table",
      title: "Book 219 — the SITe Of MeTASTASIS table (carried verbatim)",
      intro:
        "The 4-row organ table, as printed. (The text layer renders the second column's header as “10 TUMOR” — a mangled 1° degree sign; it prints as 1° TUMOR on the page.)",
      columns: ["SITe Of MeTASTASIS", "1° TUMOR (printed “10 TUMOR” in the text layer)", "NOTeS"],
      rows: [
        [
          "Bone",
          "Prostate, breast >> lung > kidney, colon",
          "Predilection for axial skeleton A. Bone metastasis can be: ▘ Blastic (eg, prostate, small cell lung cancer) ▘ Mixed (eg, breast) ▘ Lytic (eg, kidney, colon, non-small cell lung cancer). [Photograph A, described in text: a sagittal MR image of the spine — the axial skeleton with red arrows on metastatic lesions at the labeled vertebral levels T8 and L1.]",
        ],
        [
          "Liver",
          "Colon > breast >> pancreas, lung, prostate",
          "Scattered throughout liver parenchyma B. [Photograph B, described in text: a gross liver specimen — the cut surface of two liver halves with large pale yellow-white nodular metastatic masses with central necrosis, scattered in the dark reddish-brown parenchyma.]",
        ],
        [
          "Lung",
          "Colon, breast >> kidney, prostate",
          "Typically involve both lungs.",
        ],
        [
          "Brain",
          "Lung > breast >> melanoma > colon, prostate",
          "Usually seen at gray-white matter junction.",
        ],
      ],
      caption:
        "Read each row as rank order with a signature address: the bone list is prostate-and-breast-led and axial-skeleton-bound with three radiographic answers; the liver list is colon-led (the portal vein) and scattered through the parenchyma; the lung list is colon-and-breast-led and bilateral; the brain list is lung-led and junction-bound at the gray-white matter border.",
    },
    {
      kind: "table",
      title: "The two lettered photographs (described in text — copyrighted, never reproduced)",
      intro: "The M32 convention: the page's two raster photographs are documented, not redrawn.",
      columns: ["PHOTOGRAPH", "CENSUS DESCRIPTION (pdfimages + VLM, book 219)"],
      rows: [
        [
          "A — beside the Bone row (188×245, 8bpc)",
          "A sagittal MR image of the spine showing the axial skeleton: a grayscale vertebral column with bright fatty marrow and dark CSF/vertebral bodies; red arrows point to metastatic lesions at the labeled vertebral levels T8 and L1 (white labels with red arrows); the white boxed letter A sits at the image's top-left. Printed beside “Predilection for axial skeleton A” — the bone row's note. COPYRIGHTED — described in text, never reproduced.",
        ],
        [
          "B — beside the Liver row (188×150, 8bpc)",
          "A gross specimen photograph: the cut surface of two liver halves on a teal/blue-green background; the dark reddish-brown liver parenchyma contains large, pale yellow-white/cream, somewhat nodular metastatic masses with central discoloration (necrosis), one large mass in each half; a small white asterisk (photographer credit) at bottom-right; the white boxed letter B sits at the image's top-left. Printed beside “Scattered throughout liver parenchyma B” — the liver row's note. COPYRIGHTED — described in text, never reproduced.",
        ],
      ],
      caption:
        "The two photographs anchor the table's two illustrated rows: A marks the axial-skeleton predilection of bone metastasis (lesions pointed out in the thoracic and lumbar spine), and B marks the scattered-throughout-the-parenchyma pattern of liver metastasis (pale nodular masses replacing dark parenchyma).",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 72-year-old man with prostate cancer (PSA markedly elevated) presents with new thoracic spine pain; radiographs show dense sclerotic vertebral bodies throughout the axial skeleton.",
        discriminator: "Blastic bone metastasis from prostate cancer — the axial-skeleton predilection with the built-up (sclerotic) bone response",
        concept: "The bone fork — Blastic",
        answer:
          "Prostate is the printed leader of the bone list (Prostate, breast >> lung > kidney, colon), bone metastasis carries the predilection for the axial skeleton, and prostate is the exemplar of the BLASTIC response — woven new bone laid down around the seeded tumor (small cell lung cancer is the other named blastic source). Dense sclerotic vertebrae in an older man with a rising PSA is the classic presentation.",
      },
      {
        stem: "A 61-year-old man with a 45-pack-year history and a known lung mass presents with a new focal seizure; brain MRI shows three ring-enhancing lesions at the gray-white matter junction.",
        discriminator: "Brain metastasis from lung cancer — multiple lesions at the gray-white junction, lung at the top of the brain list",
        concept: "The brain row + the multiple-lesion rule",
        answer:
          "The Brain row prints Lung > breast >> melanoma > colon, prostate, and its address is the gray-white matter junction — where arterioles narrow and blood-borne seeds lodge. The lesion count seals it: metastases often appear as multiple lesions (vs 1° tumors which generally appear as solitary lesions), and lung (which drains into the systemic arterial tree) is the #1 source.",
      },
      {
        stem: "A 67-year-old man with fatigue, weight loss, and guaiac-positive stool undergoes abdominal CT, which shows innumerable lesions scattered throughout the liver parenchyma.",
        discriminator: "Metastatic colon adenocarcinoma to the liver via the portal vein — colon tops the liver list, and multiple scattered lesions mean metastasis",
        concept: "The liver row + the frequency rule",
        answer:
          "The Liver row prints Colon > breast >> pancreas, lung, prostate with the pattern “scattered throughout liver parenchyma” — colon leads because its venous drainage (the portal vein) makes the liver its first capillary bed. Metastasis to the liver is more common than 1° malignancy there, and the shower of lesions marks them as metastases rather than a solitary 1° tumor.",
      },
      {
        stem: "A 29-year-old woman with a recent molar pregnancy and a persistently rising hCG develops hemoptysis; chest radiograph shows multiple bilateral cavitary lesions.",
        discriminator: "Choriocarcinoma — one of the four carcinomas that route hematogenously, seeding the lungs early",
        concept: "The four blood-riding carcinomas",
        answer:
          "Choriocarcinoma is one of the four printed exceptions to the carcinoma-lymphatic default (with follicular thyroid carcinoma, renal cell carcinoma, and hepatocellular carcinoma): it invades vessels and spreads hematogenously early — hence lung (and brain) lesions from a trophoblastic tumor with a rising hCG. The CLaSH default is “most,” not “all.”",
      },
      {
        stem: "A 58-year-old woman treated for breast cancer presents with pelvic and rib pain; bone scan shows both lucent and sclerotic lesions in the ribs, spine, and pelvis.",
        discriminator: "Mixed blastic-lytic bone metastasis from breast cancer — the mixed response, second-ranked source, axial skeleton",
        concept: "The bone fork — Mixed",
        answer:
          "Breast sits second on the bone list (Prostate, breast >> lung > kidney, colon) and is the named MIXED bone response — lysis and blastic reaction in the same scan, scattered through the ribs, spine, and pelvis (the axial skeleton predilection). Kidney and colon are the pure lytic sources; non-small cell lung cancer is lytic, small cell blastic.",
      },
    ],
    traps: [
      {
        a: "Carcinoma route (lymphatics)",
        b: "Sarcoma route (blood)",
        whyConfused: "Both are spread routes asked about the same way in one-liners",
        keyDifference: "CLaSH: Most Carcinomas spread via Lymphatics (nodes first — nodal staging matters); most Sarcomas spread Hematogenously (vessels early, nodes typically spared)",
        clue: "Epithelial origin, positive nodes, staged by nodal status → carcinoma/lymphatic; mesenchymal (eg, osteosarcoma, leiomyosarcoma), early lung deposits with negative nodes → sarcoma/blood",
      },
      {
        a: "The four hematogenous carcinomas",
        b: "The carcinoma lymphatic default",
        whyConfused: "Both statements are about carcinomas spreading",
        keyDifference: "The default is “most” — follicular thyroid carcinoma, choriocarcinoma, renal cell carcinoma, and hepatocellular carcinoma are the four named carcinomas that route hematogenously anyway",
        clue: "A carcinoma presenting with early distant blood-borne deposits (lung from a renal mass, lung from a molar pregnancy, bone from a thyroid nodule, lung from a liver tumor) → one of the four exceptions",
      },
      {
        a: "Blastic bone metastasis",
        b: "Lytic bone metastasis",
        whyConfused: "Both are bone metastasis responses on imaging",
        keyDifference: "BLASTIC builds bone (prostate, small cell lung cancer); MIXED (breast); LYTIC punches out (kidney, colon, non-small cell lung cancer)",
        clue: "Dense sclerotic vertebrae in an older man → prostate (blastic); punched-out lucent lesions → kidney/colon/NSCLC; both in one scan → breast (mixed)",
      },
      {
        a: "Metastasis as multiple lesions",
        b: "1° tumor as a solitary lesion",
        whyConfused: "Both present as mass lesions in the same organs",
        keyDifference: "Metastases often appear as MULTIPLE lesions; 1° tumors generally appear as SOLITARY lesions — and metastasis to bone, liver, lung, and brain is more common than 1° malignancy in these organs",
        clue: "Count the spots before naming the tumor: many lesions in bone/liver/lung/brain → search for the primary; one lesion → the primary may be right there",
      },
      {
        a: "The liver list (Colon #1)",
        b: "The brain list (Lung #1)",
        whyConfused: "Both lists lead with the GI-tract-adjacent or chest primaries and both include breast, colon, and prostate",
        keyDifference: "Liver: Colon > breast >> pancreas, lung, prostate (the portal vein puts colon first); Brain: Lung > breast >> melanoma > colon, prostate (the systemic arteries put lung first)",
        clue: "Follow the blood: gut drains to the portal vein → colon owns the liver; the lung drains to the systemic tree → lung owns the brain",
      },
    ],
    pivots: [
      {
        lookAlike: "A ring-enhancing lesion at the gray-white matter junction — primary brain tumor or metastasis?",
        differentiator: "Count the lesions and check the lung: metastases are often multiple, favor the gray-white junction, and lung is the #1 source (Lung > breast >> melanoma > colon, prostate)",
        correctPath: "Multiple junctional lesions in an adult → metastatic workup with chest imaging first; a solitary junctional lesion still warrants the search, since 1° brain tumors generally present as solitary lesions",
      },
      {
        lookAlike: "A suspicious bone lesion on imaging — where is the primary?",
        differentiator: "The radiographic answer narrows the source: blastic → prostate or small cell lung cancer; mixed → breast; lytic → kidney, colon, or non-small cell lung cancer; the ranking (Prostate, breast >> lung > kidney, colon) sets prior probabilities",
        correctPath: "Sclerotic axial-skeleton lesions in an older man → PSA; mixed lesions in a woman → mammogram; lytic lesions → renal mass evaluation and colonoscopy",
      },
      {
        lookAlike: "Multiple liver lesions — metastasis or multifocal primary?",
        differentiator: "Metastases are multiple and scattered throughout the parenchyma, more common than 1° malignancy in the liver, and colon tops the list (Colon > breast >> pancreas, lung, prostate)",
        correctPath: "Multiple scattered hepatic lesions → metastatic search starting with the colon (guaiac/colonoscopy — the portal route); a solitary liver mass in a cirrhotic patient is the 1°-favoring exception (hepatocellular carcinoma)",
      },
    ],
    miniCase: {
      vignette:
        "A 68-year-old man presents with 3 months of fatigue, a 12-lb weight loss, and intermittent dark stools. He has no prior liver disease and drinks alcohol rarely. Labs show microcytic anemia (hemoglobin 9.1 g/dL) and normal liver enzymes except a mildly elevated alkaline phosphatase. Colonoscopy reveals an ulcerated, obstructing mass in the sigmoid; biopsy shows a moderately differentiated adenocarcinoma. Contrast CT of the abdomen shows numerous lesions of varying size scattered throughout the liver parenchyma in both lobes; the largest measures 4 cm. Chest CT shows no pulmonary lesions, and a bone scan shows no bony uptake. Serum PSA, AFP, and hCG are all within normal limits.",
      question:
        "Explain the route by which the liver lesions arose, why their number and distribution argue for metastasis over a primary liver tumor, and name the ranked list of 1° tumors that most commonly metastasize to the liver.",
      options: [
        {
          label: "Hematogenous spread via the portal vein from the sigmoid adenocarcinoma; the numerous scattered bilateral lesions mark them as metastases (multiple lesions vs the generally solitary 1° tumor); the liver list is Colon > breast >> pancreas, lung, prostate, so colon is the most common 1° source",
          text: "Portal blood from the tumor bed, a shower of seeds, and colon at the top of the list.",
          correct: true,
          why: "Correct on all three layers. (1) THE ROUTE: the sigmoid drains via the inferior mesenteric vein → portal vein → liver, so the liver is colon cancer's first capillary bed — the mechanical reason colon leads the liver list. (2) THE PATTERN: the printed note for the Liver row is “scattered throughout liver parenchyma,” and the counting rule is verbatim — metastases often appear as multiple lesions (vs 1° tumors which generally appear as solitary lesions); numerous bilateral lesions of varying size are that shower. (3) THE LIST: Colon > breast >> pancreas, lung, prostate, and the frequency rule — metastasis to the liver is more common than 1° malignancy in the liver. Normal AFP, no cirrhosis, and the known colon primary complete the argument.",
        },
        {
          label: "A multifocal primary hepatocellular carcinoma arising de novo in both lobes, with the colon tumor an incidental second primary",
          text: "Two cancers, one liver — the masses are primary.",
          why: "Wrong count and wrong organ logic: hepatocellular carcinoma generally arises in a diseased (cirrhotic, viral, fatty) liver and is one of the four carcinomas that route hematogenously OUTWARD (to the lung), not the top recipient of colon seedings; nothing in the stem supplies cirrhosis or risk factors, the AFP is normal, and the printed rule is that metastasis to the liver is MORE COMMON than 1° malignancy there. Multiple lesions of varying size favor metastasis; the colon mass is not incidental — it is the source.",
        },
        {
          label: "Lymphatic spread from the carcinoma to the mesenteric nodes and then into the liver, because carcinomas spread via lymphatics (CLaSH)",
          text: "CLaSH says carcinomas take the lymphatics — so the liver lesions came through the nodes.",
          why: "Misapplied rule: CLaSH states that most carcinomas SPREAD via lymphatics as their characteristic initial route (to regional nodes — the staging question), but the liver deposits here are hematogenous — tumor cells entering the portal venous system and lodging in the first capillary bed. The CLaSH default governs the initial escape route; it does not forbid the portal-vein seeding that puts colon at the top of the liver list. Mesenteric adenopathy may coexist, but it is not the highway to the liver parenchyma.",
        },
        {
          label: "Metastatic prostate cancer with blastic bone disease misidentified as liver lesions; the bone scan was falsely negative and PSA unreliable",
          text: "The classic older-man metastasis — prostate explains everything.",
          why: "Wrong primary and wrong organ pattern: prostate metastasizes to BONE (it leads the bone list — Prostate, breast >> lung > kidney, colon — with a predilection for the axial skeleton and a BLASTIC response), not to the top of the liver list (pancreas, lung, and prostate trail far behind colon and breast there). The PSA is normal, the guaiac-positive stool and sigmoid mass identify the source, and the bone scan shows no uptake — against a blastic prostate story.",
        },
        {
          label: "Choriocarcinoma metastasizing hematogenously to the liver, as one of the four carcinomas that route via the blood",
          text: "A blood-riding carcinoma fits the scattered liver lesions.",
          why: "Right concept, wrong tumor: choriocarcinoma IS one of the four carcinomas that route hematogenously (with follicular thyroid, renal cell, and hepatocellular carcinoma), but the stem's hCG is normal, the demographics and guaiac-positive stool point to the colon, and choriocarcinoma's characteristic targets are lung and brain via the systemic veins — not the top of the liver list. The four-exception rule is for the tumor's own early route, not for this patient's liver deposits.",
        },
      ],
      reasoning:
        "The case walks the page's four frames. (1) THE SOURCE: the sigmoid adenocarcinoma on biopsy — no imaging inference needed. (2) THE ROUTE: the portal vein carries the tumor's venous drainage to the liver, the first capillary bed; that anatomic fact is why the Liver row prints Colon first (Colon > breast >> pancreas, lung, prostate). (3) THE COUNT: numerous lesions scattered throughout the parenchyma in both lobes is the printed liver pattern, and the counting rule — metastases often appear as multiple lesions vs the generally solitary 1° tumor — plus the frequency rule (liver metastasis outnumbers 1° liver malignancy) make metastasis the overwhelming prior. (4) THE ELIMINATIONS: hepatocellular carcinoma needs a diseased liver and an AFP story (and is itself a blood-rider outward); the CLaSH lymphatic default governs initial nodal spread, not portal seeding; prostate's home is bone (blastic, axial); choriocarcinoma is a hematogenous rider but with a normal hCG and the wrong targets. Count the spots, follow the blood, and read the list by rank.",
    },
  },
  mnemonics: [
    {
      code: "FCRH RIDES THE BLOODSTREAM",
      meaning: "F = Follicular thyroid carcinoma, C = Choriocarcinoma, R = Renal cell carcinoma, H = Hepatocellular carcinoma — the four carcinomas that route hematogenously despite the CLaSH default that most carcinomas spread via lymphatics.",
      memorizes: "The four hematogenous carcinomas",
      whenToUse: "Any question asking which carcinoma spreads hematogenously or presents with early blood-borne distant deposits",
      clinical: "The renal mass that goes to the lung, the molar pregnancy that goes to the lung, the thyroid nodule that goes to bone, and the liver tumor that seeds the hepatic veins — the four that skip the node line.",
    },
    {
      code: "PROSTATE BUILDS, BREAST MIXES, KIDNEY CARVES",
      meaning: "The bone-response fork: BLASTIC builds bone (eg, prostate, small cell lung cancer); MIXED (eg, breast); LYTIC carves or punches out (eg, kidney, colon, non-small cell lung cancer) — all with a predilection for the axial skeleton.",
      memorizes: "The Bone row's blastic/mixed/lytic fork",
      whenToUse: "Any imaging or pathology question about sclerotic vs lucent bone metastasis",
      clinical: "Dense sclerotic pelvic vertebrae in an older man → PSA; a scan with both lucent and sclerotic lesions in a woman → breast; punched-out lesions → renal mass workup and colonoscopy.",
    },
    {
      code: "COLON OWNS THE LIVER, LUNG OWNS THE BRAIN",
      meaning: "The heads of each list: Liver — Colon > breast >> pancreas, lung, prostate (the portal vein puts colon first); Brain — Lung > breast >> melanoma > colon, prostate (the systemic arteries put lung first); and the remaining rows — Bone: Prostate, breast >> lung > kidney, colon; Lung: Colon, breast >> kidney, prostate (both lungs).",
      memorizes: "The rank order at the top of all four organ lists",
      whenToUse: "Any “most common primary metastatic to ___” ranking question",
      clinical: "Follow the blood to the top of the list: gut → portal → liver; lung → systemic arteries → brain; and prostate/breast dominate the axial skeleton.",
    },
    {
      code: "COUNT THE SPOTS: MANY MEANS METS",
      meaning: "Metastases often appear as MULTIPLE lesions, vs 1° tumors which generally appear as SOLITARY lesions — and metastasis to bone, liver, lung, and brain is more common than 1° malignancy in these four organs.",
      memorizes: "The lesion-number rule + the frequency rule",
      whenToUse: "Any imaging vignette asking whether lesions are metastatic or primary",
      clinical: "Three ring-enhancing junctional brain lesions in a smoker are lung metastases until proven otherwise — count first, biopsy second.",
    },
  ],
  rapidReview: {
    s30: [
      "CLaSH: Most Carcinomas spread via Lymphatics; most Sarcomas spread Hematogenously",
      "Four carcinomas route hematogenously: follicular thyroid carcinoma, choriocarcinoma, renal cell carcinoma, hepatocellular carcinoma",
      "Metastasis to bone, liver, lung, and brain is more common than 1° malignancy in these organs",
      "Metastases often appear as multiple lesions (vs 1° tumors which generally appear as solitary lesions)",
      "Bone: Prostate, breast >> lung > kidney, colon — predilection for the axial skeleton; Blastic (prostate, small cell lung cancer), Mixed (breast), Lytic (kidney, colon, non-small cell lung cancer)",
      "Liver: Colon > breast >> pancreas, lung, prostate — scattered throughout liver parenchyma",
      "Lung: Colon, breast >> kidney, prostate — typically involve both lungs",
      "Brain: Lung > breast >> melanoma > colon, prostate — usually seen at gray-white matter junction",
    ],
    m3: [
      "FCRH RIDES THE BLOODSTREAM — Follicular thyroid, Choriocarcinoma, Renal cell, Hepatocellular (the four hematogenous carcinomas)",
      "PROSTATE BUILDS, BREAST MIXES, KIDNEY CARVES — the blastic/mixed/lytic bone fork",
      "COLON OWNS THE LIVER, LUNG OWNS THE BRAIN — the heads of the four organ lists",
      "COUNT THE SPOTS: MANY MEANS METS — multiple lesions vs the solitary 1° tumor",
      "CLaSH (the source's own mnemonic, quoted): Most Carcinomas spread via Lymphatics; most Sarcomas spread Hematogenously",
    ],
    m10: [
      "The axial-skeleton predilection: red-marrow-rich spine, pelvis, ribs, skull — the fertile soil for prostate- and breast-led bone metastasis",
      "Brain metastases sit at the gray-white matter junction — the vessel-narrowing address where systemic arterial seeds lodge; lung is the #1 source",
      "Liver metastases scatter throughout the parenchyma (both lobes); colon leads because the portal vein makes the liver the colon's first capillary bed",
      "Lung metastases typically involve both lungs simultaneously — bilateral nodules of varying size",
      "The two copyrighted photographs (described in text): A — a sagittal MR image of the spine with red arrows on metastatic lesions at T8 and L1 (the axial-skeleton predilection); B — a gross liver specimen, two cut halves with large pale nodular metastatic masses with central necrosis (the scattered-parenchyma pattern)",
      "The text layer prints the table's 1° TUMOR header as “10 TUMOR” — a mangled degree sign, not a “ten”",
    ],
  },
  recall: [
    {
      q: "The route paragraph verbatim — the CLaSH rule, the four hematogenous carcinomas, and both counting rules.",
      a: "Most Carcinomas spread via Lymphatics; most Sarcomas spread Hematogenously (CLaSH). However, four carcinomas route hematogenously: follicular thyroid carcinoma, choriocarcinoma, renal cell carcinoma, and hepatocellular carcinoma. Metastasis to bone, liver, lung, and brain is more common than 1° malignancy in these organs. Metastases often appear as multiple lesions (vs 1° tumors which generally appear as solitary lesions).",
    },
    {
      q: "The Bone row verbatim — the 1° tumor list, the predilection, and the three-response fork.",
      a: "Prostate, breast >> lung > kidney, colon. Predilection for axial skeleton A. Bone metastasis can be: ▘ Blastic (eg, prostate, small cell lung cancer) ▘ Mixed (eg, breast) ▘ Lytic (eg, kidney, colon, non-small cell lung cancer).",
    },
    {
      q: "The Liver row verbatim — the 1° tumor list and the pattern.",
      a: "Colon > breast >> pancreas, lung, prostate. Scattered throughout liver parenchyma B.",
    },
    {
      q: "The Lung row verbatim — the 1° tumor list and the pattern.",
      a: "Colon, breast >> kidney, prostate. Typically involve both lungs.",
    },
    {
      q: "The Brain row verbatim — the 1° tumor list and the address.",
      a: "Lung > breast >> melanoma > colon, prostate. Usually seen at gray-white matter junction.",
    },
    {
      q: "The table's header as the text layer prints it — and why it looks wrong.",
      a: "SITe Of MeTASTASIS · 10 TUMOR · NOTeS — the second column prints “10 TUMOR” in the text layer because the 1° degree sign is extracted as a zero; on the page it reads 1° TUMOR.",
    },
  ],
  related: [
    {
      title: "Neoplasia Nomenclature & Grading",
      topicId: "neoplasia-nomenclature",
      note: "The CLaSH switch rides on the naming: carcinoma (epithelial, -carcinoma) vs sarcoma (mesenchymal, -sarcoma) is the page-one distinction that sets the default route — lymphatics for the epithelial, blood for the mesenchymal.",
    },
    {
      title: "Cancer Hallmarks",
      topicId: "cancer-hallmarks",
      note: "Metastasis is the hallmark this page operationalizes — the tissue-invasion and escape machinery named there becomes a route map and a ranked organ table here.",
    },
    {
      title: "Oncogenes & Tumor Suppressors",
      topicId: "oncogenes-tumor-suppressors",
      note: "The genetics behind the list: VHL → renal cell carcinoma, RET/BRAF → thyroid carcinoma, the chronic viral injury → hepatocellular carcinoma — the blood-riders and list leaders have named genes on the facing page.",
    },
    {
      title: "Tumor Markers & Molecular Diagnostics",
      topicId: "tumor-markers-molecular",
      note: "The workup behind a found metastasis: PSA for the blastic bone case, CEA for the colon-led liver case, hCG for the choriocarcinoma rider, AFP for the hepatocellular exception — the markers name the hidden primary.",
    },
  ],
  crossLinks: [
    {
      subject: "Anatomy (the portal venous system)",
      connection:
        "Colon's #1 rank on the liver list is pure anatomy: the superior and inferior mesenteric veins drain to the portal vein, making the liver the colon's first capillary bed; the hepatic veins then hand the seeds to the IVC, right heart, and lungs.",
    },
    {
      subject: "Radiology (the blastic/lytic read)",
      connection:
        "The Bone row's three answers are radiology vocabulary: blastic (sclerotic, dense — prostate, small cell lung cancer), mixed (breast), and lytic (lucent, punched-out — kidney, colon, non-small cell lung cancer), all preferring the axial skeleton.",
    },
    {
      subject: "Neurology & neurosurgery (the ring-enhancing junctional lesion)",
      connection:
        "Brain metastases present as ring-enhancing lesions at the gray-white matter junction — the address that narrows a seizure-workup differential between metastasis (often multiple, lung-led) and a 1° tumor (generally solitary).",
    },
    {
      subject: "Oncologic staging (the N in TNM)",
      connection:
        "The CLaSH lymphatic default is why carcinomas are staged by nodal status (sentinel-node biopsy, regional nodal basins) while sarcomas are staged by grade and size — the route rule written into the staging manuals.",
    },
  ],
};
