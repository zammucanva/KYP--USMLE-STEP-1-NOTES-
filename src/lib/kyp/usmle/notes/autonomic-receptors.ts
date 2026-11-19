import type { KypUsMLENote } from "../types";

// Pharmacology — AUTONOMIC DRUGS (PH9): "Autonomic receptors" — pdf 256
// BOTTOM HALF / book 234. SHARED PAGE (the p196 convention): the TOP half of
// pdf 256 is "Drug effect modifications" (a sibling topic,
// drug-effect-modifications); this note quotes ONLY the autonomic-receptors
// block's contiguous lines (from the second "▶ PHARMACOLOGY—AUTONOMIC
// DRUGS" banner onward; part1.txt page-256 lines 66-170).
// Census (pdfimages + VLM attempt): ZERO rasters on pdf 256 — the block is
// ONE large VECTOR WIRING FIGURE (AUTONOMIC [Parasympathetic + Sympathetic
// columns] vs SOMATIC; Brainstem + Spinal cord + Voluntary motor nerve
// origins; preganglionic neuron (long) [parasympathetic] vs (short)
// [sympathetic]; the sympathetic chain; Nn ganglia; ACh on all preganglionic
// fibers + postganglionic parasympathetic; NE on postganglionic sympathetic;
// the adrenal medulla directly innervated, releasing Epi/NE into Blood
// (catecholamine transmission); sweat glands on sympathetic cholinergic
// fibers; M₁/M₂/M₃, M₃-sweat, α1/α2/β1/β2, α1/α2/β1/D1-renal, Nm-NMJ chips)
// + THREE rule lines. The z-ai VLM census was attempted twice
// (scripts/usmle-pipeline/ph9-vlm-census.ts, glm-4.6v) and failed 401
// (missing X-Token) both times — as it did for the ph8 sibling — so the
// census stands on pdfimages + the text layer; the wiring topology is fully
// recoverable from the interleaved labels + the three rules (all carried
// verbatim below).
// Carried VERBATIM from the source (book 234): the three rules — "Pelvic
// splanchnic nerves and CNs III, VII, IX, and X are part of the
// parasympathetic nervous system." / "Adrenal medulla is directly innervated
// by preganglionic sympathetic fibers." / "Sweat glands are part of the
// sympathetic pathway but are innervated by cholinergic fibers (sympathetic
// nervous system results in a “chold” sweat)." — the third rule carries the
// source's OWN TYPO ("chold" for "cold"), preserved here exactly as printed
// and documented, never silently corrected. QUIRKS, documented: (1) the text
// layer interleaves the two-column receptor-target cells — lines print as
// "Smooth muscle, Renal vasculature / gland cells, nerve smooth muscle" and
// "Neuromuscular / ACh junction" (two labels printed side by side on one
// line); the verbatim table below carries the interleaves as printed and
// glosses them. (2) A standalone "D" label prints directly beneath "Sweat
// glands" in the text layer (between the sweat-gland label and the adrenal
// Epi/NE cluster) — it is carried verbatim; the page's only other dopamine
// label is the D1 in the renal-vasculature chip α1, α2, β1, D1, so the D is
// read as the figure's dopamine letter in the sweat-gland band. The KYP
// visual (autonomic-organ-map) and the four ALL-CAPS mnemonics are original.

