import type { KypUsMLENote } from "../types";

// Pharmacology — AUTONOMIC DRUGS (PH13 — the PAIN-PROCESS MAP, the
// four-step signal and its blocker classes). Source: pdf 257 / book 235,
// the LOWER portion of the page — the section header 'Pain transmission'
// under the standing 'PHARMACOLOGY—AUTONOMIC DRUGS' banner. The section's
// ENTIRE printed content, carried verbatim: (1) the NOCICEPTIVE PAIN
// subsection — 'Pain signals transmitted to the CNS in response to
// mechanical, thermal, or chemical stimuli.'; 'Transient receptor
// potential vanilloid ligand receptors cause Ca2+ influx–induced Na+
// channel activation. Signals transmitted by Aδ fibers (sharp, acute
// pain) or C fibers (dull, throbbing, chronic pain).'; and the
// four-process list — 'Transduction—blocked by local anesthetics,
// α2-agonists, gabapentinoids, NSAIDs, acetaminophen, glucocorticoids /
// Transmission—blocked by local anesthetics, α2-agonists, opioids /
// Modulation—blocked by TCAs, SSRIs, SNRIs, gabapentinoids /
// Perception—blocked by α2-agonists, opioids, TCAs, SSRIs, SNRIs';
// (2) the NEUROPATHIC PAIN subsection — 'Caused by neuronal dysfunction
// of the CNS or PNS. Transmitted via upregulation and persistent
// activation of voltage-gated Na+ channels. Example: diabetic peripheral
// neuropathy.'
// PAGE-STRUCTURE FINDING: the page prints NO pathway diagram and NO
// neurotransmitter account — the anticipated dorsal-horn →
// spinothalamic-tract → thalamus → cortex station chain, substance P /
// glutamate, and the gate-control theory are NOT printed on this page.
// The book's own pathway frame is the FOUR-PROCESS LIST, and the only
// anatomy printed is peripheral (nociceptor + TRPV; Aδ vs C fibers) plus
// the neuropathic voltage-gated Na+ channel. The ascending-station
// labels used to SEAT the four processes in this note and its visual
// (dorsal-horn synapse, spinothalamic tract, thalamus/cortex, descending
// modulation) are KYP extensions beyond the book's printed set, flagged
// wherever they appear; substance P / glutamate and gate-control theory
// are deliberately NOT used. The step × class blocker matrix is KYP's
// pivot of the book's own four printed lines — every cell is the book's
// own assignment. EXCLUSIONS: the 'Acetylcholine receptors' section in
// the UPPER portion of the same page is the COMPLETED topic PH12
// 'acetylcholine-receptors' (EXCLUDED); pdf 256's lower portion is the
// COMPLETED topic PH11 'autonomic-receptors' (EXCLUDED); pdf 258 opens
// the SEPARATE pending 'Micturition control' section (this section ENDS
// on pdf 257). NO raster images on the page (pdfimages returned zero
// rows for pdf 257) — the registry visual is an ORIGINAL_KYP_ADAPTATION.
// Clinical anchors extending past the page (clonidine/dexmedetomidine,
// lidocaine-type local anesthetics, gabapentin/pregabalin,
// amitriptyline/duloxetine, capsaicin, the diabetic workup behind the
// book's example) are flagged as KYP clinical anchors wherever they
// appear. The section prints NO margin mnemonic — all four codes are
// KYP-original.

