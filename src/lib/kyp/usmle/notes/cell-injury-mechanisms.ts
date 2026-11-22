import type { KypUsMLENote } from "../types";

// Pathology — CELLULAR INJURY banner (P-batch 2). Source: pdf 225 /
// book 203 (Cell injury — the reversible and irreversible bullet
// lists, the injury timeline figure, and the ferroptosis paragraph).
// Census: p225 is PURE TEXT (pdfimages: ZERO rasters) — the timeline
// prints as VECTOR LINE ART with all labels in the text layer; VLM
// census (render p-225.png + the focused figure crop) confirmed the
// topology: NORMAL CELL at left, a GREEN DOUBLE-HEADED arrow to the
// reversible-injury cell (labels: Cellular swelling, Ribosomal
// detachment, Membrane blebbing, Nuclear chromatin clumping), a RED
// arrow to the irreversible-injury cell (labels: Rupture of lysosomes
// and autolysis, Plasma membrane damage, Nuclear degradation,
// increased mitochondrial permeability), and a BLACK arrow to a
// fragmented-cell drawing = Cell death (necrosis); the legend prints
// at the figure's left (Reversible green, Irreversible red, Cell
// death black). 'Ferroptosis' prints in the text STREAM among the
// figure labels (raw 36) but VLM-verified it sits BELOW the figure as
// the bolded paragraph heading — a stream-order quirk, documented.
// NO photographs, NO margin mnemonics (VLM confirmed).

