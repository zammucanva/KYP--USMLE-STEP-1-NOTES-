import type { KypUsMLENote } from "../types";

// Pharmacology — PH-batch 12. Source: pdf 258 TOP half / book 236
// (Pharmacology — Autonomic Drugs: Micturition control — the TOP half of a
// SHARED page; the bottom half, "Tissue distribution of adrenergic
// receptors", is the sibling topic adrenergic-receptor-distribution, the
// p196 shared-page convention — only the Micturition-control block's
// contiguous lines 1-94 are quoted, stopping before the "Tissue
// distribution" heading at line 96; the indd slug + timestamp footer at
// lines 149-151 prints at the very foot of the page, AFTER the sibling's
// table, and is deliberately NOT quoted here — documented in the manifest).
// CENSUS (VLM AVAILABLE this session — three passes: full page @120dpi,
// full page @200dpi + the three extracted raster objects, 300dpi crops of
// the figure / the pons+mnemonic panel / the table; saved to
// .usmle-pipeline-cache/staging-ph12/vlm-census.txt):
// [1] pdfimages reports THREE spot-color ("sep") raster objects on the page
// (426x336, 383x518, 458x277 @316ppi) — VLM reads all three as
// white-silhouette anatomy LAYERS of the bladder illustration (the
// bladder+lower-tract funnel, the valentine-shaped bladder body with the
// urethral stem, and the crescent/lobulated detrusor wall band); every
// LABEL, leader line, the pons text block, the mnemonic, and the whole
// DRUGS/MECHANISM/APPLICATIONS table are live VECTOR TEXT — the figure is a
// mixed composite (raster anatomy layers + vector labels), not pure line
// art; nothing is reproduced (ORIGINAL KYP REDRAW).
// [2] The figure's printed labels, all in the text layer: M₃-receptor +
// Detrusor muscle; β₃-receptor (the text layer and both high-DPI VLM passes
// print ₃ — an early 120dpi VLM pass misread it as β₂ and is overruled);
// α₁-receptor; Internal urethral sphincter; External urethral sphincter;
// Pelvic nerve (parasympathetic input); Hypogastric nerve (sympathetic
// input); Pudendal nerve (somatic input); Nicotinic receptor; plus the
// Micturition-center-in-pons text block with the retention-vs-voiding
// opposition. Dark-teal numbered circles ❶❷❸ print beside the M₃ / β₃ / α₁
// receptor labels and repeat in the table's DRUGS column (rows 1-2 = ❶,
// row 3 = ❷, row 4 = ❸) — confirmed by two independent VLM passes AND
// PyMuPDF vector-drawing positions (7 filled circles at the three label
// positions + the four table rows).
// [3] MARGIN MNEMONIC: "Baby one more time." prints on its own line
// directly below the pons text block (x 385-471pt — inside the right text
// column, not the outer page margin), with the four first letters B, o, m,
// t in the First Aid mnemonic red (span color b82837). ADJUDICATION
// (documented in the manifest): the page's own anchor is the red-initial
// correspondence — the table's four example drugs print their initials in
// the same red (b-ethanechol, o-xybutynin, m-irabegron, t-amsulosin; span
// color c04d49), so the mnemonic memorizes the four example DRUGS in
// printed row order (and transitively their receptors, mechanisms, and
// applications). No letter-to-receptor anchor prints anywhere near the
// mnemonic (two high-DPI VLM passes + PyMuPDF span sweep agree), so the
// spec's tentative receptor-letter decode (B=β₃, O=α₁, M=M₃, T="time") is
// NOT what the page anchors; the mnemonic is carried ATTRIBUTED to First
// Aid and the four KYP codes below are separately authored.
// [4] TABLE INTERLEAVE (the m38 convention): the table's subscript digits
// (3, 3, 3, 1) and row tails print on separate lines below the row heads
// (lines 75-94); the logical printed table is reconstructed via the VLM
// crops and carried VERBATIM in printed row order in the note's table
// block. No source typos found on this half. The KYP diagram, drug-card
// layer, exam layer, and the four KYP mnemonics are original.

