import type { KypUsMLENote } from "../types";

// Biochemistry — Molecular (M1). 
// Source: First Aid 2026, Part 1 pdf 58 / book 36 (DNA replication)

export const dnaReplication: KypUsMLENote = {
  id: "dna-replication",
  title: "DNA Replication",
  subtitle: "One rule — polymerase only writes 5′→3′ — and one antiparallel helix force every other fact on this page into place: a fork, a fast lane, and a fragment lane.",
  subject: "Biochemistry",
  system: "Section II · High-Yield General Principles — Molecular",
  pilotCategory: "Molecular biology — replication machinery",
  difficulty: 3,
  readTime: 13,
  sourceRef: "First Aid 2026, Part 1 pp. 36 (DNA replication)",
  tags: [
    "replication fork",
    "Okazaki fragments",
    "DNA polymerase III",
    "leading strand",
    "lagging strand",
    "telomerase",
    "topoisomerase",
  ],
  core: {
    what: "DNA replication copies the genome before cell division. It is semiconservative (each new double helix keeps one parental strand), starts at origin sequences, and is carried out at Y-shaped replication forks by a crew of enzymes: helicase unwinds, single-stranded binding proteins protect, topoisomerases relieve supercoils, primase lays RNA primers, DNA polymerase III builds, DNA polymerase I swaps primer for DNA, and ligase seals.",
    why: "The fork is a two-question-per-exam machine. Every enzyme is a drug target (fluoroquinolones, irinotecan, etoposide), a disease lock (BLM helicase → Bloom syndrome), or the reason a nucleotide analog can terminate a chain. Miss the directionality logic and every one of those questions becomes a guess.",
    keyIdea: "DNA polymerase only adds deoxynucleotides to a free 3′-OH — synthesis is strictly 5′→3′. Because the two template strands are antiparallel, the strand whose template runs 3′→5′ toward the fork is copied continuously (leading), while the other must be copied backward in short Okazaki fragments, each started by an RNA primer and finished by pol I + ligase (lagging).",
  },
  mechanisms: [
    {
      id: "leading-strand-synthesis",
      title: "Leading strand — continuous synthesis with the fork",
      context: "The template that reads 3′→5′ toward the fork",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Origin melts; helicase opens the fork",
            sublabel: "Origin — AT-rich consensus sequence (like TATA boxes); single in prokaryotes, multiple in eukaryotes.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Single-stranded binding proteins coat the template",
            sublabel: "Molecular — Prevent the separated strands from reannealing or being degraded by nucleases.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Primase lays ONE RNA primer",
            sublabel: "Molecular — DNA polymerases cannot start a chain from nothing; they can only extend a primed 3′-OH.",
            variant: "process",
          },
          {
            id: "s3",
            label: "DNA pol III elongates continuously, 5′→3′, toward the fork",
            sublabel: "Pathway — The template reads 3′→5′ in the fork's direction, so the new strand grows in the same direction the fork moves. Pol III also proofreads with 3′→5′ exonuclease.",
            variant: "process",
          },
          {
            id: "s4",
            label: "Topoisomerases stay ahead of the fork",
            sublabel: "Pathway — Unwinding winds up supercoils ahead; TOP I nicks one strand, TOP II both, to add or remove supercoils.",
            variant: "process",
          },
          {
            id: "o1",
            label: "One new strand, one parental strand — semiconservative",
            sublabel: "Effect: The leading strand is finished as one continuous polymer after a single priming event.",
            variant: "output",
          },
          {
            id: "o2",
            label: "“5ynth3sis” — 5′→3′, always",
            sublabel: "Clinical: Drugs with a modified 3′ OH stop addition of the next nucleotide — chain termination.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "strands exposed" },
          { from: "s1", to: "s2", label: "template ready" },
          { from: "s2", to: "s3", label: "3′-OH provided" },
          { from: "s3", to: "o1", label: "continuous growth" },
          { from: "s4", to: "s3", label: "supercoils relieved ahead" },
          { from: "s3", to: "o2" },
        ],
        caption:
          "Template polarity, not enzyme preference, decides which strand leads: 3′→5′ toward the fork means the polymerase can simply run with the helicase.",
      },
    },
    {
      id: "lagging-strand-cycle",
      title: "Lagging strand — the Okazaki fragment cycle",
      context: "The template that reads 5′→3′ toward the fork",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Fork exposes new template reading 5′→3′ toward the fork",
            sublabel: "Copying it forward would demand 3′→5′ synthesis — polymerase cannot do that.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Primase lays a fresh RNA primer near the fork",
            sublabel: "Molecular — Each fragment gets its own primer.",
            variant: "process",
          },
          {
            id: "s2",
            label: "DNA pol III extends the primer AWAY from the fork",
            sublabel: "Pathway — Still 5′→3′ — but pointing backward relative to fork movement. The result is an Okazaki fragment.",
            variant: "process",
          },
          {
            id: "s3",
            label: "Pol I removes each RNA primer and replaces it with DNA",
            sublabel: "Molecular — 5′→3′ exonuclease chews out primer; 5′→3′ synthesis fills DNA in its place.",
            variant: "process",
          },
          {
            id: "s4",
            label: "DNA ligase seals the nick",
            sublabel: "Molecular — Catalyzes the phosphodiester bond within double-stranded DNA, joining adjacent Okazaki fragments.",
            variant: "process",
          },
          {
            id: "o1",
            label: "A continuous lagging strand is stitched together",
            sublabel: "Effect: Repeat primase → pol III → pol I → ligase for every fragment, and the 'backward' strand is completed.",
            variant: "output",
          },
          {
            id: "o2",
            label: "Ligase links DNA — “links the Okazaki fragments”",
            sublabel: "Clinical: Ligase is the seal-writer; pol I is the primer-remover. Both are prokaryote-labeled on this page.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "new template exposed" },
          { from: "s1", to: "s2", label: "primer laid" },
          { from: "s2", to: "s3", label: "fragment complete" },
          { from: "s3", to: "s4", label: "gap filled with DNA" },
          { from: "s4", to: "o1", label: "nick sealed" },
          { from: "s4", to: "o2" },
        ],
        caption:
          "The lagging strand is the same chemistry performed in installments: primase → pol III → pol I → ligase, once per Okazaki fragment.",
      },
    },
    {
      id: "telomerase-end-replication",
      title: "Telomerase — protecting the ends of linear chromosomes",
      context: "Eukaryotic chromosome ends (telomeres)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A linear chromosome reaches its very end",
            sublabel: "Eukaryotic problem — a bacterial circle has no end; a linear chromosome does.",
            variant: "input",
          },
          {
            id: "s1",
            label: "The final primer is removed from the lagging strand",
            sublabel: "Molecular — Pol I deletes the RNA primer, and upstream of it there is no primed 3′-OH left to fill that stretch — the end would shorten with every duplication.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Telomerase extends the 3′ end with TTAGGG repeats",
            sublabel: "Molecular — A reverse transcriptase (RNA-dependent DNA polymerase) carrying its own RNA template adds DNA (TTAGGG) to the 3′ ends.",
            variant: "process",
          },
          {
            id: "s3",
            label: "The overhang restores a substrate for completion",
            sublabel: "Pathway — The extended 3′ tail lets primase/pol fill in the gap so no genetic material is lost with each duplication.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Upregulated in progenitor cells and often in cancer",
            sublabel: "Clinical: Dividing cells and many tumors keep telomerase ON — replicative immortality.",
            variant: "output",
          },
          {
            id: "o2",
            label: "Downregulated in aging and progeria",
            sublabel: "Clinical: Falling telomerase activity tracks with cellular aging and premature-aging syndromes.",
            variant: "output",
          },
          {
            id: "o3",
            label: "“Telomerase TAGs for Greatness and Glory”",
            sublabel: "Clinical: TAG = TTAGGG, the telomeric repeat.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "last primer removed" },
          { from: "s1", to: "s2", label: "end would shorten" },
          { from: "s2", to: "s3", label: "TTAGGG added" },
          { from: "s3", to: "o1" },
          { from: "s3", to: "o2" },
          { from: "s3", to: "o3" },
        ],
        caption:
          "Telomerase is a reverse transcriptase that pays the end-replication debt in TTAGGG repeats — the reason progenitor and cancer cells can divide indefinitely without eating into their genes.",
      },
    },
  ],
  blocks: [
    {
      kind: "text",
      title: "Three facts organize the entire fork",
      body: [
        "Replication occurs in the 5′→3′ direction in both continuous and discontinuous (Okazaki fragment) fashion — the memory hook “5ynth3sis” stores it. It is semiconservative: each daughter duplex keeps one parental strand, which is why every enzyme on this page works on a template it can read.",
        "The process is more complex in eukaryotes than in prokaryotes, but the enzyme roster is analogous — First Aid lists the prokaryote names (DNA polymerase III and I are labeled prokaryotes only) because those are the names the exam uses. Eukaryotes run the same logic with differently named machinery.",
        "Origins are particular AT-rich consensus sequences (like TATA box regions) where the helix melts easily — single origin (oriC) in prokaryotes, multiple origins in eukaryotes so a large genome can be copied in time.",
      ],
    },
    {
      kind: "table",
      title: "The machinery of the fork — every player, one line each",
      intro: "Letter-for-letter the exam table: what each component does, and the hook that locks it in.",
      columns: ["Component", "Job at the fork", "High-yield hooks"],
      rows: [
        [
          "Origin of replication",
          "Consensus sequence where replication begins",
          "Single (prokaryotes) vs multiple (eukaryotes) · AT-rich, like TATA boxes",
        ],
        [
          "Replication fork",
          "Y-shaped region where leading and lagging strands are synthesized",
          "Two strands, two fates — because of antiparallel templates",
        ],
        [
          "Helicase",
          "Unwinds the DNA template at the replication fork",
          "“Halicase halves DNA” · deficient in Bloom syndrome (BLM mutation)",
        ],
        [
          "Single-stranded binding proteins",
          "Prevent strands from reannealing or degradation by nucleases",
          "They hold the doors open — no catalysis",
        ],
        [
          "DNA topoisomerases",
          "Create a single- (TOP I) or double- (TOP II) stranded break to add or remove supercoils",
          "Euk: irinotecan/topotecan → TOP I · etoposide/teniposide → TOP II · Prok: fluoroquinolones → TOP II (DNA gyrase) + TOP IV",
        ],
        [
          "Primase",
          "Makes the RNA primer DNA pol III needs to initiate",
          "No primer, no polymerase — both strands start from RNA",
        ],
        [
          "DNA polymerase III",
          "Elongates leading strand and lagging fragments by adding deoxynucleotides to the 3′ end",
          "Prokaryotes only · 5′→3′ synthesis + 3′→5′ proofreading exonuclease",
        ],
        [
          "DNA polymerase I",
          "Degrades the RNA primer and replaces it with DNA",
          "Prokaryotes only · same functions as pol III plus 5′→3′ exonuclease for primer excision",
        ],
        [
          "DNA ligase",
          "Catalyzes a phosphodiester bond within double-stranded DNA",
          "Joins Okazaki fragments — “ligase links DNA”",
        ],
        [
          "Telomerase",
          "Adds DNA (TTAGGG) to the 3′ ends of chromosomes",
          "Eukaryotes only · reverse transcriptase (RNA-dependent DNA pol) · ↑ progenitor cells & cancer · ↓ aging & progeria",
        ],
      ],
      caption:
        "Chain-termination drugs exploit the polymerase row: a modified 3′ OH prevents addition of the next nucleotide.",
    },
    {
      kind: "visual",
      visualId: "replication-fork-machinery",
      title: "The replication fork — machinery and directionality",
      caption:
        "A fork moving right: origin and semiconservative template strands, helicase opening the junction, SSBP holding templates open, topoisomerase relieving supercoils ahead, pol III running continuously on the leading strand, and the primase → pol III → pol I → ligase cycle stitching Okazaki fragments on the lagging strand — with 5′/3′ polarity marked on every strand.",
      notice:
        "Follow the polarity, not the enzymes: the leading template reads 3′→5′ toward the fork so its polymerase travels with the fork; the lagging template reads the other way, so every fragment is built backward, away from the fork. The close-up panel and the clinical-locks panel condense the directionality rule and the drug targets.",
    },
    {
      kind: "text",
      title: "Why one strand leads and one lags — the antiparallel argument",
      body: [
        "DNA polymerase has exactly one talent: it extends a pre-existing chain by adding a deoxynucleotide to a free 3′-OH. That fixes the writing direction at 5′→3′ and nothing can change it — not the species, not the strand, not the drug.",
        "At a fork, the two parental strands are antiparallel. One template happens to run 3′→5′ in the direction the fork is moving: copying it means writing toward the fork, in one unbroken pass — the leading strand. The other template runs 5′→3′ toward the fork: copying it forward would require 3′→5′ synthesis, which no polymerase can do. The cell's workaround is to copy it in short backward bursts — Okazaki fragments — each begun with its own RNA primer and stitched together afterward: the lagging strand.",
        "This is why 'Which enzyme removes the RNA primer?' and 'Which enzyme joins Okazaki fragments?' are really directionality questions in disguise. The primer exists because polymerase cannot start chains; the fragments exist because polymerase cannot write backward.",
      ],
    },
    {
      kind: "compare",
      title: "DNA polymerase III vs DNA polymerase I — the classic confusion",
      intro: "Same chemistry, opposite chores. Both are prokaryote-labeled in First Aid, both elongate 5′→3′ and proofread 3′→5′ — only the primer handling separates them.",
      columns: ["DNA polymerase III", "DNA polymerase I"],
      rows: [
        {
          label: "Core job",
          a: "Elongates the leading strand; extends lagging-strand fragments until it reaches the primer of the preceding fragment",
          b: "Degrades the RNA primer and replaces it with DNA",
        },
        {
          label: "Synthesis",
          a: "5′→3′ deoxynucleotide addition to the 3′ end",
          b: "5′→3′ — same chemistry, short fill-in stretch",
        },
        {
          label: "Exonuclease",
          a: "3′→5′ proofreading",
          b: "3′→5′ proofreading PLUS 5′→3′ exonuclease — the primer-excising direction",
        },
        {
          label: "Exam phrasing",
          a: "“Which enzyme elongates…” / “adds nucleotides to the 3′ end…”",
          b: "“Which enzyme removes the RNA primer…” / “excises RNA and fills the gap…”",
        },
        {
          label: "Think of it as",
          a: "The builder — writes the bulk of every new strand",
          b: "The editor — swaps the RNA scaffolding for DNA",
        },
      ],
    },
    {
      kind: "list",
      title: "Prokaryote vs eukaryote — the differences that get tested",
      intro: "First Aid labels the enzymes so you can attribute them: the exam loves asking which organism a component belongs to.",
      items: [
        {
          lead: "Origins",
          text: "Prokaryotes: a single origin; eukaryotes: multiple origins firing so long chromosomes finish copying.",
        },
        {
          lead: "DNA pol III / pol I",
          text: "Prokaryotes only — those names are the E. coli machinery. Eukaryotes use differently named polymerases for the same jobs.",
        },
        {
          lead: "Topoisomerase targets",
          text: "Prokaryotic TOP II is DNA gyrase (plus TOP IV) — fluoroquinolones. Eukaryotic TOP I and TOP II — irinotecan/topotecan and etoposide/teniposide.",
        },
        {
          lead: "Telomerase",
          text: "Eukaryotes only — a circular bacterial chromosome has no ends to protect.",
        },
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title: "How the exam asks this page",
      body: "Three recurring shapes: (1) mechanism-of-action — fluoroquinolones inhibit DNA gyrase (prokaryotic TOP II); irinotecan/topotecan inhibit eukaryotic TOP I (“teCOne”); etoposide/teniposide inhibit eukaryotic TOP II (“boThside”). (2) Enzyme identity at the fork — helicase unwinds, SSBP protect, primase primes, pol III builds, pol I edits primers, ligase seals. (3) Chain termination — an analog with a modified 3′ OH can be added but the next nucleotide cannot: synthesis stops cold.",
    },
    {
      kind: "callout",
      variant: "why",
      title: "Why supercoils need a licensed locksmith",
      body: "Unwinding a helix at the fork winds the duplex ahead of it into overwound supercoils — like twisting a rope while holding the far end. Topoisomerases are the licensed locksmiths: TOP I makes a single-stranded nick, TOP II a double-stranded break, then reseals, adding or removing supercoils as needed. Poison the locksmith and replication stalls mid-turn — the whole logic of topoisomerase inhibitors.",
    },
  ],
  clinical: [
    {
      kind: "text",
      title: "Bloom syndrome — the helicase deficiency",
      body: [
        "Bloom syndrome results from a BLM gene mutation — a deficiency of the helicase that unwinds the DNA template at the replication fork. First Aid anchors it to this page as the replication-enzyme disease: when the fork cannot be opened properly, replication stress and genomic instability follow.",
        "Keep the association tight and minimal: BLM → helicase → Bloom syndrome. The exam will offer helicase alongside ligase, topoisomerase, and polymerase options — the discriminating word is 'unwinds.'",
      ],
    },
    {
      kind: "text",
      title: "Telomerase states — progenitor cells, cancer, aging, progeria",
      body: [
        "Telomerase is upregulated in progenitor cells and also often in cancer: cells that must divide many times keep their chromosome ends intact and acquire replicative persistence. This makes telomerase a conceptual marker for immortalized cell populations.",
        "Conversely, telomerase is downregulated in aging and progeria — with each duplication, ends erode slightly, and the loss tracks with cellular senescence and premature-aging phenotypes. One enzyme, two opposite clinical stories: ON in progenitors and cancer, OFF in aging and progeria.",
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A patient with metastatic disease receives irinotecan; the drug is described as poisoning a eukaryotic enzyme that relaxes DNA supercoils by making a single-stranded break.",
        discriminator: "Eukaryotic + single-stranded nick = topoisomerase I",
        concept: "Topoisomerase classification and its drug inhibitors",
        answer: "Irinotecan/topotecan inhibit eukaryotic TOP I — “teCOne”",
      },
      {
        stem: "A teenager treated with a fluoroquinolone for a urinary tract infection asks how the drug kills bacteria selectively.",
        discriminator: "Prokaryotic TOP II is DNA gyrase; human cells do not use gyrase",
        concept: "Species-specific topoisomerase targeting",
        answer: "Fluoroquinolones inhibit bacterial TOP II (DNA gyrase) and TOP IV",
      },
      {
        stem: "A molecular vignette: a nucleotide analog is incorporated into a growing strand by DNA polymerase; the analog lacks a normal hydroxyl at a specific sugar position.",
        discriminator: "A modified 3′ OH leaves no acceptor for the next phosphodiester bond",
        concept: "Chain termination",
        answer: "The next nucleotide cannot be added — DNA chain termination",
      },
      {
        stem: "An experiment asks which enzyme excises the RNA primer from an Okazaki fragment in bacteria.",
        discriminator: "The excision direction is 5′→3′ exonuclease activity",
        concept: "Division of labor between pol III and pol I",
        answer: "DNA polymerase I — degrades the RNA primer and replaces it with DNA",
      },
      {
        stem: "A research vignette about a tumor cell line that divides indefinitely without losing chromosomal DNA.",
        discriminator: "An RNA-dependent DNA polymerase adding TTAGGG repeats",
        concept: "Telomerase as a reverse transcriptase",
        answer: "Upregulated telomerase maintains telomeres in progenitor/cancer cells",
      },
    ],
    traps: [
      {
        a: "DNA polymerase III",
        b: "DNA polymerase I",
        whyConfused: "Adjacent numbers, same chemistry (both elongate 5′→3′ and proofread 3′→5′), both prokaryote-labeled.",
        keyDifference: "Pol III elongates the strand; pol I's unique extra is the 5′→3′ exonuclease that removes the RNA primer and fills the gap with DNA.",
        clue: "“Elongates/adds deoxynucleotides to the 3′ end” → pol III. “Removes the RNA primer / replaces RNA with DNA” → pol I.",
      },
      {
        a: "Helicase",
        b: "Topoisomerase",
        whyConfused: "Both 'loosen' DNA at the fork; both can appear in a list of four similar enzymes.",
        keyDifference: "Helicase unwinds the two strands AT the fork; topoisomerases cut and reseal one (TOP I) or both (TOP II) strands to relieve supercoils AHEAD of the fork.",
        clue: "“Unwinds” → helicase. “Relieves supercoils / makes a break to add or remove supercoils” → topoisomerase.",
      },
      {
        a: "DNA ligase",
        b: "DNA polymerase I",
        whyConfused: "Both 'finish' the lagging strand; both are correct answers to lagging-strand questions.",
        keyDifference: "Pol I swaps primer RNA for DNA (a replacement reaction); ligase seals the remaining nick with a phosphodiester bond within double-stranded DNA — no nucleotides involved.",
        clue: "“Joins Okazaki fragments / seals the nick” → ligase. “Primer removal” → pol I.",
      },
      {
        a: "Eukaryotic TOP II inhibitors",
        b: "Prokaryotic TOP II inhibitors",
        whyConfused: "Same enzyme class name, different organisms and drugs.",
        keyDifference: "Etoposide/teniposide poison eukaryotic TOP II; fluoroquinolones poison bacterial TOP II (DNA gyrase) and TOP IV.",
        clue: "Antibacterial selectivity → fluoroquinolone; anticancer eukaryotic target → etoposide.",
      },
    ],
    pivots: [
      {
        lookAlike: "A list-of-enzymes question naming helicase, topoisomerase, ligase, and primase",
        differentiator: "The verb in the stem: unwinds / relieves supercoils / joins fragments / makes RNA primer",
        correctPath: "Match the verb, not the vibe: unwind → helicase; supercoil → topoisomerase; join → ligase; prime → primase.",
      },
      {
        lookAlike: "Leading-strand vs lagging-strand attribute questions (number of primers, continuous vs discontinuous)",
        differentiator: "Which template polarity the strand is copying — 3′→5′ toward the fork or away from it",
        correctPath: "Template 3′→5′ toward the fork → continuous, one primer. Template 5′→3′ toward the fork → many primers, Okazaki fragments, pol I + ligase cleanup.",
      },
    ],
    miniCase: {
      vignette:
        "A 61-year-old woman with metastatic colorectal cancer begins a regimen that includes irinotecan. Her oncologist explains that the drug traps an enzyme while it is covalently attached to DNA during the relief of torsional strain. The targeted enzyme creates a single-stranded break in the DNA helix in this patient's cells.",
      question: "Which enzyme does irinotecan inhibit in this patient's tumor cells?",
      options: [
        {
          label: "A",
          correct: true,
          text: "Eukaryotic topoisomerase I",
          why: "Correct. Irinotecan (and topotecan) inhibit eukaryotic TOP I, the single-strand-breaking, supercoil-relieving enzyme — the “teCOne” pair.",
        },
        {
          label: "B",
          text: "Bacterial DNA gyrase",
          why: "Tempting because gyrase is a topoisomerase II — but it is the prokaryotic target of fluoroquinolones, irrelevant in a human tumor cell.",
        },
        {
          label: "C",
          text: "Eukaryotic topoisomerase II",
          why: "Close — TOP II makes a DOUBLE-stranded break and is the target of etoposide/teniposide, not irinotecan. The 'single-stranded break' clause excludes it.",
        },
        {
          label: "D",
          text: "DNA helicase",
          why: "Helicase does relax the fork region by unwinding strands, but it makes no DNA breaks and is not the target of irinotecan (helicase deficiency → Bloom syndrome).",
        },
        {
          label: "E",
          text: "DNA ligase",
          why: "Ligase seals nicks between Okazaki fragments; inhibiting it would not trap a covalent DNA-enzyme complex relieving torsional strain.",
        },
      ],
      reasoning:
        "Three clauses triangulate the answer: single-stranded break (TOP I, not TOP II), supercoil relief (topoisomerase, not helicase or ligase), and human cells (eukaryotic TOP I, not bacterial gyrase). Irinotecan/topotecan lock TOP I in that exact state.",
    },
  },
  mnemonics: [
    {
      code: "“5ynth3sis”",
      meaning: "The 5 and 3 inside the word: DNA synthesis always proceeds 5′→3′.",
      memorizes: "The one direction of all DNA polymerase activity",
      whenToUse: "Any question about polymerase direction, proofreading direction, or why the lagging strand exists.",
      clinical: "Chain-terminating drugs carry a modified 3′ OH — there is no acceptor left for the next nucleotide.",
    },
    {
      code: "“Telomerase TAGs for Greatness and Glory”",
      meaning: "TAG = the TTAGGG repeat telomerase adds to the 3′ ends of chromosomes. Greatness = progenitor/cancer cells (upregulated); Glory fades = aging/progeria (downregulated).",
      memorizes: "The telomeric repeat sequence + telomerase's clinical states",
      whenToUse: "Telomere, telomerase, replicative immortality, progeria, and cancer-biology questions.",
      clinical: "Telomerase is a reverse transcriptase (RNA-dependent DNA polymerase) — eukaryotes only.",
    },
    {
      code: "“teCOne” and “boThside”",
      meaning: "teCOne → irinotecan/topotecan inhibit TOP I (one strand cut). boThside → etoposide/teniposide inhibit TOP II (both strands cut).",
      memorizes: "Which eukaryotic topoisomerase each anticancer drug class inhibits",
      whenToUse: "Any question pairing an anticancer agent with its topoisomerase target.",
      clinical: "Fluoroquinolones are the antibacterial counterpart — prokaryotic TOP II (DNA gyrase) and TOP IV.",
    },
  ],
  rapidReview: {
    s30: [
      "Replication is 5′→3′ (“5ynth3sis”), semiconservative, continuous + discontinuous.",
      "Helicase unwinds at the fork; topoisomerase relieves supercoils ahead (TOP I = 1 strand, TOP II = 2).",
      "Primase makes the RNA primer; pol III elongates and proofreads (3′→5′ exonuclease).",
      "Pol I degrades the RNA primer and replaces it with DNA (5′→3′ exonuclease); ligase joins Okazaki fragments.",
      "Telomerase (euk, reverse transcriptase) adds TTAGGG to 3′ ends — ↑ cancer/progenitors, ↓ aging/progeria.",
    ],
    m3: [
      "Origins are AT-rich (like TATA boxes); single in prokaryotes, multiple in eukaryotes.",
      "SSBP prevent reannealing and nuclease degradation of separated template strands.",
      "Leading strand: template 3′→5′ toward the fork → continuous, one primer.",
      "Lagging strand: template 5′→3′ toward the fork → Okazaki fragments, each with its own primer, pol I cleanup, ligase sealing.",
      "BLM helicase mutation → Bloom syndrome.",
      "Chain-termination drugs have a modified 3′ OH — the next nucleotide cannot be added.",
    ],
    m10: [
      "Full enzyme table with prok/euk labels: pol III and pol I are prokaryote-labeled; telomerase is eukaryote-only.",
      "Topoisomerase pharmacology: euk TOP I = irinotecan/topotecan; euk TOP II = etoposide/teniposide; prok TOP II (gyrase) + TOP IV = fluoroquinolones.",
      "Telomerase = reverse transcriptase (RNA-dependent DNA polymerase) with its own RNA template; upregulated in progenitor cells and often cancer; downregulated in aging and progeria.",
      "Ligase catalyzes phosphodiester bond formation WITHIN a strand of double-stranded DNA — it joins, it never fills.",
      "Pol I = pol III activities + 5′→3′ exonuclease for primer excision — the only enzyme that both removes RNA and lays DNA in its place.",
      "Antiparallel template polarity is the reason for leading vs lagging — not enzyme preference.",
    ],
  },
  recall: [
    {
      q: "In which direction does DNA synthesis proceed, and what is the memory hook?",
      a: "5′→3′ — “5ynth3sis”. Polymerase only adds deoxynucleotides to a free 3′ end.",
    },
    {
      q: "Which enzyme unwinds the DNA template at the fork, and what syndrome results from its deficiency?",
      a: "Helicase — BLM mutation → Bloom syndrome.",
    },
    {
      q: "What is the difference between topoisomerase I and II?",
      a: "TOP I creates a single-stranded break; TOP II a double-stranded break — both to add or remove supercoils.",
    },
    {
      q: "Name the four enzymes of the lagging-strand cycle, in order.",
      a: "Primase (RNA primer) → DNA pol III (extends fragment) → DNA pol I (removes primer, fills with DNA) → DNA ligase (seals the nick).",
    },
    {
      q: "Which polymerase proofreads, and in which direction?",
      a: "Pol III and pol I both proofread with 3′→5′ exonuclease; pol I additionally excises primers with 5′→3′ exonuclease.",
    },
    {
      q: "What does telomerase add, to which end, and what is it classified as?",
      a: "Adds DNA (TTAGGG) to the 3′ ends of chromosomes; it is a reverse transcriptase (RNA-dependent DNA polymerase), eukaryotes only.",
    },
    {
      q: "Which fluoroquinolone target is the prokaryotic counterpart of etoposide's target?",
      a: "DNA gyrase (prokaryotic TOP II) — etoposide inhibits eukaryotic TOP II.",
    },
    {
      q: "Why do nucleotide analogs with a modified 3′ OH stop replication?",
      a: "Once incorporated, there is no 3′-OH acceptor for the next phosphodiester bond — chain termination.",
    },
  ],
  related: [
    {
      title: "DNA Repair Pathways",
      note: "Replication errors that escape proofreading become mismatches — the substrate for mismatch repair; bulky lesions and strand breaks are handled by the other four pathways.",
      topicId: "dna-repair",
    },
    {
      title: "Mutations in DNA",
      note: "When repair fails, the molecular outcomes are exactly the mutation vocabulary: silent, missense, nonsense, frameshift — the consequence ledger of a mis-copied fork.",
      topicId: "dna-mutations",
    },
    {
      title: "Chromatin Organization",
      note: "DNA and histone synthesis occur together in S phase — the nucleosome assembly that packages each newly replicated strand as it emerges from the fork.",
      topicId: "chromatin-organization",
    },
    {
      title: "Topoisomerase inhibitors in pharmacology",
      note: "Fluoroquinolones, etoposide, teniposide, irinotecan, and topotecan all act on the supercoil-relieving machinery introduced here.",
    },
    {
      title: "Telomeres in cancer biology",
      note: "Telomerase upregulation is a hallmark of replicative immortality in tumors — the clinical end of the end-replication story.",
    },
  ],
  crossLinks: [
    {
      subject: "Pharmacology",
      connection: "Fluoroquinolones (prokaryotic TOP II/IV), irinotecan/topotecan (eukaryotic TOP I), and etoposide/teniposide (eukaryotic TOP II) all poison replication machinery defined on this page.",
    },
    {
      subject: "Immunology",
      connection: "Bloom syndrome (BLM helicase deficiency) reappears with chromosomal instability and increased malignancy in immunodeficiency contexts.",
    },
    {
      subject: "Oncology",
      connection: "Telomerase is often upregulated in cancer — a mechanism of replicative immortality that tumor cells exploit.",
    },
    {
      subject: "Genetics",
      connection: "Progeria and aging phenotypes connect to downregulated telomerase and progressive telomere shortening.",
    },
  ],
};
