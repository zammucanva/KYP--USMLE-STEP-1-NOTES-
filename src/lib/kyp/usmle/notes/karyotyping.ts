import type { KypUsMLENote } from "../types";

// Biochemistry — Laboratory Techniques (M4/L1).
// Source: First Aid 2026, Part 1 pdf 75 / book 53
// (Karyotyping; Spectral karyotyping; FISH; Molecular cloning)

export const karyotyping: KypUsMLENote = {
  id: "karyotyping",
  title: "Karyotyping",
  subtitle:
    "Colchicine freezes dividing cells at metaphase, Giemsa bands them, and the karyogram reads chromosome number and structure — while spectral karyotyping paints each chromosome its own color so translocations, duplications, and microdeletions cannot hide.",
  subject: "Biochemistry",
  system: "Section II · High-Yield General Principles — Laboratory Techniques",
  pilotCategory: "Laboratory techniques — cytogenetics",
  difficulty: 1,
  readTime: 8,
  sourceRef:
    "First Aid 2026, Part 1 pp. 53 (karyotyping; spectral karyotyping)",
  tags: [
    "karyotyping",
    "colchicine",
    "metaphase",
    "Giemsa",
    "G-banding",
    "spectral karyotyping",
    "translocation",
    "duplication",
    "microdeletion",
    "FISH",
    "molecular cloning",
    "trisomy",
  ],
  core: {
    what: "Karyotyping adds colchicine to cultured cells to disrupt the assembly of mitotic spindles and arrest cells at metaphase of mitosis; chromosomes are then stained with Giemsa, ordered, and numbered according to morphology, size, arm-length ratio, and banding pattern. It can be performed on blood, bone marrow, amniotic fluid, or placental tissue, and diagnoses chromosomal imbalances (autosomal trisomies, sex chromosome disorders). Spectral karyotyping paints each chromosome with fluorescent probes that distinguish it from the others, identifying aneuploidies and translocations; FISH uses a fluorescent DNA or RNA probe that binds specific genes or sites of interest for specific localization.",
    why: "The metaphase-arrest trick (colchicine → spindle poison → maximally condensed, best-visible chromosomes) and the paint readouts (two-color chromosome = translocation; three copies = duplication; missing a fluorescent stretch = microdeletion) are the cytogenetics vocabulary every genetics question assumes.",
    keyIdea: "Karyotype = the whole-genome photograph: count (aneuploidy) and structure (translocation, deletion, duplication) at metaphase. SKY = the color-coded photograph that catches rearrangements G-banding blurs. FISH = the zoom lens on one named locus. Read any cytogenetics question by first asking which of those three zoom levels it needs.",
  },
  mechanisms: [
    {
      id: "metaphase-arrest-to-karyogram",
      title: "From culture to karyogram — colchicine, Giemsa, order",
      context: "Preparing a karyotype from patient cells",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Cells cultured from blood, bone marrow, amniotic fluid, or placental tissue",
            sublabel: "Molecular — the four sample sources named in the source.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Colchicine added — disrupts the assembly of mitotic spindles",
            sublabel: "Molecular — the microtubule poison from the cytoskeleton page, repurposed as a lab tool.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Cells arrest at metaphase of mitosis",
            sublabel: "Molecular — chromosomes maximally condensed and aligned: the ideal photographic moment.",
            variant: "process",
          },
          {
            id: "s3",
            label: "Chromosomes stained with Giemsa — ordered and numbered by morphology, size, arm-length ratio, banding pattern",
            sublabel: "Molecular — the G-banding fingerprint that identifies each pair.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Karyogram reads chromosomal imbalances: autosomal trisomies, sex chromosome disorders",
            sublabel: "Clinical — 47,XY,+21 (Down), 45,X (Turner), 47,XXY (Klinefelter) — counted straight off the photograph.",
            variant: "output",
          },
          {
            id: "x1",
            label: "In cancer cells, arrows point to extensive abnormalities",
            sublabel: "Clinical — the source image marks multiple structural changes in a cancer-cell karyotype.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "colchicine" },
          { from: "s1", to: "s2", label: "no spindle" },
          { from: "s2", to: "s3", label: "Giemsa" },
          { from: "s3", to: "o1" },
          { from: "x1", to: "o1", label: "structural chaos" },
        ],
        caption:
          "The pipeline in one line: culture → colchicine (spindles cannot assemble) → metaphase arrest → Giemsa bands → order and number → read counts and structures. Every karyotype question starts at the metaphase-arrest step.",
      },
    },
    {
      id: "sky-paint-readout",
      title: "Spectral karyotyping — the paint readouts",
      context: "Reading a painted karyotype",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Chromosomes hybridized with fluorescent, chromosome-specific probes",
            sublabel: "Molecular — each chromosome is 'painted' a color that distinguishes it from all others.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Translocation: one chromosome breaks and its piece(s) attach to (an)other chromosome(s)",
            sublabel: "Clinical — the paint shows a TWO-COLOR chromosome; the source images an unbalanced translocation between chromosomes 17 and 19.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Duplication: a second copy of a chromosome",
            sublabel: "Clinical — three same-color chromosomes = trisomy (or tetrasomy with four); the source shows chromosome 8.",
            variant: "process",
          },
          {
            id: "s3",
            label: "Microdeletion: lack of fluorescence at a specific locus",
            sublabel: "Clinical — compared with the corresponding locus on the second copy of that chromosome.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Aneuploidies and translocations identified in the karyotype",
            sublabel: "Output — the paint converts rearrangements into color patterns G-banding may not resolve.",
            variant: "output",
          },
          {
            id: "x1",
            label: "FISH: a fluorescent DNA or RNA probe binds specific genes or sites of interest",
            sublabel: "Clinical — used for SPECIFIC localization: one locus, one probe, not the whole genome.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "two colors" },
          { from: "trigger", to: "s2", label: "extra copy" },
          { from: "trigger", to: "s3", label: "missing stretch" },
          { from: "s1", to: "o1" },
          { from: "s2", to: "o1" },
          { from: "s3", to: "o1" },
          { from: "x1", to: "trigger", type: "inhibit", label: "zoom to one locus" },
        ],
        caption:
          "The paint dictionary: two-color chromosome = translocation (source example: chromosomes 17 and 19); three copies of a color = duplication/trisomy (source example: chromosome 8); a missing stretch on one copy = microdeletion. FISH is the targeted cousin — one fluorescent probe, one named site, for specific localization.",
      },
    },
  ],
  blocks: [
    {
      kind: "text",
      title: "Why metaphase, and why colchicine",
      body: [
        "Chromosomes are only countable when they are at their most condensed and separated — which is metaphase. Colchicine gets the culture there by disrupting the assembly of mitotic spindles: with no spindle, cells cannot progress past the metaphase-to-anaphase transition, so they pile up at exactly the stage the photographer wants.",
        "The same drug logic reappears in pharmacology and cell biology — colchicine (and its relatives mebendazole, griseofulvin, vinca alkaloids, and taxanes from the cytoskeleton page) all attack microtubules; here the attack is a feature, not a toxicity. After Giemsa staining, chromosomes are ordered and numbered according to morphology, size, arm-length ratio, and banding pattern — four criteria, one fingerprint per pair.",
        "The sample list carries the clinical reach: blood and bone marrow for postnatal and hematologic questions, amniotic fluid and placental tissue for prenatal ones. Used to diagnose chromosomal imbalances (eg, autosomal trisomies, sex chromosome disorders) — the count-and-structure questions every genetics block starts with.",
      ],
    },
    {
      kind: "visual",
      visualId: "g-banded-karyotype-schematic",
      title: "The karyogram — pairs, bands, and the cancer arrows",
      caption:
        "The karyotyping figure rebuilt: the process strip (colchicine added → disrupts assembly of mitotic spindles → arrest at metaphase → Giemsa stain → ordered and numbered by morphology, size, arm-length ratio, banding pattern), a schematic Giemsa-banded karyogram with chromosome pairs 1–22 plus X and Y and red arrows marking abnormalities (as in the source, where arrows point to extensive abnormalities in a cancer cell), the sample-source list (blood, bone marrow, amniotic fluid, placental tissue), the diagnostic use (chromosomal imbalances — autosomal trisomies, sex chromosome disorders), karyotype-nomenclature examples (46,XX · 46,XY · 47,XY,+21 · 46,XX,t(14;21)), and the same-page molecular-cloning note (recombinant DNA in a bacterial or eukaryotic host — human insulin, growth hormone).",
      notice:
        "Two things to notice: the arrows in the cancer-cell example mark STRUCTURE, not count — cancer karyotypes are chaotic in both; and the nomenclature grammar is position-based — total count, then sex pair, then abnormality (+21, t(14;21), del, ...).",
      },
    {
      kind: "text",
      title: "Spectral karyotyping and FISH — painting and zooming",
      body: [
        "In spectral karyotyping, chromosomes are 'painted' by hybridization with fluorescent probes that distinguish each chromosome from the others. Used to identify aneuploidies and translocations in a karyotype, the paint turns rearrangements into color patterns: a two-color chromosome is a translocation (the source shows an unbalanced one between chromosomes 17 and 19), a third copy of a color is a duplication (trisomy or tetrasomy — chromosome 8 in the source image), and a stretch missing fluorescence on one copy against its homolog is a microdeletion.",
        "Fluorescence in situ hybridization (FISH) is the zoom lens: a fluorescent DNA or RNA probe binds to specific genes or other sites of interest on chromosomes, used for specific localization. Where SKY surveys the whole genome in color, FISH interrogates one named address — the same division as a map of a country versus a street view of one house.",
        "The page closes with molecular cloning: production of a recombinant DNA molecule in a bacterial or eukaryotic cell line host, useful for production of human proteins by bacteria (eg, human growth hormone, insulin) — the industrial endpoint of the same DNA-manipulation toolkit.",
      ],
    },
    {
      kind: "visual",
      visualId: "sky-karyotype-schematic",
      title: "SKY — the paint dictionary with the source's three readouts",
      caption:
        "The spectral-karyotyping figure rebuilt: a paint panel of chromosome pairs each rendered in a single distinct color; the duplication row showing THREE copies of the chromosome-8 color inside a dashed highlight (a second copy of a chromosome, resulting in a trisomy or tetrasomy); the translocation row showing a two-tone 19-plus-17-piece chromosome highlighted as the unbalanced translocation between chromosomes 17 and 19; the microdeletion row showing one chromosome-15 homolog with a dashed missing stretch of signal compared with its partner; and a readout panel defining translocation, duplication, and microdeletion in the source's own words, with the FISH one-liner (fluorescent DNA or RNA probe binds specific genes or sites of interest — used for specific localization).",
      notice:
        "Learn the paint dictionary as three IF-THEN rules: IF a chromosome shows two colors THEN a piece translocated; IF a color appears three (or four) times THEN a duplication/trisomy (tetrasomy); IF one homolog lacks a fluorescent stretch THEN a microdeletion. Every SKY question is one of those three conditionals.",
    },
    {
      kind: "table",
      title: "The three zoom levels of cytogenetics",
      intro: "Same genome, three resolutions.",
      columns: ["Technique", "What you see", "Best for"],
      rows: [
        ["Karyotyping (Giemsa)", "All chromosomes, banded, ordered, numbered", "Count and large-structure abnormalities — trisomies, sex chromosome disorders"],
        ["Spectral karyotyping", "Each chromosome painted a distinct color", "Aneuploidies and translocations — rearrangements that banding may blur"],
        ["FISH", "One fluorescent probe on one named site", "Specific localization — one gene or locus of interest"],
      ],
      caption:
        "Choose the zoom by the question: 'how many chromosomes?' → karyotype; 'which chromosome did this piece come from?' → SKY; 'is THIS locus present/deleted/translocated?' → FISH.",
    },
    {
      kind: "callout",
      variant: "exam",
      title: "How the exam asks this page",
      body: "Four recurring shapes: (1) 'why metaphase / why colchicine?' — because colchicine disrupts mitotic spindle assembly, arresting cells at metaphase where chromosomes are most condensed and countable; (2) nomenclature reading — 47,XY,+21; 46,XX,t(14;21); 45,X; (3) SKY paint-pattern matching — two colors = translocation (17;19 in the source), extra color-copy = duplication (chromosome 8), missing stretch = microdeletion; (4) FISH vs karyotype — whole-genome survey vs specific-locus localization.",
    },
  ],
  clinical: [
    {
      kind: "text",
      title: "Prenatal and hematologic karyotypes",
      body: [
        "The sample list is a clinical map: amniotic fluid and placental tissue (chorionic villi) put karyotyping in the prenatal workup — the maternal-age screening cascade and the ultrasound abnormality (thickened nuchal translucency) that triggers diagnostic testing end here, with a counted karyotype rather than a screening estimate.",
        "Blood and bone marrow put it in hematology-oncology: the cancer-cell karyotype with its arrows is the source's own image of structural chaos, and classic translocations (the Philadelphia chromosome's t(9;22) among them, in later chapters) are diagnosed by exactly this technique — with SKY resolving ones the bands blur.",
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A laboratory prepares a karyotype; the question asks which agent is added to the culture and why.",
        discriminator: "Metaphase arrest via spindle disruption",
        concept: "Colchicine in karyotyping",
        answer: "Colchicine — disrupts the assembly of mitotic spindles and arrests cells at metaphase of mitosis, where chromosomes are maximally condensed",
      },
      {
        stem: "A spectral karyotype shows one chromosome fluorescing in two colors (portions of the chromosome-17 and chromosome-19 dyes).",
        discriminator: "Two-color chromosome = piece attached elsewhere",
        concept: "Translocation on SKY",
        answer: "Translocation — one chromosome breaks and its piece(s) attach to (an)other chromosome(s); unbalanced translocation between chromosomes 17 and 19 in the source",
      },
      {
        stem: "A painted karyotype shows three chromosomes fluorescing the same color (the chromosome-8 dye).",
        discriminator: "Extra same-color copy",
        concept: "Duplication on SKY",
        answer: "Duplication — a second copy of a chromosome, resulting in a trisomy (or tetrasomy with four copies)",
      },
      {
        stem: "A karyotype report reads 46,XX,t(14;21); the question asks the total chromosome count and the structural finding.",
        discriminator: "Nomenclature grammar: count, sex, abnormality",
        concept: "Karyotype nomenclature",
        answer: "46 chromosomes, female, a balanced translocation between chromosomes 14 and 21 (the Robertsonian carrier of Down-syndrome risk)",
      },
    ],
    traps: [
      {
        a: "Karyotyping",
        b: "FISH",
        whyConfused: "Both are chromosome-visualization techniques.",
        keyDifference: "Karyotyping/SKY survey the WHOLE genome (counts, rearrangements); FISH binds a specific probe to one gene or site for SPECIFIC localization.",
        clue: "Whole-genome question → karyotype/SKY; one named locus → FISH.",
      },
      {
        a: "Colchicine",
        b: "Other spindle poisons",
        whyConfused: "Mebendazole, griseofulvin, vinca alkaloids, and taxanes all act on microtubules.",
        keyDifference: "Colchicine is the one NAMED for the karyotyping metaphase arrest; vincristine and paclitaxel are chemotherapy M-phase drugs from the cytoskeleton page.",
        clue: "Lab-metaphase-arrest question → colchicine. Cancer treatment question → vinca/taxane.",
      },
      {
        a: "Translocation",
        b: "Duplication",
        whyConfused: "Both appear on SKY as 'extra' material in a color.",
        keyDifference: "Translocation shows a TWO-COLOR chromosome (a piece attached to another chromosome, eg the source's unbalanced 17;19); duplication shows a THIRD COPY of one whole color (trisomy/tetrasomy, eg chromosome 8).",
        clue: "Two colors on one chromosome = translocation; three of the same color = duplication.",
      },
      {
        a: "Spectral karyotyping",
        b: "Giemsa karyotyping",
        whyConfused: "Both are whole-genome metaphase visualizations.",
        keyDifference: "G-banding orders and numbers by banding fingerprint; SKY paints each chromosome a distinct color and flags rearrangements that banding may blur — aneuploidies and translocations at a glance.",
        clue: "'Which chromosome did this piece come from?' → SKY. 'How many and which bands?' → G-banding.",
      },
    ],
    pivots: [
      {
        lookAlike: "A 'cytogenetics test choice' stem offering karyotype, SKY, FISH, and microarray",
        differentiator: "Zoom level: whole genome in bands, whole genome in color, one locus, or molecular copy-number",
        correctPath: "Count/structure survey → karyotyping; cryptic rearrangement → SKY; a specific named locus → FISH; submicroscopic copy-number variants → microarray.",
      },
      {
        lookAlike: "A 'paint pattern' stem with a two-color chromosome or an extra color copy",
        differentiator: "Which paint rule fires",
        correctPath: "Two colors on one chromosome = translocation; three copies of one color = duplication/trisomy; missing stretch on one homolog = microdeletion.",
      },
    ],
    miniCase: {
      vignette:
        "A 37-year-old pregnant woman at 16 weeks' gestation undergoes amniocentesis after a first-trimester screen returns high risk for trisomy 21. Fetal cells from the sample are cultured; a drug is added that prevents assembly of the mitotic spindle, and the harvested chromosomes are stained with Giemsa and arranged by size, arm-length ratio, and banding pattern. The final karyogram shows 47 chromosomes, with three copies of chromosome 21 among the autosomes and an XY sex pair.",
      question: "Which drug was added to the culture to prepare this karyogram?",
      options: [
        {
          label: "A",
          correct: true,
          text: "Colchicine, arresting dividing cells at metaphase",
          why: "Correct. Colchicine is added to cultured cells to disrupt the assembly of mitotic spindles and arrest cells at metaphase of mitosis — the stage at which chromosomes are maximally condensed and can be stained with Giemsa, ordered, and numbered. The karyogram then reads directly: 47,XY,+21 — Down syndrome.",
        },
        {
          label: "B",
          text: "Paclitaxel, stabilizing microtubules against disassembly",
          why: "Tempting because taxanes are microtubule drugs from the same cytoskeleton family — but paclitaxel is an anticancer agent that STABILIZES microtubules, not the classic lab agent added to cultures for metaphase arrest; karyotyping names colchicine.",
        },
        {
          label: "C",
          text: "Giemsa stain, banding the chromosomes",
          why: "Giemsa IS in the pipeline — but as the STAIN, not the arresting drug; the question asks what was added to catch cells at metaphase before staining.",
        },
        {
          label: "D",
          text: "Granulocyte colony-stimulating factor, driving mitoses",
          why: "Growth factors could increase the number of dividing cells, but they do not arrest anything at metaphase — the karyotype depends on freezing the cycle, not accelerating it.",
        },
        {
          label: "E",
          text: "A fluorescent chromosome-painting probe cocktail",
          why: "That describes SPECTRAL karyotyping — a different visualization layer applied to already-arrested chromosomes, not the metaphase-arrest step this question targets.",
        },
      ],
      reasoning:
        "The stem walks the whole pipeline — culture, an added drug, Giemsa staining, ordering by morphology, and a 47,XY,+21 result — and asks for the arrest step. First Aid's own sentence supplies the answer: colchicine is added to cultured cells to disrupt the assembly of mitotic spindles and arrest cells at metaphase of mitosis. Each distracter swaps in a different step of the process or a different microtubule drug.",
    },
  },
  mnemonics: [
    {
      code: "“Colchicine Catches Chromosomes at metaphase”",
      meaning: "Colchicine disrupts mitotic spindle assembly, freezing dividing cells at metaphase — the stage karyotyping photographs.",
      memorizes: "The karyotyping arrest step and its drug",
      whenToUse: "Any karyotype-preparation question.",
      clinical: "Same mechanism family as mebendazole, griseofulvin, vinca alkaloids, and taxanes — all microtubule poisons.",
    },
    {
      code: "“Two colors = translocation; three copies = duplication; missing paint = microdeletion”",
      meaning: "The SKY paint dictionary in three conditionals.",
      memorizes: "Spectral-karyotyping readouts",
      whenToUse: "Any painted-karyotype pattern question.",
      clinical: "Source examples: unbalanced translocation (17;19); chromosome-8 duplication/trisomy.",
    },
  ],
  rapidReview: {
    s30: [
      "Colchicine disrupts mitotic spindle assembly → arrest at metaphase → Giemsa stain → order and number.",
      "Ordering criteria: morphology, size, arm-length ratio, banding pattern.",
      "Samples: blood, bone marrow, amniotic fluid, placental tissue.",
      "Diagnoses chromosomal imbalances: autosomal trisomies, sex chromosome disorders.",
      "SKY paints each chromosome a distinct color — aneuploidies and translocations.",
      "FISH: fluorescent DNA/RNA probe for specific localization of genes or sites.",
    ],
    m3: [
      "Translocation: one chromosome breaks and its piece(s) attach to (an)other chromosome(s) — two-color chromosome on SKY (source: 17 and 19).",
      "Duplication: a second copy of a chromosome → trisomy or tetrasomy (source: chromosome 8).",
      "Microdeletion: lack of fluorescence at a specific locus compared with the corresponding locus on the second copy.",
      "Cancer-cell karyotypes: arrows mark extensive structural abnormalities.",
      "Nomenclature: count → sex pair → abnormality (46,XX,t(14;21); 47,XY,+21; 45,X).",
      "Molecular cloning: recombinant DNA in a bacterial or eukaryotic host — human growth hormone, insulin.",
    ],
    m10: [
      "Metaphase chromosomes are maximally condensed — which is why the spindle poison is the lab's friend.",
      "Prenatal sources (amniotic fluid, placenta) vs postnatal (blood, marrow) pick the sampling procedure.",
      "SKY resolves rearrangements that banding patterns blur.",
      "FISH needs a prior hypothesis — you must know which locus to probe.",
      "The 46,XX,t(14;21) carrier is structurally balanced but carries Robertsonian Down-syndrome risk.",
      "Bacterially produced human insulin and growth hormone are molecular cloning's clinical endpoints.",
    ],
  },
  recall: [
    {
      q: "What drug arrests cultured cells for karyotyping, and at what stage?",
      a: "Colchicine — disrupts the assembly of mitotic spindles and arrests cells at metaphase of mitosis.",
    },
    {
      q: "Name the four criteria by which Giemsa-stained chromosomes are ordered and numbered.",
      a: "Morphology, size, arm-length ratio, and banding pattern.",
    },
    {
      q: "What sample sources does karyotyping accept?",
      a: "Blood, bone marrow, amniotic fluid, and placental tissue.",
    },
    {
      q: "How does a translocation appear on a spectral karyotype?",
      a: "As a two-color chromosome — one chromosome breaks and its piece(s) attach to (an)other chromosome(s); the source shows an unbalanced translocation between chromosomes 17 and 19.",
    },
    {
      q: "What does a duplication look like on SKY, and what does it create numerically?",
      a: "A second copy of a chromosome in the same paint color — resulting in a trisomy or tetrasomy (chromosome 8 in the source image).",
    },
    {
      q: "Define microdeletion as SKY reads it.",
      a: "Lack of fluorescence at a specific locus on a chromosome compared to fluorescence at the corresponding locus on the second copy of that chromosome.",
    },
    {
      q: "What is FISH and when is it preferred over karyotyping?",
      a: "Fluorescence in situ hybridization — a fluorescent DNA or RNA probe binds to specific genes or other sites of interest on chromosomes; used for specific localization when the question concerns one known locus rather than the whole genome.",
    },
  ],
  related: [
    {
      title: "Cell Cycle & Checkpoints",
      note: "Colchicine's metaphase arrest is the M phase of the cell cycle, frozen — the spindle the cycle builds, poisoned on purpose.",
      topicId: "cell-cycle",
    },
    {
      title: "Cytoskeleton, Microtubules & Cilia",
      note: "The microtubule-drug family (mebendazole, griseofulvin, vinca, taxanes) shares colchicine's target — karyotyping borrows the pharmacology.",
      topicId: "cytoskeleton-cilia",
    },
    {
      title: "Mutations in DNA",
      note: "Chromosomal counts and rearrangements are the large-scale end of the mutation spectrum this note's molecular sibling catalogs.",
      topicId: "dna-mutations",
    },
  ],
  crossLinks: [
    {
      subject: "Genetics",
      connection: "Trisomy 21, Turner (45,X), Klinefelter (47,XXY), and translocation carriers are karyotype-read diagnoses.",
    },
    {
      subject: "Obstetrics",
      connection: "Amniocentesis and chorionic-villus sampling supply the prenatal cells the karyotype is built from.",
    },
    {
      subject: "Hematology/Oncology",
      connection: "Cancer-cell karyotypes show extensive structural abnormalities — and named translocations like t(9;22) are diagnosed this way.",
    },
    {
      subject: "Pharmacology/Biochemistry",
      connection: "Molecular cloning's bacterial hosts produce human insulin and growth hormone — recombinant DNA's clinical payoff.",
    },
  ],
};
