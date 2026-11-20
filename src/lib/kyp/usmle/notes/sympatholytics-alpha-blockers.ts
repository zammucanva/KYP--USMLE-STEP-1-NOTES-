import type { KypUsMLENote } from "../types";

// Pharmacology — PH-batch 18. Source: FULL pdf page 265 / book 243
// (Pharmacology — Autonomic Drugs: "Sympatholytics (α2-agonists)" table +
// "α-blockers" table — a FULL single page, no shared-page split). The page
// prints exactly TWO logical tables, both DRUG / APPLICATIONS / ADVERSE
// EFFECTS: [1] the Sympatholytics (α2-agonists) table — three drug rows in
// printed order (Clonidine, guanfacine / α-methyldopa / Tizanidine), every
// cell carried VERBATIM in the note's Table 1 block; [2] the α-blockers
// table — printed as three shaded full-width band rows (Nonselective /
// α1 selective (-osin ending) / α2 selective): phenoxybenzamine "Irreversible.
// …", phentolamine "Reversible. …", the -osin family, and mirtazapine, with
// ONE shared ADVERSE EFFECTS cell for the whole nonselective band —
// "Orthostatic hypotension, reflex tachycardia." — printed once, vertically
// spanning the two drug rows (VLM-confirmed, not repeated on the phentolamine
// row); all cells carried VERBATIM in the note's Table 2 block.
//
// CENSUS (VLM AVAILABLE this session — the ph6–ph10 batch lost it to a 401
// outage; this batch has the real thing): pdfimages = ZERO raster images on
// pdf 265 (CONFIRMED, not assumed — the page is pure vector text/table
// typesetting, no photographs, no line art); ONE VLM pass (glm-4.6v, 120 DPI
// page render, scripts/usmle-pipeline/ph18-vlm-census.ts) saved to
// .usmle-pipeline-cache/staging-ph18/vlm-census.txt. The VLM confirms: the
// two tables and their exact column headers; the three shaded band rows of
// the α-blocker table; the SHARED nonselective adverse-effects cell printed
// once between the two drug rows; NO margin notes, side mnemonics,
// photographs, or drawings anywhere on the page; and ONE embedded
// typographic mnemonic printed INSIDE the table — "PTSD (prazosin)" carries
// its "p" in RED (First Aid's own color-highlighted pairing, carried here
// ATTRIBUTED to First Aid, never claimed as KYP-original).
//
// TEXT-LAYER QUIRKS (documented, carried as printed): (1) the tables'
// cells INTERLEAVE in the text layer (the m38 convention) — the α-blockers
// table's "APPLICATIONS / ADVERSE EFFECTS" column headers print BEFORE the
// "α-blockers" heading and its "DRUG" header (part1.txt page-265 lines
// 39–44), and mirtazapine's APPLICATIONS/ADVERSE EFFECTS cells print
// BEFORE its "α2 selective / Mirtazapine" band label (lines 73–78) — the
// logical printed tables were reconstructed via the VLM page render and are
// quoted in physical text-layer order as contiguous ranges; (2) the running
// header prints the kerning artifact "SEC TION II"; (3) the ↑ glyphs on the
// mirtazapine adverse-effects line are each prefixed by a \x8f control
// character in the text layer (stripped by the pipeline's whitespace-
// insensitive containment normalizer; the ↑ arrows themselves are kept in
// the quotes); (4) the ⊕ glyph prints in the Coombs cell; (5) "1st-dose"
// prints with a plain "1" (no superscript in the text layer).
//
// The α2 presynaptic-autoreceptor BRAKE mechanism is NOT printed on pdf 265
// — the page prints only the drug tables. The brake sentence is First Aid's
// own and prints on the Autonomic drugs opener, book 238 / pdf 260 (the
// sibling topic autonomic-drugs-synapse): "Release of norepinephrine from a
// sympathetic nerve ending is modulated by NE itself, acting on presynaptic
// α2-autoreceptors → negative feedback." It is carried here ATTRIBUTED
// (cross-page) and linked through related/crossLinks; the two-fork map that
// CONNECTS that brake to this page's drug tables is KYP's design (recorded
// as a kypExtension). The KYP diagram, the exam layer, and the four
// mnemonics are original.

