import type { KypUsMLENote } from "../types";

// Pharmacology — PH-batch 20. Source: FULL pdf page 267 / book 245
// (Pharmacology — Autonomic Drugs: Phosphodiesterase inhibitors — a FULL
// single page, no shared split). Census (pdfimages): ZERO raster images
// — the page is ONE introductory sentence + ONE color-coded table (TYPE
// OF INHIBITOR / MECHANISM OF ACTION / CLINICAL USES / ADVERSE EFFECTS)
// + two superscripted footnotes + the indd footer slug. The VLM census
// (glm-4.6v at 120dpi, staging-ph20/vlm-census.txt — VLM available this
// session; one pass + a deterministic raw-span adjudication) confirms
// the printed row order: Nonspecific (Theophylline) → PDE-5 (sildenafil,
// vardenafil, tadalafil, avanafil — drug names printed in red with the
// -fil endings highlighted) → PDE-4 (Roflumilast) → PDE-3 (Milrinone) →
// "Platelet inhibitors" (Cilostazolᵃ, Dipyridamoleᵇ) — PDE-4 prints
// BEFORE PDE-3 on this page; the printed order is carried verbatim. NO
// margin mnemonics (VLM-confirmed); First Aid's own red in-cell mnemonic
// text ("hot and sweaty," then headache, heartburn, hypotension · PDE-6
// (six) in retina · "fills" the penis) is carried ATTRIBUTED inside the
// verbatim table; the four ALL-CAPS mnemonics here are KYP originals.
// PRINTED-TEXT QUIRKS carried verbatim + documented (PyMuPDF raw spans,
// see the staging census): "↑ ionotropy" is the source's own spelling in
// the milrinone mechanism cell (the same row's uses cell correctly
// prints "(inotrope)"); "cyanopia" is the printed spelling; "blue-tinted"
// prints hyphenated across a line wrap (the cache layer merges it as
// "bluetinted" — the printed hyphen is restored here; the gen-script
// evidence quotes quote the cache lines as-is); the footnote
// superscripts merge in the cache as "Cilostazola"/"Dipyridamoleb" and
// the a/b markers interleave (adjudicated: a = the Cilostazol sentence,
// b = the Dipyridamole sentence). The KYP diagram (pde-inhibitor-map),
// the exam layer, the drug cards, and the memory layer are original.

