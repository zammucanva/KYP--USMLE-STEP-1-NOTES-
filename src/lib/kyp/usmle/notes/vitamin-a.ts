import type { KypUsMLENote } from "../types";

// Biochemistry — Nutrition (N-batch, book order 2/8).
// Source: First Aid 2026, Part 1 pdf 86 / book 64 (vitamin A: retinal/retinol/
// retinoic acid; function; deficiency; excess; retin-A; teratogenicity)

export const vitaminA: KypUsMLENote = {
  id: "vitamin-a",
  title: "Vitamin A",
  subtitle:
    "Retinal, retinol, and retinoic acid: the visual pigment the rods need at dusk, the differentiation signal that keeps epithelium mucosal — and the teratogen whose isotretinoin prescriptions demand a negative pregnancy test and two contraceptions.",
  subject: "Biochemistry",
  system: "Section II · High-Yield General Principles — Nutrition",
  pilotCategory: "Nutrition — fat-soluble vitamins",
  difficulty: 1,
  readTime: 8,
  sourceRef:
    "First Aid 2026, Part 1 pp. 64 (vitamin A: function, deficiency, excess, teratogenicity, isotretinoin)",
  tags: [
    "vitamin A",
    "retinal",
    "retinol",
    "retinoic acid",
    "night blindness",
    "nyctalopia",
    "xerophthalmia",
    "Bitot spots",
    "keratomalacia",
    "xerosis cutis",
    "squamous metaplasia",
    "isotretinoin",
    "all-trans retinoic acid",
    "acute promyelocytic leukemia",
    "teratogen",
    "homeobox",
    "cleft palate",
    "idiopathic intracranial hypertension",
    "measles",
  ],
  core: {
    what: "Vitamin A includes retinal, retinol, and retinoic acid. Function: antioxidant; constituent of visual pigments (retinal); essential for normal differentiation of epithelial cells into specialized tissue (pancreatic cells, mucus-secreting cells); prevents squamous metaplasia. Deficiency: night blindness (nyctalopia); dry, scaly skin (xerosis cutis); dry eyes (xerophthalmia); conjunctival squamous metaplasia → Bitot spots (keratin debris; foamy appearance on conjunctiva); corneal degeneration (keratomalacia); immunosuppression. Excess: acute toxicity — nausea, vomiting, ↑ICP (eg, vertigo, blurred vision); chronic toxicity — alopecia, dry skin (eg, scaliness), hepatic toxicity and enlargement, arthralgias, and idiopathic intracranial hypertension. Teratogenic (interferes with homeobox gene; cleft palate, cardiac abnormalities).",
    why: "Vitamin A carries three of nutrition's highest-frequency stems: the deficiency cascade (night blindness → Bitot spots → keratomalacia), the teratogen regulation (⊝ pregnancy test + two forms of contraception before isotretinoin), and the leukemia therapy (all-trans retinoic acid for APL) — all from one vitamin's three forms.",
    keyIdea: "Anchor on the three FORMS: RETINAL is the visual pigment (night blindness when missing); RETINOL is the storage/transport form (liver, leafy vegetables); RETINOIC ACID is the differentiation signal (epithelium stays mucosal; as isotretinoin it treats severe cystic acne, as all-trans retinoic acid it treats APL). All three forms are teratogenic because retinoic acid signaling runs through homeobox genes — cleft palate and cardiac abnormalities.",
  },
  mechanisms: [
    {
      id: "vitamin-a-deficiency-cascade",
      title: "Vitamin A deficiency — from dusk blindness to corneal collapse",
      context: "Fat malabsorption or poor intake",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Vitamin A deficiency (malabsorption, poor diet, or chronic liver disease)",
            sublabel: "Input — fat-soluble vitamin; the absorption chain from the fundamentals page.",
            variant: "input",
          },
          {
            id: "s1",
            label: "RETINAL depleted → visual pigment (rhodopsin) fails first in dim light",
            sublabel: "Process — night blindness (nyctalopia) is the earliest, most specific symptom.",
            variant: "process",
          },
          {
            id: "s2",
            label: "RETINOIC-ACID-dependent differentiation fails → squamous metaplasia of epithelium",
            sublabel: "Process — mucus-secreting and pancreatic epithelium turns dry and keratinized.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Xerophthalmia: dry eyes → conjunctival squamous metaplasia → Bitot spots (keratin debris, foamy appearance) → keratomalacia (corneal degeneration)",
            sublabel: "Output — the eye cascade the photograph shows; xerosis cutis (dry, scaly skin) parallels it.",
            variant: "output",
          },
          {
            id: "o2",
            label: "Immunosuppression — defective epithelial barriers and mucosal immunity",
            sublabel: "Output — why supplementation in vitamin A-deficient measles patients may improve outcomes.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "retinal" },
          { from: "trigger", to: "s2", label: "retinoic acid" },
          { from: "s1", to: "o1", label: "rods fail first" },
          { from: "s2", to: "o1", label: "metaplasia" },
          { from: "s2", to: "o2", label: "barriers fail" },
        ],
        caption:
          "One deficiency, two mechanisms: without retinal the rods lose their pigment and dusk goes dark (nyctalopia first); without retinoic-acid signaling every wet epithelium dries into squamous metaplasia — the conjunctiva keratinizes into foamy Bitot spots, the cornea degenerates (keratomalacia), the skin turns dry and scaly (xerosis cutis), and the mucosal immune barrier collapses (immunosuppression, the reason measles outcomes improve with supplementation).",
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "bitot-spots-illustration",
      title: "Bitot spots — the foamy conjunctival sign",
      caption:
        "The source's photograph (label A) redrawn as a schematic: an open eye with a foamy, silvery-white triangular plaque of keratin debris on the temporal bulbar conjunctiva, adjacent to the limbus — with the dry-eye chip marking the xerophthalmia background. The right panel walks the full progression the spot sits inside: night blindness (nyctalopia) → xerosis + dry eyes → Bitot spots → keratomalacia, plus the immunosuppression branch, and the deficiency-vs-excess strip below.",
      notice:
        "Bitot spots are CONJUNCTIVAL SQUAMOUS METAPLASIA made visible — keratin debris with a foamy appearance, in an eye that is already dry. Recognize the spot by location (temporal conjunctiva near the limbus) and texture (foamy, not vascular). Everything else in the panel is the timeline the spot lives in: it appears after nyctalopia and before keratomalacia, and it means the deficiency is deep enough to threaten the cornea.",
    },
    {
      kind: "text",
      title: "The three forms and what each one does",
      body: [
        "Vitamin A includes retinal, retinol, and retinoic acid — and the exam rewards keeping the three straight. Retinal is the constituent of visual pigments: 11-cis retinal is the chromophore that rhodopsin needs, which is why the rods fail first and night blindness (nyctalopia) opens the deficiency cascade. Retinol is the storage and transport form — found in liver and leafy vegetables, and the reason liver is both the best source and the overdose risk. Retinoic acid is the differentiation signal: essential for normal differentiation of epithelial cells into specialized tissue (pancreatic cells, mucus-secreting cells) and it prevents squamous metaplasia — the dryness cascade of xerophthalmia and xerosis cutis when it is missing.",
        "The pharmacology rides on the same molecule: retinol is vitamin A, so think retin-A (used topically for wrinkles and acne); oral isotretinoin treats severe cystic acne; and all-trans retinoic acid treats acute promyelocytic leukemia, where it forces the leukemic promyelocyte to finish differentiating. All of these are teratogenic — isotretinoin is a vitamin A derivative, and a ⊝ pregnancy test and two forms of contraception are required before it is prescribed.",
      ],
    },
    {
      kind: "table",
      title: "Vitamin A deficiency vs excess — the two directions",
      intro: "The source's findings, sorted by direction (book p. 64).",
      columns: ["Direction", "Findings"],
      rows: [
        ["Deficiency", "Night blindness (nyctalopia) · dry, scaly skin (xerosis cutis) · dry eyes (xerophthalmia) · Bitot spots (keratin debris; foamy appearance on conjunctiva) · corneal degeneration (keratomalacia) · immunosuppression"],
        ["Acute toxicity", "Nausea, vomiting, ↑ICP (eg, vertigo, blurred vision)"],
        ["Chronic toxicity", "Alopecia, dry skin (eg, scaliness), hepatic toxicity and enlargement, arthralgias, and idiopathic intracranial hypertension"],
        ["Teratogenicity", "Interferes with homeobox gene → cleft palate, cardiac abnormalities — ⊝ pregnancy test + two forms of contraception required before isotretinoin"],
      ],
      caption:
        "Both directions converge on the head: acute excess raises ICP (vertigo, blurred vision), chronic excess causes idiopathic intracranial hypertension, and deficiency dries both eye and skin. The teratogenicity row is the regulatory fact — homeobox genes pattern the craniofacial midline, hence cleft palate and cardiac abnormalities.",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "Measles and the two retinoid therapies",
      body: "Supplementation in vitamin A-deficient measles patients may improve outcomes — measles strips mucosal immunity, and the epithelial barrier is exactly what retinoic acid maintains. The therapy direction: oral isotretinoin for severe cystic acne (with the contraception protocol), and all-trans retinoic acid for acute promyelocytic leukemia (differentiation therapy for the PML-RARA clone). One vitamin, three clinical departments: ophthalmology (Bitot spots), dermatology (isotretinoin), and hematology-oncology (APL).",
    },
    {
      kind: "callout",
      variant: "exam",
      title: "How the exam asks this page",
      body: "Four recurring shapes: (1) the dusk-failure stem — child who bumps into things at dusk, dry eyes with foamy conjunctival patches → vitamin A deficiency (Bitot spots); (2) the isotretinoin protocol stem — ⊝ pregnancy test + two contraceptions, why: teratogenic via homeobox (cleft palate, cardiac abnormalities); (3) the excess stem — polar-bear liver or chronic supplement overuse with alopecia, hepatotoxicity, arthralgias, and papilledema-grade headaches → chronic toxicity / idiopathic intracranial hypertension; (4) the APL stem — t(15;17) treated with all-trans retinoic acid.",
    },
  ],
  clinical: [
    {
      kind: "text",
      title: "From night blindness to keratomalacia — the clinical timeline",
      body: [
        "The eye findings arrive in a fixed order that the exam tests implicitly: nyctalopia first (pigment failure, fully reversible with replacement), then xerophthalmia with Bitot spots (metaplasia, still visible as foamy triangular conjunctival patches — the photograph's sign), and finally keratomalacia — corneal degeneration that can ulcerate and blind. The skin runs the parallel dryness program (xerosis cutis), and the immune barrier quietly fails, which is why vitamin A-deficient measles is the supplementation indication.",
        "On the toxicity side, the acute presentation is the Arctic-liver story — nausea, vomiting, and ↑ICP with vertigo and blurred vision within hours of a massive dose. The chronic presentation is the supplement-overuse story: alopecia, dry scaly skin, hepatotoxicity with enlargement, arthralgias, and idiopathic intracranial hypertension — a diagnosis of exclusion with papilledema that resolves when the vitamin stops.",
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 5-year-old with fat malabsorption can no longer find toys in a dim room; the eyes are dry with foamy, whitish patches on the whites of the eyes temporal to the iris.",
        discriminator: "Nyctalopia + foamy conjunctival patches",
        concept: "Vitamin A deficiency — Bitot spots",
        answer: "Conjunctival squamous metaplasia → Bitot spots (keratin debris; foamy appearance on conjunctiva), on the cascade night blindness → xerophthalmia → keratomalacia; treat with vitamin A replacement",
      },
      {
        stem: "A 17-year-old girl with severe nodulocystic acne is started on isotretinoin after a negative pregnancy test and counseling on two forms of contraception.",
        discriminator: "Isotretinoin + the contraception protocol",
        concept: "Vitamin A teratogenicity",
        answer: "Isotretinoin (a vitamin A derivative) is teratogenic — interferes with homeobox genes → cleft palate, cardiac abnormalities; ⊝ pregnancy test + two forms of contraception required",
      },
      {
        stem: "A man who takes high-dose vitamin A supplements for years has alopecia, scaling skin, arthralgias, an enlarged tender liver, and daily headaches with papilledema.",
        discriminator: "Chronic excess + intracranial hypertension",
        concept: "Vitamin A chronic toxicity",
        answer: "Alopecia, dry skin, hepatic toxicity and enlargement, arthralgias, and idiopathic intracranial hypertension — the chronic toxicity quartet",
      },
      {
        stem: "A promyelocytic leukemia with t(15;17) is treated with a differentiating agent rather than standard induction.",
        discriminator: "APL + differentiation therapy",
        concept: "All-trans retinoic acid",
        answer: "Use all-trans retinoic acid to treat acute promyelocytic leukemia — retinoic-acid differentiation therapy; the same nuclear-receptor signaling that differentiates epithelium differentiates the leukemic clone",
      },
    ],
    traps: [
      {
        a: "Vitamin A deficiency (night blindness, Bitot spots)",
        b: "Retinitis pigmentosa",
        whyConfused: "Both present with night blindness.",
        keyDifference: "Vitamin A deficiency adds dryness — xerosis cutis, xerophthalmia, foamy Bitot spots — and a malabsorption/diet history; retinitis pigmentosa is a hereditary rod-cone dystrophy with bone-spicule pigmentation on fundoscopy.",
        clue: "Foamy conjunctiva + dry skin → vitamin A; pigment clumps in the retina → RP.",
      },
      {
        a: "Acute vitamin A toxicity (↑ICP: vertigo, blurred vision)",
        b: "Chronic vitamin A toxicity (idiopathic intracranial hypertension)",
        whyConfused: "Both raise intracranial pressure without a mass.",
        keyDifference: "Acute: hours after a massive dose — nausea, vomiting, vertigo, blurred vision. Chronic: months-to-years of overuse — alopecia, dry skin, hepatotoxicity, arthralgias + IIH.",
        clue: "Single binge vs supplement habit; the liver and skin findings mark the chronic side.",
      },
      {
        a: "Bitot spots (keratin debris, foamy)",
        b: "Arcus senilis (lipid ring)",
        whyConfused: "Both are pale ocular deposits.",
        keyDifference: "Bitot spots are foamy, silvery patches of keratin on the CONJUNCTIVA (temporal, near the limbus) in vitamin A deficiency; arcus is a crisp lipid ring at the corneal margin, age- or lipid-related.",
        clue: "Foam + dry eye + dusk blindness → A deficiency; symmetric ring in an older adult → arcus.",
      },
    ],
    pivots: [
      {
        lookAlike: "A 'child with recurrent infections and dry eyes' stem offering vitamin A deficiency, DiGeorge, and IgA deficiency",
        differentiator: "The epithelium vs the immune organs",
        correctPath: "Squamous metaplasia pattern (xerophthalmia, Bitot spots, xerosis) + measles severity → vitamin A; thymic aplasia + hypocalcemia → DiGeorge; sinorespiratory infections with normal anatomy → IgA deficiency.",
      },
      {
        lookAlike: "A 'young woman on isotretinoin with headache and papilledema' stem offering vitamin A chronic toxicity, idiopathic intracranial hypertension, and dural sinus thrombosis",
        differentiator: "The drug history does the sorting",
        correctPath: "Isotretinoin (vitamin A derivative) → retinoid-induced intracranial hypertension — stop or reduce the drug rather than escalate workup; check for the chronic-toxicity company (alopecia, hepatotoxicity, arthralgias).",
      },
    ],
    miniCase: {
      vignette:
        "A 6-year-old boy with cystic fibrosis and pancreatic insufficiency is referred for “bumping into furniture at dusk.” His mother notes his eyes always look dry and irritated. On examination, the conjunctiva of both eyes shows foamy, whitish, triangular patches just lateral to the iris, and his arms have dry, scaly skin. He has been hospitalized twice this year for pneumonia.",
      question: "Which of the following is the most likely explanation for the eye findings?",
      options: [
        {
          label: "A",
          correct: true,
          text: "Conjunctival squamous metaplasia from vitamin A deficiency — Bitot spots (keratin debris; foamy appearance on conjunctiva)",
          why: "Correct. The chain is complete: fat malabsorption (CF/pancreatic insufficiency) → fat-soluble vitamin A deficiency → retinal depletion (dusk blindness) + retinoic-acid-dependent differentiation failure (squamous metaplasia of the conjunctiva, xerosis cutis) + immunosuppression (two pneumonias). Bitot spots are the visible keratin debris of the metaplastic conjunctiva.",
        },
        {
          label: "B",
          text: "Vitamin B2 deficiency with corneal vascularization",
          why: "Riboflavin deficiency does involve the eye (corneal vascularization, cheilosis, magenta tongue), but it produces vascular ingrowth — not foamy keratin patches — and it does not cause night blindness or dry scaly skin.",
        },
        {
          label: "C",
          text: "Allergic conjunctivitis with chemosis",
          why: "Allergic conjunctivitis is bilateral, itchy, with pink vascular injection and stringy discharge — foamy keratin plaques, nyctalopia, and xerosis cutis are not allergic signs, and the malabsorption history points away from allergy.",
        },
        {
          label: "D",
          text: "Congenital cataracts limiting vision in dim light",
          why: "Lens opacity reduces vision in ALL light, not selectively at dusk; the selective nyctalopia is a rod-pigment (retinal) signature, and cataracts do not explain conjunctival foam, xerosis, or the infections.",
        },
        {
          label: "E",
          text: "Idiopathic intracranial hypertension with visual obscurations",
          why: "IIH belongs to vitamin A EXCESS, not deficiency — and it presents with headache and papilledema, not dry eyes, foamy conjunctiva, and night blindness. The dose direction is the trap: the same vitamin causes both.",
        },
      ],
      reasoning:
        "Three findings triangulate one mechanism: nyctalopia (retinal/visual pigment), foamy conjunctival patches + dry scaly skin (retinoic-acid differentiation failure — squamous metaplasia), and recurrent pneumonia (epithelial immunosuppression). In a fat-malabsorbing child, vitamin A is the fat-soluble keystone; Bitot spots are its named physical sign, sitting between xerophthalmia and keratomalacia on the cascade. The wrong options borrow eye findings from B2 (vascularization), allergy (chemosis), lens disease (cataract), and the opposite dose direction (IIH from excess).",
    },
  },
  mnemonics: [
    {
      code: "“Retin-A = Retinol = vitamin A”",
      meaning: "Retinol is vitamin A, so think retin-A — used topically for wrinkles and acne; oral isotretinoin for severe cystic acne; all-trans retinoic acid for APL.",
      memorizes: "The drug family and its vitamin A identity",
      whenToUse: "Any isotretinoin/retinoid question — including the teratogenicity follow-up.",
      clinical: "Before isotretinoin: ⊝ pregnancy test and two forms of contraception (homeobox teratogen — cleft palate, cardiac abnormalities).",
    },
    {
      code: "“X marks the dry eye: Xerophthalmia, Xerosis, and the foamy Bitot eXtra”",
      meaning: "Vitamin A deficiency dries every epithelium: xerophthalmia (dry eyes), xerosis cutis (dry scaly skin), with Bitot spots as the foamy keratin debris of the metaplastic conjunctiva.",
      memorizes: "The deficiency cascade — nyctalopia → xerophthalmia → Bitot spots → keratomalacia",
      whenToUse: "Night-blindness stems with eye and skin findings.",
      clinical: "Bitot spots = deep deficiency = the cornea (keratomalacia, blindness) is next without replacement.",
    },
  ],
  rapidReview: {
    s30: [
      "Vitamin A includes retinal, retinol, retinoic acid — visual pigments (retinal); epithelial differentiation; prevents squamous metaplasia.",
      "Deficiency: nyctalopia, xerosis cutis, xerophthalmia, Bitot spots (foamy keratin debris), keratomalacia, immunosuppression.",
      "Acute toxicity: nausea, vomiting, ↑ICP (vertigo, blurred vision).",
      "Chronic toxicity: alopecia, dry skin, hepatotoxicity/enlargement, arthralgias, idiopathic intracranial hypertension.",
      "Teratogenic — homeobox gene: cleft palate, cardiac abnormalities; ⊝ pregnancy test + 2 contraception forms before isotretinoin.",
      "Isotretinoin: severe cystic acne. All-trans retinoic acid: acute promyelocytic leukemia.",
      "Sources: liver and leafy vegetables; supplementation helps vitamin A-deficient measles.",
    ],
    m3: [
      "Retinal = the chromophore (rhodopsin); rods fail first — dusk before daylight vision.",
      "Retinoic acid signal runs epithelial differentiation; its failure is squamous metaplasia — conjunctiva, pancreas, mucus membranes.",
      "Homeobox genes pattern the craniofacial midline — the reason the teratogenicity is cleft palate + cardiac.",
      "Both dose directions raise intracranial pressure: acute ↑ICP, chronic IIH.",
    ],
    m10: [
      "Bitot spots sit temporally on the bulbar conjunctiva near the limbus — foamy, silvery-white, well demarcated.",
      "The APL connection: all-trans retinoic acid differentiates the t(15;17) PML-RARA promyelocyte.",
      "Measles supplementation is the one infection-specific vitamin indication on this page.",
      "Vitamin A accumulates in fat — the fundamentals-page reason toxicity is common in excess.",
    ],
  },
  recall: [
    {
      q: "Name the three forms of vitamin A and match each to its function.",
      a: "Retinal — constituent of visual pigments; retinol — the vitamin itself (storage/transport; liver and leafy vegetables; retin-A); retinoic acid — epithelial differentiation signal (prevents squamous metaplasia) and the APL therapy (all-trans retinoic acid).",
    },
    {
      q: "List the eye and skin findings of vitamin A deficiency in the order they appear.",
      a: "Night blindness (nyctalopia) → dry eyes (xerophthalmia) with conjunctival squamous metaplasia → Bitot spots (keratin debris; foamy appearance on conjunctiva) → corneal degeneration (keratomalacia); skin: dry, scaly skin (xerosis cutis); plus immunosuppression.",
    },
    {
      q: "Contrast acute and chronic vitamin A toxicity.",
      a: "Acute: nausea, vomiting, ↑ICP (eg, vertigo, blurred vision). Chronic: alopecia, dry skin (eg, scaliness), hepatic toxicity and enlargement, arthralgias, and idiopathic intracranial hypertension.",
    },
    {
      q: "Why is isotretinoin teratogenic, and what are the required precautions?",
      a: "It is a vitamin A derivative that interferes with homeobox genes — cleft palate, cardiac abnormalities; therefore a ⊝ pregnancy test and two forms of contraception are required before prescribing.",
    },
    {
      q: "What infection has a vitamin-A-specific supplementation indication, and what retinoid treats APL?",
      a: "Supplementation in vitamin A-deficient measles patients may improve outcomes; all-trans retinoic acid treats acute promyelocytic leukemia.",
    },
  ],
  related: [
    {
      title: "Nutrition Fundamentals",
      note: "The absorption chain (bile, pancreas, ileum) that explains why CF and celiac deplete vitamin A with the other fat-soluble vitamins.",
      topicId: "nutrition-fundamentals",
    },
    {
      title: "Vitamins B1, B2, B3 & B5",
      note: "The water-soluble contrast: same malabsorption, different washout — and the eye findings sort A (dryness) from B2 (vascularization).",
      topicId: "b-vitamins-1",
    },
    {
      title: "Vitamin D",
      note: "The other pediatric fat-soluble deficiency — metaplasia and dryness (A) vs failed mineralization and bowing (D).",
      topicId: "vitamin-d",
    },
  ],
  crossLinks: [
    {
      subject: "Ophthalmology",
      connection: "The xerophthalmia cascade — nyctalopia, Bitot spots, keratomalacia — is the ocular vitamin-deficiency prototype.",
    },
    {
      subject: "Dermatology",
      connection: "Isotretinoin for severe cystic acne (and the contraception protocol); xerosis cutis as the skin sign of deficiency.",
    },
    {
      subject: "Hematology & Oncology",
      connection: "All-trans retinoic acid differentiates the t(15;17) acute promyelocytic leukemia clone.",
    },
  ],
};
