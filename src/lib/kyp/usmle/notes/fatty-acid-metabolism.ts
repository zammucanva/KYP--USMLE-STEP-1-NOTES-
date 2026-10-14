import type { KypUsMLENote } from "../types";

// Biochemistry — Metabolism (E-batch, book order 14).
// Source: First Aid 2026, Part 1 pdf 109 / book 87
// (fatty acid metabolism: synthesis, degradation, carnitine deficiency, MCAD)

export const fattyAcidMetabolism: KypUsMLENote = {
  id: "fatty-acid-metabolism",
  title: "Fatty Acid Metabolism",
  subtitle:
    "The mirror pathways of lipid economy — fed insulin driving acetyl-CoA carboxylase to make malonyl-CoA and palmitate (a 16-carbon fatty acid) from citrate shuttled out of the mitochondrion, fasting driving carnitine-dependent β-oxidation back into the matrix — joined by the safety interlock malonyl-CoA ⊟ CPT-I (synthesis brakes oxidation), with the two hypoketotic blocks: systemic 1° carnitine deficiency and medium-chain acyl-CoA dehydrogenase deficiency.",
  subject: "Biochemistry",
  system: "Section II · High-Yield General Principles — Metabolism",
  pilotCategory: "Metabolism — fatty acid synthesis, β-oxidation, carnitine shuttle, MCAD",
  difficulty: 3,
  readTime: 12,
  sourceRef:
    "First Aid 2026, Part 1 pp. 87 (fatty acid metabolism: synthesis, degradation, systemic 1° carnitine deficiency, medium-chain acyl-CoA dehydrogenase deficiency)",
  tags: [
    "fatty acid synthesis",
    "palmitate",
    "malonyl-CoA",
    "acetyl-CoA carboxylase",
    "biotin",
    "citrate shuttle",
    "ATP citrate lyase",
    "fatty acid oxidation",
    "beta-oxidation",
    "acyl-CoA dehydrogenases",
    "carnitine shuttle",
    "carnitine palmitoyl transferase I",
    "fatty acyl-CoA synthetase",
    "systemic carnitine deficiency",
    "hypoketotic hypoglycemia",
    "dilated cardiomyopathy",
    "medium-chain acyl-CoA dehydrogenase deficiency",
    "MCAD",
    "dicarboxylic acids",
    "fatty acyl carnitines",
    "hyperammonemia",
    "avoid fasting",
    "lactating mammary glands",
    "adipose tissue",
  ],
  core: {
    what: "Fatty acid synthesis requires transport of citrate from mitochondria to cytosol and predominantly occurs in liver, lactating mammary glands, and adipose tissue: citrate crosses the mitochondrial membranes through the citrate shuttle, ATP citrate lyase regenerates cytosolic acetyl-CoA, and acetyl-CoA carboxylase (stimulated by insulin, inhibited by glucagon; CO2 with biotin) converts acetyl-CoA to malonyl-CoA, the committed step whose product builds palmitate, a 16-carbon fatty acid. Long-chain fatty acid degradation requires carnitine-dependent transport into the mitochondrial matrix: fatty acyl-CoA synthetase activates the fatty acid, carnitine palmitoyl transferase I loads it onto the carnitine shuttle across the mitochondrial membranes, and the matrix fatty acyl-CoA enters β-oxidation through the acyl-CoA dehydrogenases to yield acetyl-CoA for ketone bodies and the TCA cycle. Malonyl-CoA inhibits CPT-I, so synthesis brakes oxidation. Systemic 1° carnitine deficiency abolishes cellular uptake of carnitine — no transport of LCFAs into mitochondria, toxic cytosolic accumulation of long-chain fatty acids, weakness, hypotonia, hypoketotic hypoglycemia, and dilated cardiomyopathy. Medium-chain acyl-CoA dehydrogenase deficiency reduces the ability to break down fatty acids into acetyl-CoA — fatty acyl carnitines and dicarboxylic acids accumulate in the blood with hypoketotic hypoglycemia, vomiting, lethargy, seizures, coma, liver dysfunction, hyperammonemia, and possible sudden death in infants or children; treat by avoiding fasting.",
    why: "This is the metabolic chapter's clearest example of reciprocal hormone-regulated pathways sharing one metabolite hub: acetyl-CoA is either built into fat (fed, insulin ⊕ ACC) or burned from fat (fasted, carnitine shuttle), and the malonyl-CoA ⊟ CPT-I interlock makes the two directions mutually exclusive — the fed state cannot simultaneously make and burn fatty acids. The two deficiencies are the exam's hypoketotic hypoglycemia pair: both block the fasted state's fat-burning route, so fasting depletes glucose without the compensating ketones — carnitine deficiency blocks entry of long-chain fats at the shuttle (a transport problem), MCAD blocks the β-oxidation spiral itself (a degradation-enzyme problem with dicarboxylic acid byproducts and sudden-infant-death risk).",
    keyIdea: "Read the figure as a mirror: synthesis goes citrate → acetyl-CoA → malonyl-CoA → palmitate (upward from the matrix, out through the citrate shuttle, in the cytosol), degradation goes fatty acid + CoA → fatty acyl-CoA → carnitine shuttle → β-oxidation → acetyl-CoA (downward from the cytosol, in through the carnitine shuttle, in the matrix). The shuttles are the rate-limiting borders and they answer the two quiz questions — citrate out for synthesis ('Sytrate' = synthesis), carnitine in for carnage. When a fasted child becomes hypoglycemic WITHOUT ketosis, walk the degradation column for the break: no cellular carnitine uptake (systemic 1° carnitine deficiency — cardiomyopathy from cytosolic LCFA toxicity) or a stalled spiral (MCAD — dicarboxylic acids, hyperammonemia, sudden death, avoid fasting).",
  },
  mechanisms: [
    {
      id: "fed-synthesis-mirror",
      title: "The fed mirror — citrate out, malonyl-CoA up, palmitate built",
      context: "Insulin-driven fatty acid synthesis (liver, lactating mammary glands, adipose tissue)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Fed state: insulin ⊕ acetyl-CoA carboxylase (glucagon ⊟) — mitochondrial citrate rises and exits through the citrate shuttle",
            sublabel: "Input — the fed signal plus the exported carbon.",
            variant: "input",
          },
          {
            id: "s1",
            label: "ATP citrate lyase regenerates cytosolic acetyl-CoA; acetyl-CoA carboxylase (CO2, biotin) makes malonyl-CoA — the committed step",
            sublabel: "Process — the biotin-dependent carboxylation.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Malonyl-CoA → fatty acid synthesis → palmitate, a 16-carbon fatty acid",
            sublabel: "Process — the product of the pathway.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Malonyl-CoA ⊟ CPT-I: while synthesis runs, the degradation entry is locked",
            sublabel: "Output — the interlock: the fed state builds fat and cannot simultaneously burn it.",
            variant: "output",
          },
          {
            id: "x1",
            label: "Sites: liver, lactating mammary glands, adipose tissue; NADPH supply (see the HMP shunt) powers the reductive synthesis",
            sublabel: "Context — where and with what reducing power.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "citrate out" },
          { from: "s1", to: "s2", label: "malonyl-CoA" },
          { from: "s2", to: "o1", label: "palmitate + brake" },
          { from: "x1", to: "s2", label: "sites + NADPH" },
        ],
        caption:
          "Synthesis is an inside-out pathway: the carbon starts in the mitochondrial matrix as citrate, crosses out through the citrate shuttle, and is rebuilt in the cytosol by ATP citrate lyase → acetyl-CoA → (ACC, insulin ⊕, glucagon ⊟, CO2 with biotin) → malonyl-CoA → palmitate. The mnemonic 'Sytrate' = synthesis pins the shuttle. The interlock is the exam's regulatory favorite: malonyl-CoA, the committed intermediate of synthesis, inhibits carnitine palmitoyl transferase I — so a fed (or synthetically active) cell cannot simultaneously import fatty acids for β-oxidation; the two mirrors never run at once.",
      },
    },
    {
      id: "fasted-oxidation-blocks",
      title: "The fasted mirror and its two hypoketotic breaks",
      context: "Carnitine-dependent LCFA degradation and its deficiency diseases",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Fasted state: fatty acid + CoA → fatty acyl-CoA synthetase → fatty acyl-CoA (cytosol) → CPT-I loads the carnitine shuttle into the matrix",
            sublabel: "Input — activation and border crossing ('carnitine = carnage of fatty acids').",
            variant: "input",
          },
          {
            id: "s1",
            label: "Matrix β-oxidation (acyl-CoA dehydrogenases) shortens the chain two carbons at a time to acetyl-CoA",
            sublabel: "Process — the spiral.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Acetyl-CoA feeds ketone bodies and the TCA cycle — the fasted brain and muscle fuels",
            sublabel: "Output — the fasting state's alternative fuels.",
            variant: "output",
          },
          {
            id: "x1",
            label: "Break 1 — systemic 1° carnitine deficiency: no cellular carnitine uptake → no LCFA entry → toxic cytosolic LCFA accumulation; weakness, hypotonia, hypoketotic hypoglycemia, dilated cardiomyopathy",
            sublabel: "Block — at the border: the transport break.",
            variant: "inhibit",
          },
          {
            id: "x2",
            label: "Break 2 — MCAD deficiency: ↓ breakdown to acetyl-CoA → fatty acyl carnitines + dicarboxylic acids in blood with hypoketotic hypoglycemia; vomiting, lethargy, seizures, coma, liver dysfunction, hyperammonemia, sudden infant death; treat by avoiding fasting",
            sublabel: "Block — inside the matrix: the spiral break.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "carnitine in" },
          { from: "s1", to: "s2", label: "acetyl-CoA" },
          { from: "x1", to: "trigger", type: "inhibit", label: "no carnitine" },
          { from: "x2", to: "s1", type: "inhibit", label: "stalled spiral" },
        ],
        caption:
          "Degradation is the mirror of synthesis — activation (fatty acyl-CoA synthetase), border crossing (CPT-I + carnitine shuttle, the step malonyl-CoA inhibits), and the matrix spiral (acyl-CoA dehydrogenases) delivering acetyl-CoA to ketogenesis and the TCA cycle. Both exam diseases break the fasted mirror and converge on hypoketotic hypoglycemia, but at different stations: systemic 1° carnitine deficiency strands long-chain fats in the cytosol (toxic accumulation, dilated cardiomyopathy), while MCAD stalls the medium-chain spiral (dicarboxylic acid byproducts, ω-oxidation overflow, hyperammonemia, and sudden death in infants or children — treatment is simply avoiding fasting).",
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "fa-synthesis-vs-oxidation",
      title: "Fatty acid metabolism — synthesis and degradation, the mirror pathways",
      caption:
        "The source figure redrawn: SYNTHESIS (left, fed) — citrate exits the matrix through the citrate shuttle, ATP citrate lyase regenerates acetyl-CoA, acetyl-CoA carboxylase (insulin ⊕ / glucagon ⊟; CO2 with biotin) makes malonyl-CoA, and fatty acid synthesis builds palmitate, a 16C FA. DEGRADATION (right, fasted) — fatty acid + CoA is activated by fatty acyl-CoA synthetase, CPT-I loads the carnitine shuttle across the mitochondrial membranes, and β-oxidation (acyl-CoA dehydrogenases) yields acetyl-CoA for ketone bodies and the TCA cycle. The dashed inhibitory arrow is the interlock: malonyl-CoA ⊟ CPT-I. The two deficiency cards carry the hypoketotic blocks verbatim.",
      notice:
        "Walk the zone bands: synthesis consumes a matrix export (citrate out), degradation requires a matrix import (carnitine in), and malonyl-CoA's inhibition of CPT-I means the fed mirror locks the fasting mirror. The two deficiency cards differ by station — carnitine deficiency blocks at the border (cytosolic LCFA toxicity, dilated cardiomyopathy), MCAD blocks inside the spiral (dicarboxylic acids, hyperammonemia, sudden infant death, avoid fasting).",
    },
    {
      kind: "compare",
      title: "The two mirrors, side by side",
      intro: "A KYP synthesis of the figure's two columns — the one-table version of the mirror.",
      columns: ["Synthesis (fed — insulin)", "Degradation (fasted)"],
      rows: [
        { label: "Direction", a: "Citrate OUT of the matrix → cytosol", b: "Fatty acyl-CoA INTO the matrix" },
        { label: "Shuttle", a: "Citrate shuttle", b: "Carnitine shuttle (CPT-I loads it)" },
        { label: "Key enzyme", a: "Acetyl-CoA carboxylase (CO2, biotin; insulin ⊕, glucagon ⊟)", b: "Acyl-CoA dehydrogenases (β-oxidation spiral)" },
        { label: "Committed intermediate", a: "Malonyl-CoA", b: "Acetyl-CoA (product)" },
        { label: "Product / fate", a: "Palmitate, a 16C fatty acid", b: "Acetyl-CoA → ketone bodies, TCA cycle" },
        { label: "Sites", a: "Liver, lactating mammary glands, adipose tissue", b: "Mitochondrial matrix (muscle, liver)" },
        { label: "Mnemonic", a: "“Sytrate” = synthesis", b: "Carnitine = carnage of fatty acids" },
      ],
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "Hypoketotic hypoglycemia — the shared signature of the two breaks",
      body:
        "Both deficiency diseases present with hypoglycemia WITHOUT ketones, because the fasted state's fat-burning route is the source of both energy and ketone bodies. Systemic 1° carnitine deficiency: no cellular uptake of carnitine → no transport of LCFAs into mitochondria → toxic accumulation of LCFAs in the cytosol → weakness, hypotonia, hypoketotic hypoglycemia, dilated cardiomyopathy. Medium-chain acyl-CoA dehydrogenase deficiency: ↓ ability to break down fatty acids into acetyl-CoA → accumulation of fatty acyl carnitines and dicarboxylic acids in the blood with hypoketotic hypoglycemia → vomiting, lethargy, seizures, coma, liver dysfunction, hyperammonemia; can lead to sudden death in infants or children — treat by avoiding fasting.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A toddler becomes limp and unresponsive after a viral illness with poor intake; glucose is low, urine ketones are absent, and blood analysis shows dicarboxylic acids and fatty acyl carnitines with mild hyperammonemia.",
        discriminator: "Hypoketotic hypoglycemia + dicarboxylic acids",
        concept: "Medium-chain acyl-CoA dehydrogenase deficiency",
        answer:
          "↓ Ability to break down fatty acids into acetyl-CoA → accumulation of fatty acyl carnitines and dicarboxylic acids in the blood with hypoketotic hypoglycemia; vomiting, lethargy, seizures, coma, liver dysfunction, hyperammonemia; can lead to sudden death in infants or children; treat by avoiding fasting.",
      },
      {
        stem: "A child has progressive muscle weakness, hypotonia, episodes of hypoketotic hypoglycemia during fasting, and a dilated cardiomyopathy on echocardiography.",
        discriminator: "Hypoketotic hypoglycemia + dilated cardiomyopathy",
        concept: "Systemic 1° carnitine deficiency",
        answer:
          "No cellular uptake of carnitine → no transport of LCFAs into mitochondria → toxic accumulation of LCFAs in the cytosol; weakness, hypotonia, hypoketotic hypoglycemia, dilated cardiomyopathy.",
      },
      {
        stem: "A question asks which molecule links fatty acid synthesis to the inhibition of β-oxidation.",
        discriminator: "Malonyl-CoA ⊟ CPT-I",
        concept: "The synthesis-oxidation interlock",
        answer:
          "Malonyl-CoA, the product of acetyl-CoA carboxylase (the committed step of synthesis), inhibits carnitine palmitoyl transferase I, preventing carnitine-dependent entry of LCFAs into mitochondria — the fed state builds fat and cannot simultaneously burn it.",
      },
      {
        stem: "A biochemistry question asks where fatty acid synthesis predominantly occurs and how acetyl-CoA reaches the cytosol.",
        discriminator: "Citrate shuttle + the tissue list",
        concept: "Fatty acid synthesis localization",
        answer:
          "Liver, lactating mammary glands, and adipose tissue; synthesis requires transport of citrate from mitochondria to cytosol (the citrate shuttle), where ATP citrate lyase regenerates acetyl-CoA. Mnemonic: “Sytrate” = synthesis.",
      },
    ],
    traps: [
      {
        a: "Fatty acids enter mitochondria on their own",
        b: "Long-chain fatty acid degradation requires carnitine-dependent transport",
        whyConfused: "Acetyl-CoA and small molecules cross freely.",
        keyDifference:
          "LCTAs must be activated (fatty acyl-CoA synthetase) and shuttled by CPT-I/carnitine; that border is the malonyl-CoA-regulated step and the site of the carnitine-deficiency block.",
        clue: "Any question about LCFA mitochondrial entry or the carnitine shuttle.",
      },
      {
        a: "MCAD deficiency shows ketotic hypoglycemia",
        b: "MCAD is hypoketotic hypoglycemia",
        whyConfused: "Fasting usually produces ketones.",
        keyDifference:
          "The block sits in the pathway that makes the ketones' precursor (acetyl-CoA from β-oxidation), so fasting depletes glucose without producing ketones — the same logic as carnitine deficiency, but with dicarboxylic acids and sudden-infant-death risk.",
        clue: "Low glucose + absent urine ketones in a fasting child.",
      },
      {
        a: "Acetyl-CoA carboxylase is vitamin-C dependent",
        b: "ACC is biotin dependent (CO2)",
        whyConfused: "Carboxylases are a cofactor family.",
        keyDifference:
          "Acetyl-CoA carboxylase uses CO2 with biotin — the same cofactor pattern as pyruvate carboxylase, propionyl-CoA carboxylase, and acetyl-CoA carboxylase; insulin stimulates it and glucagon inhibits it.",
        clue: "The CO2 (biotin) label on the ACC step.",
      },
      {
        a: "Carnitine deficiency and MCAD present identically",
        b: "The cardiomyopathy and dicarboxylic acids separate them",
        whyConfused: "Both are hypoketotic hypoglycemia of fasting.",
        keyDifference:
          "Systemic 1° carnitine deficiency strands LCFAs in the cytosol — toxic accumulation with dilated cardiomyopathy; MCAD spills fatty acyl carnitines and dicarboxylic acids with liver dysfunction and hyperammonemia, risking sudden death — treated by avoiding fasting.",
        clue: "Cardiomyopathy (carnitine) versus dicarboxylic acids + hyperammonemia (MCAD).",
      },
    ],
    pivots: [
      {
        lookAlike: "The fasting child with low glucose and no ketones (carnitine deficiency vs MCAD)",
        differentiator: "Cardiomyopathy versus dicarboxylic acids",
        correctPath:
          "Hypoketotic hypoglycemia + weakness/hypotonia + dilated cardiomyopathy → systemic 1° carnitine deficiency (transport block); hypoketotic hypoglycemia + vomiting/lethargy + dicarboxylic acids + hyperammonemia + possible sudden death → MCAD (spiral block, avoid fasting).",
      },
      {
        lookAlike: "The fed/fasted question on fat traffic (synthesis vs oxidation)",
        differentiator: "The shuttle direction and the hormone",
        correctPath:
          "Fed insulin → citrate OUT (citrate shuttle) → ACC → malonyl-CoA → palmitate, with malonyl-CoA braking CPT-I; fasting → fatty acyl-CoA IN (carnitine shuttle) → β-oxidation → acetyl-CoA → ketones and TCA.",
      },
    ],
    miniCase: {
      vignette:
        "A 14-month-old girl is brought to the emergency department after two days of a viral gastroenteritis with poor oral intake. This morning she was difficult to arouse, and on arrival she is lethargic but arousable, with dry mucous membranes and no hepatomegaly. Point-of-care glucose is 34 mg/dL; a urine dipstick shows no ketones despite the prolonged fast. Venous blood gas shows a mild metabolic acidosis; comprehensive panel reveals mildly elevated transaminases and an ammonia of 110 μmol/L. A plasma acylcarnitine profile reports elevated medium-chain species, and urine organic acids show dicarboxylic acids. Her growth and development have been normal, and she has had one prior similar episode at 18 months... at 10 months of age after a missed overnight feed, which resolved with IV dextrose.",
      question:
        "Which enzyme deficiency is most likely, and what is the appropriate long-term management?",
      options: [
        {
          label: "A",
          text: "Medium-chain acyl-CoA dehydrogenase deficiency; avoid fasting",
          correct: true,
          why: "Correct — the ability to break down fatty acids into acetyl-CoA is reduced, so fasting produces hypoketotic hypoglycemia with accumulation of fatty acyl carnitines and dicarboxylic acids in the blood, plus vomiting, lethargy, seizures, coma risk, liver dysfunction, and hyperammonemia; the disease can cause sudden death in infants or children, and the treatment is avoiding fasting (with IV dextrose during illness).",
        },
        {
          label: "B",
          text: "Systemic 1° carnitine deficiency; carnitine supplementation alone",
          why: "Carnitine deficiency also gives hypoketotic hypoglycemia, but its signature is toxic cytosolic long-chain fatty acid accumulation with weakness, hypotonia, and dilated cardiomyopathy — not dicarboxylic acidemia with hyperammonemia.",
        },
        {
          label: "C",
          text: "Von Gierke disease (glucose-6-phosphatase deficiency)",
          why: "Von Gierke causes FASTING hypoglycemia with LACTIC ACIDOSIS, hyperuricemia, and hepatomegaly — the lactate is high, not absent, and ketone production is not the defining problem.",
        },
        {
          label: "D",
          text: "Long-chain 3-hydroxyacyl-CoA dehydrogenase deficiency",
          why: "A β-oxidation disorder with similar fasting intolerance, but the source's named exam disease for hypoketotic hypoglycemia with dicarboxylic acids and sudden infant death risk is MCAD; LCHAD additionally causes retinopathy, neuropathy, and AFLP in carrier mothers.",
        },
        {
          label: "E",
          text: "CPT-I deficiency",
          why: "CPT-I deficiency blocks long-chain fatty acid entry into mitochondria — hypoketotic hypoglycemia with, classically, elevated free carnitine and LOW long-chain acylcarnitines; this child's elevated medium-chain acylcarnitine profile points to the spiral, not the border.",
        },
      ],
      reasoning:
        "The two-day fast with vomiting in a toddler strips the body of glucose; a normal child would switch to fatty acid oxidation and generate ketones — but her urine shows none, the defining signature of a β-oxidation break. The dicarboxylic acids are the ω-oxidation overflow that appears when the medium-chain spiral stalls, and the hyperammonemia with liver dysfunction fits the accumulation of fatty acyl intermediates. The elevated medium-chain acylcarnitine species name the station: the acyl-CoA dehydrogenases, making this medium-chain acyl-CoA dehydrogenase deficiency — the disease that can present as sudden unexplained death in infancy and whose management is simply avoiding fasting, with dextrose during intercurrent illness.",
    },
  },
  mnemonics: [
    {
      code: "“Sytrate” = synthesis",
      meaning:
        "The source's mnemonic: the citrate shuttle feeds fatty acid synthesis — citrate out of the mitochondrion is the synthesis direction.",
      memorizes: "Which shuttle serves synthesis",
      whenToUse: "Any citrate-shuttle or synthesis-localization question.",
      clinical: "Synthesis requires citrate transport from mitochondria to cytosol (ATP citrate lyase) in liver, lactating mammary glands, and adipose tissue.",
    },
    {
      code: "Carnitine = carnage of fatty acids",
      meaning:
        "The source's mnemonic: the carnitine shuttle drives fatty acid destruction (β-oxidation) — carnitine in is the degradation direction.",
      memorizes: "Which shuttle serves degradation",
      whenToUse: "Any carnitine-shuttle or LCFA-entry question.",
      clinical: "LCFA degradation requires carnitine-dependent transport into the mitochondrial matrix via CPT-I.",
    },
  ],
  rapidReview: {
    s30: [
      "Synthesis: citrate shuttle out → ACC (biotin, insulin ⊕) → malonyl-CoA → palmitate (16C)",
      "Degradation: CPT-I + carnitine shuttle in → β-oxidation → acetyl-CoA → ketones/TCA",
      "Malonyl-CoA ⊟ CPT-I — synthesis brakes oxidation",
      "“Sytrate” = synthesis; carnitine = carnage of fatty acids",
    ],
    m3: [
      "Synthesis sites: liver, lactating mammary glands, adipose tissue",
      "1° carnitine deficiency: hypoketotic hypoglycemia + dilated cardiomyopathy",
      "MCAD: hypoketotic hypoglycemia + dicarboxylic acids + hyperammonemia; avoid fasting",
      "MCAD can cause sudden death in infants or children",
    ],
    m10: [
      "ACC = the biotin-dependent committed step (CO2); insulin ⊕, glucagon ⊟",
      "ATP citrate lyase: citrate → cytosolic acetyl-CoA",
      "Fatty acyl-CoA synthetase activates; CPT-I shuttles; acyl-CoA dehydrogenases spiral",
      "Both breaks converge on hypoketotic hypoglycemia — the station separates them",
    ],
  },
  recall: [
    {
      q: "What transport does fatty acid synthesis require, and where does it predominantly occur?",
      a: "Transport of citrate from mitochondria to cytosol (the citrate shuttle); predominantly in liver, lactating mammary glands, and adipose tissue.",
    },
    {
      q: "What does LCFA degradation require, and which enzyme loads the shuttle?",
      a: "Carnitine-dependent transport into the mitochondrial matrix; carnitine palmitoyl transferase I loads fatty acyl-CoA onto the carnitine shuttle (after fatty acyl-CoA synthetase activates the fatty acid).",
    },
    {
      q: "Name the enzyme, cofactor, and hormones of the committed step of fatty acid synthesis.",
      a: "Acetyl-CoA carboxylase; CO2 (biotin); stimulated by insulin, inhibited by glucagon — converts acetyl-CoA to malonyl-CoA.",
    },
    {
      q: "How does malonyl-CoA couple synthesis to the inhibition of oxidation?",
      a: "Malonyl-CoA inhibits carnitine palmitoyl transferase I, preventing carnitine-dependent LCFA entry into mitochondria — so active synthesis locks out simultaneous β-oxidation.",
    },
    {
      q: "What are the two shuttles of the mirror, with directions?",
      a: "Citrate shuttle: mitochondrial matrix → cytosol (feeds synthesis; ATP citrate lyase regenerates acetyl-CoA). Carnitine shuttle: cytosol → mitochondrial matrix (feeds β-oxidation via CPT-I).",
    },
    {
      q: "Describe systemic 1° carnitine deficiency fully.",
      a: "No cellular uptake of carnitine → no transport of LCFAs into mitochondria → toxic accumulation of LCFAs in the cytosol; causes weakness, hypotonia, hypoketotic hypoglycemia, dilated cardiomyopathy.",
    },
    {
      q: "Describe medium-chain acyl-CoA dehydrogenase deficiency fully.",
      a: "↓ Ability to break down fatty acids into acetyl-CoA → accumulation of fatty acyl carnitines and dicarboxylic acids in the blood with hypoketotic hypoglycemia; causes vomiting, lethargy, seizures, coma, liver dysfunction, hyperammonemia; can lead to sudden death in infants or children; treat by avoiding fasting.",
    },
    {
      q: "Why is the hypoglycemia of both deficiency diseases hypoketotic?",
      a: "The ketone bodies' precursor is the acetyl-CoA that β-oxidation produces; when the pathway is broken (at the shuttle in carnitine deficiency, or in the spiral in MCAD), fasting depletes glucose without generating ketones.",
    },
    {
      q: "What are the β-oxidation enzymes and the two fates of their acetyl-CoA product?",
      a: "The acyl-CoA dehydrogenases (the β-oxidation spiral in the mitochondrial matrix); acetyl-CoA feeds ketone bodies and the TCA cycle.",
    },
  ],
  related: [
    {
      title: "Metabolism Overview",
      topicId: "metabolismOverview",
      note: "The whole-metabolism map's fed/fasted traffic — where fatty acid synthesis and oxidation sit in the liver-adipose-muscle economy.",
    },
    {
      title: "TCA Cycle & Pyruvate Dehydrogenase",
      topicId: "tcaCyclePdh",
      note: "β-oxidation's acetyl-CoA enters the TCA cycle here — the destination half of the degradation mirror.",
    },
    {
      title: "Glycogen Metabolism & Storage Diseases",
      topicId: "glycogen-metabolism",
      note: "The other fasting-fuel system — glycogenolysis fails differently (lactic acidosis in Von Gierke) from fat oxidation (hypoketotic hypoglycemia in MCAD/carnitine deficiency).",
    },
    {
      title: "Pentose Phosphate Pathway",
      topicId: "pentosePhosphatePathway",
      note: "The NADPH supply for reductive fatty acid synthesis — the HMP shunt is the synthesis mirror's power source.",
    },
  ],
  crossLinks: [
    {
      subject: "Cardiology",
      connection: "Systemic 1° carnitine deficiency's dilated cardiomyopathy — the cytosolic LCFA toxicity that presents to the heart.",
    },
    {
      subject: "Pediatrics",
      connection: "MCAD's sudden unexpected infant death risk and the avoid-fasting management — the newborn-screen acylcarnitine disease.",
    },
    {
      subject: "Endocrinology",
      connection: "The insulin/glucagon switch on acetyl-CoA carboxylase — the same reciprocal-hormone logic that runs glycogen and glycolysis.",
    },
  ],
};