export const phosphodiesteraseInhibitors: KypUsMLENote = {
  id: "phosphodiesterase-inhibitors",
  title: "Phosphodiesterase Inhibitors",
  subtitle:
    "PDE is the brake on both cyclic nucleotides — it catalyzes the hydrolysis of cAMP and/or cGMP, and every drug on this page releases that brake in a different tissue. Theophylline does it nonspecifically (↓ cAMP hydrolysis → bronchodilation), the -fil family does it at PDE-5 (↓ hydrolysis of cGMP → the penis fills, the pulmonary vasculature opens), milrinone does it at PDE-3 (↑ cAMP → ↑ ionotropy in the failing heart), roflumilast does it at PDE-4 (↑ cAMP in the inflamed airway), and the platelet inhibitors do it in platelets (↑ cAMP → inhibition of aggregation). One enzyme family, five tissue levers — and one contraindication the exam loves: nitrates step on the cGMP gas pedal while PDE-5 inhibitors release the brake.",
  subject: "Pharmacology",
  system:
    "Section II · High-Yield General Principles — Pharmacology: Autonomic Drugs",
  pilotCategory: "Pharmacology mechanism",
  difficulty: 2,
  readTime: 6,
  sourceRef:
    "First Aid 2026, Part 1 pp. 245–245 (Pharmacology — Autonomic Drugs: Phosphodiesterase inhibitors; …)",
  tags: [
    "phosphodiesterase inhibitors",
    "PDE inhibitors",
    "theophylline",
    "sildenafil",
    "vardenafil",
    "tadalafil",
    "avanafil",
    "milrinone",
    "roflumilast",
    "cilostazol",
    "dipyridamole",
    "cAMP",
    "cGMP",
    "nitric oxide",
    "erectile dysfunction",
    "pulmonary hypertension",
    "platelet aggregation",
    "nitrates contraindication",
  ],
  core: {
    what:
      "Phosphodiesterase (PDE) inhibitors inhibit PDE, which catalyzes the hydrolysis of cAMP and/or cGMP, and thereby increase cAMP and/or cGMP. These inhibitors have varying specificity for PDE isoforms and thus have different clinical uses. The printed table runs five rows: NONSPECIFIC (theophylline — ↓ cAMP hydrolysis → ↑ cAMP → bronchial smooth muscle relaxation → bronchodilation, for COPD/asthma, rarely used), PDE-5 (sildenafil, vardenafil, tadalafil, avanafil — ↓ hydrolysis of cGMP → ↑ cGMP → ↑ smooth muscle relaxation by enhancing NO activity → pulmonary vasodilation and ↑ blood flow in corpus cavernosum fills the penis), PDE-4 (roflumilast — ↑ cAMP in neutrophils, granulocytes, and bronchial epithelium, for severe COPD), PDE-3 (milrinone — in cardiomyocytes ↑ cAMP → ↑ Ca2+ influx → ↑ ionotropy and chronotropy; in vascular smooth muscle ↑ cAMP → MLCK inhibition → vasodilation → ↓ preload and afterload, for acute decompensated HF with cardiogenic shock), and the “Platelet inhibitors” row (cilostazolᵃ and dipyridamoleᵇ — in platelets ↑ cAMP → inhibition of platelet aggregation).",
    why:
      "This page is the enzymatic endgame of the second-messenger cascades: cAMP and cGMP carry the G-protein and nitric-oxide signals, and PDE is the single enzyme family that terminates them. Because the isoenzymes are tissue-distributed — PDE-3 in cardiomyocytes and vascular smooth muscle, PDE-4 in the immune cells of the airway, PDE-5 in the corpus cavernosum and pulmonary vasculature, PDE-6 in the retina — inhibiting one isoform raises its nucleotide only where that isoform works, which is why five different drugs sharing one mechanism land in five different specialties (pulmonary, urology, cardiology, and hematology). The class also owns one of the most-tested contraindications in autonomic pharmacology: nitrates increase NO-driven cGMP synthesis while PDE-5 inhibitors decrease cGMP hydrolysis — the two mechanisms converge on ↑↑ cGMP → profound hypotension, which is exactly why the printed adverse-effects cell says “hypotension in patients taking nitrates.” And the one nonspecific row explains the toxicity pattern: a drug that hits every isoform spills its adverse effects across organ systems (cardiotoxicity, neurotoxicity, abdominal pain).",
    keyIdea:
      "Read every PDE question in four moves. MOVE 1 — NAME THE ISOENZYME: nonspecific (theophylline, dipyridamole per footnote b), PDE-3 (milrinone; cilostazol chemically, filed as a platelet inhibitor per footnote a), PDE-4 (roflumilast), PDE-5 (the -fil family). MOVE 2 — NAME THE LANE: PDE-3/PDE-4 brake cAMP; PDE-5 brakes cGMP; the nonspecific inhibitors touch cAMP (and/or cGMP). MOVE 3 — NAME THE TISSUE WHERE THE NUCLEOTIDE ACCUMULATES: bronchial smooth muscle, cardiomyocytes + vascular smooth muscle, neutrophils/granulocytes/bronchial epithelium, corpus cavernosum + pulmonary vasculature, platelets. MOVE 4 — PREDICT USE AND ADVERSE EFFECT FROM THE TISSUE: inotropy from cardiomyocytes (and arrhythmias from the same tissue), bronchodilation from bronchial smooth muscle (and seizures/headache from a nonspecific spill into the brain), erection and pulmonary vasodilation from the cGMP axis (and profound hypotension when nitrates add NO to it). The tissue — never the drug name — is the answer key.",
  },
  mechanisms: [
    {
      id: "pde-brake-map",
      title:
        "The brake: PDE catalyzes the hydrolysis of cAMP and/or cGMP — and every inhibitor on the page releases it",
      context: "The printed introductory sentence (book 245)",
      flow: {
        nodes: [
          {
            id: "pde",
            label: "PDE — PHOSPHODIESTERASE, THE BRAKE",
            sublabel:
              "Input — the one enzyme family that terminates both cyclic-nucleotide messages: PDE catalyzes the hydrolysis of cAMP and/or cGMP. Inhibiting PDE is not stimulation — it is releasing the brake, so the nucleotide the tissue is already making accumulates.",
            variant: "inhibit",
          },
          {
            id: "camp-lane",
            label: "THE cAMP LANE — ↑ cAMP",
            sublabel:
              "Process — cAMP made by adenylyl cyclase downstream of Gs-coupled receptors (the lane introduced in G-Protein Second Messengers); PDE inhibition → ↓ cAMP hydrolysis → ↑ cAMP.",
            variant: "process",
          },
          {
            id: "cgmp-lane",
            label: "THE cGMP LANE — ↑ cGMP",
            sublabel:
              "Process — cGMP made by guanylyl cyclase downstream of nitric oxide; PDE inhibition → ↓ hydrolysis of cGMP → ↑ cGMP.",
            variant: "process",
          },
          {
            id: "tissue",
            label: "WHERE THE NUCLEOTIDE ACCUMULATES DECIDES THE EFFECT",
            sublabel:
              "Target — bronchial smooth muscle → bronchodilation · cardiomyocytes → ↑ Ca2+ influx → ↑ ionotropy and chronotropy · vascular smooth muscle → MLCK inhibition → vasodilation (↓ preload and afterload) · neutrophils, granulocytes, bronchial epithelium → the severe-COPD effect · corpus cavernosum + pulmonary vasculature → ↑ smooth muscle relaxation by enhancing NO activity · platelets → inhibition of platelet aggregation.",
            variant: "target",
          },
          {
            id: "selectivity",
            label: "ISOFORM SPECIFICITY = CLINICAL USE",
            sublabel:
              "Output — the inhibitors have varying specificity for PDE isoforms and thus have different clinical uses: nonspecific (theophylline — COPD/asthma, rarely used), PDE-3 (milrinone — the inotrope; cilostazol — filed by indication as a platelet inhibitor), PDE-4 (roflumilast — severe COPD), PDE-5 (sildenafil, vardenafil, tadalafil, avanafil — ED, pulmonary hypertension, BPH for tadalafil only).",
            variant: "output",
          },
        ],
        edges: [
          {
            from: "pde",
            to: "camp-lane",
            label: "catalyzes the hydrolysis of cAMP",
            type: "inhibit",
          },
          {
            from: "pde",
            to: "cgmp-lane",
            label: "catalyzes the hydrolysis of cGMP",
            type: "inhibit",
          },
          {
            from: "camp-lane",
            to: "tissue",
            label: "↑ cAMP where the isoenzyme sits",
          },
          {
            from: "cgmp-lane",
            to: "tissue",
            label: "↑ cGMP where the isoenzyme sits",
          },
          {
            from: "tissue",
            to: "selectivity",
            label: "the isoform → the tissue → the use",
          },
        ],
      },
    },
    {
      id: "sildenafil-no-cgmp-map",
      title:
        "The NO → cGMP axis: how the -fil family fills the penis — and why nitrates are contraindicated",
      context: "The PDE-5 row's mechanism and adverse-effects cells (book 245)",
      flow: {
        nodes: [
          {
            id: "no",
            label: "NITRIC OXIDE (NO) — the gas pedal",
            sublabel:
              "Input — NO is the signal that starts the cGMP lane; the printed mechanism cell says the relaxation comes “by enhancing NO activity,” and nitrates are simply more NO.",
            variant: "input",
          },
          {
            id: "gc",
            label: "GUANYLYL CYCLASE",
            sublabel:
              "Process — NO activates guanylyl cyclase, the enzyme that synthesizes cGMP from GTP: more NO → more cGMP made.",
            variant: "process",
          },
          {
            id: "cgmp",
            label: "↑ cGMP",
            sublabel:
              "Process — the vasodilating second messenger of the corpus cavernosum and pulmonary vasculature.",
            variant: "process",
          },
          {
            id: "pde5",
            label: "PDE-5 — the cGMP brake (blocked by the -fil drugs)",
            sublabel:
              "Inhibit — PDE-5 hydrolyzes cGMP; sildenafil, vardenafil, tadalafil, avanafil inhibit PDE-5 → ↓ hydrolysis of cGMP → the cGMP that NO already made persists and accumulates.",
            variant: "inhibit",
          },
          {
            id: "relax",
            label: "↑ SMOOTH MUSCLE RELAXATION",
            sublabel:
              "Output — pulmonary vasodilation and ↑ blood flow in corpus cavernosum fills the penis: erectile dysfunction and pulmonary hypertension (and BPH, tadalafil only).",
            variant: "output",
          },
          {
            id: "warning",
            label: "NITRATES + PDE-5 INHIBITOR = ↑↑ cGMP",
            sublabel:
              "Output — nitrates add NO (more cGMP synthesized) on top of the released brake (less cGMP hydrolyzed): the mechanisms converge on ↑↑ cGMP → ↑↑ smooth muscle relaxation → profound hypotension — the printed “hypotension in patients taking nitrates,” a contraindication for the whole class.",
            variant: "output",
          },
        ],
        edges: [
          { from: "no", to: "gc", label: "activates" },
          { from: "gc", to: "cgmp", label: "synthesizes cGMP" },
          {
            from: "pde5",
            to: "cgmp",
            label: "hydrolysis of cGMP — blocked by sildenafil ↓",
            type: "inhibit",
          },
          {
            from: "cgmp",
            to: "relax",
            label: "↑ smooth muscle relaxation by enhancing NO activity",
          },
          {
            from: "cgmp",
            to: "warning",
            label: "nitrates add NO on top → compounded",
          },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "pde-inhibitor-map",
      title: "The PDE isoenzyme map (an original KYP diagram)",
      caption:
        "An original KYP diagram of the phosphodiesterase inhibitor table (book 245): a top band of the two second-messenger lanes — the cAMP lane (made by adenylyl cyclase, the G-protein second-messenger lane) and the cGMP lane (made by NO → guanylyl cyclase) — both cut by the shared PDE brake glyph, with the printed intro sentence; the five family cards in PRINTED row order (Nonspecific/Theophylline, PDE-5/the -fil family, PDE-4/roflumilast, PDE-3/milrinone, “Platelet inhibitors”/cilostazolᵃ + dipyridamoleᵇ), each with its drug chip, its mechanism arrow (which cyclic nucleotide accumulates in which tissue), its clinical uses, and its adverse effects, each card tagged with the lane it feeds (cAMP · cGMP · BOTH for the nonspecific rows); and the exam centerpiece — the sildenafil NO/cGMP corpus-cavernosum panel with the NITRATES CONTRAINDICATED warning band (nitrates step on the gas, -fil releases the brake → ↑↑ cGMP → profound hypotension) plus the PDE-6 (six) retina chip for sildenafil-only cyanopia.",
      notice:
        "Census (pdfimages): ZERO raster images on pdf 267 — the page's single visual asset is the color-coded table itself (red drug names with the -fil endings highlighted, red mnemonic text in cells, a light-blue TYPE OF INHIBITOR column), VLM-confirmed at 120dpi with no margin mnemonics; the two-lane map, the brake glyph, the five family cards, and the nitrates warning band are an ORIGINAL KYP ADAPTATION — the table's every label, mechanism arrow, use, and adverse effect is preserved, but the artwork is KYP's. The table is additionally carried verbatim in the note's table block. The four ALL-CAPS mnemonics are KYP originals; First Aid's own red in-cell mnemonic text (“hot and sweaty,” then headache, heartburn, hypotension · PDE-6 (six) · fills) is carried attributed inside the verbatim table.",
    },
    {
      kind: "compare",
      title: "The two second-messenger lanes — where every PDE inhibitor acts",
      intro:
        "The whole page hangs off two lanes introduced back in G-Protein Second Messengers; PDE is the shared brake on both, and each drug family releases it in one lane of one tissue.",
      columns: ["THE cAMP LANE", "THE cGMP LANE"],
      rows: [
        {
          label: "Where the nucleotide comes from",
          a: "Adenylyl cyclase, switched on downstream of Gs-coupled receptors — β stimulation, glucagon, and the rest of the G-protein second-messenger story",
          b: "Guanylyl cyclase, activated by nitric oxide (NO) — the lane the nitrates ride and the lane the -fil family protects",
        },
        {
          label: "The brake",
          a: "PDE catalyzes the hydrolysis of cAMP — the reaction theophylline (nonspecific), milrinone and cilostazol (PDE-3), roflumilast (PDE-4), and dipyridamole (nonspecific) each inhibit in their own tissue",
          b: "PDE catalyzes the hydrolysis of cGMP — the reaction sildenafil, vardenafil, tadalafil, and avanafil inhibit at PDE-5 (and the nonspecific inhibitors touch this lane too)",
        },
        {
          label: "What accumulates, and where",
          a: "↑ cAMP in bronchial smooth muscle (theophylline), in cardiomyocytes and vascular smooth muscle (milrinone), in neutrophils, granulocytes, and bronchial epithelium (roflumilast), in platelets (cilostazol, dipyridamole)",
          b: "↑ cGMP in the corpus cavernosum and pulmonary vasculature (the -fil family), by enhancing NO activity",
        },
        {
          label: "The tissue result",
          a: "Bronchodilation · ↑ Ca2+ influx → ↑ ionotropy and chronotropy · MLCK inhibition → vasodilation → ↓ preload and afterload · inhibition of platelet aggregation",
          b: "↑ smooth muscle relaxation → pulmonary vasodilation and ↑ blood flow in corpus cavernosum fills the penis",
        },
        {
          label: "The dangerous convergence",
          a: "The nonspecific inhibitors (theophylline, dipyridamole) reach BOTH lanes — which is why theophylline's toxicity spills across organ systems",
          b: "Nitrates ↑ NO (more cGMP made) + PDE-5 inhibitors ↓ hydrolysis (less cGMP destroyed) = ↑↑ cGMP → profound hypotension — the class contraindication",
        },
      ],
    },
    {
      kind: "table",
      title:
        "Book 245 — the printed PDE inhibitor table, carried verbatim (every printed word, PRINTED row order)",
      intro:
        "The page's single table, in the printed row order: Nonspecific → PDE-5 → PDE-4 → PDE-3 → “Platelet inhibitors” (PDE-4 prints before PDE-3 — carried as printed). First Aid prints the drug names in red with the -fil endings highlighted, and three mnemonic phrases in red inside cells — carried here, attributed.",
      columns: [
        "TYPE OF INHIBITOR",
        "MECHANISM OF ACTION",
        "CLINICAL USES",
        "ADVERSE EFFECTS",
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
          "“Platelet inhibitors” — Cilostazolᵃ, Dipyridamoleᵇ",
          "In platelets: ↑ cAMP → inhibition of platelet aggregation",
          "Intermittent claudication; Stroke or TIA prevention (with aspirin); Cardiac stress testing (dipyridamole only, due to coronary vasodilation); Prevention of coronary stent restenosis",
          "Nausea, headache, facial flushing, hypotension, abdominal pain",
        ],
      ],
      caption:
        "Verbatim carries, documented: the milrinone mechanism cell prints the source's own spelling “↑ ionotropy” (extra “o”) while the same row's clinical-uses cell correctly prints “(inotrope)”; “cyanopia” is the printed spelling (not “cyanopsia”); “blue-tinted” prints hyphenated across a line wrap (the cache text layer merges it as “bluetinted” — the printed hyphen is restored here); the footnote superscripts print as Cilostazolᵃ / Dipyridamoleᵇ (the cache layer merges them into the words). The red-print phrases — “hot and sweaty,” then headache, heartburn, hypotension · PDE-6 (six) in retina · fills the penis · the -fil drug endings — are First Aid's own in-cell mnemonic text, reproduced here as printed.",
    },
    {
      kind: "table",
      title: "Book 245 — the two printed footnotes, carried verbatim",
      intro:
        "The table carries two superscripted footnotes on the platelet row (the footnote markers interleave in the text layer; the mapping below is adjudicated by word coordinates — a heads the Cilostazol sentence, b heads the Dipyridamole sentence).",
      columns: ["FOOTNOTE", "THE PRINTED TEXT — book 245 (verbatim)"],
      rows: [
        [
          "a — on Cilostazol",
          "Cilostazol is a PDE-3 inhibitor, but due to its indications is categorized as a platelet inhibitor together with dipyridamole.",
        ],
        [
          "b — on Dipyridamole",
          "Dipyridamole is a nonspecific PDE inhibitor, leading to inhibition of platelet aggregation. It also prevents adenosine reuptake by platelets → ↑ extracellular adenosine → ↑ vasodilation.",
        ],
      ],
      caption:
        "The two footnotes explain the one filing oddity of the table: the “Platelet inhibitors” row is an INDICATION-based category, not a biochemical one — cilostazol is chemically a PDE-3 inhibitor (milrinone's row), and dipyridamole is chemically nonspecific (theophylline's row) with an added adenosine-reuptake mechanism.",
    },
    {
      kind: "steps",
      title: "Reading any PDE inhibitor question in four moves",
      intro:
        "The whole table distilled into an ordered decision path — ISOENZYME, LANE, TISSUE, PREDICTION.",
      steps: [
        {
          label: "NAME THE ISOENZYME — which row is the drug in?",
          detail:
            "Nonspecific (theophylline; dipyridamole per footnote b), PDE-3 (milrinone; cilostazol chemically, per footnote a), PDE-4 (roflumilast), PDE-5 (sildenafil, vardenafil, tadalafil, avanafil). If the stem is a platelet indication (claudication, stress testing), you are in the filed-together fifth row.",
        },
        {
          label: "NAME THE LANE — cAMP, cGMP, or both?",
          detail:
            "PDE-3 and PDE-4 brake cAMP; PDE-5 brakes cGMP; the nonspecific inhibitors reach cAMP and/or cGMP. This single split organizes every mechanism statement on the page: ↓ cAMP hydrolysis vs ↓ hydrolysis of cGMP.",
        },
        {
          label: "NAME THE TISSUE — where does the nucleotide accumulate?",
          detail:
            "Bronchial smooth muscle (theophylline) · cardiomyocytes + vascular smooth muscle (milrinone) · neutrophils, granulocytes, and bronchial epithelium (roflumilast) · corpus cavernosum + pulmonary vasculature (the -fil family) · platelets (cilostazol, dipyridamole). The tissue is the destination of the mechanism arrow.",
        },
        {
          label: "PREDICT USE AND ADVERSE EFFECT FROM THE TISSUE",
          detail:
            "The tissue that gives the drug its use gives the toxicity too: cardiomyocytes give milrinone its inotropy AND its tachycardia/ventricular arrhythmias; a nonspecific inhibitor reaches every tissue at once, so theophylline spills into heart (cardiotoxicity), brain (neurotoxicity — seizures), and gut (abdominal pain); the cGMP axis gives the -fil family its uses AND the nitrate-compounded hypotension; sildenafil alone also reaches the PDE-6 (six) retina → cyanopia (blue-tinted vision).",
        },
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title: "The nitrates contraindication — the exam centerpiece",
      body:
        "The PDE-5 row's adverse-effects cell prints “hypotension in patients taking nitrates” — not as one side effect among many but as THE contraindication of the class. Mechanism, in one line: nitrates deliver NO → guanylyl cyclase makes MORE cGMP (the gas pedal), while PDE-5 inhibitors ↓ hydrolysis of cGMP (the brake released) — two drugs, one second messenger, compounded ↑↑ cGMP → ↑↑ smooth muscle relaxation → profound, potentially fatal hypotension. Any stem pairing a nitrate (nitroglycerin, isosorbide mono/dinitrate) with sildenafil, vardenafil, tadalafil, or avanafil answers “contraindicated — risk of severe hypotension,” and the contraindication is CLASS-WIDE: tadalafil's separate BPH indication does not exempt it, because the cGMP axis is shared.",
    },
    {
      kind: "callout",
      variant: "memory",
      title: "First Aid's own red text — the mnemonic layer printed on the page",
      body:
        "This table carries First Aid's own memory hooks, printed in red inside the cells (attributed, verbatim): “hot and sweaty,” then headache, heartburn, hypotension (the PDE-5 adverse-effects sequence); PDE-6 (six) in retina (sildenafil-only cyanopia — six ≈ sight); and corpus cavernosum “fills” the penis (the mechanism arrow's destination). The drug names themselves print in red with the -fil endings highlighted — sildenafil, vardenafil, tadalafil, avanafil — the family suffix that FILLS. These are the source's mnemonics, not KYP's; the four ALL-CAPS codes in the Memory section below are KYP originals layered on top.",
    },
  ],
  drugs: [
    {
      drug: "Theophylline",
      klass: "Nonspecific PDE inhibitor",
      target: "PDE (nonspecific — the cAMP hydrolysis step in every tissue)",
      mechanism:
        "↓ cAMP hydrolysis → ↑ cAMP → bronchial smooth muscle relaxation → bronchodilation (the printed row 1 mechanism)",
      effect: "↑ cAMP in bronchial smooth muscle → bronchodilation",
      uses: "COPD/asthma (rarely used)",
      adverse:
        "Cardiotoxicity (eg, tachycardia, arrhythmia), neurotoxicity (eg, seizures, headache), abdominal pain",
      clue:
        "The one nonspecific row — the toxicity spills across organ systems (heart, brain, gut) exactly because no isoform is spared.",
    },
    {
      drug: "Sildenafil (+ vardenafil, tadalafil, avanafil)",
      klass: "PDE-5 inhibitor (the -fil family)",
      target: "PDE-5 in the corpus cavernosum and pulmonary vasculature",
      mechanism:
        "↓ hydrolysis of cGMP → ↑ cGMP → ↑ smooth muscle relaxation by enhancing NO activity → pulmonary vasodilation and ↑ blood flow in corpus cavernosum fills the penis",
      effect:
        "↑ cGMP → ↑ smooth muscle relaxation where NO has already started the signal",
      uses:
        "Erectile dysfunction; pulmonary hypertension; benign prostatic hyperplasia (tadalafil only)",
      adverse:
        "Facial flushing, headache, dyspepsia, hypotension in patients taking nitrates; “hot and sweaty,” then headache, heartburn, hypotension. Sildenafil only: cyanopia (blue-tinted vision) via inhibition of PDE-6 (six) in retina",
      clue:
        "NO makes cGMP, -fil keeps it — and nitrates on top of it are the contraindication.",
    },
    {
      drug: "Roflumilast",
      klass: "PDE-4 inhibitor",
      target: "PDE-4 in neutrophils, granulocytes, and bronchial epithelium",
      mechanism:
        "↑ cAMP in neutrophils, granulocytes, and bronchial epithelium (the printed PDE-4 row)",
      effect: "↑ cAMP in the immune cells of the airway → less inflammation-driven obstruction",
      uses: "Severe COPD",
      adverse: "Abdominal pain, weight loss, depression, anxiety, insomnia",
      clue:
        "The severe-COPD add-on with the psychiatric/gut side-effect signature.",
    },
    {
      drug: "Milrinone",
      klass: "PDE-3 inhibitor (inotrope)",
      target:
        "PDE-3 in cardiomyocytes and vascular smooth muscle",
      mechanism:
        "In cardiomyocytes: ↑ cAMP → ↑ Ca2+ influx → ↑ ionotropy and chronotropy (the printed spelling). In vascular smooth muscle: ↑ cAMP → MLCK inhibition → vasodilation → ↓ preload and afterload",
      effect:
        "Pumps harder AND unloads — inotropy plus vasodilation, downstream of the β receptor",
      uses: "Acute decompensated HF with cardiogenic shock (inotrope)",
      adverse: "Tachycardia, ventricular arrhythmias, hypotension",
      clue:
        "The inotrope that works below the receptor — still effective when β-receptor pathways are exhausted.",
    },
    {
      drug: "Cilostazol",
      klass: "“Platelet inhibitor” (chemically a PDE-3 inhibitor — footnote a)",
      target: "PDE-3 in platelets (filed by indication, not chemistry)",
      mechanism:
        "In platelets: ↑ cAMP → inhibition of platelet aggregation; footnote a — “Cilostazol is a PDE-3 inhibitor, but due to its indications is categorized as a platelet inhibitor together with dipyridamole.”",
      effect: "↑ platelet cAMP → ↓ aggregation",
      uses:
        "Intermittent claudication (and, per the shared printed cell, prevention of coronary stent restenosis)",
      adverse:
        "Nausea, headache, facial flushing, hypotension, abdominal pain (the shared platelet-row cell)",
      clue:
        "Claudication drug with PDE-3 chemistry — milrinone's isoenzyme, filed with the platelet drugs.",
    },
    {
      drug: "Dipyridamole",
      klass: "“Platelet inhibitor” (chemically a nonspecific PDE inhibitor — footnote b)",
      target: "PDE (nonspecific) in platelets + the platelet adenosine transporter",
      mechanism:
        "Nonspecific PDE inhibitor → in platelets ↑ cAMP → inhibition of platelet aggregation; footnote b — it “also prevents adenosine reuptake by platelets → ↑ extracellular adenosine → ↑ vasodilation.”",
      effect: "↑ platelet cAMP + ↑ extracellular adenosine → ↓ aggregation, coronary vasodilation",
      uses:
        "Stroke or TIA prevention (with aspirin); cardiac stress testing (dipyridamole only, due to coronary vasodilation); prevention of coronary stent restenosis",
      adverse:
        "Nausea, headache, facial flushing, hypotension, abdominal pain (the shared platelet-row cell)",
      clue:
        "The pharmacologic stress-test drug — its coronary vasodilation steals flow from stenosed territories.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A patient maintained on an oral bronchodilator with a narrow therapeutic index presents with tachycardia, a new arrhythmia, and then a generalized seizure; abdominal pain is noted on review of systems.",
        discriminator:
          "Nonspecific PDE inhibition — toxicity spilling across heart, brain, and gut in one patient",
        concept: "The nonspecific row: theophylline",
        answer:
          "Theophylline, the nonspecific PDE inhibitor (↓ cAMP hydrolysis → ↑ cAMP → bronchial smooth muscle relaxation → bronchodilation for COPD/asthma, rarely used) prints its adverse effects as a three-system spill: cardiotoxicity (eg, tachycardia, arrhythmia), neurotoxicity (eg, seizures, headache), and abdominal pain — exactly because a nonspecific inhibitor reaches every isoform in every tissue.",
      },
      {
        stem: "A 64-year-old man with stable angina maintained on isosorbide dinitrate asks whether he can take sildenafil for erectile dysfunction.",
        discriminator:
          "Nitrates (↑ NO → more cGMP made) + PDE-5 inhibitor (↓ hydrolysis of cGMP → less cGMP destroyed) = compounded ↑↑ cGMP",
        concept: "The class contraindication on the cGMP axis",
        answer:
          "Contraindicated — hypotension in patients taking nitrates is printed in the PDE-5 row's adverse-effects cell. The mechanisms converge: nitrates step on the gas (NO → guanylyl cyclase → more cGMP), sildenafil releases the brake (↓ hydrolysis of cGMP), and the summed ↑ cGMP → ↑ smooth muscle relaxation becomes profound systemic vasodilation and hypotension. The contraindication is class-wide (sildenafil, vardenafil, tadalafil, avanafil).",
      },
      {
        stem: "A patient in the ICU with acute decompensated heart failure and cardiogenic shock needs a drug that increases contractility while also reducing preload and afterload, working downstream of the β receptor.",
        discriminator:
          "↑ cAMP → ↑ Ca2+ influx in cardiomyocytes AND MLCK inhibition → vasodilation in vascular smooth muscle — one drug, both effects",
        concept: "The PDE-3 row: milrinone",
        answer:
          "Milrinone, the PDE-3 inhibitor, is the printed inotrope for acute decompensated HF with cardiogenic shock: in cardiomyocytes ↑ cAMP → ↑ Ca2+ influx → ↑ ionotropy and chronotropy, while in vascular smooth muscle the same ↑ cAMP → MLCK inhibition → vasodilation → ↓ preload and afterload. Its printed adverse effects (tachycardia, ventricular arrhythmias, hypotension) are the same two tissues turned into toxicity.",
      },
      {
        stem: "A patient with severe COPD despite maximal inhaled therapy is started on an oral add-on; weeks later he reports weight loss, insomnia, and depressed mood.",
        discriminator:
          "PDE-4 inhibition raising cAMP in neutrophils, granulocytes, and bronchial epithelium — with the mood/gut side-effect signature",
        concept: "The PDE-4 row: roflumilast",
        answer:
          "Roflumilast, the PDE-4 inhibitor, raises cAMP in neutrophils, granulocytes, and bronchial epithelium and is the printed drug for severe COPD; its adverse-effect list — abdominal pain, weight loss, depression, anxiety, insomnia — is the giveaway cluster that separates it from the rarely-used nonspecific theophylline.",
      },
    ],
    traps: [
      {
        a: "↑ cAMP (milrinone, roflumilast, cilostazol, theophylline, dipyridamole)",
        b: "↑ cGMP (sildenafil, vardenafil, tadalafil, avanafil)",
        whyConfused:
          "Both are cyclic nucleotides destroyed by PDE, and both relax smooth muscle",
        keyDifference:
          "The lane each isoenzyme brakes: PDE-3 and PDE-4 hydrolyze cAMP (the adenylyl-cyclase lane), PDE-5 hydrolyzes cGMP (the NO/guanylyl-cyclase lane), and the nonspecific inhibitors reach cAMP and/or cGMP",
        clue:
          "Erection, pulmonary vasodilation, nitrate interaction = cGMP; inotropy, bronchodilation, antiplatelet effect = cAMP",
      },
      {
        a: "PDE-5 inhibitors + nitrates (contraindicated)",
        b: "PDE-5 inhibitors + other antihypertensives (hypotension listed but not the contraindication)",
        whyConfused:
          "The PDE-5 row lists “hypotension” among its adverse effects generally",
        keyDifference:
          "The nitrates interaction is pharmacodynamic SYNERGY on one axis — nitrates ↑ NO → more cGMP synthesized while the -fil drug ↓ hydrolysis of cGMP → the two mechanisms compound — not a shared-metabolite or receptor competition story",
        clue:
          "A stem pairing any nitrate (nitroglycerin, isosorbide) with any -fil drug answers “contraindicated — risk of profound hypotension,” regardless of which -fil",
      },
      {
        a: "Cilostazol — the “platelet inhibitor”",
        b: "Milrinone — the PDE-3 inhibitor",
        whyConfused:
          "Cilostazol IS chemically a PDE-3 inhibitor (printed footnote a)",
        keyDifference:
          "The filing is by indication: cilostazol is categorized as a platelet inhibitor (intermittent claudication, stent restenosis) while milrinone's PDE-3 inhibition is used as an inotrope in acute decompensated HF with cardiogenic shock",
        clue:
          "Claudication or antiplatelet indication = cilostazol; cardiogenic shock inotrope = milrinone — same isoenzyme, different tissue exploited",
      },
      {
        a: "Cyanopia (blue-tinted vision) — sildenafil only, via PDE-6 (six) in retina",
        b: "Visual or sensory effects attributed to the whole -fil class",
        whyConfused:
          "The class shares flushing, headache, and dyspepsia, so a visual effect feels class-wide",
        keyDifference:
          "The printed cell reserves cyanopia for SILDENAFIL ONLY, via inhibition of PDE-6 (six) in the retina — the isoform-number pun (six ≈ sight) is the source's own red-printed hook",
        clue:
          "Blue-tinted vision after a “fil” drug → sildenafil specifically; tadalafil/vardenafil/avanafil do not carry it",
      },
    ],
    pivots: [
      {
        lookAlike:
          "Any PDE-inhibitor stem asking which second messenger accumulates, or what the drug does — route it in one fixed order",
        differentiator:
          "NAME THE ISOENZYME (nonspecific / PDE-3 / PDE-4 / PDE-5 / the indication-filed platelet row) → NAME THE LANE (cAMP vs cGMP vs both) → NAME THE TISSUE where the nucleotide accumulates (bronchial smooth muscle · cardiomyocytes + vascular smooth muscle · neutrophils, granulocytes, bronchial epithelium · corpus cavernosum + pulmonary vasculature · platelets) → PREDICT the use and the adverse effect from that tissue",
        correctPath:
          "Isoenzyme → lane → tissue → prediction: the tissue, never the drug name, is the answer key for both the benefit and the toxicity",
      },
      {
        lookAlike:
          "A hypotension vignette with a vasodilating drug — intended effect, listed adverse effect, or contraindicated combination?",
        differentiator:
          "Ask what else the patient is taking: a nitrate plus any PDE-5 inhibitor is the contraindicated compounded-axis combination (↑↑ cGMP); milrinone's hypotension is its own vascular smooth muscle effect (MLCK inhibition → vasodilation → ↓ preload and afterload) printed among its adverse effects; the platelet row's hypotension is part of its shared cell (nausea, headache, facial flushing, hypotension, abdominal pain)",
        correctPath:
          "Sort by MECHANISM SOURCE: compounded cGMP synergy (nitrate + -fil) vs single-drug tissue effect (milrinone's unloading) vs shared-class side effect (platelet row)",
      },
      {
        lookAlike:
          "Two COPD drugs — the rarely-used nonspecific one vs the severe-COPD add-on",
        differentiator:
          "Theophylline is the NONSPECIFIC inhibitor: ↓ cAMP hydrolysis → ↑ cAMP → bronchial smooth muscle relaxation → bronchodilation, for COPD/asthma (rarely used), with the three-system toxicity spill (cardiotoxicity, neurotoxicity, abdominal pain). Roflumilast is the PDE-4 inhibitor: ↑ cAMP in neutrophils, granulocytes, and bronchial epithelium, for severe COPD, with abdominal pain, weight loss, depression, anxiety, insomnia",
        correctPath:
          "Nonspecific = broad mechanism + broad toxicity + rarely used; PDE-4 = airway-immune-cell targeting + the mood/weight/insomnia cluster",
      },
    ],
    miniCase: {
      vignette:
        "A 64-year-old man with coronary artery disease and stable angina, maintained on isosorbide dinitrate and aspirin, asks his physician for help with erectile dysfunction. The physician considers prescribing a PDE-5 inhibitor. Before any prescription is written, the interaction with his nitrate must be understood: which of the following best explains the danger of taking sildenafil together with isosorbide dinitrate?",
      question:
        "Identify the mechanism of the dangerous interaction — choose the option that correctly tracks both drugs onto the same pathway.",
      options: [
        {
          label:
            "Nitrates increase NO → cGMP synthesis while sildenafil inhibits PDE-5 → ↓ hydrolysis of cGMP — the two mechanisms converge on ↑↑ cGMP → ↑ smooth muscle relaxation → profound hypotension",
          text: "Gas pedal and released brake on the same second messenger.",
          correct: true,
          why:
            "Correct on both layers. The printed PDE-5 mechanism is “↓ hydrolysis of cGMP → ↑ cGMP → ↑ smooth muscle relaxation by enhancing NO activity,” and the printed adverse-effect cell is “hypotension in patients taking nitrates.” Isosorbide dinitrate is an exogenous NO donor: it drives guanylyl cyclase to make MORE cGMP, while sildenafil removes the enzyme that destroys cGMP. Synthesis up, degradation down — the nucleotide accumulates from both directions, and the compounded ↑↑ cGMP produces systemic smooth muscle relaxation profound enough to be life-threatening hypotension. That is why the combination is contraindicated for the whole class, not merely dose-adjusted.",
        },
        {
          label:
            "Sildenafil inhibits PDE-3 in cardiomyocytes → ↑ cAMP → ↑ Ca2+ influx → tachycardia and ventricular arrhythmias, which the nitrate then worsens by dropping preload",
          text: "Wrong isoenzyme — that is milrinone's row, not sildenafil's.",
          why:
            "Isoenzyme substitution. PDE-3 inhibition in cardiomyocytes (↑ cAMP → ↑ Ca2+ influx → ↑ ionotropy and chronotropy, with tachycardia and ventricular arrhythmias) is MILRINONE's printed mechanism and adverse-effect pair — sildenafil is a PDE-5 inhibitor and its printed interaction with nitrates is hypotension, not arrhythmia. The distractor works because milrinone's row is the other cardiology row on the same page, but the drugs share nothing downstream: different isoenzyme, different nucleotide (cAMP, not cGMP), different tissue.",
        },
        {
          label:
            "Sildenafil and isosorbide dinitrate compete for the same cytochrome P450 enzyme, so sildenafil plasma levels rise to toxic concentrations",
          text: "A pharmacokinetic story where the real interaction is pharmacodynamic.",
          why:
            "Wrong mechanism class. Nothing in the printed row implies shared metabolism: the interaction is PHARMACODYNAMIC — two drugs converging on one second messenger (nitrates ↑ NO → ↑ cGMP production; PDE-5 inhibition ↓ cGMP destruction). No enzyme competition is needed to explain it, and the hypotension occurs at ordinary doses of both drugs. The distractor is tempting because P450 competition is the classic drug-interaction story, but the correct answer here is summed pharmacology, not altered kinetics.",
        },
        {
          label:
            "The combination is acceptable if he switches to tadalafil, because tadalafil is the PDE-5 inhibitor also approved for benign prostatic hyperplasia and is better tolerated with nitrates",
          text: "An indication is not an exemption from the mechanism.",
          why:
            "Class-wide misread. The printed clinical-uses cell does list “Benign prostatic hyperplasia (tadalafil only),” but that separate indication does not change tadalafil's mechanism — it inhibits PDE-5 and ↓ hydrolysis of cGMP exactly like sildenafil, so the compounded ↑↑ cGMP with nitrates is identical. The adverse-effect cell attaches “hypotension in patients taking nitrates” to the entire PDE-5 row (all four drugs), and the contraindication follows the mechanism, not the marketing indication.",
        },
      ],
      reasoning:
        "The stem pairs a nitrate with the -fil family and asks for the mechanism of the danger — so the task is to route both drugs onto the cGMP axis as the table prints it. The PDE-5 mechanism cell reads “↓ hydrolysis of cGMP → ↑ cGMP → ↑ smooth muscle relaxation by enhancing NO activity,” and the adverse-effect cell names the interaction: “hypotension in patients taking nitrates.” Nitrates are NO donors — they add input at the TOP of the axis (NO → guanylyl cyclase → cGMP synthesis), while the PDE-5 inhibitor removes the destruction at the BOTTOM (↓ hydrolysis of cGMP): input up, cleanup down, one second messenger compounded (the correct answer). The distractors each break one link of that routing: option B swaps in milrinone's row (PDE-3, cAMP, cardiomyocytes, Ca2+, arrhythmias) — the other cardiology row on the page, sharing nothing downstream with sildenafil; option C invents a pharmacokinetic (P450 competition) story where the real interaction is purely pharmacodynamic; option D reads tadalafil's separate BPH indication as a mechanistic exemption, when the printed contraindication attaches to the whole class because the whole class brakes the same enzyme. Route every option by isoenzyme → nucleotide → tissue, and only the convergent-cGMP option survives.",
    },
  },
  mnemonics: [
    {
      code: "PDE IS THE BRAKE",
      meaning:
        "Phosphodiesterase catalyzes the hydrolysis (the destruction) of cAMP and/or cGMP — it is the BRAKE on both second-messenger lanes. Every drug on this page is a brake-release, not an accelerator: inhibit PDE and the nucleotide the tissue is ALREADY making accumulates. Theophylline releases it everywhere (nonspecific); milrinone at PDE-3, roflumilast at PDE-4, the -fil family at PDE-5 — each in the tissue where that isoform works.",
      memorizes:
        "The one mechanism shared by all five printed rows and the “varying specificity for PDE isoforms → different clinical uses” principle",
      whenToUse:
        "Any mechanism question about PDE inhibitors — before naming a drug, name which lane's brake is released in which tissue",
      clinical:
        "Because inhibition only amplifies an existing signal, the tissue decides everything: the drug works where the nucleotide is being made, which is why the same mechanism yields a bronchodilator, an inotrope, an erection, and an antiplatelet effect.",
    },
    {
      code: "FIVE FILLS, SIX SEES",
      meaning:
        "PDE-5 FILLS: sildenafil, vardenafil, tadalafil, avanafil (the -fil family — the page prints their red -fil endings) ↓ hydrolysis of cGMP → pulmonary vasodilation and ↑ blood flow in corpus cavernosum FILLS the penis (the source's own red word). PDE-6 SEES: sildenafil alone also inhibits PDE-6 (SIX) in the retina → cyanopia (blue-tinted vision) — the isoform number spells the pun: six ≈ sight.",
      memorizes:
        "The PDE-5 family, its two headline uses, and sildenafil's unique visual adverse effect",
      whenToUse:
        "Erectile dysfunction, pulmonary hypertension, or blue-tinted-vision questions; also any option pair testing sildenafil-only vs class-wide effects",
      clinical:
        "Fills covers erectile dysfunction and pulmonary hypertension (plus BPH, tadalafil only); sees covers sildenafil-only cyanopia — while the nitrates contraindication is class-wide, cyanopia is not.",
    },
    {
      code: "THREE PUMPS, FOUR CALMS",
      meaning:
        "PDE-3 PUMPS: milrinone in cardiomyocytes — ↑ cAMP → ↑ Ca2+ influx → ↑ ionotropy and chronotropy — and simultaneously unloads: in vascular smooth muscle ↑ cAMP → MLCK inhibition → vasodilation → ↓ preload and afterload (the inotrope for acute decompensated HF with cardiogenic shock). PDE-4 CALMS: roFlumilast raises cAMP in neutrophils, granulocytes, and bronchial epithelium — the anti-inflammatory airway add-on for severe COPD.",
      memorizes:
        "The PDE-3 vs PDE-4 split — which isoform pumps the heart, which calms the inflamed airway",
      whenToUse:
        "Inotrope questions (cardiogenic shock) vs severe-COPD add-on questions, and any stem pairing milrinone's uses with its tachycardia/arrhythmia/hypotension",
      clinical:
        "Three pumps (and arrhythmias — the same cardiomyocytes); four calms (with abdominal pain, weight loss, depression, anxiety, insomnia — the mood/gut cluster that fingerprints roflumilast).",
    },
    {
      code: "NITRATES STEP ON THE GAS, “FIL” RELEASES THE BRAKE",
      meaning:
        "The cGMP axis has a gas pedal and a brake: NITRATES deliver NO → guanylyl cyclase synthesizes MORE cGMP (gas on); PDE-5 inhibitors ↓ hydrolysis of cGMP (brake off). Together: ↑↑ cGMP → ↑↑ smooth muscle relaxation → profound hypotension — the printed “hypotension in patients taking nitrates,” the contraindication of the class.",
      memorizes:
        "Why PDE-5 inhibitors and nitrates are contraindicated together — and that it is a pharmacodynamic convergence, not shared metabolism",
      whenToUse:
        "Any combined-drug hypotension question, any “patient on nitroglycerin asks for sildenafil” stem, and any distractor offering a P450-competition story",
      clinical:
        "Never co-prescribe any nitrate (nitroglycerin, isosorbide mono/dinitrate) with any PDE-5 inhibitor (sildenafil, vardenafil, tadalafil, avanafil) — and remember the contraindication follows the mechanism, so tadalafil's BPH indication grants no exemption.",
    },
  ],
  rapidReview: {
    s30: [
      "PDE catalyzes the hydrolysis of cAMP and/or cGMP — PDE inhibitors thereby increase cAMP and/or cGMP",
      "The inhibitors have varying specificity for PDE isoforms and thus have different clinical uses",
      "Theophylline (nonspecific): ↓ cAMP hydrolysis → ↑ cAMP → bronchial smooth muscle relaxation → bronchodilation — COPD/asthma (rarely used); cardiotoxicity (eg, tachycardia, arrhythmia), neurotoxicity (eg, seizures, headache), abdominal pain",
      "PDE-5 inhibitors (sildenafil, vardenafil, tadalafil, avanafil): ↓ hydrolysis of cGMP → ↑ cGMP → ↑ smooth muscle relaxation by enhancing NO activity → pulmonary vasodilation and ↑ blood flow in corpus cavernosum fills the penis",
      "PDE-5 uses: erectile dysfunction, pulmonary hypertension, benign prostatic hyperplasia (tadalafil only)",
      "PDE-5 adverse effects: facial flushing, headache, dyspepsia, hypotension in patients taking nitrates; sildenafil only: cyanopia (blue-tinted vision) via inhibition of PDE-6 (six) in retina",
      "Roflumilast (PDE-4): ↑ cAMP in neutrophils, granulocytes, and bronchial epithelium — severe COPD (adverse effects: abdominal pain, weight loss, depression, anxiety, insomnia)",
      "Milrinone (PDE-3): in cardiomyocytes ↑ cAMP → ↑ Ca2+ influx → ↑ ionotropy and chronotropy; in vascular smooth muscle ↑ cAMP → MLCK inhibition → vasodilation → ↓ preload and afterload — acute decompensated HF with cardiogenic shock (inotrope)",
    ],
    m3: [
      "PDE IS THE BRAKE — inhibit PDE and the cyclic nucleotide the tissue already makes accumulates; the tissue is the answer key",
      "FIVE FILLS, SIX SEES — PDE-5 fills the penis/pulmonary vasculature; PDE-6 (six) in retina gives sildenafil-only cyanopia",
      "THREE PUMPS, FOUR CALMS — milrinone (PDE-3) pumps the heart and unloads the vessels; roflumilast (PDE-4) calms the inflamed airway in severe COPD",
      "NITRATES STEP ON THE GAS, “FIL” RELEASES THE BRAKE — compounded ↑↑ cGMP → profound hypotension: the class contraindication",
    ],
    m10: [
      "The table's printed row order is Nonspecific → PDE-5 → PDE-4 → PDE-3 → “Platelet inhibitors” — PDE-4 prints BEFORE PDE-3 on this page; the printed order is the carried order",
      "The milrinone mechanism cell prints the source's own spelling “↑ ionotropy” (extra “o”) while the same row's clinical-uses cell correctly prints “(inotrope)” — both carried verbatim, documented",
      "“Cyanopia” is the printed spelling (not “cyanopsia”), and “blue-tinted” prints hyphenated across a line wrap — the cache text layer merges it as “bluetinted” (restored as printed)",
      "First Aid's own red-print mnemonic text inside the cells: “hot and sweaty,” then headache, heartburn, hypotension · PDE-6 (six) in retina · fills the penis — plus the red -fil drug endings (sildenafil, vardenafil, tadalafil, avanafil)",
      "Footnote a: cilostazol IS a PDE-3 inhibitor, categorized as a platelet inhibitor due to its indications; footnote b: dipyridamole is a NONSPECIFIC PDE inhibitor that also prevents adenosine reuptake by platelets → ↑ extracellular adenosine → ↑ vasodilation",
      "Cardiac stress testing is printed as “dipyridamole only, due to coronary vasodilation” — the one use in the platelet row reserved for a single drug",
    ],
  },
  recall: [
    {
      q: "The page's introductory sentence, verbatim — what PDE does and what the inhibitors do to it.",
      a: "Phosphodiesterase (PDE) inhibitors inhibit PDE, which catalyzes the hydrolysis of cAMP and/or cGMP, and thereby increase cAMP and/or cGMP. These inhibitors have varying specificity for PDE isoforms and thus have different clinical uses.",
    },
    {
      q: "The nonspecific row, verbatim — drug, mechanism, use, adverse effects.",
      a: "Theophylline: ↓ cAMP hydrolysis → ↑ cAMP → bronchial smooth muscle relaxation → bronchodilation. COPD/asthma (rarely used). Cardiotoxicity (eg, tachycardia, arrhythmia), neurotoxicity (eg, seizures, headache), abdominal pain.",
    },
    {
      q: "The PDE-5 row, verbatim — the four drugs and the full mechanism arrow.",
      a: "Sildenafil, vardenafil, tadalafil, avanafil: ↓ hydrolysis of cGMP → ↑ cGMP → ↑ smooth muscle relaxation by enhancing NO activity → pulmonary vasodilation and ↑ blood flow in corpus cavernosum fills the penis.",
    },
    {
      q: "Which PDE-5 inhibitor adverse effect is sildenafil-only, and why?",
      a: "Cyanopia (blue-tinted vision) — via inhibition of PDE-6 (six) in the retina.",
    },
    {
      q: "Milrinone's two-tissue mechanism, verbatim.",
      a: "In cardiomyocytes: ↑ cAMP → ↑ Ca2+ influx → ↑ ionotropy and chronotropy (the printed spelling). In vascular smooth muscle: ↑ cAMP → MLCK inhibition → vasodilation → ↓ preload and afterload.",
    },
    {
      q: "Roflumilast — isoenzyme, the three cells it raises cAMP in, the use, and the adverse-effect cluster.",
      a: "PDE-4 inhibitor: ↑ cAMP in neutrophils, granulocytes, and bronchial epithelium; severe COPD; abdominal pain, weight loss, depression, anxiety, insomnia.",
    },
    {
      q: "Why is cilostazol filed under “Platelet inhibitors” when it is chemically a PDE-3 inhibitor?",
      a: "Footnote a, verbatim: “Cilostazol is a PDE-3 inhibitor, but due to its indications is categorized as a platelet inhibitor together with dipyridamole.”",
    },
    {
      q: "Dipyridamole's second mechanism beyond PDE inhibition, and the use that follows from it.",
      a: "It also prevents adenosine reuptake by platelets → ↑ extracellular adenosine → ↑ vasodilation — the basis of cardiac stress testing (dipyridamole only, due to coronary vasodilation).",
    },
  ],
  related: [
    {
      title: "G-Protein Second Messengers",
      topicId: "g-protein-second-messengers",
      note:
        "The two lanes this page brakes: cAMP is made by adenylyl cyclase downstream of Gs/Gi-coupled receptors, and cGMP by guanylyl cyclase downstream of NO — this page is what happens at the far end of both cascades, the hydrolysis step that terminates the message.",
    },
    {
      title: "Autonomic Receptors: The Wiring Map",
      topicId: "autonomic-receptors",
      note:
        "The organ wiring that the cyclic nucleotides act on: β-receptor stimulation drives the cAMP lane in the same tissues where milrinone blocks its hydrolysis, and the corpus cavernosum and pulmonary vasculature are the smooth-muscle targets whose relaxation the -fil family prolongs.",
    },
    {
      title: "Sympathomimetics",
      topicId: "sympathomimetics",
      note:
        "β-agonists raise cAMP the receptor way (Gs → adenylyl cyclase → more cAMP synthesized) while PDE inhibitors raise it the enzymatic way (↓ cAMP hydrolysis) — two different levers on the same nucleotide, which is why milrinone can still raise inotropy when β-receptor pathways are down-regulated in advanced heart failure.",
    },
    {
      title: "Beta-Blockers",
      topicId: "beta-blockers",
      note:
        "The mirror lever on the same lane: β-blockade reduces cAMP signaling at the receptor, while milrinone raises it downstream at the brake — the reason PDE-3 inhibition stays effective independent of β-receptor occupancy.",
    },
  ],
  crossLinks: [
    {
      subject: "Cardiovascular pharmacology (nitrates and the cGMP axis)",
      connection:
        "Nitroglycerin and isosorbide are NO donors: NO → guanylyl cyclase → ↑ cGMP → vasodilation, the antianginal mechanism. The PDE-5 inhibitors act at the destruction end of the SAME axis (↓ hydrolysis of cGMP), which is precisely why the printed adverse-effect “hypotension in patients taking nitrates” exists — synthesis-side drug plus destruction-side drug on one second messenger compounds into profound hypotension, the classic contraindicated pair.",
    },
    {
      subject: "Biochemistry (second-messenger and smooth-muscle biochemistry)",
      connection:
        "The table is applied second-messenger biochemistry: ↑ cAMP → PKA-mediated phosphorylation, which in cardiomyocytes increases Ca2+ influx (↑ ionotropy and chronotropy) and in vascular smooth muscle inhibits MLCK (myosin light-chain kinase) → vasodilation → ↓ preload and afterload; the cGMP lane (PKG) carries the NO signal in the corpus cavernosum and pulmonary vasculature. One enzyme family (PDE) terminates both lanes — that is the entire pharmacology of this page.",
    },
    {
      subject: "Reproductive physiology (the erection pathway)",
      connection:
        "Erection is a hemodynamic event built on the cGMP axis: NO-driven ↑ cGMP relaxes the trabecular and arterial smooth muscle of the corpus cavernosum, arterial inflow fills the sinusoids, and the printed mechanism arrow ends at “corpus cavernosum fills the penis.” PDE-5 terminates that signal — block it with sildenafil, vardenafil, tadalafil, or avanafil and the signal persists; the same axis in the pulmonary vasculature explains the pulmonary hypertension indication.",
    },
  ],
};
