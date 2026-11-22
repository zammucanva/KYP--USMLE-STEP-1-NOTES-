import type { KypUsMLENote } from "../types";

// Pharmacology — SYMPATHOLYTICS: α2 AGONISTS (PH22 — the class-table
// block: the 'Sympatholytics (α2-agonists)' section, the UPPER portion of
// pdf 265 / book 243 under the standing 'PHARMACOLOGY—AUTONOMIC DRUGS'
// banner). Source lines 9-37: the section header and ONE three-column
// DRUG/APPLICATIONS/ADVERSE EFFECTS table of three rows — 'Clonidine,
// guanfacine' → 'Hypertensive urgency (limited situations), ADHD,
// Tourette syndrome, symptom control in opioid withdrawal' | 'CNS
// depression, bradycardia, hypotension, respiratory depression, miosis,
// rebound hypertension with abrupt cessation'; 'α-methyldopa' →
// 'Hypertension in pregnancy' | 'Direct Coombs ⊕ hemolysis, drug-induced
// lupus, hyperprolactinemia'; 'Tizanidine' → 'Relief of spasticity' |
// 'Hypotension, weakness, xerostomia'.
// PH22/alpha-blockers BOUNDARY (pinned from above): the LOWER portion of
// the same page (lines 39-78) is the α-blockers class table — the
// SEPARATE PENDING alpha-blockers topic — EXCLUDED here; only its
// boundary pinned (its last row, mirtazapine the α2 ANTAGONIST, is the
// receptor mirror of this block's agonists — cited as boundary only).
// CROSS-PAGE MECHANISM ANCHORS (all printed): book 238 (autonomic-drugs,
// PH17) — 'Release of norepinephrine from a sympathetic nerve ending is
// modulated by NE itself, acting on presynaptic α2-autoreceptors →
// negative feedback.'; book 237 (g-protein-linked-second-messengers,
// PH16) — the α2 row 'α2 | i | ↓ sympathetic (adrenergic) outflow, ↓
// insulin release, ↓ lipolysis, ↑ platelet aggregation, ↓ aqueous humor
// production' + the figure labels 'M2, α2, or D2 receptor' → 'Gi
// protein'; book 236 (tissue-distribution-of-adrenergic-receptors,
// PH15) — the α2 row 'Pancreas / Presynaptic terminals / Salivary
// glands' → 'Inhibition of insulin secretion / Inhibition of
// neurotransmitter release / Inhibition of salivary secretion'. The
// block is pure text with zero rasters on pdf 265 — carried verbatim as
// this note's two table blocks; conveyed as ONE original KYP mechanism
// map (Alpha2AgonistMap). KYP extensions flagged wherever they appear:
// the SYMPATHETIC-DIMMER frame (the central/medullary location of the
// clonidine effect is NOT printed — flagged), the PATIENT-SORT frame,
// the MOM-AND-COOMBS frame, the PRODRUG flag (α-methyldopa →
// α-methylnorepinephrine — NOT printed, flagged), and the
// PH22/alpha-blockers boundary census.
export const sympatholyticsAlpha2Agonists: KypUsMLENote = {
  id: "sympatholytics-alpha-2-agonists",
  title: "Sympatholytics: α2 Agonists",
  subtitle:
    "The sympathetic dimmer — three drugs that pull one brake: the presynaptic α2-autoreceptor ('presynaptic α2-autoreceptors → negative feedback.', the printed anchor of book 238) — clonidine and guanfacine (hypertensive urgency, ADHD, Tourette syndrome, opioid withdrawal; down to 'rebound hypertension with abrupt cessation'), α-methyldopa ('Hypertension in pregnancy' with 'Direct Coombs ⊕ hemolysis, drug-induced lupus, hyperprolactinemia'), and tizanidine ('Relief of spasticity' with 'Hypotension, weakness, xerostomia').",
  subject: "Pharmacology",
  system:
    "Section II · Pharmacology — Autonomic Drugs (the banner this page shares with drug-effect-modifications, autonomic-receptors, acetylcholine-receptors, pain-transmission, micturition-control, tissue-distribution-of-adrenergic-receptors, g-protein-linked-second-messengers, autonomic-drugs, cholinomimetic-agents, anticholinesterase-poisoning, muscarinic-antagonists, and atropine before it — the Sympatholytics (α2-agonists) block OPENS book 243, in the UPPER portion of a page whose LOWER portion is the α-blockers class table (the PENDING alpha-blockers topic, the antagonist side of the same receptor family); the page behind (book 242) carries the tail of the sympathomimetics section — the completed pilot that drove the same system UP, whose physiologic-effects graphs (epinephrine reversal, phenylephrine suppression) end one page back; the page ahead (book 244) opens the β-blockers table — the other half of sympatholysis; the mechanism's own printed sentence sits on book 238 ('presynaptic α2-autoreceptors → negative feedback.') and its G-protein row on book 237 (α2 | i | '↓ sympathetic (adrenergic) outflow...')",
  pilotCategory:
    "The class table's complete architecture — the section header, the three-column DRUG/APPLICATIONS/ADVERSE EFFECTS table in full (every drug, application, and adverse-effect cell verbatim, including the printed qualifier '(limited situations)' and the rebound-hypertension clause), plus the KYP layers that compress it: the SYMPATHETIC-DIMMER frame (the α2 brake assembled from three printed anchor pages — book 238's autoreceptor sentence, book 237's α2/Gi row, book 236's distribution row; the central/medullary location flagged as not printed), the PATIENT-SORT frame (who-gets-what: the pregnant patient, the child with ADHD or tics, the withdrawing patient, the spastic patient), the MOM-AND-COOMBS frame (the pregnancy-sort + the Coombs lab), the PRODRUG flag (α-methylnorepinephrine — flagged), and the PH22/alpha-blockers boundary census (the same-page split pinned from above).",
  difficulty: 2,
  readTime: 7,
  sourceRef:
    "First Aid 2026, Part 1 pp. 243 (Pharmacology — Autonomic Drugs: Sympatholytics (α2-agonists) — the UPPER portion of the page; the α-blockers class table on the SAME page below — the PENDING alpha-blockers topic, where the α2 story reappears as its ANTAGONIST mirror (the 'α2 selective' row: mirtazapine → 'Depression.' | 'Sedation, ↑ serum cholesterol, ↑ appetite') — is EXCLUDED here; this block prints: the section header 'Sympatholytics (α2-agonists)'; the three-column DRUG/APPLICATIONS/ADVERSE EFFECTS table — 'Clonidine, guanfacine' → 'Hypertensive urgency (limited situations), ADHD, Tourette syndrome, symptom control in opioid withdrawal' | 'CNS depression, bradycardia, hypotension, respiratory depression, miosis, rebound hypertension with abrupt cessation'; 'α-methyldopa' → 'Hypertension in pregnancy' | 'Direct Coombs ⊕ hemolysis, drug-induced lupus, hyperprolactinemia'; 'Tizanidine' → 'Relief of spasticity' | 'Hypotension, weakness, xerostomia' — the block is pure text with zero rasters, never reproduced as artwork, carried verbatim as this note's two table blocks; NOT printed in this block (census-flagged, never cited as printed): the mechanism itself — the presynaptic-autoreceptor sentence prints on book 238 ('Release of norepinephrine from a sympathetic nerve ending is modulated by NE itself, acting on presynaptic α2-autoreceptors → negative feedback.'), the α2/Gi row on book 237 ('α2' | 'i' | '↓ sympathetic (adrenergic) outflow, ↓ insulin release, ↓ lipolysis, ↑ platelet aggregation, ↓ aqueous humor production'), the α2 distribution row on book 236 ('Pancreas / Presynaptic terminals / Salivary glands' → 'Inhibition of insulin secretion / Inhibition of neurotransmitter release / Inhibition of salivary secretion'); the central/medullary location of the clonidine effect and the α-methylnorepinephrine prodrug reading (KYP flags — never cited as printed); the block does NOT extend to pdf 266 (book 244 opens β-blockers), and pdf 264 behind carries only the sympathomimetics tail)",
  tags: [
    "sympatholytics",
    "alpha-2 agonists",
    "α2 agonists",
    "clonidine",
    "guanfacine",
    "α-methyldopa",
    "methyldopa",
    "tizanidine",
    "presynaptic autoreceptor",
    "α2-autoreceptors",
    "negative feedback",
    "Gi protein",
    "sympathetic outflow",
    "hypertension",
    "hypertensive urgency",
    "ADHD",
    "Tourette syndrome",
    "opioid withdrawal",
    "gestational hypertension",
    "hypertension in pregnancy",
    "spasticity",
    "rebound hypertension",
    "abrupt cessation",
    "Coombs positive hemolysis",
    "direct Coombs test",
    "drug-induced lupus",
    "hyperprolactinemia",
    "miosis",
    "bradycardia",
    "xerostomia",
    "pharmacology",
  ],
  core: {
    what:
      "ONE RECEPTOR, ONE DIRECTION, THREE DRUGS, THREE PATIENTS. The block opens with its banner — 'Sympatholytics (α2-agonists)' — and prints one three-column table (DRUG / APPLICATIONS / ADVERSE EFFECTS) of three rows. ROW 1: 'Clonidine, guanfacine' → 'Hypertensive urgency (limited situations), ADHD, Tourette syndrome, symptom control in opioid withdrawal' | 'CNS depression, bradycardia, hypotension, respiratory depression, miosis, rebound hypertension with abrupt cessation'. ROW 2: 'α-methyldopa' → 'Hypertension in pregnancy' | 'Direct Coombs ⊕ hemolysis, drug-induced lupus, hyperprolactinemia'. ROW 3: 'Tizanidine' → 'Relief of spasticity' | 'Hypotension, weakness, xerostomia'. That is the whole printed block — four uses in one cell, a six-finding toxicity cell whose last clause is its own warning label, a one-indication pregnancy row with an autoimmune triad, and a one-indication muscle-relaxant row.",
    why:
      "WHY A DRUG THAT TURNS THE SYMPATHETIC AMP DOWN IS ON THE EXAM. The α2 receptor is the sympathetic system's own volume knob — the presynaptic autoreceptor that norepinephrine itself uses to shut itself off ('Release of norepinephrine from a sympathetic nerve ending is modulated by NE itself, acting on presynaptic α2-autoreceptors → negative feedback.' — printed on book 238, the autonomic-drugs page; '↓ sympathetic (adrenergic) outflow' — printed as α2's FIRST major function on book 237's second-messenger table, where α2 rides the Gi couple with M2 and D2). An agonist at that knob is a sympatholytic by definition: stimulate α2, the outflow falls, the heart slows, the pressure falls. WHY THREE DIFFERENT PATIENTS: the same brake pulled at different addresses — the hypertensive (urgency, limited situations), the child with ADHD or tics (guanfacine's lane), the withdrawing opioid user (symptom control), the pregnant patient (α-methyldopa — the pregnancy-safe antihypertensive), the spastic patient (tizanidine). WHY THE TOXICITY SET READS LIKE THE MECHANISM INVERTED: CNS depression, bradycardia, hypotension, respiratory depression, miosis — every one is the brake pulled too far; and the one finding that is NOT overshoot is the printed rule the exam tests hardest: 'rebound hypertension with abrupt cessation' — stop clonidine cold and the knob snaps back. WHY THE PREGNANCY ROW HAS AN AUTOIMMUNE TRIAD: 'Direct Coombs ⊕ hemolysis, drug-induced lupus, hyperprolactinemia' — three organ systems, one drug, the classic lab-question row (α-methyldopa is the antihypertensive that makes the direct Coombs test positive).",
    keyIdea:
      "Read the block as a SYMPATHETIC DIMMER with a patient sort (KYP compression of three printed anchor pages + the printed table). THE DIMMER — α2 is the presynaptic brake: NE release is modulated by 'presynaptic α2-autoreceptors → negative feedback' (book 238); α2 couples Gi (book 237: 'M2, α2, or D2 receptor' → 'Gi protein'), and its first printed function is '↓ sympathetic (adrenergic) outflow'; the peripheral α2 addresses (book 236: pancreas ↓ insulin, presynaptic terminals ↓ neurotransmitter release, salivary glands ↓ secretion) are why the toxicity set includes dry mouth. THE PATIENT SORT — the pregnant patient gets α-methyldopa ('Hypertension in pregnancy'; watch 'Direct Coombs ⊕ hemolysis, drug-induced lupus, hyperprolactinemia'); the child with ADHD or Tourette gets guanfacine/clonidine; the withdrawing patient gets clonidine ('symptom control in opioid withdrawal'); the spastic patient gets tizanidine ('Relief of spasticity'; 'Hypotension, weakness, xerostomia'); the urgency-hypertensive gets clonidine '(limited situations)'. THE TWO RULES — the toxicity rule (the sedated-bradycardic-hypotensive-miotic patient is the dimmer at zero: 'CNS depression, bradycardia, hypotension, respiratory depression, miosis') and the taper rule ('rebound hypertension with abrupt cessation' — never stop clonidine cold). One line: three drugs, one brake, three patients — and the drug you must never stop abruptly is the one whose withdrawal is hypertension.",
  },
  mechanisms: [
    {
      id: "central-alpha2-autoreceptor-braking",
      title:
        "The sympatholytic brake: the α2 agonist occupies the presynaptic autoreceptor that norepinephrine itself uses for negative feedback (the printed anchor of book 238: 'presynaptic α2-autoreceptors → negative feedback.'), couples it through Gi (the printed couple of book 237: 'M2, α2, or D2 receptor' → 'Gi protein'), and the sympathetic outflow falls — '↓ sympathetic (adrenergic) outflow', the first printed major function of the α2 row",
      context:
        "The block's printed table (book 243, UPPER portion) gives the drugs and their effects; the mechanism itself prints on the two completed pages this block leans on — book 238 (autonomic-drugs, PH17: the release-modulation sentence) and book 237 (g-protein-linked-second-messengers, PH16: the α2 | i row with '↓ sympathetic (adrenergic) outflow' and the Gi figure labels), with book 236 (tissue-distribution, PH15: the α2 distribution row) supplying the peripheral addresses. The central/medullary location of the clonidine effect (the CNS site whose stimulation produces the sympatholysis) is NOT printed on any of these pages — flagged as KYP wherever used, never cited as printed. The dimmer compression is KYP's.",
      flow: {
        nodes: [
          {
            id: "input",
            label: "The tone to brake: sympathetic outflow — the norepinephrine signal the whole autonomic chain (book 238's own diagram) delivers from the CNS to the heart, the vessels, and the glands",
            sublabel:
              "Input — the system the previous section (sympathomimetics, the completed pilot on book 240-243) drove UP with exogenous agonists. The α2-agonist block is the same system's OFF-ramp: not a receptor blocked at the end organ (that is the α-blockers table below and the β-blockers table one page ahead — both excluded), but the outflow itself turned down at its source.",
            variant: "input",
          },
          {
            id: "autoreceptor",
            label: "STEP 1 — THE BRAKE IS PRESYNAPTIC: 'Release of norepinephrine from a sympathetic nerve ending is modulated by NE itself, acting on presynaptic α2-autoreceptors → negative feedback.' (book 238, printed) — the receptor sits ON the terminal, and its job is self-shutoff",
            sublabel:
              "The autoreceptor logic: when NE builds up in the cleft, it feeds back onto the α2 receptors on its OWN terminal and shuts further release off. This is the physiologic brake — and it is the reason an α2 AGONIST is sympatholytic (it pulls the brake as if NE itself had) while an α2 ANTAGONIST is the opposite (mirtazapine, the 'α2 selective' row of the excluded table below, BLOCKS the brake and lets NE flow — the receptor-mirror the same page prints). The distribution row of book 236 puts the address in the table: 'Presynaptic terminals' → 'Inhibition of neurotransmitter release'.",
            variant: "process",
          },
          {
            id: "gi",
            label: "STEP 2 — THE COUPLE IS Gi: α2 rides the inhibitory G protein — the book's OWN grouping (book 237): 'M2, α2, or D2 receptor' → 'Gi protein' — adenylyl cyclase falls, cAMP falls, and the terminal's release machinery quiets",
            sublabel:
              "The second-messenger page's α2 row (book 237): 'α2' | 'i' | '↓ sympathetic (adrenergic) outflow, ↓ insulin release, ↓ lipolysis, ↑ platelet aggregation, ↓ aqueous humor production'. The Gi coupling is the α2 = the-i-family mnemonic anchor: the same couple as the M2 heart brake and the D2 dopamine brake — three receptors, one inhibitory mechanism, and α2's first listed function is the one this whole block rides.",
            variant: "process",
          },
          {
            id: "outflow",
            label: "STEP 3 — THE OUTFLOW FALLS: '↓ sympathetic (adrenergic) outflow' (book 237, printed) — the CNS-driven sympathetic signal drops, and with it the heart rate, the contractility, the renin, and the vascular tone (the same end-organ story the β-blockers table one page ahead achieves by blocking the receptor instead)",
            sublabel:
              "The central reading (KYP flag: the medullary site — the CNS location whose stimulation produces the fall in outflow — is NOT printed on this page or its anchors): clonidine and guanfacine cross into the CNS and stimulate the α2 brake in the brainstem vasomotor centers, so the sympathetic outflow to the periphery falls. α-methyldopa arrives there as a prodrug (KYP flag: the conversion to α-methylnorepinephrine, the false neurotransmitter that stimulates the central α2 receptor, is NOT printed) — all three converge on the same printed function: outflow down.",
            variant: "process",
          },
          {
            id: "output",
            label: "RESULT — the drug table's every use and every toxicity is one brake at one of three settings: pulled to therapeutic effect (hypertension, the withdrawal syndrome, the tics, the spasticity) or pulled too far ('CNS depression, bradycardia, hypotension, respiratory depression, miosis') or released at once ('rebound hypertension with abrupt cessation')",
            sublabel:
              "Output — what the exam pulls from the mechanism: the drug class question ('which antihypertensive works by stimulating a presynaptic autoreceptor'), the direction question (α2 agonist = sympatholytic vs α2 antagonist = the mirtazapine mirror), the G-protein question (α2 → Gi → ↓cAMP — the second-messenger page's own row), and the taper question (the brake released abruptly = the rebound). The peripheral addresses (book 236) carry the fine print: 'Inhibition of insulin secretion' (pancreas), 'Inhibition of salivary secretion' (the salivary glands — the xerostomia of the tizanidine row) — the α2 brake is not only central.",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "autoreceptor", label: "the agonist finds the presynaptic brake" },
          { from: "autoreceptor", to: "gi", label: "α2 couples Gi (the i-family)" },
          { from: "gi", to: "outflow", label: "cAMP falls, release quiets" },
          { from: "outflow", to: "output", label: "outflow ↓ = the table's every effect" },
        ],
      },
    },
    {
      id: "alpha2-agonist-drug-sort-toxicity",
      title:
        "The three-drug sort: one printed table, three patients — clonidine/guanfacine (the four-use headliner: 'Hypertensive urgency (limited situations), ADHD, Tourette syndrome, symptom control in opioid withdrawal' with the six-finding toxicity cell ending in the rebound rule), α-methyldopa (the one-use pregnancy row with the autoimmune triad 'Direct Coombs ⊕ hemolysis, drug-induced lupus, hyperprolactinemia'), and tizanidine (the one-use spasticity row with 'Hypotension, weakness, xerostomia')",
      context:
        "The block's own three-row table (book 243, UPPER portion), carried verbatim in the note's first table block. The patient-sort reading (pregnant → methyldopa; child with ADHD/tics → guanfacine/clonidine; withdrawal → clonidine; spasticity → tizanidine) is KYP's overlay on the printed rows; every drug, application, and adverse-effect cell is the book's own print.",
      flow: {
        nodes: [
          {
            id: "input",
            label: "The printed frame: three rows, three columns — DRUG / APPLICATIONS / ADVERSE EFFECTS — the same class-table frame as the muscarinic antagonists table (PH20) one drug-family back, now aimed at the sympathetic outflow",
            sublabel:
              "Input — the table the exam reads row by row. Each row is one drug set with its use cell and its toxicity cell; the KYP patient-sort that follows reorders the same rows by WHO is standing in front of you: the urgency hypertensive, the child, the withdrawing patient, the pregnant patient, the spastic patient.",
            variant: "input",
          },
          {
            id: "clonidine",
            label: "ROW 1 — CLONIDINE, GUANFACINE: 'Hypertensive urgency (limited situations), ADHD, Tourette syndrome, symptom control in opioid withdrawal' | 'CNS depression, bradycardia, hypotension, respiratory depression, miosis, rebound hypertension with abrupt cessation'",
            sublabel:
              "The headliner row — four printed uses and the printed qualifier '(limited situations)' on the hypertension one (the book's own hedge: not the routine first-line). The psych-to-pharm crossovers are the modern exam's favorites: guanfacine (and clonidine) for ADHD — the nonstimulant lane that pairs with the α2 story — and clonidine for opioid-withdrawal symptom control (the autonomic storm of withdrawal tamed by the same outflow brake; the sympathomimetics page behind printed the amphetamine-NE release story the brake modulates). The toxicity cell is the mechanism overshooting: 'CNS depression, bradycardia, hypotension, respiratory depression, miosis' — plus the one finding that is NOT overshoot: 'rebound hypertension with abrupt cessation' — the taper rule printed in the cell itself.",
            variant: "process",
          },
          {
            id: "methyldopa",
            label: "ROW 2 — α-METHYLDOPA: 'Hypertension in pregnancy' | 'Direct Coombs ⊕ hemolysis, drug-induced lupus, hyperprolactinemia' — the pregnancy-safe antihypertensive whose toxicity set is an autoimmune triad",
            sublabel:
              "The one-indication row: 'Hypertension in pregnancy' is the printed use every obstetric stem recycles — the antihypertensive with the longest pregnancy safety record (the drug-reactions and obstetric pages sort the alternatives: labetalol, nifedipine, hydralazine; ACE inhibitors/ARBs contraindicated). The toxicity triad spans three systems: hematology ('Direct Coombs ⊕ hemolysis' — the positive direct antiglobulin test with hemolysis, the classic lab question), rheumatology ('drug-induced lupus'), and endocrine ('hyperprolactinemia' — the same axis the antipsychotics ride, by the same dopamine-brake logic the D2 story tells). KYP flag: the prodrug reading (converted to α-methylnorepinephrine, the false neurotransmitter that stimulates the central α2 receptor) is NOT printed on this page.",
            variant: "process",
          },
          {
            id: "tizanidine",
            label: "ROW 3 — TIZANIDINE: 'Relief of spasticity' | 'Hypotension, weakness, xerostomia' — the muscle-relaxant member: the α2 brake applied to the spastic muscle tone",
            sublabel:
              "The shortest row and the one the sort questions love: an α2 agonist used for spasticity (the MS/spinal-cord-injury/cerebral-palsy lane), with a toxicity set that is half mechanism ('Hypotension' — the brake overshooting, the same direction as row 1) and half peripheral address ('xerostomia' — the salivary 'Inhibition of salivary secretion' of book 236's α2 distribution row), plus 'weakness'. The exam pairs it with the other muscle relaxants and with baclofen (the GABA-B story) — but on this page it is simply the third patient: the spastic one.",
            variant: "process",
          },
          {
            id: "output",
            label: "RESULT — the patient sort: PREGNANT → α-methyldopa (and watch the Coombs); CHILD with ADHD or tics → guanfacine/clonidine; WITHDRAWING → clonidine; SPASTIC → tizanidine; URGENCY-HYPERTENSIVE → clonidine '(limited situations)' — and every patient gets the taper rule and the sedation warning",
            sublabel:
              "Output — the sort the exam actually runs: any stem that hands you one of these five patients and asks the drug (or hands you the drug and asks the patient) is answered from this one table. The toxicity sorts: the OVERSHOOT picture (CNS depression, bradycardia, hypotension, respiratory depression, miosis — the dimmer at zero, and the miosis that mimics the opioid toxidrome) vs the REBOUND picture (hypertension, tachycardia, agitation after abrupt cessation — the dimmer snapped back; treat by restarting/tapering, not by adding more antihypertensives) vs the AUTOIMMUNE picture (the methyldopa triad: hemolysis + lupus + hyperprolactinemia).",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "clonidine", label: "row 1 — the four-use headliner" },
          { from: "clonidine", to: "methyldopa", label: "row 2 — the pregnancy row" },
          { from: "methyldopa", to: "tizanidine", label: "row 3 — the spasticity row" },
          { from: "tizanidine", to: "output", label: "three rows = five patients + three toxicity pictures" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "alpha2-agonist-map",
      title: "The α2-agonist map (an original KYP visual)",
      caption:
        "An original KYP mechanism map conveying the Sympatholytics (α2-agonists) block (book 243, UPPER portion): THE MECHANISM STRIP (the presynaptic α2-autoreceptor brake with its three printed anchor pages — book 238's 'presynaptic α2-autoreceptors → negative feedback.', book 237's 'α2 | i | ↓ sympathetic (adrenergic) outflow...' with 'M2, α2, or D2 receptor' → 'Gi protein', book 236's distribution row); THE THREE DRUG CARDS (clonidine/guanfacine with all four printed applications and the six-finding toxicity cell; α-methyldopa with 'Hypertension in pregnancy' and the autoimmune triad; tizanidine with 'Relief of spasticity' and its trio); THE TOXICITY/REBOUND STRIP (the overshoot picture, the taper rule, the Coombs lab); and THE BOUNDARY STRIP (the same-page α-blockers split pinned from above, with the mirtazapine α2-antagonist mirror).",
      notice:
        "Census (pdfimages + text layer): the Sympatholytics (α2-agonists) block is PURE TEXT with ZERO raster images on pdf 265 — COPYRIGHTED, never reproduced as artwork; this visual conveys the section header and the three-row DRUG/APPLICATIONS/ADVERSE EFFECTS table as an ORIGINAL_KYP_ADAPTATION (every drug, application, and adverse-effect cell is the book's own print; the mechanism strip, the drug cards, the dimmer frame, and the patient sort are KYP's). KYP extensions flagged on the map: the SYMPATHETIC-DIMMER frame (the central/medullary location is NOT printed — flagged), the PATIENT-SORT frame, the MOM-AND-COOMBS frame, the PRODRUG flag (α-methylnorepinephrine — NOT printed, flagged). EXCLUDED: the α-blockers class table on the SAME book-243 page BELOW this block (the PENDING alpha-blockers topic — only its boundary pinned, its mirtazapine row cited as the α2-antagonist mirror only), the β-blockers section on pdf 266 ahead (this block does NOT extend there; verified), and the sympathomimetics tail on pdf 264 behind.",
    },
    {
      kind: "table",
      title: "Book 243 — the Sympatholytics (α2-agonists) table, verbatim",
      intro:
        "The block's own three-column table, carried whole: the section header above it, three drug rows with their printed applications and adverse-effect cells. Every cell is the book's own print.",
      columns: [
        "DRUG (book 243, verbatim)",
        "APPLICATIONS (book 243, verbatim)",
        "ADVERSE EFFECTS (book 243, verbatim)",
      ],
      rows: [
        [
          "Clonidine, guanfacine",
          "Hypertensive urgency (limited situations), ADHD, Tourette syndrome, symptom control in opioid withdrawal",
          "CNS depression, bradycardia, hypotension, respiratory depression, miosis, rebound hypertension with abrupt cessation",
        ],
        [
          "α-methyldopa",
          "Hypertension in pregnancy",
          "Direct Coombs ⊕ hemolysis, drug-induced lupus, hyperprolactinemia",
        ],
        [
          "Tizanidine",
          "Relief of spasticity",
          "Hypotension, weakness, xerostomia",
        ],
      ],
      caption:
        "Three drugs, one brake, three patients — the whole block in nine cells. The headliner row carries four uses (with the book's own '(limited situations)' hedge on the hypertension one) and the exam's two favorite psych-to-pharm crossovers (ADHD, opioid withdrawal). The methyldopa row is the pregnancy answer and the lab question ('Direct Coombs ⊕ hemolysis' — the positive direct antiglobulin test). The tizanidine row is the spasticity answer with the α2-salivary xerostomia (the 'Inhibition of salivary secretion' address of book 236's distribution row). The rebound clause ('rebound hypertension with abrupt cessation') prints inside the first row's adverse-effects cell — the never-stop-cold rule carried by the table itself.",
    },
    {
      kind: "table",
      title: "The cross-page mechanism anchors — the brake printed on three completed pages, verbatim",
      intro:
        "The block's table gives the drugs; the mechanism prints on the three completed pages this block leans on. Each row is a printed anchor, quoted verbatim with its source page — the assembly into one brake is KYP's.",
      columns: [
        "THE PRINTED ANCHOR (verbatim, with source page)",
        "WHAT IT CARRIES",
      ],
      rows: [
        [
          "'Release of norepinephrine from a sympathetic nerve ending is modulated by NE itself, acting on presynaptic α2-autoreceptors → negative feedback.' (book 238, the autonomic-drugs page — the completed PH17)",
          "THE MECHANISM SENTENCE — the brake itself: the α2 receptor sits on the presynaptic terminal, and its physiologic agonist is norepinephrine turning itself off. The drug agonists (clonidine, guanfacine, α-methylnorepinephrine) pull the same brake exogenously — that is what makes them sympatholytic.",
        ],
        [
          "'α2' | 'i' | '↓ sympathetic (adrenergic) outflow, ↓ insulin release, ↓ lipolysis, ↑ platelet aggregation, ↓ aqueous humor production' (book 237, the g-protein-linked-second-messengers table — the completed PH16)",
          "THE G-PROTEIN ROW — α2 rides the Gi couple (the same row family as M2 and D2: the book's own figure groups 'M2, α2, or D2 receptor' → 'Gi protein'), and its FIRST printed major function is the one this whole block rides: '↓ sympathetic (adrenergic) outflow'. The rest of the row is the peripheral α2 address set: pancreas, fat, platelets, ciliary body.",
        ],
        [
          "'α2' | 'Pancreas / Presynaptic terminals / Salivary glands' → 'Inhibition of insulin secretion / Inhibition of neurotransmitter release / Inhibition of salivary secretion' (book 236, the tissue-distribution-of-adrenergic-receptors table — the completed PH15)",
          "THE DISTRIBUTION ROW — the peripheral α2 addresses in table form: the second line ('Presynaptic terminals' → 'Inhibition of neurotransmitter release') is the autoreceptor brake again, in distribution language; the third ('Salivary glands' → 'Inhibition of salivary secretion') is the printed explanation of tizanidine's xerostomia; the first (pancreas → 'Inhibition of insulin secretion') is the metabolic fine print.",
        ],
        [
          "'α2 selective' + 'Mirtazapine' → 'Depression.' (book 243, the α-blockers table BELOW this block — the PENDING alpha-blockers topic, boundary citation only)",
          "THE RECEPTOR MIRROR — the same page's own α2 ANTAGONIST: where this block's drugs STIMULATE the α2 autoreceptor (sympatholysis — outflow down), mirtazapine BLOCKS it (antidepressant — noradrenergic outflow up, the mechanism behind its 'Sedation, ↑ serum cholesterol, ↑ appetite' adverse set). One receptor, two directions, one page — the exam's favorite sort between the two same-page tables.",
        ],
      ],
      caption:
        "The anchors assemble into one story (the assembly is KYP's; every quote is the book's own): α2 is the presynaptic autoreceptor (book 238) riding Gi (book 237: the i-family with M2 and D2) whose stimulation lowers sympathetic outflow (book 237's first printed function) at both central and peripheral addresses (book 236's distribution row) — and the agonist drugs that pull it print on book 243, while the antagonist that releases it (mirtazapine) prints on the very same page below (that row is the alpha-blockers topic's own print, cited here as the mirror only).",
    },
  ],
  usmle: {
    patterns: [
      {
        stem:
          "A 34-year-old man with a history of intravenous opioid use is admitted for a scheduled surgical procedure; he last used heroin 30 hours ago and now has diffuse sweating, lacrimation, rhinorrhea, mydriasis, piloerection, tachycardia, and marked irritability. The team starts clonidine for symptom control, and the pharmacology question asks the mechanism by which it blunts this syndrome.",
        discriminator:
          "The printed row: 'Clonidine, guanfacine' → 'symptom control in opioid withdrawal' — with the mechanism printed on the anchor pages: 'presynaptic α2-autoreceptors → negative feedback.' (book 238) and '↓ sympathetic (adrenergic) outflow' (book 237)",
        concept:
          "Clonidine for opioid withdrawal — the α2 agonist pulls the presynaptic brake that opioid withdrawal has released: the autonomic storm (the NE outflow surge) is turned down at its source, the same sympatholysis that treats the hypertension",
        answer:
          "Clonidine is a centrally acting α2-adrenergic agonist: it stimulates the presynaptic α2-autoreceptors (the brake the book prints on book 238: 'Release of norepinephrine from a sympathetic nerve ending is modulated by NE itself, acting on presynaptic α2-autoreceptors → negative feedback.'), and through the Gi couple (α2 = the i-family, book 237) it produces '↓ sympathetic (adrenergic) outflow' — the norepinephrine surge driving the withdrawal's autonomic symptoms (tachycardia, hypertension, sweating, piloerection) falls. The printed applications cell carries exactly this use: 'symptom control in opioid withdrawal'. The exam's follow-ups: the toxidology question in the same patient (clonidine's own overdose produces CNS depression + miosis + bradycardia — the opioid-like picture; and lofexidine is the same-class alternative), and the rebound rule — the taper (the printed 'rebound hypertension with abrupt cessation' applies to clonidine's own discontinuation).",
      },
      {
        stem:
          "A 27-year-old woman at 26 weeks gestation has chronic hypertension; her obstetrician starts an antihypertensive. Three weeks later she has fatigue and dark urine; labs show hemoglobin 9.1 g/dL, LDH elevated, haptoglobin low, and a POSITIVE direct antiglobulin (Coombs) test; the peripheral smear shows spherocytes. The question asks which antihypertensive she is most likely taking and the mechanism of her anemia.",
        discriminator:
          "The printed row: 'α-methyldopa' → 'Hypertension in pregnancy' | 'Direct Coombs ⊕ hemolysis, drug-induced lupus, hyperprolactinemia' — the pregnancy indication and the Coombs-positive hemolysis in two adjacent cells",
        concept:
          "α-methyldopa in pregnancy — the pregnancy-safe antihypertensive whose classic toxicity is a direct Coombs-positive autoimmune hemolytic anemia (± drug-induced lupus, hyperprolactinemia)",
        answer:
          "The drug is α-methyldopa — the printed 'Hypertension in pregnancy' row (the antihypertensive with the longest obstetric safety record; the alternatives the exam sorts: labetalol, nifedipine, hydralazine — while ACE inhibitors and ARBs are the contraindicated pair). The anemia is the printed toxicity: 'Direct Coombs ⊕ hemolysis' — methyldopa induces anti-Rh IgG antibodies that coat red cells (a positive DIRECT antiglobulin test), producing a warm autoimmune hemolytic anemia (spherocytes, dark urine, low haptoglobin). The mechanism of the ANTIHYPERTENSIVE effect itself: methyldopa is converted to α-methylnorepinephrine (KYP flag: the prodrug/false-neurotransmitter reading is not printed on this page), which stimulates the central α2 brake → '↓ sympathetic (adrenergic) outflow' (book 237). The exam's follow-ups: the other two members of the triad ('drug-induced lupus', 'hyperprolactinemia' — the same dopamine-brake axis as the antipsychotics), and the management (stop the drug; the hemolysis resolves; the Coombs test may stay positive for months).",
      },
      {
        stem:
          "An 8-year-old boy with attention-deficit/hyperactivity disorder has severe motor and vocal tics in addition to his hyperactivity; after behavioral therapy fails, the pediatrician adds a nonstimulant medication that also targets his tics. Weeks later he is calmer, but his mother reports he fell asleep doing homework. The question asks which receptor class this medication stimulates.",
        discriminator:
          "The printed row: 'Clonidine, guanfacine' → 'ADHD, Tourette syndrome' — the two psych-to-pharm crossovers in one applications cell; the sedation is the printed 'CNS depression' of the same row's adverse-effects cell",
        concept:
          "Guanfacine (and clonidine) for ADHD and Tourette syndrome — the α2-agonist nonstimulant lane, with CNS depression as its printed adverse effect",
        answer:
          "The receptor class is the α2-adrenergic receptor (presynaptic autoreceptor, Gi-coupled): guanfacine is the selective α2A agonist (clonidine the less selective parent drug) — both print in the same applications cell with 'ADHD, Tourette syndrome' (and 'Hypertensive urgency (limited situations)' and 'symptom control in opioid withdrawal'). The clinical picture carries the same row's adverse-effects cell: 'CNS depression' (the homework sleepiness), and the exam's other follow-ups from that cell — bradycardia, hypotension, respiratory depression, miosis, and the rebound rule ('rebound hypertension with abrupt cessation' — never stop abruptly; taper). The mechanism is the same brake as the hypertension use: '↓ sympathetic (adrenergic) outflow' (book 237) plus the CNS noradrenergic quieting — the same outflow story the stimulants (the sympathomimetics page behind) drive UP.",
      },
    ],
    traps: [
      {
        a: "Clonidine can be stopped abruptly once the blood pressure is controlled — it is a mild antihypertensive, so missing doses or stopping it suddenly is safe; a suddenly hypertensive, tachycardic, agitated patient after cessation must be a new disease process",
        b: "Missing the printed rebound clause — 'rebound hypertension with abrupt cessation' is IN the adverse-effects cell — and forgetting that the same α2 brake that lowers the outflow, when suddenly released, overshoots in the other direction",
        whyConfused:
          "The word 'rebound' is buried in a cell that otherwise lists overdose-type findings (CNS depression, bradycardia); the drug feels mild because its therapeutic effect is a quiet, low-toxicity lowering of the outflow; and the withdrawal picture (hypertension, tachycardia, agitation, tremor) looks like the underlying hypertension returning or a pheochromocytoma, not like the drug's absence",
        keyDifference:
          "The taper rule is printed in the table's own first row: 'rebound hypertension with abrupt cessation'. The mechanism is the brake's own physics: chronic α2 stimulation downregulates the sympathetic outflow set-point, and abrupt removal releases a NE surge (the mirror of the sympatholytic effect — the same outflow the sympathomimetics page drives up). Clinically: taper clonidine over several days (typically 2-4 days to a week); if rebound occurs, restart the drug and taper more slowly (± a β-blocker or phentolamine-type agent in severe cases — the α-blocker of the excluded table below is the same page's other tool). The exam stem that hands you an abruptly-stopped clonidine patient with hypertension + tachycardia + agitation is testing exactly this cell.",
        clue:
          "Any stem pairing an abruptly discontinued clonidine (or guanfacine, or — in the same logic — a tizanidine) with REBOUND hypertension, tachycardia, headache, sweating, or agitation is the printed rebound clause: the answer is the drug's own withdrawal — restart and taper, not a new workup.",
      },
      {
        a: "A patient found somnolent with pinpoint pupils and slow respirations must have taken an opioid — clonidine overdose is a sympatholytic, so it dilates pupils and speeds the heart like the anticholinergics do",
        b: "Conflating the toxidrome directions — clonidine's printed cell ends in MIOSIS (not mydriasis) and bradycardia (not tachycardia), because the α2 brake suppresses the sympathetic outflow that drives dilated pupils and fast hearts",
        whyConfused:
          "The classic toxidrome teaching (anticholinergic = hot/dry/fast/blind/mad; sympathomimetic = sweaty/dilated/fast) has no slot for the sympatholytic picture, so the somnolent-miotic-bradycardic patient defaults to 'opioid'; and clonidine IS given in opioid withdrawal, so the two drugs travel together in the same patients",
        keyDifference:
          "The printed cell settles it: 'CNS depression, bradycardia, hypotension, respiratory depression, miosis' — clonidine overdose is the OPIOID-LIKE toxidrome (sedation + miosis + respiratory depression + bradycardia), not the anticholinergic one. The mechanism: the α2 brake lowers sympathetic outflow — the pupils lose their dilator tone (miosis), the SA node loses its accelerator (bradycardia), the vessels lose their grip (hypotension), and the CNS and respiratory centers are depressed. The exam's management nuance: clonidine overdose (classically the toddler who grabs grandparent's patch or pill) is treated supportively (± naloxone as an adjunct that sometimes helps — the opioid-receptor crosstalk is the favorite nuance question), NOT with flumazenil or physostigmine.",
        clue:
          "In any toxic-ingestion stem, sort the pupil FIRST: MIOSIS + sedation + bradycardia = the α2 agonist (or the opioid — and clonidine's home use in opioid withdrawal makes the overlap deliberate); MYDRIASIS + dry skin + tachycardia = the anticholinergic (the atropine block); MYDRIASIS + wet skin + tachycardia = the sympathomimetic. The printed miosis in clonidine's cell is the tiebreaker.",
      },
      {
        a: "Methyldopa's positive Coombs test means the drug is contraindicated in pregnancy — a positive lab test is a toxicity, so the pregnancy antihypertensive should be labetalol or an ACE inhibitor instead; and the Coombs positivity means active hemolysis is always present",
        b: "Two errors in one: inverting the pregnancy-safety sort (α-methyldopa is the printed 'Hypertension in pregnancy' answer) and conflating the LAB finding (direct Coombs positivity, often harmless) with the DISEASE (hemolysis, which develops in only a fraction of Coombs-positive patients)",
        whyConfused:
          "The triad 'Direct Coombs ⊕ hemolysis, drug-induced lupus, hyperprolactinemia' reads like a contraindication list; the obstetric alternatives (labetalol, nifedipine) are also 'safe in pregnancy' answers; and the exam asks about the Coombs test in both directions (the drug that causes it vs the test's meaning)",
        keyDifference:
          "The printed cells carry both facts separately: 'Hypertension in pregnancy' is the APPLICATIONS cell (methyldopa is a first-line chronic-hypertension-in-pregnancy drug — decades of safety data), and 'Direct Coombs ⊕ hemolysis' is the ADVERSE EFFECTS cell (the drug induces anti-RBC IgG in a substantial fraction of patients on chronic therapy — most Coombs-positive patients do NOT hemolyze; those who do develop a warm autoimmune hemolytic anemia that resolves when the drug is stopped, though the test can stay positive for months). The contraindicated antihypertensives in pregnancy are the ACE inhibitors/ARBs (fetopathy — that topic's own print); labetalol and nifedipine are the alternatives, not the replacements-for-cause. The exam asks: 'which chronic antihypertensive is associated with a positive direct Coombs test?' — α-methyldopa.",
        clue:
          "Any pregnancy-hypertension stem with a lab twist (positive direct antiglobulin test, spherocytes, dark urine, low haptoglobin) is the methyldopa row: answer α-methyldopa as the drug, autoimmune hemolytic anemia as the process — and know the pregnancy sort (methyldopa/labetalol/nifedipine safe; ACE inhibitors/ARBs contraindicated).",
      },
      {
        a: "All α2 drugs act the same way, so mirtazapine — listed with the α2 drugs on the same book-243 page — must also lower blood pressure and treat ADHD; and clonidine, being a centrally acting drug, must be an antidepressant like it",
        b: "Missing the agonist/antagonist mirror — THIS block's drugs STIMULATE the α2 autoreceptor (sympatholysis: outflow down, BP down, sedation), while mirtazapine BLOCKS it (noradrenergic outflow UP — an antidepressant mechanism with its own adverse set: sedation, ↑ cholesterol, ↑ appetite)",
        whyConfused:
          "Both print on the SAME page under the same 'PHARMACOLOGY—AUTONOMIC DRUGS' banner, both are centrally acting α2 drugs, and both cause sedation — the surface features match; the receptor direction is the only difference, and it is not printed next to the drug names",
        keyDifference:
          "The receptor direction: an α2 AGONIST pulls the presynaptic brake ('presynaptic α2-autoreceptors → negative feedback.', book 238) — NE release falls, '↓ sympathetic (adrenergic) outflow' (book 237), blood pressure falls, the CNS quiets (the ADHD/Tourette/withdrawal uses). An α2 ANTAGONIST (mirtazapine, the 'α2 selective' row of the EXCLUDED α-blockers table BELOW this block on the same page) releases the brake — NE (and serotonin, via the heteroreceptor logic of the psychiatry chapters) outflow rises, which is the antidepressant direction; its printed cells ('Depression.' | 'Sedation, ↑ serum cholesterol, ↑ appetite.') belong to that topic, not this one. The sedation both cause is the trap's fuel: same symptom, opposite receptor direction. Note also mirtazapine's appetite/cholesterol direction is the metabolic OPPOSITE of the sympatholysis story.",
        clue:
          "Any option-pair that offers clonidine and mirtazapine for the same stem is testing the mirror: hypertension/ADHD/withdrawal/spasticity → the AGONIST (this block); depression with insomnia and poor appetite → the ANTAGONIST (mirtazapine — the α-blockers topic's own row, one table below on the same page).",
      },
    ],
    pivots: [
      {
        lookAlike: "Any 'which of the following drugs / best treatment' stem that hands you one of the five α2-agonist patients — the urgency hypertensive, the child with ADHD or Tourette tics, the opioid-withdrawing patient, the pregnant patient with chronic hypertension, the spastic MS or spinal-cord-injury patient — and asks the drug or its receptor",
        differentiator:
          "The PATIENT-SORT frame (KYP overlay on the printed rows): sort the patient to the row — PREGNANT → 'α-methyldopa' ('Hypertension in pregnancy'); CHILD with ADHD/tics → 'Clonidine, guanfacine' ('ADHD, Tourette syndrome'); WITHDRAWING → clonidine ('symptom control in opioid withdrawal'); SPASTIC → 'Tizanidine' ('Relief of spasticity'); URGENCY-HYPERTENSIVE → clonidine '(limited situations)' — then answer the receptor: presynaptic α2, Gi-coupled (the i-family of book 237)",
        correctPath:
          "(1) Read the PATIENT, not the drug list: the five printed applications ARE five patients, and the sort is faster than any mechanism recall. (2) Confirm the class signature: centrally acting, sedating, bradycardic — and if the stem asks the receptor, answer the presynaptic α2 autoreceptor (Gi → ↓ sympathetic outflow — the printed anchors of books 237/238). (3) Sort the distractors by their own lanes: the β-blockers (one page ahead — the other sympatholytics, blocking the receptor instead of the outflow), the α1-blockers (the excluded same-page table — the -osin four for BPH), the ACE inhibitors/ARBs (contraindicated in the pregnant patient), and the stimulants (methylphenidate/amphetamine — the ADHD lane's other family, the sympathomimetic direction). (4) Carry the row's toxicity cell with the drug: clonidine → the sedation/miosis/rebound set; methyldopa → the Coombs/lupus/prolactin triad; tizanidine → hypotension/weakness/xerostomia. (5) If the stem is a lab abnormality rather than a patient, run the reverse sort: Coombs ⊕ → methyldopa; rebound HTN → clonidine cessation; dry mouth + weakness in a spastic patient → tizanidine.",
      },
      {
        lookAlike: "Any 'adverse effect / next step in management' stem on a patient who has TOO MUCH or TOO LITTLE α2 tone — the toddler who ate grandparent's clonidine (somnolent, miotic, bradycardic, hypotensive), the abruptly-stopped patient (hypertensive, tachycardic, agitated), or the chronic methyldopa patient with a positive Coombs test — asking the recognition or the management",
        differentiator:
          "The three toxicity pictures of the printed cells: the OVERSHOOT picture ('CNS depression, bradycardia, hypotension, respiratory depression, miosis' — the dimmer at zero, the opioid-like toxidrome), the REBOUND picture ('rebound hypertension with abrupt cessation' — the dimmer snapped back), and the AUTOIMMUNE picture ('Direct Coombs ⊕ hemolysis, drug-induced lupus, hyperprolactinemia' — the methyldopa triad)",
        correctPath:
          "(1) Establish the EXPOSURE and its DIRECTION: too much drug (overdose — the toddler with the patch, the deliberately-ingested pills) vs too little (withdrawal — the missed doses, the abrupt stop) vs chronic therapy (the methyldopa lab drift). (2) The overdose picture runs the printed cell in order: CNS depression → bradycardia → hypotension → respiratory depression → miosis; manage supportively (airway, fluids, vasopressors if needed; naloxone is the adjunct that sometimes reverses the CNS/respiratory depression — the opioid-receptor crosstalk the exam loves). (3) The rebound picture is hypertension + tachycardia + agitation + sweating after abrupt cessation: restart the drug and taper over days — do not work up a new pheochromocytoma reflexively. (4) The autoimmune picture: Coombs positivity without hemolysis needs only monitoring; with hemolysis (spherocytes, dark urine, low haptoglobin), stop the drug — the anemia resolves, the test lags. (5) The reverse traps: the miosis should push you toward clonidine/opioid and away from anticholinergic/sympathomimetic; the withdrawal hypertension should push you toward the drug history and away from new diagnoses.",
      },
    ],
    miniCase: {
      vignette:
        "A 29-year-old woman at 30 weeks gestation has been treated for chronic hypertension since early pregnancy. She presents with a two-week history of increasing fatigue and dark urine. On examination she is pale; vital signs: blood pressure 138/88 mmHg (controlled on her medication), heart rate 96/min, temperature 37.0°C. Labs: hemoglobin 8.9 g/dL (baseline 12.1), MCV 104 fL, reticulocytes 9%, LDH markedly elevated, haptoglobin undetectable, total bilirubin 3.1 mg/dL with an indirect fraction of 2.6 mg/dL. Urinalysis is positive for blood; urine protein is negative. The peripheral smear shows spherocytes and polychromasia; the direct antiglobulin (Coombs) test is strongly positive for IgG. Fetal monitoring is reassuring. A review of her medication list shows one antihypertensive, unchanged since the first trimester.",
      question:
        "Which antihypertensive is she most likely taking, what is the mechanism of BOTH its therapeutic effect and her anemia, and what is the best next step in management?",
      options: [
        {
          label:
            "α-methyldopa — the pregnancy-safe antihypertensive that lowers outflow through the central α2 brake (converted to α-methylnorepinephrine); its chronic use induces anti-RBC IgG (the positive direct Coombs test), causing a warm autoimmune hemolytic anemia; the next step is to stop the drug and transition the antihypertensive (the hemolysis resolves, the Coombs test may lag for months).",
          text: "α-methyldopa; drug-induced warm autoimmune hemolytic anemia; stop the drug and switch antihypertensives.",
          correct: true,
          why:
            "Every printed cell points here: 'α-methyldopa' → 'Hypertension in pregnancy' (the APPLICATIONS cell — the antihypertensive with the longest obstetric safety record, the one unchanged since the first trimester) | 'Direct Coombs ⊕ hemolysis' (the ADVERSE EFFECTS cell — the exact lab set: strongly IgG-positive direct antiglobulin test, spherocytes, high LDH, undetectable haptoglobin, indirect hyperbilirubinemia, hemoglobinuria). The therapeutic mechanism: the prodrug is converted to α-methylnorepinephrine (KYP flag: the conversion is not printed on this page), which stimulates the central presynaptic α2 brake — 'presynaptic α2-autoreceptors → negative feedback.' (book 238) → '↓ sympathetic (adrenergic) outflow' (book 237) — the same brake clonidine pulls. The anemia mechanism: chronic methyldopa induces anti-Rh IgG antibodies that coat the red cells (the positive DIRECT Coombs test); the coated cells are cleared by splenic macrophages — a warm autoimmune hemolytic anemia (the same spherocyte picture as hereditary spherocytosis or CLL-associated AIHA, but with the drug history and the IgG-positive test). The management: stop the drug (most Coombs-positive patients never hemolyze; those who do recover after withdrawal — the test may stay positive for months), and switch to another pregnancy-safe antihypertensive (labetalol or nifedipine — the ACE inhibitors/ARBs remain contraindicated); severe hemolysis gets transfusion support ± steroids, and the reassuring fetal monitoring argues against delivery.",
        },
        {
          label:
            "Labetalol — the pregnancy-hypertension mainstay; the anemia is a β-blocker-induced bone-marrow suppression from chronic therapy, and the positive Coombs test is a lab error from the pregnancy itself; continue the drug and repeat the panel.",
          text: "Labetalol; β-blocker marrow suppression; continue and repeat labs.",
          why:
            "The wrong-drug distractor with a wrong mechanism: labetalol IS a pregnancy-safe antihypertensive (a combined α1/β blocker — the β-blockers table one page ahead), but it is not associated with Coombs-positive hemolysis, and β-blockers do not cause reticulocytotic hemolysis with spherocytes — the 9% reticulocytes and the polychromasia scream peripheral destruction, not marrow suppression (which would give a LOW reticulocyte count). The strongly IgG-positive direct antiglobulin test is not a pregnancy artifact; among antihypertensives the printed association is the methyldopa row's own cell. Continuing the culprit drug is the management error the exam punishes.",
        },
        {
          label:
            "Preeclampsia evolving to HELLP syndrome — the hemolysis and the elevated LDH are microangiopathic (the smear's schistocytes were 'overlooked'); the next steps are magnesium sulfate, antihypertensives, and delivery planning.",
          text: "Severe preeclampsia/HELLP; magnesium, BP control, and deliver.",
          why:
            "The obstetric-mirror distractor: HELLP (Hemolysis, Elevated Liver enzymes, Low Platelets) DOES hemolyze in pregnancy — but this patient's picture is the wrong shape: platelets are not reported low, liver enzymes are not the story, the blood pressure is CONTROLLED (138/88 — not the severe range), urine protein is NEGATIVE, the fetus is reassuring, and the smear shows SPHEROCYTES with a strongly IgG-POSITIVE direct Coombs test — the autoimmune signature — rather than the schistocyte signature of microangiopathic destruction (which also coats TTP/HUS/DIC, the other schistocyte syndromes). HELLP does not produce a positive direct antiglobulin test; methyldopa does (the printed cell). The gestational age (30 weeks) would make premature delivery a costly wrong move.",
        },
        {
          label:
            "Hereditary spherocytosis unmasked by the hemodynamic stress of pregnancy — the family history was simply never taken; the positive Coombs test is a false positive of pregnancy; manage with folate and observation.",
          text: "Hereditary spherocytosis; folate and observation.",
          why:
            "The spherocyte-lookalike distractor: hereditary spherocytosis IS a spherocyte hemolysis — but it gives a NEGATIVE direct antiglobulin test (the Coombs-negative hemolysis — the classic exam sort: spherocytes + Coombs-positive = autoimmune; spherocytes + Coombs-negative = hereditary, and the family history and the chronic lifelong anemia would have surfaced long before week 30). This patient's baseline hemoglobin was 12.1 two weeks ago — a new-onset hemolysis in a patient on the one drug whose printed cell is 'Direct Coombs ⊕ hemolysis'. Observation without stopping the drug lets the hemolysis continue.",
        },
        {
          label:
            "Clonidine — the other pregnancy-safe central agent; the anemia is its printed Coombs-positive hemolysis (the same autoimmune mechanism as methyldopa); stop it and taper to avoid rebound hypertension.",
          text: "Clonidine; same Coombs-positive hemolysis; stop and taper.",
          why:
            "The half-right distractor: clonidine shares the central α2 mechanism (the printed row directly above methyldopa — 'Hypertensive urgency (limited situations), ADHD, Tourette syndrome, symptom control in opioid withdrawal') and the taper rule ('rebound hypertension with abrupt cessation' — if she WERE on clonidine, the taper clause would matter). But clonidine's printed adverse-effects cell is the sympatholytic overshoot set ('CNS depression, bradycardia, hypotension, respiratory depression, miosis') — NOT the Coombs triad; the Coombs-positive hemolysis belongs to the methyldopa row alone on this page. The distractor tests whether you read the rows as one drug-family (mechanism shared) or as distinct drugs (toxicities NOT shared): the therapeutic mechanism is shared, the autoimmune toxicity is not.",
        },
      ],
      reasoning:
        "The vignette is the methyldopa ROW presented as a patient — the application ('Hypertension in pregnancy', the medication unchanged since the first trimester) and the adverse-effect cell ('Direct Coombs ⊕ hemolysis') both given a vital sign, a smear, and a lab panel. (1) THE DRUG — the printed applications cell: 'α-methyldopa' → 'Hypertension in pregnancy' — among antihypertensives the pregnancy-chronic first-line set is methyldopa, labetalol, nifedipine (the ACE inhibitors/ARBs contraindicated — fetopathic), and the one whose chronic use produces this exact lab picture is methyldopa. (2) THE THERAPEUTIC MECHANISM — the same brake as the rest of this block: the central presynaptic α2 autoreceptor stimulated ('presynaptic α2-autoreceptors → negative feedback.', book 238; '↓ sympathetic (adrenergic) outflow', book 237) — via its α-methylnorepinephrine metabolite (KYP flag: the prodrug conversion is not printed on this page). (3) THE ANEMIA MECHANISM — the printed cell read as immunohematology: chronic methyldopa induces anti-RBC IgG → the positive DIRECT antiglobulin test → splenic clearance of coated cells → warm autoimmune hemolytic anemia (spherocytes, reticulocytosis, high LDH, low haptoglobin, indirect hyperbilirubinemia, hemoglobinuria) — the same peripheral-destruction picture the exam contrasts with marrow suppression (the labetalol distractor's low-reticulocyte error) and with microangiopathic hemolysis (the HELLP distractor's missing schistocytes/low platelets/liver enzymes) and with Coombs-negative spherocytosis (the hereditary distractor's negative-test signature). (4) THE MANAGEMENT — stop the culprit, switch within the pregnancy-safe set (labetalol or nifedipine), support as needed (transfusion ± steroids if severe); the hemolysis resolves, the Coombs test may lag months (the printed cell's lab fine print). (5) THE CLINCHER — the same row's OTHER adverse effects complete the triad for the follow-up questions: 'drug-induced lupus' (if she later develops arthralgias and a positive ANA — the drug-induced-lupus drug list includes methyldopa) and 'hyperprolactinemia' (the dopamine-brake axis — amenorrhea/galactorrhea if asked). The discriminator to carry: on this page the therapeutic mechanism is shared by all three rows, but each row's TOXICITY cell is its own fingerprint — and the Coombs-positive hemolysis fingerprint is methyldopa's alone.",
    },
  },
  mnemonics: [
    {
      code: "CLONIDINE HERDS THE C.A.T.S. (KYP): C = hypertensive urgency ('limited situations' — the Crisis-adjacent use), A = ADHD, T = Tourette syndrome (the tics), S = Symptom control in opioid withdrawal — the four printed applications of the 'Clonidine, guanfacine' row",
      meaning:
        "The KYP compression of the headliner row's applications cell — 'Hypertensive urgency (limited situations), ADHD, Tourette syndrome, symptom control in opioid withdrawal' — into one herd: C.A.T.S. Every use is the book's own print; the herd compression is KYP's. Guanfacine shares the cell (and the ADHD lane is its own strongest indication — the α2A-selective member); clonidine is the one that carries all four uses into the exam.",
      memorizes: "The four printed applications of clonidine/guanfacine — and the '(limited situations)' hedge on the hypertension use (not the routine first-line)",
      whenToUse:
        "Any stem asking what clonidine or guanfacine is used for, or the reverse (which drug for ADHD-with-tics, which for opioid-withdrawal symptoms, which centrally acting agent for urgent hypertension in limited situations). If the patient is PREGNANT, leave the herd — the pregnancy row is methyldopa's alone; if the patient is SPASTIC, leave the herd — that is tizanidine's row.",
      clinical:
        "The herd travels with the sedation: every C.A.T.S. patient gets the adverse-effects cell's warning set (CNS depression — warn about driving; bradycardia, hypotension — check orthostatics; miosis; and the taper rule — 'rebound hypertension with abrupt cessation': never stop abruptly, taper over days). The ADHD use pairs with the stimulants (the other ADHD family — the sympathomimetic direction); the withdrawal use pairs with the opioid protocol (methadone/buprenorphine for maintenance, clonidine/lofexidine for the autonomic symptoms).",
    },
    {
      code: "THE SYMPATHETIC DIMMER (KYP): α2 IS THE VOLUME KNOB — turn α2 ON and the amp goes DOWN: 'presynaptic α2-autoreceptors → negative feedback.' (book 238) + α2 rides Gi ('M2, α2, or D2 receptor' → 'Gi protein', book 237) → '↓ sympathetic (adrenergic) outflow' (book 237, the α2 row's first printed function)",
      meaning:
        "The KYP mechanism frame that unifies the block: the α2 receptor is the sympathetic system's own dimmer — the presynaptic autoreceptor that NE uses to shut itself off. The agonists (clonidine, guanfacine, α-methylnorepinephrine) are the hand that pulls the knob: outflow down → HR down, BP down, renin down, and the CNS quieted. Every printed use (hypertension, withdrawal, ADHD, tics, spasticity) and every printed toxicity (CNS depression, bradycardia, hypotension, respiratory depression, miosis) is the dimmer at one setting or another — and the rebound is the knob snapped back. The anchors are all printed (books 237/238); the dimmer reading and the medullary-location flag are KYP's.",
      memorizes: "The mechanism — why an α2 AGONIST is sympatholytic, why it couples Gi (the i-family: M2, α2, D2), and why both the uses and the toxicities run in the DOWN direction",
      whenToUse:
        "Any mechanism question on this block ('how does clonidine lower blood pressure' → stimulates presynaptic α2 autoreceptors in the CNS → ↓ sympathetic outflow), any G-protein question ('α2 couples which G protein' → Gi → ↓ adenylyl cyclase → ↓ cAMP), and the direction sort against the mirror (α2 antagonist = mirtazapine = the knob released = noradrenergic outflow UP = antidepressant).",
      clinical:
        "The dimmer explains the three clinical settings the exam recycles: therapeutic (the knob pulled to target — the antihypertensive effect, the withdrawal quieting), overdose (the knob at zero — the opioid-like toxidrome: sedation + miosis + bradycardia + respiratory depression), and withdrawal (the knob snapped back — rebound hypertension + tachycardia + agitation). Same knob, three stems — and the management differs each time (titrate, support, taper).",
    },
    {
      code: "METHYLDOPA = MOM + COOMBS (KYP): the MOM drug ('Hypertension in pregnancy') whose chronic use turns the COOMBS test positive ('Direct Coombs ⊕ hemolysis') — and the triad completes with 'drug-induced lupus' and 'hyperprolactinemia'",
      meaning:
        "The KYP compression of the methyldopa row's two cells into one phrase: MOM (the pregnancy indication — the antihypertensive with the longest obstetric safety record) + COOMBS (the direct antiglobulin test turned positive, with hemolysis in the fraction who go on to warm autoimmune hemolytic anemia). The other two members of the printed triad: drug-induced lupus (the ANA-positive, arthralgia mimic — methyldopa is on the classic drug-lupus list with hydralazine, procainamide, isoniazid) and hyperprolactinemia (the dopamine-axis finding — amenorrhea/galactorrhea). Both cells are the book's own print; the MOM+COOMBS phrase is KYP's.",
      memorizes: "The methyldopa row whole: the indication (pregnancy HTN) and the full toxicity triad (Coombs ⊕ hemolysis, drug-induced lupus, hyperprolactinemia)",
      whenToUse:
        "Any pregnancy-hypertension stem (which antihypertensive for chronic HTN in pregnancy → methyldopa/labetalol/nifedipine, never ACE inhibitors/ARBs), any lab-twist stem (positive direct Coombs test in a treated hypertensive → methyldopa), and any 'which drug causes...' question that targets the triad's members (drug-induced lupus list; hyperprolactinemia causes — the same axis as antipsychotics and metoclopramide).",
      clinical:
        "The Coombs cascade in practice: chronic therapy → anti-RBC IgG appears (test positive, patient well) → a fraction progress to hemolysis (spherocytes, dark urine, fatigue) → stop the drug → the anemia resolves, the test lags for months (counsel the patient; avoid mislabeling as a future transfusion problem). In pregnancy the switch stays inside the safe set (labetalol, nifedipine). The lupus and prolactin members are the follow-up questions the same stem can ask.",
    },
    {
      code: "TIZANIDINE TAMES TONE (KYP): the T-drug for TONE — 'Tizanidine' → 'Relief of spasticity' (the MS/spinal-cord/cerebral-palsy muscle tone), with the printed trio 'Hypotension, weakness, xerostomia' — and its dry mouth is the α2 salivary address of book 236 ('Inhibition of salivary secretion')",
      meaning:
        "The KYP compression of the block's shortest row: the muscle-relaxant member — an α2 agonist aimed at spasticity rather than blood pressure. The toxicity trio sorts by mechanism: 'Hypotension' is the brake overshooting (the same direction as row 1's cell), 'weakness' is the therapeutic effect overshot into the undesired muscles, and 'xerostomia' is the peripheral α2 salivary address — the printed 'Inhibition of salivary secretion' of the tissue-distribution row (book 236). The row is the book's own print; the T-frame is KYP's.",
      memorizes: "The tizanidine row whole — the indication (spasticity) and the toxicity trio (hypotension, weakness, xerostomia) — and why the dry mouth happens",
      whenToUse:
        "Any spasticity stem (MS, spinal cord injury, cerebral palsy — which α2 agonist → tizanidine; sort against baclofen the GABA-B agonist, the benzodiazepines, and dantrolene the ryanodine-blocker — the same sort the exam runs on the muscle-relaxant family), and any adverse-effect stem in a spastic patient on the T-drug (the weak, dizzy, dry-mouthed patient is the printed trio).",
      clinical:
        "The muscle-relaxant sort the exam runs: tizanidine (α2 agonist — central, sedating, hypotensive, dry mouth) vs baclofen (GABA-B — central, sedating) vs benzodiazepines (GABA-A) vs dantrolene (ryanodine receptor — peripheral, the malignant-hyperthermia drug). Tizanidine's hepatotoxicity monitoring (a KYP flag — not printed in this block's cells) and its interactions (CYP1A2 inhibitors like ciprofloxacin raise its levels) are the fine-print follow-ups; the taper rule applies here too — abrupt cessation can rebound the spasticity and the pressure.",
    },
  ],
  rapidReview: {
    s30: [
      "'Sympatholytics (α2-agonists)' — the class-table block, the UPPER portion of book 243 (pdf 265, lines 9-37), under the standing PHARMACOLOGY—AUTONOMIC DRUGS banner; the LOWER portion of the same page is the α-blockers class table (the PENDING alpha-blockers topic — EXCLUDED, boundary pinned from above).",
      "The table frame: three printed column headers — DRUG / APPLICATIONS / ADVERSE EFFECTS — and three drug rows.",
      "Row 1 applications, verbatim: 'Clonidine, guanfacine' → 'Hypertensive urgency (limited situations), ADHD, Tourette syndrome, symptom control in opioid withdrawal'.",
      "Row 1 adverse effects, verbatim: 'CNS depression, bradycardia, hypotension, respiratory depression, miosis, rebound hypertension with abrupt cessation'.",
      "Row 2, verbatim: 'α-methyldopa' → 'Hypertension in pregnancy' | 'Direct Coombs ⊕ hemolysis, drug-induced lupus, hyperprolactinemia'.",
      "Row 3, verbatim: 'Tizanidine' → 'Relief of spasticity' | 'Hypotension, weakness, xerostomia'.",
      "The mechanism anchors (printed on the completed pages): 'presynaptic α2-autoreceptors → negative feedback.' (book 238) and 'α2' | 'i' | '↓ sympathetic (adrenergic) outflow...' (book 237).",
      "The Gi couple: 'M2, α2, or D2 receptor' → 'Gi protein' (book 237's own figure grouping — α2 is the i-family with M2 and D2).",
      "The peripheral α2 addresses (book 236): 'Pancreas / Presynaptic terminals / Salivary glands' → 'Inhibition of insulin secretion / Inhibition of neurotransmitter release / Inhibition of salivary secretion'.",
      "The boundaries: pdf 264 behind carries the sympathomimetics tail; pdf 266 ahead opens 'β-blockers' — this block is pdf 265's UPPER portion alone (sourcePages = [265]).",
    ],
    m3: [
      "C.A.T.S. (KYP) — clonidine/guanfacine herds the four printed uses: hypertensive urgency (limited situations), ADHD, Tourette tics, opioid-withdrawal Symptoms; the tox cell ends in the taper rule (rebound hypertension with abrupt cessation).",
      "THE SYMPATHETIC DIMMER (KYP) — α2 is the volume knob: agonist ON → Gi → '↓ sympathetic (adrenergic) outflow' (book 237's first printed α2 function) → HR/BP down; overdose = the opioid-like picture (sedation + miosis + bradycardia); antagonist (mirtazapine, the excluded same-page row) = the knob released = antidepressant.",
      "MOM + COOMBS (KYP) — methyldopa: the MOM drug ('Hypertension in pregnancy') with the COOMBS-positive triad ('Direct Coombs ⊕ hemolysis, drug-induced lupus, hyperprolactinemia'); TIZANIDINE TAMES TONE — spasticity with 'Hypotension, weakness, xerostomia'.",
    ],
    m10: [
      "The whole block in one breath: one header ('Sympatholytics (α2-agonists)'), one three-column table (DRUG/APPLICATIONS/ADVERSE EFFECTS), three rows — clonidine/guanfacine (four uses + the six-finding cell with the rebound clause), α-methyldopa (pregnancy + the autoimmune triad), tizanidine (spasticity + the three-finding trio).",
      "The mechanism, assembled from three printed anchors: the α2 receptor is the presynaptic autoreceptor ('Release of norepinephrine from a sympathetic nerve ending is modulated by NE itself, acting on presynaptic α2-autoreceptors → negative feedback.', book 238); it rides Gi (the i-family: 'M2, α2, or D2 receptor' → 'Gi protein', book 237); and its first printed function is '↓ sympathetic (adrenergic) outflow' (book 237) — the brake the agonists pull (the central/medullary location and the α-methylnorepinephrine prodrug reading are KYP-flagged, not printed on this page).",
      "The four clonidine/guanfacine uses resolved: hypertensive urgency — the outflow turned down in limited situations (the book's own hedge); ADHD — the nonstimulant lane (guanfacine the α2A-selective member, paired against the stimulants); Tourette syndrome — the tics quieted with the outflow; opioid withdrawal — the autonomic storm (NE surge) blunted at its source.",
      "The clonidine toxicity cell, finding to mechanism: 'CNS depression' — the CNS outflow quieted too far; 'bradycardia' — the SA node's accelerator off; 'hypotension' — the vascular tone off; 'respiratory depression' — the brainstem quieted; 'miosis' — the pupil's dilator tone off (the opioid-like finding); 'rebound hypertension with abrupt cessation' — the brake released at once.",
      "The methyldopa row double-read: THERAPEUTIC — 'Hypertension in pregnancy' (chronic HTN in pregnancy: methyldopa/labetalol/nifedipine safe; ACE inhibitors/ARBs contraindicated); TOXIC — the autoimmune triad ('Direct Coombs ⊕ hemolysis' — anti-RBC IgG, warm AIHA, spherocytes, resolves on withdrawal with the test lagging months; 'drug-induced lupus' — the hydralazine/procainamide/isoniazid list; 'hyperprolactinemia' — the dopamine-axis finding).",
      "The tizanidine row: 'Relief of spasticity' (the MS/spinal-cord/cerebral-palsy lane) with 'Hypotension, weakness, xerostomia' — the hypotension is the brake overshooting, the xerostomia is the α2 salivary address ('Inhibition of salivary secretion', book 236), and the muscle-relaxant sort runs against baclofen (GABA-B), benzodiazepines (GABA-A), and dantrolene (ryanodine).",
      "The receptor mirror on the same page: the EXCLUDED α-blockers table's last row — 'α2 selective' + 'Mirtazapine' → 'Depression.' — is the α2 ANTAGONIST: agonists pull the brake (sympatholysis), mirtazapine releases it (noradrenergic outflow up, antidepressant; 'Sedation, ↑ serum cholesterol, ↑ appetite' are that row's own cells — cited as boundary mirror only).",
      "The toxidrome sorts: clonidine overdose = MIOSIS + sedation + bradycardia + respiratory depression (the opioid-like picture — naloxone sometimes helps); anticholinergic = mydriasis + dry + fast (the atropine block, two pages back); sympathomimetic = mydriasis + wet + fast (the page behind); and the pupil is the first sort.",
      "The two management rules: never stop clonidine abruptly (the printed rebound clause — taper over days; if rebound occurs, restart and taper slower) and always check the Coombs direction in a treated hypertensive (the direct test positive = the drug, not a transfusion reaction or a pregnancy artifact).",
      "What this block does NOT print (census-flagged, never cited as printed): the mechanism sentence (it prints on book 238), the α2/Gi row and the i-family figure (book 237), the α2 distribution row (book 236), the central/medullary location of the clonidine effect (KYP flag), the α-methylnorepinephrine prodrug conversion (KYP flag), and every row of the α-blockers table below on the same page (phenoxybenzamine, phentolamine, the -osin four, mirtazapine — that table is the PENDING alpha-blockers topic's own print; this block does NOT extend to pdf 266, which opens β-blockers).",
    ],
  },
  recall: [
    {
      q: "Recite the Sympatholytics (α2-agonists) table whole — all three rows, all three columns, verbatim.",
      a:
        "ROW 1: 'Clonidine, guanfacine' → 'Hypertensive urgency (limited situations), ADHD, Tourette syndrome, symptom control in opioid withdrawal' | 'CNS depression, bradycardia, hypotension, respiratory depression, miosis, rebound hypertension with abrupt cessation'. ROW 2: 'α-methyldopa' → 'Hypertension in pregnancy' | 'Direct Coombs ⊕ hemolysis, drug-induced lupus, hyperprolactinemia'. ROW 3: 'Tizanidine' → 'Relief of spasticity' | 'Hypotension, weakness, xerostomia'. Column headers: DRUG / APPLICATIONS / ADVERSE EFFECTS.",
    },
    {
      q: "State the mechanism of this drug class from its three printed anchor pages (books 238, 237, 236) — and name the two readings that are NOT printed (KYP-flagged).",
      a:
        "ANCHOR 1 (book 238, autonomic-drugs): 'Release of norepinephrine from a sympathetic nerve ending is modulated by NE itself, acting on presynaptic α2-autoreceptors → negative feedback.' — the brake is presynaptic. ANCHOR 2 (book 237, second messengers): 'α2' | 'i' | '↓ sympathetic (adrenergic) outflow, ↓ insulin release, ↓ lipolysis, ↑ platelet aggregation, ↓ aqueous humor production' + the figure labels 'M2, α2, or D2 receptor' → 'Gi protein' — the couple is Gi, and the first printed function is the outflow fall. ANCHOR 3 (book 236, tissue distribution): 'α2' | 'Pancreas / Presynaptic terminals / Salivary glands' → 'Inhibition of insulin secretion / Inhibition of neurotransmitter release / Inhibition of salivary secretion' — the peripheral addresses. NOT PRINTED (KYP-flagged): the central/medullary location of the clonidine effect, and the α-methyldopa → α-methylnorepinephrine prodrug/false-neurotransmitter conversion.",
    },
    {
      q: "A toddler is found somnolent with pinpoint pupils, heart rate 58/min, blood pressure 68/34 mmHg, and shallow respirations, holding grandparent's spilled pill bottle. What drug class, what toxidrome direction, and what is the management frame?",
      a:
        "The α2-AGONIST overdose (clonidine — the headliner of the 'Clonidine, guanfacine' row). The picture is the printed adverse-effects cell: 'CNS depression, bradycardia, hypotension, respiratory depression, miosis' — the OPIOID-LIKE toxidrome (the miosis is the pupil's dilator tone off — the opposite of the anticholinergic mydriasis). Management: supportive (airway, fluids, vasopressors as needed); naloxone is the adjunct that sometimes reverses the CNS and respiratory depression (the opioid-receptor crosstalk). The class's home indication in opioid withdrawal is the same direction — the drug and the syndrome it treats share a toxidrome.",
    },
    {
      q: "Which printed clause of this block is the taper rule, what does its syndrome look like, and how is it managed?",
      a:
        "THE CLAUSE: 'rebound hypertension with abrupt cessation' — the last finding of the 'Clonidine, guanfacine' adverse-effects cell. THE SYNDROME: after abrupt clonidine (or guanfacine) discontinuation, hypertension + tachycardia + agitation + sweating + tremor — the brake released, the NE outflow surging (the mirror of the sympatholytic effect; it can mimic pheochromocytoma or a sympathomimetic ingestion). THE MANAGEMENT: restart the drug and taper over days (typically 2-4 days to a week); severe cases add a β-blocker or an α-blocker. The exam's face: the abruptly-stopped patient with NEW hypertension is the drug's own withdrawal, not a new disease.",
    },
    {
      q: "State the PH22/alpha-blockers boundary of book 243 from above, the section-extent findings for pdf 264 and pdf 266, and the receptor-mirror citation the boundary carries.",
      a:
        "THE BOUNDARY (pinned from above): pdf 265 (book 243) prints TWO separable sections under the one banner — the 'Sympatholytics (α2-agonists)' block ABOVE (lines 9-37: THIS topic — the header + the three-row DRUG/APPLICATIONS/ADVERSE EFFECTS table) and the α-blockers class table BELOW (lines 39-78: the SEPARATE PENDING alpha-blockers topic — 'Nonselective' phenoxybenzamine/phentolamine, 'α1 selective (-osin ending)' prazosin/terazosin/doxazosin/tamsulosin, 'α2 selective' mirtazapine — EXCLUDED, only its header pair + first/last drug rows pinned as boundary markers). THE EXTENT: pdf 264 behind carries only the sympathomimetics tail (the physiologic-effects figure captions); pdf 266 ahead opens 'β-blockers' (the pending beta-blockers topic); sourcePages = [265] only. THE MIRROR: the excluded table's last row — 'α2 selective' + 'Mirtazapine' → 'Depression.' — is the α2 ANTAGONIST (the receptor mirror of this block's agonists: it releases the brake mirtazapine-style for the antidepressant direction); cited as boundary only, its cells never as this block's print.",
    },
  ],
  related: [
    {
      title: "Autonomic Drugs — the Page That Prints This Block's Mechanism Sentence",
      topicId: "autonomic-drugs",
      note:
        "The completed PH17 (book 238): the autonomic circuitry page whose opening sentence IS the α2-agonist mechanism — 'Release of norepinephrine from a sympathetic nerve ending is modulated by NE itself, acting on presynaptic α2-autoreceptors → negative feedback.' — the brake this whole block pulls, printed on the physiology page one chapter-section back. The same page's amphetamine paragraph (the NET/VMAT displacement story, the NE expulsion) is the RELEASE mechanism the α2 brake modulates: the sympathomimetics (the completed pilot) drive the NE out, the α2 agonists shut the tap — the two directions the exam sorts between any '↑ NE vs ↓ outflow' stem. The cholinergic/noradrenergic drug-sort tables on that page are the frame this block's table completes on the pharmacology side.",
    },
    {
      title: "G-Protein–Linked Second Messengers — the α2 = Gi Row",
      topicId: "g-protein-linked-second-messengers",
      note:
        "The completed PH16 (book 237): the receptor → G-protein → function table that carries α2's mechanism in three printed parts: the row 'α2' | 'i' | '↓ sympathetic (adrenergic) outflow, ↓ insulin release, ↓ lipolysis, ↑ platelet aggregation, ↓ aqueous humor production' (the outflow fall is the FIRST listed function — the one this block rides); the figure labels 'M2, α2, or D2 receptor' → 'Gi protein' (the book's OWN inhibitory-family grouping — the mnemonic anchor for α2 = Gi); and the Gs/Gq figure paths that the contrast families ride (β1/β2 = Gs, α1 = Gq). Any 'which G protein does α2 couple' or 'what happens to cAMP' question on this block's drugs is answered from that page's print: Gi → adenylyl cyclase down → cAMP down.",
    },
    {
      title: "Tissue Distribution of Adrenergic Receptors — the Peripheral α2 Addresses",
      topicId: "tissue-distribution-of-adrenergic-receptors",
      note:
        "The completed PH15 (book 236): the receptor-distribution table whose α2 row — 'Pancreas / Presynaptic terminals / Salivary glands' → 'Inhibition of insulin secretion / Inhibition of neurotransmitter release / Inhibition of salivary secretion' — puts the peripheral addresses behind this block's findings: the presynaptic-terminal line is the negative-feedback brake in distribution form (the anchor of this block's mechanism), the salivary line is tizanidine's printed xerostomia, and the pancreas line is the metabolic fine print (α2 inhibition of insulin — the reason pure α2 stimulation is metabolically 'anti-insulin', the exam's endocrine crossover). The α1 row of the same table (vascular/visceral smooth muscle → vasoconstriction) is the receptor the EXCLUDED α-blockers table below aims at — the distribution page serves both same-page tables.",
    },
    {
      title: "Sympathomimetics — the Amp This Block Turns Down",
      topicId: "sympathomimetics",
      note:
        "The completed pilot (books 240-243): the agonist table and the physiologic-effects graphs (the epinephrine-reversal and phenylephrine-suppression figures whose captions end one page behind this block) that drive the SAME system in the opposite direction. The pairing the exam runs: the sympathomimetics raise the NE/adrenergic signal at the receptor (direct agonists) or the release (amphetamines — the NET/VMAT story of book 238), while the α2 agonists shut the outflow at the presynaptic brake; the physiologic-effects page's NE line ('NE ↑ systolic and diastolic pressures as a result of α1-mediated vasoconstriction') is exactly what the α2 brake prevents. The toxicology pairing: the sympathomimetic toxidrome (wet, dilated, fast) vs the clonidine toxidrome (dry-quiet, constricted, slow) — the two opposite faces of the same autonomic axis, and the pupil-and-sweat sort settles both.",
    },
  ],
  crossLinks: [
    {
      subject: "Psychiatry (the ADHD, Tourette, and withdrawal lane — the psych-to-pharm crossovers of the headliner row)",
      connection:
        "The applications cell's middle two uses are psychiatric: 'ADHD' (guanfacine the α2A-selective member — the nonstimulant lane that pairs with the stimulants methylphenidate/amphetamine, whose anorexia and tics it does not worsen — the exam's 'which ADHD drug in a child with comorbid tics' answer) and 'Tourette syndrome' (the tics quieted by the same noradrenergic quieting — the α2 agonists pair with the antipsychotics and the behavioral therapy on that topic's own ladder). The third crossover, 'symptom control in opioid withdrawal', is the addiction-medicine lane: the autonomic storm (hypertension, tachycardia, sweating, piloerection — the NE surge) is blunted by the same outflow brake (with methadone/buprenorphine as the maintenance layer — the taper rule applies to the clonidine layer too). The sedation that all three uses share is the printed 'CNS depression' — the therapeutic dose's most common complaint, and the overdose's first finding.",
    },
    {
      subject: "Obstetrics (the pregnancy-hypertension lane — the methyldopa row's application cell and its safety sort)",
      connection:
        "The printed 'Hypertension in pregnancy' cell is the chronic-hypertension-in-pregnancy answer: the antihypertensive pregnancy sort the exam recycles — SAFE: α-methyldopa (the longest record), labetalol (the combined α1/β blocker of the β-blockers table one page ahead), nifedipine, hydralazine; CONTRAINDICATED: the ACE inhibitors and ARBs (the fetopathy pair — renal dysgenesis, oligohydramnios, skull hypoplasia — that topic's own print). The row's toxicity cell is the obstetric lab twist: 'Direct Coombs ⊕ hemolysis' — the positive direct antiglobulin test that must not be misread as a pregnancy artifact or a transfusion reaction, with hemolysis in the fraction who progress (warm AIHA — stop the drug, switch within the safe set). The same cell's 'hyperprolactinemia' member crosses to the reproductive axis (amenorrhea/galactorrhea — the dopamine-brake story the antipsychotics share).",
    },
    {
      subject: "Cardiology & Emergency Medicine (the hypertensive-urgency use, the bradycardic-hypotensive overdose, and the rebound hypertension rule)",
      connection:
        "The cardiology lane of the headliner row: 'Hypertensive urgency (limited situations)' — the printed hedge that keeps clonidine OUT of the routine first-line set (the thiazides, the ACE inhibitors/ARBs, the CCBs own that lane; clonidine is the urgent, limited-situations tool — typically when the oral per-pressing load or a withdrawal/adherence scenario calls for a fast central brake). The emergency lanes are the two toxicity pictures: the OVERDOSE (the toddler-with-the-patch classic — 'CNS depression, bradycardia, hypotension, respiratory depression, miosis': an opioid-like toxidrome managed supportively with naloxone as the sometimes-working adjunct) and the REBOUND ('rebound hypertension with abrupt cessation' — the missed-dose/abrupt-stop patient presenting hypertensive, tachycardic, and agitated: restart and taper, not a new pheochromocytoma workup). Both pictures are the printed adverse-effects cell, each its own stem.",
    },
    {
      subject: "Immunology & Hematology (the Coombs-positive hemolysis and the drug-induced lupus of the methyldopa triad)",
      connection:
        "The methyldopa row's autoimmune triad is a hematology-and-rheumatology lesson in one cell: 'Direct Coombs ⊕ hemolysis' — the drug induces anti-RBC IgG (a positive DIRECT antiglobulin test), and the coated cells undergo splenic extravascular clearance (spherocytes, high LDH, low haptoglobin, indirect hyperbilirubinemia — the warm AIHA picture; the exam's Coombs sort: direct positive = autoimmune (methyldopa, CLL, SLE, the drug list) vs Coombs-negative spherocytes = hereditary spherocytosis; most Coombs-positive patients never hemolyze, and the test can lag months after withdrawal — the counseling fine print). 'Drug-induced lupus' puts methyldopa on the classic list with hydralazine, procainamide, and isoniazid (the ANA-positive, anti-histone, kidney-sparing mimic — the rheumatology crossover). 'Hyperprolactinemia' completes the triad on the endocrine axis (the dopamine-brake mechanism the antipsychotics share — amenorrhea, galactorrhea, low libido).",
    },
  ],
};
