import type { KypUsMLENote } from "../types";

// Pharmacology — PHARMACOKINETICS AND PHARMACODYNAMICS banner (PH1).
// Source: pdf 250 / book 228 (Enzyme kinetics — the Michaelis-Menten
// plot, the Lineweaver-Burk plot, the Effects of enzyme inhibition
// comparison panels, and the 5-row inhibition comparison table).
// Census (pdfimages + VLM): NO raster images on the page (pdfimages
// -list returned zero rows). The page has THREE vector figures (the
// Michaelis-Menten kinetics plot, the Lineweaver-Burk double-reciprocal
// plot, and the Effects of enzyme inhibition overlays) — all
// redrawn as ORIGINAL_KYP_REDRAW vector graphics in the registry
// visual (no photographs, no copyrighted artwork reproduced). The
// 5-row inhibition comparison table is pure text and is carried
// verbatim in this note's table block. NO copyrighted photographs;
// the page prints the 'Kompetitive inhibitors increase Km' mnemonic
// verbatim; the other three KYP mnemonics are original designs.

export const enzymeKinetics: KypUsMLENote = {
  id: "enzyme-kinetics",
  title: "Enzyme Kinetics",
  subtitle:
    "The Michaelis-Menten and Lineweaver-Burk plots, and the three inhibition types — competitive reversible, competitive irreversible, noncompetitive (book 228). KINETICS: Km is the substrate concentration needed for an enzyme to reach a rate of 1/2 Vmax and is inversely related to the affinity of the enzyme for its substrate; Vmax is directly proportional to the enzyme concentration; most enzymatic reactions follow a hyperbolic curve (Michaelis-Menten), while a sigmoidal curve usually indicates positive cooperativity (eg, aspartate transcarbamoylase). LINEWEAVER-BURK: the closer to 0 on the Y-axis the higher the Vmax; the closer to 0 on the X-axis the higher the Km; the higher the Km the lower the affinity; reversible competitive inhibitors cross each other whereas noncompetitive inhibitors do not. INHIBITION: reversible competitive (resembles substrate, overcome by ↑[S], binds active site, Vmax unchanged, Km ↑, ↓ potency); irreversible competitive (resembles substrate, NOT overcome by ↑[S], binds active site, Vmax ↓, Km unchanged, ↓ efficacy); noncompetitive (does NOT resemble substrate, NOT overcome by ↑[S], binds allosteric site, Vmax ↓, Km unchanged, ↓ efficacy). 'Kompetitive inhibitors increase Km.'",
  subject: "Pharmacology",
  system:
    "Section II · High-Yield General Principles — Pharmacology: Pharmacokinetics and Pharmacodynamics",
  pilotCategory:
    "The enzyme-kinetics page's complete architecture — the Michaelis-Menten definitions (Km, Vmax, hyperbolic vs sigmoid/aspartate transcarbamoylase), the Lineweaver-Burk double-reciprocal reading rules (Y-axis → Vmax, X-axis → Km, Km inverse to affinity, reversible competitive cross / noncompetitive no cross), the inhibition comparison table (resemble substrate, overcome by ↑[S], bind site, effect on Vmax, effect on Km, pharmacodynamics) across the three inhibition types, and the 'Kompetitive inhibitors increase Km' margin mnemonic.",
  difficulty: 2,
  readTime: 8,
  sourceRef:
    "First Aid 2026, Part 1 pp. 228 (Pharmacology — Pharmacokinetics and Pharmacodynamics: Enzyme kinetics — the Michaelis-Menten kinetics definition with Km, Vmax, hyperbolic vs sigmoid/aspartate transcarbamoylase; the Lineweaver-Burk plot reading rules with the Y-axis → Vmax, X-axis → Km, Km inverse to affinity, and the reversible-competitive-cross vs noncompetitive-no-cross rule; the Effects of enzyme inhibition comparison panels; the 5-row inhibition comparison table across Competitive reversible / Competitive irreversible / Noncompetitive with Resemble substrate, Overcome by ↑[S], Bind site, Effect on Vmax, Effect on Km, Pharmacodynamics; and the 'Kompetitive inhibitors increase Km' margin mnemonic)",
  tags: [
    "enzyme kinetics",
    "Michaelis-Menten",
    "Km",
    "Vmax",
    "1/2 Vmax",
    "substrate affinity",
    "hyperbolic curve",
    "sigmoidal curve",
    "positive cooperativity",
    "aspartate transcarbamoylase",
    "Lineweaver-Burk",
    "double reciprocal plot",
    "slope",
    "competitive inhibition",
    "reversible competitive",
    "irreversible competitive",
    "noncompetitive inhibition",
    "allosteric",
    "active site",
    "overcome by substrate",
    "potency",
    "efficacy",
    "pharmacodynamics",
    "Kompetitive inhibitors increase Km",
  ],
  core: {
    what:
      "ENZYME KINETICS describes how an enzyme's reaction velocity (V) depends on substrate concentration [S]. MICHAELIS-MENTEN: Km is the substrate concentration needed for an enzyme to reach a rate of 1/2 Vmax and is inversely related to the affinity of the enzyme for its substrate (higher Km = lower affinity); Vmax is directly proportional to the enzyme concentration; most enzymatic reactions follow a hyperbolic curve (Michaelis-Menten kinetics), but a sigmoidal curve usually indicates positive cooperativity in substrate binding (eg, aspartate transcarbamoylase). LINEWEAVER-BURK (the double-reciprocal plot, 1/V vs 1/[S]): the closer to 0 on the Y-axis the higher the Vmax; the closer to 0 on the X-axis the higher the Km; the higher the Km the lower the affinity; reversible competitive inhibitors cross each other on this plot, whereas noncompetitive inhibitors do not. THREE INHIBITION TYPES — (1) REVERSIBLE COMPETITIVE: resembles substrate (Yes), overcome by ↑[S] (Yes), binds active site, Vmax unchanged, Km ↑, ↓ potency. (2) IRREVERSIBLE COMPETITIVE: resembles substrate (Yes), overcome by ↑[S] (No), binds active site, Vmax ↓, Km unchanged, ↓ efficacy. (3) NONCOMPETITIVE: resembles substrate (No), overcome by ↑[S] (No), binds allosteric site, Vmax ↓, Km unchanged, ↓ efficacy. The page's mnemonic: 'Kompetitive inhibitors increase Km.'",
    why:
      "The two plots are two readings of the same enzyme. The Michaelis-Menten plot is the direct picture: velocity against substrate, the hyperbola rising to its Vmax ceiling, Km read off the X-axis at 1/2 Vmax — the substrate concentration the enzyme needs to hit half-speed. The Lineweaver-Burk plot is the same data linearized: 1/V vs 1/[S] turns the hyperbola into a straight line whose Y-intercept is 1/Vmax and whose X-intercept is -1/Km — the closer either intercept lies to 0, the higher the underlying constant. Km is the affinity axis: a low Km means the enzyme reaches half-speed at a low substrate concentration (high affinity), and a high Km means it needs a lot of substrate (low affinity). Vmax is the enzyme-concentration axis: it rises if you add more enzyme, falls if you remove it or irreversibly inactivate it. The three inhibition types exploit this geometry. A reversible competitive inhibitor fights the substrate for the active site — it raises the apparent Km (you need more substrate to reach 1/2 Vmax) but the Vmax ceiling is unchanged because enough substrate will outcompete it; the Lineweaver-Burk lines cross because the Y-intercept (1/Vmax) is the same. An irreversible competitive inhibitor covalently takes enzyme molecules out of the pool — Vmax falls because there is less active enzyme, but Km is unchanged because the surviving enzyme is normal; substrate cannot rescue the inactivated enzyme. A noncompetitive inhibitor binds an allosteric site — it does not resemble the substrate, cannot be overcome by adding more substrate, lowers Vmax (it inactivates enzyme molecules), and leaves Km unchanged (the surviving enzyme's affinity is intact). The two competitive inhibitors hit the active site; the noncompetitive inhibitor hits a different site. The two competitive reversible/noncompetitive cases are the exam's bread and butter — the table's six rows are the answer key.",
    keyIdea:
      "Read every kinetics question through two axes. AXIS 1 — THE AFFINITY AXIS (Km and Vmax): Km is the substrate concentration at 1/2 Vmax and is INVERSELY related to affinity (high Km = low affinity); Vmax is DIRECTLY proportional to enzyme concentration. Hyperbolic curve = Michaelis-Menten; sigmoidal curve = positive cooperativity (aspartate transcarbamoylase). On the Lineweaver-Burk plot, the Y-intercept (1/Vmax) and X-intercept (-1/Km) — closer to 0 means higher. AXIS 2 — THE INHIBITION-TYPE AXIS: map the inhibitor to one of three rows. REVERSIBLE COMPETITIVE = resembles substrate, overcome by ↑[S], active site, Vmax unchanged, Km ↑, ↓ potency (Lineweaver-Burk lines CROSS). IRREVERSIBLE COMPETITIVE = resembles substrate, NOT overcome, active site, Vmax ↓, Km unchanged, ↓ efficacy. NONCOMPETITIVE = does NOT resemble substrate, NOT overcome, allosteric site, Vmax ↓, Km unchanged, ↓ efficacy (Lineweaver-Burk lines do NOT cross). 'Kompetitive inhibitors increase Km' — the only inhibitor that changes Km is the reversible competitive one.",
  },
  mechanisms: [
    {
      id: "kinetics-affinity-axis",
      title: "The affinity axis: Km, Vmax, and the shape of the curve",
      context: "The Michaelis-Menten and Lineweaver-Burk definitions (book 228)",
      flow: {
        nodes: [
          {
            id: "input",
            label: "An enzyme + its substrate",
            sublabel:
              "Input — an enzymatic reaction with velocity V and substrate concentration [S]. The relationship between V and [S] is what the kinetics describe.",
            variant: "input",
          },
          {
            id: "km",
            label: "Km — substrate concentration at 1/2 Vmax",
            sublabel:
              "Km is the substrate concentration needed for the enzyme to reach a rate of 1/2 Vmax; it is INVERSELY related to the affinity of the enzyme for its substrate (higher Km = lower affinity; lower Km = higher affinity).",
            variant: "process",
          },
          {
            id: "vmax",
            label: "Vmax — proportional to enzyme concentration",
            sublabel:
              "Vmax is the maximum velocity at saturating substrate; it is DIRECTLY proportional to the enzyme concentration (more enzyme = higher Vmax; less active enzyme = lower Vmax).",
            variant: "process",
          },
          {
            id: "shape",
            label: "Curve shape — hyperbolic (Michaelis-Menten) vs sigmoidal (cooperativity)",
            sublabel:
              "Most enzymatic reactions follow a hyperbolic curve (Michaelis-Menten kinetics). A sigmoidal curve usually indicates positive cooperativity in substrate binding (eg, aspartate transcarbamoylase).",
            variant: "process",
          },
          {
            id: "lb",
            label: "Lineweaver-Burk — the double-reciprocal reading",
            sublabel:
              "Output — the Lineweaver-Burk plot (1/V vs 1/[S]) linearizes the hyperbola: Y-intercept = 1/Vmax, X-intercept = -1/Km, slope = Km/Vmax. The closer to 0 on the Y-axis the higher the Vmax; the closer to 0 on the X-axis the higher the Km; the higher the Km the lower the affinity.",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "km", label: "measure affinity" },
          { from: "input", to: "vmax", label: "measure capacity" },
          { from: "km", to: "shape", label: "shape depends on binding" },
          { from: "vmax", to: "shape", label: "ceiling set by [enzyme]" },
          { from: "shape", to: "lb", label: "linearize to read" },
        ],
      },
    },
    {
      id: "inhibition-type-axis",
      title: "The inhibition-type axis: three inhibitors, six properties",
      context: "The inhibition comparison table (book 228)",
      flow: {
        nodes: [
          {
            id: "input",
            label: "An inhibitor meets the enzyme",
            sublabel:
              "Input — the question gives an inhibitor; the task is to classify it as reversible competitive, irreversible competitive, or noncompetitive and to predict its effect on Vmax and Km.",
            variant: "input",
          },
          {
            id: "revcomp",
            label: "REVERSIBLE COMPETITIVE — fights substrate at the active site",
            sublabel:
              "Resembles substrate (Yes). Overcome by ↑[S] (Yes — substrate outcompetes it). Binds ACTIVE site. Vmax UNCHANGED. Km ↑ (apparent affinity falls — more substrate needed to reach 1/2 Vmax). Pharmacodynamics: ↓ POTENCY. On Lineweaver-Burk the lines CROSS (same Y-intercept = same 1/Vmax; more negative X-intercept = higher apparent Km).",
            variant: "process",
          },
          {
            id: "irrevcomp",
            label: "IRREVERSIBLE COMPETITIVE — covalently removes enzyme from the pool",
            sublabel:
              "Resembles substrate (Yes). Overcome by ↑[S] (No — covalent inactivation cannot be rescued). Binds ACTIVE site. Vmax ↓ (fewer active enzyme molecules). Km UNCHANGED (surviving enzyme is normal). Pharmacodynamics: ↓ EFFICACY.",
            variant: "process",
          },
          {
            id: "noncomp",
            label: "NONCOMPETITIVE — binds an allosteric site, distorts the enzyme",
            sublabel:
              "Resembles substrate (No). Overcome by ↑[S] (No — substrate cannot displace an allosteric binder). Binds ALLOSTERIC site. Vmax ↓ (enzyme molecules inactivated). Km UNCHANGED (surviving enzyme's affinity is intact). Pharmacodynamics: ↓ EFFICACY. On Lineweaver-Burk the lines DO NOT CROSS (same X-intercept = same Km; higher Y-intercept = lower Vmax).",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "revcomp", label: "if resembles substrate AND overcome by ↑[S]" },
          { from: "input", to: "irrevcomp", label: "if resembles substrate AND NOT overcome" },
          { from: "input", to: "noncomp", label: "if does NOT resemble substrate (allosteric)" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "enzyme-kinetics-map",
      title: "The enzyme-kinetics map (an original KYP redraw)",
      caption:
        "An original KYP redraw of the source page (book 228): the Michaelis-Menten kinetics plot (V vs [S] with Vmax, 1/2 Vmax, Km, and the Saturation plateau labeled), the Lineweaver-Burk double-reciprocal plot (1/V vs 1/[S] with slope = m, the -1/Km X-intercept, and the 1/Vmax Y-intercept labeled), the Effects of enzyme inhibition overlays (uninhibited + reversible competitive + noncompetitive, showing the cross vs no-cross rule), and the inhibition comparison table (reversible competitive / irreversible competitive / noncompetitive × Resemble substrate, Overcome by ↑[S], Bind site, Effect on Vmax, Effect on Km, Pharmacodynamics). The 'Kompetitive inhibitors increase Km' mnemonic callout sits at the bottom.",
      notice:
        "Census (pdfimages + VLM): NO raster images on the page (pdfimages -list returned zero rows for pdf 250). The page has THREE vector figures (the Michaelis-Menten plot, the Lineweaver-Burk plot, and the Effects of enzyme inhibition comparison panels) — all redrawn as ORIGINAL_KYP_REDRAW vector graphics in the registry visual (no photographs, no copyrighted artwork reproduced). The inhibition comparison table is pure text and is carried verbatim in this note's table block. No copyrighted photographs exist on the page; nothing reproduced. The page prints the 'Kompetitive inhibitors increase Km' mnemonic verbatim; the other three KYP mnemonics are original designs.",
    },
    {
      kind: "table",
      title: "Book 228 — the inhibition comparison table (carried verbatim)",
      intro:
        "The three inhibition types against the six properties, as printed.",
      columns: [
        "Property",
        "Competitive inhibitors, reversible",
        "Competitive inhibitors, irreversible",
        "Noncompetitive inhibitors",
      ],
      rows: [
        ["Resemble substrate", "Yes", "Yes", "No"],
        ["Overcome by ↑ [S]", "Yes", "No", "No"],
        ["Bind site", "Active", "Active", "Allosteric"],
        ["Effect on Vmax", "Unchanged", "↓", "↓"],
        ["Effect on Km", "↑", "Unchanged", "Unchanged"],
        ["Pharmacodynamics", "↓ potency", "↓ efficacy", "↓ efficacy"],
      ],
      caption:
        "Six properties × three inhibitors. The two competitive inhibitors share the active site and substrate mimicry; the noncompetitive inhibitor is the odd one out (allosteric, no substrate mimicry). The two efficacy-decreasing inhibitors (irreversible competitive + noncompetitive) lower Vmax; the only Km-changer is reversible competitive. 'Kompetitive inhibitors increase Km.'",
    },
    {
      kind: "table",
      title: "Book 228 — the Lineweaver-Burk reading rules",
      intro:
        "How to read the double-reciprocal plot, as printed on book 228.",
      columns: ["Lineweaver-Burk feature", "What it tells you", "Direction of change"],
      rows: [
        ["Y-axis intercept (1/Vmax)", "The closer to 0 on the Y-axis → the higher the Vmax", "Y-intercept ↓ → Vmax ↑"],
        ["X-axis intercept (-1/Km)", "The closer to 0 on the X-axis → the higher the Km", "X-intercept closer to 0 → Km ↑"],
        ["Km and affinity", "The higher the Km, the lower the affinity", "Km ↑ → affinity ↓"],
        ["Reversible competitive lines", "Cross the uninhibited line (same Y-intercept, shifted X-intercept)", "Lines CROSS"],
        ["Noncompetitive lines", "Do NOT cross the uninhibited line (same X-intercept, shifted Y-intercept)", "Lines DO NOT CROSS"],
      ],
      caption:
        "The four reading rules verbatim: closer to 0 on Y = higher Vmax; closer to 0 on X = higher Km; higher Km = lower affinity; reversible competitive lines cross, noncompetitive lines do not.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem:
          "A research compound structurally resembles the substrate of an enzyme; kinetic studies show that adding excess substrate restores the uninhibited Vmax, and the Lineweaver-Burk plot shows the inhibitor's line crossing the uninhibited line at the Y-axis.",
        discriminator:
          "Resembles substrate + overcome by ↑[S] + lines cross on Lineweaver-Burk = reversible competitive inhibition; Vmax unchanged, Km ↑",
        concept: "The reversible-competitive-inhibition axis",
        answer:
          "Reversible competitive inhibition. The inhibitor resembles the substrate and binds the active site, so adding excess substrate outcompetes it (Vmax restored, hence unchanged). The apparent Km rises because more substrate is needed to reach 1/2 Vmax. On the Lineweaver-Burk plot the inhibitor's line crosses the uninhibited line at the Y-axis (same 1/Vmax intercept) but shifts the X-intercept toward zero (-1/Km_app where Km_app > Km). Pharmacodynamics: ↓ potency (the dose-response curve shifts right; efficacy is preserved). This is the only inhibition type that changes Km — 'Kompetitive inhibitors increase Km.'",
      },
      {
        stem:
          "An organophosphate insecticide covalently modifies a serine residue in the active site of acetylcholinesterase; pralidoxime can reactivate the enzyme if given early, but adding excess substrate does not restore activity. Kinetic studies after irreversible inhibition show Vmax is reduced and Km is unchanged.",
        discriminator:
          "Covalent active-site modification + NOT overcome by ↑[S] + Vmax ↓ + Km unchanged = irreversible competitive inhibition",
        concept: "The irreversible-competitive-inhibition axis",
        answer:
          "Irreversible competitive inhibition. The inhibitor resembles the substrate (it enters the active site) and covalently inactivates the enzyme — so it cannot be overcome by adding more substrate (the covalent bond is not reversible by competition). Vmax falls because there are fewer active enzyme molecules; Km is unchanged because the surviving enzyme molecules have normal affinity. Pralidoxime reactivates by cleaving the covalent bond, not by competing with substrate. Pharmacodynamics: ↓ efficacy (the dose-response ceiling falls; no amount of substrate/drug restores the lost enzyme). Distinguish from noncompetitive: both lower Vmax and leave Km unchanged, but irreversible competitive binds the ACTIVE site (and resembles substrate), whereas noncompetitive binds an ALLOSTERIC site (and does not resemble substrate).",
      },
      {
        stem:
          "A heavy-metal poison binds a cysteine residue distant from the active site of an enzyme; kinetic studies show Vmax is reduced and Km is unchanged, and the Lineweaver-Burk plot shows the inhibitor's line parallel to the uninhibited line (no crossing).",
        discriminator:
          "Allosteric binding + NOT overcome by ↑[S] + Vmax ↓ + Km unchanged + lines do NOT cross = noncompetitive inhibition",
        concept: "The noncompetitive-inhibition axis",
        answer:
          "Noncompetitive inhibition. The inhibitor binds an allosteric site (not the active site), distorting the enzyme and reducing its catalytic capacity. It does not resemble the substrate and cannot be overcome by adding more substrate. Vmax falls because some enzyme molecules are inactivated; Km is unchanged because the surviving enzyme's substrate affinity is intact. On Lineweaver-Burk the lines do NOT cross — the X-intercept (-1/Km) is the same, but the Y-intercept (1/Vmax) rises (Vmax falls). Pharmacodynamics: ↓ efficacy. Distinguish from irreversible competitive: both lower Vmax and leave Km unchanged, but noncompetitive binds ALLOSTERIC and does NOT resemble substrate, whereas irreversible competitive binds ACTIVE and DOES resemble substrate.",
      },
    ],
    traps: [
      {
        a: "Reversible competitive inhibition",
        b: "Irreversible competitive inhibition",
        whyConfused: "Both bind the active site and both resemble the substrate",
        keyDifference:
          "REVERSIBLE competitive is overcome by ↑[S] (substrate outcompetes it) → Vmax UNCHANGED, Km ↑, ↓ potency; IRREVERSIBLE competitive is NOT overcome by ↑[S] (covalent inactivation) → Vmax ↓, Km unchanged, ↓ efficacy. The 'overcome by ↑[S]' row is the discriminator — if more substrate rescues the enzyme, the inhibitor is reversible.",
        clue:
          "If Vmax is unchanged and Km ↑ → reversible competitive; if Vmax ↓ and Km unchanged → irreversible competitive (or noncompetitive, then ask about the binding site)",
      },
      {
        a: "Irreversible competitive inhibition",
        b: "Noncompetitive inhibition",
        whyConfused: "Both lower Vmax and both leave Km unchanged",
        keyDifference:
          "IRREVERSIBLE competitive binds the ACTIVE site and RESEMBLES the substrate (it enters the active site and covalently inactivates — eg, organophosphates on acetylcholinesterase); NONCOMPETITIVE binds an ALLOSTERIC site and does NOT resemble the substrate (it distorts the enzyme from elsewhere — eg, heavy metals on a cysteine). The 'resemble substrate' and 'bind site' rows are the discriminators.",
        clue:
          "Active site + resembles substrate = irreversible competitive; allosteric + does NOT resemble substrate = noncompetitive",
      },
      {
        a: "Effect on Vmax",
        b: "Effect on Km",
        whyConfused: "Students mix up which inhibition changes which constant",
        keyDifference:
          "Vmax changes when enzyme molecules are removed from the pool (irreversible competitive, noncompetitive → Vmax ↓); Vmax is unchanged when the inhibitor is purely a substrate competitor (reversible competitive). Km changes only when the inhibitor competes with substrate at the active site but is reversible (reversible competitive → Km ↑); Km is unchanged when the inhibitor either covalently inactivates (irreversible competitive) or binds allosterically (noncompetitive). Only ONE inhibitor changes Km: reversible competitive. 'Kompetitive inhibitors increase Km.'",
        clue:
          "Vmax ↓ = enzyme removed (irreversible competitive or noncompetitive); Km ↑ = reversible competitive only",
      },
      {
        a: "↓ potency (reversible competitive)",
        b: "↓ efficacy (irreversible competitive / noncompetitive)",
        whyConfused: "Both are pharmacodynamic losses; both look like 'the drug works less'",
        keyDifference:
          "↓ POTENCY (reversible competitive) = the dose-response curve shifts RIGHT — more drug is needed to achieve the same effect, but the ceiling (Emax) is preserved; adding more substrate/drug restores the response. ↓ EFFICACY (irreversible competitive / noncompetitive) = the dose-response ceiling FALLS — no amount of drug can restore the lost enzyme; the maximum achievable effect is lower. Potency is a right-shift; efficacy is a lowered ceiling.",
        clue:
          "Right-shifted dose-response with preserved ceiling = ↓ potency (reversible competitive); lowered ceiling = ↓ efficacy (irreversible competitive or noncompetitive)",
      },
    ],
    pivots: [
      {
        lookAlike: "An inhibitor with Vmax ↓ and Km unchanged — which type is it?",
        differentiator:
          "Two inhibition types lower Vmax and leave Km unchanged: IRREVERSIBLE COMPETITIVE (resembles substrate = Yes, binds ACTIVE site, covalent — eg, organophosphates on acetylcholinesterase) and NONCOMPETITIVE (resembles substrate = No, binds ALLOSTERIC site — eg, heavy metals). The 'resemble substrate' and 'bind site' rows are the discriminator. If the inhibitor is substrate-like and active-site-directed → irreversible competitive; if it is allosteric and not substrate-like → noncompetitive.",
        correctPath:
          "Read the table in this order: (1) does it resemble the substrate? (2) is it overcome by ↑[S]? (3) where does it bind? — the answers place it in one of the three rows, and the Vmax/Km changes follow mechanically",
      },
      {
        lookAlike: "A Lineweaver-Burk plot with two lines — do they cross or not?",
        differentiator:
          "CROSSING lines (same Y-intercept = same 1/Vmax, shifted X-intercept) = REVERSIBLE COMPETITIVE (Vmax unchanged, Km ↑). NON-CROSSING lines (same X-intercept = same Km, shifted Y-intercept) = NONCOMPETITIVE (Vmax ↓, Km unchanged). The Y-axis is the Vmax axis; the X-axis is the Km axis. Whichever intercept is shared is whichever constant is unchanged.",
        correctPath:
          "Find the shared intercept — if the lines share the Y-intercept, Vmax is unchanged (reversible competitive); if they share the X-intercept, Km is unchanged (noncompetitive). The crossing pattern names the inhibition type.",
      },
    ],
    miniCase: {
      vignette:
        "A pharmaceutical researcher is characterizing a novel inhibitor of dihydrofolate reductase (DHFR). The inhibitor is a folate analog. Kinetic studies show that, in the presence of the inhibitor, the apparent Km for dihydrofolate is increased, Vmax is unchanged, and the Lineweaver-Burk plot shows the inhibitor's line crossing the uninhibited line at the Y-axis. Adding a 100-fold excess of dihydrofolate restores the uninhibited reaction velocity. Separately, the team tests a second compound — an alkylating agent that covalently modifies an active-site cysteine — and finds Vmax is reduced, Km is unchanged, and adding excess substrate does not restore activity.",
      question:
        "Classify both inhibitors. For the first compound, predict the effect on the dose-response curve and explain why the Lineweaver-Burk lines cross at the Y-axis.",
      options: [
        {
          label:
            "Compound 1 = REVERSIBLE COMPETITIVE (folate analog → active site, overcome by ↑[S], Vmax unchanged, Km ↑, ↓ potency; Lineweaver-Burk lines cross at the Y-axis because the Y-intercept 1/Vmax is shared — Vmax is unchanged). Compound 2 = IRREVERSIBLE COMPETITIVE (alkylating agent → active-site cysteine, NOT overcome by ↑[S], Vmax ↓, Km unchanged, ↓ efficacy).",
          text: "Compound 1 is reversible competitive (↓ potency, lines cross at Y); compound 2 is irreversible competitive (↓ efficacy, Vmax falls).",
          correct: true,
          why:
            "Correct on both compounds and on the crossing geometry. COMPOUND 1: a folate analog that competes with dihydrofolate at the active site — the structural mimicry (= resembles substrate Yes) and the rescue by 100-fold excess substrate (= overcome by ↑[S] Yes) place it in the REVERSIBLE COMPETITIVE row. Vmax is unchanged because enough substrate outcompetes the inhibitor; Km rises (apparent affinity falls) because more substrate is needed to reach 1/2 Vmax. The Lineweaver-Burk lines CROSS at the Y-axis because the Y-intercept (1/Vmax) is shared — Vmax is unchanged — while the X-intercept (-1/Km_app) shifts toward zero as Km_app increases. The dose-response curve shifts RIGHT (more drug needed for the same effect, ceiling preserved) = ↓ POTENCY. Methotrexate is the clinical example of a DHFR folate-analog competitive inhibitor. COMPOUND 2: an alkylating agent that covalently modifies an active-site cysteine — the covalent mechanism (= NOT overcome by ↑[S]) and the active-site binding place it in the IRREVERSIBLE COMPETITIVE row. Vmax falls because enzyme molecules are removed from the pool; Km is unchanged because surviving enzyme is normal. The dose-response ceiling FALLS = ↓ EFFICACY.",
        },
        {
          label:
            "Compound 1 = NONCOMPETITIVE (because Vmax is unchanged and the lines cross), and Compound 2 = REVERSIBLE COMPETITIVE (because the substrate excess should rescue anything competitive)",
          text: "Compound 1 is noncompetitive (crossing lines); compound 2 is reversible competitive (rescuable).",
          why:
            "Wrong on both. Noncompetitive inhibition LOWERS Vmax (it does not leave Vmax unchanged) and the Lineweaver-Burk lines DO NOT CROSS (they share the X-intercept, not the Y-intercept) — so compound 1's unchanged Vmax and crossing lines are the opposite of noncompetitive. Compound 2 is NOT rescuable by substrate excess (the stem states this), so it cannot be reversible competitive — reversible competitive is by definition overcome by ↑[S]. The two compounds are the two competitive types (one reversible, one irreversible), not noncompetitive and reversible.",
        },
        {
          label:
            "Compound 1 = IRREVERSIBLE COMPETITIVE (because it resembles the substrate, and substrate analogs are usually irreversible), and Compound 2 = NONCOMPETITIVE (because the covalent modification sounds allosteric)",
          text: "Compound 1 is irreversible competitive; compound 2 is noncompetitive.",
          why:
            "Wrong reading of both stems. Compound 1 is RESCUED by 100-fold substrate excess — that is the defining feature of REVERSIBLE competitive, not irreversible (irreversible competitive is covalent and cannot be rescued). The unchanged Vmax confirms this (irreversible competitive LOWERS Vmax). Compound 2's covalent modification is at the ACTIVE SITE (per the stem — 'active-site cysteine'), not an allosteric site — that places it in the IRREVERSIBLE COMPETITIVE row, not noncompetitive (noncompetitive binds ALLOSTERIC). The unchanged Km in both cases is consistent (only reversible competitive changes Km).",
        },
        {
          label:
            "Compound 1 = REVERSIBLE COMPETITIVE, but the Lineweaver-Burk lines cross at the X-axis (not the Y-axis), and Compound 2 = NONCOMPETITIVE with Km ↓ (not unchanged)",
          text: "Compound 1 is reversible competitive but crosses at X; compound 2 is noncompetitive with lowered Km.",
          why:
            "Right on compound 1's classification but wrong on the crossing geometry, and wrong on both the type and the Km direction for compound 2. REVERSIBLE COMPETITIVE lines cross at the Y-AXIS (the shared intercept is 1/Vmax, because Vmax is unchanged) — crossing at the X-axis would mean Km is unchanged, which is the noncompetitive pattern, not the competitive one. Compound 2 is IRREVERSIBLE COMPETITIVE (active-site covalent), not noncompetitive (allosteric); and neither irreversible competitive nor noncompetitive changes Km — Km is UNCHANGED in both, never lowered. Km only ever rises (reversible competitive) or stays the same (the other two).",
        },
        {
          label:
            "Compound 1 = MIXED INHIBITION (because Km rises and Vmax is unchanged — that is mixed), and Compound 2 = UNCOMPETITIVE INHIBITION (because the covalent bond locks the enzyme-substrate complex)",
          text: "Compound 1 is mixed; compound 2 is uncompetitive.",
          why:
            "Wrong categories — the source page covers only three inhibition types (reversible competitive, irreversible competitive, noncompetitive); mixed and uncompetitive inhibition are not on book 228 and are not tested at this level. Compound 1's pattern (resembles substrate, overcome by ↑[S], Vmax unchanged, Km ↑) is the textbook REVERSIBLE COMPETITIVE pattern — there is no ambiguity that would push it to mixed. Compound 2's covalent active-site modification is IRREVERSIBLE COMPETITIVE, not uncompetitive (uncompetitive binds the enzyme-substrate complex, not the free enzyme, and lowers both Vmax and Km — neither matches the stem).",
        },
      ],
      reasoning:
        "The stem walks two inhibitors, each with a complete kinetic fingerprint. COMPOUND 1 — a folate analog (RESEMBLES SUBSTRATE = Yes), rescued by 100-fold substrate excess (OVERCOME BY ↑[S] = Yes), Vmax UNCHANGED, Km ↑, Lineweaver-Burk lines CROSS at the Y-axis. The full fingerprint places it in the REVERSIBLE COMPETITIVE row of the inhibition table. The Lineweaver-Burk crossing geometry: the Y-intercept is 1/Vmax — if Vmax is unchanged, the Y-intercept is shared, and the lines cross at the Y-axis. The X-intercept (-1/Km_app) shifts toward zero because Km_app rises. The dose-response curve shifts RIGHT (more drug needed for the same effect, ceiling preserved) = ↓ POTENCY. COMPOUND 2 — an alkylating agent (covalent = NOT overcome by ↑[S]), modifies an ACTIVE-SITE cysteine (binds ACTIVE, resembles substrate), Vmax ↓, Km unchanged. The full fingerprint places it in the IRREVERSIBLE COMPETITIVE row. Vmax falls because enzyme molecules are covalently removed from the pool; Km is unchanged because the surviving enzyme is normal. The dose-response ceiling FALLS = ↓ EFFICACY. The distractors fail at: noncompetitive (lowers Vmax, lines do not cross), reversible competitive rescue (compound 2 is NOT rescuable), crossing geometry (Y-axis, not X-axis), and category errors (mixed/uncompetitive are not on book 228).",
    },
  },
  mnemonics: [
    {
      code: "KOMPETITIVE INHIBITORS INCREASE KM",
      meaning:
        "The page's own mnemonic, verbatim from book 228. Only ONE of the three inhibition types changes Km: the reversible competitive inhibitor (Km ↑). The other two (irreversible competitive, noncompetitive) leave Km unchanged. The 'K' in 'Kompetitive' is the cue — competitive inhibition is the one that touches the Km constant.",
      memorizes: "Which inhibition type changes Km (reversible competitive only)",
      whenToUse: "Any kinetics question asking which inhibitor raises Km",
      clinical:
        "If the stem shows Km ↑ (with Vmax unchanged), the inhibitor is reversible competitive. If Km is unchanged, the inhibitor is either irreversible competitive or noncompetitive — then ask about the binding site.",
    },
    {
      code: "V-MAX IS THE CEILING, KM IS THE FLOOR",
      meaning:
        "Vmax is the CEILING — the maximum velocity at saturating substrate, set by the enzyme concentration; it falls when enzyme molecules are removed (irreversible competitive, noncompetitive) and is unchanged when only substrate competition is at play (reversible competitive). Km is the FLOOR — the substrate concentration at 1/2 Vmax, set by the enzyme's affinity; it rises only when a reversible competitor makes the enzyme need more substrate (reversible competitive), and is unchanged when the inhibitor either covalently inactivates (irreversible competitive) or binds allosterically (noncompetitive).",
      memorizes: "Which constant each inhibition type changes",
      whenToUse: "Any question asking 'does Vmax or Km change?' for an inhibitor",
      clinical:
        "Inhibitors that remove enzyme molecules (irreversible competitive, noncompetitive) lower the ceiling (Vmax ↓); inhibitors that compete at the active site but are rescuable (reversible competitive) raise the floor (Km ↑).",
    },
    {
      code: "KOMPETITIVE = KROSS, NONCOMPETITIVE = NO KROSS",
      meaning:
        "On the Lineweaver-Burk plot, REVERSIBLE COMPETITIVE inhibitor lines CROSS the uninhibited line (they share the Y-intercept because Vmax is unchanged; the X-intercept shifts as Km rises). NONCOMPETITIVE inhibitor lines DO NOT CROSS (they share the X-intercept because Km is unchanged; the Y-intercept shifts as Vmax falls). The 'K' in Kompetitive pairs with the 'K' in Kross — competitive crosses; noncompetitive does not.",
      memorizes: "The Lineweaver-Burk crossing rule for the two reversible inhibitors",
      whenToUse: "Any Lineweaver-Burk plot question asking whether the lines cross",
      clinical:
        "Two lines crossing at the Y-axis → reversible competitive; two parallel (non-crossing) lines sharing the X-axis → noncompetitive. The crossing pattern names the inhibition type at a glance.",
    },
    {
      code: "HYPERBOLA OR SIGMOID",
      meaning:
        "The shape of the V-vs-[S] curve tells you whether the enzyme has cooperativity. A HYPERBOLIC curve = standard Michaelis-Menten kinetics (most enzymes). A SIGMOIDAL curve = positive cooperativity in substrate binding — the named example is aspartate transcarbamoylase. The shape is the first thing to read off the plot.",
      memorizes: "The curve-shape rule (hyperbolic = Michaelis-Menten; sigmoidal = cooperativity)",
      whenToUse: "Any kinetics question showing or describing the V-vs-[S] curve shape",
      clinical:
        "Sigmoidal = cooperativity = think aspartate transcarbamoylase (the textbook example). Hyperbolic = standard Michaelis-Menten — most enzymes.",
    },
  ],
  rapidReview: {
    s30: [
      "Km is the substrate concentration needed for an enzyme to reach a rate of 1/2 Vmax; Km is inversely related to the affinity of the enzyme for its substrate (higher Km = lower affinity)",
      "Vmax is directly proportional to the enzyme concentration (more enzyme = higher Vmax)",
      "Most enzymatic reactions follow a hyperbolic curve (Michaelis-Menten kinetics); a sigmoidal curve usually indicates positive cooperativity in substrate binding (eg, aspartate transcarbamoylase)",
      "Lineweaver-Burk plot (1/V vs 1/[S]): the closer to 0 on the Y-axis, the higher the Vmax; the closer to 0 on the X-axis, the higher the Km; the higher the Km, the lower the affinity",
      "Reversible competitive inhibitors cross each other on the Lineweaver-Burk plot, whereas noncompetitive inhibitors do not",
      "Reversible competitive inhibition: resembles substrate (Yes), overcome by ↑[S] (Yes), binds active site, Vmax unchanged, Km ↑, ↓ potency",
      "Irreversible competitive inhibition: resembles substrate (Yes), overcome by ↑[S] (No), binds active site, Vmax ↓, Km unchanged, ↓ efficacy",
      "Noncompetitive inhibition: resembles substrate (No), overcome by ↑[S] (No), binds allosteric site, Vmax ↓, Km unchanged, ↓ efficacy",
      "'Kompetitive inhibitors increase Km' — only reversible competitive inhibition changes Km (Km ↑); the other two leave Km unchanged",
      "Both irreversible competitive and noncompetitive lower Vmax; the discriminator is the binding site (active = irreversible competitive; allosteric = noncompetitive)",
    ],
    m3: [
      "KOMPETITIVE INHIBITORS INCREASE KM — the page's own mnemonic; only reversible competitive inhibition changes Km (Km ↑)",
      "V-MAX IS THE CEILING, KM IS THE FLOOR — Vmax falls when enzyme is removed (irreversible competitive, noncompetitive); Km rises only with reversible competitive",
      "KOMPETITIVE = KROSS, NONCOMPETITIVE = NO KROSS — on Lineweaver-Burk, reversible competitive lines cross (shared Y-intercept); noncompetitive lines do not cross (shared X-intercept)",
      "HYPERBOLA OR SIGMOID — hyperbolic = Michaelis-Menten; sigmoidal = positive cooperativity (aspartate transcarbamoylase)",
      "↓ POTENCY = reversible competitive (right-shifted dose-response, ceiling preserved); ↓ EFFICACY = irreversible competitive or noncompetitive (lowered ceiling)",
    ],
    m10: [
      "Km at 1/2 Vmax is the affinity axis — high Km = low affinity; Vmax is the enzyme-concentration axis — more enzyme = higher Vmax",
      "Lineweaver-Burk linearizes the hyperbola: Y-intercept = 1/Vmax, X-intercept = -1/Km, slope = Km/Vmax",
      "Reversible competitive inhibition: substrate analog, active site, rescuable by ↑[S], Vmax unchanged, Km ↑, ↓ potency — the only inhibitor that touches Km",
      "Irreversible competitive inhibition: covalent active-site modifier (eg, organophosphates on acetylcholinesterase), NOT rescuable, Vmax ↓, Km unchanged, ↓ efficacy",
      "Noncompetitive inhibition: allosteric binder (eg, heavy metals), does NOT resemble substrate, NOT rescuable, Vmax ↓, Km unchanged, ↓ efficacy",
    ],
  },
  recall: [
    {
      q: "The Michaelis-Menten kinetics definition verbatim (Km, Vmax, hyperbolic vs sigmoid).",
      a: "Km is the substrate concentration needed for an enzyme to reach a rate of 1/2 Vmax and is inversely related to the affinity of the enzyme for its substrate. Vmax is directly proportional to the enzyme concentration. Most enzymatic reactions follow a hyperbolic curve (ie, Michaelis-Menten kinetics); however, enzymatic reactions that exhibit a sigmoidal curve usually indicate positive cooperativity in substrate binding (eg, aspartate transcarbamoylase).",
    },
    {
      q: "The Lineweaver-Burk plot reading rules verbatim.",
      a: "The closer to 0 on the Y-axis, the higher the Vmax. The closer to 0 on the X-axis, the higher the Km. The higher the Km, the lower the affinity. Reversible competitive inhibitors cross each other, whereas noncompetitive inhibitors do not.",
    },
    {
      q: "The inhibition comparison table verbatim — Resemble substrate, Overcome by ↑[S], Bind site, Effect on Vmax, Effect on Km, Pharmacodynamics across the three inhibition types.",
      a: "REVERSIBLE COMPETITIVE: Resemble substrate = Yes; Overcome by ↑[S] = Yes; Bind site = Active; Effect on Vmax = Unchanged; Effect on Km = ↑; Pharmacodynamics = ↓ potency. IRREVERSIBLE COMPETITIVE: Resemble substrate = Yes; Overcome by ↑[S] = No; Bind site = Active; Effect on Vmax = ↓; Effect on Km = Unchanged; Pharmacodynamics = ↓ efficacy. NONCOMPETITIVE: Resemble substrate = No; Overcome by ↑[S] = No; Bind site = Allosteric; Effect on Vmax = ↓; Effect on Km = Unchanged; Pharmacodynamics = ↓ efficacy.",
    },
    {
      q: "The 'Kompetitive inhibitors increase Km' mnemonic — which inhibition type changes Km and in which direction?",
      a: "Only REVERSIBLE COMPETITIVE inhibition changes Km — Km ↑ (apparent Km rises because more substrate is needed to reach 1/2 Vmax). The other two inhibition types (irreversible competitive and noncompetitive) leave Km unchanged. The 'K' in 'Kompetitive' is the cue — competitive inhibition is the one that touches the Km constant.",
    },
    {
      q: "Which two inhibition types lower Vmax, and how do you tell them apart?",
      a: "Both IRREVERSIBLE COMPETITIVE and NONCOMPETITIVE inhibition lower Vmax (and both leave Km unchanged). The discriminator is the binding site and substrate mimicry: IRREVERSIBLE COMPETITIVE resembles the substrate (Yes) and binds the ACTIVE site (it covalently inactivates the enzyme — eg, organophosphates on acetylcholinesterase); NONCOMPETITIVE does NOT resemble the substrate (No) and binds an ALLOSTERIC site (it distorts the enzyme from elsewhere — eg, heavy metals). Both produce ↓ efficacy (the dose-response ceiling falls).",
    },
  ],
  related: [
    {
      title: "Sympathomimetics — Receptor Activity Grid",
      topicId: "sympathomimetics",
      note:
        "The sympathomimetic page is the receptor-pharmacology mirror of this kinetics page: where enzyme kinetics asks how an inhibitor changes Km and Vmax, receptor pharmacology asks how an agonist/antagonist changes affinity and efficacy at α1/α2/β1/β2/D1 receptors. The same vocabulary — potency vs efficacy, competitive vs noncompetitive binding — applies to both. A competitive α-blocker (eg, phentolamine, prazosin) shifts the agonist dose-response curve right (↓ potency, ceiling preserved) — the receptor-pharmacology analog of reversible competitive inhibition's Km ↑ with Vmax unchanged.",
    },
    {
      title: "Glycolysis Regulation — Hexokinase vs Glucokinase",
      topicId: "glycolysis-regulation",
      note:
        "Hexokinase and glucokinase are the textbook Km pair: hexokinase has a LOW Km (high affinity — it saturates at low glucose, works in all tissues) and glucokinase has a HIGH Km (low affinity — it only fires when glucose is high, the liver's glucose-sensor). The Km-vs-affinity rule on this page (higher Km = lower affinity) is the rule that explains the hexokinase/glucokinase split on the glycolysis page.",
    },
    {
      title: "Antimicrobial Overview — Target Classes",
      topicId: "antimicrobial-overview",
      note:
        "Antimicrobials are the clinical face of enzyme inhibition: sulfonamides and trimethoprim are reversible competitive inhibitors of bacterial folate synthesis (sulfonamides vs PABA on dihydropteroate synthase; trimethoprim vs dihydrofolate on DHFR) — both raise the apparent Km and shift the dose-response right (↓ potency). The inhibition-type axis on this page is the framework that classifies every antimicrobial mechanism.",
    },
    {
      title: "Cell Wall Inhibitors — β-Lactams and Beyond",
      topicId: "cell-wall-inhibitors",
      note:
        "β-Lactams are the irreversible-competitive analog at the bacterial cell wall: they covalently acylate the transpeptidase active site (PBP), inactivating the enzyme permanently — Vmax ↓ (fewer active PBPs), Km unchanged (the surviving PBPs are normal), ↓ efficacy. The same irreversible-competitive logic on this page (covalent active-site modification, not overcome by substrate) is the mechanism behind every β-lactam bactericidal action.",
    },
  ],
  crossLinks: [
    {
      subject: "Biochemistry (enzyme regulation and cooperativity)",
      connection:
        "The Km/Vmax definitions and the hyperbolic-vs-sigmoid rule are biochemistry fundamentals: hexokinase (low Km) vs glucokinase (high Km) is the textbook Km pair; aspartate transcarbamoylase is the textbook cooperative (sigmoidal) enzyme. Every metabolic pathway page (glycolysis, gluconeogenesis, the TCA cycle, fatty acid synthesis) uses Km and Vmax to describe its rate-limiting enzymes and their regulation.",
    },
    {
      subject: "Pharmacology (receptor pharmacology and dose-response)",
      connection:
        "The potency vs efficacy distinction on this page maps directly onto receptor pharmacology: ↓ potency (reversible competitive) = a right-shifted dose-response curve with the ceiling preserved; ↓ efficacy (irreversible competitive, noncompetitive) = a lowered ceiling. The competitive vs noncompetitive binding distinction at the active/allosteric site applies equally to receptor ligands — competitive antagonists shift the agonist curve right; noncompetitive antagonists lower the ceiling.",
    },
    {
      subject: "Microbiology (antimicrobial mechanisms)",
      connection:
        "Antimicrobials are enzyme inhibitors in clinical form: sulfonamides (reversible competitive vs PABA on dihydropteroate synthase), trimethoprim (reversible competitive vs dihydrofolate on DHFR), β-lactams (irreversible competitive — covalent acylation of the transpeptidase PBP active site), and heavy metals like arsenic/mercury (noncompetitive — allosteric thiol binding). The three inhibition types on this page are the framework for every bacteriostatic vs bactericidal question.",
    },
    {
      subject: "Toxicology (heavy metals and organophosphates)",
      connection:
        "The two non-reversible-competitive inhibition types are the toxicology page's mechanisms: organophosphates (sarin, malathion, pesticides) are IRREVERSIBLE COMPETITIVE inhibitors of acetylcholinesterase (covalent active-site serine modification; pralidoxime reactivates by cleaving the bond); heavy metals (arsenic, mercury, lead) are NONCOMPETITIVE inhibitors (allosteric thiol binding; chelators restore by removing the metal). The kinetics page's Vmax ↓ with Km unchanged pattern is the toxicology page's poisoning fingerprint.",
    },
  ],
};
