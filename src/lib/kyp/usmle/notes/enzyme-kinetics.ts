import type { KypUsMLENote } from "../types";

// Pharmacology — PHARMACOKINETICS AND PHARMACODYNAMICS banner (PH-batch 1).
// Source: pdf 250 / book 228 (Enzyme kinetics). The page carries: the
// Km/Vmax definitions ("K m is the substrate concentration needed for an
// enzyme to reach a rate of 1/2 Vmax and is inversely related to the
// affinity of the enzyme for its substrate"; "Vmax is directly
// proportional to the enzyme concentration"); the hyperbolic-vs-sigmoidal
// rule (Michaelis-Menten kinetics vs positive cooperativity, eg,
// aspartate transcarbamoylase); the four Lineweaver-Burk reading rules
// (0-proximity on the Y-axis = higher Vmax; 0-proximity on the X-axis =
// higher Km; higher Km = lower affinity; reversible competitive
// inhibitors CROSS each other whereas noncompetitive inhibitors do not);
// and the complete 6-row × 3-column effects-of-enzyme-inhibition table
// (Competitive reversible: Active site / Vmax unchanged / Km ↑ / ↓
// potency / overcome by ↑[S] Yes / resembles substrate Yes; Competitive
// irreversible: Active / ↓ / Unchanged / ↓ efficacy / No / Yes;
// Noncompetitive: Allosteric / ↓ / Unchanged / ↓ efficacy / No / No).
// Census (pdfimages + VLM, ph1-vlm-census.ts): ZERO raster images —
// four VECTOR curve panels (the single Michaelis-Menten hyperbola with
// its "Km = [S] at 1/2 Vmax" annotation, the single Lineweaver-Burk
// line, and the two "Effects of enzyme inhibition" overlays) whose
// labels interleave at their densest anywhere in the batch ("VmaxVmax",
// "CompetitiveK inhibitor = [S] at 1/2(reversible)", "− Km 1⁄2 V1/2 Vmax");
// no margin mnemonics. The source's own printed typo — "Kompetitive
// inhibitors increase K m." — prints in red in the left column directly
// beneath the crossing rule and is carried VERBATIM below as a
// documented quirk. The KYP memory layer is original.

