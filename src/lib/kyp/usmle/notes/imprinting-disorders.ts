import type { KypUsMLENote } from "../types";

// Biochemistry — Genetics I (G1).
// Source: First Aid 2026, Part 1 pdf 78 / book 56 (Disorders of imprinting;
// Prader-Willi syndrome; Angelman syndrome)

export const imprintingDisorders: KypUsMLENote = {
  id: "imprinting-disorders",
  title: "Disorders of Imprinting",
  subtitle:
    "One gene copy silenced by methylation, only the other expressed — so Prader-Willi and Angelman are the same chromosome 15 read in opposite directions: lose the paternal copy and the child is hypotonic then hyperphagic; lose the maternal UBE3A and the child 'HAILS the Angels.'",
  subject: "Biochemistry",
  system: "Section II · High-Yield General Principles — Genetics",
  pilotCategory: "Genetics — parent-of-origin inheritance logic",
  difficulty: 3,
  readTime: 9,
  sourceRef:
    "First Aid 2026, Part 1 pp. 56 (disorders of imprinting; Prader-Willi syndrome; Angelman syndrome)",
  tags: [
    "imprinting",
    "methylation",
    "Prader-Willi syndrome",
    "Angelman syndrome",
    "UBE3A",
    "chromosome 15",
    "parent-of-origin",
    "uniparental disomy",
    "gene silencing",
    "hyperphagia",
    "HAILS the Angels",
    "POP",
    "MAMAS",
  ],
  core: {
    what: "In imprinting, one gene copy is silenced by methylation, and only the other copy is expressed — producing parent-of-origin effects, because the expressed copy may be mutated, may not be expressed, or may be deleted altogether. Prader-Willi syndrome: maternally derived genes are silenced (except UBE3A), and disease occurs when the paternal allele is deleted or mutated — hyperphagia, obesity, intellectual disability, hypogonadism, hypotonia; chromosome 15 of paternal origin; 25% of cases are due to maternal uniparental disomy. Angelman syndrome: paternally derived UBE3A is silenced, and disease occurs when the maternal allele is deleted or mutated — Hand-flapping, Ataxia, severe Intellectual disability, inappropriate Laughter, Seizures; UBE3A on the maternal copy of chromosome 15; 5% of cases are due to paternal uniparental disomy.",
    why: "This is the exam's most reliable parent-of-origin machine: one figure (the chromosome-15 silencing map) generates both syndromes, their opposite deletion directions, and the uniparental-disomy percentages. Every stem — 'obesity and hyperphagia,' 'frequent laughter and ataxia,' 'which parent's allele was deleted' — resolves through the same silenced-vs-active logic.",
    keyIdea: "Two questions answer everything: (1) which parent's copy is SILENCED at this locus, and (2) which parent's copy was DELETED or mutated. If the deleted copy was the only active one — the other being methylated silent — the locus has NO functional copy, and the syndrome follows the silenced parent's identity: silenced maternal (except UBE3A) + paternal deletion = Prader-Willi; silenced paternal UBE3A + maternal deletion = Angelman. POP = Prader-Willi, Obesity/overeating, Paternal allele deleted · MAMAS = Maternal allele deleted, Angelman, Mood, Ataxia, Seizures.",
  },
  mechanisms: [
    {
      id: "imprinting-parent-of-origin",
      title: "Imprinting — methylation silences one parent's copy",
      context: "The parent-of-origin layer beneath both syndromes",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "One gene copy is silenced by methylation, and only the other copy is expressed",
            sublabel: "Molecular — the definition of imprinting, in the source's own words.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Chromosome 15: maternally derived genes are silenced (except UBE3A)",
            sublabel: "Molecular — on the Prader-Willi side of the map, the paternal copy is the expressed one.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Paternally derived UBE3A is silenced",
            sublabel: "Molecular — at the UBE3A locus, the maternal copy is the only expressed one.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Each locus depends on exactly one parent's copy — parent-of-origin effects",
            sublabel: "Output — imprinting makes us functionally haploid at these loci.",
            variant: "output",
          },
          {
            id: "x1",
            label: "The expressed copy may be mutated, may not be expressed, or may be deleted",
            sublabel: "Clinical — the three failure modes of the single active copy.",
            variant: "inhibit",
          },
          {
            id: "x2",
            label: "Deletion of the only active copy → no functional gene product at that locus",
            sublabel: "Clinical — the disease mechanism, whether by deletion, mutation, or uniparental disomy.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1" },
          { from: "trigger", to: "s2" },
          { from: "s1", to: "o1", label: "paternal copy expressed" },
          { from: "s2", to: "o1", label: "maternal UBE3A expressed" },
          { from: "x1", to: "o1", type: "inhibit", label: "active copy fails" },
          { from: "x2", to: "o1", type: "inhibit", label: "locus goes silent" },
        ],
        caption:
          "Imprinting = methylation silences one parent's copy per locus. Chromosome 15 silences maternally derived genes (except UBE3A) on the PWS map, and paternally derived UBE3A on the AS map. Because only one copy is active, a single deletion of that active copy — or a UPD that supplies two silenced copies — removes all function at the locus.",
      },
    },
    {
      id: "pws-vs-as-logic",
      title: "PWS vs AS — which deletion, which syndrome",
      context: "Applying the silencing map to a chromosome-15 deletion",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A chromosome-15 deletion (or mutation, or uniparental disomy) is identified in an affected child",
            sublabel: "Input — the same karyotype finding can produce either syndrome.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Paternal allele deleted/mutated at a locus where maternal genes are already silenced (except UBE3A)",
            sublabel: "Molecular — the only active copy at those loci is gone.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Prader-Willi syndrome — hyperphagia, obesity, intellectual disability, hypogonadism, hypotonia",
            sublabel: "Output — chromosome 15 of paternal origin; 25% of cases are due to maternal uniparental disomy.",
            variant: "output",
          },
          {
            id: "s2",
            label: "Maternal allele deleted/mutated at UBE3A, where the paternal UBE3A is already silenced",
            sublabel: "Molecular — no active UBE3A remains anywhere in the child.",
            variant: "process",
          },
          {
            id: "o2",
            label: "Angelman syndrome — Hand-flapping, Ataxia, severe Intellectual disability, inappropriate Laughter, Seizures",
            sublabel: "Output — UBE3A on the maternal copy of chromosome 15; 5% of cases are due to paternal uniparental disomy.",
            variant: "output",
          },
          {
            id: "x1",
            label: "Maternal UPD: two maternal copies, both silenced → same net effect as a paternal deletion",
            sublabel: "Clinical — 25% of PWS; two silent copies equal zero expression.",
            variant: "inhibit",
          },
          {
            id: "x2",
            label: "Paternal UPD: two paternal copies of silenced UBE3A → same net effect as a maternal deletion",
            sublabel: "Clinical — 5% of AS; the percentages themselves are testable.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1" },
          { from: "trigger", to: "s2" },
          { from: "s1", to: "o1", label: "POP: Paternal deleted → Prader-Willi" },
          { from: "s2", to: "o2", label: "MAMAS: Maternal deleted → Angelman" },
          { from: "x1", to: "o1", type: "inhibit", label: "25% of PWS" },
          { from: "x2", to: "o2", type: "inhibit", label: "5% of AS" },
        ],
        caption:
          "One deletion direction, one syndrome: paternal allele lost (or maternal UPD) → Prader-Willi; maternal UBE3A lost (or paternal UPD) → Angelman. The UPD branches matter because they are the exam's 'normal deletion screen but still affected' pathway — and the percentages (25% PWS, 5% AS) come straight from the source.",
      },
    },
  ],
  blocks: [
    {
      kind: "text",
      title: "One copy silent — why imprinting makes us haploid at some loci",
      body: [
        "Imprinting is methylation with a memory of which parent it came from: one gene copy is silenced by methylation, and only the other copy is expressed. The consequence is asymmetry — at an imprinted locus, a person is functionally haploid, running on a single active copy. That fragility is the whole disease mechanism: what a deletion does at an imprinted locus depends entirely on WHICH parent's copy it removes, because only one parent's copy was working in the first place.",
        "The source states the failure modes plainly: the expressed copy may be mutated, may not be expressed, or may be deleted altogether. Any of the three — mutation, epigenetic silencing of the wrong copy, or deletion — zeroes out the locus. Chromosome 15 is where this logic becomes two named syndromes, and the figure below is the map for both.",
      ],
    },
    {
      kind: "visual",
      visualId: "imprinting-chromosome15",
      title: "Chromosome 15 — the silencing map and its two failures",
      caption:
        "The source's imprinting figure rebuilt: paternal (P) and maternal (M) chromosome columns; a Normal group where each locus expresses exactly one parent's copy (green active gene, grey methylation-silenced gene); a Prader-Willi group where the paternal allele is deleted/mutated (red slash) while the maternal copy at that locus is silenced — no active copy left, with the note that maternally derived genes are silenced (except UBE3A) and disease occurs when the paternal allele is deleted or mutated; an Angelman group where the maternal UBE3A is deleted while the paternal UBE3A is silenced — the paternally derived UBE3A is silenced, and disease occurs when the maternal allele is deleted or mutated; the legend (P = Paternal, M = Maternal, active gene, silenced gene (imprinting), gene deletion/mutation); and the two mnemonic lines — POP and MAMAS.",
      notice:
        "Read the figure as three questions: which copy is GREEN (active) in the Normal row? Which copy gets the red deletion symbol in the disease row? Is any green copy left? PWS = paternal deletion with maternal already silenced; AS = maternal UBE3A deletion with paternal UBE3A already silenced. In both, the answer to the third question is no.",
    },
    {
      kind: "text",
      title: "Prader-Willi syndrome — the paternal deletion",
      body: [
        "In Prader-Willi syndrome, maternally derived genes are silenced (except UBE3A), and disease occurs when the paternal allele is deleted or mutated. The clinical picture is one of the most recognizable in pediatrics: hyperphagia, obesity, intellectual disability, hypogonadism, hypotonia. The classic arc the exam uses: a floppy, poorly feeding hypotonic neonate who, in early childhood, develops unrelenting hyperphagia and obesity. The genetics line is equally testable — chromosome 15 of paternal origin, with 25% of cases due to maternal uniparental disomy.",
        "The mnemonic is POP: Prader-Willi, Obesity/overeating, Paternal allele deleted. It compresses the entire figure row into one word-triple, and — unlike most mnemonics — it is directionally complete: the syndrome, its signature finding, and the deleted parent.",
      ],
    },
    {
      kind: "text",
      title: "Angelman syndrome — the maternal UBE3A deletion",
      body: [
        "Angelman syndrome inverts every arrow: paternally derived UBE3A is silenced, and disease occurs when the maternal allele is deleted or mutated. UBE3A sits on the maternal copy of chromosome 15, and without it the picture is Hand-flapping, Ataxia, severe Intellectual disability, inappropriate Laughter, and Seizures — the source's HAILS the Angels mnemonic ('the Angelman child HAILS the Angels': Hand-flapping, Ataxia, severe Intellectual disability, inappropriate Laughter, Seizures). Puppet-like movements and the frequent bursts of laughter make these children memorable in vignettes.",
        "The uniparental-disomy share is smaller than PWS's — 5% of cases are due to paternal uniparental disomy — but the mechanism is identical in shape: two copies of the chromosome, both carrying silenced UBE3A, so no active copy exists. The companion mnemonic is MAMAS: Maternal allele deleted, Angelman, Mood, Ataxia, Seizures.",
      ],
    },
    {
      kind: "steps",
      title: "How uniparental disomy produces either syndrome — the derivation",
      intro: "The UPD pathway, in four steps, works the same way in both directions.",
      steps: [
        {
          label: "Start from the silencing map",
          detail: "At the disease loci, exactly one parent's copy is active: paternal (maternal silenced, except UBE3A) for PWS; maternal UBE3A (paternal UBE3A silenced) for AS.",
        },
        {
          label: "A meiotic error gives the child two copies from ONE parent",
          detail: "Uniparental disomy: 2 copies of a chromosome from 1 parent and no copies from the other — heterodIsomy (meiosis I error) or isodIsomy (meiosis II error or postzygotic duplication + loss).",
        },
        {
          label: "Both copies carry the same imprint",
          detail: "Two maternal copies → the PWS loci are both methylated-silent; two paternal copies → UBE3A is silenced on both. UPD imitates deletion because two silenced copies equal zero expression.",
        },
        {
          label: "The syndrome follows the silenced parent, not the missing one",
          detail: "Maternal UPD → Prader-Willi (25% of cases); paternal UPD → Angelman (5% of cases). The child is euploid — a normal count with an abnormal imprint is the exam's UPD tell.",
        },
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title: "How the exam asks this page",
      body: "Four recurring shapes: (1) the PWS vignette — neonatal hypotonia and poor feeding, then hyperphagia with obesity, intellectual disability, hypogonadism → paternal allele deleted (POP); (2) the AS vignette — hand-flapping, ataxic gait, severe intellectual disability, inappropriate laughter, seizures → maternal UBE3A deleted (MAMAS / HAILS); (3) the direction question — 'a deletion on chromosome 15: which parent's allele, and which syndrome?'; (4) the mechanism question — 'normal karyotype/deletion testing but the phenotype is present' or 'which mechanism accounts for 25% of PWS / 5% of AS' → uniparental disomy (two silenced copies).",
    },
    {
      kind: "callout",
      variant: "why",
      title: "Why silencing plus deletion beats either alone",
      body: "A heterozygous deletion at an ORDINARY locus leaves one working copy — a silent carrier. At an IMPRINTED locus, the 'other copy' was already methylated into silence before the deletion ever happened, so the deletion removes the last functional copy in one hit. That is why imprinting disorders behave like dominant diseases off a single event, why parent-of-origin decides the phenotype, and why uniparental disomy — which changes nothing about sequence — can produce the identical phenotype by changing which parent's imprint the cell reads twice.",
    },
  ],
  clinical: [
    {
      kind: "text",
      title: "The two faces of the same chromosome",
      body: [
        "Prader-Willi announces itself twice. In the nursery: hypotonia and poor feeding — a floppy neonate who struggles to feed, often with a weak cry. In early childhood: the switch to hyperphagia and obesity, plus intellectual disability and hypogonadism (cryptorchidism, delayed puberty). Management of the hyperphagia — strict environmental food control — and of the behavioral and endocrine consequences is the clinical follow-through the vignette presumes.",
        "Angelman syndrome carries the neurologic package: seizures with their EEG signature, ataxic 'puppet-like' movements with hand-flapping, severe intellectual disability with minimal speech, and the inappropriate laughter that stamps the vignette. Antiseizure management and developmental support anchor care; the genetics rest on UBE3A of the maternal copy of chromosome 15 — 5% of cases by paternal uniparental disomy.",
        "For both, methylation analysis of chromosome 15 is the diagnostic key that reads the imprint itself: it distinguishes deletion, uniparental disomy, and imprinting defects — the three ways the single active copy can be lost. The recurrence-risk counseling differs by mechanism, which is why the source's deletion/UPD percentages matter beyond the exam: they describe the real roads to the same destination.",
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 3-year-old boy is obese with an insatiable appetite, has mild intellectual disability, cryptorchidism, and a history of severe neonatal hypotonia and poor feeding.",
        discriminator: "Hyperphagia + hypogonadism + prior neonatal hypotonia",
        concept: "Prader-Willi syndrome",
        answer: "Deletion/mutation of the PATERNAL allele on chromosome 15 — maternally derived genes are silenced (except UBE3A); POP: Prader-Willi, Obesity/overeating, Paternal allele deleted",
      },
      {
        stem: "A 4-year-old girl has an ataxic gait, frequent hand-flapping movements, bursts of inappropriate laughter, severe intellectual disability with almost no speech, and a history of seizures.",
        discriminator: "Laughter + ataxia + seizures + severe intellectual disability",
        concept: "Angelman syndrome",
        answer: "Deletion/mutation of the MATERNAL UBE3A — paternally derived UBE3A is silenced; HAILS the Angels: Hand-flapping, Ataxia, severe Intellectual disability, inappropriate Laughter, Seizures",
      },
      {
        stem: "Methylation analysis of chromosome 15 shows absence of the paternal contribution; the child's phenotype is hyperphagia and obesity.",
        discriminator: "The UPD branch of the PWS figure",
        concept: "Uniparental disomy as a PWS mechanism",
        answer: "Maternal uniparental disomy — 25% of Prader-Willi cases; two maternal copies are both silenced at the PWS loci",
      },
      {
        stem: "The question provides the imprinting figure and asks which parental allele must be deleted to produce each syndrome.",
        discriminator: "Which copy is the only active one",
        concept: "Parent-of-origin deletion direction",
        answer: "Silenced-maternal loci: paternal deletion → Prader-Willi; silenced-paternal UBE3A: maternal deletion → Angelman. MAMAS — Maternal allele deleted, Angelman.",
      },
    ],
    traps: [
      {
        a: "Prader-Willi",
        b: "Angelman",
        whyConfused: "Same chromosome (15), same mechanism (imprinting), same figure.",
        keyDifference: "Opposite deletion directions and opposite pictures: PWS = PATERNAL allele lost → hyperphagia, obesity, hypogonadism, hypotonia (25% maternal UPD); AS = MATERNAL UBE3A lost → laughter, ataxia, seizures, hand-flapping, severe intellectual disability (5% paternal UPD).",
        clue: "POP (Prader-Willi, Obesity, Paternal deleted) vs MAMAS (Maternal deleted, Angelman) — pick by the finding, confirm by the parent.",
      },
      {
        a: "Imprinting (silenced copy)",
        b: "Deletion/mutation (lost copy)",
        whyConfused: "Both are 'the gene is not working.'",
        keyDifference: "Silencing is the EPIGENETIC baseline — methylation of one parent's copy, present in every normal person; the disease is the loss (deletion, mutation, or UPD) of the only ACTIVE copy. Silenced is normal; losing the active copy is the disease.",
        clue: "'Silenced by methylation' = mechanism of the map; 'deleted/mutated' = the disease event.",
      },
      {
        a: "Uniparental disomy",
        b: "Deletion",
        whyConfused: "Both produce absence of function at the imprinted locus and both syndromes.",
        keyDifference: "UPD is euploid — 2 copies of the chromosome from 1 parent, sequence intact, but both copies carry the same (silenced) imprint; a deletion removes DNA. UPD accounts for 25% of PWS and 5% of AS.",
        clue: "'Normal karyotype / no deletion detected' + imprinting phenotype → think UPD.",
      },
      {
        a: "UBE3A silenced (paternal)",
        b: "Maternal genes silenced (except UBE3A)",
        whyConfused: "Both silencing statements live on the same figure, one locus apart.",
        keyDifference: "The 'except UBE3A' clause is the hinge: maternal silencing covers the PWS loci but spares maternal UBE3A; the paternal UBE3A is separately silenced. So at UBE3A the active copy is maternal (its loss = AS), while at the PWS loci the active copy is paternal (its loss = PWS).",
        clue: "Locate the locus first (PWS loci vs UBE3A), then the parent, then the syndrome.",
      },
    ],
    pivots: [
      {
        lookAlike: "A 'chromosome 15 abnormality' stem offering PWS, AS, and mechanism choices",
        differentiator: "Which parent's allele is missing, and through which route",
        correctPath: "Find the active copy from the silencing map first; paternal loss (deletion, mutation, or maternal UPD) → Prader-Willi; maternal UBE3A loss (or paternal UPD) → Angelman.",
      },
      {
        lookAlike: "A developmental-delay vignette offering imprinting, trinucleotide repeat, and mitochondrial options",
        differentiator: "The company the findings keep",
        correctPath: "Obesity + hyperphagia + hypogonadism → imprinting (PWS); laughter + ataxia + seizures → imprinting (AS); anticipation with worsening generations → repeat expansion; maternal transmission to ALL children with variable severity → heteroplasmy (mtDNA).",
      },
    ],
    miniCase: {
      vignette:
        "A 4-year-old girl is brought to the pediatrician for global developmental delay. She has almost no expressive speech and functions at an 18-month level. Her gait is broad-based and ataxic, and she makes frequent jerky hand-flapping movements. Her parents report sudden bursts of laughter that seem unrelated to context, and at age 2 she had two generalized tonic-clonic seizures, now controlled on medication. She is NOT obese and has no history of feeding difficulty in the neonatal period. Genetic testing shows a deletion on chromosome 15 involving the copy inherited from her mother.",
      question: "Which of the following best explains the patient's presentation?",
      options: [
        {
          label: "A",
          correct: true,
          text: "Loss of the maternal UBE3A allele with the paternal UBE3A imprinted (silenced)",
          why: "Correct. Hand-flapping, Ataxia, severe Intellectual disability, inappropriate Laughter, Seizures — HAILS the Angels — plus a maternal chromosome-15 deletion. The paternally derived UBE3A is silenced, so deleting the maternal allele leaves NO active UBE3A: Angelman syndrome (MAMAS — Maternal allele deleted).",
        },
        {
          label: "B",
          text: "Loss of the paternal allele at loci where maternally derived genes are silenced",
          why: "That is the Prader-Willi mechanism — and the vignette argues against it twice: the child is not obese, had no neonatal hypotonia or poor feeding, and the deleted allele is the maternal one. PWS would present with hyperphagia, obesity, hypogonadism, hypotonia.",
        },
        {
          label: "C",
          text: "Expansion of a trinucleotide repeat with anticipation in successive generations",
          why: "Repeat expansions (Huntington, fragile X) cause developmental and movement disorders, but the defining imprinting geography — maternal deletion on chromosome 15 with a silenced paternal copy — and the laughter/ataxia/hand-flapping cluster point elsewhere; anticipation is not described.",
        },
        {
          label: "D",
          text: "Heteroplasmic mitochondrial DNA mutation inherited from the mother",
          why: "Maternal mtDNA transmission affects all children of a carrier mother with variable severity (heteroplasmy); but seizures-plus-ataxia in mtDNA disease typically comes with myopathy, lactic acidosis, or stroke-like episodes — and the chromosome-15 maternal deletion is the definitive discriminator.",
        },
        {
          label: "E",
          text: "Paternal uniparental disomy of chromosome 15",
          why: "Tempting because UPD DOES cause Angelman — but via TWO PATERNAL copies of the silenced UBE3A (5% of cases). The stem instead describes a straight deletion of the maternal allele, and the option's parent-of-origin is opposite to the deletion mechanism given.",
        },
      ],
      reasoning:
        "The answer path is two moves. First, the phenotype: hand-flapping + ataxia + severe intellectual disability + inappropriate laughter + seizures = HAILS the Angels = Angelman syndrome (the anti-PWS clues — no obesity, no neonatal feeding trouble — reinforce it). Second, the geography: the deletion is on the MATERNAL chromosome 15, and paternally derived UBE3A is silenced — so the maternal deletion removes the only active UBE3A. MAMAS confirms the direction: Maternal allele deleted, Angelman, Mood, Ataxia, Seizures.",
    },
  },
  mnemonics: [
    {
      code: "“POP: Prader-Willi · Obesity/overeating · Paternal allele deleted”",
      meaning: "The syndrome, its signature finding, and the deleted parent's allele — one word each.",
      memorizes: "The Prader-Willi deletion direction and headline phenotype",
      whenToUse: "Any PWS vignette or parent-of-origin question.",
      clinical: "Hyperphagia, obesity, intellectual disability, hypogonadism, hypotonia; chromosome 15 of paternal origin; 25% of cases are due to maternal uniparental disomy.",
    },
    {
      code: "“MAMAS: Maternal allele deleted · Angelman · Mood, Ataxia, Seizures”",
      meaning: "The mirrored triple for the opposite direction: maternal deletion → Angelman with the neuro picture.",
      memorizes: "The Angelman deletion direction and phenotype",
      whenToUse: "Any AS vignette or the 'which parent's allele' question.",
      clinical: "Paternally derived UBE3A is silenced; UBE3A on the maternal copy of chromosome 15; 5% of cases are due to paternal uniparental disomy.",
    },
    {
      code: "“The Angelman child HAILS the Angels: Hand-flapping · Ataxia · severe Intellectual disability · inappropriate Laughter · Seizures”",
      meaning: "The source's own five-finding cluster for Angelman syndrome, in HAILS order.",
      memorizes: "The Angelman phenotype",
      whenToUse: "Distinguishing an Angelman vignette from Prader-Willi or other developmental-delay causes.",
      clinical: "Puppet-like hand movements, ataxic gait, minimal speech development, context-inappropriate laughter, and epilepsy — the clinical package that makes AS vignettes recognizable.",
    },
  ],
  rapidReview: {
    s30: [
      "Imprinting: one gene copy is silenced by methylation, and only the other copy is expressed → parent-of-origin effects.",
      "The expressed copy may be mutated, may not be expressed, or may be deleted altogether.",
      "PWS: maternally derived genes are silenced (except UBE3A); disease occurs when the paternal allele is deleted or mutated.",
      "PWS findings: hyperphagia, obesity, intellectual disability, hypogonadism, hypotonia; chromosome 15 of paternal origin.",
      "AS: paternally derived UBE3A is silenced; disease occurs when the maternal allele is deleted or mutated.",
      "AS findings: Hand-flapping, Ataxia, severe Intellectual disability, inappropriate Laughter, Seizures; UBE3A on the maternal copy of chromosome 15.",
      "25% of PWS = maternal uniparental disomy; 5% of AS = paternal uniparental disomy.",
    ],
    m3: [
      "UPD imitates deletion: two copies of the chromosome from one parent, both carrying the same imprint — two silenced copies equal zero expression.",
      "The 'except UBE3A' clause: maternal silencing spares UBE3A, so at that locus the maternal copy is the active one.",
      "PWS neonatal presentation: hypotonia and poor feeding precede the childhood hyperphagia and obesity by years.",
      "AS speech is the severe end: minimal-to-absent expressive language despite the laughter.",
      "Methylation analysis reads the imprint itself — the test that separates deletion, UPD, and imprinting-defect mechanisms.",
      "The UPD percentages are themselves exam answers (25% PWS / 5% AS).",
    ],
    m10: [
      "Imprinted loci are functionally haploid — which is why ONE deletion event suffices where an ordinary locus would tolerate it.",
      "Uniparental disomy is euploid: normal chromosome COUNT with abnormal parental ORIGIN.",
      "PWS vs AS is a two-axis sort: deleted parent (P vs M) × locus (PWS loci vs UBE3A).",
      "The figure's Normal row shows the baseline: every person silences one parent's copy at these loci — silencing is physiology, losing the active copy is disease.",
      "Antiseizure therapy plus developmental support anchors Angelman management; strict food-access control anchors PWS management.",
      "Both POP and MAMAS are directionally complete mnemonics — syndrome, signature finding, and deleted parent in one line each.",
    ],
  },
  recall: [
    {
      q: "Define imprinting in the source's words.",
      a: "One gene copy is silenced by methylation, and only the other copy is expressed — producing parent-of-origin effects; the expressed copy may be mutated, may not be expressed, or may be deleted altogether.",
    },
    {
      q: "In Prader-Willi syndrome, which parent's genes are silenced, and which parent's allele must be deleted or mutated for disease?",
      a: "Maternally derived genes are silenced (except UBE3A); disease occurs when the paternal allele is deleted or mutated.",
    },
    {
      q: "List the five Prader-Willi findings.",
      a: "Hyperphagia, obesity, intellectual disability, hypogonadism, hypotonia (POP: Prader-Willi, Obesity/overeating, Paternal allele deleted).",
    },
    {
      q: "What is the role of UBE3A in Angelman syndrome?",
      a: "Paternally derived UBE3A is silenced; disease occurs when the maternal allele is deleted or mutated. UBE3A is on the maternal copy of chromosome 15.",
    },
    {
      q: "Spell out HAILS the Angels.",
      a: "Hand-flapping, Ataxia, severe Intellectual disability, inappropriate Laughter, Seizures — the Angelman phenotype.",
    },
    {
      q: "What share of each syndrome is caused by uniparental disomy, and which parent in each?",
      a: "25% of Prader-Willi cases are due to maternal uniparental disomy; 5% of Angelman cases are due to paternal uniparental disomy.",
    },
  ],
  related: [
    {
      title: "Genetic Terminology & Population Genetics",
      note: "The terms page that carries the PWS-vs-AS summary table and defines uniparental disomy (heterodIsomy/isodIsomy) used here.",
      topicId: "genetic-terms-popgen",
    },
    {
      title: "Gene Expression Modifications",
      note: "The same block's other regulation layer — transgenic strategies and RNA interference — sitting one page earlier in the source.",
      topicId: "gene-expression-modifications",
    },
    {
      title: "Chromatin Organization",
      note: "Methylation is the imprinting mark itself — this note shows how the mark is written and read at the chromatin level.",
      topicId: "chromatin-organization",
    },
    {
      title: "Mutations in DNA",
      note: "Deletion, mutation, and the failure modes of the single active copy — the DNA-level vocabulary underneath the imprinting map.",
      topicId: "dna-mutations",
    },
  ],
  crossLinks: [
    {
      subject: "Genetics — inheritance patterns",
      connection: "Imprinting is the parent-of-origin exception to straightforward dominant/recessive transmission at these loci.",
    },
    {
      subject: "Neurology",
      connection: "Angelman's seizures, ataxic gait, and severe intellectual disability are the neurologic face of UBE3A loss.",
    },
    {
      subject: "Endocrinology",
      connection: "Prader-Willi hypogonadism (cryptorchidism, delayed puberty) and the obesity of uncontrolled hyperphagia are endocrine testable findings.",
    },
  ],
};
