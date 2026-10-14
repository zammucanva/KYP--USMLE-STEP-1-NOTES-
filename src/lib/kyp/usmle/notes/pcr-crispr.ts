import type { KypUsMLENote } from "../types";

// Biochemistry — Laboratory Techniques (M4/L1).
// Source: First Aid 2026, Part 1 pdf 72–73 / book 50–51
// (Polymerase chain reaction; CRISPR/Cas9)

export const pcrCrispr: KypUsMLENote = {
  id: "pcr-crispr",
  title: "PCR & CRISPR/Cas9",
  subtitle:
    "Two molecular machines borrowed from nature: a thermal copier that turns one DNA fragment into a diagnostic library, and a bacterial immune system repurposed into scissors-plus-address-label genome editing with a knock-out/knock-in fork.",
  subject: "Biochemistry",
  system: "Section II · High-Yield General Principles — Laboratory Techniques",
  pilotCategory: "Laboratory techniques — nucleic acid amplification and genome editing",
  difficulty: 3,
  readTime: 12,
  sourceRef:
    "First Aid 2026, Part 1 pp. 50–51 (polymerase chain reaction; CRISPR/Cas9)",
  tags: [
    "PCR",
    "denaturation",
    "annealing",
    "elongation",
    "dNTP",
    "neonatal HIV",
    "herpes encephalitis",
    "CRISPR",
    "Cas9",
    "gRNA",
    "NHEJ",
    "HDR",
    "knock-out",
    "knock-in",
  ],
  core: {
    what: "PCR is a molecular biology lab procedure used to amplify a desired fragment of DNA — a repeat of three steps: denaturation (DNA template, primers, heat-stable DNA polymerase, and dNTPs are heated to separate the strands), annealing (the sample is cooled and DNA primers anneal to the specific sequence to be amplified), and elongation (temperature is increased and DNA polymerase adds dNTPs after each primer), cycling until the amount of DNA is sufficient. CRISPR/Cas9 is a genome editing tool derived from bacteria: a guide RNA (gRNA), complementary to a target DNA sequence, directs the Cas9 endonuclease to make a single- or double-strand break at the target site.",
    why: "PCR is the diagnostic backbone named on this page — neonatal HIV and herpes encephalitis are its two quoted applications — and CRISPR's cut-then-fork logic (NHEJ knock-out vs HDR knock-in) is the modern exam's favorite editing question, with sickle cell allele replacement as its flagship application.",
    keyIdea: "PCR answers 'is this nucleic acid present, and how much?' by copying; CRISPR answers 'can this sequence be changed?' by cutting. In CRISPR, the gRNA supplies the ADDRESS and Cas9 supplies the SCISSORS — then the cell's own repair machinery decides the outcome: NHEJ rushes and knocks out; HDR uses a donor template and knocks in.",
  },
  mechanisms: [
    {
      id: "pcr-thermal-cycle",
      title: "The PCR thermal cycle — denature, anneal, elongate, repeat",
      context: "Amplifying a desired DNA fragment in a tube",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Mix assembled: DNA template + DNA primers + heat-stable DNA polymerase + dNTPs",
            sublabel: "Molecular — the four ingredients of the reaction; the polymerase must survive repeated heating.",
            variant: "input",
          },
          {
            id: "s1",
            label: "1 · Denaturation — the mix is heated to separate the DNA strands",
            sublabel: "Molecular — the double helix melts into two single-stranded templates.",
            variant: "process",
          },
          {
            id: "s2",
            label: "2 · Annealing — sample is cooled; DNA primers anneal to the specific sequence to be amplified",
            sublabel: "Molecular — the primers define WHICH fragment gets copied; they bind their complementary sites on each template.",
            variant: "process",
          },
          {
            id: "s3",
            label: "3 · Elongation — temperature is increased; DNA polymerase adds dNTPs after each primer",
            sublabel: "Molecular — the heat-stable polymerase extends each primer 5′→3′, replicating the sequence after it.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Heating and cooling cycles continue until the amount of DNA is sufficient",
            sublabel: "Output — each cycle doubles the target: exponential amplification of exactly the primer-bounded fragment.",
            variant: "output",
          },
          {
            id: "o2",
            label: "Diagnostic readout: neonatal HIV, herpes encephalitis",
            sublabel: "Clinical — the page's own applications: detect viral nucleic acid directly when antibody testing cannot.",
            variant: "output",
          },
          {
            id: "x1",
            label: "Non-heat-stable polymerase would denature at step 1",
            sublabel: "Molecular — the reason the enzyme must be heat-stable: it lives through every denaturation step of every cycle.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "heat" },
          { from: "s1", to: "s2", label: "cool" },
          { from: "s2", to: "s3", label: "warm" },
          { from: "s3", to: "o1", label: "repeat ×n" },
          { from: "o1", to: "o2", label: "sufficient DNA" },
          { from: "x1", to: "s3", type: "inhibit", label: "denatured enzyme" },
        ],
        caption:
          "One cycle, three temperatures, one doubling: heat to denature, cool so primers anneal to the specific sequence, warm so the heat-stable polymerase elongates with dNTPs — then repeat until the amount of DNA is sufficient. The primer pair defines the fragment; the heat-stable polymerase survives the loop.",
      },
    },
    {
      id: "crispr-cas9-editing-fork",
      title: "CRISPR/Cas9 — one cut, two repair fates",
      context: "Editing a genomic locus with gRNA + Cas9",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "gRNA + Cas9 deployed into the cell",
            sublabel: "Molecular — a genome editing tool derived from bacteria; the gRNA is complementary to a target DNA sequence.",
            variant: "input",
          },
          {
            id: "s1",
            label: "gRNA guides Cas9 to the target site",
            sublabel: "Molecular — base-pairing between gRNA and genomic DNA specifies the address; Cas9 carries the scissors.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Cas9 makes a single- or double-strand break at the target site",
            sublabel: "Molecular — the endonuclease cuts exactly where the gRNA guided it.",
            variant: "process",
          },
          {
            id: "o1",
            label: "NHEJ → frameshift/inactivation (“knock-out”)",
            sublabel: "Clinical — nonhomologous end joining re-seals the break with insertions/deletions; the reading frame shifts and the gene is silenced.",
            variant: "output",
          },
          {
            id: "s3",
            label: "HDR + donor DNA → edited sequence (“knock-in”)",
            sublabel: "Molecular — homology-directed repair copies the donor template into the gap.",
            variant: "process",
          },
          {
            id: "o2",
            label: "Precise sequence replacement — the edited allele",
            sublabel: "Clinical — replacing disease-causing alleles of genes with healthy variants (eg, sickle cell disease).",
            variant: "output",
          },
          {
            id: "x1",
            label: "Applications: remove virulence factors from pathogens; specifically target tumor cells",
            sublabel: "Clinical — the source's own application list beyond the knock-in story.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "guides" },
          { from: "s1", to: "s2", label: "cut" },
          { from: "s2", to: "o1", label: "NHEJ" },
          { from: "s2", to: "s3", label: "HDR fork" },
          { from: "s3", to: "o2", label: "donor copied in" },
          { from: "x1", to: "s1", type: "inhibit", label: "pathogen/tumor targeting" },
        ],
        caption:
          "The fork is the exam: after Cas9's break, NHEJ rushes the repair and produces a frameshift knock-out; HDR waits for donor DNA and produces a precise knock-in. Choose the repair pathway, choose the editing outcome — knock-out to remove gene function (virulence factors), knock-in to replace alleles (sickle cell disease).",
      },
    },
  ],
  blocks: [
    {
      kind: "text",
      title: "PCR — what the machine actually does",
      body: [
        "The polymerase chain reaction is a molecular biology lab procedure used to amplify a desired fragment of DNA. Useful as a diagnostic tool (eg, neonatal HIV, herpes encephalitis), it detects a virus by its genome rather than by the host's immune response — which is exactly why it wins the two quoted scenarios: a neonate carries maternal antibody that defeats serology, and encephalitic CSF may be culture-negative while viral DNA is still present.",
        "The reaction is only as specific as its primers. Denaturation exposes the templates; annealing lets the short DNA primers land on the exact sequence to be amplified; elongation lets a heat-stable DNA polymerase extend each primer with dNTPs. Because every product of one cycle becomes a template for the next, amplification is exponential — after n cycles the target has been copied 2ⁿ-fold, which is what 'heating and cooling cycles continue until the amount of DNA is sufficient' means quantitatively.",
      ],
    },
    {
      kind: "visual",
      visualId: "pcr-cycle-steps",
      title: "The three-step cycle — the source figure, step by step",
      caption:
        "The PCR cycle rendered as the source draws it: double-stranded DNA with 5′/3′ polarity enters; step 1 Denaturation (heated) separates the strands; step 2 Annealing (sample is cooled) lands DNA primers on the specific sequence to be amplified on each template; step 3 Elongation (temperature is increased) extends new strands with dNTPs after each primer — then the REPEAT loop returns the products to step 1 until the amount of DNA is sufficient. Diagnostic-use chips carry the page's own examples: neonatal HIV and herpes encephalitis.",
      notice:
        "Note what the source figure does NOT show: no temperature numbers. The exam words to memorize are the direction changes — heated to separate, cooled so primers anneal, temperature is increased for elongation — plus the cast: template, DNA primers, heat-stable DNA polymerase, dNTPs.",
      },
    {
      kind: "text",
      title: "CRISPR/Cas9 — address and scissors",
      body: [
        "CRISPR/Cas9 is a genome editing tool derived from bacteria. It consists of a guide RNA (gRNA), which is complementary to a target DNA sequence, and an endonuclease (Cas9), which makes a single- or double-strand break at the target site. The division of labor is the high-yield sentence: gRNA finds, Cas9 cuts.",
        "What happens after the cut decides the edit. Take the fast path — nonhomologous end joining (NHEJ) — and the cell re-joins the ends sloppily, leaving insertions or deletions that shift the reading frame: frameshift/inactivation, the 'knock-out'. Supply a donor DNA template and let homology-directed repair (HDR) work, and the donor's sequence is copied into the gap: the edited sequence, a 'knock-in'.",
        "Applications include removing virulence factors from pathogens, replacing disease-causing alleles of genes with healthy variants (eg, sickle cell disease), and specifically targeting tumor cells — the three application families the exam quotes, each mapping onto one arm of the fork: knock-out for virulence removal, knock-in for allele replacement, and targeted delivery for the tumor strategy.",
      ],
    },
    {
      kind: "visual",
      visualId: "crispr-cas9-mechanism",
      title: "The editing fork — NHEJ knock-out vs HDR knock-in",
      caption:
        "The CRISPR figure as the source draws it: the Cas9 endonuclease bound to its gRNA hybridized to the target DNA; the scissors event producing a double-strand break; then the fork — left, NHEJ re-joins the fragments with a red indel segment and lands on 'Frameshift/inactivation (knock-out)'; right, HDR + Donor DNA (the green ladder) inserts into the gap and lands on 'Edited sequence (knock-in)'. A side panel pairs each repair path with its application: virulence-factor removal for knock-outs, sickle cell allele replacement for knock-ins, tumor-cell targeting for the delivery strategy.",
      notice:
        "Follow one break to both outcomes: the SAME cut yields a knock-out if the cell uses NHEJ, or a knock-in if a donor template steers HDR. The exam question 'which repair pathway gives a frameshift?' (NHEJ) and 'which gives a precise replacement?' (HDR) is this fork read left and right.",
    },
    {
      kind: "table",
      title: "PCR vs CRISPR — the comparison the exam loves",
      intro: "One copies DNA in a tube; the other edits DNA in a cell.",
      columns: ["Feature", "PCR", "CRISPR/Cas9"],
      rows: [
        ["Purpose", "Amplify a desired fragment of DNA", "Edit a target genomic sequence"],
        ["Guiding molecule", "DNA primers (a pair bounding the fragment)", "gRNA (complementary to the target sequence)"],
        ["Enzyme", "Heat-stable DNA polymerase", "Cas9 endonuclease (single- or double-strand break)"],
        ["Output", "Exponential copies of the fragment", "NHEJ knock-out or HDR knock-in at the locus"],
        ["Quoted uses", "Neonatal HIV, herpes encephalitis", "Virulence-factor removal, sickle cell allele replacement, tumor targeting"],
      ],
      caption:
        "Primer-pair vs single guide RNA; polymerase vs endonuclease; copying vs cutting — the column-pairs are the distractors in any tool-matching question.",
    },
    {
      kind: "callout",
      variant: "exam",
      title: "How the exam asks this page",
      body: "Four recurring shapes: (1) the neonate-with-maternal-antibody stem — why PCR for HIV detection in a newborn? (it detects viral nucleic acid directly, sidestepping maternal IgG); (2) step-ordering — denaturation heats, annealing cools, elongation warms; (3) the repair-fork question — frameshift knock-out (NHEJ) vs precise knock-in (HDR with donor DNA); (4) component matching — gRNA = the address, Cas9 = the scissors, heat-stable polymerase = PCR's engine.",
    },
    {
      kind: "callout",
      variant: "why",
      title: "Why the polymerase must be heat-stable — and why primers decide specificity",
      body: "Every cycle begins by heating the reaction to denature the template; an ordinary polymerase would itself denature on the first pass, so the technique depends on a heat-stable DNA polymerase that survives cycle after cycle. Specificity lives at the opposite end of the cycle: when the sample cools, the short DNA primers anneal only to their complementary sequence — so the fragment amplified is exactly the stretch between the two primer binding sites. Change the primers, change the product; the polymerase amplifies whatever the primers grab. This division — enzyme for endurance, primers for precision — is why both are named in step 1 of the source.",
    },
  ],
  clinical: [
    {
      kind: "text",
      title: "Neonatal HIV — the antibody-proof diagnosis",
      body: [
        "A newborn of an HIV-positive mother carries passively transferred maternal anti-HIV IgG for months, so an ELISA or Western blot on the infant cannot distinguish infection from exposure. PCR solves the problem by detecting proviral DNA or viral RNA directly — the infection itself, not the immune memory of it.",
        "That is why the page lists neonatal HIV first among PCR's diagnostic uses: the test changes the management timeline, because early infant antiretroviral therapy depends on an early, antibody-independent diagnosis.",
      ],
    },
    {
      kind: "text",
      title: "Sickle cell disease — the flagship knock-in",
      body: [
        "Replacing disease-causing alleles of genes with healthy variants (eg, sickle cell disease) is the source's flagship HDR application: a patient's hematopoietic stem cells can be edited ex vivo so that HDR installs a healthy β-globin sequence (or reactivates fetal hemoglobin), with the corrected cells then reinfused.",
        "The editing logic is the same fork as always — the gRNA addresses the β-globin locus, Cas9 cuts, and a donor DNA template carries the healthy sequence in. The exam version keeps it one level simpler: which repair pathway gives the precise replacement? HDR, using donor DNA.",
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 3-week-old infant born to an HIV-positive mother on combination antiretroviral prophylaxis needs definitive infection testing.",
        discriminator: "Maternal IgG makes serology uninterpretable — detect the viral genome itself",
        concept: "PCR as direct detection",
        answer: "PCR (amplify viral nucleic acid) — the page's own neonatal HIV application",
      },
      {
        stem: "A 24-year-old has fever, seizures, and confusion; CSF shows lymphocytic pleocytosis with a negative bacterial culture and pending viral culture.",
        discriminator: "Need a fast viral answer from CSF",
        concept: "PCR in neurologic infection",
        answer: "PCR for HSV (herpes encephalitis) — the page's second named application",
      },
      {
        stem: "An experiment edits a cell line: gRNA targets exon 2 of gene X, Cas9 cuts, and 72 hours later sequencing shows a 5-bp deletion with a premature stop codon.",
        discriminator: "Small deletion after the cut = error-prone rejoining",
        concept: "NHEJ outcome",
        answer: "Nonhomologous end joining → frameshift/inactivation (“knock-out”)",
      },
      {
        stem: "A researcher supplies a single-stranded donor template homologous to the locus and selects cells in which the exact pathogenic codon is now wild type.",
        discriminator: "Template-guided precise repair",
        concept: "HDR outcome",
        answer: "Homology-directed repair with donor DNA → edited sequence (“knock-in”), eg sickle cell allele replacement",
      },
      {
        stem: "A question asks which PCR component determines the exact fragment of DNA that is amplified.",
        discriminator: "Specificity vs endurance",
        concept: "PCR component roles",
        answer: "The DNA primers — they anneal to the specific sequence to be amplified; the heat-stable polymerase supplies endurance, not specificity",
      },
    ],
    traps: [
      {
        a: "gRNA",
        b: "Cas9",
        whyConfused: "Both are introduced in one sentence as 'the editing tool'.",
        keyDifference: "gRNA is the RNA address label, complementary to the target DNA sequence; Cas9 is the endonuclease that makes the single- or double-strand break.",
        clue: "gRNA guides; Cas9 cuts. Matching questions shuffle exactly these two roles.",
      },
      {
        a: "NHEJ",
        b: "HDR",
        whyConfused: "Both repair the SAME Cas9-induced break.",
        keyDifference: "NHEJ is fast and error-prone → indels → frameshift/inactivation (knock-out); HDR requires a donor DNA template → precise edited sequence (knock-in).",
        clue: "Donor DNA present in the stem → HDR/knock-in. No donor, question about frameshift → NHEJ/knock-out.",
      },
      {
        a: "Denaturation",
        b: "Elongation",
        whyConfused: "Both are 'hot' steps in the cycle.",
        keyDifference: "Denaturation HEATS to separate strands; elongation follows the cooled annealing step with an INCREASED temperature so the heat-stable polymerase extends primers.",
        clue: "Separation = hottest; primer extension = warm after the cool-down. Order: hot → cool → warm → repeat.",
      },
      {
        a: "PCR",
        b: "CRISPR",
        whyConfused: "Both are 'DNA technologies' in the same section.",
        keyDifference: "PCR amplifies DNA in a test tube (diagnostic); CRISPR edits DNA inside cells (therapeutic/research) — copying vs cutting.",
        clue: "Viral load or fragment detection → PCR. Knock-out/knock-in → CRISPR.",
      },
    ],
    pivots: [
      {
        lookAlike: "A 'newborn infection workup' stem offering serology, culture, and PCR",
        differentiator: "Maternal antibody interference and speed",
        correctPath: "Neonatal HIV → PCR (antibody-independent). Slow-growing organisms or deep culture-negative scenarios (herpes encephalitis CSF) → PCR. Serology alone fails when maternal IgG confounds.",
      },
      {
        lookAlike: "A 'gene editing outcome' stem describing either a frameshift or a precise substitution",
        differentiator: "Whether a donor template participated",
        correctPath: "Frameshift/inactivation → NHEJ knock-out; exact sequence replacement with donor DNA → HDR knock-in.",
      },
    ],
    miniCase: {
      vignette:
        "A 4-week-old boy is seen for follow-up. His mother has well-controlled HIV infection and took antiretrovirals throughout pregnancy; the infant received prophylaxis after delivery. He is thriving, and physical examination is normal. HIV ELISA performed at the visit is positive. The care team needs to know whether the infant is truly infected before committing to or withholding therapy.",
      question: "Which diagnostic test best resolves whether this infant is infected with HIV?",
      options: [
        {
          label: "A",
          correct: true,
          text: "PCR amplifying viral nucleic acid from the infant's blood",
          why: "Correct. PCR is a diagnostic tool for neonatal HIV precisely because it detects the viral genome itself. The positive ELISA here reflects passively acquired maternal anti-HIV IgG, which can persist for months — PCR sidesteps the antibody problem entirely.",
        },
        {
          label: "B",
          text: "Repeat HIV ELISA in 2 weeks",
          why: "Tempting because the ELISA is the standard adult screen — but repeating it measures the same maternal antibody pool and cannot distinguish infection from exposure; it is exactly the wrong tool in a neonate.",
        },
        {
          label: "C",
          text: "Western blot for antibody confirmation",
          why: "The adult confirmatory test after a positive screen — but in this infant the antibodies being confirmed are still the mother's; Western blot inherits the same confounding and adds no direct evidence of infection.",
        },
        {
          label: "D",
          text: "CRISPR/Cas9 editing of the infant's hematopoietic cells",
          why: "CRISPR is a genome-editing tool (its quoted applications are virulence-factor removal, sickle cell allele replacement, tumor targeting) — it is a therapeutic research technology, not a diagnostic for infant HIV.",
        },
        {
          label: "E",
          text: "Southern blot quantifying viral DNA fragments",
          why: "A Southern blot sizes specific DNA fragments (eg, FMR1 CGG repeats) after enzymatic cleavage — powerful for genotyping, but slow and labor-intensive compared with PCR's exponential amplification for viral detection.",
        },
      ],
      reasoning:
        "The stem pits a positive antibody test against a clinical question the antibody test cannot answer: is the baby infected, or just carrying maternal IgG? First Aid's own list names neonatal HIV as PCR's flagship diagnostic use for exactly this reason. Option A is the only test that measures the virus rather than the immune memory of it.",
    },
  },
  mnemonics: [
    {
      code: "“DAE — Denature hot, Anneal cool, Elongate warm”",
      meaning: "The three PCR steps in order with their temperature directions: Denaturation heats to separate strands; Annealing cools so primers bind; Elongation increases temperature so the heat-stable polymerase extends.",
      memorizes: "PCR step order and direction of temperature change",
      whenToUse: "Any step-ordering or component-role PCR question.",
      clinical: "The heat-stable polymerase must survive the 'hot' step every cycle — that's why it's named in the ingredients.",
    },
    {
      code: "“gRNA guides; Cas9 cuts”",
      meaning: "The gRNA is complementary to the target DNA sequence (the address); the Cas9 endonuclease makes the single- or double-strand break (the scissors).",
      memorizes: "CRISPR component roles",
      whenToUse: "Any CRISPR component-matching or mechanism question.",
      clinical: "After the cut: NHEJ → frameshift knock-out; HDR + donor DNA → knock-in.",
    },
    {
      code: "“No Donor → Knock-out; Have Donor → Knock-in”",
      meaning: "NHEJ (no donor template) re-joins with indels → frameshift/inactivation; HDR (with donor DNA) copies the template → edited sequence.",
      memorizes: "The repair-fork outcomes",
      whenToUse: "Any question asking which repair pathway yields which edit.",
      clinical: "Sickle cell allele replacement = HDR knock-in; virulence-factor removal = NHEJ knock-out.",
    },
  ],
  rapidReview: {
    s30: [
      "PCR amplifies a desired fragment of DNA; diagnostic uses: neonatal HIV, herpes encephalitis.",
      "PCR cycle: denaturation (heated) → annealing (cooled, primers bind) → elongation (temperature increased, dNTPs added) → repeat.",
      "PCR ingredients: DNA template, DNA primers, heat-stable DNA polymerase, dNTPs.",
      "CRISPR = gRNA (complementary to target) + Cas9 endonuclease (single- or double-strand break).",
      "NHEJ → frameshift/inactivation (knock-out); HDR + donor DNA → edited sequence (knock-in).",
      "CRISPR applications: remove virulence factors, replace disease alleles (sickle cell), target tumor cells.",
    ],
    m3: [
      "Heating and cooling cycles continue until the amount of DNA is sufficient — amplification is exponential (2ⁿ per cycle).",
      "Primer choice defines the amplified fragment; polymerase choice defines heat tolerance.",
      "CRISPR is a genome editing tool derived from bacteria — the bacterial adaptive immune system repurposed.",
      "Cas9 can make single- or double-strand breaks at the target site — the exam usually draws the double-strand fork.",
      "Neonatal HIV PCR beats serology because maternal IgG confounds antibody tests for months.",
      "Herpes encephalitis PCR: detect HSV DNA in CSF when culture is slow or negative.",
    ],
    m10: [
      "Denaturation melts the double helix into single-stranded templates for copying.",
      "Annealing is where specificity lives — primers select the sequence to be amplified.",
      "Elongation extends each primer 5′→3′ with dNTPs.",
      "The gRNA–DNA hybrid is the recognition event; cutting follows recognition.",
      "Knock-out experiments read function loss; knock-in experiments read rescue or replacement.",
      "Tumor targeting by CRISPR is a delivery problem — the same fork, aimed at malignant cells.",
    ],
  },
  recall: [
    {
      q: "Name the four ingredients of a PCR reaction.",
      a: "DNA template, DNA primers, a heat-stable DNA polymerase, and deoxynucleotide triphosphates (dNTPs).",
    },
    {
      q: "State the three PCR steps with their temperature directions.",
      a: "Denaturation — heated to separate DNA strands; annealing — sample cooled, primers anneal to the specific sequence; elongation — temperature increased, polymerase adds dNTPs after each primer.",
    },
    {
      q: "What are the two named diagnostic applications of PCR on this page?",
      a: "Neonatal HIV and herpes encephalitis.",
    },
    {
      q: "What two components make up the CRISPR/Cas9 system, and what does each do?",
      a: "Guide RNA (gRNA) — complementary to the target DNA sequence (the address); Cas9 — the endonuclease making a single- or double-strand break at the target site (the scissors).",
    },
    {
      q: "Which repair pathway produces a knock-out, and how?",
      a: "NHEJ — nonhomologous end joining re-joins the cut ends with insertions/deletions, causing frameshift/inactivation ('knock-out').",
    },
    {
      q: "Which repair pathway produces a knock-in, and what does it require?",
      a: "HDR — homology-directed repair, which requires a donor DNA template to copy the edited sequence into the break ('knock-in').",
    },
    {
      q: "List the three quoted CRISPR applications.",
      a: "Removing virulence factors from pathogens; replacing disease-causing alleles with healthy variants (eg, sickle cell disease); specifically targeting tumor cells.",
    },
    {
      q: "Why must the PCR polymerase be heat-stable?",
      a: "Because every cycle begins with a denaturation step hot enough to separate DNA strands — an ordinary enzyme would denature; the heat-stable polymerase survives cycle after cycle.",
    },
  ],
  related: [
    {
      title: "DNA Replication",
      note: "PCR's elongation step IS DNA replication in a tube — the same 5′→3′ polymerization by a DNA polymerase.",
      topicId: "dna-replication",
    },
    {
      title: "Blotting Procedures",
      note: "The sibling lab technique: where PCR amplifies a fragment, Southern blotting sizes it — fragile X repeat counting is the meeting point.",
      topicId: "blotting-procedures",
    },
    {
      title: "Flow Cytometry & ELISA",
      note: "The immunologic detection counterparts: ELISA and Western blot detect what PCR detects by genome — together they form the diagnostic stack.",
      topicId: "flow-cytometry-elisa",
    },
    {
      title: "Nucleotide Synthesis & Metabolism",
      note: "dNTPs are the fuel of both elongation and antiviral/anticancer therapy — the nucleotide economy behind the reaction.",
      topicId: "nucleotides-synthesis",
    },
  ],
  crossLinks: [
    {
      subject: "Microbiology/Infectious Disease",
      connection: "Neonatal HIV and herpes encephalitis are PCR's named diagnostic scenarios — antibody-independent and culture-accelerating.",
    },
    {
      subject: "Hematology/Oncology",
      connection: "Sickle cell allele replacement is the flagship CRISPR knock-in; tumor-cell targeting is the delivery application.",
    },
    {
      subject: "Genetics",
      connection: "CRISPR editing outcomes (knock-out/knock-in) are the functional counterpart of the mutation vocabulary — frameshifts created on purpose.",
    },
    {
      subject: "Immunology",
      connection: "Why the neonate needs PCR: passive maternal IgG defeats antibody-based diagnosis for months after birth.",
    },
  ],
};
