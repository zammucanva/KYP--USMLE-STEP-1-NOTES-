import type { KypUsMLENote } from "../types";

// Pathology — INFLAMMATION banner (P-batch 8). Source: pdf 231-232 /
// book 209-210 (Inflammation — the definition with the harmful
// triple; the Cardinal signs table [Rubor and calor, Tumor, Dolor,
// Functio laesa]; the Systemic manifestations [Fever, Leukocytosis,
// ↑ plasma acute-phase reactants]; the Acute-phase reactants table
// [POSITIVe: CRP, ferritin, fibrinogen, haptoglobin, hepcidin,
// procalcitonin, serum amyloid A; NeGATIVe: albumin, transferrin,
// transthyretin]; the ESR block with both lists and the
// 'lower than expected' footnote; and the Acute inflammation panel
// [definition, STIMULI, MEDIATORS, COMPONENTS, OUTCOMES] with the
// inflammasome and 4-step extravasation margin blocks). Census:
// pdfimages reports ONE cmyk JPEG raster on pdf 232 (~187x188 at
// 150 dpi), lettered A beside 'Characterized by neutrophils in
// tissue A' — an H&E micrograph of dense neutrophil infiltration
// (dark purple multilobed nuclei within pink tissue/stroma), sitting
// on the left side below the Acute inflammation header. COPYRIGHTED
// — described-in-text only, NEVER reproduced (the M32 convention).
// NO margin notes or mnemonics on either page (VLM census confirmed
// on both pages); the KYP memory layer is original.

