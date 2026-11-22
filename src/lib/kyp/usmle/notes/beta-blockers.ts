import type { KypUsMLENote } from "../types";

// Pharmacology — BETA-BLOCKERS (PH24 — the class-table block: the
// 'β-blockers' section, the WHOLE of pdf 266 / book 244 under the standing
// 'PHARMACOLOGY—AUTONOMIC DRUGS' banner). The page prints: the section
// header with the eleven-drug roster 'Atenolol, betaxolol, bisoprolol,
// carvedilol, esmolol, labetalol, metoprolol, nadolol, nebivolol,
// propranolol, timolol.'; ONE three-zone table — the APPLICATION/ACTIONS/
// NOTES-EXAMPLES matrix of ten rows (angina '↓ heart rate and
// contractility → ↓ O2 consumption'; glaucoma '↓ production of aqueous
// humor' | 'Timolol'; heart failure 'Blockade of neurohormonal stress →
// prevention of deleterious cardiac remodeling → ↓ mortality' |
// 'Bisoprolol, carvedilol, metoprolol (β-blockers curb mortality)';
// hypertension '↓ cardiac output, ↓ renin secretion (due to β1-receptor
// blockade on JG cells)'; hyperthyroidism/thyroid storm 'Symptom control
// (↓ heart rate, ↓ tremor)' | 'Propranolol'; hypertrophic cardiomyopathy
// '↓ heart rate → ↑ filling time, relieving obstruction'; migraine '↓
// nitric oxide production' | 'Effective for prevention'; myocardial
// infarction '↓ O2 demand (short-term), ↓ mortality (long-term)';
// supraventricular tachycardia '↓ AV conduction velocity (class II
// antiarrhythmic)' | 'Metoprolol, esmolol'; variceal bleeding '↓ hepatic
// venous pressure gradient and portal hypertension (prophylactic use)' |
// 'Nadolol, propranolol, carvedilol for no portal circulation'); the
// ADVERSE EFFECTS row 'Erectile dysfunction, cardiovascular (bradycardia,
// AV block, HF), CNS (seizures, sleep alterations), dyslipidemia
// (metoprolol), masked hypoglycemia, asthma/COPD exacerbations' + the
// cocaine note 'Use of β-blockers for acute cocaine-associated chest pain
// remains controversial due to unsubstantiated concern for unopposed
// α-adrenergic stimulation'; and the SELECTIVITY subtable of four rows —
// 'β1-selective antagonists (β1 > β2)—atenolol, betaxolol, bisoprolol,
// esmolol, metoprolol' | 'Selective antagonists mostly go from A to M (β1
// with 1st half of alphabet)'; 'Nonselective antagonists (β1 =
// β2)—nadolol, propranolol, timolol' | 'NonZelective antagonists mostly
// go from N to Z (β2 with 2nd half of alphabet)'; 'Nonselective
// β-adrenergic, α1-selective antagonists—carvedilol, labetalol' |
// 'Nonselective β-adrenergic and α1-selective antagonists have modified
// suffixes (instead of "-olol")'; 'Nebivolol combines cardiac-selective
// β1-adrenergic blockade with stimulation of β3-receptors (activate NO
// synthase in the vasculature and ↓ SVR)' | 'NebivOlol increases NO'.
// PH23/PH24 BOUNDARY (pinned both ways): the page BEHIND (book 243) is
// the COMPLETED PH22/PH23 page — its two tables (sympatholytics
// α2-agonists above, α-blockers below) are EXCLUDED here; only the
// α-blockers table's phenoxybenzamine row (the α-first pheo anchor) and
// its final mirtazapine row (the α2-antagonist mirror this table's
// subtable has NO lane for) pinned from behind. The page AHEAD (book 245)
// opens 'Phosphodiesterase inhibitors' (the PENDING next topic) — this
// block does NOT extend there: sourcePages = [266] only.
// CROSS-PAGE MECHANISM ANCHORS (all printed): book 237
// (g-protein-linked-second-messengers, PH16) — the β1 row 'β1 | s | ↑
// heart rate, ↑ contractility (one heart), ↑ renin release, ↑ lipolysis'
// and the β2 row 'β2 | s | Vasodilation, bronchodilation (two lungs), ↑
// lipolysis, ↑ insulin release, ↑ glycogenolysis, ↓ uterine tone
// (tocolysis), ↑ aqueous humor production, ↑ cellular K+ uptake' (β1 AND
// β2 ride Gs; the β2 row alone carries the mechanisms of the asthma
// exacerbation, the masked hypoglycemia, AND the timolol glaucoma
// effect); book 236 (tissue-distribution-of-adrenergic-receptors, PH15) —
// the β1 row 'Heart / Kidney → ↑ heart rate, contractility / ↑ renin
// secretion' (the JG-cell address) and the β2 row 'Bronchioles / Cardiac
// muscle / Liver / Arterial smooth muscle / Pancreas → Bronchodilation /
// ↑ heart rate, contractility / Glycogenolysis, glucose release /
// Vasodilation / Stimulation of insulin secretion' (the bronchiole and
// liver addresses of the two caution patients).
// The block is pure text with zero rasters on pdf 266 — carried verbatim
// as this note's two table blocks; conveyed as ONE original KYP
// selectivity/application map (BetaBlockerMap). KYP extensions flagged
// wherever they appear: the FOUR-LANE SELECTIVITY frame (the four
// printed mnemonics compressed into one sorting question), the THREE
// CAUTION PATIENTS frame (the asthmatic, the brittle diabetic, the
// cocaine user — cells printed, avoidance/management rules KYP-flagged),
// the ABRUPT-WITHDRAWAL taper rule (NOT printed, flagged), the PHEO
// α-FIRST ordering rule (NOT printed here — anchored to book 243's
// phenoxybenzamine row and this page's own cocaine note, flagged), the
// T4→T3 conversion blockade in thyroid storm (NOT printed — flagged),
// the essential-tremor use (NOT printed on this page — flagged), and the
// boundary + absence census (the partial-agonist/ISA members pindolol
// and acebutolol and any α2+β member are VERIFIED ABSENT from the 2026
// table — never cited as printed).
export const betaBlockers: KypUsMLENote = {
  id: "beta-blockers",
  title: "Beta-Blockers",
  subtitle:
    "One suffix, four lanes, ten uses, three caution patients — the eleven '-olol' drugs sorted by the book's own printed mnemonics: β1-SELECTIVE 'A to M' (atenolol, betaxolol, bisoprolol, esmolol, metoprolol), NONSELECTIVE 'N to Z' (nadolol, propranolol, timolol), the MODIFIED-SUFFIX pair that adds α1 blockade (carvedilol, labetalol — 'instead of \"-olol\"'), and NEBIVOLOL ('NebivOlol increases NO') — aimed at angina, glaucoma (timolol), the heart-failure mortality trio (bisoprolol, carvedilol, metoprolol), hypertension ('↓ renin secretion... on JG cells'), thyroid storm (propranolol), hypertrophic cardiomyopathy, migraine prophylaxis, MI, SVT (metoprolol, esmolol), and variceal bleeding, with the caution set 'asthma/COPD exacerbations', 'masked hypoglycemia', and the 'unsubstantiated concern for unopposed α-adrenergic stimulation'.",
  subject: "Pharmacology",
  system:
    "Section II · Pharmacology — Autonomic Drugs (the banner this page shares with drug-effect-modifications, autonomic-receptors, acetylcholine-receptors, pain-transmission, micturition-control, tissue-distribution-of-adrenergic-receptors, g-protein-linked-second-messengers, autonomic-drugs, cholinomimetic-agents, anticholinesterase-poisoning, muscarinic-antagonists, atropine, sympatholytics-alpha-2-agonists, and alpha-blockers before it — the β-blockers table OPENS book 244, the page immediately after the two-table book-243 page (the α2-agonists above, the α-blockers below, both COMPLETED — only the α-blockers table's phenoxybenzamine row and final mirtazapine row pinned from behind); the β1 receptor's own mechanism rows sit on book 237 (β1 | s — the Gs couple, '(one heart)') and book 236 (the distribution row: Heart / Kidney → rate-contractility / renin), the β2 rows on the same two pages ('bronchodilation (two lungs)', '↑ aqueous humor production', '↑ glycogenolysis' — the asthma, glaucoma, and hypoglycemia-masking mechanisms all printed on one row of book 237; the bronchiole/liver/arterial addresses on book 236); the page ahead (book 245) opens the phosphodiesterase inhibitors — the cAMP/cGMP language of that page is the same second-messenger currency this block's Gs couple mints)",
  pilotCategory:
    "The class table's complete architecture — the section header, the eleven-drug roster, the ten-row APPLICATION/ACTIONS/NOTES-EXAMPLES matrix in full (every application, action, notes cell, and parenthetical verbatim, including the 'β-blockers curb mortality' rationale, the '(due to β1-receptor blockade on JG cells)' mechanism note, and the 'for no portal circulation' carvedilol clause), the ADVERSE EFFECTS row with its printed cocaine note, and the four-row SELECTIVITY subtable with the book's OWN four printed mnemonics ('A to M', 'N to Z', 'modified suffixes', 'NebivOlol increases NO') — plus the KYP layers that compress it: the FOUR-LANE SELECTIVITY frame, the THREE CAUTION PATIENTS frame (the asthmatic, the brittle diabetic, the cocaine user), the ABRUPT-WITHDRAWAL taper rule and the PHEO α-FIRST ordering rule (both flagged as not printed), and the boundary + absence census (the ISA members pindolol/acebutolol and any α2+β member verified ABSENT from the 2026 print).",
  difficulty: 2,
  readTime: 7,
  sourceRef:
    "First Aid 2026, Part 1 pp. 244 (Pharmacology — Autonomic Drugs: β-blockers — the WHOLE page; this block prints: the section header 'β-blockers' + the roster 'Atenolol, betaxolol, bisoprolol, carvedilol, esmolol, labetalol, metoprolol, nadolol, nebivolol, propranolol, timolol.'; the three-column APPLICATION/ACTIONS/NOTES-EXAMPLES matrix of ten rows — 'Angina pectoris' → '↓ heart rate and contractility → ↓ O2 consumption'; 'Glaucoma' → '↓ production of aqueous humor' | 'Timolol'; 'Heart failure' → 'Blockade of neurohormonal stress → prevention of deleterious cardiac remodeling → ↓ mortality' | 'Bisoprolol, carvedilol, metoprolol (β-blockers curb mortality)'; 'Hypertension' → '↓ cardiac output, ↓ renin secretion (due to β1-receptor blockade on JG cells)'; 'Hyperthyroidism/thyroid storm' → 'Symptom control (↓ heart rate, ↓ tremor)' | 'Propranolol'; 'Hypertrophic cardiomyopathy' → '↓ heart rate → ↑ filling time, relieving obstruction'; 'Migraine' → '↓ nitric oxide production' | 'Effective for prevention'; 'Myocardial infarction' → '↓ O2 demand (short-term), ↓ mortality (long-term)'; 'Supraventricular tachycardia (eg, atrial fibrillation)' → '↓ AV conduction velocity (class II antiarrhythmic)' | 'Metoprolol, esmolol'; 'Variceal bleeding' → '↓ hepatic venous pressure gradient and portal hypertension (prophylactic use)' | 'Nadolol, propranolol, carvedilol for no portal circulation'; the ADVERSE EFFECTS row 'Erectile dysfunction, cardiovascular (bradycardia, AV block, HF), CNS (seizures, sleep alterations), dyslipidemia (metoprolol), masked hypoglycemia, asthma/COPD exacerbations' + the note 'Use of β-blockers for acute cocaine-associated chest pain remains controversial due to unsubstantiated concern for unopposed α-adrenergic stimulation'; and the SELECTIVITY subtable — 'β1-selective antagonists (β1 > β2)—atenolol, betaxolol, bisoprolol, esmolol, metoprolol' | 'Selective antagonists mostly go from A to M (β1 with 1st half of alphabet)'; 'Nonselective antagonists (β1 = β2)—nadolol, propranolol, timolol' | 'NonZelective antagonists mostly go from N to Z (β2 with 2nd half of alphabet)'; 'Nonselective β-adrenergic, α1-selective antagonists—carvedilol, labetalol' | 'Nonselective β-adrenergic and α1-selective antagonists have modified suffixes (instead of \"-olol\")'; 'Nebivolol combines cardiac-selective β1-adrenergic blockade with stimulation of β3-receptors (activate NO synthase in the vasculature and ↓ SVR)' | 'NebivOlol increases NO' — the block is pure text with zero rasters, never reproduced as artwork, carried verbatim as this note's two table blocks; NOT printed in this block (census-flagged, never cited as printed): the β1/β2 = Gs second-messenger rows (they print on book 237 — 'β1 | s | ↑ heart rate, ↑ contractility (one heart), ↑ renin release, ↑ lipolysis' and 'β2 | s | Vasodilation, bronchodilation (two lungs), ↑ lipolysis, ↑ insulin release, ↑ glycogenolysis...'), the β1/β2 distribution rows (book 236 — 'Heart / Kidney' and 'Bronchioles / Cardiac muscle / Liver / Arterial smooth muscle / Pancreas'), the α-first pheochromocytoma ordering rule (the phenoxybenzamine anchor prints on book 243 behind; this page prints only the unopposed-α concern for cocaine), the essential-tremor use, the T4→T3 conversion blockade in thyroid storm, and the abrupt-withdrawal taper rule (all KYP flags — never cited as printed); the 2026 table's selectivity subtable carries exactly FOUR groups — the partial-agonist/ISA members (pindolol, acebutolol) and any α2+β member are VERIFIED ABSENT; the block does NOT extend to pdf 267 (book 245 opens 'Phosphodiesterase inhibitors'), and pdf 265 behind carries only the completed PH22/PH23 tables)",
  tags: [
    "beta-blockers",
    "β-blockers",
    "propranolol",
    "metoprolol",
    "atenolol",
    "bisoprolol",
    "esmolol",
    "betaxolol",
    "nebivolol",
    "nadolol",
    "timolol",
    "carvedilol",
    "labetalol",
    "β1-selective blockers",
    "cardioselective",
    "nonselective β-blockers",
    "A to M",
    "N to Z",
    "NebivOlol increases NO",
    "Gs protein",
    "cAMP",
    "heart failure",
    "mortality benefit",
    "angina pectoris",
    "hypertension",
    "renin secretion",
    "JG cells",
    "migraine prophylaxis",
    "thyroid storm",
    "hyperthyroidism",
    "glaucoma",
    "aqueous humor",
    "hypertrophic cardiomyopathy",
    "myocardial infarction",
    "supraventricular tachycardia",
    "atrial fibrillation",
    "class II antiarrhythmic",
    "variceal bleeding",
    "bradycardia",
    "AV block",
    "asthma exacerbation",
    "bronchospasm",
    "masked hypoglycemia",
    "erectile dysfunction",
    "unopposed α stimulation",
    "pheochromocytoma α-first rule",
    "pharmacology",
  ],
  core: {
    what:
      "ONE SUFFIX, FOUR LANES, TEN USES. The block opens with its banner — 'β-blockers' — and the eleven-drug roster: 'Atenolol, betaxolol, bisoprolol, carvedilol, esmolol, labetalol, metoprolol, nadolol, nebivolol, propranolol, timolol.' Then one three-zone table. ZONE 1 — THE APPLICATION MATRIX (ten rows): angina ('↓ heart rate and contractility → ↓ O2 consumption'), glaucoma ('↓ production of aqueous humor' — Timolol), heart failure ('Blockade of neurohormonal stress → prevention of deleterious cardiac remodeling → ↓ mortality' — 'Bisoprolol, carvedilol, metoprolol (β-blockers curb mortality)'), hypertension ('↓ cardiac output, ↓ renin secretion (due to β1-receptor blockade on JG cells)'), hyperthyroidism/thyroid storm ('Symptom control (↓ heart rate, ↓ tremor)' — Propranolol), hypertrophic cardiomyopathy ('↓ heart rate → ↑ filling time, relieving obstruction'), migraine ('↓ nitric oxide production' — 'Effective for prevention'), myocardial infarction ('↓ O2 demand (short-term), ↓ mortality (long-term)'), SVT ('↓ AV conduction velocity (class II antiarrhythmic)' — 'Metoprolol, esmolol'), and variceal bleeding ('↓ hepatic venous pressure gradient and portal hypertension (prophylactic use)' — 'Nadolol, propranolol, carvedilol for no portal circulation'). ZONE 2 — THE ADVERSE-EFFECTS ROW: 'Erectile dysfunction, cardiovascular (bradycardia, AV block, HF), CNS (seizures, sleep alterations), dyslipidemia (metoprolol), masked hypoglycemia, asthma/COPD exacerbations' + the cocaine note. ZONE 3 — THE SELECTIVITY SUBTABLE: four groups with the book's own four mnemonics — β1-selective 'A to M', nonselective 'N to Z', combined β+α1 'modified suffixes', and nebivolol 'increases NO'. That is the whole printed block — the most-used drug class in the book, one page.",
    why:
      "WHY β-BLOCKADE IS ON THE EXAM. Both β receptors ride Gs (book 237: 'β1 | s' and 'β2 | s' — the s couple: ↑ cAMP → ↑ PKA). β1 lives at the heart and kidney ('Heart / Kidney' → '↑ heart rate, contractility / ↑ renin secretion', book 236) — block it and the heart slows and weakens (the angina arithmetic: ↓ rate × ↓ contractility = ↓ O2 consumption), the AV node conducts slower (the class II antiarrhythmic effect), the JG cells secrete less renin (the printed '(due to β1-receptor blockade on JG cells)' note — the second antihypertensive hit after ↓ cardiac output), and the chronically-sympathetic failing heart is protected from its own catecholamines ('Blockade of neurohormonal stress → prevention of deleterious cardiac remodeling → ↓ mortality'). β2 lives at the bronchioles, liver, arteries, and pancreas ('Bronchodilation... Glycogenolysis, glucose release... Vasodilation', book 236) — block it and the bronchioles constrict ('asthma/COPD exacerbations' — the reason the nonselective lane is contraindicated in asthma), the liver's emergency glucose mobilization blunts and the tachycardic alarm silences ('masked hypoglycemia' — the brittle diabetic's danger), and the ciliary body makes less aqueous humor (the timolol glaucoma effect — book 237's β2 row prints '↑ aqueous humor production', the secretion the drop takes). WHY THE SELECTIVITY FORK MATTERS: every exam question that names a β-blocker is asking WHICH receptors it takes — and the book prints its own answer key as four mnemonics: 'A to M' (atenolol, betaxolol, bisoprolol, esmolol, metoprolol — β1 > β2, the relatively lung-sparing lane), 'N to Z' (nadolol, propranolol, timolol — β1 = β2, the asthma-contraindicated lane), 'modified suffixes (instead of \"-olol\")' (carvedilol, labetalol — β-blockade PLUS α1 blockade: vasodilation built in, the hypertension lane and the pheo second step), and 'NebivOlol increases NO' (β1 blockade plus β3 stimulation → NO synthase → ↓ SVR). WHY THE CAUTION CELLS READ AS THEY DO: the adverse row is the β2 story (lungs: 'asthma/COPD exacerbations'; glucose: 'masked hypoglycemia') layered on the β1 story (cardiovascular: 'bradycardia, AV block, HF'), and the cocaine note is the unopposed-α concern — the same physiology that orders α-blockade before β-blockade in pheochromocytoma (printed on neither this page nor book 243; KYP-flagged, anchored to book 243's phenoxybenzamine row).",
    keyIdea:
      "Read the page as a FOUR-LANE SORT with three caution patients (KYP compression of the printed subtable + the anchor pages). THE SORT — which receptors does the drug take? β1-SELECTIVE, 'A to M' (atenolol, betaxolol, bisoprolol, esmolol, metoprolol): the cardiac work without the bronchial risk — the lane for the asthmatic who needs rate control. NONSELECTIVE, 'N to Z' (nadolol, propranolol, timolol): both receptors — propranolol the classic (thyroid storm, migraine prophylaxis, varices), timolol the glaucoma drop, nadolol the variceal prophylaxis; the lane the asthmatic must not meet. COMBINED β+α1, 'modified suffixes' (carvedilol, labetalol): the suffix is the tell — carveDILol, labetalol break the '-olol' pattern because their receptor pattern is broken (α1 added: vasodilation, the afterload lane, the pheo second step after α-blockade). NEBIVOLOL, 'NebivOlol increases NO' (β1 + β3-NO: the vasodilating β-blocker, ↓ SVR by a second mechanism). THE USES SORT BY DRUG — the mortality trio (bisoprolol, carvedilol, metoprolol in HFrEF), the rate duo (metoprolol, esmolol in SVT), the portal trio (nadolol, propranolol, carvedilol for varices), the single-drug rows (timolol for glaucoma, propranolol for thyroid storm), and the class-wide rows (angina, hypertension, HCM, migraine prophylaxis, MI). THE THREE CAUTION PATIENTS — the asthmatic ('asthma/COPD exacerbations': nonselective blockade unopposes bronchoconstriction), the brittle diabetic ('masked hypoglycemia': the tachycardic alarm hidden and the hepatic glycogenolysis blunted), and the cocaine user (the 'unsubstantiated concern for unopposed α-adrenergic stimulation' the book itself hedges). One line: the drug tells you the lane, the lane tells you the patient — and the exceptions (carvedilol and labetalol's hidden α1, nebivolol's NO) are the exam.",
  },
  mechanisms: [
    {
      id: "beta-gs-blockade-four-lane-selectivity",
      title:
        "The blockade: β1 and β2 both ride Gs (the printed anchors of book 237: 'β1 | s | ↑ heart rate, ↑ contractility (one heart), ↑ renin release, ↑ lipolysis' and 'β2 | s | Vasodilation, bronchodilation (two lungs)... ↑ glycogenolysis... ↑ aqueous humor production') at the heart/kidney and bronchiole/liver/artery addresses of book 236 — the blocker occupies the receptor, the cAMP signal falls, and one mechanism becomes four selectivity lanes and both the benefits and the dangers",
      context:
        "The block's printed table (book 244) gives the eleven drugs, the ten uses, and the four selectivity groups; the mechanism itself prints on the completed pages this block leans on — book 237 (g-protein-linked-second-messengers, PH16: the β1 and β2 rows, both s-coupled) and book 236 (tissue-distribution-of-adrenergic-receptors, PH15: the β1 Heart/Kidney row and the β2 Bronchioles/Cardiac/Liver/Arterial/Pancreas row). The four-lane compression of the printed mnemonic cells is KYP's.",
      flow: {
        nodes: [
          {
            id: "input",
            label: "The tone to block: the β-Gs couple — 'β1 | s' at the heart and kidney ('↑ heart rate, contractility / ↑ renin secretion', book 236) and 'β2 | s' at the bronchioles, liver, arterial smooth muscle, and ciliary body ('bronchodilation (two lungs)', '↑ glycogenolysis', '↑ aqueous humor production', book 237)",
            sublabel:
              "Input — the sympathetic β arm the previous sections built: Gs → adenylyl cyclase → cAMP → PKA. The β1 arm drives the heart (chronotropy, inotropy) and the JG-cell renin release; the β2 arm relaxes bronchioles, vasodilates, mobilizes hepatic glucose, and secretes aqueous humor. This block's drugs are the OFF-switches — competitive antagonists at one or both receptors (plus α1 for two members, plus β3-agonism for one).",
            variant: "input",
          },
          {
            id: "receptor",
            label: "STEP 1 — THE β1 BLOCKADE (every lane): the SA node slows (↓ heart rate), the myocytes weaken (↓ contractility), the AV node conducts slower ('↓ AV conduction velocity (class II antiarrhythmic)', the printed SVT row), and the JG cells secrete less renin ('↓ renin secretion (due to β1-receptor blockade on JG cells)', the printed hypertension note — ↓ angiotensin II and aldosterone downstream)",
            sublabel:
              "The couple: β1 → Gs → cAMP → PKA → L-type Ca2+ channels and phospholamban phosphorylation. Blockade runs the whole sequence in reverse — which is the angina arithmetic ('↓ heart rate and contractility → ↓ O2 consumption'), the HCM arithmetic ('↓ heart rate → ↑ filling time, relieving obstruction'), the antihypertensive two-hit ('↓ cardiac output, ↓ renin secretion'), the SVT answer (the AV node), and — in the failing heart, started low and titrated slow — the remodeling story the HF row prints: 'Blockade of neurohormonal stress → prevention of deleterious cardiac remodeling → ↓ mortality'.",
            variant: "process",
          },
          {
            id: "fork",
            label: "STEP 2 — THE FORK IS THE SELECTIVITY: β1-SELECTIVE 'A to M' (atenolol, betaxolol, bisoprolol, esmolol, metoprolol — β1 > β2 at standard doses, the relatively lung-sparing lane) vs NONSELECTIVE 'N to Z' (nadolol, propranolol, timolol — β1 = β2, the lane that owns the asthma caution, the glaucoma drop, and the thyroid-storm drug) vs COMBINED β+α1 'modified suffixes' (carvedilol, labetalol — β-blockade plus α1 blockade, vasodilation built in) vs NEBIVOLOL (β1 blockade plus β3 stimulation → 'NO synthase in the vasculature and ↓ SVR')",
            sublabel:
              "The selectivity is the whole clinical sort, and the book prints its own mnemonic key — all four cells verbatim: 'Selective antagonists mostly go from A to M (β1 with 1st half of alphabet)', 'NonZelective antagonists mostly go from N to Z (β2 with 2nd half of alphabet)', 'Nonselective β-adrenergic and α1-selective antagonists have modified suffixes (instead of \"-olol\")', 'NebivOlol increases NO'. The lane decides the patient: the asthmatic gets the A-to-M lane or none; the varices patient gets nadolol or propranolol (the printed trio's nonselective members); the pheochromocytoma patient gets labetalol only AFTER α-blockade (KYP flag: the ordering rule is not printed on this page — book 243 prints the phenoxybenzamine pretreatment, this page prints only the unopposed-α concern for cocaine).",
            variant: "process",
          },
          {
            id: "beta2",
            label: "STEP 3 — THE β2 CONSEQUENCE (the caution half): where the blockade is nonselective, the bronchioles lose their dilator ('asthma/COPD exacerbations' — book 237's 'bronchodilation (two lungs)' unblocked→unopposed cholinergic and leukotriene constriction), the liver loses its emergency glucose mobilization and the patient loses the tachycardic alarm ('masked hypoglycemia' — book 236's 'Glycogenolysis, glucose release' row blunted), and the ciliary body secretes less aqueous humor — the ONE β2 consequence that is therapeutic (the timolol glaucoma row: '↓ production of aqueous humor')",
            sublabel:
              "The same receptor, three clinical directions: dangerous in the bronchioles (the asthmatic on propranolol — the miniCase), dangerous in the diabetic (the hypoglycemic attack without its adrenergic warning — the patient who presents confused instead of shaky; KYP flag: the tachycardia-masking reading is not printed in the cell, only the word 'masked'), and therapeutic in the eye (the timolol drop — the glaucoma row's mechanism IS the blocked β2 row of book 237: '↑ aqueous humor production' reversed).",
            variant: "process",
          },
          {
            id: "output",
            label: "RESULT — every printed row is one Gs-coupled receptor family occupied at one lane: the ten uses (angina, glaucoma, heart failure, hypertension, thyroid storm, HCM, migraine prophylaxis, MI, SVT, varices), the adverse row (bradycardia/AV block from β1; bronchospasm and masked hypoglycemia from β2; the CNS, sexual, and lipid buckets), and the four selectivity lanes — with the two modified-suffix members adding α1 (carvedilol, labetalol) and nebivolol adding NO",
            sublabel:
              "Output — what the exam pulls from the mechanism: the selectivity question (name → lane, by A-to-M/N-to-Z/suffix/NO), the G-protein question (β1 AND β2 = Gs — the s-family with H2, glucagon, and TSH, the second-messenger page's own table), the mechanism-of-action question per printed row (angina → ↓ rate × ↓ contractility; hypertension → ↓ cardiac output + ↓ renin on JG cells; HCM → ↓ rate → ↑ filling time; varices → ↓ portal pressure), and the caution question (the asthmatic, the brittle diabetic, the cocaine user — the three patients the adverse row and its cocaine note endanger).",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "receptor", label: "the blocker finds the Gs-coupled β receptors" },
          { from: "receptor", to: "fork", label: "selectivity decides which β is taken" },
          { from: "fork", to: "beta2", label: "the nonselective lanes also take β2 — the caution half" },
          { from: "beta2", to: "output", label: "one receptor family occupied = ten uses + one caution set" },
        ],
      },
    },
    {
      id: "beta-blocker-application-sort-caution-set",
      title:
        "The ten-use sort: one printed matrix, four named-drug lanes, three caution patients — the mortality trio (bisoprolol, carvedilol, metoprolol), the rate duo (metoprolol, esmolol), the portal trio (nadolol, propranolol, carvedilol), the single-drug rows (timolol, propranolol), and the class-wide rows (angina, hypertension, HCM, migraine, MI) — with the adverse row's asthma/hypoglycemia cells and the cocaine note as the patients the class endangers",
      context:
        "The block's own application matrix + adverse row + cocaine note (book 244), carried verbatim in the note's two table blocks. The patient-sort reading (which drug for which patient; which patient must not get which lane) is KYP's overlay on the printed rows; every application, action, notes cell, and mnemonic is the book's own print.",
      flow: {
        nodes: [
          {
            id: "input",
            label: "The printed frame: three columns — APPLICATION / ACTIONS / NOTES-EXAMPLES — ten application rows, an ADVERSE EFFECTS row, and a SELECTIVITY subtable; the NOTES/EXAMPLES column names the drugs the exam asks by name: 'Timolol', 'Bisoprolol, carvedilol, metoprolol', 'Propranolol', 'Metoprolol, esmolol', 'Nadolol, propranolol, carvedilol'",
            sublabel:
              "Input — the matrix the exam reads row by row. The KYP sort that follows reorders the rows by WHO is standing in front of you: the HFrEF patient (the mortality trio), the thyrotoxic patient (propranolol), the glaucoma patient (timolol), the AF patient (metoprolol or esmolol), the cirrhotic patient (the portal trio), the angina/HCM/migragine/post-MI/hypertension patients (the class-wide rows) — and the three patients the class endangers (the asthmatic, the brittle diabetic, the cocaine user).",
            variant: "input",
          },
          {
            id: "named",
            label: "GROUP 1 — THE NAMED-DRUG ROWS: 'Heart failure' → 'Bisoprolol, carvedilol, metoprolol (β-blockers curb mortality)' | 'Supraventricular tachycardia (eg, atrial fibrillation)' → 'Metoprolol, esmolol' | 'Glaucoma' → 'Timolol' | 'Hyperthyroidism/thyroid storm' → 'Propranolol' | 'Variceal bleeding' → 'Nadolol, propranolol, carvedilol for no portal circulation'",
            sublabel:
              "The drug-specific lanes. THE MORTALITY TRIO: bisoprolol and metoprolol (β1-selective) plus carvedilol (β+α1) — the three HFrEF drugs with survival benefit, started low, titrated slow, never initiated in decompensation (the book's own parenthetical 'β-blockers curb mortality' is the printed rationale for the whole row). THE RATE DUO: metoprolol and esmolol for SVT — esmolol the ultra-short-acting IV agent for the unstable patient and the operating room. THE GLAUCOMA DROP: timolol, topical, '↓ production of aqueous humor' — the one ophthalmology row. THE THYROID-STORM DRUG: propranolol, 'Symptom control (↓ heart rate, ↓ tremor)' — the adrenergic bridge while antithyroid drugs work (KYP flag: the additional blockade of peripheral T4→T3 conversion is not printed on this page). THE PORTAL TRIO: nadolol, propranolol, carvedilol — prophylaxis of first bleed and rebleed by '↓ hepatic venous pressure gradient'; the carvedilol clause ('for no portal circulation') is the book's own fine print on its combined α1+β member.",
            variant: "process",
          },
          {
            id: "classwide",
            label: "GROUP 2 — THE CLASS-WIDE ROWS (any lane): 'Angina pectoris' → '↓ heart rate and contractility → ↓ O2 consumption' | 'Hypertension' → '↓ cardiac output, ↓ renin secretion (due to β1-receptor blockade on JG cells)' | 'Hypertrophic cardiomyopathy' → '↓ heart rate → ↑ filling time, relieving obstruction' | 'Migraine' → '↓ nitric oxide production' ('Effective for prevention') | 'Myocardial infarction' → '↓ O2 demand (short-term), ↓ mortality (long-term)'",
            sublabel:
              "The mechanism rows — each one a printed formula the stem can quote. The angina arithmetic (rate × contractility = O2 demand), the hypertension two-hit (pump + renin), the HCM filling-time arithmetic (the slower heart drains the gradient), the migraine prophylaxis (NO-mediated; prevention, not abortion), and the MI two-clock (short-term demand, long-term mortality — the same mortality token as the HF row). Together with the named-drug rows, the ten-row matrix IS the class's whole exam surface.",
            variant: "process",
          },
          {
            id: "caution",
            label: "GROUP 3 — THE CAUTION SET: 'Erectile dysfunction, cardiovascular (bradycardia, AV block, HF), CNS (seizures, sleep alterations), dyslipidemia (metoprolol), masked hypoglycemia, asthma/COPD exacerbations' + the cocaine note 'Use of β-blockers for acute cocaine-associated chest pain remains controversial due to unsubstantiated concern for unopposed α-adrenergic stimulation'",
            sublabel:
              "The danger half of the page, read as three patients (KYP frame; the cells are printed): THE ASTHMATIC — 'asthma/COPD exacerbations' is the nonselective lane's doing (β2 blockade unopposes bronchoconstriction; the avoidance rule is KYP-flagged: the printed cell names the exacerbation, not the contraindication). THE BRITTLE DIABETIC — 'masked hypoglycemia': the tachycardia, tremor, and anxiety of the insulin reaction are β-mediated and silenced, and the hepatic glycogenolysis (book 236's 'Glycogenolysis, glucose release') is blunted — the patient presents with neuroglycopenia (confusion, behavior change) instead of the shaky alarm. THE COCAINE USER — the book's own hedged controversy: 'unsubstantiated concern for unopposed α-adrenergic stimulation' (β-blockade leaves cocaine's α tone unopposed — the same unopposed-α physiology that orders α-blockade before β-blockade in pheochromocytoma; KYP flag: the pheo ordering rule is printed on NEITHER this page nor book 243, anchored there to the phenoxybenzamine row). THE REST OF THE ROW — bradycardia/AV block (the β1 excess), CNS (seizures, sleep alterations), erectile dysfunction, and 'dyslipidemia (metoprolol)' (the one drug named in the adverse row). Plus the KYP-flagged rule the row does NOT print: never stop abruptly — taper over days to weeks (rebound tachycardia, hypertension, angina, arrhythmia).",
            variant: "process",
          },
          {
            id: "output",
            label: "RESULT — the patient sort: HFrEF (stable, euvolemic) → bisoprolol, carvedilol, or metoprolol (mortality); SVT/AF rate control → metoprolol or esmolol; thyroid storm → propranolol (with the antithyroid drugs); glaucoma → timolol drops; variceal prophylaxis → nadolol, propranolol, or carvedilol; angina, hypertension, HCM, migraine prophylaxis, post-MI → any appropriate lane; and the negatives — the asthmatic (avoid the N-to-Z lane), the brittle diabetic (counsel on masked hypoglycemia), the cocaine user (the controversy), and the patient stopping cold (taper instead)",
            sublabel:
              "Output — the sort the exam actually runs: any stem that names a β-blocker asks the lane (A-to-M, N-to-Z, modified-suffix, NO); any stem that hands you a patient asks the drug or the danger; and any stem that pairs a β-blocker with wheezing, confusion-with-low-glucose, or cocaine asks the caution set. The distractor lanes to sort: the α-blockers (one page behind — the -osins, phenoxybenzamine, phentolamine), the α2 agonists (clonidine), the calcium-channel blockers (the other rate/contractility lane, verapamil/diltiazem — the AV-node competitors), and the nitrates (the other antianginal lane, preload).",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "named", label: "the named-drug rows — who gets which drug" },
          { from: "named", to: "classwide", label: "the class-wide rows — the printed formulas" },
          { from: "classwide", to: "caution", label: "the adverse row + cocaine note — the danger half" },
          { from: "caution", to: "output", label: "ten uses + four lanes + three caution patients = the exam surface" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "beta-blocker-map",
      title: "The β-blocker four-lane map (an original KYP visual)",
      caption:
        "An original KYP selectivity/application map conveying the β-blockers block (book 244, the whole page): THE MECHANISM STRIP (β1 = Gs at the heart/kidney addresses and β2 = Gs at the bronchiole/liver/artery/ciliary addresses of books 236-237, blocked → the ten printed actions); THE FOUR FORK CARDS (β1-SELECTIVE 'A to M' — atenolol, betaxolol, bisoprolol, esmolol, metoprolol; NONSELECTIVE 'N to Z' — nadolol, propranolol, timolol; COMBINED β+α1 'modified suffixes' — carvedilol, labetalol; NEBIVOLOL 'increases NO' — β1 + β3, ↓ SVR); THE TEN-USE GRID (angina, glaucoma — timolol, heart failure — the mortality trio, hypertension, thyroid storm — propranolol, HCM, migraine prophylaxis, MI, SVT — metoprolol and esmolol, variceal bleeding — the portal trio); THE CAUTION STRIP (the asthmatic, the brittle diabetic, the cocaine user, plus bradycardia/AV block, CNS, dyslipidemia, erectile dysfunction, and the KYP-flagged taper rule); and THE BOUNDARY STRIP (the PH23/PH24 split pinned both ways, with the verified absences: no ISA row, no α2+β member, no essential-tremor row).",
      notice:
        "Census (pdfimages + text layer): the β-blockers block is PURE TEXT with ZERO raster images on pdf 266 — COPYRIGHTED, never reproduced as artwork; this visual conveys the section header, the eleven-drug roster, the ten-row application matrix, the adverse-effects row, and the four-row selectivity subtable as an ORIGINAL_KYP_ADAPTATION (every application, action, notes cell, adverse-effect bucket, selectivity group, and all four printed mnemonics are the book's own print; the four-lane frame, the patient sort, and the three caution patients are KYP's, flagged). KYP extensions flagged on the map: the FOUR-LANE SELECTIVITY frame (the mnemonics are printed; the compression is KYP's), the THREE CAUTION PATIENTS frame (cells printed; the 'avoid in asthma', tachycardia-masking, and taper rules NOT printed — flagged), the PHEO α-FIRST rule (NOT printed on this page — anchored to book 243's phenoxybenzamine row and this page's own cocaine note, flagged), the T4→T3 thyroid-storm conversion blockade (not printed), and the essential-tremor use (not printed on this page). VERIFIED ABSENT from the 2026 selectivity subtable: the partial-agonist/ISA members (pindolol, acebutolol) and any α2+β member — exactly four groups print, never cited otherwise. EXCLUDED: the two tables on book 243 behind (the COMPLETED PH22 sympatholytics-alpha-2-agonists and PH23 alpha-blockers — only the phenoxybenzamine row and the final mirtazapine row pinned from behind as boundary markers), and the phosphodiesterase-inhibitors section on pdf 267 ahead (the PENDING next topic; this block does NOT extend there; verified).",
    },
    {
      kind: "table",
      title: "Book 244 — the β-blockers application matrix, verbatim",
      intro:
        "The block's own ten-row matrix, carried whole: every application, action, and notes cell is the book's own print. The NOTES/EXAMPLES column is where the exam drugs live (timolol, the mortality trio, propranolol, the rate duo, the portal trio); the ACTIONS column is the printed formula each stem quotes.",
      columns: [
        "APPLICATION (book 244, verbatim)",
        "ACTIONS (book 244, verbatim)",
        "NOTES/EXAMPLES (book 244, verbatim)",
      ],
      rows: [
        [
          "Angina pectoris",
          "↓ heart rate and contractility → ↓ O2 consumption",
          "—",
        ],
        [
          "Glaucoma",
          "↓ production of aqueous humor",
          "Timolol",
        ],
        [
          "Heart failure",
          "Blockade of neurohormonal stress → prevention of deleterious cardiac remodeling → ↓ mortality",
          "Bisoprolol, carvedilol, metoprolol (β-blockers curb mortality)",
        ],
        [
          "Hypertension",
          "↓ cardiac output, ↓ renin secretion (due to β1-receptor blockade on JG cells)",
          "—",
        ],
        [
          "Hyperthyroidism/thyroid storm",
          "Symptom control (↓ heart rate, ↓ tremor)",
          "Propranolol",
        ],
        [
          "Hypertrophic cardiomyopathy",
          "↓ heart rate → ↑ filling time, relieving obstruction",
          "—",
        ],
        [
          "Migraine",
          "↓ nitric oxide production",
          "Effective for prevention",
        ],
        [
          "Myocardial infarction",
          "↓ O2 demand (short-term), ↓ mortality (long-term)",
          "—",
        ],
        [
          "Supraventricular tachycardia (eg, atrial fibrillation)",
          "↓ AV conduction velocity (class II antiarrhythmic)",
          "Metoprolol, esmolol",
        ],
        [
          "Variceal bleeding",
          "↓ hepatic venous pressure gradient and portal hypertension (prophylactic use)",
          "Nadolol, propranolol, carvedilol for no portal circulation",
        ],
      ],
      caption:
        "Ten rows, five with named drugs — the whole clinical surface of the class. The heart-failure row is the exam's favorite (THREE named drugs with the book's own rationale, 'β-blockers curb mortality' — bisoprolol and metoprolol from the β1-selective A-to-M lane plus carvedilol from the combined β+α1 lane). The hypertension row prints the mechanism the stems quote: '↓ cardiac output, ↓ renin secretion (due to β1-receptor blockade on JG cells)' — the two-hit formula. The SVT row carries the antiarrhythmic-class label ('class II'); the variceal row carries the carvedilol fine print ('for no portal circulation'); the migraine row pins the prophylactic rank ('Effective for prevention'); and the thyroid-storm row names propranolol — the nonselective lane's flagship. The angina, hypertension, HCM, and MI rows are the class-wide mechanism rows any lane can serve.",
    },
    {
      kind: "table",
      title: "Book 244 — the adverse-effects row + the selectivity subtable, verbatim",
      intro:
        "The block's danger half and its sorting key, carried whole. The SELECTIVITY subtable comes with the book's OWN four printed mnemonics (the A-to-M, N-to-Z, modified-suffix, and NO cells) — the publisher prints the memory hooks; KYP adds only the four-lane reading.",
      columns: [
        "THE PRINTED ROW (book 244, verbatim)",
        "WHAT IT CARRIES",
      ],
      rows: [
        [
          "'ADVERSE EFFECTS' — 'Erectile dysfunction, cardiovascular (bradycardia, AV block, HF), CNS (seizures, sleep alterations), dyslipidemia (metoprolol), masked hypoglycemia, asthma/COPD exacerbations'",
          "THE TOXICITY SET, five system buckets: the cardiovascular bucket (bradycardia, AV block, HF — the β1 excess; the HF decompensation risk when initiated in unstable patients), the pulmonary bucket ('asthma/COPD exacerbations' — the nonselective lane's β2 doing; the asthmatic's contraindication, KYP-flagged as a management rule the cell does not spell), the metabolic bucket ('masked hypoglycemia' — the brittle diabetic's silenced alarm + the blunted hepatic glycogenolysis of book 236's β2 liver row; 'dyslipidemia (metoprolol)' — the ONE drug named in the adverse row), the CNS bucket (seizures, sleep alterations), and the sexual bucket (erectile dysfunction — the compliance problem). NOT printed in the row: the abrupt-withdrawal rebound (taper over days to weeks — KYP-flagged).",
        ],
        [
          "'Use of β-blockers for acute cocaine-associated chest pain remains controversial due to unsubstantiated concern for unopposed α-adrenergic stimulation'",
          "THE COCAINE NOTE — the book's own hedged controversy, printed in the NOTES/EXAMPLES column of the adverse row: β-blockade leaves cocaine's α-mediated vasoconstriction unopposed (the 'unsubstantiated concern'), which is the SAME unopposed-α physiology that orders α-blockade before β-blockade in pheochromocytoma (KYP flag: the pheo ordering rule prints on NEITHER this page nor book 243 — book 243 prints the phenoxybenzamine pretreatment row, this page prints only the cocaine concern). The exam's face: benzodiazepines and nitrates first in cocaine chest pain; β-blockers held; and in pheo, phenoxybenzamine before any β-blocker.",
        ],
        [
          "'SELECTIVITY' — 'β1-selective antagonists (β1 > β2)—atenolol, betaxolol, bisoprolol, esmolol, metoprolol' | 'Selective antagonists mostly go from A to M (β1 with 1st half of alphabet)'",
          "LANE 1 — THE CARDIOSELECTIVE FIVE: atenolol, betaxolol, bisoprolol, esmolol, metoprolol (β1 > β2) — the first half of the alphabet (A through M), the book's own mnemonic. This is the lane for the asthmatic who needs a β-blocker (relative β2 sparing at standard doses — never a license for propranolol), the source of the HFrEF mortality pair (bisoprolol, metoprolol), and the SVT duo (metoprolol, esmolol).",
        ],
        [
          "'Nonselective antagonists (β1 = β2)—nadolol, propranolol, timolol' | 'NonZelective antagonists mostly go from N to Z (β2 with 2nd half of alphabet)'",
          "LANE 2 — THE NONSELECTIVE THREE: nadolol, propranolol, timolol (β1 = β2) — the second half of the alphabet (N through Z), capital-Z emphasis and all. This is the lane that owns the classic single-drug uses (propranolol: thyroid storm, migraine prophylaxis, varices — and, outside this page's print, essential tremor, KYP-flagged), the glaucoma drop (timolol), and the variceal prophylaxis member with the least CNS penetration (nadolol) — AND the asthma contraindication, because both receptors go.",
        ],
        [
          "'Nonselective β-adrenergic, α1-selective antagonists—carvedilol, labetalol' | 'Nonselective β-adrenergic and α1-selective antagonists have modified suffixes (instead of \"-olol\")'",
          "LANE 3 — THE COMBINED PAIR: carvedilol, labetalol — nonselective β-blockade PLUS α1 blockade. The book's own naming rule: their suffixes are MODIFIED ('instead of \"-olol\"') because their receptor profile is modified — the suffix is the selectivity (KYP adds the -dilol/-talol reading, flagged). Carvedilol: the HFrEF mortality trio's third member and a variceal-prophylaxis option ('for no portal circulation' — the book's clause). Labetalol: the hypertension-in-pregnancy and aortic-dissection workhorse (uses outside this page's print — KYP-flagged), and the pheo second step after α-blockade (the ordering rule not printed — flagged).",
        ],
        [
          "'Nebivolol combines cardiac-selective β1-adrenergic blockade with stimulation of β3 -receptors (activate NO synthase in the vasculature and ↓ SVR)' | 'NebivOlol increases NO'",
          "LANE 4 — THE NO MEMBER: nebivolol — cardiac-selective β1 blockade PLUS β3-receptor stimulation → NO synthase activation in the vasculature → ↓ SVR: the one β-blocker that vasodilates by a second mechanism (the metabolically/vascularly friendlier member; the book's own mnemonic 'NebivOlol increases NO' with the capital-O emphasis). The β3 row prints on book 237's second-messenger table (the same s-family) — the printed receptor behind the printed mechanism.",
        ],
      ],
      caption:
        "One adverse row, one printed controversy note, four selectivity lanes with four printed mnemonics — the sorting key of the whole class. The two mnemonic cells ('A to M', 'N to Z') are pure alphabet: β1-selective drugs run A(tenolol)–M(etoprolol), nonselective drugs run N(adolol)–t(imolol), so the FIRST LETTER of a plain '-olol' name is the selectivity. The two members that break the suffix rule (carvedilol, labetalol) break it because they break the receptor rule (α1 added); the one member that names its extra mechanism in its own name (NebivOlol → NO) is the β3/NO vasodilator. Census note: the subtable carries exactly FOUR groups — no partial-agonist/ISA row (pindolol, acebutolol are ABSENT from the 2026 print) and no α2+β member; verified absent, never cited as printed.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem:
          "A 58-year-old man with ischemic cardiomyopathy (LVEF 30%, NYHA class II) on lisinopril, spironolactone, and furosemide is euvolemic and clinically stable. His cardiologist adds a drug that blocks the chronic sympathetic drive on the failing heart; over months his remodeling marker improves and his mortality risk falls. The pharmacology question asks which three drugs this mortality lane belongs to and what the printed mechanism of the benefit is.",
        discriminator:
          "The printed row: 'Heart failure' → 'Blockade of neurohormonal stress → prevention of deleterious cardiac remodeling → ↓ mortality' | 'Bisoprolol, carvedilol, metoprolol (β-blockers curb mortality)' — three named drugs with the book's own parenthetical rationale",
        concept:
          "The HFrEF mortality trio — bisoprolol, carvedilol, metoprolol: the three β-blockers with survival benefit, added to guideline therapy in the stable, euvolemic patient",
        answer:
          "Bisoprolol, carvedilol, and metoprolol — the printed NOTES/EXAMPLES cell, with the book's own rationale 'β-blockers curb mortality' and the ACTIONS formula 'Blockade of neurohormonal stress → prevention of deleterious cardiac remodeling → ↓ mortality'. The mechanism is the reversal of chronic catecholamine toxicity: persistent β1 stimulation of the failing heart drives apoptosis, hypertrophy, and deleterious remodeling; blockade (started LOW, titrated SLOW, never in acute decompensation — the timing rules are KYP's, flagged; the printed cells carry only the chronic benefit) protects the myocardium. The trio spans two lanes: bisoprolol and metoprolol from the β1-selective A-to-M set, carvedilol from the combined β+α1 pair (its α1 arm adds afterload reduction). The exam's follow-ups: why not start in the decompensated patient (the negative inotropy can worsen acute HF — the printed adverse bucket 'cardiovascular (bradycardia, AV block, HF)'), why carvedilol is 'for no portal circulation' in the variceal row (its α1 arm), and which lane the asthmatic HFrEF patient gets (the β1-selective members).",
      },
      {
        stem:
          "A 34-year-old woman presents with 3 weeks of heat intolerance, 9-lb weight loss, tremor, and palpitations; examination shows a diffuse goiter, warm skin, fine tremor, and a heart rate of 128/min with an irregularly irregular rhythm. Free T4 is elevated, TSH suppressed, and thyroid-storm physiology is feared after she develops fever and agitation. The team starts propranolol along with an antithyroid drug. The pharmacology question asks what propranolol is doing there and why this drug specifically.",
        discriminator:
          "The printed row: 'Hyperthyroidism/ thyroid storm' → 'Symptom control (↓ heart rate, ↓ tremor)' | 'Propranolol' — the symptom-bridge row with its named drug from the nonselective lane",
        concept:
          "Thyroid-storm symptom control — propranolol, the nonselective β-blocker, as the adrenergic bridge while antithyroid drugs (and iodine) take effect",
        answer:
          "Propranolol — the printed row: 'Symptom control (↓ heart rate, ↓ tremor)'. Thyrotoxicosis is a hyperadrenergic state: the printed actions (rate and tremor control) are the β-mediated symptoms the storm kills with. The nonselective lane matters here (KYP reading, anchored to book 237's β2 row): thyrotoxic upregulation amplifies β2 effects too, and propranolol's β2 blockade adds the peripheral conversion inhibition (T4→T3 — KYP flag: the conversion blockade is NOT printed on this page; the printed cells carry rate and tremor control only). The sequence the exam pairs with it: β-blockade first for the symptoms, then the thionamide (PTU in storm — it also blocks conversion), then iodine hours later, and glucocorticoids — the endocrine protocol this row plugs into. The distractor sorts: metoprolol would control the rate but is the wrong lane for the full peripheral story (KYP-flagged); the printed name is propranolol.",
      },
      {
        stem:
          "A hospital formulary review asks the examinee to sort eleven β-blockers by receptor profile. Pairs of options test the sort: atenolol vs propranolol in a patient with asthma; carvedilol vs metoprolol in a patient with hypertension and orthostatic symptoms; nebivolol vs nadolol in a patient with endothelial dysfunction; labetalol vs esmolol for a hypertensive emergency in pregnancy. The pharmacology question is the selectivity of each — which receptors each drug takes.",
        discriminator:
          "The printed subtable with its own four mnemonics: 'β1-selective antagonists (β1 > β2)—atenolol, betaxolol, bisoprolol, esmolol, metoprolol' | 'A to M'; 'Nonselective antagonists (β1 = β2)—nadolol, propranolol, timolol' | 'N to Z'; 'Nonselective β-adrenergic, α1-selective antagonists—carvedilol, labetalol' | 'modified suffixes (instead of \"-olol\")'; 'Nebivolol combines cardiac-selective β1-adrenergic blockade with stimulation of β3 -receptors' | 'NebivOlol increases NO'",
        concept:
          "The four-lane selectivity sort — every '-olol' question is a receptor-profile question, and the book prints its own mnemonic key: A to M = β1-selective, N to Z = nonselective, modified suffix = β+α1, NebivOlol = NO",
        answer:
          "THE SORT, lane by lane: atenolol, betaxolol, bisoprolol, esmolol, metoprolol = β1-selective (β1 > β2, 'A to M' — the asthmatic's least-bad lane); nadolol, propranolol, timolol = nonselective (β1 = β2, 'N to Z' — the asthma contraindication, propranolol the flagship); carvedilol, labetalol = nonselective β PLUS α1 ('modified suffixes' — vasodilation built in: carvedilol the HFrEF and varices member, labetalol the hypertensive-emergency workhorse); nebivolol = β1-selective PLUS β3-NO ('NebivOlol increases NO' — NO synthase → vasodilation → ↓ SVR). The exam's applications: the asthmatic gets atenolol/metoprolol (or none), never propranolol or nadolol; the orthostatic hypertensive avoids the α1-carrying pair; the endothelial-dysfunction patient gets nebivolol (the NO); the pregnancy emergency gets labetalol (or esmolol for the heart — both outside this page's printed uses, KYP-flagged). The mnemonic cells are the book's own print — the exam tests whether you can run the sort in both directions (drug → lane, lane → drugs).",
      },
    ],
    traps: [
      {
        a: "All β-blockers are equally dangerous in asthma, so no patient with reactive airway disease can ever receive any of them — or, conversely, cardioselective agents are completely safe in asthma at any dose",
        b: "The DANGER TRACKS THE LANE: the nonselective N-to-Z drugs (nadolol, propranolol, timolol) block β2-mediated bronchodilation ('asthma/COPD exacerbations' — the printed cell) and are contraindicated in asthma; the β1-selective A-to-M drugs (atenolol, betaxolol, bisoprolol, esmolol, metoprolol, β1 > β2) are RELATIVELY lung-sparing at standard doses and are the least-bad choice when a β-blocker is truly required — with dose-dependent selectivity loss (the dose caveat is KYP's, flagged)",
        whyConfused:
          "The adverse-effect cell prints ONE pulmonary bucket ('asthma/COPD exacerbations') without naming which lane owns it; 'cardioselective' sounds absolute; and both extreme readings (never any β-blocker; cardioselective = safe at any dose) circulate in clinical teaching",
        keyDifference:
          "The selectivity subtable prints the ratio in the cell itself: 'β1 > β2' for the A-to-M five vs 'β1 = β2' for the N-to-Z three — the '>' is a ranking, not a wall. At standard doses the A-to-M members spare most β2 receptors (the asthmatic's relative protection); at high doses selectivity fades (the dose caveat, KYP-flagged). The exam's face: 'a 24-year-old asthmatic on albuterol needs migraine prophylaxis' — the answer is a non-β-blocker prophylactic first (topiramate, amitriptyline, verapamil — outside this page's print, KYP-flagged); if a β-blocker were unavoidable, the A-to-M lane at the lowest dose, never propranolol. The reverse trap: timolol EYE DROPS in the asthmatic — topical, but systemically absorbed enough to bronchospasm (the glaucoma row's named drug is a nonselective member).",
        clue:
          "Any stem pairing asthma/COPD with a β-blocker name is the lane sort: propranolol, nadolol, timolol → the exacerbation (stop/avoid, the printed cell); atenolol, metoprolol, esmolol → relatively safer (the β1 > β2 cell); and eye drops count — the timolol glaucoma row and the asthma caution can be the SAME question.",
      },
      {
        a: "A β-blocker in a diabetic just adds one more antihypertensive — the 'masked hypoglycemia' cell means the drug LOWERS glucose, so it is actually helpful",
        b: "'Masked hypoglycemia' is a MASKING, not a lowering: β-blockade silences the adrenergic alarm of hypoglycemia (tachycardia, tremor, anxiety — all β-mediated) AND blunts the β2-mediated hepatic glycogenolysis ('Glycogenolysis, glucose release', book 236) that raises glucose during the reaction — so the insulin-treated diabetic slides from shaky to confused (neuroglycopenia) without the warning signs",
        whyConfused:
          "The cell prints the single word 'masked' with no mechanism; 'β-blockers and glucose' is taught inconsistently (the masking story vs the rare nonselective-induced hypoglycemia in fasting diabetics); and the tachycardia-masking and the glycogenolysis-blunting are two different mechanisms hiding in one word",
        keyDifference:
          "Two β2 mechanisms under one printed cell (KYP decomposition, anchored to book 236's liver row and book 237's '↑ glycogenolysis'): (1) the ALARM is masked — the tachycardia, tremor, and pallor of the insulin reaction are β-mediated and silenced by the blocker; (2) the RESCUE is blunted — hepatic glycogenolysis, the counter-regulatory glucose surge, is β2-mediated and weakened. What REMAINS is neuroglycopenia: confusion, behavior change, seizures (the printed CNS bucket has 'seizures' — hypoglycemia is one of its causes). The exam's face: the insulin-dependent diabetic on propranolol found confused with a glucose of 38 — the teaching point is the missed prodrome; the counseling point (KYP-flagged) is more frequent glucose checks and neuroglycopenia-symptom education. The reverse: β1-selective members mask less (the alarm is partly β2) — one more reason the A-to-M lane is the diabetic's lane.",
        clue:
          "Any stem pairing an insulin- or sulfonylurea-treated diabetic with a β-blocker and an altered-mental-status event is 'masked hypoglycemia' — the printed cell, both mechanisms (alarm masked + rescue blunted), neuroglycopenia as the presentation; and any 'why does the A-to-M lane mask less than N-to-Z' question is the β2 share of the alarm.",
      },
      {
        a: "The unopposed-α story means β-blockers are absolutely contraindicated in all cocaine exposure, full stop — or the opposite: since the concern is 'unsubstantiated', propranolol is fine for cocaine chest pain",
        b: "The book's own hedge is the answer: 'Use of β-blockers for acute cocaine-associated chest pain remains controversial due to unsubstantiated concern for unopposed α-adrenergic stimulation' — CONTROVERSIAL, not absolutely contraindicated and not endorsed: β-blockade can leave cocaine's α-mediated vasoconstriction unopposed, so acute cocaine chest pain gets benzodiazepines, nitrates, and calcium-channel blockers first (the first-line agents are outside this page's print, KYP-flagged)",
        whyConfused:
          "The printed note carries TWO hedges in one line ('remains controversial' + 'unsubstantiated concern'), which cuts both ways; older exam material treated it as an absolute contraindication while newer reviews soften it; and the same unopposed-α physiology has a firm rule elsewhere (pheochromocytoma: α-blockade BEFORE β-blockade) that students over-generalize or under-generalize to cocaine",
        keyDifference:
          "One physiology, two printed confidence levels. PHEO (firm, but printed on NEITHER book-243 nor book-244: KYP-flagged, anchored to book 243's phenoxybenzamine row 'Pheochromocytoma (used preoperatively) to prevent catecholamine (hypertensive) crisis.'): a β-blocker BEFORE α-blockade leaves the tumor's catecholamine surge on unopposed α1 receptors → hypertensive crisis — so phenoxybenzamine (or phentolamine) first, β-blocker second (labetalol carries both, but the pure α-first rule stands). COCAINE (hedged, printed on THIS page): the same unopposed-α concern leads with the book's own qualifiers — 'remains controversial due to unsubstantiated concern'. The exam's face: cocaine chest pain → benzodiazepines and nitrates (the answer the toxicology chapters carry); pheo preparation → α-blockade first (never propranolol first); and any question quoting the hedge verbatim is testing whether you can recite the book's own language, not an absolutist rule.",
        clue:
          "Any cocaine + β-blocker stem is the printed controversy note (benzodiazepines/nitrates first, β-blockers held — the hedged version); any pheochromocytoma + β-blocker stem is the un-printed ordering rule (α FIRST — phenoxybenzamine, one page behind); and the connecting question 'what do the two share' is unopposed α stimulation.",
      },
      {
        a: "Every drug ending in '-olol' is a pure β-blocker and they differ only in potency — so carvedilol is just a stronger metoprolol, labetalol a longer propranolol, and nebivolol a newer atenolol; and any of them can be stopped abruptly once the blood pressure or the tremor is controlled",
        b: "The suffix is the fingerprint, and the book prints the rule: 'Nonselective β-adrenergic and α1-selective antagonists have modified suffixes (instead of \"-olol\")' — carvedilol and labetalol carry α1 blockade WITH the β blockade (vasodilation, orthostasis risk, the pheo second step), and nebivolol carries β3-NO agonism ('NebivOlol increases NO'); AND the taper rule the page does not print (KYP-flagged): never stop a β-blocker cold — rebound tachycardia, hypertension, angina, and arrhythmia; taper over days to weeks",
        whyConfused:
          "The roster prints eleven names that all LOOK like one family ('-olol' repeated), and the two modified names hide in plain sight in the alphabetical list; the A-to-M/N-to-Z mnemonics only sort the NINE plain -olol names, so students forget the two that break the rule; and abrupt withdrawal is a pharmacy-operations issue the table never mentions",
        keyDifference:
          "Three fingerprints the suffix reveals (the modified-suffix cell is printed; the readings are KYP's where flagged): (1) PLAIN '-olol' + first-half letter = β1-selective (atenolol→metoprolol, 'A to M'); (2) PLAIN '-olol' + second-half letter = nonselective (nadolol→timolol, 'N to Z'); (3) MODIFIED suffix = β+α1 (carvedilol, labetalol — the 'instead of \"-olol\"' rule); (4) the NE- prefix names its mechanism (NebivOlol → NO). The clinical dividends: carvedilol and labetalol can drop standing pressure more than expected (the α1 arm — the orthostatic caution), labetalol is the pheo-safe-ish and pregnancy-emergency member (after α-blockade in pheo — flagged), and nebivolol is the vasodilating member for the endothelial-dysfunction patient. The withdrawal dividend (KYP-flagged, NOT printed): the same upregulated receptor density that makes chronic β-blockade cardioprotactive makes sudden cessation dangerous — catecholamine sensitivity rebounds (tachycardia, hypertension, angina, arrhythmia; MI in coronary patients) — so taper.",
        clue:
          "Any option-pair offering a plain '-olol' against carvedilol, labetalol, or nebivolol for the same stem is the suffix rule (does the patient need the α1 arm? the NO?); any stem about a patient who stopped their β-blocker two days ago with rebound tachycardia or angina is the un-printed taper rule; and the memory hook is the book's own: 'modified suffixes (instead of \"-olol\")'.",
      },
    ],
    pivots: [
      {
        lookAlike: "Any 'which of the following drugs / best treatment' stem that names or implies a β-blocker — the HFrEF patient needing the mortality drug, the AF patient needing rate control, the thyrotoxic patient, the glaucoma patient, the cirrhotic patient after banding, the migraineur needing prophylaxis, the post-MI patient, the angina or HCM or hypertension patient, the pheochromocytoma patient already on phenoxybenzamine — asking the drug, the lane, or the receptor profile",
        differentiator:
          "The FOUR-LANE SORT (KYP compression of the printed subtable): first run the SUFFIX — plain '-olol' + A-to-M letter = β1-selective (atenolol, betaxolol, bisoprolol, esmolol, metoprolol); plain '-olol' + N-to-Z letter = nonselective (nadolol, propranolol, timolol); modified suffix = β+α1 (carvedilol, labetalol); NebivOlol = NO (β1 + β3); then run the PATIENT — HFrEF (stable) → the printed trio bisoprolol, carvedilol, metoprolol; SVT/AF → the printed duo metoprolol, esmolol; thyroid storm → the printed propranolol; glaucoma → the printed timolol; varices → the printed nadolol, propranolol, carvedilol; angina, HTN, HCM, migraine prophylaxis, post-MI → any appropriate lane; asthma → the A-to-M lane or none; pheo → α-blockade FIRST (one page behind), then the β-blocker",
        correctPath:
          "(1) Read the PATIENT before the drug list: the comorbidities are the lane selector — asthma/COPD (avoid the N-to-Z lane; A-to-M if required), diabetes (masked-hypoglycemia counseling; A-to-M preferred), pregnancy (outside this page's print — labetalol, KYP-flagged), HFrEF (the printed trio only), the post-banding cirrhotic (the printed portal trio). (2) Confirm the lane by the book's own mnemonics: 'A to M (β1 with 1st half of alphabet)', 'N to Z (β2 with 2nd half of alphabet)', 'modified suffixes (instead of \"-olol\")', 'NebivOlol increases NO'. (3) Sort the distractors by their own lanes: the α-blockers (one page behind — the -osins for BPH/HTN, phenoxybenzamine for pheo), the α2 agonists (clonidine — the central sympatholysis), the non-dihydropyridine CCBs (verapamil, diltiazem — the AV-node competitors that ALSO slow conduction and also fail in HFrEF), the nitrates (the other antianginal lane), and the antiarrhythmics by class (the β-blockers ARE class II — the printed label). (4) Carry the caution set with the choice: bradycardia/AV block, asthma, masked hypoglycemia, the cocaine controversy, and taper-don't-stop. (5) If the stem is a recognition rather than a patient, run the reverse sort: the wheezing patient on a new '-olol' → the N-to-Z lane; the confusion-with-glucose-38 diabetic → masked hypoglycemia; the rebound tachycardia two days after stopping → withdrawal; the pheo patient started on propranolol first → the unopposed-α1 crisis.",
      },
      {
        lookAlike: "Any 'adverse effect / mechanism of the observed effect / next step' stem on a patient taking a β-blocker — the asthmatic who started wheezing on propranolol, the diabetic found confused with a low glucose, the patient with syncope and a heart rate of 38, the cocaine user with chest pain, the patient who stopped metoprolol cold and returned with palpitations — asking the recognition, the mechanism, or the management",
        differentiator:
          "The caution set sorts by PATIENT and TIMING: the PULMONARY picture ('asthma/COPD exacerbations' — the nonselective lane, days after starting, the β2 mechanism of book 237's 'bronchodilation (two lungs)' row blocked), the METABOLIC picture ('masked hypoglycemia' — the insulin-treated diabetic, the silenced adrenergic alarm plus the blunted hepatic glycogenolysis), the CARDIAC picture ('bradycardia, AV block, HF' — rate in the 30s-40s, syncope, the decompensation-on-initiation risk), the TOXICOLOGIC picture (the cocaine controversy — the hedged unopposed-α concern), and the WITHDRAWAL picture (the un-printed taper rule — rebound within days of stopping)",
        correctPath:
          "(1) Establish WHICH lane and WHEN: the N-to-Z lane accounts for most pulmonary pictures; any lane accounts for the cardiac picture; the timing separates initiation effects (bradycardia, bronchospasm — days) from withdrawal effects (rebound — days after STOPPING). (2) The pulmonary picture is lane-diagnosed: wheeze after starting propranolol, nadolol, or timolol (drops included) → stop the drug, bronchodilator therapy, and never re-prescribe the nonselective lane to that patient; the A-to-M lane at standard doses is the relative survivor. (3) The metabolic picture is mechanism-diagnosed: the diabetic without the shaky prodrome presenting confused — check glucose, give dextrose, and re-educate (the neuroglycopenia symptoms are the new alarm; more frequent checks — the counseling is KYP-flagged). (4) The cardiac picture is dose-and-timing-diagnosed: rate 38 with syncope → hold the drug, check the ECG for AV block; the HFrEF patient who decompensated on initiation → the drug was started too soon or titrated too fast (the stable-initiation rule is KYP's, flagged; the printed cells carry the chronic benefit). (5) The toxicologic and withdrawal pictures are rule-diagnosed: cocaine chest pain → benzodiazepines and nitrates first, β-blockers held (the printed hedge); the patient who stopped cold → restart and taper (the un-printed rule), because the rebound (tachycardia, hypertension, angina, arrhythmia) is the same upregulated-receptor physiology the chronic blockade created.",
      },
    ],
    miniCase: {
      vignette:
        "A 23-year-old woman with mild intermittent asthma, controlled with as-needed albuterol and no prior hospitalizations, has four migraines per month and is started on propranolol 80 mg daily for prophylaxis. Three days later she develops dyspnea, a nocturnal cough, and audible wheezing; she has used her albuterol inhaler six times in the past 24 hours with incomplete relief. On examination she is speaking in short phrases, with diffuse expiratory wheeze and a prolonged expiratory phase; peak expiratory flow is 58% of her predicted baseline. Temperature is normal, glucose is 98 mg/dL, and an ECG shows sinus tachycardia without ischemic changes. The physician who started the propranolol is asked to explain the deterioration and choose the next step.",
      question:
        "What is the mechanism of her respiratory deterioration, and what is the best management of her migraine prophylaxis and her asthma from this point forward?",
      options: [
        {
          label:
            "Nonselective β2-receptor blockade in bronchial smooth muscle — propranolol (the 'N to Z' nonselective lane: 'Nonselective antagonists (β1 = β2)—nadolol, propranolol, timolol') removes β2-mediated bronchodilation, unopposing cholinergic and leukotriene-mediated bronchoconstriction (the printed adverse cell: 'asthma/COPD exacerbations'; the blocked mechanism is book 237's own β2 row: 'bronchodilation (two lungs)'). Management: stop propranolol, treat the exacerbation (inhaled short-acting β2 agonist ± systemic corticosteroid), and switch migraine prophylaxis to a non-β-blocker (e.g., topiramate, amitriptyline, or verapamil).",
          text: "Propranolol-induced bronchospasm via nonselective β2 blockade; stop propranolol and switch to a non-β-blocker prophylactic.",
          correct: true,
          why:
            "Every printed cell points here. THE LANE: propranolol is the printed member of the nonselective 'N to Z' trio ('β1 = β2') — both receptors blocked. THE MECHANISM: the β2 receptor is the bronchiole's dilator, printed on book 237's second-messenger row ('β2 | s | Vasodilation, bronchodilation (two lungs)...') and book 236's distribution row ('Bronchioles → Bronchodilation'); block it with a nonselective agent and the asthmatic's already-reactive airways lose their sympathetic brake on constriction — the printed adverse cell 'asthma/COPD exacerbations' IS this event. THE TIMING: three days after starting — a typical onset for drug-induced exacerbation. THE MANAGEMENT: stop the offending drug (the exacerbation then responds to standard therapy — the albuterol she is overusing is the SAME receptor's agonist, competing at the blocked receptor with incomplete effect while the blocker is on board); replace the prophylaxis with a non-β-blocker (topiramate, amitriptyline, verapamil, divalproex — the migraine-prophylaxis alternatives are outside this page's print, KYP-flagged: this page prints only the β-blocker row 'Migraine' → '↓ nitric oxide production' | 'Effective for prevention'). THE FALLBACK (KYP-flagged, for the future patient who truly needs a β-blocker — e.g., the post-MI asthmatic): the β1-selective A-to-M lane (metoprolol, atenolol) at the lowest effective dose is the least-bad choice, never the nonselective lane, and never without a pulmonologist's involvement.",
        },
        {
          label:
            "An IgE-mediated allergic reaction to propranolol — the timing (three days) fits drug allergy, and the wheeze is mast-cell mediator release; management is to stop the drug, give antihistamines and corticosteroids, and document the allergy, then choose an unrelated prophylactic.",
          text: "IgE-mediated drug allergy to propranolol; antihistamines and allergy documentation.",
          why:
            "The wrong-mechanism distractor: drug allergy is real but this is not its face — there is no urticaria, angioedema, hypotension, or eosinophilia in the stem, and the patient's underlying ASTHMA plus a NONSELECTIVE β-blocker is the printed combination the adverse row warns about ('asthma/COPD exacerbations'). The mechanism is pharmacologic (receptor blockade unopposing constriction), not immunologic (IgE-mast-cell mediator release) — and the distractor tests whether the examinee reaches for the flashy mechanism over the printed one. The management overlaps (stop the drug) but the labeling matters: calling this an allergy bars the entire class forever, including the β1-selective members that would be the least-bad future choice for this patient if she ever truly needed one — the pharmacologic reading keeps that lane open. Note the exam's own tell: the stem's 'albuterol with incomplete relief' is the β2 agonist fighting the β2 blocker — an allergy story would not explain that competition.",
        },
        {
          label:
            "Severe bradycardia from β1 blockade reducing cardiac output and producing cardiogenic pulmonary edema — propranolol slows the heart enough to back up the lungs; management is to hold the drug, obtain an ECG, and treat the heart failure with diuresis.",
          text: "Propranolol-induced bradycardic pulmonary edema; diuresis and cardiac workup.",
          why:
            "The wrong-bucket distractor: the cardiovascular bucket of the printed adverse row IS real ('cardiovascular (bradycardia, AV block, HF)') — but the stem forecloses it: the ECG shows SINUS TACHYCARDIA (the respiratory distress driving the rate, not bradycardia driving edema), the exam shows EXPIRATORY WHEEZE with a prolonged expiratory phase (bronchoconstriction, not crackles), and there is no edema, orthopnea history, or chest radiograph of congestion. The distractor tests whether the examinee knows WHICH bucket of the adverse row owns WHICH presentation: bradycardia/AV block/HF is the β1 cardiac bucket (syncope, rate in the 30s-40s, decompensation in the failing heart); bronchospasm is the β2 pulmonary bucket (wheeze, prolonged expiration, peak-flow drop). The mechanisms are in different lanes of the selectivity subtable too — and the treatment differs completely (stop + bronchodilate vs hold + pace/diurese).",
        },
        {
          label:
            "Albuterol overuse with β2-receptor downregulation — six uses in 24 hours has tachyphylaxed her receptors, so the inhaler itself has stopped working; management is to stop albuterol, start a long-acting agent, and continue propranolol since it has had three days to reach steady state.",
          text: "Albuterol tachyphylaxis; stop the inhaler, continue propranolol.",
          why:
            "The backwards-causation distractor — the most dangerous option on the list. The increased albuterol use is the CONSEQUENCE of the worsening obstruction, not its cause; the temporal anchor is the propranolol start (three days ago), not the inhaler (which she has used PRN for years). The receptor logic the distractor distorts: chronic β2-agonist overuse CAN downregulate receptors, but the story here is COMPETITION — the agonist (albuterol) fighting the antagonist (propranolol) at the same β2 receptor, which is exactly why her rescue doses give 'incomplete relief' while the blocker is on board. And the management clause ('continue propranolol') is the harm: continuing the nonselective blockade deepens the exacerbation — the printed 'asthma/COPD exacerbations' cell is the warning, and the correct move is to REMOVE the antagonist, not the agonist. The distractor tests whether the examinee can order the cause and effect in a pharmacology competition question.",
        },
        {
          label:
            "Coincident viral bronchiolitis triggering her asthma — the timing with the new drug is coincidence, viral season being what it is; management is supportive care, continue propranolol under observation, and add an inhaled corticosteroid.",
          text:
            "Viral-triggered asthma exacerbation; continue propranolol, add inhaled corticosteroid.",
          why:
            "The attribution-error distractor: viral exacerbations ARE the most common asthma trigger in her age group, and the stem's absence of fever does not exclude a viral prodrome — but the EXPOSURE anchors the attribution: a nonselective β-blocker started 72 hours before the worst exacerbation of her life, in a class whose printed adverse cell is 'asthma/COPD exacerbations', is never a coincidence on the exam. The management clause is the second error: continuing the nonselective blocker 'under observation' while treating around it — the obstruction will not clear reliably until the antagonist is withdrawn (the albuterol competition again), and inhaled corticosteroids take days to work. The distractor tests the single most transferable rule of pharmacology stems: when a new drug and a new symptom appear together, the drug is the cause until proven otherwise — and here the mechanism (β2 blockade), the lane (nonselective 'N to Z'), and the printed adverse cell all line up.",
        },
      ],
      reasoning:
        "The vignette is the ADVERSE ROW'S PULMONARY CELL presented as a patient — the asthmatic, the nonselective blocker, the 72-hour onset, the wheeze, and the peak-flow drop; the overused albuterol plants the competition question in the stem. (1) THE LANE — propranolol is the printed member of the nonselective trio ('Nonselective antagonists (β1 = β2)—nadolol, propranolol, timolol' | 'NonZelective antagonists mostly go from N to Z (β2 with 2nd half of alphabet)'): both receptors blocked, no β2 sparing. (2) THE MECHANISM — the β2 receptor is the bronchiole's dilator, printed on BOTH anchor pages: 'β2 | s | Vasodilation, bronchodilation (two lungs)...' (book 237) and 'Bronchioles → Bronchodilation' (book 236); the asthmatic's airways depend on that β2 tone to balance cholinergic and leukotriene-mediated constriction, and the nonselective blockade removes it — the printed adverse cell 'asthma/COPD exacerbations' IS this event, and the incomplete albuterol relief is the agonist-antagonist competition at the blocked receptor. (3) THE DIFFERENTIAL AUTOPSIES — IgE allergy (no urticaria, angioedema, or hypotension; the pharmacologic mechanism fits every feature), bradycardic pulmonary edema (sinus TACHYCARDIA on the ECG, expiratory wheeze not crackles — the wrong bucket of the adverse row), albuterol tachyphylaxis (backwards causation — the inhaler is the consequence and the rescue, not the cause; and 'continue propranolol' is the harm), viral bronchiolitis (attribution error — the drug exposure anchors the cause; the class's printed pulmonary cell is the warning label). (4) THE MANAGEMENT — stop propranolol (remove the antagonist), treat the exacerbation (short-acting β2 agonist ± systemic corticosteroid), and replace the prophylaxis with a non-β-blocker (topiramate, amitriptyline, verapamil — KYP-flagged as outside this page's print: the printed migraine row carries only the β-blocker lane, '↓ nitric oxide production' | 'Effective for prevention'). (5) THE FORWARD RULE — the asthmatic who truly needs a β-blocker (the post-MI patient, the HFrEF patient) gets the β1-selective A-to-M lane at the lowest effective dose (β1 > β2, the printed ratio), never the nonselective lane — and the eye drops count (timolol, the printed glaucoma drug, is a nonselective member systemically absorbed enough to do the same). The discriminator to carry: in the β-blockers table the LANE owns the TOXICITY — 'β1 = β2' takes the bronchioles with it, 'β1 > β2' leaves them mostly alone, and the asthmatic is the patient who tells them apart.",
    },
  },
  mnemonics: [
    {
      code: "A TO M = β1, N TO Z = β2 (the book's OWN printed mnemonics): 'Selective antagonists mostly go from A to M (β1 with 1st half of alphabet)' — Atenolol, Betaxolol, Bisoprolol, Esmolol, Metoprolol (β1 > β2, the cardioselective five) — and 'NonZelective antagonists mostly go from N to Z (β2 with 2nd half of alphabet)' — Nadolol, Propranolol, Timolol (β1 = β2, the nonselective three)",
      meaning:
        "Both cells are the book's own print, verbatim from the SELECTIVITY subtable — the publisher itself turns the alphabet into the selectivity key: the FIRST LETTER of a plain '-olol' name sorts the drug. KYP adds only the reading that the sort answers every named-drug question: drug → lane (atenolol → β1-selective; nadolol → nonselective) and lane → danger (the N-to-Z set owns 'asthma/COPD exacerbations'; the A-to-M set spares the bronchioles at standard doses).",
      memorizes: "The two plain-'-olol' selectivity lanes — which five drugs are β1-selective (A to M) and which three are nonselective (N to Z), with the receptor ratios (β1 > β2 vs β1 = β2)",
      whenToUse:
        "Any stem that names a plain '-olol' drug and asks the receptor profile; any 'which β-blocker is safest in asthma/COPD' question (the A-to-M lane); any 'which are contraindicated in asthma' question (the N-to-Z lane); and the reverse sorts (given β1-selectivity, name the drugs; given propranolol, name the lane).",
      clinical:
        "The alphabet sort is the fastest safety check on the wards: the asthmatic or COPD patient needing rate control gets an A-to-M drug (metoprolol, atenolol) — never a plain N-to-Z one; and the patient on timolol eye drops who wheezes is the same rule through a topical route. The dose caveat (KYP-flagged): selectivity fades as the dose rises — 'β1 > β2' is a ranking, not a wall.",
    },
    {
      code: "MODIFIED SUFFIX = MODIFIED RECEPTORS (the book's own rule): 'Nonselective β-adrenergic and α1-selective antagonists have modified suffixes (instead of \"-olol\")' — carveDILOL and LABETALOL break the '-olol' pattern because their receptor pattern is broken: nonselective β-blockade PLUS α1 blockade, vasodilation built into the molecule",
      meaning:
        "The suffix rule is the book's own print (the NOTES/EXAMPLES cell of the third selectivity row); KYP adds the mnemonic reading (MODIFIED SUFFIX → MODIFIED RECEPTORS) and the clinical dividend: the α1 arm adds afterload reduction and orthostasis risk, makes carvedilol the HFrEF trio's third member and a varices option ('for no portal circulation' — the book's clause), and makes labetalol the hypertensive-emergency workhorse (pregnancy, aortic dissection — uses outside this page's print, KYP-flagged) and the pheo second step AFTER α-blockade (the ordering rule not printed — flagged, anchored to book 243's phenoxybenzamine row).",
      memorizes: "The combined β+α1 pair (carvedilol, labetalol) and the suffix rule that identifies them — the two '-olol' names that are not plain '-olol' and the α1 blockade both carry",
      whenToUse:
        "Any option-pair that offers carvedilol or labetalol against a plain '-olol' member; any 'which β-blocker also blocks α1' or 'which lowers afterload by receptor blockade' question; any pheochromocytoma preparation question (α-blockade first, then labetalol or a β-blocker); and any 'why did the patient on the combined drug get orthostatic hypotension' stem.",
      clinical:
        "The rule travels with two cautions: the combined pair can drop standing pressure more than a plain β-blocker (the α1 arm — counsel the first-dose patient), and in pheochromocytoma even labetalol follows the α-first sequence in classic teaching (KYP-flagged: the printed pages carry phenoxybenzamine's pretreatment row on book 243 and the unopposed-α concern for cocaine on book 244, never the pheo ordering rule itself).",
    },
    {
      code: "NEBIVOLOL = NEBivOlol INCREASES NO (the book's own mnemonic, capital-O emphasis): 'Nebivolol combines cardiac-selective β1-adrenergic blockade with stimulation of β3 -receptors (activate NO synthase in the vasculature and ↓ SVR)' — the ONE β-blocker that vasodilates by a second mechanism",
      meaning:
        "The mnemonic and the mechanism are BOTH the book's own print (the fourth selectivity row and its NOTES cell): β1 blockade (cardioselective) PLUS β3-receptor stimulation → NO synthase activation in the vasculature → ↓ SVR. KYP adds the context: the β3 row prints on book 237's second-messenger table (the s-family — the same Gs currency), so the one β-blocker that mints NO is also the one whose extra receptor is printed on the mechanism page.",
      memorizes: "Nebivolol's dual mechanism (β1 blockade + β3-mediated NO release → ↓ SVR) and its membership in the selectivity subtable as the fourth lane",
      whenToUse:
        "Any 'which β-blocker increases nitric oxide' or 'which causes vasodilation through a second mechanism' question; any stem pairing hypertension with endothelial dysfunction or nitrate intolerance asking for the vasodilating β-blocker; and any selectivity-sort question that includes nebivolol among the options (the NE- name is the NO tell).",
      clinical:
        "The NO member is the metabolic/vascular corner of the class: less cold extremities and dyslipidemia concern than the older agents (comparative claims are KYP's, flagged), and the practical dividend is the fourth lane of every selectivity sort — the exam's version: 'β1 + β3, increases NO, ↓ SVR' → nebivolol, by the book's own capital-O mnemonic.",
    },
    {
      code: "β-BLOCKER BLUES (KYP): the adverse row as one word — B is Bradycardia + AV block (and HF), L is Lungs ('asthma/COPD exacerbations' — the nonselective lane), U is Un-noticed hypoglycemia (masked: the alarm silenced, the liver's glycogenolysis blunted), E is Erectile dysfunction, S is Sleep alterations + Seizures (the CNS bucket) — plus Dyslipidemia (metoprolol, the one drug named in the row) and the un-printed taper rule (never stop cold: rebound tachycardia, hypertension, angina, arrhythmia)",
      meaning:
        "The KYP compression of the printed adverse-effects row ('Erectile dysfunction, cardiovascular (bradycardia, AV block, HF), CNS (seizures, sleep alterations), dyslipidemia (metoprolol), masked hypoglycemia, asthma/COPD exacerbations'): one word carries every bucket. The row is the book's own print; the BLUES frame, the U-for-un-noticed reading of 'masked', and the taper rule are KYP's (flagged — the row prints no withdrawal token).",
      memorizes: "The whole adverse-effects row verbatim-by-bucket: sexual (erectile dysfunction), cardiovascular (bradycardia, AV block, HF), pulmonary (asthma/COPD exacerbations), metabolic (masked hypoglycemia, dyslipidemia-metoprolol), CNS (seizures, sleep alterations) — plus the abrupt-withdrawal rebound the row does not print",
      whenToUse:
        "Any 'adverse effects of β-blockers' list question; any stem pairing a β-blocker with one of the BLUES presentations (the wheezing patient = L; the confused diabetic = U; the syncopal rate-38 patient = B; the impotent patient = E; the abnormally-dreaming patient = S); and any 'what happens if this patient stops the drug suddenly' question (the un-printed rebound).",
      clinical:
        "The BLUES word is also the counseling script: rise slowly and report dizziness (B), carry the inhaler and know your lane (L — the A-to-M patient asks once and the N-to-Z patient never starts), check glucose more often and learn the confusion symptoms (U), expect the sexual and sleep effects to be dose-related and discussable (E, S), and never stop the drug without a taper plan (the un-printed rule that keeps the rebound away). The one drug named in the row — metoprolol, for dyslipidemia — is itself an A-to-M member: even the toxicity lane sorts by the selectivity lanes.",
    },
  ],
  rapidReview: {
    s30: [
      "'β-blockers' — the class-table block, the WHOLE of book 244 (pdf 266), under the standing PHARMACOLOGY—AUTONOMIC DRUGS banner; the page behind (book 243) is the completed two-table PH22/PH23 page; the page ahead (book 245) opens 'Phosphodiesterase inhibitors' — sourcePages = [266] only.",
      "The roster, verbatim: 'Atenolol, betaxolol, bisoprolol, carvedilol, esmolol, labetalol, metoprolol, nadolol, nebivolol, propranolol, timolol.' — eleven drugs, ten plain '-olol' plus the two modified-suffix members (carvedilol, labetalol).",
      "The table frame: three printed column headers — APPLICATION / ACTIONS / NOTES/EXAMPLES — ten application rows, then the ADVERSE EFFECTS row, then the SELECTIVITY subtable of four rows.",
      "Rows 1-3, verbatim: 'Angina pectoris' → '↓ heart rate and contractility → ↓ O2 consumption'; 'Glaucoma' → '↓ production of aqueous humor' | 'Timolol'; 'Heart failure' → 'Blockade of neurohormonal stress → prevention of deleterious cardiac remodeling → ↓ mortality' | 'Bisoprolol, carvedilol, metoprolol (β-blockers curb mortality)'.",
      "Rows 4-6, verbatim: 'Hypertension' → '↓ cardiac output, ↓ renin secretion (due to β1-receptor blockade on JG cells)'; 'Hyperthyroidism/ thyroid storm' → 'Symptom control (↓ heart rate, ↓ tremor)' | 'Propranolol'; 'Hypertrophic cardiomyopathy' → '↓ heart rate → ↑ filling time, relieving obstruction'.",
      "Rows 7-10, verbatim: 'Migraine' → '↓ nitric oxide production' | 'Effective for prevention'; 'Myocardial infarction' → '↓ O2 demand (short-term), ↓ mortality (long-term)'; 'Supraventricular tachycardia (eg, atrial fibrillation)' → '↓ AV conduction velocity (class II antiarrhythmic)' | 'Metoprolol, esmolol'; 'Variceal bleeding' → '↓ hepatic venous pressure gradient and portal hypertension (prophylactic use)' | 'Nadolol, propranolol, carvedilol for no portal circulation'.",
      "The adverse row, verbatim: 'Erectile dysfunction, cardiovascular (bradycardia, AV block, HF), CNS (seizures, sleep alterations), dyslipidemia (metoprolol), masked hypoglycemia, asthma/COPD exacerbations' + the note 'Use of β-blockers for acute cocaine-associated chest pain remains controversial due to unsubstantiated concern for unopposed α-adrenergic stimulation'.",
      "The selectivity subtable, verbatim: 'β1-selective antagonists (β1 > β2)—atenolol, betaxolol, bisoprolol, esmolol, metoprolol' | 'A to M'; 'Nonselective antagonists (β1 = β2)—nadolol, propranolol, timolol' | 'N to Z'; 'Nonselective β-adrenergic, α1-selective antagonists—carvedilol, labetalol' | 'modified suffixes (instead of \"-olol\")'; 'Nebivolol combines cardiac-selective β1-adrenergic blockade with stimulation of β3-receptors (activate NO synthase in the vasculature and ↓ SVR)' | 'NebivOlol increases NO'.",
      "The mechanism anchors (printed on the completed pages): 'β1 | s | ↑ heart rate, ↑ contractility (one heart), ↑ renin release, ↑ lipolysis' and 'β2 | s | Vasodilation, bronchodilation (two lungs), ↑ lipolysis, ↑ insulin release, ↑ glycogenolysis, ↓ uterine tone (tocolysis), ↑ aqueous humor production, ↑ cellular K+ uptake' (book 237); 'β1 | Heart / Kidney → ↑ heart rate, contractility / ↑ renin secretion' and 'β2 | Bronchioles / Cardiac muscle / Liver / Arterial smooth muscle / Pancreas → Bronchodilation / ↑ heart rate, contractility / Glycogenolysis, glucose release / Vasodilation / Stimulation of insulin secretion' (book 236).",
      "The absences (verified, never cited as printed): NO partial-agonist/ISA row (pindolol, acebutolol absent from the 2026 page), NO α2+β member, NO essential-tremor row; and the un-printed rules (KYP-flagged): the α-first pheo sequence, the abrupt-withdrawal taper rule, the avoid-in-asthma management rule, and the T4→T3 conversion blockade.",
    ],
    m3: [
      "A TO M = β1, N TO Z = β2, MODIFIED SUFFIX = α1 ADDED, NEBIVOLOL = NO (all four the book's own print) — atenolol, betaxolol, bisoprolol, esmolol, metoprolol are β1-selective (β1 > β2, the asthmatic's least-bad lane); nadolol, propranolol, timolol are nonselective (β1 = β2, the asthma-contraindicated lane); carvedilol and labetalol add α1 (vasodilation, orthostasis, the pheo second step); nebivolol adds β3-NO ('NebivOlol increases NO' → ↓ SVR).",
      "β-BLOCKER BLUES (KYP) — B: bradycardia + AV block (and HF); L: lungs ('asthma/COPD exacerbations' — the nonselective lane); U: un-noticed hypoglycemia (masked: the adrenergic alarm silenced + the hepatic glycogenolysis of book 236's liver row blunted); E: erectile dysfunction; S: sleep alterations + seizures (CNS) — plus 'dyslipidemia (metoprolol)' and the un-printed taper rule (never stop cold: rebound tachycardia, hypertension, angina, arrhythmia).",
      "THE NAMED-DRUG LANES — the mortality trio (HFrEF: 'Bisoprolol, carvedilol, metoprolol (β-blockers curb mortality)'; stable, euvolemic, low start, slow titration), the rate duo (SVT/AF: metoprolol + esmolol, 'class II antiarrhythmic', '↓ AV conduction velocity'), the portal trio (varices: nadolol, propranolol, carvedilol 'for no portal circulation'), and the single-drug rows (glaucoma: timolol '↓ production of aqueous humor'; thyroid storm: propranolol 'Symptom control (↓ heart rate, ↓ tremor)').",
    ],
    m10: [
      "The whole block in one breath: one header ('β-blockers' + the eleven-drug roster), ten application rows (angina, glaucoma, heart failure, hypertension, hyperthyroidism/thyroid storm, hypertrophic cardiomyopathy, migraine, myocardial infarction, SVT, variceal bleeding), one adverse row (five system buckets + the cocaine-controversy note), and the four-row selectivity subtable with the book's own four mnemonics (A to M, N to Z, modified suffixes, NO).",
      "The mechanism, assembled from printed anchors: β1 AND β2 both ride Gs (book 237: 'β1 | s', 'β2 | s' — ↑ cAMP → ↑ PKA); β1 sits at the heart and kidney (book 236: rate, contractility, renin) — blockade slows and weakens the heart ('↓ heart rate and contractility → ↓ O2 consumption'), slows the AV node ('class II antiarrhythmic'), and cuts renin at the JG cells (the printed hypertension note); β2 sits at the bronchioles, liver, arteries, and ciliary body — nonselective blockade unopposes bronchoconstriction ('asthma/COPD exacerbations'), blunts hepatic glycogenolysis and hides the adrenergic alarm ('masked hypoglycemia'), and cuts aqueous humor production (the timolol glaucoma effect — book 237's '↑ aqueous humor production' reversed).",
      "The selectivity sort with the book's own key: 'Selective antagonists mostly go from A to M (β1 with 1st half of alphabet)' — atenolol, betaxolol, bisoprolol, esmolol, metoprolol (β1 > β2); 'NonZelective antagonists mostly go from N to Z (β2 with 2nd half of alphabet)' — nadolol, propranolol, timolol (β1 = β2); 'modified suffixes (instead of \"-olol\")' — carvedilol, labetalol (nonselective β + α1: vasodilation built in); 'NebivOlol increases NO' — β1 + β3-NO ('activate NO synthase in the vasculature and ↓ SVR').",
      "The heart-failure row is the exam's anchor: 'Blockade of neurohormonal stress → prevention of deleterious cardiac remodeling → ↓ mortality' with exactly THREE named drugs — bisoprolol, carvedilol, metoprolol ('β-blockers curb mortality') — spanning two lanes (the β1-selective pair + the combined carvedilol); initiated only in the STABLE, euvolemic patient, started low, titrated slow (the timing rules are KYP's, flagged — the printed cells carry the chronic benefit; the adverse row's HF token carries the initiation risk).",
      "The hypertension formula, verbatim: '↓ cardiac output, ↓ renin secretion (due to β1-receptor blockade on JG cells)' — the two-hit print (pump + renin → ↓ angiotensin II and aldosterone downstream); the same β1-kidney address prints on book 236's distribution row ('Heart / Kidney → ↑ heart rate, contractility / ↑ renin secretion').",
      "The named-drug uses: timolol for glaucoma ('↓ production of aqueous humor' — topical, but absorbed: the asthmatic's eye drops can wheeze); propranolol for hyperthyroidism/thyroid storm ('Symptom control (↓ heart rate, ↓ tremor)' — the adrenergic bridge while antithyroid drugs work; the T4→T3 conversion blockade is NOT printed, KYP-flagged); metoprolol + esmolol for SVT ('↓ AV conduction velocity (class II antiarrhythmic)' — esmolol the ultra-short IV agent); nadolol, propranolol, carvedilol for variceal prophylaxis ('↓ hepatic venous pressure gradient and portal hypertension (prophylactic use)', the carvedilol clause 'for no portal circulation').",
      "The caution set as three patients (KYP frame; the cells are printed): THE ASTHMATIC — 'asthma/COPD exacerbations' is the nonselective lane's β2 doing (book 237's 'bronchodilation (two lungs)' blocked); the avoidance rule for the N-to-Z lane is KYP-flagged; the A-to-M lane (β1 > β2) is the least-bad fallback. THE BRITTLE DIABETIC — 'masked hypoglycemia': the tachycardia-tremor-anxiety alarm is β-mediated and silenced, and the hepatic glycogenolysis rescue (book 236: 'Glycogenolysis, glucose release') is blunted — neuroglycopenia (confusion, seizures) replaces the shaky prodrome. THE COCAINE USER — the printed hedge: 'remains controversial due to unsubstantiated concern for unopposed α-adrenergic stimulation' (benzodiazepines and nitrates first — the first-line agents outside this page's print, KYP-flagged).",
      "The unopposed-α connection across the two pages: book 244 prints the cocaine concern ('unsubstantiated concern for unopposed α-adrenergic stimulation'); book 243 behind prints the phenoxybenzamine row ('Irreversible. Pheochromocytoma (used preoperatively) to prevent catecholamine (hypertensive) crisis.') — together they anchor the PHEO α-FIRST rule (KYP-flagged: the ordering prints on NEITHER page): a β-blocker before α-blockade leaves the tumor's catecholamine surge on unopposed α1 receptors → hypertensive crisis; so α-blockade first, β-blockade (for the tachyarrhythmia) second.",
      "The three cautions that are NOT printed on this page (KYP-flagged, never cited as printed): the abrupt-withdrawal rebound (stop cold → rebound tachycardia, hypertension, angina, arrhythmia — taper over days to weeks), the essential-tremor use of propranolol (the printed neurology lane is migraine prophylaxis alone), and the T4→T3 conversion blockade in thyroid storm (the printed actions are rate and tremor control only).",
      "The verified absences and the boundaries: the selectivity subtable prints exactly FOUR groups — the partial-agonist/ISA members (pindolol, acebutolol) and any α2+β member are ABSENT from the 2026 page (documented, never cited as printed); pdf 265 behind carries the completed PH22 (sympatholytics α2-agonists) and PH23 (α-blockers) tables — only the phenoxybenzamine row and the final mirtazapine row pinned from behind; pdf 267 ahead opens 'Phosphodiesterase inhibitors' (the PENDING next topic — the cAMP/cGMP page, the same second-messenger currency this block's Gs couple mints); sourcePages = [266] only.",
    ],
  },
  recall: [
    {
      q: "Recite the selectivity subtable whole — all four rows with their receptor ratios, drug lists, and the book's own four printed mnemonic cells, verbatim.",
      a:
        "ROW 1: 'β1-selective antagonists (β1 > β2)—atenolol, betaxolol, bisoprolol, esmolol, metoprolol' | 'Selective antagonists mostly go from A to M (β1 with 1st half of alphabet)'. ROW 2: 'Nonselective antagonists (β1 = β2)—nadolol, propranolol, timolol' | 'NonZelective antagonists mostly go from N to Z (β2 with 2nd half of alphabet)'. ROW 3: 'Nonselective β-adrenergic, α1-selective antagonists—carvedilol, labetalol' | 'Nonselective β-adrenergic and α1-selective antagonists have modified suffixes (instead of \"-olol\")'. ROW 4: 'Nebivolol combines cardiac-selective β1-adrenergic blockade with stimulation of β3-receptors (activate NO synthase in the vasculature and ↓ SVR)' | 'NebivOlol increases NO'. All four mnemonic cells are the book's own print — the publisher's own selectivity key.",
    },
    {
      q: "Recite the application matrix — all ten rows with their ACTIONS and NOTES/EXAMPLES cells, verbatim — naming which rows carry which drugs.",
      a:
        "'Angina pectoris' → '↓ heart rate and contractility → ↓ O2 consumption'. 'Glaucoma' → '↓ production of aqueous humor' | 'Timolol'. 'Heart failure' → 'Blockade of neurohormonal stress → prevention of deleterious cardiac remodeling → ↓ mortality' | 'Bisoprolol, carvedilol, metoprolol (β-blockers curb mortality)'. 'Hypertension' → '↓ cardiac output, ↓ renin secretion (due to β1-receptor blockade on JG cells)'. 'Hyperthyroidism/thyroid storm' → 'Symptom control (↓ heart rate, ↓ tremor)' | 'Propranolol'. 'Hypertrophic cardiomyopathy' → '↓ heart rate → ↑ filling time, relieving obstruction'. 'Migraine' → '↓ nitric oxide production' | 'Effective for prevention'. 'Myocardial infarction' → '↓ O2 demand (short-term), ↓ mortality (long-term)'. 'Supraventricular tachycardia (eg, atrial fibrillation)' → '↓ AV conduction velocity (class II antiarrhythmic)' | 'Metoprolol, esmolol'. 'Variceal bleeding' → '↓ hepatic venous pressure gradient and portal hypertension (prophylactic use)' | 'Nadolol, propranolol, carvedilol for no portal circulation'. Five rows carry named drugs (the mortality trio, the rate duo, timolol, propranolol, the portal trio); five are class-wide mechanism rows.",
    },
    {
      q: "State the adverse-effects row whole, verbatim, with its cocaine note — and decompose 'masked hypoglycemia' into its two mechanisms using the printed anchor rows.",
      a:
        "THE ROW: 'Erectile dysfunction, cardiovascular (bradycardia, AV block, HF), CNS (seizures, sleep alterations), dyslipidemia (metoprolol), masked hypoglycemia, asthma/COPD exacerbations'. THE NOTE: 'Use of β-blockers for acute cocaine-associated chest pain remains controversial due to unsubstantiated concern for unopposed α-adrenergic stimulation'. THE DECOMPOSITION (anchored to book 236's β2 rows and book 237's β2 row): (1) the ALARM is masked — hypoglycemia's tachycardia, tremor, and anxiety are β-mediated and silenced by the blocker; (2) the RESCUE is blunted — the hepatic 'Glycogenolysis, glucose release' of book 236's β2-liver row is β2-mediated and weakened; the result is neuroglycopenia (confusion, behavior change, seizures) without the prodrome. The counseling (KYP-flagged: not printed): more frequent glucose checks and neuroglycopenia-symptom education for the insulin- or sulfonylurea-treated patient.",
    },
    {
      q: "A patient with a confirmed pheochromocytoma is scheduled for adrenalectomy and already has adequate α-blockade. Why is the β-blocker added only second, and what is the printed anchor for that rule on the two pages you have? A separate patient with cocaine-associated chest pain is in the ED — what does the book print about β-blockers there?",
      a:
        "PHEO (the ordering rule is KYP-flagged: it prints on NEITHER book 243 nor book 244): a β-blocker given BEFORE α-blockade leaves the tumor's catecholamine surge acting on UNOPPOSED α1 receptors — vasoconstriction without the β2 counterbalance → the hypertensive crisis; so α-blockade first (book 243's printed anchor: phenoxybenzamine 'Irreversible. Pheochromocytoma (used preoperatively) to prevent catecholamine (hypertensive) crisis.'), β-blockade second (for the tachyarrhythmia, after adequate α-blockade). COCAINE (printed on book 244, the book's own hedge): 'Use of β-blockers for acute cocaine-associated chest pain remains controversial due to unsubstantiated concern for unopposed α-adrenergic stimulation' — the same unopposed-α physiology, hedged: benzodiazepines and nitrates are the first-line agents (outside this page's print, KYP-flagged), β-blockers held. One physiology, two confidence levels: firm for pheo, hedged-controversial for cocaine.",
    },
    {
      q: "State the PH23/PH24 boundary of books 243-244, the section-extent findings for pdf 265 and pdf 267, and the three verified absences of the 2026 β-blockers table.",
      a:
        "THE BOUNDARY (pinned both ways): pdf 265 (book 243) behind carries TWO separable sections under the one banner — the 'Sympatholytics (α2-agonists)' block (the COMPLETED PH22) and the 'α-blockers' class table (the COMPLETED PH23) — both EXCLUDED here; only the α-blockers table's phenoxybenzamine row (the α-first pheo anchor) and its final mirtazapine row (the α2-antagonist mirror the β-blockers subtable has NO lane for) pinned from behind. THE EXTENT: the β-blockers block occupies the WHOLE of pdf 266 (book 244) — header, roster, ten-row application matrix, adverse row, four-row selectivity subtable, footer; pdf 267 (book 245) ahead opens 'Phosphodiesterase inhibitors' (the PENDING next topic); sourcePages = [266] only. THE THREE VERIFIED ABSENCES: (1) no partial-agonist/ISA row — pindolol and acebutolol are ABSENT from the 2026 page; (2) no α2+β member — the selectivity subtable prints exactly four groups (β1-selective, nonselective β1=β2, combined β+α1, nebivolol-β3/NO); (3) no essential-tremor row — the printed neurology lane is migraine prophylaxis alone. All three documented as verified-absent, never cited as printed.",
    },
  ],
  related: [
    {
      title: "Alpha-Blockers — the Page Behind and the α1 Half of the Combined Members",
      topicId: "alpha-blockers",
      note:
        "The completed PH23 (book 243, the page immediately behind this one): the α-blockers table whose phenoxybenzamine row ('Irreversible. Pheochromocytoma (used preoperatively) to prevent catecholamine (hypertensive) crisis.') is the printed anchor for the pheo α-FIRST sequence this block's labetalol row completes (the ordering rule itself prints on neither page — KYP-flagged on both). The two tables share carvedilol and labetalol: this block's selectivity subtable files them as 'Nonselective β-adrenergic, α1-selective antagonists... modified suffixes (instead of \"-olol\")' — the SAME α1 receptor the -osin four of book 243 block (the vascular and visceral smooth-muscle addresses of book 236). The exam's cross-page sort: pure α1 (the -osins, BPH and hypertension), pure β (the nine plain -olols), and the two combined members that bridge (afterload reduction from both directions). The epinephrine-reversal graphs of book 242 (the α-blockade prints behind both tables) are the hemodynamic bridge: under nonselective α-blockade the pressor flips depressor — the β2 unopposed.",
    },
    {
      title: "Tissue Distribution of Adrenergic Receptors — the β1 and β2 Addresses This Block Occupies",
      topicId: "tissue-distribution-of-adrenergic-receptors",
      note:
        "The completed PH15 (book 236): the receptor-distribution table whose β1 row — 'β1 | Heart / Kidney → ↑ heart rate, contractility / ↑ renin secretion' — puts both β1 addresses in table form (the heart: the chronotropy and inotropy the angina, HCM, SVT, and MI rows block; the kidney: the JG-cell renin the hypertension row's printed note names), and whose β2 row — 'Bronchioles / Cardiac muscle / Liver / Arterial smooth muscle / Pancreas → Bronchodilation / ↑ heart rate, contractility / Glycogenolysis, glucose release / Vasodilation / Stimulation of insulin secretion' — puts the caution addresses in table form (the bronchiole line is the 'asthma/COPD exacerbations' cell's address; the liver line is the 'masked hypoglycemia' cell's rescue address; the arterial line is the vasodilation whose loss under nonselective blockade chills the extremities). Any 'where does β1 act' or 'why does a heart drug worsen asthma' question on this block's drugs is answered from that page's print.",
    },
    {
      title: "G-Protein-Linked Second Messengers — the Gs Couple Both β Receptors Ride",
      topicId: "g-protein-linked-second-messengers",
      note:
        "The completed PH16 (book 237): the second-messenger table whose β1 row — 'β1 | s | ↑ heart rate, ↑ contractility (one heart), ↑ renin release, ↑ lipolysis' — and β2 row — 'β2 | s | Vasodilation, bronchodilation (two lungs), ↑ lipolysis, ↑ insulin release, ↑ glycogenolysis, ↓ uterine tone (tocolysis), ↑ aqueous humor production, ↑ cellular K+ uptake' — carry MORE of this block's mechanisms than any other page: the β2 row alone prints the mechanisms of the asthma exacerbation (bronchodilation blocked), the masked hypoglycemia (glycogenolysis blocked), and the timolol glaucoma effect ('↑ aqueous humor production' reversed) — three printed cells of book 244, one printed row of book 237. The β3 row ('↑ lipolysis, ↑ thermogenesis in skeletal muscle, ↑ bladder relaxation') is the receptor behind nebivolol's NO arm. Both β receptors = Gs = ↑ cAMP: the couple the blockers silence.",
    },
    {
      title: "Autonomic Drugs — the Circuitry Page the Sympatholysis Reverses",
      topicId: "autonomic-drugs",
      note:
        "The completed PH17 (book 238): the autonomic circuitry page — the sympathetic outflow, the organ-effect tables, and the presynaptic α2-autoreceptor sentence ('Release of norepinephrine from a sympathetic nerve ending is modulated by NE itself, acting on presynaptic α2-autoreceptors → negative feedback.') that the completed PH22's agonists pull and PH23's mirtazapine releases. For THIS block the page supplies the physiology the β-blockade reverses: the end-organ sympathetic effects (the heart's chronotropy and inotropy, the JG-cell renin, the bronchiolar tone) the ten application rows block at the receptor, and the baroreflex arc that answers the lowered pressure and rate. The page's cholinergic/noradrenergic drug-sort tables are the frame this block's table completes on the pharmacology side — the last autonomic-drugs table before the phosphodiesterase inhibitors open book 245.",
    },
  ],
  crossLinks: [
    {
      subject: "Cardiology (the mortality and rate lanes — heart failure, myocardial infarction, arrhythmias, angina, HCM)",
      connection:
        "Five of the ten application rows are cardiology: the HFrEF mortality trio ('Bisoprolol, carvedilol, metoprolol (β-blockers curb mortality)' — the neurohormonal-stress story, started low and titrated slow in the stable euvolemic patient, never in acute decompensation), the post-MI two-clock ('↓ O2 demand (short-term), ↓ mortality (long-term)'), the class II antiarrhythmic label (the '↓ AV conduction velocity' of the SVT row — rate control in atrial fibrillation with metoprolol or esmolol, the AV-node competitors verapamil and diltiazem sorted against them), the angina arithmetic ('↓ heart rate and contractility → ↓ O2 consumption' — the demand half of the supply-demand equation the nitrates serve from the preload side), and the HCM filling-time arithmetic ('↓ heart rate → ↑ filling time, relieving obstruction' — the gradient-relief drug of the obstructive cardiomyocyte). The cardiology exam recycles this page: every HFrEF drug-choice stem, every post-MI mortality stem, every AF rate-control stem, and every HCM gradient stem lands on one of these rows — and the adverse row's cardiovascular bucket (bradycardia, AV block, HF) is the same page's danger half.",
    },
    {
      subject: "Endocrinology (the thyroid-storm bridge and the brittle diabetic's masked alarm)",
      connection:
        "The printed 'Hyperthyroidism/ thyroid storm' row — 'Symptom control (↓ heart rate, ↓ tremor)' | 'Propranolol' — is the pharmacology half of the thyroid-storm protocol the endocrine chapters standardize: β-blockade FIRST for the adrenergic symptoms (rate, tremor, anxiety), then the thionamide (propylthiouracil in storm — it also blocks peripheral conversion), then iodine hours after the thionamide, plus glucocorticoids and cooling; propranolol's additional blockade of peripheral T4→T3 conversion is the classic teaching (KYP-flagged: not printed on this page). The diabetes half is the adverse row's 'masked hypoglycemia': the insulin- or sulfonylurea-treated patient loses the adrenergic prodrome (tachycardia, tremor — β-mediated) AND the hepatic glycogenolysis rescue (β2-mediated, book 236's liver row), presenting with neuroglycopenia instead — the exam's version is the diabetic found confused with a glucose in the 30s on a new β-blocker; the counseling (more frequent checks, neuroglycopenia education) is the flagged overlay.",
    },
    {
      subject: "Ophthalmology & Gastroenterology (the glaucoma drop and the portal-pressure trio)",
      connection:
        "Two organ-specific lanes print with named drugs: the 'Glaucoma' row — '↓ production of aqueous humor' | 'Timolol' — the topical nonselective drop for open-angle glaucoma, whose mechanism is book 237's β2 row reversed ('↑ aqueous humor production' blocked) and whose systemic absorption is the exam's trick (the asthmatic's eye drops can wheeze — the topical route does not exempt the N-to-Z lane from the caution cell); and the 'Variceal bleeding' row — '↓ hepatic venous pressure gradient and portal hypertension (prophylactic use)' | 'Nadolol, propranolol, carvedilol for no portal circulation' — the cirrhosis-prophylaxis lane after banding or a first bleed (secondary prophylaxis), where the nonselective members reduce portal pressure partly by unopposed α-mediated splanchnic vasoconstriction (the mechanism reading is KYP's, flagged) and the carvedilol clause carries the book's own fine print on the combined member. The GI chapters pair this row with endoscopic banding and the Carvedilol-vs-nadolol choice in portal hypertension.",
    },
    {
      subject: "Pulmonology & Toxicology (the asthma contraindication and the cocaine controversy)",
      connection:
        "The two danger lanes of the page: the 'asthma/COPD exacerbations' cell — the nonselective N-to-Z lane's β2 blockade unopposing bronchial and small-airway constriction (book 237's 'bronchodilation (two lungs)' row reversed), the reason propranolol, nadolol, and timolol are contraindicated in reactive airway disease (the avoidance rule is KYP-flagged: the cell names the exacerbation, not the contraindication) and the reason the β1-selective A-to-M lane (β1 > β2) is the least-bad choice when a β-blocker is truly required; and the cocaine note — 'Use of β-blockers for acute cocaine-associated chest pain remains controversial due to unsubstantiated concern for unopposed α-adrenergic stimulation' — the toxicology crossover (benzodiazepines, nitrates, and calcium-channel blockers first; β-blockers held) that shares its unopposed-α physiology with the pheochromocytoma α-first rule anchored one page behind (phenoxybenzamine). The exam's pulmonology face: the asthmatic who wheezed on propranolol or on timolol drops — stop the drug, never re-prescribe the lane; its toxicology face: the cocaine chest-pain stem — quote the book's own hedge.",
    },
  ],
};
