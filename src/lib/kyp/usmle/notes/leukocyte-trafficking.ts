import type { KypUsMLENote } from "../types";

// Pathology — INFLAMMATION banner (P-batch 9). Source: pdf 233 /
// book 211 (Leukocyte extravasation — the intro line 'Extravasation
// predominantly occurs at postcapillary venules'; the 3-column
// marker table STeP | VASCULATURe/STROMA MARKeRS | LeUKOCYTe
// MARKeRS with its four rows and the two LAD-deficiency notes; and
// the four-station extravasation figure). Census (pdfimages + VLM):
// NO raster images on this page — the figure is VECTOR LINE ART with
// all labels in the text layer: the vessel cross-section (Vessel
// lumen / Endothelium / Interstitium zone labels), six PMN circles,
// Sialyl Lewis X (on the rolling PMN), P-selectin and E-selectin
// (stalks on the endothelium at station 1), LFA-1 (on the flattened
// PMN) and ICAM-1 (on the endothelium opposite it, at station 2),
// PECAM-1 (at the junction during diapedesis), and the four numbered
// stations (Margination & rolling, Tight binding, Diapedesis,
// Migration) — redrawn here as an ORIGINAL KYP figure with original
// glyphs, never a reproduction (the P2/P3 pure-vector convention).
// The table's STEP-column entries interleave in the text layer (the
// M38 pattern: margination-and-rolling prints at raw 62-65, after
// the other three rows). NO margin notes or mnemonics on the page
// (VLM confirmed); the KYP memory layer is original.

