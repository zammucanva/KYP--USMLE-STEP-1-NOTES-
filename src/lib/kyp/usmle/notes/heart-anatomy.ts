import type { KypUsMLENote } from "../types";

// KYP USMLE 2026 — cardiovascular batch cv4 (pdf 309 / book 287).
// Source: First Aid 2026, Part 1 pdf 309 (book 287) — Heart anatomy.

export const heartAnatomy: KypUsMLENote = {
  id: "heart-anatomy",
  title: "Heart Anatomy",
  subtitle: "Most posterior chamber, most anterior chamber, the pericardium's three layers, and the coronary tree with its dominance rules — the anatomy behind dysphagia, hoarseness, trauma, and every infarct territory.",
  subject: "Cardiovascular · Anatomy",
  system: "Section III · Cardiovascular — Anatomy",
  pilotCategory: "Anatomy",
  difficulty: 2,
  readTime: 10,
  sourceRef: "First Aid 2026, Part 1 pp. 287 (heart anatomy)",
  tags: [
    "left atrium",
    "coronary arteries",
    "LAD",
    "PDA dominance",
    "pericardium",
    "phrenic nerve",
    "Ortner syndrome",
  ],
  core: {
    what: "The printed anatomy page: LA is the MOST POSTERIOR part of the heart (enlargement in mitral stenosis → esophageal compression → dysphagia; left recurrent laryngeal nerve compression → hoarseness = Ortner syndrome); RV is the MOST ANTERIOR part and most commonly injured in trauma; LV ≈ 2/3 and RV ≈ 1/3 of the inferior (diaphragmatic) cardiac surface; the pericardium's 3 layers (fibrous → parietal pericardium → epicardium/visceral) with the pericardial space between parietal pericardium and epicardium, phrenic-nerve innervation (referred pain to neck/arms/shoulder, often left); and the coronary tree — LAD (anterior 2/3 of the interventricular septum, anterolateral papillary muscle, anterior LV surface — MOST COMMONLY OCCLUDED), posterior descending artery (posterior 1/3 of septum, posterior 2/3 of ventricular walls, posteromedial papillary muscle, SA and AV nodes by dominance), right (acute) marginal artery (RV), with the dominance rules (right-dominant most common = PDA from RCA; left-dominant ~5-10% = PDA from LCX; codominant ~10-20% = PDA from both), coronary flow peaking in early diastole, and the coronary sinus draining into the RA.",
    why: "This page is the anatomy behind three symptom clusters the exam loops on (dysphagia/hoarseness from LA enlargement; trauma to the RV; pericarditis referred pain) and the entire MI-territory mapping that later pages assume.",
    keyIdea: "Position predicts symptoms: posterior LA → esophagus (dysphagia) and left recurrent laryngeal nerve (hoarseness); anterior RV → trauma. Territory predicts infarct: LAD = anterior wall + septum (most occluded); PDA = posterior septum + nodal supply (bradycardia/heart block when infarcted — the AV-block bridge); LCX = lateral; RCA marginal = RV. Coronary perfusion happens in EARLY DIASTOLE — tachycardia shortens diastole and starves the myocardium.",
  },
  blocks: [
    {
      kind: "visual",
      visualId: "heart-anatomy-map",
      title: "The anatomy map — position, pericardium, coronary tree",
      caption: "The anterior/posterior-chamber facts and the pericardial layers, beside the coronary artery map (LAD, LCX, RCA, marginals, PDA) with the dominance rules and the early-diastole flow note.",
      notice: "The two 'most' facts bracket the heart: LA most posterior, RV most anterior — and the coronary key (AMA/LAD/LCA/LCX/OMA/PDA/PT/PV/RCA abbreviations) is the printed figure's own legend.",
    },
    {
      kind: "table",
      title: "Position facts — printed verbatim",
      columns: ["Fact (printed)", "Clinical consequence (printed)"],
      rows: [
        [
          "LA is the most posterior part of the heart",
          "LA enlargement (eg, in mitral stenosis) → compression of esophagus → dysphagia; compression of left recurrent laryngeal nerve (branch of vagus) → hoarseness (Ortner syndrome)",
        ],
        [
          "RV is the most anterior part of the heart",
          "Most commonly injured in trauma",
        ],
        [
          "LV ≈ 2/3 and RV ≈ 1/3 of the inferior (diaphragmatic) cardiac surface",
          "The diaphragmatic surface is mostly LV — inferior-MI geography",
        ],
      ],
      caption: "The printed position block carried whole (the A/B figure tags are raster furniture in the composite figure, described not reproduced).",
    },
    {
      kind: "table",
      title: "The coronary tree — printed supply list",
      columns: ["Artery", "Territory (printed)", "Clinical note (printed)"],
      rows: [
        [
          "LAD (+ branches)",
          "Anterior 2/3 of interventricular septum; anterolateral papillary muscle; anterior surface of LV",
          "MOST COMMONLY OCCLUDED",
        ],
        [
          "Posterior descending artery (PDA)",
          "Posterior 1/3 of interventricular septum; posterior 2/3 of ventricular walls; posteromedial papillary muscle; SA and AV nodes (as determined by dominance)",
          "Infarct may cause nodal dysfunction (bradycardia or heart block)",
        ],
        [
          "Right (acute) marginal artery",
          "RV",
          "RV infarcts and RV territory",
        ],
        [
          "LCX (+ obtuse marginal)",
          "Lateral LV (printed key: LCX = left circumflex; OMA = obtuse marginal)",
          "Lateral wall",
        ],
      ],
      caption: "The printed supply list carried whole; the printed KEY (AMA = acute marginal; LAD = left anterior descending; LCA (or LM) = left (main); LCX = left circumflex; OMA = obtuse marginal; PDA = posterior descending; PT = pulmonary trunk; PV = pulmonary vein; RCA = right coronary) rides beneath the figure.",
    },
    {
      kind: "table",
      title: "Dominance — the printed three-way split",
      columns: ["Circulation", "Definition (printed)", "Frequency"],
      rows: [
        ["Right-dominant", "PDA arises from RCA", "Most common"],
        ["Left-dominant", "PDA arises from LCX", "~5%-10% of patients"],
        ["Codominant", "PDA arises from both LCX and RCA", "~10%-20% of patients"],
      ],
      caption: "The printed dominance block carried verbatim — 'as determined by dominance' in the PDA row refers to exactly this table.",
    },
    {
      kind: "text",
      title: "Pericardium and coronary physiology — the printed sidebar",
      body: [
        "The pericardium consists of 3 layers from outer to inner: fibrous pericardium, parietal pericardium, and epicardium (visceral pericardium). The pericardial space lies between parietal pericardium and epicardium. The pericardium is innervated by the phrenic nerve — pericarditis can cause referred pain to the neck, arms, or one or both shoulders (often left).",
        "Coronary blood flow to the LV and interventricular septum peaks in EARLY DIASTOLE — systole squeezes the intramyocardial vessels shut, so tachycardia (shortened diastole) starves the LV first. The coronary sinus runs in the left AV groove and drains into the RA — and (book 288 adds) contains the most deoxygenated blood in the body.",
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title: "The three symptom clusters this page answers",
      body: "Dysphagia + hoarseness in mitral stenosis = LA enlargement pressing the esophagus then the left recurrent laryngeal nerve (Ortner). Blunt chest trauma injuring the most anterior chamber = RV. Neck/shoulder pain with pericarditis = phrenic-nerve referred pain (C3-C5 territory). Each is a one-line anatomy fact the stem expects you to translate.",
    },
  ],
  clinical: [
    {
      kind: "list",
      title: "Stems that run through this page",
      items: [
        {
          lead: "Progressive dysphagia in a patient with rheumatic mitral stenosis",
          text: "LA enlargement compressing the esophagus — the most posterior chamber doing its worst.",
        },
        {
          lead: "Hoarseness without laryngeal pathology in severe MS",
          text: "Ortner syndrome — left recurrent laryngeal nerve compression by the enlarged LA.",
        },
        {
          lead: "Steering-wheel chest trauma with right-sided failure signs",
          text: "RV contusion — the most anterior chamber, most commonly injured.",
        },
        {
          lead: "Inferior STEMI with new bradycardia or AV block",
          text: "PDA territory — the artery supplies the SA and AV nodes (by dominance); nodal dysfunction is the printed consequence.",
        },
        {
          lead: "Anterior STEMI — which artery, and which papillary muscle?",
          text: "LAD — anterior 2/3 of the septum and the ANTEROLATERAL papillary muscle; the most commonly occluded coronary.",
        },
        {
          lead: "Sharp chest pain better sitting forward, radiating to the left shoulder",
          text: "Pericarditis — phrenic-nerve referred pain to the neck/arms/shoulder (often left).",
        },
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A patient with mitral stenosis develops hoarseness; laryngoscopy shows a paralyzed left vocal cord.",
        discriminator: "LA enlargement + left recurrent laryngeal nerve",
        concept: "LA is the most posterior chamber — it compresses the nerve as it enlarges",
        answer: "Ortner syndrome (cardiovocal syndrome)",
      },
      {
        stem: "Which coronary is most commonly occluded, and what does it supply?",
        discriminator: "LAD row + 'most commonly occluded'",
        concept: "Anterior 2/3 of septum, anterolateral papillary muscle, anterior LV",
        answer: "LAD — anterior STEMI territory",
      },
      {
        stem: "An inferior MI produces bradycardia and AV block.",
        discriminator: "PDA supplies the SA and AV nodes",
        concept: "Nodal dysfunction from nodal-territory ischemia (dominance-dependent)",
        answer: "PDA-territory infarct (usually RCA in right-dominant circulation)",
      },
      {
        stem: "When does coronary blood flow to the LV peak?",
        discriminator: "Early diastole + compression physiology",
        concept: "Systolic wall pressure shuts intramyocardial flow",
        answer: "Early diastole — tachycardia shortens it",
      },
    ],
    traps: [
      {
        a: "PDA (posterior descending ARTERY)",
        b: "PDA (patent ductus arteriosus)",
        whyConfused: "The abbreviation PDA means two things in this chapter.",
        keyDifference: "Context separates them: the coronary tree (book 287) means posterior descending artery; the fetal/neonatal context (book 286, 295) means patent ductus arteriosus.",
        clue: "Infarct/territory context = posterior descending; murmur/premature context = patent ductus.",
      },
      {
        a: "Anterolateral papillary muscle (LAD territory)",
        b: "Posteromedial papillary muscle (PDA territory)",
        whyConfused: "Both rupture after MI and both cause acute MR.",
        keyDifference: "Posteromedial has a SINGLE supply (PDA) — ruptures more often; anterolateral is DUAL-supplied (LAD + LCX) — protected.",
        clue: "One supplier = fragile; two suppliers = robust.",
      },
      {
        a: "Pericardium innervated by phrenic nerve",
        b: "Pericardium's blood supply / other innervation",
        whyConfused: "Students guess vagus or intercostal.",
        keyDifference: "The printed sentence: phrenic nerve — hence referred pain to neck/arms/shoulder (C3-C5 dermatomes).",
        clue: "Shoulder pain + pericarditis = phrenic (C3-C5 keeps the diaphragm alive).",
      },
    ],
    pivots: [
      {
        lookAlike: "Any MI-territory question",
        differentiator: "Which wall is involved → which artery → what nodal/valvular complication?",
        correctPath: "Anterior/septal → LAD (most occluded); inferior → PDA (RCA in right-dominance; nodal bradycardia/block); lateral → LCX; RV → marginal artery (RCA). Dominance rules decide the PDA's origin.",
      },
      {
        lookAlike: "New dysphagia or hoarseness in a cardiac patient",
        differentiator: "Which chamber enlarges posteriorly?",
        correctPath: "LA (mitral stenosis, LV failure) → esophagus then left recurrent laryngeal — Ortner. RV/LV enlargement does NOT compress the esophagus (anterior/inferior).",
      },
    ],
    miniCase: {
      vignette: "A 62-year-old woman with longstanding rheumatic mitral stenosis reports progressive difficulty swallowing solid food and, over the past month, a hoarse voice. Echocardiography shows severe LA enlargement; no structural esophageal lesion is found on endoscopy.",
      question: "Which anatomic fact explains BOTH symptoms?",
      options: [
        {
          label: "A",
          text: "The LA is the most posterior part of the heart — enlargement compresses the esophagus (dysphagia) and the left recurrent laryngeal nerve (hoarseness, Ortner syndrome)",
          why: "Correct — the printed position block names both consequences for LA enlargement (eg, in mitral stenosis).",
          correct: true,
        },
        {
          label: "B",
          text: "The RV is the most anterior part of the heart and compresses the esophagus when enlarged",
          why: "The RV IS the most anterior chamber — but anterior enlargement cannot compress the retro-esophageal structures; and RV enlargement does not cause hoarseness.",
        },
        {
          label: "C",
          text: "The pericardium's phrenic innervation transmits esophageal irritation",
          why: "Phrenic referred pain goes to the neck/shoulder (pericarditis), not dysphagia; the pericardium is not the compressing structure here.",
        },
        {
          label: "D",
          text: "The PDA (posterior descending artery) supplies the esophagus and larynx",
          why: "The PDA supplies myocardium and nodes — not the esophagus; and the PDA/patent-ductus abbreviation trap does not change coronary territory.",
        },
        {
          label: "E",
          text: "The coronary sinus dilates and presses the laryngeal nerve",
          why: "The coronary sinus runs in the left AV groove and drains into the RA — it is a venous channel, not the compressing mass; the nerve compression is LA enlargement.",
        },
      ],
      reasoning: "Two posterior-compression symptoms in severe MS = the LA's position block, read both ways (esophagus, then left recurrent laryngeal nerve). The print's Ortner mention is the answer's anchor.",
    },
  },
  mnemonics: [
    {
      code: "“LA lives behind (dysphagia, hoarseness); RV rides front (trauma)”",
      meaning: "LA = most posterior (esophagus + left recurrent laryngeal nerve behind it); RV = most anterior (steering-wheel trauma).",
      memorizes: "The two printed position facts",
      whenToUse: "Any compression-symptom or trauma-victim question.",
      clinical: "Ortner syndrome and RV contusion are the two payoff diagnoses.",
    },
    {
      code: "“LAD leads the list of occlusions”",
      meaning: "LAD supplies the anterior septum + anterolateral papillary muscle + anterior LV — and is the most commonly occluded coronary.",
      memorizes: "The coronary supply list and the occlusion statistic",
      whenToUse: "Any 'which artery' MI question.",
      clinical: "Anterior STEMI = LAD until proven otherwise.",
    },
  ],
  rapidReview: {
    s30: [
      "LA = most posterior (LA enlargement → dysphagia + Ortner hoarseness).",
      "RV = most anterior (most common traumatic injury).",
      "LV 2/3 + RV 1/3 of the inferior (diaphragmatic) surface.",
      "Pericardium: fibrous → parietal → epicardium (visceral); pericardial space between parietal and epicardium; phrenic innervation → referred pain neck/arms/shoulder (often left).",
      "LAD: anterior 2/3 septum + anterolateral papillary muscle + anterior LV — most commonly occluded.",
      "PDA: posterior 1/3 septum + posterior 2/3 walls + posteromedial papillary muscle + SA/AV nodes (by dominance) — infarct → bradycardia/heart block.",
      "Dominance: right-dominant (PDA from RCA) most common; left-dominant (from LCX) ~5-10%; codominant (both) ~10-20%.",
      "Coronary flow peaks in early diastole; coronary sinus runs in the left AV groove → drains to RA.",
    ],
    m3: [
      "The printed figure KEY: AMA acute marginal · LAD left anterior descending · LCA (or LM) left (main) · LCX left circumflex · OMA obtuse marginal · PDA posterior descending · PT pulmonary trunk · PV pulmonary vein · RCA right coronary.",
      "Right (acute) marginal artery supplies the RV.",
      "The LCA (left main) divides into LAD + LCX — its occlusion is the 'widow-maker' territory.",
      "Diaphragmatic surface mostly LV explains why inferior MIs are usually RCA/PDA territory (posterior walls).",
      "The coronary-sinus row connects to embryology (left horn of sinus venosus, book 285).",
    ],
    m10: [
      "Position block verbatim: LA is the most posterior part of the heart; LA enlargement (eg, in mitral stenosis) → compression of esophagus → dysphagia; compression of left recurrent laryngeal nerve (branch of vagus) → hoarseness (Ortner syndrome). RV is the most anterior part and most commonly injured in trauma. LV ~2/3 and RV ~1/3 of the inferior (diaphragmatic) cardiac surface.",
      "Pericardium verbatim: 3 layers from outer to inner (fibrous, parietal pericardium, epicardium/visceral pericardium); pericardial space between parietal pericardium and epicardium; phrenic-nerve innervation; pericarditis referred pain to neck, arms, or one or both shoulders (often left).",
      "Coronary supply verbatim: LAD + branches → anterior 2/3 of interventricular septum, anterolateral papillary muscle, anterior surface of LV (most commonly occluded); PDA → posterior 1/3 of septum, posterior 2/3 of ventricular walls, posteromedial papillary muscle, SA and AV nodes (as determined by dominance) — infarct may cause nodal dysfunction (bradycardia or heart block); right (acute) marginal → RV.",
      "Dominance verbatim: right-dominant (most common) = PDA arises from RCA; left-dominant = PDA from LCX (~5-10%); codominant = PDA from both LCX and RCA (~10-20%).",
      "Flow verbatim: coronary blood flow to LV and interventricular septum peaks in early diastole; coronary sinus runs in the left AV groove and drains into the RA (and contains the most deoxygenated blood in the body — book 288).",
    ],
  },
  recall: [
    {
      q: "Most posterior chamber and its two compression consequences?",
      a: "LA — dysphagia (esophagus) and hoarseness (left recurrent laryngeal nerve; Ortner syndrome).",
    },
    {
      q: "Most anterior chamber and its trauma significance?",
      a: "RV — most commonly injured in blunt chest trauma.",
    },
    {
      q: "Which coronary is most commonly occluded?",
      a: "LAD (supplies anterior 2/3 of septum, anterolateral papillary muscle, anterior LV).",
    },
    {
      q: "Why does a PDA-territory infarct cause bradycardia or heart block?",
      a: "The PDA supplies the SA and AV nodes (as determined by dominance).",
    },
    {
      q: "Right- vs left-dominant circulation definitions?",
      a: "Right-dominant (most common): PDA from RCA. Left-dominant (~5-10%): PDA from LCX. Codominant (~10-20%): from both.",
    },
    {
      q: "When does coronary flow to the LV peak, and why?",
      a: "Early diastole — systolic contraction compresses intramyocardial vessels.",
    },
    {
      q: "Pericardial layers from outer to inner?",
      a: "Fibrous pericardium → parietal pericardium → epicardium (visceral pericardium).",
    },
  ],
  related: [
    {
      title: "Heart Embryology Structures",
      note: "The coronary sinus this page traces in the left AV groove is the left horn of the sinus venosus — embryology names what anatomy maps.",
      topicId: "heart-embryology-structures",
    },
    {
      title: "Cardiac Output Variables",
      note: "Afterload (MAP) and the Laplace wall-tension law continue this page's physiology onto the next.",
      topicId: "cardiac-output-variables",
    },
    {
      title: "AV Conduction Blocks",
      note: "PDA-territory infarcts cause nodal dysfunction — the anatomic basis of the inferior-MI block chapters.",
      topicId: "av-conduction-blocks",
    },
  ],
  crossLinks: [
    {
      subject: "Pathology",
      connection: "MI territories, papillary-muscle rupture timing, and pericarditis all hang on this page's geography.",
    },
    {
      subject: "Gross anatomy",
      connection: "The pericardial layers and phrenic innervation sit on the same anatomy as the diaphragm (C3-C5).",
    },
    {
      subject: "Embryology",
      connection: "Coronary sinus = left sinus horn; the great vessels = truncus arteriosus — anatomy recapitulates embryology.",
    },
  ],
  mechanisms: [
    {
      id: "la-posterior-compression",
      title: "Why the enlarged LA produces BOTH dysphagia and hoarseness",
      context: "Mitral stenosis / chronic LA overload",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "LA is the most posterior chamber",
            sublabel: "It sits directly in front of the esophagus and the left recurrent laryngeal nerve's arch course.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Chronic pressure/volume overload enlarges it",
            sublabel: "Mitral stenosis dams the column — LA dilation (printed example).",
            variant: "process",
          },
          {
            id: "s2",
            label: "Esophagus compressed → dysphagia",
            sublabel: "The posterior wall meets the enlarging atrium first.",
            variant: "process",
          },
          {
            id: "s3",
            label: "Left recurrent laryngeal nerve stretched → hoarseness",
            sublabel: "Ortner syndrome — the nerve loops under the aortic arch adjacent to the LA.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Two symptoms, one geometry",
            sublabel: "Both are LA-position facts — no esophageal lesion needed (negative endoscopy).",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1" },
          { from: "s1", to: "s2" },
          { from: "s1", to: "s3" },
          { from: "s2", to: "o1" },
          { from: "s3", to: "o1" },
        ],
        caption:
          "The LA's address is the symptom list: one chamber, two neighbors (esophagus, nerve), two complaints.",
      },
    },
  ],
};
