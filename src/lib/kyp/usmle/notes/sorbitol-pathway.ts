import type { KypUsMLENote } from "../types";

// Biochemistry — Metabolism (E-batch, book order 8).
// Source: First Aid 2026, Part 1 pdf 101 / book 79 (sorbitol pathway:
// aldose reductase and sorbitol dehydrogenase; tissue distribution LARKS;
// osmotic damage in chronic hyperglycemia; galactitol note)

export const sorbitolPathway: KypUsMLENote = {
  id: "sorbitol-pathway",
  title: "Sorbitol Pathway (Polyol Route)",
  subtitle:
    "An alternative way to trap glucose: aldose reductase (NADPH) reduces glucose to sorbitol, and sorbitol dehydrogenase (NAD+) converts it to fructose — but in LARKS tissues (Lens, Retina, Kidneys, Schwann cells) with only aldose reductase, chronic hyperglycemia piles up osmotically active sorbitol: cataracts, retinopathy, peripheral neuropathy.",
  subject: "Biochemistry",
  system: "Section II · High-Yield General Principles — Metabolism",
  pilotCategory: "Metabolism — Sorbitol pathway",
  difficulty: 1,
  readTime: 7,
  sourceRef:
    "First Aid 2026, Part 1 pp. 79 (sorbitol pathway: aldose reductase, sorbitol dehydrogenase, tissue distribution, osmotic damage in diabetes; galactitol note)",
  tags: [
    "sorbitol",
    "polyol pathway",
    "aldose reductase",
    "sorbitol dehydrogenase",
    "NADPH",
    "fructose",
    "LARKS",
    "lens",
    "retina",
    "kidney",
    "Schwann cells",
    "cataracts",
    "retinopathy",
    "peripheral neuropathy",
    "diabetes",
    "hyperglycemia",
    "osmotic damage",
    "galactitol",
  ],
  core: {
    what: "An alternative method of trapping glucose in the cell is to convert it to its alcohol counterpart, sorbitol, via aldose reductase. Some tissues then convert sorbitol to fructose using sorbitol dehydrogenase; tissues with an insufficient amount or activity of this enzyme are at risk of intracellular sorbitol accumulation, causing osmotic damage (eg, cataracts, retinopathy, and peripheral neuropathy seen with chronic hyperglycemia in diabetes). Liver, ovaries, and seminal vesicles have both enzymes (they lose sorbitol). The lens has primarily aldose reductase; retina, kidneys, and Schwann cells have only aldose reductase (LARKS). High blood levels of galactose also result in conversion to the osmotically active galactitol via aldose reductase.",
    why: "This two-enzyme micro-pathway explains three classic diabetic complications with one mechanism — osmosis — and previews the galactose-cataract story from the galactosemias. It is a favorite mechanism question because the tissue list (LARKS) maps exactly onto the complication list (cataract, retinopathy, neuropathy).",
    keyIdea: "The polyol route is a one-way street with two possible exits. Aldose reductase (using NADPH) always lets glucose in as sorbitol; whether sorbitol leaves depends on the tissue. Liver, ovaries, and seminal vesicles carry both enzymes, so sorbitol passes through to fructose and nothing accumulates. LARKS tissues (Lens primarily, Retina, Kidneys, Schwann cells) carry only aldose reductase — no exit — so in chronic hyperglycemia the sorbitol piles up intracellularly, drags water in osmotically, and the three diabetic end-organ damages follow: lens (cataracts), retina (retinopathy), peripheral nerves (neuropathy). Same enzyme, different substrate: aldose reductase also converts galactose to galactitol — the osmotic molecule behind the infantile cataracts of the galactosemias.",
  },
  mechanisms: [
    {
      id: "polyol-osmotic-trap",
      title: "The polyol trap — no exit means osmotic damage",
      context: "Chronic hyperglycemia (diabetes) in LARKS tissues",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Chronic hyperglycemia floods cells with glucose",
            sublabel: "Input — the alternative trapping method activates.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Aldose reductase (NADPH) reduces glucose → sorbitol",
            sublabel: "Process — glucose is now trapped as its alcohol.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Liver, ovaries, seminal vesicles: sorbitol dehydrogenase (NAD+) → fructose — sorbitol leaves, no accumulation",
            sublabel: "Output — the two-enzyme tissues lose sorbitol.",
            variant: "output",
          },
          {
            id: "x1",
            label: "LARKS tissues (lens primarily; retina, kidneys, Schwann cells) lack sorbitol dehydrogenase → intracellular sorbitol accumulation → osmotic damage",
            sublabel: "Inhibitor — cataracts, retinopathy, peripheral neuropathy of chronic hyperglycemia.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "glucose + NADPH" },
          { from: "s1", to: "o1", label: "sorbitol → fructose (where SDH exists)" },
          { from: "x1", to: "s1", type: "inhibit", label: "no SDH exit" },
        ],
        caption:
          "One enzyme pair decides everything. Aldose reductase turns glucose into membrane-impermeable sorbitol — a trapping device that works even where hexokinase is saturated. If sorbitol dehydrogenase is present (liver, ovaries, seminal vesicles), sorbitol continues to fructose and the cell stays clean; if it is absent or insufficient (the lens primarily; retina, kidneys, Schwann cells — LARKS), sorbitol accumulates, the osmotic gradient pulls water in, and chronic hyperglycemia becomes cataracts, retinopathy, and peripheral neuropathy. The same aldose reductase also converts galactose to galactitol — which is why high blood galactose produces the identical osmotic cataract logic in the galactosemias.",
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "polyol-pathway-map",
      title: "The polyol pathway — glucose trapped as its alcohol",
      caption:
        "The source pathway: glucose → (aldose reductase, NADPH) → sorbitol → (sorbitol dehydrogenase, NAD+) → fructose, with the tissue panels — liver, ovaries, and seminal vesicles have both enzymes (they lose sorbitol); the lens has primarily aldose reductase, and retina, kidneys, and Schwann cells have only aldose reductase (LARKS), so chronic hyperglycemia causes intracellular sorbitol accumulation with osmotic damage: cataracts, retinopathy, and peripheral neuropathy.",
      notice:
        "Compare the two panels: the difference is never aldose reductase (everyone has it) — it is sorbitol dehydrogenase. Where the second enzyme exists, sorbitol flows through; where it does not (LARKS), the polyol route becomes a cul-de-sac and osmosis does the damage. Then read the bottom line: galactose rides the same aldose reductase to galactitol — one enzyme, two osmotic diseases (diabetic complications and galactosemia cataracts).",
    },
    {
      kind: "text",
      title: "The mechanism in one paragraph",
      body: [
        "An alternative method of trapping glucose in the cell is to convert it to its alcohol counterpart, sorbitol, via aldose reductase — a route that runs in parallel to phosphorylation-based trapping and uses NADPH as the reducing cofactor. Some tissues then convert sorbitol to fructose using sorbitol dehydrogenase (NAD+); tissues with an insufficient amount or activity of this enzyme are at risk of intracellular sorbitol accumulation, causing osmotic damage — the cataracts, retinopathy, and peripheral neuropathy seen with chronic hyperglycemia in diabetes.",
        "The tissue list is the exam list: liver, ovaries, and seminal vesicles have both enzymes (they lose sorbitol), while the lens has primarily aldose reductase and the retina, kidneys, and Schwann cells have only aldose reductase (LARKS) — exactly the organs that suffer the chronic diabetic complications. And the same aldose reductase acts on galactose: high blood galactose becomes osmotically active galactitol, which is why the galactosemias cloud the infant lens.",
      ],
    },
    {
      kind: "callout",
      variant: "memory",
      title: "LARKS — the tissues with only the entrance",
      body:
        "Lens, Retina, Kidneys, Schwann cells — only aldose reductase, no sorbitol dehydrogenase. They are the LARKS that cannot fly sorbitol out: chronic hyperglycemia traps them into cataracts (lens), retinopathy (retina), and peripheral neuropathy (Schwann cells) — with the kidneys sharing the osmotic burden.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A question asks why the lens, retina, kidney, and Schwann cells suffer in chronic hyperglycemia.",
        discriminator: "Only aldose reductase, no sorbitol dehydrogenase",
        concept: "LARKS — sorbitol accumulation",
        answer: "These tissues have only aldose reductase; glucose → sorbitol has no onward exit, so intracellular sorbitol accumulates and causes osmotic damage (cataracts, retinopathy, peripheral neuropathy).",
      },
      {
        stem: "A stem notes that the liver does not accumulate sorbitol despite hyperglycemia.",
        discriminator: "Both enzymes present",
        concept: "Liver, ovaries, seminal vesicles lose sorbitol",
        answer: "They have both aldose reductase and sorbitol dehydrogenase — sorbitol continues to fructose and does not accumulate.",
      },
      {
        stem: "A mechanism question asks which enzyme converts glucose to sorbitol (or galactose to galactitol) and with what cofactor.",
        discriminator: "Aldose reductase, NADPH",
        concept: "The polyol first step",
        answer: "Aldose reductase uses NADPH to reduce glucose to sorbitol (and galactose to galactitol); sorbitol dehydrogenase then uses NAD+ to convert sorbitol to fructose.",
      },
      {
        stem: "A galactosemia question asks which enzyme makes the cataract-causing molecule.",
        discriminator: "The aldose reductase link",
        concept: "Galactitol via aldose reductase",
        answer: "High blood galactose is converted to osmotically active galactitol via aldose reductase — the same enzyme as the sorbitol route.",
      },
    ],
    traps: [
      {
        a: "Sorbitol dehydrogenase is everywhere",
        b: "Sorbitol dehydrogenase is tissue-limited",
        whyConfused: "The pathway is usually drawn as a universal two-step.",
        keyDifference: "Liver, ovaries, and seminal vesicles have both enzymes; LARKS tissues (lens primarily; retina, kidneys, Schwann cells) have only aldose reductase.",
        clue: "The complication named in the stem tells you which tissue — and therefore which enzymes.",
      },
      {
        a: "Sorbitol damage is oxidative",
        b: "Sorbitol damage is osmotic",
        whyConfused: "Diabetic complications have many mechanisms.",
        keyDifference: "Intracellular sorbitol accumulation causes osmotic damage — water follows the alcohol into the cell.",
        clue: "'Osmotically active' is the source's own phrase.",
      },
      {
        a: "Aldose reductase uses NAD+",
        b: "Aldose reductase uses NADPH",
        whyConfused: "The two polyol enzymes split the cofactors neatly.",
        keyDifference: "Aldose reductase reduces with NADPH; sorbitol dehydrogenase oxidizes with NAD+ — a redox pair mirroring the pathway's two steps.",
        clue: "Cofactor-matching questions on the polyol route.",
      },
    ],
    pivots: [
      {
        lookAlike: "Diabetic cataracts vs galactosemia cataracts",
        differentiator: "The substrate feeding aldose reductase",
        correctPath:
          "Chronic hyperglycemia → glucose → sorbitol (lens) → diabetic cataracts; high blood galactose → galactitol (lens) → infantile cataracts of the galactosemias. Same enzyme, different sugar, different age of presentation.",
      },
      {
        lookAlike: "Diabetic peripheral neuropathy mechanisms (osmotic vs glycation vs vascular)",
        differentiator: "The Schwann-cell enzyme list",
        correctPath:
          "Schwann cells have only aldose reductase — the polyol explanation (sorbitol osmosis) is the mechanism this page pins; glycation and microvascular disease operate in parallel but are separate stories.",
      },
    ],
    miniCase: {
      vignette:
        "A 62-year-old woman with 15 years of poorly controlled type 2 diabetes (hemoglobin A1c 9.8%) reports new blurring of vision in both eyes, patchy vision loss on fundoscopic screening, and a burning sensation in her feet with reduced vibration sense. Slit-lamp exam early in the workup finds bilateral lens opacities; the retinal exam shows microaneurysms and dot-blot hemorrhages; monofilament testing is abnormal symmetrically.",
      question:
        "Which enzymatic mechanism most directly links her chronic hyperglycemia to the lens and Schwann-cell findings?",
      options: [
        {
          label: "A",
          text: "Aldose reductase converts intracellular glucose to osmotically active sorbitol in tissues lacking sorbitol dehydrogenase",
          correct: true,
          why: "Correct — the lens (primarily aldose reductase) and Schwann cells (only aldose reductase — LARKS) cannot convert sorbitol onward to fructose, so chronic hyperglycemia causes intracellular sorbitol accumulation and osmotic damage: cataracts and peripheral neuropathy.",
        },
        {
          label: "B",
          text: "Sorbitol dehydrogenase converts glucose to fructose, which accumulates",
          why: "Reverses the pathway order — sorbitol dehydrogenase acts on sorbitol (to fructose), not on glucose, and it is the enzyme LARKS tissues lack.",
        },
        {
          label: "C",
          text: "Hexokinase phosphorylates glucose to glucose-6-phosphate, which is osmotically trapped",
          why: "Phosphorylation trapping exists but is not the lens/nerve mechanism here — the polyol route is the sorbitol answer.",
        },
        {
          label: "D",
          text: "Aldose reductase converts glucose to galactitol",
          why: "Substrate swap — galactitol comes from galactose; glucose gives sorbitol (though via the same enzyme, which is the tempting part).",
        },
        {
          label: "E",
          text: "Protein kinase C activation by diacylglycerol",
          why: "A real diabetic-complication pathway, but it explains vascular and cellular signaling changes — not the osmotic lens and Schwann-cell damage this stem targets.",
        },
      ],
      reasoning:
        "The triad — lens, retina, nerve — in chronic hyperglycemia is the LARKS map. Each tissue has aldose reductase (entrance) but little or no sorbitol dehydrogenase (exit), so glucose becomes sorbitol and stays: osmotic damage, cataract first and neuropathy in parallel.",
    },
  },
  mnemonics: [
    {
      code: "“LARKS can’t fly sorbitol out”",
      meaning: "Lens, Retina, Kidneys, Schwann cells — only aldose reductase, no sorbitol dehydrogenase — so sorbitol accumulates in chronic hyperglycemia (the source's own tissue list and acronym).",
      memorizes: "Which tissues lack the second polyol enzyme",
      whenToUse: "Any diabetic-complication mechanism stem.",
      clinical: "Cataracts (lens), retinopathy (retina), peripheral neuropathy (Schwann cells).",
    },
    {
      code: "“LOSE tissues Lose sorbitol: Liver, Ovaries, Seminal vesicles — Both enzymes”",
      meaning: "Liver, ovaries, and seminal vesicles have both aldose reductase and sorbitol dehydrogenase — sorbitol passes through to fructose and never accumulates.",
      memorizes: "The two-enzyme tissue list",
      whenToUse: "Contrast questions on why these tissues escape the polyol damage.",
      clinical: "The seminal vesicles even use the route physiologically — fructose for sperm motility.",
    },
  ],
  rapidReview: {
    s30: [
      "Glucose → (aldose reductase, NADPH) → sorbitol → (sorbitol dehydrogenase, NAD+) → fructose",
      "LARKS = only aldose reductase → sorbitol accumulation",
      "Sorbitol damage is osmotic (cataracts, retinopathy, neuropathy)",
    ],
    m3: [
      "Liver, ovaries, seminal vesicles have both enzymes — they lose sorbitol",
      "Lens has primarily aldose reductase; retina, kidneys, Schwann cells only aldose reductase",
      "Aldose reductase also makes galactitol from galactose (galactosemia cataracts)",
    ],
    m10: [
      "The polyol route is an alternative method of trapping glucose in the cell",
      "Tissues with insufficient sorbitol dehydrogenase are at risk in chronic hyperglycemia",
      "Cofactor split: aldose reductase NADPH (reduction), sorbitol dehydrogenase NAD+ (oxidation)",
    ],
  },
  recall: [
    {
      q: "Write out the polyol pathway with enzymes and cofactors.",
      a: "Glucose → (aldose reductase, NADPH) → sorbitol → (sorbitol dehydrogenase, NAD+) → fructose.",
    },
    {
      q: "What does LARKS stand for, and what do those tissues lack?",
      a: "Lens, Retina, Kidneys, Schwann cells — they have only aldose reductase (the lens primarily), lacking sufficient sorbitol dehydrogenase to clear sorbitol.",
    },
    {
      q: "Which tissues have both polyol enzymes, and what does that mean for sorbitol?",
      a: "Liver, ovaries, and seminal vesicles have both aldose reductase and sorbitol dehydrogenase — they lose sorbitol (it continues to fructose).",
    },
    {
      q: "Name the three osmotic complications of sorbitol accumulation in diabetes.",
      a: "Cataracts (lens), retinopathy (retina), and peripheral neuropathy (Schwann cells) — seen with chronic hyperglycemia.",
    },
    {
      q: "How does aldose reductase connect this page to the galactosemias?",
      a: "High blood levels of galactose are also converted to the osmotically active galactitol via aldose reductase — the same enzyme, explaining galactosemia's infantile cataracts.",
    },
  ],
  related: [
    {
      title: "Disorders of Fructose & Galactose Metabolism",
      topicId: "fructose-galactose-disorders",
      note: "Sorbitol's product fructose is the same sugar those diseases mishandle — and the galactitol cataracts come from the very aldose reductase this page introduces.",
    },
    {
      title: "Glycolysis Regulation",
      topicId: "glycolysis-regulation",
      note: "The polyol route as the alternative glucose-trapping method — phosphorylation via hexokinase versus reduction via aldose reductase.",
    },
    {
      title: "Pentose Phosphate Pathway",
      topicId: "pentose-phosphate-pathway",
      note: "Aldose reductase's NADPH comes from the HMP shunt — the RBC's antioxidant factory also feeds the polyol route's first step.",
    },
    {
      title: "Vitamin D, Calcium & Bone",
      topicId: "vitamin-d",
      note: "The diabetic complications framework — lens, retina, kidney, nerve — reappears wherever chronic hyperglycemia's end-organ damage is tested.",
    },
  ],
  crossLinks: [
    {
      subject: "Endocrinology",
      connection: "Chronic hyperglycemia in diabetes — the substrate pressure that turns the polyol route into cataracts, retinopathy, and peripheral neuropathy.",
    },
    {
      subject: "Ophthalmology",
      connection: "Diabetic cataract and retinopathy — the lens and retina are LARKS tissues whose sorbitol has no exit.",
    },
    {
      subject: "Neurology",
      connection: "Diabetic peripheral neuropathy — Schwann cells carry only aldose reductase, so sorbitol-driven osmotic injury accumulates in the nerves.",
    },
  ],
};
