import type { KypUsMLENote } from "../types";

// Pharmacology — AUTONOMIC DRUGS (PH14 — the MICTURITION WIRING MAP,
// the three nerves, the four receptors, and the four drug rows keyed to
// them). Source: pdf 258 / book 236, the UPPER portion of the page —
// the section header 'Micturition control' under the standing
// 'PHARMACOLOGY—AUTONOMIC DRUGS' banner. The section's ENTIRE printed
// content, carried verbatim: (1) the WIRING DIAGRAM — a full-color
// medical illustration of the bladder and urethra (COPYRIGHTED raster
// tissue art — 3 sep rasters — never reproduced) with vectorized
// labels: the three input nerves ('Pelvic nerve (parasympathetic
// input)', 'Hypogastric nerve (sympathetic input)', 'Pudendal nerve
// (somatic input)'), the three structures ('Detrusor muscle',
// 'Internal urethral sphincter', 'External urethral sphincter'), and
// the four receptor plates ('M₃-receptor' ①, 'β₃-receptor' ②,
// 'α₁-receptor' ③, 'Nicotinic receptor') — the numbered circles key
// the receptors to the numbered rows of the drug table; (2) the margin
// note — 'Micturition center in pons regulates involuntary bladder
// function via coordination of sympathetic and parasympathetic nervous
// systems.'; '⊕ sympathetic → ↑ urinary retention.'; '⊕
// parasympathetic → ↑ urine voiding.'; 'Some autonomic drugs act on
// smooth muscle receptors to treat bladder dysfunction.'; (3) the
// printed margin mnemonic — 'Baby one more time.' with the red first
// letters B·o·m·t = Bethanechol · Oxybutynin · Mirabegron · Tamsulosin
// (the SOURCE'S OWN mnemonic, carried verbatim and attributed); (4) the
// four-row DRUGS/MECHANISM/APPLICATIONS table (bethanechol, oxybutynin,
// mirabegron, tamsulosin — the text layer splits the receptor
// subscripts onto their own lines; the composed rows are carried
// verbatim in the note's table block).
// KYP EXTENSIONS (flagged wherever they appear): the STORAGE-STATE vs
// VOIDING-STATE naming (the book prints the wiring + the two margin
// arrows but never names the states or assigns per-structure
// directions to them); the α₁-CONTRACTION direction of the internal
// sphincter (read off the book's own α1-antagonist row — tamsulosin
// relaxes the bladder-neck/prostate smooth muscle, so α₁ stimulation
// contracts the outlet); the pudendal VOLUNTARY-HOLD reading of the
// external sphincter (the page prints only the labels); the S2–S4
// sacral levels and the Onuf nucleus (classic neuroanatomy, NOT
// printed on the page); the outlet-obstruction-vs-detrusor-failure
// and stress-vs-urgency sorting frames.
// EXCLUSIONS: the 'Tissue distribution of adrenergic receptors'
// section in the LOWER portion of the SAME page is the SEPARATE
// pending topic 'tissue-distribution-of-adrenergic-receptors'
// (EXCLUDED; same-page boundary pinned); pdf 257 carries the COMPLETED
// topics PH12 'acetylcholine-receptors' (upper) and PH13
// 'pain-transmission' (lower; EXCLUDED); pdf 259 opens the SEPARATE
// pending 'G-protein–linked second messengers' section (this section
// ENDS on pdf 258). The wiring diagram's tissue artwork is COPYRIGHTED
// — conveyed as ONE original KYP schematic (MicturitionControlMap),
// never reproduced. Clinical anchors extending past the page
// (postoperative retention, anticholinergic burden in the elderly,
// neurogenic bladder, autonomic dysreflexia, diabetic cystopathy) are
// flagged as KYP clinical anchors wherever they appear.

