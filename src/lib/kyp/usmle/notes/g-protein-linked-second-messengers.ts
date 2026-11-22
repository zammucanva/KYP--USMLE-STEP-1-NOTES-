import type { KypUsMLENote } from "../types";

// Pharmacology — AUTONOMIC DRUGS (PH16 — the SECOND-MESSENGER PAGE: the
// receptor × G-protein-class table and the three cascade diagrams). Source:
// pdf 259 / book 237, the WHOLE page under the standing
// 'PHARMACOLOGY—AUTONOMIC DRUGS' banner — the section header 'G-protein–
// linked second messengers' is the ONLY section header on the page. The
// section prints TWO elements: (1) ONE TABLE — 14 receptor rows under
// RECEPTOR / G-PROTEIN CLASS / MAJOR FUNCTIONS, grouped Adrenergic (α1 q,
// α2 i, β1 s, β2 s, β3 s), Cholinergic (M1 q, M2 i, M3 q), Dopamine
// (D1 s, D2 i), Histamine (H1 q, H2 s), Vasopressin (V1 q, V2 s) —
// carried verbatim in the note's first table block; (2) THREE VECTOR
// CASCADE DIAGRAMS (Gq, Gs, Gi): 'H1, α1, V1, M1, or M3 receptor' →
// Gq protein → Phospholipase C → PIP2 → IP3 + DAG → Ca2+ → Protein
// kinase C → Smooth muscle contraction (with Myosin light-chain kinase);
// 'B1, B2, B3, D1, H2, or V2 receptor' → GS protein → Adenylyl cyclase →
// ATP → Cyclic AMP → Protein kinase A; 'M2, α2, or D2 receptor' →
// Gi protein → the SAME adenylyl cyclase, inhibited → ↓cAMP. RASTER
// CENSUS: ZERO raster images on the page (the diagrams are vector
// typeset artwork, COPYRIGHTED, never reproduced) — conveyed as ONE
// original KYP schematic (GProteinSecondMessengerMap) with the table
// carried verbatim as the note's table block.
// TEXT-LAYER ARTIFACTS pinned: the V2 row prints the book's own red-ink
// erratum overlay 'collecting twobules (tubules)' (VLM render check
// confirms the printed page shows 'twobules' with '(two)' in red overlaid
// on 'tubules' plus the parenthetical '(tubules)'); the diagram text
// layer duplicates every label (two-layer artwork) and prints 'B1, B2,
// B3' where the table prints real β glyphs; the interleaved diagram
// labels split the V2 row in extraction (both fragments quoted).
// BOUNDARIES: pdf 258 (book 236) carries the COMPLETED topics PH14
// 'Micturition control' (upper) and PH15 'Tissue distribution of
// adrenergic receptors' (lower) — EXCLUDED; pdf 260 (book 238) opens the
// SEPARATE pending 'Autonomic drugs' section — this section ENDS on pdf
// 259 (verified; sourcePages = [259] only). PH12 'acetylcholine-
// receptors' anchored its M1/M2/M3 G-protein layer to THIS page — the
// reciprocal cross-link is pinned.
// KYP EXTENSIONS (flagged wherever they appear): the THREE LANES reading
// (Gs the gas pedal, Gi the brake, Gq the squeeze — the class-summary
// compression of the page's own table + diagrams); the SUBSCRIPT RULE
// membership frames (the i class is all 2s [α2, D2, M2] — NOT all 2s are
// Gi [β2, H2, V2 are Gs]; the q class is the odd ones [α1, M1, M3, H1,
// V1]; the s class is the betas plus the strays [D1, H2, V2]); the
// drug/toxin anchor layer (albuterol, dobutamine, clonidine,
// phenylephrine, atropine, cimetidine, desmopressin, antipsychotics,
// cholera toxin, pertussis toxin — NONE printed on this page); the
// kinase fork (Gs → PKA vs Gq → PKC); the PIP2-splitter frame (IP3 frees
// Ca, DAG drags PKC); and the vagal M2 βγ-subunit K+ -channel story
// (beyond the printed diagram). The classic 'one heart, two lungs'
// counting code is THIS PAGE'S OWN print — '(one heart)' and '(two
// lungs)' in the β1/β2 rows — carried verbatim, attributed (PH15's
// facing-page attribution resolves here).

