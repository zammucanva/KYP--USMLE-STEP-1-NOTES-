import type { KypUsMLENote } from "../types";

// Pharmacology — PH-batch 10. Source: pdf 257 TOP HALF / book 235
// (Pharmacology — Autonomic Drugs: Acetylcholine receptors — the TOP
// half of a SHARED page; the bottom half, "Pain transmission", is the
// sibling topic pain-transmission, the p196 shared-page convention —
// only the ACh-receptors block's contiguous lines are quoted, stopping
// before the "Pain transmission" heading). The ACh block carries
// exactly TWO printed text blocks, two sentences each: [1] the
// NICOTINIC block — "Nicotinic ACh receptors are ligand-gated channels
// allowing efflux of K+ and influx of Na+ and in some cases Ca2+. Two
// subtypes: NN (found in autonomic ganglia, adrenal medulla) and NM
// (found in neuromuscular junction of skeletal muscle)." — and [2] the
// MUSCARINIC block — "Muscarinic ACh receptors are G-protein–coupled
// receptors that usually act through 2nd messengers. 5 subtypes: M1–5
// found in heart, smooth muscle, brain, exocrine glands, and on sweat
// glands (cholinergic sympathetic)." Census (pdfimages): ZERO raster
// images on page 257 — pure text, two blocks, no figures. The z-ai VLM
// census attempt (ph10-vlm-census.ts) returned 401 TWICE in subagent
// context (missing X-Token header — the same failure mode as ph8/ph9),
// so the census stands on pdfimages + the text layer: nothing but the
// two text blocks prints in the top half, and the indd slug +
// timestamp print at the very foot of the page, AFTER the sibling's
// Pain transmission block. The KYP diagram, the exam layer, and the
// memory layer are original.

