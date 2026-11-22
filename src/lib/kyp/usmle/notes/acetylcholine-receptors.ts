import type { KypUsMLENote } from "../types";

// Pharmacology — AUTONOMIC DRUGS (PH12 — the ACh RECEPTOR-FAMILY MAP, the
// two-family split). Source: pdf 257 / book 235, the UPPER portion of the
// page — the section header 'Acetylcholine receptors' under the standing
// 'PHARMACOLOGY—AUTONOMIC DRUGS' banner. The section's ENTIRE printed
// content is TWO TYPESET PARAGRAPHS, carried verbatim: (1) 'Nicotinic ACh
// receptors are ligand-gated channels allowing efflux of K+ and influx of
// Na+ and in some cases Ca2+. Two subtypes: NN (found in autonomic
// ganglia, adrenal medulla) and NM (found in neuromuscular junction of
// skeletal muscle).' (2) 'Muscarinic ACh receptors are G-protein–coupled
// receptors that usually act through 2nd messengers. 5 subtypes: M1–5
// found in heart, smooth muscle, brain, exocrine glands, and on sweat
// glands (cholinergic sympathetic).'
// PAGE-STRUCTURE FINDING: the page prints NO muscarinic subtype table —
// the anticipated M1–M5 location/mechanism table does NOT exist on this
// page. The book's own G-protein assignments (M1 = q, M2 = i, M3 = q)
// live TWO PAGES LATER, in the G-protein–linked second messengers table
// on pdf 259 (book 237) — the SEPARATE pending topic
// 'g-protein-linked-second-messengers'. The M1–M5 mechanism layer in this
// note (odd subtypes Gq → PLC → IP3 + DAG; even subtypes Gi → ↓cAMP) is a
// KYP extension with a provenance split: M1/M2/M3 anchored to the book's
// book-237 table; M4, M5, and the odd/even rule beyond the book's printed
// set. EXCLUSIONS: the 'Pain transmission' section in the LOWER portion
// of the same page is the SEPARATE pending topic 'pain-transmission'
// (EXCLUDED); pdf 256's lower portion is the COMPLETED topic PH11
// 'autonomic-receptors' (EXCLUDED); pdf 258 opens the SEPARATE pending
// 'Micturition control' section — this section ENDS on book 235. The page
// prints NO margin mnemonic — all four mnemonic codes are KYP-original.
// Clinical anchors extending past the page (ganglionic blockers, NMBAs,
// bethanechol/pilocarpine, atropine-type antagonists, organophosphates,
// myasthenia/Lambert-Eaton, M1–Alzheimer, M3–overactive-bladder) are
// flagged as KYP clinical anchors wherever they appear.

