import type { KypUsMLENote } from "../types";

// Pharmacology — PHOSPHODIESTERASE INHIBITORS (PH25 — the isoform-fork
// block: the 'Phosphodiesterase inhibitors' section, the WHOLE of pdf 267 /
// book 245, the LAST page under the standing 'PHARMACOLOGY—AUTONOMIC DRUGS'
// banner — the banner ends here: the page ahead, pdf 268 / book 246, opens
// the NEW 'PHARMACOLOGY—TOXICITIES AND ADVERSE EFFECTS' banner with the
// Ingested seafood toxins table). The page prints: the section header with
// the intro sentence 'Phosphodiesterase (PDE) inhibitors inhibit PDE, which
// catalyzes the hydrolysis of cAMP and/or cGMP, and thereby increase cAMP
// and/or cGMP. These inhibitors have varying specificity for PDE isoforms
// and thus have different clinical uses.'; ONE FOUR-COLUMN TABLE (TYPE OF
// INHIBITOR / MECHANISM OF ACTION / CLINICAL USES / ADVERSE EFFECTS) of
// FIVE rows — 'Nonspecific PDE inhibitor / Theophylline': '↓ cAMP hydrolysis
// → ↑ cAMP → bronchial smooth muscle relaxation → bronchodilation' |
// 'COPD/asthma (rarely used)' | 'Cardiotoxicity (eg, tachycardia,
// arrhythmia), neurotoxicity (eg, seizures, headache), abdominal pain';
// 'PDE-5 inhibitors / Sildenafil, vardenafil, tadalafil, avanafil': '↓
// hydrolysis of cGMP → ↑ cGMP → ↑ smooth muscle relaxation by enhancing NO
// activity → pulmonary vasodilation and ↑ blood flow in corpus cavernosum
// fills the penis' | 'Erectile dysfunction / Pulmonary hypertension /
// Benign prostatic hyperplasia (tadalafil only)' | 'Facial flushing,
// headache, dyspepsia, hypotension in patients taking nitrates; “hot and
// sweaty,” then headache, heartburn, hypotension' + 'Sildenafil only:
// cyanopia (blue-tinted vision) via inhibition of PDE-6 (six) in retina';
// 'PDE-4 inhibitor / Roflumilast': '↑ cAMP in neutrophils, granulocytes,
// and bronchial epithelium' | 'Severe COPD' | 'Abdominal pain, weight loss,
// depression, anxiety, insomnia'; 'PDE-3 inhibitor / Milrinone': 'In
// cardiomyocytes: ↑ cAMP → ↑ Ca2+ influx → ↑ ionotropy and chronotropy / In
// vascular smooth muscle: ↑ cAMP → MLCK inhibition → vasodilation → ↓
// preload and afterload' | 'Acute decompensated HF with cardiogenic shock
// (inotrope)' | 'Tachycardia, ventricular arrhythmias, hypotension';
// '"Platelet inhibitors" / Cilostazol^a / Dipyridamole^b': 'In platelets: ↑
// cAMP → inhibition of platelet aggregation' | 'Intermittent claudication /
// Stroke or TIA prevention (with aspirin) / Cardiac stress testing
// (dipyridamole only, due to coronary vasodilation) / Prevention of coronary
// stent restenosis' | 'Nausea, headache, facial flushing, hypotension,
// abdominal pain' — and the TWO footnotes: a 'Cilostazol is a PDE-3
// inhibitor, but due to its indications is categorized as a platelet
// inhibitor together with dipyridamole.'; b 'Dipyridamole is a nonspecific
// PDE inhibitor, leading to inhibition of platelet aggregation. It also
// prevents adenosine reuptake by platelets → ↑ extracellular adenosine → ↑
// vasodilation.'
// PH24/PH25 BOUNDARY (pinned both ways): the page BEHIND (book 244) is the
// COMPLETED PH24 beta-blockers page — its table is EXCLUDED here; only the
// selectivity subtable's final rows (the carvedilol/labetalol row, the
// nebivolol row, the 'NebivOlol increases NO' mnemonic) and the book-244
// footer pinned from behind. The page AHEAD (book 246) opens the NEW
// 'PHARMACOLOGY—TOXICITIES AND ADVERSE EFFECTS' banner (Ingested seafood
// toxins) — this block does NOT extend there: sourcePages = [267] only, and
// the AUTONOMIC-DRUGS banner ends with this page.
// CROSS-PAGE MECHANISM ANCHORS (all printed): book 237
// (g-protein-linked-second-messengers, PH16) — the β1 row 'β1 | s | ↑ heart
// rate, ↑ contractility (one heart), ↑ renin release, ↑ lipolysis' and the
// β2 row 'β2 | s | Vasodilation, bronchodilation (two lungs), ↑ lipolysis,
// ↑ insulin release, ↑ glycogenolysis...' (the Gs couple — the receptor-side
// lever on the same cAMP currency), AND the Gs diagram labels themselves
// ('Adenylyl cyclase', 'GS protein', 'ATP', 'Cyclic AMP', 'Protein kinase
// A') — the printed mint of the currency this page's enzyme is the sink of.
// The block is pure text with zero rasters on pdf 267 — carried verbatim as
// this note's two table blocks; conveyed as ONE original KYP isoform-fork
// map (PdeInhibitorMap). KYP extensions flagged wherever they appear: the
// ISOFORM-FORK frame (the five rows compressed into one fork question —
// the rows, numbers, and footnotes are printed; the compression is KYP's),
// the CYCLIC-NUCLEOTIDE-CURRENCY frame (the cAMP camp vs the cGMP camp —
// the camp split is KYP's; the currency rows print on book 237), the
// NITRATE-SEPARATION protocol (NOT printed — the page prints only
// 'hypotension in patients taking nitrates' as an adverse cell; the 24-48h
// separation rules are KYP's, flagged), and the boundary + absence census
// (the PDE-5 roster prints FOUR members — sildenafil, vardenafil,
// tadalafil, AND avanafil; no PDE-1 or PDE-2 row prints; no other
// methylxanthine prints (caffeine absent); no other PDE-3 member prints
// (amrinone/inamrinone absent); the book's own 'ionotropy' spelling and its
// own '(six)' parenthetical carry verbatim — documented, never cited as
// corrected).
export const phosphodiesteraseInhibitors: KypUsMLENote = {
  id: "phosphodiesterase-inhibitors",
  title: "Phosphodiesterase Inhibitors",
  subtitle:
    "One enzyme, two currencies, five rows — the drugs that block the breakdown: PDE catalyzes the hydrolysis of cAMP and/or cGMP; inhibit it and the second messengers accumulate. The cAMP camp works at four addresses (theophylline's bronchial smooth muscle 'COPD/asthma (rarely used)', roflumilast's 'neutrophils, granulocytes, and bronchial epithelium' in severe COPD, milrinone's cardiomyocyte '↑ Ca2+ influx' in cardiogenic shock, and the platelet pair's 'inhibition of platelet aggregation' in claudication, stroke-TIA prevention, and stress testing), while the cGMP camp is PDE-5 alone (sildenafil, vardenafil, tadalafil, avanafil — '↓ hydrolysis of cGMP → ↑ cGMP → ↑ smooth muscle relaxation by enhancing NO activity', erectile dysfunction, pulmonary hypertension, BPH tadalafil-only), with the caution set 'hypotension in patients taking nitrates', sildenafil-only 'cyanopia (blue-tinted vision) via inhibition of PDE-6 (six) in retina', milrinone's 'ventricular arrhythmias', and roflumilast's 'depression, anxiety, insomnia'.",
  subject: "Pharmacology",
  system:
    "Section II · Pharmacology — Autonomic Drugs (the banner this page shares with drug-effect-modifications, autonomic-receptors, acetylcholine-receptors, pain-transmission, micturition-control, tissue-distribution-of-adrenergic-receptors, g-protein-linked-second-messengers, autonomic-drugs, cholinomimetic-agents, anticholinesterase-poisoning, muscarinic-antagonists, atropine, sympatholytics-alpha-2-agonists, alpha-blockers, and beta-blockers before it — the phosphodiesterase-inhibitors table OPENS book 245, the page immediately after the one-table beta-blockers page (COMPLETED PH24 — only its selectivity subtable's final rows and footer pinned from behind). THIS PAGE IS THE LAST OF THE BANNER: the page ahead (book 246) opens the NEW 'PHARMACOLOGY—TOXICITIES AND ADVERSE EFFECTS' banner (Ingested seafood toxins) — the autonomic-drugs run ends here. The currency this page's enzyme hydrolyzes mints one page back: book 237 prints the β1 row ('β1 | s' — Gs, '(one heart)') and the β2 row ('bronchodilation (two lungs)', '↑ glycogenolysis') AND the Gs diagram itself ('GS protein | ATP | Cyclic AMP | Protein kinase A' through 'Adenylyl cyclase') — the receptor→effector→second-messenger chain whose sink PDE is and whose brake these drugs release; the β-blockers page between them (book 244) is the receptor-side lever on the same cAMP (β-blockade lowers it at the receptor, PDE inhibition raises it at the hydrolase)",
  pilotCategory:
    "The class table's complete architecture — the section header, the intro sentence (the enzyme, the hydrolysis, the currency, the isoform-specificity principle), the four-column TYPE OF INHIBITOR/MECHANISM OF ACTION/CLINICAL USES/ADVERSE EFFECTS matrix in full (every type, mechanism, use, and adverse cell verbatim, including the 'COPD/asthma (rarely used)' rank, the '(tadalafil only)' parenthetical, the '(dipyridamole only, due to coronary vasodilation)' clause, the 'hypotension in patients taking nitrates' token, the '“hot and sweaty,”' quote, the book's own 'ionotropy' spelling, and its own '(six)' parenthetical), and both categorizing footnotes — plus the KYP layers that compress it: the ISOFORM-FORK frame, the CYCLIC-NUCLEOTIDE-CURRENCY frame (cAMP camp vs cGMP camp), the NITRATE-SEPARATION protocol (flagged as not printed), and the boundary + absence census (the PDE-5 roster's FOUR members — the task's three-name list omitted avanafil; no PDE-1/PDE-2 rows; no caffeine; no amrinone).",
  difficulty: 2,
  readTime: 6,
  sourceRef:
    "First Aid 2026, Part 1 pp. 245 (Pharmacology — Autonomic Drugs: phosphodiesterase inhibitors — the WHOLE page, the LAST page of the banner; this block prints: the section header 'Phosphodiesterase inhibitors' + the intro sentence 'Phosphodiesterase (PDE) inhibitors inhibit PDE, which catalyzes the hydrolysis of cAMP and/or cGMP, and thereby increase cAMP and/or cGMP. These inhibitors have varying specificity for PDE isoforms and thus have different clinical uses.'; the four-column TYPE OF INHIBITOR/MECHANISM OF ACTION/CLINICAL USES/ADVERSE EFFECTS matrix of five rows — 'Nonspecific PDE inhibitor / Theophylline': '↓ cAMP hydrolysis → ↑ cAMP → bronchial smooth muscle relaxation → bronchodilation' | 'COPD/asthma (rarely used)' | 'Cardiotoxicity (eg, tachycardia, arrhythmia), neurotoxicity (eg, seizures, headache), abdominal pain'; 'PDE-5 inhibitors / Sildenafil, vardenafil, tadalafil, avanafil': '↓ hydrolysis of cGMP → ↑ cGMP → ↑ smooth muscle relaxation by enhancing NO activity → pulmonary vasodilation and ↑ blood flow in corpus cavernosum fills the penis' | 'Erectile dysfunction / Pulmonary hypertension / Benign prostatic hyperplasia (tadalafil only)' | 'Facial flushing, headache, dyspepsia, hypotension in patients taking nitrates; “hot and sweaty,” then headache, heartburn, hypotension' + 'Sildenafil only: cyanopia (blue-tinted vision) via inhibition of PDE-6 (six) in retina'; 'PDE-4 inhibitor / Roflumilast': '↑ cAMP in neutrophils, granulocytes, and bronchial epithelium' | 'Severe COPD' | 'Abdominal pain, weight loss, depression, anxiety, insomnia'; 'PDE-3 inhibitor / Milrinone': 'In cardiomyocytes: ↑ cAMP → ↑ Ca2+ influx → ↑ ionotropy and chronotropy / In vascular smooth muscle: ↑ cAMP → MLCK inhibition → vasodilation → ↓ preload and afterload' | 'Acute decompensated HF with cardiogenic shock (inotrope)' | 'Tachycardia, ventricular arrhythmias, hypotension'; '\"Platelet inhibitors\" / Cilostazol^a / Dipyridamole^b': 'In platelets: ↑ cAMP → inhibition of platelet aggregation' | 'Intermittent claudication / Stroke or TIA prevention (with aspirin) / Cardiac stress testing (dipyridamole only, due to coronary vasodilation) / Prevention of coronary stent restenosis' | 'Nausea, headache, facial flushing, hypotension, abdominal pain'; and the footnotes a 'Cilostazol is a PDE-3 inhibitor, but due to its indications is categorized as a platelet inhibitor together with dipyridamole.' and b 'Dipyridamole is a nonspecific PDE inhibitor, leading to inhibition of platelet aggregation. It also prevents adenosine reuptake by platelets → ↑ extracellular adenosine → ↑ vasodilation.' — the block is pure text with zero rasters, never reproduced as artwork, carried verbatim as this note's two table blocks; NOT printed in this block (census-flagged, never cited as printed): the Gs/adenylyl-cyclase mint of the currency (it prints on book 237 — 'GS protein', 'ATP', 'Cyclic AMP', 'Adenylyl cyclase' — and its β1/β2 rows), the 24-48h nitrate/sildenafil separation protocol (the page prints only the adverse cell 'hypotension in patients taking nitrates' — KYP-flagged wherever the timing rules appear), the theophylline narrow-therapeutic-index/level-monitoring story (not printed on this page — KYP-flagged wherever taught), and the guanylyl-cyclase step of the NO pathway (the page prints 'enhancing NO activity'; the NO→guanylyl cyclase→cGMP chain is KYP-flagged); the 2026 table prints NO PDE-1 or PDE-2 row, NO other methylxanthine (caffeine absent), and NO other PDE-3 member (amrinone/inamrinone absent); the PDE-5 roster prints FOUR members (sildenafil, vardenafil, tadalafil, avanafil); the book's own 'ionotropy' spelling and its own '(six)' parenthetical carry verbatim; the block does NOT extend to pdf 268 (book 246 opens the NEW 'PHARMACOLOGY—TOXICITIES AND ADVERSE EFFECTS' banner with Ingested seafood toxins), and pdf 266 behind carries only the completed PH24 beta-blockers table)",
  tags: [
    "phosphodiesterase inhibitors",
    "PDE inhibitors",
    "PDE-3 inhibitors",
    "PDE-4 inhibitors",
    "PDE-5 inhibitors",
    "milrinone",
    "cilostazol",
    "roflumilast",
    "sildenafil",
    "vardenafil",
    "tadalafil",
    "avanafil",
    "theophylline",
    "dipyridamole",
    "cAMP",
    "cGMP",
    "hydrolysis",
    "inotrope",
    "cardiogenic shock",
    "acute decompensated heart failure",
    "erectile dysfunction",
    "pulmonary hypertension",
    "benign prostatic hyperplasia",
    "severe COPD",
    "intermittent claudication",
    "stroke prevention",
    "cardiac stress testing",
    "coronary stent restenosis",
    "cyanopia",
    "blue-tinted vision",
    "PDE-6",
    "nitrites and nitrates",
    "nitrate interaction",
    "hypotension",
    "hot and sweaty",
    "ventricular arrhythmias",
    "depression",
    "anxiety",
    "insomnia",
    "neurotoxicity",
    "cardiotoxicity",
    "antiplatelet",
    "platelet aggregation",
    "adenosine",
    "coronary vasodilation",
    "pharmacology",
  ],
  core: {
    what:
      "ONE ENZYME, TWO CURRENCIES, FIVE ROWS. The block opens with its banner — 'Phosphodiesterase inhibitors' — and the intro sentence: 'Phosphodiesterase (PDE) inhibitors inhibit PDE, which catalyzes the hydrolysis of cAMP and/or cGMP, and thereby increase cAMP and/or cGMP. These inhibitors have varying specificity for PDE isoforms and thus have different clinical uses.' Then one four-column table. ROW 1 — THE NONSPECIFIC ROW (Theophylline): '↓ cAMP hydrolysis → ↑ cAMP → bronchial smooth muscle relaxation → bronchodilation' for 'COPD/asthma (rarely used)', with 'Cardiotoxicity (eg, tachycardia, arrhythmia), neurotoxicity (eg, seizures, headache), abdominal pain'. ROW 2 — THE PDE-5 ROW (Sildenafil, vardenafil, tadalafil, avanafil): '↓ hydrolysis of cGMP → ↑ cGMP → ↑ smooth muscle relaxation by enhancing NO activity → pulmonary vasodilation and ↑ blood flow in corpus cavernosum fills the penis' for erectile dysfunction, pulmonary hypertension, and 'Benign prostatic hyperplasia (tadalafil only)', with 'hypotension in patients taking nitrates', '“hot and sweaty,”' and sildenafil-only 'cyanopia (blue-tinted vision) via inhibition of PDE-6 (six) in retina'. ROW 3 — THE PDE-4 ROW (Roflumilast): '↑ cAMP in neutrophils, granulocytes, and bronchial epithelium' for 'Severe COPD', with 'Abdominal pain, weight loss, depression, anxiety, insomnia'. ROW 4 — THE PDE-3 ROW (Milrinone): the cardiomyocyte half '↑ cAMP → ↑ Ca2+ influx → ↑ ionotropy and chronotropy' plus the vascular half '↑ cAMP → MLCK inhibition → vasodilation → ↓ preload and afterload' for 'Acute decompensated HF with cardiogenic shock (inotrope)', with 'Tachycardia, ventricular arrhythmias, hypotension'. ROW 5 — THE PLATELET PAIR (Cilostazol, Dipyridamole): 'In platelets: ↑ cAMP → inhibition of platelet aggregation' for intermittent claudication, 'Stroke or TIA prevention (with aspirin)', 'Cardiac stress testing (dipyridamole only, due to coronary vasodilation)', and 'Prevention of coronary stent restenosis'. Then the two footnotes that resolve the taxonomy: cilostazol IS a PDE-3 inhibitor filed by indication, and dipyridamole is the nonspecific member whose second mechanism is adenosine-reuptake blockade. That is the whole printed block — one enzyme family, one page, five clinical universes.",
    why:
      "WHY THE ISOFORM FORK IS ON THE EXAM. PDE is the sink of the second-messenger system: Gs-coupled receptors mint cAMP (book 237's printed chain: 'GS protein | ATP | Cyclic AMP | Protein kinase A' through 'Adenylyl cyclase'), the NO pathway relaxes smooth muscle through cGMP, and PDE terminates both signals by hydrolysis. Inhibit the hydrolase and the signal persists without touching the receptor — which is why these drugs work downstream of β-blockade (the facing page lowers the same cAMP at the receptor) and downstream of β-agonism (the theophylline row manufactures the bronchodilation book 237's β2 row prints, one step below the receptor). THE cAMP CAMP works at four addresses: the bronchial smooth muscle (theophylline's bronchodilation — 'rarely used' because cardiotoxicity and neurotoxicity ride the same nonspecific currency), the immune cells of the airway (roflumilast's 'neutrophils, granulocytes, and bronchial epithelium' — the anti-inflammatory lane, with the neuropsychiatric bucket 'depression, anxiety, insomnia' as its price), the cardiomyocyte and the vascular smooth muscle (milrinone's two halves: '↑ Ca2+ influx → ↑ ionotropy and chronotropy' at the heart, 'MLCK inhibition → vasodilation → ↓ preload and afterload' at the vessels — the inotrope with 'Tachycardia, ventricular arrhythmias, hypotension' as its price), and the platelet (the pair's 'inhibition of platelet aggregation' — cilostazol a PDE-3 member filed by indication, dipyridamole the nonspecific member that also 'prevents adenosine reuptake by platelets → ↑ extracellular adenosine → ↑ vasodilation', the printed basis of the stress-testing use). THE cGMP CAMP is PDE-5 alone: '↓ hydrolysis of cGMP → ↑ cGMP → ↑ smooth muscle relaxation by enhancing NO activity' — the penis and the pulmonary arteries fill ('pulmonary vasodilation and ↑ blood flow in corpus cavernosum fills the penis'), and the danger is the convergence: nitrates are NO donors feeding the same cGMP pool, so the combination is 'hypotension in patients taking nitrates' — the printed token the exam builds its contraindication stems on. Sildenafil adds the off-target isoform: at high doses it also inhibits 'PDE-6 (six) in retina' — the book's own '(six)' parenthetical is its printed memory hook — producing cyanopia, the blue-tinted vision.",
    keyIdea:
      "Read the page as a TWO-CAMP SORT with one fork (KYP compression of the printed table + the anchor page). THE CAMP SPLIT (KYP frame; the currency rows print on book 237): cAMP ACTS at four addresses — bronchial smooth muscle (theophylline), airway immune cells (roflumilast), cardiomyocyte + vascular smooth muscle (milrinone), platelet (cilostazol + dipyridamole); cGMP RELAXES one tissue set — the PDE-5 four (sildenafil, vardenafil, tadalafil, avanafil) at the corpus cavernosum and the pulmonary vasculature. THE FORK QUESTION for any named drug: WHICH PDE does it inhibit? PDE-3 (milrinone — the inotrope for 'Acute decompensated HF with cardiogenic shock'; cilostazol — the same isoform, filed by indication under the platelet pair, per footnote a), PDE-4 (roflumilast — the severe-COPD anti-inflammatory), PDE-5 (the four-member roster — ED, pulmonary hypertension, 'BPH (tadalafil only)'), or NO isoform number at all (the two nonspecifics: theophylline 'rarely used', and dipyridamole, whose second mechanism is the adenosine-reuptake blockade of footnote b). THE ADDRESS decides the use; THE CURRENCY decides the mechanism; THE CONVERGENCE decides the danger — the nitrate interaction is two cGMP inputs (the PDE-5 brake released + the NO donor feeding the pool) converging on one vasodilated smooth muscle bed. One line: name the isoform, the isoform names the address, the address names the patient — and the two exceptions (cilostazol filed by indication, dipyridamole doubled with adenosine) are the exam.",
  },
  mechanisms: [
    {
      id: "pde-hydrolysis-block-isoform-fork",
      title:
        "The hydrolysis block: PDE catalyzes the hydrolysis of cAMP and/or cGMP (the intro sentence, printed) — the inhibitor blocks the hydrolase, the second messengers accumulate, and the isoform specificity forks the one mechanism into the cAMP camp (four addresses) and the cGMP camp (one, PDE-5)",
      context:
        "The block's printed intro sentence + five-row table (book 245); the currency itself prints on the completed page behind the banner run — book 237 (g-protein-linked-second-messengers, PH16: the β1 and β2 Gs rows and the Gs diagram labels 'Adenylyl cyclase / GS protein / ATP / Cyclic AMP / Protein kinase A'). The camp split that organizes the five rows is KYP's.",
      flow: {
        nodes: [
          {
            id: "input",
            label: "The currency to defend: the second messengers cAMP and cGMP — minted by the printed chain of book 237 ('GS protein' → 'Adenylyl cyclase' → 'ATP' → 'Cyclic AMP' → 'Protein kinase A') on the Gs side, and by the NO pathway on the cGMP side ('enhancing NO activity' is this page's own printed token for it)",
            sublabel:
              "Input — the second-messenger system the previous autonomic sections built: Gs-coupled receptors (β1, β2, D1, H2) mint cAMP from ATP through adenylyl cyclase; the NO pathway drives cGMP; and the signal persists only until its hydrolase clears it. This block's drugs are the brakes on the hydrolase — they work DOWNSTREAM of the receptor, which is why they coexist with β-blockade (the facing page) and outlast β-agonism.",
            variant: "input",
          },
          {
            id: "enzyme",
            label: "STEP 1 — THE ENZYME (the intro sentence, verbatim): 'Phosphodiesterase (PDE) inhibitors inhibit PDE, which catalyzes the hydrolysis of cAMP and/or cGMP, and thereby increase cAMP and/or cGMP' — the hydrolysis is the sink of the system; blocking it is the one mechanism every row shares",
            sublabel:
              "The couple: receptor → effector → second messenger → kinase → effect, and PDE at the end of the line. The inhibitor does not touch the receptor (that is the β-blockers' page) and does not mimic the ligand (that is the agonists' page) — it extends the half-life of the signal already minted. 'These inhibitors have varying specificity for PDE isoforms and thus have different clinical uses' — the printed principle that sorts the rest of the page.",
            variant: "process",
          },
          {
            id: "fork",
            label: "STEP 2 — THE FORK IS THE ISOFORM SPECIFICITY (the printed principle, run as a camp split — KYP frame): THE cAMP CAMP (PDE-3, PDE-4, and the nonspecifics take cAMP) works at four addresses — the bronchial smooth muscle (theophylline), the airway immune cells (roflumilast), the cardiomyocyte + vascular smooth muscle (milrinone), the platelet (cilostazol, dipyridamole); THE cGMP CAMP (PDE-5 alone) — '↓ hydrolysis of cGMP → ↑ cGMP → ↑ smooth muscle relaxation by enhancing NO activity' at the corpus cavernosum and the pulmonary vasculature",
            sublabel:
              "The isoform numbers ARE the clinical use: PDE-3 the failing pump ('Acute decompensated HF with cardiogenic shock (inotrope)' + the platelet pair's claudication lane), PDE-4 the inflamed airway ('Severe COPD'), PDE-5 the engorged vessels (erectile dysfunction, pulmonary hypertension, 'Benign prostatic hyperplasia (tadalafil only)'), and the two rows with NO number — the nonspecifics (theophylline 'COPD/asthma (rarely used)'; dipyridamole, the platelet row's other member). The rows are printed; the camp compression is KYP's.",
            variant: "process",
          },
          {
            id: "addresses",
            label: "STEP 3 — THE ADDRESSES (the cAMP camp, one currency, four tissues): bronchial smooth muscle '↓ cAMP hydrolysis → ↑ cAMP → bronchial smooth muscle relaxation → bronchodilation' (theophylline); '↑ cAMP in neutrophils, granulocytes, and bronchial epithelium' (roflumilast); the cardiomyocyte '↑ cAMP → ↑ Ca2+ influx → ↑ ionotropy and chronotropy' + the vascular smooth muscle '↑ cAMP → MLCK inhibition → vasodilation → ↓ preload and afterload' (milrinone); 'In platelets: ↑ cAMP → inhibition of platelet aggregation' (cilostazol, dipyridamole)",
            sublabel:
              "The same ↑cAMP does four different things depending on the address it survives in: relaxes bronchial muscle (theophylline's bronchodilation — the same currency book 237's β2 row prints, raised one step downstream), quiets immune cells (roflumilast's anti-inflammatory lane), strengthens the heartbeat while unloading it (milrinone's two halves — the book's own 'ionotropy' spelling prints in the cell, carried verbatim), and blocks platelet aggregation (the pair's use — cilostazol a PDE-3 member per footnote a, dipyridamole nonspecific per footnote b).",
            variant: "process",
          },
          {
            id: "output",
            label: "RESULT — one mechanism becomes five clinical universes with their printed price lists: theophylline's 'Cardiotoxicity... neurotoxicity... abdominal pain', the PDE-5 four's 'hypotension in patients taking nitrates' + sildenafil-only 'cyanopia... via inhibition of PDE-6 (six) in retina', roflumilast's 'depression, anxiety, insomnia', milrinone's 'Tachycardia, ventricular arrhythmias, hypotension', and the pair's 'Nausea, headache, facial flushing, hypotension, abdominal pain'",
            sublabel:
              "Output — what the exam pulls from the mechanism: the isoform question (name → number → address), the currency question (cAMP camp vs cGMP camp), the convergence question (the nitrate interaction: two cGMP inputs, one vasodilated bed), the off-target question (sildenafil's PDE-6 '(six)'), and the taxonomy question (the two footnotes — cilostazol PDE-3-by-indication, dipyridamole nonspecific-plus-adenosine).",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "enzyme", label: "the signal persists only until its hydrolase clears it" },
          { from: "enzyme", to: "fork", label: "inhibit the hydrolase → the currency accumulates" },
          { from: "fork", to: "addresses", label: "the isoform number selects the address" },
          { from: "addresses", to: "output", label: "one mechanism = five uses + five printed price lists" },
        ],
      },
    },
    {
      id: "pde-isoform-clinical-use-sort",
      title:
        "The five-row sort: one printed table, four cAMP addresses, one cGMP lane, two footnotes — the inotrope (milrinone, cardiogenic shock), the anti-inflammatory (roflumilast, severe COPD), the engorgers (the PDE-5 four, ED/pulmonary hypertension/BPH-tadalafil-only), the rarely-used bronchodilator (theophylline), and the platelet pair (claudication, stroke/TIA, stress testing, stent restenosis)",
      context:
        "The block's own four-column table + the two footnotes (book 245), carried verbatim in the note's two table blocks. The patient-sort reading (which drug for which patient; which danger rides which row) is KYP's overlay on the printed rows; every type, mechanism, use, and adverse cell is the book's own print.",
      flow: {
        nodes: [
          {
            id: "input",
            label: "The printed frame: four columns — TYPE OF INHIBITOR / MECHANISM OF ACTION / CLINICAL USES / ADVERSE EFFECTS — five rows, two of them carrying superscript footnotes (Cilostazol^a, Dipyridamole^b) that resolve the taxonomy: cilostazol 'is a PDE-3 inhibitor, but due to its indications is categorized as a platelet inhibitor'; dipyridamole 'is a nonspecific PDE inhibitor' that 'also prevents adenosine reuptake by platelets → ↑ extracellular adenosine → ↑ vasodilation'",
            sublabel:
              "Input — the matrix the exam reads row by row. The KYP sort that follows reorders the rows by WHO is standing in front of you: the cardiogenic-shock patient (milrinone), the severe-COPD patient (roflumilast), the ED patient (the PDE-5 four — with the nitrate question attached), the claudicant (cilostazol), the stress-test candidate (dipyridamole) — and the two patients the rows endanger (the nitrate user, the depression-prone COPD patient).",
            variant: "input",
          },
          {
            id: "camp",
            label: "GROUP 1 — THE cAMP LANES: THE INOTROPE (milrinone, PDE-3): '↑ Ca2+ influx → ↑ ionotropy and chronotropy' + 'MLCK inhibition → vasodilation → ↓ preload and afterload' for 'Acute decompensated HF with cardiogenic shock (inotrope)', price 'Tachycardia, ventricular arrhythmias, hypotension' | THE ANTI-INFLAMMATORY (roflumilast, PDE-4): '↑ cAMP in neutrophils, granulocytes, and bronchial epithelium' for 'Severe COPD', price 'Abdominal pain, weight loss, depression, anxiety, insomnia' | THE BRONCHODILATOR (theophylline, nonspecific): '↓ cAMP hydrolysis → ↑ cAMP → bronchial smooth muscle relaxation → bronchodilation' for 'COPD/asthma (rarely used)', price 'Cardiotoxicity (eg, tachycardia, arrhythmia), neurotoxicity (eg, seizures, headache), abdominal pain' | THE PLATELET PAIR (cilostazol + dipyridamole): 'In platelets: ↑ cAMP → inhibition of platelet aggregation' for 'Intermittent claudication / Stroke or TIA prevention (with aspirin) / Cardiac stress testing (dipyridamole only, due to coronary vasodilation) / Prevention of coronary stent restenosis'",
            sublabel:
              "The four cAMP addresses. MILRINONE: the inotrope for the ICU — one isoform, two addresses (heart and vessels), and the arrhythmia price that makes it a drug of last resort rather than a chronic inotrope (the chronic-HF mortality job belongs to the β-blockers page behind, not here). ROFLUMILAST: the once-daily anti-inflammatory for severe COPD with frequent exacerbations — the neuropsychiatric price is boxed in its row. THEOPHYLLINE: the 'rarely used' rank is printed in the use cell itself — the nonspecific currency raises the heart's and the brain's cAMP with the bronchioles'. THE PAIR: cilostazol for the claudicant (the PDE-3 member filed by indication), dipyridamole for stroke/TIA prevention with aspirin, pharmacologic stress testing ('due to coronary vasodilation' — the adenosine mechanism of footnote b), and stent-restenosis prevention.",
            variant: "process",
          },
          {
            id: "cgmp",
            label: "GROUP 2 — THE cGMP LANE (PDE-5 alone): '↓ hydrolysis of cGMP → ↑ cGMP → ↑ smooth muscle relaxation by enhancing NO activity → pulmonary vasodilation and ↑ blood flow in corpus cavernosum fills the penis' — for 'Erectile dysfunction / Pulmonary hypertension / Benign prostatic hyperplasia (tadalafil only)' — with the price 'Facial flushing, headache, dyspepsia, hypotension in patients taking nitrates; “hot and sweaty,” then headache, heartburn, hypotension' + 'Sildenafil only: cyanopia (blue-tinted vision) via inhibition of PDE-6 (six) in retina'",
            sublabel:
              "The one-row camp. THE FOUR MEMBERS: sildenafil, vardenafil, tadalafil, avanafil (the roster the exam asks by name — and the tadalafil-only parenthetical on the BPH use is the fine print: the longer half-life that earns the once-daily BPH/PAH dosing is also the reason its nitrate separation is the longest, 48 hours — KYP-flagged: the page prints only the adverse cell 'hypotension in patients taking nitrates', never the timing rules). THE CONVERGENCE: nitrates feed the same cGMP pool from the NO side while PDE-5 inhibition blocks its clearance — the combination is the printed 'hypotension in patients taking nitrates'. THE OFF-TARGET: sildenafil inhibits 'PDE-6 (six) in retina' at higher doses — the book's own '(six)' parenthetical — producing cyanopia, the blue-tinted vision.",
            variant: "process",
          },
          {
            id: "output",
            label: "RESULT — the patient sort: cardiogenic shock → milrinone (the inotrope); severe COPD with exacerbations → roflumilast (counsel on mood, sleep, weight); ED → any of the four (sildenafil shortest nitrate separation, tadalafil the BPH/once-daily member); ED + angina on nitrates → the contraindication (the printed hypotension cell, the miniCase); intermittent claudication → cilostazol (the claudicant's drug — and the PDE-3 member filed by indication); stroke/TIA prevention with aspirin → dipyridamole; pharmacologic stress testing → dipyridamole (adenosine, footnote b); and the negatives — the nitrate user (never concurrent), the depression-prone COPD patient (roflumilast), the arrhythmia-prone heart (milrinone)",
            sublabel:
              "Output — the sort the exam actually runs: any stem that names a PDE inhibitor asks the isoform (3/4/5/nonspecific), the currency (cAMP vs cGMP), the address (heart, airway immune cell, bronchiole, platelet, cavernosum/pulmonary artery), or the convergence (the nitrate). The distractor lanes to sort: the β-blockers (the facing page — the receptor-side lever), the β2 agonists (the receptor-side teammates of theophylline), the nitrates themselves (the other half of the convergence), and the organic nitrates' cousins (the 'hot and sweaty' cell is the exam's own phrasing of the interaction's face).",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "camp", label: "the cAMP lanes — four addresses, one currency" },
          { from: "camp", to: "cgmp", label: "the cGMP lane — one row, four members, two fine prints" },
          { from: "cgmp", to: "output", label: "five rows + two footnotes = the exam surface" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "pde-inhibitor-map",
      title: "The PDE-inhibitor isoform-fork map (an original KYP visual)",
      caption:
        "An original KYP isoform-fork map conveying the phosphodiesterase-inhibitors block (book 245, the whole page, the LAST page of the Autonomic Drugs banner): THE MECHANISM STRIP (PDE catalyzes the hydrolysis of cAMP and/or cGMP → inhibit PDE → ↑ cAMP and/or ↑ cGMP; the cAMP camp vs the cGMP camp, the currency minted by book 237's printed chain 'GS protein | ATP | Cyclic AMP' through 'Adenylyl cyclase'); THE ISOFORM FORK (PDE-3 milrinone — the inotrope, two addresses; PDE-4 roflumilast — the airway-inflammation lane; PDE-5 the four-member roster — the cGMP lane, ED/pulmonary hypertension/BPH-tadalafil-only); THE NONSPECIFIC PAIR (theophylline 'COPD/asthma (rarely used)' and dipyridamole, the double blocker of footnote b); THE USE GRID (cardiogenic shock, severe COPD, ED, pulmonary hypertension, BPH-tadalafil-only, claudication, stroke/TIA, stress testing, stent restenosis); THE CAUTION STRIP ('hypotension in patients taking nitrates', sildenafil-only cyanopia via PDE-6 (six) in retina, milrinone's ventricular arrhythmias, roflumilast's depression/anxiety/insomnia, theophylline's cardiotoxicity + neurotoxicity); and THE BOUNDARY STRIP (the PH24/PH25 split pinned both ways, the banner-end finding, and the verified absences — four PDE-5 members, no PDE-1/PDE-2, no caffeine, no amrinone).",
      notice:
        "Census (pdfimages + text layer): the phosphodiesterase-inhibitors block is PURE TEXT with ZERO raster images on pdf 267 — COPYRIGHTED, never reproduced as artwork; this visual conveys the section header, the intro sentence, the five-row four-column class table, and the two footnotes as an ORIGINAL_KYP_ADAPTATION (every type, mechanism, use, and adverse cell is the book's own print, including the 'COPD/asthma (rarely used)' rank, the '(tadalafil only)' parenthetical, the '(dipyridamole only, due to coronary vasodilation)' clause, the '“hot and sweaty,”' quote, the book's own 'ionotropy' spelling, and its own '(six)' parenthetical; the camp split, the fork compression, and the patient sort are KYP's, flagged). KYP extensions flagged on the map: the ISOFORM-FORK frame (the rows, numbers, and footnotes are printed; the compression is KYP's), the CYCLIC-NUCLEOTIDE-CURRENCY frame (the camp split is KYP's; the currency rows print on book 237), and the NITRATE-SEPARATION protocol (NOT printed — the page prints only 'hypotension in patients taking nitrates' as an adverse cell; the 24-48h separation rules are KYP's, flagged). VERIFIED ABSENT from the 2026 table: PDE-1 and PDE-2 rows, any other methylxanthine (caffeine), and any other PDE-3 member (amrinone/inamrinone) — the PDE-5 roster prints exactly FOUR members (sildenafil, vardenafil, tadalafil, avanafil). EXCLUDED: the beta-blockers table on book 244 behind (the COMPLETED PH24 — only its selectivity subtable's final rows and footer pinned from behind as boundary markers), and the Ingested seafood toxins page on pdf 268 ahead (the NEW Toxicities banner, the PENDING next topics; this block does NOT extend there; verified — the Autonomic Drugs banner ends with this page).",
    },
    {
      kind: "table",
      title: "Book 245 — the phosphodiesterase-inhibitors class table, verbatim",
      intro:
        "The block's own five-row matrix, carried whole: every type, mechanism, use, and adverse cell is the book's own print. The MECHANISM column is the fork (cAMP at four addresses; cGMP at one); the CLINICAL USES column is where the exam drugs live; the ADVERSE EFFECTS column carries the printed price lists — including the nitrate token the contraindication stems are built on.",
      columns: [
        "TYPE OF INHIBITOR (book 245, verbatim)",
        "MECHANISM OF ACTION (book 245, verbatim)",
        "CLINICAL USES (book 245, verbatim)",
        "ADVERSE EFFECTS (book 245, verbatim)",
      ],
      rows: [
        [
          "Nonspecific PDE inhibitor — Theophylline",
          "↓ cAMP hydrolysis → ↑ cAMP → bronchial smooth muscle relaxation → bronchodilation",
          "COPD/asthma (rarely used)",
          "Cardiotoxicity (eg, tachycardia, arrhythmia), neurotoxicity (eg, seizures, headache), abdominal pain",
        ],
        [
          "PDE-5 inhibitors — Sildenafil, vardenafil, tadalafil, avanafil",
          "↓ hydrolysis of cGMP → ↑ cGMP → ↑ smooth muscle relaxation by enhancing NO activity → pulmonary vasodilation and ↑ blood flow in corpus cavernosum fills the penis",
          "Erectile dysfunction; Pulmonary hypertension; Benign prostatic hyperplasia (tadalafil only)",
          "Facial flushing, headache, dyspepsia, hypotension in patients taking nitrates; “hot and sweaty,” then headache, heartburn, hypotension. Sildenafil only: cyanopia (blue-tinted vision) via inhibition of PDE-6 (six) in retina",
        ],
        [
          "PDE-4 inhibitor — Roflumilast",
          "↑ cAMP in neutrophils, granulocytes, and bronchial epithelium",
          "Severe COPD",
          "Abdominal pain, weight loss, depression, anxiety, insomnia",
        ],
        [
          "PDE-3 inhibitor — Milrinone",
          "In cardiomyocytes: ↑ cAMP → ↑ Ca2+ influx → ↑ ionotropy and chronotropy. In vascular smooth muscle: ↑ cAMP → MLCK inhibition → vasodilation → ↓ preload and afterload",
          "Acute decompensated HF with cardiogenic shock (inotrope)",
          "Tachycardia, ventricular arrhythmias, hypotension",
        ],
        [
          "“Platelet inhibitors” — Cilostazol (a), Dipyridamole (b)",
          "In platelets: ↑ cAMP → inhibition of platelet aggregation",
          "Intermittent claudication; Stroke or TIA prevention (with aspirin); Cardiac stress testing (dipyridamole only, due to coronary vasodilation); Prevention of coronary stent restenosis",
          "Nausea, headache, facial flushing, hypotension, abdominal pain",
        ],
      ],
      caption:
        "Five rows, two currencies. The PDE-5 row is the exam's favorite (FOUR members with the '(tadalafil only)' fine print, the mechanism sentence that ends 'fills the penis', the nitrate token, and the sildenafil-only PDE-6 '(six)' line); the milrinone row carries the book's own 'ionotropy' spelling (inotropy) — an artifact carried verbatim, like the 'β3 -receptors' kerning of book 244; the platelet row is the taxonomy row (the quoted category name '\"Platelet inhibitors\"' is the book's own, and both footnotes resolve it); and the theophylline row is the rank row ('rarely used' prints inside the use cell). The nonspecific and PDE-3/PDE-4 rows are the cAMP camp; PDE-5 is the cGMP camp alone.",
    },
    {
      kind: "table",
      title: "Book 245 — the intro sentence + the two footnotes, verbatim",
      intro:
        "The block's principle and its taxonomy keys, carried whole. The intro sentence is the whole block in two lines (the enzyme, the hydrolysis, the currency, the isoform-specificity principle); the two footnotes are the resolution of the fifth row's category name — the printed answer to 'what exactly are cilostazol and dipyridamole?'.",
      columns: [
        "THE PRINTED NOTE (book 245, verbatim)",
        "WHAT IT CARRIES",
      ],
      rows: [
        [
          "'Phosphodiesterase (PDE) inhibitors inhibit PDE, which catalyzes the hydrolysis of cAMP and/or cGMP, and thereby increase cAMP and/or cGMP. These inhibitors have varying specificity for PDE isoforms and thus have different clinical uses.'",
          "THE PRINCIPLE — the whole block in two sentences: the enzyme (PDE), its reaction (hydrolysis of cAMP and/or cGMP), the drug's effect (block the hydrolase → the messengers accumulate), and the sorting principle (isoform specificity → different clinical uses). Every stem on this page resolves back to these two lines: the mechanism question, the currency question (cAMP and/or cGMP), and the isoform question.",
        ],
        [
          "a — 'Cilostazol is a PDE-3 inhibitor, but due to its indications is categorized as a platelet inhibitor together with dipyridamole.'",
          "THE CLOSTAZOL KEY — the taxonomy resolution of the fifth row's first member: cilostazol IS a PDE-3 inhibitor (milrinone's isoform, the cAMP camp) but is FILED under the platelet row because of its indications — the claudication/stroke-TIA uses. The exam's face: 'cilostazol's antiplatelet effect is mediated by ↑ cAMP in platelets' (PDE-3 inhibition at the platelet address — the same isoform milrinone takes to the cardiomyocyte) and 'which PDE isoform does cilostazol inhibit?' (PDE-3 — the answer the footnote prints).",
        ],
        [
          "b — 'Dipyridamole is a nonspecific PDE inhibitor, leading to inhibition of platelet aggregation. It also prevents adenosine reuptake by platelets → ↑ extracellular adenosine → ↑ vasodilation.'",
          "THE DIPYRIDAMOLE KEY — the double blocker: the second mechanism is the adenosine story — 'prevents adenosine reuptake by platelets → ↑ extracellular adenosine → ↑ vasodilation' — the printed basis of the stress-testing use ('Cardiac stress testing (dipyridamole only, due to coronary vasodilation)') and the printed reason dipyridamole has no isoform number: it is the OTHER nonspecific member, the theophylline of the platelet row. The exam's face: the pharmacologic stress test that dilates normal coronaries more than stenosed ones (coronary steal — the classic teaching the printed rationale hangs on, KYP-flagged where named).",
        ],
      ],
      caption:
        "Two footnotes, two resolutions: footnote a files cilostazol by indication (PDE-3 in the platelet row), footnote b files dipyridamole by mechanism (nonspecific + adenosine). Together they answer the fifth row's category question — the quoted '\"Platelet inhibitors\"' name is the book's own — and they are the reason the row's mechanism cell reads 'In platelets: ↑ cAMP → inhibition of platelet aggregation' for BOTH members despite their different isoform profiles.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem:
          "A 71-year-old man with ischemic cardiomyopathy presents with acute decompensated heart failure and cardiogenic shock — hypotension, cool extremities, narrow pulse pressure, and oliguria despite diuresis. The ICU starts an IV drug that raises intracellular cAMP in the cardiomyocyte (↑ Ca2+ influx) while simultaneously relaxing vascular smooth muscle (↓ preload and afterload). The pharmacology question asks what the drug is, which isoform it inhibits, and what its boxed danger is.",
        discriminator:
          "The printed row: 'PDE-3 inhibitor / Milrinone' — 'In cardiomyocytes: ↑ cAMP → ↑ Ca2+ influx → ↑ ionotropy and chronotropy' + 'In vascular smooth muscle: ↑ cAMP → MLCK inhibition → vasodilation → ↓ preload and afterload' | 'Acute decompensated HF with cardiogenic shock (inotrope)' — the one drug with TWO addresses in one row",
        concept:
          "Milrinone, the PDE-3 inhibitor — the inotrope-vasodilator for acute decompensated HF with cardiogenic shock: ↑ cAMP at the cardiomyocyte (inotropy, chronotropy) and at the vascular smooth muscle (MLCK inhibition → vasodilation → ↓ preload and afterload)",
        answer:
          "Milrinone — the printed row, both halves. The mechanism is the cAMP currency at two addresses: '↑ cAMP → ↑ Ca2+ influx → ↑ ionotropy and chronotropy' at the cardiomyocyte (the book's own 'ionotropy' spelling prints in the cell) and '↑ cAMP → MLCK inhibition → vasodilation → ↓ preload and afterload' at the vessels — an inotrope that also unloads. The use is printed as 'Acute decompensated HF with cardiogenic shock (inotrope)' — the temporary bridge, not a chronic inotrope (chronic positive inotropy is the opposite of the β-blockers' chronic mortality story on the page behind). The price is printed in full: 'Tachycardia, ventricular arrhythmias, hypotension' — the arrhythmia danger that makes this an ICU drug with continuous monitoring, and the reason the sort against dobutamine (the β1 agonist that raises the same cAMP at the receptor, from the sympathomimetics pages) is an isoform-vs-receptor question. The exam's follow-ups: why not a chronic inotrope (the arrhythmia price), which other drug shares the isoform (cilostazol — filed by indication under the platelet row, per footnote a), and what happens to preload and afterload (both fall — the MLCK half).",
      },
      {
        stem:
          "A 64-year-old man with erectile dysfunction and stable angina, on isosorbide dinitrate, takes one of his partner's tablets before dinner. An hour later he is flushed, diaphoretic, and headachy; standing makes him presyncopal. Blood pressure is 82/48 with a heart rate of 104, and the ECG shows sinus tachycardia without ischemic changes. The pharmacology question asks what happened, which isoform was involved, and what the rule is.",
        discriminator:
          "The printed cells: 'PDE-5 inhibitors / Sildenafil, vardenafil, tadalafil, avanafil' — '↓ hydrolysis of cGMP → ↑ cGMP → ↑ smooth muscle relaxation by enhancing NO activity' with the adverse cell 'hypotension in patients taking nitrates; “hot and sweaty,” then headache, heartburn, hypotension'",
        concept:
          "The convergence: PDE-5 inhibition blocks cGMP hydrolysis while the nitrate feeds the same pool from the NO side — two inputs, one vasodilated bed",
        answer:
          "Sildenafil (or any of the four) plus a nitrate — the printed interaction. The mechanism is convergence: the PDE-5 inhibitor holds the cGMP gate closed ('↓ hydrolysis of cGMP → ↑ cGMP → ↑ smooth muscle relaxation by enhancing NO activity') while the nitrate donor drives more cGMP synthesis (the NO pathway — the page's own token is 'enhancing NO activity'); the cumulative cGMP relaxes vascular smooth muscle beyond what either drug alone would do — 'hypotension in patients taking nitrates' is the printed cell, and '“hot and sweaty,” then headache, heartburn, hypotension' is its printed face. The RULE (KYP-flagged — the page prints the token, not the protocol): never concurrent; when both are needed, separate them — at least 24 hours after sildenafil or vardenafil, at least 48 hours after tadalafil (the longer half-life that earns the '(tadalafil only)' BPH use is the reason its separation is the longest); treat the interaction with supine positioning and fluids, adding vasopressors only if refractory. The exam's follow-ups: which member causes cyanopia (sildenafil only — 'via inhibition of PDE-6 (six) in retina', the book's own '(six)'), which member treats BPH (tadalafil only), and what the 'hot and sweaty' phrase describes (the interaction's prodrome, not a separate syndrome).",
      },
      {
        stem:
          "A 68-year-old smoker with calf pain on walking (intermittent claudication, ABI 0.6) is started on an oral drug for the claudication; a separate question set asks about a different patient scheduled for pharmacologic stress testing who cannot exercise. The pharmacology question asks which two drugs these are, what they share, and what distinguishes them.",
        discriminator:
          "The printed row: '\"Platelet inhibitors\" / Cilostazol^a / Dipyridamole^b' — 'In platelets: ↑ cAMP → inhibition of platelet aggregation' | 'Intermittent claudication / Stroke or TIA prevention (with aspirin) / Cardiac stress testing (dipyridamole only, due to coronary vasodilation) / Prevention of coronary stent restenosis' + the two footnotes (a: cilostazol IS a PDE-3 inhibitor filed by indication; b: dipyridamole is nonspecific and 'also prevents adenosine reuptake by platelets → ↑ extracellular adenosine → ↑ vasodilation')",
        concept:
          "The platelet pair — one mechanism cell ('↑ cAMP → inhibition of platelet aggregation'), two different isoform profiles, two different primary uses: cilostazol the claudicant's drug, dipyridamole the stress-test and stroke-prevention drug",
        answer:
          "Cilostazol for the claudicant; dipyridamole for the stress test — and the pair's taxonomy is the footnotes' job. CLOSTAZOL: 'a PDE-3 inhibitor, but due to its indications is categorized as a platelet inhibitor together with dipyridamole' — milrinone's isoform at the platelet address: ↑ cAMP in platelets → antiaggregation, and the claudication use (the PVD symptom the atherosclerosis chapters build). DIPYRIDAMOLE: 'a nonspecific PDE inhibitor' that 'also prevents adenosine reuptake by platelets → ↑ extracellular adenosine → ↑ vasodilation' — the adenosine story is the printed basis of 'Cardiac stress testing (dipyridamole only, due to coronary vasodilation)': the pharmacologic stress test that dilates normal coronary beds more than stenosed ones, producing the flow mismatch the imaging reads (coronary steal — the classic teaching; the page prints the rationale 'due to coronary vasodilation', the steal phrasing is KYP-flagged). The shared cell is '↑ cAMP → inhibition of platelet aggregation' — for both members despite the different isoform profiles. The exam's follow-ups: which member is contraindicated in heart failure (cilostazol — the PDE-3 concern; classic teaching, KYP-flagged), why dipyridamole has no isoform number (nonspecific — the theophylline of the platelet row), and what both do to platelets (the one printed mechanism cell).",
      },
    ],
    traps: [
      {
        a: "All PDE inhibitors raise the same second messenger — 'they all increase cAMP', so sildenafil's erection and milrinone's inotropy are the same mechanism at different organs, and a stem can be answered with either currency",
        b: "The page is TWO CAMPS (KYP frame; the rows are printed): the cAMP camp (PDE-3 milrinone, PDE-4 roflumilast, the nonspecifics theophylline and dipyridamole, and cilostazol the PDE-3 member filed by indication) vs the cGMP camp (PDE-5 alone — sildenafil, vardenafil, tadalafil, avanafil: '↓ hydrolysis of cGMP → ↑ cGMP → ↑ smooth muscle relaxation by enhancing NO activity')",
        whyConfused:
          "The intro sentence prints 'cAMP and/or cGMP' — the 'and/or' hides the fork; the rows name the isoforms but never the currency split; and the two nonspecific rows (theophylline, dipyridamole) sit on the cAMP side of the table while their neighbors mix camps",
        keyDifference:
          "The isoform number IS the currency: PDE-3, PDE-4, and the nonspecifics take the cAMP camp (four addresses: cardiomyocyte, airway immune cell, bronchiole, platelet); PDE-5 takes the cGMP camp alone. The exam's face: 'which second messenger increases in corpus cavernosum under sildenafil?' (cGMP — '↓ hydrolysis of cGMP → ↑ cGMP'); 'by what mechanism does milrinone increase contractility?' ('↑ cAMP → ↑ Ca2+ influx' — not cGMP); 'which of these drugs relaxes smooth muscle by enhancing NO activity?' (the PDE-5 four only). The camp split also explains the interaction: the nitrate converges with PDE-5 inhibition on the cGMP pool specifically — a nitrate would NOT converge with milrinone's cAMP the same way (the β-agonists/nitrates coexist in the ICU, KYP-flagged where the teaching goes beyond the page).",
        clue:
          "Any stem asking 'which second messenger' or pairing a PDE inhibitor with an organ is the camp sort: PDE-5 → cGMP → the penis and the pulmonary arteries; PDE-3/PDE-4/nonspecific → cAMP → the heart, the airway, the bronchiole, the platelet.",
      },
      {
        a: "Sildenafil is just another antihypertensive — it lowers blood pressure, so combining it with the patient's angina medications is expected and safe; and the 'hot and sweaty' cell is a minor cosmetic adverse effect like any flushing",
        b: "The nitrate combination is the printed contraindication-token: 'hypotension in patients taking nitrates; “hot and sweaty,” then headache, heartburn, hypotension' — the convergence of TWO cGMP inputs (the PDE-5 brake released + the NO donor feeding the pool) on one vasodilated bed; the nitrate is the ONE class the page warns against (the 24-48h separation rules are KYP's, flagged — the page prints the token, not the protocol)",
        whyConfused:
          "PDE-5 inhibitors ARE mild vasodilators with antihypertensive-ish adverse effects, so 'a drug that lowers BP plus a drug that lowers BP' sounds additive-but-benign; the '“hot and sweaty,”' phrase sounds like ordinary flushing; and nitrates are the angina patient's staple, so the combination looks routine on a medication list",
        keyDifference:
          "The convergence is pharmacologic, not merely additive: the nitrate donates NO → guanylyl cyclase drives cGMP synthesis while the PDE-5 inhibitor blocks its hydrolysis — the pool accumulates from both ends, and the vasodilation is disproportionate to either drug alone (KYP flag: the page prints 'enhancing NO activity' and 'hypotension in patients taking nitrates'; the NO→guanylyl cyclase step is not printed here). The exam's face: the ED patient on isosorbide dinitrate who presyncopes an hour after a dose — the mechanism question ('cumulative cGMP'), the rule question ('never concurrent; 24h sildenafil/vardenafil, 48h tadalafil'), and the follow-up that the separation differs by half-life (the same property that earns tadalafil the '(tadalafil only)' BPH use). The cyanopia distractor lives here too: sildenafil-only, 'via inhibition of PDE-6 (six) in retina' — a VISUAL adverse at an OFF-target isoform, not the hemodynamic mechanism.",
        clue:
          "Any stem pairing a PDE-5 inhibitor with a nitrate (isosorbide, nitroglycerin — including sublingual NTG for an ED patient's chest pain) is the convergence; the '“hot and sweaty,”' quote is the page's own phrasing of the interaction's face.",
      },
      {
        a: "Cilostazol and milrinone are different classes with different mechanisms — cilostazol is a 'platelet inhibitor' (so it must work on some platelet receptor) while milrinone is a PDE-3 inhibitor; the fifth row's category name is the mechanism",
        b: "The printed footnote a resolves it: 'Cilostazol is a PDE-3 inhibitor, but due to its indications is categorized as a platelet inhibitor together with dipyridamole' — SAME isoform as milrinone (PDE-3), SAME currency (cAMP), DIFFERENT address (the platelet instead of the cardiomyocyte); the quoted '\"Platelet inhibitors\"' is a filing category, not a mechanism class",
        whyConfused:
          "The row is printed under a quoted category name ('\"Platelet inhibitors\"') with its own mechanism cell ('In platelets: ↑ cAMP → inhibition of platelet aggregation'), so it reads like a separate family; the footnote that re-files it by isoform is small print; and the antiplatelet effect sounds receptor-mediated (like the P2Y antagonists of the clotting chapters, KYP-flagged where that comparison is drawn)",
        keyDifference:
          "One isoform, two addresses, two clinics: PDE-3 at the cardiomyocyte = milrinone (the inotrope for cardiogenic shock, the arrhythmia price); PDE-3 at the platelet = cilostazol (the antiaggregation effect, the claudication use). The exam's face: 'cilostazol's antiplatelet effect is mediated by which mechanism?' ('↑ cAMP in platelets → inhibition of platelet aggregation' — PDE-3 inhibition, the answer the footnote prints); 'which PDE inhibitor shares milrinone's isoform?' (cilostazol); and 'why does the table file cilostazol under the platelet row?' ('due to its indications' — the book's own words). Dipyridamole is the OTHER half of the trap: NO isoform number, because footnote b files it as the nonspecific member (the theophylline of the platelet row) with the adenosine-reuptake second mechanism.",
        clue:
          "Any cilostazol stem asking the mechanism or the class is the footnote-a resolution: PDE-3 (milrinone's isoform) at the platelet address — '↑ cAMP → inhibition of platelet aggregation'; and any option-pair offering cilostazol against milrinone as 'different classes' is the filing-vs-mechanism distinction.",
      },
      {
        a: "Theophylline and roflumilast are interchangeable COPD drugs — both 'raise cAMP in the lung', so either works for any COPD patient, and their adverse-effect lists are just class effects that can be swapped",
        b: "The two rows are different LANES: theophylline is the NONSPECIFIC row ('rarely used', printed in the use cell itself) whose currency raises the heart's and brain's cAMP with the bronchioles' ('Cardiotoxicity (eg, tachycardia, arrhythmia), neurotoxicity (eg, seizures, headache), abdominal pain'); roflumilast is the PDE-4 row ('Severe COPD' only) whose currency rises in the immune cells ('↑ cAMP in neutrophils, granulocytes, and bronchial epithelium') with the neuropsychiatric price ('Abdominal pain, weight loss, depression, anxiety, insomnia')",
        whyConfused:
          "Both rows sit in the cAMP camp, both are printed as COPD drugs, and the bronchodilation token appears in both stories (theophylline's mechanism cell prints it; roflumilast's does not — its cell is the immune-cell address); the 'rarely used' rank is small print; and the adverse lists share 'abdominal pain', which invites the swap",
        keyDifference:
          "The ADDRESS decides the price: the nonspecific currency (theophylline) is systemic — heart and brain ride along with the bronchiole ('cardiotoxicity', 'neurotoxicity'), which is why the use cell prints 'COPD/asthma (rarely used)' (the era of routine theophylline ended when the isoform-selective drugs arrived — the rank is the book's own); the PDE-4 currency (roflumilast) is the anti-inflammatory lane for 'Severe COPD' with frequent exacerbations, and its price is psychiatric and metabolic ('depression, anxiety, insomnia', 'weight loss') — the mood warning that makes roflumilast a drug to counsel on, not just to prescribe. The exam's face: 'a COPD patient started on a once-daily anti-inflammatory returns with insomnia and low mood' → roflumilast; 'an asthmatic on a bronchodilator develops tachycardia and a seizure' → theophylline toxicity (the narrow-therapeutic-index monitoring story is KYP-flagged — not printed on this page).",
        clue:
          "Any COPD stem pairing these two is the lane sort: 'rarely used' + cardiotoxicity/neurotoxicity → theophylline (nonspecific); 'Severe COPD' + depression/anxiety/insomnia/weight loss → roflumilast (PDE-4); and the address line ('neutrophils, granulocytes, and bronchial epithelium' vs 'bronchial smooth muscle') is the mechanism tell.",
      },
    ],
    pivots: [
      {
        lookAlike: "Any 'which of the following drugs / best treatment' stem that names or implies a PDE inhibitor — the cardiogenic-shock patient needing an inotrope, the severe-COPD patient with exacerbations, the ED patient (with or without angina on nitrates), the claudicant, the stroke/TIA-prevention patient, the stress-test candidate, the stent-restenosis-prevention question — asking the drug, the isoform, or the mechanism",
        differentiator:
          "The ISOFORM FORK (KYP compression of the printed table): first run the NUMBER — PDE-3 (milrinone the inotrope; cilostazol the platelet-filed member, per footnote a), PDE-4 (roflumilast, 'Severe COPD'), PDE-5 (the four: sildenafil, vardenafil, tadalafil, avanafil), NO number (the nonspecifics: theophylline 'rarely used'; dipyridamole, the double blocker of footnote b); then run the CURRENCY — cAMP camp (PDE-3/PDE-4/nonspecific, four addresses) vs cGMP camp (PDE-5 alone); then run the ADDRESS — cardiomyocyte + vascular smooth muscle, airway immune cells, bronchial smooth muscle, platelet, corpus cavernosum + pulmonary vasculature",
        correctPath:
          "(1) Read the PATIENT before the drug list: cardiogenic shock → milrinone; severe COPD with exacerbations → roflumilast (counsel on mood, sleep, weight); ED without nitrate conflict → any of the four (the '(tadalafil only)' member if BPH coexists); ED + nitrates → the contraindication (the printed 'hypotension in patients taking nitrates' cell — never concurrent; the separation protocol is KYP-flagged); intermittent claudication → cilostazol; stroke/TIA prevention with aspirin → dipyridamole (± aspirin); pharmacologic stress testing → dipyridamole (adenosine, footnote b); stent-restenosis prevention → the pair. (2) Confirm the mechanism by the printed cell: '↑ cAMP → ↑ Ca2+ influx' (milrinone's cardiomyocyte), 'MLCK inhibition → vasodilation' (milrinone's vessels), '↑ cAMP in neutrophils, granulocytes, and bronchial epithelium' (roflumilast), '↓ hydrolysis of cGMP → ↑ cGMP → ↑ smooth muscle relaxation by enhancing NO activity' (the PDE-5 four), 'In platelets: ↑ cAMP → inhibition of platelet aggregation' (the pair). (3) Sort the distractors by their own lanes: the β-blockers (the page behind — the receptor-side lever on the same cAMP), the β2 agonists (the receptor-side teammates of theophylline, from the sympathomimetics pages), the nitrates (the other half of the convergence), dobutamine/dopamine (the β1 agonists that raise cAMP at the receptor — isoform-vs-receptor), and the antiplatelets of the clotting chapters (P2Y, COX — different currency, KYP-flagged where compared). (4) Carry the adverse half with the choice: 'Tachycardia, ventricular arrhythmias' (milrinone), 'depression, anxiety, insomnia' (roflumilast), '“hot and sweaty,”... hypotension' + cyanopia-sildenafil-only (the PDE-5 four), 'Cardiotoxicity... neurotoxicity' (theophylline), 'Nausea, headache, facial flushing' (the pair).",
      },
      {
        lookAlike: "Any 'adverse effect / mechanism of the observed effect / next step' stem on a patient taking a PDE inhibitor — the ED patient on nitrates who presyncopes, the patient who reports everything looks blue, the COPD patient with new insomnia and low mood, the shocked patient who develops a run of ventricular tachycardia on an inotrope, the asthmatic on a bronchodilator with tachycardia and a seizure — asking the recognition, the mechanism, or the management",
        differentiator:
          "The caution set sorts by DRUG and SYSTEM: the VASCULAR picture ('hypotension in patients taking nitrates; “hot and sweaty,” then headache, heartburn, hypotension' — the PDE-5/nitrate convergence), the VISUAL picture (cyanopia, 'blue-tinted vision', sildenafil only, 'via inhibition of PDE-6 (six) in retina' — the off-target isoform), the PSYCHIATRIC-METABOLIC picture ('Abdominal pain, weight loss, depression, anxiety, insomnia' — roflumilast), the CARDIAC picture ('Tachycardia, ventricular arrhythmias, hypotension' — milrinone), the SYSTEMIC picture ('Cardiotoxicity (eg, tachycardia, arrhythmia), neurotoxicity (eg, seizures, headache), abdominal pain' — theophylline), and the PLATELET-ROW picture ('Nausea, headache, facial flushing, hypotension, abdominal pain' — the pair)",
        correctPath:
          "(1) Establish WHICH drug and WHEN: the nitrate presyncope is an hour-scale drug interaction (the convergence); the cyanopia is dose-related and sildenafil-only (the off-target PDE-6); the roflumilast mood change is weeks-scale (the psychiatric price); the milrinone arrhythmia is on-infusion (the ICU price); the theophylline seizure is the neurotoxicity of the systemic currency. (2) The vascular picture is mechanism-diagnosed: two cGMP inputs, one bed — manage by stopping the inputs (no more nitrate now, no PDE-5 inhibitor until the separation elapses: 24h sildenafil/vardenafil, 48h tadalafil, KYP-flagged), supine positioning, fluids, vasopressors only if refractory; the trap is treating it as anaphylaxis or as MI (the ECG and the timing sort it). (3) The visual picture is isoform-diagnosed: PDE-6 is the retinal cousin of PDE-5 — the off-target at high doses; reassure, lower the dose or switch members (the cyanopia is sildenafil-only in the printed cell). (4) The psychiatric picture is counseled at prescribing: roflumilast for 'Severe COPD' comes with the mood/sleep/weight warning — weigh the exacerbation benefit against it (KYP-flagged where the suicidality monitoring language is used). (5) The cardiac and systemic pictures are monitored: milrinone in the ICU (continuous telemetry — the ventricular-arrhythmia price), theophylline rarely (the 'rarely used' rank; the level-monitoring story is KYP-flagged, not printed).",
      },
    ],
    miniCase: {
      vignette:
        "A 63-year-old man with coronary artery disease and stable angina, on aspirin, atorvastatin, metoprolol, and isosorbide dinitrate 40 mg twice daily, was given sildenafil by his primary care physician for erectile dysfunction, with instructions to take it as needed. He takes a tablet at 6 pm after dinner; his evening isosorbide dose follows at 9 pm, as it has for years. By 9:30 pm he is flushed and diaphoretic, with a pounding frontal headache and heartburn; when he stands to get water the room grays and he sits back down. His wife calls the on-call service: blood pressure is 78/46 mm Hg, heart rate 112/min and regular, respirations 20/min, oxygen saturation 97% on room air. He is fully oriented, denies chest pain, and describes the room lights as 'a little warm in color.' The ECG brought to the phone shows sinus tachycardia with no ST changes. The physician is asked what happened and what to advise.",
      question:
        "What is the mechanism of his hypotension, and what is the safest plan for his angina treatment and his erectile dysfunction treatment from this point forward?",
      options: [
        {
          label:
            "Cumulative cGMP from two converging inputs — the PDE-5 inhibitor blocks the hydrolysis of cGMP ('↓ hydrolysis of cGMP → ↑ cGMP → ↑ smooth muscle relaxation by enhancing NO activity', the printed mechanism) while the nitrate donates NO that drives more cGMP synthesis in the same vascular smooth muscle: the pool accumulates from both ends, and the cumulative cGMP relaxes the vascular bed beyond what either drug alone produces — the printed adverse cell 'hypotension in patients taking nitrates; “hot and sweaty,” then headache, heartburn, hypotension'. Plan: tonight, supine positioning and oral fluids with close observation (vasopressors only if refractory); no more nitrates until the sildenafil has cleared, and thereafter never concurrent — separate nitrate doses from PDE-5 doses by at least 24 hours (sildenafil, vardenafil) or 48 hours (tadalafil), and if the angina requires uninterrupted nitrates, treat the erectile dysfunction by another route entirely.",
          text: "Sildenafil-nitrate convergence on the cGMP pool; separate the drugs by 24-48 hours, never concurrent.",
          correct: true,
          why:
            "Every printed cell points here. THE ROW: 'PDE-5 inhibitors / Sildenafil, vardenafil, tadalafil, avanafil' — '↓ hydrolysis of cGMP → ↑ cGMP → ↑ smooth muscle relaxation by enhancing NO activity'. THE CONVERGENCE: the page's own mechanism sentence names the NO link ('enhancing NO activity'), and the adverse cell names the interaction ('hypotension in patients taking nitrates') with its printed face ('“hot and sweaty,” then headache, heartburn, hypotension') — which is this patient's evening verbatim: flushed, diaphoretic (hot and sweaty), headache, heartburn, presyncope, 78/46. THE TIMING: the sildenafil at 6 pm and the nitrate at 9 pm — three hours apart, far inside any safe window (KYP flag: the page prints the token, not the protocol; the 24h/48h rules by half-life are the flagged overlay, and the same long half-life is what earns tadalafil its '(tadalafil only)' BPH use). THE MECHANISM-DIFFERENTIALS: fully oriented with no chest pain and no ST changes (not an MI); no urticaria, angioedema, or bronchospasm, and a fast regular pulse (not anaphylaxis — which would also be expected to resist fluids less predictably); 'a little warm in color' is the cyanopia tail (sildenafil's off-target 'PDE-6 (six) in retina' — a visual symptom, not the hemodynamic mechanism). THE PLAN: the interaction is treated by withdrawing the inputs and supporting the pressure — positioning, fluids, observation; the vasopressor question only if refractory (KYP-flagged where the escalation language is used). The forward rule: the separation by half-life — sildenafil and vardenafil at least 24 hours from any nitrate, tadalafil at least 48 — and if the angina needs standing nitrates, the erectile dysfunction gets a non-PDE-5 route (the alternatives are outside this page's print, KYP-flagged).",
        },
        {
          label:
            "An IgE-mediated allergic reaction to sildenafil — the flush, the diaphoresis, and the hypotension are mast-cell mediator release, and the timing (three hours after the first dose) fits drug allergy; plan: epinephrine, antihistamines, corticosteroids, and permanent avoidance of the class with allergy documentation.",
          text: "IgE-mediated sildenafil allergy; epinephrine and allergy documentation.",
          why:
            "The wrong-mechanism distractor: anaphylaxis is real and produces flushing and hypotension, but the stem forecloses it — the patient is fully oriented with a regular fast pulse, no urticaria, no angioedema, no bronchospasm, and oxygen saturation of 97%; the blood pressure settled with the drug interaction's signature (postural presyncope between two vasodilating inputs, the printed '“hot and sweaty,” then headache, heartburn, hypotension' cell) rather than the sudden systemic collapse of mediator release. The label matters: calling this an allergy bars the entire class forever, including the properly separated dosing that would have been safe — the pharmacologic reading keeps the drug available once the nitrate is timed around it. The distractor tests whether the examinee reaches for the flashy mechanism over the printed one, and the tell is in the stem: the nitrate at 9 pm is the second input (the convergence), which an allergy story cannot explain.",
        },
        {
          label:
            "An acute coronary syndrome — the flushed diaphoresis with hypotension is the classic presentation of myocardial ischemia in an angina patient; the 'warm-colored lights' report is the cyanopia of retinal ischemia; plan: aspirin, sublingual nitroglycerin now, and activation of the cath-lab pathway.",
          text: "Acute coronary syndrome with ongoing ischemia; nitrates and cath-lab activation.",
          why:
            "The dangerous distractor — and the one the exam loves: diaphoresis and hypotension in a coronary patient do sound like ischemia, and the word 'diaphoretic' is borrowed from the MI script. But the stem forecloses it: he DENIES chest pain, the ECG shows sinus tachycardia with no ST changes, and the sequence began after a deliberate drug pairing (sildenafil at 6, nitrate at 9). The management clause is the harm: MORE nitroglycerin now is the exact input the convergence is made of — the printed cell 'hypotension in patients taking nitrates' is the warning, and giving the second nitrate on top of a PDE-5 inhibitor deepens the vasodilation the treatment is meant to reverse. The cyanopia misattribution is the second error: 'a little warm in color' is sildenafil's off-target PDE-6 effect ('cyanopia (blue-tinted vision) via inhibition of PDE-6 (six) in retina' — a printed, dose-related visual symptom), not retinal ischemia. The distractor tests whether the examinee can tell the two 'hot and sweaty' stories apart: the interaction's prodrome (printed on this page) versus the MI's (outside it, KYP-flagged) — and the ECG is the sorting test.",
        },
        {
          label:
            "Excess β-blockade — the metoprolol and the new drug are interacting at the β1 receptor: sildenafil potentiated the β-blockade, the bradycardic hypotension is the expected result, and the tachycardia is compensatory; plan: hold the metoprolol, and avoid β-blockers in patients on PDE-5 inhibitors.",
          text: "Metoprolol-sildenafil interaction at the β1 receptor; hold the β-blocker.",
          why:
            "The wrong-page distractor: it imports the facing page's currency (β-blockade, the β1 receptor) into this page's drug — but sildenafil has no β-receptor activity at all, and the two drugs are the two levers on the same second messenger from OPPOSITE directions (β-blockade lowers cAMP at the receptor; PDE-5 inhibition raises cGMP at the hydrolase — different receptors, different currencies, different messengers). The stem's own numbers argue against it: a heart rate of 112 is not the bradycardic picture of β-blockade (the β-blockers page's caution is rates in the 30s-40s, syncope, AV block), and holding the metoprolol would expose the angina patient to adrenergic surge — the opposite of his long-term protection. The distractor tests whether the examinee knows WHICH page a given mechanism lives on: the β-blockers' adverse row (bradycardia, AV block) belongs to book 244; the nitrate interaction belongs to this page — and the two may share a patient (this one, on metoprolol) without sharing a mechanism.",
        },
        {
          label:
            "PDE-3 cross-inhibition in the myocardium — sildenafil at this dose also inhibits PDE-3, so the cAMP-driven inotropy and chronotropy overdrove the heart, and the vasodilation is the MLCK-inhibition half of the milrinone mechanism; plan: stop the sildenafil, and in future choose a more selective PDE-5 inhibitor.",
          text: "Sildenafil cross-inhibiting PDE-3 in the myocardium; milrinone's mechanism by another name.",
          why:
            "The wrong-isoform distractor: it takes milrinone's printed row ('In cardiomyocytes: ↑ cAMP → ↑ Ca2+ influx → ↑ ionotropy and chronotropy... In vascular smooth muscle: ↑ cAMP → MLCK inhibition → vasodilation') and pastes it onto sildenafil — but sildenafil is the ISOFORM-SELECTIVE member of the page: the intro sentence's whole point is that 'These inhibitors have varying specificity for PDE isoforms and thus have different clinical uses'. The selectivity is what makes the drug safe enough for outpatient erectile dysfunction: at therapeutic doses sildenafil's off-target is PDE-6 (the retina — hence the cyanopia), NOT PDE-3 (the heart); if it cross-inhibited PDE-3 at therapeutic doses, every user would carry milrinone's 'Tachycardia, ventricular arrhythmias' price. The stem's pulse of 112 is sinus tachycardia — the baroreflex response to vasodilation, not an inotrope-driven arrhythmia. The distractor tests the page's central principle: the isoform number IS the clinical use AND the safety — and the one real cross-inhibition the exam asks about (PDE-6, 'six', retina) is printed two cells away from the mechanism this distractor misattributes.",
        },
      ],
      reasoning:
        "The vignette is the PDE-5 ROW'S NITRATE CELL presented as a patient — the ED patient, the standing nitrate, the three-hour pairing, the flushed diaphoresis, and the presyncopal 78/46; the 'warm-colored lights' plants the cyanopia distractor in the stem, and the metoprolol plants the wrong-page distractor. (1) THE ROW — sildenafil is the printed member of the PDE-5 four: '↓ hydrolysis of cGMP → ↑ cGMP → ↑ smooth muscle relaxation by enhancing NO activity'. (2) THE CONVERGENCE — the mechanism sentence's own NO link is the half of the interaction the nitrate supplies: the donor drives cGMP synthesis while the inhibitor blocks its hydrolysis; the pool accumulates from both ends and the vascular bed relaxes out of proportion to either drug alone — the printed cell 'hypotension in patients taking nitrates' with its printed face '“hot and sweaty,” then headache, heartburn, hypotension'. (3) THE DIFFERENTIAL AUTOPSIES — anaphylaxis (no urticaria, angioedema, or bronchospasm; oriented, 97% saturated, regular pulse; the pharmacologic sequence fits every feature), ACS (no chest pain, no ST changes; and the management clause — more nitrate — is the exact input the convergence feeds on), β-blockade (the wrong page: sildenafil has no β-receptor activity, and 112/min is the baroreflex, not the bradycardic picture of book 244), PDE-3 cross-inhibition (the wrong isoform: the intro sentence's 'varying specificity for PDE isoforms' is the principle; the one real off-target is PDE-6 '(six)' in the retina — a visual symptom, printed two cells from the mechanism this distractor misattributes). (4) THE PLAN — tonight: withdraw the inputs (no further nitrate until the sildenafil clears), supine positioning, fluids, observation, vasopressors only if refractory (KYP-flagged where the escalation language is used); forward: never concurrent — at least 24 hours between sildenafil or vardenafil and any nitrate, at least 48 for tadalafil (the half-life that earns tadalafil the '(tadalafil only)' BPH use is the reason its window is the longest; KYP flag: the page prints the token, not the protocol) — and if the angina requires uninterrupted nitrates, the erectile dysfunction is treated by another route entirely (outside this page's print, flagged). (5) THE FORWARD RULE — any ED patient gets asked about nitrates before the prescription leaves the room, and any angina patient on nitrates who asks about ED gets the separation rules — the discriminator to carry: on this page the ISOFORM owns the SAFETY (PDE-5's selectivity is what makes an outpatient erection drug possible; the one cross-inhibition the exam names is PDE-6, 'six', the retina), and the CONVERGENCE owns the danger (two cGMP inputs, one bed).",
    },
  },
  mnemonics: [
    {
      code: "PDE-6 (SIX) IN RETINA (the book's own printed parenthetical): 'Sildenafil only: cyanopia (blue-tinted vision) via inhibition of PDE-6 (six) in retina' — the off-target isoform that gives sildenafil its visual signature",
      meaning:
        "The '(six)' parenthetical is the book's own memory hook — the publisher prints the number-spelling link itself (PDE-6, six, the retina). KYP adds the pairing that completes it: 5 for the penis, 6 for the sight — the two isoforms one number apart, the reason the most selective member of the page still has an off-target, and the reason the visual adverse is SILDENAFIL ONLY (the other three spare the retina at therapeutic doses).",
      memorizes: "Sildenafil's off-target: PDE-6 (six) in the retina → cyanopia (blue-tinted vision) — and the isoform pairing 5/6 (cavernosum/retina)",
      whenToUse:
        "Any stem pairing a PDE-5 inhibitor with a visual complaint ('everything looks blue', 'a warm tint to the lights') — the answer is sildenafil's PDE-6 cross-inhibition; any 'which PDE isoform is off-targeted by sildenafil' question; and any distractor that attributes the cyanopia to tadalafil, vardenafil, or avanafil (the printed cell is sildenafil-only).",
      clinical:
        "The counseling script: the blue tint is dose-related, benign, and reversible — lower the dose or switch members; and the pairing teaches the selectivity principle the page is built on ('varying specificity for PDE isoforms'): selective enough for the penis, not selective enough for the retina at higher doses. The exam's version: 'cyanopia via inhibition of PDE-6 (six) in retina' → sildenafil, by the book's own parenthetical.",
    },
    {
      code: "3-4-5: HEART–AIRWAY–ERECTION (KYP): PDE-3 the failing pump (milrinone, 'Acute decompensated HF with cardiogenic shock (inotrope)' + cilostazol the platelet-filed member), PDE-4 the inflamed airway (roflumilast, 'Severe COPD'), PDE-5 the engorged vessels (sildenafil, vardenafil, tadalafil, avanafil — the penis and the pulmonary arteries)",
      meaning:
        "The fork compression of the printed table: three numbered lanes, one clinical universe each. The numbers are printed; the heart-airway-erection reading is KYP's — and it carries the fine print with it: PDE-3 is the TWO-address lane (the cardiomyocyte AND the vascular smooth muscle — the inotrope that unloads; plus the platelet address via cilostazol, filed by indication per footnote a), PDE-4 is the immune-cell lane ('↑ cAMP in neutrophils, granulocytes, and bronchial epithelium' — the anti-inflammatory, not the bronchodilator), and PDE-5 is the cGMP lane ('↓ hydrolysis of cGMP → ↑ cGMP' — the only camp that is not cAMP).",
      memorizes: "The three numbered isoform lanes with their drugs, addresses, and uses: PDE-3 (milrinone + cilostazol — heart and platelet), PDE-4 (roflumilast — severe COPD), PDE-5 (the four members — ED, pulmonary hypertension, BPH tadalafil-only)",
      whenToUse:
        "Any 'which PDE isoform' question in either direction (drug → isoform, isoform → drugs); any stem naming milrinone, roflumilast, sildenafil/vardenafil/tadalafil/avanafil, or cilostazol asking the mechanism or the use; and any option-pair that swaps members across lanes (roflumilast for ED, sildenafil for cardiogenic shock — the sort this mnemonic runs).",
      clinical:
        "The lanes are the prescribing map: the ICU lane (milrinone, telemetry for the 'Tachycardia, ventricular arrhythmias' price), the pulmonology lane (roflumilast with the mood/sleep/weight counseling), the urology-and-PAH lane (the four, with the nitrate question asked first), and the vascular lane (cilostazol for the claudicant). The nonspecific pair sits OUTSIDE the numbers (theophylline 'rarely used'; dipyridamole the double blocker) — the two exceptions every fork question hides among the options.",
    },
    {
      code: "cAMP ACTS, cGMP RELAXES (KYP): the cAMP camp works at four addresses — the cardiomyocyte ('↑ Ca2+ influx → ↑ ionotropy'), the airway immune cells ('neutrophils, granulocytes, and bronchial epithelium'), the bronchial smooth muscle ('bronchial smooth muscle relaxation → bronchodilation'), and the platelet ('inhibition of platelet aggregation'); the cGMP camp relaxes one tissue set — '↑ cGMP → ↑ smooth muscle relaxation by enhancing NO activity' at the corpus cavernosum and the pulmonary vasculature",
      meaning:
        "The currency split of the printed rows (KYP frame; the currency itself prints on book 237 — 'GS protein', 'ATP', 'Cyclic AMP', 'Adenylyl cyclase'): every cAMP row on the page ACTS on a working cell (heart muscle, immune cells, bronchial muscle, platelets — the messengers of function), and the one cGMP row RELAXES a smooth-muscle bed (the penis and the pulmonary arteries — the messengers of engorgement). The two nonspecifics and the platelet pair ride the cAMP side; the PDE-5 four ride the cGMP side alone.",
      memorizes: "Which drugs raise which second messenger: cAMP — milrinone, roflumilast, theophylline, cilostazol, dipyridamole (the cAMP camp); cGMP — sildenafil, vardenafil, tadalafil, avanafil (the cGMP camp, PDE-5 alone)",
      whenToUse:
        "Any 'which second messenger' question; any mechanism stem that names the currency ('increases cAMP in...' vs 'increases cGMP in...'); the nitrate-interaction question (the convergence is cGMP-specific — the reason nitrates converge with PDE-5 inhibition and not with milrinone's cAMP); and the cross-page question the exam builds from the facing pages (β-blockade lowers cAMP at the receptor; PDE inhibition raises it at the hydrolase — the two levers, one currency).",
      clinical:
        "The camp split is the safety logic of the page: the cAMP camp's prices are the prices of working cells pushed too far (arrhythmia, mood change, seizure, platelet-line nausea), and the cGMP camp's price is the price of a relaxed bed pushed too far (hypotension — '“hot and sweaty,” then headache, heartburn, hypotension'). The one interaction the page prints lives entirely inside the cGMP camp — the convergence — which is why the nitrate question belongs to the urology lane and not the ICU lane.",
    },
    {
      code: "DIPYRIDAMOLE KEEPS ADENOSINE AT THE DOOR (KYP) + THEOPHYLLINE, THE RARE BIRD (the book's own 'rarely used' rank): the two rows with NO isoform number — dipyridamole, 'a nonspecific PDE inhibitor' that 'also prevents adenosine reuptake by platelets → ↑ extracellular adenosine → ↑ vasodilation' (footnote b, the stress-test drug), and theophylline, the nonspecific bronchodilator whose currency raises the heart's and brain's cAMP with the bronchioles'",
      meaning:
        "The nonspecific pair, compressed: BOTH are printed without isoform numbers because both lack the specificity the numbered lanes have — dipyridamole is the platelet row's nonspecific member (the theophylline of that row), and its second mechanism is the printed adenosine story: 'prevents adenosine reuptake by platelets → ↑ extracellular adenosine → ↑ vasodilation' — the basis of the stress-testing use ('dipyridamole only, due to coronary vasodilation'). Theophylline is the airway's nonspecific member, ranked by the book's own use cell ('COPD/asthma (rarely used)') — the rank is the print, not an editorial (KYP adds the reading: the era ended when the isoform-selective drugs arrived; the level-monitoring story is flagged, not printed).",
      memorizes: "The two nonspecific PDE inhibitors and their signatures: dipyridamole (nonspecific + adenosine-reuptake blockade → the stress test; stroke/TIA prevention with aspirin) and theophylline (the rarely-used bronchodilator; cardiotoxicity + neurotoxicity)",
      whenToUse:
        "Any stem about pharmacologic stress testing (the patient who cannot exercise — the answer is dipyridamole, and the mechanism the exam quotes is the adenosine one, '↑ extracellular adenosine → ↑ vasodilation'); any stem pairing a bronchodilator with tachycardia and a seizure (theophylline's systemic price); and any 'which of these is NOT isoform-selective' question (the two names without numbers).",
      clinical:
        "The pair's clinics: the stress-test lane (dipyridamole — the coronary-vasodilation use the printed rationale names; the coronary-steal phrasing is the classic teaching, KYP-flagged) and the rarely-used airway lane (theophylline — the drug the rank retired; when it is used, the toxicity screen is the cardiotoxicity/neurotoxicity pair the row prints). The exam's version: 'also prevents adenosine reuptake by platelets' → dipyridamole, by the book's own footnote b.",
    },
  ],
  rapidReview: {
    s30: [
      "'Phosphodiesterase inhibitors' — the class-table block, the WHOLE of book 245 (pdf 267), the LAST page under the standing PHARMACOLOGY—AUTONOMIC DRUGS banner (the banner ends here: pdf 268 opens PHARMACOLOGY—TOXICITIES AND ADVERSE EFFECTS with Ingested seafood toxins); the page behind (book 244) is the completed PH24 beta-blockers page — sourcePages = [267] only.",
      "The intro sentence, verbatim: 'Phosphodiesterase (PDE) inhibitors inhibit PDE, which catalyzes the hydrolysis of cAMP and/or cGMP, and thereby increase cAMP and/or cGMP. These inhibitors have varying specificity for PDE isoforms and thus have different clinical uses.'",
      "The table frame: four printed column headers — TYPE OF INHIBITOR / MECHANISM OF ACTION / CLINICAL USES / ADVERSE EFFECTS — five rows, two of them carrying superscript footnotes (Cilostazol^a, Dipyridamole^b).",
      "Row 1, verbatim: 'Nonspecific PDE inhibitor / Theophylline' — '↓ cAMP hydrolysis → ↑ cAMP → bronchial smooth muscle relaxation → bronchodilation' | 'COPD/asthma (rarely used)' | 'Cardiotoxicity (eg, tachycardia, arrhythmia), neurotoxicity (eg, seizures, headache), abdominal pain'.",
      "Row 2, verbatim: 'PDE-5 inhibitors / Sildenafil, vardenafil, tadalafil, avanafil' — '↓ hydrolysis of cGMP → ↑ cGMP → ↑ smooth muscle relaxation by enhancing NO activity → pulmonary vasodilation and ↑ blood flow in corpus cavernosum fills the penis' | 'Erectile dysfunction / Pulmonary hypertension / Benign prostatic hyperplasia (tadalafil only)' | 'Facial flushing, headache, dyspepsia, hypotension in patients taking nitrates; “hot and sweaty,” then headache, heartburn, hypotension' + 'Sildenafil only: cyanopia (blue-tinted vision) via inhibition of PDE-6 (six) in retina'.",
      "Row 3, verbatim: 'PDE-4 inhibitor / Roflumilast' — '↑ cAMP in neutrophils, granulocytes, and bronchial epithelium' | 'Severe COPD' | 'Abdominal pain, weight loss, depression, anxiety, insomnia'.",
      "Row 4, verbatim: 'PDE-3 inhibitor / Milrinone' — 'In cardiomyocytes: ↑ cAMP → ↑ Ca2+ influx → ↑ ionotropy and chronotropy / In vascular smooth muscle: ↑ cAMP → MLCK inhibition → vasodilation → ↓ preload and afterload' | 'Acute decompensated HF with cardiogenic shock (inotrope)' | 'Tachycardia, ventricular arrhythmias, hypotension' (the book's own 'ionotropy' spelling prints in the cell — carried verbatim).",
      "Row 5, verbatim: '\"Platelet inhibitors\" / Cilostazol^a / Dipyridamole^b' — 'In platelets: ↑ cAMP → inhibition of platelet aggregation' | 'Intermittent claudication / Stroke or TIA prevention (with aspirin) / Cardiac stress testing (dipyridamole only, due to coronary vasodilation) / Prevention of coronary stent restenosis' | 'Nausea, headache, facial flushing, hypotension, abdominal pain'.",
      "The two footnotes, verbatim: a 'Cilostazol is a PDE-3 inhibitor, but due to its indications is categorized as a platelet inhibitor together with dipyridamole.'; b 'Dipyridamole is a nonspecific PDE inhibitor, leading to inhibition of platelet aggregation. It also prevents adenosine reuptake by platelets → ↑ extracellular adenosine → ↑ vasodilation.'",
      "The mechanism anchors (printed on the completed pages): book 237 (g-protein-linked-second-messengers) — the β1 row 'β1 | s | ↑ heart rate, ↑ contractility (one heart), ↑ renin release, ↑ lipolysis', the β2 row 'β2 | s | Vasodilation, bronchodilation (two lungs), ↑ lipolysis, ↑ insulin release, ↑ glycogenolysis...', and the Gs diagram labels 'Adenylyl cyclase / GS protein / ATP / Cyclic AMP / Protein kinase A' (the mint of the currency this page's enzyme is the sink of); book 244 behind (the completed PH24) — the selectivity subtable's final rows. The absences (verified, never cited as printed): NO PDE-1 or PDE-2 row, NO other methylxanthine (caffeine absent), NO other PDE-3 member (amrinone/inamrinone absent); the PDE-5 roster prints FOUR members (the task's three-name list omitted avanafil); the 24-48h nitrate separation protocol and the theophylline level-monitoring story are NOT printed (KYP-flagged).",
    ],
    m3: [
      "3-4-5: HEART–AIRWAY–ERECTION (KYP; the rows are printed) — PDE-3 the failing pump (milrinone: '↑ Ca2+ influx → ↑ ionotropy and chronotropy' + 'MLCK inhibition → vasodilation → ↓ preload and afterload', for 'Acute decompensated HF with cardiogenic shock (inotrope)', price 'Tachycardia, ventricular arrhythmias'; PLUS cilostazol, the same isoform filed by indication at the platelet, per footnote a); PDE-4 the inflamed airway (roflumilast: '↑ cAMP in neutrophils, granulocytes, and bronchial epithelium', for 'Severe COPD', price 'depression, anxiety, insomnia' + weight loss); PDE-5 the engorged vessels (sildenafil, vardenafil, tadalafil, avanafil: '↓ hydrolysis of cGMP → ↑ cGMP → ↑ smooth muscle relaxation by enhancing NO activity', for ED / pulmonary hypertension / 'BPH (tadalafil only)', price 'hypotension in patients taking nitrates' + sildenafil-only cyanopia via 'PDE-6 (six) in retina').",
      "cAMP ACTS, cGMP RELAXES (KYP) — the cAMP camp (milrinone, roflumilast, theophylline, cilostazol, dipyridamole) works at four addresses (cardiomyocyte, airway immune cells, bronchial smooth muscle, platelet); the cGMP camp (PDE-5 alone) relaxes one tissue set (corpus cavernosum + pulmonary vasculature, 'by enhancing NO activity'). The nitrate interaction lives entirely inside the cGMP camp: the donor feeds the pool while the inhibitor blocks its hydrolysis — 'hypotension in patients taking nitrates; “hot and sweaty,” then headache, heartburn, hypotension'.",
      "THE NONSPECIFIC PAIR + THE TAXONOMY — the two rows without isoform numbers: theophylline ('COPD/asthma (rarely used)' — the rank is the book's own; 'Cardiotoxicity (eg, tachycardia, arrhythmia), neurotoxicity (eg, seizures, headache), abdominal pain') and dipyridamole (footnote b: 'a nonspecific PDE inhibitor' that 'also prevents adenosine reuptake by platelets → ↑ extracellular adenosine → ↑ vasodilation' — the stress-test mechanism, 'dipyridamole only, due to coronary vasodilation'); footnote a re-files cilostazol ('a PDE-3 inhibitor, but due to its indications is categorized as a platelet inhibitor together with dipyridamole') — the quoted '\"Platelet inhibitors\"' is a filing category, not a mechanism class.",
    ],
    m10: [
      "The whole block in one breath: one header ('Phosphodiesterase inhibitors' + the intro sentence — the enzyme, the hydrolysis, the currency, the isoform-specificity principle), one four-column table of five rows (the nonspecific theophylline, the PDE-5 four, the PDE-4 roflumilast, the PDE-3 milrinone, the platelet pair), and two footnotes (cilostazol PDE-3-by-indication; dipyridamole nonspecific + adenosine).",
      "The mechanism, assembled from the printed anchors: PDE catalyzes the hydrolysis of cAMP and/or cGMP — the sink of the second-messenger system; the currency mints on book 237 ('GS protein → Adenylyl cyclase → ATP → Cyclic AMP → Protein kinase A' on the Gs side; the NO pathway on the cGMP side, this page's own token 'enhancing NO activity'); inhibiting the hydrolase extends the signal without touching the receptor — downstream of β-blockade (the facing page) and downstream of β-agonism (the theophylline row manufactures the bronchodilation book 237's β2 row prints, one step below the receptor).",
      "The PDE-5 row is the exam's anchor: FOUR members (sildenafil, vardenafil, tadalafil, avanafil — the task's list omitted avanafil, the 2026 page prints it), the mechanism sentence that ends 'fills the penis', the '(tadalafil only)' fine print on BPH, the nitrate token 'hypotension in patients taking nitrates', the '“hot and sweaty,”' face, and the sildenafil-only cyanopia 'via inhibition of PDE-6 (six) in retina' — the book's own '(six)' parenthetical.",
      "The nitrate interaction, printed as an adverse cell (never as a rule — KYP-flagged): two cGMP inputs converge on one bed (the PDE-5 brake released + the NO donor feeding the pool) — 'hypotension in patients taking nitrates; “hot and sweaty,” then headache, heartburn, hypotension'; the protocol (24h sildenafil/vardenafil, 48h tadalafil — by half-life; the same long half-life earns tadalafil the '(tadalafil only)' BPH use) is the flagged overlay; management is withdrawal of the inputs, positioning, fluids, vasopressors only if refractory.",
      "The milrinone row, both halves: the cardiomyocyte '↑ cAMP → ↑ Ca2+ influx → ↑ ionotropy and chronotropy' (the book's own 'ionotropy' spelling — carried verbatim, like book 244's 'β3 -receptors' kerning) and the vascular smooth muscle '↑ cAMP → MLCK inhibition → vasodilation → ↓ preload and afterload' — an inotrope that unloads, for 'Acute decompensated HF with cardiogenic shock (inotrope)', with the price 'Tachycardia, ventricular arrhythmias, hypotension' that makes it an ICU drug, not a chronic inotrope (chronic inotropy is the opposite of the β-blockers' chronic mortality story one page back).",
      "The platelet pair and its taxonomy: the quoted '\"Platelet inhibitors\"' category name (the book's own), the one shared mechanism cell ('In platelets: ↑ cAMP → inhibition of platelet aggregation'), and the two footnotes that resolve it — cilostazol 'a PDE-3 inhibitor, but due to its indications is categorized as a platelet inhibitor together with dipyridamole' (milrinone's isoform at the platelet address: the claudicant's drug), dipyridamole 'a nonspecific PDE inhibitor' that 'also prevents adenosine reuptake by platelets → ↑ extracellular adenosine → ↑ vasodilation' (the stress-test drug: 'Cardiac stress testing (dipyridamole only, due to coronary vasodilation)').",
      "The roflumilast row: '↑ cAMP in neutrophils, granulocytes, and bronchial epithelium' — the anti-inflammatory lane (the immune cells of the airway, not the smooth muscle), for 'Severe COPD', with the neuropsychiatric-metabolic price 'Abdominal pain, weight loss, depression, anxiety, insomnia' — the mood warning that makes it a drug to counsel on (the suicidality-monitoring language is KYP-flagged, not printed).",
      "The theophylline row: '↓ cAMP hydrolysis → ↑ cAMP → bronchial smooth muscle relaxation → bronchodilation' for 'COPD/asthma (rarely used)' — the rank prints inside the use cell itself; the price is the systemic currency's price ('Cardiotoxicity (eg, tachycardia, arrhythmia), neurotoxicity (eg, seizures, headache), abdominal pain'); the level-monitoring/narrow-index story is NOT printed on this page (KYP-flagged wherever taught).",
      "The caution set as five rows (the ADVERSE column, sorted by drug): the PDE-5 four ('hypotension in patients taking nitrates' + '“hot and sweaty,”' + sildenafil-only cyanopia), roflumilast ('depression, anxiety, insomnia' + weight loss), milrinone ('Tachycardia, ventricular arrhythmias, hypotension'), theophylline ('Cardiotoxicity... neurotoxicity... abdominal pain'), the pair ('Nausea, headache, facial flushing, hypotension, abdominal pain').",
      "The boundary and the absences: pdf 267 (book 245) carries the WHOLE block and is the LAST page of the AUTONOMIC-DRUGS banner (pdf 268 / book 246 opens the NEW TOXICITIES banner — Ingested seafood toxins: scombroid, tetrodotoxin, ciguatoxin); pdf 266 behind carries the completed PH24 (only its selectivity subtable's final rows and footer pinned from behind); verified ABSENT from the 2026 table: PDE-1 and PDE-2 rows, any other methylxanthine (caffeine), any other PDE-3 member (amrinone/inamrinone) — and the PDE-5 roster prints exactly FOUR members; the 'ionotropy' spelling and the '(six)' parenthetical carry verbatim, documented, never cited as corrected.",
    ],
  },
  recall: [
    {
      q: "Recite the class table whole — all five rows with their four columns (type, mechanism, uses, adverse), verbatim, naming which rows carry the footnotes.",
      a:
        "ROW 1: 'Nonspecific PDE inhibitor / Theophylline' — '↓ cAMP hydrolysis → ↑ cAMP → bronchial smooth muscle relaxation → bronchodilation' | 'COPD/asthma (rarely used)' | 'Cardiotoxicity (eg, tachycardia, arrhythmia), neurotoxicity (eg, seizures, headache), abdominal pain'. ROW 2: 'PDE-5 inhibitors / Sildenafil, vardenafil, tadalafil, avanafil' — '↓ hydrolysis of cGMP → ↑ cGMP → ↑ smooth muscle relaxation by enhancing NO activity → pulmonary vasodilation and ↑ blood flow in corpus cavernosum fills the penis' | 'Erectile dysfunction / Pulmonary hypertension / Benign prostatic hyperplasia (tadalafil only)' | 'Facial flushing, headache, dyspepsia, hypotension in patients taking nitrates; “hot and sweaty,” then headache, heartburn, hypotension' + 'Sildenafil only: cyanopia (blue-tinted vision) via inhibition of PDE-6 (six) in retina'. ROW 3: 'PDE-4 inhibitor / Roflumilast' — '↑ cAMP in neutrophils, granulocytes, and bronchial epithelium' | 'Severe COPD' | 'Abdominal pain, weight loss, depression, anxiety, insomnia'. ROW 4: 'PDE-3 inhibitor / Milrinone' — 'In cardiomyocytes: ↑ cAMP → ↑ Ca2+ influx → ↑ ionotropy and chronotropy / In vascular smooth muscle: ↑ cAMP → MLCK inhibition → vasodilation → ↓ preload and afterload' | 'Acute decompensated HF with cardiogenic shock (inotrope)' | 'Tachycardia, ventricular arrhythmias, hypotension'. ROW 5 (the footnote row): '\"Platelet inhibitors\" / Cilostazol^a / Dipyridamole^b' — 'In platelets: ↑ cAMP → inhibition of platelet aggregation' | 'Intermittent claudication / Stroke or TIA prevention (with aspirin) / Cardiac stress testing (dipyridamole only, due to coronary vasodilation) / Prevention of coronary stent restenosis' | 'Nausea, headache, facial flushing, hypotension, abdominal pain'. Two rows carry the superscripts: Cilostazol^a and Dipyridamole^b.",
    },
    {
      q: "Recite the two footnotes verbatim and state the taxonomy resolution each one performs — what exactly are cilostazol and dipyridamole?",
      a:
        "FOOTNOTE a: 'Cilostazol is a PDE-3 inhibitor, but due to its indications is categorized as a platelet inhibitor together with dipyridamole.' — cilostazol IS a PDE-3 inhibitor (milrinone's isoform, the cAMP currency) FILED under the platelet row because of its indications (claudication, stroke/TIA prevention): the same ↑ cAMP → inhibition of platelet aggregation, at the platelet address instead of the cardiomyocyte. FOOTNOTE b: 'Dipyridamole is a nonspecific PDE inhibitor, leading to inhibition of platelet aggregation. It also prevents adenosine reuptake by platelets → ↑ extracellular adenosine → ↑ vasodilation.' — dipyridamole is the OTHER nonspecific member (the theophylline of the platelet row: no isoform number) with a SECOND mechanism: adenosine-reuptake blockade → ↑ extracellular adenosine → ↑ vasodilation — the printed basis of 'Cardiac stress testing (dipyridamole only, due to coronary vasodilation)'. Together: the quoted '\"Platelet inhibitors\"' is a filing category, not a mechanism class; one member is PDE-3-by-indication, the other nonspecific-plus-adenosine.",
    },
    {
      q: "State the currency split: which drugs raise cAMP, which raise cGMP, and where does the currency itself print? Then answer the cross-page question: how does this page relate to the β-blockers page behind it?",
      a:
        "THE cAMP CAMP (four addresses): milrinone (cardiomyocyte + vascular smooth muscle — '↑ cAMP → ↑ Ca2+ influx' and '↑ cAMP → MLCK inhibition'), roflumilast (airway immune cells — '↑ cAMP in neutrophils, granulocytes, and bronchial epithelium'), theophylline (bronchial smooth muscle — '↓ cAMP hydrolysis → ↑ cAMP → bronchial smooth muscle relaxation → bronchodilation'), cilostazol + dipyridamole (platelets — '↑ cAMP → inhibition of platelet aggregation'). THE cGMP CAMP (PDE-5 alone): sildenafil, vardenafil, tadalafil, avanafil — '↓ hydrolysis of cGMP → ↑ cGMP → ↑ smooth muscle relaxation by enhancing NO activity'. THE CURRENCY PRINTS ON BOOK 237 (g-protein-linked-second-messengers, PH16): the β1 row 'β1 | s | ↑ heart rate, ↑ contractility (one heart), ↑ renin release, ↑ lipolysis', the β2 row 'β2 | s | Vasodilation, bronchodilation (two lungs)... ↑ glycogenolysis...', and the Gs diagram labels 'Adenylyl cyclase / GS protein / ATP / Cyclic AMP / Protein kinase A' (the mint); PDE is the sink, and this page's drugs block the sink. THE CROSS-PAGE ANSWER: the β-blockers page (book 244, the completed PH24) is the receptor-side lever on the SAME cAMP — β-blockade lowers it at the receptor, PDE inhibition raises it at the hydrolase; the two are the two levers on one second messenger, on facing pages (the camp split itself is KYP's, flagged — the currency rows are printed).",
    },
    {
      q: "A patient on isosorbide dinitrate for angina asks about sildenafil for erectile dysfunction. What does the page print about this combination, what is the mechanism, and what is the protocol? Which member causes cyanopia, and why does tadalafil carry the '(tadalafil only)' parenthetical?",
      a:
        "THE PRINTED TOKEN (an adverse cell, never a rule — KYP-flagged): 'hypotension in patients taking nitrates; “hot and sweaty,” then headache, heartburn, hypotension'. THE MECHANISM: convergence on the cGMP pool — the PDE-5 inhibitor blocks the hydrolysis ('↓ hydrolysis of cGMP → ↑ cGMP → ↑ smooth muscle relaxation by enhancing NO activity') while the nitrate donor drives more cGMP synthesis; the cumulative cGMP relaxes vascular smooth muscle beyond what either drug alone would do. THE PROTOCOL (KYP-flagged, not printed): never concurrent — separate by at least 24 hours (sildenafil, vardenafil) or 48 hours (tadalafil); manage an interaction by withdrawing the inputs, supine positioning, fluids, vasopressors only if refractory; if the angina requires uninterrupted nitrates, treat the erectile dysfunction by another route. CYANOPIA: sildenafil only — 'cyanopia (blue-tinted vision) via inhibition of PDE-6 (six) in retina', the book's own '(six)' parenthetical (the off-target isoform, one number from PDE-5: 5 for the penis, 6 for the sight). THE TADALAFIL PARENTHETIAL: 'Benign prostatic hyperplasia (tadalafil only)' — the longer half-life that earns the once-daily BPH/PAH dosing is the same property that makes its nitrate separation the longest (48 hours).",
    },
    {
      q: "State the PH24/PH25 boundary of books 244-245, the section-extent finding for pdf 267 (including the banner-end finding), and the verified absences of the 2026 phosphodiesterase-inhibitors table.",
      a:
        "THE BOUNDARY (pinned both ways): pdf 266 (book 244) behind carries the COMPLETED PH24 beta-blockers block — its table EXCLUDED here; only the selectivity subtable's final rows (the carvedilol/labetalol row, the nebivolol row, the 'NebivOlol increases NO' mnemonic) and the book-244 footer pinned from behind. THE EXTENT: the phosphodiesterase-inhibitors block occupies the WHOLE of pdf 267 (book 245) — header, intro sentence, five-row four-column table, footnotes, footer — and pdf 267 is the LAST page of the AUTONOMIC-DRUGS banner: pdf 268 (book 246) ahead opens the NEW 'PHARMACOLOGY—TOXICITIES AND ADVERSE EFFECTS' banner (Ingested seafood toxins: scombroid, tetrodotoxin, ciguatoxin — the PENDING next topics); sourcePages = [267] only. THE VERIFIED ABSENCES: (1) NO PDE-1 or PDE-2 row prints; (2) NO other methylxanthine prints (caffeine absent — the nonspecific row names theophylline alone); (3) NO other PDE-3 member prints (amrinone/inamrinone absent — milrinone is the row's only drug); and the PDE-5 roster prints exactly FOUR members (sildenafil, vardenafil, tadalafil, avanafil — the task's three-name list omitted avanafil, documented). The book's own 'ionotropy' spelling and its own '(six)' parenthetical carry verbatim — documented, never cited as corrected.",
    },
  ],
  related: [
    {
      title: "Beta-Blockers — the Page Behind, the Other Lever on the Same cAMP",
      topicId: "beta-blockers",
      note:
        "The completed PH24 (book 244, the page immediately behind this one): the β-blockers page is the RECEPTOR-SIDE lever on the same second-messenger currency — β1 and β2 both ride Gs (book 237's rows: 'β1 | s', 'β2 | s'), and β-blockade lowers the cAMP at the receptor while PDE inhibition raises it at the hydrolase. The two pages are the two levers on one messenger, on facing pages: the β-blocker's '↓ heart rate and contractility → ↓ O2 consumption' and milrinone's '↑ Ca2+ influx → ↑ ionotropy' are opposite pulls on the same cardiomyocyte currency, and the β-blockers' chronic mortality story (HFrEF) is the mirror of this page's warning that milrinone is the ACUTE inotrope only ('Acute decompensated HF with cardiogenic shock' — chronic positive inotropy is the opposite of what the failing heart needs long-term). The exam's cross-page sort: β-blockade for the chronic heart, PDE-3 inhibition for the shocked heart; β-blockade for the asthma-caution lanes, PDE inhibition for the bronchodilation theophylline row provides downstream of the receptor; and the two drug classes coexist in one patient (the miniCase's metoprolol) without sharing a mechanism.",
    },
    {
      title: "G-Protein-Linked Second Messengers — the Mint of the Currency This Page Defends",
      topicId: "g-protein-linked-second-messengers",
      note:
        "The completed PH16 (book 237): the second-messenger page prints the currency this page's enzyme is the sink of — the β1 row ('β1 | s | ↑ heart rate, ↑ contractility (one heart), ↑ renin release, ↑ lipolysis') and the β2 row ('β2 | s | Vasodilation, bronchodilation (two lungs), ↑ lipolysis, ↑ insulin release, ↑ glycogenolysis...') on the table side, AND the Gs diagram labels themselves on the figure side: 'Adenylyl cyclase', 'GS protein', 'ATP', 'Cyclic AMP', 'Protein kinase A' — the printed receptor→effector→second-messenger chain. The β2 row's 'bronchodilation (two lungs)' is the effect the theophylline row manufactures one step downstream ('↓ cAMP hydrolysis → ↑ cAMP → bronchial smooth muscle relaxation → bronchodilation') — the reason theophylline and the β2 agonists are functional teammates (both raise airway cAMP, one at the receptor, one at the hydrolase) and the reason the β-blockers page warns about asthma while this page's nonspecific row carries the same bronchodilation without touching the receptor. Any 'which second messenger' or 'where does the cAMP come from' question on this block's drugs is answered from that page's print (the camp split itself — cAMP camp vs cGMP camp — is KYP's, flagged).",
    },
    {
      title: "Sympathomimetics — the Receptor-Side Teammates of the Nonspecific Row",
      topicId: "sympathomimetics",
      note:
        "The completed sympathomimetics section (books 240-243, the pilot-corpus note spanning the sympathomimetic drug tables up to the α-blockers table): the β2 agonists (albuterol and its family) raise airway cAMP at the RECEPTOR — the Gs couple — while theophylline raises the same cAMP at the HYDROLASE; the two are functional teammates in asthma/COPD (the classic combination the theophylline row's 'COPD/asthma (rarely used)' rank retired in favor of the receptor-side drugs), and the exam's version is the mechanism pair: 'β2 agonist → Gs → adenylyl cyclase → cAMP → bronchodilation' versus 'nonspecific PDE inhibitor → blocked hydrolysis → cAMP → bronchodilation' — same currency, different step. The dobutamine/dopamine members of that section are the inotrope competitors of milrinone (the β1 agonists raise cardiomyocyte cAMP at the receptor; milrinone raises it at the enzyme) — the ICU sort the cardiogenic-shock stems run, and the reason the two coexist in practice (KYP-flagged where the comparison goes beyond either page's print).",
    },
    {
      title: "Atherosclerosis — the Claudication Address of the Platelet Pair",
      topicId: "atherosclerosis",
      note:
        "The completed atherosclerosis note (the pilot corpus): the peripheral-artery-disease endpoint — intermittent claudication, the calf pain on walking that an ABI of 0.6 measures — is the printed use cell of the platelet pair's first member: cilostazol, 'a PDE-3 inhibitor, but due to its indications is categorized as a platelet inhibitor together with dipyridamole' (footnote a), for 'Intermittent claudication' with 'Stroke or TIA prevention (with aspirin)' and 'Prevention of coronary stent restenosis' in the same cell. The pathophysiology link: atherosclerosis narrows the limb arteries → exertional ischemia → the claudication; the antiaggregation half (↑ cAMP in platelets) works the thrombotic complication, and the vasodilatory cAMP half (MLCK inhibition in vascular smooth muscle) works the perfusion — the same two-address logic milrinone's row prints for the heart. The exam's version: the smoking claudicant with an ABI in the 0.6s whose options include cilostazol (the answer), pentoxifylline (the other PDE-adjacent classic — outside this page's print, KYP-flagged), and exercise (the co-answer); and the caution that cilostazol is the PDE-3 member whose heart-failure concern is the classic teaching (KYP-flagged — the printed page carries no contraindication cell).",
    },
  ],
  crossLinks: [
    {
      subject: "Cardiology & Vascular Medicine (the inotrope lane, the nitrate boundary, and the platelet pair's vascular uses)",
      connection:
        "The cardiology half of the page: milrinone — 'Acute decompensated HF with cardiogenic shock (inotrope)', the drug the ICU reaches for when the heart cannot perfuse: '↑ cAMP → ↑ Ca2+ influx → ↑ ionotropy and chronotropy' at the cardiomyocyte and '↑ cAMP → MLCK inhibition → vasodilation → ↓ preload and afterload' at the vessels, with the price 'Tachycardia, ventricular arrhythmias, hypotension' (continuous telemetry; the reason it is the acute bridge, never the chronic inotrope — chronic positive inotropy is the mirror-opposite of the β-blockers' chronic mortality story one page back). The nitrate boundary: the angina patient's isosorbide/nitroglycerin converges with PDE-5 inhibition on the cGMP pool — 'hypotension in patients taking nitrates' — the cardiology-pharmacology interaction the exam writes as an ED-plus-angina stem. The vascular half: the platelet pair's uses — 'Intermittent claudication', 'Stroke or TIA prevention (with aspirin)', 'Prevention of coronary stent restenosis', and 'Cardiac stress testing (dipyridamole only, due to coronary vasodilation)' — the perfusion-lane drugs of the PVD and stroke chapters, with cilostazol the claudicant's answer and the heart-failure concern the classic teaching (KYP-flagged where used).",
    },
    {
      subject: "Pulmonology (the three airway rows and the pulmonary-artery lane)",
      connection:
        "The airway half of the page: theophylline's '↓ cAMP hydrolysis → ↑ cAMP → bronchial smooth muscle relaxation → bronchodilation' for 'COPD/asthma (rarely used)' — the rank is the book's own, and the systemic price ('Cardiotoxicity (eg, tachycardia, arrhythmia), neurotoxicity (eg, seizures, headache)') is why the β2 agonists took the lane; roflumilast's '↑ cAMP in neutrophils, granulocytes, and bronchial epithelium' for 'Severe COPD' — the anti-inflammatory add-on for frequent exacerbators, with the mood/sleep/weight price ('Abdominal pain, weight loss, depression, anxiety, insomnia') that the pulmonology chapters counsel on; and the third lane is the PDE-5 row's pulmonary half — 'pulmonary vasodilation' for pulmonary hypertension, the right-heart afterload story of the pulmonology chapters. The currency link the exam builds: all three airway rows are the same cAMP story the β2 agonists tell from the receptor side (the sympathomimetics pages) — theophylline downstream of the receptor, albuterol at it; and the camp split (KYP, flagged) explains why the asthma cautions of the β-blockers page (β2 blockade → bronchospasm) do not apply here — no receptor is blocked on this page at all.",
    },
    {
      subject: "Urology & Reproductive Medicine (the corpus-cavernosum lane and the BPH parenthetical)",
      connection:
        "The urology half of the page is one row: the PDE-5 four — '↓ hydrolysis of cGMP → ↑ cGMP → ↑ smooth muscle relaxation by enhancing NO activity → pulmonary vasodilation and ↑ blood flow in corpus cavernosum fills the penis' — for erectile dysfunction (the NO-driven engorgement the urology chapters describe as the cavernosal smooth-muscle relaxation), with 'Benign prostatic hyperplasia (tadalafil only)' as the same row's urology second act (the long half-life that earns the once-daily dosing for BPH/ lower-urinary-tract symptoms is also the reason its nitrate separation is the longest, 48 hours — KYP-flagged: the page prints the '(tadalafil only)' parenthetical, not the half-life logic). The interaction boundary is the urology-prescribing question: every ED workup asks about nitrates first ('hypotension in patients taking nitrates' — the printed cell), and the exam's face is the miniCase — the flushed, diaphoretic, headachy presyncopal patient an hour after a deliberate pairing. The cyanopia tail (sildenafil only, 'via inhibition of PDE-6 (six) in retina') is the visual adverse the urology follow-ups ask by name.",
    },
    {
      subject: "Psychiatry, Neurology & Ophthalmology (the neuropsychiatric, neurotoxic, and visual tokens of the adverse column)",
      connection:
        "The neuro axis of the page: roflumilast's 'depression, anxiety, insomnia' (with 'weight loss') — the neuropsychiatric price that makes the severe-COPD add-on a drug to counsel on and monitor (the suicidality-monitoring language is KYP-flagged, not printed); theophylline's 'neurotoxicity (eg, seizures, headache)' — the systemic currency's cerebral price (the seizure is the classic theophylline-toxicity sign; the level-monitoring story is KYP-flagged, not printed); sildenafil's 'cyanopia (blue-tinted vision) via inhibition of PDE-6 (six) in retina' — the off-target isoform one number from PDE-5 (5 for the penis, 6 for the sight), the visual adverse that is sildenafil-only; and the shared 'headache' token that runs through every row's price list (the PDE-5 four's 'headache', milrinone's row has none — but the pair's 'Nausea, headache, facial flushing' does). The ophthalmology crossover: the cyanopia question is the retina-pharmacology link (PDE-6 in the photoreceptor layer — the reason the visual adverse is a tint, not a deficit); the neurology crossover: the seizure under theophylline and the insomnia under roflumilast are the two ends of the same lesson — on this page the ADDRESS owns the PRICE (the airway currency's brain ride-along, the anti-inflammatory currency's mood ride-along).",
    },
  ],
};