export const acuteInflammation: KypUsMLENote = {
  id: "acute-inflammation",
  title: "Acute Inflammation: Cardinal Signs & Acute-Phase Reactants",
  subtitle:
    "The response that eliminates the initial cause of cell injury, removes necrotic cells, and initiates tissue repair (book 209-210) — divided into acute and chronic, and harmful to the host itself if EXCESSIVE (septic shock), PROLONGED (persistent infections such as TB), or INAPPROPRIATE (autoimmune diseases such as SLE). THE CARDINAL SIGNS — Rubor and calor: vasodilation (relaxation of arteriolar smooth muscle) → ↑ blood flow, mediated by histamine, prostaglandins, bradykinin, NO; Tumor: endothelial contraction/disruption → ↑ vascular permeability → protein-rich exudate leaks from postcapillary venules → ↑ interstitial oncotic pressure, mediated by leukotrienes (C4, D4, E4), histamine, serotonin, bradykinin; Dolor: sensitization of sensory nerve endings via bradykinin, PGE2, histamine; Functio laesa: inflammation impairs function (eg, inability to make fist due to hand cellulitis). THE SYSTEMIC ANSWER — fever (pyrogens eg LPS → macrophage IL-1 and TNF → ↑ COX in perivascular cells of the anterior hypothalamus → ↑ PGE2 → ↑ temperature set point), leukocytosis (the predominant cell follows the agent — bacteria → ↑ neutrophils), and ↑ plasma acute-phase reactants (produced by liver, notably induced by IL-6). THE REACTANTS — POSITIVE: CRP (opsonin, fixes complement, nonspecific inflammation sign), ferritin (sequesters iron from microbes), fibrinogen (correlates with ESR), haptoglobin (binds extracellular hemoglobin), hepcidin (↓ iron absorption by degrading ferroportin + ↓ macrophage iron release → anemia of chronic disease), procalcitonin (bacterial infections), serum amyloid A (prolonged elevation → secondary amyloidosis); NEGATIVE: albumin and transthyretin (conserve amino acids), transferrin (internalized to sequester iron). THE ESR — fibrinogen coats RBCs → ↓ negative charge → ↑ aggregation → faster fall; ↑ in anemias, infections, giant cell (temporal) arteritis, polymyalgia rheumatica, metastases, multiple myeloma, renal disease, pregnancy; ↓ in sickle cell, polycythemia, HF, microcytosis, hypofibrinogenemia. THE ACUTE PANEL — transient and early, neutrophils in tissue, onset in seconds to minutes, innate; stimuli (infections, trauma, necrosis, foreign bodies); mediators (TLRs, arachidonic acid metabolites, neutrophils, eosinophils, pre-existing antibodies, mast cells, basophils, complement, Hageman factor XII; the inflammasome recognizing DAMPs/PAMPs → IL-1); components (vascular vasodilation + permeability; cellular extravasation in 4 steps — margination and rolling, adhesion, transmigration, migration); outcomes (resolution and healing via IL-10/TGF-β, persistent acute via IL-8, abscess walled off by fibrosis, chronic via APC antigen presentation → CD4+ Th activation, scarring); macrophages predominate late (peak 2-3 days).",
  subject: "Pathology",
  system: "Section II · High-Yield General Principles — Pathology: Inflammation",
  pilotCategory:
    "The full acute-inflammation architecture — the four cardinal signs with their mediators, the systemic acute-phase reaction (fever cascade, leukocytosis, IL-6-driven hepatic reactants), the positive and negative acute-phase reactants, the ESR determinants with both disease lists, and the acute inflammation panel (stimuli, mediators including the inflammasome, vascular and cellular components with the 4-step extravasation, and the five outcomes).",
  difficulty: 2,
  readTime: 10,
  sourceRef:
    "First Aid 2026, Part 1 pp. 209–210 (Inflammation — the definition; the Cardinal signs table; the Systemic manifestations (acute-phase reaction); the Acute-phase reactants table; the Erythrocyte sedimentation rate block; the Acute inflammation panel — STIMULI, MEDIATORS, COMPONENTS, OUTCOMES — with the inflammasome and leukocyte extravasation margin blocks; the lettered micrograph, described in text)",
  tags: [
    "inflammation",
    "acute inflammation",
    "cardinal signs",
    "rubor",
    "calor",
    "tumor",
    "dolor",
    "functio laesa",
    "vasodilation",
    "arteriolar smooth muscle relaxation",
    "increased vascular permeability",
    "exudate",
    "postcapillary venules",
    "interstitial oncotic pressure",
    "histamine",
    "prostaglandins",
    "bradykinin",
    "nitric oxide",
    "leukotrienes C4 D4 E4",
    "serotonin",
    "PGE2",
    "sensory nerve endings",
    "hand cellulitis",
    "septic shock",
    "tuberculosis",
    "systemic lupus erythematosus",
    "acute-phase reaction",
    "fever",
    "pyrogens",
    "LPS",
    "IL-1",
    "TNF",
    "cyclooxygenase",
    "anterior hypothalamus",
    "temperature set point",
    "leukocytosis",
    "neutrophils",
    "acute-phase reactants",
    "IL-6",
    "liver",
    "C-reactive protein",
    "opsonin",
    "complement",
    "ferritin",
    "iron sequestration",
    "fibrinogen",
    "ESR",
    "haptoglobin",
    "extracellular hemoglobin",
    "hepcidin",
    "ferroportin",
    "anemia of chronic disease",
    "procalcitonin",
    "bacterial infections",
    "serum amyloid A",
    "secondary amyloidosis",
    "albumin",
    "transferrin",
    "transthyretin",
    "prealbumin",
    "erythrocyte sedimentation rate",
    "RBC aggregation",
    "rouleaux",
    "giant cell arteritis",
    "temporal arteritis",
    "polymyalgia rheumatica",
    "multiple myeloma",
    "nephrotic syndrome",
    "pregnancy",
    "sickle cell anemia",
    "polycythemia",
    "heart failure",
    "microcytosis",
    "hypofibrinogenemia",
    "innate immune system",
    "toll-like receptors",
    "arachidonic acid metabolites",
    "eosinophils",
    "mast cells",
    "basophils",
    "complement",
    "Hageman factor",
    "factor XII",
    "inflammasome",
    "DAMPs",
    "PAMPs",
    "uric acid crystals",
    "leukocyte extravasation",
    "margination",
    "rolling",
    "adhesion",
    "transmigration",
    "chemoattraction",
    "resolution",
    "IL-10",
    "TGF-beta",
    "IL-8",
    "abscess",
    "chronic inflammation",
    "antigen presentation",
    "CD4+ T cells",
    "scarring",
    "macrophages",
  ],
  core: {
    what: "INFLAMMATION: response to eliminate initial cause of cell injury, to remove necrotic cells resulting from the original insult, and to initiate tissue repair; divided into acute and chronic; harmful to the host if the reaction is excessive (eg, septic shock), prolonged (eg, persistent infections such as TB), or inappropriate (eg, autoimmune diseases such as SLE). CARDINAL SIGNS: Rubor and calor — redness and warmth; vasodilation (relaxation of arteriolar smooth muscle) → ↑ blood flow; mediated by histamine, prostaglandins, bradykinin, NO. Tumor — swelling; endothelial contraction/disruption (eg, from tissue damage) → ↑ vascular permeability → leakage of protein-rich fluid from postcapillary venules into interstitial space (exudate) → ↑ interstitial oncotic pressure; endothelial cell contraction mediated by leukotrienes (C4, D4, E4), histamine, serotonin, bradykinin. Dolor — pain; sensitization of sensory nerve endings; mediated by bradykinin, PGE2, histamine. Functio laesa — loss of function; inflammation impairs function (eg, inability to make fist due to hand cellulitis). SYSTEMIC MANIFESTATIONS (acute-phase reaction): Fever — pyrogens (eg, LPS) induce macrophages to release IL-1 and TNF → ↑ COX activity in perivascular cells of anterior hypothalamus → ↑ PGE2 → ↑ temperature set point. Leukocytosis — ↑ WBC count; type of predominant cell depends on inciting agent or injury (eg, bacteria → ↑ neutrophils). ↑ plasma acute-phase reactants — serum concentrations significantly change in response to acute and chronic inflammation; produced by liver; notably induced by IL-6. ACUTE-PHASE REACTANTS — POSITIVE (UPREGULATED): C-reactive protein (opsonin; fixes complement and facilitates phagocytosis; measured clinically as a nonspecific sign of ongoing inflammation), Ferritin (binds and sequesters iron to inhibit microbial iron scavenging), Fibrinogen (coagulation factor; promotes endothelial repair; correlates with ESR), Haptoglobin (binds extracellular hemoglobin, protects against oxidative stress), Hepcidin (↓ iron absorption by degrading ferroportin and ↓ iron release from macrophages → anemia of chronic disease), Procalcitonin (increases in bacterial infections), Serum amyloid A (prolonged elevation can lead to secondary amyloidosis). NEGATIVE (DOWNREGULATED): Albumin (downregulation conserves amino acids for positive reactants), Transferrin (internalized by macrophages to sequester iron), Transthyretin (also called prealbumin; downregulation conserves amino acids). ESR: RBCs normally remain separated via ⊝ charges; products of inflammation (eg, fibrinogen) coat RBCs → ↓ ⊝ charge → ↑ RBC aggregation; denser RBC aggregates fall at a faster rate within a pipette tube → ↑ ESR; often co-tested with CRP (more specific marker of inflammation). ↑ ESR: most anemias, infections, inflammation (eg, giant cell [temporal] arteritis, polymyalgia rheumatica), cancer (eg, metastases, multiple myeloma), renal disease (end-stage or nephrotic syndrome), pregnancy. ↓ ESR (lower than expected): sickle cell anemia (altered shape), polycythemia (↑ RBCs 'dilute' aggregation factors), HF, microcytosis, hypofibrinogenemia. ACUTE INFLAMMATION: transient and early response to injury or infection; characterized by neutrophils in tissue, often with associated edema; rapid onset (seconds to minutes) and short duration (minutes to days); a reaction of the innate immune system (less specific than chronic inflammation). STIMULI: infections, trauma, necrosis, foreign bodies. MEDIATORS: toll-like receptors, arachidonic acid metabolites, neutrophils, eosinophils, antibodies (pre-existing), mast cells, basophils, complement, Hageman factor (factor XII); the inflammasome — a cytoplasmic complex recognizing damage- and pathogen-associated molecular patterns (eg, microbial products, uric acid crystals) → IL-1 activation → inflammatory response (eg, fever, leukocytosis); brings cells and proteins to site of injury or infection. COMPONENTS: vascular — vasodilation (→ ↑ blood flow and stasis) and ↑ endothelial permeability (contraction of endothelial cells opens interendothelial junctions); cellular — extravasation of leukocytes (mainly neutrophils) from postcapillary venules → accumulation of leukocytes in focus of injury → leukocyte activation; leukocyte extravasation has 4 steps: margination and rolling, adhesion, transmigration, and migration (chemoattraction). OUTCOMES: resolution and healing (IL-10, TGF-β); persistent acute inflammation (IL-8); abscess (acute inflammation walled off by fibrosis); chronic inflammation (antigen presentation by macrophages and other APCs → activation of CD4+ Th cells); scarring. Macrophages predominate in the late stages of acute inflammation (peak 2-3 days after onset) and influence outcome by secreting cytokines.",
    why: "This two-page spread is the entire acute-inflammation operating system, and it teaches best as a single cascade with three outputs. The local response is the four cardinal signs, each a mechanism with its mediator list: vasodilation makes red and warm (histamine, prostaglandins, bradykinin, NO), endothelial contraction makes the swollen protein-rich exudate (leukotrienes C4/D4/E4, histamine, serotonin, bradykinin), sensitized nerve endings make pain (bradykinin, PGE2, histamine), and the sum impairs function. The systemic response scales the same signal to the whole body: pyrogen-driven IL-1/TNF raising hypothalamic PGE2 and the temperature set point, the leukocytosis whose predominant cell names the agent, and the liver's IL-6-driven reactant switch — the seven positive reactants (CRP the nonspecific clinical flag, ferritin and hepcidin and transferrin's internalization all starving microbes of iron, fibrinogen stacking RBC rouleaux, haptoglobin mopping free hemoglobin, procalcitonin flagging bacteria, serum amyloid A seeding tomorrow's secondary amyloidosis) and the three negatives conserving amino acids. The ESR is fibrinogen's shadow — the measurement of the stacking — with the two memorized disease lists. And the acute inflammation panel closes the loop with its own vocabulary: what starts it (infections, trauma, necrosis, foreign bodies), what runs it (the mediator roster plus the inflammasome's DAMP/PAMP-to-IL-1 gate), what it looks like (vascular + cellular components, the 4-step extravasation), and where it ends — five outcomes from resolution (IL-10, TGF-β) through abscess and chronic transformation (APCs → CD4+ Th cells), with macrophages taking over late (peak 2-3 days).",
    keyIdea:
      "Read every acute-inflammation question through three frames. FRAME 1 — THE LOCAL SIGN: rubor/calor = vasodilation (histamine, prostaglandins, bradykinin, NO); tumor = endothelial contraction → ↑ permeability → protein-rich exudate (leukotrienes C4/D4/E4, histamine, serotonin, bradykinin); dolor = sensitized nerve endings (bradykinin, PGE2, histamine); functio laesa = impaired function. FRAME 2 — THE SYSTEMIC MARKER: fever = LPS → macrophage IL-1/TNF → hypothalamic COX → PGE2 → set point; leukocytosis follows the agent (bacteria → neutrophils); the liver's IL-6 reactants split POSITIVE (CRP, ferritin, fibrinogen, haptoglobin, hepcidin, procalcitonin, serum amyloid A) against NEGATIVE (albumin, transferrin, transthyretin); ESR = fibrinogen-coated RBCs stacking and falling (↑ in anemias, infections, temporal arteritis, polymyalgia rheumatica, metastases, myeloma, renal disease, pregnancy; ↓ in sickle cell, polycythemia, HF, microcytosis, hypofibrinogenemia). FRAME 3 — THE PANEL: acute = transient, neutrophils, seconds-to-minutes, innate; stimuli (infections, trauma, necrosis, foreign bodies); mediators (TLRs, arachidonic acid metabolites, cells, complement, Hageman factor XII, the inflammasome → IL-1); components (vascular: vasodilation + permeability; cellular: the 4-step extravasation — margination and rolling, adhesion, transmigration, migration); outcomes (resolution IL-10/TGF-β, persistent IL-8, abscess, chronic via APC → CD4+ Th, scarring); macrophages peak 2-3 days late.",
  },
  mechanisms: [
    {
      id: "cardinal-sign-cascade",
      title: "The local cascade: one insult, four signs, four mediator lists",
      context: "The Cardinal signs table (book 209)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Cell injury or infection — the initial insult",
            sublabel: "Input — trauma, necrosis, a foreign body, or a microbe; the response exists to eliminate the cause, remove necrotic cells, and initiate repair.",
            variant: "input",
          },
          {
            id: "vasodilation",
            label: "RUBOR AND CALOR — vasodilation → ↑ blood flow",
            sublabel: "Relaxation of arteriolar smooth muscle; mediated by histamine, prostaglandins, bradykinin, NO — the redness and the warmth of the inflamed site.",
            variant: "process",
          },
          {
            id: "permeability",
            label: "TUMOR — endothelial contraction → ↑ vascular permeability → exudate",
            sublabel: "Protein-rich fluid leaks from postcapillary venules into the interstitial space (exudate) → ↑ interstitial oncotic pressure; endothelial cell contraction mediated by leukotrienes (C4, D4, E4), histamine, serotonin, bradykinin.",
            variant: "process",
          },
          {
            id: "pain",
            label: "DOLOR — sensitization of sensory nerve endings",
            sublabel: "Mediated by bradykinin, PGE2, histamine — and FUNCTIO LAESA completes the quartet: inflammation impairs function (eg, inability to make fist due to hand cellulitis).",
            variant: "process",
          },
          {
            id: "output",
            label: "The four signs as one mechanism — and the warning",
            sublabel: "Output — the local signature; but the response itself can harm the host if EXCESSIVE (septic shock), PROLONGED (TB), or INAPPROPRIATE (SLE).",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "vasodilation", label: "red + warm" },
          { from: "trigger", to: "permeability", label: "swollen" },
          { from: "trigger", to: "pain", label: "painful + impaired" },
          { from: "vasodilation", to: "output", label: "the quartet" },
          { from: "permeability", to: "output", label: "the quartet" },
          { from: "pain", to: "output", label: "the quartet" },
        ],
      },
    },
    {
      id: "reactant-esr-routing",
      title: "The systemic routing: IL-6 flips the liver, fibrinogen stacks the red cells",
      context: "The systemic manifestations + acute-phase reactants + ESR blocks (book 209-210)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "The inflammatory signal goes systemic — the acute-phase reaction",
            sublabel: "Input — pyrogens (eg, LPS), the inciting agent, and the cytokine surge reaching the liver.",
            variant: "input",
          },
          {
            id: "fever",
            label: "FEVER — the hypothalamic cascade",
            sublabel: "Pyrogens (eg, LPS) induce macrophages to release IL-1 and TNF → ↑ COX activity in perivascular cells of the anterior hypothalamus → ↑ PGE2 → ↑ temperature set point; alongside LEUKOCYTOSIS (↑ WBC; bacteria → ↑ neutrophils).",
            variant: "process",
          },
          {
            id: "liver",
            label: "THE LIVER SWITCH — IL-6 induces the reactants",
            sublabel: "POSITIVE (upregulated): CRP (opsonin, fixes complement — the nonspecific clinical flag), ferritin (sequesters iron), fibrinogen (correlates with ESR), haptoglobin (binds extracellular hemoglobin), hepcidin (↓ absorption via ferroportin degradation + ↓ macrophage release → anemia of chronic disease), procalcitonin (bacterial), serum amyloid A (prolonged → secondary amyloidosis). NEGATIVE (downregulated): albumin, transthyretin (conserve amino acids), transferrin (internalized to sequester iron).",
            variant: "process",
          },
          {
            id: "esr",
            label: "THE ESR — fibrinogen's shadow",
            sublabel: "RBCs normally remain separated via ⊝ charges; fibrinogen coats RBCs → ↓ ⊝ charge → ↑ aggregation; denser aggregates fall faster in the pipette tube → ↑ ESR (co-tested with CRP, the more specific marker).",
            variant: "process",
          },
          {
            id: "output",
            label: "The measured disease lists — and the iron lesson",
            sublabel: "Output — ↑ ESR: most anemias, infections, inflammation (giant cell [temporal] arteritis, polymyalgia rheumatica), cancer (metastases, multiple myeloma), renal disease (end-stage, nephrotic), pregnancy; ↓ ESR (lower than expected): sickle cell (altered shape), polycythemia (diluted aggregation factors), HF, microcytosis, hypofibrinogenemia. The iron trio (ferritin ↑, hepcidin ↑, transferrin internalized) is the body starving the microbes — at the price of anemia of chronic disease.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "fever", label: "IL-1/TNF" },
          { from: "trigger", to: "liver", label: "IL-6" },
          { from: "liver", to: "esr", label: "fibrinogen coats" },
          { from: "esr", to: "output", label: "the fall rate" },
          { from: "fever", to: "output", label: "the counts" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "acute-phase-reactant-map",
      title: "The cardinal-signs and reactant map (an original KYP adaptation)",
      caption:
        "An original KYP adaptation of the source pages (book 209-210 — the definition, the cardinal signs table, the systemic manifestations, the acute-phase reactants table, the ESR block, and the acute inflammation panel; the copyrighted micrograph described in text): the local response (the definition with the harmful triple; RUBOR AND CALOR with the vasodilation mechanism and its four mediators; TUMOR with the endothelial-contraction permeability cascade and its five mediators; DOLOR with the sensitized nerve endings; FUNCTIO LAESA with the cellulitis example); the acute-phase reactant router (POSITIVe: all seven rows with their functions — CRP the opsonin flag, ferritin the iron lock, fibrinogen the ESR driver, haptoglobin the hemoglobin mop, hepcidin the ferroportin degrader causing anemia of chronic disease, procalcitonin the bacterial tell, serum amyloid A the secondary-amyloidosis seed; NeGATIVe: albumin, transferrin, transthyretin); the systemic answer (the LPS → IL-1/TNF → COX → PGE2 → set-point fever cascade, leukocytosis, the IL-6 liver induction, and the ESR mechanism with both disease lists); and the acute inflammation panel (the definition with the photograph described, STIMULI, MEDIATORS with the inflammasome, COMPONENTS vascular and cellular with the 4-step extravasation, OUTCOMES with all five, and the macrophages-predominate-late note).",
      notice:
        "The source pages print ONE COPYRIGHTED PHOTOGRAPH (a cmyk JPEG, ~187x188 at 150 dpi, lettered A beside 'Characterized by neutrophils in tissue A'): an H&E micrograph of dense neutrophil infiltration — dark purple multilobed nuclei within pink tissue/stroma — sitting on the left side below the Acute inflammation header. Described in text in this note's tables and in the registry visual, NEVER reproduced (the M32 convention). No margin notes or mnemonics print on either page (VLM census confirmed on both); the KYP memory layer stays original.",
    },
    {
      kind: "table",
      title: "Book 209 — the definition, cardinal signs, and systemic manifestations (carried verbatim)",
      intro: "The page's opening blocks, as printed — the purpose, the warning, the four signs with their mediators, and the three systemic rows.",
      columns: ["SIGN / BLOCK", "MECHANISM (verbatim) — book 209"],
      rows: [
        [
          "Inflammation — the definition",
          "Response to eliminate initial cause of cell injury, to remove necrotic cells resulting from the original insult, and to initiate tissue repair. Divided into acute and chronic. The inflammatory response itself can be harmful to the host if the reaction is excessive (eg, septic shock), prolonged (eg, persistent infections such as TB), or inappropriate (eg, autoimmune diseases such as SLE).",
        ],
        [
          "Rubor and calor (cardinal)",
          "Redness and warmth. Vasodilation (relaxation of arteriolar smooth muscle) → ↑ blood flow. Mediated by histamine, prostaglandins, bradykinin, NO.",
        ],
        [
          "Tumor (cardinal)",
          "Swelling. Endothelial contraction/disruption (eg, from tissue damage) → ↑ vascular permeability → leakage of protein-rich fluid from postcapillary venules into interstitial space (exudate) → ↑ interstitial oncotic pressure. Endothelial cell contraction is mediated by leukotrienes (C4, D4, E4), histamine, serotonin, bradykinin.",
        ],
        [
          "Dolor (cardinal)",
          "Pain. Sensitization of sensory nerve endings. Mediated by bradykinin, PGE2, histamine.",
        ],
        [
          "Functio laesa (cardinal)",
          "Loss of function. Inflammation impairs function (eg, inability to make fist due to hand cellulitis).",
        ],
        [
          "Fever (systemic — acute-phase reaction)",
          "Pyrogens (eg, LPS) induce macrophages to release IL-1 and TNF → ↑ COX activity in perivascular cells of anterior hypothalamus → ↑ PGE2 → ↑ temperature set point.",
        ],
        [
          "Leukocytosis (systemic)",
          "↑ WBC count; type of predominant cell depends on inciting agent or injury (eg, bacteria → ↑ neutrophils).",
        ],
        [
          "↑ plasma acute-phase reactants (systemic)",
          "Serum concentrations significantly change in response to acute and chronic inflammation. Produced by liver. Notably induced by IL-6.",
        ],
      ],
      caption:
        "The local quartet with its mediator lists, the systemic trio, and the definition that warns: the response itself can injure the host when excessive, prolonged, or inappropriate.",
    },
    {
      kind: "table",
      title: "Book 209 — the acute-phase reactants (carried verbatim, all ten rows)",
      intro: "The liver's answer to IL-6, as printed — seven upregulated, three downregulated.",
      columns: ["REACTANT (verbatim)", "FUNCTION / NOTE (verbatim)"],
      rows: [
        ["POSITIVe (UPReGULATeD) — C-reactive protein", "Opsonin; fixes complement and facilitates phagocytosis. Measured clinically as a nonspecific sign of ongoing inflammation."],
        ["POSITIVe — Ferritin", "Binds and sequesters iron to inhibit microbial iron scavenging."],
        ["POSITIVe — Fibrinogen", "Coagulation factor; promotes endothelial repair; correlates with ESR."],
        ["POSITIVe — Haptoglobin", "Binds extracellular hemoglobin, protects against oxidative stress."],
        ["POSITIVe — Hepcidin", "↓ iron absorption (by degrading ferroportin) and ↓ iron release (from macrophages) → anemia of chronic disease."],
        ["POSITIVe — Procalcitonin", "Increases in bacterial infections."],
        ["POSITIVe — Serum amyloid A", "Prolonged elevation can lead to secondary amyloidosis."],
        ["NeGATIVe (DOWNReGULATeD) — Albumin", "Downregulation conserves amino acids for positive reactants."],
        ["NeGATIVe — Transferrin", "Internalized by macrophages to sequester iron."],
        ["NeGATIVe — Transthyretin", "Also called prealbumin. Downregulation conserves amino acids for positive reactants."],
      ],
      caption:
        "The iron trio on the positive side (ferritin locks it, hepcidin blocks its absorption and release, transferrin's internalization hides it) with CRP the clinical flag, fibrinogen the ESR driver, haptoglobin the hemoglobin mop, procalcitonin the bacterial tell, and serum amyloid A the seed of secondary amyloidosis — against the three amino-acid-conserving negatives.",
    },
    {
      kind: "table",
      title: "Book 210 — the ESR block (carried verbatim, with the footnote)",
      intro: "The erythrocyte sedimentation rate, as printed — the mechanism and both disease lists.",
      columns: ["BLOCK", "VERBATIM — book 210"],
      rows: [
        [
          "THE MECHANISM",
          "RBCs normally remain separated via ⊝ charges. Products of inflammation (eg, fibrinogen) coat RBCs → ↓ ⊝ charge → ↑ RBC aggregation. Denser RBC aggregates fall at a faster rate within a pipette tube → ↑ ESR. Often co-tested with CRP (more specific marker of inflammation).",
        ],
        [
          "↑ ESR",
          "Most anemias · Infections · Inflammation (eg, giant cell [temporal] arteritis, polymyalgia rheumatica) · Cancer (eg, metastases, multiple myeloma) · Renal disease (end-stage or nephrotic syndrome) · Pregnancy",
        ],
        [
          "↓ ESR (a Lower than expected)",
          "Sickle cell anemia (altered shape) · Polycythemia (↑ RBCs 'dilute' aggregation factors) · HF · Microcytosis · Hypofibrinogenemia",
        ],
        [
          "THE PHOTOGRAPH (described in text — copyrighted, never reproduced)",
          "PHOTOGRAPH A (cmyk JPEG, ~187x188, 150 dpi): an H&E micrograph of acute inflammation — dense infiltration of neutrophils (dark purple multilobed nuclei) within pinkish tissue/stroma — sitting on the left side of the page below the Acute inflammation header, beside 'Characterized by neutrophils in tissue A'.",
        ],
      ],
      caption:
        "The stacking assay: fibrinogen coats, the charge falls, the rouleaux stack and sink — up in the inflammatory diseases and Down in the shapes and counts that refuse to stack (the footnote's 'lower than expected').",
    },
    {
      kind: "table",
      title: "Book 210 — the acute inflammation panel (carried verbatim, with the margin blocks)",
      intro: "The definition, the four-row panel, and the two margin blocks, as printed.",
      columns: ["ROW / BLOCK", "VERBATIM — book 210"],
      rows: [
        [
          "THE DEFINITION",
          "Transient and early response to injury or infection. Characterized by neutrophils in tissue A, often with associated edema. Rapid onset (seconds to minutes) and short duration (minutes to days). Represents a reaction of the innate immune system (ie, less specific response than chronic inflammation).",
        ],
        ["STIMULI", "Infections, trauma, necrosis, foreign bodies."],
        [
          "MEDIATORS",
          "Toll-like receptors, arachidonic acid metabolites, neutrophils, eosinophils, antibodies (pre-existing), mast cells, basophils, complement, Hageman factor (factor XII).",
        ],
        [
          "COMPONeNTS",
          "▘ Vascular: vasodilation (→ ↑ blood flow and stasis) and ↑ endothelial permeability (contraction of endothelial cells opens interendothelial junctions). ▘ Cellular: extravasation of leukocytes (mainly neutrophils) from postcapillary venules → accumulation of leukocytes in focus of injury → leukocyte activation.",
        ],
        [
          "OUTCOMeS",
          "▘ Resolution and healing (IL-10, TGF-β) ▘ Persistent acute inflammation (IL-8) ▘ Abscess (acute inflammation walled off by fibrosis) ▘ Chronic inflammation (antigen presentation by macrophages and other APCs → activation of CD4+ Th cells) ▘ Scarring",
        ],
        [
          "THE INFLAMMASOME (margin block)",
          "Cytoplasmic complex recognizing damage- and pathogen-associated molecular patterns (eg, microbial products, uric acid crystals) → IL-1 activation → inflammatory response (eg, fever, leukocytosis). Brings cells and proteins to site of injury or infection.",
        ],
        [
          "THE EXTRAVASATION + MACROPHAGE NOTE (margin block)",
          "Leukocyte extravasation has 4 steps: margination and rolling, adhesion, transmigration, and migration (chemoattraction). Macrophages predominate in the late stages of acute inflammation (peak 2-3 days after onset) and influence outcome by secreting cytokines.",
        ],
      ],
      caption:
        "The panel in one read: what starts it, what runs it (including the inflammasome's DAMP/PAMP-to-IL-1 gate), what it is (vascular + cellular, the 4-step extravasation), and the five exits — with macrophages arriving late to steer.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 74-year-old woman has a 3-week history of new temporal headache, jaw claudication, and an ESR of 96 mm/hr; she is started on corticosteroids and a temporal artery biopsy is scheduled.",
        discriminator: "Giant cell (temporal) arteritis — the named ↑ ESR inflammation entry with polymyalgia rheumatica as its companion",
        concept: "The stacked sedimentation rate",
        answer:
          "The ESR mechanism: products of inflammation (eg, fibrinogen — an IL-6-driven positive acute-phase reactant produced by the liver) coat the RBCs, reducing their negative (⊝) charge, increasing aggregation; the denser aggregates fall faster in the pipette tube — ↑ ESR. Giant cell (temporal) arteritis and polymyalgia rheumatica are the printed inflammation entries on the ↑ ESR list, and the headache with jaw claudication in an elderly woman is the classic gateway stem.",
      },
      {
        stem: "A 58-year-old woman with long-standing rheumatoid arthritis presents with fatigue; labs show Hgb 9.8 g/dL, MCV 78 fL, ferritin 420 ng/mL (high), serum iron low, and transferrin saturation low.",
        discriminator: "Anemia of chronic disease — hepcidin-mediated iron lockup (↓ absorption by degrading ferroportin, ↓ macrophage release) with ferritin high and iron low",
        concept: "The iron trio",
        answer:
          "The positive acute-phase reactants starve microbes of iron: ferritin binds and sequesters it (a positive reactant — hence the high level here), hepcidin degrades ferroportin to block both absorption and macrophage release, and transferrin (a negative reactant) is internalized by macrophages to sequester iron further — the aggregate result being the hypoproliferative, low-iron microcytosis of anemia of chronic disease despite abundant stored iron.",
      },
      {
        stem: "A 31-year-old man with a puncture wound presents with a warm, red, tender, swollen hand and cannot make a fist; the skin over the dorsum is shiny and pits with pressure.",
        discriminator: "Acute inflammation — the four cardinal signs (rubor, calor, tumor, dolor) with functio laesa (inability to make fist due to hand cellulitis)",
        concept: "The local quartet",
        answer:
          "The printed example for functio laesa is exactly this: inability to make a fist due to hand cellulitis. The warmth and redness are vasodilation (relaxation of arteriolar smooth muscle → ↑ blood flow; histamine, prostaglandins, bradykinin, NO), the swelling is endothelial contraction → ↑ vascular permeability → protein-rich exudate from postcapillary venules → ↑ interstitial oncotic pressure (leukotrienes C4/D4/E4, histamine, serotonin, bradykinin), and the tenderness is sensitized sensory nerve endings (bradykinin, PGE2, histamine).",
      },
    ],
    traps: [
      {
        a: "↑ ESR in sickle cell disease",
        b: "↓ ESR in sickle cell disease",
        whyConfused: "Sickle cell patients have plenty of inflammation and vaso-occlusion",
        keyDifference: "The sickled cells' ALTERED SHAPE prevents the aggregation-stacking that raises the sedimentation rate — sickle cell anemia is a printed ↓ ESR (lower than expected) entry, along with polycythemia, HF, microcytosis, and hypofibrinogenemia",
        clue: "Any question pairing sickle cell (or polycythemia, or hypofibrinogenemia) with an ESR that is 'lower than expected' — the shape or the dilution or the missing fibrinogen explains the slow fall",
      },
      {
        a: "Ferritin as an iron-storage marker",
        b: "Ferritin as an acute-phase reactant",
        whyConfused: "Ferritin is taught as the storage marker in iron-deficiency workups",
        keyDifference: "Ferritin is ALSO a positive acute-phase reactant that binds and sequesters iron to inhibit microbial scavenging — in inflammation it rises regardless of stores, which is why anemia of chronic disease shows high ferritin with low serum iron",
        clue: "High ferritin + low serum iron + low transferrin saturation + underlying inflammatory disease = anemia of chronic disease, not iron deficiency",
      },
      {
        a: "Transferrin going down in inflammation",
        b: "Transferrin going up in iron deficiency",
        whyConfused: "Both states show low serum iron",
        keyDifference: "In inflammation transferrin is a NEGATIVE reactant internalized by macrophages to sequester iron; in iron deficiency transferrin (and TIBC) rises as the body tries harder to carry what little iron exists",
        clue: "The TIBC/transferrin direction is the fork: down with inflammation (with ferritin up), up with deficiency (with ferritin down)",
      },
      {
        a: "IL-6 as the fever cytokine",
        b: "IL-6 as the reactant inducer",
        whyConfused: "IL-6 appears in both the fever story and the reactant story",
        keyDifference: "The fever cascade prints as pyrogens → macrophage IL-1 and TNF → hypothalamic COX → PGE2 → set point; IL-6's printed role is the notable inducer of the liver's plasma acute-phase reactants",
        clue: "Which cytokine question is being asked — the one ending at the hypothalamus (IL-1, TNF) or the one ending at the liver (IL-6)",
      },
    ],
    pivots: [
      {
        lookAlike: "A rising inflammatory marker panel — which marker answers which question?",
        differentiator: "CRP is the nonspecific flag (opsonin, fixes complement); procalcitonin is the bacterial tell; ESR is fibrinogen's shadow (the aggregation assay); ferritin is the iron lock",
        correctPath: "Route by the question's intent: 'ongoing inflammation?' → CRP; 'bacterial?' → procalcitonin; 'how fast do the red cells fall?' → ESR (and its two disease lists); 'why is the iron hidden?' → ferritin/hepcidin/transferrin",
      },
      {
        lookAlike: "An exudate versus a transudate story — what made the fluid protein-rich?",
        differentiator: "The tumor mechanism: endothelial contraction/disruption → ↑ vascular permeability → leakage of PROTEIN-RICH fluid (exudate) from postcapillary venules → ↑ interstitial oncotic pressure",
        correctPath: "Vasodilation explains the flow (rubor/calor); endothelial contraction explains the leak (tumor) — the mediators differ too: histamine/prostaglandins/bradykinin/NO for the first, leukotrienes C4/D4/E4 + histamine/serotonin/bradykinin for the second",
      },
    ],
    miniCase: {
      vignette:
        "A 66-year-old man presents with 4 days of progressive pain, swelling, and redness of the right hand after a gardening puncture wound. The dorsum of the hand is warm, erythematous, and tense, with pitting edema; he cannot make a fist because of pain and swelling, and the pain is out of proportion at rest. Temperature is 38.4°C, WBC is 16,800/mm³ with 82% neutrophils, CRP is elevated at 14.2 mg/dL, and ESR is 68 mm/hr. Over the next week his hemoglobin drifts from 13.9 to 10.6 g/dL with low serum iron, low transferrin saturation, and ferritin of 810 ng/mL; a stool guaiac and peripheral smear are unremarkable. He is started on antibiotics, and his evening temperatures persist at 38.2°C despite resolution of the hand erythema.",
      question:
        "Explain the hand findings through the cardinal-sign mechanisms, the fever despite antibiotic therapy, the leukocyte differential, and the new anemia with its iron studies.",
      options: [
        {
          label: "Vasodilation and endothelial contraction (histamine, prostaglandins, bradykinin, NO; leukotrienes C4/D4/E4, serotonin) for the hand; the fever is the pyrogen-driven hypothalamic PGE2 set-point shift, the neutrophilia follows bacterial stimulation, and the anemia is hepcidin-mediated anemia of chronic disease (high ferritin, low iron)",
          text: "Local quartet by mediator, systemic trio by cascade, and the iron locked away.",
          correct: true,
          why: "Correct on all four layers. (1) The warm red hand is vasodilation (relaxation of arteriolar smooth muscle → ↑ blood flow; histamine, prostaglandins, bradykinin, NO); the tense pitting swelling is endothelial contraction → ↑ vascular permeability → protein-rich exudate from postcapillary venules → ↑ interstitial oncotic pressure (leukotrienes C4/D4/E4, histamine, serotonin, bradykinin); the pain is sensitized sensory nerve endings (bradykinin, PGE2, histamine); the inability to make a fist is the printed functio laesa example — hand cellulitis. (2) The persistent fever is the set-point shift: pyrogens → macrophage IL-1 and TNF → ↑ COX in perivascular cells of the anterior hypothalamus → ↑ PGE2 → ↑ temperature set point — the set point does not reset the moment the bacteria die. (3) Bacteria → ↑ neutrophils, the printed leukocytosis rule. (4) The anemia with high ferritin and low iron is anemia of chronic disease: hepcidin (a positive reactant) ↓ iron absorption by degrading ferroportin and ↓ iron release from macrophages, while ferritin (positive) sequesters iron and transferrin (negative) is internalized — iron locked away, hemoglobin drifts down.",
        },
        {
          label: "The swelling is a transudate from heart failure, and the fever means the antibiotics are failing",
          text: "The fluid is water, not protein; the persistent temperature demands broader coverage.",
          why: "Wrong fluid and wrong fever reading: an inflammatory exudate is protein-rich because endothelial CONTRACTION opens the junctions — heart failure transudates are protein-poor and do not come with warmth, tenderness, neutrophilia, and CRP elevation; and the fever cascade is a hypothalamic set-point mechanism (IL-1/TNF → COX → PGE2), not a live-bacteria meter — it lags the microbiologic cure.",
        },
        {
          label: "The anemia is iron deficiency from occult gastrointestinal bleeding, and the high ferritin is simply released from necrotic tissue",
          text: "A dropping hemoglobin over a week in an older man is blood loss until proven otherwise.",
          why: "Wrong anemia: the negative guaiac and unremarkable smear argue against bleeding, and the iron studies are the anemia-of-chronic-disease signature — high ferritin (a POSITIVE acute-phase reactant, actively induced), LOW serum iron with low saturation, and transferrin internalized. Iron deficiency would show low ferritin and high transferrin/TIBC.",
        },
        {
          label: "The ESR of 68 is driven by the CRP of 14.2 coating the red cells",
          text: "The two inflammatory markers rise together because they are the same mechanism.",
          why: "Wrong mechanism pairing: CRP is an opsonin that fixes complement — it does not coat RBCs. The ESR rises because FIBRINOGEN (the positive reactant that 'correlates with ESR') coats the RBCs, reducing their ⊝ charge, increasing aggregation so the denser stacks fall faster. The two tests are often co-ordered (CRP being the more specific), but their mechanisms are distinct.",
        },
        {
          label: "The neutrophil predominance indicates a viral process, and the low iron is nutritional",
          text: "A mild neutrophilia with a low iron level fits a post-viral, poor-intake state in an older gardener.",
          why: "Wrong cell and wrong iron story: the printed rule is bacteria → ↑ neutrophils — exactly the 82% neutrophilia here — and the low serum iron with HIGH ferritin is the hepcidin lockout of inflammation, not a dietary deficiency (which would lower ferritin).",
        },
      ],
      reasoning:
        "The stem walks through all three frames of the page. FRAME 1 (the local quartet): the warm red hand (vasodilation — histamine, prostaglandins, bradykinin, NO), the tense protein-rich swelling (endothelial contraction → ↑ permeability → exudate → ↑ interstitial oncotic pressure — leukotrienes C4/D4/E4, histamine, serotonin, bradykinin), the rest pain (sensitized nerve endings — bradykinin, PGE2, histamine), and the printed functio laesa example itself (inability to make a fist due to hand cellulitis). FRAME 2 (the systemic markers): the fever is the set-point cascade (pyrogens → IL-1/TNF → hypothalamic COX → PGE2), which outlives the bacteremia; the WBC follows the agent (bacteria → neutrophils); the liver's IL-6-driven reactants explain everything measured — CRP the nonspecific flag, and the iron trio (ferritin up, hepcidin blocking absorption and release via ferroportin degradation, transferrin internalized) producing the high-ferritin low-iron anemia of chronic disease; the ESR is fibrinogen's shadow (RBC coating → ↓ ⊝ charge → ↑ aggregation → faster fall), not CRP's. FRAME 3 (the panel): a puncture wound (a printed STIMULI entry — foreign body + infection) driving the innate response. The distractors each break one link: transudate/heart failure (wrong fluid physiology), antibiotic failure (misreading the set-point lag), GI bleeding (wrong iron signature), CRP coating RBCs (confusing the two tests' mechanisms), and viral/nutritional (wrong cell line and wrong ferritin direction).",
    },
  },
  mnemonics: [
    {
      code: "RED HOT SWOLLEN PAINFUL USELESS",
      meaning: "The four cardinal signs in mechanism order: RUBOR AND CALOR (vasodilation → ↑ blood flow — histamine, prostaglandins, bradykinin, NO), TUMOR (endothelial contraction → ↑ vascular permeability → protein-rich exudate → ↑ interstitial oncotic pressure — leukotrienes C4/D4/E4, histamine, serotonin, bradykinin), DOLOR (sensitized sensory nerve endings — bradykinin, PGE2, histamine), FUNCTIO LAESA (impaired function — eg, inability to make fist due to hand cellulitis).",
      memorizes: "The cardinal signs table with every mediator list",
      whenToUse: "Any question asking which sign maps to which mechanism or mediator",
      clinical: "The cellulitic hand of the source's own example wears all four signs at once.",
    },
    {
      code: "LPS TO IL-1 TO COX TO PGE2 TO SET POINT",
      meaning: "The fever cascade verbatim as a chain: pyrogens (eg, LPS) induce macrophages to release IL-1 and TNF → ↑ COX activity in perivascular cells of the ANTERIOR hypothalamus → ↑ PGE2 → ↑ temperature set point — the reason NSAIDs (COX inhibitors) and acetaminophen break fever.",
      memorizes: "The systemic fever mechanism",
      whenToUse: "Any fever-mechanism or antipyretic-mechanism question",
      clinical: "The set point does not reset when the bacteria die — fever lags the cure.",
    },
    {
      code: "IRON GOES INTO HIDING",
      meaning: "The inflammatory iron lockdown: FERRITIN binds and sequesters iron (a positive reactant — high in anemia of chronic disease), HEPCIDIN degrades ferroportin (↓ absorption + ↓ macrophage release), and TRANSFERRIN is internalized by macrophages (a negative reactant) — the body starves the microbes at the price of anemia of chronic disease.",
      memorizes: "The iron trio across both reactant columns",
      whenToUse: "Any anemia-of-chronic-disease or iron-study-direction question",
      clinical: "High ferritin, low serum iron, low saturation, low transferrin — the storage is full, the door is locked.",
    },
    {
      code: "STACKED CELLS SINK FAST",
      meaning: "The ESR mechanism and its two lists: fibrinogen coats RBCs → ↓ ⊝ charge → ↑ aggregation → the denser aggregates fall faster → ↑ ESR (most anemias, infections, temporal arteritis and polymyalgia rheumatica, metastases and myeloma, renal disease, pregnancy); the fall SLOWS when the cells will not stack — sickle cell (altered shape), polycythemia (diluted factors), HF, microcytosis, hypofibrinogenemia — 'lower than expected.'",
      memorizes: "The ESR block with both disease lists",
      whenToUse: "Any ESR-interpretation question, especially the 'lower than expected' traps",
      clinical: "The temporal artery biopsy candidate with an ESR of 96; the sickle cell patient whose ESR stays deceptively low.",
    },
  ],
  rapidReview: {
    s30: [
      "Inflammation: response to eliminate initial cause of cell injury, remove necrotic cells, initiate tissue repair; acute and chronic; harmful if excessive (septic shock), prolonged (TB), or inappropriate (SLE)",
      "Cardinal signs: rubor and calor — vasodilation (histamine, prostaglandins, bradykinin, NO); tumor — endothelial contraction → ↑ permeability → protein-rich exudate → ↑ interstitial oncotic pressure (leukotrienes C4/D4/E4, histamine, serotonin, bradykinin); dolor — sensitized nerve endings (bradykinin, PGE2, histamine); functio laesa — impaired function (hand cellulitis)",
      "Systemic: fever — pyrogens (LPS) → macrophage IL-1 and TNF → ↑ COX in anterior hypothalamus perivascular cells → ↑ PGE2 → ↑ set point; leukocytosis (bacteria → ↑ neutrophils); ↑ plasma acute-phase reactants (liver, notably induced by IL-6)",
      "Positive reactants: CRP (opsonin, fixes complement, nonspecific flag); ferritin (sequesters iron); fibrinogen (correlates with ESR); haptoglobin (binds extracellular hemoglobin); hepcidin (↓ ferroportin → anemia of chronic disease); procalcitonin (bacterial); serum amyloid A (prolonged → secondary amyloidosis). Negative: albumin and transthyretin (conserve amino acids); transferrin (internalized to sequester iron)",
      "ESR: fibrinogen coats RBCs → ↓ ⊝ charge → ↑ aggregation → faster fall; ↑ in anemias, infections, giant cell (temporal) arteritis, polymyalgia rheumatica, metastases, multiple myeloma, renal disease, pregnancy; ↓ (lower than expected) in sickle cell, polycythemia, HF, microcytosis, hypofibrinogenemia",
      "Acute inflammation: transient and early, neutrophils in tissue, edema; onset seconds-to-minutes, duration minutes-to-days; innate (less specific than chronic). Stimuli: infections, trauma, necrosis, foreign bodies. Mediators: TLRs, arachidonic acid metabolites, neutrophils, eosinophils, pre-existing antibodies, mast cells, basophils, complement, Hageman factor (XII); inflammasome (DAMPs/PAMPs eg microbial products, uric acid crystals → IL-1). Components: vascular (vasodilation, stasis, ↑ permeability) + cellular (extravasation: margination and rolling, adhesion, transmigration, migration). Outcomes: resolution/healing (IL-10, TGF-β), persistent acute (IL-8), abscess, chronic (APCs → CD4+ Th), scarring; macrophages peak 2-3 days late",
    ],
    m3: [
      "RED HOT SWOLLEN PAINFUL USELESS — the four signs with their mediator lists in order",
      "LPS TO IL-1 TO COX TO PGE2 TO SET POINT — the fever cascade; acetaminophen/NSAIDs act at COX",
      "IRON GOES INTO HIDING — ferritin up, hepcidin blocks ferroportin both ways, transferrin internalized: the anemia of chronic disease signature",
      "STACKED CELLS SINK FAST — ESR up with fibrinogen stacking; sickle cell, polycythemia, HF, microcytosis, hypofibrinogenemia keep it lower than expected",
      "The 4-step extravasation: margination and rolling, adhesion, transmigration, migration (chemoattraction) — and macrophages predominate late (peak 2-3 days)",
      "The outcome cytokines: resolution = IL-10 and TGF-β; persistence = IL-8; chronicity = antigen presentation to CD4+ Th cells",
    ],
    m10: [
      "The harmful triple: EXCESSIVE (septic shock), PROLONGED (persistent infections such as TB), INAPPROPRIATE (autoimmune such as SLE) — the response itself injures the host",
      "Tumor's two-mediator layers: vasodilation mediators (histamine, prostaglandins, bradykinin, NO) versus endothelial-contraction mediators (leukotrienes C4/D4/E4, histamine, serotonin, bradykinin)",
      "CRP versus ESR: CRP is the more specific marker (an opsonin fixing complement); ESR is the fibrinogen-driven aggregation assay — often co-tested",
      "Procalcitonin increases in bacterial infections; serum amyloid A's prolonged elevation leads to secondary amyloidosis (the AA fibril of the amyloidosis page)",
      "The inflammasome: a cytoplasmic complex recognizing damage- and pathogen-associated molecular patterns (microbial products, uric acid crystals) → IL-1 activation → fever, leukocytosis",
      "Acute = innate, neutrophils, seconds-to-minutes, minutes-to-days; the photograph (copyrighted, described): dense neutrophil infiltration — dark purple multilobed nuclei in pink tissue",
    ],
  },
  recall: [
    {
      q: "The four cardinal signs with their full mechanisms and mediator lists.",
      a: "RUBOR AND CALOR — redness and warmth; vasodilation (relaxation of arteriolar smooth muscle) → ↑ blood flow; histamine, prostaglandins, bradykinin, NO. TUMOR — swelling; endothelial contraction/disruption → ↑ vascular permeability → leakage of protein-rich fluid from postcapillary venules into interstitial space (exudate) → ↑ interstitial oncotic pressure; leukotrienes (C4, D4, E4), histamine, serotonin, bradykinin. DOLOR — pain; sensitization of sensory nerve endings; bradykinin, PGE2, histamine. FUNCTIO LAESA — loss of function (eg, inability to make fist due to hand cellulitis).",
    },
    {
      q: "The systemic manifestations (acute-phase reaction) — all three.",
      a: "FEVER — pyrogens (eg, LPS) induce macrophages to release IL-1 and TNF → ↑ COX activity in perivascular cells of anterior hypothalamus → ↑ PGE2 → ↑ temperature set point. LEUKOCYTOSIS — ↑ WBC count; the predominant cell depends on the inciting agent (eg, bacteria → ↑ neutrophils). ↑ PLASMA ACUTE-PHASE REACTANTS — serum concentrations significantly change in acute and chronic inflammation; produced by liver; notably induced by IL-6.",
    },
    {
      q: "The acute-phase reactants table verbatim — all seven positive rows.",
      a: "C-reactive protein — opsonin; fixes complement and facilitates phagocytosis; measured clinically as a nonspecific sign of ongoing inflammation. Ferritin — binds and sequesters iron to inhibit microbial iron scavenging. Fibrinogen — coagulation factor; promotes endothelial repair; correlates with ESR. Haptoglobin — binds extracellular hemoglobin, protects against oxidative stress. Hepcidin — ↓ iron absorption (by degrading ferroportin) and ↓ iron release (from macrophages) → anemia of chronic disease. Procalcitonin — increases in bacterial infections. Serum amyloid A — prolonged elevation can lead to secondary amyloidosis.",
    },
    {
      q: "The acute-phase reactants table verbatim — the three negative rows.",
      a: "Albumin — downregulation conserves amino acids for positive reactants. Transferrin — internalized by macrophages to sequester iron. Transthyretin — also called prealbumin; downregulation conserves amino acids for positive reactants.",
    },
    {
      q: "The ESR block verbatim — mechanism, both lists, and the footnote.",
      a: "RBCs normally remain separated via ⊝ charges. Products of inflammation (eg, fibrinogen) coat RBCs → ↓ ⊝ charge → ↑ RBC aggregation. Denser RBC aggregates fall at a faster rate within a pipette tube → ↑ ESR. Often co-tested with CRP (more specific marker of inflammation). ↑ ESR: most anemias; infections; inflammation (eg, giant cell [temporal] arteritis, polymyalgia rheumatica); cancer (eg, metastases, multiple myeloma); renal disease (end-stage or nephrotic syndrome); pregnancy. ↓ ESR (a, lower than expected): sickle cell anemia (altered shape); polycythemia (↑ RBCs 'dilute' aggregation factors); HF; microcytosis; hypofibrinogenemia.",
    },
    {
      q: "The acute inflammation panel verbatim — definition, stimuli, mediators, components, outcomes, and the two margin blocks.",
      a: "DEFINITION: transient and early response to injury or infection; characterized by neutrophils in tissue A, often with associated edema; rapid onset (seconds to minutes) and short duration (minutes to days); a reaction of the innate immune system (ie, less specific response than chronic inflammation). STIMULI: infections, trauma, necrosis, foreign bodies. MEDIATORS: toll-like receptors, arachidonic acid metabolites, neutrophils, eosinophils, antibodies (pre-existing), mast cells, basophils, complement, Hageman factor (factor XII). COMPONENTS: vascular — vasodilation (→ ↑ blood flow and stasis) and ↑ endothelial permeability (contraction of endothelial cells opens interendothelial junctions); cellular — extravasation of leukocytes (mainly neutrophils) from postcapillary venules → accumulation in focus of injury → leukocyte activation. OUTCOMES: resolution and healing (IL-10, TGF-β); persistent acute inflammation (IL-8); abscess (acute inflammation walled off by fibrosis); chronic inflammation (antigen presentation by macrophages and other APCs → activation of CD4+ Th cells); scarring. INFLAMMASOME: cytoplasmic complex recognizing damage- and pathogen-associated molecular patterns (eg, microbial products, uric acid crystals) → IL-1 activation → inflammatory response (eg, fever, leukocytosis); brings cells and proteins to site of injury or infection. EXTRAVASATION: 4 steps — margination and rolling, adhesion, transmigration, and migration (chemoattraction); macrophages predominate in the late stages (peak 2-3 days after onset) and influence outcome by secreting cytokines.",
    },
  ],
  related: [
    {
      title: "Amyloidosis: The Deposition Diseases",
      topicId: "amyloidosis",
      note: "The bridge is printed on both pages: serum amyloid A is a positive acute-phase reactant whose PROLONGED elevation can lead to secondary amyloidosis — the AA fibril of the amyloidosis page is born in this page's inflammation.",
    },
    {
      title: "Leukocyte Extravasation & Cytokines",
      topicId: "leukocyte-trafficking",
      note: "The 4-step extravasation named here (margination and rolling, adhesion, transmigration, migration) is the next page's full map — the selectin/integrin chemistry behind each step.",
    },
    {
      title: "Calcification & Radiation Injury",
      topicId: "calcification-radiation-injury",
      note: "The banner's other pages pair as injury-and-response: calcification is what dead tissue collects after injury; inflammation is the response that arrives to clean it up.",
    },
    {
      title: "Apoptosis: Intrinsic, Extrinsic & Misfolded Proteins",
      topicId: "apoptosis-pathways",
      note: "Inflammation exists to remove the necrotic cells that apoptosis quietly avoids — the definition names the cleanup mission, and the pyrogen cascade shows how the cleanup announces itself systemically.",
    },
  ],
  crossLinks: [
    {
      subject: "Immunology (the innate response)",
      connection:
        "Acute inflammation IS the innate immune system's reaction (the printed 'less specific response than chronic') — TLRs, complement, mast cells, and the inflammasome's IL-1 gate are all immunology machinery running in tissue.",
    },
    {
      subject: "Hematology (ESR and the anemias)",
      connection:
        "The ESR lists are a hematology exam in miniature: most anemias raise it, sickle cell and microcytosis lower it, polycythemia dilutes it — and the anemia of chronic disease hepcidin locks iron away with high ferritin and low iron.",
    },
    {
      subject: "Rheumatology (the ESR diseases)",
      connection:
        "Giant cell (temporal) arteritis and polymyalgia rheumatica are the printed inflammation entries for ↑ ESR — the classic steroid-responsive pair whose biopsy and treatment decisions hang on the sedimentation rate.",
    },
    {
      subject: "Pharmacology (antipyretics)",
      connection:
        "The fever cascade's COX step is where acetaminophen and NSAIDs act — ↑ COX activity in perivascular cells of the anterior hypothalamus → ↑ PGE2 → ↑ set point is the mechanism every COX inhibitor interrupts.",
    },
  ],
};