export const acetylcholineReceptors: KypUsMLENote = {
  id: "acetylcholine-receptors",
  title: "Acetylcholine Receptors: Nicotinic & Muscarinic",
  subtitle:
    "One transmitter, two receptor machines — the NICOTINIC ligand-gated channel (efflux of K+, influx of Na+ and in some cases Ca2+) vs the MUSCARINIC G-protein–coupled receptor acting through 2nd messengers (book 235). The nicotinic family forks into two subtypes: NN (autonomic ganglia, adrenal medulla) and NM (neuromuscular junction of skeletal muscle). The muscarinic family spreads its 5 subtypes, M1–5, across heart, smooth muscle, brain, exocrine glands, and on sweat glands (cholinergic sympathetic) — the one place a sympathetic fiber ends on a muscarinic receptor. Every cholinergic drug question is really asking which of the three locks — NN, NM, or M1–5 — the drug turns.",
  subject: "Pharmacology",
  system:
    "Section II · High-Yield General Principles — Pharmacology: Autonomic Drugs",
  pilotCategory: "Pharmacology mechanism",
  difficulty: 2,
  readTime: 5,
  sourceRef:
    "First Aid 2026, Part 1 pp. 235–235 (Pharmacology — Autonomic Drugs: Acetylcholine receptors; …)",
  tags: [
    "acetylcholine",
    "acetylcholine receptors",
    "nicotinic receptors",
    "muscarinic receptors",
    "NN receptor",
    "NM receptor",
    "M1-M5",
    "ligand-gated channels",
    "ion channels",
    "G-protein-coupled receptors",
    "GPCR",
    "second messengers",
    "autonomic ganglia",
    "adrenal medulla",
    "neuromuscular junction",
    "skeletal muscle",
    "sweat glands",
    "cholinergic sympathetic",
    "autonomic pharmacology",
    "cholinomimetics",
    "muscarinic antagonists",
    "ganglionic blockers",
    "neuromuscular blockers",
    "parasympathetic",
    "sympathetic",
  ],
  core: {
    what:
      "Acetylcholine signals through two completely different receptor machines. NICOTINIC ACh receptors are ligand-gated channels allowing efflux of K+ and influx of Na+ and in some cases Ca2+ — the receptor itself is the pore, so binding is instantly translated into ion current. Nicotinic receptors come in two subtypes: NN (found in autonomic ganglia, adrenal medulla) and NM (found in neuromuscular junction of skeletal muscle). MUSCARINIC ACh receptors are G-protein–coupled receptors that usually act through 2nd messengers — the receptor is a metabotropic switch that relays the signal through a G protein into an intracellular cascade. Muscarinic receptors come in 5 subtypes: M1–5 found in heart, smooth muscle, brain, exocrine glands, and on sweat glands (cholinergic sympathetic).",
    why:
      "This page is the receptor-side key to the entire autonomic pharmacology chapter. Every preganglionic neuron — sympathetic AND parasympathetic — signals through NN receptors at its ganglion, and the adrenal medulla (a modified ganglion) carries NN too, so a ganglion-blocking drug drops both divisions at once plus adrenal catecholamine release. The NMJ runs on its own nicotinic subtype (NM), which is why neuromuscular blockers paralyze skeletal muscle without abolishing autonomic transmission — and why ganglionic blockers lower blood pressure without paralyzing anyone. The end-organs respond through muscarinic receptors, which is why the atropine-like muscarinic antagonists produce their pattern on exactly the printed M1–5 list. And the list's one parenthetical — sweat glands (cholinergic sympathetic) — is the classic exam exception: a SYMPATHETIC fiber that releases ACh onto a MUSCARINIC receptor, so an anticholinergic patient stops sweating and overheats while everything else adrenergic still runs. The signaling fork matters too: a ligand-gated channel (ionotropic, fast, the current flows through the receptor itself) versus a GPCR (metabotropic, slower, amplified through 2nd messengers) is the difference between a millisecond ganglionic depolarization and a sustained end-organ response.",
    keyIdea:
      "Read every cholinergic receptor question through four moves. MOVE 1 — SORT THE MACHINE: channel or mailbox? Ligand-gated channel with K+ efflux and Na+/sometimes-Ca2+ influx = NICOTINIC; G-protein–coupled receptor acting through 2nd messengers = MUSCARINIC. MOVE 2 — PLACE THE LOCK: the nicotinic family forks into NN (autonomic ganglia + adrenal medulla) and NM (neuromuscular junction of skeletal muscle); the muscarinic family spreads M1–5 across heart, smooth muscle, brain, exocrine glands, and sweat glands (cholinergic sympathetic). MOVE 3 — PREDICT THE BLOCKADE: an NN-selective blocker drops BOTH autonomic divisions and adrenal catecholamine release together but spares skeletal muscle (NM is a different lock); an NM blocker paralyzes the NMJ without touching autonomic ganglia; an M blocker produces the atropine-like end-organ pattern, including the sweat exception (anhidrosis → hyperthermia). MOVE 4 — WATCH THE SWEAT EXCEPTION: the sweat gland is sympathetic wiring with muscarinic reception — never sort cholinergic receptors by division, sort them by receptor class.",
  },
  mechanisms: [
    {
      id: "channel-vs-gpcr-map",
      title:
        "The signaling fork: the nicotinic ion channel vs the muscarinic 2nd-messenger cascade",
      context: "The two printed receptor definitions (book 235)",
      flow: {
        nodes: [
          {
            id: "ach",
            label: "ACETYLCHOLINE — one transmitter",
            sublabel:
              "Input — a single ligand faces two entirely different receptor machines; the RECEPTOR, not the transmitter, decides the signaling style.",
            variant: "input",
          },
          {
            id: "nicotinic",
            label: "NICOTINIC — ligand-gated channel",
            sublabel:
              "The receptor IS the pore: binding opens the channel, allowing efflux of K+ and influx of Na+ and in some cases Ca2+ — the message is the ion current itself, flowing through the receptor.",
            variant: "process",
          },
          {
            id: "muscarinic",
            label: "MUSCARINIC — G-protein–coupled receptor",
            sublabel:
              "The receptor is a switch, not a pore: G-protein–coupled receptors that usually act through 2nd messengers — the message is relayed and amplified inside the cell.",
            variant: "process",
          },
          {
            id: "nicotinic-out",
            label: "Ion current through the receptor itself",
            sublabel:
              "Output — direct, immediate ion flow wherever nicotinic receptors sit: autonomic ganglia (NN), the adrenal medulla (NN), and the neuromuscular junction of skeletal muscle (NM).",
            variant: "output",
          },
          {
            id: "muscarinic-out",
            label: "2nd-messenger cascade inside the cell",
            sublabel:
              "Output — relayed, amplified modulation of the M1–5 end-organs: heart, smooth muscle, brain, exocrine glands, and sweat glands (cholinergic sympathetic).",
            variant: "output",
          },
        ],
        edges: [
          { from: "ach", to: "nicotinic", label: "binds the channel" },
          { from: "ach", to: "muscarinic", label: "binds the GPCR" },
          {
            from: "nicotinic",
            to: "nicotinic-out",
            label: "K+ efflux · Na+ influx · in some cases Ca2+",
          },
          {
            from: "muscarinic",
            to: "muscarinic-out",
            label: "G protein → 2nd messengers",
          },
        ],
      },
    },
    {
      id: "subtype-distribution-map",
      title:
        "The distribution map: NN, NM, and M1–5 — where each of the three locks sits",
      context: "The two subtype sentences (book 235)",
      flow: {
        nodes: [
          {
            id: "locks",
            label: "THE THREE LOCKS — NN · NM · M1–5",
            sublabel:
              "Input — acetylcholine is one key; the body builds three locks, and each lock's LOCATION decides what a drug that blocks it does to the patient.",
            variant: "input",
          },
          {
            id: "nn",
            label: "NN — autonomic ganglia + adrenal medulla",
            sublabel:
              "The neuronal nicotinic subtype: found in autonomic ganglia (sympathetic AND parasympathetic — every preganglionic neuron ends on NN) and in the adrenal medulla, the gland built like a modified ganglion.",
            variant: "target",
          },
          {
            id: "nm",
            label: "NM — neuromuscular junction of skeletal muscle",
            sublabel:
              "The muscle nicotinic subtype: found in the NMJ of skeletal muscle — the somatic system's lock, anatomically separate from the autonomic ganglia.",
            variant: "target",
          },
          {
            id: "m",
            label: "M1–5 — the end-organ muscarinic family",
            sublabel:
              "5 subtypes found in heart, smooth muscle, brain, exocrine glands, and on sweat glands (cholinergic sympathetic) — the effector-organ lock, including the one sympathetic site that listens muscarinically.",
            variant: "target",
          },
          {
            id: "leverage",
            label: "PHARMACOLOGIC LEVERAGE — pick the lock",
            sublabel:
              "Output — block NN and BOTH autonomic divisions fall together (plus adrenal catecholamine release) with skeletal muscle spared; block NM and skeletal muscle is paralyzed without autonomic loss; block M and the atropine-like end-organ pattern appears — including the sweat exception.",
            variant: "output",
          },
        ],
        edges: [
          { from: "locks", to: "nn", label: "the ganglionic lock" },
          { from: "locks", to: "nm", label: "the somatic lock" },
          { from: "locks", to: "m", label: "the end-organ lock" },
          {
            from: "nn",
            to: "leverage",
            label: "both divisions + adrenal fall together",
          },
          {
            from: "nm",
            to: "leverage",
            label: "paralysis without autonomic loss",
          },
          {
            from: "m",
            to: "leverage",
            label: "end-organ pattern + the sweat exception",
          },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "ach-receptor-map",
      title: "The ACh receptor fork map (an original KYP diagram)",
      caption:
        "An original KYP diagram of the acetylcholine receptor fork (book 235): a top ACETYLCHOLINE dispatcher chip feeding two branches — LEFT, the NICOTINIC branch, a ligand-gated channel glyph embedded in a membrane with the K+ EFFLUX arrow leaving the cell and the Na+ INFLUX and IN-SOME-CASES Ca2+ arrows entering, plus the two subtype chips (NN on autonomic ganglia + adrenal medulla; NM on the skeletal-muscle neuromuscular junction); RIGHT, the MUSCARINIC branch, a GPCR glyph crossing the membrane with its G-protein → 2ND-MESSENGERS cascade, plus the five M1–5 location chips (heart, smooth muscle, brain, exocrine glands, sweat glands — the last flagged CHOLINERGIC SYMPATHETIC, the sympathetic fiber that ends on a muscarinic receptor); and a bottom exam-targets band mapping what each receptor class gates: ganglia + adrenal medulla vs the skeletal-muscle NMJ vs the parasympathetic end-organs plus the sympathetic sweat exception.",
      notice:
        "Census (pdfimages): ZERO raster images on pdf 257 — the ACh-receptors half is PURE TEXT, two blocks, no figures; the z-ai VLM census attempt (ph10-vlm-census.ts) returned 401 twice in subagent context (the ph8/ph9 failure mode), so the census stands on pdfimages + the text layer: nothing but the two printed text blocks appears in the top half, and the indd slug + timestamp print at the page foot after the sibling's Pain transmission block. The dispatcher, channel glyph, membrane, ion arrows, GPCR glyph, cascade, subtype chips, location chips, and exam-targets band are an ORIGINAL KYP diagram — there is no figure on the source page to reproduce. The two printed blocks are carried verbatim in the note's table block. The KYP memory layer (the four mnemonics) is original — nothing on the page is a mnemonic.",
    },
    {
      kind: "table",
      title:
        "Book 235 — the two printed blocks, carried verbatim (every printed word)",
      intro:
        "The entire subsection is exactly these two text blocks, two sentences each — the receptor definitions exactly as printed.",
      columns: ["RECEPTOR FAMILY", "THE PRINTED BLOCK — book 235 (verbatim)"],
      rows: [
        [
          "NICOTINIC",
          "Nicotinic ACh receptors are ligand-gated channels allowing efflux of K+ and influx of Na+ and in some cases Ca2+. Two subtypes: NN (found in autonomic ganglia, adrenal medulla) and NM (found in neuromuscular junction of skeletal muscle).",
        ],
        [
          "MUSCARINIC",
          "Muscarinic ACh receptors are G-protein–coupled receptors that usually act through 2nd messengers. 5 subtypes: M1–5 found in heart, smooth muscle, brain, exocrine glands, and on sweat glands (cholinergic sympathetic).",
        ],
      ],
      caption:
        "Two machines, three locks: the nicotinic ligand-gated channel (K+ out; Na+ and sometimes Ca2+ in) with its NN/NM subtype fork, and the muscarinic G-protein–coupled receptor with its 2nd messengers and its M1–5 spread across heart, smooth muscle, brain, exocrine glands, and the cholinergic-sympathetic sweat glands.",
    },
    {
      kind: "steps",
      title: "Reading any cholinergic receptor question in four moves",
      intro:
        "The whole page distilled into an ordered decision path — SPOT, SORT, PLACE, PREDICT.",
      steps: [
        {
          label: "SPOT — is the question about acetylcholine signaling?",
          detail:
            "A stem that names acetylcholine, a cholinergic drug, or a cholinergic synapse lands you on this fork — and the receptor, not the transmitter, decides everything downstream.",
        },
        {
          label: "SORT — channel or mailbox?",
          detail:
            "Ligand-gated channel allowing efflux of K+ and influx of Na+ and in some cases Ca2+ = NICOTINIC (the message is the ion current, through the receptor itself). G-protein–coupled receptor acting through 2nd messengers = MUSCARINIC (the message is relayed and amplified inside the cell).",
        },
        {
          label: "PLACE — which of the three locks?",
          detail:
            "NN sits in autonomic ganglia and the adrenal medulla; NM sits in the neuromuscular junction of skeletal muscle; M1–5 sit on the end-organs — heart, smooth muscle, brain, exocrine glands, and sweat glands (cholinergic sympathetic).",
        },
        {
          label: "PREDICT — what does blocking or stimulating that lock do?",
          detail:
            "NN blockade drops both autonomic divisions at once plus adrenal catecholamine release (skeletal muscle spared — NM is a different lock); NM blockade paralyzes skeletal muscle without autonomic loss; M blockade gives the atropine-like end-organ pattern, with the sweat exception first: anhidrosis, then hyperthermia.",
        },
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "In an electrophysiology experiment, acetylcholine applied to a sympathetic ganglion neuron produces a rapid inward current that is abolished by a nicotinic antagonist and unaffected by a muscarinic antagonist; no intracellular second messenger is involved.",
        discriminator:
          "A response mediated by ion flowing through the receptor itself = a ligand-gated channel = NICOTINIC",
        concept: "The nicotinic machine (channel, not cascade)",
        answer:
          "Nicotinic ACh receptors are ligand-gated channels allowing efflux of K+ and influx of Na+ and in some cases Ca2+. The receptor is the pore: acetylcholine binding opens the channel and the current flows through the receptor protein itself — which is why the response is rapid and needs no G protein or 2nd messenger, and why a nicotinic antagonist abolishes it instantly.",
      },
      {
        stem: "A research volunteer chews nicotine gum; measured plasma catecholamines rise as chromaffin cells of the adrenal medulla release epinephrine and norepinephrine into the blood.",
        discriminator:
          "The adrenal medulla carries the NN subtype — the same nicotinic lock as the autonomic ganglia",
        concept: "NN in the adrenal medulla (the gland that is a ganglion)",
        answer:
          "Of the two nicotinic subtypes, NN is found in autonomic ganglia AND the adrenal medulla. The adrenal medulla is modified ganglion tissue: its chromaffin cells are innervated directly by preganglionic sympathetic fibers, whose acetylcholine acts on NN receptors to trigger catecholamine release — so a nicotinic agonist and a ganglionic blocker both reach the adrenal through the same lock.",
      },
      {
        stem: "A 24-year-old woman treated with a muscarinic-blocking anticholinergic agent for motion sickness develops dry, flushed skin and becomes overheated during a summer hike; sweating is absent despite exertion.",
        discriminator:
          "Sweat glands are CHOLINERGIC SYMPATHETIC — a sympathetic fiber ending on a muscarinic receptor",
        concept: "The sweat-gland exception (muscarinic on a sympathetic path)",
        answer:
          "The printed M1–5 list ends with 'and on sweat glands (cholinergic sympathetic)' — the one site where a SYMPATHETIC postganglionic fiber releases acetylcholine onto a MUSCARINIC receptor. A muscarinic antagonist therefore blocks thermoregulatory sweating (anhidrosis), and the overheated, flushed, dry patient is the classic anticholinergic presentation.",
      },
      {
        stem: "A patient receiving a nondepolarizing neuromuscular blocking agent before surgery develops flaccid paralysis of skeletal muscle; intraoperative autonomic reflexes and blood pressure responsiveness are preserved at selective doses.",
        discriminator:
          "Skeletal-muscle paralysis without ganglionic blockade = the NM subtype is a different lock from NN",
        concept: "NM at the neuromuscular junction (somatic, not autonomic)",
        answer:
          "NM is found in the neuromuscular junction of skeletal muscle — anatomically and pharmacologically distinct from the NN receptors of the autonomic ganglia and adrenal medulla. A drug selective for NM abolishes somatic neuromuscular transmission (flaccid paralysis) while leaving NN-mediated autonomic ganglionic transmission — and the whole M1–5 end-organ apparatus — available.",
      },
    ],
    traps: [
      {
        a: "NN (neuronal nicotinic)",
        b: "NM (muscle nicotinic)",
        whyConfused:
          "Both are nicotinic ligand-gated channels binding the same transmitter",
        keyDifference:
          "NN is found in autonomic ganglia and the adrenal medulla (the autonomic locks); NM is found in the neuromuscular junction of skeletal muscle (the somatic lock)",
        clue:
          "Paralysis of skeletal muscle = NM; loss of ganglionic/autonomic transmission or adrenal catecholamine release = NN",
      },
      {
        a: "Nicotinic (ligand-gated channel)",
        b: "Muscarinic (G-protein–coupled receptor)",
        whyConfused:
          "Both receptor families bind the same acetylcholine molecule",
        keyDifference:
          "Nicotinic receptors ARE channels — efflux of K+ and influx of Na+ and in some cases Ca2+ flow through the receptor itself; muscarinic receptors are G-protein–coupled receptors that usually act through 2nd messengers",
        clue:
          "Ion current through the receptor or a millisecond response = nicotinic; G protein, 2nd messenger, or an amplified slower response = muscarinic",
      },
      {
        a: "'Sweat glands are sympathetic, so they must be adrenergic'",
        b: "The printed exception — sweat glands (cholinergic sympathetic)",
        whyConfused:
          "The sweat gland sits on the sympathetic side of the autonomic wiring diagram",
        keyDifference:
          "The fiber is sympathetic but cholinergic: the M1–5 list explicitly includes sweat glands with the parenthetical '(cholinergic sympathetic)' — the receptor on the gland is MUSCARINIC, so muscarinic drugs, not adrenergic drugs, control sweating",
        clue:
          "A sympathetic organ that responds to muscarinic blockade with anhidrosis (or to muscarinic agonists with sweating) is the sweat gland — the classic exception",
      },
      {
        a: "The adrenal medulla as a hormonal 'end-organ' with muscarinic receptors",
        b: "The adrenal medulla as a modified ganglion with NN receptors",
        whyConfused:
          "It releases hormones into the blood, so it is filed with the end-organs",
        keyDifference:
          "The adrenal medulla is innervated by preganglionic sympathetic fibers and carries the NN subtype — it is printed in the NICOTINIC block, not in the muscarinic M1–5 list",
        clue:
          "Catecholamine release from the adrenal medulla is driven by nicotinic (NN) transmission — which is why a ganglionic blocker also blocks the adrenal response",
      },
    ],
    pivots: [
      {
        lookAlike:
          "Any question that names acetylcholine or a cholinergic drug — where does the drug act?",
        differentiator:
          "First sort the MACHINE (ligand-gated channel with K+ efflux and Na+/sometimes-Ca2+ influx = nicotinic; GPCR with 2nd messengers = muscarinic), then PLACE the subtype (NN = ganglia + adrenal medulla; NM = skeletal-muscle NMJ; M1–5 = heart, smooth muscle, brain, exocrine glands, sweat glands). The receptor class and location — never the transmitter — determine the drug's reach.",
        correctPath:
          "Machine first, lock second: identify the receptor class from the signaling style, then match the subtype to its printed location to predict exactly what the drug does",
      },
      {
        lookAlike:
          "A 'what still works after ganglionic blockade' question — adrenal medulla vs NMJ vs sweat gland",
        differentiator:
          "Route by the three locks: an NN-selective blocker abolishes transmission at autonomic ganglia AND adrenal medulla catecholamine release; the NMJ is SPARED (NM is a different lock — the patient is not paralyzed); the M1–5 receptors on the end-organs are intact but their autonomic DRIVE is interrupted at the ganglion — so a DIRECT muscarinic agonist still works on the end-organ while a neurally mediated autonomic reflex does not. The sweat gland's muscarinic receptor is intact too, but its thermoregulatory drive requires ganglionic transmission.",
        correctPath:
          "Ask which lock the drug blocks (NN, NM, or M), then ask whether the target in the option sits BEFORE that lock (spared), AT that lock (blocked), or BEYOND it (receptor intact, drive interrupted)",
      },
      {
        lookAlike:
          "A sympathetic-vs-parasympathetic receptor question — sorting receptors by division",
        differentiator:
          "Do NOT sort cholinergic receptors by autonomic division: every preganglionic neuron, sympathetic and parasympathetic alike, signals through NN at the ganglion, and the sweat gland — a sympathetic target — listens through a muscarinic receptor. Sort by RECEPTOR CLASS and LOCATION instead: nicotinic NN at ganglia + adrenal, nicotinic NM at the NMJ, muscarinic M1–5 at the end-organs including the cholinergic-sympathetic sweat glands.",
        correctPath:
          "Class and location first; division second — and when division and receptor class disagree (the sweat gland), the receptor class wins",
      },
    ],
    miniCase: {
      vignette:
        "A 58-year-old man with a hypertensive emergency is admitted to the ICU and started on a short-acting investigational ganglionic blocking agent — a competitive antagonist selective for the nicotinic acetylcholine receptors found in autonomic ganglia. Within minutes his blood pressure falls as both sympathetic and parasympathetic ganglionic transmission drop. He remains awake and moves all four limbs purposefully. Which of the following cholinergic signaling pathways remains fully intact in this patient?",
      question:
        "Identify the pathway that still works — choose the option that correctly tracks the drug's NN selectivity through the three cholinergic locks.",
      options: [
        {
          label:
            "Neuromuscular transmission at the skeletal-muscle junction — the NM subtype is a distinct nicotinic receptor, so an NN-selective ganglionic blocker leaves somatic strength intact",
          text: "The patient moves because the NMJ runs on a different lock.",
          correct: true,
          why:
            "Correct on both layers. The printed subtype sentence splits the nicotinic family: NN (found in autonomic ganglia, adrenal medulla) and NM (found in neuromuscular junction of skeletal muscle). The investigational drug is selective for the ganglionic lock — NN — so transmission at the skeletal-muscle NMJ, which runs on NM, remains fully intact. That is exactly why the patient's blood pressure can be lowered by ganglionic blockade without producing paralysis, and why the vignette pointedly notes he moves all four limbs.",
        },
        {
          label:
            "Adrenal medulla catecholamine release in response to preganglionic sympathetic stimulation — the chromaffin cell is an endocrine gland, not a ganglion, so it is spared",
          text: "File the adrenal with the end-organs and spare it.",
          why:
            "Wrong filing. The printed sentence puts the adrenal medulla INSIDE the nicotinic block, with the same subtype as the ganglia: 'NN (found in autonomic ganglia, adrenal medulla).' The adrenal medulla is a modified ganglion — its chromaffin cells are directly innervated by preganglionic sympathetic fibers signaling through NN — so an NN antagonist blocks preganglionic-driven catecholamine release just as it blocks any other ganglion.",
        },
        {
          label:
            "Vagally mediated slowing of the heart — the SA node's muscarinic receptors are untouched by a nicotinic antagonist, so vagal tone is preserved",
          text: "The end-organ receptor is intact, so the reflex must be too.",
          why:
            "Half right, and the half that is wrong decides it. The cardiac muscarinic receptors (part of the M1–5 family found in heart) are indeed untouched by a NICOTINIC antagonist — but vagally mediated slowing is a NEURAL arc: the vagus carries its preganglionic signal to cardiac ganglia, where transmission runs through NN receptors. Block the ganglion and the intact muscarinic receptor sits denervated of its drive: neurally mediated vagal slowing is abolished even though the end-organ lock itself still responds to a direct muscarinic agonist.",
        },
        {
          label:
            "Neurally mediated thermoregulatory sweating — sweat glands are cholinergic sympathetic, so their response survives a nicotinic ganglionic blocker",
          text: "Cholinergic sympathetic means cholinergic all the way.",
          why:
            "The parenthetical is real but misapplied. The sweat gland's RECEPTOR is muscarinic ('on sweat glands (cholinergic sympathetic)') — the gland itself would respond to a direct muscarinic agonist even during ganglionic blockade. But thermoregulatory sweating as a NEURAL pathway requires the sympathetic preganglionic signal to cross the ganglion through NN receptors first; with the ganglion blocked, the drive never reaches the intact gland. Receptor intact, pathway interrupted — the same split as the cardiac option.",
        },
        {
          label:
            "Both nicotinic subtypes fall together — NN and NM are the same receptor, so the patient's preserved limb movement must be mediated by muscarinic receptors on skeletal muscle",
          text: "One nicotinic receptor, one blockade, no subtype fork.",
          why:
            "Contradicts the printed fork. The page splits nicotinic receptors into TWO subtypes with different locations — NN in autonomic ganglia and adrenal medulla, NM in the neuromuscular junction of skeletal muscle — and skeletal muscle nicotinic transmission runs on NM, not on any muscarinic receptor. The patient moves because his NM lock is a different lock from the blocked NN lock; no muscarinic receptor is needed to explain preserved strength.",
        },
      ],
      reasoning:
        "The stem hands you a drug selective for ONE of the three cholinergic locks and asks what remains intact — so the task is to route each option through the printed subtype map. The lock blocked is NN, and the printed sentence assigns NN to autonomic ganglia and the adrenal medulla: so adrenal catecholamine release driven by preganglionic stimulation falls with the ganglia (distractor 2 files the adrenal as a muscarinic end-organ — the opposite of the printed block). The NMJ runs on NM, a DIFFERENT nicotinic subtype with a different location — so somatic neuromuscular transmission is intact, which is why the vignette notes the patient moves his limbs (the correct answer). The two neural-arc distractors exploit the receptor-intact/drive-interrupted split: cardiac muscarinic receptors and sweat-gland muscarinic receptors are both untouched by a nicotinic antagonist, but vagally mediated slowing and thermoregulatory sweating both require preganglionic signals to cross ganglia through NN first — blocked. The final distractor collapses the subtype fork entirely ('NN and NM are the same receptor'), asserting the exact thing the printed sentence denies: two subtypes, two locations. Sort each option into AT the blocked lock, SPARED by selectivity, or BEYOND the lock (receptor intact, drive interrupted), and only the NMJ survives fully intact.",
    },
  },
  mnemonics: [
    {
      code: "GATE VS MAILBOX",
      meaning:
        "The two ACh machines: NICOTINIC = the GATE — the receptor is a ligand-gated channel, and opening it lets the mail walk straight through: efflux of K+, influx of Na+ and in some cases Ca2+ (the current IS the message). MUSCARINIC = the MAILBOX — the receptor is G-protein–coupled and usually acts through 2nd messengers: the message is relayed through a G protein and delivered inside the cell.",
      memorizes:
        "The channel-vs-GPCR mechanism fork of the acetylcholine receptor families",
      whenToUse:
        "Any question about how a cholinergic receptor signals — ion flow through the receptor itself vs a G-protein/2nd-messenger cascade",
      clinical:
        "A nicotinic response is immediate ion current (why ganglia and the NMJ need speed); a muscarinic response is a relayed, amplified cascade (why end-organs modulate smoothly and atropine-like drugs have broad, sustained effects).",
    },
    {
      code: "NN RUNS NEURONS, NM MOVES MUSCLE",
      meaning:
        "The two nicotinic subtypes, by location: NN (neuronal nicotinic) is found in autonomic ganglia and the adrenal medulla — the neuronal stops of the autonomic pathway; NM (muscle nicotinic) is found in the neuromuscular junction of skeletal muscle — the somatic stop. Extra N: the adrenal medulla is Neural tissue too — a modified ganglion carrying NN.",
      memorizes:
        "The NN/NM subtype fork and both printed location lists",
      whenToUse:
        "Any question about which nicotinic subtype sits where, or which drug (ganglionic blocker vs neuromuscular blocker) hits which target",
      clinical:
        "Block NN and both autonomic divisions (and adrenal catecholamine release) fall together without paralysis; block NM and skeletal muscle is paralyzed without autonomic loss — the selectivity is the whole clinical game.",
    },
    {
      code: "FOUR M-HOMES AND ONE SYMPATHETIC SPY",
      meaning:
        "The M1–5 location list: FOUR M-HOMES are the classic parasympathetic end-organ sites — HEART, SMOOTH MUSCLE, BRAIN, EXOCRINE GLANDS — and the FIFTH site is the SYMPATHETIC SPY: SWEAT GLANDS, printed with the parenthetical '(cholinergic sympathetic)' because a sympathetic fiber ends on a muscarinic receptor there. The spy sits in sympathetic territory but works for the muscarinic side.",
      memorizes:
        "The five printed M1–5 locations and the sweat-gland exception",
      whenToUse:
        "Any question listing where muscarinic receptors are found, or any anticholinergic presentation that includes anhidrosis/hyperthermia",
      clinical:
        "A muscarinic antagonist evicts all five homes — including the spy: dry mouth (exocrine), tachycardia (heart), and the sweat-gland eviction is anhidrosis with overheating, the anticholinergic red flag.",
    },
    {
      code: "ONE KEY, THREE LOCKS",
      meaning:
        "Acetylcholine is ONE KEY; the body builds THREE LOCKS — NN (autonomic ganglia + adrenal medulla), NM (skeletal-muscle NMJ), and M1–5 (heart, smooth muscle, brain, exocrine glands, sweat glands). Pharmacologic leverage = pick the lock: an NN blocker is the master autonomic key-killer (both divisions + adrenal), an NM blocker is the paralysis key, an M blocker is the atropine-like end-organ key.",
      memorizes:
        "The three-receptor-class map and which drug class hits which lock",
      whenToUse:
        "Any 'where does this cholinergic drug act' or 'what does this blocker abolish' question — the entire cholinomimetic/antagonist armamentarium sorts into these three locks",
      clinical:
        "Before answering, name the lock: ganglionic effects = NN, paralysis = NM, atropine-like end-organ effects (including the sweat exception) = M1–5.",
    },
  ],
  rapidReview: {
    s30: [
      "Nicotinic ACh receptors are ligand-gated channels allowing efflux of K+ and influx of Na+ and in some cases Ca2+",
      "Nicotinic subtypes: NN (autonomic ganglia, adrenal medulla) and NM (neuromuscular junction of skeletal muscle)",
      "Muscarinic ACh receptors are G-protein–coupled receptors that usually act through 2nd messengers",
      "Muscarinic subtypes: 5 subtypes, M1–5, found in heart, smooth muscle, brain, exocrine glands, and on sweat glands (cholinergic sympathetic)",
      "The nicotinic receptor IS the pore — the message is the ion current; the muscarinic receptor relays the message through a G protein and 2nd messengers",
      "Every preganglionic autonomic neuron — sympathetic and parasympathetic — signals through NN at its ganglion",
      "The adrenal medulla carries NN (modified ganglion); blocking ganglia blocks adrenal catecholamine release",
      "The sweat gland is the exception: a sympathetic (cholinergic sympathetic) fiber ending on a muscarinic receptor",
    ],
    m3: [
      "GATE VS MAILBOX — nicotinic is the gate (channel: K+ out, Na+ and sometimes Ca2+ in); muscarinic is the mailbox (GPCR → 2nd messengers)",
      "NN RUNS NEURONS, NM MOVES MUSCLE — NN at ganglia + adrenal medulla; NM at the skeletal-muscle NMJ",
      "FOUR M-HOMES AND ONE SYMPATHETIC SPY — heart, smooth muscle, brain, exocrine glands + the cholinergic-sympathetic sweat gland",
      "ONE KEY, THREE LOCKS — ACh is one key; NN, NM, and M1–5 are the three locks a drug can pick",
    ],
    m10: [
      "The whole subsection is FOUR printed sentences — two text blocks of two sentences each (one nicotinic, one muscarinic); there is no figure on the page",
      "The text layer prints the subtypes as NN and NM (capital N with a subscript-style second letter) — 'NN (found in autonomic ganglia, adrenal medulla)' and 'NM (found in neuromuscular junction of skeletal muscle)'",
      "The muscarinic count prints as 'M1–5' with an en dash — 5 subtypes, found in heart, smooth muscle, brain, exocrine glands, and on sweat glands",
      "The page's only parenthetical is the division-crossing flag: '(cholinergic sympathetic)' — the sympathetic exception tucked at the end of the M1–5 list",
      "Page 235 (pdf 257) is a SHARED page: 'Acetylcholine receptors' (top, THIS topic) and 'Pain transmission' (bottom, the sibling topic pain-transmission) — the p196 shared-page convention; the indd slug + timestamp print at the page foot AFTER the sibling's Pain block",
      "Zero rasters on the page (pdfimages census); the z-ai VLM census attempt returned 401 twice in subagent context, so the census stands on pdfimages + the text layer — the top half is pure text with no margin notes or mnemonics; the KYP memory layer is original",
      "The printed blocks do NOT map individual M numbers to individual organs — the page lists the FAMILY M1–5 across the five sites; assigning M2 to heart or M3 to glands imports content from other pages",
    ],
  },
  recall: [
    {
      q: "The nicotinic block, verbatim — the receptor machine, the ion flows, and the two subtypes with their locations.",
      a: "Nicotinic ACh receptors are ligand-gated channels allowing efflux of K+ and influx of Na+ and in some cases Ca2+. Two subtypes: NN (found in autonomic ganglia, adrenal medulla) and NM (found in neuromuscular junction of skeletal muscle).",
    },
    {
      q: "The muscarinic block, verbatim — the receptor machine, the subtype count, and the locations.",
      a: "Muscarinic ACh receptors are G-protein–coupled receptors that usually act through 2nd messengers. 5 subtypes: M1–5 found in heart, smooth muscle, brain, exocrine glands, and on sweat glands (cholinergic sympathetic).",
    },
    {
      q: "Which way does each ion move through an open nicotinic channel?",
      a: "Efflux of K+ (out of the cell) and influx of Na+ (into the cell) — and in some cases influx of Ca2+.",
    },
    {
      q: "How do muscarinic receptors usually signal?",
      a: "They are G-protein–coupled receptors that usually act through 2nd messengers.",
    },
    {
      q: "Which nicotinic subtype sits in the adrenal medulla — and which other structure shares it?",
      a: "NN — found in autonomic ganglia and the adrenal medulla.",
    },
    {
      q: "Which nicotinic subtype sits at the neuromuscular junction of skeletal muscle?",
      a: "NM — found in the neuromuscular junction of skeletal muscle.",
    },
    {
      q: "How many muscarinic subtypes are there, and where are they found?",
      a: "5 subtypes, M1–5 — found in heart, smooth muscle, brain, exocrine glands, and on sweat glands (cholinergic sympathetic).",
    },
    {
      q: "What is the printed parenthetical on the sweat glands, and why is it an exception?",
      a: "(cholinergic sympathetic) — the sweat gland is a sympathetic target whose receptor is muscarinic: a sympathetic postganglionic fiber releasing acetylcholine onto an M1–5 receptor.",
    },
  ],
  related: [
    {
      title: "Autonomic Receptors: The Organ Response Table",
      topicId: "autonomic-receptors",
      note: "The organ-by-organ autonomic wiring table on the facing page (book 234) is what this fork feeds: once you know the three locks (NN, NM, M1–5), the organ table tells you what turning each lock does at the eye, heart, vasculature, GI, GU, and sweat glands.",
    },
    {
      title: "Cholinomimetic Agents",
      topicId: "cholinomimetics",
      note: "The cholinomimetic page is the agonist side of this map — every direct and indirect cholinergic agonist works by turning one of the three locks defined here (NN at ganglia/adrenal, NM at the NMJ, M1–5 at the end-organs).",
    },
    {
      title: "Muscarinic Antagonists & Atropine",
      topicId: "muscarinic-antagonists",
      note: "The muscarinic antagonist page is the M-lock blockade in drug form — atropine-like agents produce their classic pattern on exactly the printed M1–5 locations, with the sweat-gland eviction (anhidrosis → hyperthermia) as the printed exception's clinical signature.",
    },
    {
      title: "Autonomic Drugs: Synapse Targets & Overview",
      topicId: "autonomic-drugs-synapse",
      note: "The synapse-overview page supplies the anatomy this receptor map plugs into — where acetylcholine is released along the autonomic pathway (all preganglionic neurons, all parasympathetic postganglionic neurons, the sweat gland, and the adrenal medulla) — and this page supplies the receptors that catch it.",
    },
    {
      title: "Pain Transmission & Analgesic Targets",
      topicId: "pain-transmission",
      note: "The SIBLING subsection on the bottom half of the same book page (book 235, the p196 shared-page convention): nociceptive vs neuropathic pain and the four processes (transduction, transmission, modulation, perception) — a different receptor universe (TRPV1, voltage-gated Na+ channels, Aδ/C fibers) sharing nothing but the page.",
    },
  ],
  crossLinks: [
    {
      subject: "Neuroscience & physiology (ionotropic vs metabotropic signaling)",
      connection:
        "The nicotinic–muscarinic fork is pharmacology's cleanest example of the nervous system's two signaling architectures: IONOTROPIC (the nicotinic ligand-gated channel — efflux of K+, influx of Na+ and in some cases Ca2+; the receptor is the pore) vs METABOTROPIC (the muscarinic GPCR relaying through 2nd messengers). Speed requirements explain the distribution: ganglia and the NMJ — the places that must fire in milliseconds — run ionotropic; the end-organs, which modulate smoothly, run metabotropic.",
    },
    {
      subject: "Autonomic & adrenal anatomy (the wiring behind the receptor list)",
      connection:
        "The printed locations encode three anatomic facts: every preganglionic autonomic neuron — sympathetic and parasympathetic alike — ends on an NN receptor, which is why ganglion blockers cannot spare one division over the other; the adrenal medulla is a modified sympathetic ganglion (chromaffin cells = modified postganglionic neurons), which is why it carries NN like any ganglion rather than M1–5 like an end-organ; and the sweat gland's '(cholinergic sympathetic)' fiber is the one sympathetic postganglionic path that releases acetylcholine onto a muscarinic receptor.",
    },
    {
      subject: "Cholinomimetic pharmacology (the agonist side of the three locks)",
      connection:
        "Forward link: the cholinomimetic agents sort precisely by the three locks defined here — nicotinic agonists drive ganglia and the adrenal medulla (NN) and the NMJ (NM) depending on subtype selectivity, while muscarinic agonists drive the M1–5 end-organs; this page's distribution map is the answer key for 'where does this agonist act' questions.",
    },
    {
      subject: "Muscarinic antagonist & neuromuscular blocker pharmacology (the blockade side)",
      connection:
        "Forward link: the atropine-like muscarinic antagonists produce their end-organ pattern by blocking the M1–5 locations printed here (heart, smooth muscle, brain, exocrine glands, and the sweat glands — hence anhidrosis and hyperthermia), while the neuromuscular blockers paralyze skeletal muscle by blocking NM at the NMJ, sparing the NN ganglia and the M1–5 end-organs; and ganglionic blockers hit NN — both autonomic divisions plus the adrenal medulla at once.",
    },
  ],
};