export const gProteinLinkedSecondMessengers: KypUsMLENote = {
  id: "g-protein-linked-second-messengers",
  title: "G-Protein-Linked Second Messengers",
  subtitle:
    "The autonomic system's transduction layer — one table, fourteen receptors, three G-protein classes: s the gas pedal (β1/β2/β3, D1, H2, V2 → adenylyl cyclase ON → ATP → ↑cAMP → protein kinase A), i the brake (α2, M2, D2 → the SAME adenylyl cyclase, inhibited → ↓cAMP), and q the squeeze (α1, M1, M3, H1, V1 → phospholipase C → PIP2 → IP3 + DAG → Ca2+ + protein kinase C → smooth muscle contraction) — with the subscript traps hiding in the membership lists (not all 2s are Gi), the same-hormone splits (V1 q vs V2 s; H1 q vs H2 s), and the page's own counting code ('one heart', 'two lungs').",
  subject: "Pharmacology",
  system:
    "Section II · Pharmacology — Autonomic Drugs (the banner this page shares with drug-effect-modifications, autonomic-receptors, acetylcholine-receptors, pain-transmission, micturition-control, and tissue-distribution-of-adrenergic-receptors before it — the G-protein–linked second messengers section occupies the WHOLE book-237 page, the last page of the banner's receptor-block run, and supplies the transduction layer every later Autonomic Drugs topic rides)",
  pilotCategory:
    "The second-messenger page's complete architecture — the 14-row RECEPTOR / G-PROTEIN CLASS / MAJOR FUNCTIONS table (Adrenergic α1 q, α2 i, β1 s, β2 s, β3 s; Cholinergic M1 q, M2 i, M3 q; Dopamine D1 s, D2 i; Histamine H1 q, H2 s; Vasopressin V1 q, V2 s) plus the three cascade diagrams (Gq → phospholipase C → PIP2 → IP3 + DAG → Ca2+ + protein kinase C; Gs → adenylyl cyclase → ATP → cAMP → protein kinase A; Gi → the same adenylyl cyclase, inhibited), plus the KYP layers that compress them: the three-lanes reading (gas pedal / brake / squeeze), the subscript-rule membership frames, the kinase fork, the PIP2 splitter, and the drug/toxin anchors that hang off each lane (albuterol, dobutamine, clonidine, phenylephrine, atropine, cimetidine, desmopressin, antipsychotics, cholera toxin, pertussis toxin).",
  difficulty: 2,
  readTime: 7,
  sourceRef:
    "First Aid 2026, Part 1 pp. 237 (Pharmacology — Autonomic Drugs: G-protein–linked second messengers — the section occupies the whole page and prints two elements, both carried here: the 14-row table under the heads RECEPTOR / G-PROTEIN CLASS / MAJOR FUNCTIONS, verbatim: Adrenergic — α1 'q', α2 'i', β1 's', β2 's', β3 's'; Cholinergic — M1 'q', M2 'i', M3 'q'; Dopamine — D1 's', D2 'i'; Histamine — H1 'q', H2 's'; Vasopressin — V1 'q', V2 's' (the V2 row printing the book's own red-ink erratum overlay 'collecting twobules (tubules)', quoted as printed), each with its MAJOR FUNCTIONS string; and the three cascade diagrams — 'H1, α1, V1, M1, or M3 receptor' → Gq protein → Phospholipase C → PIP2 → IP3 + DAG → Ca2+ → Protein kinase C → Smooth muscle contraction (with Myosin light-chain kinase); 'B1, B2, B3, D1, H2, or V2 receptor' → GS protein → Adenylyl cyclase → ATP → Cyclic AMP → Protein kinase A; 'M2, α2, or D2 receptor' → Gi protein → the same adenylyl cyclase, inhibited → ↓cAMP — the diagrams are vector typeset artwork with zero rasters, never reproduced, conveyed as one original KYP schematic; the '(one heart)' and '(two lungs)' parentheticals are this page's own print; the three-lanes reading, the subscript-rule membership frames, the kinase fork, the PIP2 splitter, and every drug/toxin name (albuterol, dobutamine, clonidine, phenylephrine, atropine, cimetidine, desmopressin, antipsychotics, cholera toxin, pertussis toxin) are KYP extensions; pdf 258 carries the completed PH14/PH15 topics (EXCLUDED) and pdf 260 opens the separate pending Autonomic drugs section — this section ends on pdf 259)",
  tags: [
    "g-protein coupled receptors",
    "GPCR",
    "second messengers",
    "Gs protein",
    "Gi protein",
    "Gq protein",
    "adenylyl cyclase",
    "phospholipase C",
    "cyclic AMP",
    "cAMP",
    "protein kinase A",
    "protein kinase C",
    "PIP2",
    "IP3",
    "DAG",
    "calcium signaling",
    "myosin light-chain kinase",
    "alpha1 receptor",
    "alpha2 receptor",
    "beta1 receptor",
    "beta2 receptor",
    "beta3 receptor",
    "M1 receptor",
    "M2 receptor",
    "M3 receptor",
    "D1 receptor",
    "D2 receptor",
    "H1 receptor",
    "H2 receptor",
    "V1 receptor",
    "V2 receptor",
    "vasopressin receptors",
    "histamine receptors",
    "dopamine receptors",
    "autonomic drugs",
    "signal transduction",
    "cholera toxin",
    "pertussis toxin",
    "one heart two lungs",
    "pharmacology",
  ],
  core: {
    what:
      "FOURTEEN RECEPTORS, THREE CLASSES, TWO ENZYMES. The page prints the autonomic system's transduction map — which receptor couples which G protein, and what each class does downstream. THE TABLE'S LETTERS: α1 'q', α2 'i', β1 's', β2 's', β3 's' (Adrenergic); M1 'q', M2 'i', M3 'q' (Cholinergic); D1 's', D2 'i' (Dopamine); H1 'q', H2 's' (Histamine); V1 'q', V2 's' (Vasopressin). THE DIAGRAMS' THREE CASCADES: Gs — 'B1, B2, B3, D1, H2, or V2 receptor' → GS protein → adenylyl cyclase → ATP → cyclic AMP → protein kinase A (the amplifier lane); Gi — 'M2, α2, or D2 receptor' → Gi protein → the SAME adenylyl cyclase, inhibited → ↓cyclic AMP (the brake lane); Gq — 'H1, α1, V1, M1, or M3 receptor' → Gq protein → phospholipase C → PIP2 → IP3 + DAG → Ca2+ → protein kinase C → smooth muscle contraction, with myosin light-chain kinase as the Ca2+-activated effector (the squeeze lane). THE SPLITS THE LETTERS HIDE: two families print BOTH classes under one hormone — vasopressin (V1 q vascular vs V2 s renal) and histamine (H1 q vs H2 s) — and the table's own counting code prints in the β rows ('one heart' β1, 'two lungs' β2).",
    why:
      "WHY A TRANSDUCTION PAGE CAPS THE RECEPTOR BLOCK. The five topics before this one mapped the autonomic wiring — divisions, receptors, transmitter families, organ effects; this page supplies the machinery every one of those effects runs on: the receptor is the antenna, the G protein the switch, the enzyme the generator, the second messenger the signal, the kinase the executor. WHY THREE CLASSES AND NOT FOURTEEN: the body economizes — fourteen receptors share three transduction lanes, so a drug that selects a receptor inherits a cascade, and a question that names a cascade implicates a whole receptor set (the exam's favorite move: 'which of the following receptors acts through IP3 and DAG?' — the answer is any of the five q receptors). WHY THE SAME ENZYME APPEARS IN TWO LANES: Gs and Gi are the two signs on ONE enzyme (adenylyl cyclase) — Gs turns it on (ATP → cAMP), Gi turns it off (↓cAMP) — which is why the vagal brake (M2 i) and the sympathetic accelerator (β1 s) on the heart are the SAME second messenger read in opposite directions. WHY Gq IS THE CONTRACTION LANE: phospholipase C splits one membrane phospholipid (PIP2) into two messengers — IP3 frees Ca2+ (→ myosin light-chain kinase → smooth muscle contraction), DAG holds protein kinase C at the membrane — which is why every q receptor on this page contracts something (α1 vessels and pupils, M3 glands and gut and bladder, H1 airways, V1 vessels).",
    keyIdea:
      "Read every second-messenger stem through the lane protocol. STEP 1 — NAME THE RECEPTOR (the stem's drug, hormone, or organ names it: phenylephrine → α1; albuterol → β2; vagus → M2; histamine → H1 or H2; ADH → V1 or V2). STEP 2 — READ THE CLASS LETTER in the table (α1 q, α2 i, β1/β2/β3 s, M1 q, M2 i, M3 q, D1 s, D2 i, H1 q, H2 s, V1 q, V2 s). STEP 3 — RUN THE LANE: q → phospholipase C → PIP2 → IP3 + DAG → Ca2+ + protein kinase C → contraction; s → adenylyl cyclase ON → ↑cAMP → protein kinase A; i → adenylyl cyclase OFF → ↓cAMP. THE SUBSCRIPT RULE (KYP, the membership shortcut): the i class is ALL 2s — α2, D2, M2 — but NOT all 2s are i (β2, H2, V2 are s: the three 2s that got away); the q class is the ODD ones — α1, M1, M3, H1, V1; the s class is the betas plus the strays — D1, H2, V2. The exam's one-line summary: s STIMULATES THE AMP MAKER, i INHIBITS IT, q GOES TO PHOSPHOLIPASE C — and the direction of the effect is decided by the lane (cAMP in the heart raises rate; cAMP in smooth muscle relaxes it — the same messenger, different tissue).",
  },
  mechanisms: [
    {
      id: "gq-plc-ip3-dag-cascade",
      title:
        "The Gq mechanism: α1, M1, M3, H1, or V1 receptor → Gq protein → phospholipase C → PIP2 → IP3 + DAG → Ca2+ + protein kinase C → smooth muscle contraction — the squeeze lane, five receptors, one two-headed messenger",
      context:
        "The page's Gq cascade diagram (book 237), its own labels in order: 'H1, α1, V1, M1, or M3 receptor' → 'Gq protein' → 'Phospholipase C' → 'PIP2' → 'DAG' + 'IP3' → 'Ca2+' → 'Protein kinase C' → 'Smooth muscle contraction', with 'Myosin light-chain kinase (smooth muscle contraction)' as the Ca2+-activated effector. The squeeze-lane naming, the splitter frame, and the phenylephrine/atropine/H1-antihistamine/V1 anchors are KYP extensions beyond the page's printed set.",
      flow: {
        nodes: [
          {
            id: "input",
            label: "A q-class ligand binds — α1 (catecholamines), M1/M3 (ACh), H1 (histamine), V1 (ADH)",
            sublabel:
              "Input — the five q receptors, the diagram's own chip list ('H1, α1, V1, M1, or M3 receptor') — three families, one class letter. The table pairs each with its printed function: α1 '↑ vascular smooth muscle contraction, ↑ pupillary dilator muscle contraction (mydriasis), ↑ intestinal and bladder sphincter muscle contraction'; M3 '↑ exocrine gland secretions, gut peristalsis, bladder contraction, bronchoconstriction, vasodilation, ↑ pupillary sphincter muscle contraction (miosis), ciliary muscle contraction (accommodation)'; H1 '↑ bronchoconstriction, airway mucus production, ↑ vascular permeability/vasodilation, pruritus'; V1 '↑ vascular smooth muscle contraction'. The squeeze lane is the contraction-and-secretion lane.",
            variant: "input",
          },
          {
            id: "gq-plc",
            label: "Receptor → Gq protein → phospholipase C (the class-defining enzyme)",
            sublabel:
              "The transduction step, the diagram's own boxes: the ligand-bound receptor activates the 'Gq protein', which activates 'Phospholipase C' — the enzyme that defines the q lane (the cAMP lanes never touch it). This is the fork the exam tests at the enzyme level: adenylyl cyclase belongs to s and i; phospholipase C belongs to q alone.",
            variant: "process",
          },
          {
            id: "pip2-split",
            label: "Phospholipase C cleaves PIP2 → IP3 + DAG (one phospholipid, two messengers)",
            sublabel:
              "The splitter, the diagram's own path: 'PIP2' (a membrane phospholipid) is cleaved into 'DAG' (which stays in the membrane) and 'IP3' (which diffuses to the endoplasmic reticulum). KYP frame (the PIP2 SPLITTER): one substrate, two heads — IP3 FREES Ca, DAG DRAGS PKC; never swap them (IP3's target is the Ca2+ store, DAG's target is protein kinase C).",
            variant: "process",
          },
          {
            id: "ca-pkc",
            label: "IP3 → ↑ intracellular Ca2+ → myosin light-chain kinase · DAG → protein kinase C",
            sublabel:
              "The two arms, the diagram's own labels: 'IP3' releases 'Ca2+' from intracellular stores, and Ca2+ activates 'Myosin light-chain kinase (smooth muscle contraction)' — the contraction machinery's own kinase; in parallel, 'DAG' activates 'Protein kinase C' at the membrane. The kinase fork (KYP flag): this lane's kinases are protein kinase C and MLCK — NOT protein kinase A (that is the cAMP lane's kinase; the PKA-vs-PKC swap is the exam's classic trap).",
            variant: "process",
          },
          {
            id: "output",
            label: "RESULT — smooth muscle contraction + secretion: vessels tighten, pupils dilate (α1), glands pour (M3/H1)",
            sublabel:
              "Output — the terminal box the diagram itself prints: 'Smooth muscle contraction'. The table's own q rows supply the organ map: α1 constricts vessels, dilates the pupil (mydriasis), and closes the sphincters; M3 contracts the bladder, gut, bronchi, and pupillary sphincter (miosis) and pours the exocrine glands; H1 constricts bronchi and leaks vessels; V1 constricts vessels; M1 drives the enteric and cognitive forebrain (KYP anchor: the CNS Gaq story). The drug layer (KYP anchors, none printed): phenylephrine rides α1-q (vasoconstriction, mydriasis); atropine BLOCKS M3-q (the dry, dilated, flushed story); first-generation antihistamines block H1-q; desmopressin leaves V1 alone and takes the V2-s lane instead.",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "gq-plc", label: "five receptors, one class letter (q)" },
          { from: "gq-plc", to: "pip2-split", label: "phospholipase C cleaves PIP2" },
          { from: "pip2-split", to: "ca-pkc", label: "IP3 frees Ca2+ · DAG holds PKC" },
          { from: "ca-pkc", to: "output", label: "MLCK + PKC → contraction" },
        ],
      },
    },
    {
      id: "gs-gi-camp-cascade",
      title:
        "The cAMP mechanism: Gs (β1, β2, β3, D1, H2, V2 → adenylyl cyclase ON → ATP → cAMP → protein kinase A) vs Gi (α2, M2, D2 → the SAME enzyme, inhibited → ↓cAMP) — the gas pedal and the brake, one enzyme, two signs",
      context:
        "The page's Gs and Gi cascade diagrams (book 237), their own labels in order: 'B1, B2, B3, D1, H2, or V2 receptor' → 'GS protein' → 'Adenylyl cyclase' → 'ATP' → 'Cyclic AMP' → 'Protein kinase A'; and 'M2, α2, or D2 receptor' → 'Gi protein' → the same 'Adenylyl cyclase', inhibited → ↓ 'Cyclic AMP'. The gas-pedal/brake naming, the subscript-rule membership frames, and the albuterol/dobutamine/clonidine/cimetidine/desmopressin/toxin anchors are KYP extensions beyond the page's printed set.",
      flow: {
        nodes: [
          {
            id: "input-gs",
            label: "An s-class ligand binds — β1/β2/β3 (catecholamines), D1 (dopamine), H2 (histamine), V2 (ADH)",
            sublabel:
              "Input — the six s receptors, the diagram's own chip list ('B1, B2, B3, D1, H2, or V2 receptor'; the diagram prints B glyphs, the table prints β). The table pairs each with its printed function: β1 '↑ heart rate, ↑ contractility (one heart), ↑ renin release, ↑ lipolysis'; β2 'Vasodilation, bronchodilation (two lungs), ↑ lipolysis, ↑ insulin release, ↑ glycogenolysis, ↓ uterine tone (tocolysis), ↑ aqueous humor production, ↑ cellular K+ uptake'; β3 '↑ lipolysis, ↑ thermogenesis in skeletal muscle, ↑ bladder relaxation'; D1 'Relaxes renal vascular smooth muscle, activates direct pathway of striatum'; H2 '↑ gastric acid secretion'; V2 '↑ H2O permeability and reabsorption via upregulating aquaporin-2 in collecting tubules of kidney, ↑ release of vWF' (the row prints the book's own erratum overlay 'twobules (tubules)').",
            variant: "input",
          },
          {
            id: "gs-ac",
            label: "Receptor → Gs protein → adenylyl cyclase ON → ATP → cyclic AMP",
            sublabel:
              "The gas pedal, the diagram's own boxes: the ligand-bound receptor activates the 'GS protein', which turns 'Adenylyl cyclase' ON — the enzyme converts 'ATP' to 'Cyclic AMP', the lane's second messenger. KYP frame: Gs = the GAS PEDAL (s stimulates) — the amplifier of the autonomic system: one receptor event becomes many cAMP molecules (the reason GPCR signals are amplified and slower-onset than the nicotinic channel's milliseconds).",
            variant: "process",
          },
          {
            id: "pka",
            label: "cAMP → protein kinase A (the lane's kinase) — phosphorylation does the organ's work",
            sublabel:
              "The executor, the diagram's own box: 'Protein kinase A' — the cAMP-activated kinase. Its targets decide the organ story (KYP anchors on the table's own rows): in the heart (β1), PKA phosphorylates Ca2+ handling → '↑ heart rate, ↑ contractility (one heart)'; in bronchial and vascular smooth muscle (β2), PKA phosphorylates MLCK → RELAXATION (bronchodilation, vasodilation — the same messenger, opposite mechanical sign: cAMP in the heart CONTRACTS, cAMP in smooth muscle RELAXES); in the stomach (H2) → '↑ gastric acid secretion'; in the collecting tubule (V2) → aquaporin-2 insertion (the water-permeability story); in the JG apparatus (β1) → renin. The kinase fork (KYP): this lane's kinase is PKA, NEVER PKC.",
            variant: "process",
          },
          {
            id: "input-gi",
            label: "An i-class ligand binds — α2 (NE/clonidine), M2 (vagal ACh), D2 (dopamine)",
            sublabel:
              "The brake's inputs — the three i receptors, the diagram's own chip list ('M2, α2, or D2 receptor'): the table prints α2 '↓ sympathetic (adrenergic) outflow, ↓ insulin release, ↓ lipolysis, ↑ platelet aggregation, ↓ aqueous humor production'; M2 '↓ heart rate, AV node conduction velocity, and atrial contractility'; D2 'Modulates transmitter release, especially in brain, inhibits indirect pathway of striatum'. KYP membership frame: the i class is ALL 2s — α2, D2, M2 — the only three subscript-2 receptors in the brake lane (β2, H2, V2 are s: the three 2s that got away).",
            variant: "input",
          },
          {
            id: "gi-brake",
            label: "Receptor → Gi protein → the SAME adenylyl cyclase, inhibited → ↓cAMP",
            sublabel:
              "The brake, the diagram's own path: the ligand-bound receptor activates the 'Gi protein', which INHIBITS the same 'Adenylyl cyclase' Gs stimulates — 'Cyclic AMP' falls. The point the exam tests: Gi is not a receptor antagonist and not a channel — it is the negative sign on the SAME enzyme (the vagal brake on the heart and the sympathetic self-brake on the terminal are one mechanism: less cAMP). KYP extension (flagged, beyond the printed diagram): Gi's βγ subunit also opens K+ channels at the SA/AV node — the M2 vagal story's hyperpolarization arm.",
            variant: "process",
          },
          {
            id: "output",
            label: "RESULT — the two signs on one signal: Gs turns the organ up (↑cAMP → PKA), Gi turns it down (↓cAMP)",
            sublabel:
              "Output — the heart is the composite the exam loves: β1-s raises rate and contractility through ↑cAMP-PKA ('↑ heart rate, ↑ contractility (one heart)') while M2-i lowers all three through ↓cAMP ('↓ heart rate, AV node conduction velocity, and atrial contractility') — one enzyme, two signs, two divisions of one autonomic. The drug layer (KYP anchors, none printed): albuterol rides β2-s (bronchodilation), dobutamine rides β1-s (inotropy), clonidine rides α2-i (↓ sympathetic outflow), cimetidine blocks H2-s (↓ gastric acid), desmopressin rides V2-s (aquaporin-2, concentrated urine), and the two toxin stories ride the two signs — cholera toxin locks Gs ON (secretory diarrhea), pertussis toxin locks Gi OFF (whooping cough, unchecked cAMP).",
            variant: "output",
          },
        ],
        edges: [
          { from: "input-gs", to: "gs-ac", label: "six receptors, one class letter (s)" },
          { from: "gs-ac", to: "pka", label: "ATP → cyclic AMP → protein kinase A" },
          { from: "pka", to: "output", label: "the organ's phosphorylation work" },
          { from: "input-gi", to: "gi-brake", label: "three receptors, one class letter (i)" },
          { from: "gi-brake", to: "output", label: "↓cyclic AMP — the negative sign" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "g-protein-second-messenger-map",
      title: "The G-protein second messenger map (an original KYP visual)",
      caption:
        "An original KYP schematic conveying the page's two printed elements (book 237): THE THREE CASCADE PANELS — Gs (receptor chips β1 β2 β3 D1 H2 V2 → Gs protein → adenylyl cyclase ON → ATP → cAMP → protein kinase A), Gi (α2 M2 D2 → Gi protein → the same adenylyl cyclase, inhibited → ↓cAMP), and Gq (α1 M1 M3 H1 V1 → Gq protein → phospholipase C → PIP2 → IP3 + DAG → Ca2+ + protein kinase C → smooth muscle contraction via myosin light-chain kinase) — each panel carrying the diagram's own receptor-example chips; THE CLASS DIGEST strip (the 14 receptors × class letter × enzyme × messenger × kinase, the table compressed); THE CODES strip (gas pedal / brake / squeeze; the i class is all 2s; the q class is the odd ones; IP3 frees Ca, DAG drags PKC); and the reading-rule footer (name the receptor → read the letter → run the lane).",
      notice:
        "Census (pdfimages + text layer): the page's diagrams are VECTOR TYPESET artwork with ZERO raster images — COPYRIGHTED, never reproduced; this visual conveys the cascade structure as an ORIGINAL_KYP_REDRAW (the labels and steps are the book's own; the layout and glyphs are KYP's). The table is carried verbatim in the note's next block. KYP extensions flagged on the map: the three-lanes reading (gas pedal / brake / squeeze), the subscript-rule membership frames (the i class is all 2s — NOT all 2s are Gi; the q class is the odd ones), the kinase fork (PKA vs PKC), the PIP2 splitter, and every drug/toxin anchor (albuterol, dobutamine, clonidine, phenylephrine, atropine, cimetidine, desmopressin, cholera toxin, pertussis toxin — none printed on this page). The '(one heart)' / '(two lungs)' parentheticals are this page's own print (the classic counting code, attributed). EXCLUDED: the completed PH14/PH15 sections on pdf 258 behind this page, and the Autonomic drugs section on pdf 260 ahead of it (the separate pending topic).",
    },
    {
      kind: "table",
      title: "Book 237 — the G-protein–linked second messengers table, verbatim",
      intro:
        "The page's first printed element — all 14 receptor rows under the three column heads RECEPTOR / G-PROTEIN CLASS / MAJOR FUNCTIONS, grouped in the book's five family blocks, carried whole (every class letter and every function string verbatim). The V2 row prints the book's own red-ink erratum overlay — 'collecting twobules (tubules)' — quoted exactly as printed.",
      columns: [
        "THE TABLE (book 237, verbatim)",
        "WHAT IT ESTABLISHES",
      ],
      rows: [
        [
          "Adrenergic — α1 · q — ↑ vascular smooth muscle contraction, ↑ pupillary dilator muscle contraction (mydriasis), ↑ intestinal and bladder sphincter muscle contraction.",
          "The first q row — the squeeze lane's vascular and pupillary story: vessels constrict, the pupil dilates, the sphincters close. Every α1 effect on this row is a contraction, and every contraction on this page runs through the q lane (PLC → IP3 + DAG → Ca2+).",
        ],
        [
          "Adrenergic — α2 · i — ↓ sympathetic (adrenergic) outflow, ↓ insulin release, ↓ lipolysis, ↑ platelet aggregation, ↓ aqueous humor production.",
          "The first i row — the brake lane's systemic story: sympathetic outflow itself falls (the presynaptic autoreceptor, the clonidine mechanism — KYP anchor), insulin and lipolysis are held back, platelets aggregate, aqueous humor falls. The row's mixture of ↓ and ↑ is the exam's wrinkle: i names the ENZYME sign (↓cAMP), not the direction of every downstream effect.",
        ],
        [
          "Adrenergic — β1 · s — ↑ heart rate, ↑ contractility (one heart), ↑ renin release, ↑ lipolysis.",
          "The heart's s row — the gas pedal on the pump: ↑cAMP → PKA → '↑ heart rate, ↑ contractility'. The parenthetical '(one heart)' is this page's own print — the β subscript code (β1 = one heart), the classic counting code PH15 attributed to this table.",
        ],
        [
          "Adrenergic — β2 · s — Vasodilation, bronchodilation (two lungs), ↑ lipolysis, ↑ insulin release, ↑ glycogenolysis, ↓ uterine tone (tocolysis), ↑ aqueous humor production, ↑ cellular K+ uptake.",
          "The widest s row — the same cAMP lane, the OPPOSITE mechanical sign in smooth muscle: PKA relaxes bronchial, vascular, and uterine smooth muscle (bronchodilation, vasodilation, tocolysis) while stimulating the metabolic and secretory organs. The parenthetical '(two lungs)' completes the counting code (β2 = two lungs).",
        ],
        [
          "Adrenergic — β3 · s — ↑ lipolysis, ↑ thermogenesis in skeletal muscle, ↑ bladder relaxation.",
          "The metabolic s row — the third β, the same lane as its siblings: fat mobilized, heat generated, bladder relaxed (the detrusor story PH14 carries). Three β receptors, one class letter (s), three organs — the betas never leave the gas pedal.",
        ],
        [
          "Cholinergic — M1 · q — Mediates higher cognitive functions, stimulates enteric nervous system, ↑ exocrine gland secretions.",
          "The first muscarinic q row — the CNS/enteric arm of the squeeze lane (KYP anchor: the forebrain Gaq story). This is one of the three letters PH12 'acetylcholine-receptors' anchored to this page — M1 q, M2 i, M3 q, the book's own assignments that resolve PH12's odd/even rule.",
        ],
        [
          "Cholinergic — M2 · i — ↓ heart rate, AV node conduction velocity, and atrial contractility.",
          "The heart's i row — the vagal brake: the SA and AV nodes' own muscarinic receptor, the Gi lane's cardiac story (↓cAMP; KYP extension beyond the printed diagram: the βγ subunit also opens K+ channels — the hyperpolarization arm). The composite the exam draws: β1-s and M2-i are the two signs on one heart.",
        ],
        [
          "Cholinergic — M3 · q — ↑ exocrine gland secretions, gut peristalsis, bladder contraction, bronchoconstriction, vasodilation, ↑ pupillary sphincter muscle contraction (miosis), ciliary muscle contraction (accommodation).",
          "The workhorse muscarinic q row — the squeeze lane's biggest organ list: glands pour, gut and bladder contract, bronchi constrict, the pupil constricts (miosis — the parasympathetic mirror of α1's mydriasis), the ciliary muscle accommodates. The M2-vs-M3 split is the table's own: the heart's even subtype brakes, the glands' odd subtype squeezes.",
        ],
        [
          "Dopamine — D1 · s — Relaxes renal vascular smooth muscle, activates direct pathway of striatum.",
          "The s-class dopamine — the renal vasodilator and the striatum's direct pathway (the movement-disorder story). Note the smooth-muscle sign: D1-s RELAXES renal vascular smooth muscle — the same lane as β2's vasodilation (cAMP relaxes smooth muscle), not α1's contraction.",
        ],
        [
          "Dopamine — D2 · i — Modulates transmitter release, especially in brain, inhibits indirect pathway of striatum.",
          "The i-class dopamine — the brake lane's neuromodulator: transmitter release modulated, the indirect pathway inhibited. The D1/D2 pair splits the striatum the way β1/M2 splits the heart — one family, two classes (KYP anchor: the antipsychotic target; the table prints the receptor, not the drug).",
        ],
        [
          "Histamine — H1 · q — ↑ bronchoconstriction, airway mucus production, ↑ vascular permeability/vasodilation, pruritus.",
          "The first histamine split — H1 rides the squeeze lane: bronchoconstriction, mucus, leak, itch (the allergy story's effector arm; KYP anchor: first-generation antihistamines block this q receptor).",
        ],
        [
          "Histamine — H2 · s — ↑ gastric acid secretion.",
          "The second histamine split — H2 rides the gas pedal: ↑cAMP → PKA → the parietal cell's acid pump (KYP anchor: cimetidine and its cousins block H2-s — the ulcer story). Same hormone, two receptors, two classes — the H1/H2 split mirrors the V1/V2 split below it.",
        ],
        [
          "Vasopressin — V1 · q — ↑ vascular smooth muscle contraction.",
          "The first vasopressin split — V1 rides the squeeze lane: vessels constrict (the pressor arm; the shock-physiology story). One hormone, two receptors, two lanes — the table's cleanest demonstration that the CLASS LETTER, not the hormone, decides the cascade.",
        ],
        [
          "Vasopressin — V2 · s — ↑ H2O permeability and reabsorption via upregulating aquaporin-2 in collecting twobules (tubules) of kidney, ↑ release of vWF.",
          "The second vasopressin split — V2 rides the gas pedal: ↑cAMP → PKA → aquaporin-2 inserted in the collecting tubule (the water-retention arm; KYP anchors: desmopressin selects V2-s, and nephrogenic DI is the V2 story broken) plus vWF release from endothelium. NOTE: the row prints the book's own red-ink erratum overlay — 'twobules (tubules)' — quoted exactly as printed (the printed page shows 'two' in red overlaid on 'tubules', followed by the parenthetical correction).",
        ],
      ],
      caption:
        "One table, three letters, five families: the q class is the odd ones (α1, M1, M3, H1, V1 — five receptors), the i class is all 2s (α2, M2, D2 — three receptors), and the s class is the betas plus the strays (β1, β2, β3, D1, H2, V2 — six receptors). Two families print BOTH classes under one hormone (histamine: H1 q / H2 s; vasopressin: V1 q / V2 s) — the same-hormone splits that make the class letter, not the hormone, the exam's answer. The parentheticals '(one heart)' and '(two lungs)' are this page's own counting code.",
    },
    {
      kind: "table",
      title: "The three lanes — the cascade summary (every step the page's diagrams print)",
      intro:
        "The page's second printed element compressed into one grid: the three cascade diagrams' own labels, in order, with each lane's receptor-example chips (the diagrams' own membership lists). The gas-pedal/brake/squeeze naming and the membership frames are KYP compressions; every enzyme, messenger, kinase, and chip is the page's own print.",
      columns: [
        "THE LANE",
        "THE CASCADE (the diagrams' own labels, in order)",
        "THE MEMBERSHIP (the diagrams' own receptor chips)",
      ],
      rows: [
        [
          "Gs — the GAS PEDAL (s stimulates)",
          "Receptor → GS protein → Adenylyl cyclase (ON) → ATP → Cyclic AMP (↑) → Protein kinase A → the organ's phosphorylation work (heart: ↑ rate and contractility; smooth muscle: RELAXATION; parietal cell: acid; collecting tubule: aquaporin-2; JG apparatus: renin).",
          "β1, β2, β3, D1, H2, V2 — the diagram's own chip: 'B1, B2, B3, D1, H2, or V2 receptor' (six receptors, three families). The betas plus the strays.",
        ],
        [
          "Gi — the BRAKE (i inhibits)",
          "Receptor → Gi protein → the SAME Adenylyl cyclase (inhibited) → ↓ Cyclic AMP → less protein kinase A activity (heart: ↓ rate, AV conduction, atrial contractility; terminal: ↓ NE release; islet: ↓ insulin).",
          "α2, M2, D2 — the diagram's own chip: 'M2, α2, or D2 receptor' (three receptors, all subscript-2). The i class is ALL 2s — but not all 2s are i (β2, H2, V2 are s).",
        ],
        [
          "Gq — the SQUEEZE (q goes to phospholipase C)",
          "Receptor → Gq protein → Phospholipase C → PIP2 → IP3 + DAG → IP3 frees Ca2+ (→ Myosin light-chain kinase → Smooth muscle contraction) while DAG activates Protein kinase C.",
          "α1, M1, M3, H1, V1 — the diagram's own chip: 'H1, α1, V1, M1, or M3 receptor' (five receptors, three families). The odd ones.",
        ],
      ],
      caption:
        "The three lanes answer every 'which second messenger' stem: name the receptor → read the class letter → run the lane. The forks the exam tests: THE ENZYME FORK (adenylyl cyclase serves s and i; phospholipase C serves q alone), THE KINASE FORK (cAMP → protein kinase A; DAG → protein kinase C; Ca2+ → myosin light-chain kinase — never swap them), and THE PIP2 SPLITTER (one phospholipid, two messengers: IP3 is the water-soluble Ca2+ releaser, DAG is the membrane-bound PKC activator). The toxin layer (KYP anchors): cholera toxin locks Gs on (↑↑cAMP — secretory diarrhea); pertussis toxin locks Gi off (unopposed stimulation — whooping cough).",
    },
  ],
  usmle: {
    patterns: [
      {
        stem:
          "A 19-year-old woman with an acute asthma exacerbation receives nebulized albuterol; her wheezing resolves within minutes. A physiology question asks which intracellular second messenger mediated the bronchodilation — and which kinase the messenger activated.",
        discriminator:
          "The drug names the receptor (albuterol → β2), the table names the class letter (β2 · s), and the Gs cascade names the messenger: 'GS protein → Adenylyl cyclase → ATP → Cyclic AMP → Protein kinase A' — with the smooth-muscle sign: cAMP-PKA RELAXES bronchial smooth muscle",
        concept: "β2 agonist → Gs → adenylyl cyclase → ↑cAMP → protein kinase A → bronchodilation (the gas pedal in smooth muscle)",
        answer:
          "β2 → Gs → adenylyl cyclase ON → ATP → ↑cAMP → protein kinase A → bronchial smooth muscle RELAXATION ('Vasodilation, bronchodilation (two lungs)…' — the table's own β2 string). The wrinkle the stem hides: the SAME messenger that raises heart rate in the β1 heart relaxes smooth muscle in the β2 airway — cAMP's mechanical sign depends on the tissue's PKA targets (in smooth muscle, PKA phosphorylates MLCK and shuts down contraction). KYP anchor: the albuterol name belongs to the drug layer; the cascade is the page's own.",
      },
      {
        stem:
          "A cell-biology experiment: a ligand binds its receptor, phospholipase C is activated, PIP2 is cleaved, intracellular Ca2+ rises, and protein kinase C translocates to the membrane. The question lists five receptors and asks which one could have produced the trace.",
        discriminator:
          "The enzyme is the class fingerprint: phospholipase C belongs to the q lane ALONE — the membership list is the diagram's own chip: 'H1, α1, V1, M1, or M3 receptor'",
        concept: "PLC → PIP2 → IP3 + DAG → Ca2+ + PKC — the Gq fingerprint (α1, M1, M3, H1, V1)",
        answer:
          "Any of the five q receptors — α1, M1, M3, H1, V1 (the diagram's own membership list). If the stem pins the organ, the receptor follows: vessels or pupil → α1; glands, gut, bladder, or bronchi → M3; allergy effectors → H1; the pressor arm of ADH → V1; the enteric/cognitive arm → M1. The cascade itself is the diagram's own path: 'Gq protein → Phospholipase C → PIP2 → IP3 + DAG → Ca2+ → Protein kinase C → Smooth muscle contraction' with 'Myosin light-chain kinase (smooth muscle contraction)' as the Ca2+ effector. The distractor lane: any adenylyl-cyclase/cAMP option is the s or i lane — wrong enzyme, wrong class.",
      },
      {
        stem:
          "A 58-year-old man with hypertension is started on a centrally acting agent; his blood pressure falls, his heart rate slows, and plasma norepinephrine declines. The question asks which receptor–G-protein pair the drug activated, and what happened to cAMP inside the sympathetic terminals.",
        discriminator:
          "The presynaptic story: α2 is the autoreceptor — the table's own α2 row opens '↓ sympathetic (adrenergic) outflow' — and α2's class letter is i: the Gi lane's 'Gi protein' inhibiting the same adenylyl cyclase Gs stimulates, so cAMP FALLS in the terminal",
        concept: "α2 agonist → Gi → adenylyl cyclase inhibited → ↓cAMP → ↓ neurotransmitter release (the brake on the terminal)",
        answer:
          "α2 → Gi → the SAME adenylyl cyclase, inhibited → ↓cyclic AMP (the diagram's own Gi path: 'M2, α2, or D2 receptor' → 'Gi protein'). The drug is clonidine (KYP anchor; the page prints the receptor, not the drug). The frame: Gi is the negative sign on one enzyme — not a receptor antagonist, not a channel. The same lane's cardiac story is M2 (the vagal brake: '↓ heart rate, AV node conduction velocity, and atrial contractility'), and the same lane's neuromodulator story is D2 ('Modulates transmitter release, especially in brain') — three receptors, all subscript-2, one brake.",
      },
    ],
    traps: [
      {
        a: "All subscript-2 receptors are Gi — β2, α2, H2, D2, M2, V2 all carry the same class letter",
        b: "Reading the subscript '2' as the class letter i and assigning every 2 to the brake lane",
        whyConfused:
          "The i class really is all 2s (α2, D2, M2 — three receptors, three 2s), so the pattern looks universal; the counterexamples sit in two different family blocks (the β block and the H/V blocks), so the exception is easy to miss in the table's list view",
        keyDifference:
          "The i class is all 2s, but NOT all 2s are i: β2, H2, and V2 are s (the three 2s that got away — the table prints β2 's', H2 's', V2 's'). The full membership as the diagrams print it: Gi = 'M2, α2, or D2' (three chips); Gs = 'B1, B2, B3, D1, H2, or V2' (six chips — three of them subscript-2). The exam's version of this trap: an option list mixing β2 and α2 on a cAMP question — the α is the i, the β is the s.",
        clue:
          "Before answering any subscript question, recite the split: THE i CLASS IS ALL 2s (α2, D2, M2); THE THREE 2s THAT GOT AWAY ARE s (β2, H2, V2). Mnemonic: the brake lane has exactly three members, and they are the adrenergic, dopaminergic, and muscarinic 2.",
      },
      {
        a: "Gi is a receptor antagonist — activating Gi blocks the receptor itself, the way atropine blocks M3",
        b: "Confusing the G-protein's brake (a sign on the enzyme) with receptor blockade (a sign on the receptor)",
        whyConfused:
          "Both mechanisms reduce the signal, and the word 'inhibitory' floats around both; the diagram shows Gi next to the same adenylyl cyclase Gs uses, which reads like 'the inhibitor of the pathway' rather than 'the negative sign on the enzyme'",
        keyDifference:
          "Gi INHIBITS THE ENZYME, not the receptor: the ligand still binds and the receptor still signals — what changes is that the SAME 'Adenylyl cyclase' Gs stimulates is turned down, so 'Cyclic AMP' falls. Atropine blocks the M3 receptor (a q receptor — a different lane entirely); clonidine stimulates the α2 receptor and rides the Gi lane to turn cAMP down. The composite the exam draws: on the heart, β1-s (accelerator) and M2-i (brake) act on the SAME enzyme from two receptors — that is modulation, not blockade. KYP extension beyond the printed diagram: Gi's βγ subunit also opens K+ channels at the SA/AV node (the vagal hyperpolarization arm).",
        clue:
          "Translate the letter first: i = the sign on adenylyl cyclase, not a lock on the receptor. If the stem says a drug ACTIVATES a receptor and cAMP FALLS, the answer is an i-class agonist (α2, M2, or D2) — never an antagonist.",
      },
      {
        a: "IP3 activates protein kinase C and DAG releases Ca2+ — the two messengers' targets can be swapped",
        b: "Matching each PIP2 product to the wrong downstream arm — the kinase and the ion exchange partners",
        whyConfused:
          "Both messengers are born together from one cleavage ('PIP2' → 'IP3' + 'DAG'), both feed the contraction story, and both arms end in similar-sounding kinases (protein kinase C vs myosin light-chain kinase) — under time pressure the pairs flip",
        keyDifference:
          "The diagram's own arrows: IP3 → Ca2+ (the water-soluble messenger crosses to the stores and FREES calcium, which activates 'Myosin light-chain kinase (smooth muscle contraction)') while DAG → 'Protein kinase C' (the membrane-bound messenger DRAGS PKC to the membrane and activates it). The kinase fork holds across both lanes: cAMP → protein kinase A (the s lane's kinase); DAG → protein kinase C (the q lane's kinase); Ca2+ → MLCK (the contraction effector). PKA never appears in the q cascade; PKC never appears in the cAMP cascades.",
        clue:
          "Mnemonic: IP3 FREES Ca, DAG DRAGS PKC. If the answer choices pair IP3 with PKC or DAG with Ca2+ release, the transposition is the trap — find the option that splits PIP2 correctly.",
      },
      {
        a: "Vasopressin is a vasoconstrictor hormone, so both V receptors couple Gq and raise IP3 — and histamine's receptors must both do the same",
        b: "Assigning the hormone's famous effect (V1 vasoconstriction; histamine's allergy effects) to every receptor the hormone binds",
        whyConfused:
          "The hormone's name carries its famous action (vasopressin = pressor), and the table prints both receptors in ONE family block, so the class letters are easy to blur across the block",
        keyDifference:
          "The table's own split: Vasopressin — V1 'q' ('↑ vascular smooth muscle contraction' — the squeeze lane) vs V2 's' ('↑ H2O permeability and reabsorption via upregulating aquaporin-2…' — the gas pedal: cAMP → PKA → aquaporin-2 insertion); Histamine — H1 'q' (bronchoconstriction, mucus, leak, pruritus) vs H2 's' ('↑ gastric acid secretion'). Two families, two identical splits: the SAME hormone binds two receptors in two classes with two second messengers — the class letter, not the hormone, decides the cascade. KYP anchors: desmopressin selects V2-s (concentrated urine without the pressor effect); cimetidine blocks H2-s (↓ acid without the H1 effects).",
        clue:
          "Any vasopressin or histamine stem: name the RECEPTOR before the hormone. The question 'which vasopressin receptor is Gs?' has exactly one answer — V2 (and 'which histamine receptor is Gq?' — H1). The parenthetical organs disambiguate: vessels → the q receptor; kidney and stomach → the s receptor.",
      },
    ],
    pivots: [
      {
        lookAlike: "Any stem asking 'which second messenger / which G protein / which kinase' — the options mix cAMP, IP3, DAG, Ca2+, adenylyl cyclase, phospholipase C, PKA, PKC, and the fourteen receptors all in one list",
        differentiator:
          "Run the lane protocol on the stem's anchor — NAME THE RECEPTOR (the drug, hormone, or organ names it), READ THE CLASS LETTER (the table: q = α1, M1, M3, H1, V1; i = α2, M2, D2; s = β1, β2, β3, D1, H2, V2), RUN THE LANE (q → PLC → PIP2 → IP3 + DAG → Ca2+ + PKC; s → AC on → cAMP → PKA; i → AC off → ↓cAMP). The enzyme is the class fingerprint: phospholipase C in the stem or options points at q alone; adenylyl cyclase points at s-or-i (the sign discriminates).",
        correctPath:
          "(1) If the stem names a DRUG, map it to its receptor first (albuterol → β2; phenylephrine → α1; clonidine → α2; atropine → blocks M3; cimetidine → blocks H2; desmopressin → V2 — the drug layer is KYP; the letter is the book's). (2) If the stem names a MESSENGER OR ENZYME, run the lane backwards to the class, then scan the options for any member of that class's chip list. (3) If the stem names an ORGAN EFFECT, use the sign: contraction of smooth muscle via Ca2+ is the q lane; relaxation of smooth muscle is the s lane (cAMP-PKA); slowing of the heart is the i lane (M2). (4) Never let the hormone's name pick the class — the V1/V2 and H1/H2 splits are the exam's favorite counterexample.",
      },
      {
        lookAlike: "A physiology or pathology stem that hides the receptor entirely — cholera toxin, pertussis toxin, a β-agonist overdose, a PDE inhibitor, or a vagal maneuver — and asks what happened to cAMP or to the organ downstream",
        differentiator:
          "Find the lane's SIGN, not a receptor: cholera toxin locks Gs ON (adenylyl cyclase runs unchecked → ↑↑cAMP → the secretory-diarrhea story); pertussis toxin locks Gi OFF (the brake is removed → unopposed stimulation); PDE inhibitors (theophylline, milrinone) block cAMP BREAKDOWN (↑cAMP without touching any receptor — the same lane as Gs, different step); vagal maneuvers pour ACh on M2-i (↓cAMP in the node).",
        correctPath:
          "(1) Classify the intervention by the step it hits: receptor (agonist/antagonist), G protein (the toxins), enzyme (adenylyl cyclase is the only AC; phospholipase C is the only PLC), messenger (PDE inhibitors degrade cAMP), kinase (PKA/PKC/MLCK are the executors). (2) Write the sign: ON-steps raise the lane's output (Gs on, Gi off, PDE blocked — all raise cAMP), OFF-steps lower it. (3) Read the organ through the tissue's PKA targets (KYP frame): the heart contracts faster, smooth muscle relaxes, glands secrete, the tubule reabsorbs water — the messenger is one, the organ story is many. (4) The toxin layer is KYP (neither toxin is printed on this page): carry cholera = Gs stuck ON, pertussis = Gi stuck OFF as anchors, and let the lane supply the rest.",
      },
    ],
    miniCase: {
      vignette:
        "A 24-year-old woman presents for a routine eye examination; the ophthalmologist instills phenylephrine eye drops to dilate her pupils for fundoscopy. Within minutes both pupils are widely dilated (mydriasis) and the fundus view is excellent. The medical student observing asks what intracellular cascade the drug triggered inside the pupillary dilator muscle — and which other receptors in the body use the same cascade.",
      question:
        "Which receptor–G-protein–second-messenger cascade mediated the mydriasis, and what is the membership list of receptors that share that cascade?",
      options: [
        {
          label:
            "α1 → Gq protein → phospholipase C → PIP2 → IP3 + DAG → ↑ intracellular Ca2+ → myosin light-chain kinase → pupillary dilator contraction (mydriasis). The cascade's membership: α1, M1, M3, H1, and V1 — the diagram's own chip list 'H1, α1, V1, M1, or M3 receptor'.",
          text: "α1 → Gq → PLC → IP3 + DAG → Ca2+ → contraction.",
          correct: true,
          why:
            "Correct on every count, and every element is the source page's own. THE TARGET: the table's α1 row prints '↑ pupillary dilator muscle contraction (mydriasis)' — the radial muscle of the iris is an α1 effector, and phenylephrine is the α1 agonist that rides it (the drug name is the anchor layer, KYP; the row is printed). THE CASCADE: the Gq diagram's own path — 'Gq protein' → 'Phospholipase C' → 'PIP2' → 'IP3' + 'DAG' → 'Ca2+' → 'Protein kinase C' → 'Smooth muscle contraction', with 'Myosin light-chain kinase (smooth muscle contraction)' as the Ca2+ -activated effector. THE MEMBERSHIP: the diagram's own chip — 'H1, α1, V1, M1, or M3 receptor' (five receptors, three families: the squeeze lane).",
        },
        {
          label:
            "α1 → Gs protein → adenylyl cyclase → ATP → cyclic AMP → protein kinase A → contraction of the dilator. Rationale: the receptor is right, and cAMP is the universal second messenger, so α1 must raise it to contract the muscle.",
          text: "α1 → Gs → ↑cAMP → PKA — same receptor, different lane.",
          why:
            "Right receptor, wrong lane — the class-letter trap. The table prints α1 'q', not 's': α1's transduction is 'Gq protein → Phospholipase C', and adenylyl cyclase never appears in its cascade. The physiological tell: cAMP → PKA in SMOOTH MUSCLE causes RELAXATION, not contraction (the β2 lane's 'bronchodilation', 'Vasodilation'), so an α1-cAMP mechanism would dilate nothing — contraction needs the Ca2+ arm (IP3 → Ca2+ → myosin light-chain kinase). The letter and the sign must agree: q contracts, s relaxes smooth muscle.",
        },
        {
          label:
            "β2 → Gs protein → adenylyl cyclase → ATP → cyclic AMP → protein kinase A → relaxation of the dilator. Rationale: phenylephrine is a sympathomimetic, and β2 is the sympathetic smooth-muscle receptor, so it must dilate the pupil.",
          text: "β2 → Gs → ↑cAMP — the sympathetic smooth-muscle receptor.",
          why:
            "The subscript-2 trap with a sign flip. β2 is indeed s ('Vasodilation, bronchodilation (two lungs)…') — but β2's smooth-muscle story is RELAXATION (cAMP-PKA shuts down MLCK), which would not dilate a pupil even if the dilator carried the receptor; and the dilator's own printed row is α1's ('↑ pupillary dilator muscle contraction (mydriasis)'). This is the 'not all 2s are Gi' trap's mirror: β2 is one of the three 2s that are s — and being s in smooth muscle means relax, not squeeze. The mydriasis drug is α1 (phenylephrine), not β2.",
        },
        {
          label:
            "α2 → Gi protein → adenylyl cyclase inhibited → ↓ cyclic AMP → reduced PKA activity → contraction. Rationale: the drug is an α agonist, α2 is the other α receptor, and lowering cAMP is the classic way to slow a tissue.",
          text: "α2 → Gi → ↓cAMP — the other α receptor's lane.",
          why:
            "Right family, wrong member — and the wrong organ entirely. α2 is an i-class receptor (the table prints 'i': '↓ sympathetic (adrenergic) outflow, ↓ insulin release…'), and its effectors are the presynaptic terminal, the islet, platelets, and the ciliary epithelium — the table gives α2 NO row on the iris dilator, and the Gi lane's story is the brake on adenylyl cyclase, not a contraction mechanism. The dilator's printed row belongs to α1-q. This distractor tests the α1-vs-α2 split inside one family: the contraction receptor is the odd one (α1), the brake receptor is the 2 (α2).",
        },
        {
          label:
            "M3 → Gq protein → phospholipase C → PIP2 → IP3 + DAG → Ca2+ → pupillary SPHINCTER contraction (miosis). Rationale: the cascade is exactly the contraction cascade, and M3 is a Gq receptor that contracts smooth muscle in the eye.",
          text: "M3 → Gq → IP3 + DAG → Ca2+ — right lane, wrong muscle.",
          why:
            "The most seductive distractor: the cascade is EXACTLY right (M3 is q — '↑ pupillary sphincter muscle contraction (miosis), ciliary muscle contraction (accommodation)' is the table's own row) — but it is the wrong MUSCLE and the wrong DRUG. Phenylephrine is an adrenergic agonist: it binds α1, not M3 (the muscarinic receptor binds ACh), and the sphincter's contraction produces MIOSIS, the mirror-image of the stem's mydriasis. The lesson the option teaches: the cascade identifies the CLASS, but the drug and the muscle identify the RECEPTOR — run the lane protocol's first step before the last.",
        },
      ],
      reasoning:
        "The vignette is the q lane played as an eye exam. (1) THE DRUG — phenylephrine is the α1 agonist (KYP anchor; the page prints the receptor, not the drug), and the table's α1 row prints the organ's own string: '↑ pupillary dilator muscle contraction (mydriasis)'. (2) THE LETTER — α1's class is q (the table), which selects the third cascade: 'Gq protein → Phospholipase C → PIP2 → IP3 + DAG → Ca2+ → Protein kinase C → Smooth muscle contraction', with myosin light-chain kinase as the Ca2+ effector. (3) THE MEMBERSHIP — the diagram's own chip list ('H1, α1, V1, M1, or M3 receptor') answers the student's second question: four other receptors share the squeeze lane. (4) THE DISTRACTORS each transpose one printed element: α1-Gs (right receptor, wrong letter — and cAMP would relax, not contract), β2-Gs (the subscript-2 trap plus the sign flip), α2-Gi (right family, wrong member and wrong organ), M3-Gq (right lane, wrong muscle and wrong drug — the miosis mirror). The discriminator to carry: contraction via Ca2+ is the q lane; the drug and the muscle name the receptor; the letter names the lane.",
    },
  },
  mnemonics: [
    {
      code: "GAS PEDAL, BRAKE, SQUEEZE — s stimulates adenylyl cyclase, i inhibits it, q squeezes via phospholipase C",
      meaning:
        "The three verbs of the three lanes, mapped to the page's own machinery: Gs = the GAS PEDAL ('GS protein' → 'Adenylyl cyclase' ON → 'ATP' → 'Cyclic AMP' → 'Protein kinase A' — the amplifier); Gi = the BRAKE ('Gi protein' → the SAME 'Adenylyl cyclase', inhibited → ↓ 'Cyclic AMP' — the negative sign on one enzyme); Gq = the SQUEEZE ('Gq protein' → 'Phospholipase C' → 'PIP2' → 'IP3' + 'DAG' → 'Ca2+' → 'Smooth muscle contraction' — the Ca2+ contraction lane). The gas pedal's membership is six receptors (β1, β2, β3, D1, H2, V2 — the betas plus the strays), the brake's is three (α2, M2, D2), the squeeze's is five (α1, M1, M3, H1, V1).",
      memorizes: "What each G-protein class DOES — the verb, the enzyme sign, and the terminal kinase of each lane",
      whenToUse:
        "Any 'which second messenger / which G protein' stem, and any drug stem that turns on the class rather than the receptor — recite the verb before touching the options, then run the lane's steps in order",
      clinical:
        "The anchors that ride each lane (KYP; none printed on the page): the gas pedal — albuterol (β2-Gs bronchodilation), dobutamine (β1-Gs inotropy), desmopressin (V2-Gs aquaporin-2); the brake — clonidine (α2-Gi ↓ sympathetic outflow), the vagus on the heart (M2-Gi), the antipsychotic target (D2-Gi); the squeeze — phenylephrine (α1-Gq vasoconstriction/mydriasis), bethanechol (M3-Gq), the allergy effectors (H1-Gq), the pressor arm of ADH (V1-Gq). The toxins pick the pedals (KYP): cholera toxin jams the gas pedal ON (↑↑cAMP — secretory diarrhea); pertussis toxin unhooks the brake (Gi off — whooping cough).",
    },
    {
      code: "THE i CLASS IS ALL 2s — α2, D2, M2 — but NOT all 2s are i (β2, H2, V2 are s: the three 2s that got away)",
      meaning:
        "The membership shortcut for the brake lane, built from the page's own letters: the Gi class has exactly three members and every one is a subscript-2 (α2 'i', D2 'i', M2 'i' — the adrenergic, dopaminergic, and muscarinic 2). The shadow warning: three OTHER subscript-2 receptors belong to the gas pedal (β2 's', H2 's', V2 's' — the diagram's Gs chip list prints 'B1, B2, B3, D1, H2, or V2'). Six subscript-2 receptors in the table, three per lane — the subscript alone never decides the class.",
      memorizes: "The Gi membership list (α2, D2, M2) and the three subscript-2 receptors that are NOT Gi (β2, H2, V2)",
      whenToUse:
        "Any stem whose options mix subscript-2 receptors (the β2-vs-α2 cAMP question; the H2-vs-M2 class question), and any 'which receptors couple Gi' list question — recite the three members, then the three exceptions",
      clinical:
        "The brake lane's three clinical stories (KYP anchors): α2 — clonidine's hypotension, dry mouth, and sedation; M2 — the vagal bradycardia (and the reflex story: blocking M2 with atropine-type agents raises heart rate); D2 — the antipsychotic story (blockade → movement and prolactin effects) and the emesis story. The three that got away: β2 — albuterol's bronchodilation; H2 — cimetidine's ↓ gastric acid; V2 — desmopressin's concentrated urine.",
    },
    {
      code: "THE q CLASS IS THE ODD ONES — α1, M1, M3, H1, V1 (all the 1s plus M3)",
      meaning:
        "The membership shortcut for the squeeze lane, built from the page's own letters: every subscript-1 receptor in the table is q (α1 'q', M1 'q', H1 'q', V1 'q'), and the one exception that proves the pattern's shape is M3 — the workhorse muscarinic, also 'q'. Five receptors, three families, one lane: 'H1, α1, V1, M1, or M3 receptor' → 'Gq protein' → 'Phospholipase C' → the IP3/DAG split → Ca2+ → contraction and secretion.",
      memorizes: "The Gq membership list (α1, M1, M3, H1, V1) — the five receptors that share the phospholipase C cascade",
      whenToUse:
        "Any 'which receptor acts through IP3 and DAG' stem, any PLC/Ca2+/PKC trace, and any stem pairing a contraction or secretion with a receptor choice — the odd ones squeeze",
      clinical:
        "The squeeze lane's clinical stories (KYP anchors): α1 — phenylephrine's mydriasis and vasoconstriction, tamsulosin's blockade for BPH; M1 — the CNS/enteric arm; M3 — atropine's dry-dilated-flushed blockade story, bethanechol's stimulation; H1 — the antihistamine story; V1 — the shock-physiology pressor arm. And the mirror-image muscles of the eye (the exam's favorite pair): α1-q contracts the DILATOR (mydriasis) while M3-q contracts the SPHINCTER (miosis) — same lane, opposite muscles, opposite transmitters.",
    },
    {
      code: "IP3 FREES Ca, DAG DRAGS PKC — one phospholipid (PIP2), two messengers, two arms",
      meaning:
        "The PIP2 SPLITTER (KYP frame of the diagram's own path): phospholipase C cleaves ONE membrane phospholipid (PIP2) into TWO messengers with TWO different addresses — IP3 is water-soluble, diffuses to the stores, and FREES Ca2+ (which activates 'Myosin light-chain kinase (smooth muscle contraction)'); DAG is lipid-soluble, stays in the membrane, and DRAGS 'Protein kinase C' into active form at the membrane. The kinase fork rides along: cAMP → protein kinase A (the s lane), DAG → protein kinase C (the q arm), Ca2+ → MLCK (the contraction effector) — three kinases, three addresses, never swapped.",
      memorizes: "Which PIP2 product does what — IP3 → Ca2+ vs DAG → PKC — and each lane's kinase (PKA, PKC, MLCK)",
      whenToUse:
        "Any stem that names the second messenger and asks for the kinase or the ion (or vice versa), and any cascade-ordering question — recite the splitter before touching the options; if an option pairs IP3 with PKC or DAG with Ca2+ release, the transposition is the trap",
      clinical:
        "The splitter explains why the q lane's terminal box is 'Smooth muscle contraction' (KYP anchors on the table's own rows): the Ca2+ arm (IP3 → Ca2+ → MLCK) is the contraction machinery — α1's vessels and pupil, M3's gut and bladder and bronchi, H1's airways, V1's vessels; the PKC arm (DAG) is the proliferation/gene-expression story. The toxin corollary (KYP): the two cAMP toxins pick the OTHER lane — cholera (Gs on) and pertussis (Gi off) — while the q lane's own pathology is the IP3/Ca2+ overload story (the miosis/mydriasis pair, the bronchospasm pair).",
    },
  ],
  rapidReview: {
    s30: [
      "'G-protein–linked second messengers' — the section header; the whole page (book 237) is this one section: a 14-row table + three cascade diagrams.",
      "The table's letters, verbatim: α1 q · α2 i · β1 s · β2 s · β3 s · M1 q · M2 i · M3 q · D1 s · D2 i · H1 q · H2 s · V1 q · V2 s.",
      "Gs lane — the diagram's own path: 'GS protein' → 'Adenylyl cyclase' → 'ATP' → 'Cyclic AMP' → 'Protein kinase A'.",
      "Gs membership — the diagram's own chip: 'B1, B2, B3, D1, H2, or V2 receptor' (the betas plus the strays).",
      "Gi lane — 'Gi protein' → the SAME 'Adenylyl cyclase', inhibited → ↓ 'Cyclic AMP'.",
      "Gi membership — the diagram's own chip: 'M2, α2, or D2 receptor' (all subscript-2).",
      "Gq lane — 'Gq protein' → 'Phospholipase C' → 'PIP2' → 'IP3' + 'DAG' → 'Ca2+' → 'Protein kinase C' → 'Smooth muscle contraction' (with 'Myosin light-chain kinase').",
      "Gq membership — the diagram's own chip: 'H1, α1, V1, M1, or M3 receptor' (the odd ones).",
      "The same-hormone splits: V1 q (vascular) vs V2 s (renal aquaporin-2, vWF) · H1 q (allergy) vs H2 s (gastric acid).",
      "The page's own counting code: β1 '(one heart)' · β2 '(two lungs)' — printed in the table's β rows.",
    ],
    m3: [
      "GAS PEDAL, BRAKE, SQUEEZE — s stimulates adenylyl cyclase, i inhibits it, q squeezes via phospholipase C.",
      "THE i CLASS IS ALL 2s — α2, D2, M2 (but β2, H2, V2 are s: the three 2s that got away).",
      "THE q CLASS IS THE ODD ONES — α1, M1, M3, H1, V1.",
      "IP3 FREES Ca, DAG DRAGS PKC (one phospholipid, PIP2, split into two messengers).",
    ],
    m10: [
      "The whole page in one breath: one table (14 receptors × 5 families × 3 class letters) + three cascade diagrams (Gs, Gi, Gq) — the transduction layer every later Autonomic Drugs topic rides.",
      "The three lanes: Gs — receptor → GS protein → adenylyl cyclase ON → ATP → ↑cyclic AMP → protein kinase A; Gi — receptor → Gi protein → the SAME adenylyl cyclase, inhibited → ↓cyclic AMP; Gq — receptor → Gq protein → phospholipase C → PIP2 → IP3 + DAG → Ca2+ + protein kinase C → smooth muscle contraction.",
      "The membership lists (the diagrams' own chips): Gs = β1, β2, β3, D1, H2, V2 (six) · Gi = α2, M2, D2 (three — all 2s) · Gq = α1, M1, M3, H1, V1 (five — the odd ones). Fourteen receptors, three lanes — and the subscript alone never decides the class (β2, H2, V2 are the 2s that are s).",
      "The enzyme fork: adenylyl cyclase serves BOTH cAMP lanes (s turns it on, i turns it off — one enzyme, two signs, which is why β1 and M2 are the two autonomic divisions' voices on one heart); phospholipase C serves the q lane ALONE.",
      "The kinase fork: cAMP → protein kinase A · DAG → protein kinase C · Ca2+ → myosin light-chain kinase. Three kinases, three addresses — PKA is never in the q cascade, PKC is never in the cAMP cascades, MLCK is the contraction effector.",
      "The PIP2 splitter: one membrane phospholipid, two messengers — IP3 (water-soluble) crosses to the stores and frees Ca2+; DAG (membrane-bound) drags PKC into action. Never swap their targets.",
      "The same-hormone splits (two families print BOTH classes): vasopressin — V1 q '↑ vascular smooth muscle contraction' vs V2 s '↑ H2O permeability and reabsorption via upregulating aquaporin-2… ↑ release of vWF'; histamine — H1 q (bronchoconstriction, mucus, leak, pruritus) vs H2 s '↑ gastric acid secretion'. The class letter, not the hormone, decides the cascade.",
      "The sign wrinkle the exam loves: cAMP in the HEART contracts (β1: '↑ heart rate, ↑ contractility (one heart)') but cAMP in SMOOTH MUSCLE relaxes (β2: 'Vasodilation, bronchodilation (two lungs)', D1: 'Relaxes renal vascular smooth muscle') — the same messenger, the tissue's PKA targets decide the mechanical sign.",
      "The drug/toxin anchor layer (KYP — NONE printed on this page): albuterol β2-s · dobutamine β1-s · clonidine α2-i · phenylephrine α1-q · atropine blocks M3-q · cimetidine blocks H2-s · desmopressin V2-s · antipsychotics block D2-i · cholera toxin locks Gs ON (↑↑cAMP — secretory diarrhea) · pertussis toxin locks Gi OFF (whooping cough).",
      "The reading protocol: (1) NAME THE RECEPTOR (drug, hormone, or organ); (2) READ THE CLASS LETTER (the table); (3) RUN THE LANE (the diagrams); (4) read the organ through the tissue's kinase targets. The exam's one-liner: s STIMULATES THE AMP MAKER, i INHIBITS IT, q GOES TO PHOSPHOLIPASE C.",
    ],
  },
  recall: [
    {
      q: "Recite the table's 14 receptor rows — receptor, class letter, and the family groupings — in book order (the section's first printed element in one answer).",
      a:
        "Adrenergic: α1 q, α2 i, β1 s, β2 s, β3 s. Cholinergic: M1 q, M2 i, M3 q. Dopamine: D1 s, D2 i. Histamine: H1 q, H2 s. Vasopressin: V1 q, V2 s. Under the column heads RECEPTOR / G-PROTEIN CLASS / MAJOR FUNCTIONS — each row carrying its functions string (α1 vascular/pupillary/sphincter contraction; α2 the ↓-outflow/↓-insulin row; β1 '(one heart)' + renin + lipolysis; β2 the '(two lungs)' relaxation-metabolic row; β3 lipolysis/thermogenesis/bladder relaxation; M1 cognitive/enteric/exocrine; M2 '↓ heart rate, AV node conduction velocity, and atrial contractility'; M3 the workhorse secretion-contraction row; D1 renal vascular + direct pathway; D2 transmitter + indirect pathway; H1 allergy; H2 gastric acid; V1 vascular contraction; V2 aquaporin-2 + vWF — the V2 row printing the book's own erratum overlay 'twobules (tubules)').",
    },
    {
      q: "Walk each of the three cascades from receptor to effector — the diagrams' own labels in order — and name each lane's membership chip.",
      a:
        "Gs: 'B1, B2, B3, D1, H2, or V2 receptor' → GS protein → Adenylyl cyclase (ON) → ATP → Cyclic AMP → Protein kinase A. Gi: 'M2, α2, or D2 receptor' → Gi protein → the SAME Adenylyl cyclase (inhibited) → ↓ Cyclic AMP. Gq: 'H1, α1, V1, M1, or M3 receptor' → Gq protein → Phospholipase C → PIP2 → IP3 + DAG → IP3 frees Ca2+ (→ Myosin light-chain kinase → Smooth muscle contraction) while DAG activates Protein kinase C. The Gs chip prints 'B1, B2, B3' where the table prints β glyphs (the diagram's own lettering).",
    },
    {
      q: "Which three receptors couple Gi — and which three subscript-2 receptors are NOT Gi? State the membership rule and its shadow warning.",
      a:
        "Gi's three members: α2, D2, M2 — the i class is ALL 2s (the adrenergic, dopaminergic, and muscarinic 2; the diagram's own chip 'M2, α2, or D2 receptor'). The three 2s that got away: β2, H2, V2 — all s (the Gs chip prints them: 'B1, B2, B3, D1, H2, or V2 receptor'). The rule's shape: six subscript-2 receptors in the table, three per lane — the subscript ALONE never decides the class; the letter does. The exam's version: an option list mixing β2 and α2 on a cAMP question — the α is the i, the β is the s.",
    },
    {
      q: "One hormone, two receptors, two classes, two second messengers — give BOTH printed examples (the same-hormone splits), with each receptor's function string.",
      a:
        "VASOPRESSIN: V1 q — '↑ vascular smooth muscle contraction' (the squeeze lane: PLC → IP3 + DAG → Ca2+) vs V2 s — '↑ H2O permeability and reabsorption via upregulating aquaporin-2 in collecting twobules (tubules) of kidney, ↑ release of vWF' (the gas pedal: cAMP → PKA → aquaporin-2 insertion; the row prints the book's erratum overlay 'twobules (tubules)'). HISTAMINE: H1 q — '↑ bronchoconstriction, airway mucus production, ↑ vascular permeability/vasodilation, pruritus' vs H2 s — '↑ gastric acid secretion'. The lesson: the class letter, not the hormone, decides the cascade — which is why desmopressin can drive V2-s water retention without the V1-q pressor effect (KYP anchor).",
    },
    {
      q: "What does phospholipase C do to PIP2, what does each product do, and which kinase belongs to each lane — PKA, PKC, or MLCK?",
      a:
        "Phospholipase C (the q lane's enzyme, activated by 'Gq protein') cleaves the membrane phospholipid PIP2 into TWO messengers: IP3 — water-soluble, crosses to the stores, FREES Ca2+ (which activates Myosin light-chain kinase → 'Smooth muscle contraction'); DAG — membrane-bound, DRAGS Protein kinase C into active form. The kinase fork across all three lanes: cAMP → Protein kinase A (the s lane's kinase); DAG → Protein kinase C (the q arm); Ca2+ → MLCK (the contraction effector). Never swapped: PKA never appears in the q cascade, PKC never appears in the cAMP cascades (IP3-with-PKC and DAG-with-Ca2+ pairings are the classic transposition traps).",
    },
  ],
  related: [
    {
      title: "Acetylcholine Receptors — the Topic That Borrowed This Page's M1/M2/M3 Letters",
      topicId: "acetylcholine-receptors",
      note:
        "The page three before this one (PH12, book 235): the ACh receptor families — nicotinic ligand-gated channels and muscarinic GPCRs. PH12 anchored its entire muscarinic mechanism layer HERE: 'the M1/M2/M3 anchors being the book's own book-237 table (the separate g-protein-linked-second-messengers topic)' — the odd/even rule it carried (M1/M3 odd = Gq, M2 even = Gi) resolves into THIS page's own printed letters: M1 q, M2 i, M3 q. Read together they complete the cholinergic story: PH12 gives the receptor families and their locations, this page gives the transduction each family triggers — the nicotinic channel in milliseconds, the muscarinic cascades slower but amplified.",
    },
    {
      title: "Tissue Distribution of Adrenergic Receptors — the Address Book; This Page the Wiring Inside It",
      topicId: "tissue-distribution-of-adrenergic-receptors",
      note:
        "The facing page behind this one (PH15, book 236): the 13-row adrenergic tissue-distribution table — which tissue carries which receptor. This page supplies what that page's table could not: what happens INSIDE the cell after the receptor binds. The two tables share their adrenergic rows (α1, α2, β1, β2, β3 — the same five receptors, now with class letters), and this page prints the counting code that page borrowed: '(one heart)' and '(two lungs)' — PH15 carried it as 'the facing page's G-protein table (book 237 — a separate pending topic)'; that attribution resolves HERE. The pair reads as one system: PH15 names the address, this page names the signal.",
    },
    {
      title: "Autonomic Receptors — the Overview Diagram These Cascades Plug Into",
      topicId: "autonomic-receptors",
      note:
        "The page five before this one (PH11, book 234): the autonomic/somatic overview schematic — the divisions, the ganglia, and the receptor plates at each organ. This page is the transduction layer that schematic implies: the overview draws WHERE the wires go and WHICH receptor sits at each end; this page prints WHAT EACH RECEPTOR'S CLASS DOES once the transmitter arrives — s the accelerator, i the brake, q the squeeze. Every organ plate in the overview is secretly labeled with one of this page's three lanes; the exam asks you to connect them.",
    },
    {
      title: "Sympathomimetics — the Agonist Grid That Rides These Three Lanes",
      topicId: "sympathomimetics",
      note:
        "The completed drug-grid topic (books 240–243): every adrenergic agonist scored by receptor activity. This page supplies the mechanism column of that grid: albuterol selects β2 and inherits the Gs lane (adenylyl cyclase → ↑cAMP → PKA → bronchodilation); phenylephrine selects α1 and inherits the Gq lane (PLC → IP3 + DAG → Ca2+ → vasoconstriction); clonidine selects α2 and inherits the Gi lane (↓cAMP → ↓ NE release); epinephrine reads multiple lanes at once by dose. The grid gives the selectivity story; this page gives the cascade each selection triggers — the two together answer every 'mechanism of action' stem in the sympathomimetic family.",
    },
  ],
  crossLinks: [
    {
      subject: "Cardiology (the cAMP heart — β1 the accelerator, M2 the brake, PDE inhibitors the third way)",
      connection:
        "The heart is this page's composite organ: β1-s raises rate and contractility through 'GS protein → Adenylyl cyclase → ATP → Cyclic AMP → Protein kinase A' ('↑ heart rate, ↑ contractility (one heart)' — cAMP-PKA phosphorylates Ca2+ handling), while M2-i lowers all three through the SAME enzyme inhibited ('↓ heart rate, AV node conduction velocity, and atrial contractility' — the vagal brake; KYP extension: Gi's βγ subunit also opens K+ channels). Every cardiac drug is one of this page's lanes: dobutamine rides β1-s (the inotrope), beta-blockers park ON the β1 receptor, and the PDE-3 inhibitors (milrinone) raise cAMP WITHOUT touching any receptor — the lane's third entrance, downstream at the messenger-breakdown step. The digoxin story is the counter-lane (Ca2+ without IP3), and the AV-node agents (adenosine, diltiazem, digoxin) all converge on the M2-i story's territory.",
    },
    {
      subject: "Endocrinology / Renal (vasopressin's two lanes — V2-s water, V1-q pressure; and the H2-s stomach)",
      connection:
        "The table's vasopressin split IS the renal physiology exam: V2-s → cAMP → PKA → aquaporin-2 insertion ('↑ H2O permeability and reabsorption via upregulating aquaporin-2 in collecting tubules of kidney' — the concentrating mechanism; desmopressin selects it, nephrogenic DI breaks it, lithium and demeclocycline are its antagonists), while V1-q → PLC → Ca2+ ('↑ vascular smooth muscle contraction' — the pressor arm). The SIADH/DI stems are this pair read as urine osmolality; the same hormone also releases vWF via V2-s (the uremia-bleeding story, KYP anchor). The stomach's parallel split: H2-s → cAMP → the parietal acid pump ('↑ gastric acid secretion'; cimetidine blocks it) — the ulcer pharmacology is this page's gas pedal parked at one receptor.",
    },
    {
      subject: "Microbiology (the two toxin stories pick the two cAMP signs)",
      connection:
        "The classic toxin pair is this page's two cAMP lanes weaponized (KYP anchors — neither toxin is printed on the page): CHOLERA TOXIN ADP-ribosylates the Gs α-subunit and locks it ON — adenylyl cyclase runs unchecked, cAMP floods the enterocyte, CFTR-driven chloride and water pour out (the painless-watery secretory diarrhea), while the toxin never touches a receptor; PERTUSSIS TOXIN ADP-ribosylates the Gi α-subunit and locks it OFF — the brake lane is disabled, cAMP rises wherever Gi was holding it down (the ciliary and immune effects of whooping cough; the lymphocytosis story). Same enzyme, opposite sabotage: one jams the gas pedal, one unhooks the brake — both end in ↑cAMP, which is why both questions answer 'adenylyl cyclase is dysregulated through a G protein'.",
    },
    {
      subject: "Psychiatry / Neurology (D1 and D2 split the striatum — the antipsychotic target)",
      connection:
        "The table's dopamine rows carry the movement-disorder exam in two printed strings: D1-s 'activates direct pathway of striatum' and D2-i 'inhibits indirect pathway of striatum' — the direct/indirect balance that Parkinson disease (degeneration of the D2-bearing indirect neurons → less inhibition → the indirect pathway runs unchecked) and Huntington disease (loss of the indirect pathway's own neurons) both ride. The antipsychotics block D2 — the i-lane receptor — which is why their motor side effects look like Parkinsonism (the same pathway read in reverse) and their prolactin story is the tuberoinfundibular D2 read through the same lane (KYP anchors; the table prints the receptor and the pathways, not the drugs). The cocaine/amphetamine story converges here from the transmitter side: more dopamine in the striatum means more of BOTH lanes at once.",
    },
  ],
};
