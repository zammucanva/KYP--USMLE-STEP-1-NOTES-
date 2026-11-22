import type { KypUsMLENote } from "../types";

// Pharmacology — ATROPINE (PH21 — the DRUG ENTRY block: the dedicated
// 'Atropine' block, the LOWER portion of pdf 262 / book 240 under the
// standing 'PHARMACOLOGY—AUTONOMIC DRUGS' banner). Source lines 72-131:
// the 'Atropine' header with its intro 'Muscarinic antagonist. Used to
// treat bradycardia and for ophthalmic applications.'; the three-column
// ORGAN SYSTEM / ACTION / NOTES grid — Eye '↑ pupil dilation,
// cycloplegia' / Airway 'Bronchodilation, ↓ secretions' / Heart
// '↑ heart rate' / Stomach '↓ acid secretion' / Gut '↓ motility' /
// Bladder '↓ urgency in cystitis' — carrying the printed NOTES cell
// 'Blocks muscarinic effects (DUMBBELSS) of anticholinesterases, but
// not the nicotinic effects' (the M-vs-N coverage split of atropine as
// the organophosphate antidote); the ADVERSE EFFECTS tier — the
// findings cell '↑ body temperature (due to ↓ sweating); ↑ HR; dry
// mouth; dry, flushed skin; cycloplegia; constipation; disorientation',
// the cautions line 'Can cause acute angle-closure glaucoma in older
// adults (due to mydriasis), urinary retention in men with prostatic
// hyperplasia, and hyperthermia in infants', the SEVEN-LINE MNEMONIC —
// the book's OWN, printed under the label 'Adverse effects:':
// 'Hot as a hare / Fast as a fiddle / Dry as a bone / Red as a beet /
// Blind as a bat / Mad as a hatter / Full as a flask' — and
// 'Jimson weed (Datura) → gardener's pupil (mydriasis)'.
// PH20/PH21 BOUNDARY (pinned from both sides): the UPPER portion of the
// same page is the seven-row Muscarinic antagonists class table — the
// COMPLETED PH20 topic — EXCLUDED here; only its boundary is pinned
// (atropine's appearance there is the ophthalmic trio membership only:
// 'Atropine, homatropine, tropicamide' | 'Eye' | 'Produce mydriasis
// and cycloplegia'; that table's rows, its 'park my Benz', and its
// 'Make bladder SOFT' are never cited as THIS block's print).
// RASTER CENSUS: ZERO raster images on pdf 262-263 — the block is PURE
// TEXT, COPYRIGHTED, never reproduced as artwork; carried VERBATIM as
// this note's two table blocks (ORIGINAL_KYP_ADAPTATION) and conveyed
// as ONE original KYP toxicity map (AtropineToxicityMap).
// SECTION EXTENT: the block does NOT extend to pdf 263 (book 241 opens
// 'Sympathomimetics'); sourcePages = [262] only.
// BOUNDARY CENSUS: pdf 261 (book 239) behind carries the COMPLETED PH18
// 'cholinomimetic-agents' (upper) and PH19 'anticholinesterase-
// poisoning' (lower) — the mirror anchors: 'DUMBBELSS.' + 'Reversed by
// atropine, a competitive inhibitor. Atropine can cross BBB to relieve
// CNS symptoms.' (the wet toxidrome THIS drug rescues, and the reason
// the NOTES cell says 'Blocks muscarinic effects (DUMBBELSS) of
// anticholinesterases') + pralidoxime's nicotinic tier ('Reversed by
// pralidoxime... Must be coadministered with atropine') + THIS drug's
// own rescue ('physostigmine "phyxes" atropine overdose.'); pdf 258
// (book 236) carries the COMPLETED PH14 micturition-control whose drug
// table prints the bladder lane this grid's Bladder row physiologizes
// ('Muscarinic antagonists (eg, oxybutynin)' → '⊝ M receptor →
// relaxation of detrusor smooth muscle').
// KYP EXTENSIONS (flagged wherever they appear): the SIX-ORGAN DRY TOUR
// (the grid's own six rows read as a body tour, with the simile-to-
// arrow mapping of the book's own seven-line mnemonic onto the grid's
// own arrows — both sets printed, the pinning KYP's); the ANTIDOTE-
// MIRROR frame (both clauses printed one page back); and the
// GARDENER'S-PUPIL frame (the printed Jimson weed line read as the
// exposure stem; the tropane-alkaloid family reading is KYP's, flagged).

