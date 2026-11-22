import type { KypUsMLENote } from "../types";

// Pharmacology — AUTONOMIC DRUGS (PH11 — the AUTONOMIC/SOMATIC RECEPTOR
// MAP). Source: pdf 256 / book 234, the LOWER portion of the page — the
// section banner 'PHARMACOLOGY—AUTONOMIC DRUGS' and the header
// 'Autonomic receptors' over the AUTONOMIC/SOMATIC overview diagram
// (VECTOR LINE ART — pdfimages returned zero raster rows), whose labels
// the PDF text layer scatters in physical order: AUTONOMIC (Parasympathetic
// + Sympathetic) and SOMATIC; Brainstem + Spinal cord as the CNS origins;
// 'Preganglionic neuron (long)' vs 'Preganglionic neuron (short)';
// ACh on Nn at every ganglion (and at the adrenal medulla); 'Sympathetic
// chain'; 'Adrenal gland (medulla)'; 'Postganglionic neuron (short)' vs
// 'Postganglionic neuron (long)'; the postganglionic transmitters ACh, NE,
// D, Epi; the receptor plates 'M₁, M₂, M₃', 'M₃', 'α1, α2, β1, β2',
// 'α1, α2, β1, D1', 'Nm'; the organ plates 'Smooth muscle, gland cells,
// nerve terminals, cardiac muscle', 'Sweat glands', 'Renal vasculature
// smooth muscle', 'Cardiac muscle, vessels', 'Skeletal muscle'; the
// 'Neuromuscular junction'; and 'Blood (catecholamine transmission)'.
// Plus the section's three footnotes, verbatim: 'Pelvic splanchnic nerves
// and CNs III, VII, IX, and X are part of the parasympathetic nervous
// system.'; 'Adrenal medulla is directly innervated by preganglionic
// sympathetic fibers.'; 'Sweat glands are part of the sympathetic pathway
// but are innervated by cholinergic fibers (sympathetic nervous system
// results in a "chold" sweat).' — the 'chold' spelling is the book's own
// print (ie, a 'cold' sweat), carried verbatim and flagged [sic].
// PAGE-RANGE FINDING: the section does NOT continue onto pdf 257 — that
// page (book 235) opens the SEPARATE 'Acetylcholine receptors' section
// (the next pending topic), so sourcePages stay [256] / book 234.
// EXCLUSION: the 'Drug effect modifications' section in the UPPER portion
// of the same page is the COMPLETED topic PH10 and is EXCLUDED here.
// The diagram is redrawn as an ORIGINAL_KYP_REDRAW (original KYP SVG with
// original KYP glyphs — nothing reproduced). The section prints NO margin
// mnemonic — all four mnemonic codes are KYP-original. Clinical anchors
// extending past the page (ganglionic blockers, glycopyrrolate-neostigmine
// reversal, pheochromocytoma, renal-dose dopamine/fenoldopam, β3/
// mirabegron, the M-subtype-to-organ assignments beyond the printed set)
// are flagged as KYP clinical anchors wherever they appear.

