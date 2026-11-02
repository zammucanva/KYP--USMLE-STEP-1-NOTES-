import type { KypUsMLENote } from "../types";

// Pathology — NEOPLASIA banner (P-batch 14). Source: pdf 240 /
// book 218 (Immune checkpoint interactions + Cancer epidemiology).
// Census (pdfimages + VLM): NO raster images on the page
// (pdfimages -list returned zero rows). The page has ONE vector
// figure — the immune checkpoint interactions diagram (T cell +
// APC + tumor cell with PD-1/PD-L1, CTLA-4/CD28/B7, TCR/MHC I,
// MHC II, T cell activation, and the 7 drug labels: ipilimumab;
// atezolizumab, durvalumab, avelumab; cemiplimab, nivolumab,
// pembrolizumab) — redrawn as an ORIGINAL KYP figure (the P2/P3
// pure-vector convention). The cancer epidemiology block is a
// 4-column table (MALES / FEMALES / CHILDREN / NOTES) with
// incidence and mortality rows — pure text, carried verbatim in
// the note's table block. NO copyrighted photographs, NO margin
// mnemonics (VLM confirmed); the KYP memory layer is original.

export const cancerImmunotherapyEpidemiology: KypUsMLENote = {
  id: "cancer-immunotherapy-epidemiology",
  title: "Cancer Immunotherapy & Epidemiology",
  subtitle:
    "The two checkpoints a tumor hijacks and the population burdens it creates (book 218) — IMMUNE CHECKPOINT INTERACTIONS: signals that modulate T-cell activation and function → ↓ immune response against tumor cells; targeted by several cancer immunotherapies. THE TWO AXES: (1) PD-1 (on T cells) and PD-L1/2 (on tumor cells or immune cells in tumor microenvironment) → T-cell dysfunction (exhaustion) — inhibited by antibodies against PD-1 (cemiplimab, nivolumab, pembrolizumab) or PD-L1 (atezolizumab, durvalumab, avelumab); (2) CTLA-4 on T cells outcompetes CD28 for B7 on APCs → loss of T-cell costimulatory signal — inhibited by antibodies against CTLA-4 (ipilimumab). CANCER EPIDEMIOLOGY: skin cancer (basal > squamous >> melanoma) is the most common cancer (not included below); the 4-column table — MALES (incidence: prostate, lung, colon/rectum; mortality: lung, prostate, colon/rectum) | FEMALES (incidence: breast, lung, colon/rectum; mortality: lung, breast, colon/rectum) | CHILDREN AGE 0-14 (incidence AND mortality: leukemia, CNS, neuroblastoma) | NOTES (lung cancer incidence has ↓ in males but not significantly in females; cancer is the 2nd leading cause of death in the United States, heart disease is 1st).",
  subject: "Pathology",
  system: "Section II · High-Yield General Principles — Pathology: Neoplasia",
  pilotCategory:
    "The immunotherapy-epidemiology page's complete architecture — the immune checkpoint definition, the PD-1/PD-L1 axis with its 6 antibodies (3 anti-PD-1: cemiplimab, nivolumab, pembrolizumab; 3 anti-PD-L1: atezolizumab, durvalumab, avelumab), the CTLA-4/CD28/B7 axis with ipilimumab, the checkpoint interactions figure (T cell, APC, tumor cell with MHC I/II, TCR, CD28, B7, CTLA-4, PD-1, PD-L1, antigen, T cell activation), the skin-cancer-most-common rule, the 4-column epidemiology table (MALES / FEMALES / CHILDREN / NOTES) with incidence and mortality rows, and the two NOTES (lung incidence trend and cancer-is-2nd-to-heart-disease).",
  difficulty: 2,
  readTime: 8,
  sourceRef:
    "First Aid 2026, Part 1 pp. 218 (Pathology — Neoplasia: Immune checkpoint interactions [the definition, the PD-1/PD-L1 axis with 6 antibodies, the CTLA-4/CD28/B7 axis with ipilimumab, the checkpoint figure]; Cancer epidemiology [the skin-cancer-most-common rule, the 4-column MALES/FEMALES/CHILDREN/NOTES table with incidence and mortality rows, and the two NOTES])",
  tags: [
    "immune checkpoint",
    "cancer immunotherapy",
    "PD-1",
    "PD-L1",
    "PD-L2",
    "T-cell dysfunction",
    "T-cell exhaustion",
    "tumor microenvironment",
    "cemiplimab",
    "nivolumab",
    "pembrolizumab",
    "atezolizumab",
    "durvalumab",
    "avelumab",
    "CTLA-4",
    "CD28",
    "B7",
    "APC",
    "antigen-presenting cell",
    "costimulatory signal",
    "ipilimumab",
    "T-cell activation",
    "MHC I",
    "MHC II",
    "TCR",
    "antigen",
    "tumor cell",
    "cancer epidemiology",
    "skin cancer",
    "basal cell carcinoma",
    "squamous cell carcinoma",
    "melanoma",
    "cancer incidence",
    "cancer mortality",
    "prostate cancer",
    "lung cancer",
    "colorectal cancer",
    "breast cancer",
    "leukemia",
    "CNS tumors",
    "neuroblastoma",
    "lung cancer incidence trend",
    "cancer is second leading cause of death",
    "heart disease is first",
  ],
  core: {
    what:
      "IMMUNE CHECKPOINT INTERACTIONS: signals that modulate T-cell activation and function → ↓ immune response against tumor cells; targeted by several cancer immunotherapies. THE PD-1 / PD-L1 AXIS: interaction between PD-1 (on T cells) and PD-L1/2 (on tumor cells or immune cells in tumor microenvironment) → T-cell dysfunction (exhaustion); inhibited by antibodies against PD-1 (cemiplimab, nivolumab, pembrolizumab) or PD-L1 (atezolizumab, durvalumab, avelumab). THE CTLA-4 / CD28 / B7 AXIS: CTLA-4 on T cells outcompetes CD28 for B7 on APCs → loss of T-cell costimulatory signal; inhibited by antibodies against CTLA-4 (ipilimumab). CANCER EPIDEMIOLOGY: skin cancer (basal > squamous >> melanoma) is the most common cancer (not included below). The 4-column table — MALES: cancer incidence 1. Prostate, 2. Lung, 3. Colon/rectum; cancer mortality 1. Lung, 2. Prostate, 3. Colon/rectum. FEMALES: cancer incidence 1. Breast, 2. Lung, 3. Colon/rectum; cancer mortality 1. Lung, 2. Breast, 3. Colon/rectum. CHILDREN (AGE 0-14): cancer incidence 1. Leukemia, 2. CNS, 3. Neuroblastoma; cancer mortality 1. Leukemia, 2. CNS, 3. Neuroblastoma. NOTES: lung cancer incidence has ↓ in males, but has not changed significantly in females; cancer is the 2nd leading cause of death in the United States (heart disease is 1st).",
    why:
      "This page pairs the molecular escape route a tumor uses to hide from the immune system (hallmark 7 of the cancer hallmarks) with the population-level burden that escape creates. The two checkpoint axes are the immunotherapy targets: PD-1 on the T cell binding PD-L1/2 on the tumor cell (or on immune cells in the microenvironment) drives the T cell into exhaustion — the tumor brakes the effector directly, and the anti-PD-1 antibodies (cemiplimab, nivolumab, pembrolizumab) and anti-PD-L1 antibodies (atezolizumab, durvalumab, avelumab) release that brake. CTLA-4 on the T cell outcompeting CD28 for B7 on the APC cuts the costimulatory signal at the priming stage — the tumor stops the T cell from ever being activated, and ipilimumab (anti-CTLA-4) restores the costimulation. Together the two axes are the 'don't activate' (CTLA-4) and 'don't effector-function' (PD-1) brakes, and the seven antibodies are the exam's immunotherapy roster. Then the epidemiology table quantifies the burden: skin cancer is the most common (excluded from the ranking), and for the ranked cancers the incidence and mortality lists diverge — prostate and breast lead incidence but lung leads mortality (because lung cancer kills more efficiently), and colon/rectum sits third on both. The children's column is its own world: leukemia, CNS, and neuroblastoma dominate both incidence and mortality (the pediatric oncology triad). The two NOTES close the page: lung cancer incidence has fallen in males (the smoking-cessation payoff, decades later) but not significantly in females (the delayed cohort effect), and cancer is the second leading cause of US death behind heart disease — the population-level frame for every cancer question.",
    keyIdea:
      "Read this page through two axes and one table. AXIS 1 — PD-1 / PD-L1 (the effector brake): PD-1 on T cells binds PD-L1/2 on tumor or microenvironment cells → T-cell exhaustion; release the brake with anti-PD-1 (cemiplimab, nivolumab, pembrolizumab) or anti-PD-L1 (atezolizumab, durvalumab, avelumab). AXIS 2 — CTLA-4 / CD28 / B7 (the priming brake): CTLA-4 on T cells outcompetes CD28 for B7 on APCs → loss of costimulatory signal; release the brake with anti-CTLA-4 (ipilimumab). THE TABLE — skin cancer is most common (excluded); MALES incidence (prostate, lung, colon/rectum) vs mortality (lung, prostate, colon/rectum); FEMALES incidence (breast, lung, colon/rectum) vs mortality (lung, breast, colon/rectum); CHILDREN incidence AND mortality (leukemia, CNS, neuroblastoma — the same list); NOTES — lung incidence ↓ in males but not females; cancer is 2nd to heart disease as the US cause of death.",
  },
  mechanisms: [
    {
      id: "checkpoint-axis",
      title: "The checkpoint axis: the two brakes a tumor uses and the seven antibodies that release them",
      context: "The immune checkpoint interactions figure (book 218)",
      flow: {
        nodes: [
          {
            id: "input",
            label: "A tumor faces an active T-cell response",
            sublabel:
              "Input — normally, immune cells can recognize and attack tumor cells (hallmark 7's setup). For successful tumorigenesis, the tumor must evade the response; the two checkpoint axes are its brake levers.",
            variant: "input",
          },
          {
            id: "priming",
            label: "THE PRIMING BRAKE — CTLA-4 outcompetes CD28 for B7 on APCs",
            sublabel:
              "At the APC-T cell priming stage, CTLA-4 on the T cell outcompetes CD28 for B7 on the APC → loss of T-cell costimulatory signal. The T cell never gets activated. Ipilimumab (anti-CTLA-4) releases this brake.",
            variant: "process",
          },
          {
            id: "effector",
            label: "THE EFFECTOR BRAKE — PD-1 binds PD-L1/2 → T-cell exhaustion",
            sublabel:
              "At the tumor-T cell effector stage, PD-1 on the T cell binds PD-L1/2 on the tumor cell (or immune cells in the microenvironment) → T-cell dysfunction (exhaustion). The T cell was active but is now braked. Anti-PD-1 (cemiplimab, nivolumab, pembrolizumab) and anti-PD-L1 (atezolizumab, durvalumab, avelumab) release this brake.",
            variant: "process",
          },
          {
            id: "output",
            label: "Seven antibodies, two brakes — the immunotherapy roster",
            sublabel:
              "Output — CTLA-4 brake: ipilimumab (1 antibody, priming stage). PD-1/PD-L1 brake: anti-PD-1 (cemiplimab, nivolumab, pembrolizumab) and anti-PD-L1 (atezolizumab, durvalumab, avelumab) — 6 antibodies, effector stage. Together: 7 antibodies covering 2 axes.",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "priming", label: "don't activate" },
          { from: "input", to: "effector", label: "don't effector-function" },
          { from: "priming", to: "output", label: "ipilimumab" },
          { from: "effector", to: "output", label: "6 anti-PD-1/PD-L1 antibodies" },
        ],
      },
    },
    {
      id: "incidence-mortality-axis",
      title: "The incidence-mortality axis: what's common vs what kills",
      context: "The cancer epidemiology table (book 218)",
      flow: {
        nodes: [
          {
            id: "input",
            label: "A population's cancer burden — ranked by incidence and by mortality",
            sublabel:
              "Input — skin cancer (basal > squamous >> melanoma) is the most common cancer overall but is excluded from the ranked lists below; the table ranks the top 3 cancers by incidence and by mortality across MALES, FEMALES, and CHILDREN.",
            variant: "input",
          },
          {
            id: "adults",
            label: "ADULTS — incidence and mortality diverge by sex",
            sublabel:
              "MALES incidence: 1. Prostate, 2. Lung, 3. Colon/rectum; mortality: 1. Lung, 2. Prostate, 3. Colon/rectum. FEMALES incidence: 1. Breast, 2. Lung, 3. Colon/rectum; mortality: 1. Lung, 2. Breast, 3. Colon/rectum. Lung leads mortality in both sexes despite ranking second in incidence — lung cancer kills efficiently.",
            variant: "process",
          },
          {
            id: "children",
            label: "CHILDREN (AGE 0-14) — incidence and mortality lists are identical",
            sublabel:
              "Incidence: 1. Leukemia, 2. CNS, 3. Neuroblastoma. Mortality: 1. Leukemia, 2. CNS, 3. Neuroblastoma. The pediatric triad is the same for both — these are the childhood cancers that both occur most and kill most.",
            variant: "process",
          },
          {
            id: "output",
            label: "Two NOTES close the table — the trend and the rank",
            sublabel:
              "Output — lung cancer incidence has ↓ in males (the smoking-cessation payoff) but has not changed significantly in females (the delayed cohort effect). And cancer is the 2nd leading cause of death in the United States — heart disease is 1st.",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "adults", label: "males + females" },
          { from: "input", to: "children", label: "age 0-14" },
          { from: "adults", to: "output", label: "the lung trend" },
          { from: "children", to: "output", label: "the death rank" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "checkpoint-epidemiology-map",
      title: "The checkpoint and epidemiology map (an original KYP adaptation with a redrawn checkpoint figure)",
      caption:
        "An original KYP adaptation of the source page (book 218): the immune checkpoint panel with the two axes (the PD-1/PD-L1 effector brake with its 6 antibodies, and the CTLA-4/CD28/B7 priming brake with ipilimumab) — the checkpoint interactions figure redrawn as an original KYP figure with T cell, APC, and tumor cell glyphs showing MHC I/II, TCR, CD28, B7, CTLA-4, PD-1, PD-L1, antigen, and T cell activation, with the 7 drug labels mapped to their targets; and the cancer epidemiology grid (the skin-cancer-most-common rule, the 4-column MALES/FEMALES/CHILDREN/NOTES table with incidence and mortality rows, and the two NOTES — the lung-incidence trend and cancer-is-2nd-to-heart-disease).",
      notice:
        "Census (pdfimages + VLM): NO raster images on the page (pdfimages -list returned zero rows for pdf 240). The page has ONE vector figure — the immune checkpoint interactions diagram (T cell + APC + tumor cell with PD-1/PD-L1, CTLA-4/CD28/B7, TCR/MHC I, MHC II, T cell activation, and the 7 drug labels) — redrawn as an ORIGINAL KYP figure with original glyphs (the P2/P3 pure-vector convention). The cancer epidemiology block is a 4-column table (MALES / FEMALES / CHILDREN / NOTES) with incidence and mortality rows — pure text, carried verbatim in this note's tables. No copyrighted photographs exist on the page; nothing reproduced. No margin mnemonics (VLM confirmed); the KYP memory layer stays original.",
    },
    {
      kind: "table",
      title: "Book 218 — the immune checkpoint interactions (carried verbatim)",
      intro: "The two checkpoint axes and their antibody targets, as printed.",
      columns: ["AXIS", "MECHANISM + ANTIBODIES — book 218 (verbatim)"],
      rows: [
        [
          "THE DEFINITION",
          "Signals that modulate T-cell activation and function → ↓ immune response against tumor cells. Targeted by several cancer immunotherapies.",
        ],
        [
          "AXIS 1 — PD-1 / PD-L1 (the effector brake)",
          "Interaction between PD-1 (on T cells) and PD-L1/2 (on tumor cells or immune cells in tumor microenvironment) → T-cell dysfunction (exhaustion). Inhibited by antibodies against PD-1 (eg, cemiplimab, nivolumab, pembrolizumab) or PD-L1 (eg, atezolizumab, durvalumab, avelumab).",
        ],
        [
          "AXIS 2 — CTLA-4 / CD28 / B7 (the priming brake)",
          "CTLA-4 on T cells outcompetes CD28 for B7 on APCs → loss of T-cell costimulatory signal. Inhibited by antibodies against CTLA-4 (eg, ipilimumab).",
        ],
        [
          "THE FIGURE (described — vector line art, redrawn as an original KYP figure)",
          "T cell + APC + tumor cell with MHC II (APC), CD28 and CTLA-4 (T cell), B7 (APC), Antigen, T cell activation, TCR (T cell), MHC I (tumor cell), PD-1 (T cell), PD-L1 (tumor cell). Drug labels: ipilimumab (anti-CTLA-4); atezolizumab, durvalumab, avelumab (anti-PD-L1); cemiplimab, nivolumab, pembrolizumab (anti-PD-1).",
        ],
      ],
      caption:
        "Two brakes, seven antibodies. The CTLA-4 brake cuts the costimulatory signal at priming (CD28 would bind B7; CTLA-4 steals the seat) — ipilimumab releases it. The PD-1 brake drives T-cell exhaustion at the effector stage (PD-1 on the T cell binds PD-L1/2 on the tumor) — six antibodies release it (three anti-PD-1, three anti-PD-L1).",
    },
    {
      kind: "table",
      title: "Book 218 — cancer epidemiology (carried verbatim)",
      intro: "The skin-cancer-most-common rule, the 4-column incidence/mortality table, and the two NOTES, as printed.",
      columns: ["ROW", "MALES", "FEMALES", "CHILDREN (AGE 0-14)", "NOTES"],
      rows: [
        [
          "THE SKIN-CANCER RULE",
          "Skin cancer (basal > squamous >> melanoma) is the most common cancer (not included below).",
          "",
          "",
          "",
        ],
        [
          "CANCER INCIDENCE",
          "1. Prostate · 2. Lung · 3. Colon/rectum",
          "1. Breast · 2. Lung · 3. Colon/rectum",
          "1. Leukemia · 2. CNS · 3. Neuroblastoma",
          "Lung cancer incidence has ↓ in males, but has not changed significantly in females.",
        ],
        [
          "CANCER MORTALITY",
          "1. Lung · 2. Prostate · 3. Colon/rectum",
          "1. Lung · 2. Breast · 3. Colon/rectum",
          "1. Leukemia · 2. CNS · 3. Neuroblastoma",
          "Cancer is the 2nd leading cause of death in the United States (heart disease is 1st).",
        ],
      ],
      caption:
        "Skin cancer is the most common overall (excluded from the ranking). For adults, the incidence leader is the sex-specific cancer (prostate or breast) but the mortality leader is lung cancer in both sexes — lung kills efficiently. For children, the incidence and mortality lists are identical (leukemia, CNS, neuroblastoma). And cancer is the second US cause of death behind heart disease.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem:
          "A 64-year-old man with metastatic melanoma is started on a monoclonal antibody that targets PD-1; three months later his tumor burden has decreased substantially.",
        discriminator:
          "Anti-PD-1 antibody (nivolumab or pembrolizumab or cemiplimab) — releases the PD-1/PD-L1 effector brake",
        concept: "The PD-1 / PD-L1 axis",
        answer:
          "The first checkpoint axis: interaction between PD-1 (on T cells) and PD-L1/2 (on tumor cells or immune cells in tumor microenvironment) → T-cell dysfunction (exhaustion). Antibodies against PD-1 (cemiplimab, nivolumab, pembrolizumab) release the brake and restore T-cell effector function against the tumor. Metastatic melanoma is a classic indication for anti-PD-1 therapy (along with non-small cell lung cancer, renal cell carcinoma, and others). The three anti-PD-1 antibodies are the exam's most-tested immunotherapy names.",
      },
      {
        stem:
          "A 58-year-old woman with metastatic non-small cell lung cancer is started on a monoclonal antibody that targets CTLA-4; she develops colitis consistent with immune-related adverse effects.",
        discriminator:
          "Anti-CTLA-4 antibody (ipilimumab) — releases the CTLA-4/CD28/B7 priming brake; immune-related colitis is the adverse-effect signature",
        concept: "The CTLA-4 / CD28 / B7 axis",
        answer:
          "The second checkpoint axis: CTLA-4 on T cells outcompetes CD28 for B7 on APCs → loss of T-cell costimulatory signal. Ipilimumab (anti-CTLA-4) releases the brake at the priming stage, restoring costimulation. CTLA-4 blockade's immune-related adverse effects (colitis, hypophysitis, dermatitis) reflect the unleashed T-cell activation — the price of releasing the priming brake. Ipilimumab is the single anti-CTLA-4 antibody on the page.",
      },
      {
        stem:
          "A population-health question asks: among adult males in the United States, which cancer is the leading cause of cancer mortality?",
        discriminator:
          "Lung cancer — leads mortality in both males and females despite ranking second in incidence",
        concept: "The incidence-mortality divergence",
        answer:
          "The epidemiology table's key divergence: MALES cancer incidence 1. Prostate, 2. Lung, 3. Colon/rectum, but cancer mortality 1. Lung, 2. Prostate, 3. Colon/rectum. Lung cancer leads mortality in both sexes despite ranking second in incidence because lung cancer kills efficiently — the case-fatality is high. The same divergence appears in FEMALES (incidence: breast first; mortality: lung first). Skin cancer (basal > squamous >> melanoma) is the most common cancer overall but is excluded from these ranked lists.",
      },
    ],
    traps: [
      {
        a: "Anti-PD-1 antibodies",
        b: "Anti-PD-L1 antibodies",
        whyConfused: "Both target the PD-1/PD-L1 axis and both release the effector brake",
        keyDifference:
          "ANTI-PD-1 antibodies (cemiplimab, nivolumab, pembrolizumab) bind PD-1 ON THE T CELL; ANTI-PD-L1 antibodies (atezolizumab, durvalumab, avelumab) bind PD-L1 ON THE TUMOR CELL (or immune cells in the microenvironment). Three antibodies on each side — the drug-name-to-target match is the exam question.",
        clue:
          "The drug names: cemiplimab / nivolumab / pembrolizumab = anti-PD-1 (T-cell side); atezolizumab / durvalumab / avelumab = anti-PD-L1 (tumor-cell side). All six end in -umab.",
      },
      {
        a: "Anti-CTLA-4 (ipilimumab)",
        b: "Anti-PD-1 (nivolumab, pembrolizumab, cemiplimab)",
        whyConfused: "Both are checkpoint inhibitors that release a T-cell brake",
        keyDifference:
          "CTLA-4 blockade (ipilimumab) acts at the PRIMING stage on the APC-T cell interaction (CTLA-4 outcompetes CD28 for B7 → costimulation lost → ipilimumab restores it); PD-1 blockade (nivolumab, pembrolizumab, cemiplimab) acts at the EFFECTOR stage on the tumor-T cell interaction (PD-1 binds PD-L1/2 → exhaustion → anti-PD-1 restores effector function). Ipilimumab is the only anti-CTLA-4; there are three anti-PD-1 antibodies.",
        clue:
          "One antibody (ipilimumab) = CTLA-4 = priming; three antibodies (nivolumab, pembrolizumab, cemiplimab) = PD-1 = effector. The stage (priming vs effector) and the count (1 vs 3) are the discriminators.",
      },
      {
        a: "Cancer incidence (adults)",
        b: "Cancer mortality (adults)",
        whyConfused: "Both rank the top 3 cancers and both include lung and colon/rectum",
        keyDifference:
          "INCIDENCE leader is the sex-specific cancer (prostate in males, breast in females) with lung second; MORTALITY leader is lung cancer in both sexes (lung first, then the sex-specific cancer second, then colon/rectum third). Lung's mortality rank exceeds its incidence rank because lung cancer kills efficiently.",
        clue:
          "Sex-specific cancer first (prostate or breast) = incidence; lung first = mortality. The colon/rectum is third on both lists in both sexes.",
      },
      {
        a: "Childhood cancer incidence",
        b: "Childhood cancer mortality",
        whyConfused: "Both rank the top 3 childhood cancers",
        keyDifference:
          "For CHILDREN (AGE 0-14), the incidence and mortality lists are IDENTICAL: 1. Leukemia, 2. CNS, 3. Neuroblastoma. Unlike adults, where incidence and mortality diverge (lung kills disproportionately), children's top 3 are the same for both — these are the pediatric cancers that both occur most and kill most.",
        clue:
          "Same list for both = children; divergent lists = adults. The pediatric triad (leukemia, CNS, neuroblastoma) is the single memorization for children.",
      },
    ],
    pivots: [
      {
        lookAlike: "A checkpoint inhibitor name — which axis does it target?",
        differentiator:
          "Ipilimumab = anti-CTLA-4 (the priming brake, CD28/B7 axis, 1 antibody); cemiplimab/nivolumab/pembrolizumab = anti-PD-1 (the effector brake, T-cell side, 3 antibodies); atezolizumab/durvalumab/avelumab = anti-PD-L1 (the effector brake, tumor-cell side, 3 antibodies). Total: 7 antibodies, 2 axes.",
        correctPath:
          "Name the antibody, then name the axis: ipilimumab → CTLA-4 (priming); any of the 6 -mabs ending in -umab that are NOT ipilimumab → PD-1/PD-L1 (effector), with the T-cell-side vs tumor-cell-side split",
      },
      {
        lookAlike: "An epidemiology question — incidence or mortality, and which population?",
        differentiator:
          "SKIN cancer is most common overall (excluded from ranking). ADULT MALES incidence: prostate > lung > colon/rectum; mortality: lung > prostate > colon/rectum. ADULT FEMALES incidence: breast > lung > colon/rectum; mortality: lung > breast > colon/rectum. CHILDREN incidence AND mortality: leukemia > CNS > neuroblastoma (identical lists). Lung leads adult mortality in both sexes; the sex-specific cancer leads adult incidence.",
        correctPath:
          "Identify the population (male, female, child) and the metric (incidence vs mortality), then apply: sex-specific first for adult incidence, lung first for adult mortality, the pediatric triad for children",
      },
    ],
    miniCase: {
      vignette:
        "A 66-year-old man with a 30-pack-year smoking history presents with progressive dyspnea, weight loss, and hemoptysis; CT shows a 5-cm right lower lobe lung mass with mediastinal adenopathy and a left adrenal nodule. Biopsy confirms non-small cell lung adenocarcinoma; PD-L1 immunohistochemistry shows high expression in the tumor cells. He is started on a monoclonal antibody that targets PD-1. Three months later, imaging shows a partial response with shrinkage of both the lung mass and the adrenal metastasis. He subsequently develops grade 2 immune-related pneumonitis managed with corticosteroids.",
      question:
        "Name the drug class and the specific antibody target, explain the mechanism of the antitumor response, and identify why the PD-L1 expression on the tumor cells was a relevant pre-treatment test.",
      options: [
        {
          label:
            "Anti-PD-1 antibody (nivolumab, pembrolizumab, or cemiplimab) — targets PD-1 on the T cell, releasing the PD-1/PD-L1 effector brake that was driving T-cell exhaustion; the antitumor response restores T-cell effector function against the tumor. High PD-L1 expression on the tumor cells predicts response because it confirms the PD-1/PD-L1 axis is the active brake — the tumor was using it to suppress the T-cell response.",
          text: "Anti-PD-1 releases the effector brake; PD-L1 expression names the active brake.",
          correct: true,
          why:
            "Correct on all three layers. (1) THE DRUG CLASS: the monoclonal antibody targets PD-1 — the three anti-PD-1 antibodies are cemiplimab, nivolumab, and pembrolizumab (atezolizumab, durvalumab, avelumab target PD-L1, the tumor-cell side; ipilimumab targets CTLA-4, the priming brake). (2) THE MECHANISM: interaction between PD-1 (on T cells) and PD-L1/2 (on tumor cells or immune cells in tumor microenvironment) → T-cell dysfunction (exhaustion); the anti-PD-1 antibody releases this brake, restoring T-cell effector function against the tumor — the partial response at 3 months (shrinkage of both the primary and the adrenal metastasis) is the clinical readout. The immune-related pneumonitis is the on-target/off-tumor effect of an unleashed T-cell response (the lung is a classic immune-related adverse effect site for anti-PD-1 therapy). (3) THE PD-L1 TEST: high PD-L1 expression on the tumor cells is a predictive biomarker for anti-PD-1 / anti-PD-L1 response — it confirms that the PD-1/PD-L1 axis is the active brake the tumor is using, so releasing it is mechanistically rational. Tumors with low or absent PD-L1 expression are less likely to respond because the brake is not their primary escape route.",
        },
        {
          label:
            "Anti-CTLA-4 antibody (ipilimumab) — targets CTLA-4 on the T cell at the priming stage, restoring costimulation; PD-L1 expression is irrelevant to this drug's mechanism",
          text: "Ipilimumab is the drug; PD-L1 testing was unnecessary.",
          why:
            "Wrong drug class and wrong biomarker interpretation: ipilimumab targets CTLA-4 (the priming brake — CTLA-4 outcompetes CD28 for B7 on APCs), not PD-1. The stem explicitly states the antibody targets PD-1. PD-L1 expression on the tumor cells IS the predictive biomarker for anti-PD-1 therapy — the tumor's PD-L1 is the ligand for the T cell's PD-1, so its expression confirms the axis is active. Ipilimumab's biomarkers are different (tumor mutational burden, MSI status) and PD-L1 is not among them.",
        },
        {
          label:
            "Anti-PD-L1 antibody (atezolizumab, durvalumab, or avelumab) — targets PD-L1 on the tumor cell, releasing the brake from the tumor side; the mechanism is identical to anti-PD-1",
          text: "Anti-PD-L1 is the drug; the mechanism is the same as anti-PD-1.",
          why:
            "Wrong target side: the stem explicitly states the antibody targets PD-1 (on the T cell), not PD-L1 (on the tumor cell). While anti-PD-L1 antibodies (atezolizumab, durvalumab, avelumab) also release the PD-1/PD-L1 brake and would also be predicted by tumor PD-L1 expression, the stem's 'targets PD-1' is the discriminator — anti-PD-1 (nivolumab, pembrolizumab, cemiplimab) is the drug class, not anti-PD-L1. The three anti-PD-1 and three anti-PD-L1 antibodies are the exam's most-tested drug-name-to-target matches.",
        },
        {
          label:
            "Anti-HER2 antibody (trastuzumab) — targets HER2 on the tumor cell; PD-L1 expression is a coincidental finding with no bearing on the drug choice",
          text: "Trastuzumab is the drug; the lung adenocarcinoma is HER2-driven.",
          why:
            "Wrong drug class entirely: trastuzumab targets HER2 (a growth factor receptor, hallmark 1 of the cancer hallmarks), not PD-1 or any checkpoint. The stem explicitly states the antibody targets PD-1, and the immune-related pneumonitis is the signature adverse effect of checkpoint inhibitor therapy (not of trastuzumab, whose adverse effects are cardiotoxicity). HER2 is a breast and gastric cancer target, not a primary lung adenocarcinoma driver (though HER2 mutations occur in a small subset of NSCLC, trastuzumab is not the standard therapy). The PD-L1 expression and the partial response to a PD-1-targeting antibody are the mechanistic and clinical confirmations of the checkpoint inhibitor class.",
        },
        {
          label:
            "Anti-VEGF antibody (bevacizumab) — targets VEGF to inhibit angiogenesis (hallmark 5); the PD-L1 test and the pneumonitis are unrelated",
          text: "Bevacizumab is the drug; the mechanism is anti-angiogenesis.",
          why:
            "Wrong hallmark and wrong drug class: bevacizumab targets VEGF (hallmark 5, sustained angiogenesis), not PD-1 (hallmark 7, immune evasion). The stem explicitly states the antibody targets PD-1, and the immune-related pneumonitis is the on-target/off-tumor effect of checkpoint inhibitor therapy — bevacizumab's adverse effects are hypertension, proteinuria, hemorrhage, and thrombosis, not immune-related pneumonitis. The PD-L1 expression on the tumor cells is the predictive biomarker for checkpoint inhibitor therapy (the PD-1/PD-L1 axis), not for anti-VEGF therapy.",
        },
      ],
      reasoning:
        "The stem walks the PD-1/PD-L1 axis end to end. (1) THE DRUG CLASS: the antibody targets PD-1 (the stem's explicit statement) → anti-PD-1 (one of cemiplimab, nivolumab, pembrolizumab). (2) THE MECHANISM: interaction between PD-1 (on T cells) and PD-L1/2 (on tumor cells or immune cells in tumor microenvironment) → T-cell dysfunction (exhaustion); the anti-PD-1 antibody releases this brake, restoring T-cell effector function against the tumor — the partial response at 3 months is the clinical readout, and the immune-related pneumonitis is the on-target/off-tumor effect of an unleashed T-cell response. (3) THE PD-L1 TEST: high PD-L1 expression on the tumor cells is the predictive biomarker — it confirms the PD-1/PD-L1 axis is the active brake the tumor is using, so releasing it is mechanistically rational. The distractors fail at: anti-CTLA-4 (wrong axis — priming, not effector; ipilimumab, not the stem's PD-1 target), anti-PD-L1 (wrong side — tumor-cell PD-L1, not T-cell PD-1 as the stem states), anti-HER2 (wrong hallmark — growth factor receptor, not checkpoint; trastuzumab's adverse-effect profile is cardiotoxicity, not pneumonitis), and anti-VEGF (wrong hallmark — angiogenesis, not immune evasion; bevacizumab's adverse-effect profile is hypertension/hemorrhage, not immune-related pneumonitis).",
    },
  },
  mnemonics: [
    {
      code: "PD-1 T CELLS, PD-L1 TUMOR",
      meaning:
        "The PD-1/PD-L1 axis location: PD-1 is on the T CELL (the effector brake receptor); PD-L1/2 is on the TUMOR cell (or immune cells in the tumor microenvironment) — the ligand the tumor uses to drive T-cell exhaustion. Anti-PD-1 antibodies (cemiplimab, nivolumab, pembrolizumab) target the T-cell side; anti-PD-L1 antibodies (atezolizumab, durvalumab, avelumab) target the tumor-cell side.",
      memorizes: "The PD-1/PD-L1 axis sides and the 6 antibodies",
      whenToUse: "Any PD-1/PD-L1 checkpoint inhibitor question — name the side and the antibody",
      clinical:
        "PD-1 is the T cell's brake pedal; PD-L1 is the tumor's foot on it. Six antibodies: three block the pedal (anti-PD-1), three block the foot (anti-PD-L1).",
    },
    {
      code: "CTLA-4 STEALS B7 FROM CD28",
      meaning:
        "The CTLA-4 axis mechanism verbatim: CTLA-4 on T cells outcompetes CD28 for B7 on APCs → loss of T-cell costimulatory signal. CD28 would bind B7 to provide the costimulatory signal (signal 2 of T-cell activation); CTLA-4 steals the B7 seat, blocking costimulation. Ipilimumab (the single anti-CTLA-4 antibody) releases the theft, restoring costimulation at the priming stage.",
      memorizes: "The CTLA-4/CD28/B7 priming brake and ipilimumab",
      whenToUse: "Any CTLA-4 or ipilimumab question",
      clinical:
        "CTLA-4 is the thief at the priming stage — it steals B7 from CD28, cutting the costimulatory signal. Ipilimumab is the single antibody that stops the theft.",
    },
    {
      code: "SKIN IS MOST COMMON",
      meaning:
        "The epidemiology table's first rule: skin cancer (basal > squamous >> melanoma) is the most common cancer overall — but it is NOT included in the ranked incidence/mortality lists below. The ranked lists cover the non-skin cancers; skin cancer sits above the table as the overall-most-common qualifier.",
      memorizes: "The skin-cancer-most-common rule",
      whenToUse: "Any 'most common cancer' question — skin is the overall answer, but excluded from the ranked lists",
      clinical:
        "Basal cell carcinoma is the most common cancer overall — but the exam's ranked incidence and mortality lists exclude skin cancers.",
    },
    {
      code: "SECOND TO HEART",
      meaning:
        "The mortality NOTES rule: cancer is the 2nd leading cause of death in the United States — heart disease is 1st. And the incidence NOTES rule: lung cancer incidence has ↓ in males (the smoking-cessation payoff) but has not changed significantly in females (the delayed cohort effect, as women began smoking later and quit later than men).",
      memorizes: "The two epidemiology NOTES",
      whenToUse: "Any US-cancer-burden or lung-cancer-trend question",
      clinical:
        "Heart disease first, cancer second — the US mortality frame. And lung cancer's incidence has fallen in men (decades after smoking declined) but not yet in women (the cohort lag).",
    },
  ],
  rapidReview: {
    s30: [
      "Immune checkpoint interactions: signals that modulate T-cell activation and function → ↓ immune response against tumor cells; targeted by several cancer immunotherapies",
      "Axis 1 — PD-1 (on T cells) and PD-L1/2 (on tumor cells or immune cells in tumor microenvironment) → T-cell dysfunction (exhaustion); inhibited by anti-PD-1 (cemiplimab, nivolumab, pembrolizumab) or anti-PD-L1 (atezolizumab, durvalumab, avelumab)",
      "Axis 2 — CTLA-4 on T cells outcompetes CD28 for B7 on APCs → loss of T-cell costimulatory signal; inhibited by anti-CTLA-4 (ipilimumab)",
      "The 7 checkpoint antibodies: 1 anti-CTLA-4 (ipilimumab, priming stage) + 3 anti-PD-1 (cemiplimab, nivolumab, pembrolizumab, effector stage, T-cell side) + 3 anti-PD-L1 (atezolizumab, durvalumab, avelumab, effector stage, tumor-cell side)",
      "Skin cancer (basal > squamous >> melanoma) is the most common cancer overall (not included in the ranked lists)",
      "MALES incidence: prostate, lung, colon/rectum; mortality: lung, prostate, colon/rectum",
      "FEMALES incidence: breast, lung, colon/rectum; mortality: lung, breast, colon/rectum",
      "CHILDREN (age 0-14) incidence AND mortality: leukemia, CNS, neuroblastoma (identical lists)",
      "Lung cancer incidence has ↓ in males but not significantly in females; cancer is the 2nd leading cause of US death (heart disease is 1st)",
    ],
    m3: [
      "PD-1 T CELLS, PD-L1 TUMOR — the axis sides; 3 anti-PD-1 + 3 anti-PD-L1 = 6 antibodies on the effector brake",
      "CTLA-4 STEALS B7 FROM CD28 — the priming brake; ipilimumab is the single anti-CTLA-4",
      "SKIN IS MOST COMMON — basal > squamous >> melanoma, excluded from the ranked lists",
      "SECOND TO HEART — cancer is the 2nd US cause of death (heart disease is 1st); lung incidence ↓ in males, not females",
      "Adult incidence leader = sex-specific (prostate/breast); adult mortality leader = lung (both sexes); children's lists are identical (leukemia, CNS, neuroblastoma)",
    ],
    m10: [
      "The two checkpoint axes map to two stages: CTLA-4 = priming (APC-T cell, costimulation), PD-1 = effector (tumor-T cell, exhaustion)",
      "The 7 antibody names: ipilimumab (anti-CTLA-4); cemiplimab, nivolumab, pembrolizumab (anti-PD-1); atezolizumab, durvalumab, avelumab (anti-PD-L1) — all end in -umab",
      "Adult incidence and mortality diverge: sex-specific cancer first for incidence, lung first for mortality (lung kills efficiently)",
      "Children's incidence and mortality lists are identical: leukemia, CNS, neuroblastoma — the pediatric triad",
      "The checkpoint figure (vector line art, zero rasters, redrawn as original KYP): T cell + APC + tumor cell with MHC I/II, TCR, CD28, B7, CTLA-4, PD-1, PD-L1, antigen, T cell activation, and the 7 drug labels",
    ],
  },
  recall: [
    {
      q: "The immune checkpoint definition and the PD-1/PD-L1 axis verbatim.",
      a: "Signals that modulate T-cell activation and function → ↓ immune response against tumor cells. Targeted by several cancer immunotherapies. Interaction between PD-1 (on T cells) and PD-L1/2 (on tumor cells or immune cells in tumor microenvironment) → T-cell dysfunction (exhaustion). Inhibited by antibodies against PD-1 (eg, cemiplimab, nivolumab, pembrolizumab) or PD-L1 (eg, atezolizumab, durvalumab, avelumab).",
    },
    {
      q: "The CTLA-4/CD28/B7 axis verbatim.",
      a: "CTLA-4 on T cells outcompetes CD28 for B7 on APCs → loss of T-cell costimulatory signal. Inhibited by antibodies against CTLA-4 (eg, ipilimumab).",
    },
    {
      q: "The skin-cancer-most-common rule and the epidemiology table header verbatim.",
      a: "Skin cancer (basal > squamous >> melanoma) is the most common cancer (not included below). The table has 4 columns: MALES | FEMALES | CHILDREN (AGE 0-14) | NOTES.",
    },
    {
      q: "The cancer incidence and mortality rows verbatim.",
      a: "CANCER INCIDENCE — MALES: 1. Prostate, 2. Lung, 3. Colon/rectum. FEMALES: 1. Breast, 2. Lung, 3. Colon/rectum. CHILDREN (AGE 0-14): 1. Leukemia, 2. CNS, 3. Neuroblastoma. CANCER MORTALITY — MALES: 1. Lung, 2. Prostate, 3. Colon/rectum. FEMALES: 1. Lung, 2. Breast, 3. Colon/rectum. CHILDREN (AGE 0-14): 1. Leukemia, 2. CNS, 3. Neuroblastoma.",
    },
    {
      q: "The two epidemiology NOTES verbatim.",
      a: "Lung cancer incidence has ↓ in males, but has not changed significantly in females. Cancer is the 2nd leading cause of death in the United States (heart disease is 1st).",
    },
  ],
  related: [
    {
      title: "Hallmarks of Cancer",
      topicId: "cancer-hallmarks",
      note: "The immune checkpoint interactions are the molecular machinery of hallmark 7 (immune evasion): the PD-1/PD-L1 axis is the '↓ MHC I / T-cell exhaustion' escape route, and the CTLA-4/CD28/B7 axis is the 'costimulation loss' escape route. The seven antibodies are the immunotherapy that releases these brakes — the clinical translation of hallmark 7's escape mechanisms.",
    },
    {
      title: "Neoplasia Nomenclature & Progression",
      topicId: "neoplasia-nomenclature",
      note: "The epidemiology table's ranked cancers (prostate, breast, lung, colon/rectum, leukemia, CNS, neuroblastoma) are the named malignancies of P12's nomenclature table — prostate and breast are adenocarcinomas (epithelial, carcinoma), lung is adenocarcinoma or squamous (epithelial, carcinoma), colon/rectum is adenocarcinoma (epithelial, carcinoma), leukemia is the blood-cell breaker (malignant, no benign form), and CNS and neuroblastoma are the pediatric solid tumors. The nomenclature page names the tissue of origin; this page ranks the burden.",
    },
    {
      title: "T Cell Development",
      topicId: "t-cell-development",
      note: "The CTLA-4 and CD28 molecules on the T cell are the costimulatory axis whose thymic development is the T-cell-selection page's positive selection gate — the same CD28/B7 interaction that confirms a T cell's activation in the periphery is the one CTLA-4 steals. The checkpoint inhibitors' mechanism is the T-cell-development page's signal-2 logic weaponized as therapy.",
    },
    {
      title: "Cytotoxic & Regulatory T Cells",
      topicId: "cytotoxic-regulatory-t-cells",
      note: "PD-1 and CTLA-4 are the brakes on CD8+ cytotoxic T cells (the effector brake and the priming brake) — the same cells whose kill cycle is the cytotoxic-T-cell page's CD8-granzyme cascade. The checkpoint inhibitors release these brakes, restoring the kill cycle that the tumor had suppressed.",
    },
  ],
  crossLinks: [
    {
      subject: "Immunology (T-cell activation and costimulation)",
      connection:
        "The CTLA-4/CD28/B7 axis is the immunology page's signal-2 costimulation logic: CD28 binding B7 provides the costimulatory signal that activates the T cell; CTLA-4 stealing B7 removes it. The checkpoint inhibitors are the immunology of T-cell activation applied as cancer therapy — the same molecules, weaponized.",
    },
    {
      subject: "Pharmacology (monoclonal antibody naming)",
      connection:
        "The seven checkpoint inhibitor antibodies all end in -mab (monoclonal antibody) with the -u- stem (humanized) and the -li- or -ni- or -pe- or -ate- or -du- or -ave- or -cem- prefixes that name the target. The naming convention is the pharmacology page's monoclonal-antibody nomenclature applied to the checkpoint roster.",
    },
    {
      subject: "Public health (cancer epidemiology and screening)",
      connection:
        "The epidemiology table's incidence and mortality rankings drive the screening guidelines: mammography for breast (incidence leader in females), colonoscopy for colon/rectum (third in both sexes), PSA for prostate (incidence leader in males), and low-dose CT for lung (mortality leader in both sexes). The lung-incidence-trend NOTE is the public-health smoking-cessation payoff.",
    },
    {
      subject: "Pediatrics (childhood cancer triad)",
      connection:
        "The children's column (leukemia, CNS, neuroblastoma) is the pediatric oncology triad — the three cancers that dominate both incidence and mortality in patients under 15. Neuroblastoma is the most common extracranial solid tumor of childhood; leukemia (mostly ALL) is the most common childhood cancer overall; CNS tumors are the second most common. The triad is the pediatrics page's cancer frame.",
    },
  ],
};
