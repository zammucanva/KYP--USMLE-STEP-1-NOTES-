import type { KypUsMLENote } from "../types";

// Pharmacology — PH-batch 16. Source: pdf 261 / book 239 (FULL page,
// Pharmacology — Autonomic Drugs: Cholinomimetic agents). The page is
// ONE drug table (DRUG / ACTION / APPLICATIONS) with TWO spanning
// shaded subheader rows — "Direct agonists" (bethanechol, carbachol,
// methacholine, pilocarpine) and "Indirect agonists
// (anticholinesterases)" (donepezil/rivastigmine/galantamine,
// neostigmine, pyridostigmine, physostigmine) — plus the
// "Anticholinesterase poisoning" block (muscarinic DUMBBELSS /
// nicotinic / CNS effects with the atropine and pralidoxime reversers)
// and the indd footer. NOTE: edrophonium and echothiophate do NOT
// print on this page and are never quoted or claimed here. Census
// (pdfimages): ZERO raster images on pdf 261 — pure text + table art.
// VLM CONFIRMED this session (two passes, saved to
// staging-ph16/vlm-census.txt): the full-page 120-dpi read confirmed
// the table structure, both spanning subheaders, the poisoning block's
// findings-vs-reversal split, and that the page carries NO figures or
// photographs; ONE documented 200-dpi adjudication pass on the
// pilocarpine row resolved the interleaved text layer — "Potent
// stimulator of sweat, tears, and saliva" sits in the APPLICATIONS
// column, the mnemonic prints "pilow" (the source's own spelling), and
// the ACTION cell breaks "blood-brain" across a line (the text layer
// merges it to "bloodbrain" — a text-layer artifact, not a source
// typo). VERBATIM CARRIES, documented: (1) the text layer INTERLEAVES
// the two spanning subheader labels — "Direct agonists" (part1.txt
// page-261 line 55) and "Indirect agonists (anticholinesterases)"
// (line 57) print AFTER the pilocarpine row; the logical table (per
// the VLM render) places them as spanning shaded rows above each half
// — the m38 convention; (2) the source's OWN mnemonics print IN the
// table cells ("Bethany, call me to activate your bladder."; "You cry,
// drool, and sweat on your 'pilow.'"; "(Dona Riva forgot the gala)";
// "Neo = no blood-brain barrier penetration"; "Pyridostigmine gets
// rid of myasthenia gravis"; "Phreely (freely) crosses blood-brain
// barrier"; physostigmine "phyxes" atropine overdose; DUMBBELSS) —
// carried ATTRIBUTED to First Aid; the four ALL-CAPS KYP mnemonics
// below are original (origin outside-first-aid); (3) the ↑ and →
// glyphs print in the text layer and are kept. Nothing is reproduced:
// the registry visual cholinomimetic-map (CholinomimeticMap in
// visuals/pharm-p16.tsx) is an ORIGINAL KYP diagram built from the
// printed table; the table text is carried verbatim in the note's
// table blocks.

