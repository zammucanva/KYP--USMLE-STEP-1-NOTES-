import type { KypUsMLENote } from "../types";

// Pharmacology — CHOLINOMIMETIC AGENTS (PH18 — the FORK PAGE: one intro
// toxicity warning + the two-group DRUG/ACTION/APPLICATIONS table).
// Source: pdf 261 / book 239, the UPPER portion of the page under the
// standing 'PHARMACOLOGY—AUTONOMIC DRUGS' banner. The section prints TWO
// elements: (1) ONE INTRO WARNING (prose, verbatim) — 'Watch for
// exacerbation of COPD, asthma, and peptic ulcers in susceptible
// patients.'; (2) ONE TWO-GROUP TABLE — DIRECT AGONISTS (Bethanechol:
// activates bladder smooth muscle, AChE-resistant, muscarinic-only, no
// nicotinic activity, 'Bethany, call me to activate your bladder' →
// urinary retention; Carbachol: 'carbon copy of acetylcholine (but
// resistant to AChE)' → constricts pupil, intraoperative miosis
// induction; Methacholine: stimulates muscarinic receptors in airway when
// inhaled → asthma challenge test; Pilocarpine: ciliary muscle
// [open-angle] + pupillary sphincter [closed-angle], AChE-resistant,
// crosses BBB, 'You cry, drool, and sweat on your pilow' → sweat/tears/
// saliva, both glaucomas, xerostomia [Sjögren]) and INDIRECT AGONISTS
// (ANTICHOLINESTERASES) (Donepezil/rivastigmine/galantamine: ↑ ACh →
// 1st line Alzheimer, 'Dona Riva forgot the gala'; Neostigmine: ↑ ACh,
// 'Neo = no blood-brain barrier penetration due to positive charge' →
// postoperative/neurogenic ileus + urinary retention, myasthenia
// gravis, NMJ-blockade reversal; Pyridostigmine: '↑ ACh; ↑ muscle
// strength. Does not penetrate CNS. Pyridostigmine gets rid of myasthenia
// gravis' → MG long-acting, with glycopyrrolate/hyoscyamine;
// Physostigmine: '↑ ACh. Phreely (freely) crosses blood-brain barrier as
// not charged → CNS' → anticholinergic-toxicity antidote, 'phyxes'
// atropine overdose).
// RASTER CENSUS: ZERO raster images on pdf 261 — the table is PURE TEXT,
// COPYRIGHTED, never reproduced as artwork; carried VERBATIM as this
// note's two table blocks (ORIGINAL_KYP_ADAPTATION) and conveyed as ONE
// original KYP fork map (CholinomimeticAgentsMap).
// TEXT-LAYER ARTIFACTS pinned: the group labels print BELOW their drug
// rows in the raw layer ('Direct agonists' after the Pilocarpine row;
// 'Indirect agonists (anticholinesterases)' immediately before the
// Donepezil row) while -layout prints 'Direct agonists' at the top of its
// group; Pilocarpine's raw layer prints 'bloodbrain' hyphen-less (the
// Neostigmine/Physostigmine rows print 'blood-brain' WITH the hyphen) —
// both raw spellings pinned.
// SAME-PAGE EXCLUSION: 'Anticholinesterase poisoning' (organophosphates,
// DUMBBELSS, atropine, pralidoxime) prints on the SAME pdf 261 BELOW
// this section — EXCLUDED (the separate PENDING topic PH19
// 'anticholinesterase-poisoning', confirmed in the chapter registry with
// sourcePages [261]).
// PAGE-EXTENT FINDING (checked per task): the section does NOT extend to
// pdf 262 — pdf 262 (book 240) opens the SEPARATE pending 'Muscarinic
// antagonists' section; the whole section (warning + both table groups)
// is on pdf 261 alone (sourcePages = [261] only).
// BOUNDARIES: pdf 260 (book 238) carries the COMPLETED PH17
// 'autonomic-drugs' (EXCLUDED — but PH17 pinned THIS section as its
// next-page boundary marker, the reciprocal anchor resolves here, and
// PH17's 'Cholinergic stimulant' anchor list 'AChE inhibitors eg,
// Donepezil' resolves into this page's indirect group); pdf 262 opens
// the PENDING 'Muscarinic antagonists' (EXCLUDED). PH12
// 'acetylcholine-receptors' (book 235) carries the M/N receptor families
// the direct agonists bind; PH13 'micturition-control' (book 235)
// carries the detrusor/sphincter wiring bethanechol rides — all
// cross-linked.
// KYP EXTENSIONS (flagged wherever they appear): the FORK reading
// (DIRECT drugs BIND the muscarinic receptor themselves; INDIRECT drugs
// BLOCK the breaker [AChE] and let ENDOGENOUS ACh accumulate); the
// CHARGE GRID (quaternary/charged = peripheral-only [neostigmine,
// pyridostigmine — printed]; uncharged = crosses BBB [physostigmine —
// printed; pilocarpine — printed]; the grid's completion for
// bethanechol/carbachol/methacholine is KYP — not printed); the
// END-ORGAN RECEPTOR MAP (bladder M3, pupil, airway, sweat/salivary
// glands, NMJ nicotinic, cortex — addresses cross-referenced from books
// 234–238); and the NOT-PRINTED drug layer (edrophonium and
// echothiophate are ABSENT from the printed page — the task brief's
// 'likely' names do not print; flagged, never cited as printed).