export const autonomicReceptors: KypUsMLENote = {
  id: "autonomic-receptors",
  title: "Autonomic Receptors: The Wiring Map",
  subtitle:
    "The autonomic-vs-somatic wiring figure (book 234) — ONE diagram that fixes every transmitter and receptor in autonomic pharmacology: AUTONOMIC splits into Parasympathetic (Brainstem origin, Preganglionic neuron (long) → Nn ganglion near the target → Postganglionic neuron (short) → ACh → M₁, M₂, M₃ on smooth muscle, gland cells, nerve terminals, cardiac muscle) and Sympathetic (Spinal cord origin, Preganglionic neuron (short) → Nn in the Sympathetic chain → Postganglionic neuron (long) → NE → α1, α2, β1, β2 on the same target set plus α1, α2, β1, D1 on Renal vasculature smooth muscle), while SOMATIC runs its Voluntary motor nerve straight to the Neuromuscular junction (ACh → Nm on Skeletal muscle). The three printed rules carry the exam's favorite exceptions, verbatim: pelvic splanchnic nerves and CNs III, VII, IX, and X are part of the parasympathetic nervous system; the Adrenal gland (medulla) is directly innervated by preganglionic sympathetic fibers and releases Epi and NE into Blood (catecholamine transmission); and Sweat glands are part of the sympathetic pathway but are innervated by cholinergic fibers (sympathetic nervous system results in a “chold” sweat — the source's own typo, carried verbatim).",
  subject: "Pharmacology",
  system:
    "Section II · High-Yield General Principles — Pharmacology: Autonomic Drugs",
  pilotCategory:
    "The complete wiring figure from the shared page (pdf 256 bottom half / book 234): all 41 printed labels in reading order (the two divisions AUTONOMIC/SOMATIC, the Parasympathetic/Sympathetic columns, Brainstem/Spinal cord/Voluntary motor nerve origins, the long-vs-short preganglionic contrast with its short-vs-long postganglionic mirror, the Nn ganglia and the Sympathetic chain, every ACh/NE/Epi transmitter stamp, the Adrenal gland (medulla) with Blood (catecholamine transmission), the Sweat glands with their M₃, the Neuromuscular junction with Nm, and the full receptor distribution — M₁, M₂, M₃ on smooth muscle, gland cells, nerve terminals, cardiac muscle; M₃ on sweat glands; α1, α2, β1, β2 on sympathetic targets including Cardiac muscle, vessels; α1, α2, β1, D1 on Renal vasculature smooth muscle; Nn in the ganglia and on the adrenal medulla; Nm at the NMJ), plus the THREE printed rules carried VERBATIM (the parasympathetic nerve list, the direct adrenal-medulla line, and the sweat-gland cholinergic exception with the source's own “chold” sweat typo preserved and documented).",
  difficulty: 2,
  readTime: 7,
  sourceRef:
    "First Aid 2026, Part 1 pp. 234–234 (Pharmacology — Autonomic Drugs: Autonomic receptors; the autonomic/somatic wiring figure — AUTONOMIC [Parasympathetic + Sympathetic] vs SOMATIC, the long-vs-short preganglionic contrast, the Nn ganglia and Sympathetic chain, the ACh/NE/Epi transmitter stamps, the Adrenal gland (medulla) with Blood (catecholamine transmission), the sweat-gland cholinergic exception (“chold” sweat, the source's own typo), and the M₁/M₂/M₃, α/β/D₁/Nm receptor chips; the three printed rules)",
  tags: [
    "autonomic receptors",
    "autonomic nervous system",
    "parasympathetic",
    "sympathetic",
    "somatic nervous system",
    "preganglionic neuron",
    "postganglionic neuron",
    "preganglionic neuron (long)",
    "preganglionic neuron (short)",
    "sympathetic chain",
    "autonomic ganglia",
    "Nn receptors",
    "nicotinic neuronal receptors",
    "Nm receptors",
    "neuromuscular junction",
    "acetylcholine",
    "ACh",
    "norepinephrine",
    "NE",
    "epinephrine",
    "catecholamine transmission",
    "muscarinic receptors",
    "M1",
    "M2",
    "M3",
    "adrenergic receptors",
    "alpha-1",
    "alpha-2",
    "beta-1",
    "beta-2",
    "D1 receptors",
    "renal vasculature",
    "sweat glands",
    "sympathetic cholinergic fibers",
    "chold sweat",
    "adrenal medulla",
    "pelvic splanchnic nerves",
    "CN III",
    "CN VII",
    "CN IX",
    "CN X",
    "craniosacral outflow",
    "ganglionic blockers",
    "two-neuron chain",
  ],
  core: {
    what:
      "THE WIRING FIGURE (book 234, every label verbatim in reading order): the figure's top level splits AUTONOMIC — Parasympathetic (origin Brainstem) and Sympathetic (origin Spinal cord) — from SOMATIC (Voluntary motor nerve). The PARASYMPATHETIC arm runs a Preganglionic neuron (long) to an Nn ganglion sitting near its target, then a Postganglionic neuron (short) that releases ACh onto M₁, M₂, M₃ of its target: Smooth muscle, gland cells, nerve terminals, cardiac muscle. The SYMPATHETIC arm runs a Preganglionic neuron (short) to an Nn ganglion in the Sympathetic chain near the cord, then a Postganglionic neuron (long) that releases NE onto α1, α2, β1, β2 of the same target set (Cardiac muscle, vessels included) and onto α1, α2, β1, D1 of Renal vasculature smooth muscle. The ADRENAL LINE is the figure's first exception: the Adrenal gland (medulla) — with its own Nn — is directly innervated by a preganglionic sympathetic fiber and releases Epi and NE into Blood (catecholamine transmission). The SWEAT GLAND is the second: Sweat glands are part of the sympathetic pathway but are innervated by cholinergic fibers (ACh onto M₃). The SOMATIC arm is the third: the Voluntary motor nerve releases ACh onto Nm at the Neuromuscular junction of Skeletal muscle — one neuron, no ganglion. THE THREE RULES, verbatim: “Pelvic splanchnic nerves and CNs III, VII, IX, and X are part of the parasympathetic nervous system.” · “Adrenal medulla is directly innervated by preganglionic sympathetic fibers.” · “Sweat glands are part of the sympathetic pathway but are innervated by cholinergic fibers (sympathetic nervous system results in a “chold” sweat).”",
    why:
      "This single figure is the lookup table every autonomic drug question routes through, because it fixes three things at once: WHO TALKS (each division is a two-neuron chain — preganglionic from the CNS, synapsing in an Nn ganglion, postganglionic to the organ), WITH WHICH TRANSMITTER (ACh on every preganglionic fiber in both divisions; ACh again on the parasympathetic postganglionic fiber; NE on the sympathetic postganglionic fiber), and ON WHICH RECEPTOR (Nn in every ganglion and on the adrenal medulla; M₁, M₂, M₃ on parasympathetic targets; α1, α2, β1, β2 on sympathetic targets; α1, α2, β1, D1 on the renal vasculature; Nm at the NMJ). Pharmacology is then pure geography: a ganglionic (Nn) blocker silences BOTH divisions at their ganglia — and also the adrenal medulla's catecholamine release and the sweat line, because those ride preganglionic fibers through Nn — but spares the NMJ, because skeletal muscle listens at Nm, not Nn. Muscarinic blockers dry the sweat glands (M₃) without touching skeletal muscle. Adrenergic drugs act wherever the NE stamps point (α/β chips, plus D1 on renal vasculature). The fiber-length pairing encodes the anatomy — long preganglionic = parasympathetic (ganglion on or near the target), short preganglionic = sympathetic (ganglion up in the chain near the cord) — which is why the two divisions can be told apart on sight in any diagram.",
    keyIdea:
      "Read every autonomic question through five gates. GATE 1 — WHICH COLUMN? AUTONOMIC (Parasympathetic from the Brainstem, Sympathetic from the Spinal cord) or SOMATIC (Voluntary motor nerve → NMJ)? GATE 2 — WHICH FIBER IS LONG? Long preganglionic + short postganglionic = parasympathetic; short preganglionic (to the Sympathetic chain) + long postganglionic = sympathetic. GATE 3 — WHICH TRANSMITTER? Every preganglionic fiber releases ACh; the postganglionic fiber splits the divisions — ACh (parasympathetic) vs NE (sympathetic). GATE 4 — WHICH RECEPTOR CHIP? Nn in the ganglia and on the adrenal medulla; M₁, M₂, M₃ on parasympathetic smooth muscle/gland cells/nerve terminals/cardiac muscle; M₃ on sweat glands; α1, α2, β1, β2 on sympathetic targets including cardiac muscle, vessels; α1, α2, β1, D1 on renal vasculature smooth muscle; Nm at the neuromuscular junction on skeletal muscle. GATE 5 — WHICH EXCEPTION? The adrenal medulla is directly innervated by preganglionic sympathetic fibers and releases Epi/NE into Blood (catecholamine transmission); sweat glands ride the sympathetic pathway but on cholinergic fibers (ACh → M₃, the “chold” sweat rule); and the somatic NMJ is one ACh fiber onto Nm with no ganglion at all.",
  },
  mechanisms: [
    {
      id: "two-neuron-chain-map",
      title:
        "The two-neuron chain: how one wiring rule assigns ACh or NE to every autonomic target",
      context:
        "The wiring figure's core rule set (book 234) — one preganglionic neuron, one Nn ganglion, one postganglionic neuron, one transmitter per arm",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A CNS command leaves for an organ",
            sublabel:
              "Input — the figure's three origins: Brainstem (parasympathetic), Spinal cord (sympathetic), and the Voluntary motor nerve (somatic). Autonomic commands always travel a TWO-neuron chain (preganglionic → Nn ganglion → postganglionic); somatic commands travel a ONE-neuron path.",
            variant: "input",
          },
          {
            id: "para",
            label: "PARASYMPATHETIC — Preganglionic neuron (long) → Nn near the target → Postganglionic neuron (short) → ACh",
            sublabel:
              "Brainstem (and the sacral pelvic splanchnic nerves) send a LONG preganglionic fiber that synapses in a ganglion on or near the target; the SHORT postganglionic fiber releases ACh onto M₁, M₂, M₃ of smooth muscle, gland cells, nerve terminals, cardiac muscle. Both of this arm's fibers are cholinergic.",
            variant: "process",
          },
          {
            id: "sym",
            label: "SYMPATHETIC — Preganglionic neuron (short) → Nn in the Sympathetic chain → Postganglionic neuron (long) → NE",
            sublabel:
              "The Spinal cord sends a SHORT preganglionic fiber that synapses in an Nn ganglion of the Sympathetic chain near the cord; the LONG postganglionic fiber travels out and releases NE onto α1, α2, β1, β2 of smooth muscle, gland cells, nerve terminals, cardiac muscle (Cardiac muscle, vessels included) and onto α1, α2, β1, D1 of Renal vasculature smooth muscle. ACh in the ganglion, NE at the organ.",
            variant: "process",
          },
          {
            id: "output",
            label: "The pharmacology payoff — three drug shelves, one map",
            sublabel:
              "Output — (1) Nn ganglionic blockers shut BOTH divisions at their ganglia (and the adrenal medulla's Nn line) — they abolish ganglionic transmission, not the receptors beyond it. (2) Muscarinic drugs act at the parasympathetic neuroeffector junction and the sweat gland (M₁, M₂, M₃ / M₃). (3) Adrenergic drugs act at the sympathetic NE junctions (α1, α2, β1, β2; D1 renal). The receptor chips on each target name exactly where each shelf works.",
            variant: "output",
          },
        ],
        edges: [
          {
            from: "trigger",
            to: "para",
            label: "Brainstem → long preganglionic (craniosacral: CNs III, VII, IX, X + pelvic splanchnic)",
          },
          {
            from: "trigger",
            to: "sym",
            label: "Spinal cord → short preganglionic → Sympathetic chain",
          },
          { from: "para", to: "output", label: "ACh → M₁, M₂, M₃ (postganglionic ACh)" },
          { from: "sym", to: "output", label: "NE → α1, α2, β1, β2 (α1, α2, β1, D1 renal)" },
        ],
      },
    },
    {
      id: "the-three-exceptions-map",
      title:
        "The three exceptions: the adrenal medulla, the sweat glands, and the somatic NMJ",
      context:
        "The figure's three rule lines (book 234) — each one is a printed rule and an exam favorite, carried verbatim",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A command leaves the Spinal cord (or runs the somatic column)",
            sublabel:
              "Input — default routing says: sympathetic preganglionic → Sympathetic chain (Nn) → postganglionic NE → target. The figure prints exactly three places the default breaks.",
            variant: "input",
          },
          {
            id: "adrenal",
            label: "EXCEPTION 1 — the Adrenal gland (medulla) is directly innervated by preganglionic sympathetic fibers",
            sublabel:
              "The adrenal medulla is a modified postganglionic neuron: a preganglionic sympathetic fiber reaches it DIRECTLY (ACh onto its Nn), and it secretes Epi and NE into Blood (catecholamine transmission) — a hormone release, not a synapse on an organ cell. Printed rule, verbatim: “Adrenal medulla is directly innervated by preganglionic sympathetic fibers.”",
            variant: "process",
          },
          {
            id: "sweat",
            label: "EXCEPTION 2 — Sweat glands: sympathetic pathway, cholinergic fibers",
            sublabel:
              "Sweat glands are part of the sympathetic pathway but are innervated by cholinergic fibers: the postganglionic sympathetic fiber to the sweat gland releases ACh onto M₃. Printed rule, verbatim (typo included): “Sweat glands are part of the sympathetic pathway but are innervated by cholinergic fibers (sympathetic nervous system results in a “chold” sweat).”",
            variant: "process",
          },
          {
            id: "nmj",
            label: "EXCEPTION 3 — the SOMATIC Neuromuscular junction",
            sublabel:
              "The SOMATIC column bypasses the autonomic two-neuron chain entirely: the Voluntary motor nerve releases ACh onto Nm at the Neuromuscular junction of Skeletal muscle — one neuron, no ganglion, no autonomic receptor on the muscle.",
            variant: "target",
          },
          {
            id: "output",
            label: "Why the exceptions decide the drug questions",
            sublabel:
              "Output — Nn ganglionic blockade silences the adrenal medulla's catecholamine release (its Nn line is preganglionic) and the sweat line (its preganglionic fiber passes through a chain ganglion) but SPARES the NMJ (Nm ≠ Nn). Muscarinic blockade stops sweating (M₃ on the sweat gland) without touching skeletal muscle. Neuromuscular blockers paralyze Skeletal muscle (Nm) without silencing autonomic ganglia. And low-dose dopamine dilates only where the D1 chip sits — the renal vasculature.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "adrenal", label: "direct preganglionic line (ACh → Nn on chromaffin cells)" },
          { from: "trigger", to: "sweat", label: "through the chain, then ACh (not NE) → M₃" },
          { from: "trigger", to: "nmj", label: "somatic column: one ACh fiber → Nm" },
          { from: "adrenal", to: "output", label: "Epi + NE → Blood (catecholamine transmission)" },
          { from: "sweat", to: "output", label: "ACh → M₃ on Sweat glands (the “chold” sweat)" },
          { from: "nmj", to: "output", label: "ACh → Nm on Skeletal muscle" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "autonomic-organ-map",
      title: "The autonomic organ map (an original KYP redraw)",
      caption:
        "An original KYP redraw of the source page's wiring figure (book 234): three columns from a CNS band down to the organs — PARASYMPATHETIC (Brainstem glyph → a LONG preganglionic fiber → Nn chip near the target → short postganglionic fiber with an ACh chip → target cell carrying M₁, M₂, M₃), SYMPATHETIC (Spinal cord glyph → a SHORT preganglionic fiber → Nn chip in a Sympathetic-chain glyph → LONG postganglionic fiber with an NE chip → targets carrying α1, α2, β1, β2, plus a renal-vasculature glyph carrying α1, α2, β1, D1), and SOMATIC (Voluntary motor nerve → ACh chip → Nm chip at a Neuromuscular-junction glyph on Skeletal muscle) — plus the two flagged sympathetic exceptions (the adrenal medulla's DIRECT preganglionic line releasing Epi/NE chips into a Blood (catecholamine transmission) vessel glyph; and the sweat gland's ACh exception with its M₃ chip), the transmitter chips on every fiber, and the three-rules band with the “chold” sweat quote attributed to the source.",
      notice:
        "Census (pdfimages; VLM attempted twice on scripts/usmle-pipeline/ph9-vlm-census.ts and failed 401 missing X-Token both times): ZERO raster images on pdf 256 — the Autonomic receptors block is ONE large VECTOR wiring figure plus three rule lines. The figure is REDRAWN here as original KYP vector art (no source artwork reproduced); all printed labels are quoted verbatim in the table block below. The source's own “chold” sweat typo is carried verbatim with attribution; the four ALL-CAPS mnemonics in the note are original KYP memory layer.",
    },
    {
      kind: "table",
      title:
        "Book 234 — the Autonomic receptors wiring figure: every label as printed (verbatim, reading order)",
      intro:
        "The wiring figure's labels exactly as the text layer prints them, in physical order, grouped by wiring station (the clusters are the contiguous printed lines). Two interleaves are carried as printed: the two-column receptor-target cells print side by side on shared lines (“Smooth muscle, Renal vasculature / gland cells, nerve smooth muscle” and “Neuromuscular / ACh junction”), and a standalone “D” label prints directly beneath “Sweat glands”. The three rule lines close the figure, verbatim — including the source's own “chold” typo.",
      columns: [
        "Figure labels (verbatim, printed order)",
        "What the cluster marks",
      ],
      rows: [
        [
          "▶ PHARMACOLOGY—AUTONOMIC DRUGS · Autonomic receptors",
          "The subsection banner and heading — the SECOND banner on the shared page (the first belongs to Drug effect modifications, the sibling topic in the top half)",
        ],
        [
          "AUTONOMIC · Parasympathetic · SOMATIC · Sympathetic",
          "The figure's top level: AUTONOMIC splits into the Parasympathetic and Sympathetic columns; SOMATIC stands apart",
        ],
        [
          "Brainstem · Preganglionic neuron (long)",
          "The parasympathetic origin and its LONG preganglionic fiber (the ganglion sits near the target)",
        ],
        [
          "Spinal cord · Voluntary motor nerve",
          "The Spinal cord origin of the sympathetic column, and the SOMATIC column's Voluntary motor nerve",
        ],
        [
          "Preganglionic neuron (short) · Nn",
          "The sympathetic SHORT preganglionic fiber ending on a nicotinic-neuronal (Nn) ganglion",
        ],
        [
          "ACh · ACh · ACh · Nn · ACh",
          "The preganglionic transmitter stamps — ACh on every preganglionic fiber, with Nn in the ganglia",
        ],
        [
          "Adrenal gland (medulla) · Sympathetic chain · Nn · Blood (catecholamine transmission)",
          "The adrenal medulla with its own Nn (directly innervated), the Sympathetic chain of Nn ganglia, and the Blood (catecholamine transmission) end-target",
        ],
        [
          "ACh · Postganglionic neuron (short) · Postganglionic neuron (long) · NE",
          "The postganglionic mirror: parasympathetic Postganglionic neuron (short) [ACh] vs sympathetic Postganglionic neuron (long) [NE]",
        ],
        [
          "ACh · ACh",
          "The remaining ACh stamps — the parasympathetic postganglionic fiber at its target, and the sweat gland's cholinergic sympathetic fiber",
        ],
        [
          "M₁, M₂, M₃ · M₃",
          "Muscarinic chips: M₁, M₂, M₃ on the parasympathetic target; M₃ on the Sweat glands",
        ],
        [
          "Smooth muscle, gland cells, nerve terminals, cardiac muscle · Sweat glands · D",
          "The parasympathetic target cell; the Sweat-gland target; and a standalone D label that prints directly beneath “Sweat glands” (carried verbatim — the figure's dopamine letter in the sweat-gland band; its unambiguous sibling is the D1 of the renal chip below)",
        ],
        [
          "NE · Epi · NE",
          "The adrenal medulla's catecholamine output into the blood — NE and Epi",
        ],
        [
          "α1, α2, β1, β2 · α1, α2, β1, D1",
          "Adrenergic chips: α1, α2, β1, β2 on sympathetic targets; α1, α2, β1, D1 on the renal vasculature",
        ],
        [
          "Smooth muscle, Renal vasculature · gland cells, nerve smooth muscle · terminals, · cardiac muscle",
          "The sympathetic target cell INTERLEAVED (as printed) with the Renal vasculature smooth muscle label — two side-by-side columns sharing lines in the text layer",
        ],
        [
          "Neuromuscular · ACh junction",
          "The SOMATIC Neuromuscular junction with its ACh stamp — another two-label interleave (“Neuromuscular junction” + “ACh”)",
        ],
        [
          "α1, α2, β1, β2 · Nm · Cardiac muscle, vessels · Skeletal muscle",
          "The adrenergic chips on the Cardiac muscle, vessels target; the Nm chip at the NMJ; and the somatic end-target, Skeletal muscle",
        ],
        [
          "Pelvic splanchnic nerves and CNs III, VII, IX, and X are part of the parasympathetic nervous system.",
          "RULE 1 (verbatim) — the parasympathetic (craniosacral) nerve list",
        ],
        [
          "Adrenal medulla is directly innervated by preganglionic sympathetic fibers.",
          "RULE 2 (verbatim) — the direct adrenal line (no intervening chain synapse onto a postganglionic neuron)",
        ],
        [
          "Sweat glands are part of the sympathetic pathway but are innervated by cholinergic fibers (sympathetic nervous system results in a “chold” sweat).",
          "RULE 3 (verbatim) — the sympathetic-cholinergic exception; the parenthetical carries the source's OWN TYPO (“chold” for “cold”), preserved exactly as printed and documented — never silently corrected",
        ],
      ],
      caption:
        "Two divisions, one wiring law: ACh in every ganglion (Nn), ACh or NE on the postganglionic fiber depending on the division — and three printed exceptions (the adrenal medulla's direct line, the sweat gland's cholinergic fiber, the somatic Nm junction) that pharmacology questions are built on.",
    },
    {
      kind: "steps",
      title:
        "How to read the wiring figure — the five-gate protocol (book 234, distilled)",
      intro:
        "Any autonomic diagram, drug effect, or nerve list resolves through the same five gates, in this order.",
      steps: [
        {
          label: "GATE 1 — WHICH COLUMN?",
          detail:
            "AUTONOMIC (Parasympathetic from the Brainstem, Sympathetic from the Spinal cord — involuntary, two-neuron chains) or SOMATIC (Voluntary motor nerve — voluntary, one neuron)? The figure prints SOMATIC as a separate column precisely because skeletal muscle is NOT autonomic.",
        },
        {
          label: "GATE 2 — WHICH FIBER IS LONG?",
          detail:
            "Preganglionic neuron (long) + Postganglionic neuron (short) = parasympathetic — the ganglion sits on or near the target. Preganglionic neuron (short) + Postganglionic neuron (long) = sympathetic — the ganglion sits in the Sympathetic chain near the cord. Fiber length and ganglion position are two views of the same fact.",
        },
        {
          label: "GATE 3 — WHICH TRANSMITTER?",
          detail:
            "Every preganglionic fiber releases ACh (both divisions — that is why a single Nn blocker hits both). The postganglionic fiber splits them: parasympathetic ACh, sympathetic NE. The figure stamps every fiber: ACh on all preganglionics and on the postganglionic parasympathetic; NE on the postganglionic sympathetic — with the sweat gland's ACh the one stamped exception.",
        },
        {
          label: "GATE 4 — WHICH RECEPTOR CHIP?",
          detail:
            "Nn: every autonomic ganglion, and the adrenal medulla's chromaffin cells. M₁, M₂, M₃: parasympathetic smooth muscle, gland cells, nerve terminals, cardiac muscle. M₃: Sweat glands. α1, α2, β1, β2: sympathetic targets, including Cardiac muscle, vessels. α1, α2, β1, D1: Renal vasculature smooth muscle. Nm: the Neuromuscular junction on Skeletal muscle.",
        },
        {
          label: "GATE 5 — WHICH EXCEPTION?",
          detail:
            "Adrenal medulla: directly innervated by preganglionic sympathetic fibers → releases Epi/NE into Blood (catecholamine transmission) — blocked by Nn blockade, mimicked by exogenous catecholamines. Sweat glands: sympathetic pathway, cholinergic fibers — ACh onto M₃ (the “chold” sweat rule) — blocked by muscarinic blockade, not by adrenergic blockade. NMJ: ACh onto Nm — spared by ganglionic blockers, blocked by neuromuscular blockers.",
        },
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title: "The ganglionic-blocker reasoning the figure hands you for free",
      body:
        "A drug that blocks Nn silences every autonomic ganglion — BOTH divisions at once — because every preganglionic fiber, parasympathetic and sympathetic alike, releases ACh onto Nn. Follow the wiring to predict what falls and what survives: sympathetic NE release onto vascular α1 falls (the postganglionic neuron is downstream of its chain ganglion) → BP falls; parasympathetic postganglionic ACh onto bowel M₃ falls (same logic); the adrenal medulla's catecholamine release falls too, because its chromaffin cells are driven by the DIRECT preganglionic line through Nn; and sweating falls, because the sweat line's preganglionic fiber passes through a chain ganglion before its cholinergic postganglionic fiber. What SURVIVES: the neuromuscular junction (somatic Nm, not Nn — the patient still moves), and every postsynaptic receptor itself — a DIRECT-ACTING agonist (pilocarpine at M₃, phenylephrine at α1, epinephrine at β) still works, because the receptor and effector sit beyond the blocked synapse. Transmission is gone; the target hardware is intact.",
    },
    {
      kind: "callout",
      variant: "memory",
      title: "Mnemonic and typo provenance — what is the source's and what is ours",
      body:
        "The page prints exactly three rule lines (the parasympathetic nerve list, the direct adrenal-medulla line, the sweat-gland cholinergic exception); the third rule's parenthetical — sympathetic nervous system results in a “chold” sweat — is the source's OWN TYPO (“chold” for “cold”), carried verbatim, in quotes, and attributed, never silently corrected. Everything ALL-CAPS in this note's memory layer is original KYP: EVERY PRE FIRES ACh · PARA LONG PRE, SYM SHORT PRE · SYMPATHETIC WIRING, CHOLINERGIC SWEAT · GANGLION Nn, END-PLATE Nm, KIDNEY D1.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "An exam figure shows the autonomic wiring: a fiber leaves the spinal cord, synapses in a chain ganglion, and a long second fiber reaches a target cell bearing α1, α2, β1, and β2 chips; the question asks which transmitter the second fiber releases.",
        discriminator:
          "Short preganglionic fiber + Sympathetic chain + long postganglionic fiber = the sympathetic arm; the target carries adrenergic chips",
        concept: "Postganglionic sympathetic fibers release NE",
        answer:
          "NE — the sympathetic preganglionic neuron (short) releases ACh onto Nn in the Sympathetic chain, and the Postganglionic neuron (long) releases NE onto α1, α2, β1, β2 (α1, α2, β1, D1 on renal vasculature). The one stamped exception: the postganglionic sympathetic fiber to the Sweat glands releases ACh onto M₃.",
      },
      {
        stem: "A 58-year-old man with an aortic dissection and severe hypertension receives a continuous infusion of a nicotinic ganglionic (Nn) blocking agent; his blood pressure falls, his skin becomes warm and dry, and he develops ileus and urinary retention. The team asks which of his synaptic transmissions remain fully intact.",
        discriminator:
          "A drug acting at Nn — every autonomic ganglion uses the same receptor, so both divisions fall together, but the somatic NMJ does not",
        concept: "Ganglionic (Nn) blockade — what it silences and what it spares",
        answer:
          "Nn blockade silences BOTH divisions' ganglia (all preganglionic fibers release ACh onto Nn), the adrenal medulla's catecholamine release (direct preganglionic line onto Nn), and the sweat line (preganglionic fiber through the chain ganglion) — warm, dry skin, ileus, retention, hypotension. The neuromuscular junction REMAINS intact: the Voluntary motor nerve releases ACh onto Nm at the NMJ, and Nm ≠ Nn. Direct-acting agonists also still work — the postsynaptic receptors (M₃, α1, β, D1) sit beyond the blocked synapse.",
      },
      {
        stem: "A 72-year-old woman on multiple anticholinergic medications presents with flushing, dry mouth, blurred vision, urinary retention, and markedly dry skin; her temperature is 39.2°C. The team is puzzled because sweating is a sympathetic function and the drug is an antimuscarinic.",
        discriminator:
          "Dry skin (anhidrosis) + hyperthermia on a MUSCARINIC blocker — because the sweat gland's sympathetic fiber is cholinergic",
        concept: "Sweat glands: sympathetic pathway, cholinergic innervation (M₃)",
        answer:
          "Sweat glands are part of the sympathetic pathway but are innervated by cholinergic fibers: the postganglionic sympathetic fiber to the sweat gland releases ACh onto M₃ (the printed rule — sympathetic nervous system results in a “chold” sweat, the source's own typo, carried verbatim). An antimuscarinic therefore blocks sweating (anhidrosis → overheating, “hot as a hare”) despite targeting a parasympathetic-class receptor — the exam's classic demonstration that the sweat gland's receptor, not its division, decides the drug effect.",
      },
      {
        stem: "A 39-year-old man has episodic pounding headaches, drenching sweats, and paroxysmal hypertension; plasma metanephrines are elevated and abdominal imaging shows a right adrenal mass. The question asks how catecholamines reach the circulation from this gland.",
        discriminator:
          "An adrenal-medullary mass releasing catecholamines into the blood — the gland is wired by a DIRECT preganglionic sympathetic line",
        concept: "Adrenal medulla: directly innervated by preganglionic sympathetic fibers",
        answer:
          "The Adrenal gland (medulla) is a modified postganglionic neuron that is DIRECTLY innervated by preganglionic sympathetic fibers (ACh onto its Nn) and releases Epi and NE into Blood (catecholamine transmission) — the printed rule, verbatim: “Adrenal medulla is directly innervated by preganglionic sympathetic fibers.” No chain synapse onto a conventional postganglionic neuron intervenes; the medulla secretes hormone into the bloodstream rather than synapsing on an organ cell.",
      },
      {
        stem: "A patient in septic shock receives a low-dose dopamine infusion intended to preserve renal perfusion; the question asks which receptor on the renal vasculature mediates the intended vasodilation.",
        discriminator:
          "Renal vasculature is the figure's ONLY D1-carrying target — its chip reads α1, α2, β1, D1",
        concept: "D1 receptors on renal vasculature smooth muscle",
        answer:
          "D1 — the wiring figure gives the renal vasculature its own chip, α1, α2, β1, D1 (distinct from the generic sympathetic target's α1, α2, β1, β2): low-dose dopamine activates D1 on Renal vasculature smooth muscle → vasodilation → preserved renal blood flow. This is the one place on the map where a dopamine receptor is printed, and it is why “renal-dose dopamine” targets the kidney and not the systemic vasculature.",
      },
      {
        stem: "An anatomy question lists four nerves and asks which carry preganglionic parasympathetic fibers: the pelvic splanchnic nerves and CNs III, VII, IX, and X.",
        discriminator:
          "The printed rule names the parasympathetic (craniosacral) nerve list exactly",
        concept: "The parasympathetic nerve list (rule 1)",
        answer:
          "All of them — the printed rule, verbatim: “Pelvic splanchnic nerves and CNs III, VII, IX, and X are part of the parasympathetic nervous system.” These are the cranial (III ciliary, VII lacrimal/submandibular/sublingual, IX parotid, X thoracoabdominal viscera) and sacral (pelvic splanchnic, S2–S4) outflows whose LONG preganglionic fibers run to ganglia near their targets.",
      },
    ],
    traps: [
      {
        a: "“All postganglionic sympathetic fibers release NE”",
        b: "The sweat gland's postganglionic sympathetic fiber",
        whyConfused:
          "The sympathetic arm is taught as the NE arm, and its Postganglionic neuron (long) does release NE at every ordinary target",
        keyDifference:
          "The printed exception: Sweat glands are part of the sympathetic pathway but are innervated by cholinergic fibers — their postganglionic sympathetic fiber releases ACh onto M₃ (sympathetic nervous system results in a “chold” sweat, the source's own typo carried verbatim)",
        clue:
          "Sweat + a muscarinic drug question → think ACh/M₃, not NE; anticholinergics cause anhidrosis, and botulinum toxin stops sweating by blocking ACh release at these cholinergic sympathetic fibers",
      },
      {
        a: "Preganglionic neuron (long) — parasympathetic",
        b: "Preganglionic neuron (short) — sympathetic",
        whyConfused:
          "Both labels sit on the same figure and differ by one word; the natural guess is that the “more complex” sympathetic division gets the longer first fiber",
        keyDifference:
          "PARASYMPATHETIC runs the LONG preganglionic fiber (the ganglion sits on or near the target, so the Postganglionic neuron is short); SYMPATHETIC runs the SHORT preganglionic fiber (the ganglion sits in the Sympathetic chain near the cord, so the Postganglionic neuron is long)",
        clue:
          "Ganglion position tells you the division: ganglion hugging the target cell = parasympathetic; ganglion up in the chain = sympathetic",
      },
      {
        a: "The adrenal medulla as an ordinary sympathetic target",
        b: "The adrenal medulla's actual wiring",
        whyConfused:
          "It sits among the sympathetic targets in the figure and releases catecholamines, so it is easy to file as a postganglionically-innervated organ",
        keyDifference:
          "The printed rule: “Adrenal medulla is directly innervated by preganglionic sympathetic fibers.” It is a MODIFIED POSTGANGLIONIC NEURON — the preganglionic fiber reaches it directly (ACh onto its Nn), and it secretes Epi and NE into Blood (catecholamine transmission) rather than synapsing on a target cell",
        clue:
          "No chain ganglion between cord and gland on the diagram → the direct line; and Nn blockade suppresses stress catecholamine release, which an ordinary sympathetic target would not reveal",
      },
      {
        a: "Nn (nicotinic neuronal) receptors",
        b: "Nm (nicotinic muscle) receptors",
        whyConfused:
          "Both are nicotinic acetylcholine receptors, both are activated by ACh, and their names differ by one letter",
        keyDifference:
          "Nn sits in EVERY autonomic ganglion (parasympathetic and sympathetic) and on the adrenal medulla's chromaffin cells — the target of ganglionic blockers; Nm sits at the Neuromuscular junction on Skeletal muscle — the target of neuromuscular blocking agents",
        clue:
          "Ganglion or adrenal medulla → Nn; motor end plate on skeletal muscle → Nm; a ganglionic blocker paralyzes neither a voluntary muscle nor a direct-acting agonist's effect",
      },
      {
        a: "The generic sympathetic target's chip: α1, α2, β1, β2",
        b: "The renal vasculature's chip: α1, α2, β1, D1",
        whyConfused:
          "Both are four-receptor adrenergic chips printed on the same figure, and β2 is memorized as “the vascular β”",
        keyDifference:
          "The generic sympathetic target (smooth muscle, gland cells, nerve terminals, cardiac muscle; and Cardiac muscle, vessels) carries α1, α2, β1, β2 — but the Renal vasculature smooth muscle carries α1, α2, β1, D1: β1 with DOPAMINE'S D1, not β2",
        clue:
          "A question about renal vasodilation by low-dose dopamine → D1 on renal vasculature; the figure prints D1 in exactly one place",
      },
    ],
    pivots: [
      {
        lookAlike: "A labeled autonomic wiring diagram in the stem",
        differentiator:
          "Route by the five gates: column (AUTONOMIC Parasympathetic/Sympathetic vs SOMATIC) → fiber length (long pre = parasympathetic, short pre = sympathetic) → transmitter (all pre = ACh; post: ACh parasympathetic, NE sympathetic) → receptor chip (Nn ganglia, M/M₃ targets, α/β/D₁ chips, Nm NMJ) → exception (adrenal direct line, sweat ACh, somatic Nm)",
        correctPath:
          "Identify the fiber first and read its two ends: the synapse it leaves (Nn ganglion? direct chromaffin line? NMJ?) and the chip it lands on (M₁/M₂/M₃, M₃, α1/α2/β1/β2, α1/α2/β1/D1, Nm) — the pair names the transmitter and the drug that acts there",
      },
      {
        lookAlike: "A drug said to block “all autonomic ganglia”",
        differentiator:
          "Everything downstream of an Nn synapse loses its nerve-driven traffic — both divisions, the adrenal medulla's catecholamine release, and the sweat line — while the NMJ (Nm), the postsynaptic receptors, and direct-acting agonists all remain functional",
        correctPath:
          "Predict effect by exception: sympathetic vascular tone falls (hypotension), parasympathetic visceral traffic falls (ileus, retention, tachycardia), stress catecholamine release falls (Nn on the medulla), sweating falls (chain ganglion on the sweat line) — but voluntary movement survives, and exogenous agonists still work",
      },
      {
        lookAlike: "Anhidrosis or hyperthermia on an anticholinergic drug",
        differentiator:
          "A muscarinic blocker drying the SKIN looks paradoxical only if sweating is filed as “sympathetic = adrenergic” — the sweat gland rides the sympathetic pathway but on a CHOLINERGIC fiber with M₃ receptors",
        correctPath:
          "Apply rule 3 verbatim — sweat glands are part of the sympathetic pathway but are innervated by cholinergic fibers (sympathetic nervous system results in a “chold” sweat) — so antimuscarinics cause anhidrosis and hyperthermia while adrenergic blockers do not",
      },
    ],
    miniCase: {
      vignette:
        "A 58-year-old man with an acute type B aortic dissection and severe hypertension is admitted to the ICU. Because first-line agents fail to control his blood pressure, he is started on a continuous infusion of trimethaphan, a nicotinic ganglionic (Nn) blocker. Within the hour his mean arterial pressure falls toward target, his skin is warm and dry, bowel sounds are absent, and a bladder scan shows retention. The medical student rotating in the unit asks which of the patient's cholinergic synapses are still transmitting normally.",
      question:
        "Which synaptic transmission remains fully intact during Nn ganglionic blockade?",
      options: [
        {
          label:
            "The somatic neuromuscular junction — the Voluntary motor nerve still releases ACh onto Nm receptors on Skeletal muscle",
          text: "One column of the figure never touches an autonomic ganglion.",
          correct: true,
          why:
            "Correct. The SOMATIC arm of the wiring figure is a ONE-neuron path: the Voluntary motor nerve releases ACh onto Nm at the Neuromuscular junction of Skeletal muscle. Nn and Nm are different nicotinic receptors at different synapses — a ganglionic (Nn) blocker has no affinity for the motor end plate, so neuromuscular transmission and voluntary movement are fully preserved. The figure's three divisions map three receptor geographies: Nn in every autonomic ganglion (both divisions) and on the adrenal medulla, M₁/M₂/M₃ (and the sweat gland's M₃) at parasympathetic-class neuroeffector junctions, Nm at the NMJ — and the drug's target decides which synapses fall.",
        },
        {
          label:
            "The adrenal medulla's catecholamine response to stress — chromaffin cells are postganglionic and release Epi/NE directly, so they bypass the blocked receptor",
          text: "The gland is a modified postganglionic neuron, so the ganglion is skipped.",
          why:
            "Tempting but backwards. The printed rule, verbatim: “Adrenal medulla is directly innervated by preganglionic sympathetic fibers.” The preganglionic fiber synapses DIRECTLY onto the chromaffin cells — at NICOTINIC NEURONAL (Nn) receptors — which is precisely why the medulla is vulnerable to ganglionic blockade: with Nn blocked, the ACh signal cannot reach the chromaffin cells, and catecholamine release into Blood (catecholamine transmission) falls. The medulla is a modified POSTganglionic neuron, but it is still driven through an Nn synapse — being “postganglionic” does not protect it; it defines it.",
        },
        {
          label:
            "Sympathetic NE release onto vascular α1 receptors — the postganglionic fiber lies beyond the ganglion and is therefore spared",
          text: "Downstream of the block, the fiber should still fire.",
          why:
            "Misreads the direction of transmission. The Postganglionic neuron (long) sits DOWNSTREAM of its chain ganglion: it fires only when the preganglionic fiber's ACh excites the Nn synapse in the Sympathetic chain. With Nn blocked, no action potentials reach the postganglionic neuron, so NE release onto vascular α1, α2, β1 (and onto every other sympathetic target) falls — that is exactly why this patient's blood pressure fell on the infusion. The receptor is intact; the traffic to it is not.",
        },
        {
          label:
            "Cholinergic transmission to the Sweat glands — the sweat gland's fibers are cholinergic, and cholinergic synapses are not nicotinic targets",
          text: "An M₃ synapse should escape an Nn blocker.",
          why:
            "Conflates the postganglionic neurotransmitter with the preganglionic synapse. The sweat gland is indeed innervated by a CHOLINERGIC postganglionic sympathetic fiber (ACh onto M₃ — the “chold” sweat rule), but that postganglionic fiber is still activated through a preganglionic fiber's Nn synapse in the chain. Ganglionic blockade therefore silences the sweat line — this patient's warm, DRY skin is the clinical proof. What survives at the sweat gland is the M₃ receptor itself (a direct muscarinic agonist would still provoke secretion), not the nerve-driven transmission.",
        },
        {
          label:
            "The parasympathetic postganglionic fiber's ACh release onto bowel M₃ receptors — muscarinic synapses lie beyond the blocked ganglion, so vagal traffic to the gut continues",
          text: "The M₃ junction is distal to the block, so it should still work.",
          why:
            "The same error as the vascular option, wearing a parasympathetic coat. The bowel's M₃ receptors are indeed distal to the ganglion — but the Postganglionic neuron (short) that releases ACh onto them fires only when the LONG preganglionic fiber excites the Nn ganglion near the bowel wall. With Nn blocked, vagal efferent traffic stops at the ganglion, ACh release onto M₃ falls, and the bowel goes quiet — this patient's absent bowel sounds demonstrate it. The M₃ receptor remains pharmacologically intact (a direct agonist like methacholine would still contract the gut), but nerve-driven muscarinic transmission does not survive the block.",
        },
      ],
      reasoning:
        "The question is decided by the figure's receptor geography, not by which division a synapse belongs to. THE MAP: every preganglionic fiber — parasympathetic (long, from the Brainstem and the pelvic splanchnic nerves) and sympathetic (short, to the Sympathetic chain) — releases ACh onto Nn; the adrenal medulla is DIRECTLY innervated by a preganglionic sympathetic fiber, also at Nn; the postganglionic fibers release ACh (parasympathetic, onto M₁, M₂, M₃ — and the sweat gland's M₃) or NE (sympathetic, onto α1, α2, β1, β2 — and α1, α2, β1, D1 on renal vasculature). THE BLOCK: trimethaphan acts at Nn, so every synapse that uses Nn falls — both divisions' ganglia (hypotension from lost vascular NE tone; absent bowel sounds and retention from lost parasympathetic ACh), the adrenal medulla's chromaffin drive (its direct preganglionic line ends on Nn), and the sweat line (the sweat gland's cholinergic postganglionic fiber is activated through a chain Nn ganglion — hence warm, DRY skin, not the damp skin of a pure vasodilator). THE SURVIVOR: the somatic column is not autonomic at all — the Voluntary motor nerve releases ACh onto Nm at the Neuromuscular junction, and Nm is a different receptor at a different synapse, so neuromuscular transmission is fully intact. The distractors each commit one specific error: the adrenal option treats “postganglionic” as “ganglion-free” (the rule says directly innervated — at Nn); the vascular and bowel options mistake a distal LOCATION for intact TRAFFIC (the postganglionic neuron fires only through its blocked Nn synapse); the sweat option conflates the postganglionic transmitter (ACh/M₃) with the preganglionic synapse (Nn). Receptors survive a ganglionic block; nerve-driven transmission through every autonomic ganglion does not.",
    },
  },
  mnemonics: [
    {
      code: "EVERY PRE FIRES ACh",
      meaning:
        "Every preganglionic neuron releases acetylcholine — the parasympathetic Preganglionic neuron (long), the sympathetic Preganglionic neuron (short), and the adrenal medulla's direct preganglionic line — all onto Nn. The division is decided POST-ganglionically: parasympathetic postganglionic fibers release ACh (onto M₁, M₂, M₃), sympathetic postganglionic fibers release NE (onto α1, α2, β1, β2 — α1, α2, β1, D1 on renal vasculature), with the sweat gland's ACh onto M₃ the one stamped exception. The somatic Voluntary motor nerve also releases ACh — onto Nm.",
      memorizes:
        "The transmitter at every fiber in the autonomic (and somatic) wiring",
      whenToUse:
        "Any “which transmitter does this fiber release?” or “what does a ganglionic blocker silence?” question",
      clinical:
        "Because every preganglionic fiber uses ACh onto Nn, one Nn blocker silences BOTH divisions at once — hypotension plus ileus, retention, and lost sweating in the same patient.",
    },
    {
      code: "PARA LONG PRE, SYM SHORT PRE",
      meaning:
        "PARASYMPATHETIC runs the LONG preganglionic fiber — its ganglion (Nn) sits on or near the target, so the Postganglionic neuron is short. SYMPATHETIC runs the SHORT preganglionic fiber — its ganglion sits in the Sympathetic chain near the spinal cord, so the Postganglionic neuron is long. Fiber length and ganglion position are two views of one fact.",
      memorizes:
        "The long-vs-short preganglionic contrast (and its postganglionic mirror)",
      whenToUse:
        "Any wiring-diagram question asking which division a drawn fiber belongs to, or where its ganglion sits",
      clinical:
        "Tells you at a glance where a ganglionic blocker acts on each arm (chain ganglion vs near-target ganglion) and explains why parasympathetic synapses sit right on the organ wall while sympathetic postganglionics travel long distances to their targets.",
    },
    {
      code: "SYMPATHETIC WIRING, CHOLINERGIC SWEAT",
      meaning:
        "Sweat glands are part of the SYMPATHETIC pathway but are innervated by CHOLINERGIC fibers: the postganglionic sympathetic fiber to the sweat gland releases ACh onto M₃. The source's own rule, typo carried verbatim: sympathetic nervous system results in a “chold” sweat.",
      memorizes: "The sweat-gland exception (sympathetic division, muscarinic receptor)",
      whenToUse:
        "Any sweating question attached to a drug — anticholinergics, botulinum toxin, ganglionic blockers, adrenergic drugs",
      clinical:
        "Antimuscarinics cause anhidrosis and hyperthermia (the dry, flushed, hot skin of anticholinergic toxicity); botulinum toxin treats hyperhidrosis by blocking ACh release at these cholinergic sympathetic fibers; adrenergic blockers do NOT dry the skin.",
    },
    {
      code: "GANGLION Nn, END-PLATE Nm, KIDNEY D1",
      meaning:
        "The receptor geography in one line: Nn marks every autonomic ganglion (parasympathetic and sympathetic) and the adrenal medulla's chromaffin cells; Nm marks the motor end plate at the Neuromuscular junction on Skeletal muscle; D1 marks the Renal vasculature (in the chip α1, α2, β1, D1) — the figure's only dopamine target.",
      memorizes: "Where each special receptor class sits on the wiring map",
      whenToUse:
        "Any question pairing a drug class with its synapse — ganglionic blockers, neuromuscular blockers, renal-dose dopamine",
      clinical:
        "Ganglionic blockers (Nn) silence both divisions but never paralyze a voluntary muscle; neuromuscular blockers (Nm) paralyze skeletal muscle without silencing ganglia; low-dose dopamine dilates the renal vasculature through D1 — three drug shelves, three addresses.",
    },
  ],
  rapidReview: {
    s30: [
      "The figure's top level: AUTONOMIC (Parasympathetic + Sympathetic) vs SOMATIC (Voluntary motor nerve → Neuromuscular junction → Skeletal muscle)",
      "Every preganglionic fiber releases ACh onto Nn — both divisions; the postganglionic fiber decides the division: ACh (parasympathetic, onto M₁, M₂, M₃) vs NE (sympathetic, onto α1, α2, β1, β2)",
      "Length rule: Parasympathetic = Preganglionic neuron (long) + Postganglionic neuron (short), ganglion near the target; Sympathetic = Preganglionic neuron (short) + Postganglionic neuron (long), ganglion in the Sympathetic chain",
      "Rule 1, verbatim: “Pelvic splanchnic nerves and CNs III, VII, IX, and X are part of the parasympathetic nervous system.”",
      "Rule 2, verbatim: “Adrenal medulla is directly innervated by preganglionic sympathetic fibers.” — a modified postganglionic neuron releasing Epi/NE into Blood (catecholamine transmission)",
      "Rule 3, verbatim: “Sweat glands are part of the sympathetic pathway but are innervated by cholinergic fibers (sympathetic nervous system results in a “chold” sweat).” — the source's own typo, carried as printed",
      "Receptor chips: M₁, M₂, M₃ on smooth muscle, gland cells, nerve terminals, cardiac muscle (parasympathetic); M₃ on Sweat glands; α1, α2, β1, β2 on sympathetic targets incl. Cardiac muscle, vessels; α1, α2, β1, D1 on Renal vasculature smooth muscle; Nm at the NMJ on Skeletal muscle",
      "The adrenal medulla's chromaffin cells are driven at Nn by the direct preganglionic line — so ganglionic blockade suppresses stress catecholamine release",
      "Nn blockade silences both divisions' ganglia, the adrenal line, and the sweat line — but spares the NMJ (Nm) and all postsynaptic receptors (direct-acting agonists still work)",
      "D1 sits in exactly one printed chip — α1, α2, β1, D1 on the renal vasculature — the receptor behind low-dose (“renal-dose”) dopamine's renal vasodilation",
    ],
    m3: [
      "EVERY PRE FIRES ACh — the postganglionic fiber decides the division",
      "PARA LONG PRE, SYM SHORT PRE — ganglion near the target vs up in the Sympathetic chain",
      "SYMPATHETIC WIRING, CHOLINERGIC SWEAT — ACh onto M₃ (the “chold” sweat rule)",
      "GANGLION Nn, END-PLATE Nm, KIDNEY D1 — the three special receptor addresses",
      "The three printed rules, verbatim: pelvic splanchnic nerves + CNs III, VII, IX, X = parasympathetic; adrenal medulla directly innervated by preganglionic sympathetic fibers; sweat glands = sympathetic pathway, cholinergic fibers",
    ],
    m10: [
      "The “chold” sweat parenthetical is the SOURCE'S OWN TYPO (“chold” for “cold”), preserved verbatim in quotes and attributed — never silently corrected",
      "A standalone “D” label prints directly beneath “Sweat glands” in the text layer — carried verbatim; the page's only other dopamine label is the D1 of the renal chip α1, α2, β1, D1",
      "The text layer INTERLEAVES side-by-side labels on shared lines: “Smooth muscle, Renal vasculature / gland cells, nerve smooth muscle” and “Neuromuscular / ACh junction” — two labels each, read as “Smooth muscle, gland cells, nerve terminals, cardiac muscle” + “Renal vasculature smooth muscle” and “Neuromuscular junction” + “ACh”",
      "The renal vasculature chip reads α1, α2, β1, D1 — β1 (with D1), NOT the generic target's β2; the generic sympathetic chip α1, α2, β1, β2 covers smooth muscle/gland cells/nerve terminals/cardiac muscle and the Cardiac muscle, vessels target",
      "SHARED PAGE (the p196 convention): pdf 256 / book 234 carries Drug effect modifications (top half, sibling topic) and Autonomic receptors (bottom half, this topic) — only the second banner's block is quoted here",
      "Census (pdfimages; VLM attempted twice on ph9-vlm-census.ts and failed 401 missing X-Token both times): ZERO rasters on pdf 256 — the Autonomic receptors block is ONE large VECTOR wiring figure + three rule lines, redrawn as original KYP art (autonomic-organ-map)",
    ],
  },
  recall: [
    {
      q: "The three rule lines printed under the figure, verbatim.",
      a: "“Pelvic splanchnic nerves and CNs III, VII, IX, and X are part of the parasympathetic nervous system.” · “Adrenal medulla is directly innervated by preganglionic sympathetic fibers.” · “Sweat glands are part of the sympathetic pathway but are innervated by cholinergic fibers (sympathetic nervous system results in a “chold” sweat).”",
    },
    {
      q: "Which fibers in the figure release ACh, and which release NE or Epi?",
      a: "ACh: every preganglionic fiber (parasympathetic long, sympathetic short, the adrenal medulla's direct line), the parasympathetic Postganglionic neuron (short) at its target, and the postganglionic sympathetic fiber to the Sweat glands. NE: the sympathetic Postganglionic neuron (long) at its targets. Epi + NE: the Adrenal gland (medulla) into Blood (catecholamine transmission). The somatic Voluntary motor nerve also releases ACh — onto Nm.",
    },
    {
      q: "The long-vs-short preganglionic contrast, and what each length implies about ganglion position.",
      a: "Parasympathetic: Preganglionic neuron (long) → ganglion (Nn) on or near the target → Postganglionic neuron (short). Sympathetic: Preganglionic neuron (short) → Nn ganglion in the Sympathetic chain near the cord → Postganglionic neuron (long) → target.",
    },
    {
      q: "The receptor chips printed on each target.",
      a: "M₁, M₂, M₃ — parasympathetic target (smooth muscle, gland cells, nerve terminals, cardiac muscle). M₃ — Sweat glands. α1, α2, β1, β2 — sympathetic targets, including Cardiac muscle, vessels. α1, α2, β1, D1 — Renal vasculature smooth muscle. Nn — autonomic ganglia + the adrenal medulla. Nm — the Neuromuscular junction on Skeletal muscle.",
    },
    {
      q: "How is the adrenal medulla wired, and what does it release?",
      a: "It is directly innervated by preganglionic sympathetic fibers (ACh onto its Nn) — a modified postganglionic neuron — and it releases Epi and NE into Blood (catecholamine transmission).",
    },
    {
      q: "The sweat gland exception, with the source's own wording (typo included).",
      a: "Sweat glands are part of the sympathetic pathway but are innervated by cholinergic fibers — ACh onto M₃; sympathetic nervous system results in a “chold” sweat (the source's own typo for “cold,” carried verbatim).",
    },
    {
      q: "Nn vs Nm — where does each sit, and what blocks each?",
      a: "Nn: every autonomic ganglion (both divisions) and the adrenal medulla's chromaffin cells — the target of ganglionic blockers (eg, trimethaphan, hexamethonium). Nm: the motor end plate at the Neuromuscular junction on Skeletal muscle — the target of neuromuscular blocking agents.",
    },
    {
      q: "Where is D1 printed on the figure, and what drug acts there?",
      a: "On the Renal vasculature smooth muscle, in the chip α1, α2, β1, D1 — the only dopamine label besides the standalone “D” beneath “Sweat glands”; low-dose (“renal-dose”) dopamine acts at D1 to dilate the renal vasculature.",
    },
    {
      q: "Which nerves does the first rule assign to the parasympathetic nervous system?",
      a: "The pelvic splanchnic nerves and CNs III, VII, IX, and X (the craniosacral outflow — long preganglionic fibers to ganglia near their targets).",
    },
  ],
  related: [
    {
      title: "Drug Effect Modifications: The Six Interactions",
      topicId: "drug-effect-modifications",
      note: "The sibling subsection on the same book page (234, top half): additive, permissive, synergistic, potentiation, antagonistic, and tachyphylactic drug interactions — the OTHER half of the shared page. Shared-page convention: this note quotes only the Autonomic receptors block's lines, from the second “▶ PHARMACOLOGY—AUTONOMIC DRUGS” banner onward.",
    },
    {
      title: "Acetylcholine Receptors: Nicotinic & Muscarinic",
      topicId: "acetylcholine-receptors",
      note: "The receptor-type note this wiring map feeds: Nn vs Nm and the M₁–M₃ subtypes as molecular targets — the wiring figure decides WHERE each ACh receptor sits (ganglia, adrenal medulla, sweat gland, NMJ, target organs); this note names the receptors themselves.",
    },
    {
      title: "Adrenergic Receptor Distribution",
      topicId: "adrenergic-receptor-distribution",
      note: "The organ-by-organ α1/α2/β1/β2 (and D1) response table — the wiring figure prints the chips (α1, α2, β1, β2 on targets; α1, α2, β1, D1 on renal vasculature); the distribution table gives each chip's organ effect (heart rate, vessel tone, bronchi, renin).",
    },
    {
      title: "G Proteins & Second Messengers",
      topicId: "g-protein-second-messengers",
      note: "Every receptor chip on the wiring figure is a GPCR with a known G protein: M₁/M₃ = Gq, M₂ = Gi, α1 = Gq, α2 = Gi, β1/β2 = Gs, D1 = Gs — the signaling layer that converts the figure's receptor geography into organ responses.",
    },
  ],
  crossLinks: [
    {
      subject: "Neuroscience (autonomic pathways and cranial nerves)",
      connection:
        "Rule 1 is the craniosacral outflow in one line: the parasympathetic preganglionic fibers of CN III (ciliary ganglion → pupil and ciliary muscle), CN VII (pterygopalatine/submandibular ganglia → lacrimal and submandibular/sublingual glands), CN IX (otic ganglion → parotid), CN X (thoracoabdominal viscera), and the pelvic splanchnic nerves (S2–S4 → pelvic viscera) — all LONG preganglionic fibers to ganglia near their targets, against the sympathetic thoracolumbar outflow's short preganglionics into the Sympathetic chain.",
    },
    {
      subject: "Biochemistry (G-protein-coupled receptor signaling)",
      connection:
        "Every chip on the map couples to a heterotrimeric G protein: M₁/M₃ → Gq → PLC → IP₃/DAG/Ca²⁺ (gland secretion, smooth muscle contraction — including the sweat gland's M₃); M₂ → Gi (↓ cAMP in cardiac muscle); α1 → Gq (vascular smooth muscle contraction); α2 → Gi (presynaptic NE feedback at nerve terminals — the “nerve terminals” of the printed target list); β1/β2 → Gs → ↑ cAMP (heart, smooth muscle); D1 → Gs (renal vasculature relaxation).",
    },
    {
      subject: "Endocrine pathology (pheochromocytoma and the adrenal medulla)",
      connection:
        "The adrenal medulla's direct preganglionic wiring is why a pheochromocytoma secretes catecholamines on demand: stress → preganglionic sympathetic fibers → ACh onto Nn on chromaffin cells → Epi/NE into Blood (catecholamine transmission) → episodic headaches, drenching sweats, paroxysmal hypertension. The tumor is the figure's Adrenal gland (medulla) glyph gone autonomous.",
    },
    {
      subject: "Nephrology & cardiovascular pharmacology (renal-dose dopamine)",
      connection:
        "The renal vasculature's unique chip — α1, α2, β1, D1 — is the pharmacologic basis of low-dose dopamine in shock: D1 (Gs) on Renal vasculature smooth muscle → vasodilation → preserved renal blood flow and GFR, while higher doses recruit the α1 (vasoconstriction) and β1 (inotropy) chips printed on the other targets — one drug reading three chips off the same wiring map.",
    },
  ],
};