export const autonomicReceptors: KypUsMLENote = {
  id: "autonomic-receptors",
  title: "Autonomic Receptors",
  subtitle:
    "One diagram wires the whole autonomic pharmacology shelf: two divisions (Parasympathetic, Sympathetic), one somatic branch, an ACh→Nn ganglionic synapse that never changes, and a postganglionic transmitter that names the receptor alphabet at the organ (ACh→M₁/M₂/M₃, NE→α1/α2/β1/β2, D→D1) — with the adrenal medulla pouring Epi + NE into the blood (book 234, the LOWER portion of the page).",
  subject: "Pharmacology",
  system:
    "Section II · Pharmacology — Autonomic Drugs (the banner this page shares with drug-effect-modifications above it)",
  pilotCategory:
    "The autonomic-receptors page's complete architecture — the AUTONOMIC/SOMATIC overview diagram: a two-division autonomic system (Parasympathetic + Sympathetic) and a one-branch somatic system; the always-ACh/Nn ganglionic synapse; the neuron-length mirror (parasympathetic 'Preganglionic neuron (long)' + 'Postganglionic neuron (short)' vs sympathetic 'Preganglionic neuron (short)' + 'Postganglionic neuron (long)'); the postganglionic transmitter→receptor wiring (ACh → 'M₁, M₂, M₃'; ACh → 'M₃' at sweat glands; NE → 'α1, α2, β1, β2'; D → 'D1' at renal vasculature; adrenal Epi + NE → blood-borne 'α1, α2, β1, β2' on 'Cardiac muscle, vessels'); the somatic ACh → 'Nm' neuromuscular junction; and the three footnotes (pelvic splanchnic nerves + CNs III, VII, IX, X; the adrenal medulla's direct preganglionic innervation; the sweat glands' cholinergic fibers).",
  difficulty: 3,
  readTime: 9,
  sourceRef:
    "First Aid 2026, Part 1 pp. 234 (Pharmacology — Autonomic Drugs: Autonomic receptors — the AUTONOMIC/SOMATIC overview diagram with its labels verbatim: Preganglionic neuron (long)/(short), Postganglionic neuron (short)/(long), ACh, Nn, NE, Epi, D, M₁/M₂/M₃, α1/α2/β1/β2, α1/α2/β1/D1, Nm, sympathetic chain, adrenal gland (medulla), blood (catecholamine transmission), neuromuscular junction, and the organ plates, plus the section's three footnotes; the section ENDS on this page — pdf 257 opens the separate Acetylcholine receptors section; the Drug effect modifications section on the same page is EXCLUDED — it is the separate drug-effect-modifications topic)",
  tags: [
    "autonomic receptors",
    "autonomic nervous system",
    "sympathetic",
    "parasympathetic",
    "somatic nervous system",
    "preganglionic neuron",
    "postganglionic neuron",
    "ganglion",
    "sympathetic chain",
    "paravertebral ganglia",
    "ACh",
    "acetylcholine",
    "cholinergic",
    "NE",
    "norepinephrine",
    "Epi",
    "epinephrine",
    "catecholamines",
    "dopamine",
    "D1",
    "nicotinic",
    "Nn",
    "Nm",
    "muscarinic",
    "M1",
    "M2",
    "M3",
    "α1",
    "α2",
    "β1",
    "β2",
    "adrenal medulla",
    "chromaffin cells",
    "sweat glands",
    "cold sweat",
    "renal vasculature",
    "neuromuscular junction",
    "skeletal muscle",
    "smooth muscle",
    "cardiac muscle",
    "gland cells",
    "nerve terminals",
    "pelvic splanchnic nerves",
    "CN III",
    "CN VII",
    "CN IX",
    "CN X",
    "cranial nerves",
    "vagus",
    "pharmacology",
    "autonomic drugs",
  ],
  core: {
    what:
      "ONE DIAGRAM, THREE PATHWAYS, EVERY RECEPTOR. (1) PARASYMPATHETIC (the AUTONOMIC division's first half): 'Brainstem' and sacral cord → 'Preganglionic neuron (long)' → a ganglion on or near the target organ, where ACh meets Nn → 'Postganglionic neuron (short)' → ACh again, this time on 'M₁, M₂, M₃' → 'Smooth muscle, gland cells, nerve terminals, cardiac muscle'. (2) SYMPATHETIC (the AUTONOMIC division's second half): thoracolumbar cord → 'Preganglionic neuron (short)' → the 'Sympathetic chain', where ACh again meets Nn → 'Postganglionic neuron (long)' → NE on 'α1, α2, β1, β2' → the same organ plate ('Smooth muscle, gland cells, nerve terminals, cardiac muscle') — with two labeled exceptions: a cholinergic sympathetic fiber to the sweat glands (ACh on 'M₃') and a dopaminergic branch to the kidney (D on 'D1' → 'Renal vasculature smooth muscle'), plus one endocrine limb: the 'Adrenal gland (medulla)' — 'directly innervated by preganglionic sympathetic fibers' (footnote 2, verbatim) — which pours Epi + NE into the 'Blood (catecholamine transmission)' onto 'α1, α2, β1, β2' at 'Cardiac muscle, vessels'. (3) SOMATIC: the 'Voluntary motor nerve' — a single neuron, no ganglion — releases ACh on 'Nm' at the 'Neuromuscular junction' → 'Skeletal muscle'. Three footnotes complete the map: 'Pelvic splanchnic nerves and CNs III, VII, IX, and X are part of the parasympathetic nervous system.'; 'Adrenal medulla is directly innervated by preganglionic sympathetic fibers.'; and 'Sweat glands are part of the sympathetic pathway but are innervated by cholinergic fibers (sympathetic nervous system results in a “chold” sweat).' — the printed 'chold' [sic] is the book's own spelling of a cold sweat.",
    why:
      "WHY THE WIRING IS BUILT THIS WAY. WHY A TWO-NEURON CHAIN: the CNS cannot reach every organ with one cell — the autonomic outflow parks a switch (the ganglion) outside the CNS, and EVERYTHING downstream of that switch is druggable independently of everything upstream. That switch is the diagram's most repeated motif: ACh on Nn, printed at the parasympathetic ganglion, at the sympathetic chain, and at the adrenal medulla — the ganglionic synapse never changes, which is why a nicotinic ganglionic blocker (trimetaphan-type; KYP clinical anchor beyond the page) silences BOTH divisions at once (hypotension + ileus + anhidrosis + cycloplegia) while leaving the neuromuscular junction (Nm) and the organ synapses (M, α, β, D) untouched. WHY THE NEURON LENGTHS MIRROR: the parasympathetic ganglion sits ON the organ ('Preganglionic neuron (long)' → 'Postganglionic neuron (short)') so its action is discrete and organ-local; the sympathetic chain sits NEAR the cord ('Preganglionic neuron (short)' → 'Postganglionic neuron (long)') so one preganglionic fiber can recruit many postganglionic neurons across many levels — mass discharge, the physiology behind fight-or-flight. WHY THE POSTGANGLIONIC TRANSMITTER IS THE READER'S KEY: it names the receptor alphabet at the organ — cholinergic postganglionic fibers (ALL parasympathetic + the sweat-gland sympathetic exception) mean muscarinic targets; adrenergic postganglionic fibers (most sympathetic) mean 'α1, α2, β1, β2'; the dopaminergic renal branch means D1; and the adrenal medulla — a ganglion whose 'postganglionic neuron' never grew an axon — skips the synapse entirely and broadcasts Epi + NE through the 'Blood (catecholamine transmission)' to every 'α1, α2, β1, β2'-bearing tissue (the 'Cardiac muscle, vessels' plate), which is why circulating catecholamines reach tissues no sympathetic fiber innervates. WHY THE SOMATIC BRANCH SITS IN THE SAME FIGURE: it is the contrast case — ONE neuron, no ganglion, ACh on Nm — and the receptor subtype (Nn vs Nm) is the entire basis of selective neuromuscular blockade: rocuronium blocks Nm (paralysis) without touching Nn (no ganglionic effects at clinical doses — KYP clinical anchor).",
    keyIdea:
      "Read every autonomic stem through three anchors. ANCHOR 1 — COUNT THE NEURONS: two neurons meeting at a ganglion is AUTONOMIC (targets: 'Smooth muscle, gland cells, nerve terminals, cardiac muscle' — plus the adrenal and renal limbs); one neuron running straight to the muscle is SOMATIC (target: 'Skeletal muscle'). ANCHOR 2 — NAME THE GANGLIONIC SYNAPSE: it is ALWAYS ACh on Nn — parasympathetic ganglion, sympathetic chain, adrenal medulla, no exceptions — so a drug described as a 'ganglionic blocker' hits Nn in BOTH divisions, and a drug described as 'nicotinic' must next be sorted Nn (ganglion) vs Nm (neuromuscular junction). ANCHOR 3 — READ THE POSTGANGLIONIC TRANSMITTER, WHICH NAMES THE RECEPTOR ALPHABET AT THE ORGAN: ACh → 'M₁, M₂, M₃' (parasympathetic organs) or 'M₃' (the sweat-gland exception — sympathetic PATH, cholinergic FIBER); NE → 'α1, α2, β1, β2'; D → 'D1' (renal vasculature); and the adrenal medulla's blood-borne Epi + NE → 'α1, α2, β1, β2' at 'Cardiac muscle, vessels'. The exam's one-line summary: COUNT THE NEURONS, NAME THE GANGLION, READ THE POSTGANGLIONIC TRANSMITTER — THE RECEPTOR ALPHABET NAMES ITSELF.",
  },
  mechanisms: [
    {
      id: "autonomic-two-neuron-chain",
      title:
        "The two-neuron chain: every autonomic pathway is CNS → preganglionic neuron → ganglion (ACh on Nn) → postganglionic neuron → organ",
      context:
        "The diagram's shared backbone — the parasympathetic and sympathetic columns of book 234 (with the neuron-length mirror printed at the top of each column)",
      flow: {
        nodes: [
          {
            id: "input",
            label: "The CNS origins — Brainstem and Spinal cord",
            sublabel:
              "Input — the diagram prints two CNS stations: 'Brainstem' (parasympathetic outflow: CNs III, VII, IX, X — per footnote 1, 'Pelvic splanchnic nerves and CNs III, VII, IX, and X are part of the parasympathetic nervous system') and 'Spinal cord' (sympathetic thoracolumbar outflow, and the somatic anterior-horn cells). The outflow level is the first clue in any stem: craniosacral = parasympathetic, thoracolumbar = sympathetic.",
            variant: "input",
          },
          {
            id: "preganglionic",
            label: "Preganglionic neuron — LONG (parasympathetic) or SHORT (sympathetic)",
            sublabel:
              "The first neuron's cell body lives in the CNS and its axon exits to a ganglion OUTSIDE the CNS. The lengths mirror: parasympathetic 'Preganglionic neuron (long)' — because its ganglion sits on or near the target organ; sympathetic 'Preganglionic neuron (short)' — because the 'Sympathetic chain' sits near the cord. Both preganglionic fibers are CHOLINERGIC — this never varies.",
            variant: "process",
          },
          {
            id: "ganglion",
            label: "The ganglion — ACh on Nn, always",
            sublabel:
              "The synapse inside every autonomic ganglion is the diagram's most repeated motif: preganglionic ACh meeting the nicotinic Nn receptor — at the parasympathetic ganglion on the organ, at the 'Sympathetic chain', and at the 'Adrenal gland (medulla)'. Pharmacologic payoff (KYP clinical anchor beyond the page): a ganglionic (Nn) blocker silences BOTH divisions with one mechanism — hypotension, ileus, anhidrosis, cycloplegia — while sparing the NMJ (Nm) and the organ synapses (M, α, β, D).",
            variant: "target",
          },
          {
            id: "postganglionic",
            label: "Postganglionic neuron — SHORT (parasympathetic) or LONG (sympathetic)",
            sublabel:
              "The second neuron's cell body lives in the ganglion and its axon runs to the effector: parasympathetic 'Postganglionic neuron (short)' (the ganglion is already at the organ — discrete, organ-local action); sympathetic 'Postganglionic neuron (long)' (the chain is at the cord — one preganglionic fiber can recruit many postganglionic neurons across segments: mass discharge). The chain-vs-organ ganglion position is WHY sympathetic action is diffuse and parasympathetic action is discrete.",
            variant: "process",
          },
          {
            id: "output",
            label: "The organ plate — 'Smooth muscle, gland cells, nerve terminals, cardiac muscle'",
            sublabel:
              "Output — both divisions innervate the same four tissue classes (the diagram prints the identical organ plate under both pathways), so the RESPONSE at any organ is set by WHICH receptor alphabet the local postganglionic transmitter addresses — the subject of the second mechanism. The autonomic effectors never include skeletal muscle: that plate belongs to the somatic branch alone.",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "preganglionic", label: "outflow exits the CNS: craniosacral (para) vs thoracolumbar (sym)" },
          { from: "preganglionic", to: "ganglion", label: "preganglionic ACh → Nn (the synapse that never changes)" },
          { from: "ganglion", to: "postganglionic", label: "second neuron arises in the ganglion (or, in the adrenal, is skipped — see mechanism 2)" },
          { from: "postganglionic", to: "output", label: "postganglionic transmitter → the organ's receptor alphabet" },
        ],
      },
    },
    {
      id: "postganglionic-transmitter-sets-the-receptor",
      title:
        "The postganglionic transmitter names the receptor alphabet at the organ — ACh→M, NE→α/β, D→D1, and the adrenal's blood-borne Epi/NE",
      context:
        "The diagram's bottom band (book 234) — the receptor plates 'M₁, M₂, M₃', 'M₃', 'α1, α2, β1, β2', 'α1, α2, β1, D1' and the 'Blood (catecholamine transmission)' limb",
      flow: {
        nodes: [
          {
            id: "input",
            label: "One question at the bottom of every pathway: WHAT DOES THE POSTGANGLIONIC FIBER RELEASE?",
            sublabel:
              "Input — the ganglionic synapse is fixed (ACh on Nn), but the POSTGANGLIONIC transmitter varies — and it alone determines which receptor plate sits at the organ. The diagram prints four postganglionic transmitters: ACh, NE, D, and (from the adrenal) Epi.",
            variant: "input",
          },
          {
            id: "cholinergic",
            label: "Cholinergic postganglionic fibers → muscarinic plates",
            sublabel:
              "ALL parasympathetic postganglionic neurons release ACh onto 'M₁, M₂, M₃' at 'Smooth muscle, gland cells, nerve terminals, cardiac muscle' — plus the ONE sympathetic exception: the sweat-gland fiber is cholinergic, ACh on 'M₃' (footnote 3, verbatim: 'Sweat glands are part of the sympathetic pathway but are innervated by cholinergic fibers (sympathetic nervous system results in a “chold” sweat).' — the printed 'chold' [sic] means cold). Muscarinic targets answer anticholinergics regardless of which division runs the wire — atropine-type drugs dry sympathetic sweat as readily as they dry parasympathetic saliva (KYP clinical anchor).",
            variant: "process",
          },
          {
            id: "adrenergic",
            label: "Adrenergic postganglionic fibers → 'α1, α2, β1, β2'",
            sublabel:
              "Most sympathetic postganglionic neurons release NE onto the 'α1, α2, β1, β2' plate at 'Smooth muscle, gland cells, nerve terminals, cardiac muscle'. The subtype-to-organ dominance (β1 heart, α1 vasculature, β2 airway) is refined by the next pages of the chapter; this diagram prints the ALPHABET every adrenergic drug addresses — the same four letters the sympathomimetics grid scores drug by drug. One adrenergic receptor is deliberately NOT printed here: β3 (bladder detrusor relaxation, mirabegron) — a KYP extension beyond this page's printed set.",
            variant: "process",
          },
          {
            id: "dopamine",
            label: "The dopaminergic renal branch → D on 'D1'",
            sublabel:
              "The diagram's smallest labeled limb: a sympathetic branch releasing D onto 'D1' at 'Renal vasculature' 'smooth muscle'. This is the wiring behind 'renal-dose' dopamine (low-dose dopamine → D1 → renal vasodilation; the tactic has fallen out of favor — KYP clinical anchor) and behind fenoldopam (a D1 agonist for hypertensive emergency that also natriureses).",
            variant: "process",
          },
          {
            id: "adrenal",
            label: "The adrenal medulla — the axon-less postganglionic neuron broadcasting through the blood",
            sublabel:
              "The endocrine limb: 'Adrenal gland (medulla)' is 'directly innervated by preganglionic sympathetic fibers' (footnote 2, verbatim) — its chromaffin cells are modified postganglionic neurons that never grew an axon; preganglionic ACh on Nn makes them secrete Epi + NE into the 'Blood (catecholamine transmission)'. The circulating catecholamines then address 'α1, α2, β1, β2' at 'Cardiac muscle, vessels' — reaching tissues no sympathetic fiber innervates. The Epi-majority secretory bias (~85% Epi; KYP anchor beyond the page) is corticosteroid-driven (PNMT induction by cortisol from the adjacent cortex).",
            variant: "target",
          },
          {
            id: "output",
            label: "The receptor alphabet names the drug class",
            sublabel:
              "Output — the exam's readout rule: the receptor plate at the organ predicts the drug effect. Muscarinic plate → cholinomimetics and anticholinergics act there; 'α1, α2, β1, β2' plate → sympathomimetics and their blockers; D1 plate → dopamine/fenoldopam; blood-borne catecholamines → any adrenergic drug that reaches the circulation. Locate the plate on the diagram and the pharmacology of the stem follows without memorizing a single additional fact.",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "cholinergic", label: "postganglionic ACh → 'M₁, M₂, M₃' (all parasympathetic) and 'M₃' (sweat glands)" },
          { from: "input", to: "adrenergic", label: "postganglionic NE → 'α1, α2, β1, β2'" },
          { from: "input", to: "dopamine", label: "postganglionic D → 'D1' (renal vasculature)" },
          { from: "input", to: "adrenal", label: "no postganglionic axon: preganglionic ACh → Nn → Epi + NE into blood" },
          { from: "adrenal", to: "output", label: "'Blood (catecholamine transmission)' → 'α1, α2, β1, β2' at 'Cardiac muscle, vessels'" },
          { from: "cholinergic", to: "output", label: "muscarinic plate → cholinomimetic/anticholinergic pharmacology" },
          { from: "adrenergic", to: "output", label: "adrenergic plate → sympathomimetic/blocker pharmacology" },
          { from: "dopamine", to: "output", label: "D1 plate → renal-vascular pharmacology" },
        ],
      },
    },
    {
      id: "somatic-single-neuron-nmj",
      title:
        "The somatic branch: one neuron, no ganglion, ACh on Nm at the neuromuscular junction — the Nn/Nm distinction the exam keeps testing",
      context:
        "The diagram's SOMATIC column (book 234) — 'Voluntary motor nerve' → ACh → 'Nm' → 'Neuromuscular junction' → 'Skeletal muscle'",
      flow: {
        nodes: [
          {
            id: "input",
            label: "The SOMATIC division — the contrast case printed beside the autonomic columns",
            sublabel:
              "Input — the diagram's third column is deliberately spare: no ganglion, no second neuron, no division into sympathetic/parasympathetic. A 'Voluntary motor nerve' runs from the CNS (anterior horn) straight to 'Skeletal muscle' — voluntary, fast, and somatically wired.",
            variant: "input",
          },
          {
            id: "process",
            label: "A single cholinergic neuron, ending on Nm",
            sublabel:
              "The somatic motor neuron releases ACh — the same transmitter the autonomic side uses — but onto the NICOTINIC subtype of the neuromuscular junction: Nm, not Nn. Same transmitter, different receptor, totally different pharmacology: Nn sits in autonomic ganglia (and the adrenal medulla); Nm sits only at the 'Neuromuscular junction' on 'Skeletal muscle'.",
            variant: "process",
          },
          {
            id: "target",
            label: "The neuromuscular junction — the diagram's fourth synapse type",
            sublabel:
              "The 'Neuromuscular junction' plate is the somatic counterpart of the autonomic organ plates — but its receptor is uniquely Nm. This single label is the basis of selective neuromuscular blockade: nondepolarizing blockers (rocuronium, vecuronium — KYP clinical anchor) competitively block Nm and paralyze skeletal muscle WITHOUT blocking Nn at ganglia or M at organs (no ganglionic hypotension, no anticholinergic dryness at clinical doses).",
            variant: "target",
          },
          {
            id: "output",
            label: "Skeletal muscle — the one effector the autonomic divisions never reach",
            sublabel:
              "Output — the final sorting rule: a stem whose effector is 'Skeletal muscle' is somatic (ACh on Nm, one neuron, voluntary); a stem whose effector is smooth muscle, cardiac muscle, or glands is autonomic (two neurons, ACh on Nn at the ganglion, then M/α/β/D at the organ). Myasthenia gravis (Nm autoantibodies), Lambert-Eaton, and botulism all live at the somatic synapse of this diagram (KYP clinical anchors).",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "process", label: "single voluntary motor neuron — no ganglion in the path" },
          { from: "process", to: "target", label: "ACh → Nm (not Nn, not M) at the neuromuscular junction" },
          { from: "target", to: "output", label: "Nm transmission → skeletal muscle contraction" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "autonomic-receptors-map",
      title: "The autonomic-receptors map (an original KYP redraw)",
      caption:
        "An original KYP redraw of the source page's AUTONOMIC/SOMATIC overview diagram (book 234, lower portion): the CNS band (Brainstem + Spinal cord) at the top; the PARASYMPATHETIC column — 'Preganglionic neuron (long)' → ganglion at the organ (ACh on Nn) → 'Postganglionic neuron (short)' → ACh on 'M₁, M₂, M₃' → 'Smooth muscle, gland cells, nerve terminals, cardiac muscle'; the SYMPATHETIC column — 'Preganglionic neuron (short)' → the sympathetic chain (ACh on Nn) → 'Postganglionic neuron (long)' → NE on 'α1, α2, β1, β2' → the same organ plate, with the two labeled exceptions (ACh on 'M₃' at sweat glands; D on 'D1' at renal vasculature) and the ADRENAL LIMB — the 'Adrenal gland (medulla)' directly innervated by the preganglionic fiber (ACh on Nn), secreting Epi + NE into the 'Blood (catecholamine transmission)' onto 'α1, α2, β1, β2' at 'Cardiac muscle, vessels'; and the SOMATIC column — the 'Voluntary motor nerve' (single neuron) → ACh on 'Nm' at the neuromuscular junction → 'Skeletal muscle'. Below the pathways: the three footnotes verbatim (including the printed 'chold' sweat [sic]), the receptor key (Nn vs Nm vs M vs α/β vs D1), and the four-code mnemonic strip (all KYP-original).",
      notice:
        "Census (pdfimages + VLM): NO raster images on the page (pdfimages -list returned zero rows for pdf 256) — the source figure is VECTOR LINE ART (path-drawn nerves, ganglia, and organs with typeset labels), redrawn here as an ORIGINAL_KYP_REDRAW with original KYP glyphs: nothing is reproduced. The labels carried across are short attributed anatomical and neurotransmitter terms (ACh, NE, Epi, D, Nn, Nm, M₁-M₃, α1/α2/β1/β2, D1, organ names). The section prints NO mnemonic — the four codes in the bottom strip are KYP-original. The clinical annotations that extend past the source page (ganglionic blockers, rocuronium's Nm selectivity, renal-dose dopamine, β3/mirabegron) are flagged as KYP anchors where they appear. The section ENDS on this page — pdf 257 opens the separate 'Acetylcholine receptors' section.",
    },
    {
      kind: "table",
      title: "Book 234 — the diagram's wiring, row by row (labels verbatim)",
      intro:
        "The AUTONOMIC/SOMATIC diagram re-read as a table: every pathway with its neurons, its ganglionic synapse, its postganglionic transmitter, its receptor plate, and its target — all labels exactly as printed.",
      columns: [
        "PATHWAY",
        "PREGANGLIONIC NEURON (book 234)",
        "GANGLIONIC SYNAPSE (book 234)",
        "POSTGANGLIONIC NEURON (book 234)",
        "TRANSMITTER → RECEPTOR AT THE ORGAN (book 234)",
        "TARGET (book 234)",
      ],
      rows: [
        [
          "Parasympathetic",
          "Preganglionic neuron (long)",
          "ACh → Nn (ganglion on or near the organ)",
          "Postganglionic neuron (short)",
          "ACh → M₁, M₂, M₃",
          "Smooth muscle, gland cells, nerve terminals, cardiac muscle",
        ],
        [
          "Sympathetic — organ path",
          "Preganglionic neuron (short)",
          "ACh → Nn (sympathetic chain)",
          "Postganglionic neuron (long)",
          "NE → α1, α2, β1, β2",
          "Smooth muscle, gland cells, nerve terminals, cardiac muscle",
        ],
        [
          "Sympathetic — sweat gland exception",
          "Preganglionic neuron (short)",
          "ACh → Nn (sympathetic chain)",
          "Postganglionic neuron (long) — cholinergic fiber",
          "ACh → M₃",
          "Sweat glands",
        ],
        [
          "Sympathetic — renal branch",
          "Preganglionic neuron (short)",
          "ACh → Nn (sympathetic chain)",
          "Postganglionic neuron (long) — dopaminergic fiber",
          "D → D1",
          "Renal vasculature smooth muscle",
        ],
        [
          "Sympathetic — adrenal limb",
          "Preganglionic neuron (short) — direct, no postganglionic neuron (footnote 2)",
          "ACh → Nn (adrenal medulla)",
          "None — chromaffin cells are the modified postganglionic neuron",
          "Epi + NE → Blood (catecholamine transmission) → α1, α2, β1, β2",
          "Cardiac muscle, vessels",
        ],
        [
          "Somatic",
          "Voluntary motor nerve — single neuron, no ganglion",
          "None",
          "None",
          "ACh → Nm (neuromuscular junction)",
          "Skeletal muscle",
        ],
      ],
      caption:
        "Read the table column by column and the diagram's two invariants fall out. INVARIANT 1 — the ganglionic synapse: every autonomic row reads 'ACh → Nn' (chain, organ ganglion, or adrenal medulla); the somatic row reads 'None' because its single neuron never passes a ganglion. INVARIANT 2 — the neuron-length mirror: parasympathetic rows pair 'Preganglionic neuron (long)' with 'Postganglionic neuron (short)' (ganglion at the organ — discrete action); sympathetic rows pair 'Preganglionic neuron (short)' with 'Postganglionic neuron (long)' (chain at the cord — mass discharge). Everything else varies by row: the postganglionic transmitter (ACh, NE, D, or none-and-endocrine) sets the receptor plate (M₁/M₂/M₃, M₃, α1/α2/β1/β2, D1, or blood-borne α1/α2/β1/β2), and the receptor plate names the drug class that acts at that target.",
    },
    {
      kind: "table",
      title: "Book 234 — the three diagram footnotes (verbatim)",
      intro:
        "The section's three footnote lines, carried exactly as printed (including the book's own 'chold' spelling), each with the wiring it completes.",
      columns: ["#", "FOOTNOTE (book 234, verbatim)", "WHAT IT WIRES"],
      rows: [
        [
          "1",
          "Pelvic splanchnic nerves and CNs III, VII, IX, and X are part of the parasympathetic nervous system.",
          "The parasympathetic OUTFLOW anatomy — the cranial nerves (III, VII, IX, X) carry the brainstem's preganglionic fibers, and the pelvic splanchnic nerves (S2-S4 — KYP anchor beyond the page) carry the sacral outflow: craniosacral. The long preganglionic neurons of the diagram's first column run in these nerves.",
        ],
        [
          "2",
          "Adrenal medulla is directly innervated by preganglionic sympathetic fibers.",
          "Why the ADRENAL LIMB skips the postganglionic neuron — the medulla's chromaffin cells are modified postganglionic neurons that answer preganglionic ACh on Nn directly and secrete Epi + NE into the blood (catecholamine transmission) onto α1, α2, β1, β2 at cardiac muscle, vessels.",
        ],
        [
          "3",
          "Sweat glands are part of the sympathetic pathway but are innervated by cholinergic fibers (sympathetic nervous system results in a “chold” sweat).",
          "The SWEAT-GLAND EXCEPTION — sympathetic PATH (the diagram places sweat glands in the sympathetic column) but cholinergic FIBER and muscarinic RECEPTOR (ACh → M₃), which is why anticholinergics cause anhidrosis and why a 'cold' sweat (the printed 'chold' [sic] — the book's own spelling) is sympathetically driven but muscarinically executed.",
        ],
      ],
      caption:
        "The three footnotes are the diagram's fine print and three of its most testable lines. Footnote 1 gives the parasympathetic outflow its anatomy (craniosacral: CNs III, VII, IX, X + pelvic splanchnic). Footnote 2 is the adrenal limb's entire mechanism in one sentence — direct preganglionic innervation, no postganglionic neuron, endocrine output. Footnote 3 is the classic exception — sympathetic pathway, cholinergic fibers, M₃ receptor — and carries the book's own printed 'chold' sweat [sic], the only typo-level spelling on the page, quoted exactly and everywhere flagged [sic] (ie, a 'cold' sweat).",
    },
  ],
  usmle: {
    patterns: [
      {
        stem:
          "A physiology experiment uses a nicotinic antagonist that blocks the autonomic ganglia but does not touch the neuromuscular junction or any muscarinic or adrenergic receptor. The question asks which synapses of the autonomic/somatic wiring diagram the drug silences — and what the predicted clinical picture is.",
        discriminator:
          "ACh → Nn at EVERY autonomic ganglion (both divisions) and at the adrenal medulla — but NOT Nm at the neuromuscular junction, and NOT the organ synapses (M, α, β, D)",
        concept: "The ganglionic synapse invariant — Nn is the one receptor both divisions share",
        answer:
          "The diagram prints ACh meeting Nn at three stations: the parasympathetic ganglion on the organ, the 'Sympathetic chain', and the 'Adrenal gland (medulla)' — so a ganglionic blocker silences BOTH divisions at once (and the adrenal's catecholamine output with them): sympathetic loss gives vasodilation and hypotension; parasympathetic loss gives ileus, urinary retention, cycloplegia, dry mouth; both hit the sweat glands (anhidrosis — the cholinergic sympathetic exception shares the ganglion even though its organ synapse is M₃). What is SPARED is equally examinable: the neuromuscular junction (its nicotinic subtype is Nm — no skeletal paralysis) and the postganglionic organ synapses (M/α/β/D — a blocked ganglion stops transmitter RELEASE upstream, it does not block the receptors downstream; exogenous agonists still work). The trimetaphan/mecamylamine drug names and the full clinical picture are KYP clinical anchors beyond the page; the wiring is the diagram's own.",
      },
      {
        stem:
          "A 34-year-old soldier on a field exercise in heat collapses; examination shows hyperthermia and completely dry, flushed skin. The reviewing board asks how a SYMPATHETIC structure (the sweat gland) can be abolished by an ANTIMUSCARINIC drug (a scopolamine patch the soldier wore for motion sickness), and which receptor the thermoregulatory sweat fiber actually addresses.",
        discriminator:
          "'Sweat glands are part of the sympathetic pathway but are innervated by cholinergic fibers' — sympathetic PATH, cholinergic FIBER, ACh on M₃",
        concept: "The sweat-gland exception — the diagram's labeled break in the adrenergic rule",
        answer:
          "The source's own footnote 3, verbatim: 'Sweat glands are part of the sympathetic pathway but are innervated by cholinergic fibers (sympathetic nervous system results in a “chold” sweat).' — the printed 'chold' [sic] is the book's spelling of cold. The diagram prints the same wiring graphically: the sweat-gland branch leaves the sympathetic column but its labels read ACh → 'M₃' → 'Sweat glands' (every OTHER sympathetic organ path reads NE → 'α1, α2, β1, β2'). So an antimuscarinic blocks sweating (anhidrosis → hyperthermia) even though the pathway is sympathetic — the PATH is sympathetic, the FIBER is cholinergic, the RECEPTOR is muscarinic. The distractors fail on the wiring: an α-blocker would not dry the skin (the sweat fiber releases no NE), a β-blocker would not either, and a ganglionic blocker would dry the sweat AND drop the pressure (this stem's blood pressure is maintained). The heat-exercise frame (thermoregulatory sweating) and the scopolamine patch are KYP clinical anchors; the wiring and the footnote are the source's own.",
      },
      {
        stem:
          "A researcher stimulates the preganglionic sympathetic fiber to a laboratory adrenal gland and measures the secretory response; stimulating the POSTganglionic neuron that should have followed it produces nothing. The question asks which receptor mediates the adrenal medulla's response, why there is no postganglionic neuron to stimulate, and which plate the secreted products then address.",
        discriminator:
          "'Adrenal medulla is directly innervated by preganglionic sympathetic fibers' — preganglionic ACh on Nn at the medulla; chromaffin cells ARE the modified postganglionic neuron; Epi + NE → blood → α1, α2, β1, β2 at cardiac muscle, vessels",
        concept: "The adrenal limb — the diagram's endocrine bypass of the postganglionic neuron",
        answer:
          "Footnote 2, verbatim: 'Adrenal medulla is directly innervated by preganglionic sympathetic fibers.' The diagram prints the wiring: the preganglionic fiber (which elsewhere would synapse on a postganglionic neuron in the chain) reaches the 'Adrenal gland (medulla)' directly and releases ACh on Nn — the SAME ganglionic receptor as everywhere else, which is why the adrenal is functionally a modified ganglion. Its chromaffin cells are postganglionic neurons that never grew axons: instead of synapsing, they secrete Epi + NE into the 'Blood (catecholamine transmission)', which then addresses the 'α1, α2, β1, β2' plate at 'Cardiac muscle, vessels' — reaching tissues no sympathetic fiber innervates. Stimulating a postganglionic neuron that does not exist, of course, produces nothing. The Epi-majority (~85%) secretory bias and the pheochromocytoma correlate are KYP clinical anchors beyond the page; the direct innervation, the Nn mediation, the blood-borne transmission, and the target plate are the source's own.",
      },
      {
        stem:
          "A patient in the operating room receives a nondepolarizing neuromuscular blocker for endotracheal intubation. Within minutes he is completely paralyzed yet his heart rate, bowel sounds, pupil size, and sweat production are all essentially unchanged. The anesthesiologist asks the student which receptor of the autonomic/somatic wiring diagram the drug blocks — and why four other synapse types in the same diagram are untouched.",
        discriminator:
          "ACh on Nm at the 'Neuromuscular junction' — the somatic branch's single-neuron, nicotinic-Nm synapse; Nn (ganglia), M₁/M₂/M₃ (parasympathetic organs), M₃ (sweat glands), and α/β/D (sympathetic organs) are all spared",
        concept: "The Nn/Nm distinction — the somatic column vs the autonomic columns",
        answer:
          "The diagram's SOMATIC column: the 'Voluntary motor nerve' (a single neuron — no ganglion) releases ACh on 'Nm' at the 'Neuromuscular junction', and 'Nm' is the one receptor the drug needs to block for paralysis. The other four synapse types of the diagram are untouched because their receptors are different proteins: the ganglionic synapses run on Nn (a different nicotinic subtype — this is why the drug paralyzes without ganglionic hypotension), the parasympathetic organ synapses run on 'M₁, M₂, M₃', the sweat-gland exception runs on 'M₃', and the sympathetic organ synapses run on 'α1, α2, β1, β2' (plus D1 at the renal vasculature). Same transmitter (ACh) at three of them — different receptors, different drugs. The rocuronium/vecuronium names and the clinical-dose selectivity are KYP clinical anchors beyond the page; the wiring — one neuron, ACh, Nm, skeletal muscle — is the diagram's own, and it is the entire reason selective neuromuscular blockade exists.",
      },
    ],
    traps: [
      {
        a: "All postganglionic sympathetic fibers are adrenergic — sweat glands dry up with α-blockade because sweating is a sympathetic function executed by NE on α receptors",
        b: "Assuming the sympathetic column's transmitter is NE at every organ plate (the sweat-gland exception read as adrenergic)",
        whyConfused:
          "'Sympathetic = adrenergic' is true everywhere else in the column, and the sweat glands sit INSIDE the sympathetic portion of the diagram — the exception looks like the rule until you read its labels",
        keyDifference:
          "The diagram prints the exception explicitly: the sweat-gland branch's labels read ACh → 'M₃' → 'Sweat glands', and the source's footnote 3 says it in words — 'Sweat glands are part of the sympathetic pathway but are innervated by cholinergic fibers (sympathetic nervous system results in a “chold” sweat).' Sympathetic PATH, cholinergic FIBER, muscarinic RECEPTOR. So anticholinergics (not α-blockers) cause anhidrosis, and cholinomimetics (not sympathomimetics) drive thermoregulatory sweating. The renal branch is the other labeled variant: D → 'D1' at 'Renal vasculature smooth muscle' — dopaminergic, not noradrenergic.",
        clue:
          "Before assigning a transmitter to any sympathetic target, read the plate at the bottom of its branch: NE plates read 'α1, α2, β1, β2'; the sweat plate reads 'M₃'; the renal plate reads 'D1'. Mnemonic: THE SYMPATHETIC EXCEPTIONS — SWEAT IS M₃, KIDNEY IS D1, ADRENAL HAS NO AXON.",
      },
      {
        a: "Nicotinic receptors are nicotinic receptors — a ganglionic blocker like hexamethonium should also paralyze skeletal muscle, because the neuromuscular junction is nicotinic too",
        b: "Lumping Nn and Nm into one 'nicotinic' receptor (the ganglion and the neuromuscular junction treated as interchangeable)",
        whyConfused:
          "Both subtypes bind ACh, both are ligand-gated cation channels, and both are called 'nicotinic' — the subtype letters look like trivia until a drug's selectivity depends on them",
        keyDifference:
          "The diagram assigns them to different stations: Nn sits at the autonomic ganglia (the parasympathetic ganglion, the 'Sympathetic chain') and at the 'Adrenal gland (medulla)'; Nm sits only at the 'Neuromuscular junction' on 'Skeletal muscle'. A ganglionic (Nn-selective) blocker silences both autonomic DIVISIONS — hypotension, ileus, anhidrosis, cycloplegia — without a wisp of skeletal paralysis; a neuromuscular (Nm-selective) blocker paralyzes skeletal muscle without ganglionic effects at clinical doses. The next page's section title (Acetylcholine receptors, book 235) is literally this distinction: NN 'found in autonomic ganglia, adrenal medulla' and NM 'found in neuromuscular junction of skeletal muscle'.",
        clue:
          "When a stem says 'nicotinic', immediately ask WHICH N: at a ganglion or the adrenal → Nn; at the neuromuscular junction on skeletal muscle → Nm. Mnemonic: THE GANGLION IS ALWAYS NICOTINIC (Nn) — and the junction on skeletal muscle is the OTHER one (Nm).",
      },
      {
        a: "The adrenal medulla is driven by the sympathetic chain's postganglionic neurons, which deliver NE to the gland for release into the blood",
        b: "Putting a postganglionic neuron between the chain and the adrenal (the endocrine limb wired like every other sympathetic branch)",
        whyConfused:
          "Every other sympathetic branch in the diagram runs preganglionic → chain → postganglionic → organ, so the adrenal is assumed to follow — and 'the medulla secretes catecholamines' makes an adrenergic-synapse story feel right",
        keyDifference:
          "The source's footnote 2, verbatim: 'Adrenal medulla is directly innervated by preganglionic sympathetic fibers.' The diagram shows the preganglionic fiber reaching the 'Adrenal gland (medulla)' and meeting Nn — the gland IS the ganglion (chromaffin cells are modified postganglionic neurons with no axons); their product is secreted into the 'Blood (catecholamine transmission)' — Epi and NE both, not just NE — which then addresses 'α1, α2, β1, β2' at 'Cardiac muscle, vessels'. No postganglionic neuron, no synaptic delivery: the adrenal is the diagram's endocrine limb, which is why its output reaches tissues no sympathetic fiber innervates.",
        clue:
          "If a stem mentions the adrenal medulla, draw the limb with ONE synapse: preganglionic ACh on Nn → secretion into blood. Mnemonic: THE ADRENAL HAS NO AXON — it is a ganglion that secretes.",
      },
      {
        a: "The parasympathetic organ synapse is nicotinic — the ganglion was nicotinic, and the same ACh is released again at the organ",
        b: "Carrying the ganglionic receptor (Nn) downstream to the organ synapse (which is muscarinic)",
        whyConfused:
          "Both synapses of the parasympathetic pathway use the same transmitter (ACh), and the pathway is drawn as one continuous wire — the receptor swap at the organ is easy to skip",
        keyDifference:
          "The diagram prints the receptor at each station: the GANGLION reads 'Nn', the ORGAN plate reads 'M₁, M₂, M₃' — two different receptors for the same transmitter. That swap is the entire basis of selective autonomic drugs: muscarinic agonists (bethanechol-type) stimulate organs without stimulating ganglia; ganglionic blockers silence both divisions without blocking organs' responses to circulating transmitter; and anticholinesterases raise ACh everywhere (both synapses plus the NMJ), which is why they bradycardize (M at the SA node) while they strengthen NMJ transmission. The sweat-gland exception obeys the same rule at its organ end: ganglion Nn, organ 'M₃'.",
        clue:
          "Track the receptor along the wire, not the transmitter: the transmitter stays ACh across the parasympathetic pathway, but the receptor changes Nn → M at the organ. Mnemonic: COUNT THE NEURONS, NAME THE GANGLION — the organ plate always shows the SECOND receptor.",
      },
    ],
    pivots: [
      {
        lookAlike: "A stem that names a receptor (or a drug defined by its receptor) — which pathway, which synapse, which organ set does it act on?",
        differentiator:
          "Locate the receptor on the diagram before touching the options. NN (Nn) → the ganglionic synapses: BOTH divisions plus the adrenal medulla — effects are broad and paired (one sympathetic + one parasympathetic loss). NM (Nm) → the neuromuscular junction: 'Skeletal muscle' only — paralysis with autonomic sparing. M₁/M₂/M₃ (muscarinic) → the organ plates served by CHOLINERGIC postganglionic fibers: all parasympathetic targets ('Smooth muscle, gland cells, nerve terminals, cardiac muscle') PLUS the sweat glands ('M₃' — sympathetic path, cholinergic fiber). α1/α2/β1/β2 → the organ plates served by NORADRENERGIC postganglionic fibers — or any tissue reached by blood-borne catecholamines ('Cardiac muscle, vessels' via the adrenal limb). D1 → 'Renal vasculature' 'smooth muscle' (the dopaminergic branch).",
        correctPath:
          "Run the three anchors in order: (1) COUNT THE NEURONS — if the effector is skeletal muscle you are in the somatic column and the receptor must be Nm; done. (2) NAME THE GANGLIONIC SYNAPSE — if the drug's stated target is the ganglion, expect BOTH divisions to fall (plus the adrenal). (3) READ THE POSTGANGLIONIC TRANSMITTER — muscarinic plates answer the parasympathetic organs and the sweat glands; adrenergic plates answer the sympathetic organs and the blood-borne catecholamine targets; D1 answers the renal vasculature. Only after the plate is located should the organ-level physiology (which the next pages refine) be invoked.",
      },
      {
        lookAlike: "A stem about a drug's SELECTIVITY — why does it change one organ's function but leave a second organ untouched?",
        differentiator:
          "Selectivity = the intersection of the drug's receptor profile with each organ's plate. Every organ in the diagram carries a printed plate: the parasympathetic organ plate 'M₁, M₂, M₃', the sympathetic organ plate 'α1, α2, β1, β2', the sweat plate 'M₃', the renal plate 'D1', the catecholamine-target plate 'α1, α2, β1, β2' (cardiac muscle, vessels), and the somatic plate 'Nm'. A drug touches exactly the organs whose plates it addresses — so a pure muscarinic antagonist dries secretions, dilates pupils, speeds the heart, and stops sweating (M₃ at sweat glands!) but cannot paralyze (Nm untouched); an Nm blocker paralyzes but cannot dry the mouth; a D1 agonist vasodilates the kidney's vasculature without touching airway tone.",
        correctPath:
          "Two-step read: (1) write the drug's receptor profile (from its class — the sympathomimetics grid does this row by row for α/β/D drugs); (2) walk the diagram's plates and mark every organ whose plate the profile intersects — the marked set IS the drug's effect profile, and every unmarked plate is a promised side-effect-free zone. When the stem's paradox is 'the drug changed X but not Y', find the plate difference between X and Y — that difference is the answer, whatever the drug names are. The per-organ DOMINANT subtype (β1 heart, α1 veins, β2 airway — the tissue-distribution refinement on the following pages of this chapter) polishes the prediction but never overrides the plate rule.",
      },
    ],
    miniCase: {
      vignette:
        "A 62-year-old woman undergoes laparoscopic cholecystectomy under general anesthesia with rocuronium for muscle relaxation. At the end of the case the anesthesia team reverses the blockade with neostigmine (an acetylcholinesterase inhibitor) preceded by glycopyrrolate. Within ten minutes her train-of-four responses are back to baseline and she is moving all four limbs vigorously; her heart rate, which was 62 before reversal, is now 88. She is awake with a very dry mouth, flushed dry skin, and widely dilated pupils that do not constrict to light. The student at the bedside asks two questions: why did the team give an antimuscarinic drug TOGETHER with the acetylcholinesterase inhibitor — and why did the glycopyrrolate change her pupils, skin, secretions, and heart rate without any hint of interfering with the recovery of her muscle strength.",
      question:
        "Which receptors of the autonomic/somatic wiring diagram explain EACH finding — why did glycopyrrolate block the parasympathetic organ effects (and the sweating) but spare the neuromuscular transmission that neostigmine was given to restore?",
      options: [
        {
          label:
            "Glycopyrrolate is a competitive ANTIMUSCARINIC — it blocks the organ plates served by cholinergic postganglionic fibers (the 'M₁, M₂, M₃' plate at 'Smooth muscle, gland cells, nerve terminals, cardiac muscle', and the 'M₃' plate at the sweat glands), while the neuromuscular junction's receptor is Nm — a different protein the drug does not bind.",
          text: "Organ synapses are muscarinic; the NMJ is Nm — glycopyrrolate blocks only M.",
          correct: true,
          why:
            "Correct on every plate, and every plate is the diagram's own. (1) WHY GLYCOPYRROLATE RIDES WITH NEOSTIGMINE: neostigmine raises ACh at EVERY cholinergic synapse — the neuromuscular junction (desired: ACh on Nm outcompetes rocuronium), the autonomic ganglia (Nn), and ALL the muscarinic organ plates (undesired: bradycardia, bronchoconstriction, hypersecretion, gut cramping). Glycopyrrolate selectively blocks the muscarinic plates, so the brady-broncho-secretory storm is prevented while the NMJ reversal proceeds unopposed — her heart rate ROSE (M₂ on cardiac muscle blocked — the cardiac member of the printed 'M₁, M₂, M₃' set) rather than fell. (2) THE DRY MOUTH AND DILATED PUPILS: salivary glands and the pupillary sphincter are parasympathetic organ plates (M receptors) — blocked. (3) THE DRY SKIN: the sweat glands are the exception limb — sympathetic PATH, cholinergic FIBER, 'M₃' plate (footnote 3: 'Sweat glands are part of the sympathetic pathway but are innervated by cholinergic fibers') — blocked like any other muscarinic target despite being sympathetic. (4) THE SPARED MUSCLE STRENGTH: 'Skeletal muscle' answers only 'Nm' at the 'Neuromuscular junction' — glycopyrrolate does not bind Nm, so neostigmine's ACh accumulation still drives the junction and reverses the rocuronium. The specific drug names, the train-of-four, and the glycopyrrolate-neostigmine pairing convention are KYP clinical anchors beyond the page; the plates that answer them are the source's own.",
        },
        {
          label:
            "Glycopyrrolate blocks the nicotinic Nn receptors at the autonomic ganglia, which removes parasympathetic drive to the salivary glands and pupils; the neuromuscular junction is spared because it uses Nm.",
          text: "Glycopyrrolate is a ganglionic (Nn) blocker — that is why the organs dried.",
          why:
            "The right half of this option (Nn vs Nm) is true and tempting, but the mechanism is wrong twice. First, glycopyrrolate is a competitive MUSCARINIC antagonist — it does not bind Nn. Second, a true ganglionic blocker would silence BOTH divisions (sympathetic too): her flushed DRY skin would be joined by hypotension (sympathetic ganglionic blockade), and the heart rate would be labile rather than cleanly increased. The dry mouth/pupils here come from blocking the organs' M receptors DOWNSTREAM of intact ganglia — the pupils dilate because the iris sphincter's muscarinic tone is removed while the sympathetic dilator (α1) runs unopposed. If glycopyrrolate were the Nn blocker this option describes, the neostigmine could not have prevented the bradycardia by this route either — the bradycardia arises at the heart's muscarinic plate, not at the ganglion.",
        },
        {
          label:
            "The skin dried because glycopyrrolate blocks the sympathetic α1 receptors of the sweat gland vasculature — sweating is a sympathetic function, so its abolition must be adrenergic.",
          text: "The sweat dried via α1 blockade — sweating is sympathetic.",
          why:
            "The 'sympathetic' half is right; the receptor half is the diagram's labeled exception, and the option walks into it. The sweat-gland branch sits in the sympathetic column, but its printed labels read ACh → 'M₃' → 'Sweat glands' — 'sympathetic pathway but innervated by cholinergic fibers' (footnote 3, verbatim, with the printed “chold” sweat [sic]). Thermoregulatory sweating is driven by a cholinergic sympathetic fiber on a MUSCARINIC receptor — which is exactly why an ANTIMUSCARINIC dried her skin while an α-blocker would not have. The same wiring is why the classic side effect triad of anticholinergics includes anhidrosis with hyperthermia risk (KYP clinical anchor).",
        },
        {
          label:
            "The neuromuscular transmission was spared because skeletal muscle expresses the M₂ subtype, which glycopyrrolate's quaternary amine cannot reach at the junction.",
          text: "Skeletal muscle uses M₂ — that is why the NMJ was spared.",
          why:
            "Invented receptor assignment. The diagram gives 'Skeletal muscle' exactly one plate: 'Nm' at the 'Neuromuscular junction' — the somatic branch's single-neuron, nicotinic synapse. M₂ is the cardiac member of the printed parasympathetic set 'M₁, M₂, M₃' (the heart's chronotropic muscarinic receptor — the one whose blockade helped her rate rise to 88), not a skeletal-muscle receptor. The option's 'quaternary amine' flourish is real pharmacology (glycopyrrolate is quaternary and does not cross the blood-brain barrier) but is decoration around a wrong receptor: the NMJ was spared because its receptor is nicotinic Nm, a ligand-gated channel glycopyrrolate does not bind — not because any muscarinic subtype lies out of reach there.",
        },
        {
          label:
            "The dry mouth reflects blockade of PREganglionic ACh release at the parasympathetic ganglion — no transmitter reaches the salivary gland, so the gland falls silent while the junction, lacking a ganglion, keeps working.",
          text: "The dry mouth is presynaptic — preganglionic ACh release was blocked.",
          why:
            "Right organ, wrong station. Glycopyrrolate is a RECEPTOR antagonist, not a release blocker: it occupies the muscarinic plates at the organ ('M₁, M₂, M₃'), while the preganglionic fiber and the ganglion (ACh on Nn) keep firing — the postganglionic neuron still releases ACh onto salivary M receptors that are simply occupied. (A drug that truly blocked preganglionic release or ganglionic transmission would be an Nn story — and would knock out the sympathetic half as well, which did not happen; her flushed skin, tachycardia, and dilated pupils show the organs responding to blockade of their OWN plates.) The option's closing observation — that the somatic branch 'lacks a ganglion' — is the one true statement: the 'Voluntary motor nerve' is a single neuron, which is precisely why no ganglionic maneuver could ever explain a preserved NMJ.",
        },
      ],
      reasoning:
        "The vignette walks one drug pair through four different synapse types of the diagram — the exact integrative test this page is built for. (1) THE PAIRING: neostigmine (AChE inhibition) raises ACh everywhere; glycopyrrolate exists in the pair to block the muscarinic plates so the muscarinic OVERSHOOT (bradycardia, secretions, cramping) cannot occur while the Nm overshoot (the therapeutic one — reversing rocuronium) proceeds. (2) THE ORGAN FINDINGS, PLATE BY PLATE: heart rate 62 → 88 = the cardiac muscarinic receptor (M₂, member of the printed 'M₁, M₂, M₃' set) blocked; dry mouth = salivary gland M plate blocked; dilated unreactive pupils = pupillary sphincter M plate blocked (with the α1 dilator unopposed — the sympathetic plate untouched); dry flushed skin = the sweat gland's 'M₃' plate blocked — the diagram's labeled exception, sympathetic path with a cholinergic fiber, quoted by footnote 3. (3) THE SPARED STRENGTH: 'Skeletal muscle' answers only 'Nm' — glycopyrrolate does not bind it, so the accumulated ACh still competes rocuronium off the junction. Each distractor misses one plate: the Nn option invents a ganglionic mechanism that would have dropped her pressure; the α1 option ignores the printed M₃ at the sweat glands; the M₂-at-muscle option invents a receptor the diagram never assigns to skeletal muscle; the presynaptic option mistakes receptor blockade for release blockade. The drug names and the reversal convention are KYP clinical anchors; every plate invoked is the source page's own.",
    },
  },
  mnemonics: [
    {
      code: "THE GANGLION IS ALWAYS NICOTINIC — every autonomic ganglion (parasympathetic, sympathetic chain, and the adrenal medulla) sits behind ACh on Nn; only the organ synapse changes",
      meaning:
        "The diagram's one invariant (KYP-original code): the preganglionic fiber is always cholinergic and the ganglionic receptor is always the nicotinic Nn subtype — printed three times across the figure (organ ganglion, 'Sympathetic chain', 'Adrenal gland (medulla)'). Everything downstream varies (ACh→M, NE→α/β, D→D1); the ganglion never does. This is why a ganglionic blocker silences both divisions at once, and why the receptor at the ORGAN (not the ganglion) is what selective autonomic drugs target.",
      memorizes: "The ganglionic synapse of every autonomic pathway — and the adrenal medulla's inclusion in it",
      whenToUse:
        "Any stem about ganglionic blockers, nicotine effects at ganglia, or 'which synapse does this nicotinic drug hit'; also the first sorting step for any receptor named in an autonomic stem",
      clinical:
        "Ganglionic blockers (trimetaphan, mecamylamine — KYP anchors beyond the page) produce paired sympathetic+parasympathetic loss: hypotension, ileus, urinary retention, anhidrosis, cycloplegia — with NO skeletal paralysis (Nm spared).",
    },
    {
      code: "PARA = LONG P, SHORT POST; SYM = SHORT P, LONG POST — the parasympathetic ganglion sits ON the organ, the sympathetic chain NEAR the cord",
      meaning:
        "The neuron-length mirror (KYP-original code), straight from the diagram's printed labels: 'Preganglionic neuron (long)' + 'Postganglionic neuron (short)' = parasympathetic (ganglion on or in the target organ — discrete, organ-local action); 'Preganglionic neuron (short)' + 'Postganglionic neuron (long)' = sympathetic (chain near the cord — one preganglionic fiber recruits many postganglionic neurons: mass discharge). The lengths are not trivia: they are the anatomy of discrete-vs-diffuse action.",
      memorizes: "The neuron-length pattern of the two autonomic divisions and what it implies for action radius",
      whenToUse:
        "Any question asking which division is 'long preganglionic', where a given ganglion sits, or why sympathetic responses are diffuse while parasympathetic responses are discrete",
      clinical:
        "The sympathetic chain's position (near the cord) lets thoracic preganglionic fibers ascend/descend to recruit multiple levels — the anatomy behind mass sympathetic discharge in shock, and behind the segmental spread of sympathetic blocks.",
    },
    {
      code: "THE SYMPATHETIC EXCEPTIONS: SWEAT IS M₃, KIDNEY IS D1, ADRENAL HAS NO AXON",
      meaning:
        "The three labeled departures from 'sympathetic = NE → α/β' (KYP-original grouping of the source's own labels and footnotes): (1) SWEAT — the sweat-gland fiber is cholinergic: ACh on 'M₃' (footnote 3: 'Sweat glands are part of the sympathetic pathway but are innervated by cholinergic fibers'); (2) KIDNEY — the renal branch is dopaminergic: D on 'D1' at 'Renal vasculature smooth muscle'; (3) ADRENAL — the medulla is directly innervated by the PREganglionic fiber (footnote 2) and secretes Epi + NE into the blood: no postganglionic axon at all.",
      memorizes: "The three exceptions to the sympathetic noradrenergic rule, each with its receptor and target",
      whenToUse:
        "Any stem pairing 'sympathetic' with a muscarinic/dopaminergic/endocrine outcome — anticholinergic anhidrosis, renal-dose dopamine, adrenal catecholamine release — where the reflex answer (NE → α/β) is the trap",
      clinical:
        "Anticholinergics cause anhidrosis + hyperthermia (M₃ sweat); low-dose dopamine and fenoldopam vasodilate the renal vasculature (D1); the adrenal medulla's blood-borne Epi/NE address 'α1, α2, β1, β2' at cardiac muscle and vessels — reaching unnervated tissues.",
    },
    {
      code: "TWO NEURONS TO THE ORGANS, ONE TO THE BONES — autonomic pathways are two-neuron chains ending on M/α/β/D receptors; the somatic voluntary motor nerve is a single neuron ending on Nm at the neuromuscular junction",
      meaning:
        "The autonomic/somatic sorting rule (KYP-original code): an effector of smooth muscle, cardiac muscle, or glands sits behind TWO neurons and a ganglion (receptor at the organ: 'M₁, M₂, M₃', 'α1, α2, β1, β2', 'D1', or blood-borne catecholamines); an effector of skeletal muscle sits behind ONE neuron, no ganglion, ACh on 'Nm' at the 'Neuromuscular junction'. Counting neurons sorts any stem into its column before receptors are even considered.",
      memorizes: "The autonomic-vs-somatic architecture and the somatic branch's unique Nm plate",
      whenToUse:
        "Any stem mixing autonomic and somatic findings (anesthesia reversal, neuromuscular disease, ganglionic pharmacology) or asking which drugs paralyze without autonomic effects — and vice versa",
      clinical:
        "Nondepolarizing blockers (rocuronium-type — KYP anchor) paralyze via Nm with autonomic sparing; myasthenia gravis (Nm autoantibodies) and botulism (ACh release failure) both live at the somatic synapse of this diagram.",
    },
  ],
  rapidReview: {
    s30: [
      "Every autonomic pathway is a TWO-NEURON chain — CNS → 'Preganglionic neuron' → ganglion → 'Postganglionic neuron' → organ; the SOMATIC branch is ONE neuron (the 'Voluntary motor nerve') with no ganglion.",
      "Parasympathetic wiring: 'Preganglionic neuron (long)' → ganglion on/near the organ → ACh on Nn → 'Postganglionic neuron (short)' → ACh on 'M₁, M₂, M₃' → 'Smooth muscle, gland cells, nerve terminals, cardiac muscle'.",
      "Sympathetic wiring: 'Preganglionic neuron (short)' → 'Sympathetic chain' → ACh on Nn → 'Postganglionic neuron (long)' → NE on 'α1, α2, β1, β2' → the same organ plate.",
      "The ganglionic synapse is ALWAYS ACh on Nn — parasympathetic ganglion, sympathetic chain, and the adrenal medulla; no exceptions.",
      "Sweat glands: sympathetic PATH, cholinergic FIBER — ACh on 'M₃' ('Sweat glands are part of the sympathetic pathway but are innervated by cholinergic fibers (sympathetic nervous system results in a “chold” sweat).' [sic — the book's own spelling]).",
      "Renal branch: D on 'D1' → 'Renal vasculature' 'smooth muscle' — the dopaminergic sympathetic limb (low-dose dopamine, fenoldopam).",
      "Adrenal limb: 'Adrenal medulla is directly innervated by preganglionic sympathetic fibers.' — ACh on Nn → chromaffin cells (the axon-less postganglionic neuron) → Epi + NE into the 'Blood (catecholamine transmission)' → 'α1, α2, β1, β2' at 'Cardiac muscle, vessels'.",
      "Somatic wiring: 'Voluntary motor nerve' (single neuron) → ACh on 'Nm' at the 'Neuromuscular junction' → 'Skeletal muscle'.",
      "Footnote 1, verbatim: 'Pelvic splanchnic nerves and CNs III, VII, IX, and X are part of the parasympathetic nervous system.' — the craniosacral outflow.",
      "Nicotinic family split: Nn = autonomic ganglia + adrenal medulla; Nm = neuromuscular junction on skeletal muscle — same transmitter (ACh), different drugs.",
    ],
    m3: [
      "THE GANGLION IS ALWAYS NICOTINIC — Nn at every autonomic ganglion and at the adrenal; only the organ synapse changes.",
      "PARA = LONG P, SHORT POST; SYM = SHORT P, LONG POST — parasympathetic ganglion ON the organ, sympathetic chain NEAR the cord.",
      "THE SYMPATHETIC EXCEPTIONS — SWEAT IS M₃, KIDNEY IS D1, ADRENAL HAS NO AXON.",
      "TWO NEURONS TO THE ORGANS, ONE TO THE BONES — autonomic ends on M/α/β/D; somatic ends on Nm.",
    ],
    m10: [
      "The whole diagram in one breath: two autonomic divisions (two-neuron chains, always ACh→Nn at the ganglion, postganglionic transmitter sets the organ's receptor alphabet) + one somatic branch (single neuron, ACh→Nm, skeletal muscle).",
      "Mechanism spine — the two-neuron chain: the ganglion is the druggable switch outside the CNS; block it (Nn) and BOTH divisions fall together; the neuron-length mirror (long-P/short-P) puts the parasympathetic ganglion on the organ (discrete action) and the sympathetic chain at the cord (mass discharge).",
      "Mechanism spine — the transmitter rule: cholinergic postganglionic fibers → muscarinic plates ('M₁, M₂, M₃' parasympathetic; 'M₃' sweat glands); noradrenergic → 'α1, α2, β1, β2'; dopaminergic → 'D1' renal vasculature; the adrenal (no axon) broadcasts Epi + NE through the blood to 'α1, α2, β1, β2' at cardiac muscle and vessels.",
      "The exam's receptor-sorting protocol: Nn → ganglion (both divisions + adrenal) · Nm → NMJ (skeletal muscle) · M → cholinergic organ plates (parasympathetic organs + sweat glands) · α/β → noradrenergic plates + blood-borne catecholamine targets · D1 → renal vasculature.",
      "The three footnotes are three separate testable facts: craniosacral outflow (CNs III, VII, IX, X + pelvic splanchnic); direct preganglionic innervation of the adrenal medulla; cholinergic sympathetic fibers to sweat glands (the printed “chold” sweat [sic]).",
      "Drug selectivity = plate intersection: an antimuscarinic dries mouth, dilates pupils, speeds the heart, and stops sweating but cannot paralyze (Nm untouched); an Nm blocker paralyzes but dries nothing; a ganglionic blocker does both divisions' ganglia at once; a D1 agonist touches only the renal plate.",
      "The anesthesia reversal pair (KYP clinical anchor) runs the whole diagram at once: neostigmine raises ACh at Nm (therapeutic) and M (bradycardia, secretions — the reason glycopyrrolate rides along); glycopyrrolate blocks the M plates — including the sweat glands' M₃ — and leaves Nm alone.",
      "The adrenal limb is why circulating catecholamines reach unnervated tissues — and why pheochromocytoma (KYP anchor) presents with systemic α/β effects that no single organ's innervation could explain.",
      "Same transmitter, three receptors: ACh addresses Nn (ganglia), Nm (NMJ), and M (organs) — the receptor, not the transmitter, names the drug class and its selectivity.",
      "Count the neurons, name the ganglion, read the postganglionic transmitter — in that order, and the receptor alphabet names itself.",
    ],
  },
  recall: [
    {
      q: "Wire each pathway end to end — parasympathetic, sympathetic (organ path), and somatic — naming the neurons, both synapses, and the target, exactly as the diagram prints them.",
      a:
        "PARASYMPATHETIC: 'Preganglionic neuron (long)' → ACh on Nn at the ganglion on/near the organ → 'Postganglionic neuron (short)' → ACh on 'M₁, M₂, M₃' → 'Smooth muscle, gland cells, nerve terminals, cardiac muscle'. SYMPATHETIC (organ path): 'Preganglionic neuron (short)' → ACh on Nn at the 'Sympathetic chain' → 'Postganglionic neuron (long)' → NE on 'α1, α2, β1, β2' → 'Smooth muscle, gland cells, nerve terminals, cardiac muscle'. SOMATIC: 'Voluntary motor nerve' (single neuron, no ganglion) → ACh on 'Nm' at the 'Neuromuscular junction' → 'Skeletal muscle'.",
    },
    {
      q: "The three diagram footnotes, verbatim — and the wiring each one completes.",
      a:
        "(1) 'Pelvic splanchnic nerves and CNs III, VII, IX, and X are part of the parasympathetic nervous system.' — the craniosacral parasympathetic outflow (the long preganglionic fibers of the first column). (2) 'Adrenal medulla is directly innervated by preganglionic sympathetic fibers.' — the adrenal limb skips the postganglionic neuron: preganglionic ACh on Nn drives chromaffin cells to secrete Epi + NE into the blood. (3) 'Sweat glands are part of the sympathetic pathway but are innervated by cholinergic fibers (sympathetic nervous system results in a “chold” sweat).' [sic — the book's printed spelling of 'cold'] — the sweat-gland exception: sympathetic path, cholinergic fiber, 'M₃' receptor.",
    },
    {
      q: "Why is the ganglionic synapse the diagram's one invariant, and what does a drug that blocks it do — and not do?",
      a:
        "Both divisions (and the adrenal medulla) use the same preganglionic transmitter (ACh) on the same ganglionic receptor (Nn) — the diagram prints ACh at every ganglion and Nn beside it. A ganglionic (Nn) blocker therefore silences BOTH divisions at once: sympathetic loss (vasodilation, hypotension) + parasympathetic loss (ileus, urinary retention, cycloplegia, dry mouth) + sweat loss (anhidrosis — the cholinergic sympathetic fiber's ganglion is an Nn ganglion too) + adrenal loss (no catecholamine surge). What it does NOT do: paralyze skeletal muscle (the NMJ receptor is Nm, a different subtype) or block the organ receptors themselves (M/α/β/D remain responsive to exogenous agonists and circulating transmitter).",
    },
    {
      q: "The sympathetic exceptions — name each target, its postganglionic transmitter, its receptor plate, and the drug that acts there.",
      a:
        "(1) SWEAT GLANDS: cholinergic sympathetic fiber → ACh on 'M₃' — anticholinergics cause anhidrosis/hyperthermia; cholinomimetics drive thermoregulatory sweating. (2) RENAL VASCULATURE: dopaminergic branch → D on 'D1' at 'Renal vasculature smooth muscle' — low-dose dopamine and fenoldopam renal-vasodilate (the tactic's fall from favor is a KYP clinical anchor). (3) ADRENAL MEDULLA: no postganglionic neuron at all — directly innervated by the preganglionic fiber (ACh on Nn); the chromaffin cells secrete Epi + NE into the 'Blood (catecholamine transmission)', addressing 'α1, α2, β1, β2' at 'Cardiac muscle, vessels'. Every other sympathetic organ path is noradrenergic: NE on 'α1, α2, β1, β2'.",
    },
    {
      q: "Nn vs Nm — where does each live, and which drug families exploit the difference?",
      a:
        "Nn: the nicotinic subtype of the AUTONOMIC GANGLIA (parasympathetic organ ganglia + the sympathetic chain) and of the ADRENAL MEDULLA — blocked by ganglionic blockers (trimetaphan/mecamylamine type; KYP anchors), stimulated by nicotine at low doses. Nm: the nicotinic subtype of the NEUROMUSCULAR JUNCTION on 'Skeletal muscle' — blocked by nondepolarizing neuromuscular blockers (rocuronium/vecuronium; KYP anchors) and depolarizing blockers (succinylcholine), attacked by myasthenic autoantibodies. Same transmitter (ACh), same ionotropic family, different stations — which is why paralysis can be produced without autonomic collapse and ganglionic blockade without paralysis. The next section (Acetylcholine receptors, book 235) formalizes the split: NN 'found in autonomic ganglia, adrenal medulla'; NM 'found in neuromuscular junction of skeletal muscle'.",
    },
    {
      q: "The adrenal medulla's wiring from start to finish — innervation, receptor, secretory product, route, and target plate.",
      a:
        "A preganglionic sympathetic fiber (thoracic outflow, 'Preganglionic neuron (short)') reaches the 'Adrenal gland (medulla)' DIRECTLY — 'Adrenal medulla is directly innervated by preganglionic sympathetic fibers.' (footnote 2) — and releases ACh on Nn (the same ganglionic receptor as everywhere else; the medulla is a modified ganglion). The chromaffin cells — postganglionic neurons that never grew axons — secrete Epi + NE (Epi-majority, ~85% — KYP anchor beyond the page) into the 'Blood (catecholamine transmission)'. The circulating catecholamines address the 'α1, α2, β1, β2' plate at 'Cardiac muscle, vessels' — and every other adrenergic plate they can reach, including tissues with no sympathetic innervation at all.",
    },
  ],
  related: [
    {
      title: "Drug Effect Modifications — the Sum Reference",
      topicId: "drug-effect-modifications",
      note:
        "The UPPER portion of this same page (PH10, book 234) — the six-row TERM/DEFINITION/EXAMPLE table that opens the Autonomic Drugs banner. The two halves of the page meet at the exam's favorite junction: autonomic drugs are the classic interacting pairs. The antagonistic row's example (morphine with naloxone, '2 + 2 < 4') is a receptor-binding event at an autonomic-adjacent synapse; the permissive row (cortisol on catecholamine responsiveness) is literally about the responsiveness of THIS page's 'α1, α2, β1, β2' plate — cortisol maintains vascular responsiveness so catecholamines (postganglionic NE and adrenal Epi alike) can express their full effect. Read the page top-to-bottom and it teaches one lesson: how to talk about combinations (top) and what the combinations act on (bottom).",
    },
    {
      title: "Sympathomimetics — the Receptor Activity Grid",
      topicId: "sympathomimetics",
      note:
        "The drug-side continuation of this diagram: the α1/α2/β1/β2/D1 alphabet printed at the bottom of the sympathetic column is exactly the column set of the sympathomimetics grid, scored drug by drug (norepinephrine, phenylephrine, epinephrine, dobutamine, isoproterenol, dopamine, fenoldopam, albuterol...). This page supplies the WIRING (which organs carry which plates, and that D1 is the renal plate); the sympathomimetics page supplies the DRUGS (each drug's receptor profile intersected with those plates predicts its hemodynamics — why phenylephrine is pure α1 vasoconstriction, why epinephrine covers α+β, why fenoldopam is the D1 selective one). The diagram's D → 'D1' → 'Renal vasculature' branch IS fenoldopam's mechanism drawn three pages early.",
    },
    {
      title: "Receptor Binding — the Four Ways to Change the Agonist Curve",
      topicId: "receptor-binding",
      note:
        "The molecular mechanics under this diagram's synapses (PH8, book 233). Competitive antagonists shift the agonist curve right (surmountable — more ACh can outcompete, which is precisely how neostigmine reverses rocuronium at the Nm plate in this page's mini-case); noncompetitive and irreversible antagonists lower Emax; partial agonists act at these same plates with lower ceilings. When this diagram says a drug 'blocks' a receptor — glycopyrrolate at M, rocuronium at Nm, propranolol at β — the receptor-binding page supplies the curve geometry of that blockade, and this page supplies the anatomical address. The exam asks both: the curve (PH8) and the synapse (PH11).",
    },
    {
      title: "Cranial Nerves — the Parasympathetic Outflow",
      topicId: "cranial-nerves",
      note:
        "Footnote 1 of this page ('Pelvic splanchnic nerves and CNs III, VII, IX, and X are part of the parasympathetic nervous system.') is the autonomic half of the cranial-nerve story: the long preganglionic neurons of the diagram's first column run in CN III (pupillary constriction, accommodation), CN VII and IX (salivary and lacrimal glands), and CN X (the vagus — thoracoabdominal viscera, the parasympathetic workhorse), plus the pelvic splanchnic nerves (S2-S4) below. The cranial-nerve note supplies each nerve's course, nuclei, and deficits; this page supplies what their autonomic fibers DO at the organ (ACh on M₁/M₂/M₃ at smooth muscle, gland cells, nerve terminals, cardiac muscle). Together they answer every 'which nerve carries the preganglionic parasympathetic fiber to X' stem the exam can build.",
    },
  ],
  crossLinks: [
    {
      subject: "Anesthesiology (the reversal pair — the whole diagram at the bedside)",
      connection:
        "The glycopyrrolate + neostigmine reversal sequence runs every synapse of this diagram through one patient (a KYP clinical anchor beyond the page; the plates are the source's own). Neostigmine inhibits acetylcholinesterase, so ACh accumulates at Nm (therapeutic — outcompetes the nondepolarizing blocker and restores skeletal-muscle strength), at Nn (ganglionic traffic rises), and at every muscarinic plate (bradycardia, bronchoconstriction, hypersecretion — the overshoot). Glycopyrrolate, a competitive antimuscarinic, is given first to block the M plates — the heart speeds up (M₂ on cardiac muscle blocked), secretions dry, pupils dilate, and sweating stops (the M₃ sweat-gland plate of the cholinergic sympathetic exception) — while the NMJ, running on Nm, is untouched and the reversal proceeds. One drug pair, four receptor plates, zero memorized interactions — only the wiring.",
    },
    {
      subject: "Endocrinology (pheochromocytoma — the adrenal limb made pathological)",
      connection:
        "The diagram's adrenal limb — 'directly innervated by preganglionic sympathetic fibers', secreting Epi + NE into the 'Blood (catecholamine transmission)' onto 'α1, α2, β1, β2' at 'Cardiac muscle, vessels' — is the anatomy of pheochromocytoma (a KYP clinical anchor beyond the page): a chromaffin-cell tumor broadcasting catecholamines without waiting for preganglionic ACh. Paroxysmal hypertension, headache, palpitations, and sweating (the M₃ exception again — the sweat is sympathetic in path but cholinergic in execution) are the blood-borne catecholamines addressing plates no single organ's innervation could explain. Management follows the plates in order: irreversible α1 blockade FIRST (phenoxybenzamine — unblocked α stimulation on a β-blocked heart would cause pulmonary edema), then β blockade for rate — the sequence is the receptor alphabet read as a dosing order.",
    },
    {
      subject: "Nephrology (the D1 plate — renal-vascular pharmacology)",
      connection:
        "The diagram's smallest branch — D on 'D1' at 'Renal vasculature' 'smooth muscle' — carries a whole pharmacology: low-dose dopamine ('renal-dose dopamine') was dosed specifically to sit at the D1 plate (renal vasodilation, natriuresis) below its α1 and β1 thresholds, a tactic now largely abandoned on outcome evidence (KYP clinical anchor); fenoldopam, a parenteral D1 agonist, remains in use for hypertensive emergencies — lowering pressure through the renal-vascular plate while natriuresing. The branch is also the diagram's reminder that the sympathetic nervous system speaks three transmitter languages (NE, D, and — via the adrenal — Epi), and that receptor plates, not division labels, determine which drug works where. The sympathomimetics grid scores the same D1 column drug by drug.",
    },
    {
      subject: "Neurology (the somatic limb — the neuromuscular junction and its diseases)",
      connection:
        "The SOMATIC column of the diagram — one 'Voluntary motor nerve', ACh on 'Nm' at the 'Neuromuscular junction', 'Skeletal muscle' — is the neurologist's synapse: myasthenia gravis (autoantibodies against Nm — fluctuating weakness that improves with AChE inhibition, the neostigmine logic of this page's mini-case), Lambert-Eaton (presynaptic Ca²⁺-channel autoantibodies — less ACh released, improved with repetition), botulism (cleaved SNARE proteins — no ACh release at all, autonomic choruses from the same toxin at parasympathetic endings), and the neuromuscular blockers of anesthesia (competitive Nm antagonists). The diagram's division is the differential's first sort: TRUE weakness with intact autonomic function is somatic (Nm); the autonomic plates are a separate pharmacology that the same ACh addresses through different receptors.",
    },
  ],
};
