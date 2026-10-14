import type { KypUsMLENote } from "../types";

// Biochemistry — Laboratory Techniques (M4/L1).
// Source: First Aid 2026, Part 1 pdf 73 / book 51 (Blotting procedures)

export const blottingProcedures: KypUsMLENote = {
  id: "blotting-procedures",
  title: "Blotting Procedures",
  subtitle:
    "Southern, Northern, Western, Southwestern — one membrane-and-probe architecture sized for DNA, RNA, protein, or DNA-binding protein, and the pedigree-plus-gel figure that teaches why heterozygotes show two bands.",
  subject: "Biochemistry",
  system: "Section II · High-Yield General Principles — Laboratory Techniques",
  pilotCategory: "Laboratory techniques — blotting and probe-based detection",
  difficulty: 3,
  readTime: 11,
  sourceRef:
    "First Aid 2026, Part 1 pp. 51 (blotting procedures)",
  tags: [
    "Southern blot",
    "Northern blot",
    "Western blot",
    "Southwestern blot",
    "SNoW DRoP",
    "probe",
    "gel electrophoresis",
    "heterozygosity",
    "fragile X",
    "FMR1",
    "splicing errors",
    "transcription factors",
  ],
  core: {
    what: "A Southern blot runs DNA through three steps: the sample is enzymatically cleaved into smaller pieces, separated by gel electrophoresis, and transferred to a membrane; the membrane is exposed to a labeled DNA probe that anneals to its complementary strand; the resulting double-stranded labeled piece is visualized on film or a digital imager. It identifies the SIZE of specific sequences — determination of heterozygosity, and the number of CGG repeats in FMR1 to diagnose fragile X syndrome. The same architecture with different samples gives the family: Northern (RNA — mRNA levels, size, gene expression, splicing errors), Western (protein — identified and quantified with labeled antibody), Southwestern (protein probed with labeled dsDNA — DNA-binding proteins such as transcription factors).",
    why: "This page supplies the HIV testing algorithm's confirmatory step (Western blot — 'less specific than Western blot' is written into the ELISA entry), fragile X diagnostics by FMR1 repeat sizing, and the SNoW DRoP mnemonic that anchors a dozen matching questions across genetics, immunology, and infectious disease.",
    keyIdea: "Every blot is the same three-beat rhythm — SEPARATE (gel), TRANSFER (membrane), PROBE (labeled complementary molecule) — and the probe names the blot's target: DNA probe → DNA sample (Southern), same probe → RNA sample (Northern), antibody probe → protein (Western), labeled dsDNA probe → protein (Southwestern). Band patterns then read genotype: one allele, one band; two alleles of different size, two bands.",
  },
  mechanisms: [
    {
      id: "southern-blot-workflow",
      title: "The Southern blot — separate, transfer, probe, visualize",
      context: "Sizing a DNA sequence in a patient sample",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Patient DNA sample obtained",
            sublabel: "Molecular — the genomic DNA to be interrogated for a specific sequence.",
            variant: "input",
          },
          {
            id: "s1",
            label: "1 · DNA is enzymatically cleaved into smaller pieces, separated by gel electrophoresis, and transferred to a membrane",
            sublabel: "Molecular — restriction enzymes cut; the gel sorts fragments by size; the membrane fixes them in place.",
            variant: "process",
          },
          {
            id: "s2",
            label: "2 · Membrane is exposed to a labeled DNA probe that anneals to its complementary strand",
            sublabel: "Molecular — hybridization: the probe finds its exact complementary sequence among thousands of fragments.",
            variant: "process",
          },
          {
            id: "s3",
            label: "3 · The resulting double-stranded labeled DNA is visualized on film or digital imager",
            sublabel: "Molecular — only probe-bound fragments light up, each at a position set by its size.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Band pattern reads the genotype: heterozygote = two bands (one per allele)",
            sublabel: "Clinical — determination of heterozygosity, as seen in the source's pedigree-blot figure.",
            variant: "output",
          },
          {
            id: "o2",
            label: "Fragile X: number of CGG repeats in FMR1 sizes directly as fragment size",
            sublabel: "Clinical — larger repeat tracts = larger fragments; the Southern blot counts repeats to diagnose fragile X syndrome.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "cleave + run" },
          { from: "s1", to: "s2", label: "transfer" },
          { from: "s2", to: "s3", label: "probe hybridizes" },
          { from: "s3", to: "o1", label: "bands" },
          { from: "s3", to: "o2", label: "fragment size = repeat count" },
        ],
        caption:
          "Southern blot in three beats: enzymatic cleavage and electrophoresis sort DNA fragments by size; a labeled DNA probe anneals only to its complementary sequence; the film shows bands whose POSITIONS are sizes. Two alleles of different lengths → two bands — the heterozygosity signature.",
      },
    },
    {
      id: "blot-family-selector",
      title: "The blot family — one architecture, four targets",
      context: "Choosing the right blot for the question",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "What molecule does the question ask about?",
            sublabel: "Molecular — the sample type picks the blot; the probe follows.",
            variant: "input",
          },
          {
            id: "s1",
            label: "SNoW DRoP: Southern = DNA · Northern = RNA · Western = Protein",
            sublabel: "Molecular — First Aid's own mnemonic for the three core blots.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Northern blot: an RNA sample is electrophoresed",
            sublabel: "Clinical — useful for studying mRNA levels and size, reflective of gene expression; detects splicing errors.",
            variant: "process",
          },
          {
            id: "s3",
            label: "Western blot: protein separated by gel, transferred, then bound by labeled antibody",
            sublabel: "Clinical — helps identify specific protein and determines quantity; the HIV confirmatory test after a positive ELISA.",
            variant: "process",
          },
          {
            id: "s4",
            label: "Southwestern blot: combines Southern and Western — protein probed with labeled dsDNA",
            sublabel: "Clinical — detects DNA-binding proteins (eg, transcription factors).",
            variant: "process",
          },
          {
            id: "o1",
            label: "Selected blot answers the analyte question",
            sublabel: "Output — gene expression → Northern; protein identity/quantity → Western; transcription factor → Southwestern; DNA size/genotype → Southern.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1" },
          { from: "s1", to: "s2", label: "sample = RNA" },
          { from: "s1", to: "s3", label: "sample = protein" },
          { from: "s3", to: "s4", label: "probe = dsDNA" },
          { from: "s2", to: "o1" },
          { from: "s3", to: "o1" },
          { from: "s4", to: "o1" },
        ],
        caption:
          "The selector logic: match the SAMPLE to the blot (DNA→Southern, RNA→Northern, protein→Western), then ask what the PROBE is — a labeled antibody for Western, labeled dsDNA for Southwestern, labeled DNA for Southern/Northern. SNoW DRoP carries the first three; Southwestern rides along as Southern-probe-meets-Western-sample.",
      },
    },
  ],
  blocks: [
    {
      kind: "text",
      title: "Why size tells the story",
      body: [
        "Gel electrophoresis sorts DNA fragments by length — smaller fragments run farther. Because the Southern blot visualizes only the fragments that the labeled DNA probe anneals to, the film shows exactly the sequence you asked about, at a height set by that sequence's length. Everything else on the gel stays invisible.",
        "That is why the blot is 'useful to identify size of specific sequences.' If the two homologous chromosomes carry alleles of different lengths (a normal allele and a deletion-expanded or insertion-carrying mutant allele), a heterozygote's lane shows TWO bands — one per allele — while a homozygote shows one. The pedigree-blot figure below is that logic drawn: Aa parents and children produce two-band lanes, the aa child a single mutant band, the AA child a single normal band.",
        "Fragile X is the named clinical application because the mutation IS a size question: an expanded CGG repeat tract in FMR1 makes the fragment measurably larger, so the Southern blot counts repeats — '# of CGG repeats in FMR1 to diagnose fragile X syndrome' is the source's own phrasing.",
      ],
    },
    {
      kind: "visual",
      visualId: "southern-blot-pedigree",
      title: "The pedigree blot — genotypes as band patterns",
      caption:
        "The source figure reconstructed in full: the PEDIGREE on top (I: two Aa parents marked with the mutant-allele dot; II: three children — an affected filled circle aa, a dot-marked Aa square, and an unmarked AA square), arrows connecting each individual to their lane of the SOUTHERN BLOT below; five lanes labeled Aa, Aa, aa, Aa, AA in which heterozygote lanes carry both the red mutant band (top, larger fragment) and the black normal band (bottom, smaller fragment), the aa lane carries only the mutant band, and the AA lane only the normal band; legend chips for Mutant and Normal; the three-step procedure beside the gel; and the SNoW DRoP family summary with the Northern, Western, and Southwestern one-liners.",
      notice:
        "Cover the genotype labels and read only the lanes: two bands = heterozygote, one top band = homozygous mutant, one bottom band = homozygous normal. The exam reverses the exercise — given the pedigree, predict the bands, or given the bands, name the genotype.",
    },
    {
      kind: "table",
      title: "The blot family — SNoW DRoP plus Southwestern",
      intro: "One architecture (separate, transfer, probe) with four sample-and-probe combinations.",
      columns: ["Blot", "Sample separated", "Probe", "What it tells you"],
      rows: [
        ["Southern", "DNA", "Labeled DNA probe", "Size of specific sequences — heterozygosity, FMR1 CGG repeat count (fragile X)"],
        ["Northern", "RNA", "Labeled DNA probe", "mRNA levels and size — gene expression; detects splicing errors"],
        ["Western", "Protein", "Labeled antibody", "Identifies specific protein and determines quantity (HIV confirmation)"],
        ["Southwestern", "Protein", "Labeled dsDNA", "Detects DNA-binding proteins (eg, transcription factors)"],
      ],
      caption:
        "Read the table as two questions: WHAT is in the gel (sample) and WHAT probes it. SNoW DRoP covers the first three; Southwestern is the hybrid — a Western-style protein sample probed Southern-style with double-stranded DNA.",
    },
    {
      kind: "callout",
      variant: "exam",
      title: "How the exam asks this page",
      body: "Four recurring shapes: (1) the SNoW DRoP matching stem — 'which blot detects splicing errors?' (Northern — mRNA size anomalies); (2) the two-band heterozygote logic — pedigree-to-lane or lane-to-genotype prediction; (3) the HIV algorithm — screening ELISA, confirmatory Western blot (ELISA is 'less specific than Western blot' per the source); (4) the transcription-factor question — which technique detects DNA-binding proteins? (Southwestern blot).",
    },
    {
      kind: "callout",
      variant: "why",
      title: "Why a heterozygote's lane shows two bands",
      body: "A Southern blot lane is a picture of BOTH homologs' fragments at once. In a heterozygote, the maternal and paternal chromosomes carry alleles of different lengths at the probed locus — the restriction enzyme therefore releases differently sized fragments from each, and electrophoresis pulls them to different heights. The labeled probe anneals to both (it is complementary to the shared sequence), so both bands develop on film. A homozygote has two copies of the SAME allele: one fragment size, one band. 'Two bands = two alleles' is the entire heterozygosity determination in one glance.",
    },
  ],
  clinical: [
    {
      kind: "text",
      title: "Fragile X syndrome — counting repeats by fragment size",
      body: [
        "Fragile X (FMR1) diagnostics ride on the size of the CGG repeat tract: normal alleles carry roughly 5–44 repeats, the full mutation expands past 200 with methylation-induced silencing, and premutation carriers sit between. A Southern blot of the FMR1 locus reads the tract directly — larger fragments mean more CGG repeats — which is why the source names '# of CGG repeats in FMR1 to diagnose fragile X syndrome' as the blot's flagship genetic application.",
        "The clinical pairing to remember: intellectual disability with macro-orchidism in an X-linked pedigree (grandfather-to-grandson anticipation through carrier daughters) is the phenotype; the FMR1 repeat-sizing blot is the test that grades it.",
      ],
    },
    {
      kind: "text",
      title: "The HIV testing algorithm — screen then confirm",
      body: [
        "The ELISA entry on the facing page says it plainly: ELISA 'can have high sensitivity and specificity, but is less specific than Western blot. Often used to screen for HIV infection.' The blotting page completes the algorithm — a positive screen is confirmed by Western blot, in which HIV proteins are separated by gel, transferred to membrane, and probed with the patient's labeled antibodies.",
        "The trade is the teaching point: ELISA is fast, automatable, and sensitive — fit for screening; Western blot is slower but resolves WHICH antigens the serum recognizes — fit for confirmation. Screen with the fast test, confirm with the specific one.",
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A researcher wants to compare the size and abundance of an mRNA transcript between normal and splicing-mutant tissue.",
        discriminator: "RNA analyte + size/level question",
        concept: "Northern blot",
        answer: "Northern blot — an RNA sample is electrophoresed; useful for mRNA levels and size; detects splicing errors",
      },
      {
        stem: "A pedigree shows an autosomal dominant locus; the question asks which lane pattern an Aa child will show on the family's Southern blot.",
        discriminator: "Two alleles of different size = two bands",
        concept: "Heterozygosity determination",
        answer: "Two bands — the mutant (larger) fragment and the normal (smaller) fragment, one per allele",
      },
      {
        stem: "A boy with intellectual disability and large testes has an X-linked family history with anticipation through females.",
        discriminator: "FMR1 CGG repeat expansion sizing",
        concept: "Southern blot for fragile X",
        answer: "Southern blot quantifying the number of CGG repeats in FMR1 to diagnose fragile X syndrome",
      },
      {
        stem: "A screening immunoassay for HIV is positive in a blood donor; the blood bank needs confirmation before notifying the donor.",
        discriminator: "Confirmatory specificity after a sensitive screen",
        concept: "Western blot confirmation",
        answer: "Western blot — identifies specific HIV proteins with labeled antibody; the source states ELISA is less specific than Western blot",
      },
      {
        stem: "A molecular biology question asks which technique demonstrates that a protein binds a specific double-stranded DNA sequence.",
        discriminator: "Protein analyte + dsDNA probe",
        concept: "Southwestern blot",
        answer: "Southwestern blot — combines Southern and Western: protein probed with labeled dsDNA, detecting DNA-binding proteins (eg, transcription factors)",
      },
    ],
    traps: [
      {
        a: "Southern blot",
        b: "Northern blot",
        whyConfused: "Both use a labeled DNA probe on a membrane.",
        keyDifference: "Southern's SAMPLE is DNA (genotype/size questions — heterozygosity, FMR1 repeats); Northern's SAMPLE is RNA (expression questions — mRNA levels/size, splicing errors).",
        clue: "SNoW DRoP: Southern = DNA, Northern = RNA. Ask what was loaded in the gel, not what probed it.",
      },
      {
        a: "Western blot",
        b: "ELISA",
        whyConfused: "Both use antibodies to detect protein antigens.",
        keyDifference: "ELISA is the fast, sensitive plate SCREEN; Western blot is the gel-and-membrane CONFIRMATORY test that resolves which proteins are recognized — 'less specific than Western blot' is the source's own line.",
        clue: "Screen → ELISA; confirm → Western. The HIV algorithm is the canonical example.",
      },
      {
        a: "Northern blot",
        b: "Western blot",
        whyConfused: "Both answer 'how much of this gene product is present?'",
        keyDifference: "Northern measures the mRNA (gene expression at the RNA level, splicing errors); Western measures the PROTEIN (identity and quantity after translation).",
        clue: "Expression question with RNA wording (transcript, splicing) → Northern; protein wording (antibody, quantity) → Western.",
      },
      {
        a: "Southwestern blot",
        b: "Southern blot",
        whyConfused: "The names share 'Southern'; both involve DNA.",
        keyDifference: "Southwestern's GEL holds PROTEIN, and the probe is labeled dsDNA — it detects DNA-BINDING proteins like transcription factors; Southern's gel holds DNA probed by DNA.",
        clue: "The name is the recipe: South(ern probe: DNA) + West(ern sample: protein) = DNA-binding protein detection.",
      },
    ],
    pivots: [
      {
        lookAlike: "A 'which test?' stem offering Southern, Northern, Western, and Southwestern",
        differentiator: "The analyte in the gel and the molecule doing the probing",
        correctPath: "DNA sample → Southern; RNA sample → Northern; protein + antibody probe → Western; protein + dsDNA probe → Southwestern.",
      },
      {
        lookAlike: "A blot-image stem showing one, two, or no bands",
        differentiator: "Band count = allele count (at a size-polymorphic locus)",
        correctPath: "One band = homozygous (both alleles same size); two bands = heterozygous (alleles differ in size); band POSITION = fragment size (larger repeats run higher).",
      },
    ],
    miniCase: {
      vignette:
        "A 7-year-old boy is evaluated for intellectual disability and hyperactive behavior. Examination reveals a long narrow face, large ears, and macro-orchidism. His maternal uncle received a diagnosis of mild intellectual disability as a child; his mother has premature ovarian insufficiency. The family pedigree shows affected males connected through unaffected carrier females across two generations. The genetics laboratory proposes a test that enzymatically cleaves the family's DNA, separates the fragments by gel electrophoresis, transfers them to a membrane, and probes them with a labeled complementary sequence at the FMR1 locus.",
      question: "What is the direct diagnostic purpose of sizing these FMR1 fragments?",
      options: [
        {
          label: "A",
          correct: true,
          text: "Determining the number of CGG repeats in FMR1 to diagnose fragile X syndrome",
          why: "Correct. The FMR1 mutation is an expanded CGG repeat tract, and repeat count reads directly as fragment size on a Southern blot — larger fragments mean more CGG repeats. The pedigree (affected males through carrier females, anticipation) and phenotype (long face, large ears, macro-orchidism) are the fragile X signature; the mother's premature ovarian insufficiency marks her as a premutation carrier.",
        },
        {
          label: "B",
          text: "Detecting a splicing error in the FMR1 mRNA transcript",
          why: "Splicing-error detection is the NORTHERN blot's job (RNA sample, mRNA size) — a different technique and a different question; this boy's disorder is a repeat-expansion, not a splice-site, disease.",
        },
        {
          label: "C",
          text: "Quantifying the amount of FMR1 protein in the boy's lymphocytes",
          why: "Protein identification and quantity is the WESTERN blot — downstream of the question asked here; the blot in the stem loads DNA, not protein.",
        },
        {
          label: "D",
          text: "Demonstrating that FMR1 protein binds specific DNA sequences",
          why: "That would be a SOUTHWESTERN blot (protein probed with labeled dsDNA, for DNA-binding proteins) — FMR1 is an RNA-binding protein, and the described workflow is a DNA-sample blot anyway.",
        },
        {
          label: "E",
          text: "Amplifying the FMR1 coding sequence for sequencing",
          why: "Amplification for sequencing is PCR's role — and the stem describes cleavage, electrophoresis, membrane transfer, and probe hybridization, which is the Southern blot workflow, not amplification.",
        },
      ],
      reasoning:
        "The stem hands over the technique (cleave → electrophorese → transfer → probe = Southern blot) and the locus (FMR1); First Aid's own application line does the rest: '# of CGG repeats in FMR1 to diagnose fragile X syndrome.' Each distracker names a different member of the blot family or its sibling PCR — the question is really SNoW DRoP applied to a classic phenotype.",
    },
  },
  mnemonics: [
    {
      code: "“SNoW DRoP”",
      meaning: "Southern = DNA, Northern = RNA, Western = Protein — the blot-family mnemonic from First Aid itself.",
      memorizes: "Which blot runs which sample",
      whenToUse: "Every blot-matching question.",
      clinical: "Append the fourth: Southwestern = protein probed with labeled dsDNA (DNA-binding proteins, eg, transcription factors).",
    },
    {
      code: "“Two bands, two alleles”",
      meaning: "On a Southern blot of a size-polymorphic locus, a heterozygote shows one band per allele of different size; a homozygote shows one band.",
      memorizes: "Band-count ↔ genotype logic",
      whenToUse: "Pedigree-to-lane and lane-to-genotype prediction questions.",
      clinical: "This IS 'determination of heterozygosity' — the blot application named in the source figure.",
    },
  ],
  rapidReview: {
    s30: [
      "Southern = DNA · Northern = RNA · Western = Protein (SNoW DRoP).",
      "Southern steps: cleave → electrophorese → membrane → labeled DNA probe anneals → visualize.",
      "Two bands = heterozygote (one per allele); band position = fragment size.",
      "Southern uses: heterozygosity determination, CGG-repeat count in FMR1 (fragile X).",
      "Northern: mRNA levels and size — gene expression; detects splicing errors.",
      "Western: protein identity + quantity via labeled antibody; confirms HIV after ELISA screen.",
    ],
    m3: [
      "Southwestern = protein sample probed with labeled dsDNA — detects DNA-binding proteins (eg, transcription factors).",
      "ELISA is less specific than Western blot — screen with ELISA, confirm with Western.",
      "Fragile X: expanded CGG repeats in FMR1 → larger fragments on Southern blot.",
      "A probe is a labeled complementary sequence (DNA for Southern/Northern, antibody for Western, dsDNA for Southwestern).",
      "mRNA size anomalies on a Northern blot = splicing errors.",
      "Homozygous mutant (aa) lane: single mutant band; homozygous normal (AA): single normal band.",
    ],
    m10: [
      "The membrane transfer step fixes gel-separated molecules so the probe can scan everything at once.",
      "Fragments migrate by size — smaller fragments run farther down the gel.",
      "The FMR1 full mutation (>200 CGG) adds methylation-based silencing to size expansion.",
      "Northern blot comparisons power expression studies across tissues or conditions.",
      "Western quantification reads band intensity, not just presence.",
      "The blot architecture generalizes: dot blots, slot blots, and arrays all descend from it.",
    ],
  },
  recall: [
    {
      q: "Name the three steps of a Southern blot.",
      a: "1) DNA is enzymatically cleaved into smaller pieces, separated by gel electrophoresis, and transferred to a membrane; 2) the membrane is exposed to a labeled DNA probe that anneals to its complementary strand; 3) the resulting double-stranded labeled DNA is visualized on film or a digital imager.",
    },
    {
      q: "What does SNoW DRoP stand for?",
      a: "Southern = DNA, Northern = RNA, Western = Protein.",
    },
    {
      q: "Why does a heterozygote show two bands on a Southern blot?",
      a: "The two homologous chromosomes carry alleles of different sizes at the probed locus, so the restriction enzyme releases differently sized fragments — one band develops per allele.",
    },
    {
      q: "Which blot diagnoses fragile X syndrome, and how?",
      a: "Southern blot — the number of CGG repeats in FMR1 is read directly as fragment size; expanded tracts run as larger fragments.",
    },
    {
      q: "What does a Northern blot detect beyond mRNA levels?",
      a: "mRNA size — which reflects gene expression and reveals splicing errors.",
    },
    {
      q: "How do the Western blot and ELISA divide the HIV testing algorithm?",
      a: "ELISA screens (sensitive, fast, but less specific than Western blot); Western blot confirms (identifies specific proteins via labeled antibody and determines quantity).",
    },
    {
      q: "What is unusual about the Southwestern blot's probe?",
      a: "The sample is protein, and the probe is labeled double-stranded DNA — it detects DNA-binding proteins such as transcription factors.",
    },
  ],
  related: [
    {
      title: "PCR & CRISPR/Cas9",
      note: "The amplification sibling: PCR copies a fragment so it can be detected; the blot sizes what is already there — fragile X is the meeting point of both.",
      topicId: "pcr-crispr",
    },
    {
      title: "Flow Cytometry & ELISA",
      note: "The ELISA half of the HIV algorithm lives here in full — the plate screen that the Western blot confirms.",
      topicId: "flow-cytometry-elisa",
    },
    {
      title: "RNA Processing & Splicing",
      note: "The splicing errors a Northern blot detects are the intron–exon mistakes this note's molecular sibling catalogs.",
      topicId: "rna-processing",
    },
    {
      title: "Eukaryotic Gene Organization & Regulation",
      note: "Transcription factors — the DNA-binding proteins a Southwestern blot catches — are the regulator cast of the gene-anatomy page.",
      topicId: "eukaryotic-gene-organization",
    },
  ],
  crossLinks: [
    {
      subject: "Infectious Disease",
      connection: "HIV testing: ELISA screen, Western blot confirmation — the algorithm this page completes.",
    },
    {
      subject: "Genetics",
      connection: "Fragile X FMR1 CGG-repeat sizing and heterozygosity determination are the Southern blot's flagship genetic applications.",
    },
    {
      subject: "Immunology",
      connection: "Antibody-based probing (Western) is the serologic logic of the adaptive-immune toolkit applied at the bench.",
    },
    {
      subject: "Biochemistry/Molecular Biology",
      connection: "Probe–target complementarity is the same base-pairing rule that runs DNA replication, hybridization, and CRISPR addressing.",
    },
  ],
};
