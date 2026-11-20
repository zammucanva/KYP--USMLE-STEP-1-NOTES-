import type { KypUsMLENote } from "../types";

// Pharmacology — PH-batch 17. Source: FULL pdf page 262 / book 240
// (Pharmacology — Autonomic Drugs: "Muscarinic antagonists" + the
// "Atropine" block — one full page, no shared-page split). CENSUS
// (pdfimages): ZERO raster images on pdf 262 — pure text and tables,
// no figures. VLM WAS AVAILABLE this session (one 120dpi pass,
// glm-4.6v, saved to .usmle-pipeline-cache/staging-ph17/vlm-census.txt)
// and adjudicated three things: (1) the first table is the 3-column
// DRUGS / ORGAN SYSTEMS / APPLICATIONS directory with SEVEN rows
// (Atropine-homatropine-tropicamide/Eye, Benztropine-trihexyphenidyl/
// CNS, Glycopyrrolate/GI-respiratory, Hyoscyamine-dicyclomine/GI,
// Ipratropium-tiotropium/Respiratory, SOFT-quartet/Genitourinary,
// Scopolamine/CNS) — the text layer interleaves each row's cells as
// separate lines (the m38 convention); the logical table below follows
// the VLM-reconstructed printed row order; (2) the atropine table's
// NOTES cell — "Blocks muscarinic effects (DUMBBELSS) of
// anticholinesterases, but not the nicotinic effects" — is ONE cell
// that SPANS ALL SIX organ rows (Eye through Bladder), which is why
// the text layer extracts it mid-table between the Heart and Stomach
// rows; (3) the "Hot as a hare … Full as a flask / Jimson weed (Datura)
// → gardener's pupil (mydriasis)" mnemonic is NOT a margin box — it is
// the right-hand cell of the printed ADVERSE EFFECTS row (First Aid's
// own mnemonic, carried attributed). VERBATIM CARRIES, documented:
// "DUMBBELSS" (double S), "park my Benz", "Make bladder SOFT" are
// printed and carried exactly; the header prints "SEC TION II" (space
// inside SECTION — text-layer quirk, carried verbatim in the evidence
// quote); the ↑/↓/→ arrows print preceded by U+008F/U+0090/U+008E
// control characters (stripped by the generator's whitespace-
// insensitive containment, documented); the indd slug extracts at a
// MID-PAGE position (line 112) but prints at the page foot. The KYP
// diagram, the exam/attack layer, the barrier-selectivity synthesis,
// and the four KYP memory codes are original; First Aid's printed
// mnemonic family is carried attributed.

