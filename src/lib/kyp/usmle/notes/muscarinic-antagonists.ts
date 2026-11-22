import type { KypUsMLENote } from "../types";

// Pharmacology — MUSCARINIC ANTAGONISTS (PH20 — the CLASS TABLE page: the
// seven-row DRUGS × ORGAN SYSTEMS × APPLICATIONS table of the muscarinic
// antagonist class). Source: pdf 262 / book 240, the UPPER portion of the
// page under the standing 'PHARMACOLOGY—AUTONOMIC DRUGS' banner.
// PH20/PH21 BOUNDARY FINDING (the inventory's two book-240 topics ARE
// separable on inspection): pdf 262 prints TWO sections under the one
// banner — the 'Muscarinic antagonists' class table ABOVE (THIS topic)
// and the dedicated 'Atropine' block BELOW (the separate pending
// 'atropine' topic, PH21: the intro 'Muscarinic antagonist. Used to
// treat bradycardia and for ophthalmic applications.', the ORGAN
// SYSTEM/ACTION/NOTES grid with its 'Blocks muscarinic effects
// (DUMBBELSS) of anticholinesterases, but not the nicotinic effects'
// NOTES cell, the ADVERSE EFFECTS cell, the seven-line anticholinergic
// mnemonic 'Hot as a hare / Fast as a fiddle / Dry as a bone / Red as a
// beet / Blind as a bat / Mad as a hatter / Full as a flask', and
// 'Jimson weed (Datura) → gardener's pupil (mydriasis)') — the WHOLE
// atropine block is RESERVED for PH21 and EXCLUDED here; only its
// boundary is pinned (its toxicity lines are never cited as THIS
// topic's own print — this class table prints USES only).
// THE SEVEN ROWS, verbatim: (1) 'Atropine, homatropine, tropicamide' |
// 'Eye' | 'Produce mydriasis and cycloplegia'; (2) 'Benztropine,
// trihexyphenidyl' | 'CNS' | 'Parkinson disease (“park my Benz”)' +
// 'Acute dystonia'; (3) 'Glycopyrrolate' | 'GI, respiratory' |
// 'Parenteral: preoperative use to reduce airway secretions' + 'Oral:
// reduces drooling, peptic ulcer'; (4) 'Hyoscyamine, dicyclomine' |
// 'GI' | 'Antispasmodics for irritable bowel syndrome'; (5)
// 'Ipratropium, tiotropium' | 'Respiratory' | 'COPD, asthma' +
// 'Duration: tiotropium > ipratropium'; (6) 'Solifenacin, Oxybutynin,
// Flavoxate, Tolterodine' | 'Genitourinary' | 'Reduce bladder spasms
// and urge urinary incontinence (overactive bladder)' + 'Make bladder
// SOFT'; (7) 'Scopolamine' | 'CNS' | 'Motion sickness'.
// The book's OWN mnemonics print inside the cells: 'park my Benz'
// (benztropine, Parkinson disease) and 'Make bladder SOFT' (the GU
// four's initials: Solifenacin, Oxybutynin, Flavoxate, Tolterodine).
// RASTER CENSUS: ZERO raster images on pdf 262-263 — the section is
// PURE TEXT, COPYRIGHTED, never reproduced as artwork; carried VERBATIM
// as this note's two table blocks (ORIGINAL_KYP_ADAPTATION) and
// conveyed as ONE original KYP class map (MuscarinicAntagonistsMap).
// SECTION EXTENT: does NOT extend to pdf 263 — pdf 263 (book 241) opens
// the separate 'Sympathomimetics' section; sourcePages = [262] only.
// SYMPATHOMIMETICS OVERLAP CENSUS (task brief): the pre-existing pilot
// note 'sympathomimetics' (src/lib/kyp/usmle/notes/) carries sourceRef
// 'First Aid 2026, Part 1 pp. 240–243' and its manifest pins pdfPages
// [262-265] — the book-240/pdf-262 endpoint OVER-CLAIMS this page: the
// sympathomimetics table (albuterol through ephedrine) prints ENTIRELY
// on pdf 263-265 (book 241-243); pdf 262 carries only THIS class table
// + the atropine block (PH21) — NO CONTENT OVERLAP with PH20; the
// boundary is pinned here so no double coverage arises.
// BOUNDARY CENSUS: pdf 261 (book 239) behind carries the COMPLETED PH18
// 'cholinomimetic-agents' (upper) and PH19 'anticholinesterase-
// poisoning' (lower) — the latter's printed antidote clauses are this
// class's mirror anchors ('Reversed by atropine, a competitive
// inhibitor.' + 'physostigmine "phyxes" atropine overdose.'); pdf 258
// (book 236) carries the COMPLETED PH14 'micturition-control' whose
// drug table already prints 'Muscarinic antagonists (eg, oxybutynin)'
// for urgency incontinence — the physiology of this table's GU lane;
// the 'atropine' topic (PH21) is the pending same-page block below.
// KYP EXTENSIONS (flagged wherever they appear): the BODY-LANE LADDER
// (the five organ-system lanes read as a body tour); the LOCK-AND-LANE
// reading (one muscarinic lock, seven aimings; the chemistry behind the
// aiming — quaternary amines, BBB entry, inhaled delivery — is NOT
// printed on this page, flagged); the DRY-MIRROR frame (the
// anti-DUMBBELSS direction — the printed wet list of book 239 reversed;
// the printed dry list lives in the atropine block below, PH21's own);
// and the ANTIDOTE-MIRROR frame (both clauses printed one page back).