export const micturitionControl: KypUsMLENote = {
  id: "micturition-control",
  title: "Micturition Control: The Bladder Pharmacology",
  subtitle:
    "One organ, three nerves, four receptor levers. The micturition center in pons coordinates sympathetic storage (hypogastric nerve → β₃ relaxation of detrusor + α₁ contraction of the internal urethral sphincter → ↑ urinary retention) against parasympathetic emptying (pelvic nerve → M₃ contraction of detrusor → ↑ urine voiding), with the pudendal nerve holding the somatic line (nicotinic receptor on the external urethral sphincter). Four drug classes tip the balance: bethanechol ⊕ M₃, oxybutynin ⊝ M₃, mirabegron ⊕ β₃, tamsulosin ⊝ α₁ — two roads to urgency incontinence, two ways to restore flow (book 236).",
  subject: "Pharmacology",
  system:
    "Section II · High-Yield General Principles — Pharmacology: Autonomic Drugs",
  pilotCategory: "Pharmacology mechanism",
  difficulty: 2,
  readTime: 5,
  sourceRef:
    "First Aid 2026, Part 1 pp. 236–236 (Pharmacology — Autonomic Drugs: Micturition control; …)",
  tags: [
    "micturition",
    "bladder",
    "detrusor",
    "internal urethral sphincter",
    "external urethral sphincter",
    "pelvic nerve",
    "hypogastric nerve",
    "pudendal nerve",
    "M3 receptor",
    "beta-3 receptor",
    "alpha-1 receptor",
    "nicotinic receptor",
    "bethanechol",
    "oxybutynin",
    "mirabegron",
    "tamsulosin",
    "urinary retention",
    "urgency incontinence",
    "BPH",
    "autonomic pharmacology",
    "pontine micturition center",
  ],
  core: {
    what:
      "Micturition control is autonomic wiring around a single organ. The Micturition center in pons regulates involuntary bladder function via coordination of sympathetic and parasympathetic nervous systems — ⊕ sympathetic → ↑ urinary retention; ⊕ parasympathetic → ↑ urine voiding — and some autonomic drugs act on smooth muscle receptors to treat bladder dysfunction. The wiring: the hypogastric nerve (sympathetic input) drives storage — β₃-receptor relaxes the detrusor muscle while α₁-receptor contracts the internal urethral sphincter (smooth muscle); the pelvic nerve (parasympathetic input) drives emptying — M₃-receptor contracts the detrusor; and the pudendal nerve (somatic input) ends on a nicotinic receptor at the external urethral sphincter (skeletal muscle, the voluntary hold). The printed table routes four drug classes through three of those receptors: muscarinic agonists (eg, bethanechol) ⊕ M₃ → contraction of detrusor smooth muscle → ↑ bladder emptying (urinary retention); muscarinic antagonists (eg, oxybutynin) ⊝ M₃ → relaxation of detrusor smooth muscle → ↓ detrusor overactivity (urgency incontinence); sympathomimetics (eg, mirabegron) ⊕ β₃ → relaxation of detrusor smooth muscle → ↑ bladder capacity (urgency incontinence); α₁-antagonists (eg, tamsulosin) ⊝ α₁-receptor → relaxation of smooth muscle (eg, bladder, neck, prostate) → ↓ urinary obstruction (BPH).",
    why:
      "This page is the cleanest application question in autonomic pharmacology, because every row is a two-step derivation: name the tissue (detrusor vs internal urethral sphincter vs external urethral sphincter), name its receptor (M₃, β₃, α₁, nicotinic), and the muscle response follows. It also carries the chapter's best same-answer-different-receptor lesson: oxybutynin and mirabegron BOTH treat urgency incontinence and BOTH work by relaxing the detrusor — one by taking the foot off M₃, the other by pressing β₃ — a distinction that decides a real-world choice (anticholinergic burden in the elderly vs none). And it binds the two halves of the chapter together: the detrusor's M₃ is one of the M1–5 family, its β₃ and α₁ are adrenergic receptors whose tissue distribution prints on the bottom half of this very page, and the BPH row explains why an α₁-antagonist is a urology drug. The figure's ❶❷❸ circles tie each drug row to the receptor label it turns.",
    keyIdea:
      "Read every micturition drug question in four moves. MOVE 1 — PLACE THE TISSUE: detrusor (the pump), internal urethral sphincter (the smooth-muscle gate), or external urethral sphincter (the skeletal-muscle gate). MOVE 2 — NAME THE RECEPTOR AT THAT TISSUE: detrusor carries M₃ (contract) AND β₃ (relax) — two levers on one muscle; the internal sphincter carries α₁ (contract); the external sphincter carries nicotinic (somatic, contract). MOVE 3 — PREDICT THE MUSCLE RESPONSE from the drug's direction: ⊕ or ⊝ at that receptor decides contract vs relax. MOVE 4 — MATCH THE PRINTED APPLICATION: retention → contract the pump (⊕ M₃) or open the obstructed gate (⊝ α₁); urgency incontinence → relax the overactive pump (⊝ M₃ or ⊕ β₃); BPH obstruction → ⊝ α₁ at the bladder, neck, prostate. Retention and voiding are the two directions of one balance — every drug in the table just tips it.",
  },
  mechanisms: [
    {
      id: "retention-vs-voiding-map",
      title:
        "The pontine fork: sympathetic storage vs parasympathetic voiding (plus the somatic hold)",
      context: "The pons text block and the three nerve paths (book 236 figure)",
      flow: {
        nodes: [
          {
            id: "pons",
            label: "MICTURITION CENTER IN PONS",
            sublabel:
              "Input — regulates involuntary bladder function via coordination of sympathetic and parasympathetic nervous systems; some autonomic drugs act on smooth muscle receptors to treat bladder dysfunction.",
            variant: "input",
          },
          {
            id: "sympathetic",
            label: "SYMPATHETIC — hypogastric nerve (sympathetic input)",
            sublabel:
              "Storage mode: β₃-receptor relaxes the detrusor muscle while α₁-receptor contracts the internal urethral sphincter — a relaxed pump behind a closed smooth-muscle gate.",
            variant: "process",
          },
          {
            id: "parasympathetic",
            label: "PARASYMPATHETIC — pelvic nerve (parasympathetic input)",
            sublabel:
              "Emptying mode: M₃-receptor contracts the detrusor smooth muscle — the pump squeezes.",
            variant: "process",
          },
          {
            id: "somatic",
            label: "SOMATIC — pudendal nerve (somatic input)",
            sublabel:
              "The voluntary line: a nicotinic receptor on the external urethral sphincter, which is skeletal muscle — not part of the involuntary pontine coordination.",
            variant: "input",
          },
          {
            id: "retention",
            label: "↑ URINARY RETENTION — the storage state",
            sublabel:
              "Output — ⊕ sympathetic → ↑ urinary retention: β₃-relaxed detrusor fills to capacity behind the α₁-contracted internal sphincter.",
            variant: "output",
          },
          {
            id: "voiding",
            label: "↑ URINE VOIDING — the emptying state",
            sublabel:
              "Output — ⊕ parasympathetic → ↑ urine voiding: M₃-driven detrusor contraction empties the bladder.",
            variant: "output",
          },
          {
            id: "hold",
            label: "VOLUNTARY EXTERNAL SPHINCTER HOLD",
            sublabel:
              "Output — the pudendal line: nicotinic receptor → external urethral sphincter (skeletal muscle) contraction, the learned hold that gates voiding socially.",
            variant: "output",
          },
        ],
        edges: [
          { from: "pons", to: "sympathetic", label: "coordinates the storage division" },
          { from: "pons", to: "parasympathetic", label: "coordinates the emptying division" },
          {
            from: "sympathetic",
            to: "retention",
            label: "β₃ (detrusor relax) + α₁ (internal sphincter contract)",
          },
          { from: "parasympathetic", to: "voiding", label: "M₃ → detrusor contraction" },
          { from: "somatic", to: "hold", label: "nicotinic → skeletal-muscle sphincter" },
        ],
      },
    },
    {
      id: "four-drugs-one-organ-map",
      title:
        "The four printed rows: four drug classes routed through three smooth-muscle receptors",
      context: "The DRUGS / MECHANISM / APPLICATIONS table (book 236), verbatim",
      flow: {
        nodes: [
          {
            id: "table",
            label: "THE PRINTED TABLE — four rows, three receptors",
            sublabel:
              "Input — each drug class picks ONE smooth-muscle receptor of the micturition wiring and pushes it ⊕ or ⊝; the application column is the clinical balance being tipped.",
            variant: "input",
          },
          {
            id: "m3",
            label: "M₃ — detrusor smooth muscle ❶",
            sublabel:
              "The parasympathetic detrusor lever: bethanechol (muscarinic agonists) turns it ⊕; oxybutynin (muscarinic antagonists) turns it ⊝.",
            variant: "target",
          },
          {
            id: "b3",
            label: "β₃ — detrusor smooth muscle ❷",
            sublabel:
              "The sympathetic detrusor lever: mirabegron (sympathomimetics) turns it ⊕ — the same muscle as M₃, the opposite response.",
            variant: "target",
          },
          {
            id: "a1",
            label: "α₁ — internal urethral sphincter / outflow ❸",
            sublabel:
              "The smooth-muscle gate and the prostate: tamsulosin (α₁-antagonists) turns it ⊝ at the bladder, neck, prostate.",
            variant: "target",
          },
          {
            id: "out-empty",
            label: "CONTRACTION of detrusor → ↑ bladder emptying",
            sublabel:
              "Output — Urinary retention: the underactive pump is made to squeeze (bethanechol's row).",
            variant: "output",
          },
          {
            id: "out-overactive",
            label: "RELAXATION of detrusor → ↓ detrusor overactivity",
            sublabel:
              "Output — Urgency incontinence: the overactive pump is calmed (oxybutynin's row).",
            variant: "output",
          },
          {
            id: "out-capacity",
            label: "RELAXATION of detrusor → ↑ bladder capacity",
            sublabel:
              "Output — Urgency incontinence: the same destination as oxybutynin's row, reached through the sympathetic lever instead (mirabegron's row).",
            variant: "output",
          },
          {
            id: "out-obstruction",
            label: "RELAXATION of smooth muscle (eg, bladder, neck, prostate) → ↓ urinary obstruction",
            sublabel:
              "Output — BPH: the tightened outflow tract is opened (tamsulosin's row).",
            variant: "output",
          },
        ],
        edges: [
          { from: "table", to: "m3", label: "⊕ muscarinic agonists (eg, bethanechol)", type: "stimulate" },
          { from: "table", to: "m3", label: "⊝ muscarinic antagonists (eg, oxybutynin)", type: "inhibit" },
          { from: "table", to: "b3", label: "⊕ sympathomimetics (eg, mirabegron)", type: "stimulate" },
          { from: "table", to: "a1", label: "⊝ α₁-antagonists (eg, tamsulosin)", type: "inhibit" },
          { from: "m3", to: "out-empty", label: "contraction of detrusor smooth muscle", type: "stimulate" },
          { from: "m3", to: "out-overactive", label: "relaxation of detrusor smooth muscle", type: "inhibit" },
          { from: "b3", to: "out-capacity", label: "relaxation of detrusor smooth muscle", type: "stimulate" },
          { from: "a1", to: "out-obstruction", label: "relaxation of smooth muscle (eg, bladder, neck, prostate)", type: "inhibit" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "micturition-map",
      title: "The micturition wiring map (an original KYP redraw)",
      caption:
        "An original KYP redraw of the bladder innervation figure (book 236): the MICTURITION CENTER IN PONS band at top with the printed opposition — ⊕ sympathetic → ↑ urinary retention vs ⊕ parasympathetic → ↑ urine voiding — feeding a bladder glyph with its DETRUSOR MUSCLE wall, funnel neck, and urethra carrying the two gates: INTERNAL URETHRAL SPHINCTER (smooth muscle, α₁-receptor chip ❸) and EXTERNAL URETHRAL SPHINCTER (skeletal muscle, NICOTINIC RECEPTOR chip); three nerve paths enter from the left — PELVIC NERVE (parasympathetic input) → M₃-receptor chip ❶ on the detrusor, HYPOGASTRIC NERVE (sympathetic input) branching to the β₃-receptor chip ❷ on the detrusor AND the α₁ chip at the internal sphincter, PUDENDAL NERVE (somatic input) curving to the nicotinic chip at the external sphincter — with the retention-vs-voiding fork band, the four drug rows as numbered dock cards (❶❶❷❸ matching the figure's circled receptor labels), and the First Aid mnemonic chip.",
      notice:
        "Census: pdfimages finds THREE spot-color raster objects on the page (426×336, 383×518, 458×277 @316ppi) — VLM (available this session, three passes) reads them as the white-silhouette anatomy LAYERS of the bladder illustration; every label, leader line, the pons text, the mnemonic, and the whole table are live vector text. The figure is therefore a mixed composite, and this diagram is an ORIGINAL KYP REDRAW — no source artwork is reproduced; every printed label, the three nerves, the two sphincters, the receptor placements, the numbered ❶❷❸ cross-reference circles, and the retention/voiding opposition are preserved. The mnemonic 'Baby one more time.' is First Aid's own (carried attributed below); the KYP memory codes are original.",
    },
    {
      kind: "table",
      title:
        "Book 236 — the printed DRUGS / MECHANISM / APPLICATIONS table, carried verbatim (printed row order)",
      intro:
        "The whole therapeutic half of the page in four rows, exactly as printed — the circled numbers ❶❶❷❸ are the book's own cross-reference markers linking each drug row to the receptor label it turns in the figure (preserved).",
      columns: ["DRUGS", "MECHANISM", "APPLICATIONS"],
      rows: [
        [
          "❶ Muscarinic agonists (eg, bethanechol)",
          "⊕ M₃ receptor → contraction of detrusor smooth muscle → ↑ bladder emptying",
          "Urinary retention",
        ],
        [
          "❶ Muscarinic antagonists (eg, oxybutynin)",
          "⊝ M₃ receptor → relaxation of detrusor smooth muscle → ↓ detrusor overactivity",
          "Urgency incontinence",
        ],
        [
          "❷ Sympathomimetics (eg, mirabegron)",
          "⊕ β₃ receptor → relaxation of detrusor smooth muscle → ↑ bladder capacity",
          "Urgency incontinence",
        ],
        [
          "❸ α₁-antagonists (eg, tamsulosin)",
          "⊝ α₁-receptor → relaxation of smooth muscle (eg, bladder, neck, prostate) → ↓ urinary obstruction",
          "BPH",
        ],
      ],
      caption:
        "Text-layer note (the m38 interleave): in the extraction the four subscript digits (3, 3, 3, 1) and the row tails print on separate lines below the row heads, interleaved across rows; the logical table above is the printed table as it reads on the page (adjudicated on 300dpi VLM crops). Two rows share the application 'Urgency incontinence' through OPPOSITE receptor moves — ⊝ M₃ and ⊕ β₃ — both converging on detrusor relaxation.",
    },
    {
      kind: "compare",
      title: "Storage vs voiding — the autonomic opposition printed in the pons text",
      intro:
        "The same balance the drug table tips, shown as the two autonomic divisions the pontine center coordinates. The third rail is SOMATIC and sits outside this opposition: the pudendal nerve (somatic input) ends on a nicotinic receptor at the external urethral sphincter — skeletal muscle, the voluntary hold — and the printed table's drugs touch only the smooth-muscle receptors (M₃, β₃, α₁).",
      columns: [
        "SYMPATHETIC — storage (retention)",
        "PARASYMPATHETIC — emptying (voiding)",
      ],
      rows: [
        {
          label: "Nerve (input)",
          a: "Hypogastric nerve (sympathetic input)",
          b: "Pelvic nerve (parasympathetic input)",
        },
        {
          label: "Detrusor muscle",
          a: "β₃-receptor → relaxation (a compliant reservoir)",
          b: "M₃-receptor → contraction (the pump squeezes)",
        },
        {
          label: "Outflow gate",
          a: "α₁-receptor → internal urethral sphincter contraction (the smooth-muscle gate stays shut)",
          b: "the α₁-held gate is no longer driven — the M₃ squeeze meets an open outflow",
        },
        {
          label: "Net printed effect",
          a: "⊕ sympathetic → ↑ urinary retention",
          b: "⊕ parasympathetic → ↑ urine voiding",
        },
      ],
    },
    {
      kind: "steps",
      title: "Reading any micturition drug question in four moves",
      intro:
        "The whole page distilled into an ordered decision path — PLACE, NAME, PREDICT, MATCH.",
      steps: [
        {
          label: "PLACE — which tissue does the question involve?",
          detail:
            "Detrusor (the pump), internal urethral sphincter (the smooth-muscle gate at the bladder neck), or external urethral sphincter (the skeletal-muscle gate). The figure labels exactly these three targets; the BPH row adds the prostate to the α₁ tissue list.",
        },
        {
          label: "NAME — which receptor sits at that tissue?",
          detail:
            "Detrusor carries TWO: M₃ (parasympathetic, pelvic nerve) and β₃ (sympathetic, hypogastric nerve). The internal urethral sphincter carries α₁ (sympathetic). The external urethral sphincter carries nicotinic (somatic, pudendal nerve).",
        },
        {
          label: "PREDICT — what does the drug's ⊕ or ⊝ do to that receptor?",
          detail:
            "M₃ ⊕ contracts the detrusor; M₃ ⊝ relaxes it. β₃ ⊕ relaxes the detrusor. α₁ ⊝ relaxes the bladder neck/prostate smooth muscle. Nicotinic ⊝ would be a neuromuscular-blocker question, not a bladder-drug question — the somatic line is the voluntary one.",
        },
        {
          label: "MATCH — which printed application is being tipped?",
          detail:
            "Urinary retention → ↑ bladder emptying (⊕ M₃, bethanechol) or ↓ urinary obstruction (⊝ α₁, tamsulosin) depending on whether the problem is the pump or the gate. Urgency incontinence → relax the overactive detrusor by EITHER road: ⊝ M₃ (oxybutynin) or ⊕ β₃ (mirabegron). BPH → the α₁ row.",
        },
      ],
    },
    {
      kind: "callout",
      variant: "memory",
      title: "Mnemonic provenance — what is First Aid's and what is KYP's",
      body:
        "First Aid's own mnemonic prints on this page (book 236), on its own line directly below the pons text block: 'Baby one more time.' — with the four first letters B, o, m, t printed in the First Aid mnemonic red. The page's own anchor is the red-initial correspondence with the table: the four example drugs print their initials in the same red — B-aby = b-ethanechol (⊕ M₃ → contraction of detrusor smooth muscle → ↑ bladder emptying; urinary retention), o-ne = o-xybutynin (⊝ M₃ → relaxation of detrusor smooth muscle → ↓ detrusor overactivity; urgency incontinence), m-ore = m-irabegron (⊕ β₃ → relaxation of detrusor smooth muscle → ↑ bladder capacity; urgency incontinence), t-ime = t-amsulosin (⊝ α₁-receptor → relaxation of smooth muscle (eg, bladder, neck, prostate) → ↓ urinary obstruction; BPH). No letter-to-receptor anchor prints anywhere near the mnemonic (adjudicated on 300dpi crops + a span-color sweep) — the mnemonic memorizes the four example DRUGS in printed row order, and carries their receptors and applications transitively. The four ALL-CAPS KYP codes in the Memory section below are original KYP mnemonics, authored for this note and recorded as kypExtensions.",
    },
  ],
  drugs: [
    {
      drug: "Bethanechol",
      klass: "Muscarinic agonists (cholinomimetic)",
      target: "M₃ receptor on detrusor smooth muscle",
      mechanism: "⊕ M₃ receptor → contraction of detrusor smooth muscle",
      effect: "↑ bladder emptying — the underactive pump is made to squeeze",
      uses: "Urinary retention (the printed application)",
      adverse:
        "Cholinergic overflow: sweating, salivation, flushing, abdominal cramping, hypotension (KYP addition — not printed on book 236)",
      clue: "The ❶ ⊕ row of the printed table — retention with a full, atonic bladder.",
    },
    {
      drug: "Oxybutynin",
      klass: "Muscarinic antagonists (anticholinergic)",
      target: "M₃ receptor on detrusor smooth muscle",
      mechanism: "⊝ M₃ receptor → relaxation of detrusor smooth muscle",
      effect: "↓ detrusor overactivity — the overactive pump is calmed",
      uses: "Urgency incontinence (the printed application)",
      adverse:
        "Anticholinergic burden: dry mouth, constipation, blurred vision, urinary retention risk, confusion in the elderly (KYP addition — not printed on book 236)",
      clue: "The ❶ ⊝ row — urge with urgency plus frequency, minus obstruction.",
    },
    {
      drug: "Mirabegron",
      klass: "Sympathomimetics (β₃ agonist)",
      target: "β₃ receptor on detrusor smooth muscle",
      mechanism: "⊕ β₃ receptor → relaxation of detrusor smooth muscle",
      effect: "↑ bladder capacity — the same relaxation oxybutynin buys, without muscarinic blockade",
      uses: "Urgency incontinence (the printed application)",
      adverse:
        "Hypertension, tachycardia, urinary retention risk at overdosage (KYP addition — not printed on book 236)",
      clue: "The ❷ ⊕ row — the urge patient who cannot tolerate anticholinergic effects.",
    },
    {
      drug: "Tamsulosin",
      klass: "α₁-antagonists (α-blocker)",
      target: "α₁ receptor on bladder-neck and prostate smooth muscle",
      mechanism:
        "⊝ α₁-receptor → relaxation of smooth muscle (eg, bladder, neck, prostate)",
      effect: "↓ urinary obstruction — the tightened outflow tract is opened",
      uses: "BPH (the printed application)",
      adverse:
        "Orthostatic hypotension, dizziness, ejaculatory dysfunction (KYP addition — not printed on book 236)",
      clue: "The ❸ ⊝ row — obstructive symptoms (hesitancy, weak stream, nocturia) with an enlarged prostate.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 61-year-old man cannot void on the first postoperative day after inguinal hernia repair; bedside bladder scan shows a large residual volume and the bladder is palpable, but urethral catheterization shows no mechanical obstruction.",
        discriminator:
          "Urinary retention with an underactive detrusor and NO obstruction → contract the pump: ⊕ M₃",
        concept: "The bethanechol row (muscarinic agonists)",
        answer:
          "Muscarinic agonists (eg, bethanechol) ⊕ M₃ receptor → contraction of detrusor smooth muscle → ↑ bladder emptying, printed application: urinary retention. The parasympathetic lever is the direct fix for a pump that will not squeeze — provided the outflow gate is not the problem.",
      },
      {
        stem: "A 78-year-old woman with urgency incontinence was started on oxybutynin; her urgency improved but she developed dry mouth, constipation, and new confusion, and the drug is stopped.",
        discriminator:
          "Same printed application, different receptor — the urge can be treated by relaxing the detrusor through β₃ instead of blocking M₃",
        concept: "The mirabegron row (sympathomimetics) vs the oxybutynin row",
        answer:
          "Sympathomimetics (eg, mirabegron) ⊕ β₃ receptor → relaxation of detrusor smooth muscle → ↑ bladder capacity, printed application: urgency incontinence. Both urge rows converge on detrusor relaxation — ⊝ M₃ or ⊕ β₃ — but only the muscarinic-antagonist road carries anticholinergic burden, which this patient cannot tolerate.",
      },
      {
        stem: "A 69-year-old man reports hesitancy, a weak stream, straining, and nocturia; examination confirms an enlarged, smooth prostate, and his residual volume is rising.",
        discriminator:
          "Obstructive (not overactive) lower urinary tract symptoms — the problem is the α₁-stocked gate, not the pump",
        concept: "The tamsulosin row (α₁-antagonists)",
        answer:
          "α₁-antagonists (eg, tamsulosin) ⊝ α₁-receptor → relaxation of smooth muscle (eg, bladder, neck, prostate) → ↓ urinary obstruction, printed application: BPH. The α₁ receptor keeps the internal urethral sphincter and the prostate wrapped around the outflow tight; blocking it opens the tract without touching the detrusor.",
      },
    ],
    traps: [
      {
        a: "β₃-receptor on the detrusor",
        b: "M₃-receptor on the detrusor",
        whyConfused:
          "Both receptors sit on the SAME smooth muscle, so 'detrusor receptor' is ambiguous",
        keyDifference:
          "β₃ (sympathetic, hypogastric nerve) RELAXES the detrusor — ↑ bladder capacity, the storage lever; M₃ (parasympathetic, pelvic nerve) CONTRACTS the detrusor — ↑ bladder emptying, the voiding lever",
        clue:
          "Storage/sympathetic/capacity → β₃; voiding/parasympathetic/emptying → M₃ — one muscle, two opposite levers",
      },
      {
        a: "Oxybutynin (⊝ M₃)",
        b: "Mirabegron (⊕ β₃)",
        whyConfused:
          "Both print the same APPLICATION — urgency incontinence — and both relax the detrusor",
        keyDifference:
          "Oxybutynin blocks the parasympathetic lever and carries anticholinergic burden; mirabegron presses the sympathetic lever and does not — the choice between them is a side-effect question, not an efficacy question",
        clue:
          "An urge patient with dry mouth, constipation, or confusion is being handed the β₃ row next",
      },
      {
        a: "Internal urethral sphincter — α₁-receptor (smooth muscle)",
        b: "External urethral sphincter — nicotinic receptor (skeletal muscle)",
        whyConfused:
          "Both are 'the sphincter' holding urine in",
        keyDifference:
          "The internal sphincter is autonomic (hypogastric/sympathetic → α₁ → contraction, relaxed by α₁-antagonists for BPH); the external sphincter is somatic (pudendal nerve → nicotinic → voluntary contraction, the preserve of neuromuscular pharmacology)",
        clue:
          "A drug question about BPH or bladder-neck obstruction means α₁; a question about voluntary continence or skeletal-muscle blockade means the pudendal/nicotinic line",
      },
    ],
    pivots: [
      {
        lookAlike:
          "Any incontinence-or-retention stem — which receptor should the drug turn?",
        differentiator:
          "First decide the DIRECTION of the imbalance: retention (nothing comes out — pump too weak OR gate too tight) vs urgency incontinence (everything comes out — pump overactive). Retention then splits by cause: weak pump → ⊕ M₃ (bethanechol); tight gate/prostate → ⊝ α₁ (tamsulosin). Urge → relax the detrusor by either road: ⊝ M₃ (oxybutynin) or ⊕ β₃ (mirabegron).",
        correctPath:
          "Direction first (retention vs urge), then tissue (pump vs gate), then receptor (M₃/β₃/α₁) — the printed APPLICATIONS column is the answer key",
      },
      {
        lookAlike:
          "A drug name is given and the mechanism is asked — or a mechanism is given and the drug is asked",
        differentiator:
          "Route every drug through its receptor chip, never through its name or class label: bethanechol and oxybutynin are BOTH 'muscarinic' drugs on opposite signs of M₃; mirabegron is a sympathomimetic that behaves, at the bladder, exactly like an anticholinergic (both relax the detrusor); tamsulosin is the only row that acts at the outflow tract instead of the pump.",
        correctPath:
          "Tissue → receptor → ⊕/⊝ → muscle response → application: the five columns of the printed table in reading order",
      },
    ],
    miniCase: {
      vignette:
        "A 74-year-old woman has urinary urgency with frequency and urge incontinence that wakes her twice nightly. Oxybutynin was started six weeks ago and stopped after she developed severe dry mouth, constipation, and an episode of confusion; her symptoms returned. She takes no other medications, has no prolapse on examination, and post-void residual is negligible. Which of the following mechanisms is the most appropriate next pharmacologic step for her urgency incontinence?",
      question:
        "Pick the mechanism that treats her condition while avoiding the effect that forced the first drug to be stopped.",
      options: [
        {
          label:
            "⊕ β₃ receptor → relaxation of detrusor smooth muscle → ↑ bladder capacity",
          text: "Switch the lever, keep the destination (mirabegron).",
          correct: true,
          why:
            "Correct. Her diagnosis is urgency incontinence, and the printed table offers TWO roads to it: ⊝ M₃ (the oxybutynin row she failed on anticholinergic grounds) and ⊕ β₃ (the mirabegron row). The sympathomimetic road presses the sympathetic storage lever on the same detrusor — relaxation of detrusor smooth muscle → ↑ bladder capacity — without touching muscarinic receptors anywhere, so the dry mouth, constipation, and confusion that stopped oxybutynin do not recur. Same destination, different receptor, no anticholinergic burden.",
        },
        {
          label:
            "⊕ M₃ receptor → contraction of detrusor smooth muscle → ↑ bladder emptying",
          text: "If the bladder is the problem, squeeze it (bethanechol).",
          why:
            "Wrong direction. ⊕ M₃ is the retention row — bethanechol contracts the detrusor to raise bladder emptying for a bladder that will not empty. Her problem is the opposite: an overactive detrusor with urge and a negligible residual. Making the pump squeeze harder is the exact opposite of the ↓ detrusor overactivity her condition calls for, and would worsen the incontinence.",
        },
        {
          label:
            "⊝ M₃ receptor → relaxation of detrusor smooth muscle → ↓ detrusor overactivity",
          text: "The mechanism that worked — give it again (oxybutynin).",
          why:
            "Right receptor, wrong patient history. ⊝ M₃ IS a printed road to urgency incontinence — but it is the road this patient just traveled and had to abandon: the muscarinic blockade that calms the detrusor also evicts M receptors at the exocrine glands, bowel, and brain, producing her dry mouth, constipation, and confusion. The question asks for the next step after oxybutynin failure due to anticholinergic effects; re-committing to the same mechanism repeats the harm.",
        },
        {
          label:
            "⊝ α₁-receptor → relaxation of smooth muscle (eg, bladder, neck, prostate) → ↓ urinary obstruction",
          text: "Open the outflow tract (tamsulosin).",
          why:
            "Wrong application. ⊝ α₁ is the BPH row — it relaxes the bladder-neck/prostate smooth muscle to lower urinary obstruction in a patient whose outflow is mechanically narrowed (hesitancy, weak stream, large residual). She is a 74-year-old woman with negligible residual and urge, not obstruction; her outflow tract is not the problem, and opening it further does nothing for an overactive detrusor — if anything it removes a brake.",
        },
      ],
      reasoning:
        "The stem is built on the table's most testable asymmetry: TWO rows print the application 'Urgency incontinence' through OPPOSITE receptor moves that converge on the same muscle response — ⊝ M₃ (oxybutynin) and ⊕ β₃ (mirabegron) both yield relaxation of detrusor smooth muscle, one delivering ↓ detrusor overactivity, the other ↑ bladder capacity. Option-by-option: the correct answer switches to the β₃ road precisely because the stem's drug-failure detail (dry mouth, constipation, confusion — the anticholinergic pattern) disqualifies the muscarinic-antagonist row, making the sympathomimetic row the printed alternative. The bethanechol distractor inverts the direction of the imbalance (retention vs urge — it would ↑ bladder emptying a bladder that empties fine). The oxybutynin distractor has the right target but ignores the stem's whole point — the intolerance — testing whether you read WHY a drug was stopped, not just that it 'worked.' The tamsulosin distractor applies the BPH row to an urge patient, conflating obstructive pathology (an α₁-tightened outflow) with overactive-pump pathology. Sort every option through PLACE (detrusor vs outflow) → RECEPTOR (M₃/β₃/α₁) → DIRECTION (⊕/⊝) → APPLICATION, and only the mirabegron row satisfies all four.",
    },
  },
  mnemonics: [
    {
      code: "BABY ONE MORE TIME",
      meaning:
        "First Aid's own printed mnemonic (book 236), carried attributed: the four red first letters B-o-m-t match, in printed row order, the four red initials of the table's example drugs — Baby = bethanechol (muscarinic agonists: ⊕ M₃ receptor → contraction of detrusor smooth muscle → ↑ bladder emptying; urinary retention); one = oxybutynin (muscarinic antagonists: ⊝ M₃ receptor → relaxation of detrusor smooth muscle → ↓ detrusor overactivity; urgency incontinence); more = mirabegron (sympathomimetics: ⊕ β₃ receptor → relaxation of detrusor smooth muscle → ↑ bladder capacity; urgency incontinence); time = tamsulosin (α₁-antagonists: ⊝ α₁-receptor → relaxation of smooth muscle (eg, bladder, neck, prostate) → ↓ urinary obstruction; BPH).",
      memorizes:
        "The four example drugs of the micturition table in printed row order — and through them, each row's receptor, mechanism, and application",
      whenToUse:
        "Any micturition-pharmacology question: retrieve the four prototype drugs first, then read each option's mechanism against the row it belongs to",
      clinical:
        "The mnemonic is the table's index: hear any of the four drugs and the whole printed row — receptor, muscle response, application — comes with it.",
    },
    {
      code: "PELVIC PEES, HYPOGASTRIC HOLDS, PUDENDAL PARKS",
      meaning:
        "The three nerves of the figure and their divisions: PELVIC nerve (parasympathetic input) → M₃ → detrusor contraction → the bladder PEES; HYPOGASTRIC nerve (sympathetic input) → β₃ (detrusor relax) + α₁ (internal sphincter contract) → the bladder HOLDS; PUDENDAL nerve (somatic input) → nicotinic receptor on the external urethral sphincter → you PARK the flow voluntarily.",
      memorizes:
        "Which nerve carries which division, and what each division does at the bladder (the figure's three labeled inputs)",
      whenToUse:
        "Any question that names a nerve (pelvic/hypogastric/pudendal) or asks which division produces retention vs voiding",
      clinical:
        "Nerve identification predicts drug reach: a drug acting on M₃ rides the pelvic line (voiding), α₁/β₃ ride the hypogastric line (storage), and the nicotinic external sphincter answers to the somatic pudendal line alone.",
    },
    {
      code: "M₃ MOVES IT OUT, β₃ MAKES ROOM",
      meaning:
        "The detrusor fork — TWO receptors on ONE muscle, opposite responses: M₃ (parasympathetic) CONTRACTS the detrusor → ↑ bladder emptying (moves it out); β₃ (sympathetic) RELAXES the detrusor → ↑ bladder capacity (makes room). Bethanechol ⊕ M₃ and oxybutynin ⊝ M₃ fight over the first; mirabegron ⊕ β₃ uses the second.",
      memorizes:
        "Which detrusor receptor contracts and which relaxes — and which drug lever sits on each",
      whenToUse:
        "Any 'what does this drug do to the detrusor' or 'which receptor relaxes/contracts the detrusor' question",
      clinical:
        "Retention with a weak pump → make it move (⊕ M₃); urge with an overactive pump → make room (⊕ β₃) or stop the moving (⊝ M₃).",
    },
    {
      code: "ALPHA-ONE ANCHORS THE NECK",
      meaning:
        "The α₁-receptor is the ANCHOR of the internal urethral sphincter and the bladder neck (with the prostate in the printed row): α₁ activation contracts the smooth-muscle gate and keeps the outflow shut during storage. Tamsulosin (α₁-antagonists) LIFTS THE ANCHOR — relaxation of smooth muscle (eg, bladder, neck, prostate) → ↓ urinary obstruction in BPH.",
      memorizes:
        "Where α₁ sits in the micturition wiring (the internal sphincter/bladder neck/prostate) and what its blockade buys",
      whenToUse:
        "Any BPH or bladder-neck obstruction question, or any question distinguishing the internal (α₁, smooth) from the external (nicotinic, skeletal) sphincter",
      clinical:
        "Obstructive symptoms (hesitancy, weak stream, nocturia, rising residual) in a man with an enlarged prostate → the anchor, not the pump, is the target.",
    },
    {
      code: "TWO ROADS TO URGE, TWO WAYS TO FLOW",
      meaning:
        "The APPLICATIONS column's shape: TWO rows print Urgency incontinence — oxybutynin (⊝ M₃) and mirabegron (⊕ β₃) — two receptor roads converging on detrusor relaxation; TWO rows restore FLOW — bethanechol (⊕ M₃ → ↑ bladder emptying) for the weak pump and tamsulosin (⊝ α₁ → ↓ urinary obstruction) for the tight gate. Same application ≠ same receptor; same direction ≠ same tissue.",
      memorizes:
        "The 2×2 structure of the printed table: which rows share an application, and which rows share a direction",
      whenToUse:
        "Any question pairing two micturition drugs (same indication, different mechanism) or asking which drug matches a contraindicated side-effect profile",
      clinical:
        "Choosing between the urge rows is a side-effect choice (anticholinergic burden vs none); choosing between the flow rows is a pathophysiology choice (pump failure vs mechanical obstruction).",
    },
  ],
  rapidReview: {
    s30: [
      "Micturition center in pons regulates involuntary bladder function via coordination of sympathetic and parasympathetic nervous systems",
      "⊕ sympathetic → ↑ urinary retention; ⊕ parasympathetic → ↑ urine voiding",
      "Some autonomic drugs act on smooth muscle receptors to treat bladder dysfunction",
      "Pelvic nerve = parasympathetic input → M₃-receptor → detrusor contraction",
      "Hypogastric nerve = sympathetic input → β₃-receptor (detrusor relaxation) + α₁-receptor (internal urethral sphincter contraction)",
      "Pudendal nerve = somatic input → nicotinic receptor on the external urethral sphincter (skeletal muscle)",
      "Muscarinic agonists (eg, bethanechol): ⊕ M₃ → contraction of detrusor smooth muscle → ↑ bladder emptying — urinary retention",
      "Muscarinic antagonists (eg, oxybutynin): ⊝ M₃ → relaxation of detrusor smooth muscle → ↓ detrusor overactivity — urgency incontinence",
      "Sympathomimetics (eg, mirabegron): ⊕ β₃ → relaxation of detrusor smooth muscle → ↑ bladder capacity — urgency incontinence",
      "α₁-antagonists (eg, tamsulosin): ⊝ α₁-receptor → relaxation of smooth muscle (eg, bladder, neck, prostate) → ↓ urinary obstruction — BPH",
    ],
    m3: [
      "BABY ONE MORE TIME (First Aid's own) — bethanechol, oxybutynin, mirabegron, tamsulosin: the four example drugs in printed row order",
      "PELVIC PEES, HYPOGASTRIC HOLDS, PUDENDAL PARKS — the three nerves and their divisions",
      "M₃ MOVES IT OUT, β₃ MAKES ROOM — the two detrusor levers on one muscle",
      "ALPHA-ONE ANCHORS THE NECK — α₁ keeps the internal sphincter/prostate shut; tamsulosin lifts the anchor for BPH",
      "TWO ROADS TO URGE, TWO WAYS TO FLOW — the 2×2 shape of the printed table",
    ],
    m10: [
      "The detrusor carries TWO receptors with OPPOSITE responses — M₃ (contract, parasympathetic) and β₃ (relax, sympathetic) — the page's core asymmetry and the reason two different drug classes treat the same indication",
      "The β label on the detrusor prints β₃ (text layer + both high-DPI VLM passes); an early low-DPI VLM pass misread it as β₂ — always adjudicate subscripts at high DPI",
      "The figure carries dark-teal numbered circles ❶❷❸ at the M₃/β₃/α₁ receptor labels, repeated in the table's DRUGS column (❶❶❷❸) — the book's own figure-to-table cross-reference, preserved in the redraw",
      "The mnemonic 'Baby one more time.' prints directly BELOW the pons text block (inside the right text column, not the outer margin), with B-o-m-t in the First Aid red — matching the four red drug initials of the table (adjudicated: the anchor is the DRUG initials, not letter-to-receptor)",
      "The table's subscript digits (3, 3, 3, 1) print interleaved in the text layer on separate lines below the row heads (the m38 interleave); the logical table is reconstructed via the VLM crops",
      "pdfimages finds THREE spot-color raster objects on the page — the white-silhouette anatomy layers of the bladder illustration; all labels and the table are live vector text (mixed composite figure)",
      "Book 236 (pdf 258) is a SHARED page: 'Tissue distribution of adrenergic receptors' (the sibling topic) starts at the bottom-half heading and is never quoted here; the indd slug + timestamp print at the very foot of the page and are also out of PH12 scope",
    ],
  },
  recall: [
    {
      q: "The pons text block, verbatim — what does the micturition center in pons do, and what are the two printed effects?",
      a: "Micturition center in pons regulates involuntary bladder function via coordination of sympathetic and parasympathetic nervous systems. ⊕ sympathetic → ↑ urinary retention. ⊕ parasympathetic → ↑ urine voiding. Some autonomic drugs act on smooth muscle receptors to treat bladder dysfunction.",
    },
    {
      q: "Which nerve carries each input to the bladder — parasympathetic, sympathetic, somatic?",
      a: "Pelvic nerve (parasympathetic input); hypogastric nerve (sympathetic input); pudendal nerve (somatic input).",
    },
    {
      q: "Which receptor sits on the detrusor for each response — contraction and relaxation?",
      a: "M₃-receptor → contraction of detrusor smooth muscle (parasympathetic, pelvic nerve); β₃-receptor → relaxation of detrusor smooth muscle (sympathetic, hypogastric nerve).",
    },
    {
      q: "Which receptor sits at each urethral sphincter, and what kind of muscle is each?",
      a: "Internal urethral sphincter: α₁-receptor (smooth muscle, sympathetic hypogastric input). External urethral sphincter: nicotinic receptor (skeletal muscle, somatic pudendal input).",
    },
    {
      q: "The four printed table rows — drug class, example, mechanism, application.",
      a: "Muscarinic agonists (eg, bethanechol): ⊕ M₃ receptor → contraction of detrusor smooth muscle → ↑ bladder emptying — urinary retention. Muscarinic antagonists (eg, oxybutynin): ⊝ M₃ receptor → relaxation of detrusor smooth muscle → ↓ detrusor overactivity — urgency incontinence. Sympathomimetics (eg, mirabegron): ⊕ β₃ receptor → relaxation of detrusor smooth muscle → ↑ bladder capacity — urgency incontinence. α₁-antagonists (eg, tamsulosin): ⊝ α₁-receptor → relaxation of smooth muscle (eg, bladder, neck, prostate) → ↓ urinary obstruction — BPH.",
    },
    {
      q: "Which two printed rows share the application 'Urgency incontinence', and why do both work?",
      a: "Muscarinic antagonists (oxybutynin, ⊝ M₃) and sympathomimetics (mirabegron, ⊕ β₃) — both converge on relaxation of detrusor smooth muscle, one by removing the parasympathetic drive (↓ detrusor overactivity), the other by adding the sympathetic one (↑ bladder capacity).",
    },
    {
      q: "Which receptor does the BPH row block, and at which printed tissues?",
      a: "The α₁-receptor — relaxation of smooth muscle (eg, bladder, neck, prostate) → ↓ urinary obstruction.",
    },
    {
      q: "What does the First Aid mnemonic 'Baby one more time.' anchor on this page?",
      a: "The four red first letters B-o-m-t match the four red drug initials of the table in printed row order — bethanechol, oxybutynin, mirabegron, tamsulosin — each carrying its row's receptor, mechanism, and application.",
    },
  ],
  related: [
    {
      title: "Acetylcholine Receptors: Nicotinic & Muscarinic",
      topicId: "acetylcholine-receptors",
      note: "The detrusor's M₃ is one of the M1–5 family defined on book 235 — the receptor-class key that this page's muscarinic rows turn; the external sphincter's nicotinic receptor is the NM-side lock of the same fork.",
    },
    {
      title: "Autonomic Receptors: The Wiring Map",
      topicId: "autonomic-receptors",
      note: "The wiring map of book 234 is where the three nerves of this figure live — the pelvic, hypogastric, and pudendal paths are the organ-specific ends of the autonomic chains defined there.",
    },
    {
      title: "Tissue Distribution of Adrenergic Receptors",
      topicId: "adrenergic-receptor-distribution",
      note: "The SIBLING subsection on the bottom half of this same book page (book 236, the p196 shared-page convention): where α₁ and β₃ sit across the body's tissues — the receptor geography this page's sympathetic rows borrow.",
    },
    {
      title: "G-Protein-Linked Second Messengers",
      topicId: "g-protein-second-messengers",
      note: "The facing page's G-protein table is the signaling layer under these receptors — the detrusor's M₃ and the sphincter's α₁ are Gq-coupled, the detrusor's β₃ is Gs-coupled, which is how one neurotransmitter decision becomes a muscle response.",
    },
    {
      title: "Autonomic Drugs: Synapse Targets & Overview",
      topicId: "autonomic-drugs-synapse",
      note: "The synapse-overview page frames where each drug class acts along the autonomic path — the micturition table is that framework instantiated on one organ.",
    },
  ],
  crossLinks: [
    {
      subject: "Renal & urologic physiology (storage vs voiding phases)",
      connection:
        "The pharmacology maps onto the two physiologic phases of the bladder: the STORAGE phase is the sympathetic-dominant state (β₃ keeps the detrusor compliant, α₁ keeps the internal sphincter closed — ↑ urinary retention), and the VOIDING phase is the parasympathetic-dominant state (M₃ contracts the detrusor — ↑ urine voiding) coordinated by the pontine center. Every drug row is a deliberate tilt of one phase's lever.",
    },
    {
      subject: "Neuroscience (voluntary vs involuntary control of continence)",
      connection:
        "The page splits continence into an involuntary autonomic core (pons-coordinated sympathetic/parasympathetic action on smooth muscle) and a voluntary somatic shell (pudendal nerve → nicotinic receptor → external urethral sphincter, skeletal muscle). That split explains why bladder-drug questions never involve neuromuscular blockers, and why social continence survives when autonomic pharmacology reshapes the bladder.",
    },
    {
      subject: "Reproductive & urologic pharmacology (BPH)",
      connection:
        "The α₁ row is the pharmacologic bridge to benign prostatic hyperplasia: the printed mechanism — ⊝ α₁-receptor → relaxation of smooth muscle (eg, bladder, neck, prostate) → ↓ urinary obstruction — is why an 'autonomic' antagonist is a first-line urology drug for obstructive urinary symptoms in older men.",
    },
    {
      subject: "Geriatric pharmacology (anticholinergic burden)",
      connection:
        "The oxybutynin-vs-mirabegron fork is a geriatrics lesson in miniature: the ⊝ M₃ road to urgency incontinence carries anticholinergic burden (dry mouth, constipation, confusion in the elderly), while the ⊕ β₃ road relaxes the same detrusor without it — the printed table's two urge rows are the exam's cleanest example of choosing a drug by its side-effect profile.",
    },
  ],
};