export const muscarinicAntagonists: KypUsMLENote = {
  id: "muscarinic-antagonists",
  title: "Muscarinic Antagonists & Atropine",
  subtitle:
    "One mechanism, seven doors — every anticholinergic in the directory is the same competitive muscarinic blockade (book 240); what differs is the ORGAN the drug can reach. Atropine, homatropine, tropicamide produce mydriasis and cycloplegia at the Eye; benztropine and trihexyphenidyl park in the CNS for Parkinson disease and acute dystonia; glycopyrrolate dries the airway and gut; ipratropium and tiotropium open the airway (duration: tiotropium > ipratropium); the SOFT quartet (Solifenacin, Oxybutynin, Flavoxate, Tolterodine) softens the overactive bladder; scopolamine crosses into the CNS for motion sickness. Atropine itself is the prototype — 'Muscarinic antagonist. Used to treat bradycardia and for ophthalmic applications.' — with a six-organ pattern (Eye, Airway, Heart, Stomach, Gut, Bladder), one spanning note (blocks the muscarinic effects (DUMBBELSS) of anticholinesterases, but not the nicotinic effects), and the printed toxidrome: ↑ body temperature (due to ↓ sweating); ↑ HR; dry mouth; dry, flushed skin; cycloplegia; constipation; disorientation.",
  subject: "Pharmacology",
  system:
    "Section II · High-Yield General Principles — Pharmacology: Autonomic Drugs",
  pilotCategory: "Pharmacology mechanism",
  difficulty: 2,
  readTime: 6,
  sourceRef:
    "First Aid 2026, Part 1 pp. 240–240 (Pharmacology — Autonomic Drugs: Muscarinic antagonists; Atropine; …)",
  tags: [
    "muscarinic antagonists",
    "anticholinergics",
    "atropine",
    "benztropine",
    "glycopyrrolate",
    "ipratropium",
    "tiotropium",
    "scopolamine",
    "oxybutynin",
    "mydriasis",
    "cycloplegia",
    "overactive bladder",
    "DUMBBELSS",
    "anticholinergic toxidrome",
  ],
  core: {
    what:
      "Muscarinic antagonists competitively block the M1–5 receptors at the autonomic end-organs. The page's directory assigns each drug family to the organ system it is used to reach: atropine, homatropine, tropicamide → Eye (produce mydriasis and cycloplegia); benztropine, trihexyphenidyl → CNS (Parkinson disease (“park my Benz”), acute dystonia); glycopyrrolate → GI, respiratory (parenteral: preoperative use to reduce airway secretions; oral: reduces drooling, peptic ulcer); hyoscyamine, dicyclomine → GI (antispasmodics for irritable bowel syndrome); ipratropium, tiotropium → Respiratory (COPD, asthma; duration: tiotropium > ipratropium); solifenacin, oxybutynin, flavoxate, tolterodine → Genitourinary (reduce bladder spasms and urge urinary incontinence (overactive bladder) — Make bladder SOFT); scopolamine → CNS (motion sickness). Atropine is the prototype: 'Muscarinic antagonist. Used to treat bradycardia and for ophthalmic applications.' Its end-organ table runs Eye (↑ pupil dilation, cycloplegia), Airway (bronchodilation, ↓ secretions), Heart (↑ heart rate), Stomach (↓ acid secretion), Gut (↓ motility), Bladder (↓ urgency in cystitis) — with one printed note spanning all six rows: atropine 'Blocks muscarinic effects (DUMBBELSS) of anticholinesterases, but not the nicotinic effects.'",
    why:
      "This page is the blockade half of the autonomic pharmacology chapter, and it is organized exactly the way the exam asks about it: by ORGAN. The M1–5 map (the acetylcholine-receptors page, book 235) says WHERE the muscarinic receptors sit — heart, smooth muscle, brain, exocrine glands, and sweat glands (cholinergic sympathetic); this page says what happens when a drug LOCKS them, organ by organ. Because every drug here shares one mechanism, the only discriminating questions left are reach and application: which door does the drug enter (topical to the eye, inhaled to the airway, oral to the gut and bladder, or across the blood-brain barrier into the CNS), and what does the printed application look like in a vignette. The adverse-effects block is the other exam half: ↑ body temperature (due to ↓ sweating) — the sweat gland is the one sympathetic organ that listens muscarinically, so muscarinic blockade removes the body's coolant; hyperthermia in infants, acute angle-closure glaucoma in older adults (due to mydriasis), and urinary retention in men with prostatic hyperplasia are the three printed special-population traps. And the spanning DUMBBELSS note is a boundary rule: atropine reverses the muscarinic (DUMBBELSS) effects of anticholinesterase poisoning but NOT the nicotinic ones — muscle findings persist until the enzyme itself is reactivated.",
    keyIdea:
      "Read every anticholinergic question through four moves. MOVE 1 — NAME THE PATTERN: atropine's six rows are the master pattern (eye wide and still, airway open and dry, heart fast, stomach/gut/bladder dry and still) — every drug in the directory produces some subset of it. MOVE 2 — NAME THE DOOR: which organ is the drug supposed to reach (Eye, CNS, GI, Respiratory, Genitourinary)? That single lookup answers most one-liners (mydriasis → Eye row; park my Benz → CNS; preop drying → glycopyrrolate; COPD → ipratropium/tiotropium; overactive bladder → SOFT; motion sickness → scopolamine). MOVE 3 — CHECK THE BARRIER: the same muscarinic blockade differs by whether the drug can enter the CNS (KYP synthesis: the permanently charged quaternary amines ipratropium, tiotropium, glycopyrrolate are excluded from the CNS; the tertiary amines atropine, scopolamine, benztropine, trihexyphenidyl cross — which is why the CNS applications and the 'disorientation' of the toxidrome belong to the tertiary drugs). MOVE 4 — EXPECT THE TOXIDROME: dry, fast, hot, red, blind, mad, full — and remember the printed boundary rule, atropine blocks the muscarinic (DUMBBELSS) effects of anticholinesterases but not the nicotinic effects.",
  },
  mechanisms: [
    {
      id: "atropine-end-organ-pattern",
      title:
        "The prototype: atropine's competitive M blockade → the six-organ end-organ pattern",
      context: "The Atropine block (book 240): the ORGAN SYSTEM / ACTION table with its spanning NOTES cell",
      flow: {
        nodes: [
          {
            id: "ach-drive",
            label: "POSTGANGLIONIC CHOLINERGIC SIGNAL",
            sublabel:
              "Input — acetylcholine arriving at the end-organ M1–5 receptors: parasympathetic postganglionic fibers at the eye, airway, heart, stomach, gut, and bladder — plus the cholinergic sympathetic fiber at the sweat gland.",
            variant: "input",
          },
          {
            id: "m-receptor",
            label: "M1–5 RECEPTORS AT THE END-ORGANS",
            sublabel:
              "Target — the muscarinic receptor family of the printed M1–5 map (book 235): heart, smooth muscle, brain, exocrine glands, and sweat glands (cholinergic sympathetic).",
            variant: "target",
          },
          {
            id: "atropine",
            label: "ATROPINE — competitive muscarinic antagonist",
            sublabel:
              "Inhibit node — occupies the muscarinic receptor without activating it. Printed definition: 'Muscarinic antagonist. Used to treat bradycardia and for ophthalmic applications.'",
            variant: "inhibit",
          },
          {
            id: "pattern",
            label: "THE SIX-ORGAN BLOCKADE PATTERN",
            sublabel:
              "Output — Eye: ↑ pupil dilation, cycloplegia · Airway: bronchodilation, ↓ secretions · Heart: ↑ heart rate · Stomach: ↓ acid secretion · Gut: ↓ motility · Bladder: ↓ urgency in cystitis. Every drug in the directory is a subset of this pattern.",
            variant: "output",
          },
          {
            id: "dumbbelss-rule",
            label: "THE DUMBBELSS RESCUE + ITS BOUNDARY",
            sublabel:
              "Output — the spanning NOTES cell: atropine 'Blocks muscarinic effects (DUMBBELSS) of anticholinesterases, but not the nicotinic effects' — it reverses the muscarinic face of anticholinesterase poisoning, never the nicotinic (muscle) one.",
            variant: "output",
          },
        ],
        edges: [
          { from: "ach-drive", to: "m-receptor", label: "acetylcholine delivery" },
          {
            from: "atropine",
            to: "m-receptor",
            type: "inhibit",
            label: "competitive blockade — the signal lands on a locked receptor",
          },
          {
            from: "m-receptor",
            to: "pattern",
            label: "each organ flips to its blockade phenotype",
          },
          {
            from: "atropine",
            to: "dumbbelss-rule",
            label: "the antidote use — muscarinic effects only",
          },
        ],
      },
    },
    {
      id: "organ-selectivity-docking",
      title:
        "One mechanism, seven doors: how the same blockade becomes seven different drugs",
      context:
        "The Muscarinic antagonists DRUGS / ORGAN SYSTEMS / APPLICATIONS directory (book 240) + the barrier-selectivity synthesis (KYP extension, not printed on the page)",
      flow: {
        nodes: [
          {
            id: "one-lock",
            label: "ONE MECHANISM — COMPETITIVE M1–5 BLOCKADE",
            sublabel:
              "Input — every drug on the page is the same muscarinic antagonist at the same receptor family; the drug does not change, only its REACH does.",
            variant: "input",
          },
          {
            id: "reach",
            label: "ROUTE + BARRIER SELECTIVITY",
            sublabel:
              "Process — which organ the drug can reach: topical to the eye, inhaled to the airway, oral to the gut and bladder, systemic to the glands — and, for the CNS doors, across the blood-brain barrier (KYP synthesis, not printed on book 240: the permanently charged quaternary amines ipratropium, tiotropium, glycopyrrolate are excluded from the CNS; the tertiary amines atropine, scopolamine, benztropine, trihexyphenidyl cross).",
            variant: "process",
          },
          {
            id: "eye-door",
            label: "EYE DOOR — Atropine, homatropine, tropicamide",
            sublabel:
              "Target — topical ophthalmic delivery: 'Produce mydriasis and cycloplegia.'",
            variant: "target",
          },
          {
            id: "cns-door",
            label: "CNS DOOR — Benztropine, trihexyphenidyl · Scopolamine",
            sublabel:
              "Target — must cross into the CNS: 'Parkinson disease (“park my Benz”) / Acute dystonia' and 'Motion sickness.'",
            variant: "target",
          },
          {
            id: "gi-airway-door",
            label: "GI + AIRWAY DOORS — Glycopyrrolate · Hyoscyamine, dicyclomine",
            sublabel:
              "Target — 'Parenteral: preoperative use to reduce airway secretions / Oral: reduces drooling, peptic ulcer' and 'Antispasmodics for irritable bowel syndrome.'",
            variant: "target",
          },
          {
            id: "resp-gu-door",
            label: "RESPIRATORY + GU DOORS — Ipratropium, tiotropium · SOFT",
            sublabel:
              "Target — 'COPD, asthma (duration: tiotropium > ipratropium)' and 'Reduce bladder spasms and urge urinary incontinence (overactive bladder) — Make bladder SOFT.'",
            variant: "target",
          },
          {
            id: "directory-out",
            label: "PICK THE DRUG BY THE ORGAN — THEN EXPECT EVERY OTHER DOOR IT CAN REACH",
            sublabel:
              "Output — the directory answers 'which drug for which organ'; the adverse-effects block answers what spills through the other doors: ↑ body temperature (due to ↓ sweating), ↑ HR, dry mouth, dry flushed skin, cycloplegia, constipation, disorientation.",
            variant: "output",
          },
        ],
        edges: [
          { from: "one-lock", to: "reach", label: "same blockade, different reach" },
          { from: "reach", to: "eye-door", label: "topical" },
          { from: "reach", to: "cns-door", label: "crosses the BBB" },
          { from: "reach", to: "gi-airway-door", label: "systemic / oral" },
          { from: "reach", to: "resp-gu-door", label: "inhaled / oral" },
          { from: "eye-door", to: "directory-out", label: "mydriasis + cycloplegia" },
          { from: "cns-door", to: "directory-out", label: "CNS applications + CNS toxicity" },
          { from: "gi-airway-door", to: "directory-out", label: "drying + antispasmodic use" },
          { from: "resp-gu-door", to: "directory-out", label: "bronchodilation + bladder softening" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "muscarinic-antagonist-map",
      title: "The anticholinergic organ-system drug directory (an original KYP diagram)",
      caption:
        "An original KYP diagram of book 240: atropine's six-organ end-organ pattern as the SPINE (Eye ↑ pupil dilation, cycloplegia · Airway bronchodilation, ↓ secretions · Heart ↑ heart rate · Stomach ↓ acid secretion · Gut ↓ motility · Bladder ↓ urgency in cystitis) with the printed DUMBBELSS note running down all six rows as the spanning banner it is in print; the seven drug rows of the directory DOCKED beside the spine by organ selectivity (Eye: Atropine, homatropine, tropicamide — mydriasis and cycloplegia; CNS: Benztropine, trihexyphenidyl — 'park my Benz', Parkinson disease, acute dystonia; GI/respiratory: Glycopyrrolate — parenteral preoperative airway drying, oral drooling and peptic ulcer; GI: Hyoscyamine, dicyclomine — IBS antispasmodics; Respiratory: Ipratropium, tiotropium — COPD, asthma, duration tiotropium > ipratropium; Genitourinary: the SOFT quartet Solifenacin, Oxybutynin, Flavoxate, Tolterodine — overactive bladder, 'Make bladder SOFT'; CNS: Scopolamine — motion sickness); and the exam-trap band along the bottom — the CNS-entry tollbooth (ipratropium/tiotropium/glycopyrrolate excluded from the CNS vs scopolamine/benztropine crossing), the DUMBBELSS boundary rule (muscarinic effects blocked, nicotinic effects not), and the bladder door cross-referenced to the micturition-control page where oxybutynin is the ⊝ M₃ detrusor example.",
      notice:
        "Census (pdfimages): ZERO raster images on pdf 262 — pure text and tables, no figure to reproduce; this diagram is an ORIGINAL KYP design built from the two printed tables, whose rows are carried verbatim in the blocks below. VLM was available this session (one 120dpi pass) and adjudicated the interleaved text layer: the 7-row directory order, the NOTES cell that spans all six organ rows, and the fact that the 'Hot as a hare' family is an in-table cell of the ADVERSE EFFECTS row, not a margin box. The barrier/tollbooth panel is a KYP synthesis (the quaternary-vs-tertiary charge rule is not printed on this page); the DUMBBELSS note and every drug row are printed and carried attributed.",
    },
    {
      kind: "table",
      title:
        "Book 240 — the anticholinergic system directory, carried verbatim (every printed row, printed row order)",
      intro:
        "The text layer interleaves each row's three cells as separate lines (the m38 convention); the logical 3-column table below is the VLM-reconstructed print layout. The mnemonic phrases print inside their cells and are carried exactly.",
      columns: ["DRUGS", "ORGAN SYSTEMS", "APPLICATIONS"],
      rows: [
        [
          "Atropine, homatropine, tropicamide",
          "Eye",
          "Produce mydriasis and cycloplegia",
        ],
        [
          "Benztropine, trihexyphenidyl",
          "CNS",
          "Parkinson disease (“park my Benz”); Acute dystonia",
        ],
        [
          "Glycopyrrolate",
          "GI, respiratory",
          "Parenteral: preoperative use to reduce airway secretions; Oral: reduces drooling, peptic ulcer",
        ],
        [
          "Hyoscyamine, dicyclomine",
          "GI",
          "Antispasmodics for irritable bowel syndrome",
        ],
        [
          "Ipratropium, tiotropium",
          "Respiratory",
          "COPD, asthma; Duration: tiotropium > ipratropium",
        ],
        [
          "Solifenacin, Oxybutynin, Flavoxate, Tolterodine",
          "Genitourinary",
          "Reduce bladder spasms and urge urinary incontinence (overactive bladder); Make bladder SOFT",
        ],
        [
          "Scopolamine",
          "CNS",
          "Motion sickness",
        ],
      ],
      caption:
        "One mechanism, seven doors: the organ system column is the whole table — the Eye row produces mydriasis and cycloplegia, the two CNS rows (benztropine/trihexyphenidyl for Parkinson disease and acute dystonia, scopolamine for motion sickness) are the rows that require CNS entry, and 'Make bladder SOFT' is First Aid's own in-table acronym for the four genitourinary drugs (S-olifenacin, O-xybutynin, F-lavoxate, T-olterodine).",
    },
    {
      kind: "table",
      title:
        "Book 240 — the atropine end-organ table, carried verbatim (the six printed rows + the spanning NOTES cell)",
      intro:
        "The definition line prints above the table: 'Muscarinic antagonist. Used to treat bradycardia and for ophthalmic applications.' The NOTES cell is ONE cell that spans all six rows in print (VLM-adjudicated); the text layer extracts it between the Heart and Stomach rows, and it is carried here once, in its spanning position, exactly as printed — including the printed double-S of DUMBBELSS.",
      columns: ["ORGAN SYSTEM", "ACTION", "NOTES (one cell spanning all six rows, as printed)"],
      rows: [
        [
          "Eye",
          "↑ pupil dilation, cycloplegia",
          "Blocks muscarinic effects (DUMBBELSS) of anticholinesterases, but not the nicotinic effects",
        ],
        ["Airway", "Bronchodilation, ↓ secretions", "(the same spanning NOTES cell continues)"],
        ["Heart", "↑ heart rate", "(the same spanning NOTES cell continues)"],
        ["Stomach", "↓ acid secretion", "(the same spanning NOTES cell continues)"],
        ["Gut", "↓ motility", "(the same spanning NOTES cell continues)"],
        ["Bladder", "↓ urgency in cystitis", "(the same spanning NOTES cell continues)"],
      ],
      caption:
        "Atropine's six rows are the master pattern every other anticholinergic partially reproduces — and the spanning note is the exam boundary: in anticholinesterase (organophosphate) poisoning, atropine reverses the muscarinic DUMBBELSS effects but never the nicotinic ones, so muscle findings persist.",
    },
    {
      kind: "table",
      title:
        "Book 240 — the ADVERSE EFFECTS row, carried verbatim (body cell + First Aid's own mnemonic cell)",
      intro:
        "In print this is one row: the ADVERSE EFFECTS label, the body text, and — on the right — First Aid's own mnemonic cell. The mnemonic is carried attributed to First Aid exactly as printed, including the Jimson weed line.",
      columns: [
        "ADVERSE EFFECTS (the printed body)",
        "First Aid's mnemonic cell (verbatim, book 240)",
      ],
      rows: [
        [
          "↑ body temperature (due to ↓ sweating); ↑ HR; dry mouth; dry, flushed skin; cycloplegia; constipation; disorientation. Can cause acute angle-closure glaucoma in older adults (due to mydriasis), urinary retention in men with prostatic hyperplasia, and hyperthermia in infants.",
          "Adverse effects: Hot as a hare; Fast as a fiddle; Dry as a bone; Red as a beet; Blind as a bat; Mad as a hatter; Full as a flask. Jimson weed (Datura) → gardener’s pupil (mydriasis).",
        ],
      ],
      caption:
        "The toxidrome maps phrase-for-phrase onto the body text: Hot as a hare = ↑ body temperature (due to ↓ sweating, hyperthermia in infants); Fast as a fiddle = ↑ HR; Dry as a bone = dry mouth; Red as a beet = dry, flushed skin; Blind as a bat = cycloplegia (with constipation the gut member); Mad as a hatter = disorientation; Full as a flask = urinary retention (the prostatic-hyperplasia trap). The gardener's pupil is the classic Jimson weed (Datura) exposure signature.",
    },
    {
      kind: "steps",
      title: "Reading any muscarinic-antagonist question in four moves",
      intro:
        "The page's directory + atropine table distilled into an ordered decision path — PATTERN, DOOR, BARRIER, TOXIDROME.",
      steps: [
        {
          label: "MOVE 1 — NAME THE PATTERN (atropine's six rows)",
          detail:
            "Eye: ↑ pupil dilation, cycloplegia · Airway: bronchodilation, ↓ secretions · Heart: ↑ heart rate · Stomach: ↓ acid secretion · Gut: ↓ motility · Bladder: ↓ urgency in cystitis. Every anticholinergic question describes some subset of these six rows plus the sweat-gland eviction (↑ body temperature due to ↓ sweating).",
        },
        {
          label: "MOVE 2 — NAME THE DOOR (the organ-system column)",
          detail:
            "Match the vignette's organ to the directory row: mydriasis/cycloplegia → Atropine, homatropine, tropicamide (Eye); Parkinson disease or acute dystonia → Benztropine, trihexyphenidyl (CNS, “park my Benz”); preoperative airway drying, drooling, peptic ulcer → Glycopyrrolate (GI, respiratory); irritable bowel syndrome → Hyoscyamine, dicyclomine (GI); COPD/asthma → Ipratropium, tiotropium (Respiratory, duration tiotropium > ipratropium); overactive bladder → Solifenacin, Oxybutynin, Flavoxate, Tolterodine (GU, Make bladder SOFT); motion sickness → Scopolamine (CNS).",
        },
        {
          label: "MOVE 3 — CHECK THE BARRIER (CNS entry)",
          detail:
            "KYP synthesis (not printed on book 240): the permanently charged quaternary amines — ipratropium, tiotropium, glycopyrrolate — are excluded from the CNS, which is why their applications are peripheral (airway, gut) and why they do not cause the disorientation of the toxidrome; the tertiary amines — atropine, homatropine, tropicamide, benztropine, trihexyphenidyl, scopolamine, oxybutynin — cross the blood-brain barrier, which is exactly why the two CNS applications (park my Benz, motion sickness) and the 'Mad as a hatter' toxicity belong to them.",
        },
        {
          label: "MOVE 4 — EXPECT THE TOXIDROME (and its three printed traps)",
          detail:
            "↑ body temperature (due to ↓ sweating); ↑ HR; dry mouth; dry, flushed skin; cycloplegia; constipation; disorientation — then the three special-population traps the page prints: acute angle-closure glaucoma in older adults (due to mydriasis), urinary retention in men with prostatic hyperplasia, and hyperthermia in infants. And in anticholinesterase poisoning, remember the boundary: atropine blocks the muscarinic (DUMBBELSS) effects but NOT the nicotinic effects.",
        },
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title: "The DUMBBELSS boundary — atropine as the anticholinesterase antidote",
      body:
        "The atropine table's spanning NOTES cell prints the rule exactly once: 'Blocks muscarinic effects (DUMBBELSS) of anticholinesterases, but not the nicotinic effects.' In anticholinesterase (organophosphate) poisoning, the excess acetylcholine produces muscarinic effects (the DUMBBELSS family — decoded on the Cholinomimetic agents page, book 239) AND nicotinic effects at the skeletal-muscle junction and ganglia. Atropine reverses the first set and nothing of the second: miosis, bronchorrhea, bradycardia, and GI symptoms yield to atropine, but muscle fasciculations and weakness persist — the nicotinic findings mark the limit of what atropine alone can do. (The DUMBBELSS letters are First Aid's own; the printed rule is carried verbatim above.)",
    },
    {
      kind: "callout",
      variant: "memory",
      title: "What prints on the page vs what KYP adds",
      body:
        "PRINTED by First Aid (book 240), carried attributed: “park my Benz” (the benztropine row), “Make bladder SOFT” (the four genitourinary drugs), the spanning “(DUMBBELSS)” note, and the Adverse effects mnemonic cell (Hot as a hare / Fast as a fiddle / Dry as a bone / Red as a beet / Blind as a bat / Mad as a hatter / Full as a flask + Jimson weed (Datura) → gardener’s pupil (mydriasis)). ADDED by KYP (recorded as kypExtensions in the manifest): the DRY-WIDE-FAST-STILL four-verb code, the CNS tollbooth (quaternary-vs-tertiary barrier rule — not printed on this page), the five-door docking code, and the thermostat rule code.",
    },
  ],
  clinical: [
    {
      kind: "text",
      title: "The anticholinergic toxidrome — recognition at the bedside",
      body: [
        "The printed adverse-effects row IS the toxidrome: ↑ body temperature (due to ↓ sweating); ↑ HR; dry mouth; dry, flushed skin; cycloplegia; constipation; disorientation. First Aid's own mnemonic cell decodes it phrase for phrase — Hot as a hare (hyperthermia), Fast as a fiddle (tachycardia), Dry as a bone (dry mouth, anhidrosis), Red as a beet (flushed dry skin), Blind as a bat (cycloplegia, mydriasis), Mad as a hatter (disorientation), Full as a flask (urinary retention).",
        "The classic exposure vignette prints on the same row: Jimson weed (Datura) → gardener’s pupil (mydriasis) — a groundskeeper with dilated pupils, dry flushed skin, tachycardia, and confusion after handling Datura has anticholinergic poisoning until proven otherwise. The finding that separates anticholinergic from sympathomimetic toxicity at the bedside is the DRY skin and absent sweating (the sweat gland listens muscarinically — its blockade removes the body's coolant).",
        "Three populations the page flags for harm: older adults (acute angle-closure glaucoma due to mydriasis), men with prostatic hyperplasia (urinary retention), and infants (hyperthermia — the temperature-regulation rule: ↑ body temperature due to ↓ sweating, with a small body and no sweating reserve).",
      ],
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "Atropine as antidote — and where it stops",
      body:
        "In anticholinesterase poisoning (organophosphates), titrate atropine to the muscarinic findings — bronchorrhea, bradycardia, GI cramping, secretions. The printed spanning note draws the line: atropine 'Blocks muscarinic effects (DUMBBELSS) of anticholinesterases, but not the nicotinic effects.' Muscle fasciculations, weakness, and ganglionic findings are nicotinic and will NOT reverse with atropine alone — their persistence is the exam's favorite proof that you know the boundary.",
    },
  ],
  drugs: [
    {
      drug: "Atropine",
      klass: "Muscarinic antagonist (prototype)",
      target: "M1–5 receptors (competitive)",
      mechanism:
        "Competitive muscarinic antagonist — occupies the end-organ receptor without activating it",
      effect:
        "↑ pupil dilation, cycloplegia; bronchodilation, ↓ secretions; ↑ heart rate; ↓ acid secretion; ↓ motility; ↓ urgency in cystitis",
      uses:
        "Bradycardia; ophthalmic applications; blocks muscarinic effects (DUMBBELSS) of anticholinesterases (the spanning NOTES cell)",
      adverse:
        "↑ body temperature (due to ↓ sweating); ↑ HR; dry mouth; dry, flushed skin; cycloplegia; constipation; disorientation; acute angle-closure glaucoma in older adults; urinary retention in men with prostatic hyperplasia; hyperthermia in infants",
      clue:
        "The prototype that does all six organ rows at once — every other drug on the page is a selective subset of it",
    },
    {
      drug: "Homatropine, tropicamide",
      klass: "Muscarinic antagonist (ophthalmic)",
      target: "Iris sphincter + ciliary muscle (M receptors of the Eye row)",
      mechanism: "Topical muscarinic blockade at the eye",
      effect: "Mydriasis (dilated pupil) and cycloplegia (ciliary muscle paralysis — no accommodation)",
      uses: "Produce mydriasis and cycloplegia (fundoscopy, cycloplegic refraction)",
      adverse:
        "Angle-closure risk in older adults (the printed trap: acute angle-closure glaucoma due to mydriasis)",
      clue: "The Eye row: 'Produce mydriasis and cycloplegia'",
    },
    {
      drug: "Benztropine, trihexyphenidyl",
      klass: "Muscarinic antagonist (central)",
      target: "CNS muscarinic receptors",
      mechanism: "Central muscarinic blockade restoring the dopamine–acetylcholine balance",
      effect: "Reduction of parkinsonian and dystonic symptoms",
      uses: "Parkinson disease; acute dystonia (“park my Benz”)",
      adverse: "The peripheral anticholinergic pattern + central disorientation",
      clue: "The CNS row with First Aid's own phrase “park my Benz” (BENZtropine parks the tremor)",
    },
    {
      drug: "Glycopyrrolate",
      klass: "Muscarinic antagonist (peripheral, quaternary)",
      target: "GI and respiratory secretions (M receptors of the GI/airway rows)",
      mechanism: "Peripheral muscarinic blockade of secretion and smooth-muscle tone (excluded from the CNS)",
      effect: "↓ airway secretions; ↓ drooling; ↓ gastric acid",
      uses:
        "Parenteral: preoperative use to reduce airway secretions; Oral: reduces drooling, peptic ulcer",
      adverse: "Dry mouth, constipation, urinary retention — without CNS effects",
      clue:
        "The perioperative drying agent — parenteral before surgery, oral for drooling (the GI, respiratory row)",
    },
    {
      drug: "Hyoscyamine, dicyclomine",
      klass: "Muscarinic antagonist (GI antispasmodic)",
      target: "GI smooth muscle M receptors (the Gut row: ↓ motility)",
      mechanism: "Muscarinic blockade of gut smooth muscle",
      effect: "↓ motility and spasm",
      uses: "Antispasmodics for irritable bowel syndrome",
      adverse: "Constipation, dry mouth; the standard anticholinergic pattern",
      clue: "The GI row: 'Antispasmodics for irritable bowel syndrome'",
    },
    {
      drug: "Ipratropium, tiotropium",
      klass: "Muscarinic antagonist (inhaled, quaternary)",
      target: "Airway M receptors (the Airway row)",
      mechanism: "Inhaled muscarinic blockade — bronchodilation with ↓ secretions, no CNS entry",
      effect: "Bronchodilation (and ↓ secretions) limited to the airway",
      uses: "COPD, asthma; Duration: tiotropium > ipratropium",
      adverse: "Dry mouth; minimal systemic anticholinergic burden (excluded from the CNS)",
      clue:
        "The Respiratory row with the printed duration rule: tiotropium is the LONG-acting one (once-daily), ipratropium the shorter",
    },
    {
      drug: "Solifenacin, oxybutynin, flavoxate, tolterodine",
      klass: "Muscarinic antagonist (genitourinary)",
      target: "Bladder detrusor M receptors (the Bladder row — M₃ on the micturition page)",
      mechanism: "Muscarinic blockade of detrusor smooth muscle — relaxation (⊝ M₃, book 236)",
      effect: "↓ bladder spasms; ↓ urge",
      uses: "Reduce bladder spasms and urge urinary incontinence (overactive bladder) — Make bladder SOFT",
      adverse:
        "Dry mouth, constipation, urinary retention (the Full as a flask trap — too much blockade defeats the purpose)",
      clue:
        "First Aid's own acronym: S-olifenacin O-xybutynin F-lavoxate T-olterodine = Make bladder SOFT",
    },
    {
      drug: "Scopolamine",
      klass: "Muscarinic antagonist (central)",
      target: "CNS muscarinic receptors (vestibular pathway)",
      mechanism: "Central muscarinic blockade of vestibular signaling (crosses the BBB)",
      effect: "Suppression of motion-induced nausea",
      uses: "Motion sickness (the printed CNS row; classically transdermal)",
      adverse: "The full anticholinergic pattern including disorientation",
      clue:
        "The only anticholinergic whose printed application is motion sickness — the CNS row that requires crossing the tollbooth",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 61-year-old woman with diabetic retinopathy is scheduled for a dilated fundoscopic examination; after topical instillation her pupils dilate and she cannot read her phone for the rest of the afternoon (no accommodation).",
        discriminator:
          "Topical ophthalmic anticholinergic — mydriasis PLUS cycloplegia is the printed Eye row",
        concept: "The Eye door of the anticholinergic directory",
        answer:
          "Atropine, homatropine, tropicamide — 'Produce mydriasis and cycloplegia.' Muscarinic blockade of the iris sphincter dilates the pupil (mydriasis) and blockade of the ciliary muscle paralyzes accommodation (cycloplegia) — and the same mydriasis is why older adults with narrow angles risk acute angle-closure glaucoma.",
      },
      {
        stem: "A 74-year-old man with Parkinson disease has a pill-rolling tremor and rigidity; his regimen is adjusted to include an oral anticholinergic that crosses into the CNS; separately, a young man on an antipsychotic develops an acute dystonic reaction treated with the same class of agent.",
        discriminator:
          "CNS anticholinergic — the printed mnemonic “park my Benz”",
        concept: "The CNS door — central dopamine–acetylcholine balance",
        answer:
          "Benztropine, trihexyphenidyl — 'Parkinson disease (“park my Benz”) / Acute dystonia.' Central muscarinic blockade restores the balance tipped by dopamine deficiency (Parkinson) or dopamine blockade (antipsychotic-induced dystonia) — the directory's first CNS row.",
      },
      {
        stem: "A 55-year-old woman about to undergo general anesthesia receives an intravenous anticholinergic premedication so the airway is dry at intubation; the anesthesiologist specifically avoids agents that enter the CNS.",
        discriminator:
          "Parenteral preoperative antisialagogue — the GI, respiratory row",
        concept: "Peripheral drying without CNS entry",
        answer:
          "Glycopyrrolate — 'Parenteral: preoperative use to reduce airway secretions' (and by the oral route, reduces drooling, peptic ulcer). Its exclusion from the CNS (KYP synthesis: a permanently charged quaternary amine) is why it dries the airway without the disorientation of the tertiary agents.",
      },
      {
        stem: "A 68-year-old woman has sudden overwhelming urinary urgency with frequent leakage; she is started on an oral agent that quiets the detrusor muscle; on a second page of her drug leaflet, the same mechanism appears in a bladder-innervation table (⊝ M₃ receptor → relaxation of detrusor smooth muscle).",
        discriminator:
          "Overactive bladder — the Genitourinary row and First Aid's SOFT acronym",
        concept: "The GU door — detrusor muscarinic blockade",
        answer:
          "Solifenacin, Oxybutynin, Flavoxate, Tolterodine — 'Reduce bladder spasms and urge urinary incontinence (overactive bladder)' — 'Make bladder SOFT.' The same drugs print on the micturition-control page (book 236) as the ⊝ M₃ detrusor example (oxybutynin is the 'o' of 'Baby one more time.').",
      },
    ],
    traps: [
      {
        a: "Scopolamine (CNS row — motion sickness)",
        b: "Ipratropium (Respiratory row — COPD, asthma)",
        whyConfused:
          "Both are muscarinic antagonists in the same printed directory; their names even share the '-trop-' stem",
        keyDifference:
          "Scopolamine's printed application (motion sickness) requires CROSSING into the CNS; ipratropium is inhaled for the airway and excluded from the CNS (KYP synthesis: a permanently charged quaternary amine — no CNS entry, no CNS side effects)",
        clue:
          "Route + organ-system column: transdermal/oral for the brain vs inhaled for the airway; a COPD patient who must not get confused gets the quaternary one",
      },
      {
        a: "'Atropine alone fixes organophosphate poisoning'",
        b: "The printed boundary rule",
        whyConfused:
          "Atropine is the antidote of choice for anticholinesterase poisoning, so it is easy to assume it reverses everything",
        keyDifference:
          "The spanning NOTES cell: atropine 'Blocks muscarinic effects (DUMBBELSS) of anticholinesterases, but not the nicotinic effects' — miosis, bronchorrhea, bradycardia, and GI symptoms reverse; muscle fasciculations and weakness (nicotinic) do not",
        clue:
          "Persisting fasciculations/weakness after adequate atropine = the nicotinic effects the rule carves out",
      },
      {
        a: "An anticholinergic prescribed for an older adult or a man with BPH",
        b: "The printed special-population traps",
        whyConfused:
          "The therapeutic dose and the toxic pattern sit close together, and the harmed population is defined by anatomy, not dose",
        keyDifference:
          "The printed adverse-effects sentence: 'Can cause acute angle-closure glaucoma in older adults (due to mydriasis), urinary retention in men with prostatic hyperplasia, and hyperthermia in infants' — narrow angles, enlarged prostate, and small sweating reserve are pre-existing vulnerabilities",
        clue:
          "Older adult + red painful eye + vomiting after an anticholinergic = angle closure; BPH man + no urine output = retention; infant + dry hot skin = hyperthermia",
      },
    ],
    pivots: [
      {
        lookAlike:
          "Any 'which finding is caused by the anticholinergic' question — the vignette lists one finding from each organ system",
        differentiator:
          "Route it through the printed rows: Eye (↑ pupil dilation, cycloplegia), Airway (bronchodilation, ↓ secretions), Heart (↑ heart rate), Stomach (↓ acid secretion), Gut (↓ motility), Bladder (↓ urgency) — plus the sweat-gland eviction, which prints in the adverse-effects line as ↑ body temperature (due to ↓ sweating). If a listed finding is NOT muscarinic-blockade-shaped (eg, miosis, diarrhea, bradycardia, sweating), it does not belong to this drug class at all — those are cholinergic findings.",
        correctPath:
          "Name the organ row first, then the direction: everything the parasympathetic system does through M1–5, the antagonist reverses — dry, wide, fast, still, hot",
      },
      {
        lookAlike:
          "The same drug appearing on two pages — oxybutynin in the Genitourinary row here vs the micturition-control table (book 236)",
        differentiator:
          "This page carries the APPLICATION ('Reduce bladder spasms and urge urinary incontinence (overactive bladder)'; 'Make bladder SOFT'); the micturition page carries the MECHANISM at the organ (⊝ M₃ receptor → relaxation of detrusor smooth muscle → ↓ detrusor overactivity) — and oxybutynin is the 'o' of First Aid's printed mnemonic 'Baby one more time.'",
        correctPath:
          "When a bladder-drug question asks WHY, go to the micturition page (M₃ detrusor relaxation); when it asks WHICH DRUG or FOR WHAT, come back to this directory's GU row (the SOFT quartet)",
      },
    ],
    miniCase: {
      vignette:
        "A 24-year-old farm worker is brought to the emergency department 45 minutes after dermal exposure to an organophosphate insecticide. He is drooling and tearing, has diffuse wheezing with copious bronchorrhea, pinpoint pupils, a heart rate of 44/min, vomiting, and diarrhea, and is drenched in sweat. He also has continuous fasciculations of the tongue, face, and proximal limb muscles with symmetric proximal weakness. Intravenous atropine is given and titrated until his airway secretions and heart rate improve. Which of the following findings is most likely to PERSIST despite adequate atropine dosing?",
      question:
        "Track each finding through the printed atropine rule — which one does atropine NOT reverse?",
      options: [
        {
          label:
            "Muscle fasciculations and proximal weakness — the nicotinic effects at the skeletal-muscle junction",
          text: "The twitching muscles outlast the drying glands.",
          correct: true,
          why:
            "Correct — and the printed NOTES cell says so in one line: atropine 'Blocks muscarinic effects (DUMBBELSS) of anticholinesterases, but not the nicotinic effects.' The organophosphate inhibits acetylcholinesterase everywhere, so excess acetylcholine floods BOTH receptor families — muscarinic (the DUMBBELSS findings: secretions, miosis, bradycardia, GI symptoms, sweating) and nicotinic (skeletal-muscle and ganglionic: fasciculations, weakness). Atropine occupies only the muscarinic receptors, so the nicotinic muscle findings persist until the enzyme itself is reactivated. This is exactly the boundary the page draws.",
        },
        {
          label:
            "Pinpoint pupils — the iris sphincter remains in spasm because atropine does not reach the eye",
          text: "Miosis must persist; the eye is too far from the IV.",
          why:
            "Wrong on the mechanism. Miosis is a MUSCARINIC finding — the iris sphincter contracts through M receptors, and atropine reaches it systemically (the printed Eye row: atropine produces ↑ pupil dilation, i.e., mydriasis — the exact reversal of miosis). Adequate atropine dosing therefore mid-dilates the pupils; this is one of the DUMBBELSS-family effects the spanning note says atropine DOES block.",
        },
        {
          label:
            "Bronchorrhea and wheezing — airway secretions are under sympathetic control, which atropine does not touch",
          text: "The airway dries only with adrenergic drugs.",
          why:
            "Wrong family. Airway secretions and bronchial tone are MUSCARINIC — the printed Airway row says atropine produces bronchodilation with ↓ secretions, and the bedside endpoint in organophosphate poisoning is exactly that: atropine titrated until the chest clears. Mislabeling the airway as 'sympathetic-only' ignores the parasympathetic (and the cholinergic-sympathetic sweat gland is the only sympathetic exception in this system).",
        },
        {
          label:
            "Bradycardia — the SA node's muscarinic receptors are protected by the blood-brain barrier, so IV atropine cannot reach them",
          text: "The heart stays slow; atropine stays outside.",
          why:
            "Contradicts the printed definition. Atropine is 'Used to treat bradycardia' — the first printed use on the page — because the SA node's muscarinic receptors (the Heart row: ↑ heart rate) are exactly what it blocks; there is no blood-brain barrier at the SA node, and the heart rate of 44/min in the stem is one of the first findings to yield. Persisting bradycardia would mean under-dosing, not an anatomical barrier.",
        },
      ],
      reasoning:
        "The stem hands you a mixed cholinergic poisoning and a single drug — atropine — and asks what it CANNOT fix. The page's spanning NOTES cell is the answer key: 'Blocks muscarinic effects (DUMBBELSS) of anticholinesterases, but not the nicotinic effects.' Sort every option by receptor family. Miosis (option 2), bronchorrhea/wheezing (option 3), and bradycardia (option 4) are all muscarinic — each maps to a printed atropine row (Eye: mydriasis reverses miosis; Airway: bronchodilation + ↓ secretions clears the chest; Heart: ↑ heart rate, the printed bradycardia indication) — so all three yield to titrated atropine. The fasciculations and weakness are NICOTINIC (skeletal-muscle junction), the family the printed rule explicitly excludes — they persist after adequate atropine, marking the limit of atropine-only therapy. The distractors each invent a barrier ('too far from the IV', 'sympathetic-only airway', 'protected SA node') to make a reversible muscarinic finding look irreversible; the rule says the boundary runs between receptor families, not between organs.",
    },
  },
  mnemonics: [
    {
      code: "HOT AS A HARE, FAST AS A FIDDLE, DRY AS A BONE, RED AS A BEET, BLIND AS A BAT, MAD AS A HATTER, FULL AS A FLASK",
      meaning:
        "First Aid's own printed mnemonic cell (book 240, carried attributed, verbatim) — Hot as a hare = ↑ body temperature (due to ↓ sweating; hyperthermia in infants); Fast as a fiddle = ↑ HR; Dry as a bone = dry mouth (and anhidrosis); Red as a beet = dry, flushed skin; Blind as a bat = cycloplegia (mydriasis, no accommodation); Mad as a hatter = disorientation; Full as a flask = urinary retention (the prostatic-hyperplasia trap). The cell's last line is its exposure vignette: Jimson weed (Datura) → gardener’s pupil (mydriasis).",
      memorizes:
        "The printed adverse-effects row of the anticholinergics — the full atropine toxidrome",
      whenToUse:
        "Any anticholinergic toxicity question, any Jimson weed/Datura exposure vignette, any 'which finding after an anticholinergic' list",
      clinical:
        "Seven phrases, seven printed findings: temperature, heart rate, mouth/sweat, skin, eyes, brain, bladder — and the gardener's pupil tells you the exposure was a plant, not a pill.",
    },
    {
      code: "DRY, WIDE, FAST, STILL (AND HOT)",
      meaning:
        "Atropine's four verbs — every one of the six printed organ rows reduces to one of them: the EYE goes WIDE (↑ pupil dilation) and STILL (cycloplegia — the ciliary muscle cannot accommodate); the AIRWAY goes OPEN (bronchodilation) and DRY (↓ secretions); the HEART goes FAST (↑ heart rate); the STOMACH goes DRY (↓ acid secretion); the GUT goes STILL (↓ motility); the BLADDER goes STILL (↓ urgency in cystitis). The fifth verb, HOT, is the sweat-gland eviction: ↑ body temperature (due to ↓ sweating).",
      memorizes:
        "The six-row atropine end-organ table plus the temperature rule",
      whenToUse:
        "Any 'what does atropine do to organ X' or 'which finding fits anticholinergic toxicity' question",
      clinical:
        "When an exam list gives you a finding, test it against the four verbs: anything wet, narrow, slow, or moving is NOT anticholinergic — it is cholinergic.",
    },
    {
      code: "THE CNS TOLLBOOTH — CHARGED STAYS OUT (KYP synthesis)",
      meaning:
        "Not printed on book 240 (recorded as a KYP extension): the permanently CHARGED quaternary amines — ipratropium, tiotropium, glycopyrrolate — cannot pay the blood-brain barrier's toll, so they STAY OUT of the CNS: their applications are entirely peripheral (COPD/asthma inhaled; preoperative airway drying; drooling; peptic ulcer) and they cause no disorientation. The UNCHARGED tertiary amines — atropine, homatropine, tropicamide, benztropine, trihexyphenidyl, scopolamine, oxybutynin — cross: that is why the two CNS applications (“park my Benz”; motion sickness) and the Mad-as-a-hatter toxicity belong to them.",
      memorizes:
        "Which anticholinergics can produce CNS effects and which cannot — the charge rule behind the printed organ-system column",
      whenToUse:
        "Any question pairing an anticholinergic with CNS effects (or their absence) — the COPD patient who must not get confused, the motion-sickness prophylaxis choice, the 'why no disorientation with this inhaled agent' mechanism ask",
      clinical:
        "Pick the quaternary agent when you want the peripheral pattern without the brain; expect disorientation only from the tertiary ones.",
    },
    {
      code: "EYES DROP, BRAIN PARKS, AIRWAY DRIES, GUT CALMS, BLADDER SOFTENS",
      meaning:
        "The five doors of the directory, one verb each: EYES DROP (the ophthalmic atropine/homatropine/tropicamide row — 'drops' for the eye); BRAIN PARKS (the CNS rows — benztropine/trihexyphenidyl for Parkinson disease and acute dystonia, First Aid's own “park my Benz”, plus scopolamine for motion sickness); AIRWAY DRIES (glycopyrrolate parenteral for preoperative secretions, and ipratropium/tiotropium inhaled for COPD/asthma); GUT CALMS (hyoscyamine/dicyclomine antispasmodics for irritable bowel syndrome); BLADDER SOFTENS (the SOFT quartet — Solifenacin, Oxybutynin, Flavoxate, Tolterodine; First Aid's own 'Make bladder SOFT').",
      memorizes:
        "The whole printed DRUGS / ORGAN SYSTEMS / APPLICATIONS directory in one pass",
      whenToUse:
        "Any one-step 'which anticholinergic for this patient' question — match the vignette's organ to the door, and the drug row comes with it",
      clinical:
        "Hear the organ (eye, brain, airway, gut, bladder), name the door, and the printed application arrives with it — including the duration rule tiotropium > ipratropium at the airway door.",
    },
    {
      code: "NO SWEAT, NO EXIT — THE THERMOSTAT RULE",
      meaning:
        "The temperature regulation rule: the sweat gland is the ONE sympathetic organ that listens muscarinically (cholinergic sympathetic, book 235), so it is the body's only evaporative coolant that muscarinic blockade switches off — ↑ body temperature (due to ↓ sweating), printed in the adverse-effects line. The smaller the body, the faster it cooks: hyperthermia in infants (no sweating reserve) is the printed extreme; the dry, flushed, hot skin of the toxidrome (Dry as a bone + Red as a beet + Hot as a hare) is the same rule at bedside intensity.",
      memorizes:
        "WHY anticholinergics cause hyperthermia — and which population is most at risk (infants)",
      whenToUse:
        "Any anticholinergic + fever question, the overheated infant vignette, and the dry-vs-wet discriminator between anticholinergic and sympathomimetic toxicity",
      clinical:
        "Dry hot skin with confusion is anticholinergic until proven otherwise — the sweat gland's eviction is the giveaway (sympathomimetics sweat; anticholinergics do not).",
    },
  ],
  rapidReview: {
    s30: [
      "Atropine: 'Muscarinic antagonist. Used to treat bradycardia and for ophthalmic applications.'",
      "Atropine's six organs: Eye ↑ pupil dilation, cycloplegia · Airway bronchodilation, ↓ secretions · Heart ↑ heart rate · Stomach ↓ acid secretion · Gut ↓ motility · Bladder ↓ urgency in cystitis",
      "The spanning note: 'Blocks muscarinic effects (DUMBBELSS) of anticholinesterases, but not the nicotinic effects'",
      "Eye row: Atropine, homatropine, tropicamide — produce mydriasis and cycloplegia",
      "CNS rows: Benztropine, trihexyphenidyl — Parkinson disease (“park my Benz”), acute dystonia; Scopolamine — motion sickness",
      "Glycopyrrolate: GI, respiratory — parenteral preoperative airway secretions; oral drooling, peptic ulcer",
      "Hyoscyamine, dicyclomine: GI antispasmodics for irritable bowel syndrome; Ipratropium, tiotropium: COPD, asthma (duration tiotropium > ipratropium)",
      "GU row: Solifenacin, Oxybutynin, Flavoxate, Tolterodine — reduce bladder spasms and urge urinary incontinence (overactive bladder); Make bladder SOFT",
      "Adverse effects: ↑ body temperature (due to ↓ sweating); ↑ HR; dry mouth; dry, flushed skin; cycloplegia; constipation; disorientation — plus angle-closure in older adults, retention in BPH men, hyperthermia in infants",
    ],
    m3: [
      "DRY, WIDE, FAST, STILL (AND HOT) — atropine's four verbs across the six organ rows",
      "HOT AS A HARE… FULL AS A FLASK — First Aid's printed toxidrome cell (Hot/Fast/Dry/Red/Blind/Mad/Full + Jimson weed → gardener’s pupil)",
      "THE CNS TOLLBOOTH — CHARGED STAYS OUT: ipratropium, tiotropium, glycopyrrolate never enter the CNS; the tertiary amines cross (KYP synthesis)",
      "EYES DROP, BRAIN PARKS, AIRWAY DRIES, GUT CALMS, BLADDER SOFTENS — the five doors of the directory",
      "NO SWEAT, NO EXIT — the sweat gland is the cholinergic-sympathetic coolant; block it and the patient heats up (infants fastest)",
    ],
    m10: [
      "The page is TWO tables + one adverse-effects row: the 7-row DRUGS/ORGAN SYSTEMS/APPLICATIONS directory, the 6-row atropine ORGAN SYSTEM/ACTION table, and the ADVERSE EFFECTS row with First Aid's mnemonic cell on its right",
      "The DUMBBELSS note is ONE cell that SPANS all six atropine rows in print (VLM-adjudicated at 120dpi) — the text layer extracts it between the Heart and Stomach rows because it is vertically centered; 'DUMBBELSS' prints with the double S, carried verbatim",
      "The 'Hot as a hare' family is NOT a margin box — it is the right-hand cell of the printed ADVERSE EFFECTS row (VLM-adjudicated), which is why it maps phrase-for-phrase to the printed adverse-effects list",
      "The text layer interleaves each directory row's three cells as separate lines (the m38 convention) — the logical table is the VLM reconstruction; 'SEC TION II' prints with a space inside SECTION (text-layer quirk, carried verbatim in the evidence quote)",
      "The ↑/↓/→ arrows print in the text layer preceded by U+008F/U+0090/U+008E control characters (stripped by the generator's whitespace-insensitive containment); the indd slug extracts at a MID-PAGE position (line 112) but prints at the foot",
      "Census: ZERO raster images on pdf 262 (pdfimages) — pure text and tables; VLM was available this session (one pass) and adjudicated the table structures",
      "Two printed acronym phrases ride inside table cells: “park my Benz” (benztropine row) and “Make bladder SOFT” (the GU row's four drug initials) — First Aid's own, carried attributed; the SOFT quartet's oxybutynin is the 'o' of 'Baby one more time.' on the micturition page (book 236)",
    ],
  },
  recall: [
    {
      q: "The atropine definition line, verbatim (the sentence printed above the end-organ table).",
      a: "Muscarinic antagonist. Used to treat bradycardia and for ophthalmic applications.",
    },
    {
      q: "The six atropine organ rows with their printed actions, in printed order.",
      a: "Eye: ↑ pupil dilation, cycloplegia. Airway: bronchodilation, ↓ secretions. Heart: ↑ heart rate. Stomach: ↓ acid secretion. Gut: ↓ motility. Bladder: ↓ urgency in cystitis.",
    },
    {
      q: "The atropine table's spanning NOTES cell, verbatim.",
      a: "Blocks muscarinic effects (DUMBBELSS) of anticholinesterases, but not the nicotinic effects.",
    },
    {
      q: "The printed adverse-effects sentence, including the three special-population traps.",
      a: "↑ body temperature (due to ↓ sweating); ↑ HR; dry mouth; dry, flushed skin; cycloplegia; constipation; disorientation. Can cause acute angle-closure glaucoma in older adults (due to mydriasis), urinary retention in men with prostatic hyperplasia, and hyperthermia in infants.",
    },
    {
      q: "Which three drugs produce mydriasis and cycloplegia — and which organ row do they occupy?",
      a: "Atropine, homatropine, tropicamide — the Eye row.",
    },
    {
      q: "Decode “park my Benz”: which drugs, which organ system, which two applications?",
      a: "Benztropine, trihexyphenidyl — CNS row: Parkinson disease and acute dystonia.",
    },
    {
      q: "What does SOFT stand for, and what is the printed application?",
      a: "Solifenacin, Oxybutynin, Flavoxate, Tolterodine — the Genitourinary row: reduce bladder spasms and urge urinary incontinence (overactive bladder); 'Make bladder SOFT'.",
    },
    {
      q: "The inhaled anticholinergics, their application, and their printed duration rule.",
      a: "Ipratropium, tiotropium — Respiratory row: COPD, asthma; Duration: tiotropium > ipratropium.",
    },
  ],
  related: [
    {
      title: "Acetylcholine Receptors: Nicotinic & Muscarinic",
      topicId: "acetylcholine-receptors",
      note: "The M1–5 distribution map (book 235) is the wiring behind this page's six-organ pattern — heart, smooth muscle, brain, exocrine glands, and the sweat glands (cholinergic sympathetic) whose muscarinic blockade produces the anhidrosis → hyperthermia rule printed here in the adverse-effects line.",
    },
    {
      title: "Cholinomimetic Agents",
      topicId: "cholinomimetics",
      note: "The agonist side of the same receptors, printed on the facing page (book 239): the anticholinesterases whose excess produces the DUMBBELSS effects this page's spanning note says atropine blocks (muscarinic) and does not block (nicotinic) — the two pages together give you the entire organophosphate-poisoning logic.",
    },
    {
      title: "Micturition Control",
      topicId: "micturition-control",
      note: "The bladder-door mechanism page (book 236): oxybutynin is First Aid's ⊝ M₃ detrusor example (the 'o' of 'Baby one more time.') — this page's GU row gives the same drug its application (overactive bladder, Make bladder SOFT), and the micturition page gives it the mechanism.",
    },
    {
      title: "Autonomic Receptors: The Organ Response Table",
      topicId: "autonomic-receptors",
      note: "The organ-by-organ wiring figure (book 234) shows the parasympathetic fibers this page's drugs block at their end-organ M receptors — every row of the atropine table is one autonomic wiring pathway with its receptor locked.",
    },
  ],
  crossLinks: [
    {
      subject: "Ophthalmology & pupillary anatomy (why the eye row matters)",
      connection:
        "The Eye row's two effects map to two muscles: mydriasis is blockade of the parasympathetic iris SPHINCTER (the dilator dominates), and cycloplegia is blockade of the ciliary muscle (no accommodation for near vision). The same mydriasis is the mechanism of the printed trap in older adults — the dilated pupil in a narrow angle precipitates acute angle-closure glaucoma, which is why 'Blind as a bat' can become a true ophthalmologic emergency in that population.",
    },
    {
      subject: "Urology (the bladder door and the retention trap)",
      connection:
        "The Bladder row (↓ urgency in cystitis) and the GU directory row (reduce bladder spasms and urge urinary incontinence — Make bladder SOFT) are the detrusor muscle's muscarinic (M₃) receptors being blocked, the same receptor printed on the micturition-control page (book 236). Push the same blockade too far in a man with prostatic hyperplasia and you get the printed adverse effect: urinary retention — the therapeutic mechanism and the toxicity are the same blockade at different intensities.",
    },
    {
      subject: "Toxicology (the two cholinergic toxidromes and their boundary)",
      connection:
        "This page and the cholinomimetic page form a toxicology pair: anticholinesterase excess floods BOTH receptor families (muscarinic DUMBBELSS effects + nicotinic muscle effects), and the spanning note draws the antidote boundary — atropine reverses the muscarinic effects only. The reverse toxidrome is printed here too: Jimson weed (Datura) → gardener’s pupil (mydriasis), the plant-exposure version of Hot-as-a-hare. Dry skin separates them: anticholinergic poisoning is DRY (no sweating — the muscarinic coolant is blocked); cholinergic excess is WET (sweating, salivation, bronchorrhea).",
    },
    {
      subject: "Pediatrics & temperature regulation (the infant hyperthermia rule)",
      connection:
        "The printed temperature rule — ↑ body temperature (due to ↓ sweating), hyperthermia in infants — is applied thermoregulation: sweating is the body's evaporative coolant, and the sweat gland is the one sympathetic organ that listens muscarinically (cholinergic sympathetic, book 235). Block it and heat cannot exit; infants, with high surface-area-to-mass ratio and limited sweating reserve, are the printed worst case — the same physiology that makes 'Hot as a hare' a hare and not a metaphor.",
    },
  ],
};
