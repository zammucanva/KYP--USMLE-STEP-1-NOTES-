import type { KypUsMLENote } from "../types";

// Pharmacology — PH-batch 19. Source: FULL pdf page 266 / book 244
// (Pharmacology — Autonomic Drugs: β-blockers — a FULL single page, no
// shared-page split). The page is ONE large printed table under the
// "β-blockers" heading plus the alphabetical drug list — 11 drugs:
// "Atenolol, betaxolol, bisoprolol, carvedilol, esmolol, labetalol,
// metoprolol, nadolol, nebivolol, propranolol, timolol." The table's
// three columns are APPLICATION / ACTIONS / NOTES-EXAMPLES and its
// printed row order is: Angina pectoris; Glaucoma (Timolol); Heart
// failure (Bisoprolol, carvedilol, metoprolol — β-blockers curb
// mortality); Hypertension (↓ renin via β1-receptor blockade on JG
// cells); Hyperthyroidism/thyroid storm (Propranolol); Hypertrophic
// cardiomyopathy; Migraine (Effective for prevention); Myocardial
// infarction; Supraventricular tachycardia (eg, atrial fibrillation)
// (Metoprolol, esmolol); Variceal bleeding (Nadolol, propranolol,
// carvedilol for no portal circulation); ADVERSE EFFECTS (with the
// cocaine-associated chest-pain controversy note); SELECTIVITY (four
// rows: β1-selective A-to-M; nonselective N-to-Z; nonselective β +
// α1-selective carvedilol/labetalol with modified suffixes; and
// Nebivolol β1 + β3-receptor stimulation → NO synthase → ↓ SVR).
// TEN applications print (the batch spec said "nine-uses" — ten
// docks print on the page; all ten are carried).
//
// CENSUS (pdfimages -list, pdf 266): ZERO raster images — the page is
// a pure vector/text table page. VLM census (glm-4.6v on the 120-dpi
// render, saved as staging-ph19/vlm-census.txt): no figures, no
// photographs, no margin notes, no asterisk footnotes; the page's
// mnemonics are embedded IN RED TEXT inside the NOTES-EXAMPLES cells
// (β-blockers curb mortality; Nadolol/propranolol/carvedilol for "no
// portal circulation"; the A-to-M and N-to-Z alphabet lines; modified
// suffixes; NebivOlol increases NO). All six are carried VERBATIM,
// attributed to First Aid, and inventoried.
//
// TEXT-LAYER QUIRKS (adjudicated and documented — see the gen script
// and staging-ph19/vlm-adjudication.txt + pdftotext -bbox baselines):
// (1) "NonZelective" — the NOTES cell of the second selectivity row
// prints a CAPITAL Z mid-word (confirmed in BOTH the text layer and
// the 200-dpi render; the left-column ACTIONS cell of the same row
// prints "Nonselective" normally) — the source's own printed quirk,
// carried verbatim, never silently fixed.
// (2) The text layer runs together "β1receptor" and "longterm"; the
// print shows "β1-receptor" and "long-term" — hyphens sitting at line
// breaks that pdftotext dropped (bbox: "β1-" ends the line, then
// "receptor blockade on JG cells)"; "(long-" then "term)").
// (3) The text layer prints "β3 -receptors" with a stray space; the
// print shows "β3-receptors" (the subscript 3 splits the token).
// (4) INTERLEAVE: the two mnemonic NOTES cells "Propranolol"
// (Hyperthyroidism/thyroid storm row) and "Effective for prevention"
// (Migraine row) emit AFTER the black footer slug in the text layer
// (red mnemonic text drawn late in the content stream); adjudicated
// deterministically via pdftotext -bbox baselines — Propranolol
// y=263.2 shares the "Symptom control (↓ heart rate, ↓ tremor)"
// baseline; "Effective for prevention" y=322.4 shares the "↓ nitric
// oxide production" baseline.
// (5) The running header prints "SEC TION II" in the text layer.
// The KYP diagram, the exam layer, and the four KYP mnemonics are
// original; First Aid's own printed mnemonics are carried attributed.

