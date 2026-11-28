import type { KypUsMLENote } from "../types";

// KYP USMLE 2026 — cardiovascular batch cv5 (pdf 310 / book 288).
// Source: First Aid 2026, Part 1 pdf 310 (book 288) — Cardiac output variables.

export const cardiacOutputVariables: KypUsMLENote = {
  id: "cardiac-output-variables",
  title: "Cardiac Output Variables",
  subtitle: "SV CAP — Stroke Volume affected by Contractility, Afterload, and Preload — plus the Laplace law that turns pressure and radius into wall stress, and the drug list that moves every dial.",
  subject: "Cardiovascular · Physiology",
  system: "Section III · Cardiovascular — Physiology",
  pilotCategory: "Physiology",
  difficulty: 2,
  readTime: 11,
  sourceRef: "First Aid 2026, Part 1 pp. 288 (cardiac output variables)",
  tags: [
    "stroke volume",
    "contractility",
    "preload",
    "afterload",
    "Laplace law",
    "nitroglycerin",
    "hydralazine",
  ],
  core: {
    what: "The printed variables page: Stroke Volume is affected by Contractility, Afterload, and Preload ('SV CAP') — ↑ SV with ↑ contractility (anxiety, exercise), ↑ preload (early pregnancy), ↓ afterload; stroke work ∝ SV × MAP; a failing heart has ↓ SV (systolic and/or diastolic dysfunction). CONTRACTILITY (and SV) ↑ with catecholamine stimulation via β1 (PKA → phospholamban phosphorylation → active Ca2+ ATPase → ↑ SR Ca2+ storage; PKA → Ca2+ channel phosphorylation → ↑ Ca2+ entry → ↑ Ca2+-induced Ca2+ release; ↑ intracellular Ca2+; digoxin blocking the Na+/K+ pump) and ↓ with β1-blockade (↓ cAMP), systolic HF, acidosis, hypoxia/hypercapnia, nondihydropyridine CCBs. PRELOAD ≈ EDV (venous tone + circulating volume → venous return; nitroglycerin ↓ preload). AFTERLOAD ≈ MAP (arterial vasodilators like hydralazine ↓ afterload; ACE inhibitors/ARBs ↓ both; chronic hypertension → LV hypertrophy). Myocardial O2 demand ↑ with contractility, afterload (proportional to arterial pressure), heart rate, and ventricular diameter (wall tension); the coronary sinus holds the most deoxygenated blood in the body. Wall tension follows Laplace's law: wall stress = pressure × radius ÷ (2 × wall thickness) — LV compensates for ↑ afterload by hypertrophying to ↓ wall stress.",
    why: "Every hemodynamic drug question (nitro vs hydralazine vs ACEi), every contractility mechanism question (β1 → PKA → phospholamban; digoxin), and every hypertrophy/heart-failure progression question runs through this page's dials.",
    keyIdea: "Two approximations and one law: PRELOAD ≈ EDV (the filling dial — venous vasodilators lower it); AFTERLOAD ≈ MAP (the ejection dial — arterial vasodilators lower it); Laplace: stress = P × r / (2 × thickness) — the LV hypertrophies (↑ thickness) to normalize stress against chronic pressure. Contractility is the calcium dial: β1/cAMP/PKA phosphorylates phospholamban (+SR Ca2+ uptake) and L-type Ca2+ channels (+ entry) → more Ca2+-induced Ca2+ release; digoxin raises intracellular Ca2+ indirectly by poisoning the Na+/K+ pump.",
  },
  blocks: [
    {
      kind: "visual",
      visualId: "cardiac-output-map",
      title: "The SV CAP dial panel",
      caption: "The three dials (preload/afterload/contractility) with their printed up/down lists, the Laplace equation strip, and the O2-demand block.",
      notice: "Two dials are GEOMETRIC (preload = EDV, afterload = MAP), one is BIOCHEMICAL (contractility = intracellular Ca2+) — and every drug on the page picks exactly one dial.",
    },
    {
      kind: "table",
      title: "The printed SV CAP block, verbatim",
      columns: ["Variable", "Effect on SV", "Printed details"],
      rows: [
        [
          "Contractility ↑",
          "↑ SV",
          "Eg, anxiety, exercise",
        ],
        [
          "Preload ↑",
          "↑ SV",
          "Eg, early pregnancy",
        ],
        [
          "Afterload ↓",
          "↑ SV",
          "↓ afterload raises ejection",
        ],
        [
          "Stroke work (SW)",
          "—",
          "Work done by ventricle to eject SV; SW ∝ SV × MAP",
        ],
        [
          "Heart failure",
          "↓ SV",
          "Systolic and/or diastolic dysfunction",
        ],
      ],
      caption: "The printed 'SV CAP' headline (Stroke Volume affected by Contractility, Afterload, and Preload) with its three ↑-SV bullets and the SW/HF rows.",
    },
    {
      kind: "table",
      title: "Contractility — the printed up/down lists",
      columns: ["Direction", "Agent (printed)", "Mechanism (printed)"],
      rows: [
        ["↑", "Catecholamine stimulation via β1 receptor", "PKA → phospholamban phosphorylation → active Ca2+ ATPase → ↑ Ca2+ storage in SR; PKA → Ca2+ channel phosphorylation → ↑ Ca2+ entry → ↑ Ca2+-induced Ca2+ release; ↑ intracellular Ca2+"],
        ["↑", "Digoxin", "Blocks Na+/K+ pump → ↑ intracellular Na+ → ↓ Na+/Ca2+ exchanger activity → ↑ intracellular Ca2+"],
        ["↓", "β1-blockade", "↓ cAMP"],
        ["↓", "Heart failure (systolic dysfunction)", "Failing pump"],
        ["↓", "Acidosis", "—"],
        ["↓", "Hypoxia/hypercapnia (↓ Po2 / ↑ Pco2)", "—"],
        ["↓", "Nondihydropyridine Ca2+ channel blockers", "—"],
      ],
      caption: "The printed contractility block carried whole — the β1→PKA→phospholamban chain is the exam's favorite mechanism sentence.",
    },
    {
      kind: "table",
      title: "Preload, afterload, and the drugs that move them",
      columns: ["Variable", "Approximated by", "Drugs (printed)"],
      rows: [
        ["Preload", "Ventricular end-diastolic volume (EDV) — depends on venous tone and circulating blood volume, both affecting venous return", "Venous vasodilators (eg, nitroglycerin) ↓ preload"],
        ["Afterload", "MAP — ↑ pressure → ↑ wall tension per Laplace's law → ↑ afterload; chronic hypertension (↑ MAP) → LV hypertrophy", "Arterial vasodilators (eg, hydralazine) ↓ afterload; ACE inhibitors and ARBs ↓ BOTH preload and afterload"],
      ],
      caption: "Both variable rows carried verbatim — note ACEi/ARBs are the only class printed as moving BOTH dials.",
    },
    {
      kind: "text",
      title: "Laplace's law and the O2-demand block",
      body: [
        "Wall tension follows Laplace's law: wall stress = (pressure × radius) / (2 × wall thickness). ↑ pressure → ↑ wall tension → ↑ afterload; the LV compensates for ↑ afterload by thickening (hypertrophy) in order to ↓ wall stress — chronic hypertension (↑ MAP) → LV hypertrophy. The hypertrophy is not a disease here; it is Laplace arithmetic (the denominator grows).",
        "Myocardial O2 demand is ↑ by: ↑ contractility, ↑ afterload (proportional to arterial pressure), ↑ heart rate, and ↑ ventricular diameter (↑ wall tension). Clinical hook the page attaches: the coronary sinus contains the most deoxygenated blood in the body — the heart extracts O2 almost maximally at rest, so increased demand must be met by FLOW (coronary vasodilation), not extraction.",
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title: "The one-drug-one-dial map",
      body: "Nitroglycerin = venous = PRELOAD. Hydralazine = arterial = AFTERLOAD. ACE inhibitors/ARBs = BOTH. β1-blockers = contractility (↓ cAMP) + the nodal dials. Digoxin = contractility (↑ intracellular Ca2+). Non-DHP CCBs = contractility down. Any stem naming a drug asks 'which dial?' — and the printed page answers for each.",
    },
  ],
  clinical: [
    {
      kind: "list",
      title: "Stems that run through this page",
      items: [
        {
          lead: "Anxious patient before an exam — why does BP pulse feel stronger?",
          text: "↑ contractility (catecholamines) → ↑ SV — the printed anxiety example.",
        },
        {
          lead: "Nitroglycerin relieves angina by which hemodynamic dial?",
          text: "Venous vasodilation ↓ preload → ↓ wall tension (Laplace) → ↓ O2 demand.",
        },
        {
          lead: "Chronic hypertension → what structural adaptation, and why?",
          text: "LV hypertrophy — Laplace compensation: thicker wall ↓ stress against ↑ MAP.",
        },
        {
          lead: "Digoxin's inotropic mechanism in one chain?",
          text: "Blocks Na+/K+ pump → ↑ intracellular Na+ → ↓ Na+/Ca2+ exchanger → ↑ intracellular Ca2+ → ↑ contractility.",
        },
        {
          lead: "Why do β1-blockers help systolic HF despite lowering contractility?",
          text: "↓ cAMP/HR/O2 demand and remodeling protection — the acute negative inotropy is the printed ↓-SV list's flip side.",
        },
        {
          lead: "Pregnant patient's resting cardiac output rises — which dial?",
          text: "↑ preload (early pregnancy, printed) — plus the physiologic volume expansion.",
        },
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A drug raises intracellular Ca2+ by inhibiting the Na+/K+ pump.",
        discriminator: "Digoxin's printed chain",
        concept: "↓ Na+/Ca2+ exchanger activity → ↑ intracellular Ca2+ → ↑ contractility",
        answer: "Digoxin (positive inotrope via the Na+/K+ pump)",
      },
      {
        stem: "A patient on hydralazine gets reflex tachycardia but improved ejection.",
        discriminator: "Arterial vasodilator = afterload dial",
        concept: "↓ MAP → ↓ afterload → ↑ SV (and reflex β1 stimulation)",
        answer: "Hydralazine ↓ afterload (preload untouched)",
      },
      {
        stem: "A patient with aortic stenosis develops LV wall thickening over years.",
        discriminator: "Chronic ↑ MAP/pressure + Laplace compensation",
        concept: "LV hypertrophy thickens the wall to ↓ stress (denominator of P×r/2×T)",
        answer: "Laplace-law hypertrophy — chronic afterload adaptation",
      },
      {
        stem: "Which variables raise myocardial O2 demand?",
        discriminator: "The printed four-bullet list",
        concept: "Contractility, afterload (arterial pressure), heart rate, ventricular diameter (wall tension)",
        answer: "All four — and coronary sinus blood is maximally deoxygenated, so demand needs FLOW",
      },
    ],
    traps: [
      {
        a: "Nitroglycerin (preload)",
        b: "Hydralazine (afterload)",
        whyConfused: "Both are 'vasodilators.'",
        keyDifference: "VENOUS vasodilation (nitroglycerin) ↓ EDV/preload; ARTERIAL vasodilation (hydralazine) ↓ MAP/afterload; ACEi/ARBs do both (printed).",
        clue: "Vein = volume = preload; artery = pressure = afterload.",
      },
      {
        a: "Preload ≈ EDV",
        b: "Afterload ≈ MAP",
        whyConfused: "Both approximate 'how hard the ventricle works.'",
        keyDifference: "Preload is the FILLING stretch before contraction (EDV); afterload is the PRESSURE the ventricle ejects against (MAP).",
        clue: "Before = preload; against = afterload.",
      },
      {
        a: "Hypertrophy as Laplace compensation",
        b: "Hypertrophy as pathology",
        whyConfused: "'Hypertrophy is bad' reflex.",
        keyDifference: "Acutely it is the printed COMPENSATION (↑ thickness ↓ wall stress); chronically it becomes HF pathology — the page frames the compensation, the HF pages the cost.",
        clue: "Laplace says thicker = safer stress; the disease is the price paid over decades.",
      },
    ],
    pivots: [
      {
        lookAlike: "Any 'which drug moves which dial' question",
        differentiator: "Vein, artery, both, or calcium?",
        correctPath: "Nitro = vein/preload; hydralazine = artery/afterload; ACEi-ARB = both; β1-blockers and non-DHP CCBs = contractility down; digoxin/catecholamines = contractility up. Name the dial before the drug.",
      },
      {
        lookAlike: "Any inotropy mechanism question",
        differentiator: "β1-PKA-calcium chain vs digoxin's pump chain",
        correctPath: "Catecholamines: β1 → cAMP → PKA → phospholamban (+SR uptake) AND Ca2+ channel (+entry) → ↑ Ca2+-induced Ca2+ release. Digoxin: Na+/K+ pump block → ↑ Na+ → ↓ Na/Ca exchange → ↑ Ca2+. Two routes to the same intracellular Ca2+ pool.",
      },
    ],
    miniCase: {
      vignette: "A 58-year-old man with chronic hypertension (MAP persistently 120 mm Hg) is found to have concentric LV hypertrophy on echocardiography. He is asymptomatic with a normal ejection fraction.",
      question: "Which physiologic principle best explains the ventricular remodeling?",
      options: [
        {
          label: "A",
          text: "Laplace's law — wall stress = pressure × radius / (2 × wall thickness); the LV thickens to normalize stress against the elevated pressure",
          why: "Correct — the printed compensation: LV compensates for ↑ afterload by thickening (hypertrophy) in order to ↓ wall stress; chronic hypertension (↑ MAP) → LV hypertrophy.",
          correct: true,
        },
        {
          label: "B",
          text: "Frank-Starling mechanism — increased EDV stretches the ventricle and raises SV",
          why: "Frank-Starling describes the acute preload-SV relationship; the vignette shows a chronic pressure-adaptation (thickness change), not a filling change.",
        },
        {
          label: "C",
          text: "β1-mediated phospholamban phosphorylation increasing SR Ca2+ storage",
          why: "That is the contractility mechanism (inotropy), not the structural wall-thickening adaptation.",
        },
        {
          label: "D",
          text: "Nitroglycerin's venous vasodilation lowering EDV",
          why: "A preload drug effect — no relation to chronic pressure-driven hypertrophy.",
        },
        {
          label: "E",
          text: "Digoxin raising intracellular Ca2+ and enhancing contractility",
          why: "Inotropy again — the question asks about wall-structure remodeling, not contractile force.",
        },
      ],
      reasoning: "Chronic ↑ MAP → ↑ afterload → Laplace stress rises → the LV adds wall thickness (denominator) to hold stress constant. The printed chain — pressure → wall tension → hypertrophy → ↓ stress — is the whole answer.",
    },
  },
  mnemonics: [
    {
      code: "“SV CAP — Stroke Volume, Contractility / Afterload / Preload”",
      meaning: "The print's own mnemonic: the three dials that set stroke volume (↑ contractility, ↑ preload, ↓ afterload all raise SV).",
      memorizes: "The SV variable triad (the page's own headline)",
      whenToUse: "Every SV-determinant question.",
      clinical: "Anxiety (contractility), pregnancy (preload), vasodilation (afterload) — the printed examples.",
    },
    {
      code: "“Nitro the VEIN, Hydral the ARTERY, ACEi does BOTH”",
      meaning: "Venous vasodilators (nitroglycerin) ↓ preload; arterial vasodilators (hydralazine) ↓ afterload; ACE inhibitors/ARBs ↓ both.",
      memorizes: "The drug-to-dial map",
      whenToUse: "Any antihypertensive/antianginal hemodynamics question.",
      clinical: "KYP wrapper over the printed drug rows.",
    },
    {
      code: "“Thicker wall, calmer stress”",
      meaning: "Laplace: stress = P × r / (2 × T) — hypertrophy raises T, lowering stress against chronic pressure.",
      memorizes: "The compensation logic of LVH",
      whenToUse: "Any hypertension → LVH progression question.",
      clinical: "KYP wrapper over the printed Laplace block.",
    },
  ],
  rapidReview: {
    s30: [
      "SV CAP: SV affected by Contractility, Afterload, Preload.",
      "↑ SV: ↑ contractility (anxiety, exercise), ↑ preload (early pregnancy), ↓ afterload.",
      "Stroke work ∝ SV × MAP; failing heart has ↓ SV (systolic and/or diastolic dysfunction).",
      "Contractility ↑: catecholamines via β1 (PKA → phospholamban → SR Ca2+; PKA → Ca2+ channel → entry → Ca2+-induced release); digoxin (Na/K pump block → ↓ Na/Ca exchange → ↑ Ca2+).",
      "Contractility ↓: β1-blockade (↓ cAMP), systolic HF, acidosis, hypoxia/hypercapnia, non-DHP CCBs.",
      "Preload ≈ EDV (venous tone + blood volume → venous return; nitroglycerin ↓ preload). Afterload ≈ MAP (hydralazine ↓; ACEi/ARBs ↓ both).",
      "O2 demand ↑ with contractility, afterload, HR, ventricular diameter; coronary sinus = most deoxygenated blood in body.",
      "Laplace: stress = P × r / (2 × thickness); LV hypertrophies to ↓ wall stress in chronic hypertension.",
    ],
    m3: [
      "Phospholamban phosphorylation disinhibits SR Ca2+ ATPase — the relaxation-and-refill half of the β1 story.",
      "Ca2+-induced Ca2+ release links this page to the plateau (book 296): the same trigger calcium, now scaled by PKA.",
      "ACEi/ARBs are the ONLY printed class moving both preload and afterload — the favorite single-dial exception.",
      "Early pregnancy raises preload (printed) — the physiologic volume-expansion SV bump.",
      "Wall tension rises with ventricular DIAMETER — dilated hearts burn more O2 (and fail more).",
    ],
    m10: [
      "Contractility chain verbatim: catecholamine stimulation via β1 receptor → activated protein kinase A → phospholamban phosphorylation → active Ca2+ ATPase → ↑ Ca2+ storage in SR; PKA → Ca2+ channel phosphorylation → ↑ Ca2+ entry → ↑ Ca2+-induced Ca2+ release; ↑ intracellular Ca2+. Digoxin: blocks Na+/K+ pump → ↑ intracellular Na+ → ↓ Na+/Ca2+ exchanger activity → ↑ intracellular Ca2+.",
      "Down-list verbatim: β1-blockade (↓ cAMP); heart failure with systolic dysfunction; acidosis; hypoxia/hypercapnia (↓ Po2 / ↑ Pco2); nondihydropyridine Ca2+ channel blockers.",
      "Variable approximations verbatim: preload ≈ ventricular end-diastolic volume (depends on venous tone and circulating blood volume, both affecting venous return; venous vasodilators eg nitroglycerin ↓ preload); afterload ≈ MAP (↑ pressure → ↑ wall tension per Laplace → ↑ afterload; arterial vasodilators eg hydralazine ↓ afterload; ACE inhibitors and ARBs ↓ both preload and afterload; chronic hypertension → LV hypertrophy).",
      "O2-demand verbatim: ↑ contractility, ↑ afterload (proportional to arterial pressure), ↑ heart rate, ↑ diameter of ventricle (↑ wall tension); coronary sinus contains most deoxygenated blood in body.",
      "Laplace verbatim: wall stress = (pressure × radius) / (2 × wall thickness); LV compensates for ↑ afterload by thickening (hypertrophy) to ↓ wall stress; stroke work ∝ SV × MAP.",
    ],
  },
  recall: [
    {
      q: "SV CAP stands for?",
      a: "Stroke Volume affected by Contractility, Afterload, Preload — the three SV dials.",
    },
    {
      q: "The β1 → contractility chain in order?",
      a: "β1 → cAMP → PKA → phospholamban phosphorylation → active SR Ca2+ ATPase → ↑ SR Ca2+; PKA also phosphorylates Ca2+ channels → ↑ entry → ↑ Ca2+-induced Ca2+ release.",
    },
    {
      q: "Digoxin's contractility mechanism?",
      a: "Blocks Na+/K+ pump → ↑ intracellular Na+ → ↓ Na+/Ca2+ exchange → ↑ intracellular Ca2+.",
    },
    {
      q: "Which printed class lowers BOTH preload and afterload?",
      a: "ACE inhibitors and ARBs.",
    },
    {
      q: "Preload and afterload are approximated by?",
      a: "Preload ≈ ventricular EDV; afterload ≈ MAP.",
    },
    {
      q: "The four O2-demand raisers?",
      a: "↑ contractility, ↑ afterload (arterial pressure), ↑ HR, ↑ ventricular diameter (wall tension).",
    },
    {
      q: "Write Laplace's law.",
      a: "Wall stress = (pressure × radius) / (2 × wall thickness) — LV hypertrophy thickens the denominator.",
    },
    {
      q: "Where is the most deoxygenated blood in the body?",
      a: "The coronary sinus.",
    },
  ],
  related: [
    {
      title: "Cardiac Output Equations",
      note: "The next page turns CO = HR × SV and the pressure-resistance arithmetic into the equations this page's dials feed.",
      topicId: "cardiac-output-equations",
    },
    {
      title: "Heart Anatomy",
      note: "The coronary sinus named here as maximally deoxygenated is the same vessel the anatomy page maps in the left AV groove.",
      topicId: "heart-anatomy",
    },
    {
      title: "Cardiac Action Potentials",
      note: "The Ca2+-induced Ca2+ release this page scales with PKA is the plateau's own trigger calcium.",
      topicId: "cardiac-action-potentials",
    },
  ],
  crossLinks: [
    {
      subject: "Pharmacology",
      connection: "Nitro/hydralazine/ACEi-ARB and digoxin — every agent maps to exactly one printed dial (or both, for ACEi/ARBs).",
    },
    {
      subject: "Pathology",
      connection: "Hypertensive heart disease (Laplace hypertrophy → HF) and systolic dysfunction are this page's long-term arc.",
    },
    {
      subject: "Respiratory",
      connection: "Hypoxia/hypercapnia depress contractility — the lung's gases are cardiac inotropes.",
    },
  ],
  mechanisms: [
    {
      id: "beta1-pka-calcium-cascade",
      title: "The β1 → PKA → calcium cascade — catecholamine inotropy",
      context: "Cardiac myocyte, sympathetic stimulation",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Norepinephrine hits β1 receptors",
            sublabel: "Gs → cAMP → protein kinase A activated (the printed chain's entry point).",
            variant: "input",
          },
          {
            id: "s1",
            label: "PKA phosphorylates phospholamban",
            sublabel: "Disinhibits the SR Ca2+ ATPase → ↑ Ca2+ storage in the sarcoplasmic reticulum (faster refill).",
            variant: "process",
          },
          {
            id: "s2",
            label: "PKA phosphorylates Ca2+ channels",
            sublabel: "↑ Ca2+ entry per beat → ↑ Ca2+-induced Ca2+ release (the plateau's trigger, amplified).",
            variant: "process",
          },
          {
            id: "s3",
            label: "Intracellular Ca2+ rises",
            sublabel: "More trigger calcium → more contractile force — the inotropic state climbs.",
            variant: "process",
          },
          {
            id: "o1",
            label: "SV rises (contractility dial)",
            sublabel: "The printed ↑-SV list: anxiety/exercise catecholamines.",
            variant: "output",
          },
          {
            id: "o2",
            label: "Digoxin converges on the same pool",
            sublabel: "Na+/K+ pump block → ↑ Na+ → ↓ Na/Ca exchanger → ↑ intracellular Ca2+ — a second road to the same endpoint.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1" },
          { from: "trigger", to: "s2" },
          { from: "s1", to: "s3" },
          { from: "s2", to: "s3" },
          { from: "s3", to: "o1" },
          { from: "o1", to: "o2" },
        ],
        caption:
          "Two phosphorylation targets (phospholamban, Ca2+ channel) and one pump-poison (digoxin) all end at the same place: more intracellular calcium, more stroke volume.",
      },
    },
    {
      id: "laplace-compensation",
      title: "Laplace compensation — how the LV answers chronic pressure",
      context: "Chronic hypertension",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "MAP rises chronically",
            sublabel: "Afterload ≈ MAP — the ejection dial climbs.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Wall tension rises (Laplace numerator)",
            sublabel: "Stress = P × r / (2 × T) — with P up, stress climbs.",
            variant: "process",
          },
          {
            id: "s2",
            label: "LV thickens (hypertrophy)",
            sublabel: "The printed compensation: thickening ↑ the denominator (2 × thickness) to ↓ wall stress.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Stress normalized — wall preserved",
            sublabel: "Concentric LV hypertrophy: the ventricle pays O2 demand for stress control.",
            variant: "output",
          },
          {
            id: "o2",
            label: "Chronic price: hypertensive heart disease",
            sublabel: "The adaptation's long arc — LVH → diastolic dysfunction → HF (downstream pages).",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1" },
          { from: "s1", to: "s2" },
          { from: "s2", to: "o1" },
          { from: "o1", to: "o2" },
        ],
        caption:
          "The heart answers pressure with geometry: numerator up, denominator follows — compensation today, cardiomyopathy on a long enough timeline.",
      },
    },
  ],
};