export const painTransmission: KypUsMLENote = {
  id: "pain-transmission",
  title: "Pain Transmission",
  subtitle:
    "Two pains, four steps, nine drug classes: the NOCICEPTIVE highway — a mechanical, thermal, or chemical stimulus transduced by TRPV-driven Ca2+ influx into Na+ channel activation and carried by Aδ fibers (the sharp, acute jab) or C fibers (the dull, throbbing, chronic burn) — run through its four processes (Transduction, Transmission, Modulation, Perception), each with its own blocker list; and the NEUROPATHIC exception — pain with no stimulus at all, the upregulated and persistently active voltage-gated Na+ channel (book 235's step-to-drug map that organizes the entire analgesic shelf).",
  subject: "Pharmacology",
  system:
    "Section II · Pharmacology — Autonomic Drugs (the banner this page shares with drug-effect-modifications, autonomic-receptors, and acetylcholine-receptors before it — the Pain transmission section sits in the LOWER portion of the same book-235 page)",
  pilotCategory:
    "The pain-transmission page's complete architecture — the two pain mechanisms (NOCICEPTIVE: 'Pain signals transmitted to the CNS in response to mechanical, thermal, or chemical stimuli', transduced by 'Transient receptor potential vanilloid ligand receptors [causing] Ca2+ influx–induced Na+ channel activation' and carried by 'Aδ fibers (sharp, acute pain)' or 'C fibers (dull, throbbing, chronic pain)'; NEUROPATHIC: 'Caused by neuronal dysfunction of the CNS or PNS. Transmitted via upregulation and persistent activation of voltage-gated Na+ channels. Example: diabetic peripheral neuropathy.'), plus the four-process blocker map — Transduction / Transmission / Modulation / Perception with the book's own class list per process — and the KYP matrix layer that pivots the four lines into a step × class grid.",
  difficulty: 2,
  readTime: 8,
  sourceRef:
    "First Aid 2026, Part 1 pp. 235 (Pharmacology — Autonomic Drugs: Pain transmission — the section's two subsections verbatim: Nociceptive pain ('in response to mechanical, thermal, or chemical stimuli'; 'Transient receptor potential vanilloid ligand receptors cause Ca2+ influx–induced Na+ channel activation'; 'Aδ fibers (sharp, acute pain) or C fibers (dull, throbbing, chronic pain)'; the four-process list — Transduction/Transmission/Modulation/Perception, each with its blocker classes) and Neuropathic pain ('neuronal dysfunction of the CNS or PNS … upregulation and persistent activation of voltage-gated Na+ channels … Example: diabetic peripheral neuropathy'); the page prints NO pathway diagram — the dorsal-horn/spinothalamic/thalamus/cortex station labels are KYP extensions, and the step × class blocker matrix is KYP's pivot of the book's own four lines; the Acetylcholine receptors section on the same page is EXCLUDED — it is the separate acetylcholine-receptors topic)",
  tags: [
    "pain",
    "pain transmission",
    "nociceptive pain",
    "neuropathic pain",
    "nociceptor",
    "TRPV",
    "transient receptor potential vanilloid",
    "vanilloid receptor",
    "Ca2+ influx",
    "Na+ channel activation",
    "Aδ fibers",
    "C fibers",
    "sharp acute pain",
    "dull throbbing chronic pain",
    "transduction",
    "transmission",
    "modulation",
    "perception",
    "local anesthetics",
    "α2-agonists",
    "gabapentinoids",
    "NSAIDs",
    "acetaminophen",
    "glucocorticoids",
    "opioids",
    "TCAs",
    "SSRIs",
    "SNRIs",
    "voltage-gated Na+ channels",
    "diabetic peripheral neuropathy",
    "neuronal dysfunction",
    "analgesia",
    "pharmacology",
    "autonomic drugs",
  ],
  core: {
    what:
      "TWO PAINS, ONE FOUR-STEP SIGNAL. (1) NOCICEPTIVE PAIN — the stimulus-driven kind: 'Pain signals transmitted to the CNS in response to mechanical, thermal, or chemical stimuli.' Three energies can start it — force, heat, chemistry — and the transducer is printed with it: 'Transient receptor potential vanilloid ligand receptors cause Ca2+ influx–induced Na+ channel activation.' TRPV's Ca2+ influx is the switch that turns the nociceptor's Na+ channels on — the stimulus becomes an electrical signal. That signal then rides one of two lanes: 'Signals transmitted by Aδ fibers (sharp, acute pain) or C fibers (dull, throbbing, chronic pain)' — the fast lane for the first sharp jab, the slow lane for the dull burn that follows and lingers. The book then runs the whole signal through FOUR PROCESSES, each printed with its own blocker list: TRANSDUCTION — blocked by local anesthetics, α2-agonists, gabapentinoids, NSAIDs, acetaminophen, glucocorticoids (the longest list — six classes act where the stimulus becomes a signal); TRANSMISSION — blocked by local anesthetics, α2-agonists, opioids (the road — only three classes stop the travel); MODULATION — blocked by TCAs, SSRIs, SNRIs, gabapentinoids (the tuning stage — the antidepressant classes appear here and nowhere earlier); PERCEPTION — blocked by α2-agonists, opioids, TCAs, SSRIs, SNRIs (the conscious endpoint — the local anesthetics and NSAIDs drop out, the antidepressants carry through). (2) NEUROPATHIC PAIN — the stimulus-free kind: 'Caused by neuronal dysfunction of the CNS or PNS. Transmitted via upregulation and persistent activation of voltage-gated Na+ channels. Example: diabetic peripheral neuropathy.' No mechanical, thermal, or chemical stimulus anywhere — the nerve itself has become the pain generator, because its own voltage-gated Na+ channels are upregulated (more of them) and persistently active (firing without being asked).",
    why:
      "WHY A PAIN PAGE SITS IN THE AUTONOMIC DRUGS CHAPTER. This is the step-to-drug map: every analgesic class on the shelf is defined by WHERE along the pain signal it acts, and this page prints that address list in four lines. WHY TRPV IS THE TRANSDUCER: a stimulus is physics or chemistry — mechanical force, heat, protons/inflammatory mediators — and TRPV (the vanilloid receptor, the capsaicin receptor — KYP anchor) is the protein that converts it: ligand binding drives 'Ca2+ influx–induced Na+ channel activation', so the depolarizing Na+ current that fires the nociceptor is SWITCHED ON by the TRPV calcium signal. That is why the anti-inflammatory classes (NSAIDs, glucocorticoids) and the antipyretic (acetaminophen) sit in the TRANSDUCTION list — they act on the chemical milieu that drives the transducer, upstream of any signal — and why the local anesthetics and gabapentinoids are there too: they act on the channels the transducer switches on. WHY TWO FIBER TYPES: the two-lane periphery gives pain its two temporal phases (KYP anchor: Aδ is thinly myelinated and fast, C is unmyelinated and slow — the speed clue is not printed on the page): step on a nail and the sharp first pain arrives on Aδ before the dull throbbing second pain arrives on C — two lanes, two qualities, one stimulus. WHY FOUR PROCESSES WITH DIFFERENT BLOCKER SETS: each process is different molecular machinery at a different station, so a different set of drugs can stop it — the printed lists overlap only where a class acts at multiple stations (the local anesthetics and α2-agonists carry from transduction into transmission; the TCAs, SSRIs, and SNRIs carry from modulation into perception; the α2-agonists hit three of the four). WHY NEUROPATHIC PAIN IS THE EXCEPTION: with no stimulus to block, the stimulus-side classes (NSAIDs, acetaminophen, glucocorticoids — transduction only) have nothing to do, which is exactly why the nerve-excitability classes (gabapentinoids on the channels, TCAs/SNRIs on the modulation and perception steps — KYP clinical anchors) own neuropathic pain, and why the book's own worked example is diabetic peripheral neuropathy: longstanding hyperglycemia injures peripheral neurons, the injured nerves upregulate and persistently activate their voltage-gated Na+ channels, and the patient feels burning, tingling pain in a stocking distribution with no wound at all.",
    keyIdea:
      "Read every pain stem through three anchors. ANCHOR 1 — SORT THE PAIN: is a stimulus the start of the story ('in response to mechanical, thermal, or chemical stimuli' = NOCICEPTIVE), or is the nerve the story ('neuronal dysfunction of the CNS or PNS' with 'upregulation and persistent activation of voltage-gated Na+ channels' = NEUROPATHIC — no stimulus needed)? ANCHOR 2 — IF NOCICEPTIVE, FIND THE FIBER: Aδ = sharp, acute (the first jab); C = dull, throbbing, chronic (the slow burn). ANCHOR 3 — LOCATE THE STEP, THEN READ THE BLOCKER LIST: Transduction → local anesthetics, α2-agonists, gabapentinoids, NSAIDs, acetaminophen, glucocorticoids; Transmission → local anesthetics, α2-agonists, opioids; Modulation → TCAs, SSRIs, SNRIs, gabapentinoids; Perception → α2-agonists, opioids, TCAs, SSRIs, SNRIs. The exam's one-line summary: THE STEP NAMES THE DRUG — α2-agonists block three of the four stations (transduction, transmission, perception — everything but modulation), opioids own the road and the room (transmission + perception), NSAIDs never leave the starting line (transduction only), and the antidepressant classes (TCAs, SSRIs, SNRIs) enter only at modulation and carry through to perception.",
  },
  mechanisms: [
    {
      id: "nociceptive-pain-four-process-cascade",
      title:
        "The nociceptive mechanism: mechanical/thermal/chemical stimulus → TRPV → Ca2+ influx–induced Na+ channel activation (TRANSDUCTION) → Aδ or C fiber (TRANSMISSION) → synapse and descending control (MODULATION) → the conscious endpoint (PERCEPTION) — with the book's own blocker class set at each step",
      context:
        "The Nociceptive pain subsection (book 235) — the definition sentence, the TRPV sentence, the fiber sentence, and the four-process list with its blocker classes (the station labels beyond the fibers — dorsal horn, spinothalamic tract, thalamus/cortex, descending modulation — are KYP extensions beyond the book's printed set)",
      flow: {
        nodes: [
          {
            id: "input",
            label: "A noxious stimulus arrives at a peripheral nociceptor — mechanical, thermal, or chemical",
            sublabel:
              "Input — the book's definition sentence, verbatim: 'Pain signals transmitted to the CNS in response to mechanical, thermal, or chemical stimuli.' Pain is defined here as a TRANSMITTED signal, and only three energies can start it: force (the crushed tissue, the cut), heat (the burn), chemistry (the inflammatory mediators, the acid). Before any drug question, the stimulus names the modality — and the modality names which transducer answers.",
            variant: "input",
          },
          {
            id: "transduction",
            label: "TRANSDUCTION — TRPV opens: Ca2+ influx induces Na+ channel activation — the stimulus becomes a signal",
            sublabel:
              "The book's molecular sentence, verbatim: 'Transient receptor potential vanilloid ligand receptors cause Ca2+ influx–induced Na+ channel activation.' The vanilloid receptor is the transducer: ligand binding drives a calcium influx, and the Ca2+ signal switches the nociceptor's Na+ channels on — the depolarizing current that fires the first action potential. Note the two-step logic: TRPV is NOT itself the Na+ channel; its Ca2+ influx INDUCES the Na+ channel's activation. The book's blocker list for this step is the longest of the four — local anesthetics, α2-agonists, gabapentinoids, NSAIDs, acetaminophen, glucocorticoids (six classes: the anti-inflammatory trio acts on the chemical milieu that drives TRPV; the channel drugs act on what TRPV switches on — KYP clinical anchors).",
            variant: "process",
          },
          {
            id: "transmission",
            label: "TRANSMISSION — the signal travels: Aδ fibers (sharp, acute pain) or C fibers (dull, throbbing, chronic pain)",
            sublabel:
              "The book's fiber sentence, verbatim: 'Signals transmitted by Aδ fibers (sharp, acute pain) or C fibers (dull, throbbing, chronic pain).' The periphery is a two-lane road: the Aδ lane carries the first sharp jab (thinly myelinated, fast — KYP anchor beyond the page), the C lane carries the dull, throbbing burn that follows and lingers (unmyelinated, slow — KYP anchor). Blockers of this step — the road classes: local anesthetics (block Na+ channels along the axon — the same channel the transducer switched on), α2-agonists, and opioids (the opioids' first appearance in the chain: they act on the travel and the endpoint, never the start).",
            variant: "process",
          },
          {
            id: "modulation",
            label: "MODULATION — the signal is tuned, up or down, at the first synapse and by descending control",
            sublabel:
              "The third process: pain is not a wire — it is amplified or damped on the way up (the dorsal-horn synapse and the descending monoamine control system are the standard stations — KYP extensions beyond the book's printed set; the page prints no anatomy here, only the class list). The book's blockers for this step: TCAs, SSRIs, SNRIs, gabapentinoids — the antidepressant classes appear here and nowhere earlier in the chain, which is the pharmacology behind 'why is the pain patient on amitriptyline' (KYP clinical anchor: the shared norepinephrine/serotonin logic of analgesia and mood).",
            variant: "process",
          },
          {
            id: "perception",
            label: "PERCEPTION — the signal is felt: the conscious endpoint of the ascending path",
            sublabel:
              "The fourth process: the tuned signal becomes conscious pain (thalamus and cortex are the standard stations — again KYP extensions; the page prints only the class list). The book's blockers: α2-agonists, opioids, TCAs, SSRIs, SNRIs — five classes, and the membership tells the story: the local anesthetics and the NSAIDs/acetaminophen/glucocorticoids drop out (they act only at the periphery), while the modulation classes (TCAs, SSRIs, SNRIs) carry through, and the opioids arrive for their second station — perception is where opioids ultimately work.",
            variant: "target",
          },
          {
            id: "output",
            label: "One signal, four steps, nine classes — the step names the drug",
            sublabel:
              "Output — the exam's payoff: the four printed lists are a step-to-drug map. α2-agonists block THREE of the four steps (transduction, transmission, perception — everything but modulation); opioids own transmission + perception; gabapentinoids split transduction + modulation; TCAs, SSRIs, and SNRIs enter at modulation and carry to perception; local anesthetics cover transduction + transmission; and NSAIDs, acetaminophen, and glucocorticoids never leave transduction. Multimodal analgesia (KYP clinical anchor) is this map used as a prescription: combine classes that hit DIFFERENT steps.",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "transduction", label: "mechanical / thermal / chemical energy meets the TRPV transducer" },
          { from: "transduction", to: "transmission", label: "the Na+ current fires the first spike — the signal boards Aδ or C" },
          { from: "transmission", to: "modulation", label: "the signal reaches its first synapse (KYP station: the dorsal horn)" },
          { from: "modulation", to: "perception", label: "the tuned signal ascends (KYP station: spinothalamic tract) to the brain" },
          { from: "perception", to: "output", label: "which class can act where — the four printed blocker lists" },
        ],
      },
    },
    {
      id: "neuropathic-voltage-gated-na-channel-upregulation",
      title:
        "The neuropathic mechanism: neuronal dysfunction of the CNS or PNS → upregulation of voltage-gated Na+ channels → persistent (ectopic) activation → the nerve itself generates pain — diabetic peripheral neuropathy as the book's own worked example",
      context:
        "The Neuropathic pain subsection (book 235), verbatim: 'Caused by neuronal dysfunction of the CNS or PNS. Transmitted via upregulation and persistent activation of voltage-gated Na+ channels. Example: diabetic peripheral neuropathy.' (the channel-drug logic and the first-line class assignments are KYP clinical anchors)",
      flow: {
        nodes: [
          {
            id: "input",
            label: "A neuron of the CNS or PNS is dysfunctional — with NO noxious stimulus anywhere",
            sublabel:
              "Input — the book's opening clause, verbatim: 'Caused by neuronal dysfunction of the CNS or PNS.' This is the defining sort: nociceptive pain ANSWERS a stimulus ('in response to mechanical, thermal, or chemical stimuli'); neuropathic pain is the nerve's own disease — injury, metabolic stress (longstanding diabetes), compression, or degeneration — and the patient hurts with intact skin, no wound, no burn, no inflammation. The exam's tell: pain without a stimulus.",
            variant: "input",
          },
          {
            id: "upregulation",
            label: "Voltage-gated Na+ channels are UPREGULATED — more channels built into the membrane",
            sublabel:
              "The book's mechanism, first half, verbatim: 'upregulation and persistent activation of voltage-gated Na+ channels.' Upregulation means the dysfunctional neuron manufactures and installs MORE voltage-gated Na+ channels than it should — a lower firing threshold, a hair-trigger membrane. Note the channel family: VOLTAGE-GATED Na+ channels (the action-potential engine), not the TRPV transducer of nociceptive pain and not the ligand-gated channels of the ACh page above — each pain mechanism has its own channel.",
            variant: "process",
          },
          {
            id: "persistent-activation",
            label: "The channels are PERSISTENTLY ACTIVE — ectopic, self-sustaining firing without a stimulus",
            sublabel:
              "The book's mechanism, second half: 'persistent activation.' The upregulated channels fire on their own — ectopic discharges from the damaged membrane, a generator that never waits for a stimulus. Together the two words are the whole disease: upregulation (more channels) + persistent activation (channels that will not stop) = a nerve that broadcasts pain from its own territory.",
            variant: "process",
          },
          {
            id: "pain-output",
            label: "The nerve itself becomes the pain generator — the book's example: diabetic peripheral neuropathy",
            sublabel:
              "Target — the book's worked example, verbatim: 'Example: diabetic peripheral neuropathy.' Longstanding hyperglycemia injures peripheral neurons (the longest ones first — KYP clinical anchor), the injured nerves upregulate and persistently activate their voltage-gated Na+ channels, and the patient feels burning, tingling, lancinating pain — typically in a stocking distribution, worst at night, with no tissue injury to explain it (the parallel KYP anchors: trigeminal neuralgia, post-herpetic neuralgia, chemotherapy-induced neuropathy — the same channel logic in other territories).",
            variant: "target",
          },
          {
            id: "output",
            label: "The drug logic follows the mechanism — the nerve-excitability classes own neuropathic pain",
            sublabel:
              "Output — the exam's payoff: with no stimulus to block, the transduction-only classes (NSAIDs, acetaminophen, glucocorticoids) have nothing to act on — which is why neuropathic pain answers poorly to them. The first-line classes are the ones that act on the NERVE'S OWN EXCITABILITY and on the later steps (KYP clinical anchors, read off the book's own lists): gabapentinoids (transduction + modulation — pregabalin/gabapentin, first-line for diabetic neuropathy), SNRIs (modulation + perception — duloxetine, first-line), and TCAs (modulation + perception — amitriptyline). Opioids (transmission + perception) are reserved, not first-line — the step map explains the guideline.",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "upregulation", label: "neuronal dysfunction of the CNS or PNS — no stimulus required" },
          { from: "upregulation", to: "persistent-activation", label: "more channels → lower threshold → the membrane fires itself" },
          { from: "persistent-activation", to: "pain-output", label: "ectopic discharge is felt as pain in the nerve's territory" },
          { from: "pain-output", to: "output", label: "block the nerve's excitability, not a stimulus that isn't there" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "pain-transmission-map",
      title: "The pain-transmission map (an original KYP visual)",
      caption:
        "An original KYP pain-process map built from the section's own subsections (book 235): the STIMULUS band (mechanical / thermal / chemical — the three energies that start a nociceptive signal); the TRANSDUCTION node — the verbatim TRPV sentence with its glyph (stimulus → TRPV → Ca2+ influx → Na+ channel activation) and its six blocker chips (local anesthetics, α2-agonists, gabapentinoids, NSAIDs, acetaminophen, glucocorticoids); the TRANSMISSION node — the two fiber lanes (Aδ = sharp, acute; C = dull, throbbing, chronic) with the road blockers (local anesthetics, α2-agonists, opioids); the MODULATION node (TCAs, SSRIs, SNRIs, gabapentinoids) and the PERCEPTION node (α2-agonists, opioids, TCAs, SSRIs, SNRIs) with their KYP-extension station flags; the NEUROPATHIC contrast panel — no stimulus, neuronal dysfunction of the CNS or PNS, voltage-gated Na+ channel upregulation + persistent activation, diabetic peripheral neuropathy; the step × class BLOCKER MATRIX (seven class rows × four step columns — the α2-agonist row showing three of four); and the four-code mnemonic strip (all KYP-original).",
      notice:
        "Census (pdfimages): NO figure exists on the page (zero raster rows for pdf 257) — the section is typeset text, so this visual is an ORIGINAL_KYP_ADAPTATION (original KYP glyphs; nothing reproduced; the quoted sentences are carried verbatim and labeled). PAGE-STRUCTURE FINDING: the page prints NO pathway diagram and NO neurotransmitter account — the dorsal-horn / spinothalamic-tract / thalamus / cortex station chain, substance P / glutamate, and gate-control theory are NOT printed on this page; the station labels that seat the book's four processes (dorsal-horn synapse, spinothalamic tract, thalamus/cortex, descending modulation) are KYP extensions, flagged on the map itself. The blocker matrix is KYP's pivot of the book's own four printed lines — every cell is the book's own assignment. The Acetylcholine receptors section in the UPPER portion of the same page is EXCLUDED (the separate PH12 topic). The four codes are KYP-original (the section prints no mnemonic). Drug-name anchors (clonidine, lidocaine, gabapentin, amitriptyline, duloxetine, capsaicin) are flagged as KYP anchors.",
    },
    {
      kind: "table",
      title: "Book 235 — the Pain transmission section, verbatim",
      intro:
        "The section's entire printed content is two subsections. Every sentence is carried whole — the nociceptive definition with its three stimulus modalities, the TRPV mechanism, the fiber split, the four-process list with its blocker classes, and the neuropathic definition with the book's own worked example.",
      columns: [
        "SUBSECTION",
        "THE SECTION'S TEXT (book 235, verbatim)",
        "WHAT IT ESTABLISHES",
      ],
      rows: [
        [
          "Nociceptive pain — the definition and the fiber split",
          "Pain signals transmitted to the CNS in response to mechanical, thermal, or chemical stimuli. Transient receptor potential vanilloid ligand receptors cause Ca2+ influx–induced Na+ channel activation. Signals transmitted by Aδ fibers (sharp, acute pain) or C fibers (dull, throbbing, chronic pain).",
          "The peripheral half of the pathway, in two sentences. The DEFINITION names pain a TRANSMITTED signal and lists the only three energies that start it — mechanical, thermal, chemical. The MECHANISM sentence names the transducer: the vanilloid ligand receptor (TRPV), whose Ca2+ influx switches the nociceptor's Na+ channels on (TRPV is not itself the Na+ channel — its calcium signal INDUCES the channel's activation). The FIBER sentence names the two lanes: Aδ for the sharp, acute first pain; C for the dull, throbbing, chronic burn that follows (the myelination-speed clue is a KYP anchor beyond the page). Three sentences, and the entire stimulus-to-signal-to-highway chain is printed.",
        ],
        [
          "Nociceptive pain — the four-process list",
          "Processes involved in pain transmission: Transduction—blocked by local anesthetics, α2-agonists, gabapentinoids, NSAIDs, acetaminophen, glucocorticoids. Transmission—blocked by local anesthetics, α2-agonists, opioids. Modulation—blocked by TCAs, SSRIs, SNRIs, gabapentinoids. Perception—blocked by α2-agonists, opioids, TCAs, SSRIs, SNRIs.",
          "The section's spine — the step-to-drug map the entire analgesic shelf is organized by. Four processes, four blocker lists: TRANSDUCTION (six classes — the longest list: the anti-inflammatory trio NSAIDs/acetaminophen/glucocorticoids acts on the chemical milieu that drives TRPV, plus the channel drugs local anesthetics/gabapentinoids and the α2-agonists); TRANSMISSION (three — the road: local anesthetics, α2-agonists, opioids); MODULATION (four — the antidepressants TCAs/SSRIs/SNRIs enter here and nowhere earlier, plus the gabapentinoids); PERCEPTION (five — α2-agonists, opioids, TCAs, SSRIs, SNRIs: the peripheral-only classes drop out, the modulators carry through). The page prints no anatomy for these steps — the station labels (dorsal horn, spinothalamic tract, thalamus/cortex) are KYP extensions.",
        ],
        [
          "Neuropathic pain",
          "Caused by neuronal dysfunction of the CNS or PNS. Transmitted via upregulation and persistent activation of voltage-gated Na+ channels. Example: diabetic peripheral neuropathy.",
          "The exception that completes the page: pain with NO stimulus. The cause is the nerve itself ('neuronal dysfunction of the CNS or PNS'), the mechanism is channel disease ('upregulation and persistent activation of voltage-gated Na+ channels' — more channels, and channels that fire on their own), and the worked example is metabolic nerve injury (diabetic peripheral neuropathy — the stocking-distribution burn of longstanding diabetes). This one sentence is why neuropathic pain answers to the nerve-excitability classes (gabapentinoids, TCAs, SNRIs — KYP clinical anchors) and not to the stimulus-side classes (NSAIDs and kin act only at transduction, and there is no stimulus to transduce).",
        ],
      ],
      caption:
        "Two subsections, one architecture. The nociceptive subsection runs the signal from stimulus to consciousness — three stimulus energies, one transducer (TRPV → Ca2+ influx → Na+ channel activation), two fiber lanes (Aδ sharp/acute, C dull/throbbing/chronic), and four processes each carrying its own blocker list. The neuropathic subsection is the one-sentence counter-case: neuronal dysfunction, upregulated and persistently active voltage-gated Na+ channels, no stimulus at all. Read as a pair they are the entire basis of analgesic selection: the STEP the drug blocks (nociceptive) or the NERVE's own excitability (neuropathic). The verbatim lines carry their exam weight exactly as printed — the stimulus triplet, the TRPV mechanism, the fiber qualities, the four blocker lists, and the diabetic example.",
    },
    {
      kind: "table",
      title: "The step × class blocker matrix (KYP pivot of the book's own four lines)",
      intro:
        "The book prints the four process lines separately; this matrix pivots them — each drug class against each of the four steps. Every cell is the book's own printed assignment (a class appears in a column if and only if the book prints it in that process's blocker list); the matrix view itself, and the patterns it exposes, are KYP's.",
      columns: [
        "DRUG CLASS",
        "TRANSDUCTION",
        "TRANSMISSION",
        "MODULATION",
        "PERCEPTION",
        "THE PATTERN (KYP reading)",
      ],
      rows: [
        [
          "Local anesthetics",
          "✓ blocks",
          "✓ blocks",
          "—",
          "—",
          "The peripheral pair: the local anesthetic blocks the Na+ channel at the transducer's target (transduction) and again along the axon (transmission) — then stops. Never central: no entry in modulation or perception.",
        ],
        [
          "α2-agonists",
          "✓ blocks",
          "✓ blocks",
          "—",
          "✓ blocks",
          "THREE OF FOUR — the widest reach on the page: everything but modulation (KYP anchors: clonidine, dexmedetomidine — the α2 receptors themselves live on the book-234 wiring diagram, the completed autonomic-receptors topic).",
        ],
        [
          "Opioids",
          "—",
          "✓ blocks",
          "—",
          "✓ blocks",
          "The road and the room, never the starting line: opioids enter at transmission and peak at perception — the conscious endpoint is where they ultimately work. They never appear in the transduction or modulation lists.",
        ],
        [
          "Gabapentinoids",
          "✓ blocks",
          "—",
          "✓ blocks",
          "—",
          "The split agent: the gabapentinoid blocks the channel machinery of transduction AND the tuning of modulation (KYP anchors: gabapentin, pregabalin — the first-line pair for the neuropathic panel below).",
        ],
        [
          "TCAs",
          "—",
          "—",
          "✓ blocks",
          "✓ blocks",
          "The antidepressants enter late and carry through: modulation + perception only (KYP anchor: amitriptyline — the shared norepinephrine/serotonin logic of analgesia and mood).",
        ],
        [
          "SSRIs / SNRIs",
          "—",
          "—",
          "✓ blocks",
          "✓ blocks",
          "Same late entry as the TCAs — modulation + perception (KYP anchor: duloxetine, the SNRI with the diabetic-neuropathy indication; the SSRI/SNRI split in analgesic strength is beyond the page).",
        ],
        [
          "NSAIDs, acetaminophen, glucocorticoids",
          "✓ blocks",
          "—",
          "—",
          "—",
          "The starting-line trio: transduction ONLY — they act on the chemical milieu that drives the TRPV transducer, and nowhere else in the chain. This single row is why they underperform in neuropathic pain (no stimulus to transduce).",
        ],
      ],
      caption:
        "The patterns the flat list hides (all KYP readings of the book's own cells): α2-AGONISTS BLOCK THREE OF FOUR STEPS — the only class printed in three lists; OPIOIDS OWN THE ROAD AND THE ROOM (transmission + perception) and never the starting line; NSAIDS NEVER LEAVE THE STARTING LINE (transduction only, with acetaminophen and glucocorticoids); the ANTIDEPRESSANT CLASSES (TCAs, SSRIs, SNRIs) enter only at modulation and carry through to perception — the latest entrance on the page; and the LOCAL ANESTHETICS + α2-AGONISTS pair is the only one that covers the two peripheral steps. Multimodal analgesia (KYP anchor) is this matrix used as a prescription — combine classes from DIFFERENT columns so no single step carries the whole signal.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem:
          "A 24-year-old man steps barefoot on a nail. He reports an immediate, sharp, well-localized pain the instant the nail punctures his foot, followed about a second later by a duller, throbbing, more diffuse ache that worsens over the next minute and lingers. The question asks which fiber types carried each phase, and in what order the signals reached his CNS.",
        discriminator:
          "'Signals transmitted by Aδ fibers (sharp, acute pain) or C fibers (dull, throbbing, chronic pain).' — the two-lane periphery: the sharp first pain and the dull second pain are two different fiber populations",
        concept: "The Aδ vs C fiber split — fast sharp lane vs slow dull lane",
        answer:
          "The immediate sharp pain traveled on Aδ fibers ('sharp, acute pain' — the book's own pairing); the delayed dull, throbbing ache traveled on C fibers ('dull, throbbing, chronic pain'). The one-second lag is the two lanes' speed difference — Aδ is thinly myelinated and fast, C is unmyelinated and slow (the myelination clue is a KYP anchor beyond the page; the qualities themselves are printed). Any stem with two-phase pain — sharp-then-dull, first-then-second — is handing you this split in time order: Aδ first, C second.",
      },
      {
        stem:
          "A pharmacology question describes a class of drugs that 'blocks the process by which noxious stimuli are converted into electrical activity in the peripheral terminal of the nociceptor' and asks which classes from a list can act at that step — and, for contrast, which single step a purely anti-inflammatory regimen (an NSAID with a glucocorticoid) can block and which it cannot.",
        discriminator:
          "'Transduction—blocked by local anesthetics, α2-agonists, gabapentinoids, NSAIDs, acetaminophen, glucocorticoids' — the longest blocker list of the four, and the only list the NSAIDs and glucocorticoids appear in",
        concept: "The step-to-drug map — transduction's six-class list vs the later steps' lists",
        answer:
          "The described step is TRANSDUCTION — the stimulus-to-signal conversion, and the book's blocker list for it is the longest: local anesthetics, α2-agonists, gabapentinoids, NSAIDs, acetaminophen, and glucocorticoids. The anti-inflammatory regimen blocks transduction ONLY — NSAIDs and glucocorticoids appear in the transduction list and in none of the other three: they act on the chemical milieu that drives the TRPV transducer ('Transient receptor potential vanilloid ligand receptors cause Ca2+ influx–induced Na+ channel activation'), upstream of the signal. They cannot block transmission, modulation, or perception — which is the pharmacology behind opioid-sparing multimodal regimens that add classes from the OTHER columns (KYP anchor).",
      },
      {
        stem:
          "A 61-year-old woman with a 15-year history of type 2 diabetes mellitus presents with six months of constant burning and tingling in both feet, worse at night, extending to the mid-calf in a symmetric stocking-like pattern. The skin is intact, pulses are palpable, there is no wound, no erythema, and no temperature change — and careful examination shows decreased pinprick and vibration sensation in the same distribution. The question asks for the mechanism of her pain.",
        discriminator:
          "'Caused by neuronal dysfunction of the CNS or PNS. Transmitted via upregulation and persistent activation of voltage-gated Na+ channels. Example: diabetic peripheral neuropathy.' — pain without a stimulus, in the nerve's own territory",
        concept: "The neuropathic mechanism — voltage-gated Na+ channel upregulation + persistent activation",
        answer:
          "This is NEUROPATHIC pain — the book's own worked example: diabetic peripheral neuropathy. The mechanism is printed verbatim: neuronal dysfunction of the PNS (the longest peripheral neurons, injured by longstanding hyperglycemia — KYP anchor) with 'upregulation and persistent activation of voltage-gated Na+ channels' — more channels built into the membrane, and channels that fire on their own. The exam's tell is the pairing of pain with NO stimulus and NO tissue injury: intact skin, no inflammation, pain in a nerve distribution. Contrast the nociceptive definition — pain 'in response to mechanical, thermal, or chemical stimuli' — which this patient has none of.",
      },
    ],
    traps: [
      {
        a: "All pain is the same signal, so any analgesic works for any pain — the diabetic patient's burning feet should respond to NSAIDs just as an ankle sprain does",
        b: "Conflating nociceptive and neuropathic pain because both present as 'pain' and both are treated by drug classes on this same page",
        whyConfused:
          "The two mechanisms live on one page under one section header, and many of the same class names (α2-agonists, opioids, TCAs, gabapentinoids) appear in both stories — so the two pains blur into one 'pain pharmacology' concept",
        keyDifference:
          "The page defines them as opposites: nociceptive pain is a TRANSMITTED signal 'in response to mechanical, thermal, or chemical stimuli' — there is always a stimulus to block; neuropathic pain is 'Caused by neuronal dysfunction of the CNS or PNS' with 'upregulation and persistent activation of voltage-gated Na+ channels' — no stimulus at all. The drug logic splits on exactly that line: NSAIDs, acetaminophen, and glucocorticoids block transduction ONLY (the stimulus side), so they underperform in neuropathic pain; the nerve-excitability classes (gabapentinoids) and the late-step classes (TCAs, SNRIs — modulation + perception) are first-line for neuropathic pain (KYP anchors).",
        clue:
          "Ask the sort question FIRST: is there a stimulus or tissue injury (nociceptive), or intact skin and pain in a nerve's territory (neuropathic)? Mnemonic: NO STIMULUS, STILL PAIN — the Na+ channel's fault.",
      },
      {
        a: "Opioids block pain at its source — they stop the transduction of noxious stimuli, which is why they work for everything",
        b: "Assigning opioids to the transduction list because they are the most familiar 'strong analgesic' and transduction is the first step",
        whyConfused:
          "Transduction sounds like 'the step that matters' for a powerful analgesic, and the opioids' central action is easy to imagine reaching 'everywhere'",
        keyDifference:
          "The book's printed lists put opioids in exactly two: 'Transmission—blocked by local anesthetics, α2-agonists, opioids' and 'Perception—blocked by α2-agonists, opioids, TCAs, SSRIs, SNRIs.' Opioids are ABSENT from the transduction list (that list belongs to local anesthetics, α2-agonists, gabapentinoids, NSAIDs, acetaminophen, glucocorticoids) and from the modulation list. OPIOIDS OWN THE ROAD AND THE ROOM — never the starting line.",
        clue:
          "For any 'which step does drug X block' question, recite the membership of each list before reading the options — opioids appear in exactly two (transmission, perception). Mnemonic: OPIOIDS OWN THE ROAD AND THE ROOM.",
      },
      {
        a: "NSAIDs and acetaminophen are general analgesics that blunt pain perception centrally — they appear at every step of pain transmission",
        b: "Carrying the familiar over-the-counter status of NSAIDs/acetaminophen into a broad central action, because 'pain relief' feels like it must mean acting on perception",
        whyConfused:
          "NSAIDs and acetaminophen are the most-used analgesics, and their peripheral-acting mechanism (the chemical milieu of transduction) is invisible to everyday use",
        keyDifference:
          "The book's lists place NSAIDs, acetaminophen, and glucocorticoids in ONE list only — 'Transduction—blocked by local anesthetics, α2-agonists, gabapentinoids, NSAIDs, acetaminophen, glucocorticoids.' They are absent from transmission, modulation, AND perception. NSAIDS NEVER LEAVE THE STARTING LINE — they act on the inflammatory chemistry that drives the TRPV transducer, and nothing downstream. This single placement is also why they fail in neuropathic pain: with no stimulus, there is no transduction to block.",
        clue:
          "When a stem asks 'which step can an NSAID block' or pairs an NSAID with a chronic neuropathic pain scenario, the answer turns on the transduction-only placement. Mnemonic: NSAIDS NEVER LEAVE THE STARTING LINE.",
      },
      {
        a: "The sharp, acute first pain travels on C fibers because C comes after A in the alphabet — the slowest, smallest fiber handles the quickest warning signal",
        b: "Sorting the two fiber types by alphabet or by size intuition instead of by the printed quality pairings",
        whyConfused:
          "The labels Aδ and C carry no intrinsic meaning for most students, and 'δ' (the Greek D) looks 'later/slower' than the plain C, inviting the exact reversal of the printed pairing",
        keyDifference:
          "The book's sentence pins the qualities to the fibers: 'Aδ fibers (sharp, acute pain) or C fibers (dull, throbbing, chronic pain).' Aδ = the sharp, acute first jab (thinly myelinated, fast — KYP anchor); C = the dull, throbbing, chronic burn (unmyelinated, slow — KYP anchor). The temporal logic of the exam stem confirms it: the FIRST pain to arrive after an injury is the sharp one — the fast fiber — Aδ; the slow second pain is C.",
        clue:
          "DELTA IS THE DASH, C IS THE CRAWL: any stem that times the two pains (sharp-then-dull, first-then-second) is printing the answer — Aδ first, C second. Never sort the fibers by alphabet; sort by the printed qualities.",
      },
    ],
    pivots: [
      {
        lookAlike: "A stem that names an analgesic drug class — or asks 'which step of pain transmission does this drug block' or 'which class blocks step X'",
        differentiator:
          "Run the four lists as a lookup table before reading the options. TRANSDUCTION: local anesthetics, α2-agonists, gabapentinoids, NSAIDs, acetaminophen, glucocorticoids. TRANSMISSION: local anesthetics, α2-agonists, opioids. MODULATION: TCAs, SSRIs, SNRIs, gabapentinoids. PERCEPTION: α2-agonists, opioids, TCAs, SSRIs, SNRIs. The class's membership set IS its answer: local anesthetics = the two peripheral steps; α2-agonists = three of four (all but modulation); opioids = transmission + perception; gabapentinoids = transduction + modulation; TCAs/SSRIs/SNRIs = modulation + perception; NSAIDs/acetaminophen/glucocorticoids = transduction only.",
        correctPath:
          "Name the step first (stimulus-to-signal conversion = transduction; signal travel = transmission; signal tuning = modulation; conscious endpoint = perception), then recite that step's printed list, then match the option to it. Most distractors are classes from the WRONG list — a familiar analgesic placed at a step it never appears in (opioids at transduction, NSAIDs at perception). The reverse question ('which steps can class X block') is the same lookup read row-wise — and the α2-agonist row is the page's showpiece: three of four.",
      },
      {
        lookAlike: "A chronic pain vignette — burning, tingling, lancinating pain, often in a glove-or-stocking or nerve territory, with intact skin and no injury — asking for mechanism or first-line drug class",
        differentiator:
          "The no-stimulus finding sorts it: pain 'in response to mechanical, thermal, or chemical stimuli' (the nociceptive definition) requires a stimulus; this vignette has none — it is 'Caused by neuronal dysfunction of the CNS or PNS' with 'upregulation and persistent activation of voltage-gated Na+ channels' (the neuropathic mechanism, diabetic peripheral neuropathy as the book's example). The mechanism then picks the class: the nerve-excitability and late-step classes (gabapentinoids, TCAs, SNRIs), NOT the transduction-only trio (NSAIDs, acetaminophen, glucocorticoids).",
        correctPath:
          "Sort the pain type before touching the drug options: (1) Is there a stimulus or tissue injury? Yes → nociceptive → then find the step and read its list. No → neuropathic → the Na+ channel mechanism. (2) For neuropathic pain, the first-line classes follow from the page's own lists: gabapentinoids (transduction + modulation) and TCAs/SNRIs (modulation + perception) — classes that act on the nerve's own machinery or the late steps; opioids are reserved, and the NSAID/glucocorticoid row has nothing to act on. Diabetic feet + burning + intact skin = the book's own example, verbatim.",
      },
    ],
    miniCase: {
      vignette:
        "A 58-year-old man with a 12-year history of poorly controlled type 2 diabetes mellitus (last HbA1c 9.6%) presents with eight months of constant burning and electric, lancinating jabs in both feet and lower legs, worst at night — he describes sleeping with his feet out of the blankets because even the sheet's touch is unpleasant. Examination shows intact skin, palpable dorsalis pedis pulses, no wounds, no erythema, and normal temperature; pinprick and vibration sense are reduced to the mid-calf in a symmetric stocking distribution, and monofilament testing is abnormal. He has already tried ibuprofen 600 mg three times daily for a month with no relief. The student at the bedside asks why the NSAID did nothing, and what should be tried instead.",
      question:
        "Which mechanism explains this patient's pain, why did the NSAID fail, and which drug class(es) does the mechanism point to as the appropriate next step — and at which step(s) of pain transmission do they act?",
      options: [
        {
          label:
            "NEUROPATHIC PAIN — neuronal dysfunction of the PNS with upregulation and persistent activation of voltage-gated Na+ channels (the nerve itself generates the pain); the NSAID failed because NSAIDs block transduction only and there is no stimulus to transduce; the mechanism points to the gabapentinoids (transduction + modulation) and the TCAs/SNRIs (modulation + perception) — the classes that act on the nerve's own excitability and the late steps.",
          text: "Neuropathic Na+-channel pain; gabapentinoids ± TCAs/SNRIs — not NSAIDs.",
          correct: true,
          why:
            "Correct on all three counts, and every element is the source page's own. THE MECHANISM is the book's neuropathic definition verbatim: 'Caused by neuronal dysfunction of the CNS or PNS. Transmitted via upregulation and persistent activation of voltage-gated Na+ channels. Example: diabetic peripheral neuropathy.' — this patient IS the example (longstanding diabetes, stocking-distribution burning, intact skin, reduced sensation). THE NSAID FAILURE follows from the page's own lists: NSAIDs appear ONLY in 'Transduction—blocked by local anesthetics, α2-agonists, gabapentinoids, NSAIDs, acetaminophen, glucocorticoids' — the stimulus side — and there is no stimulus here to transduce. THE NEXT STEP follows from the same lists read for the neuropathic context: gabapentinoids (transduction + modulation — pregabalin and gabapentin are first-line for diabetic neuropathy) and TCAs/SNRIs (modulation + perception — amitriptyline, duloxetine; duloxetine carries the diabetic-neuropathy indication), with opioids reserved. The drug names and guideline assignments are KYP clinical anchors; the step assignments are the book's printed lists.",
        },
        {
          label:
            "NOCICEPTIVE PAIN — a chemical stimulus from ongoing subclinical tissue injury in the feet, transduced by TRPV-driven Ca2+ influx into Na+ channel activation; the NSAID failed only because the dose was too low, and the right answer is a stronger anti-inflammatory regimen (a glucocorticoid course with maximum-dose acetaminophen).",
          text: "Nociceptive chemical pain — escalate the anti-inflammatory regimen.",
          why:
            "Sort error — the stem prints the nociceptive definition's requirements and this patient has none of them. Nociceptive pain is 'transmitted to the CNS in response to mechanical, thermal, or chemical stimuli' — but the skin is intact, there is no wound, no erythema, no inflammation, and the pain follows a NERVE distribution with sensory LOSS, not tissue injury. Escalating the anti-inflammatory class misreads the page's own placement: NSAIDs and glucocorticoids block transduction only, and transduction needs a stimulus. The correct reading of 'NSAID did nothing' is not 'too low a dose' but 'wrong step entirely' — the neuropathic mechanism has no transduction to block.",
        },
        {
          label:
            "The pain is an Aδ-fiber phenomenon — the sharp, acute lane has been chronically recruited by the diabetes, so the first-line agent is a local anesthetic block of transmission (and a lidocaine patch is curative).",
          text: "Aδ-lane overactivity — block transmission with local anesthetics.",
          why:
            "Right page, wrong mechanism and wrong lane. The fiber split belongs to the NOCICEPTIVE story ('Signals transmitted by Aδ fibers (sharp, acute pain) or C fibers (dull, throbbing, chronic pain)') — it presumes a transduced stimulus. This patient's mechanism is the NEUROPATHIC one: 'neuronal dysfunction of the CNS or PNS … upregulation and persistent activation of voltage-gated Na+ channels' — a channel disease of the nerve, not a hyperactive lane of a normal highway. (His burning, nightly quality, if a fiber is invoked at all, is the C-lane quality — dull, chronic — not the Aδ sharp/acute; KYP anchor.) Local anesthetics do appear in the transmission list, but as a systemic answer here they are not the mechanism-appropriate first line the stem is testing.",
        },
        {
          label:
            "The problem is perception — diabetic nerves deliver a normal signal that the cortex over-attends; because perception is 'blocked by α2-agonists, opioids, TCAs, SSRIs, SNRIs', the best next step is an opioid regimen to blunt the conscious endpoint, titrated upward until the burning stops.",
          text: "Perception problem — start an opioid regimen and titrate.",
          why:
            "Half-right list, wrong mechanism and wrong priority. The perception list is quoted correctly ('α2-agonists, opioids, TCAs, SSRIs, SNRIs' — opioids ARE in it), but the premise invents a normal signal with cortical over-attention — the page's neuropathic mechanism says the signal itself is pathological ('upregulation and persistent activation of voltage-gated Na+ channels'), generated ectopically by the dysfunctional nerve. And even within the perception list, the exam's order matters: for neuropathic pain the first-line members are the modulator classes (TCAs/SNRIs) and the gabapentinoids (which sit in transduction + modulation, not perception) — opioids are reserved for refractory cases, not titrated first (KYP anchor: the guideline logic follows the mechanism). Choosing the opioid first reads one printed list while ignoring the page's other three.",
        },
        {
          label:
            "The burning is TRPV-mediated — diabetes upregulates the transient receptor potential vanilloid receptors themselves, and a TRPV-blocking agent (or capsaicin depletion of the receptor) is the specific answer; the NSAID failed because it was aimed at the wrong molecular target.",
          text: "TRPV upregulation — block the vanilloid receptor specifically.",
          why:
            "Mechanism transplant — the right molecule from the wrong subsection. TRPV is the NOCICEPTIVE transducer: 'Transient receptor potential vanilloid ligand receptors cause Ca2+ influx–induced Na+ channel activation' — it converts an incoming mechanical/thermal/chemical stimulus into a signal. The neuropathic subsection names a DIFFERENT channel: the VOLTAGE-GATED Na+ channel, upregulated and persistently active — 'Caused by neuronal dysfunction of the CNS or PNS. Transmitted via upregulation and persistent activation of voltage-gated Na+ channels.' The book assigns diabetes to the Na+-channel story, not the TRPV story (capsaicin — a TRPV AGONIST that depletes substance-P-containing nociceptor terminals — exists as a topical option, but as a KYP anchor beyond this page's printed set, not as the mechanism the stem is testing).",
        },
      ],
      reasoning:
        "The vignette is the page's neuropathic subsection played as a clinic visit, with the NSAID failure built in as the step-map lesson. (1) THE SORT — intact skin, palpable pulses, no wound or inflammation, pain in a symmetric stocking distribution with sensory loss: there is NO stimulus, so the nociceptive definition ('in response to mechanical, thermal, or chemical stimuli') cannot apply; this is 'Caused by neuronal dysfunction of the CNS or PNS' — neuropathic, and the patient is the book's own example: 'Example: diabetic peripheral neuropathy.' (2) THE MECHANISM — 'upregulation and persistent activation of voltage-gated Na+ channels': the injured peripheral neurons build more Na+ channels and fire them without being asked; the nerve itself is the generator. (3) THE NSAID FAILURE — the page's own lists explain it: NSAIDs (with acetaminophen and glucocorticoids) appear ONLY in the transduction list — the stimulus-to-signal step — and with no stimulus there is nothing to transduce; escalating the dose cannot create a target. (4) THE NEXT STEP — read off the same lists for the classes that act on the nerve's own machinery and the late steps: gabapentinoids (transduction + modulation; pregabalin/gabapentin, first-line — KYP anchors) and TCAs/SNRIs (modulation + perception; amitriptyline/duloxetine, first-line — duloxetine with the diabetic indication), opioids reserved. The distractors each transplant one printed element to the wrong slot: nociceptive-with-a-chemical-stimulus (invents a stimulus), the Aδ lane (the wrong subsection's anatomy), perception-with-opioids-first (right list, wrong priority, invented premise), and TRPV (the nociceptive transducer swapped for the neuropathic channel).",
    },
  },
  mnemonics: [
    {
      code: "TRACK THE MESSAGE'S PATH — Transduction → Transmission → Modulation → Perception (the stimulus becomes a signal; the signal travels; the signal is tuned; the signal is felt)",
      meaning:
        "The four-process spine (KYP-original code; the four process names and their blocker lists are the book's own): TRANSDUCTION converts the mechanical/thermal/chemical stimulus into a signal (TRPV → Ca2+ influx → Na+ channel activation); TRANSMISSION carries it (Aδ sharp/acute, C dull/throbbing/chronic); MODULATION tunes it up or down (the synapse and descending control — station labels beyond the page, KYP extensions); PERCEPTION makes it conscious. Four stations, four printed blocker lists — the step names the drug.",
      memorizes: "The four processes of pain transmission in order, with what each does",
      whenToUse:
        "Any stem about where an analgesic acts, which step a drug blocks, or the sequence of nociceptive processing — recite the four stations before reading options",
      clinical:
        "Multimodal analgesia (KYP anchor) prescribes classes from DIFFERENT stations on purpose — an NSAID (transduction) + a gabapentinoid (transduction + modulation) + an opioid (transmission + perception) covers the path at three separate steps, which is why the combination works when any single class is not enough.",
    },
    {
      code: "DELTA IS THE DASH, C IS THE CRAWL — Aδ fibers carry the sharp, acute first jab; C fibers carry the dull, throbbing, chronic burn",
      meaning:
        "The fiber split (KYP-original code; the quality pairings are the book's own printed pairings): 'Signals transmitted by Aδ fibers (sharp, acute pain) or C fibers (dull, throbbing, chronic pain).' Aδ = the fast lane (thinly myelinated — KYP anchor) = sharp, acute; C = the slow lane (unmyelinated — KYP anchor) = dull, throbbing, chronic. Never sort by alphabet — sort by the printed qualities, and let the timing of a two-phase injury story confirm it (sharp first, dull second).",
      memorizes: "Which fiber carries which pain quality — and the two-phase time course of acute injury pain",
      whenToUse:
        "Any vignette with two-phase pain (immediate sharp then delayed dull), any question pairing a fiber type with a pain quality, or any 'which fiber is affected' stem",
      clinical:
        "Step on a nail: the sharp well-localized first pain is Aδ arriving fast; the dull diffuse throbbing that builds over the next seconds-to-minutes is C arriving slow (KYP anchor: the C fiber's slower conduction is the physiology behind the lag — and the reason neuropathic burning, when a lane is invoked, reads as the C-lane quality).",
    },
    {
      code: "α2 BLOCKS THREE OF FOUR — transduction, transmission, perception (everything but modulation); OPIOIDS OWN THE ROAD AND THE ROOM (transmission + perception); NSAIDs NEVER LEAVE THE STARTING LINE (transduction only)",
      meaning:
        "The blocker-matrix patterns (KYP-original code; every cell is the book's own printed assignment): the α2-agonists appear in three of the four lists (all but modulation) — the widest reach on the page; the opioids appear in exactly two (transmission + perception) — the travel and the endpoint, never the start; NSAIDs, acetaminophen, and glucocorticoids appear in exactly one (transduction) — the starting line; the antidepressant classes (TCAs, SSRIs, SNRIs) enter only at modulation and carry through to perception — the latest entrance; local anesthetics cover the two peripheral steps (transduction + transmission); gabapentinoids split transduction + modulation.",
      memorizes: "Which step(s) each of the nine drug classes can block — the whole step-to-drug map in one pattern",
      whenToUse:
        "Any 'which step does this class block' or 'which class blocks this step' question, and any analgesic-selection stem that hinges on where a drug acts",
      clinical:
        "The α2-agonists are clonidine and dexmedetomidine (KYP anchors — their α2 receptors sit on the book-234 wiring diagram of the completed autonomic-receptors topic); their three-of-four reach is why dexmedetomidine sedates with analgesia and clonidine potentiates epidural anesthesia; the NSAID row's single cell is why they fail in stimulus-free neuropathic pain.",
    },
    {
      code: "NO STIMULUS, STILL PAIN — neuropathic pain is the upregulated, persistently active voltage-gated Na+ channel's fault; diabetic peripheral neuropathy is the book's own example",
      meaning:
        "The nociceptive-vs-neuropathic splitter (KYP-original code; the mechanism sentence and the example are the book's own, verbatim): nociceptive pain ANSWERS a stimulus ('mechanical, thermal, or chemical'); neuropathic pain needs none — 'Caused by neuronal dysfunction of the CNS or PNS. Transmitted via upregulation and persistent activation of voltage-gated Na+ channels.' The two words carry the disease: UPREGULATION (more channels — a hair-trigger membrane) and PERSISTENT ACTIVATION (channels that fire on their own — ectopic discharge). The nerve itself is the generator.",
      memorizes: "The neuropathic mechanism and its defining contrast with nociceptive pain",
      whenToUse:
        "Any chronic-pain vignette with intact skin and a nerve distribution (burning feet, lancinating jabs, allodynia), and any question about why NSAIDs underperform or which class is first-line there",
      clinical:
        "Diabetic peripheral neuropathy (the book's example) — stocking-distribution burning with sensory loss in longstanding diabetes; the same channel logic runs trigeminal neuralgia, post-herpetic neuralgia, and chemotherapy-induced neuropathy (KYP anchors); first-line classes are the nerve-excitability and late-step ones — gabapentinoids (transduction + modulation) and TCAs/SNRIs (modulation + perception).",
    },
  ],
  rapidReview: {
    s30: [
      "'Pain signals transmitted to the CNS in response to mechanical, thermal, or chemical stimuli.' — the nociceptive definition: pain is a TRANSMITTED signal answering three stimulus energies.",
      "'Transient receptor potential vanilloid ligand receptors cause Ca2+ influx–induced Na+ channel activation.' — the transducer: TRPV's Ca2+ influx switches the nociceptor's Na+ channels on.",
      "'Signals transmitted by Aδ fibers (sharp, acute pain) or C fibers (dull, throbbing, chronic pain).'",
      "'Transduction—blocked by local anesthetics, α2-agonists, gabapentinoids, NSAIDs, acetaminophen, glucocorticoids' — the longest list (six classes) of the four.",
      "'Transmission—blocked by local anesthetics, α2-agonists, opioids' — the road: three classes only; the opioids' first appearance.",
      "'Modulation—blocked by TCAs, SSRIs, SNRIs, gabapentinoids' — the antidepressant classes enter here and nowhere earlier.",
      "'Perception—blocked by α2-agonists, opioids, TCAs, SSRIs, SNRIs' — the endpoint: local anesthetics and the NSAID trio drop out; the modulators carry through.",
      "'Caused by neuronal dysfunction of the CNS or PNS.' — the neuropathic definition: the nerve is the story, no stimulus needed.",
      "'Transmitted via upregulation and persistent activation of voltage-gated Na+ channels.' — the neuropathic mechanism: more channels, and channels that fire on their own.",
      "'Example: diabetic peripheral neuropathy.' — the book's own worked example: the stocking-distribution burn of longstanding diabetes.",
    ],
    m3: [
      "TRACK THE MESSAGE'S PATH — Transduction → Transmission → Modulation → Perception (stimulus becomes signal; signal travels; signal is tuned; signal is felt).",
      "DELTA IS THE DASH, C IS THE CRAWL — Aδ = sharp, acute (first jab); C = dull, throbbing, chronic (slow burn).",
      "α2 BLOCKS THREE OF FOUR (transduction, transmission, perception); OPIOIDS OWN THE ROAD AND THE ROOM; NSAIDs NEVER LEAVE THE STARTING LINE.",
      "NO STIMULUS, STILL PAIN — upregulated, persistently active voltage-gated Na+ channels; diabetic peripheral neuropathy.",
    ],
    m10: [
      "The whole page in one breath: two pains — NOCICEPTIVE (a transmitted signal answering mechanical/thermal/chemical stimuli) and NEUROPATHIC (neuronal dysfunction with upregulated, persistently active voltage-gated Na+ channels) — and four processes (Transduction, Transmission, Modulation, Perception), each with its own printed blocker list.",
      "The peripheral chain, verbatim: stimulus → 'Transient receptor potential vanilloid ligand receptors cause Ca2+ influx–induced Na+ channel activation' → 'Signals transmitted by Aδ fibers (sharp, acute pain) or C fibers (dull, throbbing, chronic pain).'",
      "The step-to-drug map — TRANSDUCTION: local anesthetics, α2-agonists, gabapentinoids, NSAIDs, acetaminophen, glucocorticoids · TRANSMISSION: local anesthetics, α2-agonists, opioids · MODULATION: TCAs, SSRIs, SNRIs, gabapentinoids · PERCEPTION: α2-agonists, opioids, TCAs, SSRIs, SNRIs.",
      "The matrix patterns (KYP readings of the book's own cells): α2-agonists = 3 of 4 steps (all but modulation); opioids = transmission + perception only; gabapentinoids = transduction + modulation; TCAs/SSRIs/SNRIs = modulation + perception (the latest entrance); local anesthetics = the two peripheral steps; NSAIDs/acetaminophen/glucocorticoids = transduction only.",
      "The fiber split with its qualities: Aδ = sharp, acute (thinly myelinated, fast — KYP anchor); C = dull, throbbing, chronic (unmyelinated, slow — KYP anchor) — two-phase injury pain prints the answer: sharp first (Aδ), dull second (C).",
      "The neuropathic mechanism, both words: UPREGULATION (more voltage-gated Na+ channels — a hair-trigger membrane) + PERSISTENT ACTIVATION (ectopic, self-sustaining firing) = the nerve itself generates pain — 'Example: diabetic peripheral neuropathy.'",
      "Provenance discipline: the page prints NO pathway diagram and NO neurotransmitter account — the dorsal-horn/spinothalamic/thalamus/cortex station chain, substance P/glutamate, and gate-control theory are NOT on this page; the station labels that seat the four processes are KYP extensions, flagged wherever they appear.",
      "The drug logic the map produces: NSAIDs (and acetaminophen, glucocorticoids) underperform in neuropathic pain because they block transduction only and there is no stimulus; first-line for neuropathic pain = gabapentinoids (transduction + modulation) + TCAs/SNRIs (modulation + perception) — KYP clinical anchors read off the book's own lists.",
      "The clinical anchors by class (all KYP, beyond the page): α2-agonists = clonidine, dexmedetomidine; local anesthetics = lidocaine-type; gabapentinoids = gabapentin, pregabalin; TCAs = amitriptyline; SNRIs = duloxetine (the diabetic indication); TRPV's own drug story = capsaicin (an agonist that depletes the terminal).",
      "The exam's reading order: (1) SORT the pain — stimulus present (nociceptive) or absent (neuropathic); (2) if nociceptive, FIND the fiber (Aδ sharp/acute vs C dull/chronic) and the STEP; (3) READ the step's printed blocker list — then match the options; for neuropathic, go straight to the Na+-channel mechanism and its first-line classes.",
    ],
  },
  recall: [
    {
      q: "The Pain transmission section of book 235 prints a four-line list under 'Processes involved in pain transmission:' — recite all four lines verbatim, with every blocker class.",
      a:
        "'Transduction—blocked by local anesthetics, α2-agonists, gabapentinoids, NSAIDs, acetaminophen, glucocorticoids. Transmission—blocked by local anesthetics, α2-agonists, opioids. Modulation—blocked by TCAs, SSRIs, SNRIs, gabapentinoids. Perception—blocked by α2-agonists, opioids, TCAs, SSRIs, SNRIs.' — six classes at transduction, three at transmission, four at modulation, five at perception; the α2-agonists appear in three of the four (all but modulation), the opioids in two (transmission + perception), the NSAID trio in one (transduction only).",
    },
    {
      q: "Aδ fibers vs C fibers — which pain quality does each carry, and what makes them fast vs slow (the speed clue beyond the page)?",
      a:
        "The book's sentence: 'Signals transmitted by Aδ fibers (sharp, acute pain) or C fibers (dull, throbbing, chronic pain).' Aδ = the sharp, acute first pain — thinly MYELINATED, fast (KYP anchor); C = the dull, throbbing, chronic second pain — UNMYELINATED, slow (KYP anchor). Two-phase injury pain (nail in the foot) prints the order: sharp first on Aδ, dull second on C. Sort by the printed qualities, never by the alphabet.",
    },
    {
      q: "How does a noxious stimulus become an electrical signal at the nociceptor — and what is TRPV's exact role (is TRPV the Na+ channel)?",
      a:
        "The book's sentence, verbatim: 'Transient receptor potential vanilloid ligand receptors cause Ca2+ influx–induced Na+ channel activation.' TRPV is NOT itself the Na+ channel — it is the vanilloid LIGAND receptor whose Ca2+ INFUX switches the nociceptor's Na+ channels ON: a two-step transduction (ligand → TRPV → Ca2+ in → Na+ channel activation → depolarizing current → the first action potential). The stimulus energies that drive it are the book's own list: mechanical, thermal, or chemical. (KYP anchor: capsaicin is TRPV's own ligand — the hot-pepper receptor.)",
    },
    {
      q: "Nociceptive vs neuropathic pain — give the book's definition of each and the mechanism sentence that belongs to neuropathic pain, with the worked example.",
      a:
        "NOCICEPTIVE: 'Pain signals transmitted to the CNS in response to mechanical, thermal, or chemical stimuli.' — a stimulus is always the start of the story. NEUROPATHIC: 'Caused by neuronal dysfunction of the CNS or PNS. Transmitted via upregulation and persistent activation of voltage-gated Na+ channels. Example: diabetic peripheral neuropathy.' — no stimulus at all; the nerve's own channels are upregulated (more of them) and persistently active (firing on their own), so the nerve itself generates pain. The sort question comes first in every stem: stimulus present → nociceptive; intact skin + nerve territory → neuropathic.",
    },
    {
      q: "The blocker matrix — for each class, name every step it can block (and the pattern this exposes): local anesthetics, α2-agonists, opioids, gabapentinoids, TCAs, SSRIs/SNRIs, NSAIDs + acetaminophen + glucocorticoids.",
      a:
        "Local anesthetics — transduction + transmission (the two peripheral steps). α2-agonists — transduction + transmission + perception (THREE OF FOUR; the only class missing is modulation; KYP anchors: clonidine, dexmedetomidine). Opioids — transmission + perception (the road and the room; never transduction, never modulation). Gabapentinoids — transduction + modulation (the split agent; KYP anchors: gabapentin, pregabalin). TCAs — modulation + perception (KYP anchor: amitriptyline). SSRIs/SNRIs — modulation + perception (KYP anchor: duloxetine, the diabetic-neuropathy indication). NSAIDs + acetaminophen + glucocorticoids — transduction ONLY (the starting line — the row that explains their failure in stimulus-free neuropathic pain). The patterns: α2 = widest reach; antidepressants = latest entrance; NSAID trio = earliest exit; multimodal analgesia = classes combined from DIFFERENT columns.",
    },
  ],
  related: [
    {
      title: "Acetylcholine Receptors — the Same Page's Upper Half",
      topicId: "acetylcholine-receptors",
      note:
        "The page directly above this one (PH12, the UPPER portion of the same book-235 page): the ACh receptor families — nicotinic ligand-gated channels (NN at the ganglia and adrenal, NM at the neuromuscular junction) and muscarinic GPCRs (M1–M5 at the organ plates). The two topics are the page's two halves and its two channel lessons: the ACh section shows LIGAND-GATED channels (binding opens the pore), while this page's nociceptive chain shows the TRPV ligand receptor driving a Ca2+ influx that ACTIVATES separate voltage-gated Na+ channels — and the neuropathic subsection is pure voltage-gated-channel disease. Same page, complementary channel pharmacology: the local anesthetics and gabapentinoids of this page's transduction list act on exactly the voltage-gated Na+ channel family the ACh page's NMJ story also turns on.",
    },
    {
      title: "Autonomic Receptors — the Wiring Diagram",
      topicId: "autonomic-receptors",
      note:
        "The page two before this one (PH11, book 234) draws the synapses whose pharmacology this page extends into analgesia: the α2 receptor itself lives on that wiring diagram — an adrenergic GPCR (Gi) of the sympathetic side — and this page's α2-AGONIST row is the same receptor used as an analgesic: 'α2-agonists' appear in three of the four pain-process blocker lists (transduction, transmission, perception). Clonidine and dexmedetomidine (KYP anchors) are the bridge drugs: autonomic pharmacology by receptor (the wiring page) and pain pharmacology by step (this page) — one drug, two maps.",
    },
    {
      title: "Cranial Nerves — Where Facial Pain Enters",
      topicId: "cranial-nerves",
      note:
        "This page's two fiber lanes carry the BODY's nociceptive input, and the face's pain lanes run in the cranial-nerve set: the trigeminal nerve (CN V) carries the face's Aδ and C fibers (the sharp and dull lanes of dental pain, trigeminal neuralgia's lancinating jabs — a neuropathic-channel disease in this page's terms), and the other cranial nerves carry their territories' nociception. The two pages meet at the exam's favorite crossover: a facial-pain vignette is this page's MECHANISM (fiber lanes or Na+-channel disease) with the cranial-nerve page's ADDRESS (which nerve's territory).",
    },
    {
      title: "Sympathomimetics — the α2-Agonist Row's Home Grid",
      topicId: "sympathomimetics",
      note:
        "The completed grid topic that scores every adrenergic drug by receptor activity — and its α2 row is this page's three-of-four blocker class: clonidine and dexmedetomidine are α2-AGONISTS in the grid (the receptors of the book-234 wiring diagram) and transduction/transmission/perception blockers in this page's four-process list. The two topics answer the two questions the exam asks about the same drug: WHAT RECEPTOR does it hit (the grid) and WHICH STEP of the pain path does that block (this page's matrix).",
    },
  ],
  crossLinks: [
    {
      subject: "Neurology (neuropathic pain — the channel diseases)",
      connection:
        "This page's neuropathic mechanism — 'upregulation and persistent activation of voltage-gated Na+ channels' — is the neurologist's whole category: diabetic peripheral neuropathy (the book's own example: the stocking-distribution burn of longstanding diabetes), trigeminal neuralgia (lancinating jabs in a nerve's territory), post-herpetic neuralgia, and chemotherapy-induced neuropathy are all the same story — a dysfunctional nerve whose Na+ channels fire without a stimulus. The neurology exam pairs the mechanism with the classic presentations; this page supplies the molecular sentence that explains them all (and the step-map logic for why gabapentinoids/TCAs/SNRIs — KYP anchors — are first-line there).",
    },
    {
      subject: "Anesthesiology (local anesthetics and multimodal analgesia)",
      connection:
        "The perioperative analgesia plan is this page's matrix used as a prescription: a local anesthetic (transduction + transmission — the two peripheral steps, the same voltage-gated Na+ channels the TRPV cascade activates), an α2-agonist such as dexmedetomidine (three of four steps), an opioid for transmission + perception, and a gabapentinoid (transduction + modulation) — each class drawn from a DIFFERENT column so no single step carries the signal. The book's four printed lists are the pharmacology behind 'opioid-sparing' and 'multimodal' — combining steps, not doses (KYP clinical anchors).",
    },
    {
      subject: "Psychiatry (the antidepressants as analgesics)",
      connection:
        "The TCA/SSRI/SNRI classes enter this page's pathway only at MODULATION and carry through PERCEPTION — the latest entrance of any class — which is why the antidepressants are the first-line drugs of neuropathic and chronic pain (KYP anchors: amitriptyline the TCA workhorse, duloxetine the SNRI with the diabetic-peripheral-neuropathy indication). The shared logic is the descending monoamine system: the same norepinephrine/serotonin modulation that treats mood damps the pain signal's tuning stage. When a psych vignette asks why the pain patient is on an antidepressant, the answer is this page's modulation list.",
    },
    {
      subject: "Endocrinology (diabetes mellitus — the distal symmetrical neuropathy)",
      connection:
        "The book's own worked example for neuropathic pain — 'Example: diabetic peripheral neuropathy.' — is the endocrinologist's classic complication: longstanding hyperglycemia injures the longest peripheral neurons first, producing the symmetric stocking-and-then-glove distribution of burning pain with reduced pinprick/vibration/monofilament sensation (sensory LOSS alongside spontaneous pain — the paradox that defines neuropathic mechanisms). This page supplies the mechanism sentence (upregulated, persistently active voltage-gated Na+ channels) that the diabetic-foot exam asks for; the endocrinology pages supply the glycemic context and the screening maneuver.",
    },
  ],
};
