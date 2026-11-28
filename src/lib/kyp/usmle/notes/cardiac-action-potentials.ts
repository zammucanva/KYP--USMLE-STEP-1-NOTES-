import type { KypUsMLENote } from "../types";

// KYP USMLE 2026 — cardiovascular batch cv13 (pdf 318 / book 296).
// Source: First Aid 2026, Part 1 pdf 318 (book 296) — Cardiac action potentials.

export const cardiacActionPotentials: KypUsMLENote = {
  id: "cardiac-action-potentials",
  title: "Cardiac Action Potentials",
  subtitle: "Two curves, one heart: the fast ventricular AP with its sodium spike and calcium plateau, and the slow pacemaker AP built on the funny current. Name the phase, name the current, name the drug.",
  subject: "Cardiovascular · Physiology",
  system: "Section III · Cardiovascular — Physiology",
  pilotCategory: "Membrane physiology",
  difficulty: 3,
  readTime: 13,
  sourceRef: "First Aid 2026, Part 1 pp. 296 (cardiac action potentials)",
  tags: [
    "phase 0",
    "plateau",
    "funny current",
    "HCN channels",
    "refractory period",
    "SA node",
    "AV node",
    "excitation-contraction coupling",
  ],
  core: {
    what: "The two cardiac action potentials: (1) the MYOCARDIAL (ventricular) AP — phases 0-4 with the rapid Na+ upstroke, the transient K+ notch (phase 1), the Ca2+ plateau ('platwo', phase 2) that triggers SR calcium release and contraction, the K+ repolarization (phase 3), and the K+-dominated resting potential (phase 4), with the effective refractory period spanning roughly phases 0-3; and (2) the PACEMAKER (SA/AV node) AP — phases 1 and 2 ABSENT, phase 0 via L-type Ca2+ channels, phase 4 slow spontaneous diastolic depolarization via If ('funny current') through HCN channels, with the phase-4 slope setting heart rate.",
    why: "Every antiarrhythmic drug class is a phase map (class I = phase 0 Na+, class II = phase 4 slope, class III = phase 3 K+, class IV = phase 0 Ca2+), every nodal-vs-ventricular conduction question rides on the fast-vs-slow channel distinction, and the ACh/catecholamine effects on HR run through the phase-4 slope of the SA node.",
    keyIdea: "Fast cells (ventricular myocytes) run on voltage-gated Na+ (phase 0), conduct fast, have a plateau (Ca2+ influx balancing K+ efflux), and need Ca2+ influx from the ECF to trigger SR Ca2+ release (calcium-induced calcium release) — contraction requires EXTERNAL calcium. Nodal cells (SA/AV) have permanently inactivated fast Na+ channels (less negative resting potential), so phase 0 is slow Ca2+-driven → slow conduction velocity — exactly the property the AV node exploits to impose its delay. Automaticity lives in phase 4: If (HCN, mixed Na+/K+ inward) depolarizes the node to threshold; ACh/adenosine flatten the slope (↓ HR), catecholamines steepen it (↑ HR).",
  },
  blocks: [
    {
      kind: "visual",
      visualId: "cardiac-ap-map",
      title: "The two curves — ventricular AP vs pacemaker AP",
      caption: "Side-by-side redrawn curves: the ventricular action potential with phases 0-4, the ion movements per phase, and the effective refractory period; beside the pacemaker potential with its absent phases 1-2, If-driven phase 4 slope, threshold, and the ACh/catecholamine dials.",
      notice: "The pacemaker curve never rests — phase 4 climbs by itself until threshold; the ventricular curve is flat at −85 mV until something triggers it. Same canvas, opposite philosophies: stability vs automaticity.",
    },
    {
      kind: "table",
      title: "The ventricular AP, phase by phase — printed definitions",
      columns: [
        "Phase",
        "Name / events (printed)",
        "Current (per the curve labels)",
        "Notes",
      ],
      rows: [
        [
          "Phase 0",
          "Rapid upstroke and depolarization — fast voltage-gated Na+ channels open",
          "INa",
          "Occurs in all cardiac myocytes EXCEPT those in the SA and AV nodes",
        ],
        [
          "Phase 1",
          "Initial repolarization — inactivation of voltage-gated Na+ channels; transient outward voltage-gated K+ channels begin to open",
          "IK (transient outward)",
          "The notch",
        ],
        [
          "Phase 2",
          "Plateau ('platwo') — Ca2+ influx through voltage-gated Ca2+ channels balances K+ efflux. Ca2+ influx triggers Ca2+ release from SR and myocyte contraction (excitation–contraction coupling)",
          "ICa and IK",
          "The plateau is why cardiac muscle needs ECF Ca2+ (calcium-induced calcium release)",
        ],
        [
          "Phase 3",
          "Rapid repolarization — K+ efflux through voltage-gated slow delayed-rectifier K+ channels; closure of voltage-gated Ca2+ channels",
          "IK (slow delayed rectifier)",
          "Returns the cell toward resting potential",
        ],
        [
          "Phase 4",
          "Resting potential — high K+ permeability through K+ channels",
          "IK-dominated",
          "−85 mV; the effective refractory period spans the AP (≈ phases 0-3 on the printed curve)",
        ],
      ],
      caption: "The printed phase definitions carried whole; the current labels are the curve's own (INa; ICa and IK; IK).",
    },
    {
      kind: "table",
      title: "The pacemaker AP — what is absent, what drives it",
      columns: [
        "Feature",
        "Pacemaker (SA/AV node)",
        "Ventricular myocyte",
      ],
      rows: [
        [
          "Phase 0",
          "Upstroke via voltage-gated Ca2+ channels (ICa, L-type) — slow conduction velocity",
          "Rapid upstroke via fast voltage-gated Na+ (INa)",
        ],
        [
          "Phases 1-2",
          "ABSENT",
          "Notch (IK) and Ca2+ plateau",
        ],
        [
          "Phase 3",
          "Repolarization — Ca2+ channel inactivation and ↑ K+ efflux (IK)",
          "K+ efflux through slow delayed-rectifier channels",
        ],
        [
          "Phase 4",
          "Slow spontaneous diastolic depolarization via If ('funny current') — HCN channels carry a slow mixed Na+/K+ inward current",
          "Flat resting potential (−85 mV), high K+ permeability",
        ],
        [
          "Fast Na+ channels",
          "Permanently inactivated (less negative resting potential) → the basis of slow nodal conduction",
          "Open on command in phase 0",
        ],
        [
          "Rate control",
          "Phase-4 SLOPE sets HR: ACh/adenosine ↓ slope ↓ HR; catecholamines ↑ slope ↑ HR",
          "No intrinsic phase-4 rise — obeys the conducted impulse",
        ],
      ],
      caption: "The printed 'key differences' list re-tabulated: absent phases, funny current, inactivated Na+ channels, and the HR dial.",
    },
    {
      kind: "text",
      title: "Cardiac vs skeletal muscle — the three printed differences",
      body: [
        "First, the plateau: the cardiac action potential has a plateau due to Ca2+ influx and opposing K+ efflux — skeletal muscle has no such plateau, and its contraction is a twitch, not a sustained tetanus from a 200-msec AP.",
        "Second, the calcium dependency: cardiac contraction REQUIRES Ca2+ influx from the extracellular fluid to induce Ca2+ release from the SR (calcium-induced calcium release). Skeletal muscle stores enough trigger calcium to work without ECF influx — this is why cardiac glycosides and calcium-channel blockers have cardiac targets that simply do not exist in skeletal muscle.",
        "Third, the syncytium: myocytes conduct excitation throughout the heart via gap junctions — the electrical signal jumps cell to cell directly, which is why a Pacinian-style single-fiber model cannot explain the ECG and why conduction blocks (the AV-block chapter) are territorial.",
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title: "Map every antiarrhythmic class onto a phase",
      body: "Class I (Na+ channel blockers) = phase 0; Class II (β-blockers) = phase 4 slope (↓ cAMP → ↓ Ca2+ → ↓ nodal automaticity, ↑ PR); Class III (K+ channel blockers) = phase 3 (↑ AP duration, ↑ QT); Class IV (Ca2+ channel blockers) = phase 0 of the NODE (slow the AV node, ↑ PR). If the question names the phase or the current, the class falls out — and conversely, 'funny current' and HCN name phase 4 of the SA node specifically.",
    },
    {
      kind: "callout",
      variant: "memory",
      title: "'Platwo' — the page's own plateau hook",
      body: "The print writes it: Phase 2 = plateau ('platwo') — Ca2+ influx balancing K+ efflux. Two currents, two ('two') ions holding the line at ~0 mV for ~200 msec: calcium in, potassium out. Anything that shifts that balance (Ca2+ blockers flatten it, K+ openers shorten it) reshapes both the AP and the QT.",
    },
  ],
  clinical: [
    {
      kind: "list",
      title: "Where the curves meet the clinic",
      items: [
        {
          lead: "Digoxin works, but only because cardiac muscle imports its trigger calcium",
          text: "The printed contraction rule — Ca2+ influx from ECF induces SR Ca2+ release — is the doorway digoxin walks through (more intracellular Ca2+ → more contractility); skeletal muscle has no such doorway.",
        },
        {
          lead: "AV nodal drugs lengthen the PR interval",
          text: "Nodal phase 0 is Ca2+-driven — verapamil/diltiazem (class IV) and β-blockers (class II) slow it further; the permanently inactivated fast Na+ channels are why nodal tissue cannot be sped up by sodium-channel logic.",
        },
        {
          lead: "Vagal tone (athlete, sleep, carotid massage) slows the SA node",
          text: "ACh/adenosine ↓ the rate of diastolic depolarization (flatter phase-4 slope) → ↓ HR — the same dial the baroreflex pulls (book 298 cross-reference).",
        },
        {
          lead: "Catecholamine surge (exercise, shock) raises HR",
          text: "Sympathetic stimulation ↑ the chance HCN channels are open (steeper If, steeper phase 4) and ↑ depolarization → ↑ HR.",
        },
        {
          lead: "Class III drugs (amiodarone, sotalol) prolong the QT",
          text: "Blocking the slow delayed-rectifier K+ efflux of phase 3 stretches repolarization — the AP-duration lever, and the torsades risk.",
        },
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A drug blocks the 'funny current' in the SA node and lowers heart rate.",
        discriminator: "If / HCN channel target, phase 4",
        concept: "HCN channels carry the slow mixed Na+/K+ inward current that produces diastolic depolarization (automaticity)",
        answer: "Phase 4 of the pacemaker potential — the autonomic HR dial (ivabradine-class logic)",
      },
      {
        stem: "A nodal cell cannot generate a fast sodium upstroke even when maximally stimulated.",
        discriminator: "Permanently inactivated fast Na+ channels",
        concept: "Less negative resting potential keeps h-gates closed — phase 0 must run on Ca2+ (slow conduction)",
        answer: "SA/AV nodal physiology — the basis of the AV node's conduction delay",
      },
      {
        stem: "Removing extracellular calcium stops cardiac contraction but not skeletal contraction.",
        discriminator: "Contraction requires ECF Ca2+ influx",
        concept: "Calcium-induced calcium release — ICa (L-type) triggers the SR",
        answer: "Cardiac excitation–contraction coupling (phase 2 plateau)",
      },
      {
        stem: "A class III antiarrhythmic prolongs the QT interval.",
        discriminator: "Delayed-rectifier K+ blockade",
        concept: "Phase 3 K+ efflux sets repolarization speed; block it and the AP (and QT) stretches",
        answer: "Phase 3 — IK (slow delayed rectifier)",
      },
    ],
    traps: [
      {
        a: "Phase 0 of ventricular muscle (INa)",
        b: "Phase 0 of the SA/AV node (ICa)",
        whyConfused: "Both are 'the upstroke.'",
        keyDifference: "Ventricular phase 0 is fast voltage-gated Na+ (fast conduction); nodal phase 0 is voltage-gated Ca2+ with fast Na+ channels permanently inactivated (slow conduction — the AV node's delay).",
        clue: "Node = calcium, slow; ventricle = sodium, fast. Drug classes follow: I = ventricular phase 0, IV = nodal phase 0.",
      },
      {
        a: "If (funny current, phase 4)",
        b: "INa (phase 0)",
        whyConfused: "Both carry sodium inward.",
        keyDifference: "If is a slow MIXED Na+/K+ inward current through HCN channels that depolarizes during DIASTOLE toward threshold; INa is the fast pure-Na+ spike of phase 0. The print flags them as 'different from INa in phase 0.'",
        clue: "Funny current = diastole + HCN + automaticity; fast Na+ = systolic spike + phase 0.",
      },
      {
        a: "Phase 2 plateau (ICa + IK)",
        b: "Phase 3 repolarization (IK)",
        whyConfused: "Both involve K+ efflux.",
        keyDifference: "Phase 2 is the BALANCE (Ca2+ influx ≈ K+ efflux — the plateau holds ~0 mV ~200 msec and triggers SR release); phase 3 is K+ efflux UNOPPOSED (Ca2+ channels close, rapid repolarization).",
        clue: "Balanced = plateau; K+-only = repolarization. Class IV hits phase 2/0 calcium; class III hits phase 3 potassium.",
      },
    ],
    pivots: [
      {
        lookAlike: "Any 'phase of the cardiac AP' question",
        differentiator: "Which ion moves, through which channel, and where the cell sits (node vs ventricle)",
        correctPath: "Ventricular: 0 Na+ → 1 transient K+ → 2 Ca2+≈K+ → 3 delayed-rectifier K+ → 4 resting. Nodal: 4 If (HCN) → 0 ICa(L) → 3 IK, with 1-2 absent. Answer the cell type first, the phase second.",
      },
      {
        lookAlike: "HR change without a drug named",
        differentiator: "What happened to the phase-4 slope?",
        correctPath: "ACh/adenosine flatten it (↓ HR); catecholamines steepen it via HCN open-probability (↑ HR); β-blockade indirectly does the former. Any autonomic vignette on HR is a phase-4-slope question.",
      },
    ],
    miniCase: {
      vignette: "An experimental nodal preparation shows spontaneous diastolic depolarization at a constant slow rate. When acetylcholine is applied, the time to reach threshold lengthens and the firing rate falls; when norepinephrine is applied, the diastolic depolarization steepens and the firing rate rises. Fast sodium-channel blockers do not abolish the nodal upstroke.",
      question: "Which current produces the diastolic depolarization being modulated, and through which channel family?",
      options: [
        {
          label: "A",
          text: "If — a slow mixed Na+/K+ inward current through HCN channels",
          why: "Correct — the printed phase-4 mechanism of the pacemaker potential; HCN open-probability is exactly what ACh lowers and catecholamines raise.",
          correct: true,
        },
        {
          label: "B",
          text: "INa — fast voltage-gated Na+ channels",
          why: "The vignette's last line rules it out — fast Na+ channels are permanently inactivated in nodal cells (less negative resting potential); they drive ventricular phase 0, not nodal phase 4.",
        },
        {
          label: "C",
          text: "ICa (L-type) — voltage-gated Ca2+ channels",
          why: "L-type calcium is the nodal PHASE 0 upstroke — real, but it fires AFTER threshold; the question asks about the diastolic climb TO threshold.",
        },
        {
          label: "D",
          text: "IK — slow delayed-rectifier K+ efflux",
          why: "That is the repolarizing current (phase 3 in both curves) — it opposes depolarization; ACh does modestly influence K+ but the printed automaticity mechanism is If/HCN.",
        },
        {
          label: "E",
          text: "Transient outward K+ current — the phase-1 notch",
          why: "Phase 1 does not exist in the pacemaker AP (phases 1 and 2 are absent) — a ventricular-only current.",
        },
      ],
      reasoning: "Spontaneous diastolic depolarization modulated in opposite directions by ACh and catecholamines, insensitive to Na+-channel blockade = pacemaker phase 4 via If (HCN). The slope of phase 4 in the SA node determines HR — the page's own sentence.",
    },
  },
  mnemonics: [
    {
      code: "“Platwo — two ions hold the plateau”",
      meaning: "Phase 2 = plateau ('platwo', the page's own pun): Ca2+ IN balancing K+ OUT for ~200 msec.",
      memorizes: "Phase 2 dual-current balance and its contraction link",
      whenToUse: "Any plateau/QT/ECF-calcium question.",
      clinical: "Calcium-induced calcium release lives here — the door cardiac glycosides and CCBs knock on.",
    },
    {
      code: "“Funny current, funny rules — it climbs in diastole”",
      meaning: "If is a slow MIXED Na+/K+ inward current through HCN channels that depolarizes the node during phase 4 — automaticity, not the fast INa spike.",
      memorizes: "Pacemaker phase 4 and its distinction from INa",
      whenToUse: "Any automaticity/HR-slope question.",
      clinical: "ACh flattens it, catecholamines steepen it — the autonomic HR dial.",
    },
    {
      code: "“Node = NO fast sodium”",
      meaning: "SA/AV nodal cells have fast Na+ channels permanently inactivated (less negative resting potential) — their phase 0 must run on calcium, hence slow conduction.",
      memorizes: "The fast-vs-slow AP divide and the AV node's delay",
      whenToUse: "Any nodal conduction velocity or PR-interval question.",
      clinical: "Class IV drugs work only where phase 0 is calcium — the node.",
    },
  ],
  rapidReview: {
    s30: [
      "Ventricular AP: 0 = fast Na+ (INa); 1 = transient K+; 2 = plateau, Ca2+ in ≈ K+ out ('platwo'); 3 = delayed-rectifier K+; 4 = resting (−85 mV).",
      "Phase 2 triggers Ca2+ release from SR → contraction (calcium-induced calcium release; requires ECF Ca2+).",
      "Pacemaker AP (SA/AV nodes): phases 1-2 ABSENT; phase 0 = ICa (L-type), slow; phase 4 = If ('funny current') via HCN (mixed Na+/K+ inward).",
      "Nodal fast Na+ channels permanently inactivated → slow conduction velocity (AV node's delay).",
      "Phase-4 slope sets HR: ACh/adenosine ↓ slope ↓ HR; catecholamines ↑ HCN opening ↑ HR.",
      "Effective refractory period ≈ the long AP (printed on the ventricular curve) — no tetanus in cardiac muscle.",
      "Cardiac vs skeletal: plateau; ECF-Ca2+-dependent contraction; gap-junction syncytium.",
    ],
    m3: [
      "Antiarrhythmic phase map: I = phase 0 Na+; II = phase 4 slope (via cAMP↓); III = phase 3 K+ (↑ QT); IV = nodal phase 0 Ca2+.",
      "The SA node's phase-4 slope IS the heart-rate equation — every chronotropic drug and reflex acts on it.",
      "AV node exploits its slow Ca2+ phase 0 to prolong transmission from atria to ventricles (the 100-msec delay, book 297).",
      "Myocytes conduct excitation heart-wide via gap junctions — the anatomic basis of conduction-block territory.",
      "Nodal threshold is crossed by the If climb; the AP fires from −40-ish mV, not from a fixed resting potential.",
    ],
    m10: [
      "Full phase-current pairing (ventricular): 0 INa; 1 transient outward IK; 2 ICa + IK; 3 IK (slow delayed rectifier); 4 IK-dominated rest. (Pacemaker): 4 If (HCN) + ICa (T-type); 0 ICa (L-type); 3 IK.",
      "Calcium-induced calcium release: ECF Ca2+ → L-type ICa → SR ryanodine release → contraction; the plateau's ~200 msec also forbids tetanus (ERP ≈ AP duration).",
      "HCN = hyperpolarization-activated cyclic nucleotide-gated — cAMP raises open probability, which is WHY catecholamines steepen phase 4 and β-blockade flattens it.",
      "Drug-node specificity: fast-Na+ blockers (class I) do little at the node (channels inactivated); Ca2+ blockers (class IV) do little in ventricle phase 0 — the 'permanently inactivated' line decides both.",
      "Bridge to page 297: SA node = dominant pacemaker with slow upstroke; AV node = 100-msec delay for ventricular filling — the physiologic payoff of slow nodal phase 0.",
    ],
  },
  recall: [
    {
      q: "Which phase of the ventricular AP carries the plateau, and what two currents hold it?",
      a: "Phase 2 ('platwo') — Ca2+ influx (ICa) balancing K+ efflux (IK).",
    },
    {
      q: "What makes nodal phase 0 slow?",
      a: "The upstroke runs through voltage-gated Ca2+ channels because fast Na+ channels are permanently inactivated (less negative resting potential).",
    },
    {
      q: "Which current produces the pacemaker potential's phase 4?",
      a: "If, the 'funny current' — a slow mixed Na+/K+ inward current through HCN channels.",
    },
    {
      q: "How do ACh/adenosine and catecholamines change HR at the SA node?",
      a: "ACh/adenosine ↓ the rate of diastolic depolarization (flatter phase 4) → ↓ HR; catecholamines ↑ depolarization (steeper slope, more HCN open) → ↑ HR.",
    },
    {
      q: "Why does cardiac contraction require extracellular calcium while skeletal contraction does not?",
      a: "Cardiac muscle needs Ca2+ influx from ECF to induce Ca2+ release from SR (calcium-induced calcium release) — the plateau's ICa is the trigger.",
    },
    {
      q: "Which phases are absent in the pacemaker AP?",
      a: "Phases 1 and 2.",
    },
    {
      q: "Match antiarrhythmic classes to phases.",
      a: "I → phase 0 (Na+); II → phase 4 slope/nodal automaticity; III → phase 3 (K+, ↑ QT); IV → nodal phase 0 (Ca2+).",
    },
    {
      q: "What three properties distinguish cardiac from skeletal muscle action potentials?",
      a: "A Ca2+ plateau; contraction requiring ECF Ca2+ influx (Ca2+-induced Ca2+ release); conduction via gap junctions (functional syncytium).",
    },
  ],
  related: [
    {
      title: "Electrocardiogram",
      note: "The next page turns these curves into surface waves — the 100-msec AV delay the slow nodal phase 0 buys is exactly the PR interval.",
      topicId: "electrocardiogram",
    },
    {
      title: "AV conduction blocks",
      note: "Block physiology is this page's cell biology failing at tissue scale — nodal (calcium-dependent) vs infra-nodal (sodium-dependent) disease follows the same channel divide.",
      topicId: "av-conduction-blocks",
    },
    {
      title: "Baroreceptors and Chemoreceptors",
      note: "The reflex that slows the heart does it by flattening the SA node's phase-4 slope — autonomic output lands here.",
      topicId: "baroreceptors-chemoreceptors",
    },
    {
      title: "Antiarrhythmic drugs",
      note: "Every class I-IV agent is a phase-current pair from this page — the curves are the drug map.",
    },
  ],
  crossLinks: [
    {
      subject: "Pharmacology",
      connection: "Class I-IV antiarrhythmics, β-blockers, CCBs, digoxin, and ivabradine-class agents all name a phase or channel from these two curves.",
    },
    {
      subject: "Physiology",
      connection: "Excitation–contraction coupling links phase 2 to the pressure-volume loop: the plateau's calcium is what converts the electrical curve into a heartbeat.",
    },
    {
      subject: "Biochemistry",
      connection: "HCN channel open-probability is cAMP-gated — the β1-adrenergic Gs cascade and muscarinic Gi cascade meet at the funny current.",
    },
  ],
  mechanisms: [
    {
      id: "ventricular-ap-cascade",
      title: "The ventricular AP — from Na+ spike to calcium-triggered contraction",
      context: "Ventricular myocyte",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Depolarization to threshold",
            sublabel: "Arrives via gap junctions from neighboring myocytes — the syncytium propagates excitation heart-wide.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Phase 0: fast Na+ channels open (INa)",
            sublabel: "Rapid upstroke and depolarization — fast conduction, the spike.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Phase 1: Na+ inactivates, transient K+ opens",
            sublabel: "Initial repolarization — the notch (transient outward IK).",
            variant: "process",
          },
          {
            id: "s3",
            label: "Phase 2: Ca2+ in ≈ K+ out — the plateau",
            sublabel: "'Platwo' — ~200 msec hold; Ca2+ influx triggers Ca2+ release from SR → contraction (excitation–contraction coupling).",
            variant: "process",
          },
          {
            id: "s4",
            label: "Phase 3: delayed-rectifier K+ wins",
            sublabel: "Rapid repolarization — Ca2+ channels close, K+ efflux unopposed.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Phase 4: resting potential (−85 mV)",
            sublabel: "High K+ permeability (IK-dominated) — stable until the next conducted impulse.",
            variant: "output",
          },
          {
            id: "o2",
            label: "Effective refractory period guards the rhythm",
            sublabel: "The long AP forbids tetanus and re-excitation — printed on the curve.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1" },
          { from: "s1", to: "s2" },
          { from: "s2", to: "s3" },
          { from: "s3", to: "s4" },
          { from: "s4", to: "o1" },
          { from: "o1", to: "o2" },
        ],
        caption:
          "Spike → notch → plateau (and squeeze) → repolarization → rest — five phases, four currents, one contraction triggered midway through.",
      },
    },
    {
      id: "pacemaker-autonomic-dial",
      title: "The pacemaker AP — the phase-4 slope is the heart-rate dial",
      context: "SA node (and AV node)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "If climbs from the maximum diastolic potential",
            sublabel: "HCN channels carry a slow mixed Na+/K+ inward current — 'funny current' — different from INa.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Slope of phase 4 determines time-to-threshold",
            sublabel: "Steeper slope → sooner threshold → faster rate; the slope of phase 4 in the SA node determines HR.",
            variant: "process",
          },
          {
            id: "s2a",
            label: "ACh / adenosine flatten the slope",
            sublabel: "↓ rate of diastolic depolarization → ↓ HR (vagal brake).",
            variant: "inhibit",
          },
          {
            id: "s2b",
            label: "Catecholamines steepen the slope",
            sublabel: "↑ chance HCN channels are open → ↑ HR (sympathetic pedal).",
            variant: "process",
          },
          {
            id: "s3",
            label: "Phase 0: ICa (L-type) upstroke",
            sublabel: "Slow Ca2+-driven upstroke — fast Na+ permanently inactivated; AV node uses this slowness to delay transmission.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Phase 3: IK repolarizes",
            sublabel: "Ca2+ channels inactivate, K+ channels open — back to the diastolic range.",
            variant: "output",
          },
          {
            id: "o2",
            label: "Automaticity: the node fires itself",
            sublabel: "No external trigger needed — accounts for automaticity of SA and AV nodes; pacemaker hierarchy SA > atria > AV > His-Purkinje.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1" },
          { from: "s1", to: "s2a" },
          { from: "s1", to: "s2b" },
          { from: "s2b", to: "s3" },
          { from: "s2a", to: "s3" },
          { from: "s3", to: "o1" },
          { from: "o1", to: "o2" },
        ],
        caption:
          "The node never rests: If climbs, the autonomic dials tilt the ramp, threshold fires a slow calcium upstroke — and whoever depolarizes fastest leads the heart.",
      },
    },
  ],
};
