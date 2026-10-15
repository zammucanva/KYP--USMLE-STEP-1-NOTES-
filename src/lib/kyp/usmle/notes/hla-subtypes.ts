import type { KypUsMLENote } from "../types";

// Immunology — Cellular Components (E-batch 22).
// Source: First Aid 2026, Part 1 pdf 121 / book 99
// (HLA subtypes associated with diseases)

export const hlaSubtypes: KypUsMLENote = {
  id: "hla-subtypes",
  title: "HLA Subtypes Associated with Diseases",
  subtitle:
    "The association map between HLA alleles and disease: B27 with the seronegative spondyloarthropathies (psoriatic arthritis, ankylosing spondylitis, IBD-associated arthritis, reactive arthritis — PAIR); DQ2/DQ8 with celiac disease and type 1 diabetes; HLA-DQB1*0602 with narcolepsy; DR3 with type 1 diabetes, SLE, Graves disease, Hashimoto thyroiditis, and Addison disease; DR4 with rheumatoid arthritis, type 1 diabetes, and Addison disease; DR5 with pernicious anemia and Hashimoto thyroiditis; DRB1*15:01 raising multiple sclerosis risk; B*58:01 with allopurinol hypersensitivity (SJS/TEN risk); and DRB1*01:03 with severe ulcerative colitis — anchored by the printed mnemonics (PAIR; DM type 1 = HLA-3 and -4, 1+3=4; SL3 = SLE; four walls in one rheum[room]).",
  subject: "Immunology",
  system: "Section II · High-Yield General Principles — Cellular Components",
  pilotCategory: "Cellular Components — HLA-disease associations: B27 PAIR, DQ2/DQ8 celiac, DQB1*0602 narcolepsy, DR3/DR4/DR5, DRB1*15:01 MS, B*58:01 allopurinol SJS/TEN, DRB1*01:03 UC",
  difficulty: 2,
  readTime: 5,
  sourceRef:
    "First Aid 2026, Part 1 pp. 99 (HLA subtypes associated with diseases)",
  tags: [
    "HLA",
    "HLA-B27",
    "ankylosing spondylitis",
    "reactive arthritis",
    "psoriatic arthritis",
    "IBD-associated arthritis",
    "PAIR",
    "DQ2",
    "DQ8",
    "celiac disease",
    "HLA-DQB1*0602",
    "narcolepsy",
    "DR3",
    "DR4",
    "DR5",
    "type 1 diabetes",
    "SLE",
    "Graves disease",
    "Hashimoto thyroiditis",
    "Addison disease",
    "rheumatoid arthritis",
    "pernicious anemia",
    "DRB1*15:01",
    "multiple sclerosis",
    "B*58:01",
    "allopurinol hypersensitivity",
    "SJS/TEN",
    "DRB1*01:03",
    "ulcerative colitis",
  ],
  core: {
    what: "Specific HLA alleles carry measurable disease risks. B27: psoriatic arthritis, ankylosing spondylitis, IBD-associated arthritis, and reactive arthritis (mnemonic PAIR). DQ2/DQ8: celiac disease and type 1 diabetes. HLA-DQB1*0602: narcolepsy. DR3: type 1 diabetes, SLE, Graves disease, Hashimoto thyroiditis, Addison disease. DR4: rheumatoid arthritis, type 1 diabetes, Addison disease. DR5: pernicious anemia and Hashimoto thyroiditis. DRB1*15:01: increased risk of multiple sclerosis. B*58:01: allopurinol hypersensitivity → increased risk of SJS/TEN. DRB1*01:03: increased risk of severe ulcerative colitis. The printed mnemonics: PAIR for B27; 'DM type 1: HLA-3 and -4 (1 + 3 = 4)' and 'SL3 (SLE)' for DR3; 'There are 4 walls in 1 rheum (room)' for DR4.",
    why: "This is pure pattern-recognition currency — the exam gives a disease and asks the allele, or an allele and asks the disease family, at a rate no other immunology table matches. The associations also teach mechanism by proxy: DQ2/DQ8 present deamidated gliadin in celiac disease, DR alleles shape the peptide repertoire presented to CD4+ T cells in autoimmunity, and B*58:01 plus allopurinol is pharmacogenomics — a HLA-screening precedent (as is B*57:01 with abacavir) where genotype dictates prescribing.",
    keyIdea: "Chunk the table into five clusters: (1) the B27 family — the four seronegative arthritides (PAIR); (2) the autoimmune endocrine trio — DR3 and DR4 sharing type 1 diabetes and Addison, with DR3 adding SLE, Graves, and Hashimoto (1+3=4; SL3) and DR4 adding RA (4 walls in 1 rheum); (3) DR5 — the pernicious anemia + Hashimoto pair; (4) DQ2/DQ8 celiac (+DM1) and DQB1*0602 narcolepsy — the two DQ associations; (5) the allele-numbered trio — DRB1*15:01 (MS), B*58:01 (allopurinol → SJS/TEN), DRB1*01:03 (severe UC). Type 1 diabetes is the overlap hub: DQ2/DQ8, DR3, and DR4 all point to it.",
  },
  mechanisms: [
    {
      id: "hla-association-mechanics",
      title: "Why an HLA allele raises disease risk — the presentation-bias model",
      context: "HLA-disease associations as peptide-presentation bias",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "An individual inherits a specific HLA allele (eg, DQ2, B27, DRB1*15:01)",
            sublabel: "Input — the groove shape is set at birth.",
            variant: "input",
          },
          {
            id: "s1",
            label: "That allele's groove preferentially binds certain peptide motifs — deamidated gliadin for DQ2/DQ8, self-peptides for DR and B alleles",
            sublabel: "Process — the repertoire of displayable peptides shifts.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Autoreactive or drug-reactive T cells find their target peptide displayed more often — or fail negative selection more often",
            sublabel: "Process — thymic selection and peripheral activation both bias.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Measurable disease association: celiac (DQ2/DQ8), spondyloarthropathy (B27), autoimmune endocrinopathy (DR3/DR4), allopurinol SJS/TEN (B*58:01)",
            sublabel: "Output — genotype tilts risk; it never guarantees disease.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "groove motif" },
          { from: "s1", to: "s2", label: "peptide displayed" },
          { from: "s2", to: "o1", label: "T-cell response" },
        ],
        caption:
          "An HLA association is not causation — it is a shift in which peptides can be displayed and therefore which T cells get activated or tolerized. DQ2/DQ8 celiac is the cleanest example: the groove binds deamidated gliadin peptides so well that the immune response forms. The DR3/DR4 endocrine cluster reflects peptide-presentation bias toward islet, thyroid, and adrenal antigens. B*58:01 plus allopurinol is the pharmacogenomic extreme — the presented drug-altered peptide triggers the catastrophic epidermal reaction (SJS/TEN). This model is KYP's framework; First Aid supplies the association table itself.",
      },
    },
  ],
  blocks: [
    {
      kind: "table",
      title: "HLA subtypes associated with diseases — verbatim",
      intro: "The source's association table, verbatim: HLA subtype, disease, and the printed mnemonics.",
      columns: ["HLA subtype", "Disease", "Mnemonic"],
      rows: [
        ["B27", "Psoriatic arthritis, Ankylosing spondylitis, IBD-associated arthritis, Reactive arthritis", "PAIR"],
        ["DQ2/DQ8", "Celiac disease, DM type 1", "—"],
        ["HLA-DQB1*0602", "Narcolepsy", "—"],
        ["DR3", "DM type 1, SLE, Graves disease, Hashimoto thyroiditis, Addison disease", "DM type 1: HLA-3 and -4 (1 + 3 = 4) · SL3 (SLE)"],
        ["DR4", "Rheumatoid arthritis, DM type 1, Addison disease", "There are 4 walls in 1 “rheum” (room)"],
        ["DR5", "Pernicious anemia, Hashimoto thyroiditis", "—"],
        ["DRB1*15:01", "↑ risk of multiple sclerosis", "—"],
        ["B*58:01", "Allopurinol hypersensitivity → ↑ risk SJS/TEN", "—"],
        ["DRB1*01:03", "↑ risk of severe ulcerative colitis", "—"],
      ],
      caption:
        "Read by clusters, not rows: the B27 PAIR family; the DR3/DR4 autoimmune-endocrine overlap (type 1 diabetes is the hub — DQ2/DQ8, DR3, and DR4 all associate with it); DR5's pernicious-anemia/Hashimoto pair; the two DQ entries; and the three allele-numbered modern associations. The mnemonics printed in the source (PAIR, 1+3=4, SL3, 4 walls in 1 rheum) are the retention keys.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 24-year-old man presents with months of morning low-back stiffness that improves with activity, bilateral sacroiliac tenderness, and a history of uveitis; he is HLA-B27 positive.",
        discriminator: "Inflammatory back pain + HLA-B27",
        concept: "Ankylosing spondylitis (the B27 family)",
        answer:
          "B27 associates with the four seronegative spondyloarthropathies — Psoriatic arthritis, Ankylosing spondylitis, IBD-associated arthritis, and Reactive arthritis (PAIR). The exam pairs the allele with any member of the family: asymmetric oligoarthritis, dactylitis, enthesitis, or the classic inflammatory back pattern.",
      },
      {
        stem: "A patient with allopurinol treatment for gout develops fever, mucosal erosions, and widespread epidermal necrosis; HLA typing is sent.",
        discriminator: "Allopurinol → SJS/TEN with a specific HLA allele",
        concept: "B*58:01 — allopurinol hypersensitivity",
        answer:
          "HLA-B*58:01 associates with allopurinol hypersensitivity → increased risk of Stevens-Johnson syndrome/toxic epidermal necrolysis. It is the pharmacogenomic row of the table — genotype-guided prescribing (screening is standard in Han Chinese and other high-prevalence populations, where the allele is common), the same logic as B*57:01 screening before abacavir.",
      },
      {
        stem: "A question asks which HLA allele to check in a teenager with excessive daytime sleepiness, sleep paralysis, and abrupt loss of muscle tone with laughter.",
        discriminator: "Narcolepsy with cataplexy",
        concept: "HLA-DQB1*0602",
        answer:
          "HLA-DQB1*0602 is the narcolepsy association (the strongest HLA-disease association in neurology). Note the DQ pattern: DQ2/DQ8 for celiac and type 1 diabetes, DQB1*0602 for narcolepsy — the two DQ clusters of the table.",
      },
    ],
    traps: [
      {
        a: "HLA-B27 is associated with rheumatoid arthritis",
        b: "B27 = the PAIR family; RA is the DR4 association",
        whyConfused: "Both are arthritis associations in one table.",
        keyDifference:
          "The seronegative (RF-negative, PAIR) arthritides go with B27; rheumatoid arthritis — the seropositive one — goes with DR4 ('there are 4 walls in 1 rheum'). Sorting by RF status resolves the collision.",
        clue: "Any arthritis-plus-allele matching question.",
      },
      {
        a: "DR3 and DR4 associate with completely different diseases",
        b: "They overlap on type 1 diabetes and Addison disease",
        whyConfused: "The mnemonics make them feel separate.",
        keyDifference:
          "DR3: DM1, SLE, Graves, Hashimoto, Addison. DR4: RA, DM1, Addison. Type 1 diabetes and Addison disease appear in BOTH rows — the endocrine-autoimmune hub. DR3 adds the SL3 cluster; DR4 adds rheumatoid arthritis.",
        clue: "Any DR3-vs-DR4 discrimination question.",
      },
      {
        a: "DQ2/DQ8 is only about celiac disease",
        b: "DQ2/DQ8 also associates with type 1 diabetes",
        whyConfused: "Celiac dominates clinical memory of DQ2/DQ8.",
        keyDifference:
          "The printed row is 'Celiac disease, DM type 1' — both. The mechanism unifies them: DQ molecules present peptides (deamidated gliadin; islet antigens) to CD4+ T cells in two different autoimmune diseases.",
        clue: "Any DQ-allele disease list question.",
      },
    ],
    pivots: [
      {
        lookAlike: "The two arthritis alleles (B27 vs DR4)",
        differentiator: "Seronegative vs seropositive",
        correctPath:
          "B27 → seronegative spondyloarthropathies (PAIR: psoriatic, ankylosing, IBD-associated, reactive — enthesitis, asymmetric oligoarthritis, uveitis). DR4 → seropositive rheumatoid arthritis (symmetric small-joint polyarthritis, anti-CCP). The RF/anti-CCP status names the allele.",
      },
      {
        lookAlike: "The thyroid-disease alleles (DR3, DR5) and their company",
        differentiator: "Which autoimmune cluster travels with the thyroid disease",
        correctPath:
          "Hashimoto appears in BOTH DR3 and DR5 rows. DR3 travels with the broader autoimmune cluster (DM1, SLE, Graves, Addison); DR5 pairs Hashimoto with pernicious anemia. Graves goes with DR3 (the hyperthyroid member), and DR5 is the hypothyroid + B12-deficiency pair.",
      },
    ],
    miniCase: {
      vignette:
        "A 19-year-old college student is evaluated for six months of fatigue, a 4-kg weight loss, and polyuria. His father has psoriasis and takes medication for chronic low-back pain. On examination he is slender, with a quiet abdomen and no stigmata of chronic liver disease. Labs: fasting glucose 218 mg/dL, HbA1c 10.1%, low C-peptide, and positive anti-GAD65 antibodies; TSH is mildly suppressed with elevated free T4 and diffuse uptake on a radioiodine scan. His mother mentions that celiac disease runs in her side of the family, and the student has had intermittent loose stools this year. HLA typing is requested as part of a research protocol.",
      question:
        "Which HLA finding is most likely present in this patient, tying together his type 1 diabetes and his family's autoimmune clustering?",
      options: [
        {
          label: "A",
          text: "DR3 (and/or DR4), with DQ2/DQ8 also plausible — type 1 diabetes sits at the intersection of these alleles, and Graves plus the celiac family history extend the same DQ/DR autoimmune cluster",
          correct: true,
          why: "Correct — type 1 diabetes is the overlap hub of the table: DR3, DR4, and DQ2/DQ8 all associate with it. The patient's Graves disease points to DR3 (SL3 cluster: DM1, SLE, Graves, Hashimoto, Addison), the paternal psoriasis/backs suggest the B27 family, and the maternal celiac history implies DQ2/DQ8 — autoimmune diseases cluster in families through shared HLA haplotypes.",
        },
        {
          label: "B",
          text: "HLA-DQB1*0602, because type 1 diabetes is an autoimmune disease",
          why: "DQB1*0602 is the narcolepsy allele — and in fact it is reported to be PROTECTIVE against type 1 diabetes, the opposite direction.",
        },
        {
          label: "C",
          text: "DRB1*01:03, associating with his gastrointestinal symptoms",
          why: "DRB1*01:03 associates with severe ulcerative colitis — the student's intermittent loose stools are more consistent with celiac (DQ2/DQ8, matching the family history) and are not the UC phenotype; this allele does not explain the diabetes or thyroid findings.",
        },
        {
          label: "D",
          text: "B*58:01, explaining his drug sensitivities",
          why: "B*58:01 is the allopurinol-hypersensitivity allele — no allopurinol exposure or SJS/TEN history here; it has no association with type 1 diabetes.",
        },
        {
          label: "E",
          text: "DR5, since DR5 carries thyroid disease",
          why: "DR5's thyroid disease is Hashimoto (hypothyroid), with pernicious anemia — this patient is hyperthyroid (Graves, a DR3 disease), and DR5 does not associate with type 1 diabetes.",
        },
      ],
      reasoning:
        "The vignette is the overlap-hub question in clinical form: a type 1 diabetic teenager (low C-peptide, anti-GAD65+) who ALSO has Graves disease and a celiac-family history — three diseases that share the DR/DQ autoimmune cluster. Type 1 diabetes appears in the DR3, DR4, and DQ2/DQ8 rows; Graves is the DR3 member; celiac is DQ2/DQ8. The distractors each contain exactly one real association attached to the wrong patient: narcolepsy's DQB1*0602 (actually protective in DM1), UC's DRB1*01:03, allopurinol's B*58:01, and DR5's Hashimoto-pernicious pairing.",
    },
  },
  mnemonics: [
    {
      code: "\u201cPAIR.\u201d",
      meaning:
        "The source's own mnemonic for HLA-B27: Psoriatic arthritis, Ankylosing spondylitis, IBD-associated arthritis, Reactive arthritis — the four seronegative spondyloarthropathies.",
      memorizes: "The B27 disease family",
      whenToUse: "Any B27 matching question.",
      clinical: "Seronegative (RF-negative) arthritis with enthesitis and uveitis — think B27.",
    },
    {
      code: "\u201cDM type 1: HLA-3 and -4 (1 + 3 = 4) · SL3 (SLE) · There are 4 walls in 1 rheum (room).\u201d",
      meaning:
        "The source's own three mnemonics: DR3 and DR4 both carry type 1 diabetes (1+3=4); DR3 adds SLE (SL3); DR4 adds rheumatoid arthritis (4 walls in 1 rheum[room]).",
      memorizes: "The DR3/DR4 endocrine-autoimmune cluster",
      whenToUse: "Any DR-allele matching question.",
      clinical: "DR3: DM1, SLE, Graves, Hashimoto, Addison. DR4: RA, DM1, Addison.",
    },
    {
      code: "\u201cDQ = the two D's and the sleeper.\u201d",
      meaning:
        "KYP's key for the DQ rows: DQ2/DQ8 carry the two D's — celiac Disease and type 1 Diabetes — while DQB1*0602 is the sleeper (narcolepsy).",
      memorizes: "The DQ cluster",
      whenToUse: "Any DQ-allele question.",
      clinical: "Celiac workup in a diabetic (and vice versa) is the DQ2/DQ8 clinical echo; DQB1*0602 typing supports narcolepsy with cataplexy.",
    },
  ],
  rapidReview: {
    s30: [
      "B27 = PAIR (Psoriatic, Ankylosing, IBD-associated, Reactive arthritis)",
      "DQ2/DQ8 = celiac disease + type 1 DM",
      "HLA-DQB1*0602 = narcolepsy",
      "DR3 = DM1, SLE, Graves, Hashimoto, Addison (1+3=4; SL3)",
    ],
    m3: [
      "DR4 = rheumatoid arthritis, DM1, Addison (4 walls in 1 rheum)",
      "DR5 = pernicious anemia + Hashimoto thyroiditis",
      "DRB1*15:01 = ↑ multiple sclerosis risk",
      "B*58:01 = allopurinol hypersensitivity → ↑ SJS/TEN risk (pharmacogenomic screening)",
    ],
    m10: [
      "Type 1 diabetes = the overlap hub (DR3, DR4, DQ2/DQ8 all associate)",
      "DRB1*01:03 = ↑ severe ulcerative colitis risk",
      "Hashimoto appears in BOTH DR3 and DR5 rows; Graves is DR3",
      "B27 arthritides are seronegative; RA (DR4) is seropositive",
    ],
  },
  recall: [
    {
      q: "Name the four diseases of the HLA-B27 PAIR family and the class of arthritis they share.",
      a: "Psoriatic arthritis, Ankylosing spondylitis, IBD-associated arthritis, Reactive arthritis — the seronegative spondyloarthropathies (RF-negative).",
    },
    {
      q: "Which HLA alleles associate with celiac disease, and what other disease shares them?",
      a: "DQ2/DQ8 — also associated with type 1 diabetes mellitus.",
    },
    {
      q: "List the DR3 diseases and the two printed mnemonics that encode them.",
      a: "DR3: type 1 DM, SLE, Graves disease, Hashimoto thyroiditis, Addison disease. Mnemonics: 'DM type 1: HLA-3 and -4 (1 + 3 = 4)' and 'SL3 (SLE)'.",
    },
    {
      q: "Which diseases does DR4 carry, and what is its printed mnemonic?",
      a: "Rheumatoid arthritis, type 1 DM, Addison disease — 'There are 4 walls in 1 rheum (room)'.",
    },
    {
      q: "Give the three allele-numbered HLA associations (DRB1*15:01, B*58:01, DRB1*01:03).",
      a: "DRB1*15:01: increased risk of multiple sclerosis. B*58:01: allopurinol hypersensitivity → increased risk of SJS/TEN. DRB1*01:03: increased risk of severe ulcerative colitis.",
    },
    {
      q: "Which HLA allele associates with narcolepsy, and which endocrine disease appears in both the DR3 and DR4 rows?",
      a: "HLA-DQB1*0602 (narcolepsy). Type 1 diabetes mellitus and Addison disease appear in both DR3 and DR4 rows.",
    },
  ],
  related: [
    {
      title: "MHC I vs MHC II and Bare Lymphocyte Syndrome",
      topicId: "mhc-complex",
      note: "The HLA loci system (A/B/C class I, DP/DQ/DR class II) that this table's alleles come from.",
    },
    {
      title: "Celiac Disease and Malabsorption",
      topicId: "cystic-fibrosis",
      note: "The DQ2/DQ8 celiac association in its malabsorption context — gliadin presentation to CD4+ T cells.",
    },
    {
      title: "Type 1 Diabetes & Diabetic Ketoacidosis",
      topicId: "diabetes-mellitus",
      note: "The endocrine hub of the DR/DQ cluster — where the HLA associations become islet autoimmunity.",
    },
    {
      title: "Autoantibodies and Their Disease Associations",
      topicId: "autoantibodies",
      note: "The serology companion piece: HLA sets the risk; autoantibodies mark the active disease.",
    },
  ],
  crossLinks: [
    {
      subject: "Musculoskeletal (Rheumatology)",
      connection: "B27's seronegative spondyloarthropathies vs DR4's seropositive RA — the two arthritis alleles sorted by RF/anti-CCP.",
    },
    {
      subject: "Dermatopharmacology",
      connection: "B*58:01 plus allopurinol → SJS/TEN — HLA screening before prescribing, the same pharmacogenomic logic as B*57:01 before abacavir.",
    },
    {
      subject: "Neurology & Psychiatry",
      connection: "DQB1*0602 in narcolepsy with cataplexy and DRB1*15:01 in multiple sclerosis — the two neurologic HLA rows.",
    },
    {
      subject: "Endocrinology",
      connection: "DR3/DR4/DR5 autoimmune endocrinopathy cluster — type 1 diabetes, Graves, Hashimoto, Addison, pernicious anemia.",
    },
  ],
};
