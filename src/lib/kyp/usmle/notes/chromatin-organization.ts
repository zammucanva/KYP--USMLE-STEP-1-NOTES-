import type { KypUsMLENote } from "../types";

// Biochemistry — Molecular (M1).
// Source: First Aid 2026, Part 1 pdf 54 / book 32 (Chromatin structure)

export const chromatinOrganization: KypUsMLENote = {
  id: "chromatin-organization",
  title: "Chromatin Organization",
  subtitle: "Two meters of DNA packed into a six-micron nucleus by histones — and a reversible chemical switch layer (methylation, acetylation) that decides which parts of the genome are allowed to speak.",
  subject: "Biochemistry",
  system: "Section II · High-Yield General Principles — Molecular",
  pilotCategory: "Molecular biology — chromatin & epigenetics",
  difficulty: 2,
  readTime: 10,
  sourceRef: "First Aid 2026, Part 1 pp. 32 (chromatin structure)",
  tags: [
    "nucleosome",
    "histone octamer",
    "heterochromatin",
    "euchromatin",
    "histone acetylation",
    "DNA methylation",
    "Barr body",
  ],
  core: {
    what: "DNA is stored as chromatin: the double helix loops twice around a histone octamer (H2A, H2B, H3, H4 — ×2) to form a nucleosome, H1 binds the nucleosome and linker DNA to stabilize the fiber, and the chain coils into supercoiled structure and finally the metaphase chromosome. Condensed heterochromatin is dark on EM and transcriptionally silent; loose euchromatin is light and active. On top sits the epigenetic switch layer: DNA methylation (CpG promoters → repression) and histone acetylation (relaxed, active) vs deacetylation (tight, inactive).",
    why: "This page is the base layer every later genetics topic leans on — X-inactivation and Barr bodies, imprinting, fragile X, Huntington gene-expression changes. The exam asks EM dark/light patterns, which modification activates vs silences, and the methylation-disease links.",
    keyIdea: "Structure decides access: condensed (heterochromatin, deacetylated, methylated) is sterically inaccessible and transcriptionally inactive; relaxed (euchromatin, acetylated) is accessible and active. The chemistry shorthand — DNA methylation and histone deacetylation make DNA mute; histone acetylation makes DNA active — is the whole switch layer in one line.",
  },
  mechanisms: [
    {
      id: "acetylation-switch",
      title: "The acetylation switch — loosen to transcribe",
      context: "Histone acetylation vs deacetylation",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A gene region needs to be transcribed — or silenced",
            sublabel: "The chromatin state, not the sequence, decides access.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Histone acetylation removes the histone's ⊕ charge",
            sublabel: "Molecular — Acetylating lysines neutralizes the positive charge that was gripping the ⊝ DNA phosphate backbone.",
            variant: "process",
          },
          {
            id: "s2",
            label: "DNA coils relax",
            sublabel: "Molecular — Without the charge grip, the nucleosome packing loosens into euchromatin.",
            variant: "process",
          },
          {
            id: "s3",
            label: "Transcription rises",
            sublabel: "Pathway — Sterically accessible DNA is transcriptionally active. Thyroid hormone synthesis is altered by acetylation of the thyroid hormone receptor.",
            variant: "output",
          },
          {
            id: "d1",
            label: "Histone deacetylation: acetyl groups removed → tightened coiling",
            sublabel: "Molecular — The ⊕ charge returns, DNA coils tightly into heterochromatin.",
            variant: "target",
          },
          {
            id: "d2",
            label: "Transcription falls",
            sublabel: "Effect: ↓ transcription — histone deacetylation may be responsible for altered gene expression in Huntington disease.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "acetylation" },
          { from: "s1", to: "s2", label: "charge neutralized" },
          { from: "s2", to: "s3", label: "accessible → active" },
          { from: "d1", to: "d2", label: "tightened → silent" },
          { from: "s3", to: "d1", type: "inhibit", label: "acetylation opposes deacetylation" },
        ],
        caption:
          "One charge, two states: acetylation neutralizes histone ⊕ charge → relaxed DNA → transcription ON; deacetylation restores the grip → tight coiling → OFF. “Histone acetylation makes DNA active; deacetylation deactivates.”",
      },
    },
    {
      id: "methylation-silencing",
      title: "DNA methylation — the reversible gene silencer",
      context: "CpG islands, imprinting, lyonization",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A DNA segment must be silenced without changing its sequence",
            sublabel: "Reversible change of expression, not of information.",
            variant: "input",
          },
          {
            id: "s1",
            label: "DNA methylation within the gene promoter (CpG islands)",
            sublabel: "Molecular — Cytosines in CpG dinucleotides of the promoter are methylated.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Gene transcription is repressed (silenced)",
            sublabel: "Pathway — Promoter methylation typically silences the gene: “CpG methylation makes DNA mute.”",
            variant: "process",
          },
          {
            id: "o1",
            label: "Imprinting: DNA is methylated in imprinting",
            sublabel: "Effect: Parent-of-origin-specific expression — the base of imprinting disorders.",
            variant: "output",
          },
          {
            id: "o2",
            label: "X-inactivation (lyonization) and transposable-element repression",
            sublabel: "Effect: Methylation also participates in lyonization and aging/carcinogenesis programs.",
            variant: "output",
          },
          {
            id: "o3",
            label: "Dysregulated methylation → fragile X syndrome",
            sublabel: "Clinical: When the methylation machinery misfires at the FMR1 locus, the disease follows.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "methyltransferase" },
          { from: "s1", to: "s2", label: "promoter silenced" },
          { from: "s2", to: "o1", label: "parent-of-origin marks" },
          { from: "s2", to: "o2", label: "genome defense & lyonization" },
          { from: "s2", to: "o3", label: "misregulation → disease" },
        ],
        caption:
          "Methylation changes a DNA segment's expression without changing its sequence — which is why it runs imprinting, lyonization, transposable-element repression, and (when dysregulated) fragile X.",
      },
    },
  ],
  blocks: [
    {
      kind: "text",
      title: "The nucleosome — the first level of packing",
      body: [
        "DNA exists in the condensed, chromatin form to fit into the nucleus. The unit of that packing is the nucleosome: DNA loops twice around a histone octamer — “beads on a string,” with the octamer as the bead and the linker DNA as the string. H1 binds to the nucleosome and to linker DNA, stabilizing the chromatin fiber.",
        "The chemistry of the grip is worth one sentence: DNA carries a ⊝ charge from its phosphate groups, and histones are large proteins with a ⊕ charge from their lysine and arginine residues. Opposite charges grip; neutralize the histone charge (acetylation) and the grip relaxes — that single electrostatic fact is the mechanism behind the entire acetylation switch.",
        "Two timing and location facts complete the anatomy: DNA and histone synthesis occur together during S phase, and mitochondria have their own DNA, which is circular and does not bind histones.",
      ],
    },
    {
      kind: "visual",
      visualId: "chromatin-packing-hierarchy",
      title: "From double helix to metaphase chromosome",
      caption:
        "The condensation series left to right: DNA double helix (⊝ charge from phosphate groups) → nucleosome beads on a string (octamer H2A, H2B, H3, H4 ×2; DNA loops twice; H1 on the linker DNA) → supercoiled structure → euchromatin (acetylated, active) vs heterochromatin (deacetylated, condensed) → metaphase chromosome, with the S-phase synthesis and mitochondrial-DNA chips.",
      notice:
        "Watch what happens to access as you move right: each step coils the DNA tighter, and transcription follows the packing — the loose left side is where transcription happens, the condensed right side is heterochromatin and metaphase. The H1 histone sits on the linker between beads; the octamer is the bead itself.",
    },
    {
      kind: "compare",
      title: "Heterochromatin vs euchromatin — the EM pattern and what it means",
      intro: "One chromosome, two functional states. The EM appearance is the exam's visual fingerprint; the accessibility logic explains everything else in the table.",
      columns: ["Heterochromatin", "Euchromatin"],
      rows: [
        {
          label: "Condensation",
          a: "Highly condensed — “hidden chromatin”",
          b: "Less condensed",
        },
        {
          label: "EM appearance",
          a: "Darker (dense rim against the nuclear envelope)",
          b: "Lighter (pale, central)",
        },
        {
          label: "Steric access",
          a: "Sterically inaccessible",
          b: "Sterically accessible",
        },
        {
          label: "Transcription",
          a: "Transcriptionally inactive",
          b: "Transcriptionally active — “Eu = true, truly transcribed”",
        },
        {
          label: "Chemical tone",
          a: "↑ methylation, ↓ acetylation (deacetylated)",
          b: "Acetylated histones",
        },
        {
          label: "Visible landmark",
          a: "Barr bodies (inactive X chromosomes) may be visible on the periphery of the nucleus",
          b: "—",
        },
      ],
    },
    {
      kind: "visual",
      visualId: "heterochromatin-euchromatin-em",
      title: "The electron-microscopy pattern",
      caption:
        "An original KYP schematic of the diagnostic EM pattern: a nucleus with dense heterochromatin (H) rimming the nuclear envelope and clumping at the periphery — including a Barr body, the inactive X — pale euchromatin (E) centrally, and the dense nucleolus (Nu), with legend cards carrying the contrast table.",
      notice:
        "Carry the spatial pattern, not the picture: DARK at the rim (heterochromatin — condensed, silent) and LIGHT in the center (euchromatin — active). If a question hands you an EM with a dark peripheral rim, that is heterochromatin; a Barr body on that rim is a silenced X chromosome.",
    },
    {
      kind: "table",
      title: "The epigenetic switches — four modifications, four outcomes",
      intro: "The modification table with the memory hooks First Aid supplies. Read the last column aloud twice — it is pure pattern matching on exam day.",
      columns: ["Modification", "Effect on transcription", "Memory hook", "Disease / role link"],
      rows: [
        [
          "DNA methylation (CpG islands in promoters)",
          "Typically represses (silences) transcription",
          "“CpG methylation makes DNA mute”",
          "Imprinting (DNA is methylated in imprinting) · X-inactivation (lyonization) · dysregulated in fragile X syndrome",
        ],
        [
          "DNA methylation (genome-wide)",
          "Reversible expression change without sequence change",
          "“Mute”",
          "Aging, carcinogenesis, epigenetics, transposable-element repression",
        ],
        [
          "Histone methylation",
          "Usually reversible transcriptional suppression — but can activate depending on methyl-group location",
          "“Histone methylation mostly makes DNA mute”",
          "Lysine and arginine residues of histones can be methylated",
        ],
        [
          "Histone acetylation",
          "↑ transcription (relaxed coiling)",
          "“Histone acetylation makes DNA active”",
          "Thyroid hormone synthesis is altered by acetylation of the thyroid hormone receptor",
        ],
        [
          "Histone deacetylation",
          "↓ transcription (tightened coiling)",
          "“Deacetylation deactivates DNA”",
          "May be responsible for altered gene expression in Huntington disease",
        ],
      ],
      caption:
        "The four one-liners: CpG methylation = mute; histone methylation = (mostly) mute; histone acetylation = active; deacetylation = deactivate.",
    },
    {
      kind: "list",
      title: "Roles of DNA methylation — where silencing is the whole point",
      intro: "DNA methylation reversibly changes the expression of a DNA segment without changing its sequence. First Aid lists its arenas explicitly.",
      items: [
        {
          lead: "Imprinting",
          text: "DNA is methylated in imprinting — the parent-of-origin marking system that keeps one allele of certain genes silent.",
        },
        {
          lead: "X-inactivation (lyonization)",
          text: "The inactive X is condensed into a Barr body on the nuclear periphery — a methylation-heterochromatin collaboration.",
        },
        {
          lead: "Genome defense & aging",
          text: "Transposable-element repression, aging, and carcinogenesis all involve methylation programs.",
        },
        {
          lead: "Fragile X syndrome",
          text: "Dysregulated DNA methylation is implicated in fragile X syndrome — the disease lock for this modification.",
        },
      ],
    },
    {
      kind: "callout",
      variant: "memory",
      title: "The mute/active quartet",
      body: "“CpG methylation makes DNA mute. Histone methylation mostly makes DNA mute. Histone acetylation makes DNA active. Histone deacetylation deactivates DNA.” Four sentences, every epigenetics question on this page. The only caveat: histone methylation can activate depending on the location of the methyl groups — the word 'usually' is doing real work there.",
    },
  ],
  clinical: [
    {
      kind: "text",
      title: "Fragile X syndrome — the methylation disease lock",
      body: [
        "Dysregulated DNA methylation is implicated in fragile X syndrome. The silencing machinery that normally runs imprinting and lyonization misfires at the FMR1 locus: hypermethylation of the promoter's CpG islands mutes a gene whose sequence is intact — the disease is in the switch layer, not the spelling.",
        "Exam shape: a question about a silenced gene with an unchanged coding sequence, or a molecular vignette showing promoter CpG hypermethylation with loss of transcription. The mechanism to pick is methylation-dependent repression — 'CpG methylation makes DNA mute.'",
      ],
    },
    {
      kind: "text",
      title: "Huntington disease and the thyroid receptor — the acetylation pair",
      body: [
        "Histone deacetylation may be responsible for altered gene expression in Huntington disease: tight, deacetylated chromatin silences genes whose expression the striatum needs. It is the page's disease lock for the deacetylation arm of the switch.",
        "On the activation side, thyroid hormone synthesis is altered by acetylation of the thyroid hormone receptor — a reminder that acetylation is not just decoration; it is a regulatory input on a hormone axis. Expect it as a one-step 'which modification increases receptor activity' question.",
      ],
    },
    {
      kind: "text",
      title: "Barr bodies — the visible heterochromatin landmark",
      body: [
        "Barr bodies are inactive X chromosomes that may be visible on the periphery of the nucleus — heterochromatin you can actually see. Each Barr body represents one X that has been lyonized (condensed, methylated, silenced).",
        "The clinical arithmetic: cells have one Barr body fewer than the number of X chromosomes (XX = 1 Barr body; X0 = none; XXY = 1; XXX = 2). The peripheral location is not an accident — it is the dense heterochromatin rim you saw in the EM pattern.",
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "An electron micrograph question shows a nucleus with a dense chromatin rim at the nuclear envelope and pale chromatin centrally.",
        discriminator: "Dark periphery vs light center = heterochromatin vs euchromatin",
        concept: "Chromatin states on EM",
        answer: "Dense peripheral heterochromatin (transcriptionally inactive) around pale central euchromatin (active)",
      },
      {
        stem: "A molecular vignette: a gene's promoter CpG islands are hypermethylated; transcription of a sequence-normal gene is lost.",
        discriminator: "Expression changed without changing the DNA sequence",
        concept: "DNA methylation represses promoter transcription",
        answer: "“CpG methylation makes DNA mute” — methylation-dependent silencing (the fragile X lock)",
      },
      {
        stem: "A question asks which histone modification most directly increases transcription of a locus.",
        discriminator: "Charge neutralization → relaxed coiling",
        concept: "Histone acetylation removes ⊕ charge → relaxed DNA → ↑ transcription",
        answer: "Histone acetylation — “makes DNA active”",
      },
      {
        stem: "A vignette describes a neurodegenerative disease with altered striatal gene expression linked to tightened chromatin.",
        discriminator: "Tightened coiling = deacetylation",
        concept: "Histone deacetylation ↓ transcription",
        answer: "Histone deacetylation may be responsible for altered gene expression in Huntington disease",
      },
      {
        stem: "A buccal smear from a phenotypically normal person shows one dark dense body at the nuclear periphery.",
        discriminator: "Inactive X = Barr body = heterochromatin on the rim",
        concept: "X-inactivation (lyonization)",
        answer: "Barr body — inactive X chromosome on the nuclear periphery",
      },
    ],
    traps: [
      {
        a: "DNA methylation",
        b: "Histone acetylation",
        whyConfused: "Both are epigenetic modifications; both appear in the same option lists.",
        keyDifference: "Promoter (CpG) methylation represses transcription — “mute”; histone acetylation activates transcription — “active.” Opposite effects on the same output.",
        clue: "If the stem wants silence without a sequence change → methylation. If it wants increased transcription → acetylation.",
      },
      {
        a: "Histone methylation",
        b: "DNA methylation",
        whyConfused: "Same word, different target molecule.",
        keyDifference: "DNA methylation hits cytosines in CpG islands (promoter → usually silenced); histone methylation hits lysine/arginine residues on histone tails — usually suppression but can activate depending on location.",
        clue: "Ask what is methylated: a base in the DNA (CpG) vs an amino acid on a histone tail.",
      },
      {
        a: "Heterochromatin",
        b: "Euchromatin",
        whyConfused: "Both describe the same genome's DNA in different states; the names are near-anagrams.",
        keyDifference: "Heterochromatin = highly condensed (hidden), dark on EM, inaccessible, inactive. Euchromatin = less condensed, light, accessible, truly transcribed.",
        clue: "“Eu = true — truly transcribed”; “heterochromatin = hidden.”",
      },
    ],
    pivots: [
      {
        lookAlike: "An epigenetics question offering methylation, acetylation, and deacetylation on the same gene",
        differentiator: "Read the direction of the expression change first (silent vs active), then pick the modification",
        correctPath: "Silenced/repressed → CpG methylation or deacetylation (or histone methylation); activated/relaxed → histone acetylation.",
      },
      {
        lookAlike: "EM-pattern questions with dark rims vs dark central bodies",
        differentiator: "A dense rim on the nuclear envelope = heterochromatin; a single dense round body centrally = nucleolus",
        correctPath: "Rim → heterochromatin (± Barr bodies); central dense sphere → nucleolus; pale everything-else → euchromatin.",
      },
    ],
    miniCase: {
      vignette:
        "Researchers studying an inherited intellectual disability syndrome analyze the FMR1 gene in an affected boy. Gene sequencing shows the coding sequence is intact. Methylation-specific PCR, however, demonstrates marked hypermethylation of CpG-rich regions within the gene's promoter, and mRNA analysis shows the gene's transcription is virtually absent. The changes are present without any alteration of the DNA base sequence of the coding region.",
      question: "Which mechanism most directly accounts for the loss of transcription in this patient's FMR1 gene?",
      options: [
        {
          label: "A",
          correct: true,
          text: "Methylation within the gene promoter, typically repressing transcription",
          why: "Correct. Methylation of CpG islands in the promoter typically represses (silences) gene transcription — “CpG methylation makes DNA mute” — and dysregulated DNA methylation is implicated in fragile X syndrome.",
        },
        {
          label: "B",
          text: "Histone acetylation at the locus",
          why: "Tempting because it is the other famous epigenetic mark — but acetylation removes histone ⊕ charge, relaxes coiling, and INCREASES transcription. It would oppose, not cause, the silencing.",
        },
        {
          label: "C",
          text: "Transition mutation in the coding sequence",
          why: "A transition (purine→purine or pyrimidine→pyrimidine) would change the DNA sequence — the vignette explicitly states the sequence is intact.",
        },
        {
          label: "D",
          text: "Conversion of the region into euchromatin",
          why: "Euchromatin is the accessible, transcriptionally ACTIVE state — converting silenced chromatin to euchromatin would restore transcription, not abolish it.",
        },
        {
          label: "E",
          text: "Loss of the H1 linker histone",
          why: "H1 stabilizes the nucleosome and linker DNA; its loss would loosen packing — and loosening is the direction of MORE access, not silencing.",
        },
      ],
      reasoning:
        "Three facts triangulate the answer: the sequence is unchanged (not a mutation), transcription is lost (silencing), and the promoter's CpG islands are hypermethylated (the mark). Sequence-intact + silenced + methylated promoter = methylation-dependent repression — the fragile X mechanism.",
    },
  },
  mnemonics: [
    {
      code: "“CpG methylation makes DNA mute; histone acetylation makes DNA active”",
      meaning: "Promoter CpG methylation → repression (silent). Histone acetylation → removed ⊕ charge → relaxed coiling → ↑ transcription.",
      memorizes: "The direction of the two most-tested epigenetic switches",
      whenToUse: "Any 'which modification increases/decreases transcription' question.",
      clinical: "Dysregulated methylation → fragile X; acetylation of the thyroid hormone receptor alters thyroid hormone synthesis.",
    },
    {
      code: "“Eu = true — truly transcribed; heterochromatin = hidden”",
      meaning: "Euchromatin is the truly transcribed (active, light, accessible) state; heterochromatin is hidden (condensed, dark, inactive).",
      memorizes: "The heterochromatin vs euchromatin contrast set",
      whenToUse: "EM-pattern questions and any chromatin-state attribute list.",
      clinical: "Barr bodies (inactive X) sit on the nuclear periphery as visible heterochromatin.",
    },
    {
      code: "“Histone methylation mostly makes DNA mute; deacetylation deactivates”",
      meaning: "Histone methylation usually suppresses transcription (but can activate depending on methyl-group location); histone deacetylation tightens coiling and decreases transcription.",
      memorizes: "The two suppression-side modifications and the one caveat",
      whenToUse: "Questions pairing histone modifications with transcription outcomes.",
      clinical: "Histone deacetylation may be responsible for altered gene expression in Huntington disease.",
    },
  ],
  rapidReview: {
    s30: [
      "Nucleosome = DNA loops twice around histone octamer (H2A, H2B, H3, H4 ×2) — “beads on a string.”",
      "H1 binds the nucleosome + linker DNA, stabilizing the fiber.",
      "DNA ⊝ (phosphates); histones ⊕ (lysine, arginine).",
      "Heterochromatin: condensed, dark on EM, inaccessible, inactive (↑ methylation, ↓ acetylation).",
      "Euchromatin: less condensed, light, accessible, active — “Eu = true, truly transcribed.”",
    ],
    m3: [
      "DNA + histone synthesis occurs in S phase; mtDNA is circular and does not bind histones.",
      "DNA methylation: reversible expression change without sequence change; CpG promoter methylation typically represses transcription.",
      "Methylation arenas: aging, carcinogenesis, epigenetics, imprinting, transposable-element repression, X-inactivation.",
      "Dysregulated methylation → fragile X syndrome; DNA is methylated in imprinting.",
      "Histone methylation: usually suppression, can activate by location; lysine/arginine residues are the targets.",
      "Histone acetylation ↑ transcription (thyroid hormone receptor); deacetylation ↓ transcription (Huntington disease).",
    ],
    m10: [
      "Packing hierarchy: double helix → nucleosome (H1 on linker) → supercoiled structure → heterochromatin/euchromatin → metaphase chromosome.",
      "Full switch table: CpG methylation = mute; histone methylation = mostly mute (location caveat); acetylation = active; deacetylation = deactivate.",
      "EM pattern: dense heterochromatin rim at the nuclear envelope (± Barr bodies = inactive X) with pale central euchromatin and a dense nucleolus.",
      "Methylation disease locks: fragile X (dysregulated methylation); imprinting disorders (DNA is methylated in imprinting); lyonization.",
      "Charge logic: acetylation removes histone ⊕ charge → relaxed DNA → transcription; deacetylation restores charge → tightened coiling → silence.",
      "Barr-body arithmetic: number of inactive X bodies = X chromosomes − 1, visible on the nuclear periphery.",
    ],
  },
  recall: [
    {
      q: "Which histones form the nucleosome octamer, and what does H1 do?",
      a: "Octamer = (H2A, H2B, H3, H4) × 2; H1 binds the nucleosome and linker DNA, stabilizing the chromatin fiber.",
    },
    {
      q: "Why are histones positively charged?",
      a: "They are rich in lysine and arginine residues — ⊕ charged, gripping the ⊝ phosphate backbone of DNA.",
    },
    {
      q: "How do heterochromatin and euchromatin differ on EM and functionally?",
      a: "Heterochromatin: condensed, darker, sterically inaccessible, transcriptionally inactive. Euchromatin: less condensed, lighter, accessible, active.",
    },
    {
      q: "What does methylation of a gene promoter's CpG islands do?",
      a: "Typically represses (silences) transcription — “CpG methylation makes DNA mute.”",
    },
    {
      q: "Which disease is linked to dysregulated DNA methylation, and which to histone deacetylation?",
      a: "Fragile X syndrome (methylation); Huntington disease (altered gene expression via deacetylation).",
    },
    {
      q: "How does histone acetylation increase transcription?",
      a: "Removal of the histone's ⊕ charge → relaxed DNA coiling → sterically accessible, transcriptionally active chromatin.",
    },
    {
      q: "What are Barr bodies and where are they seen?",
      a: "Inactive X chromosomes, visible on the periphery of the nucleus (condensed heterochromatin).",
    },
    {
      q: "Which DNA in the cell does NOT bind histones?",
      a: "Mitochondrial DNA — circular, histone-free.",
    },
  ],
  related: [
    {
      title: "DNA Replication",
      note: "DNA and histone synthesis occur together in S phase — the nucleosomes that package each new strand are assembled as the fork advances.",
      topicId: "dna-replication",
    },
    {
      title: "Mutations in DNA",
      note: "Sequence mutations change the spelling; epigenetic switches change the volume — fragile X sits at the junction, a normal sequence muted by methylation.",
      topicId: "dna-mutations",
    },
    {
      title: "Imprinting disorders",
      note: "“DNA is methylated in imprinting” — Prader-Willi/Angelman-style parent-of-origin silencing is this page's methylation logic applied to single loci.",
    },
    {
      title: "X-inactivation and lyonization",
      note: "Barr bodies are the visible product of lyonization — the methylation-heterochromatin collaboration that equalizes X dosage.",
    },
  ],
  crossLinks: [
    {
      subject: "Genetics",
      connection: "Imprinting, lyonization, and fragile X are genetics-page staples whose molecular mechanism is this page's methylation machinery.",
    },
    {
      subject: "Neurology",
      connection: "Histone deacetylation may underlie the altered gene expression of Huntington disease.",
    },
    {
      subject: "Endocrine",
      connection: "Thyroid hormone synthesis is altered by acetylation of the thyroid hormone receptor — epigenetics on a hormone axis.",
    },
    {
      subject: "Pathology",
      connection: "Carcinogenesis and aging both involve dysregulated methylation programs — epigenetic drift as a disease mechanism.",
    },
  ],
};