export const cholinomimetics: KypUsMLENote = {
  id: "cholinomimetics",
  title: "Cholinomimetic Agents",
  subtitle:
    "Every cholinomimetic forks once at the top of book 239: DIRECT agonists turn the receptor lock themselves — bethanechol activates bladder smooth muscle, carbachol is a carbon copy of acetylcholine, methacholine stimulates muscarinic receptors in the airway, pilocarpine contracts the ciliary muscle and pupillary sphincter — while INDIRECT agonists (anticholinesterases) jam the shredder: they inhibit AChE so endogenous acetylcholine accumulates (↑ ACh) at every cholinergic synapse, from the Alzheimer cortex (donepezil, rivastigmine, galantamine) to the myasthenic junction (pyridostigmine, neostigmine) to the poisoned synapse itself. Push the indirect lane to its irreversible extreme — organophosphate insecticides in a farmer — and you get DUMBBELSS muscarinic effects, succinylcholine-like neuromuscular blockade, and CNS depression, reversed by atropine plus pralidoxime. And over it all prints the class warning: watch for exacerbation of COPD, asthma, and peptic ulcers in susceptible patients.",
  subject: "Pharmacology",
  system:
    "Section II · High-Yield General Principles — Pharmacology: Autonomic Drugs",
  pilotCategory: "Pharmacology mechanism",
  difficulty: 2,
  readTime: 6,
  sourceRef:
    "First Aid 2026, Part 1 pp. 239–239 (Pharmacology — Autonomic Drugs: Cholinomimetic agents; …)",
  tags: [
    "cholinomimetics",
    "bethanechol",
    "carbachol",
    "methacholine",
    "pilocarpine",
    "direct agonists",
    "anticholinesterases",
    "donepezil",
    "rivastigmine",
    "galantamine",
    "neostigmine",
    "pyridostigmine",
    "physostigmine",
    "acetylcholinesterase",
    "AChE",
    "organophosphates",
    "pralidoxime",
    "DUMBBELSS",
    "urinary retention",
    "glaucoma",
    "myasthenia gravis",
    "Alzheimer disease",
    "autonomic pharmacology",
  ],
  core: {
    what:
      "Cholinomimetic agents mimic acetylcholine signaling through two completely different strategies. DIRECT agonists — bethanechol, carbachol, methacholine, pilocarpine — bind the receptor themselves: bethanechol activates bladder smooth muscle (muscarinic receptors, no nicotinic activity; urinary retention), carbachol is a carbon copy of acetylcholine but resistant to AChE (constricts the pupil; intraoperative miosis induction), methacholine stimulates muscarinic receptors in airway when inhaled (challenge test for diagnosis of asthma), and pilocarpine contracts the ciliary muscle of the eye (open-angle glaucoma) and the pupillary sphincter (closed-angle glaucoma) while acting as a potent stimulator of sweat, tears, and saliva (glaucoma, xerostomia in Sjögren syndrome). INDIRECT agonists (anticholinesterases) never touch the receptor — donepezil, rivastigmine, galantamine, neostigmine, pyridostigmine, and physostigmine inhibit AChE, so the acetylcholine the body already releases accumulates (↑ ACh): 1st line for Alzheimer disease, postoperative and neurogenic ileus and urinary retention, myasthenia gravis, reversal of neuromuscular junction blockade, and the antidote for anticholinergic toxicity. At the irreversible extreme, organophosphates (fenthion, parathion, malathion — insecticides, poisoning usually seen in farmers) phosphorylate AChE and produce the full cholinergic excess: muscarinic DUMBBELSS (Diarrhea, Urination, Miosis, Bronchospasm, Bradycardia, Emesis, Lacrimation, Sweating, Salivation), nicotinic neuromuscular blockade (mechanism similar to succinylcholine), and CNS effects (respiratory depression, lethargy, seizures, coma).",
    why:
      "This page is the agonist engine of autonomic pharmacology — the receptor map (NN, NM, M1–5) is only useful once you know how drugs drive it. The fork decides selectivity: a direct agonist is engineered for its target (bethanechol carries 'no nicotinic activity' printed in its cell), while an indirect agent amplifies whatever acetylcholine is already being released — which is why anticholinesterases help exactly where endogenous cholinergic tone is functional but insufficient (the myasthenic NMJ, the postoperative gut and bladder, the degenerating cholinergic cortex). The esterase relationship decides duration: three of the four direct agents print 'resistant to AChE', so they outlast the synapse's own off-switch. The charge rule decides reach: neostigmine's positive charge keeps it out of the brain ('Neo = no blood-brain barrier penetration'), pyridostigmine does not penetrate the CNS, and uncharged physostigmine 'Phreely (freely) crosses blood-brain barrier' — which is precisely why physostigmine, and only physostigmine, is the antidote for anticholinergic toxicity, where the poison is central. And the poisoning block is the exam's favorite integration: it forces you to sort cholinergic excess by RECEPTOR LAYER, because the two antidotes split along it — atropine is a competitive inhibitor that reverses the muscarinic DUMBBELSS and crosses the BBB to relieve CNS symptoms, while pralidoxime regenerates AChE via dephosphorylation to reverse the nicotinic neuromuscular blockade, but only if given early, and must be coadministered with atropine to prevent transient worsening of symptoms (pralidoxime itself does not readily cross the BBB).",
    keyIdea:
      "Read every cholinomimetic question through four moves. MOVE 1 — FORK: direct or indirect? Does the drug turn the lock itself (a receptor agonist — the four direct agents) or jam the shredder (an AChE inhibitor → ↑ ACh — the anticholinesterases)? MOVE 2 — TARGET: name the organ or receptor layer the agent is built for — bladder (bethanechol), pupil (carbachol), airway (methacholine), eye + glands (pilocarpine) for the direct lane; every cholinergic synapse, scaled by BBB charge, for the indirect lane. MOVE 3 — APPLY: anchor the drug to its printed application — urinary retention; intraoperative miosis; asthma challenge test; glaucoma + xerostomia; Alzheimer (1st line); myasthenia gravis (pyridostigmine long acting, with glycopyrrolate or hyoscyamine to control adverse effects); postoperative ileus/retention and NMJ-blockade reversal (neostigmine); anticholinergic-toxicity antidote (physostigmine). MOVE 4 — ROUTE THE POISONING: when the stem is cholinergic excess, sort the findings by receptor layer — muscarinic (DUMBBELSS) → atropine; nicotinic (NM blockade, succinylcholine-like) → pralidoxime, early, coadministered with atropine; CNS → atropine crosses the BBB, pralidoxime does not readily. And before answering any 'is this drug safe?' question, recite the printed warning: COPD, asthma, peptic ulcer.",
  },
  mechanisms: [
    {
      id: "direct-agonist-lock-map",
      title:
        "The direct lane: the drug IS the key — four engineered muscarinic agonists and their one-organ applications",
      context:
        "The Direct agonists half of the printed table (book 239)",
      flow: {
        nodes: [
          {
            id: "direct",
            label: "DIRECT AGONISTS — the drug binds the receptor itself",
            sublabel:
              "Input — bethanechol, carbachol, methacholine, pilocarpine: they turn the lock without waiting for endogenous ACh, and bethanechol, carbachol, and pilocarpine each print 'resistant to AChE' — the synapse's off-switch cannot end them.",
            variant: "input",
          },
          {
            id: "lock",
            label: "MUSCARINIC RECEPTORS — the direct lane's lock",
            sublabel:
              "Process — bethanechol 'Acts on muscarinic receptors; no nicotinic activity'; methacholine 'Stimulates muscarinic receptors in airway when inhaled'; carbachol is a 'Carbon copy of acetylcholine (but resistant to AChE)'.",
            variant: "process",
          },
          {
            id: "bladder",
            label: "BLADDER — bethanechol",
            sublabel:
              "Target — activates bladder smooth muscle; the source's own mnemonic: 'Bethany, call me to activate your bladder.' → Urinary retention.",
            variant: "target",
          },
          {
            id: "pupil",
            label: "PUPIL — carbachol",
            sublabel:
              "Target — constricts the pupil. Used for intraoperative miosis induction.",
            variant: "target",
          },
          {
            id: "airway",
            label: "AIRWAY — methacholine",
            sublabel:
              "Target — stimulates muscarinic receptors in airway when inhaled → Challenge test for diagnosis of asthma (deliberate, diagnostic bronchoconstriction).",
            variant: "target",
          },
          {
            id: "glands",
            label: "EYE + GLANDS — pilocarpine",
            sublabel:
              "Target — contracts ciliary muscle of eye (open-angle glaucoma) and pupillary sphincter (closed-angle glaucoma); potent stimulator of sweat, tears, and saliva → glaucoma + xerostomia (Sjögren syndrome). 'You cry, drool, and sweat on your pilow.'",
            variant: "target",
          },
          {
            id: "warning",
            label: "THE PRINTED WARNING — cholinergic excess where it is not wanted",
            sublabel:
              "Output — 'Watch for exacerbation of COPD, asthma, and peptic ulcers in susceptible patients': muscarinic agonism bronchoconstricts the obstructed airway and drives gastric acid secretion.",
            variant: "output",
          },
        ],
        edges: [
          { from: "direct", to: "lock", label: "the drug is the key" },
          { from: "lock", to: "bladder", label: "M → bladder smooth muscle" },
          { from: "lock", to: "pupil", label: "M → pupillary constriction" },
          { from: "lock", to: "airway", label: "M → airway smooth muscle" },
          {
            from: "lock",
            to: "glands",
            label: "M → ciliary muscle, sphincter, secretory glands",
          },
          {
            from: "lock",
            to: "warning",
            label: "the same agonism, in susceptible organs",
          },
        ],
      },
    },
    {
      id: "anticholinesterase-shredder-map",
      title:
        "The indirect lane: jam the shredder — AChE inhibition → ↑ ACh, from the reversible clinic to the irreversible farm",
      context:
        "The Indirect agonists (anticholinesterases) half + the Anticholinesterase poisoning block (book 239)",
      flow: {
        nodes: [
          {
            id: "synapse",
            label: "THE CHOLINERGIC SYNAPSE — ACh signals until AChE clears it",
            sublabel:
              "Input — acetylcholine keeps signaling at every cholinergic junction (ganglia, NMJ, end-organs, brain) for exactly as long as acetylcholinesterase allows.",
            variant: "input",
          },
          {
            id: "ache",
            label: "AChE — the synapse's off-switch",
            sublabel:
              "Process — the cleft enzyme that terminates ACh signaling; inhibit it and the ACh the body already releases accumulates (↑ ACh).",
            variant: "process",
          },
          {
            id: "reversible",
            label: "REVERSIBLE — the clinic's anticholinesterases",
            sublabel:
              "Intervention — donepezil, rivastigmine, galantamine (Alzheimer, 1st line); neostigmine (postoperative and neurogenic ileus and urinary retention, myasthenia gravis, reversal of NMJ blockade); pyridostigmine (myasthenia gravis, long acting); physostigmine (antidote for anticholinergic toxicity).",
            variant: "inhibit",
          },
          {
            id: "irreversible",
            label: "IRREVERSIBLE — the organophosphates",
            sublabel:
              "Intervention — fenthion, parathion, malathion: irreversibly inhibit AChE; commonly used as insecticides, poisoning usually seen in farmers.",
            variant: "inhibit",
          },
          {
            id: "upach",
            label: "↑ ACh — floods every cholinergic synapse",
            sublabel:
              "Target — no receptor selectivity at all: the accumulated ACh hits muscarinic, nicotinic, and central receptors together; only the dose and the reversibility decide therapy or poisoning.",
            variant: "target",
          },
          {
            id: "layers",
            label: "THE THREE EFFECT LAYERS of cholinergic excess",
            sublabel:
              "Output — MUSCARINIC: Diarrhea, Urination, Miosis, Bronchospasm, Bradycardia, Emesis, Lacrimation, Sweating, Salivation (DUMBBELSS). NICOTINIC: neuromuscular blockade (mechanism similar to succinylcholine). CNS: respiratory depression, lethargy, seizures, coma.",
            variant: "output",
          },
          {
            id: "antidotes",
            label: "THE ANTIDOTE FORK — split by receptor layer",
            sublabel:
              "Output — ATROPINE: a competitive inhibitor that reverses the muscarinic effects and can cross the BBB to relieve CNS symptoms. PRALIDOXIME: regenerates AChE via dephosphorylation if given early, reversing the nicotinic blockade; must be coadministered with atropine to prevent transient worsening of symptoms; does not readily cross the BBB.",
            variant: "output",
          },
        ],
        edges: [
          { from: "reversible", to: "ache", label: "reversibly inhibit", type: "inhibit" },
          { from: "irreversible", to: "ache", label: "irreversibly inhibit", type: "inhibit" },
          { from: "ache", to: "upach", label: "off-switch blocked → ACh accumulates (↑ ACh)" },
          { from: "upach", to: "layers", label: "muscarinic + nicotinic + CNS together" },
          {
            from: "layers",
            to: "antidotes",
            label: "muscarinic → atropine; the enzyme → pralidoxime (early, with atropine)",
          },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "cholinomimetic-map",
      title: "The direct-vs-indirect fork map (an original KYP diagram)",
      caption:
        "An original KYP diagram of the Cholinomimetic agents page (book 239): a root CHOLINOMIMETIC AGENTS chip carrying the printed warning (COPD, asthma, peptic ulcer) forking into two lanes — LEFT, the DIRECT AGONISTS lane where the drug itself binds the muscarinic lock: bethanechol → bladder (urinary retention), carbachol → pupil (intraoperative miosis), methacholine → airway (asthma challenge test), pilocarpine → eye + glands (glaucoma, xerostomia, sweat/tears/saliva), each card flagging 'resistant to AChE' where the page prints it; RIGHT, the INDIRECT AGONISTS lane where anticholinesterases ⊣ AChE → ↑ ACh: the reversible agents with their applications (Alzheimer trio, neostigmine's postop gut/bladder/NMJ-reversal list, pyridostigmine's long-acting MG with glycopyrrolate/hyoscyamine, physostigmine's anticholinergic-toxicity antidote) plus the BBB charge rule band, forking to the IRREVERSIBLE organophosphate lane (fenthion, parathion, malathion — insecticides, farmers) with the three effect layers (DUMBBELSS muscarinic / succinylcholine-like NM blockade / CNS depression) and the antidote fork — atropine (competitive, muscarinic, crosses BBB) beside pralidoxime with its dephosphorylation reactivation hook ('if given early'; coadminister with atropine; poor BBB).",
      notice:
        "Census (pdfimages): ZERO raster images on pdf 261 — the page is pure text + table art (shaded spanning subheader rows and two-color typography; no figures, no photographs — VLM-confirmed in two passes saved to staging-ph16/vlm-census.txt, including the documented 200-dpi adjudication of the pilocarpine row). The fork layout, lane cards, AChE glyph, effect-layer chips, and antidote band are an ORIGINAL KYP diagram — there is no figure on the source page to reproduce. The table text itself is carried verbatim in the three table blocks below; the mnemonics in quotes are First Aid's own, printed in the table cells (attributed), and the four ALL-CAPS KYP mnemonics in the Memory section are original.",
    },
    {
      kind: "table",
      title:
        "Book 239 — the DIRECT AGONISTS half of the printed table, carried verbatim (printed row order)",
      intro:
        "The source's own DRUG / ACTION / APPLICATIONS table, Direct agonists subheader, exactly as printed — including the source's own in-cell mnemonics (attributed to First Aid) and the source's own spelling 'pilow'.",
      columns: ["DRUG", "ACTION — book 239 (verbatim)", "APPLICATIONS — book 239 (verbatim)"],
      rows: [
        [
          "Bethanechol",
          "Activates bladder smooth muscle; resistant to AChE. Acts on muscarinic receptors; no nicotinic activity. “Bethany, call me to activate your bladder.”",
          "Urinary retention.",
        ],
        [
          "Carbachol",
          "Carbon copy of acetylcholine (but resistant to AChE).",
          "Constricts pupil. Used for intraoperative miosis induction.",
        ],
        [
          "Methacholine",
          "Stimulates muscarinic receptors in airway when inhaled.",
          "Challenge test for diagnosis of asthma.",
        ],
        [
          "Pilocarpine",
          "Contracts ciliary muscle of eye (open-angle glaucoma), pupillary sphincter (closed-angle glaucoma); resistant to AChE, can cross blood-brain barrier. “You cry, drool, and sweat on your ‘pilow.’”",
          "Potent stimulator of sweat, tears, and saliva. Open-angle and closed-angle glaucoma, xerostomia (Sjögren syndrome).",
        ],
      ],
      caption:
        "Text-layer quirks carried and documented: the pilocarpine ACTION cell breaks 'blood-brain' across a printed line, which the pdftotext layer merges to 'bloodbrain' — an extraction artifact, shown here as printed ('blood-brain'); the mnemonic's 'pilow' is the source's own spelling, preserved verbatim; and the two spanning subheader rows ('Direct agonists' above this half, 'Indirect agonists (anticholinesterases)' above the next) print in the text layer between the pilocarpine and donepezil rows — the m38 interleave convention — but sit logically as shaded spanning rows, per the VLM render.",
    },
    {
      kind: "table",
      title:
        "Book 239 — the INDIRECT AGONISTS (anticholinesterases) half, carried verbatim (printed row order)",
      intro:
        "The same printed table under its 'Indirect agonists (anticholinesterases)' spanning subheader — every ACTION prints ↑ ACh, because none of these drugs touches a receptor; each jams AChE instead.",
      columns: ["DRUG", "ACTION — book 239 (verbatim)", "APPLICATIONS — book 239 (verbatim)"],
      rows: [
        [
          "Donepezil, rivastigmine, galantamine",
          "↑ ACh.",
          "1st line for Alzheimer disease (Dona Riva forgot the gala).",
        ],
        [
          "Neostigmine",
          "↑ ACh. Neo = no blood-brain barrier penetration due to positive charge.",
          "Postoperative and neurogenic ileus and urinary retention, myasthenia gravis, reversal of neuromuscular junction blockade (postoperative).",
        ],
        [
          "Pyridostigmine",
          "↑ ACh; ↑ muscle strength. Does not penetrate CNS. Pyridostigmine gets rid of myasthenia gravis.",
          "Myasthenia gravis (long acting). Used with glycopyrrolate or hyoscyamine to control pyridostigmine adverse effects.",
        ],
        [
          "Physostigmine",
          "↑ ACh. Phreely (freely) crosses blood-brain barrier as not charged → CNS.",
          "Antidote for anticholinergic toxicity; physostigmine “phyxes” atropine overdose.",
        ],
      ],
      caption:
        "Edrophonium and echothiophate do NOT print on this page — the printed indirect lane is exactly these four rows; nothing else is quoted or claimed. The stigmine charge rule lives in this half: neostigmine (positive charge → no BBB) and pyridostigmine (does not penetrate CNS) stay peripheral, while uncharged physostigmine crosses into the CNS — the property that makes it the anticholinergic-toxicity antidote.",
    },
    {
      kind: "table",
      title:
        "Book 239 — the ANTICHOLINESTERASE POISONING block, carried verbatim",
      intro:
        "Often due to organophosphates (eg, fenthion, parathion, malathion) that irreversibly inhibit AChE. Organophosphates commonly used as insecticides; poisoning usually seen in farmers. (The printed intro sentence, verbatim — followed by the block's three effect rows.)",
      columns: ["EFFECT LAYER", "PRINTED FINDINGS (verbatim)", "PRINTED REVERSAL (verbatim)"],
      rows: [
        [
          "Muscarinic effects",
          "Diarrhea, Urination, Miosis, Bronchospasm, Bradycardia, Emesis, Lacrimation, Sweating, Salivation.",
          "DUMBBELSS. Reversed by atropine, a competitive inhibitor. Atropine can cross BBB to relieve CNS symptoms.",
        ],
        [
          "Nicotinic effects",
          "Neuromuscular blockade (mechanism similar to succinylcholine).",
          "Reversed by pralidoxime, regenerates AChE via dephosphorylation if given early. Must be coadministered with atropine to prevent transient worsening of symptoms. Pralidoxime does not readily cross BBB.",
        ],
        [
          "CNS effects",
          "Respiratory depression, lethargy, seizures, coma.",
          "(No separate reversal cell prints — the atropine-crosses-BBB line on the muscarinic row is the page's CNS answer.)",
        ],
      ],
      caption:
        "DUMBBELSS is the source's own acronym, printed bold: Diarrhea, Urination, Miosis, Bronchospasm, Bradycardia, Emesis, Lacrimation, Sweating + Salivation — the mnemonic and the letter list are First Aid's, carried attributed. The block's architecture IS the exam answer: sort the poisoning by receptor layer, then split the antidote the same way — atropine for muscarinic (and the CNS, which it reaches), pralidoxime for the enzyme itself (and the nicotinic blockade it causes), always together.",
    },
    {
      kind: "callout",
      variant: "exam",
      title: "The printed class warning — the one line that spans the whole page",
      body:
        "“Watch for exacerbation of COPD, asthma, and peptic ulcers in susceptible patients.” — printed above the table on book 239, and it applies to BOTH lanes: muscarinic agonism (direct drugs, or ↑ ACh from anticholinesterases) bronchoconstricts already-obstructed airways and stimulates gastric acid secretion. Any stem that hands you a COPD, asthmatic, or ulcer patient and asks about a cholinomimetic is handing you the contraindication, not the indication.",
    },
    {
      kind: "compare",
      title: "The two lanes side by side — turn the lock vs jam the shredder",
      intro:
        "The single fork that organizes every drug on the page.",
      columns: ["DIRECT AGONISTS (turn the lock)", "INDIRECT AGONISTS (jam the shredder)"],
      rows: [
        {
          label: "How it mimics ACh",
          a: "The drug itself binds the receptor — an engineered key that does not wait for endogenous transmitter",
          b: "The drug inhibits AChE → the body's own acetylcholine accumulates (↑ ACh) at every cholinergic synapse",
        },
        {
          label: "Members (as printed)",
          a: "Bethanechol · carbachol · methacholine · pilocarpine",
          b: "Donepezil, rivastigmine, galantamine · neostigmine · pyridostigmine · physostigmine (reversible) — vs organophosphates, fenthion/parathion/malathion (irreversible)",
        },
        {
          label: "Relationship to AChE",
          a: "Survives it — bethanechol, carbachol, and pilocarpine each print 'resistant to AChE'",
          b: "Targets it — AChE is the drug's binding site, inhibited reversibly (clinic) or irreversibly (poisoning)",
        },
        {
          label: "Selectivity",
          a: "Organ-built: bladder (bethanechol, no nicotinic activity), pupil (carbachol), airway (methacholine), eye + glands (pilocarpine)",
          b: "None — ↑ ACh hits muscarinic + nicotinic + central receptors together; the BBB charge rule (neo/pyrido charged stay out; physo uncharged crosses) is the only CNS filter",
        },
        {
          label: "Hallmark applications",
          a: "Urinary retention · intraoperative miosis · asthma challenge test · open- and closed-angle glaucoma + xerostomia (Sjögren)",
          b: "Alzheimer disease (1st line) · myasthenia gravis (pyridostigmine long acting, + glycopyrrolate/hyoscyamine) · postoperative and neurogenic ileus + urinary retention · NMJ-blockade reversal · anticholinergic-toxicity antidote (physostigmine)",
        },
        {
          label: "The failure mode",
          a: "Cholinergic excess at the built-for organ — and the printed warning: exacerbation of COPD, asthma, peptic ulcers",
          b: "Organophosphate poisoning: DUMBBELSS + neuromuscular blockade (succinylcholine-like) + CNS effects — reversed by atropine + pralidoxime",
        },
      ],
    },
    {
      kind: "steps",
      title: "Reading any cholinomimetic question in four moves",
      intro:
        "The whole page distilled into an ordered decision path — FORK, TARGET, APPLY, ROUTE.",
      steps: [
        {
          label: "FORK — does the drug turn the lock, or jam the shredder?",
          detail:
            "A drug that binds the receptor itself (bethanechol, carbachol, methacholine, pilocarpine) is DIRECT. A drug whose whole action prints as '↑ ACh' (donepezil/rivastigmine/galantamine, neostigmine, pyridostigmine, physostigmine — or an organophosphate) is INDIRECT: it inhibits AChE and amplifies the body's own transmitter.",
        },
        {
          label: "TARGET — where does the agent act?",
          detail:
            "Direct lane: name the built-for organ — bladder smooth muscle (bethanechol, muscarinic with no nicotinic activity), pupil (carbachol), airway muscarinic receptors (methacholine, when inhaled), ciliary muscle + pupillary sphincter + sweat/tears/saliva glands (pilocarpine). Indirect lane: every cholinergic synapse — filtered only by the charge rule (neostigmine's positive charge and pyridostigmine stay out of the CNS; uncharged physostigmine crosses in).",
        },
        {
          label: "APPLY — anchor the drug to its printed application.",
          detail:
            "Urinary retention → bethanechol. Intraoperative miosis → carbachol. Asthma challenge test → methacholine. Open- and closed-angle glaucoma + xerostomia (Sjögren) → pilocarpine. Alzheimer 1st line → donepezil/rivastigmine/galantamine. Postoperative/neurogenic ileus + urinary retention, myasthenia gravis, NMJ-blockade reversal → neostigmine. Myasthenia gravis, long acting, with glycopyrrolate or hyoscyamine to control adverse effects → pyridostigmine. Anticholinergic toxicity antidote → physostigmine.",
        },
        {
          label: "ROUTE — if the stem is poisoning, sort by receptor layer and route the antidote.",
          detail:
            "Muscarinic excess (DUMBBELSS: Diarrhea, Urination, Miosis, Bronchospasm, Bradycardia, Emesis, Lacrimation, Sweating, Salivation) → atropine, a competitive inhibitor that also crosses the BBB to relieve CNS symptoms. Nicotinic neuromuscular blockade (mechanism similar to succinylcholine) → pralidoxime, which regenerates AChE via dephosphorylation if given early, must be coadministered with atropine to prevent transient worsening, and does not readily cross the BBB. Never answer an anticholinesterase poisoning with another anticholinesterase.",
        },
      ],
    },
    {
      kind: "callout",
      variant: "memory",
      title: "The source's own mnemonics — First Aid, book 239 (carried attributed)",
      body:
        "These print IN the table cells and are First Aid's own, not KYP's: “Bethany, call me to activate your bladder.” (bethanechol → urinary retention); “Carbon copy of acetylcholine” (car- of carbachol); “You cry, drool, and sweat on your ‘pilow.’” (pilocarpine → sweat, tears, saliva); “(Dona Riva forgot the gala)” (DONEpezil, RIVastigmine, GALantamine — 1st line for Alzheimer); “Neo = no blood-brain barrier penetration” (neostigmine's positive charge); “Pyridostigmine gets rid of myasthenia gravis”; “Phreely (freely) crosses blood-brain barrier” (physostigmine, not charged → CNS); physostigmine “phyxes” atropine overdose; and DUMBBELSS itself. The four ALL-CAPS mnemonics in the Memory section below are KYP originals — nothing on the page duplicates them.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 71-year-old man cannot void on the first evening after hip surgery; bladder ultrasound shows 600 mL of urine, and a muscarinic agonist with no nicotinic activity is ordered to restore detrusor contraction.",
        discriminator:
          "Activates bladder smooth muscle; resistant to AChE; 'no nicotinic activity' — the engineered bladder drug",
        concept: "Bethanechol — the direct agonist built for the bladder",
        answer:
          "Bethanechol. It activates bladder smooth muscle and is resistant to AChE, acting on muscarinic receptors with no nicotinic activity — exactly the selectivity postoperative retention needs. Check the printed warning first: watch for exacerbation of COPD, asthma, and peptic ulcers in susceptible patients.",
      },
      {
        stem: "A 24-year-old woman with episodic cough and wheeze but normal baseline spirometry inhales an agent in the pulmonary lab; her FEV₁ falls 20% and she develops audible wheeze, confirming the diagnosis.",
        discriminator:
          "Stimulates muscarinic receptors in airway when inhaled — deliberate bronchoconstriction",
        concept: "Methacholine — the diagnostic airway challenge",
        answer:
          "Methacholine challenge test for diagnosis of asthma: the direct agonist stimulates muscarinic receptors in the airway when inhaled, and a hyperreactive airway bronchoconstricts on cue. It is diagnosis by provocation — the same muscarinic bronchoconstriction that makes COPD and asthma patients the class's printed warning.",
      },
      {
        stem: "A 58-year-old woman with Sjögren syndrome has gritty dry eyes and a dry mouth unresponsive to artificial tears; the drug chosen also lowers her coexisting open-angle intraocular pressure.",
        discriminator:
          "Potent stimulator of sweat, tears, and saliva + contracts the ciliary muscle of the eye (open-angle) and the pupillary sphincter (closed-angle)",
        concept: "Pilocarpine — the gland and eye drug",
        answer:
          "Pilocarpine for xerostomia (Sjögren syndrome) and open- and closed-angle glaucoma: it contracts the ciliary muscle of the eye for open-angle glaucoma and the pupillary sphincter for closed-angle glaucoma, while acting as a potent stimulator of sweat, tears, and saliva — 'You cry, drool, and sweat on your pilow.'",
      },
      {
        stem: "A 69-year-old woman with early Alzheimer disease is started on a first-line oral agent; at follow-up her caregiver reports improved attention, and the prescription notes the drug raises acetylcholine by inhibiting its degradation.",
        discriminator:
          "↑ ACh by AChE inhibition — the (Dona Riva forgot the gala) trio",
        concept: "Donepezil, rivastigmine, galantamine — 1st line for Alzheimer disease",
        answer:
          "The reversible anticholinesterases donepezil, rivastigmine, and galantamine are 1st line for Alzheimer disease: they inhibit AChE → ↑ ACh in the degenerating cholinergic cortex. The source's own memory hook prints in the applications cell: '(Dona Riva forgot the gala).'",
      },
      {
        stem: "A 33-year-old woman with fatigable ptosis and limb weakness is maintained on a long-acting anticholinesterase; her regimen includes glycopyrrolate to control the drug's muscarinic adverse effects.",
        discriminator:
          "↑ ACh; ↑ muscle strength — long acting, does not penetrate the CNS, paired with glycopyrrolate or hyoscyamine",
        concept: "Pyridostigmine — the myasthenia gravis mainstay",
        answer:
          "Pyridostigmine: ↑ ACh; ↑ muscle strength at the myasthenic NMJ, long acting, and it does not penetrate the CNS — with glycopyrrolate or hyoscyamine co-prescribed to control pyridostigmine adverse effects. The source prints the whole logic: 'Pyridostigmine gets rid of myasthenia gravis.'",
      },
      {
        stem: "A 59-year-old farmer arrives diaphoretic and salivating with 2-mm pupils, wheeze, heart rate 38, vomiting, and urinary and fecal incontinence after spraying insecticide without protective gear; he then develops diffuse muscle weakness.",
        discriminator:
          "Irreversible AChE inhibition by organophosphates (eg, fenthion, parathion, malathion) — the full DUMBBELSS plus nicotinic weakness",
        concept: "Anticholinesterase poisoning — the farmer's three effect layers",
        answer:
          "Organophosphate anticholinesterase poisoning: commonly used as insecticides, poisoning usually seen in farmers, irreversibly inhibiting AChE → ↑ ACh at every layer — Diarrhea, Urination, Miosis, Bronchospasm, Bradycardia, Emesis, Lacrimation, Sweating, Salivation (DUMBBELSS), neuromuscular blockade (mechanism similar to succinylcholine), and respiratory depression, lethargy, seizures, coma.",
      },
    ],
    traps: [
      {
        a: "Bethanechol",
        b: "Carbachol",
        whyConfused:
          "Both are direct agonists ending in -chol, and both print 'resistant to AChE'",
        keyDifference:
          "Bethanechol is the bladder drug — activates bladder smooth muscle, muscarinic receptors, no nicotinic activity, urinary retention; carbachol is the pupil drug — a carbon copy of acetylcholine that constricts the pupil for intraoperative miosis induction",
        clue:
          "Urinary retention → bethanechol; intraoperative miosis → carbachol ('car' as in carbon copy)",
      },
      {
        a: "Neostigmine",
        b: "Physostigmine",
        whyConfused:
          "Both are reversible anticholinesterases whose whole action prints '↑ ACh'",
        keyDifference:
          "Charge and reach: neostigmine's positive charge means no blood-brain barrier penetration (peripheral — ileus, retention, myasthenia, NMJ-blockade reversal); physostigmine is not charged, so it 'Phreely (freely) crosses blood-brain barrier' → CNS — the antidote for anticholinergic toxicity, where it 'phyxes' atropine overdose",
        clue:
          "The antidote for an anticholinergic (atropine) overdose must reach the brain — only the uncharged stigmine can",
      },
      {
        a: "Pyridostigmine",
        b: "Neostigmine",
        whyConfused:
          "Both are charged, CNS-excluded stigmines used in myasthenia gravis",
        keyDifference:
          "Pyridostigmine is the long-acting myasthenia mainstay (used with glycopyrrolate or hyoscyamine to control its adverse effects); neostigmine carries the broader list — postoperative and neurogenic ileus and urinary retention, myasthenia gravis, and reversal of neuromuscular junction blockade (postoperative)",
        clue:
          "Chronic myasthenia maintenance → pyridostigmine ('gets rid of myasthenia gravis'); postoperative gut, bladder, and blockade reversal → neostigmine",
      },
      {
        a: "Atropine",
        b: "Pralidoxime",
        whyConfused:
          "Both appear in organophosphate poisoning management, and both must be given",
        keyDifference:
          "Atropine is a competitive inhibitor that reverses the muscarinic DUMBBELSS and can cross the BBB to relieve CNS symptoms; pralidoxime regenerates AChE via dephosphorylation — reversing the nicotinic neuromuscular blockade — only if given early, and it does not readily cross the BBB",
        clue:
          "Sort by layer: glands and smooth muscle (DUMBBELSS) → atropine; the poisoned enzyme and the weak muscles → pralidoxime; always together, because pralidoxime alone can transiently worsen symptoms",
      },
      {
        a: "'Physostigmine — the poisoning antidote'",
        b: "What physostigmine actually antidotes",
        whyConfused:
          "It is printed on this page as an antidote, in a block about anticholinesterase poisoning",
        keyDifference:
          "Physostigmine is the antidote for ANTICHOLINERGIC toxicity (it 'phyxes' atropine overdose) — it is itself an anticholinesterase, so in organophosphate (cholinergic excess) poisoning it would inhibit AChE further and deepen the poisoning",
        clue:
          "Ask which way the synapse is broken: too little cholinergic tone (anticholinergic) → physostigmine; too much (organophosphate) → atropine + pralidoxime",
      },
    ],
    pivots: [
      {
        lookAlike:
          "Any drug name ending in -chol or -stigmine (or a bare '↑ ACh' in an option) — where does it act?",
        differentiator:
          "Run the fork before anything else: -chol agents (bethanechol, carbachol, methacholine, pilocarpine) bind the receptor themselves — organ-built keys; the stigmines and the donepezil trio inhibit AChE so endogenous ACh accumulates — reach set by the BBB charge rule (neo/pyrido charged, out; physo uncharged, in).",
        correctPath:
          "Fork first, then organ: direct → match the built-for organ (bladder, pupil, airway, eye/glands); indirect → match the application (Alzheimer, myasthenia, ileus/retention, NMJ reversal, anticholinergic antidote)",
      },
      {
        lookAlike:
          "A cholinergic-poisoning management question — one antidote or two, and which finding does each reverse?",
        differentiator:
          "The page's three effect layers route everything: muscarinic DUMBBELSS → atropine (competitive; crosses the BBB for CNS symptoms); nicotinic neuromuscular blockade (succinylcholine-like) → pralidoxime (regenerates AChE via dephosphorylation if given early; does not readily cross the BBB); and the coadministration rule — pralidoxime must be given WITH atropine to prevent transient worsening of symptoms.",
        correctPath:
          "Never pick one antidote in isolation: atropine covers muscarinic + CNS, pralidoxime covers the enzyme and the nicotinic weakness, and the pair must be coadministered early",
      },
      {
        lookAlike:
          "A 'which patients are at risk' question attached to a cholinomimetic stem",
        differentiator:
          "The page's one printed warning spans both lanes: 'Watch for exacerbation of COPD, asthma, and peptic ulcers in susceptible patients' — muscarinic agonism bronchoconstricts obstructed airways and stimulates gastric acid secretion, whether the agonism comes from a direct drug or from ↑ ACh.",
        correctPath:
          "Cholinomimetic + COPD/asthma/peptic ulcer in the same stem = the contraindication is the answer, not the indication",
      },
    ],
    miniCase: {
      vignette:
        "A 59-year-old farm worker is brought to the emergency department after two hours of spraying a malathion-based insecticide without a mask or gloves. He is drenched in sweat and streaming tears, drooling and vomiting, with 2-mm pupils, diffuse wheeze, a heart rate of 38/min, blood pressure 86/52 mm Hg, and incontinence of urine and stool. Over the next 30 minutes he develops generalized muscle weakness with shallow respirations, then lethargy. Which of the following is the most appropriate pharmacologic management of this patient's poisoning?",
      question:
        "Choose the management that correctly routes the antidotes through the page's three effect layers — one option is built on the printed coadministration rule.",
      options: [
        {
          label:
            "Atropine plus pralidoxime, given together and early — atropine as a competitive inhibitor for the muscarinic effects, pralidoxime to regenerate AChE and reverse the neuromuscular blockade",
          text: "Two antidotes, split by receptor layer, coadministered.",
          correct: true,
          why:
            "Correct on every printed layer. The organophosphate has irreversibly inhibited AChE, so ACh floods all three layers: the muscarinic DUMBBELSS (his diarrhea, urination, miosis, bronchospasm, bradycardia, emesis, lacrimation, sweating, salivation), the nicotinic neuromuscular blockade (mechanism similar to succinylcholine — his weakness and shallow respirations), and the CNS effects (his lethargy). Atropine, a competitive inhibitor, reverses the muscarinic effects and can cross the BBB to relieve CNS symptoms; pralidoxime regenerates AChE via dephosphorylation — restoring the enzyme itself — but only if given early, and it must be coadministered with atropine to prevent transient worsening of symptoms. Neither drug alone covers all three layers.",
        },
        {
          label:
            "Atropine alone, titrated to the drying of his secretions — a competitive inhibitor that reverses all of his findings, including the generalized weakness",
          text: "One competitive antagonist for the whole syndrome.",
          why:
            "The classic half-answer. Atropine is indeed the competitive inhibitor that reverses the muscarinic DUMBBELSS — secretions, bronchospasm, bradycardia — and it can cross the BBB to relieve CNS symptoms, so it covers two of the three layers. But the neuromuscular blockade is NICOTINIC: competitive muscarinic blockade does nothing for it, and his weakness and shallow respirations would persist untreated. The page pairs atropine with pralidoxime precisely because each covers what the other cannot.",
        },
        {
          label:
            "Pralidoxime alone as a rapid infusion — regenerating AChE addresses the poisoning at its root, so no second drug is needed",
          text: "Fix the enzyme and everything else follows.",
          why:
            "Root-cause reasoning that the page explicitly forbids. Pralidoxime does regenerate AChE via dephosphorylation — but only if given early, and the printed rule is that it 'must be coadministered with atropine to prevent transient worsening of symptoms': before enzyme activity returns, pralidoxime can itself transiently worsen cholinergic findings. Pralidoxime also 'does not readily cross BBB,' leaving his lethargy and CNS depression unopposed. Atropine must be on board first and with it.",
        },
        {
          label:
            "Physostigmine — the printed antidote on this page, since it is the established treatment of toxicity from cholinergic drugs and crosses into the CNS to reach his lethargy",
          text: "Reach for the page's own antidote.",
          why:
            "The mirror-image trap. Physostigmine is the antidote for ANTICHOLINERGIC toxicity — it 'phyxes' atropine overdose — because it is an anticholinesterase that raises ACh where atropine has suppressed it. This patient's problem is the exact opposite: an organophosphate has already irreversibly inhibited his AChE, and his ACh is catastrophically high. Giving another anticholinesterase adds fuel to the flood and deepens the poisoning — muscarinic, nicotinic, and central.",
        },
      ],
      reasoning:
        "The stem is the page's Anticholinesterase poisoning block in the flesh: a farmer, malathion, and every letter of DUMBBELSS plus the nicotinic weakness and CNS depression. Management questions on this block are routed by the three effect layers. The muscarinic layer (DUMBBELSS) and the CNS layer both answer to atropine — a competitive inhibitor that crosses the BBB — but atropine has no nicotinic coverage, which eliminates the atropine-alone option (his paralysis would persist). The nicotinic layer (neuromuscular blockade, mechanism similar to succinylcholine) answers to pralidoxime, which regenerates the poisoned enzyme by dephosphorylation if given early — but the printed coadministration rule (to prevent transient worsening) eliminates pralidoxime alone, and its poor BBB penetration leaves the CNS layer uncovered. The fourth option inverts the page: physostigmine is an antidote for the OPPOSITE toxicity (anticholinergic), and as an anticholinesterase it would worsen organophosphate poisoning. Only atropine plus pralidoxime, together and early, covers all three layers — which is exactly why the page prints them as a pair.",
    },
  },
  mnemonics: [
    {
      code: "TURN THE LOCK OR JAM THE SHREDDER",
      meaning:
        "The page's top fork in one image: AChE is the synapse's shredder, destroying acetylcholine the instant it has done its job. DIRECT agonists TURN THE LOCK — the drug itself is a key that binds the receptor (bethanechol, carbachol, methacholine, pilocarpine; three of the four are even built to survive the shredder, 'resistant to AChE'). INDIRECT agonists JAM THE SHREDDER — they inhibit AChE so the body's own ACh accumulates (↑ ACh): the reversible clinic agents (donepezil/rivastigmine/galantamine, neostigmine, pyridostigmine, physostigmine) and the irreversible organophosphates.",
      memorizes:
        "The direct-vs-indirect classification of every cholinomimetic agent on the page",
      whenToUse:
        "The first second of any cholinomimetic question: does the drug bind the receptor, or block the enzyme that clears the transmitter?",
      clinical:
        "The fork predicts selectivity: direct agents are organ-built keys (bladder, pupil, airway, glands); indirect agents have zero receptor selectivity — they amplify every cholinergic synapse at once, which is therapy at the right dose and DUMBBELSS at the organophosphate extreme.",
    },
    {
      code: "ONE DRUG, ONE ORGAN",
      meaning:
        "The four direct agonists, each anchored to its trademark target: BETHANECHOL → BLADDER (activates bladder smooth muscle; urinary retention; no nicotinic activity). CARBACHOL → PUPIL (carbon copy of acetylcholine; constricts the pupil for intraoperative miosis). METHACHOLINE → AIRWAY (stimulates muscarinic receptors in airway when inhaled; the asthma challenge test). PILOCARPINE → GLANDS + EYE (potent stimulator of sweat, tears, and saliva; contracts ciliary muscle and pupillary sphincter; glaucoma and Sjögren xerostomia).",
      memorizes:
        "Which direct agonist treats which application — the printed table's drug→application pairs",
      whenToUse:
        "Any 'which drug for this indication' (or 'which application for this drug') question on the direct lane",
      clinical:
        "One word of the stem points to one drug: retention → bethanechol; miosis → carbachol; challenge test → methacholine; dry eyes/dry mouth or glaucoma → pilocarpine — and in all four, first check the printed warning (COPD, asthma, peptic ulcer).",
    },
    {
      code: "CHARGED STAYS OUT, UNCHARGED CROSSES IN",
      meaning:
        "The BBB charge rule of the stigmines: NEOstigmine is positively charged — 'no blood-brain barrier penetration due to positive charge' — and PYRIDostigmine 'does not penetrate CNS', so both stay peripheral (gut, bladder, NMJ). PHYSOstigmine is NOT charged — it 'Phreely (freely) crosses blood-brain barrier' — so it alone reaches the brain.",
      memorizes:
        "Which anticholinesterases reach the CNS, and why physostigmine is the central antidote",
      whenToUse:
        "Any question pairing an anticholinesterase with the blood-brain barrier, or asking why physostigmine (and not neostigmine) treats anticholinergic toxicity",
      clinical:
        "The atropine-poisoned brain can only be reached by the uncharged anticholinesterase — physostigmine 'phyxes' atropine overdose because it gets IN; neostigmine and pyridostigmine, stuck outside, are the peripheral tools for ileus, retention, and myasthenia.",
    },
    {
      code: "MUSCARINIC GETS ATROPINE, NICOTINIC GETS PRALIDOXIME",
      meaning:
        "The organophosphate antidote routing, layer by layer: the muscarinic flood — DUMBBELSS (Diarrhea, Urination, Miosis, Bronchospasm, Bradycardia, Emesis, Lacrimation, Sweating, Salivation) — is reversed by ATROPINE, a competitive inhibitor that also crosses the BBB for the CNS symptoms; the nicotinic neuromuscular blockade (mechanism similar to succinylcholine) is reversed by PRALIDOXIME, which regenerates AChE via dephosphorylation IF GIVEN EARLY. And the pairing rule: pralidoxime must be coadministered with atropine to prevent transient worsening; pralidoxime does not readily cross the BBB.",
      memorizes:
        "The two-antidote rule of anticholinesterase poisoning and which findings each reverses",
      whenToUse:
        "Any organophosphate/anticholinesterase-poisoning stem asking for management, or for which finding survives atropine (the nicotinic weakness)",
      clinical:
        "Dry the patient and block the muscarinic flood with atropine, restore the enzyme with early pralidoxime for the paralysis, always together — and expect the muscle weakness, not the secretions, to be the finding atropine alone leaves behind.",
    },
  ],
  rapidReview: {
    s30: [
      "Watch for exacerbation of COPD, asthma, and peptic ulcers in susceptible patients — the page's printed warning over the whole class",
      "Bethanechol: activates bladder smooth muscle; resistant to AChE; muscarinic receptors, no nicotinic activity → urinary retention",
      "Carbachol: carbon copy of acetylcholine (but resistant to AChE) → constricts pupil; intraoperative miosis induction",
      "Methacholine: stimulates muscarinic receptors in airway when inhaled → challenge test for diagnosis of asthma",
      "Pilocarpine: contracts ciliary muscle (open-angle) and pupillary sphincter (closed-angle); potent stimulator of sweat, tears, and saliva → glaucoma, xerostomia (Sjögren)",
      "Donepezil, rivastigmine, galantamine: ↑ ACh → 1st line for Alzheimer disease (Dona Riva forgot the gala)",
      "Neostigmine: ↑ ACh; positive charge → no BBB → postoperative and neurogenic ileus and urinary retention, myasthenia gravis, reversal of NMJ blockade",
      "Pyridostigmine: ↑ ACh; ↑ muscle strength; long acting, no CNS → myasthenia gravis, with glycopyrrolate or hyoscyamine to control adverse effects",
      "Physostigmine: ↑ ACh; uncharged, freely crosses BBB → antidote for anticholinergic toxicity ('phyxes' atropine overdose)",
      "Organophosphates (fenthion, parathion, malathion — insecticides; farmers) irreversibly inhibit AChE → DUMBBELSS + NM blockade (succinylcholine-like) + CNS effects",
      "Atropine (competitive, crosses BBB) reverses muscarinic; pralidoxime regenerates AChE via dephosphorylation if given early, coadministered with atropine, poor BBB",
    ],
    m3: [
      "TURN THE LOCK OR JAM THE SHREDDER — direct agonists bind the receptor; indirect agonists inhibit AChE → ↑ ACh",
      "ONE DRUG, ONE ORGAN — bethanechol-bladder, carbachol-pupil, methacholine-airway, pilocarpine-glands + eye",
      "CHARGED STAYS OUT, UNCHARGED CROSSES IN — neo/pyrido peripheral; physo crosses to the CNS",
      "MUSCARINIC GETS ATROPINE, NICOTINIC GETS PRALIDOXIME — and pralidoxime rides with atropine, early, or it transiently worsens",
    ],
    m10: [
      "The page is ONE table (DRUG / ACTION / APPLICATIONS) with TWO spanning shaded subheaders — 'Direct agonists' and 'Indirect agonists (anticholinesterases)' — plus the separate 'Anticholinesterase poisoning' block and the indd footer; zero rasters (pdfimages), no figures or photographs (VLM-confirmed)",
      "Interleave quirk (the m38 convention): the text layer prints the two spanning subheader labels BETWEEN the pilocarpine and donepezil rows; the logical table places them above each half — adjudicated by VLM render",
      "Verbatim quirks carried: the source's own spelling 'pilow' in the pilocarpine mnemonic; the text layer's 'bloodbrain' merge of the printed line-broken 'blood-brain'; 'SEC TION II' in the header; the ↑ and → glyphs",
      "The source's own mnemonics print IN the cells (Bethany / carbon copy / pilow / Dona Riva / Neo / pyridostigmine-gets-rid / Phreely / phyxes / DUMBBELSS) — carried attributed to First Aid; the four KYP mnemonics are original",
      "Edrophonium and echothiophate do NOT print on book 239 — the printed indirect lane is donepezil/rivastigmine/galantamine, neostigmine, pyridostigmine, physostigmine, plus the organophosphate block",
      "The donepezil trio's entire ACTION cell prints as just '↑ ACh.' — every indirect agent's primary action is the same two words; the differentiators are charge (BBB), reversibility, and application",
      "The poisoning block's reversal column splits exactly along the receptor layers: muscarinic → atropine (competitive, crosses BBB); nicotinic → pralidoxime (regenerates AChE via dephosphorylation, early, coadministered, poor BBB); CNS → covered by atropine's BBB crossing, not by a third drug",
      "Page 261 pdf = book 239, a FULL single page (no shared split in this batch); the footer prints 'FAS1_2026_05-Pharmacology.indd 239 / 12/19/25 8:07 AM'",
    ],
  },
  recall: [
    {
      q: "The bethanechol row, verbatim — action (with the source's own mnemonic) and application.",
      a: "Activates bladder smooth muscle; resistant to AChE. Acts on muscarinic receptors; no nicotinic activity. “Bethany, call me to activate your bladder.” → Urinary retention.",
    },
    {
      q: "The carbachol row, verbatim — why the name, and what is it used for?",
      a: "Carbon copy of acetylcholine (but resistant to AChE). → Constricts pupil. Used for intraoperative miosis induction.",
    },
    {
      q: "The methacholine row, verbatim — mechanism and application.",
      a: "Stimulates muscarinic receptors in airway when inhaled. → Challenge test for diagnosis of asthma.",
    },
    {
      q: "The pilocarpine row, verbatim — both target muscles, both angles of glaucoma, the esterase fact, and the applications.",
      a: "Contracts ciliary muscle of eye (open-angle glaucoma), pupillary sphincter (closed-angle glaucoma); resistant to AChE, can cross blood-brain barrier. → Potent stimulator of sweat, tears, and saliva. Open-angle and closed-angle glaucoma, xerostomia (Sjögren syndrome). (“You cry, drool, and sweat on your ‘pilow.’”)",
    },
    {
      q: "What single printed action do all four indirect agonist rows share, and what distinguishes them?",
      a: "Every ACTION cell begins '↑ ACh' — they inhibit AChE. The differentiators: neostigmine's positive charge (no BBB) vs physostigmine uncharged (crosses); pyridostigmine long acting for myasthenia; the donepezil trio for Alzheimer.",
    },
    {
      q: "Which anticholinesterase is the antidote for anticholinergic toxicity, and why that one?",
      a: "Physostigmine — it 'Phreely (freely) crosses blood-brain barrier as not charged → CNS,' so it reaches the central anticholinergic syndrome; physostigmine “phyxes” atropine overdose.",
    },
    {
      q: "Expand DUMBBELSS — the printed muscarinic findings of anticholinesterase poisoning.",
      a: "Diarrhea, Urination, Miosis, Bronchospasm, Bradycardia, Emesis, Lacrimation, Sweating, Salivation.",
    },
    {
      q: "The printed warning line over the whole cholinomimetic class, verbatim.",
      a: "Watch for exacerbation of COPD, asthma, and peptic ulcers in susceptible patients.",
    },
    {
      q: "The three printed rules of pralidoxime use in organophosphate poisoning.",
      a: "It regenerates AChE via dephosphorylation if given early; it must be coadministered with atropine to prevent transient worsening of symptoms; and it does not readily cross the BBB.",
    },
  ],
  related: [
    {
      title: "Acetylcholine Receptors: Nicotinic & Muscarinic",
      topicId: "acetylcholine-receptors",
      note: "The three locks this page's drugs turn: direct agonists are engineered muscarinic keys (bethanechol prints 'no nicotinic activity'), while the indirect agents' ↑ ACh floods every lock at once — NN ganglia, NM junctions, and M1–5 end-organs — which is why organophosphate poisoning is muscarinic AND nicotinic AND central.",
    },
    {
      title: "Muscarinic Antagonists & Atropine",
      topicId: "muscarinic-antagonists",
      note: "This page's mirror: atropine is the competitive inhibitor that reverses the DUMBBELSS muscarinic effects of anticholinesterase poisoning (and crosses the BBB for the CNS symptoms), while physostigmine is the antidote when atropine itself is the overdose — the two pages are each other's antidote.",
    },
    {
      title: "Autonomic Drugs: Synapse Targets & Overview",
      topicId: "autonomic-drugs-synapse",
      note: "The cholinergic synapse cartoon shows exactly where the indirect lane acts: AChE in the cleft splitting ACh into choline and acetate, with the AChE-inhibitor arrow landing on that enzyme — the shredder this page's anticholinesterases jam.",
    },
    {
      title: "Autonomic Receptors: The Wiring Map",
      topicId: "autonomic-receptors",
      note: "The wiring map explains why ↑ ACh has no selectivity: ACh is the preganglionic transmitter of BOTH divisions, the postganglionic parasympathetic transmitter, and the sweat-gland sympathetic transmitter — inhibit its breakdown and every one of those synapses amplifies at once.",
    },
  ],
  crossLinks: [
    {
      subject: "Ophthalmology (the two angles of glaucoma)",
      connection:
        "Pilocarpine's printed cell encodes the two glaucoma mechanisms: it contracts the ciliary muscle of the eye for OPEN-angle glaucoma (ciliary-muscle pull opens the trabecular meshwork outflow pathway) and the pupillary sphincter for CLOSED-angle glaucoma (constriction pulls the iris out of the angle) — and miosis itself is also why carbachol is used for intraoperative miosis induction. (The outflow mechanics behind the printed parentheticals are the ophthalmology chapter's contribution; the page prints the drug facts.)",
    },
    {
      subject: "Neurology (myasthenia gravis and Alzheimer disease)",
      connection:
        "The indirect lane is neurology's drug shelf: pyridostigmine is the long-acting myasthenia mainstay (↑ ACh; ↑ muscle strength at the antibody-impaired NMJ, with glycopyrrolate or hyoscyamine added to control its muscarinic adverse effects), neostigmine covers myasthenia plus the postoperative gut, bladder, and NMJ-blockade reversal, and donepezil, rivastigmine, and galantamine are 1st line for Alzheimer disease — ↑ ACh in a cortex that is losing its cholinergic neurons.",
    },
    {
      subject: "Toxicology & public health (organophosphate exposure)",
      connection:
        "The poisoning block is a farm-medicine public-health classic: organophosphates (fenthion, parathion, malathion) are commonly used as insecticides and poisoning is usually seen in farmers; irreversible AChE inhibition produces the DUMBBELSS muscarinic syndrome, succinylcholine-like neuromuscular blockade, and respiratory depression–lethargy–seizures–coma, managed with coadministered atropine plus early pralidoxime (dephosphorylation before the enzyme ages; pralidoxime does not readily cross the BBB).",
    },
    {
      subject: "Anesthesiology (the perioperative cholinergic toolkit)",
      connection:
        "Three perioperative facts live on this page: carbachol induces intraoperative miosis; neostigmine reverses postoperative neuromuscular junction blockade (and treats postoperative ileus and urinary retention) without entering the CNS; and succinylcholine is the printed mechanistic comparator for the nicotinic blockade of organophosphate poisoning — the depolarizing blockade the anesthetist induces is the one the organophosphate reproduces.",
    },
  ],
};