export const atropine: KypUsMLENote = {
  id: "atropine",
  title: "Atropine",
  subtitle:
    "The class headliner's own drug entry — one competitive muscarinic block, six printed organ arrows (Eye '↑ pupil dilation, cycloplegia' · Airway 'Bronchodilation, ↓ secretions' · Heart '↑ heart rate' · Stomach '↓ acid secretion' · Gut '↓ motility' · Bladder '↓ urgency in cystitis'), the antidote coverage split ('Blocks muscarinic effects (DUMBBELSS) of anticholinesterases, but not the nicotinic effects'), and the dry toxidrome the book rhymes in its own seven lines — 'Hot as a hare / Fast as a fiddle / Dry as a bone / Red as a beet / Blind as a bat / Mad as a hatter / Full as a flask' — down to the gardener's pupil of Jimson weed.",
  subject: "Pharmacology",
  system:
    "Section II · Pharmacology — Autonomic Drugs (the banner this page shares with drug-effect-modifications, autonomic-receptors, acetylcholine-receptors, pain-transmission, micturition-control, tissue-distribution-of-adrenergic-receptors, g-protein-linked-second-messengers, autonomic-drugs, cholinomimetic-agents, anticholinesterase-poisoning, and muscarinic-antagonists before it — the dedicated Atropine block CLOSES book 240, in the LOWER portion of a page whose UPPER portion is the muscarinic-antagonist class table (the COMPLETED PH20 topic, this drug's own family page: atropine prints there as the ophthalmic trio's headliner); the previous page (book 239) carried the cholinomimetic agonists (PH18) and the cholinergic toxidrome (PH19) whose printed first antidote is THIS drug — 'Reversed by atropine, a competitive inhibitor.' — and whose last printed row carries THIS drug's own overdose antidote — physostigmine; the next page (book 241) opens the sympathomimetics table)",
  pilotCategory:
    "The drug entry's complete architecture — the intro ('Muscarinic antagonist. Used to treat bradycardia and for ophthalmic applications.'), the six-row ORGAN SYSTEM/ACTION/NOTES grid in full (every organ, arrow, and the printed NOTES cell verbatim, including the DUMBBELSS coverage split), the ADVERSE EFFECTS tier (the findings cell, the three-population cautions line, the book's own seven-line 'Hot as a hare' mnemonic, and the Jimson weed line), plus the KYP layers that compress it: the SIX-ORGAN DRY TOUR (with the simile-to-arrow mapping — both printed sets, the pinning KYP's), the ANTIDOTE-MIRROR frame (the two printed clauses of book 239), the GARDENER'S-PUPIL frame (the printed Jimson weed line as the exposure stem), and the PH20/PH21 boundary census (the same-page split pinned from below).",
  difficulty: 2,
  readTime: 7,
  sourceRef:
    "First Aid 2026, Part 1 pp. 240 (Pharmacology — Autonomic Drugs: Atropine — the dedicated drug-entry block, the LOWER portion of the page; the Muscarinic antagonists class table on the SAME page above — the COMPLETED muscarinic-antagonists topic (PH20), where atropine prints only as the ophthalmic trio's member ('Atropine, homatropine, tropicamide' | 'Eye' | 'Produce mydriasis and cycloplegia') — is EXCLUDED here; this block prints: the intro 'Muscarinic antagonist. Used to treat bradycardia and for ophthalmic applications.'; the ORGAN SYSTEM/ACTION/NOTES grid — 'Eye' → '↑ pupil dilation, cycloplegia', 'Airway' → 'Bronchodilation, ↓ secretions', 'Heart' → '↑ heart rate', 'Stomach' → '↓ acid secretion', 'Gut' → '↓ motility', 'Bladder' → '↓ urgency in cystitis' — with the printed NOTES cell 'Blocks muscarinic effects (DUMBBELSS) of anticholinesterases, but not the nicotinic effects'; the ADVERSE EFFECTS tier — '↑ body temperature (due to ↓ sweating); ↑ HR; dry mouth; dry, flushed skin; cycloplegia; constipation; disorientation' + 'Can cause acute angle-closure glaucoma in older adults (due to mydriasis), urinary retention in men with prostatic hyperplasia, and hyperthermia in infants' + the book's OWN seven-line mnemonic (printed under the label 'Adverse effects:': 'Hot as a hare / Fast as a fiddle / Dry as a bone / Red as a beet / Blind as a bat / Mad as a hatter / Full as a flask') + 'Jimson weed (Datura) → gardener's pupil (mydriasis)' — the block is pure text with zero rasters, never reproduced as artwork, carried verbatim as this note's two table blocks; the seven-line 'Hot as a hare' mnemonic is the SOURCE'S OWN, attributed as the book's own wherever quoted; NOT printed in this block (census-flagged, never cited as printed): the tropane-alkaloid family reading of Jimson weed (Datura stramonium — KYP's, flagged), the competitive-block mechanism word (printed one page back: 'Reversed by atropine, a competitive inhibitor.'), the dosing/titrated-endpoint details of the bradycardia and organophosphate uses, and any member of the class table above (homatropine, tropicamide, benztropine, glycopyrrolate, ipratropium, the SOFT four, scopolamine — that table's own print, PH20's topic); the block does NOT extend to pdf 263 (book 241 opens Sympathomimetics); the mirror anchors print one page back (book 239): 'DUMBBELSS.' + 'Reversed by atropine, a competitive inhibitor. Atropine can cross BBB to relieve CNS symptoms.' + 'Antidote for anticholinergic toxicity; physostigmine \"phyxes\" atropine overdose.'; the bladder lane's physiology prints on book 236 ('Muscarinic antagonists (eg, oxybutynin)' → '⊝ M receptor → relaxation of detrusor smooth muscle'))",
  tags: [
    "atropine",
    "muscarinic antagonist",
    "anticholinergic",
    "antimuscarinic",
    "bradycardia",
    "ophthalmic applications",
    "mydriasis",
    "cycloplegia",
    "pupil dilation",
    "bronchodilation",
    "heart rate",
    "acid secretion",
    "motility",
    "cystitis",
    "DUMBBELSS",
    "anticholinesterases",
    "organophosphate poisoning",
    "antidote",
    "adverse effects",
    "anticholinergic toxicity",
    "Hot as a hare",
    "Jimson weed",
    "Datura",
    "gardener's pupil",
    "angle-closure glaucoma",
    "urinary retention",
    "prostatic hyperplasia",
    "hyperthermia",
    "tropane alkaloids",
    "pharmacology",
  ],
  core: {
    what:
      "ONE DRUG, SIX PRINTED ARROWS, ONE PRINTED TOXIDROME. The block opens with its charter line: 'Muscarinic antagonist. Used to treat bradycardia and for ophthalmic applications.' Then the grid — six organ rows, each with its own action arrow: 'Eye' → '↑ pupil dilation, cycloplegia'; 'Airway' → 'Bronchodilation, ↓ secretions'; 'Heart' → '↑ heart rate'; 'Stomach' → '↓ acid secretion'; 'Gut' → '↓ motility'; 'Bladder' → '↓ urgency in cystitis'. The NOTES column carries one printed clause, spanning the whole grid: 'Blocks muscarinic effects (DUMBBELSS) of anticholinesterases, but not the nicotinic effects' — the coverage split of atropine as the organophosphate antidote. Then the ADVERSE EFFECTS tier: the findings cell ('↑ body temperature (due to ↓ sweating); ↑ HR; dry mouth; dry, flushed skin; cycloplegia; constipation; disorientation'), the three-population cautions line (angle-closure in older adults, retention in prostatic men, hyperthermia in infants), the book's own seven-line mnemonic — 'Hot as a hare / Fast as a fiddle / Dry as a bone / Red as a beet / Blind as a bat / Mad as a hatter / Full as a flask' — and the plant anchor: 'Jimson weed (Datura) → gardener's pupil (mydriasis)'.",
    why:
      "WHY ONE DRUG NEEDS ITS OWN BLOCK. The class table above (PH20) printed the family by LANE — seven drug sets aimed at five organs; this block prints the HEADLINER by EFFECT — the one drug that shows every lane at once, because atropine is the class's prototype: tertiary amine, everywhere the parasympathetic message lands (the mechanism word 'competitive' is printed one page back: 'Reversed by atropine, a competitive inhibitor.'). The six arrows are the six uses in mechanism form — bradycardia (the Heart arrow), the ophthalmic exam (the Eye arrow), the airway and gland uses (the Airway arrow), the gastric and gut arrows, the urologic arrow — and they are also the six LEAK directions: the same arrows landing on the patient who did not need them are the adverse-effects cell, finding for finding. WHY THE EXAM LOVES THIS BLOCK: it is the antidote page for the poison page one back (the NOTES cell's DUMBBELSS clause is the printed contract: atropine dries the muscarinic tier and leaves the nicotinic tier to pralidoxime), it is the toxidrome page for the emergency stem (the seven-line mnemonic is the source's own seven-finding fingerprint), and it is the mydriasis page for the plant stem (the gardener's pupil). The printed rescue of atropine's OWN overdose sits one page back: 'physostigmine \"phyxes\" atropine overdose.'",
    keyIdea:
      "Read the block as a SIX-ORGAN DRY TOUR with a toxidrome tail (KYP compression of the grid's own rows). THE TOUR — six lanes, top of the head to the pelvis, each one printed: EYE dilates and freezes ('↑ pupil dilation, cycloplegia'), AIRWAY opens and dries ('Bronchodilation, ↓ secretions'), HEART speeds ('↑ heart rate'), STOMACH quiets ('↓ acid secretion'), GUT slows ('↓ motility'), BLADDER holds ('↓ urgency in cystitis'). THE TAIL — every arrow overshot at once is the printed adverse-effects cell, and the book rhymes it in seven similes (its own): hot (anhidrosis), fast (the Heart arrow), dry (the secretion arrows), red (the flush), blind (the Eye arrow), mad (the disorientation), full (the Bladder arrow overshot into retention). THE ANTIDOTE SPLIT — atropine rescues the WET pole (it 'Blocks muscarinic effects (DUMBBELSS) of anticholinesterases, but not the nicotinic effects' — pralidoxime's tier), and physostigmine rescues atropine. One line: six arrows when you aim them, seven similes when you don't — and the gardener who handles Jimson weed wears the Eye arrow without ever being prescribed it.",
  },
  mechanisms: [
    {
      id: "atropine-six-organ-competitive-block",
      title:
        "The six-organ block: atropine occupies the muscarinic receptor competitively (the mechanism word printed one page back: 'Reversed by atropine, a competitive inhibitor.') and the parasympathetic message stops landing at six printed addresses — Eye, Airway, Heart, Stomach, Gut, Bladder — each grid row one arrow, and each arrow one therapeutic use",
      context:
        "The block's own intro + grid (book 240, lower portion), carried verbatim in the note's first table block. The receptor map is book 235's own (PH12, acetylcholine-receptors: the muscarinic GPCR family); the mechanism word 'competitive' is printed one page back (book 239, PH19's antidote clause: 'Reversed by atropine, a competitive inhibitor.'); the BBB clause is printed there too ('Atropine can cross BBB to relieve CNS symptoms.') — the CNS coverage the disorientation finding and the 'Mad as a hatter' line imply. The six-lane body-tour compression of the grid's own ORGAN SYSTEM column is KYP's.",
      flow: {
        nodes: [
          {
            id: "input",
            label: "The tone to remove: parasympathetic output reaching its end organs through MUSCARINIC receptors — the receiving plate of book 238's cholinergic lane, the M-addresses of book 235's map",
            sublabel:
              "Input — the parasympathetic message atropine silences: the pupillary sphincter and ciliary muscle (the Eye lane), the bronchi and their glands (the Airway lane), the SA node (the Heart lane — the printed bradycardia use's own address), the parietal cells (the Stomach lane), the gut's smooth muscle (the Gut lane), and the detrusor (the Bladder lane — '↓ urgency in cystitis' is the micturition page's printed mechanics applied: '⊝ M receptor → relaxation of detrusor smooth muscle', book 236).",
            variant: "input",
          },
          {
            id: "block",
            label: "STEP 1 — THE BLOCK: atropine occupies the muscarinic receptor COMPETITIVELY — held, not triggered; acetylcholine arrives and finds the plate occupied, so the message never lands",
            sublabel:
              "The printed anchors: the intro names the class ('Muscarinic antagonist.'), and the mechanism word prints one page back — 'Reversed by atropine, a competitive inhibitor.' (book 239, the wet tier's antidote clause) with the CNS cover 'Atropine can cross BBB to relieve CNS symptoms.' Occupancy without signal: this is the same lock as every member of the class table above (PH20 — atropine's family page), but the prototype — the drug the whole class is named for in casual use ('anticholinergic' and 'atropine-like' are this block's drug generalized).",
            variant: "process",
          },
          {
            id: "arrows",
            label: "STEP 2 — SIX PRINTED ARROWS, ONE PER ROW: Eye '↑ pupil dilation, cycloplegia' · Airway 'Bronchodilation, ↓ secretions' · Heart '↑ heart rate' · Stomach '↓ acid secretion' · Gut '↓ motility' · Bladder '↓ urgency in cystitis'",
            sublabel:
              "Each arrow is the therapeutic use in mechanism form: the Eye arrow is the ophthalmic application of the intro (dilate for the fundoscopy eye, freeze accommodation for the refraction eye — the same two effects the class table's trio row prints as its use); the Heart arrow is the bradycardia use of the intro (the SA node's vagal tone removed); the Airway pair opens the bronchi and dries the glands (the preoperative and COPD lanes of the class table above); the Stomach and Gut arrows slow secretion and motility; the Bladder arrow holds the cystitic bladder. Six arrows, six organs, one lock — the class table's five lanes plus the stomach, printed drug-entry-style.",
            variant: "process",
          },
          {
            id: "output",
            label: "RESULT — the grid is the drug's whole therapeutic charter in mechanism form, and its own overdose map: every use is an arrow, and every arrow overshoot is an adverse effect (the next mechanism's coverage split, then the toxidrome tier)",
            sublabel:
              "Output — what the exam can pull from the grid alone: the bradycardia mechanism (Heart arrow), the ophthalmic mechanism (Eye arrow), the organ-by-organ sort (six arrows — the fastest way to answer 'what does atropine do to X'), and the leak logic — the adverse-effects cell's findings are these same arrows landing on the patient who did not need them (↑ body temperature from the sweat glands' arrow, dry mouth from the salivary arrow, constipation from the Gut arrow overshot, cycloplegia from the Eye arrow unneeded). The nicotinic question — what atropine does NOT cover — is the NOTES cell's own clause, the next mechanism.",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "block", label: "the antagonist finds the plate" },
          { from: "block", to: "arrows", label: "tone off, organ by printed organ" },
          { from: "arrows", to: "output", label: "six arrows = the charter and the leak map" },
        ],
      },
    },
    {
      id: "antidote-coverage-split-m-vs-n",
      title:
        "The antidote coverage split: 'Blocks muscarinic effects (DUMBBELSS) of anticholinesterases, but not the nicotinic effects' — atropine dries the wet pole's muscarinic tier (and, by the printed BBB clause, its CNS tier) while the nicotinic tier (neuromuscular blockade) stays pralidoxime's; and the mirror completes itself one page back — physostigmine 'phyxes' atropine overdose",
      context:
        "The block's printed NOTES cell (book 240, lower portion), read against the tier structure of the anticholinesterase-poisoning section one page back (book 239, PH19: the muscarinic tier 'DUMBBELSS.' with 'Reversed by atropine, a competitive inhibitor. Atropine can cross BBB to relieve CNS symptoms.', the nicotinic tier 'Neuromuscular blockade' with 'Reversed by pralidoxime... Must be coadministered with atropine to prevent transient worsening of symptoms', and the CNS tier) and the cholinomimetic table's last row (PH18: 'Antidote for anticholinergic toxicity; physostigmine \"phyxes\" atropine overdose.'). All clauses are printed; the tier-by-tier coverage table that assembles them is KYP's.",
      flow: {
        nodes: [
          {
            id: "input",
            label: "The poison to reverse: anticholinesterase inhibition (the organophosphates of book 239 — 'Often due to organophosphates... that irreversibly inhibit AChE') floods every cholinergic address with accumulated acetylcholine",
            sublabel:
              "Input — the wet pole. AChE inhibited means acetylcholine accumulates at THREE kinds of address (the poison page's own tier structure, one page back): the MUSCARINIC addresses (the DUMBBELSS list — Diarrhea, Urination, Miosis, Bronchospasm, Bradycardia, Emesis, Lacrimation, Sweating, Salivation), the NICOTINIC addresses (the neuromuscular junction — 'Neuromuscular blockade (mechanism similar to succinylcholine)'), and the CNS (respiratory depression, lethargy, seizures, coma). Atropine is the printed rescue of the first and third — not the second.",
            variant: "input",
          },
          {
            id: "muscarinic",
            label: "STEP 1 — THE MUSCARINIC TIER, COVERED: atropine competitively occupies the muscarinic receptor, so the accumulated ACh cannot drive the DUMBBELSS findings — 'Reversed by atropine, a competitive inhibitor.'",
            sublabel:
              "The printed contract, both sides: the poison page's clause names the drug and the mechanism word; this block's NOTES cell names the coverage — 'Blocks muscarinic effects (DUMBBELSS) of anticholinesterases'. The competitive mechanism is WHY the coverage is what it is: atropine competes at the receptor, not at the AChE — so it works no matter how much acetylcholine has accumulated (the inhibition itself is untouched; the message simply cannot land).",
            variant: "process",
          },
          {
            id: "split",
            label: "STEP 2 — THE NICOTINIC TIER, NOT COVERED: the same accumulated ACh still drives the neuromuscular junction — 'but not the nicotinic effects' — the tier that stays pralidoxime's ('Reversed by pralidoxime, regenerates AChE... Must be coadministered with atropine')",
            sublabel:
              "Atropine has no affinity for the nicotinic receptor (the ligand-gated channel family of book 235's map — a different lock entirely), so the neuromuscular blockade — the weakness, the fasciculations, the respiratory failure — persists under atropine alone. The poison page's own coadministration clause ('Must be coadministered with atropine to prevent transient worsening of symptoms') is the clinical consequence of this printed split: pralidoxime regenerates the enzyme (clearing the cause at both tiers) but transiently worsens the muscarinic findings as the enzyme comes back — so the pair covers each other's gap. The CNS tier is covered by the BBB clause printed one page back: 'Atropine can cross BBB to relieve CNS symptoms.'",
            variant: "process",
          },
          {
            id: "mirror",
            label: "STEP 3 — THE MIRROR CLOSES: atropine's OWN overdose (this block's adverse-effects tier — the seven-line mnemonic's dry picture) is rescued by the opposite pole — 'Antidote for anticholinergic toxicity; physostigmine \"phyxes\" atropine overdose.' (printed one page back)",
            sublabel:
              "The two pages are one antidote pair: the wet toxidrome's rescue is atropine (this drug — competitive at the same receptor the ACh flood is driving), and the atropine toxidrome's rescue is physostigmine (an AChE inhibitor that re-floods the muscarinic plate atropine holds shut — and, being uncharged, enters the CNS to clear the delirium; the cholinomimetic page's own charge clause). Each pole's antidote prints on the other pole's page — the exam's favorite symmetry on this spread.",
            variant: "process",
          },
          {
            id: "output",
            label: "RESULT — one printed clause, three exam answers: what atropine covers in organophosphate poisoning (DUMBBELSS — the muscarinic tier), what it does not (the nicotinic tier — why pralidoxime must be coadministered), and who rescues atropine itself (physostigmine)",
            sublabel:
              "Output — the coverage split as a two-column sort the exam recycles: MUSCARINIC findings → atropine responds (bronchospasm, bradycardia, the glands, the gut); NICOTINIC findings → atropine does NOT respond (muscle weakness, fasciculations, respiratory failure — escalate to pralidoxime); and the overdose stem (hot, dry, fast, blind, mad, full) → physostigmine. The Jimson weed line extends the same logic to the plant world: Datura's tropane alkaloids (KYP flag — the alkaloid family is not printed) are atropine-like molecules, so the gardener presents the dry picture and answers the same rescue question.",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "muscarinic", label: "the ACh flood meets the occupied plate" },
          { from: "muscarinic", to: "split", label: "muscarinic dry — nicotinic persists" },
          { from: "split", to: "mirror", label: "the pair covers each other's gap" },
          { from: "mirror", to: "output", label: "one clause, three exam answers" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "atropine-toxicity-map",
      title: "The atropine toxicity map (an original KYP visual)",
      caption:
        "An original KYP toxicity map conveying the dedicated Atropine block (book 240, lower portion): THE SIX-LANE ACTION GRID (the printed ORGAN SYSTEM/ACTION/NOTES rows — Eye '↑ pupil dilation, cycloplegia', Airway 'Bronchodilation, ↓ secretions', Heart '↑ heart rate', Stomach '↓ acid secretion', Gut '↓ motility', Bladder '↓ urgency in cystitis' — with the printed NOTES cell 'Blocks muscarinic effects (DUMBBELSS) of anticholinesterases, but not the nicotinic effects'); THE ADVERSE-EFFECTS TIER (the findings cell and the three-population cautions line); THE SIMILE-TO-ARROW MAPPING BAND (the book's own seven lines — 'Hot as a hare / Fast as a fiddle / Dry as a bone / Red as a beet / Blind as a bat / Mad as a hatter / Full as a flask' — pinned to the grid's own arrows; both sets printed, the pinning KYP's); THE ANTIDOTE-MIRROR STRIP (both printed clauses of book 239: 'Reversed by atropine, a competitive inhibitor.' / 'physostigmine \"phyxes\" atropine overdose.'); and the JIMSON WEED CARD ('Jimson weed (Datura) → gardener's pupil (mydriasis)' — the printed line with the gardener's-pupil exposure frame).",
      notice:
        "Census (pdfimages + text layer): the dedicated Atropine block is PURE TEXT with ZERO raster images on pdf 262-263 — COPYRIGHTED, never reproduced as artwork; this visual conveys the intro, the six grid rows, the NOTES cell, the adverse-effects tier, and the book's own seven-line mnemonic as an ORIGINAL_KYP_ADAPTATION (every organ, arrow, finding, caution, simile, and the Jimson weed line are the book's own print; the six-lane grid layout, the simile-to-arrow mapping, the antidote-mirror strip, and the exposure frame are KYP's). KYP extensions flagged on the map: the SIX-ORGAN DRY TOUR (with the simile-to-arrow mapping), the ANTIDOTE-MIRROR frame (both clauses printed one page back, book 239), and the GARDENER'S-PUPIL frame (the printed Jimson weed line; the tropane-alkaloid family reading is KYP's, flagged — never cited as printed). EXCLUDED: the Muscarinic antagonists class table on the SAME book-240 page ABOVE this block (the COMPLETED muscarinic-antagonists topic, PH20 — only its boundary pinned), the cholinomimetic-agents and anticholinesterase-poisoning sections on pdf 261 behind (the agonist mirror and the wet toxidrome — completed topics whose printed clauses this map cites as mirror anchors), and the sympathomimetics section on pdf 263 ahead (this block does NOT extend there; verified).",
    },
    {
      kind: "table",
      title: "Book 240 — the ORGAN SYSTEM / ACTION / NOTES grid, verbatim",
      intro:
        "The block's own three-column grid, carried whole: the intro line above it, six organ rows with their printed arrows, and the one printed NOTES clause spanning the grid. Every cell is the book's own print.",
      columns: [
        "ORGAN SYSTEM (book 240, verbatim)",
        "ACTION (book 240, verbatim)",
        "NOTES (book 240, verbatim)",
      ],
      rows: [
        [
          "Eye",
          "↑ pupil dilation, cycloplegia",
          "Blocks muscarinic effects (DUMBBELSS) of anticholinesterases, but not the nicotinic effects (the NOTES cell, printed once, spanning the grid)",
        ],
        [
          "Airway",
          "Bronchodilation, ↓ secretions",
          "—",
        ],
        [
          "Heart",
          "↑ heart rate",
          "—",
        ],
        [
          "Stomach",
          "↓ acid secretion",
          "—",
        ],
        [
          "Gut",
          "↓ motility",
          "—",
        ],
        [
          "Bladder",
          "↓ urgency in cystitis",
          "—",
        ],
      ],
      caption:
        "Six organs, six arrows, one lock — the grid is the drug's whole therapeutic charter in mechanism form. The two printed indications of the intro resolve to their rows: bradycardia → the Heart arrow (the SA node's vagal tone removed — '↑ heart rate'), the ophthalmic applications → the Eye arrow ('↑ pupil dilation, cycloplegia' — the same two effects the class table above prints as the trio's use). The NOTES cell is the block's only cross-page clause: the M-vs-N coverage split of atropine as the anticholinesterase antidote — it dries the DUMBBELSS tier (the wet list printed one page back, book 239) and leaves the nicotinic tier (neuromuscular blockade) to pralidoxime, whose own printed clause there says it 'Must be coadministered with atropine'. Boundary note: the Bladder row is the micturition page's printed physiology as a drug arrow ('Muscarinic antagonists (eg, oxybutynin)' → '⊝ M receptor → relaxation of detrusor smooth muscle', book 236) — the same lane the class table above expands into the SOFT four (that expansion is PH20's print, not this block's).",
    },
    {
      kind: "table",
      title: "Book 240 — the ADVERSE EFFECTS tier + the book's own seven-line mnemonic, verbatim",
      intro:
        "The block's toxicity tier, carried whole: the findings cell, the three-population cautions line, the source's own seven-line mnemonic under its printed label 'Adverse effects:', and the Jimson weed line. The mnemonic is the book's OWN — attributed as the source's own wherever quoted.",
      columns: [
        "THE PRINTED ELEMENT (book 240, verbatim)",
        "WHAT IT CARRIES",
      ],
      rows: [
        [
          "↑ body temperature (due to ↓ sweating); ↑ HR; dry mouth; dry, flushed skin; cycloplegia; constipation; disorientation",
          "The findings cell — seven findings, each one a grid arrow overshot: the sweat glands' arrow (anhidrosis → the temperature climbs), the Heart arrow past its bradycardia target (↑ HR), the salivary arrow (dry mouth), the cutaneous flush (dry, flushed skin), the Eye arrow unneeded (cycloplegia), the Gut arrow past spasm into stasis (constipation), and the CNS effect the grid does not print (disorientation — atropine crosses the BBB, printed one page back: 'Atropine can cross BBB to relieve CNS symptoms.').",
        ],
        [
          "Can cause acute angle-closure glaucoma in older adults (due to mydriasis), urinary retention in men with prostatic hyperplasia, and hyperthermia in infants",
          "The cautions line — three populations, three arrows landing on the vulnerable host: the older adult's narrow angle (the Eye arrow's dilation closing it), the prostatic man's obstructed outlet (the Bladder arrow's retention against it), and the infant's immature thermoregulation (the sweat glands' arrow — the hyperthermia of the findings cell, at its most dangerous).",
        ],
        [
          "Adverse effects: Hot as a hare / Fast as a fiddle / Dry as a bone / Red as a beet / Blind as a bat / Mad as a hatter / Full as a flask",
          "The book's OWN seven-line mnemonic, printed under its own label — the source's simile set for the anticholinergic toxidrome: hot (anhidrosis/hyperthermia), fast (tachycardia), dry (dry mouth, dry skin, no sweat), red (cutaneous flush), blind (mydriasis + cycloplegia), mad (delirium/disorientation), full (urinary retention — and the ileus/constipation of the findings cell). Attributed as the source's own in every use; the simile-to-arrow pinning is KYP's overlay.",
        ],
        [
          "Jimson weed (Datura) → gardener's pupil (mydriasis)",
          "The plant anchor — the block's exposure stem: the gardener who handles Jimson weed (Datura) presents with the Eye arrow (mydriasis) inside the full dry picture. The tropane-alkaloid family reading (Datura carries atropine-like molecules — KYP flag, not printed) explains why the plant gives the drug's toxidrome.",
        ],
      ],
      caption:
        "The tier is the grid inverted: every therapeutic arrow, overshooting, becomes a finding — and the book rhymes the overshoot in its own seven similes. The exam's three cuts on this tier: the FINDINGS sort (each finding named to its arrow — the fastest mechanism question on the page), the POPULATION sort (the cautions line's three contraindication stems: older adult + eye pain → angle-closure; prostatic man + no urination → retention; infant + fever → hyperthermia), and the EXPOSURE sort (the Jimson weed line — the deliberate or accidental plant ingestion that presents the whole tier at once). The rescue of the whole tier is printed one page back: 'Antidote for anticholinergic toxicity; physostigmine \"phyxes\" atropine overdose.' (book 239, the cholinomimetic table's last row).",
    },
  ],
  usmle: {
    patterns: [
      {
        stem:
          "A 68-year-old man on a β-blocker after myocardial infarction develops symptomatic bradycardia (heart rate 34/min, lightheadedness, a systolic pressure in the 80s); the ECG shows sinus bradycardia. The team gives intravenous atropine. A pharmacology question asks the mechanism of the heart-rate response.",
        discriminator:
          "The printed Heart row: 'Heart' → '↑ heart rate' — under the block's own intro 'Muscarinic antagonist. Used to treat bradycardia and for ophthalmic applications.'",
        concept:
          "Atropine for symptomatic bradycardia — the SA node's muscarinic (vagal) tone competitively removed (the printed Heart arrow; the mechanism word 'competitive' printed one page back)",
        answer:
          "Atropine blocks the muscarinic receptors on the SA node and the conducting system — competitive antagonism of the vagal (parasympathetic) tone that is slowing the node — so the heart rate rises ('↑ heart rate', the grid's own Heart arrow; the intro's own first use: 'Used to treat bradycardia'). The printed mechanism word is one page back: 'Reversed by atropine, a competitive inhibitor.' The exam's follow-ups: the adverse-effect cluster after repeated dosing (the dry direction — the findings cell), and the failure case — atropine does not speed a denervated/transplanted node (no vagal tone to remove) and does not treat the nicotinic weakness of an organophosphate exposure (the NOTES cell's own split: 'Blocks muscarinic effects (DUMBBELSS) of anticholinesterases, but not the nicotinic effects').",
      },
      {
        stem:
          "A farmer is brought in after organophosphate insecticide exposure: diarrhea, urination, pinpoint pupils, wheezing, bradycardia, and fasciculations with weakness. The team gives atropine. A pharmacology question asks which findings atropine will reverse, which it will not, and what must be coadministered.",
        discriminator:
          "The printed NOTES cell: 'Blocks muscarinic effects (DUMBBELSS) of anticholinesterases, but not the nicotinic effects' — read against the poison page's own tiers one page back (book 239): 'Reversed by atropine, a competitive inhibitor. Atropine can cross BBB to relieve CNS symptoms.' / 'Reversed by pralidoxime... Must be coadministered with atropine to prevent transient worsening of symptoms.'",
        concept:
          "Atropine as the organophosphate antidote — the M-vs-N coverage split: the muscarinic (DUMBBELSS) tier and the CNS tier covered, the nicotinic (neuromuscular) tier left to pralidoxime",
        answer:
          "Atropine reverses the MUSCARINIC findings — the DUMBBELSS list (diarrhea, urination, miosis, bronchospasm, bradycardia, emesis, lacrimation, sweating, salivation — printed one page back) — by competitively holding the muscarinic receptors the accumulated acetylcholine is driving; it also covers the CNS tier ('Atropine can cross BBB to relieve CNS symptoms.'). It does NOT reverse the NICOTINIC findings — the fasciculations and weakness (neuromuscular blockade) — because the printed split says so: 'but not the nicotinic effects'; that tier needs pralidoxime, which regenerates AChE and must be coadministered with atropine. The exam's distractor set on this stem: physostigmine (the rescue for atropine's OWN overdose, not the organophosphate's), and 'atropine alone is sufficient' (the weakness would progress to respiratory failure).",
      },
      {
        stem:
          "A 19-year-old man is brought to the emergency department after drinking a tea brewed from seeds he collected from a weed in his grandfather's garden: he is flushed and dry to the touch, heart rate 128/min, temperature 38.9°C, pupils widely dilated and non-reactive, mumbling and picking at the air, and he has not urinated for hours; his bladder is palpable. The plant is identified as Datura stramonium. The question asks the mechanism of the findings and the antidote class.",
        discriminator:
          "The printed Jimson weed line: 'Jimson weed (Datura) → gardener's pupil (mydriasis)' — inside the block's printed adverse-effects tier (the findings cell + the book's own seven-line mnemonic 'Hot as a hare / Fast as a fiddle / Dry as a bone / Red as a beet / Blind as a bat / Mad as a hatter / Full as a flask')",
        concept:
          "Jimson weed (Datura) ingestion — the plant's atropine-like tropane alkaloids (KYP flag: the alkaloid family reading is not printed) produce the full anticholinergic toxidrome; the antidote is physostigmine (printed one page back)",
        answer:
          "The findings are the anticholinergic toxidrome, every line printed in this block: hot ('↑ body temperature (due to ↓ sweating)'), fast ('↑ HR'), dry ('dry mouth; dry, flushed skin'), blind ('↑ pupil dilation' — the gardener's pupil of the printed line; the cycloplegia adds the blurred near vision), mad ('disorientation'), full ('Full as a flask' — urinary retention), red (the flush) — the book's own seven similes, plus the Jimson weed line naming the plant. The mechanism: competitive muscarinic blockade by Datura's tropane alkaloids (atropine-like molecules — KYP flag, the family reading is not printed on this page; the printed line gives plant → pupil, which is the same direction). The antidote class printed one page back: 'Antidote for anticholinergic toxicity; physostigmine \"phyxes\" atropine overdose.' — the AChE inhibitor that re-floods the muscarinic plate and enters the CNS (the uncharged-crossing clause of the cholinomimetic page). Supportive care if physostigmine is contraindicated; benzodiazepines for the delirium.",
      },
    ],
    traps: [
      {
        a: "Atropine is 'the antidote' for poisoning, so in organophosphate exposure atropine alone is sufficient — the fasciculations and the respiratory-muscle weakness will also improve once the poisoning is 'reversed'",
        b: "Missing the printed coverage split — atropine blocks the muscarinic effects, NOT the nicotinic effects — because both tiers are driven by the same accumulated acetylcholine, so the rescue feels like it should be all-or-nothing",
        whyConfused:
          "The word 'antidote' is printed with atropine's name ('Reversed by atropine, a competitive inhibitor.', one page back) without the tier qualifiers on the same line; the nicotinic findings (fasciculations, weakness) appear alongside the muscarinic ones in the same patient; and pralidoxime's coadministration clause prints on the poison page, not here",
        keyDifference:
          "The printed split is absolute: 'Blocks muscarinic effects (DUMBBELSS) of anticholinesterases, but not the nicotinic effects.' Atropine holds the muscarinic receptor — it has no affinity for the nicotinic junction, so the neuromuscular blockade (the fasciculations, the weakness, the respiratory failure) persists under atropine alone. Pralidoxime regenerates the poisoned AChE (clearing the cause at BOTH tiers) and 'Must be coadministered with atropine to prevent transient worsening of symptoms' (its own printed clause, one page back) — the pair covers each other's gap. A farmer improving under atropine whose weakness climbs is the trap's clinical face: escalate to pralidoxime, not more atropine.",
        clue:
          "Any organophosphate stem that pairs DUMBBELSS findings with NEUROMUSCULAR findings (fasciculations, weakness, respiratory distress) is testing the split: atropine for the wet muscarinic tier, pralidoxime added for the nicotinic tier — and the CNS tier is covered by the printed BBB clause ('Atropine can cross BBB to relieve CNS symptoms.').",
      },
      {
        a: "The anticholinergic toxidrome is a sympathomimetic picture — hot, dry, fast, dilated looks like cocaine or an amphetamine, so the answer to every 'agitated + dilated pupils + tachycardia' stem is a sympathomimetic",
        b: "Confusing the two dry/fast families because they share the final common findings (mydriasis, tachycardia, hyperthermia, agitation/delirium) while differing in the sign that splits them — the SKIN and the SECRETIONS",
        whyConfused:
          "Both toxidromes present with dilated pupils, fast hearts, hot bodies, and wild behavior; exam stems deliberately pair the overlap findings; and the mnemonic lines ('Hot as a hare', 'Mad as a hatter') describe states both families can produce",
        keyDifference:
          "The SPLIT is the sweat: anticholinergics block the muscarinic sweat glands → DRY skin, dry mouth, no sweating ('Dry as a bone' — the book's own line; '↑ body temperature (due to ↓ sweating)' — the findings cell's own parenthetical); sympathomimetics drive the sympathetic sweat glands → DIAPHORESIS (wet skin). The bladder and the gut add the second split: anticholinergics retain urine ('Full as a flask') and constipate; sympathomimetics do neither. The bowel sounds (absent vs hyperactive) and the mucous membranes (dry vs moist) confirm the sort at the bedside.",
        clue:
          "In any toxicology stem with dilated pupils and tachycardia, check the skin and the axillae first: DRY = anticholinergic (atropine, antihistamines, tricyclics, Jimson weed — this block's toxidrome; antidote physostigmine); WET/SWEATY = sympathomimetic (cocaine, amphetamines — the next page's family; cooling + benzodiazepines). 'Hot as a hare, dry as a bone' is the printed split.",
      },
      {
        a: "The adverse effects of atropine are idiosyncratic reactions unrelated to its mechanism — the dry mouth, constipation, and confusion in an older patient are 'just aging' or 'just the underlying illness', not the drug",
        b: "Reading the drug as its indication and missing that every adverse effect is a THERAPEUTIC ARROW LANDING ON A PATIENT WHO DID NOT NEED IT — the same six printed arrows, overshooting",
        whyConfused:
          "The indications (bradycardia, ophthalmic exam) feel distant from the adverse effects (constipation, confusion); the elderly accumulate both drug and sensitivity so the cluster arrives gradually; and the findings cell lists the effects without naming them as the grid's own arrows",
        keyDifference:
          "The grid IS the adverse-effect map: '↑ heart rate' is the bradycardia use — and '↑ HR' in the findings cell is the same arrow in a patient who was not slow; '↓ secretions' is the airway use — and 'dry mouth' + 'dry, flushed skin' are the salivary and sweat arrows; '↓ motility' is the antispasmodic direction — and 'constipation' is it overshooting; '↑ pupil dilation, cycloplegia' is the ophthalmic use — and the unneeded ciliary paralysis is blurred near vision (with the printed angle-closure risk 'in older adults (due to mydriasis)'); '↓ urgency in cystitis' is the urologic use — and urinary retention is it overshooting ('in men with prostatic hyperplasia', the printed caution). 'Disorientation' is the CNS arrow the grid does not print a row for (the BBB crossing is printed one page back).",
        clue:
          "Any patient on atropine (or any anticholinergic) who develops the dry/constipated/blurry/confused/retaining cluster is presenting the printed findings cell — answer 'muscarinic blockade' as the mechanism, and check the three printed populations (older adult → angle risk; prostatic man → retention; infant → hyperthermia) before prescribing.",
      },
      {
        a: "Physostigmine is 'the stronger atropine' — since atropine is the antidote for poisoning, giving physostigmine alongside atropine in organophosphate poisoning must be doubly protective, and in anticholinergic toxicity atropine itself can be redosed as its own antidote",
        b: "Inverting the antidote mirror — because both drugs work at the same cholinergic synapse and both are printed as 'antidotes', which pole each drug rescues gets scrambled",
        whyConfused:
          "Both names print on facing pages with the word 'antidote' near them; the mirror symmetry (each rescues the other's excess) is elegant enough to blur into equivalence; and both drugs indeed act at the muscarinic plate — one holding it shut, one flooding it",
        keyDifference:
          "The two drugs are OPPOSITE POLES of one receptor story: atropine HOLDS the muscarinic plate shut (competitive antagonist — the rescue when the plate is being over-driven: organophosphate/AChE-inhibitor poisoning, the DUMBBELSS tier); physostigmine RE-FLOODS the plate (an AChE inhibitor — the rescue when the plate is over-held: anticholinergic toxicity, the dry tier of this block's adverse-effects cell, 'physostigmine \"phyxes\" atropine overdose.'). Giving physostigmine to an organophosphate patient ADDS cholinergic excess (the wet list worsens — that is why pralidoxime, not physostigmine, is the co-drug there); giving atropine to an atropine overdose deepens the block. Each pole's antidote prints on the other pole's page — the exam's symmetry question.",
        clue:
          "Sort the TOXIDROME before the antidote: WET (DUMBBELSS — miosis, bronchorrhea, bradycardia, sweating) → atropine (add pralidoxime for the nicotinic tier); DRY (this block's cell — mydriasis, dry skin, tachycardia, retention, delirium) → physostigmine (and stop the anticholinergic). Never redose the same pole to rescue itself.",
      },
    ],
    pivots: [
      {
        lookAlike: "Any 'which of the following / mechanism of action' stem that names an atropine scenario — the symptomatic bradycardia, the ophthalmic exam, the organophosphate farmer, the preoperative secretion reduction, the cystitis urgency, or the anticholinergic toxidrome itself — asking the effect at the level of the receptor",
        differentiator:
          "The SIX-ORGAN DRY TOUR (KYP frame on the grid's own rows): sort the stem's organ to its lane and recall the printed arrow — Eye '↑ pupil dilation, cycloplegia' · Airway 'Bronchodilation, ↓ secretions' · Heart '↑ heart rate' · Stomach '↓ acid secretion' · Gut '↓ motility' · Bladder '↓ urgency in cystitis' — all one mechanism: competitive muscarinic blockade (the word 'competitive' printed one page back)",
        correctPath:
          "(1) Name the DRUG CLASS from the stem's scenario: any of these findings/uses points to the muscarinic antagonist prototype — 'Muscarinic antagonist. Used to treat bradycardia and for ophthalmic applications.' (the block's own intro). (2) Name the LANE: climb the tour to the stem's organ and recite its printed arrow — that arrow IS the answer to the effect question. (3) Sort the distractors by their own families: the sympathomimetic (β1 agonist — the next page's table, wet-skinned tachycardia), the cholinomimetic (bethanechol/pilocarpine — one page back, the wet mirror), the nicotinic agents (the junction — not atropine's address, per the printed NOTES cell), and the antihistamine/TCAs (other anticholinergic-carriers — same toxidrome, different question). (4) For bradycardia stems, confirm the rhythm is vagal-mediated (sinus/AV-node) — the Heart arrow needs vagal tone to remove. (5) For the toxidrome stem, deploy the book's own seven similes (attributed) as the finding checklist before answering the mechanism question.",
      },
      {
        lookAlike: "Any 'adverse effect / antidote / next step' stem on a patient who has TOO LITTLE muscarinic tone — the atropine overdose, the Jimson weed ingestion, the antihistamine or tricyclic anticholinergic toxicity, the elderly patient on an antimuscarinic with the dry cluster — asking the rescue at the level of management",
        differentiator:
          "The ANTIDOTE-MIRROR frame (KYP assembly of printed clauses): the dry tier is rescued by the OPPOSITE pole — 'Antidote for anticholinergic toxicity; physostigmine \"phyxes\" atropine overdose.' (printed one page back, book 239) — while the wet tier is rescued by THIS drug; the printed coverage split ('Blocks muscarinic effects (DUMBBELSS) of anticholinesterases, but not the nicotinic effects') is the organophosphate version of the same pole-sort",
        correctPath:
          "(1) Confirm the DRY picture from the printed findings cell: '↑ body temperature (due to ↓ sweating); ↑ HR; dry mouth; dry, flushed skin; cycloplegia; constipation; disorientation' — with the book's own seven similes as the checklist (hot, fast, dry, red, blind, mad, full) and the Jimson weed line for the plant exposure. (2) Distinguish from the sympathomimetic mirror by the skin/secretions (dry vs diaphoretic — the trap-2 split). (3) Name the rescue: physostigmine, the AChE inhibitor that re-floods the held plate (and crosses into the CNS — the uncharged-crossing clause one page back — which is why it clears the delirium, not just the peripherals). (4) Know physostigmine's own limits before reaching for it reflexively (its cholinergic excess risk in the wrong patient — sort the pole first; supportive care and benzodiazepines are the fallback). (5) For the special populations, apply the printed cautions: older adult (angle-closure — an ophthalmology emergency if the eye becomes painful/red), prostatic man (retention — catheterize), infant (hyperthermia — cool actively).",
      },
    ],
    miniCase: {
      vignette:
        "A 23-year-old man is brought to the emergency department by his roommates after a night of confusion. He had brewed a 'herbal tea' from seeds collected from a weed growing near the family garden. On examination: temperature 38.8°C, heart rate 132/min, blood pressure 148/92 mmHg, respiratory rate 20/min. His skin is flushed and bone-dry — the nurse cannot elicit sweat even in the axillae; his mucous membranes are tacky. Both pupils are 7 mm and barely react; he cannot read the discharge instructions at near distance. He is picking at invisible objects and does not know the date. His abdomen is quiet with absent bowel sounds, and he has not voided in 10 hours — bedside ultrasound shows a distended bladder with 600 mL. The roommates produce a photo of the plant: a rank-smelling, trumpet-flowered weed with spiny seed pods.",
      question:
        "Which mechanism explains the ENTIRE cluster (skin, pupils, gut, bladder, mind, and temperature), which printed line of this drug's own block names the exposure, and which drug class is the specific antidote?",
      options: [
        {
          label:
            "Competitive muscarinic blockade — the plant's atropine-like alkaloids holding every muscarinic address shut. The mechanism explains each finding through the block's own printed arrows: the sweat and salivary glands blocked ('dry mouth; dry, flushed skin', '↑ body temperature (due to ↓ sweating)'), the Heart arrow in a patient who was not slow ('↑ HR'), the Eye arrow ('↑ pupil dilation, cycloplegia' — the 7 mm pupils and the unreadable near print), the Gut arrow overshot ('constipation' — the quiet abdomen), the Bladder arrow overshot (the 600 mL retention — 'Full as a flask'), and the CNS effect ('disorientation' — atropine crosses the BBB, printed one page back). The exposure is the block's own printed line: 'Jimson weed (Datura) → gardener's pupil (mydriasis)' — the trumpet-flowered, spiny-podded weed is Datura stramonium, and the tea is its tropane alkaloids (KYP flag: the alkaloid family reading is not printed on the page). The antidote class is the cholinomimetic pole printed one page back: 'Antidote for anticholinergic toxicity; physostigmine \"phyxes\" atropine overdose.' — the AChE inhibitor that re-floods the held plate and enters the CNS to clear the delirium.",
          text: "Competitive muscarinic blockade by Datura's atropine-like alkaloids; the printed Jimson weed line names it; physostigmine is the antidote.",
          correct: true,
          why:
            "Correct on every count, and the anchored clauses are the book's own print: the intro ('Muscarinic antagonist.'), the grid's arrows (Eye '↑ pupil dilation, cycloplegia'; Heart '↑ heart rate'; Gut '↓ motility'; Bladder '↓ urgency in cystitis' — each one overshooting here), the findings cell ('↑ body temperature (due to ↓ sweating); ↑ HR; dry mouth; dry, flushed skin; cycloplegia; constipation; disorientation' — a finding-for-finding match to the vignette), the book's own seven-line mnemonic ('Hot as a hare / Fast as a fiddle / Dry as a bone / Red as a beet / Blind as a bat / Mad as a hatter / Full as a flask' — the simile-to-arrow checklist), and the Jimson weed line itself. The antidote clause is printed one page back (book 239, the cholinomimetic table's last row) — the mirror page whose first row-group this drug rescues in the opposite direction.",
        },
        {
          label:
            "Sympathomimetic intoxication — the tea contained an ephedrine-like alkaloid: the dilated pupils, tachycardia, hypertension, hyperthermia, and agitation are all α- and β-adrenergic drive, the dry skin is peripheral vasoconstriction, and the management is cooling plus benzodiazepines with a β-blocker for the heart rate; physostigmine is contraindicated agitation control.",
          text: "Sympathomimetic intoxication — adrenergic drive; cool, sedate, and β-block.",
          why:
            "The overlap-trap distractor (trap 2's face): sympathomimetics DO produce dilated pupils, tachycardia, hyperthermia, and agitation — but they drive the sympathetic SWEAT glands, so the skin is DIAPHORETIC, not bone-dry; this patient's dry axillae, tacky membranes, absent bowel sounds, and 600 mL bladder are the anticholinergic signature the sympathomimetic cannot produce (no retention, no ileus — the autonomic direction is wrong). The plant identification (Datura — the printed line's own weed) and the near-blindness (cycloplegia, a muscarinic-blockade finding) settle it. A β-blocker here would be the wrong management for the wrong family — and could destabilize blood pressure in a patient whose hypertension is driven by unopposed vagal withdrawal.",
        },
        {
          label:
            "Organophosphate poisoning — the gardener was actually insecticide-exposed: the tea story is incidental, and the findings are cholinergic excess; the treatment is atropine plus pralidoxime, with atropine redosed until the pupils constrict and the skin dries.",
          text: "Organophosphate poisoning — cholinergic excess; treat with atropine + pralidoxime.",
          why:
            "The direction inverted — the wet/dry trap at its purest. Organophosphate poisoning is the WET pole: miosis (not 7 mm mydriasis), bronchorrhea, bradycardia (not 132/min), sweating, salivation, diarrhea, and hyperactive bowel sounds (not absent ones) — the printed DUMBBELSS list one page back, the exact OPPOSITE of this patient on every finding. Giving atropine to this patient would deepen the existing blockade (the drug his tea already contains, redosed by prescription); the 'titrate until the skin dries' clue is the organophosphate endpoint — this patient's skin is already dry, the wrong pole entirely. The exam's version of this distractor always pairs the word 'gardener' with the farmer-poisoning reflex — the printed Jimson weed line exists precisely to split the two gardening exposures: Datura gives the dry picture (physostigmine), insecticides give the wet one (atropine + pralidoxime).",
        },
        {
          label:
            "Serotonin syndrome — an herbal MAO inhibitor in the tea interacting with something in his diet: the hyperthermia, tachycardia, and agitation fit, the pupillary dilation is adrenergic, and the treatment is cyproheptadine; the urinary retention is an unrelated distraction.",
          text: "Serotonin syndrome — herbal MAOI interaction; treat with cyproheptadine.",
          why:
            "The wrong-syndrome distractor assembled from the overlap findings. Serotonin syndrome shares hyperthermia, tachycardia, and agitation — but it is a WET-ISH picture with NEUROMUSCULAR hyperactivity the vignette lacks: clonus (especially inducible ocular/ankle), hyperreflexia, tremor, and diaphoresis. This patient has the opposite motor exam direction (quiet abdomen, no clonus reported) and the full anticholinergic peripheral set (dry axillae, absent bowel sounds, retention, cycloplegia) that serotonin syndrome does not produce. The plant photo (Datura) and the printed line that names it close the question: the exam sorts these three agitated-hyperthermia syndromes by the skin (dry = anticholinergic), the muscles (clonus/hyperreflexia = serotonin), and the bowels/bladder (ileus + retention = anticholinergic).",
        },
        {
          label:
            "Antihistamine overdose — the roommates' over-the-counter sleeping pills, not the tea: diphenhydramine's H1 blockade explains everything, so no specific antidote exists and management is supportive alone; physostigmine is 'outdated' and should not be considered.",
          text: "Antihistamine overdose — H1 blockade; supportive care alone, no antidote.",
          why:
            "The half-right mechanism with the wrong family and the wrong management. Diphenhydramine IS an anticholinergic carrier (its muscarinic blockade produces this exact toxidrome) — the trap concedes the mechanism while misnaming the receptor (H1 blockade does not produce mydriasis, ileus, or urinary retention; its muscarinic blockade does) and denying the antidote. The specific rescue is printed one page back regardless of which CARRIER caused the blockade: 'Antidote for anticholinergic toxicity; physostigmine \"phyxes\" atropine overdose.' — the clause covers the antihistamine and tricyclic toxidromes (the classic physostigmine indications), with supportive care and benzodiazepines as the adjunct or fallback when physostigmine is contraindicated (its own cholinergic risk in cardiotoxic overdoses — e.g., TCAs with conduction changes — is the real nuance, not 'outdated'). The vignette's plant photo and the block's own printed line (Jimson weed → gardener's pupil) name the actual exposure, but the management answer would be the same physostigmine decision either way.",
        },
      ],
      reasoning:
        "The vignette is the block's ADVERSE-EFFECTS TIER presented as a patient — every printed finding given a vital sign, an exam element, or a bedside measurement, wrapped in the printed exposure line's own plant. (1) THE EXPOSURE — 'Jimson weed (Datura) → gardener's pupil (mydriasis)' (the block's own printed line): the trumpet-flowered, spiny-podded weed of the photo is Datura stramonium, and the brewed tea is its tropane alkaloids — atropine-like molecules (KYP flag: the family reading is not printed; the printed line gives plant → pupil, which is the case's direction). (2) THE MECHANISM — the intro's own class name ('Muscarinic antagonist.') with the mechanism word printed one page back ('Reversed by atropine, a competitive inhibitor.'): competitive blockade at every muscarinic address, which explains EACH finding through the block's own printed arrows — the sweat/salivary arrows ('dry mouth; dry, flushed skin', '↑ body temperature (due to ↓ sweating)'), the Heart arrow in a normocardic patient ('↑ HR' — 132/min), the Eye arrow ('↑ pupil dilation, cycloplegia' — the 7 mm pupils and the unreadable near print), the Gut arrow overshot ('constipation' — absent bowel sounds), the Bladder arrow overshot (the 600 mL retention — 'Full as a flask'), and the CNS finding ('disorientation' — the BBB crossing printed one page back: 'Atropine can cross BBB to relieve CNS symptoms.'). The book's own seven similes are the checklist: hot, fast, dry, red, blind, mad, full — all seven present. (3) THE SORT — the distractors borrow the three neighboring syndromes that share the agitated-hyperthermia overlap: the sympathomimetic (wet skin — split by the dry axillae), the organophosphate (the pole inverted — miosis/bradycardia/bronchorrhea vs this patient's mydriasis/tachycardia/dry everything; and the printed line exists precisely to split the two gardening exposures), serotonin syndrome (clonus/hyperreflexia/diaphoresis — absent here), and the antihistamine (right mechanism, wrong receptor attribution and a denied antidote). (4) THE RESCUE — the mirror clause printed one page back: 'Antidote for anticholinergic toxicity; physostigmine \"phyxes\" atropine overdose.' — the AChE inhibitor that re-floods the held plate and, crossing the CNS uncharged, clears the delirium too; supportive care (active cooling for the hyperthermia — the infant-caution line's principle applied; catheterization for the retention — the prostatic-caution line's mechanics; benzodiazepines for the agitation) runs alongside. The discriminator to carry: the toxidrome is the grid inverted — six arrows overshooting at once — and the plant that delivers it is the printed line's own weed.",
    },
  },
  mnemonics: [
    {
      code: "HOT AS A HARE / FAST AS A FIDDLE / DRY AS A BONE / RED AS A BEET / BLIND AS A BAT / MAD AS A HATTER / FULL AS A FLASK — the book's OWN seven-line mnemonic, printed verbatim under its own label 'Adverse effects:' (book 240, inside the Atropine block's adverse-effects tier)",
      meaning:
        "The source's own simile set for the anticholinergic toxidrome, quoted from where it prints: hot (hyperthermia — '↑ body temperature (due to ↓ sweating)'), fast (tachycardia — '↑ HR'), dry (dry mouth, dry skin, anhidrosis), red (cutaneous flush — 'dry, flushed skin'), blind (mydriasis + cycloplegia — the Eye row's arrows), mad (disorientation/delirium), full (urinary retention — and the constipation/ileus of the same direction). Seven similes, seven findings — the findings cell's own list in the source's own rhyme. The simile-to-arrow pinning (each line mapped to the grid row or finding it rides) is KYP's overlay; the similes and the arrows are the book's own.",
      memorizes: "The anticholinergic toxidrome — the block's entire adverse-effects findings cell in seven similes",
      whenToUse:
        "Any anticholinergic-toxicity stem — the atropine overdose, the Jimson weed ingestion (the block's own printed line), the antihistamine or tricyclic overdose, the elderly patient on an antimuscarinic with the dry cluster: run the seven lines as the checklist, then answer the mechanism (muscarinic blockade — the same lock as the six therapeutic arrows) and the antidote (physostigmine, printed one page back). Also the differential sort: the lines that CANNOT be sympathomimetic findings (dry, full) are the ones that settle the overlap trap.",
      clinical:
        "The bedside order that matters: HOT and MAD are the killers (hyperthermia from anhidrosis, delirium with agitation) — cool actively and sedate with benzodiazepines while the specific antidote is considered; FULL needs a catheter (the retention the printed caution names for prostatic men, arrived at by overdose here); BLIND is expected and self-limited (warn the patient, shield the eyes); DRY, FAST, and RED are the fingerprint that confirms the family. The seven lines are the source's own — attribute them to First Aid when asked for the classic description.",
    },
    {
      code: "THE SIX-ORGAN DRY TOUR (KYP): EYE → AIRWAY → HEART → STOMACH → GUT → BLADDER — the grid's own six rows read as a body tour, each lane one printed arrow: dilate-and-freeze · open-and-dry · speed · quiet-acid · slow · hold",
      meaning:
        "The KYP compression of the block's own ORGAN SYSTEM/ACTION grid — six lanes, top of the head to the pelvis: EYE ('↑ pupil dilation, cycloplegia' — mydriasis for the fundoscopy eye, cycloplegia for the refraction eye), AIRWAY ('Bronchodilation, ↓ secretions' — the bronchi opened, the glands dried), HEART ('↑ heart rate' — the SA node's vagal tone removed, the bradycardia use), STOMACH ('↓ acid secretion' — the parietal cell quieted), GUT ('↓ motility' — the antispasmodic direction), BLADDER ('↓ urgency in cystitis' — the detrusor held, the urologic use). Every organ name and arrow is the book's own print; the tour order and the one-word verbs are KYP's.",
      memorizes: "The six-row action grid — which organ gets which arrow, top to bottom, and the two printed indications (bradycardia = the Heart arrow; ophthalmic = the Eye arrow)",
      whenToUse:
        "Any 'what does atropine do to X' organ question: climb the tour to the stem's organ and recite its arrow. Also the reverse-engineering use — a finding in a patient (dilated pupil, fast heart, quiet gut, full bladder) climbs back to the drug class regardless of which member or carrier caused it. And the leak use: every adverse effect in the findings cell is one of these six arrows (plus the CNS) landing on a patient who did not need it.",
      clinical:
        "The two printed indications are two tour stops: symptomatic sinus bradycardia stops at HEART (the ACLS first-line drug — vagal tone removed), the ophthalmic exam stops at EYE (though shorter-acting drops — tropicamide, homatropine, the class table's trio — are the practical choices; that table is PH20's print). The other four stops are the mechanism map for the class's other members (ipratropium at AIRWAY, the antispasmodics at GUT, the SOFT four at BLADDER — again the class table's rows, not this block's). The tour is the fastest grid recall on the page.",
    },
    {
      code: "THE ANTIDOTE MIRROR (KYP): WET gets DRY, DRY gets WET — 'DUMBBELSS' (the printed wet list, book 239) is reversed by atropine 'a competitive inhibitor'; the atropine toxidrome (this block's dry tier) is 'phyxed' by physostigmine — each pole's rescue prints on the other pole's page",
      meaning:
        "The KYP assembly of the spread's printed clauses into one reversible rule: the organophosphate's wet muscarinic flood (Diarrhea, Urination, Miosis, Bronchospasm, Bradycardia, Emesis, Lacrimation, Sweating, Salivation — 'DUMBBELSS.', printed one page back) is rescued by the dry drug ('Reversed by atropine, a competitive inhibitor.' — printed one page back; this block's NOTES cell names the coverage: 'Blocks muscarinic effects (DUMBBELSS) of anticholinesterases, but not the nicotinic effects'); and the dry drug's own overdose (this block's findings cell + the seven similes) is rescued by a wet drug ('Antidote for anticholinergic toxicity; physostigmine \"phyxes\" atropine overdose.' — the cholinomimetic table's last row, one page back). The clauses are all printed; the mirror frame is KYP's.",
      memorizes: "Which antidote for which pole — and the M-vs-N coverage split that adds pralidoxime to atropine in organophosphate poisoning",
      whenToUse:
        "Any poisoning stem on this spread: sort the pole first (wet = miosis/bradycardia/secretions; dry = mydriasis/tachycardia/anhydrosis), then answer the antidote (wet muscarinic → atropine, plus pralidoxime if any nicotinic findings — fasciculations, weakness; dry → physostigmine). Also the trap check: the question that offers atropine for the dry picture or physostigmine for the wet one has the mirror inverted.",
      clinical:
        "The mirror's asymmetries are the exam's fine print: atropine covers the muscarinic AND CNS tiers of the organophosphate (the printed BBB clause) but never the nicotinic tier (pralidoxime's — 'Must be coadministered with atropine to prevent transient worsening of symptoms'); physostigmine covers the peripheral AND CNS findings of the anticholinergic toxidrome (it crosses uncharged — the printed clause of the cholinomimetic page) but carries its own cholinergic risk, which is why the antihistamine/TCA overdoses sometimes get supportive care instead. Two poles, two rescues, two pages — one printed mirror.",
    },
    {
      code: "THE GARDENER'S PUPIL (KYP frame on the printed line): 'Jimson weed (Datura) → gardener's pupil (mydriasis)' — the plant carries the drug's own alkaloids, so the gardener wears the Eye row's arrow without ever being prescribed it",
      meaning:
        "The KYP reading of the block's printed plant anchor: Datura stramonium (jimson weed — 'devil's weed', 'thornapple') is loaded with tropane alkaloids, atropine's own molecular family (KYP flag: the alkaloid family reading is not printed on the page; the printed line gives plant → pupil); the gardener who handles or brews it presents with the Eye row's arrow (mydriasis — the 'gardener's pupil' of the printed line) inside the full dry tier (the seven similes). The printed line is the book's own; the exposure-frame reading is KYP's.",
      memorizes: "The plant-exposure stem — Datura/jimson weed as the atropine-family source, presenting the anticholinergic toxidrome",
      whenToUse:
        "Any toxicology stem with a plant: rank-smelling weed with trumpet flowers and spiny seed pods, a 'herbal tea' brewed from seeds, a gardener or adolescent with sudden mydriasis and delirium — answer anticholinergic toxicity (competitive muscarinic blockade), and expect the management question (physostigmine, the printed mirror clause) and the differential sort (the sympathomimetic split — dry skin). Also the pair with the farmer: two gardening exposures, two opposite poles — Datura (dry) vs organophosphate insecticide (wet) — and the printed lines of this spread name both.",
      clinical:
        "The adolescent-tea-party ingestion is the classic presentation (delirium, mydriasis, dry flushed skin, retention — sometimes days-long, the seeds' alkaloid load); the gardener's transdermal handling exposure gives the milder isolated finding the printed line names (the dilated pupil — 'gardener's pupil'). Management runs the tier: benzodiazepines for the delirium, active cooling for the hyperthermia, a catheter for the retention, physostigmine for the specific reversal (the printed clause), and ophthalmology follow-up for the eye.",
    },
  ],
  rapidReview: {
    s30: [
      "'Atropine' — the dedicated drug-entry block, the LOWER portion of book 240 (pdf 262, lines 72-131), under the standing PHARMACOLOGY—AUTONOMIC DRUGS banner; the UPPER portion of the same page is the Muscarinic antagonists class table (the COMPLETED PH20 topic — EXCLUDED).",
      "The intro, verbatim: 'Muscarinic antagonist. Used to treat bradycardia and for ophthalmic applications.' — the class name and the two printed indications.",
      "The grid frame: three printed column headers — ORGAN SYSTEM / ACTION / NOTES — and six organ rows.",
      "The Eye row, verbatim: 'Eye' → '↑ pupil dilation, cycloplegia'.",
      "The Airway row, verbatim: 'Airway' → 'Bronchodilation, ↓ secretions'.",
      "The Heart row, verbatim: 'Heart' → '↑ heart rate' (the bradycardia indication's own mechanism arrow).",
      "The Stomach, Gut, and Bladder rows, verbatim: 'Stomach' → '↓ acid secretion' · 'Gut' → '↓ motility' · 'Bladder' → '↓ urgency in cystitis'.",
      "The NOTES cell, verbatim: 'Blocks muscarinic effects (DUMBBELSS) of anticholinesterases, but not the nicotinic effects' — the M-vs-N coverage split of the organophosphate antidote.",
      "The adverse-effects findings cell, verbatim: '↑ body temperature (due to ↓ sweating); ↑ HR; dry mouth; dry, flushed skin; cycloplegia; constipation; disorientation' + the cautions line: 'Can cause acute angle-closure glaucoma in older adults (due to mydriasis), urinary retention in men with prostatic hyperplasia, and hyperthermia in infants'.",
      "The book's OWN seven-line mnemonic (under the printed label 'Adverse effects:'): 'Hot as a hare / Fast as a fiddle / Dry as a bone / Red as a beet / Blind as a bat / Mad as a hatter / Full as a flask' — and the printed plant line: 'Jimson weed (Datura) → gardener's pupil (mydriasis)'.",
    ],
    m3: [
      "HOT-AS-A-HARE (the book's own, seven lines) — the anticholinergic toxidrome checklist: hot (anhidrosis), fast (↑ HR), dry (mouth + skin), red (flush), blind (mydriasis + cycloplegia), mad (disorientation), full (retention).",
      "THE SIX-ORGAN DRY TOUR (KYP) — the grid top to bottom: Eye dilate-and-freeze · Airway open-and-dry · Heart speed (the bradycardia use) · Stomach quiet-acid · Gut slow · Bladder hold; every adverse effect is one of these arrows overshooting.",
      "THE ANTIDOTE MIRROR + THE GARDENER'S PUPIL (KYP frames on printed clauses) — wet DUMBBELSS gets atropine ('a competitive inhibitor', plus pralidoxime for the nicotinic tier per the printed split); the dry tier gets physostigmine ('phyxes' atropine overdose — printed one page back); and Jimson weed (Datura) is the plant that hands the gardener the Eye arrow.",
    ],
    m10: [
      "The whole block in one breath: one intro ('Muscarinic antagonist. Used to treat bradycardia and for ophthalmic applications.'), one grid (ORGAN SYSTEM/ACTION/NOTES — Eye '↑ pupil dilation, cycloplegia'; Airway 'Bronchodilation, ↓ secretions'; Heart '↑ heart rate'; Stomach '↓ acid secretion'; Gut '↓ motility'; Bladder '↓ urgency in cystitis'), one NOTES clause ('Blocks muscarinic effects (DUMBBELSS) of anticholinesterases, but not the nicotinic effects'), one adverse-effects tier (the findings cell, the three-population cautions, the seven-line mnemonic, the Jimson weed line).",
      "The two printed indications resolved to their arrows: bradycardia → the Heart row ('↑ heart rate' — vagal tone competitively removed; the mechanism word 'competitive' printed one page back: 'Reversed by atropine, a competitive inhibitor.'); ophthalmic applications → the Eye row ('↑ pupil dilation, cycloplegia' — the fundoscopy and refraction eye; atropine's class-table appearance (PH20) is this same trio membership).",
      "The coverage split in exam form: atropine reverses the muscarinic (DUMBBELSS) and — by the printed BBB clause ('Atropine can cross BBB to relieve CNS symptoms.') — the CNS tiers of anticholinesterase poisoning, but NOT the nicotinic tier (neuromuscular blockade — fasciculations, weakness, respiratory failure), which needs pralidoxime ('Must be coadministered with atropine to prevent transient worsening of symptoms' — all printed one page back).",
      "The adverse-effects findings cell, each finding to its arrow: '↑ body temperature (due to ↓ sweating)' = the sweat glands' arrow; '↑ HR' = the Heart arrow overshooting; 'dry mouth' = the salivary arrow; 'dry, flushed skin' = the cutaneous arrow; 'cycloplegia' = the Eye arrow unneeded; 'constipation' = the Gut arrow overshooting; 'disorientation' = the CNS effect (the BBB crossing printed one page back).",
      "The cautions line's three populations: older adults → 'acute angle-closure glaucoma... (due to mydriasis)' (the Eye arrow closing the narrow angle); men with prostatic hyperplasia → 'urinary retention' (the Bladder arrow against the obstructed outlet); infants → 'hyperthermia' (the sweat arrow on immature thermoregulation — the most dangerous).",
      "The seven-line mnemonic (the book's OWN — attribute when quoted): 'Hot as a hare / Fast as a fiddle / Dry as a bone / Red as a beet / Blind as a bat / Mad as a hatter / Full as a flask' — the toxidrome fingerprint; the simile-to-arrow pinning is KYP's overlay.",
      "The Jimson weed line, verbatim: 'Jimson weed (Datura) → gardener's pupil (mydriasis)' — the plant anchor; Datura's tropane alkaloids are atropine-like molecules (KYP flag — the family reading is not printed), so the ingestion presents the full dry tier.",
      "The antidote mirror (both clauses printed one page back, book 239): the wet pole's rescue is this drug ('Reversed by atropine, a competitive inhibitor.') and this drug's own rescue is the cholinomimetic table's last row ('Antidote for anticholinergic toxicity; physostigmine \"phyxes\" atropine overdose.') — wet gets dry, dry gets wet.",
      "The wet/dry + fast/hot differential sort: anticholinergic (this block) = DRY skin + mydriasis + ileus + retention; sympathomimetic (the next page's family) = DIAPHORETIC + mydriasis + tachycardia + hyperthermia; organophosphate (one page back) = WET everything + miosis + bradycardia; serotonin syndrome = clonus + hyperreflexia + diaphoresis. The skin and the bladder settle the overlap trap.",
      "What this block does NOT print (census-flagged, never cited as printed): the competitive-block mechanism word (printed one page back), the tropane-alkaloid family reading of Datura, the dosing/titrated endpoints of the bradycardia and organophosphate uses, and every member of the class table above (homatropine, tropicamide, benztropine, glycopyrrolate, ipratropium, tiotropium, the SOFT four, scopolamine — that table is PH20's own print; this block is the headliner's DRUG ENTRY). The block does NOT extend to pdf 263 (book 241 opens Sympathomimetics); the bladder lane's physiology prints on book 236 ('Muscarinic antagonists (eg, oxybutynin)' → '⊝ M receptor → relaxation of detrusor smooth muscle').",
    ],
  },
  recall: [
    {
      q: "Recite the block's intro line and the six organ rows of the ORGAN SYSTEM/ACTION/NOTES grid, verbatim.",
      a:
        "INTRO: 'Muscarinic antagonist. Used to treat bradycardia and for ophthalmic applications.' GRID: (1) 'Eye' → '↑ pupil dilation, cycloplegia'; (2) 'Airway' → 'Bronchodilation, ↓ secretions'; (3) 'Heart' → '↑ heart rate'; (4) 'Stomach' → '↓ acid secretion'; (5) 'Gut' → '↓ motility'; (6) 'Bladder' → '↓ urgency in cystitis'. The NOTES column carries one printed clause spanning the grid: 'Blocks muscarinic effects (DUMBBELSS) of anticholinesterases, but not the nicotinic effects'.",
    },
    {
      q: "State the NOTES cell verbatim, and use it to answer: which tiers of organophosphate poisoning does atropine reverse, which does it not, and what must be coadministered — with all three printed clauses from the facing page (book 239).",
      a:
        "THE NOTES CELL: 'Blocks muscarinic effects (DUMBBELSS) of anticholinesterases, but not the nicotinic effects.' THE COVERAGE: atropine reverses the muscarinic tier (the DUMBBELSS list — Diarrhea, Urination, Miosis, Bronchospasm, Bradycardia, Emesis, Lacrimation, Sweating, Salivation) and, by the printed BBB clause ('Atropine can cross BBB to relieve CNS symptoms.'), the CNS tier; it does NOT reverse the nicotinic tier (the neuromuscular blockade — fasciculations, weakness, respiratory failure). THE COADMINISTRATION: pralidoxime — 'Reversed by pralidoxime, regenerates AChE via dephosphorylation if given early. Must be coadministered with atropine to prevent transient worsening of symptoms.' All four clauses are the book's own print (the NOTES cell here; the other three on book 239, one page back).",
    },
    {
      q: "Recite the adverse-effects findings cell and the cautions line, verbatim, and name the printed clause that rescues this entire tier.",
      a:
        "THE FINDINGS CELL: '↑ body temperature (due to ↓ sweating); ↑ HR; dry mouth; dry, flushed skin; cycloplegia; constipation; disorientation.' THE CAUTIONS LINE: 'Can cause acute angle-closure glaucoma in older adults (due to mydriasis), urinary retention in men with prostatic hyperplasia, and hyperthermia in infants.' THE RESCUE (printed one page back, book 239, the cholinomimetic table's last row): 'Antidote for anticholinergic toxicity; physostigmine \"phyxes\" atropine overdose.'",
    },
    {
      q: "Recite the book's own seven-line mnemonic for the anticholinergic toxidrome (attributing it), and pin each simile to the grid arrow or finding it rides.",
      a:
        "THE MNEMONIC (the book's OWN, printed under the label 'Adverse effects:'): 'Hot as a hare / Fast as a fiddle / Dry as a bone / Red as a beet / Blind as a bat / Mad as a hatter / Full as a flask'. THE PINNING (KYP overlay — the similes and the arrows are both printed, the mapping is KYP's): hot = '↑ body temperature (due to ↓ sweating)' — the sweat glands' arrow; fast = '↑ HR' — the Heart arrow overshooting; dry = 'dry mouth; dry, flushed skin' — the salivary and cutaneous arrows; red = the flush; blind = '↑ pupil dilation, cycloplegia' — the Eye row's arrows; mad = 'disorientation' — the CNS effect (atropine crosses the BBB); full = urinary retention — the Bladder arrow overshooting ('↓ urgency in cystitis' past its target), with the constipation of the Gut arrow in the same direction.",
    },
    {
      q: "State the PH20/PH21 boundary of book 240 from below, the section-extent finding for pdf 263, and the three things this block does NOT print (census-flagged).",
      a:
        "THE BOUNDARY (pinned from both sides): pdf 262 (book 240) prints TWO separable sections under the one banner — the 'Muscarinic antagonists' class table ABOVE (lines 9-70: the COMPLETED PH20 topic — EXCLUDED here; only its header pair pinned as the boundary marker; atropine's appearance there is the ophthalmic trio membership only) and the dedicated 'Atropine' block BELOW (lines 72-131: THIS topic — the intro, the six-row grid, the NOTES cell, the ADVERSE EFFECTS tier, the seven-line mnemonic, the Jimson weed line). THE EXTENT: the block does NOT extend to pdf 263 — pdf 263 (book 241) opens 'Sympathomimetics'; sourcePages = [262] only. THE NOT-PRINTED THREE: (1) the competitive-block mechanism word — it prints one page back ('Reversed by atropine, a competitive inhibitor.', book 239); (2) the tropane-alkaloid family reading of Jimson weed/Datura (KYP's, flagged); (3) the dosing/titrated-endpoint details of the bradycardia and organophosphate uses — and every member of the class table above is PH20's print, never this block's.",
    },
  ],
  related: [
    {
      title: "Muscarinic Antagonists — the Class Table Above (the same-page family page: this drug's own class, printed one block up)",
      topicId: "muscarinic-antagonists",
      note:
        "The completed PH20 (book 240, UPPER portion): the seven-row DRUGS × ORGAN SYSTEMS × APPLICATIONS table of the class this block's headliner founded — the ophthalmic trio (this drug's membership: 'Atropine, homatropine, tropicamide' | 'Eye' | 'Produce mydriasis and cycloplegia'), the CNS movement pair ('park my Benz'), glycopyrrolate's route-split secretions row, the IBS antispasmodics, the inhaled respiratory pair ('Duration: tiotropium > ipratropium'), the SOFT four ('Make bladder SOFT'), and scopolamine. The two blocks are one page's two halves: PH20 is the class by LANE (which member aims at which organ); THIS block is the headliner by EFFECT (the six arrows, the coverage split, the toxidrome). Every member's mechanism is this block's lock; every member's adverse-effect direction is this block's tier.",
    },
    {
      title: "Anticholinesterase Poisoning — the Wet Pole This Drug Rescues (the atropine-as-antidote mirror)",
      topicId: "anticholinesterase-poisoning",
      note:
        "The completed PH19 (book 239, lower portion): the organophosphate story whose three tiers THIS block's NOTES cell contracts: 'Blocks muscarinic effects (DUMBBELSS) of anticholinesterases, but not the nicotinic effects'. The mirror clauses, all printed: the muscarinic tier's wet list ('DUMBBELSS.') with its antidote ('Reversed by atropine, a competitive inhibitor. Atropine can cross BBB to relieve CNS symptoms.') — THIS drug, named and mechanized on the poison page; the nicotinic tier ('Neuromuscular blockade') with pralidoxime ('Must be coadministered with atropine to prevent transient worsening of symptoms') — the tier this drug cannot touch; and the CNS tier. The exam's composite: the farmer (PH19) and the gardener (this block's Jimson weed line) are the two opposite gardening exposures — wet gets atropine + pralidoxime, dry gets physostigmine.",
    },
    {
      title: "Acetylcholine Receptors — the M/N Map the Coverage Split Runs On",
      topicId: "acetylcholine-receptors",
      note:
        "The completed receptor page (PH12, book 235): the nicotinic (ligand-gated cation channel) and muscarinic (GPCR) families. THIS block's coverage split is the map's two halves, sorted by drug: atropine holds every MUSCARINIC address shut (the six organ rows are six M-addresses — the pupillary sphincter and ciliary muscle, the bronchi and their glands, the SA node, the parietal cells, the gut's smooth muscle, the detrusor) and has no affinity for the NICOTINIC junction (the printed 'not the nicotinic effects' — pralidoxime's tier). The same map's agonist half (bethanechol, pilocarpine — one page back) drives the addresses this drug silences: the two pages are one receptor map read in both directions, and the coverage split is the sort the exam runs on it.",
    },
    {
      title: "Cholinomimetic Agents — the Agonist Mirror (and this drug's own rescue, in its last row)",
      topicId: "cholinomimetic-agents",
      note:
        "The completed PH18 (book 239, upper portion): the two-group agonist table. Its DIRECT group is this drug's exact opposite at the same addresses (bethanechol 'Activates bladder smooth muscle' — this block's Bladder arrow reversed; pilocarpine 'Contracts ciliary muscle of eye' — the Eye arrow reversed, the glaucoma direction). Its INDIRECT group (the -stigmines) supplies both of this spread's rescue clauses: physostigmine — 'Antidote for anticholinergic toxicity; physostigmine \"phyxes\" atropine overdose.' — is THIS block's toxidrome rescue (uncharged, it crosses into the CNS and clears the delirium); and pyridostigmine 'Used with glycopyrrolate or hyoscyamine to control pyridostigmine adverse effects' — the agonist page's own printed use of this CLASS (the class table's rows 3-4) to dry its wet excess, the therapeutic version of the antidote mirror this block formalizes.",
    },
  ],
  crossLinks: [
    {
      subject: "Toxicology (the anticholinergic toxidrome — the dry pole this block owns, and its carriers)",
      connection:
        "This block is the toxidrome's home page: the findings cell ('↑ body temperature (due to ↓ sweating); ↑ HR; dry mouth; dry, flushed skin; cycloplegia; constipation; disorientation'), the book's own seven similes ('Hot as a hare' family — attributed as the source's own), and the Jimson weed line ('Jimson weed (Datura) → gardener's pupil (mydriasis)') — the printed fingerprint every anticholinergic carrier produces: atropine itself, the antihistamines (diphenhydramine), the tricyclics (their anticholinergic load plus the sodium-channel cardiotoxicity that tempers physostigmine's use), the bladder antimuscarinics (the class table's SOFT four — PH20's print), and the plants (Datura/jimson weed, deadly nightshade — the tropane-alkaloid family, KYP-flagged). The differential sort runs skin-first: DRY = this pole (antidote physostigmine — printed one page back); DIAPHORETIC = the sympathomimetic pole (the next page's family); WET-everything = the organophosphate pole (one page back — rescued by this very drug). The three-population cautions line is the contraindication list in toxidrome form: angle-closure in the older adult, retention in the prostatic man, hyperthermia in the infant.",
    },
    {
      subject: "Emergency Medicine & Cardiology (the bradycardia indication — the Heart arrow in the ACLS algorithm)",
      connection:
        "The intro's first printed use — 'Used to treat bradycardia' — resolved by the grid's Heart row ('Heart' → '↑ heart rate'): atropine is the ACLS first-line for symptomatic sinus bradycardia/AV-node block, working by competitively removing the vagal (muscarinic) tone on the SA node and AV node (the mechanism word printed one page back: 'Reversed by atropine, a competitive inhibitor.' — the same clause running in reverse). The limits the exam tests: a transplanted/denervated heart has no vagal tone to remove (atropine fails — pace or dopamine); high-grade/second-degree type II and third-degree blocks respond poorly (the block is below the vagally-responsive tissue); and the overdose direction of the same arrow is the findings cell's '↑ HR' — the Heart arrow overshooting. The repeat-dosing picture is the toxidrome tier arriving by prescription — the printed adverse-effects cell is the drip's own risk profile.",
    },
    {
      subject: "Ophthalmology (the ophthalmic applications — the Eye row's two muscles, and the printed angle-closure caution)",
      connection:
        "The intro's second printed use — 'for ophthalmic applications' — resolved by the grid's Eye row ('Eye' → '↑ pupil dilation, cycloplegia'): the pupillary sphincter's muscarinic tone removed gives MYDRIASIS (the fundoscopy eye) and the ciliary muscle's tone removed gives CYCLOPLEGIA (the refraction eye — paralysis of accommodation). The class table above (PH20's print) carries the practical trio (atropine's own row: 'Atropine, homatropine, tropicamide' — the shorter-acting members are the exam-day choices); this block adds the printed caution: 'Can cause acute angle-closure glaucoma in older adults (due to mydriasis)' — the dilated iris root obstructing the anterior-chamber angle in the narrow-eyed older adult (the red, painful, hard eye with halos — an emergency; the mirror drops are the cholinomimetic pupil-constrictors of book 239). The same arrow in the toxidrome is 'Blind as a bat' — both directions of the unaccommodated, dilated eye.",
    },
    {
      subject: "Neurology & Psychiatry (the CNS effects — the BBB clause's two directions: therapeutic cover and the 'Mad as a hatter' leak)",
      connection:
        "Atropine crosses the blood-brain barrier — the printed clause runs in the therapeutic direction for the poison page ('Atropine can cross BBB to relieve CNS symptoms.', book 239: the organophosphate's seizures and lethargy) and in the adverse direction for this block ('disorientation' — the findings cell's CNS line; 'Mad as a hatter' — the book's own simile): the anticholinergic delirium is the classic toxic psychosis (agitation, hallucinations, picking at invisible objects — the mini-case's patient; mumbling, undressing, amnesia), highest-risk in the elderly (the antimuscarinic burden of bladder drugs and antihistamines — the Beers-criteria story, the same lock). The differential: the agitated deliriums sort by the peripheral set — dry skin + retention (this pole) vs diaphoresis + clonus (serotonin) vs diaphoresis + mydriasis (sympathomimetic). The treatment hierarchy: identify and stop the carrier, benzodiazepines for the agitation, physostigmine for the specific reversal (printed one page back) when the carrier is unclear or the delirium is severe.",
    },
  ],
};
