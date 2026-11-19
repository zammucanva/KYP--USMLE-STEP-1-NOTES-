import type { KypUsMLENote } from "../types";

// Pathology — NEOPLASIA banner (P-batch 14). Source: pdf 240 / book 218
// (Immune checkpoint interactions + Cancer epidemiology — the single-page
// topic). Content: the checkpoint intro [signals that modulate T-cell
// activation and function → ↓ immune response against tumor cells,
// targeted by several cancer immunotherapies]; the PD-1/PD-L1 axis
// [PD-1 on T cells × PD-L1/2 on tumor cells or immune cells in the tumor
// microenvironment → T-cell dysfunction (exhaustion); anti-PD-1
// cemiplimab/nivolumab/pembrolizumab; anti-PD-L1 atezolizumab/durvalumab/
// avelumab]; the CTLA-4/B7 axis [CTLA-4 on T cells outcompetes CD28 for
// B7 on APCs → loss of T-cell costimulatory signal; anti-CTLA-4
// ipilimumab]; and the VERBATIM Cancer epidemiology table [skin cancer
// (basal > squamous >> melanoma) the most common cancer, excluded;
// incidence males prostate/lung/colon, females breast/lung/colon,
// children leukemia/CNS/neuroblastoma; mortality lung #1 in both sexes;
// both NOTES lines]. Census (pdfimages + VLM): ZERO raster images —
// pure text + ONE vector line-art figure ("Immune checkpoint
// interactions": an APC and T cell with MHC II/TCR/B7/CD28/CTLA-4 on the
// left, a Tumor cell with MHC I/PD-L1 facing PD-1 on the right, the
// seven drug antibodies as Y-shaped blockers) — redrawn as an ORIGINAL
// KYP figure (the P2/P3 pure-vector convention). The figure's labels
// interleave with the running text at raw lines 21-54 (the M39
// footer-split pattern) — documented in the manifest. NO margin notes or
// mnemonics on the page (VLM confirmed); the KYP memory layer is original.

