import type { KypUsMLENote } from "../types";

// Ported from the KYP USMLE 2026 pilot corpus.
// Source: First Aid 2026, Part 1 pp. 262–265 (sympathomimetics; physiologic effects; α-blockers)

export const sympathomimetics: KypUsMLENote = {
  id: "sympathomimetics",
  title: "Sympathomimetics",
  subtitle: "One receptor map (α1, α2, β1, β2, D1) predicts every drug's hemodynamics, indication, and trap — including why epinephrine reverses but phenylephrine only suppresses after α-blockade.",
  subject: "Pharmacology",
  system: "Section II · High-Yield General Principles — Autonomic Drugs",
  pilotCategory: "Pharmacology mechanism",
  difficulty: 2,
  readTime: 12,
  sourceRef: "First Aid 2026, Part 1 pp. 240–243 (sympathomimetics; physiologic effects; α-blockers)",
  tags: [
    "epinephrine",
    "norepinephrine",
    "phenylephrine",
    "isoproterenol",
    "α-blockade",
    "anaphylaxis",
  ],
  core: {
    what: "Sympathomimetics are drugs that reproduce sympathetic nervous system output — either by directly agonizing adrenergic receptors (α1, α2, β1, β2, D1) or by indirectly increasing norepinephrine at the synapse (release, reuptake inhibition).",
    why: "These drugs saturate emergency medicine, cardiology, anesthesia, ophthalmology, and pediatrics — anaphylaxis, shock, asthma, tocolysis, hypotension, ADHD. The USMLE tests them almost entirely through hemodynamic reasoning, not lists.",
    keyIdea: "Predict the hemodynamics from receptor balance: α1 = vasoconstriction (↑ SVR, ↑ diastolic, reflex ↓ HR); β1 = ↑ HR/contractility/CO; β2 = vasodilation + bronchodilation (↓ SVR, reflex ↑ HR). Whichever effect dominates decides blood pressure — and reflexes fill in the heart rate.",
  },
  blocks: [
    {
      kind: "visual",
      visualId: "sympath-receptor-grid",
      title: "Direct-acting sympathomimetics — the receptor activity map",
      caption: "Every direct agonist with its α1/α2/β1/β2/D1 activity profile and headline clinical use.",
      notice: "Read each row left to right and predict before you remember: strong α1 with no β2 (NE, phenylephrine) → pressor + reflex bradycardia. Strong β2 with mild β1 (albuterol) → bronchodilation, minimal HR change.",
    },
    {
      kind: "compare",
      title: "The three intravenous catecholamines side by side",
      intro: "Norepinephrine, epinephrine, and isoproterenol differ in ONE variable — receptor balance — and that single variable produces three different hemodynamic fingerprints.",
      columns: [
        "Norepinephrine (α1 > α2 > β1)",
        "Epinephrine (β > α) / Isoproterenol (β1 = β2)",
      ],
      rows: [
        {
          label: "SVR / MAP",
          a: "↑↑ (vasoconstriction) → net pressor",
          b: "NE side: pressor; isoproterenol: ↓↓ vasodilation → net depressor; epi: pressor at high dose (α dominates), β2-sensitive at low dose",
        },
        {
          label: "Heart rate",
          a: "–/↓ REFLEX BRADYCARDIA (α1 ↑MAP outweighs direct β1)",
          b: "↑↑ — isoproterenol and low-dose epi combine direct β1 + reflex tachycardia",
        },
        {
          label: "Cardiac output",
          a: "–/↑",
          b: "↑↑",
        },
        {
          label: "Pulse pressure",
          a: "↑ modest",
          b: "↑↑ (β-driven systolic rise, β2 diastolic fall)",
        },
        {
          label: "Signature use",
          a: "Hypotension, septic shock",
          b: "Epi: anaphylaxis, asthma, shock, open-angle glaucoma (α effects predominate at HIGH doses; stronger β2 effect than NE). Isoproterenol: EP evaluation of tachyarrhythmias — negligible α",
        },
      ],
    },
    {
      kind: "visual",
      visualId: "epi-reversal",
      title: "Before and after α-blockade",
      caption: "Epinephrine's mean arterial pressure response flips from net increase to net decrease; phenylephrine's is blunted but never flips.",
      notice: "Reversal requires TWO arms (α AND β). Suppression-only happens when the drug has ONE arm (pure α1).",
    },
    {
      kind: "table",
      title: "Indirect-acting sympathomimetics",
      intro: "These do not bind the receptor — they manipulate the norepinephrine already in the synapse.",
      columns: [
        "Drug",
        "Mechanism",
        "Key clinical points",
      ],
      rows: [
        [
          "Amphetamine",
          "Indirect general agonist; reuptake inhibitor; also releases stored catecholamines",
          "Narcolepsy, obesity, ADHD",
        ],
        [
          "Cocaine",
          "Indirect general agonist, reuptake inhibitor",
          "Vasoconstriction + local anesthesia. CAUTION giving β-blockers in cocaine toxicity (unopposed α1 → ↑↑↑ BP, coronary vasospasm). Causes mydriasis in eyes with intact sympathetic innervation → used to CONFIRM Horner syndrome",
        ],
        [
          "Ephedrine",
          "Indirect general agonist; releases stored catecholamines",
          "Nasal decongestion (pseudoephedrine), urinary incontinence, hypotension (eg, anesthesia)",
        ],
      ],
      caption: "Indirect agonists need intact nerve terminals — they do nothing at a denervated (transplanted) synapse, while direct agonists still work. Tachyphylaxis occurs as stores deplete.",
    },
    {
      kind: "list",
      title: "Selected direct agonists — use-cases worth overlearning",
      items: [
        {
          lead: "Albuterol / salmeterol / terbutaline",
          text: "β2 > β1. Albuterol for acute asthma/COPD; salmeterol for serial long-term control; terbutaline for acute bronchospasm and tocolysis.",
        },
        {
          lead: "Dobutamine",
          text: "β1 > β2, α. ↓ BP (mild), ↑ HR, ↑ CO. Cardiac stress testing; acute decompensated HF with cardiogenic shock (inotrope).",
        },
        {
          lead: "Dopamine",
          text: "D1 = D2 > β > α. Inotrope/chronotrope at lower doses (β), vasopressor at high doses (α). Unstable bradycardia, shock.",
        },
        {
          lead: "Fenoldopam",
          text: "D1 agonist. ↓ BP via vasodilation (coronary, peripheral, renal, splanchnic) + ↑ HR, ↑ CO; promotes natriuresis. Postoperative hypertension, hypertensive crisis. Adverse: hypotension, tachycardia, flushing, headache.",
        },
        {
          lead: "Midodrine",
          text: "α1 (prodrug). ↑ BP via vasoconstriction, ↓ HR. Autonomic insufficiency and postural hypotension; may worsen supine hypertension.",
        },
        {
          lead: "Mirabegron",
          text: "β3 agonist for overactive bladder — think 'miraβ3gron.'",
        },
        {
          lead: "Phenylephrine",
          text: "α1 > α2. Hypotension (vasoconstrictor), ocular procedures (mydriatic), rhinitis (decongestant), ischemic priapism.",
        },
      ],
    },
    {
      kind: "table",
      title: "The antidote side of the map — α-blockers (context completes the system)",
      intro: "You cannot reason about α-agonism traps without knowing what blocks them.",
      columns: [
        "Drug",
        "Applications",
        "Adverse effects",
      ],
      rows: [
        [
          "Phenoxybenzamine (nonselective, IRREVERSIBLE)",
          "Pheochromocytoma — preoperative, prevents catecholamine (hypertensive) crisis",
          "Orthostatic hypotension, reflex tachycardia",
        ],
        [
          "Phentolamine (nonselective, reversible)",
          "Severe hypertension on MAO inhibitors + tyramine; cocaine-induced hypertension (2nd line); NE extravasation rescue",
          "Orthostatic hypotension, reflex tachycardia",
        ],
        [
          "Prazosin / terazosin / doxazosin / tamsulosin (α1-selective, '-osin')",
          "BPH urinary symptoms; PTSD (prazosin); hypertension (all except tamsulosin)",
          "1st-dose orthostatic hypotension, dizziness, headache",
        ],
        [
          "Mirtazapine (α2-selective)",
          "Depression",
          "Sedation, ↑ cholesterol, ↑ appetite",
        ],
      ],
      caption: "α2-AGONISTS (clonidine, guanfacine, α-methyldopa, tizanidine) are sympatholytics — the opposite arm: hypertensive urgency, ADHD, Tourette, opioid withdrawal; methyldopa is the HTN drug of pregnancy.",
    },
  ],
  clinical: [
    {
      kind: "list",
      title: "Where each drug saves a life",
      intro: "Anaphylaxis is the highest-yield scenario: epinephrine IM is first-line — α1 raises pressure and reduces angioedema, β1 supports the heart, β2 opens airways and stabilizes mast cells.",
      items: [
        {
          lead: "Anaphylaxis",
          text: "Epinephrine (β > α) — the only drug that addresses airway, circulation, and mediator release simultaneously.",
        },
        {
          lead: "Septic shock with vasodilation",
          text: "Norepinephrine first-line vasopressor (α1 tone restores SVR); epinephrine and vasopressin are alternatives/add-ons.",
        },
        {
          lead: "Cardiogenic shock / acute decompensated HF",
          text: "Dobutamine for inotropy; dopamine when chronotropy is also needed (unstable bradycardia).",
        },
        {
          lead: "Severe asthma not responding to nebulizers",
          text: "Subcutaneous epinephrine; terbutaline for acute bronchospasm (and as tocolytic).",
        },
        {
          lead: "Hypertensive emergency of pregnancy",
          text: "Fenoldopam (D1) is an option postpartum; hydralazine/labetalol commonly preferred — know fenoldopam's renal-vasodilating niche.",
        },
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "Patient on continuous infusion develops hypertension with an unexpectedly SLOW heart rate.",
        discriminator: "Pressor effect + reflex bradycardia = α1-dominant drug",
        concept: "Baroreceptor vagal reflex outweighs direct β1 chronotropy",
        answer: "Norepinephrine (or phenylephrine) infusion",
      },
      {
        stem: "Young adult with chest pain, hypertension, and mydriasis after a party; given propranolol and BP rises further / coronary spasm worsens.",
        discriminator: "Unopposed α1 vasoconstriction after β-blockade",
        concept: "Cocaine is an indirect sympathomimetic (reuptake inhibitor)",
        answer: "Cocaine toxicity — avoid β-blockers; use benzodiazepines ± phentolamine",
      },
      {
        stem: "A patient with anuric renal failure on dopamine 'for renal protection'.",
        discriminator: "Low-dose dopamine renal vasodilation does NOT improve outcomes",
        concept: "D1-selective dosing is a physiological idea that failed clinically",
        answer: "This is an exam favorite 'trap therapy' — do not pick low-dose dopamine for renoprotection",
      },
      {
        stem: "Catamenial/perioperative patient with abrupt hypertension and headache after tyramine-containing meal while on MAO inhibitor.",
        discriminator: "Tyramine releases stored catecholamines; MAOI prevents their breakdown",
        concept: "Indirect sympathomimetic amplification",
        answer: "Hypertensive crisis from MAOI–tyramine interaction (treat with phentolamine)",
      },
    ],
    traps: [
      {
        a: "Norepinephrine",
        b: "Phenylephrine",
        whyConfused: "Both are α-dominant pressors causing reflex bradycardia.",
        keyDifference: "NE has meaningful β1 activity (CO maintained/↑); phenylephrine is essentially pure α1 — CO tends to fall, and after α-blockade NE has partial β1 support while phenylephrine is purely suppressed.",
        clue: "Question about cardiac output or about α-blockade behavior → NE (has β) vs phenylephrine (none).",
      },
      {
        a: "Epinephrine (high dose)",
        b: "Epinephrine (low dose)",
        whyConfused: "Same drug — different receptor hierarchy at different concentrations.",
        keyDifference: "At low doses β2 effects are visible (vasodilation, ↓ diastolic); at high doses α1 vasoconstriction dominates (pressor). Epi is also STRONGER at β2 than norepinephrine.",
        clue: "Dose context in the stem decides the answer — check whether they say 'low-dose' or 'high-dose'.",
      },
      {
        a: "Isoproterenol ↓ BP",
        b: "Epinephrine low-dose ↓ diastolic",
        whyConfused: "Both can lower diastolic pressure via β2.",
        keyDifference: "Isoproterenol has negligible α — net MAP falls. Epinephrine retains α1 tone — systolic still rises, MAP usually preserved or ↑.",
        clue: "If the stem emphasizes 'no α effect' or asks for EP study drug → isoproterenol.",
      },
    ],
    pivots: [
      {
        lookAlike: "Two patients both hypertensive and bradycardic on infusions",
        differentiator: "Does the drug have β1 activity (CO maintained) or not (CO falls)?",
        correctPath: "NE → CO maintained/reflex bradycardia; phenylephrine → CO –/↓ with reflex bradycardia. Match the CO data in the stem.",
      },
      {
        lookAlike: "Cocaine-induced hypertension vs pheochromocytoma crisis",
        differentiator: "Cocaine is indirect (needs intact terminals) and has local anesthesia history/context; pheo secretes its own catecholamines",
        correctPath: "Both can cause hypertensive emergency; β-blocker alone is dangerous in cocaine (unopposed α); pheo gets phenoxybenzamine pre-op + α-blockade first, β-blockade only after α-blockade.",
      },
    ],
    miniCase: {
      vignette: "A 24-year-old man is brought to the emergency department after collapsing at a party. Blood pressure is 210/122 mm Hg, heart rate is 128/min, pupils are dilated, and he is diaphoretic and agitated. ECG shows ST-segment depressions. The team prepares intravenous propranolol for the blood pressure and chest pain.",
      question: "What is the most appropriate next step in management?",
      options: [
        {
          label: "A",
          text: "Administer propranolol to reduce heart rate and myocardial oxygen demand",
          why: "Tempting — HR 128 with ischemic ECG begs for a β-blocker — but in cocaine toxicity β-blockade leaves α1 vasoconstriction unopposed: blood pressure and coronary vasospasm can worsen.",
        },
        {
          correct: true,
          label: "B",
          text: "Administer benzodiazepines for agitation and hyperadrenergic state",
          why: "Correct. Benzodiazepines are first-line for cocaine toxicity — they lower central sympathetic outflow, BP, and HR without creating unopposed α stimulation.",
        },
        {
          label: "C",
          text: "Administer phentolamine",
          why: "Reasonable as a second-line agent for severe cocaine-induced hypertension, but the first move is benzodiazepines; phentolamine is reserved for refractory cases.",
        },
        {
          label: "D",
          text: "Administer norepinephrine for coronary perfusion pressure",
          why: "Dangerous and nonsensical — the patient is already catecholamine-toxic with severe hypertension.",
        },
      ],
      reasoning: "Mydriasis + agitation + hypertension after a party = cocaine (indirect sympathomimetic, reuptake inhibitor). The exam's recurring lesson: never give β-blockers alone in cocaine toxicity — unopposed α1 activation can spike BP and worsen coronary vasospasm.",
    },
  },
  mnemonics: [
    {
      code: "“miraβ3gron”",
      meaning: "Mirabegron = β3 agonist (β-3 for the Bladder).",
      memorizes: "The receptor of the overactive-bladder drug",
      whenToUse: "Any question about overactive bladder / urgency incontinence pharmacotherapy.",
      clinical: "β3 relaxation of detrusor → urinary retention of urgency episodes.",
    },
    {
      code: "α1-blockers end in “-osin”",
      meaning: "Prazosin, terazosin, doxazosin, tamsulosin — all α1-selective.",
      memorizes: "Recognizing α1-selective blockers on sight",
      whenToUse: "BPH/PTSD/hypertension pharmacology questions; 1st-dose orthostatic hypotension.",
      clinical: "Tamsulosin is prostate-selective (no HTN indication); the others treat hypertension too.",
    },
    {
      code: "“Keep your SEAT”",
      meaning: "Spironolactone, Eplerenone, Amiloride, Triamterene — potassium-sparing diuretics (context for the α2/sympatholytic drug list adjacent in First Aid).",
      memorizes: "The K⁺-sparing diuretic class",
      whenToUse: "When a question mixes autonomic drugs with diuretics.",
      clinical: "These cause hyperkalemic metabolic acidosis — the mirror image of loop/thiazide alkalosis.",
    },
  ],
  rapidReview: {
    s30: [
      "α1 = vasoconstriction; β1 = ↑HR/CO; β2 = vasodilation/bronchodilation; D1 = renal vasodilation.",
      "NE (α>β): ↑↑MAP + REFLEX BRADYCARDIA. Isoproterenol (β1=β2): ↓MAP + ↑↑HR.",
      "Epi: β2 > NE's β2 effect; α dominates at high dose. Anaphylaxis drug #1.",
      "Epi REVERSES after α-blockade (has β2 arm); phenylephrine is only SUPPRESSED (pure α1).",
      "Cocaine + β-blocker = unopposed α1 → worse BP/spasm. Use benzodiazepines.",
    ],
    m3: [
      "Dobutamine (β1>β2,α): stress test + cardiogenic shock inotrope, ↓BP, ↑HR, ↑CO.",
      "Dopamine dose ladder: low dose D1 (renal vasodilation — not clinically renoprotective), mid β1 (inotrope/chronotrope for unstable bradycardia), high α1 (vasopressor).",
      "Fenoldopam (D1): postoperative HTN/hypertensive crisis; vasodilates coronary/peripheral/renal/splanchnic beds, natriuresis; SE: hypotension, tachycardia, flushing, headache.",
      "Midodrine (α1 prodrug): autonomic insufficiency/postural hypotension; may worsen supine HTN.",
      "Indirect agonists need intact terminals: amphetamine (narcolepsy, obesity, ADHD), cocaine (vasoconstriction + local anesthesia; mydriasis confirms Horner), ephedrine/pseudoephedrine (decongestion, incontinence, hypotension).",
      "Phentolamine rescues NE extravasation and MAOI-tyramine hypertensive crisis (2nd line for cocaine HTN). Phenoxybenzamine = irreversible, pre-op pheochromocytoma.",
    ],
    m10: [
      "Full hemodynamic grid: CO, HR, MAP, PP for NE (↑/↓/↑↑/↑), epi (↑↑/↑↑/↑/↑↑), isoproterenol (↑↑/↑↑/↓/↑↑).",
      "α2-agonists (sympatholytics): clonidine/guanfacine (hypertensive urgency, ADHD, Tourette, opioid withdrawal — rebound HTN if stopped abruptly), methyldopa (HTN of pregnancy; Coombs+ hemolysis, drug-induced lupus, hyperprolactinemia), tizanidine (spasticity).",
      "β-blocker + cocaine/pheochromocytoma rule: always ensure α-blockade first (phentolamine/phenoxybenzamine); labetalol (α+β) is a partial exception but not the answer in pure cocaine questions.",
      "Epinephrine in open-angle glaucoma: reduces aqueous humor production/increases outflow (α + β2 effects).",
      "Terbutaline tocolysis mechanism: β2 uterine relaxation. Salmeterol = long-acting, not for acute rescue.",
      "Horner confirmation with cocaine (blocks reuptake → mydriasis only if sympathetic chain intact) vs apraclonidine (α1/α2 agonist that dilates the DENERVATED eye better — first-line in many centers).",
    ],
  },
  recall: [
    {
      q: "Which pressor causes reflex bradycardia despite having β1 activity?",
      a: "Norepinephrine — α1-driven ↑MAP triggers vagal reflex strong enough to dominate direct β1 chronotropy.",
    },
    {
      q: "Why does isoproterenol lower MAP while raising HR?",
      a: "β2 vasodilation (↓ SVR) with negligible α — direct β1 tachycardia PLUS reflex tachycardia from falling MAP.",
    },
    {
      q: "After phentolamine, epinephrine's BP effect does what? And phenylephrine's?",
      a: "Epi REVERSES (pressor → depressor via unopposed β2). Phenylephrine is only suppressed — pure α1, no β2 to unmask.",
    },
    {
      q: "Which sympathomimetic is also the diagnostic eye drop for Horner syndrome?",
      a: "Cocaine — mydriasis only occurs with intact sympathetic innervation (it blocks NE reuptake).",
    },
    {
      q: "First-line drug class in cocaine-induced hypertension?",
      a: "Benzodiazepines. Phentolamine is second-line. Avoid β-blockers (unopposed α1).",
    },
    {
      q: "Which D1 agonist is used in hypertensive crisis and promotes natriuresis?",
      a: "Fenoldopam.",
    },
    {
      q: "Which β agonist is used for tocolysis, and via which receptor?",
      a: "Terbutaline — β2-mediated uterine smooth muscle relaxation.",
    },
  ],
  related: [
    {
      title: "AV Conduction Blocks",
      note: "β1 agonists and β-blockers shift AV nodal conduction — the pharmacology and the ECG meet at the PR interval.",
      topicId: "av-conduction-blocks",
    },
    {
      title: "Hypersensitivity Types",
      note: "Anaphylaxis is type I hypersensitivity; epinephrine is the emergency antidote — the two topics share the same resuscitation logic.",
      topicId: "hypersensitivity-types",
    },
    {
      title: "Pheochromocytoma",
      note: "Catecholamine-secreting tumor: diagnose with plasma free metanephrines; treat with irreversible α-blockade (phenoxybenzamine) BEFORE β-blockade and before surgery.",
    },
    {
      title: "Horner syndrome",
      note: "Ptosis, miosis, anhidrosis from sympathetic chain interruption — pharmacologic testing localizes the lesioned neuron.",
    },
  ],
  crossLinks: [
    {
      subject: "Cardiovascular",
      connection: "Baroreceptor reflex physiology converts every vasopressor into a potential bradycardic and vice versa — always reason MAP → baroreflex → HR.",
    },
    {
      subject: "Neurology",
      connection: "Horner syndrome pharmacology (cocaine/apraclonidine testing) is applied sympathetic neuroscience.",
    },
    {
      subject: "Immunology",
      connection: "Mast-cell stabilization and bronchodilation explain why epinephrine, not antihistamine alone, treats anaphylaxis.",
    },
    {
      subject: "Psychiatry",
      connection: "Amphetamine-class drugs (ADHD, narcolepsy) and their stimulant side effects are shared exam territory with substance-use disorders.",
    },
  ],
  mechanisms: [
    {
      id: "norepinephrine-hemodynamics",
      title: "Norepinephrine — why a pure pressor causes BRADYCARDIA",
      context: "α1 > α2 > β1",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "NE infused for septic shock / hypotension",
            sublabel: "Strong α1 agonism with moderate β1 effect.",
            variant: "input",
          },
          {
            id: "s1",
            label: "α1 activation → systemic vasoconstriction",
            sublabel: "Organ — ↑ SVR raises both systolic and diastolic pressures.",
            variant: "process",
          },
          {
            id: "s2",
            label: "↑ mean arterial pressure",
            sublabel: "Organ — Baroreceptors in the carotid sinus and aortic arch fire harder.",
            variant: "process",
          },
          {
            id: "s3",
            label: "Baroreceptor reflex → ↑ vagal outflow",
            sublabel: "Organ — The reflex is powerful enough to outweigh NE's direct β1 chronotropic effect.",
            variant: "process",
          },
          {
            id: "o1",
            label: "↑↑ MAP, ↑ systolic + diastolic",
            sublabel: "Effect: Net pressor effect.",
            variant: "output",
          },
          {
            id: "o2",
            label: "–/↓ heart rate (reflex bradycardia)",
            sublabel: "Clinical: Reflex overrules direct β1 — the classic dissociation.",
            variant: "output",
          },
          {
            id: "o3",
            label: "↑/– cardiac output",
            sublabel: "Effect: Increased preload and contractility fight the slower rate.",
            variant: "output",
          },
          {
            id: "o4",
            label: "Widened pulse pressure only if β1 dominates",
            sublabel: "Lab: NE typically gives a modest PP change — contrast with epinephrine.",
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
          {
            from: "s3",
            to: "o4",
          },
        ],
        caption:
          "A pure pressor produces reflex bradycardia — α1 vasoconstriction raises BP so sharply that the baroreceptor reflex vagally brakes the heart. Read the net effect drug-by-drug, never one receptor at a time.",
      },
    },
    {
      id: "isoproterenol-hemodynamics",
      title: "Isoproterenol — the mirror image",
      context: "β1 = β2, negligible α",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Isoproterenol infused for electrophysiology study",
            sublabel: "Pure β agonism — no α activity at all.",
            variant: "input",
          },
          {
            id: "s1",
            label: "β2 activation → vasodilation",
            sublabel: "Organ — ↓ SVR, ↓ diastolic pressure, ↓ MAP.",
            variant: "process",
          },
          {
            id: "s2",
            label: "β1 activation → ↑ HR and ↑ contractility",
            sublabel: "Organ — Direct chronotropy on top of reflex tachycardia from the falling MAP.",
            variant: "process",
          },
          {
            id: "o1",
            label: "↓↓ MAP (net depressor)",
            sublabel: "Effect: Vasodilation unopposed by any α tone.",
            variant: "output",
          },
          {
            id: "o2",
            label: "↑↑ heart rate (direct + reflex tachycardia)",
            sublabel: "Clinical: Both mechanisms push the same direction.",
            variant: "output",
          },
          {
            id: "o3",
            label: "↑↑ cardiac output",
            sublabel: "Effect: Rate and contractility both up.",
            variant: "output",
          },
          {
            id: "o4",
            label: "Can worsen ischemia",
            sublabel: "Clinical: ↑ demand + ↓ diastolic coronary perfusion pressure.",
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
          {
            from: "s2",
            to: "o4",
          },
        ],
        caption:
          "β1 + β2 with no α: contractility and chronotropy rise, but β2 vasodilation drops the pressure — the baroreceptor reflex now ACCELERATES the heart. The mirror image of norepinephrine.",
      },
    },
    {
      id: "epi-reversal",
      title: "Epinephrine reversal — the α-blockade experiment",
      context: "After α1-blockade (eg, phentolamine)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Epinephrine given after α1 receptors are blocked",
            sublabel: "Epi has both strong β and moderate α activity (β > α).",
            variant: "input",
          },
          {
            id: "s1",
            label: "α1 blocked → no vasoconstriction",
            sublabel: "Molecular — The pressor arm of epinephrine is removed.",
            variant: "process",
          },
          {
            id: "s2",
            label: "β2 vasodilation is left UNOPPOSED",
            sublabel: "Organ — Vessels dilate; SVR falls.",
            variant: "process",
          },
          {
            id: "o1",
            label: "BP response REVERSES: net ↑ → net ↓",
            sublabel: "Effect: 'Epinephrine reversal' — pressor becomes depressor.",
            variant: "output",
          },
          {
            id: "o2",
            label: "Phenylephrine does NOT reverse",
            sublabel: "Effect: Pure α1 agonist has no β2 to unmask — its pressor response is only SUPPRESSED after α-blockade.",
            variant: "output",
          },
          {
            id: "o3",
            label: "Exam-ready dissociation",
            sublabel: "Clinical: Reversal = agonist with both α and β; suppression-only = pure α agonist.",
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
          "Give an α-blocker first and epinephrine flips from pressor to depressant — β2 vasodilation is unmasked. The experiment that proves epinephrine acts on BOTH receptor families.",
      },
    },
  ],
};
