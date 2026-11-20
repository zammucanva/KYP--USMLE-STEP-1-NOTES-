import type { KypUsMLENote } from "../types";

// Pharmacology — PH-batch 11. Source: pdf 257 BOTTOM HALF / book 235
// (Pharmacology — Autonomic Drugs: Pain transmission — the BOTTOM half of
// a SHARED page; the top half, "Acetylcholine receptors", is the completed
// sibling topic acetylcholine-receptors, the p196 shared-page convention —
// only the Pain-transmission block's contiguous lines are quoted, from the
// "Pain transmission" heading (part1.txt page-257 line 19) through
// "…diabetic peripheral neuropathy." (line 36); lines 1–17, the ACh half,
// are NEVER quoted). The block carries: [1] the NOCICEPTIVE PAIN
// definition — "Pain signals transmitted to the CNS in response to
// mechanical, thermal, or chemical stimuli. Transient receptor potential
// vanilloid ligand receptors cause Ca2+ influx–induced Na+ channel
// activation. Signals transmitted by Aδ fibers (sharp, acute pain) or C
// fibers (dull, throbbing, chronic pain)." — [2] the "Processes involved
// in pain transmission:" lead-in with its four ▘-bulleted rows
// (Transduction / Transmission / Modulation / Perception, each with its
// printed blocker list) — and [3] the NEUROPATHIC PAIN block — "Caused by
// neuronal dysfunction of the CNS or PNS. Transmitted via upregulation and
// persistent activation of voltage-gated Na+ channels. Example: diabetic
// peripheral neuropathy." Census (pdfimages): ZERO raster images on page
// 257 — pure text, no figures. THE VLM CENSUS RAN THIS SESSION (unlike the
// ph6–ph10 batch, which lost VLM to the 401 outage): glm-4.6v read the
// 120-DPI full-page render AND the 200-DPI bottom-half render
// (staging-ph11/vlm-census.txt) and confirms — no figures, diagrams,
// photographs, icons, or margin notes/mnemonics ANYWHERE on the page (both
// halves), the four process rows print under small square bullets with
// the process names in bold, and the indd slug + timestamp print at the
// very foot of the page after the neuropathic block. Text-layer quirks,
// documented: each process row begins with a 0x83 control-char artifact
// followed by the ▘ (U+2598) square-bullet glyph — the bullet is carried
// into the verbatim table, the invisible control artifact is not; the
// page prints α2-agonists (Greek alpha), Aδ fibers (Greek delta), an en
// dash in "Ca2+ influx–induced", and em dashes in the four process rows —
// all preserved exactly. The KYP diagram (the four-station relay with the
// blocker chips, the Aδ/C fiber fork, the TRPV transducer glyph, and the
// neuropathic Na+-channel panel), the exam layer, and the memory layer
// are original — nothing on the page is a mnemonic.

