import type { KypUsMLENote } from "../types";

// Biochemistry — Metabolism (E-batch, book order 17).
// Source: First Aid 2026, Part 1 pdf 112–114 / book 90–92
// (lipid transport; key enzymes; major apolipoproteins; lipoprotein functions)

export const lipidTransport: KypUsMLENote = {
  id: "lipid-transport",
  title: "Lipid Transport, Apolipoproteins & HDL Maturation",
  subtitle:
    "The body's lipid courier network — the exogenous circuit (dietary fat → micelles → intestinal chylomicrons bearing apo B48 → lymphatics → LPL unlocked by apo CII → FFA to adipose → remnant to liver via apoE) and the endogenous circuit (hepatic VLDL bearing apo B100 → LPL → IDL → back to liver via apoE or trimmed to LDL → receptor-mediated endocytosis in peripheral cells), with HDL running reverse cholesterol transport: secreted nascent by liver and intestine, matured by LCAT's esterification of 2⁄3 of plasma cholesterol, and offloading cholesteryl esters to VLDL/IDL/LDL through CETP.",
  subject: "Biochemistry",
  system: "Section II · High-Yield General Principles — Metabolism",
  pilotCategory: "Metabolism — lipid transport, lipoproteins, apolipoproteins, LCAT, CETP, PCSK9",
  difficulty: 3,
  readTime: 14,
  sourceRef:
    "First Aid 2026, Part 1 pp. 90–92 (lipid transport; key enzymes in lipid transport; major apolipoproteins; lipoprotein functions)",
  tags: [
    "lipid transport",
    "chylomicron",
    "chylomicron remnant",
    "VLDL",
    "IDL",
    "LDL",
    "HDL",
    "apolipoprotein",
    "apo B48",
    "apo B100",
    "apo CII",
    "apoE",
    "apo AI",
    "lipoprotein lipase",
    "LPL",
    "hepatic lipase",
    "hormone-sensitive lipase",
    "pancreatic lipase",
    "LCAT",
    "CETP",
    "PCSK9",
    "reverse cholesterol transport",
    "LDL receptor",
    "thoracic duct",
    "micelles",
    "type I familial dyslipidemia",
    "type II familial dyslipidemia",
    "type IV familial dyslipidemia",
    "LDL is Lethal",
    "HDL is Healthy",
  ],
  core: {
    what: "Lipid transport runs as two circuits plus a recycling service. Exogenous: dietary fat and cholesterol become micelles in the intestinal lumen, enter the intestinal cell, and are secreted as chylomicrons (apo B48, TG-rich) into the lymphatics — thoracic duct to subclavian vein to systemic circulation. HDL transfers apo CII and apoE to the chylomicron; chylomicron apo CII activates lipoprotein lipase (impaired in type I familial dyslipidemia), which releases FFA to adipocytes, leaving a chylomicron remnant that the liver takes up via apoE receptors. Endogenous: the liver releases VLDL (apo B100; overproduction in type IV familial dyslipidemia); VLDL apo CII activates LPL; IDL then delivers TGs and cholesterol to the liver via apoE or is modified by hepatic lipase into LDL, whose endocytosis via the LDL receptor (impaired in type II familial dyslipidemia) delivers hepatic cholesterol to peripheral tissues. HDL mediates reverse cholesterol transport from peripheral tissues to liver, acts as the repository for apoC and apoE needed by chylomicron and VLDL metabolism, is secreted by both liver and intestine (alcohol ↑ synthesis), and matures as LCAT catalyzes esterification of 2⁄3 of plasma cholesterol; CETP then mediates transfer of cholesteryl esters to other lipoprotein particles. PCSK9 degrades the LDL receptor → ↑ serum LDL; its inhibition → ↑ LDL receptor recycling → ↓ serum LDL. Lipoproteins are composed of varying proportions of proteins, cholesterol, TGs, and phospholipids; LDL and HDL carry the most cholesterol; cholesterol maintains cell membrane integrity and synthesizes bile acids, steroids, and vitamin D.",
    why: "This is the chapter's most-numbered visual and one of the exam's favorite machine diagrams: every numbered step is a disease (step 3 → type I, step 4 → type IV, step 7 → type II), every enzyme is a drug target (PCSK9 inhibitors, the LPL-adjacent fish oils, CETP inhibitors), and every apolipoprotein is an origin tag (B48 = intestine, B100 = liver) or a key (apo CII unlocks LPL, apoE unlocks remnant uptake, apo AI activates LCAT). The matrix matters because the exam asks it flat: which apolipoprotein is found only on HDL (AI), which is absent from LDL (apoE), which two are exclusive to intestinal vs hepatic particles (B48 vs B100). The two lethality tags — LDL is Lethal, HDL is Healthy — compress the entire atherosclerosis story into two words.",
    keyIdea: "Read the map as a delivery service with three address systems. The particle's apolipoprotein tells you its ORIGIN (B48 = made by intestine, B100 = made by liver), its KEY (apo CII is the cofactor LPL needs to unload TG at the capillary; apoE is the ligand the liver's receptors need to take back remnants and IDL), and its license (apo AI activates LCAT, HDL-only). Follow TG: dietary TG rides chylomicrons from the gut; hepatic TG rides VLDL; both are unpacked by LPL at the same capillary beds. Follow cholesterol: peripheral delivery is LDL's job (endocytosed via LDL receptors); the return trip is HDL's job (reverse transport), with LCAT esterifying cholesterol into the HDL core and CETP trading those cholesteryl esters to VLDL/IDL/LDL for TG. Every familial dyslipidemia is one broken numbered step.",
  },
  mechanisms: [
    {
      id: "exogenous-chylomicron-run",
      title: "The exogenous run — dietary fat from gut to remnant",
      context: "Chylomicron metabolism (transport map steps 1–3)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Dietary fat and cholesterol reach the small intestine lumen",
            sublabel: "Input — the meal begins the run.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Micelles carry the products into the intestinal cell, which packages them as chylomicrons (TG-rich, apo B48)",
            sublabel: "Process — B48 mediates chylomicron secretion into lymphatics.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Chylomicron enters lymphatics: thoracic duct → subclavian vein → systemic circulation; HDL transfers apo CII and apoE to it",
            sublabel: "Process — the gut bypasses the portal vein: fat enters the blood directly.",
            variant: "process",
          },
          {
            id: "s3",
            label: "Chylomicron apo CII activates lipoprotein lipase at the capillary → FFA released to adipocytes (impaired in type I familial dyslipidemia)",
            sublabel: "Process — the apo CII key unlocks LPL; without it, chylomicrons pile up.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Chylomicron remnant (mostly depleted of TGs, still carrying cholesterol, apoE, B48) → liver uptake via apoE receptor",
            sublabel: "Output — the return leg ends in the hepatocyte; remnant clearance is apoE's job.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "micelles" },
          { from: "s1", to: "s2", label: "lymphatics" },
          { from: "s2", to: "s3", label: "apo CII → LPL" },
          { from: "s3", to: "o1", label: "TG unloaded" },
        ],
        caption:
          "The exogenous run is a milk delivery: the intestine's chylomicrons (apo B48 = the intestinal tag) enter the lymphatics — the reason dietary fat skips the first-pass portal vein — and circulate until their borrowed apo CII unlocks LPL at adipose and muscle capillaries. LPL strips the TG cargo as FFA for storage, and the shrunken chylomicron remnant returns its dietary cholesterol to the liver through apoE-mediated uptake. Type I familial dyslipidemia is the broken key: LPL or apo CII deficiency leaves chylomicrons circulating.",
      },
    },
    {
      id: "endogenous-reverse-loop",
      title: "The endogenous run and HDL's reverse transport",
      context: "VLDL → IDL → LDL + HDL maturation (transport map steps 4–7 + HDL figure)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "The hepatocyte exports its own TG and cholesterol as VLDL (apo B100)",
            sublabel: "Input — the liver's own courier, overproduced in type IV familial dyslipidemia.",
            variant: "input",
          },
          {
            id: "s1",
            label: "VLDL apo CII activates LPL at the capillary → FFA to adipose; the trimmed particle becomes IDL",
            sublabel: "Process — same LPL, same key, hepatic cargo.",
            variant: "process",
          },
          {
            id: "s2",
            label: "IDL's two exits: (6) delivers TGs and cholesterol to the liver via apoE, or hepatic lipase trims it into LDL",
            sublabel: "Process — the branch point of the endogenous circuit.",
            variant: "process",
          },
          {
            id: "s3",
            label: "LDL (cholesterol-rich, apo B100) binds LDL receptors on peripheral cells → receptor-mediated endocytosis (impaired in type II familial dyslipidemia; PCSK9 degrades the receptor)",
            sublabel: "Process — cholesterol delivery; apo B100 is the ligand.",
            variant: "process",
          },
          {
            id: "s4",
            label: "HDL reverse transport: liver and intestine secrete nascent HDL (disc, apo AI/CII/E) → LCAT esterifies cholesterol into the core (mature HDL) → CETP transfers cholesteryl esters to VLDL, IDL, LDL → cholesterol returns to the liver",
            sublabel: "Process — the return conveyor: HDL is Healthy.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Net flow: dietary TG → periphery; hepatic TG → periphery; hepatic cholesterol → periphery (LDL); peripheral cholesterol → liver (HDL)",
            sublabel: "Output — four deliveries, one map.",
            variant: "output",
          },
          {
            id: "x1",
            label: "PCSK9 degrades LDL receptor → ↑ serum LDL; inhibition → ↑ LDL receptor recycling → ↓ serum LDL",
            sublabel: "Separator — the drug lever on step 7.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "apo CII → LPL" },
          { from: "s1", to: "s2", label: "IDL" },
          { from: "s2", to: "s3", label: "hepatic lipase" },
          { from: "s3", to: "o1", label: "cholesterol delivered" },
          { from: "s4", to: "o1", label: "cholesterol returned" },
          { from: "x1", to: "s3", label: "receptor turnover" },
        ],
        caption:
          "The endogenous run mirrors the exogenous one with liver paperwork: VLDL (apo B100 = the hepatic tag) carries the liver's TG out, LPL unpacks it, and IDL stands at the fork — back to the liver via apoE, or forward as LDL, the pure cholesterol courier whose receptor-mediated endocytosis is the step that fails in type II (and the step PCSK9 inhibitors protect by sparing LDL receptors). Meanwhile HDL runs the reverse conveyor: secreted as a nascent disc by liver and intestine, inflated into a mature sphere by LCAT (which esterifies 2⁄3 of plasma cholesterol — apo AI is its activator), and offloaded through CETP, which trades its cholesteryl esters to VLDL, IDL, and LDL for triglyceride. LDL is Lethal; HDL is Healthy.",
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "lipid-transport-map",
      title: "The lipid transport circuit — seven numbered steps",
      caption:
        "The source figure redrawn: exogenous panel (dietary fat and cholesterol → micelles → intestinal cell → chylomicron with apo B48 → thoracic duct → subclavian vein → systemic circulation, HDL transferring apo CII and apoE, LPL releasing FFA to the adipocyte, chylomicron remnant reaching the hepatocyte via the apoE receptor) and endogenous panel (hepatocyte with bile canaliculus → VLDL with apo B100 → LPL → IDL → hepatic lipase → LDL → LDL-receptor endocytosis in the peripheral cell), with all seven numbered callouts verbatim and the type I/II/IV annotations attached to their steps.",
      notice:
        "Each numbered step is a possible exam answer: 1 chylomicron enters lymphatics (why dietary fat skips the portal vein), 2 HDL transfers apo CII and apoE (HDL is the apolipoprotein bank), 3 chylomicron apo CII activates LPL (broken in type I), 4 liver releases VLDL (overproduced in type IV), 5 VLDL apo CII activates LPL, 6 IDL delivers TGs and cholesterol to the liver via apoE, 7 endocytosis of LDL (impaired in type II).",
    },
    {
      kind: "visual",
      visualId: "hdl-maturation-map",
      title: "HDL maturation — the disc that becomes a sphere",
      caption:
        "The source figure redrawn: liver and small intestine both secrete the discoidal nascent HDL carrying apo CII and apoE; LCAT esterifies cholesterol so the particle swells into the spherical mature HDL with a cholesteryl-ester core; CETP then mediates the transfer of cholesteryl esters to VLDL, IDL, and LDL — with the reverse-transport strip (LCAT esterifies 2⁄3 of plasma cholesterol, apo AI activates LCAT, HDL is the apoC/apoE repository).",
      notice:
        "The two enzymes of the return conveyor: LCAT is the inflator (free cholesterol → cholesteryl ester into the HDL core; required for HDL maturation), CETP is the trader (cholesteryl esters out to VLDL/IDL/LDL in exchange for TG). Apo AI lives only on HDL and is LCAT's activator.",
    },
    {
      kind: "table",
      title: "Key enzymes in lipid transport — verbatim",
      intro: "The source's enzyme table: seven enzymes, one function each.",
      columns: ["Enzyme", "Function"],
      rows: [
        ["Cholesteryl ester transfer protein", "Mediates transfer of cholesteryl esters to other lipoprotein particles."],
        ["Hepatic lipase", "Degrades TGs remaining in IDL and chylomicron remnants."],
        ["Hormone-sensitive lipase", "Degrades TGs stored in adipocytes. Promotes gluconeogenesis by releasing glycerol."],
        ["Lecithin-cholesterol acyltransferase", "Catalyzes esterification of 2⁄3 of plasma cholesterol (ie, required for HDL maturation)."],
        ["Lipoprotein lipase", "Degrades TGs in circulating chylomicrons and VLDL."],
        ["Pancreatic lipase", "Degrades dietary TGs in small intestine."],
        ["PCSK9", "Degrades LDL receptor → ↑ serum LDL. Inhibition → ↑ LDL receptor recycling → ↓ serum LDL."],
      ],
      caption:
        "Five lipases and lipid-transfer enzymes run the map: pancreatic lipase opens the run (dietary TG in the gut lumen), LPL unloads both TG couriers at the capillary (chylomicrons, VLDL), hepatic lipase trims IDL and remnants to their final form, hormone-sensitive lipase releases the adipocyte's own stored TG in fasting — and PCSK9 sets how many LDL receptors survive to clear serum LDL.",
    },
    {
      kind: "table",
      title: "Major apolipoproteins — functions and the particle matrix, verbatim",
      intro: "The source's apolipoprotein table with its checkmark matrix across the six lipoprotein classes.",
      columns: ["Apolipoprotein", "Function", "Chylomicron", "Remnant", "VLDL", "IDL", "LDL", "HDL"],
      rows: [
        ["E", "Mediates remnant uptake (everything except LDL)", "✓", "✓", "✓", "✓", "", "✓"],
        ["AI", "Found only on alphalipoproteins (HDL), activates LCAT", "", "", "", "", "", "✓"],
        ["CII", "Lipoprotein lipase cofactor that catalyzes cleavage", "✓", "", "✓", "✓", "", "✓"],
        ["B48", "Mediates chylomicron secretion into lymphatics. Only on particles originating from the intestines", "✓", "✓", "", "", "", ""],
        ["B100", "Binds LDL receptor. Only on particles originating from the liver (I hope I live to Be 100)", "", "", "✓", "✓", "✓", ""],
      ],
      caption:
        "Three facts the matrix makes visual: apoE rides everything except LDL (the remnant-return ligand); apo AI is exclusive to HDL; B48 and B100 never share a column — B48 marks intestinal particles (chylomicron and its remnant), B100 marks hepatic ones (VLDL, IDL, LDL). ApoE's absence from LDL is why LDL's receptor ligand is B100.",
    },
    {
      kind: "table",
      title: "Lipoprotein functions — verbatim",
      intro: "The source's lipoprotein functions section as a table. Lipoproteins are composed of varying proportions of proteins, cholesterol, TGs, and phospholipids; LDL and HDL carry the most cholesterol. Cholesterol is needed to maintain cell membrane integrity and synthesize bile acids, steroids, and vitamin D.",
      columns: ["Lipoprotein", "Function and origin (verbatim)"],
      rows: [
        ["Chylomicron", "Delivers dietary TGs to peripheral tissues. Delivers cholesterol to liver in the form of chylomicron remnants, which are mostly depleted of their TGs. Secreted by intestinal epithelial cells."],
        ["VLDL", "Delivers hepatic TGs to peripheral tissue. Secreted by liver."],
        ["IDL", "Delivers TGs and cholesterol to liver. Formed from degradation of VLDL."],
        ["LDL", "Delivers hepatic cholesterol to peripheral tissues. Formed by hepatic lipase modification of IDL in the liver and peripheral tissue. Taken up by target cells via receptor-mediated endocytosis. LDL is Lethal."],
        ["HDL", "Mediates reverse cholesterol transport from peripheral tissues to liver. Acts as a repository for apoC and apoE (which are needed for chylomicron and VLDL metabolism). Secreted from both liver and intestine. Alcohol ↑ synthesis. HDL is Healthy."],
      ],
      caption:
        "One line per particle tells you its cargo, origin, and ending: chylomicron = dietary TG (intestine), VLDL = hepatic TG (liver), IDL = the VLDL-to-LDL middle state returning to the liver, LDL = hepatic cholesterol to the periphery (Lethal), HDL = peripheral cholesterol back to the liver (Healthy, and the only one alcohol raises).",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "The address system in one place",
      body: "Apo B48 mediates chylomicron secretion into lymphatics — only on particles originating from the intestines. Apo B100 binds the LDL receptor — only on particles originating from the liver (I hope I live to Be 100). Apo CII is the lipoprotein lipase cofactor that catalyzes cleavage. ApoE mediates remnant uptake — everything except LDL. Apo AI is found only on alphalipoproteins (HDL) and activates LCAT. PCSK9 degrades the LDL receptor → ↑ serum LDL; its inhibition → ↑ LDL receptor recycling → ↓ serum LDL.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A child presents with pancreatitis, hepatosplenomegaly, and eruptive/pruritic xanthomas with creamy-layered plasma and no increase in atherosclerosis.",
        discriminator: "Chylomicrons cannot be unpacked — LPL or apo CII deficiency",
        concept: "Type I familial dyslipidemia = broken step 3",
        answer:
          "Chylomicron apo CII activates LPL (impaired in type I familial dyslipidemia): without LPL or its apo CII cofactor, circulating chylomicrons accumulate with their TG cargo — pancreatitis, hepatosplenomegaly, eruptive xanthomas — but without atherogenesis, since the cholesterol-carrying particles are not the ones stuck.",
      },
      {
        stem: "A patient has tendon (Achilles) xanthomas, corneal arcus, and cholesterol of 300 mg/dL (heterozygote) or ≥700 mg/dL (homozygote) with MI before age 20.",
        discriminator: "Absent or defective LDL receptors, or defective apo B100",
        concept: "Type II familial dyslipidemia = broken step 7",
        answer:
          "Endocytosis of LDL is impaired in type II familial dyslipidemia: without working LDL receptors (or with apo B100 that cannot bind them), LDL — and its cholesterol — accumulates, accelerating atherosclerosis; heterozygotes (1:500) run cholesterol ≈300 mg/dL, homozygotes ≥700 mg/dL.",
      },
      {
        stem: "A patient with insulin resistance has hypertriglyceridemia over 1000 mg/dL presenting as acute pancreatitis.",
        discriminator: "Hepatic overproduction of VLDL",
        concept: "Type IV familial dyslipidemia = broken step 4",
        answer:
          "Liver releases VLDL (overproduction in type IV familial dyslipidemia): the hepatic TG courier is over-exported, and VLDL-borne triglyceride climbs above 1000 mg/dL — enough to cause acute pancreatitis — in the setting of insulin resistance.",
      },
      {
        stem: "A question asks how a PCSK9 inhibitor lowers LDL, or asks which apolipoprotein activates LCAT.",
        discriminator: "Receptor recycling and the apo AI–LCAT pair",
        concept: "The two pharmacologic-adjacent facts of the map",
        answer:
          "PCSK9 degrades the LDL receptor → ↑ serum LDL; inhibiting PCSK9 → ↑ LDL receptor recycling → ↓ serum LDL. LCAT is activated by apo AI, found only on alphalipoproteins (HDL), and catalyzes esterification of 2⁄3 of plasma cholesterol — required for HDL maturation.",
      },
    ],
    traps: [
      {
        a: "ApoE mediates uptake of all remnants including LDL",
        b: "ApoE mediates remnant uptake — everything except LDL",
        whyConfused: "ApoE rides nearly every particle.",
        keyDifference:
          "The matrix exception is the whole point: LDL is the one particle without apoE, so its receptor ligand is apo B100. Every apoE-mediated uptake question (chylomicron remnant, IDL) excludes LDL.",
        clue: "Any 'which particle lacks apoE' or 'what is LDL's ligand' question.",
      },
      {
        a: "Apo CII activates LCAT",
        b: "Apo CII is the LPL cofactor; apo AI activates LCAT",
        whyConfused: "Both are C/A-lettered apolipoprotein–enzyme pairs.",
        keyDifference:
          "CII pairs with the capillary enzyme (lipoprotein lipase — the TG-cleavage cofactor); AI pairs with the HDL enzyme (LCAT — esterification) and is found only on HDL. Swap them and the whole circuit mislabels.",
        clue: "Any apo-enzyme pairing question.",
      },
      {
        a: "Apo B100 is found on chylomicrons",
        b: "B48 = intestines only; B100 = liver only",
        whyConfused: "Both are B apolipoproteins and both bind secretion machinery.",
        keyDifference:
          "The B tags are origin markers: B48 mediate chylomicron secretion into lymphatics (intestinal particles only — chylomicron and remnant), while B100 binds the LDL receptor and rides only hepatic particles (VLDL, IDL, LDL). The printed mnemonic: I hope I live to Be 100 — the liver outlives the gut.",
        clue: "Any B48-vs-B100 question.",
      },
      {
        a: "VLDL and chylomicrons carry most of the plasma cholesterol",
        b: "LDL and HDL carry the most cholesterol",
        whyConfused: "Chylomicrons and VLDL are the biggest particles.",
        keyDifference:
          "The big particles are TG couriers (chylomicron = dietary TG, VLDL = hepatic TG); the cholesterol carriers are LDL (to the periphery — Lethal) and HDL (back to the liver — Healthy). Particle size tracks TG cargo, not cholesterol cargo.",
        clue: "Any 'which lipoprotein is cholesterol-rich' question.",
      },
    ],
    pivots: [
      {
        lookAlike: "The hyperlipidemia patient (TG-dominated vs cholesterol-dominated)",
        differentiator: "Which circuit step broke",
        correctPath:
          "TG >1000 with pancreatitis and eruptive xanthomas → the TG circuit: type I (LPL/apo CII, since birth, no atherosclerosis) or type IV (VLDL overproduction, insulin resistance). Cholesterol ~300–700+ with tendon xanthomas, corneal arcus, early MI → the LDL step: type II (LDL receptor or apo B100). TG + cholesterol both up with palmar xanthomas → type III (apoE, dysbetalipoproteinemia).",
      },
      {
        lookAlike: "The apolipoprotein identification question (five apos, six particles)",
        differentiator: "Origin, key, or license",
        correctPath:
          "Origin tags: B48 (intestine: chylomicron, remnant) vs B100 (liver: VLDL, IDL, LDL). Keys: apo CII (unlocks LPL on chylomicron/VLDL/IDL) vs apoE (unlocks remnant/IDL uptake — everything except LDL). License: apo AI (HDL-only, activates LCAT). Classify by function, then place on the matrix.",
      },
    ],
    miniCase: {
      vignette:
        "A 26-year-old man presents to the emergency department with severe epigastric pain radiating to the back, nausea, and vomiting for six hours. He has had similar, milder episodes after fatty meals for years. Examination shows eruptive xanthomas over the elbows and knees and mild hepatosplenomegaly; no corneal arcus and no tendon thickening. Laboratory studies show triglycerides of 3,800 mg/dL and total cholesterol of 420 mg/dL. A plasma sample refrigerated overnight shows a creamy supernatant layer over a clear infranatant. His father had similar episodes; his older sister died of hemorrhagic pancreatitis at age 30. None of the affected relatives has had any premature atherosclerotic event. An intravenous heparin bolus is administered as part of a research protocol, and post-heparin lipolytic activity is undetectable.",
      question:
        "Which step of the lipid transport map is broken in this patient, and what is the molecular defect?",
      options: [
        {
          label: "A",
          text: "Step 3 — chylomicron apo CII activates lipoprotein lipase; the defect is lipoprotein lipase (or apo CII) deficiency, so circulating chylomicrons cannot unload their TG",
          correct: true,
          why: "Correct — undetectable post-heparin lipolytic activity means LPL itself is missing (heparin releases LPL from the capillary wall; type I familial dyslipidemia). Chylomicrons pile up with their TG: pancreatitis, eruptive xanthomas, hepatosplenomegaly, creamy supernatant — and no accelerated atherosclerosis, because the stuck particle is the TG courier, not the cholesterol courier.",
        },
        {
          label: "B",
          text: "Step 7 — endocytosis of LDL; the defect is the LDL receptor, so LDL accumulates",
          why: "That is type II familial dyslipidemia — cholesterol-dominated (300–700+ mg/dL), with tendon xanthomas, corneal arcus, and accelerated atherosclerosis; the triglyceride-dominated picture and the undetectable post-heparin lipolytic activity point elsewhere.",
        },
        {
          label: "C",
          text: "Step 4 — hepatic overproduction of VLDL; the defect is insulin resistance",
          why: "Type IV raises VLDL and TG, but typically later in life with metabolic risk factors, and post-heparin lipolytic activity is preserved; the childhood onset, family pattern, and absent LPL activity fit type I.",
        },
        {
          label: "D",
          text: "Step 6 — IDL delivers TGs and cholesterol to the liver via apoE; the defect is apoE",
          why: "ApoE failure (type III, dysbetalipoproteinemia) accumulates chylomicron and VLDL remnants with tuberoeruptive and palmar xanthomas and premature atherosclerosis — a different particle set and a different xanthoma geography.",
        },
        {
          label: "E",
          text: "The reverse transport arm — LCAT deficiency, so HDL cannot mature",
          why: "LCAT failure produces immature discoidal HDL with low plasma cholesterol esterification — corneal opacities, hemolytic anemia, and low HDL, not thousands of milligrams of triglyceride with pancreatitis.",
        },
      ],
      reasoning:
        "The map's step 3 is the TG-unloading step: chylomicron apo CII activates LPL at the capillary. The undetectable post-heparin lipolytic activity is the decisive clue — heparin releases endothelial LPL into the blood, so no activity means no enzyme (type I, LPL deficiency; the apo CII-deficient variant has the same phenotype). Everything else follows the stuck particle: TG-laden chylomicrons cause the pancreatitis and the creamy supernatant, eruptive (not tendon) xanthomas mark the dermal macrophage pickup of spilled lipid, and the absence of premature atherosclerosis marks the exam's favorite contrast — type I is the hyperlipidemia that does not clog arteries, because LDL, the Lethal courier, is not the particle that accumulates. Treatment is dietary fat restriction; the map stays the same in every relative.",
    },
  },
  mnemonics: [
    {
      code: "“I hope I live to Be 100.”",
      meaning:
        "The source's own mnemonic for apo B100: it binds the LDL receptor and is found only on particles originating from the liver — the liver, the organ you hope to live long with, versus B48 from the intestine.",
      memorizes: "Apo B100 origin (liver) vs apo B48 origin (intestine)",
      whenToUse: "Any B48-vs-B100 question.",
      clinical: "B48 rides chylomicrons and their remnants; B100 rides VLDL, IDL, LDL — never the same particle.",
    },
    {
      code: "“LDL is Lethal, HDL is Healthy.”",
      meaning:
        "The source's own tags for the two cholesterol carriers: LDL delivers hepatic cholesterol to peripheral tissues (the atherogenic direction), while HDL mediates reverse cholesterol transport back to the liver.",
      memorizes: "Which cholesterol carrier harms and which protects",
      whenToUse: "Any LDL/HDL risk-direction or atherosclerosis question.",
      clinical: "Alcohol ↑ HDL synthesis — the one lipid effect of alcohol that looks good on the panel, not a health claim.",
    },
    {
      code: "“CII is the key; E is the return address; AI is the license.”",
      meaning:
        "KYP's shorthand for the three non-B apolipoproteins: apo CII is the LPL cofactor (the key that unlocks TG unloading at the capillary), apoE is the ligand for remnant and IDL uptake by the liver (the return address), and apo AI (HDL-only) licenses LCAT to esterify cholesterol.",
      memorizes: "The functional trio CII / E / AI",
      whenToUse: "Any apo-function matching question.",
      clinical: "Type I breaks the key (LPL/apo CII); type III breaks the return address (apoE); LCAT deficiency breaks the license.",
    },
  ],
  rapidReview: {
    s30: [
      "Chylomicron = dietary TG, apo B48, from intestinal epithelial cells → lymphatics",
      "VLDL = hepatic TG, apo B100, secreted by liver",
      "LDL delivers hepatic cholesterol to peripheral tissues (Lethal); HDL reverse-transports it to liver (Healthy)",
      "Alcohol ↑ HDL synthesis",
    ],
    m3: [
      "Apo CII activates LPL (chylomicron + VLDL unloading); apoE = remnant uptake, everything except LDL",
      "Apo AI only on HDL, activates LCAT; LCAT esterifies 2⁄3 of plasma cholesterol (HDL maturation)",
      "CETP transfers cholesteryl esters to VLDL/IDL/LDL; hepatic lipase trims IDL/remnants",
      "PCSK9 degrades LDL receptor (↑ LDL); PCSK9 inhibitors ↑ receptor recycling (↓ LDL)",
    ],
    m10: [
      "Transport steps: 1 lymphatics · 2 HDL lends CII/E · 3 CM apoCII→LPL (type I) · 4 liver→VLDL (type IV) · 5 VLDL apoCII→LPL · 6 IDL→liver via apoE · 7 LDL endocytosis (type II)",
      "IDL: delivers TGs + cholesterol to liver via apoE; formed from VLDL degradation; LDL formed by hepatic lipase modification of IDL",
      "LDL and HDL carry the most cholesterol; cholesterol → membranes, bile acids, steroids, vitamin D",
      "LPL degrades TGs in circulating chylomicrons and VLDL; pancreatic lipase degrades dietary TGs",
    ],
  },
  recall: [
    {
      q: "Trace dietary fat from the intestinal lumen to the hepatocyte.",
      a: "Dietary fat and cholesterol → micelles in the small intestine lumen → intestinal cell → secreted as chylomicrons (apo B48, TG-rich) into the lymphatics (thoracic duct → subclavian vein → systemic circulation) → apo CII (transferred from HDL) activates LPL at the capillary, releasing FFA to peripheral tissues → the chylomicron remnant (TG-depleted, cholesterol-bearing) is taken up by the liver via apoE receptors.",
    },
    {
      q: "What are the two origins of HDL, and what does alcohol do to it?",
      a: "HDL is secreted from both liver and intestine; alcohol ↑ its synthesis. HDL is Healthy — it mediates reverse cholesterol transport.",
    },
    {
      q: "Which apolipoprotein is found only on HDL, and what does it activate?",
      a: "Apo AI — found only on alphalipoproteins (HDL); it activates LCAT, the enzyme that catalyzes esterification of 2⁄3 of plasma cholesterol (required for HDL maturation).",
    },
    {
      q: "Contrast the functions of apo CII and apoE.",
      a: "Apo CII is the lipoprotein lipase cofactor that catalyzes cleavage (unlocks TG unloading from chylomicrons and VLDL); apoE mediates remnant uptake — it rides everything except LDL and returns chylomicron remnants and IDL to the liver.",
    },
    {
      q: "Contrast apo B48 and apo B100 — origins and particles.",
      a: "Apo B48 mediates chylomicron secretion into lymphatics and is only on particles originating from the intestines (chylomicron, chylomicron remnant). Apo B100 binds the LDL receptor and is only on particles originating from the liver (VLDL, IDL, LDL). Mnemonic: I hope I live to Be 100.",
    },
    {
      q: "What does CETP do, and what does hepatic lipase do?",
      a: "CETP mediates transfer of cholesteryl esters to other lipoprotein particles (VLDL, IDL, LDL). Hepatic lipase degrades the TGs remaining in IDL and chylomicron remnants.",
    },
    {
      q: "How does PCSK9 affect LDL, and what happens when it is inhibited?",
      a: "PCSK9 degrades the LDL receptor → ↑ serum LDL. Inhibition → ↑ LDL receptor recycling → ↓ serum LDL — the mechanism of PCSK9 inhibitors.",
    },
    {
      q: "Give each lipoprotein's delivery job and origin.",
      a: "Chylomicron: delivers dietary TGs to peripheral tissues and cholesterol to the liver as remnants (intestinal epithelial cells). VLDL: delivers hepatic TGs to peripheral tissue (liver). IDL: delivers TGs and cholesterol to liver (formed from VLDL degradation). LDL: delivers hepatic cholesterol to peripheral tissues via receptor-mediated endocytosis (hepatic lipase modification of IDL) — Lethal. HDL: reverse cholesterol transport to the liver, apoC/apoE repository — Healthy.",
    },
    {
      q: "Which lipoproteins carry the most cholesterol, and what is cholesterol used for?",
      a: "LDL and HDL carry the most cholesterol. Cholesterol maintains cell membrane integrity and synthesizes bile acids, steroids, and vitamin D.",
    },
    {
      q: "Which three numbered transport steps map to which familial dyslipidemias?",
      a: "Step 3 (chylomicron apo CII activates LPL) → type I; step 4 (liver releases VLDL, overproduction) → type IV; step 7 (endocytosis of LDL via the LDL receptor) → type II.",
    },
  ],
  related: [
    {
      title: "Fatty Acid Metabolism",
      topicId: "fattyAcidMetabolism",
      note: "The TG cargo that chylomicrons and VLDL ferry is built by fatty acid synthesis and re-esterified in the fed state.",
    },
    {
      title: "Ketone Bodies & Fed/Fasted States",
      topicId: "ketone-bodies",
      note: "The adipocyte's FFA — harvested by LPL from chylomicrons and VLDL in the fed state — are the same FFAs that feed hepatic ketogenesis in the fasted state.",
    },
    {
      title: "Metabolic Fuel Use & Starvation",
      topicId: "metabolic-fuel-use",
      note: "Hormone-sensitive lipase releases the adipocyte's stored TG during fasting — the transport map's storage side meets the starvation clock.",
    },
    {
      title: "Glycogen Metabolism & Storage Diseases",
      topicId: "glycogen-metabolism",
      note: "The same cAMP → PKA cascade that mobilizes hepatic glycogen also phosphorylates hormone-sensitive lipase — one hormonal switch, two fuel stores.",
    },
  ],
  crossLinks: [
    {
      subject: "Cardiology",
      connection: "LDL is Lethal — the atherogenic courier whose receptor-mediated endocytosis failing (type II) produces tendon xanthomas and MI before age 20; atherosclerosis begins where LDL accumulates.",
    },
    {
      subject: "Pharmacology",
      connection: "PCSK9 inhibitors raise LDL receptor recycling (↓ serum LDL) — the map's step 7 is the statin-and-biologic battleground for cholesterol lowering.",
    },
    {
      subject: "Gastrointestinal",
      connection: "Dietary fat's absorption — micelles, pancreatic lipase, and chylomicron secretion into lymphatics — explains steatorrhea and fat-soluble-vitamin loss when the exogenous run fails.",
    },
  ],
};
