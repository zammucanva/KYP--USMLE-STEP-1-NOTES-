import type { KypUsMLENote } from "../types";

// Pharmacology — PH-batch 13. Source: pdf 258 BOTTOM half / book 236
// (Pharmacology — Autonomic Drugs: Tissue distribution of adrenergic
// receptors — the BOTTOM half of a SHARED page; the top half,
// "Micturition control", is the sibling topic micturition-control, the
// p196 shared-page convention — only the adrenergic table's contiguous
// lines 96–147 are quoted, plus the indd slug/timestamp footer
// (149–151) as its own page-identity entry; the micturition lines 1–94
// are NEVER quoted here). The half carries exactly ONE printed asset:
// the RECEPTOR / TISSUE / EFFECT(S) table — five receptor blocks (α1,
// α2, β1, β2, β3, regular digits exactly as the table prints them),
// thirteen logical rows: α1 Vascular smooth muscle → Vasoconstriction,
// Visceral smooth muscle → Smooth muscle contraction; α2 Pancreas →
// Inhibition of insulin secretion, Presynaptic terminals → Inhibition
// of neurotransmitter release, Salivary glands → Inhibition of salivary
// secretion; β1 Heart → ↑ heart rate, contractility, Kidney → ↑ renin
// secretion; β2 Bronchioles → Bronchodilation, Cardiac muscle →
// ↑ heart rate, contractility, Liver → Glycogenolysis, glucose release,
// Arterial smooth muscle → Vasodilation, Pancreas → Stimulation of
// insulin secretion; β3 Adipose → ↑ lipolysis. CENSUS (pdfimages +
// PyMuPDF xobject-rect analysis + z-ai VLM glm-4.6v — the VLM SUCCEEDED
// this session, both passes saved to
// .usmle-pipeline-cache/staging-ph13/vlm-census.txt): the page prints
// THREE raster images (426×336, 383×518, 458×277, sep color, 316ppi)
// but ALL THREE sit in the TOP half — the micturition figure's anatomy
// silhouettes (a brainstem/pons mask, the bladder with urethra, a
// detrusor crescent; VLM-adjudicated directly on the extracted rasters:
// pure shape silhouettes, no text) at x≈190–293pt / top-origin
// y≈103–264pt; the BOTTOM half is a PURE 3-column text table — ZERO
// figures, icons, or photographs (PyMuPDF: 34 vector paths in the
// bottom half = the table's cell borders and shading; the VLM on the
// 200-DPI render: "text and table borders only"). The first VLM pass
// guessed one raster might BE the adrenergic table "rendered as a
// raster" — adjudicated FALSE: the table has a full pdftotext text
// layer (impossible for a raster) and the three rasters are the
// top-half anatomy art. The margin note "Baby one more time." prints
// in the TOP half only (line 30 — the sibling micturition-control's;
// NOT carried here); the VLM confirms NO margin notes or mnemonics
// anywhere in the bottom half. The indd slug + timestamp print at the
// very foot (lines 149–151), below the table. INTERLEAVE (the m38
// convention, documented): the text layer prints each receptor's
// TISSUE cells as a group, then its EFFECT(S) cells as a group — the
// logical row pairing is positional (tissue[i] ↔ effect[i]) and was
// adjudicated with the VLM on the 200-DPI page render (both the full
// page and the bottom-half crop return the same pairing). The ↑ glyphs
// print in the text layer with a preceding \x8f control-char artifact
// (a pdftotext artifact, not a printed character — the gen script's
// normalizer strips it). NO source typos print in this half — the
// table text is clean. The KYP directory diagram, the exam layer, and
// the memory layer are original.

