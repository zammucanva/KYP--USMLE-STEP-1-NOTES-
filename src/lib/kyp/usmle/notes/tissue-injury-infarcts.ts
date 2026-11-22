import type { KypUsMLENote } from "../types";

// Pathology — CELLULAR INJURY banner (P-batch 5). Source: pdf 228 /
// book 206 (Ischemia, the vulnerable-regions table, Types of infarcts
// [red vs pale], and Free radical injury). Census: pdfimages reports
// THREE cmyk JPEG rasters (~188x137, ~265x264, ~208x209 at 150 dpi) —
// all GROSS PHOTOGRAPHS, and the lettering is DUPLICATED (a source
// quirk, documented): the 'A' at the heart table row = a heart
// cross-section with yellow outline lines tracing a pale subendocardial
// region (subendocardial infarction); the 'A' in the red-infarcct
// block = a LUNG with a dark-red wedge-shaped hemorrhagic (red)
// infarct; the 'B' in the pale-infarcct block = a heart with a large
// pale/white transmural infarct outlined by yellow lines. Two
// different images both carry the letter A — the text layer prints
// the A marker at raw 6 (the heart image) and again at raw 82 (the
// letter row). ALL THREE ARE COPYRIGHTED — described-in-text only,
// NEVER reproduced (the M32 convention). The page is otherwise PURE
// TEXT: the ischemia definition, the ORGAN/SUSCEPTIBLE REGION table
// with two footnotes (watershed areas; the most vulnerable neurons),
// the red/pale infarct pair, and the free-radical injury block with
// its initiators, eliminators, and three example groups. NO margin
// notes or mnemonics (VLM confirmed).

