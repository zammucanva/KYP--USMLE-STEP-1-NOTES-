import type { KypUsMLENote } from "../types";

// Biochemistry — Nutrition (N-batch, book order 6/8).
// Source: First Aid 2026, Part 1 pdf 90–91 / book 68–69 (vitamin E:
// tocopherol/tocotrienol; vitamin K: phytomenadione/phylloquinone/
// menaquinone, carboxylation cycle, warfarin, neonatal hemorrhage)

export const vitaminsEK: KypUsMLENote = {
  id: "vitamins-e-k",
  title: "Vitamins E & K",
  subtitle:
    "Tocopherol, the lipid-soluble antioxidant whose deficiency mimics B12 in the cord without touching the marrow — and phytomenadione, the Koagulation vitamin whose epoxide-reductase cycle warfarin jams and whose absence bleeds newborns.",
  subject: "Biochemistry",
  system: "Section II · High-Yield General Principles — Nutrition",
  pilotCategory: "Nutrition — fat-soluble vitamins",
  difficulty: 1,
  readTime: 9,
  sourceRef:
    "First Aid 2026, Part 1 pp. 68–69 (vitamin E: antioxidant, deficiency mimics Friedreich ataxia; vitamin K: carboxylation cycle, warfarin, neonatal hemorrhage)",
  tags: [
    "vitamin E",
    "tocopherol",
    "tocotrienol",
    "antioxidant",
    "hemolytic anemia",
    "acanthocytosis",
    "posterior columns",
    "spinocerebellar",
    "Friedreich ataxia",
    "enterocolitis",
    "vitamin K",
    "phytomenadione",
    "phylloquinone",
    "menaquinone",
    "epoxide reductase",
    "gamma-carboxylation",
    "glutamic acid",
    "warfarin",
    "factor II",
    "factor VII",
    "factor IX",
    "factor X",
    "protein C",
    "protein S",
    "neonatal hemorrhage",
    "PT",
    "aPTT",
    "breast milk",
  ],
  core: {
    what: "Vitamin E includes tocopherol and tocotrienol: an antioxidant protecting RBCs and neuronal membranes from free radical damage. Deficiency: hemolytic anemia, acanthocytosis, muscle weakness, demyelination of posterior columns (↓proprioception and vibration sensation) and spinocerebellar tract (ataxia) — closely mimics Friedreich ataxia; neurologic presentation may appear similar to vitamin B12 deficiency but without megaloblastic anemia, hypersegmented neutrophils, or ↑serum methylmalonic acid. Excess: risk of enterocolitis in infants; high-dose supplementation may alter metabolism of vitamin K–dependent proteins (factors II, VII, IX, X; protein C/S) → enhanced anticoagulant effects of warfarin. Vitamin K includes phytomenadione, phylloquinone, phytonadione, menaquinone: activated by epoxide reductase to the reduced form, a cofactor for the γ-carboxylation of glutamic acid residues on proteins required for blood clotting; synthesized by intestinal microbiota, dietary sources leafy greens. Necessary for maturation of clotting factors II, VII, IX, X, and proteins C and S; warfarin inhibits vitamin K–dependent synthesis. Deficiency: neonatal hemorrhage with ↑PT and ↑aPTT but normal bleeding time (sterile intestines); prolonged broad-spectrum antibiotics or hepatocellular disease; not in breast milk — vitamin K injection at birth prevents hemorrhagic disease of the newborn.",
    why: "E is the exam's favorite neuro-mimic (B12-like cord findings with a negative smear) and K is the coagulation chapter's nutritional anchor — the warfarin mechanism, the neonatal injection, and the PT/aPTT pattern all trace to one γ-carboxylation cycle. Together they close the fat-soluble quartet with the two most drug-connected vitamins in the book.",
    keyIdea: "E = membrane ANTIOXIDANT — deficiency oxidizes RBC membranes (hemolysis + acanthocytes) and myelin (posterior columns + spinocerebellar → Friedreich mimic), with the B12-negative lab set (no megaloblastosis, no ↑MMA). K = the γ-carboxylation cofactor — epoxide reductase recycles it; warfarin blocks the reductase (factors II, VII, IX, X, proteins C and S never mature → ↑PT, ↑aPTT, normal bleeding time); newborns have sterile guts and breast milk has no K — hence the birth injection.",
  },
  mechanisms: [
    {
      id: "vitamin-k-carboxylation-warfarin",
      title: "Vitamin K — the γ-carboxylation cycle warfarin jams",
      context: "Clotting factor maturation; warfarin therapy; neonatal period",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Vitamin K (phytomenadione/phylloquinone from leafy greens, menaquinone from intestinal microbiota)",
            sublabel: "Input — enters the cycle in its oxidized (quinone) form.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Epoxide reductase activates vitamin K to the REDUCED form — the active cofactor",
            sublabel: "Process — the recycling enzyme; the warfarin target.",
            variant: "process",
          },
          {
            id: "s2",
            label: "γ-carboxylation of glutamic acid residues on clotting proteins: factors II, VII, IX, X, proteins C and S",
            sublabel: "Process — Gla residues let the factors bind calcium and anchor to phospholipid surfaces.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Mature, functional clotting factors — normal PT and aPTT",
            sublabel: "Output — K is for Koagulation.",
            variant: "output",
          },
          {
            id: "x1",
            label: "Warfarin inhibits epoxide reductase → no reduced K → factors II, VII, IX, X, protein C/S stay immature",
            sublabel: "Inhibitor — ↑PT (VII, shortest half-life, first to fall) then ↑aPTT; the drug that owns this cycle.",
            variant: "inhibit",
          },
          {
            id: "x2",
            label: "Neonatal deficiency: sterile intestines (no microbiota yet) + vitamin K not in breast milk → hemorrhagic disease of the newborn",
            sublabel: "Clinical — ↑PT and ↑aPTT but NORMAL bleeding time; prevented by vitamin K injection at birth.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "epoxide reductase" },
          { from: "s1", to: "s2", label: "reduced K cofactor" },
          { from: "s2", to: "o1", label: "Gla residues" },
          { from: "x1", to: "s1", type: "inhibit", label: "warfarin ⊟" },
          { from: "x2", to: "trigger", type: "inhibit", label: "no supply" },
        ],
        caption:
          "Vitamin K is recycled, not consumed: oxidized K is reduced by epoxide reductase, the reduced cofactor drives γ-carboxylation of glutamic acid on factors II, VII, IX, X, and proteins C and S, and the spent epoxide loops back for another reduction. Warfarin jams the reductase — the entire cascade's K-dependent arm goes immature, with factor VII (shortest half-life) dragging the PT up first. The newborn starts with sterile intestines and breast milk that carries no K: the same cycle fails by supply rather than by blockade, which is why every neonate gets the vitamin K injection at birth.",
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "vitamin-k-carboxylation-cycle",
      title: "The vitamin K cycle — activation, carboxylation, recycling",
      caption:
        "The source's cycle adapted as a flow: Vitamin K (oxidized) → epoxide reductase → Vitamin K (reduced, ACTIVE cofactor) → γ-carboxylation of glutamic acid residues on clotting proteins (factors II, VII, IX, X; proteins C and S) → Vitamin K 2,3-epoxide recycled back to the reductase — with warfarin's ⊟ block on epoxide reductase at the activation arrow, and the deficiency strip (neonatal ↑PT ↑aPTT with normal bleeding time, prolonged broad-spectrum antibiotics, hepatocellular disease, the 'breast-fed infants Don't Know about vitamins D and K' line).",
      notice:
        "Follow the loop once and every exam fact falls out: the ENZYME warfarin inhibits (epoxide reductase — not the carboxylase), the PROTEINS that need it (II, VII, IX, X + C and S — the coagulation cascade's contact-surface anchors), and the LAB pattern when it fails (↑PT and ↑aPTT with NORMAL bleeding time — platelets are not K-dependent). Warfarin blocks activation; neonatal sterility blocks supply — same cycle, two failure modes.",
    },
    {
      kind: "text",
      title: "Vitamin E — the antioxidant with a B12 costume",
      body: [
        "Vitamin E (tocopherol, tocotrienol) is the lipid-phase antioxidant: it protects RBCs and neuronal membranes from free radical damage. Its deficiency picture is therefore two membranes failing — hemolytic anemia with acanthocytosis (spurred RBCs) from oxidized red-cell membranes, and demyelination of the posterior columns (↓proprioception and vibration sensation) with spinocerebellar tract involvement (ataxia), plus muscle weakness. The cord picture closely mimics Friedreich ataxia — the source's own framing.",
        "The exam's sharpest discrimination is the B12 look-alike: vitamin E's neurologic presentation may appear similar to vitamin B12 deficiency, but WITHOUT megaloblastic anemia, hypersegmented neutrophils, or ↑serum methylmalonic acid — the smear and the MMA level do the sorting. In the other dose direction, excess carries a risk of enterocolitis in infants, and high-dose supplementation may alter the metabolism of vitamin K–dependent proteins (factors II, VII, IX, X; protein C/S), enhancing the anticoagulant effect of warfarin — the E-to-K drug interaction both fat-soluble vitamins share.",
      ],
    },
    {
      kind: "table",
      title: "E vs K — cofactor, deficiency, drug connection",
      intro: "The two fat-soluble partners side by side (book pp. 68–69).",
      columns: ["Feature", "Vitamin E", "Vitamin K"],
      rows: [
        ["Forms", "Tocopherol, tocotrienol", "Phytomenadione, phylloquinone, phytonadione, menaquinone"],
        ["Role", "Antioxidant — protects RBCs and neuronal membranes from free radical damage", "Activated by epoxide reductase → reduced form is cofactor for γ-carboxylation of glutamic acid on clotting proteins"],
        ["Sources", "Oils, nuts, seeds (fat-soluble absorption chain)", "Intestinal microbiota + leafy greens"],
        ["Deficiency", "Hemolytic anemia, acanthocytosis, muscle weakness, posterior column + spinocerebellar demyelination — mimics Friedreich ataxia", "Neonatal hemorrhage: ↑PT and ↑aPTT, NORMAL bleeding time; also prolonged broad-spectrum antibiotics, hepatocellular disease"],
        ["Drug connection", "High-dose E alters vitamin K–dependent protein metabolism → enhances warfarin anticoagulation", "Warfarin inhibits vitamin K–dependent synthesis of factors II, VII, IX, X, proteins C and S"],
        ["Excess", "Enterocolitis risk in infants", "Not a classic toxicity — the cycle is regenerative"],
        ["Newborn link", "—", "Not in breast milk; sterile intestines; vitamin K injection at birth prevents hemorrhagic disease"],
      ],
      caption:
        "Sort by system: E deficiency is blood-plus-cord (membrane oxidation); K deficiency is pure coagulation (immature factors). Both interact with warfarin — E potentiates it indirectly, K repletion overcomes it (and is why warfarin patients keep a steady greens intake, not a zero-K diet).",
    },
    {
      kind: "callout",
      variant: "why",
      title: "Why PT rises first in vitamin K failure",
      body: "When the γ-carboxylation cycle fails — warfarin, sterile newborn gut, antibiotic-killed microbiota, hepatocellular disease — all K-dependent factors fall together, but factor VII has the shortest half-life (~6 hours). The PT (extrinsic, VII-driven) lengthens before the aPTT joins it; platelet count and bleeding time stay normal because platelets are not K-dependent. That lab triad — ↑PT first, then ↑aPTT, normal bleeding time — is the fingerprint of the K cycle failing at any age, from the day-old newborn to the over-anticoagulated warfarin patient.",
    },
    {
      kind: "callout",
      variant: "exam",
      title: "How the exam asks this page",
      body: "Four recurring shapes: (1) the neuro-mimic stem — neuropathy/ataxia with loss of vibration and proprioception BUT no macrocytosis, no hypersegmented neutrophils, no ↑MMA → vitamin E (and 'closely mimics Friedreich ataxia' is often an answer choice); (2) the newborn bleed stem — day 3-5 ecchymoses/GI bleeding with ↑PT, ↑aPTT, normal bleeding time and normal platelets → hemorrhagic disease of the newborn (missed vitamin K injection, exclusive breastfeeding); (3) the warfarin stem — which enzyme (epoxide reductase), which factors (II, VII, IX, X, C, S), why PT first (VII half-life); (4) the antibiotic/lever stem — prolonged broad-spectrum antibiotics → microbiota K supply lost → late coagulopathy; high-dose vitamin E → enhanced warfarin effect.",
    },
  ],
  clinical: [
    {
      kind: "text",
      title: "The two failure modes of the K cycle at the bedside",
      body: [
        "Newborn hemorrhagic disease is supply failure: neonates have sterile intestines (no menaquinone yet), breast milk carries essentially no vitamin K — 'breast-fed infants Don't Know about vitamins D and K' — and the delivery passes almost no K across the placenta. Bleeding class appears in the first week (circumcision site, GI, umbilical, even intracranial), with the lab triad ↑PT/↑aPTT/normal bleeding time. The vitamin K injection at birth prevents it — one of the highest-yield-per-second interventions in medicine.",
        "Adult K failure is either blockade or supply: warfarin (epoxide reductase inhibition — intentional), prolonged broad-spectrum antibiotics (microbiota supply lost), cholestystaxis/malabsorption (the fat-soluble chain from the fundamentals page), and hepatocellular disease (the liver both stores K and makes the factors). Vitamin E enters the same story from the side: high-dose supplementation alters vitamin K–dependent protein metabolism and enhances warfarin's anticoagulant effects — a supplement-drug interaction the exam tests directly, and the reason warfarin patients are counseled to keep vitamin E modest and greens intake STEADY rather than avoided.",
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 5-year-old with chronic cholestasis and fat malabsorption develops loss of proprioception and vibration, an ataxic gait, and a mild hemolytic anemia; smear shows spurred red cells; MCV and methylmalonic acid are normal.",
        discriminator: "Cord signs + acanthocytosis WITHOUT megaloblastosis or ↑MMA",
        concept: "Vitamin E deficiency",
        answer: "Hemolytic anemia, acanthocytosis, muscle weakness, demyelination of posterior columns and spinocerebellar tract — closely mimics Friedreich ataxia; neurologically like B12 but WITHOUT megaloblastic anemia, hypersegmented neutrophils, or ↑methylmalonic acid",
      },
      {
        stem: "A 5-day-old exclusively breastfed infant, born at home with no medications, has oozing from the umbilical stump and bloody stools; PT and aPTT are prolonged, bleeding time and platelets normal.",
        discriminator: "Newborn + ↑PT/↑aPTT + normal bleeding time",
        concept: "Hemorrhagic disease of the newborn — vitamin K deficiency",
        answer: "Neonates have sterile intestines and are unable to synthesize vitamin K; it is not in breast milk — vitamin K injection at birth prevents it (normal PT/aPTT after parenteral K here)",
      },
      {
        stem: "A patient's warfarin effect rises sharply after she starts a high-dose vitamin E supplement.",
        discriminator: "Vitamin E enhancing warfarin",
        concept: "E-to-K interaction",
        answer: "High-dose vitamin E supplementation may alter metabolism of vitamin K–dependent proteins (factors II, VII, IX, X; protein C/S) → enhanced anticoagulant effects of warfarin",
      },
      {
        stem: "An elderly patient on 3 weeks of broad-spectrum antibiotics develops epistaxis and an elevated PT.",
        discriminator: "Antibiotics → microbiota K supply lost",
        concept: "Acquired vitamin K deficiency",
        answer: "Vitamin K is synthesized by intestinal microbiota; prolonged use of broad-spectrum antibiotics removes the supply — can also occur with hepatocellular disease (impaired factor synthesis and activation)",
      },
    ],
    traps: [
      {
        a: "Vitamin E deficiency",
        b: "Vitamin B12 deficiency",
        whyConfused: "Both: posterior column + spinocerebellar demyelination.",
        keyDifference: "B12: megaloblastic anemia, hypersegmented neutrophils, ↑methylmalonic acid. E: hemolytic anemia with acanthocytosis, normal MCV, normal MMA.",
        clue: "The smear and the MMA level sort the two cord mimics.",
      },
      {
        a: "Vitamin K deficiency (↑PT, ↑aPTT)",
        b: "Thrombocytopenia (normal PT/aPTT, ↑bleeding time)",
        whyConfused: "Both bleed.",
        keyDifference: "K failure is a factor problem — normal bleeding time, normal platelet count; platelet failure has a prolonged bleeding time with normal PT/aPTT.",
        clue: "Bleeding time is the divider: normal in K deficiency, prolonged in platelet disease.",
      },
      {
        a: "Warfarin's mechanism",
        b: "Heparin's mechanism",
        whyConfused: "Both are anticoagulants with PT/aPTT effects.",
        keyDifference: "Warfarin inhibits vitamin K–dependent synthesis (blocks epoxide reductase → factors II, VII, IX, X, protein C/S immature) — ↑PT first; heparin potentiates antithrombin — ↑aPTT, no K involvement.",
        clue: "Vitamin K reversal (fresh frozen plasma/phytonadione) works only on the warfarin side.",
      },
    ],
    pivots: [
      {
        lookAlike: "A 'newborn with bleeding' stem offering vitamin K deficiency, hemophilia A, and immune thrombocytopenia",
        differentiator: "The lab triad",
        correctPath: "↑PT + ↑aPTT + NORMAL bleeding time and platelets → vitamin K deficiency (hemorrhagic disease of the newborn); isolated ↑aPTT (factor VIII) with normal PT → hemophilia; isolated low platelets with ↑bleeding time → thrombocytopenia.",
      },
      {
        lookAlike: "An 'ataxia with loss of vibration' stem offering vitamin E deficiency, Friedreich ataxia, and B12 deficiency",
        differentiator: "The company the ataxia keeps",
        correctPath: "Fat malabsorption + hemolysis with acanthocytes + normal MMA → vitamin E; pes cavus + cardiomyopathy + diabetes + scoliosis (no malabsorption, no acanthocytes) → Friedreich (GAA repeat); macrocytosis + hypersegmented PMNs + ↑MMA → B12.",
      },
    ],
    miniCase: {
      vignette:
        "A 6-day-old girl born at home without medical supervision is brought to the emergency department with oozing from the umbilical stump and blood-streaked stools. She has been exclusively breastfed and received no medications after birth. She is pale but alert, with scattered ecchymoses and no hepatosplenomegaly. Laboratory studies: hemoglobin 12.8 g/dL, platelets 340,000/mm3, PT markedly prolonged, aPTT prolonged, bleeding time normal.",
      question: "Which of the following is the most likely cause of the bleeding?",
      options: [
        {
          label: "A",
          correct: true,
          text: "Vitamin K deficiency — neonates have sterile intestines and are unable to synthesize vitamin K, and breast milk lacks it: newborn hemorrhagic disease",
          why: "Correct. The lab triad is the fingerprint: ↑PT (factor VII, shortest half-life, falls first) and ↑aPTT (IX, X, II follow) with NORMAL bleeding time and normal platelets — a clotting-FACTOR problem, not a platelet one. The home birth with no vitamin K injection and exclusive breastfeeding completes the supply-side story.",
        },
        {
          label: "B",
          text: "Hemophilia A (factor VIII deficiency)",
          why: "Hemophilia gives an isolated prolonged aPTT with a NORMAL PT — factor VIII is not vitamin K–dependent, so the PT should not rise; and hemophilia classically presents with deep hematomas/joint bleeding, not umbilical-plus-GI oozing in the first week.",
        },
        {
          label: "C",
          text: "Neonatal autoimmune thrombocytopenia",
          why: "Platelet failure would prolong the BLEEDING time with petechiae and a low platelet count — this infant's platelets and bleeding time are normal, which excludes a platelet cause.",
        },
        {
          label: "D",
          text: "Von Willebrand disease",
          why: "vWD typically shows a prolonged bleeding time (adhesion defect) with variably prolonged aPTT from low factor VIII — the normal bleeding time and the prominently elevated PT point instead at the vitamin K–dependent factors.",
        },
        {
          label: "E",
          text: "Disseminated intravascular coagulation",
          why: "DIC consumes platelets AND factors — bleeding time would be prolonged with thrombocytopenia, schistocytes, and low fibrinogen; this well-appearing infant has isolated factor failure with normal platelets, the signature of K deficiency, not consumption.",
        },
      ],
      reasoning:
        "Three lab lines decide everything: platelets normal (not thrombocytopenia, not DIC), bleeding time normal (not a platelet or vWF adhesion problem), PT prolonged FIRST with aPTT joining (a factor-maturation problem whose earliest casualty is the shortest-half-life factor VII). That combination is the vitamin K cycle failing — and in a 6-day-old exclusively breastfed infant born without a vitamin K injection, the cause is physiologic: sterile intestines cannot make menaquinone yet, and breast milk carries none. CLUE → MECHANISM → FINDING → DIAGNOSIS → MANAGEMENT: no vitamin K injection + day-6 oozing → γ-carboxylation of factors II, VII, IX, X, protein C/S fails → ↑PT/↑aPTT with normal bleeding time → hemorrhagic disease of the newborn → parenteral vitamin K (and FFP if bleeding is severe).",
    },
  },
  mnemonics: [
    {
      code: "“K is for Koagulation — factors 2, 7, 9, 10 plus proteins C and S”",
      meaning: "Vitamin K matures clotting factors II, VII, IX, X and the regulatory proteins C and S by γ-carboxylating their glutamic acid residues.",
      memorizes: "The K-dependent factor list",
      whenToUse: "Any warfarin or coagulation-factor question.",
      clinical: "Warfarin inhibits vitamin K–dependent synthesis of these factors and proteins; PT rises first (factor VII's short half-life).",
    },
    {
      code: "“Breast-fed infants Don't Know about vitamins D and K”",
      meaning: "Breast milk lacks both vitamin D and vitamin K — breastfed infants need oral vitamin D and the birth vitamin K injection.",
      memorizes: "The two-missing-vitamins newborn pair",
      whenToUse: "Any newborn-feeding or injection-schedule question.",
      clinical: "Vitamin K injection at birth prevents hemorrhagic disease of the newborn.",
    },
  ],
  rapidReview: {
    s30: [
      "Vitamin E (tocopherol, tocotrienol): antioxidant protecting RBCs and neuronal membranes from free radical damage.",
      "E deficiency: hemolytic anemia, acanthocytosis, muscle weakness, posterior column + spinocerebellar demyelination — closely mimics Friedreich ataxia.",
      "E neuro mimic of B12: NO megaloblastic anemia, no hypersegmented neutrophils, no ↑methylmalonic acid.",
      "E excess: enterocolitis risk in infants; high-dose E enhances warfarin effect via vitamin K–dependent protein metabolism (II, VII, IX, X; protein C/S).",
      "Vitamin K (phytomenadione/phylloquinone/menaquinone): epoxide reductase → reduced form → cofactor for γ-carboxylation of glutamic acid on clotting proteins.",
      "K is for Koagulation: factors II, VII, IX, X + proteins C and S; warfarin inhibits their K-dependent synthesis.",
      "K deficiency: neonatal hemorrhage, ↑PT and ↑aPTT, normal bleeding time; prolonged broad-spectrum antibiotics; hepatocellular disease.",
      "K not in breast milk; vitamin K injection at birth prevents hemorrhagic disease of the newborn.",
    ],
    m3: [
      "Epoxide reductase is the recycling enzyme — warfarin blocks IT, not the carboxylase.",
      "γ-carboxyglutamate (Gla) residues bind calcium — that is what anchors factors to phospholipid surfaces.",
      "Proteins C and S are also K-dependent — warfarin's transient hypercoagulable window and protein C deficiency physiology.",
      "Vitamin K sources split by origin: phylloquinone (leafy greens, diet) vs menaquinone (intestinal microbiota).",
    ],
    m10: [
      "Factor VII's ~6-hour half-life explains the PT-first pattern of K failure at any age.",
      "The E–K–warfarin triangle: high-dose E potentiates warfarin; steady dietary K (not zero-K) is the warfarin-diet counseling.",
      "Acanthocytes (spur cells) are the E-deficiency smear sign — contrast with target cells in liver disease and the hypersegmented PMNs of B12.",
      "Chronic cholestasis/fat malabsorption is the adult E-deficiency factory — the fundamentals chain failing for a membrane antioxidant.",
      "Late vitamin K deficiency (weeks 2-12) occurs in exclusively breastfed infants — the classic under-publicized window after the missed birth dose.",
    ],
  },
  recall: [
    {
      q: "What is vitamin E's function and its deficiency triad of systems?",
      a: "Antioxidant protecting RBCs and neuronal membranes from free radical damage. Deficiency: hemolytic anemia with acanthocytosis + muscle weakness + demyelination of posterior columns (↓proprioception, vibration) and spinocerebellar tract (ataxia) — closely mimics Friedreich ataxia.",
    },
    {
      q: "How does vitamin E deficiency differ neurologically from B12 deficiency?",
      a: "The neurologic presentation may appear similar, but vitamin E deficiency occurs WITHOUT megaloblastic anemia, hypersegmented neutrophils, or ↑serum methylmalonic acid levels.",
    },
    {
      q: "Describe the vitamin K cycle and warfarin's exact target.",
      a: "Vitamin K is activated by epoxide reductase to the reduced form, the cofactor for γ-carboxylation of glutamic acid residues on clotting proteins; the oxidized byproduct (2,3-epoxide) is recycled by the same reductase. Warfarin inhibits vitamin K–dependent synthesis of these factors by blocking epoxide reductase.",
    },
    {
      q: "Which factors and proteins are vitamin K–dependent, and what lab pattern does their failure produce?",
      a: "Factors II, VII, IX, X and proteins C and S. Failure: ↑PT and ↑aPTT with normal bleeding time (and normal platelets) — factor VII's short half-life makes PT rise first.",
    },
    {
      q: "Why are neonates vitamin K–deficient, and what prevents it?",
      a: "Neonates have sterile intestines and are unable to synthesize vitamin K, and breast milk contains essentially none ('breast-fed infants Don't Know about vitamins D and K'); vitamin K injection at birth prevents hemorrhagic disease of the newborn. Also occurs after prolonged broad-spectrum antibiotics or in hepatocellular disease.",
    },
    {
      q: "What two warfarin interactions do vitamins E and K share?",
      a: "High-dose vitamin E supplementation alters metabolism of vitamin K–dependent proteins (factors II, VII, IX, X; protein C/S) → enhanced anticoagulant effects of warfarin; vitamin K repletion (phytonadione) reverses warfarin's effect by restoring reduced K for the carboxylation cycle.",
    },
  ],
  related: [
    {
      title: "Vitamin D",
      note: "The other fat-soluble newborn-need vitamin — oral D for breastfed infants pairs with the K injection in the 'Don't Know about D and K' line.",
      topicId: "vitamin-d",
    },
    {
      title: "Vitamins B6, B7, B9 & B12",
      note: "The B12-versus-E cord mimic with its three negative labs (no macrocytosis, no hypersegmented PMNs, no ↑MMA) is the cross-page discriminator.",
      topicId: "b-vitamins-2",
    },
    {
      title: "Nutrition Fundamentals",
      note: "The bile-pancreas-ileum chain whose failure (cholestasis, CF, celiac) strips E and K together with A and D.",
      topicId: "nutrition-fundamentals",
    },
  ],
  crossLinks: [
    {
      subject: "Hematology & Oncology",
      connection: "The coagulation cascade's K-dependent arm (II, VII, IX, X, C, S), the PT-first lab pattern, and warfarin's therapeutic mechanism.",
    },
    {
      subject: "Pharmacology",
      connection: "Warfarin–epoxide reductase as the flagship anticoagulant mechanism; vitamin E's potentiation; phytonadione reversal.",
    },
    {
      subject: "Neurology",
      connection: "Posterior column and spinocerebellar degeneration — the Friedreich-ataxia mimic that vitamin E deficiency produces.",
    },
  ],
};
