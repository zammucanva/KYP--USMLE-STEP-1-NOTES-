import type { KypUsMLENote } from "../types";

// Pharmacology — ALPHA-BLOCKERS (PH23 — the class-table block: the
// 'α-blockers' section, the LOWER portion of pdf 265 / book 243 under the
// standing 'PHARMACOLOGY—AUTONOMIC DRUGS' banner). Source lines 39-80: the
// section header and ONE three-column DRUG/APPLICATIONS/ADVERSE EFFECTS
// table of four rows grouped by selectivity — 'Nonselective' +
// 'Phenoxybenzamine' → 'Irreversible. Pheochromocytoma (used
// preoperatively) to prevent catecholamine (hypertensive) crisis.';
// 'Phentolamine' → 'Reversible. Given to patients on MAO inhibitors who
// eat tyramine-containing foods and for severe cocaine-induced
// hypertension (2nd line). Also used to treat norepinephrine
// extravasation.' (adverse cell, shared: 'Orthostatic hypotension, reflex
// tachycardia.'); 'α1 selective (-osin ending)' + 'Prazosin, terazosin,
// doxazosin, tamsulosin' → 'Urinary symptoms of BPH; PTSD (prazosin);
// hypertension (except tamsulosin).' | '1st-dose orthostatic hypotension,
// dizziness, headache.'; 'α2 selective' + 'Mirtazapine' → 'Depression.' |
// 'Sedation, ↑ serum cholesterol, ↑ appetite.'.
// PH22/PH23 BOUNDARY (pinned from below): the UPPER portion of the same
// page (lines 9-37) is the 'Sympatholytics (α2-agonists)' block — the
// COMPLETED PH22 — EXCLUDED here; only its header + last row pinned from
// below (its agonists are the receptor mirror of this table's mirtazapine
// row, the α2 ANTAGONIST).
// CROSS-PAGE MECHANISM ANCHORS (all printed): book 237
// (g-protein-linked-second-messengers, PH16) — the α1 row 'α1 | q | ↑
// vascular smooth muscle contraction, ↑ pupillary dilator muscle
// contraction (mydriasis), ↑ intestinal and bladder sphincter muscle
// contraction'; book 236 (tissue-distribution-of-adrenergic-receptors,
// PH15) — the α1 row 'Vascular smooth muscle / Visceral smooth muscle →
// Vasoconstriction / Smooth muscle contraction'; the same book-236 page
// (micturition-control, PH14) — 'α1-antagonists (eg, tamsulosin)' → 'BPH'
// + 'bladder, neck, prostate) → ↓ urinary obstruction'; book 242
// (sympathomimetics, the completed pilot, one page behind) — 'Epinephrine
// response exhibits reversal of mean arterial pressure from a net increase
// (the α response) to a net decrease (the β2 response).' + 'After
// α-blockade' + 'Phenylephrine response is suppressed but not reversed
// because it is a "pure" α-agonist (lacks β-agonist properties).'; book
// 238 (autonomic-drugs, PH17) — 'Release of norepinephrine from a
// sympathetic nerve ending is modulated by NE itself, acting on
// presynaptic α2-autoreceptors → negative feedback.'
// The block is pure text with zero rasters on pdf 265 — carried verbatim
// as this note's two table blocks; conveyed as ONE original KYP
// selectivity-fork map (AlphaBlockerMap). KYP extensions flagged wherever
// they appear: the THREE-WAY FORK frame, the PHEO-PROTOCOL frame (the
// α-before-β ordering rule — NOT printed, flagged), the -OSIN SUFFIX
// frame + the α1A subtype reading of 'except tamsulosin' (not printed),
// the FIRST-DOSE frame (the bedtime-dose rule — NOT printed, flagged),
// the EPINEPHRINE-REVERSAL LINK (the graphs print on book 242 in the
// sympathomimetics context; their attribution to the nonselective
// blockers is KYP's bridge), and the PH22/PH23 boundary census.
export const alphaBlockers: KypUsMLENote = {
  id: "alpha-blockers",
  title: "Alpha-Blockers",
  subtitle:
    "The three-way fork — one receptor family blocked at three selectivities: NONSELECTIVE phenoxybenzamine (irreversible; the pheochromocytoma pretreatment that prevents 'catecholamine (hypertensive) crisis') and phentolamine (reversible; the MAOI-tyramine reaction, cocaine hypertension 2nd line, norepinephrine extravasation), the α1-SELECTIVE -osin four (prazosin, terazosin, doxazosin, tamsulosin — 'Urinary symptoms of BPH; PTSD (prazosin); hypertension (except tamsulosin).' with '1st-dose orthostatic hypotension'), and the α2-SELECTIVE mirror mirtazapine ('Depression.' with 'Sedation, ↑ serum cholesterol, ↑ appetite').",
  subject: "Pharmacology",
  system:
    "Section II · Pharmacology — Autonomic Drugs (the banner this page shares with drug-effect-modifications, autonomic-receptors, acetylcholine-receptors, pain-transmission, micturition-control, tissue-distribution-of-adrenergic-receptors, g-protein-linked-second-messengers, autonomic-drugs, cholinomimetic-agents, anticholinesterase-poisoning, muscarinic-antagonists, atropine, and sympatholytics-alpha-2-agonists before it — the α-blockers table CLOSES book 243, in the LOWER portion of a page whose UPPER portion is the Sympatholytics (α2-agonists) block (the completed PH22, the agonist side of the same receptor story — excluded here, its boundary pinned from below); the page behind (book 242) carries the sympathomimetics physiologic-effects graphs, including the 'After α-blockade' epinephrine-reversal figure that IS this class's mechanism in graph form; the page ahead (book 244) opens the β-blockers table — the other half of receptor-blockade sympatholysis, whose carvedilol and labetalol combine α1 and β blockade; the α1 receptor's own mechanism rows sit on book 237 (α1 | q — the Gq couple) and book 236 (the distribution row), and the micturition page of book 236 prints the tamsulosin row itself ('α1-antagonists (eg, tamsulosin)' → BPH)",
  pilotCategory:
    "The class table's complete architecture — the section header, the three-column DRUG/APPLICATIONS/ADVERSE EFFECTS table in full (every group label, drug, application, and adverse-effect cell verbatim, including the '(-osin ending)' suffix label, the 'PTSD (prazosin)' and 'except tamsulosin' exception clauses, and the mirtazapine α2-antagonist row), plus the KYP layers that compress it: the THREE-WAY FORK frame (the selectivity sort — nonselective vs α1-selective vs α2-selective, unified with the α1 = Gq row of book 237 and the distribution row of book 236), the PHEO-PROTOCOL frame (the α-before-β preoperative rule — flagged as not printed), the -OSIN SUFFIX and FIRST-DOSE frames (the printed suffix label and '1st-dose' cell read with their management rules), the EPINEPHRINE-REVERSAL LINK (the 'After α-blockade' graphs of book 242 bridged to the nonselective rows), and the PH22/PH23 boundary census (the same-page split pinned from below).",
  difficulty: 2,
  readTime: 7,
  sourceRef:
    "First Aid 2026, Part 1 pp. 243 (Pharmacology — Autonomic Drugs: α-blockers — the LOWER portion of the page; the Sympatholytics (α2-agonists) table on the SAME page above — the completed PH22, the agonist side of the α2 story, whose last row is 'Tizanidine' → 'Relief of spasticity' — is EXCLUDED here; this block prints: the section header 'α-blockers'; the three-column DRUG/APPLICATIONS/ADVERSE EFFECTS table — 'Nonselective' + 'Phenoxybenzamine' → 'Irreversible. Pheochromocytoma (used preoperatively) to prevent catecholamine (hypertensive) crisis.'; 'Phentolamine' → 'Reversible. Given to patients on MAO inhibitors who eat tyramine-containing foods and for severe cocaine-induced hypertension (2nd line). Also used to treat norepinephrine extravasation.' (shared adverse cell: 'Orthostatic hypotension, reflex tachycardia.'); 'α1 selective (-osin ending)' + 'Prazosin, terazosin, doxazosin, tamsulosin' → 'Urinary symptoms of BPH; PTSD (prazosin); hypertension (except tamsulosin).' | '1st-dose orthostatic hypotension, dizziness, headache.'; 'α2 selective' + 'Mirtazapine' → 'Depression.' | 'Sedation, ↑ serum cholesterol, ↑ appetite.' — the block is pure text with zero rasters, never reproduced as artwork, carried verbatim as this note's two table blocks; NOT printed in this block (census-flagged, never cited as printed): the α1 = Gq second-messenger row (it prints on book 237 — 'α1 | q | ↑ vascular smooth muscle contraction, ↑ pupillary dilator muscle contraction (mydriasis), ↑ intestinal and bladder sphincter muscle contraction'), the α1 distribution row (book 236 — 'α1 | Vascular smooth muscle / Visceral smooth muscle → Vasoconstriction / Smooth muscle contraction'), the tamsulosin bladder row ('α1-antagonists (eg, tamsulosin)' → 'BPH', also book 236), the epinephrine-reversal graphs ('After α-blockade', book 242 — printed in the sympathomimetics context one page behind; the attribution to phenoxybenzamine/phentolamine is KYP's bridge), and the α2-autoreceptor sentence (book 238); the α-before-β pheochromocytoma ordering rule, the α1A-subtype reading of 'except tamsulosin', and the bedtime-dose/first-dose management rule are KYP flags — never cited as printed; the block does NOT extend to pdf 266 (book 244 opens β-blockers), and pdf 264 behind carries only the sympathomimetics tail)",
  tags: [
    "alpha-blockers",
    "α-blockers",
    "phenoxybenzamine",
    "phentolamine",
    "prazosin",
    "terazosin",
    "doxazosin",
    "tamsulosin",
    "mirtazapine",
    "α1-selective blockers",
    "α2-selective blockers",
    "nonselective α-blockers",
    "-osin ending",
    "pheochromocytoma",
    "catecholamine crisis",
    "hypertensive crisis",
    "MAO inhibitor tyramine",
    "norepinephrine extravasation",
    "cocaine-induced hypertension",
    "benign prostatic hyperplasia",
    "BPH",
    "PTSD nightmares",
    "hypertension",
    "first-dose orthostatic hypotension",
    "reflex tachycardia",
    "epinephrine reversal",
    "α1 receptor",
    "Gq protein",
    "vasoconstriction",
    "pharmacology",
  ],
  core: {
    what:
      "ONE RECEPTOR FAMILY, THREE SELECTIVITIES, FOUR ROWS. The block opens with its banner — 'α-blockers' — and prints one three-column table (DRUG / APPLICATIONS / ADVERSE EFFECTS) of four rows grouped by selectivity. ROW 1 (NONSELECTIVE): 'Phenoxybenzamine' → 'Irreversible. Pheochromocytoma (used preoperatively) to prevent catecholamine (hypertensive) crisis.' ROW 2 (NONSELECTIVE): 'Phentolamine' → 'Reversible. Given to patients on MAO inhibitors who eat tyramine-containing foods and for severe cocaine-induced hypertension (2nd line). Also used to treat norepinephrine extravasation.' — with the shared nonselective adverse-effects cell 'Orthostatic hypotension, reflex tachycardia.' spanning both. ROW 3 (α1 SELECTIVE): 'α1 selective (-osin ending)' + 'Prazosin, terazosin, doxazosin, tamsulosin' → 'Urinary symptoms of BPH; PTSD (prazosin); hypertension (except tamsulosin).' | '1st-dose orthostatic hypotension, dizziness, headache.' ROW 4 (α2 SELECTIVE): 'Mirtazapine' → 'Depression.' | 'Sedation, ↑ serum cholesterol, ↑ appetite.' That is the whole printed block — an irreversible/reversible pair aimed at catecholamine storms, a four-drug suffix family aimed at the prostate and the blood pressure, and an antidepressant parked at the bottom of an autonomic table.",
    why:
      "WHY BLOCKING THE α RECEPTOR IS ON THE EXAM. The α1 receptor is the sympathetic system's squeeze — 'α1 | q | ↑ vascular smooth muscle contraction, ↑ pupillary dilator muscle contraction (mydriasis), ↑ intestinal and bladder sphincter muscle contraction' (printed on book 237's second-messenger table: α1 rides Gq), and the distribution page puts its addresses in the table: 'Vascular smooth muscle / Visceral smooth muscle' → 'Vasoconstriction / Smooth muscle contraction' (book 236). Block it and the vessels relax (↓ peripheral vascular tone → the antihypertensive effect), the bladder neck and prostate relax (the BPH effect — the micturition page's own 'α1-antagonists (eg, tamsulosin)' row → '↓ urinary obstruction'), and the catecholamine storm of a pheochromocytoma finds its vascular receptor occupied ('used preoperatively) to prevent catecholamine (hypertensive) crisis'). WHY THE SELECTIVITY FORK MATTERS: nonselective blockade also takes the presynaptic α2-autoreceptor ('Release of norepinephrine... is modulated by NE itself, acting on presynaptic α2-autoreceptors → negative feedback.', book 238) — the brake comes off, NE release rises, and the reflex tachycardia of the shared toxicity cell follows; α1-selective blockade leaves that brake alone; and α2-SELECTIVE blockade (mirtazapine) is the mirror image of the completed PH22's agonists — it releases the brake on purpose, for the antidepressant direction. WHY THE TOXICITY CELLS READ AS THEY DO: 'Orthostatic hypotension, reflex tachycardia.' is the nonselective signature (venous pooling plus the unbraked baroreflex), '1st-dose orthostatic hypotension, dizziness, headache.' is the -osin signature — the printed '1st-' makes it a FIRST-dose phenomenon — and mirtazapine's 'Sedation, ↑ serum cholesterol, ↑ appetite.' is the metabolic set the psychiatry chapters recycle.",
    keyIdea:
      "Read the table as a THREE-WAY FORK with a lane for each patient (KYP compression of the printed group labels + the anchor pages). THE FORK — which α receptor does the drug block? NONSELECTIVE (phenoxybenzamine the IRREVERSIBLE one for the pheochromocytoma pretreatment; phentolamine the REVERSIBLE one for the MAOI-tyramine reaction, severe cocaine-induced hypertension '(2nd line)', and norepinephrine extravasation; toxicity 'Orthostatic hypotension, reflex tachycardia.'), α1-SELECTIVE (the '-osin ending' four: prazosin/terazosin/doxazosin for 'hypertension' and 'Urinary symptoms of BPH', prazosin alone for 'PTSD', tamsulosin the 'except'-clause member for BPH without the blood-pressure lane; toxicity the FIRST-DOSE rule), α2-SELECTIVE (mirtazapine → 'Depression.' — the autoreceptor brake RELEASED, the receptor mirror of the clonidine block above on the same page). THE MECHANISM — α1 rides Gq (book 237) at the vascular and visceral smooth-muscle addresses (book 236); blocking it relaxes both, which is one drug class doing cardiology (vasodilation) and urology (bladder neck) at once. THE TWO RULES — the pheo rule (irreversible α-blockade BEFORE any β-blocker — KYP flag: the ordering is not printed) and the first-dose rule ('1st-dose orthostatic hypotension' — give the first -osin dose at bedtime; KYP flag: the bedtime rule is not printed). One line: the drug tells you the selectivity, the selectivity tells you the patient, and the exceptions ('PTSD (prazosin)', 'except tamsulosin') are the exam.",
  },
  mechanisms: [
    {
      id: "alpha1-gq-blockade-selectivity-fork",
      title:
        "The blockade: α1 rides Gq at the vascular and visceral smooth-muscle addresses (the printed anchors of books 237/236: 'α1 | q | ↑ vascular smooth muscle contraction...' and 'α1 | Vascular smooth muscle / Visceral smooth muscle → Vasoconstriction / Smooth muscle contraction') — the blocker occupies the receptor, the squeeze relaxes, and the same mechanism becomes two specialties: the vessel (↓ vascular tone → ↓ BP) and the bladder neck/prostate (↓ urinary obstruction)",
      context:
        "The block's printed table (book 243, LOWER portion) gives the drugs and their selectivity groups; the mechanism itself prints on the completed pages this block leans on — book 237 (g-protein-linked-second-messengers, PH16: the α1 = Gq row) and book 236 (tissue-distribution-of-adrenergic-receptors, PH15: the α1 distribution row), with the same book-236 page's micturition-control table (PH14) printing the tamsulosin row itself. The epinephrine-reversal graphs of book 242 (one page behind) are the nonselective blockade's hemodynamic consequence in figure form — printed in the sympathomimetics context; the attribution to phenoxybenzamine/phentolamine is KYP's bridge, flagged. The three-way fork compression is KYP's.",
      flow: {
        nodes: [
          {
            id: "input",
            label: "The tone to block: the α1 squeeze — '↑ vascular smooth muscle contraction, ↑ pupillary dilator muscle contraction (mydriasis), ↑ intestinal and bladder sphincter muscle contraction' (book 237, printed) at the 'Vascular smooth muscle / Visceral smooth muscle' addresses (book 236, printed)",
            sublabel:
              "Input — the sympathetic vasoconstriction the previous sections built: the physiologic-effects graphs one page behind (book 242) print NE's 'α1-mediated vasoconstriction → ↑ mean arterial pressure' and phenylephrine's pure-α pressor line. This block's drugs are the OFF-switches for exactly that receptor — not the outflow turned down at the source (that is the α2-agonist table above on the same page, the completed PH22), but the end-organ receptor itself occupied.",
            variant: "input",
          },
          {
            id: "receptor",
            label: "STEP 1 — THE RECEPTOR IS Gq-COUPLED SMOOTH MUSCLE: 'α1 | q' (book 237, printed) — the vascular line ('Vasoconstriction') is the blood-pressure story, the visceral line ('Smooth muscle contraction') is the bladder-neck/prostate story, and the sphincter clause of the α1 row ('↑ intestinal and bladder sphincter muscle contraction') names the urology address itself",
            sublabel:
              "The couple: α1 → Gq → phospholipase C → IP3/DAG → Ca2+ → contraction. The blocker occupies the receptor competitively (prazosin and the -osins, phentolamine) or covalently (phenoxybenzamine — the 'Irreversible.' cell: it binds covalently, so the blockade survives the drug's clearance and wears off only as receptors are replaced). The micturition page's own row puts the address in table form: 'α1-antagonists (eg, tamsulosin)' → relaxation of 'bladder, neck, prostate) → ↓ urinary obstruction' with the application 'BPH' (book 236, printed).",
            variant: "process",
          },
          {
            id: "fork",
            label: "STEP 2 — THE FORK IS THE SELECTIVITY: NONSELECTIVE (α1 + α2 blocked — the vasodilation PLUS the presynaptic α2-autoreceptor taken: 'Release of norepinephrine... is modulated by NE itself, acting on presynaptic α2-autoreceptors → negative feedback.', book 238 — the brake off, NE release up) vs α1-SELECTIVE (the '-osin ending' four — the smooth-muscle addresses without the autoreceptor story) vs α2-SELECTIVE (mirtazapine — the brake released deliberately, the antidepressant direction)",
            sublabel:
              "The selectivity is the whole clinical sort: the nonselective pair earns the emergency lane (pheochromocytoma pretreatment, the MAOI-tyramine reaction, cocaine hypertension 2nd line, norepinephrine extravasation) because the tumor's catecholamine surge needs the vascular receptor fully occupied; the α1-selective family earns the chronic lane (hypertension, BPH, PTSD) because selective blockade spares the presynaptic brake and takes the first-dose rule instead; the α2-selective row is psychiatric (mirtazapine 'Depression.' — the mirror of clonidine's row in the table above: one receptor, two directions, two tables, one page).",
            variant: "process",
          },
          {
            id: "hemodynamic",
            label: "STEP 3 — THE HEMODYNAMIC CONSEQUENCE: the vessels relax → ↓ peripheral vascular resistance → ↓ blood pressure — and with α blocked, exogenous epinephrine's pressor response REVERSES: 'Epinephrine response exhibits reversal of mean arterial pressure from a net increase (the α response) to a net decrease (the β2 response).' (book 242, printed — the 'After α-blockade' graph one page behind; the attribution to the nonselective blockers is KYP's bridge, flagged)",
            sublabel:
              "The companion figure completes the story: 'Phenylephrine response is suppressed but not reversed because it is a \"pure\" α-agonist (lacks β-agonist properties).' (book 242, printed) — a pure α-agonist under α-blockade simply loses its effect, while epinephrine (β > α) flips sign because its β2 vasodilation is unopposed. This is the pharmacology the exam calls 'epinephrine reversal' — the classic recognition question for nonselective α-blockade. The reflex side of the same coin prints in this block's own shared cell: 'reflex tachycardia' (the baroreflex answering the vasodilation, plus the unbraked NE release of the taken α2 autoreceptor).",
            variant: "process",
          },
          {
            id: "output",
            label: "RESULT — the table's every use and every toxicity is one receptor occupied at one selectivity: the pheo patient pretreated (phenoxybenzamine, 'Irreversible.'), the crisis patient rescued (phentolamine, 'Reversible.'), the hypertensive or BPH patient on the -osin lane ('except tamsulosin' for the blood-pressure use), and the depressed patient at the α2 mirror (mirtazapine) — with the toxicities sorting the same way: 'Orthostatic hypotension, reflex tachycardia.' vs '1st-dose orthostatic hypotension, dizziness, headache.' vs 'Sedation, ↑ serum cholesterol, ↑ appetite.'",
            sublabel:
              "Output — what the exam pulls from the mechanism: the selectivity question ('which α-blocker for pheochromocytoma pretreatment' → the irreversible nonselective one; 'which for BPH with hypertension already controlled' → tamsulosin, the except-clause member), the G-protein question (α1 = Gq, the q-family with M1, M3, H1, V1 — the second-messenger page's own table), the epinephrine-reversal question (pressor → depressor under nonselective blockade; suppressed-not-reversed for the pure α-agonist), and the first-dose question (the printed '1st-dose orthostatic hypotension' — the -osin signature, managed with bedtime dosing; KYP flag: the management rule is not printed).",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "receptor", label: "the blocker finds the Gq-coupled squeeze" },
          { from: "receptor", to: "fork", label: "selectivity decides which α is taken" },
          { from: "fork", to: "hemodynamic", label: "vessels relax; epinephrine reverses" },
          { from: "hemodynamic", to: "output", label: "one receptor occupied = the table's every row" },
        ],
      },
    },
    {
      id: "alpha-blocker-drug-sort-toxicity",
      title:
        "The four-row sort: one printed table, three selectivity groups, six drugs — phenoxybenzamine (irreversible, the pheo pretreatment), phentolamine (reversible, the emergency lane: MAOI-tyramine, cocaine hypertension 2nd line, norepinephrine extravasation), the -osin four (prazosin, terazosin, doxazosin, tamsulosin: BPH, PTSD for prazosin, hypertension except tamsulosin), and mirtazapine (the α2-antagonist antidepressant)",
      context:
        "The block's own four-row table (book 243, LOWER portion), carried verbatim in the note's first table block. The lane-sort reading (pheo patient → phenoxybenzamine; crisis patient → phentolamine; chronic HTN/BPH patient → the -osins; depressed patient → mirtazapine) is KYP's overlay on the printed rows; every drug, group label, application, and adverse-effect cell is the book's own print.",
      flow: {
        nodes: [
          {
            id: "input",
            label: "The printed frame: four rows, three columns, three selectivity groups — DRUG / APPLICATIONS / ADVERSE EFFECTS — the group labels themselves ('Nonselective', 'α1 selective (-osin ending)', 'α2 selective') ARE the sorting keys, and the book's own suffix rule prints inside the DRUG column",
            sublabel:
              "Input — the table the exam reads row by row. Each group is one selectivity with its own lane: the emergency lane (nonselective — catecholamine storms), the chronic lane (α1-selective — hypertension and the prostate), and the psychiatric mirror (α2-selective — the antidepressant). The KYP lane-sort that follows reorders the same rows by WHO is standing in front of you: the pheo patient, the crisis patient, the hypertensive, the man with the obstructed bladder, the veteran with nightmares, the depressed patient.",
            variant: "input",
          },
          {
            id: "nonselective",
            label: "GROUP 1 — NONSELECTIVE: 'Phenoxybenzamine' → 'Irreversible. Pheochromocytoma (used preoperatively) to prevent catecholamine (hypertensive) crisis.' | 'Phentolamine' → 'Reversible. Given to patients on MAO inhibitors who eat tyramine-containing foods and for severe cocaine-induced hypertension (2nd line). Also used to treat norepinephrine extravasation.' | shared: 'Orthostatic hypotension, reflex tachycardia.'",
            sublabel:
              "The emergency pair. The IRREVERSIBLE/REVERSIBLE contrast is the first letter of each applications cell — phenoxybenzamine binds covalently (the steady, unsurprisable blockade the pheo pretreatment wants: 'used preoperatively) to prevent catecholamine (hypertensive) crisis'; KYP flag: the α-before-β ordering rule is not printed), and phentolamine competes (the titratable tool for the crises that have already started: the MAOI-tyramine hypertensive reaction — the cheese reaction's rescue, the drug the exam asks for by name; severe cocaine-induced hypertension, the book's own '(2nd line)' rank hedge; and norepinephrine extravasation — the infiltrated IV site, where local phentolamine rescues the ischemic tissue). The shared toxicity cell spans both: 'Orthostatic hypotension, reflex tachycardia.'",
            variant: "process",
          },
          {
            id: "osin",
            label: "GROUP 2 — α1 SELECTIVE, '(-osin ending)': 'Prazosin, terazosin, doxazosin, tamsulosin' → 'Urinary symptoms of BPH; PTSD (prazosin); hypertension (except tamsulosin).' | '1st-dose orthostatic hypotension, dizziness, headache.'",
            sublabel:
              "The chronic lane and the block's most-clinical row. The printed suffix rule ('-osin ending') names the family; the two parentheticals do the fine sorting: 'PTSD (prazosin)' — the nightmare-suppression use the psychiatry chapters carry; 'except tamsulosin)' — tamsulosin is out of the hypertension lane because its α1 affinity concentrates where the BPH symptom lives (KYP flag: the prostate-selective α1A subtype story is not printed on this page — the micturition page's own 'α1-antagonists (eg, tamsulosin)' → 'BPH' row is the printed bridge), so it relaxes the bladder neck without dropping the standing blood pressure. The toxicity cell carries the FIRST-DOSE rule — '1st-dose orthostatic hypotension, dizziness, headache.' — the printed '1st-' is the whole point (KYP flag: the bedtime-dose/start-low management is not printed).",
            variant: "process",
          },
          {
            id: "mirtazapine",
            label: "GROUP 3 — α2 SELECTIVE: 'Mirtazapine' → 'Depression.' | 'Sedation, ↑ serum cholesterol, ↑ appetite.' — the antidepressant row of an α-BLOCKERS table: the presynaptic brake released, the noradrenergic outflow up",
            sublabel:
              "The mirror row. The α2 receptor on the presynaptic terminal is the brake the book prints on book 238 ('Release of norepinephrine from a sympathetic nerve ending is modulated by NE itself, acting on presynaptic α2-autoreceptors → negative feedback.') — the same brake the table directly above on this page STIMULATES (clonidine, guanfacine — the completed PH22: outflow down, blood pressure down) and this row BLOCKS (mirtazapine: the brake released → NE outflow up → the antidepressant direction). The adverse set is the metabolic opposite of a sympatholytic: 'Sedation, ↑ serum cholesterol, ↑ appetite.' — the set the psychiatry chapters recycle (the antidepressant for the depressed patient who is not sleeping and not eating; KYP flag: the H1/5-HT2 receptor story behind the sedation and appetite is not printed on this page).",
            variant: "process",
          },
          {
            id: "output",
            label: "RESULT — the patient sort: PHEO (preoperative) → phenoxybenzamine (irreversible, before any β-blocker); CRISIS (MAOI-tyramine, cocaine 2nd line, NE extravasation) → phentolamine; HYPERTENSION → prazosin/terazosin/doxazosin (not tamsulosin); BPH → any -osin, tamsulosin the blood-pressure-sparing one; PTSD nightmares → prazosin; DEPRESSION with insomnia and poor appetite → mirtazapine — and every lane carries its own toxicity fingerprint",
            sublabel:
              "Output — the sort the exam actually runs: any stem that hands you one of these six patients and asks the drug (or hands you the drug and asks the patient or the selectivity) is answered from this one table. The toxicity sorts: the NONSELECTIVE picture ('Orthostatic hypotension, reflex tachycardia.') vs the FIRST-DOSE picture ('1st-dose orthostatic hypotension, dizziness, headache.' — the -osin signature, worst with the first dose and with prazosin the most potent of the four) vs the METABOLIC picture (mirtazapine's sedation-cholesterol-appetite set) — and the hemodynamic recognition question that crosses back to the page behind: the patient on a nonselective α-blocker whose epinephrine response REVERSED (book 242's 'After α-blockade' graph).",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "nonselective", label: "the emergency pair — α1 + α2 blocked" },
          { from: "nonselective", to: "osin", label: "the chronic family — the -osin four" },
          { from: "osin", to: "mirtazapine", label: "the psychiatric mirror — the brake released" },
          { from: "mirtazapine", to: "output", label: "three selectivities = six patients + three toxicity fingerprints" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "alpha-blocker-map",
      title: "The α-blocker selectivity fork (an original KYP visual)",
      caption:
        "An original KYP selectivity-fork map conveying the α-blockers block (book 243, LOWER portion): THE MECHANISM STRIP (the α1 = Gq squeeze of book 237's row at the vascular/visceral addresses of book 236's distribution row, blocked → relaxation of vessel and bladder neck); THE THREE FORK CARDS (NONSELECTIVE: phenoxybenzamine 'Irreversible.' for the pheochromocytoma pretreatment and phentolamine 'Reversible.' for the emergency lane; α1-SELECTIVE: the -osin four with the 'PTSD (prazosin)' and 'except tamsulosin' exceptions and the FIRST-DOSE rule; α2-SELECTIVE: mirtazapine → 'Depression.' — the receptor mirror of the completed PH22 above); THE USES STRIP (pheo, crisis, HTN, BPH, PTSD); THE TOXICITY STRIP (the shared nonselective cell vs the first-dose cell vs the metabolic set); THE EPINEPHRINE-REVERSAL BAND (book 242's printed 'After α-blockade' graphs, bridged); and THE BOUNDARY STRIP (the same-page PH22/PH23 split pinned from below, with the β-blockers page ahead).",
      notice:
        "Census (pdfimages + text layer): the α-blockers block is PURE TEXT with ZERO raster images on pdf 265 — COPYRIGHTED, never reproduced as artwork; this visual conveys the section header and the four-row selectivity table as an ORIGINAL_KYP_ADAPTATION (every drug, group label, application, and adverse-effect cell is the book's own print; the fork frame, the lane sort, the pheo-protocol frame, and the first-dose rule are KYP's, flagged). KYP extensions flagged on the map: the THREE-WAY FORK frame, the PHEO-PROTOCOL frame (the α-before-β ordering — NOT printed, flagged), the -OSIN SUFFIX frame + the α1A subtype reading of 'except tamsulosin' (not printed), the FIRST-DOSE frame (the bedtime rule — NOT printed, flagged), and the EPINEPHRINE-REVERSAL LINK (the graphs print on book 242 in the sympathomimetics context; the attribution to the nonselective blockers is KYP's bridge). EXCLUDED: the Sympatholytics (α2-agonists) table on the SAME book-243 page ABOVE this block (the COMPLETED PH22 — only its boundary pinned from below; its clonidine/guanfacine agonists are the receptor mirror of this table's mirtazapine row), the β-blockers section on pdf 266 ahead (the PENDING beta-blockers topic; this block does NOT extend there; verified), and the sympathomimetics tail on pdf 264 behind (its α-blockade graphs cited as cross-page anchors only).",
    },
    {
      kind: "table",
      title: "Book 243 — the α-blockers table, verbatim",
      intro:
        "The block's own three-column table, carried whole: the section header above it, the three selectivity group labels, four drug rows with their printed applications and adverse-effect cells. Every cell is the book's own print (the 'Orthostatic hypotension, reflex tachycardia.' adverse cell spans both nonselective rows in the printed table).",
      columns: [
        "DRUG (book 243, verbatim)",
        "APPLICATIONS (book 243, verbatim)",
        "ADVERSE EFFECTS (book 243, verbatim)",
      ],
      rows: [
        [
          "Nonselective — Phenoxybenzamine",
          "Irreversible. Pheochromocytoma (used preoperatively) to prevent catecholamine (hypertensive) crisis.",
          "Orthostatic hypotension, reflex tachycardia. (shared cell — spans both nonselective rows)",
        ],
        [
          "Nonselective — Phentolamine",
          "Reversible. Given to patients on MAO inhibitors who eat tyramine-containing foods and for severe cocaine-induced hypertension (2nd line). Also used to treat norepinephrine extravasation.",
          "Orthostatic hypotension, reflex tachycardia. (shared cell — spans both nonselective rows)",
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
        "Three selectivities, six drugs, one receptor family — the whole block in twelve cells. The nonselective pair leads each applications cell with its binding chemistry ('Irreversible.' / 'Reversible.') and owns the emergency lane: the preoperative pheochromocytoma pretreatment (with its printed rationale — to prevent 'catecholamine (hypertensive) crisis'), the MAOI-tyramine reaction, cocaine-induced hypertension '(2nd line)', and norepinephrine extravasation — with the shared toxicity cell 'Orthostatic hypotension, reflex tachycardia.' spanning both rows. The α1 row prints the book's own naming rule in the DRUG column ('-osin ending') and its two exception clauses in the applications cell ('PTSD (prazosin)', 'except tamsulosin'), with the FIRST-DOSE rule in the toxicity cell. The mirtazapine row parks an antidepressant at the bottom of an autonomic table — the α2 antagonist that releases the brake the clonidine row (the table above on the same page) pulls.",
    },
    {
      kind: "table",
      title: "The cross-page mechanism anchors — the α1 squeeze printed on the completed pages, verbatim",
      intro:
        "The block's table gives the drugs; the mechanism prints on the completed pages this block leans on. Each row is a printed anchor, quoted verbatim with its source page — the assembly into one fork is KYP's.",
      columns: [
        "THE PRINTED ANCHOR (verbatim, with source page)",
        "WHAT IT CARRIES",
      ],
      rows: [
        [
          "'α1' | 'q' | '↑ vascular smooth muscle contraction, ↑ pupillary dilator muscle contraction (mydriasis), ↑ intestinal and bladder sphincter muscle contraction' (book 237, the g-protein-linked-second-messengers table — the completed PH16)",
          "THE COUPLE — α1 rides Gq (the q-family with M1, M3, H1, V1): phospholipase C → IP3/DAG → Ca2+ → contraction. The three printed addresses are the three clinical stories of this block: the vascular line is the antihypertensive effect, the pupillary line is the dilator the blockers leave unopposed (the miosis-adjacent fine print), and the sphincter clause names the bladder address — the α1 blockade the BPH use relaxes.",
        ],
        [
          "'α1' | 'Vascular smooth muscle / Visceral smooth muscle' → 'Vasoconstriction / Smooth muscle contraction' (book 236, the tissue-distribution-of-adrenergic-receptors table — the completed PH15)",
          "THE DISTRIBUTION — the α1 addresses in table form: the first line is the blood-pressure lane (blockade → vasodilation → ↓ peripheral vascular tone), the second is the urology lane (blockade → bladder-neck and prostate relaxation). One receptor, two specialties, one drug class doing both — the reason the -osin row carries hypertension and BPH in the same applications cell.",
        ],
        [
          "'α1-antagonists (eg, tamsulosin)' → 'BPH' + 'bladder, neck, prostate) → ↓ urinary obstruction' (book 236, the micturition-control table — the completed PH14)",
          "THE BLADDER BRIDGE — the ONE drug of the -osin four the completed micturition page names itself: the α1-antagonist row of the bladder table, with the BPH application and the mechanism tail (relaxation of the 'bladder, neck, prostate' smooth muscle → ↓ urinary obstruction). The printed link between this block's 'except tamsulosin' exception and the detrusor/sphincter physiology three pages back — the α2 row of that page's distribution table belongs to the completed PH22 above.",
        ],
        [
          "'Epinephrine response exhibits reversal of mean arterial pressure from a net increase (the α response) to a net decrease (the β2 response).' + 'After α-blockade' + 'Phenylephrine response is suppressed but not reversed because it is a \"pure\" α-agonist (lacks β-agonist properties).' (book 242, the physiologic-effects graphs of the completed sympathomimetics pilot — one page behind)",
          "THE HEMODYNAMIC CONSEQUENCE — the α-blockade graphs in figure form: with α blocked, epinephrine's β2 vasodilation is unopposed and the pressor response REVERSES (the classic 'epinephrine reversal' recognition question for nonselective α-blockade), while the pure α-agonist phenylephrine is only suppressed (no β arm to unoppose). The graphs are the book's own print in the sympathomimetics context; the attribution to phenoxybenzamine/phentolamine is KYP's bridge (flagged — that page never names an α-blocker).",
        ],
        [
          "'Release of norepinephrine from a sympathetic nerve ending is modulated by NE itself, acting on presynaptic α2-autoreceptors → negative feedback.' (book 238, the autonomic-drugs page — the completed PH17)",
          "THE BRAKE — the presynaptic α2 receptor the NONSELECTIVE rows also take (blockade → the brake off → NE release rises → one substrate of the printed 'reflex tachycardia') and the 'α2 selective' row takes ALONE and on purpose (mirtazapine → the brake released → noradrenergic outflow up → the antidepressant direction — the receptor mirror of the clonidine/guanfacine row in the table directly above this one on the same page, the completed PH22).",
        ],
      ],
      caption:
        "The anchors assemble into one story (the assembly is KYP's; every quote is the book's own): α1 is the Gq-coupled squeeze (book 237) at the vascular and visceral smooth-muscle addresses (book 236) — blocking it relaxes vessel and bladder neck (the tamsulosin row of book 236's bladder table is the printed bridge), reverses epinephrine's pressor response (book 242's graphs), and, when the blockade is nonselective, also takes the presynaptic α2 brake (book 238) — the same brake the mirtazapine row blocks alone for the antidepressant direction.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem:
          "A 39-year-old woman has 8 months of episodic pounding headaches, drenching sweats, and palpitations; during episodes her blood pressure reaches 220/128 mmHg. She is found to have a 4.2-cm right adrenal mass; plasma free metanephrines are markedly elevated. Surgical resection is scheduled in three weeks, and the team starts drug pretreatment to prevent an intraoperative catecholamine surge. The pharmacology question asks which drug and which property make it the pretreatment of choice.",
        discriminator:
          "The printed row: 'Nonselective' + 'Phenoxybenzamine' → 'Irreversible. Pheochromocytoma (used preoperatively) to prevent catecholamine (hypertensive) crisis.' — the binding chemistry and the preoperative use in the same cell",
        concept:
          "Pheochromocytoma pretreatment — phenoxybenzamine, the IRREVERSIBLE nonselective α-blocker, started before surgery to prevent the catecholamine (hypertensive) crisis",
        answer:
          "Phenoxybenzamine — the printed 'Irreversible.' cell: it binds the α receptor covalently, so the blockade cannot be surmounted by the tumor's catecholamine surge, and it is 'used preoperatively' exactly 'to prevent catecholamine (hypertensive) crisis' (the book's own rationale). The nonselective coverage matters: the tumor floods both α1 (vasoconstriction → the hypertensive crises) and α2 (the presynaptic brake, book 238) — and the β-receptors (tachyarrhythmias) are blocked only AFTER adequate α-blockade (KYP flag: the α-before-β ordering rule is not printed on this page — a β-blocker first leaves the catecholamine surge acting on unopposed α1 receptors and can precipitate the very crisis the pretreatment prevents). The exam's follow-ups: why irreversible beats reversible for this use (the covalent bond vs phentolamine's competitive, titratable blockade — the crisis drug, not the pretreatment drug), the volume story (chronic vasoconstriction contracts the plasma volume; α-blockade re-expands it — KYP flag: not printed), and the intraoperative tool (phentolamine on hand for a hypertensive surge).",
      },
      {
        stem:
          "A 71-year-old man with hypertension already controlled on amlodipine reports hesitancy, weak stream, nocturia twice nightly, and straining; the prostate is enlarged (55 mL) symmetrically, post-void residual is 120 mL, and prostate cancer is excluded. His physician wants to add a drug for the urinary symptoms without dropping his standing blood pressure, because he nearly fell on the stairs last month. The question asks which α-blocker fits both constraints.",
        discriminator:
          "The printed row: 'α1 selective (-osin ending)' + 'Urinary symptoms of BPH; PTSD (prazosin); hypertension (except tamsulosin).' — the 'except tamsulosin' clause is the printed fingerprint of the blood-pressure-sparing member",
        concept:
          "The BPH sort — tamsulosin, the 'except' member: the -osin that treats urinary symptoms without the hypertension lane (and without a second first-dose hypotension on top of an already-controlled pressure)",
        answer:
          "Tamsulosin — the printed exception clause ('hypertension (except tamsulosin).') is the whole answer: among the '-osin ending' four, tamsulosin is the member whose α1 blockade concentrates at the prostate/bladder-neck address (the micturition page's own row: 'α1-antagonists (eg, tamsulosin)' → relaxation of 'bladder, neck, prostate) → ↓ urinary obstruction' with the application 'BPH', book 236) and spares the vascular address enough that it is left out of the antihypertensive lane (KYP flag: the prostate-selective α1A-subtype affinity story is not printed on this page). The alternatives the stem forecloses: prazosin/terazosin/doxazosin would add a second antihypertensive (and their '1st-dose orthostatic hypotension' to a patient who already nearly fell). The exam's follow-ups: the drug sort the urology chapters run (α1-blockers for the dynamic component and same-day symptom relief vs the 5α-reductase inhibitors for the static component and a shrinking prostate over months), the PTSD lane ('PTSD (prazosin)' — the nightmare-suppression use), and the first-dose rule for the -osins that DO carry the vascular lane.",
      },
      {
        stem:
          "A 62-year-old man on phenelzine for treatment-resistant depression eats aged cheese and cured meat at a party; within two hours he has a thunderclap headache and a blood pressure of 236/118 mmHg. Separately, a hospitalized patient's norepinephrine infusion infiltrates at the IV site — the forearm skin is pale, cool, and mottled. The paired pharmacology questions ask the single drug that answers both emergencies.",
        discriminator:
          "The printed row: 'Phentolamine' → 'Reversible. Given to patients on MAO inhibitors who eat tyramine-containing foods and for severe cocaine-induced hypertension (2nd line). Also used to treat norepinephrine extravasation.' — three emergency uses in one applications cell",
        concept:
          "Phentolamine — the REVERSIBLE nonselective α-blocker of the acute catecholamine emergencies: the MAOI-tyramine reaction, severe cocaine-induced hypertension (2nd line), and norepinephrine extravasation",
        answer:
          "Phentolamine — the printed 'Reversible.' cell: competitive, titratable α1/α2 blockade for the crises that have already started. The MAOI-tyramine story: the cheese reaction floods the synapse with tyramine-derived catecholamines (the 'patients on MAO inhibitors who eat tyramine-containing foods' of the printed cell), and phentolamine blocks the α1 vasoconstriction driving the hypertensive emergency (the alternative the exam sorts: an indirect sympathomimetic is the wrong tool; a direct-acting vasodilator like nitroprusside works but the printed drug is phentolamine). The extravasation story: the infiltrated norepinephrine constricts the local vasculature ('α1-mediated vasoconstriction', book 242's NE line) to ischemia — and local phentolamine infiltration rescues the tissue by blocking exactly that receptor. The '(2nd line)' hedge on the cocaine use is the book's own rank (the first-line agents are the benzodiazepines/vasodilators of the toxicology chapters; the β-blocker question in cocaine chest pain prints one page ahead in the β-blockers section).",
      },
    ],
    traps: [
      {
        a: "In the pheochromocytoma patient, the tachyarrhythmia is the most dangerous finding, so the β-blocker should be started first to control the heart rate before the blood pressure; or both can be started together on the same day",
        b: "Inverting the sequence — the α-blockade must come FIRST (phenoxybenzamine 'used preoperatively'), because a β-blocker before α-blockade leaves the tumor's catecholamine surge acting on UNOPPOSED α1 receptors and can precipitate the hypertensive crisis the pretreatment exists to prevent",
        whyConfused:
          "The cardiology reflex (rate first) is drilled for almost every other tachycardia-hypertension pairing; the tumor secretes both α- and β-acting catecholamines, so 'covering both receptors at once' feels safer; and the ordering rule is NOT printed in the book's cell — the printed text says only 'Pheochromocytoma (used preoperatively) to prevent catecholamine (hypertensive) crisis.'",
        keyDifference:
          "The printed cell carries the pretreatment (phenoxybenzamine) and its purpose (preventing the crisis); the SEQUENCE is physiology: α1 blockade first removes the vasoconstrictor target, then β-blockade controls the reflex and direct tachyarrhythmic effects — never the reverse (unopposed α stimulation). The same logic explains why β-blockers are avoided as monotherapy in cocaine-associated chest pain (the 'unsubstantiated concern for unopposed α-adrenergic stimulation' printed one page ahead in the β-blockers section, book 244). The exam's face: 'which drug before surgery' → phenoxybenzamine; 'why did the patient started on propranolol first deteriorate' → unopposed α1. KYP flag: the ordering rule itself is not printed on this page.",
        clue:
          "Any pheochromocytoma stem asking about pretreatment ORDER (or a distractor offering propranolol first) is the α-before-β rule: irreversible nonselective α-blockade first, β-blockade only after adequate α-blockade — and if only one drug can be chosen, it is phenoxybenzamine, whose 'Irreversible.' binding cannot be surmounted by the surge.",
      },
      {
        a: "The -osin drugs cause the same orthostatic hypotension as any vasodilator, so it is a dose-dependent chronic problem that requires stopping the drug in most patients — or it is indistinguishable from the nonselective blockers' orthostasis",
        b: "Missing the printed '1st-' — '1st-dose orthostatic hypotension, dizziness, headache.' is a FIRST-DOSE phenomenon of the α1-selective family, managed by dose timing rather than drug discontinuation, and it is a DIFFERENT fingerprint from the nonselective 'Orthostatic hypotension, reflex tachycardia.'",
        whyConfused:
          "Both cells contain 'orthostatic hypotension', so the two rows read as one toxicity; the first-dose phenomenon is counterintuitive (tolerance to the orthostasis develops with continued dosing, so the problem fades exactly when experience with other drugs says it should worsen); and the management rule (first dose at bedtime, start low, titrate slow) is NOT printed in the cell",
        keyDifference:
          "The printed cells differ in exactly two tokens: 'reflex tachycardia' (the nonselective signature — the α2 brake also taken, the baroreflex unbraked) vs '1st-dose' + 'dizziness, headache' (the -osin signature — worst at the first dose, especially with prazosin, the most potent of the four, and in volume-depleted or already-antihypertensive patients). The management is the KYP-flagged bedside rule: give the first dose at bedtime so the orthostatic window happens supine, start low, titrate at intervals. The exam's face: 'an hour after his first dose of prazosin, a man stands up in the pharmacy and falls' — the answer is the printed first-dose phenomenon, not an allergy, not a stroke, and not a reason to abandon the class.",
        clue:
          "Any stem pairing the FIRST dose of an -osin (or dose escalation after a gap) with syncope, dizziness, or a fall within the first hours is the printed '1st-dose orthostatic hypotension, dizziness, headache.' cell; the chronic-lane answer is bedtime dosing, and the contrast cell (orthostasis + tachycardia together) belongs to the nonselective rows.",
      },
      {
        a: "All four -osin drugs are antihypertensives that also help the prostate, so any of them is the right answer for either problem — tamsulosin is simply the stronger one for blood pressure, and prazosin is the prostate-selective member",
        b: "Reading across the printed exception clauses — 'hypertension (except tamsulosin)' takes tamsulosin OUT of the antihypertensive lane (it is the prostate/bladder-neck member), and 'PTSD (prazosin)' takes prazosin OUT of the urology-only lane (it owns the nightmare use) — the parentheticals are the exam",
        whyConfused:
          "The suffix rule ('-osin ending') makes the four drugs feel interchangeable; the group label ('α1 selective') promises selectivity that sounds like it should include vascular selectivity; and the exception clauses are tucked inside one applications cell as parentheticals, not printed as separate rows",
        keyDifference:
          "The printed cell does the sorting itself: 'Urinary symptoms of BPH' (all four) — 'PTSD (prazosin)' (one member's psych crossover) — 'hypertension (except tamsulosin)' (one member's exclusion from the BP lane). The physiology behind the exclusion (KYP flag: the α1A-subtype affinity of tamsulosin — prostate-selective, vascular-sparing — is not printed on this page) is anchored by the printed bridge on book 236: 'α1-antagonists (eg, tamsulosin)' → relaxation of 'bladder, neck, prostate) → ↓ urinary obstruction' → 'BPH' — the micturition page names tamsulosin alone, not the other three. The reverse trap is the elderly BPH patient with uncontrolled falls: giving prazosin/terazosin/doxazosin (the BP-lane members) adds a first-dose orthostasis on top; tamsulosin is the sparing choice.",
        clue:
          "Any option-pair that offers tamsulosin and prazosin for the same stem is testing the parentheticals: pure BPH symptoms (or BPH + already-controlled/fragile BP) → tamsulosin; hypertension (± BPH when the BP also needs treating) or PTSD nightmares → prazosin/terazosin/doxazosin; and 'which -osin does NOT treat hypertension' → tamsulosin, by the printed 'except'.",
      },
      {
        a: "Mirtazapine is listed in the α-blockers table, so it must be an antihypertensive (or a BPH drug) like the rows above it; and conversely, phentolamine — also nonselective — should work as an antidepressant the way mirtazapine does",
        b: "Missing the selectivity mirror — the 'α2 selective' row's mirtazapine is an α2 ANTAGONIST aimed at 'Depression.', not a vascular α1 blocker: it releases the presynaptic brake the book prints on book 238, and its adverse set is metabolic ('Sedation, ↑ serum cholesterol, ↑ appetite.'), not hemodynamic",
        whyConfused:
          "All rows sit under the one 'α-blockers' banner on the same page, so 'α-blocker = blood pressure drug' feels safe; the word 'selective' reads as a degree of the same action rather than a different receptor; and the exam's own favorite version of this table (the psychiatry chapters) lists mirtazapine among antidepressants, far from any vasculature",
        keyDifference:
          "The table is sorted by WHICH α receptor is blocked, and the two directions are opposites at the same receptor: the rows above block α1 (vascular/visceral smooth muscle — vasodilation, ↓ urinary obstruction) while mirtazapine blocks the PRESYNAPTIC α2 autoreceptor ('Release of norepinephrine... is modulated by NE itself, acting on presynaptic α2-autoreceptors → negative feedback.', book 238) — the brake released, noradrenergic outflow up, the antidepressant direction. The receptor mirror completes on the same page above: the completed PH22's clonidine/guanfacine STIMULATE the same autoreceptor (sympatholysis — outflow down, BP down), so the two book-243 tables are agonist and antagonist at one receptor. The adverse sets confirm the sort: mirtazapine's 'Sedation, ↑ serum cholesterol, ↑ appetite.' is the metabolic fingerprint the psychiatry chapters recycle (the antidepressant for the patient not sleeping and not eating), not an orthostasis picture.",
        clue:
          "Any stem pairing an α-blocking drug with a psychiatric indication (depression with insomnia and weight loss → mirtazapine; PTSD nightmares → prazosin) is testing the selectivity lanes: depression sits at the α2-antagonist row, nightmares at the prazosin parenthetical — and never give mirtazapine as an antihypertensive or phentolamine as an antidepressant.",
      },
    ],
    pivots: [
      {
        lookAlike: "Any 'which of the following drugs / best treatment' stem that hands you one of the six α-blocker patients — the pheochromocytoma patient awaiting surgery, the MAOI-tyramine or cocaine hypertensive crisis, the norepinephrine extravasation, the hypertensive, the man with BPH symptoms, the veteran with PTSD nightmares, the depressed patient not sleeping or eating — and asks the drug, the receptor, or the selectivity",
        differentiator:
          "The THREE-WAY FORK frame (KYP overlay on the printed group labels): sort the patient to the selectivity — PHEO PRETREATMENT → phenoxybenzamine ('Irreversible.'); ACUTE CRISIS (MAOI-tyramine, cocaine 2nd line, NE extravasation) → phentolamine ('Reversible.'); HYPERTENSION (± BPH) or PTSD → prazosin/terazosin/doxazosin; PURE BPH (spare the BP) → tamsulosin (the 'except' member); DEPRESSION → mirtazapine (the α2-antagonist mirror) — then answer the receptor: α1 = Gq-coupled smooth muscle (book 237), the addresses of book 236's distribution row",
        correctPath:
          "(1) Read the PATIENT, not the drug list: the six lanes are six patients, and the sort is faster than any mechanism recall. (2) Confirm the class signature by the emergency/chronic/psychiatric lane: catecholamine storm → nonselective; chronic BP or prostate → -osin; depression → the α2 mirror. (3) Sort the distractors by their own lanes: the β-blockers (one page ahead — the other sympatholytics, and the α-before-β rule in the pheo patient), the α2 AGONISTS (the table above on the same page — clonidine's hypertension/ADHD/withdrawal lanes, the wrong direction for a storm), the ACE inhibitors/ARBs and CCBs (the chronic-HTN lanes without the α story), and the 5α-reductase inhibitors (the other BPH lane — finasteride, the slow static-component answer). (4) Carry the row's toxicity cell with the drug: nonselective → 'Orthostatic hypotension, reflex tachycardia.'; -osins → '1st-dose orthostatic hypotension, dizziness, headache.'; mirtazapine → the metabolic set. (5) If the stem is a recognition rather than a patient, run the reverse sort: syncope one hour after the first -osin dose → the first-dose rule; epinephrine's pressor response reversed to a depressor one → nonselective α-blockade (book 242's 'After α-blockade' graph); extravasated norepinephrine with pale mottled skin → phentolamine.",
      },
      {
        lookAlike: "Any 'adverse effect / mechanism of the observed effect / next step' stem on a patient who has taken an α-blocker — the man who fainted an hour after his first prazosin dose, the pheo patient pretreated for two weeks who now stands orthostatic before surgery, the depressed patient on mirtazapine who has gained 4 kg and sleeps deeply, the patient whose epinephrine injection (error: for a bee-sting kit) dropped her blood pressure — asking the recognition or the management",
        differentiator:
          "The three toxicity fingerprints of the printed cells: the NONSELECTIVE picture ('Orthostatic hypotension, reflex tachycardia.' — plus the epinephrine-reversal recognition), the FIRST-DOSE picture ('1st-dose orthostatic hypotension, dizziness, headache.' — timing is the tell), and the METABOLIC picture (mirtazapine's 'Sedation, ↑ serum cholesterol, ↑ appetite.' — no hemodynamics at all)",
        correctPath:
          "(1) Establish WHICH selectivity and WHEN: nonselective (pheo/crisis lanes) vs α1-selective (the -osin timing question: how long since the FIRST dose or a dose escalation) vs α2-selective (the psychiatric context). (2) The first-dose picture is timing-diagnosed: within hours of the first -osin dose (worst with prazosin, in the volume-depleted and the elderly) — manage with the KYP-flagged bedside rule (first dose at bedtime, start low, titrate; reassure — tolerance to the orthostasis develops) rather than abandoning the class. (3) The nonselective picture adds the tachycardia (the α2 brake also taken, book 238, plus the baroreflex) and the reversal question: under nonselective blockade, epinephrine's pressor response flips to a depressor one ('After α-blockade', book 242) while a pure α-agonist (phenylephrine, nose sprays) is merely suppressed — the reason inadvertent epinephrine in an α-blocked patient drops the pressure. (4) The metabolic picture is mirtazapine's fingerprint: sedation, cholesterol, appetite — in the depressed cancer or geriatric patient who needs the weight and the sleep, the 'adverse' set is the therapeutic reason the drug was chosen. (5) The reverse traps: orthostasis + tachycardia together points to the NONSELECTIVE rows (not the -osins); the timing clue (first dose) points to the -osins; the weight-gain clue points to the psychiatric row, never to a vasodilator.",
      },
    ],
    miniCase: {
      vignette:
        "A 44-year-old woman has six months of episodic pounding headaches, profuse sweating, and palpitations. During episodes her blood pressure reaches 214/122 mmHg with heart rate 118/min; between episodes she is normotensive but feels drained. She has no family history and takes no medications. Examination in the office today is normal except for a blood pressure of 148/92 mmHg. Laboratory studies show plasma free metanephrines more than four times the upper limit of normal; abdominal MRI shows a 3.8-cm right adrenal mass with high T2 signal. The endocrine surgeon schedules laparoscopic adrenalectomy in three weeks and asks the medical team to prepare her for the operating room. The patient asks why she cannot 'just get a beta-blocker now' for the racing heart she finds most bothersome.",
      question:
        "Which drug should be started for preoperative preparation, what property makes it the pretreatment of choice, and why must the β-blocker she is asking about wait?",
      options: [
        {
          label:
            "Phenoxybenzamine — the nonselective α-blocker that binds IRREVERSIBLY (covalently), started days to weeks before surgery so the tumor's catecholamine surge cannot displace it, exactly as the book prints: 'Irreversible. Pheochromocytoma (used preoperatively) to prevent catecholamine (hypertensive) crisis.' The β-blocker waits because α1 blockade must be established first: a β-blocker before α-blockade leaves the surge acting on unopposed α1 receptors and can precipitate the hypertensive crisis the pretreatment exists to prevent.",
          text: "Phenoxybenzamine (irreversible nonselective α-blockade) first; β-blockade only after adequate α-blockade.",
          correct: true,
          why:
            "Every printed cell points here: 'Nonselective' + 'Phenoxybenzamine' → 'Irreversible. Pheochromocytoma (used preoperatively) to prevent catecholamine (hypertensive) crisis.' The IRREVERSIBLE binding is the property the pretreatment needs: covalent (noncompetitive) occupancy of both α1 and α2 receptors means no catecholamine surge — however large the tumor releases under anesthesia, surgical manipulation, or intubation — can out-compete the blockade (phentolamine's 'Reversible.' competitive blockade is the crisis tool, titratable but surmountable). The nonselective coverage also takes the presynaptic α2 autoreceptor (book 238: 'Release of norepinephrine... presynaptic α2-autoreceptors → negative feedback.') — the brake off raises NE release further, one substrate of the printed 'reflex tachycardia.' The β-blocker sequence (KYP flag: the ordering rule is not printed on this page — it is the physiology of unopposed α stimulation): with α1 receptors still open, β-blockade removes the β2 vasodilatory counterbalance and the reflex tachycardia's ventricular answer while leaving vasoconstriction unopposed — the pressure rises further; therefore α-blockade first (with volume re-expansion as the chronic vasoconstriction relaxes — KYP flag: not printed), β-blockade after, for the tachyarrhythmia she finds so bothersome. Intraoperative surges get phentolamine (the same table's 'Reversible.' row), the printed crisis tool.",
        },
        {
          label:
            "Propranolol now — the tachycardia is the most dangerous finding and rate control comes first in cardiology; the blood pressure will follow once the heart is quiet, and the α-blocker can be added later if the pressure remains high.",
          text: "Propranolol first; add phenoxybenzamine later if needed.",
          why:
            "The sequence-error distractor — the exact trap the stem plants with the patient's own request ('just get a beta-blocker now'). The cardiology reflex (rate first) is drilled for almost every other tachycardia-hypertension pairing, but in catecholamine excess the β-blocker before α-blockade leaves the tumor's epinephrine/norepinephrine acting on UNOPPOSED α1 receptors: vasoconstriction without the β2 counterbalance → the hypertensive crisis the printed cell says the pretreatment exists 'to prevent'. The same unopposed-α logic is why β-blockers are used only cautiously in cocaine-associated chest pain (printed one page ahead in the β-blockers section, book 244). The correct order is the reverse of this option: phenoxybenzamine first, propranolol (or a β1-selective agent) after adequate α-blockade.",
        },
        {
          label:
            "Phentolamine — the nonselective α-blocker that is 'Reversible.', started orally three weeks preoperatively and titrated daily; its titratability makes it the better chronic pretreatment, and because it is also nonselective there is no need for phenoxybenzamine at all.",
          text: "Oral phentolamine titrated over three weeks as the pretreatment.",
          why:
            "The wrong-member distractor: phentolamine IS the printed nonselective α-blocker of the crisis lane — 'Reversible. Given to patients on MAO inhibitors who eat tyramine-containing foods and for severe cocaine-induced hypertension (2nd line). Also used to treat norepinephrine extravasation.' — but its competitive (surmountable) blockade is the property that fits TITRATION, not weeks-long fixed protection: the tumor's surge can out-compete it precisely when it matters (intubation, surgical manipulation). Phentolamine's home is the acute surge — the intraoperative hypertensive crisis rescue — while the 'used preoperatively' pretreatment cell belongs to phenoxybenzamine's 'Irreversible.' row. The distractor tests whether you read the two nonselective rows as interchangeable (same selectivity, same shared toxicity cell) or as two different binding chemistries aimed at two different moments: the storm-proof pretreatment vs the titratable rescue.",
        },
        {
          label:
            "Prazosin — the α1-selective blocker with the first-dose rule; starting it at bedtime three weeks before surgery controls the blood pressure while sparing the presynaptic α2 receptor, and its prostate selectivity makes it the gentlest chronic α-blockade available.",
          text: "Prazosin at bedtime for three weeks; the α1-selective, first-dose-managed option.",
          why:
            "The wrong-selectivity distractor: prazosin is a real α-blocker with a real antihypertensive lane ('hypertension' — though 'except tamsulosin', prazosin is IN that lane) and the printed '1st-dose orthostatic hypotension' cell the bedtime-dose rule manages — but α1-selective blockade is the CHRONIC lane's tool, not the pheo pretreatment: the tumor's surge needs the receptor occupancy that only the irreversible nonselective member guarantees, and the printed 'Pheochromocytoma (used preoperatively)' cell names phenoxybenzamine alone. (The 'prostate selectivity' clause is itself wrong twice over: tamsulosin is the 'except' member for the prostate lane, and no -osin is the pheo drug.) The distractor tests the selectivity fork: chronic lane (HTN/BPH/PTSD) vs emergency lane (pheo/crisis).",
        },
        {
          label:
            "No drug pretreatment — with a laparoscopic approach, modern anesthesia, and phentolamine and esmolol drawn up on the field, preoperative blockade is unnecessary; starting an irreversible agent only guarantees intraoperative hypotension once the tumor is out.",
          text: "No pretreatment; intraoperative phentolamine/esmolol only.",
          why:
            "The dangerous-management distractor: it is true that the tumor vein's ligation swings the hemodynamics toward hypotension once the catecholamine source is gone (and true that over-blockade worsens that swing — the reason the pretreatment is titrated, not maxed) — but the printed cell is unambiguous: phenoxybenzamine is 'used preoperatively) to prevent catecholamine (hypertensive) crisis', and the unprepared patient faces the uncontrolled surge at intubation and tumor manipulation: hypertensive crisis, stroke, and arrhythmia. The on-field rescue agents (phentolamine for surges, esmolol for rate — the β-blocker that comes AFTER α-blockade is established) are the backup, not the plan. The distractor tests whether you know the pretreatment is the standard of care, and why its printed rationale exists.",
        },
      ],
      reasoning:
        "The vignette is the phenoxybenzamine ROW presented as a patient — the episodic triad (headache, sweating, palpitations), the fourfold metanephrines, the T2-bright adrenal mass, and the scheduled adrenalectomy giving the pretreatment its three-week runway; the patient's own question ('why not a beta-blocker now') plants the sequence trap in her voice. (1) THE DIAGNOSIS — the pheochromocytoma stem the endocrine chapters standardize: paroxysmal headache + sweating + palpitations with crisis-level pressures; plasma free metanephrines (the screening test of choice) and the adrenal mass close it. (2) THE DRUG — the printed applications cell: 'Phenoxybenzamine' → 'Irreversible. Pheochromocytoma (used preoperatively) to prevent catecholamine (hypertensive) crisis.' — the nonselective member whose covalent binding cannot be surmounted by any surge. (3) THE PROPERTY — 'Irreversible.' is the first word of the printed cell: noncompetitive, covalent α1+α2 occupancy; the companion member's cell opens with the opposite word ('Phentolamine' → 'Reversible.') and the two first words ARE the clinical sort — the storm-proof pretreatment vs the titratable crisis rescue (the MAOI-tyramine, cocaine-2nd-line, and extravasation uses of phentolamine's cell). (4) THE SEQUENCE — the physiology the exam tests hardest (KYP flag: the ordering is not printed on this page): β-blockade before α-blockade leaves the catecholamine surge acting on unopposed α1 receptors → vasoconstriction unopposed by the β2 counterbalance → the very 'catecholamine (hypertensive) crisis' the printed cell says the pretreatment prevents; so α first (with volume repletion — KYP flag: not printed), β after, for the tachyarrhythmia. (5) THE DISTRACTOR AUTOPSIES — propranolol-first is the sequence error in the patient's own voice; oral phentolamine is the wrong member for the wrong moment (reversible blockade is surmountable by the surge); prazosin is the wrong selectivity (the chronic lane's tool with the first-dose rule, not the pheo drug); and no-pretreatment inverts the risk calculus (the printed rationale for pretreatment outweighs the post-ligation hypotension concern, which over-blockade management — titration, not maximization — addresses). The discriminator to carry: in the α-blockers table the FIRST WORD of each nonselective applications cell ('Irreversible.' / 'Reversible.') is the binding chemistry, and the binding chemistry is the clinical role.",
    },
  },
  mnemonics: [
    {
      code: "PHENOXY = PERMANENT, PHEO FIRST (KYP): PHENOXYbenzamine is PERMANENT (irreversible, covalent — the printed 'Irreversible.') and it goes PHEO-first ('Pheochromocytoma (used preoperatively) to prevent catecholamine (hypertensive) crisis.') — while PHENTOLamine is the TEMPORARY one ('Reversible.') for the storms already blowing: MAOI-tyramine, cocaine hypertension '(2nd line)', and norepinephrine extravasation",
      meaning:
        "The KYP compression of the two nonselective rows: the shared prefix PH- splits into PHENOXY (permanent — covalent binding, unsurmounTable by any catecholamine surge, the preoperative pheochromocytoma drug) and PHENTOL (the titratable rescue — the printed crisis lane). Both cells and the shared toxicity cell ('Orthostatic hypotension, reflex tachycardia.') are the book's own print; the P-frame is KYP's.",
      memorizes: "Which nonselective α-blocker is which — the irreversible pheo pretreatment (phenoxybenzamine) vs the reversible crisis/extravasation drug (phentolamine) — and the shared toxicity cell",
      whenToUse:
        "Any pheochromocytoma pretreatment stem ('which drug before adrenalectomy' → phenoxybenzamine), any acute catecholamine-emergency stem (MAOI-tyramine reaction, severe cocaine-induced hypertension 2nd line, norepinephrine extravasation → phentolamine), and any binding-chemistry question ('which α-blocker binds irreversibly' → phenoxybenzamine, the covalent one).",
      clinical:
        "The P-frame travels with the sequence rule (KYP flag: not printed): α-blockade BEFORE β-blockade in the pheo patient — the permanent member buys the weeks of protected vasculature, the temporary member is drawn up for the intraoperative surge, and the β-blocker joins only after the α-blockade is established (unopposed α1 is the crisis the whole protocol prevents). The shared toxicity cell ('Orthostatic hypotension, reflex tachycardia.') warns both: counsel the pretreated patient to rise slowly.",
    },
    {
      code: "THE -OSIN RULE: EVERY -OSIN OPENS SOMETHING (KYP + the book's own label): the book prints the suffix in the DRUG column — 'α1 selective (-osin ending)' — every -osin (prazOSin, terazOSin, doxazOSin, tamsulOSin) OPENS a squeezed outlet: the arteriole (↓ vascular tone → hypertension) and the bladder neck/prostate (↓ urinary obstruction → BPH). The two printed parentheticals do the fine sort: 'PTSD (prazosin)' and 'hypertension (except tamsulosin).'",
      meaning:
        "The suffix rule is the book's own print ('(-osin ending)' in the DRUG cell); the OPENS reading and the outlet sort are KYP's: one receptor (α1 = Gq, book 237) at two addresses (vascular and visceral smooth muscle, book 236's distribution row) — block it and both outlets open: the vessel (the antihypertensive effect) and the bladder neck (the BPH effect, the micturition page's own 'α1-antagonists (eg, tamsulosin)' row). Tamsulosin's exception clause ('except tamsulosin)' = the outlet it opens best is the prostate's, not the vessel's — KYP flag: the α1A-subtype story is not printed on this page.",
      memorizes: "The α1-selective family by suffix, its two applications (BPH urinary symptoms, hypertension), the two exceptions (prazosin owns PTSD; tamsulosin is out of the HTN lane), and the first-dose toxicity cell",
      whenToUse:
        "Any stem that names a drug ending in -osin (identify the class and receptor: α1-selective blocker, Gq-coupled target), any BPH or hypertension drug-choice question (sort the -osins by the parentheticals), and any 'which -osin spares the blood pressure' or 'which for PTSD nightmares' question (tamsulosin; prazosin).",
      clinical:
        "The rule carries the first-dose warning (the printed '1st-dose orthostatic hypotension, dizziness, headache.' — give the first dose at bedtime, start low, titrate; KYP flag: the bedtime rule is not printed) and the urology sort: the -osins relieve the DYNAMIC obstruction fast (days — smooth-muscle relaxation) while the 5α-reductase inhibitors shrink the STATIC gland slowly (months — the finasteride lane); in the elderly patient with fragile pressures, the except-clause member (tamsulosin) is the one that treats the prostate without re-treating the pressure.",
    },
    {
      code: "FIRST DOSE, FIRST FALL (KYP): the printed cell reads '1st-dose orthostatic hypotension, dizziness, headache.' — the FIRST dose is when the patient FALLS: the -osin family's signature is a first-dose phenomenon (worst with prazosin, the most potent of the four), so the first dose goes to BEDTIME — the orthostatic window spent supine",
      meaning:
        "The KYP frame for the α1-selective toxicity cell: the printed '1st-' token is the entire clinical point — tolerance to the orthostasis develops with continued dosing, so the danger is concentrated at initiation and dose escalation. The bedtime-dose/start-low/titrate-slow management rule is KYP's (flagged: not printed); the cell it manages is the book's own.",
      memorizes: "The -osin adverse-effects cell verbatim, its timing (first dose/escalation), its worst offender (prazosin), and its management (bedtime first dose, low start, slow titration)",
      whenToUse:
        "Any adverse-effect stem timed to the first dose or a dose escalation ('an hour after his first dose, he collapses in the pharmacy aisle'), any patient-risk assessment (the volume-depleted, the elderly, the already-multi-antihypertensive), and any management question (the answer is dose timing and titration — not drug discontinuation, not an allergy workup).",
      clinical:
        "The contrast cell keeps the families straight: the -osins' FIRST-DOSE orthostasis (no tachycardia clause) vs the nonselective rows' 'Orthostatic hypotension, reflex tachycardia.' (the α2 brake also taken — book 238's autoreceptor sentence — plus the baroreflex answer to the vasodilation). Recognize the timing, name the family, adjust the dosing, warn the patient — and re-dose decisions after a long gap restart the first-dose risk.",
    },
    {
      code: "MIRTAZAPINE MUNCHES AND SNOOZES (KYP): the α2-selective row of an α-BLOCKERS table — 'Mirtazapine' → 'Depression.' with 'Sedation, ↑ serum cholesterol, ↑ appetite.' — the brake the book prints on book 238 ('presynaptic α2-autoreceptors → negative feedback.') RELEASED: noradrenergic outflow up (the antidepressant direction), and the adverse set is all MUNCH (↑ appetite, ↑ cholesterol) and SNOOZE (sedation) — the mirror of clonidine's row in the table above on the same page",
      meaning:
        "The KYP compression of the mirtazapine row: an α2 ANTAGONIST (the receptor mirror of the completed PH22's agonists — clonidine pulls the brake, mirtazapine releases it), aimed at 'Depression.', with the metabolic adverse set the psychiatry chapters recycle (the antidepressant for the depressed patient who is not sleeping and not eating — the adverse set is often the reason the drug was chosen). The cells are the book's own print; the munch-and-snooze frame and the mirror reading are KYP's.",
      memorizes: "The mirtazapine row whole (the α2-selective antagonist, the Depression application, the sedation-cholesterol-appetite adverse set) and its receptor direction (blockade → brake released → outflow up)",
      whenToUse:
        "Any psychiatry-pharmacology crossover stem (depression with insomnia and weight loss → mirtazapine; the weight-gaining, sedating antidepressant), any receptor-direction question ('which receptor does mirtazapine block' → the presynaptic α2 autoreceptor), and any same-page mirror question (clonidine vs mirtazapine — agonist vs antagonist at α2, sympatholysis vs antidepressant direction).",
      clinical:
        "The mirror completes the page: book 243's two tables are the two directions at the α2 autoreceptor — clonidine/guanfacine STIMULATE it (outflow down: hypertension, ADHD, withdrawal, spasticity) and mirtazapine BLOCKS it (outflow up: depression). In practice the munch-and-snooze set is therapeutic in the cachectic cancer patient and the geriatric patient with poor intake (KYP flag: the H1/5-HT2 story behind the set is not printed on this page) — and the cholesterol line is the follow-up lab the same stem can ask.",
    },
  ],
  rapidReview: {
    s30: [
      "'α-blockers' — the class-table block, the LOWER portion of book 243 (pdf 265, lines 39-80), under the standing PHARMACOLOGY—AUTONOMIC DRUGS banner; the UPPER portion of the same page is the Sympatholytics (α2-agonists) table (the COMPLETED PH22 — EXCLUDED, boundary pinned from below).",
      "The table frame: three printed column headers — DRUG / APPLICATIONS / ADVERSE EFFECTS — and four drug rows in three selectivity groups ('Nonselective', 'α1 selective (-osin ending)', 'α2 selective').",
      "Row 1, verbatim: 'Nonselective' + 'Phenoxybenzamine' → 'Irreversible. Pheochromocytoma (used preoperatively) to prevent catecholamine (hypertensive) crisis.'",
      "Row 2, verbatim: 'Phentolamine' → 'Reversible. Given to patients on MAO inhibitors who eat tyramine-containing foods and for severe cocaine-induced hypertension (2nd line). Also used to treat norepinephrine extravasation.'",
      "The nonselective adverse-effects cell, verbatim (shared by both rows): 'Orthostatic hypotension, reflex tachycardia.'",
      "Row 3 drugs, verbatim: 'α1 selective (-osin ending)' + 'Prazosin, terazosin, doxazosin, tamsulosin'.",
      "Row 3 applications + adverse effects, verbatim: 'Urinary symptoms of BPH; PTSD (prazosin); hypertension (except tamsulosin).' | '1st-dose orthostatic hypotension, dizziness, headache.'",
      "Row 4, verbatim: 'α2 selective' + 'Mirtazapine' → 'Depression.' | 'Sedation, ↑ serum cholesterol, ↑ appetite.'",
      "The mechanism anchors (printed on the completed pages): 'α1 | q | ↑ vascular smooth muscle contraction, ↑ pupillary dilator muscle contraction (mydriasis), ↑ intestinal and bladder sphincter muscle contraction' (book 237) and 'α1 | Vascular smooth muscle / Visceral smooth muscle → Vasoconstriction / Smooth muscle contraction' (book 236).",
      "The boundaries: pdf 264 behind carries the sympathomimetics tail (including the 'After α-blockade' epinephrine-reversal graphs); pdf 266 ahead opens 'β-blockers' — this block is pdf 265's LOWER portion alone (sourcePages = [265]).",
    ],
    m3: [
      "PHENOXY = PERMANENT, PHEO FIRST (KYP) — phenoxybenzamine 'Irreversible.' (the covalent pheo pretreatment: 'used preoperatively) to prevent catecholamine (hypertensive) crisis'); PHENTOLamine the 'Reversible.' crisis tool (MAOI-tyramine, cocaine 2nd line, NE extravasation); shared cell: 'Orthostatic hypotension, reflex tachycardia.'",
      "THE -OSIN RULE (the suffix is the book's own label) — every -osin OPENS the squeezed outlets (vessel → hypertension; bladder neck/prostate → BPH, the micturition page's own tamsulosin row); parentheticals sort: 'PTSD (prazosin)', 'hypertension (except tamsulosin)'; FIRST DOSE, FIRST FALL — '1st-dose orthostatic hypotension, dizziness, headache.' (bedtime dosing is KYP's, flagged).",
      "MIRTAZAPINE MUNCHES AND SNOOZES (KYP) — the α2-selective ANTAGONIST row: 'Depression.' with 'Sedation, ↑ serum cholesterol, ↑ appetite.' — the book-238 brake released, the mirror of clonidine's row in the table above on the same page.",
    ],
    m10: [
      "The whole block in one breath: one header ('α-blockers'), one three-column table (DRUG/APPLICATIONS/ADVERSE EFFECTS), four rows in three selectivity groups — the nonselective pair (irreversible phenoxybenzamine for pheo pretreatment; reversible phentolamine for the crisis lane), the -osin four (BPH, PTSD for prazosin, hypertension except tamsulosin; the first-dose cell), and the α2 mirror (mirtazapine → Depression).",
      "The mechanism, assembled from printed anchors: α1 rides Gq (book 237: 'α1 | q | ↑ vascular smooth muscle contraction, ↑ pupillary dilator muscle contraction (mydriasis), ↑ intestinal and bladder sphincter muscle contraction') at the distribution addresses (book 236: 'Vascular smooth muscle / Visceral smooth muscle → Vasoconstriction / Smooth muscle contraction') — blockade relaxes vessel (the antihypertensive effect) and bladder neck/prostate (the BPH effect; the micturition page's own 'α1-antagonists (eg, tamsulosin)' → 'bladder, neck, prostate) → ↓ urinary obstruction' → 'BPH').",
      "The binding-chemistry sort of the nonselective pair: 'Irreversible.' (phenoxybenzamine — covalent, noncompetitive, unsurmounTable by the tumor's surge: the preoperative pheochromocytoma pretreatment) vs 'Reversible.' (phentolamine — competitive, titratable: the MAOI-tyramine hypertensive reaction, severe cocaine-induced hypertension '(2nd line)', and norepinephrine extravasation — three emergency uses, one drug).",
      "The pheochromocytoma protocol (the ordering rule is KYP-flagged, not printed on this page): irreversible nonselective α-blockade FIRST (phenoxybenzamine, days to weeks preoperatively, with volume repletion), the β-blocker ONLY after adequate α-blockade (a β-blocker first leaves the surge on unopposed α1 receptors → the very 'catecholamine (hypertensive) crisis' the printed cell says the pretreatment prevents), and phentolamine on hand for intraoperative surges.",
      "The -osin fine sort by the printed parentheticals: 'PTSD (prazosin)' — the nightmare-suppression use is prazosin's alone; 'hypertension (except tamsulosin)' — tamsulosin is out of the BP lane because its blockade concentrates at the prostate/bladder neck (KYP flag: the α1A-subtype story is not printed; the printed bridge is the micturition page's tamsulosin row), the member of choice in the elderly BPH patient with fragile pressures.",
      "The toxicity fingerprints, cell by cell: NONSELECTIVE — 'Orthostatic hypotension, reflex tachycardia.' (the α2 brake also taken — book 238's 'presynaptic α2-autoreceptors → negative feedback.' — plus the baroreflex answer); α1-SELECTIVE — '1st-dose orthostatic hypotension, dizziness, headache.' (a FIRST-dose phenomenon, worst with prazosin; bedtime dosing is KYP's, flagged); α2-SELECTIVE — 'Sedation, ↑ serum cholesterol, ↑ appetite.' (the metabolic set, no hemodynamics).",
      "The epinephrine-reversal story (the graphs are printed on book 242, one page behind, in the sympathomimetics context — the attribution to the nonselective blockers is KYP's bridge): 'After α-blockade', 'Epinephrine response exhibits reversal of mean arterial pressure from a net increase (the α response) to a net decrease (the β2 response).' — the β2 vasodilation unopposed — while 'Phenylephrine response is suppressed but not reversed because it is a \"pure\" α-agonist (lacks β-agonist properties).'",
      "The receptor mirror on the same book-243 page: the table ABOVE (the completed PH22) prints the α2 AGONISTS (clonidine, guanfacine — the brake pulled: outflow down, hypertension/ADHD/withdrawal/spasticity) and THIS table's last row prints the α2 ANTAGONIST (mirtazapine — the brake released: 'Depression.') — one receptor, two directions, two tables, one page; the same mirror explains why the nonselective rows' toxicity includes tachycardia (they take the brake too).",
      "The two management rules to carry: never give the β-blocker before the α-blocker in catecholamine excess (the unopposed-α1 crisis — the same logic printed one page ahead for cocaine chest pain), and never hand the patient a daytime first -osin dose (the first-dose orthostasis — bedtime, low start, slow titration; both rules KYP-flagged where not printed).",
      "What this block does NOT print (census-flagged, never cited as printed): the α1 = Gq row (book 237), the α1 distribution row and the tamsulosin bladder row (book 236), the α-blockade graphs ('After α-blockade' — book 242, printed in the sympathomimetics context; the graph-to-blocker attribution is KYP's), the α2-autoreceptor sentence (book 238), the α-before-β ordering rule, the α1A-subtype reading of 'except tamsulosin', and the bedtime-dose rule (KYP flags) — and every row of the Sympatholytics (α2-agonists) table above on the same page (that table is the COMPLETED PH22's own print; this block does NOT extend to pdf 266, which opens β-blockers).",
    ],
  },
  recall: [
    {
      q: "Recite the α-blockers table whole — all four rows, all three columns, with the three selectivity group labels, verbatim.",
      a:
        "ROW 1: 'Nonselective' + 'Phenoxybenzamine' → 'Irreversible. Pheochromocytoma (used preoperatively) to prevent catecholamine (hypertensive) crisis.' ROW 2: 'Phentolamine' → 'Reversible. Given to patients on MAO inhibitors who eat tyramine-containing foods and for severe cocaine-induced hypertension (2nd line). Also used to treat norepinephrine extravasation.' (shared adverse cell: 'Orthostatic hypotension, reflex tachycardia.'). ROW 3: 'α1 selective (-osin ending)' + 'Prazosin, terazosin, doxazosin, tamsulosin' → 'Urinary symptoms of BPH; PTSD (prazosin); hypertension (except tamsulosin).' | '1st-dose orthostatic hypotension, dizziness, headache.' ROW 4: 'α2 selective' + 'Mirtazapine' → 'Depression.' | 'Sedation, ↑ serum cholesterol, ↑ appetite.' Column headers: DRUG / APPLICATIONS / ADVERSE EFFECTS.",
    },
    {
      q: "State the mechanism of α1 blockade from the printed anchor pages (books 237, 236, 242, 238) — and name the three readings that are NOT printed on this page (KYP-flagged).",
      a:
        "ANCHOR 1 (book 237, second messengers): 'α1' | 'q' | '↑ vascular smooth muscle contraction, ↑ pupillary dilator muscle contraction (mydriasis), ↑ intestinal and bladder sphincter muscle contraction' — α1 = the Gq couple: PLC → IP3/DAG → Ca2+ → contraction; blocking it relaxes the vessel (↓ vascular tone → ↓ BP) and the bladder sphincter (the BPH effect). ANCHOR 2 (book 236, distribution): 'α1' | 'Vascular smooth muscle / Visceral smooth muscle' → 'Vasoconstriction / Smooth muscle contraction' — the two addresses of the same blockade. ANCHOR 3 (book 236, micturition): 'α1-antagonists (eg, tamsulosin)' → 'BPH' + 'bladder, neck, prostate) → ↓ urinary obstruction' — the bladder bridge. ANCHOR 4 (book 242, the graphs): 'After α-blockade' — 'Epinephrine response exhibits reversal of mean arterial pressure from a net increase (the α response) to a net decrease (the β2 response).' and 'Phenylephrine response is suppressed but not reversed because it is a \"pure\" α-agonist (lacks β-agonist properties).' ANCHOR 5 (book 238): the 'presynaptic α2-autoreceptors → negative feedback.' brake — taken by the nonselective rows (reflex tachycardia substrate) and released by mirtazapine (the antidepressant direction). NOT PRINTED on this page (KYP-flagged): the α-before-β pheochromocytoma ordering rule, the α1A-subtype reading of 'except tamsulosin', and the bedtime-dose/first-dose management rule.",
    },
    {
      q: "A patient with a confirmed pheochromocytoma is scheduled for adrenalectomy. Which α-blocker is the preoperative pretreatment, what binding property makes it so, and what is the sequence rule with the β-blocker? Which drug is drawn up for the intraoperative surge?",
      a:
        "PRETREATMENT: phenoxybenzamine — the printed 'Irreversible.' cell: covalent, noncompetitive binding of both α1 and α2 receptors, so the tumor's catecholamine surge (intubation, surgical manipulation) cannot displace the blockade — 'Pheochromocytoma (used preoperatively) to prevent catecholamine (hypertensive) crisis.' (the printed rationale). SEQUENCE (KYP flag: the ordering rule is not printed on this page): α-blockade FIRST, β-blockade only after adequate α-blockade — a β-blocker first leaves the surge acting on UNOPPOSED α1 receptors (vasoconstriction without the β2 counterbalance) and can precipitate the hypertensive crisis; the same unopposed-α logic keeps β-blockers out of cocaine-associated chest pain monotherapy (printed one page ahead, book 244). INTRAOPERATIVE SURGE: phentolamine — the 'Reversible.' member, competitive and titratable, the crisis tool (also the printed drug for the MAOI-tyramine reaction, severe cocaine-induced hypertension 2nd line, and norepinephrine extravasation).",
    },
    {
      q: "Name the four -osin drugs and sort them by the printed parentheticals: which member is excluded from the hypertension lane and why; which member owns the PTSD use; and what is the family's first-dose rule and its management?",
      a:
        "THE FOUR: 'Prazosin, terazosin, doxazosin, tamsulosin' (the book's own suffix label: 'α1 selective (-osin ending)'). THE EXCLUSION: 'hypertension (except tamsulosin).' — tamsulosin is out of the antihypertensive lane because its α1 blockade concentrates at the prostate/bladder-neck address (the printed bridge is the micturition page's own row: 'α1-antagonists (eg, tamsulosin)' → 'BPH' + 'bladder, neck, prostate) → ↓ urinary obstruction'; KYP flag: the α1A-subtype affinity story is not printed on this page) — the member of choice for pure BPH symptoms, especially in the elderly patient with fragile blood pressure. THE PTSD LANE: 'PTSD (prazosin)' — prazosin alone. THE FIRST-DOSE RULE: '1st-dose orthostatic hypotension, dizziness, headache.' — a FIRST-dose phenomenon (worst with prazosin, the most potent of the four; recurs after dose escalation or a long gap), managed by giving the first dose at BEDTIME, starting low, and titrating slowly (KYP flag: the bedtime rule is not printed) — tolerance to the orthostasis develops with continued dosing.",
    },
    {
      q: "State the PH22/PH23 boundary of book 243 from below, the section-extent findings for pdf 264 and pdf 266, and the receptor-mirror relationship between the two same-page tables.",
      a:
        "THE BOUNDARY (pinned from below): pdf 265 (book 243) prints TWO separable sections under the one banner — the 'Sympatholytics (α2-agonists)' block ABOVE (lines 9-37: the COMPLETED PH22 — the header + the three-row clonidine/guanfacine/methyldopa/tizanidine table; EXCLUDED here, only its header and last row 'Tizanidine' → 'Relief of spasticity' pinned as boundary markers) and THIS α-blockers class table BELOW (lines 39-78 + the shared footer, line 80: 'Nonselective' phenoxybenzamine/phentolamine, 'α1 selective (-osin ending)' the -osin four, 'α2 selective' mirtazapine). THE EXTENT: pdf 264 behind carries the sympathomimetics tail (the physiologic-effects graphs, including the 'After α-blockade' epinephrine-reversal and phenylephrine-suppression figures cited as cross-page anchors); pdf 266 ahead opens 'β-blockers' (the PENDING beta-blockers topic — whose carvedilol/labetalol combine α1 and β blockade); sourcePages = [265] only. THE MIRROR: the two tables are the two directions at the presynaptic α2 autoreceptor (book 238: 'Release of norepinephrine from a sympathetic nerve ending is modulated by NE itself, acting on presynaptic α2-autoreceptors → negative feedback.') — the table above prints the AGONISTS (clonidine/guanfacine pull the brake: sympatholysis) and this table's last row prints the ANTAGONIST (mirtazapine releases the brake: 'Depression.'); the nonselective rows also take that brake, one substrate of their printed 'reflex tachycardia.'",
    },
  ],
  related: [
    {
      title: "Sympatholytics: α2 Agonists — the Same-Page Agonist Mirror",
      topicId: "sympatholytics-alpha-2-agonists",
      note:
        "The completed PH22 (book 243, UPPER portion — the table directly above this one on the same printed page): the α2 AGONISTS clonidine/guanfacine (hypertensive urgency, ADHD, Tourette syndrome, opioid withdrawal, with 'rebound hypertension with abrupt cessation'), α-methyldopa (pregnancy hypertension, the Coombs triad), and tizanidine (spasticity). The mirror this block completes: both tables turn on the presynaptic α2 autoreceptor of book 238 ('presynaptic α2-autoreceptors → negative feedback.') — the agonists PULL the brake (sympatholysis: outflow down, BP down) and this block's mirtazapine row RELEASES it (outflow up, the antidepressant direction); the nonselective rows also take that brake (one substrate of their printed 'reflex tachycardia'). The exam's favorite same-page sort: hypertension/ADHD/withdrawal/spasticity → the agonist table above; depression → the antagonist row below; and the two β-direction questions (agonist overdose = the opioid-like picture; antagonist = sedation + appetite) ride the same mirror.",
    },
    {
      title: "Tissue Distribution of Adrenergic Receptors — the α1 Addresses This Block Relaxes",
      topicId: "tissue-distribution-of-adrenergic-receptors",
      note:
        "The completed PH15 (book 236): the receptor-distribution table whose α1 row — 'α1' | 'Vascular smooth muscle / Visceral smooth muscle' → 'Vasoconstriction / Smooth muscle contraction' — puts the two addresses of α1 blockade in table form: the vascular line is the antihypertensive effect (blockade → vasodilation → ↓ peripheral vascular tone) and the visceral line is the urology effect (blockade → bladder-neck and prostate relaxation → ↓ urinary obstruction). The same page's α2 row ('Pancreas / Presynaptic terminals / Salivary glands') belongs to the completed PH22's agonists — the same distribution page serves both same-page tables of book 243. Any 'which receptor does the -osin family block' or 'where does α1 act' question on this block's drugs is answered from that page's print: α1, Gq-coupled (the couple prints on book 237's second-messenger table), at the vascular and visceral smooth-muscle addresses.",
    },
    {
      title: "Micturition Control — the Tamsulosin Row Printed on the Bladder Page",
      topicId: "micturition-control",
      note:
        "The completed PH14 (book 236): the bladder-physiology page whose drug table prints the ONE member of this block's -osin four by name — 'α1-antagonists (eg, tamsulosin)' → relaxation of 'bladder, neck, prostate) → ↓ urinary obstruction' with the application 'BPH' — the printed bridge between this block's 'hypertension (except tamsulosin).' exception clause and the detrusor/sphincter physiology (the α1-receptor label on the internal urethral sphincter's sympathetic input; the M3 detrusor and β3 relaxation rows of the same table are the other autonomic addresses of voiding). The urology sort the exam runs across the two pages: the -osins relax the dynamic component (fast, days — smooth-muscle relaxation at the α1 address) while the 5α-reductase inhibitors shrink the static gland (slow, months); and in the patient with urgency incontinence, the antimuscarinic lane (oxybutynin) — the same page's other rows — is the opposite direction of bladder pharmacology.",
    },
    {
      title: "Autonomic Drugs — the Page That Prints the α2 Brake and the Release Story",
      topicId: "autonomic-drugs",
      note:
        "The completed PH17 (book 238): the autonomic circuitry page whose opening sentence IS the presynaptic half of this block's pharmacology — 'Release of norepinephrine from a sympathetic nerve ending is modulated by NE itself, acting on presynaptic α2-autoreceptors → negative feedback.' — the brake the nonselective rows also take (α1 = α2 blockade: the brake off, NE release up, one substrate of the printed 'reflex tachycardia') and the mirtazapine row releases on purpose (the antidepressant direction). The same page's amphetamine paragraph (NET/VMAT displacement, the NE expulsion) is the release mechanism the brake modulates — the catecholamine-surge story the pheochromocytoma protocol protects against, and the reason the tumor's storm finds its vascular target occupied only under irreversible blockade. The cholinergic/noradrenergic drug-sort tables on that page are the frame this block's table completes on the pharmacology side.",
    },
  ],
  crossLinks: [
    {
      subject: "Endocrinology & Cardiology (the pheochromocytoma lane — the phenoxybenzamine row's application cell and its perioperative protocol)",
      connection:
        "The printed 'Pheochromocytoma (used preoperatively) to prevent catecholamine (hypertensive) crisis.' cell is the pharmacology half of the endocrine stem the exam recycles: the episodic triad (headache, sweating, palpitations) with crisis-level pressures, the plasma free metanephrines (the screening test), the T2-bright adrenal mass (the 10% tumor: 10% bilateral, 10% extra-adrenal/paraganglioma, 10% familial — MEN2/VHL/NF1, 10% malignant), and the surgical preparation this row exists for: irreversible nonselective α-blockade (phenoxybenzamine, days to weeks) with volume repletion, β-blockade only after adequate α-blockade (the unopposed-α1 crisis otherwise — the ordering rule KYP-flagged where not printed), phentolamine drawn up for intraoperative surges, and the post-ligation hypotension swing (catecholamine source gone; the over-blockade concern that keeps the pretreatment titrated, not maxed). The cardiology crossover: the hypertensive-crisis management lane this row shares with the toxicology pages, and the reflex tachycardia of the shared toxicity cell.",
    },
    {
      subject: "Psychiatry (the mirtazapine row and the prazosin parenthetical — the psychiatric passengers in an autonomic table)",
      connection:
        "Two psychiatric lanes print inside this block's table: the 'α2 selective' row — 'Mirtazapine' → 'Depression.' with 'Sedation, ↑ serum cholesterol, ↑ appetite.' — the α2-antagonist antidepressant whose adverse set is often the therapeutic reason for choosing it (the depressed patient with insomnia and poor appetite: the drug that sedates and stimulates appetite; the cancer-geriatric favorite; the cholesterol line is the follow-up lab), read against the same-page agonist mirror (clonidine's row above); and the 'PTSD (prazosin)' parenthetical — the nightmare-suppression use of the α1 blocker in trauma nightmares, the psych-to-pharm crossover the psychiatry chapters carry. The exam's sort: depression with weight loss and insomnia → mirtazapine (munches and snoozes); PTSD nightmares → prazosin; ADHD/tics/withdrawal → the α2 agonists (the table above); and the same-page receptor mirror — agonist vs antagonist at α2 — is the two-table question the page was built to ask.",
    },
    {
      subject: "Urology & Surgery (the BPH lane and the norepinephrine-extravasation rescue — the -osin family's two operating rooms)",
      connection:
        "The printed 'Urinary symptoms of BPH' cell is the pharmacology half of the BPH stem: the hesitancy-weak-stream-nocturia patient with an enlarged prostate, where the -osins relax the dynamic (smooth-muscle) component fast — days — while the 5α-reductase inhibitors (finasteride/dutasteride) shrink the static component over months, and the surgical lane (TURP) follows the failures; the 'except tamsulosin' clause makes tamsulosin the member of choice when the blood pressure must be spared (the elderly, the falls), anchored by the micturition page's own tamsulosin row ('bladder, neck, prostate) → ↓ urinary obstruction'). The second operating room is the printed 'norepinephrine extravasation' use of phentolamine: the infiltrated vasopressor IV constricts local vasculature to ischemia (the α1-mediated vasoconstriction of book 242's NE line), and local phentolamine infiltration rescues the tissue by blocking exactly that receptor — the extravasation-antidote question the exam asks across the vasopressor pages (terbutaline is the β2 answer elsewhere; phentolamine is the α1 answer here).",
    },
    {
      subject: "Toxicology & Emergency Medicine (the crisis lane — MAOI-tyramine, cocaine, and the epinephrine-reversal pharmacology)",
      connection:
        "Three printed emergency uses and one hemodynamic recognition: (1) the MAOI-tyramine reaction — 'Given to patients on MAO inhibitors who eat tyramine-containing foods' — the cheese reaction's hypertensive emergency answered by phentolamine (the α1 blockade the surge needs), with the MAOI pages supplying the tyramine list (aged cheese, cured meat, tap beer) and the serotonin-syndrome contrast; (2) severe cocaine-induced hypertension '(2nd line)' — the book's own rank hedge, with the first-line benzodiazepines/vasodilators and the β-blocker caution one page ahead ('unsubstantiated concern for unopposed α-adrenergic stimulation', book 244) — the same unopposed-α logic as the pheo sequence rule; (3) norepinephrine extravasation — the phentolamine rescue; (4) the epinephrine-reversal recognition — book 242's printed graphs: 'After α-blockade', epinephrine's pressor response REVERSES ('from a net increase (the α response) to a net decrease (the β2 response)') while phenylephrine's is 'suppressed but not reversed' — the pharmacology behind the inadvertent-epinephrine drop in an α-blocked patient and the classic mechanism question the exam pairs with this table's nonselective rows.",
    },
  ],
};
