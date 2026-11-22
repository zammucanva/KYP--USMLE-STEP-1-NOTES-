import type { KypUsMLENote } from "../types";

// Pharmacology — ANTICHOLINESTERASE POISONING (PH19 — the CHOLINERGIC
// TOXIDROME PAGE: one intro pair + the three-row effect-tier table).
// Source: pdf 261 / book 239, the LOWER portion of the page under the
// standing 'PHARMACOLOGY—AUTONOMIC DRUGS' banner, BELOW the
// Cholinomimetic agents table of PH18 (the upper portion — EXCLUDED).
// The section prints TWO elements: (1) ONE INTRO PAIR (prose, verbatim)
// — 'Often due to organophosphates (eg, fenthion, parathion, malathion)
// that irreversibly inhibit AChE.' + 'Organophosphates commonly used as
// insecticides; poisoning usually seen in farmers.'; (2) ONE THREE-ROW
// EFFECT-TIER TABLE (row label / findings / high-yield, no column
// headers printed) — MUSCARINIC EFFECTS ('Diarrhea, Urination, Miosis,
// Bronchospasm, Bradycardia, Emesis, Lacrimation, Sweating, Salivation.'
// → 'DUMBBELSS.' the book's OWN mnemonic, double-S — Sweating +
// Salivation; 'Reversed by atropine, a competitive inhibitor.' +
// 'Atropine can cross BBB to relieve CNS symptoms.'), NICOTINIC EFFECTS
// ('Neuromuscular blockade (mechanism similar to succinylcholine).' →
// 'Reversed by pralidoxime, regenerates AChE via dephosphorylation if
// given early. Must be coadministered with atropine to prevent transient
// worsening of symptoms. Pralidoxime does not readily cross BBB.'), and
// CNS EFFECTS ('Respiratory depression, lethargy, seizures, coma.' —
// printed WITHOUT its own reversal line; atropine's printed BBB
// crossing is its cover).
// RASTER CENSUS: ZERO raster images on pdf 261 — the section is PURE
// TEXT, COPYRIGHTED, never reproduced as artwork; carried VERBATIM as
// this note's two table blocks (ORIGINAL_KYP_ADAPTATION) and conveyed
// as ONE original KYP poison map (AnticholinesterasePoisoningMap).
// TIMING-RULE FINDING: the source's own timing rule is the printed 'if
// given early'; the AGING mechanism behind it (the phosphorylated
// enzyme loses its alkyl group over hours → the bond becomes permanent
// → dephosphorylation impossible) is NOT printed anywhere in part 1 —
// flagged as a KYP extension wherever used, never cited as printed.
// NOT-PRINTED LAYER (census, flagged wherever it would appear):
// 'carbamate' appears NOWHERE in part 1 (the reversible, non-aging
// cousins are absent); the alternative mnemonic SLUDGE is absent; nerve
// agents (sarin, VX) are absent; the nicotinic-GANGLIONIC signs
// (mydriasis, tachycardia — the sympathetic overdrive that can override
// the muscarinic picture) are absent — the printed nicotinic row is the
// NMJ blockade alone.
// SAME-PAGE EXCLUSION: the 'Cholinomimetic agents' section prints on
// the SAME pdf 261 ABOVE this section (the completed PH18: the intro
// warning + the two-group table) — EXCLUDED; the printed adjacency is
// the page's own mirror: the upper table ENDS with physostigmine the
// ANTICHOLINERGIC-toxicity antidote ('physostigmine "phyxes" atropine
// overdose.'), this lower section is the CHOLINERGIC-toxicity antidote
// story — the two opposite toxidromes on one page.
// PAGE-EXTENT FINDING: the section is the LAST element on pdf 261 — it
// ends above the page footer, and pdf 262 (book 240) opens the
// SEPARATE pending 'Muscarinic antagonists' section (atropine's own
// drug page — the antidote of this section's muscarinic tier, arriving
// one page later); sourcePages = [261] only.
// BOUNDARIES: pdf 260 (book 238) carries the COMPLETED PH17
// 'autonomic-drugs' (the synapse map whose breaker this poison blocks —
// EXCLUDED, cross-linked); pdf 261 upper = COMPLETED PH18
// 'cholinomimetic-agents' (EXCLUDED, cross-linked — its indirect group
// IS this poison's therapeutic class, the reversible -stigmines); pdf
// 262 = PENDING 'Muscarinic antagonists' (EXCLUDED). PH12
// 'acetylcholine-receptors' (book 235) carries the M/N receptor
// families the three tiers ride — cross-linked.
// KYP EXTENSIONS (flagged wherever they appear): the TIER-TRIAD reading
// (the three printed row labels compressed into one overflow story —
// glands and smooth muscle first, then the NMJ, then the brain); the
// AGING-TIME WINDOW (the printed 'if given early' expanded into the
// aging mechanism — NOT printed, flagged); the DUAL-ANTIDOTE COVERAGE
// MAP (atropine = competitive muscarinic blocker that crosses the BBB →
// muscarinic + CNS tiers; pralidoxime = AChE regenerator that does not
// readily cross the BBB → nicotinic/NMJ tier — every clause printed,
// the map KYP's); the MIRROR-TOXIDROME frame (this section vs
// physostigmine's row above — the wet/dry mirror); and the NOT-PRINTED
// drug layer (carbamates, SLUDGE, nerve agents, ganglionic signs —
// absent from the page, flagged, never cited as printed).

