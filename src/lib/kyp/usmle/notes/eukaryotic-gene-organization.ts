import type { KypUsMLENote } from "../types";

// Biochemistry — Molecular (M2).
// Source: First Aid 2026, Part 1 pdf 61–62 / book 39–40
// (Functional organization of a eukaryotic gene; Regulation of gene expression)

export const eukaryoticGeneOrganization: KypUsMLENote = {
  id: "eukaryotic-gene-organization",
  title: "Eukaryotic Gene Organization & Regulation",
  subtitle:
    "The vocabulary set for every genetics question that follows: promoter, enhancer, silencer, epigenetics — where each sits, what binds it, and what happens when it mutates.",
  subject: "Biochemistry",
  system: "Section II · High-Yield General Principles — Molecular",
  pilotCategory: "Molecular biology — eukaryotic gene regulation",
  difficulty: 2,
  readTime: 10,
  sourceRef: "First Aid 2026, Part 1 pp. 39–40 (functional organization of a eukaryotic gene; regulation of gene expression)",
  tags: [
    "promoter",
    "enhancer",
    "silencer",
    "TATA box",
    "epigenetics",
    "enhancer",
    "open reading frame",
    "polyadenylation signal",
  ],
  core: {
    what: "A eukaryotic gene is an annotated stretch of DNA: regulatory elements (enhancer, silencer, promoter with its TATA and CAAT boxes) upstream of a transcription start, followed by alternating exons and introns (introns beginning GT and ending AG), ending in a polyadenylation signal (AATAAA). Regulation happens at promoters (RNA polymerase II plus transcription factors), enhancers and silencers (activators and repressors), and through epigenetic modification — DNA methylation, histone modification, and noncoding RNA.",
    why: "These definitions are the load-bearing vocabulary of the entire molecular biology section — mutation questions, expression experiments, and epigenetic disease mechanisms all presuppose them. First Aid dedicates a full two-page spread to this anatomy because every later genetics topic is phrased in these terms.",
    keyIdea: "Position tells you function: the promoter is where the transcription machinery assembles (its mutation guts expression); enhancers and silencers are flexible-distance elements that tune expression up or down; epigenetic changes alter expression heritably without touching the sequence itself.",
  },
  mechanisms: [
    {
      id: "gene-expression-flow",
      title: "From gene anatomy to protein — the expression pipeline",
      context: "A protein-coding eukaryotic gene",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Regulatory elements set the stage",
            sublabel: "Molecular — enhancers (activators) and silencers (repressors) tune the locus; the promoter (AT-rich TATA/CAAT boxes) hosts the machinery.",
            variant: "input",
          },
          {
            id: "s1",
            label: "RNA polymerase II + transcription factors bind the promoter",
            sublabel: "Molecular — the site lies upstream of the gene locus; promoters increase initiation of transcription.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Transcription starts and runs through exons and introns",
            sublabel: "Molecular — the primary transcript (pre-mRNA) copies everything, with introns marked GT…AG at their boundaries.",
            variant: "process",
          },
          {
            id: "s3",
            label: "Pre-mRNA is processed into mRNA",
            sublabel: "Pathway — 5′ cap, splicing out introns, and a poly-A tail added at the AATAAA signal; mRNA exits the nucleus.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Translation in the cytosol produces the protein",
            sublabel: "Output — the coding region (open reading frame, AUG to stop) is read between the UTRs.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "activators ↑ / repressors ↓" },
          { from: "s1", to: "s2", label: "transcription start" },
          { from: "s2", to: "s3", label: "cap + splice + tail" },
          { from: "s3", to: "o1", label: "export + translation" },
        ],
        caption:
          "One gene, four stations: regulation at the DNA elements, initiation at the promoter, processing of the transcript, and translation of the finished mRNA — the anatomy figure and the expression pipeline are the same drawing read two ways.",
      },
    },
    {
      id: "promoter-mutation-consequence",
      title: "Promoter mutation — the dramatic-down experiment",
      context: "Expression analysis of promoter variants",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A mutation alters the promoter (TATA/CAAT region)",
            sublabel: "Molecular — the AT-rich upstream sequence differs between eukaryotes and prokaryotes; it is where the complex assembles.",
            variant: "input",
          },
          {
            id: "s1",
            label: "RNA polymerase II + transcription factors bind poorly",
            sublabel: "Molecular — fewer initiation complexes assemble at the mutated site.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Dramatic ↓ in level of gene transcription",
            sublabel: "Clinical — the classic exam phrasing; enhancer variants produce graded effects, promoter variants collapse expression.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "initiation ↓" },
          { from: "s1", to: "o1" },
        ],
        caption:
          "The promoter is the assembly dock — damage it and the whole operation idles. Compare: enhancer mutations modulate; promoter mutations amputate.",
      },
    },
  ],
  blocks: [
    {
      kind: "table",
      title: "The regulation elements — the exam table",
      intro: "Four definitions, each paired with the binding player and its effect.",
      columns: ["Element", "What binds / what it is", "Effect"],
      rows: [
        ["Promoter", "RNA polymerase II + multiple transcription factors, at AT-rich upstream TATA and CAAT boxes", "↑ initiation of transcription; mutation → dramatic ↓ in transcription"],
        ["Enhancer", "Regulatory proteins — “activators”", "↑ expression of a gene on the same chromosome; may be close to, far from, or within (in an intron) the gene"],
        ["Silencer", "Regulatory proteins — “repressors”", "↓ expression of a gene on the same chromosome"],
        ["Epigenetic change", "DNA methylation, histone modification, noncoding RNA", "Heritable (mitotically/meiotically) expression change WITHOUT a change in the DNA sequence"],
      ],
      caption:
        "Note the asymmetry the exam exploits: promoters and enhancers both increase expression — promoters by initiating, enhancers by amplifying from any distance, even from inside an intron.",
    },
    {
      kind: "visual",
      visualId: "eukaryotic-gene-anatomy",
      title: "Anatomy of a eukaryotic gene — DNA to pre-mRNA to protein",
      caption:
        "The coding-strand anatomy strip — enhancer/silencer, CAAT and TATA (TATAAA) boxes, transcription start, 5′ UTR, exons with GT…AG introns between them, open reading frame, 3′ UTR with the AATAAA polyadenylation signal — then the transcription → pre-mRNA → mature mRNA (5′ cap, ligated exons, AAUAAA, poly-A tail) → protein flow beneath it.",
      notice:
        "Locate the landmarks in order: the two promoter boxes sit UPSTREAM of the transcription start; the 5′ UTR begins at transcription start and ends at AUG; the open reading frame spans the exon coding sequence; and AATAAA in the 3′ UTR marks where the tail is added. The UTRs are transcribed but not translated.",
    },
    {
      kind: "list",
      title: "Anatomy landmarks the stems lean on",
      intro: "Six vocabulary anchors from the figure, each worth one answer choice.",
      items: [
        { lead: "TATA & CAAT boxes", text: "AT-rich promoter elements upstream of the transcription start — where RNA pol II and transcription factors land; they differ between eukaryotes and prokaryotes." },
        { lead: "Transcription start", text: "The first transcribed nucleotide — everything before it (boxes, enhancers) is DNA regulation; everything after it is RNA." },
        { lead: "Exons / introns", text: "Exons carry the actual genetic information coding for protein; introns do not code but regulate expression, and are marked GT…AG at their boundaries." },
        { lead: "5′ & 3′ UTR", text: "Untranslated regions flanking the coding sequence — transcribed into the mRNA, present in the mature transcript, but not read as protein." },
        { lead: "Open reading frame", text: "The protein-coding stretch from AUG to the stop codon, spanning ligated exons." },
        { lead: "AATAAA / AAUAAA", text: "The polyadenylation signal — AATAAA on the DNA coding strand, AAUAAA in the mRNA; its mutation causes early transcript degradation." },
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title: "How the exam asks this page",
      body: "Two recurring shapes: (1) definition-matching — “a DNA locus where activator proteins bind, increasing expression of a gene on the same chromosome, possibly far away or within an intron” → enhancer. (2) consequence prediction — “a mutation in which region most reduces transcription of the gene?” → promoter (dramatic ↓); enhancer-loss distractors produce milder, graded effects. Epigenetics questions test the heritable-without-sequence-change clause and its three mechanisms.",
    },
    {
      kind: "callout",
      variant: "why",
      title: "Why enhancers ignore distance",
      body: "An enhancer can sit close to, far from, or even inside an intron of the gene it regulates because DNA loops — the activator bound at the enhancer is physically brought into contact with the promoter complex by bending the intervening DNA. The promoter, by contrast, must sit precisely upstream: it is a docking sequence for the machinery, not a floating modulator. That positional difference is why promoter mutations amputate expression while enhancer mutations merely tune it.",
    },
  ],
  clinical: [
    {
      kind: "text",
      title: "Epigenetics — the heritable layer above the sequence",
      body: [
        "Epigenetic changes alter gene expression in a manner heritable through mitosis (and sometimes meiosis) without changing the underlying DNA sequence. The three primary mechanisms are DNA methylation, histone modification, and noncoding RNA — each reversible in principle, which is what separates epigenetic disease from sequence mutation.",
        "Two disease anchors recur on exams: imprinting disorders (the methylation patterns that keep only one parental allele active — the mechanism behind Prader-Willi/Angelman syndromes) and the methylation-silencing of tumor suppressor promoters in cancer. This page supplies the mechanism vocabulary those topics build on.",
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A reporter-gene experiment finds a DNA region 40 kb upstream of a gene that increases its transcription when bound by a specific protein; the region also functions when moved inside an intron.",
        discriminator: "Same-chromosome expression increase from a flexible-position element",
        concept: "Enhancer definition",
        answer: "Enhancer — activators bind; position may be close, far, or within an intron",
      },
      {
        stem: "A family segregates a point mutation; carriers show a dramatic decrease in transcription of a particular gene, though the coding sequence is intact.",
        discriminator: "Expression collapse with intact coding sequence — machinery docking site damaged",
        concept: "Promoter mutation consequence",
        answer: "Promoter mutation → dramatic ↓ in the level of gene transcription",
      },
      {
        stem: "A question asks for a mechanism of gene-expression change that is heritable through mitosis but involves no alteration of the DNA sequence.",
        discriminator: "The heritable-without-sequence-change clause",
        concept: "Epigenetic regulation",
        answer: "DNA methylation, histone modification, or noncoding RNA",
      },
      {
        stem: "A molecular stem describes a DNA locus bound by proteins that decrease the expression of a gene on the same chromosome.",
        discriminator: "Same-chromosome expression decrease",
        concept: "Silencer definition",
        answer: "Silencer — repressor proteins bind and decrease expression",
      },
      {
        stem: "An annotation question on a gene schematic asks which region lies between the transcription start site and the AUG codon.",
        discriminator: "Transcribed-but-untranslated leader region",
        concept: "5′ UTR identity",
        answer: "The 5′ untranslated region — part of the mature mRNA but not protein coding",
      },
    ],
    traps: [
      {
        a: "Promoter",
        b: "Enhancer",
        whyConfused: "Both increase expression, and both appear in every question set.",
        keyDifference: "The promoter is the fixed upstream docking site for RNA pol II + transcription factors (TATA/CAAT); enhancers are flexible-position amplifiers bound by activators.",
        clue: "“Upstream, AT-rich, TATA” → promoter. “Far away, within an intron, activator-bound” → enhancer.",
      },
      {
        a: "Enhancer",
        b: "Silencer",
        whyConfused: "Mirror definitions — same positional freedom, opposite effect.",
        keyDifference: "Activators bind enhancers (↑ expression); repressors bind silencers (↓ expression).",
        clue: "Track the protein, not the position: activator → enhancer, repressor → silencer.",
      },
      {
        a: "Epigenetic change",
        b: "Promoter mutation",
        whyConfused: "Both can reduce transcription; both can be inherited.",
        keyDifference: "Epigenetic changes leave the DNA sequence intact (methylation, histones, ncRNA) and are reversible; a promoter mutation is a sequence change.",
        clue: "“Without a change in DNA sequence” → epigenetic. “Point mutation at the TATA box” → promoter mutation.",
      },
    ],
    pivots: [
      {
        lookAlike: "A gene schematic with lettered regions (A–E) asks which piece is the enhancer / promoter / 5′ UTR / ORF",
        differentiator: "Position relative to the transcription start and AUG",
        correctPath: "Upstream boxes → promoter (TATA/CAAT); flexible-distance modulators → enhancer/silencer; transcription start → AUG = 5′ UTR; AUG → stop = open reading frame; AATAAA past the stop = 3′ UTR with polyadenylation signal.",
      },
      {
        lookAlike: "Expression-change stems offering promoter mutation, enhancer variant, epigenetic change, and splicing defect",
        differentiator: "Magnitude and mechanism of the change",
        correctPath: "Dramatic collapse at initiation → promoter. Graded modulation at odd distances → enhancer. Heritable without sequence change → epigenetic. Exon skipping or retention → splicing.",
      },
    ],
    miniCase: {
      vignette:
        "Researchers study a gene whose protein is undetectable in a patient despite a normal coding sequence, normal splicing, and normal mRNA half-life. Mapping shows a single base substitution in an AT-rich region ~30 bp upstream of the transcription start site, near a TATA-like sequence. In vitro, RNA polymerase II and associated transcription factors show markedly reduced binding to the patient's version of this region.",
      question: "Which functional element is disrupted in this patient?",
      options: [
        {
          label: "A",
          correct: true,
          text: "The promoter",
          why: "Correct. An AT-rich upstream region with TATA-like sequence where RNA polymerase II and transcription factors bind is the promoter; its mutation classically causes a dramatic ↓ in the level of gene transcription.",
        },
        {
          label: "B",
          text: "An enhancer",
          why: "Tempting — enhancers also regulate expression — but enhancers are flexible-position activator sites, not the fixed AT-rich docking region for the polymerase complex described here.",
        },
        {
          label: "C",
          text: "A silencer",
          why: "Wrong direction of effect and wrong binding protein — silencers bind repressors to decrease expression; the stem describes a failure of the expression machinery to assemble.",
        },
        {
          label: "D",
          text: "The 5′ UTR",
          why: "The 5′ UTR lies downstream of the transcription start (transcribed into the mRNA); the mutation here sits upstream of transcription start in untranscribed regulatory DNA.",
        },
        {
          label: "E",
          text: "The polyadenylation signal",
          why: "AATAAA mutations cause early mRNA degradation — but the stem reports normal mRNA half-life and localizes the defect to the polymerase-binding region.",
        },
      ],
      reasoning:
        "Three clues converge: the location (AT-rich, upstream of transcription start, TATA-like), the experiment (polymerase + factors cannot bind), and the phenotype (transcription-level collapse with intact sequence downstream). That triplet is the promoter's signature — the element whose mutation produces the most dramatic transcriptional drop of any region on the page.",
    },
  },
  mnemonics: [
    {
      code: "“Proximity = Promoter; Flexibility = Enhancer”",
      meaning: "Promoters must sit precisely upstream (proximity is structural); enhancers work from any distance — close, far, or inside an intron (flexibility is functional).",
      memorizes: "The positional logic separating the two positive elements",
      whenToUse: "Definition-matching questions and schematic-annotation stems.",
      clinical: "Promoter mutation → dramatic ↓ transcription; enhancer variants → graded effects.",
    },
    {
      code: "“Activators Attach to enhAncers; Repressors Rest on silencers”",
      meaning: "The protein name tells you the element: activators increase at enhancers; repressors decrease at silencers.",
      memorizes: "The binding-pair logic of enhancers and silencers",
      whenToUse: "Any question naming the regulatory protein and asking for the DNA element (or vice versa).",
      clinical: "Both act only on the same chromosome — cis-constrained expression modulation.",
    },
    {
      code: "“Methylation Mutes, Histone Hushes, ncRNA Nudges — all inherited, none inscribed”",
      meaning: "The three epigenetic mechanisms; “none inscribed” = the DNA sequence itself never changes.",
      memorizes: "Epigenetic mechanism list + the sequence-intact clause",
      whenToUse: "Epigenetics questions and imprinting/tumor-suppressor silencing contexts.",
      clinical: "Heritable through mitosis (and meiosis — the imprinting diseases prove it).",
    },
  ],
  rapidReview: {
    s30: [
      "Promoter = RNA pol II + transcription factors bind AT-rich upstream TATA/CAAT → ↑ initiation.",
      "Promoter mutation → dramatic ↓ in gene transcription.",
      "Enhancer = activators bind → ↑ expression, same chromosome, any distance (even in an intron).",
      "Silencer = repressors bind → ↓ expression.",
      "Epigenetics = heritable expression change without DNA sequence change.",
    ],
    m3: [
      "Epigenetic mechanisms: DNA methylation, histone modification, noncoding RNA.",
      "Introns begin GT and end AG; exons carry the coding information.",
      "5′ UTR = transcription start to AUG; ORF = AUG to stop; AATAAA sits in the 3′ UTR.",
      "TATA and CAAT boxes differ between eukaryotes and prokaryotes.",
      "Enhancers/silencers regulate on the same chromosome.",
    ],
    m10: [
      "Promoter = docking (structural); enhancer = modulation (flexible) — magnitude of mutation effect follows.",
      "DNA looping explains enhancer distance-independence.",
      "AATAAA (DNA) → AAUAAA (mRNA) = polyadenylation signal; its mutation → early degradation.",
      "UTRs are transcribed AND retained in mature mRNA but never translated.",
      "Imprinting disorders are the clinical proof that methylation is heritable through meiosis.",
      "RNA pol II opens DNA at the promoter site (from the RNA-processing page).",
    ],
  },
  recall: [
    {
      q: "What binds a promoter, and what promoter sequences does First Aid name?",
      a: "RNA polymerase II and multiple other transcription factors bind DNA upstream of the gene locus at AT-rich sequences — TATA and CAAT boxes (which differ between eukaryotes and prokaryotes).",
    },
    {
      q: "What is the consequence of a promoter mutation?",
      a: "Commonly a dramatic decrease in the level of gene transcription (promoters increase initiation of transcription).",
    },
    {
      q: "Where can enhancers and silencers be located relative to their target gene?",
      a: "Close to, far from, or even within (in an intron) the gene whose expression they regulate.",
    },
    {
      q: "Define epigenetics and list its primary mechanisms.",
      a: "Heritable (mitotically/meiotically) changes in gene expression without a change in the underlying DNA sequence; DNA methylation, histone modification, and noncoding RNA.",
    },
    {
      q: "Which sequences mark intron boundaries, and in what molecule does AATAAA appear?",
      a: "Introns typically begin with GT and end with AG; AATAAA is the polyadenylation signal on the DNA coding strand (AAUAAA in the mRNA).",
    },
    {
      q: "Name the regions a eukaryotic transcript contains from 5′ to 3′.",
      a: "5′ cap → 5′ UTR → coding region (exons; starts AUG, ends stop) → 3′ UTR with AAUAAA → poly-A tail.",
    },
    {
      q: "What separates an enhancer from a silencer?",
      a: "The protein and the direction: activators bind enhancers (↑ expression); repressors bind silencers (↓ expression) — both on the same chromosome.",
    },
  ],
  related: [
    {
      title: "The Lac Operon",
      note: "The prokaryotic solution to the same problem — CAP site, promoter, and operator are the bacterial counterpart of this anatomy.",
      topicId: "lac-operon",
    },
    {
      title: "RNA Processing & Splicing",
      note: "The next station of the pipeline — what happens to the transcript this page's anatomy produces.",
      topicId: "rna-processing",
    },
    {
      title: "Chromatin Organization",
      note: "The physical substrate of epigenetics — nucleosomes, histone tails, and the methylation/acetylation switch that makes promoters accessible.",
      topicId: "chromatin-organization",
    },
    {
      title: "Translation & Protein Processing",
      note: "The mature mRNA's destination — AUG/Kozak initiation and the ribosome cycle that reads the open reading frame.",
      topicId: "translation-protein-synthesis",
    },
  ],
  crossLinks: [
    {
      subject: "Genetics",
      connection: "Promoter and enhancer mutations are classic variants in expression phenotypes; imprinting diseases are epigenetic inheritance in action.",
    },
    {
      subject: "Pathology",
      connection: "Tumor-suppressor silencing by promoter hypermethylation is a canonical cancer mechanism.",
    },
    {
      subject: "Biochemistry — molecular",
      connection: "RNA polymerase II (which binds this promoter) is defined on the RNA-processing page along with α-amanitin sensitivity.",
    },
    {
      subject: "Pharmacology",
      connection: "Histone deacetylase inhibitors and demethylating agents (azacitidine, decitabine) act on the epigenetic layer defined here.",
    },
  ],
};
