import type { KypUsMLENote } from "../types";

// Biochemistry — Molecular (M2).
// Source: First Aid 2026, Part 1 pdf 55–56 / book 33–34
// (Nucleotides; De novo pyrimidine and purine synthesis)

export const nucleotidesSynthesis: KypUsMLENote = {
  id: "nucleotides-synthesis",
  title: "Nucleotide Synthesis & Metabolism",
  subtitle:
    "Two rings, two assembly lines, and a pharmacy shelf parked on top of them: know which atom came from which precursor, which step is rate-limiting, and which drug jams which machine.",
  subject: "Biochemistry",
  system: "Section II · High-Yield General Principles — Molecular",
  pilotCategory: "Molecular biology — nucleotide metabolism",
  difficulty: 3,
  readTime: 14,
  sourceRef: "First Aid 2026, Part 1 pp. 33–34 (nucleotides; de novo pyrimidine and purine synthesis)",
  tags: [
    "nucleotides",
    "purine synthesis",
    "pyrimidine synthesis",
    "CPS2",
    "PRPP",
    "thymidylate synthase",
    "ribonucleotide reductase",
    "6-mercaptopurine",
  ],
  core: {
    what: "A nucleoside is a base plus (deoxy)ribose; a nucleotide adds a phosphate, and nucleotides chain together through 3′-5′ phosphodiester bonds with the incoming nucleotide supplying the energy from its 5′ triphosphate. Purine and pyrimidine rings are built — or salvaged — from a short shopping list of precursors, and both de novo assembly lines are studded with enzyme steps that immunosuppressive, antineoplastic, and antimicrobial drugs are designed to jam.",
    why: "This page is the biochemical chassis for four pharmacology chapters: antimetabolites, antifolates, immunosuppressants, and antivirals. Every drug on it is a named Step 1 target, and the atom-source figure is straight recall — which precursor built which ring atom — one of the most reliably tested structure questions in biochemistry.",
    keyIdea: "Purines are assembled on PRPP step by step (rate-limiting: PRPP amidotransferase); pyrimidines are pre-assembled as a ring first (rate-limiting: CPS2) and only then meet PRPP. Everything else — orotic aciduria, 5-FU, MTX, hydroxyurea, 6-MP, mycophenolate — hangs off those two lines.",
  },
  mechanisms: [
    {
      id: "pyrimidine-de-novo",
      title: "Pyrimidine de novo synthesis — ring first, sugar later",
      context: "Cytosol of most cells — the CPS2 line",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Glutamine + CO₂ (2 ATP) enter the cytosol",
            sublabel: "Molecular — the pyrimidine line runs in the cytosol of most cells, fed by glutamine and CO₂.",
            variant: "input",
          },
          {
            id: "s1",
            label: "CPS2 builds carbamoyl phosphate — the committed, rate-limiting step",
            sublabel: "Molecular — Carbamoyl phosphate synthetase II uses glutamine (not ammonia), unlike mitochondrial CPS1 of the urea cycle.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Aspartate joins → orotic acid",
            sublabel: "Pathway — aspartate contributes four ring atoms (N1, C4, C5, C6); dihydroorotate dehydrogenase is the step leflunomide inhibits.",
            variant: "process",
          },
          {
            id: "s3",
            label: "Orotic acid + PRPP → UMP",
            sublabel: "Clinical — this transfer is impaired in orotic aciduria: megaloblastic anemia refractory to B12/folate + orotate crystals in urine.",
            variant: "process",
          },
          {
            id: "o1",
            label: "UMP → UDP → CTP",
            sublabel: "Pathway — phosphorylation only; the ring stays intact on the way to cytidine triphosphate.",
            variant: "output",
          },
          {
            id: "o2",
            label: "UDP → dUDP → dUMP → dTMP",
            sublabel: "Clinical — ribonucleotide reductase (blocked by hydroxyurea) makes the deoxyribo versions; thymidylate synthase (blocked by 5-FU) methylates dUMP using N⁵,N¹⁰-methylene-THF.",
            variant: "output",
          },
          {
            id: "x1",
            label: "MTX / TMP / pyrimethamine ⊣ DHFR → ↓ dTMP",
            sublabel: "Pharmacology — the antifolate trap: humans (MTX), bacteria (TMP), protozoa (pyrimethamine) — same enzyme, different species.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "committed step" },
          { from: "s1", to: "s2", label: "carbamoyl + Asp" },
          { from: "s2", to: "s3", label: "orotate + PRPP" },
          { from: "s3", to: "o1" },
          { from: "s3", to: "o2" },
          { from: "x1", to: "o2", type: "inhibit", label: "↓ THF → ↓ dTMP" },
        ],
        caption:
          "The pyrimidine line is a one-way street from carbamoyl phosphate to UMP, then a fork into RNA bases (CTP) and DNA bases (dTMP) — with hydroxyurea, 5-FU, and the antifolates each parking on a different stretch of it.",
      },
    },
    {
      id: "purine-de-novo",
      title: "Purine de novo synthesis — build the ring on PRPP",
      context: "Cytoplasm — the PRPP amidotransferase line",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Ribose 5-phosphate arrives from the pentose phosphate pathway",
            sublabel: "Molecular — PRPP synthetase activates the sugar; PRPP is the scaffold purine rings are assembled onto.",
            variant: "input",
          },
          {
            id: "s1",
            label: "PRPP amidotransferase — rate-limiting step",
            sublabel: "Molecular — glycine, aspartate, glutamine, CO₂, and N¹⁰-formyl-THF donate atoms one by one onto PRPP.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Inosine monophosphate (IMP) — the branch-point purine",
            sublabel: "Pathway — IMP is the common precursor both AMP and GMP are made from.",
            variant: "process",
          },
          {
            id: "o1",
            label: "IMP → AMP",
            sublabel: "Pathway — adenylosuccinate steps; blocked by the 6-MP family.",
            variant: "output",
          },
          {
            id: "o2",
            label: "IMP → GMP via IMP dehydrogenase",
            sublabel: "Clinical — the step mycophenolate and ribavirin inhibit: proliferating lymphocytes cannot make GTP and stall in the S phase they live in.",
            variant: "output",
          },
          {
            id: "x1",
            label: "6-MP (and prodrug azathioprine) ⊣ IMP → AMP/GMP",
            sublabel: "Pharmacology — 6-MP is converted to 6-thioguanine nucleotides; xanthine oxidase degrades 6-MP, so XO inhibitors raise 6-TGN to toxic levels.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "PRPP" },
          { from: "s1", to: "s2", label: "atoms added stepwise" },
          { from: "s2", to: "o1" },
          { from: "s2", to: "o2" },
          { from: "x1", to: "s2", type: "inhibit", label: "both branches blocked" },
        ],
        caption:
          "Purines are built ON the sugar: PRPP first, ring second — the mirror image of the pyrimidine line, and the reason PRPP amidotransferase, not CPS2, is the purine rate-limiter.",
      },
    },
  ],
  blocks: [
    {
      kind: "text",
      title: "Vocabulary first — the three-piece vs two-piece rule",
      body: [
        "A nucleoside is base + (deoxy)ribose — two pieces. A nucleotide is base + (deoxy)ribose + phosphate — three pieces. First Aid's hook is literally built into the word: nucleo-“tri”-des have three components. The exam asks this as a definition pair more often than it asks anything else on the page.",
        "When nucleotides chain into nucleic acid, the linkage is a 3′-5′ phosphodiester bond — the 5′ end of the incoming nucleotide bears the triphosphate, and that bond is the energy source for the polymerization. That single fact explains why a chain-terminating analog needs a modified 3′ OH (no acceptor for the next nucleotide) — the same logic used in the replication note.",
        "Keep the base roster tight: purines are A and G (two rings — “Pure As Gold”); pyrimidines are C, U, and T (one ring — “CUT the pyramid”). Uracil is found in RNA, thymine in DNA, and methylation of uracil makes thymine — “Thymine has a methyl.”",
      ],
    },
    {
      kind: "list",
      title: "The four deamination reactions — a closed set",
      intro: "Each base has exactly one deamination product; the set is small enough to memorize as a square.",
      items: [
        { lead: "Cytosine → uracil", text: "Why DNA uses thymine instead: any C deamination would masquerade as a legitimate RNA base, so DNA repair hunts U out of DNA." },
        { lead: "5-methylcytosine → thymine", text: "The sneakiest one — deamination converts one legitimate DNA base into another; mismatch repair sees only a T:G pair." },
        { lead: "Adenine → hypoxanthine", text: "Pairs with C instead of T — a transition mutation if unrepaired." },
        { lead: "Guanine → xanthine", text: "Still pairs with C, so this deamination is relatively silent — but note xanthine is also a purine degradation intermediate on the uric acid road." },
      ],
    },
    {
      kind: "visual",
      visualId: "nucleotide-ring-atom-sources",
      title: "Atom sources of the two rings — the classic recall figure",
      caption:
        "The purine double ring with every atom color-coded to its precursor — glycine (C4, C5, N7), aspartate (N1), glutamine (N3, N9), CO₂ (C6), N¹⁰-formyl-THF (C2, C8) — and the pyrimidine single ring split between carbamoyl phosphate (C2, N3) and aspartate (N1, C4, C5, C6), with the deamination set and the ring mnemonics underneath.",
      notice:
        "Read the purine ring as two halves: the amino-acid half (glycine in the middle, aspartate at N1, glutamine at both nitrogens N3/N9) and the one-carbon half (CO₂ at C6, folate at C2 and C8). The pyrimidine ring is simpler — only two suppliers, and aspartate supplies four of the six atoms.",
    },
    {
      kind: "text",
      title: "Why the atom map pays off",
      body: [
        "Antifolate drugs connect directly to this figure: methotrexate depletes functional THF, and the two carbon atoms THF donates to the purine ring (C2, C8) simply never arrive. That is one mechanism behind MTX's efficacy in rapidly dividing cells — purine assembly stalls for want of folate-donated carbons, and dTMP synthesis stalls in parallel.",
        "The amino-acid mnemonic “cats purr until they GAG” stores the purine amino acids: Glycine, Aspartate, Glutamine. Note what is NOT on the list — carbamoyl phosphate, CO₂, and THF contribute non-amino-acid pieces; pyrimidines additionally get their ring base from carbamoyl phosphate.",
        "The C–G bond holds three hydrogen bonds to the A–T bond's two — “C-G bonds are like Crazy Glue.” Raising C-G content raises the melting temperature of DNA, which is why GC-rich DNA needs more heat to denature and why the exam loves the relationship question.",
      ],
    },
    {
      kind: "visual",
      visualId: "nucleotide-de-novo-salvage-map",
      title: "The synthesis map — two lines with the whole pharmacy on it",
      caption:
        "The full de novo map: pyrimidine lane from glutamine + CO₂ through CPS2 (rate-limiting), carbamoyl phosphate, orotic acid to UMP, then the CTP fork and the dUMP → dTMP folate loop; purine lane from ribose 5-phosphate through PRPP to IMP and its AMP/GMP branches — every inhibitor at its exact attachment point: leflunomide, hydroxyurea, 5-FU, MTX/TMP/pyrimethamine, 6-MP/azathioprine, mycophenolate/ribavirin.",
      notice:
        "Trace each drug to its arrow before you try to memorize the list. Hydroxyurea sits on ribonucleotide reductase — the shared on-ramp from RNA bases to DNA bases. The antifolates sit on DHFR — one step upstream of thymidylate synthase's methyl donor. 6-MP blocks both IMP exits; mycophenolate blocks only the GMP exit. Location is the answer key.",
    },
    {
      kind: "table",
      title: "Drug → target → consequence — the exam table",
      intro: "Every inhibitor on the map with the exact enzyme and the clinical situation it appears in.",
      columns: ["Drug", "Blocks", "Consequence the stem shows"],
      rows: [
        ["Leflunomide", "Dihydroorotate dehydrogenase (pyrimidine line)", "Rheumatoid arthritis / psoriatic arthritis immunosuppression — interrogates the orotate step"],
        ["5-FU / capecitabine", "Thymidylate synthase (via 5-F-dUMP)", "↓ dTMP → thymine-less cell death; colorectal cancer therapy"],
        ["6-MP / azathioprine", "Conversion of IMP → AMP and GMP (via 6-TGNs)", "Immunosuppression (ALL, IBD, transplant); the allopurinol interaction"],
        ["Mycophenolate / ribavirin", "IMP dehydrogenase (IMP → GMP)", "Lymphocyte-specific immunosuppression (transplant) / antiviral GTP depletion"],
        ["Hydroxyurea", "Ribonucleotide reductase (both lanes)", "Traps cells in S phase; sickle-cell disease, myeloproliferative neoplasms"],
        ["MTX / TMP / pyrimethamine", "Dihydrofolate reductase — human / bacterium / protozoan", "Species-selective antifolate action; ↓ dTMP in each target organism"],
      ],
      caption:
        "Azathioprine is the prodrug of 6-MP; concurrent xanthine oxidase inhibitors (allopurinol, febuxostat) shunt more 6-MP into 6-TGNs → severe immunosuppression risk: reduce the dose and monitor CBC.",
    },
    {
      kind: "compare",
      title: "CPS1 vs CPS2 — the one-line distinction",
      intro: "Two enzymes with the same product, different addresses and different customers. The exam's favorite version: which one is mitochondrial?",
      columns: ["CPS1", "CPS2"],
      rows: [
        { label: "Location", a: "Mitochondria", b: "Cytosol" },
        { label: "Pathway served", a: "Urea cycle — nitrogen disposal", b: "Pyrimidine synthesis — nucleotide production" },
        { label: "Nitrogen source", a: "Ammonia (NH₃)", b: "Glutamine" },
        { label: "Where found", a: "Liver (and intestinal epithelium)", b: "Most cells" },
        { label: "Regulator", a: "Activated by N-acetylglutamate", b: "Activated by ATP + PRPP, inhibited by UTP" },
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title: "How the exam asks this page",
      body: "Three recurring shapes: (1) atom-source — “which precursor contributes N1 of the purine ring?” (aspartate) or the pyrimidine version (carbamoyl phosphate for C2/N3, aspartate for the rest). (2) Drug-target matching — a vignette about a transplant patient on mycophenolate (IMP dehydrogenase) or a child with ALL on 6-MP who starts allopurinol (toxic ↑ 6-TGN). (3) Rate-limiting step — PRPP amidotransferase for purines, CPS2 for pyrimidines; giving the wrong one is the classic distractor.",
    },
    {
      kind: "callout",
      variant: "why",
      title: "Why antifolates kill the fastest-dividing cells",
      body: "DHFR keeps THF stocked; THF's one-carbon forms feed two machines at once — the C2/C8 carbons of the purine ring and the N⁵,N¹⁰-methylene that thymidylate synthase needs to methylate dUMP. Block DHFR (MTX) and both DNA precursor lines thin out together. Cells that spend their lives in S phase — marrow, gut, tumors, trophoblast — notice first. That single paragraph explains MTX's use in cancer, rheumatoid arthritis, and ectopic pregnancy at once.",
    },
  ],
  clinical: [
    {
      kind: "text",
      title: "Orotic aciduria — the UMP-transfer failure",
      body: [
        "The orotic acid → UMP step needs two enzymes (orotate phosphoribosyltransferase and OMP decarboxylase, together UMP synthase). Inherited UMP synthase deficiency piles orotic acid up behind the block: the classic presentation is megaloblastic anemia that does NOT respond to B12 or folate, with orotate crystals producing orange sandy sediment in the diaper of an infant with failure to thrive.",
        "Two features separate it from the megaloblastic anemias of B12/folate deficiency: the refractoriness to vitamin replacement, and the absence of neurologic findings. Uridine replacement bypasses the block (it can be phosphorylated to UMP) — a curative, mechanism-named therapy that makes this a favorite orphan-disease vignette.",
      ],
    },
    {
      kind: "text",
      title: "Hydroxyurea — one drug, both lanes",
      body: [
        "Ribonucleotide reductase converts every ribonucleotide (UDP, ADP, GDP, CDP) into its deoxy version — it is the only bridge from the RNA world to the DNA world, and it serves both the purine and pyrimidine lines. Hydroxyurea inhibits it, stalling cells that need deoxynucleotide pools: that is why it works in myeloproliferative neoplasms (drops the blast count) and in sickle-cell disease (raises HbF — a second, distinct mechanism worth knowing).",
        "On the exam, hydroxyurea is the answer when the stem wants a drug that halts conversion of ribonucleotides to deoxyribonucleotides — phrasing that deliberately spans both ring families.",
      ],
    },
  ],
  drugs: [
    {
      drug: "5-Fluorouracil (5-FU) / capecitabine",
      klass: "Antimetabolite (pyrimidine analog)",
      target: "Thymidylate synthase",
      mechanism: "Converted to 5-F-dUMP, which forms a covalent complex with thymidylate synthase",
      effect: "↓ dTMP → thymine-less cell death in S phase",
      uses: "Colorectal, breast, GI adenocarcinomas; topical for actinic keratoses",
      adverse: "Myelosuppression, mucositis, diarrhea; DPD deficiency → severe toxicity",
      clue: "Colorectal cancer regimen (FOLFOX) with a “thymine-less death” mechanism",
    },
    {
      drug: "6-Mercaptopurine (6-MP) / azathioprine",
      klass: "Antimetabolite (purine analog); azathioprine = prodrug",
      target: "IMP → AMP/GMP conversion (as 6-thioguanine nucleotides)",
      mechanism: "Converted to 6-TGNs which are incorporated into DNA and block purine interconversion",
      effect: "Immunosuppression; antineoplastic in ALL",
      uses: "ALL maintenance, IBD, transplant rejection prophylaxis",
      adverse: "Myelosuppression, hepatotoxicity, pancreatitis; ↑ toxicity with xanthine oxidase inhibitors",
      clue: "IBD or ALL patient started on allopurinol — expect the 6-MP dose to be cut",
    },
    {
      drug: "Methotrexate (MTX)",
      klass: "Antifolate",
      target: "Dihydrofolate reductase (humans)",
      mechanism: "Competitive DHFR inhibition → ↓ THF → ↓ dTMP + ↓ purine C2/C8",
      effect: "S-phase arrest in rapidly dividing cells",
      uses: "Cancers, rheumatoid arthritis, psoriasis, ectopic pregnancy",
      adverse: "Myelosuppression, mucositis, teratogenic; rescued by leucovorin",
      clue: "“Rescue with leucovorin” or a rheumatology patient with stomatitis",
    },
    {
      drug: "Hydroxyurea",
      klass: "Antimetabolite (ribonucleotide reductase inhibitor)",
      target: "Ribonucleotide reductase",
      mechanism: "Scavenges the tyrosyl radical needed to reduce ribose to deoxyribose",
      effect: "Deoxynucleotide depletion → S-phase arrest",
      uses: "CML / myeloproliferative neoplasms, sickle-cell disease (↑ HbF)",
      adverse: "Myelosuppression, teratogenicity, painful leg ulcers",
      clue: "Sickle-cell patient with fewer crises AND a rising HbF",
    },
    {
      drug: "Mycophenolate",
      klass: "Immunosuppressant (IMP dehydrogenase inhibitor)",
      target: "IMP dehydrogenase (IMP → GMP, de novo only)",
      mechanism: "Blocks GMP synthesis; lymphocytes lack a salvage bypass and are starved of guanine nucleotides",
      effect: "Lymphocyte proliferation arrested — S phase",
      uses: "Transplant rejection prophylaxis, lupus nephritis",
      adverse: "GI intolerance, leukopenia, teratogenic (mycophenolate embryopathy); ribavirin hits the same enzyme",
      clue: "Transplant patient on “cell-cycle-specific” immunosuppression with IMP dehydrogenase as the named target",
    },
    {
      drug: "Leflunomide",
      klass: "DMARD (pyrimidine synthesis inhibitor)",
      target: "Dihydroorotate dehydrogenase",
      mechanism: "Blocks the orotate step of pyrimidine de novo synthesis",
      effect: "Lymphocyte pyrimidine depletion → anti-proliferative",
      uses: "Rheumatoid arthritis, psoriatic arthritis",
      adverse: "Hepatotoxicity, teratogenic (long washout), hypertension",
      clue: "RA alternative to methotrexate with a “pyrimidine synthesis” mechanism line",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A child with failure to thrive has a megaloblastic anemia that persists after B12 and folate replacement; the diaper shows orange crystalline sand; no neurologic deficits.",
        discriminator: "Megaloblastic anemia REFRACTORY to vitamins + orotate crystals without neurology",
        concept: "Orotic aciduria — UMP synthase deficiency",
        answer: "Orotate phosphoribosyltransferase / OMP decarboxylase (UMP synthase) — treat with uridine",
      },
      {
        stem: "A patient with acute lymphoblastic leukemia on maintenance 6-MP is started on allopurinol for tumor lysis prophylaxis; two weeks later the CBC shows profound pancytopenia.",
        discriminator: "XO inhibition diverts 6-MP from degradation into 6-thioguanine nucleotides",
        concept: "6-MP + xanthine oxidase inhibitor interaction",
        answer: "↑ 6-TGN levels → severe immunosuppression/myelosuppression — reduce 6-MP dose, monitor CBC",
      },
      {
        stem: "A kidney-transplant patient takes an immunosuppressant described as starving lymphocytes of guanine nucleotides by blocking IMP dehydrogenase.",
        discriminator: "Lymphocytes depend on de novo GMP synthesis (no salvage escape)",
        concept: "Species/cell-type selectivity of IMP dehydrogenase inhibition",
        answer: "Mycophenolate (mofetil) — ribavirin inhibits the same enzyme",
      },
      {
        stem: "A molecular-biology question shows the purine ring with one atom highlighted at the top of the six-membered ring, asking for its precursor.",
        discriminator: "Position knowledge: C6 sits at the apex; folate carbons are C2 and C8",
        concept: "Purine atom sources",
        answer: "C6 ← CO₂ (“one-carbon from carbon dioxide”); the exam's favorite single-atom version asks C2/C8 ← N¹⁰-formyl-THF",
      },
      {
        stem: "A patient with colorectal cancer receives a fluoropyrimidine; a molecular footnote explains the tumor dies “unable to thymidylate its dUMP.”",
        discriminator: "5-F-dUMP — an irreversible complex with thymidylate synthase",
        concept: "Antimetabolite action at dUMP → dTMP",
        answer: "5-Fluorouracil inhibits thymidylate synthase (↓ dTMP)",
      },
    ],
    traps: [
      {
        a: "CPS1",
        b: "CPS2",
        whyConfused: "Same product (carbamoyl phosphate), near-identical names, both rate-relevant enzymes.",
        keyDifference: "CPS1 = mitochondria, urea cycle, liver, uses ammonia. CPS2 = cytosol, pyrimidine synthesis, most cells, uses glutamine.",
        clue: "Hyperammonemia context → CPS1. Nucleotide synthesis or hydroxyurea-style map context → CPS2.",
      },
      {
        a: "Methotrexate",
        b: "Trimethoprim",
        whyConfused: "Both inhibit dihydrofolate reductase — the exam names the enzyme identically.",
        keyDifference: "Species selectivity: MTX is a human DHFR inhibitor (anticancer/DMARD); TMP is a bacterial DHFR inhibitor (antibiotic); pyrimethamine covers protozoa.",
        clue: "An antifolate given with leucovorin rescue → MTX. Given as antibiotic combination → TMP-SMX.",
      },
      {
        a: "Ribonucleotide reductase",
        b: "Thymidylate synthase",
        whyConfused: "Both sit on the road to DNA precursors and both are anticancer targets.",
        keyDifference: "Ribonucleotide reductase converts ribo → deoxyribo (both purine and pyrimidine); thymidylate synthase methylates dUMP → dTMP (needs N⁵,N¹⁰-methylene-THF).",
        clue: "Hydroxyurea vignette → reductase. 5-FU vignette → thymidylate synthase.",
      },
      {
        a: "Orotic aciduria from UMP synthase deficiency",
        b: "Ornithine transcarbamylase (OTC) deficiency",
        whyConfused: "Both can present with orotic acid in urine in an infant.",
        keyDifference: "OTC is an X-linked urea-cycle defect with HYPERAMMONEMIA and ↓ BUN; UMP synthase deficiency has normal ammonia, megaloblastic anemia, and no neurologic decline.",
        clue: "Ammonia high + orotate = OTC; anemia + orotate = UMP synthase.",
      },
    ],
    pivots: [
      {
        lookAlike: "A drug-mechanism list question pairing hydroxyurea, 5-FU, MTX, and 6-MP against one enzyme",
        differentiator: "Which precursor pool dries up: all deoxynucleotides, dTMP only, THF-dependent steps, or IMP exits",
        correctPath: "“Ribonucleotides to deoxyribonucleotides” → hydroxyurea · “dUMP to dTMP” → 5-FU · “dihydrofolate reductase” → MTX · “IMP to AMP/GMP” → 6-MP.",
      },
      {
        lookAlike: "Atom-source questions that show either ring with several labeled atoms",
        differentiator: "Purine asks single atoms (which precursor gave N1?); pyrimidine asks two suppliers only",
        correctPath: "Purine: Gly→C4/C5/N7, Asp→N1, Gln→N3/N9, CO₂→C6, THF→C2/C8. Pyrimidine: carbamoyl phosphate→C2/N3, Asp→N1/C4/C5/C6.",
      },
    ],
    miniCase: {
      vignette:
        "A 7-year-old boy with acute lymphoblastic leukemia is in maintenance therapy with daily 6-mercaptopurine. Because of recurrent gout flares during chemotherapy, allopurinol 300 mg daily is added. Ten days later he presents with fever, oral ulcers, and a CBC showing neutrophils 320/µL, hemoglobin 7.9 g/dL, and platelets 41,000/µL.",
      question: "What is the mechanism of the worsening cytopenias?",
      options: [
        {
          label: "A",
          correct: true,
          text: "Allopurinol blocks xanthine oxidase, diverting more 6-MP into 6-thioguanine nucleotides → supratherapeutic immunosuppression",
          why: "Correct. XO normally degrades a large fraction of 6-MP; inhibit XO and 6-MP conversion to 6-TGNs rises — dose reduction (often to ~25–33%) plus CBC monitoring is the standard response.",
        },
        {
          label: "B",
          text: "Allopurinol directly inhibits ribonucleotide reductase",
          why: "Tempting because the cytopenia pattern resembles a deoxynucleotide stall — but allopurinol's target is xanthine oxidase; hydroxyurea is the reductase inhibitor.",
        },
        {
          label: "C",
          text: "6-MP inhibits dihydrofolate reductase, and allopurinol potentiates this binding",
          why: "Confuses 6-MP with methotrexate — different antimetabolite, different enzyme; the antifolate story needs leucovorin rescue, not dose reduction.",
        },
        {
          label: "D",
          text: "Leukemic marrow infiltration causing pancytopenia",
          why: "Plausible in ALL generally — but the timing (ten days after adding a known interacting drug during maintenance) and the mucositis point to drug toxicity, not relapse.",
        },
        {
          label: "E",
          text: "Allopurinol-induced aplastic anemia through immune marrow suppression",
          why: "A rare idiosyncratic drug reaction exists for many agents, but the question asks for mechanism — the 6-MP/XO interaction is the classic, testable, dose-related one.",
        },
      ],
      reasoning:
        "The vignette triangulates three things: a thiopurine on board (6-MP), a xanthine oxidase inhibitor added (allopurinol), and S-phase-typical toxicity (mucositis + pancytopenia). The interaction is deterministic — XO is 6-MP's main clearance route, so its inhibition funnels 6-MP into 6-TGNs. Reduce the thiopurine, monitor the CBC.",
    },
  },
  mnemonics: [
    {
      code: "“Pure As Gold” / “CUT the pyramid”",
      meaning: "Purines = A, G (two rings, gold wedding bands ×2). Pyrimidines = C, U, T (one ring — CUT the pyramid with one slice).",
      memorizes: "Which bases are two-ring purines vs one-ring pyrimidines",
      whenToUse: "Any base-classification question, ring-atom question, or nucleotide-structure stem.",
      clinical: "“Thymine has a methyl” — the T that CUT adds is the methylated uracil found only in DNA.",
    },
    {
      code: "“cats purr until they GAG”",
      meaning: "GAG = Glycine, Aspartate, Glutamine — the three amino acids purine synthesis requires.",
      memorizes: "The amino-acid precursor list for the purine ring",
      whenToUse: "Atom-source and precursor-list questions about purine synthesis.",
      clinical: "THF contributes C2 and C8 — which is why methotrexate starves purine synthesis as well as dTMP production.",
    },
    {
      code: "“C-G bonds are like Crazy Glue”",
      meaning: "C–G pairs form 3 hydrogen bonds; A–T pairs only 2. More Crazy Glue → more heat needed to melt the duplex.",
      memorizes: "The C-G / melting-temperature relationship",
      whenToUse: "Questions about DNA denaturation temperature, GC content, or which sample “melts first.”",
      clinical: "GC-rich codon pairs and origins are harder to denature — the same reason AT-rich origins (TATA-like) melt easily to start replication.",
    },
  ],
  rapidReview: {
    s30: [
      "Nucleoside = base + sugar; nucleotide = base + sugar + phosphate (“tri” = three components).",
      "Purines (A, G) = 2 rings; pyrimidines (C, U, T) = 1 ring; thymine has a methyl.",
      "Purine rate-limiting enzyme = PRPP amidotransferase; pyrimidine = CPS2 (cytosol, glutamine).",
      "Orotic aciduria = UMP synthase deficiency: megaloblastic anemia refractory to B12/folate + orotate crystals.",
      "Hydroxyurea inhibits ribonucleotide reductase — both lanes.",
    ],
    m3: [
      "Purine atoms: Gly→C4/C5/N7 · Asp→N1 · Gln→N3/N9 · CO₂→C6 · THF→C2/C8.",
      "Pyrimidine atoms: carbamoyl phosphate→C2/N3 · Asp→N1/C4/C5/C6.",
      "5-FU → 5-F-dUMP ⊣ thymidylate synthase (↓ dTMP); MTX/TMP/pyrimethamine ⊣ DHFR in humans/bacteria/protozoa.",
      "6-MP/azathioprine block IMP → AMP/GMP; + allopurinol → ↑ 6-TGN toxicity (reduce dose, monitor CBC).",
      "Mycophenolate/ribavirin ⊣ IMP dehydrogenase (IMP → GMP).",
      "CPS1 = mitochondria/urea cycle/liver/ammonia; CPS2 = cytosol/pyrimidines/most cells/glutamine.",
    ],
    m10: [
      "Deamination set: C→U, 5-mC→T, A→hypoxanthine, G→xanthine.",
      "The incoming nucleotide's 5′ triphosphate pays for the 3′-5′ phosphodiester bond.",
      "Leflunomide ⊣ dihydroorotate dehydrogenase (the orotate step) — RA/psoriatic arthritis.",
      "Antifolate logic: THF one-carbons feed purine C2/C8 AND the dUMP→dTMP methyl — two starved machines at once.",
      "Uridine bypasses UMP synthase deficiency — curative for orotic aciduria.",
      "GC content ↑ → 3-H-bond pairs ↑ → melting temperature ↑.",
    ],
  },
  recall: [
    {
      q: "Which enzyme is rate-limiting for de novo purine synthesis, and for pyrimidine synthesis?",
      a: "Purine: PRPP amidotransferase. Pyrimidine: CPS2 (carbamoyl phosphate synthetase II).",
    },
    {
      q: "Which two carbons of the purine ring come from folate, and in what form?",
      a: "C2 and C8, donated as N¹⁰-formyl-THF one-carbon units.",
    },
    {
      q: "Name the four atoms of the pyrimidine ring supplied by aspartate.",
      a: "N1, C4, C5, and C6 (carbamoyl phosphate supplies C2 and N3).",
    },
    {
      q: "Which drug blocks the conversion of ribonucleotides to deoxyribonucleotides, and what is its enzyme?",
      a: "Hydroxyurea — inhibits ribonucleotide reductase, in both the purine and pyrimidine lanes.",
    },
    {
      q: "Why must 6-MP be dose-reduced when allopurinol is co-administered?",
      a: "Allopurinol inhibits xanthine oxidase, 6-MP's degrading enzyme → more 6-MP converts to 6-thioguanine nucleotides → severe immunosuppression; reduce dose and monitor CBC.",
    },
    {
      q: "Which enzyme does mycophenolate inhibit, and why is the effect relatively lymphocyte-specific?",
      a: "IMP dehydrogenase (IMP → GMP); lymphocytes are uniquely dependent on de novo purine synthesis and cannot escape by salvage.",
    },
    {
      q: "How do you clinically distinguish orotic aciduria from OTC deficiency when both show orotate in urine?",
      a: "OTC: X-linked, hyperammonemia, ↓ BUN, neurologic. Orotic aciduria: normal ammonia, megaloblastic anemia refractory to B12/folate, no neuro deficits; uridine is curative.",
    },
    {
      q: "Which DHFR inhibitor is used for humans, bacteria, and protozoa respectively?",
      a: "Methotrexate (humans), trimethoprim (bacteria), pyrimethamine (protozoa).",
    },
  ],
  related: [
    {
      title: "Purine Salvage Disorders",
      note: "The right half of the same metabolism: when synthesis stops, degradation and salvage decide whether uric acid or immune failure follows — ADA and HGPRT are the two locks.",
      topicId: "purine-salvage-disorders",
    },
    {
      title: "DNA Replication",
      note: "The dNTP pools built here are the raw materials the fork consumes — and chain-terminating analogs exploit the same 3′-OH logic.",
      topicId: "dna-replication",
    },
    {
      title: "Glycolysis Regulation & Pyruvate Metabolism",
      note: "Ribose 5-phosphate for PRPP comes from the pentose phosphate pathway — the sugar backbone of this page is a PPP product.",
      topicId: "glycolysis-regulation",
    },
    {
      title: "Antifolate and antimetabolite pharmacology",
      note: "MTX, 5-FU, 6-MP, hydroxyurea, and mycophenolate return as full drug-class cards in pharmacology — their mechanisms are defined on this map.",
    },
  ],
  crossLinks: [
    {
      subject: "Pharmacology",
      connection: "Six drug classes are anchored to this map: 5-FU/capecitabine, 6-MP/azathioprine, MTX, hydroxyurea, mycophenolate/ribavirin, and leflunomide.",
    },
    {
      subject: "Hematology/Oncology",
      connection: "S-phase-specific chemotherapy exploits the dependency of rapidly dividing cells on de novo nucleotide synthesis; myelosuppression and mucositis are the on-target toxicities.",
    },
    {
      subject: "Genetics",
      connection: "Orotic aciduria (UMP synthase, autosomal recessive) versus OTC deficiency (X-linked) — the orotate-with-and-without-ammonia pair.",
    },
    {
      subject: "Rheumatology",
      connection: "Methotrexate and leflunomide are first-line DMARDs precisely because lymphocytes cannot tolerate a de novo nucleotide stall.",
    },
  ],
};
