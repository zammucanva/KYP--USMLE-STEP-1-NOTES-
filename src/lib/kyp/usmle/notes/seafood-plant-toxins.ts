import type { KypUsMLENote } from "../types";

// Pharmacology — PH-batch 21. Source: FULL pdf page 268 / book 246
// (Pharmacology — Toxicities and Adverse Effects: “Ingested seafood
// toxins” + “Plant toxins” — the WHOLE page, two tables). Census
// (pdfimages): ZERO raster images — the page is the section furniture +
// one intro sentence + TWO five-column tables (TOXIN / SOURCE / ACTION /
// SYMPTOMS / TREATMENT — the header row REPEATS over the plant table) +
// the indd footer slug. The VLM census (glm-4.6v at 120dpi, staged at
// staging-ph21/vlm-census.txt — VLM available this session, one pass)
// confirms the printed row order of BOTH tables. SEAFOOD table (3 rows,
// printed order): Histamine (scombroid poisoning) → Tetrodotoxin →
// Ciguatoxin — NOTE: the batch content map expected a shellfish/saxitoxin
// row; NO shellfish row prints (VLM-confirmed); whatever rows print
// governs. PLANT table (5 rows, printed order): Grayanotoxin → Aconitine
// alkaloids → Cardiac glycosides → Coniine (hemlock) → Atropine/
// scopolamine — likewise NO ricin / cyanogenic / water-hemlock rows print
// (VLM-confirmed). First Aid's own mnemonic furniture prints in RED: the
// intro sentence's initial letters h/t/c and the red first letters H/T/C
// on the seafood toxin names — carried ATTRIBUTED, not counted among the
// four KYP originals. “Frequently misdiagnosed as fish allergy” prints
// INSIDE the Histamine row's ACTION cell (VLM-adjudicated), not as a
// margin note. PRINTED-TEXT QUIRKS carried verbatim + documented: the
// cache text layer INTERLEAVES the plant table's first row (Grayanotoxin's
// SYMPTOMS + TREATMENT cells extract BEFORE its TOXIN name) and line-
// interleaves the Aconitine row's ACTION/SYMPTOMS cells and the Coniine
// row's SOURCE/ACTION cells, and prints the Atropine/scopolamine row's
// ACTION cell AFTER the footer slug — all adjudicated to their printed
// cells via the VLM render; a lone “+” on cache line 92 is the displaced
// superscript + of the Grayanotoxin “Na+ channels” (the print carries
// “Opens voltage-gated Na+ channels”, VLM-confirmed — the + is restored
// here); superscripts merge in the cache as printed unicode (Na+/K+-
// ATPase, ↑ Na+/Ca²+ exchanger, correct K+/Mg²+); the scombroid treatment
// cell prints “Albuterol +/– epinephrine” (en dash); “mad honey” and
// “jimsonweed” print with curly quotes; the section header prints the
// extraction artifact “SEC TION II”. The KYP diagrams (seafood-toxin-
// target-map, plant-toxin-target-map), the exam layer, the drug cards,
// and the memory layer are original; ONE crossLink (the MAOI–scombroid
// note) is a clearly-labeled KYP extension that does NOT print on book 246.