export const muscarinicAntagonists: KypUsMLENote = {
  id: "muscarinic-antagonists",
  title: "Muscarinic Antagonists",
  subtitle:
    "One lock, five organ lanes, seven drug sets — the class table of book 240 read as a body map: the SAME competitive muscarinic blockade aimed at the eye ('Produce mydriasis and cycloplegia'), the brain ('Parkinson disease (“park my Benz”)' + 'Motion sickness'), the gut and its secretions ('Parenteral: preoperative use to reduce airway secretions' / 'Oral: reduces drooling, peptic ulcer' + 'Antispasmodics for irritable bowel syndrome'), the airway ('COPD, asthma' — 'Duration: tiotropium > ipratropium'), and the bladder ('Reduce bladder spasms and urge urinary incontinence (overactive bladder)' — 'Make bladder SOFT').",
  subject: "Pharmacology",
  system:
    "Section II · Pharmacology — Autonomic Drugs (the banner this page shares with drug-effect-modifications, autonomic-receptors, acetylcholine-receptors, pain-transmission, micturition-control, tissue-distribution-of-adrenergic-receptors, g-protein-linked-second-messengers, autonomic-drugs, cholinomimetic-agents, and anticholinesterase-poisoning before it — the Muscarinic antagonists section OPENS book 240, in the UPPER portion of a page whose LOWER portion is the dedicated Atropine block: the separate pending atropine topic (PH21), this table's headliner expanded into its own drug entry; the previous page (book 239) carried the cholinomimetic agonists (PH18) and the cholinergic toxidrome (PH19) whose printed first antidote is this class's headliner — 'Reversed by atropine, a competitive inhibitor.' — and whose last printed row carries this class's own overdose antidote — physostigmine; the next page (book 241) opens the sympathomimetics table)",
  pilotCategory:
    "The drug-class table's complete architecture — the seven-row DRUGS × ORGAN SYSTEMS × APPLICATIONS table in full (every drug set, organ-system lane, and applications cell verbatim, including the book's own 'park my Benz' and 'Make bladder SOFT' mnemonics and the printed duration line 'Duration: tiotropium > ipratropium'), plus the KYP layers that compress it: the BODY-LANE LADDER (the five organ-system lanes as a body tour), the LOCK-AND-LANE reading (one receptor lock, seven aimings; the route/chemistry behind lane-aiming flagged as not printed), the DRY-MIRROR frame (the anti-DUMBBELSS leak direction, with the printed dry list flagged as the atropine block below — PH21's own), the ANTIDOTE-MIRROR frame (the two printed clauses of book 239), and the PH20/PH21 boundary census (the same-page split and the sympathomimetics over-claim documentation).",
  difficulty: 2,
  readTime: 7,
  sourceRef:
    "First Aid 2026, Part 1 pp. 240 (Pharmacology — Autonomic Drugs: Muscarinic antagonists — the drug class table, the UPPER portion of the page; the dedicated Atropine block on the SAME page below — the intro 'Muscarinic antagonist. Used to treat bradycardia and for ophthalmic applications.', the ORGAN SYSTEM/ACTION/NOTES grid, the ADVERSE EFFECTS cell, the seven-line anticholinergic mnemonic, and the Jimson weed line — is the SEPARATE pending atropine topic (PH21) and is EXCLUDED here; this section prints ONE element — the seven-row table — carried verbatim: 'Atropine, homatropine, tropicamide' | 'Eye' | 'Produce mydriasis and cycloplegia'; 'Benztropine, trihexyphenidyl' | 'CNS' | 'Parkinson disease (“park my Benz”)' + 'Acute dystonia'; 'Glycopyrrolate' | 'GI, respiratory' | 'Parenteral: preoperative use to reduce airway secretions' + 'Oral: reduces drooling, peptic ulcer'; 'Hyoscyamine, dicyclomine' | 'GI' | 'Antispasmodics for irritable bowel syndrome'; 'Ipratropium, tiotropium' | 'Respiratory' | 'COPD, asthma' + 'Duration: tiotropium > ipratropium'; 'Solifenacin, Oxybutynin, Flavoxate, Tolterodine' | 'Genitourinary' | 'Reduce bladder spasms and urge urinary incontinence (overactive bladder)' + 'Make bladder SOFT'; 'Scopolamine' | 'CNS' | 'Motion sickness' — the book's own mnemonics 'park my Benz' and 'Make bladder SOFT' print inside the cells; the table is pure text with zero rasters, never reproduced as artwork, carried verbatim as this note's two table blocks; NOT printed on this page (census-flagged, never cited as printed): the chemistry behind lane-aiming (quaternary-amine peripheral restriction of glycopyrrolate/ipratropium/tiotropium, BBB entry of the tertiary amines, the inhaled route) and ANY toxicity column — the printed adverse-effect lines ('↑ body temperature (due to ↓ sweating); ↑ HR; dry mouth; dry, flushed skin; cycloplegia; constipation; disorientation', the angle-closure/prostatic-hyperplasia/infant-hyperthermia line, 'Hot as a hare' family, 'Jimson weed (Datura) → gardener's pupil (mydriasis)') print in the atropine block BELOW on this same page (PH21's portion — adjacent, excluded); the section does NOT extend to pdf 263 (book 241 opens Sympathomimetics); boundary overlap census: the pre-existing pilot note 'sympathomimetics' carries sourceRef 'pp. 240–243' / pdfPages 262-265 — an endpoint that over-claims book 240, as its table content prints entirely on pdf 263-265 (book 241-243) — no content overlap with this topic; the mirror anchors print one page back: 'Reversed by atropine, a competitive inhibitor.' (book 239) and 'physostigmine \"phyxes\" atropine overdose.' (book 239); the GU lane's physiology prints on book 236 ('Muscarinic antagonists (eg, oxybutynin)' → urgency incontinence))",
  tags: [
    "muscarinic antagonists",
    "anticholinergics",
    "antimuscarinics",
    "atropine",
    "homatropine",
    "tropicamide",
    "benztropine",
    "trihexyphenidyl",
    "glycopyrrolate",
    "hyoscyamine",
    "dicyclomine",
    "ipratropium",
    "tiotropium",
    "solifenacin",
    "oxybutynin",
    "flavoxate",
    "tolterodine",
    "scopolamine",
    "mydriasis",
    "cycloplegia",
    "Parkinson disease",
    "acute dystonia",
    "irritable bowel syndrome",
    "COPD",
    "asthma",
    "overactive bladder",
    "urge incontinence",
    "motion sickness",
    "park my Benz",
    "Make bladder SOFT",
    "pharmacology",
  ],
  core: {
    what:
      "ONE LOCK, FIVE LANES, SEVEN DRUG SETS. The section is a single table — DRUGS × ORGAN SYSTEMS × APPLICATIONS — that maps the whole muscarinic-antagonist class onto the body. EYE: 'Atropine, homatropine, tropicamide' → 'Produce mydriasis and cycloplegia'. CNS: 'Benztropine, trihexyphenidyl' → 'Parkinson disease (“park my Benz”)' + 'Acute dystonia', and 'Scopolamine' → 'Motion sickness'. GI/RESPIRATORY SECRETIONS: 'Glycopyrrolate' → 'Parenteral: preoperative use to reduce airway secretions' + 'Oral: reduces drooling, peptic ulcer'. GI SPASM: 'Hyoscyamine, dicyclomine' → 'Antispasmodics for irritable bowel syndrome'. RESPIRATORY: 'Ipratropium, tiotropium' → 'COPD, asthma' with the table's own comparator line — 'Duration: tiotropium > ipratropium'. GENITOURINARY: 'Solifenacin, Oxybutynin, Flavoxate, Tolterodine' → 'Reduce bladder spasms and urge urinary incontinence (overactive bladder)' — 'Make bladder SOFT' (the book's own mnemonic, spelled by the four drugs' initials). The class banner is the page's own header: 'Muscarinic antagonists'.",
    why:
      "WHY ONE LOCK NEEDS SEVEN AIMINGS. Every drug in the table blocks the same receptor — the muscarinic acetylcholine receptor, the receiving plate of the parasympathetic lane that book 238 drew and book 235 mapped (the M-addresses). If the lock were indiscriminate, the class would be one drug with one systemic effect; the table exists because ROUTE and DISTRIBUTION aim the block at a lane: glycopyrrolate's printed route pair ('Parenteral: preoperative use to reduce airway secretions' / 'Oral: reduces drooling, peptic ulcer') aims one drug at the airway glands and the salivary glands; the respiratory pair (ipratropium, tiotropium) is aimed at the bronchi; the two CNS entries (benztropine/trihexyphenidyl, scopolamine) are aimed at the brain. The chemistry behind the aiming (KYP flag — NOT printed on this page): the quaternary amines (glycopyrrolate, ipratropium, tiotropium) carry a permanent charge that keeps them out of the brain, while the tertiary amines (atropine, scopolamine, benztropine) enter it — the printed rows are consistent with the rule (scopolamine's printed lane is 'CNS'), but the rule itself is KYP's. WHY THE EXAM LOVES THIS PAGE: the test is never 'what does atropine do' — it is the MATCH (which drug for which organ, the body-lane sort), the DURATION line ('tiotropium > ipratropium'), the two printed mnemonics ('park my Benz', 'Make bladder SOFT'), and the LEAK — blockade that spills beyond its lane produces the anti-DUMBBELSS dry direction (the printed wet list of book 239, one page back, reversed). BOUNDARY RULE: this class table prints USES only — the printed adverse-effects cell, the seven-line 'Hot as a hare' mnemonic, and the Jimson weed line print in the ATROPINE BLOCK BELOW on this same page (the separate atropine topic, PH21), flagged here as the adjacent block, never cited as this table's own print.",
    keyIdea:
      "Read the table as a LOCK-AND-LANE map (KYP compression of the page's own three columns). THE LOCK: muscarinic receptors, blocked competitively — occupancy without activation, so the parasympathetic message stops at the blocked address (the mechanism word 'competitive' is printed one page back: 'Reversed by atropine, a competitive inhibitor.'). THE LADDER — five body lanes, each with its printed drug set: EYE (atropine, homatropine, tropicamide — dilate and freeze accommodation), BRAIN (benztropine/trihexyphenidyl for Parkinson disease and acute dystonia — 'park my Benz'; scopolamine for motion sickness), GUT (glycopyrrolate for secretions and drooling; hyoscyamine/dicyclomine as IBS antispasmodics), AIRWAY (ipratropium/tiotropium for COPD and asthma — 'Duration: tiotropium > ipratropium'), BLADDER (the SOFT four — Solifenacin, Oxybutynin, Flavoxate, Tolterodine — 'Make bladder SOFT'). THE LEAK: blockade beyond the lane = the dry mirror, anti-DUMBBELSS (miosis→mydriasis, bradycardia→tachycardia, pouring glands→dry mouth and skin, cramping gut→constipation, letting-go bladder→retention). One line: same lock, different lane — match the organ to the row, and read every adverse effect as the same lock in the wrong lane.",
  },
  mechanisms: [
    {
      id: "muscarinic-receptor-competitive-block",
      title:
        "The class lock: competitive blockade at the muscarinic receptor (the M-addresses of book 235) removes parasympathetic tone lane by lane — each printed row is one lane's tone removed (eye dilates, glands dry, gut calms, airway opens, bladder holds)",
      context:
        "The section header 'Muscarinic antagonists' (book 240, upper portion — the class-name banner) plus the table's three printed columns, carried verbatim in the note's first table block. The receptor map is book 235's own (PH12, acetylcholine-receptors: the muscarinic GPCR family vs the nicotinic channel); the synapse is book 238's own (PH17, autonomic-drugs: ACh → Cholinoreceptors → AChE → Choline + Acetate); the mechanism word 'competitive' is printed one page back (book 239, PH19's antidote clause: 'Reversed by atropine, a competitive inhibitor.'). The lane-by-lane organ reading is KYP's compression of the page's own ORGAN SYSTEMS column.",
      flow: {
        nodes: [
          {
            id: "input",
            label: "The tone to remove: parasympathetic output reaching its end organs through MUSCARINIC receptors — the M-addresses of book 235's map, the receiving plate of book 238's cholinergic lane",
            sublabel:
              "Input — the parasympathetic message the class silences: glandular secretion (saliva, sweat, airway secretions), smooth-muscle tone (pupillary sphincter, ciliary muscle, bronchi, gut, detrusor), and cardiac slowing (the muscarinic addresses of the SA node). Every therapeutic use in the table is one of these addresses with its tone turned down.",
            variant: "input",
          },
          {
            id: "block",
            label: "STEP 1 — THE ANTAGONIST OCCUPIES THE RECEPTOR: competitive blockade without activation — the receptor is held, not triggered",
            sublabel:
              "The class banner 'Muscarinic antagonists' is this page's own header; the mechanism word is printed one page back — 'Reversed by atropine, a competitive inhibitor.' (book 239, the wet tier's antidote clause — the printed bridge between the poison page and this drug-class page). Occupancy without signal: acetylcholine arrives and finds the plate occupied, so the parasympathetic command never lands. The opposite page (book 239, PH18) is the agonist story — bethanechol 'Activates bladder smooth muscle'; this page is the antagonist story — the same receptors held shut.",
            variant: "process",
          },
          {
            id: "lanes",
            label: "STEP 2 — EACH LANE READS AS ONE PRINTED ROW: Eye 'Produce mydriasis and cycloplegia' · CNS 'Parkinson disease (“park my Benz”)' + 'Acute dystonia' + 'Motion sickness' · GI 'reduce airway secretions' / 'Antispasmodics for irritable bowel syndrome' · Respiratory 'COPD, asthma' · GU 'Reduce bladder spasms and urge urinary incontinence (overactive bladder)'",
            sublabel:
              "The tone removed IS the therapeutic effect, organ by organ: the pupillary sphincter and ciliary muscle lose M-tone (mydriasis + cycloplegia — the eye row's own words); the detrusor loses M-tone (the micturition page's printed mechanics: '⊝ M receptor → relaxation of detrusor smooth muscle' → urgency quiets — book 236); the airway glands fall silent ('preoperative use to reduce airway secretions', 'reduces drooling'); the bronchi relax ('COPD, asthma'); the gut's spasms calm ('Antispasmodics for irritable bowel syndrome'); and the CNS entries ride the same lock into the brain (the Parkinson/dystonia row and motion sickness).",
            variant: "process",
          },
          {
            id: "output",
            label: "RESULT — one lock, seven aimings: the class's therapeutic charter is 'remove parasympathetic tone where it is unwanted' — the seven printed rows are seven aimings of the one mechanism, sorted by the body lane each aims at",
            sublabel:
              "Output — the whole table in one sentence: same lock, different lane. The exam's 'which of the following' questions on this class are MATCH questions — the stem names an organ scenario (eye exam, acute dystonia, IBS, preoperative secretions, COPD, overactive bladder, motion sickness) and the answer is the lane's printed drug set. The therapeutic window is the lane; the toxicity is the leak (the next mechanism) — and the printed toxicity lines live in the atropine block below (the separate atropine topic, PH21).",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "block", label: "the antagonist finds the plate" },
          { from: "block", to: "lanes", label: "tone off, lane by lane" },
          { from: "lanes", to: "output", label: "seven rows = seven aimings" },
        ],
      },
    },
    {
      id: "organ-lane-selectivity-dry-leak",
      title:
        "The lane map and the leak: WHY seven drug sets for one lock — route and distribution aim the block at its lane (glycopyrrolate's printed route pair; the inhaled respiratory pair; the two CNS entries) — and blockade that LEAKS beyond its lane is the anti-DUMBBELSS dry direction (the printed adverse-effect list lives in the atropine block below — PH21)",
      context:
        "The table's own route and organ-system cells (book 240, upper portion), carried verbatim in the note's first table block. The LANE-AIMER reading (the printed route pair and organ-system entries as the aiming mechanism) is KYP's; the CHEMISTRY behind the aiming (quaternary-amine peripheral restriction for glycopyrrolate/ipratropium/tiotropium, BBB entry of the tertiary amines, the inhaled route's topical delivery) is NOT printed on this page — flagged as KYP wherever used, never cited as printed. The dry-mirror frame stands on two printed neighbors: the wet list of book 239 (PH19 — 'Diarrhea, Urination, Miosis, Bronchospasm, Bradycardia, Emesis, Lacrimation, Sweating, Salivation.') and the dry list of the atropine block BELOW on this same page (PH21's portion — the adverse-effects cell and the seven-line mnemonic), both flagged as adjacent prints, never this table's own.",
      flow: {
        nodes: [
          {
            id: "input",
            label: "The problem of one lock: if every muscarinic antagonist blocked every M-address, the class would have one drug and one systemic effect — the table's SEVEN rows are the answer to 'how does one mechanism become seven drugs?'",
            sublabel:
              "Input — the question the table silently answers. Two antagonists with the same receptor affinity differ only in where they go: the aiming, not the locking. The page prints the aimings as its own columns (ORGAN SYSTEMS, APPLICATIONS) and one explicit route pair (glycopyrrolate's 'Parenteral' / 'Oral'); everything else about delivery is standard pharmacology the page leaves unsaid.",
            variant: "input",
          },
          {
            id: "aimers",
            label: "STEP 1 — THE PRINTED LANE-AIMERS: glycopyrrolate's route pair ('Parenteral: preoperative use to reduce airway secretions' / 'Oral: reduces drooling, peptic ulcer') · the 'Respiratory' lane of ipratropium/tiotropium · the two 'CNS' entries (benztropine/trihexyphenidyl; scopolamine)",
            sublabel:
              "The table's own aiming evidence, all verbatim: one drug split by route into two glandular uses (glycopyrrolate — the only row that prints its routes); one pair aimed at 'Respiratory' (ipratropium/tiotropium — delivery by inhalation, KYP flag: the inhaled route is not printed); and two rows printed into the 'CNS' (the movement-disorder pair and the motion-sickness solo). The organ-system column IS the aiming map — the table's own second column.",
            variant: "process",
          },
          {
            id: "chemistry",
            label: "STEP 2 — THE CHEMISTRY BEHIND THE AIMING (KYP flag — NOT printed on this page): quaternary amines (glycopyrrolate, ipratropium, tiotropium) stay out of the brain; tertiary amines (atropine, scopolamine, benztropine) enter it",
            sublabel:
              "The structure-property rule the printed rows obey but never state: the permanently charged quaternary amines cannot cross the blood-brain barrier (glycopyrrolate for glands, ipratropium/tiotropium for airway — peripheral lanes), while the tertiary amines reach the CNS (scopolamine's printed lane is 'CNS' — motion sickness is a brain effect; benztropine/trihexyphenidyl treat CNS movement disorders). The book prints the LANES; the rule explaining them is KYP's, flagged — never cite the chemistry as this page's print. (The mirror fact prints one page back for neostigmine: 'no blood-brain barrier penetration due to positive charge' — the book's own wording for the same principle on the agonist side.)",
            variant: "process",
          },
          {
            id: "leak",
            label: "STEP 3 — THE LEAK: blockade beyond the lane = the ANTI-DUMBBELSS direction — the printed wet list of book 239 reversed (miosis→mydriasis, bronchospasm→bronchodilation + dry airway, bradycardia→tachycardia, glands pouring→dry mouth and dry skin, gut cramping→constipation, bladder letting go→retention)",
            sublabel:
              "No aim is perfect: oral oxybutynin dries the mouth and constipates on its way to the bladder; inhaled ipratropium still dries the mouth. The leak direction is exactly the reverse of the wet toxidrome printed one page back (PH19's muscarinic tier — 'DUMBBELSS.'): every wet finding flips dry. The EXTREME of the leak is the anticholinergic toxidrome — whose PRINTED lines (the adverse-effects cell, the seven-line 'Hot as a hare' mnemonic, 'Jimson weed (Datura) → gardener's pupil (mydriasis)') live in the ATROPINE BLOCK BELOW on this same page (PH21's portion) — flagged as the adjacent block, never this table's own print.",
            variant: "process",
          },
          {
            id: "output",
            label: "RESULT — the boundary rule of this page: the class table prints USES only (no toxicity column) — the printed toxicity set belongs to the atropine block below (PH21), and the printed wet mirror belongs to book 239 (PH19): this topic carries the LOCK, the LADDER, and the LEAK DIRECTION",
            sublabel:
              "Output — what the exam can and cannot ask from this page alone: the MATCH (organ → drug set), the DURATION line ('tiotropium > ipratropium'), the two printed mnemonics ('park my Benz', 'Make bladder SOFT'), and the MECHANISM WORD ('competitive' — printed one page back). The full adverse-effect list, the seven-line mnemonic, the Jimson weed story, and atropine's organ-by-organ action grid are the atropine block's own (PH21) — adjacent on this page, excluded from this topic.",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "aimers", label: "the table's own columns aim the lock" },
          { from: "aimers", to: "chemistry", label: "the unprinted rule behind the lanes" },
          { from: "chemistry", to: "leak", label: "no aim is perfect — the spill dries" },
          { from: "leak", to: "output", label: "uses here; toxicity one block below (PH21)" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "muscarinic-antagonists-map",
      title: "The muscarinic antagonists map (an original KYP visual)",
      caption:
        "An original KYP class map conveying the section's seven-row drug table (book 240, upper portion): THE LOCK STRIP (the muscarinic receptor blocked competitively — the tone removed lane by lane, with the mechanism word 'competitive' printed one page back); THE FIVE ORGAN-LANE CARDS (EYE — 'Atropine, homatropine, tropicamide' → 'Produce mydriasis and cycloplegia'; CNS — 'Benztropine, trihexyphenidyl' → 'Parkinson disease (“park my Benz”)' + 'Acute dystonia', and 'Scopolamine' → 'Motion sickness'; GI — 'Glycopyrrolate' → 'Parenteral: preoperative use to reduce airway secretions' + 'Oral: reduces drooling, peptic ulcer', and 'Hyoscyamine, dicyclomine' → 'Antispasmodics for irritable bowel syndrome'; RESPIRATORY — 'Ipratropium, tiotropium' → 'COPD, asthma' + 'Duration: tiotropium > ipratropium'; GENITOURINARY — the SOFT four → 'Reduce bladder spasms and urge urinary incontinence (overactive bladder)' + 'Make bladder SOFT'); THE DRY-MIRROR BAND (the anti-DUMBBELSS leak direction, with the printed dry list flagged as the atropine block below — PH21); THE ANTIDOTE-MIRROR STRIP (both printed clauses of book 239); and the boundary + reading-rule footer.",
      notice:
        "Census (pdfimages + text layer): the section's table is PURE TEXT with ZERO raster images on pdf 262-263 — COPYRIGHTED, never reproduced as artwork; this visual conveys the seven rows, the three column headers, and the book's own two mnemonics as an ORIGINAL_KYP_ADAPTATION (every drug set, organ system, and applications cell is the book's own print; the lock strip, the lane cards, the dry-mirror band, and the coverage maps are KYP's). KYP extensions flagged on the map: the BODY-LANE LADDER, the LOCK-AND-LANE reading (the chemistry behind lane-aiming — quaternary/tertiary amines, BBB entry, inhaled delivery — NOT printed on this page, flagged), the DRY-MIRROR frame (the printed adverse-effects cell and the seven-line 'Hot as a hare' mnemonic print in the ATROPINE BLOCK BELOW on this same page — the separate pending atropine topic, PH21 — flagged as adjacent, never cited as this table's own print), and the ANTIDOTE-MIRROR frame ('Reversed by atropine, a competitive inhibitor.' + 'physostigmine \"phyxes\" atropine overdose.' — both printed one page back, book 239). EXCLUDED: the dedicated Atropine block on the SAME book-240 page BELOW this table (the separate pending atropine topic PH21 — the intro, the action grid, the adverse-effects cell, the seven-line mnemonic, the Jimson weed line), the completed cholinomimetic-agents and anticholinesterase-poisoning sections on pdf 261 behind (the agonist mirror and the wet toxidrome), and the sympathomimetics section on pdf 263 ahead (this section does NOT extend there; verified).",
    },
    {
      kind: "table",
      title: "Book 240 — the drug class table, verbatim",
      intro:
        "The section's single printed element, carried whole: three column headers (DRUGS / ORGAN SYSTEMS / APPLICATIONS) and seven drug-set rows over five organ-system lanes. Every cell is the book's own print — including the two mnemonics ('park my Benz', 'Make bladder SOFT') and the duration comparator, which print inside the applications cells.",
      columns: [
        "DRUGS (book 240, verbatim)",
        "ORGAN SYSTEM (book 240, verbatim)",
        "APPLICATIONS (book 240, verbatim)",
      ],
      rows: [
        [
          "Atropine, homatropine, tropicamide",
          "Eye",
          "Produce mydriasis and cycloplegia",
        ],
        [
          "Benztropine, trihexyphenidyl",
          "CNS",
          "Parkinson disease (“park my Benz”) · Acute dystonia",
        ],
        [
          "Glycopyrrolate",
          "GI, respiratory",
          "Parenteral: preoperative use to reduce airway secretions · Oral: reduces drooling, peptic ulcer",
        ],
        [
          "Hyoscyamine, dicyclomine",
          "GI",
          "Antispasmodics for irritable bowel syndrome",
        ],
        [
          "Ipratropium, tiotropium",
          "Respiratory",
          "COPD, asthma · Duration: tiotropium > ipratropium",
        ],
        [
          "Solifenacin, Oxybutynin, Flavoxate, Tolterodine",
          "Genitourinary",
          "Reduce bladder spasms and urge urinary incontinence (overactive bladder) · Make bladder SOFT",
        ],
        [
          "Scopolamine",
          "CNS",
          "Motion sickness",
        ],
      ],
      caption:
        "The class in one grid: seven drug sets, five organ-system lanes, one lock. The two mnemonics are the book's own — 'park my Benz' (benztropine's parking spot in Parkinson disease) and 'Make bladder SOFT' (the GU initials: Solifenacin, Oxybutynin, Flavoxate, Tolterodine) — and the duration line 'tiotropium > ipratropium' is the table's own comparator (the once-daily vs shorter-acting sort). Boundary notes: atropine's ONLY appearance in this table is as a member of the ophthalmic trio (its own full entry — bradycardia, organ-by-organ actions, adverse effects — is the dedicated Atropine block BELOW on the same page, the separate pending atropine topic); glycopyrrolate and hyoscyamine both print one page back as pyridostigmine's co-therapy ('Used with glycopyrrolate or hyoscyamine to control pyridostigmine adverse effects' — the cholinomimetic page's own acknowledgement that this class's dry direction is the antidote to its wet excess); and the table prints USES only — no toxicity column (the printed adverse-effect set is the atropine block below, PH21's own).",
    },
    {
      kind: "table",
      title: "Book 240 — the book's own two mnemonics, verbatim",
      intro:
        "The table's two printed memory anchors, isolated: each mnemonic prints inside an applications cell of the class table and keys one lane's drug set. Together they carry the two rows the exam recycles most.",
      columns: [
        "THE MNEMONIC (book 240, verbatim)",
        "THE DRUG SET IT KEYS (verbatim)",
        "THE LANE + USE (verbatim)",
      ],
      rows: [
        [
          "“park my Benz”",
          "Benztropine, trihexyphenidyl",
          "CNS — Parkinson disease · Acute dystonia",
        ],
        [
          "Make bladder SOFT",
          "Solifenacin, Oxybutynin, Flavoxate, Tolterodine",
          "Genitourinary — Reduce bladder spasms and urge urinary incontinence (overactive bladder)",
        ],
      ],
      caption:
        "Two of the book's own mnemonics on one page — the source spells both. 'park my Benz' parks benztropine (with trihexyphenidyl) in Parkinson disease and acute dystonia — the CNS movement lane; 'Make bladder SOFT' spells the GU four's initials in order (S-O-F-T: Solifenacin, Oxybutynin, Flavoxate, Tolterodine) — the overactive-bladder lane. Every other lane must be carried without a printed mnemonic: the eye trio (atropine, homatropine, tropicamide), the secretion splitter (glycopyrrolate's Parenteral/Oral pair), the IBS antispasmodics (hyoscyamine, dicyclomine), the inhaled pair (ipratropium, tiotropium — 'Duration: tiotropium > ipratropium'), and the motion-sickness solo (scopolamine) — the KYP body-lane ladder (this note's third mnemonic) is the frame that carries them.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem:
          "A 73-year-old woman reports urinary urgency, frequency, and urge incontinence that has curtailed her social life; she has no urinary tract infection and empties incompletely by post-void residual. Her physician starts a medication 'to calm the bladder,' and within two weeks the urgency improves. A pharmacology question asks which class the drug belongs to and how it works.",
        discriminator:
          "The printed GU row: 'Solifenacin, Oxybutynin, Flavoxate, Tolterodine' | 'Genitourinary' | 'Reduce bladder spasms and urge urinary incontinence (overactive bladder)' — with the book's own mnemonic 'Make bladder SOFT' keying the four drugs' initials",
        concept:
          "Muscarinic antagonists for overactive bladder — detrusor M-tone removed (the micturition page's own mechanics: '⊝ M receptor → relaxation of detrusor smooth muscle' → urgency quiets)",
        answer:
          "The class is the muscarinic antagonists — the printed SOFT set (Solifenacin, Oxybutynin, Flavoxate, Tolterodine) for the genitourinary lane. The mechanism is the class lock: competitive blockade at the muscarinic receptor removes parasympathetic (M) tone on the detrusor, so the bladder holds — 'Reduce bladder spasms and urge urinary incontinence (overactive bladder)'. The physiology is printed on the micturition page (book 236: 'Muscarinic antagonists (eg, oxybutynin)' → '⊝ M receptor → relaxation of detrusor smooth muscle' → urgency incontinence); the drug set is printed here. The exam's follow-up is the leak question — the dry mouth, constipation, and blurred vision that follow (pattern: trap 3).",
      },
      {
        stem:
          "A 67-year-old man with COPD uses two inhaled medications: a short-acting β2 agonist as needed and a once-daily inhaled anticholinergic. He reports a dry mouth but no palpitations, no urinary symptoms, and no visual changes. The question asks why the anticholinergic produces so few systemic effects — and which of two listed anticholinergics is the once-daily one.",
        discriminator:
          "The printed respiratory row: 'Ipratropium, tiotropium' | 'Respiratory' | 'COPD, asthma' + the table's own comparator — 'Duration: tiotropium > ipratropium' (the only duration line the section prints)",
        concept:
          "Inhaled muscarinic antagonists for COPD/asthma — lane-aimed delivery, and the tiotropium duration advantage",
        answer:
          "The once-daily agent is TIOTROPIMUM — the table's own line: 'Duration: tiotropium > ipratropium'. Both are muscarinic antagonists aimed at the 'Respiratory' lane for 'COPD, asthma' — bronchodilation by removing cholinergic bronchial tone (the same lock as every other row of the table). The paucity of systemic effects is the lane-aiming: inhaled delivery keeps the dose topical to the airway (KYP flag — the route is not printed on this page), and the quaternary amine structure keeps what is absorbed out of the brain (KYP flag — the chemistry is not printed; the printed evidence is the row's own 'Respiratory' lane and the absence of any CNS application). The dry mouth is the leak — the nearest lane's glands (salivary) sharing the airway's neighborhood.",
      },
      {
        stem:
          "A 24-year-old man treated with haloperidol for a first psychotic episode develops, two days after a dose increase, sustained twisting of the neck and upward deviation of the eyes; he is awake and distressed. The team orders an anticholinergic. A pharmacology question asks which printed drug pair this class lane contains and what it is used for on this page.",
        discriminator:
          "The printed CNS movement row: 'Benztropine, trihexyphenidyl' | 'CNS' | 'Parkinson disease (“park my Benz”)' + 'Acute dystonia' — the book's own mnemonic parks the pair in the movement lane",
        concept:
          "CNS-lane muscarinic antagonists — benztropine and trihexyphenidyl for Parkinson disease and acute dystonia (the striatal cholinergic excess the antipsychotic unmasked)",
        answer:
          "The lane is the CNS movement row: benztropine and trihexyphenidyl — 'Parkinson disease (“park my Benz”)' and 'Acute dystonia' (both printed uses; antipsychotic-induced acute dystonia is the classic stem). The mechanism rides the class lock into the brain: these are the tertiary amines that enter the CNS (KYP flag — the chemistry is not printed on this page; the printed evidence is the row's own 'CNS' organ system) and restore the dopamine–acetylcholine balance in the striatum by removing cholinergic tone. The distractor to expect on this stem is the peripheral anticholinergic (glycopyrrolate — the secretion lane, which cannot enter the brain), and the mnemonic to answer with is the book's own: 'park my Benz'.",
      },
    ],
    traps: [
      {
        a: "Anticholinergic and cholinomimetic drugs both 'act on the bladder, the gut, and the eye', so for any organ scenario either direction works — bethanechol and oxybutynin are interchangeable bladder drugs, and pilocarpine and tropicamide are interchangeable eye drops",
        b: "Confusing the class direction — agonist adds tone, antagonist removes it — because both classes target the same organs and both tables print organ-by-organ uses",
        whyConfused:
          "The cholinomimetic page (book 239, PH18) and this page (book 240) are mirror tables with the same organ columns; the micturition page (book 236) prints both directions side by side (bethanechol for retention, oxybutynin for urgency); and the eye appears in both stories (pilocarpine constricts, tropicamide dilates)",
        keyDifference:
          "The DIRECTION is the disease: retention (the bladder will not contract) needs the AGONIST — bethanechol 'Activates bladder smooth muscle' (the printed cholinomimetic row); urgency incontinence (the bladder contracts too easily) needs the ANTAGONIST — 'Reduce bladder spasms and urge urinary incontinence' (this table's printed GU row). The eye mirrors it: pilocarpine 'Contracts ciliary muscle' and constricts the pupil for glaucoma; this table's trio 'Produce mydriasis and cycloplegia' for the exam-eyed eye. Same organ, opposite tone — the stem's disease names the direction, and the direction names the class.",
        clue:
          "Sort the stem's DISEASE before any drug name: retention/ileus/xerostomia/glaucoma (needs more tone) → cholinomimetic; urgency-spasm/drooling/dilation/antispasmodic (needs less tone) → muscarinic antagonist. Any answer pair that puts bethanechol in an urgency stem or oxybutynin in a retention stem has the arrow backwards.",
      },
      {
        a: "Ipratropium and tiotropium are inhaled bronchodilators for COPD, so they are β2 agonists like albuterol — and the two anticholinergics differ only in name, freely interchangeable",
        b: "Missing both the receptor split (antimuscarinic vs sympathomimetic) and the printed duration comparator, because all three drugs appear together in COPD/asthma regimens and produce the same end effect — a wider airway",
        whyConfused:
          "Combination inhalers pair albuterol with ipratropium; the '-ium' pair look like one drug family (they are); and bronchodilation by any mechanism looks identical on exam vignettes",
        keyDifference:
          "Two splits, both printable from this page and the next: (1) RECEPTOR — albuterol is a β2 AGONIST (the sympathomimetics table, book 241 — the next page); ipratropium/tiotropium are MUSCARINIC ANTAGONISTS (this table's 'Respiratory' row) — different locks, complementary bronchodilation (β2 relaxed directly, M-tone removed). (2) DURATION — the table's own line: 'Duration: tiotropium > ipratropium' — tiotropium is the long-acting (once-daily) agent, ipratropium the shorter-acting one; the printed comparator is the entire basis of the LAMA/SAMA sort.",
        clue:
          "'Once daily' + 'anticholinergic inhaler' = tiotropium; 'short-acting' + 'paired with albuterol' = ipratropium. A stem that gives a β-blocker-asthma story or asks the receptor behind the inhaler is sorting β2 vs muscarinic — answer from which table the drug prints in (book 241 vs book 240).",
      },
      {
        a: "Oxybutynin is 'the bladder drug', so its adverse effects must be urinary — and the new dry mouth, constipation, blurred vision, or confusion that appears in an elderly patient after starting it is unrelated to the prescription",
        b: "Reading the drug as its lane and missing the LEAK — the same systemic muscarinic blockade reaching every other lane's addresses (salivary glands, gut, ciliary muscle, CNS)",
        whyConfused:
          "The drug is marketed by its lane; the adverse effects belong to the OTHER lanes; and the elderly accumulate both drug and sensitivity, so the cluster arrives gradually and looks like aging (dry mouth, constipation, confusion, blurred vision are all common in the population)",
        keyDifference:
          "The leak is the SAME LOCK in the wrong lanes: dry mouth (salivary glands — the same glands glycopyrrolate is prescribed to quiet in drooling), constipation (gut — the anti-spasm effect overshooting), cycloplegia/blurred vision (the ciliary muscle — the eye row's 'cycloplegia' turned from use into effect), urinary retention (the detrusor over-relaxed — the therapeutic direction overshooting its own lane), and confusion in the elderly (a CNS leak). BOUNDARY FLAG: this class table prints USES only — the printed adverse-effects cell ('↑ body temperature (due to ↓ sweating); ↑ HR; dry mouth; dry, flushed skin; cycloplegia; constipation; disorientation') and the cautions ('acute angle-closure glaucoma in older adults (due to mydriasis), urinary retention in men with prostatic hyperplasia, and hyperthermia in infants') print in the ATROPINE BLOCK BELOW on this same page (the separate atropine topic, PH21) — adjacent, never this table's own print, but they are the printed cover for the leak the exam tests here.",
        clue:
          "Any elderly patient on a bladder antispasmodic who develops the dry/constipated/blurry/confused cluster (or retains urine) is presenting the anticholinergic leak — answer 'due to muscarinic antagonism' and expect the cautions (narrow-angle glaucoma, prostatic hyperplasia) as the contraindication list. The extreme of the same leak is the anticholinergic toxidrome (PH21's block).",
      },
      {
        a: "Atropine is the headliner of the class, so the class table's atropine row must be the whole atropine story — bradycardia dosing, the organ-by-organ actions, and the DUMBBELSS-reversal notes all live in this table",
        b: "Merging the two same-page sections (the class table above and the dedicated Atropine block below) because both print on book 240 under the one banner and both carry the name 'atropine'",
        whyConfused:
          "The page is one visual unit in the book; atropine's name appears in both sections; and the previous page's poisoning section just used atropine as its antidote, so 'atropine' feels like one continuous story",
        keyDifference:
          "The split is the page's own: THIS table's atropine row is the OPHTHALMIC membership only — 'Atropine, homatropine, tropicamide' | 'Eye' | 'Produce mydriasis and cycloplegia'. The dedicated 'Atropine' block BELOW (the separate pending atropine topic, PH21) carries the rest: the intro 'Muscarinic antagonist. Used to treat bradycardia and for ophthalmic applications.', the ORGAN SYSTEM/ACTION/NOTES grid (Eye '↑ pupil dilation, cycloplegia' / Airway 'Bronchodilation, ↓ secretions' / Heart '↑ heart rate' / Stomach '↓ acid secretion' / Gut '↓ motility' / Bladder '↓ urgency in cystitis'), the printed NOTES cell 'Blocks muscarinic effects (DUMBBELSS) of anticholinesterases, but not the nicotinic effects', and the adverse-effects set. A stem asking 'atropine for symptomatic bradycardia' or 'which effects does atropine reverse in organophosphate poisoning' resolves to the BLOCK below; a stem asking 'which class/members dilate the pupil for ophthalmic exam' resolves to THIS table's row.",
        clue:
          "Eye/dilation/mydriasis-cycloplegia stems → this table's ophthalmic trio row. Bradycardia stems, DUMBBELSS-reversal stems, and toxidrome stems → the atropine block below (PH21). 'Which class does atropine belong to' → this table's banner: 'Muscarinic antagonists'.",
      },
    ],
    pivots: [
      {
        lookAlike: "Any 'which of the following agents / which class' stem that names an organ scenario — the ophthalmic exam, the antipsychotic dystonia or Parkinson tremor, the preoperative or drooling patient, the IBS cramping, the COPD/asthma inhaler, the overactive bladder, the cruise-ship motion sickness — asking the lane match at the level of the drug",
        differentiator:
          "The BODY-LANE LADDER (KYP frame on the table's own ORGAN SYSTEMS column): sort the stem's organ to its lane, then recall the lane's printed drug set — Eye (atropine, homatropine, tropicamide) · CNS (benztropine/trihexyphenidyl — 'park my Benz'; scopolamine — motion sickness) · GI (glycopyrrolate for secretions/drooling; hyoscyamine/dicyclomine for IBS) · Respiratory (ipratropium/tiotropium — COPD/asthma) · Genitourinary (the SOFT four — overactive bladder)",
        correctPath:
          "(1) Name the LANE from the stem's organ scenario. (2) Recall the lane's set — with the two printed mnemonics as the fast anchors ('park my Benz' for the CNS movement row; 'Make bladder SOFT' for the GU row). (3) Match the answer choice to the lane, and sort the distractors by their OWN tables: bethanechol/pilocarpine (cholinomimetics — book 239, the agonist mirror), albuterol/mirabegron (sympathomimetics — book 241, the next page), and the wrong-lane members of this table (tiotropium is respiratory, not GU; glycopyrrolate is secretions, not CNS — it cannot enter the brain). (4) Where the stem adds a duration (once-daily inhaler), deploy the printed comparator: 'Duration: tiotropium > ipratropium'. (5) Where the stem asks the mechanism word, answer with the printed bridge: 'a competitive inhibitor' (book 239's own clause for this class's headliner).",
      },
      {
        lookAlike: "Any 'adverse effect / why this finding / mechanism of the side effect' stem on a patient taking one of these drugs — the new dry mouth, constipation, blurred vision, urinary retention, confusion, or hyperthermia — asking the leak at the level of the mechanism",
        differentiator:
          "The LEAK IS THE SAME LOCK (KYP frame): every adverse effect is the tone removed in a lane the prescriber did not aim at — the anti-DUMBBELSS direction, the exact reverse of the printed wet list of book 239 (miosis→mydriasis, bradycardia→tachycardia, glands pouring→dry, gut cramping→constipation, bladder letting go→retention)",
        correctPath:
          "(1) Confirm the drug is from this table (lane match — e.g., oxybutynin is the GU row). (2) Read each adverse effect as another lane's tone removed: dry mouth = salivary glands, constipation = gut, blurred vision = ciliary muscle (cycloplegia), retention = the detrusor over-relaxed, confusion = a CNS leak (the elderly are the sensitive population). (3) For the EXTREME (the full anticholinergic toxidrome), know where the print lives: the adverse-effects cell, the seven-line mnemonic ('Hot as a hare' family), and the Jimson weed line print in the ATROPINE BLOCK BELOW on this same page (PH21's portion — adjacent, not this table's own print); the wet mirror prints one page back (PH19). (4) For the overdose question, answer with the printed antidote of this class: 'Antidote for anticholinergic toxicity; physostigmine \"phyxes\" atropine overdose.' (book 239's last cholinomimetic row). (5) For the contraindication question, expect the printed cautions of the atropine block (narrow-angle glaucoma, prostatic hyperplasia — adjacent print) and reason them from the lock: mydriasis closes the angle; detrusor relaxation plus an obstructed outlet retains urine.",
      },
    ],
    miniCase: {
      vignette:
        "A 73-year-old woman with urgency-predominant incontinence — frequency, nocturia, and episodes of rushing to the bathroom with accidents — is started on oral oxybutynin. Two weeks later the urgency has improved, but she reports a constantly dry mouth, constipation that is new for her, and difficulty focusing on newsprint; her son adds that she seems mildly confused at dinner. Post-void residual this visit is 180 mL (previously 40 mL).",
      question:
        "Which property explains BOTH the benefit and the adverse-effect cluster, which printed mnemonic keys the drug set she is taking, and what is the boundary rule for where this page prints its toxicity lines?",
      options: [
        {
          label:
            "Muscarinic antagonism — the class lock. Oxybutynin belongs to the printed genitourinary set 'Solifenacin, Oxybutynin, Flavoxate, Tolterodine' → 'Reduce bladder spasms and urge urinary incontinence (overactive bladder)', keyed by the book's own mnemonic 'Make bladder SOFT' (the four initials). The benefit is the detrusor's muscarinic tone removed (the micturition page's printed mechanics: '⊝ M receptor → relaxation of detrusor smooth muscle'); the dry mouth, constipation, blurred vision (cycloplegia), confusion, and now retention are the SAME blockade leaking beyond the genitourinary lane — the anti-DUMBBELSS direction. The boundary rule: this class table prints USES only; the printed adverse-effects cell and the seven-line 'Hot as a hare' mnemonic print in the Atropine block BELOW on the same page — the separate atropine topic.",
          text: "One lock: muscarinic antagonism — benefit in the bladder lane, adverse effects in every lane it leaks into.",
          correct: true,
          why:
            "Correct on every count, and the anchored clauses are the page's own print: the GU row ('Solifenacin, Oxybutynin, Flavoxate, Tolterodine' | 'Genitourinary' | 'Reduce bladder spasms and urge urinary incontinence (overactive bladder)' + 'Make bladder SOFT'), the class banner ('Muscarinic antagonists'), and the two adjacent prints the reasoning borrows — the wet mirror of book 239 (PH19's 'DUMBBELSS.') and the dry list of the atropine block below (PH21 — adjacent, flagged, not this table's own). The retention is the therapeutic direction overshooting its own lane (the detrusor now too quiet to empty); the confusion is the CNS leak the elderly are sensitive to; the boundary rule is the PH20/PH21 split.",
        },
        {
          label:
            "Muscarinic agonism — 'the bladder drug' works by activating the bladder, just like the other bladder drugs: oxybutynin adds detrusor tone to 'strengthen' the bladder, the dry mouth and constipation are unrelated aging effects, and the mnemonic for her drug set is 'Baby one more time.'",
          text: "Muscarinic agonism — the bladder activated; the adverse effects are unrelated.",
          why:
            "The direction trap, twice wrong. (1) Adding detrusor tone is the RETENTION prescription — the cholinomimetic direction printed one page back: bethanechol 'Activates bladder smooth muscle' for 'Urinary retention' (book 239's own row). In urge incontinence the detrusor is already overactive; oxybutynin's printed use is to REDUCE its spasms. (2) 'Baby one more time.' is the micturition page's own mnemonic (book 236 — Bethanechol, Oxybutynin, Mirabegron, Tamsulosin), and it keys FOUR mechanisms, not an agonism: oxybutynin's letter in it is the ANTImuscarinic one. The adverse-effect cluster is precisely the signature of tone REMOVED — the reverse of the wet list.",
        },
        {
          label:
            "β-adrenergic agonism — the drug is a sympathomimetic acting on the bladder's β3 receptor (the mirabegron mechanism, 'Think \"mirab3gron\"'), which relaxes the detrusor; the dry mouth and constipation come from the same β-receptor distribution, and the duration line to quote is 'Duration: tiotropium > ipratropium'.",
          text: "β3 agonism — the sympathomimetic bladder drug.",
          why:
            "The wrong-table/wrong-receptor distractor, assembled from the neighbors: mirabegron IS a real bladder drug — the β3 sympathomimetic printed on the sympathomimetics table (book 241, the next page) and in the micturition page's four-drug set — and it relaxes the detrusor, but through β3, not the muscarinic lock; its fingerprint does NOT include the anticholinergic cluster this patient shows (dry mouth, cycloplegia, constipation are muscarinic-blockade findings, not β3 findings). The quoted duration line is real print, but it belongs to the RESPIRATORY row of THIS table (ipratropium vs tiotropium) — a printed fact pasted onto the wrong lane, the exam's favorite kind of distractor.",
        },
        {
          label:
            "Acetylcholinesterase inhibition — the drug raises acetylcholine everywhere (the physostigmine family), which 'coordinates' the bladder; the dry mouth is paradoxical cholinergic excess, and if her confusion worsens the same drug should be increased because it is also the printed antidote for anticholinergic toxicity.",
          text: "AChE inhibition — more acetylcholine, and the drug doubles as the anticholinergic antidote.",
          why:
            "The direction trap at its most dangerous. AChE inhibitors are the WET direction — the exact opposite of this patient's prescription: they would drive the detrusor harder (worsening urgency) and flood every muscarinic address with secretion and cramping (the printed DUMBBELSS list, book 239). Physostigmine is indeed the printed antidote for ANTIcholinergic toxicity ('physostigmine \"phyxes\" atropine overdose.' — book 239's last cholinomimetic row), but it is the rescue for an OVERDOSE of this class, not a bladder therapy — and giving it prophylactically or increasing it for confusion in a correctly-prescribed patient inverts the printed logic. The confusion here is a leak, not a deficiency of cholinergic tone.",
        },
        {
          label:
            "Glycopyrrolate — the class's own secretion specialist: since her main complaints are now the dry mouth, constipation, and confusion, switch to glycopyrrolate, which the table prints for secretions ('Parenteral: preoperative use to reduce airway secretions', 'Oral: reduces drooling, peptic ulcer') and is the class's cleanest member for elderly patients.",
          text: "Switch to glycopyrrolate — the class's cleanest member.",
          why:
            "The wrong-lane prescription dressed as a dose adjustment. Glycopyrrolate is real print from THIS table — but its lane is the glands ('GI, respiratory': airway secretions, drooling, peptic ulcer), not the bladder; it does not carry the GU row's printed use ('Reduce bladder spasms and urge urinary incontinence'), so switching would abandon the only indication she has. Worse for the stem's findings: glycopyrrolate is the SAME lock — the dry mouth and constipation would persist or worsen, and the (KYP-flagged, not printed) quaternary chemistry that keeps it out of the brain would at best spare the confusion, not the peripheral leak. The correct move for the leak is dose reduction, timing, or a more bladder-selective member of the SAME printed set (e.g., solifenacin or trospium-family switching), with the cautions of the atropine block below in mind — not a lane change to the secretion specialist.",
        },
      ],
      reasoning:
        "The vignette is the GU row plus its leak, played as one follow-up visit. (1) THE LANE — the printed row: 'Solifenacin, Oxybutynin, Flavoxate, Tolterodine' | 'Genitourinary' | 'Reduce bladder spasms and urge urinary incontinence (overactive bladder)', keyed by the book's own mnemonic 'Make bladder SOFT' (S-O-F-T = the four initials) — oxybutynin is the set's headliner. (2) THE BENEFIT — the class lock aimed at the bladder: competitive muscarinic blockade removes the detrusor's M-tone; the physiology is the micturition page's own print ('Muscarinic antagonists (eg, oxybutynin)' → '⊝ M receptor → relaxation of detrusor smooth muscle' → urgency incontinence, book 236). (3) THE ADVERSE-EFFECT CLUSTER — the SAME lock in the lanes the pill leaks into: salivary glands (dry mouth), gut (constipation), ciliary muscle (cycloplegia → cannot focus on newsprint), CNS (confusion — the elderly are the sensitive population), and the bladder itself overshot (residual 180 mL — the therapeutic direction past its target). This is the anti-DUMBBELSS direction, the exact reverse of the printed wet list one page back (PH19). (4) THE BOUNDARY RULE the question asks for — the PH20/PH21 split of book 240: the class table (this topic) prints USES only; the printed adverse-effects cell, the seven-line 'Hot as a hare' mnemonic, and the Jimson weed line print in the ATROPINE BLOCK BELOW on the same page — the separate atropine topic, adjacent and flagged, never cited as this table's own print. (5) THE DISTRACTORS each borrow a neighboring print: the agonist mirror (bethanechol's row, book 239 — the direction reversed), the wrong table (mirabegron's β3 — book 241, the next page — plus this table's duration line pasted onto the wrong lane), the antidote inverted (physostigmine — the rescue for this class's OVERDOSE, not a therapy), and the wrong-lane class member (glycopyrrolate — the secretion specialist whose lane is the glands). The discriminator to carry: one lock, five lanes — the benefit is the aimed lane, the adverse effects are the leak, and the printed toxicity lives one block below on the same page.",
    },
  },
  mnemonics: [
    {
      code: "“PARK MY BENZ” — the book's OWN mnemonic, printed verbatim (book 240, inside the CNS row's applications cell): benztropine for Parkinson disease (with trihexyphenidyl)",
      meaning:
        "The source's own mnemonic for the CNS movement row, quoted from the applications cell where it prints: 'Parkinson disease (“park my Benz”)' — the Benz parks in the Parkinson spot. The same row carries the second printed use, 'Acute dystonia' — the antipsychotic-induced dystonic reaction is the row's emergency use, and the mnemonic drives both (the striatal cholinergic-dopaminergic balance that antipsychotics disturb and anticholinergics restore).",
      memorizes: "The CNS movement lane's drug pair (benztropine, trihexyphenidyl) and its two printed uses (Parkinson disease, acute dystonia)",
      whenToUse:
        "Any Parkinson pharmacology stem (which adjunct class for tremor-predominant disease, which receptor is blocked) and any acute-dystonia stem (oculogyric crisis, torticollis, hours-to-days after antipsychotic initiation or dose increase): answer from this row — the CNS lane of the muscarinic-antagonist table — and distinguish the row from the peripheral members (glycopyrrolate cannot enter the brain: the wrong-lane distractor on dystonia stems).",
      clinical:
        "The Benz parks in two spots: chronic (Parkinson disease — the printed use, adjunctively with dopaminergic therapy) and acute (acute dystonia — the printed use, the antipsychotic emergency). The mirror caution from the same clinical family: the leak (this class's dry direction) is why the elderly Parkinson patient on an anticholinergic adjunct is the classic confusion/dry-mouth/retention stem — and the printed caution list lives in the atropine block below (PH21).",
    },
    {
      code: "MAKE BLADDER SOFT — the book's OWN mnemonic, printed verbatim (book 240, inside the GU row's applications cell): Solifenacin, Oxybutynin, Flavoxate, Tolterodine — the initials spell S-O-F-T",
      meaning:
        "The source's own mnemonic for the genitourinary row: the four printed drug names' initials, in the table's own order, spell SOFT — Solifenacin, Oxybutynin, Flavoxate, Tolterodine — and the application cell prints both the mechanism-phrase and the disease: 'Reduce bladder spasms and urge urinary incontinence (overactive bladder)'. The mnemonic does double duty: it recalls the four drugs AND their target state (the bladder made soft — the detrusor's muscarinic tone removed).",
      memorizes: "The GU lane's four-drug set and its printed use (overactive bladder / urge urinary incontinence)",
      whenToUse:
        "Any overactive-bladder stem (urgency, frequency, urge incontinence, 'rushes to the bathroom with accidents'): the answer is any member of the SOFT set — and the follow-up leak question (dry mouth, constipation, blurred vision, retention, confusion in the elderly) is answered by the same lock leaking beyond the lane. Also the differential use: retention stems (the opposite disease) take the AGONIST mirror (bethanechol), never this set.",
      clinical:
        "The bedside pairing: the micturition page (book 236) prints the physiology ('Muscarinic antagonists (eg, oxybutynin)' → '⊝ M receptor → relaxation of detrusor smooth muscle' → urgency incontinence), and this page prints the four-drug set — the two tables are one prescription. The cautions the exam attaches: narrow-angle glaucoma and prostatic hyperplasia (the printed caution lines live in the atropine block below, PH21) — the leak turned contraindication.",
    },
    {
      code: "THE BODY-LANE LADDER (KYP): EYE → BRAIN → GUT → AIRWAY → BLADDER — atropine's family tours the body top to bottom, and each lane keeps its own printed drug set",
      meaning:
        "The KYP compression of the table's own ORGAN SYSTEMS column — five lanes, read as a body tour: EYE (atropine, homatropine, tropicamide — 'Produce mydriasis and cycloplegia'), BRAIN (benztropine/trihexyphenidyl — 'Parkinson disease (“park my Benz”)' + 'Acute dystonia'; scopolamine — 'Motion sickness'), GUT (glycopyrrolate — 'Parenteral: preoperative use to reduce airway secretions' + 'Oral: reduces drooling, peptic ulcer'; hyoscyamine/dicyclomine — 'Antispasmodics for irritable bowel syndrome'), AIRWAY (ipratropium/tiotropium — 'COPD, asthma', 'Duration: tiotropium > ipratropium'), BLADDER (the SOFT four — 'Make bladder SOFT'). Every drug name and use is the book's own print; the ladder is KYP's.",
      memorizes: "The whole seven-row table — which drug set belongs to which organ lane, top (eye) to bottom (bladder)",
      whenToUse:
        "Any 'which agent for this organ' match question: name the stem's organ, climb to its lane, recite the lane's set. Also the reverse — a drug name in the stem (e.g., 'the patient is on dicyclomine') climbs to its lane (GUT) and predicts both the indication (IBS spasm) and the leak pattern (the other lanes drying).",
      clinical:
        "The exam's three fastest ladder climbs: the eye drop for the ophthalmic exam (the trio row), the inhaler for COPD (the -ium pair, with the duration line), and the pill for the overactive bladder (the SOFT four) — and the elderly patient on the third one is the leak stem (dry mouth, constipation, cycloplegia, confusion, retention). The ladder also sorts the cautions: the eye lane's mydriasis and the bladder lane's retention are the two leak directions the printed caution lines name (atropine block below, PH21).",
    },
    {
      code: "ANTI-DUMBBELSS — THE DRY MIRROR (KYP): what this class does when it leaks — the printed wet list of book 239 reversed (miosis→mydriasis · bronchospasm→bronchodilation + dry airway · bradycardia→tachycardia · glands pouring→dry mouth and skin · gut cramping→constipation · bladder letting go→retention)",
      meaning:
        "The KYP mirror frame on two printed neighbors: the wet toxidrome prints one page back (book 239, PH19: 'Diarrhea, Urination, Miosis, Bronchospasm, Bradycardia, Emesis, Lacrimation, Sweating, Salivation.' — 'DUMBBELSS.'), and its antidote is this class's headliner ('Reversed by atropine, a competitive inhibitor.') — so the class's OWN overdose picture is the list REVERSED: every wet finding flipped dry. BOUNDARY FLAG: the printed version of the dry list — the adverse-effects cell ('↑ body temperature (due to ↓ sweating); ↑ HR; dry mouth; dry, flushed skin; cycloplegia; constipation; disorientation') and the seven-line mnemonic ('Hot as a hare / Fast as a fiddle / Dry as a bone / Red as a beet / Blind as a bat / Mad as a hatter / Full as a flask') plus 'Jimson weed (Datura) → gardener's pupil (mydriasis)' — prints in the ATROPINE BLOCK BELOW on this same page (the separate atropine topic, PH21): adjacent, flagged, never cited as this class table's own print.",
      memorizes: "The leak direction of the whole class — every adverse effect of every drug in this table, read as the wet list reversed",
      whenToUse:
        "Any adverse-effect stem on a patient taking one of these drugs (oxybutynin and the elderly, ipratropium's dry mouth, scopolamine's sedation/dry mouth, benztropine's confusion): answer 'the muscarinic blockade leaking beyond the therapeutic lane', then name the lane each finding belongs to. Also the toxidrome sort: dry = this class (antidote physostigmine, printed one page back); wet = the cholinergic pole (antidote this class's headliner).",
      clinical:
        "The clinical endpoint of the mirror: the same lock that makes the SOFT four therapeutic makes the dry toxidrome at overdose — hot and dry (no sweat), fast (SA node unopposed), blind at near (cycloplegia) and wide (mydriasis), distended (ileus and retention), flushed and confused — the picture the atropine block below (PH21) carries in print, and the reason the printed rescue is physostigmine ('phyxes' atropine overdose, book 239). The exam's layered version: name the class (this table) → name the lane (the ladder) → name the leak (this mirror) → name the rescue (the previous page's last row).",
    },
  ],
  rapidReview: {
    s30: [
      "'Muscarinic antagonists' — the section header; the UPPER portion of book 240 (pdf 262), under the standing PHARMACOLOGY—AUTONOMIC DRUGS banner; the LOWER portion of the same page is the dedicated Atropine block (the separate pending atropine topic, PH21 — EXCLUDED).",
      "The table frame: three printed column headers — DRUGS / ORGAN SYSTEMS / APPLICATIONS — and seven drug-set rows over five organ-system lanes.",
      "The eye row, verbatim: 'Atropine, homatropine, tropicamide' | 'Eye' | 'Produce mydriasis and cycloplegia' (atropine's ONLY appearance in this table — the ophthalmic trio).",
      "The CNS movement row, verbatim: 'Benztropine, trihexyphenidyl' | 'CNS' | 'Parkinson disease (“park my Benz”)' + 'Acute dystonia'.",
      "The secretions row, verbatim: 'Glycopyrrolate' | 'GI, respiratory' | 'Parenteral: preoperative use to reduce airway secretions' + 'Oral: reduces drooling, peptic ulcer' (the only row that prints its routes).",
      "The IBS row, verbatim: 'Hyoscyamine, dicyclomine' | 'GI' | 'Antispasmodics for irritable bowel syndrome'.",
      "The respiratory row, verbatim: 'Ipratropium, tiotropium' | 'Respiratory' | 'COPD, asthma' + 'Duration: tiotropium > ipratropium' (the table's own duration comparator).",
      "The GU row, verbatim: 'Solifenacin, Oxybutynin, Flavoxate, Tolterodine' | 'Genitourinary' | 'Reduce bladder spasms and urge urinary incontinence (overactive bladder)' + 'Make bladder SOFT' (the book's own mnemonic — the initials S-O-F-T).",
      "The vestibular row, verbatim: 'Scopolamine' | 'CNS' | 'Motion sickness'.",
      "The boundary: the section does NOT extend to pdf 263 (book 241 opens Sympathomimetics); the atropine block below (intro, action grid, adverse effects, the seven-line mnemonic, Jimson weed) is the separate atropine topic (PH21) — and this class table prints USES only, no toxicity column.",
    ],
    m3: [
      "PARK MY BENZ (the book's own) — benztropine (with trihexyphenidyl), the CNS movement lane: Parkinson disease + acute dystonia.",
      "MAKE BLADDER SOFT (the book's own) — Solifenacin, Oxybutynin, Flavoxate, Tolterodine (S-O-F-T), the GU lane: overactive bladder / urge incontinence.",
      "THE BODY-LANE LADDER + THE DRY MIRROR (KYP) — Eye/Brain/Gut/Airway/Bladder, each with its printed set (trio · Benz · glycopyrrolate + hyoscyamine/dicyclomine · the -ium pair with 'Duration: tiotropium > ipratropium' · the SOFT four); the leak beyond the lane is ANTI-DUMBBELSS — the wet list of book 239 reversed (the printed dry list lives in the atropine block below, PH21).",
    ],
    m10: [
      "The whole page in one breath: one section (the class table), three columns (DRUGS / ORGAN SYSTEMS / APPLICATIONS), seven rows, five lanes — EYE 'Atropine, homatropine, tropicamide' → 'Produce mydriasis and cycloplegia'; CNS 'Benztropine, trihexyphenidyl' → 'Parkinson disease (“park my Benz”)' + 'Acute dystonia'; 'Glycopyrrolate' → 'GI, respiratory' → 'Parenteral: preoperative use to reduce airway secretions' + 'Oral: reduces drooling, peptic ulcer'; 'Hyoscyamine, dicyclomine' → 'GI' → 'Antispasmodics for irritable bowel syndrome'; 'Ipratropium, tiotropium' → 'Respiratory' → 'COPD, asthma' + 'Duration: tiotropium > ipratropium'; the SOFT four → 'Genitourinary' → 'Reduce bladder spasms and urge urinary incontinence (overactive bladder)' + 'Make bladder SOFT'; 'Scopolamine' → 'CNS' → 'Motion sickness'.",
      "The class lock in one clause: competitive blockade at the muscarinic receptor — the mechanism word 'competitive' is printed one page back ('Reversed by atropine, a competitive inhibitor.', book 239) and the class banner ('Muscarinic antagonists') is this page's own header; occupancy without activation, so the parasympathetic message stops at the blocked address.",
      "The two printed mnemonics, both the book's own: 'park my Benz' (the CNS movement row) and 'Make bladder SOFT' (the GU four's initials in the table's own order) — every other lane is carried by the KYP body-lane ladder.",
      "The duration line, verbatim: 'Duration: tiotropium > ipratropium' — the once-daily (long-acting) vs shorter-acting sort for the inhaled pair; the only comparator line the section prints.",
      "The route pair, verbatim: glycopyrrolate's 'Parenteral: preoperative use to reduce airway secretions' + 'Oral: reduces drooling, peptic ulcer' — the table's only printed route split, aiming one drug at two glandular uses; the same drug prints one page back as pyridostigmine's co-therapy (with hyoscyamine) — the cholinomimetic page's own use of this class to dry its wet excess.",
      "The GU physiology anchor, printed on book 236: 'Muscarinic antagonists (eg, oxybutynin)' → '⊝ M receptor → relaxation of detrusor smooth muscle' → urgency incontinence — the micturition page's row expanded fourfold by this table's SOFT set.",
      "The leak in one direction: ANTI-DUMBBELSS — the wet list of book 239 reversed (miosis→mydriasis, bronchospasm→bronchodilation + dry airway, bradycardia→tachycardia, glands pouring→dry mouth and skin, gut cramping→constipation, bladder letting go→retention) — every adverse effect of every member is the same lock in a lane the prescriber did not aim at.",
      "The PH20/PH21 boundary (the page's own split): the class table above (THIS topic) and the dedicated Atropine block below — 'Muscarinic antagonist. Used to treat bradycardia and for ophthalmic applications.', the ORGAN SYSTEM/ACTION/NOTES grid with 'Blocks muscarinic effects (DUMBBELSS) of anticholinesterases, but not the nicotinic effects', the ADVERSE EFFECTS cell, the seven-line 'Hot as a hare' mnemonic, 'Jimson weed (Datura) → gardener's pupil (mydriasis)' — the separate atropine topic (PH21), excluded here; atropine's own rows resolve THERE, not to this table's ophthalmic trio.",
      "The antidote mirror (both clauses printed one page back, book 239): the wet pole's antidote is this class's headliner ('Reversed by atropine, a competitive inhibitor.') and this class's own overdose antidote is the cholinomimetic table's last row ('Antidote for anticholinergic toxicity; physostigmine \"phyxes\" atropine overdose.') — two pages, two poles, two rescues.",
      "What this page does NOT print (flagged, never cited as printed): any toxicity column (the adverse-effect set is the atropine block below, PH21); the chemistry of lane-aiming (quaternary-amine peripheral restriction of glycopyrrolate/ipratropium/tiotropium; BBB entry of the tertiary amines — atropine, scopolamine, benztropine; the inhaled route) — the printed rows are consistent with the rule (scopolamine's printed lane is 'CNS'), but the rule is KYP's; and the section does NOT extend to pdf 263 (book 241 opens Sympathomimetics — whose pilot note's 'pp. 240–243' over-claims this page; its table prints entirely on pdf 263-265). Boundaries behind: pdf 261 carries the completed cholinomimetic-agents (upper) and anticholinesterase-poisoning (lower) — the agonist mirror and the wet toxidrome; pdf 258 carries the completed micturition-control — the GU lane's physiology.",
    ],
  },
  recall: [
    {
      q: "Recite the seven drug sets of the class table with their organ systems and applications, verbatim.",
      a:
        "(1) 'Atropine, homatropine, tropicamide' | 'Eye' | 'Produce mydriasis and cycloplegia'. (2) 'Benztropine, trihexyphenidyl' | 'CNS' | 'Parkinson disease (“park my Benz”)' + 'Acute dystonia'. (3) 'Glycopyrrolate' | 'GI, respiratory' | 'Parenteral: preoperative use to reduce airway secretions' + 'Oral: reduces drooling, peptic ulcer'. (4) 'Hyoscyamine, dicyclomine' | 'GI' | 'Antispasmodics for irritable bowel syndrome'. (5) 'Ipratropium, tiotropium' | 'Respiratory' | 'COPD, asthma' + 'Duration: tiotropium > ipratropium'. (6) 'Solifenacin, Oxybutynin, Flavoxate, Tolterodine' | 'Genitourinary' | 'Reduce bladder spasms and urge urinary incontinence (overactive bladder)' + 'Make bladder SOFT'. (7) 'Scopolamine' | 'CNS' | 'Motion sickness'.",
    },
    {
      q: "Name the book's two own mnemonics that print inside this table's cells, and state exactly what each keys.",
      a:
        "(1) '“park my Benz”' — prints inside the CNS movement row's applications cell ('Parkinson disease (“park my Benz”)') and keys benztropine (with trihexyphenidyl) for Parkinson disease and acute dystonia. (2) 'Make bladder SOFT' — prints inside the GU row's applications cell and keys the four-drug set by initials in the table's own order: Solifenacin, Oxybutynin, Flavoxate, Tolterodine (S-O-F-T) for 'Reduce bladder spasms and urge urinary incontinence (overactive bladder)'. Both are the source's own print, attributed as the book's own wherever used.",
    },
    {
      q: "State the table's printed duration line, name the two drugs it compares, and explain the exam sort it drives.",
      a:
        "'Duration: tiotropium > ipratropium' — the respiratory row's own comparator: tiotropium outlasts ipratropium. The sort: tiotropium is the long-acting member (the once-daily maintenance inhaler), ipratropium the shorter-acting member (the rescue/short-term inhaler, classically paired with albuterol). It is the only duration line the section prints, and it is the entire printed basis of the LAMA/SAMA distinction the exam tests.",
    },
    {
      q: "Recite glycopyrrolate's printed route pair, and name the two places one page back where this class's members print as co-therapy for a cholinomimetic's adverse effects.",
      a:
        "The route pair, verbatim: 'Parenteral: preoperative use to reduce airway secretions' + 'Oral: reduces drooling, peptic ulcer'. One page back (book 239, the cholinomimetic table's pyridostigmine row): 'Used with glycopyrrolate or hyoscyamine to control pyridostigmine adverse effects' — BOTH of this table's secretion/spasm members (glycopyrrolate from row 3, hyoscyamine from row 4) print there as the printed cover for a cholinomimetic's muscarinic excess: the agonist page's own acknowledgement that this class's dry direction is the antidote to its wet excess.",
    },
    {
      q: "State the PH20/PH21 boundary of book 240, the section-extent finding for pdf 263, the sympathomimetics over-claim, and the three things this page does NOT print (census-flagged).",
      a:
        "THE BOUNDARY: pdf 262 (book 240) prints TWO separable sections — the 'Muscarinic antagonists' class table above (THIS topic, lines 9-70) and the dedicated 'Atropine' block below (lines 72-131: the 'Muscarinic antagonist. Used to treat bradycardia and for ophthalmic applications.' intro, the ORGAN SYSTEM/ACTION/NOTES grid with 'Blocks muscarinic effects (DUMBBELSS) of anticholinesterases, but not the nicotinic effects', the ADVERSE EFFECTS cell, the seven-line 'Hot as a hare' mnemonic, and 'Jimson weed (Datura) → gardener's pupil (mydriasis)') — the whole atropine block is RESERVED for the pending 'atropine' topic (PH21). THE EXTENT: the section does NOT extend to pdf 263 — pdf 263 (book 241) opens 'Sympathomimetics'; sourcePages = [262] only. THE OVER-CLAIM: the pilot sympathomimetics note's sourceRef 'pp. 240–243' / pdfPages [262-265] over-claims book 240 — its table (albuterol through ephedrine) prints entirely on pdf 263-265 (book 241-243); no content overlap with PH20. THE NOT-PRINTED THREE: (1) any toxicity column (the adverse-effect set is the atropine block below, PH21 — adjacent, flagged); (2) the chemistry of lane-aiming (quaternary vs tertiary amines, BBB entry, the inhaled route — the printed lanes are consistent with the rule, but the rule is KYP's); (3) anything beyond the seven rows — the section has no prose intro at all.",
    },
  ],
  related: [
    {
      title: "Anticholinesterase Poisoning — the Atropine-Treatment Mirror (the wet toxidrome whose printed first antidote is this class's headliner)",
      topicId: "anticholinesterase-poisoning",
      note:
        "The completed PH19 (book 239, lower portion): the organophosphate story whose three tiers this class answers at the first one. The printed bridge clauses: 'Reversed by atropine, a competitive inhibitor.' (the muscarinic tier's antidote — atropine, THIS table's headliner and the eye row's member) + 'Atropine can cross BBB to relieve CNS symptoms.' (the CNS tier's cover). This page is atropine's family page — the whole class behind the printed rescue: the wet tier dries under the lock this table formalizes. The full coverage split prints in the atropine block below (PH21's NOTES cell): 'Blocks muscarinic effects (DUMBBELSS) of anticholinesterases, but not the nicotinic effects' — the M/N coverage line this table's lock implies (the class is muscarinic-selective by name; pralidoxime is the nicotinic tier's drug, PH19's second antidote). The exam's composite: the wet farmer (PH19) and the dry elder (this table's leak) are the two poles of one receptor story, and each pole's antidote prints one page from the other.",
    },
    {
      title: "Acetylcholine Receptors — the M/N Map the Lock Selects From",
      topicId: "acetylcholine-receptors",
      note:
        "The completed receptor page (PH12, book 235): the nicotinic (ligand-gated cation channel) and muscarinic (GPCR) families. THIS class is the map's muscarinic half, blocked: every row of this table is an M-address held shut (the pupillary sphincter and ciliary muscle of the eye row, the detrusor of the GU row, the bronchi of the respiratory row, the striatum of the CNS rows, the glands of the secretion rows). The selectivity is the class's own name — 'Muscarinic antagonists' — and the printed confirmation of the split lives in the atropine block below (PH21): 'Blocks muscarinic effects (DUMBBELSS) of anticholinesterases, but not the nicotinic effects'. The agonist mirror (PH18's direct group: bethanechol, carbachol, methacholine, pilocarpine) rides the same M-addresses in the opposite direction — the two pages are one receptor map, read both ways.",
    },
    {
      title: "Micturition Control — the Physiology of the SOFT Lane (oxybutynin's home wiring)",
      topicId: "micturition-control",
      note:
        "The completed physiology page (PH14, book 236): the three-nerve wiring (pelvic parasympathetic, hypogastric sympathetic, pudendal somatic) and the four-receptor plate map (detrusor M3 + β3, internal sphincter α1, external sphincter nicotinic). Its drug table prints this class by name: 'Muscarinic antagonists (eg, oxybutynin)' → '⊝ M receptor → relaxation of detrusor smooth muscle' → 'Urgency incontinence' — the physiology row this table's GU lane expands fourfold ('Solifenacin, Oxybutynin, Flavoxate, Tolterodine' → 'Reduce bladder spasms and urge urinary incontinence (overactive bladder)' — 'Make bladder SOFT'). The page's own mnemonic 'Baby one more time.' (Bethanechol, Oxybutynin, Mirabegron, Tamsulosin) is the four-mechanism sort the exam builds bladder questions on: the agonist (retention), the antagonist (urgency — this table), the β3 sympathomimetic (urgency, the next page's table), and the α1-antagonist (BPH) — one organ, four receptors, four tables, and oxybutynin's letter is the antimuscarinic one.",
    },
    {
      title: "Cholinomimetic Agents — the Agonist Mirror (the same M-addresses, driven instead of blocked)",
      topicId: "cholinomimetic-agents",
      note:
        "The completed PH18 (book 239, upper portion): the two-group agonist table. Its DIRECT group is this class's exact mirror — bethanechol 'Activates bladder smooth muscle' (this table's GU row deactivates it), pilocarpine 'Contracts ciliary muscle of eye' and carbachol 'Constricts pupil' (this table's trio 'Produce mydriasis and cycloplegia'), methacholine the airway provoker (this table's inhaled pair the airway calmer). Its INDIRECT group (the -stigmines) supplies this class's two printed co-therapy anchors — pyridostigmine 'Used with glycopyrrolate or hyoscyamine to control pyridostigmine adverse effects' (both co-therapy drugs are rows 3 and 4 of THIS table) — and its LAST row is this class's own overdose rescue: 'Antidote for anticholinergic toxicity; physostigmine \"phyxes\" atropine overdose.' The two pages are the parasympathetic synapse's two pedals, and the exam's direction questions (retention vs urgency, glaucoma vs dilation, ileus vs antispasmodic) always resolve to which pedal the stem's disease needs.",
    },
  ],
  crossLinks: [
    {
      subject: "Toxicology (the anticholinergic toxidrome — the dry pole this class owns)",
      connection:
        "This class is the dry pole's drug family. The direction: every member blocks muscarinic tone, and at overdose the blockade becomes systemic — the anti-DUMBBELSS picture (dry mouth, dry flushed skin, mydriasis, cycloplegia, tachycardia, ileus/constipation, urinary retention, disorientation, hyperthermia). The PRINTED anchor points live on this page and its neighbors: the wet list prints one page back (book 239, PH19 — 'DUMBBELSS.'), the dry list and the seven-line mnemonic ('Hot as a hare / Fast as a fiddle / Dry as a bone / Red as a beet / Blind as a bat / Mad as a hatter / Full as a flask') plus 'Jimson weed (Datura) → gardener's pupil (mydriasis)' print in the ATROPINE BLOCK BELOW on this same page (the separate atropine topic, PH21 — adjacent, flagged, never this class table's own print), and the rescue prints in the previous page's last cholinomimetic row ('physostigmine \"phyxes\" atropine overdose.'). The exam's toxidrome sort in one line: wet = the cholinergic pole (antidote this class's headliner), dry = this class's own pole (antidote physostigmine) — and the deliberate-overdose classics (Jimson weed/Datura, antihistamines, tricyclics) all present through this class's lock.",
    },
    {
      subject: "Ophthalmology (the pupil and the ciliary body — the eye row's two muscles)",
      connection:
        "The eye row is the ophthalmic exam's pharmacology: 'Atropine, homatropine, tropicamide' → 'Produce mydriasis and cycloplegia' — the pupillary sphincter (an M-address) loses its constrictor tone (mydriasis) and the ciliary muscle loses its accommodation tone (cycloplegia), which is exactly why the trio is used for fundoscopy and refraction. The clinical cautions hang off the same mechanism: mydriasis can close the anterior-chamber angle in susceptible older adults ('acute angle-closure glaucoma in older adults (due to mydriasis)' — printed in the atropine block below, PH21's portion, adjacent), and cycloplegia blurs near vision (the oxybutynin patient who cannot read newsprint). The mirror drops print one page back: pilocarpine 'Contracts ciliary muscle of eye (open-angle glaucoma), pupillary sphincter (closed-angle glaucoma)' and carbachol 'Constricts pupil' — the cholinomimetic direction used to open the angle. The exam's eye sort: dilate-and-freeze for the exam (this row) vs constrict-and-accommodate for the glaucomas (the mirror page) — same two muscles, opposite arrows.",
    },
    {
      subject: "Neurology & Psychiatry (the striatum and the vestibular system — the two CNS lanes)",
      connection:
        "The table's two CNS rows are neurology-pharmacology mainstays. THE STRIATUM: 'Benztropine, trihexyphenidyl' → 'Parkinson disease (“park my Benz”)' + 'Acute dystonia' — antimuscarinics restore the dopamine–acetylcholine balance in the indirect pathway (antipsychotics block dopamine, unmasking relative cholinergic excess — the acute dystonia of the haloperidol stem, and the tremor-predominant Parkinson adjunct); the classic members' limits are the leak (confusion, dry mouth, urinary retention — why the elderly Parkinson patient is the caution stem, and why the printed caution lines live in the atropine block below, PH21). THE VESTIBULE: 'Scopolamine' → 'Motion sickness' — the CNS antimuscarinic of the vestibular pathway (the transdermal patch of the cruise-ship stem — the patch formulation is KYP-knowledge; the page prints the use alone). The exam's composite: a young psychotic patient with an acute dystonic reaction gets benztropine (this row); an elderly Parkinson patient with new confusion on the same drug is the leak question — both stems resolve to the same printed row.",
    },
    {
      subject: "Urology (the overactive bladder and its outlet — the GU lane and its two cautions)",
      connection:
        "The GU lane is the overactive-bladder guideline in one row: 'Solifenacin, Oxybutynin, Flavoxate, Tolterodine' → 'Reduce bladder spasms and urge urinary incontinence (overactive bladder)' — 'Make bladder SOFT' — the detrusor's M3 tone removed (the micturition page's printed mechanics: '⊝ M receptor → relaxation of detrusor smooth muscle'). The same lock explains the two urology cautions the exam attaches: urinary retention in men with prostatic hyperplasia (the detrusor over-relaxed against an obstructed outlet — the printed caution lives in the atropine block below, PH21, adjacent) and the post-void residual that climbs in the elderly woman on oxybutynin (the mini-case's 180 mL). The neighboring tables complete the urology shelf: the micturition page's four-mechanism set ('Baby one more time.' — Bethanechol the agonist for retention, Oxybutynin this class, Mirabegron the β3 sympathomimetic, Tamsulosin the α1-antagonist for BPH) — one organ, four receptors, and this table owns the antimuscarinic letter of it.",
    },
  ],
};