export const leukocyteTrafficking: KypUsMLENote = {
  id: "leukocyte-trafficking",
  title: "Leukocyte Extravasation & Cytokines",
  subtitle:
    "The four-station journey of a neutrophil from lumen to injury (book 211) — extravasation predominantly occurs at POSTCAPILLARY VENULES. STATION 1, MARGINATION AND ROLLING — the selectin handshake: E-selectin (released from endothelial cells, upregulated by TNF and IL-1) and P-selectin (translocated to the endothelial surface via exocytosis from Weibel-Palade bodies) on the vasculature against Sialyl LewisX on the leukocyte (with GlyCAM-1 and CD34 on stroma meeting L-selectin); defective in leukocyte adhesion deficiency type 2 (↓ Sialyl LewisX). STATION 2, TIGHT BINDING (ADHESION) — the integrin lock: ICAM-1 (CD54) and VCAM-1 (CD106) on the vasculature against CD11/18 integrins (LFA-1, Mac-1) and VLA-4 integrin on the leukocyte; defective in leukocyte adhesion deficiency type 1 (↓ CD18 integrin subunit). STATION 3, DIAPEDESIS (TRANSMIGRATION) — the WBC travels between endothelial cells and exits the blood vessel, PECAM-1 (CD31) on BOTH sides (the mirror handshake). STATION 4, MIGRATION — the WBC travels through the interstitium to the site of injury or infection guided by chemotactic signals: C5a, IL-8, LTB4, 5-HETE, kallikrein, platelet-activating factor, N-formylmethionyl peptides. Each station is a handshake between one vasculature marker and one leukocyte marker — and each deficiency locks one station.",
  subject: "Pathology",
  system: "Section II · High-Yield General Principles — Pathology: Inflammation",
  pilotCategory:
    "The four-station extravasation cascade with its complete marker pairings (selectins vs Sialyl Lewis X/L-selectin; ICAM-1/VCAM-1 vs CD11/18 integrins and VLA-4; PECAM-1 both sides; the seven chemotactic factors), the postcapillary-venue rule, and the two leukocyte adhesion deficiency lockouts (type 1 ↓ CD18 at binding, type 2 ↓ Sialyl LewisX at rolling).",
  difficulty: 2,
  readTime: 7,
  sourceRef:
    "First Aid 2026, Part 1 pp. 211–211 (Leukocyte extravasation — the postcapillary-venule rule; the STeP | VASCULATURe/STROMA MARKeRS | LeUKOCYTe MARKeRS table with all four rows and both LAD-deficiency notes; the four-station extravasation figure, redrawn as an original KYP figure)",
  tags: [
    "leukocyte extravasation",
    "postcapillary venules",
    "margination",
    "rolling",
    "tight binding",
    "adhesion",
    "diapedesis",
    "transmigration",
    "migration",
    "chemotaxis",
    "E-selectin",
    "P-selectin",
    "TNF",
    "IL-1",
    "Weibel-Palade bodies",
    "exocytosis",
    "Sialyl Lewis X",
    "GlyCAM-1",
    "CD34",
    "L-selectin",
    "ICAM-1",
    "CD54",
    "VCAM-1",
    "CD106",
    "CD11/18 integrins",
    "LFA-1",
    "Mac-1",
    "VLA-4 integrin",
    "PECAM-1",
    "CD31",
    "chemotactic factors",
    "C5a",
    "IL-8",
    "LTB4",
    "5-HETE",
    "kallikrein",
    "platelet-activating factor",
    "N-formylmethionyl peptides",
    "leukocyte adhesion deficiency type 1",
    "LAD-1",
    "CD18 deficiency",
    "leukocyte adhesion deficiency type 2",
    "LAD-2",
    "delayed umbilical cord separation",
    "absent pus",
    "neutrophilia",
    "PMN",
    "interstitium",
    "endothelium",
    "integrins",
    "selectins",
  ],
  core: {
    what: "LEUKOCYTE EXTRAVASATION — predominantly occurs at postcapillary venules. STEP 1, MARGINATION AND ROLLING — defective in leukocyte adhesion deficiency type 2 (↓ Sialyl LewisX). Vasculature/stroma markers: E-selectin (released from endothelial cells, upregulated by TNF and IL-1); P-selectin (translocated to endothelial surface via exocytosis from Weibel-Palade bodies); GlyCAM-1, CD34. Leukocyte markers: Sialyl LewisX; L-selectin. STEP 2, TIGHT BINDING (ADHESION) — defective in leukocyte adhesion deficiency type 1 (↓ CD18 integrin subunit). Vasculature/stroma markers: ICAM-1 (CD54); VCAM-1 (CD106). Leukocyte markers: CD11/18 integrins (LFA-1, Mac-1); VLA-4 integrin. STEP 3, DIAPEDESIS (TRANSMIGRATION) — WBC travels between endothelial cells and exits blood vessel. Both sides: PECAM-1 (CD31). STEP 4, MIGRATION — WBC travels through interstitium to site of injury or infection guided by chemotactic signals. Chemotactic factors: C5a, IL-8, LTB4, 5-HETE, kallikrein, platelet-activating factor, N-formylmethionyl peptides. Leukocyte markers: various.",
    why: "This page is the molecular choreography behind the 'cellular' component of the acute-inflammation panel: the four named steps of extravasation, each a handshake between one vasculature marker and one leukocyte marker, all happening predominantly at the postcapillary venules where flow is slow enough for margination to begin. Rolling is the carbohydrate-selectin meeting (Sialyl Lewis X on the PMN brushing E-selectin — TNF/IL-1-upregulated — and P-selectin — exocytosed from Weibel-Palade bodies; GlyCAM-1 and CD34 meeting L-selectin on the stromal side), a loose touch that slows the cell without stopping it. Tight binding is the integrin lock: LFA-1 and Mac-1 (the CD11/18 integrins, sharing the CD18 subunit) clamping ICAM-1, VLA-4 clamping VCAM-1 — the station that fails in LAD type 1 when the CD18 subunit is missing, producing the child with neutrophilia, absent pus, and delayed umbilical cord separation. Diapedesis is the mirror handshake — PECAM-1 (CD31) on both the leukocyte and the endothelium guiding the squeeze between cells — and migration is the gradient walk through the interstitium, steered by the seven printed chemotactic factors (C5a, IL-8, LTB4, 5-HETE, kallikrein, platelet-activating factor, N-formylmethionyl peptides). The two LAD deficiencies are the page's clinical punchline: each locks one station, one step apart (type 2 fails rolling at the selectin handshake; type 1 fails binding at the integrin handshake).",
    keyIdea:
      "Read extravasation as four handshakes in order — ROLL, LOCK, SQUEEZE, WALK. ROLL (margination and rolling): Sialyl Lewis X (leukocyte) meets E-selectin (TNF/IL-1-upregulated) and P-selectin (Weibel-Palade exocytosis); GlyCAM-1/CD34 meet L-selectin; LAD type 2 = ↓ Sialyl LewisX. LOCK (tight binding): CD11/18 integrins LFA-1 and Mac-1 meet ICAM-1 (CD54); VLA-4 meets VCAM-1 (CD106); LAD type 1 = ↓ CD18 integrin subunit. SQUEEZE (diapedesis): PECAM-1 (CD31) on BOTH the leukocyte and the endothelium, as the WBC travels between endothelial cells and exits the blood vessel. WALK (migration): the chemotactic factors — C5a, IL-8, LTB4, 5-HETE, kallikrein, platelet-activating factor, N-formylmethionyl peptides — guide the WBC through the interstitium to the injury. And the venue is the rule: extravasation predominantly occurs at POSTCAPILLARY VENULES.",
  },
  mechanisms: [
    {
      id: "extravasation-station-map",
      title: "The station map: four handshakes from lumen to injury",
      context: "The four-step table and figure (book 211)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A neutrophil in the bloodstream near injured tissue — predominantly at postcapillary venules",
            sublabel: "Input — the inflammatory signal has already prepared the endothelium (TNF and IL-1 upregulating E-selectin; Weibel-Palade exocytosis delivering P-selectin).",
            variant: "input",
          },
          {
            id: "rolling",
            label: "STATION 1 — MARGINATION AND ROLLING: the selectin handshake",
            sublabel: "E-selectin (released from endothelial cells, upregulated by TNF and IL-1) and P-selectin (translocated via exocytosis from Weibel-Palade bodies) on the vasculature; Sialyl LewisX on the leukocyte; GlyCAM-1 and CD34 on stroma meeting L-selectin — the loose carbohydrate touch that slows the cell.",
            variant: "process",
          },
          {
            id: "binding",
            label: "STATION 2 — TIGHT BINDING (ADHESION): the integrin lock",
            sublabel: "ICAM-1 (CD54) and VCAM-1 (CD106) on the vasculature against CD11/18 integrins (LFA-1, Mac-1) and VLA-4 integrin on the leukocyte — the firm adhesion that stops the cell flat.",
            variant: "process",
          },
          {
            id: "diapedesis",
            label: "STATION 3 — DIAPEDESIS (TRANSMIGRATION): the mirror handshake",
            sublabel: "The WBC travels between endothelial cells and exits the blood vessel, guided by PECAM-1 (CD31) present on BOTH the leukocyte and the endothelium.",
            variant: "process",
          },
          {
            id: "migration",
            label: "STATION 4 — MIGRATION: the gradient walk",
            sublabel: "The WBC travels through the interstitium to the site of injury or infection guided by chemotactic signals — C5a, IL-8, LTB4, 5-HETE, kallikrein, platelet-activating factor, N-formylmethionyl peptides.",
            variant: "process",
          },
          {
            id: "output",
            label: "The neutrophil arrives at the injury — the cellular component of acute inflammation delivered",
            sublabel: "Output — accumulation in the focus of injury, then leukocyte activation; the printed extravasation sequence behind every abscess and every cellulitis.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "rolling", label: "selectins slow" },
          { from: "rolling", to: "binding", label: "integrins lock" },
          { from: "binding", to: "diapedesis", label: "PECAM-1 guides" },
          { from: "diapedesis", to: "migration", label: "chemotaxis steers" },
          { from: "migration", to: "output", label: "arrival" },
        ],
      },
    },
    {
      id: "lad-deficiency-fork",
      title: "The LAD fork: two lockouts, one station apart",
      context: "The two deficiency notes in the table (book 211)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A child with recurrent bacterial infections, absent pus, and neutrophilia",
            sublabel: "Input — the classic leukocyte adhesion deficiency stem; the question is which station is locked.",
            variant: "input",
          },
          {
            id: "lad1",
            label: "LAD TYPE 1 — ↓ CD18 integrin subunit: the LOCK fails",
            sublabel: "The CD11/18 integrins (LFA-1, Mac-1) cannot be built without their shared beta subunit — the PMN rolls but never locks onto ICAM-1; delayed umbilical cord separation, absent pus despite neutrophilia, the classic severe form.",
            variant: "process",
          },
          {
            id: "lad2",
            label: "LAD TYPE 2 — ↓ Sialyl LewisX: the ROLL fails",
            sublabel: "The carbohydrate ligand for the selectins is missing — the PMN cannot even slow down to roll; the defect sits one station earlier than type 1.",
            variant: "process",
          },
          {
            id: "output",
            label: "The station test: which handshake is broken?",
            sublabel: "Output — rolling intact but binding absent → type 1 (CD18); rolling itself absent → type 2 (Sialyl LewisX). Both leave neutrophils circulating (neutrophilia) while tissues starve for them (no pus).",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "lad1", label: "no lock" },
          { from: "trigger", to: "lad2", label: "no roll" },
          { from: "lad1", to: "output", label: "station 2" },
          { from: "lad2", to: "output", label: "station 1" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "leukocyte-trafficking-map",
      title: "The four-station vessel map (an original KYP redraw)",
      caption:
        "An original KYP redraw of the source's vector-line-art figure (book 211 — the vessel cross-section with Vessel lumen, Endothelium, and Interstitium zones, the four numbered stations, and every interaction label): station 1 MARGINATION & ROLLING — a PMN with Sialyl Lewis X rolling on P-selectin and E-selectin stalks (with the Weibel-Palade exocytosis and TNF/IL-1 upregulation notes); station 2 TIGHT BINDING — the flattened PMN's LFA-1 locking the endothelium's ICAM-1; station 3 DIAPEDESIS — the PMN squeezing between endothelial cells at the PECAM-1 junction; station 4 MIGRATION — the PMN walking the chemotactic gradient (C5a, IL-8, LTB4, 5-HETE, kallikrein, PAF, N-formylmethionyl peptides) through the interstitium; the WHERE IT HAPPENS strip (postcapillary venules); the full marker table as four station cards (each with the verbatim VASCULATURe/STROMA MARKeRS and LeUKOCYTe MARKeRS); and the two lockout cards (LAD type 1 ↓ CD18 at binding; LAD type 2 ↓ Sialyl LewisX at rolling).",
      notice:
        "Census (pdfimages + VLM): the source page carries NO raster images — the figure is VECTOR LINE ART with all labels in the text layer (Vessel lumen / Endothelium / Interstitium; six PMN circles; Sialyl Lewis X on the rolling PMN; P-selectin and E-selectin on the endothelium; LFA-1 on the flattened PMN with ICAM-1 opposite; PECAM-1 at the diapedesis junction; the four numbered stations). This registry visual is an ORIGINAL KYP REDRAW with original glyphs — never a reproduction (the P2/P3 pure-vector convention). The table's STEP-column entries interleave in the text layer (the M38 pattern — margination-and-rolling prints at raw 62-65 after the other rows). No margin mnemonics print on the page (VLM confirmed); the KYP memory layer stays original.",
    },
    {
      kind: "table",
      title: "Book 211 — the marker table (carried verbatim, all four rows)",
      intro: "The STeP | VASCULATURe/STROMA MARKeRS | LeUKOCYTe MARKeRS table, as printed — the handshake pairs in full.",
      columns: ["STeP (verbatim)", "VASCULATURe/STROMA MARKeRS (verbatim)", "LeUKOCYTe MARKeRS (verbatim)"],
      rows: [
        [
          "Margination and rolling—defective in leukocyte adhesion deficiency type 2 (↓ Sialyl LewisX)",
          "E-selectin (released from endothelial cells, upregulated by TNF and IL-1); P-selectin (translocated to endothelial surface via exocytosis from Weibel-Palade bodies); GlyCAM-1, CD34",
          "Sialyl LewisX; L-selectin",
        ],
        [
          "Tight binding (adhesion)—defective in leukocyte adhesion deficiency type 1 (↓ CD18 integrin subunit)",
          "ICAM-1 (CD54); VCAM-1 (CD106)",
          "CD11/18 integrins (LFA-1, Mac-1); VLA-4 integrin",
        ],
        [
          "DiaPEdesis (transmigration)—WBC travels between endothelial cells and exits blood vessel",
          "PECAM-1 (CD31)",
          "PECAM-1 (CD31)",
        ],
        [
          "Migration—WBC travels through interstitium to site of injury or infection guided by chemotactic signals",
          "Chemotactic factors: C5a, IL-8, LTB4, 5-HETE, kallikrein, platelet-activating factor, N-formylmethionyl peptides",
          "Various",
        ],
      ],
      caption:
        "Four handshakes in order — the carbohydrate-selectin roll, the integrin-Ig-family lock, the PECAM-1 mirror squeeze, and the chemotactic gradient walk — every marker pair the exam can ask for, with the two LAD lockouts printed in their rows.",
    },
    {
      kind: "table",
      title: "The figure's labels (reading order, VLM-verified)",
      intro: "The redrawn figure's own labels, as printed in the source text layer.",
      columns: ["FIGURE ZONE", "LABELS (verbatim)"],
      rows: [
        [
          "THE STATIONS (numbered in the figure)",
          "Margination & rolling · 2. Tight binding · 3. Diapedesis · 4. Migration",
        ],
        [
          "THE VESSEL ZONES (left-edge labels)",
          "Vessel lumen · Endothelium · Interstitium",
        ],
        [
          "THE INTERACTION LABELS (with leader lines)",
          "Sialyl Lewis X (on the rolling PMN) · P-selectin (endothelial stalk, station 1) · E-selectin (endothelial stalk, station 1) · LFA-1 (on the flattened PMN, station 2) · ICAM-1 (on the endothelium opposite LFA-1) · PECAM-1 (at the junction, station 3) · PMN ×6 (rolling, flattening, squeezing, and migrating)",
        ],
      ],
      caption:
        "The figure IS the sequence: one PMN shown four times — rolling on selectins, flattened on integrins, squeezing at PECAM-1, and walking the gradient — the same journey the table describes one handshake at a time.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 2-year-old boy has recurrent Staphylococcus aureus skin abscesses that yield no pus on incision, severe gingivitis, and a history of delayed separation of the umbilical cord at 3 weeks of age; WBC count is 32,000/mm³ with 88% neutrophils, and flow cytometry shows absent CD18 expression.",
        discriminator: "Leukocyte adhesion deficiency type 1 — ↓ CD18 integrin subunit, tight binding fails; neutrophilia without pus, delayed cord separation",
        concept: "The binding lockout",
        answer:
          "LAD type 1: the ↓ CD18 integrin subunit means the CD11/18 integrins (LFA-1, Mac-1) cannot be built — the tight-binding handshake with ICAM-1 (CD54) fails at station 2. The neutrophils marginate and roll normally but never lock onto the endothelium, so they stay in the blood (the neutrophilia) while the tissues starve for them (the abscesses without pus, the gingivitis) — and the delayed umbilical cord separation is the classic neonatal tell of a neutrophil that cannot reach the cord stump.",
      },
      {
        stem: "A 14-month-old girl has recurrent pneumonia and skin infections; laboratory evaluation shows neutrophilia, and her neutrophils fail to roll on E-selectin-coated surfaces under flow, although they adhere and spread normally on ICAM-1 once contact is forced.",
        discriminator: "Leukocyte adhesion deficiency type 2 — ↓ Sialyl LewisX, the selectin handshake fails at rolling",
        concept: "The rolling lockout",
        answer:
          "LAD type 2: the ↓ Sialyl LewisX carbohydrate ligand means the leukocyte cannot make the rolling handshake with E-selectin (upregulated by TNF and IL-1) and P-selectin (exocytosed from Weibel-Palade bodies) — station 1 fails, one step earlier than type 1. The integrins are intact (hence normal adhesion and spreading on ICAM-1 when contact is forced), but the cell never slows down enough in the vessel to use them.",
      },
      {
        stem: "A researcher stains an inflamed tissue section and finds CD31 marking the exact sites where neutrophils cross the vessel wall between endothelial cells.",
        discriminator: "PECAM-1 (CD31) — the diapedesis handshake, present on BOTH the leukocyte and the endothelium",
        concept: "The mirror handshake",
        answer:
          "PECAM-1 (CD31) is the third station's marker pair — the only one in the cascade that is the SAME molecule on both sides: the WBC travels between endothelial cells and exits the blood vessel, with leukocyte PECAM-1 meeting endothelial PECAM-1 at the junction. It is the printed diapedesis (transmigration) marker, distinct from the selectins of rolling and the integrins of tight binding.",
      },
    ],
    traps: [
      {
        a: "LAD type 1 (↓ CD18)",
        b: "LAD type 2 (↓ Sialyl LewisX)",
        whyConfused: "Both cause recurrent infections without pus and both leave neutrophils circulating",
        keyDifference: "Type 1 = the CD18 integrin subunit is missing → the CD11/18 integrins (LFA-1, Mac-1) fail at TIGHT BINDING (station 2), classically with delayed umbilical cord separation; type 2 = Sialyl LewisX is missing → the selectin handshake fails at ROLLING (station 1), one station earlier",
        clue: "Absent CD18 on flow cytometry or delayed cord separation → type 1; a rolling defect with intact forced adhesion on ICAM-1 → type 2",
      },
      {
        a: "E-selectin on the endothelium",
        b: "Sialyl LewisX on the leukocyte",
        whyConfused: "They are the two halves of the same rolling handshake",
        keyDifference: "E-selectin is the VASCULATURe/STROMA marker (released from endothelial cells, upregulated by TNF and IL-1); Sialyl LewisX is the LeUKOCYTe marker (the carbohydrate ligand) — the table's two columns are the two sides of every handshake",
        clue: "Which side of the vessel wall the question asks about: endothelial marker (E-selectin, P-selectin, ICAM-1, VCAM-1, PECAM-1) or leukocyte marker (Sialyl LewisX, L-selectin, CD11/18, VLA-4, PECAM-1)",
      },
      {
        a: "P-selectin (Weibel-Palade exocytosis)",
        b: "E-selectin (TNF/IL-1 upregulation)",
        whyConfused: "Both are endothelial selectins serving the same rolling station",
        keyDifference: "P-selectin is TRANSLOCATED to the endothelial surface via exocytosis from Weibel-Palade bodies (the pre-made, rapid route); E-selectin is RELEASED from endothelial cells and upregulated by TNF and IL-1 (the inducible route) — two delivery mechanisms to the same handshake",
        clue: "A question about rapid pre-formed selectin arrival → Weibel-Palade bodies and P-selectin; a question about cytokine-induced expression → TNF/IL-1 and E-selectin",
      },
      {
        a: "VLA-4 integrin",
        b: "LFA-1 and Mac-1",
        whyConfused: "All are leukocyte integrins of the tight-binding station",
        keyDifference: "CD11/18 integrins (LFA-1, Mac-1) bind ICAM-1 (CD54) — and share the CD18 subunit that LAD-1 lacks; VLA-4 integrin binds VCAM-1 (CD106) — a separate pairing that eosinophils and lymphocytes also use",
        clue: "Match the integrin to its endothelial partner: LFA-1/Mac-1 → ICAM-1; VLA-4 → VCAM-1",
      },
    ],
    pivots: [
      {
        lookAlike: "A marker named in the stem — which station, and which side?",
        differentiator: "Route by the handshake: selectins (E, P) + Sialyl LewisX/L-selectin = rolling; ICAM-1/VCAM-1 + CD11/18 and VLA-4 = tight binding; PECAM-1 (CD31) both sides = diapedesis; the chemotactic seven = migration",
        correctPath: "Name the side first (endothelium vs leukocyte), then the station, then the partner: every question about a CD number resolves to one handshake in the four-step sequence",
      },
      {
        lookAlike: "An infection-without-pus presentation — adhesion defect or chemotaxis defect?",
        differentiator: "The LAD lockouts leave a NEUTROPHILIA (cells stuck in blood); a chemotaxis-factor problem (C5a, IL-8, LTB4, 5-HETE, kallikrein, PAF, N-formylmethionyl peptides) impairs the fourth station's guidance — the cells arrive but late and lost",
        correctPath: "Neutrophilia + absent pus + delayed cord separation → the adhesion lockout (CD18 or Sialyl LewisX); normal counts but misdirected neutrophils → the migration/chemotaxis layer",
      },
    ],
    miniCase: {
      vignette:
        "A previously healthy 18-month-old boy is referred for evaluation of recurrent skin and periodontal infections since infancy. His caregivers report that three abscesses have been drained but yielded almost no purulent material despite marked redness and warmth, and that his umbilical cord separated only at 26 days of life. He has severe gingivitis with gum recession but no candidiasis. Temperature is 38.6°C; WBC count is 28,400/mm³ with 90% neutrophils and no bands; hemoglobin and platelets are normal. Immunoglobulins are increased, and lymphocyte subsets are normal. A peripheral smear shows normal-appearing neutrophils with normal granules. During an admission for cellulitis, a biopsy of the lesion shows scant neutrophil infiltrate in the tissue despite the marked blood neutrophilia. Flow cytometry is pending.",
      question:
        "Which station of leukocyte extravasation is defective, which molecule is missing, and why are the abscesses dry despite the high neutrophil count?",
      options: [
        {
          label: "Station 2, tight binding — ↓ CD18 integrin subunit (LAD type 1): the neutrophils roll on selectins but cannot lock onto ICAM-1, so they remain in the blood while the tissues starve for them",
          text: "The lock is broken: rolling intact, binding absent, no pus.",
          correct: true,
          why: "Correct on all three layers. The clinical triad is the classic LAD type 1 stem: recurrent bacterial infections WITHOUT pus (the drained abscesses yield almost nothing), severe gingivitis/periodontitis, and DELAYED UMBILICAL CORD SEPARATION (26 days — the neonatal tell, since neutrophils normally clear the cord stump). The ↓ CD18 integrin subunit means the CD11/18 integrins (LFA-1, Mac-1) cannot be built, so at station 2 the leukocyte's half of the tight-binding handshake with ICAM-1 (CD54) is absent: the neutrophils marginate and roll normally on the selectins (station 1 intact) but never firmly adhere, never diapedese, and never migrate to the tissue. The result is the paradox the stem paints — blood neutrophilia (28,400 with 90% neutrophils, the cells stuck circulating) beside a tissue biopsy with scant neutrophil infiltrate (the cells cannot exit), and abscesses that are red and warm (the vascular phase proceeds) but dry (the cellular delivery fails).",
        },
        {
          label: "Station 1, rolling — ↓ Sialyl LewisX (LAD type 2): the neutrophils cannot make the selectin handshake, so they never even slow down in the vessel",
          text: "One station earlier: the carbohydrate ligand is the missing piece.",
          why: "Wrong station: LAD type 2 (↓ Sialyl LewisX) fails at MARGINATION AND ROLLING — station 1, the E-selectin/P-selectin handshake. The stem's details fit station 2 instead: the classic LAD type 1 severity with delayed umbilical cord separation, and (on the pending flow cytometry) absent CD18. Type 2 is typically milder and lacks the classic cord-separation history; the discriminating fact would be WHERE the cascade stalls — rolling vs binding — and the stem's phenotype is the binding phenotype.",
        },
        {
          label: "Station 4, migration — a chemotaxis defect: the neutrophils exit the vessel but cannot follow the C5a/IL-8 gradient to the injury",
          text: "The cells arrive in the tissue but wander lost.",
          why: "Wrong layer and wrong histology: a chemotactic-factor problem (C5a, IL-8, LTB4, 5-HETE, kallikrein, PAF, N-formylmethionyl peptides) would still deliver SOME neutrophils to the tissue — and the biopsy here shows a SCANT infiltrate, meaning the cells never exited the vessel at all. The blood neutrophilia with a dry tissue points upstream of migration, at the adhesion stations.",
        },
        {
          label: "Station 3, diapedesis — a PECAM-1 (CD31) defect: the neutrophils bind tightly but cannot squeeze between the endothelial cells",
          text: "The cells line up on the wall but cannot pass through it.",
          why: "Wrong handshake: a PECAM-1 (CD31) defect would block the third station — the WBC traveling BETWEEN endothelial cells — which is not a recognized classic deficiency pattern in the table (the two printed deficiencies are the LADs), and the stem's delayed cord separation + absent CD18 phenotype names the integrin lockout, not the junction crossing.",
        },
        {
          label: "No extravasation defect — this isJob syndrome (hyper-IgE) with cold abscesses from a Th17 defect",
          text: "The dry abscesses and high immunoglobulins are the eczema-and-cold-abscess syndrome.",
          why: "Wrong diagnosis: hyper-IgE syndrome (Job syndrome) produces COLD abscesses (without much redness or warmth) with eczema, coarse facies, and recurrent staphylococcal infections — but the stem's abscesses sit on marked redness and warmth (hot, not cold), there is no eczema or candidiasis, the gingivitis-periodontitis pattern with delayed cord separation is the neutrophil-adhesion signature, and the immunoglobulin elevation here is the nonspecific reactive kind. The flow cytometry result (absent CD18) will close the case for LAD type 1.",
        },
      ],
      reasoning:
        "The stem stacks the LAD type 1 phenotype layer by layer. (1) The INFECTION PATTERN: recurrent bacterial skin abscesses and severe gingivitis/periodontitis — the neutrophil-delivery failure signature. (2) The PARADOX: abscesses that are red and warm (the vascular phase of inflammation — vasodilation, the vascular component — proceeds normally) but dry on drainage, beside a blood count of 28,400 with 90% neutrophils (the cells are manufactured and circulating but cannot LEAVE the blood) and a tissue biopsy with scant neutrophil infiltrate (the cellular component fails). (3) The NEONATAL TELL: delayed umbilical cord separation at 26 days — the cord stump is cleared by neutrophils, and its persistence is the classic LAD type 1 marker. (4) The STATION LOGIC: rolling requires E-selectin/P-selectin (upregulated by TNF/IL-1; exocytosed from Weibel-Palade bodies) meeting Sialyl LewisX — intact here; binding requires the CD11/18 integrins (LFA-1, Mac-1) locking ICAM-1 (CD54) — destroyed by the missing CD18 beta subunit; diapedesis requires PECAM-1 (CD31) on both sides; migration follows the seven chemotactic factors (C5a, IL-8, LTB4, 5-HETE, kallikrein, PAF, N-formylmethionyl peptides). Locking station 2 traps everything upstream: blood neutrophilia, dry abscesses, starving tissue. The distractors each misplace the lesion: type 2 (one station early — and the phenotype is milder without the cord history), chemotaxis (tissue would still receive cells), PECAM-1 (the junction, not the lock), and hyper-IgE (cold abscesses with eczema — a different disease family). The four-handshake rule — roll, lock, squeeze, walk — closes the case at the lock.",
    },
  },
  mnemonics: [
    {
      code: "ROLL LOCK SQUEEZE WALK",
      meaning: "The four stations in order: ROLL (margination and rolling — Sialyl LewisX meets E-selectin [TNF/IL-1-upregulated] and P-selectin [Weibel-Palade exocytosis]; GlyCAM-1/CD34 meet L-selectin), LOCK (tight binding — CD11/18 integrins [LFA-1, Mac-1] meet ICAM-1 [CD54]; VLA-4 meets VCAM-1 [CD106]), SQUEEZE (diapedesis — PECAM-1 [CD31] on BOTH sides as the WBC travels between endothelial cells), WALK (migration — the chemotactic factors C5a, IL-8, LTB4, 5-HETE, kallikrein, PAF, N-formylmethionyl peptides guide the interstitium crossing).",
      memorizes: "The four-step extravasation sequence with every marker",
      whenToUse: "Any question naming a selectin, integrin, CD marker, or chemotactic factor in inflammation",
      clinical: "Each station is a handshake: carbohydrate-to-selectin, integrin-to-Ig-family, PECAM-to-PECAM, then the gradient walk.",
    },
    {
      code: "POSTCAPILLARY IS THE DOOR",
      meaning: "The venue rule: extravasation predominantly occurs at POSTCAPILLARY VENULES — the slow, permeable stretch of the circulation where margination can begin; not capillaries, not arterioles, not veins.",
      memorizes: "The intro line of the page",
      whenToUse: "Any 'where does extravasation occur?' question",
      clinical: "The histologist's vessel-typing question hiding inside the inflammation chapter.",
    },
    {
      code: "CARBOHYDRATE ROLLS, INTEGRIN LOCKS",
      meaning: "The chemistry of the first two handshakes: rolling is a CARBOHYDRATE-to-selectin interaction (Sialyl LewisX on the leukocyte brushing the endothelial selectins — loose, reversible, slowing), while binding is an INTEGRIN-to-immunoglobulin-family interaction (LFA-1/Mac-1 on ICAM-1; VLA-4 on VCAM-1 — firm, locking) — and the two LAD lockouts break exactly these: type 2 the carbohydrate, type 1 the integrin.",
      memorizes: "Which molecule class serves which station, and which deficiency breaks it",
      whenToUse: "Any LAD question or any question about the strength/reversibility of an adhesion interaction",
      clinical: "The child who cannot roll (type 2) and the child who cannot lock (type 1, absent CD18) — one station apart, both without pus.",
    },
    {
      code: "C5a IL-8 LTB4 — THE GRADIENT SEVEN",
      meaning: "The migration station's chemotactic factors, as printed: C5a, IL-8, LTB4, 5-HETE, kallikrein, platelet-activating factor, N-formylmethionyl peptides — the signals the WBC follows through the interstitium to the site of injury or infection.",
      memorizes: "The chemotactic factor list",
      whenToUse: "Any chemotaxis question or any 'which factor guides neutrophils to the injury?' stem",
      clinical: "Complement's C5a, the cytokine IL-8, the leukotriene LTB4 (and 5-HETE), the kinin kallikrein, the platelet product PAF, and the bacterial N-formylmethionyl peptides — seven gradients, one destination.",
    },
  ],
  rapidReview: {
    s30: [
      "Extravasation predominantly occurs at postcapillary venules",
      "Margination and rolling: E-selectin (released from endothelial cells, upregulated by TNF and IL-1), P-selectin (translocated to endothelial surface via exocytosis from Weibel-Palade bodies), GlyCAM-1/CD34 vs Sialyl LewisX and L-selectin; defective in LAD type 2 (↓ Sialyl LewisX)",
      "Tight binding (adhesion): ICAM-1 (CD54), VCAM-1 (CD106) vs CD11/18 integrins (LFA-1, Mac-1) and VLA-4 integrin; defective in LAD type 1 (↓ CD18 integrin subunit)",
      "Diapedesis (transmigration): WBC travels between endothelial cells and exits blood vessel; PECAM-1 (CD31) on BOTH sides",
      "Migration: WBC travels through interstitium guided by chemotactic signals — C5a, IL-8, LTB4, 5-HETE, kallikrein, platelet-activating factor, N-formylmethionyl peptides; leukocyte markers: various",
    ],
    m3: [
      "ROLL LOCK SQUEEZE WALK — the four stations with their handshakes in order",
      "POSTCAPILLARY IS THE DOOR — extravasation predominantly occurs at postcapillary venules",
      "CARBOHYDRATE ROLLS, INTEGRIN LOCKS — Sialyl LewisX meets selectins (rolling); CD11/18 and VLA-4 meet ICAM-1/VCAM-1 (binding); LAD-2 breaks the carbohydrate, LAD-1 (↓ CD18) breaks the integrin",
      "PECAM-1 (CD31) is the mirror handshake — the same molecule on both the leukocyte and the endothelium at diapedesis",
      "The gradient seven: C5a, IL-8, LTB4, 5-HETE, kallikrein, platelet-activating factor, N-formylmethionyl peptides",
    ],
    m10: [
      "P-selectin arrives fast (pre-formed, Weibel-Palade body exocytosis); E-selectin arrives induced (TNF and IL-1 upregulation) — two delivery routes to the same rolling station",
      "LAD type 1 phenotype: recurrent infections without pus, severe gingivitis/periodontitis, delayed umbilical cord separation, persistent neutrophilia with absent CD18 on flow cytometry",
      "LAD type 2 (↓ Sialyl LewisX) fails one station earlier — the rolling handshake itself — and is typically milder than type 1",
      "The integrin-to-partner pairings: LFA-1/Mac-1 (CD11/18) → ICAM-1 (CD54); VLA-4 → VCAM-1 (CD106)",
      "The figure (an original KYP redraw): the vessel cross-section with Vessel lumen / Endothelium / Interstitium, the PMN shown rolling, flattening, squeezing, and migrating — Sialyl Lewis X, P-selectin, E-selectin, LFA-1, ICAM-1, PECAM-1 labeled at their stations",
    ],
  },
  recall: [
    {
      q: "The marker table verbatim — station 1 (margination and rolling), both columns.",
      a: "STeP: Margination and rolling—defective in leukocyte adhesion deficiency type 2 (↓ Sialyl LewisX). VASCULATURe/STROMA MARKeRS: E-selectin (released from endothelial cells, upregulated by TNF and IL-1); P-selectin (translocated to endothelial surface via exocytosis from Weibel-Palade bodies); GlyCAM-1, CD34. LeUKOCYTe MARKeRS: Sialyl LewisX; L-selectin.",
    },
    {
      q: "The marker table verbatim — station 2 (tight binding), both columns.",
      a: "STeP: Tight binding (adhesion)—defective in leukocyte adhesion deficiency type 1 (↓ CD18 integrin subunit). VASCULATURe/STROMA MARKeRS: ICAM-1 (CD54); VCAM-1 (CD106). LeUKOCYTe MARKeRS: CD11/18 integrins (LFA-1, Mac-1); VLA-4 integrin.",
    },
    {
      q: "The marker table verbatim — stations 3 and 4.",
      a: "DiaPEdesis (transmigration)—WBC travels between endothelial cells and exits blood vessel. VASCULATURe/STROMA MARKeRS: PECAM-1 (CD31). LeUKOCYTe MARKeRS: PECAM-1 (CD31). Migration—WBC travels through interstitium to site of injury or infection guided by chemotactic signals. Chemotactic factors: C5a, IL-8, LTB4, 5-HETE, kallikrein, platelet-activating factor, N-formylmethionyl peptides. LeUKOCYTe MARKeRS: Various.",
    },
    {
      q: "The intro rule and the two deficiency notes.",
      a: "Extravasation predominantly occurs at postcapillary venules. LAD type 2 = ↓ Sialyl LewisX (the rolling/selectin handshake fails — station 1). LAD type 1 = ↓ CD18 integrin subunit (the tight-binding handshake fails — station 2; absent CD11/18 integrins LFA-1 and Mac-1, so ICAM-1 cannot be locked).",
    },
    {
      q: "The figure's labels in reading order (the redrawn topology).",
      a: "Zone labels: Vessel lumen, Endothelium, Interstitium. Stations: Margination & rolling, 2. Tight binding, 3. Diapedesis, 4. Migration. Interaction labels: Sialyl Lewis X (on the rolling PMN); P-selectin and E-selectin (endothelial stalks at station 1); LFA-1 (on the flattened PMN) meeting ICAM-1 (on the endothelium) at station 2; PECAM-1 (at the junction) at station 3; six PMN circles across the journey.",
    },
  ],
  related: [
    {
      title: "Acute Inflammation: Cardinal Signs & Acute-Phase Reactants",
      topicId: "acute-inflammation",
      note: "The previous page names this cascade in one line ('leukocyte extravasation has 4 steps: margination and rolling, adhesion, transmigration, and migration') — this page is that line expanded into its full molecular choreography, the cellular component of the acute-inflammation panel.",
    },
    {
      title: "T-cell & Phagocyte Immunodeficiencies",
      topicId: "t-cell-phagocyte-immunodeficiencies",
      note: "The two LAD lockouts live here in their clinical home — the phagocyte-deficiency family where recurrent infection without pus, delayed cord separation, and neutrophilia name the missing CD18 or Sialyl LewisX.",
    },
    {
      title: "Complement Pathways",
      topicId: "complement-pathways",
      note: "C5a pulls double duty: an anaphylatoxin in the complement cascade and the first-listed chemotactic factor of the migration station — the bridge between the complement page and this one.",
    },
    {
      title: "Cytokines",
      topicId: "cytokines",
      note: "IL-1 and TNF are the upregulators of E-selectin (the inducible half of the rolling station) and IL-8 is the second-listed chemotactic factor — the cytokine page's actors running the endothelial side of extravasation.",
    },
  ],
  crossLinks: [
    {
      subject: "Immunology (the adhesion molecules)",
      connection:
        "Every marker here is an immunology molecule wearing a pathology job: the selectins, the integrin/Ig-superfamily pairs (ICAM-1, VCAM-1), PECAM-1, and the chemotactic complement fragment C5a — the extravasation table is the immunology adhesion chapter operating in tissue.",
    },
    {
      subject: "Immunodeficiency (the LAD phenotypes)",
      connection:
        "LAD type 1 (↓ CD18) and type 2 (↓ Sialyl LewisX) are the clinical lockouts of stations 2 and 1 — neutrophilia without pus, delayed umbilical cord separation, severe gingivitis: the phagocyte-deficiency exam stems this page's table answers.",
    },
    {
      subject: "Pharmacology (anti-adhesion therapy)",
      connection:
        "Natalizumab blocks the VLA-4–VCAM-1 handshake (the tight-binding station's second pairing) — the multiple-sclerosis therapy that works by preventing lymphocyte extravasation into the CNS, this page's station 2 turned into a drug target.",
    },
    {
      subject: "Cardiovascular (the vessel segment rule)",
      connection:
        "The postcapillary-venue rule ties extravasation to the microcirculation's anatomy — the slow, permeable postcapillary stretch is where margination can begin, the same segment whose leak produces the exudate of the cardinal-sign page.",
    },
  ],
};
