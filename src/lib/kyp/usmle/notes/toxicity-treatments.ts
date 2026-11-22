import type { KypUsMLENote } from "../types";

// Pharmacology — PH-batch 22. Source: FULL pdf page 269 / book 247
// (Pharmacology — Toxicities and Adverse Effects — the topic owns the
// WHOLE page: "Specific toxicity treatments" on top + "Drug reactions—
// cardiovascular" at the bottom). Census (pdfimages): ZERO raster images —
// the page is the side label + TWO tables (23 antidote rows, columns TOXIN /
// TREATMENT; 5 cardiovascular rows, columns DRUG REACTION / CAUSAL AGENTS) +
// the indd footer slug. VLM AVAILABLE this session (glm-4.6v at 120dpi): ONE
// full-page pass (staging-ph22/vlm-census.txt) + ONE focused 2x-zoom
// adjudication pass on the bottom-table crop (staging-ph22/vlm-census-
// bottom.txt), confirming both tables' printed row order and the color
// furniture: red mnemonic capitals (CASE · VANCEN [dancing] · PEDS · ABCDEF
// + Methadone's M), red in-cell mnemonics ("Penny"cillamine + 3 copper
// pennies · "Dimer"caprol/succ"imer" · the foe of methanol · "Meth"→
// "Meth"ylene blue · "Opi"oids→Nal"oxo"ne · do/da/de), blue titles, blue
// header rule bars, blue reaction names, blue Vancomycin-infusion-reaction
// lead-in; NO margin mnemonics, NO images (VLM-confirmed — every mnemonic
// prints INSIDE cells, carried ATTRIBUTED; the four ALL-CAPS codes here are
// KYP originals). PRINTED-TEXT QUIRKS carried verbatim + documented: (1) the
// cardiovascular table prints only TWO column headers — the brief's NOTES
// column does not print; the "Vancomycin infusion reaction…" sentence is a
// SECOND PARAGRAPH inside the Cutaneous flushing row's causal-agents cell
// (text layer + layout + both VLM reads agree; brief corrected to print);
// (2) the brief's "antiDepressa" truncation worry is adjudicated NO
// truncation — "antiDepressants" prints complete, wrap after the word;
// (3) the lead row prints "Dimercaprol, Succimer" (capital D/S, the PEDS
// capitals) while the arsenic/mercury rows print "Dimercaprol, succimer";
// (4) subscripts as plain digits per the text layer (O2, NaHCO3, Ca2+);
// (5) "SEC TION II" header-space artifact; "Infusion rate–dependent" en
// dash; (6) in-cell wraps (copper, lead, warfarin, flushing cells) joined
// as printed; (7) ">" is the source's own preferred-over notation (Atropine
// > pralidoxime; Fomepizole > ethanol). The KYP diagram (antidote-map), the
// exam layer, the memory layer, and the drug cards are original; antidote
// adverse effects in the drug cards are KYP context (the page prints no
// antidote side effects), marked as such; methylene blue is folded into
// blocks/recall/mnemonics rather than a drug card.