export const anticholinesterasePoisoning: KypUsMLENote = {
  id: "anticholinesterase-poisoning",
  title: "Anticholinesterase Poisoning",
  subtitle:
    "The cholinergic toxidrome page — one poison, three overflow tiers, two antidotes: 'Often due to organophosphates (eg, fenthion, parathion, malathion) that irreversibly inhibit AChE. Organophosphates commonly used as insecticides; poisoning usually seen in farmers.' The poison floods every cholinergic synapse the facing synapse-map drew, and the page sorts the flood into three tiers — MUSCARINIC ('Diarrhea, Urination, Miosis, Bronchospasm, Bradycardia, Emesis, Lacrimation, Sweating, Salivation.' — the book's own 'DUMBBELSS.'), NICOTINIC ('Neuromuscular blockade (mechanism similar to succinylcholine).'), and CNS ('Respiratory depression, lethargy, seizures, coma.') — then answers each tier with the duo: atropine, 'a competitive inhibitor' that 'can cross BBB to relieve CNS symptoms', and pralidoxime, which 'regenerates AChE via dephosphorylation if given early' and 'Must be coadministered with atropine to prevent transient worsening of symptoms.'",
  subject: "Pharmacology",
  system:
    "Section II · Pharmacology — Autonomic Drugs (the banner this page shares with drug-effect-modifications, autonomic-receptors, acetylcholine-receptors, pain-transmission, micturition-control, tissue-distribution-of-adrenergic-receptors, g-protein-linked-second-messengers, autonomic-drugs, and cholinomimetic-agents before it — the Anticholinesterase poisoning section CLOSES book 239, in the LOWER portion of the same page PH18's Cholinomimetic agents table opens: the upper half supplied the therapeutic AChE inhibitors (donepezil, neostigmine, pyridostigmine, physostigmine — the REVERSIBLE -stigmines) and this lower half supplies their IRREVERSIBLE extreme, the organophosphates; PH17 drew the synapse being poisoned (AChE the breaker of the cholinergic lane), PH12 drew the M/N receptor families the three tiers ride, and the next page (book 240) is atropine's own drug table — the Muscarinic antagonists, the class this section deploys as its first antidote)",
  pilotCategory:
    "The toxidrome page's complete architecture — the intro pair (the three '-thion' organophosphates, the insecticide route, the farmer) plus the three-row effect-tier table in full (every row label, findings cell, and antidote clause verbatim, including the book's own DUMBBELSS mnemonic), and the KYP layers that compress them: the TIER-TRIAD reading (glands first, then the NMJ, then the brain), the AGING-TIME WINDOW (the printed 'if given early' expanded into the aging mechanism — not printed, flagged), the DUAL-ANTIDOTE COVERAGE MAP (who covers which tier), the MIRROR-TOXIDROME frame (the same page's physostigmine row as the opposite pole), and the NOT-PRINTED drug layer (carbamates, SLUDGE, nerve agents, ganglionic signs flagged as absent).",
  difficulty: 2,
  readTime: 7,
  sourceRef:
    "First Aid 2026, Part 1 pp. 239 (Pharmacology — Autonomic Drugs: the Anticholinesterase poisoning section occupies the LOWER portion of the page, below the Cholinomimetic agents table — the upper cholinomimetic content is EXCLUDED, the separate completed cholinomimetic-agents topic; this section prints two elements, both carried here — the intro pair, verbatim: 'Often due to organophosphates (eg, fenthion, parathion, malathion) that irreversibly inhibit AChE.' and 'Organophosphates commonly used as insecticides; poisoning usually seen in farmers.'; and the three-row effect-tier table — MUSCARINIC EFFECTS: 'Diarrhea, Urination, Miosis, Bronchospasm, Bradycardia, Emesis, Lacrimation, Sweating, Salivation.' → 'DUMBBELSS.' (the book's own mnemonic, double-S: Sweating + Salivation) + 'Reversed by atropine, a competitive inhibitor.' + 'Atropine can cross BBB to relieve CNS symptoms.' — NICOTINIC EFFECTS: 'Neuromuscular blockade (mechanism similar to succinylcholine).' → 'Reversed by pralidoxime, regenerates AChE via dephosphorylation if given early. Must be coadministered with atropine to prevent transient worsening of symptoms. Pralidoxime does not readily cross BBB.' — CNS EFFECTS: 'Respiratory depression, lethargy, seizures, coma.' (no reversal line of its own — atropine's printed BBB crossing is the cover) — the table is pure text with zero rasters, never reproduced as artwork, carried verbatim as this note's two table blocks; the source's own timing rule is the printed 'if given early' — the AGING mechanism behind it is NOT printed ('aging' appears nowhere in part 1) and is flagged as a KYP extension wherever used; also NOT printed (census-flagged, never cited as printed): 'carbamate' (absent from part 1), the alternative mnemonic SLUDGE, nerve agents (sarin, VX), and the nicotinic-ganglionic signs (mydriasis, tachycardia) — the printed nicotinic row is the NMJ blockade alone; the same-page adjacency is the page's own mirror: the EXCLUDED upper table ends with 'Antidote for anticholinergic toxicity; physostigmine \"phyxes\" atropine overdose.' immediately before this section — the anticholinergic-toxicity antidote above, the cholinergic-toxicity antidotes below; the section is the LAST element on pdf 261 and does NOT extend to pdf 262, which opens the separate pending Muscarinic antagonists section (atropine's own drug page); pdf 260 behind carries the completed autonomic-drugs topic (the synapse map — EXCLUDED))",
  tags: [
    "anticholinesterase poisoning",
    "organophosphate poisoning",
    "organophosphates",
    "fenthion",
    "parathion",
    "malathion",
    "insecticides",
    "pesticide exposure",
    "cholinergic toxidrome",
    "cholinergic crisis",
    "DUMBBELSS",
    "muscarinic effects",
    "nicotinic effects",
    "CNS effects",
    "miosis",
    "pinpoint pupils",
    "bronchospasm",
    "bronchorrhea",
    "bradycardia",
    "lacrimation",
    "salivation",
    "diaphoresis",
    "emesis",
    "diarrhea",
    "urination",
    "neuromuscular blockade",
    "succinylcholine",
    "respiratory depression",
    "seizures",
    "atropine",
    "pralidoxime",
    "2-PAM",
    "competitive inhibitor",
    "dephosphorylation",
    "AChE reactivation",
    "enzyme aging",
    "acetylcholinesterase",
    "blood-brain barrier",
    "farmers",
    "pharmacology",
  ],
  core: {
    what:
      "ONE POISON, THREE TIERS, TWO ANTIDOTES. The page opens with its only prose pair — the exposure: 'Often due to organophosphates (eg, fenthion, parathion, malathion) that irreversibly inhibit AChE. Organophosphates commonly used as insecticides; poisoning usually seen in farmers.' — then sorts the overdose into three effect-tier rows. MUSCARINIC EFFECTS: 'Diarrhea, Urination, Miosis, Bronchospasm, Bradycardia, Emesis, Lacrimation, Sweating, Salivation.' — spelled by the book's own mnemonic: 'DUMBBELSS.' — 'Reversed by atropine, a competitive inhibitor. Atropine can cross BBB to relieve CNS symptoms.' NICOTINIC EFFECTS: 'Neuromuscular blockade (mechanism similar to succinylcholine).' — 'Reversed by pralidoxime, regenerates AChE via dephosphorylation if given early. Must be coadministered with atropine to prevent transient worsening of symptoms. Pralidoxime does not readily cross BBB.' CNS EFFECTS: 'Respiratory depression, lethargy, seizures, coma.' — printed without its own reversal line, because the first tier's antidote carries it: atropine is the one that crosses the BBB.",
    why:
      "WHY IRREVERSIBLE IS THE WHOLE STORY. The same page's upper table lists the therapeutic anticholinesterases — donepezil, neostigmine, pyridostigmine, physostigmine — every one a REVERSIBLE breaker-blocker dosed to nudge '↑ ACh.'; the organophosphates are the same mechanism with the reversibility removed: they phosphorylate AChE itself, and the enzyme stays dead — which is why the antidote problem has two separate answers. You cannot rescue the dead enzyme with a receptor blocker alone, and you cannot shield every receptor with an enzyme restorer that arrives too late: ATROPINE works at the PLATE ('a competitive inhibitor' — it out-competes the flood of ACh at muscarinic receptors, and 'can cross BBB to relieve CNS symptoms', which is why the CNS row needs no reversal line of its own), while PRALIDOXIME works at the BREAKER ('regenerates AChE via dephosphorylation' — it strips the phosphoryl group off the poisoned enzyme itself, restoring the breaker where atropine cannot: the nicotinic NMJ). WHY THE TIMING RULE: the printed clause is 'if given early' — the mechanism behind it (KYP, not printed on this page) is AGING: over hours the phosphorylated enzyme loses its alkyl group, the bond becomes permanent, and dephosphorylation is no longer possible — pralidoxime must beat the clock. WHY THE DUO: pralidoxime alone 'transient worsen[s]' the picture (the printed reason it 'Must be coadministered with atropine'), and it 'does not readily cross BBB' — so the two antidotes are not interchangeable but COMPLEMENTARY, each covering the tier the other cannot reach. WHY THE TIERS STACK IN THIS ORDER: the poison spares no cholinergic address, so the overflow follows the receptor map of book 235 (PH12) — the muscarinic glands and smooth muscle (everything secretes and cramps: DUMBBELSS), the nicotinic NMJ (the muscles depolarize then fail, exactly the succinylcholine mechanism), and the central synapses (respiratory drive, alertness, seizure threshold).",
    keyIdea:
      "Read the page as a TIER → ANTIDOTE map (KYP compression of the three printed rows). TIER 1, MUSCARINIC — the WET tier: 'DUMBBELSS.' (Diarrhea, Urination, Miosis, Bronchospasm, Bradycardia, Emesis, Lacrimation, Sweating, Salivation — the book's own mnemonic, note the double-S: Sweating + Salivation) → ATROPINE, 'a competitive inhibitor' at the receptor (the plate). TIER 2, NICOTINIC — the MUSCLE tier: 'Neuromuscular blockade (mechanism similar to succinylcholine).' → PRALIDOXIME, 'regenerates AChE via dephosphorylation if given early' (the breaker — and the clock: before AGING makes the bond permanent; the aging mechanism is KYP-flagged, not printed). TIER 3, CNS — the BRAIN tier: 'Respiratory depression, lethargy, seizures, coma.' → ATROPINE AGAIN, because 'Atropine can cross BBB to relieve CNS symptoms' while 'Pralidoxime does not readily cross BBB.' Two riders on the duo: pralidoxime 'Must be coadministered with atropine to prevent transient worsening of symptoms.' (never alone), and the whole page is one exposure story — the farmer, the '-thion' insecticides (fenthion, parathion, malathion), and the wet patient (everything flowing: pupils small, heart slow, airways tight, glands pouring). One line: the wet farmer gets atropine to dry and pralidoxime early to unblock the breaker.",
  },
  mechanisms: [
    {
      id: "organophosphate-irreversible-ache-block",
      title:
        "The poison: organophosphates (fenthion, parathion, malathion — insecticides, the farmer's exposure) irreversibly inhibit AChE → acetylcholine accumulates at every cholinergic synapse → the three tiers overflow (muscarinic DUMBBELSS · nicotinic NMJ blockade · CNS depression)",
      context:
        "The section's intro pair and findings cells (book 239, lower portion), carried verbatim in the note's two table blocks. The overflow-tier reading (which organ fails in which order) is KYP's compression of the three printed row labels; every clause — the three organophosphate names, 'irreversibly inhibit AChE', the insecticide/farmer epidemiology, and all three findings cells — is the page's own print. The synapse being poisoned is the facing page's own (book 238, the completed autonomic-drugs topic): ACh → Cholinoreceptors → AChE → Choline + Acetate, with the breaker as the clearance step; the receptor families the tiers ride are book 235's own (PH12, acetylcholine-receptors).",
      flow: {
        nodes: [
          {
            id: "input",
            label: "The target: AChE, the breaker of the cholinergic synapse — the enzyme whose therapeutic inhibition the same page's upper table lists as '↑ ACh.'",
            sublabel:
              "Input — the cleft's clearance enzyme, drawn on book 238 as AChE → Choline + Acetate. The therapeutic -stigmines of the upper table inhibit it reversibly and dose-by-dose; the organophosphates of this lower section inhibit it irreversibly and all at once — the difference between a drug and a poison is the reversibility, and the page prints it as its own clause: 'irreversibly inhibit AChE.'",
            variant: "input",
          },
          {
            id: "block",
            label: "STEP 1 — PHOSPHORYLATE THE BREAKER: the organophosphate irreversibly inhibits AChE — the enzyme is dead, and the cleft's ACh is no longer cleared",
            sublabel:
              "The printed mechanism: 'Often due to organophosphates (eg, fenthion, parathion, malathion) that irreversibly inhibit AChE.' — phosphorylation of the enzyme's active site. All three printed agents are insecticides ('Organophosphates commonly used as insecticides'), which is why the printed patient is the farmer ('poisoning usually seen in farmers') — the exposure story the exam recycles. (KYP flag: the AGING step — the phosphoryl bond hardening over hours into a permanent, unregenerable state — is NOT printed on this page; it lives behind the 'if given early' clause of the treatment row.)",
            variant: "process",
          },
          {
            id: "accumulate",
            label: "STEP 2 — ACh FLOODS EVERY CHOLINERGIC SYNAPSE: muscarinic AND nicotinic AND central — every receptor the acetylcholine-receptor map of book 235 names",
            sublabel:
              "With the breaker dead, every quantum of acetylcholine the neuron releases lingers — the same '↑ ACh.' the therapeutic table prints as a benefit, pushed past the therapeutic window at every address at once: the glands and smooth muscle (muscarinic), the NMJ and the ganglia (nicotinic), and the brain (central synapses). One mechanism, every address — which is why the findings sort into three tiers and nothing is spared.",
            variant: "process",
          },
          {
            id: "tiers",
            label: "STEP 3 — THE THREE TIERS: MUSCARINIC ('DUMBBELSS.') · NICOTINIC ('Neuromuscular blockade (mechanism similar to succinylcholine).') · CNS ('Respiratory depression, lethargy, seizures, coma.')",
            sublabel:
              "The three printed rows as one overflow story (the tier order is KYP's reading of the page's own labels): MUSCARINIC — 'Diarrhea, Urination, Miosis, Bronchospasm, Bradycardia, Emesis, Lacrimation, Sweating, Salivation.' (the book's own acronym: 'DUMBBELSS.'); NICOTINIC — the NMJ fails, and the page names the comparator drug itself ('mechanism similar to succinylcholine' — depolarizing blockade); CNS — the brain tier: 'Respiratory depression, lethargy, seizures, coma.'",
            variant: "process",
          },
          {
            id: "output",
            label: "RESULT — the cholinergic toxidrome: everything secretes (the wet tier), then the muscles fail (the paralysis tier), then the brain fails (the coma tier) — the picture the two-antidote row answers",
            sublabel:
              "Output — the full syndrome: the wet patient (miosis, bronchorrhea/bronchospasm, bradycardia, GI cramping, sweating, salivation, lacrimation, emesis, diarrhea, urination) with fasciculations and weakness progressing to paralysis (respiratory failure is the killer), and lethargy → seizures → coma. The severity ladder is why the printed management is a DUO, not one drug — each tier needs its own answer (the next mechanism).",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "block", label: "the organophosphate finds the breaker" },
          { from: "block", to: "accumulate", label: "no clearance → ACh accumulates" },
          { from: "accumulate", to: "tiers", label: "every cholinergic address overflows" },
          { from: "tiers", to: "output", label: "glands → NMJ → brain, in cascade" },
        ],
      },
    },
    {
      id: "atropine-pralidoxime-duo",
      title:
        "The antidote duo: ATROPINE the competitive muscarinic blocker ('a competitive inhibitor' that 'can cross BBB to relieve CNS symptoms' — the muscarinic + CNS tiers) + PRALIDOXIME the AChE regenerator ('regenerates AChE via dephosphorylation if given early' — the nicotinic/NMJ tier; 'Must be coadministered with atropine to prevent transient worsening of symptoms'; 'Pralidoxime does not readily cross BBB')",
      context:
        "The two rows' high-yield cells (book 239, lower portion), carried verbatim in the note's second table block. The coverage map (who covers which tier) and the plate-vs-breaker framing are KYP's; all four antidote clauses, both BBB rules, and the coadministration rule are the page's own print. The AGING window behind 'if given early' is KYP-flagged (not printed — 'aging' appears nowhere in part 1).",
      flow: {
        nodes: [
          {
            id: "input",
            label: "The problem to reverse: a breaker phosphorylated shut (irreversible), a cleft flooding with ACh at every cholinergic address — muscarinic, nicotinic, and central",
            sublabel:
              "Input — the end state of the poison mechanism: the enzyme is dead (it can be regenerated only from the outside) AND the receptor flood is ongoing (it can be dammed only from the outside). Two different problems, two different drugs — the reason the printed management is a pair, and the reason the exam asks 'which drug covers which finding.'",
            variant: "input",
          },
          {
            id: "atropine",
            label: "STEP 1 — ATROPINE, THE SHIELD AT THE PLATE: 'Reversed by atropine, a competitive inhibitor.' — out-competes the ACh flood at muscarinic receptors; 'Atropine can cross BBB to relieve CNS symptoms.'",
            sublabel:
              "Atropine does nothing to the poison or the enzyme — it holds the muscarinic plate against the flood (receptor-level competition, the printed mechanism 'a competitive inhibitor'). The printed reach rule is why the CNS row needs no antidote of its own: 'Atropine can cross BBB to relieve CNS symptoms.' — the brain tier is covered by the same drug as the wet tier. (The full muscarinic-antagonist profile — atropine's own drug table — is the NEXT page, book 240, the pending Muscarinic antagonists topic.)",
            variant: "process",
          },
          {
            id: "pralidoxime",
            label: "STEP 2 — PRALIDOXIME, THE RESTORER OF THE BREAKER: 'regenerates AChE via dephosphorylation if given early' — strips the phosphoryl group off the poisoned enzyme itself; the timing rule: before AGING hardens the bond",
            sublabel:
              "Pralidoxime (2-PAM) is the only member of the duo that touches the enzyme: 'Reversed by pralidoxime, regenerates AChE via dephosphorylation if given early.' The printed clause 'if given early' IS the source's own timing rule — the mechanism behind it (KYP flag, not printed): AGING, the loss of the alkyl group from the phosphorylated enzyme over hours, after which the bond is permanent and dephosphorylation is impossible. This is the drug that rescues the NICOTINIC tier — the NMJ blockade atropine cannot touch — and it works only while the clock runs.",
            variant: "process",
          },
          {
            id: "duo",
            label: "STEP 3 — THE DUO RULES, BOTH PRINTED: 'Must be coadministered with atropine to prevent transient worsening of symptoms.' + 'Pralidoxime does not readily cross BBB.'",
            sublabel:
              "The two riders that make the pair non-interchangeable: (1) pralidoxime alone 'transiently worsens' the picture — the printed reason it 'Must be coadministered with atropine'; (2) 'Pralidoxime does not readily cross BBB.' — the printed mirror of atropine's crossing, and the reason the CNS tier stays atropine's job alone. Neither drug covers everything; together they cover all three tiers.",
            variant: "process",
          },
          {
            id: "output",
            label: "RESULT — the tiers covered: muscarinic + CNS by atropine (the plate shield, BBB-crossing), nicotinic/NMJ by early pralidoxime (the breaker restored) — the breaker regenerated only if the aging clock was beaten",
            sublabel:
              "Output — the two-antidote answer the exam wants, tier by tier: the secretions, miosis, bronchospasm, and bradycardia dry up under atropine (which also reaches the lethargy/seizures/coma tier through the BBB); the fasciculations-to-paralysis ladder comes down only as pralidoxime regenerates AChE at the NMJ — 'if given early' — and the pair must travel together (pralidoxime's transient worsening is prevented by atropine's shield). The residual limit, both printed: pralidoxime never reaches the CNS ('does not readily cross BBB'), so the brain tier rides on atropine alone.",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "atropine", label: "dam the plate first (the wet tier)" },
          { from: "atropine", to: "pralidoxime", label: "then restore the breaker (the NMJ tier)" },
          { from: "pralidoxime", to: "duo", label: "early — before aging; together — never alone" },
          { from: "duo", to: "output", label: "all three tiers covered, each by its own drug" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "anticholinesterase-poisoning-map",
      title: "The anticholinesterase-poisoning map (an original KYP visual)",
      caption:
        "An original KYP poison map conveying the section's three-row effect-tier table (book 239, lower portion): THE MECHANISM STRIP (the organophosphates fenthion/parathion/malathion — insecticides, the farmer — irreversibly phosphorylating AChE → ACh accumulating at every cholinergic synapse, with the AGING window flagged as KYP where it explains the printed 'if given early'); THE THREE TIER CARDS (MUSCARINIC — 'Diarrhea, Urination, Miosis, Bronchospasm, Bradycardia, Emesis, Lacrimation, Sweating, Salivation.' = the book's own 'DUMBBELSS.'; NICOTINIC — 'Neuromuscular blockade (mechanism similar to succinylcholine).'; CNS — 'Respiratory depression, lethargy, seizures, coma.'); THE TREATMENT DUO (ATROPINE — 'a competitive inhibitor' at the muscarinic plate, 'can cross BBB to relieve CNS symptoms', covering the muscarinic + CNS tiers; PRALIDOXIME — 'regenerates AChE via dephosphorylation if given early' [the aging-time window, KYP-flagged], 'Must be coadministered with atropine to prevent transient worsening of symptoms.', 'does not readily cross BBB', covering the nicotinic/NMJ tier); the NOT-PRINTED strip (carbamates, SLUDGE, nerve agents, ganglionic signs — census-flagged as absent); and the reading-rule + exclusions footer.",
      notice:
        "Census (pdfimages + text layer): the section's table is PURE TEXT with ZERO raster images on pdf 261 — COPYRIGHTED, never reproduced as artwork; this visual conveys the intro pair, the three row labels, the findings cells, and the antidote clauses as an ORIGINAL_KYP_ADAPTATION (every cell's content is the book's own; the tier-band layout, the mechanism strip, the aging flag, and the coverage map are KYP's). KYP extensions flagged on the map: the TIER-TRIAD reading, the AGING-TIME WINDOW (the aging mechanism is NOT printed — 'aging' appears nowhere in part 1), the DUAL-ANTIDOTE COVERAGE MAP (all clauses printed; the map KYP's), and the NOT-PRINTED drug layer (carbamates, SLUDGE, nerve agents, nicotinic-ganglionic signs — absent from the page, flagged, never cited as printed). EXCLUDED: the Cholinomimetic agents section on the SAME book-239 page ABOVE this section (the completed cholinomimetic-agents topic — its table ends with physostigmine, this section's mirror antidote), the completed autonomic-drugs section on pdf 260 behind (the synapse being poisoned), and the pending Muscarinic antagonists section on pdf 262 ahead (atropine's own drug page — this section does NOT extend to 262; verified).",
    },
    {
      kind: "table",
      title: "Book 239 — the poison itself: the intro pair, verbatim",
      intro:
        "The section's two prose lines, carried whole (each verbatim). They answer the three questions every poisoning stem opens with — the agent (three organophosphates, all '-thion' insecticides), the mechanism ('irreversibly inhibit AChE' — the reversibility distinction that separates this poison from the therapeutic -stigmines of the same page's upper table), and the patient (the farmer).",
      columns: [
        "THE CAUSES (book 239, verbatim)",
        "THE SETTING (book 239, verbatim)",
      ],
      rows: [
        [
          "Often due to organophosphates (eg, fenthion, parathion, malathion) that irreversibly inhibit AChE.",
          "Organophosphates commonly used as insecticides; poisoning usually seen in farmers.",
        ],
      ],
      caption:
        "Three printed organophosphates, all ending in '-thion' (fenthion, parathion, malathion — a rhyme of the book's own naming, KYP-noted), all insecticides, and one printed patient: the farmer. The clause 'irreversibly inhibit AChE' is the page's own irreversibility rule — the same enzyme the upper table's donepezil/neostigmine/pyridostigmine/physostigmine inhibit reversibly and dose-by-dose (the therapeutic-poison mirror on one page). NOT printed (census-flagged): 'carbamate' appears nowhere in part 1 — the reversible, non-aging insecticide cousins are absent from the page, as are nerve agents (sarin, VX) and the alternative mnemonic SLUDGE.",
    },
    {
      kind: "table",
      title: "Book 239 — the three effect-tier rows, verbatim",
      intro:
        "The section's table, carried whole: three row labels (the effect tiers), each with its findings cell and its high-yield/reversal cell verbatim. The CNS row is printed WITHOUT its own reversal line — atropine's printed BBB crossing two rows above is its cover.",
      columns: [
        "EFFECT TIER (book 239)",
        "FINDINGS (book 239, verbatim)",
        "REVERSAL / HIGH-YIELD (book 239, verbatim)",
      ],
      rows: [
        [
          "Muscarinic effects",
          "Diarrhea, Urination, Miosis, Bronchospasm, Bradycardia, Emesis, Lacrimation, Sweating, Salivation.",
          "DUMBBELSS. Reversed by atropine, a competitive inhibitor. Atropine can cross BBB to relieve CNS symptoms.",
        ],
        [
          "Nicotinic effects",
          "Neuromuscular blockade (mechanism similar to succinylcholine).",
          "Reversed by pralidoxime, regenerates AChE via dephosphorylation if given early. Must be coadministered with atropine to prevent transient worsening of symptoms. Pralidoxime does not readily cross BBB.",
        ],
        [
          "CNS effects",
          "Respiratory depression, lethargy, seizures, coma.",
          "— (no reversal line printed for this row; the cover is atropine's own printed clause: 'Atropine can cross BBB to relieve CNS symptoms.')",
        ],
      ],
      caption:
        "The page's whole treatment logic in one grid: the muscarinic tier's antidote is atropine ('a competitive inhibitor' — the plate), the nicotinic tier's antidote is pralidoxime ('regenerates AChE via dephosphorylation' — the breaker; 'if given early' — the timing rule, whose AGING mechanism is not printed and is flagged KYP), and the CNS tier rides atropine's BBB crossing ('Atropine can cross BBB to relieve CNS symptoms.' vs 'Pralidoxime does not readily cross BBB.'). The printed mnemonic 'DUMBBELSS.' is the book's own (double-S: Sweating + Salivation — the source spells it DUMBBELSS, not the single-S DUMBBELLS). The nicotinic row names its own comparator: 'mechanism similar to succinylcholine' — the depolarizing-blockade kinship the exam cross-references.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem:
          "A 52-year-old farmworker is brought to the emergency department 2 hours after spraying crops on a windless day; he is diaphoretic and salivating, with pinpoint pupils, wheezing, hyperactive bowel sounds, vomiting, and a heart rate of 38. A pharmacology question asks for the diagnosis and the mechanism of the poison.",
        discriminator:
          "The printed exposure pair and the wet tier: the '-thion' insecticides (fenthion, parathion, malathion) 'irreversibly inhibit AChE', and the printed muscarinic findings list — 'Diarrhea, Urination, Miosis, Bronchospasm, Bradycardia, Emesis, Lacrimation, Sweating, Salivation.' — is the stem itself, in the book's own 'DUMBBELSS.' order",
        concept:
          "Organophosphate (anticholinesterase) poisoning — irreversible AChE inhibition → ACh accumulation → the cholinergic toxidrome",
        answer:
          "The diagnosis is anticholinesterase poisoning by an organophosphate insecticide: 'Often due to organophosphates (eg, fenthion, parathion, malathion) that irreversibly inhibit AChE. Organophosphates commonly used as insecticides; poisoning usually seen in farmers.' — the mechanism is the irreversible phosphorylation of acetylcholinesterase, so every released quantum of ACh lingers at every cholinergic synapse: the muscarinic tier drenches the patient ('DUMBBELSS.' — the book's own acronym for the nine printed findings), the nicotinic tier heads for the NMJ ('Neuromuscular blockade (mechanism similar to succinylcholine).'), and the CNS tier depresses ('Respiratory depression, lethargy, seizures, coma.'). The exam's next move is always the antidote pair — the tier-coverage question (pattern 2) or the timing/coadministration rule (pattern 3).",
      },
      {
        stem:
          "The same farmworker is fasciculating and growing weak — grip strength fading, respiratory effort shallowing — while his secretions are drying under the first antidote. A question asks which additional drug reverses the neuromuscular findings, and by what mechanism.",
        discriminator:
          "The printed tier split: the muscarinic tier's antidote is atropine ('a competitive inhibitor'), but the nicotinic row prints its own: 'Reversed by pralidoxime, regenerates AChE via dephosphorylation if given early.' — the only printed drug that touches the poisoned enzyme itself",
        concept:
          "Pralidoxime — the AChE regenerator for the nicotinic (NMJ) tier: dephosphorylation of the poisoned enzyme, given early",
        answer:
          "Pralidoxime: 'Reversed by pralidoxime, regenerates AChE via dephosphorylation if given early.' — while atropine only dams the muscarinic plate (it cannot touch the NMJ, a nicotinic address), pralidoxime restores the breaker itself: it strips the phosphoryl group off the poisoned acetylcholinesterase and the cleft's clearance returns — which is why the muscle tier (fasciculations → blockade, 'mechanism similar to succinylcholine') is pralidoxime's tier. The exam's discriminating clauses, all printed: 'if given early' (the timing rule — the aging window behind it is KYP-flagged, not printed), 'Must be coadministered with atropine to prevent transient worsening of symptoms.', and 'Pralidoxime does not readily cross BBB.' (the CNS tier stays atropine's job).",
      },
      {
        stem:
          "An emergency-department question gives a farmer with confirmed organophosphate poisoning a list of management orders and asks which order is wrong — or asks, directly, why the restorative antidote is ordered together with the receptor blocker, and why the order says 'give immediately'.",
        discriminator:
          "The two printed riders on the duo: 'Must be coadministered with atropine to prevent transient worsening of symptoms.' and 'if given early' — the coadministration rule and the source's own timing rule, both in the nicotinic row's high-yield cell",
        concept:
          "The duo rules — pralidoxime never travels alone (transient worsening) and never travels late (the 'if given early' clock)",
        answer:
          "The wrong orders are pralidoxime alone and pralidoxime late. ALONE is printed as harmful: 'Must be coadministered with atropine to prevent transient worsening of symptoms.' — pralidoxime without the atropine shield transiently worsens the picture, so the pair is ordered together. LATE defeats the mechanism: 'regenerates AChE via dephosphorylation if given early' — the printed timing rule. The mechanism behind the clock (KYP flag, not printed on this page): AGING — over hours the phosphorylated enzyme loses its alkyl group, the bond becomes permanent, and dephosphorylation can no longer regenerate the enzyme; pralidoxime given after aging is useless. The third printed rider completes the rule set: 'Pralidoxime does not readily cross BBB.' — no matter how early, it never covers the CNS tier; atropine does ('Atropine can cross BBB to relieve CNS symptoms.').",
      },
    ],
    traps: [
      {
        a: "The cholinergic toxidrome and the anticholinergic toxidrome are both 'autonomic poisonings', so their pictures overlap and either antidote pair works for both — and the pupil, the heart rate, and the skin are unreliable discriminators",
        b: "Blurring the two opposite toxidromes because both present with altered mental status and GI symptoms, instead of sorting them on the printed direction of every organ system",
        whyConfused:
          "Both syndromes are on the same book-239 page in mirror form (the upper table's physostigmine is the anticholinergic antidote; this section is the cholinergic story), both can show delirium/coma, and the nicotinic-ganglionic signs that would confuse the pupil and heart rate are NOT printed on this page",
        keyDifference:
          "The mirror (KYP frame on the page's own two halves): cholinergic = WET — 'DUMBBELSS.' (miosis, bradycardia, bronchospasm/bronchorrhea, sweating, salivation, lacrimation, diarrhea, emesis, urination); anticholinergic = DRY — hot, dry, flushed, dilated, tachycardic, delirious, retaining (the physostigmine row's own territory: 'Antidote for anticholinergic toxicity; physostigmine \"phyxes\" atropine overdose.'). The pupils and the skin are the fastest sort: small-and-soaking = cholinergic (atropine + pralidoxime); large-and-dry = anticholinergic (physostigmine). Census flag (not printed): the nicotinic-GANGLIONIC signs (mydriasis, tachycardia, hypertension) can OVERRIDE the muscarinic picture in real organophosphate poisoning and fool the sort — absent from the printed page, never cited as printed.",
        clue:
          "Wet or dry, first and always — then the pupils (miosis vs mydriasis) and the skin (sweating vs dry) confirm the direction. A stem that pairs secretions with an exposure history (farmer, insecticide, 'spraying crops') is the cholinergic pole; a stem that pairs dryness with an antihistamine or plant ingestion is the other.",
      },
      {
        a: "Atropine is 'the antidote' for organophosphate poisoning, so a single large dose of atropine is complete therapy — the muscle weakness and the respiratory failure will also respond",
        b: "Stopping at the first printed antidote and missing the printed tier split: atropine is the MUSCARINIC tier's answer only — the nicotinic row has its own drug",
        whyConfused:
          "Atropine is named first, visibly dries the patient, and is the drug everyone associates with the toxidrome; the NMJ findings (fasciculations, weakness) look like 'toxicity in general' rather than a separate uncovered tier",
        keyDifference:
          "The printed coverage map (KYP frame on the two rows' own cells): atropine is 'a competitive inhibitor' — receptor-level, muscarinic-only, and it 'can cross BBB to relieve CNS symptoms' (so the CNS tier is ALSO atropine's). The nicotinic tier — 'Neuromuscular blockade (mechanism similar to succinylcholine).' — needs the drug that touches the enzyme: 'Reversed by pralidoxime, regenerates AChE via dephosphorylation if given early.' A patient drying under atropine can still die of respiratory muscle paralysis; the printed pair is a pair because neither half covers the other's tier.",
        clue:
          "Any organophosphate stem that mentions muscle findings (fasciculations, weakness, respiratory effort declining) is asking for pralidoxime; any stem that mentions secretions/miosis/bradycardia/CNS symptoms is asking for atropine; the full-management answer is always the duo.",
      },
      {
        a: "Pralidoxime regenerates the enzyme, so it can be given after decontamination and workup are complete — and it can replace atropine, since restoring AChE fixes everything upstream",
        b: "Reading 'regenerates AChE' as a timeless property and missing the two printed riders: the clock ('if given early') and the companion ('Must be coadministered with atropine to prevent transient worsening of symptoms.')",
        whyConfused:
          "'Regenerates AChE via dephosphorylation' sounds permanent and complete — a one-time molecular repair — and the transient-worsening clause prints as a footnote inside a crowded cell; the aging mechanism behind the clock is not printed at all",
        keyDifference:
          "Both riders are printed: (1) TIMING — 'if given early': the dephosphorylation works only on the fresh phosphoryl-enzyme bond; the aging mechanism (KYP flag, not printed) — loss of the alkyl group over hours, hardening the bond into a permanent, unregenerable state — makes pralidoxime useless once the enzyme has aged; (2) COMPANY — 'Must be coadministered with atropine to prevent transient worsening of symptoms.': pralidoxime alone transiently worsens the picture, so it travels inside the atropine shield. And the third clause bounds its reach: 'Pralidoxime does not readily cross BBB.' — the brain tier is never pralidoxime's job.",
        clue:
          "The word EARLY in any pralidoxime answer choice is doing real work — it is the source's own timing rule. A stem that stages the case hours after exposure ('presents the next morning') is testing the aging window; a management list with pralidoxime but no atropine is the trap.",
      },
      {
        a: "A patient on chronic therapy for myasthenia gravis who presents with worsening weakness has myasthenic crisis — and a farmer with organophosphate poisoning who presents with weakness has the same thing, so both get more cholinergic stimulation",
        b: "Reading 'weakness' as one disease, and missing that excess ACh at the NMJ paralyzes exactly as too little ACh does — the printed 'mechanism similar to succinylcholine' is the bridge",
        whyConfused:
          "Both cholinergic crisis and myasthenic crisis present with weakness and fatigability; the therapeutic AChE inhibitors (pyridostigmine — the same page's upper table) and the poisoning (this section) share the enzyme target, so the mechanism families blur",
        keyDifference:
          "The printed comparator resolves it: 'Neuromuscular blockade (mechanism similar to succinylcholine).' — sustained depolarization of the NMJ ends in blockade, so ACh EXCESS paralyzes (cholinergic crisis) just as ACh DEFICIENCY does (myasthenic crisis). The sort is the rest of the toxidrome: the cholinergic-crisis patient is WET ('DUMBBELSS.' — the secretions, miosis, bronchospasm, bradycardia the myasthenic patient lacks); the myasthenic patient is dry between crises. The exam's composite: a myasthenic patient over-treated with pyridostigmine (the same page's upper-table drug, whose printed co-therapy glycopyrrolate/hyoscyamine exists precisely to blunt its muscarinic excess) can tip into the wet picture — more -stigmine is then the wrong answer, and the printed pair (atropine ± pralidoxime) is the frame.",
        clue:
          "Weakness WITH wetness = cholinergic (excess — the poison side); weakness WITHOUT wetness = myasthenic (deficit — the antibody side). Any 'weakness' stem that also mentions salivation, sweating, miosis, or bradycardia is pointing at the cholinergic pole.",
      },
    ],
    pivots: [
      {
        lookAlike: "Any 'wet' patient with an exposure history — the farmer who sprayed crops, the child who touched the garden chemical, the worker with soaked clothing — presenting with combinations of pinpoint pupils, wheezing, bradycardia, GI cramping, and secretions, and asking first for the toxidrome sort and then the antidotes",
        differentiator:
          "Sort WET vs DRY first (KYP mirror on the page's own two halves), then run the printed tier list: WET + miosis + bradycardia + bronchospasm + secretions = the cholinergic pole ('DUMBBELSS.'); the exposure story ('Organophosphates commonly used as insecticides; poisoning usually seen in farmers.') names the agent class ('irreversibly inhibit AChE')",
        correctPath:
          "(1) Confirm the wet direction (miosis, diaphoresis, salivation, bronchorrhea, hyperactive bowel sounds, bradycardia) — the dry mirror (mydriasis, anhidrosis, tachycardia, urinary retention) sorts to the anticholinergic pole and physostigmine, the upper table's own antidote. (2) Name the mechanism: irreversible AChE inhibition → ACh accumulation at muscarinic, nicotinic, and central synapses. (3) Sort the findings into the three printed tiers (muscarinic = the wet list; nicotinic = fasciculations/weakness/blockade; CNS = respiratory depression, lethargy, seizures, coma) — the tier list IS the treatment map. (4) Order the duo by tier coverage: atropine for the muscarinic + CNS tiers ('a competitive inhibitor', 'can cross BBB'), pralidoxime early for the nicotinic/NMJ tier ('regenerates AChE via dephosphorylation if given early'). (5) Never uncouple the pair: 'Must be coadministered with atropine to prevent transient worsening of symptoms.'",
      },
      {
        lookAlike: "Any 'which antidote / which property / why this drug' question on the treatment row — 'what is the mechanism of pralidoxime', 'why is atropine given with it', 'which antidote reaches the CNS', 'why must pralidoxime be given early' — asking the coverage map at the level of the drug rather than the patient",
        differentiator:
          "The PLATE-vs-BREAKER sort (KYP frame on the two printed mechanisms): atropine works at the receptor ('a competitive inhibitor' — the plate) and crosses the BBB; pralidoxime works at the enzyme ('regenerates AChE via dephosphorylation' — the breaker), does not readily cross the BBB, and only beats the clock",
        correctPath:
          "(1) Identify which printed clause the stem is testing: 'a competitive inhibitor' (atropine, receptor-level), 'regenerates AChE via dephosphorylation' (pralidoxime, enzyme-level), 'Atropine can cross BBB to relieve CNS symptoms.' vs 'Pralidoxime does not readily cross BBB.' (the reach pair), 'Must be coadministered with atropine...' (the duo rule), 'if given early' (the timing rule). (2) Map the clause to its tier: muscarinic → atropine; CNS → atropine (BBB crossing); nicotinic/NMJ → pralidoxime. (3) For timing stems, deploy the aging window (KYP flag, not printed): the phosphoryl-enzyme bond ages over hours — alkyl group lost, bond permanent, regeneration impossible — so pralidoxime must precede aging. (4) For 'why together' stems, quote the printed transient-worsening clause — pralidoxime alone destabilizes, atropine shields. (5) For distractors, sort the wrong answers by their own page addresses: physostigmine (the upper table's anticholinergic antidote — an AChE inhibitor here, exactly wrong), neostigmine/pyridostigmine (therapeutic AChE inhibitors — they add to the flood), and plain supportive care (the tiers keep progressing).",
      },
    ],
    miniCase: {
      vignette:
        "A 47-year-old farmworker is found sitting against his truck an hour after hand-spraying an insecticide along a windless fence line; his clothing is soaked with sweat, he is drooling and tearful, and he has vomited twice and soiled himself. Vital signs: heart rate 34, respirations 22 and shallow with diffuse wheezing, temperature normal. His pupils are 2 mm and reactive, bowel sounds are hyperactive, and he has diffuse muscle fasciculations with a fading grip. He grows lethargic between sentences. The team intubates for airway protection and orders the antidotes.",
      question:
        "Which antidote pair is ordered, and which printed clause explains why the second drug must travel with the first — and be given now rather than after transfer?",
      options: [
        {
          label:
            "Atropine plus pralidoxime, together and immediately — atropine as 'a competitive inhibitor' at the muscarinic receptor (drying the secretions, lifting the bradycardia and bronchospasm) and reaching the brain ('Atropine can cross BBB to relieve CNS symptoms.'); pralidoxime to 'regenerat[e] AChE via dephosphorylation if given early' — restoring the poisoned enzyme at the neuromuscular junction before the bond ages.",
          text: "Atropine + pralidoxime, coadministered, pralidoxime early.",
          correct: true,
          why:
            "Correct on every count, and every clause is the page's own print (book 239, the muscarinic and nicotinic rows' high-yield cells): the patient has all three tiers — the wet tier ('DUMBBELSS.': Diarrhea, Urination, Miosis, Bronchospasm, Bradycardia, Emesis, Lacrimation, Sweating, Salivation), the muscle tier (fasciculations and fading grip — 'Neuromuscular blockade (mechanism similar to succinylcholine).'), and the brain tier (lethargy heading toward 'Respiratory depression, lethargy, seizures, coma.'). Atropine covers tiers 1 and 3 (receptor-level competition, BBB crossing — both printed); pralidoxime covers tier 2 (enzyme-level regeneration — printed), and the two printed riders explain the order's wording: 'Must be coadministered with atropine to prevent transient worsening of symptoms.' (the pair is inseparable) and 'if given early' (the clock: the aging window that makes dephosphorylation impossible is the KYP-flagged mechanism behind the printed clause).",
        },
        {
          label:
            "Atropine alone, titrated to drying of the secretions — rationale: atropine is the specific organophosphate antidote, and once the bronchorrhea and bradycardia resolve the patient can be observed for the weakness to clear as the insecticide is metabolized.",
          text: "Atropine alone, titrated to drying.",
          why:
            "The half-pair trap: atropine is genuinely the printed answer for this patient's wet tier ('Reversed by atropine, a competitive inhibitor.') and CNS tier ('Atropine can cross BBB to relieve CNS symptoms.') — but the muscle tier is printed with its OWN antidote: 'Neuromuscular blockade (mechanism similar to succinylcholine).' is 'Reversed by pralidoxime, regenerates AChE via dephosphorylation if given early.' A patient drying under atropine can still descend into respiratory-muscle paralysis; 'observed for the weakness to clear' is the exact failure the printed pair exists to prevent. The stem's fasciculations and fading grip are the uncovered tier.",
        },
        {
          label:
            "Pralidoxime alone, as a loading dose followed by infusion — rationale: regenerating acetylcholinesterase fixes the upstream lesion, so the muscarinic, nicotinic, and CNS findings will all resolve together as the enzyme returns, without adding a second drug.",
          text: "Pralidoxime alone — fix the enzyme, fix everything.",
          why:
            "The upstream-fix trap, refuted by two printed clauses: pralidoxime 'Must be coadministered with atropine to prevent transient worsening of symptoms.' — alone, it transiently WORSENS the picture, which in a heart-rate-34, wheezing, comatosing patient is a dangerous experiment; and 'Pralidoxime does not readily cross BBB.' — the brain tier (this patient's deepening lethargy) would remain uncovered even as the enzyme returns peripherally. The exam's phrasing for this trap is always 'which additional medication must accompany it' — the printed coadministration clause is the answer's own words.",
        },
        {
          label:
            "Physostigmine, as the antidote for autonomic-poisoning delirium — rationale: it is the same page's own antidote line ('Antidote for anticholinergic toxicity; physostigmine \"phyxes\" atropine overdose.'), and this patient's secretions and depressed mental status make him the autonomic-poisoning patient that drug exists for.",
          text: "Physostigmine — the same page's antidote.",
          why:
            "The mirror-page trap: physostigmine is printed on the SAME book-239 page, one section above — as the antidote for the OPPOSITE toxidrome (anticholinergic: the dry, dilated, tachycardic patient). Physostigmine is itself an acetylcholinesterase inhibitor ('↑ ACh.') — in an organophosphate-poisoned patient whose enzyme is already phosphorylated dead, adding another AChE inhibitor deepens the flood: more secretions, more bronchospasm, more blockade. The wet/dry sort (KYP mirror on the page's two halves) is the discriminator: this patient is soaking (sweat, saliva, tears, stool), miotic, and bradycardic — the cholinergic pole, whose printed antidotes are atropine + pralidoxime, never an AChE inhibitor.",
        },
        {
          label:
            "Neostigmine with glycopyrrolate — rationale: neostigmine is the neuromuscular workhorse from the same page's table (its applications include myasthenia gravis and neuromuscular-junction blockade reversal), and glycopyrrolate is the antimuscarinic printed to control its adverse effects; together they address the weakness and the secretions in one paired order.",
          text: "Neostigmine + glycopyrrolate — the therapeutic pair.",
          why:
            "The wrong-page pairing, assembled from the SAME book-239 page's upper table: neostigmine is a THERAPEUTIC AChE inhibitor ('↑ ACh.') for weak synapses that need more signal — in this patient the signal is already flooding because the breaker is dead; more AChE inhibition (neostigmine's mechanism) adds to the poisoning. Glycopyrrolate, the printed co-therapy of the pyridostigmine row, at least points at the right TARGET (muscarinic blockade — it is atropine's quaternary cousin from the next page's table), but pairing it with an enzyme inhibitor reverses the logic of the printed duo: the correct pair is the antimuscarinic (atropine) WITH the enzyme regenerator (pralidoxime), never with another enzyme inhibitor.",
        },
      ],
      reasoning:
        "The vignette is the whole page played as one resuscitation. (1) THE EXPOSURE — a farmer, hand-spraying an insecticide on a windless day: the printed epidemiology verbatim ('Organophosphates commonly used as insecticides; poisoning usually seen in farmers.'), and the mechanism the page attaches to it ('Often due to organophosphates (eg, fenthion, parathion, malathion) that irreversibly inhibit AChE.'). (2) THE THREE TIERS, all present — the wet tier in the book's own order ('Diarrhea, Urination, Miosis, Bronchospasm, Bradycardia, Emesis, Lacrimation, Sweating, Salivation.' — this stem uses nearly every letter), the muscle tier (fasciculations, fading grip — 'Neuromuscular blockade (mechanism similar to succinylcholine).'), and the brain tier (lethargy between sentences, shallow respirations — 'Respiratory depression, lethargy, seizures, coma.' opening). (3) THE PAIR — atropine for tiers 1 and 3 ('a competitive inhibitor'; 'Atropine can cross BBB to relieve CNS symptoms.'), pralidoxime for tier 2 ('regenerates AChE via dephosphorylation if given early'). (4) THE TWO RIDERS the question asks about — the coadministration clause ('Must be coadministered with atropine to prevent transient worsening of symptoms.' — why option 3 fails) and the timing clause ('if given early' — why 'immediately' is in the order; the aging mechanism behind it is KYP-flagged, not printed). (5) THE DISTRACTORS each borrow a neighboring printed row: atropine alone (the half-pair — leaves the NMJ uncovered), pralidoxime alone (transient worsening + no CNS reach), physostigmine (the same page's mirror antidote — an AChE inhibitor, exactly wrong here), and neostigmine + glycopyrrolate (the upper table's therapeutic pair recombined — an enzyme inhibitor plus its antimuscarinic cover, the duo logic inverted). The discriminator to carry: wet farmer, three tiers, two antidotes — atropine the plate-shield that crosses the BBB, pralidoxime the breaker-restorer that beats the clock, inseparable by the printed coadministration rule.",
    },
  },
  mnemonics: [
    {
      code: "DUMBBELSS — the book's OWN mnemonic, printed verbatim (book 239): Diarrhea, Urination, Miosis, Bronchospasm, Bradycardia, Emesis, Lacrimation, Sweating, Salivation",
      meaning:
        "The source's own acronym for the muscarinic tier of the cholinergic toxidrome, quoted from the page's own high-yield cell — NOTE the double-S spelling the book prints ('DUMBBELSS.', not the single-S 'DUMBBELLS'): Sweating AND Salivation are separate letters, so the mnemonic spells its own nine-item findings list in order. Everything on the list is a muscarinic address overflowing: gut (Diarrhea, Emesis), bladder (Urination), eye (Miosis, Lacrimation), airway (Bronchospasm), heart (Bradycardia), skin (Sweating), and glands (Salivation) — the wet picture in one word.",
      memorizes: "The nine printed muscarinic findings of anticholinesterase poisoning, in the book's own letter order",
      whenToUse:
        "Any wet-patient stem (farmer, insecticide, nerve-agent setting): recite DUMBBELSS to confirm the cholinergic pole, then ask which tier each finding belongs to (all nine are muscarinic — miosis and bradycardia are the fastest two to check at the bedside); the reverse use: any question listing secretions + miosis + bradycardia is asking for the organophosphate diagnosis",
      clinical:
        "The bedside wet check: pupils (Miosis — small), lungs (Bronchospasm — wheeze, and the bronchorrhea that comes with it), heart (Bradycardia — slow), gut (Diarrhea, Emesis — cramping and vomiting), glands (Lacrimation, Salivation, Sweating — pouring), bladder (Urination — incontinence). All nine reverse under atropine — 'Reversed by atropine, a competitive inhibitor.' — which is the clinical endpoint of dosing (dry the patient), while pralidoxime handles the tier this mnemonic does not cover (the NMJ).",
    },
    {
      code: "WET vs DRY — THE MIRROR (KYP): the cholinergic patient is WET (everything flows — pupils small, heart slow, glands pouring, gut cramping); the anticholinergic patient is DRY (hot, dry, dilated, fast, delirious, retaining)",
      meaning:
        "The KYP mirror frame built on the page's own two halves: book 239's upper table ends with physostigmine, the ANTICHOLINERGIC-toxicity antidote ('physostigmine \"phyxes\" atropine overdose.'), and its lower section (this topic) is the CHOLINERGIC-toxicity story whose printed antidotes are atropine + pralidoxime — the two opposite toxidromes on one page. Sort every autonomic-poisoning stem on the direction of flow: secretions, pupil size, heart rate, bowel sounds, bladder. (Census flag, not printed: the nicotinic-GANGLIONIC signs — mydriasis, tachycardia, hypertension — can override the wet picture in real organophosphate poisoning; absent from the page, never cited as printed.)",
      memorizes: "Which autonomic toxidrome the stem is describing, and therefore which antidote story applies (atropine + pralidoxime vs physostigmine)",
      whenToUse:
        "Any poisoned-or-overdosed stem with autonomic signs — sort wet/dry before naming any drug: WET (sweating, salivation, miosis, bradycardia, hyperactive bowel sounds) = cholinergic → atropine + pralidoxime (this page); DRY (anhidrosis, mydriasis, tachycardia, ileus, urinary retention, delirium) = anticholinergic → physostigmine (the page above)",
      clinical:
        "The exam's mirror pairs: miosis vs mydriasis, bronchorrhea/bronchospasm vs dry hot skin, bradycardia vs tachycardia, diarrhea/cramping vs ileus/retention, coma vs delirium — same alphabet of organs, opposite arrows. The antidotes mirror too: the wet patient gets an antimuscarinic (atropine), the dry patient gets a muscarinic amplifier (physostigmine — an AChE inhibitor, which is why it would be catastrophic in the wet patient).",
    },
    {
      code: "ATROPINE SHIELDS THE PLATE · PRALIDOXIME SPARES THE BREAKER (KYP, on the printed clauses): atropine = 'a competitive inhibitor' at the muscarinic receptor + crosses the BBB; pralidoxime = 'regenerates AChE via dephosphorylation' at the enzyme itself + 'does not readily cross BBB' + rides WITH atropine, EARLY",
      meaning:
        "The KYP compression of the page's own treatment clauses into one coverage map: the PLATE is the muscarinic receptor (atropine's worksite — receptor-level competition, the printed 'a competitive inhibitor'; its reach is the brain too, the printed 'Atropine can cross BBB to relieve CNS symptoms.'), and the BREAKER is the acetylcholinesterase the poison phosphorylated (pralidoxime's worksite — enzyme-level regeneration, the printed 'regenerates AChE via dephosphorylation'; its limits are printed too: 'if given early', 'Must be coadministered with atropine...', and 'does not readily cross BBB'). Two drugs, two worksites, three tiers covered between them: muscarinic + CNS = the shield; nicotinic/NMJ = the restorer.",
      memorizes: "Which antidote covers which tier, by worksite — and the three riders (early, together, no CNS reach for pralidoxime)",
      whenToUse:
        "Any 'mechanism of the antidote', 'which drug for which finding', or 'why are both given' question on the treatment row — and any management-order stem that pairs, separates, or delays the two drugs; also the reverse: a choice that gives pralidoxime alone, late, or for the CNS tier is the trap",
      clinical:
        "Atropine titrated to the muscarinic endpoints (drying of secretions, heart rate rising, bronchospasm easing — and reaching the lethargy/seizures tier through the BBB), with pralidoxime alongside for the muscle tier (fasciculations and strength recovering as the enzyme regenerates) — ordered immediately ('if given early' — before the aging window closes, KYP-flagged) and inseparably (the printed transient-worsening clause). Neither drug alone is the answer; the exam's correct order is always the pair.",
    },
    {
      code: "THE -THION TRIO + THE FARMER (KYP, on the printed names): fenthion, parathion, malathion — the three printed organophosphates all end in '-thion'; they are insecticides, so think of the farmer spraying",
      meaning:
        "The KYP rhyme built on the page's own three printed agent names — fenthion, parathion, malathion, every one ending in '-thion' (the book names them inside one clause: 'Often due to organophosphates (eg, fenthion, parathion, malathion) that irreversibly inhibit AChE.') — paired with the printed epidemiology line ('Organophosphates commonly used as insecticides; poisoning usually seen in farmers.'). The rhyme does double duty: it recalls the agent class for any insecticide-exposure stem, and it flags the mechanism word the clause carries — 'irreversibly' — the property that separates these poisons from the reversible -stigmine drugs on the same page above.",
      memorizes: "The three named organophosphates and the exposure story (insecticides → the farmer) that opens the classic stem",
      whenToUse:
        "Any stem naming an insecticide, a crop-dusting or spraying scenario, or a farm worker with a wet toxidrome — confirm the agent class by the '-thion' ending (or by 'organophosphate' in the stem), then move straight to the tier list and the antidote pair; also the spelling-sort use: a stem naming a '-stigmine' drug as the EXPOSURE is the therapeutic-poisoning variant (an overdose of the upper table's drugs can produce the same toxidrome)",
      clinical:
        "The classic presentation the rhyme anchors: a farmer (or gardener, or crop-duster pilot) with skin and clothing soaked after spraying on a windless day, presenting within hours with the wet tier (DUMBBELSS), progressing to fasciculations and weakness (the nicotinic tier) and lethargy (the CNS tier) — decontaminate (remove the clothing, wash the skin), then the printed pair: atropine + pralidoxime early, together. (Census flag, not printed: carbamates — the reversible insecticide cousins whose name appears nowhere in part 1 — present with the same wet picture; flag them as not printed, never cite them as this page's content.)",
    },
  ],
  rapidReview: {
    s30: [
      "'Anticholinesterase poisoning' — the section header; the LOWER portion of book 239, below the Cholinomimetic agents table (the same page's upper section, EXCLUDED — the completed cholinomimetic-agents topic), under the standing PHARMACOLOGY—AUTONOMIC DRUGS banner.",
      "The intro pair, verbatim: 'Often due to organophosphates (eg, fenthion, parathion, malathion) that irreversibly inhibit AChE.' + 'Organophosphates commonly used as insecticides; poisoning usually seen in farmers.'",
      "The table frame: three effect-tier rows — 'Muscarinic effects', 'Nicotinic effects', 'CNS effects' — each with a findings cell and a reversal/high-yield cell; the CNS row prints WITHOUT its own reversal line.",
      "Muscarinic effects, verbatim: 'Diarrhea, Urination, Miosis, Bronchospasm, Bradycardia, Emesis, Lacrimation, Sweating, Salivation.'",
      "The book's own mnemonic, verbatim: 'DUMBBELSS.' (double-S — Sweating + Salivation; the source's own spelling, not the single-S DUMBBELLS).",
      "The muscarinic reversal, verbatim: 'Reversed by atropine, a competitive inhibitor.' + 'Atropine can cross BBB to relieve CNS symptoms.'",
      "Nicotinic effects, verbatim: 'Neuromuscular blockade (mechanism similar to succinylcholine).'",
      "The nicotinic reversal, verbatim: 'Reversed by pralidoxime, regenerates AChE via dephosphorylation if given early.'",
      "The duo riders, verbatim: 'Must be coadministered with atropine to prevent transient worsening of symptoms.' + 'Pralidoxime does not readily cross BBB.'",
      "CNS effects, verbatim: 'Respiratory depression, lethargy, seizures, coma.' — covered by atropine's printed BBB crossing, not by pralidoxime.",
    ],
    m3: [
      "DUMBBELSS (the book's own) — the wet tier: Diarrhea, Urination, Miosis, Bronchospasm, Bradycardia, Emesis, Lacrimation, Sweating, Salivation → atropine, 'a competitive inhibitor' that 'can cross BBB'.",
      "ATROPINE SHIELDS THE PLATE · PRALIDOXIME SPARES THE BREAKER — atropine = muscarinic + CNS tiers; pralidoxime = the nicotinic/NMJ tier, 'regenerates AChE via dephosphorylation if given early', rides WITH atropine, never reaches the CNS.",
      "THE -THION TRIO + THE FARMER — fenthion, parathion, malathion (insecticides, 'irreversibly inhibit AChE'); WET vs DRY sorts the mirror toxidromes of the one page (this section's atropine+pralidoxime vs physostigmine's row above).",
    ],
    m10: [
      "The whole page in one breath: one exposure (organophosphates — fenthion, parathion, malathion; insecticides; the farmer) that 'irreversibly inhibit[s] AChE' → ACh floods every cholinergic synapse → three tiers (muscarinic DUMBBELSS, nicotinic NMJ blockade, CNS depression) → two antidotes (atropine the plate-shield, pralidoxime the breaker-restorer).",
      "The mechanism in one clause: 'irreversibly inhibit AChE' — the same enzyme the same page's upper table inhibits reversibly (donepezil, neostigmine, pyridostigmine, physostigmine); the therapeutic-poison difference IS the reversibility.",
      "The muscarinic tier, all nine findings verbatim and in the mnemonic's own order: Diarrhea, Urination, Miosis, Bronchospasm, Bradycardia, Emesis, Lacrimation, Sweating, Salivation — 'DUMBBELSS.' (the book's own acronym; double-S because Sweating and Salivation are separate letters).",
      "The nicotinic tier's printed comparator: 'mechanism similar to succinylcholine' — sustained depolarization ends in blockade, which is why ACh excess paralyzes (cholinergic crisis) just as ACh deficiency does (myasthenic crisis); the wet picture is the sorter.",
      "The CNS tier, verbatim: 'Respiratory depression, lethargy, seizures, coma.' — the only tier without its own printed reversal line, because the first tier's antidote carries it: 'Atropine can cross BBB to relieve CNS symptoms.'",
      "The atropine clauses: 'a competitive inhibitor' (receptor-level, not enzyme-level) + 'can cross BBB' (the CNS cover) — atropine does nothing to the poison itself; it dams the muscarinic plate while the enzyme stays dead.",
      "The pralidoxime clauses: 'regenerates AChE via dephosphorylation' (the only enzyme-level move in the duo) + 'if given early' (the source's own timing rule — the AGING mechanism behind it is NOT printed, KYP-flagged: the phosphoryl-enzyme bond hardens over hours and regeneration becomes impossible) + 'does not readily cross BBB' (the CNS stays atropine's job).",
      "The duo rule: 'Must be coadministered with atropine to prevent transient worsening of symptoms.' — pralidoxime alone transiently worsens; the pair is the unit of management, ordered immediately.",
      "The mirror page (KYP frame on the printed adjacency): the upper table ENDS with 'Antidote for anticholinergic toxicity; physostigmine \"phyxes\" atropine overdose.' immediately before this section — the dry toxidrome's antidote above, the wet toxidrome's antidotes below; physostigmine in THIS patient would add an AChE inhibitor to an AChE-poisoned cleft.",
      "What this page does NOT print (flagged, never cited as printed): 'carbamate' appears nowhere in part 1 (the reversible, non-aging insecticide cousins); SLUDGE (the alternative mnemonic) is absent; nerve agents (sarin, VX) are absent; and the nicotinic-GANGLIONIC signs (mydriasis, tachycardia, hypertension — the sympathetic overdrive that can override the wet picture) are absent — the printed nicotinic row is the NMJ blockade alone. Boundaries: the Cholinomimetic agents section prints ABOVE on the same pdf 261 (EXCLUDED — the completed PH18, whose reciprocal anchor resolves here); pdf 262 ahead opens the pending Muscarinic antagonists section (atropine's own drug page — this section does NOT extend there); pdf 260 behind carries the completed autonomic-drugs synapse map (the cleft this poison floods); book 235's acetylcholine-receptors topic carries the M/N families the three tiers ride.",
    ],
  },
  recall: [
    {
      q: "Recite the section's two intro lines verbatim, and name the three printed organophosphates with their shared name-ending.",
      a:
        "'Often due to organophosphates (eg, fenthion, parathion, malathion) that irreversibly inhibit AChE. Organophosphates commonly used as insecticides; poisoning usually seen in farmers.' — the three agents are fenthion, parathion, and malathion, all ending in '-thion' (the KYP rhyme on the printed names); all are insecticides, and the printed patient is the farmer.",
    },
    {
      q: "Name the three effect-tier rows with each row's printed findings cell, and state which row has no reversal line of its own.",
      a:
        "MUSCARINIC EFFECTS: 'Diarrhea, Urination, Miosis, Bronchospasm, Bradycardia, Emesis, Lacrimation, Sweating, Salivation.' NICOTINIC EFFECTS: 'Neuromuscular blockade (mechanism similar to succinylcholine).' CNS EFFECTS: 'Respiratory depression, lethargy, seizures, coma.' — the CNS row prints WITHOUT its own reversal line; its cover is the muscarinic row's printed clause: 'Atropine can cross BBB to relieve CNS symptoms.'",
    },
    {
      q: "Spell the book's own mnemonic for the muscarinic tier and expand every letter — including the reason for its double-S spelling.",
      a:
        "'DUMBBELSS.' — Diarrhea, Urination, Miosis, Bronchospasm, Bradycardia, Emesis, Lacrimation, Sweating, Salivation. The double-S is the book's own spelling: Sweating AND Salivation are separate findings and separate letters (the source prints DUMBBELSS, not the single-S DUMBBELLS) — nine letters for the nine printed findings, in the printed list's own order.",
    },
    {
      q: "State the four printed pralidoxime clauses, and explain the timing rule's mechanism — flagging what is and is not printed.",
      a:
        "(1) 'Reversed by pralidoxime, regenerates AChE via dephosphorylation if given early.' (the reversal + the mechanism + the timing rule); (2) 'Must be coadministered with atropine to prevent transient worsening of symptoms.' (the duo rule — pralidoxime alone transiently worsens); (3) 'Pralidoxime does not readily cross BBB.' (the reach limit — the CNS tier stays atropine's job); (4) its tier: it reverses the NICOTINIC row ('Neuromuscular blockade (mechanism similar to succinylcholine).'). The timing rule's mechanism — AGING, the loss of the alkyl group from the phosphorylated enzyme over hours, after which the bond is permanent and dephosphorylation is impossible — is NOT printed on this page ('aging' appears nowhere in part 1) and is a KYP-flagged extension wherever used; the printed rule is simply 'if given early'.",
    },
    {
      q: "What prints ABOVE this section on the same page, why is it excluded, and which four expected items does this page NOT print (census-flagged)?",
      a:
        "The 'Cholinomimetic agents' section prints ABOVE on the same pdf 261 (book 239) — the completed cholinomimetic-agents topic (the intro warning + the two-group DRUG/ACTION/APPLICATIONS table), EXCLUDED here; the printed adjacency is the page's own mirror (the upper table ends with physostigmine, the ANTICHOLINERGIC-toxicity antidote, immediately before this CHOLINERGIC-toxicity section). The four census-flagged absences: 'carbamate' (nowhere in part 1 — the reversible, non-aging insecticide cousins), the alternative mnemonic SLUDGE, nerve agents (sarin, VX), and the nicotinic-ganglionic signs (mydriasis, tachycardia, hypertension) — all flagged as NOT printed, never cited as this page's content.",
    },
  ],
  related: [
    {
      title: "Cholinomimetic Agents — the Section Directly Above on This Same Page: the Therapeutic Half of the Mirror",
      topicId: "cholinomimetic-agents",
      note:
        "The completed PH18 (book 239, upper portion): the intro warning + the two-group DRUG/ACTION/APPLICATIONS table. Its INDIRECT group (anticholinesterases: donepezil, neostigmine, pyridostigmine, physostigmine) is this topic's therapeutic mirror — the REVERSIBLE breaker-blockers whose mechanism ('↑ ACh.') this section's organophosphates push past reversibility ('irreversibly inhibit AChE'); pyridostigmine's printed co-therapy (glycopyrrolate/hyoscyamine 'to control pyridostigmine adverse effects') is the upper table's own acknowledgement of the muscarinic-excess direction this page treats as the whole disease; and the upper table's LAST row — physostigmine, 'Antidote for anticholinergic toxicity; physostigmine \"phyxes\" atropine overdose.' — prints immediately before this section's header: the dry toxidrome's antidote above, the wet toxidrome's antidotes below, one page. (PH18 pinned this section as its same-page exclusion — the reciprocal anchor resolves here.)",
    },
    {
      title: "Acetylcholine Receptors — the M/N Families the Three Tiers Ride",
      topicId: "acetylcholine-receptors",
      note:
        "The completed receptor page (PH12, book 235): the nicotinic (ligand-gated cation channel) and muscarinic (GPCR) families. This topic's three tiers ARE that map read under flood: the muscarinic tier overflows the M-addresses (glands and smooth muscle — the nine DUMBBELSS findings), the nicotinic tier overflows the NMJ ('Neuromuscular blockade (mechanism similar to succinylcholine).' — the cation channel held open into depolarizing blockade), and the CNS tier overflows the central synapses (respiratory drive, alertness, seizure threshold). The antidote split follows the same map: atropine is selective for the muscarinic family (the plate), pralidoxime for the enzyme both families share (the breaker).",
    },
    {
      title: "Autonomic Drugs — the Synapse Being Poisoned",
      topicId: "autonomic-drugs",
      note:
        "The completed synapse page (PH17, book 238): the four-lane neurotransmission flowchart whose cholinergic lane this poison dams — ACh released into the cleft → Cholinoreceptors → AChE → Choline + Acetate. The organophosphates remove the lane's clearance step ('irreversibly inhibit AChE'), so the lane floods; atropine dams the lane's plate (receptor-level), pralidoxime rebuilds the lane's breaker (enzyme-level). PH17's own anchors complete the story: its 'Cholinergic stimulant' anchor ('AChE inhibitors eg, Donepezil') is the therapeutic half of the mechanism, and its botulinum anchor is the opposite failure (release blocked — nothing to preserve), the pairing that makes the cleft's economy legible.",
    },
    {
      title: "G-Protein-Linked Second Messengers — the Cascade Behind Every Muscarinic Finding on This Page",
      topicId: "g-protein-linked-second-messengers",
      note:
        "The completed messenger page (PH16, book 237): the receptor × G-protein-class table and the three cascades. Every finding of the muscarinic tier is an M3 → Gq → PLC → IP3/Ca2+ story: glandular secretion (sweat, tears, saliva — the pouring of DUMBBELSS's last three letters), smooth-muscle contraction (bronchospasm, GI cramping, detrusor — the diarrhea/urination/emesis letters), and the pupillary sphincter (miosis). The exam's layered version: name the poison (this page) → name the tier (this page) → name the receptor and the G-protein class behind the finding (PH12 + PH16) — the full mechanistic chain from insecticide to ion.",
    },
  ],
  crossLinks: [
    {
      subject: "Toxicology (the toxidrome sort — the wet pole of the autonomic-poisoning pair)",
      connection:
        "This page is the emergency-department sort institutionalized: WET vs DRY. The wet pole (organophosphates, this section): 'DUMBBELSS.' — miosis, bronchorrhea/bronchospasm, bradycardia, secretions, GI cramping, incontinence — with the muscle tier (fasciculations → blockade, 'mechanism similar to succinylcholine') and the CNS tier (respiratory depression, lethargy, seizures, coma) stacked above it; the antidote pair is printed (atropine + pralidoxime, with the coadministration and timing rules). The dry pole (anticholinergic — atropine, antihistamines, tricyclics, Jimson weed): hot, dry, dilated, tachycardic, delirious, retaining — its antidote (physostigmine) prints on the SAME page one section above, which is the exam's own mirror question. The management layer the exam adds around the printed pair: decontamination (strip and wash — the farmer's soaked clothing is the ongoing source), airway protection (the killer is the nicotinic tier's respiratory failure), and the census-flagged absences (nerve agents sarin/VX and carbamates do NOT print on this page — never cite them as printed content, though the sarin story is this section's mechanism by another route).",
    },
    {
      subject: "Neurology (the neuromuscular junction — succinylcholine kinship and the two crises)",
      connection:
        "The printed nicotinic comparator opens two neurology doors. First, the succinylcholine kinship: 'Neuromuscular blockade (mechanism similar to succinylcholine).' — sustained depolarization of the NMJ ends in phase-I blockade, which is why ACh EXCESS paralyzes; organophosphate weakness is succinylcholine weakness with a wet body around it. Second, the two crises: cholinergic crisis (ACh excess — the -stigmine over-dosed or the organophosphate exposed) vs myasthenic crisis (ACh receptor deficit) both present with weakness and fatigability; the sorter is the rest of this page's toxidrome (secretions, miosis, bradycardia = cholinergic) — and the therapeutic bridge is the same page's upper table, where pyridostigmine treats myasthenia and its printed co-therapy (glycopyrrolate or hyoscyamine) exists to blunt the very muscarinic excess this section treats as the disease. The exam's composite: a myasthenic patient who becomes wet is in cholinergic crisis — more -stigmine is the wrong answer.",
    },
    {
      subject: "Ophthalmology (the pupil as the toxidrome window)",
      connection:
        "Miosis is the muscarinic tier's fastest check and the printed finding the whole wet sort turns on ('Miosis' inside 'DUMBBELSS.') — the pupillary sphincter's M3 contraction under ACh flood, the exact mirror of the anticholinergic mydriasis ('blind as a bat') the physostigmine row above treats. The same muscle is the glaucoma target of the upper table's cholinomimetics (pilocarpine's 'pupillary sphincter (closed-angle glaucoma)' and carbachol's 'Constricts pupil'), so the eye connects all three sections of this page-neighborhood: constricting for therapy (glaucoma), constricting by toxicity (this topic), and dilating by the opposite toxicity (the anticholinergic pole). The exam's eye-first version: pinpoint pupils + secretions + an exposure history = organophosphate — ask for the pair, not a drop.",
    },
    {
      subject: "Public Health & Occupational Medicine (the farmer, the insecticide, and the exposure ladder)",
      connection:
        "The printed epidemiology is a public-health vignette in one line: 'Organophosphates commonly used as insecticides; poisoning usually seen in farmers.' — dermal and inhalational absorption during spraying (the windless-day hand-spraying scenario of the mini-case), delayed presentation after skin storage, and prevention by protective equipment and restricted-application rules. The exam's population layer: agricultural workers and their families (take-home exposure via clothing — the soaked shirt is the reservoir), pediatric exposures in storage areas, and the surveillance logic that a cluster of wet patients is an environmental signal. The census-flagged absences belong to this layer too: the nerve agents (sarin, VX — organophosphates by chemistry, mass-casualty by intent) and the carbamates (the reversible insecticide cousins) do NOT print on this page — flagged wherever they would otherwise be cited, never presented as this page's content.",
    },
  ],
};