export const micturitionControl: KypUsMLENote = {
  id: "micturition-control",
  title: "Micturition Control",
  subtitle:
    "Three nerves, four receptors, four drugs: the wiring the whole bladder pharmacology shelf hangs on — the PELVIC nerve (parasympathetic) driving M₃ on the detrusor (contract → empty), the HYPOGASTRIC nerve (sympathetic) driving β₃ on the detrusor (relax → capacity) and α₁ on the internal sphincter (the outlet gate), and the PUDENDAL nerve (somatic) holding the nicotinic-controlled external sphincter — with the pons coordinating the two autonomic states ('⊕ sympathetic → ↑ urinary retention. ⊕ parasympathetic → ↑ urine voiding.') and the book's own mnemonic 'Baby one more time.' keying the four drug rows (Bethanechol, Oxybutynin, Mirabegron, Tamsulosin).",
  subject: "Pharmacology",
  system:
    "Section II · Pharmacology — Autonomic Drugs (the banner this page shares with drug-effect-modifications, autonomic-receptors, acetylcholine-receptors, and pain-transmission before it — the Micturition control section occupies the UPPER portion of the book-236 page, with the separate Tissue distribution of adrenergic receptors section below it)",
  pilotCategory:
    "The micturition page's complete architecture — the WIRING DIAGRAM (three input nerves onto three structures carrying four receptor plates: detrusor M₃ + β₃, internal sphincter α₁, external sphincter nicotinic), the margin physiology (the pontine micturition center coordinating sympathetic retention vs parasympathetic voiding), the printed mnemonic 'Baby one more time.' (Bethanechol · Oxybutynin · Mirabegron · Tamsulosin), and the four-row drug table (muscarinic agonists → urinary retention; muscarinic antagonists and sympathomimetics → urgency incontinence; α1-antagonists → BPH), plus the KYP two-state layer that reads every stem through storage vs voiding.",
  difficulty: 2,
  readTime: 8,
  sourceRef:
    "First Aid 2026, Part 1 pp. 236 (Pharmacology — Autonomic Drugs: Micturition control — the section's wiring diagram with its three nerves 'Pelvic nerve (parasympathetic input)', 'Hypogastric nerve (sympathetic input)', 'Pudendal nerve (somatic input)', its three structures 'Detrusor muscle', 'Internal urethral sphincter', 'External urethral sphincter', and its four receptor plates 'M₃-receptor' ①, 'β₃-receptor' ②, 'α₁-receptor' ③, 'Nicotinic receptor'; the margin note 'Micturition center in pons regulates involuntary bladder function via coordination of sympathetic and parasympathetic nervous systems. ⊕ sympathetic → ↑ urinary retention. ⊕ parasympathetic → ↑ urine voiding. Some autonomic drugs act on smooth muscle receptors to treat bladder dysfunction.'; the printed mnemonic 'Baby one more time.' (red initials B·o·m·t = Bethanechol, Oxybutynin, Mirabegron, Tamsulosin — the source's own); and the four-row drug table verbatim — the table's receptor subscripts print on their own lines in the text layer, composed inline here; the storage/voiding state naming, the α₁-contraction direction, the pudendal voluntary-hold reading, and the S2–S4/Onuf anchors are KYP extensions; the Tissue distribution of adrenergic receptors section on the same page is EXCLUDED — it is the separate pending tissue-distribution-of-adrenergic-receptors topic)",
  tags: [
    "micturition",
    "micturition control",
    "urinary bladder",
    "detrusor muscle",
    "internal urethral sphincter",
    "external urethral sphincter",
    "pelvic nerve",
    "hypogastric nerve",
    "pudendal nerve",
    "parasympathetic",
    "sympathetic",
    "somatic",
    "M3 receptor",
    "β3 receptor",
    "α1 receptor",
    "nicotinic receptor",
    "pontine micturition center",
    "urinary retention",
    "urgency incontinence",
    "bladder capacity",
    "detrusor overactivity",
    "bethanechol",
    "muscarinic agonists",
    "oxybutynin",
    "muscarinic antagonists",
    "mirabegron",
    "sympathomimetics",
    "tamsulosin",
    "α1-antagonists",
    "BPH",
    "benign prostatic hyperplasia",
    "bladder emptying",
    "urinary obstruction",
    "baby one more time",
    "autonomic drugs",
    "pharmacology",
  ],
  core: {
    what:
      "THREE NERVES, FOUR RECEPTORS, TWO STATES, FOUR DRUGS. The page prints a wiring diagram of the bladder and its outlet, and every exam question about it is the same wiring read one way or another. THE INPUT NERVES: 'Pelvic nerve (parasympathetic input)' — the parasympathetic lane; 'Hypogastric nerve (sympathetic input)' — the sympathetic lane, which BRANCHES to two different structures; 'Pudendal nerve (somatic input)' — the somatic, voluntary lane. THE STRUCTURES AND THEIR RECEPTOR PLATES: the 'Detrusor muscle' (the bladder wall — the pump) carries TWO plates, 'M₃-receptor' ① and 'β₃-receptor' ②; the 'Internal urethral sphincter' (the involuntary smooth-muscle outlet) carries 'α₁-receptor' ③; the 'External urethral sphincter' (the voluntary skeletal-muscle cuff) carries 'Nicotinic receptor'. THE TWO STATES, in the book's own margin arrows: '⊕ sympathetic → ↑ urinary retention.' (STORAGE — the hypogastric lane dominates: β₃ relaxes the detrusor so it can fill — the mirabegron row prints '⊕ β₃ receptor → relaxation of detrusor smooth muscle → ↑ bladder capacity' — while α₁ closes the internal sphincter outlet, a direction read off the tamsulosin row, which RELAXES 'smooth muscle (eg, bladder, neck, prostate)' when it BLOCKS α₁) and '⊕ parasympathetic → ↑ urine voiding.' (VOIDING — the pelvic lane dominates: M₃ contracts the detrusor, the bethanechol row printing it verbatim: '⊕ M₃ receptor → contraction of detrusor smooth muscle → ↑ bladder emptying'). THE DRUGS, one row per receptor key: muscarinic agonists (bethanechol) — ⊕ M₃ → contraction → ↑ bladder emptying → 'Urinary retention'; muscarinic antagonists (oxybutynin) — ⊝ M₃ → relaxation → ↓ detrusor overactivity → 'Urgency incontinence'; sympathomimetics (mirabegron) — ⊕ β₃ → relaxation → ↑ bladder capacity → 'Urgency incontinence'; α1-antagonists (tamsulosin) — ⊝ α₁ → relaxation of smooth muscle (eg, bladder, neck, prostate) → ↓ urinary obstruction → 'BPH'.",
    why:
      "WHY A WIRING PAGE SITS IN THE AUTONOMIC DRUGS CHAPTER. The margin's own bridge sentence says it: 'Some autonomic drugs act on smooth muscle receptors to treat bladder dysfunction.' — the bladder is a two-system organ (a sympathetic storage mode and a parasympathetic voiding mode, coordinated by the pons: 'Micturition center in pons regulates involuntary bladder function via coordination of sympathetic and parasympathetic nervous systems.'), and each drug row is nothing more than a key turned in one of the four printed receptor locks. WHY THE DETRUSOR CARRIES TWO OPPOSITE PLATES: the bladder wall is the one structure that both systems innervate — M₃ (parasympathetic, pelvic) makes it CONTRACT (squeeze to empty) and β₃ (sympathetic, hypogastric) makes it RELAX (stretch to store) — which is why the same organ answers to bethanechol (M₃ agonist — empty it) and to mirabegron (β₃ agonist — let it hold more): the two 'Urgency incontinence' answers, oxybutynin and mirabegron, calm the SAME muscle through OPPOSITE locks (block the M₃ squeeze or stimulate the β₃ stretch). WHY THE OUTLET IS SPLIT IN TWO: the 'Internal urethral sphincter' is smooth muscle with an α₁ plate — the sympathetic gate, closed during storage (α₁ contraction — read off the tamsulosin row, which relaxes the same tissue when it blocks α₁) and the site of the BPH story (the prostate and bladder neck share the α₁-smooth-muscle territory, so tamsulosin '↓ urinary obstruction' by relaxing it); the 'External urethral sphincter' is skeletal muscle with a Nicotinic plate on the pudendal (somatic) lane — the VOLUNTARY hold, the only consciously controlled element in the wiring (KYP anchors: the Onuf nucleus, S2–S4). WHY THE STATES ARE THE READING TOOL: the book's two arrows compress the entire physiology — sympathetic = retention (a relaxed pump behind a closed gate), parasympathetic = voiding (a squeezing pump behind an open gate) — and every clinical stem is one of the two states broken (retention: the pump cannot squeeze, or the gate will not open; incontinence: the pump will not stay calm, or the hold fails), so the drug question reduces to WHICH LOCK IS BROKEN, and the four rows to WHICH KEY FITS.",
    keyIdea:
      "Read every bladder stem through two anchors. ANCHOR 1 — NAME THE STATE: is the problem RETENTION ('⊕ sympathetic → ↑ urinary retention.' run amok — the bladder cannot empty) or INCONTINENCE (the voiding system firing when it should not — 'Urgency incontinence' is the printed application of both calming drugs)? ANCHOR 2 — LOCATE THE LOCK, THEN READ THE KEY: retention from a weak pump → M₃ AGONIST (bethanechol — 'contraction of detrusor smooth muscle → ↑ bladder emptying'); retention from an obstructed outlet → α₁ ANTAGONIST (tamsulosin — 'relaxation of smooth muscle (eg, bladder, neck, prostate) → ↓ urinary obstruction', the BPH row); urgency incontinence from an overactive pump → M₃ ANTAGONIST (oxybutynin — 'relaxation of detrusor smooth muscle → ↓ detrusor overactivity') OR β₃ AGONIST (mirabegron — 'relaxation of detrusor smooth muscle → ↑ bladder capacity') — two keys, same lock-muscle, same application. The exam's one-line summary: THE RECEPTOR NAMES THE DRUG — M₃ = the parasympathetic pump key (bethanechol on it, oxybutynin against it), β₃ = the sympathetic capacity key (mirabegron on it), α₁ = the sympathetic gate key (tamsulosin against it), and the nicotinic plate on the external sphincter is the voluntary lane no row of this table targets (KYP anchor).",
  },
  mechanisms: [
    {
      id: "sympathetic-storage-wiring",
      title:
        "The STORAGE mechanism: filling bladder → hypogastric nerve (sympathetic input) → β₃ on the detrusor (relaxation, ↑ bladder capacity) + α₁ on the internal urethral sphincter (contraction — outlet closed) → urinary retention — the book's own arrow '⊕ sympathetic → ↑ urinary retention.'",
      context:
        "The wiring diagram's sympathetic lane + the margin note (book 236): 'Hypogastric nerve (sympathetic input)' branching to the 'Detrusor muscle' (β₃-receptor ②) and to the 'Internal urethral sphincter' (α₁-receptor ③); the arrow '⊕ sympathetic → ↑ urinary retention.'; the mirabegron row ('⊕ β₃ receptor → relaxation of detrusor smooth muscle → ↑ bladder capacity') and the tamsulosin row ('⊝ α₁-receptor → relaxation of smooth muscle (eg, bladder, neck, prostate) → ↓ urinary obstruction') supply the printed directions. The state NAME 'storage', the α₁-contraction direction (inferred from the antagonist row), and the storage-state framing are KYP extensions beyond the page's printed set.",
      flow: {
        nodes: [
          {
            id: "input",
            label: "The bladder fills — and the pons coordinates the hold",
            sublabel:
              "Input — the margin note's opening sentence, verbatim: 'Micturition center in pons regulates involuntary bladder function via coordination of sympathetic and parasympathetic nervous systems.' Micturition is not a local reflex — a pontine center runs it, choosing between two coordinated autonomic modes. As filling begins, the center tilts toward the sympathetic mode: hold the urine. (KYP anchor beyond the page: the pontine storage/voiding coordination centers, the classic neuroanatomy of the Barrington-complex region — the page prints only 'Micturition center in pons.')",
            variant: "input",
          },
          {
            id: "hypogastric",
            label: "HYPOGASTRIC OUTFLOW (sympathetic input) — the lane that branches to TWO locks",
            sublabel:
              "The wiring diagram's middle nerve, verbatim: 'Hypogastric nerve (sympathetic input)'. Its branches reach both the 'Detrusor muscle' at the 'β₃-receptor' ② plate and the 'Internal urethral sphincter' at the 'α₁-receptor' ③ plate — the only nerve on the diagram that innervates two different structures with two different receptors. One system, two jobs in the storage state: calm the pump AND close the gate.",
            variant: "process",
          },
          {
            id: "beta3-detrusor",
            label: "β₃ on the detrusor → RELAXATION → ↑ bladder capacity (the pump stretches to hold)",
            sublabel:
              "The book's own drug row prints the direction: '⊕ β₃ receptor → relaxation of detrusor smooth muscle → ↑ bladder capacity' (the mirabegron row). Sympathetic stimulation of the bladder wall does NOT excite it — it lets the smooth muscle stretch, so an enlarging bladder stays low-pressure and comfortable. This is the counterintuitive half of autonomic pharmacology: a SYMPATHOMIMETIC that relaxes an organ. Storage cannot work without it — a contracted pump against a closed gate is pain, not storage.",
            variant: "process",
          },
          {
            id: "alpha1-outlet",
            label: "α₁ on the internal urethral sphincter → CONTRACTION — the outlet gate closes (KYP reading of the antagonist row)",
            sublabel:
              "The page prints the plate ('α₁-receptor' ③ on the 'Internal urethral sphincter') and the BLOCKADE direction in the tamsulosin row: '⊝ α₁-receptor → relaxation of smooth muscle (eg, bladder, neck, prostate) → ↓ urinary obstruction.' The stimulation direction follows by symmetry (KYP reading, not a printed sentence): α₁ stimulation CONTRACTS the bladder-neck/internal-sphincter smooth muscle and closes the outlet. The internal sphincter is INVOLUNTARY smooth muscle — the patient does not choose this gate; the sympathetic system does.",
            variant: "process",
          },
          {
            id: "output",
            label: "RESULT — '⊕ sympathetic → ↑ urinary retention.' — the storage state: a relaxed pump behind a closed gate",
            sublabel:
              "Output — the book's own margin arrow, verbatim. Storage = retention by design: the hypogastric lane holds the bladder relaxed (β₃) and the outlet closed (α₁) until voiding is appropriate. The exam's payoff: anything that mimics this state produces retention — an anticholinergic removes the parasympathetic squeeze (oxybutynin's own listed application is the flip: it CALMS the overactive detrusor), an α₁ agonist tightens the gate, and anything that blocks it produces the opposite (the tamsulosin row: '↓ urinary obstruction').",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "hypogastric", label: "the pontine center tilts to the sympathetic mode as the bladder fills" },
          { from: "hypogastric", to: "beta3-detrusor", label: "branch 1 — to the detrusor's β₃ plate" },
          { from: "hypogastric", to: "alpha1-outlet", label: "branch 2 — to the internal sphincter's α₁ plate" },
          { from: "beta3-detrusor", to: "output", label: "relaxed pump + closed gate = urine held" },
          { from: "alpha1-outlet", to: "output", label: "storage achieved — '↑ urinary retention'" },
        ],
      },
    },
    {
      id: "parasympathetic-voiding-wiring",
      title:
        "The VOIDING mechanism: pelvic nerve (parasympathetic input) → M₃ on the detrusor → contraction → ↑ bladder emptying, with the pudendal (somatic) lane releasing the nicotinic-controlled external sphincter — the book's own arrow '⊕ parasympathetic → ↑ urine voiding.'",
      context:
        "The wiring diagram's parasympathetic + somatic lanes + the margin note (book 236): 'Pelvic nerve (parasympathetic input)' to the 'Detrusor muscle' (M₃-receptor ①); 'Pudendal nerve (somatic input)' to the 'External urethral sphincter' (Nicotinic receptor); the arrow '⊕ parasympathetic → ↑ urine voiding.'; the bethanechol row ('⊕ M₃ receptor → contraction of detrusor smooth muscle → ↑ bladder emptying') supplies the printed pump direction. The voluntary-hold reading of the pudendal lane, the internal-sphincter relaxation during voiding, the Onuf-nucleus and S2–S4 anchors, and the state NAME 'voiding' are KYP extensions beyond the page's printed set.",
      flow: {
        nodes: [
          {
            id: "input",
            label: "The pons switches coordination to voiding — the same center, the other system",
            sublabel:
              "Input — the same margin sentence runs both states: 'Micturition center in pons regulates involuntary bladder function via coordination of sympathetic and parasympathetic nervous systems.' When voiding is appropriate, the coordination flips: parasympathetic outflow rises, sympathetic storage tone falls, and the somatic lane lets go. The infant does this purely reflexively (the margin says 'involuntary bladder function' — the voluntary hold is learned later; KYP anchor), and the adult adds the pudendal veto.",
            variant: "input",
          },
          {
            id: "pelvic",
            label: "PELVIC OUTFLOW (parasympathetic input) — the pump lane",
            sublabel:
              "The wiring diagram's upper nerve, verbatim: 'Pelvic nerve (parasympathetic input)', drawn to the 'Detrusor muscle' at the 'M₃-receptor' ① plate. One nerve, one target, one receptor — the simplest lane on the diagram, and the one the two muscarinic drug rows live on (bethanechol turns the key, oxybutynin jams the lock).",
            variant: "process",
          },
          {
            id: "m3-detrusor",
            label: "M₃ on the detrusor → CONTRACTION → ↑ bladder emptying (the pump squeezes)",
            sublabel:
              "The book's own drug row prints the direction verbatim: '⊕ M₃ receptor → contraction of detrusor smooth muscle → ↑ bladder emptying' (the bethanechol row — the table's ① key matches the diagram's ① plate). M₃ is a Gq-coupled muscarinic receptor (KYP anchor from the book-237 G-protein table, a separate pending topic) — its intracellular signal is the IP3/Ca2+ cascade of smooth-muscle contraction. This single plate is why 'parasympathetic → voiding': the pump squeezes, pressure rises, and urine leaves if the outlet permits.",
            variant: "target",
          },
          {
            id: "pudendal-hold",
            label: "The PUDENDAL lane (somatic input) — the Nicotinic plate on the external sphincter: the VOLUNTARY hold",
            sublabel:
              "The wiring diagram's lower lane, verbatim: 'Pudendal nerve (somatic input)' drawn to the 'External urethral sphincter' at the 'Nicotinic receptor' plate — the only somatic, skeletal-muscle, consciously controlled element in the wiring (the page prints the labels; the voluntary-hold reading, the Onuf nucleus, and the S2–S4 sacral origin of the pelvic and pudendal nerves are KYP anchors beyond the page). During voiding this lane RELEASES the hold; during storage it provides the learned continence brake that overrides the reflex. No drug row of this table targets it — but the exam does (KYP clinical anchors: the neurogenic bladder of sacral cord injury, the external-sphincter dyssynergia story).",
            variant: "process",
          },
          {
            id: "output",
            label: "RESULT — '⊕ parasympathetic → ↑ urine voiding.' — the voiding state: a squeezing pump behind an open outlet",
            sublabel:
              "Output — the book's own margin arrow, verbatim. Voiding = the mirror of storage: the pelvic lane contracts the pump (M₃) while the sympathetic storage tone is withdrawn (the internal sphincter's α₁-driven closure relaxes — KYP reading of the same tamsulosin row read backwards) and the pudendal hold releases. The exam's payoff: the voiding state's one printed drug key is the M₃ agonist for the pump that cannot squeeze (bethanechol for 'Urinary retention'), and every drug that pushes toward the storage state (M₃ antagonists, β₃ agonists) pushes away from emptying — the same mechanism that treats 'Urgency incontinence' can CAUSE retention in a bladder that already cannot empty.",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "pelvic", label: "the pontine center tilts to the parasympathetic mode" },
          { from: "pelvic", to: "m3-detrusor", label: "ACh on the M₃ plate of the detrusor" },
          { from: "m3-detrusor", to: "output", label: "the pump squeezes — '↑ bladder emptying'" },
          { from: "pudendal-hold", to: "output", label: "the voluntary hold releases — the external sphincter opens" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "micturition-control-map",
      title: "The micturition-control wiring map (an original KYP visual)",
      caption:
        "An original KYP schematic conveying the section's wiring diagram (book 236 — the copyrighted tissue artwork is never reproduced): the three INPUT NERVE LANES on the left (Pelvic — parasympathetic, Hypogastric — sympathetic, branching to two locks, Pudendal — somatic); the BLADDER/URETHRA GLYPH COLUMN with its three outlet levels (Detrusor muscle carrying the M₃ ① and β₃ ② plates; Internal urethral sphincter carrying α₁ ③; External urethral sphincter carrying the Nicotinic plate); the STORAGE panel (sympathetic — the book's own arrow '⊕ sympathetic → ↑ urinary retention.' with β₃ relaxation + α₁ gate closure) and the VOIDING panel (parasympathetic — '⊕ parasympathetic → ↑ urine voiding.' with M₃ contraction + the pudendal release); the verbatim margin-note strip (the pontine center sentence + both arrows); the four-row DRUG strip keyed ①②③ to the receptor plates (bethanechol, oxybutynin, mirabegron, tamsulosin with their verbatim mechanisms and applications); and the four-code strip (the book's own 'Baby one more time.' + three KYP originals).",
      notice:
        "Census (pdfimages + VLM): the source diagram is a FULL-COLOR MEDICAL ILLUSTRATION (3 sep rasters — the tissue artwork is COPYRIGHTED and is NEVER reproduced); this visual conveys it as an ORIGINAL_KYP_REDRAW-style schematic — original KYP glyphs; nothing reproduced; the printed labels are carried and attributed. KYP extensions flagged on the map: the storage/voiding state panels' names, the α₁-contraction direction (read off the tamsulosin row), the pudendal voluntary-hold reading, and the S2–S4/Onuf anchors. The 'Tissue distribution of adrenergic receptors' section below the figure on the same page is EXCLUDED (the separate pending topic). The 'Baby one more time.' code is the SOURCE'S OWN printed mnemonic (red initials B·o·m·t — VLM-verified); the other three codes are KYP-original.",
    },
    {
      kind: "table",
      title: "Book 236 — the Micturition control section, verbatim",
      intro:
        "The section's entire printed content beside and below the diagram: the margin note (the pontine center sentence, the two autonomic arrows, and the drug-bridge sentence), the printed mnemonic, and the four-row drug table. Every mechanism string is carried whole — the table's receptor subscripts print on their own lines in the PDF text layer (the ₃ of M₃, the ₃ of β₃, the ₁ of α₁) and are composed inline here.",
      columns: [
        "THE SECTION'S TEXT (book 236, verbatim)",
        "WHAT IT ESTABLISHES",
      ],
      rows: [
        [
          "Micturition center in pons regulates involuntary bladder function via coordination of sympathetic and parasympathetic nervous systems. ⊕ sympathetic → ↑ urinary retention. ⊕ parasympathetic → ↑ urine voiding. Some autonomic drugs act on smooth muscle receptors to treat bladder dysfunction. Baby one more time.",
          "The margin physiology, whole: (1) a PONTINE CENTER runs the show — micturition is coordinated centrally, not locally; (2) the TWO ARROWS are the section's compressed physiology — sympathetic activity HOLDS urine (retention), parasympathetic activity RELEASES it (voiding); (3) the drug-bridge sentence explains why the section sits in Autonomic Drugs — the drugs act at the smooth-muscle receptors the diagram just labeled; (4) the printed mnemonic 'Baby one more time.' (red initials B·o·m·t) keys the four drug rows in table order — Bethanechol, Oxybutynin, Mirabegron, Tamsulosin (the source's own mnemonic, carried verbatim).",
        ],
        [
          "Muscarinic agonists (eg, bethanechol) — ⊕ M₃ receptor → contraction of detrusor smooth muscle → ↑ bladder emptying. APPLICATIONS: Urinary retention.",
          "Drug row ①a — the pump key turned ON. Bethanechol stimulates the M₃ plate the pelvic nerve (parasympathetic) drives: the detrusor CONTRACTS and the bladder EMPTIES. The application names the broken state it fixes — retention from a pump that will not squeeze (KYP clinical anchors: postoperative retention, the atonic bladder of diabetic cystopathy). The ① on the diagram's M₃ plate keys this row.",
        ],
        [
          "Muscarinic antagonists (eg, oxybutynin) — ⊝ M₃ receptor → relaxation of detrusor smooth muscle → ↓ detrusor overactivity. APPLICATIONS: Urgency incontinence.",
          "Drug row ①b — the SAME pump key jammed. Oxybutynin blocks the same M₃ plate bethanechol stimulates: the detrusor RELAXES and its overactivity CALMS. Same receptor as row ①a, opposite action, opposite application — the cleanest agonist/antagonist pair on the page, and the source of the classic anticholinergic trade-off (KYP anchor: dry mouth, constipation, and retention when the bladder already cannot empty).",
        ],
        [
          "Sympathomimetics (eg, mirabegron) — ⊕ β₃ receptor → relaxation of detrusor smooth muscle → ↑ bladder capacity. APPLICATIONS: Urgency incontinence.",
          "Drug row ② — the sympathetic capacity key turned ON. Mirabegron stimulates the β₃ plate the hypogastric nerve (sympathetic) drives: the detrusor RELAXES and HOLDS MORE. The counterintuitive row — a sympathomimetic that relaxes — and the second of the two 'Urgency incontinence' answers: two different receptors (M₃ blocked vs β₃ stimulated), one same calm detrusor. The ② on the diagram's β₃ plate keys this row.",
        ],
        [
          "α1-antagonists (eg, tamsulosin) — ⊝ α₁-receptor → relaxation of smooth muscle (eg, bladder, neck, prostate) → ↓ urinary obstruction. APPLICATIONS: BPH.",
          "Drug row ③ — the GATE key jammed. Tamsulosin blocks the α₁ plate on the internal-sphincter/bladder-neck/prostate smooth muscle: the outlet RELAXES and the obstruction FALLS. The only row that acts at the OUTLET rather than the pump — and the printed evidence for the α₁ direction (blockade relaxes, so stimulation contracts: storage closes the gate). The ③ on the diagram's α₁ plate keys this row; the application is the prostate story of BPH (KYP anchor: the transitional-zone adenoma compressing the urethra).",
        ],
      ],
      caption:
        "One wiring, four keys, four applications. The margin note gives the states (sympathetic retention, parasympathetic voiding) and the mnemonic keys the rows (Baby One More Time = Bethanechol, Oxybutynin, Mirabegron, Tamsulosin); the table then maps each drug onto the receptor plate the diagram just labeled — M₃ twice (agonist for retention, antagonist for urgency incontinence), β₃ once (agonist for urgency incontinence), α₁ once (antagonist for BPH). Note what the table does NOT contain: no row targets the Nicotinic plate on the external sphincter — the voluntary somatic lane has no drug on this page (the exam notices; KYP anchor).",
    },
    {
      kind: "table",
      title: "The structure × receptor × nerve × drug key map (KYP pivot of the page's own wiring + table)",
      intro:
        "The book prints the wiring diagram and the drug table as two separate elements (the numbered circles ①②③ hint at the join); this map pivots them — each structure against its nerve, its receptor, its job in each state, and the drug that targets it. Every cell is the book's own printed element (the state names, the storage-column directions for α₁, and the sorting frames are KYP, flagged); the map view itself is KYP's.",
      columns: [
        "STRUCTURE",
        "NERVE (the book's labels)",
        "RECEPTOR",
        "IN STORAGE (sympathetic)",
        "IN VOIDING (parasympathetic)",
        "THE DRUG KEY (the book's rows)",
      ],
      rows: [
        [
          "Detrusor muscle — the pump (bladder wall)",
          "Pelvic nerve (parasympathetic input)",
          "M₃ ①",
          "Quiet — the parasympathetic lane is off (and oxybutynin keeps it off: '↓ detrusor overactivity')",
          "CONTRACTS — 'contraction of detrusor smooth muscle → ↑ bladder emptying' (the printed M₃ direction)",
          "AGONIST = bethanechol ('Urinary retention') · ANTAGONIST = oxybutynin ('Urgency incontinence') — the only lock with BOTH directions printed",
        ],
        [
          "Detrusor muscle — the pump (bladder wall)",
          "Hypogastric nerve (sympathetic input)",
          "β₃ ②",
          "RELAXES — 'relaxation of detrusor smooth muscle → ↑ bladder capacity' (the printed β₃ direction: the pump stretches to hold)",
          "Quiet — the sympathetic lane is withdrawn as voiding begins (KYP reading of the state flip)",
          "AGONIST = mirabegron ('Urgency incontinence') — the sympathomimetic that relaxes; no antagonist row printed",
        ],
        [
          "Internal urethral sphincter — the involuntary gate (smooth muscle)",
          "Hypogastric nerve (sympathetic input)",
          "α₁ ③",
          "CONTRACTS — the outlet closes (KYP reading: the tamsulosin row prints the blockade direction — 'relaxation of smooth muscle (eg, bladder, neck, prostate)' — so α₁ stimulation contracts)",
          "RELAXES — the gate opens as sympathetic tone falls (KYP reading of the same row backwards)",
          "ANTAGONIST = tamsulosin ('BPH' — '↓ urinary obstruction'); no agonist row printed (an α₁ agonist would tighten the gate — a KYP trap reading)",
        ],
        [
          "External urethral sphincter — the voluntary hold (skeletal muscle)",
          "Pudendal nerve (somatic input)",
          "Nicotinic (no number — no drug row)",
          "CONTRACTS — the learned continence brake: the voluntary hold (the page prints the labels; the voluntary reading, the Onuf nucleus, and S2–S4 are KYP anchors)",
          "RELAXES — the hold releases and voiding proceeds (the somatic veto lifted)",
          "NONE on this page — no printed row targets the nicotinic plate (the exam's favorite 'which lane has no drug' observation; KYP anchor)",
        ],
      ],
      caption:
        "The patterns the flat diagram hides (all KYP readings of the book's own cells): the DETRUSOR is the only structure with TWO plates (M₃ parasympathetic squeeze + β₃ sympathetic stretch) — and the only structure with both a printed agonist AND a printed antagonist; the HYPOGASTRIC nerve is the only nerve with TWO targets (the pump's β₃ and the gate's α₁) — storage is a two-lock operation; the OUTLET is split into an involuntary α₁ gate and a voluntary nicotinic hold (smooth vs skeletal, autonomic vs somatic); and the two 'Urgency incontinence' drugs calm the same pump through OPPOSITE locks (oxybutynin jams M₃, mirabegron turns β₃). Sorting frames (KYP): retention from a weak pump → M₃ agonist; retention from an obstructed outlet → α₁ antagonist; urgency incontinence → M₃ antagonist or β₃ agonist.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem:
          "A 38-year-old woman has urinary retention on the first postoperative day after pelvic surgery — she has not voided in 14 hours, bladder scan shows 700 mL, and she is uncomfortable. A drug is chosen to empty the bladder. The question asks for the agent's mechanism.",
        discriminator:
          "'Muscarinic agonists (eg, bethanechol): ⊕ M₃ receptor → contraction of detrusor smooth muscle → ↑ bladder emptying' with APPLICATIONS 'Urinary retention' — the pump key turned ON",
        concept: "Urinary retention → the M₃ agonist (bethanechol) — squeeze the pump",
        answer:
          "Bethanechol, a muscarinic agonist: '⊕ M₃ receptor → contraction of detrusor smooth muscle → ↑ bladder emptying.' The stem's broken state is retention with a pump that will not squeeze (postoperative retention — a classic KYP clinical-anchor setting; also the atonic bladder of diabetes or spinal cord injury), and the printed row for 'Urinary retention' is exactly this mechanism — it mimics the pelvic (parasympathetic) lane's job in the voiding state. Sort first (KYP frame): retention, and the outlet is not obstructed — so the problem is the pump, and the pump's lock is M₃.",
      },
      {
        stem:
          "A 67-year-old woman has urge incontinence — sudden, overwhelming urgency with involuntary leakage, many times a day; urodynamics show involuntary detrusor contractions during filling. An oral agent is chosen. The question asks which receptor the drug acts at, or asks to choose between two candidate agents with different mechanisms.",
        discriminator:
          "Two printed rows share the APPLICATION 'Urgency incontinence' with DIFFERENT receptors: '⊝ M₃ receptor → relaxation of detrusor smooth muscle → ↓ detrusor overactivity' (oxybutynin) and '⊕ β₃ receptor → relaxation of detrusor smooth muscle → ↑ bladder capacity' (mirabegron)",
        concept: "Urgency incontinence → calm the detrusor: M₃ antagonist OR β₃ agonist — two locks, one goal",
        answer:
          "Either printed answer calms the same pump through an opposite lock: oxybutynin BLOCKS the M₃ plate ('relaxation of detrusor smooth muscle → ↓ detrusor overactivity') or mirabegron STIMULATES the β₃ plate ('relaxation of detrusor smooth muscle → ↑ bladder capacity'). The overactive detrusor is an M₃-driven pump firing when it should be stretching, so blocking the parasympathetic squeeze (M₃ antagonist) or enhancing the sympathetic stretch (β₃ agonist) both restore storage. The exam's discriminator between them is the side-effect profile, not the application (KYP anchors: oxybutynin's anticholinergic burden vs mirabegron's hypertension) — the printed page gives both rows the same application word for word.",
      },
      {
        stem:
          "A 71-year-old man has months of urinary hesitancy, a weak and intermittent stream, nocturia, and a sensation of incomplete emptying; examination notes an enlarged, smooth prostate and a post-void residual of 250 mL. A drug is chosen to relieve the obstruction. The question asks for its mechanism.",
        discriminator:
          "'α1-antagonists (eg, tamsulosin): ⊝ α₁-receptor → relaxation of smooth muscle (eg, bladder, neck, prostate) → ↓ urinary obstruction' with APPLICATIONS 'BPH' — the gate key jammed",
        concept: "BPH obstruction → the α₁ antagonist (tamsulosin) — open the outlet, not the pump",
        answer:
          "Tamsulosin, an α1-antagonist: '⊝ α₁-receptor → relaxation of smooth muscle (eg, bladder, neck, prostate) → ↓ urinary obstruction.' The stem's broken state is retention from an OBSTRUCTED OUTLET (the prostate and bladder neck — the α₁-smooth-muscle territory the row itself names), so the fix is the gate, not the pump: block α₁, the bladder-neck/prostatic smooth muscle relaxes, and the obstruction falls. This row is also the printed evidence for the α₁ direction itself — blockade relaxes, so sympathetic α₁ stimulation contracts (closes) the internal sphincter during storage (KYP reading). Distinguish from the other retention drug (KYP frame): bethanechol squeezes the pump — useful when the PUMP is weak, wrong when the GATE is stuck.",
      },
    ],
    traps: [
      {
        a: "Bethanechol and oxybutynin are interchangeable bladder drugs — both 'act on the bladder,' so either can be used for either retention or incontinence",
        b: "Conflating the two M₃ rows because they share one receptor and one diagram plate (the ① key), so their opposite actions blur into one 'bladder medication' concept",
        whyConfused:
          "The two rows sit adjacent in the table, share the same receptor name (M₃), and even share the same numbered circle on the diagram — the only difference printed is the direction glyph (⊕ vs ⊝)",
        keyDifference:
          "The directions are opposites and so are the applications: 'Muscarinic agonists (eg, bethanechol): ⊕ M₃ receptor → contraction of detrusor smooth muscle → ↑ bladder emptying' → 'Urinary retention' (empty the bladder) vs 'Muscarinic antagonists (eg, oxybutynin): ⊝ M₃ receptor → relaxation of detrusor smooth muscle → ↓ detrusor overactivity' → 'Urgency incontinence' (calm the bladder). Give oxybutynin to a retaining patient and you have CAUSED retention — the same M₃ blockade that treats urgency incontinence is the classic anticholinergic retention mechanism (KYP anchor).",
        clue:
          "Before matching any bladder drug, name the state (retention vs incontinence) and the direction (⊕ vs ⊝). Mnemonic: the BO of BABY ONE MORE TIME — Bethanechol empties, Oxybutynin obstructs (calms) — the book's own mnemonic keys BOTH M₃ rows and their order.",
      },
      {
        a: "A sympathomimetic must stimulate the bladder — 'sympathetic' means excitatory, so mirabegron should contract the detrusor and promote voiding",
        b: "Carrying the 'fight-or-flight = activate' intuition onto the bladder, where the sympathetic job is exactly the opposite: storage",
        whyConfused:
          "In most organs sympathetic stimulation is the exciting mode (heart, vessels, pupils), and 'sympathomimetic' sounds like an energizer — the idea that it RELAXES a smooth muscle to make the bladder HOLD more is counterintuitive",
        keyDifference:
          "The book's row prints it exactly: 'Sympathomimetics (eg, mirabegron): ⊕ β₃ receptor → relaxation of detrusor smooth muscle → ↑ bladder capacity' — APPLICATIONS 'Urgency incontinence.' The sympathetic lane is the STORAGE lane (the margin's own arrow: '⊕ sympathetic → ↑ urinary retention.'), and β₃ is its detrusor lock: stimulation stretches the pump, it does not squeeze it. The bladder is the organ where sympathetic means relax-and-hold.",
        clue:
          "Recall the margin's two arrows before touching options: SYMPATHETIC HOLDS, PARASYMPATHETIC FLOWS — so a sympathomimetic on the bladder holds (relaxes) it. Mirabegron's application ('Urgency incontinence') is the give-away: you cannot treat leakage with a drug that squeezes.",
      },
      {
        a: "Tamsulosin treats BPH by shrinking the prostate, or by contracting the internal sphincter to 'strengthen' the outlet — and anticholinergics are a reasonable add-on for the hesitancy",
        b: "Misreading the α₁ row's direction (it is an ANTAGONIST that RELAXES), and misassigning the internal (involuntary, smooth, α₁) vs external (voluntary, skeletal, nicotinic) sphincters",
        whyConfused:
          "'Blocker for a blockage' sounds paradoxical — students flip the direction and assume the drug must tighten or shrink something; and the two sphincters share the word 'sphincter' while differing in every other way",
        keyDifference:
          "The printed row: 'α1-antagonists (eg, tamsulosin): ⊝ α₁-receptor → relaxation of smooth muscle (eg, bladder, neck, prostate) → ↓ urinary obstruction' — APPLICATIONS 'BPH.' The blockade RELAXES the bladder-neck/prostatic smooth muscle and OPENS the outlet (the same α₁ plate the diagram draws on the 'Internal urethral sphincter'); α₁ STIMULATION is what contracts and closes it during storage (KYP reading of the same row). And the sphincters are different tissues: internal = involuntary smooth muscle with the α₁ plate (hypogastric/sympathetic); external = voluntary skeletal muscle with the Nicotinic plate (pudendal/somatic) — anticholinergics touch neither plate's outlet story, and an anticholinergic added to an obstructed man CAUSES retention (KYP anchor).",
        clue:
          "For any outlet drug: α₁ = the GATE (blockade opens it). Mnemonic: α₁ GUARDS THE GATE — tamsulosin fires the guard. And never confuse the gates: NICOTINIC IS YOURS (voluntary), the internal sphincter is the ANS's.",
      },
      {
        a: "The two autonomic arrows run the intuitive way — parasympathetic 'rest-and-digest' should RETAIN urine (you rest, you hold), and sympathetic 'fight-or-flight' should void (you drop the load and run)",
        b: "Reversing the book's two margin arrows under exam pressure, especially in mixed autonomic stems where the bladder is one organ among several",
        whyConfused:
          "The rest-and-digest mnemonic maps poorly here: the parasympathetic lane's bladder job (M₃ detrusor contraction) is an ACTIVE squeeze — voiding — which feels 'excitatory', while the sympathetic lane's job is the quiet holding state",
        keyDifference:
          "The margin prints the arrows exactly once and exactly clearly: '⊕ sympathetic → ↑ urinary retention. ⊕ parasympathetic → ↑ urine voiding.' The wiring explains both: sympathetic = β₃ relaxes the pump + α₁ closes the gate (retention); parasympathetic = M₃ squeezes the pump (voiding). Every drug row on the page confirms the mapping — the sympathomimetic (mirabegron) RELAXES the bladder, and the muscarinic agonist (bethanechol) EMPTIES it.",
        clue:
          "Anchor on the pump: the PARASYMPATHETIC lane is the only lane that makes the detrusor SQUEEZE — so parasympathetic = voiding, and everything else follows. Mnemonic: SYMPATHETIC HOLDS, PARASYMPATHETIC FLOWS.",
      },
    ],
    pivots: [
      {
        lookAlike: "Any stem naming a bladder drug or asking 'which agent / which receptor / which mechanism' — bethanechol, oxybutynin, mirabegron, and tamsulosin all look like 'bladder medications' in the options",
        differentiator:
          "Run the key map before reading the options: M₃ = the parasympathetic pump lock (AGONIST bethanechol → contraction → ↑ bladder emptying → 'Urinary retention'; ANTAGONIST oxybutynin → relaxation → ↓ detrusor overactivity → 'Urgency incontinence'); β₃ = the sympathetic pump lock (AGONIST mirabegron → relaxation → ↑ bladder capacity → 'Urgency incontinence'); α₁ = the sympathetic gate lock (ANTAGONIST tamsulosin → relaxation of bladder-neck/prostate smooth muscle → ↓ urinary obstruction → 'BPH'); Nicotinic = the voluntary external-sphincter plate with NO drug row on this page.",
        correctPath:
          "Name the broken state first (retention vs incontinence), then the broken part (pump vs gate), then read the lock: retention + weak pump → M₃ agonist (bethanechol); retention + obstructed outlet (BPH) → α₁ antagonist (tamsulosin); urgency incontinence → M₃ antagonist (oxybutynin) or β₃ agonist (mirabegron) — both calm the detrusor; choose between them on side effects (KYP anchors: anticholinergic burden vs hypertension), never on application. Most distractors are the RIGHT drug for the WRONG state — oxybutynin in a retaining patient, bethanechol in an obstructed one.",
      },
      {
        lookAlike: "A retention or incontinence vignette with multiple organ complaints — an elderly patient on several drugs, a postoperative patient, a spinal-cord-injury patient — asking what caused the bladder problem or what will fix it",
        differentiator:
          "Sort the state, then sort the mechanism against the two margin arrows: retention = the storage state won (sympathetic-like dominance — '⊕ sympathetic → ↑ urinary retention.'): anticholinergics (oxybutynin, TCAs, antipsychotics — KYP anchors), α₁ agonists, or an obstructed outlet (BPH); incontinence = the voiding system firing when it should not (urge: detrusor overactivity → M₃ antagonist or β₃ agonist) or the hold failing (stress: the pudendal/external-sphincter story — KYP anchor beyond this page's table).",
        correctPath:
          "(1) RETENTION OR INCONTINENCE — the single word that halves the differential. (2) IF RETENTION — pump or gate: an obstructing prostate or bladder-neck problem (α₁ antagonist; the tamsulosin row names 'bladder, neck, prostate') vs a weak/atonic detrusor (M₃ agonist; KYP anchors: postoperative, diabetic, neurogenic). (3) IF URGE INCONTINENCE — both printed answers work on the pump (oxybutynin blocks M₃, mirabegron stimulates β₃); check the anticholinergic burden before choosing (KYP anchor). (4) If the stem is a DRUG side-effect stem, run the arrows backwards: any drug that mimics the sympathetic arrow (anticholinergic, α₁ agonist) retains urine; any drug that mimics the parasympathetic arrow (cholinomimetic — KYP anchor from the cholinomimetic pages) can cause urgency or incontinence.",
      },
    ],
    miniCase: {
      vignette:
        "A 71-year-old man presents with eight months of progressive urinary hesitancy, a weak stream that starts and stops, straining to void, nocturia three times nightly, and a sensation of incomplete emptying. He has dribbling after voiding but no pain or incontinence episodes; he denies urgency with involuntary leakage. Examination shows an enlarged, smooth, nontender prostate; bladder scan reveals a post-void residual of 320 mL; creatinine is normal. He takes no medications. His brother, he reports, 'took a bladder pill and it made everything worse until the doctor switched him' — and the student at the bedside asks which pill fits THIS patient, and why the brother's might have failed.",
      question:
        "Which drug class and mechanism fit this patient's condition, and why would each of the other bladder agents have been the wrong key for his lock?",
      options: [
        {
          label:
            "α1-ANTAGONIST (eg, tamsulosin) — ⊝ α₁-receptor → relaxation of smooth muscle (eg, bladder, neck, prostate) → ↓ urinary obstruction. The patient's retention is OUTLET OBSTRUCTION by the enlarged prostate and bladder neck — the exact tissues the row names — so the gate must be opened, not the pump squeezed.",
          text: "Tamsulosin (α₁ blockade) — open the obstructed outlet.",
          correct: true,
          why:
            "Correct on every count, and every element is the source page's own. THE CONDITION: the hesitancy-weak-stream-incomplete-emptying triad with a smooth enlarged prostate and a post-void residual is the 'BPH' application, verbatim — retention from an obstructed OUTLET, not a weak pump. THE MECHANISM is the book's row printed exactly: '⊝ α₁-receptor → relaxation of smooth muscle (eg, bladder, neck, prostate) → ↓ urinary obstruction' — the α₁ plate the diagram draws on the internal urethral sphincter extends to the bladder-neck/prostatic smooth muscle, and blocking it relaxes the compressed outlet. THE LOGIC: this is the only row that acts at the GATE — the pump (detrusor) is structurally normal here, so the other three rows, all pump drugs, are keys for a different lock.",
        },
        {
          label:
            "MUSCARINIC AGONIST (eg, bethanechol) — ⊕ M₃ receptor → contraction of detrusor smooth muscle → ↑ bladder emptying. Rationale: the bladder is not emptying, so stimulate the pump that empties it.",
          text: "Bethanechol (M₃ agonist) — squeeze the pump harder.",
          why:
            "Right state, wrong part — the classic retention trap. Bethanechol's row IS a retention drug ('⊕ M₃ receptor → contraction of detrusor smooth muscle → ↑ bladder emptying' → 'Urinary retention'), but it fits the retention of a WEAK PUMP (KYP anchors: postoperative atony, diabetic cystopathy). This patient's pump is fine; the outlet is compressed by prostate and bladder-neck tissue — squeezing the detrusor against a closed gate raises intravesical pressure without emptying the bladder (and can aggravate the obstruction's consequences — KYP clinical anchor). The sort frame (KYP): retention → pump or gate? An enlarged prostate and a 320 mL residual answer GATE.",
        },
        {
          label:
            "MUSCARINIC ANTAGONIST (eg, oxybutynin) — ⊝ M₃ receptor → relaxation of detrusor smooth muscle → ↓ detrusor overactivity. Rationale: a 'bladder pill' should calm the bladder.",
          text: "Oxybutynin (M₃ blockade) — calm the bladder.",
          why:
            "Exactly the pill that 'made everything worse' — the brother's story embedded in the stem. Oxybutynin's row treats 'Urgency incontinence' (the overactive detrusor), and its mechanism — 'relaxation of detrusor smooth muscle' — is the opposite of what an obstructed man needs: relaxing the pump behind a closed gate worsens retention and raises the residual (the classic anticholinergic-urinary-retention warning — KYP anchor, and the printed row's own logic run backwards). The M₃ plate is the parasympathetic PUMP lock; this patient's lock is the α₁ GATE.",
        },
        {
          label:
            "SYMPATHOMIMETIC (eg, mirabegron) — ⊕ β₃ receptor → relaxation of detrusor smooth muscle → ↑ bladder capacity. Rationale: more capacity means the bladder holds the urine the outlet is blocking.",
          text: "Mirabegron (β₃ agonist) — grow the bladder's capacity.",
          why:
            "The counterintuitive row applied backwards. Mirabegron's 'relaxation of detrusor smooth muscle → ↑ bladder capacity' is the STORAGE state's own mechanism (the book's arrow: '⊕ sympathetic → ↑ urinary retention.') — its printed application is 'Urgency incontinence,' calming a pump that fires too readily. Prescribing MORE storage to an already-obstructed, already-retaining patient deepens the retention: capacity rises while the outlet stays closed and the residual climbs. The β₃ plate and the α₁ plate are both sympathetic locks — but this row unlocks the PUMP's stretch, and the obstruction lives at the GATE.",
        },
        {
          label:
            "α₁-AGONIST — ⊕ α₁-receptor stimulation to 'strengthen' the internal urethral sphincter and improve continence, on the theory that a firmer outlet means better flow control.",
          text: "An α₁ agonist — tighten and strengthen the outlet.",
          why:
            "Direction reversal — the exact inverse of the printed row. The book's α₁ story runs: stimulation CONTRACTS the bladder-neck/internal-sphincter smooth muscle (the storage gate — a KYP reading of the tamsulosin row, which RELAXES 'smooth muscle (eg, bladder, neck, prostate)' when it BLOCKS α₁). An α₁ agonist would tighten the already-obstructed outlet and worsen the retention — the mirror image of the correct key. When an option offers the same receptor as the right answer with the opposite sign, the stem's state (retention, not incontinence) picks the direction: retention needs the gate OPENED (blockade), not closed.",
        },
      ],
      reasoning:
        "The vignette is the α₁ row played as a clinic visit, with the brother's story pre-loading the oxybutynin trap. (1) THE STATE — hesitancy, weak stream, straining, incomplete emptying, a 320 mL residual, and (crucially) NO urgency with involuntary leakage: this is RETENTION, not incontinence — the word that halves the option list (both 'Urgency incontinence' rows, oxybutynin and mirabegron, are eliminated as TREATMENTS, and the brother's 'made it worse' pill is the anticholinergic run exactly as the printed mechanism predicts). (2) THE PART — an enlarged smooth prostate plus a high residual in a 71-year-old man is OUTLET OBSTRUCTION: the pump is structurally normal; the gate is compressed. The KYP sort frame: retention → pump or gate? (3) THE LOCK — the book's row names the exact tissues: 'relaxation of smooth muscle (eg, bladder, neck, prostate)' — the α₁ plate of the wiring diagram's internal-sphincter territory extended into the prostate; the application is printed as 'BPH.' (4) THE KEY — '⊝ α₁-receptor … → ↓ urinary obstruction': blockade, not stimulation — the distractors each transpose one printed element: bethanechol squeezes a normal pump against a closed gate (right state, wrong part), oxybutynin and mirabegron both push toward the storage state an already-retaining patient does not need (wrong state), and the α₁ agonist reads the right receptor with the sign flipped (wrong direction).",
    },
  },
  mnemonics: [
    {
      code: "BABY ONE MORE TIME — Bethanechol · Oxybutynin · Mirabegron · Tamsulosin (the four drug rows in table order)",
      meaning:
        "THE SOURCE'S OWN MNEMONIC — printed in the margin of book 236 with the red first letters B·o·m·t (VLM-verified at high zoom; carried verbatim; NOT a KYP design — the E38/PH9 attribution precedent). B = Bethanechol, the muscarinic AGONIST (M₃ contraction → 'Urinary retention'); O = Oxybutynin, the muscarinic ANTAGONIST (M₃ relaxation → 'Urgency incontinence'); M = Mirabegron, the sympathomimetic (β₃ relaxation → 'Urgency incontinence'); T = Tamsulosin, the α1-antagonist (α₁ relaxation of bladder-neck/prostate → 'BPH'). The Britney Spears hook makes the four agents unforgettable in one pass — and the table order IS the mnemonic order.",
      memorizes: "The four micturition drugs of book 236, in table order, each with its class",
      whenToUse:
        "Any question whose options include the bladder drugs — recite the four names BEFORE reading the options, then match each to its receptor row and application",
      clinical:
        "The mnemonic's order doubles as a receptor walk: B/O share the M₃ lock with opposite signs (agonist empties, antagonist calms), M is the β₃ sympathomimetic, T is the α₁ gate blocker — one pop lyric, the entire table (the receptor pairings are the book's own; the walk is KYP's).",
    },
    {
      code: "SYMPATHETIC HOLDS, PARASYMPATHETIC FLOWS — ⊕ sympathetic → ↑ urinary retention; ⊕ parasympathetic → ↑ urine voiding",
      meaning:
        "The two-state code (KYP-original compression of the book's own two margin arrows): the sympathetic (hypogastric) lane is STORAGE — β₃ relaxes the pump and α₁ closes the gate, so the urine is HELD; the parasympathetic (pelvic) lane is VOIDING — M₃ squeezes the pump, so the urine FLOWS. The pontine center ('Micturition center in pons') coordinates the flip between the two.",
      memorizes: "Which autonomic system does which to the bladder — the direction of both margin arrows",
      whenToUse:
        "Any stem about autonomic effects on the bladder, any drug side-effect stem (anticholinergic → retention; cholinomimetic → urgency), and any 'which receptor does this drug act on' question — the state names the system, the system names the receptor",
      clinical:
        "The arrow logic explains the classic side-effect stems (KYP anchors): anticholinergics (oxybutynin, TCAs, antipsychotics) mimic the sympathetic arrow → retention in elderly men; cholinomimetics (bethanechol-type, organophosphates) mimic the parasympathetic arrow → urgency, incontinence; and the reflex arcs of the neurogenic bladder run the same two states without the pons.",
    },
    {
      code: "M₃ SQUEEZES, β₃ STRETCHES, α₁ GUARDS THE GATE, NICOTINIC IS YOURS — the four receptor plates and their jobs",
      meaning:
        "The wiring code (KYP-original; every receptor and its printed direction is the book's own — the M₃ contraction and the M₃/β₃ relaxations are the drug rows; the α₁ guard and the nicotinic-voluntary readings are KYP): M₃ (pelvic/parasympathetic, on the detrusor) SQUEEZES — the voiding pump; β₃ (hypogastric/sympathetic, on the detrusor) STRETCHES — the storage capacity ('↑ bladder capacity'); α₁ (hypogastric/sympathetic, on the internal sphincter) GUARDS THE GATE — contraction closes the outlet (the direction read off the tamsulosin row); Nicotinic (pudendal/somatic, on the external sphincter) IS YOURS — the voluntary hold.",
      memorizes: "Which receptor sits on which structure, from which nerve, doing which job — the whole wiring diagram in one line",
      whenToUse:
        "Any 'which receptor controls X' or 'which nerve innervates X' stem, and any mechanism-matching question — walk the four plates before touching the options",
      clinical:
        "The two sphincter plates split the outlet's pharmacology: the INTERNAL sphincter answers to ANS drugs (α₁ — tamsulosin's target, the BPH story), the EXTERNAL sphincter answers to the SOMATIC system (pudendal/nicotinic — no drug row on this page; the neurogenic-bladder and spinal-cord stems live there — KYP anchors: Onuf nucleus, S2–S4).",
    },
    {
      code: "S2, 3, 4 KEEPS THE URINE OFF THE FLOOR — the pelvic and pudendal nerves arise from the sacral cord S2–S4 (a classic code, OUTSIDE First Aid)",
      meaning:
        "The sacral-level code (NOT printed on this page — a classic medical-school mnemonic, flagged as a KYP anchor wherever it appears): the pelvic nerve (parasympathetic — the M₃ voiding pump) and the pudendal nerve (somatic — the nicotinic voluntary hold) both arise from S2–S4, the sacral micturition reflex center below the pontine coordinator. The hypogastric (sympathetic) lane arises from the thoracolumbar levels (T10–L2 — KYP anchor).",
      memorizes: "The spinal origin of the parasympathetic and somatic micturition lanes (S2–S4)",
      whenToUse:
        "Any stem involving sacral or spinal cord lesions and bladder function — the level names the lane that is lost, and the lost lane names the bladder's behavior",
      clinical:
        "The lesion stems the exam loves (all KYP anchors beyond this page): a SACRAL (S2–S4/conus) lesion or diabetic autonomic neuropathy takes the pelvic lane → the atonic, overfilled, overflow bladder (the bethanechol-shaped picture); a lesion ABOVE the sacral center (spinal cord injury) disconnects the pons → spinal reflex voiding without the voluntary hold and, above T6, autonomic dysreflexia with a blocked catheter as the classic trigger.",
    },
  ],
  rapidReview: {
    s30: [
      "'Micturition center in pons regulates involuntary bladder function via coordination of sympathetic and parasympathetic nervous systems.' — a pontine center runs the two-system duet.",
      "'⊕ sympathetic → ↑ urinary retention.' — the storage arrow.",
      "'⊕ parasympathetic → ↑ urine voiding.' — the voiding arrow.",
      "'Some autonomic drugs act on smooth muscle receptors to treat bladder dysfunction.' — the bridge sentence: the drugs act at the diagram's plates.",
      "'Pelvic nerve (parasympathetic input)' → the detrusor's M₃ plate — the pump lane.",
      "'Hypogastric nerve (sympathetic input)' → the detrusor's β₃ plate AND the internal sphincter's α₁ plate — the two-lock storage lane.",
      "'Pudendal nerve (somatic input)' → the external sphincter's Nicotinic plate — the voluntary hold.",
      "'Baby one more time.' — the book's own mnemonic: Bethanechol, Oxybutynin, Mirabegron, Tamsulosin (the four rows in order).",
      "'⊕ M₃ receptor → contraction of detrusor smooth muscle → ↑ bladder emptying' — bethanechol, for 'Urinary retention'.",
      "'⊕ β₃ receptor → relaxation of detrusor smooth muscle → ↑ bladder capacity' — mirabegron, for 'Urgency incontinence'.",
      "'⊝ α₁-receptor → relaxation of smooth muscle (eg, bladder, neck, prostate) → ↓ urinary obstruction' — tamsulosin, for 'BPH'.",
    ],
    m3: [
      "BABY ONE MORE TIME — Bethanechol · Oxybutynin · Mirabegron · Tamsulosin (the source's own margin mnemonic, in table order).",
      "SYMPATHETIC HOLDS, PARASYMPATHETIC FLOWS — sympathetic → retention (storage); parasympathetic → voiding.",
      "M₃ SQUEEZES, β₃ STRETCHES, α₁ GUARDS THE GATE, NICOTINIC IS YOURS — the four plates, their nerves, and their jobs.",
      "S2, 3, 4 KEEPS THE URINE OFF THE FLOOR — the pelvic and pudendal lanes arise from S2–S4 (classic code, outside First Aid).",
    ],
    m10: [
      "The whole page in one breath: three nerves (Pelvic parasympathetic, Hypogastric sympathetic, Pudendal somatic), four receptor plates (M₃ + β₃ on the detrusor, α₁ on the internal sphincter, Nicotinic on the external), two states (the margin's arrows: sympathetic → retention, parasympathetic → voiding, coordinated by the pontine micturition center), and four drug rows keyed ①②③ to the plates.",
      "The wiring, nerve by nerve: PELVIC → the detrusor's M₃ (the voiding squeeze); HYPOGASTRIC → the detrusor's β₃ (the storage stretch) AND the internal sphincter's α₁ (the storage gate) — the only nerve with two targets; PUDENDAL → the external sphincter's Nicotinic plate — the voluntary hold, the only somatic element, and the only plate with NO drug row on the page.",
      "The drug table, row by row (verbatim mechanisms): muscarinic AGONIST bethanechol — ⊕ M₃ → contraction → ↑ bladder emptying → 'Urinary retention'; muscarinic ANTAGONIST oxybutynin — ⊝ M₃ → relaxation → ↓ detrusor overactivity → 'Urgency incontinence'; sympathomimetic mirabegron — ⊕ β₃ → relaxation → ↑ bladder capacity → 'Urgency incontinence'; α1-antagonist tamsulosin — ⊝ α₁ → relaxation of bladder-neck/prostate smooth muscle → ↓ urinary obstruction → 'BPH'.",
      "The M₃ pair: same lock, both directions printed — bethanechol turns the key (empty), oxybutynin jams it (calm) — and the applications are exact opposites (retention vs urgency incontinence). The two 'Urgency incontinence' drugs calm the same pump through OPPOSITE locks: block the M₃ squeeze or stimulate the β₃ stretch.",
      "The two sphincters: INTERNAL = involuntary SMOOTH muscle, α₁ plate, hypogastric/sympathetic — the gate tamsulosin opens in BPH (blockade relaxes, so stimulation contracts — KYP reading of the row); EXTERNAL = voluntary SKELETAL muscle, Nicotinic plate, pudendal/somatic — the learned hold (Onuf nucleus, S2–S4 — KYP anchors).",
      "The states: STORAGE = a relaxed pump behind a closed gate (β₃ stretch + α₁ closure — the sympathetic arrow); VOIDING = a squeezing pump behind an open gate (M₃ contraction + the pudendal hold released — the parasympathetic arrow). Every bladder stem is one of the two states broken.",
      "The sorting frames (KYP): retention → pump or gate? Weak pump → M₃ agonist (bethanechol; postoperative, diabetic, neurogenic atony); obstructed gate → α₁ antagonist (tamsulosin; BPH). Urge incontinence → calm the pump (M₃ antagonist or β₃ agonist). Anticholinergic side effect = iatrogenic storage = retention (the oxybutynin mechanism run backwards).",
      "The mnemonic provenance: 'Baby one more time.' is the SOURCE'S OWN printed mnemonic (red initials B·o·m·t, VLM-verified — carried verbatim and attributed); the other three codes (SYMPATHETIC HOLDS…; M₃ SQUEEZES…; S2,3,4…) are KYP-original or classic-outside-FA, flagged wherever they appear.",
      "The extensions discipline: the page does NOT print the state names (storage/voiding), the α₁-contraction direction (it is inferred from the tamsulosin row), the pudendal voluntary-hold reading, the S2–S4/Onuf anchors, or any lesion stem — those are KYP layers, flagged; the printed set is the wiring labels, the margin note, the mnemonic, and the four rows.",
      "The exam's reading order: (1) state — retention or incontinence; (2) part — pump or gate; (3) lock — M₃, β₃, α₁ (or nicotinic, which has no row); (4) key — read the row's direction (⊕ vs ⊝) and application. The brother-pill trap: never give a storage-state drug (oxybutynin, mirabegron) to a retaining patient.",
    ],
  },
  recall: [
    {
      q: "Name the three input nerves of the micturition wiring diagram, their divisions, their target structures, and the receptor plate on each target (the whole wiring in one answer).",
      a:
        "'Pelvic nerve (parasympathetic input)' → the Detrusor muscle at the 'M₃-receptor' ① plate (the voiding squeeze). 'Hypogastric nerve (sympathetic input)' → TWO targets: the Detrusor muscle at the 'β₃-receptor' ② plate (the storage stretch) and the Internal urethral sphincter at the 'α₁-receptor' ③ plate (the storage gate). 'Pudendal nerve (somatic input)' → the External urethral sphincter at the 'Nicotinic receptor' plate (the voluntary hold — the only somatic element). The numbered circles ①②③ key the plates to the drug table's rows; the Nicotinic plate carries no number — no drug row targets it.",
    },
    {
      q: "Recite the four drug rows of the table verbatim — drug class, example, mechanism, and application — and the margin mnemonic that keys them.",
      a:
        "'Muscarinic agonists (eg, bethanechol): ⊕ M₃ receptor → contraction of detrusor smooth muscle → ↑ bladder emptying' — Urinary retention. 'Muscarinic antagonists (eg, oxybutynin): ⊝ M₃ receptor → relaxation of detrusor smooth muscle → ↓ detrusor overactivity' — Urgency incontinence. 'Sympathomimetics (eg, mirabegron): ⊕ β₃ receptor → relaxation of detrusor smooth muscle → ↑ bladder capacity' — Urgency incontinence. 'α1-antagonists (eg, tamsulosin): ⊝ α₁-receptor → relaxation of smooth muscle (eg, bladder, neck, prostate) → ↓ urinary obstruction' — BPH. The margin mnemonic (the source's own, red initials B·o·m·t): 'Baby one more time.' — Bethanechol, Oxybutynin, Mirabegron, Tamsulosin, in table order.",
    },
    {
      q: "What are the two autonomic arrows of the margin note, verbatim — and what does each mean structurally (which receptor does each arrow's work)?",
      a:
        "'⊕ sympathetic → ↑ urinary retention.' — the STORAGE arrow: the hypogastric lane holds the urine, β₃ relaxing the detrusor ('↑ bladder capacity') while α₁ contracts the internal sphincter outlet (the gate direction read off the tamsulosin row, which relaxes the same tissue when it blocks α₁ — a KYP reading). '⊕ parasympathetic → ↑ urine voiding.' — the VOIDING arrow: the pelvic lane's M₃ contracts the detrusor ('↑ bladder emptying'), with the pudendal hold released. The pons coordinates the two: 'Micturition center in pons regulates involuntary bladder function via coordination of sympathetic and parasympathetic nervous systems.'",
    },
    {
      q: "Both oxybutynin and mirabegron treat urgency incontinence — through which receptors, by which mechanisms, and why do two different locks produce the same application?",
      a:
        "Oxybutynin: '⊝ M₃ receptor → relaxation of detrusor smooth muscle → ↓ detrusor overactivity' — it BLOCKS the parasympathetic squeeze (the pelvic lane's plate). Mirabegron: '⊕ β₃ receptor → relaxation of detrusor smooth muscle → ↑ bladder capacity' — it STIMULATES the sympathetic stretch (the hypogastric lane's plate). Both calm the SAME muscle — the detrusor, the only structure carrying two plates — one by removing the contraction signal, the other by adding the relaxation signal; the overactive pump quiets either way, and storage is restored. The exam discriminates them by side effects, not application (KYP anchors: oxybutynin's anticholinergic burden vs mirabegron's hypertension).",
    },
    {
      q: "The α₁ row says tamsulosin causes 'relaxation of smooth muscle (eg, bladder, neck, prostate) → ↓ urinary obstruction' for BPH — derive from it: what does α₁ STIMULATION do to the internal urethral sphincter, in which state, and why is bethanechol the wrong drug for a man with an obstructing prostate?",
      a:
        "α₁ STIMULATION CONTRACTS the bladder-neck/internal-sphincter smooth muscle — it closes the gate during the STORAGE state (a KYP reading: the row prints only the blockade direction, but an antagonist that relaxes implies an agonist that contracts; the diagram's α₁ plate on the 'Internal urethral sphincter' is the site). That is why the sympathetic arrow is '↑ urinary retention': β₃ stretch + α₁ closure = hold. Bethanechol is the wrong key for BPH because its lock is the PUMP, not the GATE: '⊕ M₃ receptor → contraction of detrusor smooth muscle' squeezes a normal detrusor against a prostate-compressed outlet — retention persists (and pressure rises) until the outlet is opened, which is tamsulosin's job: '↓ urinary obstruction' at the 'bladder, neck, prostate' tissues the row itself names. (The pump-vs-gate sort frame is a KYP extension.)",
    },
  ],
  related: [
    {
      title: "Acetylcholine Receptors — the Receptor Families Behind the Plates",
      topicId: "acetylcholine-receptors",
      note:
        "The page two before this one (PH12, the upper half of the same book-235 page as Pain transmission): the ACh receptor families — nicotinic ligand-gated channels (NN at the ganglia, NM at the neuromuscular junction) and muscarinic GPCRs (M1–M5). Two of this page's four plates are ACh receptors: the detrusor's M₃ plate (the muscarinic GPCR the pelvic nerve's ACh drives — bethanechol turns it, oxybutynin jams it) and the external sphincter's Nicotinic plate (the ligand-gated channel of the pudendal somatic lane). The two topics are the same pharmacology at two scales: the receptor families (PH12) and their wiring into one organ's behavior (this page).",
    },
    {
      title: "Autonomic Receptors — the Wiring Diagram This Page Plugs Into",
      topicId: "autonomic-receptors",
      note:
        "The page three before this one (PH11, book 234): the AUTONOMIC/SOMATIC overview schematic — the CNS column, the parasympathetic and sympathetic divisions with their preganglionic/postganglionic neurons and ganglia, and the receptor plates at each organ. This page's three nerve lanes are that diagram's wires drawn to one organ: the pelvic nerve is the parasympathetic wire (long preganglionic → ganglion near the bladder → ACh on M₃), the hypogastric nerve is the sympathetic wire (NE on β₃ and α₁), and the pudendal nerve is the somatic wire (ACh on nicotinic at a skeletal muscle). Read together, the two pages answer the exam's two questions: WHICH SYSTEM innervates what (PH11) and WHAT THE DRUG does at the bladder's plates (this page).",
    },
    {
      title: "Pain Transmission — the Previous Section Under the Same Banner",
      topicId: "pain-transmission",
      note:
        "The page immediately before this one (PH13, the lower half of book 235): the four-process pain signal (Transduction → Transmission → Modulation → Perception) with its blocker classes. The two sections share the standing 'PHARMACOLOGY—AUTONOMIC DRUGS' banner and a design principle: each is a step/wiring map that assigns every drug class its address — the pain page asks WHERE along the signal a drug acts, and this page asks WHICH plate on the bladder it turns. They also share the exam's favorite crossover: the anticholinergic class appears on both pages (TCAs/SNRIs in the pain modulation lists; oxybutynin here) with the bladder retention trade-off this page's M₃ row explains.",
    },
    {
      title: "Sympathomimetics — the Grid Mirabegron Sits In",
      topicId: "sympathomimetics",
      note:
        "The completed grid topic that scores every adrenergic agonist by receptor activity: its β₃ row is this page's counterintuitive drug — mirabegron, the SYMPATHOMIMETIC that RELAXES the detrusor ('⊕ β₃ receptor → relaxation of detrusor smooth muscle → ↑ bladder capacity' for 'Urgency incontinence'). The grid supplies the selectivity story (mirabegron is the β₃-selective agonist, which is why it calms a bladder without the β₁/β₂ theater of nonselective agents — KYP anchors), and this page supplies the organ wiring that makes β₃ a bladder target at all: the hypogastric lane's storage stretch.",
    },
  ],
  crossLinks: [
    {
      subject: "Urology (BPH, retention, and incontinence — the applications as a clinic)",
      connection:
        "The three printed applications are urology's three chief complaints, each with its mechanism on this page's wiring: 'Urinary retention' → the pump or the gate failing (bethanechol for the weak pump; tamsulosin — 'relaxation of smooth muscle (eg, bladder, neck, prostate) → ↓ urinary obstruction' — for the BPH gate, where the urology pages add the prostate's transitional-zone anatomy, the 5α-reductase volume story, and the acute-retention catheter rule); 'Urgency incontinence' → the overactive detrusor (oxybutynin or mirabegron — the two locks of the same pump; the urology pages add behavioral therapy and the stress-vs-urge examination split, a KYP extension of this page's table).",
    },
    {
      subject: "Neurology (the pons, the cord, and the neurogenic bladder)",
      connection:
        "The margin's first sentence — 'Micturition center in pons regulates involuntary bladder function via coordination of sympathetic and parasympathetic nervous systems.' — is the neurology of micturition in one line, and the lesion stems extend it (KYP anchors beyond this page): a lesion ABOVE the sacral center (spinal cord injury) disconnects the pons and produces spinal-reflex voiding without the voluntary pudendal hold (and, above T6, autonomic dysreflexia — a blocked catheter triggering the sympathetic surge); a SACRAL lesion (S2–S4, conus medullaris, cauda equina) takes the pelvic and pudendal lanes and produces the atonic overfilled bladder with overflow incontinence — the bethanechol-shaped picture. The internal-vs-external sphincter split (autonomic α₁ vs somatic nicotinic) is the same anatomy the spinal-cord exam tests.",
    },
    {
      subject: "Geriatrics and Internal Medicine (anticholinergic burden and the iatrogenic bladder)",
      connection:
        "The M₃ antagonist row run backwards is the geriatrics shelf's classic adverse effect: any drug with anticholinergic activity — oxybutynin itself, TCAs, first-generation antihistamines, many antipsychotics (KYP anchors) — mimics the sympathetic storage arrow and CAUSES urinary retention, worst in elderly men with prostates and in patients on stacked anticholinergics (the cumulative-burden principle). This page supplies the mechanism sentence ('relaxation of detrusor smooth muscle' — the pump refusing to squeeze), and the postoperative version (retention after surgery: opioids plus anticholinergics plus anesthesia — KYP anchors) supplies the setting; the fix is the same wiring read as the cause.",
    },
    {
      subject: "Endocrinology (diabetes — the neuropathic bladder)",
      connection:
        "The endocrinologist's chronic bladder complication is this page's voiding lane failing: longstanding diabetes produces an autonomic neuropathy of the pelvic (parasympathetic) nerve — the diabetic cystopathy of the urinary-frequency question sets — and the detrusor's M₃-driven squeeze weakens into an atonic, overfilled, poor-emptying bladder with overflow incontinence (KYP clinical anchors; the same autonomic neuropathy that silences the gut and the heart rate). The retention side of the table answers it in pharmacology terms: the weak-pump picture that (unlike the obstructed BPH gate) is the bethanechol-shaped lock — and the glycemic control story belongs to the endocrinology pages.",
    },
  ],
};