export const sympatholyticsAlphaBlockers: KypUsMLENote = {
  id: "sympatholytics-alpha-blockers",
  title: "Sympatholytics (α2-agonists) & α-Blockers",
  subtitle:
    "Two ways to take the sympathetic system down from the α side of the receptor map. FORK 1 — the Sympatholytics (α2-agonists): clonidine, guanfacine, α-methyldopa, and tizanidine press the presynaptic α2 autoreceptor, the brake NE itself uses (book 238: 'Release of norepinephrine from a sympathetic nerve ending is modulated by NE itself, acting on presynaptic α2-autoreceptors → negative feedback') — hypertensive urgency (limited situations), ADHD, Tourette syndrome, opioid withdrawal, hypertension in pregnancy, spasticity relief; the price is CNS depression, bradycardia, hypotension, miosis, and rebound hypertension with abrupt cessation. FORK 2 — the α-blockers: irreversible phenoxybenzamine for pheochromocytoma preop, reversible phentolamine for the MAOI-tyramine/cocaine/extravasation rescues, the α1-selective -osin family for BPH, PTSD (prazosin), and hypertension (except tamsulosin) with the 1st-dose orthostatic hypotension rule — and α2-selective mirtazapine for depression with sedation, ↑ serum cholesterol, ↑ appetite. One page, two directions at the same receptor family: agonist at the brake, or antagonist at the gate.",
  subject: "Pharmacology",
  system:
    "Section II · High-Yield General Principles — Pharmacology: Autonomic Drugs",
  pilotCategory: "Pharmacology mechanism",
  difficulty: 2,
  readTime: 6,
  sourceRef:
    "First Aid 2026, Part 1 pp. 243–243 (Pharmacology — Autonomic Drugs: Sympatholytics (α2-agonists); α-blockers — the α2-agonist table and the α-blocker table)",
  tags: [
    "sympatholytics",
    "alpha-2 agonists",
    "alpha-blockers",
    "clonidine",
    "guanfacine",
    "alpha-methyldopa",
    "tizanidine",
    "phenoxybenzamine",
    "phentolamine",
    "prazosin",
    "terazosin",
    "doxazosin",
    "tamsulosin",
    "mirtazapine",
    "presynaptic autoreceptor",
    "negative feedback",
    "pheochromocytoma",
    "first-dose orthostatic hypotension",
    "rebound hypertension",
    "direct coombs",
    "hypertension in pregnancy",
    "BPH",
    "PTSD",
    "norepinephrine extravasation",
    "autonomic pharmacology",
  ],
  core: {
    what:
      "This page is two drug tables sharing one receptor family. The Sympatholytics (α2-agonists) table: clonidine and guanfacine (hypertensive urgency in limited situations, ADHD, Tourette syndrome, symptom control in opioid withdrawal), α-methyldopa (hypertension in pregnancy), and tizanidine (relief of spasticity) — all agonists at the presynaptic α2 autoreceptor, the negative-feedback brake that norepinephrine itself uses on its own release, so sympathetic outflow falls. Their printed adverse column: CNS depression, bradycardia, hypotension, respiratory depression, miosis, rebound hypertension with abrupt cessation; for α-methyldopa, Direct Coombs ⊕ hemolysis, drug-induced lupus, hyperprolactinemia; for tizanidine, hypotension, weakness, xerostomia. The α-blockers table: the Nonselective band — phenoxybenzamine, Irreversible, for pheochromocytoma (used preoperatively) to prevent catecholamine (hypertensive) crisis, and phentolamine, Reversible, for MAO-inhibitor patients who eat tyramine, severe cocaine-induced hypertension (2nd line), and norepinephrine extravasation — sharing ONE printed adverse cell: orthostatic hypotension, reflex tachycardia; the α1 selective (-osin ending) band — prazosin, terazosin, doxazosin, tamsulosin for urinary symptoms of BPH, PTSD (prazosin), and hypertension (except tamsulosin), with 1st-dose orthostatic hypotension, dizziness, headache; and the α2 selective band — mirtazapine for Depression, with Sedation, ↑ serum cholesterol, ↑ appetite.",
    why:
      "Every drug on this page is an exam favorite precisely because each one is a single-cell fact with a mechanism behind it. Phenoxybenzamine is the irreversible one — covalent binding means the blockade cannot be out-competed by the enormous catecholamine surge of a pheochromocytoma, which is why it is the preoperative choice and why the printed cell says exactly that. Phentolamine is the reversible one — quick on, quick off — the profile you want for an acute rescue: the tyramine cheese reaction in an MAO-inhibitor patient, severe cocaine-induced hypertension (2nd line), and norepinephrine extravasation where vasodilation must be produced locally, right now, to save the digits. The -osin family carries two printed rules worth points: the suffix rule (-osin ending = α1 selective) and the first-dose rule (start at night — 1st-dose orthostatic hypotension) plus the tamsulosin exception (hypertension except tamsulosin — the prostate-selective one). Clonidine's cell hides the classic trap: the drug used for hypertensive urgency is also the drug whose abrupt cessation causes rebound hypertension — the brake released suddenly. And α-methyldopa's pregnancy indication is paired with its autoimmunity triad (Direct Coombs ⊕ hemolysis, drug-induced lupus, hyperprolactinemia), so the obstetric indication and the Coombs test travel together in vignettes. Mirtazapine closes the loop from the other direction: an α2-selective BLOCKER listed in the α-blocker table — it blocks the same autoreceptor the sympatholytics stimulate, and its printed adverse effects (sedation, ↑ serum cholesterol, ↑ appetite) are the antidepressant-side consequences.",
    keyIdea:
      "Read every α-drug question through four moves. MOVE 1 — DIRECTION AT THE RECEPTOR: agonist or blocker? α2-AGONIST = presses the presynaptic brake → less NE release → sympatholytic (the top table). α-BLOCKER = removes receptor signaling at the synapse itself — α1 (vascular tone) or α2 (the brake, mirtazapine). MOVE 2 — PLACE THE DRUG IN ITS BAND: clonidine/guanfacine vs α-methyldopa (pregnancy + Coombs ⊕) vs tizanidine (spasticity); phenoxybenzamine (IRREVERSIBLE, pheo preop) vs phentolamine (REVERSIBLE, MAOI-tyramine/cocaine/extravasation) vs the -osin family (α1 selective: BPH, PTSD, HTN except tamsulosin) vs mirtazapine (α2 selective, Depression). MOVE 3 — QUOTE THE CELL: the printed cells are the answer options — 'Irreversible. Pheochromocytoma (used preoperatively) to prevent catecholamine (hypertensive) crisis.' / '1st-dose orthostatic hypotension' / 'rebound hypertension with abrupt cessation' / 'Direct Coombs ⊕ hemolysis'. MOVE 4 — WATCH THE FOUR RULES: first dose (-osin) → orthostasis; abrupt cessation (clonidine) → rebound hypertension; pregnancy → methyldopa with its Coombs ⊕; pheo preop → the irreversible one. Same receptor family, two directions — never sort these drugs alphabetically, sort them by direction and band.",
  },
  mechanisms: [
    {
      id: "alpha2-presynaptic-brake-map",
      title:
        "Fork 1 — the presynaptic α2 brake: how the sympatholytics (α2-agonists) take sympathetic tone down",
      context:
        "The Sympatholytics (α2-agonists) table (book 243) + the α2-autoreceptor negative-feedback sentence (First Aid, book 238, the Autonomic drugs opener)",
      flow: {
        nodes: [
          {
            id: "sympathetic-signal",
            label: "SYMPATHETIC SIGNAL ARRIVES",
            sublabel:
              "Input — sympathetic outflow reaches the peripheral sympathetic nerve ending, where norepinephrine is the transmitter of every signal.",
            variant: "input",
          },
          {
            id: "ne-release",
            label: "NE RELEASE INTO THE SYNAPSE",
            sublabel:
              "Process — the nerve ending releases NE onto the target organ's adrenergic receptors; this release is the step the whole page controls.",
            variant: "process",
          },
          {
            id: "alpha2-autoreceptor",
            label: "PRESYNAPTIC α2-AUTORECEPTOR — THE BRAKE",
            sublabel:
              "Target — the ending senses its own transmitter: NE itself acts on presynaptic α2-autoreceptors → negative feedback (printed on book 238). The brake throttles further NE release.",
            variant: "target",
          },
          {
            id: "alpha2-agonists",
            label:
              "THE α2-AGONISTS PRESS THE BRAKE — clonidine · guanfacine · α-methyldopa · tizanidine",
            sublabel:
              "Process — the Sympatholytics (α2-agonists): each drug is an agonist at the same autoreceptor NE itself uses, pressing the brake without denervating the system.",
            variant: "process",
          },
          {
            id: "less-sympathetic-outflow",
            label: "↓ SYMPATHETIC OUTFLOW — the APPLICATIONS column",
            sublabel:
              "Output — hypertensive urgency (limited situations), ADHD, Tourette syndrome, symptom control in opioid withdrawal · Hypertension in pregnancy · Relief of spasticity.",
            variant: "output",
          },
          {
            id: "brake-cost",
            label: "THE BRAKE'S COST — the ADVERSE EFFECTS column",
            sublabel:
              "Output — CNS depression, bradycardia, hypotension, respiratory depression, miosis, and rebound hypertension with abrupt cessation (release the pressed brake suddenly and the system overcorrects); α-methyldopa adds Direct Coombs ⊕ hemolysis, drug-induced lupus, hyperprolactinemia; tizanidine adds weakness, xerostomia.",
            variant: "output",
          },
        ],
        edges: [
          { from: "sympathetic-signal", to: "ne-release", label: "action potentials reach the terminal" },
          {
            from: "ne-release",
            to: "alpha2-autoreceptor",
            label: "NE itself acts on the autoreceptor",
          },
          {
            from: "alpha2-autoreceptor",
            to: "ne-release",
            type: "inhibit",
            label: "negative feedback ⊣ less NE released",
          },
          {
            from: "alpha2-agonists",
            to: "alpha2-autoreceptor",
            label: "agonist — presses the same brake",
          },
          {
            from: "alpha2-autoreceptor",
            to: "less-sympathetic-outflow",
            label: "throttled release → ↓ sympathetic drive",
          },
          {
            from: "alpha2-agonists",
            to: "brake-cost",
            label: "the printed adverse-effects column",
          },
        ],
      },
    },
    {
      id: "alpha-blockade-selectivity-map",
      title:
        "Fork 2 — the α-blockade fork: irreversible vs reversible, α1-selective vs α2-selective",
      context: "The α-blockers table (book 243) with its three printed band rows",
      flow: {
        nodes: [
          {
            id: "blocker-fork",
            label: "THE α-BLOCKER TABLE — three selectivity bands, one fork",
            sublabel:
              "Input — the table prints three shaded bands: Nonselective, α1 selective (-osin ending), α2 selective. Each band picks its receptor and inherits its adverse-effects cell.",
            variant: "input",
          },
          {
            id: "alpha1-vascular",
            label: "α1 — VASCULAR SMOOTH MUSCLE (tone → vasoconstriction)",
            sublabel:
              "Target — the receptor whose blockade dilates vessels: the shared landing point of the nonselective and the α1-selective lanes.",
            variant: "target",
          },
          {
            id: "alpha2-brake",
            label: "α2 — THE PRESYNAPTIC BRAKE (fork 1's target)",
            sublabel:
              "Target — the autoreceptor the agonists press; mirtazapine BLOCKS it, the opposite direction at the same receptor.",
            variant: "target",
          },
          {
            id: "phenoxybenzamine",
            label: "PHENOXYBENZAMINE — nonselective, IRREVERSIBLE",
            sublabel:
              "Process — the printed cell leads with 'Irreversible.': covalent, long-lasting blockade that a catecholamine surge cannot out-compete — the preoperative pheochromocytoma profile.",
            variant: "process",
          },
          {
            id: "phentolamine",
            label: "PHENTOLAMINE — nonselective, REVERSIBLE",
            sublabel:
              "Process — the printed cell leads with 'Reversible.': quick on, quick off — the acute-rescue profile (MAOI-tyramine, cocaine-induced hypertension 2nd line, norepinephrine extravasation).",
            variant: "process",
          },
          {
            id: "osin-family",
            label:
              "PRAZOSIN, TERAZOSIN, DOXAZOSIN, TAMSULOSIN — α1 selective (-osin ending)",
            sublabel:
              "Process — the suffix rule: -osin = α1 selective, so the α2 brake stays intact; urinary symptoms of BPH, PTSD (prazosin), hypertension (except tamsulosin).",
            variant: "process",
          },
          {
            id: "mirtazapine",
            label: "MIRTAZAPINE — α2 selective",
            sublabel:
              "Process — the antidepressant lane: blocks the presynaptic brake itself, the mirror image of the sympatholytics above it on the page.",
            variant: "process",
          },
          {
            id: "blocker-columns",
            label: "THE TWO PRINTED COLUMNS — APPLICATIONS · ADVERSE EFFECTS",
            sublabel:
              "Output — APPLICATIONS: phenoxybenzamine: Pheochromocytoma (used preoperatively) to prevent catecholamine (hypertensive) crisis · phentolamine: MAOI + tyramine foods, severe cocaine-induced hypertension (2nd line), norepinephrine extravasation · -osin family: urinary symptoms of BPH; PTSD (prazosin); hypertension (except tamsulosin) · mirtazapine: Depression. — ADVERSE EFFECTS: nonselective (ONE shared cell): Orthostatic hypotension, reflex tachycardia · α1 selective: 1st-dose orthostatic hypotension, dizziness, headache · α2 selective: Sedation, ↑ serum cholesterol, ↑ appetite.",
            variant: "output",
          },
        ],
        edges: [
          { from: "blocker-fork", to: "phenoxybenzamine", label: "the Nonselective band, irreversible member" },
          { from: "blocker-fork", to: "phentolamine", label: "the Nonselective band, reversible member" },
          { from: "blocker-fork", to: "osin-family", label: "the α1 selective (-osin ending) band" },
          { from: "blocker-fork", to: "mirtazapine", label: "the α2 selective band" },
          {
            from: "phenoxybenzamine",
            to: "alpha1-vascular",
            type: "inhibit",
            label: "Irreversible ⊣ — survives the surge",
          },
          {
            from: "phentolamine",
            to: "alpha1-vascular",
            type: "inhibit",
            label: "Reversible ⊣ — quick on, quick off",
          },
          {
            from: "osin-family",
            to: "alpha1-vascular",
            type: "inhibit",
            label: "α1-selective ⊣ — the α2 brake is spared",
          },
          {
            from: "mirtazapine",
            to: "alpha2-brake",
            type: "inhibit",
            label: "α2-selective blockade ⊣ the brake itself",
          },
          {
            from: "alpha1-vascular",
            to: "blocker-columns",
            label: "vasodilation → each band's printed uses + orthostasis/reflex tachycardia",
          },
          {
            from: "mirtazapine",
            to: "blocker-columns",
            label: "Depression — with Sedation, ↑ serum cholesterol, ↑ appetite",
          },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "sympatholytic-alpha-map",
      title: "The two-fork α map (an original KYP diagram)",
      caption:
        "An original KYP diagram of book 243's two tables as one two-fork map. FORK 1 (top): the presynaptic α2 brake — a sympathetic nerve-ending glyph with its NE vesicles, the α2-autoreceptor chip on the presynaptic membrane, NE's own dashed negative-feedback curve back onto it (book 238's sentence), and the four α2-agonists (clonidine + guanfacine, α-methyldopa, tizanidine) pressing the same brake, each linked to its printed APPLICATIONS chip with the printed ADVERSE EFFECTS below (rebound hypertension flagged). FORK 2 (bottom): the α-blocker fork in its three printed bands — NONSELECTIVE with phenoxybenzamine (IRREVERSIBLE stamp, the pheochromocytoma preop pairing) beside phentolamine (REVERSIBLE stamp, the MAOI-tyramine / cocaine-induced hypertension 2nd line / norepinephrine extravasation rescues) under the ONE shared adverse cell (Orthostatic hypotension, reflex tachycardia); α1 SELECTIVE (-osin ending) with prazosin, terazosin, doxazosin, tamsulosin (BPH, PTSD with the source's red-p, hypertension except tamsulosin) and the flagged 1st-dose orthostatic hypotension rule; and α2 SELECTIVE with mirtazapine (Depression; Sedation, ↑ serum cholesterol, ↑ appetite) — the mirror of the brake above.",
      notice:
        "Census (pdfimages + one VLM pass at 120 DPI, glm-4.6v — saved to staging-ph18/vlm-census.txt): ZERO raster images on pdf 265 — the page is pure table typesetting, no photographs or line art, and NO margin mnemonics print anywhere; the page's only embedded mnemonic is First Aid's own red 'p' in 'PTSD (prazosin)' (VLM-confirmed), carried ATTRIBUTED. The nerve-ending glyph, autoreceptor chip, brake pedal, drug chips, IRREVERSIBLE/REVERSIBLE stamps, band cards, and rule banner are an ORIGINAL KYP diagram — nothing is reproduced from the book; the two printed tables are carried verbatim in the note's two table blocks below.",
    },
    {
      kind: "table",
      title:
        "Book 243 — Table 1, the Sympatholytics (α2-agonists) table, carried verbatim (printed row order, every printed word)",
      intro:
        "The top table of the page: DRUG / APPLICATIONS / ADVERSE EFFECTS, three drug rows, exactly as printed.",
      columns: ["DRUG", "APPLICATIONS (book 243, verbatim)", "ADVERSE EFFECTS (book 243, verbatim)"],
      rows: [
        [
          "Clonidine, guanfacine",
          "Hypertensive urgency (limited situations), ADHD, Tourette syndrome, symptom control in opioid withdrawal",
          "CNS depression, bradycardia, hypotension, respiratory depression, miosis, rebound hypertension with abrupt cessation",
        ],
        [
          "α-methyldopa",
          "Hypertension in pregnancy",
          "Direct Coombs ⊕ hemolysis, drug-induced lupus, hyperprolactinemia",
        ],
        [
          "Tizanidine",
          "Relief of spasticity",
          "Hypotension, weakness, xerostomia",
        ],
      ],
      caption:
        "Three brake-pressers, three lanes: the urgent-care pair (clonidine, guanfacine) with the rebound-hypertension trap in its own adverse cell; the obstetric brake (α-methyldopa) with the autoimmunity triad (Direct Coombs ⊕ hemolysis, drug-induced lupus, hyperprolactinemia); and the spasticity brake (tizanidine) with hypotension, weakness, xerostomia.",
    },
    {
      kind: "table",
      title:
        "Book 243 — Table 2, the α-blockers table, carried verbatim (printed row order: three band rows, every printed word)",
      intro:
        "The bottom table of the page: DRUG / APPLICATIONS / ADVERSE EFFECTS, printed as three shaded full-width band rows (Nonselective / α1 selective (-osin ending) / α2 selective). Interleave note: the text layer prints this table's APPLICATIONS/ADVERSE EFFECTS column headers BEFORE the 'α-blockers' heading (lines 39–44) and mirtazapine's two cells BEFORE its 'α2 selective / Mirtazapine' band label (lines 73–78) — the logical layout above was reconstructed via the VLM page render.",
      columns: ["DRUG (band + member, printed order)", "APPLICATIONS (book 243, verbatim)", "ADVERSE EFFECTS (book 243, verbatim)"],
      rows: [
        [
          "Nonselective — Phenoxybenzamine",
          "Irreversible. Pheochromocytoma (used preoperatively) to prevent catecholamine (hypertensive) crisis.",
          "Orthostatic hypotension, reflex tachycardia. — the ONE shared adverse cell: printed once, vertically spanning BOTH nonselective rows (VLM-confirmed; no separate cell prints on the phentolamine row)",
        ],
        [
          "Nonselective — Phentolamine",
          "Reversible. Given to patients on MAO inhibitors who eat tyramine-containing foods and for severe cocaine-induced hypertension (2nd line). Also used to treat norepinephrine extravasation.",
          "— (no separate cell prints: the shared 'Orthostatic hypotension, reflex tachycardia.' cell above belongs to both nonselective rows)",
        ],
        [
          "α1 selective (-osin ending) — Prazosin, terazosin, doxazosin, tamsulosin",
          "Urinary symptoms of BPH; PTSD (prazosin); hypertension (except tamsulosin).",
          "1st-dose orthostatic hypotension, dizziness, headache.",
        ],
        [
          "α2 selective — Mirtazapine",
          "Depression.",
          "Sedation, ↑ serum cholesterol, ↑ appetite.",
        ],
      ],
      caption:
        "Three bands, three mechanisms of blockade: the nonselective pair (irreversible phenoxybenzamine vs reversible phentolamine — the printed first words of each cell are the mechanism) sharing one adverse cell; the α1-selective -osin family with the suffix rule, the tamsulosin exception, and the 1st-dose orthostatic hypotension rule; and α2-selective mirtazapine — the table's one BLOCKER of the presynaptic brake, the mirror image of the α2-agonists in Table 1. The source prints the 'p' of '(prazosin)' in RED to pair it with PTSD — First Aid's own in-table mnemonic, carried attributed.",
    },
    {
      kind: "steps",
      title: "Reading any α-drug question in four moves",
      intro:
        "The whole page distilled into an ordered decision path — DIRECTION, BAND, CELL, RULES.",
      steps: [
        {
          label: "MOVE 1 — DIRECTION: agonist at the brake, or blocker at the receptor?",
          detail:
            "α2-AGONIST (clonidine, guanfacine, α-methyldopa, tizanidine) = presses the presynaptic α2 autoreceptor → ↓ NE release → sympatholytic. α-BLOCKER (phenoxybenzamine, phentolamine, the -osin family, mirtazapine) = removes receptor signaling — at α1 (vascular tone) or at α2 (the brake itself, mirtazapine). Same receptor family, opposite directions — this first sort splits the page in half.",
        },
        {
          label: "MOVE 2 — BAND: which drug, in which printed band?",
          detail:
            "Top table: clonidine/guanfacine (urgency, ADHD, Tourette, opioid withdrawal) vs α-methyldopa (pregnancy) vs tizanidine (spasticity). Bottom table: phenoxybenzamine (Irreversible) vs phentolamine (Reversible) vs prazosin/terazosin/doxazosin/tamsulosin (α1 selective, -osin ending) vs mirtazapine (α2 selective).",
        },
        {
          label: "MOVE 3 — CELL: quote the printed cell that answers the question.",
          detail:
            "The exam answers ARE the printed cells: 'Irreversible. Pheochromocytoma (used preoperatively) to prevent catecholamine (hypertensive) crisis.' · 'Reversible. Given to patients on MAO inhibitors who eat tyramine-containing foods…' · '1st-dose orthostatic hypotension, dizziness, headache.' · 'rebound hypertension with abrupt cessation' · 'Direct Coombs ⊕ hemolysis, drug-induced lupus, hyperprolactinemia' · 'Sedation, ↑ serum cholesterol, ↑ appetite.'",
        },
        {
          label: "MOVE 4 — RULES: apply the four one-line rules before answering.",
          detail:
            "FIRST DOSE: -osin drugs floor the patient at first dose — start at night. ABRUPT CESSATION: clonidine's brake released suddenly → rebound hypertension. PREGNANCY: hypertension in pregnancy → α-methyldopa, and expect Direct Coombs ⊕. PHEO PREOP: only the IRREVERSIBLE one (phenoxybenzamine) is printed for pheochromocytoma preop — the reversible one is for acute rescues.",
        },
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title: "The four rules the page prints inside its cells",
      body:
        "1) IRREVERSIBLE = PHEO PREOP: phenoxybenzamine's cell is the only one on the page that names pheochromocytoma — covalent blockade that the tumor's catecholamine surge cannot out-compete; give it preoperatively to prevent the catecholamine (hypertensive) crisis. 2) FIRST DOSE = NIGHT: the -osin family prints '1st-dose orthostatic hypotension' — the first dose can floor the patient, so it is given at bedtime. 3) ABRUPT CESSATION = REBOUND: the clonidine row prints 'rebound hypertension with abrupt cessation' — never stop the brake drug suddenly (also true when withdrawing it perioperatively). 4) PREGNANCY = METHYLDOPA + COOMBS: α-methyldopa prints 'Hypertension in pregnancy' paired with 'Direct Coombs ⊕ hemolysis, drug-induced lupus, hyperprolactinemia' — the obstetric indication and the autoimmunity triad are one memory unit. Bonus rule — the shared nonselective cell: ONE adverse cell ('Orthostatic hypotension, reflex tachycardia.') serves BOTH nonselective rows; if a question asks phentolamine's adverse effects, that is the printed answer.",
    },
  ],
  drugs: [
    {
      drug: "Clonidine, guanfacine",
      klass: "Sympatholytic (α2-agonist)",
      target: "Presynaptic α2-autoreceptor (central sympatholytic brake)",
      mechanism:
        "Agonist at the presynaptic α2 autoreceptor — the same brake NE itself uses ('Release of norepinephrine from a sympathetic nerve ending is modulated by NE itself, acting on presynaptic α2-autoreceptors → negative feedback', printed on book 238) — reducing sympathetic outflow",
      effect:
        "↓ sympathetic tone → ↓ blood pressure and heart rate (bradycardia), CNS depression, miosis",
      uses:
        "Hypertensive urgency (limited situations), ADHD, Tourette syndrome, symptom control in opioid withdrawal (printed APPLICATIONS cell)",
      adverse:
        "CNS depression, bradycardia, hypotension, respiratory depression, miosis, rebound hypertension with abrupt cessation (printed ADVERSE EFFECTS cell)",
      clue:
        "The brake-presser whose own adverse cell contains the classic trap — the drug for hypertensive urgency is also the drug that rebounds if stopped abruptly.",
    },
    {
      drug: "α-methyldopa",
      klass: "Sympatholytic (α2-agonist, prodrug to α-methylnorepinephrine)",
      target: "Presynaptic/central α2-autoreceptor",
      mechanism:
        "Converted to α-methylnorepinephrine, a false transmitter that stimulates the central α2 brake → ↓ sympathetic outflow (the table prints only the drug row; the brake mechanism is the page's title concept)",
      effect: "↓ blood pressure — the sympatholytic of pregnancy",
      uses: "Hypertension in pregnancy (printed APPLICATIONS cell)",
      adverse:
        "Direct Coombs ⊕ hemolysis, drug-induced lupus, hyperprolactinemia (printed ADVERSE EFFECTS cell)",
      clue:
        "Pregnancy + hypertension → this cell; the Coombs test turns positive while the patient takes it — the autoimmunity triad travels with the obstetric indication.",
    },
    {
      drug: "Tizanidine",
      klass: "Sympatholytic (α2-agonist)",
      target: "Presynaptic α2-autoreceptor (central muscle-tone brake)",
      mechanism:
        "α2-agonist that damps sympathetic drive to reduce muscle tone — the spasticity lane of the sympatholytics table",
      effect: "Relief of spasticity",
      uses: "Relief of spasticity (printed APPLICATIONS cell)",
      adverse: "Hypotension, weakness, xerostomia (printed ADVERSE EFFECTS cell)",
      clue:
        "The α2-agonist with the non-blood-pressure application — spasticity relief, paid for with hypotension, weakness, and dry mouth.",
    },
    {
      drug: "Phenoxybenzamine",
      klass: "α-blocker (nonselective, IRREVERSIBLE)",
      target: "α1 and α2 receptors — covalent (irreversible) binding",
      mechanism:
        "Irreversible (the printed cell's first word): covalent blockade that the pheochromocytoma catecholamine surge cannot out-compete",
      effect:
        "Long-lasting α-blockade → vasodilation; the preoperative shield against tumor catecholamine release",
      uses:
        "Pheochromocytoma (used preoperatively) to prevent catecholamine (hypertensive) crisis (printed APPLICATIONS cell)",
      adverse:
        "Orthostatic hypotension, reflex tachycardia (the shared nonselective ADVERSE EFFECTS cell)",
      clue:
        "The IRREVERSIBLE one — the only cell on the page that names pheochromocytoma; preop, before the tumor is touched.",
    },
    {
      drug: "Phentolamine",
      klass: "α-blocker (nonselective, REVERSIBLE)",
      target: "α1 and α2 receptors — competitive (reversible) binding",
      mechanism:
        "Reversible (the printed cell's first word): competitive blockade with quick onset and offset — the acute-rescue profile",
      effect:
        "Rapid, short-lived vasodilation — for crises and local ischemia, not for maintenance",
      uses:
        "Given to patients on MAO inhibitors who eat tyramine-containing foods and for severe cocaine-induced hypertension (2nd line). Also used to treat norepinephrine extravasation (printed APPLICATIONS cell)",
      adverse:
        "Orthostatic hypotension, reflex tachycardia (the shared nonselective ADVERSE EFFECTS cell — no separate cell prints for this row)",
      clue:
        "The REVERSIBLE one: cheese reaction on an MAOI, cocaine hypertension 2nd line, and the extravasated-NE digit rescue — three acute scenarios, one short-acting drug.",
    },
    {
      drug: "Prazosin, terazosin, doxazosin, tamsulosin",
      klass: "α-blocker (α1 selective, -osin ending)",
      target: "α1 receptors (vascular + prostatic smooth muscle); α2 brake spared",
      mechanism:
        "Competitive α1-selective blockade — the -osin suffix rule printed in the band row 'α1 selective (-osin ending)'; tamsulosin is the relatively PROSTATE-SELECTIVE member",
      effect:
        "Vasodilation + relaxation of prostatic/bladder-neck smooth muscle, with the α2 brake intact; tamsulosin lowers blood pressure little — the printed exception 'hypertension (except tamsulosin)'",
      uses:
        "Urinary symptoms of BPH; PTSD (prazosin); hypertension (printed APPLICATIONS cell, with the tamsulosin exception printed inside it)",
      adverse:
        "1st-dose orthostatic hypotension, dizziness, headache (printed ADVERSE EFFECTS cell)",
      clue:
        "First dose at night — the 1st-dose orthostatic hypotension rule; prazosin is the PTSD one (the source prints its 'p' in red); tamsulosin is the -osin you do NOT use for hypertension.",
    },
    {
      drug: "Mirtazapine",
      klass: "α-blocker (α2 selective) / antidepressant",
      target: "The presynaptic α2 autoreceptor itself — blockade, not stimulation",
      mechanism:
        "α2-SELECTIVE BLOCKADE — the mirror image of the sympatholytics above it on the page: it blocks the brake rather than pressing it (the table prints only the drug row under the 'α2 selective' band)",
      effect: "Antidepressant effect; sedation and appetite stimulation",
      uses: "Depression (printed APPLICATIONS cell)",
      adverse:
        "Sedation, ↑ serum cholesterol, ↑ appetite (printed ADVERSE EFFECTS cell)",
      clue:
        "The one α-BLOCKER of α2 in the α-blocker table — depression with sedation, ↑ serum cholesterol, ↑ appetite (the antidepressant that makes you hungry and sleepy).",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 34-year-old woman with episodic headaches, palpitations, and drenching sweats has markedly elevated plasma metanephrines and an adrenal mass on MRI; the surgeon schedules laparoscopic resection in two weeks and asks for medical preparation beforehand.",
        discriminator:
          "Preoperative control of a catecholamine-secreting tumor → the printed cell that names pheochromocytoma",
        concept: "Phenoxybenzamine — the irreversible preoperative shield",
        answer:
          "Phenoxybenzamine: 'Irreversible. Pheochromocytoma (used preoperatively) to prevent catecholamine (hypertensive) crisis.' Its covalent, non-competitive blockade cannot be overwhelmed by the catecholamine surge when the tumor is manipulated — exactly what preoperative preparation needs, and the only cell on the page that names pheochromocytoma.",
      },
      {
        stem: "A 66-year-old man with urinary symptoms of BPH is started on doxazosin; one hour after his first evening dose he stands up from the toilet, feels lightheaded, and falls; orthostatic vitals are positive.",
        discriminator:
          "First dose of an -osin drug → the printed first-dose rule",
        concept: "1st-dose orthostatic hypotension (the -osin family)",
        answer:
          "The α1-selective (-osin ending) band prints '1st-dose orthostatic hypotension, dizziness, headache.' — the first dose of prazosin, terazosin, doxazosin, or tamsulosin can floor the patient, so the first dose is given at night and the patient is warned to rise slowly; the effect attenuates with subsequent dosing.",
      },
      {
        stem: "A 51-year-old man treated with clonidine for years runs out of his prescription over a long holiday weekend; he presents with headache, sweating, and a blood pressure of 196/118, and the emergency team must distinguish this from his original hypertensive urgency.",
        discriminator:
          "Abrupt cessation of a pressed α2 brake → the system overcorrects",
        concept: "Rebound hypertension with abrupt cessation",
        answer:
          "The clonidine row prints it inside its own adverse cell: 'rebound hypertension with abrupt cessation.' The α2-agonist suppresses sympathetic outflow; withdraw it suddenly and the brake releases — catecholamines and blood pressure surge, mimicking (or precipitating) a hypertensive urgency. The fix is to restart/taper, and the lesson is to never stop clonidine abruptly.",
      },
      {
        stem: "A 27-year-old woman at 28 weeks' gestation has chronic hypertension; during prepregnancy counseling she was told her antihypertensive would need to change; on it, her outpatient workup later shows a positive direct Coombs test without frank hemolysis.",
        discriminator:
          "Hypertension in pregnancy → the printed obstetric cell and its autoimmunity triad",
        concept: "α-methyldopa: pregnancy's brake, with Coombs ⊕ in tow",
        answer:
          "α-methyldopa's printed APPLICATIONS cell is 'Hypertension in pregnancy' and its ADVERSE EFFECTS cell is 'Direct Coombs ⊕ hemolysis, drug-induced lupus, hyperprolactinemia.' The direct Coombs test can turn positive (with or without hemolysis) while the patient takes it — a drug effect to recognize, not an emergent autoimmune workup.",
      },
    ],
    traps: [
      {
        a: "Phenoxybenzamine (nonselective, IRREVERSIBLE)",
        b: "Phentolamine (nonselective, REVERSIBLE)",
        whyConfused:
          "Both are nonselective α-blockers sharing one printed adverse cell (Orthostatic hypotension, reflex tachycardia)",
        keyDifference:
          "The printed cells open with the distinction: 'Irreversible.' vs 'Reversible.' — phenoxybenzamine's covalent blockade is the preoperative pheochromocytoma shield (prevents catecholamine (hypertensive) crisis); phentolamine's competitive blockade is the acute rescue (MAOI-tyramine foods, severe cocaine-induced hypertension 2nd line, norepinephrine extravasation)",
        clue:
          "Scheduled preop protection = phenoxybenzamine; emergency/short-lived rescue (or extravasated NE) = phentolamine",
      },
      {
        a: "Clonidine treating hypertensive urgency",
        b: "Clonidine causing rebound hypertension",
        whyConfused:
          "The same drug appears on both sides of the blood-pressure question",
        keyDifference:
          "The printed cells hold both truths: 'Hypertensive urgency (limited situations)' in the APPLICATIONS column and 'rebound hypertension with abrupt cessation' in the ADVERSE EFFECTS column — pressing the α2 brake lowers pressure; releasing the pressed brake suddenly surges it",
        clue:
          "A clonidine patient whose pressure spikes: ask first whether any doses were MISSED — restart/taper before escalating anything else",
      },
      {
        a: "Tamsulosin for hypertension",
        b: "The other -osin drugs for hypertension",
        whyConfused:
          "All four print in one band row — 'Prazosin, terazosin, doxazosin, tamsulosin'",
        keyDifference:
          "The applications cell prints the exception inside itself: 'hypertension (except tamsulosin)' — tamsulosin is relatively prostate-selective, used for urinary symptoms of BPH, not for blood pressure",
        clue:
          "BPH without blood-pressure effect → tamsulosin; BPH WITH hypertension (or PTSD nightmares → prazosin) → the other -osins",
      },
      {
        a: "Mirtazapine the α2-BLOCKER",
        b: "The α2-AGONISTS in the table above it",
        whyConfused:
          "Both live on the same page and both are named for α2 — the receptor, not the direction, seems to be the sorting key",
        keyDifference:
          "The top table's drugs AGONIZE the presynaptic α2 brake (sympatholytics — ↓ sympathetic outflow); mirtazapine BLOCKS α2 (printed in the α-blockers table under the 'α2 selective' band) — opposite directions at the same receptor, which is why its application is Depression and its adverse effects are Sedation, ↑ serum cholesterol, ↑ appetite",
        clue:
          "Same receptor, opposite direction: press the brake (agonist) → sympatholysis; block the brake (mirtazapine) → the antidepressant lane",
      },
    ],
    pivots: [
      {
        lookAlike:
          "Any question naming an α2 drug or an α-blocker — which half of the page is it on?",
        differentiator:
          "First sort DIRECTION: α2-AGONIST = clonidine, guanfacine, α-methyldopa, tizanidine — they press the presynaptic brake NE itself uses (book 238) and lower sympathetic outflow. α-BLOCKER = phenoxybenzamine, phentolamine (nonselective), the -osin family (α1 selective), mirtazapine (α2 selective) — they remove receptor signaling at the synapse. Then sort BAND within each half.",
        correctPath:
          "Direction first (agonist vs blocker), band second (which drug family), then quote the printed cell that answers the stem",
      },
      {
        lookAlike:
          "A hypertension vignette with a special context — pregnancy, pheochromocytoma, BPH, PTSD, cocaine, MAOI, extravasation — which α drug fits?",
        differentiator:
          "Route by the printed cells: pregnancy → α-methyldopa ('Hypertension in pregnancy'); pheochromocytoma preop → phenoxybenzamine ('used preoperatively… to prevent catecholamine (hypertensive) crisis'); urinary symptoms of BPH → the -osin family (tamsulosin when blood pressure is NOT the target); PTSD nightmares → prazosin (the source prints its 'p' in red); MAOI-tyramine reaction, severe cocaine-induced hypertension (2nd line), or norepinephrine extravasation → phentolamine; ADHD/Tourette/opioid-withdrawal symptom control or hypertensive urgency (limited situations) → clonidine, guanfacine.",
        correctPath:
          "Match the context to the one cell that names it — each special-context indication prints in exactly one cell on this page",
      },
      {
        lookAlike:
          "Three different orthostatic-hypotension mechanisms on one page — which drug caused it?",
        differentiator:
          "-osin family: 1st-dose orthostatic hypotension (dizziness, headache — the first dose, then it attenuates). Nonselective α-blockers: the shared cell 'Orthostatic hypotension, reflex tachycardia' (any dose, ongoing). The α2-agonists: 'hypotension' WITH bradycardia and CNS depression (no reflex tachycardia — the brake suppresses the sympathetic drive that would drive the reflex).",
        correctPath:
          "Read the accompanying findings: reflex tachycardia → nonselective blocker; first dose only → -osin; bradycardia + sedation + miosis → the α2-agonist brake",
      },
    ],
    miniCase: {
      vignette:
        "A 41-year-old man presents with six months of episodic pounding headaches, drenching sweats, and palpitations; during an episode his blood pressure is 218/126. Plasma free metanephrines are markedly elevated, and abdominal MRI shows a 4.2-cm right adrenal mass. The endocrine team plans laparoscopic adrenalectomy in three weeks and asks which drug should be used to prepare him medically before the operation.",
      question:
        "Choose the preoperative drug — and note that the correct answer is printed, word for word, in exactly one cell of this page's α-blockers table.",
      options: [
        {
          label:
            "Phenoxybenzamine — nonselective α-blockade that is IRREVERSIBLE, started before surgery to prevent catecholamine (hypertensive) crisis",
          text: "The irreversible one, before the tumor is touched.",
          correct: true,
          why:
            "Correct — and it is the printed answer. Phenoxybenzamine's APPLICATIONS cell on book 243 reads verbatim: 'Irreversible. Pheochromocytoma (used preoperatively) to prevent catecholamine (hypertensive) crisis.' It is the only cell on the page that names pheochromocytoma. The mechanism explains the indication: covalent, irreversible binding means no amount of tumor catecholamine released during surgical manipulation can out-compete the blockade — precisely the protection preoperative preparation is for.",
        },
        {
          label:
            "Phentolamine — nonselective α-blockade that is REVERSIBLE, chosen for its quick onset and offset in acute hypertensive emergencies",
          text: "The reversible one — blockade when you need it, gone when you don't.",
          why:
            "Right family, wrong pharmacodynamics for this job. Phentolamine's printed cell opens with 'Reversible.' — quick on, quick off — which is exactly what its three printed uses need: the MAO-inhibitor patient who ate tyramine, severe cocaine-induced hypertension (2nd line), and norepinephrine extravasation. But preoperative preparation over days-to-weeks needs a long-lasting, non-competitive blockade; a reversible competitive blocker would have to be continuously infused and could be surmounted by the intraoperative catecholamine surge. The reversible rescuer is the wrong instrument for scheduled preop shielding.",
        },
        {
          label:
            "Prazosin — α1-selective blockade (-osin ending), avoiding the nonselective blockade that causes orthostatic hypotension and reflex tachycardia",
          text: "Selective, titratable, blood-pressure-lowering — why not this one?",
          why:
            "Tempting on selectivity grounds, but it fails on the printed indications and its own first-dose rule. The -osin band's APPLICATIONS cell is 'Urinary symptoms of BPH; PTSD (prazosin); hypertension (except tamsulosin).' — pheochromocytoma preop is not among them — and its ADVERSE EFFECTS cell prints '1st-dose orthostatic hypotension, dizziness, headache.' Sparing α2 also means sparing the presynaptic brake's restraint on NE release, and the selective competitive blockade does not provide the non-competitive, both-subtype shield the printed pheochromocytoma cell specifies.",
        },
        {
          label:
            "Clonidine — an α2-AGONIST that presses the presynaptic autoreceptor brake, lowering sympathetic outflow and therefore blood pressure",
          text: "It lowers pressure too — and it's on the same page.",
          why:
            "Wrong direction entirely. Clonidine is a SYMPATHOLYTIC (α2-agonist): it presses the presynaptic brake that NE itself uses, reducing sympathetic outflow — useful in its printed applications (hypertensive urgency in limited situations, ADHD, Tourette syndrome, opioid withdrawal symptom control). But a patient with a catecholoma needs the tumor's NE and epinephrine BLOCKED AT THE RECEPTOR, not the nerve-ending release of a (mostly normal) sympathetic system throttled; and clonidine's own adverse cell warns of 'rebound hypertension with abrupt cessation' — a perioperative stop would add a rebound crisis on top of the surgical one.",
        },
      ],
      reasoning:
        "The stem hands you a preoperative pheochromocytoma — and this page prints that exact scenario in exactly one cell. Routing each option through the α-blockers table: phenoxybenzamine is the nonselective IRREVERSIBLE member whose APPLICATIONS cell names pheochromocytoma and states its use 'preoperatively' to prevent the catecholamine (hypertensive) crisis — covalent blockade that the surgical catecholamine surge cannot out-compete (correct). Phentolamine shares the nonselective band and even the same shared adverse cell (orthostatic hypotension, reflex tachycardia), but its printed cell opens with 'Reversible.' and lists three acute rescues — MAOI-tyramine, cocaine-induced hypertension (2nd line), norepinephrine extravasation — the quick-on/quick-off profile that preop maintenance does not want. Prazosin is the α1-selective -osin with BPH, PTSD, and hypertension in its cell plus the 1st-dose orthostatic hypotension rule — selective, competitive, and printed for other diseases. Clonidine is not a blocker at all: it is the top table's α2-agonist brake-presser, whose own cell carries the rebound-hypertension warning that would be catastrophic around surgery. One tumor, one printed cell — match it.",
    },
  },
  mnemonics: [
    {
      code: "PRESS THE BRAKE, DON'T CUT THE WIRE",
      meaning:
        "The α2-AGONISTS (clonidine, guanfacine, α-methyldopa, tizanidine) PRESS the presynaptic α2-autoreceptor brake — the same brake NE itself uses ('NE itself, acting on presynaptic α2-autoreceptors → negative feedback', book 238) — instead of cutting the sympathetic wire. Pressing a brake is reversible: that is why abrupt cessation RELEASES it and rebounds (rebound hypertension with abrupt cessation), and why the brake-pressers cause CNS depression, bradycardia, hypotension, miosis rather than denervation.",
      memorizes:
        "The mechanism of the entire Sympatholytics (α2-agonists) table and the rebound rule",
      whenToUse:
        "Any question about how clonidine/guanfacine/α-methyldopa/tizanidine lower blood pressure, or why stopping them abruptly causes rebound hypertension",
      clinical:
        "A pressed brake explains the whole clonidine row: therapeutic sympatholysis (hypertensive urgency, ADHD, Tourette, opioid withdrawal) on one line, and the rebound surge when the brake is released suddenly on the next.",
    },
    {
      code: "METHYLDOPA: THE PREGNANT BRAKE WITH THREE TAXES",
      meaning:
        "α-METHYLDOPA is THE PREGNANT BRAKE — the printed application is 'Hypertension in pregnancy' — and it collects THREE TAXES printed in its adverse cell: DIRECT COOMBS ⊕ HEMOLYSIS, DRUG-INDUCED LUPUS, HYPERPROLACTINEMIA. The pregnancy indication and the three taxes are one memory unit: prescribe the obstetric brake, expect the Coombs test to turn positive.",
      memorizes:
        "The α-methyldopa row of the sympatholytics table — application + the full adverse-effects triad",
      whenToUse:
        "Any vignette pairing hypertension in pregnancy with a positive direct Coombs test, lupus-like findings, or galactorrhea/hyperprolactinemia",
      clinical:
        "Pregnant patient on her antihypertensive + direct Coombs ⊕ → name the drug (α-methyldopa) and the drug effect before ordering an autoimmune workup.",
    },
    {
      code: "PHENOXY FOREVER, PHENTOLAMINE FLEETING",
      meaning:
        "The two nonselective α-blockers sort by duration: PHENOXYBENZAMINE = FOREVER (irreversible, covalent — the preoperative pheochromocytoma shield, because the tumor's catecholamine surge cannot out-compete it) · PHENTOLAMINE = FLEETING (reversible, competitive — the acute rescues: MAOI patients who eat tyramine-containing foods, severe cocaine-induced hypertension (2nd line), and norepinephrine extravasation). Their printed cells literally open with the words 'Irreversible.' and 'Reversible.'",
      memorizes:
        "The nonselective band of the α-blockers table — which member for which scenario, and the printed first words that encode it",
      whenToUse:
        "Any question choosing between the two nonselective α-blockers, or asking who gets which before/during a crisis",
      clinical:
        "Scheduled preop protection → phenoxybenzamine (forever); an emergency that needs vasodilation NOW and not in an hour → phentolamine (fleeting). Both share the one printed adverse cell: orthostatic hypotension, reflex tachycardia.",
    },
    {
      code: "-OSIN FOR THE OUTLETS, FIRST DOSE FLOORS",
      meaning:
        "The α1-SELECTIVE family is spelled by its suffix — the band prints 'α1 selective (-osin ending)': PRAZOSIN, TERAZOSIN, DOXAZOSIN, TAMSULOSIN. OUTLETS = the applications: URINARY SYMPTOMS OF BPH (the bladder outlet), PTSD (PRAZOSIN — the source prints the red 'p' to pair them), HYPERTENSION (EXCEPT TAMSULOSIN — the one that stays in the prostate). FIRST DOSE FLOORS = the printed adverse cell: 1st-dose orthostatic hypotension, dizziness, headache — give the first dose at night.",
      memorizes:
        "The -osin family membership, its three printed applications with the tamsulosin exception, and the 1st-dose rule",
      whenToUse:
        "Any BPH/PTSD/hypertension question involving an -osin drug, or any first-dose orthostasis vignette",
      clinical:
        "Man started on doxazosin who faints on the toilet after his first dose — the printed rule, prevented by dosing at bedtime; and remember the exception inside the cell: tamsulosin is for the outlet, not the blood pressure.",
    },
  ],
  rapidReview: {
    s30: [
      "Sympatholytics (α2-agonists): clonidine, guanfacine; α-methyldopa; tizanidine — all press the presynaptic α2-autoreceptor brake",
      "NE itself acts on presynaptic α2-autoreceptors → negative feedback (book 238) — the brake the agonists press",
      "Clonidine/guanfacine applications: hypertensive urgency (limited situations), ADHD, Tourette syndrome, symptom control in opioid withdrawal",
      "Clonidine/guanfacine adverse: CNS depression, bradycardia, hypotension, respiratory depression, miosis, rebound hypertension with abrupt cessation",
      "α-methyldopa: hypertension in pregnancy; Direct Coombs ⊕ hemolysis, drug-induced lupus, hyperprolactinemia",
      "Tizanidine: relief of spasticity; hypotension, weakness, xerostomia",
      "Phenoxybenzamine: Irreversible. Pheochromocytoma (used preoperatively) to prevent catecholamine (hypertensive) crisis",
      "Phentolamine: Reversible. MAOI + tyramine foods, severe cocaine-induced hypertension (2nd line), norepinephrine extravasation",
      "Nonselective α-blockers share ONE adverse cell: orthostatic hypotension, reflex tachycardia",
      "α1 selective (-osin ending): prazosin, terazosin, doxazosin, tamsulosin — BPH; PTSD (prazosin); hypertension (except tamsulosin); 1st-dose orthostatic hypotension",
      "Mirtazapine: α2 selective; Depression; Sedation, ↑ serum cholesterol, ↑ appetite",
    ],
    m3: [
      "PRESS THE BRAKE, DON'T CUT THE WIRE — the α2-agonists press the presynaptic autoreceptor brake; released abruptly, it rebounds",
      "METHYLDOPA: THE PREGNANT BRAKE WITH THREE TAXES — hypertension in pregnancy; Coombs ⊕ hemolysis, drug-induced lupus, hyperprolactinemia",
      "PHENOXY FOREVER, PHENTOLAMINE FLEETING — irreversible = pheo preop; reversible = tyramine/cocaine/extravasation rescues",
      "-OSIN FOR THE OUTLETS, FIRST DOSE FLOORS — BPH, PTSD (prazosin), HTN except tamsulosin; first dose at night",
    ],
    m10: [
      "The page prints TWO tables — Sympatholytics (α2-agonists) and α-blockers — both with DRUG / APPLICATIONS / ADVERSE EFFECTS columns; there is no prose on the page",
      "The α-blockers table prints THREE shaded band rows: Nonselective, α1 selective (-osin ending), α2 selective — the bands, not the individual drugs, carry the selectivity",
      "The nonselective band's ADVERSE EFFECTS cell prints ONCE — 'Orthostatic hypotension, reflex tachycardia.' — vertically spanning the phenoxybenzamine and phentolamine rows (VLM-confirmed; the text layer prints it after phentolamine's applications, line 60)",
      "Interleave quirks (the m38 convention): the α-blockers table's APPLICATIONS/ADVERSE EFFECTS headers print BEFORE the 'α-blockers' heading (lines 39–44), and mirtazapine's two cells print BEFORE its 'α2 selective / Mirtazapine' band label (lines 73–78)",
      "The source prints the 'p' of '(prazosin)' in RED to pair prazosin with PTSD — First Aid's own embedded mnemonic (VLM-confirmed), carried attributed; no margin mnemonics print anywhere on the page",
      "The α2-autoreceptor negative-feedback sentence is NOT on book 243 — it prints on book 238 (the Autonomic drugs opener, the sibling topic autonomic-drugs-synapse); this page's tables are the drug-side application of that brake",
      "Census: pdfimages = ZERO rasters on pdf 265; ONE VLM pass (glm-4.6v, 120 DPI) confirms two tables, no photographs, no line art, no margin notes; the indd footer 'FAS1_2026_05-Pharmacology.indd 243' + '12/19/25 8:07 AM' pins the book page (243 = pdf 265 − 22)",
    ],
  },
  recall: [
    {
      q: "The clonidine, guanfacine row — APPLICATIONS, verbatim.",
      a: "Hypertensive urgency (limited situations), ADHD, Tourette syndrome, symptom control in opioid withdrawal",
    },
    {
      q: "The clonidine, guanfacine row — ADVERSE EFFECTS, verbatim.",
      a: "CNS depression, bradycardia, hypotension, respiratory depression, miosis, rebound hypertension with abrupt cessation",
    },
    {
      q: "α-methyldopa — application and the full adverse-effects triad, verbatim.",
      a: "Hypertension in pregnancy; Direct Coombs ⊕ hemolysis, drug-induced lupus, hyperprolactinemia",
    },
    {
      q: "Tizanidine — application and adverse effects, verbatim.",
      a: "Relief of spasticity; hypotension, weakness, xerostomia",
    },
    {
      q: "Phenoxybenzamine's APPLICATIONS cell, verbatim — including its first word.",
      a: "Irreversible. Pheochromocytoma (used preoperatively) to prevent catecholamine (hypertensive) crisis.",
    },
    {
      q: "Phentolamine's APPLICATIONS cell, verbatim — including its first word.",
      a: "Reversible. Given to patients on MAO inhibitors who eat tyramine-containing foods and for severe cocaine-induced hypertension (2nd line). Also used to treat norepinephrine extravasation.",
    },
    {
      q: "What single adverse-effects cell do BOTH nonselective α-blockers share, verbatim?",
      a: "Orthostatic hypotension, reflex tachycardia.",
    },
    {
      q: "The α1 selective band — drug members, applications, and adverse effects, verbatim.",
      a: "Prazosin, terazosin, doxazosin, tamsulosin; Urinary symptoms of BPH; PTSD (prazosin); hypertension (except tamsulosin).; 1st-dose orthostatic hypotension, dizziness, headache.",
    },
    {
      q: "Mirtazapine — band, application, and adverse effects, verbatim.",
      a: "α2 selective; Depression.; Sedation, ↑ serum cholesterol, ↑ appetite.",
    },
    {
      q: "Where does the α2-autoreceptor negative-feedback sentence actually print, and what does it say?",
      a: "Not on book 243 — on book 238 (the Autonomic drugs opener): 'Release of norepinephrine from a sympathetic nerve ending is modulated by NE itself, acting on presynaptic α2-autoreceptors → negative feedback.'",
    },
  ],
  related: [
    {
      title: "Sympathomimetics",
      topicId: "sympathomimetics",
      note: "The mirror topic on the facing pages (book 241–242): every sympathomimetic RAISES adrenergic tone while this page's drugs LOWER it or block its reception — study the two tables back-to-back and the receptor map (α1, α2, β1, β2, D1) predicts both directions.",
    },
    {
      title: "Autonomic Drugs: Synapse Targets & Overview",
      topicId: "autonomic-drugs-synapse",
      note: "The home of the brake this page's agonists press: book 238 prints 'Release of norepinephrine from a sympathetic nerve ending is modulated by NE itself, acting on presynaptic α2-autoreceptors → negative feedback' beside the four-panel synapse figure — the α2 chip on the presynaptic membrane is the exact receptor clonidine, guanfacine, α-methyldopa, and tizanidine agonize.",
    },
    {
      title: "Tissue Distribution of Adrenergic Receptors",
      topicId: "adrenergic-receptor-distribution",
      note: "Where the α1 and α2 receptors this page's blockers target actually sit (book 238) — the vascular α1 that phenoxybenzamine/phentolamine/-osin drugs block, and the presynaptic α2 that the agonists press and mirtazapine blocks.",
    },
    {
      title: "β-Blockers",
      note: "The OTHER sympatholytic family, on the very next page (book 244): where this page takes down the α side (the brake and the vascular α1 receptor), the β-blockers take down the β side — the two pages together are the complete sympatholytic armamentarium, and the pheochromocytoma sequence (α-blockade first, β-blockade only after) spans both.",
    },
  ],
  crossLinks: [
    {
      subject: "Endocrine pharmacology & oncology (pheochromocytoma)",
      connection:
        "The page's highest-stakes cell is endocrine: phenoxybenzamine's 'Irreversible. Pheochromocytoma (used preoperatively) to prevent catecholamine (hypertensive) crisis.' — the adrenal-medullary tumor's NE/epinephrine surge meets a covalent blockade it cannot out-compete. The episodic headache-sweats-palpitations triad, the metanephrine workup, and the preoperative α-shield all converge on this one printed cell.",
    },
    {
      subject: "Psychiatry (ADHD, Tourette, PTSD, depression, opioid withdrawal)",
      connection:
        "Five psychiatric indications live on this one page: ADHD and Tourette syndrome (clonidine, guanfacine), symptom control in opioid withdrawal (clonidine, guanfacine), PTSD (prazosin — the source marks the red 'p'), and Depression (mirtazapine, whose Sedation, ↑ serum cholesterol, ↑ appetite cell explains the antidepressant chosen for the cachectic or insomniac depressed patient).",
    },
    {
      subject: "Obstetrics (hypertension in pregnancy)",
      connection:
        "α-methyldopa's obstetric cell — 'Hypertension in pregnancy' — with its Direct Coombs ⊕ hemolysis, drug-induced lupus, hyperprolactinemia triad: the one printed indication on the page that belongs to another organ system's chapter, and a favorite cross-discipline stem (pregnant + hypertensive + Coombs-positive).",
    },
    {
      subject: "Anesthesia & critical care (vasoactive extravasation and hypertensive crises)",
      connection:
        "Phentolamine's cell is the ICU/anesthesia lane: norepinephrine extravasation (local α1-blockade to rescue ischemic digits around a peripheral vasopressor line), the MAO-inhibitor tyramine reaction, and severe cocaine-induced hypertension (2nd line) — acute catecholamine excess scenarios where reversible, fast-offset blockade is the right instrument.",
    },
  ],
};
