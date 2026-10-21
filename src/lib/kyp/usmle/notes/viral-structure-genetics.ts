import type { KypUsMLENote } from "../types";

// Microbiology — VIROLOGY banner (M-batch 22, the virology opener). Source: pdf
//  181-182 / books 159-160 (Viral structure—general features; Viral genetics;
//  Viral genomes; the DNA/RNA virus characteristics; Viral envelopes). Both
//  pages are pure vector (0 rasters). The source's banner typo 'MICROCIOLOGY—
//  VIROLOGY' prints on books 159-160. FA's printed mnemonics (Part of a virus;
//  Repeato-virus; the retro-toga-party sentence; Always bring polymerase;
//  BOAR; helpful protection) are quoted in the table block for verification
//  only — the public mnemonics below are KYP originals.

export const viralStructureGenetics: KypUsMLENote = {
  id: "viral-structure-genetics",
  title: "Viral Structure & Genetics",
  subtitle:
    "The virology opener: the architecture set and the exchange set. THE ARCHITECTURE (book 159): the NAKED (NONENVELOPED) virus with icosahedral capsid — a protein shell (capsid) around the nucleic acid, no membrane. The ENVELOPED virus with icosahedral capsid — surface proteins studding a lipid bilayer (the envelope, host-derived) around the capsid around the nucleic acid. The ENVELOPED virus with helical capsid — the same envelope with the nucleic acid wound in a helical capsid with viral RNA. The BACTERIOPHAGE — capsid head with nucleic acid, a collar, a core inside the helical sheath, a base plate, and spikes: the injection machine. THE EXCHANGE SET (book 159): RECOMBINATION — genes exchange between 2 chromosomes by crossing over within regions of significant base sequence homology. REASORTMENT — segmented viruses (eg, influenza) exchange whole genome segments; the 2009 novel H1N1 pandemic emerged via complex reassortment of human, swine, and avian genes; the source of ANTIGENIC SHIFT. COMPLEMENTATION — a nonmutated virus makes the functional protein a mutant cannot (serving both viruses; no genome change); hepatitis D requires replicating HBV to supply HBsAg, its envelope protein. PHENOTYPIC MIXING — simultaneous infection coats virus A's genome with virus B's surface proteins (a PSEUDOVIRION); the type B coat determines the TROPISM of the hybrid; the next progeny reverts to its own type A coat. THE GENOME RULES (book 160): naked nucleic acids of most dsDNA viruses (except poxviruses and HBV) and ⊕ strand ssRNA viruses are infectious; ⊝ strand ssRNA and dsRNA are not (they lack the required polymerases — their virions carry RNA-dependent RNA polymerase to transcribe ⊝ to ⊕). DNA viruses are all dsDNA except Parvoviridae (ssDNA), all linear except papilloma-, polyoma-, and hepadnaviruses (circular). RNA viruses are all ssRNA except Reoviridae (dsRNA); ⊕ stranded: retro-, toga-, flavi-, corona-, hepe-, calici-, picorna-; ⊝ stranded: arena-, bunya-, paramyxo-, orthomyxo-, filo-, rhabdo-; segmented: bunya-, orthomyxo-, arena-, reoviruses. ENVELOPES are acquired from the plasma membrane on exit, except herpesviruses (nuclear membrane); the enveloped DNA viruses are herpesvirus, hepadnavirus, and poxvirus.",
  subject: "Microbiology",
  system: "Section II · High-Yield General Principles — Virology",
  pilotCategory:
    "Virology — the architecture axis (capsid symmetry and the naked/enveloped split, with the bacteriophage as the structural extreme) and the exchange axis (recombination's nucleotide crossover vs reassortment's whole-segment swap vs complementation's shared protein vs phenotypic mixing's swapped coat), closed by the naked-genome infectivity rule and the DNA/RNA family rosters",
  difficulty: 2,
  readTime: 12,
  sourceRef: "First Aid 2026, Part 1 pp. 159–160 (Viral structure—general features; Viral genetics; Viral genomes; DNA and RNA virus characteristics; Viral envelopes)",
  tags: [
    "viral structure",
    "capsid",
    "icosahedral capsid",
    "helical capsid",
    "nucleic acid",
    "naked virus",
    "nonenveloped virus",
    "enveloped virus",
    "surface protein",
    "lipid bilayer",
    "envelope",
    "bacteriophage",
    "collar",
    "core",
    "helical sheath",
    "base plate",
    "spikes",
    "viral genetics",
    "recombination",
    "crossing over",
    "base sequence homology",
    "reassortment",
    "segmented genomes",
    "influenza",
    "2009 H1N1",
    "antigenic shift",
    "complementation",
    "nonfunctional protein",
    "hepatitis D virus",
    "HBsAg",
    "phenotypic mixing",
    "pseudovirion",
    "tropism",
    "viral genomes",
    "naked nucleic acids",
    "infectious genomes",
    "dsDNA",
    "poxviruses",
    "HBV",
    "Parvoviridae",
    "ssDNA",
    "circular genomes",
    "papillomavirus",
    "polyomavirus",
    "hepadnavirus",
    "Reoviridae",
    "dsRNA",
    "positive strand",
    "negative strand",
    "retrovirus",
    "togavirus",
    "flavivirus",
    "coronavirus",
    "hepevirus",
    "calicivirus",
    "picornavirus",
    "arenavirus",
    "bunyavirus",
    "paramyxovirus",
    "orthomyxovirus",
    "filovirus",
    "rhabdovirus",
    "segmented",
    "BOAR",
    "RNA-dependent RNA polymerase",
    "viral envelopes",
    "plasma membrane",
    "nuclear membrane",
    "herpesvirus",
  ],
  core: {
    what: "THE ARCHITECTURE SET (book 159). A virus is nucleic acid in a container, and the container comes in a small number of recurring designs. The NAKED (NONENVELOPED) design: a CAPSID — a protein shell built with icosahedral symmetry — encloses the NUCLEIC ACID directly; there is no membrane. The ENVELOPED ICOSAHEDRAL design adds two outer layers: SURFACE PROTEINS studding a LIPID BILAYER (the envelope), with the capsid and nucleic acid inside. The ENVELOPED HELICAL design keeps the same envelope but winds the nucleic acid into a HELICAL CAPSID WITH VIRAL RNA — the nucleic acid and its coat form one coiled ribonucleoprotein. The BACTERIOPHAGE is the fourth design and the most machine-like: a CAPSID head holding the NUCLEIC ACID, a COLLAR below it, a tail whose HELICAL SHEATH surrounds an inner CORE, and a BASE PLATE with SPIKES — the parts that attach to the bacterial wall and inject the genome. THE EXCHANGE SET (book 159). When two viruses meet in one cell, four events are possible, graded by what physically crosses. RECOMBINATION: two chromosomes exchange genes by CROSSING OVER WITHIN REGIONS OF SIGNIFICANT BASE SEQUENCE HOMOLOGY — nucleotides cross, and only where the sequences line up. REASORTMENT: viruses with SEGMENTED GENOMES (eg, INFLUENZA virus) exchange genetic material by swapping whole segments — the 2009 novel H1N1 influenza A pandemic emerged via complex viral reassortment of genes from human, swine, and avian viruses, and the event has potential to cause ANTIGENIC SHIFT. COMPLEMENTATION: when 1 of 2 viruses infecting a cell has a mutation that results in a NONFUNCTIONAL PROTEIN, the nonmutated virus complements the mutated one by making the FUNCTIONAL PROTEIN that serves both — nothing crosses between genomes; the help is in trans. Example: HEPATITIS D VIRUS requires the presence of replicating HEPATITIS B VIRUS to supply HBsAg, the envelope protein for HDV. PHENOTYPIC MIXING: with simultaneous infection of a cell with 2 viruses, the genome of virus A can be partially or completely coated with the surface proteins of virus B — a PSEUDOVIRION — and the TYPE B PROTEIN COAT DETERMINES THE TROPISM (infectivity) of the hybrid; progeny from the subsequent infection of a cell by progeny 1 will have a TYPE A COAT encoded by its own type A genetic material. THE GENOME RULES (book 160). Naked nucleic acids of MOST dsDNA VIRUSES (EXCEPT POXVIRUSES AND HBV) and ⊕ STRAND ssRNA VIRUSES are infectious — bring the genome to a cell and infection starts. Naked nucleic acids of ⊝ STRAND ssRNA and dsRNA viruses are NOT infectious because they lack the required polymerases to replicate; their VIRIONS carry RNA-DEPENDENT RNA POLYMERASES to transcribe the ⊝ strand to ⊕. The family rosters: DNA viruses all have dsDNA genomes (like our cells) except PARVOVIRIDAE (ssDNA), and all are linear except PAPILLOMA-, POLYOMA-, and HEPADNAVIRUSES (circular). RNA viruses all have ssRNA genomes except REOVIRIDAE (dsRNA); ⊕ stranded (≈ mRNA): RETRO-, TOGA-, FLAVI-, CORONA-, HEPE-, CALICI-, and PICORNAVIRUSES; ⊝ stranded: ARENA-, BUNYA-, PARAMYXO-, ORTHOMYXO-, FILO-, and RHABDOVIRUSES; segmented: BUNYA-, ORTHOMYXO-, ARENA-, and REOVIRUSES. ENVELOPES are generally acquired from the PLASMA MEMBRANE when viruses exit the cell; the exceptions are HERPESVIRUSES, which acquire envelopes from the NUCLEAR MEMBRANE. The enveloped DNA viruses are HERPESVIRUS, HEPADNAVIRUS, and POXVIRUS.",
    why: "This two-page block is the grammar every later virology page speaks, and it carries four exam institutions. The first is THE EXCHANGE LADDER: recombination trades nucleotides (homology required), reassortment trades whole segments (segmentation required), complementation trades nothing genetic — it lends a protein — and phenotypic mixing trades only a coat. Questions turn on whether the event changes the GENOME (recombination, reassortment — heritable) or only the PHENOTYPE (complementation, phenotypic mixing — transient). The second is THE PANDEMIC MECHANISM: the 2009 novel H1N1 influenza A pandemic emerged via complex reassortment of genes from human, swine, and avian viruses — segmented genomes are why influenza invents antigenic shift, and the segmented roster (bunya-, orthomyxo-, arena-, reoviruses) names which viruses can do it. The third is THE POLYMERASE RULE: ⊕ strand ssRNA is mRNA-like and infectious alone; ⊝ strand ssRNA and dsRNA are not — their virions must carry RNA-dependent RNA polymerase. This single rule explains genome infectivity and previews every antiviral that targets a viral polymerase. The fourth is THE ARCHITECTURE READER: capsid symmetry (icosahedral vs helical) and the naked/enveloped split organize the entire viral family map — with the envelope's membrane source (plasma on exit; herpesviruses from the nuclear membrane) and the three enveloped DNA viruses (herpes, hepadna, pox) as the recurring structural exam points.",
    keyIdea: "Read the container, then read the trade. ARCHITECTURE: capsid (protein shell, icosahedral or helical) around nucleic acid; envelope (surface proteins on a host-derived lipid bilayer) outside the capsid in enveloped viruses; the phage adds collar, core, helical sheath, base plate, and spikes. EXCHANGE — the ladder of what crosses: RECOMBINATION = nucleotides, within base-sequence homology (genome changes). REASORTMENT = whole segments, in segmented viruses — influenza's antigenic shift, the 2009 H1N1 human-swine-avian pandemic (genome changes). COMPLEMENTATION = a shared functional protein, no genome change — HDV borrowing HBsAg from replicating HBV. PHENOTYPIC MIXING = a borrowed coat — A's genome in B's surface proteins (pseudovirion), B's coat setting the tropism, progeny 2 reverting to A's coat (no genome change). GENOMES: infectious naked = most dsDNA (except poxviruses, HBV) + ⊕ ssRNA; not infectious = ⊝ ssRNA + dsRNA (virions carry RdRp, ⊝ → ⊕). ROSTERS: DNA all dsDNA except parvo (ssDNA), all linear except papilloma, polyoma, hepadna (circular); RNA all ssRNA except reo (dsRNA); ⊕: retro, toga, flavi, corona, hepe, calici, pico; ⊝: arena, bunya, paramyxo, orthomyxo, filo, rhabdo; segmented: BOAR (bunya, orthomyxo, arena, reo). ENVELOPES: plasma membrane on exit; herpesviruses from the nuclear membrane; enveloped DNA viruses = herpes + hepadna + pox.",
  },
  mechanisms: [
    {
      id: "capsid-envelope-architecture",
      title: "The layered container: what each part is and what it does",
      context: "The four printed architectures and the logic that connects them",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A virion arrives — which container is the genome in?",
            sublabel: "Input — the architecture question.",
            variant: "input",
          },
          {
            id: "s1",
            label: "THE INNER LAYER — THE CAPSID: a protein shell built in one of two recurring symmetries. ICOSAHEDRAL: repeating protein subunits close into a near-spherical shell around the nucleic acid (the naked icosahedral design and the inner layer of the enveloped icosahedral design). HELICAL: the nucleic acid winds into a coiled ribonucleoprotein — the HELICAL CAPSID WITH VIRAL RNA",
            sublabel: "Process — symmetry is how a virus builds a big shell from small repeating parts.",
            variant: "process",
          },
          {
            id: "s2",
            label: "THE OUTER LAYER — THE ENVELOPE: in enveloped viruses, SURFACE PROTEINS stud a LIPID BILAYER that surrounds the capsid; the envelope is host-derived, acquired on exit — generally from the PLASMA MEMBRANE, except HERPESVIRUSES, which envelope from the NUCLEAR MEMBRANE. The naked designs skip this layer entirely",
            sublabel: "Process — the envelope is a borrowed membrane; the surface proteins are the virus's own.",
            variant: "process",
          },
          {
            id: "s3",
            label: "THE MACHINE EXTREME — THE BACTERIOPHAGE: CAPSID head containing the NUCLEIC ACID; a COLLAR at the neck; a tail whose HELICAL SHEATH surrounds an inner CORE; a BASE PLATE bearing SPIKES — the attachment-and-injection apparatus that docks on a bacterial wall and delivers the genome",
            sublabel: "Process — the phage reads as a syringe: dock, contract, inject.",
            variant: "process",
          },
          {
            id: "o1",
            label: "OUTPUT — the structural identifiers: naked vs enveloped (is there a lipid bilayer?), icosahedral vs helical (how is the capsid symmetric?), and for the phage, the six named parts (capsid, nucleic acid, collar, core, helical sheath, base plate, spikes)",
            sublabel: "Output — the container names the family and predicts its behavior.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "start inside: the capsid" },
          { from: "s1", to: "s2", label: "add or skip the envelope" },
          { from: "s2", to: "s3", label: "the phage specializes the plan" },
          { from: "s3", to: "o1", label: "read the container" },
        ],
      },
    },
    {
      id: "genetic-exchange-spectrum",
      title: "The exchange ladder: what crosses, and does the genome change?",
      context: "Recombination, reassortment, complementation, phenotypic mixing on one axis",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Two viruses infect the same cell — the coinfection setup",
            sublabel: "Input — every exchange event starts here (except recombination's two chromosomes).",
            variant: "input",
          },
          {
            id: "s1",
            label: "NUCLEOTIDES CROSS — RECOMBINATION: exchange of genes between 2 chromosomes by CROSSING OVER WITHIN REGIONS OF SIGNIFICANT BASE SEQUENCE HOMOLOGY. The requirement is the discriminator: no matching sequence, no crossover. The genome is permanently rewritten",
            sublabel: "Process — the finest-grained trade; homology-gated.",
            variant: "process",
          },
          {
            id: "s2",
            label: "SEGMENTS CROSS — REASORTMENT: viruses with SEGMENTED GENOMES (eg, INFLUENZA) exchange genetic material by swapping whole segments — REASORTMENT OF GENOME SEGMENTS. The 2009 novel H1N1 influenza A pandemic emerged via complex viral reassortment of genes from HUMAN, SWINE, and AVIAN viruses; the event has potential to cause ANTIGENIC SHIFT. Only segmented viruses can do this (the bunya, orthomyxo, arena, reo set)",
            sublabel: "Process — the wholesale trade; segmentation-gated, and the pandemic mechanism.",
            variant: "process",
          },
          {
            id: "s3",
            label: "PROTEINS CROSS — COMPLEMENTATION: when 1 of 2 viruses has a mutation making a NONFUNCTIONAL PROTEIN, the nonmutated virus makes the FUNCTIONAL PROTEIN that serves both. No genome changes — the rescue is in trans. The exam's anchor: HEPATITIS D VIRUS requires replicating HEPATITIS B VIRUS to supply HBsAg, the envelope protein for HDV",
            sublabel: "Process — a lent protein, not a lent gene.",
            variant: "process",
          },
          {
            id: "s4",
            label: "COATS CROSS — PHENOTYPIC MIXING: progeny 1 carries the genome of virus A partially or completely coated with the surface proteins of virus B (a PSEUDOVIRION); the TYPE B COAT DETERMINES THE TROPISM (infectivity) of the hybrid. Progeny from the subsequent infection by progeny 1 will have a TYPE A COAT encoded by its own type A genetic material — the costume is one generation deep",
            sublabel: "Process — a borrowed coat sets one round of tropism, then the genome reasserts its own.",
            variant: "process",
          },
          {
            id: "o1",
            label: "OUTPUT — the two-question sorter: WHAT CROSSED (nucleotides → segments → proteins → coats) and DID THE GENOME CHANGE (recombination and reassortment: yes, heritable; complementation and phenotypic mixing: no, transient)",
            sublabel: "Output — the sorter answers every exchange-event stem.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "homologous crossover" },
          { from: "s1", to: "s2", label: "from nucleotides to whole segments" },
          { from: "s2", to: "s3", label: "from genes to proteins" },
          { from: "s3", to: "s4", label: "from proteins to coats" },
          { from: "s4", to: "o1", label: "the sorter" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "viral-structure-map",
      title: "The viral architecture + exchange map",
      caption:
        "An original KYP redraw of the source's two-page block (books 159-160): the four architecture panels (naked icosahedral; enveloped icosahedral; enveloped helical; bacteriophage), the four genetic-exchange cards (recombination, reassortment, complementation, phenotypic mixing), and the naked-genome infectivity + envelope-source rules.",
      notice:
        "Both source pages are pure vector (0 rasters) — no copyrighted photos on this topic. The source's banner typo 'MICROCIOLOGY—VIROLOGY' prints on books 159-160. FA's printed mnemonics (Part of a virus; Repeato-virus; the retro-toga-party sentence; Always bring polymerase or fail replication; BOAR; helpful protection) are quoted in the table block for verification only and are not redrawn in the visual.",
    },
    {
      kind: "table",
      title: "Viral genetics — the four exchange events, verbatim",
      intro: "The source's table (book 159), verbatim.",
      columns: ["Event", "Definition (verbatim)"],
      rows: [
        [
          "Recombination",
          "Exchange of genes between 2 chromosomes by crossing over within regions of significant base sequence homology.",
        ],
        [
          "Reassortment",
          "When viruses with segmented genomes (eg, influenza virus) exchange genetic material. For example, the 2009 novel H1N1 influenza A pandemic emerged via complex viral reassortment of genes from human, swine, and avian viruses. Has potential to cause antigenic shift. Reassortment of genome segments.",
        ],
        [
          "Complementation",
          "When 1 of 2 viruses that infect the cell has a mutation that results in a nonfunctional protein, the nonmutated virus “complements” the mutated one by making a functional protein that serves both viruses. For example, hepatitis D virus requires the presence of replicating hepatitis B virus to supply HBsAg, the envelope protein for HDV.",
        ],
        [
          "Phenotypic mixing",
          "Occurs with simultaneous infection of a cell with 2 viruses. For progeny 1, genome of virus A can be partially or completely coated (forming pseudovirion) with the surface proteins of virus B. Type B protein coat determines the tropism (infectivity) of the hybrid virus. Progeny from subsequent infection of a cell by progeny 1 will have a type A coat that is encoded by its type A genetic material.",
        ],
      ],
      caption:
        "The table reads with the exchange-ladder mechanism: recombination and reassortment rewrite the genome (heritable); complementation and phenotypic mixing change only the phenotype (transient). Each printed row carries a small diagram — two parent icons, a plus, an equals, and the progeny (redrawn in the visual's four cards).",
    },
    {
      kind: "table",
      title: "Viral genomes, DNA/RNA characteristics & envelopes — verbatim",
      intro:
        "The source's block (book 160), verbatim, including FA's printed mnemonics (marked — verification-only).",
      columns: ["Block", "Content (verbatim; FA mnemonics marked)"],
      rows: [
        [
          "Viral genomes (intro)",
          "Naked nucleic acids of most dsDNA viruses (except poxviruses and HBV) and ⊕ strand ssRNA viruses are infectious. Naked nucleic acids of ⊝ strand ssRNA and dsRNA viruses are not infectious because they lack the required polymerases to replicate. Virions of ⊝ strand ssRNA viruses carry RNA-dependent RNA polymerases to transcribe ⊝ strand to ⊕.",
        ],
        [
          "DNA viruses",
          "All have dsDNA genomes (like our cells) except Parvoviridae (ssDNA). All are linear except papilloma-, polyoma-, and hepadnaviruses (circular). [FA mnemonic, printed: “Part of a virus.”]",
        ],
        [
          "RNA viruses",
          "All have ssRNA genomes except Reoviridae (dsRNA). ⊕ stranded (≈ mRNA): retro-, toga-, flavi-, corona-, hepe-, calici-, and picornaviruses. ⊝ stranded: arena-, bunya-, paramyxo-, orthomyxo-, filo-, and rhabdoviruses. Segmented: Bunya-, Orthomyxo-, Arena-, and Reoviruses. [FA mnemonics, printed: “Repeato-virus”; “While at a retro toga party, I drank flavored Corona and ate hippie California pickles.”; “Always bring polymerase or fail replication.”; “BOAR”]",
        ],
        [
          "Viral envelopes",
          "Generally, enveloped viruses acquire their envelopes from plasma membrane when they exit from cell. Exceptions include herpesviruses, which acquire envelopes from nuclear membrane. [FA mnemonic, printed: “Enveloped DNA viruses (herpesvirus, hepadnavirus, poxvirus) have helpful protection.”]",
        ],
      ],
      caption:
        "The rosters preview the DNA-virus and RNA-virus family maps (M23 and M24). FA's printed mnemonics are quoted here for source fidelity only; KYP's own memory keys are in the mnemonics block.",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "The protocols the rules imply",
      body: "THE INFECTIVITY PROTOCOL: if a naked genome can start an infection by itself, the cell must already speak its language — most dsDNA genomes (except poxviruses and HBV) and ⊕ strand ssRNA (≈ mRNA) qualify; ⊝ strand ssRNA and dsRNA do not, because they lack the required polymerases, so their virions must carry RNA-dependent RNA polymerase to transcribe ⊝ to ⊕. THE SEGMENTATION PROTOCOL: only segmented viruses reassort — bunya-, orthomyxo-, arena-, and reoviruses — and reassortment is the mechanism behind influenza's antigenic shift and the 2009 H1N1 pandemic (human + swine + avian segments). THE RESCUE PROTOCOL: a defective virus can be rescued in trans by a coinfecting helper — HDV needs replicating HBV for HBsAg; the genome never changes. THE COAT PROTOCOL: a pseudovirion's borrowed coat sets one round of tropism; the next progeny wears its own coat again. THE ENVELOPE PROTOCOL: envelopes come from the plasma membrane on exit (herpesviruses: nuclear membrane), and the only enveloped DNA viruses are herpesvirus, hepadnavirus, and poxvirus.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A novel influenza A strain emerges containing gene segments previously seen in human, swine, and avian viruses simultaneously; within months it spreads worldwide as a pandemic.",
        discriminator: "Segmented genome + segments from three host species + pandemic spread",
        concept: "Reassortment — antigenic shift",
        answer:
          "Reassortment: viruses with segmented genomes (eg, influenza virus) exchange genetic material by swapping whole segments. The 2009 novel H1N1 influenza A pandemic emerged via complex viral reassortment of genes from human, swine, and avian viruses — reassortment of genome segments has the potential to cause antigenic shift.",
      },
      {
        stem: "A patient with chronic hepatitis B develops a superimposed hepatitis D infection; the delta agent cannot propagate until HBV is actively replicating in the same hepatocyte.",
        discriminator: "A defective virus requiring a helper virus's protein",
        concept: "Complementation — HDV needs HBsAg",
        answer:
          "Complementation: when 1 of 2 viruses that infect the cell has a mutation that results in a nonfunctional protein, the nonmutated virus complements the mutated one by making a functional protein that serves both. Hepatitis D virus requires the presence of replicating hepatitis B virus to supply HBsAg, the envelope protein for HDV — a protein lent in trans, with no genome change.",
      },
      {
        stem: "A purified viral genome preparation is transfected into cultured cells; infection begins for one genome type but not for another, which only produces infection when the intact virion is used.",
        discriminator: "Genome-alone infectivity splits by strand sense",
        concept: "The naked-genome rule — polymerase dependence",
        answer:
          "Naked nucleic acids of most dsDNA viruses (except poxviruses and HBV) and ⊕ strand ssRNA viruses are infectious. Naked nucleic acids of ⊝ strand ssRNA and dsRNA viruses are not infectious because they lack the required polymerases to replicate — their virions carry RNA-dependent RNA polymerases to transcribe the ⊝ strand to ⊕.",
      },
    ],
    traps: [
      {
        a: "Phenotypic mixing permanently changes the hybrid virus's host range",
        b: "The B coat sets only ONE round of tropism — progeny from the subsequent infection by progeny 1 will have a TYPE A COAT encoded by its own type A genetic material",
        whyConfused: "The pseudovirion infects like virus B, so the change feels permanent.",
        keyDifference:
          "Phenotypic mixing changes the phenotype, not the genome: progeny 1 is virus A's genome in virus B's surface proteins (a pseudovirion), and the borrowed coat is not inherited — the next generation reverts. Contrast the heritable pair (recombination, reassortment), which rewrite the genome itself.",
        clue: "Any coinfection question asking what the hybrid leaves behind.",
      },
      {
        a: "Influenza pandemics arise from point mutations in the hemagglutinin gene",
        b: "Pandemic-grade ANTIGENIC SHIFT arises from REASORTMENT — whole genome segments swapping between strains (the 2009 H1N1 human-swine-avian mix)",
        whyConfused: "Both change the viral surface antigens.",
        keyDifference:
          "Recombination crosses over within regions of significant base sequence homology — nucleotide-level, homology-gated. Reassortment moves whole segments — segmentation-gated, and only segmented viruses (bunya-, orthomyxo-, arena-, reoviruses) can do it. The scale of the trade is the answer key.",
        clue: "Any new-influenza-strain stem.",
      },
      {
        a: "Complementation is a form of genetic exchange between the two viruses",
        b: "NOTHING genetic crosses — the nonmutated virus simply MAKES the functional protein that serves both; each genome leaves unchanged",
        whyConfused: "It is listed among the 'viral genetics' events.",
        keyDifference:
          "The exchange ladder: nucleotides (recombination) and segments (reassortment) cross genomes; proteins (complementation) and coats (phenotypic mixing) cross phenotypes. HDV borrowing HBsAg from HBV never rewrites HDV's genome — the help dies with the coinfection.",
        clue: "Any helper-virus or rescue question.",
      },
    ],
    pivots: [
      {
        lookAlike: "⊕ strand vs ⊝ strand ssRNA",
        differentiator: "mRNA-ready vs polymerase-dependent",
        correctPath:
          "⊕ stranded (≈ mRNA): retro-, toga-, flavi-, corona-, hepe-, calici-, and picornaviruses — the naked genome is infectious because the cell can read it at once. ⊝ stranded: arena-, bunya-, paramyxo-, orthomyxo-, filo-, and rhabdoviruses — the naked genome is NOT infectious; the virion carries RNA-dependent RNA polymerase to transcribe ⊝ to ⊕.",
      },
      {
        lookAlike: "The heritable pair vs the transient pair (the exchange events)",
        differentiator: "Does the genome change?",
        correctPath:
          "HERITABLE: recombination (nucleotide crossover within base-sequence homology) and reassortment (whole segments, segmented viruses, antigenic shift — the 2009 H1N1 pandemic). TRANSIENT: complementation (a functional protein lent in trans — HDV requiring replicating HBV for HBsAg) and phenotypic mixing (A's genome in B's coat — a pseudovirion whose tropism lasts one generation).",
      },
    ],
    miniCase: {
      vignette:
        "In the spring of 2009, a respiratory illness spreads rapidly from Mexico along air-travel routes. Sequencing of early isolates shows an influenza A virus whose genome segments match several ancestors at once: two segments previously circulating in humans, three segments characteristic of North American swine strains, one segment from avian-origin North American swine lineages, and one segment from Eurasian swine strains. Patients have no cross-protective immunity to the new hemagglutinin. Within weeks the virus is detected on four continents and the WHO declares a pandemic.",
      question:
        "Which genetic mechanism best explains the emergence of this pandemic strain?",
      options: [
        {
          label: "A",
          text: "Reassortment of genome segments during coinfection of a host by viruses from different species",
          correct: true,
          why: "Correct. Influenza has a segmented genome; when two influenza viruses coinfect one cell, progeny virions can package a MIX of segments from both — reassortment. The 2009 novel H1N1 influenza A pandemic emerged via complex viral reassortment of genes from human, swine, and avian viruses, and the new segment combination produced a hemagglutinin the population had never seen (antigenic shift) — pandemic spread.",
        },
        {
          label: "B",
          text: "Crossing over between two viral chromosomes within regions of significant base sequence homology",
          why: "That is RECOMBINATION — a nucleotide-level trade gated by sequence homology. It would produce a chimeric gene, not a genome whose whole segments each trace to a different ancestor. The segment-level ancestry pattern in the vignette is the reassortment fingerprint.",
        },
        {
          label: "C",
          text: "A nonmutated virus supplying a functional envelope protein to a defective coinfecting virus",
          why: "That is COMPLEMENTATION — protein rescue in trans with no genome change (the HDV-HBsAg model). It explains helper-dependent propagation, not the assembly of a novel pandemic genome from three species.",
        },
        {
          label: "D",
          text: "Genome of virus A packaged in the surface proteins of virus B, changing its tropism",
          why: "That is PHENOTYPIC MIXING — a one-generation coat swap (a pseudovirion) that changes infectivity but not the genome, and the next progeny reverts to its own coat. It cannot build a new strain whose segments are stably inherited.",
        },
        {
          label: "E",
          text: "Progressive accumulation of point mutations in hemagglutinin and neuraminidase under immune selection",
          why: "That is antigenic DRIFT — the gradual year-to-year mutation of circulating strains. It changes epitopes gradually, not whole segments at once, and it does not explain segments tracing simultaneously to human, swine, and avian lineages.",
        },
      ],
      reasoning:
        "The vignette stacks the reassortment identifiers: a SEGMENTED genome (influenza), segments with DIFFERENT ANCESTORS (human, swine, avian — the 2009 H1N1 signature), a NOVEL hemagglutinin with no population immunity, and PANDEMIC spread (the potential to cause antigenic shift). Reassortment of genome segments is the only listed event that moves whole segments between strains; recombination works at the nucleotide level within homologous regions, complementation and phenotypic mixing change no genome at all, and drift accumulates point mutations rather than reshuffling segments.",
    },
  },
  mnemonics: [
    {
      code: "“Nucleotides, segments, proteins, coats — the exchange ladder.”",
      meaning:
        "KYP's key for the four genetics events, graded by what physically crosses: RECOMBINATION trades nucleotides (crossing over within base-sequence homology — genome changes); REASORTMENT trades whole segments (segmented viruses — influenza's antigenic shift; genome changes); COMPLEMENTATION trades a protein (the functional protein serves both viruses — HDV borrowing HBsAg from HBV; no genome change); PHENOTYPIC MIXING trades a coat (A's genome in B's surface proteins — a pseudovirion whose tropism lasts one generation; no genome change).",
      memorizes: "The four exchange events and what crosses in each",
      whenToUse: "Any coinfection or genetic-exchange question.",
      clinical: "Ask what crossed and whether the genome changed.",
    },
    {
      code: "“Plus is ready; minus brings its own printer.”",
      meaning:
        "KYP's key for the naked-genome rule: ⊕ strand ssRNA (≈ mRNA) is ribosome-ready — the naked genome alone is infectious (with most dsDNA genomes, except poxviruses and HBV). ⊝ strand ssRNA and dsRNA are not infectious as naked genomes — they lack the required polymerases, so their virions carry RNA-DEPENDENT RNA POLYMERASE, the printer that transcribes ⊝ to ⊕.",
      memorizes: "The genome-infectivity rule",
      whenToUse: "Any purified-genome transfection or polymerase-dependence question.",
      clinical: "The carried polymerase is also the antiviral drug target.",
    },
    {
      code: "“The costume changes or the script changes.”",
      meaning:
        "KYP's key for the heritable/transient split: the SCRIPT (genome) changes in recombination and reassortment — new strains, antigenic shift, pandemics. The COSTUME (phenotype) changes in complementation (a lent protein) and phenotypic mixing (a borrowed coat that sets one round of tropism, then progeny 2 wears its own type A coat again).",
      memorizes: "Which exchange events are heritable",
      whenToUse: "Any question about what a hybrid virus passes to its progeny.",
      clinical: "One-generation changes (pseudovirion tropism) never found a new strain.",
    },
  ],
  rapidReview: {
    s30: [
      "Recombination: genes exchange between 2 chromosomes by crossing over within regions of significant base sequence homology",
      "Reassortment: segmented genomes (influenza) swap whole segments — 2009 H1N1 = human + swine + avian; antigenic shift",
      "Complementation: nonmutated virus makes the functional protein serving both — HDV needs replicating HBV to supply HBsAg",
      "Phenotypic mixing: virus A genome in virus B coat (pseudovirion) — B coat sets tropism; progeny 2 reverts to the A coat",
      "Naked-genome rule: most dsDNA (except poxviruses, HBV) + ⊕ ssRNA infectious; ⊝ ssRNA + dsRNA not — virions carry RdRp (⊝ → ⊕)",
    ],
    m3: [
      "DNA viruses: all dsDNA except Parvoviridae (ssDNA); all linear except papilloma-, polyoma-, hepadnaviruses (circular)",
      "RNA viruses: all ssRNA except Reoviridae (dsRNA); segmented set = Bunya-, Orthomyxo-, Arena-, Reoviruses",
      "Envelopes: plasma membrane on exit; EXCEPTION herpesviruses — nuclear membrane",
      "Enveloped DNA viruses: herpesvirus, hepadnavirus, poxvirus",
      "Phage anatomy: capsid, nucleic acid, collar, core, helical sheath, base plate, spikes",
    ],
    m10: [
      "⊕ stranded roster: retro-, toga-, flavi-, corona-, hepe-, calici-, picornaviruses",
      "⊝ stranded roster: arena-, bunya-, paramyxo-, orthomyxo-, filo-, rhabdoviruses",
      "Both source pages (books 159-160) are pure vector — the only M-topic so far with zero rasters",
      "The banner typo 'MICROCIOLOGY—VIROLOGY' prints on books 159-160 (documented; the VLM census auto-normalized it to MICROBIOLOGY)",
      "FA's printed mnemonics (Part of a virus; Repeato-virus; the retro-toga-party sentence; Always bring polymerase; BOAR; helpful protection) are quoted in the table block for verification only — KYP's own keys are in the mnemonics block",
    ],
  },
  recall: [
    {
      q: "Walk the four viral-genetics events with what crosses in each.",
      a: "RECOMBINATION: nucleotides — crossing over within regions of significant base sequence homology. REASORTMENT: whole genome segments — segmented viruses (eg, influenza); the 2009 novel H1N1 pandemic emerged via complex reassortment of human, swine, and avian genes; potential to cause antigenic shift. COMPLEMENTATION: a functional protein lent in trans — the nonmutated virus makes the protein serving both (HDV requires replicating HBV to supply HBsAg). PHENOTYPIC MIXING: a coat — virus A's genome in virus B's surface proteins (pseudovirion); the B coat determines tropism; progeny 2 has the type A coat encoded by its own genome.",
    },
    {
      q: "Give the naked-genome infectivity rule with its mechanism.",
      a: "Naked nucleic acids of most dsDNA viruses (EXCEPT poxviruses and HBV) and ⊕ strand ssRNA viruses are infectious. Naked nucleic acids of ⊝ strand ssRNA and dsRNA viruses are NOT infectious because they lack the required polymerases to replicate — virions of ⊝ strand ssRNA viruses carry RNA-dependent RNA polymerases to transcribe the ⊝ strand to ⊕.",
    },
    {
      q: "Recite the DNA-virus and RNA-virus genome rosters.",
      a: "DNA: all dsDNA (like our cells) except Parvoviridae (ssDNA); all linear except papilloma-, polyoma-, and hepadnaviruses (circular). RNA: all ssRNA except Reoviridae (dsRNA); ⊕ stranded (≈ mRNA): retro-, toga-, flavi-, corona-, hepe-, calici-, picornaviruses; ⊝ stranded: arena-, bunya-, paramyxo-, orthomyxo-, filo-, rhabdoviruses; segmented: bunya-, orthomyxo-, arena-, reoviruses.",
    },
    {
      q: "State the envelope rule with its exception and the enveloped-DNA set.",
      a: "Enveloped viruses generally acquire envelopes from the PLASMA MEMBRANE when they exit the cell; the exceptions are HERPESVIRUSES, which acquire envelopes from the NUCLEAR MEMBRANE. The enveloped DNA viruses: herpesvirus, hepadnavirus, poxvirus.",
    },
    {
      q: "Name the seven bacteriophage parts and the labels of the three printed architectures.",
      a: "PHAGE: capsid (head shell), nucleic acid (inside the head), collar (below the head), core (inner tail channel), helical sheath (contractile tail around the core), base plate (bottom platform), spikes (attachment pins). ARCHITECTURES: naked (nonenveloped) virus with icosahedral capsid (capsid + nucleic acid); enveloped virus with icosahedral capsid (surface protein + lipid bilayer + capsid + nucleic acid); enveloped virus with helical capsid (surface protein + lipid bilayer + helical capsid with viral RNA).",
    },
  ],
  related: [
    {
      title: "Bacterial Genetics: Transformation, Conjugation, Transduction",
      topicId: "bacterial-genetics",
      note: "M7's bacterial gene-transfer trio is the prokaryotic counterpart of this note's exchange ladder — transformation (uptake), conjugation (pilus transfer), and transduction (phage-mediated) versus the viral recombination-reassortment-complementation-phenotypic-mixing set, with the phage anatomy here explaining the vector in transduction.",
    },
    {
      title: "DNA Mutations & Repair",
      topicId: "dna-mutations",
      note: "The biochemistry chapter's crossover and repair machinery is the enzyme set behind viral recombination — crossing over within regions of significant base sequence homology is the same homology-dependent exchange, which is why recombination is homology-gated.",
    },
    {
      title: "Active vs Passive Immunity & Vaccine Types",
      topicId: "active-passive-immunity",
      note: "The reassortment-antigenic-shift mechanism is why influenza vaccines need annual redesign — the vaccine chapter's killed, subunit, and mRNA platforms answer the shift problem that this note's exchange ladder creates.",
    },
  ],
  crossLinks: [
    {
      subject: "Pharmacology (Antiviral Agents)",
      connection:
        "The polymerase rule is the antiviral anchor: ⊝ strand ssRNA virions must carry RNA-dependent RNA polymerase to transcribe ⊝ to ⊕, making the carried enzyme the selective target — the mechanism logic behind the antiviral therapy topics ahead.",
    },
    {
      subject: "Biochemistry (Nucleic Acid Structure)",
      connection:
        "The genome rosters translate directly into nucleic-acid chemistry: dsDNA, ssDNA, circular vs linear genomes, and mRNA-equivalent ⊕ strands — the structural biology vocabulary the viral family map is written in.",
    },
    {
      subject: "Immunology (Vaccines and Herd Immunity)",
      connection:
        "Antigenic shift via reassortment is the reason influenza escapes population immunity and requires reformulated vaccines — the immune-response chapter's specificity logic meets this chapter's genome-swapping mechanism.",
    },
    {
      subject: "Microbiology (Emerging Infections)",
      connection:
        "The 2009 H1N1 pandemic is the zoonotic-emergence archetype: reassortment in a coinfected host mixing human, swine, and avian segments produced a pandemic strain — the event template for every novel-virus epidemiology stem.",
    },
  ],
};
