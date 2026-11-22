import type { KypUsMLENote } from "../types";

// Biochemistry — Molecular (M2).
// Source: First Aid 2026, Part 1 pdf 62–63 / book 40–41
// (RNA processing; RNA polymerases; Introns vs exons; Splicing of pre-mRNA)

export const rnaProcessing: KypUsMLENote = {
  id: "rna-processing",
  title: "RNA Processing & Splicing",
  subtitle:
    "Three polymerases, three modifications, one lariat: the nuclear assembly line that turns a raw hnRNA transcript into an export-ready mRNA — and the toxin, antibody, and mutation set that breaks it.",
  subject: "Biochemistry",
  system: "Section II · High-Yield General Principles — Molecular",
  pilotCategory: "Molecular biology — transcription and RNA processing",
  difficulty: 3,
  readTime: 14,
  sourceRef: "First Aid 2026, Part 1 pp. 40–41 (RNA processing; RNA polymerases; introns vs exons; splicing of pre-mRNA)",
  tags: [
    "hnRNA",
    "mRNA processing",
    "RNA polymerase II",
    "alpha-amanitin",
    "spliceosome",
    "snRNP",
    "lariat",
    "alternative splicing",
  ],
  core: {
    what: "In eukaryotes the initial transcript is heterogeneous nuclear RNA (hnRNA), which is modified into mRNA by three nuclear steps — capping of the 5′ end (7-methylguanosine, cotranscriptional), polyadenylation of the 3′ end (~200 A's, posttranscriptional), and splicing out of introns (posttranscriptional) by a spliceosome of snRNPs. Three RNA polymerases divide the work: pol I makes rRNA (rampant, nucleolus), pol II makes mRNA (massive) plus miRNA and snRNA, pol III makes 5S rRNA and tRNA (tiny).",
    why: "This page carries one of the highest-density toxin/disease clusters in molecular biology: α-amanitin (death cap mushroom) poisoning pol II, rifamycins acting only on the prokaryotic polymerase, anti-U1 snRNP antibodies in SLE/MCTD, and SMN loss in spinal muscular atrophy — each anchored to a specific machine defined here. The mRNA anatomy also supplies the vocabulary for every translation question that follows.",
    keyIdea: "Number the polymerases in the order their products are used in protein synthesis — rRNA (I), mRNA (II), tRNA (III) — and read processing as a three-step maturation: cap while transcribing, tail and splice afterward. Only capped, tailed, spliced transcript is called mRNA.",
  },
  mechanisms: [
    {
      id: "hnrna-to-mrna-maturation",
      title: "hnRNA → mRNA — the three-step maturation",
      context: "Nucleus of a eukaryotic cell",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "RNA polymerase II transcribes the gene → hnRNA",
            sublabel: "Molecular — the initial transcript is heterogeneous nuclear RNA; it is NOT yet mRNA.",
            variant: "input",
          },
          {
            id: "s1",
            label: "5′ capping — 7-methylguanosine added (cotranscriptional)",
            sublabel: "Molecular — the cap goes on while transcription is still running; eIFs later use it to start translation.",
            variant: "process",
          },
          {
            id: "s2",
            label: "3′ polyadenylation — ~200 A's added at AAUAAA (posttranscriptional)",
            sublabel: "Molecular — poly-A polymerase does not require a template; AAUAAA is the polyadenylation signal.",
            variant: "process",
          },
          {
            id: "s3",
            label: "Splicing — introns out, exons ligated (posttranscriptional)",
            sublabel: "Molecular — the spliceosome performs the surgery; only then is the transcript called mRNA.",
            variant: "process",
          },
          {
            id: "o1",
            label: "mRNA exported to the cytosol for translation",
            sublabel: "Output — mRNA is transported out of the nucleus to be translated in the cytosol.",
            variant: "output",
          },
          {
            id: "x1",
            label: "Mutation in the polyadenylation signal → early degradation prior to translation",
            sublabel: "Clinical — First Aid's failure mode: a broken AAUAAA means the tail never lands and the transcript is destroyed.",
            variant: "inhibit",
          },
          {
            id: "x2",
            label: "Kozak mutation → impaired initiation of translation",
            sublabel: "Clinical — the Kozak sequence is the initiation site in most eukaryotic mRNA; damaging it impairs small-subunit binding and ↓ protein synthesis.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "while transcribing" },
          { from: "s1", to: "s2", label: "transcript complete" },
          { from: "s2", to: "s3" },
          { from: "s3", to: "o1", label: "capped + tailed + spliced = mRNA" },
          { from: "x1", to: "s2", type: "inhibit", label: "no tail" },
          { from: "x2", to: "o1", type: "inhibit", label: "initiation fails" },
        ],
        caption:
          "Maturation is a strict sequence with two named failure modes: no poly-A signal → early degradation before translation; damaged Kozak → ribosome cannot start. Quality control continues in the cytosol at P-bodies, which store or degrade mRNAs.",
      },
    },
    {
      id: "spliceosome-lariat-cycle",
      title: "The spliceosome — GU, branch point A, AG, and the lariat",
      context: "Pre-mRNA intron removal",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Primary transcript combines with snRNPs and other proteins → spliceosome",
            sublabel: "Molecular — snRNPs are snRNA bound to proteins (eg, Smith [Sm]); the complex assembles on the intron.",
            variant: "input",
          },
          {
            id: "s1",
            label: "U1 snRNP recognizes the 5′ splice site (GU); U2 snRNP docks at the branch point A",
            sublabel: "Molecular — introns typically begin with GU and end with AG; the branch adenine carries the reactive 2′-OH.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Cleavage at the 5′ splice site — lariat-shaped intermediate generated",
            sublabel: "Molecular — the branch A 2′-OH attacks the GU donor, folding the intron into a loop with a 2′–5′ bond.",
            variant: "process",
          },
          {
            id: "s3",
            label: "Cleavage at the 3′ splice site — lariat released, 2 exons joined",
            sublabel: "Pathway — the exon 1 3′-OH attacks the AG acceptor; exons ligate precisely, the intron lariat is degraded.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Mature mRNA: exons ligated, intron discarded",
            sublabel: "Output — the finished splice feeds directly into export and translation.",
            variant: "output",
          },
          {
            id: "x1",
            label: "↓ SMN protein → snRNP assembly fails",
            sublabel: "Clinical — spinal muscular atrophy: congenital degeneration of anterior horn motor neurons → symmetric weakness (hypotonia, “floppy baby”).",
            variant: "inhibit",
          },
          {
            id: "x2",
            label: "Anti-U1 snRNP antibodies",
            sublabel: "Clinical — associated with SLE, mixed connective tissue disease, and other rheumatic diseases.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "assembly" },
          { from: "s1", to: "s2", label: "first cleavage" },
          { from: "s2", to: "s3", label: "second cleavage" },
          { from: "s3", to: "o1", label: "exon ligation" },
          { from: "x1", to: "trigger", type: "inhibit", label: "no snRNPs" },
          { from: "x2", to: "s1", type: "inhibit", label: "autoimmune attack" },
        ],
        caption:
          "Two transesterifications, one lariat: the spliceosome reads GU…AG marks, uses the branch A to noose the intron, and releases a clean exon-exon junction — with SMA and anti-U1 autoimmunity as its two clinical flags.",
      },
    },
    {
      id: "rna-polymerase-portfolio",
      title: "The three eukaryotic RNA polymerases — division of labor",
      context: "Who makes which RNA — and what poisons each",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Transcription demand: rRNA, mRNA, tRNA",
            sublabel: "Molecular — I, II, III are numbered in the same order that their products are used in protein synthesis.",
            variant: "input",
          },
          {
            id: "s1",
            label: "RNA pol I → rRNA (rampant) — nucleolus only",
            sublabel: "Molecular — the most abundant RNA type; assembled in the nucleolus.",
            variant: "process",
          },
          {
            id: "s2",
            label: "RNA pol II → mRNA (massive) + miRNA + snRNA",
            sublabel: "Molecular — pol II opens DNA at the promoter site; no proofreading function, but can initiate chains.",
            variant: "process",
          },
          {
            id: "s3",
            label: "RNA pol III → 5S rRNA + tRNA (tiny)",
            sublabel: "Molecular — the small stuff: 5S ribosomal RNA and transfer RNAs.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Prokaryotes: one multisubunit RNA polymerase makes all 3 kinds",
            sublabel: "Comparative — the bacterial machine; rifamycins (rifampin, rifabutin) inhibit DNA-dependent RNA polymerase in prokaryotes.",
            variant: "output",
          },
          {
            id: "x1",
            label: "α-Amanitin ⊣ RNA pol II",
            sublabel: "Clinical — death cap mushroom (Amanita phalloides): dysentery and severe hepatotoxicity if ingested.",
            variant: "inhibit",
          },
          {
            id: "x2",
            label: "Dactinomycin intercalates ⊣ both prokaryotic and eukaryotic RNA polymerase",
            sublabel: "Pharmacology — the nonselective blocker (anticancer use).",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1" },
          { from: "trigger", to: "s2" },
          { from: "trigger", to: "s3" },
          { from: "s2", to: "o1", label: "euk vs prok contrast" },
          { from: "x1", to: "s2", type: "inhibit", label: "mRNA halt" },
          { from: "x2", to: "s1", type: "inhibit" },
          { from: "x2", to: "s3", type: "inhibit" },
        ],
        caption:
          "One rampart (I), one factory (II), one boutique (III) — and the poison map: α-amanitin picks off II specifically, dactinomycin blocks everything, rifamycins work only on the single bacterial enzyme.",
      },
    },
  ],
  blocks: [
    {
      kind: "text",
      title: "The maturation rule — cap while making, tail and splice after",
      body: [
        "The initial transcript is heterogeneous nuclear RNA (hnRNA). Three modifications convert it to mRNA, and their timing is itself testable: the 5′ 7-methylguanosine cap is added cotranscriptionally — while the polymerase is still running — whereas polyadenylation of the 3′ end (~200 A's) and splicing out of introns are posttranscriptional.",
        "Polyadenylation deserves a second read: poly-A polymerase does not require a template (it just strings A's), and the signal to start is AAUAAA in the transcript. A mutation in the polyadenylation signal means early degradation prior to translation — one of the two named failure modes on this page.",
        "The second failure mode sits at the other end of the mRNA's life: the Kozak sequence is the initiation site in most eukaryotic mRNA, facilitating small-subunit binding; mutations impair initiation of translation and lower protein synthesis. A broken start signal and a broken tail signal bookend the whole processing story.",
      ],
    },
    {
      kind: "visual",
      visualId: "mrna-maturation-anatomy",
      title: "Anatomy of the mature mRNA — cap to tail",
      caption:
        "The finished transcript laid out 5′ to 3′: the 7-methylguanosine cap (Gppp, cotranscriptional), 5′ UTR, AUG with its Kozak context, the protein-coding region of ligated exons, stop codon, 3′ UTR with AAUAAA, and the ~200-A poly-A tail — with the three nuclear steps, the P-body quality-control facts, and the enzyme notes below.",
      notice:
        "The two UTRs are transcribed and retained but never translated; AAUAAA sits in the 3′ UTR upstream of the tail; and every element maps to a failure mode — cap/eIF recognition, Kozak/initiation, AAUAAA/stability.",
    },
    {
      kind: "table",
      title: "RNA polymerase portfolio — the numbered order",
      intro: "First Aid's own ordering trick: I, II, III are numbered in the order their products are used in protein synthesis — rRNA, then mRNA, then tRNA.",
      columns: ["Polymerase", "Products (hook)", "Notes & poisons"],
      rows: [
        ["RNA polymerase I", "rRNA — rampant", "Most common RNA type; present only in the nucleolus"],
        ["RNA polymerase II", "mRNA — massive; also miRNA and snRNA", "Opens DNA at the promoter site; inhibited by α-amanitin (death cap mushroom)"],
        ["RNA polymerase III", "5S rRNA + tRNA — tiny", "The small RNAs of the translation apparatus"],
        ["Prokaryotic RNA polymerase (single)", "All 3 kinds of RNA", "Multisubunit complex; inhibited by rifamycins (rifampin, rifabutin)"],
        ["Dactinomycin (actinomycin D)", "—", "Inhibits RNA polymerase in BOTH prokaryotes and eukaryotes (intercalation)"],
      ],
      caption:
        "No eukaryotic RNA polymerase has proofreading function, but all can initiate chains — the asymmetry with DNA polymerases that the exam quotes verbatim.",
    },
    {
      kind: "visual",
      visualId: "alternative-splicing-paths",
      title: "Alternative splicing — one gene, many isoforms",
      caption:
        "One six-exon gene transcribed into a single hnRNA, then spliced three different ways — exons 1-2-4-5-6, 1-3-5-6, and 1-3-4-5-6 — yielding three mRNAs and three protein isoforms, with First Aid's own examples (transmembrane vs secreted immunoglobulin, tropomyosin variants, dopamine receptors, tumor host-defense evasion).",
      notice:
        "The point is arithmetic: a limited gene count does not limit protein diversity — different exon combinations produce a larger number of unique proteins. Exons EXIT and are EXpressed; introns stay IN the nucleus.",
    },
    {
      kind: "text",
      title: "Introns vs exons — the exit rule",
      body: [
        "Introns are intervening sequences and stay in the nucleus; exons exit and are expressed. Exons contain the actual genetic information coding for protein or functional RNA; introns do not code for protein but are important in regulation of gene expression.",
        "Alternative splicing produces a variety of protein products from a single hnRNA sequence — the exam's examples are worth knowing by name: transmembrane vs secreted immunoglobulin (same locus, different membrane anchoring), tropomyosin variants in muscle, dopamine receptors in the brain, and host defense evasion by tumor cells.",
        "Different exons are frequently combined by alternative splicing to produce a larger number of unique proteins — one of the cleanest examples of biological economy the board tests.",
      ],
    },
    {
      kind: "visual",
      visualId: "spliceosome-lariat",
      title: "The spliceosome cycle — assembly, lariat, ligation",
      caption:
        "Three steps in three panels: snRNP assembly with U1 at the GU donor and U2 at the branch point A; cleavage at the 5′ splice site with the 2′–5′ lariat loop; and cleavage at the 3′ splice site with exon ligation and lariat release — plus the SMA and anti-U1 clinical chips.",
      notice:
        "Follow the branch point adenine through all three panels — its 2′-OH creates the lariat noose, the defining chemistry of splicing. The SMA chip (↓ SMN → snRNP assembly defect → floppy baby) and the SLE/MCTD chip (anti-U1 snRNP) are the two clinical anchors of this machinery.",
    },
    {
      kind: "callout",
      variant: "exam",
      title: "How the exam asks this page",
      body: "Four recurring shapes: (1) the mushroom vignette — delayed dysentery + hepatotoxicity 24+ hours after foraging → α-amanitin inhibiting RNA polymerase II. (2) antibody matching — anti-U1 snRNP → SLE/MCTD; anti-Smith (Sm, the protein) is listed here because Sm IS an snRNP protein. (3) polymerase product matching — what does pol III make? (5S rRNA, tRNA — tiny). (4) processing-order questions — which modification is cotranscriptional? (5′ capping).",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "Spinal muscular atrophy — the snRNP assembly disease",
      body: "In spinal muscular atrophy, snRNP assembly is affected due to ↓ SMN protein, producing congenital degeneration of the anterior horns of the spinal cord and symmetric weakness — hypotonia, or “floppy baby syndrome.” The biochemical chain (SMN → snRNP assembly → splicing → motor neuron survival) is a favorite mechanism-completion question that starts on this page and finishes in the neurology chapter.",
    },
    {
      kind: "callout",
      variant: "why",
      title: "Why the cap is cotranscriptional and the tail is not",
      body: "The 5′ end emerges from the polymerase first — capping enzymes sit at the exit channel and modify it mid-transcription, protecting the nascent RNA from exonucleases immediately. The 3′ end does not exist until transcription terminates, so polyadenylation and splicing are necessarily posttranscriptional. The timing is not trivia; it explains why a decapped transcript is instantly degraded while an untailed one gets destroyed only after AAUAAA fails.",
    },
  ],
  clinical: [
    {
      kind: "text",
      title: "Death cap poisoning — α-amanitin",
      body: [
        "α-Amanitin, found in Amanita phalloides (death cap mushrooms), inhibits RNA polymerase II. Ingestion causes dysentery and severe hepatotoxicity — the classic timing is delayed: symptoms begin 6–24 hours after the meal, GI first, then liver failure as mRNA production halts in hepatocytes.",
        "The selectivity is the teaching point: pol II (mRNA) falls, while pol I and pol III are relatively spared at toxin concentrations — which is also why amatoxin poisoning is used experimentally to define pol II dependence. Management is supportive (and includes silibinin/N-acetylcysteine where protocol allows) — but Step 1 wants the enzyme.",
      ],
    },
    {
      kind: "text",
      title: "Rheumatology crosses back — anti-U1 and P-bodies",
      body: [
        "Anti-U1 snRNP antibodies are associated with SLE, mixed connective tissue disease, and other rheumatic diseases — the U1 snRNP is the spliceosome's 5′-splice-site reader, so this is autoimmunity aimed directly at the machinery on this page. High-titer anti-U1 with anti-U1-70k is the MCTD signature (also called Sharp syndrome).",
        "mRNA quality control occurs at cytoplasmic processing bodies (P-bodies), which contain exonucleases, decapping enzymes, and microRNAs; mRNAs may be degraded or stored in P-bodies for future translation — a nuance that connects this page to miRNA biology.",
      ],
    },
  ],
  drugs: [
    {
      drug: "α-Amanitin (toxin)",
      klass: "RNA polymerase II inhibitor (cyclopeptide)",
      target: "RNA polymerase II",
      mechanism: "Binds pol II and halts mRNA (plus miRNA, snRNA) transcription",
      effect: "mRNA synthesis collapse in affected organs",
      uses: "— (poisoning; no therapeutic use)",
      adverse: "Dysentery and severe hepatotoxicity if ingested (Amanita phalloides — death cap)",
      clue: "Foraging history + delayed GI symptoms + rising transaminases",
    },
    {
      drug: "Dactinomycin (actinomycin D)",
      klass: "Intercalating antitumor antibiotic",
      target: "RNA polymerase — both prokaryotic and eukaryotic",
      mechanism: "Intercalates into DNA between GpC bases, blocking RNA synthesis",
      effect: "Global transcription blockade",
      uses: "Wilms tumor, Ewing sarcoma, rhabdomyosarcoma, gestational trophoblastic neoplasia",
      adverse: "Myelosuppression, mucositis, radiation recall",
      clue: "The “both kingdoms” polymerase blocker — pediatric solid tumors",
    },
    {
      drug: "Rifampin / rifabutin (rifamycins)",
      klass: "Antimycobacterial (and anti-staph) RNA synthesis inhibitor",
      target: "DNA-dependent RNA polymerase in prokaryotes",
      mechanism: "Binds the bacterial RNA polymerase β subunit, blocking transcription initiation",
      effect: "Bacterial mRNA shutdown — bactericidal",
      uses: "TB therapy (combination), leprosy, meningococcal prophylaxis",
      adverse: "Orange body fluids, hepatotoxicity, drug interactions (CYP induction)",
      clue: "The species-selective counterpart to α-amanitin — prokaryotes only",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 52-year-old man presents 18 hours after a mushroom-foraging dinner with profuse watery diarrhea and vomiting; over the next two days he develops jaundice and coagulopathy.",
        discriminator: "Delayed gastroenteritis + hepatotoxicity after wild mushroom ingestion",
        concept: "α-Amanitin toxicity",
        answer: "Inhibition of RNA polymerase II (Amanita phalloides — death cap)",
      },
      {
        stem: "A young woman with Raynaud phenomenon, swollen hands, and myositis has a strongly positive anti-U1 snRNP antibody profile.",
        discriminator: "Anti-U1 snRNP — autoimmunity against the spliceosome's 5′-splice-site reader",
        concept: "snRNP autoimmunity",
        answer: "Mixed connective tissue disease (also associated with SLE and other rheumatic diseases)",
      },
      {
        stem: "A newborn is floppy with symmetric weakness and absent deep tendon reflexes; genetic testing shows reduced SMN protein; anterior horn neurons are degenerating.",
        discriminator: "SMN protein loss → snRNP assembly defect",
        concept: "Splicing machinery disease",
        answer: "Spinal muscular atrophy — congenital anterior horn degeneration (“floppy baby”)",
      },
      {
        stem: "A question asks which RNA polymerase synthesizes transfer RNA and 5S ribosomal RNA.",
        discriminator: "The “tiny” products",
        concept: "Polymerase division of labor",
        answer: "RNA polymerase III (tRNA + 5S rRNA); pol I makes rRNA, pol II makes mRNA/miRNA/snRNA",
      },
      {
        stem: "A molecular biology experiment tracks a transcript: the 5′ end is modified while the gene is still being transcribed.",
        discriminator: "Cotranscriptional timing clause",
        concept: "Processing order",
        answer: "5′ capping — addition of the 7-methylguanosine cap (polyadenylation and splicing are posttranscriptional)",
      },
    ],
    traps: [
      {
        a: "RNA polymerase II",
        b: "RNA polymerase III",
        whyConfused: "Both make small RNAs besides their headline product (pol II: miRNA, snRNA; pol III: 5S rRNA, tRNA).",
        keyDifference: "Pol II = massive (mRNA) + miRNA + snRNA; pol III = tiny (tRNA, 5S rRNA). α-Amanitin hits II, not III.",
        clue: "“tRNA or 5S” → III. “mRNA” or “α-amanitin target” → II.",
      },
      {
        a: "α-Amanitin",
        b: "Rifampin",
        whyConfused: "Both are named RNA polymerase inhibitors in toxin/drug tables.",
        keyDifference: "α-Amanitin inhibits eukaryotic pol II; rifamycins inhibit the prokaryotic DNA-dependent RNA polymerase only — the basis of selective antimycobacterial therapy.",
        clue: "Mushroom/hepatotoxicity → amanitin. TB/orange urine → rifampin.",
      },
      {
        a: "Anti-Smith (Sm)",
        b: "Anti-U1 snRNP",
        whyConfused: "Both target the spliceosome and both are SLE-associated.",
        keyDifference: "Sm is a protein component shared across snRNPs; U1 snRNP is one specific particle. Anti-Sm is SLE-specific; anti-U1-RNP (high titer) defines MCTD.",
        clue: "SLE-specific mark → anti-Sm. MCTD profile → anti-U1 snRNP (RNP).",
      },
      {
        a: "Cotranscriptional",
        b: "Posttranscriptional",
        whyConfused: "All three modifications happen in the nucleus, close in time.",
        keyDifference: "Only 5′ capping overlaps transcription; polyadenylation and splicing follow transcript completion.",
        clue: "The exam's phrasing: “while the RNA polymerase is still transcribing” → cap.",
      },
    ],
    pivots: [
      {
        lookAlike: "A toxin/drug list question (α-amanitin, dactinomycin, rifampin) against polymerase targets",
        differentiator: "Species (euk vs prok) and selectivity (one polymerase vs all)",
        correctPath: "Eukaryotic pol II only → α-amanitin · both prokaryotic and eukaryotic → dactinomycin · prokaryotic only → rifamycins.",
      },
      {
        lookAlike: "A hypotonic “floppy baby” stem offering SMA, myotonic dystrophy, and congenital myopathies",
        differentiator: "The molecular clue: SMN protein / snRNP assembly",
        correctPath: "↓ SMN → snRNP assembly failure → anterior horn degeneration → SMA; the others lack the snRNP chain.",
      },
    ],
    miniCase: {
      vignette:
        "A 48-year-old man eats wild mushrooms picked on a hiking trip in the Pacific Northwest. Six hours later he develops nausea, abdominal cramping, and profuse watery diarrhea. His symptoms partially improve, but on hospital day 3 he is jaundiced with AST 4,200 U/L, INR 3.1, and encephalopathy. A mycologist identifies the remaining mushrooms as Amanita phalloides.",
      question: "Which molecular process is directly inhibited by the responsible toxin?",
      options: [
        {
          label: "A",
          correct: true,
          text: "mRNA synthesis by RNA polymerase II",
          why: "Correct. α-Amanitin inhibits RNA polymerase II, halting mRNA (and miRNA/snRNA) transcription; hepatocytes, with their high transcript turnover, fail — dysentery and severe hepatotoxicity if ingested.",
        },
        {
          label: "B",
          text: "Prokaryotic DNA-dependent RNA polymerase",
          why: "Tempting because it is the other board-famous polymerase blocker — but that is the rifamycin target; amatoxin is eukaryotic and pol II-specific.",
        },
        {
          label: "C",
          text: "RNA polymerase I in the nucleolus",
          why: "Pol I (rRNA) is comparatively resistant to α-amanitin at clinical concentrations — the toxin's selectivity for pol II is precisely why mRNA synthesis collapses first.",
        },
        {
          label: "D",
          text: "Dihydrofolate reductase",
          why: "Reinforcement with a folate-blocker poison mechanism — but the mushroom-and-liver vignette is the amatoxin signature.",
        },
        {
          label: "E",
          text: "Spliceosome assembly at the 5′ splice site",
          why: "Splicing machinery is damaged by SMN loss (SMA) and targeted by anti-U1 antibodies, not by amatoxin — the lesion here is transcriptional, upstream of splicing.",
        },
      ],
      reasoning:
        "The vignette is a two-phase classic: early secretory diarrhea, then a false improvement, then fulminant hepatotoxicity — the amatoxin timeline. The only matching mechanism is pol II inhibition; every distractor belongs to a different toxin/drug story. First Aid places α-amanitin's dysentery and severe hepatotoxicity exactly here.",
    },
  },
  mnemonics: [
    {
      code: "“Rampant, Massive, Tiny — polymerases I, II, III”",
      meaning: "Pol I makes rRNA (rampant, nucleolus); pol II makes mRNA (massive) + miRNA + snRNA; pol III makes 5S rRNA + tRNA (tiny).",
      memorizes: "The polymerase-product table in numbered order (order of use in protein synthesis)",
      whenToUse: "Any polymerase product or α-amanitin question.",
      clinical: "α-Amanitin hits the Massive one (pol II) — hepatocytes stop making mRNA and die.",
    },
    {
      code: "“Introns stay IN; exons EXit and are EXpressed”",
      meaning: "The exit rule for the two sequence classes.",
      memorizes: "Intron vs exon fate",
      whenToUse: "Definition questions and alternative-splicing stems.",
      clinical: "Alternative splicing recombines the exiting exons — one gene, many proteins.",
    },
    {
      code: "“GU starts the noose, A pulls it, AG unties the exon”",
      meaning: "Introns begin with GU and end with AG; the branch point A's 2′-OH forms the 2′–5' lariat bond.",
      memorizes: "The splice-site chemistry and sequence marks",
      whenToUse: "Spliceosome mechanism questions and splice-site mutation stems.",
      clinical: "Alterations in snRNP assembly (↓ SMN) cause SMA — the machinery's own disease.",
    },
  ],
  rapidReview: {
    s30: [
      "hnRNA → mRNA by: 5′ cap (cotranscriptional), poly-A tail (~200 A's), splicing — both posttranscriptional.",
      "Pol I = rRNA (nucleolus); pol II = mRNA + miRNA + snRNA (α-amanitin); pol III = tRNA + 5S rRNA.",
      "Poly-A polymerase needs no template; AAUAAA = polyadenylation signal.",
      "Kozak = eukaryotic initiation site; its mutation impairs translation initiation.",
      "Anti-U1 snRNP → SLE / mixed connective tissue disease.",
    ],
    m3: [
      "Introns begin GU, end AG; branch A forms the 2′–5′ lariat bond.",
      "snRNPs = snRNA + proteins (eg, Smith [Sm]) forming the spliceosome.",
      "↓ SMN → snRNP assembly defect → anterior horn degeneration → floppy baby (SMA).",
      "Mutation in the polyadenylation signal → early degradation prior to translation.",
      "P-bodies: exonucleases, decapping enzymes, microRNAs — degrade or store mRNAs.",
      "Rifamycins (rifampin, rifabutin) inhibit prokaryotic DNA-dependent RNA polymerase.",
    ],
    m10: [
      "Alternative splicing examples: transmembrane vs secreted Ig, tropomyosin variants, dopamine receptors, tumor host-defense evasion.",
      "Dactinomycin inhibits RNA polymerase in both prokaryotes and eukaryotes.",
      "RNA polymerases have no proofreading function but can initiate chains.",
      "RNA pol II opens DNA at the promoter site.",
      "Pol I is present only in the nucleolus — the only polymerase with an address.",
      "Capping is cotranscriptional because the 5′ end emerges first — timing follows geometry.",
    ],
  },
  recall: [
    {
      q: "Name the three RNA-processing steps and their timing.",
      a: "5′ capping (7-methylguanosine — cotranscriptional); 3′ polyadenylation (~200 A's — posttranscriptional); splicing out introns (posttranscriptional).",
    },
    {
      q: "What does each eukaryotic RNA polymerase make?",
      a: "Pol I: rRNA (most common, nucleolus). Pol II: mRNA, miRNA, snRNA. Pol III: 5S rRNA, tRNA.",
    },
    {
      q: "Which toxin inhibits RNA polymerase II, and what are its clinical effects?",
      a: "α-Amanitin (Amanita phalloides, death cap mushrooms) — causes dysentery and severe hepatotoxicity if ingested.",
    },
    {
      q: "Which sequences mark intron boundaries, and which adenine makes the lariat?",
      a: "Introns typically begin with GU and end with AG; the branch point adenine's 2′-OH attacks the 5′ splice site to form the 2′–5′ lariat.",
    },
    {
      q: "What is the consequence of a mutation in the polyadenylation signal?",
      a: "Early degradation of the transcript prior to translation.",
    },
    {
      q: "Which antibody targets the spliceosome, and with which diseases is it associated?",
      a: "Anti-U1 snRNP antibodies — SLE, mixed connective tissue disease, other rheumatic diseases.",
    },
    {
      q: "What is the SMN-spinal muscular atrophy chain?",
      a: "↓ SMN protein → snRNP assembly affected → congenital anterior horn degeneration → symmetric weakness/hypotonia (“floppy baby”).",
    },
    {
      q: "What is the Kozak sequence and what does its mutation cause?",
      a: "The initiation site in most eukaryotic mRNA (facilitates small ribosomal subunit binding); mutations impair initiation of translation → ↓ protein synthesis.",
    },
  ],
  related: [
    {
      title: "Eukaryotic Gene Organization & Regulation",
      note: "The upstream anatomy (promoter, enhancer, silencer) that decides when pol II transcribes the transcript this page processes.",
      topicId: "eukaryotic-gene-organization",
    },
    {
      title: "Translation & Protein Processing",
      note: "The mature mRNA's cap, Kozak site, and coding region are the translation note's landing pad — eIFs identify the very cap made here.",
      topicId: "translation-protein-synthesis",
    },
    {
      title: "The Lac Operon",
      note: "The prokaryotic contrast: one polymerase, no nuclear processing — regulation happens at the operator, not the spliceosome.",
      topicId: "lac-operon",
    },
    {
      title: "DNA Repair Pathways",
      note: "Transcription-coupled repair recruits to stalled pol II — the polymerase defined here doubles as a damage sensor.",
      topicId: "dna-repair",
    },
  ],
  crossLinks: [
    {
      subject: "Pharmacology",
      connection: "Dactinomycin (both kingdoms) and rifamycins (prokaryotes only) are the polymerase-directed drugs anchored to this page.",
    },
    {
      subject: "Immunology/Rheumatology",
      connection: "Anti-U1 snRNP and anti-Smith antibodies tie spliceosome components to SLE and MCTD diagnostics.",
    },
    {
      subject: "Neurology",
      connection: "Spinal muscular atrophy (SMN1 → snRNP assembly) is the motor-neuron disease whose mechanism starts here.",
    },
    {
      subject: "Toxicology",
      connection: "Delayed mushroom poisoning with hepatotoxicity is the α-amanitin presentation every board bank carries.",
    },
  ],
};
