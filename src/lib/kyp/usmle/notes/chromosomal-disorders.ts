import type { KypUsMLENote } from "../types";

// Biochemistry — Genetics III (G3).
// Source: First Aid 2026, Part 1 pdf 84–85 / book 62–63 (Genetic disorders by
// chromosome; Robertsonian translocation; Cri-du-chat; Williams)

export const chromosomalDisorders: KypUsMLENote = {
  id: "chromosomal-disorders",
  title: "Structural Chromosomal Disorders",
  subtitle:
    "The chromosome-by-chromosome disease map, the Robertsonian fusion that turns two acrocentrics into one (balanced carriers well, unbalanced gametes not), and the two named microdeletions — cri-du-chat's 5p− cat cry and Williams' 7q elastin loss with elfin friendliness.",
  subject: "Biochemistry",
  system: "Section II · High-Yield General Principles — Genetics",
  pilotCategory: "Genetics — structural rearrangements and microdeletions",
  difficulty: 2,
  readTime: 10,
  sourceRef:
    "First Aid 2026, Part 1 pp. 62–63 (genetic disorders by chromosome; Robertsonian translocation; cri-du-chat; Williams syndrome)",
  tags: [
    "Robertsonian translocation",
    "acrocentric chromosomes",
    "balanced translocation",
    "unbalanced translocation",
    "cri-du-chat",
    "5p minus",
    "Williams syndrome",
    "7q microdeletion",
    "elastin",
    "supravalvular aortic stenosis",
    "chromosome map",
    "DiGeorge syndrome",
    "22q11",
  ],
  core: {
    what: "A Robertsonian translocation commonly involves the acrocentric chromosome pairs 21, 22, 13, 14, and 15: the long arms of 2 acrocentric chromosomes fuse at the centromere and the 2 short arms are lost. Balanced translocations (no gain or loss of significant genetic material) normally do not cause abnormal phenotype; unbalanced translocations (missing or extra genes) can result in miscarriage, stillbirth, and chromosomal imbalance (eg, Down syndrome, Patau syndrome). Cri-du-chat: congenital deletion on the short arm of chromosome 5 (46,XX or XY, 5p−) with microcephaly, moderate-to-severe intellectual disability, high-pitched crying, epicanthal folds, and cardiac abnormalities (VSD). Williams syndrome: congenital microdeletion of the long arm of chromosome 7 (including the elastin gene) with elfin facies, intellectual disability, hypercalcemia, well-developed verbal skills, extreme friendliness with strangers, and cardiovascular problems (supravalvular aortic stenosis, pulmonary artery stenosis, renal artery stenosis).",
    why: "The chromosome map is the exam's favorite association table — half of all 'which chromosome' questions resolve to one of its rows — and the Robertsonian fork is the classic recurrence-risk counseling scenario: a phenotypically normal parent whose balanced t(14;21) keeps producing unbalanced gametes.",
    keyIdea: "Sort structural disease by CHROMOSOME ARM: long-arm fusions of acrocentrics (Robertsonian, pairs 21/22/13/14/15) produce balanced carriers and unbalanced conceptions; short-arm DELETIONS give loss-of-function syndromes (cri-du-chat 5p−, the cat cry); long-arm MICROdeletions give contiguous-gene syndromes (Williams 7q — elastin gone, so the vessels stenose and the face shapes). Then memorize the chromosome map as a 20-row table with the source's own pairings.",
  },
  mechanisms: [
    {
      id: "robertsonian-gamete-fork",
      title: "Robertsonian translocation — the gamete fork and its outcomes",
      context: "A balanced carrier makes gametes",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Long arms of 2 acrocentric chromosomes fuse at the centromere; the 2 short arms are lost",
            sublabel: "Input — commonly involves chromosome pairs 21, 22, 13, 14, and 15; one of the most common types of translocation.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Carrier is BALANCED: no gain or loss of significant genetic material → normally no abnormal phenotype",
            sublabel: "Molecular — all essential long-arm material is present, once on the fused chromosome.",
            variant: "process",
          },
          {
            id: "s2",
            label: "At meiosis the trivalent segregates into different gametes: normal, balanced-carrier, or unbalanced",
            sublabel: "Molecular — the fused chromosome + its homologs can partition in several combinations.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Unbalanced gametes: missing or extra genes → miscarriage, stillbirth, chromosomal imbalance (eg, Down syndrome, Patau syndrome)",
            sublabel: "Output — the translocation Down (4% of Down cases, typically t(14;21)).",
            variant: "output",
          },
          {
            id: "x1",
            label: "Normal gamete — chromosome count and structure intact",
            sublabel: "Clinical — the unaffected child of a carrier.",
            variant: "inhibit",
          },
          {
            id: "x2",
            label: "Balanced-carrier gamete — like the parent: healthy but at recurrence risk",
            sublabel: "Clinical — why parental karyotyping after one translocation Down changes counseling.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "short arms lost" },
          { from: "s1", to: "s2", label: "meiosis" },
          { from: "s2", to: "o1", label: "unbalanced" },
          { from: "x1", to: "s2", label: "normal outcome" },
          { from: "x2", to: "s2", type: "inhibit", label: "carrier outcome" },
        ],
        caption:
          "One fusion, three gamete fates: the balanced Robertsonian carrier is healthy (no significant material lost — the short arms carry redundant rRNA genes), but meiosis can hand a gamete the fused chromosome PLUS a normal homolog's long arm (unbalanced → miscarriage, stillbirth, or translocation Down/Patau), the fused chromosome alone (balanced carrier like the parent), or the two normal chromosomes (normal child).",
      },
    },
    {
      id: "microdeletion-phenotype-map",
      title: "Microdeletion syndromes — what the lost arm takes with it",
      context: "5p− and 7q11 microdeletions",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A chromosomal deletion removes a contiguous stretch of genes",
            sublabel: "Input — the phenotype is the sum of what the segment carried.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Cri-du-chat: congenital deletion on the short arm of chromosome 5 (5p−)",
            sublabel: "Molecular — loss at 5p; 'cry of the cat' high-pitched cry.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Microcephaly, moderate-to-severe intellectual disability, high-pitched crying, epicanthal folds, cardiac abnormalities (VSD)",
            sublabel: "Output — 46,XX or XY, 5p−; I cry when I am Very SaD.",
            variant: "output",
          },
          {
            id: "s2",
            label: "Williams: congenital microdeletion of the long arm of chromosome 7, deleted region includes the ELASTIN gene",
            sublabel: "Molecular — elastin loss shapes vessels and face.",
            variant: "process",
          },
          {
            id: "o2",
            label: "Elf-like facies, intellectual disability, hypercalcemia, well-developed verbal skills, extreme friendliness with strangers, supravalvular aortic stenosis, pulmonary artery stenosis, renal artery stenosis",
            sublabel: "Output — the contiguous-gene package of 7q.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1" },
          { from: "trigger", to: "s2" },
          { from: "s1", to: "o1", label: "5p−" },
          { from: "s2", to: "o2", label: "elastin lost" },
        ],
        caption:
          "Microdeletions read as gene inventories: 5p− removes the region behind the cat-like cry with microcephaly and VSD (cri-du-chat); 7q11 removes ELASTIN among neighbors — so the arteries stiffen and stenose (supravalvular aortic, pulmonary, renal), the facies elf-shapes, calcium rises, and language blooms while sociability goes to extremes (Williams).",
      },
    },
  ],
  blocks: [
    {
      kind: "text",
      title: "Robertsonian — fusion of the acrocentrics",
      body: [
        "A Robertsonian translocation is one of the most common types of translocation, and it only happens to acrocentric chromosomes — those with centromeres near their ends, the pairs 21, 22, 13, 14, and 15. The long arms of two of them fuse at the centromere, and the two short arms are lost; because the short arms carry only redundant ribosomal-RNA gene material, the carrier keeps a balanced genome: balanced translocations normally do not cause abnormal phenotype.",
        "The trouble begins at meiosis, when the fused chromosome and its two normal homologs must segregate. The possible gametes include the two normal chromosomes (a normal child), the fused chromosome alone (another balanced, healthy carrier), and the unbalanced combinations that carry the fused chromosome plus extra or missing long-arm material — conceptions that end in miscarriage or stillbirth, or survive with chromosomal imbalance such as translocation Down syndrome (most typically 14;21) or translocation Patau. That is why one translocation-Down child triggers parental karyotyping: a balanced carrier parent re-rolls these dice every pregnancy.",
      ],
    },
    {
      kind: "visual",
      visualId: "robertsonian-translocation-outcomes",
      title: "The Robertsonian figure — from fusion to gamete outcomes",
      caption:
        "The source's Robertsonian figure rebuilt: a Normal gamete precursor (two homologous pairs, four chromosomes) → the Robertsonian translocation event (the long arms of a large and a small acrocentric fuse at the centromere; the two short arms are lost; the cell now holds three chromosomes) → the Unbalanced gamete precursor → Meiosis → the outcome row: a Normal gamete, a balanced-carrier gamete, and the Abnormal gametes (duplicated or missing long-arm material). Chips define the stakes: balanced (no significant gain/loss — normally no abnormal phenotype) vs unbalanced (missing or extra genes → miscarriage, stillbirth, chromosomal imbalance — eg, Down syndrome, Patau syndrome), with the t(14;21) label for the classic translocation Down.",
      notice:
        "Count chromosomes, then count ARMS: the balanced carrier has 45 chromosomes but all essential long-arm material — healthy. The unbalanced gamete has normal COUNT feel but extra/missing long-arm dosage — miscarriage, stillbirth, or translocation Down (the 4% branch from the trisomy note). The figure's five-gamete row is the whole counseling conversation in one image.",
    },
    {
      kind: "table",
      title: "Genetic disorders by chromosome — the exam's map",
      intro: "The source's chromosome-to-disease table, verbatim pairings (book p. 62).",
      columns: ["Chromosome", "Selected exam examples"],
      rows: [
        ["3", "von Hippel-Lindau disease, renal cell carcinoma"],
        ["4", "ADPKD (PKD2), achondroplasia, Huntington disease"],
        ["5", "Cri-du-chat syndrome, familial adenomatous polyposis"],
        ["6", "Hemochromatosis (HFE)"],
        ["7", "Williams syndrome, cystic fibrosis"],
        ["9", "Friedreich ataxia, tuberous sclerosis (TSC1)"],
        ["11", "Wilms tumor, β-globin defects (sickle cell disease, β-thalassemia), MEN1, ataxia telangiectasia, Ewing sarcoma (t(11;22))"],
        ["13", "Patau syndrome, Wilson disease, retinoblastoma (RB1), BRCA2"],
        ["15", "Prader-Willi syndrome, Angelman syndrome, Marfan syndrome"],
        ["16", "ADPKD (PKD1), α-globin gene defects (eg, α-thalassemia), tuberous sclerosis (TSC2)"],
        ["17", "Neurofibromatosis type 1, BRCA1, TP53 (Li-Fraumeni syndrome)"],
        ["18", "Edwards syndrome"],
        ["21", "Down syndrome"],
        ["22", "Neurofibromatosis type 2, DiGeorge syndrome (22q11)"],
        ["X", "Fragile X syndrome, Turner syndrome (XO), XLA, Klinefelter syndrome (XXY)"],
      ],
      caption:
        "Memorize the map as the exam prints it: the hemoglobin genes split by chromosome (β-globin on 11, α-globin on 16); the tumor-suppressor row (RB1 13, BRCA1 17, BRCA2 13, TP53 17); the phakomatoses (VHL 3, NF1 17, NF2 22, TSC1 9, TSC2 16); and the imprinting pair PWS/AS sharing 15 with Marfan.",
    },
    {
      kind: "text",
      title: "The two named microdeletions — cat cry and elfin face",
      body: [
        "Cri-du-chat — the cry of the cat — is a congenital deletion on the short arm of chromosome 5: the karyotype reads 46,XX or XY, 5p−. The findings are microcephaly, moderate-to-severe intellectual disability, the characteristic high-pitched crying, epicanthal folds, and cardiac abnormalities (VSD). The source's memory line is the whole vignette: 'I cry when I am Very SaD' — the Cry, the VSD, and chromosome 5.",
        "Williams syndrome is the congenital microdeletion of the long arm of chromosome 7, and the deleted region includes the elastin gene — which explains its vascular signature (supravalvular aortic stenosis, pulmonary artery stenosis, renal artery stenosis) and contributes to the distinctive 'elfin' facies. The behavioral phenotype is as recognizable as the face: well-developed verbal skills, extreme friendliness with strangers, and intellectual disability, joined by hypercalcemia — making Williams the microdeletion that endocrinology and cardiology share.",
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title: "How the exam asks these pages",
      body: "Five recurring shapes: (1) the cat-cry stem — high-pitched cry + microcephaly + 5p− (cri-du-chat); (2) the elfin stem — elfin facies + hypercalcemia + extreme friendliness + supravalvular aortic stenosis → 7q elastin microdeletion (Williams); (3) the recurrence-risk stem — a young mother's Down-affected child; parental karyotype shows 45,XX,t(14;21) → balanced Robertsonian carrier; (4) the chromosome-map stem — which chromosome carries BRCA1 (17), β-globin (11), α-globin (16), DiGeorge (22q11); (5) the balanced-vs-unbalanced stem — a phenotypically normal translocation carrier with recurrent miscarriages.",
    },
    {
      kind: "callout",
      variant: "why",
      title: "Why losing the short arms doesn't hurt — but doubling a long arm does",
      body: "Acrocentric short arms carry the nucleolus organizer regions — clusters of rRNA genes that exist in hundreds of copies spread across five chromosome pairs. Losing two short arms in a Robertsonian fusion deletes a fraction of a redundant family: no phenotype (balanced). The long arms, by contrast, carry the unique, dosage-sensitive genes — so a gamete that receives the fused chromosome plus a normal homolog's long arm has three copies of that arm's content (translocation trisomy), while one that misses it entirely is monosomic for the arm. Imbalance of unique material, not chromosome count, is what miscarries a pregnancy or builds a syndrome — the reason a 45-chromosome carrier can be healthy and a 46-chromosome translocation-Down child is not.",
    },
  ],
  clinical: [
    {
      kind: "text",
      title: "Counseling the structural rearrangement family",
      body: [
        "The balanced translocation parent is the genetics clinic's recurring visit: healthy themselves, but each pregnancy samples the gamete fork — normal, balanced like the parent, or unbalanced (miscarriage, stillbirth, or a translocation trisomy child). After any translocation Down or Patau child, both parents are karyotyped; a carrier parent shifts counseling from population risk to the fork's odds and the options of prenatal diagnosis in every subsequent pregnancy.",
        "The microdeletion families counsel by mechanism instead: cri-du-chat (5p−) is usually de novo, so recurrence is low and care centers on the developmental and cardiac follow-through; Williams (7q11, usually de novo too) assembles a multi-specialty team — the supravalvular aortic stenosis and renal artery stenosis for cardiology and nephrology, the hypercalcemia for endocrinology, and the striking social-verbal profile for developmental pediatrics, where the friendliness-with-strangers requires concrete safety teaching.",
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 2-week-old has a high-pitched, mewing cry, microcephaly, epicanthal folds, and a VSD; karyotype shows 46,XY,5p−.",
        discriminator: "Cat-like cry + 5p−",
        concept: "Cri-du-chat syndrome",
        answer: "Congenital deletion on the short arm of chromosome 5 — microcephaly, moderate-to-severe intellectual disability, high-pitched crying, epicanthal folds, cardiac abnormalities (VSD); 'I cry when I am Very SaD'",
      },
      {
        stem: "A 4-year-old has an elfin facies, is extremely friendly with unfamiliar people, speaks with a rich vocabulary despite developmental delay, and has a harsh systolic murmur above the aortic valve; serum calcium is elevated.",
        discriminator: "Elfin facies + hypercalcemia + supravalvular AS",
        concept: "Williams syndrome",
        answer: "Congenital microdeletion of the long arm of chromosome 7 (deleted region includes the elastin gene) — supravalvular aortic stenosis, pulmonary artery stenosis, renal artery stenosis, well-developed verbal skills, extreme friendliness with strangers",
      },
      {
        stem: "A 25-year-old woman with a prior child with Down syndrome has a karyotype of 45,XX,rob(14;21)(q10;q10); she is phenotypically normal.",
        discriminator: "45 chromosomes + balanced acrocentric fusion",
        concept: "Balanced Robertsonian carrier",
        answer: "Balanced translocation (no gain or loss of significant genetic material) normally does not cause abnormal phenotype — but meiosis yields normal, balanced-carrier, and unbalanced gametes; unbalanced conceptions cause miscarriage, stillbirth, and translocation Down syndrome",
      },
      {
        stem: "A question asks which chromosome carries the β-globin gene cluster, or BRCA1, or the DiGeorge microdeletion.",
        discriminator: "The chromosome map",
        concept: "Genetic disorders by chromosome",
        answer: "β-globin defects (sickle cell, β-thalassemia) on 11 (with Wilms tumor, MEN1, Ewing t(11;22)); BRCA1 on 17 (with NF1 and TP53/Li-Fraumeni); DiGeorge syndrome 22q11 (with NF2); α-globin on 16 (with PKD1)",
      },
    ],
    traps: [
      {
        a: "Cri-du-chat (5p−)",
        b: "Williams (7q)",
        whyConfused: "Both are congenital deletions with intellectual disability and a facies.",
        keyDifference: "Cri-du-chat: SHORT arm of 5, cat-like high-pitched cry, microcephaly, VSD. Williams: LONG arm of 7 including ELASTIN, elfin facies, hypercalcemia, supravalvular aortic stenosis, extreme friendliness.",
        clue: "Cry → 5p−; vessel stenosis + hypercalcemia + friendliness → 7q.",
      },
      {
        a: "Balanced Robertsonian carrier",
        b: "Unbalanced translocation",
        whyConfused: "Both karyotypes carry a fused chromosome.",
        keyDifference: "Balanced: 45 chromosomes, no significant gain/loss, normal phenotype, recurrent miscarriages possible. Unbalanced: missing or extra genes → miscarriage, stillbirth, or chromosomal imbalance (translocation Down/Patau).",
        clue: "Phenotypically normal parent with repeated losses → balanced; the affected child → unbalanced.",
      },
      {
        a: "Chromosome 22",
        b: "Chromosome 21",
        whyConfused: "Both acrocentrics with famous syndromes.",
        keyDifference: "21: Down syndrome. 22: NF2 and the DiGeorge syndrome 22q11 microdeletion (conotruncal defects, thymic aplasia, hypocalcemia).",
        clue: "Trisomy → 21; catch-22 (DiGeorge) → 22.",
      },
      {
        a: "ADPKD1 (16)",
        b: "ADPKD2 (4)",
        whyConfused: "Same disease, two loci — the map's own trap.",
        keyDifference: "PKD1 sits on 16 (with α-globin and TSC2); PKD2 on 4 (with achondroplasia and Huntington).",
        clue: "The map row is the answer — this is a pure memory discrimination the exam uses to test the table.",
      },
    ],
    pivots: [
      {
        lookAlike: "A 'high-pitched cry in a newborn' stem offering cri-du-chat, congenital hypothyroidism, and laryngomalacia",
        differentiator: "The company the cry keeps",
        correctPath: "Cry + microcephaly + epicanthal folds + VSD + 5p− → cri-du-chat; hypothyroid cry comes with lethargy, macroglossia, umbilical hernia; laryngomalacia is inspiratory stridor that improves when prone.",
      },
      {
        lookAlike: "A 'friendly child with developmental delay' stem offering Williams, fragile X, and Down",
        differentiator: "The social style and the vessels",
        correctPath: "Hypersocial 'cocktail party' verbal skills + hypercalcemia + supravalvular aortic stenosis → Williams; macroorchidism + long face + large everted ears → fragile X; flat facies + single palmar crease → Down.",
      },
    ],
    miniCase: {
      vignette:
        "A 28-year-old woman is referred for genetic counseling after her second first-trimester miscarriage. Her first pregnancy ended in a stillborn child with features of Down syndrome; karyotyping at that time was not performed. She is healthy, with no dysmorphic features, and her partner is healthy. Her karyotype returns: 45,XX,rob(14;21)(q10;q10). The couple asks what this means for future pregnancies.",
      question: "Which of the following best describes the risk in her future pregnancies?",
      options: [
        {
          label: "A",
          correct: true,
          text: "Each pregnancy samples normal, balanced-carrier, and unbalanced gamete outcomes — unbalanced conceptions can cause miscarriage, stillbirth, or translocation Down syndrome",
          why: "Correct. She is a BALANCED Robertsonian carrier: the long arms of chromosomes 14 and 21 fused (the 2 short arms lost), leaving 45 chromosomes but no significant gain or loss — hence her normal phenotype. At meiosis the trivalent segregates into normal gametes, balanced-carrier gametes, and unbalanced gametes; the unbalanced ones explain both her miscarriages and the prior stillborn Down-affected child.",
        },
        {
          label: "B",
          text: "All of her pregnancies will be phenotypically normal because the translocation is balanced",
          why: "The balanced state protects HER, not the pregnancy — the fetus can inherit the fused chromosome plus a normal 21's long arm (translocation Down) or lose material entirely; balanced carriers have elevated miscarriage and affected-child risk.",
        },
        {
          label: "C",
          text: "The risk is the same as the population's, driven by maternal age (nondisjunction)",
          why: "Age-related risk applies to the 95% MEIOTIC NONDISJUNCTION form of Down syndrome. Her 45,XX,rob(14;21) karyotype defines the translocation (4%) form, whose recurrence risk is far above the population baseline and independent of this mechanism.",
        },
        {
          label: "D",
          text: "She is infertile because the translocation disrupts gamete formation",
          why: "Carriers are typically fertile — the problem is not making gametes but that a meaningful fraction of them are unbalanced; her two early pregnancies prove fertility.",
        },
        {
          label: "E",
          text: "All future sons will inherit the translocation because it involves an autosomal pair",
          why: "Robertsonian segregation does not follow sex-linked rules — the fused chromosome is autosomal (14;21) and can be passed to children of either sex as normal, balanced, or unbalanced outcomes; no sex skew applies.",
        },
      ],
      reasoning:
        "The karyotype is the whole answer: 45,XX,rob(14;21) = balanced Robertsonian translocation (long arms fused at the centromere, short arms lost, no significant gain/loss — normal phenotype). The gamete fork (normal / balanced / unbalanced) explains the obstetric history — miscarriages and a Down-affected stillborn are the unbalanced branch — and defines the recurrence conversation. This is the 4% translocation branch of Down syndrome from the trisomy note, now seen from the carrier parent's side.",
    },
  },
  mnemonics: [
    {
      code: "“I cry when I am Very SaD”",
      meaning: "Cri-du-chat: the cry (high-pitched, cat-like) with the VSD on chromosome 5 — the source's own line, and the whole vignette in seven words.",
      memorizes: "Cri-du-chat findings and karyotype",
      whenToUse: "Newborn with a mewing cry.",
      clinical: "46,XX or XY, 5p− — microcephaly, moderate-to-severe intellectual disability, epicanthal folds.",
    },
    {
      code: "“Williams = We're all friends here (7q, no elastin)”",
      meaning: "Extreme friendliness with strangers + well-developed verbal skills from the 7q microdeletion; the missing ELASTIN gene stiffens and narrows the great vessels.",
      memorizes: "Williams syndrome phenotype and mechanism",
      whenToUse: "Elfin facies + hypercalcemia + supravalvular aortic stenosis stems.",
      clinical: "Supravalvular aortic stenosis, pulmonary artery stenosis, renal artery stenosis — plus elfin facies and hypercalcemia.",
    },
    {
      code: "“Catch-22: DiGeorge on 22q11”",
      meaning: "The 22q11 microdeletion — 'CATCH-22': Cardiac defects, Abnormal facies, Thymic aplasia, Cleft palate, Hypocalcemia — on chromosome 22.",
      memorizes: "DiGeorge's chromosome and findings (a map-row classic)",
      whenToUse: "Conotruncal defect + hypocalcemia + recurrent infections.",
      clinical: "The map pairs 22q11 DiGeorge with NF2 — both exam favorites on the same row.",
    },
  ],
  rapidReview: {
    s30: [
      "Robertsonian translocation: acrocentric pairs 21, 22, 13, 14, 15; long arms fuse at the centromere, 2 short arms lost.",
      "Balanced = no significant gain/loss → normally no abnormal phenotype; unbalanced = missing/extra genes → miscarriage, stillbirth, imbalance (Down, Patau).",
      "Translocation Down is typically t(14;21) — the 4% branch; karyotype the parents.",
      "Cri-du-chat: 5p−, cat-like cry, microcephaly, ID, epicanthal folds, VSD — 'I cry when I am Very SaD.'",
      "Williams: 7q microdeletion including ELASTIN — elfin facies, ID, hypercalcemia, well-developed verbal skills, extreme friendliness.",
      "Williams vessels: supravalvular aortic stenosis, pulmonary artery stenosis, renal artery stenosis.",
      "Map rows: β-globin 11 · α-globin 16 · BRCA1/TP53 17 · RB1/BRCA2 13 · PWS/AS/Marfan 15 · DiGeorge 22q11.",
    ],
    m3: [
      "Acrocentric = centromere near the end — that geometry is what makes centromeric fusion possible.",
      "The short arms carry redundant rRNA genes — their loss is why balanced carriers are healthy.",
      "VHL on 3; Huntington + achondroplasia + PKD2 on 4; FAP joins cri-du-chat on 5.",
      "Hemochromatosis HFE on 6; CF joins Williams on 7; Friedreich + TSC1 on 9.",
      "Ewing sarcoma is the t(11;22) row-mate on 11 — the map's one translocation entry.",
      "Turner (XO), Klinefelter (XXY), XLA, and fragile X all sit on the map's X row.",
    ],
    m10: [
      "Robertsonian carriers have 45 chromosomes — the map's reminder that COUNT does not equal BALANCE.",
      "The prior stillborn Down child was almost certainly the unbalanced rob(14;21) outcome — retrospective diagnosis from the carrier parent.",
      "Williams' hypercalcemia is a contiguous-gene neighbor effect (often linked to the 7q11 region's vitamin-D metabolism genes) — treat as exam fact.",
      "The two PKD loci (PKD1 16, PKD2 4) are a favorite locus-heterogeneity callback.",
      "Elastin loss explains both the vessel stenoses and the dermal/face changes — one gene, systems apart.",
      "22q11 DiGeorge overlaps velocardiofacial and conotruncal anomaly face syndromes — one deletion, three names.",
    ],
  },
  recall: [
    {
      q: "Define a Robertsonian translocation and name the chromosomes it commonly involves.",
      a: "A chromosomal translocation in which the long arms of 2 acrocentric chromosomes fuse at the centromere and the 2 short arms are lost; commonly involves chromosome pairs 21, 22, 13, 14, and 15. One of the most common types of translocation.",
    },
    {
      q: "Contrast balanced and unbalanced translocations.",
      a: "Balanced (no gain or loss of significant genetic material) normally do not cause abnormal phenotype. Unbalanced (missing or extra genes) can result in miscarriage, stillbirth, and chromosomal imbalance (eg, Down syndrome, Patau syndrome).",
    },
    {
      q: "Give the karyotype and findings of cri-du-chat syndrome.",
      a: "Congenital deletion on the short arm of chromosome 5 (46,XX or XY, 5p−): microcephaly, moderate-to-severe intellectual disability, high-pitched (cat-like) crying, epicanthal folds, cardiac abnormalities (VSD).",
    },
    {
      q: "What gene is deleted in Williams syndrome, and what does its loss cause?",
      a: "The deleted region on the long arm of chromosome 7 includes the elastin gene — cardiovascular problems: supravalvular aortic stenosis, pulmonary artery stenosis, renal artery stenosis; with elfin facies, intellectual disability, hypercalcemia, well-developed verbal skills, and extreme friendliness with strangers.",
    },
    {
      q: "Name the map rows for chromosomes 13, 15, 17, and 22.",
      a: "13: Patau syndrome, Wilson disease, retinoblastoma (RB1), BRCA2. 15: Prader-Willi syndrome, Angelman syndrome, Marfan syndrome. 17: Neurofibromatosis type 1, BRCA1, TP53 (Li-Fraumeni syndrome). 22: Neurofibromatosis type 2, DiGeorge syndrome (22q11).",
    },
    {
      q: "Why is a balanced Robertsonian carrier phenotypically normal?",
      a: "The 2 lost short arms carry redundant rRNA gene clusters; all unique, dosage-sensitive long-arm material remains present (once on the fused chromosome) — no gain or loss of significant genetic material, so no abnormal phenotype.",
    },
  ],
  related: [
    {
      title: "Autosomal Trisomies & Prenatal Screening",
      note: "The 4% translocation-Down branch and the nondisjunction census live there — this note is the carrier side of the same fork.",
      topicId: "autosomal-trisomies",
    },
    {
      title: "Karyotyping",
      note: "The 45,XX,rob(14;21) carrier karyotype and the 5p− deletion are read off the karyogram this note's sibling explains.",
      topicId: "karyotyping",
    },
    {
      title: "Disorders of Imprinting",
      note: "PWS and Angelman share chromosome 15 with Marfan on the map — the imprinting note explains why the same deletion gives two diseases.",
      topicId: "imprinting-disorders",
    },
  ],
  crossLinks: [
    {
      subject: "Cardiology",
      connection: "Supravalvular aortic stenosis (Williams) and the AVSD of Down are the congenital-heart rows of structural genetics.",
    },
    {
      subject: "Obstetrics",
      connection: "Recurrent miscarriage workups end at the balanced-translocation karyotype — the gamete fork made clinical.",
    },
    {
      subject: "Immunology",
      connection: "DiGeorge 22q11 (thymic aplasia, hypocalcemia) is the map's immunology crossover.",
    },
  ],
};
