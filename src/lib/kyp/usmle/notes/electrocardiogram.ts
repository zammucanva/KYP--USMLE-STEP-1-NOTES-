import type { KypUsMLENote } from "../types";

// KYP USMLE 2026 — cardiovascular batch cv14 (pdf 319 / book 297).
// Source: First Aid 2026, Part 1 pdf 319 (book 297) — Electrocardiogram.

export const electrocardiogram: KypUsMLENote = {
  id: "electrocardiogram",
  title: "Electrocardiogram (Conduction and Waves)",
  subtitle: "One pathway, one strip: the impulse's route from SA node to Purkinje fibers becomes the P-QRS-T architecture, and every named interval is a box on the paper. Learn the route, then read the waves.",
  subject: "Cardiovascular · ECG",
  system: "Section III · Cardiovascular — Physiology",
  pilotCategory: "ECG interpretation",
  difficulty: 3,
  readTime: 13,
  sourceRef: "First Aid 2026, Part 1 pp. 297 (electrocardiogram)",
  tags: [
    "conduction pathway",
    "PR interval",
    "QRS complex",
    "QT interval",
    "Bachmann bundle",
    "ANP",
    "BNP",
    "U wave",
  ],
  core: {
    what: "The cardiac conduction pathway — SA node → right atrium (via internodal tracts) and left atrium (via the interatrial Bachmann bundle) → AV node → bundle of His → right bundle branch and left bundle branch (which divides into left anterior and posterior fascicles) → Purkinje fibers → ventricles — plus the ECG wave-by-wave glossary (P wave through U wave) with normal intervals (PR 120-200 msec, QRS ≤100 msec), the paper's calibration (5 mm = 0.2 seconds), and the ANP/BNP natriuretic-peptide blocks tied to the atria and ventricles.",
    why: "The conduction route is the skeleton for every arrhythmia question (where can the impulse block, re-enter, or escape?) and the wave glossary is the vocabulary of every ECG stem. The AV node's 100-msec delay explains the PR interval physiologically rather than as a memorized number.",
    keyIdea: "Route first: SA node (upper crista terminalis, near SVC — dominant pacemaker, slow upstroke) fires → both atria (Bachmann bundle to the left) → AV node (interatrial septum near coronary sinus opening, PDA blood supply, 100-msec delay for ventricular filling) → bundle of His → RBB + LBB (anterior + posterior fascicles) → Purkinje fibers → ventricles. Then read: P = atrial depolarization; PR = atrial-to-ventricular start (120-200 msec); QRS = ventricular depolarization (≤100 msec); QT = depolarization + contraction + repolarization; T = ventricular repolarization (inversion → ischemia/recent MI); J point = end-QRS/start-ST; ST segment = isoelectric (depolarized ventricles); U wave = hypokalemia ('hypUkalemia'), bradycardia. Pacemaker hierarchy: SA > atria > AV > His-Purkinje/ventricles; conduction speed: His-Purkinje > atria > ventricles > AV node — 'He Parks At Ventura AVenue.'",
  },
  blocks: [
    {
      kind: "visual",
      visualId: "ecg-conduction-map",
      title: "The conduction map and the wave glossary",
      caption: "The impulse route (SA node → Bachmann bundle/internodal tracts → AV node → His → bundle branches with fascicles → Purkinje fibers) drawn over the heart, beside a redrawn ECG complex with every wave, interval, and segment labeled, and the ANP/BNP peptide blocks beneath.",
      notice: "Match each conduction segment to its ECG readout: atrial conduction = P wave and PR; the AV node's slow crawl = the isoelectric PR segment pause; the His-Purkinje highway = the sharp QRS spike; ventricular recovery = the T wave.",
    },
    {
      kind: "table",
      title: "The conduction pathway — printed route with node facts",
      columns: [
        "Station",
        "Printed facts",
        "ECG readout",
      ],
      rows: [
        [
          "SA node",
          "Located in upper crista terminalis near SVC; typically serves as dominant 'pacemaker' for HR, with slow phase of upstroke",
          "Sets the rhythm; its slow upstroke = pacemaker phase 0 (book 296)",
        ],
        [
          "Atrial spread",
          "SA node → right atrium (via internodal tracts) and left atrium (via interatrial bundle/Bachmann bundle)",
          "P wave — atrial depolarization",
        ],
        [
          "AV node",
          "Located in interatrial septum near coronary sinus opening; blood supply via PDA; 100-msec delay allows time for ventricular filling",
          "PR interval (120-200 msec) and the isoelectric PR segment",
        ],
        [
          "Bundle of His → bundle branches",
          "→ bundle of His → right bundle branch and left bundle branch (which divides into left anterior and posterior fascicles)",
          "QRS complex — ventricular depolarization (≤100 msec)",
        ],
        [
          "Purkinje fibers → ventricles",
          "Fastest conduction territory — the QRS spike",
          "J point marks its end; ST segment follows",
        ],
      ],
      caption: "The printed route carried station by station; the printed speed/pacemaker rankings ride beneath it (pacemaker rates SA > atria > AV > His-Purkinje/ventricles; conduction speed His-Purkinje > atria > ventricles > AV node — 'He Parks At Ventura AVenue').",
    },
    {
      kind: "table",
      title: "The wave glossary — printed definitions verbatim",
      columns: [
        "Component",
        "Definition (printed)",
        "Normal / clinical note",
      ],
      rows: [
        ["P wave", "Atrial depolarization", "—"],
        [
          "PR interval",
          "Time from start of atrial depolarization to start of ventricular depolarization",
          "Normally 120-200 msec",
        ],
        [
          "QRS complex",
          "Ventricular depolarization",
          "Normally ≤100 msec",
        ],
        ["QT interval", "Ventricular depolarization, contraction, repolarization", "—"],
        [
          "T wave",
          "Ventricular repolarization",
          "Inversion may indicate ischemia or recent MI",
        ],
        [
          "J point",
          "Junction between end of QRS complex and start of ST segment",
          "The ST-elevation landmark (STEMI definitions anchor here)",
        ],
        ["ST segment", "Isoelectric — ventricles depolarized", "Between QRS end and T start"],
        [
          "U wave",
          "Prominent in hypokalemia (think hyp“U”kalemia), bradycardia",
          "After the T wave; the print's own pun",
        ],
      ],
      caption: "All eight printed components carried verbatim; the paper's printed calibration (5 mm = 0.2 seconds) is the counting key for every interval.",
    },
    {
      kind: "table",
      title: "The natriuretic peptides — printed ANP/BNP blocks",
      columns: [
        "Peptide",
        "Source and trigger (printed)",
        "Action (printed)",
      ],
      rows: [
        [
          "Atrial natriuretic peptide (ANP)",
          "Released from atrial myocytes in response to ↑ blood volume and atrial pressure",
          "Acts via cGMP. Causes vasodilation and ↓ Na+ reabsorption at the renal collecting tubule. Dilates afferent renal arterioles and constricts efferent arterioles, promoting diuresis and contributing to 'aldosterone escape' mechanism",
        ],
        [
          "B-type (brain) natriuretic peptide (BNP)",
          "Released from ventricular myocytes in response to ↑ tension",
          "Similar physiologic action to ANP, with longer half-life. BNP blood test used for diagnosing HF (very good negative predictive value)",
        ],
      ],
      caption: "Both peptide blocks carried whole — ANP is the atrial-stretch hormone (the P-wave chambers), BNP is the ventricular-tension hormone (the QRS chambers), and the ECG's two electrical events map onto the two peptide sources.",
    },
    {
      kind: "text",
      title: "Why the AV node's 100-msec delay matters — the physiology of the PR interval",
      body: [
        "The AV node sits in the interatrial septum near the coronary sinus opening and is fed by the PDA — the same posterior-territory artery whose ischemia produces nodal (Wenckebach) blocks. Its conduction is deliberately slow: fast Na+ channels are permanently inactivated (book 296), so the upstroke crawls through L-type calcium channels. The printed consequence: a 100-msec delay that allows time for ventricular filling — atrial kick completes before the ventricle contracts.",
        "That delay IS the PR interval's flat segment (the PR segment between P and QRS). The two ranking lines on the page — pacemaker rates SA > atria > AV > His-Purkinje/ventricles, and conduction speed His-Purkinje > atria > ventricles > AV node — are mirror images: the slowest conductor is the most automatic pacemaker, which is what makes the SA node the rhythm leader and the AV node the gate.",
        "The mnemonic 'He Parks At Ventura AVenue' orders conduction speed (His-Purkinje, atria, ventricles, AV node). Fast-territory conduction (Purkinje fibers) is what makes the QRS a spike rather than a hill — the whole ventricular mass depolarizes in ≤100 msec.",
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title: "The two interval numbers the exam always wants",
      body: "PR 120-200 msec (longer = 1st-degree AV block territory) and QRS ≤100 msec (wider = bundle branch block, ventricular origin, or hyperkalemia territory). The paper calibration — 5 mm = 0.2 seconds — converts boxes to milliseconds: 1 mm = 0.04 sec, so a PR of 5 large boxes is 1 second. QT is the depolarization-contraction-repolarization envelope (class III drugs stretch it; torsades lives at its long end).",
    },
    {
      kind: "callout",
      variant: "memory",
      title: "ANP vs BNP — atrium vs ventricle",
      body: "The ECG's architecture is the mnemonic: the P-wave chambers (atria) release ANP when stretched by ↑ blood volume and atrial pressure; the QRS chambers (ventricles) release BNP under ↑ tension. Both work through cGMP, both natriurese, but BNP's longer half-life is what makes the clinical blood test usable — with a very good NEGATIVE predictive value for HF (a low BNP argues strongly against heart failure).",
    },
  ],
  clinical: [
    {
      kind: "list",
      title: "Stems that run through this page",
      items: [
        {
          lead: "Inferior MI (ST elevation in II, III, aVF) develops Wenckebach",
          text: "The AV node's blood supply via PDA is in the infarct territory — nodal ischemia, transient block (book 333 cross-reference).",
        },
        {
          lead: "T-wave inversions across the precordial leads in a chest-pain patient",
          text: "The printed T-wave note: inversion may indicate ischemia or recent MI.",
        },
        {
          lead: "PR interval of 240 msec in an asymptomatic athlete",
          text: "PR > 200 msec = 1st-degree AV block — the PR interval definition is the diagnostic threshold's home.",
        },
        {
          lead: "QRS of 140 msec with a wide-complex rhythm after hyperkalemia",
          text: "QRS ≤100 msec is normal — a wide QRS means ventricular (or bundle) depolarization slowed; hyperkalemia is the classic metabolic cause.",
        },
        {
          lead: "Dyspneic patient with a low BNP — can you exclude heart failure?",
          text: "BNP's very good NEGATIVE predictive value says a low BNP argues strongly against HF; the longer half-life makes the test reliable.",
        },
        {
          lead: "Patient on loop diuretics with a new U wave on the ECG",
          text: "The printed U-wave rule: prominent in hypokalemia (hyp'U'kalemia), bradycardia — check the potassium.",
        },
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A rhythm strip shows a PR interval of 260 msec with every P conducted.",
        discriminator: "PR > 200 msec, 1:1 conduction",
        concept: "Delayed AV nodal conduction without dropped beats",
        answer: "1st-degree AV block (the PR interval's normal ceiling is 120-200 msec)",
      },
      {
        stem: "An ECG shows a tall narrow spike after each P wave with an isoelectric pause between the P and the spike.",
        discriminator: "Isoelectric PR segment = the AV node's 100-msec delay",
        concept: "Slow nodal conduction buys ventricular filling time",
        answer: "Normal PR physiology — the delay is a feature, not a block",
      },
      {
        stem: "A patient with vomiting and diuretic overuse has a new wave after every T wave.",
        discriminator: "Prominent U wave + hypokalemia context",
        concept: "The printed U-wave rule (hyp'U'kalemia, bradycardia)",
        answer: "Hypokalemia with prominent U waves — replace potassium",
      },
      {
        stem: "A dyspneic 70-year-old has a BNP of 40 pg/mL.",
        discriminator: "Low BNP — very good negative predictive value",
        concept: "BNP is released from ventricular myocytes under ↑ tension; low levels argue against HF",
        answer: "Heart failure largely excluded — pursue other dyspnea causes",
      },
    ],
    traps: [
      {
        a: "PR interval",
        b: "PR segment",
        whyConfused: "Both start at the P wave and sound identical.",
        keyDifference: "PR INTERVAL runs from the START of the P wave to the START of the QRS (120-200 msec); the PR SEGMENT is the flat piece BETWEEN the end of P and the start of QRS — the AV node's isoelectric delay made visible.",
        clue: "Interval = P-start to QRS-start; segment = the flat pause inside it.",
      },
      {
        a: "ST segment",
        b: "QT interval",
        whyConfused: "Both live after the QRS.",
        keyDifference: "ST segment is ISOELECTRIC (ventricles depolarized, between QRS end and T start — the J point is its beginning); the QT interval is the whole depolarization-contraction-repolarization envelope from QRS start to T end.",
        clue: "Flat piece = ST segment; full electrical heartbeat = QT.",
      },
      {
        a: "ANP (atria)",
        b: "BNP (ventricles)",
        whyConfused: "Both natriuretic peptides, both cGMP, both diuresis.",
        keyDifference: "ANP: atrial myocytes, trigger ↑ blood volume and atrial pressure. BNP: ventricular myocytes, trigger ↑ tension; longer half-life → the clinical HF test (great NEGATIVE predictive value).",
        clue: "P wave = atrium = ANP; QRS chamber = ventricle = BNP. 'B' for both brain and Blood-test.",
      },
    ],
    pivots: [
      {
        lookAlike: "Any 'name this ECG component' stem",
        differentiator: "What is the ventricle doing at that moment?",
        correctPath: "Depolarizing atria = P; waiting at the node = PR; depolarizing ventricles = QRS; depolarized and squeezing = ST; repolarizing ventricles = T; after the T = U (hypokalemia/bradycardia). The electrical state names the wave.",
      },
      {
        lookAlike: "Any arrhythmia-localization question",
        differentiator: "Where does the pathway block or re-enter?",
        correctPath: "Pathway skeleton: SA (crista terminalis) → internodal/Bachmann → AV (coronary sinus side, PDA supply) → His → RBB/LBB (anterior/posterior fascicles) → Purkinje. Nodal disease = inferior-MI territory; fascicular disease = anterior territory.",
      },
    ],
    miniCase: {
      vignette: "A 64-year-old man with an inferior STEMI is placed on telemetry. His monitor shows upright P waves each followed by a QRS, but the PR interval gradually stretches from 160 to 280 msec over four beats before a QRS is dropped; the cycle then repeats. The catheterization lab confirms an occluded right coronary artery supplying the posterior descending branch.",
      question: "Which anatomic-physiologic pairing explains why THIS artery's occlusion produced THIS rhythm?",
      options: [
        {
          label: "A",
          text: "The AV node is supplied by the PDA, and its 100-msec calcium-dependent delay makes it vulnerable to nodal ischemia",
          why: "Correct — the printed AV-node facts (interatrial septum near coronary sinus opening, PDA supply, 100-msec delay) localize inferior-MI block to nodal tissue, whose ischemia produces progressive PR stretching (Wenckebach).",
          correct: true,
        },
        {
          label: "B",
          text: "The SA node is supplied by the PDA, and sinus arrest explains the dropped beats",
          why: "The SA node sits in the upper crista terminalis near the SVC (typically nodal/SA artery territory, often RCA — but the dropped QRS after PR stretching is AV nodal behavior, and the print pins the AV node to the PDA).",
        },
        {
          label: "C",
          text: "The bundle of His is supplied by the PDA, and infra-nodal disease explains the dropped QRS",
          why: "Infra-nodal (His-Purkinje) disease drops beats WITHOUT PR stretching (Mobitz II) — the progressive lengthening here marks nodal, not infra-nodal, tissue.",
        },
        {
          label: "D",
          text: "The Purkinje fibers are supplied by the PDA, and ventricular escape explains the pauses",
          why: "Purkinje/ventricular escape rhythms appear in complete block, not in grouped beating with progressive PR — and Purkinje territory is not the printed PDA supply line.",
        },
        {
          label: "E",
          text: "The Bachmann bundle is supplied by the PDA, and interatrial block explains the pattern",
          why: "Bachmann bundle conducts atrium-to-atrium (P-wave morphology), not the PR interval; nothing dropped QRS comes from it.",
        },
      ],
      reasoning: "Progressive PR stretching → dropped QRS (Mobitz I) in an inferior STEMI = AV nodal ischemia in the PDA territory. The page's two printed AV-node facts — coronary-sinus-side location and PDA blood supply with the 100-msec delay — are the entire chain of reasoning.",
    },
  },
  mnemonics: [
    {
      code: "“He Parks At Ventura AVenue”",
      meaning: "Conduction speed high-to-low: His-Purkinje > Atria > Ventricles > AV node — the page's own mnemonic.",
      memorizes: "Speed-of-conduction ranking",
      whenToUse: "Any 'slowest/fastest conduction' question — the AV node is always last (slowest).",
      clinical: "The slowest conductor is the gate that buys ventricular filling.",
    },
    {
      code: "“hyp'U'kalemia puts a U on the strip”",
      meaning: "The printed pun: prominent U waves accompany hypoKALEMIA (and bradycardia).",
      memorizes: "The U wave's clinical meaning",
      whenToUse: "Any ECG with a wave after the T; any hypokalemia vignette.",
      clinical: "Diuretic overuse + U waves → check K+ before more diuresis.",
    },
    {
      code: "“P = Atrium = ANP; QRS = Ventricle = BNP”",
      meaning: "The ECG's two chambers and the two peptides: ANP from atrial myocytes (↑ volume/pressure), BNP from ventricular myocytes (↑ tension).",
      memorizes: "Natriuretic peptide sources and triggers",
      whenToUse: "Any ANP/BNP question; HF-diagnosis test-logic questions.",
      clinical: "BNP's longer half-life = the usable blood test with a very good negative predictive value.",
    },
  ],
  rapidReview: {
    s30: [
      "Pathway: SA node → internodal tracts (RA) + Bachmann bundle (LA) → AV node → bundle of His → RBB + LBB (anterior/posterior fascicles) → Purkinje fibers → ventricles.",
      "SA node: upper crista terminalis near SVC; dominant pacemaker; slow upstroke.",
      "AV node: interatrial septum near coronary sinus opening; PDA blood supply; 100-msec delay for ventricular filling.",
      "PR interval 120-200 msec (P start → QRS start); QRS ≤100 msec (ventricular depolarization).",
      "P = atrial depolarization; T = ventricular repolarization (inversion → ischemia/recent MI); J point = end QRS/start ST; ST segment isoelectric; U wave — hypokalemia (hyp'U'kalemia), bradycardia.",
      "Pacemaker rates: SA > atria > AV > His-Purkinje/ventricles. Conduction speed: His-Purkinje > atria > ventricles > AV node.",
      "ANP: atrial myocytes, ↑ blood volume/pressure, cGMP, diuresis via afferent dilation + efferent constriction (aldosterone escape). BNP: ventricular myocytes, ↑ tension, longer half-life, HF test (great NPV).",
    ],
    m3: [
      "Paper calibration (printed): 5 mm = 0.2 seconds → 1 mm = 0.04 sec; every interval on the strip is countable in boxes.",
      "QT interval = ventricular depolarization, contraction, repolarization — the electrical envelope that class III drugs stretch (torsades at the long end).",
      "T-wave inversion is the printed ischemia/recent-MI flag — the first morphology change most stems offer.",
      "Bachmann bundle = interatrial route for LEFT atrial depolarization — its disease changes P-wave morphology, not PR.",
      "AV nodal slow conduction is physiologic (the 100-msec delay), not pathologic — the PR segment is the delay made visible.",
    ],
    m10: [
      "Full station route with anatomy: SA node (upper crista terminalis, near SVC) → internodal tracts (right atrium) + interatrial bundle/Bachmann bundle (left atrium) → AV node (interatrial septum, coronary sinus opening, PDA supply, 100-msec delay) → bundle of His → right bundle branch + left bundle branch (left anterior + left posterior fascicles) → Purkinje fibers → ventricles.",
      "Wave-component glossary verbatim: P wave—atrial depolarization; PR interval—start atrial → start ventricular depolarization (120-200 msec); QRS complex—ventricular depolarization (≤100 msec); QT interval—ventricular depolarization, contraction, repolarization; T wave—ventricular repolarization (inversion may indicate ischemia or recent MI); J point—junction of end QRS/start ST segment; ST segment—isoelectric, ventricles depolarized; U wave—prominent in hypokalemia (hyp'U'kalemia), bradycardia.",
      "ANP printed block: released from atrial myocytes in response to ↑ blood volume and atrial pressure; acts via cGMP; vasodilation and ↓ Na+ reabsorption at the renal collecting tubule; dilates afferent renal arterioles and constricts efferent arterioles — diuresis + 'aldosterone escape.'",
      "BNP printed block: released from ventricular myocytes in response to ↑ tension; similar action to ANP with longer half-life; BNP blood test for diagnosing HF — very good NEGATIVE predictive value.",
      "The mirror-image rankings: slowest conductor (AV node) is the most automatic pacemaker after the SA node — hierarchy SA > atria > AV > His-Purkinje/ventricles, speed His-Purkinje > atria > ventricles > AV node ('He Parks At Ventura AVenue').",
    ],
  },
  recall: [
    {
      q: "Name the conduction pathway in order.",
      a: "SA node → RA (internodal tracts) and LA (Bachmann bundle) → AV node → bundle of His → RBB and LBB (anterior + posterior fascicles) → Purkinje fibers → ventricles.",
    },
    {
      q: "Where is the AV node, what feeds it, and what does its delay buy?",
      a: "Interatrial septum near the coronary sinus opening; PDA blood supply; the 100-msec delay allows ventricular filling.",
    },
    {
      q: "Normal PR and QRS durations?",
      a: "PR 120-200 msec; QRS ≤100 msec.",
    },
    {
      q: "What does the T wave represent and what does its inversion suggest?",
      a: "Ventricular repolarization; inversion may indicate ischemia or recent MI.",
    },
    {
      q: "What is the J point?",
      a: "The junction between the end of the QRS complex and the start of the ST segment.",
    },
    {
      q: "When are U waves prominent?",
      a: "Hypokalemia ('hypUkalemia') and bradycardia.",
    },
    {
      q: "ANP vs BNP — source and trigger?",
      a: "ANP: atrial myocytes, ↑ blood volume and atrial pressure. BNP: ventricular myocytes, ↑ tension (longer half-life; the HF blood test).",
    },
    {
      q: "The conduction-speed ranking, fastest to slowest?",
      a: "His-Purkinje > atria > ventricles > AV node ('He Parks At Ventura AVenue').",
    },
  ],
  related: [
    {
      title: "Cardiac Action Potentials",
      note: "The cellular engine behind every wave — nodal slow Ca2+ phase 0 builds the PR delay, fast ventricular INa builds the QRS spike.",
      topicId: "cardiac-action-potentials",
    },
    {
      title: "AV Conduction Blocks",
      note: "This page's pathway is the map of where blocks live — PR stretching (nodal) vs constant-PR drops (infra-nodal) follow the route's anatomy.",
      topicId: "av-conduction-blocks",
    },
    {
      title: "Baroreceptors and Chemoreceptors",
      note: "Autonomic output to the SA and AV nodes (the reflex's efferent limb) lands exactly on the two nodal stations of this pathway.",
      topicId: "baroreceptors-chemoreceptors",
    },
    {
      title: "Heart Failure",
      note: "BNP is released from ventricular myocytes under ↑ tension — the failing ventricle's hormone, and the HF test's physiologic basis.",
    },
  ],
  crossLinks: [
    {
      subject: "Renal",
      connection: "ANP dilates afferent and constricts efferent arterioles and blocks collecting-tubule Na+ reabsorption — the 'aldosterone escape' counterweight to the RAAS axis.",
    },
    {
      subject: "Pharmacology",
      connection: "Class I-IV agents, digoxin, and adenosine each pick a station on this pathway — the route is the drug-target map.",
    },
    {
      subject: "Pathology",
      connection: "MI territories map onto the pathway's blood supply (PDA → AV node; septal branches → bundles) — infarct location predicts the block.",
    },
  ],
  mechanisms: [
    {
      id: "av-delay-mechanism",
      title: "The AV node's 100-msec delay — why the heart waits",
      context: "AV node, every cardiac cycle",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Impulse arrives from the atria",
            sublabel: "Spread via internodal tracts (RA) and the Bachmann bundle (LA) — the P wave records it.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Fast Na+ channels permanently inactivated here",
            sublabel: "Nodal resting potential is less negative — the nodal cell cannot fire a sodium spike (book 296).",
            variant: "process",
          },
          {
            id: "s2",
            label: "Conduction crawls through L-type Ca2+ channels",
            sublabel: "Slow conduction velocity — the AV node's phase 0 is calcium-driven; the printed speed ranking puts it LAST.",
            variant: "process",
          },
          {
            id: "s3",
            label: "100-msec delay elapses (PR segment)",
            sublabel: "The printed purpose: allows time for ventricular filling — atrial kick completes.",
            variant: "process",
          },
          {
            id: "o1",
            label: "His-Purkinje highway fires the QRS",
            sublabel: "Fastest conduction territory — the whole ventricular mass depolarizes in ≤100 msec.",
            variant: "output",
          },
          {
            id: "o2",
            label: "Clinically: the PR interval (120-200 msec)",
            sublabel: "The delay's surface readout — and the AV node's PDA supply makes it the inferior-MI block site.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1" },
          { from: "s1", to: "s2" },
          { from: "s2", to: "s3" },
          { from: "s3", to: "o1" },
          { from: "o1", to: "o2" },
        ],
        caption:
          "The AV node is slow ON PURPOSE: inactivated sodium channels force a calcium crawl that buys 100 msec of filling time — the PR segment is that pause made visible.",
      },
    },
    {
      id: "natriuretic-axis",
      title: "ANP and BNP — the heart's own counter-RASA hormones",
      context: "Volume overload / ventricular tension",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Atria stretched; ventricle under tension",
            sublabel: "ANP: ↑ blood volume and atrial pressure. BNP: ↑ ventricular tension (the failing ventricle).",
            variant: "input",
          },
          {
            id: "s1",
            label: "Granules released → cGMP signaling",
            sublabel: "Both peptides act via cGMP — the second messenger shared with nitric oxide's pathway.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Vasodilation + natriuresis",
            sublabel: "↓ Na+ reabsorption at the renal collecting tubule; afferent renal arterioles dilate, efferent constrict → diuresis.",
            variant: "process",
          },
          {
            id: "s3",
            label: "Aldosterone escape",
            sublabel: "The printed contribution — natriuresis blunts the RAAS-driven Na+ retention of chronic volume overload.",
            variant: "process",
          },
          {
            id: "o1",
            label: "ANP: fast atrial barometer",
            sublabel: "Rises with acute atrial stretch — the P-wave chambers complaining about volume.",
            variant: "output",
          },
          {
            id: "o2",
            label: "BNP: the clinical HF test",
            sublabel: "Longer half-life → measurable blood test with a very good NEGATIVE predictive value for HF.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1" },
          { from: "s1", to: "s2" },
          { from: "s2", to: "s3" },
          { from: "trigger", to: "o1" },
          { from: "s3", to: "o2" },
        ],
        caption:
          "The heart hormones its own overload: atrial stretch releases ANP, ventricular tension releases BNP — cGMP, natriuresis, aldosterone escape, and (for BNP) the HF blood test.",
      },
    },
  ],
};
