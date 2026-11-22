import type { KypUsMLENote } from "../types";

// Pharmacology — PH-batch 25. Source: FULL pdf page 272 / book 250
// (Pharmacology — Toxicities and Adverse Effects: "Drug
// reactions—neurologic" — a FULL single page carrying FOUR DRUG
// REACTION / CAUSAL AGENTS / NOTES tables: neurologic (7 rows),
// renal/genitourinary (4), respiratory (2), multiorgan (2)). Census
// (pdfimages): ZERO raster images — pure vector/text page, no margin
// notes, no figures (VLM-confirmed at 120dpi, staging-ph25/
// vlm-census.txt — VLM available this session, ONE glm-4.6v pass + a
// deterministic PyMuPDF raw-span/pdftotext -bbox adjudication). The
// four tables are carried VERBATIM in blocks[1]-[4] in PRINTED row
// order. PRINTED-TEXT QUIRKS carried + documented: (1) the visual-
// disturbances NOTES cell prints "These horrible drugs iirritate
// Precious eyes" — a DOUBLE i: the raw spans show a red-bold "ii"
// glyph pair (two separate mnemonic letters, i = Isoniazid and
// i = Ivabradine) before black "rritate"; the 120dpi VLM read
// smoothed it to single-i, the print/cache carry the double-i —
// carried verbatim; (2) U+2019 typographic apostrophes in "it’s",
// "5 P’s", "can’t" (the VLM claimed straight quotes; the raw spans
// and the cache layer carry U+2019); (3) the interstitial-nephritis
// cell prints the in-cell 5-P mnemonic with RED CAPITAL P's inside
// the words — "rifamPin" — plus Pee, Pain-free, Penicillins, PPIs
// (and a red "s" on sulfa) — carried verbatim, attributed; (4) the
// antimuscarinic row prints "H1-blockers" with a subscript 1 glyph
// (the cache layer merges it as "H1-blockers"); (5) "growth hormones"
// prints PLURAL in the IIH row. TEXT-LAYER INTERLEAVES (cache page
// index 271): the respiratory table's NOTES column header prints
// AFTER both of its data rows (lines 103-110 → header 112 → mnemonic
// 114); the multiorgan table's footer slug (line 131) prints BETWEEN
// the disulfiram causal agents (129) and the NOTES header (133) +
// mnemonic (135) + timestamp (137); "SEC TION II" header artifact.
// EMPTY NOTES CELLS (VLM + raw-span confirmed): tardive dyskinesia
// (T1), Fanconi syndrome + nephrotoxicity (T2), dry cough (T3),
// antimuscarinic (T4) — rendered as "—" and captioned. First Aid's
// own RED in-cell mnemonic lines ("Cis, it’s very painful
// peripherally" · "Crime and debt Always grow head tension" · "With
// seizures, I bit my tongue" · "These horrible drugs iirritate
// Precious eyes" · "Remember the 5 P’s" + the in-cell P's · "My nose
// cannot breathe bad air" · "Sorry pals, can’t go mingle") are
// carried ATTRIBUTED inside the verbatim tables and are NOT counted
// among the four KYP-original mnemonics. DRUG CARDS: folded into the
// verbatim tables + the compare/steps blocks (the DrugCard shape —
// single drug with mechanism/uses/adverse cells — does not fit a
// reaction → causal-agents table; the rows ARE the drug content).
// The mechanisms, exam layer, and memory layer are KYP originals.

