import type { KypUsMLENote } from "../types";

// Ported from the KYP USMLE 2026 pilot corpus.
// Source: First Aid 2026, Part 1 pp. 333–335, 349 (conduction blocks; MI complications; antiarrhythmics)

export const avConductionBlocks: KypUsMLENote = {
  id: "av-conduction-blocks",
  title: "AV Conduction Blocks",
  subtitle: "Four rhythms, one question: what is the P wave doing, and did the QRS follow? Read the PR interval like a sentence — constant and long, lengthening then missing, or completely divorced.",
  subject: "Cardiovascular · ECG",
  system: "Section III · Cardiovascular — Pathology (Arrhythmias)",
  pilotCategory: "ECG interpretation",
  difficulty: 3,
  readTime: 12,
  sourceRef: "First Aid 2026, Part 1 pp. 311–313, 327 (conduction blocks; MI complications; antiarrhythmics)",
  tags: [
    "PR interval",
    "Wenckebach",
    "Mobitz II",
    "complete heart block",
    "pacemaker",
    "Lyme",
  ],
  core: {
    what: "Atrioventricular conduction blocks are delays or interruptions of impulse travel from atria to ventricles through the AV node and His-Purkinje system, graded 1st through 3rd degree by how many atrial impulses reach the ventricles.",
    why: "They are the most-tested ECG family on Step 1, they decide pacemaker vs observation, and they appear as complications of MI (first 48 hours), Lyme disease, and degenerative conduction disease.",
    keyIdea: "Ask two questions of every strip: (1) Is every P followed by a QRS? (2) Is the PR interval constant, progressively lengthening, or irrelevant? 1st degree = all conduct, PR >200 ms, benign. Mobitz I = PR lengthens until a beat drops — AV nodal, benign. Mobitz II = PR constant, beats drop without warning — infra-nodal structural disease, pacemaker. 3rd degree = complete AV dissociation — pacemaker.",
  },
  blocks: [
    {
      kind: "visual",
      visualId: "av-block-ecg",
      title: "The four blocks — original KYP ECG traces",
      caption: "Schematic ECG strips for 1st-degree, Mobitz I (Wenckebach), Mobitz II, and 3rd-degree AV block, with PR-interval behavior annotated above each.",
      notice: "Trace the P waves (teal letters) against the QRS spikes: 1st degree — every P conducts, PR uniformly long. Mobitz I — PR stretches (PR₁ < PR₂ < PR₃), then a P stands alone. Mobitz II — PR identical, then a sudden orphan P. 3rd degree — P waves march to their own drummer regardless of the wide, slow QRS complexes.",
    },
    {
      kind: "table",
      title: "The decision table — block, findings, treatment",
      columns: [
        "Block",
        "ECG findings",
        "Mechanism/site",
        "Treatment",
      ],
      rows: [
        [
          "1st-degree AV block",
          "Prolonged PR interval (>200 msec); PR₁ = PR₂ = PR₃ = PR₄ (all beats conduct)",
          "Delay within the AV node",
          "None required (benign and asymptomatic)",
        ],
        [
          "2nd-degree, Mobitz I (Wenckebach)",
          "Progressive PR lengthening until a dropped beat; variable RR with a pattern (regularly irregular)",
          "AV nodal fatigue (vagal tone, inferior ischemia)",
          "None required (usually asymptomatic)",
        ],
        [
          "2nd-degree, Mobitz II",
          "Dropped beats NOT preceded by PR change; PR constant",
          "Structural disease below the node — ischemia, fibrosis",
          "Usually a pacemaker",
        ],
        [
          "3rd-degree (complete) AV block",
          "P waves and QRS dissociated; atrial rate > ventricular rate; P may sit on QRS or T",
          "Complete failure of AV conduction (fibrosis, MI, Lyme)",
          "Pacemaker",
        ],
        [
          "Bundle branch block",
          "Wide QRS; affected ventricle depolarizes via slow myocyte-to-myocyte spread from the unaffected side",
          "Interruption of left or right bundle branch; degenerative (cardiomyopathy, infiltrative disease)",
          "Treat the underlying disease",
        ],
      ],
    },
    {
      kind: "text",
      title: "Where blocks come from — the MI and channelopathy neighborhood",
      body: [
        "Cardiac arrhythmia is the dominant cause of death before reaching the hospital and within the first 48 hours post-MI — myocardial death and scarring disrupt both the conduction system and the substrate for re-entry. Conduction blocks sit on that complication timeline alongside papillary muscle rupture (2–7 days), interventricular septal rupture (3–5 days), free wall rupture (5–14 days), true aneurysm (weeks–months), and Dressler syndrome (weeks–months).",
        "The hereditary channelopathies explain the younger sudden-death versions: Brugada syndrome (autosomal dominant, loss-of-function Na⁺ channels, pseudo-RBBB with ST elevation V1–V3, ICD to prevent SCD) and congenital long QT — Romano-Ward (autosomal dominant, pure cardiac) and Jervell and Lange-Nielsen (autosomal recessive, sensorineural deafness), usually loss-of-function K⁺ channel mutations affecting repolarization.",
        "Sick sinus syndrome — age-related SA node degeneration — shows bradycardia, sinus pauses (delayed P waves), sinus arrests (dropped P waves), and junctional escape beats; it is the atrial sibling of the AV blocks.",
      ],
    },
    {
      kind: "table",
      title: "Drugs that touch the AV node (antiarrhythmic context)",
      columns: [
        "Class",
        "Drugs",
        "AV node effect",
      ],
      rows: [
        [
          "Class II (β-blockers)",
          "Metoprolol, propranolol, esmolol, atenolol, timolol, carvedilol",
          "↓ SA and AV nodal activity (↓ cAMP, ↓ Ca²⁺); AV node particularly sensitive — ↑ PR interval. Adverse: AV block, bradycardia, HF, COPD/asthma exacerbation, masks hypoglycemia. Overdose antidote: Glucagon, Atropine, Saline (GAS)",
        ],
        [
          "Class IV (non-dihydropyridine CCBs)",
          "Verapamil, diltiazem",
          "Same nodal territory — additive AV block risk with β-blockers",
        ],
        [
          "Class IC",
          "Flecainide, propafenone ('Can I have fries, please?')",
          "Strong Na⁺ channel blockade; contraindicated post-MI and in structural/ischemic heart disease (proarrhythmic)",
        ],
        [
          "Digoxin",
          "—",
          "Vagotonic at therapeutic levels — AV block is a toxicity sign (along with GI, visual, and arrhythmia findings)",
        ],
      ],
      caption: "Any question pairing a rate-control drug with a suspicious bradycardia is pointing at drug-induced AV block.",
    },
  ],
  clinical: [
    {
      kind: "list",
      title: "Presentations that hide a block",
      items: [
        {
          lead: "Inferior MI + new 1st-degree/Mobitz I",
          text: "Right coronary artery supplies the AV node — nodal ischemia is usually transient and vagally mediated; observe.",
        },
        {
          lead: "Anterior MI + new Mobitz II/3rd-degree",
          text: "Anterior septal disease involves the bundle branches below the node — worse prognosis; pacing wire at the bedside.",
        },
        {
          lead: "Young patient, summer, tick exposure, new heart block",
          text: "Lyme carditis — the classic infectious 3rd-degree block; treat and expect reversibility; still warrants temporary pacing if high-grade.",
        },
        {
          lead: "Athlete with asymptomatic bradycardia + Wenckebach during sleep",
          text: "High vagal tone — a normal variant; no treatment.",
        },
        {
          lead: "Elderly patient with syncope and a wide, slow pulse",
          text: "Complete block with ventricular escape until proven otherwise — pacemaker evaluation.",
        },
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A monitor strip shows PR intervals of 320 ms; every P wave is followed by a QRS; the patient is asymptomatic.",
        discriminator: "Uniformly prolonged PR + 1:1 conduction",
        concept: "Delay within the AV node without dropped beats",
        answer: "1st-degree AV block — no treatment",
      },
      {
        stem: "A hospitalized patient with an inferior STEMI develops a rhythm with progressively lengthening PR intervals and a periodically absent QRS.",
        discriminator: "Grouped beating with progressive PR → dropped QRS",
        concept: "AV nodal tissue is ischemic/vagotonic — Wenckebach physiology",
        answer: "Mobitz I — observe; usually transient",
      },
      {
        stem: "A patient 3 days after anterior MI has a constant PR interval with sudden dropped QRS complexes.",
        discriminator: "No PR warning before the drop + anterior (infra-nodal) territory",
        concept: "Structural His-Purkinje disease from ischemia/fibrosis",
        answer: "Mobitz II — pacemaker; may progress to complete block",
      },
      {
        stem: "A hiker with a target-shaped rash 3 weeks ago now has syncope; ECG shows P waves marching independently of wide, slow QRS complexes.",
        discriminator: "AV dissociation + tick exposure",
        concept: "Lyme carditis causes complete heart block",
        answer: "3rd-degree AV block — temporary pacing + Lyme therapy",
      },
    ],
    traps: [
      {
        a: "Mobitz I",
        b: "Mobitz II",
        whyConfused: "Both are '2nd-degree' — both drop beats.",
        keyDifference: "Mobitz I lengthens PR before dropping (nodal, benign, no treatment). Mobitz II drops without warning, PR constant (infra-nodal structural, pacemaker).",
        clue: "Look only at the PR intervals BEFORE the dropped beat — changing → I; identical → II.",
      },
      {
        a: "3rd-degree block",
        b: "AV dissociation from other causes",
        whyConfused: "'Dissociated-appearing' rhythms confuse learners.",
        keyDifference: "True complete block = atrial rate > ventricular rate AND the ventricular rhythm is a regular ESCAPE rhythm; incidental AV dissociation (eg, ventricular tachycardia) has a FASTER ventricular rate.",
        clue: "Count which rhythm is faster — ventricular faster suggests VT with dissociation, not AV block.",
      },
      {
        a: "PAC with blocked conduction",
        b: "Mobitz II",
        whyConfused: "Both show a P without a QRS.",
        keyDifference: "A blocked PAC is PREMATURE — earlier than the scheduled sinus P — and the following pause is compensatory; Mobitz II drops an on-time sinus P.",
        clue: "Compare P-P spacing: premature P → blocked PAC; on-time P → true block.",
      },
    ],
    pivots: [
      {
        lookAlike: "Bradycardia on a monitor",
        differentiator: "PR behavior: long-but-constant (1st), cyclical lengthening (I), constant with sudden drops (II), irrelevant (3rd)",
        correctPath: "Read the PR FIRST, then count conducted beats — the two-step algorithm resolves any block question.",
      },
      {
        lookAlike: "Post-MI bradyarrhythmia — nodal vs infra-nodal",
        differentiator: "Inferior MI (RCA → AV node) vs anterior MI (LAD → bundles)",
        correctPath: "Inferior + Wenckebach → observe; anterior + Mobitz II/complete → pacing. The artery predicts the prognosis.",
      },
    ],
    miniCase: {
      vignette: "A 78-year-old woman is admitted with dizziness after two days of intermittent presyncope. She had an anterior myocardial infarction three years ago. Telemetry shows normal P waves at 72/min; most beats conduct with a PR interval of 180 ms, but intermittently a P wave is followed by no QRS, with no change in PR interval in the preceding beats. The QRS complexes are wide at 130 ms.",
      question: "What is the most appropriate next step in management?",
      options: [
        {
          label: "A",
          text: "Reassurance and outpatient Holter monitoring",
          why: "Appropriate for asymptomatic 1st-degree or Mobitz I — but she is symptomatic, the PR is constant before dropped beats (Mobitz II), and the wide QRS implies infra-nodal disease.",
        },
        {
          correct: true,
          label: "B",
          text: "Permanent pacemaker placement",
          why: "Correct. Symptomatic Mobitz II with a wide QRS after anterior MI = structural His-Purkinje disease with progression risk to complete block — the classic pacemaker indication.",
        },
        {
          label: "C",
          text: "Atropine infusion",
          why: "Atropine accelerates AV NODAL conduction — infra-nodal (Mobitz II) disease can paradoxically worsen as nodal delay falls but the distal block remains; it is not definitive therapy.",
        },
        {
          label: "D",
          text: "Isoproterenol challenge testing",
          why: "Isoproterenol is an EP-study tool for inducing tachyarrhythmias — no role in managing symptomatic second-degree infra-nodal block.",
        },
      ],
      reasoning: "Constant PR + unpredictable dropped beats + wide QRS + old anterior MI = Mobitz II below the node. Below the node, drugs that speed the node do not help; the reliable escape infrastructure is gone — hence pacemaker.",
    },
  },
  mnemonics: [
    {
      code: "“Longer, longer, longer — DROP! (Wenckebach)”",
      meaning: "PR intervals progressively lengthen until a P fails to conduct, then the cycle resets.",
      memorizes: "Mobitz I pattern",
      whenToUse: "Any 2nd-degree block strip with grouped/irregular beating.",
      clinical: "Regularly irregular grouped beating in an asymptomatic patient — benign, observe.",
    },
    {
      code: "“3 = 3rd: P, PR, and QRS all go their separate ways”",
      meaning: "In 3rd-degree block, atrial rate, PR relationship, and ventricular rate are all independent — P waves march through QRS and T waves.",
      memorizes: "Complete AV dissociation",
      whenToUse: "Any ECG where P waves appear to land randomly on the tracing.",
      clinical: "Consider Lyme in the right context; pacemaker is definitive.",
    },
    {
      code: "“I block the node (watch), II block below (pace)”",
      meaning: "Mobitz type I is AV nodal — observe. Type II (and 3rd degree) are infra-nodal — pacemaker.",
      memorizes: "Management fork for 2nd-degree block",
      whenToUse: "Every management question about AV blocks.",
      clinical: "Nodal tissue recovers; His-Purkinje tissue does not.",
    },
  ],
  rapidReview: {
    s30: [
      "1st degree: PR >200 ms, all P conduct, benign, no treatment.",
      "Mobitz I (Wenckebach): progressive PR → dropped beat; nodal; no treatment.",
      "Mobitz II: constant PR, sudden dropped beats; infra-nodal; pacemaker.",
      "3rd degree: complete AV dissociation; atrial rate > ventricular; pacemaker; think Lyme.",
      "β-blockers and CCBs ↑ PR — AV node is their target.",
    ],
    m3: [
      "Bundle branch block: slow myocyte-to-myocyte depolarization of the affected ventricle; degenerative, cardiomyopathy, infiltrative disease.",
      "Sick sinus syndrome: SA node degeneration — bradycardia, sinus pauses/arrests, junctional escapes.",
      "MI arrhythmia timeline: death pre-hospital and first 48 h; peri-infarction pericarditis 1–3 d; papillary rupture 2–7 d (posteromedial >> anterolateral, single vs dual supply); VSD 3–5 d; free wall rupture 5–14 d; pseudoaneurysm 3–14 d; true aneurysm 2 wk–months; Dressler weeks–months.",
      "Brugada: AD, Na⁺ channel loss-of-function, pseudo-RBBB + STE V1–V3, ICD. Long QT: Romano-Ward (AD, cardiac), Jervell & Lange-Nielsen (AR, deafness) — K⁺ channel loss-of-function.",
      "β-blocker overdose antidote: GAS — Glucagon, Atropine, Saline.",
    ],
    m10: [
      "Wide-complex tachycardia rule: QRS ≥120 ms, rhythm originates below the AV node (VT, torsades with long QT — Mg²⁺ if stable, defibrillation if unstable; VF — CPR + defibrillation).",
      "Drug-induced long QT (ABCDEF+NO): antiArrhythmics Ia/III + Arsenic; antiBiotics (macrolides, fluoroquinolones); antiCychotics (haloperidol), Chloroquine; antiDepressants (TCAs), Diuretics (thiazides); antiEmetics (ondansetron); antiFungals (fluconazole); 'Navir' (protease inhibitors); Opioids (methadone).",
      "PAC: ectopic atrial focus, narrow QRS with preceding P, adrenergic (caffeine), benign but ↑ AF/flutter risk. PVC: ectopic ventricular beat, wide QRS, no preceding P, ↓ SV from shortened filling; prognosis follows underlying heart disease.",
      "Class IC (flecainide, propafenone): strong Na⁺ blockade, ERP prolonged in AV node and bypass tracts, no ERP effect in Purkinje/ventricle — contraindicated post-MI/structural heart disease.",
      "Class II β-blocker adverse effects: impotence, COPD/asthma exacerbation, bradycardia/AV block/HF, CNS effects, hypoglycemia masking; metoprolol dyslipidemia; propranolol worsens vasospastic angina; nonselective agents + pheo/cocaine → unopposed α1.",
    ],
  },
  recall: [
    {
      q: "PR interval threshold for 1st-degree AV block?",
      a: ">200 msec, with every P wave followed by a QRS.",
    },
    {
      q: "Which 2nd-degree block usually gets a pacemaker, and why?",
      a: "Mobitz II — dropped beats without PR warning signal structural (often ischemic/fibrotic) infra-nodal disease that can progress to complete block.",
    },
    {
      q: "Define the rhythm where 'P waves march through' with a wide, slow QRS.",
      a: "3rd-degree (complete) AV block — atrial rate > ventricular rate, AV dissociation, escape rhythm.",
    },
    {
      q: "Classic infectious cause of complete heart block?",
      a: "Lyme disease (Lyme carditis).",
    },
    {
      q: "Which MI territory produces Wenckebach, and which produces Mobitz II?",
      a: "Inferior MI (RCA supplies AV node) → Mobitz I; anterior MI (bundle branch territory) → Mobitz II/complete block.",
    },
    {
      q: "Why might atropine worsen Mobitz II?",
      a: "It speeds AV nodal conduction, increasing the rate of impulses arriving at the diseased infranodal tissue, which can drop MORE beats.",
    },
    {
      q: "Antidote triad for β-blocker overdose?",
      a: "Glucagon, Atropine, Saline (GAS).",
    },
  ],
  related: [
    {
      title: "Sympathomimetics",
      note: "β1 agonism vs β-blockade is the pharmacologic dial on AV nodal conduction — PR interval is where the drug class becomes visible on ECG.",
      topicId: "sympathomimetics",
    },
    {
      title: "Atherosclerosis",
      note: "The MI that sets up post-infarction blocks is the terminal event of the plaque rupture cascade.",
      topicId: "atherosclerosis",
    },
    {
      title: "Diabetes Mellitus",
      note: "Diabetic cardiovascular disease and its pharmacotherapy (β-blockers masking hypoglycemia) meet the bradyarrhythmia patient at the intersection of rate control and glucose awareness.",
      topicId: "diabetes-mellitus",
    },
    {
      title: "Antiarrhythmic drug classes",
      note: "Class II/IV nodal agents and class IC sodium blockers map onto the conduction system anatomy taught here.",
    },
  ],
  crossLinks: [
    {
      subject: "Pharmacology",
      connection: "β-blockers, non-DHP calcium channels blockers, digoxin, and adenosine all act at the AV node — the PR interval is their shared ECG readout.",
    },
    {
      subject: "Pathology",
      connection: "MI complication timeline positions conduction blocks in the first 48 hours — before structural ruptures begin.",
    },
    {
      subject: "Infectious disease",
      connection: "Lyme (Borrelia burgdorferi) carditis — the one infectious cause of complete block that Step 1 expects you to name.",
    },
    {
      subject: "Neurology",
      connection: "Syncope differential: Stokes-Adams attacks (transient complete block) vs seizure — the ECG decides.",
    },
  ],
  mechanisms: [
    {
      id: "mobitz1-mechanism",
      title: "Mobitz I (Wenckebach) — the fatiguing AV node",
      context: "AV nodal tissue",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Vagal tone or ischemia slows AV nodal conduction",
            sublabel: "The AV node's conduction velocity depends on calcium-mediated depolarization — high vagal tone (athletes, inferior MI) lengthens it beat by beat.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Each successive impulse finds the node less recovered",
            sublabel: "Molecular — Conduction time (PR interval) lengthens with each beat.",
            variant: "process",
          },
          {
            id: "s2",
            label: "One impulse finally fails to conduct",
            sublabel: "Organ — A P wave appears with no QRS after it — the 'dropped beat.'",
            variant: "process",
          },
          {
            id: "s3",
            label: "The pause lets the node recover",
            sublabel: "Organ — The next PR resets short, and the cycle repeats — 'regularly irregular.'",
            variant: "process",
          },
          {
            id: "o1",
            label: "Usually asymptomatic",
            sublabel: "Clinical: Treatment: none required.",
            variant: "output",
          },
          {
            id: "o2",
            label: "Progressive PR → dropped QRS pattern",
            sublabel: "Lab: The signature on the strip.",
            variant: "output",
          },
          {
            id: "o3",
            label: "AV nodal location = benign prognosis",
            sublabel: "Effect: Contrast with Mobitz II, which lives BELOW the node.",
            variant: "output",
          },
        ],
        edges: [
          {
            from: "trigger",
            to: "s1",
          },
          {
            from: "s1",
            to: "s2",
          },
          {
            from: "s2",
            to: "s3",
          },
          {
            from: "s3",
            to: "o1",
          },
          {
            from: "s3",
            to: "o2",
          },
          {
            from: "s3",
            to: "o3",
          },
        ],
        caption:
          "The AV node fatigues beat by beat — PR lengthens until a beat drops, then the cycle resets. Benign, vagal, and never needs a pacemaker.",
      },
    },
    {
      id: "mobitz2-mechanism",
      title: "Mobitz II — the structurally diseased conduction system",
      context: "Infra-nodal (His-Purkinje)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Structural abnormality: ischemia or fibrosis",
            sublabel: "Anterior MI or degenerative disease damages the His-Purkinje tissue, which depends on fast sodium-channel conduction — all-or-none behavior.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Conduction below the node fails intermittently",
            sublabel: "Pathology — The AV node itself works — PR intervals of conducted beats stay CONSTANT.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Dropped beats occur WITHOUT warning",
            sublabel: "Organ — No lengthening precedes the missing QRS — sudden and unpredictable.",
            variant: "process",
          },
          {
            id: "o1",
            label: "May progress to 3rd-degree block",
            sublabel: "Clinical: The infra-nodal system can fail completely — the reason for pacemaker.",
            variant: "output",
          },
          {
            id: "o2",
            label: "Pacemaker is usually indicated",
            sublabel: "Clinical: Treatment: usually a pacemaker.",
            variant: "output",
          },
          {
            id: "o3",
            label: "Constant PR with sudden drops",
            sublabel: "Lab: The distinguishing strip finding.",
            variant: "output",
          },
        ],
        edges: [
          {
            from: "trigger",
            to: "s1",
          },
          {
            from: "s1",
            to: "s2",
          },
          {
            from: "s2",
            to: "o1",
          },
          {
            from: "s2",
            to: "o2",
          },
          {
            from: "s2",
            to: "o3",
          },
        ],
        caption:
          "The His-Purkinje tissue is structurally diseased — conduction is all-or-nothing, so dropped beats arrive WITHOUT warning. Mobitz II can degenerate into complete block: pacemaker territory.",
      },
    },
    {
      id: "third-degree-mechanism",
      title: "3rd-degree (complete) block — two independent pacemakers",
      context: "Complete AV dissociation",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "No atrial impulse reaches the ventricles",
            sublabel: "Causes include idiopathic fibrosis, MI, and — classically — Lyme disease (the most testable infectious cause).",
            variant: "input",
          },
          {
            id: "s1",
            label: "Atria depolarize on their own (usually 60–100/min)",
            sublabel: "Organ — P waves march through at their own rate.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Ventricles escape from a distal pacemaker",
            sublabel: "Organ — Junctional (~40–60) or ventricular (~20–40) escape rhythm — wide QRS if the escape is ventricular.",
            variant: "process",
          },
          {
            id: "s3",
            label: "The two rhythms intersect randomly",
            sublabel: "Lab — P waves land on QRS complexes, T waves, or anywhere — 'P wave on QRS' / 'P on T.'",
            variant: "process",
          },
          {
            id: "o1",
            label: "Atrial rate > ventricular rate",
            sublabel: "Lab: The rule of complete block.",
            variant: "output",
          },
          {
            id: "o2",
            label: "Pacemaker required",
            sublabel: "Clinical: Escape rates are unreliable for perfusion.",
            variant: "output",
          },
          {
            id: "o3",
            label: "Consider Lyme serology in context",
            sublabel: "Clinical: 'May be caused by Lym3 disease' — the exam's favorite association.",
            variant: "output",
          },
        ],
        edges: [
          {
            from: "trigger",
            to: "s1",
          },
          {
            from: "s1",
            to: "s2",
          },
          {
            from: "s2",
            to: "s3",
          },
          {
            from: "s3",
            to: "o1",
          },
          {
            from: "s3",
            to: "o2",
          },
          {
            from: "s3",
            to: "o3",
          },
        ],
        caption:
          "Atria and ventricles beat independently — the P waves march through, married to no QRS. The narrow escape rhythm tells you the block is high; wide means the escape is ventricular.",
      },
    },
  ],
};
