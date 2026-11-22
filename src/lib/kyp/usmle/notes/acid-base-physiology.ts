import type { KypUsMLENote } from "../types";

// Ported from the KYP USMLE 2026 pilot corpus.
// Source: First Aid 2026, Part 2 pp. 196, 200–203, 219 (acid-base physiology; acidosis/alkalosis algorithm; renal tubular acidosis; diuretics)

export const acidBasePhysiology: KypUsMLENote = {
  id: "acid-base-physiology",
  title: "Acid-Base Physiology",
  subtitle: "One pH, one equation, one algorithm: pH → primary disorder → anion gap → Winter formula → urine chloride. Five steps turn any blood gas into a diagnosis.",
  subject: "Renal Physiology",
  system: "Section III · Renal — Physiology",
  pilotCategory: "Renal physiology",
  difficulty: 3,
  readTime: 14,
  sourceRef: "First Aid 2026, Part 2 pp. 604, 608–611, 627 (acid-base physiology; acidosis/alkalosis algorithm; renal tubular acidosis; diuretics)",
  tags: [
    "Winter formula",
    "anion gap",
    "GOLDMARK",
    "RTA",
    "Henderson-Hasselbalch",
    "compensation",
  ],
  core: {
    what: "Acid-base physiology is the system that keeps arterial pH between 7.35 and 7.45 using buffers (immediate), ventilation (minutes), and renal HCO₃⁻ handling (days). Metabolic disorders change HCO₃⁻ first; respiratory disorders change PCO₂ first.",
    why: "Every hospitalized patient gets a blood gas, and every acid-base question is pure algorithm — the discipline where Step 1 reasoning pays off most reliably per minute studied.",
    keyIdea: "pH = 6.1 + log ([HCO₃⁻] / 0.03 × PCO₂) — the Henderson-Hasselbalch equation. The kidney and the lung each control one variable: metabolic disorders move HCO₃⁻ (compensated by ventilation, immediate) and respiratory disorders move PCO₂ (compensated by renal HCO₃⁻ reabsorption, delayed). Compensation never fully corrects the pH.",
  },
  blocks: [
    {
      kind: "visual",
      visualId: "acid-base-map",
      title: "The acid-base map",
      caption: "pH vs [HCO₃⁻] map with the four disorder zones around the normal point (7.40 / 24 / PCO₂ 40), plus the compensation arrows.",
      notice: "Every pure disorder moves you into ONE zone; compensation slides you along the buffer line BACK TOWARD (never past) normal pH. A point sitting on the wrong side of 7.40 for its zone means a mixed disorder.",
    },
    {
      kind: "table",
      title: "The four primary disorders — directions and compensations",
      columns: [
        "Disorder",
        "pH",
        "PCO₂",
        "[HCO₃⁻]",
        "Compensatory response",
      ],
      rows: [
        [
          "Metabolic acidosis",
          "↓",
          "↓",
          "↓",
          "Hyperventilation (immediate)",
        ],
        [
          "Metabolic alkalosis",
          "↑",
          "↑",
          "↑",
          "Hypoventilation (immediate)",
        ],
        [
          "Respiratory acidosis",
          "↓",
          "↑",
          "↑",
          "↑ renal HCO₃⁻ reabsorption (delayed)",
        ],
        [
          "Respiratory alkalosis",
          "↑",
          "↓",
          "↓",
          "↓ renal HCO₃⁻ reabsorption (delayed)",
        ],
      ],
      caption: "The arrow direction of the compensation is always the SAME as the primary change being compensated (↓ pH → compensatory ↓ PCO₂ or ↓ HCO₃⁻, as appropriate).",
    },
    {
      kind: "visual",
      visualId: "acid-base-algorithm",
      title: "The five-step diagnostic algorithm",
      caption: "pH → primary disorder → anion gap → Winter formula → urine chloride, rendered as the decision cascade.",
      notice: "Step ③ forks on the anion gap; step ⑤ forks on urine Cl⁻. Learn the two forks and you own the whole algorithm.",
    },
    {
      kind: "table",
      title: "↑ Anion gap metabolic acidosis (GOLDMARK)",
      intro: "When unmeasured anions accumulate, the gap widens beyond 12 mEq/L.",
      columns: [
        "Letter",
        "Cause",
        "Notes",
      ],
      rows: [
        [
          "G",
          "Glycols (ethylene glycol, propylene glycol)",
          "Antifreeze; calcium oxalate crystals, renal failure",
        ],
        [
          "O",
          "Oxoproline",
          "Chronic acetaminophen use (glutathione depletion pathway)",
        ],
        [
          "L",
          "L-lactate",
          "Sepsis, shock, ischemia, metformin",
        ],
        [
          "D",
          "D-lactate",
          "Exogenous — short bowel/blind loop bacterial overgrowth",
        ],
        [
          "M",
          "Methanol (and other alcohols)",
          "Retinal toxicity → blindness; formic acid",
        ],
        [
          "A",
          "Aspirin (late effect)",
          "Early = respiratory alkalosis; late = anion-gap acidosis",
        ],
        [
          "R",
          "Renal failure",
          "Uremic acid retention",
        ],
        [
          "K",
          "Ketones",
          "Diabetic, alcoholic, starvation ketoacidosis",
        ],
      ],
    },
    {
      kind: "table",
      title: "Normal anion gap metabolic acidosis",
      intro: "When HCO₃⁻ is lost and replaced by Cl⁻, the gap stays 8–12 — think of the GI and renal routes.",
      columns: [
        "Cause",
        "Mechanism",
      ],
      rows: [
        [
          "Diarrhea",
          "GI loss of HCO₃⁻ (most common non-renal cause)",
        ],
        [
          "Renal tubular acidosis (types 1, 2, 4)",
          "Distal H⁺ secretion failure / proximal HCO₃⁻ wastage / hypoaldosteronism",
        ],
        [
          "Hyperchloremia / hyperalimentation",
          "Exogenous chloride load",
        ],
        [
          "Addison disease",
          "Mineralocorticoid deficiency (↓ H⁺, ↓ K⁺ secretion — type 4 physiology)",
        ],
        [
          "Acetazolamide use",
          "Carbonic anhydrase inhibition = pharmacologic proximal RTA",
        ],
        [
          "Saline infusion (dilutional)",
          "Large-volume normal saline lowers bicarbonate by dilution",
        ],
      ],
      caption: "Also remember SHARDS from First Aid: Spironolactone; Hyperchloremia/hyperalimentation; Addison disease, acetazolamide; Renal tubular acidosis; Diarrhea; Saline infusion.",
    },
    {
      kind: "table",
      title: "Respiratory disorders — causes to name on sight",
      columns: [
        "Respiratory acidosis (hypoventilation)",
        "Respiratory alkalosis (hyperventilation)",
      ],
      rows: [
        [
          "Airway obstruction",
          "Anxiety / panic attack",
        ],
        [
          "Acute lung disease",
          "Hypoxemia (eg, high altitude)",
        ],
        [
          "Chronic lung disease (COPD)",
          "Salicylates (EARLY effect)",
        ],
        [
          "Opioids, sedatives",
          "Tumor",
        ],
        [
          "Weakening of respiratory muscles (Guillain-Barré, ALS)",
          "Pulmonary embolism ('P' — PE causes hyperventilation with hypoxia)",
        ],
        [
          "—",
          "Pregnancy (progesterone-mediated respiratory drive)",
        ],
      ],
      caption: "Salicylates are the classic two-phase story: early respiratory alkalosis (direct medullary stimulation), late anion-gap metabolic acidosis.",
    },
    {
      kind: "table",
      title: "Metabolic alkalosis — the urine chloride fork",
      columns: [
        "Urine Cl⁻ < 20 mEq/L (saline-RESPONSIVE)",
        "Urine Cl⁻ > 20 mEq/L (saline-RESISTANT)",
      ],
      rows: [
        [
          "Vomiting (gastric HCl loss; contraction alkalosis)",
          "Hyperaldosteronism",
        ],
        [
          "Recent loop/thiazide diuretic use",
          "Bartter syndrome (loop-like, hypercalciuria)",
        ],
        [
          "Antacids",
          "Gitelman syndrome (thiazide-like, hypomagnesemia, hypocalciuria)",
        ],
        [
          "—",
          "Current loop/thiazide diuretic use",
        ],
      ],
      caption: "Low urine Cl⁻ = the kidney is conserving chloride (volume depletion — saline fixes it). High urine Cl⁻ = mineralocorticoid excess or active diuretic — saline does not fix it.",
    },
    {
      kind: "text",
      title: "The electrolyte neighborhoods — potassium shifts",
      body: [
        "Acidosis shifts K⁺ OUT of cells (H⁺ enters, K⁺ exits to preserve electroneutrality) — hyperkalemia; alkalosis, insulin, and β-agonists shift K⁺ IN — hypokalemia. Serum osmolality drag (e.g., hyperglycemia) also pulls water and K⁺ out of cells. This is why DKA has normal/high serum K⁺ but a TOTAL-BODY K⁺ deficit.",
        "On the ECG: hypokalemia flattens T waves and produces U waves with arrhythmias and cramps; hyperkalemia peeks T waves, widens QRS, and can arrest the heart. Hypocalcemia gives tetany, Chvostek/Trousseau, QT prolongation; hypercalcemia gives 'stones, bones, groans, thrones, psychiatric overtones.' Hypomagnesemia causes torsades de pointes with refractory hypokalemia/hypocalcemia (Mg <1.0).",
      ],
    },
    {
      kind: "table",
      title: "Diuretic context — the pharmacology that creates the alkalosis",
      columns: [
        "Class",
        "Examples",
        "Acid-base signature",
      ],
      rows: [
        [
          "Loop diuretics",
          "Furosemide, bumetanide, torsemide, ethacrynic acid",
          "Hypokalemic metabolic ALKALOSIS (with hyponatremia, hypocalcemia/hypomagnesemia, hypokalemia, metabolic alkalosis, hyperuricemia, ototoxicity, sulfa allergy — except ethacrynic acid)",
        ],
        [
          "Thiazides",
          "Hydrochlorothiazide, chlorthalidone, metolazone",
          "Hypokalemic metabolic ALKALOSIS + hyperGLUC (hyperglycemia), hyperlipidemia, hyperuricemia, HYPERcalcemia (↓ Ca²⁺ excretion — thiazides retain calcium)",
        ],
        [
          "K⁺-sparing (SEAT: Spironolactone, Eplerenone, Amiloride, Triamterene)",
          "—",
          "Hyperkalemic metabolic ACIDOSIS (the mirror image); spironolactonendocrine effects: gynecomastia, antiandrogen",
        ],
        [
          "Acetazolamide",
          "Carbonic anhydrase inhibitor",
          "Hyperchloremic metabolic ACIDOSIS (bicarbonaturia) — also used for altitude sickness and idiopathic intracranial hypertension",
        ],
      ],
    },
  ],
  clinical: [
    {
      kind: "list",
      title: "Clinical scenarios and their gas patterns",
      items: [
        {
          lead: "DKA",
          text: "pH ↓, HCO₃⁻ ↓↓, PCO₂ ↓ (Kussmaul), anion gap ↑↑ (ketones), ✓ ketones, ✓ glucose — total-body K⁺ depleted despite normal/high serum K⁺.",
        },
        {
          lead: "Vomiting",
          text: "pH ↑, HCO₃⁻ ↑, PCO₂ ↑ (hypoventilation), urine Cl⁻ <20 → saline-responsive alkalosis with hypokalemia (secondary hyperaldosteronism).",
        },
        {
          lead: "COPD exacerbation",
          text: "pH ↓, PCO₂ ↑↑, HCO₃⁻ ↑ (delayed renal compensation) — chronic CO₂ retainers normalize pH toward 7.36–7.38.",
        },
        {
          lead: "Panic attack / PE",
          text: "pH ↑, PCO₂ ↓, HCO₃⁻ mildly ↓ (early) — respiratory alkalosis is the FIRST metabolic event in sepsis and PE too.",
        },
        {
          lead: "Salicylate toxicity",
          text: "Early: respiratory alkalosis alone. Late: mixed respiratory alkalosis + ↑ anion gap metabolic acidosis (the double-disorder the exam loves).",
        },
        {
          lead: "Diarrhea vs ureteral diversion",
          text: "Both lose HCO₃⁻ → normal gap acidosis; ileal conduits reabsorb Cl⁻ in exchange for HCO₃⁻ — the surgical acidosis.",
        },
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A confused patient with Kussmaul respirations, glucose 550, ketones positive, pH 7.08, HCO₃⁻ 6, PCO₂ 15.",
        discriminator: "Expected PCO₂ by Winter = 1.5(6) + 8 ± 2 = 15–19 — measured 15 fits",
        concept: "Simple (appropriately compensated) anion-gap metabolic acidosis",
        answer: "Diabetic ketoacidosis — no second disorder",
      },
      {
        stem: "Same DKA picture but PCO₂ is 34 when Winter predicts 15–19.",
        discriminator: "Measured PCO₂ ABOVE predicted despite clinical hyperventilation",
        concept: "A second primary respiratory acidosis is hiding (sedatives, fatigue, aspiration)",
        answer: "Mixed disorder — DKA plus respiratory acidosis",
      },
      {
        stem: "A patient with pneumonia on high-dose aspirin: pH 7.48, PCO₂ 22, HCO₃⁻ 14, anion gap 22.",
        discriminator: "Alkalemia + low PCO₂ + widened gap simultaneously",
        concept: "Salicylates stimulate ventilation (early) AND uncouple oxidative phosphorylation → keto/lactic acids (late)",
        answer: "Mixed respiratory alkalosis + anion-gap metabolic acidosis",
      },
      {
        stem: "Post-thyroidectomy patient with carpopedal spasm, Chvostek sign, QT prolongation on ECG.",
        discriminator: "Hypocalcemia signs after neck surgery (parathyroid injury)",
        concept: "Tetany, seizures, QT prolongation, twitching, spasm — the low-Ca²⁺ row of the electrolyte table",
        answer: "Hypocalcemia — check ionized calcium, support with calcium and monitor",
      },
    ],
    traps: [
      {
        a: "Anion gap acidosis",
        b: "Non-anion gap acidosis",
        whyConfused: "Both present as acidemia with low HCO₃⁻.",
        keyDifference: "The GAP separates unmeasured anion accumulation (GOLDMARK) from HCO₃⁻ loss with Cl⁻ retention (diarrhea, RTA).",
        clue: "Always compute AG = Na⁺ − (Cl⁻ + HCO₃⁻) BEFORE guessing causes.",
      },
      {
        a: "Type 1 RTA",
        b: "Type 2 RTA",
        whyConfused: "Both hypokalemic, normal-gap acidoses.",
        keyDifference: "Type 1 (distal): cannot acidify urine EVER — pH >5.5. Type 2 (proximal): CAN acidify once plasma HCO₃⁻ drops below the lowered threshold — pH <5.5 then.",
        clue: "Urine pH with documented low serum HCO₃⁻ discriminates them.",
      },
      {
        a: "Type 4 RTA",
        b: "Types 1 and 2",
        whyConfused: "All are renal normal-gap acidoses.",
        keyDifference: "Type 4 = HYPERkalemic (hypoaldosteronism) — the only RTA with high K⁺; 1 and 2 are hypokalemic.",
        clue: "K⁺ level is the first fork in RTA questions.",
      },
      {
        a: "Saline-responsive alkalosis",
        b: "Saline-resistant alkalosis",
        whyConfused: "Both look like vomiting and both have low K⁺.",
        keyDifference: "Urine Cl⁻: <20 → volume-depleted stomach/kidney losses that saline corrects; >20 → mineralocorticoid excess or current diuretics that saline cannot correct.",
        clue: "Check urine chloride (and BP: resistant causes are usually hypertensive).",
      },
    ],
    pivots: [
      {
        lookAlike: "Hypokalemic metabolic alkalosis + hypertension vs normal BP",
        differentiator: "BP high → mineralocorticoid excess (primary hyperaldosteronism, Cushing, Liddle, SAME); BP normal/low → vomiting or diuretics",
        correctPath: "Hypertensive + alkalosis + hypokalemia → check aldosterone/renin; normotensive → urine Cl⁻ and history.",
      },
      {
        lookAlike: "Acidemia with high K⁺",
        differentiator: "Type 4 RTA (hypoaldosteronism) vs adrenal insufficiency vs acidosis-driven K⁺ shift",
        correctPath: "Normal gap + hyperkalemia + diabetes/ACE inhibitor → type 4 RTA; pigment changes/hypotension/Na⁺ loss → Addison.",
      },
    ],
    miniCase: {
      vignette: "A 19-year-old woman with type 1 diabetes presents with 2 days of vomiting and abdominal pain after running out of insulin. She is breathing deeply and rapidly. Laboratory values: pH 7.10, PCO₂ 16 mm Hg, HCO₃⁻ 5 mEq/L, Na⁺ 136, Cl⁻ 98, K⁺ 5.4, glucose 486 mg/dL, and positive serum ketones.",
      question: "Which of the following best describes her acid-base status?",
      options: [
        {
          correct: true,
          label: "A",
          text: "Simple anion-gap metabolic acidosis with appropriate respiratory compensation",
          why: "Correct. Winter: expected PCO₂ = 1.5 × 5 + 8 ± 2 = 13.5–17.5 — her PCO₂ of 16 fits exactly; the anion gap is 33 (GOLDMARK — ketones).",
        },
        {
          label: "B",
          text: "Anion-gap metabolic acidosis with superimposed respiratory acidosis",
          why: "This requires measured PCO₂ ABOVE the Winter-predicted range — hers is inside it; she is hyperventilating appropriately (Kussmaul).",
        },
        {
          label: "C",
          text: "Non-anion-gap metabolic acidosis",
          why: "The gap is 136 − (98 + 5) = 33 mEq/L — massively elevated; ketones are the unmeasured anion.",
        },
        {
          label: "D",
          text: "Metabolic acidosis with respiratory ALKALOSIS beyond compensation",
          why: "Tempting because she is clearly hyperventilating, but Winter says her PCO₂ is exactly what compensation predicts — the excess ventilation IS the compensation, not a second disorder.",
        },
      ],
      reasoning: "Algorithm: pH acidemic → HCO₃⁻ low → metabolic acidosis → gap 33 (↑, GOLDMARK = ketones) → Winter predicted 13.5–17.5, measured 16 → appropriate compensation → single disorder. The serum K⁺ of 5.4 hides a total-body K⁺ deficit (transcellular shift + osmotic diuresis losses) — replete K⁺ during insulin therapy.",
    },
  },
  mnemonics: [
    {
      code: "GOLDMARK",
      meaning: "Glycols, Oxoproline, L-lactate, D-lactate, Methanol, Aspirin, Renal failure, Ketones.",
      memorizes: "Causes of high-anion-gap metabolic acidosis",
      whenToUse: "Every widened gap on a blood gas.",
      clinical: "Each letter also predicts its toxicity signature (oxalate crystals, blindness, tinnitus, uremia).",
    },
    {
      code: "“AH STOP hyperventilating!”",
      meaning: "Addison disease / Acetazolamide, Hyperchloremia/hyperalimentation, (renal tubular acidosis), Stop→Saline infusion / Spironolactone, diarRhea — normal-gap acidosis causes (paired with SHARDS).",
      memorizes: "Normal anion gap metabolic acidosis etiologies",
      whenToUse: "Acidemia with gap 8–12.",
      clinical: "Diarrhea is the most common GI cause; RTA the renal trio.",
    },
    {
      code: "Winter: PCO₂ = 1.5 × HCO₃⁻ + 8 ± 2",
      meaning: "Predicted respiratory compensation for simple metabolic acidosis.",
      memorizes: "The adequacy check for ventilation",
      whenToUse: "EVERY metabolic acidosis — one line, huge yield.",
      clinical: "Measured above → also respiratory acidosis; below → also respiratory alkalosis.",
    },
    {
      code: "“Metabolic = immediate lungs, Respiratory = delayed kidneys”",
      meaning: "Metabolic disorders are compensated by ventilation within minutes; respiratory disorders need days of renal HCO₃⁻ adjustment.",
      memorizes: "Compensation speed",
      whenToUse: "Timeline questions (acute vs chronic respiratory acidosis).",
      clinical: "Acute CO₂ retention raises HCO₃⁻ ~1 mEq/L per 10 mm Hg; chronic ~3–4 per 10.",
    },
  ],
  rapidReview: {
    s30: [
      "pH <7.35 = acidemia; >7.45 = alkalemia.",
      "Metabolic disorders move HCO₃⁻; respiratory disorders move PCO₂.",
      "AG = Na⁺ − (Cl⁻ + HCO₃⁻), normal 8–12. ↑AG = GOLDMARK; normal = diarrhea/RTA.",
      "Winter: PCO₂ = 1.5[HCO₃⁻] + 8 ± 2 (adequacy of compensation).",
      "Metabolic alkalosis: urine Cl⁻ <20 → saline-responsive; >20 → resistant (hyperaldosteronism, Bartter, Gitelman).",
    ],
    m3: [
      "Respiratory acidosis causes: airway obstruction, acute/chronic lung disease, opioids/sedatives, muscle weakness. Alkalosis: anxiety, hypoxemia/altitude, salicylates (early), tumor, PE, pregnancy.",
      "RTA type 1 (distal, urine pH >5.5, 4 A's: Amphotericin, Analgesics, Anomalies, Autoimmune; Ca-phosphate stones). Type 2 (proximal, bicarbonate wastage, Fanconi/myeloma/acetazolamide; rickets). Type 4 (hypoaldosterone, HYPERkalemic; diabetic hyporeninism, ACEi/ARB, NSAIDs, heparin, cyclosporine, K⁺-sparing diuretics, TMP-SMX).",
      "Potassium shifts: acidosis → K⁺ out; alkalosis, insulin, β-agonists → K⁺ in. ECG: hypokalemia flat T + U waves; hyperkalemia peaked T + wide QRS.",
      "Electrolyte rows: Na⁺ (seizures/coma both directions), Ca²⁺ (tetany/Chvostek vs stones-bones-groans-thrones-psychiatric), Mg²⁺ (torsades + refractory hypokalemia/hypocalcemia <1.0), PO₄³⁻ (rickets/osteomalacia vs metastatic calcification).",
      "Salicylate double disorder: early respiratory alkalosis + late anion-gap acidosis.",
    ],
    m10: [
      "Henderson-Hasselbalch: pH = 6.1 + log ([HCO₃⁻]/(0.03 × PCO₂)).",
      "Diuretic acid-base signatures: loops and thiazides → hypokalemic metabolic alkalosis (thiazides + hypercalcemia, hyperglycemia); K⁺-sparing → hyperkalemic acidosis; acetazolamide → hyperchloremic acidosis.",
      "Renal tubular defect syndromes (context): Fanconi (proximal general failure), Bartter (TAL Na/K/2Cl — loop-like, hypercalciuria), Gitelman (DCT NaCl — thiazide-like, hypomagnesemia), Liddle (gain-of-function ENaC → hypertension, ↓aldosterone, amiloride), SAME (11β-HSD deficiency — cortisol acts on mineralocorticoid receptors; licorice/glycyrrhetinic acid mimic).",
      "DKA total-body K⁺ physiology: serum normal/↑ from acidosis shift + insulin deficiency, but intracellular K⁺ depleted (osmotic diuresis) — always replete with insulin.",
      "Hypertensive alkalosis ladder: primary hyperaldosteronism (↑aldo, ↓renin), renal artery stenosis (↑ both), Cushing (↑cortisol), Liddle (↓aldo), SAME (↓aldo).",
      "Compensation limits: never fully corrects; chronic respiratory alkalosis at altitude is the textbook exception (pH can normalize).",
    ],
  },
  recall: [
    {
      q: "The Henderson-Hasselbalch equation?",
      a: "pH = 6.1 + log ([HCO₃⁻] / (0.03 × PCO₂)).",
    },
    {
      q: "Four causes of GOLDMARK anion-gap acidosis with their toxin signatures?",
      a: "Ethylene glycol (oxalate crystals, renal failure), methanol (blindness), salicylates (tinnitus, hyperventilation), DKA (ketones, hyperglycemia).",
    },
    {
      q: "Winter formula and its interpretation?",
      a: "PCO₂ = 1.5[HCO₃⁻] + 8 ± 2. Measured above predicted = concomitant respiratory acidosis; below = concomitant respiratory alkalosis.",
    },
    {
      q: "Which RTA is hyperkalemic and why?",
      a: "Type 4 — hypoaldosteronism/aldosterone resistance → ↓K⁺ secretion, and hyperkalemia suppresses NH₃ synthesis → ↓NH₄⁺ excretion.",
    },
    {
      q: "Urine chloride fork in metabolic alkalosis?",
      a: "<20 mEq/L saline-responsive (vomiting, recent diuretics, antacids); >20 saline-resistant (hyperaldosteronism, Bartter, Gitelman, active diuretic use).",
    },
    {
      q: "Which class of diuretics causes hyperchloremic metabolic acidosis?",
      a: "Carbonic anhydrase inhibitors (acetazolamide) — pharmacologic proximal RTA.",
    },
    {
      q: "Direction of K⁺ shift in acidosis vs alkalosis?",
      a: "Acidosis shifts K⁺ out of cells (hyperkalemia); alkalosis (and insulin, β-agonists) shift K⁺ in.",
    },
    {
      q: "Why does chronic respiratory acidosis normalize its pH over days?",
      a: "Delayed renal compensation — increased HCO₃⁻ reabsorption/regeneration (over hours to days), unlike the immediate ventilatory compensation for metabolic disorders.",
    },
  ],
  related: [
    {
      title: "Diabetes Mellitus",
      note: "DKA is the flagship anion-gap acidosis (K for Ketones) — the Kussmaul breathing, K⁺ handling, and treatment all cross over.",
      topicId: "diabetes-mellitus",
    },
    {
      title: "Urinary Casts",
      note: "Renal failure (R in GOLDMARK) is diagnosed in the urine sediment; ATN's maintenance phase is a metabolic acidosis factory.",
      topicId: "urinary-casts",
    },
    {
      title: "Glycolysis Regulation",
      note: "Lactic acidosis is the L of GOLDMARK — ethanol's NADH shift and hypoxia both funnel pyruvate to lactate.",
      topicId: "glycolysis-regulation",
    },
    {
      title: "Sympathomimetics",
      note: "β-agonists shift K⁺ into cells — the therapeutic trick in hyperkalemia, and the reason albuterol can transiently lower K⁺.",
    },
  ],
  crossLinks: [
    {
      subject: "Pulmonology",
      connection: "Ventilation is half the equation — COPD, PE, altitude, and anxiety write the respiratory side of every blood gas.",
    },
    {
      subject: "Gastrointestinal",
      connection: "Vomiting and diarrhea are the two GI causes of opposite metabolic disorders (alkalosis vs normal-gap acidosis).",
    },
    {
      subject: "Endocrine",
      connection: "Aldosterone is a renal acid-base actor: ↑ H⁺ and K⁺ secretion — its excess causes alkalosis, its deficiency type 4 RTA.",
    },
    {
      subject: "Cardiovascular",
      connection: "ECG manifestations of the K⁺/Ca²⁺/Mg²⁺ disturbances tie the chemistry to the rhythm strip.",
    },
  ],
  mechanisms: [
    {
      id: "metabolic-acidosis-mechanism",
      title: "Metabolic acidosis — acid gain or bicarbonate loss",
      context: "Primary ↓ HCO₃⁻",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Added acid (with anion) or lost bicarbonate",
            sublabel: "Either new acid is produced/ingested (its anion widens the gap) or HCO₃⁻ is lost through the gut (diarrhea) or kidney (RTA), dragging Cl⁻ with it (normal gap).",
            variant: "input",
          },
          {
            id: "s1",
            label: "Excess H⁺ is buffered by HCO₃⁻",
            sublabel: "Molecular — HCO₃⁻ is consumed — plasma [HCO₃⁻] falls.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Peripheral chemoreceptors drive hyperventilation",
            sublabel: "Organ — Compensation is IMMEDIATE — Kussmaul (deep, rapid) respirations blow off CO₂.",
            variant: "process",
          },
          {
            id: "s3",
            label: "Kidney excretes the acid long-term",
            sublabel: "Organ — α-intercalated cells secrete H⁺ (as NH₄⁺/titratable acid) and regenerate HCO₃⁻ — unless the tubule itself is the problem (RTA).",
            variant: "process",
          },
          {
            id: "o1",
            label: "↓ pH, ↓ HCO₃⁻, ↓ PCO₂ (compensation)",
            sublabel: "Lab: The classic triad on the gas.",
            variant: "output",
          },
          {
            id: "o2",
            label: "Kussmaul respirations",
            sublabel: "Clinical: The bedside sign of severe metabolic acidosis (DKA, uremia).",
            variant: "output",
          },
          {
            id: "o3",
            label: "Check the anion gap next",
            sublabel: "Lab: AG = Na⁺ − (Cl⁻ + HCO₃⁻); normal 8–12 mEq/L — the fork in the algorithm.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "the acid must be buffered" },
          { from: "s1", to: "s2", label: "immediate — minutes" },
          { from: "s1", to: "s3", label: "long-term — hours to days" },
          { from: "s2", to: "o2", label: "visible at the bedside" },
          { from: "s2", to: "o1", label: "PCO₂ falls" },
          { from: "s3", to: "o1", label: "HCO₃⁻ regenerated" },
          { from: "s1", to: "o3", label: "next: calculate the gap" },
        ],
        caption:
          "Two clocks of compensation: lungs in minutes, kidneys in hours to days. Both exist to defend pH — Winter's formula tells you whether the lungs did their share.",
      },
    },
    {
      id: "respiratory-compensation",
      title: "Winter formula — is the compensation appropriate?",
      context: "Metabolic acidosis only",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Measured PCO₂ must be compared with predicted PCO₂",
            sublabel: "In a simple metabolic acidosis, ventilation should reduce PCO₂ to a predictable level.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Calculate predicted PCO₂ = 1.5 × [HCO₃⁻] + 8 ± 2",
            sublabel: "Molecular — Example: HCO₃⁻ 10 → predicted PCO₂ = 15 + 8 ± 2 = 21–25 mm Hg.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Compare measured with predicted",
            sublabel: "Lab — Measured HIGHER than predicted → an additional respiratory acidosis (not blowing off enough). Measured LOWER → additional respiratory alkalosis (blowing off too much).",
            variant: "process",
          },
          {
            id: "o1",
            label: "Mixed disorder detection",
            sublabel: "Effect: The only way to unmask a second primary respiratory disorder during metabolic acidosis.",
            variant: "output",
          },
          {
            id: "o2",
            label: "Example applications",
            sublabel: "Clinical: DKA + sepsis hyperventilation; salicylate toxicity (mixed respiratory alkalosis + anion-gap acidosis).",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "the equation" },
          { from: "s1", to: "s2", label: "measured vs predicted" },
          { from: "s2", to: "o1", label: "mismatch = second disorder" },
          { from: "s2", to: "o2", label: "classic mixes" },
        ],
        caption:
          "Winter's formula is the only way to unmask a hidden second disorder during metabolic acidosis — expected compensation is a calculation, not a guess.",
      },
    },
    {
      id: "rta-mechanism",
      title: "Renal tubular acidosis — when the kidney IS the acidosis",
      context: "Normal anion gap (hyperchloremic) metabolic acidosis",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A tubular defect in acid handling",
            sublabel: "Three mechanisms produce a non-anion-gap acidosis with a renal cause.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Type 1 (distal): α-intercalated cells cannot secrete H⁺",
            sublabel: "cellular — No new HCO₃⁻ is generated → metabolic acidosis; urine pH stays >5.5 (cannot acidify). Causes: the 4 A's — Amphotericin B, Analgesic nephropathy, congenital Anomalies (obstruction) of urinary tract, Autoimmune disease (eg, SLE). Association: ↑ calcium phosphate stones (alkaline urine + bone buffering turnover).",
            variant: "process",
          },
          {
            id: "s2",
            label: "Type 2 (proximal): PCT cannot reabsorb HCO₃⁻",
            sublabel: "cellular — The '2' is for bi(2)carbonate — HCO₃⁻ wasted in urine until plasma falls below the reduced reabsorption threshold, after which urine can be acidified (<5.5). Causes: Fanconi syndrome, multiple myeloma, carbonic anhydrase inhibitors. Association: hypophosphatemic rickets (Fanconi).",
            variant: "process",
          },
          {
            id: "s3",
            label: "Type 4 (hypoaldosteronism): ↓ H⁺/K⁺ secretion",
            sublabel: "Molecular — Hypoaldosteronism or aldosterone resistance → HYPERkalemia, which suppresses NH₃ synthesis in the PCT → ↓ NH₄⁺ excretion → acidosis. Causes: diabetic hyporeninism, ACE inhibitors/ARBs, NSAIDs, heparin, cyclosporine, adrenal insufficiency; K⁺-sparing diuretics, obstructive nephropathy, TMP-SMX (resistance).",
            variant: "process",
          },
          {
            id: "o1",
            label: "Type 1: urine pH >5.5, ↓ K⁺",
            sublabel: "Lab: Distal — cannot acidify.",
            variant: "output",
          },
          {
            id: "o2",
            label: "Type 2: urine pH <5.5 once threshold passed, ↓ K⁺",
            sublabel: "Lab: Proximal — bicarbonate wastage.",
            variant: "output",
          },
          {
            id: "o3",
            label: "Type 4: urine pH variable, ↑ K⁺",
            sublabel: "Lab: The only RTA with HYPERkalemia — the discriminator.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "type 1 — distal" },
          { from: "trigger", to: "s2", label: "type 2 — proximal" },
          { from: "trigger", to: "s3", label: "type 4 — hypoaldo" },
          { from: "s1", to: "o1", label: "cannot acidify" },
          { from: "s2", to: "o2", label: "threshold passed" },
          { from: "s3", to: "o3", label: "the K⁺ discriminator" },
        ],
        caption:
          "Three tubular defects, one non-anion-gap acidosis — the serum K⁺ is the fastest fork: low in types 1 and 2, HIGH only in type 4.",
      },
    },
  ],
};
