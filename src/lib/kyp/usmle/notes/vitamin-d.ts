import type { KypUsMLENote } from "../types";

// Biochemistry — Nutrition (N-batch, book order 5/8).
// Source: First Aid 2026, Part 1 pdf 90 / book 68 (vitamin D: D3/D2 sources,
// liver 25-hydroxylase, kidney 1α-hydroxylase, regulation, deficiency,
// excess, granulomatous disease)

export const vitaminD: KypUsMLENote = {
  id: "vitamin-d",
  title: "Vitamin D",
  subtitle:
    "Cholecalciferol from sun-struck skin and ergocalciferol from plants, hydroxylated twice — 25 in the liver for storage, 1α in the kidney as the regulated step — into calcitriol, the hormone that lifts Ca2+ and PO43– at gut, bone, and kidney, and the vitamin whose absence bows a child's legs.",
  subject: "Biochemistry",
  system: "Section II · High-Yield General Principles — Nutrition",
  pilotCategory: "Nutrition — fat-soluble vitamins",
  difficulty: 2,
  readTime: 10,
  sourceRef:
    "First Aid 2026, Part 1 pp. 68 (vitamin D: synthesis and activation, regulation, deficiency, excess, granulomatous disease)",
  tags: [
    "vitamin D",
    "cholecalciferol",
    "D3",
    "ergocalciferol",
    "D2",
    "25-hydroxylase",
    "1α-hydroxylase",
    "calcitriol",
    "25-OH D3",
    "rickets",
    "genu varum",
    "osteomalacia",
    "hypocalcemic tetany",
    "PTH",
    "hypercalcemia",
    "hypercalciuria",
    "chronic kidney disease",
    "granulomatous disease",
    "epithelioid macrophages",
    "breastfed infants",
    "7-dehydrocholesterol",
    "stratum basale",
  ],
  core: {
    what: "D3 (cholecalciferol) comes from exposure of skin (stratum basale) to sun, ingestion of fish, milk, plants; D2 (ergocalciferol) from ingestion of plants, fungi, yeasts. Both are converted to 25-OH D3 (storage form) in liver and to the active form 1,25-(OH)2 D3 (calcitriol) in kidney. Function: ↑intestinal absorption of Ca2+ and PO43–; ↑bone mineralization at low levels; ↑bone resorption at higher levels. Regulation: ↑PTH, ↓Ca → ↑1,25-(OH)2 D3 production; 1,25-(OH)2 D3 feedback inhibits its own production; ↑PTH → ↑Ca2+ reabsorption and ↓PO43– reabsorption in the kidney. Deficiency: rickets in children (deformity, such as genu varum 'bowlegs'), osteomalacia in adults (bone pain, muscle weakness), hypocalcemic tetany; caused by malabsorption, ↓sun exposure, poor diet, chronic kidney disease, advanced liver disease; give oral vitamin D to breastfed infants; darker skin and prematurity predispose. Excess: hypercalcemia, hypercalciuria, loss of appetite, stupor; seen in granulomatous diseases (↑activation of vitamin D by epithelioid macrophages).",
    why: "Vitamin D is the hinge between nutrition and the calcium chapters: its two-step activation explains CKD bone disease, its PTH regulation explains the labs of hypocalcemia, and its deficiency has the most photographable sign in the chapter (genu varum). The granulomatous-disease excess is the classic sarcoidosis stem.",
    keyIdea: "Track the HYDROXYLATIONS: sun/diet → D3 or D2 (inert) → liver 25-hydroxylase → 25-OH D3 (STORAGE — the right lab to measure) → kidney 1α-hydroxylase (THE regulated step — PTH turns it on, calcitriol feeds back off it) → 1,25-(OH)2 D3 (calcitriol — ↑Ca2+ and PO43– absorption at intestine, resorption/reabsorption at bone and renal tubules). Lose the kidney step (CKD) and you get renal osteodystrophy; add macrophage 1α-hydroxylase (sarcoid) and you get hypercalcemia the feedback cannot see.",
  },
  mechanisms: [
    {
      id: "vitamin-d-activation-regulation",
      title: "The activation cascade and its PTH thermostat",
      context: "Calcium homeostasis, fed vs deficient states",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Cholesterol → 7-dehydrocholesterol in skin (stratum basale) + sun/UV exposure → D3 (cholecalciferol); diet (plants, fungi, yeasts) → D2 (ergocalciferol)",
            sublabel: "Input — fish, milk, plants also supply D3; both forms enter the same cascade.",
            variant: "input",
          },
          {
            id: "s1",
            label: "LIVER — 25-hydroxylase → 25-OH D3, the STORAGE form",
            sublabel: "Process — a large, unregulated pool; the serum level to measure.",
            variant: "process",
          },
          {
            id: "s2",
            label: "KIDNEY — 1α-hydroxylase → 1,25-(OH)2 D3 (calcitriol), the ACTIVE form",
            sublabel: "Process — the regulated step: ↑PTH with ↓Ca turns it on; 1,25-(OH)2 D3 feedback inhibits its own production.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Intestines: ↑absorption of Ca2+ and PO43– · Bone: ↑Ca2+ and ↑PO43– released at high levels (mineralization at low levels) · Renal tubular cells: reabsorption ↑Ca2+ and ↑PO43–",
            sublabel: "Output — net ↑Ca2+ and ↑PO43– in serum.",
            variant: "output",
          },
          {
            id: "x1",
            label: "↑PTH also ↑Ca2+ reabsorption and ↓PO43– reabsorption in the kidney",
            sublabel: "Clinical — PTH's direct renal split: keep calcium, dump phosphate.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "D3 + D2" },
          { from: "s1", to: "s2", label: "25-hydroxylase → 25-OH D3" },
          { from: "s2", to: "o1", label: "1α-hydroxylase → calcitriol" },
          { from: "x1", to: "s2", label: "↑PTH, ↓Ca → ↑1,25" },
        ],
        caption:
          "Two hydroxylases, two organs, one thermostat: the liver's 25-hydroxylase fills a storage pool without asking; the kidney's 1α-hydroxylase is the switch PTH throws when calcium falls (and calcitriol switches off by feedback inhibition when it is plentiful). Active calcitriol then raises Ca2+ and PO43– from three directions at once — gut absorption, bone release, renal tubular reabsorption — with PTH simultaneously keeping Ca2+ and dumping PO43– in the kidney. Lose the kidney (CKD) and the last hydroxylase dies with it; let a granuloma's epithelioid macrophages run 1α-hydroxylase and hypercalcemia follows beyond feedback control.",
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "vitamin-d-activation-cascade",
      title: "The activation cascade — sun, liver, kidney",
      caption:
        "The source's figure redrawn with its full logic: Sun/UV exposure on skin converting 7-dehydrocholesterol (from cholesterol) to D3 (cholecalciferol), Diet providing D2 (ergocalciferol), both converging on the LIVER's 25-hydroxylase → 25-OH D3 (storage form), then the KIDNEY's 1α-hydroxylase → 1,25-(OH)2 D3 (calcitriol), with the REGULATION box (↑PTH ↓Ca → ↑1,25 production; 1,25 feedback inhibits its own production; ↑PTH → ↑Ca2+ reabsorption, ↓PO43– reabsorption), the dashed feedback line to 1α-hydroxylase, and the three target-organ boxes (Bone, Intestines, Renal tubular cells) converging on the net result: ↑Ca2+ and ↑PO43–.",
      notice:
        "The exam pulls three facts from this exact geometry: which form is measured (25-OH D3, the storage pool), which step is regulated (kidney 1α-hydroxylase, by PTH and feedback), and which organ fails in CKD (the same kidney step — no 1α-hydroxylase, no calcitriol, renal osteodystrophy). The dose-dependence line lives here too: mineralization at low levels, resorption at higher levels.",
    },
    {
      kind: "visual",
      visualId: "rickets-radiograph-pattern",
      title: "Rickets — genu varum, the bowed-leg sign",
      caption:
        "The source's photograph (label A) redrawn as a schematic: a standing toddler with lateral bowing of both legs — knees far apart, ankles together — the red double-headed arrow marking the intercondylar gap, with the mineralization explanation (soft bone bows under the toddler's own weight), the deficiency-cause list (malabsorption, ↓sun, poor diet, CKD, advanced liver disease, breastfed infants, darker skin, prematurity), and the rickets-vs-osteomalacia strip.",
      notice:
        "Genu varum is a WEIGHT-BEARING deformity: the growth plates are soft because they cannot mineralize, so the toddler's own skeleton bows outward at the knee. The same defect in adults (closed growth plates) is osteomalacia — bone pain and muscle weakness without the bowing. Hypocalcemic tetany is the acute severe end. Learn the cause list as geography: gut (malabsorption), sky (↓sun), table (poor diet), kidney (CKD), liver (advanced disease).",
    },
    {
      kind: "table",
      title: "D3 vs D2 vs the two hydroxylated forms",
      intro: "The source's four-form ladder (book p. 68).",
      columns: ["Form", "Origin", "Status"],
      rows: [
        ["D3 (cholecalciferol)", "Exposure of skin (stratum basale) to sun; ingestion of fish, milk, plants", "Inert precursor"],
        ["D2 (ergocalciferol)", "Ingestion of plants, fungi, yeasts", "Inert precursor"],
        ["25-OH D3", "Liver (25-hydroxylase)", "STORAGE form — the measured serum level"],
        ["1,25-(OH)2 D3 (calcitriol)", "Kidney (1α-hydroxylase)", "ACTIVE form — ↑Ca2+ and PO43– absorption; regulated by PTH/feedback"],
      ],
      caption:
        "Both precursors ride the same ladder; the liver step is unregulated (storage), the kidney step is the thermostat (PTH on, calcitriol off). The lab question ('what do you measure?') answers 25-OH D3; the physiology question ('what does CKD kill?') answers 1α-hydroxylase.",
    },
    {
      kind: "callout",
      variant: "why",
      title: "Why granulomatous disease causes vitamin D excess",
      body: "In sarcoidosis and other granulomatous diseases, epithelioid macrophages express 1α-hydroxylase — the same enzyme the kidney normally monopolizes — and convert the abundant 25-OH D3 storage pool to calcitriol outside every regulatory loop. PTH falls, feedback fails (the macrophages do not listen), and the result is hypercalcemia and hypercalciuria with loss of appetite and stupor. This is why a sarcoidosis patient returning from a sunny vacation presents with confusion and stones: more substrate (sun-driven D3), same unregulated activation.",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "Breastfed infants, darker skin, prematurity — the deficiency-prone",
      body: "Breast milk is low in vitamin D (the vitamin K note's 'breast-fed infants Don't Know about vitamins D and K' line applies to both fat-soluble vitamins) — give oral vitamin D to breastfed infants. Darker skin (melanin competes with 7-dehydrocholesterol for UVB) and prematurity both predispose to deficiency. The institutionalized elderly and northern-latitude patients reproduce the same physiology: ↓sun exposure plus poor intake, with CKD or advanced liver disease shortening the ladder's last steps.",
    },
    {
      kind: "callout",
      variant: "exam",
      title: "How the exam asks this page",
      body: "Four recurring shapes: (1) the child-deformity stem — toddler with bowed legs (genu varum) and a waddling gait → rickets; adult with bone pain + muscle weakness → osteomalacia; add carpopedal spasm for hypocalcemic tetany; (2) the CKD stem — dialysis patient with bone pain and ↑PTH (cannot make 1,25-(OH)2 D3) → renal osteodystrophy; (3) the sarcoidosis stem — hypercalcemia + hypercalciuria + ↓PTH + ↑1,25-(OH)2 D3 → granuloma macrophage activation (treat with steroids, avoid sun); (4) the regulation stem — ↓Ca triggers ↑PTH which ↑1α-hydroxylase, while 1,25 feedback inhibits its own production.",
    },
  ],
  clinical: [
    {
      kind: "text",
      title: "From deficiency to excess — the clinical arc",
      body: [
        "Deficiency presents by age: rickets in children — bone deformity such as genu varum 'bowlegs' (the photograph's toddler, knees apart, ankles together) with costochondral beading and widening of the wrists and ankles — and osteomalacia in adults, where the same unmineralized osteoid reads as bone pain and proximal muscle weakness rather than deformity. Hypocalcemic tetany (carpopedal spasm, Chvostek and Trousseau signs) marks the acute, deep end. The causes run the full geography: malabsorption, ↓sun exposure, poor diet, chronic kidney disease, advanced liver disease, plus the infant and skin-risk groups.",
        "Excess is the mirror image: hypercalcemia (stupor, constipation, polyuria), hypercalciuria (stones), loss of appetite — and the pathognomonic modern cause is granulomatous disease, where epithelioid macrophage 1α-hydroxylase activates the storage pool unchecked. The management contrast is worth memorizing: deficiency gets repletion (and breastfed infants get routine oral D), granuloma-driven excess gets glucocorticoids (and sun avoidance) rather than simply stopping supplements — the substrate keeps coming from the skin.",
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "An 18-month-old exclusively breastfed toddler in a northern latitude presents with bowed legs, a waddling gait, and widening of the wrists.",
        discriminator: "Genu varum 'bowlegs' + breastfed + low sun",
        concept: "Rickets — vitamin D deficiency in a child",
        answer: "Deformity (such as genu varum 'bowlegs') from failed growth-plate mineralization; give oral vitamin D to breastfed infants; darker skin and prematurity predispose",
      },
      {
        stem: "A 55-year-old with Crohn disease and short-gut malabsorption has diffuse bone pain and proximal muscle weakness; x-rays show pseudofractures (Looser lines), and the Ca2+ is low-normal.",
        discriminator: "Bone pain + muscle weakness in an adult with malabsorption",
        concept: "Osteomalacia — vitamin D deficiency in an adult",
        answer: "Malabsorption, ↓sun exposure, poor diet, chronic kidney disease, advanced liver disease → osteomalacia (bone pain and muscle weakness), with hypocalcemic tetany at the severe end",
      },
      {
        stem: "A dialysis patient develops bone pain, fractures, and ↑PTH with low calcium; 1,25-(OH)2 D3 is undetectable despite repletion of 25-OH D3.",
        discriminator: "Failed kidney 1α-hydroxylase — storage form present, active form absent",
        concept: "CKD — loss of the activation step",
        answer: "Both converted to 25-OH D3 in liver and to the active form 1,25-(OH)2 D3 in kidney — CKD removes 1α-hydroxylase; treat with active vitamin D (calcitriol) analogs (renal osteodystrophy territory)",
      },
      {
        stem: "A 34-year-old with sarcoidosis returns from a beach vacation with confusion, constipation, polyuria, and a calcium of 12.9; PTH is suppressed and 1,25-(OH)2 D3 elevated.",
        discriminator: "Granulomatous disease + hypercalcemia + ↑1,25 + ↓PTH",
        concept: "Granuloma-driven vitamin D excess",
        answer: "Seen in granulomatous diseases: ↑activation of vitamin D by epithelioid macrophages — hypercalcemia, hypercalciuria, loss of appetite, stupor; treat with glucocorticoids and sun avoidance",
      },
    ],
    traps: [
      {
        a: "Rickets (children)",
        b: "Osteomalacia (adults)",
        whyConfused: "Same mineralization defect.",
        keyDifference: "Rickets: deformity (genu varum bowlegs) through open growth plates. Osteomalacia: bone pain + muscle weakness through closed plates; pseudofractures (Looser lines).",
        clue: "Age of the patient decides the name and the x-ray.",
      },
      {
        a: "Vitamin D excess (granulomatous hypercalcemia)",
        b: "Primary hyperparathyroidism",
        whyConfused: "Both: hypercalcemia with altered vitamin D economy.",
        keyDifference: "Granuloma: ↓PTH with ↑1,25-(OH)2 D3 (macrophage 1α-hydroxylase, no feedback); PHPT: ↑PTH (usually normal/high 1,25 via PTH-driven synthesis).",
        clue: "PTH suppressed → ectopic activation; PTH elevated → parathyroid.",
      },
      {
        a: "25-OH D3 (storage form)",
        b: "1,25-(OH)2 D3 (calcitriol)",
        whyConfused: "Both are 'vitamin D levels.'",
        keyDifference: "25-OH D3 is the long-lived storage pool measured to assess status; 1,25-(OH)2 D3 is the short-lived active hormone — low in CKD, inappropriately high in granulomatous disease.",
        clue: "'Which level do you order?' → 25-OH; 'what's driving the calcium?' → often 1,25.",
      },
      {
        a: "Vitamin D deficiency hypocalcemia",
        b: "PTH-driven hypocalcemia (hypoparathyroidism)",
        whyConfused: "Both present with tetany.",
        keyDifference: "Vitamin D deficiency: low/normal Ca2+, low PO43–, ↑ALP, ↑PTH (appropriate secondary rise); hypoparathyroidism: low Ca2+ with HIGH PO43– and low PTH — the phosphate direction separates them.",
        clue: "PO43– high → missing PTH; PO43– low → D deficiency or hungry bone.",
      },
    ],
    pivots: [
      {
        lookAlike: "A 'child with bowed legs' stem offering rickets, Blount disease, and physiologic bowing",
        differentiator: "The metabolic company the bowing keeps",
        correctPath: "Bowing + widening of wrists/ankles, costochondral beading, delayed dentition, ↑ALP, low 25-OH D3 → rickets; Blount disease is focal proximal tibial varus without metabolic signs; physiologic bowing resolves by age 2 with normal labs.",
      },
      {
        lookAlike: "A 'hypercalcemic sarcoid patient' stem offering vitamin D excess, malignancy-associated hypercalcemia, and primary hyperparathyroidism",
        differentiator: "PTH plus 1,25-(OH)2 D3",
        correctPath: "↓PTH + ↑1,25 → granuloma macrophage activation (vitamin D excess); ↓PTH + ↑PTHrP → humoral hypercalcemia of malignancy; ↑PTH ± stones → primary hyperparathyroidism.",
      },
    ],
    miniCase: {
      vignette:
        "A 20-month-old boy born at 34 weeks' gestation and exclusively breastfed — no supplements — is brought in because his legs have been bowing outward for 4 months. He lives in Anchorage, Alaska, and the visit is in February. He walks with a waddling gait; the ankles and wrists appear widened, and the costochondral junctions are palpably beaded. Laboratory studies: Ca2+ 8.1 mg/dL (low), PO43– 3.0 mg/dL (low), ALP markedly elevated, 25-OH D3 level low; secondary hyperparathyroidism is present.",
      question: "Which of the following best explains the child's skeletal findings?",
      options: [
        {
          label: "A",
          correct: true,
          text: "Vitamin D deficiency causing rickets — impaired mineralization of growing bone (growth plates) produces deformity such as genu varum 'bowlegs'",
          why: "Correct. Every risk factor is stacked: prematurity, exclusive breastfeeding without oral D, northern-latitude winter sun (↓sun exposure), and darker-skin risk in the source list. Failed mineralization at open growth plates bows the legs under weight (genu varum); low Ca2+ with low PO43–, high ALP, and secondary ↑PTH is the classic rickets lab set (tertiary tetany risk if Ca2+ falls further).",
        },
        {
          label: "B",
          text: "Vitamin C deficiency with impaired collagen cross-linking",
          why: "Scurvy causes gum swelling, petechiae, and bone fragility from collagen hydroxylation failure — it does not bow the legs symmetrically, does not lower calcium/phosphate, and does not raise ALP as the leading feature.",
        },
        {
          label: "C",
          text: "Osteogenesis imperfecta from type I collagen mutation",
          why: "OI produces recurrent fractures with blue sclerae and hearing loss — not a symmetric weight-bearing deformity with a hypocalcemic, hyper-ALP, low-25-OH D3 metabolic picture.",
        },
        {
          label: "D",
          text: "Osteomalacia from chronic kidney disease",
          why: "Osteomalacia is the ADULT name of the same mineralization defect; CKD would show renal failure with an inability to make 1,25-(OH)2 D3 — this child has normal renal function and a low STORAGE form (25-OH D3), meaning the supply never arrived, not that activation failed.",
        },
        {
          label: "E",
          text: "Physiologic genu varum of infancy",
          why: "Physiologic bowing is painless, resolves spontaneously by age 2, and comes with a normal examination and normal Ca2+/PO43–/ALP/25-OH D3 — this child's widened wrists, beaded costochondral junctions, tetany-risk hypocalcemia, and low 25-OH D3 define disease, not a variant.",
        },
      ],
      reasoning:
        "The vignette assembles the source's deficiency-risk list into one patient: prematurity, breastfeeding without supplementation, and minimal UV exposure (Alaska winter) — plus the physical signs the photograph shows (genu varum with the knee-gap arrow, widened wrists/ankles, rachitic rosary) and the metabolic signature (low Ca2+, low PO43–, ↑ALP, secondary hyperparathyroidism, low 25-OH D3). CLUE → MECHANISM → FINDING → DIAGNOSIS → MANAGEMENT: stacked deficiency risks → no calcitriol → osteoid fails to mineralize at the growth plates → rickets → oral vitamin D (routine for breastfed infants), calcium, and follow-up of the bowing.",
    },
  },
  mnemonics: [
    {
      code: "“Sun → skin (D3), salad → gut (D2), liver adds 25, kidney adds the 1α”",
      meaning: "7-dehydrocholesterol in stratum basale + sun/UV → D3 cholecalciferol; diet (plants, fungi, yeasts) → D2 ergocalciferol; liver 25-hydroxylase → storage; kidney 1α-hydroxylase → active calcitriol.",
      memorizes: "The four-form activation ladder",
      whenToUse: "Any activation, measurement, or CKD question.",
      clinical: "25-OH D3 = what you measure; 1α-hydroxylase = what CKD loses; calcitriol = what you replace in CKD.",
    },
    {
      code: "“Rickets bends children; osteomalacia aches adults; granulomas burn calcium”",
      meaning: "Deficiency through open growth plates → deformity (genu varum); through closed plates → bone pain + muscle weakness; excess via granuloma 1α-hydroxylase → hypercalcemia, hypercalciuria, stupor.",
      memorizes: "Age-based deficiency phenotypes + the granulomatous excess",
      whenToUse: "Any vitamin D stem with age or sarcoidosis context.",
      clinical: "Breastfed infants get oral D; sarcoid hypercalcemia gets steroids and shade.",
    },
  ],
  rapidReview: {
    s30: [
      "D3 (cholecalciferol): sun on skin stratum basale (7-dehydrocholesterol), fish, milk, plants; D2 (ergocalciferol): plants, fungi, yeasts.",
      "Liver 25-hydroxylase → 25-OH D3 (storage form); kidney 1α-hydroxylase → 1,25-(OH)2 D3 (calcitriol, active).",
      "Function: ↑intestinal absorption of Ca2+ and PO43–; ↑bone mineralization at low levels, ↑bone resorption at higher levels.",
      "Regulation: ↑PTH, ↓Ca → ↑1,25-(OH)2 D3 production; 1,25 feedback inhibits its own production; ↑PTH → ↑Ca2+ reabsorption, ↓PO43– reabsorption.",
      "Deficiency: rickets in children (genu varum 'bowlegs'), osteomalacia in adults (bone pain, muscle weakness), hypocalcemic tetany.",
      "Causes: malabsorption, ↓sun, poor diet, CKD, advanced liver disease; give oral D to breastfed infants; darker skin + prematurity predispose.",
      "Excess: hypercalcemia, hypercalciuria, loss of appetite, stupor — granulomatous disease (epithelioid macrophage activation).",
    ],
    m3: [
      "The liver 25-hydroxylase is unregulated — storage pool size reflects supply; the kidney 1α-hydroxylase carries the PTH/calcitriol thermostat.",
      "Both D2 and D3 ride the same ladder — 'which form' questions are about source, not pathway.",
      "Vitamin D raises BOTH Ca2+ and PO43– absorption — the PTH split (↑Ca2+ reabsorption, ↓PO43– reabsorption) is the contrast the exam draws.",
      "Calcitriol's own feedback inhibition is why granuloma-driven (feedback-deaf) production is so dangerous.",
    ],
    m10: [
      "Measure 25-OH D3 for status; interpret 1,25-(OH)2 D3 when CKD or granulomatous disease is in play.",
      "Rickets x-ray signature: cupped, frayed metaphyses + widened growth plates (the wrists/ankles the schematic labels).",
      "Looser zones (pseudofractures) are osteomalacia's radiologic sign in adults.",
      "Sarcoid hypercalcemia: ↓PTH, ↑1,25 — treat with corticosteroids; sunlight and supplements both add substrate.",
      "Premature infants have high mineral demands and no transplacental D in the last weeks — double risk with breastfeeding.",
      "CKD renal osteodystrophy = failed 1α-hydroxylase + ↑PTH + ↓PO43– clearance — the endocrine link between nephrology and bone.",
    ],
  },
  recall: [
    {
      q: "Trace vitamin D from its two sources to its active form, naming organs and enzymes.",
      a: "D3 (cholecalciferol) from sun/UV on skin (stratum basale; from cholesterol → 7-dehydrocholesterol) and fish, milk, plants; D2 (ergocalciferol) from plants, fungi, yeasts. Liver 25-hydroxylase → 25-OH D3 (storage); kidney 1α-hydroxylase → 1,25-(OH)2 D3 (calcitriol, active).",
    },
    {
      q: "State the three regulatory rules of the activation step.",
      a: "↑PTH, ↓Ca → ↑1,25-(OH)2 D3 production; 1,25-(OH)2 D3 feedback inhibits its own production; ↑PTH → ↑Ca2+ reabsorption and ↓PO43– reabsorption in the kidney.",
    },
    {
      q: "Contrast vitamin D function at low vs high levels, and name its three target organs with effects.",
      a: "↑bone mineralization at low levels; ↑bone resorption at higher levels. Targets: intestines (↑absorption of Ca2+ and PO43–), bone (release of Ca2+ and PO43–), renal tubular cells (reabsorption ↑Ca2+ and ↑PO43–; urine ↓Ca2+ and ↓PO43–) — net ↑Ca2+ and ↑PO43–.",
    },
    {
      q: "Give the deficiency phenotypes by age and five causes.",
      a: "Rickets in children (deformity, such as genu varum 'bowlegs'), osteomalacia in adults (bone pain, muscle weakness), hypocalcemic tetany. Causes: malabsorption, ↓sun exposure, poor diet, chronic kidney disease, advanced liver disease (plus breastfed infants without supplementation, darker skin, prematurity).",
    },
    {
      q: "Why does granulomatous disease cause hypercalcemia, and what are the other excess findings?",
      a: "Granulomatous diseases (eg, sarcoidosis) activate vitamin D by ↑1α-hydroxylase activity in epithelioid macrophages — unregulated calcitriol production. Excess: hypercalcemia, hypercalciuria, loss of appetite, stupor.",
    },
  ],
  related: [
    {
      title: "Nutrition Fundamentals",
      note: "The fat-soluble absorption chain (bile, pancreas, ileum) that malabsorption breaks to cause D deficiency alongside A, E, and K.",
      topicId: "nutrition-fundamentals",
    },
    {
      title: "Vitamins E & K",
      note: "The other two fat-soluble partners — the D-and-K 'breast-fed infants Don't Know' line ties the deficiency-prone infants together.",
      topicId: "vitamins-e-k",
    },
    {
      title: "Vitamins B6, B7, B9 & B12",
      note: "The water-soluble contrast in storage and washout — and the PTH/calcium economy D runs versus the one-carbon economy the B vitamins run.",
      topicId: "b-vitamins-2",
    },
  ],
  crossLinks: [
    {
      subject: "Endocrinology",
      connection: "PTH and calcium homeostasis — the ↑PTH/↓Ca trigger, feedback inhibition, and the renal Ca2+/PO43– split all live here.",
    },
    {
      subject: "Nephrology",
      connection: "CKD kills 1α-hydroxylase — renal osteodystrophy and the rationale for active-D analogs in dialysis patients.",
    },
    {
      subject: "Pulmonology",
      connection: "Sarcoidosis and other granulomatous diseases cause feedback-deaf calcitriol production — hypercalcemia with suppressed PTH.",
    },
  ],
};
