import type { KypUsMLENote } from "../types";

// Biochemistry — Nutrition (N-batch, book order 3/8).
// Source: First Aid 2026, Part 1 pdf 86–87 / book 64–65 (vitamins B1, B2,
// B3, B5: functions, deficiencies, Wernicke-Korsakoff, pellagra, Hartnup,
// niacin excess)

export const bVitamins1: KypUsMLENote = {
  id: "b-vitamins-1",
  title: "Vitamins B1, B2, B3 & B5",
  subtitle:
    "Thiamine's dehydrogenase quartet (Be APT), riboflavin's 2 C's, niacin's 3 D's and Casal necklace, and pantothenic acid's CoA — four water-soluble cofactors whose deficiency patterns the exam recycles in every chronically malnourished and alcohol-overuse vignette.",
  subject: "Biochemistry",
  system: "Section II · High-Yield General Principles — Nutrition",
  pilotCategory: "Nutrition — water-soluble vitamins (B1–B5)",
  difficulty: 3,
  readTime: 12,
  sourceRef:
    "First Aid 2026, Part 1 pp. 64–65 (vitamins B1 thiamine, B2 riboflavin, B3 niacin, B5 pantothenic acid; Wernicke-Korsakoff; pellagra; Hartnup disease; niacin excess)",
  tags: [
    "thiamine",
    "TPP",
    "pyruvate dehydrogenase",
    "alpha-ketoglutarate dehydrogenase",
    "transketolase",
    "branched-chain ketoacid dehydrogenase",
    "Be APT",
    "Wernicke encephalopathy",
    "Korsakoff syndrome",
    "CorONA",
    "dry beriberi",
    "wet beriberi",
    "riboflavin",
    "FAD",
    "FMN",
    "cheilosis",
    "magenta tongue",
    "corneal vascularization",
    "niacin",
    "NAD",
    "pellagra",
    "Casal necklace",
    "Hartnup disease",
    "carcinoid",
    "isoniazid",
    "pantothenic acid",
    "CoA",
    "burning feet syndrome",
  ],
  core: {
    what: "B1 (thiamine) forms TPP, cofactor for the dehydrogenase reactions 'Be APT': Branched-chain ketoacid dehydrogenase, α-Ketoglutarate dehydrogenase (TCA), Pyruvate dehydrogenase (glycolysis → TCA), Transketolase (HMP shunt); deficiency → impaired glucose breakdown → ATP depletion worsened by glucose infusion, aerobic tissues (brain, heart) affected first — give thiamine before dextrose; diagnosis by ↑RBC transketolase after B1; Wernicke (acute, reversible: Confusion, Ophthalmoplegia/Nystagmus, Ataxia — CorONA), Korsakoff (chronic: confabulation, permanent memory loss), dry beriberi (polyneuropathy, symmetric muscle wasting), wet beriberi (high-output cardiac failure from systemic vasodilation). B2 (riboflavin) → FAD/FMN (succinate dehydrogenase); deficiency: cheilosis, 'magenta' tongue, corneal vascularization (the 2 C's). B3 (niacin) → NAD+/NADP+, derived from tryptophan (needs B2 + B6); treats dyslipidemia (↓VLDL, ↑HDL); deficiency: glossitis → pellagra 3 D's (diarrhea, dementia, dermatitis with C3/C4 Casal necklace and hyperpigmentation of sun-exposed limbs); also Hartnup, carcinoid, isoniazid; excess: facial flushing (prostaglandin — aspirin prevents), pruritus, hyperglycemia, hyperuricemia. B5 (pantothenic acid) → CoA + fatty acid synthase; deficiency: dermatitis, enteritis, alopecia, adrenal insufficiency, burning feet syndrome.",
    why: "This is the hardest-working page in nutrition: thiamine anchors the aerobic-tissue emergency (give before dextrose), niacin anchors the tryptophan-economy stem (Hartnup, carcinoid, INH), and every B-complex sign (dermatitis, glossitis, diarrhea) overlaps — so the exam discriminates by the one pathognomonic feature each vitamin owns.",
    keyIdea: "B1 = the dehydrogenase cofactor — block it and every aerobic tissue starves in hours (which is why glucose infusion without thiamine precipitates Wernicke); B2 = the 2 C's (cheilosis, corneal vascularization) on a magenta tongue; B3 = the tryptophan-economy vitamin — anything that diverts tryptophan (carcinoid), blocks its absorption (Hartnup), or strips its cofactor B6 (isoniazid) gives pellagra; B5 = CoA, the acyl-transfer cofactor (pantothenic = 'pento'thenic).",
  },
  mechanisms: [
    {
      id: "thiamine-atp-depletion",
      title: "Thiamine deficiency — ATP starvation of the aerobic tissues",
      context: "Chronic alcohol overuse or malnutrition + glucose load",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Thiamine (B1) deficiency in chronic alcohol overuse or malnutrition",
            sublabel: "Input — TPP unavailable for the Be APT dehydrogenases.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Pyruvate dehydrogenase, α-KG dehydrogenase, branched-chain ketoacid DH, transketolase all stall",
            sublabel: "Process — impaired glucose breakdown; the TCA cycle loses both its entry (PDH) and mid-cycle (α-KGDH) dehydrogenases.",
            variant: "process",
          },
          {
            id: "s2",
            label: "ATP depletion worsened by glucose infusion — glucose needs PDH to be burned aerobically",
            sublabel: "Process — a dextrose load demands MORE thiamine just as none is available.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Highly aerobic tissues (eg, brain, heart) affected first",
            sublabel: "Output — Wernicke encephalopathy (acute, reversible): Confusion, Ophthalmoplegia/Nystagmus, Ataxia (CorONA).",
            variant: "output",
          },
          {
            id: "o2",
            label: "Wet beriberi: high-output cardiac failure (systemic vasodilation) · Dry beriberi: polyneuropathy, symmetric muscle wasting",
            sublabel: "Output — heart and peripheral nerve, the other two aerobic losers.",
            variant: "output",
          },
          {
            id: "x1",
            label: "Give thiamine BEFORE dextrose to ↓ risk of precipitating Wernicke encephalopathy",
            sublabel: "Clinical — the order-of-operations rule the exam tests constantly.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "no TPP" },
          { from: "s1", to: "s2", label: "glucose can't be burned" },
          { from: "s2", to: "o1", label: "brain ATP crash" },
          { from: "s2", to: "o2", label: "heart / nerve" },
          { from: "x1", to: "s2", type: "inhibit", label: "thiamine first" },
        ],
        caption:
          "Thiamine is the toll every glucose molecule pays to enter the TCA cycle: without TPP, pyruvate dehydrogenase and α-ketoglutarate dehydrogenase stall, and any glucose infusion only deepens the ATP debt — which is why dextrose-before-thiamine precipitates Wernicke encephalopathy and thiamine-before-dextrose prevents it. The brain, heart, and peripheral nerves (the most aerobic tissues) fall in order: acute reversible CorONA confusion/ophthalmoplegia-nystagmus/ataxia, then chronic irreversible Korsakoff amnesia with confabulation, and the two beriberis (wet = high-output failure; dry = symmetric polyneuropathy). Diagnosis: RBC transketolase rises after B1 administration — the enzyme-repletion test.",
      },
    },
    {
      id: "niacin-tryptophan-economy",
      title: "Pellagra — the tryptophan economy collapses",
      context: "Niacin deficiency by any of four routes",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Niacin (B3) supply fails: poor intake, or tryptophan diverted/blocked",
            sublabel: "Input — B3 is derived from tryptophan; synthesis requires vitamins B2 and B6.",
            variant: "input",
          },
          {
            id: "s1",
            label: "NAD+/NADP+ pools fall — redox reactions and dehydrogenase cofactors run short",
            sublabel: "Process — the 3 D's emerge: diarrhea, dementia (also hallucinations), dermatitis.",
            variant: "process",
          },
          {
            id: "s2",
            label: "C3/C4 dermatome circumferential 'broad collar' rash (Casal necklace) + hyperpigmentation of sun-exposed limbs",
            sublabel: "Process — the dermatitis with a map: a collar at C3/C4, darkening where sun hits.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Pellagra — the full 3 D's picture with glossitis preceding it",
            sublabel: "Output — 'Pellagra = vitamin B3 levels fell.'",
            variant: "output",
          },
          {
            id: "x1",
            label: "Hartnup disease: AR neutral amino acid transporter deficiency (PCT + enterocytes) → neutral aminoaciduria → ↓tryptophan → pellagra-like",
            sublabel: "Alternative route — treat with high-protein diet and nicotinic acid.",
            variant: "inhibit",
          },
          {
            id: "x2",
            label: "Carcinoid (↑tryptophan metabolism → ↑serotonin synthesis) and isoniazid (↓vitamin B6) both strip the niacin supply",
            sublabel: "Alternative routes — the two drug/disease causes the exam pairs with diet.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "↓NAD+/NADP+" },
          { from: "s1", to: "s2", label: "epithelial failure" },
          { from: "s2", to: "o1", label: "3 D's" },
          { from: "x1", to: "trigger", label: "tryptophan lost" },
          { from: "x2", to: "trigger", label: "tryptophan diverted / B6 stripped" },
        ],
        caption:
          "Niacin is the only vitamin with a backup supply line — the liver makes it from tryptophan, but only if B2 and B6 are present. So pellagra has four doors: diet (corn, resource-limited areas), Hartnup disease (neutral amino acid transporters fail in the proximal tubule and enterocytes — neutral aminoaciduria drains tryptophan; treat with high-protein diet + nicotinic acid), malignant carcinoid syndrome (the tumor diverts tryptophan into serotonin), and isoniazid (strips B6, the synthesis cofactor). The end product is the same: glossitis progressing to the 3 D's, with the C3/C4 Casal necklace and sun-exposed hyperpigmentation as the dermatologic map.",
      },
    },
  ],
  blocks: [
    {
      kind: "text",
      title: "B1 thiamine — the dehydrogenase quartet and the order-of-operations rule",
      body: [
        "Thiamine becomes thiamine pyrophosphate (TPP), the cofactor for four enzyme reactions the source names 'Be APT': Branched-chain ketoacid dehydrogenase, α-Ketoglutarate dehydrogenase (TCA cycle), Pyruvate dehydrogenase (links glycolysis to TCA cycle), and Transketolase (HMP shunt). With TPP missing, glucose breakdown is impaired and ATP depletion follows — worsened by glucose infusion, because the infused glucose cannot pass through pyruvate dehydrogenase into the TCA cycle; highly aerobic tissues (eg, brain, heart) are affected first. This is the mechanistic reason for the emergency rule: in patients with chronic alcohol overuse or malnutrition, give thiamine before dextrose to ↓ risk of precipitating Wernicke encephalopathy.",
        "The clinical spectrum runs from acute to permanent. Wernicke encephalopathy is the acute, reversible, life-threatening neurologic condition — Confusion, Ophthalmoplegia/Nystagmus, Ataxia (the CorONA beer mnemonic). Korsakoff syndrome is the amnestic disorder of chronic alcohol overuse: confabulation, personality changes, and permanent memory loss. Together they are the Wernicke-Korsakoff syndrome — damage to the medial dorsal nucleus of the thalamus and the mammillary bodies. The periphery gets the two beriberis: dry beriberi is polyneuropathy with symmetric muscle wasting; wet beriberi is high-output cardiac failure due to systemic vasodilation. Diagnosis is the repletion test: RBC transketolase activity rises after vitamin B1 administration. Spell beriberi as Ber1Ber1 to remember vitamin B1.",
      ],
    },
    {
      kind: "visual",
      visualId: "riboflavin-deficiency-signs",
      title: "B2 deficiency — the 2 C's on a magenta tongue",
      caption:
        "The source's cheilosis photograph (label A) redrawn as three panels: angular cheilosis with scaling and fissures at the corners of the mouth; the magenta (purplish-red) glossitis of the tongue; and corneal vascularization with new vessels creeping in from the periphery — plus the FAD/FMN function strip (succinate dehydrogenase) and the exam-shape line.",
      notice:
        "B2 owns TWO C's — cheilosis and corneal vascularization — and one color, magenta, for the tongue. FAD and FMN are derived from riboFlavin (B2 ≈ 2 ATP); the succinate dehydrogenase reaction in the TCA cycle is the named FAD enzyme. Cheilosis = inflammation of the lips with scaling and fissures at the corners of the mouth — the photo-sign the exam expects you to name on sight.",
    },
    {
      kind: "visual",
      visualId: "pellagra-casal-necklace",
      title: "B3 deficiency — the Casal necklace and the sun-exposed limbs",
      caption:
        "The source's photograph (label A) redrawn as schematics: a head-and-neck with the C3/C4 dermatome circumferential 'broad collar' rash wrapping the lower neck and upper chest (scale-flecked, well demarcated), and a forearm with darkened patches on the sun-exposed dorsum — with the 3 D's chips (diarrhea, dementia, dermatitis) and the tryptophan-economy note (B3 from tryptophan needs B2 + B6; Hartnup, carcinoid, isoniazid).",
      notice:
        "The Casal necklace is a DERMATOME-MAPPED rash: C3/C4, circumferential, like a broad collar below the neck — paired with hyperpigmentation of sun-exposed limbs. It is the one deficiency rash whose borders the exam can ask you to explain. The 3 D's (diarrhea, dementia with hallucinations, dermatitis) complete pellagra; glossitis comes first.",
    },
    {
      kind: "table",
      title: "B1–B5 — cofactor, source enzyme, and discriminating deficiency sign",
      intro: "The four vitamins of this page in one sortable row each (book pp. 64–65).",
      columns: ["Vitamin", "Cofactor / role", "Named enzymes", "Deficiency picture"],
      rows: [
        ["B1 thiamine", "TPP", "Branched-chain ketoacid DH · α-KG DH (TCA) · Pyruvate DH (glycolysis→TCA) · Transketolase (HMP) — Be APT", "Wernicke (CorONA, acute reversible) → Korsakoff (confabulation, permanent); dry beriberi (polyneuropathy); wet beriberi (high-output failure); dx ↑RBC transketolase after B1"],
        ["B2 riboflavin", "FAD, FMN", "Succinate dehydrogenase (TCA) — the 2 C's", "Cheilosis, 'magenta' tongue, corneal vascularization"],
        ["B3 niacin", "NAD+, NADP+", "Redox + dehydrogenase cofactors; from tryptophan (needs B2, B6); ↓VLDL ↑HDL", "Glossitis → pellagra 3 D's; Casal necklace (C3/C4); Hartnup, carcinoid, INH; excess: flushing (PG, not histamine), pruritus, hyperglycemia, hyperuricemia"],
        ["B5 pantothenic acid", "CoA + fatty acid synthase", "Acyl transfers", "Dermatitis, enteritis, alopecia, adrenal insufficiency; burning feet syndrome (distal paresthesias, dysesthesia)"],
      ],
      caption:
        "Sort by the single pathognomonic sign: dusk-blind dry eyes → A (not here); angular fissures + magenta tongue → B2; broad-collar C3/C4 rash → B3; confusion/ataxia/ophthalmoplegia in alcohol overuse → B1; burning feet with adrenal insufficiency → B5. The 'Be APT' quartet and 'B2 ≈ 2 ATP' / 'B3 ≈ 3 ATP' energy mnemonics are the source's own.",
    },
    {
      kind: "callout",
      variant: "why",
      title: "Why the niacin-economy failures all look like pellagra",
      body: "The body can synthesize niacin from tryptophan — an expensive conversion (~60 mg tryptophan per 1 mg niacin) that requires riboflavin (B2) and pyridoxine (B6) as cofactors. Every pellagra look-alike breaks a different link in that supply chain: Hartnup disease loses tryptophan in the gut and urine (neutral amino acid transporter deficiency — treat with a high-protein diet and nicotinic acid), malignant carcinoid syndrome diverts tryptophan into serotonin synthesis, and isoniazid depletes B6. Corn-based diets fail twice over — the niacin is bound and tryptophan is scarce — which is why untreated corn requires B3 supplementation in resource-limited areas.",
    },
    {
      kind: "callout",
      variant: "exam",
      title: "How the exam asks this page",
      body: "Five recurring shapes: (1) the order-of-operations stem — malnourished patient given IV dextrose who then develops confusion/ophthalmoplegia/ataxia → thiamine was not given first; (2) the memory stem — confabulation, personality change, permanent memory loss → Korsakoff (medial dorsal thalamus, mammillary bodies); (3) the high-output-failure stem — wet beriberi with vasodilation; (4) the pellagra stem with a twist — Casal necklace after carcinoid symptoms (flushing, diarrhea, wheeze) or isoniazid therapy or Hartnup (neutral aminoaciduria); (5) the niacin-excess stem — facial flushing prevented by aspirin (prostaglandin-mediated, NOT histamine), with pruritus, hyperglycemia, hyperuricemia.",
    },
  ],
  clinical: [
    {
      kind: "text",
      title: "The emergency order and the repletion test",
      body: [
        "In any patient with chronic alcohol overuse or malnutrition who needs IV glucose — hypoglycemia, ketoacidosis, status epilepticus — thiamine precedes dextrose. The rule is not ritual: glucose oxidation consumes TPP at pyruvate dehydrogenase, so a dextrose load into a thiamine-depleted patient accelerates the ATP crash in the mammillary bodies and thalamic nuclei. RBC transketolase activity measured before and after B1 administration is the functional diagnosis — enzyme activity that rises with repletion proves TPP deficiency was limiting.",
        "Wernicke encephalopathy is a medical emergency: Confusion, Ophthalmoplegia/Nystagmus, and Ataxia (CorONA) — all reversible with immediate thiamine. Miss the window and it becomes Wernicke-Korsakoff syndrome: the mammillary bodies and medial dorsal nucleus of the thalamus are damaged, and Korsakoff's confabulation and memory loss are permanent. The beriberis present peripherally — symmetric polyneuropathy with muscle wasting (dry) or high-output cardiac failure from systemic vasodilation with warm extremities and a bounding pulse (wet).",
        "Niacin as a DRUG is its own exam item: it treats dyslipidemia by ↓VLDL (hence ↓LDL) and ↑HDL, but at pharmacologic doses it causes facial flushing mediated by prostaglandin (not histamine — pre-treat with aspirin), plus pruritus, hyperglycemia, and hyperuricemia ('Podagra = B3 OD' — niacin can tip a gout flare).",
      ],
    },
  ],
  drugs: [
    {
      drug: "Niacin (nicotinic acid, vitamin B3)",
      klass: "Antihyperlipidemic — vitamin",
      target: "Lipolysis in adipose tissue (↓VLDL production)",
      mechanism: "Reduces hepatic VLDL synthesis and release; ↑HDL",
      effect: "↓VLDL, ↓LDL, ↑HDL",
      uses: "Dyslipidemia",
      adverse: "Facial flushing (prostaglandin-induced, not histamine — avoided by aspirin before niacin), pruritus, hyperglycemia, hyperuricemia (Podagra = B3 OD)",
      clue: "Dyslipidemia drug + flushing that aspirin prevents",
    },
    {
      drug: "Thiamine (vitamin B1)",
      klass: "Vitamin repletion",
      target: "TPP-dependent dehydrogenases (Be APT)",
      mechanism: "Reconstitutes pyruvate DH, α-KG DH, branched-chain ketoacid DH, transketolase",
      effect: "Restores aerobic glucose oxidation; reverses Wernicke",
      uses: "Chronic alcohol overuse, malnutrition — BEFORE dextrose; Wernicke encephalopathy, beriberi",
      adverse: "None classic at replacement doses",
      clue: "IV dextrose ordered for an alcohol-overusing patient — what goes first?",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 52-year-old man with chronic alcohol use disorder, brought in obtunded, receives 50% dextrose for hypoglycemia; 2 days later he is confused, has nystagmus and ophthalmoplegia, and an ataxic gait.",
        discriminator: "Dextrose BEFORE thiamine → acute Confusion/Ophthalmoplegia-Nystagmus/Ataxia",
        concept: "Wernicke encephalopathy from precipitated thiamine deficiency",
        answer: "Give thiamine before dextrose to ↓ risk of precipitating Wernicke encephalopathy — impaired glucose breakdown → ATP depletion worsened by glucose infusion; treat with immediate IV thiamine (acute, reversible)",
      },
      {
        stem: "Months later the same patient makes up detailed stories about events that never happened and cannot form new memories; MRI shows mammillary body and medial dorsal thalamic damage.",
        discriminator: "Confabulation + permanent memory loss",
        concept: "Korsakoff syndrome",
        answer: "Amnestic disorder from chronic alcohol overuse: confabulation, personality changes, memory loss (permanent) — the irreversible end of the Wernicke-Korsakoff continuum",
      },
      {
        stem: "A 44-year-old with a corn-based diet has chronic diarrhea, confusion with hallucinations, and a well-demarcated rash circling her neck like a broad collar at the C3/C4 dermatomes, with darkened forearms.",
        discriminator: "3 D's + Casal necklace + sun-exposed hyperpigmentation",
        concept: "Pellagra — niacin (B3) deficiency",
        answer: "Glossitis → pellagra (diarrhea, dementia, dermatitis); treat with niacin/nicotinic acid and protein repletion — 'Pellagra = vitamin B3 levels fell'",
      },
      {
        stem: "A child with a neutral aminoaciduria and a pellagra-like rash improves on a high-protein diet plus nicotinic acid.",
        discriminator: "Neutral aminoaciduria + pellagra-like symptoms",
        concept: "Hartnup disease",
        answer: "Autosomal recessive deficiency of neutral amino acid (eg, tryptophan) transporters in proximal renal tubular cells and on enterocytes → neutral aminoaciduria and ↓ absorption from the gut → ↓ tryptophan for conversion to niacin → pellagra-like; treat with high-protein diet and nicotinic acid",
      },
      {
        stem: "A patient started on lipid-lowering therapy reports intense facial flushing with each dose, prevented when aspirin is taken 30 minutes before.",
        discriminator: "Flushing prevented by aspirin = prostaglandin-mediated",
        concept: "Niacin excess/adverse effect",
        answer: "Facial flushing (induced by prostaglandin, not histamine; can avoid by taking aspirin before niacin), pruritus, hyperglycemia, hyperuricemia — Podagra = B3 OD",
      },
    ],
    traps: [
      {
        a: "Wernicke encephalopathy",
        b: "Korsakoff syndrome",
        whyConfused: "Both are thiamine-deficiency syndromes in alcohol overuse.",
        keyDifference: "Wernicke = acute, REVERSIBLE, life-threatening: confusion, ophthalmoplegia/nystagmus, ataxia. Korsakoff = chronic, amnestic, IRREVERSIBLE: confabulation, personality changes, permanent memory loss (medial dorsal thalamus, mammillary bodies).",
        clue: "Reversibility and confabulation are the sorting features.",
      },
      {
        a: "Wet beriberi",
        b: "Dry beriberi",
        whyConfused: "Same deficiency, same name.",
        keyDifference: "Wet = high-output cardiac failure due to systemic vasodilation (warm, edematous); Dry = polyneuropathy with symmetric muscle wasting.",
        clue: "Cardiovascular findings → wet; neuropathy without failure → dry.",
      },
      {
        a: "Pellagra (dietary B3 deficiency)",
        b: "Hartnup disease",
        whyConfused: "Both end in pellagra-like 3 D's.",
        keyDifference: "Hartnup is an AR transporter deficiency with NEUTRAL AMINOACIDURIA (a lab finding) — pellagra-like because tryptophan is lost; dietary pellagra has no aminoaciduria.",
        clue: "Urine neutral amino acids + pellagra rash → Hartnup.",
      },
      {
        a: "Niacin-induced flushing",
        b: "Carcinoid flushing",
        whyConfused: "Both are episodic facial flushes.",
        keyDifference: "Niacin flushing is prostaglandin-mediated, prevented by aspirin, isolated (no GI/breath symptoms); carcinoid flushing comes with serotonin excess (diarrhea, bronchospasm, ↑5-HIAA) and diverts tryptophan toward niacin-deficiency territory.",
        clue: "Aspirin prevents niacin flush; 5-HIAA identifies carcinoid.",
      },
    ],
    pivots: [
      {
        lookAlike: "A 'malnourished patient with dermatitis, glossitis, and diarrhea' stem offering B2, B3, and B-complex general deficiency",
        differentiator: "The single named sign",
        correctPath: "Angular fissures + magenta tongue + corneal vascularization → B2; C3/C4 Casal necklace + sun-exposed hyperpigmentation + dementia/diarrhea → B3; the shared epithelial triage (dermatitis, glossitis, diarrhea) is the B-complex baseline, not a discriminator.",
      },
      {
        lookAlike: "An 'alcohol-overusing patient with ataxia and confusion' stem offering Wernicke, cerebellar degeneration, and hepatic encephalopathy",
        differentiator: "The company the confusion keeps",
        correctPath: "Confusion + ophthalmoplegia/nystagmus + ataxia (subacute, after glucose) → Wernicke (give thiamine FIRST); pure truncal/appendicular ataxia with dysarthria over months → alcoholic cerebellar degeneration; asterixis + ammonia → hepatic encephalopathy.",
      },
    ],
    miniCase: {
      vignette:
        "A 58-year-old man with a 30-year history of alcohol use disorder is found on the street obtunded. Point-of-care glucose is 28 mg/dL, and the team gives an IV bolus of 50% dextrose. Two days later he is awake but disoriented to place, has horizontal nystagmus with impaired lateral gaze, and cannot stand without falling; peripheral nerve examination shows symmetric loss of vibration and proprioception in the legs with muscle wasting. His RBC transketolase activity rises 45% after a trial dose of vitamin B1.",
      question: "Which of the following best explains the deterioration after admission?",
      options: [
        {
          label: "A",
          correct: true,
          text: "Dextrose given before thiamine precipitated Wernicke encephalopathy — glucose infusion into a thiamine-depleted state accelerates ATP depletion in aerobic brain tissue",
          why: "Correct. All three pieces fit: the classic triad (confusion, ophthalmoplegia/nystagmus, ataxia) appearing after IV dextrose without thiamine; the symmetric polyneuropathy of dry beriberi; and RBC transketolase rising after B1 — the functional repletion test proving TPP deficiency. Give thiamine before dextrose in chronic alcohol overuse or malnutrition.",
        },
        {
          label: "B",
          text: "Hypoglycemic encephalopathy from the initial glucose of 28 mg/dL",
          why: "Severe hypoglycemia can cause confusion and even quadriparesis, but it does not selectively produce nystagmus with lateral-gaze palsy or the transketolase response — and his mentation worsened AFTER normoglycemia was restored, the opposite of hypoglycemic encephalopathy.",
        },
        {
          label: "C",
          text: "Korsakoff syndrome from chronic mammillary body damage",
          why: "Korsakoff is the CHRONIC amnestic stage with confabulation and permanent memory loss — this patient's findings are the acute, reversible triad (Wernicke), not an anterograde amnesia; the distinction matters because Wernicke responds to immediate thiamine.",
        },
        {
          label: "D",
          text: "Alcoholic cerebellar degeneration of the anterior vermis",
          why: "Alcoholic cerebellar degeneration causes progressive truncal and lower-limb ataxia, but no ophthalmoplegia, no delirium, and no transketolase response — it is a chronic toxin-nutritional disorder, not an acute precipitated deficiency.",
        },
        {
          label: "E",
          text: "Marchiafava-Bignami disease with corpus callosum demyelination",
          why: "Marchiafava-Bignami is a rare alcohol-related demyelination of the corpus callosum presenting with dementia, spasticity, and altered consciousness — not the acute CorONA triad, and the glucose-precipitation timing plus transketolase response point squarely at thiamine.",
        },
      ],
      reasoning:
        "The vignette is built around the order-of-operations error: dextrose was given to a thiamine-depleted patient, and the Be APT dehydrogenases (pyruvate DH, α-KG DH, branched-chain ketoacid DH, transketolase) failed at the worst moment — impaired glucose breakdown → ATP depletion worsened by the very glucose infused, with the aerobic brain, heart, and peripheral nerves failing first. The triad names Wernicke (acute, reversible — treat now, and it is still reversible); the symmetric neuropathy is dry beriberi riding along; the RBC transketolase rise after B1 is the diagnosis sealed. CLUE → MECHANISM → FINDING → DIAGNOSIS → MANAGEMENT: glucose load + alcohol overuse → TPP-dependent dehydrogenase stall → confusion/ophthalmoplegia-nystagmus/ataxia → Wernicke → thiamine before dextrose, always.",
    },
  },
  mnemonics: [
    {
      code: "“Be APT: Branched-chain ketoacid DH, α-KG DH, Pyruvate DH, Transketolase”",
      meaning: "The four TPP-dependent reactions; 'Eat, then be APT to break it down' — glucose metabolism needs them.",
      memorizes: "Thiamine's enzyme quartet",
      whenToUse: "Any Wernicke/beriberi/TCA-integration question; also maple syrup urine disease (branched-chain ketoacid DH).",
      clinical: "B1 deficiency stalls all four — ATP depletion worsened by glucose infusion, brain and heart first.",
    },
    {
      code: "“CorONA beer: Confusion, Ophthalmoplegia/Nystagmus, Ataxia”",
      meaning: "Wernicke encephalopathy's acute reversible triad; the beer reminds you of the alcohol-overuse context.",
      memorizes: "Wernicke triad",
      whenToUse: "Alcohol overuse or malnutrition with acute neurologic change — especially after glucose administration.",
      clinical: "Emergency thiamine; untreated → Korsakoff (confabulation, permanent memory loss; mammillary bodies).",
    },
    {
      code: "“The 2 C's of B2: Cheilosis + Corneal vascularization (magenta tongue)”",
      meaning: "Riboflavin deficiency's named signs; FAD/FMN derived from riboFlavin (B2 ≈ 2 ATP).",
      memorizes: "B2 deficiency signs and cofactor",
      whenToUse: "Angular mouth fissures + eye findings in malnutrition.",
      clinical: "Succinate dehydrogenase is the FAD enzyme the exam names.",
    },
    {
      code: "“Pellagra = vitamin B3 levels fell; Podagra = B3 OD”",
      meaning: "Niacin deficiency = pellagra (3 D's — diarrhea, dementia, dermatitis, with C3/C4 Casal necklace); niacin excess = gout-flare territory (hyperuricemia) plus prostaglandin flushing.",
      memorizes: "Both dose directions of B3",
      whenToUse: "Corn diets, Hartnup, carcinoid, INH (deficiency); niacin therapy with flushing (excess).",
      clinical: "Aspirin prevents niacin flushing (prostaglandin, not histamine).",
    },
  ],
  rapidReview: {
    s30: [
      "B1 thiamine → TPP: Be APT — Branched-chain ketoacid DH, α-KG DH (TCA), Pyruvate DH (glycolysis→TCA), Transketolase (HMP).",
      "B1 deficiency: ATP depletion worsened by glucose infusion; brain/heart first; give thiamine BEFORE dextrose.",
      "Wernicke: acute reversible CorONA — Confusion, Ophthalmoplegia/Nystagmus, Ataxia. Korsakoff: confabulation, permanent memory loss.",
      "Wet beriberi: high-output cardiac failure (systemic vasodilation). Dry beriberi: polyneuropathy, symmetric muscle wasting.",
      "B1 dx: ↑RBC transketolase activity after B1 administration. Ber1Ber1 = B1.",
      "B2 riboflavin → FAD/FMN (succinate DH); 2 C's: cheilosis + corneal vascularization; magenta tongue.",
      "B3 niacin → NAD+/NADP+; from tryptophan (needs B2+B6); ↓VLDL ↑HDL; pellagra 3 D's + C3/C4 Casal necklace.",
      "B3 excess: prostaglandin flushing (aspirin prevents; NOT histamine), pruritus, hyperglycemia, hyperuricemia.",
      "B5 pantothenic acid → CoA + fatty acid synthase; deficiency: dermatitis, enteritis, alopecia, adrenal insufficiency, burning feet.",
    ],
    m3: [
      "NAD derived from Niacin (B3 ≈ 3 ATP); FAD from riboFlavin (B2 ≈ 2 ATP) — the ATP-count mnemonics.",
      "Hartnup: AR neutral amino acid transporter deficiency (PCT + enterocytes) → neutral aminoaciduria → ↓tryptophan → pellagra-like; high-protein diet + nicotinic acid.",
      "Carcinoid: ↑tryptophan metabolism → ↑serotonin synthesis (and away from niacin).",
      "Isoniazid: ↓vitamin B6 → niacin synthesis fails (and B6 deficiency independently causes its own picture).",
      "Wernicke-Korsakoff anatomy: medial dorsal nucleus of thalamus, mammillary bodies.",
    ],
    m10: [
      "Glucose infusion demands thiamine — PDH is the door glucose must pass; that is why dextrose precipitates Wernicke.",
      "Transketolase ties thiamine to the HMP shunt (pentose phosphate pathway) — a favorite cross-pathway question.",
      "Casal necklace sits at C3/C4 — a dermatome-mapped deficiency rash, unique among vitamin signs.",
      "Burning feet syndrome (distal paresthesias, dysesthesia) is the B5-specific peripheral sign.",
      "Niacin's ↓VLDL is why it lowers both triglycerides and (secondarily) LDL, and ↑HDL is its signature.",
      "Untreated corn → B3 deficiency is common in resource-limited areas (bound niacin + low tryptophan).",
    ],
  },
  recall: [
    {
      q: "List the four TPP-dependent enzymes and a disease for two of them.",
      a: "Be APT — Branched-chain ketoacid dehydrogenase (maple syrup urine disease when defective), α-Ketoglutarate dehydrogenase (TCA cycle), Pyruvate dehydrogenase (links glycolysis to TCA; lactic acidosis when defective), Transketolase (HMP shunt). All four fail in thiamine deficiency.",
    },
    {
      q: "Why must thiamine precede dextrose in chronic alcohol overuse, and how is the diagnosis confirmed?",
      a: "Impaired glucose breakdown → ATP depletion worsened by glucose infusion; highly aerobic tissues (brain, heart) are affected first — dextrose without thiamine precipitates Wernicke. Diagnosis: ↑RBC transketolase activity after vitamin B1 administration.",
    },
    {
      q: "Contrast Wernicke encephalopathy, Korsakoff syndrome, and the two beriberis.",
      a: "Wernicke: acute, reversible, life-threatening — Confusion, Ophthalmoplegia/Nystagmus, Ataxia (CorONA). Korsakoff: chronic amnestic — confabulation, personality changes, permanent memory loss (medial dorsal thalamus, mammillary bodies). Dry beriberi: polyneuropathy, symmetric muscle wasting. Wet beriberi: high-output cardiac failure due to systemic vasodilation.",
    },
    {
      q: "Give B2's cofactors, named TCA enzyme, and deficiency signs.",
      a: "FAD and FMN (redox cofactors; succinate dehydrogenase in the TCA cycle); deficiency — cheilosis (inflammation of lips, scaling and fissures at the corners of the mouth), 'magenta' tongue, corneal vascularization: the 2 C's of B2.",
    },
    {
      q: "Name the four routes to pellagra and the rash's dermatome.",
      a: "Dietary niacin/tryptophan deficiency (untreated corn, resource-limited areas); Hartnup disease (AR neutral amino acid transporter deficiency → neutral aminoaciduria); malignant carcinoid syndrome (↑tryptophan metabolism → ↑serotonin); isoniazid (↓B6). Rash: C3/C4 dermatome circumferential 'broad collar' (Casal necklace) + hyperpigmentation of sun-exposed limbs.",
    },
    {
      q: "What are niacin's lipid effects and its four adverse effects?",
      a: "Treats dyslipidemia: ↓VLDL, ↑HDL. Excess: facial flushing (induced by prostaglandin, not histamine — avoided by aspirin before niacin), pruritus, hyperglycemia, hyperuricemia ('Podagra = B3 OD').",
    },
    {
      q: "What is B5's cofactor role and its deficiency picture including the named peripheral syndrome?",
      a: "Component of coenzyme A (cofactor for acyl transfers) and fatty acid synthase; deficiency — dermatitis, enteritis, alopecia, adrenal insufficiency, and burning feet syndrome (distal paresthesias, dysesthesia).",
    },
  ],
  related: [
    {
      title: "Vitamins B6, B7, B9 & B12",
      note: "The water-soluble sequel — B6 is the cofactor isoniazid strips (bridging into this page's pellagra route) and B9/B12 close the megaloblastic pair.",
      topicId: "b-vitamins-2",
    },
    {
      title: "Nutrition Fundamentals",
      note: "The washout rule that makes every B vitamin deficiency fast, and the diet table's untreated-corn row that opens the pellagra route.",
      topicId: "nutrition-fundamentals",
    },
    {
      title: "Vitamin C, Zinc & Protein-Energy Malnutrition",
      note: "The other scurvy-vs-pellagra dermatitis sort — perifollicular hemorrhage vs C3/C4 collar — and the PEM states that produce all B-complex deficiencies at once.",
      topicId: "vitamin-c-zinc-pem",
    },
    {
      title: "Glycolysis Regulation",
      note: "Pyruvate dehydrogenase is where thiamine's Be APT quartet meets the glycolysis-to-TCA handoff the metabolism notes cover.",
      topicId: "glycolysis-regulation",
    },
  ],
  crossLinks: [
    {
      subject: "Psychiatry",
      connection: "Wernicke-Korsakoff in alcohol use disorder — confusion and confabulation are psychiatry-floor presentations of a biochemical emergency.",
    },
    {
      subject: "Cardiology",
      connection: "Wet beriberi is high-output cardiac failure from systemic vasodilation — the nutritional mimic of cardiomyopathy workups.",
    },
    {
      subject: "Biochemistry — Metabolism",
      connection: "The Be APT dehydrogenases sit at the glycolysis/TCA/HMP junctions — thiamine deficiency is the nutrient lever on all three pathways at once.",
    },
    {
      subject: "Pharmacology",
      connection: "Niacin's ↓VLDL/↑HDL and its prostaglandin-flush/aspirin prevention; isoniazid's B6 stripping bridges to peripheral neuropathy and pellagra.",
    },
  ],
};
