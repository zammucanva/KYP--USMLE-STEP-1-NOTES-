import type { KypUsMLENote } from "../types";

// Biochemistry — Genetics II (G2).
// Source: First Aid 2026, Part 1 pdf 79, 80, 82 / book 57, 58, 60 (Modes of
// inheritance; Autosomal dominant/recessive disease lists; Mitochondrial
// diseases; Rett syndrome)

export const modesOfInheritance: KypUsMLENote = {
  id: "modes-of-inheritance",
  title: "Modes of Inheritance",
  subtitle:
    "Five pedigree patterns — autosomal dominant, autosomal recessive, X-linked recessive, X-linked dominant, and mitochondrial — read off one figure: who transmits, who is affected, and the two exam-discriminating rules (no male-to-male transmission; affected fathers give 100% of daughters and 0% of sons).",
  subject: "Biochemistry",
  system: "Section II · High-Yield General Principles — Genetics",
  pilotCategory: "Genetics — pedigree recognition and inheritance logic",
  difficulty: 3,
  readTime: 13,
  sourceRef:
    "First Aid 2026, Part 1 pp. 57, 58, 60 (modes of inheritance; mitochondrial diseases; Rett syndrome)",
  tags: [
    "autosomal dominant",
    "autosomal recessive",
    "X-linked recessive",
    "X-linked dominant",
    "mitochondrial inheritance",
    "pedigree analysis",
    "carrier frequency",
    "consanguinity",
    "male-to-male transmission",
    "heteroplasmy",
    "MELAS",
    "MERRF",
    "Leber hereditary optic neuropathy",
    "Rett syndrome",
    "MECP2",
    "hypophosphatemic rickets",
    "Alport syndrome",
  ],
  core: {
    what: "Autosomal dominant: often structural-gene defects, many generations with both males and females affected, often pleiotropic and variably expressive; one affected heterozygous parent gives each child a 50% chance. Autosomal recessive: often enzyme deficiencies, usually one generation, more severe with childhood presentation and increased risk in consanguineous families; two carrier parents give each child 25% affected / 50% carrier / 25% neither, and an unaffected sibling of an affected child has a 2/3 chance of being a carrier. X-linked recessive: sons of heterozygous mothers have a 50% chance, no male-to-male transmission, skips generations, more severe in males. X-linked dominant: transmitted through both parents; affected mothers give each child 50%; affected fathers give 100% of daughters and 0% of sons. Mitochondrial: transmitted only through the mother — all offspring of affected females may show signs, with variable expression due to heteroplasmy.",
    why: "This is the most pedigree-tested content in the book: every genetics vignette opens with a family history, and the five patterns are the answer key to it. The X-linked pair's two crisp rules — no male-to-male (recessive) and all-daughters-no-sons from affected fathers (dominant) — are the fastest discriminators on the exam, and the mitochondrial pattern anchors the MELAS/MERRF/Leber cluster and Rett's male-lethal X-dominant logic.",
    keyIdea: "Read any pedigree with three questions: (1) MALE-TO-MALE — present? Then it is autosomal (X-linked anything is excluded). (2) AFFECTED FATHER with affected daughters but no affected sons? X-linked dominant (100% of daughters, 0% of sons). (3) ONLY through the MOTHER, all offspring potentially affected, variable severity? Mitochondrial — heteroplasmy decides who expresses. Between the autosomal two, dominant crosses generations in a vertical line; recessive hides in carriers within one generation.",
  },
  mechanisms: [
    {
      id: "pedigree-decision-tree",
      title: "The pedigree decision tree — five patterns, three questions",
      context: "Reading a family history",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A pedigree shows affected individuals across generations",
            sublabel: "Input — the exam hands you a family tree and asks the mode.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Is there male-to-male transmission? If yes → AUTOSOMAL",
            sublabel: "Fathers pass Y, not X, to sons — X-linked modes are excluded on the spot.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Affected father → 100% of daughters, 0% of sons affected? If yes → X-LINKED DOMINANT",
            sublabel: "Daughters get the father's only X; sons get his Y.",
            variant: "process",
          },
          {
            id: "s3",
            label: "Only through the mother, all offspring may show signs? If yes → MITOCHONDRIAL",
            sublabel: "mtDNA passes in the ovum; fathers never transmit.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Autosomal: vertical (AD, every generation) vs horizontal (AR, one generation, carriers)",
            sublabel: "Output — AD: 50% per child of an affected heterozygote, often pleiotropic/variably expressive. AR: enzyme defects, ↑ consanguinity, unaffected sibling 2/3 carrier.",
            variant: "output",
          },
          {
            id: "o2",
            label: "X-linked recessive: sons of heterozygous mothers 50%, skips generations, no male-to-male",
            sublabel: "Output — commonly more severe in males; females usually must be homozygous.",
            variant: "output",
          },
          {
            id: "x1",
            label: "X-linked dominant examples: fragile X (atypical), Alport, hypophosphatemic rickets",
            sublabel: "Clinical — phosphate wasting at the proximal tubule → ricketslike presentation.",
            variant: "inhibit",
          },
          {
            id: "x2",
            label: "Mitochondrial examples: mitochondrial myopathies (MELAS, MERRF), Leber hereditary optic neuropathy",
            sublabel: "Clinical — variable expression in a population or even within a family due to heteroplasmy.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1" },
          { from: "trigger", to: "s2" },
          { from: "trigger", to: "s3" },
          { from: "s1", to: "o1", label: "autosomal" },
          { from: "s2", to: "o2", type: "inhibit", label: "if no → XLR" },
          { from: "s3", to: "x2", label: "mtDNA" },
          { from: "x1", to: "s2", label: "XLD examples" },
        ],
        caption:
          "Three questions sort every pedigree: male-to-male (→ autosomal), affected-father's-children (all daughters, no sons → X-linked dominant; otherwise XLR if no male-to-male), and mother-only transmission (→ mitochondrial). The autosomal pair then splits on generation span: AD vertical through many, AR horizontal in one.",
      },
    },
    {
      id: "heteroplasmy-threshold",
      title: "Heteroplasmy — why mitochondrial disease varies within one family",
      context: "Mitochondrial inheritance",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Caused by mutations in mtDNA — transmitted only through the mother",
            sublabel: "Input — the ovum carries the mitochondria (and their genomes) into every cell.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Cells hold a MIX of normal and mutated mtDNA (heteroplasmy)",
            sublabel: "Molecular — each mitochondrion and each cell has its own normal:mutated ratio.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Tissues with high energy requirements are preferentially affected (CNS, skeletal muscle)",
            sublabel: "Molecular — oxidative phosphorylation failure bites hardest where ATP demand is highest.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Variable expression in a population or even within a family — all offspring of affected females may show signs",
            sublabel: "Output — the bottleneck at oogenesis reshuffles each child's heteroplasmy ratio.",
            variant: "output",
          },
          {
            id: "x1",
            label: "MELAS: mitochondrial encephalomyopathy with lactic acidosis and strokelike episodes",
            sublabel: "Clinical — the named myopathy the exam quotes verbatim.",
            variant: "inhibit",
          },
          {
            id: "x2",
            label: "MERRF: myoclonic epilepsy with ragged red fibers — compensatory mitochondrial proliferation",
            sublabel: "Clinical — ragged red fibers on light microscopy; crystalline inclusions on electron microscopy.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1" },
          { from: "s1", to: "s2", label: "threshold effect" },
          { from: "s2", to: "o1" },
          { from: "x1", to: "s2", label: "high-ATD tissues" },
          { from: "x2", to: "o1", type: "inhibit", label: "compensatory proliferation" },
        ],
        caption:
          "Mitochondrial disease = mtDNA mutation + heteroplasmy: because each cell's normal:mutated ratio differs, expression varies between patients, siblings, and even tissues — and the highest-energy tissues (CNS, skeletal muscle) cross the threshold first. Leber hereditary optic neuropathy (complex I of the ETC) gives subacute bilateral vision loss in teens/young adults, males > females, often permanent.",
      },
    },
  ],
  blocks: [
    {
      kind: "text",
      title: "The five patterns — one figure, three questions",
      body: [
        "The source draws the five inheritance modes as five three-generation pedigrees, each with its Punnett square(s) beside it, and every exam pedigree question is one of these panels wearing a clinical story. The figure below rebuilds all five: autosomal dominant threading vertically through many generations with both sexes affected; autosomal recessive horizontal inside one generation with unaffected carrier parents; X-linked recessive with its carrier arrow on an unaffected mother and no male-to-male transmission; X-linked dominant with the affected-father pattern that stamps every daughter and no son; and mitochondrial passing only through the mother to all offspring.",
        "The Punnett squares carry the arithmetic. Autosomal dominant, one affected heterozygous parent (Aa) × unaffected (aa): each child 50% Aa. Autosomal recessive, two carriers (Aa × Aa): 25% AA, 50% Aa, 25% aa — the 25/50/25 rule the exam quotes generation after generation. X-linked squares show the mother's two X's against the father's X and Y: a carrier mother's sons are 50% affected (XY with her mutated X), her daughters 50% carriers; an affected father (X-mutated Y) gives his mutated X to 100% of daughters (all carriers or affected) and his Y to every son (0% affected).",
      ],
    },
    {
      kind: "visual",
      visualId: "inheritance-pedigrees",
      title: "The five pedigree panels with their Punnett squares",
      caption:
        "The source's pedigree figure rebuilt: five panels — Autosomal dominant (affected female × unaffected male across three generations; Punnett Aa × aa → 50% Aa), Autosomal recessive (two unaffected carrier parents, affected child in one generation; Punnett Aa × Aa → AA / Aa / Aa / aa, the 25/50/25 split), X-linked recessive (carrier arrow on the unaffected mother; sons of heterozygous mothers 50% affected, no male-to-male transmission, skips generations; two X×XY Punnett squares), X-linked dominant (the affected-father pattern — 100% of daughters and 0% of sons affected; affected mothers give each child 50%; two Punnett squares with the mutated-X column highlighted), and Mitochondrial inheritance (transmitted only through the mother; all offspring of affected females may show signs; variable expression due to heteroplasmy; no Punnett). Legend: open square = unaffected male, filled square = affected male, open circle = unaffected female, filled circle = affected female.",
      notice:
        "Scan any pedigree in figure order: vertical line of affected across generations → AD; horizontal cluster in one generation from unaffected parents → AR; affected males linked through unaffected carrier mothers, never father-to-son → XLR; affected father with ALL affected daughters and NO affected sons → XLD; affected mother with affected children of both sexes while affected fathers transmit nothing → mitochondrial.",
    },
    {
      kind: "table",
      title: "The disease lists — which side of the inheritance line each falls",
      intro: "The mode-specific example lists the source prints beside the pedigrees (book p. 58): recognition anchors for exam stems.",
      columns: ["Mode", "Source list"],
      rows: [
        ["Autosomal dominant diseases", "Achondroplasia, ADPKD, familial adenomatous polyposis, familial hypercholesterolemia, hereditary hemorrhagic telangiectasia (Osler-Weber-Rendu syndrome), hereditary spherocytosis, Huntington disease, Li-Fraumeni syndrome, Marfan syndrome, multiple endocrine neoplasias, myotonic muscular dystrophy, NF1 (von Recklinghausen disease), NF2, tuberous sclerosis, von Hippel-Lindau disease"],
        ["Autosomal recessive diseases", "Mostly enzyme defects: oculocutaneous albinism, phenylketonuria, cystic fibrosis, sickle cell disease, Wilson disease, sphingolipidoses (except Fabry disease), hemochromatosis, glycogen storage diseases, thalassemia, mucopolysaccharidoses (except Hunter syndrome), Friedreich ataxia, Kartagener syndrome, ARPKD"],
        ["X-linked recessive diseases", "Bruton agammaglobulinemia, Duchenne and Becker muscular dystrophies, Fabry disease, G6PD deficiency, hemophilia A and B, Hunter syndrome, Lesch-Nyhan syndrome, ocular albinism, OTC deficiency, Wiskott-Aldrich syndrome (covered with the muscular dystrophies)"],
      ],
      caption:
        "The two 'except' pairs are pure exam discriminations: Fabry is the sphingolipidosis that escaped to X-linked recessive; Hunter is the mucopolysaccharidosis that did. Note the structural-gene flavor of the dominant list (collagens, channels, tumors) vs the enzyme flavor of the recessive list.",
    },
    {
      kind: "table",
      title: "The rule card — per-mode arithmetic",
      intro: "What each mating produces, in the source's own numbers.",
      columns: ["Mode", "The rule", "Exam discriminators"],
      rows: [
        ["Autosomal dominant", "1 affected (heterozygous) parent → each child 50% chance of being affected", "Many generations, both sexes; often pleiotropic and variably expressive; family history crucial to diagnosis"],
        ["Autosomal recessive", "2 carrier parents → 25% affected, 50% carrier, 25% neither; unaffected sibling of affected child = 2/3 carrier", "Usually 1 generation; more severe than dominant, childhood presentation; ↑ risk in consanguineous families"],
        ["X-linked recessive", "Sons of heterozygous mothers = 50% affected", "No male-to-male transmission; skips generations; more severe in males; females usually must be homozygous"],
        ["X-linked dominant", "Affected mother → each child 50%; affected father → 100% of daughters, 0% of sons", "Transmitted through both parents; examples: fragile X (atypical), Alport, hypophosphatemic rickets (phosphate wasting at proximal tubule → ricketslike presentation)"],
        ["Mitochondrial", "Transmitted only through the mother; all offspring of affected females may show signs", "Variable expression in a population or even within a family due to heteroplasmy; mutations in mtDNA"],
      ],
      caption:
        "Memorize the two father rules cold: no affected father ever passes XLR to a son, and an affected father passes XLD to every daughter and no son. Those two lines decide most X-linked stems instantly.",
    },
    {
      kind: "text",
      title: "Mitochondrial diseases — the mother-only module",
      body: [
        "Mitochondrial diseases are rare disorders arising secondarily to failure in oxidative phosphorylation, and the tissues that suffer first are those with the highest energy requirements — the CNS and skeletal muscle. The named pair is MELAS (mitochondrial encephalomyopathy with lactic acidosis and strokelike episodes) and MERRF (myoclonic epilepsy with ragged red fibers); the muscle biopsy findings are the histology hook — ragged red fibers on light microscopy due to compensatory proliferation of mitochondria, and mitochondrial crystalline inclusions on electron microscopy.",
        "Leber hereditary optic neuropathy is the third named disease: mutations in complex I of the electron transport chain cause neuronal death in the retina and optic nerve, producing subacute bilateral vision loss in teens and young adults (males more often than females). The loss is usually permanent and may be accompanied by neurologic dysfunction — tremors, or a multiple sclerosis–like illness. Its heteroplasmy explains why severity varies even among maternal relatives.",
      ],
    },
    {
      kind: "text",
      title: "Rett syndrome — the male-lethal X exception",
      body: [
        "Rett syndrome is a sporadic disorder caused by a de novo mutation of MECP2 on the X chromosome. It is seen mostly in females because it is embryonically lethal in males — the same male-lethal logic the exam applies to X-linked dominant disease generally, here in its purest form: the affected boys never arrive, so the pedigree shows only affected girls.",
        "The clinical sequence is unmistakable: initial normal development for 6–18 months, followed by regression (the source's own pun: 'retturn') in motor, verbal, and cognitive abilities, with ataxia, seizures, scoliosis, and the stereotypic hand-wringing that stamps the vignette. Sporadic + de novo + regression after normal early months + hand-wringing is the four-feature signature.",
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title: "How the exam asks these pages",
      body: "Five recurring shapes: (1) the pedigree-mode stem — apply the three questions (male-to-male? affected father's children? mother-only?); (2) the arithmetic stem — 25/50/25 from two carriers, 2/3 carrier risk for an unaffected sibling, 50% per child in AD; (3) the X-linked father rules — no male-to-male (XLR), 100% daughters / 0% sons (XLD); (4) the mitochondrial vignette — mother-only transmission with variable severity, MELAS/MERRF/Leber features, ragged red fibers; (5) the Rett stem — de novo MECP2, regression after 6–18 normal months, hand-wringing, lethal in males.",
    },
    {
      kind: "callout",
      variant: "why",
      title: "Why the two father rules are absolute",
      body: "Fathers give sons a Y, never an X — so an X-linked mutation can never travel father-to-son, making male-to-male transmission the single fastest pedigree killer for every X-linked mode. And an affected father has exactly one X, which he gives to every daughter and no son — so in X-linked dominant disease his daughters are all affected (each inherits the mutated X) and his sons all escape (they inherit his Y). Two meiotic facts, two instant answers; every X-linked pedigree question is testing whether you can deploy them at sight.",
    },
  ],
  clinical: [
    {
      kind: "text",
      title: "Pedigrees at the bedside — counseling with the rules",
      body: [
        "The rules are counseling arithmetic. An autosomal recessive couple (both carriers) is quoted 25% affected, 50% carrier, 25% unaffected per pregnancy — and the subtle corollary for the unaffected sibling of an affected child: with the disease ruled out, their carrier probability is 2 out of 3, not 1 in 2, because the AA and Aa categories collapse into 'unaffected'. Consanguinity raises the risk of a shared recessive allele and flags the pedigree on sight.",
        "The X-linked rules drive prenatal and carrier conversations: a carrier mother's sons face 50% each; an X-linked dominant affected father can be told categorically that every daughter will inherit the mutation and no son will. For mitochondrial disease, counseling is probabilistic in a unique way — an affected mother's heteroplasmy is reshuffled in each child, so all offspring may show signs but severity cannot be predicted from the mother's own course.",
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A pedigree shows affected individuals in every generation, males and females equally, with an affected father who has affected children of both sexes.",
        discriminator: "Male-to-male transmission present",
        concept: "Autosomal dominant",
        answer: "Autosomal dominant — often defects in structural genes; often pleiotropic and variably expressive; with one affected (heterozygous) parent, each child has a 50% chance of being affected",
      },
      {
        stem: "Two healthy parents (first cousins) have two children with the same severe enzyme-deficiency disease; no one else in the family is affected.",
        discriminator: "Consanguinity + one generation + unaffected parents",
        concept: "Autosomal recessive",
        answer: "Autosomal recessive — 25% affected / 50% carrier / 25% neither per child; the unaffected sibling has a 2/3 probability of being a carrier; ↑ risk in consanguineous families",
      },
      {
        stem: "A pedigree shows affected males in multiple generations, each linked to the disease through an unaffected mother or daughter; no affected father ever has an affected son.",
        discriminator: "No male-to-male transmission",
        concept: "X-linked recessive",
        answer: "X-linked recessive — sons of heterozygous mothers have a 50% chance; skips generations; commonly more severe in males; females usually must be homozygous to be affected",
      },
      {
        stem: "An affected father has four daughters, all affected, and two sons, both unaffected; an affected mother in the same pedigree has affected children of both sexes.",
        discriminator: "Affected father → 100% daughters, 0% sons",
        concept: "X-linked dominant",
        answer: "X-linked dominant — transmitted through both parents; children of affected mothers each have a 50% chance; examples include fragile X (atypical), Alport syndrome, hypophosphatemic rickets",
      },
      {
        stem: "A woman with a mitochondrial myopathy has variable-affected children of both sexes; her affected brother has no affected children.",
        discriminator: "Mother-only transmission + variable severity",
        concept: "Mitochondrial inheritance",
        answer: "Mitochondrial inheritance — transmitted only through the mother; all offspring of affected females may show signs; variable expression due to heteroplasmy; mutations in mtDNA",
      },
    ],
    traps: [
      {
        a: "X-linked recessive",
        b: "X-linked dominant",
        whyConfused: "Both are X-linked and both can affect both sexes.",
        keyDifference: "XLR: no male-to-male transmission, skips generations, sons of carrier mothers 50%. XLD: transmitted through both parents — an affected father passes it to 100% of daughters and 0% of sons; affected mothers give each child 50%.",
        clue: "An affected FATHER decides it: affected daughters only → XLD; affected father with affected son → not X-linked at all (must be autosomal).",
      },
      {
        a: "2/3 carrier risk",
        b: "1/2 carrier risk",
        whyConfused: "Both are quoted to healthy relatives of AR patients.",
        keyDifference: "An unaffected individual with an affected sibling has a 2/3 probability of being a carrier (the affected aa category is excluded, leaving AA:Aa:Aa = 1:2). 1/2 applies only when a parent is a known carrier and the other's status is irrelevant to the question.",
        clue: "'Unaffected SIBLING of an affected child' → 2/3; 'child of a carrier' → 1/2.",
      },
      {
        a: "Mitochondrial inheritance",
        b: "Autosomal dominant with variable expressivity",
        whyConfused: "Both can produce affected children of both sexes with variable severity across a family.",
        keyDifference: "Mitochondrial transmits ONLY through the mother — affected fathers have no affected children; AD transmits through either parent with a 50% per-child risk.",
        clue: "Check the affected-father branch: any affected child of an affected father rules out mtDNA.",
      },
      {
        a: "Rett syndrome",
        b: "Autism spectrum disorder",
        whyConfused: "Both present as developmental regression with hand stereotypies in young girls.",
        keyDifference: "Rett is a sporadic de novo MECP2 mutation on X (embryonically lethal in males) with regression after 6–18 months of NORMAL development, plus ataxia, seizures, scoliosis, and stereotypic HAND-WRINGERING.",
        clue: "'Normal for 6–18 months, then regression' + hand-wringing → Rett; MECP2 seals it.",
      },
    ],
    pivots: [
      {
        lookAlike: "An affected-father pedigree offering AD, XLD, XLR, and mitochondrial",
        differentiator: "Which children of the affected father are affected",
        correctPath: "All daughters, no sons → X-linked dominant; both sons and daughters → autosomal dominant (male-to-male present); affected father with NO affected children → mitochondrial (mother-only) — recheck which parent is affected.",
      },
      {
        lookAlike: "A 'variable severity within one family' stem offering heteroplasmy, expressivity, and penetrance",
        differentiator: "Transmission pattern + which gene compartment",
        correctPath: "Mother-only with variable sibling severity → heteroplasmy (mtDNA); vertical 50%-per-generation with severity varying → variable expressivity (AD); some carriers silent → incomplete penetrance.",
      },
    ],
    miniCase: {
      vignette:
        "A 26-year-old man is evaluated after the sudden onset of painless vision loss in his right eye; over the following two months the left eye declines symmetrically. Ophthalmologic examination shows optic disc pallor with circumpapillary telangiectatic microangiopathy. His maternal uncle lost vision at age 25 and his mother has mild night-blindness; his maternal grandmother had 'poor eyesight.' His father and both paternal relatives have normal vision. The patient's two sisters are asymptomatic, and his older brother is unaffected. Genetic testing shows a mutation in a mitochondrial gene encoding a component of electron transport complex I.",
      question: "Which of the following best explains the inheritance pattern in this family?",
      options: [
        {
          label: "A",
          correct: true,
          text: "Mitochondrial (maternal) inheritance with variable expression due to heteroplasmy",
          why: "Correct. Leber hereditary optic neuropathy: mutations in complex I of the ETC → neuronal death in retina and optic nerve → subacute bilateral vision loss in teens/young adults (males > females). Transmitted only through the mother — the affected maternal line (mother, uncle, grandmother) with an unaffected father is the classic mtDNA pedigree; heteroplasmy explains why the mother is only mildly affected while the uncle lost vision.",
        },
        {
          label: "B",
          text: "Autosomal dominant with incomplete penetrance",
          why: "An AD pedigree would show vertical transmission through EITHER parent with a 50% per-child risk — but the father's side is entirely unaffected and the severity pattern (mild mother, blind uncle) follows the maternal line only; penetrance does not sort by parental sex this cleanly.",
        },
        {
          label: "C",
          text: "X-linked recessive inheritance with skewed inactivation",
          why: "XLR explains affected males linked through unaffected females — but it requires NO male-to-male transmission and typically spares transmission through affected males, while here severity tracks the maternal line including affected females; complex I is mitochondrial, not nuclear.",
        },
        {
          label: "D",
          text: "X-linked dominant inheritance, male-lethal",
          why: "Male-lethal XLD (the Rett/MECP2 logic) predicts mostly affected FEMALES — but the proband and his uncle are affected males, and the father-transmission rule (100% of daughters) is not in evidence; the complex I mutation is the decisive exclusion.",
        },
        {
          label: "E",
          text: "Autosomal recessive inheritance with pseudodominance from consanguinity",
          why: "Pseudodominance mimics vertical transmission via repeated carrier matings, but the mother-to-all-children potential, the complex I mutation, and the strictly maternal disease line point to mtDNA — and no consanguinity is described.",
        },
      ],
      reasoning:
        "The answer path is the three-question tree on the family history: the disease tracks the MOTHER's line only (mother, maternal uncle, maternal grandmother), the father's line is clean, and severity varies wildly between relatives — that is the mitochondrial pattern with heteroplasmy. The named disease matches: Leber hereditary optic neuropathy, mutations in complex I of the ETC, subacute bilateral vision loss in teens/young adults, males > females, usually permanent.",
    },
  },
  mnemonics: [
    {
      code: "“X-Linked fathers: sons get the Y, daughters get the disease (XLD); sons never get dad's X (no male-to-male in XLR)”",
      meaning: "An affected father passes his Y to every son (0% affected in XLD, impossible transmission in XLR) and his only X to every daughter (100% affected in XLD).",
      memorizes: "The two X-linked father rules",
      whenToUse: "Any pedigree with an affected father.",
      clinical: "Affected father + all affected daughters, no affected sons → X-linked dominant; affected father with affected son → autosomal (male-to-male).",
    },
    {
      code: "“Mito = Mom's”",
      meaning: "Mitochondrial DNA is transmitted only through the mother — all offspring of affected females may show signs; fathers never transmit.",
      memorizes: "The mitochondrial transmission rule",
      whenToUse: "Mother-only pedigrees with variable severity.",
      clinical: "MELAS, MERRF, Leber hereditary optic neuropathy; variable expression in a population or even within a family due to heteroplasmy.",
    },
    {
      code: "“Rett 'retturns': normal 6–18 months, then everything comes back — with hand-wringing”",
      meaning: "Rett syndrome (de novo MECP2 on X, embryonically lethal in males) shows initial normal development for 6–18 months followed by regression ('retturn') in motor, verbal, and cognitive abilities, plus ataxia, seizures, scoliosis, and stereotypic hand-wringing.",
      memorizes: "The Rett syndrome sequence and findings",
      whenToUse: "Regression-in-a-girl stems.",
      clinical: "Sporadic, mostly females; hand-wringing distinguishes it from autism and other developmental regressions.",
    },
  ],
  rapidReview: {
    s30: [
      "AD: structural genes, many generations, both sexes, 50% per child of an affected heterozygote; often pleiotropic + variably expressive.",
      "AR: enzyme deficiencies, one generation, childhood, ↑ consanguinity; 25/50/25 from two carriers; unaffected sibling = 2/3 carrier.",
      "XLR: sons of heterozygous mothers 50%; no male-to-male transmission; skips generations; worse in males.",
      "XLD: both parents transmit; affected mother 50% per child; affected father 100% daughters, 0% sons.",
      "XLD examples: fragile X (atypical), Alport, hypophosphatemic rickets (proximal-tubule phosphate wasting → ricketslike presentation).",
      "Mitochondrial: only through the mother; all offspring may show signs; variable expression due to heteroplasmy; mtDNA.",
      "MELAS (lactic acidosis + strokelike episodes), MERRF (myoclonic epilepsy + ragged red fibers), Leber (complex I, subacute bilateral vision loss, males > females).",
      "Rett: sporadic de novo MECP2 on X, male-lethal; normal 6–18 months → regression, ataxia, seizures, scoliosis, hand-wringing.",
    ],
    m3: [
      "Ragged red fibers = compensatory proliferation of mitochondria on light microscopy; EM shows crystalline inclusions.",
      "Mitochondrial diseases hit high-energy tissues preferentially: CNS and skeletal muscle (oxidative phosphorylation failure).",
      "Leber may accompany neurologic dysfunction — tremors, multiple sclerosis–like illness; usually permanent vision loss.",
      "Fabry is the sphingolipidosis that is X-linked (all others AR); Hunter is the MPS that is X-linked.",
      "Females with Turner syndrome (45,XO) are more likely to express an X-linked recessive disorder (covered with lyonization in the Muscular Dystrophies note).",
      "Punnett arithmetic is testable directly: Aa × aa → 50%; Aa × Aa → 25/50/25; XXcarrier × XY → 50% of sons affected.",
    ],
    m10: [
      "The 2/3 carrier rule works because 'unaffected sibling' excludes the aa square, leaving AA:Aa:Aa = 1:2 among the unaffected.",
      "Male-lethal XLD logic (Rett, incontinentia pigmenti class) explains pedigrees with affected girls and lost male pregnancies.",
      "Pseudodominance — an AR disease appearing vertical after consanguineous carrier matings — is the classic AD-mimic trap.",
      "Heteroplasmy is reshuffled at the ooplasmic bottleneck — siblings from the same mother can have wildly different mutant loads.",
      "AD 'structural genes' flavor: collagen (osteogenesis imperfecta), channels, tumors (Li-Fraumeni, VHL, MEN); AR 'enzyme' flavor: PKU, CF, Wilson.",
      "An affected father with an affected SON ends all X-linked debate in one glance — it must be autosomal.",
    ],
  },
  recall: [
    {
      q: "Give the AD inheritance rules in the source's terms.",
      a: "Often due to defects in structural genes; many generations, both males and females affected; often pleiotropic and variably expressive; family history crucial to diagnosis; with one affected (heterozygous) parent, each child has a 50% chance of being affected.",
    },
    {
      q: "Give the AR inheritance rules, including the sibling-carrier arithmetic.",
      a: "Often due to enzyme deficiencies; usually seen in only 1 generation; commonly more severe than dominant disorders, childhood presentation; ↑ risk in consanguineous families; with 2 carrier parents, each child has a 25% chance of being affected, 50% of being a carrier, 25% of neither; an unaffected individual with an affected sibling has a 2/3 probability of being a carrier.",
    },
    {
      q: "State the two X-linked father rules.",
      a: "XLR: no male-to-male transmission — sons of heterozygous mothers have a 50% chance of being affected, and the disease skips generations. XLD: 100% of daughters and 0% of sons of affected fathers will be affected; children of affected mothers each have a 50% chance.",
    },
    {
      q: "Name three X-linked dominant example diseases from the source.",
      a: "Fragile X syndrome (atypical X-linked inheritance), Alport syndrome, hypophosphatemic rickets (also called X-linked hypophosphatemia) — phosphate wasting at the proximal tubule → ricketslike presentation.",
    },
    {
      q: "Why does mitochondrial disease vary within one family, and which tissues suffer first?",
      a: "Variable expression in a population or even within a family due to heteroplasmy (normal + mutated mtDNA mix). Rare disorders arising 2° to failure in oxidative phosphorylation — tissues with high energy requirements are preferentially affected (eg, CNS, skeletal muscle).",
    },
    {
      q: "Describe the Rett syndrome presentation and its genetics.",
      a: "Sporadic disorder caused by de novo mutation of MECP2 on the X chromosome; seen mostly in females, embryonically lethal in males. Initial normal development (6–18 months) followed by regression ('retturn') in motor, verbal, and cognitive abilities; ataxia; seizures; scoliosis; stereotypic hand-wringing.",
    },
  ],
  related: [
    {
      title: "Genetic Terminology & Population Genetics",
      note: "Heteroplasmy, penetrance, expressivity, and anticipation are defined here — the vocabulary the pedigree rules presuppose.",
      topicId: "genetic-terms-popgen",
    },
    {
      title: "Muscular Dystrophies",
      note: "The X-linked recessive disease list and lyonization live on that page — including why Turner 45,XO females and skewed inactivation can unmask XLR disease.",
      topicId: "muscular-dystrophies",
    },
    {
      title: "Trinucleotide Repeat Expansion Diseases",
      note: "Fragile X is the source's own atypical X-linked example — the same disease returns as a repeat-expansion, anticipation-driven entity.",
      topicId: "trinucleotide-repeat-diseases",
    },
    {
      title: "Disorders of Imprinting",
      note: "The parent-of-origin exception to simple Mendelian modes — PWS/AS logic complements the X-linked father rules.",
      topicId: "imprinting-disorders",
    },
  ],
  crossLinks: [
    {
      subject: "Genetics — pedigree analysis",
      connection: "Every inheritance-pattern question in every organ-system chapter resolves through these five panels and their Punnett arithmetic.",
    },
    {
      subject: "Neurology",
      connection: "MELAS strokelike episodes, MERRF myoclonic epilepsy, and Leber optic neuropathy present as neurology vignettes with maternal pedigrees.",
    },
    {
      subject: "Pediatrics",
      connection: "Rett regression, AR childhood enzyme diseases, and consanguinity counseling are pediatric clinical territory.",
    },
  ],
};
