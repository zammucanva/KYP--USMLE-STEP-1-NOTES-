import type { KypUsMLENote } from "../types";

// Biochemistry — Molecular (M1).
// Source: First Aid 2026, Part 1 pdf 60 / book 38 (Mutations in DNA)

export const dnaMutations: KypUsMLENote = {
  id: "dna-mutations",
  title: "Mutations in DNA",
  subtitle: "One DNA letter changes and the protein may not notice, may misfold by one amino acid, may stop mid-sentence, or may lose the entire reading frame — the severity ladder and its disease examples.",
  subject: "Biochemistry",
  system: "Section II · High-Yield General Principles — Molecular",
  pilotCategory: "Molecular biology — mutation vocabulary",
  difficulty: 2,
  readTime: 9,
  sourceRef: "First Aid 2026, Part 1 pp. 38 (mutations in DNA)",
  tags: [
    "silent mutation",
    "missense mutation",
    "nonsense mutation",
    "frameshift",
    "splice site",
    "anticipation",
    "transition",
    "transversion",
  ],
  core: {
    what: "Mutations are heritable changes in DNA sequence. Point (single-nucleotide) mutations are silent (same amino acid), missense (changed amino acid — sickle cell: glutamic acid → valine), or nonsense (early stop codon: UGA, UAA, UAG). Frameshift mutations insert or delete nucleotides not divisible by 3, misreading everything downstream. Splice-site mutations retain introns, and slipped-strand mispairing expands repeats across generations — anticipation.",
    why: "The exam uses this vocabulary in every genetics question: a stem describes a protein or disease, and the answer is a mutation class. The degree-of-change ladder — silent << missense < nonsense < frameshift — is the fastest scoring heuristic on the page.",
    keyIdea: "Severity tracks how much of the protein survives: silent changes nothing, missense swaps one amino acid, nonsense truncates at a premature stop, frameshift corrupts every codon downstream. Single-nucleotide substitutions are repaired by DNA polymerase and DNA ligase; the rest of the vocabulary describes what happens when repair loses.",
  },
  mechanisms: [
    {
      id: "point-mutation-consequences",
      title: "Point mutation — three outcomes, one codon",
      context: "A single nucleotide is substituted (transition or transversion)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A single nucleotide is substituted",
            sublabel: "Transition (purine↔purine or pyrimidine↔pyrimidine, eg A→G, C→T) or transversion (purine↔pyrimidine, eg A→T, C→G).",
            variant: "input",
          },
          {
            id: "s1",
            label: "Silent: synonymous codon — same amino acid",
            sublabel: "Molecular — Often at the 3rd codon position, where tRNA wobble tolerates the change. Glutamic acid stays glutamic acid.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Missense: one amino acid swapped",
            sublabel: "Molecular — Conservative if the new amino acid is chemically similar. Sickle cell: glutamic acid → valine.",
            variant: "process",
          },
          {
            id: "s3",
            label: "Nonsense: premature stop codon (UGA, UAA, UAG)",
            sublabel: "Molecular — Usually a nonfunctional, truncated protein.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Degree of change: silent << missense < nonsense < frameshift",
            sublabel: "Effect: The farther down the ladder, the more protein is disrupted.",
            variant: "output",
          },
          {
            id: "o2",
            label: "“Stop the nonsense!”",
            sublabel: "Clinical: Nonsense = premature stop = truncated, usually nonfunctional protein.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "wobble-silent" },
          { from: "trigger", to: "s2", label: "one base changed" },
          { from: "trigger", to: "s3", label: "stop codon created" },
          { from: "s1", to: "o1" },
          { from: "s2", to: "o1" },
          { from: "s3", to: "o1" },
          { from: "s3", to: "o2" },
        ],
        caption:
          "One substituted nucleotide lands on one of three rungs: same amino acid (silent), one wrong amino acid (missense — sickle cell), or a premature stop (nonsense — truncated protein).",
      },
    },
    {
      id: "frameshift-anticipation",
      title: "Frameshift and slipped-strand mispairing — from indel to anticipation",
      context: "Insertions/deletions and repeat expansion",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Nucleotides are inserted or deleted",
            sublabel: "Any number not divisible by 3 — or divisible by 3 but split across adjacent codons.",
            variant: "input",
          },
          {
            id: "s1",
            label: "The reading frame shifts downstream",
            sublabel: "Molecular — All nucleotides downstream are misread; the protein may be shorter or longer with disrupted or altered function.",
            variant: "process",
          },
          {
            id: "s2",
            label: "At repeats, polymerase can slip",
            sublabel: "Molecular — Slipped-strand mispairing: DNA polymerase inserts or removes nucleotides by mistake in repetitive regions.",
            variant: "process",
          },
          {
            id: "s3",
            label: "Repeats expand across generations",
            sublabel: "Pathway — Insertion of increased repeats in successive generations = anticipation. Example: CAG repeat expansion in Huntington disease.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Frameshift disease examples",
            sublabel: "Clinical: Duchenne muscular dystrophy, Tay-Sachs disease.",
            variant: "output",
          },
          {
            id: "o2",
            label: "Earlier onset, generation by generation",
            sublabel: "Clinical: Anticipation is the clinical footprint of repeat expansion.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "frame shifted" },
          { from: "s2", to: "s3", label: "repeat copy-number error" },
          { from: "s3", to: "o2", label: "expansion accumulates" },
          { from: "s1", to: "o1" },
          { from: "s2", to: "trigger", label: "slippage creates the indel" },
        ],
        caption:
          "A frame not divisible by three garbles everything downstream (DMD, Tay-Sachs); in repetitive tracts the same slippage machinery expands repeats generation over generation — the mechanism of anticipation (Huntington CAG).",
      },
    },
  ],
  blocks: [
    {
      kind: "text",
      title: "Read the ladder before the details",
      body: [
        "Degree of change: silent << missense < nonsense < frameshift. That ordering is the page's thesis and the exam's favorite comparison. A silent mutation leaves the amino acid unchanged (often a 3rd-position change absorbed by tRNA wobble); a missense mutation changes one amino acid (conservative if the chemistry is similar); a nonsense mutation creates an early stop codon (UGA, UAA, UAG) and usually a nonfunctional truncated protein; a frameshift corrupts the entire downstream reading frame.",
        "Anchor the ladder with the source's own example row: the coding sequence GAG (mRNA GAG → glutamic acid) becomes GAA in a silent mutation (still Glu), GTG in a missense mutation (GUG → valine — the sickle cell substitution), and TAG in a nonsense mutation (UAG → stop). The visual below reproduces exactly this teaching row with the frameshift columns added.",
        "Also worth the first read: single-nucleotide substitutions are repaired by DNA polymerase and DNA ligase. That one line ties this page back to the repair pathways and explains why point mutations are common but often corrected before they become heritable.",
      ],
    },
    {
      kind: "visual",
      visualId: "mutation-types-panel",
      title: "The mutation table — one codon, six outcomes",
      caption:
        "Wild-type coding DNA GAG → mRNA GAG → Glu, compared column by column: silent (GAA, still Glu — 3rd-position wobble), missense (GTG → GUG → Val), nonsense (TAG → UAG → Stop), frameshift insertion (an inserted T shifts the downstream frame → GAU → Asp) and frameshift deletion (a deleted G lets the next base slide in → GAC → Asp), with the altered-amino-acids bracket, the transition/transversion definitions, and the degree-of-change ladder.",
      notice:
        "Track the highlighted bases: silent changes only the 3rd position; missense the 2nd; nonsense turns the codon into a stop. In the frameshift columns the highlight is structural — a base inserted or deleted — and every codon after it is misread, which is why frameshift outranks nonsense on the severity ladder.",
    },
    {
      kind: "table",
      title: "Mutation types with their classic disease examples",
      intro: "Each row is one exam question: mutation class, what happens to the product, and the disease First Aid names.",
      columns: ["Mutation type", "What happens", "Protein consequence", "Named examples"],
      rows: [
        [
          "Silent",
          "Codes for the same (synonymous) amino acid — often 3rd codon position (tRNA wobble)",
          "None — amino acid unchanged",
          "—",
        ],
        [
          "Missense",
          "Results in a changed amino acid (conservative if chemically similar)",
          "One residue swapped; function may alter",
          "Sickle cell disease (glutamic acid → valine)",
        ],
        [
          "Nonsense",
          "Results in an early stop codon (UGA, UAA, UAG)",
          "Truncated, usually nonfunctional protein — “stop the nonsense!”",
          "—",
        ],
        [
          "Frameshift (insertion/deletion)",
          "Insertion/deletion of nucleotides not divisible by 3 (or divisible by 3 split across adjacent codons)",
          "All downstream nucleotides misread — protein shorter or longer, function disrupted or altered",
          "Duchenne muscular dystrophy, Tay-Sachs disease",
        ],
        [
          "Splice site",
          "Retained intron in mRNA",
          "Protein with impaired or altered function",
          "Rare cancers, dementia, epilepsy; some β-thalassemias, Gaucher disease, Marfan syndrome",
        ],
        [
          "Slipped-strand mispairing",
          "DNA polymerase slips in repetitive regions, inserting/removing nucleotides; repeats can expand across generations (anticipation)",
          "Repeat expansion disorders — earlier/worse disease each generation",
          "Huntington disease (CAG repeat expansion)",
        ],
      ],
      caption:
        "Frameshift severity has a mechanism: 'not divisible by 3' is what shifts the reading frame; a 3-base deletion split across adjacent codons also shifts it.",
    },
    {
      kind: "list",
      title: "Transition vs transversion — the substitution taxonomy",
      intro: "Before a substitution becomes silent, missense, or nonsense, it is first either a transition or a transversion.",
      items: [
        {
          lead: "Transition",
          text: "Purine → purine or pyrimidine → pyrimidine — the ring class stays the same. Examples: A → G, C → T.",
        },
        {
          lead: "Transversion",
          text: "Purine → pyrimidine or pyrimidine → purine — the ring class switches. Examples: A → T, C → G.",
        },
        {
          lead: "Memory shape",
          text: "TRANSITION = the base stays in its lane (same lane, new letter). TRANSVERSION = the base crosses over (ring switches class).",
        },
      ],
    },
    {
      kind: "text",
      title: "Splice-site mutations — the intron that stayed",
      body: [
        "A splice-site mutation damages the signals that mark intron boundaries, so an intron is retained in the mature mRNA. The ribosome then translates intronic sequence as if it were coding sequence, producing a protein with impaired or altered function — a garbled stretch rather than a truncation.",
        "First Aid's example list is worth memorizing because it spans systems: rare causes of cancers, dementia, and epilepsy, plus some types of β-thalassemia, Gaucher disease, and Marfan syndrome. In an exam stem, 'an extra segment of mRNA is translated' or 'retained intron' is the fingerprint of a splice-site mutation.",
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title: "How the exam asks this page",
      body: "Watch for three phrasings: (1) 'a single nucleotide change results in the same amino acid' → silent (wobble). (2) 'Glu6Val in the β-globin gene' → missense — the sickle cell signature. (3) 'a premature stop codon' → nonsense — “stop the nonsense!” When the stem gives a deletion or insertion count, check divisibility by 3 first; if it is not divisible (or splits across adjacent codons), the answer is frameshift with everything downstream misread.",
    },
    {
      kind: "callout",
      variant: "why",
      title: "Why slipped-strand mispairing produces anticipation",
      body: "Repetitive tracts are hard to copy: the template and the new strand can misalign, and polymerase slips — inserting or removing extra repeat units. When that error happens in a parent's germline and the child inherits a longer tract, the next copy round slips even more. Repeats lengthen generation over generation, and disease onset creeps earlier: anticipation, exemplified by CAG expansion in Huntington disease.",
    },
  ],
  clinical: [
    {
      kind: "text",
      title: "Sickle cell disease — the missense prototype",
      body: [
        "Sickle cell disease is First Aid's named missense example: substitution of glutamic acid with valine in β-globin. One nucleotide, one amino acid, one conformational cascade — valine's hydrophobic side chain lets deoxygenated hemoglobin polymerize, distorting erythrocytes into the sickle shape.",
        "The molecular detail to carry: the DNA change is GAG → GTG (mRNA GAG → GUG), so Glu → Val. When a stem offers codon-level data, transcribe the DNA to mRNA, read the amino acid, and classify the change — the mutation-type question is usually one codon of work.",
      ],
    },
    {
      kind: "text",
      title: "Duchenne muscular dystrophy and Tay-Sachs — frameshift examples",
      body: [
        "First Aid names Duchenne muscular dystrophy and Tay-Sachs disease as frameshift examples: a deletion or insertion not divisible by 3 shifts the reading frame, and every codon downstream is misread. The protein may come out shorter or longer, with disrupted or altered function — for dystrophin, a frame-shifted gene yields a nonfunctional protein and progressive muscle disease.",
        "These two diseases also anchor a classic comparison: Becker muscular dystrophy arises from in-frame deletions (divisible by 3, partial function retained) versus Duchenne's out-of-frame collapse — the divisibility rule playing out as clinical severity.",
      ],
    },
    {
      kind: "text",
      title: "Huntington disease — anticipation from CAG expansion",
      body: [
        "Slipped-strand mispairing in a CAG repeat tract expands the repeat across generations; anticipation occurs secondary to insertion of increased repeats, and the example is CAG repeat expansion in Huntington disease. Children of affected parents can inherit longer tracts, presenting earlier and more severely.",
        "The exam phrasing is usually a three-generation pedigree: grandparent mildly affected late, parent earlier, child earliest and worst. That staircase is anticipation, and the mechanism to choose is repeat expansion through slipped-strand mispairing.",
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A molecular vignette: a single nucleotide change in a gene leaves the encoded amino acid unchanged.",
        discriminator: "Synonymous codon — often 3rd position (tRNA wobble)",
        concept: "Silent mutation",
        answer: "Silent mutation — same (synonymous) amino acid",
      },
      {
        stem: "A child with vaso-occlusive pain crises has hemoglobin in which glutamic acid is replaced by valine at position 6 of β-globin.",
        discriminator: "GAG → GTG (GUG → Val) — one amino acid swapped",
        concept: "Missense mutation",
        answer: "Missense mutation — the sickle cell substitution",
      },
      {
        stem: "A gene sequencing question describes a mutation that creates the codon UAG partway through a coding sequence; the protein is truncated and nonfunctional.",
        discriminator: "A premature stop codon (UGA, UAA, UAG)",
        concept: "Nonsense mutation",
        answer: "Nonsense mutation — “stop the nonsense!”",
      },
      {
        stem: "A boy with progressive proximal muscle weakness has a deletion of 4 nucleotides in the dystrophin gene; all codons downstream of the deletion are misread.",
        discriminator: "Deletion not divisible by 3 → downstream reading frame shifted",
        concept: "Frameshift mutation",
        answer: "Frameshift deletion — Duchenne muscular dystrophy pattern",
      },
      {
        stem: "A three-generation family shows progressively earlier onset of a neurodegenerative disease; the expanded tract lengthens between generations.",
        discriminator: "Repeat expansion across generations = anticipation",
        concept: "Slipped-strand mispairing in repetitive regions",
        answer: "CAG repeat expansion in Huntington disease — anticipation",
      },
    ],
    traps: [
      {
        a: "Silent mutation",
        b: "Missense mutation",
        whyConfused: "Both are single-nucleotide substitutions; both keep the reading frame.",
        keyDifference: "Silent codes the SAME (synonymous) amino acid — often 3rd-position wobble; missense CHANGES the amino acid (conservative if chemically similar).",
        clue: "Translate the codon first: same amino acid → silent; new amino acid → missense.",
      },
      {
        a: "Nonsense mutation",
        b: "Frameshift mutation",
        whyConfused: "Both usually destroy protein function; both can shorten the protein.",
        keyDifference: "Nonsense substitutes ONE base to create a premature stop; frameshift inserts/deletes nucleotides not divisible by 3, misreading everything downstream.",
        clue: "Substitution → nonsense. Insertion/deletion (not divisible by 3) → frameshift.",
      },
      {
        a: "Frameshift mutation",
        b: "Splice-site mutation",
        whyConfused: "Both garble downstream sequence; both appear in β-thalassemia-type stems.",
        keyDifference: "Frameshift changes the reading frame of the CODING sequence; splice-site retains an INTRON in the mRNA — the extra translated material is non-coding DNA that never left.",
        clue: "'Retained intron' → splice site. 'Insertion/deletion' → frameshift.",
      },
      {
        a: "Transition",
        b: "Transversion",
        whyConfused: "Both describe single-nucleotide substitutions; the words differ by prefix.",
        keyDifference: "Transition stays within a base class (purine→purine, pyrimidine→pyrimidine; A→G, C→T); transversion switches classes (A→T, C→G).",
        clue: "TRANSITION = same lane; TRANSversion = crossing over to the other class.",
      },
    ],
    pivots: [
      {
        lookAlike: "A stem saying 'protein is shorter than normal' with either a stop codon or a deletion",
        differentiator: "Was a base substituted (nonsense stop) or inserted/deleted (frameshift misreading)?",
        correctPath: "Substitution creating UGA/UAA/UAG → nonsense. Indel not divisible by 3 → frameshift.",
      },
      {
        lookAlike: "β-thalassemia caused by different mutation types",
        differentiator: "Retained intron (splice-site) versus frame disruption (frameshift) versus one altered amino acid (missense)",
        correctPath: "Read what happened to the mRNA: an intron that stayed → splice site; a shifted frame → frameshift.",
      },
    ],
    miniCase: {
      vignette:
        "A 6-year-old boy of West African descent is brought for evaluation of recurrent painful swelling of the hands and feet. His blood smear shows sickled erythrocytes. Hemoglobin electrophoresis confirms hemoglobin S. At the molecular level, sequencing of the β-globin gene shows a single nucleotide substitution in which the codon GAG is changed to GTG, and the β-globin protein has valine in place of glutamic acid at the affected position.",
      question: "Which type of mutation is responsible for this patient's disease?",
      options: [
        {
          label: "A",
          correct: true,
          text: "Missense mutation",
          why: "Correct. One nucleotide substitution (GAG → GTG) changed one amino acid (glutamic acid → valine) — the definition of missense, and the classic sickle cell change.",
        },
        {
          label: "B",
          text: "Silent mutation",
          why: "Tempting because the codon changed at all — but a silent mutation codes for the SAME amino acid (often 3rd-position wobble). Here the amino acid changed.",
        },
        {
          label: "C",
          text: "Nonsense mutation",
          why: "Close — it is also a single-base substitution — but nonsense creates an early stop codon (UGA/UAA/UAG) and a truncated protein. Valine was substituted, not stopped.",
        },
        {
          label: "D",
          text: "Frameshift mutation",
          why: "No nucleotide was inserted or deleted — the codon length is unchanged, so the downstream reading frame is intact. Frameshift is the DMD/Tay-Sachs pattern.",
        },
        {
          label: "E",
          text: "Splice-site mutation",
          why: "Splice-site mutations retain an intron in the mRNA — this vignette describes a clean single-codon substitution with one altered residue.",
        },
      ],
      reasoning:
        "Two facts classify the mutation: exactly one nucleotide was substituted (not inserted or deleted), and the amino acid changed (Glu → Val). Substitution + altered residue = missense — the sickle cell prototype.",
    },
  },
  mnemonics: [
    {
      code: "“Stop the nonsense!”",
      meaning: "Nonsense mutations create an early STOP codon (UGA, UAA, UAG) — usually a nonfunctional, truncated protein.",
      memorizes: "The nonsense mutation definition and the three stop codons",
      whenToUse: "Any question where a premature stop codon appears in the stem.",
      clinical: "Stop codons: UGA, UAA, UAG — 'U Are Gone,' 'U Are Away,' 'U Are Gone-too' — pick whichever sticks with you; the nonsense rule is what matters.",
    },
    {
      code: "“Silent << Missense < Nonsense < Frameshift”",
      meaning: "The severity ladder — same amino acid, one wrong amino acid, protein cut short, whole downstream frame garbled.",
      memorizes: "Degree-of-change ordering of the four main mutation types",
      whenToUse: "'Which mutation causes the greatest disruption' questions and severity comparisons.",
      clinical: "Frameshift examples: Duchenne muscular dystrophy, Tay-Sachs; missense example: sickle cell.",
    },
    {
      code: "“TRANSition stays in lane, TRANSversion trades across”",
      meaning: "Transition: purine↔purine or pyrimidine↔pyrimidine (A→G, C→T). Transversion: purine↔pyrimidine (A→T, C→G).",
      memorizes: "The two substitution classes",
      whenToUse: "Any question naming a specific base change (A→G? transition. A→T? transversion).",
      clinical: "Transitions are the more common spontaneous substitutions (deamination-driven); the exam just asks you to classify.",
    },
  ],
  rapidReview: {
    s30: [
      "Degree of change: silent << missense < nonsense < frameshift.",
      "Silent = same (synonymous) amino acid, often 3rd position (tRNA wobble).",
      "Missense = changed amino acid — sickle cell: glutamic acid → valine (GAG → GTG).",
      "Nonsense = early stop codon (UGA, UAA, UAG) — “stop the nonsense!”",
      "Frameshift = insertion/deletion not divisible by 3 → everything downstream misread.",
    ],
    m3: [
      "Frameshift examples: Duchenne muscular dystrophy, Tay-Sachs disease.",
      "Splice-site = retained intron in mRNA — β-thalassemia, Gaucher, Marfan, rare cancers/dementia/epilepsy.",
      "Slipped-strand mispairing at repetitive nucleotides → repeat insertion across generations → anticipation (Huntington CAG).",
      "Transition: A→G, C→T (same class). Transversion: A→T, C→G (class switch).",
      "Single-nucleotide substitutions are repaired by DNA polymerase and DNA ligase.",
      "Missense is 'conservative' when the new amino acid has a similar chemical structure.",
    ],
    m10: [
      "Full mutation table with all named examples: silent (—), missense (sickle), nonsense (—), frameshift (DMD, Tay-Sachs), splice site (β-thal, Gaucher, Marfan, rare cancers/dementia/epilepsy), slipped strand (Huntington).",
      "Codon-level worked example: GAG (Glu) → GAA (Glu, silent) / GTG (Val, missense) / TAG (UAG stop, nonsense); insertion of T or deletion of G shifts the frame → GAU/GAC (Asp) with downstream misreading.",
      "'Divisible by 3' caveat: an indel divisible by 3 still frameshifts if split across adjacent codons.",
      "Anticipation mechanism chain: repeat tract → slipped-strand mispairing → insertion of increased repeats across generations → earlier onset.",
      "Severity reasoning: how much protein survives intact — full (silent), nearly full (missense), truncated (nonsense), garbled downstream (frameshift).",
    ],
  },
  recall: [
    {
      q: "Rank the four main mutation types by degree of change.",
      a: "Silent << missense < nonsense < frameshift.",
    },
    {
      q: "What defines a silent mutation at the codon level?",
      a: "It codes for the same (synonymous) amino acid — often a 3rd-position change absorbed by tRNA wobble.",
    },
    {
      q: "Which mutation and substitution cause sickle cell disease?",
      a: "Missense — glutamic acid replaced by valine (GAG → GTG; GUG → Val).",
    },
    {
      q: "Name the three stop codons.",
      a: "UGA, UAA, UAG — “stop the nonsense.”",
    },
    {
      q: "When does an insertion/deletion cause a frameshift?",
      a: "When the number of nucleotides is not divisible by 3 — or is divisible by 3 but split across adjacent codons.",
    },
    {
      q: "What is a splice-site mutation's molecular consequence?",
      a: "A retained intron in the mRNA → protein with impaired or altered function (eg, β-thalassemia, Gaucher, Marfan).",
    },
    {
      q: "What mechanism produces anticipation, and the named example?",
      a: "Slipped-strand mispairing inserting increased repeats across generations — CAG expansion in Huntington disease.",
    },
  ],
  related: [
    {
      title: "DNA Repair Pathways",
      note: "Single-nucleotide substitutions are repaired by DNA polymerase and DNA ligase — the repair page explains which errors escape to become this page's vocabulary.",
      topicId: "dna-repair",
    },
    {
      title: "DNA Replication",
      note: "Slipped-strand mispairing is a polymerase error at repetitive regions — replication mechanics explain why repeats are inherently unstable.",
      topicId: "dna-replication",
    },
    {
      title: "Chromatin Organization",
      note: "Dysregulated DNA methylation is implicated in fragile X syndrome — an epigenetic silencing cousin of the sequence mutations catalogued here.",
      topicId: "chromatin-organization",
    },
    {
      title: "Hemoglobinopathies (sickle cell)",
      note: "The Glu6Val missense change reappears in hematology with vaso-occlusive crises, sickled smear findings, and hydroxyurea therapy.",
    },
  ],
  crossLinks: [
    {
      subject: "Hematology",
      connection: "Sickle cell disease — the named missense example — carries the full clinical phenotype of hemoglobin S.",
    },
    {
      subject: "Neurology",
      connection: "Huntington disease CAG expansion is the anticipation prototype, and splice-site mutations appear among rare dementias and epilepsies.",
    },
    {
      subject: "Genetics",
      connection: "Trinucleotide repeat disorders and anticipation are genetics-page staples built on this page's slipped-strand mechanism.",
    },
    {
      subject: "Musculoskeletal",
      connection: "Duchenne muscular dystrophy is the frameshift example — dystrophin loss and progressive muscle disease.",
    },
  ],
};
