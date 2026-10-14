import type { KypUsMLENote } from "../types";

// Biochemistry — Metabolism (E-batch, book order 18, final Biochemistry topic).
// Source: First Aid 2026, Part 1 pdf 114 / book 92
// (abetalipoproteinemia; familial dyslipidemias)

export const familialDyslipidemias: KypUsMLENote = {
  id: "familial-dyslipidemias",
  title: "Abetalipoproteinemia & Familial Dyslipidemias",
  subtitle:
    "The two failure families of lipid transport — abetalipoproteinemia, where an autosomal recessive mutation in microsomal transfer protein (MTP) leaves no apo B48– or apo B100–containing particles at all (chylomicrons, VLDL, LDL absent: infant fat malabsorption and steatorrhea, then retinitis pigmentosa, spinocerebellar degeneration from vitamin E deficiency, progressive ataxia, and acanthocytosis), and the familial dyslipidemias type I through IV, each one broken step of the transport map — LPL/apo CII deficiency piling up chylomicrons, absent LDL receptors or defective apo B100 piling up LDL, defective apoE (type thrEE) piling up remnants, and hepatic VLDL overproduction piling up triglyceride.",
  subject: "Biochemistry",
  system: "Section II · High-Yield General Principles — Metabolism",
  pilotCategory: "Metabolism — abetalipoproteinemia, familial dyslipidemias type I–IV, xanthomas, pancreatitis, atherosclerosis risk",
  difficulty: 2,
  readTime: 10,
  sourceRef:
    "First Aid 2026, Part 1 pp. 92 (abetalipoproteinemia; familial dyslipidemias)",
  tags: [
    "abetalipoproteinemia",
    "microsomal transfer protein",
    "MTP",
    "apobetalipoproteinemia",
    "familial dyslipidemia",
    "hyperchylomicronemia",
    "hypercholesterolemia",
    "dysbetalipoproteinemia",
    "hypertriglyceridemia",
    "familial hypercholesterolemia",
    "LDL receptor",
    "apo B100",
    "apo CII deficiency",
    "lipoprotein lipase deficiency",
    "apoE",
    "type thrEE",
    "acanthocytosis",
    "retinitis pigmentosa",
    "spinocerebellar degeneration",
    "vitamin E deficiency",
    "steatorrhea",
    "failure to thrive",
    "eruptive xanthomas",
    "tendon xanthomas",
    "palmar xanthomas",
    "corneal arcus",
    "pancreatitis",
    "creamy layer",
  ],
  core: {
    what: "Abetalipoproteinemia is autosomal recessive, from a mutation in the gene that encodes microsomal transfer protein (MTP): chylomicrons, VLDL, and LDL are absent — a deficiency in apo B48– and apo B100–containing lipoproteins. Affected infants present with severe fat malabsorption, steatorrhea, and failure to thrive; later manifestations include retinitis pigmentosa, spinocerebellar degeneration due to vitamin E deficiency, progressive ataxia, and acanthocytosis. Intestinal biopsy shows lipid-laden enterocytes. Treatment is restriction of long-chain fatty acids and large doses of oral vitamin E. The familial dyslipidemias map onto the transport circuit: type I (hyperchylomicronemia, AR) — lipoprotein lipase or apo CII deficiency raising chylomicrons, TG, and cholesterol, presenting with pancreatitis, hepatosplenomegaly, and eruptive/pruritic xanthomas with no increased risk for atherosclerosis, and a creamy layer in the supernatant; type II (hypercholesterolemia, AD) — absent or defective LDL receptors, or defective apo B100, raising LDL and cholesterol (IIa) or LDL, cholesterol, and VLDL (IIb), with heterozygotes (1:500) at cholesterol ≈300 mg/dL, homozygotes (very rare) ≥700 mg/dL, accelerated atherosclerosis (MI possibly before age 20), tendon (Achilles) xanthomas, and corneal arcus; type III (dysbetalipoproteinemia, AR) — apoE defective (defective in type thrEE), raising chylomicron and VLDL remnants and TG, with premature atherosclerosis and tuberoeruptive and palmar xanthomas; type IV (hypertriglyceridemia, AD) — hepatic overproduction of VLDL, raising VLDL and TG, with hypertriglyceridemia (>1000 mg/dL) that can cause acute pancreatitis, related to insulin resistance.",
    why: "This page is where the transport map from the previous topic becomes four disease signatures plus one total-failure syndrome. The exam logic is always the same two questions: which particle is stuck, and what does its stuck-ness cause? Type I and IV both raise TG and both cause pancreatitis, but type I is AR with LPL/apo CII failure from birth and no atherosclerosis, while type IV is AD with hepatic VLDL overproduction tied to insulin resistance. Type II is the only one whose signature is cholesterol — and the only one with tendon xanthomas and MI before 20. Type III is the apoE (thrEE) remnant disease with the palmar xanthomas. Abetalipoproteinemia stands apart as the complete absence of the B-particles: no chylomicrons, no VLDL, no LDL — fat malabsorption plus the neuro-ophthalmic wreckage of untransported vitamin E, and the two findings that seal it: acanthocytes on the smear and lipid-laden enterocytes on biopsy.",
    keyIdea: "Read every dyslipidemia as one broken step of the transport map. Step 3 broken (LPL or apo CII) → chylomicrons stuck → TG, pancreatitis, eruptive xanthomas, creamy supernatant, no atherosclerosis (type I). Step 7 broken (LDL receptor or apo B100) → LDL stuck → cholesterol, tendon xanthomas, corneal arcus, MI before 20 (type II). The remnant-return address broken (apoE — defective in type thrEE) → remnants stuck → premature atherosclerosis with palmar xanthomas (type III). Step 4 overactive (hepatic VLDL overproduction, insulin resistance) → TG >1000 → pancreatitis (type IV). And abetalipoproteinemia is the whole map shut down at the assembly point: MTP fails, no apoB particles are built at all, enterocytes stuff with lipid they cannot export, and the fat-soluble-vitamin economy collapses — most visibly vitamin E, whose absence writes the retinitis pigmentosa and spinocerebellar degeneration.",
  },
  mechanisms: [
    {
      id: "mtp-assembly-failure",
      title: "MTP failure — the map with no couriers",
      context: "Abetalipoproteinemia (AR, microsomal transfer protein mutation)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Autosomal recessive mutation in the gene encoding microsomal transfer protein (MTP)",
            sublabel: "Input — the apoB-lipoprotein assembly enzyme is missing.",
            variant: "input",
          },
          {
            id: "s1",
            label: "No apo B48– or apo B100–containing lipoproteins can be assembled: chylomicrons, VLDL, LDL absent",
            sublabel: "Process — both circuits start with nothing to ship.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Intestinal cell absorbs dietary fat but cannot export it — biopsy shows lipid-laden enterocytes; infants have severe fat malabsorption, steatorrhea, failure to thrive",
            sublabel: "Process — the gut side of the failure.",
            variant: "process",
          },
          {
            id: "s3",
            label: "No chylomicron/VLDL/LDL traffic means fat-soluble vitamin transport collapses — vitamin E deficiency drives retinitis pigmentosa, spinocerebellar degeneration, progressive ataxia; membranes deform into acanthocytes",
            sublabel: "Process — the transport-dependent deficiency syndrome.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Treatment: restriction of long-chain fatty acids, large doses of oral vitamin E",
            sublabel: "Output — sidestep the missing couriers, replace the lost vitamin.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "no assembly" },
          { from: "s1", to: "s2", label: "lipid trapped in enterocytes" },
          { from: "s1", to: "s3", label: "no vitamin E transport" },
          { from: "s3", to: "o1", label: "treat" },
        ],
        caption:
          "Abetalipoproteinemia is the total-failure counterpart of the dyslipidemias: instead of one step breaking, the assembly machinery itself (MTP) is missing, so neither apo B48 (chylomicrons) nor apo B100 (VLDL, LDL) particles exist. The enterocyte becomes a warehouse with no loading dock — lipid-laden on biopsy — and the infant fails to thrive on unabsorbed fat. The delayed neuro-ophthalmic destruction is the vitamin E story: without lipoprotein traffic there is no efficient tocopherol transport, and the retina and spinocerebellar tracts, which cannot be repaired, degenerate. The acanthocyte is the membrane-level echo of the same missing lipid exchange.",
      },
    },
    {
      id: "dyslipidemia-step-map",
      title: "One map, four broken steps — the type I–IV signatures",
      context: "Familial dyslipidemias as transport-map failures",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A patient with hyperlipidemia: which particle is stuck, and why?",
            sublabel: "Input — start from the accumulated particle.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Type I (hyperchylomicronemia, AR): lipoprotein lipase or apo CII deficiency → chylomicrons, TG, cholesterol up → pancreatitis, hepatosplenomegaly, eruptive/pruritic xanthomas, NO ↑ atherosclerosis risk, creamy layer in supernatant",
            sublabel: "Process — the TG-unloading step broken from birth.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Type II (hypercholesterolemia, AD): absent or defective LDL receptors, or defective apo B100 → LDL and cholesterol up (IIa), or plus VLDL (IIb) → heterozygotes ≈300 mg/dL (1:500), homozygotes ≥700 mg/dL → accelerated atherosclerosis, MI before 20, tendon (Achilles) xanthomas, corneal arcus",
            sublabel: "Process — the cholesterol-delivery step broken.",
            variant: "process",
          },
          {
            id: "s3",
            label: "Type III (dysbetalipoproteinemia, AR): apoE defective (type thrEE) → chylomicron and VLDL remnants and TG up → premature atherosclerosis, tuberoeruptive and palmar xanthomas",
            sublabel: "Process — the remnant-return address broken.",
            variant: "process",
          },
          {
            id: "s4",
            label: "Type IV (hypertriglyceridemia, AD): hepatic overproduction of VLDL → VLDL and TG up → >1000 mg/dL can cause acute pancreatitis; related to insulin resistance",
            sublabel: "Process — the export step overactive.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Discriminating output: TG-only pancreatitis without atherosclerosis (I) vs cholesterol with tendon xanthomas and early MI (II) vs palmar xanthomas + premature ASCVD (III) vs TG >1000 with insulin resistance (IV)",
            sublabel: "Output — the particle, the xanthoma geography, and the vascular risk name the type.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "chylomicrons" },
          { from: "trigger", to: "s2", label: "LDL" },
          { from: "trigger", to: "s3", label: "remnants" },
          { from: "trigger", to: "s4", label: "VLDL/TG" },
          { from: "s1", to: "o1", label: "no ASCVD" },
          { from: "s2", to: "o1", label: "earliest ASCVD" },
          { from: "s3", to: "o1", label: "premature ASCVD" },
          { from: "s4", to: "o1", label: "pancreatitis" },
        ],
        caption:
          "Each dyslipidemia is the transport map with one arrow cut. Type I cuts the LPL step (or its apo CII key): chylomicrons can never unload, so TG accumulates with pancreatitis and eruptive xanthomas — but the stuck particle is not the atherogenic one, so vascular risk is flat. Type II cuts the LDL-receptor step (or apo B100's binding): cholesterol accumulates in the Lethal courier, and the atherosclerosis is accelerated enough to kill before 20 in homozygotes. Type III cuts apoE — defective in type thrEE — so remnants of both kinds return to the blood instead of the liver, giving palmar xanthomas with premature atherosclerosis. Type IV turns the export step up: the liver overproduces VLDL (classically with insulin resistance), and TG above 1000 mg/dL threatens the pancreas.",
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "lipid-laden-enterocytes",
      title: "The abetalipoproteinemia findings — schematic",
      caption:
        "An original KYP schematic (not a micrograph) of the two findings: a small-intestinal villus whose columnar enterocytes are distended and cleared by lipid droplets they cannot export without apo B48-containing chylomicrons, and a blood-smear schematic contrasting the normal biconcave red cell with the irregularly spiked acanthocyte — with the full disease summary strip (AR, MTP, absent particles, infant presentation, vitamin E deficiency manifestations, treatment).",
      notice:
        "The source presents a biopsy micrograph (lipid-laden enterocytes, arrow in A); KYP conveys the same finding schematically — the histology is never reproduced or faked. Read the villus as a warehouse whose loading dock (MTP-dependent apoB assembly) is missing, and the acanthocyte as the membrane echo of the same lipid-transfer failure.",
    },
    {
      kind: "table",
      title: "Familial dyslipidemias — verbatim",
      intro: "The source's four-type table, verbatim: inheritance, pathogenesis, elevated blood levels, and clinical picture.",
      columns: ["Type", "Inheritance", "Pathogenesis", "↑ Blood level", "Clinical"],
      rows: [
        ["I—Hyperchylomicronemia", "AR", "Lipoprotein lipase or apo CII deficiency", "Chylomicrons, TG, cholesterol", "Pancreatitis, hepatosplenomegaly, and eruptive/pruritic xanthomas (no ↑ risk for atherosclerosis). Creamy layer in supernatant."],
        ["II—Hypercholesterolemia", "AD", "Absent or defective LDL receptors, or defective apo B100", "IIa: LDL, cholesterol; IIb: LDL, cholesterol, VLDL", "Heterozygotes (1:500) have cholesterol ≈300 mg/dL; homozygotes (very rare) have cholesterol ≥700 mg/dL. Accelerated atherosclerosis (may have MI before age 20), tendon (Achilles) xanthomas, and corneal arcus."],
        ["III—Dysbetalipoproteinemia", "AR", "ApoE (defective in type thrEE)", "Chylomicrons and VLDL remnants, TG", "Premature atherosclerosis, tuberoeruptive and palmar xanthomas."],
        ["IV—Hypertriglyceridemia", "AD", "Hepatic overproduction of VLDL", "VLDL, TG", "Hypertriglyceridemia (>1000 mg/dL) can cause acute pancreatitis. Related to insulin resistance."],
      ],
      caption:
        "Four cuts, four signatures: type I's stuck chylomicrons give TG-pancreatitis without atherosclerosis; type II's failed LDL uptake gives cholesterol with tendon xanthomas and MI before 20; type III's failed remnant return (apoE — thrEE) gives palmar xanthomas with premature atherosclerosis; type IV's overproduced VLDL gives insulin-resistance-linked TG above 1000 mg/dL.",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "Abetalipoproteinemia in one paragraph",
      body: "Autosomal recessive. Mutation in gene that encodes microsomal transfer protein (MTP). Chylomicrons, VLDL, LDL absent. Deficiency in apo B48– and apo B100–containing lipoproteins. Affected infants present with severe fat malabsorption, steatorrhea, failure to thrive. Later manifestations include retinitis pigmentosa, spinocerebellar degeneration due to vitamin E deficiency, progressive ataxia, acanthocytosis. Intestinal biopsy shows lipid-laden enterocytes. Treatment: restriction of long-chain fatty acids, large doses of oral vitamin E.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "An infant presents with foul-smelling, floating stools and poor growth; over years, night blindness and a wide-based gait develop, and the smear shows spiky red cells.",
        discriminator: "Fat malabsorption + retinitis pigmentosa/ataxia + acanthocytosis",
        concept: "Abetalipoproteinemia (MTP mutation)",
        answer:
          "Autosomal recessive mutation in microsomal transfer protein → no apo B48/B100-containing lipoproteins (chylomicrons, VLDL, LDL absent) → severe fat malabsorption, steatorrhea, failure to thrive; later, vitamin E deficiency drives retinitis pigmentosa, spinocerebellar degeneration, and progressive ataxia, with acanthocytosis on smear and lipid-laden enterocytes on biopsy. Treat with long-chain fatty acid restriction and large-dose oral vitamin E.",
      },
      {
        stem: "A child or young adult has tendon xanthomas over the Achilles tendons, corneal arcus, and an MI before age 20; cholesterol is ≥700 mg/dL.",
        discriminator: "Tendon (Achilles) xanthomas + very high cholesterol + early MI",
        concept: "Type II familial hypercholesterolemia (homozygous)",
        answer:
          "Absent or defective LDL receptors (or defective apo B100), autosomal dominant: heterozygotes (1:500) run cholesterol ≈300 mg/dL; homozygotes (very rare) ≥700 mg/dL with accelerated atherosclerosis, MI possibly before age 20, tendon (Achilles) xanthomas, and corneal arcus — IIa raises LDL and cholesterol, IIb adds VLDL.",
      },
      {
        stem: "A patient with recurrent abdominal pain has triglycerides over 1000 mg/dL; the question separates a from-birth AR enzyme failure from an insulin-resistance-linked AD overproduction.",
        discriminator: "Type I vs type IV hypertriglyceridemia",
        concept: "The two TG-pancreatitis diseases",
        answer:
          "Type I (hyperchylomicronemia, AR): lipoprotein lipase or apo CII deficiency from birth — chylomicrons, TG, and cholesterol up, pancreatitis, hepatosplenomegaly, eruptive/pruritic xanthomas, no increased atherosclerosis risk, creamy layer in supernatant. Type IV (hypertriglyceridemia, AD): hepatic overproduction of VLDL related to insulin resistance — VLDL and TG up, acute pancreatitis above 1000 mg/dL.",
      },
      {
        stem: "An adult has premature atherosclerosis with tuberoeruptive and palmar xanthomas; remnants of both chylomicrons and VLDL accumulate.",
        discriminator: "Palmar xanthomas + remnant accumulation",
        concept: "Type III dysbetalipoproteinemia (apoE)",
        answer:
          "ApoE is defective in type thrEE: chylomicron and VLDL remnants (and TG) accumulate because their hepatic return address fails, producing premature atherosclerosis with tuberoeruptive and palmar xanthomas — the mnemonic is printed in the table itself.",
      },
    ],
    traps: [
      {
        a: "Type I familial dyslipidemia accelerates atherosclerosis",
        b: "Type I has NO ↑ risk for atherosclerosis",
        whyConfused: "It is called a dyslipidemia, and lipids are massively elevated.",
        keyDifference:
          "The stuck particle is the TG courier (chylomicron), not the cholesterol courier (LDL) — eruptive xanthomas and pancreatitis, yes; vessel disease, no. The atherogenic types are II (earliest) and III (premature).",
        clue: "Any question pairing type I with vascular risk.",
      },
      {
        a: "Abetalipoproteinemia is an apo B100-only deficiency",
        b: "Both B48- and B100-containing particles are absent",
        whyConfused: "The name says 'beta-lipo' (LDL).",
        keyDifference:
          "MTP assembles both apolipoprotein B particles, so chylomicrons (B48), VLDL and LDL (B100) are all absent — the disease is total transport failure, not isolated LDL loss; the gut and the liver both lose their couriers.",
        clue: "Any 'which particles are absent in abetalipoproteinemia' question.",
      },
      {
        a: "The neurologic findings of abetalipoproteinemia are direct fat toxicity",
        b: "They are vitamin E deficiency from lost transport",
        whyConfused: "Lipid malabsorption dominates the infancy picture.",
        keyDifference:
          "Retinitis pigmentosa, spinocerebellar degeneration, and progressive ataxia are the delayed signature of untransported fat-soluble vitamin E — which is why treatment includes large doses of oral vitamin E, not just fat restriction.",
        clue: "Any 'why the ataxia/retinitis' question.",
      },
      {
        a: "Palmar xanthomas indicate type II hypercholesterolemia",
        b: "Tendon (Achilles) xanthomas = type II; palmar = type III",
        whyConfused: "Both are xanthomas in dyslipidemia.",
        keyDifference:
          "The xanthoma geography names the type: eruptive/pruritic on skin folds = type I (chylomicrons); tendon (Achilles) = type II (LDL receptor); tuberoeruptive + palmar = type III (apoE, thrEE). This is why the exam asks where the xanthoma is.",
        clue: "Any xanthoma-location question.",
      },
    ],
    pivots: [
      {
        lookAlike: "The child with fat malabsorption (abetalipoproteinemia vs cystic fibrosis vs celiac)",
        differentiator: "The particle panel and the smear",
        correctPath:
          "Abetalipoproteinemia: absent chylomicrons/VLDL/LDL with acanthocytes, retinitis pigmentosa, and ataxia (vitamin E deficiency) — biopsy shows lipid-laden enterocytes. Cystic fibrosis: pancreatic insufficiency with respiratory disease. Celiac: villous atrophy with anti-tTG antibodies and normal particle assembly.",
      },
      {
        lookAlike: "The four familial dyslipidemias by lab and lesion",
        differentiator: "Which particle + which xanthoma + whose vessels",
        correctPath:
          "Chylomicrons + TG + pancreatitis + eruptive xanthomas + no atherosclerosis = I (LPL/apo CII, AR). LDL + cholesterol ≈300–700 + tendon xanthomas + MI before 20 = II (LDL receptor/apo B100, AD). Remnants + TG + palmar xanthomas + premature atherosclerosis = III (apoE, thrEE, AR). VLDL + TG >1000 + pancreatitis + insulin resistance = IV (hepatic overproduction, AD).",
      },
    ],
    miniCase: {
      vignette:
        "A 9-month-old boy is evaluated for persistent foul-smelling, bulky stools that float, and he has fallen from the 25th to below the 3rd percentile for weight despite a normal appetite. His parents note he seems to have trouble tracking objects in dim light. Examination is notable for hypotonia and a mild intention tremor; deep tendon reflexes are absent at the ankles. A peripheral smear shows numerous red cells with irregular, star-shaped borders. A lipid panel returns essentially undetectable triglycerides and cholesterol with no chylomicron, VLDL, or LDL bands on electrophoresis. An ophthalmology consultation is requested for declining night vision, and a small-intestinal biopsy is scheduled.",
      question:
        "Which finding is expected on the intestinal biopsy, and what is the underlying molecular defect?",
      options: [
        {
          label: "A",
          text: "Lipid-laden enterocytes; an autosomal recessive mutation in the gene encoding microsomal transfer protein (MTP) preventing assembly of apo B48– and apo B100–containing lipoproteins",
          correct: true,
          why: "Correct — with MTP missing, neither chylomicrons (apo B48) nor VLDL/LDL (apo B100) can be assembled; the enterocyte absorbs dietary fat it cannot export, so the biopsy shows enterocytes distended with lipid (the printed arrow-in-A finding). The acanthocytes, areflexia, ataxia, and night blindness (retinitis pigmentosa) are the vitamin E–deficiency consequences of the same transport failure.",
        },
        {
          label: "B",
          text: "Flat, atrophic villi with crypt hyperplasia; an immune enteropathy from anti-transglutaminase antibodies",
          why: "That is celiac disease — malabsorption with villous atrophy, but lipoprotein assembly is intact, so triglycerides and cholesterol are measurable and no acanthocytes appear.",
        },
        {
          label: "C",
          text: "Normal villi with PAS-positive macrophages in the lamina propria; whipplei infection",
          why: "Whipple disease gives PAS-positive foamy macrophages in the lamina propria — a different biopsy signature, and again not a particle-absent lipid panel.",
        },
        {
          label: "D",
          text: "Lipid-laden hepatocytes with steatosis; a hepatic lipase deficiency blocking IDL-to-LDL conversion",
          why: "Hepatic lipase failure would trap IDL, not abolish all three particles; the biopsy finding in this disease is in the intestinal enterocytes, and the defect is in particle assembly, not trimming.",
        },
        {
          label: "E",
          text: "Foamy macrophages in the lamina propria with intact chylomicron secretion; abetalipoproteinemia is actually an acquired MTP autoimmunity",
          why: "Abetalipoproteinemia is a hereditary (autosomal recessive) MTP mutation, and chylomicron secretion is precisely what is lost — the electrophoresis shows no bands at all.",
        },
      ],
      reasoning:
        "Every finding points at the one disease with no B-particles: undetectable triglyceride and cholesterol with absent chylomicron, VLDL, and LDL bands mean the couriers were never built — MTP is the assembly enzyme, and its autosomal recessive loss defines abetalipoproteinemia. The gut cannot ship dietary fat, so the enterocytes hoard it (lipid-laden on biopsy) and the stool loses it (steatorrhea, failure to thrive). The blood cells deform (acanthocytosis), and the tissues that cannot tolerate oxidant injury without vitamin E — retina and spinocerebellar tracts — degenerate, producing the night blindness, areflexia, ataxia, and tremor. The treatment follows the mechanism directly: restrict the long-chain fatty acids that cannot be transported, and give large doses of oral vitamin E to bypass the missing courier system.",
    },
  },
  mnemonics: [
    {
      code: "“Defective in type thrEE.”",
      meaning:
        "The source's own table-embedded mnemonic: type III dysbetalipoproteinemia is the apoE disease — the letter E appears in thrEE.",
      memorizes: "Type III = apoE",
      whenToUse: "Any 'which apolipoprotein fails in type III' question.",
      clinical: "ApoE failure traps chylomicron and VLDL remnants: premature atherosclerosis with tuberoeruptive and palmar xanthomas.",
    },
    {
      code: "“Xanthoma geography: Eruptive on skin, Tendon at the heel, Palmar in the palm.”",
      meaning:
        "KYP's place-key for the three xanthoma types: eruptive/pruritic xanthomas on the skin = type I (chylomicrons); tendon (Achilles) xanthomas = type II (LDL receptor/apo B100); tuberoeruptive and palmar xanthomas = type III (apoE).",
      memorizes: "Which xanthoma marks which dyslipidemia",
      whenToUse: "Any xanthoma-location-to-type matching question.",
      clinical: "The exam describes the xanthoma and asks for the particle: skin fold papules → chylomicrons; Achilles enlargement → LDL; palmar crease yellowing → remnants.",
    },
    {
      code: "“No B, no ride.”",
      meaning:
        "KYP's shorthand for abetalipoproteinemia: without MTP there is no apo B48– or apo B100–containing particle for lipid (or vitamin E) to ride on — the enterocyte stuffs, the stool leaks, the retina and cerebellum starve for tocopherol.",
      memorizes: "Why all three particles are absent and what follows",
      whenToUse: "Any abetalipoproteinemia mechanism question.",
      clinical: "Treatment replaces the missing ride: restrict long-chain fatty acids and give large-dose oral vitamin E.",
    },
  ],
  rapidReview: {
    s30: [
      "Abetalipoproteinemia: AR, MTP mutation → chylomicrons, VLDL, LDL all absent",
      "Biopsy: lipid-laden enterocytes; smear: acanthocytes",
      "Type I (LPL/apo CII, AR): TG + pancreatitis + eruptive xanthomas, NO ↑ atherosclerosis",
      "Type II (LDL receptor/apo B100, AD): tendon xanthomas + corneal arcus + MI before 20",
    ],
    m3: [
      "Type III = apoE defective (thrEE) → remnant accumulation, palmar xanthomas, premature ASCVD",
      "Type IV = hepatic VLDL overproduction (AD, insulin resistance) → TG >1000 → pancreatitis",
      "Type II: heterozygotes (1:500) chol ≈300; homozygotes ≥700 mg/dL; IIa +LDL/chol, IIb +VLDL",
      "Abetalipoproteinemia late findings: retinitis pigmentosa, spinocerebellar degeneration (vit E deficiency), ataxia",
    ],
    m10: [
      "Abetalipoproteinemia treatment: restrict long-chain fatty acids + large-dose oral vitamin E",
      "Type I: creamy layer in supernatant; hepatosplenomegaly",
      "Xanthoma geography: eruptive = I, tendon (Achilles) = II, tuberoeruptive + palmar = III",
      "Types with ASCVD: II (accelerated, earliest) and III (premature); I has none; IV threatens pancreas",
    ],
  },
  recall: [
    {
      q: "What is the genetic and molecular defect in abetalipoproteinemia?",
      a: "Autosomal recessive; a mutation in the gene that encodes microsomal transfer protein (MTP) — a deficiency in apo B48– and apo B100–containing lipoproteins (chylomicrons, VLDL, LDL absent).",
    },
    {
      q: "How does abetalipoproteinemia present in infants, and what appears later?",
      a: "Infants: severe fat malabsorption, steatorrhea, failure to thrive. Later: retinitis pigmentosa, spinocerebellar degeneration due to vitamin E deficiency, progressive ataxia, acanthocytosis.",
    },
    {
      q: "What does the intestinal biopsy show in abetalipoproteinemia, and what is the treatment?",
      a: "Lipid-laden enterocytes. Treatment: restriction of long-chain fatty acids, large doses of oral vitamin E.",
    },
    {
      q: "Give type I familial dyslipidemia's inheritance, defect, elevated levels, and clinical picture.",
      a: "Type I — hyperchylomicronemia: AR; lipoprotein lipase or apo CII deficiency; chylomicrons, TG, and cholesterol elevated; pancreatitis, hepatosplenomegaly, eruptive/pruritic xanthomas with no increased risk for atherosclerosis, and a creamy layer in the supernatant.",
    },
    {
      q: "Give type II familial dyslipidemia's inheritance, defects, levels, and clinical picture.",
      a: "Type II — hypercholesterolemia: AD; absent or defective LDL receptors, or defective apo B100; IIa raises LDL and cholesterol, IIb adds VLDL; heterozygotes (1:500) have cholesterol ≈300 mg/dL, homozygotes (very rare) ≥700 mg/dL, with accelerated atherosclerosis (MI possibly before age 20), tendon (Achilles) xanthomas, and corneal arcus.",
    },
    {
      q: "Which apolipoprotein is defective in type III dyslipidemia, and what is the clinical picture?",
      a: "ApoE (defective in type thrEE) — chylomicron and VLDL remnants and TG accumulate; premature atherosclerosis with tuberoeruptive and palmar xanthomas (AR).",
    },
    {
      q: "What drives type IV familial dyslipidemia and what is its danger?",
      a: "Hepatic overproduction of VLDL (AD), related to insulin resistance — VLDL and TG rise, and hypertriglyceridemia (>1000 mg/dL) can cause acute pancreatitis.",
    },
    {
      q: "Which familial dyslipidemias carry atherosclerotic risk and which does not?",
      a: "Type II (accelerated atherosclerosis, possibly MI before age 20) and type III (premature atherosclerosis) carry vascular risk; type I explicitly has no increased risk for atherosclerosis; type IV's threat is acute pancreatitis.",
    },
  ],
  related: [
    {
      title: "Lipid Transport, Apolipoproteins & HDL Maturation",
      topicId: "lipid-transport",
      note: "The seven-step transport map this page's diseases break: step 3 (type I), step 4 (type IV), step 7 (type II), and the apoE return address (type III).",
    },
    {
      title: "Vitamin E & K, Fat-Soluble Vitamin Deficiencies",
      topicId: "vitamins-e-k",
      note: "Abetalipoproteinemia's retinitis pigmentosa and spinocerebellar degeneration are vitamin E deficiency by transport failure — the same deficiency by diet or malabsorption.",
    },
    {
      title: "Cystic Fibrosis & CFTR",
      topicId: "cystic-fibrosis",
      note: "The infant fat-malabsorption differential: CF steals pancreatic lipase (no micelle formation), abetalipoproteinemia steals the chylomicron itself.",
    },
    {
      title: "Atherosclerosis",
      topicId: "atherosclerosis",
      note: "Type II's LDL accumulation is where the atheroma begins — the Lethal courier's failure mode, from endothelial retention to plaque.",
    },
  ],
  crossLinks: [
    {
      subject: "Cardiology",
      connection: "Type II homozygotes can have MI before age 20 — the most dramatic example of LDL-driven atherosclerosis on the exam, with tendon xanthomas and corneal arcus.",
    },
    {
      subject: "Gastrointestinal",
      connection: "The infant with steatorrhea and failure to thrive: abetalipoproteinemia's lipid-laden enterocytes versus the pancreatic, mucosal, and bile-salt causes of fat malabsorption.",
    },
    {
      subject: "Neurology & Ophthalmology",
      connection: "Vitamin E transport failure writes the delayed neuro-ophthalmic exam: retinitis pigmentosa with night blindness, spinocerebellar degeneration, progressive ataxia, and areflexia.",
    },
  ],
};
