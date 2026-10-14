import type { KypUsMLENote } from "../types";

// Biochemistry — Metabolism (E-batch, book order 10).
// Source: First Aid 2026, Part 1 pdf 102–103 / book 80–81 (urea cycle;
// transport of ammonia by alanine; hyperammonemia; ornithine
// transcarbamylase deficiency)

export const ureaCycleDisorders: KypUsMLENote = {
  id: "urea-cycle-disorders",
  title: "Urea Cycle Disorders & Hyperammonemia",
  subtitle:
    "Nitrogen's exit wheel (CPS I rate-limiting, ornithine regenerated) with the alanine shuttle that delivers muscle nitrogen to the liver — plus the hyperammonemia it fails to clear (asterixis, cerebral edema, TCA inhibition) and the one X-linked block, OTC deficiency, whose excess carbamoyl phosphate becomes orotic acid.",
  subject: "Biochemistry",
  system: "Section II · High-Yield General Principles — Metabolism",
  pilotCategory: "Metabolism — Urea cycle, ammonia transport, hyperammonemia, OTC deficiency",
  difficulty: 3,
  readTime: 13,
  sourceRef:
    "First Aid 2026, Part 1 pp. 80–81 (urea cycle; transport of ammonia by alanine; hyperammonemia; ornithine transcarbamylase deficiency)",
  tags: [
    "urea cycle",
    "carbamoyl phosphate synthetase I",
    "N-acetylglutamate",
    "ornithine transcarbamylase",
    "OTC deficiency",
    "citrulline",
    "argininosuccinate",
    "arginase",
    "ornithine",
    "aspartate",
    "urea",
    "hyperammonemia",
    "asterixis",
    "cerebral edema",
    "alanine",
    "Cahill cycle",
    "Cori cycle",
    "lactulose",
    "rifaximin",
    "benzoate",
    "phenylacetate",
    "phenylbutyrate",
    "orotic acid",
    "BUN",
    "X-linked recessive",
  ],
  core: {
    what: "Amino acid catabolism generates common metabolites (eg, pyruvate, acetyl-CoA), which serve as metabolic fuels; excess nitrogen is converted to urea and excreted by the kidneys. The urea cycle spans mitochondria and cytosol (liver): carbamoyl phosphate synthetase I — the rate-limiting step, activated by the allosteric activator N-acetylglutamate — combines NH3 with CO2 (2 ATP) to form carbamoyl phosphate; ornithine transcarbamylase joins it with ornithine to make citrulline; citrulline exits to the cytosol where argininosuccinate synthetase adds aspartate (ATP → AMP + PPi) forming argininosuccinate; argininosuccinate lyase splits it into arginine + fumarate; arginase cleaves arginine into urea + ornithine, and ornithine re-enters the mitochondria — the wheel turns. Ammonia reaches the liver from muscle as alanine: amino acids transfer NH3 to α-ketoglutarate (glutamate), which hands nitrogen to pyruvate forming alanine (ALT, B6); blood alanine becomes liver pyruvate (gluconeogenesis → glucose back to muscle — the Cahill cycle) while the nitrogen enters the urea cycle — with lactate running the parallel Cori cycle. Hyperammonemia (acquired, eg, liver disease, or hereditary, eg, urea cycle enzyme deficiencies) presents with flapping tremor (asterixis), slurring of speech, somnolence, vomiting, cerebral edema, blurring of vision; ↑NH3 causes CNS toxicity by TCA cycle inhibition (↓α-ketoglutarate), ↓glutamate, ↑GABAergic tone (↑GABA), ↑glutamine, and cerebral edema (glutamine-induced osmotic shifts). Treatment: limit protein in diet; lactulose to acidify the GI tract and trap NH4+ for excretion; antibiotics (eg, rifaximin) to ↓ ammoniagenic bacteria; benzoate, phenylacetate, or phenylbutyrate, which react with glycine or glutamine, forming products excreted renally. Ornithine transcarbamylase deficiency: the most common urea cycle disorder, X-linked recessive (vs other urea cycle enzyme deficiencies, which are autosomal recessive); interferes with the body's ability to eliminate ammonia, often evident in the first few days of life but may present later; excess carbamoyl phosphate is converted to orotic acid (part of the pyrimidine synthesis pathway; vs carbamoyl phosphate synthetase I deficiency); findings: ↑ orotic acid in blood and urine, ↓ BUN, symptoms of hyperammonemia; no megaloblastic anemia (vs orotic aciduria).",
    why: "The urea cycle is the ammonia page's centerpiece: one wheel, five enzymes, one mnemonic, one X-linked exception with a built-in differential (orotic acid up vs down), and a treatment ladder (protein, lactulose, rifaximin, benzoate/phenylacetate/phenylbutyrate) that also appears on the liver-failure page. The alanine shuttle explains how muscle nitrogen safely reaches the liver — and why the liver owns both cycles' ATP bills.",
    keyIdea: "See two wheels and a shuttle. Wheel one: the urea cycle in the liver, split across the mitochondrial membrane — CPS I (rate-limiting, NAG-activated) charges NH3 + CO2 into carbamoyl phosphate inside the mitochondria; OTC hooks it to ornithine; the rest (ASS → argininosuccinate, ASL → arginine + fumarate, arginase → urea + ornithine) runs in the cytosol and regenerates the ornithine the wheel needs. Wheel two: the ornithine wheel itself — every turn exports one urea carrying two nitrogens (one from free NH3, one from aspartate). The shuttle: muscle packs its nitrogen onto pyruvate as alanine (ALT), the blood delivers it, and the liver unpacks it — pyruvate to gluconeogenesis, nitrogen to the urea cycle — sending glucose back (Cahill) while lactate rides the same road (Cori). When the wheel jams (any enzyme deficiency — OTC the most common and the only X-linked one), ammonia climbs and the brain pays: α-ketoglutarate is consumed (TCA inhibition), glutamate and GABA shift, glutamine pulls water (cerebral edema) — asterixis, somnolence, seizures. In OTC deficiency specifically, the mitochondrial carbamoyl phosphate that cannot reach ornithine leaks into the cytosolic pyrimidine path as orotic acid — the finding that separates it from CPS I deficiency, where no carbamoyl phosphate is made at all.",
  },
  mechanisms: [
    {
      id: "urea-cycle-wheel",
      title: "The urea cycle — two nitrogens per turn, ornithine regenerated",
      context: "Liver, protein-rich state or fasting muscle nitrogen",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Excess nitrogen arrives as NH3 (from amino acid catabolism and the alanine shuttle)",
            sublabel: "Input — must be detoxified before it reaches the brain.",
            variant: "input",
          },
          {
            id: "s1",
            label: "CPS I (rate-limiting): NH3 + CO2 + 2 ATP → carbamoyl phosphate (mitochondria)",
            sublabel: "Process — requires the allosteric activator N-acetylglutamate.",
            variant: "process",
          },
          {
            id: "s2",
            label: "OTC: carbamoyl phosphate + ornithine → citrulline (still mitochondrial)",
            sublabel: "Process — citrulline then exits to the cytosol.",
            variant: "process",
          },
          {
            id: "s3",
            label: "ASS: citrulline + aspartate (ATP → AMP + PPi) → argininosuccinate; ASL → arginine + fumarate",
            sublabel: "Process — aspartate supplies the second nitrogen; fumarate feeds the TCA cycle.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Arginase: arginine → urea + ornithine — urea to the kidney, ornithine back into the mitochondria",
            sublabel: "Output — nitrogen excreted; the wheel's carrier regenerated.",
            variant: "output",
          },
          {
            id: "x1",
            label: "OTC ⊟ (X-linked): carbamoyl phosphate → orotic acid (the pyrimidine escape)",
            sublabel: "Inhibitor — ↑ orotic acid in blood and urine, ↓ BUN, hyperammonemia.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "NH3 + CO2" },
          { from: "s1", to: "s2", label: "carbamoyl phosphate" },
          { from: "s2", to: "s3", label: "citrulline → cytosol" },
          { from: "s3", to: "o1", label: "arginine" },
          { from: "x1", to: "s2", type: "inhibit", label: "OTC ⊟ → orotic acid" },
        ],
        caption:
          "The wheel's geography is the exam's favorite detail: CPS I and OTC are mitochondrial; ASS, ASL, and arginase are cytosolic. CPS I is the rate-limiting step and the only one with an allosteric activator (N-acetylglutamate — itself made when arginine and acetyl-CoA are plentiful, the cell's signal that nitrogen needs processing). Each turn costs 3 ATP-equivalents (2 at CPS I, 1 at ASS via ATP → AMP + PPi) and exports one urea carrying two nitrogens — one from free ammonia, one from aspartate — with ornithine regenerated for the next turn. Block the wheel at OTC and the backed-up carbamoyl phosphate escapes into the cytosolic pyrimidine pathway: orotic acid rises (and with it the ammonia), while BUN falls because no urea is made.",
      },
    },
    {
      id: "hyperammonemia-cns-toxicity",
      title: "Hyperammonemia — why ammonia poisons the brain",
      context: "Liver failure or a urea cycle block",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "↑NH3 — acquired (liver disease) or hereditary (urea cycle enzyme deficiencies)",
            sublabel: "Input — the wheel cannot clear the nitrogen load.",
            variant: "input",
          },
          {
            id: "s1",
            label: "TCA cycle inhibition (↓α-ketoglutarate) — the brain's energy line slows",
            sublabel: "Process — ammonia consumes α-ketoglutarate in the glutamate reaction.",
            variant: "process",
          },
          {
            id: "s2",
            label: "↓ glutamate, ↑ GABAergic tone (↑GABA), ↑ glutamine",
            sublabel: "Process — neurotransmitter pools tilt toward inhibition.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Cerebral edema (glutamine-induced osmotic shifts) — asterixis, slurring of speech, somnolence, vomiting, blurring of vision",
            sublabel: "Output — the hyperammonemic encephalopathy the exam describes.",
            variant: "output",
          },
          {
            id: "x1",
            label: "Treatment: limit protein; lactulose (acidify GI tract, trap NH4+); rifaximin (↓ ammoniagenic bacteria); benzoate/phenylacetate/phenylbutyrate (conjugate glycine or glutamine for renal excretion)",
            sublabel: "Counter — the four-step ammonia-lowering ladder.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "↑NH3" },
          { from: "s1", to: "s2", label: "↓α-KG → ↓Glu" },
          { from: "s2", to: "o1", label: "↑glutamine → edema" },
          { from: "x1", to: "o1", type: "inhibit", label: "lower NH3 four ways" },
        ],
        caption:
          "Ammonia's neurotoxicity is metabolic, not mechanical: it drains α-ketoglutarate from the TCA cycle (brain energy failure), collapses the glutamate pool (excitatory tone falls), raises GABA (inhibitory tone rises — somnolence), and piles up glutamine inside astrocytes, whose osmotic pull swells the brain (cerebral edema, blurring of vision, seizures). The flapping tremor (asterixis) is the classic bedside sign. Treatment attacks every front: dietary protein limits the substrate, lactulose acidifies the gut to trap NH4+ in stool, rifaximin starves the ammoniagenic bacteria, and benzoate/phenylacetate/phenylbutyrate conjugate glycine or glutamine into renally-excreted molecules — alternative nitrogen exits for a wheel that cannot turn.",
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "urea-cycle-map",
      title: "The urea cycle — the mitochondria↔cytosol wheel",
      caption:
        "The source wheel redrawn: NH3 + CO2 —(CPS I, rate-limiting, ⊕N-acetylglutamate, 2 ATP)→ carbamoyl phosphate —(OTC, mitochondrial)→ citrulline → cytosol —(ASS + aspartate, ATP → AMP + PPi)→ argininosuccinate —(ASL, fumarate out)→ arginine —(arginase)→ urea + ornithine (back to the mitochondria). The enzyme-order mnemonic and the OTC orotic-acid escape are printed on the map.",
      notice:
        "Track the two nitrogens: one enters as free NH3 at CPS I, the second rides in as aspartate at ASS — one urea per turn carries both. Then track the compartments: CPS I and OTC mitochondrial; ASS, ASL, arginase cytosolic — citrulline is the molecule that crosses. Finally the exception: OTC deficiency (the only X-linked one, the most common) backs up carbamoyl phosphate into orotic acid, while CPS I deficiency makes no carbamoyl phosphate at all — the orotic acid differential.",
    },
    {
      kind: "visual",
      visualId: "alanine-glucose-shuttle",
      title: "Transport of ammonia by alanine — the Cahill cycle (with the Cori cycle)",
      caption:
        "The source muscle–blood–liver diagram: muscle amino acids transfer NH3 to α-ketoglutarate (glutamate), ALT (B6) moves the nitrogen to pyruvate making alanine; blood carries alanine to the liver, where ALT reverses it — pyruvate feeds gluconeogenesis (glucose returns to muscle: the Cahill cycle), the nitrogen enters the urea cycle as urea, and lactate rides the same route (the Cori cycle). The hyperammonemia panel carries the encephalopathy mechanism and the treatment ladder.",
      notice:
        "Compare the two cycles' cargo: the Cahill cycle moves nitrogen (alanine) and the Cori cycle moves reducing power (lactate) — both end in hepatic gluconeogenesis and both return glucose to muscle. The liver pays both ATP bills, which is why the fasting muscle can dump nitrogen safely and still get fuel back.",
    },
    {
      kind: "table",
      title: "The overall reaction — what one urea costs",
      intro: "The summary the source prints beside the wheel.",
      columns: ["Component", "Contribution"],
      rows: [
        ["Nitrogen sources", "2 NH3 — one from free ammonia (via CPS I), one from aspartate (via ASS)"],
        ["Carbon source", "CO2 (as HCO3−), fixed into carbamoyl phosphate by CPS I"],
        ["Energy cost", "3 ATP equivalents per urea (2 ATP at CPS I; ATP → AMP + PPi at ASS)"],
        ["Byproducts", "Fumarate (→ TCA cycle) and 2 ADP + Pi + AMP + PPi"],
        ["Excretion", "Urea → kidney → urine (the BUN lab)"],
      ],
      caption: "Amino acid catabolism generates common metabolites (pyruvate, acetyl-CoA) that serve as fuels; the excess nitrogen leaves as urea.",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "Ornithine transcarbamylase deficiency — the X-linked exception",
      body:
        "Most common urea cycle disorder; X-linked recessive (vs other urea cycle enzyme deficiencies, which are autosomal recessive). Interferes with the body's ability to eliminate ammonia — often evident in the first few days of life, but may present later. Excess carbamoyl phosphate is converted to orotic acid (part of the pyrimidine synthesis pathway; vs CPS I deficiency). Findings: ↑ orotic acid in blood and urine, ↓ BUN, symptoms of hyperammonemia. No megaloblastic anemia (vs orotic aciduria).",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A newborn (often male) becomes lethargic and vomits in the first days of life after protein feeds; ↓ BUN, ↑ orotic acid in blood and urine, ↑ ammonia.",
        discriminator: "The orotic acid escape",
        concept: "OTC deficiency",
        answer: "X-linked recessive ornithine transcarbamylase deficiency — the most common urea cycle disorder; excess carbamoyl phosphate → orotic acid; treat with protein limitation and the ammonia-lowering ladder.",
      },
      {
        stem: "A patient with liver disease (or any cirrhosis stem) develops asterixis, slurring of speech, and somnolence; ammonia is elevated.",
        discriminator: "Flapping tremor = asterixis",
        concept: "Acquired hyperammonemia",
        answer: "↑NH3 causes CNS toxicity: TCA cycle inhibition (↓α-ketoglutarate), ↓ glutamate, ↑GABAergic tone (↑GABA), ↑ glutamine, cerebral edema (glutamine-induced osmotic shifts).",
      },
      {
        stem: "A question asks which treatment lowers ammonia by which mechanism (lactulose, rifaximin, benzoate/phenylacetate/phenylbutyrate).",
        discriminator: "The four mechanism pairings",
        concept: "Ammonia-lowering therapy",
        answer: "Lactulose acidifies the GI tract and traps NH4+ for excretion; rifaximin ↓ ammoniagenic bacteria; benzoate, phenylacetate, or phenylbutyrate react with glycine or glutamine forming products excreted renally; and protein is limited in the diet.",
      },
      {
        stem: "A question asks the urea cycle's rate-limiting step or its allosteric activator.",
        discriminator: "CPS I + N-acetylglutamate",
        concept: "Rate-limiting control",
        answer: "Carbamoyl phosphate synthetase I is the rate-limiting step, activated by N-acetylglutamate (the arginine-and-acetyl-CoA signal that nitrogen needs processing).",
      },
      {
        stem: "A biochemistry question asks how muscle nitrogen reaches the liver safely.",
        discriminator: "Alanine, not free ammonia",
        concept: "Transport of ammonia by alanine",
        answer: "Muscle transfers NH3 to pyruvate making alanine (ALT, B6); blood alanine reaches the liver, where ALT reverses the exchange — pyruvate feeds gluconeogenesis (glucose returns: the Cahill cycle) and the nitrogen enters the urea cycle.",
      },
      {
        stem: "A stem pairs ↑ orotic acid with the question of megaloblastic anemia.",
        discriminator: "OTC deficiency vs orotic aciduria",
        concept: "The orotic acid differential",
        answer: "OTC deficiency: ↑ orotic acid with hyperammonemia and ↓ BUN but NO megaloblastic anemia; orotic aciduria (UMP synthase deficiency): ↑ orotic acid WITH megaloblastic anemia and normal ammonia.",
      },
    ],
    traps: [
      {
        a: "OTC deficiency is autosomal recessive",
        b: "OTC deficiency is X-linked recessive",
        whyConfused: "Most metabolic enzyme deficiencies are autosomal recessive.",
        keyDifference: "OTC is the exception — X-linked recessive — while all other urea cycle enzyme deficiencies are autosomal recessive.",
        clue: "Affected male newborn + carrier mother pattern.",
      },
      {
        a: "CPS I deficiency raises orotic acid",
        b: "CPS I deficiency has no orotic acid",
        whyConfused: "Both present with hyperammonemia.",
        keyDifference: "CPS I deficiency makes no carbamoyl phosphate, so nothing leaks to pyrimidines (orotic acid normal/low); OTC deficiency backs carbamoyl phosphate up into orotic acid.",
        clue: "The orotic acid line separates the two.",
      },
      {
        a: "Both urea nitrogens come from free NH3",
        b: "One nitrogen comes from aspartate",
        whyConfused: "The cycle is summarized as 'NH3 disposal'.",
        keyDifference: "Urea carries two nitrogens: one from free ammonia (CPS I) and one from aspartate (ASS) — the aspartate-argininosuccinate shunt.",
        clue: "Any 'how many nitrogens and their sources' question.",
      },
      {
        a: "Lactulose kills ammonia-producing bacteria",
        b: "Lactulose traps NH4+ in the gut",
        whyConfused: "Both lower ammonia.",
        keyDifference: "Lactulose acidifies the GI tract, converting absorbable NH3 to non-absorbable NH4+ (excreted in stool); rifaximin is the antibiotic that ↓ ammoniagenic bacteria.",
        clue: "Mechanism-matching treatment questions.",
      },
    ],
    pivots: [
      {
        lookAlike: "A hyperammonemic newborn (OTC deficiency vs organic acidemias vs transient neonatal hyperammonemia)",
        differentiator: "The orotic acid and BUN pattern",
        correctPath:
          "↑NH3 + ↑ orotic acid + ↓ BUN → OTC deficiency; ↑NH3 with ketosis and acidosis → organic acidemia (propionic, methylmalonic); ↑NH3 with normal orotic acid in a sick infant → consider CPS I or NAG synthase deficiency.",
      },
      {
        lookAlike: "Altered mental status with asterixis (hepatic encephalopathy vs other causes)",
        differentiator: "The ammonia and liver context",
        correctPath:
          "Asterixis + slurred speech + somnolence with liver disease and ↑NH3 → hyperammonemic encephalopathy (treat: lactulose, rifaximin); urea-cycle blocks present the same brain signs in a genetically-timed newborn without liver disease.",
      },
    ],
    miniCase: {
      vignette:
        "A term male infant is well at birth and breastfeeds normally for 36 hours. Over the next two days he becomes irritable, then lethargic, and begins vomiting; by day 4 he is barely arousable with brief grunting respirations. Exam shows poor tone and a tremulous flapping of outstretched hands when stimulated. Laboratories reveal markedly elevated blood ammonia, a BUN below the normal range, and an anion gap without ketosis. Urine orotic acid is markedly elevated; a CBC with smear shows no hypersegmented neutrophils and no macro-ovalocytes. His maternal uncle died in infancy of an unexplained coma.",
      question:
        "Which finding best explains the maternal family history in this infant's disorder?",
      options: [
        {
          label: "A",
          text: "X-linked recessive inheritance of ornithine transcarbamylase deficiency",
          correct: true,
          why: "Correct — OTC deficiency is the most common urea cycle disorder and the only X-linked one: affected males (the deceased uncle), carrier females; the backed-up carbamoyl phosphate becomes orotic acid with ↓BUN and hyperammonemia, no megaloblastic anemia.",
        },
        {
          label: "B",
          text: "Autosomal recessive inheritance of carbamoyl phosphate synthetase I deficiency",
          why: "CPS I deficiency fits the hyperammonemia and low BUN but NOT the ↑ orotic acid (no carbamoyl phosphate is made to leak) nor the male-skewed family history.",
        },
        {
          label: "C",
          text: "Mitochondrial inheritance presenting with lactic acidosis",
          why: "Mitochondrial disease skews maternal lines but shows lactic acidosis and multisystem findings — not the orotic-acid-plus-low-BUN signature.",
        },
        {
          label: "D",
          text: "Orotic aciduria from UMP synthase deficiency",
          why: "Orotic aciduria DOES raise orotic acid — but with megaloblastic anemia and normal ammonia, neither of which this infant has.",
        },
        {
          label: "E",
          text: "Transient neonatal hyperammonemia of the late-preterm",
          why: "Seen in late-preterm infants with respiratory distress — no orotic acid rise, no family history pattern.",
        },
      ],
      reasoning:
        "Three anchors: the timing (protein tolerance collapsing after feeds begin), the labs (↑NH3 + ↑ orotic acid + ↓ BUN without megaloblastic anemia), and the pedigree (affected uncle, carrier mother). All three point to the one X-linked urea cycle block: ornithine transcarbamylase deficiency.",
    },
  },
  mnemonics: [
    {
      code: "“Ordinarily, Careless Crappers Are Also Frivolous About Urination.”",
      meaning: "The source's enzyme-order mnemonic: Ornithine transcarbamylase, Carbamoyl phosphate synthetase, Argininosuccinate synthetase, Argininosuccinate lyase (Also), Arginase — the wheel's sequence.",
      memorizes: "The urea cycle enzyme order",
      whenToUse: "Sequence questions and 'which enzyme is missing' stems.",
      clinical: "The order pairs with the compartment map (first two mitochondrial, last three cytosolic).",
    },
    {
      code: "“CPS I is the gate — NAG holds the key”",
      meaning: "Carbamoyl phosphate synthetase I is the rate-limiting step, and N-acetylglutamate is its required allosteric activator (made from arginine + acetyl-CoA — the signal that nitrogen needs processing).",
      memorizes: "Rate-limiting step + its activator",
      whenToUse: "Regulation questions.",
      clinical: "NAG synthase deficiency mimics CPS I deficiency — no activator, no gate.",
    },
    {
      code: "“When the wheel jams at OTC, carbamoyl phosphate escapes to the pyrimidines”",
      meaning: "OTC deficiency: mitochondrial carbamoyl phosphate cannot reach ornithine, so it leaks to the cytosolic pyrimidine pathway as orotic acid — rising in blood and urine while BUN falls.",
      memorizes: "The orotic acid escape in OTC deficiency",
      whenToUse: "The OTC-vs-CPS-I and OTC-vs-orotic-aciduria differentials.",
      clinical: "↑ orotic acid + hyperammonemia + no megaloblastic anemia = OTC.",
    },
  ],
  rapidReview: {
    s30: [
      "CPS I = rate-limiting; ⊕ N-acetylglutamate",
      "OTC deficiency: X-linked, ↑ orotic acid, ↓ BUN, hyperammonemia",
      "Asterixis = hyperammonemic encephalopathy",
    ],
    m3: [
      "Urea's 2 nitrogens: free NH3 (CPS I) + aspartate (ASS)",
      "Treatment ladder: protein limit, lactulose (trap NH4+), rifaximin, benzoate/phenylacetate/phenylbutyrate",
      "CNS toxicity: TCA inhibition (↓α-KG), ↓ glutamate, ↑GABA, ↑ glutamine → edema",
    ],
    m10: [
      "Enzyme order: OTC, CPS, ASS, ASL, arginase (the source mnemonic)",
      "Alanine shuttle: muscle NH3 → alanine (ALT, B6) → liver → glucose back (Cahill cycle)",
      "OTC deficiency has no megaloblastic anemia (vs orotic aciduria)",
    ],
  },
  recall: [
    {
      q: "List the urea cycle enzymes in order with their compartments.",
      a: "Carbamoyl phosphate synthetase I (mitochondria, rate-limiting, ⊕NAG) → ornithine transcarbamylase (mitochondria) → argininosuccinate synthetase (cytosol) → argininosuccinate lyase (cytosol) → arginase (cytosol). Mnemonic: Ordinarily, Careless Crappers Are Also Frivolous About Urination.",
    },
    {
      q: "What is the rate-limiting step and its allosteric activator?",
      a: "Carbamoyl phosphate synthetase I — activated by N-acetylglutamate.",
    },
    {
      q: "Trace the two nitrogens of urea to their entry points.",
      a: "One from free NH3, fixed by CPS I into carbamoyl phosphate; the second from aspartate, added by argininosuccinate synthetase.",
    },
    {
      q: "Describe OTC deficiency fully.",
      a: "Most common urea cycle disorder; X-linked recessive (others autosomal recessive); interferes with ammonia elimination, often evident in the first days of life but may present later; excess carbamoyl phosphate → orotic acid; findings: ↑ orotic acid in blood and urine, ↓ BUN, hyperammonemia; no megaloblastic anemia (vs orotic aciduria).",
    },
    {
      q: "How does muscle transport its nitrogen to the liver?",
      a: "As alanine: NH3 → α-ketoglutarate → glutamate; ALT (B6) moves the nitrogen to pyruvate → alanine; blood delivers alanine to the liver, where ALT reverses it — pyruvate to gluconeogenesis (glucose returns: Cahill cycle), nitrogen to the urea cycle.",
    },
    {
      q: "List ammonia's four CNS toxicity mechanisms.",
      a: "TCA cycle inhibition (↓α-ketoglutarate); ↓ glutamate; ↑ GABAergic tone (↑GABA); ↑ glutamine with glutamine-induced osmotic cerebral edema.",
    },
    {
      q: "Give the four ammonia-lowering treatments with mechanisms.",
      a: "Limit protein in diet; lactulose acidifies the GI tract to trap NH4+ for excretion; rifaximin decreases ammoniagenic bacteria; benzoate/phenylacetate/phenylbutyrate react with glycine or glutamine forming renally-excreted products.",
    },
  ],
  related: [
    {
      title: "Amino Acids & Their Derivatives",
      topicId: "amino-acids",
      note: "Arginine — a derivative-map precursor (creatine, NO) — is also the urea cycle's intermediate: arginase splits it to close the wheel.",
    },
    {
      title: "TCA Cycle & Pyruvate Dehydrogenase",
      topicId: "tca-cycle-pdh",
      note: "The cycle's fumarate output lands straight in the TCA circle, and hyperammonemia's brain injury begins with TCA inhibition — the two wheels share the α-ketoglutarate pool.",
    },
    {
      title: "Gluconeogenesis",
      topicId: "gluconeogenesis",
      note: "The alanine shuttle's pyruvate becomes glucose through the four bypasses — the Cahill cycle is gluconeogenesis with a nitrogen passenger.",
    },
    {
      title: "Hepatic Encephalopathy & Cirrhosis",
      topicId: "connective-tissue-diseases",
      note: "The acquired face of hyperammonemia: liver failure with asterixis and somnolence, treated with the same lactulose-and-rifaximin ladder.",
    },
  ],
  crossLinks: [
    {
      subject: "Gastrointestinal & Hepatic Pathology",
      connection: "Cirrhosis and portosystemic shunting — the acquired hyperammonemia that produces hepatic encephalopathy (asterixis, somnolence).",
    },
    {
      subject: "Genetics",
      connection: "X-linked recessive inheritance — OTC deficiency's pedigree pattern (affected males, carrier females) among otherwise-autosomal metabolic disease.",
    },
    {
      subject: "Pharmacology",
      connection: "Lactulose and rifaximin — the gut-directed ammonia traps; benzoate/phenylbutyrate as alternate nitrogen excretion routes.",
    },
  ],
};