export const betaBlockers: KypUsMLENote = {
  id: "beta-blockers",
  title: "β-Blockers",
  subtitle:
    "One suffix, four lanes, ten docks. Every -olol blocks β1 (↓ heart rate and contractility, ↓ renin from the JG cells, ↓ AV conduction); the lanes differ in what ELSE they block — β1-selective agents (atenolol→metoprolol, A to M) pick the one cardiac lock, nonselective agents (nadolol→timolol, N to Z) add β2 (the asthma/COPD and masked-hypoglycemia tax), carvedilol and labetalol add α1 (modified suffixes), and nebivolol adds β3 stimulation (NO synthase → ↓ SVR). The printed table docks the class onto ten applications — angina, glaucoma, heart failure (the mortality trio: bisoprolol, carvedilol, metoprolol), hypertension, thyroid storm, hypertrophic cardiomyopathy, migraine, MI, SVT, and variceal bleeding.",
  subject: "Pharmacology",
  system:
    "Section II · High-Yield General Principles — Pharmacology: Autonomic Drugs",
  pilotCategory: "Pharmacology mechanism",
  difficulty: 2,
  readTime: 6,
  sourceRef:
    "First Aid 2026, Part 1 pp. 244–244 (Pharmacology — Autonomic Drugs: β-blockers; …)",
  tags: [
    "beta-blockers",
    "β-blockers",
    "sympatholytics",
    "antihypertensives",
    "antiarrhythmics",
    "class II antiarrhythmics",
    "β1-selective",
    "cardioselective",
    "atenolol",
    "betaxolol",
    "bisoprolol",
    "carvedilol",
    "esmolol",
    "labetalol",
    "metoprolol",
    "nadolol",
    "nebivolol",
    "propranolol",
    "timolol",
    "angina",
    "glaucoma",
    "heart failure",
    "hypertension",
    "thyroid storm",
    "hypertrophic cardiomyopathy",
    "migraine prophylaxis",
    "myocardial infarction",
    "supraventricular tachycardia",
    "variceal bleeding",
    "autonomic pharmacology",
  ],
  core: {
    what:
      "β-Blockers are competitive antagonists at β-adrenergic receptors. The class list is alphabetical on the page — Atenolol, betaxolol, bisoprolol, carvedilol, esmolol, labetalol, metoprolol, nadolol, nebivolol, propranolol, timolol — and the page sorts them by SELECTIVITY: β1-selective antagonists (β1 > β2) — atenolol, betaxolol, bisoprolol, esmolol, metoprolol; nonselective antagonists (β1 = β2) — nadolol, propranolol, timolol; nonselective β-adrenergic, α1-selective antagonists — carvedilol, labetalol; and nebivolol, which combines cardiac-selective β1-adrenergic blockade with stimulation of β3-receptors (activate NO synthase in the vasculature and ↓ SVR). Their actions: ↓ heart rate and contractility → ↓ O2 consumption; ↓ production of aqueous humor; blockade of neurohormonal stress → prevention of deleterious cardiac remodeling → ↓ mortality; ↓ cardiac output and ↓ renin secretion (due to β1-receptor blockade on JG cells); ↓ AV conduction velocity (class II antiarrhythmic); ↓ hepatic venous pressure gradient and portal hypertension (prophylactic use).",
    why:
      "This single page is the highest-yield drug class of the autonomic pharmacology block because it is pure receptor logic: once you know which receptors a given -olol blocks, every use and every adverse effect falls out mechanically. The β1 lock explains the therapeutic core (slower, weaker, better-perfused heart; less renin; slower AV conduction) — which docks onto angina, hypertension, HOCM (↓ heart rate → ↑ filling time, relieving obstruction), SVT rate control, and the heart-failure mortality benefit (bisoprolol, carvedilol, metoprolol — β-blockers curb mortality). The β2 lock is the tax: nonselective agents reach the bronchi (asthma/COPD exacerbations) and mask the adrenergic warning signs of hypoglycemia. The α1 addition (carvedilol, labetalol) adds vasodilation. Nebivolol's β3 stimulation is the page's one NO story (NebivOlol increases NO). And the exam's two classic rules print here: avoid β-blockade when β2 blockade is dangerous (asthma/COPD), and β-blockers for acute cocaine-associated chest pain remain controversial due to unsubstantiated concern for unopposed α-adrenergic stimulation.",
    keyIdea:
      "Read every β-blocker question through four moves. MOVE 1 — NAME THE LANE: β1-selective (the A-to-M drugs), nonselective β1=β2 (the N-to-Z drugs), α1+β dual (carvedilol, labetalol — modified suffixes), or nebivolol (β1 block + β3 stimulation → NO). MOVE 2 — COUNT THE LOCKS: the lane tells you exactly which receptors are blocked — β1 alone, β1+β2, β1+β2+α1, or β1 blocked with β3 stimulated. MOVE 3 — PREDICT THE REACH: β1 alone touches heart, JG cells, and AV node; adding β2 reaches the bronchi (wheeze) and blunts the hypoglycemia warning; adding α1 vasodilates; stimulating β3 generates NO. MOVE 4 — DOCK IT: match the predicted reach to the printed application — the named drug anchors (Timolol for glaucoma, Propranolol for thyroid storm, Metoprolol + esmolol for SVT, Nadolol/propranolol/carvedilol for varices, the bisoprolol/carvedilol/metoprolol trio for heart-failure mortality) are the answer keys the exam reuses.",
  },
  mechanisms: [
    {
      id: "beta-blockade-core-map",
      title:
        "The core: what blocking β1 does — the four printed actions and where they dock",
      context: "The ACTIONS column of the printed table (book 244)",
      flow: {
        nodes: [
          {
            id: "bb-class",
            label: "β-BLOCKADE — the -olol class",
            sublabel:
              "Input — competitive antagonism at β-adrenergic receptors; every member of the printed list (atenolol → timolol) blocks β1 first, and the SELECTIVITY column decides what else falls.",
            variant: "input",
          },
          {
            id: "heart-arm",
            label: "↓ heart rate and contractility",
            sublabel:
              "Process — the SA node and contractile machinery lose β1 drive: ↓ heart rate and contractility → ↓ O2 consumption, and ↓ heart rate → ↑ filling time, relieving obstruction (the HCM move).",
            variant: "process",
          },
          {
            id: "jg-arm",
            label: "↓ renin secretion (β1 on JG cells)",
            sublabel:
              "Process — β1-receptor blockade on the juxtaglomerular cells cuts renin release; with ↓ cardiac output this is the printed hypertension mechanism.",
            variant: "process",
          },
          {
            id: "av-arm",
            label: "↓ AV conduction velocity",
            sublabel:
              "Process — the AV node slows (the class II antiarrhythmic effect), the rate-control move for supraventricular tachycardia (eg, atrial fibrillation).",
            variant: "process",
          },
          {
            id: "remodel-arm",
            label: "Blockade of neurohormonal stress",
            sublabel:
              "Process — shielding the failing heart from chronic adrenergic drive: prevention of deleterious cardiac remodeling → ↓ mortality (short-term ↓ O2 demand, long-term ↓ mortality after MI).",
            variant: "process",
          },
          {
            id: "docks-out",
            label: "THE TEN DOCKS",
            sublabel:
              "Output — angina pectoris; glaucoma (↓ production of aqueous humor); heart failure (bisoprolol, carvedilol, metoprolol — β-blockers curb mortality); hypertension; hyperthyroidism/thyroid storm (symptom control: ↓ heart rate, ↓ tremor); hypertrophic cardiomyopathy; migraine (↓ nitric oxide production; effective for prevention); myocardial infarction; supraventricular tachycardia (metoprolol, esmolol); variceal bleeding (↓ hepatic venous pressure gradient and portal hypertension, prophylactic use).",
            variant: "output",
          },
        ],
        edges: [
          { from: "bb-class", to: "heart-arm", label: "β1 antagonism" },
          { from: "bb-class", to: "jg-arm", label: "β1 on JG cells" },
          { from: "bb-class", to: "av-arm", label: "class II effect" },
          { from: "bb-class", to: "remodel-arm", label: "neurohormonal shield" },
          {
            from: "heart-arm",
            to: "docks-out",
            label: "angina · HTN · HCM · MI",
          },
          { from: "jg-arm", to: "docks-out", label: "hypertension" },
          { from: "av-arm", to: "docks-out", label: "SVT (eg, atrial fibrillation)" },
          {
            from: "remodel-arm",
            to: "docks-out",
            label: "heart failure · MI mortality",
          },
        ],
      },
    },
    {
      id: "selectivity-lane-map",
      title:
        "The four lanes: selectivity decides the reach — β1-only, β1+β2, α1+β, and nebivolol's β1+β3",
      context: "The SELECTIVITY rows of the printed table (book 244)",
      flow: {
        nodes: [
          {
            id: "lanes",
            label: "FOUR LANES — the selectivity directory",
            sublabel:
              "Input — the page's SELECTIVITY column sorts the class: the lane you pick decides which receptors are blocked and therefore which organs pay.",
            variant: "input",
          },
          {
            id: "b1-lane",
            label: "β1-SELECTIVE (β1 > β2)",
            sublabel:
              "Target — atenolol, betaxolol, bisoprolol, esmolol, metoprolol (the A-to-M drugs): the one cardiac lock — heart, JG cells, AV node — relatively sparing the β2 bronchi.",
            variant: "target",
          },
          {
            id: "nonsel-lane",
            label: "NONSELECTIVE (β1 = β2)",
            sublabel:
              "Target — nadolol, propranolol, timolol (the N-to-Z drugs): both β locks — the β1 core plus bronchial β2 (asthma/COPD exacerbations) and the masked-hypoglycemia tax.",
            variant: "target",
          },
          {
            id: "dual-lane",
            label: "α1-SELECTIVE + NONSELECTIVE β",
            sublabel:
              "Target — carvedilol, labetalol (the modified-suffix drugs): β1 + β2 + α1 vascular blockade — vasodilation stacked on the β core.",
            variant: "target",
          },
          {
            id: "neb-lane",
            label: "NEBIVOLOL — β1 block + β3 stimulation",
            sublabel:
              "Target — combines cardiac-selective β1-adrenergic blockade with stimulation of β3-receptors (activate NO synthase in the vasculature and ↓ SVR) — NebivOlol increases NO.",
            variant: "target",
          },
          {
            id: "reach",
            label: "PHARMACOLOGIC REACH",
            sublabel:
              "Output — pick the lane and you have predicted the patient: β1-only is the comorbidity-safest lane (asthma/COPD), the N-to-Z lane pays the β2 tax everywhere, the dual lane adds α1 vasodilation (and both carve out uses in the trio-anchored docks), and nebivolol ends in NO.",
            variant: "output",
          },
        ],
        edges: [
          { from: "lanes", to: "b1-lane", label: "A to M (1st half of alphabet)" },
          { from: "lanes", to: "nonsel-lane", label: "N to Z (2nd half of alphabet)" },
          { from: "lanes", to: "dual-lane", label: "modified suffixes (not plain -olol)" },
          { from: "lanes", to: "neb-lane", label: "the β3 exception" },
          {
            from: "b1-lane",
            to: "reach",
            label: "cardiac lock only — safest in asthma/COPD",
          },
          {
            from: "nonsel-lane",
            to: "reach",
            label: "bronchi + masked hypoglycemia + variceal prophylaxis",
          },
          {
            from: "dual-lane",
            to: "reach",
            label: "+ α1 vasodilation",
          },
          { from: "neb-lane", to: "reach", label: "NO synthase → ↓ SVR" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "beta-blocker-map",
      title: "The β-blocker directory: four lanes, ten docks (an original KYP diagram)",
      caption:
        "An original KYP diagram of the β-blocker page (book 244): ZONE A, THE SELECTIVITY DIRECTORY — four stacked lanes with the drug chips and their printed application anchors: the β1-SELECTIVE lane (β1 > β2: atenolol, betaxolol, bisoprolol, esmolol, metoprolol — First Aid's 'A to M' alphabet marker), the NONSELECTIVE lane (β1 = β2: nadolol, propranolol, timolol — the 'N to Z' marker), the α1+β DUAL lane (carvedilol, labetalol — 'modified suffixes'), and the NEBIVOLOL lane (β1 blockade + β3-receptor stimulation → NO synthase → ↓ SVR — 'NebivOlol increases NO'); ZONE B, THE TEN DOCKS — the ten printed applications in row order (angina, glaucoma, heart failure with the mortality trio, hypertension, thyroid storm, HCM, migraine, MI, SVT, variceal bleeding) each with its printed action gist and named drug anchors (Timolol; Propranolol; Metoprolol, esmolol; Nadolol/propranolol/carvedilol); and ZONE C, THE CLASSIC-EXAM BAND — the asthma/COPD-vs-lane rule, the cocaine-associated chest-pain controversy (unopposed α-adrenergic stimulation), and the masked-hypoglycemia toll.",
      notice:
        "Census (pdfimages): ZERO raster images on pdf 266 — the page is one large vector/text table; the VLM census (glm-4.6v, 120-dpi render) confirms no figures, photographs, margin notes, or footnotes — the page's mnemonics print in red inside the table's NOTES-EXAMPLES cells and are carried VERBATIM, attributed to First Aid (β-blockers curb mortality; no portal circulation; A to M / N to Z; modified suffixes; NebivOlol increases NO). This directory graphic is an ORIGINAL KYP ADAPTATION — original artwork and layout conveying the printed table's content; the table itself is carried verbatim in the next block. The four-lane framing (three lanes and a turbo) is a KYP design.",
    },
    {
      kind: "table",
      title:
        "Book 244 — the printed β-blocker table, carried verbatim (every printed row, in printed order)",
      intro:
        "The whole subsection is one table: eleven drugs in the alphabetical list, ten application rows, then the ADVERSE EFFECTS row and the four SELECTIVITY rows. Text-layer artifacts are adjudicated in the caption (the print shows β1-receptor, long-term, and β3-receptors hyphenated; 'NonZelective' is the source's own printed capital-Z quirk, carried exactly).",
      columns: ["APPLICATION", "ACTIONS (verbatim)", "NOTES/EXAMPLES (verbatim)"],
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
          "Hyperthyroidism/ thyroid storm",
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
        [
          "ADVERSE EFFECTS",
          "Erectile dysfunction, cardiovascular (bradycardia, AV block, HF), CNS (seizures, sleep alterations), dyslipidemia (metoprolol), masked hypoglycemia, asthma/COPD exacerbations",
          "Use of β-blockers for acute cocaine-associated chest pain remains controversial due to unsubstantiated concern for unopposed α-adrenergic stimulation",
        ],
        [
          "SELECTIVITY — β1-selective",
          "β1-selective antagonists (β1 > β2)—atenolol, betaxolol, bisoprolol, esmolol, metoprolol",
          "Selective antagonists mostly go from A to M (β1 with 1st half of alphabet)",
        ],
        [
          "SELECTIVITY — nonselective",
          "Nonselective antagonists (β1 = β2)—nadolol, propranolol, timolol",
          "NonZelective antagonists mostly go from N to Z (β2 with 2nd half of alphabet)",
        ],
        [
          "SELECTIVITY — α1 + β",
          "Nonselective β-adrenergic, α1-selective antagonists—carvedilol, labetalol",
          "Nonselective β-adrenergic and α1-selective antagonists have modified suffixes (instead of \"-olol\")",
        ],
        [
          "SELECTIVITY — nebivolol",
          "Nebivolol combines cardiac-selective β1-adrenergic blockade with stimulation of β3-receptors (activate NO synthase in the vasculature and ↓ SVR)",
          "NebivOlol increases NO",
        ],
      ],
      caption:
        "Verbatim carries, documented: (1) the printed SELECTIVITY notes cell reads 'NonZelective' with a capital Z — the source's own quirk (its left-hand ACTIONS cell of the same row prints 'Nonselective' normally); (2) the text layer runs together 'β1receptor' and 'longterm' — the print shows 'β1-receptor' and 'long-term', the hyphens sitting at line breaks that pdftotext dropped (adjudicated by pdftotext -bbox baselines + a 200-dpi VLM render); (3) the text layer's 'β3 -receptors' stray space — the print shows 'β3-receptors'; (4) the 'Propranolol' and 'Effective for prevention' NOTES cells emit after the footer slug in the text layer (red mnemonic text drawn late in the content stream) — their true rows are pinned by bbox baselines: Propranolol belongs to the Hyperthyroidism/thyroid storm row and 'Effective for prevention' to the Migraine row. The drug list printed above the table: 'Atenolol, betaxolol, bisoprolol, carvedilol, esmolol, labetalol, metoprolol, nadolol, nebivolol, propranolol, timolol.'",
    },
    {
      kind: "compare",
      title:
        "The lane decision the exam actually tests — β1-selective (A to M) vs nonselective (N to Z)",
      intro:
        "Same β1 core, different collateral reach. Both columns are built from the printed SELECTIVITY and ADVERSE EFFECTS rows.",
      columns: ["β1-SELECTIVE (β1 > β2)", "NONSELECTIVE (β1 = β2)"],
      rows: [
        {
          label: "Printed members",
          a: "Atenolol, betaxolol, bisoprolol, esmolol, metoprolol",
          b: "Nadolol, propranolol, timolol",
        },
        {
          label: "First Aid's alphabet marker",
          a: "Selective antagonists mostly go from A to M (β1 with 1st half of alphabet)",
          b: "NonZelective antagonists mostly go from N to Z (β2 with 2nd half of alphabet)",
        },
        {
          label: "Receptors blocked",
          a: "The one cardiac lock: β1 — heart (rate, contractility), JG cells (renin), AV node",
          b: "Both locks: β1 everywhere above PLUS β2 — bronchi, and the adrenergic warning system for hypoglycemia",
        },
        {
          label: "The comorbidity question",
          a: "The safer lane when β2 blockade is dangerous (asthma/COPD) — β1-selective agents 'mostly' spare the bronchi",
          b: "Asthma/COPD exacerbations print in the ADVERSE EFFECTS row — this lane pays the β2 tax",
        },
        {
          label: "Printed named uses",
          a: "Heart failure mortality trio (bisoprolol, metoprolol); SVT (metoprolol, esmolol)",
          b: "Glaucoma (timolol); thyroid storm (propranolol); variceal prophylaxis (nadolol, propranolol)",
        },
        {
          label: "When the exam wants it",
          a: "'Asthmatic/COPD patient who needs β-blockade' → pick the A-to-M agent",
          b: "'Reduce portal pressure / control the storm / dry the eye' → the N-to-Z anchors",
        },
      ],
    },
    {
      kind: "list",
      title: "The six adverse-effect tolls — the printed ADVERSE EFFECTS row unpacked",
      intro:
        "The ADVERSE EFFECTS ACTIONS cell lists six groups; every one is β-receptor logic you can reconstruct from the lanes.",
      items: [
        {
          lead: "SEX — erectile dysfunction",
          text: "The first printed toll; a classic compliance-limiting adverse effect of the class.",
        },
        {
          lead: "PUMP — cardiovascular: bradycardia, AV block, HF",
          text: "β1 blockade overshooting: the SA node slows (bradycardia), the AV node fails to conduct (AV block), and a decompensated ventricle loses its inotropic crutch (HF) — the reason β-blockers are titrated slowly in heart failure and held in acute decompensation.",
        },
        {
          lead: "HEAD — CNS: seizures, sleep alterations",
          text: "The printed CNS tolls of lipophilic members of the class crossing into the brain.",
        },
        {
          lead: "FATS — dyslipidemia (metoprolol)",
          text: "The printed row names metoprolol specifically — the one drug-called-out metabolic toll on the page.",
        },
        {
          lead: "HIDDEN SUGAR — masked hypoglycemia",
          text: "β-blockade hides the adrenergic warning signs of hypoglycemia (the trembling, racing, sweating alarms) — the diabetic patient on insulin can drop silently; the classic exam pairing with the N-to-Z lane.",
        },
        {
          lead: "WHEEZE — asthma/COPD exacerbations",
          text: "β2 blockade in the bronchi — the toll that decides lanes: avoid nonselective agents when the airways matter (the printed reason the A-to-M lane exists).",
        },
      ],
    },
    {
      kind: "steps",
      title: "Reading any β-blocker question in four moves",
      intro:
        "The whole page distilled into an ordered decision path — LANE, LOCKS, REACH, DOCK.",
      steps: [
        {
          label: "LANE — name the selectivity lane before anything else",
          detail:
            "β1-selective (atenolol, betaxolol, bisoprolol, esmolol, metoprolol — A to M), nonselective (nadolol, propranolol, timolol — N to Z), α1+β dual (carvedilol, labetalol — modified suffixes), or nebivolol (β1 + β3). First Aid's alphabet markers do this move for you: first half of the alphabet = β1 with '1', second half = β2 with '2'.",
        },
        {
          label: "LOCKS — count the receptors the lane blocks",
          detail:
            "β1-selective: the cardiac lock only. Nonselective: cardiac + β2. Carvedilol/labetalol: cardiac + β2 + α1. Nebivolol: cardiac β1 blockade with β3 stimulation. The locks are the entire pharmacology.",
        },
        {
          label: "REACH — predict which organs pay, including the tolls",
          detail:
            "β1: ↓ heart rate and contractility, ↓ renin (JG cells), ↓ AV conduction — bradycardia/AV block/HF if overshot. β2: bronchospasm (asthma/COPD exacerbations) and masked hypoglycemia. α1: vasodilation. β3: NO synthase → ↓ SVR. Any β-blocker + cocaine: the unopposed α-adrenergic stimulation controversy.",
        },
        {
          label: "DOCK — match the reach to the printed application and its named anchor",
          detail:
            "Ten docks: angina (↓ O2 consumption), glaucoma (timolol — ↓ aqueous humor), heart failure (bisoprolol, carvedilol, metoprolol — curb mortality), hypertension (↓ CO + ↓ renin), thyroid storm (propranolol — ↓ heart rate, ↓ tremor), HCM (↑ filling time), migraine (↓ nitric oxide production — effective for prevention), MI (short-term ↓ O2 demand, long-term ↓ mortality), SVT (metoprolol, esmolol — ↓ AV conduction, class II), varices (nadolol, propranolol, carvedilol — ↓ portal pressure, prophylactic).",
        },
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title:
        "The two classic exam rules printed on this page — and the third everyone forgets",
      body:
        "RULE 1 (the airway rule): asthma/COPD exacerbations print in the ADVERSE EFFECTS row — β2 blockade constricts the airways, so when a patient with reactive airways needs β-blockade, the exam wants a β1-selective (A-to-M) agent. RULE 2 (the cocaine rule): 'Use of β-blockers for acute cocaine-associated chest pain remains controversial due to unsubstantiated concern for unopposed α-adrenergic stimulation' — the worry is that blocking β2 vasodilation leaves α1 vasoconstriction unopposed; note the printed wording carefully: the concern is UNSUBSTANTIATED and use REMAINS CONTROVERSIAL (the exam quotes this exact framing). RULE 3 (the diabetes rule): masked hypoglycemia — β-blockade silences the adrenergic alarm of a falling glucose; suspect it in any diabetic on insulin who becomes confused without the usual trembling and tachycardia.",
    },
    {
      kind: "callout",
      variant: "memory",
      title: "The page's own printed mnemonics — First Aid's, verbatim (not KYP's)",
      body:
        "Six mnemonic devices print in red inside the table's NOTES-EXAMPLES cells, all carried verbatim and attributed: (1) 'Bisoprolol, carvedilol, metoprolol (β-blockers curb mortality)' — the heart-failure mortality trio; (2) 'Nadolol, propranolol, carvedilol for no portal circulation' — the variceal prophylaxis trio (N-P-C → No Portal Circulation); (3) 'Selective antagonists mostly go from A to M (β1 with 1st half of alphabet)'; (4) 'NonZelective antagonists mostly go from N to Z (β2 with 2nd half of alphabet)' — with the printed capital-Z quirk preserved; (5) 'Nonselective β-adrenergic and α1-selective antagonists have modified suffixes (instead of \"-olol\")' — carvedilol and labetalol; (6) 'NebivOlol increases NO' — the capital-O flag on nebivolol's β3 → NO synthase → ↓ SVR pathway. The four mnemonics in the Memory section below (THREE LANES AND A TURBO; EYE, STORM, WIRE, VARIX, PIPE; SIX TOLLS OF THE -OLOL; PICK THE LOCK, THEN BLOCK) are KYP originals layered on top.",
    },
  ],
  drugs: [
    {
      drug: "Metoprolol",
      klass: "β1-selective β-blocker (A-to-M lane)",
      target: "β1-adrenergic receptors (β1 > β2)",
      mechanism:
        "Competitive β1 antagonism — ↓ heart rate and contractility, ↓ renin secretion (β1-receptor blockade on JG cells), ↓ AV conduction velocity (class II antiarrhythmic)",
      effect:
        "↓ O2 consumption; ↓ cardiac output + ↓ renin; slowed AV nodal conduction; long-term prevention of deleterious cardiac remodeling",
      uses:
        "Printed anchors: heart failure (mortality trio — bisoprolol, carvedilol, metoprolol) and supraventricular tachycardia (eg, atrial fibrillation) with esmolol; also angina, hypertension, MI (class rows)",
      adverse:
        "Class tolls: bradycardia, AV block, HF; masked hypoglycemia; and the one drug-called-out toll on the page — dyslipidemia (metoprolol)",
      clue: "A-to-M lane + a printed dyslipidemia flag — the 'M' of the mortality trio and of the SVT pair.",
    },
    {
      drug: "Esmolol",
      klass: "β1-selective β-blocker (A-to-M lane)",
      target: "β1-adrenergic receptors (β1 > β2)",
      mechanism:
        "Competitive β1 antagonism — ↓ AV conduction velocity (class II antiarrhythmic)",
      effect: "Slowed AV nodal conduction — rate control",
      uses:
        "Printed anchor: supraventricular tachycardia (eg, atrial fibrillation) — 'Metoprolol, esmolol'",
      adverse:
        "Class tolls: bradycardia, AV block, HF; masked hypoglycemia",
      clue: "The A-to-M lane's second SVT name — pairs with metoprolol in the printed NOTES cell.",
    },
    {
      drug: "Propranolol",
      klass: "Nonselective β-blocker (N-to-Z lane)",
      target: "β1 = β2 adrenergic receptors",
      mechanism:
        "Competitive antagonism at BOTH β receptors — the full β1 core plus bronchial and metabolic β2 blockade",
      effect:
        "↓ heart rate and contractility; ↓ renin; ↓ AV conduction; symptom control in thyrotoxicosis (↓ heart rate, ↓ tremor); ↓ hepatic venous pressure gradient",
      uses:
        "Printed anchors: hyperthyroidism/thyroid storm (symptom control) and variceal bleeding prophylaxis (nadolol, propranolol, carvedilol); also angina, hypertension, MI (class rows)",
      adverse:
        "Asthma/COPD exacerbations (β2); masked hypoglycemia; CNS (seizures, sleep alterations); bradycardia, AV block, HF; erectile dysfunction",
      clue: "The storm-and-varix drug of the N-to-Z lane — 'N to Z (β2 with 2nd half of alphabet)'.",
    },
    {
      drug: "Nadolol",
      klass: "Nonselective β-blocker (N-to-Z lane)",
      target: "β1 = β2 adrenergic receptors",
      mechanism:
        "Competitive antagonism at both β receptors; ↓ hepatic venous pressure gradient and portal hypertension (prophylactic use)",
      effect: "Reduced portal pressure — variceal prophylaxis",
      uses: "Printed anchor: variceal bleeding — 'Nadolol, propranolol, carvedilol for no portal circulation'",
      adverse: "Asthma/COPD exacerbations; masked hypoglycemia; bradycardia, AV block, HF",
      clue: "The N of the 'no portal circulation' trio — N-to-Z lane by both name and use.",
    },
    {
      drug: "Timolol",
      klass: "Nonselective β-blocker (N-to-Z lane)",
      target: "β1 = β2 adrenergic receptors",
      mechanism: "↓ production of aqueous humor",
      effect: "Lowered intraocular pressure",
      uses: "Printed anchor: glaucoma — the only β-blocker named to the glaucoma row",
      adverse: "Class tolls incl. asthma/COPD exacerbations; masked hypoglycemia",
      clue: "The glaucoma -olol — 'Timolol' is the glaucoma row's entire printed NOTES cell.",
    },
    {
      drug: "Carvedilol",
      klass: "Nonselective β + α1-selective β-blocker (modified-suffix lane)",
      target: "β1, β2, and α1-adrenergic receptors",
      mechanism:
        "Nonselective β-adrenergic blockade + α1-selective antagonism (vasodilation); blockade of neurohormonal stress → prevention of deleterious cardiac remodeling",
      effect: "↓ mortality in heart failure; ↓ hepatic venous pressure gradient (prophylactic)",
      uses:
        "Printed anchors: heart failure (mortality trio) and variceal bleeding prophylaxis",
      adverse: "Class tolls incl. asthma/COPD exacerbations (nonselective β); bradycardia, AV block, HF",
      clue: "Modified suffix (-dilol, not plain -olol) = the α1+β dual lane — one of only two drugs there.",
    },
    {
      drug: "Labetalol",
      klass: "Nonselective β + α1-selective β-blocker (modified-suffix lane)",
      target: "β1, β2, and α1-adrenergic receptors",
      mechanism: "Nonselective β-adrenergic blockade + α1-selective antagonism",
      effect: "β-blockade with α1-mediated vasodilation stacked on top",
      uses: "Printed anchor: the SELECTIVITY row pairs it with carvedilol as the modified-suffix duo",
      adverse: "Class tolls incl. asthma/COPD exacerbations (nonselective β)",
      clue: "Modified suffix (-alol) = α1+β dual lane — carveDILol, labetalOL: 'modified suffixes (instead of \"-olol\")'.",
    },
    {
      drug: "Nebivolol",
      klass: "β1-selective β-blocker + β3 agonist (the turbo)",
      target: "β1-adrenergic blockade; β3-receptor stimulation",
      mechanism:
        "Combines cardiac-selective β1-adrenergic blockade with stimulation of β3-receptors (activate NO synthase in the vasculature and ↓ SVR)",
      effect: "β1 blockade + NO-mediated ↓ systemic vascular resistance",
      uses: "Printed anchor: its own SELECTIVITY row — 'NebivOlol increases NO'",
      adverse: "Class tolls (β1 core)",
      clue: "The one β-blocker that ENDS in NO: NebivOlol increases NO.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 58-year-old woman with moderate persistent asthma and a recent myocardial infarction is started on a β-blocker for secondary prevention; two days later she presents with wheezing and dyspnea.",
        discriminator:
          "Asthma/COPD exacerbations print in the ADVERSE EFFECTS row — the β2 tax of the nonselective lane",
        concept: "Lane selection by comorbidity (β1-selective vs nonselective)",
        answer:
          "The β2 blockade of a nonselective agent (β1 = β2 — nadolol, propranolol, timolol) constricts reactive airways. When a patient with asthma or COPD needs β-blockade (post-MI mortality benefit, angina, rate control), choose a β1-selective antagonist (β1 > β2) — atenolol, betaxolol, bisoprolol, esmolol, metoprolol — the A-to-M lane that 'mostly' spares the bronchi.",
      },
      {
        stem: "A 66-year-old man with reduced ejection fraction heart failure, already on an ACE inhibitor, is asked which additional drug class lowers his mortality; the answer names three specific agents.",
        discriminator:
          "'Bisoprolol, carvedilol, metoprolol (β-blockers curb mortality)' — the heart-failure row's printed NOTES cell",
        concept: "The heart-failure mortality trio",
        answer:
          "Blockade of neurohormonal stress → prevention of deleterious cardiac remodeling → ↓ mortality. The trio the exam expects: bisoprolol, carvedilol, metoprolol — β-blockers curb mortality. Note the trio deliberately spans lanes (two β1-selective agents plus the α1+β dual carvedilol) — the mortality benefit is the class's β1 core, not any one lane.",
      },
      {
        stem: "A 34-year-old woman with Graves disease develops fever, tachycardia, and tremor; after iodine and thionamide therapy, a β-blocker is added for immediate symptom relief.",
        discriminator:
          "'Symptom control (↓ heart rate, ↓ tremor)' with the printed anchor 'Propranolol'",
        concept: "Thyroid storm symptom control",
        answer:
          "The hyperthyroidism/thyroid storm row: β-blockade controls the adrenergic symptoms — ↓ heart rate, ↓ tremor — with propranolol as the printed named anchor (its β2 blockade also blunts the peripheral T4→T3 conversion symptoms the exam describes as adrenergic overload).",
      },
      {
        stem: "A 71-year-old man with open-angle glaucoma and a contraindication to prostaglandin analogs is prescribed an ophthalmic β-blocker.",
        discriminator:
          "'↓ production of aqueous humor' with the printed anchor 'Timolol'",
        concept: "Glaucoma — the one non-systemic dock",
        answer:
          "The glaucoma row: timolol lowers intraocular pressure by ↓ production of aqueous humor. It is the only drug named to the glaucoma dock, and it sits in the NONSELECTIVE (N-to-Z) lane — which is exactly why a systemic β2-blocking effect (wheeze) is the classic distractor in a glaucoma-vignette patient with asthma.",
      },
      {
        stem: "A 27-year-old man presents with acute chest pain after cocaine use; the team debates adding a β-blocker.",
        discriminator:
          "'Use of β-blockers for acute cocaine-associated chest pain remains controversial due to unsubstantiated concern for unopposed α-adrenergic stimulation'",
        concept: "The cocaine controversy — quote the printed framing exactly",
        answer:
          "The ADVERSE EFFECTS row's second cell: the concern is that β-blockade removes β2-mediated vasodilation, leaving α1 vasoconstriction unopposed and worsening coronary and systemic vasoconstriction. The printed wording is precise — the concern is UNSUBSTANTIATED and use REMAINS CONTROVERSIAL — so the exam answer tracks that exact framing rather than an absolute contraindication.",
      },
    ],
    traps: [
      {
        a: "β1-selective agents (atenolol, betaxolol, bisoprolol, esmolol, metoprolol)",
        b: "Nonselective agents (nadolol, propranolol, timolol)",
        whyConfused:
          "Every member of both lanes ends in -olol and blocks the same β1 core — the suffix alone tells you nothing about selectivity",
        keyDifference:
          "β1-selective antagonists (β1 > β2) block the one cardiac lock; nonselective antagonists (β1 = β2) add bronchial β2 — the asthma/COPD exacerbation and masked-hypoglycemia lane. First Aid's printed sort: selective = A to M (1st half of alphabet, β1 with 1); nonselective = N to Z (2nd half, β2 with 2)",
        clue:
          "Asthma/COPD or masked hypoglycemia in the stem → the lane matters; first letter A–M vs N–Z settles it in one second",
      },
      {
        a: "Propranolol (the thyroid-storm, varix, N-to-Z drug)",
        b: "Timolol (the glaucoma drug)",
        whyConfused:
          "Both sit in the same nonselective lane (β1 = β2), so 'both block β2' is true of either",
        keyDifference:
          "Their printed docks differ: propranolol anchors symptom control in hyperthyroidism/thyroid storm (↓ heart rate, ↓ tremor) and variceal prophylaxis; timolol is the glaucoma row's named drug (↓ production of aqueous humor)",
        clue: "Sort nonselective drugs by their DOCK, not their lane: storm/varix = propranolol; eye = timolol",
      },
      {
        a: "Carvedilol and labetalol (modified suffixes)",
        b: "The plain -olol agents",
        whyConfused:
          "Carvedilol and labetalol still end in letters that look like -olol",
        keyDifference:
          "The printed rule: 'Nonselective β-adrenergic and α1-selective antagonists have modified suffixes (instead of \"-olol\")' — carvedilol (-dilol) and labetalol (-alol) are the α1+β duals, adding α1 vascular blockade to nonselective β-blockade",
        clue:
          "See a modified suffix → expect THREE receptors (β1, β2, α1), not two",
      },
      {
        a: "Nebivolol (β1 blockade + β3 stimulation)",
        b: "Labetalol (β1/β2 blockade + α1 blockade)",
        whyConfused:
          "Both are 'the weird β-blockers' that break the plain -olol pattern, and both end in a modified suffix",
        keyDifference:
          "Nebivolol combines cardiac-selective β1-adrenergic blockade with stimulation of β3-receptors (activate NO synthase in the vasculature and ↓ SVR) — it ADDS a stimulated receptor; labetalol adds a BLOCKED one (α1). 'NebivOlol increases NO' vs labetalol's α1 vasodilation",
        clue: "NO = NEBivOlol; α1 = lABEtalol (and carvedilol)",
      },
    ],
    pivots: [
      {
        lookAlike:
          "Any question naming a specific -olol — what does this drug actually block?",
        differentiator:
          "Name the lane FIRST, from the drug's own letters: A-to-M first-letter (atenolol, betaxolol, bisoprolol, esmolol, metoprolol) = β1 > β2; N-to-Z (nadolol, propranolol, timolol) = β1 = β2; modified suffix (carvedilol, labetalol) = add α1; nebivolol = β1 block + β3 stimulation.",
        correctPath:
          "Lane from the name → count the locks → predict the reach (therapeutic docks AND adverse tolls) — never answer a -olol question from the suffix alone",
      },
      {
        lookAlike:
          "A 'which β-blocker is most appropriate in this patient?' question with a comorbidity in the stem",
        differentiator:
          "Route the comorbidity through the lanes: asthma/COPD → the A-to-M lane (β1-selective); heart failure with mortality benefit → the trio (bisoprolol, carvedilol, metoprolol — note carvedilol is α1+β yet still in the trio, because the mortality benefit rides the β1 core); variceal prophylaxis → the no-portal-circulation trio (nadolol, propranolol, carvedilol); thyroid storm symptoms → propranolol.",
        correctPath:
          "The comorbidity picks the lane; the named anchor picks the drug — and when the comorbidity and the anchor conflict (an asthmatic who needs the carvedilol of the HF trio), the exam wants the conflict named, not ignored",
      },
      {
        lookAlike:
          "The uses WITHOUT a printed drug anchor vs the uses WITH one",
        differentiator:
          "Five docks print named anchors — glaucoma (Timolol), heart failure (Bisoprolol, carvedilol, metoprolol), thyroid storm (Propranolol), SVT (Metoprolol, esmolol), varices (Nadolol, propranolol, carvedilol) — while angina, hypertension, HCM, migraine ('Effective for prevention' alone), and MI print as class-level rows with no named drug.",
        correctPath:
          "For the anchored docks, the exam can ask 'which agent'; for the class-level docks, the answer is the class or its mechanism (↓ heart rate and contractility → ↓ O2 consumption; ↓ renin from JG cells; ↑ filling time) — match the question type to the dock type before choosing an answer",
      },
    ],
    miniCase: {
      vignette:
        "A 60-year-old man with a 30-pack-year smoking history and moderate COPD survives an ST-elevation myocardial infarction. At discharge, the team adds a β-blocker for secondary prevention — the myocardial infarction row's long-term ↓ mortality benefit. His baseline medication list is otherwise unremarkable, and he uses an albuterol inhaler daily. Which of the following β-blockers is the most appropriate choice for this patient?",
      question:
        "Pick the agent — the answer must capture BOTH the post-MI mortality indication and the COPD-safety constraint; choose the option that correctly reconciles the two.",
      options: [
        {
          label:
            "Metoprolol — a β1-selective antagonist (β1 > β2), so the post-MI β1 blockade is delivered while the bronchi are 'mostly' spared",
          text: "The A-to-M lane is the COPD-safe way to get the post-MI benefit.",
          correct: true,
          why:
            "Correct on both layers. The myocardial infarction row prints '↓ O2 demand (short-term), ↓ mortality (long-term)' — a class-level benefit that rides the β1 core, so it does not require any particular lane. The constraint comes from the ADVERSE EFFECTS row: 'asthma/COPD exacerbations' is the β2 toll. Metoprolol sits in the printed β1-selective lane — 'β1-selective antagonists (β1 > β2)—atenolol, betaxolol, bisoprolol, esmolol, metoprolol' — delivering the β1 blockade (↓ heart rate and contractility, ↓ AV conduction, ↓ renin from JG cells) while relatively sparing the β2 bronchi, which First Aid's own alphabet rule encodes ('Selective antagonists mostly go from A to M').",
        },
        {
          label:
            "Propranolol — a nonselective antagonist (β1 = β2) with proven class benefit, chosen for its additional printed anchors in thyroid storm and variceal prophylaxis",
          text: "More blocking sounds like more protection after an MI.",
          why:
            "Wrong lane for this patient. Propranolol is the printed nonselective anchor — 'Nonselective antagonists (β1 = β2)—nadolol, propranolol, timolol' — and its β2 blockade is precisely the toll the ADVERSE EFFECTS row names for this patient's COPD: asthma/COPD exacerbations. A daily-albuterol patient on propranolol risks bronchospasm; its storm/varix anchors are irrelevant to a post-MI indication.",
        },
        {
          label:
            "Timolol — a nonselective antagonist, chosen because it is the glaucoma drug and the patient's intraocular pressure should also be protected",
          text: "Treat two problems with one drug.",
          why:
            "Same lane problem, plus an invented indication. Timolol's printed dock is glaucoma ('↓ production of aqueous humor' — Timolol is that row's entire NOTES cell); nothing in the stem suggests glaucoma. Like propranolol it is nonselective (β1 = β2, the N-to-Z lane), so it imports the same asthma/COPD exacerbation risk into a COPD patient — the opposite of what the discharge plan needs.",
        },
        {
          label:
            "Carvedilol — one of the three printed heart-failure mortality agents, chosen because a post-MI β-blocker should come from a mortality-proven trio",
          text: "If a trio is mortality-proven in heart failure, it must be the post-MI pick.",
          why:
            "The trio logic is real but misapplied to this patient's airway. Carvedilol IS in the printed mortality trio ('Bisoprolol, carvedilol, metoprolol (β-blockers curb mortality)') and it does carry the class's long-term ↓ mortality benefit — but it is a NONSELECTIVE β-adrenergic antagonist with added α1 blockade ('Nonselective β-adrenergic, α1-selective antagonists—carvedilol, labetalol'), so its β2 blockade carries the same asthma/COPD exacerbation toll as propranolol. In a patient whose bronchi must be spared, the β1-selective lane is the appropriate way to deliver the β1 core; the exam's version of this stem always resolves the conflict in favor of the airway.",
        },
      ],
      reasoning:
        "The stem pairs an indication (post-MI long-term ↓ mortality — a class-level benefit of the β1 core) with a constraint (moderate COPD on daily albuterol — the printed asthma/COPD exacerbation toll of β2 blockade). The reconciliation: the mortality benefit does not require a nonselective agent, but avoiding the exacerbation requires avoiding β2 — so the β1-selective (A-to-M) lane is the only path that satisfies both. Distractor 2 (propranolol) and distractor 3 (timolol) are both N-to-Z nonselective agents that import the β2 toll; timolol adds an invented glaucoma indication. Distractor 4 (carvedilol) is the strongest trap because it is genuinely mortality-proven in heart failure — but it is nonselective β + α1, so it pays the same β2 tax, and the printed table never ties the MI row to the trio the way the heart-failure row is tied. Name the lane, count the locks, check the comorbidity: metoprolol is the A-to-M agent that delivers the β1 core to a COPD patient.",
    },
  },
  mnemonics: [
    {
      code: "THREE LANES AND A TURBO",
      meaning:
        "The β-blocker directory as a highway: LANE 1 (β1-selective, β1 > β2) carries the A-to-M commuters — atenolol, betaxolol, bisoprolol, esmolol, metoprolol; LANE 2 (nonselective, β1 = β2) carries the N-to-Z traffic — nadolol, propranolol, timolol; LANE 3 (α1+β dual) is the two-truck lane — carvedilol and labetalol, flagged 'modified suffixes (instead of \"-olol\")'; and the TURBO is nebivolol — β1 blockade with β3 stimulation, the only agent that ENDS in NO (NebivOlol increases NO → NO synthase → ↓ SVR).",
      memorizes:
        "The printed SELECTIVITY column — which drugs belong to which receptor-lane, including the two modified-suffix duals and nebivolol's β3 exception",
      whenToUse:
        "Any 'which receptors does this -olol block' or 'classify this β-blocker' question — name the lane before touching the options",
      clinical:
        "The lane is the prescription decision: lane 1 for the asthmatic/COPD patient who needs β-blockade, lane 3 when vasodilation is wanted, the turbo when NO-mediated ↓ SVR is the goal.",
    },
    {
      code: "EYE, STORM, WIRE, VARIX, PIPE",
      meaning:
        "The five docks that print a NAMED drug anchor: EYE — timolol dries the eye (glaucoma: ↓ production of aqueous humor); STORM — propranolol stills the storm (thyroid storm: ↓ heart rate, ↓ tremor); WIRE — metoprolol + esmolol slow the wire (SVT: ↓ AV conduction velocity, class II antiarrhythmic); VARIX — nadolol, propranolol, carvedilol dam the varix (prophylactic: ↓ hepatic venous pressure gradient and portal hypertension — First Aid's own 'no portal circulation'); PIPE — nebivolol opens the pipe (β3 → NO synthase → ↓ SVR). The sixth anchor is the TRIO dock: bisoprolol, carvedilol, metoprolol curb mortality in heart failure.",
      memorizes:
        "The printed NOTES/EXAMPLES cells — which β-blocker the exam can name for glaucoma, thyroid storm, SVT, variceal bleeding, the NO pathway, and heart failure",
      whenToUse:
        "Any 'which agent for this indication' question on the anchored docks — and the reverse ('this drug is used for')",
      clinical:
        "The unanchored docks (angina, hypertension, HCM, migraine, MI) are class-level answers; only these six print named drugs, so only these six support a specific-agent answer.",
    },
    {
      code: "SIX TOLLS OF THE -OLOL",
      meaning:
        "The printed ADVERSE EFFECTS row as six tollbooths: SEX (erectile dysfunction), PUMP (cardiovascular — bradycardia, AV block, HF), HEAD (CNS — seizures, sleep alterations), FATS (dyslipidemia — metoprolol, the one drug named), HIDDEN SUGAR (masked hypoglycemia), WHEEZE (asthma/COPD exacerbations).",
      memorizes:
        "The complete printed adverse-effect list, grouped so none is dropped under exam pressure",
      whenToUse:
        "Any β-blocker adverse-effect or contraindication question — and any stem where a subtle toll (silent hypoglycemia, new AV block) is the finding",
      clinical:
        "The WHEEZE and HIDDEN SUGAR tolls are β2-mediated (worst in the N-to-Z lane); the PUMP tolls are the β1 core overshot; the FATS toll is printed for metoprolol specifically.",
    },
    {
      code: "PICK THE LOCK, THEN BLOCK",
      meaning:
        "The reading protocol: LOCK 1 = β1 (heart rate, contractility, JG-cell renin, AV conduction) — the lock EVERY -olol turns; LOCK 2 = β2 (bronchi, the hypoglycemia alarm) — added by the N-to-Z lane and the duals; LOCK 3 = α1 (vascular tone) — added by carvedilol and labetalol; PLUS-LOCK = β3 (NO synthase) — STIMULATED, not blocked, by nebivolol. Pick the lock set the patient can tolerate, then block.",
      memorizes:
        "Which receptor each lane adds, and in what order the exam wants you to count them",
      whenToUse:
        "Any comorbidity-laden β-blocker question — asthma/COPD (spare lock 2), diabetes on insulin (spare lock 2), heart failure (want lock 1 slowly titrated), vasodilation wanted (lock 3)",
      clinical:
        "Reactive airways or insulin-treated diabetes → avoid lock 2 (choose the A-to-M lane); decompensated HF or bradyarrhythmia → even lock 1 must be titrated or held.",
    },
    {
      code: "A TO M / N TO Z (First Aid's own — printed in the table)",
      meaning:
        "The source's own alphabet sort, carried verbatim and attributed: 'Selective antagonists mostly go from A to M (β1 with 1st half of alphabet)' — atenolol, betaxolol, bisoprolol, esmolol, metoprolol — and 'NonZelective antagonists mostly go from N to Z (β2 with 2nd half of alphabet)' — nadolol, propranolol, timolol (the printed capital-Z quirk preserved). Pair the half of the alphabet with the receptor NUMBER: 1st half → β1, 2nd half → β2.",
      memorizes:
        "The printed selectivity split of the two main lanes",
      whenToUse:
        "One-second lane assignment from a drug's first letter — the fastest move on any β-blocker question",
      clinical:
        "First letter A–M → β1 > β2 (the COPD-safer lane); first letter N–Z → β1 = β2 (the wheeze-and-varix lane); modified suffix → the α1 duals.",
    },
    {
      code: "NEBIV-O-LOL INCREASES NO (First Aid's own — printed in the table)",
      meaning:
        "The source's own capital-O flag, carried verbatim and attributed: 'NebivOlol increases NO.' Nebivolol combines cardiac-selective β1-adrenergic blockade with stimulation of β3-receptors (activate NO synthase in the vasculature and ↓ SVR) — the O in nebivolOl is the O in NO.",
      memorizes:
        "Nebivolol's unique dual action and its endpoint (↓ SVR via NO synthase)",
      whenToUse:
        "Any question naming nebivolol, β3 receptors, or NO-mediated vasodilation from a β-blocker",
      clinical:
        "The one β-blocker that both blocks (β1) and stimulates (β3): expect the NO story — vasodilation with ↓ systemic vascular resistance — not just blockade.",
    },
  ],
  rapidReview: {
    s30: [
      "Drug list (printed, alphabetical): Atenolol, betaxolol, bisoprolol, carvedilol, esmolol, labetalol, metoprolol, nadolol, nebivolol, propranolol, timolol",
      "β1-selective (β1 > β2): atenolol, betaxolol, bisoprolol, esmolol, metoprolol — mostly A to M",
      "Nonselective (β1 = β2): nadolol, propranolol, timolol — mostly N to Z",
      "Nonselective β + α1-selective: carvedilol, labetalol — modified suffixes (instead of \"-olol\")",
      "Nebivolol: cardiac-selective β1 blockade + β3-receptor stimulation (activate NO synthase in the vasculature and ↓ SVR) — NebivOlol increases NO",
      "Heart failure trio: bisoprolol, carvedilol, metoprolol (β-blockers curb mortality)",
      "Angina: ↓ heart rate and contractility → ↓ O2 consumption; HCM: ↓ heart rate → ↑ filling time, relieving obstruction",
      "Hypertension: ↓ cardiac output + ↓ renin secretion (due to β1-receptor blockade on JG cells)",
      "SVT (eg, atrial fibrillation): ↓ AV conduction velocity (class II antiarrhythmic) — metoprolol, esmolol",
      "Variceal bleeding: ↓ hepatic venous pressure gradient and portal hypertension (prophylactic use) — nadolol, propranolol, carvedilol",
      "Adverse effects: erectile dysfunction; bradycardia, AV block, HF; seizures, sleep alterations; dyslipidemia (metoprolol); masked hypoglycemia; asthma/COPD exacerbations",
      "Cocaine rule (printed verbatim): use for acute cocaine-associated chest pain remains controversial due to unsubstantiated concern for unopposed α-adrenergic stimulation",
    ],
    m3: [
      "THREE LANES AND A TURBO — β1-selective A-to-M; nonselective N-to-Z; α1+β duals (modified suffixes); nebivolol's β3 turbo ends in NO",
      "EYE, STORM, WIRE, VARIX, PIPE (+ the TRIO dock) — timolol; propranolol; metoprolol+esmolol; nadolol/propranolol/carvedilol; nebivolol; and bisoprolol/carvedilol/metoprolol curb mortality",
      "SIX TOLLS OF THE -OLOL — SEX, PUMP, HEAD, FATS (metoprolol), HIDDEN SUGAR, WHEEZE",
      "PICK THE LOCK, THEN BLOCK — every -olol turns β1; N-to-Z adds β2; the duals add α1; nebivolol stimulates β3",
      "First Aid's own printed pair: A TO M (β1, 1st half of alphabet) / N TO Z (β2, 2nd half) — and NEBIV-O-LOL increases NO",
    ],
    m10: [
      "The page is ONE table with three printed columns — APPLICATION / ACTIONS / NOTES-EXAMPLES — twelve application/label rows plus four SELECTIVITY rows; TEN clinical applications print (the batch brief said 'nine uses' — ten docks print, all carried)",
      "No pindolol and no ISA (intrinsic sympathomimetic activity) column print anywhere on pdf 266 — the page sorts by selectivity only; anything ISA is off-page knowledge",
      "The printed capital-Z quirk: the selectivity NOTES cell reads 'NonZelective antagonists mostly go from N to Z' — capital Z mid-word in the print itself (the same row's ACTIONS cell spells 'Nonselective' normally); carried verbatim, never fixed",
      "Text-layer artifacts (adjudicated by pdftotext -bbox + a 200-dpi VLM render): 'β1receptor' and 'longterm' are the hyphenated 'β1-receptor' and 'long-term' with their hyphens sitting at line breaks; 'β3 -receptors' is 'β3-receptors' with a subscript-split stray space",
      "The two red mnemonic NOTES cells ('Propranolol'; 'Effective for prevention') emit AFTER the footer slug in the text layer — red text drawn late in the content stream; bbox baselines pin Propranolol to the thyroid-storm row and 'Effective for prevention' to the migraine row",
      "The Migraine row's printed NOTES cell is 'Effective for prevention' ALONE — the page names no specific migraine drug (do not attribute migraine prophylaxis to a named -olol on this page's evidence)",
      "The heart-failure trio deliberately spans lanes: two A-to-M agents (bisoprolol, metoprolol) plus the α1+β dual carvedilol — the mortality benefit rides the β1 core, not the lane",
      "Census: pdfimages reports ZERO raster images on pdf 266; the VLM census (glm-4.6v) confirms no figures, photographs, margin notes, or footnotes — the mnemonics print in red INSIDE the table cells",
      "Page identity: the running header prints 'SEC TION II' (text-layer split) over 'PHARMACOLOGY'; the footer slug is FAS1_2026_05-Pharmacology.indd 244, stamped 12/19/25 8:07 AM — the same stamp as the sibling autonomic pages",
    ],
  },
  recall: [
    {
      q: "The printed β1-selective lane — the receptor inequality and all five drugs.",
      a: "β1-selective antagonists (β1 > β2) — atenolol, betaxolol, bisoprolol, esmolol, metoprolol (mostly A to M — β1 with 1st half of alphabet).",
    },
    {
      q: "The printed nonselective lane — the receptor equality and all three drugs.",
      a: "Nonselective antagonists (β1 = β2) — nadolol, propranolol, timolol (mostly N to Z — β2 with 2nd half of alphabet).",
    },
    {
      q: "Which two β-blockers add α1-selective blockade, and what printed quirk flags them?",
      a: "Carvedilol and labetalol — nonselective β-adrenergic, α1-selective antagonists; they have modified suffixes (instead of \"-olol\").",
    },
    {
      q: "What does nebivolol combine, and what is the endpoint?",
      a: "Cardiac-selective β1-adrenergic blockade with stimulation of β3-receptors (activate NO synthase in the vasculature and ↓ SVR) — NebivOlol increases NO.",
    },
    {
      q: "The heart-failure mortality trio — and the printed parenthetical that memorizes it.",
      a: "Bisoprolol, carvedilol, metoprolol (β-blockers curb mortality).",
    },
    {
      q: "The hypertension ACTIONS cell, verbatim.",
      a: "↓ cardiac output, ↓ renin secretion (due to β1-receptor blockade on JG cells).",
    },
    {
      q: "The SVT row — the action and the printed drug pair.",
      a: "↓ AV conduction velocity (class II antiarrhythmic) — Metoprolol, esmolol.",
    },
    {
      q: "The variceal bleeding row — the action and the printed mnemonic trio.",
      a: "↓ hepatic venous pressure gradient and portal hypertension (prophylactic use) — Nadolol, propranolol, carvedilol for no portal circulation.",
    },
  ],
  related: [
    {
      title: "Sympatholytics & α-Blockers",
      topicId: "sympatholytics-alpha-blockers",
      note: "The facing page (book 243) is the OTHER half of sympatholysis — the α2-agonists (clonidine, guanfacine, α-methyldopa, tizanidine) and the α-blockers; β-blockers complete the picture of every way the sympathetic signal can be turned down.",
    },
    {
      title: "Phosphodiesterase Inhibitors",
      topicId: "phosphodiesterase-inhibitors",
      note: "The very next page (book 245): the other cAMP/NO-adjacent autonomic drug family — read nebivolol's NO synthase → ↓ SVR pathway against the PDE inhibitors' downstream messengers for the full vasomotor map.",
    },
    {
      title: "Autonomic Receptors: The Wiring Map",
      topicId: "autonomic-receptors",
      note: "The receptor geography this class plugs into (book 234): the α1, α2, β1, β2 chips on cardiac muscle and vessels, the renal vasculature's unique α1/α2/β1/D1 set — the β1 and β2 chips are exactly the locks the four lanes pick.",
    },
    {
      title: "Autonomic Drugs: Synapse Targets & Overview",
      topicId: "autonomic-drugs-synapse",
      note: "The synapse-overview page supplies where NE lands and how drugs intercept it; β-blockers are the receptor-side interception — competitive antagonism at the β chips the wiring map labels.",
    },
  ],
  crossLinks: [
    {
      subject: "Cardiovascular pharmacology & the RAAS axis (the renin dock)",
      connection:
        "The printed hypertension mechanism — ↓ cardiac output, ↓ renin secretion (due to β1-receptor blockade on JG cells) — is the pharmacologic handshake with the RAAS: β1 blockade on the juxtaglomerular apparatus cuts renin release, which is why β-blockers pair with ACE inhibitors/ARBs in heart-failure protocols and why the hypertension dock is written in two mechanistic currencies (hemodynamic ↓ cardiac output + endocrine ↓ renin).",
    },
    {
      subject: "Endocrinology (thyroid storm)",
      connection:
        "The hyperthyroidism/thyroid storm dock: symptom control (↓ heart rate, ↓ tremor) with propranolol — the adrenergic overdrive of thyrotoxicosis is dampened at the β receptor while thionamides and iodine fix the hormone overproduction; a classic cross-subject pairing the exam reuses on both the pharmacology and endocrine sides.",
    },
    {
      subject: "Pulmonary medicine (asthma/COPD)",
      connection:
        "Asthma/COPD exacerbations print in the ADVERSE EFFECTS row — β2 blockade removes bronchodilator tone in reactive airways, which is the entire reason the β1-selective (A-to-M) lane exists and the classic-drug-interaction question (a COPD patient prescribed propranolol or a systemic timolol) writes itself.",
    },
    {
      subject: "Ophthalmology (glaucoma)",
      connection:
        "The glaucoma dock: timolol lowers intraocular pressure by ↓ production of aqueous humor — the one β-blocker use where the therapeutic target is a secretory epithelium rather than the heart, and a frequent cross-subject question because the topical route still carries systemic β2 risk in asthmatics.",
    },
  ],
};