export const painTransmission: KypUsMLENote = {
  id: "pain-transmission",
  title: "Pain Transmission & Analgesic Targets",
  subtitle:
    "How a noxious stimulus becomes conscious pain — and where each analgesic class stops the signal. The page splits pain by its SOURCE (nociceptive = a real mechanical, thermal, or chemical stimulus read by the vanilloid transducer; neuropathic = a diseased channel firing on its own), then lays the four processes in order — transduction, transmission, modulation, perception — each with its printed list of blocking drug classes. Aδ fibers carry the sharp, acute first pain; C fibers carry the dull, throbbing, chronic ache; and diabetic peripheral neuropathy shows what happens when upregulated voltage-gated Na+ channels generate pain with no stimulus at all (book 235).",
  subject: "Pharmacology",
  system:
    "Section II · High-Yield General Principles — Pharmacology: Autonomic Drugs",
  pilotCategory: "Pharmacology mechanism",
  difficulty: 2,
  readTime: 6,
  sourceRef:
    "First Aid 2026, Part 1 pp. 235–235 (Pharmacology — Autonomic Drugs: Pain transmission; …)",
  tags: [
    "pain transmission",
    "nociceptive pain",
    "neuropathic pain",
    "transduction",
    "transmission",
    "modulation",
    "perception",
    "vanilloid receptors",
    "TRPV",
    "A-delta fibers",
    "C fibers",
    "voltage-gated sodium channels",
    "local anesthetics",
    "opioids",
    "NSAIDs",
    "gabapentinoids",
    "alpha-2 agonists",
    "TCAs",
    "SSRIs",
    "SNRIs",
    "analgesia",
    "diabetic peripheral neuropathy",
    "autonomic pharmacology",
    "pain pharmacology",
  ],
  core: {
    what:
      "Nociceptive pain is pain signals transmitted to the CNS in response to mechanical, thermal, or chemical stimuli. At the periphery, transient receptor potential vanilloid ligand receptors cause Ca2+ influx–induced Na+ channel activation — the stimulus is CONVERTED into a nerve signal (transduction). The signal is CARRIED to the CNS by Aδ fibers (sharp, acute pain) or C fibers (dull, throbbing, chronic pain) (transmission). Centrally the signal's volume is TUNED (modulation) before it is FELT as the conscious experience of pain (perception). Each process prints with its own blocker list: Transduction — local anesthetics, α2-agonists, gabapentinoids, NSAIDs, acetaminophen, glucocorticoids · Transmission — local anesthetics, α2-agonists, opioids · Modulation — TCAs, SSRIs, SNRIs, gabapentinoids · Perception — α2-agonists, opioids, TCAs, SSRIs, SNRIs. Neuropathic pain is the other fork: caused by neuronal dysfunction of the CNS or PNS, transmitted via upregulation and persistent activation of voltage-gated Na+ channels — example: diabetic peripheral neuropathy.",
    why:
      "This half page is the answer key for every 'where does this analgesic act' question in the pharmacology course. The four processes are the stations of a relay, and the four printed lists tell you which drug class stops the signal at which station: an NSAID, acetaminophen, or a glucocorticoid prints ONLY on the transduction list — they stop pain at its peripheral source, which is why they do nothing for stimulus-free burning; the antidepressant trio (TCAs, SSRIs, SNRIs) prints at BOTH modulation and perception — the pharmacologic reason antidepressants are analgesics; opioids span transmission and perception; α2-agonists span three lists; gabapentinoids bookend transduction and modulation; local anesthetics own the two peripheral T-stations. The fiber fork matters clinically: Aδ fibers carry the sharp, acute first pain and C fibers the dull, throbbing, chronic ache — two lanes with two feels. And the neuropathic fork decides whole treatment classes: when the voltage-gated Na+ channel itself is upregulated and persistently active, there is no stimulus to remove — the channel is the generator, and diabetic peripheral neuropathy is the printed example.",
    keyIdea:
      "Read every pain question through four moves. MOVE 1 — SORT THE PAIN BY ITS SOURCE: a mechanical, thermal, or chemical stimulus read by a healthy transducer = NOCICEPTIVE; neuronal dysfunction of the CNS or PNS with upregulated, persistently active voltage-gated Na+ channels = NEUROPATHIC (no stimulus needed). MOVE 2 — NAME THE STATION: the signal is CONVERTED (transduction), CARRIED (transmission, Aδ fast/sharp lane and C slow/dull lane), TUNED (modulation), then FELT (perception). MOVE 3 — MATCH THE BLOCKER LIST: each station has its printed list — NSAIDs/acetaminophen/glucocorticoids only at transduction; local anesthetics + α2-agonists across transduction AND transmission; gabapentinoids at transduction AND modulation; opioids at transmission AND perception; TCAs/SSRIs/SNRIs at modulation AND perception. MOVE 4 — CHECK THE OVERLAP: most analgesics block MORE than one station, so a 'which process does drug X block' question is answered by the printed list membership — count the stations, not the vibes.",
  },
  mechanisms: [
    {
      id: "four-station-relay-map",
      title:
        "The four-station relay: transduction → transmission → modulation → perception, with the blocker lists docked at each station",
      context:
        "The nociceptive pain block and the four printed processes (book 235)",
      flow: {
        nodes: [
          {
            id: "stimulus",
            label: "NOXIOUS STIMULUS — mechanical, thermal, or chemical",
            sublabel:
              "Input — the periphery's warning system: pain signals are transmitted to the CNS in response to mechanical, thermal, or chemical stimuli.",
            variant: "input",
          },
          {
            id: "transduction",
            label: "TRANSDUCTION — the stimulus becomes a signal",
            sublabel:
              "Transient receptor potential vanilloid ligand receptors cause Ca2+ influx–induced Na+ channel activation — the nociceptor's own transducer turns the stimulus into a nerve impulse.",
            variant: "process",
          },
          {
            id: "transmission",
            label: "TRANSMISSION — the signal travels to the CNS",
            sublabel:
              "Signals transmitted by Aδ fibers (sharp, acute pain) or C fibers (dull, throbbing, chronic pain) — two lanes, two feels.",
            variant: "process",
          },
          {
            id: "modulation",
            label: "MODULATION — the central gain is set",
            sublabel:
              "The CNS turns the arriving signal's volume up or down before it reaches consciousness — the station where TCAs, SSRIs, SNRIs, and gabapentinoids dock.",
            variant: "process",
          },
          {
            id: "perception",
            label: "PERCEPTION — the conscious experience of pain",
            sublabel:
              "The final station: the tuned signal becomes felt pain — blocked by α2-agonists, opioids, TCAs, SSRIs, SNRIs.",
            variant: "output",
          },
          {
            id: "blockers",
            label: "THE FOUR BLOCKER LISTS — analgesic classes sorted by station",
            sublabel:
              "The page's answer key: each printed list names the drug classes that block that station — block any ONE station and the pain signal stops there.",
            variant: "inhibit",
          },
        ],
        edges: [
          {
            from: "stimulus",
            to: "transduction",
            label: "mechanical · thermal · chemical",
          },
          {
            from: "transduction",
            to: "transmission",
            label: "Aδ fast lane · C slow lane",
          },
          { from: "transmission", to: "modulation", label: "into the CNS" },
          { from: "modulation", to: "perception", label: "to consciousness" },
          {
            from: "blockers",
            to: "transduction",
            label:
              "local anesthetics, α2-agonists, gabapentinoids, NSAIDs, acetaminophen, glucocorticoids",
            type: "inhibit",
          },
          {
            from: "blockers",
            to: "transmission",
            label: "local anesthetics, α2-agonists, opioids",
            type: "inhibit",
          },
          {
            from: "blockers",
            to: "modulation",
            label: "TCAs, SSRIs, SNRIs, gabapentinoids",
            type: "inhibit",
          },
          {
            from: "blockers",
            to: "perception",
            label: "α2-agonists, opioids, TCAs, SSRIs, SNRIs",
            type: "inhibit",
          },
        ],
      },
    },
    {
      id: "nociceptive-vs-neuropathic-map",
      title:
        "The source fork: nociceptive pain (stimulus-driven transduction) vs neuropathic pain (channel-driven generation)",
      context:
        "The nociceptive pain block vs the neuropathic pain block (book 235)",
      flow: {
        nodes: [
          {
            id: "origin",
            label: "PAIN SIGNALS — where does the signal originate?",
            sublabel:
              "Input — the page splits pain by its SOURCE, not its intensity: a real stimulus read by a healthy transducer, or a diseased channel generating its own signal.",
            variant: "input",
          },
          {
            id: "nociceptive",
            label: "NOCICEPTIVE — stimulus-driven",
            sublabel:
              "Pain signals transmitted to the CNS in response to mechanical, thermal, or chemical stimuli: vanilloid ligand receptors → Ca2+ influx → Na+ channel activation → Aδ and C fibers. Remove or block the stimulus pathway and the pain stops.",
            variant: "process",
          },
          {
            id: "neuropathic",
            label: "NEUROPATHIC — channel-driven",
            sublabel:
              "Caused by neuronal dysfunction of the CNS or PNS. Transmitted via upregulation and persistent activation of voltage-gated Na+ channels — the generator needs no stimulus.",
            variant: "process",
          },
          {
            id: "nociceptive-out",
            label: "ANALGESIA BY STATION — the four blocker lists",
            sublabel:
              "Output — a nociceptive signal can be stopped at any of the four stations: match the drug class to the station it blocks (transduction, transmission, modulation, perception).",
            variant: "output",
          },
          {
            id: "neuropathic-out",
            label:
              "THE CHANNEL IS THE GENERATOR — example: diabetic peripheral neuropathy",
            sublabel:
              "Output — with upregulated, persistently active voltage-gated Na+ channels there is no stimulus to remove; the disease and the generator are the same thing.",
            variant: "output",
          },
        ],
        edges: [
          {
            from: "origin",
            to: "nociceptive",
            label: "a mechanical, thermal, or chemical stimulus",
          },
          {
            from: "origin",
            to: "neuropathic",
            label: "no stimulus — neuronal dysfunction of the CNS or PNS",
          },
          {
            from: "nociceptive",
            to: "nociceptive-out",
            label: "block one of the four stations",
          },
          {
            from: "neuropathic",
            to: "neuropathic-out",
            label: "the upregulated Na+ channel keeps firing",
          },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "pain-transmission-map",
      title: "The pain-transmission relay map (an original KYP diagram)",
      caption:
        "An original KYP diagram of the Pain transmission half of book 235: the noxious stimulus chip (MECHANICAL · THERMAL · CHEMICAL) feeding the vanilloid transducer glyph (TRPV → Ca2+ INFLOW → Na+ CHANNEL ACTIVATION) at the TRANSDUCTION station; the Aδ fast lane (SHARP, ACUTE) and the C slow lane (DULL, THROBBING, CHRONIC) running from the periphery into the CNS band at the TRANSMISSION station; then MODULATION (the central gain station) and PERCEPTION (the conscious experience) inside the CNS band — with every station's printed blocker chips docked beneath it; plus the NEUROPATHIC PAIN panel (a nerve with multiplied, persistently active voltage-gated Na+ channels firing with NO stimulus — example: diabetic peripheral neuropathy) and the drug-class × station overlap ledger at the bottom.",
      notice:
        "Census (pdfimages): ZERO raster images on pdf 257 — the Pain-transmission half is PURE TEXT (nociceptive block + four ▘-bulleted process rows + neuropathic block), no figures; the VLM census RAN this session (glm-4.6v on the 120-DPI and 200-DPI renders, staging-ph11/vlm-census.txt) and confirms no figures, photographs, icons, or margin notes/mnemonics anywhere on the page. The relay map, fiber lanes, transducer glyph, blocker chips, neuropathic panel, and overlap ledger are an ORIGINAL KYP diagram — there is no figure on the source page to reproduce. The four process rows and both definition blocks are carried verbatim in the note's table blocks. The KYP memory layer (the four mnemonics) is original — nothing on the page is a mnemonic.",
    },
    {
      kind: "table",
      title:
        "Book 235 — the Pain transmission half, carried verbatim (every printed word, printed order)",
      intro:
        "The entire subsection is the nociceptive pain definition, the four ▘-bulleted process rows in printed order, and the neuropathic pain block — exactly as printed.",
      columns: ["PRINTED BLOCK", "THE PRINTED TEXT — book 235 (verbatim)"],
      rows: [
        [
          "NOCICEPTIVE PAIN",
          "Pain signals transmitted to the CNS in response to mechanical, thermal, or chemical stimuli. Transient receptor potential vanilloid ligand receptors cause Ca2+ influx–induced Na+ channel activation. Signals transmitted by Aδ fibers (sharp, acute pain) or C fibers (dull, throbbing, chronic pain).",
        ],
        [
          "PROCESSES — LEAD-IN",
          "Processes involved in pain transmission:",
        ],
        [
          "1 · TRANSDUCTION",
          "▘ Transduction—blocked by local anesthetics, α2-agonists, gabapentinoids, NSAIDs, acetaminophen, glucocorticoids",
        ],
        [
          "2 · TRANSMISSION",
          "▘ Transmission—blocked by local anesthetics, α2-agonists, opioids",
        ],
        [
          "3 · MODULATION",
          "▘ Modulation—blocked by TCAs, SSRIs, SNRIs, gabapentinoids",
        ],
        [
          "4 · PERCEPTION",
          "▘ Perception—blocked by α2-agonists, opioids, TCAs, SSRIs, SNRIs",
        ],
        [
          "NEUROPATHIC PAIN",
          "Caused by neuronal dysfunction of the CNS or PNS. Transmitted via upregulation and persistent activation of voltage-gated Na+ channels. Example: diabetic peripheral neuropathy.",
        ],
      ],
      caption:
        "Carried exactly as printed, including the ▘ square-bullet glyph that heads each process row, the em dash in each 'Process—blocked by' construction, the Greek α of α2-agonists, the Greek δ of Aδ fibers, and the en dash of 'Ca2+ influx–induced' (the text layer additionally prefixes each bullet with an invisible 0x83 control artifact — an extraction artifact, not a printed glyph, and not carried). Transduction prints with SIX blocker classes, Transmission with THREE, Modulation with FOUR, Perception with FIVE — 6 · 3 · 4 · 5.",
    },
    {
      kind: "table",
      title:
        "The station × drug-class matrix — the printed lists re-sorted (a KYP view of the same facts)",
      intro:
        "The page prints the lists by STATION; this matrix flips the axis and prints them by DRUG CLASS, so each drug's station span is visible at a glance. Every cell is taken directly from the printed lists — nothing added.",
      columns: [
        "DRUG CLASS",
        "TRANSDUCTION",
        "TRANSMISSION",
        "MODULATION",
        "PERCEPTION",
      ],
      rows: [
        ["Local anesthetics", "blocks", "blocks", "—", "—"],
        ["α2-agonists", "blocks", "blocks", "—", "blocks"],
        ["Gabapentinoids", "blocks", "—", "blocks", "—"],
        ["NSAIDs", "blocks", "—", "—", "—"],
        ["Acetaminophen", "blocks", "—", "—", "—"],
        ["Glucocorticoids", "blocks", "—", "—", "—"],
        ["Opioids", "—", "blocks", "—", "blocks"],
        ["TCAs", "—", "—", "blocks", "blocks"],
        ["SSRIs", "—", "—", "blocks", "blocks"],
        ["SNRIs", "—", "—", "blocks", "blocks"],
      ],
      caption:
        "The three asymmetries the exam tests: (1) the anti-inflammatory trio — NSAIDs, acetaminophen, glucocorticoids — prints ONLY at transduction (peripheral-source drugs); (2) the antidepressant trio — TCAs, SSRIs, SNRIs — prints at BOTH modulation and perception (central drugs, which is why antidepressants are analgesics); (3) α2-agonists span three stations, opioids span transmission + perception, gabapentinoids bookend transduction + modulation, and local anesthetics own the two peripheral T-stations. This matrix is a KYP re-sorting of the four printed lists (drug classes listed in first-appearance order) — the verbatim rows live in the table above.",
    },
    {
      kind: "steps",
      title: "Reading any pain or analgesia question in four moves",
      intro:
        "The whole half page distilled into an ordered decision path — SORT, STATION, LIST, OVERLAP.",
      steps: [
        {
          label: "SORT — nociceptive or neuropathic?",
          detail:
            "A mechanical, thermal, or chemical stimulus driving pain signals to the CNS = NOCICEPTIVE (the vanilloid transducer is doing its job). Neuronal dysfunction of the CNS or PNS with upregulation and persistent activation of voltage-gated Na+ channels = NEUROPATHIC (burning, tingling, no stimulus — think the printed example, diabetic peripheral neuropathy).",
        },
        {
          label: "STATION — where along the relay is the question pointing?",
          detail:
            "CONVERT (transduction: TRPV → Ca2+ influx → Na+ channel activation at the nociceptor) → CARRY (transmission: Aδ fibers for sharp, acute pain; C fibers for dull, throbbing, chronic pain) → TUNE (modulation: central gain) → FEEL (perception: the conscious experience).",
        },
        {
          label: "LIST — match the drug class to the station's printed list",
          detail:
            "Transduction: local anesthetics, α2-agonists, gabapentinoids, NSAIDs, acetaminophen, glucocorticoids. Transmission: local anesthetics, α2-agonists, opioids. Modulation: TCAs, SSRIs, SNRIs, gabapentinoids. Perception: α2-agonists, opioids, TCAs, SSRIs, SNRIs. The list membership IS the answer — an NSAID blocks transduction because NSAIDs print only on the transduction list.",
        },
        {
          label: "OVERLAP — check whether the drug blocks more than one station",
          detail:
            "Local anesthetics and α2-agonists block BOTH peripheral stations (transduction + transmission); gabapentinoids bookend (transduction + modulation); opioids span transmission + perception; TCAs, SSRIs, and SNRIs double at modulation + perception; only NSAIDs, acetaminophen, and glucocorticoids are single-station (transduction-only) drugs. A 'which process(es)' question is answered by counting the drug's stations.",
        },
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title:
        "The exam's three favorite asymmetries in the four printed lists",
      body:
        "1) The transduction-only trio: NSAIDs, acetaminophen, and glucocorticoids appear on ONE list only — transduction — because they act at the peripheral source of the signal; a question asking 'which process does ibuprofen block' is testing exactly this. 2) The modulation + perception trio: TCAs, SSRIs, and SNRIs appear on BOTH central lists — the pharmacologic reason an antidepressant can be an analgesic. 3) The spanners: α2-agonists appear on THREE lists (transduction, transmission, perception — every station except modulation), and local anesthetics + opioids + gabapentinoids each appear on exactly two, in three different pairings (the two T's; transmission + perception; transduction + modulation). Memorize the lists by station, then re-sort by drug — both views of the same printed facts.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 24-year-old man steps barefoot on a hot grill: an instantaneous sharp, well-localized jab of pain is followed a second later by a dull, throbbing, diffuse ache that persists for minutes.",
        discriminator:
          "Two-phase pain = two fiber lanes: Aδ first (sharp, acute), C second (dull, throbbing, chronic)",
        concept: "The Aδ vs C fiber fork (transmission)",
        answer:
          "Signals are transmitted by Aδ fibers (sharp, acute pain) or C fibers (dull, throbbing, chronic pain). The fast sharp jab rides the Aδ lane; the slow throbbing ache rides the C lane — the printed qualities (sharp/acute vs dull/throbbing/chronic) are the discriminator the exam uses to name the fiber.",
      },
      {
        stem: "A 66-year-old woman with osteoarthritis gets reliable relief of her activity-related knee pain from ibuprofen; her pain is entirely mechanical and there is no numbness, tingling, or burning.",
        discriminator:
          "NSAIDs print on ONE list only — the transduction list (with acetaminophen and glucocorticoids)",
        concept: "Transduction-only drugs (the peripheral-source trio)",
        answer:
          "Transduction — blocked by local anesthetics, α2-agonists, gabapentinoids, NSAIDs, acetaminophen, glucocorticoids. An NSAID stops the signal where it is generated (the mechanical stimulus → vanilloid receptor → Ca2+ influx–induced Na+ channel activation cascade), which is why it works best when the pain is peripheral and inflammation-driven — and why the anti-inflammatory trio never appears on the transmission, modulation, or perception lists.",
      },
      {
        stem: "A 61-year-old man with long-standing type 2 diabetes mellitus describes bilateral burning pain and tingling in a stocking distribution, present at rest, with no history of trauma; examination shows decreased distal sensation.",
        discriminator:
          "Burning pain at rest, no stimulus, stocking distribution = neuropathic = upregulation and persistent activation of voltage-gated Na+ channels",
        concept: "The neuropathic fork (channel-driven pain)",
        answer:
          "Neuropathic pain is caused by neuronal dysfunction of the CNS or PNS, transmitted via upregulation and persistent activation of voltage-gated Na+ channels — the channel is the generator, no stimulus required. The page's printed example is exactly this vignette: diabetic peripheral neuropathy.",
      },
      {
        stem: "A surgeon infiltrates a patient's intercostal space with a local anesthetic before a chest-wall procedure; the sharp lancinating pain of the incision is abolished, as is the dull ache that would normally follow, while the patient remains awake and conversant.",
        discriminator:
          "Local anesthetics print on BOTH peripheral lists — transduction AND transmission — and on neither central list",
        concept: "The two-station span of local anesthetics",
        answer:
          "Local anesthetics block both transduction (they are on the transduction list with NSAIDs, acetaminophen, glucocorticoids, α2-agonists, gabapentinoids) and transmission (with α2-agonists and opioids). A field or nerve block abolishes both the generation of the signal at the nociceptor and its conduction along the Aδ and C fibers — which is why both the sharp first pain and the dull second pain disappear while consciousness (perception) is untouched.",
      },
    ],
    traps: [
      {
        a: "Transduction",
        b: "Transmission",
        whyConfused:
          "Both stations start with T, both print 'local anesthetics, α2-agonists' on their blocker lists, and both are peripheral",
        keyDifference:
          "Transduction is the stimulus→signal conversion at the nociceptor (vanilloid receptors, Ca2+ influx–induced Na+ channel activation) and carries the SIX-drug list including NSAIDs, acetaminophen, and glucocorticoids; transmission is the conduction of the established signal by Aδ and C fibers and carries only local anesthetics, α2-agonists, and opioids",
        clue:
          "The drug decides it: NSAIDs/acetaminophen/glucocorticoids → transduction only; opioids → transmission (and perception); local anesthetics + α2-agonists → both",
      },
      {
        a: "Aδ fibers (sharp, acute pain)",
        b: "C fibers (dull, throbbing, chronic pain)",
        whyConfused:
          "Both are nociceptive fibers carrying pain signals to the CNS, named in the same printed sentence",
        keyDifference:
          "Aδ fibers transmit the sharp, acute pain — the fast, well-localized first pain; C fibers transmit the dull, throbbing, chronic pain — the slow, diffuse, smoldering ache",
        clue:
          "Sharp jab immediately after injury = Aδ; the throbbing burn that lingers = C. The printed parentheticals ARE the discriminator — match them verbatim",
      },
      {
        a: "Nociceptive pain (stimulus-driven)",
        b: "Neuropathic pain (channel-driven)",
        whyConfused:
          "Both present as 'pain', and both can be chronic (C-fiber nociceptive pain is chronic too)",
        keyDifference:
          "Nociceptive pain is pain signals transmitted to the CNS in response to mechanical, thermal, or chemical stimuli — a healthy transducer reading a real stimulus; neuropathic pain is caused by neuronal dysfunction of the CNS or PNS, transmitted via upregulation and persistent activation of voltage-gated Na+ channels — the generator needs no stimulus",
        clue:
          "Burning/tingling pain at rest in a stocking distribution (diabetic peripheral neuropathy) with no injury = neuropathic; pain that tracks a stimulus (mechanical with use, thermal, chemical/inflammatory) = nociceptive",
      },
      {
        a: "Gabapentinoids (transduction + modulation)",
        b: "TCAs/SSRIs/SNRIs (modulation + perception)",
        whyConfused:
          "Both groups are 'neuropathic pain drugs' and both include modulation among their stations",
        keyDifference:
          "Gabapentinoids print on the transduction AND modulation lists (they bookend the relay); the antidepressant trio — TCAs, SSRIs, SNRIs — prints on the modulation AND perception lists (both central stations)",
        clue:
          "A 'which stations does pregabalin/gabapentin block vs which stations does duloxetine/amitriptyline block' question is answered by the pairing: gabapentinoids pair the peripheral converter with the central tuner; antidepressants pair the tuner with the feeler",
      },
    ],
    pivots: [
      {
        lookAlike:
          "Any question naming an analgesic and asking its mechanism — 'where does this drug act?'",
        differentiator:
          "Route by the printed lists, not by drug lore: name the station first (transduction / transmission / modulation / perception), then check which lists carry the drug. NSAIDs, acetaminophen, glucocorticoids exist only at transduction; local anesthetics at transduction + transmission; α2-agonists at transduction + transmission + perception; gabapentinoids at transduction + modulation; opioids at transmission + perception; TCAs, SSRIs, SNRIs at modulation + perception.",
        correctPath:
          "Station first, list second: the printed list membership is the entire answer — sort the drug into its station span and the mechanism question answers itself",
      },
      {
        lookAlike:
          "A chronic pain vignette — is it nociceptive (C-fiber chronic) or neuropathic (channel-driven chronic)?",
        differentiator:
          "Chronicity alone cannot decide it — C fibers carry dull, throbbing, CHRONIC nociceptive pain, so 'chronic' does not mean neuropathic. Ask what DRIVES the signal: if a real stimulus (mechanical load, thermal injury, chemical/inflammatory milieu) drives it, it is nociceptive; if it burns and tingles at rest with neuronal dysfunction of the CNS or PNS — upregulation and persistent activation of voltage-gated Na+ channels — it is neuropathic (the printed example: diabetic peripheral neuropathy).",
        correctPath:
          "Look for the stimulus: present → nociceptive (block a station); absent with burning/tingling + a neurologic disease → neuropathic (the upregulated channel is the generator)",
      },
      {
        lookAlike:
          "A 'which drug does NOT block process X' or 'which process is NOT blocked by drug Y' question — the overlap trap",
        differentiator:
          "Build the overlap ledger before answering: transduction is the only station with NSAIDs, acetaminophen, and glucocorticoids; modulation is the only station with SNRIs and the only central station with gabapentinoids; perception is the only station that pairs opioids WITH the antidepressant trio; α2-agonists are the only drug on three lists; local anesthetics are the only drug on exactly the two peripheral lists. Most wrong options are true statements about the WRONG station's list.",
        correctPath:
          "Re-scan all four lists for the named drug or process before answering — the exam's distractors are usually a neighboring station's list quoted accurately",
      },
    ],
    miniCase: {
      vignette:
        "A 66-year-old woman with knee osteoarthritis describes her pain as worst when climbing stairs: climbing provokes an immediate sharp jab over the joint, followed by a dull, throbbing ache that smolders for the rest of the afternoon. There is no numbness, tingling, or burning at rest, and the knee is warm and mildly swollen. Naproxen taken each morning reduces both the sharp jab and the throbbing ache substantially. Which of the four processes involved in pain transmission does naproxen block?",
      question:
        "Pick the station at which this NSAID stops the signal — the one process whose printed blocker list carries naproxen's drug class.",
      options: [
        {
          label:
            "Transduction — the drug stops the signal at its peripheral source, at the nociceptor's own stimulus-to-signal converter",
          text: "Naproxen blocks the stimulus becoming a signal.",
          correct: true,
          why:
            "Correct. The only printed list that carries NSAIDs is the transduction list — 'Transduction—blocked by local anesthetics, α2-agonists, gabapentinoids, NSAIDs, acetaminophen, glucocorticoids.' Naproxen (an NSAID) blocks transduction: the mechanical stimulus of stair-climbing, amplified by the warm, swollen, inflamed joint, would otherwise drive the vanilloid ligand receptors' Ca2+ influx–induced Na+ channel activation — and the anti-inflammatory action turns that peripheral generation down at its source. That is also why the anti-inflammatory trio (NSAIDs, acetaminophen, glucocorticoids) appears on no other list: it is the peripheral-source group.",
        },
        {
          label:
            "Transmission — the drug blocks conduction of the signal along the Aδ and C fibers toward the CNS",
          text: "Naproxen works like a nerve block on the fibers.",
          why:
            "Wrong list. The printed transmission list is 'local anesthetics, α2-agonists, opioids' — three classes, and NSAIDs are not among them. A conduction block is what a local anesthetic does (it appears on BOTH the transduction and transmission lists); naproxen does not abolish conduction of an established signal, which is why an NSAID blunts arthritis pain but cannot render a limb insensate the way an intercostal block can.",
        },
        {
          label:
            "Modulation — the drug turns down the central gain the CNS applies to the arriving signal",
          text: "Naproxen retunes the amplifier in the CNS.",
          why:
            "Wrong list. The printed modulation list is 'TCAs, SSRIs, SNRIs, gabapentinoids' — the central gain station where the antidepressant trio and the gabapentinoids dock. Naproxen is not on it. The modulation framing is how amitriptyline- or duloxetine-class drugs earn their analgesic indications, not how an anti-inflammatory NSAID works.",
        },
        {
          label:
            "Perception — the drug blocks the conscious experience of the tuned pain signal",
          text: "Naproxen dulls the mind's registration of pain.",
          why:
            "Wrong list. The printed perception list is 'α2-agonists, opioids, TCAs, SSRIs, SNRIs' — the consciousness station. Naproxen is not on it: an NSAID does not obtund pain perception or produce the dysphoria/euphoria or sedation of an opioid acting at this station. The patient's pain relief comes from the signal never being fully generated, not from a blunted awareness of it.",
        },
      ],
      reasoning:
        "The stem hands you a classic nociceptive pain — a mechanical stimulus (stair-climbing) driving sharp Aδ-fiber first pain and dull, throbbing C-fiber chronic ache, in a warm, swollen (inflammatory, chemical-milieu) joint — and asks where naproxen stops it. The answer key is the printed four-list table, and only one move matters: find the list that carries the drug class. NSAIDs appear exactly once — on the transduction list — so naproxen blocks transduction (the correct option): it acts at the peripheral source where the vanilloid ligand receptors' Ca2+ influx–induced Na+ channel activation converts the mechanical/inflammatory stimulus into a nerve signal. Each distractor quotes a real list accurately but for the wrong station: transmission belongs to local anesthetics, α2-agonists, and opioids (the conduction drugs — note the vignette's contrast: naproxen blunts the pain but does not anesthetize the limb); modulation belongs to TCAs, SSRIs, SNRIs, and gabapentinoids (the central gain station — the antidepressant/gabapentinoid territory); perception belongs to α2-agonists, opioids, TCAs, SSRIs, and SNRIs (the consciousness station — opioid territory). The two-phase pain in the vignette (sharp jab → throbbing ache) is the Aδ vs C fiber fork riding along for free — two lanes of one transmission station, both of them downstream of the transduction block.",
    },
  },
  mnemonics: [
    {
      code: "CONVERT, CARRY, TUNE, FEEL",
      meaning:
        "The four processes of pain transmission in printed order: TRANSDUCTION = CONVERT — the nociceptor turns the mechanical, thermal, or chemical stimulus into a signal (vanilloid ligand receptors, Ca2+ influx–induced Na+ channel activation). TRANSMISSION = CARRY — the signal travels to the CNS (Aδ fibers, C fibers). MODULATION = TUNE — the central gain is set. PERCEPTION = FEEL — the conscious experience of pain. Each verb carries its own blocker list: CONVERT is blocked by local anesthetics, α2-agonists, gabapentinoids, NSAIDs, acetaminophen, glucocorticoids; CARRY by local anesthetics, α2-agonists, opioids; TUNE by TCAs, SSRIs, SNRIs, gabapentinoids; FEEL by α2-agonists, opioids, TCAs, SSRIs, SNRIs.",
      memorizes:
        "The four process names in order, each station's job, and each station's printed blocker list",
      whenToUse:
        "Any question asking the process names or their order, or matching an analgesic to the process it blocks",
      clinical:
        "Say the four verbs before answering any analgesia mechanism question — the drug's name belongs to exactly one (or two) of the verbs, and the printed lists say which.",
    },
    {
      code: "Aδ IS THE ARROW, C IS THE EMBER",
      meaning:
        "The two nociceptive fiber lanes: Aδ fibers are the ARROW — fast and sharp, they land first and carry the sharp, acute pain of the moment of injury. C fibers are the EMBER — slow and smoldering, they carry the dull, throbbing, chronic pain that lingers after. Both lanes run from the periphery to the CNS as the transmission station's two lanes.",
      memorizes:
        "The Aδ vs C fiber qualities exactly as printed: Aδ = sharp, acute pain; C = dull, throbbing, chronic pain",
      whenToUse:
        "Any two-phase pain vignette (sharp first pain then dull second pain), or any question asking which fiber carries which pain quality",
      clinical:
        "The immediate well-localized jab on stepping on a nail is the Aδ arrow; the diffuse throbbing ache that follows for minutes is the C ember — and chronic nociceptive pain (arthritis ache) rides the C lane too, which is why 'chronic' alone never means neuropathic.",
    },
    {
      code: "Ca2+ UNLOCKS THE Na+ GATE",
      meaning:
        "The transduction cascade exactly as printed: transient receptor potential vanilloid ligand receptors cause Ca2+ influx–induced Na+ channel activation. The vanilloid receptor opens first and lets Ca2+ IN; that calcium influx is what ACTIVATES the Na+ channels — the sodium gate is unlocked by calcium, and the signal is born. Two ions, fixed order: Ca2+ first, Na+ second.",
      memorizes:
        "The molecular sequence of transduction — vanilloid receptor → Ca2+ influx → Na+ channel activation — and which ion comes first",
      whenToUse:
        "Any question about how a noxious stimulus becomes a nerve impulse, or which ion event transduction requires",
      clinical:
        "It is why transduction-blockers work at the source: local anesthetics target the Na+ channels the calcium influx would activate, and the anti-inflammatory trio (NSAIDs, acetaminophen, glucocorticoids) turns down the stimulus milieu that opens the vanilloid receptors in the first place.",
    },
    {
      code: "THE CHANNEL IS THE DISEASE",
      meaning:
        "Neuropathic pain, as printed: caused by neuronal dysfunction of the CNS or PNS, transmitted via upregulation and persistent activation of voltage-gated Na+ channels — the upregulated channel fires on its own, with NO stimulus to remove. The example is diabetic peripheral neuropathy. Contrast the nociceptive half: there the CHANNEL is a healthy transducer activated by a real stimulus; here the channel itself is the generator.",
      memorizes:
        "The neuropathic pain definition (neuronal dysfunction of CNS/PNS + upregulation and persistent activation of voltage-gated Na+ channels) and its printed example",
      whenToUse:
        "Any burning/tingling pain at rest, stocking-glove pain in diabetes, or 'which mechanism causes this chronic pain' question where no stimulus exists",
      clinical:
        "When the channel is the disease, removing a stimulus is impossible — the therapeutic logic shifts from blocking a station's input (anti-inflammatory transduction blockade) to quieting the ectopic generator and the central stations (modulation/perception lists: TCAs, SSRIs, SNRIs, gabapentinoids).",
    },
  ],
  rapidReview: {
    s30: [
      "Nociceptive pain: pain signals transmitted to the CNS in response to mechanical, thermal, or chemical stimuli",
      "Transduction: transient receptor potential vanilloid ligand receptors cause Ca2+ influx–induced Na+ channel activation",
      "Aδ fibers transmit sharp, acute pain; C fibers transmit dull, throbbing, chronic pain",
      "The four processes, printed order: Transduction → Transmission → Modulation → Perception",
      "Transduction—blocked by local anesthetics, α2-agonists, gabapentinoids, NSAIDs, acetaminophen, glucocorticoids (SIX classes)",
      "Transmission—blocked by local anesthetics, α2-agonists, opioids (THREE)",
      "Modulation—blocked by TCAs, SSRIs, SNRIs, gabapentinoids (FOUR)",
      "Perception—blocked by α2-agonists, opioids, TCAs, SSRIs, SNRIs (FIVE)",
      "Neuropathic pain: neuronal dysfunction of the CNS or PNS; upregulation and persistent activation of voltage-gated Na+ channels; example: diabetic peripheral neuropathy",
    ],
    m3: [
      "CONVERT, CARRY, TUNE, FEEL — transduction (stimulus→signal), transmission (Aδ/C fibers to the CNS), modulation (central gain), perception (conscious experience)",
      "Aδ IS THE ARROW, C IS THE EMBER — sharp/acute vs dull/throbbing/chronic",
      "Ca2+ UNLOCKS THE Na+ GATE — vanilloid receptor → Ca2+ influx → Na+ channel activation",
      "THE CHANNEL IS THE DISEASE — neuropathic = upregulated, persistently active voltage-gated Na+ channels; diabetic peripheral neuropathy",
      "The list-count spine 6 · 3 · 4 · 5 (transduction, transmission, modulation, perception) plus the three asymmetries: the anti-inflammatory trio is transduction-ONLY; TCAs/SSRIs/SNRIs double at modulation + perception; α2-agonists span three stations",
    ],
    m10: [
      "The Pain transmission half of book 235 (pdf 257 BOTTOM half) is PURE TEXT — nociceptive definition, the four ▘-bulleted process rows, and the neuropathic block; pdfimages shows ZERO rasters and the VLM census (glm-4.6v, 120 + 200 DPI) confirms no figures, icons, or margin mnemonics anywhere on the page",
      "The page is SHARED (the p196 convention): the top half is the sibling topic acetylcholine-receptors (NN/NM/M1–5) — two receptor universes on one page; only the Pain half's lines (part1.txt page-257 lines 19–36) plus the indd footer (lines 38–40) are quoted for this topic",
      "Text-layer quirks: each process row is prefixed by an invisible 0x83 control artifact before the ▘ (U+2598) square bullet — the bullet is carried verbatim in the tables, the control artifact is not; the page prints α2-agonists (Greek alpha), Aδ (Greek delta), an en dash in 'Ca2+ influx–induced', and em dashes in the four 'Process—blocked by' rows",
      "The four process rows print in the fixed order Transduction, Transmission, Modulation, Perception with blocker-list sizes 6, 3, 4, 5 — and the process names are set in bold in print (VLM-confirmed)",
      "The printed text does not define modulation or perception (only transduction and transmission get mechanism sentences) — the plain-word jobs (TUNE, FEEL) and the CONVERT/CARRY glosses are KYP extensions, as is the fast-lane/slow-lane fiber framing",
      "The printed lists place TCAs, SSRIs, and SNRIs at BOTH modulation and perception — the page's own pharmacologic reason that antidepressants are analgesics; NSAIDs, acetaminophen, and glucocorticoids appear ONLY at transduction",
    ],
  },
  recall: [
    {
      q: "The nociceptive pain definition, verbatim — the stimulus types, the transducer, and the two fibers.",
      a: "Pain signals transmitted to the CNS in response to mechanical, thermal, or chemical stimuli. Transient receptor potential vanilloid ligand receptors cause Ca2+ influx–induced Na+ channel activation. Signals transmitted by Aδ fibers (sharp, acute pain) or C fibers (dull, throbbing, chronic pain).",
    },
    {
      q: "The four processes involved in pain transmission, in printed order.",
      a: "Transduction, Transmission, Modulation, Perception.",
    },
    {
      q: "Which drug classes block TRANSDUCTION (verbatim, printed order)?",
      a: "Local anesthetics, α2-agonists, gabapentinoids, NSAIDs, acetaminophen, glucocorticoids — six classes.",
    },
    {
      q: "Which drug classes block TRANSMISSION (verbatim, printed order)?",
      a: "Local anesthetics, α2-agonists, opioids — three classes.",
    },
    {
      q: "Which drug classes block MODULATION (verbatim, printed order)?",
      a: "TCAs, SSRIs, SNRIs, gabapentinoids — four classes.",
    },
    {
      q: "Which drug classes block PERCEPTION (verbatim, printed order)?",
      a: "α2-agonists, opioids, TCAs, SSRIs, SNRIs — five classes.",
    },
    {
      q: "Which fiber carries sharp, acute pain, and which carries dull, throbbing, chronic pain?",
      a: "Aδ fibers transmit sharp, acute pain; C fibers transmit dull, throbbing, chronic pain.",
    },
    {
      q: "The neuropathic pain block, verbatim — the cause, the mechanism, and the example.",
      a: "Caused by neuronal dysfunction of the CNS or PNS. Transmitted via upregulation and persistent activation of voltage-gated Na+ channels. Example: diabetic peripheral neuropathy.",
    },
  ],
  related: [
    {
      title: "Acetylcholine Receptors: Nicotinic & Muscarinic",
      topicId: "acetylcholine-receptors",
      note: "The SIBLING subsection on the top half of the same book page (book 235, the p196 shared-page convention): one transmitter with two receptor machines (the nicotinic ligand-gated channel and the muscarinic GPCR) — a different receptor universe (vanilloid ligand receptors, voltage-gated Na+ channels, Aδ/C fibers) sharing nothing but the page.",
    },
    {
      title: "Autonomic Receptors: The Wiring Map",
      topicId: "autonomic-receptors",
      note: "The wiring figure on the facing page (book 234) is where the α2 receptors of the α2-agonists in three of the four blocker lists actually live — the adrenergic receptor geography behind one of pain pharmacology's favorite spanner drug classes.",
    },
    {
      title: "Sympathomimetics",
      topicId: "sympathomimetics",
      note: "The α2-agonists on the transduction, transmission, and perception lists are adrenergic pharmacology — this page says WHICH stations they block; the sympathomimetic page says what α2 agonism does at the receptor level.",
    },
    {
      title: "Diabetes Mellitus",
      topicId: "diabetes-mellitus",
      note: "The disease behind the page's printed example — diabetic peripheral neuropathy is the neuropathic pain archetype: chronic hyperglycemia → neuronal dysfunction of the PNS → upregulated, persistently active voltage-gated Na+ channels → burning, tingling, stimulus-free pain.",
    },
    {
      title: "Sorbitol Pathway",
      topicId: "sorbitol-pathway",
      note: "The biochemical route that links hyperglycemia to the printed example: excess glucose shunted into the polyol (sorbitol) pathway in Schwann cells and nerves → osmotic/oxidative injury → the peripheral neuronal dysfunction that neuropathic pain transmits through upregulated voltage-gated Na+ channels.",
    },
  ],
  crossLinks: [
    {
      subject:
        "Neuroscience & physiology (first pain vs second pain, fiber conduction)",
      connection:
        "The page's two fiber lanes are the classic two-pain experiment: Aδ fibers — thinly myelinated, faster-conducting — deliver the sharp, acute, well-localized first pain, while C fibers — unmyelinated, slow — deliver the dull, throbbing, chronic second pain. The myelination difference is WHY the arrow lands before the ember; the printed parentheticals are what the exam quotes. (The conduction-velocity physiology is a KYP gloss — the page prints the qualities, not the myelination.)",
    },
    {
      subject:
        "Diabetes medicine (the printed example, end to end)",
      connection:
        "Diabetic peripheral neuropathy closes the loop between biochemistry and this pharmacology page: chronic hyperglycemia damages peripheral nerves (neuronal dysfunction of the PNS), the nerves upregulate and persistently activate voltage-gated Na+ channels, and the result is the stocking-distribution burning pain that analgesia must address at the modulation and perception stations rather than at a stimulus that no longer exists.",
    },
    {
      subject:
        "Analgesic pharmacology (the four lists as the course's answer key)",
      connection:
        "The four printed lists are the mechanism map for the entire analgesic armamentarium: local anesthetics (transduction + transmission), opioids (transmission + perception), the anti-inflammatory trio NSAIDs/acetaminophen/glucocorticoids (transduction only), gabapentinoids (transduction + modulation), and α2-agonists (three stations). Every 'where does this analgesic act' question in the later chapters routes back to this half page.",
    },
    {
      subject:
        "Psychiatry & psychopharmacology (antidepressants as analgesics)",
      connection:
        "The printed lists quietly explain a clinical fact learners often meet first in psychiatry: TCAs, SSRIs, and SNRIs appear on BOTH the modulation and perception lists — the pharmacologic reason antidepressant-class drugs are prescribed for chronic pain. The pain page and the depression page share the same drug classes because they share the same central stations.",
    },
  ],
};