export const tissueInjuryInfarcts: KypUsMLENote = {
  id: "tissue-injury-infarcts",
  title: "Tissue Hypoxia Susceptibility, Infarcts & Free Radicals",
  subtitle:
    "Supply, demand, and the double injury of getting blood back (book 206). ISCHEMIA — inadequate blood supply to meet demand, by ↓ arterial perfusion (eg, atherosclerosis), ↓ venous drainage (eg, testicular torsion, Budd-Chiari syndrome), or shock. THE VULNERABLE REGIONS — brain: ACA/MCA/PCA boundary areas (watershed); heart: subendocardium of LV; kidney: straight segment of the proximal tubule and thick ascending limb (medulla); liver: area around the central vein (zone III); colon: splenic flexure (Griffith point) and rectosigmoid junction (Sudeck point) — watershed areas being border zones fed by the most distal branches of 2 arteries with limited collateral vascularity, and the most vulnerable neurons being the Purkinje cells of the cerebellum and the pyramidal cells of the hippocampus and neocortex (layers 3, 5, 6). THE INFARCT FORK — RED infarct: venous occlusion, tissues with multiple blood supplies (liver, lung, intestine, testes), and reperfusion (eg, after angioplasty) — reperfusion injury due to free radicals; PALE infarct: solid organs with a single (endarterial) blood supply (heart, kidney). FREE RADICAL INJURY — damage via membrane lipid peroxidation, protein modification, DNA breakage; initiated by radiation, phase I drug metabolism, redox reactions, nitric oxide, transition metals (iron, copper — the Fenton reaction), and the WBC oxidative burst; eliminated by scavenging enzymes (catalase, superoxide dismutase, glutathione peroxidase), spontaneous decay, antioxidants (vitamins A, C, E), and metal carrier proteins (transferrin, ceruloplasmin) — with the example set: oxygen toxicity (retinopathy of prematurity, bronchopulmonary dysplasia, reperfusion after thrombolytics), acetaminophen and carbon tetrachloride (P-450 → CCl3 radical → fatty liver, centrilobular necrosis), and the metal storage diseases (hemochromatosis iron, Wilson copper).",
  subject: "Pathology",
  system: "Section II · High-Yield General Principles — Pathology: Cellular Injury",
  pilotCategory:
    "The supply-demand map — ischemia's three mechanisms and the organ-by-organ vulnerability table (watershed border zones, the subendocardium, the medullary tubules, zone III, Griffith and Sudeck points) — with the red-vs-pale infarct fork (multiple supplies vs single endarterial supply, venous occlusion and reperfusion) and the free-radical economy: initiators against eliminators, the Fenton reaction, and the CCl4-to-CCl3 fatty-liver chain.",
  difficulty: 2,
  readTime: 10,
  sourceRef:
    "First Aid 2026, Part 1 pp. 206–206 (Ischemia — the definition and mechanisms; the ORGAN/SUSCEPTIBLE REGION table with the watershed and vulnerable-neuron footnotes; Types of infarcts — red and pale; Free radical injury — damage, initiators, eliminators, and the oxygen-toxicity, drug/chemical-toxicity, and metal-storage examples; the three lettered gross photographs, described in text)",
  tags: [
    "ischemia",
    "hypoxia",
    "infarct",
    "red infarct",
    "pale infarct",
    "hemorrhagic infarct",
    "venous occlusion",
    "reperfusion injury",
    "angioplasty",
    "thrombolytic therapy",
    "arterial perfusion",
    "venous drainage",
    "atherosclerosis",
    "testicular torsion",
    "Budd-Chiari syndrome",
    "shock",
    "watershed areas",
    "border zones",
    "ACA",
    "MCA",
    "PCA",
    "subendocardium",
    "left ventricle",
    "straight segment of proximal tubule",
    "thick ascending limb",
    "medulla",
    "zone III",
    "central vein",
    "splenic flexure",
    "Griffith point",
    "rectosigmoid junction",
    "Sudeck point",
    "Purkinje cells",
    "pyramidal cells",
    "hippocampus",
    "neocortex",
    "free radicals",
    "lipid peroxidation",
    "protein modification",
    "DNA breakage",
    "radiation",
    "phase I metabolism",
    "cytochrome P-450",
    "redox reactions",
    "nitric oxide",
    "Fenton reaction",
    "iron",
    "copper",
    "oxidative burst",
    "catalase",
    "superoxide dismutase",
    "glutathione peroxidase",
    "antioxidants",
    "vitamin A",
    "vitamin C",
    "vitamin E",
    "transferrin",
    "ceruloplasmin",
    "retinopathy of prematurity",
    "bronchopulmonary dysplasia",
    "acetaminophen",
    "carbon tetrachloride",
    "CCl3 free radical",
    "fatty liver",
    "apolipoprotein",
    "centrilobular necrosis",
    "hemochromatosis",
    "Wilson disease",
    "metalloprotein",
  ],
  core: {
    what: "ISCHEMIA: inadequate blood supply to meet demand — mechanisms include ↓ arterial perfusion (eg, atherosclerosis), ↓ venous drainage (eg, testicular torsion, Budd-Chiari syndrome), shock. REGIONS MOST VULNERABLE TO HYPOXIA/ISCHEMIA AND SUBSEQUENT INFARCTION (the table, verbatim): BRAIN — ACA/MCA/PCA boundary areas; HEART — subendocardium of LV (the yellow lines in photograph A outline a subendocardial infarction); KIDNEY — straight segment of proximal tubule (medulla), thick ascending limb (medulla); LIVER — area around central vein (zone III); COLON — splenic flexure (Griffith point), rectosigmoid junction (Sudeck point). Footnotes: watershed areas (border zones) receive blood supply from the most distal branches of 2 arteries with limited collateral vascularity — susceptible to ischemia from hypoperfusion; the neurons most vulnerable to hypoxic-ischemic insults are the Purkinje cells of the cerebellum and the pyramidal cells of the hippocampus and neocortex (layers 3, 5, 6). TYPES OF INFARCTS: RED INFARCT — occurs in venous occlusion and tissues with multiple blood supplies (eg, liver, lung, intestine, testes), and with reperfusion (eg, after angioplasty); reperfusion injury is due to damage by free radicals. PALE INFARCT — occurs in solid organs with a single (endarterial) blood supply (eg, heart, kidney). FREE RADICAL INJURY: free radicals damage cells via membrane lipid peroxidation, protein modification, DNA breakage — initiated via radiation exposure (eg, cancer therapy), metabolism of drugs (phase I), redox reactions, nitric oxide (eg, inflammation), transition metals (eg, iron, copper; forming free radicals via the Fenton reaction), and WBC (eg, neutrophils, macrophages) oxidative burst; eliminated by scavenging enzymes (eg, catalase, superoxide dismutase, glutathione peroxidase), spontaneous decay, antioxidants (eg, vitamins A, C, E), and certain metal carrier proteins (eg, transferrin, ceruloplasmin). EXAMPLES: oxygen toxicity — retinopathy of prematurity (abnormal vascularization), bronchopulmonary dysplasia, reperfusion injury after thrombolytic therapy; drug/chemical toxicity — acetaminophen overdose (hepatotoxicity), carbon tetrachloride (converted by cytochrome P-450 into the CCl3 free radical → fatty liver [cell injury → ↓ apolipoprotein synthesis → fatty change], centrilobular necrosis); metal storage diseases — hemochromatosis (iron) and Wilson disease (copper).",
    why: "This page answers the question every ischemic vignette silently asks: WHERE does the body fail first, and WHAT COLOR is the damage? The vulnerability table is physiology made anatomy — each entry is a tissue living on the edge: the brain's watershed boundaries (fed only by the most distal branches of two arteries with limited collaterals), the subendocardium (the myocardium's farthest row from the epicardial arteries, squeezed hardest in systole), the medullary thick ascending limb and proximal straight tubule (the kidney's relatively hypoxic medulla doing salt work it can barely afford), the liver's zone III (the farthest hepatocytes from the portal triad, first to die in congestive and toxic injury), and the colon's two named bends (Griffith at the splenic flexure, Sudeck at the rectosigmoid junction) — the page even names the neurons that die first (Purkinje cells, hippocampal and neocortical pyramidal neurons), which is how a cardiac arrest becomes a selective memory loss. The red/pale fork is the infarct's color logic: blood can only pool in tissue that has somewhere to pool FROM — a second supply (liver, lung, intestine, testes) or a blocked vein — so those organs bleed into their infarcts (red), while endarterial solid organs (heart, kidney) stay anemic (pale). And reperfusion is the page's great irony: restoring flow through an angioplasty or a thrombolytic re-opens the vessel but delivers oxygen to tissue whose damaged enzymes now make radicals with it — the RED infarct after angioplasty is free-radical injury you can see. The free-radical economy closes the loop with the two lists the exam loves to shuffle — INITIATORS (radiation, phase I metabolism, redox reactions, nitric oxide, transition metals via Fenton, the WBC oxidative burst) against ELIMINATORS (catalase, superoxide dismutase, glutathione peroxidase, spontaneous decay, vitamins A/C/E, transferrin and ceruloplasmin) — and the example set gives each mechanism a face: the preterm retina and lung (oxygen toxicity), the acetaminophen liver and the CCl4 CCl3 radical chain (phase I drug metabolism, centrilobular because that is where P-450 concentrates), and hemochromatosis and Wilson disease (the metals that Fenton).",
    keyIdea:
      "Read every ischemia question as SUPPLY, SITE, and COLOR. SUPPLY: ↓ arterial perfusion (atherosclerosis), ↓ venous drainage (testicular torsion, Budd-Chiari), or shock. SITE — the vulnerable regions: brain ACA/MCA/PCA boundary areas (watershed); heart subendocardium of LV; kidney straight segment of proximal tubule + thick ascending limb (medulla); liver zone III around the central vein; colon splenic flexure (Griffith point) + rectosigmoid junction (Sudeck point) — watersheds being distal-branch border zones with limited collaterals, and the most vulnerable neurons being Purkinje cells and the pyramidal cells of hippocampus and neocortex (layers 3, 5, 6). COLOR: RED infarct — venous occlusion, multiple blood supplies (liver, lung, intestine, testes), or reperfusion (post-angioplasty; free-radical damage); PALE infarct — solid organs with a single endarterial supply (heart, kidney). THE FREE-RADICAL ECONOMY: damage = membrane lipid peroxidation, protein modification, DNA breakage; INITIATORS = radiation, phase I drug metabolism, redox reactions, nitric oxide, transition metals (iron, copper — Fenton), WBC oxidative burst; ELIMINATORS = catalase, superoxide dismutase, glutathione peroxidase, spontaneous decay, vitamins A, C, E, transferrin, ceruloplasmin; EXAMPLES = retinopathy of prematurity, bronchopulmonary dysplasia, post-thrombolytic reperfusion (oxygen toxicity); acetaminophen hepatotoxicity and CCl4 → P-450 → CCl3 → fatty liver with ↓ apolipoprotein synthesis + centrilobular necrosis (drug/chemical); hemochromatosis (iron) and Wilson disease (copper) (metal storage).",
  },
  mechanisms: [
    {
      id: "supply-demand-mismatch",
      title: "Supply, demand, and the sites that live on the edge: why each vulnerable region fails first",
      context: "The ischemia definition and the ORGAN/SUSCEPTIBLE REGION table with its two footnotes (book 206)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Blood supply fails to meet demand — by one of three routes",
            sublabel: "Input — ↓ arterial perfusion (eg, atherosclerosis), ↓ venous drainage (eg, testicular torsion, Budd-Chiari syndrome), or shock.",
            variant: "input",
          },
          {
            id: "watershed",
            label: "WATERSHED SITES STARVE FIRST — the border zones",
            sublabel: "Watershed areas receive blood from the most distal branches of 2 arteries with limited collateral vascularity — susceptible to ischemia from hypoperfusion: the ACA/MCA/PCA boundary areas of the brain, the splenic flexure (Griffith point) and rectosigmoid junction (Sudeck point) of the colon.",
            variant: "process",
          },
          {
            id: "demand",
            label: "HIGH-DEMAND SITES FAIL NEXT — the tissue on the edge",
            sublabel: "Heart: the subendocardium of the LV (the farthest myocardium from the epicardial supply, squeezed in systole). Kidney: the straight segment of the proximal tubule and the thick ascending limb in the relatively hypoxic medulla. Liver: zone III, around the central vein — the farthest hepatocytes from the portal triad.",
            variant: "process",
          },
          {
            id: "neurons",
            label: "THE SELECTIVE NEURONS — the cells that die first in hypoxic-ischemic insult",
            sublabel: "Purkinje cells of the cerebellum and pyramidal cells of the hippocampus and neocortex (layers 3, 5, 6) — why a cardiac arrest selectively takes memory and coordination.",
            variant: "process",
          },
          {
            id: "output",
            label: "Infarction — the necrosis that follows (and its color)",
            sublabel: "Output — the vulnerable region infarcts; the fork below decides red vs pale. Every entry in this table is the answer to 'which region first?'",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "watershed", label: "hypoperfusion" },
          { from: "trigger", to: "demand", label: "supply-demand mismatch" },
          { from: "watershed", to: "neurons", label: "if the brain" },
          { from: "demand", to: "output", label: "infarction" },
          { from: "neurons", to: "output", label: "selective loss" },
        ],
      },
    },
    {
      id: "free-radical-economy",
      title: "The free-radical economy: initiators against eliminators, and the reperfusion paradox",
      context: "The Types of infarcts pair and the Free radical injury block (book 206)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A radical-generating exposure or event occurs",
            sublabel: "Input — radiation (cancer therapy), phase I drug metabolism, redox reactions, nitric oxide (inflammation), transition metals (iron, copper — the Fenton reaction), or the WBC oxidative burst.",
            variant: "input",
          },
          {
            id: "damage",
            label: "THE THREE DAMAGES — membrane lipid peroxidation, protein modification, DNA breakage",
            sublabel: "The unpaired electron attacks whatever it touches: peroxidizing membrane lipids, modifying proteins, breaking DNA — the molecular basis of the injury.",
            variant: "process",
          },
          {
            id: "defense",
            label: "THE ELIMINATORS — the scavenging and carrying systems",
            sublabel: "Scavenging enzymes (catalase, superoxide dismutase, glutathione peroxidase), spontaneous decay, antioxidants (vitamins A, C, E), and metal carrier proteins (transferrin, ceruloplasmin) that keep Fenton metals from circulating free.",
            variant: "process",
          },
          {
            id: "reperfusion",
            label: "THE REPERFUSION PARADOX — the red infarct and the radicals it brings",
            sublabel: "Reperfusion (eg, after angioplasty) restores flow into infarcted tissue — the re-entry blood makes the infarct RED, and the oxygen delivered to damaged enzymatic machinery generates free radicals: reperfusion injury is due to damage by free radicals.",
            variant: "process",
          },
          {
            id: "output",
            label: "The example set — each mechanism with its disease face",
            sublabel: "Output — oxygen toxicity (retinopathy of prematurity, bronchopulmonary dysplasia, post-thrombolytic reperfusion); drug/chemical toxicity (acetaminophen hepatotoxicity; CCl4 converted by cytochrome P-450 into the CCl3 free radical → fatty liver [cell injury → ↓ apolipoprotein synthesis → fatty change], centrilobular necrosis); metal storage diseases (hemochromatosis iron, Wilson disease copper).",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "damage", label: "radicals form" },
          { from: "defense", to: "damage", label: "radicals scavenged" },
          { from: "damage", to: "reperfusion", label: "when flow returns" },
          { from: "reperfusion", to: "output", label: "the visible diseases" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "infarct-type-map",
      title: "The infarct type map — supply, site, and color (an original KYP adaptation)",
      caption:
        "An original KYP adaptation of the source page (book 206 — the ischemia definition, the ORGAN/SUSCEPTIBLE REGION table, the red/pale infarct pair, and the free-radical injury block; the three copyrighted gross photographs described in text): the ischemia panel (inadequate blood supply to meet demand — ↓ arterial perfusion [atherosclerosis], ↓ venous drainage [testicular torsion, Budd-Chiari syndrome], shock); the vulnerable-regions panel (brain ACA/MCA/PCA boundary areas, heart subendocardium of LV, kidney straight segment of proximal tubule + thick ascending limb, liver zone III around the central vein, colon splenic flexure Griffith point + rectosigmoid junction Sudeck point — with the watershed-area definition and the vulnerable-neuron footnote); the RED/PALE infarct fork (red: venous occlusion, multiple blood supplies [liver, lung, intestine, testes], reperfusion after angioplasty with free-radical injury; pale: solid organs with a single endarterial supply [heart, kidney]); and the free-radical economy panel — the three damages (membrane lipid peroxidation, protein modification, DNA breakage), the initiators (radiation, phase I metabolism, redox, nitric oxide, transition metals via Fenton, WBC oxidative burst) against the eliminators (catalase, superoxide dismutase, glutathione peroxidase, spontaneous decay, vitamins A/C/E, transferrin, ceruloplasmin), and the example set (retinopathy of prematurity, bronchopulmonary dysplasia, post-thrombolytic reperfusion; acetaminophen; CCl4 → CCl3 → fatty liver + centrilobular necrosis; hemochromatosis and Wilson disease).",
      notice:
        "The source page prints THREE COPYRIGHTED GROSS PHOTOGRAPHS with DUPLICATED lettering (two different images both carry 'A' — the heart subendocardial specimen at the table row and the lung red-infarcct specimen in the red-infarcct block; 'B' is the pale transmural heart infarct; a source quirk documented) — all three described in text in this note's tables, NEVER reproduced (the M32 convention). The tables and the free-radical text are carried verbatim. No margin mnemonics exist on the page (VLM census confirmed); nothing from the source's distinctive expression is carried.",
    },
    {
      kind: "table",
      title: "Book 206 — ischemia and the vulnerable-regions table (carried verbatim, with both footnotes)",
      intro:
        "The page's opening definition and the ORGAN/SUSCEPTIBLE REGION table, as printed — including the two lettered footnotes the exam quotes.",
      columns: ["ELEMENT", "PRINTED CONTENT — verbatim (book 206)"],
      rows: [
        ["Ischemia (definition)", "Inadequate blood supply to meet demand. Mechanisms include ↓ arterial perfusion (eg, atherosclerosis), ↓ venous drainage (eg, testicular torsion, Budd-Chiari syndrome), shock."],
        ["Table header", "Regions most vulnerable to hypoxia/ischemia and subsequent infarction: ORGAN · SUSCEPTIBLE REGION."],
        ["Brain", "ACA/MCA/PCA boundary areas (a, b)."],
        ["Heart", "Subendocardium of LV (yellow lines in A outline a subendocardial infarction)."],
        ["Kidney", "Straight segment of proximal tubule (medulla). Thick ascending limb (medulla)."],
        ["Liver", "Area around central vein (zone III)."],
        ["Colon", "Splenic flexure (Griffith point) (a), rectosigmoid junction (Sudeck point) (a)."],
        ["Footnote a — watersheds", "Watershed areas (border zones) receive blood supply from most distal branches of 2 arteries with limited collateral vascularity. These areas are susceptible to ischemia from hypoperfusion."],
        ["Footnote b — the vulnerable neurons", "Neurons most vulnerable to hypoxic-ischemic insults include Purkinje cells of the cerebellum and pyramidal cells of the hippocampus and neocortex (layers 3, 5, 6)."],
      ],
      caption:
        "The vulnerability map: three supply-failure mechanisms, five organs' first-to-die regions, the watershed definition that explains two of them, and the named neurons that make anoxic injury selective.",
    },
    {
      kind: "table",
      title: "Book 206 — the infarct types and free radical injury (carried verbatim)",
      intro:
        "The red/pale pair and the free-radical block, as printed — damage, initiators, eliminators, and the three example groups.",
      columns: ["BLOCK · FIELD", "PRINTED CONTENT — verbatim (book 206)"],
      rows: [
        ["Red infarct", "Occurs in venous occlusion and tissues with multiple blood supplies (eg, liver, lung, intestine, testes), and with reperfusion (eg, after angioplasty). Reperfusion injury is due to damage by free radicals."],
        ["Pale infarct", "Occurs in solid organs with a single (endarterial) blood supply (eg, heart, kidney)."],
        ["Free radical injury — damage", "Free radicals damage cells via membrane lipid peroxidation, protein modification, DNA breakage."],
        ["— initiators", "Initiated via radiation exposure (eg, cancer therapy), metabolism of drugs (phase I), redox reactions, nitric oxide (eg, inflammation), transition metals (eg, iron, copper; form free radicals via Fenton reaction), WBC (eg, neutrophils, macrophages) oxidative burst."],
        ["— eliminators", "Free radicals can be eliminated by scavenging enzymes (eg, catalase, superoxide dismutase, glutathione peroxidase), spontaneous decay, antioxidants (eg, vitamins A, C, E), and certain metal carrier proteins (eg, transferrin, ceruloplasmin)."],
        ["— example: oxygen toxicity", "Oxygen toxicity: retinopathy of prematurity (abnormal vascularization), bronchopulmonary dysplasia, reperfusion injury after thrombolytic therapy."],
        ["— example: drug/chemical toxicity", "Drug/chemical toxicity: acetaminophen overdose (hepatotoxicity), carbon tetrachloride (converted by cytochrome P-450 into CCl3 free radical → fatty liver [cell injury → ↓ apolipoprotein synthesis → fatty change], centrilobular necrosis)."],
        ["— example: metal storage diseases", "Metal storage diseases: hemochromatosis (iron) and Wilson disease (copper)."],
      ],
      caption:
        "The color fork (multiple supplies or venous occlusion bleed red; endarterial organs stay pale) and the radical economy — two lists the exam shuffles, three example groups that give each initiator its disease face.",
    },
    {
      kind: "table",
      title: "Book 206 — the three photographs, described in text (COPYRIGHTED — never reproduced; the duplicated-A quirk documented)",
      intro:
        "The page prints three gross photographs with duplicated lettering — two different images both carry 'A' (a source quirk documented below). Each is a copyrighted image; the descriptions are the note's visual record of them.",
      columns: ["PHOTOGRAPH", "WHAT IT SHOWS (VLM census description — book 206)"],
      rows: [
        ["A — at the heart table row (gross specimen, heart)", "A heart cross-section showing the left ventricle, with yellow outline lines tracing a pale subendocardial region — the subendocardial infarction the table's Heart row describes."],
        ["A — in the red-infarcct block (gross specimen, lung)", "Lung parenchyma with a dark-red, congested, wedge-shaped hemorrhagic (red) infarct at the periphery — the red infarct of a tissue with multiple blood supplies. A second image carrying the same letter A — the duplicated-lettering quirk."],
        ["B — in the pale-infarcct block (gross specimen, heart)", "A heart (ventricular wall) with a large, pale/white transmural infarct clearly demarcated by drawn yellow lines — the pale infarct of a solid organ with a single endarterial supply."],
      ],
      caption:
        "Three copyrighted images, three one-line descriptions — and a lettering quirk: the source reuses 'A' for two different specimens (heart subendocardial at the table, lung red infarct at the infarct-types block). The descriptions carry the discriminators: the yellow-outlined subendocardial zone, the peripheral red wedge, and the demarcated pale transmural infarct.",
    },
    {
      kind: "callout",
      variant: "exam",
      title: "The three routing rules this page teaches",
      body:
        "Rule 1 — ROUTE THE COLOR BY THE SUPPLY: tissues with MULTIPLE blood supplies (liver, lung, intestine, testes) or a blocked VEIN make RED infarcts; solid organs with a single (endarterial) supply (heart, kidney) make PALE ones — and REPERFUSION (after angioplasty or thrombolytics) turns any infarct red while adding free-radical injury to it. Rule 2 — NAME THE VULNERABLE SITE: the brain's ACA/MCA/PCA boundary areas (watershed — distal branches of 2 arteries, limited collaterals, hypoperfusion-sensitive), the heart's subendocardium, the kidney's medullary straight proximal tubule and thick ascending limb, the liver's zone III around the central vein, and the colon's Griffith (splenic flexure) and Sudeck (rectosigmoid) points — plus the neurons that die first (Purkinje cells; pyramidal cells of hippocampus and neocortex, layers 3, 5, 6). Rule 3 — BALANCE THE RADICAL LEDGER: INITIATORS are radiation, phase I drug metabolism, redox reactions, nitric oxide, transition metals (iron, copper — Fenton), and the WBC oxidative burst; ELIMINATORS are catalase, superoxide dismutase, glutathione peroxidase, spontaneous decay, vitamins A, C, E, and the carriers transferrin and ceruloplasmin. The example set assigns each a disease: oxygen toxicity (retinopathy of prematurity, bronchopulmonary dysplasia, post-thrombolytic reperfusion), phase I drug metabolism (acetaminophen hepatotoxicity; CCl4 → P-450 → the CCl3 radical → fatty liver via ↓ apolipoprotein synthesis, centrilobular necrosis), and the metal storage diseases (hemochromatosis iron, Wilson copper).",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 74-year-old woman on hemodialysis becomes hypotensive during a session and later develops abdominal pain; colonoscopy shows ischemic changes at the splenic flexure.",
        discriminator: "Griffith point — a watershed area fed by the most distal branches of 2 arteries with limited collateral vascularity",
        concept: "The watershed principle",
        answer:
          "The splenic flexure (Griffith point) and the rectosigmoid junction (Sudeck point) are the colon's watershed areas — border zones receiving blood from the most distal branches of two arteries with limited collaterals, susceptible to ischemia from hypoperfusion. A hypotensive session is exactly the hypoperfusion the region cannot tolerate; the brain's ACA/MCA/PCA boundary areas fail by the same rule.",
      },
      {
        stem: "A 61-year-old man with an acute coronary occlusion undergoes successful angioplasty with stent placement; hours later the infarct zone appears hemorrhagic on contrast study, and his troponin rise exceeds the expected extent.",
        discriminator: "Reperfusion converts the infarct toward red and adds free-radical injury — reperfusion injury is due to damage by free radicals",
        concept: "The reperfusion paradox",
        answer:
          "Reperfusion (eg, after angioplasty) restores flow into infarcted tissue, making the infarct RED (blood re-enters a damaged bed) and delivering oxygen to enzymatically damaged tissue that now generates free radicals — reperfusion injury is due to damage by free radicals, the same mechanism as the post-thrombolytic injury in the oxygen-toxicity example list.",
      },
      {
        stem: "An industrial worker with solvent exposure develops hepatomegaly with steatosis on ultrasound and elevated transaminases; biopsy shows centrilobular necrosis with fatty change.",
        discriminator: "Carbon tetrachloride — converted by cytochrome P-450 into the CCl3 free radical → fatty liver (↓ apolipoprotein synthesis → fatty change), centrilobular necrosis",
        concept: "Phase I metabolism made pathologic",
        answer:
          "CCl4 is converted by cytochrome P-450 into the CCl3 free radical: membrane lipid peroxidation and protein modification injure the centrilobular hepatocytes (where P-450 concentrates), the cell injury drops apolipoprotein synthesis, and triglyceride export fails → fatty change. The centrilobular pattern IS the zone III vulnerability of the same page's liver row — the farthest hepatocytes from the portal triad.",
      },
    ],
    traps: [
      {
        a: "Red infarct",
        b: "Pale infarct",
        whyConfused: "Both are infarcts; the color is the discriminator",
        keyDifference: "Red = venous occlusion, tissues with multiple blood supplies (liver, lung, intestine, testes), or reperfusion (angioplasty); Pale = solid organs with a single (endarterial) blood supply (heart, kidney)",
        clue: "Two supplies, a blocked vein, or blood re-entering → red; one endarterial artery, no re-entry → pale",
      },
      {
        a: "The vulnerable regions (organ level)",
        b: "The vulnerable neurons (cell level)",
        whyConfused: "Both print on the same page as 'most vulnerable to hypoxic-ischemic injury'",
        keyDifference: "Regions: ACA/MCA/PCA boundary areas, subendocardium of LV, medullary straight proximal tubule and thick ascending limb, zone III, Griffith and Sudeck points; Neurons: Purkinje cells of the cerebellum and pyramidal cells of the hippocampus and neocortex (layers 3, 5, 6)",
        clue: "'Which region/organ' → the table; 'which neurons die first' (after cardiac arrest) → the footnote",
      },
      {
        a: "Free-radical initiators",
        b: "Free-radical eliminators",
        whyConfused: "Two lists of enzymes and substances on one page; options get shuffled",
        keyDifference: "INITIATORS: radiation, phase I drug metabolism, redox reactions, nitric oxide, transition metals (iron, copper — Fenton), WBC oxidative burst; ELIMINATORS: catalase, superoxide dismutase, glutathione peroxidase, spontaneous decay, vitamins A, C, E, transferrin, ceruloplasmin",
        clue: "An enzyme that ENDS a radical is an eliminator (catalase, SOD, glutathione peroxidase); vitamins and metal carriers protect; metals themselves and the oxidative burst generate",
      },
    ],
    pivots: [
      {
        lookAlike: "Arterial vs venous occlusion — the same organ, different colors and mechanisms",
        differentiator: "↓ arterial perfusion (eg, atherosclerosis) starves tissue and trends pale in endarterial organs; ↓ venous drainage (eg, testicular torsion, Budd-Chiari syndrome) congests it and trends red — blood arrives but cannot leave",
        correctPath: "Identify which side of the circulation failed, then apply the supply rule: venous failure or a second supply → red; single endarterial supply → pale; add reperfusion and any infarct reddens",
      },
      {
        lookAlike: "The metal fork — hemochromatosis vs Wilson disease",
        differentiator: "Both are metal storage diseases that generate free radicals via the Fenton reaction — hemochromatosis with IRON, Wilson disease with COPPER — and both appear in the example list",
        correctPath: "Iron overload (hemochromatosis) or copper overload (Wilson) in any free-radical or metal-storage stem → the Fenton reaction is the mechanism; the carriers that prevent it are transferrin (iron) and ceruloplasmin (copper)",
      },
    ],
    miniCase: {
      vignette:
        "A 63-year-old man presents with 2 hours of crushing chest pain; ECG shows ST elevation in the anteroseptal leads, and emergent angiography reveals a complete proximal LAD occlusion. He undergoes successful balloon angioplasty with stent placement, and the vessel is angiographically normal afterward. Twelve hours later, his peak troponin I is higher than the projected infarct size suggested, the ST segments have resolved only partially, and a repeat contrast study shows a hemorrhagic-appearing infarct core. In a separate case the same week, a 58-year-old man with a mechanical prosthetic aortic valve develops Budd-Chiari syndrome, and his liver biopsy shows congestion-centered necrosis around the central veins.",
      question: "Explain the hemorrhagic appearance and the excess injury in the first patient, and name the mechanism that the second patient's liver injury shares with it.",
      options: [
        {
          label: "Reperfusion after angioplasty — blood re-enters the infarct (a red infarct) and free radicals generated in the reperfused tissue add injury; Budd-Chiari shares the venous-congestion route to a red infarct",
          text: "The reopened vessel turned the infarct red and the returning oxygen made radicals; the congested liver is the same red logic from the venous side.",
          correct: true,
          why: "Correct on both layers. The first patient's hemorrhagic infarct core is REPERFUSION at work: the source prints that red infarcts occur 'with reperfusion (eg, after angioplasty)' and that 'reperfusion injury is due to damage by free radicals' — oxygen delivered to enzymatically damaged tissue generates the radicals whose damage (membrane lipid peroxidation, protein modification, DNA breakage) extends the injury beyond the original occlusion (the excess troponin). The second patient's Budd-Chiari syndrome is the page's own named cause of ↓ venous drainage — congested blood cannot leave, the necrosis centers on zone III around the central veins (the liver's vulnerable region from the same table), and the infarct trends red by the venous route. Both cases converge on the red side of the fork, one by reperfusion and one by venous occlusion.",
        },
        {
          label: "The infarct was red from the start because the heart has multiple blood supplies",
          text: "Myocardium is doubly supplied, so the infarct was hemorrhagic from the outset.",
          why: "Wrong supply logic: the heart is the page's PALE-infarcct example — a solid organ with a single (endarterial) blood supply. The red appearance arrived WITH the angioplasty, which is the printed reperfusion context; before the vessel opened, the infarct was the expected pale one.",
        },
        {
          label: "Free-radical injury from metal storage disease — undiagnosed hemochromatosis explains both patients",
          text: "Iron overload generated the radicals in the infarct and the liver injury.",
          why: "Right mechanism family, wrong trigger: hemochromatosis (iron) and Wilson disease (copper) are the metal storage diseases that form radicals via the Fenton reaction, but the first patient's radicals came from REPERFUSED ischemic tissue and the second's from VENOUS CONGESTION (Budd-Chiari is the printed example of decreased venous drainage, not a metal disease). No iron or copper story exists in either stem.",
        },
        {
          label: "A watershed infarct — the LAD supplies a border zone between two vascular territories",
          text: "The occlusion hit a watershed area, which is why the injury exceeded expectations.",
          why: "Wrong geography: watershed areas are border zones fed by the most distal branches of 2 arteries (the brain's ACA/MCA/PCA boundaries; the colon's Griffith and Sudeck points). The proximal LAD is an endarterial supply to a defined territory — the excess injury is reperfusion, not watershed hypoperfusion, and the heart's vulnerable site is the SUBENDOCARDIUM, not a boundary zone.",
        },
        {
          label: "Carbon tetrachloride-type phase I injury — the contrast agent generated CCl3-like radicals",
          text: "The angiographic contrast was metabolized by cytochrome P-450 into a radical that injured the myocardium.",
          why: "Conflated example: CCl4 → P-450 → CCl3 is the drug/chemical-toxicity example, and it produces CENTRILOBULAR NECROSIS in the LIVER (zone III, where P-450 concentrates), not a hemorrhagic myocardial infarct. The first patient's radicals are the reperfusion kind — generated by oxygen meeting damaged ischemic tissue — not a xenobiotic's phase I metabolite.",
        },
      ],
      reasoning:
        "The stem pairs the two roads into a RED infarct so the fork must be walked explicitly. Patient 1 is the ARTERIAL story: an endarterial LAD territory infarct (pale by default — heart and kidney are the printed pale examples) that converts to hemorrhagic when the angioplasty reopens the vessel — the printed 'with reperfusion (eg, after angioplasty)' context — with the excess troponin and partial ST resolution marking the FREE-RADICAL reperfusion injury the source attributes the damage to. Patient 2 is the VENOUS story: Budd-Chiari syndrome is one of the page's two named examples of ↓ venous drainage (with testicular torsion), the blood that arrives cannot leave, the necrosis centers on the central-vein region (zone III — the liver's row in the same vulnerability table), and the infarct trends red from congestion. The distractors each steal a real page element: the multiple-supplies rule (but the heart is the endarterial example), the Fenton metals (but no metal exposure exists), the watershed principle (but the LAD is not a border zone, and the subendocardium — not a watershed — is the heart's vulnerable region), and the CCl3 chain (but that radical is a liver centrilobular lesion, not a myocardial reperfusion injury). The answer required is the page's own sentence: red infarcts occur with reperfusion, and reperfusion injury is due to damage by free radicals.",
    },
  },
  mnemonics: [
    {
      code: "ARTERY IN, VEIN OUT, SHOCK BOTH",
      meaning: "Ischemia's three mechanisms: ↓ ARTERIAL perfusion (eg, atherosclerosis), ↓ VENOUS drainage (eg, testicular torsion, Budd-Chiari syndrome), and SHOCK — inadequate blood supply to meet demand by either or both routes.",
      memorizes: "The ischemia mechanism list",
      whenToUse: "Any 'mechanism of ischemia' or artery-vs-vein routing question",
      clinical: "A plaque starves downstream tissue; a twisted cord or a hepatic vein thrombus dams the outflow; hypotension starves everything at once — especially the watersheds.",
    },
    {
      code: "TWO SUPPLIES TURN RED, ONE STAYS PALE",
      meaning: "The infarct color rule: tissues with multiple blood supplies (liver, lung, intestine, testes) or venous occlusion make RED infarcts; solid organs with a single (endarterial) supply (heart, kidney) make PALE ones — and reperfusion reddens any of them while free radicals add injury.",
      memorizes: "The red/pale fork",
      whenToUse: "Any infarct-appearance or organ-supply question",
      clinical: "The hemorrhagic lung wedge and the congested Budd-Chiari liver against the pale MI and the pale renal infarct — the supply count decides the color.",
    },
    {
      code: "WATERSHEDS STARVE FIRST",
      meaning: "Border zones fed by the most distal branches of 2 arteries with limited collateral vascularity fail first under hypoperfusion: the brain's ACA/MCA/PCA boundary areas, the colon's splenic flexure (Griffith point) and rectosigmoid junction (Sudeck point).",
      memorizes: "The watershed sites and their definition",
      whenToUse: "Any hypoperfusion, hypotension, or border-zone infarct question",
      clinical: "The dialysis-hypotension colitis at the splenic flexure; the watershed stroke after a cardiac arrest — the territories between two arteries die together.",
    },
    {
      code: "SCAVENGE, DECAY, CARRY",
      meaning: "The free-radical eliminators in three families: SCAVENGE (catalase, superoxide dismutase, glutathione peroxidase), DECAY (spontaneous), and CARRY/provide (antioxidants — vitamins A, C, E — and the metal carriers transferrin and ceruloplasmin that keep Fenton metals unavailable).",
      memorizes: "The eliminator list against the initiator list",
      whenToUse: "Any free-radical defense or enzyme-classification question",
      clinical: "The initiators on the other side: radiation, phase I metabolism, redox reactions, nitric oxide, transition metals (Fenton), and the WBC oxidative burst — with ROP, BPD, acetaminophen, CCl4, hemochromatosis, and Wilson as their disease faces.",
    },
  ],
  rapidReview: {
    s30: [
      "Ischemia: inadequate blood supply to meet demand — ↓ arterial perfusion (eg, atherosclerosis), ↓ venous drainage (eg, testicular torsion, Budd-Chiari syndrome), shock",
      "Vulnerable regions: brain — ACA/MCA/PCA boundary areas; heart — subendocardium of LV; kidney — straight segment of proximal tubule and thick ascending limb (medulla); liver — area around central vein (zone III); colon — splenic flexure (Griffith point), rectosigmoid junction (Sudeck point)",
      "Watersheds: border zones fed by the most distal branches of 2 arteries with limited collateral vascularity — susceptible to ischemia from hypoperfusion; the most vulnerable neurons: Purkinje cells of the cerebellum, pyramidal cells of the hippocampus and neocortex (layers 3, 5, 6)",
      "Red infarct: venous occlusion, multiple blood supplies (liver, lung, intestine, testes), reperfusion (eg, after angioplasty) — reperfusion injury due to free radicals; Pale infarct: solid organs with a single (endarterial) blood supply (heart, kidney)",
      "Free radicals: damage via membrane lipid peroxidation, protein modification, DNA breakage; initiated by radiation, phase I metabolism, redox reactions, nitric oxide, transition metals (iron, copper — Fenton), WBC oxidative burst; eliminated by catalase, superoxide dismutase, glutathione peroxidase, spontaneous decay, vitamins A, C, E, transferrin, ceruloplasmin — examples: ROP, BPD, post-thrombolytic reperfusion; acetaminophen; CCl4 → P-450 → CCl3 → fatty liver (↓ apolipoprotein synthesis), centrilobular necrosis; hemochromatosis (iron), Wilson disease (copper)",
    ],
    m3: [
      "The fork: two supplies or a blocked vein → red; one endarterial supply → pale; reperfusion reddens and adds free-radical injury",
      "The five vulnerable sites in table order: brain boundary areas, LV subendocardium, medullary straight proximal tubule + thick ascending limb, zone III, Griffith + Sudeck points",
      "The radical ledger: initiators (radiation, phase I, redox, NO, Fenton metals, oxidative burst) vs eliminators (catalase/SOD/glutathione peroxidase, decay, vitamins A/C/E, transferrin/ceruloplasmin)",
      "The CCl3 chain: CCl4 → cytochrome P-450 → CCl3 radical → cell injury → ↓ apolipoprotein synthesis → fatty change + centrilobular necrosis (zone III, where P-450 concentrates)",
    ],
    m10: [
      "Census: p228 (book 206) carries THREE cmyk JPEG rasters (~188x137, ~265x264, ~208x209 at 150 dpi) — all GROSS photographs, no micrographs, no drawn figures (the yellow 'outline lines' are drawn annotations ON the photographs)",
      "DUPLICATED LETTERING (a source quirk, documented): two different images both carry 'A' — the heart cross-section at the table row (yellow lines tracing a pale subendocardial region) and the lung with a dark-red wedge-shaped hemorrhagic infarct at the red-infarcct block; 'B' is the heart with a yellow-outlined pale transmural infarct",
      "The text layer prints the 'A' marker at raw 6 (before the PATHOLOGY banner — the heart image's letter) and the A/B letter row at raw 82-84 after the indd footer (the M39 footer-split pattern)",
      "No margin notes or mnemonics on the page (VLM census confirmed)",
      "The page is otherwise pure text: the definition, the 5-organ table with 2 footnotes, the red/pale pair, and the free-radical block with its 3 example groups — the registry visual is a KYP adaptation, not a redraw of any source figure",
    ],
  },
  recall: [
    {
      q: "State the ischemia definition and its three mechanisms verbatim.",
      a: "Inadequate blood supply to meet demand. Mechanisms include ↓ arterial perfusion (eg, atherosclerosis), ↓ venous drainage (eg, testicular torsion, Budd-Chiari syndrome), shock.",
    },
    {
      q: "Carry the vulnerable-regions table verbatim — all five organs and both footnotes.",
      a: "BRAIN — ACA/MCA/PCA boundary areas. HEART — Subendocardium of LV (yellow lines in A outline a subendocardial infarction). KIDNEY — Straight segment of proximal tubule (medulla); thick ascending limb (medulla). LIVER — Area around central vein (zone III). COLON — Splenic flexure (Griffith point), rectosigmoid junction (Sudeck point). FOOTNOTE a: watershed areas (border zones) receive blood supply from most distal branches of 2 arteries with limited collateral vascularity — susceptible to ischemia from hypoperfusion. FOOTNOTE b: neurons most vulnerable to hypoxic-ischemic insults include Purkinje cells of the cerebellum and pyramidal cells of the hippocampus and neocortex (layers 3, 5, 6).",
    },
    {
      q: "State the red and pale infarct rules verbatim.",
      a: "RED INFARCT: occurs in venous occlusion and tissues with multiple blood supplies (eg, liver, lung, intestine, testes), and with reperfusion (eg, after angioplasty). Reperfusion injury is due to damage by free radicals. PALE INFARCT: occurs in solid organs with a single (endarterial) blood supply (eg, heart, kidney).",
    },
    {
      q: "Carry the free-radical block verbatim — damage, initiators, eliminators.",
      a: "DAMAGE: free radicals damage cells via membrane lipid peroxidation, protein modification, DNA breakage. INITIATORS: radiation exposure (eg, cancer therapy), metabolism of drugs (phase I), redox reactions, nitric oxide (eg, inflammation), transition metals (eg, iron, copper; form free radicals via Fenton reaction), WBC (eg, neutrophils, macrophages) oxidative burst. ELIMINATORS: scavenging enzymes (eg, catalase, superoxide dismutase, glutathione peroxidase), spontaneous decay, antioxidants (eg, vitamins A, C, E), and certain metal carrier proteins (eg, transferrin, ceruloplasmin).",
    },
    {
      q: "Walk the three free-radical example groups with their mechanisms.",
      a: "OXYGEN TOXICITY: retinopathy of prematurity (abnormal vascularization), bronchopulmonary dysplasia, reperfusion injury after thrombolytic therapy. DRUG/CHEMICAL TOXICITY: acetaminophen overdose (hepatotoxicity); carbon tetrachloride (converted by cytochrome P-450 into CCl3 free radical → fatty liver [cell injury → ↓ apolipoprotein synthesis → fatty change], centrilobular necrosis). METAL STORAGE DISEASES: hemochromatosis (iron) and Wilson disease (copper).",
    },
  ],
  related: [
    {
      title: "Atherosclerosis",
      topicId: "atherosclerosis",
      note: "The plaque is the page's first-listed mechanism made physical — ↓ arterial perfusion from a stenosed artery, the pale endarterial infarct downstream, and the reperfusion question the moment the catheter opens it.",
    },
    {
      title: "Necrosis: The Five Morphologic Patterns",
      topicId: "necrosis-types",
      note: "The infarct is the EVENT; this note's table is the RESULT — most infarcts coagulative, the brain's liquefactive, and the color logic (red vs pale) deciding what the dead tissue looks like grossly.",
    },
    {
      title: "Oxidative Phosphorylation & the ETC",
      topicId: "oxidative-phosphorylation",
      note: "Ischemia starves the ETC (the ATP collapse of cell injury), and reperfusion floods a damaged chain with electrons — the radical-generating chemistry this page's initiators list formalizes.",
    },
    {
      title: "Vitamins E & K",
      topicId: "vitamins-e-k",
      note: "Vitamin E is this page's lipid-soluble antioxidant — one of the printed radical eliminators; the fat-soluble-vitamin note explains why membranes specifically need it.",
    },
  ],
  crossLinks: [
    {
      subject: "Cardiology (the MI and its reperfusion)",
      connection:
        "The subendocardium of the LV is the heart's vulnerable region (the farthest myocardium from the epicardial supply), and the angioplasty/thrombolytic that saves it is the same reperfusion that reddens the infarct and adds free-radical injury — the page's two heart facts are one clinical story.",
    },
    {
      subject: "Neonatology (oxygen toxicity)",
      connection:
        "Retinopathy of prematurity and bronchopulmonary dysplasia are free-radical injury by therapeutic oxygen — the example list's warning that oxygen itself is an initiator in the preterm retina and lung.",
    },
    {
      subject: "Hepatology (zone III and Budd-Chiari)",
      connection:
        "The liver's vulnerable region is zone III around the central vein — the first to die in congestive and toxic injury alike; Budd-Chiari's venous drainage failure and CCl4's centrilobular CCl3 radical both strike the same farthest-from-the-triad hepatocytes.",
    },
    {
      subject: "Toxicology (phase I metabolism)",
      connection:
        "Metabolism of drugs (phase I) is a printed radical initiator — acetaminophen's hepatotoxicity and CCl4's CCl3 radical are cytochrome P-450 chemistry turning xenobiotics into radicals, concentrated where P-450 lives.",
    },
  ],
};
