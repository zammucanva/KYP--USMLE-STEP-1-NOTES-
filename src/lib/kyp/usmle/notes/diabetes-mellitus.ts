import type { KypUsMLENote } from "../types";

// Ported from the KYP USMLE 2026 pilot corpus.
// Source: First Aid 2026, Part 1 pp. 101, 371–374, 380–381 (diabetes mellitus; type 1 vs 2; DKA vs HHS; hypoglycemia; DM therapy; sorbitol)

export const diabetesMellitus: KypUsMLENote = {
  id: "diabetes-mellitus",
  title: "Diabetes Mellitus",
  subtitle: "One hormone, two diseases, four diagnostic numbers, two hyperglycemic emergencies, and two complication mechanisms — glycation and sorbitol — that explain every end-organ failure.",
  subject: "Endocrine",
  system: "Section III · Endocrine — Pathology & Pharmacology",
  pilotCategory: "Integrated multisystem disease",
  difficulty: 3,
  readTime: 16,
  sourceRef: "First Aid 2026, Part 1 pp. 79, 349–352, 358–359 (diabetes mellitus; type 1 vs 2; DKA vs HHS; hypoglycemia; DM therapy; sorbitol)",
  tags: [
    "HbA1c",
    "DKA",
    "HHS",
    "sorbitol",
    "AGEs",
    "metformin",
    "GLP-1",
    "SGLT2",
  ],
  core: {
    what: "Diabetes mellitus is chronic hyperglycemia from absent insulin (type 1, autoimmune β-cell destruction), insulin resistance with progressive β-cell failure (type 2), or secondary causes (steroids, unopposed GH/epinephrine secretion).",
    why: "It is the integrated multisystem disease par excellence — biochemistry (sorbitol, glycation), pathology (every organ), pharmacology (seven drug classes), and the two emergencies (DKA, HHS) that anchor acid-base and fluid physiology.",
    keyIdea: "All chronic complications flow through two mechanisms: NONENZYMATIC GLYCATION (AGEs → small-vessel hyaline arteriolosclerosis → retinopathy/nephropathy/neuropathy; large-vessel atherosclerosis → CAD, stroke, PVD — MI is the most common cause of death) and OSMOTIC SORBITOL DAMAGE (aldose reductase in tissues lacking sorbitol dehydrogenase — LARKS: Lens, b, Retina, Kidneys, Schwann cells → cataracts, retinopathy, neuropathy).",
  },
  blocks: [
    {
      kind: "table",
      title: "Diagnosis — the four numbers",
      columns: [
        "Test",
        "Diagnostic cutoff",
        "Notes",
      ],
      rows: [
        [
          "HbA1c",
          "≥6.5%",
          "Reflects average blood glucose over prior 3 months (influenced by RBC turnover)",
        ],
        [
          "Fasting plasma glucose",
          "≥126 mg/dL",
          "Fasting for >8 hours",
        ],
        [
          "2-hour oral glucose tolerance test",
          "≥200 mg/dL",
          "2 hours after 75 g glucose in water",
        ],
        [
          "Random plasma glucose",
          "≥200 mg/dL",
          "Requires presence of hyperglycemic symptoms",
        ],
      ],
    },
    {
      kind: "visual",
      visualId: "diabetes-complications-web",
      title: "The complications web — glycation and sorbitol side by side",
      caption: "Chronic hyperglycemia branching into nonenzymatic glycation (AGEs → small + large vessel disease) and osmotic sorbitol damage (LARKS organs).",
      notice: "Follow the two highways to their shared end organs — the retina, kidney, and nerve appear on BOTH branches, which is why diabetic complications cluster. MI sits at the end of the large-vessel branch — the #1 cause of death.",
    },
    {
      kind: "compare",
      title: "Type 1 vs type 2 — the full discriminator table",
      intro: "One row at a time, each is a potential exam discriminator; the twin-concordance and HLA rows are perennial favorites.",
      columns: [
        "Type 1",
        "Type 2",
      ],
      rows: [
        {
          label: "Primary defect",
          a: "Autoimmune T-cell–mediated destruction of β cells (autoantibodies against islet cell cytoplasm, GAD65, and insulin may be present)",
          b: "↑ resistance to insulin with progressive pancreatic β-cell failure",
        },
        {
          label: "Insulin necessary in treatment",
          a: "Always",
          b: "Sometimes",
        },
        {
          label: "Age (exceptions common)",
          a: "<30 yr",
          b: ">40 yr",
        },
        {
          label: "Association with obesity",
          a: "No",
          b: "Yes",
        },
        {
          label: "Genetic predisposition",
          a: "Relatively weak (50% concordance in identical twins), polygenic",
          b: "Relatively strong (90% concordance in identical twins), polygenic",
        },
        {
          label: "HLA association",
          a: "Yes — HLA-DR4 and -DR3 (4 − 3 = type 1)",
          b: "No",
        },
        {
          label: "Glucose intolerance",
          a: "Severe",
          b: "Mild to moderate",
        },
        {
          label: "Insulin sensitivity",
          a: "High",
          b: "Low",
        },
        {
          label: "Ketoacidosis",
          a: "Common",
          b: "Rare",
        },
        {
          label: "β-cell numbers",
          a: "↓",
          b: "Variable (with amyloid deposits)",
        },
        {
          label: "Serum insulin level",
          a: "↓",
          b: "↑ initially, but ↓ in advanced disease",
        },
        {
          label: "Classic symptoms (polydipsia, polyuria, polyphagia, weight loss)",
          a: "Common",
          b: "Sometimes",
        },
        {
          label: "Histology",
          a: "Islet leukocytic infiltrate",
          b: "Islet amyloid polypeptide deposits",
        },
      ],
    },
    {
      kind: "steps",
      title: "Acute presentations — the 3 P's and their mechanism",
      intro: "Polydipsia, polyuria, polyphagia, weight loss — every one is osmotic or catabolic in origin.",
      steps: [
        {
          label: "Hyperglycemia exceeds renal threshold → glycosuria",
          detail: "Osmotic diuresis → polyuria and volume contraction → polydipsia (also ↑ plasma osmolality drives thirst).",
        },
        {
          label: "Insulin deficiency = catabolism",
          detail: "Despite hyperglycemia, cells starve → polyphagia; broken-down fat and muscle → weight loss (loss of muscle mass).",
        },
        {
          label: "Rarely, unopposed hormone secretion",
          detail: "GH and epinephrine secretion (eg, pheochromocytoma) or glucocorticoid therapy (steroid diabetes) can produce hyperglycemia.",
        },
      ],
    },
    {
      kind: "text",
      title: "Hypoglycemia in diabetes — the treatment complication",
      body: [
        "Hypoglycemia usually occurs in patients treated with insulin or insulin secretagogues (sulfonylureas, meglitinides) in the setting of high-dose treatment, inadequate food intake, and/or exercise.",
        "NEUROGENIC (autonomic) symptoms — diaphoresis, tachycardia, tremor, anxiety, hunger — provide hypoglycemia awareness. NEUROGLYCOPENIC symptoms — altered mental status, seizures, death — reflect CNS glucose starvation and may occur WITHOUT preceding autonomic warning in patients with an attenuated response, eg, β-blocker use (hypoglycemia unawareness).",
        "Treatment: simple carbohydrates (glucose tablets, fruit juice); IM glucagon; IV dextrose for severe/unconscious presentations.",
      ],
    },
  ],
  clinical: [
    {
      kind: "compare",
      title: "DKA vs HHS — the emergency comparison",
      columns: [
        "Diabetic ketoacidosis",
        "Hyperosmolar hyperglycemic state",
      ],
      rows: [
        {
          label: "Pathogenesis",
          a: "Insulin noncompliance/↑ requirements under stress → lipolysis and free fatty acid oxidation → ↑ ketones (β-hydroxybutyrate > acetoacetate). Insulin deficient, ketones PRESENT",
          b: "Profound hyperglycemia → excessive osmotic diuresis → dehydration and ↑ serum osmolality, classically in older type 2 patients with limited ability to drink. Insulin PRESENT, ketones deficient",
        },
        {
          label: "Signs/symptoms",
          a: "DKA is Deadly — Delirium/psychosis, Kussmaul respirations, Abdominal pain/nausea/vomiting, Dehydration; fruity breath (exhaled acetone)",
          b: "Thirst, polyuria, lethargy, focal neurologic deficits, seizures",
        },
        {
          label: "Labs",
          a: "Hyperglycemia, ↑ H⁺, ↓ HCO₃⁻ (↑ anion-gap metabolic acidosis), ↑ urine and blood ketones, leukocytosis; normal/↑ serum K⁺ with depleted intracellular K⁺ (↓ insulin + acidosis shift; osmotic diuresis → total-body K⁺ depletion)",
          b: "Hyperglycemia often >600 mg/dL, ↑ serum osmolality >320 mOsm/kg, NORMAL pH (no acidosis), no ketones; normal/↑ serum K⁺, ↓ intracellular K⁺",
        },
        {
          label: "Complications",
          a: "Life-threatening mucormycosis, cerebral edema, cardiac arrhythmias",
          b: "Progression to coma and death if untreated",
        },
        {
          label: "Treatment",
          a: "IV fluids, IV insulin, K⁺ repletion (intracellular stores); glucose may be REQUIRED to prevent hypoglycemia from insulin therapy",
          b: "Aggressive IV fluid rehydration (the primary therapy), insulin, electrolyte management",
        },
      ],
    },
  ],
  drugs: [
    {
      drug: "Insulin preparations",
      klass: "Hormone replacement",
      target: "Insulin receptor (tyrosine kinase activity)",
      mechanism: "Liver: ↑ glucose storage as glycogen; Muscle: ↑ glycogen + protein synthesis; Fat: ↑ TG storage; Cell membrane: ↑ K⁺ uptake",
      effect: "Drives glucose and K⁺ into cells; anabolic switch",
      uses: "Type 1 DM (always); type 2 when oral agents fail; gestational DM if diet/exercise insufficient. Regular (short-acting) IV insulin preferred for DKA, hyperkalemia (with glucose), stress hyperglycemia",
      adverse: "Hypoglycemia, lipodystrophy, rare hypersensitivity, weight gain",
      clue: "Know the onset ladder: rapid (no lag) lispro/aspart/glulisine → short regular → intermediate NPH → long detemir/glargine → very long degludec",
    },
    {
      drug: "Metformin",
      klass: "Biguanide — 1st line for type 2",
      target: "Mitochondrial glycerol-3-phosphate dehydrogenase (mGPD) inhibition + AMPK activation",
      mechanism: "↓ hepatic gluconeogenesis, ↓ glucagon action; ↑ glycolysis and peripheral glucose uptake (insulin sensitization)",
      effect: "Lowers glucose without insulin secretion — weight loss, no hypoglycemia alone",
      uses: "First-line type 2 DM (with lifestyle education for all patients: diet, exercise, glucose monitoring, complication management)",
      adverse: "GI upset; lactic acidosis (renal insufficiency, cirrhosis, sepsis, hypoperfusion); vitamin B12 deficiency",
      clue: "Weight-NEGATIVE oral agent — the go-to answer for obese type 2 patients",
    },
    {
      drug: "Pioglitazone",
      klass: "Thiazolidinedione",
      target: "PPAR-γ (nuclear receptor)",
      mechanism: "↑ insulin sensitivity and adiponectin → regulated glucose metabolism and fatty acid storage",
      effect: "Insulin sensitization (delayed onset — several weeks)",
      uses: "Type 2 DM add-on",
      adverse: "Weight gain, edema, HF (contraindicated in NYHA III–IV), ↑ fracture risk",
      clue: "PPAR-γ = 'Ppar-γ lights up Ppar-adipose' — acts on adipose to sensitize the body",
    },
    {
      drug: "Sulfonylureas (glipizide, glyburide) / meglitinides (nateglinide, repaglinide)",
      klass: "Insulin secretagogues",
      target: "SUR1 K⁺ channel on pancreatic β cell",
      mechanism: "Close K⁺ channels → cell depolarizes → ↑ Ca²⁺ influx → insulin release (meglitinides: ↑ glucose-induced insulin secretion)",
      effect: "Pancreas-driven glucose lowering — requires surviving β cells",
      uses: "Type 2 DM",
      adverse: "Hypoglycemia (↑ risk in renal insufficiency), weight gain; 1st-generation (chlorpropamide, tolbutamide) — disulfiram-like reaction (rarely used)",
      clue: "Secretagogue = hypoglycemia risk — a favorite adverse-effect discriminator",
    },
    {
      drug: "GLP-1 receptor analogs (exenatide, liraglutide, semaglutide) / DPP-4 inhibitors (sitagliptin, saxagliptin, linagliptin)",
      klass: "Incretin pathway",
      target: "GLP-1 receptors on β cells (Gs-coupled → ↑ cAMP); DPP-4 inhibitors prevent GLP-1 degradation",
      mechanism: "↑ insulin secretion, ↓ glucagon secretion; slow gastric emptying/absorption; ↑ satiety",
      effect: "Glucose-dependent insulin release + weight loss (analogs)",
      uses: "Type 2 DM; GLP-1 analogs also for obesity (weight-loss indications)",
      adverse: "Nausea, vomiting, diarrhea, constipation; ↑ pancreatitis and gallbladder disease (cholelithiasis/cholecystitis). Contraindicated with personal/family history of medullary thyroid carcinoma or MEN2. DPP-4: respiratory/urinary infections, weight neutral",
      clue: "Injectable + weight loss + contraindication in MEN2/MTC = GLP-1 analog",
    },
    {
      drug: "SGLT2 inhibitors (canagliflozin, dapagliflozin, empagliflozin)",
      klass: "Renal glucosuria inducers",
      target: "Sodium-glucose co-transporter 2 in proximal convoluted tubule",
      mechanism: "Block glucose reabsorption → glucosuria; also natriuresis + osmotic diuresis → ↓ Na⁺, ↓ ECF volume, ↓ BP",
      effect: "Glucose flows out in urine — the mnemonic IS the pharmacology",
      uses: "Type 2 DM (also HF/renal benefits by class)",
      adverse: "Glucosuria — UTIs, vulvovaginal candidiasis; dehydration/orthostatic hypotension; weight loss; use with caution in renal insufficiency (↓ efficacy with ↓ GFR)",
      clue: "'Glucose flows in urine' — genital mycotic infections are the classic adverse effect",
    },
    {
      drug: "Acarbose / miglitol",
      klass: "α-glucosidase inhibitors",
      target: "Intestinal brush-border α-glucosidases",
      mechanism: "Delay carbohydrate hydrolysis and glucose absorption → ↓ postprandial hyperglycemia",
      effect: "Flattens the mealtime glucose peak",
      uses: "Type 2 DM with postprandial spikes",
      adverse: "GI upset, bloating; not recommended in renal insufficiency",
      clue: "Postprandial hyperglycemia keyword = α-glucosidase inhibitor",
    },
    {
      drug: "Pramlintide",
      klass: "Amylin analog",
      target: "Amylin receptor (central)",
      mechanism: "↓ glucagon release, ↓ gastric emptying, ↑ satiety",
      effect: "Prandial glucose smoothing with weight loss",
      uses: "Adjunct in type 1 and 2 DM (mealtime injections)",
      adverse: "Hypoglycemia (when combined with insulin), nausea",
      clue: "Amylin — the 'forgotten' β-cell hormone",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 14-year-old with 2 weeks of polyuria, polydipsia, and 5-kg weight loss presents obtunded with deep sighing respirations and fruity breath; glucose 520, pH 7.08, K⁺ 5.3.",
        discriminator: "Kussmaul respirations + anion-gap acidosis + ketones + young age",
        concept: "Absolute insulin deficiency → lipolysis → ketogenesis",
        answer: "DKA — fluids, IV insulin, K⁺ repletion",
      },
      {
        stem: "A 78-year-old nursing home resident found lethargic; glucose 950, serum osmolality 335, pH 7.38, negative ketones, sodium 128.",
        discriminator: "Profound hyperglycemia + hyperosmolality + NO acidosis/ketones",
        concept: "Residual insulin suppresses ketogenesis but not hyperglycemia; osmotic diuresis dehydrates",
        answer: "Hyperosmolar hyperglycemic state — aggressive fluids first",
      },
      {
        stem: "Patient on metformin with contrast-enhanced CT scheduled asks about holding the medication; eGFR 28.",
        discriminator: "Metformin + renal insufficiency + iodinated contrast",
        concept: "Lactic acidosis risk rises when renal clearance falls (also cirrhosis, sepsis, hypoperfusion)",
        answer: "Hold metformin peri-procedure in renal impairment — the standard precaution",
      },
      {
        stem: "A diabetic patient on propranolol has an unwitnessed seizure; glucose checked at 34 mg/dL without prodromal sweating or tremor.",
        discriminator: "Hypoglycemia without autonomic warning in a β-blocked patient",
        concept: "β-blockade blunts the neurogenic symptoms — hypoglycemia unawareness",
        answer: "β-blocker–associated hypoglycemia unawareness; IV dextrose; review regimen",
      },
    ],
    traps: [
      {
        a: "DKA",
        b: "HHS",
        whyConfused: "Both are hyperglycemic emergencies with dehydration and altered mental status.",
        keyDifference: "DKA: insulin DEFICIENT, ketones PRESENT, acidosis (↓pH, ↓HCO₃⁻, ↑ gap). HHS: insulin PRESENT, ketones deficient, normal pH, extreme hyperglycemia + osmolality (>320).",
        clue: "Check pH and ketones first — the acidosis is the fork.",
      },
      {
        a: "Serum K⁺ in DKA",
        b: "Total-body K⁺ in DKA",
        whyConfused: "The lab looks normal or high, inviting complacency.",
        keyDifference: "Acidosis and insulin deficiency push K⁺ OUT of cells (serum normal/↑) while osmotic diuresis drains total-body stores — the patient is K⁺-DEPLETED inside.",
        clue: "Insulin therapy unmasks the deficit — always replete K⁺ with insulin (or delay insulin if K⁺ <3.3).",
      },
      {
        a: "Sulfonylurea hypoglycemia",
        b: "Metformin hypoglycemia",
        whyConfused: "Both are 'diabetes pills.'",
        keyDifference: "Sulfonylureas FORCE insulin secretion → hypoglycemia possible (especially renal impairment). Metformin does not stimulate insulin → hypoglycemia risk essentially absent alone (its risk is lactic acidosis).",
        clue: "'Which oral agent caused the hypoglycemic episode?' → secretagogue (sulfonylurea/meglitinide).",
      },
      {
        a: "Sorbitol damage in LARKS",
        b: "Sorbitol escape in liver/ovaries/seminal vesicles",
        whyConfused: "Same substrate, different enzyme endowment.",
        keyDifference: "LARKS (Lens, Retina, Kidneys, Schwann) have aldose reductase only → sorbitol accumulates → osmotic damage. Liver, ovaries, seminal vesicles have BOTH enzymes (aldose reductase + sorbitol dehydrogenase) → convert sorbitol to fructose and escape.",
        clue: "'They lose sorbitol' — the three tissues that get rid of it.",
      },
    ],
    pivots: [
      {
        lookAlike: "Altered mental status + hyperglycemia",
        differentiator: "pH and ketones — acidotic + ketotic = DKA; non-acidotic + hyperosmolar = HHS",
        correctPath: "Both get IV fluids first; DKA adds insulin + K⁺ immediately; HHS is primarily a volume disease.",
      },
      {
        lookAlike: "New diabetes diagnosis at age 25 — type 1 or type 2?",
        differentiator: "Obesity, insulin resistance signs (acanthosis), C-peptide/insulin levels, autoantibodies (islet cell, GAD65), ketoacidosis history",
        correctPath: "Thin + ketotic + antibody-positive → type 1; obese + insulin-resistant → type 2. Remember exceptions — age does not define type.",
      },
    ],
    miniCase: {
      vignette: "A 68-year-old woman with type 2 diabetes managed with metformin is brought in after a week of progressive confusion. She lives alone and had reduced fluid intake after a fall. Temperature is normal; mucous membranes are dry, and she is tachycardic with systolic blood pressure 96. Glucose is 812 mg/dL, serum osmolality 338 mOsm/kg, pH 7.38, HCO₃⁻ 24 mEq/L, and serum/urine ketones are negative. Sodium is 128 mEq/L and creatinine 2.1 mg/dL.",
      question: "Which of the following is the most appropriate immediate priority in management?",
      options: [
        {
          correct: true,
          label: "A",
          text: "Aggressive IV fluid rehydration",
          why: "Correct. HHS is primarily a volume disease: profound osmotic diuresis produced the hyperosmolality and the mental status change — fluids come first (then insulin, then electrolytes).",
        },
        {
          label: "B",
          text: "Immediate large insulin bolus to clear the hyperglycemia",
          why: "Insulin is needed but AFTER fluids — rapid osmolar shifts risk worsening neurologic injury; the priority in HHS is volume.",
        },
        {
          label: "C",
          text: "Bicarbonate infusion for the acidosis",
          why: "There is no acidosis — pH 7.38 with normal bicarbonate and absent ketones distinguishes HHS from DKA.",
        },
        {
          label: "D",
          text: "Sodium correction with hypertonic saline",
          why: "The hyponatremia is largely hyperglycemic pseudohyponatremia (corrected Na⁺ ≈ 128 + 1.6 × ((812−100)/100) ≈ 139) — it will improve with glucose and volume correction, not hypertonic saline.",
        },
      ],
      reasoning: "Insulin present (type 2, metformin only) + ketones absent + normal pH + extreme osmolality = HHS. The engine of the disease is osmotic diuresis → dehydration; the treatment engine is fluid. Correct the glucose and the sodium with controlled infusion rates.",
    },
  },
  mnemonics: [
    {
      code: "“LARKS”",
      meaning: "Lens, Retina, Kidneys, Schwann cells — the tissues with aldose reductase but minimal sorbitol dehydrogenase.",
      memorizes: "Where chronic hyperglycemia causes osmotic (sorbitol) damage",
      whenToUse: "Any chronic diabetic complication mechanism question.",
      clinical: "Cataracts, retinopathy, nephropathy, neuropathy — LARKS organs; liver/ovaries/seminal vesicles escape (both enzymes).",
    },
    {
      code: "“DKA is Deadly”",
      meaning: "Delirium/psychosis, Kussmaul respirations, Abdominal pain/nausea/vomiting, Dehydration.",
      memorizes: "DKA clinical findings",
      whenToUse: "Every DKA presentation question.",
      clinical: "Add fruity (acetone) breath and you have the full bedside picture.",
    },
    {
      code: "“4 − 3 = type 1”",
      meaning: "HLA-DR4 and -DR3 associate with type 1 diabetes.",
      memorizes: "The HLA association",
      whenToUse: "Genetic/HLA association questions.",
      clinical: "Autoimmune T-cell destruction with islet autoantibodies (islet cell cytoplasm, GAD65, insulin).",
    },
    {
      code: "“Glucose flows in urine” (SGLT2 inhibitors)",
      meaning: "The -gliflozins block renal SGLT2 → glucosuria with natriuresis.",
      memorizes: "SGLT2 inhibitor mechanism AND adverse effects",
      whenToUse: "Pharmacology of the -gliflozin class.",
      clinical: "UTIs and vulvovaginal candidiasis are the direct consequences of glycosuria.",
    },
    {
      code: "“miraβ3gron” — and “Incretin = MEN2 contraindication”",
      meaning: "GLP-1 analogs carry the medullary thyroid carcinoma/MEN2 contraindication.",
      memorizes: "The GLP-1 red flag",
      whenToUse: "GLP-1 analog safety questions.",
      clinical: "Also: pancreatitis and gallbladder disease risk; nausea/vomiting from delayed gastric emptying.",
    },
  ],
  rapidReview: {
    s30: [
      "Diagnosis: HbA1c ≥6.5%, fasting glucose ≥126, 2-h OGTT ≥200, random ≥200 with symptoms.",
      "Type 1 = autoimmune β-cell destruction (GAD65, islet cell, insulin Abs; HLA-DR3/DR4); type 2 = resistance + progressive failure (islet amyloid).",
      "DKA: insulin deficient, ketones present, ↑ anion-gap acidosis. HHS: insulin present, no ketones, normal pH, osmolality >320.",
      "Chronic complications: glycation (AGEs → hyaline arteriolosclerosis + atherosclerosis) and sorbitol (LARKS — lens, retina, kidney, Schwann).",
      "MI = most common cause of death.",
    ],
    m3: [
      "Type 1 vs 2 discriminators: insulin always vs sometimes; <30 vs >40; obese no vs yes; twin concordance 50% vs 90%; ketoacidosis common vs rare; histology leukocytic infiltrate vs amyloid.",
      "DKA labs: ↑ gap acidosis, ketones, leukocytosis, normal/↑ K⁺ with total-body depletion — replete with insulin; add glucose if insulin drives serum glucose down fast.",
      "HHS: glucose >600, osmolality >320, normal pH, no ketones — focal deficits/seizures; treat with fluids first.",
      "Hypoglycemia: neurogenic (diaphoresis, tachycardia, tremor, anxiety, hunger) vs neuroglycopenic (AMS, seizures, death); β-blockers mask awareness; treat with simple carbs, IM glucagon, IV dextrose.",
      "Sorbitol pathway: glucose → (aldose reductase) → sorbitol → (sorbitol dehydrogenase) → fructose; LARKS lack step 2; galactose follows the same path (galactitol in galactosemia).",
      "Steroid diabetes: glucocorticoid therapy; unopposed GH/epinephrine secretion are rare secondary causes.",
    ],
    m10: [
      "Insulin prep ladder with timings: rapid (lispro, aspart, glulisine), short (regular), intermediate (NPH), long (detemir, glargine), very long (degludec) — IV regular for DKA/hyperkalemia/stress hyperglycemia.",
      "Oral agent grid with mechanisms and adverse effects: metformin (mGPD/AMPK, lactic acidosis, B12), pioglitazone (PPAR-γ, weight gain/edema/HF/fractures), sulfonylureas/meglitinides (K_ATP closure, hypoglycemia/weight), GLP-1/DPP-4 (incretin, GI + pancreatitis + MEN2 contraindication), SGLT2i (glucosuria, GU infections/dehydration), α-glucosidase inhibitors (postprandial, GI upset), pramlintide (amylin analog).",
      "Type 2 management order: lifestyle + metformin first line; weight loss particularly helpful; add agents by phenotype (weight loss desire → GLP-1/SGLT2; cost → sulfonylurea; postprandial → α-glucosidase).",
      "Gestational DM: insulin replacement if nutrition therapy and exercise fail.",
      "Diabetic nephropathy: glomerulosclerosis (Kimmelstiel-Wilson nodular pattern in classic teaching) — the nephrotic-range proteinuria connection to the casts note.",
      "Retinopathy stages and screening timelines; neuropathy subtypes (sensory glove-stocking, autonomic — GERD/gastroparesis/diarrhea); mononeuropathy amenable to glucose control.",
    ],
  },
  recall: [
    {
      q: "Four diagnostic cutoffs for diabetes mellitus?",
      a: "HbA1c ≥6.5%; fasting glucose ≥126 mg/dL; 2-h OGTT ≥200 mg/dL; random glucose ≥200 mg/dL with symptoms.",
    },
    {
      q: "Twin concordance in type 1 vs type 2?",
      a: "~50% (type 1) vs ~90% (type 2) — type 2 has the STRONGER genetic component despite later onset.",
    },
    {
      q: "The one-line DKA vs HHS distinction?",
      a: "DKA = insulin deficient + ketones present (acidotic); HHS = insulin present + ketones deficient (non-acidotic, hyperosmolar).",
    },
    {
      q: "Which tissues escape sorbitol damage and why?",
      a: "Liver, ovaries, seminal vesicles — they possess sorbitol dehydrogenase (they 'lose sorbitol' as fructose).",
    },
    {
      q: "Why does HHS treatment prioritize fluids over insulin?",
      a: "The morbidity engine is osmotic-diuresis dehydration and hyperosmolality — volume correction addresses the lethal physiology first.",
    },
    {
      q: "First-line oral therapy for type 2 DM and its two signature adverse effects?",
      a: "Metformin — GI upset and lactic acidosis (renal insufficiency, cirrhosis, sepsis, hypoperfusion) + B12 deficiency.",
    },
    {
      q: "Which drug class is contraindicated with personal/family history of medullary thyroid carcinoma or MEN2?",
      a: "GLP-1 receptor analogs (exenatide, liraglutide, semaglutide).",
    },
    {
      q: "Why can serum K⁺ be high in DKA while the body is K⁺-depleted?",
      a: "Insulin deficiency and acidosis shift K⁺ out of cells (transcellular shift) while osmotic diuresis drains total-body stores.",
    },
  ],
  related: [
    {
      title: "Glycolysis Regulation",
      note: "The insulin/glucagon switch taught at PFK-2/FBPase-2 is the same physiology that collapses in DKA — unopposed counter-regulatory hormones.",
      topicId: "glycolysis-regulation",
    },
    {
      title: "Acid-Base Physiology",
      note: "DKA is the K of GOLDMARK anion-gap acidosis — Winter formula and Kussmaul physiology live here.",
      topicId: "acid-base-physiology",
    },
    {
      title: "Atherosclerosis",
      note: "Diabetes accelerates plaque disease — MI is the most common cause of death; the large-vessel glycation highway feeds directly into the atherogenesis cascade.",
      topicId: "atherosclerosis",
    },
    {
      title: "Urinary Casts",
      note: "Diabetic nephropathy is a secondary nephrotic syndrome — oval fat bodies and proteinuria >3.5 g/day; papillary necrosis (SAAD) is the diabetic urine emergency.",
      topicId: "urinary-casts",
    },
    {
      title: "Hypersensitivity Types",
      note: "Type 1 diabetes is itself a type IV autoimmune disease — Gell-Coombs explains the β-cell destruction.",
      topicId: "hypersensitivity-types",
    },
  ],
  crossLinks: [
    {
      subject: "Biochemistry",
      connection: "Sorbitol/polyol pathway and the HbA1c glycation chemistry — two equations that explain the entire complication profile.",
    },
    {
      subject: "Cardiovascular",
      connection: "Atherosclerosis, MI risk, and the SGLT2/HF benefit — glucose control meets outcomes research.",
    },
    {
      subject: "Renal",
      connection: "Osmotic diuresis, diabetic nephropathy, and the metformin-lactic acidosis renal precaution.",
    },
    {
      subject: "Pharmacology",
      connection: "Seven drug classes organized by organ target — the most complete therapeutic map in Step 1 pharmacology.",
    },
    {
      subject: "Ophthalmology",
      connection: "Retinopathy and cataracts — the visible end-organ of both damage highways.",
    },
  ],
  mechanisms: [
    {
      id: "dka-mechanism",
      title: "Diabetic ketoacidosis — insulin absent, ketones present",
      context: "Type 1 DM classically",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Insulin absent — noncompliance or ↑ requirements under stress (eg, infection)",
            sublabel: "The body interprets insulin absence as starvation — counter-regulatory hormones (glucagon, catecholamines, cortisol, GH) surge.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Unopposed lipolysis in adipose tissue",
            sublabel: "Free fatty acids flood the liver.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Hepatic β-oxidation → ketogenesis",
            sublabel: "Ketone bodies accumulate (β-hydroxybutyrate > acetoacetate).",
            variant: "process",
          },
          {
            id: "s3",
            label: "Unopposed gluconeogenesis, glycogenolysis, proteolysis",
            sublabel: "Glucose rises while tissue glucose uptake falls → hyperglycemia + glycosuria.",
            variant: "process",
          },
          {
            id: "s4",
            label: "Osmotic diuresis",
            sublabel: "Glycosuria drags water, Na⁺, and K⁺ into urine → hypovolemia, thirst, ↑ plasma osmolality.",
            variant: "process",
          },
          {
            id: "o1",
            label: "↑ anion-gap metabolic acidosis (Kussmaul respirations)",
            sublabel: "Lab: Insulin deficient, ketones present — the one-line definition.",
            variant: "output",
          },
          {
            id: "o2",
            label: "DKA is Deadly: Delirium/psychosis, Kussmaul respirations, Abdominal pain/nausea/vomiting, Dehydration",
            sublabel: "Clinical: Fruity breath odor from exhaled acetone.",
            variant: "output",
          },
          {
            id: "o3",
            label: "Serum K⁺ normal/↑ but total-body K⁺ DEPLETED",
            sublabel: "Lab: Transcellular shift (↓ insulin, acidosis pushes K⁺ out) + osmotic diuresis losses — always replete with insulin therapy.",
            variant: "output",
          },
          {
            id: "o4",
            label: "Complications: cerebral edema, arrhythmias, mucormycosis",
            sublabel: "Clinical: Life-threatening — the reasons DKA remains lethal.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "counter-regulatory surge" },
          { from: "s1", to: "s2", label: "FFAs reach liver" },
          { from: "s2", to: "o1", label: "ketone acids accumulate" },
          { from: "trigger", to: "s3", label: "glucagon unopposed" },
          { from: "s3", to: "s4", label: "glycosuria" },
          { from: "s4", to: "o2", label: "hypovolemia + ↑ osmolality" },
          { from: "s4", to: "o3", label: "K⁺ dragged into urine" },
          { from: "o1", to: "o4", label: "if untreated" },
        ],
        caption:
          "One absence, two streams: the ketone stream (lipolysis → β-oxidation → acidosis) and the glucose stream (gluconeogenesis → glycosuria → dehydration) — both begin with missing insulin.",
      },
    },
    {
      id: "hhs-mechanism",
      title: "Hyperosmolar hyperglycemic state — insulin present, ketones deficient",
      context: "Type 2 DM, classically older patients with limited ability to drink",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Profound hyperglycemia with residual insulin",
            sublabel: "Enough insulin suppresses lipolysis/ketogenesis — but not enough to move glucose into cells.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Massive glycosuria → osmotic diuresis",
            sublabel: "Organ — Fluid losses outpace intake (often in elderly patients with limited access to water).",
            variant: "process",
          },
          {
            id: "s2",
            label: "Dehydration → ↑ serum osmolality",
            sublabel: "Lab — Often >320 mOsm/kg — the defining laboratory value.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Glucose often >600 mg/dL, normal pH, no ketones",
            sublabel: "Lab: Insulin present, ketones deficient — the mirror image of DKA.",
            variant: "output",
          },
          {
            id: "o2",
            label: "Thirst, polyuria, lethargy, focal neurologic deficits, seizures",
            sublabel: "Clinical: Can progress to coma and death if untreated.",
            variant: "output",
          },
          {
            id: "o3",
            label: "Normal/↑ serum K⁺ with ↓ intracellular K⁺",
            sublabel: "Lab: Same transcellular depletion pattern as DKA.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "insulin suppresses ketones, not hyperglycemia" },
          { from: "s1", to: "s2", label: "fluid losses outpace intake" },
          { from: "s2", to: "o1", label: "the lab signature" },
          { from: "s2", to: "o2", label: "hyperosmolar brain" },
          { from: "s2", to: "o3", label: "K⁺ follows water" },
        ],
        caption:
          "Insulin present, ketones deficient — the mirror image of DKA. HHS is primarily a volume disease: aggressive IV fluids come first.",
      },
    },
    {
      id: "sorbitol-mechanism",
      title: "Chronic complications — the two damage highways",
      context: "Years of hyperglycemia",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Persistent hyperglycemia inside vulnerable cells and plasma",
            sublabel: "Glucose takes two fates it should never have at these concentrations: reacting with proteins, and being reduced to sorbitol.",
            variant: "input",
          },
          {
            id: "g1",
            label: "Highway 1 — nonenzymatic glycation → AGEs",
            sublabel: "Glucose covalently attaches to proteins → advanced glycation end-products. HbA1c is the readable footprint (reflects the prior ~3 months; influenced by RBC turnover).",
            variant: "process",
          },
          {
            id: "g2",
            label: "AGEs → small-vessel hyaline arteriolosclerosis",
            sublabel: "Retinopathy, nephropathy, neuropathy — the microvascular triad.",
            variant: "process",
          },
          {
            id: "g3",
            label: "AGEs + dyslipidemia → large-vessel atherosclerosis",
            sublabel: "CAD, cerebrovascular disease, peripheral vascular disease — MI is the MOST COMMON CAUSE OF DEATH in diabetes.",
            variant: "process",
          },
          {
            id: "a1",
            label: "Highway 2 — aldose reductase → sorbitol",
            sublabel: "In LARKS tissues (Lens, Retina, Kidneys, Schwann cells) with low/absent sorbitol dehydrogenase, sorbitol accumulates.",
            variant: "process",
          },
          {
            id: "a2",
            label: "Osmotic damage",
            sublabel: "Trapped sorbitol pulls water into cells → lens fiber injury, nerve edema, pericyte loss.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Cataracts (lens sorbitol)",
            sublabel: "Clinical: Osmotic lens fiber injury.",
            variant: "output",
          },
          {
            id: "o2",
            label: "Neuropathy: motor, sensory (glove-stocking), autonomic",
            sublabel: "Clinical: Autonomic degeneration — GERD, gastroparesis, diabetic diarrhea.",
            variant: "output",
          },
          {
            id: "o3",
            label: "Retinopathy and nephropathy",
            sublabel: "Clinical: Both highways converge on the same end organs.",
            variant: "output",
          },
          {
            id: "o4",
            label: "Liver, ovaries, seminal vesicles escape",
            sublabel: "Effect: They have BOTH enzymes — they 'lose sorbitol' by converting it to fructose.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "g1", label: "highway 1" },
          { from: "trigger", to: "a1", label: "highway 2" },
          { from: "g1", to: "g2", label: "small vessels" },
          { from: "g1", to: "g3", label: "large vessels" },
          { from: "a1", to: "a2", label: "sorbitol accumulates" },
          { from: "g2", to: "o3", label: "microvascular triad" },
          { from: "a2", to: "o1", label: "lens" },
          { from: "a2", to: "o2", label: "Schwann cells" },
          { from: "a2", to: "o3", label: "pericyte loss" },
          { from: "a1", to: "o4", label: "if sorbitol dehydrogenase is present" },
        ],
        caption:
          "The retina, kidney, and nerve sit at the intersection of BOTH highways — which is why diabetic complications cluster in the same organs.",
      },
    },
  ],
};
