import type { KypUsMLENote } from "../types";

// Ported from the KYP USMLE 2026 pilot corpus.
// Source: First Aid 2026, Part 2 pp. 204–206, 211–213 (casts in urine; glomerular disease; pyelonephritis; AKI; ATN)

export const urinaryCasts: KypUsMLENote = {
  id: "urinary-casts",
  title: "Urinary Casts",
  subtitle: "One test-tube of urine, six cast morphologies, six diagnoses — casts localize kidney disease to the glomerulus, tubule, or interstitium before any biopsy is drawn.",
  subject: "Pathology · Histology",
  system: "Section III · Renal — Pathology",
  pilotCategory: "Histology",
  difficulty: 2,
  readTime: 11,
  sourceRef: "First Aid 2026, Part 2 pp. 612–614, 619–621 (casts in urine; glomerular disease; pyelonephritis; AKI; ATN)",
  tags: [
    "Tamm-Horsfall",
    "RBC casts",
    "muddy brown",
    "oval fat bodies",
    "ATN",
    "nephritic vs nephrotic",
  ],
  core: {
    what: "Urinary casts are cylindrical structures formed in renal tubules from a Tamm-Horsfall mucoprotein (uromodulin) matrix that traps cells or debris as urine flows past. Their CONTENT identifies which compartment of the kidney is diseased.",
    why: "Casts are the urine's biopsy. Their presence alone answers the localization question — hematuria/pyuria is glomerular or tubular if casts are present, but post-renal (bladder cancer, stones) or bladder (cystitis) if casts are absent.",
    keyIdea: "Read the cast, read the compartment: RBC casts = glomerulus (nephritic); WBC casts = tubulointerstitium (pyelonephritis); granular/muddy-brown = tubules (ATN); fatty/oval fat bodies = nephrotic-range protein leak; waxy = chronic kidney disease; hyaline = nonspecific (dehydration, exercise).",
  },
  blocks: [
    {
      kind: "visual",
      visualId: "urinary-cast-gallery",
      title: "The six casts — a schematic microscopy gallery",
      caption: "RBC, WBC, granular/muddy-brown, fatty (oval fat bodies with Maltese cross), waxy, and hyaline casts with the diagnosis each one locks in.",
      notice: "Every cast shares the uromodulin matrix — train your eye on the INCLUSIONS: doughnut-RBCs (glomerular bleeding), lobed-nucleus WBCs (interstitial inflammation), coarse degenerated granules (necrotic tubular cells), refractile fat with Maltese cross under polarized light (nephrotic syndrome).",
    },
    {
      kind: "table",
      title: "Cast → compartment → diagnosis",
      columns: [
        "Cast",
        "Compartment",
        "Diagnoses",
      ],
      rows: [
        [
          "RBC casts",
          "Glomerulus",
          "Glomerulonephritis, hypertensive emergency",
        ],
        [
          "WBC casts",
          "Tubulointerstitium",
          "Tubulointerstitial inflammation, acute pyelonephritis, transplant rejection",
        ],
        [
          "Granular ('muddy brown')",
          "Tubules",
          "Acute tubular necrosis (ATN)",
        ],
        [
          "Fatty casts / oval fat bodies",
          "Glomerular leak",
          "Nephrotic syndrome (Maltese cross sign)",
        ],
        [
          "Waxy casts",
          "Chronically damaged tubules",
          "End-stage renal disease / chronic kidney disease",
        ],
        [
          "Hyaline casts",
          "—",
          "Nonspecific — normal finding with dehydration, exercise, or diuretic therapy",
        ],
      ],
      caption: "The rule of absence: bladder cancer and kidney stones → hematuria with NO casts; acute cystitis → pyuria with NO casts.",
    },
    {
      kind: "compare",
      title: "Nephritic vs nephrotic — the two syndromes casts distinguish",
      intro: "Both are glomerular, but the lesion (GBM inflammation vs podocyte failure) produces opposite urine pictures.",
      columns: [
        "Nephritic syndrome",
        "Nephrotic syndrome",
      ],
      rows: [
        {
          label: "Mechanism",
          a: "Glomerular inflammation → GBM damage → loss of RBCs into urine",
          b: "Podocyte damage → impaired charge barrier → massive proteinuria",
        },
        {
          label: "Urine",
          a: "Hematuria with DYSMORPHIC RBCs, RBC casts; subnephrotic proteinuria (<3.5 g/day, nephrotic-range if severe)",
          b: "Massive proteinuria >3.5 g/day; frothy urine with FATTY casts",
        },
        {
          label: "GFR / volume",
          a: "↓ GFR → oliguria, azotemia; ↑ renin → hypertension",
          b: "Hypoalbuminemia → edema; ↑ hepatic lipogenesis → hypercholesterolemia",
        },
        {
          label: "Clotting & infection",
          a: "—",
          b: "Hypercoagulable (antithrombin III loss → renal vein thrombosis); infection risk (IgG loss + soft tissue compromise by edema)",
        },
        {
          label: "Examples",
          a: "Infection-associated GN, Goodpasture, IgA nephropathy (Berger), Alport, MPGN",
          b: "FSGS, minimal change disease, membranous nephropathy, amyloidosis, diabetic glomerulonephropathy",
        },
      ],
    },
    {
      kind: "table",
      title: "Nephritic glomerular diseases — the level below the syndrome",
      intro: "When the stem gives histology or immunofluorescence, this table converts it to a disease.",
      columns: [
        "Disease",
        "Mechanism",
        "Light microscopy",
        "Immunofluorescence",
        "Electron microscopy",
      ],
      rows: [
        [
          "Infection-related GN",
          "Type III hypersensitivity, consumptive hypocomplementemia (children 2–4 wk post group A strep pharyngitis/skin; adults also Staphylococcus)",
          "Enlarged, hypercellular glomeruli",
          "Granular 'starry sky' / 'lumpy-bumpy' IgG, IgM, C3 along GBM and mesangium",
          "Subepithelial immune-complex humps",
        ],
        [
          "IgA nephropathy (Berger)",
          "IgA deposition concurrent with respiratory/GI infections (mucosal IgA)",
          "Mesangial proliferation",
          "IgA-based immune complex deposits in mesangium",
          "Mesangial IC deposition",
        ],
        [
          "Rapidly progressive (crescentic) GN",
          "Poor prognosis; multiple causes",
          "Crescents (fibrin + plasma proteins eg C3b with parietal cells, monocytes, macrophages)",
          "LINEAR (Goodpasture — anti-GBM, hemoptysis); GRANULAR (PSGN, DPGN); PAUCI-IMMUNE (ANCA: GPA/PR3 c-ANCA, EGPA, MPA/MPO p-ANCA)",
          "Goodpasture: GBM breaks, necrosis, crescents, no deposits; pauci-immune: usually no deposits",
        ],
        [
          "Diffuse proliferative GN",
          "Often SLE ('wire lupus'); DPGN/MPGN present nephritic AND nephrotic together",
          "'Wire looping' of capillaries",
          "Granular",
          "Subendothelial (sometimes subepithelial/intramembranous) IgG complexes with C3",
        ],
      ],
    },
    {
      kind: "table",
      title: "Glomerular nomenclature decoder",
      columns: [
        "Term",
        "Meaning",
        "Example",
      ],
      rows: [
        [
          "Focal",
          "<50% of glomeruli involved",
          "Focal segmental glomerulosclerosis",
        ],
        [
          "Diffuse",
          ">50% of glomeruli involved",
          "Diffuse proliferative glomerulonephritis",
        ],
        [
          "Proliferative",
          "Hypercellular glomeruli",
          "Membranoproliferative GN",
        ],
        [
          "Membranous",
          "Thickening of the GBM",
          "Membranous nephropathy",
        ],
        [
          "Primary glomerular disease",
          "Kidney-limited process",
          "Minimal change disease",
        ],
        [
          "Secondary glomerular disease",
          "Systemic disease involving glomeruli",
          "SLE, diabetic nephropathy",
        ],
      ],
    },
  ],
  clinical: [
    {
      kind: "list",
      title: "The two renal infections — casts separate them",
      items: [
        {
          lead: "Acute pyelonephritis (WBC casts present)",
          text: "Neutrophils infiltrate the renal INTERSTITIUM, cortex affected with relative sparing of glomeruli/vessels. Fevers, flank pain (costovertebral angle tenderness), nausea/vomiting, chills + WBCs in urine ± WBC CASTS. Causes: ascending UTI (E coli most common) or hematogenous spread; CT shows striated parenchymal enhancement. Complications: chronic pyelonephritis, renal papillary necrosis, perinephric abscess (posterior spread to psoas), urosepsis.",
        },
        {
          lead: "Acute cystitis (NO casts)",
          text: "Bladder inflammation: suprapubic pain, dysuria, frequency, urgency — systemic signs (high fever, chills) usually ABSENT. E coli most common; Staph saprophyticus in sexually active young women; Klebsiella; Proteus (ammonia odor); Enterococcus. Labs: ⊕ leukocyte esterase, ⊕ nitrites (Enterobacteriaceae). Sterile pyuria → think urethritis: Neisseria gonorrhoeae, Chlamydia trachomatis.",
        },
        {
          lead: "Chronic pyelonephritis",
          text: "Recurrent/inadequately treated episodes with a predisposition (vesicoureteral reflux, obstructing stones): coarse asymmetric corticomedullary scarring, blunted calyces, tubules with eosinophilic casts resembling thyroid tissue — 'thyroidization' of the kidney.",
        },
      ],
    },
    {
      kind: "table",
      title: "AKI ladder — place the cast in the algorithm",
      columns: [
        "Category",
        "Etiology",
        "Urine osmolality",
        "FENa",
        "BUN/Cr",
      ],
      rows: [
        [
          "Prerenal azotemia",
          "Hypovolemia, ↓CO, ↓effective circulating volume (HF, cirrhosis)",
          ">500 (concentrated)",
          "<1%",
          ">20",
        ],
        [
          "Intrinsic (ATN, AIN, GN, vasculitis)",
          "Tubular/interstitial/glomerular/vascular injury",
          "<350",
          ">2%",
          "<15",
        ],
        [
          "Postrenal azotemia",
          "Stones, BPH, neoplasm, congenital — bilateral obstruction",
          "Varies",
          "Varies",
          "Varies",
        ],
      ],
      caption: "Prerenal kidney conserves sodium (FENa <1%, concentrated urine) because tubules are intact; ATN cannot (FENa >2%). Dialysis indications in AKI: AEIOU — Acidosis, Electrolytes (hyperkalemia), Intoxication (eg, lithium), Overload (fluid), Uremia.",
    },
    {
      kind: "list",
      title: "Adjacent high-yield: renal papillary necrosis & AIN",
      items: [
        {
          lead: "Renal papillary necrosis",
          text: "Sloughing of necrotic papillae → gross hematuria. Associations: Sickle cell disease/trait, Acute pyelonephritis, Analgesics (NSAIDs), Diabetes — 'SAAD papa with papillary necrosis.'",
        },
        {
          lead: "Acute interstitial nephritis",
          text: "Drug-hypersensitivity tubulointerstitial inflammation: pyuria (classically EOSINOPHILS) + azotemia after haptens — remember causes to DRAIN(S): Diuretics, Rifampin, Antibiotics (penicillins/cephalosporins), PPIs, NSAIDs, Sulfa. Fever, rash, hematuria, CVA tenderness — but can be asymptomatic.",
        },
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "Painless hematuria in an older smoker with NO casts and a normal creatinine.",
        discriminator: "Hematuria WITHOUT casts localizes OUTSIDE the renal parenchyma",
        concept: "Casts are the renal-compartment marker; absence points downstream",
        answer: "Bladder cancer (or stones) — cystoscopy, not nephrology",
      },
      {
        stem: "Hospitalized patient after contrast exposure: creatinine rises, FENa >2%, urine shows coarse brownish casts.",
        discriminator: "Muddy-brown granular casts + FENa >2%",
        concept: "Necrotic tubular cells slough and degrade into granular casts; sodium reabsorption is lost",
        answer: "Acute tubular necrosis — nephrotoxic (contrast) subtype",
      },
      {
        stem: "Child with cola-colored urine 3 weeks after a sore throat; BP elevated; RBC casts on microscopy; C3 low.",
        discriminator: "Oliguria + dysmorphic RBCs/RBC casts + hypocomplementemia 2–4 weeks post-strep",
        concept: "Type III hypersensitivity immune-complex glomerulonephritis",
        answer: "Post-infectious (poststreptococcal) glomerulonephritis",
      },
      {
        stem: "Young woman given trimethoprim-sulfamethoxazole 10 days ago: fever, rash, eosinophiluria, rising creatinine.",
        discriminator: "Drug exposure + EOSINOPHILS in urine",
        concept: "Hypersensitivity tubulointerstitial nephritis (WBC casts may appear)",
        answer: "Acute interstitial nephritis — remove the drug; steroids if refractory",
      },
    ],
    traps: [
      {
        a: "Muddy-brown casts (ATN)",
        b: "WBC casts (pyelonephritis)",
        whyConfused: "Both appear in sick hospitalized patients with AKI and dirty urinalyses.",
        keyDifference: "Granular/brown = degenerated TUBULAR cells (toxic/ischemic tubule). WBC/lobed = interstitial INFECTION/inflammation with fever and CVA tenderness.",
        clue: "Look for the toxin/shock context (ATN) vs fever + flank pain + UTI history (pyelo).",
      },
      {
        a: "RBC casts (nephritic)",
        b: "Fatty casts (nephrotic)",
        whyConfused: "Both 'belong' to glomerular disease.",
        keyDifference: "Inflamed GBM leaks RBCs (hematuria, HTN, oliguria). Damaged podocytes leak PROTEIN (edema, hyperlipidemia, Maltese cross fat).",
        clue: "Cola-colored urine + hypertension → nephritic; periorbital edema + frothy urine + >3.5 g/day protein → nephrotic.",
      },
      {
        a: "Prerenal azotemia",
        b: "ATN",
        whyConfused: "Both present with rising creatinine; prerenal can PROGRESS to ATN.",
        keyDifference: "Prerenal = intact tubules concentrating urine (osm >500, FENa <1%, BUN/Cr >20). ATN = broken tubules (osm <350, FENa >2%, muddy-brown casts).",
        clue: "The urinalysis sediment decides: bland/prerenal vs muddy-brown/ATN.",
      },
    ],
    pivots: [
      {
        lookAlike: "Gross hematuria — three patients",
        differentiator: "Casts + dysmorphic RBCs (glomerular) vs no casts + risk factors (cancer/stone) vs painful hematuria + infection signs (cystitis)",
        correctPath: "RBC casts → nephritic workup; older smoker painless hematuria → cystoscopy imaging; dysuria/frequency without casts → urinalysis and culture for cystitis.",
      },
      {
        lookAlike: "AKI with FENa >2%",
        differentiator: "Muddy-brown casts (ATN) vs eosinophiluria + drug/rash (AIN) vs RBC casts + GN labs (glomerulonephritis)",
        correctPath: "Sediment morphology is the fork: granular → ATN (supportive, watch K⁺); eosinophils → AIN (stop the drug); RBC casts → GN (complement, serology).",
      },
    ],
    miniCase: {
      vignette: "A 67-year-old woman is admitted with community-acquired pneumonia and treated with high-dose gentamicin. By hospital day 6, urine output has fallen to 300 mL/day. Serum creatinine has risen from 0.9 to 3.1 mg/dL, BUN 34 mg/dL, and potassium 5.9 mEq/L. Urinalysis shows many coarse brownish granular casts; urine sodium is 52 mEq/L and urine osmolality 290 mOsm/kg. Renal ultrasound shows no hydronephrosis.",
      question: "What is the most likely cause of this patient's acute kidney injury?",
      options: [
        {
          label: "A",
          text: "Prerenal azotemia from sepsis-related hypovolemia",
          why: "Prerenal physiology would CONCENTRATE urine (osm >500) and conserve sodium (FENa <1%) — the opposite of her values.",
        },
        {
          correct: true,
          label: "B",
          text: "Aminoglycoside-associated acute tubular necrosis",
          why: "Correct. Gentamicin is a classic nephrotoxin for the proximal tubule; oliguria, FENa >2%, dilute urine, and muddy-brown granular casts complete the diagnosis.",
        },
        {
          label: "C",
          text: "Postrenal obstruction from bilateral ureteral stones",
          why: "Excluded by the unremarkable ultrasound and the cast type; obstruction gives variable FENa, not muddy-brown casts.",
        },
        {
          label: "D",
          text: "Acute interstitial nephritis from the antibiotic",
          why: "Possible with any drug, but the classic findings — fever, rash, eosinophiluria, WBC casts — are absent; granular muddy-brown casts point to the tubule's own necrosis.",
        },
      ],
      reasoning: "Nephrotoxin + hospital day 6 (aminoglycoside nadir) + oliguric maintenance phase + muddy-brown casts + FENa >2% = ATN. Expect hyperkalemia and metabolic acidosis during the 1–3 week oliguric maintenance phase, then a polyuric recovery with electrolyte wasting.",
    },
  },
  mnemonics: [
    {
      code: "“SAAD papa with papillary necrosis”",
      meaning: "Sickle cell disease/trait, Acute pyelonephritis, Analgesics (NSAIDs), Diabetes — the four papillary necrosis associations.",
      memorizes: "Causes of renal papillary necrosis",
      whenToUse: "Gross hematuria + one of these four conditions.",
      clinical: "Sloughed papillae can obstruct the ureter — colic plus hematuria.",
    },
    {
      code: "“DRAINS”",
      meaning: "Drugs causing acute interstitial nephritis: Diuretics, Rifampin, Antibiotics (penicillins, cephalosporins), PPIs (I = Inhibitors), NSAIDs, Sulfa.",
      memorizes: "The drug list for AIN",
      whenToUse: "Any 'drug + fever/rash + AKI + eosinophils' stem.",
      clinical: "Withdraw the drug; systemic steroids if renal function does not recover.",
    },
    {
      code: "“AEIOU”",
      meaning: "Dialysis indications in AKI: Acidosis, Electrolytes (hyperkalemia), Intoxication (lithium etc), Overload (volume), Uremia.",
      memorizes: "When to dialyze acute kidney injury",
      whenToUse: "Any AKI management question with deteriorating labs.",
      clinical: "Uremic pericarditis and encephalopathy are absolute emergencies.",
    },
  ],
  rapidReview: {
    s30: [
      "Casts = renal origin. No casts + hematuria → bladder cancer/stones. No casts + pyuria → cystitis.",
      "RBC casts → glomerulonephritis, hypertensive emergency.",
      "WBC casts → pyelonephritis, tubulointerstitial inflammation, transplant rejection.",
      "Muddy-brown granular casts → ATN. Waxy → ESRD/CKD. Fatty/oval fat bodies → nephrotic syndrome. Hyaline → nonspecific.",
      "All casts = Tamm-Horsfall (uromodulin) matrix.",
    ],
    m3: [
      "Nephritic: GBM inflammation → dysmorphic RBCs, RBC casts, ↓GFR (oliguria, azotemia), ↑renin → HTN, proteinuria <3.5 g/day.",
      "Nephrotic: podocyte/charge-barrier damage → proteinuria >3.5 g/day, edema, hypoalbuminemia, hypercholesterolemia, hypercoagulable (antithrombin loss → renal vein thrombosis), infection risk (IgG loss).",
      "ATN: most common intrinsic AKI inpatients; ischemic or nephrotoxic (aminoglycosides, contrast, lead, cisplatin, ethylene glycol, tumor lysis uric acid, myoglobin, hemoglobin); PT + thick ascending limb most susceptible; ↑FENa; 3 stages.",
      "AIN: DRAINS drugs; eosinophiluria; fever/rash/CVA tenderness.",
      "Pyelonephritis: WBC casts, fever, flank pain, striated enhancement on CT; complications — chronic pyelo, papillary necrosis, perinephric abscess (psoas), urosepsis. Cystitis: suprapubic symptoms, no systemic signs, no casts.",
      "AKI labs: prerenal (osm >500, FENa <1%, BUN/Cr >20) vs intrinsic (osm <350, FENa >2%, BUN/Cr <15) vs postrenal (varies; hydronephrosis on US).",
    ],
    m10: [
      "Glomerulonephritis table: infection-related (granular 'lumpy-bumpy', subepithelial humps, ↓C3, children 2–4 wk post group A strep or skin; Staph in adults); IgA nephropathy (mesangial IgA, concurrent with mucosal infections); RPGN (crescents; LINEAR = Goodpasture anti-GBM with hemoptysis; GRANULAR = PSGN/DPGN; PAUCI-IMMUNE = ANCA vasculitides); DPGN (SLE 'wire looping', subendothelial deposits, nephritic+nephrotic).",
      "Nomenclature: focal <50% glomeruli, diffuse >50%, proliferative = hypercellular, membranous = GBM thickening; primary = kidney-limited, secondary = systemic (SLE, diabetes).",
      "Chronic pyelonephritis: coarse asymmetric corticomedullary scarring, blunted calyces, thyroidization (eosinophilic casts in atrophic tubules).",
      "Renal failure consequences — MAD HUNGER: Metabolic Acidosis, Dyslipidemia (↑TG), High potassium, Uremia, Na/H2O retention, Growth retardation/developmental delay, Erythropoietin deficiency anemia, Renal osteodystrophy. Uremia = Pericarditis, Encephalopathy (asterixis), Anorexia, Nausea ('Ure-PEAN').",
      "FGF23 rises early in CKD to maintain normal phosphate — 'FGF23 fights f(ph)osphate.'",
      "Diffuse cortical necrosis: bilateral cortical infarction from vasospasm + DIC; obstetric catastrophes (abruption), septic shock.",
    ],
  },
  recall: [
    {
      q: "Protein that forms the matrix of ALL urinary casts?",
      a: "Tamm-Horsfall mucoprotein (uromodulin), secreted by renal tubular cells to prevent UTIs.",
    },
    {
      q: "Painless hematuria, no casts, 70-year-old smoker — next diagnostic step?",
      a: "Evaluate for bladder cancer (urine cytology/cystoscopy) — absence of casts points below the kidney.",
    },
    {
      q: "Which cast defines acute pyelonephritis?",
      a: "WBC casts (tubulointerstitial inflammation).",
    },
    {
      q: "FENa and urine osmolality in ATN vs prerenal azotemia?",
      a: "ATN: FENa >2%, osm <350. Prerenal: FENa <1%, osm >500.",
    },
    {
      q: "Which cast has the Maltese cross sign, and what syndrome is it?",
      a: "Fatty cast / oval fat bodies — nephrotic syndrome (polarized light shows Maltese crosses in cholesterol esters).",
    },
    {
      q: "Causes of renal papillary necrosis?",
      a: "SAAD — Sickle cell, Acute pyelonephritis, Analgesics (NSAIDs), Diabetes.",
    },
    {
      q: "Three phases of ATN?",
      a: "Inciting event → maintenance (oliguric 1–3 wk, hyperkalemia/acidosis/uremia risk) → recovery (polyuric, falling BUN/Cr, hypokalemia/wasting risk).",
    },
  ],
  related: [
    {
      title: "Acid-Base Physiology",
      note: "ATN maintenance phase risks metabolic (anion-gap-normal) acidosis; renal failure is a GOLDMARK anion-gap cause.",
      topicId: "acid-base-physiology",
    },
    {
      title: "Diabetes Mellitus",
      note: "Diabetic nephropathy is a SECONDARY nephrotic-range glomerular disease (and a papillary necrosis cause) — the two topics cross at the urine sediment.",
      topicId: "diabetes-mellitus",
    },
    {
      title: "Hypersensitivity Types",
      note: "Post-infectious GN is type III; anti-GBM disease is type II; AIN is a type IV-like drug hypersensitivity — the urine sediment is Gell-Coombs made visible.",
      topicId: "hypersensitivity-types",
    },
    {
      title: "Nephrotic syndrome",
      note: "Podocyte diseases (minimal change, FSGS, membranous): the fatty cast's home territory — hypercoagulability and infection risk physiology.",
    },
  ],
  crossLinks: [
    {
      subject: "Immunology",
      connection: "Immune-complex deposition (type III) vs anti-GBM antibodies (type II) produce the two classic nephritic IF patterns — granular vs linear.",
    },
    {
      subject: "Microbiology",
      connection: "E coli dominates ascending UTI; group A strep and Staph trigger post-infectious GN; sterile pyuria hides GC and Chlamydia.",
    },
    {
      subject: "Pharmacology",
      connection: "Aminoglycosides, contrast, cisplatin, NSAIDs, and sulfas are the pharmacology of both ATN and AIN.",
    },
    {
      subject: "Biochemistry",
      connection: "Rhabdomyolysis → myoglobinuria → ATN; tumor lysis → uric acid nephropathy — both are biochemistry arriving in the urine.",
    },
  ],
  mechanisms: [
    {
      id: "cast-formation",
      title: "How a cast is born — tubular protein meets urine flow",
      context: "Any renal tubule",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Tamm-Horsfall mucoprotein (uromodulin) secretion",
            sublabel: "Renal tubular cells secrete this mucoprotein into the tubular lumen — its physiologic role is protecting against urinary tract infection.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Matrix gels in the tubular lumen",
            sublabel: "cellular — Uromodulin polymerizes, taking the shape of the tubule — hence the cylindrical cast.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Cells or debris get trapped as it forms",
            sublabel: "cellular — Whatever is in the lumen at that moment — RBCs from an inflamed glomerulus, WBCs from an infected interstitium, sloughed necrotic tubular cells — becomes embedded.",
            variant: "process",
          },
          {
            id: "s3",
            label: "Cast is flushed into the urine",
            sublabel: "clinical — Microscopy of the sediment then reveals the tubule's recent history.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Localization before imaging",
            sublabel: "Effect: Casts place disease INSIDE the kidney (glomerular/tubular/interstitial), not in the lower tract.",
            variant: "output",
          },
          {
            id: "o2",
            label: "No casts + hematuria → think bladder",
            sublabel: "Clinical: Bladder cancer and kidney stones cause hematuria WITHOUT casts. Acute cystitis causes pyuria WITHOUT casts.",
            variant: "output",
          },
          {
            id: "o3",
            label: "Matrix is the same for all types",
            sublabel: "Effect: It is the inclusions — not the matrix — that carry the diagnosis.",
            variant: "output",
          },
        ],
        edges: [
          {
            from: "trigger",
            to: "s1",
          },
          {
            from: "s1",
            to: "s2",
          },
          {
            from: "s2",
            to: "s3",
          },
          {
            from: "s3",
            to: "o1",
          },
          {
            from: "s3",
            to: "o2",
          },
          {
            from: "s3",
            to: "o3",
          },
        ],
        caption:
          "Tamm-Horsfall protein aggregates in the distal tubule and takes a print of whatever the nephron was shedding that day — the cast is a biopsy of the tubule's recent history.",
      },
    },
    {
      id: "atn-mechanism",
      title: "Muddy-brown (granular) casts — the ATN mechanism",
      context: "Intrinsic AKI, hospitalized patient",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Ischemic or nephrotoxic tubular injury",
            sublabel: "Ischemia (from prerenal azotemia/shock) or nephrotoxins — aminoglycosides, radiocontrast, lead, cisplatin, ethylene glycol, uric acid (tumor lysis), myoglobinuria (rhabdomyolysis), hemoglobinuria. Proximal tubule and thick ascending limb are most susceptible.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Patchy necrosis of tubular cells",
            sublabel: "cellular — Dead cells slough into the tubular lumen.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Debris obstructs tubules + backflow of filtrate",
            sublabel: "Pathology — Obstruction and back-leak both lower GFR — the kidney fails from within.",
            variant: "process",
          },
          {
            id: "s3",
            label: "Degraded cell debris forms granular casts",
            sublabel: "Lab — The 'muddy brown' coarsely granular appearance on microscopy.",
            variant: "process",
          },
          {
            id: "o1",
            label: "↑ FENa (>2%), urine Na⁺ >40",
            sublabel: "Lab: Tubules cannot reabsorb sodium — the hallmark that separates ATN from prerenal azotemia (FENa <1%).",
            variant: "output",
          },
          {
            id: "o2",
            label: "Three-phase course",
            sublabel: "Clinical: Inciting event → maintenance (oliguric, 1–3 weeks; hyperkalemia, metabolic acidosis, uremia risk) → recovery (polyuric; BUN/Cr fall; hypokalemia and electrolyte wasting risk).",
            variant: "output",
          },
          {
            id: "o3",
            label: "Often spontaneously resolves",
            sublabel: "Clinical: Most common cause of intrinsic AKI in hospitalized patients; can be fatal in the oliguric phase.",
            variant: "output",
          },
        ],
        edges: [
          {
            from: "trigger",
            to: "s1",
          },
          {
            from: "s1",
            to: "s2",
          },
          {
            from: "s2",
            to: "s3",
          },
          {
            from: "s3",
            to: "o1",
          },
          {
            from: "s3",
            to: "o2",
          },
          {
            from: "s3",
            to: "o3",
          },
        ],
        caption:
          "Ischemic or toxic injury kills tubular cells that slough into the lumen — muddy-brown granular casts with a rising creatinine and FENa > 2% is ATN until proven otherwise.",
      },
    },
  ],
};