export const adrenergicReceptorDistribution: KypUsMLENote = {
  id: "adrenergic-receptor-distribution",
  title: "Tissue Distribution of Adrenergic Receptors",
  subtitle:
    "Five adrenergic receptor subtypes — α1, α2, β1, β2, β3 — each holding its own membership list of tissues, and each membership row carrying exactly one effect (book 236). Thirteen printed rows: α1 squeezes vascular and visceral smooth muscle; α2 is the brake pedal — insulin, neurotransmitter release, and salivary secretion, ALL inhibited; β1 drives the heart and the kidney's renin; β2 is the five-row dilator–metabolic subtype (bronchioles, cardiac muscle, liver, arterial smooth muscle, pancreas); β3 is the one-row fat burner (Adipose → ↑ lipolysis). The exam's favorite wrinkle is the double booking: the pancreas prints under BOTH α2 (inhibition of insulin secretion) and β2 (stimulation of insulin secretion), and the heart prints under BOTH β1 (Heart) and β2 (Cardiac muscle) with the same ↑ heart rate, contractility. Every sympathomimetic and sympatholytic question is this directory read in one direction: name the subtype, read its tissues, predict the effect.",
  subject: "Pharmacology",
  system:
    "Section II · High-Yield General Principles — Pharmacology: Autonomic Drugs",
  pilotCategory: "Pharmacology mechanism",
  difficulty: 2,
  readTime: 6,
  sourceRef:
    "First Aid 2026, Part 1 pp. 236–236 (Pharmacology — Autonomic Drugs: Tissue distribution of adrenergic receptors; …)",
  tags: [
    "adrenergic receptors",
    "alpha-1 receptors",
    "alpha-2 receptors",
    "beta-1 receptors",
    "beta-2 receptors",
    "beta-3 receptors",
    "receptor distribution",
    "autonomic pharmacology",
    "vasoconstriction",
    "vasodilation",
    "bronchodilation",
    "renin secretion",
    "insulin secretion",
    "lipolysis",
    "glycogenolysis",
    "presynaptic autoreceptor",
    "sympathetic nervous system",
    "catecholamines",
    "sympathomimetics",
    "sympatholytics",
  ],
  core: {
    what:
      "The adrenergic side of the autonomic pharmacology chapter is one printed table: five receptor subtypes, each with a fixed tissue membership list, each membership row carrying exactly one effect. α1 — Vascular smooth muscle → Vasoconstriction; Visceral smooth muscle → Smooth muscle contraction. α2 — Pancreas → Inhibition of insulin secretion; Presynaptic terminals → Inhibition of neurotransmitter release; Salivary glands → Inhibition of salivary secretion. β1 — Heart → ↑ heart rate, contractility; Kidney → ↑ renin secretion. β2 — Bronchioles → Bronchodilation; Cardiac muscle → ↑ heart rate, contractility; Liver → Glycogenolysis, glucose release; Arterial smooth muscle → Vasodilation; Pancreas → Stimulation of insulin secretion. β3 — Adipose → ↑ lipolysis.",
    why:
      "This table is the answer key for the entire adrenergic drug list — every sympathomimetic and sympatholytic question resolves to one of these thirteen rows. It is also where the exam hides its two favorite asymmetries. First, the double bookings: the pancreas appears under α2 (Inhibition of insulin secretion) AND under β2 (Stimulation of insulin secretion) — the same organ, opposite metabolic directions, so the RECEPTOR a drug binds, not the organ it reaches, decides what happens to insulin; the heart appears under β1 (Heart) and β2 (Cardiac muscle) with the same effect — so a β2-selective agonist can still raise heart rate and contractility, the classic 'β2 is not only lungs' trap. Second, the α2 rows are all inhibitions — including the Presynaptic terminals row, the autoreceptor that turns sympathetic OUTPUT itself down, which is why a centrally acting α2 agonist lowers blood pressure and dries the mouth at the same time. And the vascular bed is double-booked in opposite mechanical directions: α1 Vascular smooth muscle → Vasoconstriction vs β2 Arterial smooth muscle → Vasodilation.",
    keyIdea:
      "Read every adrenergic distribution question through three moves. MOVE 1 — NAME THE SUBTYPE: the stem names the receptor, or names a drug whose selectivity implies the receptor (β1-blocker, β2 agonist, α2 agonist, α1 antagonist). MOVE 2 — PLACE IT: read that subtype's printed tissue list — the tissue column is the subtype's address book (α1 two smooth-muscle rows; α2 three gland/terminal rows; β1 heart + kidney; β2 the five-row list; β3 adipose only). MOVE 3 — PREDICT: read across to the effect column — the row's effect is the answer, and the effect belongs to the (receptor, tissue) PAIR, never to the organ alone. Then CHECK THE DOUBLE BOOKINGS: if the tissue is the pancreas, the heart, or the vascular bed, confirm WHICH membership the question means — the organ alone can never answer, because the pancreas prints under α2 and β2 with opposite insulin directions, the heart prints under β1 and β2 with the same cardiac effect, and the vessels print under α1 and β2 with opposite mechanical effects.",
  },
  mechanisms: [
    {
      id: "adrenergic-directory-map",
      title:
        "The adrenergic directory: one catecholamine signal, five subtypes, thirteen tissue→effect rows",
      context: "The printed RECEPTOR / TISSUE / EFFECT(S) table (book 236)",
      flow: {
        nodes: [
          {
            id: "signal",
            label: "THE ADRENERGIC SIGNAL — NE / Epi",
            sublabel:
              "Input — one catecholamine signal faces five receptor subtypes; the SUBTYPE the signal lands on — not the organ — decides the tissue response.",
            variant: "input",
          },
          {
            id: "a1",
            label: "α1 — the constrictor",
            sublabel:
              "Vascular smooth muscle → Vasoconstriction; Visceral smooth muscle → Smooth muscle contraction — both rows are smooth muscle, both effects are squeeze.",
            variant: "process",
          },
          {
            id: "a2",
            label: "α2 — the brake pedal",
            sublabel:
              "Pancreas → Inhibition of insulin secretion; Presynaptic terminals → Inhibition of neurotransmitter release; Salivary glands → Inhibition of salivary secretion — every α2 row in the table is an inhibition.",
            variant: "process",
          },
          {
            id: "b1",
            label: "β1 — the cardiac-renal drive",
            sublabel:
              "Heart → ↑ heart rate, contractility; Kidney → ↑ renin secretion — two rows, one cardiovascular subtype.",
            variant: "process",
          },
          {
            id: "b2",
            label: "β2 — the five-row dilator",
            sublabel:
              "Bronchioles → Bronchodilation; Cardiac muscle → ↑ heart rate, contractility; Liver → Glycogenolysis, glucose release; Arterial smooth muscle → Vasodilation; Pancreas → Stimulation of insulin secretion — the widest membership list in the table.",
            variant: "process",
          },
          {
            id: "b3",
            label: "β3 — the one-row fat burner",
            sublabel:
              "Adipose → ↑ lipolysis — a single printed row; the table gives β3 no other tissue.",
            variant: "process",
          },
          {
            id: "prediction",
            label: "THE PREDICTION — name, place, predict",
            sublabel:
              "Output — a sympathomimetic or sympatholytic question is this directory read in one direction: the subtype picks the rows, the rows name the effects. Thirteen rows, five subtypes, zero exceptions.",
            variant: "output",
          },
        ],
        edges: [
          { from: "signal", to: "a1", label: "α1" },
          { from: "signal", to: "a2", label: "α2" },
          { from: "signal", to: "b1", label: "β1" },
          { from: "signal", to: "b2", label: "β2" },
          { from: "signal", to: "b3", label: "β3" },
          { from: "a1", to: "prediction", label: "vasoconstriction + visceral squeeze" },
          { from: "a2", to: "prediction", label: "three inhibitions" },
          { from: "b1", to: "prediction", label: "↑ rate, contractility + ↑ renin" },
          { from: "b2", to: "prediction", label: "bronchodilation + vasodilation + more" },
          { from: "b3", to: "prediction", label: "↑ lipolysis" },
        ],
      },
    },
    {
      id: "double-booked-organs-map",
      title:
        "The double-booked organs: one pancreas under α2 AND β2, one heart under β1 AND β2, one vascular bed under α1 AND β2",
      context: "The table's most exam-active rows (book 236)",
      flow: {
        nodes: [
          {
            id: "bookings",
            label: "THE DOUBLE BOOKINGS — three tissues, two memberships each",
            sublabel:
              "Input — the pancreas (α2 + β2), the heart (β1 Heart + β2 Cardiac muscle), and the vascular bed (α1 Vascular + β2 Arterial smooth muscle) each hold TWO receptor memberships in the printed table.",
            variant: "input",
          },
          {
            id: "a2-pancreas",
            label: "α2 on the pancreas — Inhibition of insulin secretion",
            sublabel:
              "The brake on the islet: the α2 row suppresses insulin release.",
            variant: "target",
          },
          {
            id: "b2-pancreas",
            label: "β2 on the pancreas — Stimulation of insulin secretion",
            sublabel:
              "The accelerator on the SAME islet: the β2 row drives insulin release.",
            variant: "target",
          },
          {
            id: "b1-heart",
            label: "β1 on the Heart — ↑ heart rate, contractility",
            sublabel:
              "The heart's flagship subtype — the β1 Heart row.",
            variant: "target",
          },
          {
            id: "b2-cardiac",
            label: "β2 on Cardiac muscle — ↑ heart rate, contractility",
            sublabel:
              "The trap row: β2 prints the SAME effect on cardiac muscle — β2 is not only lungs.",
            variant: "target",
          },
          {
            id: "switch",
            label: "THE DIRECTION SWITCH — the receptor sets the sign",
            sublabel:
              "Process — same pancreas: α2 inhibits insulin, β2 stimulates it. Same heart: β1 and β2 both raise rate and contractility. Same vascular bed: α1 constricts, β2 dilates. The organ never decides; the receptor row does.",
            variant: "process",
          },
          {
            id: "selectivity",
            label: "OUTPUT — subtype selectivity picks the membership",
            sublabel:
              "Output — a selective agonist or antagonist acts through ONE membership of the double-booked organ, which is the entire logic of subtype-selective autonomic drugs: β1-selective blockade spares the β2 rows; a β2 agonist still reaches Cardiac muscle; α2 agonism brakes insulin AND neurotransmitter release AND saliva together.",
            variant: "output",
          },
        ],
        edges: [
          { from: "bookings", to: "a2-pancreas", label: "α2 membership" },
          { from: "bookings", to: "b2-pancreas", label: "β2 membership" },
          { from: "bookings", to: "b1-heart", label: "β1 membership" },
          { from: "bookings", to: "b2-cardiac", label: "β2 membership" },
          { from: "a2-pancreas", to: "switch", label: "inhibit insulin" },
          { from: "b2-pancreas", to: "switch", label: "stimulate insulin" },
          { from: "b1-heart", to: "switch", label: "↑ rate, contractility" },
          { from: "b2-cardiac", to: "switch", label: "↑ rate, contractility" },
          { from: "switch", to: "selectivity", label: "drug selects the row" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "adrenergic-distribution-map",
      title: "The adrenergic receptor directory map (an original KYP diagram)",
      caption:
        "An original KYP diagram of the adrenergic receptor distribution table (book 236): a five-column receptor directory — α1, α2, β1, β2, β3 — each column headed by its receptor chip and stacked with its printed tissue→effect rows as chips: α1 (Vascular smooth muscle → Vasoconstriction; Visceral smooth muscle → Smooth muscle contraction), α2 (Pancreas → Inhibition of insulin secretion; Presynaptic terminals → Inhibition of neurotransmitter release; Salivary glands → Inhibition of salivary secretion), β1 (Heart → ↑ heart rate, contractility; Kidney → ↑ renin secretion), β2 (Bronchioles → Bronchodilation; Cardiac muscle → ↑ heart rate, contractility; Liver → Glycogenolysis, glucose release; Arterial smooth muscle → Vasodilation; Pancreas → Stimulation of insulin secretion), and β3 (Adipose → ↑ lipolysis). The two pancreas chips (α2 inhibit vs β2 stimulate) are flagged and contrasted in a double-bookings band alongside the heart pair (β1 Heart + β2 Cardiac muscle) and the vascular pair (α1 Vascular vs β2 Arterial smooth muscle), and a bottom exam-reading band carries the α2 presynaptic-autoreceptor hook (the adrenergic receptor that turns sympathetic output DOWN — forward-linked to the autonomic synapse topic) and the β2 cardiac-muscle trap (β2 is not only lungs).",
      notice:
        "Census (pdfimages + PyMuPDF + z-ai VLM glm-4.6v, succeeded this session): the page prints THREE raster images but ALL THREE sit in the TOP half — the micturition figure's anatomy silhouettes (a brainstem/pons mask, the bladder with urethra, a detrusor crescent — VLM-adjudicated on the extracted rasters: pure shapes, no text); the BOTTOM half (this topic) is a PURE 3-column text table with ZERO figures, icons, or photographs (34 vector paths = the table's cell borders and shading). The margin note 'Baby one more time.' prints in the TOP half only — the sibling micturition-control's; the VLM confirms NO margin notes or mnemonics anywhere in the bottom half, so the KYP memory layer is original. The directory layout, the chip stacks, the double-booking flags, and the exam-reading band are an ORIGINAL KYP design — there is no figure on this half to reproduce; the printed table is carried verbatim in the note's table block.",
    },
    {
      kind: "table",
      title:
        "Book 236 — the printed RECEPTOR / TISSUE / EFFECT(S) table, carried verbatim (every printed row, printed order)",
      intro:
        "The entire subsection is this one table. Interleave documented (the m38 convention): the text layer prints each receptor's TISSUE cells as a group, then its EFFECT(S) cells as a group — the logical row pairing below is positional (tissue[i] ↔ effect[i]) and was adjudicated on the VLM page render at 200 DPI; the printed row order is preserved exactly.",
      columns: ["RECEPTOR", "TISSUE", "EFFECT(S)"],
      rows: [
        ["α1", "Vascular smooth muscle", "Vasoconstriction"],
        ["α1", "Visceral smooth muscle", "Smooth muscle contraction"],
        ["α2", "Pancreas", "Inhibition of insulin secretion"],
        ["α2", "Presynaptic terminals", "Inhibition of neurotransmitter release"],
        ["α2", "Salivary glands", "Inhibition of salivary secretion"],
        ["β1", "Heart", "↑ heart rate, contractility"],
        ["β1", "Kidney", "↑ renin secretion"],
        ["β2", "Bronchioles", "Bronchodilation"],
        ["β2", "Cardiac muscle", "↑ heart rate, contractility"],
        ["β2", "Liver", "Glycogenolysis, glucose release"],
        ["β2", "Arterial smooth muscle", "Vasodilation"],
        ["β2", "Pancreas", "Stimulation of insulin secretion"],
        ["β3", "Adipose", "↑ lipolysis"],
      ],
      caption:
        "Five subtypes, thirteen rows, and the table's built-in teaching contrasts: the pancreas prints twice (α2 Inhibition of insulin secretion vs β2 Stimulation of insulin secretion), the heart prints under two subtypes (β1 Heart and β2 Cardiac muscle, both ↑ heart rate, contractility), and the vascular bed prints in opposite directions (α1 Vascular smooth muscle → Vasoconstriction vs β2 Arterial smooth muscle → Vasodilation). The table prints the receptor names with regular digits — α1, α2, β1, β2, β3 — carried exactly as printed.",
    },
    {
      kind: "steps",
      title: "Reading any adrenergic distribution question in four moves",
      intro:
        "The whole table distilled into an ordered decision path — NAME, PLACE, PREDICT, CHECK.",
      steps: [
        {
          label: "NAME — which subtype does the question involve?",
          detail:
            "The stem either names the receptor outright or hands you a drug whose selectivity implies it (a β1-selective blocker, a β2 agonist, a centrally acting α2 agonist, an α1 antagonist). The subtype is the address; everything else is reading.",
        },
        {
          label: "PLACE — read that subtype's printed tissue list",
          detail:
            "The tissue column is the subtype's membership list: α1 holds two smooth-muscle rows (Vascular, Visceral); α2 holds three gland/terminal rows (Pancreas, Presynaptic terminals, Salivary glands); β1 holds Heart and Kidney; β2 holds the five-row list (Bronchioles, Cardiac muscle, Liver, Arterial smooth muscle, Pancreas); β3 holds exactly one — Adipose.",
        },
        {
          label: "PREDICT — read across to the effect column",
          detail:
            "Each row carries exactly one effect: α1 constricts vessels and contracts visceral smooth muscle; α2 inhibits insulin secretion, neurotransmitter release, and salivary secretion; β1 raises heart rate and contractility and renin secretion; β2 dilates bronchioles, raises heart rate and contractility in cardiac muscle, releases glucose from the liver (glycogenolysis), dilates arterial smooth muscle, and stimulates insulin secretion; β3 raises lipolysis in adipose.",
        },
        {
          label: "CHECK — is the tissue double-booked?",
          detail:
            "If the question lands on the pancreas, the heart, or the vascular bed, confirm WHICH membership it means: the pancreas sits under α2 (inhibit insulin) AND β2 (stimulate insulin) — opposite directions; the heart sits under β1 (Heart) AND β2 (Cardiac muscle) — the same effect twice; the vessels sit under α1 (Vasoconstriction) AND β2 (Vasodilation) — opposite directions. The organ alone can never answer a direction question; only the (receptor, tissue) pair can.",
        },
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title: "The two rows that decide the most exam questions",
      body:
        "ROW 1 — α2 / Presynaptic terminals → Inhibition of neurotransmitter release. This is the presynaptic autoreceptor: the one adrenergic receptor whose printed effect is to turn sympathetic OUTPUT down — stimulating α2 on the terminal brakes norepinephrine release itself. It is the hook the autonomic synapse topic (book 238) expands into the full synapse story, and the mechanism behind centrally acting α2 agonists as antihypertensives — one drug action that simultaneously explains reduced neurotransmitter release, reduced insulin secretion (Pancreas row), and dry mouth (Salivary glands row), because all three are α2 rows. ROW 2 — β2 / Cardiac muscle → ↑ heart rate, contractility. The classic trap: students file β2 under 'lungs' and are surprised the table prints a cardiac row under β2 identical to β1's Heart row. β1 (Heart) and β2 (Cardiac muscle) BOTH raise heart rate and contractility — so a β2-selective agonist can still speed the heart, and the heart is double-booked exactly like the pancreas.",
    },
    {
      kind: "callout",
      variant: "why",
      title: "Why the effect column is keyed to the receptor, not the organ",
      body:
        "The table's deep rule: an effect belongs to a (receptor, tissue) PAIR — never to a tissue alone. The pancreas appears twice with opposite metabolic directions (α2 inhibits insulin, β2 stimulates it); the heart appears under two subtypes with the same effect (β1 and β2 both print ↑ heart rate, contractility); the vascular bed appears under two subtypes with opposite mechanical directions (α1 Vascular smooth muscle → Vasoconstriction vs β2 Arterial smooth muscle → Vasodilation). That is why the exam always supplies the receptor — or a drug that implies it — and asks for the effect: the directory has a printed answer. And it is why 'which receptor does tissue X carry' must be answered from the table, not from intuition: three tissues carry two receptors each, and only the subtype named in the stem picks the row.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 9-year-old boy with an acute asthma exacerbation is treated with an inhaled β2-selective agonist; within minutes his wheezing and dyspnea improve and his peak expiratory flow rises.",
        discriminator:
          "Bronchioles are the β2 airway row — Bronchioles → Bronchodilation",
        concept: "The β2 airway row (the two-lungs anchor)",
        answer:
          "β2's five-row membership list opens with Bronchioles → Bronchodilation: β2 stimulation of bronchiolar smooth muscle relaxes it, opening the airways — the row every inhaled β2 agonist in asthma and COPD therapy is built on.",
      },
      {
        stem: "A 61-year-old man after an anterior MI is started on a β1-selective antagonist; at follow-up his resting heart rate and blood pressure are lower, and plasma renin activity has fallen.",
        discriminator:
          "β1 prints TWO rows — Heart (↑ heart rate, contractility) and Kidney (↑ renin secretion) — so β1 blockade lowers all three",
        concept: "The β1 cardiac-renal pair (one subtype, two end-organs)",
        answer:
          "β1's membership list is Heart → ↑ heart rate, contractility and Kidney → ↑ renin secretion. Blocking β1 therefore lowers heart rate and contractility (the cardiac row) AND lowers renin release from the kidney (the renal row) — a single subtype explaining the drug's full cardiovascular footprint.",
      },
      {
        stem: "A 22-year-old man uses an intranasal α1-selective agonist as a decongestant; his nasal mucosal congestion resolves, and on a high dose his blood pressure rises.",
        discriminator:
          "α1's Vascular smooth muscle row — Vasoconstriction",
        concept: "The α1 vascular row (the squeeze subtype)",
        answer:
          "α1 prints exactly two rows, both smooth muscle: Vascular smooth muscle → Vasoconstriction and Visceral smooth muscle → Smooth muscle contraction. Vasoconstriction of the nasal mucosal vessels decongests the nose — and of systemic vessels raises blood pressure — which is why the same α1 action is a decongestant at low dose and a pressor at high dose.",
      },
      {
        stem: "A hypertensive patient started on a centrally acting α2-selective agonist returns with a dry mouth and mildly reduced fasting insulin; his blood pressure is controlled on the drug alone.",
        discriminator:
          "ALL THREE α2 rows are inhibitions — pancreas, presynaptic terminals, salivary glands",
        concept: "The α2 brake pedal (three inhibitions, one subtype)",
        answer:
          "The α2 membership list is three inhibition rows: Pancreas → Inhibition of insulin secretion, Presynaptic terminals → Inhibition of neurotransmitter release, Salivary glands → Inhibition of salivary secretion. An α2 agonist therefore lowers blood pressure (less neurotransmitter release from sympathetic terminals), dries the mouth (less salivary secretion), and modestly restrains insulin (pancreatic inhibition) — the whole cluster is one subtype's printed list.",
      },
      {
        stem: "A healthy volunteer in a clinical research unit receives a continuous infusion of a β2-selective agonist; alongside the expected bronchodilation, her heart rate rises modestly.",
        discriminator:
          "β2 prints Cardiac muscle → ↑ heart rate, contractility — the β2-is-not-only-lungs row",
        concept: "The β2 cardiac row (the heart's second membership)",
        answer:
          "β2's list includes Cardiac muscle → ↑ heart rate, contractility — printed with the same effect as β1's Heart row. A β2-selective agonist therefore raises heart rate through the cardiac-muscle row while it dilates bronchioles and arterial smooth muscle: β2 is not only lungs, and the heart is double-booked.",
      },
      {
        stem: "An investigational selective β3 agonist is infused in a metabolic study; plasma free fatty acids and glycerol rise, with no change in heart rate or bronchial tone.",
        discriminator:
          "β3 prints exactly ONE row — Adipose → ↑ lipolysis",
        concept: "The β3 one-row receptor (adipose only, in this table)",
        answer:
          "The table gives β3 a single membership: Adipose → ↑ lipolysis. β3 stimulation of adipose tissue breaks down triglyceride and raises circulating free fatty acids — with no printed cardiac or bronchiolar row, which is why the study shows no heart-rate or airway effect. (The bladder's β3 story lives on the top half of this very book page — the sibling micturition topic.)",
      },
    ],
    traps: [
      {
        a: "β1 — Heart → ↑ heart rate, contractility",
        b: "β2 — Cardiac muscle → ↑ heart rate, contractility",
        whyConfused:
          "Both print the IDENTICAL effect on the heart, so students assume one of them is a misprint or that only β1 is 'the cardiac receptor'",
        keyDifference:
          "The table books the heart under BOTH subtypes: β1's row is labeled Heart, β2's row is labeled Cardiac muscle, and both carry ↑ heart rate, contractility — β2's five-row list runs through the heart on its way to the lungs, liver, vessels, and pancreas",
        clue:
          "A β2-selective agonist (or the β2-cardiac-muscle row) still raises heart rate; 'β2 = lungs only' fails on this printed row",
      },
      {
        a: "α2 — Pancreas → Inhibition of insulin secretion",
        b: "β2 — Pancreas → Stimulation of insulin secretion",
        whyConfused:
          "The same organ, the same hormone, printed under two different subtypes — the effect column looks contradictory if you read by organ",
        keyDifference:
          "The direction lives in the receptor row, not the organ: α2 on the pancreas INHIBITS insulin secretion; β2 on the same pancreas STIMULATES it — the exam's cleanest demonstration that the (receptor, tissue) pair decides the effect",
        clue:
          "Any question pairing catecholamines with insulin: ask which subtype's row the drug occupies — α2 brake vs β2 accelerator",
      },
      {
        a: "α1 — Vascular smooth muscle → Vasoconstriction",
        b: "β2 — Arterial smooth muscle → Vasodilation",
        whyConfused:
          "Two rows about 'vessels' with opposite mechanical effects, and the tissue labels differ only subtly (Vascular vs Arterial)",
        keyDifference:
          "α1 constricts the vascular bed; β2 dilates the arterial bed — opposite directions on essentially the same territory, which is the tug-of-war behind blood pressure control and behind the pressor/depressor side effects of adrenergic drugs",
        clue:
          "Vasoconstriction questions point at the α1 row; vasodilation questions point at the β2 row — read the receptor, not the vessel word",
      },
      {
        a: "'Adrenergic receptor stimulation turns the sympathetic response UP'",
        b: "α2 — Presynaptic terminals → Inhibition of neurotransmitter release",
        whyConfused:
          "Every other row in the table is an end-organ effect, so the presynaptic row reads like an exception to 'adrenergic = more sympathetic output'",
        keyDifference:
          "α2 on the presynaptic terminal is the AUTOinhibitory feedback receptor: stimulating it inhibits norepinephrine release from the terminal itself — an adrenergic receptor whose stimulation turns sympathetic output DOWN",
        clue:
          "A drug that lowers sympathetic outflow while binding an adrenergic receptor is working the α2 presynaptic row (the autonomic synapse topic expands this hook)",
      },
      {
        a: "β3 — Adipose → ↑ lipolysis",
        b: "Assigning lipolysis to β1 or β2, or inventing extra β3 rows",
        whyConfused:
          "β3 is the least-drilled subtype, so its single row gets redistributed to the better-known β subtypes",
        keyDifference:
          "β3 prints exactly ONE row in the table — Adipose → ↑ lipolysis — with no cardiac, bronchiolar, hepatic, vascular, or pancreatic row; the other β subtypes have their own printed lists and none of them includes adipose",
        clue:
          "A lipolysis/free-fatty-acid question points at the one-row receptor: β3, adipose, ↑ lipolysis",
      },
    ],
    pivots: [
      {
        lookAlike:
          "Any question that names an adrenergic drug or receptor — where does it act, and what does it do?",
        differentiator:
          "Route by the directory, not by the drug class name: NAME the subtype (or the selectivity the drug implies), PLACE it on its printed tissue list (α1 two smooth-muscle rows; α2 three gland/terminal rows; β1 heart + kidney; β2 the five-row list; β3 adipose), PREDICT by reading across to the effect column.",
        correctPath:
          "Name → place → predict: the subtype is the address, the tissue list is the membership, the effect column is the answer — in that order, every time",
      },
      {
        lookAlike:
          "A 'which receptor does tissue X carry' question — a straight lookup that hides three traps",
        differentiator:
          "Three tissues are double-booked: the pancreas (α2 AND β2 — opposite insulin directions), the heart (β1 Heart AND β2 Cardiac muscle — same effect), and the vascular bed (α1 Vascular AND β2 Arterial — opposite directions). If the tissue is one of these three, the question must be telling you the receptor or the drug somewhere in the stem.",
        correctPath:
          "Look up the tissue in the directory; if it returns two subtypes, go back to the stem for the discriminator (drug selectivity, direction of the effect asked) before answering",
      },
      {
        lookAlike:
          "An effect-direction question — 'does adrenergic stimulation raise or lower X?'",
        differentiator:
          "The sign lives in the receptor row, never in the organ: α2 on the pancreas LOWERS insulin while β2 on the same pancreas RAISES it; α1 on vessels raises tone while β2 lowers it; and every α2 row is an inhibition while every β row is a stimulation (↑ heart rate, ↑ renin, bronchodilation, ↑ lipolysis, stimulation of insulin).",
        correctPath:
          "Never answer a direction question from the organ alone — identify the subtype first; the direction is a property of the printed row",
      },
    ],
    miniCase: {
      vignette:
        "A 58-year-old man with poorly controlled hypertension is switched to a centrally acting antihypertensive that is a selective agonist at a single adrenergic receptor subtype. At his follow-up visit his blood pressure is at goal, but he reports a persistently dry mouth, and fasting labs show a modest fall in fasting insulin with a slight rise in fasting glucose. His physician explains that the drug lowered his blood pressure by reducing norepinephrine release from sympathetic nerve terminals. All three findings — dry mouth, reduced insulin secretion, and reduced neurotransmitter release — trace to agonism at the one subtype. According to the adrenergic receptor distribution table, which subtype's printed tissue–effect list accounts for all three findings?",
      question:
        "Match the drug's target to the printed directory — choose the receptor whose tissue→effect rows cover all three findings.",
      options: [
        {
          label:
            "α2 — the subtype whose three printed rows are Salivary glands → inhibition of salivary secretion, Pancreas → inhibition of insulin secretion, and Presynaptic terminals → inhibition of neurotransmitter release",
          text: "One subtype, three inhibitions: saliva, insulin, neurotransmitter release.",
          correct: true,
          why:
            "Correct on every row. The α2 membership list in the printed table is exactly three rows, and every one of them is an inhibition: Salivary glands → Inhibition of salivary secretion (the dry mouth), Pancreas → Inhibition of insulin secretion (the reduced fasting insulin with the slight glucose rise), and Presynaptic terminals → Inhibition of neurotransmitter release (the reduced norepinephrine release that lowered the blood pressure). A selective α2 agonist recruits all three rows at once — which is precisely why this drug's efficacy and its two signature side effects arrive together.",
        },
        {
          label:
            "β2 — its list includes the pancreas, so the β2 rows should cover the salivary and presynaptic findings as well",
          text: "The pancreas is on the β2 list, so β2 explains the cluster.",
          why:
            "Wrong sign, wrong rows. β2's pancreas row is Stimulation of insulin secretion — the OPPOSITE of the reduced fasting insulin in the stem — and β2 prints no salivary-gland row and no presynaptic-terminal row at all; its five rows are Bronchioles, Cardiac muscle, Liver, Arterial smooth muscle, and Pancreas. This distractor exploits the pancreas double-booking: the organ sits under both subtypes, but the direction of the insulin effect belongs to the subtype, and only α2's row inhibits.",
        },
        {
          label:
            "α1 — the vascular subtype should also carry the glandular and terminal inhibitions",
          text: "The α subtype family shares the inhibitory rows.",
          why:
            "Wrong subtype entirely. α1 prints exactly two rows in the table, both smooth muscle: Vascular smooth muscle → Vasoconstriction and Visceral smooth muscle → Smooth muscle contraction. There is no α1 row on the pancreas, the salivary glands, or the presynaptic terminals, and nothing in the α1 column inhibits any secretion. An α1 agonist would tend to RAISE blood pressure via vasoconstriction — the opposite of this drug's effect.",
        },
        {
          label:
            "β1 — the cardiac-renal subtype explains metabolic and secretory findings through its end-organ reach",
          text: "β1 reaches the kidney, so it reaches the glands too.",
          why:
            "Wrong list. β1 prints exactly two rows: Heart → ↑ heart rate, contractility and Kidney → ↑ renin secretion. There is no β1 row on the pancreas, the salivary glands, or the presynaptic terminals — and both printed β1 effects are stimulations (↑), not the inhibitions the stem describes. The kidney's β1 row governs renin, not insulin; reading 'renal' as 'metabolic' is the conflation this option trades on.",
        },
      ],
      reasoning:
        "The stem hands you a subtype-SELECTIVE agonist and three findings, each of which is an inhibition of a secretion or a release: dry mouth (salivary), reduced fasting insulin (pancreatic), reduced norepinephrine release (presynaptic terminal). The table's directory answers in one lookup — only one subtype prints all three tissues, and that subtype is α2, whose three rows are all inhibitions. The β2 distractor is the sophisticated one: it exploits the pancreas double-booking (the only organ in the table booked under two subtypes), but it inverts the printed sign — β2's pancreas row STIMULATES insulin secretion, and β2 carries neither the salivary nor the presynaptic row. The α1 distractor offers the smooth-muscle squeeze subtype with no gland rows at all (and would raise, not lower, blood pressure); the β1 distractor offers the cardiac-renal pair whose two printed effects are both stimulations. Name the subtype, read its rows, check the signs: α2, three inhibitions, one drug.",
    },
  },
  mnemonics: [
    {
      code: "ONE HEART, TWO LUNGS, THREE FAT",
      meaning:
        "The β-subtype flagship anchors: β1 = ONE heart (the Heart → ↑ heart rate, contractility row); β2 = TWO lungs (the Bronchioles → Bronchodilation row — and β2's four other rows); β3 = THREE fat (the Adipose → ↑ lipolysis row — you have one heart, two lungs, and plenty of adipose). The count in the subtype name is the count of the flagship organ.",
      memorizes:
        "The flagship tissue anchor for each β subtype (β1 heart, β2 bronchioles, β3 adipose)",
      whenToUse:
        "Any question asking which β subtype sits in the heart, the airways, or adipose — or which drug class (β1 blocker, β2 agonist, β3 agonist) targets which organ",
      clinical:
        "β1-selective blockade for the post-MI heart; β2 agonists for the asthmatic airways; β3 for adipose lipolysis — the same number-to-organ mapping the drug list is built on.",
    },
    {
      code: "ALPHA-2, ALL BRAKES",
      meaning:
        "Every α2 row in the table is an INHIBITION — the subtype is a brake pedal with three brake lines: Pancreas → inhibition of INSULIN secretion, Presynaptic terminals → inhibition of NEUROTRANSMITTER release, Salivary glands → inhibition of SALIVARY secretion. Insulin, norepinephrine, saliva: three secretions, three brakes, one subtype.",
      memorizes:
        "The three α2 tissue→effect rows and the fact that all three are inhibitions",
      whenToUse:
        "Any question about α2 receptors, centrally acting α2 agonists (the antihypertensive with dry mouth), or catecholamine effects on insulin and saliva",
      clinical:
        "An α2 agonist lowers blood pressure (presynaptic brake on norepinephrine release) and produces dry mouth (salivary brake) and modestly reduced insulin (pancreatic brake) — one drug, three printed inhibitions.",
    },
    {
      code: "PANCREAS PAYS BOTH WAYS",
      meaning:
        "The one organ that holds TWO receptor memberships with OPPOSITE metabolic directions: the α2 row pays the pancreas to INHIBIT insulin secretion; the β2 row pays it to STIMULATE insulin secretion. Same islet, two doors, opposite signs — the receptor, not the organ, decides which way insulin moves.",
      memorizes:
        "The α2-vs-β2 pancreas double booking and its opposite insulin directions",
      whenToUse:
        "Any question pairing adrenergic drugs or catecholamines with insulin or glucose — and any 'which receptor does the pancreas carry' lookup",
      clinical:
        "Catecholamine storms and adrenergic drug effects on glucose route through both doors: α2-mediated insulin inhibition and β2-mediated insulin stimulation (plus β2's Liver → glycogenolysis, glucose release row) — net glycemia depends on which receptors dominate.",
    },
    {
      code: "NAME, PLACE, PREDICT",
      meaning:
        "The directory-reading protocol for every adrenergic question: NAME the subtype (from the stem or the drug's selectivity), PLACE it on its printed tissue list (α1 two smooth-muscle rows; α2 three gland/terminal rows; β1 heart + kidney; β2 the five-row list; β3 adipose), PREDICT the effect by reading across to the effect column. Then check the double bookings — pancreas, heart, vessels — because those three tissues answer to two subtypes each.",
      memorizes:
        "The reading order of the distribution table and the three double-booked tissues",
      whenToUse:
        "Every adrenergic pharmacology question — receptor lookup, drug target, or effect-direction prediction",
      clinical:
        "Before answering any adrenergic drug question, run the protocol: the subtype is the address, the tissue list is the membership, the effect column is the answer — and at a double-booked organ, the stem must tell you the subtype.",
    },
  ],
  rapidReview: {
    s30: [
      "α1: Vascular smooth muscle → Vasoconstriction; Visceral smooth muscle → Smooth muscle contraction",
      "α2: Pancreas → Inhibition of insulin secretion; Presynaptic terminals → Inhibition of neurotransmitter release; Salivary glands → Inhibition of salivary secretion",
      "β1: Heart → ↑ heart rate, contractility; Kidney → ↑ renin secretion",
      "β2: Bronchioles → Bronchodilation; Cardiac muscle → ↑ heart rate, contractility; Liver → Glycogenolysis, glucose release; Arterial smooth muscle → Vasodilation; Pancreas → Stimulation of insulin secretion",
      "β3: Adipose → ↑ lipolysis (the one-row subtype)",
      "The pancreas prints twice — α2 inhibits insulin secretion, β2 stimulates it",
      "The heart prints under two subtypes — β1 (Heart) and β2 (Cardiac muscle) both carry ↑ heart rate, contractility",
      "Every α2 row is an inhibition row; the presynaptic row is the autoreceptor that turns sympathetic output down",
    ],
    m3: [
      "ONE HEART, TWO LUNGS, THREE FAT — β1 anchors to the heart, β2 to the bronchioles, β3 to adipose lipolysis",
      "ALPHA-2, ALL BRAKES — insulin, neurotransmitter release, saliva: three inhibitions, one subtype",
      "PANCREAS PAYS BOTH WAYS — α2 inhibits insulin secretion, β2 stimulates it; the receptor sets the sign",
      "NAME, PLACE, PREDICT — subtype is the address, tissue list is the membership, effect column is the answer",
    ],
    m10: [
      "The entire subsection is ONE printed table: five receptor blocks, thirteen logical tissue→effect rows — there is no figure, and no prose at all",
      "The text layer interleaves (the m38 convention): each receptor's TISSUE cells print as a group, then its EFFECT(S) cells as a group — the row pairing is positional and was adjudicated on the VLM page render at 200 DPI",
      "The table prints the receptor names with REGULAR digits — α1, α2, β1, β2, β3 — while the top-half micturition figure on the SAME page prints α₁/β₃ with SUBSCRIPT digits; both are carried as printed",
      "The ↑ glyphs print in the text layer preceded by a \\x8f control-character artifact — a pdftotext artifact, not a printed character",
      "Page 236 (pdf 258) is a SHARED page: 'Micturition control' (top half, the sibling topic micturition-control — which owns the bladder figure and the 'Baby one more time.' margin note) and 'Tissue distribution of adrenergic receptors' (bottom half, THIS topic)",
      "Census: the page's three rasters are ALL top-half micturition anatomy silhouettes (brainstem/pons mask, bladder with urethra, detrusor crescent); the bottom half is a pure text table with zero rasters (PyMuPDF vector paths only) and no margin mnemonics — the KYP memory layer is original",
      "No source typos print in this half — the table text is clean",
    ],
  },
  recall: [
    {
      q: "α1's two printed rows, verbatim.",
      a: "Vascular smooth muscle → Vasoconstriction; Visceral smooth muscle → Smooth muscle contraction.",
    },
    {
      q: "α2's three printed rows, verbatim.",
      a: "Pancreas → Inhibition of insulin secretion; Presynaptic terminals → Inhibition of neurotransmitter release; Salivary glands → Inhibition of salivary secretion.",
    },
    {
      q: "β1's two printed rows, verbatim.",
      a: "Heart → ↑ heart rate, contractility; Kidney → ↑ renin secretion.",
    },
    {
      q: "β2's five printed rows, verbatim.",
      a: "Bronchioles → Bronchodilation; Cardiac muscle → ↑ heart rate, contractility; Liver → Glycogenolysis, glucose release; Arterial smooth muscle → Vasodilation; Pancreas → Stimulation of insulin secretion.",
    },
    {
      q: "β3's single printed row, verbatim.",
      a: "Adipose → ↑ lipolysis.",
    },
    {
      q: "Which organ prints under two different subtypes with OPPOSITE insulin directions — and what are the two rows?",
      a: "The pancreas: α2 → Inhibition of insulin secretion and β2 → Stimulation of insulin secretion.",
    },
    {
      q: "Which two subtypes print an ↑ heart rate, contractility row, and under which tissue labels?",
      a: "β1 (labeled Heart) and β2 (labeled Cardiac muscle) — the heart is double-booked with the same effect.",
    },
    {
      q: "Which subtype's every printed row is an inhibition, and what does its presynaptic row do?",
      a: "α2 — its Presynaptic terminals row is Inhibition of neurotransmitter release: the autoreceptor that turns sympathetic output down.",
    },
  ],
  related: [
    {
      title: "Autonomic Receptors: The Wiring Map",
      topicId: "autonomic-receptors",
      note: "The wiring figure on the facing page (book 234) is where these five subtypes physically sit: NE released from the postganglionic sympathetic fiber lands on α1/α2/β1/β2 chips at the targets — this table is the effect key for each chip the wiring diagram stamps.",
    },
    {
      title: "Acetylcholine Receptors: Nicotinic & Muscarinic",
      topicId: "acetylcholine-receptors",
      note: "The companion distribution page for the cholinergic half of the autonomic system (book 235): NN/NM/M1–5 with their locations — the same directory habit (name the subtype, read its list) works on both pages, and the two together cover every autonomic receptor the exam names.",
    },
    {
      title: "G-Protein Second Messengers",
      topicId: "g-protein-second-messengers",
      note: "The very next page (book 237): how each of these five subtypes signals INSIDE the cell — the Gs/Gi/Gq couplings that explain why α1, α2, β1, and β2 produce such different effects. This page gives the WHERE; that page gives the HOW.",
    },
    {
      title: "Autonomic Drugs: Synapse Targets & Overview",
      topicId: "autonomic-drugs-synapse",
      note: "The synapse page (book 238) expands this table's most consequential row — Presynaptic terminals → Inhibition of neurotransmitter release — into the full presynaptic-autoreceptor story that centrally acting α2 agonists exploit.",
    },
    {
      title: "Micturition Control",
      topicId: "micturition-control",
      note: "The SIBLING subsection on the top half of this very book page (book 236, the p196 shared-page convention): the bladder's autonomic receptors and the drug table built on them — including the β₃-receptor on the detrusor, the OTHER β3 story on the same page (this topic's table books β3 only under Adipose → ↑ lipolysis).",
    },
    {
      title: "Sympathomimetic Agents",
      topicId: "sympathomimetics",
      note: "The agonist side of this directory: every catecholamine and non-catecholamine agonist is defined by WHICH of these five membership lists it recruits — read the drug's subtype selectivity here, then predict its effects row by row.",
    },
  ],
  crossLinks: [
    {
      subject: "Cardiovascular physiology & pharmacology (the vascular tug-of-war)",
      connection:
        "The table's two vessel rows are the mechanism of arteriolar tone control: α1 Vascular smooth muscle → Vasoconstriction raises systemic vascular resistance and blood pressure, while β2 Arterial smooth muscle → Vasodilation lowers it — the same bed, opposite directions, which is why pressor and depressor side effects of adrenergic drugs are read straight off this pair. Add β1's Kidney → ↑ renin secretion row and the directory also gates the RAAS.",
    },
    {
      subject: "Endocrinology (catecholamines on glucose and insulin)",
      connection:
        "Adrenergic control of metabolism is three printed rows working together: α2 Pancreas → Inhibition of insulin secretion, β2 Pancreas → Stimulation of insulin secretion, and β2 Liver → Glycogenolysis, glucose release. Catecholamine surges push glucose up through the liver row while the insulin rows set how much insulin accompanies it — and the α2/β2 pancreas double-booking is why the direction is a receptor question, not an organ question.",
    },
    {
      subject: "Pulmonary medicine (the airway row)",
      connection:
        "β2 Bronchioles → Bronchodilation is the single most therapeutically exploited row in the table: inhaled β2-selective agonists in asthma and COPD resolve bronchospasm through exactly this row — and the β2 Cardiac muscle row is why tachycardia remains the classic side effect of a 'lung' drug.",
    },
    {
      subject: "Renal physiology (the renin row)",
      connection:
        "β1 Kidney → ↑ renin secretion links the sympathetic directory to the RAAS: sympathetically driven renin release (and its suppression by β1 blockade) is a printed β1 row, not an inferred one — a β1 antagonist lowers heart rate, contractility, AND renin because all three live under one subtype's membership list.",
    },
  ],
};