export const seafoodPlantToxins: KypUsMLENote = {
  id: "seafood-plant-toxins",
  title: "Ingested Seafood & Plant Toxins",
  subtitle:
    "One page, eight toxins, four molecular targets. The seafood table runs three rows — scombroid (bacterial histidine decarboxylase pours histamine into spoiled dark-meat fish and mimics anaphylaxis), tetrodotoxin (pufferfish; binds fast voltage-gated Na+ channels and prevents depolarization), and ciguatoxin (reef fish; opens Na+ channels and causes depolarization). The plant table runs five rows through three more targets: two Na+ channel openers (grayanotoxin “mad honey” → prolonged depolarization → ↑ vagal tone; aconitine site 2 → sustained Na+ influx → ventricular arrhythmias), the Na+/K+-ATPase (cardiac glycosides), and the two acetylcholine receptors (coniine's nicotinic depolarizing blockade vs atropine/scopolamine's muscarinic antagonism). The printed intro sentence is the whole page in one line — “histamine release, total block of Na+ channels, or opening of Na+ channels to cause depolarization” — and the treatment column teaches the Step 1 habit: name the target, and the antidote follows.",
  subject: "Pharmacology",
  system:
    "Section II · High-Yield General Principles — Pharmacology: Toxicities and Adverse Effects",
  pilotCategory: "Pharmacology toxicology",
  difficulty: 2,
  readTime: 6,
  sourceRef:
    "First Aid 2026, Part 1 pp. 246–246 (Pharmacology — Toxicities and Adverse Effects: Ingested seafood toxins; Plant toxins; …)",
  tags: [
    "ingested toxins", "seafood toxins", "scombroid poisoning", "histamine",
    "tetrodotoxin", "pufferfish", "ciguatoxin", "ciguatera", "reef fish",
    "sodium channels", "plant toxins", "grayanotoxin", "mad honey",
    "aconitine", "monkshood", "cardiac glycosides", "digitalis", "coniine",
    "poison hemlock", "atropine", "scopolamine", "jimsonweed",
    "anticholinergic toxidrome", "physostigmine", "digoxin-specific Fab",
    "toxicology",
  ],
  core: {
    what:
      "Two printed tables of ingested toxins, each with the columns TOXIN / SOURCE / ACTION / SYMPTOMS / TREATMENT. The seafood table (printed order): HISTAMINE (scombroid poisoning) — spoiled dark-meat fish such as tuna, mahi-mahi, mackerel, and bonito; bacterial histidine decarboxylase converts histidine to histamine (frequently misdiagnosed as fish allergy); mimics anaphylaxis with oral burning sensation, facial flushing, erythema, urticaria, itching, progressing to bronchospasm, angioedema, hypotension; treated with antihistamines, albuterol +/– epinephrine. TETRODOTOXIN — pufferfish; binds fast voltage-gated Na+ channels in nerve tissue, preventing depolarization; nausea, diarrhea, paresthesias, weakness, dizziness, loss of reflexes; supportive. CIGUATOXIN — reef fish such as barracuda, snapper, and moray eel; opens Na+ channels, causing depolarization; nausea, vomiting, diarrhea, perioral numbness, reversal of hot and cold sensations, bradycardia, heart block, hypotension; supportive. The plant table (printed order): GRAYANOTOXIN — Rhododendron nectar (“mad honey”); opens voltage-gated Na+ channels → prolonged depolarization → ↑ vagal tone; nausea, vomiting, dizziness, bradycardia, hypotension; supportive care (IV fluids, atropine if severe bradycardia). ACONITINE ALKALOIDS — Aconitum (monkshood, wolfsbane); activates Na+ channels (site 2) → delayed inactivation → sustained Na+ influx → ventricular arrhythmias; paresthesias, hypotension, ventricular tachyarrhythmias, cardiac arrest; supportive, lidocaine or amiodarone for arrhythmia, avoid class IA/III agents. CARDIAC GLYCOSIDES — Digitalis purpurea, Nerium oleander; inhibits Na+/K+-ATPase → ↑ intracellular Na+ → ↑ Na+/Ca²+ exchanger → ↑ Ca²+ → ↑ vagal tone, ectopy; GI upset, visual disturbances (xanthopsia), AV block, arrhythmias; digoxin-specific Fab, atropine for bradycardia, correct K+/Mg²+. CONIINE (hemlock) — Conium maculatum (poison hemlock); nicotinic ACh receptor agonist/antagonist → depolarizing blockade → flaccid paralysis; ascending paralysis, respiratory failure, salivation; supportive (respiratory support), activated charcoal early. ATROPINE/SCOPOLAMINE — Atropa belladonna, Datura stramonium (“jimsonweed”); muscarinic ACh receptor antagonist; anticholinergic toxidrome: dry mouth, mydriasis, hyperthermia, delirium; physostigmine (AChE inhibitor), cooling, fluids.",
    why:
      "This is the toxicology page Step 1 actually tests as a mechanism-routing drill: every row is a toxin → molecular target → symptom chain → antidote chain, and the exam's favorite discriminators live in the Na+ channel fork. Two seafood toxins touch the SAME channel in OPPOSITE directions — tetrodotoxin binds fast voltage-gated Na+ channels in nerve tissue and prevents depolarization (total block), while ciguatoxin opens Na+ channels and causes depolarization — and their symptom columns diverge accordingly (loss of reflexes vs reversal of hot and cold sensations with bradycardia and heart block). The plant table extends the same fork: grayanotoxin and aconitine both OPEN the channel but at different sites with different downstream stories (↑ vagal tone with bradycardia/hypotension vs site-2 sustained Na+ influx with ventricular tachyarrhythmias and cardiac arrest), while the cardiac glycosides leave the channel entirely for the Na+/K+-ATPase (the digoxin mechanism, with xanthopsia and AV block, treated with digoxin-specific Fab and K+/Mg²+ correction), and the two acetylcholine-receptor toxins split the autonomic synapse — coniine's nicotinic depolarizing blockade (ascending flaccid paralysis and respiratory failure, treated with respiratory support and early activated charcoal) vs the anticholinergic toxidrome of atropine/scopolamine (dry mouth, mydriasis, hyperthermia, delirium, reversed by physostigmine). The treatment column is itself high yield: only scombroid and the anticholinergic plants have real antidotes (antihistamines with albuterol +/– epinephrine; physostigmine with cooling and fluids); everything channel-related is supportive.",
    keyIdea:
      "Route every ingested toxin through its molecular target before you touch the answer options. MOVE 1 — NAME THE TARGET from the vignette's food and symptoms: histamine (spoiled dark-meat fish + anaphylaxis mimic) · fast voltage-gated Na+ channel BLOCK (pufferfish + paresthesias/loss of reflexes) · Na+ channel OPENING (reef fish with hot/cold reversal, or “mad honey” with bradycardia, or monkshood with ventricular arrhythmias) · Na+/K+-ATPase (oleander/digitalis with xanthopsia and AV block) · nicotinic ACh receptor (hemlock with ascending flaccid paralysis) · muscarinic ACh receptor (jimsonweed with the anticholinergic toxidrome). MOVE 2 — PREDICT THE SYMPTOMS FROM THE TARGET'S PHYSIOLOGY: blocking the channel silences the nerve (weakness, lost reflexes); opening it depolarizes (paresthesias, dysautonomia, arrhythmia); inhibiting the ATPase loads the myocyte with Ca²+ (ectopy) and the vagus (bradycardia, AV block); a nicotinic depolarizing blockade paralyzes; a muscarinic blockade dries, dilates, and deludes. MOVE 3 — THE ANTIDOTE FOLLOWS THE TARGET: antihistamines ± albuterol/epinephrine for histamine; atropine for any severe vagal bradycardia (grayanotoxin, cardiac glycosides); lidocaine or amiodarone — never class IA/III — for aconitine's arrhythmias; digoxin-specific Fab plus K+/Mg²+ correction for the glycosides; respiratory support with early charcoal for coniine; physostigmine with cooling and fluids for the anticholinergic plants. The target — never the plant or fish name — is the answer key.",
  },
  mechanisms: [
    {
      id: "seafood-toxin-target-map",
      title:
        "The seafood fork: histamine release vs total Na+ channel block vs Na+ channel opening — the printed intro sentence as a routing map",
      context: "The printed intro sentence and the seafood table (book 246)",
      flow: {
        nodes: [
          {
            id: "intro",
            label: "THE PRINTED INTRO — THREE ACTIONS, THREE TARGETS",
            sublabel:
              "Input — “Toxin actions include histamine release, total block of Na+ channels, or opening of Na+ channels to cause depolarization.” First Aid prints the initial letters h/t/c in red — its own mnemonic for Histamine (scombroid), Tetrodotoxin (total block), Ciguatoxin (causes depolarization by opening).",
            variant: "input",
          },
          {
            id: "histamine-lane",
            label: "HISTAMINE RELEASE — SCOMBROID",
            sublabel:
              "Process — spoiled dark-meat fish (tuna, mahi-mahi, mackerel, bonito): bacterial histidine decarboxylase converts histidine to histamine. The reaction is chemical, not immunologic — the printed in-cell warning “Frequently misdiagnosed as fish allergy.”",
            variant: "process",
          },
          {
            id: "na-block",
            label: "TOTAL BLOCK OF Na+ CHANNELS — TETRODOTOXIN",
            sublabel:
              "Inhibit — pufferfish: binds fast voltage-gated Na+ channels in nerve tissue, PREVENTING depolarization. The silenced nerve gives nausea, diarrhea, paresthesias, weakness, dizziness, loss of reflexes. Treatment: supportive.",
            variant: "inhibit",
          },
          {
            id: "na-open",
            label: "OPENING OF Na+ CHANNELS — CIGUATOXIN",
            sublabel:
              "Process — reef fish (barracuda, snapper, moray eel): opens Na+ channels, CAUSING depolarization. The over-excited membrane gives nausea, vomiting, diarrhea, perioral numbness, reversal of hot and cold sensations, bradycardia, heart block, hypotension. Treatment: supportive.",
            variant: "process",
          },
          {
            id: "target",
            label: "THE MOLECULAR TARGET DECIDES THE PICTURE",
            sublabel:
              "Target — histamine acts on H1 receptors (anaphylaxis mimic: oral burning, flushing, urticaria, bronchospasm); a blocked Na+ channel silences conduction (weakness, lost reflexes); an opened Na+ channel depolarizes (paresthesias, dysautonomia — the hot/cold reversal — and cardiac conduction trouble).",
            variant: "target",
          },
          {
            id: "treatment",
            label: "THE TREATMENT FORK — ANTIDOTE OR SUPPORTIVE",
            sublabel:
              "Output — only scombroid has a true antidote lane: antihistamines; albuterol +/– epinephrine (for the bronchospasm/hypotension). Both Na+ channel toxins are treated supportively — there is no channel antidote printed, which is itself the tested point.",
            variant: "output",
          },
        ],
        edges: [
          { from: "intro", to: "histamine-lane", label: "histamine release (h)" },
          { from: "intro", to: "na-block", label: "total block of Na+ channels (t)" },
          { from: "intro", to: "na-open", label: "opening of Na+ channels (c)" },
          { from: "histamine-lane", to: "target", label: "histamine → H1-mediated mimic of anaphylaxis" },
          { from: "na-block", to: "target", label: "no depolarization → silenced nerve", type: "inhibit" },
          { from: "na-open", to: "target", label: "depolarization → over-excitation" },
          { from: "target", to: "treatment", label: "name the target → the antidote follows" },
        ],
      },
    },
    {
      id: "plant-toxin-target-map",
      title:
        "The plant fork: two Na+ channel openers, one pump, and the two acetylcholine receptors",
      context: "The plant toxins table (book 246)",
      flow: {
        nodes: [
          {
            id: "plant-intro",
            label: "FIVE PLANT TOXINS, FOUR TARGETS",
            sublabel:
              "Input — the plant table's five rows in printed order: Grayanotoxin, Aconitine alkaloids, Cardiac glycosides, Coniine (hemlock), Atropine/scopolamine. Two rows stay on the Na+ channel, one row moves to the Na+/K+-ATPase, and two rows split the acetylcholine synapse between its nicotinic and muscarinic receptors.",
            variant: "input",
          },
          {
            id: "grayanotoxin",
            label: "GRAYANOTOXIN — OPENS Na+ CHANNELS → ↑ VAGAL TONE",
            sublabel:
              "Process — Rhododendron nectar (“mad honey”): opens voltage-gated Na+ channels → prolonged depolarization → ↑ vagal tone. Symptoms: nausea, vomiting, dizziness, bradycardia, hypotension. Treatment: supportive care (IV fluids, atropine if severe bradycardia).",
            variant: "process",
          },
          {
            id: "aconitine",
            label: "ACONITINE — ACTIVATES Na+ CHANNELS (SITE 2)",
            sublabel:
              "Process — Aconitum (monkshood, wolfsbane): activates Na+ channels (site 2) → delayed inactivation → sustained Na+ influx → ventricular arrhythmias. Symptoms: paresthesias, hypotension, ventricular tachyarrhythmias, cardiac arrest. Treatment: supportive, lidocaine or amiodarone for arrhythmia; avoid class IA/III agents.",
            variant: "process",
          },
          {
            id: "glycosides",
            label: "CARDIAC GLYCOSIDES — INHIBITS Na+/K+-ATPase",
            sublabel:
              "Inhibit — Digitalis purpurea, Nerium oleander: inhibits Na+/K+-ATPase → ↑ intracellular Na+ → ↑ Na+/Ca²+ exchanger → ↑ Ca²+ → ↑ vagal tone, ectopy. Symptoms: GI upset, visual disturbances (xanthopsia), AV block, arrhythmias. Treatment: digoxin-specific Fab, atropine for bradycardia, correct K+/Mg²+.",
            variant: "inhibit",
          },
          {
            id: "cholinergic-fork",
            label: "THE ACh RECEPTOR FORK — NICOTINIC vs MUSCARINIC",
            sublabel:
              "Target — Coniine (hemlock, Conium maculatum): nicotinic ACh receptor agonist/antagonist → depolarizing blockade → flaccid paralysis (ascending paralysis, respiratory failure, salivation). Atropine/scopolamine (Atropa belladonna, Datura stramonium “jimsonweed”): muscarinic ACh receptor antagonist → anticholinergic toxidrome (dry mouth, mydriasis, hyperthermia, delirium).",
            variant: "target",
          },
          {
            id: "antidote-column",
            label: "THE ANTIDOTE COLUMN — THE TARGET NAMES THE DRUG",
            sublabel:
              "Output — atropine for either vagal bradycardia (grayanotoxin, glycosides); lidocaine/amiodarone — never class IA/III — for aconitine; digoxin-specific Fab + K+/Mg²+ correction for the glycosides; respiratory support + activated charcoal early for coniine; physostigmine (AChE inhibitor) + cooling + fluids for the anticholinergic plants. Every antidote is the physiological mirror of its row's target.",
            variant: "output",
          },
        ],
        edges: [
          { from: "plant-intro", to: "grayanotoxin", label: "“mad honey” → Na+ opener at the axon" },
          { from: "plant-intro", to: "aconitine", label: "monkshood/wolfsbane → Na+ opener at site 2" },
          { from: "plant-intro", to: "glycosides", label: "oleander/digitalis → the pump" },
          { from: "plant-intro", to: "cholinergic-fork", label: "hemlock vs jimsonweed → the two ACh receptors" },
          { from: "grayanotoxin", to: "antidote-column", label: "↑ vagal tone → IV fluids, atropine if severe" },
          { from: "aconitine", to: "antidote-column", label: "sustained Na+ influx → lidocaine/amiodarone" },
          { from: "glycosides", to: "antidote-column", label: "↑ Ca²+ ectopy → Fab, correct K+/Mg²+", type: "inhibit" },
          { from: "cholinergic-fork", to: "antidote-column", label: "paralysis vs toxidrome → support/charcoal vs physostigmine" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "seafood-plant-toxin-map",
      title: "The ingested-toxin target map (an original KYP diagram)",
      caption:
        "An original KYP diagram of both tables on book 246: the printed intro sentence's three-action fork (histamine release / total Na+ channel block / Na+ channel opening) with First Aid's red h/t/c letters attributed; the seafood table's three rows as cards in printed order (Histamine/scombroid → Tetrodotoxin → Ciguatoxin), each with source, action, symptoms, and treatment; the plant table's five rows as cards in printed order (Grayanotoxin → Aconitine alkaloids → Cardiac glycosides → Coniine → Atropine/scopolamine) each tagged with its molecular target; the Na+ channel fork panel (block vs open vs the pump vs the two ACh receptors); and the antidote column — the treatment chains that end each row, including the AVOID CLASS IA/III warning on aconitine.",
      notice:
        "Census (pdfimages): ZERO raster images on pdf 268 — the page's visual assets are the two color-coded tables themselves (light-blue TOXIN column, teal toxin names with red first letters H/T/C in the seafood table, red h/t/c letters in the intro sentence), VLM-confirmed at 120dpi with no margin notes. The target-map diagram, the row cards, the channel fork, and the antidote panel are an ORIGINAL KYP ADAPTATION — every row's label, source, action, symptoms, and treatment is preserved, but the artwork is KYP's. Both tables are additionally carried verbatim in the note's table blocks.",
    },
    {
      kind: "table",
      title:
        "Book 246 — the printed “Ingested seafood toxins” table, carried verbatim (every printed word, PRINTED row order)",
      intro:
        "The page's first table, three rows in the printed order: Histamine (scombroid poisoning) → Tetrodotoxin → Ciguatoxin. First Aid prints the toxin names in teal with red first letters H/T/C and the intro sentence's h/t/c in red — its own mnemonic, carried attributed. Note: the batch content map expected a shellfish/saxitoxin row; NO shellfish row prints on this page (VLM-confirmed), and the printed three rows govern.",
      columns: [
        "TOXIN",
        "SOURCE",
        "ACTION",
        "SYMPTOMS",
        "TREATMENT",
      ],
      rows: [
        [
          "Histamine (scombroid poisoning)",
          "Spoiled dark-meat fish such as tuna, mahi-mahi, mackerel, and bonito",
          "Bacterial histidine decarboxylase converts histidine to histamine — Frequently misdiagnosed as fish allergy (the printed in-cell warning)",
          "Mimics anaphylaxis: oral burning sensation, facial flushing, erythema, urticaria, itching; may progress to bronchospasm, angioedema, hypotension",
          "Antihistamines; Albuterol +/– epinephrine",
        ],
        [
          "Tetrodotoxin",
          "Pufferfish",
          "Binds fast voltage-gated Na+ channels in nerve tissue, preventing depolarization",
          "Nausea, diarrhea, paresthesias, weakness, dizziness, loss of reflexes",
          "Supportive",
        ],
        [
          "Ciguatoxin",
          "Reef fish such as barracuda, snapper, and moray eel",
          "Opens Na+ channels, causing depolarization",
          "Nausea, vomiting, diarrhea, perioral numbness, reversal of hot and cold sensations, bradycardia, heart block, hypotension",
          "Supportive",
        ],
      ],
      caption:
        "Verbatim carries, documented: “Frequently misdiagnosed as fish allergy” prints INSIDE the ACTION cell of the Histamine row (VLM-adjudicated), not as a margin note; the treatment cell prints “Antihistamines” and “Albuterol +/– epinephrine” on separate lines (joined here with a semicolon, house convention; the “+/–” carries the printed en dash). The two Na+ channel rows print in the order Tetrodotoxin (block) BEFORE Ciguatoxin (open).",
    },
    {
      kind: "table",
      title:
        "Book 246 — the printed “Plant toxins” table, carried verbatim (every printed word, PRINTED row order)",
      intro:
        "The page's second table, five rows in the printed order: Grayanotoxin → Aconitine alkaloids → Cardiac glycosides → Coniine (hemlock) → Atropine/scopolamine. The five-column header row repeats over this table. The cache text layer interleaves several of this table's cells (Grayanotoxin's symptoms/treatment extract before its toxin name; Aconitine's action and symptoms interleave line-by-line; Coniine's source and action interleave; the Atropine/scopolamine ACTION cell extracts after the footer) — all adjudicated to their printed cells via the VLM render and carried here as printed.",
      columns: [
        "TOXIN",
        "SOURCE",
        "ACTION",
        "SYMPTOMS",
        "TREATMENT",
      ],
      rows: [
        [
          "Grayanotoxin",
          "Rhododendron nectar (“mad honey”)",
          "Opens voltage-gated Na+ channels → prolonged depolarization → ↑ vagal tone",
          "Nausea, vomiting, dizziness, bradycardia, hypotension",
          "Supportive care (IV fluids, atropine if severe bradycardia)",
        ],
        [
          "Aconitine alkaloids",
          "Aconitum (monkshood, wolfsbane)",
          "Activates Na+ channels (site 2) → delayed inactivation → sustained Na+ influx → ventricular arrhythmias",
          "Paresthesias, hypotension, ventricular tachyarrhythmias, cardiac arrest",
          "Supportive, lidocaine or amiodarone for arrhythmia; avoid class IA/III agents",
        ],
        [
          "Cardiac glycosides",
          "Digitalis purpurea, Nerium oleander",
          "Inhibits Na+/K+-ATPase → ↑ intracellular Na+ → ↑ Na+/Ca²+ exchanger → ↑ Ca²+ → ↑ vagal tone, ectopy",
          "GI upset, visual disturbances (xanthopsia), AV block, arrhythmias",
          "Digoxin-specific Fab, atropine for bradycardia, correct K+/Mg²+",
        ],
        [
          "Coniine (hemlock)",
          "Conium maculatum (poison hemlock)",
          "Nicotinic ACh receptor agonist/antagonist → depolarizing blockade → flaccid paralysis",
          "Ascending paralysis, respiratory failure, salivation",
          "Supportive (respiratory support); activated charcoal early",
        ],
        [
          "Atropine/scopolamine",
          "Atropa belladonna, Datura stramonium (“jimsonweed”)",
          "Muscarinic ACh receptor antagonist",
          "Anticholinergic toxidrome: dry mouth, mydriasis, hyperthermia, delirium",
          "Physostigmine (AChE inhibitor), cooling, fluids",
        ],
      ],
      caption:
        "Verbatim carries, documented: the Grayanotoxin action prints “Opens voltage-gated Na+ channels” — the cache text layer displaces the superscript + to a stray “+” line near the header (adjudicated by the VLM render; the + is restored here); superscripts merge in the cache as printed unicode (Na+/K+-ATPase, ↑ Na+/Ca²+ exchanger, correct K+/Mg²+); “mad honey” and “jimsonweed” print with curly quotes. Note: the batch content map expected ricin / cyanogenic / water-hemlock rows; NO such rows print on this page (VLM-confirmed).",
    },
    {
      kind: "compare",
      title: "The Na+ channel fork — the page's two seafood channel toxins point in opposite directions",
      intro:
        "The exam's favorite discriminator on this page: tetrodotoxin and ciguatoxin touch the SAME channel with OPPOSITE actions, and their symptom columns diverge exactly as the physiology predicts.",
      columns: [
        "TOTAL BLOCK — TETRODOTOXIN (pufferfish)",
        "OPENING — CIGUATOXIN (reef fish)",
      ],
      rows: [
        {
          label: "The molecular action",
          a: "Binds fast voltage-gated Na+ channels in nerve tissue, preventing depolarization — the channel cannot open, so the nerve cannot fire",
          b: "Opens Na+ channels, causing depolarization — the channel cannot close, so the membrane stays excited",
        },
        {
          label: "The symptom fingerprint",
          a: "Nausea, diarrhea, paresthesias, weakness, dizziness, loss of reflexes — a silencing picture",
          b: "Nausea, vomiting, diarrhea, perioral numbness, reversal of hot and cold sensations, bradycardia, heart block, hypotension — an over-excitation picture with autonomic and cardiac fallout",
        },
        {
          label: "The plant-table extension",
          a: "No plant row blocks the channel — tetrodotoxin's lane is unique on this page (and the pharmacologic cousin of local anesthetics and the toxin the exam loves to pair with it)",
          b: "Two plant rows join the opening lane: grayanotoxin (“mad honey” → prolonged depolarization → ↑ vagal tone) and aconitine at site 2 (delayed inactivation → sustained Na+ influx → ventricular arrhythmias)",
        },
        {
          label: "The treatment column",
          a: "Supportive — no antidote prints for the blocked channel",
          b: "Supportive for ciguatoxin; the openers downstream do have drugs — atropine if grayanotoxin's vagal bradycardia is severe, lidocaine or amiodarone (avoid class IA/III) for aconitine's arrhythmias",
        },
      ],
    },
    {
      kind: "steps",
      title: "Reading any ingested-toxin question in three moves",
      intro:
        "The whole page distilled into an ordered decision path — TARGET, PHYSIOLOGY, ANTIDOTE.",
      steps: [
        {
          label: "NAME THE TARGET — route the toxin before touching the options",
          detail:
            "Histamine (spoiled dark-meat fish, anaphylaxis mimic) · fast voltage-gated Na+ channel block (pufferfish) · Na+ channel opening (reef fish, “mad honey”, monkshood site 2) · Na+/K+-ATPase (Digitalis, Nerium oleander) · nicotinic ACh receptor (poison hemlock) · muscarinic ACh receptor (Atropa belladonna, Datura stramonium).",
        },
        {
          label: "PREDICT THE SYMPTOMS FROM THE TARGET'S PHYSIOLOGY",
          detail:
            "A blocked channel silences: weakness, dizziness, loss of reflexes (tetrodotoxin). An opened channel excites: perioral numbness, hot/cold reversal (ciguatoxin), vagal bradycardia and hypotension (grayanotoxin), sustained ventricular arrhythmias (aconitine). An inhibited pump loads Ca²+ and fires the vagus: GI upset, xanthopsia, AV block, ectopy (cardiac glycosides). A nicotinic depolarizing blockade paralyzes upward: ascending flaccid paralysis, respiratory failure, salivation (coniine). A muscarinic blockade dries, dilates, and deludes: dry mouth, mydriasis, hyperthermia, delirium (atropine/scopolamine).",
        },
        {
          label: "LET THE ANTIDOTE FOLLOW THE TARGET",
          detail:
            "Antihistamines; albuterol +/– epinephrine (histamine) · supportive (both seafood channel toxins) · IV fluids, atropine if severe bradycardia (grayanotoxin) · lidocaine or amiodarone, avoid class IA/III (aconitine) · digoxin-specific Fab, atropine for bradycardia, correct K+/Mg²+ (glycosides) · respiratory support with activated charcoal early (coniine) · physostigmine (AChE inhibitor), cooling, fluids (anticholinergic plants). Only the first and last are true antidote lanes — the rest is target-guided supportive care.",
        },
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title: "The treatment column — the antidote chains the exam actually tests",
      body:
        "Treat this column as five one-line chains, each ending in a drug the exam can ask about. (1) Scombroid: antihistamines; albuterol +/– epinephrine — the only seafood row with drugs. (2) Grayanotoxin: supportive care (IV fluids, atropine if severe bradycardia) — the bradycardia is VAGAL, so atropine is the physiological mirror. (3) Aconitine: supportive, lidocaine or amiodarone for arrhythmia; AVOID CLASS IA/III AGENTS — the printed contraindication, because those agents act on the very Na+ channels aconitine has already forced open (adding class IA/III blockade to a channel-already-dysregulated myocardium worsens conduction). (4) Cardiac glycosides: digoxin-specific Fab, atropine for bradycardia, correct K+/Mg²+ — the digoxin toxicity protocol, because the plant IS digoxin. (5) Coniine: supportive (respiratory support); activated charcoal EARLY — timing matters because the toxin must be intercepted before absorption. And the anticholinergic plants: physostigmine (AChE inhibitor), cooling, fluids — the antidote that reverses the receptor blockade by raising ACh to outcompete it.",
    },
    {
      kind: "callout",
      variant: "memory",
      title: "First Aid's own red letters — the mnemonic layer printed on the page",
      body:
        "The page's own memory furniture, printed in red (attributed, verbatim): the intro sentence's initial letters — “histamine release, total block of Na+ channels, or opening of Na+ channels to cause depolarization” — carry red h, t, c for Histamine (scombroid), Tetrodotoxin (total block), and Ciguatoxin (causes depolarization by opening), and the seafood toxin names print with red first letters H/T/C to match. These are the source's mnemonics, not KYP's; the four ALL-CAPS codes in the Memory section below are KYP originals layered on top.",
    },
  ],
  drugs: [
    {
      drug: "Physostigmine",
      klass: "Acetylcholinesterase inhibitor (the printed antidote for the anticholinergic plants)",
      target:
        "Acetylcholinesterase at the muscarinic synapse — reverses muscarinic ACh receptor blockade (and crosses the blood-brain barrier, which is why it reaches the delirium)",
      mechanism:
        "Inhibits AChE → ↑ acetylcholine at cholinergic synapses → outcompetes atropine/scopolamine for the muscarinic receptor → reversal of the toxidrome",
      effect:
        "Overcomes the printed anticholinergic toxidrome: dry mouth, mydriasis, hyperthermia, delirium",
      uses:
        "The printed treatment cell for the Atropa belladonna / Datura stramonium (“jimsonweed”) row: “Physostigmine (AChE inhibitor), cooling, fluids”",
      adverse:
        "Not printed on book 246 — cholinergic excess if pushed too far (bradycardia, bronchorrhea, seizures); the reason it is reserved for true anticholinergic toxicity with delirium or hyperthermia",
      clue:
        "An AChE inhibitor that crosses the BBB — the antidote that reaches both the dry mouth AND the delirium.",
    },
    {
      drug: "Atropine (as the printed bradycardia antidote)",
      klass: "Muscarinic ACh receptor antagonist (here used as the antidote, not the poison)",
      target:
        "Cardiac muscarinic (M2) receptors — blocks vagal input to the sinoatrial and atrioventricular nodes",
      mechanism:
        "Antagonizes vagal tone → ↑ heart rate and improved AV conduction — the physiological mirror of the ↑ vagal tone that grayanotoxin and the cardiac glycosides produce",
      effect:
        "Reverses severe toxin-induced bradycardia (and the AV block of glycoside toxicity)",
      uses:
        "Printed twice in the treatment column: “atropine if severe bradycardia” (grayanotoxin) and “atropine for bradycardia” (cardiac glycosides)",
      adverse:
        "Not printed on book 246 for this use — the same anticholinergic toxidrome the plant row warns about, if overdosed",
      clue:
        "The page's perfect symmetry: atropine appears as both POISON (Atropa belladonna row) and ANTIDOTE (two other rows) — same receptor, opposite direction of need.",
    },
    {
      drug: "Digoxin-specific Fab",
      klass: "Antibody fragment (digoxin immune Fab)",
      target:
        "Digoxin (and cross-reacting cardiac glycosides) in the circulation — binds the drug before it reaches the pump",
      mechanism:
        "Antidote-binding: the Fab fragment binds digitalis glycosides in plasma → ↓ free drug concentration → the inhibited Na+/K+-ATPase recovers → the ↑ vagal tone and ectopy resolve",
      effect:
        "Reverses the printed glycoside picture: GI upset, visual disturbances (xanthopsia), AV block, arrhythmias",
      uses:
        "The printed treatment cell for the Digitalis purpurea / Nerium oleander row: “Digoxin-specific Fab, atropine for bradycardia, correct K+/Mg²+”",
      adverse:
        "Not printed on book 246 — hypokalemia from rapid reversal of the glycoside's effects; the reason K+ is monitored during therapy",
      clue:
        "The plant row IS digoxin toxicity — Nerium oleander and Digitalis purpurea carry the same glycoside pharmacology, so the cardiology antidote protocol transfers wholesale.",
    },
    {
      drug: "Activated charcoal",
      klass: "Gastrointestinal adsorbent",
      target:
        "The toxin within the gut lumen — adsorbs the ingested alkaloid before absorption",
      mechanism:
        "Adsorbs coniine in the intestinal lumen → ↓ systemic absorption → less nicotinic receptor engagement",
      effect:
        "Blunts the ascending nicotinic paralysis when given early",
      uses:
        "The printed treatment cell for the Conium maculatum (poison hemlock) row: “Supportive (respiratory support); activated charcoal early” — the EARLY is printed, and it is the tested word",
      adverse:
        "Not printed on book 246 — aspiration risk in a patient losing protective airway reflexes to the paralysis, which is why timing and airway come first",
      clue:
        "The one treatment on the page whose efficacy is a race against absorption — charcoal EARLY, respiratory support throughout.",
    },
    {
      drug: "Antihistamines (+ albuterol +/– epinephrine)",
      klass: "H1 blockers ± β-agonist bronchodilator ± epinephrine (the scombroid rescue)",
      target:
        "H1 receptors (flushing, urticaria, itching) and bronchial β2 receptors (bronchospasm); epinephrine for refractory hypotension/angioedema",
      mechanism:
        "Competitive H1 antagonism turns off the histamine that bacterial histidine decarboxylase poured into the spoiled fish; albuterol (β2 agonism) opens the bronchi; epinephrine supports the pressure if the mimic reaches anaphylaxis severity",
      effect:
        "Relief of oral burning sensation, facial flushing, erythema, urticaria, itching, bronchospasm",
      uses:
        "The printed treatment cell for the Histamine (scombroid poisoning) row: “Antihistamines; Albuterol +/– epinephrine”",
      adverse:
        "Not printed on book 246 — the expected sedation/anticholinergic load of first-generation H1 blockers, and β-agonist tachycardia/tremor",
      clue:
        "Antihistamines WORK because the reaction is chemical histamine, not IgE — the treatment itself argues against the “fish allergy” misdiagnosis the cell warns about.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "Minutes to an hour after eating tuna, mahi-mahi, mackerel, or bonito, a diner develops oral burning, facial flushing, erythema, and urticaria, may progress to bronchospasm, angioedema, and hypotension",
        discriminator: "Spoiled DARK-MEAT fish + a full anaphylaxis MIMIC without prior allergy or IgE timing",
        concept: "Scombroid poisoning — bacterial histidine decarboxylase converts histidine to histamine",
        answer: "Antihistamines; albuterol +/– epinephrine — and the printed warning: frequently misdiagnosed as fish allergy",
      },
      {
        stem: "After pufferfish ingestion, a patient has nausea, diarrhea, paresthesias, weakness, dizziness, and loss of reflexes",
        discriminator: "PUFFERFISH + a silencing neurologic picture — the nerve that cannot fire",
        concept: "Tetrodotoxin binds fast voltage-gated Na+ channels in nerve tissue, preventing depolarization",
        answer: "Supportive care — no channel antidote exists",
      },
      {
        stem: "After barracuda, snapper, or moray eel, GI upset is joined by perioral numbness and REVERSAL of hot and cold sensations, with bradycardia, heart block, and hypotension",
        discriminator: "REEF FISH + hot/cold reversal — the pathognomonic sensory swap",
        concept: "Ciguatoxin opens Na+ channels, causing depolarization",
        answer: "Supportive care — the open channel has no antidote either",
      },
      {
        stem: "A forager or a traveler who ate rhododendron (“mad”) honey or brewed jimsonweed tea: either bradycardia with hypotension, or dry mouth, mydriasis, hyperthermia, and delirium",
        discriminator: "The PLANT + the direction of autonomic failure — vagal excess (bradycardia) vs muscarinic blockade (dry, dilated, delirious)",
        concept: "Grayanotoxin opens voltage-gated Na+ channels → prolonged depolarization → ↑ vagal tone; atropine/scopolamine block the muscarinic ACh receptor",
        answer: "Mad honey: IV fluids, atropine if severe bradycardia; jimsonweed: physostigmine (AChE inhibitor), cooling, fluids",
      },
    ],
    traps: [
      {
        a: "Scombroid poisoning",
        b: "True IgE-mediated fish allergy",
        whyConfused:
          "Both present as acute flushing, urticaria, and possible bronchospasm/angioedema after fish — the printed cell itself says “Frequently misdiagnosed as fish allergy”",
        keyDifference:
          "Scombroid is bacterial histidine decarboxylase converting histidine to histamine in SPOILED dark-meat fish — a chemical histamine load, not an immunologic one; onset is minutes after ingestion and there is no prior sensitization",
        clue:
          "The fish (tuna, mahi-mahi, mackerel, bonito — the dark-meat list) plus the response to antihistamines points to scombroid; also note (a KYP extension, not printed on book 246): patients on MAO inhibitors can have exaggerated scombroid reactions because ingested amines are normally cleared by oxidative deamination",
      },
      {
        a: "Tetrodotoxin",
        b: "Ciguatoxin",
        whyConfused:
          "Both are seafood Na+ channel toxins with GI prodrome and paresthesias",
        keyDifference:
          "Tetrodotoxin (pufferfish) BINDS fast voltage-gated Na+ channels, PREVENTING depolarization — weakness and loss of reflexes; ciguatoxin (reef fish) OPENS Na+ channels, CAUSING depolarization — perioral numbness, reversal of hot and cold sensations, bradycardia, heart block, hypotension",
        clue:
          "The direction of the channel: silencing (no reflexes) = block = pufferfish; excitation with autonomic fallout (hot/cold swap, heart block) = opening = reef fish",
      },
      {
        a: "Grayanotoxin (“mad honey”)",
        b: "Cardiac glycosides (Digitalis, Nerium oleander)",
        whyConfused:
          "Both plant toxins end in bradycardia and hypotension via ↑ vagal tone",
        keyDifference:
          "Grayanotoxin opens voltage-gated Na+ channels → prolonged depolarization → ↑ vagal tone; the glycosides inhibit Na+/K+-ATPase → ↑ intracellular Na+ → ↑ Na+/Ca²+ exchanger → ↑ Ca²+ → ↑ vagal tone, ectopy — different targets, and the glycoside row adds xanthopsia and AV block",
        clue:
          "The visual disturbance (xanthopsia — yellow vision) and AV block belong to the pump; “mad honey” gives a clean vagal bradycardia; the treatments split too — atropine/IV fluids vs digoxin-specific Fab with K+/Mg²+ correction",
      },
      {
        a: "Coniine (poison hemlock)",
        b: "Atropine/scopolamine (belladonna, jimsonweed)",
        whyConfused:
          "Both are plant toxins that act on acetylcholine receptors, and both can follow a foraging mistake",
        keyDifference:
          "Coniine is a NICOTINIC ACh receptor agonist/antagonist → depolarizing blockade → flaccid paralysis (ascending paralysis, respiratory failure, salivation); atropine/scopolamine are MUSCARINIC antagonists → the anticholinergic toxidrome (dry mouth, mydriasis, hyperthermia, delirium)",
        clue:
          "Wet and paralyzed (salivation + ascending weakness) = nicotinic = hemlock = respiratory support + charcoal early; dry, dilated, and delirious = muscarinic blockade = physostigmine, cooling, fluids",
      },
    ],
    pivots: [
      {
        lookAlike:
          "Any ingested-toxin stem asking for the mechanism, the toxin, or the treatment — route it in one fixed order",
        differentiator:
          "NAME THE TARGET (histamine · fast Na+ channel block · Na+ channel opening · Na+/K+-ATPase · nicotinic ACh receptor · muscarinic ACh receptor) → PREDICT THE SYMPTOMS FROM THE TARGET'S PHYSIOLOGY (silenced nerve vs depolarizing membrane vs Ca²+-loaded myocyte vs depolarizing blockade vs muscarinic blockade) → LET THE ANTIDOTE FOLLOW THE TARGET",
        correctPath:
          "Target → physiology → antidote: the molecular target, never the plant or fish name, is the answer key for mechanism, symptom, and treatment questions alike",
      },
      {
        lookAlike:
          "A plant ingestion with bradycardia and hypotension — which plant, and which drug?",
        differentiator:
          "Ask what else is on the exam: xanthopsia, GI upset, AV block, and arrhythmias → the Na+/K+-ATPase row (cardiac glycosides → digoxin-specific Fab, atropine for bradycardia, correct K+/Mg²+); a clean vagal bradycardia after honey → grayanotoxin (IV fluids, atropine if severe bradycardia); paresthesias with ventricular tachyarrhythmias after monkshood → aconitine (lidocaine or amiodarone — AVOID class IA/III agents)",
        correctPath:
          "Sort bradycardic plant toxicity by the accompanying fingerprints: xanthopsia/AV block = pump = Fab; honey = Na+ opener = atropine; site-2 arrhythmias = aconitine = lidocaine/amiodarone",
      },
      {
        lookAlike:
          "A forager with neurologic findings after eating an unknown plant — paralyzed or poisoned-dry?",
        differentiator:
          "Ascending flaccid paralysis with respiratory failure and salivation → the NICOTINIC row (coniine: depolarizing blockade — supportive with respiratory support, activated charcoal early); dry mouth, mydriasis, hyperthermia, delirium → the MUSCARINIC row (atropine/scopolamine: anticholinergic toxidrome — physostigmine, cooling, fluids)",
        correctPath:
          "The wet-paralyzed patient needs AIRWAY and charcoal; the dry-delirious patient needs physostigmine — the receptor decides the resuscitation",
      },
    ],
    miniCase: {
      vignette:
        "A 34-year-old woman presents 30 minutes after a sushi dinner with oral burning, facial flushing, erythema, and generalized urticaria. She is afebrile; blood pressure is 96/60 mmHg with mild wheezing on examination. She eats fish regularly and has never had a reaction. The restaurant confirms the tuna served to her table had been improperly refrigerated after being caught on a charter boat two days earlier. Which of the following best explains her presentation?",
      question:
        "Identify the mechanism — choose the option that correctly routes the offending meal to her symptoms.",
      options: [
        {
          label:
            "Bacterial histidine decarboxylase in the spoiled dark-meat fish converted histidine to histamine, which she then ingested — a chemical histamine load that mimics anaphylaxis",
          text: "Scombroid poisoning — the fish was spoiled, not allergenic.",
          correct: true,
          why:
            "Correct on every layer. The printed row: spoiled dark-meat fish such as tuna (her improperly refrigerated fish), mahi-mahi, mackerel, and bonito; bacterial histidine decarboxylase converts histidine to histamine; symptoms mimic anaphylaxis — oral burning sensation, facial flushing, erythema, urticaria, itching, progressing to bronchospasm (her wheezing), angioedema, and hypotension (her 96/60). The timing (minutes to a half hour), the spoiling history, and the absence of any prior reaction all point away from IgE and toward the chemical histamine load — which is exactly why the printed cell warns “Frequently misdiagnosed as fish allergy.” Her treatment is the printed one: antihistamines; albuterol +/– epinephrine.",
        },
        {
          label:
            "IgE-mediated mast-cell degranulation to fish protein, from a previously sensitized patient — true fish allergy",
          text: "The misdiagnosis the printed cell warns about.",
          why:
            "This is the trap the page names explicitly: “Frequently misdiagnosed as fish allergy.” True IgE allergy needs prior sensitization (she eats fish regularly without reaction), and it would not track with the fish's refrigeration history. The distractor works because the symptom list is identical — that is the whole point of the word “mimics” — but the mechanism is bacterial decarboxylation in spoiled fish, not immunologic mast-cell degranulation. Her antihistamine response will confirm it.",
        },
        {
          label:
            "Ciguatoxin from the reef fish opened her Na+ channels, causing depolarization with perioral numbness and reversal of hot and cold sensations",
          text: "Right page, wrong row — and the wrong fish.",
          why:
            "Ciguatoxin is the other anaphylaxis-free row on this page, but it opens Na+ channels to cause depolarization: nausea, vomiting, diarrhea, perioral numbness, reversal of hot and cold sensations, bradycardia, heart block, hypotension. Her presentation has no paresthesias or sensory reversal, and ciguatoxin comes from reef fish such as barracuda, snapper, and moray eel — not the spoiled dark-meat tuna the restaurant confirmed. Flushing and urticaria are histamine findings, not channel findings.",
        },
        {
          label:
            "Tetrodotoxin from the pufferfish bound fast voltage-gated Na+ channels in her nerve tissue, preventing depolarization",
          text: "The third seafood row — a silencing, not a flushing.",
          why:
            "Tetrodotoxin is the Na+ channel BLOCK: nausea, diarrhea, paresthesias, weakness, dizziness, loss of reflexes — a neurosilencing picture with no urticaria, flushing, or bronchospasm, and its source is pufferfish, not tuna. The distractor is tempting because it is the page's other famous channel toxin, but her presentation is cutaneous and mast-cell-mimicking, which only the histamine row produces.",
        },
      ],
      reasoning:
        "The stem hands over all three scombroid fingerprints at once: the FISH (improperly refrigerated dark-meat tuna — the head of the printed source cell), the TIME (30 minutes — a chemical reaction, not an immunologic one), and the SYMPTOM SET (oral burning, flushing, erythema, urticaria, wheezing, hypotension — the printed symptom cell in order). Route the meal through the target: bacterial histidine decarboxylase converted the fish's histidine to histamine, she ingested it, and exogenous histamine produces the exact picture endogenous mast-cell histamine produces in anaphylaxis — hence “mimics anaphylaxis” and the printed warning “Frequently misdiagnosed as fish allergy” (the correct answer). The distractors each break the routing: option B accepts the mimic at face value and diagnoses the very allergy the cell warns against, ignoring the spoiling history and her tolerant fish-eating past; option C imports ciguatoxin's opening of Na+ channels — but reef fish, paresthesias, and hot/cold reversal are all absent, and depolarization does not urticate; option D imports tetrodotoxin's block — but pufferfish and a silenced nerve (weakness, lost reflexes) are the opposite of her flushed, wheezing, skin-marked presentation. Name the target first, and the fish, the mechanism, and the treatment — antihistamines; albuterol +/– epinephrine — all follow.",
    },
  },
  mnemonics: [
    {
      code: "PUFFER BLOCKS, REEF OPENS, SPOILED POURS",
      meaning:
        "The three seafood toxins by their targets: PUFFERfish tetrodotoxin BLOCKS fast voltage-gated Na+ channels in nerve tissue (preventing depolarization → nausea, diarrhea, paresthesias, weakness, dizziness, loss of reflexes; supportive); REEF-fish ciguatoxin OPENS Na+ channels (causing depolarization → GI symptoms, perioral numbness, reversal of hot and cold sensations, bradycardia, heart block, hypotension; supportive); SPOILED dark-meat fish (tuna, mahi-mahi, mackerel, bonito) POURS histamine via bacterial histidine decarboxylase (mimics anaphylaxis; antihistamines; albuterol +/– epinephrine).",
      memorizes:
        "The seafood table's three rows — source, channel direction, symptom fingerprint, and treatment — in one line",
      whenToUse:
        "Any seafood-ingestion vignette: identify the fish, then read the direction of the channel (or the pour) off this line",
      clinical:
        "Only the pour has an antidote (antihistamines ± albuterol/epinephrine); both channel toxins are supportive — and the misdiagnosis risk lives in the pour (fish allergy), not the channels.",
    },
    {
      code: "MAD HONEY, MAD VAGUS",
      meaning:
        "Grayanotoxin from Rhododendron nectar (“mad honey”) opens voltage-gated Na+ channels → prolonged depolarization → ↑ vagal tone — the mad (opened) channel drives the mad (overactive) vagus: nausea, vomiting, dizziness, bradycardia, hypotension. Treatment: supportive care (IV fluids, atropine if severe bradycardia).",
      memorizes:
        "The grayanotoxin row — source, mechanism chain, symptoms, and the atropine-if-severe treatment",
      whenToUse:
        "Any bradycardia + hypotension vignette with honey or rhododendron exposure; also any question asking which plant toxin ↑ vagal tone",
      clinical:
        "The vagal bradycardia is the physiological mirror of the treatment: atropine blocks the very receptor the vagus is overdriving — IV fluids for the pressure, atropine only if severe.",
    },
    {
      code: "SITE 2 SUSTAINS THE STORM",
      meaning:
        "Aconitine (from Aconitum — monkshood, wolfsbane) activates Na+ channels at SITE 2 → delayed inactivation → SUSTAINED Na+ influx → the ventricular STORM: ventricular arrhythmias, tachyarrhythmias, cardiac arrest, with paresthesias and hypotension. Treatment: supportive, lidocaine or amiodarone for arrhythmia; AVOID class IA/III agents.",
      memorizes:
        "The aconitine row — the site-2 mechanism chain, the ventricular symptom storm, and the class IA/III contraindication",
      whenToUse:
        "Monkshood/wolfsbane ingestion with ventricular arrhythmias, and any question about which antiarrhythmics are contraindicated in aconitine toxicity",
      clinical:
        "The avoid-list is the exam hook — and the print itself carries a tension worth memorizing exactly as printed: amiodarone is classified as a class III agent, yet the treatment cell recommends “lidocaine or amiodarone for arrhythmia; avoid class IA/III agents.” Carry both halves verbatim: the printed pair (lidocaine or amiodarone) and the printed rule (avoid class IA/III).",
    },
    {
      code: "NICOTINIC PARALYZES, MUSCARINIC DRIES",
      meaning:
        "The two acetylcholine-receptor plant toxins: coniine (Conium maculatum, poison hemlock) is a NICOTINIC ACh receptor agonist/antagonist → depolarizing blockade → flaccid PARALYSIS — ascending paralysis, respiratory failure, salivation (the wet, paralyzed patient; supportive with respiratory support, activated charcoal early). Atropine/scopolamine (Atropa belladonna, Datura stramonium “jimsonweed”) are MUSCARINIC ACh receptor antagonists → the anticholinergic toxidrome DRIES: dry mouth, mydriasis, hyperthermia, delirium (the dry, dilated, delirious patient; physostigmine (AChE inhibitor), cooling, fluids).",
      memorizes:
        "Which plant toxin hits which ACh receptor, and the opposite resuscitations each demands",
      whenToUse:
        "Any foraging-ingestion vignette with either paralysis or an anticholinergic picture; also any question pairing physostigmine with the plant that needs it",
      clinical:
        "Same synapse, opposite failures: the nicotinic patient loses the motor end plate (airway first, charcoal early); the muscarinic patient loses gland and smooth-muscle tone (physostigmine, cooling, fluids).",
    },
  ],
  rapidReview: {
    s30: [
      "Toxin actions include histamine release, total block of Na+ channels, or opening of Na+ channels to cause depolarization (First Aid's own red h/t/c)",
      "Histamine (scombroid): spoiled dark-meat fish (tuna, mahi-mahi, mackerel, bonito); bacterial histidine decarboxylase converts histidine to histamine; mimics anaphylaxis; frequently misdiagnosed as fish allergy; antihistamines; albuterol +/– epinephrine",
      "Tetrodotoxin (pufferfish): binds fast voltage-gated Na+ channels in nerve tissue, preventing depolarization; nausea, diarrhea, paresthesias, weakness, dizziness, loss of reflexes; supportive",
      "Ciguatoxin (reef fish — barracuda, snapper, moray eel): opens Na+ channels, causing depolarization; nausea, vomiting, diarrhea, perioral numbness, reversal of hot and cold sensations, bradycardia, heart block, hypotension; supportive",
      "Grayanotoxin (Rhododendron nectar, “mad honey”): opens voltage-gated Na+ channels → prolonged depolarization → ↑ vagal tone; nausea, vomiting, dizziness, bradycardia, hypotension; supportive care (IV fluids, atropine if severe bradycardia)",
      "Aconitine alkaloids (Aconitum, monkshood/wolfsbane): activates Na+ channels (site 2) → delayed inactivation → sustained Na+ influx → ventricular arrhythmias; paresthesias, hypotension, ventricular tachyarrhythmias, cardiac arrest; supportive, lidocaine or amiodarone; avoid class IA/III agents",
      "Cardiac glycosides (Digitalis purpurea, Nerium oleander): inhibits Na+/K+-ATPase → ↑ intracellular Na+ → ↑ Na+/Ca²+ exchanger → ↑ Ca²+ → ↑ vagal tone, ectopy; GI upset, visual disturbances (xanthopsia), AV block, arrhythmias; digoxin-specific Fab, atropine for bradycardia, correct K+/Mg²+",
      "Coniine (Conium maculatum, poison hemlock): nicotinic ACh receptor agonist/antagonist → depolarizing blockade → flaccid paralysis; ascending paralysis, respiratory failure, salivation; supportive (respiratory support); activated charcoal early",
      "Atropine/scopolamine (Atropa belladonna, Datura stramonium “jimsonweed”): muscarinic ACh receptor antagonist; anticholinergic toxidrome: dry mouth, mydriasis, hyperthermia, delirium; physostigmine (AChE inhibitor), cooling, fluids",
    ],
    m3: [
      "PUFFER BLOCKS, REEF OPENS, SPOILED POURS — the seafood fork: tetrodotoxin blocks the fast Na+ channel, ciguatoxin opens it, scombroid pours histamine",
      "MAD HONEY, MAD VAGUS — grayanotoxin opens Na+ channels → prolonged depolarization → ↑ vagal tone → bradycardia, hypotension (atropine if severe)",
      "SITE 2 SUSTAINS THE STORM — aconitine at site 2 → sustained Na+ influx → ventricular tachyarrhythmias and cardiac arrest (lidocaine/amiodarone; avoid class IA/III)",
      "NICOTINIC PARALYZES, MUSCARINIC DRIES — coniine's depolarizing blockade (airway + charcoal early) vs the anticholinergic toxidrome (physostigmine, cooling, fluids)",
    ],
    m10: [
      "Printed row order, seafood table: Histamine (scombroid) → Tetrodotoxin → Ciguatoxin — three rows; NO shellfish/saxitoxin row prints on pdf 268 (VLM-confirmed; the batch content map expected one — whatever rows print governs)",
      "Printed row order, plant table: Grayanotoxin → Aconitine alkaloids → Cardiac glycosides → Coniine (hemlock) → Atropine/scopolamine — NO ricin / cyanogenic / water-hemlock rows print on this page (VLM-confirmed)",
      "“Frequently misdiagnosed as fish allergy” prints INSIDE the Histamine row's ACTION cell (VLM-adjudicated) — not a margin note",
      "First Aid's own red mnemonic furniture: the intro sentence's h/t/c initial letters and the red first letters H/T/C on the seafood toxin names — carried attributed, not counted among KYP's four",
      "Cache-layer quirks adjudicated: the Grayanotoxin row's symptoms/treatment extract BEFORE its toxin name; Aconitine's action and symptoms interleave line-by-line; Coniine's source and action interleave; the Atropine/scopolamine ACTION cell extracts AFTER the footer slug; a lone “+” displaced to the header region is the Grayanotoxin “Na+” superscript (the print carries “Opens voltage-gated Na+ channels”)",
      "Printed spellings and glyphs carried verbatim: “Albuterol +/– epinephrine” (en dash), “mad honey” and “jimsonweed” (curly quotes), Na+/K+-ATPase, ↑ Na+/Ca²+ exchanger, correct K+/Mg²+ (merged superscripts), and the “SEC TION II” header extraction artifact",
    ],
  },
  recall: [
    {
      q: "The page's introductory sentence, verbatim — the three toxin actions.",
      a: "Toxin actions include histamine release, total block of Na+ channels, or opening of Na+ channels to cause depolarization.",
    },
    {
      q: "The scombroid row, verbatim — source, action (with its printed warning), and treatment.",
      a: "Histamine (scombroid poisoning): spoiled dark-meat fish such as tuna, mahi-mahi, mackerel, and bonito; bacterial histidine decarboxylase converts histidine to histamine (frequently misdiagnosed as fish allergy); antihistamines; albuterol +/– epinephrine.",
    },
    {
      q: "Tetrodotoxin — source, action, and the symptom fingerprint, verbatim.",
      a: "Pufferfish; binds fast voltage-gated Na+ channels in nerve tissue, preventing depolarization; nausea, diarrhea, paresthesias, weakness, dizziness, loss of reflexes; supportive.",
    },
    {
      q: "Ciguatoxin — source, action, and the two most tested symptoms.",
      a: "Reef fish such as barracuda, snapper, and moray eel; opens Na+ channels, causing depolarization. The tested pair: perioral numbness and reversal of hot and cold sensations (with bradycardia, heart block, hypotension). Supportive.",
    },
    {
      q: "Grayanotoxin — the full mechanism chain, the source, and the treatment cell, verbatim.",
      a: "Rhododendron nectar (“mad honey”): opens voltage-gated Na+ channels → prolonged depolarization → ↑ vagal tone. Nausea, vomiting, dizziness, bradycardia, hypotension. Supportive care (IV fluids, atropine if severe bradycardia).",
    },
    {
      q: "Aconitine — the site, the mechanism chain, the symptoms, and the antiarrhythmic rule.",
      a: "Aconitum (monkshood, wolfsbane): activates Na+ channels (site 2) → delayed inactivation → sustained Na+ influx → ventricular arrhythmias. Paresthesias, hypotension, ventricular tachyarrhythmias, cardiac arrest. Supportive, lidocaine or amiodarone for arrhythmia; avoid class IA/III agents.",
    },
    {
      q: "The cardiac glycoside plant row — the full mechanism chain and the full treatment cell, verbatim.",
      a: "Digitalis purpurea, Nerium oleander: inhibits Na+/K+-ATPase → ↑ intracellular Na+ → ↑ Na+/Ca²+ exchanger → ↑ Ca²+ → ↑ vagal tone, ectopy. GI upset, visual disturbances (xanthopsia), AV block, arrhythmias. Digoxin-specific Fab, atropine for bradycardia, correct K+/Mg²+.",
    },
    {
      q: "The two acetylcholine-receptor plant rows — toxin, receptor, picture, and antidote, verbatim.",
      a: "Coniine (hemlock): Conium maculatum (poison hemlock); nicotinic ACh receptor agonist/antagonist → depolarizing blockade → flaccid paralysis; ascending paralysis, respiratory failure, salivation; supportive (respiratory support); activated charcoal early. Atropine/scopolamine: Atropa belladonna, Datura stramonium (“jimsonweed”); muscarinic ACh receptor antagonist; anticholinergic toxidrome: dry mouth, mydriasis, hyperthermia, delirium; physostigmine (AChE inhibitor), cooling, fluids.",
    },
  ],
  related: [
    {
      title: "Muscarinic Antagonists",
      topicId: "muscarinic-antagonists",
      note:
        "The Atropine/scopolamine row is this drug class as a plant poison: Atropa belladonna and Datura stramonium deliver muscarinic blockade — dry mouth, mydriasis, hyperthermia, delirium — and the class's own pharmacology explains both the toxidrome and why atropine doubles as an antidote two rows up (for grayanotoxin's and the glycosides' vagal bradycardia).",
    },
    {
      title: "Acetylcholine Receptors",
      topicId: "acetylcholine-receptors",
      note:
        "The plant table's final fork splits exactly along the two receptor families: coniine's nicotinic agonist/antagonist action (depolarizing blockade → flaccid paralysis) vs atropine/scopolamine's muscarinic antagonism (the anticholinergic toxidrome) — the same synapse, opposite receptors, opposite resuscitations.",
    },
    {
      title: "Cholinomimetics",
      topicId: "cholinomimetics",
      note:
        "Physostigmine is the antidote half of this class: an AChE inhibitor that raises acetylcholine until it outcompetes the plant alkaloids at the muscarinic receptor — the pharmacologic mirror image of the muscarinic-antagonist poisoning it reverses.",
    },
    {
      title: "Sympathomimetics",
      topicId: "sympathomimetics",
      note:
        "The scombroid treatment cell is sympathomimetic rescue: albuterol (β2 agonism) for the histamine-driven bronchospasm, with epinephrine held in reserve for refractory hypotension/angioedema — the same drugs as anaphylaxis, because the mimic demands the same resuscitation.",
    },
  ],
  crossLinks: [
    {
      subject: "Cardiovascular pharmacology (antiarrhythmics and digoxin)",
      connection:
        "Two treatment cells import cardiology whole. The aconitine row: “lidocaine or amiodarone for arrhythmia; avoid class IA/III agents” — the antiarrhythmic classes acting on the very Na+ channels aconitine has dysregulated. The cardiac glycoside row: plant Digitalis purpurea/Nerium oleander IS digoxin pharmacology — Na+/K+-ATPase inhibition, ↑ Ca²+, ectopy, xanthopsia, AV block — so the digoxin-toxicity protocol (digoxin-specific Fab, atropine for bradycardia, correct K+/Mg²+) transfers unchanged.",
    },
    {
      subject: "Immunology (hypersensitivity reactions)",
      connection:
        "Scombroid is the great anaphylaxis mimic: exogenous bacterial histamine reproduces the mast-cell mediator's effects — flushing, urticaria, bronchospasm, angioedema, hypotension — without IgE, prior sensitization, or tryptase elevation. The printed warning “Frequently misdiagnosed as fish allergy” is the page teaching the hypersensitivity differential: same mediators, totally different mechanism, and antihistamines (not epinephrine-first) lead the response.",
    },
    {
      subject: "Autonomic pharmacology beyond this page (MAO inhibitors and ingested amines)",
      connection:
        "A KYP extension (NOT printed on book 246): ingested histamine and other bioactive amines are normally cleared by intestinal oxidative deamination, and MAO inhibitors — famous for the tyramine “cheese reaction” — impair that clearance. Patients taking MAOIs can therefore have exaggerated scombroid reactions from the same histamine load, pairing this page's histamine row with the antidepressant-tyramine interaction tested in behavioral pharmacology.",
    },
    {
      subject: "Neurophysiology (voltage-gated channels and the nerve action potential)",
      connection:
        "The page is applied channel physiology: tetrodotoxin binds the FAST voltage-gated Na+ channel in nerve tissue and prevents the depolarization upstroke (the same channel local anesthetics target); ciguatoxin, grayanotoxin, and aconitine hold the channel open or delay its inactivation (aconitine at site 2, sustained Na+ influx) — one channel, two directions of failure, and symptom columns that read directly off the action potential.",
    },
  ],
};