export const enzymeKinetics: KypUsMLENote = {
  id: "enzyme-kinetics",
  title: "Enzyme Kinetics",
  subtitle:
    "Km is the substrate concentration at 1/2 Vmax and Vmax is the enzyme head-count — and everything else on this page is a reading rule for two plots (book 228): KM — the substrate concentration needed for an enzyme to reach a rate of 1/2 Vmax, inversely related to the affinity of the enzyme for its substrate; VMAX — directly proportional to the enzyme concentration; the CURVE-SHAPE RULE — most enzymatic reactions follow a hyperbolic curve (ie, Michaelis-Menten kinetics), but a sigmoidal curve usually indicates positive cooperativity in substrate binding (eg, aspartate transcarbamoylase); the four LINEWEAVER-BURK READING RULES — the closer to 0 on the Y-axis, the higher the Vmax; the closer to 0 on the X-axis, the higher the Km; the higher the Km, the lower the affinity; reversible competitive inhibitors cross each other, whereas noncompetitive inhibitors do not; and the complete INHIBITION TABLE — Competitive inhibitors, reversible (resembles substrate Yes, overcome by ↑ [S] Yes, binds the Active site, Vmax Unchanged, Km ↑, ↓ potency), Competitive inhibitors, irreversible (Yes, No, Active, ↓, Unchanged, ↓ efficacy), and Noncompetitive inhibitors (No, No, Allosteric, ↓, Unchanged, ↓ efficacy) — printed with the source's own red typo 'Kompetitive inhibitors increase K m.' carried verbatim.",
  subject: "Pharmacology",
  system: "Section II · High-Yield General Principles — Pharmacology: Pharmacokinetics and Pharmacodynamics",
  pilotCategory:
    "The complete 6-row inhibition table across all three inhibitor classes plus the Lineweaver-Burk and Michaelis-Menten figure-reading rules — the one page where a figure-intersection question (do the lines cross on the Y-axis or share the X-axis?) is the intended discriminator — with the Km-affinity inverse, the Vmax-enzyme-concentration proportionality, the hyperbolic-vs-sigmoidal cooperativity signal (aspartate transcarbamoylase), the potency-vs-efficacy pharmacodynamics row, and the source's own printed 'Kompetitive' typo documented as a quirk.",
  difficulty: 2,
  readTime: 8,
  sourceRef:
    "First Aid 2026, Part 1 pp. 228–228 (Pharmacology — Pharmacokinetics and Pharmacodynamics: Enzyme kinetics [the Km and Vmax definitions; the hyperbolic-vs-sigmoidal cooperativity rule; the four Lineweaver-Burk reading rules; the Michaelis-Menten and Lineweaver-Burk plots with their effects-of-inhibition overlays; the complete effects-of-enzyme-inhibition table — Competitive inhibitors, reversible / Competitive inhibitors, irreversible / Noncompetitive inhibitors — across all six rows: Resemble substrate, Overcome by ↑ [S], Bind site, Effect on Vmax, Effect on Km, Pharmacodynamics; the source's own printed typo 'Kompetitive inhibitors increase K m.'])",
  tags: [
    "enzyme kinetics",
    "Km",
    "Vmax",
    "Michaelis-Menten",
    "Michaelis-Menten kinetics",
    "Lineweaver-Burk",
    "Lineweaver-Burk plot",
    "double reciprocal plot",
    "competitive inhibitor",
    "competitive inhibitors reversible",
    "competitive inhibitors irreversible",
    "noncompetitive inhibitor",
    "allosteric",
    "allosteric site",
    "active site",
    "enzyme affinity",
    "substrate affinity",
    "1/2 Vmax",
    "half maximal velocity",
    "saturation",
    "hyperbolic curve",
    "sigmoidal curve",
    "positive cooperativity",
    "aspartate transcarbamoylase",
    "ATCase",
    "slope = Km/Vmax",
    "pharmacodynamics",
    "potency",
    "efficacy",
    "decreased potency",
    "decreased efficacy",
    "overcome by increased substrate",
    "resemble substrate",
    "enzyme concentration",
    "pharmacokinetics",
    "pharmacokinetics and pharmacodynamics",
    "Kompetitive inhibitors increase Km",
    "enzyme inhibition",
    "rate kinetics",
  ],
  core: {
    what:
      "Km is the substrate concentration needed for an enzyme to reach a rate of 1/2 Vmax and is inversely related to the affinity of the enzyme for its substrate — the higher the Km, the lower the affinity. Vmax is directly proportional to the enzyme concentration. Most enzymatic reactions follow a hyperbolic curve (ie, Michaelis-Menten kinetics); however, enzymatic reactions that exhibit a sigmoidal curve usually indicate positive cooperativity in substrate binding (eg, aspartate transcarbamoylase). On the Lineweaver-Burk (double-reciprocal) plot of 1/V vs 1/[S], four reading rules hold: the closer to 0 on the Y-axis, the higher the Vmax; the closer to 0 on the X-axis, the higher the Km; the higher the Km, the lower the affinity; and reversible competitive inhibitors cross each other, whereas noncompetitive inhibitors do not. The inhibition table: COMPETITIVE INHIBITORS, REVERSIBLE — resembles substrate (Yes), overcome by ↑ [S] (Yes), binds the Active site, Effect on Vmax Unchanged, Effect on Km ↑, Pharmacodynamics ↓ potency. COMPETITIVE INHIBITORS, IRREVERSIBLE — resembles substrate (Yes), overcome by ↑ [S] (No), binds the Active site, Effect on Vmax ↓, Effect on Km Unchanged, Pharmacodynamics ↓ efficacy. NONCOMPETITIVE INHIBITORS — resembles substrate (No), overcome by ↑ [S] (No), binds an Allosteric site, Effect on Vmax ↓, Effect on Km Unchanged, Pharmacodynamics ↓ efficacy. The page also prints — in red, as its own summary line — the typo 'Kompetitive inhibitors increase K m.' (carried verbatim; the competitive-inhibitor Km effect it describes is the reversible class's Km ↑).",
    why:
      "This page is the quantitative grammar of every pharmacology question that follows it. Km and Vmax are the two dials an exam stem can turn, and each inhibitor class moves exactly one of them: a reversible competitive inhibitor competes for the active site, so the enzyme's apparent affinity falls (Km ↑, Vmax unchanged — more substrate out-competes it, hence ↓ potency and 'overcome by ↑ [S] Yes'); an irreversible competitive inhibitor permanently removes active-site-bearing enzyme molecules from the working pool, so capacity falls (Vmax ↓) while each surviving enzyme keeps its native affinity (Km unchanged — ↓ efficacy, not overcome); a noncompetitive inhibitor binds an allosteric site, deactivating enzyme molecules whatever the substrate concentration, so Vmax ↓ with Km unchanged (↓ efficacy, not overcome, does not resemble the substrate). The pharmacodynamics row is the bridge to the dose-response page: a right-shifted curve that can still reach its ceiling is ↓ potency; a lowered ceiling is ↓ efficacy. The crossing rule is the figure version of the same logic: on double-reciprocal axes the Y-intercept IS 1/Vmax and the X-intercept IS −1/Km, so a line that shares the Y-intercept (reversible competitive, Vmax unchanged) must cross the control line there, while a line that shares the X-intercept (noncompetitive, Km unchanged) can never cross it. And the curve-shape rule extends the vocabulary from single enzymes to cooperative ones: hyperbolic means independent substrate binding (Michaelis-Menten), sigmoidal means positive cooperativity — aspartate transcarbamoylase being the named example.",
    keyIdea:
      "Read every kinetics question through the two dials. DIAL 1 — AFFINITY (Km): [S] at 1/2 Vmax; INVERSELY related to affinity (high Km = blunt binding); on the Lineweaver-Burk plot it lives on the X-axis (intercept −1/Km — closer to 0 means higher Km). DIAL 2 — CAPACITY (Vmax): directly proportional to enzyme concentration; on the plot it lives on the Y-axis (intercept 1/Vmax — closer to 0 means higher Vmax). Then route the inhibitor by WHICH DIAL IT MOVES: only a reversible competitive inhibitor moves Km (↑, with Vmax unchanged — it crosses the control line ON the Y-axis and is overcome by ↑ [S], ↓ potency); irreversible competitive and noncompetitive inhibitors move only Vmax (↓, Km unchanged — they share the control line's X-intercept and never cross it, ↓ efficacy, not overcome). Separate the two Vmax-movers by site and resemblance: irreversible competitive occupies the Active site and resembles the substrate (Yes/Yes); noncompetitive sits at an Allosteric site and resembles nothing (No/No). Curve shape is the third read: hyperbolic = Michaelis-Menten; sigmoidal = positive cooperativity (aspartate transcarbamoylase).",
  },
  mechanisms: [
    {
      id: "km-affinity-map",
      title: "The two dials: what Km and Vmax measure, and which one each inhibitor moves",
      context: "The Km/Vmax definitions and the inhibition table (book 228)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Vary [S] and measure velocity at fixed enzyme concentration",
            sublabel:
              "Input — the Michaelis-Menten experiment: velocity rises with substrate concentration along a hyperbolic curve (Michaelis-Menten kinetics) and plateaus at Saturation.",
            variant: "input",
          },
          {
            id: "km",
            label: "DIAL 1 — Km, the affinity gauge",
            sublabel:
              "Km is the substrate concentration needed for an enzyme to reach a rate of 1/2 Vmax and is inversely related to the affinity of the enzyme for its substrate — the higher the Km, the lower the affinity. Km is a property of the enzyme-substrate pair, NOT of enzyme amount.",
            variant: "process",
          },
          {
            id: "vmax",
            label: "DIAL 2 — Vmax, the capacity gauge",
            sublabel:
              "Vmax is directly proportional to the enzyme concentration — the Saturation plateau is set by how many enzyme molecules are working. More enzyme raises Vmax and never touches Km.",
            variant: "process",
          },
          {
            id: "router",
            label: "THE INHIBITOR ROUTER — which dial moves?",
            sublabel:
              "Competitive inhibitors, reversible: Active site, resembles substrate, overcome by ↑ [S] → Km ↑ ONLY (Vmax Unchanged, ↓ potency). Competitive inhibitors, irreversible: Active site, not overcome → Vmax ↓ ONLY (Km Unchanged, ↓ efficacy). Noncompetitive inhibitors: Allosteric site, not overcome, does not resemble substrate → Vmax ↓ ONLY (Km Unchanged, ↓ efficacy). No inhibitor in the table moves both dials.",
            variant: "target",
          },
          {
            id: "output",
            label: "The number the question is really asking about",
            sublabel:
              "Output — name the class from the moved dial, then split the Vmax-movers by bind site (Active vs Allosteric) and substrate resemblance (Yes vs No); the pharmacodynamics row converts the dial into exam language: Km ↑ = ↓ potency; Vmax ↓ = ↓ efficacy.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "km", label: "read the 1/2 Vmax point" },
          { from: "trigger", to: "vmax", label: "read the Saturation plateau" },
          { from: "km", to: "router", label: "affinity dial" },
          { from: "vmax", to: "router", label: "capacity dial" },
          { from: "router", to: "output", label: "one dial per inhibitor" },
        ],
      },
    },
    {
      id: "crossing-lines-map",
      title: "The crossing rule: same Y-intercept crosses, same X-intercept never crosses",
      context: "The Lineweaver-Burk reading rules (book 228)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Plot uninhibited and inhibited rates on double-reciprocal axes (1/V vs 1/[S])",
            sublabel:
              "Input — the Lineweaver-Burk plot straightens the hyperbola into a line: Y-intercept = 1/Vmax, X-intercept = −1/Km, slope = Km/Vmax.",
            variant: "input",
          },
          {
            id: "cross",
            label: "SAME Y-INTERCEPT → THE LINES CROSS",
            sublabel:
              "A reversible competitive inhibitor leaves Vmax unchanged, so its line shares the control line's 1/Vmax Y-intercept and the two lines CROSS each other there; Km ↑ slides the X-intercept (−1/Km) toward 0 — the source's own summary line, printed with its K: 'Kompetitive inhibitors increase K m.'",
            variant: "process",
          },
          {
            id: "nocross",
            label: "SAME X-INTERCEPT → NO CROSSING",
            sublabel:
              "A noncompetitive inhibitor leaves Km unchanged, so its line shares the control line's −1/Km X-intercept; Vmax ↓ lifts the 1/Vmax Y-intercept. The lines fan out from one X-root and do not cross each other.",
            variant: "process",
          },
          {
            id: "output",
            label: "The figure names the inhibitor — then the stem splits the tie",
            sublabel:
              "Output — crossing ON the Y-axis = competitive (reversible). Pinned to the X-axis with a higher Y-intercept = a Vmax-only inhibitor: noncompetitive if the stem says Allosteric/not substrate-like, irreversible competitive if it says the inhibitor occupies the Active site (same geometry, different Bind site and Resemble substrate answers).",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "cross", label: "Vmax unchanged → shared 1/Vmax" },
          { from: "trigger", to: "nocross", label: "Km unchanged → shared −1/Km" },
          { from: "cross", to: "output", label: "Km ↑, ↓ potency, overcome by ↑ [S]" },
          { from: "nocross", to: "output", label: "Vmax ↓, ↓ efficacy, not overcome" },
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
        "An original KYP redraw of the source page (book 228) in four panels: PANEL 1 — the Michaelis-Menten hyperbola on original KYP axes (Velocity V vs [S]) with the 1/2 Vmax dashed line meeting the curve at Km, the Vmax Saturation plateau, the Vmax ∝ enzyme concentration note, and the three-inhibitor overlay (Uninhibited; Competitive inhibitor (reversible) reaching the SAME Vmax but needing more substrate; Noncompetitive inhibitor with a LOWER plateau at the same Km). PANEL 2 — the Lineweaver-Burk double-reciprocal redrawn (1/V vs 1/[S], slope = Km/Vmax, Y-intercept 1/Vmax, X-intercept −1/Km) with three lines: the reversible competitive line SHARING the Y-intercept (the crossing point) with its X-intercept slid toward 0, and the noncompetitive line SHARING the X-intercept with a lifted Y-intercept (no crossing). PANEL 3 — the four reading rules verbatim (the 0-proximity pair, the affinity inverse, and the crossing rule) plus the source's red 'Kompetitive' typo carried verbatim. PANEL 4 — the verbatim 6-row × 3-column inhibition table as KYP table art, with the Pharmacodynamics row (↓ potency / ↓ efficacy / ↓ efficacy) highlighted.",
      notice:
        "Census (pdfimages + VLM): ZERO raster images on this page — the four curve panels print as VECTOR line art (the single Michaelis-Menten hyperbola with its 'Km = [S] at 1/2 Vmax' annotation, the single Lineweaver-Burk line with slope = Km/Vmax, and the two 'Effects of enzyme inhibition' overlays — one on Michaelis-Menten axes, one on Lineweaver-Burk axes), and the text layer interleaves their labels at the batch's densest ('VmaxVmax', 'CompetitiveK inhibitor = [S] at 1/2(reversible)', '− Km 1⁄2 V1/2 Vmax'); no margin mnemonics print (VLM confirmed). The curves, axes, intercept markers, and table art here are an ORIGINAL KYP redraw — nothing is reproduced from the book; the table itself is also carried verbatim in the note's table block. The KYP memory layer (the four mnemonics) is original.",
    },
    {
      kind: "table",
      title:
        "Book 228 — the effects-of-enzyme-inhibition table (carried verbatim, all six rows in printed order)",
      intro:
        "The complete table as printed — columns Competitive inhibitors, reversible / Competitive inhibitors, irreversible / Noncompetitive inhibitors; rows in the printed order (Resemble substrate and Overcome by ↑ [S] print above Bind site).",
      columns: [
        "",
        "Competitive inhibitors, reversible",
        "Competitive inhibitors, irreversible",
        "Noncompetitive inhibitors",
      ],
      rows: [
        [
          "Resemble substrate",
          "Yes",
          "Yes",
          "No",
        ],
        [
          "Overcome by ↑ [S]",
          "Yes",
          "No",
          "No",
        ],
        [
          "Bind site",
          "Active",
          "Active",
          "Allosteric",
        ],
        [
          "Effect on Vmax",
          "Unchanged",
          "↓",
          "↓",
        ],
        [
          "Effect on Km",
          "↑",
          "Unchanged",
          "Unchanged",
        ],
        [
          "Pharmacodynamics",
          "↓ potency",
          "↓ efficacy",
          "↓ efficacy",
        ],
      ],
      caption:
        "One dial per inhibitor: only reversible competitive moves Km (↑, with Vmax Unchanged and ↓ potency — overcome by ↑ [S], resembles the substrate); irreversible competitive and noncompetitive both move Vmax only (↓, Km Unchanged, ↓ efficacy, not overcome) and are separated by Bind site (Active vs Allosteric) and substrate resemblance (Yes vs No).",
    },
    {
      kind: "steps",
      title: "Reading any Lineweaver-Burk plot in four moves (the book's rules, in application order)",
      intro:
        "The four printed rules arranged as a reading protocol — find the intercepts, then let the crossing decide.",
      steps: [
        {
          label: "MOVE 1 — Read the Y-axis for Vmax",
          detail:
            "The closer to 0 on the Y-axis, the higher the Vmax: the Y-intercept is 1/Vmax, so a line starting nearer the origin belongs to the faster (higher-Vmax) condition — Vmax is directly proportional to the enzyme concentration.",
        },
        {
          label: "MOVE 2 — Read the X-axis for Km",
          detail:
            "The closer to 0 on the X-axis, the higher the Km: the X-intercept is −1/Km, so the intercept sliding toward 0 means apparent affinity is falling (a competitive reversible inhibitor at work — 'Kompetitive inhibitors increase K m.', as the book's own red summary line prints it).",
        },
        {
          label: "MOVE 3 — Convert Km to affinity",
          detail:
            "The higher the Km, the lower the affinity — Km is the substrate concentration needed for an enzyme to reach a rate of 1/2 Vmax and is inversely related to the affinity of the enzyme for its substrate.",
        },
        {
          label: "MOVE 4 — Let the crossing decide",
          detail:
            "Reversible competitive inhibitors cross each other, whereas noncompetitive inhibitors do not: shared Y-intercept (Vmax unchanged) = crossing = competitive reversible; shared X-intercept (Km unchanged) = no crossing = noncompetitive (or irreversible competitive, which shares the same geometry — split them by Bind site and Resemble substrate).",
        },
      ],
    },
    {
      kind: "callout",
      variant: "memory",
      title: "The source's own typo — carried verbatim, on purpose",
      body:
        "Book 228 prints a red summary line beneath the crossing rule: 'Kompetitive inhibitors increase K m.' The K is the book's own — a printed typo in the First Aid 2026 text (it prints nowhere else on the page and the sentence means 'Competitive inhibitors increase Km'). KYP carries the line verbatim as a page-identity quirk: if you ever see 'Kompetitive' in a quote of this page, it is the source, not the quoter. The fact underneath is table-true: it is the REVERSIBLE competitive inhibitors that increase Km (Vmax unchanged) — the irreversible competitive class leaves Km unchanged while Vmax ↓.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A researcher adds a drug to a purified enzyme preparation; the maximal reaction velocity is unchanged, but a much higher substrate concentration is now needed to reach half of it. Raising substrate concentration restores the original maximal rate.",
        discriminator:
          "Vmax unchanged with Km ↑, overcome by ↑ [S] — competitive inhibitors, reversible",
        concept: "The Km-only mover",
        answer:
          "Competitive inhibitors, reversible: binds the Active site, resembles the substrate (Yes), Effect on Vmax Unchanged, Effect on Km ↑, Pharmacodynamics ↓ potency, Overcome by ↑ [S] Yes. The inhibitor competes at the active site, so apparent affinity falls, but saturation can still be reached — the dose-response curve shifts right without losing its ceiling.",
      },
      {
        stem: "A double-reciprocal plot shows the inhibited line crossing the control line exactly on the Y-axis; the inhibited line's X-intercept sits closer to 0.",
        discriminator:
          "Crossing ON the Y-axis (shared 1/Vmax intercept) with the X-intercept sliding toward 0 — reversible competitive inhibition",
        concept: "The crossing rule",
        answer:
          "The Y-intercept is 1/Vmax and the X-intercept is −1/Km: a line sharing the Y-intercept has the same Vmax (Unchanged) while its X-intercept nearer 0 means Km ↑ — reversible competitive inhibitors cross each other, whereas noncompetitive inhibitors do not. Slope (Km/Vmax) steepens.",
      },
      {
        stem: "An enzyme assay shows the same Km as control but a lower maximal velocity; on the double-reciprocal plot the inhibited line rises from the control line's X-intercept and the two lines never cross. The inhibitor was pre-incubated with the enzyme and cannot be dialyzed off.",
        discriminator:
          "Km Unchanged with Vmax ↓, not overcome by ↑ [S], irreversible binding at the active site — competitive inhibitors, irreversible",
        concept: "The Vmax-only mover that occupies the active site",
        answer:
          "Competitive inhibitors, irreversible: Bind site Active, Resemble substrate Yes, Effect on Vmax ↓, Effect on Km Unchanged (each surviving enzyme keeps its native affinity), Pharmacodynamics ↓ efficacy, Overcome by ↑ [S] No — enzyme molecules are permanently removed from the working pool, so no substrate concentration restores the ceiling.",
      },
      {
        stem: "A velocity-versus-substrate plot for a bacterial enzyme produces an S-shaped (sigmoidal) curve rather than the usual rectangular hyperbola; the enzyme shows increased activity at higher substrate concentrations beyond what a single binding site would predict.",
        discriminator:
          "Sigmoidal curve = positive cooperativity in substrate binding (aspartate transcarbamoylase is the named example)",
        concept: "The curve-shape rule",
        answer:
          "Most enzymatic reactions follow a hyperbolic curve (ie, Michaelis-Menten kinetics); however, enzymatic reactions that exhibit a sigmoidal curve usually indicate positive cooperativity in substrate binding (eg, aspartate transcarbamoylase) — substrate binding at one site increases the affinity at subsequent sites, so this is not an inhibition question at all.",
      },
    ],
    traps: [
      {
        a: "Km ↑ (or an X-intercept near 0)",
        b: "Affinity ↑",
        whyConfused:
          "Both phrasings feel like 'the enzyme likes its substrate more' when the inhibitor is added, and 'higher' sounds like 'better' on both axes.",
        keyDifference:
          "The relation is INVERSE: the higher the Km, the lower the affinity — Km is the substrate concentration needed for an enzyme to reach a rate of 1/2 Vmax and is inversely related to the affinity of the enzyme for its substrate.",
        clue:
          "Translate before answering: 'X-intercept closer to 0' → Km ↑ → affinity ↓.",
      },
      {
        a: "Vmax",
        b: "Km",
        whyConfused:
          "Both are 'enzyme numbers' quoted in the same breath, and both can appear in a stem that doubles something.",
        keyDifference:
          "Vmax is directly proportional to the enzyme concentration (double the enzyme → double Vmax); Km is a property of the enzyme-substrate pair and does not move when enzyme amount changes.",
        clue:
          "'More enzyme' or 'increased expression' in the stem → Vmax-only; 'apparent affinity' or 'half-maximal [S]' → Km.",
      },
      {
        a: "Competitive inhibitors, irreversible",
        b: "Noncompetitive inhibitors",
        whyConfused:
          "Their numeric columns are IDENTICAL — Vmax ↓, Km Unchanged, ↓ efficacy, Overcome by ↑ [S] No, and on the Lineweaver-Burk plot both share the control X-intercept without crossing.",
        keyDifference:
          "Split them by Bind site and Resemble substrate: irreversible competitive occupies the Active site and resembles the substrate (Yes/Yes); noncompetitive binds an Allosteric site and does not (No/No).",
        clue:
          "Any stem detail about WHERE the inhibitor binds or whether it looks like the substrate is the intended separator.",
      },
      {
        a: "↓ potency",
        b: "↓ efficacy",
        whyConfused:
          "Both are 'the drug works less' and both print in the Pharmacodynamics row of the same table.",
        keyDifference:
          "↓ potency belongs to Competitive inhibitors, reversible only (the ceiling is intact — more substrate/dose restores it); ↓ efficacy belongs to irreversible competitive and noncompetitive inhibitors (Vmax ↓ — the ceiling itself falls and cannot be restored).",
        clue:
          "Ask whether the maximal effect is preserved: preserved = potency problem; lost = efficacy problem.",
      },
    ],
    pivots: [
      {
        lookAlike: "A Lineweaver-Burk figure with two lines and no numbers",
        differentiator:
          "Read the intercepts geometrically: lines crossing each other ON the Y-axis = shared 1/Vmax = reversible competitive (Vmax unchanged, Km ↑); lines fanning from the SAME X-intercept without crossing = shared −1/Km = Vmax-only inhibitor (noncompetitive, or irreversible competitive)",
        correctPath:
          "Crossing on the Y-axis → the Km mover; pinned to the X-axis → the Vmax mover, then split by bind site (Allosteric = noncompetitive; Active and permanent = irreversible competitive)",
      },
      {
        lookAlike: "'Which parameter changes?' — a stem describing an inhibitor",
        differentiator:
          "Route by bind site and surmountability: substrate-like molecule at the Active site that can be out-competed → Km ↑ only (reversible competitive); everything else → Vmax ↓ only (Km unchanged), then Allosteric site → noncompetitive, Active site + permanent → irreversible competitive",
        correctPath:
          "Never answer 'both Vmax and Km change' — no inhibitor class in this table moves both dials",
      },
      {
        lookAlike: "A velocity-vs-substrate curve whose SHAPE is the finding",
        differentiator:
          "Hyperbolic curve = Michaelis-Menten kinetics (standard independent binding); sigmoidal curve = positive cooperativity in substrate binding (eg, aspartate transcarbamoylase)",
        correctPath:
          "Shape questions are not inhibition questions — answer cooperativity, and only then consider whether an inhibitor overlay (plateau height vs position) is being tested",
      },
    ],
    miniCase: {
      vignette:
        "A graduate student characterizes a newly isolated inhibitor of a purified hepatic reductase. Binding studies show the inhibitor occupies a hydrophobic pocket distinct from the catalytic active site, and the inhibitor shares no structural homology with the substrate. In a velocity assay, the maximal reaction rate falls from 120 to 70 nmol/sec; doubling the substrate concentration from saturating levels produces no further increase. On a double-reciprocal plot, the inhibited line rises from the same X-intercept as the control line and the two lines never intersect; the inhibited line's Y-intercept is higher. Which set of kinetic changes and table attributes does this inhibitor show?",
      question:
        "Select the combination of Effect on Vmax, Effect on Km, Pharmacodynamics, Overcome by ↑ [S], Bind site, and Resemble substrate that matches the findings.",
      options: [
        {
          label:
            "Vmax ↓, Km Unchanged, ↓ efficacy, Overcome by ↑ [S] No, Allosteric site, Resemble substrate No — a noncompetitive inhibitor",
          text: "The Vmax-only mover, named by its site.",
          correct: true,
          why:
            "Correct on every axis of the table. (1) SITE: the inhibitor binds a pocket DISTINCT from the active site — the Allosteric row — and shares no structural homology with the substrate (Resemble substrate No). (2) NUMBERS: the maximal rate falls (Effect on Vmax ↓) while the Km holds (Effect on Km Unchanged) — each enzyme molecule that still works keeps its native affinity, but fewer are working. (3) THE FIGURE: the inhibited line shares the control line's X-intercept (−1/Km — Km unchanged) with a higher Y-intercept (1/Vmax — Vmax ↓), and such lines do not cross each other: 'Reversible competitive inhibitors cross each other, whereas noncompetitive inhibitors do not.' (4) CONSEQUENCES: not overcome by ↑ [S] (doubling substrate changed nothing — the stem's own test) and Pharmacodynamics ↓ efficacy — the ceiling itself falls.",
        },
        {
          label:
            "Vmax Unchanged, Km ↑, ↓ potency, Overcome by ↑ [S] Yes, Active site, Resemble substrate Yes — a competitive inhibitor (reversible)",
          text: "The other classic — the Km mover.",
          why:
            "Misreads both the stem and the figure. A reversible competitive inhibitor leaves Vmax unchanged and is overcome by raising substrate concentration — but this stem's maximal rate FELL and doubling substrate restored nothing. On the plot, the competitive line would CROSS the control line on the Y-axis (shared 1/Vmax); here the lines share the X-intercept and never cross. The binding studies (a site distinct from the active site, no substrate homology) exclude an active-site competitor.",
        },
        {
          label:
            "Vmax ↓, Km Unchanged, ↓ efficacy, Overcome by ↑ [S] No, Active site, Resemble substrate Yes — a competitive inhibitor (irreversible)",
          text: "Same numbers, wrong site — the table's trap column.",
          why:
            "The kinetics are identical (Vmax ↓, Km unchanged, ↓ efficacy, not overcome, shared X-intercept, no crossing) — which is exactly why this distractor exists. The separator is the stem's binding data: an irreversible competitive inhibitor occupies the ACTIVE site (typically covalently) and RESEMBLES the substrate (Yes/Yes in the table). This inhibitor binds a distinct allosteric pocket with no substrate homology — noncompetitive, not irreversible competitive.",
        },
        {
          label:
            "Vmax ↓ AND Km ↑, ↓ efficacy, Overcome by ↑ [S] No, Allosteric site, Resemble substrate No",
          text: "Both dials move — a mixed picture.",
          why:
            "No inhibitor class in the effects-of-inhibition table moves both dials. A noncompetitive inhibitor lowers Vmax while leaving Km unchanged — the unchanged affinity is precisely what the shared X-intercept demonstrates. Answering 'both' is the standard error the table is built to prevent; the stem's figure (same X-intercept) is the explicit disproof.",
        },
        {
          label:
            "Vmax Unchanged, Km Unchanged, ↓ potency, Overcome by ↑ [S] Yes, Allosteric site, Resemble substrate No",
          text: "Nothing kinetic moves — a pure potency story.",
          why:
            "Internally inconsistent with the data: the maximal rate fell from 120 to 70 nmol/sec, so Vmax ↓ is measured, not unchanged. Potency language (a surmountable right-shift) belongs to the reversible competitive column, which requires an active site and substrate resemblance — neither is present. An allosteric binder that changes nothing kinetically would not lower the plateau or lift the Y-intercept.",
        },
      ],
      reasoning:
        "The stem hands you three independent readings — binding (a pocket distinct from the active site, no substrate homology), numbers (maximal rate ↓, saturating substrate does not restore it), and figure (shared X-intercept, higher Y-intercept, no crossing) — and all three converge on the noncompetitive column. The BINDING data rules the routing: Allosteric site + Resemble substrate No = noncompetitive (an active-site, substrate-like binder would be the competitive column). The NUMBERS then fill the row: Vmax ↓ (measured), Km Unchanged, Pharmacodynamics ↓ efficacy, Overcome by ↑ [S] No (the doubled substrate is the stem's built-in test of exactly this row). The FIGURE is the geometric translation: X-intercept = −1/Km (shared → Km unchanged), Y-intercept = 1/Vmax (higher → Vmax ↓), and per the crossing rule such lines never cross. The distractors each fail one reading: the reversible-competitive option fails all three; the irreversible-competitive option matches every number but fails the binding data — the table's designed near-miss, separable only by Bind site and Resemble substrate; the 'both dials' option contradicts the shared X-intercept; and the 'nothing moves' option contradicts the measured fall in maximal rate.",
    },
  },
  mnemonics: [
    {
      code: "HALF-SPEED SUBSTRATE, HEAD-COUNT CEILING",
      meaning:
        "The two definitions in one line: HALF-SPEED SUBSTRATE = Km is the substrate concentration needed for an enzyme to reach a rate of 1/2 Vmax (and is inversely related to the affinity of the enzyme for its substrate — a high Km is a blunt binder); HEAD-COUNT CEILING = Vmax is directly proportional to the enzyme concentration (the Saturation plateau is set by how many enzyme molecules are on the job).",
      memorizes: "The Km and Vmax definitions + which one enzyme amount moves",
      whenToUse: "Any 'what is Km / what happens if enzyme concentration doubles' question",
      clinical:
        "Doubling expressed enzyme doubles Vmax and never moves Km — the same logic by which enzyme induction raises a pathway's maximal capacity while each enzyme molecule keeps its affinity.",
    },
    {
      code: "HUG THE ZERO — Y-HUG LIFTS VMAX, X-HUG LIFTS KM",
      meaning:
        "The two 0-proximity rules of the Lineweaver-Burk plot: the closer to 0 on the Y-axis, the higher the Vmax (Y-intercept = 1/Vmax); the closer to 0 on the X-axis, the higher the Km (X-intercept = −1/Km) — and by the affinity inverse, the lower the affinity.",
      memorizes: "Both proximity rules and the Km-affinity corollary",
      whenToUse: "Any double-reciprocal figure question, especially intercept-comparison stems",
      clinical:
        "A line hugging either axis is shouting its parameter: Y-hug = a fast (high-Vmax) condition; X-hug = a high-Km, low-affinity condition.",
    },
    {
      code: "CROSSERS SHARE THE Y-AXIS; NONCROSSERS SHARE THE X-AXIS",
      meaning:
        "The crossing rule with its geometry: reversible competitive inhibitors cross each other because they SHARE the Y-intercept (1/Vmax — Vmax unchanged) while their X-intercepts slide toward 0 (Km ↑ — the source's own red line: 'Kompetitive inhibitors increase K m.'); noncompetitive inhibitors do not cross because they SHARE the X-intercept (−1/Km — Km unchanged) while their Y-intercepts climb (Vmax ↓).",
      memorizes: "The crossing rule + which intercept each inhibitor class shares",
      whenToUse: "Any two-line Lineweaver-Burk figure",
      clinical:
        "The intersection point names the class on sight: a crossing at the Y-axis is competitive (reversible); lines pinned to one X-root are Vmax-only inhibitors (noncompetitive, or irreversible competitive — split by bind site).",
    },
    {
      code: "COMPETITION BENDS POTENCY; EVICTION BREAKS EFFICACY",
      meaning:
        "The Pharmacodynamics row: reversible competitive inhibition merely BENDS the dose-response — ↓ potency, because the ceiling survives and ↑ [S] (more substrate, more dose) overcomes it; irreversible competitive and noncompetitive inhibition EVICT enzyme molecules from the working pool — ↓ efficacy, because Vmax ↓ lowers the ceiling itself and no substrate concentration restores it.",
      memorizes: "The Pharmacodynamics row + the Overcome by ↑ [S] row together",
      whenToUse: "Any potency-vs-efficacy or 'can the effect be restored' question",
      clinical:
        "This is the enzyme-kinetics version of the dose-response page: a right-shifted curve with an intact maximum is a potency problem; a lowered maximum is an efficacy problem.",
    },
  ],
  rapidReview: {
    s30: [
      "Km is the substrate concentration needed for an enzyme to reach a rate of 1/2 Vmax and is inversely related to the affinity of the enzyme for its substrate",
      "Vmax is directly proportional to the enzyme concentration",
      "Most enzymatic reactions follow a hyperbolic curve (ie, Michaelis-Menten kinetics); enzymatic reactions that exhibit a sigmoidal curve usually indicate positive cooperativity in substrate binding (eg, aspartate transcarbamoylase)",
      "The closer to 0 on the Y-axis, the higher the Vmax; the closer to 0 on the X-axis, the higher the Km; the higher the Km, the lower the affinity",
      "Reversible competitive inhibitors cross each other, whereas noncompetitive inhibitors do not",
      "Competitive inhibitors, reversible: Active site · Vmax Unchanged · Km ↑ · ↓ potency · Overcome by ↑ [S] Yes · Resemble substrate Yes",
      "Competitive inhibitors, irreversible: Active site · Vmax ↓ · Km Unchanged · ↓ efficacy · Overcome by ↑ [S] No · Resemble substrate Yes",
      "Noncompetitive inhibitors: Allosteric site · Vmax ↓ · Km Unchanged · ↓ efficacy · Overcome by ↑ [S] No · Resemble substrate No",
      "The source page prints its own red typo — 'Kompetitive inhibitors increase K m.' — carried verbatim; the true statement is that REVERSIBLE competitive inhibitors increase Km",
    ],
    m3: [
      "HALF-SPEED SUBSTRATE, HEAD-COUNT CEILING — Km = [S] at 1/2 Vmax (inverse affinity); Vmax ∝ enzyme concentration",
      "HUG THE ZERO — Y-HUG LIFTS VMAX, X-HUG LIFTS KM — the two 0-proximity rules",
      "CROSSERS SHARE THE Y-AXIS; NONCROSSERS SHARE THE X-AXIS — the crossing rule's geometry",
      "COMPETITION BENDS POTENCY; EVICTION BREAKS EFFICACY — the pharmacodynamics row",
    ],
    m10: [
      "No inhibitor class on this page moves BOTH dials — competitive reversible moves Km only; the other two classes move Vmax only — 'both Vmax and Km change' is never the right answer here",
      "Irreversible competitive and noncompetitive inhibitors are numerically identical in the table (Vmax ↓, Km Unchanged, ↓ efficacy, not overcome, no crossing) — only Bind site (Active vs Allosteric) and Resemble substrate (Yes vs No) separate them",
      "Only the REVERSIBLE competitive class is overcome by ↑ [S] — 'competitive' alone does not mean surmountable; check for the irreversible column",
      "The Lineweaver-Burk vocabulary: Y-intercept = 1/Vmax, X-intercept = −1/Km, slope = Km/Vmax — every reading rule is just these three placements",
      "Sigmoidal is a shape question, not an inhibition question: positive cooperativity (aspartate transcarbamoylase) — do not answer with an inhibitor class",
      "The pharmacodynamics row converts kinetics into exam language: Km ↑ = ↓ potency (right-shift, ceiling intact); Vmax ↓ = ↓ efficacy (ceiling falls)",
      "Census quirk: page 250 / book 228 has ZERO raster images — four VECTOR curve panels whose labels interleave in the text layer ('VmaxVmax', 'CompetitiveK inhibitor = [S] at 1/2(reversible)', '− Km 1⁄2 V1/2 Vmax'), plus the printed 'Kompetitive' typo; nothing on the page is a mnemonic — the KYP memory layer is original",
    ],
  },
  recall: [
    {
      q: "The Km definition, verbatim.",
      a: "Km is the substrate concentration needed for an enzyme to reach a rate of 1/2 Vmax and is inversely related to the affinity of the enzyme for its substrate. (The figure prints it as: Km = [S] at 1/2 Vmax.)",
    },
    {
      q: "The Vmax rule, verbatim.",
      a: "Vmax is directly proportional to the enzyme concentration.",
    },
    {
      q: "The hyperbolic-vs-sigmoidal rule, verbatim.",
      a: "Most enzymatic reactions follow a hyperbolic curve (ie, Michaelis-Menten kinetics); however, enzymatic reactions that exhibit a sigmoidal curve usually indicate positive cooperativity in substrate binding (eg, aspartate transcarbamoylase).",
    },
    {
      q: "The four Lineweaver-Burk reading rules, verbatim.",
      a: "The closer to 0 on the Y-axis, the higher the Vmax. The closer to 0 on the X-axis, the higher the Km. The higher the Km, the lower the affinity. Reversible competitive inhibitors cross each other, whereas noncompetitive inhibitors do not.",
    },
    {
      q: "The inhibition table's first printed row — Resemble substrate — with all three values.",
      a: "Competitive inhibitors, reversible: Yes. Competitive inhibitors, irreversible: Yes. Noncompetitive inhibitors: No.",
    },
    {
      q: "The Overcome by ↑ [S] row, with all three values.",
      a: "Competitive inhibitors, reversible: Yes. Competitive inhibitors, irreversible: No. Noncompetitive inhibitors: No.",
    },
    {
      q: "The Bind site row, with all three values.",
      a: "Competitive inhibitors, reversible: Active. Competitive inhibitors, irreversible: Active. Noncompetitive inhibitors: Allosteric.",
    },
    {
      q: "The Effect on Vmax and Effect on Km rows, with all three values each.",
      a: "Effect on Vmax — reversible competitive: Unchanged; irreversible competitive: ↓; noncompetitive: ↓. Effect on Km — reversible competitive: ↑; irreversible competitive: Unchanged; noncompetitive: Unchanged.",
    },
    {
      q: "The Pharmacodynamics row, with all three values.",
      a: "Competitive inhibitors, reversible: ↓ potency. Competitive inhibitors, irreversible: ↓ efficacy. Noncompetitive inhibitors: ↓ efficacy.",
    },
    {
      q: "The source's own printed typo, verbatim, and where it prints.",
      a: "'Kompetitive inhibitors increase K m.' — printed in red in the left column of book 228, directly beneath the crossing rule ('Reversible competitive inhibitors cross each other, whereas noncompetitive inhibitors do not.'); the K is the book's own typo, and the fact underneath is the reversible class's Km ↑.",
    },
  ],
  related: [
    {
      title: "Enzyme Terminology & Kinetics Concepts",
      topicId: "enzyme-terminology",
      note: "The biochemistry-side vocabulary page — the suffix decoder (kinase vs phosphorylase vs phosphatase…) and the rate-determining enzyme table with every regulator; this page supplies what that one lacks: the Km/Vmax definitions, the figure-reading rules, and the three-class inhibition table.",
    },
    {
      title: "Drug Metabolism: Phase I & Phase II",
      topicId: "drug-metabolism",
      note: "The in-vivo sequel to this table: CYP450 induction raises the working enzyme head-count (a Vmax intervention), while CYP inhibitors compete at the active serine/heme face (competitive, dose-surmountable) or inactivate the enzyme irreversibly (mechanism-based suicide inhibitors — the Vmax ↓ column made clinical).",
    },
    {
      title: "Glycolysis Regulation",
      topicId: "glycolysis-regulation",
      note: "Rate-limiting enzymes are the flux bottlenecks this page's math describes: PFK-1 sits at its own saturation curve's steep region at physiologic [S], and insulin-driven enzyme recruitment shifts the pathway's working Vmax — Km and Vmax deciding pathway speed, not drug effect.",
    },
    {
      title: "Pharmacokinetics: Clearance, Vd & Half-life",
      note: "The pages that immediately follow this one in the same subsection: the saturation vocabulary returns as zero- vs first-order elimination (a Vmax-limited process at high drug concentrations), and the Km/Vmax pair becomes clearance and the elimination rate — the enzyme-kinetics grammar applied to the whole body.",
    },
  ],
  crossLinks: [
    {
      subject: "Biochemistry (allosteric enzymes and cooperativity — aspartate transcarbamoylase, hemoglobin)",
      connection:
        "The sigmoidal clause of this page is the cooperativity principle: aspartate transcarbamoylase (ATCase), the committed step of pyrimidine synthesis, is the textbook cooperative enzyme — substrate binding at one catalytic trimer increases affinity at the others, giving the S-shaped velocity curve. Hemoglobin's oxygen dissociation curve is the same physics in a transport protein: sigmoidal = cooperative binding, hyperbolic = independent binding (myoglobin).",
    },
    {
      subject: "Biochemistry (rate-limiting enzymes and metabolic flux)",
      connection:
        "Km and Vmax set where each pathway enzyme sits at physiologic substrate concentrations: rate-limiting enzymes (PFK-1, isocitrate dehydrogenase, carbamoyl phosphate synthetase I…) are the low-flux bottlenecks, and hormonal regulation changes either their working Vmax (enzyme amount/recruitment) or their affinity (covalent or allosteric modification — the same dial-turns this page's inhibitors perform in reverse).",
    },
    {
      subject: "Pharmacology (dose-response curves — potency vs efficacy)",
      connection:
        "The Pharmacodynamics row is the dose-response page written in kinetic variables: a reversible competitive inhibitor right-shifts the dose-response curve (more drug needed for the same effect — ↓ potency, ceiling intact), while noncompetitive or irreversible inhibition lowers the maximum achievable effect (↓ efficacy) — the parallel-curve-vs-lowered-ceiling figures of the drug-receptor pages are this page's table translated into receptor language.",
    },
    {
      subject: "Pharmacology (CYP450 drug interactions)",
      connection:
        "The inhibition classes have their in-vivo careers here: competing substrates at a CYP isoenzyme's active site behave as reversible competitive inhibitors (raise the substrate's dose/effect — overcome by ↑ [S] in table language), while mechanism-based suicide inhibitors (eg, irreversible CYP inactivators) permanently remove enzyme molecules — Vmax ↓, new enzyme synthesis required to restore capacity, the clinical reason some interactions persist days after the inhibitor is stopped.",
    },
  ],
};