export const cellInjuryMechanisms: KypUsMLENote = {
  id: "cell-injury-mechanisms",
  title: "Cell Injury: Reversible, Irreversible & Ferroptosis",
  subtitle:
    "The injury timeline from pump failure to the point of no return, and the iron-dependent detour (book 203). REVERSIBLE INJURY — ↓ ATP → ↓ activity of Ca2+ and Na+/K+-ATPase pumps → cellular swelling (cytosol, mitochondria, ER/Golgi), the earliest morphologic manifestation; ribosomal/polysomal detachment → ↓ protein synthesis; plasma membrane changes (blebbing); nuclear changes (chromatin clumping); rapid loss of function (myocardial cells noncontractile after 1-2 minutes of ischemia); myelin figures (aggregation of peroxidized lipids). IRREVERSIBLE INJURY — breakdown of plasma membrane → cytosolic enzymes (eg, troponin) leak outside the cell, Ca2+ influx → activation of degradative enzymes; mitochondrial damage → loss of electron transport chain → ↓ ATP; rupture of lysosomes → autolysis; nuclear degradation: pyknosis (condensation) → karyorrhexis (endonuclease-mediated fragmentation) → karyolysis (dissolution); amorphous densities/inclusions in mitochondria. FERROPTOSIS — lipid peroxidation → accumulation of lethal lipid species → iron-dependent cell death; mitochondrial shrinkage with loss of cristae and outer membrane rupture; MASLD/MASH, ischemia-reperfusion injury, neurodegeneration; preventable with iron chelators (deferiprone, deferoxamine) and small lipophilic antioxidants (ferrostatin, liproxstatin). THE TIMELINE — normal cell → (reversible, green) swelling/detachment/blebbing/clumping → (irreversible, red) autolysis/membrane damage/nuclear degradation/mitochondrial permeability → cell death (necrosis).",
  subject: "Pathology",
  system: "Section II · High-Yield General Principles — Pathology: Cellular Injury",
  pilotCategory:
    "The injury timeline with its ATP-pump opening move and its membrane-breakdown point of no return — the reversible quartet (cellular swelling as the earliest morphologic manifestation, ribosomal detachment, blebbing, chromatin clumping) against the irreversible cascade (troponin leak with Ca2+ influx, electron-transport-chain loss, lysosomal autolysis, the pyknosis-karyorrhexis-karyolysis ladder) — plus ferroptosis as the iron-dependent detour whose mitochondria SHRINK.",
  difficulty: 2,
  readTime: 10,
  sourceRef:
    "First Aid 2026, Part 1 pp. 203–203 (Cell injury — the Reversible and Irreversible cell injury bullet lists; the injury timeline figure with its legend; the Ferroptosis paragraph with its chelator and antioxidant preventions)",
  tags: [
    "cell injury",
    "reversible cell injury",
    "irreversible cell injury",
    "cellular adaptation",
    "ATP depletion",
    "Na+/K+-ATPase",
    "cellular swelling",
    "earliest morphologic manifestation",
    "ribosomal detachment",
    "protein synthesis",
    "membrane blebbing",
    "chromatin clumping",
    "myelin figures",
    "peroxidized lipids",
    "myocardial ischemia",
    "plasma membrane breakdown",
    "troponin leak",
    "calcium influx",
    "degradative enzymes",
    "mitochondrial damage",
    "electron transport chain",
    "lysosomal rupture",
    "autolysis",
    "pyknosis",
    "karyorrhexis",
    "karyolysis",
    "nuclear degradation",
    "amorphous densities",
    "mitochondrial permeability",
    "cell death",
    "necrosis",
    "ferroptosis",
    "lipid peroxidation",
    "iron-dependent cell death",
    "mitochondrial shrinkage",
    "loss of cristae",
    "outer membrane rupture",
    "MASLD",
    "MASH",
    "ischemia-reperfusion injury",
    "neurodegeneration",
    "cancer therapy",
    "deferiprone",
    "deferoxamine",
    "iron chelators",
    "ferrostatin",
    "liproxstatin",
    "lipophilic antioxidants",
  ],
  core: {
    what: "REVERSIBLE CELL INJURY (the six printed bullets): ↓ ATP → ↓ activity of Ca2+ and Na+/K+-ATPase pumps → cellular swelling (cytosol, mitochondria, endoplasmic reticulum/Golgi), which is the EARLIEST MORPHOLOGIC MANIFESTATION of cell injury; ribosomal/polysomal detachment → ↓ protein synthesis; plasma membrane changes (eg, blebbing); nuclear changes (eg, chromatin clumping); rapid loss of function (eg, myocardial cells are noncontractile after 1-2 minutes of ischemia); myelin figures (aggregation of peroxidized lipids). IRREVERSIBLE CELL INJURY (the five printed bullets): breakdown of plasma membrane → cytosolic enzymes (eg, troponin) leak outside of cell, influx of Ca2+ → activation of degradative enzymes; mitochondrial damage/dysfunction → loss of electron transport chain → ↓ ATP; rupture of lysosomes → autolysis; nuclear degradation — pyknosis (nuclear condensation) → karyorrhexis (nuclear fragmentation caused by endonuclease-mediated cleavage) → karyolysis (nuclear dissolution); amorphous densities/inclusions in mitochondria. FERROPTOSIS: lipid peroxidation → accumulation of lethal lipid species → iron-dependent cell death; results in shrinkage of mitochondria with loss of cristae and mitochondrial outer membrane rupture; involved in the pathogenesis of several disease states (eg, MASLD/MASH, ischemia-reperfusion injury, neurodegeneration), with potential therapeutic applications (eg, cancer therapy); may be preventable through the use of iron chelators (eg, deferiprone, deferoxamine) and small lipophilic antioxidants (eg, ferrostatin, liproxstatin). THE TIMELINE FIGURE (redrawn as this note's registry visual): normal cell → the reversible cell (cellular swelling, ribosomal detachment, membrane blebbing, nuclear chromatin clumping) over the green double-headed arrow → the irreversible cell (rupture of lysosomes and autolysis, plasma membrane damage, nuclear degradation, increased mitochondrial permeability) over the red arrow → the fragmented cell of cell death (necrosis) over the black arrow; the legend prints Reversible (green), Irreversible (red), Cell death (necrosis) (black).",
    why: "This page is the mechanistic engine under every ischemic and toxic question in pathology: injury is a TIMELINE, not an event, and the exam tests WHERE on the timeline a cell sits. The opening move is always energetic — ATP falls, the Na+/K+-ATPase pumps stall, and osmotic balance is lost, so the cell swells (the earliest morphologic manifestation, the finding every pathology course starts with). What makes the page teach so cleanly is the pairing of the two cascades: the reversible quartet (swelling, ribosomal detachment, blebbing, chromatin clumping) is everything a cell can still walk back, and the irreversible set is everything it cannot — and the hinge between them is the PLASMA MEMBRANE, because its breakdown is simultaneously the point of no return AND the clinically measurable event: cytosolic enzymes (troponin) leak out, which is exactly what the cardiac ward measures to diagnose an MI. The page also teaches timing beyond morphology: function is lost FAST (myocardial cells are noncontractile after 1-2 minutes of ischemia — long before any structure is committed to death), which is why 'symptoms before necrosis' is the clinical reality of reperfusable ischemia. The nuclear ladder (pyknosis → karyorrhexis → karyolysis) gives irreversible injury its ordered grammar — condensation, then endonuclease-mediated fragmentation, then dissolution — the sequence every histology slide of dead tissue is read against. And ferroptosis stands apart as the regulated-death detour: instead of swelling, its mitochondria SHRINK (loss of cristae, outer membrane rupture), the death is IRON-dependent and lipid-driven (peroxidation → lethal lipid species), and — uniquely on this page — it is PREVENTABLE by name: iron chelators (deferiprone, deferoxamine) and lipophilic antioxidants (ferrostatin, liproxstatin), a pharmacology hook the exam increasingly tests in MASLD/MASH, ischemia-reperfusion injury, and neurodegeneration.",
    keyIdea:
      "Read every injury vignette as a TIMELINE POSITION. THE OPENING MOVE (reversible): ↓ ATP → ↓ Na+/K+-ATPase activity → cellular swelling (cytosol, mitochondria, ER/Golgi) — the EARLIEST morphologic manifestation; with it: ribosomal/polysomal detachment (↓ protein synthesis), membrane blebbing, chromatin clumping, rapid functional loss (myocardium noncontractile after 1-2 minutes of ischemia), myelin figures (peroxidized lipids). THE POINT OF NO RETURN (irreversible): plasma membrane breakdown — cytosolic enzymes (troponin) LEAK and Ca2+ rushes IN activating degradative enzymes; mitochondrial damage → electron transport chain lost → ↓ ATP; lysosomal rupture → autolysis; the nuclear ladder pyknosis (condensation) → karyorrhexis (endonuclease fragmentation) → karyolysis (dissolution); amorphous mitochondrial densities. THE DETOUR: FERROPTOSIS — iron-dependent lipid peroxidation (lethal lipid species), mitochondria that SHRINK (cristae loss, outer membrane rupture), the MASLD/MASH + ischemia-reperfusion + neurodegeneration associations, cancer-therapy applications, and prevention by iron chelators (deferiprone, deferoxamine) plus lipophilic antioxidants (ferrostatin, liproxstatin). The green/red/black legend: reversible states retreat when perfusion returns; membrane breakdown and its troponin leak mark the border; necrosis is the fragmented end.",
  },
  mechanisms: [
    {
      id: "atp-pump-failure-cascade",
      title: "The opening move: ATP depletion stalls the pumps, and the swelling cascade follows",
      context: "The reversible bullet list and the timeline's green segment (book 203)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "An ischemic or toxic stress hits a previously normal cell",
            sublabel: "Input — hypoxia, ischemia, or a poison that collapses ATP production.",
            variant: "input",
          },
          {
            id: "atp",
            label: "↓ ATP → ↓ activity of Ca2+ and Na+/K+-ATPase pumps",
            sublabel: "The energetic failure is the first domino: ion pumps that hold osmotic balance run out of fuel; Ca2+ and Na+/K+ gradients collapse.",
            variant: "process",
          },
          {
            id: "swelling",
            label: "CELLULAR SWELLING (cytosol, mitochondria, ER/Golgi) — the EARLIEST morphologic manifestation",
            sublabel: "Water follows the failed ions into the cell; every membrane-bound compartment swells. The finding that defines 'injured but still reversible.'",
            variant: "process",
          },
          {
            id: "quartet",
            label: "THE REVERSIBLE QUARTET joins the swelling",
            sublabel: "Ribosomal/polysomal detachment → ↓ protein synthesis; plasma membrane changes (blebbing); nuclear changes (chromatin clumping); rapid loss of function (myocardial cells noncontractile after 1-2 minutes of ischemia); myelin figures (aggregation of peroxidized lipids).",
            variant: "process",
          },
          {
            id: "output",
            label: "Restore perfusion or remove the toxin and every one of these retreats",
            sublabel: "Output — the green double-headed arrow of the timeline: the reversible cell walks back to normal if ATP returns in time.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "atp", label: "ATP falls" },
          { from: "atp", to: "swelling", label: "pumps stall" },
          { from: "swelling", to: "quartet", label: "cascade widens" },
          { from: "quartet", to: "output", label: "if the stress lifts" },
        ],
      },
    },
    {
      id: "point-of-no-return",
      title: "The point of no return: membrane breakdown, the troponin leak, and the death cascade",
      context: "The irreversible bullet list, the timeline's red and black segments, and the ferroptosis paragraph (book 203)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "The stress persists past the reversible window",
            sublabel: "Input — the red arrow of the timeline: the cell crosses from retreatable swelling to committed death.",
            variant: "input",
          },
          {
            id: "membrane",
            label: "PLASMA MEMBRANE BREAKDOWN — the hinge event",
            sublabel: "Cytosolic enzymes (eg, troponin) leak outside of cell (the clinically measured MI marker) and Ca2+ influx activates degradative enzymes — the membrane's integrity is the border between reversible and irreversible.",
            variant: "process",
          },
          {
            id: "organelles",
            label: "THE ORGANELLE COLLAPSE — mitochondria and lysosomes",
            sublabel: "Mitochondrial damage/dysfunction → loss of electron transport chain → ↓ ATP (the energetic failure now total); rupture of lysosomes → autolysis (the cell digests itself); amorphous densities/inclusions appear in mitochondria.",
            variant: "process",
          },
          {
            id: "nucleus",
            label: "THE NUCLEAR LADDER — pyknosis → karyorrhexis → karyolysis",
            sublabel: "Pyknosis (nuclear condensation) → karyorrhexis (nuclear fragmentation caused by endonuclease-mediated cleavage) → karyolysis (nuclear dissolution) — the ordered death grammar of the nucleus.",
            variant: "process",
          },
          {
            id: "ferroptosis",
            label: "THE IRON-DEPENDENT DETOUR — ferroptosis",
            sublabel: "Lipid peroxidation → accumulation of lethal lipid species → iron-dependent cell death; mitochondria SHRINK with loss of cristae and outer membrane rupture (the swelling mainstream inverted); MASLD/MASH, ischemia-reperfusion injury, neurodegeneration; preventable with iron chelators (deferiprone, deferoxamine) and lipophilic antioxidants (ferrostatin, liproxstatin).",
            variant: "process",
          },
          {
            id: "output",
            label: "Cell death (necrosis) — the fragmented cell at the timeline's end",
            sublabel: "Output — the black arrow: membrane integrity lost, autolysis running, the nucleus dissolved; the cell exists only as debris.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "membrane", label: "stress persists" },
          { from: "membrane", to: "organelles", label: "Ca2+ activates enzymes" },
          { from: "organelles", to: "nucleus", label: "autolysis reaches the nucleus" },
          { from: "nucleus", to: "output", label: "karyolysis" },
          { from: "trigger", to: "ferroptosis", label: "the iron-lipid route" },
          { from: "ferroptosis", to: "output", label: "lethal lipid species" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "injury-timeline-map",
      title: "The cell injury timeline — from pump failure through the point of no return to the fragmented cell (an original KYP redraw)",
      caption:
        "An original KYP redraw of the source's injury timeline figure (book 203 — vector line art printing entirely in the text layer, 0 rasters; VLM census confirmed the topology): the NORMAL CELL at left; the GREEN double-headed arrow (reversible) over the injured cell carrying the four printed labels — Cellular swelling, Ribosomal detachment, Membrane blebbing, Nuclear chromatin clumping; the RED arrow (irreversible) over the committed cell carrying — Rupture of lysosomes and autolysis, Plasma membrane damage, Nuclear degradation, increased Mitochondrial permeability; the BLACK arrow to the fragmented-cell drawing of CELL DEATH (NECROSIS); and the legend — Reversible (green), Irreversible (red), Cell death (necrosis) (black). The redraw renders each state as original KYP vector cell glyphs (a full round cell → a swollen irregular cell → a breaking-apart cell → fragmented debris), never reproducing the source artwork, with the reversible and irreversible bullet cascades in the side panels and the ferroptosis detour panel.",
      notice:
        "The source figure prints as vector line art in the text layer (pdfimages: 0 rasters — the M33/M34 convention) — REDRAWN here as clean vector panels; the figure's labels and legend are carried verbatim in the note's tables. 'Ferroptosis' prints in the text stream among the figure labels (raw 36) but VLM-verified as the bolded heading of the paragraph below the figure — a stream-order quirk, documented. No margin mnemonics exist on this page (VLM census confirmed); nothing from the source's distinctive expression is carried.",
    },
    {
      kind: "table",
      title: "Book 203 — the reversible and irreversible bullet lists (carried verbatim)",
      intro:
        "The page's two definition lists, as printed — the reversible quartet-plus (six bullets) and the irreversible cascade (five bullets).",
      columns: ["STAGE · EVENT", "PRINTED CONTENT — verbatim (book 203)"],
      rows: [
        ["Reversible cell injury — the energetic opening", "↓ ATP → ↓ activity of Ca2+ and Na+/K+-ATPase pumps → cellular swelling (cytosol, mitochondria, endoplasmic reticulum/Golgi), which is the earliest morphologic manifestation."],
        ["— the synthetic shutdown", "Ribosomal/polysomal detachment → ↓ protein synthesis."],
        ["— the membrane and nuclear changes", "Plasma membrane changes (eg, blebbing). Nuclear changes (eg, chromatin clumping)."],
        ["— the functional and lipid markers", "Rapid loss of function (eg, myocardial cells are noncontractile after 1-2 minutes of ischemia). Myelin figures (aggregation of peroxidized lipids)."],
        ["Irreversible cell injury — the hinge event", "Breakdown of plasma membrane → cytosolic enzymes (eg, troponin) leak outside of cell, influx of Ca2+ → activation of degradative enzymes."],
        ["— the energetic and digestive collapse", "Mitochondrial damage/dysfunction → loss of electron transport chain → ↓ ATP. Rupture of lysosomes → autolysis."],
        ["— the nuclear ladder", "Nuclear degradation: pyknosis (nuclear condensation) → karyorrhexis (nuclear fragmentation caused by endonuclease-mediated cleavage) → karyolysis (nuclear dissolution)."],
        ["— the mitochondrial densities", "Amorphous densities/inclusions in mitochondria."],
        ["Ferroptosis — the iron-dependent detour", "Lipid peroxidation → accumulation of lethal lipid species → iron-dependent cell death. Results in shrinkage of mitochondria with loss of cristae and mitochondrial outer membrane rupture. Involved in the pathogenesis of several disease states (eg, MASLD/MASH, ischemia-reperfusion injury, neurodegeneration), with potential therapeutic applications (eg, cancer therapy). May be preventable through the use of iron chelators (eg, deferiprone, deferoxamine) and small lipophilic antioxidants (eg, ferrostatin, liproxstatin)."],
      ],
      caption:
        "The two cascades: six reversible bullets (swelling first — the earliest morphologic manifestation) and five irreversible bullets (membrane breakdown first — the troponin-leaking hinge), with ferroptosis as the iron-lipid detour whose mitochondria shrink instead of swell.",
    },
    {
      kind: "table",
      title: "Book 203 — the timeline figure's stage labels and legend (carried verbatim, reading order VLM-verified)",
      intro:
        "The figure's labels print in the text layer interleaved around the footer (raw 30-61); the reading order below is verified against the rendered page by VLM census.",
      columns: ["TIMELINE ELEMENT", "PRINTED LABELS — verbatim (book 203)"],
      rows: [
        ["The origin", "Normal cell."],
        ["The reversible stage (green, double-headed)", "Cellular swelling · Membrane blebbing · Nuclear chromatin clumping · Ribosomal detachment."],
        ["The irreversible stage (red)", "Rupture of lysosomes and autolysis · Plasma membrane damage · Nuclear degradation · Mitochondrial permeability."],
        ["The endpoint (black)", "Cell death (necrosis) — the fragmented cell."],
        ["The legend", "Reversible · Irreversible · Cell death (necrosis) — the green/red/black arrow key."],
        ["The stream-order quirk", "'Ferroptosis' prints among the figure labels in the text stream (raw 36) but sits below the figure as the paragraph heading — VLM-verified, documented."],
      ],
      caption:
        "The figure's own grammar: green marks what can retreat, red marks the committed cell, black marks the debris — and every stage label the exam can quote prints verbatim here.",
    },
    {
      kind: "callout",
      variant: "exam",
      title: "The three routing rules this page teaches",
      body:
        "Rule 1 — THE OPENING MOVE IS ALWAYS ENERGETIC AND ALWAYS SWELLS: ↓ ATP → ↓ Na+/K+-ATPase activity → cellular swelling is the EARLIEST MORPHOLOGIC MANIFESTATION of injury — any question asking 'first morphologic finding' is answered by the swollen cell (cytosol, mitochondria, ER/Golgi), and function is lost even faster (myocardial cells noncontractile after 1-2 minutes of ischemia — symptoms before structure). Rule 2 — THE MEMBRANE IS THE BORDER: reversible injury changes the plasma membrane (blebbing); IRREVERSIBLE injury BREAKS it — cytosolic enzymes (troponin) leak out and Ca2+ floods in to activate degradative enzymes. The troponin the cardiology team measures IS the membrane-breakdown event; lysosomal rupture (autolysis), electron-transport-chain loss, amorphous mitochondrial densities, and the nuclear ladder (pyknosis → karyorrhexis → karyolysis) all follow across the border. Rule 3 — FERROPTOSIS IS THE IRON-LIPID DETOUR WITH A PREVENTION: mitochondria SHRINK (loss of cristae, outer membrane rupture) instead of swelling, the death is IRON-dependent (lipid peroxidation → lethal lipid species), the associations are MASLD/MASH, ischemia-reperfusion injury, and neurodegeneration (with cancer-therapy applications), and — alone on this page — it is preventable by name: iron chelators (deferiprone, deferoxamine) and small lipophilic antioxidants (ferrostatin, liproxstatin).",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 59-year-old man presents with crushing chest pain; serial troponin I is markedly elevated 6 hours after symptom onset.",
        discriminator: "Cytosolic enzyme leak = plasma membrane breakdown = the irreversible threshold",
        concept: "The point of no return made measurable",
        answer:
          "Breakdown of the plasma membrane lets cytosolic enzymes (eg, troponin) leak outside of the cell — the irreversible hinge event, with Ca2+ influx activating degradative enzymes. The elevated troponin is the laboratory signature of myocytes that have crossed the border the timeline draws in red: reversible swelling behind them, autolysis and the nuclear ladder ahead.",
      },
      {
        stem: "A 62-year-old woman with an acute coronary occlusion has chest pain at 90 seconds of ischemia; the question asks how fast function is lost relative to morphology.",
        discriminator: "Myocardial cells are noncontractile after 1-2 minutes of ischemia — function is lost long before morphologic death",
        concept: "Rapid functional loss in the reversible window",
        answer:
          "Rapid loss of function is a REVERSIBLE-bullet event: myocardial cells are noncontractile after 1-2 minutes of ischemia, while the earliest morphologic manifestation (cellular swelling from ATP-pump failure) is just beginning. Symptoms and contractile failure precede any structural commitment to necrosis — the entire basis of reperfusable, salvageable myocardium.",
      },
      {
        stem: "A mouse model of ischemia-reperfusion injury is treated with deferoxamine; the question asks which iron-dependent death pathway is being targeted and its mitochondrial morphology.",
        discriminator: "Ferroptosis — iron-dependent lipid peroxidation with mitochondrial SHRINKAGE (loss of cristae, outer membrane rupture)",
        concept: "The ferroptosis detour and its preventability",
        answer:
          "Ferroptosis: lipid peroxidation → accumulation of lethal lipid species → iron-dependent cell death, with shrinkage of mitochondria (loss of cristae, mitochondrial outer membrane rupture) — the swelling mainstream inverted. Involved in ischemia-reperfusion injury (also MASLD/MASH and neurodegeneration, with cancer-therapy applications), and preventable with iron chelators (deferiprone, deferoxamine) and small lipophilic antioxidants (ferrostatin, liproxstatin).",
      },
    ],
    traps: [
      {
        a: "Membrane blebbing",
        b: "Plasma membrane breakdown",
        whyConfused: "Both are named as membrane changes in the two lists",
        keyDifference: "Blebbing is a REVERSIBLE plasma membrane change (the cell still holds its contents); BREAKDOWN of the plasma membrane is the IRREVERSIBLE hinge — cytosolic enzymes (troponin) leak out and Ca2+ influx activates degradative enzymes",
        clue: "Enzyme leak (troponin) or calcium-activated autolysis in the stem = breakdown (irreversible); surface bubbling alone = blebbing (reversible)",
      },
      {
        a: "Pyknosis",
        b: "Karyorrhexis vs karyolysis",
        whyConfused: "All three are the nuclear-degradation ladder and can be shuffled in answer options",
        keyDifference: "Pyknosis = nuclear CONDENSATION; karyorrhexis = nuclear FRAGMENTATION caused by endonuclease-mediated cleavage; karyolysis = nuclear DISSOLUTION — the printed order is condensation, fragmentation, dissolution",
        clue: "The ladder runs dense → broken → gone; any option that reverses two rungs (eg, fragmentation before condensation) is the trap",
      },
      {
        a: "Ferroptosis morphology",
        b: "Necrosis morphology",
        whyConfused: "Both are cell-death endpoints on the same page",
        keyDifference: "The necrosis timeline runs through SWELLING (ATP-pump failure, the earliest morphologic manifestation) to membrane breakdown and fragmentation; ferroptosis SHRINKS the mitochondria (loss of cristae, outer membrane rupture) and is iron- and lipid-peroxidation-dependent — preventable with chelators and lipophilic antioxidants",
        clue: "Iron, lipid peroxidation, or mitochondrial shrinkage in the stem = ferroptosis; troponin leak and the nuclear ladder = classic necrosis",
      },
    ],
    pivots: [
      {
        lookAlike: "Timeline-position questions — 'which finding places the cell beyond rescue?'",
        differentiator: "The border is the plasma membrane: everything before its breakdown (swelling, ribosomal detachment, blebbing, chromatin clumping, myelin figures, early functional loss) can retreat; everything after (enzyme leak, Ca2+ influx, lysosomal autolysis, ETC loss, the nuclear ladder, amorphous densities) cannot",
        correctPath: "Find the named finding in the stem, then place it on the green (reversible) or red (irreversible) segment of the timeline — the answer follows from the segment, not from severity language in the vignette",
      },
      {
        lookAlike: "The ferroptosis fork — a death with mitochondria that shrink",
        differentiator: "Every other death on this page swells; ferroptosis inverts the rule — mitochondrial shrinkage with loss of cristae and outer membrane rupture, driven by iron-dependent lipid peroxidation, and uniquely preventable (deferiprone/deferoxamine; ferrostatin/liproxstatin)",
        correctPath: "Mitochondria smaller + iron + lipid peroxidation = ferroptosis (think MASLD/MASH, ischemia-reperfusion, neurodegeneration); mitochondria swollen with amorphous densities = the necrosis route",
      },
    ],
    miniCase: {
      vignette:
        "A 58-year-old man develops crushing substernal chest pain at rest; ECG shows ST-segment elevation in the inferior leads, and primary PCI opens the occluded right coronary artery 3 hours after symptom onset. He reported the pain began suddenly and was continuous. At 90 seconds into a balloon test during the procedure, the operator notes the distal myocardium had already stopped contracting. Six hours later, troponin I is 40 times the upper limit of normal; CK-MB has also risen. A biopsy of the infarct core (obtained during another procedure) shows cells with fragmented nuclei and loss of nuclear chromatin entirely in some myocytes, and lysosomal rupture with cellular self-digestion.",
      question: "Which subcellular event best explains the serum enzyme findings, what does it mark on the injury timeline, and which nuclear finding corresponds to 'loss of nuclear chromatin entirely'?",
      options: [
        {
          label: "Plasma membrane breakdown — the irreversible threshold; the entirely-lost chromatin is KARYOLYSIS (nuclear dissolution)",
          text: "The enzyme leak is the membrane breaking; the dissolved nuclei are the ladder's last rung.",
          correct: true,
          why: "Correct on all three layers. The troponin/CK-MB rise is the printed irreversible hinge: breakdown of plasma membrane → cytosolic enzymes (eg, troponin) leak outside of the cell, with Ca2+ influx activating degradative enzymes — the border between the green (reversible) and red (irreversible) segments. The biopsy's fragmented nuclei are KARYORRHEXIS and the entirely-lost chromatin is KARYOLYSIS (nuclear dissolution), the ladder's endpoint after pyknosis (condensation). The lysosomal rupture with self-digestion is autolysis, another irreversible bullet. The 90-second contractile arrest is the page's rapid-loss-of-function bullet — myocardial cells are noncontractile after 1-2 minutes of ischemia, a REVERSIBLE event that began long before the cells committed to death.",
        },
        {
          label: "Na+/K+-ATPase pump failure — the irreversible threshold; the lost chromatin is pyknosis",
          text: "The pumps stalling lets troponin escape and condenses the nuclei.",
          why: "Wrong timeline position on both counts: pump failure opens the REVERSIBLE cascade (cellular swelling — the earliest morphologic manifestation, not an enzyme leak), and pyknosis is nuclear CONDENSATION, the ladder's first rung — the opposite of chromatin entirely lost (karyolysis). The enzyme leak requires membrane breakdown, not pump failure.",
        },
        {
          label: "Rupture of lysosomes — the first irreversible event; the lost chromatin is karyorrhexis",
          text: "The lysosomes releasing their enzymes both leaks troponin and fragments the nuclei.",
          why: "Right chapter, wrong hinge and wrong rung: lysosomal rupture → autolysis is an irreversible event but it digests from WITHIN — it is not how cytosolic enzymes cross an intact plasma membrane (that requires membrane breakdown, the true hinge). And karyorrhexis is fragmentation; 'chromatin entirely lost' is karyolysis, the rung after it.",
        },
        {
          label: "Mitochondrial permeability increase with electron transport chain loss — the point of no return; the lost chromatin is ferroptotic mitochondrial shrinkage",
          text: "The ETC collapse releases the enzymes and shrinks the chromatin away.",
          why: "Two category errors: mitochondrial damage → ETC loss → ↓ ATP is an irreversible BULLET but not the enzyme-leak event (troponin is cytosolic and exits through the broken plasma membrane), and nuclear chromatin is not a mitochondrion — mitochondrial shrinkage with cristae loss is ferroptosis's morphology, not the nuclear ladder's endpoint.",
        },
        {
          label: "Ferroptosis — iron-dependent cell death from ischemia-reperfusion; the lost chromatin is its lipid peroxidation",
          text: "The reperfusion by PCI drove iron-dependent death with lethal lipid species.",
          why: "True association, wrong mechanism for this stem: ischemia-reperfusion injury is a listed ferroptosis disease state, but ferroptosis's signature is mitochondrial SHRINKAGE with cristae loss — not lysosomal rupture, nuclear laddering, or troponin leak, and nuclear chromatin loss is karyolysis, not lipid peroxidation. The classic necrosis cascade explains every finding here; ferroptosis is the detour, not the main road.",
        },
      ],
      reasoning:
        "The stem walks all three segments of the timeline. (1) The REVERSIBLE opening: the distal myocardium stopped contracting at 90 seconds — the printed rapid-loss-of-function bullet (noncontractile after 1-2 minutes of ischemia) — and this began while the cells were still salvageable. (2) The IRREVERSIBLE hinge: the troponin I and CK-MB elevations are the laboratory readout of plasma membrane breakdown — cytosolic enzymes leaking out — the event that defines the point of no return, with Ca2+ influx activating degradative enzymes; the biopsy's lysosomal rupture with self-digestion (autolysis) confirms the red segment. (3) The NUCLEAR LADDER: fragmented nuclei = karyorrhexis (endonuclease-mediated cleavage), and myocytes with chromatin entirely lost = karyolysis (nuclear dissolution) — the rung after pyknosis (condensation). The distractors each steal one correct vocabulary item and misfile it: pump failure placed at the irreversible border (it is the reversible opening), lysosomal rupture credited with the leak (the membrane owns that), mitochondrial permeability confused with both the leak and the ladder, and ferroptosis invoked for reperfusion (a true association) but contradicted by the swelling-and-laddering morphology actually described.",
    },
  },
  mnemonics: [
    {
      code: "PUMPS FAIL FIRST",
      meaning: "The opening move of every injury: ↓ ATP → ↓ activity of Ca2+ and Na+/K+-ATPase pumps → cellular swelling (cytosol, mitochondria, ER/Golgi) — the earliest morphologic manifestation; function goes even faster (myocardium noncontractile after 1-2 minutes of ischemia).",
      memorizes: "The reversible cascade's first domino and its timing",
      whenToUse: "Any 'earliest morphologic finding' or 'first event after ischemia' question",
      clinical: "The swollen, poorly contracting but still salvageable cell — the target of every reperfusion therapy.",
    },
    {
      code: "TROPONIN MEANS THE MEMBRANE BROKE",
      meaning: "Cytosolic enzymes (eg, troponin) leak outside of cell only when the plasma membrane breaks down — the irreversible hinge, with Ca2+ influx activating degradative enzymes; blebbing (reversible) never leaks enzymes.",
      memorizes: "The border between reversible and irreversible injury",
      whenToUse: "Any enzyme-leak, point-of-no-return, or reversible-vs-irreversible discrimination",
      clinical: "The elevated troponin of an MI is the serum signature of membrane breakdown — myocytes beyond rescue.",
    },
    {
      code: "CONDENSE, SHATTER, DISSOLVE",
      meaning: "The nuclear degradation ladder in order: pyknosis (nuclear condensation) → karyorrhexis (nuclear fragmentation caused by endonuclease-mediated cleavage) → karyolysis (nuclear dissolution).",
      memorizes: "The three nuclear rungs and their sequence",
      whenToUse: "Any nuclear-morphology or ladder-ordering question",
      clinical: "The biopsy grammar of dead tissue: dense nuclei first, broken nuclei second, chromatin gone last.",
    },
    {
      code: "IRON, LIPIDS, SHRINKING MITOCHONDRIA",
      meaning: "Ferroptosis in three words: iron-dependent (preventable with chelators — deferiprone, deferoxamine), lipid peroxidation → lethal lipid species (blunted by lipophilic antioxidants — ferrostatin, liproxstatin), and mitochondria that SHRINK with loss of cristae and outer membrane rupture — the swelling mainstream inverted.",
      memorizes: "Ferroptosis's mechanism, morphology, and preventions",
      whenToUse: "Any ferroptosis, MASLD/MASH, ischemia-reperfusion, or iron-chelation question",
      clinical: "The death pathway you can pharmacologically interrupt — cancer-therapy applications and the metabolic-liver and neurodegeneration associations.",
    },
  ],
  rapidReview: {
    s30: [
      "Reversible: ↓ ATP → ↓ Ca2+ and Na+/K+-ATPase pump activity → cellular swelling (cytosol, mitochondria, ER/Golgi) — the earliest morphologic manifestation; ribosomal/polysomal detachment → ↓ protein synthesis; plasma membrane changes (blebbing); nuclear changes (chromatin clumping); rapid loss of function (myocardial cells noncontractile after 1-2 minutes of ischemia); myelin figures (aggregation of peroxidized lipids)",
      "Irreversible: breakdown of plasma membrane → cytosolic enzymes (eg, troponin) leak outside of cell + Ca2+ influx → degradative enzymes; mitochondrial damage → loss of electron transport chain → ↓ ATP; rupture of lysosomes → autolysis; amorphous densities/inclusions in mitochondria",
      "The nuclear ladder: pyknosis (nuclear condensation) → karyorrhexis (nuclear fragmentation caused by endonuclease-mediated cleavage) → karyolysis (nuclear dissolution)",
      "Ferroptosis: lipid peroxidation → accumulation of lethal lipid species → iron-dependent cell death; shrinkage of mitochondria with loss of cristae and outer membrane rupture; MASLD/MASH, ischemia-reperfusion injury, neurodegeneration; cancer-therapy applications",
      "Ferroptosis prevention: iron chelators (deferiprone, deferoxamine) + small lipophilic antioxidants (ferrostatin, liproxstatin)",
    ],
    m3: [
      "The timeline: normal cell → green (reversible: swelling, detachment, blebbing, clumping) → red (irreversible: autolysis, membrane damage, nuclear degradation, mitochondrial permeability) → black (cell death / necrosis)",
      "The border is the membrane: blebbing is reversible; breakdown (troponin leak, Ca2+ influx) is the point of no return",
      "Timing: function lost first (1-2 minutes of ischemia), swelling the earliest MORPHOLOGIC change, enzyme leak the irreversible marker",
      "Ferroptosis inverts the swelling rule — mitochondria shrink (cristae loss, outer membrane rupture); iron + lipid peroxidation + preventable",
    ],
    m10: [
      "Census: p225 (book 203) is PURE TEXT (pdfimages: ZERO rasters) — the timeline prints as vector line art with all labels in the text layer (the M33/M34 convention)",
      "Figure topology VLM-verified (full-page + focused figure crop, two census rounds): normal cell → green DOUBLE-HEADED arrow → reversible cell → red arrow → irreversible cell → black arrow → fragmented cell = cell death (necrosis); the legend prints at the figure's left (green Reversible, red Irreversible, black Cell death)",
      "Stage labels: reversible side — Cellular swelling, Ribosomal detachment, Membrane blebbing, Nuclear chromatin clumping; irreversible side — Rupture of lysosomes and autolysis, Plasma membrane damage, Nuclear degradation, Mitochondrial permeability",
      "Stream-order quirk documented: 'Ferroptosis' prints among the figure labels in the text stream (raw 36) but VLM-verified as the bolded paragraph heading BELOW the figure",
      "No photographs, no margin mnemonics on the page (VLM census confirmed both rounds)",
    ],
  },
  recall: [
    {
      q: "Carry both bullet lists verbatim — the six reversible events and the five irreversible events.",
      a: "REVERSIBLE: ↓ ATP → ↓ activity of Ca2+ and Na+/K+-ATPase pumps → cellular swelling (cytosol, mitochondria, endoplasmic reticulum/Golgi), which is the earliest morphologic manifestation; Ribosomal/polysomal detachment → ↓ protein synthesis; Plasma membrane changes (eg, blebbing); Nuclear changes (eg, chromatin clumping); Rapid loss of function (eg, myocardial cells are noncontractile after 1-2 minutes of ischemia); Myelin figures (aggregation of peroxidized lipids). IRREVERSIBLE: Breakdown of plasma membrane → cytosolic enzymes (eg, troponin) leak outside of cell, influx of Ca2+ → activation of degradative enzymes; Mitochondrial damage/dysfunction → loss of electron transport chain → ↓ ATP; Rupture of lysosomes → autolysis; Nuclear degradation: pyknosis (nuclear condensation) → karyorrhexis (nuclear fragmentation caused by endonuclease-mediated cleavage) → karyolysis (nuclear dissolution); Amorphous densities/inclusions in mitochondria.",
    },
    {
      q: "Walk the injury timeline figure — origin to endpoint, with the legend.",
      a: "The NORMAL CELL at left; a GREEN double-headed arrow (reversible) to the injured cell labeled Cellular swelling, Ribosomal detachment, Membrane blebbing, Nuclear chromatin clumping; a RED arrow (irreversible) to the committed cell labeled Rupture of lysosomes and autolysis, Plasma membrane damage, Nuclear degradation, Mitochondrial permeability; a BLACK arrow to the fragmented-cell drawing — CELL DEATH (NECROSIS). The legend prints green = Reversible, red = Irreversible, black = Cell death (necrosis).",
    },
    {
      q: "State the nuclear degradation ladder with each rung's mechanism, in order.",
      a: "Pyknosis — nuclear condensation; karyorrhexis — nuclear fragmentation caused by endonuclease-mediated cleavage; karyolysis — nuclear dissolution. The order is fixed: condensation, fragmentation, dissolution — dense, broken, gone.",
    },
    {
      q: "Carry the ferroptosis paragraph verbatim — mechanism, morphology, diseases, applications, and preventions.",
      a: "Lipid peroxidation → accumulation of lethal lipid species → iron-dependent cell death. Results in shrinkage of mitochondria with loss of cristae and mitochondrial outer membrane rupture. Involved in the pathogenesis of several disease states (eg, MASLD/MASH, ischemia-reperfusion injury, neurodegeneration), with potential therapeutic applications (eg, cancer therapy). May be preventable through the use of iron chelators (eg, deferiprone, deferoxamine) and small lipophilic antioxidants (eg, ferrostatin, liproxstatin).",
    },
    {
      q: "Why does an elevated serum troponin specifically indicate irreversible injury rather than reversible injury?",
      a: "Troponin is a cytosolic enzyme; it can only reach the serum if the plasma membrane has broken down. Reversible membrane changes (blebbing) leave the membrane intact — contents stay inside. The printed irreversible bullet pairs the breakdown with Ca2+ influx → activation of degradative enzymes, so the leak marks the exact border the timeline draws in red: behind it, swelling and its quartet can retreat; ahead, autolysis, the nuclear ladder, and necrosis follow.",
    },
  ],
  related: [
    {
      title: "Oxidative Phosphorylation & the ETC",
      topicId: "oxidative-phosphorylation",
      note: "Both cascades run through this machinery: ATP depletion opens the reversible timeline (the pumps stall), and loss of the electron transport chain is the irreversible bullet that makes the depletion total — the figure's 'mitochondrial permeability' is this chapter's biochemistry.",
    },
    {
      title: "Organelles & Cell Trafficking",
      topicId: "organelles-cell-trafficking",
      note: "The swelling list names the compartments (cytosol, mitochondria, ER/Golgi), the reversible quartet detaches the ribosomes from that trafficking world, and the irreversible set ruptures the lysosomes — this page is the organelle map under stress.",
    },
    {
      title: "Atherosclerosis",
      topicId: "atherosclerosis",
      note: "The plaque-occluded artery is the timeline's most common driver: ischemia starves the ATP, the myocytes swell and stop contracting, and the troponin leak the cardiology ward measures is the membrane breakdown this page defines.",
    },
    {
      title: "Diabetes Mellitus",
      topicId: "diabetes-mellitus",
      note: "The metabolic driver behind MASLD/MASH — the steatotic liver where ferroptosis participates — and the vascular disease whose ischemic events run the necrosis timeline; one note, both ends of the injury map.",
    },
  ],
  crossLinks: [
    {
      subject: "Biochemistry (ATP and ion pumps)",
      connection:
        "The reversible cascade is the Na+/K+-ATPase lecture made pathologic: the pump is the cell's single largest ATP consumer and the first casualty of depletion — osmotic balance fails and the cell swells, the earliest morphologic manifestation.",
    },
    {
      subject: "Cardiology (troponin and the MI)",
      connection:
        "The enzyme the cardiac panel measures is the printed irreversible bullet in action: plasma membrane breakdown leaking cytosolic troponin — the laboratory border between stunned (reversible) myocardium and infarcted (dead) myocardium.",
    },
    {
      subject: "Pharmacology (iron chelation and antioxidant therapy)",
      connection:
        "Ferroptosis is the page's pharmacologically preventable death: deferiprone and deferoxamine strip the iron, ferrostatin and liproxstatin quench the lipid peroxidation — and cancer therapy exploits the pathway in reverse.",
    },
    {
      subject: "Hepatology (MASLD/MASH)",
      connection:
        "The metabolic dysfunction-associated steatotic liver disease listed among ferroptosis's disease states — the iron-lipid death pathway joining the fatty-liver-to-inflammation march that ends in cirrhosis.",
    },
  ],
};
