import type { KypUsMLENote } from "../types";

// KYP USMLE 2026 — cardiovascular batch cv15 (pdf 320 / book 298).
// Source: First Aid 2026, Part 1 pdf 320 (book 298) — Baroreceptors and chemoreceptors.

export const baroreceptorsChemoreceptors: KypUsMLENote = {
  id: "baroreceptors-chemoreceptors",
  title: "Baroreceptors and Chemoreceptors",
  subtitle: "Two sensors, one medulla: stretch sensors in the carotid sinus and aortic arch report pressure, chemoreceptors in the carotid/aortic bodies and brain report gas — the reflex arcs they drive decide every BP-and-heart-rate vignette, from hemorrhage to Cushing.",
  subject: "Cardiovascular · Physiology",
  system: "Section III · Cardiovascular — Physiology",
  pilotCategory: "Autonomic reflexes",
  difficulty: 3,
  readTime: 13,
  sourceRef: "First Aid 2026, Part 1 pp. 298 (baroreceptors and chemoreceptors)",
  tags: [
    "baroreceptors",
    "carotid sinus",
    "nucleus tractus solitarius",
    "Cushing reflex",
    "chemoreceptors",
    "PCWP",
    "Swan-Ganz",
    "carotid massage",
  ],
  core: {
    what: "The pressure-and-gas sensing system: BARORECEPTORS — aortic arch (CN X) and carotid sinus (CN IX) → nucleus tractus solitarius (NTS) of the medulla — detect arterial pressure changes, with three printed clinical behaviors (the hypotension compensation in hypovolemic shock, carotid sinus hypersensitivity from massage/tight collar, and the Cushing reflex component of ↑ ICP); CHEMORECEPTORS — peripheral carotid and aortic bodies (↑ Pco2, ↓ pH, ↓ Po2 < 60 mm Hg) and central brainstem sensors (pH/Pco2 of brain interstitial fluid, blind to Po2, desensitized by chronic ↑ Pco2 in COPD); plus the printed reflex-arc wiring (IX/X afferents → NTS → dorsal motor nucleus of vagus + nucleus ambiguus → efferent X to SA/AV nodes; sympathetic chain to vessels) and the right-sided pressure box (PCWP estimates LA pressure and LVEDP via Swan-Ganz catheter, EXCEPT in mitral stenosis where PCWP > LVEDP).",
    why: "The baroreflex is the answer to every 'what happens to HR and BP when...' physiology stem (hemorrhage, carotid massage, standing, ↑ ICP) and the chemoreceptor split explains the COPD oxygen-drive question. The PCWP/LVEDP exception is a favorite mitral-stenosis hemodynamic trap.",
    keyIdea: "Stretch is the primary signal: ↓ arterial pressure → ↓ stretch → ↓ afferent baroreceptor firing → ↑ efferent sympathetic + ↓ efferent parasympathetic outflow → ↑ vasoconstriction, ↑ HR, ↑ contractility → ↑ BP (the hypovolemic-shock compensation). Reverse it (↑ carotid sinus pressure → ↑ firing → ↑ AV node refractory period → ↓ HR → ↓ CO + peripheral vasodilation) for carotid sinus hypersensitivity. Cushing is the baroreflex hijacked by the brain: ↑ ICP constricts arterioles → cerebral ischemia → ↑ pCO2 and ↓ pH → central sympathetic surge raises perfusion pressure (hypertension) → ↑ stretch → peripheral baroreceptor-induced bradycardia — hypertension + bradycardia (+ respiratory depression) = the triad.",
  },
  blocks: [
    {
      kind: "visual",
      visualId: "baroreceptor-reflex-map",
      title: "The reflex arcs and the pressure map",
      caption: "The printed afferent/efferent wiring (carotid sinus via IX and aortic arch via X → NTS → dorsal motor nucleus of vagus + nucleus ambiguus → vagal efferents to SA/AV nodes; sympathetic chain to vessels) with the three clinical reflex behaviors, the chemoreceptor split, and the PCWP/Swan-Ganz pressure box.",
      notice: "Trace the two nine-and-ten nerves: IX carries the carotid sinus story, X carries both the aortic-arch afferents AND the efferent vagal brake — the same nerve reports pressure and applies the parasympathetic answer.",
    },
    {
      kind: "table",
      title: "The reflex arc — printed wiring diagram, tabulated",
      columns: [
        "Element",
        "Structure (printed labels)",
        "Role",
      ],
      rows: [
        [
          "Afferent — carotid sinus",
          "Carotid baroreceptor (the print's label reads 'Carotid bareoreceptor' — a print typo, carried and documented) via IX: Glossopharyngeal nerve",
          "Reports carotid pressure stretch to the medulla",
        ],
        [
          "Afferent — aortic arch",
          "Aortic baroreceptor via X: Vagus nerve",
          "Reports aortic pressure stretch to the medulla",
        ],
        [
          "Central station",
          "Nucleus tractus solitarius (NTS) — 'Cardiovascular center' of the Medulla",
          "Integrates afferent stretch and chemosensory input",
        ],
        [
          "Efferent — parasympathetic",
          "Dorsal motor nucleus of vagus + Nucleus ambiguus → X: Vagus nerve → SA node, AV node",
          "The vagal brake: ACh slows the nodal phase-4 slope",
        ],
        [
          "Efferent — sympathetic",
          "Thoracic spinal cord → Sympathetic chain ganglion → Sympathetic nerves → Blood vessel (pre-ganglionic and post-ganglionic fibers printed)",
          "Vasoconstriction, ↑ HR, ↑ contractility",
        ],
        [
          "Chemoreceptor afferents",
          "Carotid chemoreceptor (IX territory) and Aortic chemoreceptor (X territory)",
          "Report Pco2/pH/Po2 — drive respiration and sympathetics",
        ],
      ],
      caption: "The printed diagram's labels carried whole, including the figure's 'Normal resting cardiac pressures' panel — whose numbers live in the pressure table below.",
    },
    {
      kind: "table",
      title: "The three printed baroreceptor behaviors",
      columns: [
        "Scenario",
        "Printed chain",
        "Outcome",
      ],
      rows: [
        [
          "Hypotension (hypovolemic shock)",
          "↓ arterial pressure → ↓ stretch → ↓ afferent baroreceptor firing → ↑ efferent sympathetic and ↓ efferent parasympathetic outflow → ↑ vasoconstriction, ↑ HR, ↑ contractility",
          "↑ BP — the key compensatory response in hypovolemic shock",
        ],
        [
          "Carotid sinus hypersensitivity",
          "Elicited by carotid massage, shaving, tight necktie or shirt collar. ↑ carotid sinus pressure → ↑ afferent baroreceptor firing → ↑ AV node refractory period → ↓ HR → ↓ CO",
          "↓ HR + peripheral vasodilation → presyncope/syncope; exaggerated in underlying atherosclerosis, prior neck surgery, older age",
        ],
        [
          "Cushing reflex (component)",
          "↑ intracranial pressure constricts arterioles → cerebral ischemia → ↑ pCO2 and ↓ pH → central reflex sympathetic ↑ in perfusion pressure (hypertension) → ↑ stretch → peripheral reflex baroreceptor–induced bradycardia",
          "Triad of hypertension, bradycardia, and respiratory depression",
        ],
      ],
      caption: "All three printed behaviors carried verbatim in chain form — these are the highest-yield three rows of the page.",
    },
    {
      kind: "compare",
      title: "Chemoreceptors — peripheral vs central",
      columns: ["Peripheral (carotid + aortic bodies)", "Central (brainstem)"],
      rows: [
        {
          label: "Stimuli",
          a: "↑ Pco2, ↓ pH of blood, ↓ Po2 (<60 mm Hg)",
          b: "Changes in pH and Pco2 of brain interstitial fluid (influenced by arterial CO2 — H+ cannot cross the blood-brain barrier)",
        },
        {
          label: "Po2 sensitivity",
          a: "YES — the only sensors that respond to ↓ O2",
          b: "Do NOT respond to Po2",
        },
        {
          label: "Chronic ↑ Pco2 (eg, COPD)",
          a: "Become the ↑ dependence to detect ↓ O2 and drive respiration",
          b: "Become less sensitive (CSF bicarbonate compensation) — the COPD hypoxic-drive physiology",
        },
        {
          label: "Nerve home",
          a: "Carotid body via IX; aortic body via X",
          b: "Directly into medullary respiratory centers",
        },
      ],
      intro: "The printed two-bullet split, re-tabulated — the O2 question always routes to the periphery.",
    },
    {
      kind: "table",
      title: "The pressure box — PCWP and the Swan-Ganz rule",
      columns: [
        "Concept",
        "Printed statement",
        "Exam use",
      ],
      rows: [
        [
          "PCWP definition",
          "Pulmonary capillary wedge pressure (mm Hg) estimates left atrial pressure and LV end-diastolic pressure (LVEDP)",
          "Left-sided filling pressure without left-heart catheterization",
        ],
        [
          "THE EXCEPTION",
          "…except in mitral stenosis, where PCWP > LVEDP",
          "The stenotic mitral valve dams pressure UPSTREAM — the wedge sees LA pressure, not the ventricle behind it",
        ],
        [
          "Measurement",
          "Measured via Swan-Ganz catheter",
          "Right-heart catheterization; the balloon-occluded wedge reads the LA through the pulmonary capillary bed",
        ],
        [
          "Normal resting cardiac pressures",
          "The printed figure's panel: aortic 120/80; PCWP 4-12; right-heart and pulmonary values (25/<5, 25/<12, <8) printed on the pressure bar",
          "Know the wedge range 4-12 mm Hg and the aortic 120/80 anchors",
        ],
      ],
      caption: "The printed PCWP paragraph carried whole plus the figure's pressure-panel numbers as printed (120, 80, 4-12 PCWP, 25, <8, <12, <5, 25, <5, 120, <12).",
    },
    {
      kind: "text",
      title: "The medullary wiring — why IX and X dominate the strip",
      body: [
        "The reflex arc runs through the medulla's cardiovascular center: the nucleus tractus solitarius receives the afferent stretch story from the carotid sinus (IX: glossopharyngeal nerve) and the aortic arch (X: vagus nerve), then dispatches through two efferent columns — the dorsal motor nucleus of the vagus and the nucleus ambiguus send X back to the SA and AV nodes (the vagal brake), while the thoracic spinal cord's sympathetic chain ganglia send sympathetic nerves to the blood vessels (and, with them, the ↑ HR/↑ contractility drive).",
        "The same two nerves double as the chemoreceptor afferents — the carotid body speaks IX, the aortic body speaks X. One wiring harness reports both pressure (stretch) and gas (chemistry); the NTS is the shared inbox. That is why a single vignette can ask about both: hypoxemia and hypotension both land in the NTS and both exit through the sympathetic limb.",
        "The clinical three — hypovolemic compensation, carotid sinus hypersensitivity, and Cushing — are the same arc read in three directions: fewer afferents (hypotension), too many afferents (hypersensitivity), and a centrally forced hypertension that the peripheral baroreflex can only answer with bradycardia.",
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title: "The Cushing reflex chain — memorize the arrows",
      body: "↑ ICP → constricts cerebral arterioles → cerebral ischemia → ↑ pCO2 and ↓ pH → central reflex sympathetic ↑ in perfusion pressure (HYPERTENSION) → ↑ stretch → peripheral reflex baroreceptor-induced BRADYCARDIA. Add respiratory depression and you have the printed triad. The hypertension CAUSES the bradycardia — the peripheral baroreflex is doing its job against a brain-forced pressure. Never read the bradycardia as the primary event.",
    },
    {
      kind: "callout",
      variant: "memory",
      title: "PCWP vs LVEDP — the mitral stenosis exception",
      body: "The wedge normally mirrors the LV's filling pressure because the mitral valve is wide open in diastole. In mitral stenosis the valve dams the column: LA pressure (and therefore PCWP) runs HIGH while the LV behind the stenotic valve fills at LOW pressure — PCWP > LVEDP. Every 'which chamber does the wedge not see' question is this exception.",
    },
  ],
  clinical: [
    {
      kind: "list",
      title: "Stems that run through this page",
      items: [
        {
          lead: "Motorcycle crash, BP 78/50, tachycardic with cool clammy skin",
          text: "Hypovolemic shock — the printed baroreflex chain (↓ stretch → ↑ sympathetic, ↓ parasympathetic → vasoconstriction, ↑ HR, ↑ contractility) is the compensatory response being observed.",
        },
        {
          lead: "Elderly man with tight collar syncope after shaving",
          text: "Carotid sinus hypersensitivity — ↑ carotid sinus pressure → ↑ afferent firing → ↑ AV node refractory period → ↓ HR → ↓ CO + vasodilation; exaggerated by atherosclerosis, prior neck surgery, older age.",
        },
        {
          lead: "Head-injured patient: BP 190/90, pulse 44, irregular breathing",
          text: "Cushing reflex (triad) — the printed chain from ↑ ICP through cerebral ischemia to central sympathetic hypertension and baroreceptor bradycardia.",
        },
        {
          lead: "Severe COPD patient kept on high-flow oxygen becomes somnolent",
          text: "Central chemoreceptors desensitized by chronic ↑ Pco2 — the ↓ O2 drive depends on peripheral carotid bodies; flooding O2 removes the remaining respiratory drive.",
        },
        {
          lead: "Mitral stenosis patient: PCWP 24 mm Hg but echo shows LVEDP 10 mm Hg",
          text: "The printed exception — PCWP > LVEDP in mitral stenosis because the stenotic valve dams pressure upstream of the ventricle.",
        },
        {
          lead: "Which catheter measures the wedge pressure?",
          text: "Swan-Ganz (right-heart) catheter — PCWP estimates LA pressure and LVEDP through the occluded pulmonary capillary bed.",
        },
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A patient hemorrhages 1.5 L of blood; HR rises, skin vasoconstricts, and pulse pressure narrows.",
        discriminator: "↓ arterial pressure → ↓ stretch → ↓ afferent firing",
        concept: "The printed hypotension chain: ↑ sympathetic + ↓ parasympathetic outflow",
        answer: "Baroreflex compensation in hypovolemic shock — vasoconstriction, ↑ HR, ↑ contractility → ↑ BP",
      },
      {
        stem: "Carotid massage in an elderly man with atrial tachyarrhythmia produces sudden sinus slowing and near-syncope.",
        discriminator: "↑ carotid sinus pressure → ↑ afferent firing → ↑ AV node refractory period",
        concept: "Carotid sinus hypersensitivity — exaggerated with atherosclerosis, prior neck surgery, older age",
        answer: "↓ HR → ↓ CO (+ peripheral vasodilation) — the reflex over-fires",
      },
      {
        stem: "A child with a brain tumor develops hypertension, bradycardia, and irregular respirations.",
        discriminator: "↑ ICP → cerebral ischemia → central sympathetic surge → baroreceptor bradycardia",
        concept: "Cushing reflex — the triad of hypertension, bradycardia, respiratory depression",
        answer: "↑ intracranial pressure with impending herniation — the baroreflex responding to brain-forced hypertension",
      },
      {
        stem: "A COPD patient's respiratory drive becomes dependent on hypoxemia rather than CO2.",
        discriminator: "Central chemoreceptors desensitized by chronic ↑ Pco2",
        concept: "Central sensors respond to pH/Pco2 (H+ cannot cross the BBB) and do NOT respond to Po2",
        answer: "Peripheral carotid/aortic bodies carry the ↓ O2 drive — oxygen therapy removes the last signal",
      },
    ],
    traps: [
      {
        a: "Baroreceptors (stretch)",
        b: "Chemoreceptors (gas)",
        whyConfused: "Both live in the same neck/chest neighborhoods and both feed the NTS.",
        keyDifference: "Baroreceptors detect arterial PRESSURE changes via stretch (aortic arch CN X, carotid sinus CN IX → NTS); chemoreceptors detect ↑ Pco2, ↓ pH, ↓ Po2 (<60) peripherally, pH/Pco2 centrally — never stretch.",
        clue: "Pressure = baro; gas/pH = chemo. The peripheral bodies are the only O2 sensors.",
      },
      {
        a: "Cushing bradycardia (peripheral reflex)",
        b: "Vagal bradycardia (direct parasympathetic)",
        whyConfused: "Both slow the heart.",
        keyDifference: "Cushing's bradycardia is SECONDARY — the brain forces hypertension (central sympathetic ↑ perfusion pressure), and the peripheral baroreflex answers with bradycardia via ↑ stretch. Direct vagal bradycardia needs no hypertension.",
        clue: "Hypertension + bradycardia together = baroreceptor-mediated Cushing; bradycardia alone = vagal.",
      },
      {
        a: "PCWP ≈ LVEDP (normal)",
        b: "PCWP > LVEDP (mitral stenosis)",
        whyConfused: "The wedge is taught as 'LA pressure = LVEDP.'",
        keyDifference: "True except in mitral stenosis — the stenotic valve sits between LA and LV, so the wedge (LA proxy) reads HIGH while LVEDP reads LOW.",
        clue: "Any stem pairing a high wedge with a low/normal LVEDP is mitral stenosis until proven otherwise.",
      },
    ],
    pivots: [
      {
        lookAlike: "Any 'what happens to HR/BP' physiology stem",
        differentiator: "Which direction did afferent baroreceptor firing move?",
        correctPath: "↓ firing (hypotension) → sympathetic surge (↑ BP, ↑ HR, ↑ contractility); ↑ firing (hypertension/massage) → parasympathetic surge + ↓ sympathetic (↓ HR, vasodilation). The afferent number IS the answer's direction.",
      },
      {
        lookAlike: "Bradycardia in a neuro patient",
        differentiator: "Is there hypertension and respiratory irregularity?",
        correctPath: "Hypertension + bradycardia + respiratory depression = Cushing triad (↑ ICP, act on the brain); isolated bradycardia without hypertension = vagal/drug causes.",
      },
    ],
    miniCase: {
      vignette: "A 58-year-old man presents after a fall with a fixed dilated pupil and a BP of 205/95. Over the next hour his pulse falls to 40/min and respirations become irregular. He is afebrile with no cardiac history and takes no medications.",
      question: "What mechanism best explains his bradycardia, and what triad does the picture complete?",
      options: [
        {
          label: "A",
          text: "↑ intracranial pressure → cerebral ischemia → central sympathetic hypertension → ↑ baroreceptor stretch → reflex bradycardia; the Cushing triad",
          why: "Correct — the printed Cushing chain exactly: central reflex sympathetic ↑ in perfusion pressure (hypertension), then peripheral reflex baroreceptor-induced bradycardia; with respiratory depression the triad is complete.",
          correct: true,
        },
        {
          label: "B",
          text: "Carotid sinus hypersensitivity from neck pressure → ↑ afferent firing → ↑ AV node refractory period",
          why: "The mechanism produces bradycardia but predicts HYPOTENSION/presyncope — his hypertension is the opposite signature, and there is no collar/massage trigger.",
        },
        {
          label: "C",
          text: "Chemoreceptor stimulation by ↑ Pco2 → direct vagal activation of the SA node",
          why: "Chemoreceptors drive respiration and sympathetics; they are not the printed mechanism for the Cushing bradycardia — the bradycardia runs through the baroreceptor stretch loop.",
        },
        {
          label: "D",
          text: "Hypovolemic shock compensation — ↓ stretch → ↓ afferent firing → ↑ sympathetic outflow",
          why: "That chain raises HR and BP together (shock picture); his bradycardia with hypertension is the mirror image.",
        },
        {
          label: "E",
          text: "Complete heart block from inferior ischemia — Lyme carditis variant",
          why: "No ECG evidence, no Lyme context, no inferior-MI story; and complete block does not explain the respiratory depression — the triad is neurologic.",
        },
      ],
      reasoning: "Fixed pupil + hypertension + bradycardia + respiratory depression = ↑ ICP with herniation risk. The bradycardia is the peripheral baroreflex correctly responding to a brain-forced hypertensive perfusion pressure — the printed Cushing chain, arrow for arrow.",
    },
  },
  mnemonics: [
    {
      code: "“Cushing climbs: pressure up, pulse down, breathing crooked”",
      meaning: "The printed triad of hypertension, bradycardia, and respiratory depression — hypertension CAUSES the reflex bradycardia via ↑ baroreceptor stretch.",
      memorizes: "Cushing reflex chain and its direction of causation",
      whenToUse: "Any neuro patient with hypertension + bradycardia (+ irregular respirations).",
      clinical: "Act on the brain (↓ ICP), not the heart — the bradycardia is the reflex doing its job.",
    },
    {
      code: "“Baro = pressure; chemo = gas; only the bodies smell oxygen”",
      meaning: "Baroreceptors sense stretch (CN IX sinus + CN X arch → NTS); peripheral chemoreceptors (carotid/aortic bodies) are the ONLY sensors of ↓ Po2 (<60 mm Hg), alongside ↑ Pco2/↓ pH; central chemoreceptors read pH/Pco2 only.",
      memorizes: "Sensor taxonomy and the central Po2 blindness",
      whenToUse: "Any sensor-attribution question; the COPD hypoxic-drive stem.",
      clinical: "Chronic ↑ Pco2 (COPD) desensitizes central sensors → the peripheral bodies carry respiration.",
    },
    {
      code: "“IX takes the sinus, X takes the arch — and X also pulls the brake”",
      meaning: "Carotid sinus afferents run in IX (glossopharyngeal); aortic arch afferents in X (vagus); the same X is the efferent vagal brake to SA/AV nodes.",
      memorizes: "The reflex arc's afferent/efferent wiring",
      whenToUse: "Any reflex-arc anatomy question.",
      clinical: "Carotid massage (IX afferents) recruits X efferents — one loop, two nerves.",
    },
    {
      code: "“MS dams the wedge”",
      meaning: "PCWP estimates LA pressure and LVEDP — EXCEPT in mitral stenosis, where the stenotic valve dams pressure upstream: PCWP > LVEDP.",
      memorizes: "The single printed exception to the wedge rule",
      whenToUse: "Any PCWP/LVEDP mismatch question.",
      clinical: "High wedge + low LVEDP = mitral stenosis (Swan-Ganz read through a dammed valve).",
    },
  ],
  rapidReview: {
    s30: [
      "Baroreceptors: aortic arch (CN X) + carotid sinus (CN IX) → NTS of medulla; detect arterial pressure changes.",
      "Hypotension: ↓ stretch → ↓ afferent firing → ↑ sympathetic + ↓ parasympathetic → vasoconstriction, ↑ HR, ↑ contractility → ↑ BP (hypovolemic shock compensation).",
      "Carotid sinus hypersensitivity: massage/shaving/tight collar → ↑ firing → ↑ AV node refractory period → ↓ HR → ↓ CO + vasodilation → presyncope/syncope (worse with atherosclerosis, neck surgery, older age).",
      "Cushing reflex: ↑ ICP → arteriolar constriction → cerebral ischemia → ↑ pCO2/↓ pH → central sympathetic hypertension → ↑ stretch → reflex bradycardia; triad = hypertension, bradycardia, respiratory depression.",
      "Peripheral chemoreceptors (carotid + aortic bodies): ↑ Pco2, ↓ pH, ↓ Po2 <60 mm Hg. Central: pH/Pco2 of brain interstitial fluid; blind to Po2; desensitized by chronic ↑ Pco2 (COPD).",
      "PCWP estimates LA pressure and LVEDP (Swan-Ganz catheter) — EXCEPT mitral stenosis: PCWP > LVEDP.",
      "Arc wiring: NTS → dorsal motor nucleus of vagus + nucleus ambiguus → X to SA/AV nodes; thoracic cord → sympathetic chain → vessels.",
    ],
    m3: [
      "The print labels the carotid sensor 'Carotid bareoreceptor' — a documented print typo (bareoreceptor), not a second receptor type.",
      "Normal resting cardiac pressures figure: aortic 120/80; PCWP 4-12 mm Hg; pulmonary/right-sided values 25/<5, 25/<12, <8 printed on the pressure bar.",
      "ACh from the vagal efferents flattens the SA node's phase-4 slope (book 296) — the reflex's molecular endpoint.",
      "Carotid sinus hypersensitivity's AV-node endpoint (↑ refractory period) is the same physiology β-blockers exploit — nodal refractoriness is the brake.",
      "Central chemoreceptors: H+ cannot cross the blood-brain barrier — arterial CO2 crosses and re-equilibrates with CSF instead.",
    ],
    m10: [
      "Full printed chains — Hypotension: ↓ arterial pressure → ↓ stretch → ↓ afferent baroreceptor firing → ↑ efferent sympathetic and ↓ efferent parasympathetic outflow → ↑ vasoconstriction, ↑ HR, ↑ contractility → ↑ BP (key compensatory response in hypovolemic shock). Carotid sinus hypersensitivity: elicited by carotid massage, shaving, tight necktie or shirt collar; ↑ carotid sinus pressure → ↑ afferent firing → ↑ AV node refractory period → ↓ HR → ↓ CO; also peripheral vasodilation; presyncope/syncope; exaggerated in underlying atherosclerosis, prior neck surgery, older age. Cushing: ↑ ICP constricts arterioles → cerebral ischemia → ↑ pCO2 and ↓ pH → central reflex sympathetic ↑ in perfusion pressure (hypertension) → ↑ stretch → peripheral reflex baroreceptor–induced bradycardia (triad with respiratory depression).",
      "Chemoreceptor split verbatim — Peripheral: carotid and aortic bodies stimulated by ↑ Pco2, ↓ pH of blood, and ↓ Po2 (<60 mm Hg). Central: stimulated by changes in pH and Pco2 of brain interstitial fluid (influenced by arterial CO2 as H+ cannot cross the BBB); do NOT respond to Po2; less sensitive with chronic ↑ Pco2 (eg, COPD) → ↑ dependence on peripheral chemoreceptors to detect ↓ O2 to drive respiration.",
      "PCWP paragraph verbatim: estimates LA pressure and LVEDP, except in mitral stenosis where PCWP > LVEDP; measured via Swan-Ganz catheter — the wedge balloon occludes a pulmonary branch and reads LA pressure through the capillary bed.",
      "The three behaviors are one arc in three directions: too few afferents (shock), too many afferents (hypersensitivity), centrally forced hypertension answered peripherally (Cushing).",
      "Cross-links: the vagal efferent limb lands on SA/AV nodal physiology (phase-4 slope, book 296); the sympathetic limb lands on the vessel wall (α1 vasoconstriction) — the arc's two exits are the autonomic drug map.",
    ],
  },
  recall: [
    {
      q: "Which cranial nerves carry baroreceptor afferents, and from where?",
      a: "CN IX from the carotid sinus; CN X from the aortic arch — both to the nucleus tractus solitarius.",
    },
    {
      q: "The full hypotension compensation chain?",
      a: "↓ arterial pressure → ↓ stretch → ↓ afferent firing → ↑ sympathetic + ↓ parasympathetic → ↑ vasoconstriction, ↑ HR, ↑ contractility → ↑ BP.",
    },
    {
      q: "What triggers carotid sinus hypersensitivity and what is its endpoint?",
      a: "Carotid massage, shaving, tight necktie/collar; endpoint ↑ AV node refractory period → ↓ HR → ↓ CO, with peripheral vasodilation → presyncope/syncope.",
    },
    {
      q: "Explain the Cushing reflex chain.",
      a: "↑ ICP constricts arterioles → cerebral ischemia → ↑ pCO2/↓ pH → central sympathetic hypertension → ↑ stretch → reflex baroreceptor bradycardia (+ respiratory depression = the triad).",
    },
    {
      q: "What do peripheral vs central chemoreceptors each sense?",
      a: "Peripheral (carotid/aortic bodies): ↑ Pco2, ↓ pH, ↓ Po2 <60. Central: pH/Pco2 of brain interstitial fluid only — blind to Po2, desensitized by chronic ↑ Pco2.",
    },
    {
      q: "When does PCWP exceed LVEDP, and via which catheter is PCWP measured?",
      a: "Mitral stenosis (PCWP > LVEDP); measured via Swan-Ganz catheter.",
    },
    {
      q: "Normal PCWP range and aortic pressures from the printed figure?",
      a: "PCWP 4-12 mm Hg; aortic 120/80 mm Hg.",
    },
  ],
  related: [
    {
      title: "Cardiac Action Potentials",
      note: "The reflex's vagal efferent limb terminates on the SA node's phase-4 slope — ACh flattening If is how '↑ parasympathetic outflow' becomes '↓ HR.'",
      topicId: "cardiac-action-potentials",
    },
    {
      title: "Electrocardiogram",
      note: "The efferent arc targets the SA and AV nodes — the exact stations whose electrical signatures (P wave, PR interval) change when the reflex fires.",
      topicId: "electrocardiogram",
    },
    {
      title: "Auscultation Areas and Maneuvers",
      note: "Valsalva strain bends the same baroreflex (↓ venous return → ↓ stretch → reflex tachycardia) — the maneuvers table's hemodynamics ride this arc.",
      topicId: "auscultation-areas-maneuvers",
    },
    {
      title: "Atherosclerosis",
      note: "Carotid sinus hypersensitivity is 'exaggerated in underlying atherosclerosis' — the stiffened vessel is the print's own risk factor.",
      topicId: "atherosclerosis",
    },
  ],
  crossLinks: [
    {
      subject: "Respiratory",
      connection: "Peripheral chemoreceptors drive ventilation at ↓ Po2 <60 mm Hg — the COPD hypoxic-drive physiology lives on this page as much as the lung's.",
    },
    {
      subject: "Neurology",
      connection: "The Cushing triad is a neurosurgical emergency (↑ ICP/herniation) whose cardiovascular signature is printed here.",
    },
    {
      subject: "Renal",
      connection: "The sympathetic efferent limb also drives renin release — the baroreflex and the RAAS are parallel BP-defenders.",
    },
  ],
  mechanisms: [
    {
      id: "baroreflex-arc",
      title: "The baroreflex arc — stretch in, autonomic out",
      context: "Carotid sinus + aortic arch → medulla → nodes and vessels",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Arterial pressure changes stretch the sensors",
            sublabel: "Carotid sinus (IX) + aortic arch (X) baroreceptors — stretch proportional to pressure.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Afferent firing to the NTS",
            sublabel: "The medulla's cardiovascular center — nucleus tractus solitarius integrates the stretch story.",
            variant: "process",
          },
          {
            id: "s2a",
            label: "Parasympathetic limb: DMV + nucleus ambiguus → X",
            sublabel: "Efferent vagus to SA and AV nodes — ACh flattens the nodal phase-4 slope (the brake).",
            variant: "process",
          },
          {
            id: "s2b",
            label: "Sympathetic limb: thoracic cord → chain ganglia",
            sublabel: "Sympathetic nerves to vessels (and heart) — vasoconstriction, ↑ HR, ↑ contractility (the pedal).",
            variant: "process",
          },
          {
            id: "o1",
            label: "High stretch → brake wins",
            sublabel: "↑ firing → ↑ AV node refractory period → ↓ HR → ↓ CO + peripheral vasodilation (massage, hypertension).",
            variant: "output",
          },
          {
            id: "o2",
            label: "Low stretch → pedal wins",
            sublabel: "↓ firing → sympathetic surge: vasoconstriction + ↑ HR + ↑ contractility → ↑ BP (hypovolemic shock).",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1" },
          { from: "s1", to: "s2a" },
          { from: "s1", to: "s2b" },
          { from: "s2a", to: "o1" },
          { from: "s2b", to: "o2" },
        ],
        caption:
          "One sensor pair, one inbox (NTS), two exits (vagal brake, sympathetic pedal) — every BP/HR reflex question is asking which exit is open.",
      },
    },
    {
      id: "cushing-cascade",
      title: "The Cushing cascade — the brain hijacks the baroreflex",
      context: "↑ Intracranial pressure",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "↑ Intracranial pressure",
            sublabel: "Mass effect or hemorrhage raises ICP inside the rigid skull.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Cerebral arterioles constrict",
            sublabel: "The printed first step — pressure compresses the vessel bed.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Cerebral ischemia → ↑ pCO2 and ↓ pH locally",
            sublabel: "Perfusion fails; metabolites accumulate — the ischemic brain screams for flow.",
            variant: "process",
          },
          {
            id: "s3",
            label: "Central reflex sympathetic surge",
            sublabel: "↑ perfusion pressure — the brain force-feeds itself blood: HYPERTENSION.",
            variant: "process",
          },
          {
            id: "s4",
            label: "Peripheral baroreceptors see the surge",
            sublabel: "↑ stretch → reflex baroreceptor–induced BRADYCARDIA — the body answering a pressure the brain, not the heart, created.",
            variant: "process",
          },
          {
            id: "o1",
            label: "The Cushing triad",
            sublabel: "Hypertension + bradycardia + respiratory depression — act on the ICP, not the pulse.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1" },
          { from: "s1", to: "s2" },
          { from: "s2", to: "s3" },
          { from: "s3", to: "s4" },
          { from: "s4", to: "o1" },
        ],
        caption:
          "The brain forces its own perfusion pressure; the peripheral baroreflex can only answer with bradycardia — the triad's hypertension CAUSES its slow pulse.",
      },
    },
  ],
};