export const acetylcholineReceptors: KypUsMLENote = {
  id: "acetylcholine-receptors",
  title: "Acetylcholine Receptors",
  subtitle:
    "One transmitter, two receptor families, seven addresses: the NICOTINIC ligand-gated channels (NN at the autonomic ganglia and the adrenal medulla, NM at the neuromuscular junction of skeletal muscle) and the MUSCARINIC GPCRs (M1–M5 at the organ plates — heart, smooth muscle, brain, exocrine glands, and the sweat glands, cholinergic sympathetic) — the receptor, not the transmitter, names the drug class (book 235, two paragraphs that key the entire autonomic pharmacology shelf).",
  subject: "Pharmacology",
  system:
    "Section II · Pharmacology — Autonomic Drugs (the banner this page shares with drug-effect-modifications and autonomic-receptors before it — and with the excluded pain-transmission section below)",
  pilotCategory:
    "The acetylcholine-receptors page's complete architecture — the two-family receptor split: the NICOTINIC family (ligand-gated channels allowing efflux of K+ and influx of Na+ and in some cases Ca2+; two subtypes — NN, found in autonomic ganglia and the adrenal medulla, and NM, found in the neuromuscular junction of skeletal muscle) and the MUSCARINIC family (G-protein–coupled receptors that usually act through 2nd messengers; 5 subtypes M1–M5 found in heart, smooth muscle, brain, exocrine glands, and on sweat glands — cholinergic sympathetic), plus the KYP mechanism layer that completes the map (odd subtypes M1/M3/M5 → Gq → PLC → IP3 + DAG; even subtypes M2/M4 → Gi → ↓ adenylyl cyclase → ↓cAMP).",
  difficulty: 2,
  readTime: 7,
  sourceRef:
    "First Aid 2026, Part 1 pp. 235 (Pharmacology — Autonomic Drugs: Acetylcholine receptors — the section's two paragraphs verbatim: the nicotinic definition 'ligand-gated channels allowing efflux of K+ and influx of Na+ and in some cases Ca2+' with its subtype sentence 'Two subtypes: NN (found in autonomic ganglia, adrenal medulla) and NM (found in neuromuscular junction of skeletal muscle)', and the muscarinic definition 'G-protein–coupled receptors that usually act through 2nd messengers. 5 subtypes: M1–5 found in heart, smooth muscle, brain, exocrine glands, and on sweat glands (cholinergic sympathetic)'; the page prints NO muscarinic subtype table — the M1–M5 G-protein layer is a KYP extension, its M1/M2/M3 anchors being the book's own book-237 table (the separate g-protein-linked-second-messengers topic); the Pain transmission section on the same page is EXCLUDED — it is the separate pain-transmission topic)",
  tags: [
    "acetylcholine",
    "ACh",
    "cholinergic",
    "acetylcholine receptors",
    "nicotinic receptors",
    "NN",
    "NM",
    "ganglionic receptor",
    "neuromuscular junction",
    "autonomic ganglia",
    "adrenal medulla",
    "muscarinic receptors",
    "M1",
    "M2",
    "M3",
    "M4",
    "M5",
    "GPCR",
    "G-protein-coupled receptor",
    "ligand-gated channel",
    "ionotropic",
    "metabotropic",
    "second messengers",
    "Gq",
    "Gi",
    "PLC",
    "IP3",
    "DAG",
    "cAMP",
    "heart",
    "smooth muscle",
    "brain",
    "exocrine glands",
    "sweat glands",
    "cholinergic sympathetic",
    "ion channels",
    "sodium influx",
    "potassium efflux",
    "pharmacology",
    "autonomic drugs",
  ],
  core: {
    what:
      "TWO FAMILIES FOR ONE TRANSMITTER. (1) THE NICOTINIC FAMILY — the fast one: 'Nicotinic ACh receptors are ligand-gated channels allowing efflux of K+ and influx of Na+ and in some cases Ca2+.' The receptor IS the ion channel — ACh binding opens a cation pore, Na+ floods in, K+ counterflows out (Ca2+ enters in some cases), and the cell depolarizes within milliseconds. Two subtypes, each named by its station: 'NN (found in autonomic ganglia, adrenal medulla)' — the ganglionic subtype that every autonomic ganglion of BOTH divisions (plus the adrenal medulla's chromaffin cells) sits behind; and 'NM (found in neuromuscular junction of skeletal muscle)' — the muscular subtype of the somatic plate. (2) THE MUSCARINIC FAMILY — the amplified one: 'Muscarinic ACh receptors are G-protein–coupled receptors that usually act through 2nd messengers. 5 subtypes: M1–5 found in heart, smooth muscle, brain, exocrine glands, and on sweat glands (cholinergic sympathetic).' No pore opens here — the receptor is a GPCR that transduces the ACh signal through G proteins into second-messenger cascades, slower to start but amplified and longer-lasting. The book prints the five subtypes and their locations COLLECTIVELY (no per-subtype table on this page); the mechanism map this note adds is a KYP extension: the ODD subtypes (M1, M3, M5) couple Gq → PLC → IP3 + DAG, the EVEN subtypes (M2, M4) couple Gi → ↓ adenylyl cyclase → ↓cAMP — with M1/M2/M3 anchored to the book's own G-protein table two pages later (book 237, the separate g-protein-linked-second-messengers topic) and M4/M5 flagged beyond the book's printed set.",
    why:
      "WHY ONE TRANSMITTER CARRIES TWO ALPHABETS. WHY A CHANNEL AT THE SWITCHES: the ganglia (NN) and the neuromuscular junction (NM) need SPEED — a ganglion must relay the CNS command onward without delay, and the NMJ must convert a motor spike into contraction in milliseconds. A ligand-gated channel is the only receptor architecture that conducts that fast: binding IS gating, no intermediary, no amplification — the exact trade the stations there require. Why two channel subtypes instead of one: because the ganglionic synapse and the NMJ are DIFFERENT synapses with different pharmacology — NN and NM are different pentamers (KYP anchor beyond the page), which is why a ganglionic blocker (trimetaphan-type) can silence both autonomic divisions without a wisp of skeletal paralysis, and a neuromuscular blocker (rocuronium-type) can paralyze without ganglionic collapse. WHY A GPCR AT THE ORGANS: the organ plates (heart, smooth muscle, brain, exocrine glands, sweat glands) need MODULATION, not relay — slowing a heart, secreting saliva, constricting a pupil, sweating are graded, sustained, amplifiable responses, and the GPCR architecture delivers exactly that: G-protein coupling, second messengers (IP3/DAG from the odd subtypes, ↓cAMP from the even ones), cascades that one ACh molecule can amplify a thousand-fold. And WHY THE SWEAT GLANDS ARE ON THE LIST: they are the sympathetic exception carried over from the wiring diagram of book 234 — sympathetic PATH, cholinergic FIBER — so their receptor is muscarinic (M₃), which is the book's own printed point in putting them in this location list with the parenthetical '(cholinergic sympathetic)'.",
    keyIdea:
      "Read every 'ACh receptor' stem through three anchors. ANCHOR 1 — SORT THE FAMILY: does the stem describe a channel or a cascade? Nicotinic = ligand-gated channel (ionotropic — 'efflux of K+ and influx of Na+ and in some cases Ca2+'); muscarinic = GPCR (metabotropic — 'usually act through 2nd messengers'). ANCHOR 2 — IF NICOTINIC, READ THE SUBSCRIPT: the second letter names the station — N-N = neuron→neuron (the ganglionic synapses: autonomic ganglia of both divisions + the adrenal medulla); N-M = neuron→muscle (the neuromuscular junction of skeletal muscle). ANCHOR 3 — IF MUSCARINIC, APPLY THE ODD/EVEN RULE (KYP extension, M1–M3 anchored to book 237): odd subtypes M1/M3/M5 → Gq → PLC → IP3 + DAG (↑Ca2+, PKC); even subtypes M2/M4 → Gi → ↓ adenylyl cyclase → ↓cAMP — the heart's brake is the EVEN one (M2), the gland/smooth-muscle workhorse is the ODD one (M3). The exam's one-line summary: ONE TRANSMITTER, TWO ALPHABETS — CHANNELS AT THE SWITCHES AND THE MUSCLE (NN, NM), GPCRs AT THE ORGANS (M1–M5, ODD = Gq, EVEN = Gi).",
  },
  mechanisms: [
    {
      id: "nicotinic-ligand-gated-cation-channel",
      title:
        "The nicotinic mechanism: ACh binds → the pore opens → Na+ influx with K+ efflux (Ca2+ in some cases) → ms-fast depolarization at NN (ganglia, adrenal) and NM (the NMJ)",
      context:
        "The section's first paragraph (book 235) — the ligand-gated-channel family and its two stations",
      flow: {
        nodes: [
          {
            id: "input",
            label: "ACh arrives at a nicotinic synapse — which station?",
            sublabel:
              "Input — the same transmitter reaches three nicotinic stations in the wiring of book 234: an autonomic ganglion (either division), the adrenal medulla, or the neuromuscular junction on skeletal muscle. The station, not the transmitter, sets which subtype answers — NN at the first two, NM at the third.",
            variant: "input",
          },
          {
            id: "gate",
            label: "ACh binds the receptor → the pore opens — the receptor IS the channel",
            sublabel:
              "The book's mechanism sentence, verbatim: 'Nicotinic ACh receptors are ligand-gated channels allowing efflux of K+ and influx of Na+ and in some cases Ca2+.' No G protein, no second messenger, no delay — binding is gating (ionotropic signaling; the pentamer architecture is a KYP anchor beyond the page).",
            variant: "process",
          },
          {
            id: "flux",
            label: "Cation flow — Na+ in (the depolarizing drive), K+ out, Ca2+ in some cases",
            sublabel:
              "The channel is a cation pore: Na+ influx along its gradient depolarizes the cell, K+ efflux counterflows (the book prints both fluxes — 'efflux of K+ and influx of Na+'), and in some cases Ca2+ enters as well (a depolarizing and signaling bonus at some subtypes). The result is a local, all-or-none depolarization at the station.",
            variant: "process",
          },
          {
            id: "nn-station",
            label: "At NN — autonomic ganglia + the adrenal medulla: the relay switches on",
            sublabel:
              "The ganglionic subtype, verbatim 'NN (found in autonomic ganglia, adrenal medulla)': postsynaptic depolarization fires the postganglionic neuron (both divisions) — and at the adrenal, drives the chromaffin cells' Epi + NE secretion. This is the receptor a ganglionic blocker (trimetaphan/mecamylamine — KYP clinical anchors) silences BOTH divisions through, with zero skeletal paralysis.",
            variant: "target",
          },
          {
            id: "nm-station",
            label: "At NM — the neuromuscular junction of skeletal muscle: the end-plate potential",
            sublabel:
              "The muscular subtype, verbatim 'NM (found in neuromuscular junction of skeletal muscle)': ACh on NM opens the end-plate channel, the end-plate potential fires, skeletal muscle contracts. This is the receptor the nondepolarizing blockers (rocuronium-type — KYP clinical anchors) paralyze through, and the receptor myasthenic autoantibodies destroy (fluctuating weakness that AChE inhibition improves — KYP clinical anchor).",
            variant: "target",
          },
          {
            id: "output",
            label: "One mechanism, two stations, two drug families — and no cross-blockade",
            sublabel:
              "Output — the exam's payoff: because NN and NM are different subtypes of the same channel family, drugs sort cleanly between the stations. Ganglionic blockers act at NN (paired sympathetic + parasympathetic loss: hypotension, ileus, anhidrosis, cycloplegia — no paralysis); neuromuscular blockers act at NM (paralysis — no autonomic collapse at clinical doses). Nicotine itself agonizes both (KYP anchor — the biphasic stimulant-then-block story of tobacco).",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "gate", label: "ACh is the key — the ligand and only the ligand opens it" },
          { from: "gate", to: "flux", label: "binding = opening: ms-fast, unamplified" },
          { from: "flux", to: "nn-station", label: "depolarization relays the command at every ganglion and the adrenal" },
          { from: "flux", to: "nm-station", label: "depolarization becomes the end-plate potential" },
          { from: "nn-station", to: "output", label: "NN pharmacology: ganglionic blockers, nicotine — both divisions at once" },
          { from: "nm-station", to: "output", label: "NM pharmacology: NMBAs, myasthenia — skeletal muscle only" },
        ],
      },
    },
    {
      id: "muscarinic-gpcr-second-messenger-split",
      title:
        "The muscarinic mechanism: ACh binds a GPCR → the G-protein fork — odd subtypes (M1/M3/M5) → Gq → PLC → IP3 + DAG; even subtypes (M2/M4) → Gi → ↓ adenylyl cyclase → ↓cAMP",
      context:
        "The section's second paragraph (book 235) + the KYP mechanism layer (M1/M2/M3 anchored to the book's book-237 G-protein table — the separate g-protein-linked-second-messengers topic; M4/M5 and the odd/even rule are KYP extensions)",
      flow: {
        nodes: [
          {
            id: "input",
            label: "ACh arrives at an organ plate — heart, smooth muscle, brain, exocrine glands, or the sweat glands",
            sublabel:
              "Input — the book's location list, verbatim: '5 subtypes: M1–5 found in heart, smooth muscle, brain, exocrine glands, and on sweat glands (cholinergic sympathetic).' Every organ served by a cholinergic postganglionic fiber (all parasympathetic targets + the sweat-gland exception) answers ACh through this family.",
            variant: "input",
          },
          {
            id: "bind",
            label: "ACh binds the M receptor — a GPCR: the signal is TRANSDUCED, not conducted",
            sublabel:
              "The book's mechanism sentence, verbatim: 'Muscarinic ACh receptors are G-protein–coupled receptors that usually act through 2nd messengers.' No pore opens — the receptor activates a G protein inside the membrane, and the G protein's class sets the entire downstream cascade (metabotropic: slower onset than the nicotinic channel, but amplified and longer-lasting).",
            variant: "process",
          },
          {
            id: "gq-lane",
            label: "The ODD lane — M1, M3, M5 → Gq → PLC → IP3 + DAG",
            sublabel:
              "Gq activates phospholipase C, which cleaves PIP2 into IP3 (Ca2+ release from the ER) and DAG (PKC activation) — the 'turn things ON' lane: secretion, contraction, miosis. PROVENANCE (KYP extension, anchored to book 237): M1 = q and M3 = q are the book's own printed assignments; M5 = Gq is beyond the book's printed set (the book's table stops at M3).",
            variant: "process",
          },
          {
            id: "gi-lane",
            label: "The EVEN lane — M2, M4 → Gi → ↓ adenylyl cyclase → ↓cAMP",
            sublabel:
              "Gi inhibits adenylyl cyclase, lowering cAMP (and the Gβγ arm opens K+ channels in the heart — KYP anchor beyond the page) — the 'turn things DOWN' lane: the heart's brake. PROVENANCE (KYP extension, anchored to book 237): M2 = i is the book's own printed assignment; M4 = Gi is beyond the book's printed set.",
            variant: "process",
          },
          {
            id: "organs",
            label: "The organ plates answer — each by its dominant subtype",
            sublabel:
              "M2 (even, Gi) is the heart's brake: ↓ heart rate, ↓ AV node conduction velocity, ↓ atrial contractility (book 237's own wording). M3 (odd, Gq) is the gland/smooth-muscle workhorse: exocrine gland secretions, gut peristalsis, bladder contraction, bronchoconstriction, vasodilation, miosis, accommodation — and the sweat glands' secretion ('cholinergic sympathetic' — book 235's own parenthetical). M1 (odd, Gq) carries the brain entries: higher cognitive functions, the enteric nervous system. These per-subtype assignments are the book's book-237 rows (M1–M3); the location list itself is book 235's own.",
            variant: "target",
          },
          {
            id: "output",
            label: "The readout — the subtype + its G protein predicts the organ response and the drug",
            sublabel:
              "Output — the exam's payoff: name the subtype and the G protein falls out (odd → Gq → IP3/DAG; even → Gi → ↓cAMP), and with them the organ response and the drug class that acts there: bethanechol (M3 agonist — bladder and gut), pilocarpine (M3 — glands, miosis), atropine-type antagonists (all M — the anticholinergic toxidrome), oxybutynin (M3 antagonist — overactive bladder; the micturition page two pages ahead builds on it). All drug names here are KYP clinical anchors beyond the source page.",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "bind", label: "ACh at any organ plate meets the M family (GPCR)" },
          { from: "bind", to: "gq-lane", label: "odd subtypes (M1, M3, M5) sort to Gq" },
          { from: "bind", to: "gi-lane", label: "even subtypes (M2, M4) sort to Gi" },
          { from: "gq-lane", to: "organs", label: "IP3 + DAG → ↑Ca2+/PKC → glands, smooth muscle, sweat, miosis (M1/M3)" },
          { from: "gi-lane", to: "organs", label: "↓cAMP (+ Gβγ-K+ current) → the heart slows (M2)" },
          { from: "organs", to: "output", label: "subtype + G protein → organ response → the drug class that acts there" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "acetylcholine-receptors-map",
      title: "The acetylcholine-receptors map (an original KYP visual)",
      caption:
        "An original KYP receptor-family map built from the section's own two paragraphs (book 235): the ACh origin band at the top ('one transmitter, two families'); the NICOTINIC panel — the verbatim channel sentence, the ligand-gated-pore glyph (Na+ influx, K+ efflux, Ca2+ in some cases), and the two station cards: NN ('found in autonomic ganglia, adrenal medulla' — the ganglionic switch of both divisions plus the adrenal trigger) and NM ('found in neuromuscular junction of skeletal muscle' — the somatic plate); the MUSCARINIC panel — the verbatim GPCR sentence, the G-protein fork (odd M1/M3/M5 → Gq → PLC → IP3 + DAG; even M2/M4 → Gi → ↓ adenylyl cyclase → ↓cAMP), the five subtype rows with their stations, and the provenance box; the location strip (book 235's collective list — heart, smooth muscle, brain, exocrine glands, sweat glands — distributed by subtype); the nicotinic-vs-muscarinic sorting row (signaling, stations, character, drug families); and the four-code mnemonic strip (all KYP-original).",
      notice:
        "Census (pdfimages): NO figure exists on the page (zero raster rows for pdf 257) — the section is two typeset paragraphs, so this visual is an ORIGINAL_KYP_ADAPTATION (original KYP glyphs; nothing reproduced; the quoted sentences are carried verbatim and labeled). PAGE-STRUCTURE FINDING: the page prints NO muscarinic subtype table — the M1–M5 G-protein/second-messenger layer is a KYP extension with a provenance split printed on the map itself: M1 = q, M2 = i, M3 = q are the book's own letters (book 237 table — the separate g-protein-linked-second-messengers topic); M4, M5, and the odd/even rule are KYP-original. The Pain transmission section on the same page is EXCLUDED (separate topic). The four codes are KYP-original (the section prints no mnemonic). Clinical annotations (ganglionic blockers, NMBAs, bethanechol/pilocarpine, atropine-type) are flagged as KYP anchors.",
    },
    {
      kind: "table",
      title: "Book 235 — the Acetylcholine receptors section, verbatim",
      intro:
        "The section's entire printed content is two paragraphs. Both are carried whole — the family definition, the mechanism sentence, the subtype sentence, and the location list, exactly as printed.",
      columns: [
        "RECEPTOR FAMILY",
        "THE SECTION'S TEXT (book 235, verbatim)",
        "WHAT THE PARAGRAPH ESTABLISHES",
      ],
      rows: [
        [
          "Nicotinic",
          "Nicotinic ACh receptors are ligand-gated channels allowing efflux of K+ and influx of Na+ and in some cases Ca2+. Two subtypes: NN (found in autonomic ganglia, adrenal medulla) and NM (found in neuromuscular junction of skeletal muscle).",
          "The IONOTROPIC family: the receptor is itself a ligand-gated cation channel — ACh binding opens the pore, Na+ enters (depolarizing drive), K+ leaves, Ca2+ enters in some cases; signaling is ms-fast, unamplified, and confined to the synapse bearing the receptor. The subtype sentence is the whole NN/NM split in one line: NN is the ganglionic subtype (every autonomic ganglion of BOTH divisions — the relay switch — plus the adrenal medulla's secretion trigger), NM is the muscular subtype (the somatic plate: ACh → end-plate potential → skeletal muscle contraction). Different stations, different subtypes, different drugs — the entire basis of selective ganglionic vs neuromuscular blockade (KYP clinical anchors).",
        ],
        [
          "Muscarinic",
          "Muscarinic ACh receptors are G-protein–coupled receptors that usually act through 2nd messengers. 5 subtypes: M1–5 found in heart, smooth muscle, brain, exocrine glands, and on sweat glands (cholinergic sympathetic).",
          "The METABOTROPIC family: the receptor is a GPCR — no pore opens; the signal is transduced through a G protein into a second-messenger cascade (slower onset than the channel, but amplified and longer-lasting). The subtype sentence gives the count (five: M1–M5) and the COLLECTIVE location list — and the page prints no per-subtype mechanism table (the book's own M1/M2/M3 G-protein assignments live two pages later, book 237, the separate g-protein-linked-second-messengers topic; the mechanism map in this note's next table is a KYP extension). The list's last entry is its most testable: 'on sweat glands (cholinergic sympathetic)' — the sympathetic exception (sympathetic PATH, cholinergic FIBER) whose receptor is muscarinic M₃, which is why anticholinergics cause anhidrosis.",
        ],
      ],
      caption:
        "Two paragraphs, one architecture. The nicotinic paragraph answers HOW FAST and WHERE-conducted (a channel, at the switches and the muscle); the muscarinic paragraph answers HOW AMPLIFIED and WHERE-modulated (a GPCR, at the organ plates). Read as a pair they are the receptor key for the wiring diagram of book 234 (the autonomic-receptors topic directly before this page): Nn printed at every ganglion, Nm at the neuromuscular junction, M₁/M₂/M₃ at the organ plates — this page names those receptors and their mechanisms. Both paragraphs carry their exam weight verbatim: the ion species ('efflux of K+ and influx of Na+ and in some cases Ca2+'), the stations (NN — ganglia + adrenal; NM — the NMJ), the five subtypes, and the location list ending on the sweat-gland exception.",
    },
    {
      kind: "table",
      title: "The M1–M5 mechanism map (KYP extension — with the provenance of every row)",
      intro:
        "Book 235 prints the five subtypes and their COLLECTIVE locations only — no per-subtype mechanism table exists on the page. This map completes it: the odd/even G-protein rule with each row's provenance flagged. M1, M2, M3 are anchored to the book's own G-protein–linked second messengers table (book 237 — the separate pending topic g-protein-linked-second-messengers); M4, M5, and the odd/even rule itself are KYP extensions beyond the book's printed set.",
      columns: [
        "SUBTYPE",
        "G PROTEIN (provenance)",
        "SECOND-MESSENGER PATH",
        "STATION / FUNCTION (the book's own wording where printed)",
      ],
      rows: [
        [
          "M1",
          "Gq (book 237)",
          "PLC → IP3 + DAG → ↑Ca2+, PKC",
          "Brain — 'Mediates higher cognitive functions, stimulates enteric nervous system' (book 237, verbatim) + exocrine gland secretions (shared with M3). Book 235's 'brain' entry. KYP anchor: the cholinergic cognition target (Alzheimer pharmacology, anticholinergic delirium).",
        ],
        [
          "M2",
          "Gi (book 237)",
          "↓ adenylyl cyclase → ↓cAMP (+ Gβγ-driven K+ current — KYP anchor)",
          "Heart — '↓ heart rate, AV node conduction velocity, and atrial contractility' (book 237, verbatim). Book 235's 'heart' entry — the vagal brake: the even subtype, so the cAMP-lowering lane. KYP anchors: organophosphate bradycardia; digoxin's vagotonic effect.",
        ],
        [
          "M3",
          "Gq (book 237)",
          "PLC → IP3 + DAG → ↑Ca2+, PKC",
          "The workhorse — '↑ exocrine gland secretions, gut peristalsis, bladder contraction, bronchoconstriction, vasodilation, ↑ pupillary sphincter muscle contraction (miosis), ciliary muscle contraction (accommodation)' (book 237, verbatim) — book 235's 'smooth muscle' and 'exocrine glands' entries, PLUS the sweat glands: 'on sweat glands (cholinergic sympathetic)' (book 235's own parenthetical — the sympathetic exception). KYP anchors: bethanechol, pilocarpine, oxybutynin, ipratropium.",
        ],
        [
          "M4",
          "Gi (KYP extension — the book's table stops at M3)",
          "↓ adenylyl cyclase → ↓cAMP",
          "Brain (book 235's 'brain' entry, beyond the book's printed per-subtype rows) — an even subtype in the inhibitory lane; carried here as a flagged extension so the odd/even pattern is complete.",
        ],
        [
          "M5",
          "Gq (KYP extension — the book's table stops at M3)",
          "PLC → IP3 + DAG → ↑Ca2+, PKC",
          "Beyond the book's printed set (salivary glands and cerebral cortex in the research literature) — an odd subtype in the excitatory lane; carried as a flagged extension to complete the five.",
        ],
      ],
      caption:
        "The pattern that makes the map memorable: ODD subtypes (M1, M3, M5) couple Gq → PLC → IP3 + DAG — the turn-things-ON lane (secretion, contraction, miosis, sweating); EVEN subtypes (M2, M4) couple Gi → ↓ adenylyl cyclase → ↓cAMP — the turn-things-DOWN lane (the heart's brake). The heart is the even one; the glands and smooth muscle are the odd one. Provenance discipline: M1 = q, M2 = i, M3 = q are the book's own printed letters (book 237 — the separate g-protein-linked-second-messengers topic, quoted in this topic's evidence only as a provenance pointer); M4, M5, and the odd/even rule itself are KYP extensions beyond the book's printed set — flagged wherever they appear.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem:
          "A physiology experiment patches a membrane patch taken from an autonomic ganglion into a recording setup and applies ACh to the extracellular face; the current through the patch begins within a fraction of a millisecond of ACh application and vanishes the instant ACh is washed out, with no measurable lag and no effect of injected GTP analogs. The question asks which receptor family this current flows through — and what carries the depolarization.",
        discriminator:
          "'Nicotinic ACh receptors are ligand-gated channels allowing efflux of K+ and influx of Na+ and in some cases Ca2+.' — the receptor IS the ion channel: binding opens a cation pore directly (ionotropic), so the current is instant, unamplified, and G-protein-independent",
        concept: "The nicotinic mechanism — ligand-gated channel vs GPCR (ionotropic vs metabotropic)",
        answer:
          "This is the NICOTINIC family — and the stem's clues are the family's signature: millisecond onset (no cascade to assemble), no GTP-analog sensitivity (no G protein in the path), and direct current flow through the receptor itself. The channel is a cation pore: Na+ influx provides the depolarizing drive, K+ efflux counterflows (both fluxes are in the book's sentence), and Ca2+ enters in some cases. Contrast the muscarinic family — 'G-protein–coupled receptors that usually act through 2nd messengers' — where ACh binding starts a G-protein cascade instead: slower onset, amplified, and GTP-dependent. The patch-clamp framing and the GTP-analog maneuver are KYP experimental anchors; the mechanism sentences are the source's own.",
      },
      {
        stem:
          "A pharmacology question describes two drugs: drug X is described only as 'a ganglionic blocker'; drug Y is described only as 'a nondepolarizing neuromuscular blocker.' The question asks which receptor each drug blocks — and, critically, which findings would appear if the WRONG one were given (drug X in an intubated patient needing paralysis; drug Y in a hypertensive emergency being treated with ganglionic blockade).",
        discriminator:
          "'Two subtypes: NN (found in autonomic ganglia, adrenal medulla) and NM (found in neuromuscular junction of skeletal muscle).' — the subscript names the station: NN is ganglionic, NM is muscular",
        concept: "The NN/NM station split — one channel family, two subtypes, two drug families, no cross-blockade",
        answer:
          "Drug X blocks NN — the ganglionic subtype at 'autonomic ganglia, adrenal medulla' — so it silences BOTH autonomic divisions at once (hypotension, ileus, urinary retention, anhidrosis, cycloplegia; no catecholamine surge from the adrenal) while leaving skeletal muscle fully strong: it could NEVER substitute for a paralytic, and giving it to an intubated patient would leave the patient unparalyzed with autonomic collapse. Drug Y blocks NM — the muscular subtype at the 'neuromuscular junction of skeletal muscle' — producing paralysis with essentially no autonomic effect at clinical doses: it could never treat hypertension through ganglionic blockade, and it would paralyze the diaphragm of any patient given it for blood pressure. The trimetaphan/mecamylamine and rocuronium/vecuronium names are KYP clinical anchors; the stations and subtypes are the book's own subtype sentence.",
      },
      {
        stem:
          "A drug is reported to act at a cholinergic receptor 'through a G protein that lowers cAMP in the SA node,' slowing the heart. The question asks which receptor subtype the drug acts at — and, for contrast, which subtype and second-messenger pair a drug must engage to make an exocrine gland secrete.",
        discriminator:
          "The muscarinic family is 'G-protein–coupled receptors that usually act through 2nd messengers' with '5 subtypes: M1–5 found in heart, smooth muscle, brain, exocrine glands, and on sweat glands' — and the odd/even rule (KYP): even subtypes (M2, M4) → Gi → ↓cAMP; odd subtypes (M1, M3, M5) → Gq → IP3 + DAG",
        concept: "The muscarinic G-protein fork — the heart is the EVEN subtype (M2/Gi/↓cAMP); the glands are the ODD one (M3/Gq/IP3-DAG)",
        answer:
          "The heart drug acts at M2 — the even subtype, Gi-coupled, lowering cAMP in the SA node and AV node: '↓ heart rate, AV node conduction velocity, and atrial contractility' (the book's own book-237 wording; book 235's 'heart' entry). The gland-secreting drug must act at M3 — the odd subtype, Gq-coupled, PLC → IP3 + DAG → ↑Ca2+ — driving 'exocrine gland secretions' (and gut, bladder, bronchi, miosis — the M3 workhorse list). The memory hook: ODD IS Gq, EVEN IS Gi — the heart's brake is the even one. Provenance discipline: M1/M2/M3 assignments are the book's own (book 237 table — the separate g-protein-linked-second-messengers topic); the odd/even rule and M4/M5 are KYP extensions flagged as such.",
      },
    ],
    traps: [
      {
        a: "All acetylcholine receptors signal through second messengers — ACh is metabotropic everywhere, so both the ganglia and the organs respond through G proteins",
        b: "Carrying the muscarinic mechanism (GPCR) over the nicotinic stations (which are channels), because the transmitter is the same",
        whyConfused:
          "The transmitter is identical at every synapse (ACh), and the two families are introduced together on one page — so the mechanisms blur into one 'cholinergic signaling' concept",
        keyDifference:
          "The page splits them in two sentences: 'Nicotinic ACh receptors are ligand-gated channels allowing efflux of K+ and influx of Na+ and in some cases Ca2+' — ionotropic, ms-fast, no G protein; 'Muscarinic ACh receptors are G-protein–coupled receptors that usually act through 2nd messengers' — metabotropic, amplified, slower. This is why nicotine's effect at a ganglion is a fast EPSP while ACh's effect on the heart (M2) is a slow hyperpolarizing current, and why toxins that attack G proteins silence muscarinic signaling without touching the NMJ (KYP anchor).",
        clue:
          "When a stem gives you TIMING (milliseconds vs seconds) or AMPLIFICATION, it is handing you the family: instant and unamplified = nicotinic channel; delayed and amplified = muscarinic GPCR. Mnemonic: ONE TRANSMITTER, TWO ALPHABETS.",
      },
      {
        a: "A ganglionic blocker like hexamethonium should also paralyze skeletal muscle, because the neuromuscular junction is nicotinic too — nicotinic is nicotinic",
        b: "Lumping NN and NM into one 'nicotinic' receptor (the ganglion and the NMJ treated as interchangeable stations)",
        whyConfused:
          "Both subtypes bind ACh, both are ligand-gated cation channels, and both are called 'nicotinic' — the subscript letters look like trivia until a drug's selectivity depends on them",
        keyDifference:
          "The book's subtype sentence assigns them to different stations: 'NN (found in autonomic ganglia, adrenal medulla)' and 'NM (found in neuromuscular junction of skeletal muscle).' A ganglionic (NN) blocker silences both autonomic DIVISIONS — hypotension, ileus, anhidrosis, cycloplegia — without a wisp of skeletal paralysis; a neuromuscular (NM) blocker paralyzes skeletal muscle without ganglionic effects at clinical doses. This page IS the formal definition of that split (the wiring diagram of book 234 printed Nn and Nm as labels; this page defines them).",
        clue:
          "When a stem says 'nicotinic', immediately ask WHICH N: a ganglion or the adrenal → NN; the neuromuscular junction on skeletal muscle → NM. Mnemonic: N-N = NEURON→NEURON (the ganglion); N-M = NEURON→MUSCLE (the NMJ).",
      },
      {
        a: "Sweat glands respond to norepinephrine because they are sympathetic structures — an α- or β-blocker is what would stop sweating",
        b: "Reading the muscarinic location list as if 'sweat glands' were a misprint for an adrenergic target, because 'sympathetic = adrenergic' everywhere else",
        whyConfused:
          "The sweat glands sit in the sympathetic column of the wiring diagram (book 234), so their appearance on the MUSCARINIC location list looks like a contradiction rather than the exception it is",
        keyDifference:
          "The book's own location list ends: 'and on sweat glands (cholinergic sympathetic).' The parenthetical IS the exception, in print: sympathetic PATH, cholinergic FIBER, muscarinic RECEPTOR (M₃ — the Gq/gland workhorse). So it is the ANTIMUSCARINICS that stop sweating (anhidrosis, hyperthermia risk — the classic anticholinergic toxidrome member), not α- or β-blockers; and cholinomimetics (or organophosphates) make a patient drenched.",
        clue:
          "Any stem pairing 'sweat' with a receptor question: the answer is muscarinic M₃, full stop. Mnemonic: SWEAT IS ON THE LIST — the book's own list, with '(cholinergic sympathetic)' printed beside it.",
      },
      {
        a: "The M numbering runs with the organs in order — M1 must be the heart's receptor (the first and most prominent cholinergic target), and the higher numbers are progressively less important",
        b: "Assuming the subtype numbers encode importance or anatomical order (M1 = heart, M2 = lungs, and so on)",
        whyConfused:
          "The numbers 1–5 look like a ranking or an anatomical sequence, and the heart is the most-tested muscarinic target — so M1 gets assigned to it by elimination",
        keyDifference:
          "The numbers are historical labels, not rankings — and the heart is the EVEN one: M2 (Gi → ↓cAMP → '↓ heart rate, AV node conduction velocity, and atrial contractility' — book 237's wording). The odd one that matters clinically is M3 (Gq → IP3/DAG — glands, gut, bladder, bronchi, miosis, sweating). The pattern worth memorizing (KYP extension, M1–M3 anchored to book 237): ODD subtypes (M1, M3, M5) → Gq → PLC → IP3 + DAG; EVEN subtypes (M2, M4) → Gi → ↓ adenylyl cyclase → ↓cAMP.",
        clue:
          "Before assigning a number to an organ, say the two pairings out loud: HEART = M2 (even → Gi → ↓cAMP, the brake); GLANDS + SMOOTH MUSCLE = M3 (odd → Gq → IP3/DAG, the workhorse). Mnemonic: ODD IS Gq, EVEN IS Gi.",
      },
    ],
    pivots: [
      {
        lookAlike: "A stem that names an ACh receptor or a cholinergic drug — which family, which station, which mechanism?",
        differentiator:
          "Run the three anchors in order. (1) FAMILY: ligand-gated channel (ionotropic — 'efflux of K+ and influx of Na+ and in some cases Ca2+') = NICOTINIC; G-protein–coupled, second messenger (metabotropic) = MUSCARINIC. (2) STATION (if nicotinic): ganglion or adrenal medulla → NN; neuromuscular junction on skeletal muscle → NM. (3) G PROTEIN (if muscarinic): odd subtype (M1/M3/M5) → Gq → PLC → IP3 + DAG; even subtype (M2/M4) → Gi → ↓ adenylyl cyclase → ↓cAMP.",
        correctPath:
          "Sort the family BEFORE touching the options — most distractors are the right drug at the wrong family or the wrong station. If the stem's drug is defined by paralysis, it is NM; by both-divisions autonomic collapse, NN; by organ-level effects (secretions, gut, bladder, pupil, heart rate), a muscarinic subtype — then let the organ name the subtype (heart → M2; glands/smooth muscle/sweat → M3; brain → M1). Only after family + station + subtype are named should the option list be read.",
      },
      {
        lookAlike: "A stem about MECHANISM CLASS or SPEED — 'ionotropic vs metabotropic', which drug can act where, or why one cholinergic effect is instant while another builds",
        differentiator:
          "Channels CONDUCT (the nicotinic family: ACh binding opens a cation pore — ms-fast, unamplified, all-or-none at the station: ganglia, adrenal, NMJ); GPCRs TRANSDUCE (the muscarinic family: ACh binding starts a G-protein/second-messenger cascade — slower onset, amplified, longer-lasting, and graded: the organ plates). The station list is the second discriminator: switches and muscle = nicotinic; organs = muscarinic.",
        correctPath:
          "Read the effect's TIME COURSE and LOCATION, then name the family, then the subtype. An instant depolarization at a ganglion or the NMJ = the nicotinic channel (Na+ influx, K+ efflux, Ca2+ in some cases). A graded, sustained organ response = the muscarinic GPCR (IP3/DAG if the subtype is odd, ↓cAMP if even). Then predict the drug: blockers of the channel (ganglionic blockers, NMBAs — subtype-selective) vs blockers of the GPCR (atropine-type — all subtypes); and remember the one place the two families meet — AChE inhibitors raise ACh at BOTH, which is why organophosphate poisoning is a two-family toxidrome at once (KYP clinical anchor).",
      },
    ],
    miniCase: {
      vignette:
        "A 58-year-old agricultural worker is brought in 2 hours after spilling a liquid insecticide concentrate (parathion, an organophosphate) on his clothing while repairing a sprayer. He is diaphoretic — skin literally dripping — with pinpoint pupils, copious oral and bronchial secretions, wheezing, abdominal cramps with diarrhea, and a heart rate of 44. Interlaced with this, his muscles are visibly twitching everywhere (diffuse fasciculations), and over the next hour he develops progressive weakness of the neck flexors and proximal limbs. The team douses and strips him, and the student at the bedside asks how ONE poison produces TWO such different pictures — dripping glands and gut against twitching, weakening muscle — and which receptors carry each.",
      question:
        "Which acetylcholine receptor families and subtypes explain EACH cluster — the secretory/bronchial/pupillary/bradycardic picture and the fasciculations-then-weakness picture — and why does inhibiting acetylcholinesterase produce both at once?",
      options: [
        {
          label:
            "TWO FAMILIES FOR ONE TRANSMITTER: the secretory/gut/bronchial/pupillary/bradycardic cluster is MUSCARINIC — ACh on the M receptors (GPCRs) at the organ plates: heart (M2 — the bradycardia), exocrine glands and bronchial/gut smooth muscle and the pupillary sphincter (M3 — the secretions, wheeze, cramps, miosis) and the sweat glands (M3 — 'cholinergic sympathetic', the drenching sweat); the fasciculations-then-weakness cluster is NICOTINIC at the NM subtype — ACh on the ligand-gated channels of the neuromuscular junction of skeletal muscle. Organophosphates inhibit acetylcholinesterase, so ACh accumulates at EVERY cholinergic synapse — flooding both families (and the NN ganglionic stations) simultaneously.",
          text: "Muscarinic organ plates (M2 heart, M3 glands/smooth muscle/sweat) + nicotinic NM at the NMJ — one transmitter, two flooded families.",
          correct: true,
          why:
            "Correct on both clusters, and every station named is the source page's own. THE MUSCARINIC CLUSTER maps onto the book's location list entry by entry — 'found in heart, smooth muscle, brain, exocrine glands, and on sweat glands (cholinergic sympathetic)': heart → M2 (Gi → ↓cAMP → ↓ heart rate — the 44); exocrine glands → M3 (Gq → IP3/DAG → secretions — the dripping mouth and chest); smooth muscle → M3 (bronchoconstriction, gut cramps, diarrhea, and the pupillary sphincter → miosis); and the sweat glands → M3 — the book's own parenthetical '(cholinergic sympathetic)' is why this SYMPATHETIC structure drips in a cholinergic toxidrome. THE NICOTINIC CLUSTER is the other family at its somatic station: 'NM (found in neuromuscular junction of skeletal muscle)' — ACh accumulating on the ligand-gated channel first over-stimulates it (fasciculations), then depolarization-blocks it (progressive weakness — the same reason succinylcholine fasciculates then paralyzes; KYP anchor). WHY BOTH AT ONCE: acetylcholinesterase is the ONE enzyme clearing ACh at every cholinergic synapse — inhibit it and the transmitter rises at ganglia (NN), the NMJ (NM), and every organ plate (M) together; the receptor families, not the poison, sort the findings. (The classic toxidrome summaries — DUMBBELS/SLUDGE — and the atropine + pralidoxime management are KYP clinical anchors beyond the page.)",
        },
        {
          label:
            "All the findings are muscarinic — the glands, gut, bronchi, pupils, heart, AND the skeletal muscle weakness, because skeletal muscle carries M receptors on its membrane that mediate a slow weakening contraction when ACh accumulates.",
          text: "Everything is muscarinic — skeletal muscle has M receptors too.",
          why:
            "Invented receptor assignment — the book assigns skeletal muscle exactly one plate: 'NM (found in neuromuscular junction of skeletal muscle)', the NICOTINIC subtype of the neuromuscular junction. The location list for the muscarinic family reads 'heart, smooth muscle, brain, exocrine glands, and on sweat glands' — skeletal muscle is conspicuously not on it. The weakness in this patient is nicotinic-NM (depolarization blockade from sustained ACh on the channel), which is precisely why the muscarinic antidote (atropine) dries his secretions and speeds his heart but does NOTHING for his neck flexors — that takes pralidoxime reactivating AChE at the junction (KYP anchors).",
        },
        {
          label:
            "The weakness is ganglionic — the fasciculations and proximal paresis reflect ACh accumulation at the NN receptors of the autonomic ganglia, which disrupts the sympathetic drive to skeletal muscle vasculature and fatigues the muscle indirectly.",
          text: "The weakness is an NN (ganglionic) story.",
          why:
            "Right family for the fasciculations (nicotinic), wrong subtype for the weakness — and the second half invents a mechanism. The book's subtype sentence puts the muscle station at NM, not NN: 'NN (found in autonomic ganglia, adrenal medulla) and NM (found in neuromuscular junction of skeletal muscle).' Ganglionic (NN) effects in organophosphate poisoning do occur (autonomic lability — KYP anchor), but they cannot produce fasciculations or true motor weakness, because no somatic motor pathway passes through an autonomic ganglion. Skeletal muscle answers ONE receptor: the NM channel of the neuromuscular junction.",
        },
        {
          label:
            "Both clusters share one second-messenger mechanism — nicotinic receptors are G-protein–coupled like the muscarinic ones, and organophosphates drive a single IP3/DAG cascade in glands and muscle alike.",
          text: "Both clusters are one GPCR cascade — nicotinic is metabotropic too.",
          why:
            "Mechanism error on the page's central contrast. The book's first sentence: 'Nicotinic ACh receptors are ligand-gated channels allowing efflux of K+ and influx of Na+ and in some cases Ca2+.' — the nicotinic receptor IS a channel (ionotropic): no G protein, no IP3, no DAG, no amplification — which is exactly why the NMJ findings are FAST (fasciculations within minutes). The second sentence reserves the GPCR/second-messenger architecture for the muscarinic family. A drug or poison that worked through one shared cascade could not produce two such different time courses — the split the stem is testing is the two-sentence split of the source page.",
        },
        {
          label:
            "The drenching sweat is a sympathetic adrenergic response — the sweat glands sit in the sympathetic column, so their activation here is norepinephrine-mediated (a catecholamine surge from the adrenal medulla responding to the stress), and a β-blocker would dry him.",
          text: "The sweat is adrenergic — adrenal NE on the sweat glands.",
          why:
            "The trap the book's own location list is built to catch: the list ends 'and on sweat glands (cholinergic sympathetic).' The parenthetical is the exception, in print — sympathetic PATH, cholinergic FIBER, muscarinic RECEPTOR (M3). His sweat is pouring because ACh is flooding the sweat glands' M3 receptors (the gland workhorse of the odd/Gq lane); the adrenal medulla's catecholamines act on α/β plates (cardiac muscle, vessels) and cannot drive eccrine secretion. This is why atropine — an M antagonist — predictably dries organophosphate sweat (and why anticholinergic excess instead causes anhidrosis with hyperthermia; KYP anchors). The one true statement in the option is that the adrenal did secrete: but it did so because ACh flooded its NN receptors — the book's other NN station.",
        },
      ],
      reasoning:
        "The vignette is the two-family page played as a toxidrome: one poison (an AChE inhibitor), one accumulated transmitter (ACh), and TWO receptor families sorting the findings into two pictures. (1) THE MUSCARINIC PICTURE — the organ plates of the book's location list: heart → M2 (Gi → ↓cAMP: heart rate 44); exocrine glands → M3 (Gq → IP3/DAG: salivation, bronchorrhea); smooth muscle → M3 (wheeze, cramps, diarrhea; pupillary sphincter → pinpoint pupils); sweat glands → M3 with the book's own parenthetical '(cholinergic sympathetic)' — the sympathetic exception, which is why this SYMPATHETIC gland drips in a cholinergic poisoning and why atropine dries it. (2) THE NICOTINIC PICTURE — the channel family at the somatic station: 'NM (found in neuromuscular junction of skeletal muscle)' — sustained ACh on the ligand-gated channel fasciculates the muscle first, then depolarization-blocks it into weakness; the NN stations (ganglia + 'adrenal medulla') add autonomic lability and a catecholamine leak without explaining any motor finding. (3) WHY BOTH AT ONCE — AChE is the single clearance mechanism at every cholinergic synapse, so its inhibition floods NN, NM, and M together; management follows the family split (atropine for the M plates, pralidoxime to restore AChE at the junction — KYP clinical anchors). Each distractor misses a different anchor: the all-muscarinic option invents an M receptor on skeletal muscle; the NN option misassigns the somatic station; the one-cascade option erases the ionotropic/metabotropic split; the adrenergic-sweat option walks into the printed exception. The organophosphate frame, the toxidrome summaries, and the antidotes are KYP clinical anchors; every receptor, station, and mechanism invoked is the source page's own (with the odd/even G-protein rule a flagged KYP extension).",
    },
  },
  mnemonics: [
    {
      code: "ONE TRANSMITTER, TWO ALPHABETS — nicotinic channels (NN, NM) at the switches and the muscle; muscarinic GPCRs (M1–M5) at the organs",
      meaning:
        "The master sorting rule (KYP-original code): ACh addresses two receptor families — the NICOTINIC ligand-gated channels ('allowing efflux of K+ and influx of Na+ and in some cases Ca2+') stationed at the fast points (NN — autonomic ganglia + adrenal medulla; NM — the neuromuscular junction of skeletal muscle), and the MUSCARINIC GPCRs ('G-protein–coupled receptors that usually act through 2nd messengers') stationed at the organ plates (heart, smooth muscle, brain, exocrine glands, sweat glands). The family — not the transmitter — names the drug class.",
      memorizes: "The two ACh receptor families, their mechanisms, and their station sets",
      whenToUse:
        "The first split for any cholinergic stem — before subtypes, before drugs: ask which ALPHABET the question is speaking (channel or GPCR), then which station",
      clinical:
        "AChE inhibitors (organophosphates, neostigmine, donepezil) raise ACh at BOTH alphabets at once — which is why organophosphate poisoning is a muscarinic AND nicotinic toxidrome together, and why neostigmine reversal rides with an antimuscarinic (the glycopyrrolate pair — KYP clinical anchors).",
    },
    {
      code: "N-N = NEURON→NEURON (the ganglion); N-M = NEURON→MUSCLE (the NMJ) — the subscript names the station",
      meaning:
        "The nicotinic subtype splitter (KYP-original reading of the book's own subtype sentence): NN is the ganglionic subtype — 'found in autonomic ganglia, adrenal medulla' (neuron synapsing on neuron: the relay of both divisions, plus the chromaffin cell); NM is the muscular subtype — 'found in neuromuscular junction of skeletal muscle' (neuron synapsing on muscle: the somatic plate). Same channel mechanism, different stations — and different drugs.",
      memorizes: "Which nicotinic subtype sits where — and what each subtype's blockade produces",
      whenToUse:
        "Any stem naming a nicotinic drug or a 'nicotinic' finding: ask WHICH N before answering — ganglion or adrenal → NN; neuromuscular junction → NM",
      clinical:
        "Ganglionic blockers (trimetaphan, mecamylamine — KYP anchors) hit NN: both divisions fall together, no paralysis. Nondepolarizing NMBAs (rocuronium, vecuronium — KYP anchors) hit NM: paralysis with autonomic sparing. Myasthenia gravis attacks NM (KYP anchor).",
    },
    {
      code: "ODD IS Gq, EVEN IS Gi — M1/M3/M5 → PLC → IP3 + DAG; M2/M4 → ↓ adenylyl cyclase → ↓cAMP",
      meaning:
        "The muscarinic mechanism fork (KYP-original rule; M1/M2/M3 anchored to the book's own book-237 G-protein table, M4/M5 beyond it): the odd-numbered subtypes couple Gq — phospholipase C → IP3 (Ca2+) + DAG (PKC), the turn-things-ON lane (secretion, contraction, miosis, sweating); the even-numbered subtypes couple Gi — ↓ adenylyl cyclase → ↓cAMP, the turn-things-DOWN lane (the heart's brake). The heart is the EVEN one (M2); the glands and smooth muscle are the ODD one (M3).",
      memorizes: "The G-protein coupling and second messenger of all five muscarinic subtypes in one pattern",
      whenToUse:
        "Any question asking a muscarinic subtype's mechanism, its second messenger, or why the heart slows while glands secrete — and any stem that names a G protein or a messenger and asks for the receptor",
      clinical:
        "M2 (Gi) is the vagal brake on the SA/AV node (organophosphate bradycardia; the rationale for atropine in resuscitation); M3 (Gq) is the target of bethanechol (bladder/gut), pilocarpine (glands, miosis), and oxybutynin/ipratropium blockade (KYP anchors).",
    },
    {
      code: "SWEAT IS ON THE LIST — the book's own location list ends 'and on sweat glands (cholinergic sympathetic)'",
      meaning:
        "The exception-carrier (KYP-original code built on the book's printed parenthetical): the muscarinic location list deliberately includes the sweat glands, flagged '(cholinergic sympathetic)' — sympathetic PATH, cholinergic FIBER, muscarinic RECEPTOR (M3, the odd/Gq workhorse). The list is the page's own reminder that division labels do not assign receptors — fibers do.",
      memorizes: "That the sweat glands are a muscarinic (M3) target despite being sympathetic structures",
      whenToUse:
        "Any stem pairing sweating with a drug question — anticholinergic anhidrosis/hyperthermia, organophosphate diaphoresis, 'which receptor does the thermoregulatory sweat fiber address'",
      clinical:
        "Anticholinergics (atropine-type — KYP anchors) cause anhidrosis with hyperthermia risk (the 'hot as a hare' of the anticholinergic toxidrome); organophosphates drench the patient through the same M3 plate.",
    },
  ],
  rapidReview: {
    s30: [
      "'Nicotinic ACh receptors are ligand-gated channels allowing efflux of K+ and influx of Na+ and in some cases Ca2+.' — the receptor IS the channel (ionotropic).",
      "'Two subtypes: NN (found in autonomic ganglia, adrenal medulla) and NM (found in neuromuscular junction of skeletal muscle).'",
      "'Muscarinic ACh receptors are G-protein–coupled receptors that usually act through 2nd messengers.' (metabotropic).",
      "'5 subtypes: M1–5 found in heart, smooth muscle, brain, exocrine glands, and on sweat glands (cholinergic sympathetic).'",
      "Nicotinic = ionotropic (binding opens a cation pore — ms-fast, unamplified); muscarinic = metabotropic (G protein → second messenger — slower, amplified, longer-lasting).",
      "NN stations: every autonomic ganglion of BOTH divisions + the adrenal medulla; NM station: the neuromuscular junction on skeletal muscle — the subscript names the station (N–N neuron→neuron, N–M neuron→muscle).",
      "The odd/even rule (KYP; M1–M3 anchored to book 237): ODD subtypes (M1, M3, M5) → Gq → PLC → IP3 + DAG; EVEN subtypes (M2, M4) → Gi → ↓ adenylyl cyclase → ↓cAMP.",
      "The heart's muscarinic brake is M2 (even → Gi → ↓cAMP): ↓ heart rate, ↓ AV node conduction velocity, ↓ atrial contractility.",
      "The gland/smooth-muscle workhorse is M3 (odd → Gq → IP3/DAG): secretions, peristalsis, bladder, bronchoconstriction, miosis, accommodation — and the sweat glands ('cholinergic sympathetic').",
      "Drug families sort by family and station (KYP anchors): ganglionic blockers → NN; NMBAs → NM; bethanechol/pilocarpine → M3 agonism; atropine-type → M blockade.",
    ],
    m3: [
      "ONE TRANSMITTER, TWO ALPHABETS — nicotinic channels at the switches and the muscle; muscarinic GPCRs at the organs.",
      "N-N = NEURON→NEURON (the ganglion); N-M = NEURON→MUSCLE (the NMJ) — the subscript names the station.",
      "ODD IS Gq, EVEN IS Gi — M1/M3/M5 → PLC → IP3 + DAG; M2/M4 → ↓ adenylyl cyclase → ↓cAMP.",
      "SWEAT IS ON THE LIST — 'on sweat glands (cholinergic sympathetic)': sympathetic path, cholinergic fiber, M3 receptor.",
    ],
    m10: [
      "The whole page in one breath: one transmitter (ACh), two families — nicotinic ligand-gated channels (NN ganglia/adrenal, NM the NMJ) and muscarinic GPCRs (M1–M5 at the organ plates).",
      "Mechanism spine — the channel: 'ligand-gated channels allowing efflux of K+ and influx of Na+ and in some cases Ca2+' — binding is gating; ms-fast, unamplified, all-or-none at the station.",
      "Mechanism spine — the GPCR: 'G-protein–coupled receptors that usually act through 2nd messengers' — the odd/even fork: Gq → IP3 + DAG (M1/M3/M5) vs Gi → ↓cAMP (M2/M4).",
      "The subtype stations: NN = autonomic ganglia (both divisions) + adrenal medulla; NM = neuromuscular junction of skeletal muscle; M1 = brain (cognition, enteric); M2 = heart; M3 = glands + smooth muscle + sweat; M4/M5 = beyond the book's printed set (KYP extensions).",
      "Provenance discipline: book 235 prints the two paragraphs (family, subtypes, collective locations) — NO per-subtype mechanism table; the M1/M2/M3 G-protein letters are the book's own but printed on book 237 (the separate g-protein-linked-second-messengers topic); M4/M5 and the odd/even rule are KYP extensions.",
      "The exam's sorting protocol: (1) family — channel or GPCR? (2) station — which N, or which organ? (3) G protein — odd or even? Then read the options.",
      "Drug selectivity follows the family/station split: ganglionic blockers (NN) vs NMBAs (NM) vs atropine-type (M) — and AChE inhibitors hit ALL of it at once (organophosphate = muscarinic + nicotinic toxidrome together; the neostigmine-glycopyrrolate reversal pair is the therapeutic mirror).",
      "The sweat-gland exception, twice printed: on the wiring diagram of book 234 (ACh → M3 at the sweat glands) and in this page's location list ('cholinergic sympathetic') — anticholinergics anhidrose; organophosphates drench.",
      "Same transmitter, three receptor addresses at one synapse-free glance: ACh at Nn (ganglion), Nm (NMJ), and M (organ) — the receptor, not the transmitter, names the pharmacology (the wiring page and this page say it together).",
      "Timing tells the family: milliseconds and unamplified = nicotinic channel; seconds, graded, amplified, sustained = muscarinic GPCR — the fastest discriminator in any experimental stem.",
    ],
  },
  recall: [
    {
      q: "The Acetylcholine receptors section of book 235 is two paragraphs — recite both verbatim.",
      a:
        "(1) 'Nicotinic ACh receptors are ligand-gated channels allowing efflux of K+ and influx of Na+ and in some cases Ca2+. Two subtypes: NN (found in autonomic ganglia, adrenal medulla) and NM (found in neuromuscular junction of skeletal muscle).' (2) 'Muscarinic ACh receptors are G-protein–coupled receptors that usually act through 2nd messengers. 5 subtypes: M1–5 found in heart, smooth muscle, brain, exocrine glands, and on sweat glands (cholinergic sympathetic).'",
    },
    {
      q: "NN vs NM — where does each live, and which drug family blocks each (and what does each blockade produce)?",
      a:
        "NN — the ganglionic subtype: 'found in autonomic ganglia, adrenal medulla' — every autonomic ganglion of BOTH divisions plus the adrenal's chromaffin cells. Blocked by ganglionic blockers (trimetaphan/mecamylamine-type — KYP anchors): paired sympathetic + parasympathetic loss (hypotension, ileus, urinary retention, anhidrosis, cycloplegia) with NO skeletal paralysis. NM — the muscular subtype: 'found in neuromuscular junction of skeletal muscle.' Blocked by nondepolarizing NMBAs (rocuronium/vecuronium-type — KYP anchors): skeletal paralysis with autonomic sparing at clinical doses. Same channel family, different subtypes — the subscript names the station (N–N neuron→neuron, N–M neuron→muscle).",
    },
    {
      q: "Why does one transmitter carry two receptor families — and how do the mechanisms differ in speed, amplification, and location?",
      a:
        "The stations set the architecture. The SWITCHES and the MUSCLE need speed: a ligand-gated channel (nicotinic) conducts in milliseconds — binding IS gating ('efflux of K+ and influx of Na+ and in some cases Ca2+'), unamplified, all-or-none. The ORGAN PLATES need modulation: a GPCR (muscarinic) transduces through G proteins into second messengers ('usually act through 2nd messengers') — slower onset, but amplified and longer-lasting, ideal for graded sustained responses (slowing a heart, secreting saliva, sweating). Timing is the fastest discriminator in experimental stems: milliseconds = channel; seconds-plus = cascade.",
    },
    {
      q: "The M1–M5 mechanism map — subtype, G protein, second messenger, and station — with the provenance of each assignment.",
      a:
        "M1 — Gq → PLC → IP3 + DAG: brain ('Mediates higher cognitive functions, stimulates enteric nervous system' — book 237's wording) + exocrine gland secretions. M2 — Gi → ↓ adenylyl cyclase → ↓cAMP: heart ('↓ heart rate, AV node conduction velocity, and atrial contractility' — book 237). M3 — Gq → IP3 + DAG: the workhorse — exocrine gland secretions, gut peristalsis, bladder contraction, bronchoconstriction, vasodilation, miosis, accommodation, plus the sweat glands ('cholinergic sympathetic' — book 235's own parenthetical). M4 — Gi → ↓cAMP: brain, beyond the book's printed set (KYP extension). M5 — Gq → IP3/DAG: beyond the book's printed set (KYP extension). PROVENANCE: book 235 prints the family, the count, and the collective locations only; the M1/M2/M3 G-protein letters are the book's own from the book-237 table (the separate g-protein-linked-second-messengers topic); M4, M5, and the odd/even rule are KYP extensions.",
    },
    {
      q: "An AChE-inhibitor poisoning produces two clusters — sort them by receptor family and subtype, and name the management logic.",
      a:
        "THE MUSCARINIC CLUSTER (the organ plates of the location list): miosis, salivation, bronchorrhea, wheeze, cramps, diarrhea, bradycardia (M2 on the heart), and drenching sweat (M3 — 'cholinergic sympathetic', the exception). THE NICOTINIC CLUSTER (the channel family): fasciculations then progressive weakness — ACh on NM at the neuromuscular junction of skeletal muscle (over-stimulation → depolarization blockade), plus autonomic lability from the NN ganglionic stations. WHY BOTH: acetylcholinesterase clears ACh at every cholinergic synapse — inhibit it and both families flood together. MANAGEMENT follows the split (KYP anchors): atropine (an M antagonist) for the muscarinic findings — it dries, dilates, and speeds but cannot touch the weakness; pralidoxime reactivates AChE to restore the NMJ (before aging of the organophosphate-AChE bond).",
    },
  ],
  related: [
    {
      title: "Autonomic Receptors — the Wiring Diagram",
      topicId: "autonomic-receptors",
      note:
        "The page directly before this one (PH11, book 234) draws the synapses this page defines: the diagram prints Nn at every ganglion, Nm at the neuromuscular junction, and M₁/M₂/M₃ at the organ plates — this page is the receptor-key legend for those labels, defining what NN, NM, and the M family actually ARE (channel vs GPCR) and adding the mechanism layer (the odd/even G-protein fork). Read together: the wiring diagram tells you WHERE each receptor sits; this page tells you WHAT it is and HOW it signals. The sweat-gland exception appears in both — as a drawn branch (ACh → M₃ → sweat glands, footnote 3) and as a list entry ('cholinergic sympathetic') — the two pages flag it from both directions.",
    },
    {
      title: "Drug Effect Modifications — the Combination Logic",
      topicId: "drug-effect-modifications",
      note:
        "The page that opens this same banner (PH10, book 234) supplies the combination vocabulary this page's pharmacology uses: the ANTAGONISTIC row ('Effect of substances A and B together is less than the sum of their individual effects' — 'Morphine with naloxone 2 + 2 < 4') is exactly what atropine does to organophosphate muscarinic toxicity — competitive antagonism at the M receptor, a functional 2 + 2 < 4 that dries the secretions without removing a molecule of ACh. The PERMISSIVE row (cortisol on catecholamine responsiveness) is the same lesson for the ADRENERGIC family — receptor responsiveness, not just receptor occupancy, sets the effect. This page names the receptors those combinations act on.",
    },
    {
      title: "Sympathomimetics — the Receptor Activity Grid",
      topicId: "sympathomimetics",
      note:
        "The adrenergic mirror of this page (the completed grid topic): where ACh carries TWO alphabets (a channel family and a GPCR family), NE/Epi carry ONE — the adrenergic receptors are ALL GPCRs (α1 Gq, α2 Gi, β Gs, D1 Gs), the alphabet the sympathomimetics grid scores drug by drug. The contrast is the exam's favorite receptor-taxonomy question: same second-messenger logic (Gq/Gi/Gs), different transmitter, no ionotropic member — which is why there is no 'adrenergic NMJ' and no adrenergic ligand-gated channel to block with a paralytic. The G-protein letters for both families meet in one table on book 237 — the separate second-messengers topic below.",
    },
    {
      title: "G-Protein–Linked Second Messengers — the Coupling Table",
      topicId: "g-protein-linked-second-messengers",
      note:
        "The pending topic two pages ahead (book 237) that holds the book's own G-protein assignments: the RECEPTOR / G-PROTEIN CLASS / MAJOR FUNCTIONS table where 'Cholinergic M1 q', 'M2 i', 'M3 q' are printed — the anchors this note's M1–M5 mechanism map cites (pinned here as a provenance-pointer evidence item, clearly flagged as NOT part of this topic's source page). That table also prints the adrenergic couplings (α1 q, α2 i, β s, D1 s) and the histamine rows — the complete second-messenger ledger. This page names the ACh families and their stations; that page assigns the G proteins; together they complete the mechanism map (and it extends past M3 — this note carries M4/M5 as flagged KYP extensions).",
    },
  ],
  crossLinks: [
    {
      subject: "Cardiology (M2 — the vagal brake on the node)",
      connection:
        "The heart's entry in the muscarinic location list is the cardiology half of every vagal story: ACh from the vagus on M2 (Gi → ↓cAMP, plus a Gβγ-driven K+ current — KYP anchor) slows the SA node, delays the AV node, and weakens atrial contraction — the mechanism behind carotid massage and the Valsalva maneuver's cardioinhibitory phase, behind digoxin's vagotonic bradycardia, and behind the heart rate of 44 in this page's organophosphate mini-case (and why atropine is the bradycardia antidote). The receptor-binding page's competitive-antagonism curve is atropine's mechanism drawn as a graph: the M2 curve shifts right, vagal tone falls, the node accelerates.",
    },
    {
      subject: "Neurology (NM — the neuromuscular junction and its diseases)",
      connection:
        "The NM subtype — 'found in neuromuscular junction of skeletal muscle' — is the neurologist's receptor: myasthenia gravis (autoantibodies against the NM channel: fluctuating weakness that improves with AChE inhibition — the therapeutic logic of this page's organophosphate mirror, neostigmine), Lambert-Eaton (presynaptic Ca2+ channels instead — less ACh released, improved with repetition), botulism (no ACh released at all), and the anesthesia counterpoint (nondepolarizing NMBAs compete at NM; succinylcholine depolarizes it — fasciculations then paralysis, the exact sequence of the mini-case's nicotinic cluster). One channel subtype, an entire exam section — and the NN/NM split this page defines is why none of these diseases touch the autonomic ganglia.",
    },
    {
      subject: "Pulmonology (M3 — the airway and its two drug directions)",
      connection:
        "The airway's smooth muscle sits in the muscarinic location list, and its M3 (Gq → IP3/DAG) contraction is bronchoconstriction: the receptor behind methacholine bronchoprovocation (an inhaled M agonist — a diagnostic bronchospasm, i.e., this page's mechanism used as a test) and behind ipratropium/tiotropium (inhaled M antagonists — bronchodilation for COPD/asthma without atropine's systemic toxidrome, because the inhaled route keeps the drug at the airway's M3 plates). The same M3 logic runs the exocrine glands of the list: ipratropium's dry mouth is the bronchodilator's most common side effect — the location list predicting the adverse-effect profile line by line.",
    },
    {
      subject: "Psychiatry (M1 — the cholinergic-cognitive axis and anticholinergic delirium)",
      connection:
        "The brain's entry in the location list carries the psychiatry corridor: M1 (Gq — 'Mediates higher cognitive functions' in the book's book-237 wording, this note's anchored provenance) is the receptor family behind anticholinergic delirium — the 'mad as a hatter' pole of the atropine toxidrome, and the reason antihistamines, tricyclics, and bladder antispasmodics fog the elderly — and behind the cholinergic hypothesis of Alzheimer disease, whose pharmacology (donepezil, an AChE inhibitor) is this page's two-family flood used therapeutically: raise ACh at the cortical M1 (and nicotinic) plates to prop up cognition, accepting the muscarinic peripheral cost (the GI and cardiac side effects are the location list read as an adverse-effect table).",
    },
  ],
};