export const toxicityTreatments: KypUsMLENote = {
  id: "toxicity-treatments",
  title: "Specific Toxicity Treatments: The Antidote Table",
  subtitle:
    "The highest-yield table in toxicology: 23 toxin→antidote pairs, and behind them only four rescue mechanisms. Chelators and antibodies BIND the toxin (dimercaprol for arsenic and mercury, the PEDS quartet for lead, “Penny”cillamine for copper, the de-Fe trio for iron, protamine for heparin, idarucizumab for dabigatran, digoxin-specific antibody fragments). Receptor competitors BLOCK it (naloxone at the opioid receptor, flumazenil at the benzodiazepine site, atropine against the acetylcholine flood of organophosphate poisoning). Substrates REFILL what the toxin drained (N-acetylcysteine replenishes glutathione for acetaminophen, leucovorin for methotrexate, vitamin K + PCC/FFP for warfarin). And enzyme reagents REBOOT the poisoned pathway (pralidoxime regenerates phosphorylated AChE, fomepizole — “the foe of methanol” — blocks alcohol dehydrogenase, methylene blue reduces methemoglobin, nitrites + sodium thiosulfate detour cyanide). The same page's bottom table converts five cardiovascular adverse reactions into drug lists — ending with the row the exam quotes verbatim: torsades de pointes, “Memorize your ABCDEF.”",
  subject: "Pharmacology",
  system:
    "Section II · High-Yield General Principles — Pharmacology: Toxicities and Adverse Effects",
  pilotCategory: "Pharmacology mechanism",
  difficulty: 2,
  readTime: 7,
  sourceRef:
    "First Aid 2026, Part 1 pp. 247–247 (Pharmacology — Toxicities and Adverse Effects: Specific toxicity treatments; Drug reactions—cardiovascular; …)",
  tags: [
    "toxicity treatments",
    "antidotes",
    "acetaminophen",
    "N-acetylcysteine",
    "organophosphates",
    "atropine",
    "pralidoxime",
    "physostigmine",
    "chelation",
    "dimercaprol",
    "succimer",
    "penicillamine",
    "EDTA",
    "deferoxamine",
    "lead toxicity",
    "fomepizole",
    "methanol",
    "ethylene glycol",
    "methemoglobinemia",
    "methylene blue",
    "cyanide",
    "methotrexate",
    "leucovorin",
    "naloxone",
    "flumazenil",
    "warfarin reversal",
    "protamine sulfate",
    "idarucizumab",
    "andexanet alfa",
    "torsades de pointes",
    "QT prolongation",
  ],
  core: {
    what:
      "Two printed tables, carried whole. (1) SPECIFIC TOXICITY TREATMENTS — 23 rows, columns TOXIN / TREATMENT, in printed order: Acetaminophen → N-acetylcysteine (replenishes glutathione); AChE inhibitors, organophosphates → Atropine > pralidoxime; Antimuscarinic, anticholinergic agents → Physostigmine (crosses BBB), control hyperthermia; Arsenic → Dimercaprol, succimer; Benzodiazepines → Flumazenil; β-blockers → Atropine, glucagon, saline; Carbon monoxide → 100% O2, hyperbaric O2; Copper → “Penny”cillamine (penicillamine), trientine (3 copper pennies); Cyanide → Hydroxocobalamin, nitrites + sodium thiosulfate; Dabigatran → Idarucizumab; Digoxin → Digoxin-specific antibody fragments; Direct factor Xa inhibitors (eg, apixaban) → Andexanet alfa; Heparin → Protamine sulfate; Iron (Fe) → Deferoxamine, deferasirox, deferiprone; Lead → Penicillamine, calcium disodium EDTA, Dimercaprol, Succimer, (PEDS patients lead antidote); Mercury → Dimercaprol, succimer; Methanol, ethylene glycol (antifreeze) → Fomepizole (the foe of methanol) > ethanol, dialysis; Methemoglobin → Methylene blue, vitamin C (reducing agent); Methotrexate → Leucovorin; Opioids → Naloxone; Salicylates → NaHCO3 (alkalinizes urine), dialysis; TCAs → NaHCO3 (stabilizes cardiac cell membrane); Warfarin → Vitamin K (delayed effect), PCC (prothrombin complex concentrate)/FFP (immediate effect). (2) DRUG REACTIONS—CARDIOVASCULAR — 5 rows: Coronary vasospasm (cocaine, amphetamines, sumatriptan, ergot alkaloids — CASE); Cutaneous flushing (vancomycin, adenosine, niacin, Ca2+ channel blockers, echinocandins, nitrates — flushed from VANCEN [dancing], plus the vancomycin infusion reaction paragraph: formerly called red man syndrome, histamine release → widespread pruritic erythema, infusion rate–dependent, managed with slower infusion rate, diphenhydramine); Dilated cardiomyopathy (alcohol, anthracycline — eg, doxorubicin, daunorubicin; prevent with dexrazoxane — and trastuzumab); Peripheral edema (dihydropyridine Ca2+ channel blockers, eg, amlodipine); and Torsades de pointes — associated with agents that prolong QT interval: Methadone, antiArrhythmics (class IA, III), antiBiotics (eg, macrolides, fluoroquinolones), anti“C”ychotics (eg, ziprasidone), antiDepressants (eg, TCAs), antiEmetics (eg, ondansetron), antiFungals (eg, fluconazole) (Memorize your ABCDEF).",
    why:
      "This is the highest-yield table in toxicology because antidote questions are pure mechanism logic wearing a memory costume: every one of the 23 pairs earns its match through one of four rescue mechanisms — the chelator binds the metal, the antagonist out-competes the agonist at the receptor, the repletion agent refills what the toxin drained, and the enzyme reagent regenerates or detours the poisoned pathway. Learn the four logics and the table stops being 23 associations and becomes 23 consequences. The same logic explains the table's punctuation: “Atropine > pralidoxime” prints the order of a two-step rescue (muscarinic competition first, enzyme regeneration second), “Fomepizole … > ethanol” prints the preferred blocker of alcohol dehydrogenase, and “Vitamin K (delayed effect), PCC … /FFP (immediate effect)” prints the speed axis of warfarin reversal. The bottom table then runs the same mechanism-first logic in reverse — the adverse cardiovascular reaction IS the drug's intended mechanism pushed one tissue too far (vasoconstrictors → coronary vasospasm, vasodilators/histamine → flushing, myocyte poisons → dilated cardiomyopathy, arteriolar dilators → peripheral edema), and its torsades row hands the exam its most quotable drug list: QT prolongers from Methadone through the ABCDEF classes.",
    keyIdea:
      "Classify every antidote by ITS mechanism of rescue — BIND, BLOCK, REFILL, REBOOT — and read every overdose stem in four moves. MOVE 1 — NAME THE TOXIN (the vignette's smell, occupation, medication list, or rhythm names it: bitter-almond cyanide, antifreeze methanol/ethylene glycol, farmworker organophosphates, the medication bottle). MOVE 2 — NAME THE MECHANISM OF HARM (metal poisoning, receptor overstimulation, receptor silencing, enzyme poisoning, drained substrate). MOVE 3 — MATCH THE RESCUE FAMILY: a circulating toxin or metal gets BOUND (chelator, antibody, decoy, protamine; O2 displaces carbon monoxide off hemoglobin); an overstimulated receptor gets BLOCKED (naloxone, flumazenil, atropine); a drained substrate gets REFILLED (glutathione, folate, vitamin K, clotting factors); a poisoned pathway gets REBOOTED (pralidoxime regenerates AChE, fomepizole blocks the conversion, methylene blue reduces, nitrite + thiosulfate detours). MOVE 4 — NAME THE ANTIDOTE AND READ ITS PUNCTUATION (the “>” marks what comes first; the parentheses carry timing and mechanism — delayed-effect vitamin K vs immediate-effect PCC/FFP). Four families, four moves — the rescue family, not the drug name, is the answer key.",
  },
  mechanisms: [
    {
      id: "antidote-rescue-mechanism-map",
      title:
        "The four rescue families: how every antidote on the page earns its job",
      context: "The printed Specific toxicity treatments table (book 247)",
      flow: {
        nodes: [
          {
            id: "toxin",
            label: "THE TOXIN'S MECHANISM OF HARM — the overdose state",
            sublabel:
              "Input — every toxin on the printed table kills by a definable mechanism: metals that catalyze destructive chemistry (arsenic, copper, iron, lead, mercury), receptor overstimulation (opioids, benzodiazepines, the acetylcholine flood of AChE inhibitors/organophosphates), receptor silencing (antimuscarinic, anticholinergic agents), enzyme poisoning and metabolic conversion (methanol and ethylene glycol via alcohol dehydrogenase, methotrexate via folate antagonism, acetaminophen via glutathione exhaustion), and anticoagulation (warfarin, heparin, dabigatran, direct factor Xa inhibitors). The antidote is chosen by the harm, never by the name.",
            variant: "input",
          },
          {
            id: "bind",
            label: "FAMILY 1 — BIND IT: chelation & capture",
            sublabel:
              "Process — the antidote sequesters the toxin itself and takes it out of play: dimercaprol, succimer (arsenic; mercury); the PEDS quartet — penicillamine, calcium disodium EDTA, dimercaprol, succimer (lead); “Penny”cillamine (penicillamine), trientine (copper); deferoxamine, deferasirox, deferiprone (iron); protamine sulfate (heparin); hydroxocobalamin (cyanide); idarucizumab (dabigatran — a monoclonal antibody); digoxin-specific antibody fragments; andexanet alfa (a decoy receptor that soaks up direct factor Xa inhibitors); and 100% O2, hyperbaric O2 — which displaces carbon monoxide off hemoglobin by mass action.",
            variant: "process",
          },
          {
            id: "block",
            label: "FAMILY 2 — BLOCK IT: receptor competition",
            sublabel:
              "Process — a competitor out-competes the toxin at its own receptor: naloxone at the opioid receptor, flumazenil at the benzodiazepine site of the GABA receptor chloride channel, atropine at the muscarinic receptor against the accumulated acetylcholine of AChE-inhibitor/organophosphate poisoning (and atropine + glucagon + saline for β-blockers, where glucagon bypasses the blocked β receptor entirely).",
            variant: "process",
          },
          {
            id: "refill",
            label: "FAMILY 3 — REFILL IT: substrate & cofactor repletion",
            sublabel:
              "Process — the toxin drained something the body needs; the antidote puts it back: N-acetylcysteine replenishes glutathione (acetaminophen exhausts it), leucovorin repletes the reduced folate that methotrexate's DHFR antagonism starves, vitamin K repletes the cofactor for clotting-factor synthesis (warfarin), PCC/FFP replete the factors themselves, and vitamin C donates reducing equivalents (the printed “reducing agent” for methemoglobin).",
            variant: "process",
          },
          {
            id: "reboot",
            label:
              "FAMILY 4 — REBOOT IT: enzyme regeneration, metabolic blockade, detour",
            sublabel:
              "Process — pralidoxime reactivates AChE phosphorylated by organophosphates (regeneration); fomepizole, “the foe of methanol,” blocks alcohol dehydrogenase so methanol and ethylene glycol are never converted to their toxic acids (blockade — ethanol competes for the same enzyme, dialysis removes the parent); nitrites induce methemoglobin to pull cyanide off cytochrome oxidase and sodium thiosulfate converts it to excretable thiocyanate (detour); methylene blue reduces Fe3+ methemoglobin back to Fe2+ hemoglobin; physostigmine — itself an AChE inhibitor that crosses the BBB — raises acetylcholine to overcome antimuscarinic blockade; and NaHCO3 alkalinizes the urine to trap salicylate for elimination while stabilizing the cardiac cell membrane in TCA overdose.",
            variant: "process",
          },
          {
            id: "pairing",
            label:
              "THE PAIRING RULE: mechanism of harm → rescue family → antidote",
            sublabel:
              "Output — read any of the 23 printed rows through this rule: a metal or circulating toxin gets bound, an overstimulated receptor gets blocked, a drained substrate gets refilled, a poisoned pathway gets rebooted or detoured. The table is not 23 associations to memorize — it is 4 logics to apply; the rescue family, not the drug name, is the answer key.",
            variant: "output",
          },
        ],
        edges: [
          { from: "toxin", to: "bind", label: "a metal, a circulating toxin, a bound drug →" },
          { from: "toxin", to: "block", label: "a receptor being overstimulated →" },
          { from: "toxin", to: "refill", label: "a drained substrate or cofactor →" },
          { from: "toxin", to: "reboot", label: "a poisoned enzyme or pathway →" },
          { from: "bind", to: "pairing", label: "capture the toxin" },
          { from: "block", to: "pairing", label: "out-compete the toxin" },
          { from: "refill", to: "pairing", label: "replace what was lost" },
          { from: "reboot", to: "pairing", label: "regenerate, block, or detour" },
        ],
      },
    },
    {
      id: "cardiovascular-reaction-map",
      title:
        "Drug reactions—cardiovascular: the intended mechanism pushed one tissue too far — with the QT → torsades chain as the deepest row",
      context:
        "The printed Drug reactions—cardiovascular table (book 247)",
      flow: {
        nodes: [
          {
            id: "table",
            label: "THE PRINTED CARDIOVASCULAR REACTION TABLE — five rows",
            sublabel:
              "Input — book 247, columns DRUG REACTION / CAUSAL AGENTS: Coronary vasospasm (CASE) · Cutaneous flushing (VANCEN, plus the vancomycin infusion reaction paragraph) · Dilated cardiomyopathy (alcohol, anthracycline, trastuzumab) · Peripheral edema (dihydropyridine Ca2+ channel blockers) · Torsades de pointes (Methadone + the ABCDEF agents).",
            variant: "input",
          },
          {
            id: "vasospasm",
            label: "VASOCONSTRICTION MISPLACED — Coronary vasospasm",
            sublabel:
              "Target — Cocaine, Amphetamines, Sumatriptan, Ergot alkaloids (CASE): each constricts vascular smooth muscle by design; in a coronary artery the same vasoconstriction becomes ischemic chest pain.",
            variant: "target",
          },
          {
            id: "flushing",
            label: "VASODILATION / HISTAMINE MISPLACED — Cutaneous flushing",
            sublabel:
              "Target — Vancomycin, Adenosine, Niacin, Ca2+ channel blockers, Echinocandins, Nitrates (flushed from VANCEN [dancing]): cutaneous vessels dilate; the vancomycin infusion reaction (formerly called red man syndrome) is histamine release → widespread pruritic erythema, infusion rate–dependent — managed with a slower infusion rate and diphenhydramine.",
            variant: "target",
          },
          {
            id: "cardiomyopathy",
            label: "MYOCYTE INJURY — Dilated cardiomyopathy",
            sublabel:
              "Target — Alcohol, anthracycline (eg, doxorubicin, daunorubicin; prevent with dexrazoxane), trastuzumab: direct myocyte toxicity → the dilated, poorly contracting ventricle.",
            variant: "target",
          },
          {
            id: "edema",
            label: "ARTERIOLAR DILATION MISPLACED — Peripheral edema",
            sublabel:
              "Target — Dihydropyridine Ca2+ channel blockers (eg, amlodipine): precapillary arteriolar dilation without matching venodilation → ↑ capillary hydrostatic pressure → dependent edema.",
            variant: "target",
          },
          {
            id: "qt",
            label:
              "THE DEEPEST ROW — QT prolongation → early afterdepolarizations → torsades de pointes",
            sublabel:
              "Process — Associated with agents that prolong QT interval: Methadone, antiArrhythmics (class IA, III), antiBiotics (eg, macrolides, fluoroquinolones), anti“C”ychotics (eg, ziprasidone), antiDepressants (eg, TCAs), antiEmetics (eg, ondansetron), antiFungals (eg, fluconazole) (Memorize your ABCDEF). Prolonged repolarization → early afterdepolarizations → triggered activity → the polymorphic, twisting ventricular tachycardia. “Memorize your ABCDEF” is First Aid's own instruction, printed in red.",
            variant: "process",
          },
          {
            id: "rule",
            label:
              "THE READING RULE: the adverse reaction IS the mechanism, misplaced",
            sublabel:
              "Output — every causal agent on this table is a drug whose INTENDED mechanism, pushed into the wrong tissue or the wrong dose, produces the reaction. The exam tests each drug's mechanism twice: once as its use, once as its reaction — so the reaction names the mechanism, and the mechanism names the drug list.",
            variant: "output",
          },
        ],
        edges: [
          { from: "table", to: "vasospasm", label: "vasoconstrictors by design" },
          { from: "table", to: "flushing", label: "vasodilators + histamine" },
          { from: "table", to: "cardiomyopathy", label: "myocyte toxins" },
          { from: "table", to: "edema", label: "arteriolar dilators" },
          {
            from: "table",
            to: "qt",
            label: "QT prolongers — the deepest chain",
          },
          { from: "qt", to: "rule", label: "all five rows: the mechanism, misplaced" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "antidote-map",
      title: "The antidote map: 23 pairs, four rescue families (an original KYP diagram)",
      caption:
        "An original KYP diagram of book 247's two tables: the paired toxin→antidote routing lanes grouped by rescue family — BIND IT (the chelators, antibodies, decoy, protamine, and O2 displacement), BLOCK IT (naloxone, flumazenil, atropine), REFILL IT (N-acetylcysteine, leucovorin, vitamin K + PCC/FFP, vitamin C), REBOOT IT (pralidoxime, fomepizole > ethanol, methylene blue, nitrites + thiosulfate, physostigmine, NaHCO3) — with the multi-family rows (organophosphates = atropine + pralidoxime; methemoglobin = methylene blue + vitamin C) shown in both of their lanes; the ABCDEF torsades band (Methadone + antiArrhythmics, antiBiotics, anti“C”ychotics, antiDepressants, antiEmetics, antiFungals → QT → early afterdepolarizations → torsades, with the printed “Memorize your ABCDEF” chip); and the cardiovascular reactions panel — CASE vasospasm, VANCEN flushing + the vancomycin infusion reaction, the dilated-cardiomyopathy trio with dexrazoxane prevention, and dihydropyridine edema.",
      notice:
        "Census (pdfimages): ZERO raster images on pdf 269 — the page's visual assets are the two color-coded tables themselves (red mnemonic capitals CASE · VANCEN · PEDS · ABCDEF, red in-cell mnemonics, blue titles and reaction names), VLM-read at 120dpi with no margin mnemonics. The four rescue-family lanes, the ABCDEF band, and the reactions panel are an ORIGINAL KYP ADAPTATION — every toxin, antidote, and causal agent is preserved from the print, but the artwork and the four-family classification are KYP's. Both tables are additionally carried verbatim in the note's table blocks. The four ALL-CAPS mnemonics in the Memory section are KYP originals; First Aid's own printed mnemonics (PEDS, “Penny”cillamine, the foe of methanol, CASE, VANCEN, ABCDEF) are carried ATTRIBUTED.",
    },
    {
      kind: "table",
      title:
        "Book 247 — the printed Specific toxicity treatments table, carried verbatim (every printed word, PRINTED row order)",
      intro:
        "The page's top table: 23 rows, columns TOXIN / TREATMENT, printed in alphabetical-by-toxin order from Acetaminophen to Warfarin. First Aid prints mnemonic capitals in red (the PEDS of the lead row, the “Penny” of penicillamine, the “Dimer” of dimercaprol, the “foe” of fomepizole, the “Meth” of methylene blue, the “oxo” of naloxone) — carried here, attributed, with the capitals as printed.",
      columns: ["TOXIN", "TREATMENT"],
      rows: [
        ["Acetaminophen", "N-acetylcysteine (replenishes glutathione)"],
        ["AChE inhibitors, organophosphates", "Atropine > pralidoxime"],
        ["Antimuscarinic, anticholinergic agents", "Physostigmine (crosses BBB), control hyperthermia"],
        ["Arsenic", "Dimercaprol, succimer"],
        ["Benzodiazepines", "Flumazenil"],
        ["β-blockers", "Atropine, glucagon, saline"],
        ["Carbon monoxide", "100% O2, hyperbaric O2"],
        ["Copper", "“Penny”cillamine (penicillamine), trientine (3 copper pennies)"],
        ["Cyanide", "Hydroxocobalamin, nitrites + sodium thiosulfate"],
        ["Dabigatran", "Idarucizumab"],
        ["Digoxin", "Digoxin-specific antibody fragments"],
        ["Direct factor Xa inhibitors (eg, apixaban)", "Andexanet alfa"],
        ["Heparin", "Protamine sulfate"],
        ["Iron (Fe)", "Deferoxamine, deferasirox, deferiprone"],
        ["Lead", "Penicillamine, calcium disodium EDTA, Dimercaprol, Succimer, (PEDS patients lead antidote)"],
        ["Mercury", "Dimercaprol, succimer"],
        ["Methanol, ethylene glycol (antifreeze)", "Fomepizole (the foe of methanol) > ethanol, dialysis"],
        ["Methemoglobin", "Methylene blue, vitamin C (reducing agent)"],
        ["Methotrexate", "Leucovorin"],
        ["Opioids", "Naloxone"],
        ["Salicylates", "NaHCO3 (alkalinizes urine), dialysis"],
        ["TCAs", "NaHCO3 (stabilizes cardiac cell membrane)"],
        ["Warfarin", "Vitamin K (delayed effect), PCC (prothrombin complex concentrate)/FFP (immediate effect)"],
      ],
      caption:
        "Verbatim carries, documented: the lead row prints “Dimercaprol, Succimer” with capital D/S — the red PEDS capitals (Penicillamine, EDTA, Dimercaprol, Succimer — “PEDS patients lead antidote”) — while the arsenic and mercury rows print “Dimercaprol, succimer”; ““Penny”cillamine (penicillamine), trientine (3 copper pennies)” wraps in print as “(3 copper / pennies)”; the warfarin treatment cell wraps as “(prothrombin / complex concentrate)”; the “>” is the source's own preferred-over notation (Atropine > pralidoxime; Fomepizole > ethanol); subscripts print as plain digits in the text layer (O2, NaHCO3) and are carried as printed. The red mnemonic text is First Aid's own, reproduced as printed.",
    },
    {
      kind: "table",
      title:
        "Book 247 — the printed Drug reactions—cardiovascular table, carried verbatim",
      intro:
        "The page's bottom table: 5 rows. The print carries TWO column headers only — DRUG REACTION / CAUSAL AGENTS (the batch brief described a NOTES column; the print carries none — the Vancomycin infusion reaction sentence is a second paragraph inside the Cutaneous flushing row's causal-agents cell, its lead-in phrase printing blue; carried as printed).",
      columns: ["DRUG REACTION", "CAUSAL AGENTS"],
      rows: [
        ["Coronary vasospasm", "Cocaine, Amphetamines, Sumatriptan, Ergot alkaloids (CASE)"],
        ["Cutaneous flushing", "Vancomycin, Adenosine, Niacin, Ca2+ channel blockers, Echinocandins, Nitrates (flushed from VANCEN [dancing]). The same cell continues: “Vancomycin infusion reaction (formerly called red man syndrome)—histamine release → widespread pruritic erythema. Infusion rate–dependent. Manage with slower infusion rate, diphenhydramine.”"],
        ["Dilated cardiomyopathy", "Alcohol, anthracycline (eg, doxorubicin, daunorubicin; prevent with dexrazoxane), trastuzumab"],
        ["Peripheral edema", "Dihydropyridine Ca2+ channel blockers (eg, amlodipine)"],
        ["Torsades de pointes", "Associated with agents that prolong QT interval: Methadone, antiArrhythmics (class IA, III), antiBiotics (eg, macrolides, fluoroquinolones), anti“C”ychotics (eg, ziprasidone), antiDepressants (eg, TCAs), antiEmetics (eg, ondansetron), antiFungals (eg, fluconazole) (Memorize your ABCDEF)"],
      ],
      caption:
        "Verbatim carries, documented: the causal-agent capitals spell First Aid's own red mnemonics — CASE (Cocaine, Amphetamines, Sumatriptan, Ergot alkaloids), VANCEN (Vancomycin, Adenosine, Niacin, Ca2+ channel blockers, Echinocandins, Nitrates — “flushed from VANCEN [dancing]”), and ABCDEF (antiArrhythmics, antiBiotics, anti“C”ychotics, antiDepressants, antiEmetics, antiFungals — “Memorize your ABCDEF”), with Methadone leading the torsades list outside the letters; “anti“C”ychotics” is the printed spelling — quotation marks around the red capital C, the source's own pun on psychotics (ziprasidone is the printed example); “antiDepressants” prints COMPLETE on one line (the batch brief's “antiDepressa” truncation worry is adjudicated as no truncation — the line wrap falls after the full word, before “(eg, TCAs)”); “Infusion rate–dependent” prints with an en dash; the do/da/de of doxorubicin/daunorubicin/dexrazoxane print as red capitals.",
    },
    {
      kind: "list",
      title: "The four rescue families — every printed pair, sorted by how the antidote works",
      intro:
        "KYP's re-sorting of the 23 printed pairs by RESCUE MECHANISM instead of alphabet. Some rows live in two families at once — the organophosphate row is atropine (BLOCK) plus pralidoxime (REBOOT), and the methemoglobin row is methylene blue (REBOOT) plus vitamin C (REFILL) — exactly as the print's own punctuation splits them.",
      items: [
        {
          lead: "BIND IT — chelation & capture",
          text: "Arsenic → dimercaprol, succimer · Mercury → dimercaprol, succimer · Lead → the PEDS quartet (penicillamine, calcium disodium EDTA, dimercaprol, succimer) · Copper → “Penny”cillamine (penicillamine), trientine · Iron (Fe) → deferoxamine, deferasirox, deferiprone · Heparin → protamine sulfate · Cyanide → hydroxocobalamin (and nitrites + sodium thiosulfate — see REBOOT for the detour) · Dabigatran → idarucizumab (antibody) · Digoxin → digoxin-specific antibody fragments · Direct factor Xa inhibitors (eg, apixaban) → andexanet alfa (decoy) · Carbon monoxide → 100% O2, hyperbaric O2 (displacement off hemoglobin).",
        },
        {
          lead: "BLOCK IT — receptor competition",
          text: "Opioids → naloxone (opioid receptor) · Benzodiazepines → flumazenil (the benzodiazepine site of the GABA receptor) · AChE inhibitors, organophosphates → atropine (muscarinic competition against the accumulated acetylcholine) · β-blockers → atropine, glucagon, saline (glucagon bypasses the blocked β receptor through its own Gs-coupled receptor — competition by detour around the block).",
        },
        {
          lead: "REFILL IT — substrate & cofactor repletion",
          text: "Acetaminophen → N-acetylcysteine (replenishes glutathione) · Methotrexate → leucovorin (repletes reduced folate) · Warfarin → vitamin K (the clotting-factor cofactor, delayed effect) + PCC/FFP (the factors themselves, immediate effect) · Methemoglobin → vitamin C (reducing agent, alongside methylene blue).",
        },
        {
          lead: "REBOOT IT — regenerate, block the conversion, detour",
          text: "AChE inhibitors, organophosphates → pralidoxime (regenerates phosphorylated AChE) · Methanol, ethylene glycol (antifreeze) → fomepizole (the foe of methanol — blocks alcohol dehydrogenase) > ethanol (competes for the same enzyme), dialysis (removes the parent alcohol) · Methemoglobin → methylene blue (reduces Fe3+ back to Fe2+) · Cyanide → nitrites (induce methemoglobin, which pulls cyanide off cytochrome oxidase) + sodium thiosulfate (converts cyanide to excretable thiocyanate) · Antimuscarinic, anticholinergic agents → physostigmine (an AChE inhibitor that crosses the BBB, raising acetylcholine to overcome the blockade), control hyperthermia · Salicylates → NaHCO3 (alkalinizes urine — the ion-trapping detour for elimination), dialysis · TCAs → NaHCO3 (stabilizes the cardiac cell membrane).",
        },
      ],
    },
    {
      kind: "steps",
      title: "Reading any antidote question in four moves",
      intro:
        "The whole table distilled into an ordered decision path — TOXIN, HARM, FAMILY, ANTIDOTE (with the punctuation).",
      steps: [
        {
          label: "NAME THE TOXIN — what does the vignette expose?",
          detail:
            "The stem always names it: a single ingestion with sky-high transaminases (acetaminophen), a farmworker in a cholinergic crisis (organophosphates), an antifreeze drinker with an anion-gap acidosis (ethylene glycol; visual disturbance points to methanol), a toddler with ingested tablets and hemorrhagic gastroenteritis (iron), a patient turned blue-gray after dental anesthetic (methemoglobin — the local anesthetic class), bitter almonds (cyanide), the medication list itself (digoxin, warfarin, heparin, dabigatran, a factor Xa inhibitor, a TCA, an opioid, a benzodiazepine, a β-blocker, methotrexate, salicylates) or the smoke-inhalation scene (carbon monoxide).",
        },
        {
          label: "NAME THE MECHANISM OF HARM — how does this toxin kill?",
          detail:
            "Metal catalyzing destructive chemistry (arsenic, copper, iron, lead, mercury) · receptor overstimulation (opioids, benzodiazepines, the acetylcholine flood of organophosphates) · receptor silencing (antimuscarinic agents) · enzyme poisoning or metabolic conversion to a worse metabolite (methanol and ethylene glycol via alcohol dehydrogenase; methotrexate via folate antagonism; acetaminophen exhausting glutathione) · factor depletion (the four anticoagulants) · displaced oxygen (carbon monoxide) · oxidized hemoglobin (methemoglobin) · poisoned cytochrome oxidase (cyanide) · poisoned Na+ channels in the myocardium (TCAs).",
        },
        {
          label: "MATCH THE RESCUE FAMILY — BIND, BLOCK, REFILL, or REBOOT",
          detail:
            "A circulating toxin gets bound (chelator, antibody, decoy, protamine; O2 displaces CO). An overstimulated receptor gets blocked (naloxone, flumazenil, atropine). A drained substrate gets refilled (N-acetylcysteine, leucovorin, vitamin K, PCC/FFP, vitamin C). A poisoned pathway gets rebooted (pralidoxime regenerates, fomepizole blocks the conversion, methylene blue reduces, nitrite + thiosulfate detours, physostigmine re-arms the cholinergic side, NaHCO3 detours salicylate into the urine and stabilizes the TCA-poisoned membrane).",
        },
        {
          label: "NAME THE ANTIDOTE — and read its punctuation",
          detail:
            "The “>” marks order: Atropine > pralidoxime (muscarinic competition first, enzyme regeneration second), Fomepizole (the foe of methanol) > ethanol (the preferred ADH blocker over the competing substrate). The parentheses carry mechanism and timing: “(replenishes glutathione)”, “(crosses BBB)”, “(the foe of methanol)”, “(reducing agent)”, “(alkalinizes urine)”, “(stabilizes cardiac cell membrane)”, “(delayed effect)” vs “(immediate effect)” — the vitamin K vs PCC/FFP split that answers every “how fast” question about warfarin reversal.",
        },
      ],
    },
    {
      kind: "compare",
      title:
        "The cholinergic see-saw — the two rows that reverse each other",
      intro:
        "Rows 2 and 3 of the printed table are the same physiology in opposite directions, and the antidote of one row is the toxin class of the other. This is the table's most testable symmetry.",
      columns: [
        "TOO MUCH ACETYLCHOLINE — AChE inhibitors, organophosphates",
        "TOO LITTLE MUSCARINIC SIGNAL — antimuscarinic, anticholinergic agents",
      ],
      rows: [
        {
          label: "The poison's mechanism",
          a: "Organophosphates irreversibly phosphorylate acetylcholinesterase → acetylcholine accumulates at every muscarinic and nicotinic synapse — the cholinergic crisis: salivation, lacrimation, urination, diarrhea/diaphoresis, bronchorrhea, miosis, plus muscle fasciculations and weakness",
          b: "Antimuscarinic agents competitively block the muscarinic receptor → the receptor is silenced despite normal acetylcholine — the anticholinergic syndrome: dry skin, flushed and hot, dilated pupils (mydriasis), tachycardia, urinary retention, altered mental status, and hyperthermia (the printed “control hyperthermia”)",
        },
        {
          label: "The printed treatment",
          a: "“Atropine > pralidoxime” — atropine COMPETES at the muscarinic receptor against the acetylcholine flood; pralidoxime REACTIVATES the phosphorylated enzyme (regeneration — before the phosphate-enzyme bond ages)",
          b: "“Physostigmine (crosses BBB), control hyperthermia” — physostigmine is itself an AChE INHIBITOR: it raises acetylcholine until the concentration out-competes the receptor blockade, and it crosses the blood-brain barrier to reach the central anticholinergic delirium; hyperthermia is controlled supportively",
        },
        {
          label: "The rescue family",
          a: "A two-family row: atropine = BLOCK IT, pralidoxime = REBOOT IT — competition plus regeneration",
          b: "A re-arm row: physostigmine = REBOOT IT (raise the neurotransmitter) — the mirror of row 2, where the SAME enzyme class that is the poison there is the antidote here",
        },
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title:
        "The punctuation is the question — “>”, parentheses, and the timing they encode",
      body:
        "Three pieces of printed punctuation carry testable orders. (1) “Atropine > pralidoxime” — the “>” marks atropine as first: muscarinic competition immediately dries the secretions that obstruct and hypoxemic the airway; pralidoxime regenerates the phosphorylated enzyme and adds nicotinic (muscle) rescue — a two-step, two-family answer. (2) “Fomepizole (the foe of methanol) > ethanol, dialysis” — fomepizole is the preferred alcohol-dehydrogenase blocker; ethanol is the same strategy with a competing substrate (and CNS depression of its own); dialysis removes the parent alcohol and the acids. (3) “Vitamin K (delayed effect), PCC (prothrombin complex concentrate)/FFP (immediate effect)” — the warfarin row answers every “how fast does reversal work” distractor: vitamin K re-arms factor synthesis over hours-to-a-day, PCC/FFP replace the factors now. The same speed logic organizes the whole reversal quartet — warfarin (vitamin K/PCC/FFP), heparin (protamine sulfate), dabigatran (idarucizumab), direct factor Xa inhibitors (andexanet alfa) — and the NaHCO3 double duty: “(alkalinizes urine)” for salicylates (an elimination detour) vs “(stabilizes cardiac cell membrane)” for TCAs (an electrophysiologic rescue) — one salt, two different rescue logics.",
    },
    {
      kind: "callout",
      variant: "memory",
      title: "First Aid's own red text — the mnemonic layer printed on the page",
      body:
        "This page prints its mnemonics IN RED INSIDE THE CELLS (attributed here, verbatim — these are the source's hooks, not KYP's; the four ALL-CAPS codes in the Memory section are KYP originals): PEDS — Penicillamine, calcium disodium EDTA, Dimercaprol, Succimer, “(PEDS patients lead antidote)” for lead; “Penny”cillamine (penicillamine), trientine (3 copper pennies) for copper; the red “Dimer”caprol and succ“imer” portions in the mercury row; Fomepizole (the foe of methanol) for the toxic alcohols; “Meth”emoglobin → “Meth”ylene blue; “Opi”oids → Nal“oxo”ne; CASE — Cocaine, Amphetamines, Sumatriptan, Ergot alkaloids (coronary vasospasm); “flushed from VANCEN [dancing]” — Vancomycin, Adenosine, Niacin, Ca2+ channel blockers, Echinocandins, Nitrates (cutaneous flushing); and the torsades row's ABCDEF — antiArrhythmics, antiBiotics, anti“C”ychotics, antiDepressants, antiEmetics, antiFungals — under First Aid's own instruction “(Memorize your ABCDEF)”, with the do/da/de of doxorubicin/daunorubicin/dexrazoxane flagged red in the cardiomyopathy row.",
    },
  ],
  drugs: [
    {
      drug: "N-acetylcysteine",
      klass: "Antidote — glutathione repletion (REFILL family)",
      target: "Hepatic glutathione stores in acetaminophen overdose",
      mechanism:
        "Replenishes glutathione (the printed cell) — the antioxidant that detoxifies acetaminophen's reactive metabolite once stores are exhausted (KYP context: the metabolite is NAPQI, generated via cytochrome P450 when glutathione runs out)",
      effect: "Restored glutathione → the reactive metabolite is conjugated and detoxified → hepatocyte necrosis averted",
      uses: "Acetaminophen poisoning — the printed row 1 (most effective earliest; KYP context: the Rumack-Matthew treatment line times it)",
      adverse:
        "Not printed on book 247 (the page maps toxin → antidote only); KYP context: anaphylactoid reactions and nausea are the known effects of IV N-acetylcysteine",
      clue:
        "The single most-tested repletion antidote — a poisoned prodrome, then RUQ pain and transaminases in the thousands, answers N-acetylcysteine.",
    },
    {
      drug: "Pralidoxime",
      klass: "Antidote — AChE reactivator (REBOOT family)",
      target: "The phosphorylated (organophosphate-bound) acetylcholinesterase",
      mechanism:
        "Reactivates acetylcholinesterase by displacing the organophosphate from the enzyme's active site — regeneration, valid only before the phosphate-enzyme bond “ages” into an irreversible state (KYP context: the aging clock is why it is given early, with atropine first)",
      effect: "Enzyme activity restored → acetylcholine is hydrolyzed again → the cholinergic flood recedes at its source",
      uses: "AChE-inhibitor/organophosphate poisoning — the printed row 2, second to atropine (“Atropine > pralidoxime”)",
      adverse:
        "Not printed on book 247; KYP context: pralidoxime itself can cause cholinergic effects at speed (it is an oxime, not an innocent bystander)",
      clue:
        "The regeneration half of the organophosphate pair — atropine dries the secretions; pralidoxime restarts the enzyme.",
    },
    {
      drug: "Fomepizole",
      klass: "Antidote — alcohol dehydrogenase blocker (REBOOT family)",
      target: "Alcohol dehydrogenase (the enzyme that converts methanol and ethylene glycol to their toxic acids)",
      mechanism:
        "Blocks alcohol dehydrogenase so the parent alcohol is never metabolized — “Fomepizole (the foe of methanol)” is the printed mnemonic; ethanol is the same strategy as a competing substrate; dialysis removes both the parent alcohol and the already-formed acids (all three printed in the one cell)",
      effect: "No formic acid (methanol) and no glycolic/oxalic acid (ethylene glycol) is generated → the retina and the kidney are spared → the acidosis stops worsening",
      uses: "Methanol and ethylene glycol (antifreeze) poisoning — the printed row, preferred over ethanol (“fomepizole … > ethanol”)",
      adverse:
        "Not printed on book 247; KYP context: headache, nausea, and sedation are reported — far less than the CNS depression ethanol itself adds",
      clue:
        "An anion-gap acidosis after antifreeze or solvent ingestion — with oxalate crystals or retinal symptoms naming which alcohol — answers fomepizole.",
    },
    {
      drug: "Deferoxamine (+ deferasirox, deferiprone)",
      klass: "Antidote — iron chelator (BIND family)",
      target: "Free circulating iron (the “Fe” of the printed toxin cell)",
      mechanism:
        "Binds iron and carries it out of the body — the three printed chelators (deferoxamine, deferasirox, deferiprone) all open with “de-Fe(r),” and Fe is iron's symbol (KYP context: deferoxamine is the parenteral one for acute overdose; the others are oral chelation)",
      effect: "Free iron is sequestered → the hemorrhagic gastroenteritis, metabolic acidosis, and hepatotoxicity of iron overload are blunted",
      uses: "Iron (Fe) poisoning — the printed row 14 (KYP context: the toddler who ate iron tablets; also chronic transfusional iron overload)",
      adverse:
        "Not printed on book 247; KYP context: deferoxamine famously colors the urine rose-orange (vin rose) — itself a bedside confirmation of iron chelation",
      clue:
        "DE-FE TAKES FE — every iron chelator on the page spells the metal in its name.",
    },
    {
      drug: "Digoxin-specific antibody fragments",
      klass: "Antidote — antigen-binding Fab (BIND family)",
      target: "Circulating digoxin (and other cardiac glycosides — KYP context: digoxin immune Fab)",
      mechanism:
        "Antibody fragments bind digoxin in the plasma and drag it off its Na+/K+-ATPase target into an immune-clearable complex — capture, the BIND family's antibody branch",
      effect: "Free digoxin falls → the Na+/K+-ATPase blockade lifts → hyperkalemia and the arrhythmias of digoxin toxicity reverse",
      uses: "Digoxin poisoning — the printed row 11 (KYP context: the classic triggers are hypokalemia/hyperkalemia and renal failure; the arrhythmia-plus-hyperkalemia-plus-yellow-vision cluster)",
      adverse:
        "Not printed on book 247; KYP context: redistribution/hypokalemia and heart failure from abrupt withdrawal of inotropy are the concerns",
      clue:
        "The antibody route — a life-threatening digoxin level or arrhythmia answers Fab, not dialysis (the complex is too large to dialyze — KYP context).",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 19-year-old presents many hours after a single large ingestion of an analgesic purchased without a prescription; she has nausea, right-upper-quadrant pain, and transaminases in the thousands.",
        discriminator:
          "A delayed, hepatocellular pattern after acetaminophen — glutathione exhausted by the reactive metabolite",
        concept: "The repletion rescue: N-acetylcysteine",
        answer:
          "N-acetylcysteine (replenishes glutathione) — the printed row 1 and the REFILL family's prototype: the toxin's harm is a drained substrate, so the antidote is the substrate. The delay in the stem is the mechanism's timeline (KYP context: the metabolite forms via P450 once glutathione is depleted; the treatment line charts level versus time).",
      },
      {
        stem: "A farmworker is brought in salivating, lacrimating, urinating, defecating, and diaphoretic, with pinpoint pupils, wheezing from bronchorrhea, and muscle fasciculations after spraying insecticide without protective gear.",
        discriminator:
          "The full cholinergic crisis — DUMBBELLS at every muscarinic and nicotinic synapse at once",
        concept: "The two-family rescue: atropine first, pralidoxime second",
        answer:
          "The printed row 2, “Atropine > pralidoxime”: atropine competes at the muscarinic receptor (BLOCK) and immediately dries the secretions that threaten the airway; pralidoxime regenerates the phosphorylated acetylcholinesterase (REBOOT) and restores the enzyme itself. The “>” prints the order of the rescue.",
      },
      {
        stem: "A man presents confused and tachypneic with a profound anion-gap metabolic acidosis after drinking from a bottle of antifreeze; urine microscopy shows envelope-shaped crystals; another patient reports blindness after drinking homemade spirits.",
        discriminator:
          "A toxic alcohol whose PARENT is innocent until alcohol dehydrogenase converts it — ethylene glycol (oxalate crystals, renal injury) versus methanol (formic acid, retinal injury)",
        concept: "The metabolic blockade rescue: fomepizole",
        answer:
          "Fomepizole (the foe of methanol) > ethanol, dialysis — the printed row 17: block alcohol dehydrogenase so the conversion to the toxic acid never happens (ethanol is the same strategy as a competing substrate), and dialysis removes the parent and the acids. The distinction between the two alcohols is which tissue the acid destroys — the kidney (glycolate/oxalate) or the retina (formate).",
      },
      {
        stem: "A patient on methadone maintenance — or one receiving fluconazole with ondansetron — suffers a syncopal episode; the ECG shows a prolonged QT interval, and telemetry captures a polymorphic ventricular tachycardia with a twisting axis.",
        discriminator:
          "QT prolongation with torsades de pointes, naming the culprit class: Methadone plus the ABCDEF agents",
        concept: "The torsades row and “Memorize your ABCDEF”",
        answer:
          "Torsades de pointes is “associated with agents that prolong QT interval: Methadone, antiArrhythmics (class IA, III), antiBiotics (eg, macrolides, fluoroquinolones), anti“C”ychotics (eg, ziprasidone), antiDepressants (eg, TCAs), antiEmetics (eg, ondansetron), antiFungals (eg, fluconazole) (Memorize your ABCDEF)” — First Aid's own red instruction, carried verbatim. Methadone leads the list outside the letters — the M the mnemonic does not spell.",
      },
    ],
    traps: [
      {
        a: "Atropine — the antidote of the organophosphate row",
        b: "Antimuscarinic, anticholinergic agents — the TOXIN of the very next row",
        whyConfused:
          "The same drug family appears on both sides of the table two rows apart, and atropine ALSO appears in the β-blocker row's regimen (atropine, glucagon, saline)",
        keyDifference:
          "The see-saw: against the acetylcholine flood of organophosphate poisoning atropine is the competitor (BLOCK family); when antimuscarinic agents have silenced the receptor the antidote is physostigmine (an AChE inhibitor that crosses the BBB) — and in β-blocker toxicity atropine addresses the bradycardia while glucagon bypasses the blocked β receptor entirely",
        clue:
          "Sort the patient FIRST: wet, wheezing, pinpoint pupils (cholinergic excess → atropine > pralidoxime) vs dry, hot, flushed, dilated, delirious (anticholinergic → physostigmine, control hyperthermia).",
      },
      {
        a: "Dimercaprol, succimer (arsenic and mercury)",
        b: "Penicillamine + calcium disodium EDTA + dimercaprol + succimer (lead — PEDS); “Penny”cillamine + trientine (copper); deferoxamine, deferasirox, deferiprone (iron)",
        whyConfused:
          "Five metal rows, six chelators, overlapping memberships — all of them bind, and half of them share letters",
        keyDifference:
          "The printed mapping is exact: arsenic and mercury share dimercaprol + succimer; lead takes all four PEDS agents (Penicillamine, EDTA, Dimercaprol, Succimer — “PEDS patients lead antidote”); copper is the “Penny” row (penicillamine, trientine — 3 copper pennies); iron is the de-Fe family (deferoxamine, deferasirox, deferiprone — DE-FE takes FE)",
        clue:
          "The metal names the chelator: heavy-metal duo (arsenic/mercury) → dimercaprol + succimer; the pediatric metal (lead) → PEDS; the coin metal (copper) → “Penny”cillamine + trientine; iron → de-Fe.",
      },
      {
        a: "NaHCO3 (alkalinizes urine) — the salicylate row",
        b: "NaHCO3 (stabilizes cardiac cell membrane) — the TCA row",
        whyConfused:
          "One antidote, two rows, two completely different rescue logics — and both cells print the mechanism in the same parentheses style",
        keyDifference:
          "Salicylate bicarbonate is an ELIMINATION detour — alkalinized urine ion-traps salicylate so it is excreted (with dialysis for the severe cases); TCA bicarbonate is an ELECTROPHYSIOLOGIC rescue — sodium load and pH shift stabilize the sodium-channel-blocked cardiac membrane against the widened QRS and arrhythmias",
        clue:
          "Read the parentheses, not the salt: “(alkalinizes urine)” = get it out through the kidney; “(stabilizes cardiac cell membrane)” = protect the myocardium.",
      },
      {
        a: "Vitamin K (delayed effect), PCC/FFP (immediate effect) — warfarin",
        b: "Protamine sulfate (heparin), idarucizumab (dabigatran), andexanet alfa (direct factor Xa inhibitors)",
        whyConfused:
          "Four anticoagulants, four different rescues, all tested as one “reversal” question — and vitamin K's slowness surprises everyone",
        keyDifference:
          "Each reversal is mechanism-matched: warfarin starved the vitamin-K-dependent factors, so vitamin K re-arms synthesis (slow) while PCC/FFP replace the factors (immediate); heparin's negative charge is neutralized by positively charged protamine; dabigatran is captured by the antibody idarucizumab; the factor Xa inhibitors are soaked up by the decoy andexanet alfa",
        clue:
          "Name the anticoagulant first, then answer the speed question: “immediate reversal of warfarin” is PCC/FFP, never vitamin K alone.",
      },
    ],
    pivots: [
      {
        lookAlike:
          "Any “overdosed patient — which antidote?” stem, however elaborate the vignette",
        differentiator:
          "Route it in four moves: NAME THE TOXIN (occupation, smell, bottle, rhythm, exposure scene) → NAME THE MECHANISM OF HARM (metal, receptor overstimulation, receptor silencing, enzyme poisoning, drained substrate, displaced oxygen, oxidized hemoglobin) → MATCH THE RESCUE FAMILY (BIND / BLOCK / REFILL / REBOOT) → NAME THE ANTIDOTE and read its punctuation (the “>” and the parentheses)",
        correctPath:
          "Toxin → harm → family → antidote: the rescue family, not the drug name, is the answer key — and the four families cover all 23 printed rows.",
      },
      {
        lookAlike:
          "A toxidrome with autonomic signs — wet vs dry, pupils, temperature — before any drug name is considered",
        differentiator:
          "The cholinergic see-saw: wet, wheezing, pinpoint pupils, bronchorrhea, fasciculations = acetylcholine excess (AChE inhibitors, organophosphates → atropine > pralidoxime); dry, hot, flushed, dilated, delirious, urinary retention = muscarinic blockade (antimuscarinic agents → physostigmine crossing the BBB, control hyperthermia)",
        correctPath:
          "Pick the side of the see-saw first — the same molecule family is the poison on one side and the antidote on the other, so autonomic signs, not drug names, decide the row.",
      },
      {
        lookAlike:
          "An adverse cardiovascular reaction stem asking for the causal drug list (or a drug asking for its reaction)",
        differentiator:
          "The reaction names the mechanism and the mechanism names the list: vasoconstriction by design → coronary vasospasm (CASE: cocaine, amphetamines, sumatriptan, ergot alkaloids); vasodilation/histamine → cutaneous flushing (VANCEN, plus the vancomycin infusion reaction — histamine release, infusion rate–dependent); myocyte toxins → dilated cardiomyopathy (alcohol, anthracycline with dexrazoxane prevention, trastuzumab); arteriolar-only dilation → dihydropyridine edema; prolonged repolarization → torsades (Methadone + ABCDEF)",
        correctPath:
          "Adverse reaction = intended mechanism misplaced: name the tissue the mechanism landed in, and the drug list follows — torsades always routes through the QT interval.",
      },
    ],
    miniCase: {
      vignette:
        "A 34-year-old agricultural worker is brought to the emergency department 45 minutes after his clothing was saturated while he back-packed organophosphate insecticide through a cotton field without a mask. He is drooling and diaphoretic, with pinpoint pupils, wheezing on auscultation from copious bronchorrhea, frequent watery stools, and visible calf fasciculations; his heart rate is 48/min and his blood pressure 86/50 mm Hg. The team secures the airway, decontaminates him, and prepares the antidote. Which of the following is the best initial antidote therapy, as the printed table orders it?",
      question:
        "Choose the option that correctly names the first antidote — and why it comes first.",
      options: [
        {
          label:
            "Atropine — a competitive antagonist at the muscarinic receptor, given first to out-compete the accumulated acetylcholine, with pralidoxime added to regenerate the poisoned enzyme",
          text: "The printed order: “Atropine > pralidoxime.”",
          correct: true,
          why:
            "Correct on both layers. The printed row 2 reads “AChE inhibitors, organophosphates — Atropine > pralidoxime”: the “>” marks atropine as the preferred initial agent. This patient's immediate threat is the muscarinic flood — bronchorrhea and secretions obstructing and loading the airway, plus bradycardia and hypotension — and atropine (BLOCK family) competes at the muscarinic receptor within minutes, drying the secretions and lifting the bradycardia. Pralidoxime (REBOOT family) then regenerates the phosphorylated acetylcholinesterase and restores muscle strength — the fasciculations — working at the enzyme rather than the receptor. Two families, one printed order: competition first, regeneration second.",
        },
        {
          label:
            "Pralidoxime monotherapy as the initial agent — it “reverses the cause” by reactivating acetylcholinesterase, so no other antidote is needed initially",
          text: "Right drug, wrong order — the cause is not the first threat.",
          why:
            "Order inversion. Pralidoxime does regenerate the phosphorylated enzyme (the REBOOT half of the pair), but it does not immediately control the airway-threatening secretions, the bronchorrhea, or the bradycardia — the findings that kill organophosphate patients first — and its benefit is time-limited by enzyme aging, which is an argument for giving it EARLY, not for giving it ALONE. The printed cell ranks it second (“Atropine > pralidoxime”): atropine dries the patient now; pralidoxime restarts the enzyme now too, but the initial stabilization is muscarinic. The distractor tempts because “reverse the cause” sounds like the purer strategy — but the table's “>” encodes exactly this priority.",
        },
        {
          label:
            "Physostigmine — an acetylcholinesterase inhibitor that crosses the blood-brain barrier, chosen to counteract the insecticide",
          text: "The mirror-row error — the see-saw run backwards.",
          why:
            "Wrong side of the see-saw. Physostigmine is the printed antidote of the NEXT row — “Antimuscarinic, anticholinergic agents → Physostigmine (crosses BBB), control hyperthermia” — where the problem is too LITTLE muscarinic signaling and the fix is to raise acetylcholine until it out-competes the blockade. This patient has too MUCH acetylcholine: the organophosphate has already disabled acetylcholinesterase, and inhibiting it further with physostigmine would deepen the very flood — more secretions, more bronchorrhea, more bradycardia. The two rows are the same physiology in opposite directions; matching the drug name to the famous “antidote” word without routing the see-saw is the classic error.",
        },
        {
          label:
            "Naloxone — a competitive antagonist at the opioid receptor with rapid onset, to reverse the toxin's central and respiratory depression",
          text: "A receptor-competition story at the wrong receptor.",
          why:
            "Wrong receptor, wrong toxin. Naloxone is the printed antidote for “Opioids” — it out-competes opioid agonists at the opioid receptor (the BLOCK family's prototype). Nothing in this vignette is opioid toxicity: the pupils are PINPOINT from cholinergic excess (miosis is shared with opioids, which is the hook of the distractor), but the secretions, bronchorrhea, diarrhea, fasciculations, and bradycardia are muscarinic and nicotinic — a cholinergic crisis, not opioid respiratory depression. The receptor competition logic is right; the receptor is not. Route the mechanism of harm first (enzyme poisoning → acetylcholine flood), and only atropine-plus-pralidoxime survives.",
        },
      ],
      reasoning:
        "The stem is a full cholinergic crisis — the DUMBBELLS cluster (salivation, lacrimation, urination, diarrhea/diaphoresis, bronchorrhea, bronchospasm, bradycardia) plus the nicotinic fasciculations — after a textbook organophosphate exposure, and it asks for the BEST INITIAL antidote. The printed row answers the pairing in two families: “Atropine > pralidoxime.” Atropine is the BLOCK half — a muscarinic competitor that dries the secretions and relieves the bradycardia within minutes, which is why it is first; pralidoxime is the REBOOT half — it reactivates the phosphorylated enzyme itself and rescues the nicotinic (muscle) findings, and its aging clock argues for early use, in parallel, not instead (option A correct; option B inverts the printed “>”). The two distractors each break the routing: option C runs the see-saw backwards — physostigmine is the antidote of the NEXT printed row, where acetylcholine is too little rather than too much, and giving a cholinesterase inhibitor to an organophosphate patient deepens the flood; option D borrows the correct competition logic but at the opioid receptor, hooked by the shared pinpoint pupil, in a patient whose toxin was never an opioid. Route the mechanism of harm first — enzyme poisoned → acetylcholine accumulated → muscarinic competition first, enzyme regeneration second — and the printed order answers the question by itself.",
    },
  },
  mnemonics: [
    {
      code: "BIND, BLOCK, REFILL, REBOOT",
      meaning:
        "Every antidote on the printed table works by one of four rescue mechanisms: BIND — chelators and capture agents sequester the toxin itself (dimercaprol/succimer for arsenic and mercury, the PEDS quartet for lead, “Penny”cillamine + trientine for copper, the de-Fe trio for iron, protamine for heparin, hydroxocobalamin for cyanide, idarucizumab for dabigatran, digoxin immune Fab, andexanet alfa, and O2 displacing carbon monoxide); BLOCK — competitors take the receptor back (naloxone, flumazenil, atropine against the acetylcholine flood); REFILL — the drained substrate is replaced (N-acetylcysteine for glutathione, leucovorin for folate, vitamin K and PCC/FFP for the factors, vitamin C as reducing agent); REBOOT — the poisoned pathway is regenerated, blocked upstream, or detoured (pralidoxime regenerates AChE, fomepizole blocks alcohol dehydrogenase, methylene blue reduces, nitrite + thiosulfate detour cyanide, physostigmine re-arms the cholinergic side, NaHCO3 alkalinizes or stabilizes).",
      memorizes:
        "The mechanism-of-rescue classification of all 23 printed pairs — the table's four logics",
      whenToUse:
        "Any antidote question: after naming the toxin, name the rescue family BEFORE reaching for the drug name; multi-drug rows (organophosphates, cyanide, methemoglobin) split across families exactly as the print splits them",
      clinical:
        "The family predicts the companion therapy — a BIND antidote pairs with removal (dialysis, decontamination), a BLOCK antidote wears off with the toxin still on board (re-dosing), a REFILL antidote needs time (vitamin K's delay), a REBOOT antidote races a clock (pralidoxime versus aging).",
    },
    {
      code: "DE-FE TAKES FE",
      meaning:
        "The iron row's three chelators all spell the metal in their names: DEferoxamine, DEferasirox, DEferiprone — “de-Fe” removes FE (iron's chemical symbol). Iron (Fe) → Deferoxamine, deferasirox, deferiprone, exactly as printed.",
      memorizes:
        "The iron chelator row — and the distinction from the other four metal rows on the page",
      whenToUse:
        "Any iron-overdose or iron-chelation question, and any stem mixing the metals (the toddler with ingested tablets; the transfusion-dependent patient)",
      clinical:
        "Acute iron poisoning (hemorrhagic gastroenteritis, acidosis, hepatotoxicity) gets the parenteral member; chronic overload gets the oral members — and the rose-orange urine of chelation confirms the drug is working (KYP context, not printed).",
    },
    {
      code: "THE CHOLINERGIC SEE-SAW",
      meaning:
        "Rows 2 and 3 of the printed table are opposite ends of one physiology: AChE inhibitors/organophosphates leave TOO MUCH acetylcholine → “Atropine > pralidoxime” (block the muscarinic receptor, then regenerate the enzyme); antimuscarinic/anticholinergic agents leave TOO LITTLE muscarinic signal → “Physostigmine (crosses BBB), control hyperthermia” (inhibit the esterase, raise the acetylcholine, out-compete the blockade). The poison of one row is the antidote class of the other — atropine is rescued-against and rescued-WITH on the same page.",
      memorizes:
        "Which antidote belongs to which autonomic direction, and why atropine and physostigmine are each other's mirror",
      whenToUse:
        "Any toxidrome with autonomic signs — wet/pinpoint/wheezing vs dry/hot/dilated/delirious — and any distractor pairing physostigmine with organophosphates or atropine with anticholinergic toxicity",
      clinical:
        "The see-saw also times the therapy: pralidoxime must precede enzyme aging, and physostigmine's BBB penetration is why it reaches the central anticholinergic delirium that atropine would worsen.",
    },
    {
      code: "K IS SLOW, FAB IS FAST",
      meaning:
        "The speed axis of reversal, printed in the parentheses: warfarin → “Vitamin K (delayed effect), PCC (prothrombin complex concentrate)/FFP (immediate effect)” — vitamin K re-arms factor SYNTHESIS over hours to a day, while PCC/FFP replace the FACTORS now. The other fast capture: digoxin → digoxin-specific antibody FRAGMENTS (Fab) — the BIND family's antibody branch. Complete the quartet by mechanism: heparin → protamine sulfate (charge neutralization), dabigatran → idarucizumab (antibody), direct factor Xa inhibitors → andexanet alfa (decoy).",
      memorizes:
        "Which reversal agents work immediately versus which need synthesis time — and the whole anticoagulant/digoxin reversal set",
      whenToUse:
        "Any “immediate reversal” distractor pair (vitamin K vs PCC/FFP), any digoxin-toxicity stem asking for definitive therapy, and any question matching one of the four anticoagulants to its reversal",
      clinical:
        "The bleeding warfarin patient needs PCC/FFP (or FFP) for immediate reversal, with vitamin K layered in to sustain it; the digoxin-toxic patient with arrhythmia and hyperkalemia needs Fab, not dialysis.",
    },
  ],
  rapidReview: {
    s30: [
      "Acetaminophen → N-acetylcysteine (replenishes glutathione)",
      "AChE inhibitors, organophosphates → Atropine > pralidoxime; Antimuscarinic, anticholinergic agents → Physostigmine (crosses BBB), control hyperthermia",
      "The metals: Arsenic → dimercaprol, succimer · Copper → “Penny”cillamine (penicillamine), trientine (3 copper pennies) · Iron (Fe) → deferoxamine, deferasirox, deferiprone · Lead → penicillamine, calcium disodium EDTA, dimercaprol, succimer (PEDS patients lead antidote) · Mercury → dimercaprol, succimer",
      "Cyanide → hydroxocobalamin, nitrites + sodium thiosulfate; Methemoglobin → methylene blue, vitamin C (reducing agent); Methanol, ethylene glycol (antifreeze) → Fomepizole (the foe of methanol) > ethanol, dialysis; Methotrexate → leucovorin; Carbon monoxide → 100% O2, hyperbaric O2",
      "Benzodiazepines → flumazenil; Opioids → naloxone; β-blockers → atropine, glucagon, saline; Digoxin → digoxin-specific antibody fragments; Salicylates → NaHCO3 (alkalinizes urine), dialysis; TCAs → NaHCO3 (stabilizes cardiac cell membrane)",
      "The reversal quartet: Warfarin → vitamin K (delayed effect), PCC/FFP (immediate effect) · Heparin → protamine sulfate · Dabigatran → idarucizumab · Direct factor Xa inhibitors (eg, apixaban) → andexanet alfa",
      "Drug reactions—cardiovascular: Coronary vasospasm — cocaine, amphetamines, sumatriptan, ergot alkaloids (CASE) · Cutaneous flushing — vancomycin, adenosine, niacin, Ca2+ channel blockers, echinocandins, nitrates (flushed from VANCEN [dancing]); vancomycin infusion reaction = histamine release, infusion rate–dependent · Dilated cardiomyopathy — alcohol, anthracycline (prevent with dexrazoxane), trastuzumab · Peripheral edema — dihydropyridine Ca2+ channel blockers · Torsades de pointes — Methadone + ABCDEF (antiArrhythmics class IA/III, antiBiotics, anti“C”ychotics, antiDepressants, antiEmetics, antiFungals) (Memorize your ABCDEF)",
    ],
    m3: [
      "BIND, BLOCK, REFILL, REBOOT — the four rescue families that classify all 23 pairs: chelators/capture, receptor competitors, substrate repletion, enzyme regeneration/blockade/detour",
      "DE-FE TAKES FE — deferoxamine, deferasirox, deferiprone: every iron chelator spells the metal in its name",
      "THE CHOLINERGIC SEE-SAW — organophosphates (too much ACh) get atropine > pralidoxime; anticholinergics (too little signal) get physostigmine crossing the BBB",
      "K IS SLOW, FAB IS FAST — vitamin K (delayed) vs PCC/FFP (immediate) for warfarin; Fab fragments capture digoxin; protamine, idarucizumab, andexanet complete the quartet",
    ],
    m10: [
      "The page carries TWO tables: 23 antidote rows (TOXIN / TREATMENT, alphabetical acetaminophen→warfarin) and 5 cardiovascular reaction rows — the cardiovascular table prints only TWO column headers (DRUG REACTION / CAUSAL AGENTS); the Vancomycin infusion reaction sentence is a second paragraph INSIDE the cutaneous flushing row's causal-agents cell (the batch brief's NOTES-column description is corrected to the print)",
      "The batch brief's “antiDepressa” truncation worry is adjudicated as NO truncation: the raw text layer, the layout layer, and both VLM reads agree “antiDepressants” prints complete, with the wrap falling after the full word, before “(eg, TCAs)”",
      "The lead row prints “Dimercaprol, Succimer” with capital D/S (the red PEDS capitals — Penicillamine, EDTA, Dimercaprol, Succimer) while the arsenic and mercury rows print “Dimercaprol, succimer” — both spellings carried as printed",
      "“anti“C”ychotics” is the source's own printed spelling — quotation marks around the red capital C (the ABCDEF letter), the printed example ziprasidone; Methadone leads the torsades list OUTSIDE the ABCDEF letters",
      "First Aid's own red mnemonics, carried attributed (NOT among the four KYP codes): PEDS · “Penny”cillamine + trientine (3 copper pennies) · “Dimer”caprol/succ“imer” · the foe of methanol · “Meth”emoglobin→“Meth”ylene blue · “Opi”oids→Nal“oxo”ne · CASE · VANCEN [dancing] · ABCDEF (“Memorize your ABCDEF”) · do/da/de of doxorubicin/daunorubicin/dexrazoxane",
      "Printed punctuation carries orders: “Atropine > pralidoxime” and “Fomepizole … > ethanol” (the preferred-over “>”); “(delayed effect)” vs “(immediate effect)” (the warfarin timing split); “SEC TION II” is the header-space extraction artifact; in-cell wraps (copper, lead, warfarin, flushing cells) joined as printed; subscripts (O2, NaHCO3, Ca2+) carry as plain digits per the text layer",
    ],
  },
  recall: [
    {
      q: "The acetaminophen row, verbatim — treatment and the mechanism printed in the parentheses.",
      a: "Acetaminophen → N-acetylcysteine (replenishes glutathione) — the REFILL family's prototype.",
    },
    {
      q: "The organophosphate row, verbatim — including the printed “>” and what each half of the pair does.",
      a: "AChE inhibitors, organophosphates → Atropine > pralidoxime — atropine competes at the muscarinic receptor against the accumulated acetylcholine (BLOCK, given first); pralidoxime regenerates the phosphorylated AChE (REBOOT).",
    },
    {
      q: "The antimuscarinic row, verbatim — and why its antidote is itself a cholinesterase inhibitor.",
      a: "Antimuscarinic, anticholinergic agents → Physostigmine (crosses BBB), control hyperthermia — physostigmine inhibits AChE to RAISE acetylcholine until it out-competes the muscarinic blockade, and it crosses the blood-brain barrier to reach the central delirium; hyperthermia is controlled supportively.",
    },
    {
      q: "The five metal rows, verbatim (arsenic, copper, iron, lead, mercury).",
      a: "Arsenic → Dimercaprol, succimer · Copper → “Penny”cillamine (penicillamine), trientine (3 copper pennies) · Iron (Fe) → Deferoxamine, deferasirox, deferiprone · Lead → Penicillamine, calcium disodium EDTA, Dimercaprol, Succimer, (PEDS patients lead antidote) · Mercury → Dimercaprol, succimer.",
    },
    {
      q: "The toxic-alcohol and methemoglobin rows, verbatim.",
      a: "Methanol, ethylene glycol (antifreeze) → Fomepizole (the foe of methanol) > ethanol, dialysis · Methemoglobin → Methylene blue, vitamin C (reducing agent).",
    },
    {
      q: "The cyanide, methotrexate, and digoxin rows, verbatim.",
      a: "Cyanide → Hydroxocobalamin, nitrites + sodium thiosulfate · Methotrexate → Leucovorin · Digoxin → Digoxin-specific antibody fragments.",
    },
    {
      q: "The four anticoagulant-reversal rows, verbatim — with the printed timing parentheses.",
      a: "Warfarin → Vitamin K (delayed effect), PCC (prothrombin complex concentrate)/FFP (immediate effect) · Heparin → Protamine sulfate · Dabigatran → Idarucizumab · Direct factor Xa inhibitors (eg, apixaban) → Andexanet alfa.",
    },
    {
      q: "The five cardiovascular reaction rows, verbatim (reaction + causal agents) — including First Aid's own mnemonics, attributed.",
      a: "Coronary vasospasm — Cocaine, Amphetamines, Sumatriptan, Ergot alkaloids (CASE) · Cutaneous flushing — Vancomycin, Adenosine, Niacin, Ca2+ channel blockers, Echinocandins, Nitrates (flushed from VANCEN [dancing]); vancomycin infusion reaction (formerly called red man syndrome)—histamine release → widespread pruritic erythema; infusion rate–dependent; manage with slower infusion rate, diphenhydramine · Dilated cardiomyopathy — Alcohol, anthracycline (eg, doxorubicin, daunorubicin; prevent with dexrazoxane), trastuzumab · Peripheral edema — Dihydropyridine Ca2+ channel blockers (eg, amlodipine) · Torsades de pointes — agents that prolong QT interval: Methadone, antiArrhythmics (class IA, III), antiBiotics (eg, macrolides, fluoroquinolones), anti“C”ychotics (eg, ziprasidone), antiDepressants (eg, TCAs), antiEmetics (eg, ondansetron), antiFungals (eg, fluconazole) (Memorize your ABCDEF).",
    },
  ],
  related: [
    {
      title: "Cholinomimetics",
      topicId: "cholinomimetics",
      note:
        "The other side of two printed rows: physostigmine is a cholinesterase inhibitor (the reversible, BBB-crossing kind) and pralidoxime regenerates the very enzyme the irreversible organophosphates destroy — this note's antidote rows are the emergency converse of the cholinomimetic pharmacology.",
    },
    {
      title: "Muscarinic Antagonists",
      topicId: "muscarinic-antagonists",
      note:
        "Atropine wears three hats on this page — the antidote of the organophosphate row, the regimen partner in the β-blocker row (atropine, glucagon, saline), and the namesake toxin class of the antimuscarinic row that physostigmine treats; the anticholinergic toxidrome (dry, hot, flushed, dilated) is the antimuscarinic note's adverse-effect list turned into a poisoning.",
    },
    {
      title: "AV Conduction Blocks",
      topicId: "av-conduction-blocks",
      note:
        "The rhythm endpoint of the torsades row: QT prolongation → early afterdepolarizations → the polymorphic, twisting ventricular tachycardia — the arrhythmia-classification note supplies what the ABCDEF list implies electrophysiologically.",
    },
    {
      title: "Drug Reactions — Endocrine",
      topicId: "drug-reactions-endocrine",
      note:
        "The sibling drug-reactions table of the same First Aid series (produced in this same batch): the same reaction → causal-agents format for the endocrine reactions, just as this page's bottom table does for the cardiovascular ones — study the two as one pattern: the adverse reaction is the drug's mechanism, misplaced.",
    },
  ],
  crossLinks: [
    {
      subject: "Biochemistry (glutathione, NAPQI, and oxidative detoxification)",
      connection:
        "The acetaminophen row is applied detoxification biochemistry: glutathione conjugates the reactive metabolite (KYP context: NAPQI, formed via cytochrome P450), overdose exhausts the store, and N-acetylcysteine — a glutathione precursor — replenishes it. The same glutathione/NADPH antioxidant axis returns in the pentose phosphate pathway and oxidative-stress notes; the drug card marks which statements are the page's and which are KYP context.",
    },
    {
      subject: "Biochemistry (folate metabolism and the leucovorin rescue)",
      connection:
        "The methotrexate row is the DHFR inhibition story: methotrexate starves the thymidylate-synthesis pathway of reduced folate, and leucovorin (folinic acid) bypasses the block by supplying the already-reduced cofactor — the same “leucovorin rescue” that antimetabolite chemotherapy notes teach, here compressed into one printed pair.",
    },
    {
      subject: "Cardiology (QT interval, IKr blockade, and torsades physiology)",
      connection:
        "The torsades row's drug list all shares one electrophysiologic mechanism (KYP context): blockade of the rapid delayed-rectifier potassium current (IKr/hERG) during phase 3 repolarization → QT prolongation → early afterdepolarizations → triggered, polymorphic ventricular tachycardia. Every class on the printed list — methadone, class IA/III antiarrhythmics, macrolides, fluoroquinolones, ziprasidone, TCAs, ondansetron, fluconazole — owes its place on the row to that one current; the same warfarin-row timing parentheses mirror the vitamin-K-dependent factor story (γ-carboxylation of II, VII, IX, X and proteins C/S — synthesis takes hours, so PCC/FFP replace the finished factors immediately).",
    },
  ],
};