export const cholinomimeticAgents: KypUsMLENote = {
  id: "cholinomimetic-agents",
  title: "Cholinomimetic Agents",
  subtitle:
    "One warning and one fork: 'Watch for exacerbation of COPD, asthma, and peptic ulcers in susceptible patients.' — then eight drugs split at the synapse the facing page drew. DIRECT AGONISTS (bethanechol, carbachol, methacholine, pilocarpine) BIND the muscarinic receptor themselves, each engineered AChE-resistant so its signal survives the cleft's breaker, each aimed at one end-organ address — the bladder (bethanechol, 'Bethany, call me to activate your bladder'), the pupil (carbachol, the 'carbon copy' of ACh), the airway (methacholine, the asthma challenge), the eye and the exocrine glands (pilocarpine — 'You cry, drool, and sweat on your pilow'). INDIRECT AGONISTS (anticholinesterases: donepezil/rivastigmine/galantamine, neostigmine, pyridostigmine, physostigmine) BLOCK the breaker and let ENDOGENOUS ACh accumulate — which is why only the indirect side reaches the neuromuscular junction (nicotinic) and why its reach is decided by charge: 'Neo = no blood-brain barrier penetration due to positive charge', pyridostigmine 'Does not penetrate CNS', physostigmine 'Phreely (freely) crosses blood-brain barrier as not charged → CNS'.",
  subject: "Pharmacology",
  system:
    "Section II · Pharmacology — Autonomic Drugs (the banner this page shares with drug-effect-modifications, autonomic-receptors, acetylcholine-receptors, pain-transmission, micturition-control, tissue-distribution-of-adrenergic-receptors, g-protein-linked-second-messengers, and autonomic-drugs before it — the Cholinomimetic agents section opens book 239 directly under the synapse map of book 238: PH17 drew WHERE ACh is made, released, listened to, and broken; THIS page supplies the drugs that push that synapse — the direct agonists at the plate, the indirect agonists at the breaker; PH12 drew the M/N receptor families both classes ride, and PH13 drew the detrusor/sphincter wiring bethanechol activates)",
  pilotCategory:
    "The fork page's complete architecture — the intro toxicity warning (the cholinomimetic class caution) plus the two-group DRUG/ACTION/APPLICATIONS table in full (4 direct agonists + 4 indirect agonists/anticholinesterases, every action clause, application clause, and book mnemonic carried verbatim), and the KYP layers that compress them: the FORK reading (direct binds the receptor / indirect blocks the breaker), the CHARGE GRID (the three printed charge rules completed into one BBB grid), the END-ORGAN RECEPTOR MAP (each printed use connected to its receptor address from the facing autonomic pages), and the NOT-PRINTED drug layer (edrophonium and echothiophate flagged as absent).",
  difficulty: 2,
  readTime: 7,
  sourceRef:
    "First Aid 2026, Part 1 pp. 239 (Pharmacology — Autonomic Drugs: the Cholinomimetic agents section occupies the upper portion of the page and prints two elements, both carried here — the intro warning, verbatim: 'Watch for exacerbation of COPD, asthma, and peptic ulcers in susceptible patients.'; and the two-group DRUG/ACTION/APPLICATIONS table — DIRECT AGONISTS: Bethanechol 'Activates bladder smooth muscle; resistant to AChE. Acts on muscarinic receptors; no nicotinic activity. \"Bethany, call me to activate your bladder.\"' → 'Urinary retention.'; Carbachol 'Carbon copy of acetylcholine (but resistant to AChE).' → 'Constricts pupil. Used for intraoperative miosis induction.'; Methacholine 'Stimulates muscarinic receptors in airway when inhaled.' → 'Challenge test for diagnosis of asthma.'; Pilocarpine 'Contracts ciliary muscle of eye (open-angle glaucoma), pupillary sphincter (closed-angle glaucoma); resistant to AChE, can cross blood-brain barrier. \"You cry, drool, and sweat on your pilow.\"' → 'Potent stimulator of sweat, tears, and saliva / Open-angle and closed-angle glaucoma, xerostomia (Sjögren syndrome).' — INDIRECT AGONISTS (ANTICHOLINESTERASES): Donepezil/rivastigmine/galantamine '↑ ACh.' → '1st line for Alzheimer disease (Dona Riva forgot the gala).'; Neostigmine '↑ ACh. Neo = no blood-brain barrier penetration due to positive charge.' → 'Postoperative and neurogenic ileus and urinary retention, myasthenia gravis, reversal of neuromuscular junction blockade (postoperative).'; Pyridostigmine '↑ ACh; ↑ muscle strength. Does not penetrate CNS. Pyridostigmine gets rid of myasthenia gravis.' → 'Myasthenia gravis (long acting). Used with glycopyrrolate or hyoscyamine to control pyridostigmine adverse effects.'; Physostigmine '↑ ACh. Phreely (freely) crosses blood-brain barrier as not charged → CNS.' → 'Antidote for anticholinergic toxicity; physostigmine \"phyxes\" atropine overdose.' — the table is pure text with zero rasters, never reproduced as artwork, carried verbatim as this note's two table blocks; text-layer artifacts pinned: the group labels print below their rows in the raw layer, and Pilocarpine's raw layer prints 'bloodbrain' hyphen-less while the Neostigmine/Physostigmine rows print 'blood-brain' with the hyphen; the KYP layers are the FORK reading, the CHARGE GRID (the grid's completion for bethanechol/carbachol/methacholine is not printed), the END-ORGAN RECEPTOR MAP, and the NOT-PRINTED drug layer (edrophonium and echothiophate are ABSENT from this page); the 'Anticholinesterase poisoning' section prints on the SAME book-239 page below this section — EXCLUDED, the separate pending anticholinesterase-poisoning topic; pdf 260 carries the completed autonomic-drugs topic (EXCLUDED — its 'Cholinergic stimulant' anchor 'AChE inhibitors eg, Donepezil' resolves here) and pdf 262 opens the separate pending Muscarinic antagonists section — this section ends on pdf 261)",
  tags: [
    "cholinomimetic agents",
    "cholinergic agonists",
    "direct agonists",
    "indirect agonists",
    "anticholinesterases",
    "acetylcholinesterase inhibitors",
    "AChE inhibitors",
    "bethanechol",
    "carbachol",
    "methacholine",
    "pilocarpine",
    "donepezil",
    "rivastigmine",
    "galantamine",
    "neostigmine",
    "pyridostigmine",
    "physostigmine",
    "muscarinic agonists",
    "muscarinic receptors",
    "M3 receptors",
    "nicotinic receptors",
    "urinary retention",
    "glaucoma",
    "miosis",
    "asthma challenge test",
    "bronchial hyperreactivity",
    "xerostomia",
    "Sjögren syndrome",
    "Alzheimer disease",
    "myasthenia gravis",
    "neuromuscular junction blockade reversal",
    "postoperative ileus",
    "anticholinergic toxicity antidote",
    "blood-brain barrier",
    "quaternary amine",
    "pharmacology",
  ],
  core: {
    what:
      "ONE WARNING, ONE FORK, EIGHT DRUGS. The page opens with its only prose line — the class caution: 'Watch for exacerbation of COPD, asthma, and peptic ulcers in susceptible patients.' — and then the table splits every cholinomimetic at the synapse the facing page (book 238) drew: THE DIRECT FORK ('Direct agonists') — the drug itself binds the muscarinic receptor. Bethanechol: 'Activates bladder smooth muscle; resistant to AChE. Acts on muscarinic receptors; no nicotinic activity.' → 'Urinary retention.' Carbachol: 'Carbon copy of acetylcholine (but resistant to AChE).' → 'Constricts pupil. Used for intraoperative miosis induction.' Methacholine: 'Stimulates muscarinic receptors in airway when inhaled.' → 'Challenge test for diagnosis of asthma.' Pilocarpine: 'Contracts ciliary muscle of eye (open-angle glaucoma), pupillary sphincter (closed-angle glaucoma); resistant to AChE, can cross blood-brain barrier.' → 'Potent stimulator of sweat, tears, and saliva / Open-angle and closed-angle glaucoma, xerostomia (Sjögren syndrome).' THE INDIRECT FORK ('Indirect agonists (anticholinesterases)') — the drug blocks AChE and the patient's OWN acetylcholine accumulates: '↑ ACh.' Donepezil/rivastigmine/galantamine → '1st line for Alzheimer disease (Dona Riva forgot the gala).'; Neostigmine — 'Neo = no blood-brain barrier penetration due to positive charge.' → 'Postoperative and neurogenic ileus and urinary retention, myasthenia gravis, reversal of neuromuscular junction blockade (postoperative).'; Pyridostigmine — '↑ ACh; ↑ muscle strength. Does not penetrate CNS. Pyridostigmine gets rid of myasthenia gravis.' → 'Myasthenia gravis (long acting). Used with glycopyrrolate or hyoscyamine to control pyridostigmine adverse effects.'; Physostigmine — '↑ ACh. Phreely (freely) crosses blood-brain barrier as not charged → CNS.' → 'Antidote for anticholinergic toxicity; physostigmine \"phyxes\" atropine overdose.'",
    why:
      "WHY THE FORK IS THE PAGE'S REAL CONTENT. The two group labels are not alphabet buckets — they are two different answers to 'where does the signal come from?' A DIRECT agonist brings its own signal: it binds the receptor whether or not the neuron is firing, which is why every direct drug on the page is engineered AChE-RESISTANT (the cleft's breaker would otherwise destroy an ACh copy in milliseconds — carbachol is literally the 'Carbon copy of acetylcholine (but resistant to AChE)') and why the direct drugs are MUSCARINIC-SELECTIVE (bethanechol: 'no nicotinic activity') — nicotinic effects would mean ganglia and the NMJ, exactly what a bladder or glaucoma drug must avoid. An INDIRECT agonist amplifies the patient's own signal: block AChE and every released quantum of ACh lingers — at muscarinic AND nicotinic sites, which is why ONLY the indirect side treats 'myasthenia gravis' and 'reversal of neuromuscular junction blockade' (the NMJ is nicotinic, and no direct drug on this page touches it) and why it needs an intact, firing synapse. WHY CHARGE DECIDES THE INDIRECT SIDE'S REACH: the page prints three charge rules — 'Neo = no blood-brain barrier penetration due to positive charge' (neostigmine), 'Does not penetrate CNS' (pyridostigmine), and 'Phreely (freely) crosses blood-brain barrier as not charged → CNS' (physostigmine) — the charged quaternary amines stay peripheral (gut, bladder, NMJ) while the uncharged tertiary amine enters the brain (the anticholinergic-toxicity antidote needs CNS entry to 'phyx' atropine's central as well as peripheral effects). WHY THE WARNING LEADS THE PAGE: every drug on it pushes the same synapse, so the class toxicity is one sentence — bronchospasm (COPD, asthma), gastric acid/peptic ulcer, and (the exocrine arm) secretion cramping — and the one deliberate exception proves the rule: methacholine PROVOKES bronchospasm on purpose, as the 'Challenge test for diagnosis of asthma.'",
    keyIdea:
      "Read every cholinomimetic through the FORK (KYP compression of the page's own two group labels). FORK 1 — DIRECT BINDS: the drug is the ligand; it needs NO endogenous ACh (works on a denervated or quiet synapse), survives the breaker (AChE-resistant: bethanechol, carbachol, pilocarpine all print it), and aims at ONE muscarinic address — BLADDER (bethanechol → urinary retention), PUPIL (carbachol → intraoperative miosis), AIRWAY (methacholine → the asthma challenge; inhaled route), EYE + GLANDS (pilocarpine → both glaucoma angles, xerostomia; 'You cry, drool, and sweat on your pilow'). FORK 2 — INDIRECT BLOCKS THE BREAKER: the drug inhibits AChE → the patient's OWN ACh accumulates ('↑ ACh.') at every cholinergic synapse, muscarinic AND nicotinic — which is why this side alone covers the NMJ (myasthenia gravis, NMJ-blockade reversal) and the cortex (Alzheimer). THE REACH IS CHARGE (the page's own three rules, one grid): CHARGED = peripheral-only — neostigmine ('Neo = no blood-brain barrier penetration due to positive charge') and pyridostigmine ('Does not penetrate CNS'); UNCHARGED = crosses the BBB — physostigmine ('Phreely (freely) crosses blood-brain barrier as not charged → CNS'), the anticholinergic-toxicity antidote. One line each: bethanechol = the bladder; carbachol = the carbon copy; methacholine = the challenge; pilocarpine = the pilow (and the only printed direct drug that crosses the BBB); the donepezil trio = the dementia line ('Dona Riva forgot the gala'); neostigmine = the peripheral workhorse; pyridostigmine = the long-acting MG drug ('gets rid of myasthenia gravis'); physostigmine = the antidote that 'phyxes' atropine overdose.",
  },
  mechanisms: [
    {
      id: "direct-agonist-muscarinic-fork",
      title:
        "The direct fork: the drug IS the ligand — bind the muscarinic receptor yourself, survive the breaker (AChE-resistant), aim at one end-organ (bladder / pupil / airway / eye + glands) — bethanechol, carbachol, methacholine, pilocarpine",
      context:
        "The table's first group, 'Direct agonists' (book 239), all four rows verbatim in the note's first table block. The design logic that connects the four ACTION cells is KYP's compression; every clause is the page's own print: 'resistant to AChE' prints for bethanechol, carbachol, and pilocarpine; 'Acts on muscarinic receptors; no nicotinic activity' prints for bethanechol; 'Carbon copy of acetylcholine' prints for carbachol; the end-organ routing is the four APPLICATIONS cells. The synapse being drugged is the facing page's own (book 238, the completed autonomic-drugs topic): ACh → Cholinoreceptors M1 M2 M3, AChE → Choline + Acetate.",
      flow: {
        nodes: [
          {
            id: "input",
            label: "The target: the cholinergic synapse of book 238 — ACh released into the cleft → Cholinoreceptors M1 M2 M3 → AChE breaks it into Choline + Acetate",
            sublabel:
              "Input — the synapse the facing page drew (the completed autonomic-drugs topic): the cleft's breaker (AChE) destroys each ACh quantum within milliseconds, and the plate it reaches is muscarinic (M1 M2 M3) at the organs and nicotinic at the ganglia and the NMJ. A drug that wants to push this synapse has two doors: the receptor or the breaker. The direct agonists take the receptor.",
            variant: "input",
          },
          {
            id: "bind",
            label: "STEP 1 — BIND: the direct agonist is itself the ligand at the muscarinic receptor (no dependence on neuronal release)",
            sublabel:
              "The 'Direct agonists' label's own meaning: the drug binds the receptor whether or not the neuron fires — exogenous signal, not amplified endogenous signal. Bethanechol prints the selectivity rule for the group: 'Acts on muscarinic receptors; no nicotinic activity.' — the design choice that keeps direct drugs OFF the ganglia and OFF the NMJ (the adverse-effect answer for why bethanechol activates the bladder without muscle twitch).",
            variant: "process",
          },
          {
            id: "resist",
            label: "STEP 2 — SURVIVE THE BREAKER: AChE resistance — 'resistant to AChE' (bethanechol, carbachol, pilocarpine print it)",
            sublabel:
              "The second design constraint: a true ACh copy would be destroyed in the cleft before it reached anything. The page prints the fix on three of the four rows: bethanechol 'resistant to AChE', carbachol 'Carbon copy of acetylcholine (but resistant to AChE)', pilocarpine 'resistant to AChE'. Carbachol's row is the etymology lesson: the copy of ACh whose carbamyl group the breaker cannot hydrolyze.",
            variant: "process",
          },
          {
            id: "address",
            label: "STEP 3 — AIM: one end-organ address per drug — BLADDER (bethanechol) · PUPIL (carbachol) · AIRWAY (methacholine) · EYE + GLANDS (pilocarpine)",
            sublabel:
              "The four APPLICATIONS cells as four addresses: bethanechol 'Activates bladder smooth muscle' → 'Urinary retention.'; carbachol 'Constricts pupil. Used for intraoperative miosis induction.'; methacholine 'Stimulates muscarinic receptors in airway when inhaled.' → 'Challenge test for diagnosis of asthma.'; pilocarpine 'Contracts ciliary muscle of eye (open-angle glaucoma), pupillary sphincter (closed-angle glaucoma)' + 'Potent stimulator of sweat, tears, and saliva' → 'Open-angle and closed-angle glaucoma, xerostomia (Sjögren syndrome).' — with the book's own mnemonics: 'Bethany, call me to activate your bladder.' and 'You cry, drool, and sweat on your pilow.'",
            variant: "process",
          },
          {
            id: "output",
            label: "RESULT — selective muscarinic activation of the target organ, with the class warning riding every row",
            sublabel:
              "Output — the intended organ responds (detrusor contracts, pupil constricts, airway smooth muscle tightens, glands flow) and the class toxicity is the same selectivity pushed too far — the page's own caution: 'Watch for exacerbation of COPD, asthma, and peptic ulcers in susceptible patients.' (bronchial smooth muscle, gastric acid secretion, and GI secretions/cramping are muscarinic addresses too — the warning is the address list run backwards). Pilocarpine adds the one printed CNS caveat on the direct side: 'can cross blood-brain barrier.'",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "bind", label: "the receptor door" },
          { from: "bind", to: "resist", label: "must survive the cleft's breaker" },
          { from: "resist", to: "address", label: "muscarinic-selective → one organ per drug" },
          { from: "address", to: "output", label: "target-organ response + the class warning" },
        ],
      },
    },
    {
      id: "indirect-ache-inhibitor-charge-fork",
      title:
        "The indirect fork: block the breaker (AChE) → the patient's OWN ACh accumulates ('↑ ACh.') at muscarinic AND nicotinic sites — and charge decides the reach: 'Neo = no blood-brain barrier penetration', pyridostigmine 'Does not penetrate CNS', physostigmine 'Phreely (freely) crosses'",
      context:
        "The table's second group, 'Indirect agonists (anticholinesterases)' (book 239), all four rows verbatim in the note's second table block. The charge grid is the page's own three rules ('↑ ACh. Neo = no blood-brain barrier penetration due to positive charge.'; '↑ ACh; ↑ muscle strength. Does not penetrate CNS.'; '↑ ACh. Phreely (freely) crosses blood-brain barrier as not charged → CNS.') completed into one grid (KYP — the quaternary/tertiary chemistry words are KYP's; the charge facts and outcomes are printed). The reversibility distinction (reversible vs irreversible/organophosphate) is NOT printed here — it belongs to the EXCLUDED same-page 'Anticholinesterase poisoning' section (the pending anticholinesterase-poisoning topic).",
      flow: {
        nodes: [
          {
            id: "input",
            label: "The target: the breaker of book 238's synapse — AChE, which splits every released ACh quantum into Choline + Acetate",
            sublabel:
              "Input — the same cleft, the other door. The facing page drew AChE as the cholinergic lane's clearance step ('AChE' → 'Choline' + 'Acetate') and pinned this class there ('Cholinergic stimulant' = 'AChE inhibitors eg, Donepezil'). Block the breaker and nothing new is made — every quantum the neuron already released simply LINGERS.",
            variant: "input",
          },
          {
            id: "block",
            label: "STEP 1 — BLOCK THE BREAKER: inhibit AChE → '↑ ACh.' — the patient's own acetylcholine accumulates in the cleft",
            sublabel:
              "The mechanism the whole group shares, printed as its own two-character ACTION cell: '↑ ACh.' Amplification, not substitution: the indirect drug needs an intact, firing synapse (the empty-cleft corollary: an AChE inhibitor cannot amplify ACh that was never released — botulinum-poisoned or denervated synapses get nothing from this class).",
            variant: "process",
          },
          {
            id: "reach",
            label: "STEP 2 — THE REACH IS CHARGE (the page's three rules, one grid): charged → peripheral only; uncharged → crosses the BBB",
            sublabel:
              "The printed charge rules: 'Neo = no blood-brain barrier penetration due to positive charge.' (neostigmine — the quaternary amine); 'Does not penetrate CNS.' (pyridostigmine — same charge class, KYP grid completion); 'Phreely (freely) crosses blood-brain barrier as not charged → CNS.' (physostigmine — the uncharged tertiary amine). The grid's chemistry words (quaternary/tertiary) are KYP's; the three rules and their outcomes are the book's own print.",
            variant: "process",
          },
          {
            id: "uses",
            label: "STEP 3 — THE USE SETS fall out of reach × receptor: cortex (Alzheimer) · periphery (ileus, retention, NMJ) · NMJ long-acting (MG) · CNS antidote",
            sublabel:
              "Donepezil/rivastigmine/galantamine: '1st line for Alzheimer disease (Dona Riva forgot the gala).' — the cortical use. Neostigmine: 'Postoperative and neurogenic ileus and urinary retention, myasthenia gravis, reversal of neuromuscular junction blockade (postoperative).' — the peripheral workhorse (gut, bladder, NMJ: muscarinic AND nicotinic benefit). Pyridostigmine: 'Myasthenia gravis (long acting). Used with glycopyrrolate or hyoscyamine to control pyridostigmine adverse effects.' — the NMJ mainstay plus the printed antimuscarinic co-therapy. Physostigmine: 'Antidote for anticholinergic toxicity; physostigmine \"phyxes\" atropine overdose.' — the use that REQUIRES CNS entry.",
            variant: "process",
          },
          {
            id: "output",
            label: "RESULT — '↑ ACh; ↑ muscle strength.' (the printed NMJ outcome) with muscarinic excess as the price — the printed co-therapy and the same-page poisoning section",
            sublabel:
              "Output — the strengthened NMJ signal pyridostigmine prints ('↑ ACh; ↑ muscle strength. ... Pyridostigmine gets rid of myasthenia gravis.'), bought at the price of muscarinic excess (the reason the same row prints 'Used with glycopyrrolate or hyoscyamine to control pyridostigmine adverse effects.') — and at the extreme, the cholinergic crisis of organophosphate poisoning, which prints on this same book-239 page as the SEPARATE 'Anticholinesterase poisoning' section (EXCLUDED here — the pending anticholinesterase-poisoning topic; its atropine/pralidoxime arm is the next page of this story, not this one).",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "block", label: "the breaker door" },
          { from: "block", to: "reach", label: "↑ ACh everywhere the drug can reach" },
          { from: "reach", to: "uses", label: "charge decides which synapses" },
          { from: "uses", to: "output", label: "nicotinic gain + muscarinic price" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "cholinomimetic-agents-map",
      title: "The cholinomimetic fork map (an original KYP visual)",
      caption:
        "An original KYP fork map conveying the page's two-group table (book 239): THE FORK HEADER (the synapse of book 238 — ACh → Cholinoreceptors M1 M2 M3, AChE the breaker — with the two doors: DIRECT agonists BIND the plate, INDIRECT agonists BLOCK the breaker); THE FOUR DIRECT CARDS (Bethanechol — AChE-resistant, muscarinic-only, 'no nicotinic activity', 'Bethany, call me to activate your bladder' → urinary retention; Carbachol — 'carbon copy of acetylcholine (but resistant to AChE)' → intraoperative miosis; Methacholine — airway muscarinic stimulation when inhaled → asthma challenge test; Pilocarpine — ciliary muscle + pupillary sphincter, crosses BBB, 'You cry, drool, and sweat on your pilow' → both glaucomas + xerostomia [Sjögren]); THE FOUR INDIRECT CARDS (the donepezil/rivastigmine/galantamine trio — '↑ ACh' → 1st line Alzheimer, 'Dona Riva forgot the gala'; Neostigmine — '↑ ACh', 'Neo = no blood-brain barrier penetration due to positive charge' → ileus, retention, MG, NMJ-blockade reversal; Pyridostigmine — '↑ ACh; ↑ muscle strength', 'Does not penetrate CNS', 'gets rid of myasthenia gravis' → MG long-acting with glycopyrrolate/hyoscyamine; Physostigmine — 'Phreely (freely) crosses blood-brain barrier as not charged → CNS' → anticholinergic-toxicity antidote, 'phyxes' atropine overdose); THE CHARGE GRID (the three printed charge rules completed into one BBB grid, unprinted cells flagged); THE TOXICITY STRIP (the intro warning, verbatim); and the reading-rule + exclusions footer.",
      notice:
        "Census (pdfimages + text layer): the page's table is PURE TEXT with ZERO raster images — COPYRIGHTED, never reproduced as artwork; this visual conveys the eight rows' drug names, action clauses, applications, and mnemonics as an ORIGINAL_KYP_ADAPTATION (every cell's content is the book's own; the fork layout, the charge grid, the end-organ chips, and the reading rule are KYP's). KYP extensions flagged on the map: the FORK reading (direct binds / indirect blocks — the compression of the page's own two group labels), the CHARGE GRID (three printed cells + pilocarpine's crossing; the bethanechol/carbachol/methacholine cells are NOT printed — flagged), the END-ORGAN RECEPTOR MAP (addresses cross-referenced from books 234–238, the completed autonomic block), and the NOT-PRINTED drug layer (edrophonium and echothiophate are ABSENT from this page — flagged). EXCLUDED: the 'Anticholinesterase poisoning' section on the SAME book-239 page below the table (the separate pending anticholinesterase-poisoning topic), the completed autonomic-drugs section on pdf 260 behind this page (its 'Cholinergic stimulant' anchor resolves here), and the pending Muscarinic antagonists section on pdf 262 ahead (this section does NOT extend to 262 — verified).",
    },
    {
      kind: "table",
      title: "Book 239 — the DIRECT AGONISTS rows, verbatim",
      intro:
        "The table's first group, carried whole (both printed cells of each row verbatim, including the book's own mnemonics). The group label prints in the raw layer BELOW the Pilocarpine row ('Direct agonists') — the -layout view prints it at the top of the group; the raw physical order is pinned. The section's one prose line governs all four rows: 'Watch for exacerbation of COPD, asthma, and peptic ulcers in susceptible patients.' — the class caution, verbatim.",
      columns: [
        "DRUG (book 239)",
        "ACTION (book 239, verbatim)",
        "APPLICATIONS (book 239, verbatim)",
      ],
      rows: [
        [
          "Bethanechol",
          "Activates bladder smooth muscle; resistant to AChE. Acts on muscarinic receptors; no nicotinic activity. “Bethany, call me to activate your bladder.”",
          "Urinary retention.",
        ],
        [
          "Carbachol",
          "Carbon copy of acetylcholine (but resistant to AChE).",
          "Constricts pupil. Used for intraoperative miosis induction.",
        ],
        [
          "Methacholine",
          "Stimulates muscarinic receptors in airway when inhaled.",
          "Challenge test for diagnosis of asthma.",
        ],
        [
          "Pilocarpine",
          "Contracts ciliary muscle of eye (open-angle glaucoma), pupillary sphincter (closed-angle glaucoma); resistant to AChE, can cross blood-brain barrier. “You cry, drool, and sweat on your ‘pilow.’ ”",
          "Potent stimulator of sweat, tears, and saliva · Open-angle and closed-angle glaucoma, xerostomia (Sjögren syndrome).",
        ],
      ],
      caption:
        "Four direct agonists, four addresses: the bladder (bethanechol — muscarinic-only, so no ganglionic or NMJ effects), the pupil (carbachol — the ACh 'carbon copy' that survives the breaker), the airway (methacholine — inhaled, deliberately provoking the bronchospasm the warning cautions), and the eye + exocrine glands (pilocarpine — both glaucoma angles plus the sweat/tears/saliva flow of the 'pilow'). Three of the four print 'resistant to AChE' — the design feature that lets a direct ligand survive the cleft's breaker; pilocarpine alone prints the BBB crossing on the direct side. Raw-layer spelling pinned: Pilocarpine's cell prints 'bloodbrain' hyphen-less in the raw layer (the -layout view prints 'blood-brain' split across lines).",
    },
    {
      kind: "table",
      title: "Book 239 — the INDIRECT AGONISTS (ANTICHOLINESTERASES) rows, verbatim",
      intro:
        "The table's second group, carried whole (the group label 'Indirect agonists (anticholinesterases)' prints in the raw layer immediately before the Donepezil row). Every ACTION and APPLICATIONS cell verbatim, including the three printed charge rules — the BBB/charge layer the whole indirect side turns on.",
      columns: [
        "DRUG (book 239)",
        "ACTION (book 239, verbatim)",
        "APPLICATIONS (book 239, verbatim)",
      ],
      rows: [
        [
          "Donepezil, rivastigmine, galantamine",
          "↑ ACh.",
          "1st line for Alzheimer disease (Dona Riva forgot the gala).",
        ],
        [
          "Neostigmine",
          "↑ ACh. Neo = no blood-brain barrier penetration due to positive charge.",
          "Postoperative and neurogenic ileus and urinary retention, myasthenia gravis, reversal of neuromuscular junction blockade (postoperative).",
        ],
        [
          "Pyridostigmine",
          "↑ ACh; ↑ muscle strength. Does not penetrate CNS. Pyridostigmine gets rid of myasthenia gravis.",
          "Myasthenia gravis (long acting). Used with glycopyrrolate or hyoscyamine to control pyridostigmine adverse effects.",
        ],
        [
          "Physostigmine",
          "↑ ACh. Phreely (freely) crosses blood-brain barrier as not charged → CNS.",
          "Antidote for anticholinergic toxicity; physostigmine “phyxes” atropine overdose.",
        ],
      ],
      caption:
        "One mechanism ('↑ ACh.'), four reaches: the cortex (the donepezil trio — Alzheimer's 1st line, 'Dona Riva forgot the gala'), the full periphery (neostigmine — ileus, retention, myasthenia, NMJ-blockade reversal; 'Neo = no blood-brain barrier penetration due to positive charge'), the NMJ held long-term (pyridostigmine — 'long acting', with glycopyrrolate or hyoscyamine printed against its own muscarinic excess), and the CNS itself (physostigmine — 'not charged → CNS', the antidote that 'phyxes' atropine overdose). Note the grid's edges: the trio's charge is NOT printed (KYP completion — donepezil crosses the BBB, which its cortical use requires); the reversible/irreversible split does NOT print here (it belongs to the EXCLUDED same-page 'Anticholinesterase poisoning' section, the pending anticholinesterase-poisoning topic).",
    },
  ],
  usmle: {
    patterns: [
      {
        stem:
          "A 71-year-old man cannot void on the first evening after hip replacement surgery; bedside bladder scan shows 600 mL of retained urine, and a drug is ordered to restore voiding. A pharmacology question asks for the drug's mechanism and why it can activate the bladder without producing ganglionic or neuromuscular effects.",
        discriminator:
          "The printed ACTION cell with its selectivity clause: 'Activates bladder smooth muscle; resistant to AChE. Acts on muscarinic receptors; no nicotinic activity.' — the 'no nicotinic activity' clause is the fingerprint (ganglia and the NMJ are nicotinic)",
        concept:
          "Bethanechol — the direct, muscarinic-selective, AChE-resistant bladder agonist for urinary retention",
        answer:
          "Bethanechol is a DIRECT agonist: the drug itself binds the muscarinic receptor of the detrusor ('Activates bladder smooth muscle'), engineered 'resistant to AChE' so it survives the cleft's breaker, and — the clause the question turns on — it has 'no nicotinic activity', so it cannot touch the ganglia or the NMJ. The book's own mnemonic: 'Bethany, call me to activate your bladder.' The printed application is exactly this stem: 'Urinary retention.' The distractor lane: neostigmine (this same page) ALSO treats urinary retention, but as an INDIRECT agent ('↑ ACh.' at every cholinergic synapse — muscarinic AND nicotinic), which is why its use set includes the NMJ (myasthenia, blockade reversal) and why its adverse effects need the printed glycopyrrolate/hyoscyamine co-therapy. One indication, two pages of the fork (KYP frame on the page's own rows).",
      },
      {
        stem:
          "A 26-year-old woman with episodic cough and dyspnea undergoes inhalational testing; a nebulized muscarinic agonist provokes measurable bronchospasm where exercise did not, confirming the diagnosis. A question asks which drug was nebulized and why an agent that can worsen asthma is used this way.",
        discriminator:
          "The printed ACTION cell names the organ and the route together: 'Stimulates muscarinic receptors in airway when inhaled.' — and the printed application is the diagnostic provocation itself: 'Challenge test for diagnosis of asthma.'",
        concept:
          "Methacholine — the inhaled muscarinic agonist used as the bronchial provocation (challenge) test for asthma diagnosis",
        answer:
          "Methacholine, a direct muscarinic agonist, is inhaled deliberately to provoke bronchoconstriction in airway smooth muscle: a hyperreactive airway (asthma) narrows at a dose a normal airway tolerates — the 'Challenge test for diagnosis of asthma.' The apparent paradox with the page's own warning ('Watch for exacerbation of COPD, asthma, and peptic ulcers in susceptible patients.') is the point: the warning and the test are the same pharmacology read in opposite directions — muscarinic stimulation tightens bronchial smooth muscle, which is a toxicity to avoid in susceptible patients and a signal to provoke, under monitoring, when the diagnosis needs it (KYP frame on the page's own two lines).",
      },
      {
        stem:
          "A 19-year-old man is brought to the emergency department after ingesting seeds from a garden plant he picked; he is flushed, dry, delirious, and tachycardic with widely dilated pupils that do not constrict with light. A question asks for the antidote and the property that lets it work in the central nervous system.",
        discriminator:
          "The printed charge rule attached to the antidote use: physostigmine 'Phreely (freely) crosses blood-brain barrier as not charged → CNS.' — the anticholinergic toxidrome includes CNS delirium, so the antidote must reach it; the charged AChE inhibitors cannot",
        concept:
          "Physostigmine — the uncharged AChE inhibitor that crosses the BBB and 'phyxes' atropine (anticholinergic) overdose",
        answer:
          "Physostigmine: '↑ ACh.' by inhibiting AChE, and — the property the stem tests — 'Phreely (freely) crosses blood-brain barrier as not charged → CNS.', so the accumulated acetylcholine can out-compete the antimuscarinic agent both peripherally and centrally. The printed application is verbatim: 'Antidote for anticholinergic toxicity; physostigmine “phyxes” atropine overdose.' (this stem's plant is Datura/Jimson weed — the gardener's pupil story the NEXT page, Muscarinic antagonists, prints in full). The distractor lane: neostigmine ('Neo = no blood-brain barrier penetration due to positive charge') and pyridostigmine ('Does not penetrate CNS') would raise ACh peripherally but could not touch the central delirium — the charge rule is the discriminator the exam repeats.",
      },
    ],
    traps: [
      {
        a: "Direct and indirect cholinomimetics both 'raise cholinergic tone', so they are interchangeable for any cholinergic indication — and an AChE inhibitor should work even when the synapse is silent",
        b: "Merging the two forks because they end in the same direction (more muscarinic signal), and forgetting that the indirect fork AMPLIFIES an existing signal rather than supplying one",
        whyConfused:
          "The page's two group labels read like alphabet buckets, and both classes' effects overlap at the end organs (gut, bladder, glands); the mechanism difference only shows up at the edge cases the table doesn't state explicitly",
        keyDifference:
          "The fork (KYP compression of the page's own labels): DIRECT agonists BIND the receptor themselves — exogenous ligand, works on a denervated, botulinum-poisoned, or quiet synapse, aimed at ONE muscarinic address with 'no nicotinic activity' (bethanechol's printed clause); INDIRECT agonists BLOCK AChE ('↑ ACh.') — amplification of the patient's OWN transmitter, which requires intact release and intact vesicles, and which spills onto NICOTINIC receptors too (the NMJ uses — myasthenia gravis, blockade reversal — print ONLY on the indirect side). The corollary the exam loves: an AChE inhibitor cannot rescue botulism or a denervated end organ — there is no ACh in the cleft to preserve.",
        clue:
          "Ask where the signal comes from: the drug brings it (direct — receptor ligand, AChE-resistant by design) or the patient's neuron does (indirect — breaker blocked, endogenous ACh accumulates). A stem that mentions denervation, botulinum toxin, or an empty synapse is asking for the DIRECT fork by elimination.",
      },
      {
        a: "Neostigmine, pyridostigmine, and physostigmine are all anticholinesterases, so they must all reach the same synapses — including the CNS",
        b: "Reading the '-stigmine' suffix as one drug with one distribution, instead of sorting the group by the page's own three charge rules",
        whyConfused:
          "The three names rhyme, the shared ACTION cell is the same two characters ('↑ ACh.'), and the charge rules print inside different rows' cells where they are easy to skim past; quaternary-vs-tertiary chemistry is not printed at all",
        keyDifference:
          "Charge decides reach, and the page prints all three rules: 'Neo = no blood-brain barrier penetration due to positive charge.' (neostigmine) and 'Does not penetrate CNS.' (pyridostigmine) — the charged, peripheral-only pair, whose use sets are accordingly peripheral (ileus, urinary retention, NMJ) — versus 'Phreely (freely) crosses blood-brain barrier as not charged → CNS.' (physostigmine), the uncharged one, whose printed use (the anticholinergic-toxicity antidote) REQUIRES CNS entry. On the direct side, pilocarpine prints 'can cross blood-brain barrier.' The grid's chemistry words (quaternary vs tertiary amine — KYP) are just labels for the printed rules.",
        clue:
          "Any '-stigmine' stem with a CNS symptom (delirium, the antidote question) is sorting for physostigmine; any stem about gut, bladder, or the NMJ accepts the charged pair. 'Neo = no' and 'Phreely' are the book's own two-second sort.",
      },
      {
        a: "Pyridostigmine and neostigmine are interchangeable peripheral AChE inhibitors, so either is 'the myasthenia drug' and either reverses neuromuscular blockade",
        b: "Stopping at the shared mechanism and missing the two printed differentiators: duration ('long acting') and the use-set split (MG maintenance vs the postoperative workhorse)",
        whyConfused:
          "Both rows print '↑ ACh.', both list myasthenia gravis among their applications, and both carry charge rules excluding the CNS — they look like one drug under two names",
        keyDifference:
          "The printed split: PYRIDOSTIGMINE is the chronic mainstay — 'Myasthenia gravis (long acting). Used with glycopyrrolate or hyoscyamine to control pyridostigmine adverse effects.' (the book's own mnemonic: 'Pyridostigmine gets rid of myasthenia gravis'); NEOSTIGMINE is the acute/workhorse set — 'Postoperative and neurogenic ileus and urinary retention, myasthenia gravis, reversal of neuromuscular junction blockade (postoperative).' The co-therapy detail is pyridostigmine's printed row: the muscarinic excess of chronic dosing is controlled with glycopyrrolate or hyoscyamine (antimuscarinics — the NEXT page's class, arriving two pages early as co-therapy).",
        clue:
          "Maintenance vs procedure: chronic myasthenia management → pyridostigmine (long-acting, co-antimuscarinic cover); postoperative ileus/retention or NMJ-blockade reversal → neostigmine. 'Pyrido gets rid of' the long haul; 'Neo' is the new (post-op) situation.",
      },
      {
        a: "The page warns that cholinomimetics exacerbate asthma, so methacholine must be contraindicated in asthma — and bethanechol is safe in every patient with urinary retention",
        b: "Reading the intro warning as a contraindication list for the whole class, without noticing that one printed row USES the toxicity as a diagnostic signal",
        whyConfused:
          "The warning opens the section and names asthma explicitly; methacholine's row then names asthma as its application — the two lines look contradictory unless the dose-purpose distinction is explicit",
        keyDifference:
          "Both lines are true and both are printed: 'Watch for exacerbation of COPD, asthma, and peptic ulcers in susceptible patients.' (the therapeutic class caution — muscarinic stimulation tightens airway smooth muscle and drives gastric acid/secretions) and methacholine's 'Challenge test for diagnosis of asthma.' (a controlled, inhaled, monitored PROVOCATION — the same bronchoconstriction deployed as a diagnostic endpoint in patients whose baseline is uncertain). The warning is also the contraindication screen the exam tests: giving bethanechol (or an AChE inhibitor) to an asthmatic or a patient with peptic ulcer disease is the classic 'mechanism predicts toxicity' question.",
        clue:
          "Sort by purpose: THERAPEUTIC exposure in a susceptible patient → the warning applies (avoid); DIAGNOSTIC provocation under monitoring → the warning IS the test (methacholine). The same fork appears on the toxicity side: bronchospasm after a cholinomimetic is either the expected adverse effect or the intended endpoint — the stem's setting decides.",
      },
    ],
    pivots: [
      {
        lookAlike: "Any stem that names a cholinomimetic effect or adverse effect and works backwards to the drug — 'a patient on a drug for dementia develops cramping diarrhea and rhinorrhea', 'after a glaucoma drop the patient sweats and salivates', 'postoperative ileus and retention resolve after IV dosing' — asking which class and which member",
        differentiator:
          "Sort through the FORK, then the REACH, then the ADDRESS (KYP protocol on the page's own cells): FORK — did the drug bind the receptor (direct: muscarinic-selective, AChE-resistant) or block the breaker (indirect: '↑ ACh.', nicotinic spillover)? REACH — charged (neostigmine, pyridostigmine: peripheral only) or uncharged (physostigmine, pilocarpine: BBB crossing)? ADDRESS — which printed APPLICATIONS cell matches the stem's organ?",
        correctPath:
          "(1) Name the organ(s) the stem describes (gut + glands + NMJ together = indirect, nicotinic spillover; one clean organ = direct). (2) If indirect, apply the charge rules: CNS involvement requires physostigmine; NMJ strength ('↑ muscle strength') points to pyridostigmine (chronic) or neostigmine (procedural). (3) If direct, match the address: bladder → bethanechol; pupil/miosis → carbachol; airway provocation → methacholine; eye + sweat/tears/saliva → pilocarpine. (4) Check the printed mnemonic as the accelerator: 'Bethany' (bladder), the 'pilow' (glands + eye), 'Dona Riva' (Alzheimer), 'Neo = no' / 'Phreely' (the charge split). (5) Route pure-poisoning stems (organophosphates, DUMBBELSS, pralidoxime) to the EXCLUDED same-page section — the anticholinesterase-poisoning topic — not to this page's table.",
      },
      {
        lookAlike: "Any stem pairing a cholinomimetic with the synapse machinery itself — 'will this drug work if the nerve is cut', 'why does botulinum toxin abolish the response to drug X but not drug Y', 'which agent still acts on a denervated end organ' — asking the fork question at the level of the synapse rather than the organ",
        differentiator:
          "The endogenous-vs-exogenous signal test (KYP frame on the page's own labels): the DIRECT agonist supplies its own ligand at the receptor; the INDIRECT agonist only preserves what the neuron released — an empty cleft gives it nothing to amplify",
        correctPath:
          "(1) Identify the drug's fork from its printed ACTION cell: a receptor-binding clause (bethanechol's 'Activates bladder smooth muscle ... Acts on muscarinic receptors') = DIRECT; a bare '↑ ACh.' = INDIRECT. (2) Ask what the stem did to the synapse: nerve cut, botulinum toxin (blocks ACh release — book 238's own anchor), or vesicles depleted → no ACh is being released → the INDIRECT drug loses its substrate; the DIRECT drug still binds. (3) The reverse edge: only the INDIRECT drug strengthens the NMJ (nicotinic) — '↑ ACh; ↑ muscle strength.' — so myasthenia and blockade reversal always route to the anticholinesterases. (4) The mirror lesson from the facing page: an AChE inhibitor cannot rescue botulism — the two pages' anchors (botulinum the release-blocker, donepezil the breaker-blocker) are opposite attacks on the same lane.",
      },
    ],
    miniCase: {
      vignette:
        "A 68-year-old man remains unable to void on the first night after an open prostatectomy; bedside ultrasound shows 650 mL of retained urine with no mechanical obstruction, and the team orders a cholinomimetic. The medical student is asked to explain the ordered drug's mechanism — and why it can restore detrusor contraction without stimulating the autonomic ganglia or the neuromuscular junction.",
      question:
        "Which drug was ordered, by what mechanism does it act, and which property explains the absence of ganglionic and neuromuscular effects?",
      options: [
        {
          label:
            "Bethanechol — a direct agonist that itself binds the muscarinic receptor of the bladder smooth muscle: 'Activates bladder smooth muscle; resistant to AChE. Acts on muscarinic receptors; no nicotinic activity.' The drug is its own ligand (AChE-resistant, so it survives the cleft's breaker) and its muscarinic selectivity means the ganglia and the NMJ — both nicotinic — are never touched. The book's own mnemonic: 'Bethany, call me to activate your bladder.'",
          text: "Bethanechol — direct muscarinic agonist, AChE-resistant, no nicotinic activity.",
          correct: true,
          why:
            "Correct on every count, and every clause is the page's own print (book 239, the Bethanechol row): the mechanism is DIRECT receptor agonism (the drug is the ligand — it does not depend on neuronal release), the 'resistant to AChE' design lets it survive the breaker that would destroy plain acetylcholine in the cleft, and the printed selectivity clause 'no nicotinic activity' is precisely the answer to the student's second question — ganglionic and NMJ effects require nicotinic receptor activity, which bethanechol lacks. The printed application matches the stem exactly: 'Urinary retention.'",
        },
        {
          label:
            "Neostigmine — an anticholinesterase that inhibits AChE, so endogenous acetylcholine accumulates at all cholinergic synapses and the detrusor contracts. Rationale: neostigmine's own printed applications include urinary retention, and '↑ ACh.' is exactly what the bladder needs.",
          text: "Neostigmine — inhibit AChE → ↑ endogenous ACh.",
          why:
            "The other-fork trap: neostigmine genuinely prints 'urinary retention' among its applications (the postoperative/neurogenic set), so this option is tempting — but it fails the question's second half. '↑ ACh.' accumulates at MUSCARINIC AND NICOTINIC synapses alike (which is why neostigmine's row also prints myasthenia gravis and NMJ-blockade reversal — nicotinic uses), so ganglionic and NMJ effects are exactly what it does NOT avoid; its row even anticipates muscarinic excess. The stem's phrase 'without stimulating the autonomic ganglia or the neuromuscular junction' is the built-in discriminator: only the direct, muscarinic-selective fork qualifies.",
        },
        {
          label:
            "Methacholine — an inhaled muscarinic agonist that stimulates cholinergic receptors in the airway and, by systemic absorption, the bladder. Rationale: it is a direct muscarinic agonist like bethanechol, so the mechanism class is identical.",
          text: "Methacholine — the inhaled direct agonist, borrowed for the bladder.",
          why:
            "Right fork, wrong address: methacholine's printed ACTION is organ- and route-specific — 'Stimulates muscarinic receptors in airway when inhaled.' — and its printed application is diagnostic, not therapeutic: 'Challenge test for diagnosis of asthma.' It is the bronchoprovocation tool, not the bladder drug (and in this patient it would be the page's own warning made real — provoking bronchospasm in a susceptible postoperative patient). The exam's sorting rule: the direct agonists are four DIFFERENT organ addresses, not one interchangeable class.",
        },
        {
          label:
            "Physostigmine — an uncharged anticholinesterase that crosses the blood-brain barrier and raises acetylcholine centrally and peripherally, restoring detrusor tone through the sacral micturition center. Rationale: the CNS-entry property makes it the most complete cholinomimetic.",
          text: "Physostigmine — the BBB-crossing AChE inhibitor for central bladder control.",
          why:
            "The wrong-tool trap: physostigmine's charge rule ('Phreely (freely) crosses blood-brain barrier as not charged → CNS.') and its printed use ('Antidote for anticholinergic toxicity; physostigmine “phyxes” atropine overdose.') make it the ANTIDOTE drug — reaching the CNS is its point, which is exactly why it is not chosen for a peripheral, organ-selective need: global ACh accumulation (muscarinic everywhere + nicotinic) with central entry is the opposite of the stem's 'without ganglionic or NMJ effects'. The charge property this option describes is real, printed, and irrelevant to the bladder question.",
        },
        {
          label:
            "Pilocarpine — a direct muscarinic agonist with excellent glandular and smooth-muscle activity that also crosses the blood-brain barrier; its potent stimulation of smooth muscle includes the detrusor. Rationale: among the direct agonists it is the most potent and most broadly distributed.",
          text: "Pilocarpine — the potent direct agonist for the bladder.",
          why:
            "Wrong address on the correct fork: pilocarpine's printed addresses are the eye and the exocrine glands — 'Contracts ciliary muscle of eye (open-angle glaucoma), pupillary sphincter (closed-angle glaucoma)' and 'Potent stimulator of sweat, tears, and saliva' → 'Open-angle and closed-angle glaucoma, xerostomia (Sjögren syndrome).' — not the bladder; and its printed BBB crossing ('can cross blood-brain barrier') plus glandular potency make it the LEAST selective choice for a patient who needs one organ activated. 'You cry, drool, and sweat on your pilow' is the mnemonic for its address, and none of the three is the detrusor.",
        },
      ],
      reasoning:
        "The vignette is the fork played as a therapeutic case. (1) THE INDICATION — postoperative urinary retention with no obstruction, which the page prints verbatim as Bethanechol's APPLICATIONS cell (and lists again inside Neostigmine's broader set — both forks treat this one indication, which is why the mini-case can use it to test the fork). (2) THE MECHANISM QUESTION — the ordered drug's own ACTION cell carries the two-part answer: direct muscarinic agonism plus 'resistant to AChE' (the design that lets an exogenous ligand survive the cleft's breaker). (3) THE SELECTIVITY QUESTION — the stem's 'without ganglionic or neuromuscular effects' is answered by the printed clause 'no nicotinic activity': the ganglia and the NMJ are nicotinic synapses, so a muscarinic-selective ligand cannot reach them — the exact property the indirect fork lacks ('↑ ACh.' spares nothing). (4) THE DISTRACTORS each borrow a neighboring printed row: neostigmine (the other fork's genuine retention drug — beaten only on the selectivity clause), methacholine (right fork, wrong organ — the airway provocation tool), physostigmine (the charge rule and antidote use, irrelevant here), and pilocarpine (right fork, wrong address — the eye/gland drug with the BBB crossing the stem never asked for). The discriminator to carry: for one organ, one clean signal — the direct, muscarinic-selective, AChE-resistant fork; for the NMJ or the whole periphery, the indirect fork with its charge-decided reach.",
    },
  },
  mnemonics: [
    {
      code: "THE FORK — DIRECT BINDS, INDIRECT BLOCKS (the indirect side needs the neuron to fire; the direct side brings its own ligand)",
      meaning:
        "The KYP compression of the page's own two group labels — 'Direct agonists' (the drug IS the ligand: binds the muscarinic receptor, engineered AChE-resistant ['resistant to AChE' prints on bethanechol, carbachol, and pilocarpine], muscarinic-selective ['no nicotinic activity' prints on bethanechol]) versus 'Indirect agonists (anticholinesterases)' (the drug blocks AChE → '↑ ACh.' — the patient's OWN acetylcholine accumulates, at muscarinic AND nicotinic synapses, which is why only this side prints the NMJ uses). The fork predicts the edge cases: an AChE inhibitor does nothing on a denervated or botulinum-poisoned synapse (nothing to preserve); a direct agonist still binds.",
      memorizes: "Which class every drug on the page belongs to, and what each class can and cannot reach",
      whenToUse:
        "Any 'mechanism of action' stem naming one of the eight drugs, any question pairing a cholinomimetic with nerve integrity or botulinum toxin, and any 'why does this class treat myasthenia but that one doesn't' comparison",
      clinical:
        "The fork drawn clinically: urinary retention is the printed overlap — bethanechol (direct, selective) and neostigmine (indirect, nicotinic spillover) both treat it; myasthenia gravis and NMJ-blockade reversal print ONLY on the indirect side (the NMJ is nicotinic); Alzheimer disease requires the indirect side PLUS CNS entry (the donepezil trio); the anticholinergic-toxicity antidote requires the indirect side PLUS the uncharged molecule (physostigmine).",
    },
    {
      code: "BETHANY'S BLADDER + THE PILOW — 'Bethany, call me to activate your bladder.' · 'You cry, drool, and sweat on your pilow.' (the book's own two direct-agonist mnemonics, verbatim)",
      meaning:
        "The page's own memory hooks for the two most-tested direct agonists: BETHANECHOL = the bladder ('Bethany' ≈ bethanechol; the printed application is 'Urinary retention.'), and PILOCARPINE = the exocrine triple ('pilow' ≈ pilo-; the printed application set is 'Potent stimulator of sweat, tears, and saliva' + both glaucoma angles + 'xerostomia (Sjögren syndrome)' — you cry [tears], drool [saliva], and sweat [sweat] on your pillow). Both mnemonics are the book's own print, quoted verbatim in the note's table block.",
      memorizes: "The two direct agonists whose indications the exam recycles constantly — the bladder drug and the gland/eye drug",
      whenToUse:
        "Any postoperative or neurogenic urinary-retention stem (Bethany), and any glaucoma or Sjögren/xerostomia stem (the pilow); also the reverse — a patient who 'cries, drools, and sweats' after an ophthalmic drop is showing pilocarpine's exocrine spillover",
      clinical:
        "Bethanechol: postoperative and neurogenic urinary retention (the detrusor's M3 receptors — the micturition-control wiring). Pilocarpine: open-angle glaucoma (ciliary muscle contraction opens the meshwork), closed-angle glaucoma (pupillary sphincter contraction pulls the iris away from the angle), and Sjögren xerostomia — with the page's own cautions riding both (the COPD/asthma/peptic-ulcer warning; pilocarpine 'can cross blood-brain barrier').",
    },
    {
      code: "NEO = NO BBB · PHYSO PASSES 'PHREELY' — 'Neo = no blood-brain barrier penetration due to positive charge.' · 'Phreely (freely) crosses blood-brain barrier as not charged → CNS.' (the book's own charge mnemonics, verbatim; pyridostigmine's row adds 'Does not penetrate CNS')",
      meaning:
        "The printed charge split of the indirect fork, in the book's own wordplay: NEOSTIGMINE is positively charged → cannot cross the BBB → peripheral-only (its uses are the printed peripheral set: ileus, urinary retention, myasthenia, NMJ-blockade reversal); PHYSOSTIGMINE is not charged → 'phreely' crosses into the CNS → its printed use is the one that NEEDS central entry ('Antidote for anticholinergic toxicity; physostigmine “phyxes” atropine overdose.'). PYRIDOSTIGMINE sits with neostigmine ('Does not penetrate CNS.' — the chronic MG drug, long-acting, with the printed glycopyrrolate/hyoscyamine co-therapy). The KYP completion: charged = quaternary amine, uncharged = tertiary amine — the chemistry words are KYP's, all three rules are printed.",
      memorizes: "Which anticholinesterase reaches the CNS and which two stay peripheral — and therefore which drug is the antidote",
      whenToUse:
        "Any '-stigmine' stem with a CNS dimension (anticholinergic delirium → physostigmine; a purely peripheral need → neostigmine/pyridostigmine), and any 'why does this AChE inhibitor not treat central antimuscarinic toxicity' question",
      clinical:
        "Physostigmine as the antidote for anticholinergic toxicity (atropine, antihistamines, tricyclics' antimuscarinic load, Jimson weed/Datura — the central delirium requires the uncharged molecule); neostigmine for postoperative ileus/retention and NMJ-blockade reversal; pyridostigmine as the long-acting myasthenia mainstay — the trio sorted by one printed letter-pair (charge) and two rhymes (Neo/phreely).",
    },
    {
      code: "DONA RIVA FORGOT THE GALA · PYRIDO GETS RID OF · PHYSO 'PHYXES' — the book's own three use-mnemonics for the indirect fork, verbatim",
      meaning:
        "The page's own wordplay for the indirect side's use set: '1st line for Alzheimer disease (Dona Riva forgot the gala).' — DONA RIVA carries the donepezil/rivastigmine/galantamine trio (the dementia line, and the forgotten 'gala' is the disease's own story); 'Pyridostigmine gets rid of myasthenia gravis.' — PYRIDO GETS RID OF the NMJ disease (the long-acting mainstay); and physostigmine '\"phyxes\" atropine overdose' — PHYXES the anticholinergic toxidrome. Three rhymes, three uses, one mechanism ('↑ ACh.') — the fourth mnemonic (Bethany/pilow) covers the direct side.",
      memorizes: "The indirect group's three signature applications and which drug owns each (trio → Alzheimer; pyridostigmine → MG; physostigmine → the antidote)",
      whenToUse:
        "Any stem naming dementia treatment (Dona Riva), myasthenia maintenance (pyrido), or an anticholinergic overdose needing reversal (phyxes); also the reverse — any '-stigmine' or donepezil-family stem can be sorted by which rhyme matches the organ",
      clinical:
        "Donepezil/rivastigmine/galantamine: the 1st-line Alzheimer line (cortical ACh augmentation — requires CNS entry, the trio's unprinted charge completion, KYP-flagged); pyridostigmine: chronic myasthenia gravis ('long acting', with glycopyrrolate or hyoscyamine printed against its muscarinic excess); physostigmine: the anticholinergic-toxicity antidote — and the one use that ties the charge rule to a clinical decision.",
    },
  ],
  rapidReview: {
    s30: [
      "'Cholinomimetic agents' — the section header; the upper portion of book 239, directly under the standing PHARMACOLOGY—AUTONOMIC DRUGS banner, one page after the autonomic-drugs synapse map.",
      "The intro warning, verbatim: 'Watch for exacerbation of COPD, asthma, and peptic ulcers in susceptible patients.'",
      "The table frame: DRUG / ACTION / APPLICATIONS; two groups — 'Direct agonists' and 'Indirect agonists (anticholinesterases)'; eight drugs total.",
      "Bethanechol: 'Activates bladder smooth muscle; resistant to AChE. Acts on muscarinic receptors; no nicotinic activity.' → 'Urinary retention.' ('Bethany, call me to activate your bladder.')",
      "Carbachol: 'Carbon copy of acetylcholine (but resistant to AChE).' → 'Constricts pupil. Used for intraoperative miosis induction.'",
      "Methacholine: 'Stimulates muscarinic receptors in airway when inhaled.' → 'Challenge test for diagnosis of asthma.'",
      "Pilocarpine: 'Contracts ciliary muscle of eye (open-angle glaucoma), pupillary sphincter (closed-angle glaucoma); resistant to AChE, can cross blood-brain barrier.' → 'Potent stimulator of sweat, tears, and saliva / Open-angle and closed-angle glaucoma, xerostomia (Sjögren syndrome).' ('You cry, drool, and sweat on your pilow.')",
      "Donepezil, rivastigmine, galantamine: '↑ ACh.' → '1st line for Alzheimer disease (Dona Riva forgot the gala).'",
      "Neostigmine: '↑ ACh. Neo = no blood-brain barrier penetration due to positive charge.' → 'Postoperative and neurogenic ileus and urinary retention, myasthenia gravis, reversal of neuromuscular junction blockade (postoperative).'",
      "Pyridostigmine: '↑ ACh; ↑ muscle strength. Does not penetrate CNS. Pyridostigmine gets rid of myasthenia gravis.' → 'Myasthenia gravis (long acting). Used with glycopyrrolate or hyoscyamine to control pyridostigmine adverse effects.' · Physostigmine: '↑ ACh. Phreely (freely) crosses blood-brain barrier as not charged → CNS.' → 'Antidote for anticholinergic toxicity; physostigmine “phyxes” atropine overdose.'",
    ],
    m3: [
      "THE FORK — DIRECT BINDS, INDIRECT BLOCKS (the direct drugs are their own AChE-resistant ligands at one muscarinic address; the indirect drugs block the breaker and let endogenous ACh accumulate — nicotinic sites included, which is why the NMJ uses live only on the indirect side).",
      "NEO = NO BBB · PHYSO PASSES 'PHREELY' (charge decides reach: neostigmine and pyridostigmine stay peripheral; physostigmine enters the CNS and is the anticholinergic antidote).",
      "BETHANY'S BLADDER + THE PILOW (the book's own: bethanechol → urinary retention; pilocarpine → you cry, drool, and sweat — glaucoma both angles + Sjögren xerostomia).",
      "DONA RIVA · PYRIDO GETS RID OF · PHYSO 'PHYXES' (the trio → Alzheimer 1st line; pyridostigmine → long-acting MG with glycopyrrolate/hyoscyamine cover; physostigmine → atropine-overdose antidote).",
    ],
    m10: [
      "The whole page in one breath: one warning (COPD, asthma, peptic ulcer exacerbation) + one fork — DIRECT agonists bind the muscarinic receptor (AChE-resistant, organ-aimed) vs INDIRECT agonists block AChE ('↑ ACh.', charge-decided reach).",
      "The direct design, both printed features: 'resistant to AChE' (bethanechol, carbachol, pilocarpine — the ligand survives the cleft's breaker) and muscarinic selectivity ('Acts on muscarinic receptors; no nicotinic activity' — no ganglionic, no NMJ effects; carbachol's 'carbon copy of acetylcholine' is the exception in spirit, but its printed use is the pupil).",
      "The four direct addresses, verbatim applications: bladder (bethanechol, 'Urinary retention.'), pupil (carbachol, 'intraoperative miosis induction'), airway (methacholine, 'Challenge test for diagnosis of asthma.'), eye + glands (pilocarpine, both glaucoma angles + 'xerostomia (Sjögren syndrome)').",
      "The indirect mechanism is two printed characters — '↑ ACh.' — amplification, not substitution: the patient's own transmitter accumulates at muscarinic AND nicotinic synapses, which is why myasthenia gravis and 'reversal of neuromuscular junction blockade' print only on this side, and why the class does nothing on a denervated or botulinum-poisoned synapse.",
      "The charge grid, three printed rules: 'Neo = no blood-brain barrier penetration due to positive charge.' · pyridostigmine 'Does not penetrate CNS.' · physostigmine 'Phreely (freely) crosses blood-brain barrier as not charged → CNS.' — the KYP completion (quaternary = charged/peripheral, tertiary = uncharged/CNS; the donepezil trio's CNS entry implied by its cortical use, not printed) is flagged.",
      "The indirect use sets as a charge map: CORTEX (donepezil/rivastigmine/galantamine, '1st line for Alzheimer disease'), PERIPHERY (neostigmine: 'Postoperative and neurogenic ileus and urinary retention, myasthenia gravis, reversal of neuromuscular junction blockade'), NMJ CHRONIC (pyridostigmine: 'long acting' + the printed co-therapy 'glycopyrrolate or hyoscyamine to control pyridostigmine adverse effects'), CNS ANTIDOTE (physostigmine: 'phyxes' atropine overdose).",
      "The warning and the challenge test are the same pharmacology in opposite directions: muscarinic stimulation tightens airway smooth muscle — a toxicity in the susceptible patient ('exacerbation of COPD, asthma') and a diagnostic endpoint under monitoring (methacholine's provocation of bronchospasm in suspected asthma).",
      "The two-forks-one-indication overlap: urinary retention prints on BOTH sides (bethanechol's whole application; one clause of neostigmine's set) — the exam's version asks for the one that avoids ganglionic/NMJ effects (the direct, 'no nicotinic activity' drug).",
      "What this page does NOT print (flagged, never cited as printed): edrophonium (the short-acting myasthenia-diagnostic AChE inhibitor) and echothiophate (the irreversible glaucoma organophosphate) are absent; the reversible-vs-irreversible split, organophosphates, DUMBBELSS, atropine, and pralidoxime all belong to the 'Anticholinesterase poisoning' section on the SAME book-239 page below this table — EXCLUDED (the pending anticholinesterase-poisoning topic).",
      "The boundary map: pdf 260 behind = the completed autonomic-drugs page (its 'Cholinergic stimulant' anchor 'AChE inhibitors eg, Donepezil' resolves into this page's indirect group); pdf 262 ahead = the pending Muscarinic antagonists page (this section does NOT extend there — the whole section is on pdf 261); the M/N receptor families the direct agonists bind are book 235's own (the acetylcholine-receptors topic), and the detrusor/sphincter wiring bethanechol rides is the micturition-control topic's.",
    ],
  },
  recall: [
    {
      q: "Recite the section's intro warning verbatim, and name the three susceptible-patient scenarios it protects.",
      a:
        "'Watch for exacerbation of COPD, asthma, and peptic ulcers in susceptible patients.' — the three scenarios: bronchial smooth-muscle tightening/bronchospasm (COPD, asthma) and gastric acid/secretory stimulation (peptic ulcers), all three being muscarinic addresses every drug on the page pushes.",
    },
    {
      q: "Name the four DIRECT agonists with each one's printed APPLICATIONS cell, and the shared design features the ACTION cells print.",
      a:
        "Bethanechol → 'Urinary retention.'; Carbachol → 'Constricts pupil. Used for intraoperative miosis induction.'; Methacholine → 'Challenge test for diagnosis of asthma.'; Pilocarpine → 'Potent stimulator of sweat, tears, and saliva / Open-angle and closed-angle glaucoma, xerostomia (Sjögren syndrome).' The printed design features: 'resistant to AChE' (bethanechol, carbachol, pilocarpine), muscarinic selectivity ('Acts on muscarinic receptors; no nicotinic activity' — bethanechol), and pilocarpine's 'can cross blood-brain barrier.'",
    },
    {
      q: "Name the four INDIRECT agonists (the anticholinesterases) with each one's printed charge rule (where given) and APPLICATIONS cell.",
      a:
        "Donepezil, rivastigmine, galantamine — charge NOT printed (KYP-flagged completion: they cross the BBB, which the cortical use requires) → '1st line for Alzheimer disease (Dona Riva forgot the gala).'; Neostigmine — 'Neo = no blood-brain barrier penetration due to positive charge.' → 'Postoperative and neurogenic ileus and urinary retention, myasthenia gravis, reversal of neuromuscular junction blockade (postoperative).'; Pyridostigmine — 'Does not penetrate CNS.' → 'Myasthenia gravis (long acting). Used with glycopyrrolate or hyoscyamine to control pyridostigmine adverse effects.'; Physostigmine — 'Phreely (freely) crosses blood-brain barrier as not charged → CNS.' → 'Antidote for anticholinergic toxicity; physostigmine \"phyxes\" atropine overdose.'",
    },
    {
      q: "Both bethanechol and neostigmine can treat urinary retention — state the mechanism of each, and which one the stem 'without ganglionic or neuromuscular effects' selects.",
      a:
        "Bethanechol: DIRECT — the drug itself 'Activates bladder smooth muscle' at muscarinic receptors, 'resistant to AChE', with 'no nicotinic activity' (the ganglia and NMJ are nicotinic and are never touched). Neostigmine: INDIRECT — inhibits AChE → '↑ ACh.' accumulates at ALL cholinergic synapses, muscarinic AND nicotinic (which is why its use set also includes myasthenia gravis and NMJ-blockade reversal). The stem's clause selects bethanechol — only the direct, muscarinic-selective fork avoids the nicotinic synapses.",
    },
    {
      q: "Which content on this same book-239 page is EXCLUDED from this topic, and what are its three effect rows?",
      a:
        "The 'Anticholinesterase poisoning' section, printing BELOW the Cholinomimetic agents table on the same pdf 261 — EXCLUDED (the separate pending anticholinesterase-poisoning topic): 'Often due to organophosphates (eg, fenthion, parathion, malathion) that irreversibly inhibit AChE. Organophosphates commonly used as insecticides; poisoning usually seen in farmers.' Its three rows: Muscarinic effects (the DUMBBELSS list, reversed by atropine), Nicotinic effects (neuromuscular blockade, reversed by pralidoxime if given early, coadministered with atropine), and CNS effects (respiratory depression, lethargy, seizures, coma).",
    },
  ],
  related: [
    {
      title: "Autonomic Drugs — the Page Directly Behind: This Page's Drugs Ride Its Synapse",
      topicId: "autonomic-drugs",
      note:
        "The facing page (PH17, book 238): the two intro rules and the four-lane neurotransmission flowchart — the synapse every drug on this page pushes. Its cholinergic lane (Choline + Acetyl-CoA →[ChAT]→ ACh → Ca2+-triggered release → Cholinoreceptors M1 M2 M3 → AChE → Choline + Acetate) is the machinery both forks attack: the DIRECT agonists bind the lane's plate (with 'resistant to AChE' printed so they survive the lane's breaker), the INDIRECT agonists block the lane's breaker (PH17's own 'Cholinergic stimulant' anchor list — 'AChE inhibitors eg, Donepezil' — resolves into THIS page's indirect group; the reciprocal anchor PH17 pinned to this section resolves here). PH17's botulinum anchor supplies this page's edge case: an AChE inhibitor cannot rescue a release-blocked synapse.",
    },
    {
      title: "Acetylcholine Receptors — the M/N Families Both Forks Ride",
      topicId: "acetylcholine-receptors",
      note:
        "The completed receptor page (PH12, book 235): the nicotinic (ligand-gated cation channel) and muscarinic (GPCR) families. This page's whole selectivity story lives there: bethanechol's 'Acts on muscarinic receptors; no nicotinic activity' clause is the M-vs-N fork made into a drug; the indirect side's NMJ uses (myasthenia gravis, blockade reversal) ride the nicotinic receptor the direct drugs avoid; and pilocarpine's gland/eye effects ride the M3 addresses. Read together: PH12 names the locks, this page names the keys (direct) and the key-preservers (indirect).",
    },
    {
      title: "Micturition Control — the Detrusor Wiring Bethanechol Activates",
      topicId: "micturition-control",
      note:
        "The completed bladder page (PH13, book 235): the detrusor/sphincter wiring — parasympathetic ACh on M3 receptors contracts the detrusor, sympathetic NE on α receptors closes the internal sphincter, and the pontine center gates the loop. THIS page's bethanechol is that wiring's drug: 'Activates bladder smooth muscle' is the M3 detrusor story printed as an ACTION cell, and 'Urinary retention' is the wire pulled pharmacologically. The page-behind-this-one pairing the exam builds: retention after anesthesia (the loop asleep) → bethanechol (wake the detrusor) — the mini-case's own stem.",
    },
    {
      title: "G-Protein-Linked Second Messengers — the Cascade Behind Every Muscarinic Effect on This Page",
      topicId: "g-protein-linked-second-messengers",
      note:
        "The completed messenger page (PH16, book 237): the receptor × G-protein-class table and the three cascades. Every muscarinic effect on this page is a GPCR story: the detrusor contraction (M3 → Gq → PLC → IP3/Ca2+ — the smooth-muscle cascade), the glandular secretion of pilocarpine's sweat/tears/saliva (same M3/Gq address), the bronchial tightening of the warning and the methacholine challenge (M3 on airway smooth muscle), and the CNS effects that physostigmine's crossing enables. The exam's layered version: name the drug (this page) → name the receptor (PH12) → name the G-protein class and cascade (PH16).",
    },
  ],
  crossLinks: [
    {
      subject: "Neurology (myasthenia gravis and Alzheimer disease — the indirect fork's two signature diseases)",
      connection:
        "This page's indirect group is two neurology exams in one table. MYASTHENIA GRAVIS: pyridostigmine is the printed mainstay ('Myasthenia gravis (long acting). Used with glycopyrrolate or hyoscyamine to control pyridostigmine adverse effects.' — the book's own mnemonic 'Pyridostigmine gets rid of myasthenia gravis.'; the co-therapy is the antimuscarinic cover against cholinergic excess), and neostigmine carries the acute/procedural set including 'reversal of neuromuscular junction blockade (postoperative)' — the NMJ story (autoantibodies vs the ACh receptor, the edrophonium/tensilon diagnostic layer NOT printed here, the thymus association) supplies the disease frame this page's drugs treat. ALZHEIMER DISEASE: the donepezil/rivastigmine/galantamine trio prints as '1st line' with its own mnemonic ('Dona Riva forgot the gala.') — the cortical cholinergic-deficit story (nucleus basalis degeneration) is the pathophys layer that makes '↑ ACh.' a dementia treatment.",
    },
    {
      subject: "Ophthalmology (glaucoma — the two angles pilocarpine covers and the pupil carbachol constricts)",
      connection:
        "Two of the four direct agonists are ophthalmology drugs. PILOCARPINE prints BOTH angle mechanisms in one ACTION cell: 'Contracts ciliary muscle of eye (open-angle glaucoma)' — the ciliary muscle pulls the trabecular meshwork open, easing aqueous outflow — 'pupillary sphincter (closed-angle glaucoma)' — constriction pulls the iris out of the angle; its applications add 'Potent stimulator of sweat, tears, and saliva' and 'xerostomia (Sjögren syndrome)'. CARBACHOL prints 'Constricts pupil. Used for intraoperative miosis induction.' The exam's pairing writes itself: the miotics (this page) versus the mydriatics (the Muscarinic antagonists page directly ahead, pdf 262 — atropine-family mydriasis, and its own warning that mydriasis can precipitate angle closure); and the cholinergic side effects of ophthalmic use ('You cry, drool, and sweat on your pilow.') are the spillover the stem tests.",
    },
    {
      subject: "Toxicology (physostigmine the antidote — and the same-page poisoning section this topic excludes)",
      connection:
        "This page carries toxicology twice. First, the antidote: physostigmine — 'Antidote for anticholinergic toxicity; physostigmine “phyxes” atropine overdose.' — the uncharged AChE inhibitor that enters the CNS to reverse both the peripheral and the central antimuscarinic syndrome (atropine, antihistamines, Jimson weed/Datura, the TCA antimuscarinic load — 'hot as a hare, blind as a bat' territory, printed in full on the Muscarinic antagonists page ahead); the charged alternatives ('Neo = no blood-brain barrier penetration') are the wrong-answer set. Second, the class warning: 'Watch for exacerbation of COPD, asthma, and peptic ulcers in susceptible patients.' — the mechanism-predicts-toxicity question. The ORGANOPHOSPHATE arm (fenthion/parathion/malathion, farmers, DUMBBELSS, atropine + pralidoxime) prints on this SAME book-239 page as the 'Anticholinesterase poisoning' section — EXCLUDED here as the separate pending anticholinesterase-poisoning topic.",
    },
    {
      subject: "Immunology & Rheumatology (Sjögren syndrome — the xerostomia pilocarpine treats)",
      connection:
        "Pilocarpine's printed application 'xerostomia (Sjögren syndrome)' is the rheumatology bridge: Sjögren's sicca syndrome (dry eyes, dry mouth ± parotid swelling, anti-Ro/anti-La antibodies, the lymphoma risk) destroys the exocrine glands this drug's muscarinic agonism substitutes for — 'Potent stimulator of sweat, tears, and saliva' is literally the anti-sicca profile ('You cry, drool, and sweat on your pilow.'). The exam's composite: a Sjögren patient with xerostomia + xerophthalmia → pilocarpine (or cevimeline, its cousin) → mechanism = direct M3 agonism → expected adverse effects = the same exocrine stimulation pushed too far (sweating, flushing, GI cramping) plus the page's standing COPD/asthma/peptic-ulcer caution.",
    },
  ],
};
