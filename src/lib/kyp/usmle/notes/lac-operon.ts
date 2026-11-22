import type { KypUsMLENote } from "../types";

// Biochemistry — Molecular (M2).
// Source: First Aid 2026, Part 1 pdf 61 / book 39 (Lac operon)

export const lacOperon: KypUsMLENote = {
  id: "lac-operon",
  title: "The Lac Operon",
  subtitle:
    "E coli's dining algorithm: glucose first, lactose only when necessary. Two molecular switches — CAP-cAMP and the repressor — read the environment and output one of four transcription states.",
  subject: "Biochemistry",
  system: "Section II · High-Yield General Principles — Molecular",
  pilotCategory: "Molecular biology — prokaryotic gene regulation",
  difficulty: 3,
  readTime: 11,
  sourceRef: "First Aid 2026, Part 1 pp. 39 (lac operon)",
  tags: [
    "lac operon",
    "CAP",
    "cAMP",
    "repressor",
    "operator",
    "allolactose",
    "catabolite activator protein",
    "gene regulation",
  ],
  core: {
    what: "The lac operon is E coli's classic example of a genetic response to an environmental change: a DNA segment carrying lacI (the repressor gene) plus a control region (CAP site, promoter, operator) and three metabolic genes (lacZ, lacY, lacA) that let the bacterium eat lactose. Transcription switches on only when glucose is scarce (adenylate cyclase makes cAMP, which activates CAP) AND lactose is present (allolactose inactivates the repressor).",
    why: "It is the exam's template for inducible gene regulation — the one system where you must reason with two inputs and a truth table rather than recall a single fact. Mutation-prediction questions (operator-constitutive, lacI-loss, CAP-site loss, promoter deletion) and the glucose×lactose four-state grid are recurring Step 1 molecular items.",
    keyIdea: "Two independent checks in series: CAP asks “is glucose low?” (accelerator available) and the repressor asks “is lactose present?” (brake released). Full transcription requires BOTH answers yes — low glucose AND lactose available. Missing either one, the operon is off or barely idling.",
  },
  mechanisms: [
    {
      id: "cap-camp-cascade",
      title: "Low glucose → cAMP → CAP — recruiting the accelerator",
      context: "The glucose sensor arm of the operon",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Glucose falls in the medium",
            sublabel: "Molecular — glucose is the preferred metabolic substrate in E coli.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Adenylate cyclase activity rises",
            sublabel: "Molecular — low glucose releases adenylate cyclase from inhibition; high glucose suppresses it.",
            variant: "process",
          },
          {
            id: "s2",
            label: "More cAMP is generated from ATP",
            sublabel: "Molecular — the second-messenger pool expands in proportion to glucose scarcity.",
            variant: "process",
          },
          {
            id: "s3",
            label: "cAMP binds CAP → CAP binds the CAP site",
            sublabel: "Molecular — catabolite activator protein (CAP) bound to cAMP sits upstream of the promoter and helps RNA polymerase load.",
            variant: "process",
          },
          {
            id: "o1",
            label: "↑ transcription — the accelerator is in place",
            sublabel: "Output — but this alone is NOT enough: if lactose is absent, the repressor still blocks the operator.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "glucose ⊣ cyclase released" },
          { from: "s1", to: "s2", label: "ATP → cAMP" },
          { from: "s2", to: "s3", label: "cAMP + CAP" },
          { from: "s3", to: "o1", label: "binds CAP site, induces transcription" },
        ],
        caption:
          "The glucose arm is a positive-feedback sensor: scarce sugar → high cAMP → CAP bound → polymerase recruited. High glucose keeps cAMP low and CAP off the DNA — catabolite repression by any other name.",
      },
    },
    {
      id: "allolactose-repressor-switch",
      title: "Lactose present → allolactose removes the brake",
      context: "The lactose sensor arm of the operon",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Lactose enters the cell (tiny basal permease activity lets it in)",
            sublabel: "Molecular — lacY permease is made at basal levels even when the operon is off — enough to sample the environment.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Allolactose (the inducer) forms from lactose",
            sublabel: "Molecular — allolactose is the effector molecule, not lactose itself.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Allolactose binds and inactivates the repressor protein",
            sublabel: "Molecular — the repressor unbinds from the operator site; lacI's product can no longer block RNA polymerase.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Operator free — polymerase may pass",
            sublabel: "Output — with the brake released, transcription depends entirely on the CAP arm's state.",
            variant: "output",
          },
          {
            id: "o2",
            label: "High glucose + lactose available → only basal expression",
            sublabel: "Output — brake off but no accelerator: very low (basal) transcription, the fourth state.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "β-gal side reaction" },
          { from: "s1", to: "s2", label: "inducer binds repressor", type: "inhibit" },
          { from: "s2", to: "o1", label: "operator cleared" },
          { from: "o1", to: "o2", label: "if cAMP is low" },
        ],
        caption:
          "The lactose arm is a negative-control release: inducer inactivates the repressor so the operator opens. Induction means removing a brake, not adding an accelerator — that asymmetry is what the four states test.",
      },
    },
    {
      id: "four-state-logic",
      title: "The four states — two switches, one output",
      context: "Any glucose × lactose combination the exam can set up",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Read the two inputs: glucose level × lactose availability",
            sublabel: "Molecular — CAP state follows glucose; repressor state follows lactose.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Low glucose + lactose available",
            sublabel: "State — CAP–cAMP bound AND repressor inactivated.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Lac genes STRONGLY expressed",
            sublabel: "Output — the only full-on combination; full lactose metabolism switches on.",
            variant: "output",
          },
          {
            id: "s2",
            label: "High glucose + lactose unavailable",
            sublabel: "State — no CAP recruitment AND repressor bound.",
            variant: "process",
          },
          {
            id: "o2",
            label: "Lac genes NOT expressed",
            sublabel: "Output — both switches off.",
            variant: "output",
          },
          {
            id: "s3",
            label: "Low glucose + lactose unavailable · High glucose + lactose available",
            sublabel: "State — exactly one switch on in each: CAP bound but repressor bound / repressor off but no CAP.",
            variant: "process",
          },
          {
            id: "o3",
            label: "NOT expressed · very low (basal) expression",
            sublabel: "Output — the repressor dominates CAP: block beats accelerator. Unstimulated but unblocked = basal trickle.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1" },
          { from: "s1", to: "o1", label: "both ON" },
          { from: "trigger", to: "s2" },
          { from: "s2", to: "o2", label: "both OFF" },
          { from: "trigger", to: "s3", label: "one ON" },
          { from: "s3", to: "o3" },
        ],
        caption:
          "Four states, one rule: strong expression needs both the accelerator (CAP–cAMP) and an open road (repressor off). A bound repressor beats CAP every time; an open road without the accelerator idles at basal.",
      },
    },
  ],
  blocks: [
    {
      kind: "text",
      title: "Why E coli keeps two switches instead of one",
      body: [
        "Glucose is the preferred metabolic substrate in E coli — if it is available, the cell has no interest in installing lactose-digestion machinery. The lac operon is activated to switch to lactose metabolism only when glucose is absent and lactose is available. That logic requires two independent measurements, hence two sensors.",
        "The glucose measurement is positive: low glucose → ↑ adenylate cyclase activity → ↑ generation of cAMP from ATP → activation of CAP → ↑ transcription. The lactose measurement is negative (a release): high lactose → allolactose unbinds the repressor protein from the operator → ↑ transcription. One arm adds an activator; the other removes a repressor.",
        "Together they implement a biological AND gate with an important asymmetry — the repressor, when bound, wins over CAP. That is why low-glucose-without-lactose stays silent even with CAP sitting on the DNA: a blocked promoter cannot be rescued by an activator upstream.",
      ],
    },
    {
      kind: "visual",
      visualId: "lac-operon-states",
      title: "Operon anatomy + both cascades + the four states",
      caption:
        "The operon strip (lacI, CAP site, promoter, operator, lacZ-lacY-lacA with RNA polymerase docked), the two regulatory cascades — glucose ⊣ adenylate cyclase, ATP → cAMP → CAP binding the CAP site; allolactose inactivating the repressor — and the four-state truth table with the expression outcome of each glucose × lactose combination.",
      notice:
        "Run the truth table twice: first ask “is the accelerator present?” (low glucose → CAP–cAMP), then ask “is the road open?” (lactose → repressor off). Strong expression is the single state where both answers are yes. Note that a bound repressor dominates — CAP cannot overcome it.",
    },
    {
      kind: "table",
      title: "Anatomy of the operon — every element, one line",
      intro: "The exam names these elements in mutation questions; know what each contributes.",
      columns: ["Element", "What it is", "Mutation consequence"],
      rows: [
        ["lacI", "Gene (outside but linked) for the repressor protein", "Loss-of-function → repressor cannot bind → constitutive (always-on) expression"],
        ["CAP site", "Upstream DNA site for the CAP–cAMP complex", "Loss → no strong activation; only basal expression even with lactose"],
        ["Promoter", "RNA polymerase binding site", "Loss → no transcription at all regardless of conditions"],
        ["Operator", "Repressor binding site between promoter and genes", "Loss or repressor failure → cannot be blocked → constitutive expression"],
        ["lacZ / lacY / lacA", "β-galactosidase / permease / transacetylase", "Single-gene loss → the corresponding enzymatic step fails"],
      ],
      caption:
        "“Constitutive” is the vocabulary the exam rewards: expression that no longer responds to the environment — produced by lacI loss or operator mutation.",
    },
    {
      kind: "callout",
      variant: "exam",
      title: "How the exam asks this page",
      body: "Three recurring shapes: (1) the state grid — a table of glucose/lactose conditions asks which state shows maximal or basal lacZ expression. (2) mutation prediction — a lacI− or operator-mutant strain is described as making β-galactosidase regardless of lactose → constitutive. (3) mechanism completion — “low glucose increases which second messenger in E coli?” → cAMP (via adenylate cyclase), activating CAP. Distractors typically swap cAMP for ATP, CAP for the repressor, or allolactose for lactose itself.",
    },
    {
      kind: "callout",
      variant: "why",
      title: "Why the repressor dominates CAP",
      body: "The operator sits between the promoter and the structural genes — a repressor bound there is a physical roadblock to RNA polymerase, not a regulatory opinion. CAP, by contrast, works upstream by helping polymerase load; an activator cannot push a polymerase through a parked protein. Block beats accelerator: that single geometric fact decides the two “mixed” states of the truth table.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "E coli is grown in medium containing both glucose and lactose; β-galactosidase activity is measured and found to be minimal.",
        discriminator: "High glucose → low cAMP → no CAP; the operon idles even though lactose is present",
        concept: "Catabolite repression — preferred-substrate logic",
        answer: "Very low (basal) lac gene expression until glucose is exhausted",
      },
      {
        stem: "A bacterial strain carries a loss-of-function mutation in lacI; β-galactosidase is produced whether or not lactose is present.",
        discriminator: "Repressor absent → operator never blocked → expression independent of inducer",
        concept: "Constitutive expression from trans-regulator loss",
        answer: "Constitutive (always-on) lac operon expression — still modulated by CAP when glucose is low",
      },
      {
        stem: "A molecular experiment deletes the CAP site of the lac operon; the strain is then grown in lactose-only medium.",
        discriminator: "Repressor is off (lactose present) but the activator cannot dock",
        concept: "Activator-site loss — basal but not strong expression",
        answer: "Only basal expression: no CAP–cAMP recruitment, so transcription is weak despite the open operator",
      },
      {
        stem: "A question describes glucose depletion in E coli with lactose available and asks which molecule rises to activate transcription.",
        discriminator: "Second messenger of the glucose-sensing arm",
        concept: "cAMP as the signal connecting glucose scarcity to gene activation",
        answer: "cAMP rises (adenylate cyclase active) and binds CAP, which binds the CAP site → ↑ transcription",
      },
      {
        stem: "A strain with a mutated operator that cannot bind the repressor is compared with wild type in glucose-only medium.",
        discriminator: "Operator loss removes the roadblock, but glucose keeps CAP off",
        concept: "Two-switch independence — operator mutation does not create the accelerator",
        answer: "Basal-to-low expression: repressor cannot bind, but with no CAP–cAMP (high glucose), strong activation still fails",
      },
    ],
    traps: [
      {
        a: "cAMP",
        b: "ATP",
        whyConfused: "Both named in the cascade (cAMP is made from ATP).",
        keyDifference: "ATP is the substrate; cAMP is the second messenger that binds CAP. The exam asks for the molecule that ACTIVATES transcription — cAMP.",
        clue: "“Generated by adenylate cyclase” or “binds CAP” → cAMP. “Energy source” or “precursor” → ATP.",
      },
      {
        a: "Allolactose",
        b: "Lactose",
        whyConfused: "Stems say “lactose induces the operon,” but the effector molecule is a metabolite of lactose.",
        keyDifference: "Allolactose is the inducer that binds and inactivates the repressor; lactose is merely its precursor and the operon's substrate.",
        clue: "“Directly binds the repressor” → allolactose. “Present in the medium / metabolized by β-galactosidase” → lactose.",
      },
      {
        a: "Operator mutation",
        b: "lacI mutation",
        whyConfused: "Both produce constitutive expression — the phenotype is identical.",
        keyDifference: "Operator = cis-acting DNA site (only the genes physically linked are affected); lacI = trans-acting protein gene (its product can regulate any operon copy in the cell).",
        clue: "A merodiploid/complementation question separates them: adding wild-type lacI rescues a lacI− strain but NOT an operator mutant.",
      },
      {
        a: "CAP loss",
        b: "Promoter loss",
        whyConfused: "Both reduce transcription.",
        keyDifference: "CAP-site loss leaves basal (inducer-responsive) transcription; promoter loss abolishes transcription entirely — polymerase has nowhere to bind.",
        clue: "“Greatly reduced but still inducible” → CAP site. “Zero expression under all conditions” → promoter.",
      },
    ],
    pivots: [
      {
        lookAlike: "Any four-state table question with glucose ± / lactose ±",
        differentiator: "Evaluate the two switches separately, then combine: accelerator (CAP–cAMP) and roadblock (repressor)",
        correctPath: "Both favorable → strong. Both unfavorable → off. Repressor bound only → off (block dominates). Inducer only → basal.",
      },
      {
        lookAlike: "A constitutive-expression strain described without naming the lesion",
        differentiator: "cis (DNA site) vs trans (diffusible protein) logic",
        correctPath: "Operator (cis) or lacI (trans) both fit the phenotype; a complementation test with a second lacI copy discriminates them.",
      },
    ],
    miniCase: {
      vignette:
        "A molecular genetics exercise uses two E coli strains. Strain 1 has a nonfunctional lacI gene but a normal operator. Strain 2 has a normal lacI gene but an operator sequence that cannot bind any repressor. Both strains are placed in medium containing glucose and lactose, and β-galactosidase activity is measured. A copy of the wild-type lac operon on a plasmid is then introduced into each strain, and measurements are repeated.",
      question: "Which strain shows constitutive β-galactosidase expression that is corrected by introducing the wild-type lac operon plasmid?",
      options: [
        {
          label: "A",
          correct: true,
          text: "Strain 1 (lacI−) — the plasmid supplies functional lacI, whose trans-acting repressor can bind both operators",
          why: "Correct. lacI encodes a diffusible protein, so a wild-type lacI anywhere in the cell restores repression over both operon copies — the classic trans-complementation result.",
        },
        {
          label: "B",
          text: "Strain 2 (operator mutant) — corrected by the plasmid",
          why: "Tempting by symmetry, but the operator is cis-acting DNA: the plasmid's operator cannot repair the chromosomal operator's binding site. The mutant operon stays constitutive forever.",
        },
        {
          label: "C",
          text: "Both strains are corrected equally by the plasmid",
          why: "Ignores the cis/trans distinction the question is built to test — only the protein-coding defect is rescuable in trans.",
        },
        {
          label: "D",
          text: "Neither strain — constitutive mutations are never correctable by extra DNA",
          why: "Overstates the principle: trans-acting regulator defects ARE correctable; it is cis-acting site mutations that are not.",
        },
        {
          label: "E",
          text: "Neither strain expresses β-galactosidase in glucose-containing medium",
          why: "Misapplies catabolite repression: constitutive mutations express regardless of lactose, and glucose modulates only the CAP arm — expression remains constitutive (though not maximally activated).",
        },
      ],
      reasoning:
        "The question hinges on one distinction: lacI is a trans-acting gene whose protein product diffuses to any operator, while the operator is a cis-acting site that controls only the genes physically downstream of it. Strain 1's defect is protein-side and rescuable by a plasmid-borne lacI+; strain 2's defect is DNA-side and permanent. First Aid's operon diagram labels both elements — the mutation-prediction layer on top of it is where Step 1 takes this page.",
    },
  },
  mnemonics: [
    {
      code: "“Low sugar, high cAMP — CAP accelerates; Lactose lifts the brake”",
      meaning: "Two clauses, two switches: glucose scarcity raises cAMP so CAP can accelerate; lactose (as allolactose) lifts the repressor brake.",
      memorizes: "Which input controls which regulatory arm",
      whenToUse: "Any four-state or mechanism-completion question about the lac operon.",
      clinical: "The same CAP–cAMP logic reappears in eukaryotic cAMP signaling contexts — keep the operon version prokaryotic.",
    },
    {
      code: "“Block beats accelerator”",
      meaning: "A bound repressor (operator block) overpowers CAP recruitment; removal of the block without the accelerator gives only basal.",
      memorizes: "The two mixed states of the truth table",
      whenToUse: "Choosing between “not expressed” and “basal” in state questions.",
      clinical: "Explains why low glucose alone (CAP bound) still yields silence when lactose is absent.",
    },
    {
      code: "“Z cleaves, Y lets in, A acetylates”",
      meaning: "lacZ = β-galactosidase (cleaves lactose), lacY = permease (lets lactose in), lacA = transacetylase (acetylates).",
      memorizes: "The three structural genes in operon order",
      whenToUse: "Single-gene mutation questions and β-galactosidase assay stems.",
      clinical: "β-galactosidase activity is the standard readout in operon experiments — lacZ is the reporter gene of molecular biology.",
    },
  ],
  rapidReview: {
    s30: [
      "Lac operon = genetic response to environmental change: glucose absent + lactose available → ON.",
      "Low glucose → ↑ adenylate cyclase → ↑ cAMP → CAP binds CAP site → ↑ transcription.",
      "High lactose → allolactose inactivates the repressor → operator free → ↑ transcription.",
      "Strong expression ONLY with low glucose AND lactose (both switches favorable).",
      "lacI loss or operator mutation → constitutive expression.",
    ],
    m3: [
      "Repressor (lacI product) binds the operator and blocks transcription — block beats CAP.",
      "CAP–cAMP binds upstream of the promoter and helps RNA polymerase load.",
      "High glucose + lactose → very low (basal) expression — brake off, accelerator missing.",
      "Low glucose + no lactose → not expressed — CAP bound but repressor still blocking.",
      "Operator = cis-acting; lacI = trans-acting — the complementation distinction.",
      "lacZ β-galactosidase, lacY permease, lacA transacetylase.",
    ],
    m10: [
      "Allolactose (not lactose itself) is the inducer that inactivates the repressor.",
      "Promoter mutation kills ALL transcription — polymerase has no binding site.",
      "CAP-site mutation leaves basal inducibility — activation is lost, block is not.",
      "cAMP is made from ATP by adenylate cyclase — the “second messenger” of glucose sensing.",
      "Merodiploid logic: wild-type lacI rescues lacI− in trans; nothing rescues an operator mutant in cis.",
      "Basal permease expression is what lets lactose enter to sample the environment in the first place.",
    ],
  },
  recall: [
    {
      q: "Name the two environmental conditions required for strong lac operon expression.",
      a: "Low (absent) glucose AND lactose available.",
    },
    {
      q: "What happens to cAMP when glucose is low, and what protein does it activate?",
      a: "Adenylate cyclase activity rises → cAMP is generated from ATP → cAMP binds and activates CAP, which binds the CAP site to induce transcription.",
    },
    {
      q: "Which molecule directly inactivates the repressor, and what is it derived from?",
      a: "Allolactose — the inducer, derived from lactose.",
    },
    {
      q: "In high glucose with lactose available, what is the expression state and why?",
      a: "Very low (basal) expression — the repressor is off, but low cAMP means no CAP activation.",
    },
    {
      q: "Which two mutations produce constitutive expression, and how do they differ in complementation tests?",
      a: "lacI loss (trans-acting protein — rescuable by a wild-type lacI copy) and operator mutation (cis-acting site — not rescuable by any added copy).",
    },
    {
      q: "What are the products of lacZ, lacY, and lacA?",
      a: "lacZ → β-galactosidase; lacY → permease; lacA → transacetylase.",
    },
    {
      q: "In low glucose with no lactose, why is the operon off despite CAP being bound?",
      a: "The repressor still occupies the operator — a physical block between promoter and genes; the block dominates over the upstream activator.",
    },
    {
      q: "What is the effect of deleting the promoter versus deleting the CAP site?",
      a: "Promoter deletion → no transcription at all (polymerase cannot bind); CAP-site deletion → loss of strong activation, basal expression remains.",
    },
  ],
  related: [
    {
      title: "Eukaryotic Gene Organization & Regulation",
      note: "The eukaryotic counterpart on the facing page — promoters, enhancers, and silencers solve the same regulation problem with different architecture.",
      topicId: "eukaryotic-gene-organization",
    },
    {
      title: "RNA Processing & Splicing",
      note: "Once transcription starts, the eukaryotic transcript still needs capping, splicing, and polyadenylation — regulation does not end at the promoter.",
      topicId: "rna-processing",
    },
    {
      title: "Chromatin Organization",
      note: "Eukaryotic regulation adds an entire layer above the operon — chromatin state decides promoter accessibility before any activator arrives.",
      topicId: "chromatin-organization",
    },
    {
      title: "Bacterial genetics and antimicrobial mechanisms",
      note: "Operon logic underlies bacterial adaptation assays and appears alongside rifamycins' action on prokaryotic transcription in pharmacology.",
    },
  ],
  crossLinks: [
    {
      subject: "Microbiology",
      connection: "Operon-based adaptation is standard bacterial-genetics material — constitutive mutants, complementation, and gene-regulation experiments.",
    },
    {
      subject: "Pharmacology",
      connection: "The cAMP second-messenger cascade reappears throughout autonomic pharmacology — same messenger, different machinery.",
    },
    {
      subject: "Biochemistry — gene expression",
      connection: "CAP, promoters, and operators anchor the vocabulary used across the eukaryotic gene-organization page.",
    },
  ],
};