export const drugReactionsNeurologic: KypUsMLENote = {
  id: "drug-reactions-neurologic",
  title: "Drug Reactions: Neurologic",
  subtitle:
    "One page, four tables, fifteen rows of DRUG REACTION → CAUSAL AGENTS → NOTES — and behind them a handful of pathways: the nigrostriatal dopamine fork that splits the SAME D2 blockers (antipsychotics, metoclopramide) into Parkinson-like syndrome early and tardive dyskinesia late; the seizure threshold that four drugs pry open (isoniazid, bupropion, imipenem/cilastatin, tramadol); the peripheral nerve that five drugs strip (platinum agents, isoniazid, vincristine, paclitaxel, phenytoin); the cochlea and mind that the cinchona alkaloids cloud (cinchonism); the eye that eight drugs recolor; then the organ-system sweep — the nephron and bladder (Fanconi, hemorrhagic cystitis, the 5-P interstitial nephritis, nephrotoxicity), the lung (bradykinin cough vs the six-drug fibrosis row), and the two multiorgan blocks (muscarinic receptor vs aldehyde dehydrogenase). Route every reaction to the pathway it disrupts.",
  subject: "Pharmacology",
  system:
    "Section II · High-Yield General Principles — Pharmacology: Toxicities and Adverse Effects",
  pilotCategory: "Pharmacology adverse-effect cross-reference",
  difficulty: 1,
  readTime: 6,
  sourceRef:
    "First Aid 2026, Part 1 pp. 250–250 (Pharmacology — Toxicities and Adverse Effects: Drug reactions—neurologic, renal/genitourinary, respiratory, multiorgan; …)",
  tags: [
    "drug reactions",
    "adverse effects",
    "cinchonism",
    "Parkinson-like syndrome",
    "tardive dyskinesia",
    "peripheral neuropathy",
    "idiopathic intracranial hypertension",
    "seizures",
    "visual disturbances",
    "Fanconi syndrome",
    "hemorrhagic cystitis",
    "interstitial nephritis",
    "nephrotoxicity",
    "dry cough",
    "pulmonary fibrosis",
    "antimuscarinic",
    "disulfiram-like reaction",
    "isoniazid",
    "cisplatin",
    "antipsychotics",
    "metoclopramide",
  ],
  core: {
    what:
      "The page prints FOUR three-column tables (DRUG REACTION / CAUSAL AGENTS / NOTES) under the banner “PHARMACOLOGY—TOXICITIES AND ADVERSE EFFECTS”. TABLE 1, “Drug reactions—neurologic,” runs seven rows in printed order: Cinchonism (Quinidine, quinine — can present with tinnitus, hearing/vision loss, psychosis, and cognitive impairment); Parkinson-like syndrome (Antipsychotics, metoclopramide — cogwheel rigidity of arm); Peripheral neuropathy (Platinum agents [eg, cisplatin], isoniazid, vincristine, paclitaxel, phenytoin — “Cis, it’s very painful peripherally”); Idiopathic intracranial hypertension (Corticosteroids, danazol, vitamin A, growth hormones, tetracyclines — “Crime and debt Always grow head tension”); Seizures (Isoniazid, bupropion, imipenem/cilastatin, tramadol — “With seizures, I bit my tongue”); Tardive dyskinesia (Antipsychotics, metoclopramide — the NOTES cell prints EMPTY); Visual disturbances (Topiramate [blurred vision/diplopia, haloes], hydroxychloroquine [↓ visual acuity, visual field defects], digoxin [yellow-tinged vision], isoniazid [optic neuritis], ivabradine [luminous phenomena], PDE-5 inhibitors [blue-tinged vision], ethambutol [color vision changes], vigabatrin [tunnel vision] — “These horrible drugs iirritate Precious eyes”). TABLE 2, “Drug reactions—renal/genitourinary,” runs four rows: Fanconi syndrome (Cisplatin, ifosfamide, expired tetracyclines, tenofovir); Hemorrhagic cystitis (Cyclophosphamide, ifosfamide — prevent by coadministering with mesna); Interstitial nephritis (Diuretics [Pee], NSAIDs [Pain-free], Penicillins and cephalosporins, PPIs, rifamPin, sulfa drugs — “Remember the 5 P’s”); Nephrotoxicity (Cisplatin, aminoglycosides, amphotericin, vancomycin). TABLE 3, “Drug reactions—respiratory,” runs two rows: Dry cough (ACE inhibitors) and Pulmonary fibrosis (Methotrexate, nitrofurantoin, carmustine, bleomycin, busulfan, amiodarone — “My nose cannot breathe bad air”). TABLE 4, “Drug reactions—multiorgan,” runs two rows: Antimuscarinic (Atropine, TCAs, H1-blockers, antipsychotics) and Disulfiram-like reaction (1st-generation sulfonylureas, procarbazine, certain cephalosporins, griseofulvin, metronidazole — “Sorry pals, can’t go mingle”).",
    why:
      "Because adverse-reaction questions are never list questions — they are pathway questions wearing a list's clothes. The two movement rows share IDENTICAL causal agents (antipsychotics, metoclopramide) and are separated only by the direction of dopamine-receptor adaptation: acute D2 blockade silences the nigrostriatal pathway (a down-state — cogwheel rigidity of arm), while months-to-years of blockade force postsynaptic D2 up-regulation and the system overshoots into involuntary choreiform movements (tardive dyskinesia — which is why its NOTES cell is empty: the story is the chronicity, not a symptom gloss). The seizure row is a threshold story: isoniazid (via pyridoxine depletion → ↓ GABA), bupropion, imipenem/cilastatin, and tramadol all lower the amount of excitation needed to fire a seizure. The peripheral-neuropathy row is an axon story: microtubule poisons (vincristine, paclitaxel), platinum DNA adducts (cisplatin), pyridoxine depletion (isoniazid again), and phenytoin all strip the longest nerves first. And the same drugs then reappear down the page in OTHER organ systems — cisplatin in Fanconi syndrome AND nephrotoxicity, isoniazid in THREE neurologic rows — because a drug's toxicity follows its distribution and mechanism everywhere it goes. The renal/genitourinary, respiratory, and multiorgan tables complete the sweep: tubule (Fanconi), bladder (hemorrhagic cystitis — acrolein, prevented by mesna), interstitium (the 5-P hypersensitivity of interstitial nephritis), nephron at large (nephrotoxicity); bradykinin accumulation (dry cough) vs alveolar scarring (the six-drug fibrosis row); and the two multiorgan blocks — muscarinic-receptor blockade vs aldehyde-dehydrogenase blockade.",
    keyIdea:
      "Read every drug-reaction stem in four moves. MOVE 1 — NAME THE SIGN the patient shows (a movement disorder, a seizure, distal numbness, a colored visual field, a dry cough, a hot flushed face after alcohol). MOVE 2 — NAME THE PATHWAY the sign implies: movement → the nigrostriatal dopamine axis (and ask HOW LONG the drug has been taken — the fork); seizure → the seizure threshold/GABA axis; symmetric distal sensory loss → the peripheral axon; tinnitus + hearing/vision loss + psychosis → the cochleovestibular/CNS cinchona picture; a drug-colored visual field → the retina/optic nerve; hematuria → the bladder urothelium; a hypersensitivity-appearing kidney → the interstitium; a dry cough on a new antihypertensive → bradykinin; progressive dyspnea with restriction → the alveolus; a full-body anticholinergic picture → the muscarinic receptor; flushing/vomiting after alcohol → aldehyde dehydrogenase. MOVE 3 — NAME THE ROW: the fifteen printed rows ARE the answer key, in four tables (neurologic, renal/genitourinary, respiratory, multiorgan). MOVE 4 — NAME THE DRUG, then check its OTHER appearances — the double-dippers (isoniazid ×3, cisplatin ×3, antipsychotics ×3, ifosfamide ×2, metoclopramide ×2, tetracyclines ×2, cephalosporins ×2) are the exam's favorite answer to “which of this patient's medications is responsible.”",
  },
  mechanisms: [
    {
      id: "dopamine-pathway-map",
      title:
        "The dopamine fork: one receptor blockade, two movement disorders — Parkinson-like syndrome early, tardive dyskinesia late",
      context:
        "The two IDENTICAL causal-agent rows of the neurologic table (book 250)",
      flow: {
        nodes: [
          {
            id: "culprits",
            label: "THE SHARED CULPRITS — ANTIPSYCHOTICS, METOCLOPRAMIDE",
            sublabel:
              "Input — the only twin causal-agent cells on the page: both movement rows print the same two words. Both drug classes are D2 receptor antagonists that reach the nigrostriatal dopamine pathway.",
            variant: "input",
          },
          {
            id: "nigrostriatal",
            label: "THE NIGROSTRIATAL DOPAMINE AXIS — D2 signaling sets the striatal balance",
            sublabel:
              "Process — dopamine from the substantia nigra acts on D2-expressing striatal neurons; D2 blockade makes the striatum behave as if dopamine were absent, shifting the direct/indirect balance toward the parkinsonian state.",
            variant: "process",
          },
          {
            id: "parkinson",
            label: "ACUTE BLOCKADE → PARKINSON-LIKE SYNDROME (the down-state)",
            sublabel:
              "Target — while D2 is blocked the pathway is silenced: bradykinesia, rest tremor, and the printed note “Cogwheel rigidity of arm.” A drug-induced DOWN-state that tracks the dose and resolves when the drug stops.",
            variant: "target",
          },
          {
            id: "tardive",
            label: "CHRONIC BLOCKADE → D2 UP-REGULATION → TARDIVE DYSKINESIA (the overshoot)",
            sublabel:
              "Target — with months-to-years of blockade the postsynaptic striatal neurons up-regulate and supersensitize D2 receptors; the system overshoots into involuntary choreiform movements — orofacial, tongue protrusion, lip smacking — which can persist after the drug is withdrawn. This is why the row's NOTES cell prints EMPTY: the story is the chronicity, not a one-line symptom gloss.",
            variant: "target",
          },
          {
            id: "fork",
            label: "SAME DRUGS, OPPOSITE MOVEMENT DISORDERS — TIME IS THE FORK",
            sublabel:
              "Output — the exam rule: antipsychotics and metoclopramide cause BOTH rows. Short exposure / recent dose change → Parkinson-like syndrome (too little striatal dopamine signaling); long exposure → tardive dyskinesia (receptor up-regulation). RIGID EARLY, WRITHING LATE.",
            variant: "output",
          },
        ],
        edges: [
          {
            from: "culprits",
            to: "nigrostriatal",
            label: "D2 receptor antagonism reaching the striatum",
            type: "inhibit",
          },
          {
            from: "nigrostriatal",
            to: "parkinson",
            label: "acute blockade — early, down-state",
          },
          {
            from: "nigrostriatal",
            to: "tardive",
            label: "chronic blockade → compensatory D2 up-regulation — late, overshoot",
          },
          { from: "parkinson", to: "fork", label: "too little D2 signaling" },
          {
            from: "tardive",
            to: "fork",
            label: "supersensitive D2 signaling",
          },
        ],
      },
    },
    {
      id: "organ-system-sweep-map",
      title:
        "The organ-system sweep: how the renal/genitourinary, respiratory, and multiorgan tables route the same drugs through kidney, lung, and every receptor at once",
      context:
        "The other three printed tables (book 250) — the systems router that completes the page",
      flow: {
        nodes: [
          {
            id: "page",
            label: "ONE PAGE, FOUR ORGAN SYSTEMS — the printed partition",
            sublabel:
              "Input — the four tables divide adverse reactions by organ system: neurologic → renal/genitourinary → respiratory → multiorgan. Any drug-reaction stem starts by landing in one of these four lanes.",
            variant: "input",
          },
          {
            id: "renal",
            label: "RENAL/GENITOURINARY — the nephron-and-bladder descent",
            sublabel:
              "Process — Fanconi syndrome (proximal tubule: cisplatin, ifosfamide, expired tetracyclines, tenofovir) → hemorrhagic cystitis (bladder urothelium: cyclophosphamide, ifosfamide — prevent by coadministering with mesna) → interstitial nephritis (hypersensitivity interstitium: the 5 P's — Pee, Pain-free, Penicillins, PPIs, rifamPin, sulfa drugs) → nephrotoxicity (the nephron at large: cisplatin, aminoglycosides, amphotericin, vancomycin).",
            variant: "process",
          },
          {
            id: "respiratory",
            label: "RESPIRATORY — bradykinin accumulation vs alveolar scarring",
            sublabel:
              "Process — dry cough: ACE inhibitors (kininase II degrades bradykinin; inhibiting it lets bradykinin accumulate — an accumulation, not an injury). Pulmonary fibrosis: methotrexate, nitrofurantoin, carmustine, bleomycin, busulfan, amiodarone — “My nose cannot breathe bad air.”",
            variant: "process",
          },
          {
            id: "multiorgan",
            label: "MULTIORGAN — receptor block vs enzyme block",
            sublabel:
              "Process — antimuscarinic: atropine, TCAs, H1-blockers, antipsychotics block the muscarinic receptor systemwide (mydriasis, dry mucosa, tachycardia, urinary retention, altered mentation). Disulfiram-like reaction: 1st-generation sulfonylureas, procarbazine, certain cephalosporins, griseofulvin, metronidazole inhibit aldehyde dehydrogenase — acetaldehyde accumulates after alcohol: “Sorry pals, can’t go mingle.”",
            variant: "process",
          },
          {
            id: "router",
            label: "THE REACTION NAMES THE ORGAN; THE DRUG NAMES THE MECHANISM",
            sublabel:
              "Output — route organ-first, mechanism-second, and remember the double-dippers: cisplatin (peripheral neuropathy + Fanconi + nephrotoxicity), isoniazid (neuropathy + seizures + optic neuritis), antipsychotics (both movement rows + the antimuscarinic row), ifosfamide (Fanconi + hemorrhagic cystitis), tetracyclines (IIH + expired→Fanconi).",
            variant: "output",
          },
        ],
        edges: [
          { from: "page", to: "renal", label: "hematuria, tubulopathy, hypersensitive kidney" },
          { from: "page", to: "respiratory", label: "cough, progressive dyspnea" },
          { from: "page", to: "multiorgan", label: "anticholinergic picture; alcohol-triggered flush" },
          { from: "renal", to: "router", label: "the nephron descent" },
          { from: "respiratory", to: "router", label: "kinin vs scar" },
          { from: "multiorgan", to: "router", label: "receptor block vs enzyme block" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "drug-reaction-neurologic-map",
      title: "The drug-reaction organ-system map (an original KYP diagram)",
      caption:
        "An original KYP diagram of the whole printed page (book 250): the nigrostriatal dopamine fork — the shared culprits (antipsychotics, metoclopramide) blocking D2 and splitting into the acute down-state (Parkinson-like syndrome, cogwheel rigidity of arm) and the chronic overshoot (D2 up-regulation → tardive dyskinesia); the seizure-threshold and peripheral-axon panels (the four threshold-lowerers, the five neuropathy drugs, and isoniazid's three arrows); the seven-row neurologic table strip in printed order; and the organ-system sweep strips — renal/genitourinary (the four-row nephron-and-bladder descent with the 5 P's and mesna), respiratory (bradykinin cough vs the six-drug fibrosis row), and multiorgan (muscarinic receptor block vs aldehyde-dehydrogenase block) — each carrying every printed row and First Aid's red mnemonic lines attributed.",
      notice:
        "Census (pdfimages): ZERO raster images on pdf 272 — the page's four three-column tables ARE its visual assets (teal DRUG REACTION column, red mnemonic letters inside both causal-agent and notes cells — including the red capital P of rifamPin), VLM-read at 120dpi with no margin notes; the dopamine fork, the threshold/axon panels, and the organ-system strips are an ORIGINAL KYP ADAPTATION — every row, causal agent, note, and mnemonic is preserved, but the artwork is KYP's. All four tables are additionally carried verbatim in the note's table blocks. First Aid's own red mnemonic lines are carried attributed; the four ALL-CAPS mnemonics are KYP originals.",
    },
    {
      kind: "table",
      title:
        "Book 250 — Table 1: “Drug reactions—neurologic”, carried verbatim (every printed word, PRINTED row order)",
      intro:
        "Seven rows, printed order: Cinchonism → Parkinson-like syndrome → Peripheral neuropathy → Idiopathic intracranial hypertension → Seizures → Tardive dyskinesia → Visual disturbances. First Aid prints the mnemonic lines in red inside the cells — carried here, attributed. An empty cell prints as “—”.",
      columns: ["DRUG REACTION", "CAUSAL AGENTS", "NOTES"],
      rows: [
        [
          "Cinchonism",
          "Quinidine, quinine",
          "Can present with tinnitus, hearing/vision loss, psychosis, and cognitive impairment",
        ],
        [
          "Parkinson-like syndrome",
          "Antipsychotics, metoclopramide",
          "Cogwheel rigidity of arm",
        ],
        [
          "Peripheral neuropathy",
          "Platinum agents (eg, cisplatin), isoniazid, vincristine, paclitaxel, phenytoin",
          "“Cis, it’s very painful peripherally”",
        ],
        [
          "Idiopathic intracranial hypertension",
          "Corticosteroids, danazol, vitamin A, growth hormones, tetracyclines",
          "“Crime and debt Always grow head tension”",
        ],
        [
          "Seizures",
          "Isoniazid, bupropion, imipenem/cilastatin, tramadol",
          "“With seizures, I bit my tongue”",
        ],
        [
          "Tardive dyskinesia",
          "Antipsychotics, metoclopramide",
          "— (the NOTES cell prints empty)",
        ],
        [
          "Visual disturbances",
          "Topiramate (blurred vision/diplopia, haloes), hydroxychloroquine (↓ visual acuity, visual field defects), digoxin (yellow-tinged vision), isoniazid (optic neuritis), ivabradine (luminous phenomena), PDE-5 inhibitors (blue-tinged vision), ethambutol (color vision changes), vigabatrin (tunnel vision)",
          "“These horrible drugs iirritate Precious eyes”",
        ],
      ],
      caption:
        "Verbatim carries, documented: the visual-disturbances mnemonic prints with the source's own DOUBLE i — “iirritate” — two separate red mnemonic letters (i = Isoniazid, i = Ivabradine) before black “rritate” (raw-span adjudicated; the 120dpi VLM read smoothed it to a single i). The apostrophe in “it’s” prints as U+2019. The tardive dyskinesia NOTES cell prints EMPTY (VLM + raw-span confirmed) — the two movement rows share IDENTICAL causal agents and differ only in the receptor-adaptation direction. “Growth hormones” prints plural. First Aid's red in-cell mnemonics (“Cis, it’s very painful peripherally” · “Crime and debt Always grow head tension” · “With seizures, I bit my tongue” · “These horrible drugs iirritate Precious eyes”) are the source's own, reproduced as printed.",
    },
    {
      kind: "table",
      title:
        "Book 250 — Table 2: “Drug reactions—renal/genitourinary”, carried verbatim",
      intro:
        "Four rows, printed order: Fanconi syndrome → Hemorrhagic cystitis → Interstitial nephritis → Nephrotoxicity. The interstitial-nephritis row carries First Aid's in-cell 5-P mnemonic — red capital P's printed INSIDE the causal-agent words — carried here, attributed.",
      columns: ["DRUG REACTION", "CAUSAL AGENTS", "NOTES"],
      rows: [
        [
          "Fanconi syndrome",
          "Cisplatin, ifosfamide, expired tetracyclines, tenofovir",
          "— (the NOTES cell prints empty)",
        ],
        [
          "Hemorrhagic cystitis",
          "Cyclophosphamide, ifosfamide",
          "Prevent by coadministering with mesna",
        ],
        [
          "Interstitial nephritis",
          "Diuretics (Pee), NSAIDs (Pain-free), Penicillins and cephalosporins, PPIs, rifamPin, sulfa drugs",
          "“Remember the 5 P’s”",
        ],
        [
          "Nephrotoxicity",
          "Cisplatin, aminoglycosides, amphotericin, vancomycin",
          "— (the NOTES cell prints empty)",
        ],
      ],
      caption:
        "Verbatim carry, documented: the causal-agent cell prints “rifamPin” with a capital red P inside the word (raw-span confirmed: a red-bold P glyph sits between the black “rifam” and “in”), plus red P's on Pee, Pain-free, Penicillins, and PPIs — and a red “s” on sulfa. The apostrophe in “5 P’s” prints as U+2019. Fanconi syndrome and nephrotoxicity print empty NOTES cells. The cisplatin/ifosfamide overlap is real and tested: cisplatin appears HERE twice (Fanconi + nephrotoxicity) and once in the neurologic table (peripheral neuropathy); ifosfamide appears twice (Fanconi + hemorrhagic cystitis), while cyclophosphamide appears only in hemorrhagic cystitis — mesna prevents only that row.",
    },
    {
      kind: "table",
      title:
        "Book 250 — Table 3: “Drug reactions—respiratory”, carried verbatim",
      intro:
        "Two rows, printed order: Dry cough → Pulmonary fibrosis. Text-layer quirk: the NOTES column header extracts AFTER both data rows (an interleave artifact of the cache layer, documented in the census) — the printed table is the ordinary three-column grid.",
      columns: ["DRUG REACTION", "CAUSAL AGENTS", "NOTES"],
      rows: [
        [
          "Dry cough",
          "ACE inhibitors",
          "— (the NOTES cell prints empty)",
        ],
        [
          "Pulmonary fibrosis",
          "Methotrexate, nitrofurantoin, carmustine, bleomycin, busulfan, amiodarone",
          "“My nose cannot breathe bad air”",
        ],
      ],
      caption:
        "The two rows are two different mechanisms: the dry cough is bradykinin ACCUMULATION (ACE = kininase II; inhibiting it spares bradykinin — which also explains the angioedema), while the fibrosis row is six separately injurious drugs (Methotrexate, Nitrofurantoin, Carmustine, Bleomycin, Busulfan, Amiodarone — First Aid's red mnemonic “My nose cannot breathe bad air,” the initial letters carried attributed). The causal-agent cell ends exactly as printed: “bleomycin, busulfan, amiodarone.”",
    },
    {
      kind: "table",
      title:
        "Book 250 — Table 4: “Drug reactions—multiorgan”, carried verbatim",
      intro:
        "Two rows, printed order: Antimuscarinic → Disulfiram-like reaction. Text-layer quirk: the footer slug and timestamp extract BETWEEN the disulfiram causal agents and the NOTES header + mnemonic (an interleave artifact, documented in the census) — the printed table is the ordinary three-column grid.",
      columns: ["DRUG REACTION", "CAUSAL AGENTS", "NOTES"],
      rows: [
        [
          "Antimuscarinic",
          "Atropine, TCAs, H1-blockers, antipsychotics",
          "— (the NOTES cell prints empty)",
        ],
        [
          "Disulfiram-like reaction",
          "1st-generation sulfonylureas, procarbazine, certain cephalosporins, griseofulvin, metronidazole",
          "“Sorry pals, can’t go mingle”",
        ],
      ],
      caption:
        "The two rows are two different BLOCKS: the antimuscarinic row is receptor blockade (the muscarinic receptor, systemwide), and the disulfiram-like row is enzyme blockade (aldehyde dehydrogenase → acetaldehyde accumulation when alcohol is consumed — flushing, nausea, vomiting). “Sorry pals, can’t go mingle” is First Aid's red mnemonic for the sulfonylureas, Procarbazine, Cephalosporins, Griseofulvin, and metronidazole (carried attributed; the apostrophe in “can’t” prints as U+2019). “H1-blockers” prints with a subscript 1 (the cache layer merges it); the antimuscarinic NOTES cell prints empty — and note the antipsychotics' THIRD appearance on this page (both movement rows + this row).",
    },
    {
      kind: "compare",
      title:
        "The twin rows — Parkinson-like syndrome vs tardive dyskinesia (the identical causal agents)",
      intro:
        "The only two rows on the page that print the SAME causal agents — the page's most-tested structural fact. Same drugs, opposite movement disorders; time and receptor adaptation are the entire difference.",
      columns: ["PARKINSON-LIKE SYNDROME", "TARDIVE DYSKINESIA"],
      rows: [
        {
          label: "Causal agents (printed, both rows)",
          a: "Antipsychotics, metoclopramide",
          b: "Antipsychotics, metoclopramide — identical; the rows are separated by NOTHING in the causal-agents column",
        },
        {
          label: "Exposure timeline",
          a: "Acute or recent exposure (or a recent dose increase) — appears while D2 blockade is active",
          b: "Chronic exposure — months to years; may emerge during treatment or persist after withdrawal",
        },
        {
          label: "Receptor state (the mechanism)",
          a: "D2 BLOCKED — the nigrostriatal pathway is silenced: a drug-induced DOWN-state (functional dopamine deficiency)",
          b: "D2 UP-REGULATED — chronic blockade forces postsynaptic receptor supersensitivity: an OVERSHOOT state",
        },
        {
          label: "Clinical picture",
          a: "Bradykinesia, rest tremor, and the printed note “Cogwheel rigidity of arm”",
          b: "Involuntary choreiform movements — orofacial (tongue protrusion, lip smacking), often irreversible",
        },
        {
          label: "The printed NOTES cell",
          a: "“Cogwheel rigidity of arm” — one sign, because the syndrome is the mirror of Parkinson disease",
          b: "EMPTY — the story is the chronicity and the up-regulation, not a one-line symptom gloss",
        },
        {
          label: "How the exam asks it",
          a: "A patient on a NEW antipsychotic or metoclopramide develops rigidity → this row (RIGID EARLY)",
          b: "A patient on YEARS of the same drug develops writhing orofacial movements → this row (WRITHING LATE)",
        },
      ],
    },
    {
      kind: "steps",
      title: "Reading any drug-reaction stem in four moves",
      intro:
        "The KYP protocol for this page — route every reaction to the pathway it disrupts, then let the row name the drug.",
      steps: [
        {
          label: "NAME THE SIGN — what does the patient actually show?",
          detail:
            "A movement disorder · a seizure · distal symmetric numbness · headache with papilledema · a recolored visual field · tinnitus with confusion · hematuria · an inflamed-looking kidney · a dry cough · progressive dyspnea · an anticholinergic picture · flushing and vomiting after alcohol. The sign, not the drug name, opens the question.",
        },
        {
          label: "NAME THE PATHWAY the sign implies",
          detail:
            "Movement → the nigrostriatal dopamine axis (then ask HOW LONG) · seizure → the seizure threshold (GABA/pyridoxine) · distal symmetric sensory loss → the peripheral axon (microtubules, axonal transport) · tinnitus + hearing/vision loss + psychosis + cognitive impairment → the cochleovestibular/CNS cinchona picture · colored vision → the retina/optic nerve · hematuria → the bladder urothelium (acrolein) · fever + rash + eosinophilia + creatinine rise → the interstitial hypersensitivity response · a dry cough on a new antihypertensive → bradykinin accumulation · restriction + dyspnea → alveolar scarring · mydriasis + dry mucosa + tachycardia + urinary retention → the muscarinic receptor · a hot flushed reaction to alcohol → aldehyde dehydrogenase.",
        },
        {
          label: "NAME THE ROW — the fifteen printed rows are the answer key",
          detail:
            "Table 1 (neurologic): cinchonism · Parkinson-like syndrome · peripheral neuropathy · idiopathic intracranial hypertension · seizures · tardive dyskinesia · visual disturbances. Table 2 (renal/GU): Fanconi syndrome · hemorrhagic cystitis · interstitial nephritis · nephrotoxicity. Table 3 (respiratory): dry cough · pulmonary fibrosis. Table 4 (multiorgan): antimuscarinic · disulfiram-like reaction.",
        },
        {
          label: "NAME THE DRUG — then check its other appearances",
          detail:
            "The double-dippers are the exam's favorite answer to “which of this patient's medications is responsible”: isoniazid (peripheral neuropathy + seizures + optic neuritis — three neurologic rows), cisplatin (peripheral neuropathy + Fanconi + nephrotoxicity — three rows across two tables), antipsychotics (Parkinson-like + tardive dyskinesia + antimuscarinic — three rows across two tables), metoclopramide (both movement rows), ifosfamide (Fanconi + hemorrhagic cystitis), tetracyclines (idiopathic intracranial hypertension + expired→Fanconi), cephalosporins (interstitial nephritis + disulfiram-like).",
        },
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title: "The exam's favorite cross-row facts — the double-dippers and the empty cell",
      body:
        "Three structural facts about this page outscore any single row memorized alone. (1) THE TWIN ROWS: antipsychotics and metoclopramide are the causal agents of BOTH Parkinson-like syndrome and tardive dyskinesia — a stem's TIMELINE (weeks vs years) is the discriminator, and tardive dyskinesia's NOTES cell prints empty. (2) THE TRIPLE NEURO TOXIN: isoniazid appears in THREE neurologic rows — peripheral neuropathy (pyridoxine-depleted axons), seizures (the threshold row), and visual disturbances (optic neuritis) — and pyridoxine (vitamin B6) supplementation is the thread that ties the first two. (3) THE DOUBLE-DIPPERS DOWN THE PAGE: cisplatin (neuropathy + Fanconi + nephrotoxicity) and antipsychotics (both movement rows + the antimuscarinic row) each appear three times across two tables; ifosfamide twice (Fanconi + hemorrhagic cystitis — while cyclophosphamide only causes the cystitis, and mesna prevents ONLY that row). When a stem lists five drugs and asks which caused the finding, scan for the drug with multiple appearances on this page.",
    },
    {
      kind: "callout",
      variant: "memory",
      title: "First Aid's own red text — the mnemonic layer printed on the page",
      body:
        "This page prints seven mnemonic lines in red inside the cells (attributed, verbatim, not KYP's): “Cis, it’s very painful peripherally” (peripheral neuropathy — Cisplatin, Isoniazid, Vincristine, Paclitaxel, Phenytoin); “Crime and debt Always grow head tension” (idiopathic intracranial hypertension — Corticosteroids, Danazol, vitamin A, Growth hormones, Tetracyclines); “With seizures, I bit my tongue” (Isoniazid, Bupropion, Imipenem, Tramadol); “These horrible drugs iirritate Precious eyes” (visual disturbances — Topiramate, Hydroxychloroquine, Digoxin, Isoniazid, Ivabradine, PDE-5, Ethambutol, Vigabatrin — the double i carries one letter each for Isoniazid and Ivabradine); “Remember the 5 P’s” with the in-cell red P's (Pee, Pain-free, Penicillins, PPIs, rifamPin); “My nose cannot breathe bad air” (pulmonary fibrosis — Methotrexate, Nitrofurantoin, Carmustine, Bleomycin, Busulfan, Amiodarone); and “Sorry pals, can’t go mingle” (disulfiram-like — Sulfonylureas, Procarbazine, Cephalosporins, Griseofulvin, metronidazole). The four ALL-CAPS mnemonics in the Memory section below are KYP originals layered on top.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 58-year-old woman with diabetic gastropareses managed with metoclopramide for two years develops repetitive tongue protrusion and lip smacking; there is no cogwheel rigidity and no rest tremor.",
        discriminator:
          "Chronic D2 blockade → compensatory striatal D2 up-regulation — the OVERSHOOT row, in a patient on one of the two twin-row drugs",
        concept: "The tardive dyskinesia row (and its identical twin, Parkinson-like syndrome)",
        answer:
          "Tardive dyskinesia — antipsychotics and metoclopramide are the causal agents of BOTH movement rows on the page: acute blockade silences the nigrostriatal pathway (Parkinson-like syndrome, “Cogwheel rigidity of arm”), while years of blockade up-regulate the receptor into involuntary choreiform orofacial movements that can persist after withdrawal. The two-year timeline and the chorea point to the tardive row; the empty printed NOTES cell marks it as the chronicity row.",
      },
      {
        stem: "A 24-year-old woman undergoing treatment for active pulmonary tuberculosis presents with a first generalized seizure; she also reports burning pain in both feet. She takes no other medications and no vitamin supplements.",
        discriminator:
          "Isoniazid without pyridoxine — the one drug on the page that appears in THREE neurologic rows",
        concept: "The seizures row + the peripheral neuropathy row (isoniazid's triple appearance)",
        answer:
          "Isoniazid. The printed seizures row reads “Isoniazid, bupropion, imipenem/cilastatin, tramadol” (“With seizures, I bit my tongue”) — INH lowers the seizure threshold via pyridoxine (B6) depletion → ↓ GABA. The same depletion strips the longest axons (peripheral neuropathy — “Cis, it’s very painful peripherally”), and isoniazid's optic neuritis appears in the visual-disturbances row. The double presentation (seizure + peripheral neuropathy) in an unsupplemented TB patient is the isoniazid fingerprint; the seizure threshold is also lowered by bupropion, imipenem/cilastatin, and tramadol.",
      },
      {
        stem: "A 68-year-old man on long-term medications describes that recently “everything looks yellow-tinged”; another patient on sildenafil reports blue-tinted vision, and a third on ethambutol fails red-green color testing.",
        discriminator:
          "The COLOR and QUALITY of the visual complaint maps to one drug in the eight-drug visual-disturbances row",
        concept: "The visual disturbances row — pattern-matching the visual effect",
        answer:
          "The printed row pairs each drug with its effect: topiramate (blurred vision/diplopia, haloes); hydroxychloroquine (↓ visual acuity, visual field defects); digoxin (yellow-tinged vision); isoniazid (optic neuritis); ivabradine (luminous phenomena); PDE-5 inhibitors (blue-tinged vision); ethambutol (color vision changes); vigabatrin (tunnel vision) — “These horrible drugs iirritate Precious eyes.” Yellow = digoxin, blue = PDE-5 inhibitors, red-green loss = ethambutol, tunnel = vigabatrin.",
      },
      {
        stem: "A 45-year-old man being treated with metronidazole for a parasitic infection drinks beer at a wedding and develops flushing, headache, nausea, and vomiting within the hour.",
        discriminator:
          "Alcohol-triggered flushing + GI upset in a patient on an antiprotozoal/antimicrobial — aldehyde dehydrogenase inhibition",
        concept: "The disulfiram-like reaction row (multiorgan table)",
        answer:
          "Disulfiram-like reaction — the printed row: “1st-generation sulfonylureas, procarbazine, certain cephalosporins, griseofulvin, metronidazole” (“Sorry pals, can’t go mingle”). These drugs inhibit aldehyde dehydrogenase; alcohol → acetaldehyde accumulation → flushing, nausea, vomiting, headache. The parallel renal/GU row to pair with counseling: cyclophosphamide and ifosfamide cause hemorrhagic cystitis — prevent by coadministering with mesna.",
      },
    ],
    traps: [
      {
        a: "Parkinson-like syndrome (acute D2 blockade — the down-state)",
        b: "Tardive dyskinesia (chronic D2 blockade → up-regulation — the overshoot)",
        whyConfused:
          "The causal agents are IDENTICAL — antipsychotics, metoclopramide — in both printed rows",
        keyDifference:
          "Time and receptor direction: recent exposure silences the nigrostriatal pathway (bradykinesia, “Cogwheel rigidity of arm”); months-to-years of blockade up-regulate D2 into choreiform orofacial movements that can persist after withdrawal",
        clue:
          "RIGID EARLY, WRITHING LATE — the timeline in the stem is the discriminator, never the drug name",
      },
      {
        a: "Isoniazid's three neurologic appearances (peripheral neuropathy · seizures · optic neuritis)",
        b: "Three different drugs each causing one effect",
        whyConfused:
          "Most rows list several interchangeable drugs, so a single drug is assumed to own a single row",
        keyDifference:
          "Isoniazid appears in THREE rows on this page — the neuropathy row (“Cis, it’s very painful peripherally”), the seizures row (“With seizures, I bit my tongue”), and the visual-disturbances row (optic neuritis) — with pyridoxine (B6) depletion as the thread tying the first two",
        clue:
          "An unsupplemented TB patient with ANY neurologic complaint — numb feet, a seizure, or vision change — answers isoniazid before any other drug",
      },
      {
        a: "Digoxin — yellow-tinged vision",
        b: "PDE-5 inhibitors — blue-tinged vision; ethambutol — color vision changes",
        whyConfused:
          "All three sit in the same eight-drug visual-disturbances row, so their effects blur together",
        keyDifference:
          "The printed cell color-codes the answer: digoxin (yellow-tinged vision), PDE-5 inhibitors (blue-tinged vision), ethambutol (color vision changes), vigabatrin (tunnel vision), topiramate (blurred vision/diplopia, haloes), hydroxychloroquine (↓ visual acuity, visual field defects), isoniazid (optic neuritis), ivabradine (luminous phenomena)",
        clue:
          "The COLOR named in the stem names the drug: yellow = digoxin, blue = sildenafil-class, red-green loss = ethambutol, tunnel = vigabatrin",
      },
      {
        a: "Hemorrhagic cystitis (cyclophosphamide, ifosfamide — prevented by mesna)",
        b: "Fanconi syndrome (cisplatin, ifosfamide, expired tetracyclines, tenofovir) and nephrotoxicity (cisplatin, aminoglycosides, amphotericin, vancomycin)",
        whyConfused:
          "All three sit in the renal/genitourinary table, and ifosfamide appears in two of the rows",
        keyDifference:
          "The target tissue and the antidote: hemorrhagic cystitis is BLADDER urothelium injury (acrolein) and is the only row prevented by coadministering mesna; Fanconi is PROXIMAL TUBULE dysfunction; nephrotoxicity is the nephron at large. Cisplatin causes Fanconi + nephrotoxicity (and peripheral neuropathy) but NOT hemorrhagic cystitis; cyclophosphamide causes only the cystitis",
        clue:
          "A question about a preventive co-drug → mesna + cyclophosphamide/ifosfamide → hemorrhagic cystitis row, every time",
      },
    ],
    pivots: [
      {
        lookAlike:
          "Any movement disorder in a psychiatric patient or a patient on an antiemetic — which of the two twin rows?",
        differentiator:
          "Ask HOW LONG and WHAT MOVEMENT: recent exposure to antipsychotics/metoclopramide with bradykinesia and “Cogwheel rigidity of arm” → Parkinson-like syndrome (acute blockade, down-state); years of exposure with choreiform orofacial movements (tongue protrusion, lip smacking) → tardive dyskinesia (up-regulation, overshoot)",
        correctPath:
          "Same causal agents → the fork is TIME + receptor direction: RIGID EARLY, WRITHING LATE",
      },
      {
        lookAlike:
          "Any neurologic complaint in a patient on tuberculosis therapy — neuropathy, seizure, or vision change?",
        differentiator:
          "Isoniazid owns three rows of the neurologic table: distal symmetric painful neuropathy (pyridoxine-depleted axons), seizures (threshold lowered — the row with bupropion, imipenem/cilastatin, tramadol), and optic neuritis (the visual-disturbances row); rifampin, pyrazinamide, and ethambutol each own different rows (ethambutol → color vision changes)",
        correctPath:
          "Route the INH patient by complaint to one of its three rows — and remember pyridoxine (B6) supplementation as the prevention that ties the neuropathy and seizure rows together",
      },
      {
        lookAlike:
          "Any drug-reaction stem anywhere in the body — where does the question live?",
        differentiator:
          "Route organ-system first: neurologic (movement, seizure, nerve, ear, eye, cognition) → renal/genitourinary (tubule, bladder, interstitium, nephron) → respiratory (cough vs fibrosis) → multiorgan (anticholinergic picture vs alcohol-triggered flush); THEN route by pathway, THEN name the row — and check the double-dippers (isoniazid ×3, cisplatin ×3, antipsychotics ×3) before answering",
        correctPath:
          "Organ system → pathway → row → drug (and its other appearances): the reaction names the organ; the drug names the mechanism",
      },
    ],
    miniCase: {
      vignette:
        "A 58-year-old woman with type 2 diabetes mellitus and diabetic gastroparesis has been maintained on metoclopramide for two years. Her husband reports that for the past several months she has had constant involuntary movements — repetitive tongue protrusion, lip smacking, and writhing finger movements — that she cannot suppress. Neurologic examination shows no cogwheel rigidity, no rest tremor, and normal bradykinesia testing. Which of the following best explains her movement disorder?",
      question:
        "Identify the mechanism — choose the option that correctly routes this drug to this movement disorder.",
      options: [
        {
          label:
            "Chronic blockade of striatal D2 receptors has induced compensatory postsynaptic D2 receptor up-regulation, and the supersensitive pathway now generates involuntary choreiform movements (tardive dyskinesia)",
          text: "The overshoot row — years of blockade, receptor up-regulated.",
          correct: true,
          why:
            "Correct. The page prints metoclopramide (with antipsychotics) as the causal agent of BOTH movement rows — and the two-year timeline plus choreiform orofacial movements select the chronic row. Acute D2 blockade silences the nigrostriatal pathway (Parkinson-like syndrome, cogwheel rigidity of arm); with months-to-years of blockade the postsynaptic striatal neurons up-regulate and supersensitize D2, and the system overshoots into the involuntary choreiform movements of tardive dyskinesia, which can persist after the drug is withdrawn — which is exactly why that row's printed NOTES cell is empty: the story is the chronicity and the adaptation, not a one-line symptom gloss.",
        },
        {
          label:
            "Acute blockade of striatal D2 receptors has silenced the nigrostriatal pathway, producing the Parkinson-like syndrome with cogwheel rigidity of arm",
          text: "The twin row — right receptor, wrong direction and timeline.",
          why:
            "Wrong row of the fork. The causal agents are identical — antipsychotics and metoclopramide print in BOTH movement rows — but this is the ACUTE down-state: bradykinesia, rest tremor, and the printed note “Cogwheel rigidity of arm.” The patient has been on the drug for two YEARS and has chorea with explicitly absent rigidity and tremor, which is the receptor-adaptation overshoot, not the blockade state. The distractor works because it names the correct receptor and the correct drug class; only the TIME and the DIRECTION of the receptor change separate the rows.",
        },
        {
          label:
            "Metoclopramide has blocked muscarinic receptors systemwide (the antimuscarinic row), and the movements are a cholinergic-manifestation of antimuscarinic toxicity",
          text: "Wrong table — the multiorgan row misapplied.",
          why:
            "Wrong row AND wrong mechanism class. The antimuscarinic row prints “Atropine, TCAs, H1-blockers, antipsychotics” — metoclopramide is not in it, and antimuscarinic toxicity presents as mydriasis, dry mucosa, tachycardia, urinary retention, and altered mentation, not choreiform movements. The distractor is tempting because ANTIPSYCHOTICS do appear in the antimuscarinic row (their anticholinergic burden) — but metoclopramide's dyskinesia tracks D2, and the patient has none of the anticholinergic findings.",
        },
        {
          label:
            "Metoclopramide's prokinetic agonism at enteric 5-HT4 receptors has overstimulated the enteric nervous system, with overflow into somatic motor circuits",
          text: "A real mechanism of the drug — but not this toxicity's.",
          why:
            "Wrong mechanism. Metoclopramide IS a prokinetic 5-HT4 agonist (and a 5-HT3 antagonist at higher doses) — that is its antiemetic/gastroparesis mechanism — but its adverse motor effects are attributed on this page to its D2 receptor antagonism in the nigrostriatal pathway, and the movement disorder produced by that blockade is either the acute down-state (Parkinson-like) or the chronic overshoot (tardive dyskinesia). No 5-HT4 enteric pathway appears anywhere on the page; the option smuggles in the drug's therapeutic pharmacology to explain its toxicity.",
        },
      ],
      reasoning:
        "The stem hands over three routing facts: the drug (metoclopramide), the duration (two years — chronic), and the sign (involuntary choreiform orofacial movements with NO rigidity or tremor). Routing by the page: metoclopramide appears in exactly two rows, both movement rows, with identical printed causal agents — so the discriminator cannot be the drug; it must be the receptor-adaptation direction. Acute blockade = the down-state (Parkinson-like syndrome, “Cogwheel rigidity of arm”); chronic blockade = compensatory D2 up-regulation = the overshoot (tardive dyskinesia — the row whose NOTES cell prints empty because its entire content is the chronicity). The timeline and the chorea select the overshoot (the correct answer). Each distractor breaks one link: option B keeps the right receptor but reverses the time and direction (the twin row — the single most tempting error on this page); option C jumps to a different table (the antimuscarinic row), where metoclopramide does not even print and the phenotype is anticholinergic, not choreiform; option D borrows the drug's real therapeutic mechanism (5-HT4 agonism) and invents an overflow story no row supports. Route by drug → twin rows → fork on TIME, and only the up-regulation option survives.",
    },
  },
  mnemonics: [
    {
      code: "RIGID EARLY, WRITHING LATE",
      meaning:
        "The two movement rows print IDENTICAL causal agents — antipsychotics, metoclopramide — so only the receptor's adaptation history separates them. EARLY (acute D2 blockade): the nigrostriatal pathway is silenced → bradykinesia and “Cogwheel rigidity of arm” — RIGID. LATE (months-to-years of blockade): postsynaptic D2 receptors up-regulate and supersensitize → involuntary choreiform orofacial movements — WRITHING — which can persist after withdrawal.",
      memorizes:
        "Which of the two twin movement rows a given antipsychotic/metoclopramide stem is asking for",
      whenToUse:
        "Any movement-disorder vignette in a psychiatric patient or a patient on an antiemetic — read the timeline before naming the reaction",
      clinical:
        "A patient started on the drug weeks ago who becomes rigid is in the down-state (the Parkinson-like row); a patient on years of therapy who develops tongue protrusion and lip smacking is in the overshoot (the tardive row — potentially irreversible, and the printed NOTES cell is empty precisely because chronicity is its whole story).",
    },
    {
      code: "INH, THE TRIPLE NEURO TOXIN",
      meaning:
        "Isoniazid is the only drug that appears in THREE rows of the neurologic table: peripheral neuropathy (pyridoxine-depleted axons — “Cis, it’s very painful peripherally”), seizures (threshold lowered — “With seizures, I bit my tongue”), and visual disturbances (optic neuritis — “These horrible drugs iirritate Precious eyes”). Pyridoxine (vitamin B6) depletion is the thread that ties the neuropathy to the seizure risk.",
      memorizes:
        "Isoniazid's three neurologic adverse effects and the supplement that prevents the first two",
      whenToUse:
        "Any neurologic complaint in a patient on tuberculosis therapy — numb feet, a first seizure, or a vision change — before considering any other drug",
      clinical:
        "An unsupplemented TB patient with a seizure AND burning distal neuropathy has the isoniazid fingerprint; give pyridoxine (B6) with isoniazid to prevent the neuropathy (and treat INH overdose seizures with pyridoxine).",
    },
    {
      code: "THE DOUBLE-DIPPERS",
      meaning:
        "The drugs that appear on MORE THAN ONE row of this page are the exam's answer key to “which medication caused it”: isoniazid ×3 (neuropathy, seizures, optic neuritis), cisplatin ×3 (peripheral neuropathy, Fanconi syndrome, nephrotoxicity), antipsychotics ×3 (Parkinson-like, tardive dyskinesia, antimuscarinic), metoclopramide ×2 (both movement rows), ifosfamide ×2 (Fanconi, hemorrhagic cystitis), tetracyclines ×2 (idiopathic intracranial hypertension, expired→Fanconi), cephalosporins ×2 (interstitial nephritis, disulfiram-like).",
      memorizes:
        "Which drugs recur across the four tables — the cross-row appearances that turn a one-drug list into a multi-organ liability map",
      whenToUse:
        "Any polypharmacy stem asking which of five listed drugs explains a finding — scan the list for the double-dippers first",
      clinical:
        "A chemotherapy patient with numb feet AND a Fanconi-pattern tubulopathy has cisplatin written all over both tables; a psychiatric patient with rigidity AND dry mouth/urinary retention has antipsychotics in three rows.",
    },
    {
      code: "RECEPTOR BLOCK, ENZYME BLOCK",
      meaning:
        "The multiorgan table's two rows are two different kinds of blockade. RECEPTOR BLOCK: atropine, TCAs, H1-blockers, antipsychotics block the muscarinic receptor systemwide — mydriasis, dry mucosa, tachycardia, urinary retention, altered mentation. ENZYME BLOCK: 1st-generation sulfonylureas, procarbazine, certain cephalosporins, griseofulvin, metronidazole inhibit aldehyde dehydrogenase — acetaldehyde accumulates only when alcohol is consumed: flushing, nausea, vomiting (“Sorry pals, can’t go mingle”).",
      memorizes:
        "The two multiorgan rows and why their phenotypes look so different — a diffuse anticholinergic toxidrome vs an alcohol-triggered reaction",
      whenToUse:
        "Any anticholinergic-appearing patient (route to the receptor row) and any flushing/vomiting-after-alcohol stem (route to the enzyme row)",
      clinical:
        "Counsel every patient starting metronidazole, griseofulvin, or a first-generation sulfonylurea to avoid alcohol; recognize the antimuscarinic row's four drug classes together because their overdose phenotypes converge on the same receptor.",
    },
  ],
  rapidReview: {
    s30: [
      "Cinchonism — quinidine, quinine: can present with tinnitus, hearing/vision loss, psychosis, and cognitive impairment",
      "Parkinson-like syndrome — antipsychotics, metoclopramide: cogwheel rigidity of arm (acute D2 blockade)",
      "Tardive dyskinesia — antipsychotics, metoclopramide (chronic D2 blockade → up-regulation; the NOTES cell prints empty)",
      "Peripheral neuropathy — platinum agents (eg, cisplatin), isoniazid, vincristine, paclitaxel, phenytoin — “Cis, it’s very painful peripherally”",
      "Idiopathic intracranial hypertension — corticosteroids, danazol, vitamin A, growth hormones, tetracyclines — “Crime and debt Always grow head tension”",
      "Seizures — isoniazid, bupropion, imipenem/cilastatin, tramadol — “With seizures, I bit my tongue”",
      "Visual disturbances — topiramate (blurred vision/diplopia, haloes), hydroxychloroquine (↓ visual acuity, visual field defects), digoxin (yellow-tinged vision), isoniazid (optic neuritis), ivabradine (luminous phenomena), PDE-5 inhibitors (blue-tinged vision), ethambutol (color vision changes), vigabatrin (tunnel vision)",
      "Renal/GU: Fanconi (cisplatin, ifosfamide, expired tetracyclines, tenofovir) · hemorrhagic cystitis (cyclophosphamide, ifosfamide — prevent by coadministering with mesna) · interstitial nephritis (Diuretics [Pee], NSAIDs [Pain-free], Penicillins and cephalosporins, PPIs, rifamPin, sulfa drugs — Remember the 5 P’s) · nephrotoxicity (cisplatin, aminoglycosides, amphotericin, vancomycin)",
      "Respiratory: dry cough (ACE inhibitors) · pulmonary fibrosis (methotrexate, nitrofurantoin, carmustine, bleomycin, busulfan, amiodarone — “My nose cannot breathe bad air”)",
      "Multiorgan: antimuscarinic (atropine, TCAs, H1-blockers, antipsychotics) · disulfiram-like reaction (1st-generation sulfonylureas, procarbazine, certain cephalosporins, griseofulvin, metronidazole — “Sorry pals, can’t go mingle”)",
    ],
    m3: [
      "RIGID EARLY, WRITHING LATE — the twin rows share antipsychotics + metoclopramide; acute blockade parks them, chronic up-regulation makes them writhe",
      "INH, THE TRIPLE NEURO TOXIN — peripheral neuropathy, seizures, optic neuritis; pyridoxine is the thread",
      "THE DOUBLE-DIPPERS — isoniazid ×3, cisplatin ×3, antipsychotics ×3, ifosfamide ×2, metoclopramide ×2, tetracyclines ×2, cephalosporins ×2",
      "RECEPTOR BLOCK, ENZYME BLOCK — antimuscarinic = muscarinic receptor blockade; disulfiram-like = aldehyde dehydrogenase blockade after alcohol",
    ],
    m10: [
      "The four printed tables in order: neurologic (7 rows) → renal/genitourinary (4) → respiratory (2) → multiorgan (2) — the neurologic row order is cinchonism, Parkinson-like, peripheral neuropathy, IIH, seizures, tardive dyskinesia, visual disturbances",
      "The visual-disturbances mnemonic prints with a DOUBLE i — “iirritate” — two separate red mnemonic letters (Isoniazid + Ivabradine); the apostrophes in it’s / 5 P’s / can’t print as U+2019",
      "The interstitial-nephritis cell prints the 5-P mnemonic IN-CELL with red capital P's: Pee, Pain-free, Penicillins, PPIs, rifamPin (capital red P inside the word)",
      "Empty printed NOTES cells: tardive dyskinesia, Fanconi syndrome, nephrotoxicity, dry cough, antimuscarinic",
      "Text-layer interleave artifacts: the respiratory table's NOTES header extracts after both data rows; the multiorgan table's footer slug extracts between the causal agents and the NOTES header + mnemonic; “SEC TION II” header artifact",
      "The pulmonary fibrosis causal-agent cell ends exactly “…bleomycin, busulfan, amiodarone”; “growth hormones” prints plural in the IIH row; “H1-blockers” prints with a subscript 1",
    ],
  },
  recall: [
    {
      q: "The four printed table titles, in printed order.",
      a: "“Drug reactions—neurologic” → “Drug reactions—renal/genitourinary” → “Drug reactions—respiratory” → “Drug reactions—multiorgan” — all four under the banner PHARMACOLOGY—TOXICITIES AND ADVERSE EFFECTS, all with columns DRUG REACTION / CAUSAL AGENTS / NOTES.",
    },
    {
      q: "The twin movement rows — both causal-agent lists and the printed notes, verbatim.",
      a: "Parkinson-like syndrome: Antipsychotics, metoclopramide — “Cogwheel rigidity of arm.” Tardive dyskinesia: Antipsychotics, metoclopramide — the NOTES cell prints EMPTY. The same drugs; acute blockade (down-state) vs chronic blockade → D2 up-regulation (overshoot).",
    },
    {
      q: "The seizures row and the peripheral neuropathy row, verbatim with their mnemonics.",
      a: "Seizures: Isoniazid, bupropion, imipenem/cilastatin, tramadol — “With seizures, I bit my tongue.” Peripheral neuropathy: Platinum agents (eg, cisplatin), isoniazid, vincristine, paclitaxel, phenytoin — “Cis, it’s very painful peripherally.”",
    },
    {
      q: "The visual disturbances row — all eight causal agents with their printed effects.",
      a: "Topiramate (blurred vision/diplopia, haloes); hydroxychloroquine (↓ visual acuity, visual field defects); digoxin (yellow-tinged vision); isoniazid (optic neuritis); ivabradine (luminous phenomena); PDE-5 inhibitors (blue-tinged vision); ethambutol (color vision changes); vigabatrin (tunnel vision) — “These horrible drugs iirritate Precious eyes.”",
    },
    {
      q: "The interstitial nephritis row, verbatim — including the capital-P quirk.",
      a: "Diuretics (Pee), NSAIDs (Pain-free), Penicillins and cephalosporins, PPIs, rifamPin, sulfa drugs — “Remember the 5 P’s.” The causal-agent cell itself carries First Aid's in-cell mnemonic: red capital P's printed inside the words, including the capital red P inside “rifamPin.”",
    },
    {
      q: "The renal/genitourinary table's other three rows, verbatim.",
      a: "Fanconi syndrome: Cisplatin, ifosfamide, expired tetracyclines, tenofovir. Hemorrhagic cystitis: Cyclophosphamide, ifosfamide — prevent by coadministering with mesna. Nephrotoxicity: Cisplatin, aminoglycosides, amphotericin, vancomycin.",
    },
    {
      q: "The respiratory table, verbatim.",
      a: "Dry cough: ACE inhibitors. Pulmonary fibrosis: Methotrexate, nitrofurantoin, carmustine, bleomycin, busulfan, amiodarone — “My nose cannot breathe bad air.”",
    },
    {
      q: "The multiorgan table, verbatim.",
      a: "Antimuscarinic: Atropine, TCAs, H1-blockers, antipsychotics. Disulfiram-like reaction: 1st-generation sulfonylureas, procarbazine, certain cephalosporins, griseofulvin, metronidazole — “Sorry pals, can’t go mingle.”",
    },
  ],
  related: [
    {
      title: "Drug Reactions: Hematologic",
      topicId: "drug-reactions-hematologic",
      note:
        "The sibling adverse-effects table page — where the same drugs resurface as hematologic reactions (agranulocytosis, aplastic anemia, etc.); learn the drug-reaction pages as one cross-referenced atlas: any drug here with a double-appearance there (eg, the sulfa drugs, the anticonvulsants) is prime exam material.",
    },
    {
      title: "Drug Reactions: Endocrine",
      topicId: "drug-reactions-endocrine",
      note:
        "The parallel organ-system reaction table — the endocrine adverse effects complete the organ-system sweep this page starts; the reading protocol is identical: sign → pathway → row → drug.",
    },
    {
      title: "Toxicity Treatments",
      topicId: "toxicity-treatments",
      note:
        "The management face of the same reactions — the antidote layer this page only hints at (pyridoxine for isoniazid's neuropathy and seizures, mesna for cyclophosphamide/ifosfamide cystitis); pair every causal agent here with its reversal agent there.",
    },
    {
      title: "Stroke Syndromes",
      topicId: "stroke-syndromes",
      note:
        "The neurologic localization framework this page borrows from: a drug-induced movement disorder is still a basal-ganglia story (the nigrostriatal pathway), and separating a toxic movement disorder from a vascular one starts with the same pathway-first reading.",
    },
  ],
  crossLinks: [
    {
      subject: "Psychiatry — antipsychotic pharmacology",
      connection:
        "Every antipsychotic is a D2 receptor antagonist, and the two movement-disorder rows on this page are that mechanism catching up with the nigrostriatal pathway: acute blockade gives the Parkinson-like down-state, chronic blockade gives D2 up-regulation and tardive dyskinesia. Metoclopramide joins both rows because it is also a D2 antagonist — the antiemetic that behaves like an antipsychotic in the striatum — and antipsychotics appear a third time in the antimuscarinic row via their anticholinergic burden.",
    },
    {
      subject: "Biochemistry — vitamin B6 (pyridoxine) and GABA synthesis",
      connection:
        "Isoniazid's triple neurologic appearance is one biochemistry story: INH induces pyridoxine degradation/deficiency, and pyridoxine is the cofactor for glutamate decarboxylase (GABA synthesis) and for axonal transport in the longest nerves — so one depletion yields both the lowered seizure threshold (↓ GABA) and the painful distal peripheral neuropathy, with pyridoxine supplementation as the shared prevention and the treatment of INH overdose seizures.",
    },
    {
      subject: "Oncology pharmacology — chemotherapy toxicity profiles",
      connection:
        "The renal/GU and neurologic tables read together as the chemotherapy toxicity map: cisplatin (peripheral neuropathy + Fanconi syndrome + nephrotoxicity), ifosfamide (Fanconi + hemorrhagic cystitis, prevented by mesna alongside cyclophosphamide), vincristine and paclitaxel (microtubule-directed peripheral neuropathy), bleomycin and busulfan (pulmonary fibrosis), and procarbazine (disulfiram-like reaction) — one drug class scattered across every organ-system table on the page.",
    },
    {
      subject: "Cardiovascular and antimicrobial pharmacology",
      connection:
        "Two single-mechanism rows anchor this page in cardiology and ID: the ACE-inhibitor dry cough is bradykinin accumulation (ACE = kininase II — the same mechanism behind ACE-inhibitor angioedema), and the nephrotoxicity row (aminoglycosides, amphotericin, vancomycin — plus cisplatin) is the reason drug levels and renal function are monitored together; digoxin's yellow-tinged vision and ivabradine's luminous phenomena put two more cardiac drugs into the visual-disturbances row.",
    },
  ],
};