export const cancerImmunotherapyEpidemiology: KypUsMLENote = {
  id: "cancer-immunotherapy-epidemiology",
  title: "Cancer Immunotherapy & Epidemiology",
  subtitle:
    "The two checkpoint brakes and the seven antibodies that release them — plus the incidence-versus-mortality table every exam leans on (book 218) — IMMUNE CHECKPOINT INTERACTIONS: signals that modulate T-cell activation and function → ↓ immune response against tumor cells, targeted by several cancer immunotherapies; the PD-1 (on T cells) × PD-L1/2 (on tumor cells or immune cells in the tumor microenvironment) axis → T-cell dysfunction (exhaustion), inhibited by anti-PD-1 (cemiplimab, nivolumab, pembrolizumab) or anti-PD-L1 (atezolizumab, durvalumab, avelumab) antibodies; and the CTLA-4 on T cells × B7 on APCs axis, where CTLA-4 outcompetes CD28 for B7 → loss of the T-cell costimulatory signal, inhibited by anti-CTLA-4 (ipilimumab). CANCER EPIDEMIOLOGY: skin cancer (basal > squamous >> melanoma) is the most common cancer (not included in the table); incidence #1 = prostate (males), breast (females), leukemia (children 0-14); mortality #1 = LUNG in both sexes; cancer is the 2nd leading cause of US death (heart disease is 1st).",
  subject: "Pathology",
  system: "Section II · High-Yield General Principles — Pathology: Neoplasia",
  pilotCategory:
    "The page's complete translational layer — the checkpoint interaction figure's two axes with all seven drug antibodies placed at their exact binding sites, the PD-1/PD-L1 exhaustion mechanism against the CTLA-4/B7 costimulation-loss mechanism, and the full verbatim cancer epidemiology table (incidence and mortality × males/females/children with both NOTES lines and the skin-cancer exclusion).",
  difficulty: 2,
  readTime: 7,
  sourceRef:
    "First Aid 2026, Part 1 pp. 218–218 (Pathology — Neoplasia: Immune checkpoint interactions [the PD-1 × PD-L1/2 exhaustion axis with cemiplimab/nivolumab/pembrolizumab and atezolizumab/durvalumab/avelumab; the CTLA-4/CD28/B7 costimulation-loss axis with ipilimumab]; Cancer epidemiology [the skin-cancer exclusion line, the incidence and mortality rows for males/females/children, and both NOTES]; the checkpoint vector figure, redrawn as an original KYP figure)",
  tags: [
    "immune checkpoint",
    "checkpoint interactions",
    "cancer immunotherapy",
    "checkpoint inhibitors",
    "PD-1",
    "PD-L1",
    "PD-L2",
    "T-cell exhaustion",
    "T-cell dysfunction",
    "anti-PD-1",
    "cemiplimab",
    "nivolumab",
    "pembrolizumab",
    "anti-PD-L1",
    "atezolizumab",
    "durvalumab",
    "avelumab",
    "CTLA-4",
    "CD28",
    "B7",
    "ipilimumab",
    "anti-CTLA-4",
    "costimulatory signal",
    "signal 2",
    "APC",
    "antigen presentation",
    "MHC II",
    "MHC I",
    "TCR",
    "T-cell activation",
    "tumor microenvironment",
    "melanoma",
    "immune-related adverse events",
    "cancer epidemiology",
    "cancer incidence",
    "cancer mortality",
    "prostate cancer",
    "lung cancer",
    "breast cancer",
    "colorectal cancer",
    "leukemia",
    "CNS tumors",
    "neuroblastoma",
    "skin cancer",
    "basal cell carcinoma",
    "squamous cell carcinoma",
    "melanoma epidemiology",
    "leading causes of death",
    "heart disease",
  ],
  core: {
    what:
      "IMMUNE CHECKPOINT INTERACTIONS: signals that modulate T-cell activation and function → ↓ immune response against tumor cells; targeted by several cancer immunotherapies. Two examples. (1) THE PD-1 AXIS: interaction between PD-1 (on T cells) and PD-L1/2 (on tumor cells or immune cells in tumor microenvironment) → T-cell dysfunction (exhaustion); inhibited by antibodies against PD-1 (eg, cemiplimab, nivolumab, pembrolizumab) or PD-L1 (eg, atezolizumab, durvalumab, avelumab). (2) THE CTLA-4 AXIS: CTLA-4 on T cells outcompetes CD28 for B7 on APCs → loss of T-cell costimulatory signal; inhibited by antibodies against CTLA-4 (eg, ipilimumab). The figure: an APC presents antigen on MHC II to the TCR (T-cell activation) while B7 engages CD28 (costimulation ON); CTLA-4 competes for B7 (the off-switch); on the far side, PD-1 on the T cell faces PD-L1 on the tumor cell (MHC I also on the tumor cell) — the seven antibodies drawn as Y-shaped blockers at those binding sites. CANCER EPIDEMIOLOGY: skin cancer (basal > squamous >> melanoma) is the most common cancer (not included below). CANCER INCIDENCE — MALES: 1. Prostate 2. Lung 3. Colon/rectum; FEMALES: 1. Breast 2. Lung 3. Colon/rectum; CHILDREN (AGE 0-14): 1. Leukemia 2. CNS 3. Neuroblastoma; NOTES: lung cancer incidence has ↓ in males, but has not changed significantly in females. CANCER MORTALITY — MALES: 1. Lung 2. Prostate 3. Colon/rectum; FEMALES: 1. Lung 2. Breast 3. Colon/rectum; CHILDREN (AGE 0-14): 1. Leukemia 2. CNS 3. Neuroblastoma; NOTES: cancer is the 2nd leading cause of death in the United States (heart disease is 1st).",
    why:
      "This single page is the neoplasia chapter's translational hinge: the previous page listed 'tumor cells upregulate immune checkpoint molecules, which inhibit immune response' as a hallmark of immune evasion — this page names the two checkpoints and the seven antibodies built to block them. The logic is the same for both axes: a checkpoint is a BRAKE on the T cell, so blocking the brake releases the cell. The CTLA-4 brake sits at the START — the priming gate at the APC, where CTLA-4 outcompetes CD28 for B7 and denies the costimulatory signal (signal 2) that activation requires; ipilimumab holds that gate open. The PD-1 brake sits in the FIELD — the tumor microenvironment, where PD-1 on the exhausted T cell meets PD-L1/2 on the tumor cell (or on immune cells standing nearby); the anti-PD-1 trio blocks the receptor on the T-cell side and the anti-PD-L1 trio blocks the ligand on the tumor side, both lifting the exhaustion. The same logic explains the drugs' immune-related adverse events: a brake released is released everywhere, so gut, skin, endocrine glands, and lung pay the price. Then the page's second half is pure population math, and its trap is the flip: incidence asks who GETS cancer (prostate in males, breast in females, leukemia in children) while mortality asks who DIES of it — and the answer to that is lung, first in males and first in females, with colon/rectum holding #3 in every adult column; skin cancer, the most common cancer of all (basal > squamous >> melanoma), is excluded from the table; and cancer overall ranks 2nd among US causes of death behind heart disease.",
    keyIdea:
      "Read the page through two frames. FRAME 1 — THE TWO BRAKES: CTLA-4 is the START GATE (at the APC: CTLA-4 on T cells outcompetes CD28 for B7 → loss of T-cell costimulatory signal; blocked by ipilimumab); PD-1 is the EXHAUSTION BRAKE (in the tumor microenvironment: PD-1 on T cells × PD-L1/2 on tumor cells or immune cells → T-cell dysfunction/exhaustion; blocked on the T-cell side by cemiplimab/nivolumab/pembrolizumab and on the tumor side by atezolizumab/durvalumab/avelumab). Blocking a brake restores T-cell activation and function — and overflows into immune-related adverse events. FRAME 2 — THE TABLE SPLIT: INCIDENCE = new cases (males 1. Prostate 2. Lung 3. Colon/rectum; females 1. Breast 2. Lung 3. Colon/rectum; children 1. Leukemia 2. CNS 3. Neuroblastoma); MORTALITY = deaths (lung #1 in BOTH sexes; the children's trio unchanged; colon/rectum #3 everywhere in adults); skin cancer (basal > squamous >> melanoma) is the most common cancer overall but excluded from the table; cancer is the 2nd leading cause of US death — heart disease is 1st; lung cancer incidence has ↓ in males but has not changed significantly in females.",
  },
  mechanisms: [
    {
      id: "checkpoint-blockade-map",
      title:
        "Checkpoint blockade: the two brakes on the T cell and where the seven antibodies sit",
      context: "The Immune checkpoint interactions block + figure (book 218)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A T cell that should kill the tumor — held back by two checkpoint brakes",
            sublabel:
              "Input — signals that modulate T-cell activation and function → ↓ immune response against tumor cells; tumor cells upregulate these immune checkpoint molecules to evade immunity (the previous page's immune-evasion hallmark), and several cancer immunotherapies target them.",
            variant: "input",
          },
          {
            id: "ctla4-axis",
            label: "BRAKE 1 — THE START GATE: CTLA-4 outcompetes CD28 for B7 on APCs",
            sublabel:
              "At the priming interaction, the APC presents antigen on MHC II to the TCR while B7 must engage CD28 to deliver the costimulatory signal; CTLA-4 on T cells OUTCOMPETES CD28 for B7 → loss of T-cell costimulatory signal — activation is denied at the gate. Blocked by antibodies against CTLA-4 (eg, ipilimumab).",
            variant: "process",
          },
          {
            id: "pd1-axis",
            label:
              "BRAKE 2 — THE EXHAUSTION BRAKE: PD-1 on T cells × PD-L1/2 in the tumor microenvironment",
            sublabel:
              "In the field, PD-1 (on T cells) engages PD-L1/2 (on tumor cells or immune cells in tumor microenvironment) → T-cell dysfunction (exhaustion) — the cell is present but spent. Blocked on the T-cell side by antibodies against PD-1 (eg, cemiplimab, nivolumab, pembrolizumab) or on the tumor side by antibodies against PD-L1 (eg, atezolizumab, durvalumab, avelumab).",
            variant: "process",
          },
          {
            id: "output",
            label: "Brake released → T-cell activation and function restored against the tumor",
            sublabel:
              "Output — removing the checkpoint removes the ↓ immune response against tumor cells; the cost of releasing a brake everywhere is the immune-related adverse events (colitis, pneumonitis, thyroiditis, dermatitis) that shadow this drug class.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "ctla4-axis", label: "priming — the gate" },
          { from: "trigger", to: "pd1-axis", label: "effector — the field" },
          { from: "ctla4-axis", to: "output", label: "ipilimumab opens the gate" },
          { from: "pd1-axis", to: "output", label: "anti-PD-1 / anti-PD-L1 lift exhaustion" },
        ],
      },
    },
    {
      id: "incidence-mortality-split-map",
      title:
        "The incidence–mortality split: what each row of the epidemiology table measures, and the lung flip",
      context: "The Cancer epidemiology table (book 218)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Two different questions about the same disease burden",
            sublabel:
              "Input — INCIDENCE asks who GETS cancer (new cases); MORTALITY asks who DIES of it (deaths). The table's two rows answer different questions, and skin cancer (basal > squamous >> melanoma), the most common cancer of all, is excluded from both.",
            variant: "input",
          },
          {
            id: "incidence",
            label:
              "INCIDENCE — prostate leads males in, breast leads females in, leukemia leads children in",
            sublabel:
              "MALES: 1. Prostate 2. Lung 3. Colon/rectum. FEMALES: 1. Breast 2. Lung 3. Colon/rectum. CHILDREN (AGE 0-14): 1. Leukemia 2. CNS 3. Neuroblastoma. NOTES: lung cancer incidence has ↓ in males, but has not changed significantly in females.",
            variant: "process",
          },
          {
            id: "mortality",
            label: "MORTALITY — lung leads EVERYONE out",
            sublabel:
              "MALES: 1. Lung 2. Prostate 3. Colon/rectum. FEMALES: 1. Lung 2. Breast 3. Colon/rectum. CHILDREN (AGE 0-14): 1. Leukemia 2. CNS 3. Neuroblastoma — the same trio. Lung swaps from #2 (incidence) to #1 (mortality) in both sexes: the killer outranks the incidence ranking.",
            variant: "process",
          },
          {
            id: "output",
            label: "The three closing rules",
            sublabel:
              "Output — (1) cancer is the 2nd leading cause of death in the United States (heart disease is 1st); (2) colon/rectum holds #3 in every adult column; (3) the children's trio (leukemia, CNS, neuroblastoma) is identical for incidence and mortality.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "incidence", label: "new cases" },
          { from: "trigger", to: "mortality", label: "deaths" },
          { from: "incidence", to: "output", label: "prostate / breast lead in" },
          { from: "mortality", to: "output", label: "lung leads everyone out" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "immunotherapy-target-map",
      title:
        "The immunotherapy target map (an original KYP adaptation with a redrawn checkpoint figure)",
      caption:
        "An original KYP adaptation of the source page (book 218): LEFT — the checkpoint figure redrawn with original KYP glyphs: an APC presenting antigen on MHC II to the TCR (T-cell activation) with B7 engaging CD28 (costimulation ON) while CTLA-4 competes for B7 (the off-switch, blocked by the ipilimumab Y-glyph), and PD-1 on the T cell facing PD-L1 on the tumor cell (MHC I on its surface) — the exhaustion axis, blocked from the T-cell side by the cemiplimab/nivolumab/pembrolizumab Y-glyphs and from the tumor side by the atezolizumab/durvalumab/avelumab Y-glyphs; both axis cards carry the verbatim bullets. RIGHT — the cancer epidemiology grid verbatim: the skin-cancer exclusion line, the incidence and mortality rows across MALES / FEMALES / CHILDREN (AGE 0-14) / NOTES, plus the flip-rule and exclusion cards. BOTTOM — the drug directory (seven antibodies grouped by target) and the release-the-brake logic.",
      notice:
        "Census (pdfimages + VLM): page 240 has ZERO raster images — pure text plus ONE vector line-art figure ('Immune checkpoint interactions': the APC and T cell with MHC II/TCR/B7/CD28/CTLA-4 on the left, the tumor cell with MHC I/PD-L1 facing PD-1 on the right, the drug antibodies drawn as Y-shaped blockers at their binding sites). The figure is redrawn here as an ORIGINAL KYP figure with original glyphs (the P2/P3 pure-vector convention) — never reproduced. The figure's labels interleave with the text layer at raw lines 21-54 (the M39 footer-split pattern), which is why the labels print in two non-contiguous blocks in the evidence quotes. The epidemiology table is carried verbatim in the note. NO margin notes or mnemonics print on the page (VLM census confirmed); the KYP memory layer stays original.",
    },
    {
      kind: "table",
      title:
        "Book 218 — the immune checkpoint interactions (carried verbatim, both axes)",
      intro: "The checkpoint logic and both inhibitory axes, as printed.",
      columns: ["BLOCK", "VERBATIM — book 218"],
      rows: [
        [
          "THE INTRO",
          "Immune checkpoint interactions. Signals that modulate T-cell activation and function → ↓ immune response against tumor cells. Targeted by several cancer immunotherapies. Examples:",
        ],
        [
          "THE PD-1 AXIS (exhaustion)",
          "Interaction between PD-1 (on T cells) and PD-L1/2 (on tumor cells or immune cells in tumor microenvironment) → T-cell dysfunction (exhaustion). Inhibited by antibodies against PD-1 (eg, cemiplimab, nivolumab, pembrolizumab) or PD-L1 (eg, atezolizumab, durvalumab, avelumab).",
        ],
        [
          "THE CTLA-4 AXIS (costimulation loss)",
          "CTLA-4 on T cells outcompetes CD28 for B7 on APCs → loss of T-cell costimulatory signal. Inhibited by antibodies against CTLA-4 (eg, ipilimumab).",
        ],
        [
          "THE FIGURE (vector line art — redrawn as an original KYP figure, described)",
          "An APC (MHC II presenting antigen to the TCR; B7) faces a T cell (TCR, CD28, CTLA-4, PD-1) with 'T cell activation' at their contact; a tumor cell (MHC I, PD-L1) faces the T cell's PD-1. Seven Y-shaped antibody blockers: Ipilimumab on CTLA-4; Atezolizumab, Durvalumab, Avelumab on PD-L1; Cemiplimab, Nivolumab, Pembrolizumab on PD-1.",
        ],
      ],
      caption:
        "Two brakes, two sites, seven antibodies: the CTLA-4 brake sits at the APC (the priming gate — signal 2 denied), the PD-1 brake sits in the tumor microenvironment (the exhaustion brake); blocking either restores the immune response against tumor cells — and both drug groups share the immune-related-adverse-event profile that follows from releasing a brake everywhere.",
    },
    {
      kind: "table",
      title:
        "Book 218 — the cancer epidemiology table (carried verbatim, both rows and both NOTES)",
      intro:
        "Verbatim, including the printed exclusion line: 'Skin cancer (basal > squamous >> melanoma) is the most common cancer (not included below).'",
      columns: [
        "",
        "MALeS",
        "feMALeS",
        "CHILDReN (AGe 0-14)",
        "NOTeS",
      ],
      rows: [
        [
          "Cancer incidence",
          "1. Prostate 2. Lung 3. Colon/rectum",
          "1. Breast 2. Lung 3. Colon/rectum",
          "1. Leukemia 2. CNS 3. Neuroblastoma",
          "Lung cancer incidence has ↓ in males, but has not changed significantly in females.",
        ],
        [
          "Cancer mortality",
          "1. Lung 2. Prostate 3. Colon/rectum",
          "1. Lung 2. Breast 3. Colon/rectum",
          "1. Leukemia 2. CNS 3. Neuroblastoma",
          "Cancer is the 2nd leading cause of death in the United States (heart disease is 1st).",
        ],
      ],
      caption:
        "The flip is the exam item: incidence #1 in males is prostate and in females breast, but mortality #1 is LUNG in both sexes (lung swaps #2 → #1 between the rows); colon/rectum holds #3 in every adult column; the children's trio (leukemia, CNS, neuroblastoma) is identical in both rows; and the table's first rule is an exclusion — skin cancer (basal > squamous >> melanoma), the most common cancer of all, is not included.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem:
          "A 62-year-old woman with unresectable metastatic melanoma (BRAF wild-type) begins immunotherapy with nivolumab; her tumor cells show high PD-L1 expression on immunohistochemistry, and several months into therapy she develops new fatigue with a low TSH and elevated free T4.",
        discriminator:
          "Anti-PD-1 — nivolumab blocks PD-1 on T cells, preventing PD-L1/2 engagement → exhaustion lifted; thyroiditis as the immune-related adverse event",
        concept: "The PD-1 axis + the released-brake toxicity",
        answer:
          "Nivolumab is one of the printed anti-PD-1 antibodies (with cemiplimab and pembrolizumab). PD-1 sits on T cells; PD-L1/2 sit on tumor cells or immune cells in the tumor microenvironment; their interaction drives T-cell dysfunction (exhaustion) — the ↓ immune response against tumor cells. Blocking PD-1 restores T-cell function against the PD-L1-expressing tumor, and because the brake is released everywhere, autoreactive immunity spills into normal tissue — here the thyroid (immune-related thyroiditis), the same logic behind checkpoint-inhibitor colitis, pneumonitis, and dermatitis.",
      },
      {
        stem:
          "A 55-year-old man with metastatic melanoma treated with ipilimumab develops severe watery diarrhea; colonoscopy shows diffuse colitis with crypt abscesses and no pathogens identified.",
        discriminator:
          "Anti-CTLA-4 — ipilimumab removes the competitor of CD28 for B7, restoring costimulation and amplifying T-cell activation → immune-related colitis",
        concept: "The CTLA-4 axis + the released-brake toxicity",
        answer:
          "The printed rule: CTLA-4 on T cells outcompetes CD28 for B7 on APCs → loss of T-cell costimulatory signal; ipilimumab (the lone anti-CTLA-4) blocks that competitor, so CD28-B7 costimulation is preserved and T-cell activation is amplified — systemically, which is why immune-related colitis is the classic severe toxicity of the anti-CTLA-4 class (more gut-directed than the anti-PD-1 class).",
      },
      {
        stem:
          "A biostatistics question asks for the leading cause of cancer mortality in males and in females in the United States, and the leading cause of cancer incidence in males.",
        discriminator:
          "Mortality #1 in BOTH sexes is lung cancer; incidence #1 in males is prostate (breast in females); heart disease is the overall #1 cause of death",
        concept: "The incidence-versus-mortality split",
        answer:
          "Verbatim from the table: cancer mortality — MALES 1. Lung 2. Prostate 3. Colon/rectum; FEMALES 1. Lung 2. Breast 3. Colon/rectum (lung leads everyone out). Cancer incidence — MALES 1. Prostate 2. Lung 3. Colon/rectum (prostate leads males in, breast leads females in). And the mortality NOTES line: cancer is the 2nd leading cause of death in the United States — heart disease is 1st.",
      },
    ],
    traps: [
      {
        a: "Anti-PD-1 antibodies (cemiplimab, nivolumab, pembrolizumab)",
        b: "Anti-PD-L1 antibodies (atezolizumab, durvalumab, avelumab)",
        whyConfused:
          "Both drug groups block the same PD-1 × PD-L1 interaction and produce the same functional rescue of exhausted T cells",
        keyDifference:
          "The anti-PD-1 trio binds the RECEPTOR on the T-cell side (PD-1 sits on T cells); the anti-PD-L1 trio binds the LIGAND on the tumor-cell side (PD-L1 sits on tumor cells or immune cells in the tumor microenvironment) — the exam asks which side the antibody lands on",
        clue:
          "Name the molecule in the stem and ask where it lives: PD-1 → T cell → cemiplimab/nivolumab/pembrolizumab; PD-L1 → tumor cell (or microenvironment immune cell) → atezolizumab/durvalumab/avelumab",
      },
      {
        a: "Cancer incidence #1 in males (prostate)",
        b: "Cancer mortality #1 in males (lung)",
        whyConfused:
          "Both are printed as ranked lists in the same table, one row apart",
        keyDifference:
          "INCIDENCE = new cases: 1. Prostate 2. Lung 3. Colon/rectum; MORTALITY = deaths: 1. Lung 2. Prostate 3. Colon/rectum — lung and prostate swap the top two spots between the rows, and lung is mortality #1 in females too",
        clue:
          "The stem's verb decides the row: 'most common new diagnosis' → incidence (prostate in males, breast in females); 'most common cause of cancer death' → mortality (lung in both sexes)",
      },
      {
        a: "The CTLA-4 axis (the priming gate at the APC)",
        b: "The PD-1 axis (the exhaustion brake in the tumor microenvironment)",
        whyConfused:
          "Both are inhibitory checkpoints that ↓ the immune response against tumor cells and both are drug targets",
        keyDifference:
          "CTLA-4 acts at the START — on T cells, outcompeting CD28 for B7 on APCs → loss of the costimulatory signal (activation denied); PD-1 acts in the FIELD — on T cells engaging PD-L1/2 on tumor cells or microenvironment immune cells → T-cell dysfunction (exhaustion; the cell is present but spent)",
        clue:
          "A question set at the APC / about costimulation (signal 2, CD28, B7) → CTLA-4/ipilimumab; a question set in the tumor microenvironment / about exhausted T cells → PD-1 or PD-L1 antibodies",
      },
      {
        a: "'Most common cancer' overall (skin cancer)",
        b: "'Most common cancer' in the table (prostate in males, breast in females)",
        whyConfused:
          "The table looks like a complete ranking of the most common cancers",
        keyDifference:
          "The printed exclusion: skin cancer (basal > squamous >> melanoma) IS the most common cancer, but it is NOT included in the table — so table answers (prostate, breast) are the table's answers, while an unrestricted 'most common cancer' question is answered by skin cancer, with basal cell > squamous cell >> melanoma",
        clue:
          "Read the stem's scope: 'in the United States overall / in adults' with no table framing → skin; 'among causes of cancer incidence in males' → prostate",
      },
    ],
    pivots: [
      {
        lookAlike: "A checkpoint-inhibitor '-mab' named in a vignette — which axis does it block?",
        differentiator:
          "Route by the molecule and the side: ipilimumab → CTLA-4 (the T cell's competitor for B7 at the APC — the costimulation gate); cemiplimab/nivolumab/pembrolizumab → PD-1 (the receptor on the T cell); atezolizumab/durvalumab/avelumab → PD-L1 (the ligand on the tumor cell or microenvironment immune cells)",
        correctPath:
          "Name the target first (CTLA-4 vs PD-1 vs PD-L1), then the side (T cell vs tumor cell), then the mechanism (costimulation restored vs exhaustion lifted) — every checkpoint-drug question is one of those three answers wearing a drug name",
      },
      {
        lookAlike: "An epidemiology ranking question — which row of the table applies?",
        differentiator:
          "The verb: 'new cases / most commonly diagnosed' → the INCIDENCE row (males: prostate, lung, colon/rectum; females: breast, lung, colon/rectum; children: leukemia, CNS, neuroblastoma); 'deaths / mortality' → the MORTALITY row (lung #1 in both sexes; the children's trio unchanged; colon/rectum #3 in every adult column)",
        correctPath:
          "Incidence asks who gets in, mortality asks who gets out — lung leads everyone out; and remember the exclusion (skin cancer, the most common cancer overall, is not in the table) and the context line (cancer is 2nd to heart disease among all US causes of death)",
      },
    ],
    miniCase: {
      vignette:
        "A 58-year-old man presents with a 3-month history of an enlarging dark plaque on his back with irregular borders; biopsy confirms melanoma, and staging CT shows hepatic and pulmonary metastases (BRAF wild-type). Immunohistochemistry of the metastasis shows strong PD-L1 membrane expression on the tumor cells, with PD-1-positive tumor-infiltrating lymphocytes in the surrounding stroma. He is started on pembrolizumab. Eight weeks later he reports fatigue, a 6-lb weight loss, and new watery diarrhea; laboratory testing shows a low TSH with an elevated free T4, and colonoscopy demonstrates diffuse lymphocytic colitis without organisms.",
      question:
        "By what mechanism does pembrolizumab exert its antitumor effect, and why has he developed thyroiditis and colitis? Select the one fully correct explanation.",
      options: [
        {
          label:
            "Pembrolizumab is an anti-PD-1 antibody: it blocks PD-1 on the T cells, preventing its engagement by PD-L1/2 on the tumor cells (or microenvironment immune cells) → the T-cell dysfunction (exhaustion) is lifted and the antitumor response is restored; the thyroiditis and colitis are immune-related adverse events — the checkpoint brake restrains autoreactive T cells in normal tissues too, and releasing it everywhere unleashes them",
          text: "Free the spent cell in the field, and pay the autoimmune bill.",
          correct: true,
          why:
            "Correct on both layers. (1) THE AXIS: the printed bullet — interaction between PD-1 (on T cells) and PD-L1/2 (on tumor cells or immune cells in tumor microenvironment) → T-cell dysfunction (exhaustion); pembrolizumab is one of the three anti-PD-1 antibodies (with cemiplimab and nivolumab), so it binds the receptor on the T-cell side — exactly what the stem's PD-1-positive infiltrating lymphocytes and PD-L1-expressing tumor set up. (2) THE TOXICITY: the same checkpoint physiologically restrains T-cell activity in normal tissues; blocking it removes that restraint globally, producing the immune-related adverse events — the low-TSH/high-T4 thyroiditis and the lymphocytic colitis are the classic endocrine and gastrointestinal members of that family.",
        },
        {
          label:
            "Pembrolizumab is an agonist of PD-1 that stimulates the receptor on T cells, directly driving their proliferation and cytotoxic activation against melanoma cells; the colitis and thyroiditis are paradoxical receptor hypersensitivity",
          text: "Stimulate the receptor to fight the tumor.",
          why:
            "Wrong direction: PD-1 is an INHIBITORY receptor — stimulating it would deepen the exhaustion, not reverse it. The checkpoint drugs are blockers of inhibitory pathways ('release the brake'), not agonists, and the adverse events are autoimmune attacks from brake removal, not receptor hypersensitivity.",
        },
        {
          label:
            "Pembrolizumab blocks CTLA-4 on the T cells, so CD28 can no longer be outcompeted for B7 on the APCs — costimulation is restored at the priming gate, which is why the gut and thyroid are attacked",
          text: "The right logic, the wrong checkpoint.",
          why:
            "Right logic, wrong antibody: restoring CD28-B7 costimulation by blocking CTLA-4 is IPILIMUMAB's mechanism (the anti-CTLA-4 example printed on this page). Pembrolizumab is anti-PD-1 and acts in the tumor microenvironment on exhausted effector T cells, not at the APC priming gate. (The toxicity logic — released brakes attack normal tissue — is shared by both classes, which is what makes this distractor tempting.)",
        },
        {
          label:
            "Pembrolizumab binds PD-L1 on the tumor cells, preventing the tumor from presenting antigen on MHC I to cytotoxic T cells; the colitis is direct antibody-mediated cytotoxicity against the colonic epithelium",
          text: "Block the ligand on the tumor.",
          why:
            "Two errors: binding PD-L1 is the ANTI-PD-L1 class (atezolizumab, durvalumab, avelumab) — pembrolizumab binds PD-1 — and PD-L1 blockade does not prevent MHC I antigen presentation (the tumor's MHC I presents to the TCR; PD-L1 engages PD-1). The colitis is immune-mediated brake-release, not antibody cytotoxicity against epithelium.",
        },
        {
          label:
            "Pembrolizumab directly lyses melanoma cells through antibody-dependent cellular cytotoxicity (ADCC) directed against melanocyte antigens, and the diarrhea is an infectious colitis from immunosuppression",
          text: "The antibody itself kills the tumor.",
          why:
            "Wrong mechanism altogether: checkpoint inhibitors do not target tumor antigens for ADCC — their whole point is to modulate the T CELL's signals (the printed intro: signals that modulate T-cell activation and function → ↓ immune response against tumor cells). And the class is immunostimulatory, not immunosuppressive — the lymphocytic colitis with no organisms is autoimmune, not infectious.",
        },
      ],
      reasoning:
        "The stem is built in three layers. (1) THE SETUP: metastatic melanoma (the classic checkpoint-indication), BRAF wild-type (targeted therapy excluded), PD-L1 on the tumor with PD-1-positive infiltrating lymphocytes — the exact geography of the printed axis: PD-1 on T cells, PD-L1/2 on tumor cells or immune cells in the tumor microenvironment. (2) THE DRUG: pembrolizumab is an anti-PD-1 antibody (the trio with cemiplimab and nivolumab); it blocks the receptor on the T-cell side, lifting the T-cell dysfunction (exhaustion) that the interaction produces. (3) THE EIGHT-WEEK LAYER: low TSH with high free T4 (thyroiditis) plus organism-negative lymphocytic colitis — the immune-related adverse events that follow when a checkpoint brake is released everywhere, not just in the tumor. The distractors each miss one layer: the agonist (wrong direction on an inhibitory receptor), the CTLA-4 option (right logic, ipilimumab's checkpoint), the PD-L1 option (the other drug class plus a false MHC I claim), and the ADCC option (wrong mechanism family, wrong toxicity direction). Name the molecule, name the side, then name what releasing the brake costs.",
    },
  },
  mnemonics: [
    {
      code: "START GATE, LONG BRAKE",
      meaning:
        "The two checkpoint axes by site and timing: CTLA-4 is the START GATE — at the APC, it outcompetes CD28 for B7 → loss of the T-cell costimulatory signal, so activation is denied before it begins (blocked by ipilimumab); PD-1 is the LONG BRAKE — in the tumor microenvironment, PD-1 (on T cells) × PD-L1/2 (on tumor cells or immune cells) → T-cell dysfunction (exhaustion), so an already-activated cell is slowly spent (blocked by the anti-PD-1 and anti-PD-L1 antibodies).",
      memorizes: "The two checkpoint axes",
      whenToUse:
        "Any question distinguishing the CTLA-4 and PD-1 pathways, their sites, or their drugs",
      clinical:
        "The gate decides whether the T cell is born into the fight; the brake decides whether it can finish the fight.",
    },
    {
      code: "IPI HOLDS THE GATE, A.D.A. BLUNTS THE LIGAND, C.N.P. FREES THE RECEPTOR",
      meaning:
        "The seven antibodies at their binding sites: IPILIMUMAB alone holds the gate (anti-CTLA-4 — the competitor of CD28 for B7); A.D.A. — Atezolizumab, Durvalumab, Avelumab — blunts the LIGAND (anti-PD-L1, on the tumor-cell side); C.N.P. — Cemiplimab, Nivolumab, Pembrolizumab — frees the RECEPTOR (anti-PD-1, on the T-cell side).",
      memorizes: "The drug directory — which antibody blocks which molecule",
      whenToUse: "Any 'which drug blocks which checkpoint' or 'which target does this drug hit' question",
      clinical:
        "One gatekeeper, two ligand-blockers' initials spell ADA, three receptor-freers spell CNP — read the target before you read the drug name.",
    },
    {
      code: "PROSTATE LEADS MEN IN; LUNG LEADS EVERYONE OUT",
      meaning:
        "The table's flip: CANCER INCIDENCE #1 in males is PROSTATE (breast in females; leukemia in children 0-14) — the cancers men and women most often GET; CANCER MORTALITY #1 in BOTH sexes is LUNG (prostate and breast drop to #2; colon/rectum holds #3 in every adult column) — the cancer everyone most often DIES of.",
      memorizes: "The incidence-versus-mortality table (adult columns)",
      whenToUse: "Any US cancer-incidence or cancer-mortality ranking question",
      clinical:
        "Incidence is the entrance list, mortality is the exit list — lung tops the exit list for both sexes, which is why the smoking-history vignette ends in the #1 killer.",
    },
    {
      code: "SKIN STAYS OFF THE LIST; KIDS KEEP L-C-N TWICE",
      meaning:
        "The table's two standing rules: SKIN cancer (basal > squamous >> melanoma) IS the most common cancer overall but is NOT included in the table — so an unscoped 'most common cancer' question answers SKIN while the table's #1s answer prostate/breast; and the CHILDREN (AGE 0-14) column reads Leukemia, CNS, Neuroblastoma (L-C-N) identically for BOTH incidence and mortality — the only column that never changes between rows.",
      memorizes: "The exclusion line + the children's columns",
      whenToUse: "Any 'most common cancer overall' trap and any pediatric cancer ranking question",
      clinical:
        "The most common cancer isn't even on the list; and in children the entrance list and the exit list are the same three names.",
    },
  ],
  rapidReview: {
    s30: [
      "Immune checkpoint interactions: signals that modulate T-cell activation and function → ↓ immune response against tumor cells; targeted by several cancer immunotherapies",
      "PD-1 axis: PD-1 (on T cells) × PD-L1/2 (on tumor cells or immune cells in tumor microenvironment) → T-cell dysfunction (exhaustion); inhibited by anti-PD-1 (cemiplimab, nivolumab, pembrolizumab) or anti-PD-L1 (atezolizumab, durvalumab, avelumab)",
      "CTLA-4 axis: CTLA-4 on T cells outcompetes CD28 for B7 on APCs → loss of T-cell costimulatory signal; inhibited by anti-CTLA-4 (ipilimumab)",
      "The figure: APC (MHC II + antigen → TCR, B7 → CD28) with CTLA-4 competing for B7 and 'T cell activation' at the contact; tumor cell (MHC I, PD-L1) facing PD-1 — seven Y-shaped antibody blockers at those sites",
      "Cancer epidemiology — incidence: MALES 1. Prostate 2. Lung 3. Colon/rectum; FEMALES 1. Breast 2. Lung 3. Colon/rectum; CHILDREN (AGE 0-14) 1. Leukemia 2. CNS 3. Neuroblastoma",
      "Cancer epidemiology — mortality: MALES 1. Lung 2. Prostate 3. Colon/rectum; FEMALES 1. Lung 2. Breast 3. Colon/rectum; CHILDREN the same trio — lung is #1 in both sexes",
      "Skin cancer (basal > squamous >> melanoma) is the most common cancer (not included in the table)",
      "Lung cancer incidence has ↓ in males, but has not changed significantly in females",
      "Cancer is the 2nd leading cause of death in the United States (heart disease is 1st)",
    ],
    m3: [
      "START GATE, LONG BRAKE — CTLA-4 at the APC (costimulation lost) vs PD-1 in the tumor microenvironment (exhaustion)",
      "IPI HOLDS THE GATE, A.D.A. BLUNTS THE LIGAND, C.N.P. FREES THE RECEPTOR — ipilimumab / atezolizumab-durvalumab-avelumab / cemiplimab-nivolumab-pembrolizumab",
      "PROSTATE LEADS MEN IN; LUNG LEADS EVERYONE OUT — the incidence-versus-mortality flip",
      "SKIN STAYS OFF THE LIST; KIDS KEEP L-C-N TWICE — the exclusion line and the unchanged children's columns",
      "Immune-related adverse events (thyroiditis, colitis, pneumonitis, dermatitis) shadow every checkpoint blocker — a brake released is released everywhere",
    ],
    m10: [
      "PD-L1/2 can sit on immune cells in the tumor microenvironment, not only on the tumor cells themselves — the anti-PD-L1 drugs still work there",
      "Cemiplimab: the anti-PD-1 antibody classically linked with advanced cutaneous squamous cell carcinoma; skin cancer is also the excluded most-common cancer of the page",
      "Colon/rectum holds the #3 slot in all four adult columns (incidence and mortality, both sexes) — the table's most stable entry",
      "The children's mortality trio is identical to the incidence trio (leukemia, CNS, neuroblastoma) — the only column with no flip",
      "The page's figure is the neoplasia chapter's only vector line art with drug antibodies drawn as Y-shaped blockers — seven blockers, two axes, one T cell between them",
    ],
  },
  recall: [
    {
      q: "The checkpoint intro verbatim — what the interactions are and what they do.",
      a: "Immune checkpoint interactions. Signals that modulate T-cell activation and function → ↓ immune response against tumor cells. Targeted by several cancer immunotherapies. Examples:",
    },
    {
      q: "The PD-1 axis verbatim — the interaction, its consequence, and both drug groups.",
      a: "Interaction between PD-1 (on T cells) and PD-L1/2 (on tumor cells or immune cells in tumor microenvironment) → T-cell dysfunction (exhaustion). Inhibited by antibodies against PD-1 (eg, cemiplimab, nivolumab, pembrolizumab) or PD-L1 (eg, atezolizumab, durvalumab, avelumab).",
    },
    {
      q: "The CTLA-4 axis verbatim — the interaction, its consequence, and the drug.",
      a: "CTLA-4 on T cells outcompetes CD28 for B7 on APCs → loss of T-cell costimulatory signal. Inhibited by antibodies against CTLA-4 (eg, ipilimumab).",
    },
    {
      q: "The cancer epidemiology table verbatim — the exclusion line and the incidence row.",
      a: "Skin cancer (basal > squamous >> melanoma) is the most common cancer (not included below). Cancer incidence — MALES: 1. Prostate 2. Lung 3. Colon/rectum. FEMALES: 1. Breast 2. Lung 3. Colon/rectum. CHILDREN (AGE 0-14): 1. Leukemia 2. CNS 3. Neuroblastoma. NOTES: Lung cancer incidence has ↓ in males, but has not changed significantly in females.",
    },
    {
      q: "The cancer mortality row verbatim — all four columns.",
      a: "Cancer mortality — MALES: 1. Lung 2. Prostate 3. Colon/rectum. FEMALES: 1. Lung 2. Breast 3. Colon/rectum. CHILDREN (AGE 0-14): 1. Leukemia 2. CNS 3. Neuroblastoma. NOTES: Cancer is the 2nd leading cause of death in the United States (heart disease is 1st).",
    },
    {
      q: "The drug directory — all seven antibodies by target.",
      a: "Anti-PD-1 (the receptor, on T cells): cemiplimab, nivolumab, pembrolizumab. Anti-PD-L1 (the ligand, on tumor cells or immune cells in the tumor microenvironment): atezolizumab, durvalumab, avelumab. Anti-CTLA-4 (the CD28 competitor at the APC): ipilimumab.",
    },
  ],
  related: [
    {
      title: "Hallmarks of Cancer",
      topicId: "cancer-hallmarks",
      note:
        "The previous page's immune-evasion hallmark — 'tumor cells upregulate immune checkpoint molecules, which inhibit immune response' — is this page's target: the two upregulated checkpoints (PD-L1, CTLA-4's axis) and the seven antibodies built against them.",
    },
    {
      title: "Metastasis: Organ Patterns & Routes",
      topicId: "metastasis-patterns",
      note:
        "The epidemiology table counts the burden (who gets it, who dies of it); the next page maps the traffic (carcinomas via lymphatics, sarcomas hematogenously, the four hematogenous carcinomas) — incidence and mortality meet the routes that connect them.",
    },
    {
      title: "Granulomatous Inflammation & Scar Types",
      topicId: "granulomatous-inflammation",
      note:
        "The other side of the T-cell-therapy coin: the granuloma page's APC → IL-12 → Th1 cascade is the activation this page's checkpoints restrain, and anti-TNF dissolves a wall (screen for latent TB) while checkpoint blockers release a brake (watch for autoimmune toxicity) — the two biologic archetypes.",
    },
    {
      title: "Neoplasia Nomenclature & Progression",
      topicId: "neoplasia-nomenclature",
      note:
        "The epidemiology table's entries (prostate, breast, lung, colon/rectum, leukemia, CNS, neuroblastoma) are the named neoplasms of the chapter's nomenclature — the table tells you which names matter most, in order.",
    },
  ],
  crossLinks: [
    {
      subject: "Immunology (T-cell activation and costimulation)",
      connection:
        "The checkpoint figure is immunology's signal 1 and signal 2 made drugable: MHC II-antigen to the TCR (signal 1, 'T cell activation'), B7 to CD28 (signal 2, costimulation), CTLA-4 as the signal-2 competitor, and PD-1 as the peripheral off-signal — the same molecules as the immunology chapter's T-cell activation panel.",
    },
    {
      subject: "Pharmacology (checkpoint inhibitors and immune-related adverse events)",
      connection:
        "The seven '-mabs' are a pharmacology class with a shared mechanism (block an inhibitory checkpoint) and a shared toxicity family (immune-related adverse events — colitis, thyroiditis, pneumonitis, dermatitis) that follows directly from the brake-release logic this page prints.",
    },
    {
      subject: "Epidemiology and public health (cancer statistics)",
      connection:
        "The incidence-versus-mortality split is a biostatistics lesson in disguise — incidence measures new cases, mortality measures deaths, and lung's flip from #2 to #1 between the rows is why the two measures must never be conflated; the NOTES lines add the population frame (cancer 2nd, heart disease 1st).",
    },
    {
      subject: "Dermatology and oncology (melanoma and skin cancer)",
      connection:
        "Melanoma is the checkpoint inhibitors' classic indication (the miniCase's metastatic disease), cemiplimab treats advanced cutaneous squamous cell carcinoma, and the table's exclusion line belongs to dermatology — skin cancer (basal > squamous >> melanoma) is the most common cancer of all, left off the list.",
    },
  ],
};
