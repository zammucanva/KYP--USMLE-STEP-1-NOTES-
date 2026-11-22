import type { KypUsMLENote } from "../types";

// Biochemistry — Cellular (M3).
// Source: First Aid 2026, Part 1 pdf 67–68 / book 45–46
// (Rough/smooth endoplasmic reticulum; cell trafficking; peroxisome; proteasome)

export const organellesCellTrafficking: KypUsMLENote = {
  id: "organelles-cell-trafficking",
  title: "Organelles & Cell Trafficking",
  subtitle:
    "RER, SER, Golgi, endosomes, lysosomes, peroxisomes, proteasomes — one secretory map with three coat proteins (COPII, COPI, clathrin), one lysosomal mailing label (mannose-6-phosphate), and the diseases that break each stop.",
  subject: "Biochemistry",
  system: "Section II · High-Yield General Principles — Cellular",
  pilotCategory: "Cell biology — organelles, vesicular traffic, protein quality control",
  difficulty: 2,
  readTime: 12,
  sourceRef:
    "First Aid 2026, Part 1 pp. 45–46 (rough and smooth endoplasmic reticulum; cell trafficking; peroxisome; proteasome)",
  tags: [
    "rough ER",
    "smooth ER",
    "Golgi",
    "COPI",
    "COPII",
    "clathrin",
    "mannose-6-phosphate",
    "I-cell disease",
    "peroxisome",
    "Zellweger",
    "proteasome",
    "SRP",
  ],
  core: {
    what: "The endomembrane system divides labor: the rough ER synthesizes secretory and membrane proteins with N-linked glycosylation; the smooth ER makes steroids, detoxifies drugs, and holds glucose-6-phosphatase; the Golgi modifies N-linked sugars on asparagine, adds O-linked sugars on serine/threonine, and tags lysosomal enzymes with mannose-6-phosphate. Vesicle traffic runs on three coats — COPII (ER → cis-Golgi, anterograde), COPI (Golgi → Golgi and cis-Golgi → ER, retrograde), and clathrin (trans-Golgi → lysosomes; plasma membrane → endosomes).",
    why: "Every vesicle coat, every glycosylation location, and every peroxisomal enzyme is a standalone exam stem: I-cell disease (failed M6P tagging), Zellweger/Refsum/ALD (peroxisomal import failure), proteasome-MHC I linkage, and the hepatocyte SER hypertrophy of chronic barbiturate use all trace back to this one map.",
    keyIdea: "Memorize the system as a postal service: the RER writes the letter (with N-linked sugar), the Golgi re-addresses it (modify N, add O, stamp M6P for lysosomes), and the coats are the mail trucks — two forward (COPII), one back (COPI), clathrin for the lysosome and endosome routes.",
  },
  mechanisms: [
    {
      id: "secretory-pathway-flow",
      title: "The secretory pathway — nucleus to plasma membrane on three coats",
      context: "Constitutive and regulated secretion in a eukaryotic cell",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Secretory protein translated on RER-bound ribosomes (SRP-guided)",
            sublabel: "Molecular — the signal recognition particle (SRP), a cytosolic ribonucleoprotein, docks the nascent chain on the RER.",
            variant: "input",
          },
          {
            id: "s1",
            label: "RER: synthesis + N-linked oligosaccharide addition",
            sublabel: "Molecular — site of synthesis of secretory (exported) proteins; N-linked glycosylation happens here ('N in eNdoplasmic').",
            variant: "process",
          },
          {
            id: "s2",
            label: "COPII vesicle: ER → cis-Golgi (anterograde)",
            sublabel: "Molecular — the forward coat; 'Two (COPII) steps forward (anterograde)'.",
            variant: "process",
          },
          {
            id: "s3",
            label: "Golgi: modify N-linked oligosaccharide on asparagine; add O-linked on serine/threonine; tag lysosomal enzymes with mannose-6-phosphate",
            sublabel: "Molecular — the distribution center for proteins and lipids, cis → trans.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Secretory vesicle → plasma membrane → exocytosis",
            sublabel: "Output — constitutive secretion and regulated release.",
            variant: "output",
          },
          {
            id: "o2",
            label: "Clathrin: trans-Golgi → lysosomes (M6P receptor route)",
            sublabel: "Output — the lysosomal delivery branch for M6P-tagged enzymes.",
            variant: "output",
          },
          {
            id: "x1",
            label: "COPI: Golgi → Golgi (retrograde) and cis-Golgi → ER",
            sublabel: "Pathway — the retrieval coat: 'one (COPI) step back (retrograde)' — returns ER residents and recycles coats.",
            variant: "inhibit",
          },
          {
            id: "x2",
            label: "Clathrin: plasma membrane → early endosome (receptor-mediated endocytosis, eg, LDL receptor)",
            sublabel: "Clinical — the import branch: LDL uptake, and the step that is defective in familial hypercholesterolemia.",
            variant: "inhibit",
          },
          {
            id: "s4",
            label: "Early endosome → late endosome → lysosome maturation (and membrane recycling back to surface)",
            sublabel: "Molecular — endosomes are the sorting station: recycle receptors, route contents to lysosomes.",
            variant: "process",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "SRP docks" },
          { from: "s1", to: "s2", label: "budding" },
          { from: "s2", to: "s3", label: "anterograde" },
          { from: "s3", to: "o1", label: "secretory vesicle" },
          { from: "s3", to: "o2", label: "M6P route" },
          { from: "x1", to: "s3", type: "inhibit", label: "retrograde retrieval" },
          { from: "x2", to: "s4", label: "endocytosis" },
          { from: "s4", to: "o2", label: "maturation" },
        ],
        caption:
          "One map, three coats: COPII carries cargo forward from ER to cis-Golgi; COPI carries it back; clathrin handles the two inbound branches — trans-Golgi to lysosomes and plasma membrane to early endosomes (receptor-mediated endocytosis, the LDL receptor's route). First Aid's own mnemonic: two (COPII) steps forward, one (COPI) step back.",
      },
    },
    {
      id: "m6p-icell-disease",
      title: "Mannose-6-phosphate tagging — and I-cell disease when it fails",
      context: "Lysosomal enzyme targeting in the trans-Golgi",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Lysosomal hydrolases synthesized in the RER, arrive at the Golgi",
            sublabel: "Molecular — every lysosomal enzyme must be stamped for its destination.",
            variant: "input",
          },
          {
            id: "s1",
            label: "N-acetylglucosaminyl-1-phosphotransferase tags the enzymes with mannose-6-phosphate",
            sublabel: "Molecular — the mailing-label enzyme; M6P is recognized by M6P receptors in the trans-Golgi.",
            variant: "process",
          },
          {
            id: "s2",
            label: "M6P receptor binds → clathrin-coated vesicle → late endosome/lysosome",
            sublabel: "Pathway — the tagged enzyme reaches the lysosome and takes up its post.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Functional lysosomes: hydrolases digest macromolecular debris",
            sublabel: "Output — the cell's recycling center works.",
            variant: "output",
          },
          {
            id: "x1",
            label: "Defective transferase → enzymes secreted outside the cell instead",
            sublabel: "Clinical — I-cell disease: without M6P, lysosomal enzymes follow the default secretory path out of the cell.",
            variant: "inhibit",
          },
          {
            id: "x2",
            label: "Inclusion bodies + coarse features, gingival hyperplasia, corneal clouding, claw hand, kyphoscoliosis, ↑ plasma lysosomal enzymes",
            sublabel: "Clinical — the empty lysosomes fill with undigested debris; symptoms similar to but more severe than Hurler syndrome; often fatal in childhood.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1" },
          { from: "s1", to: "s2", label: "M6P receptor" },
          { from: "s2", to: "o1" },
          { from: "x1", to: "s1", type: "inhibit", label: "no M6P tag" },
          { from: "x1", to: "x2", label: "secretion + inclusions" },
        ],
        caption:
          "The mailing-label mechanism: transferase stamps mannose-6-phosphate; without the stamp (I-cell disease, mucolipidosis type II, autosomal recessive) the enzymes are secreted rather than delivered — inclusion bodies build up, plasma lysosomal enzymes rise, and the Hurler-like facies appears in a child who is worse than Hurler.",
      },
    },
  ],
  blocks: [
    {
      kind: "text",
      title: "Two endoplasmic reticula, two job descriptions",
      body: [
        "The rough ER is the site of synthesis of secretory (exported) proteins and of N-linked oligosaccharide addition to lysosomal and other proteins. Its ribosomes are not decoration — they are the distinction that makes Nissl bodies (the RER of neurons) synthesize peptide neurotransmitters for secretion, and they explain why goblet cells and plasma cells, professional secretors of mucin and immunoglobulin, are RER-rich.",
        "Free ribosomes, unattached to any membrane, are the site of synthesis of cytosolic, peroxisomal, and mitochondrial proteins — the cell's internal-use products never touch the ER. The smooth ER, meanwhile, is the site of steroid synthesis and detoxification of drugs and poisons, and in hepatocytes it carries glucose-6-phosphatase (the enzyme missing in von Gierke disease, and the reason the liver can export free glucose). Steroid-producing cells — hepatocytes, adrenal cortex, gonads — are SER-rich by profession.",
        "Golgi downstream of both is the distribution center for proteins and lipids: it modifies N-linked oligosaccharides on asparagine, adds O-linked oligosaccharides to serine and threonine residues, and tags lysosomal enzymes with mannose-6-phosphate for their lysosomal destination. N-linked begins in the ER, O-linked and M6P happen in the Golgi — a location-pairing question the exam asks directly.",
      ],
    },
    {
      kind: "visual",
      visualId: "secretory-pathway-map",
      title: "The endomembrane flow map — every arrow and every coat",
      caption:
        "The full secretory pathway drawn from the source figure: nuclear envelope and RER at the origin, COPII anterograde vesicles to the cis-Golgi, COPI retrograde traffic (both Golgi-to-Golgi and cis-Golgi-to-ER), the trans-Golgi sending clathrin-coated vesicles to late endosomes and lysosomes, secretory vesicles fusing with the plasma membrane by exocytosis, and the plasma-membrane clathrin route to early endosomes for receptor-mediated endocytosis (LDL receptor) with membrane recycling back to the surface. Legend chips identify COPI, COPII, and clathrin coats with anterograde and retrograde arrows.",
      notice:
        "Follow one protein through the whole map and name the coat at every arrow: RER →(COPII)→ cis-Golgi →(COPI retrograde for returns)→ trans-Golgi →(clathrin)→ lysosome, or →(secretory vesicle)→ exocytosis. The endosome branch recycles receptors back to the membrane — the step LDL uptake depends on.",
      },
    {
      kind: "list",
      title: "The three coats — route cards",
      intro: "First Aid's routing summary with its own mnemonic embedded.",
      items: [
        { lead: "COPII", text: "ER → cis-Golgi (anterograde). 'Two (COPII) steps forward (anterograde); one (COP-I) step back (retrograde).'" },
        { lead: "COPI", text: "Golgi → Golgi (retrograde) and cis-Golgi → ER — retrieval of escaped ER residents and coat recycling." },
        { lead: "Clathrin", text: "trans-Golgi → lysosomes, and plasma membrane → early endosomes (receptor-mediated endocytosis, eg, the LDL receptor)." },
        { lead: "SRP (signal recognition particle)", text: "Cytosolic ribonucleoprotein that binds the signal peptide and docks the ribosome on the RER; absent or failed → cytosolic accumulation of the protein." },
      ],
    },
    {
      kind: "visual",
      visualId: "rer-golgi-em",
      title: "EM fingerprint — RER vs Golgi under the electron microscope",
      caption:
        "Electron-microscopy-style comparison of the two stacked membrane systems: rough ER as cisternae studded with ribosome dots on the cytosolic face (the 'rough' in the name, and the Nissl-body look of neurons), versus the Golgi apparatus as smooth, curved stacked saccules with budding and fusing vesicles at its cis and trans faces. The diagnostic ultrastructure: ribosome-studded stacks = RER; smooth stacks with vesicle traffic = Golgi.",
      notice:
        "Histology and cell-biology questions use exactly this pattern: identify the organelle from the EM. Ribosomes on the membrane settle it — RER. Smooth parallel saccules with vesicles at both ends settle it — Golgi.",
      },
    {
      kind: "text",
      title: "Peroxisome and proteasome — the two disposal organelles",
      body: [
        "The peroxisome is a membrane-enclosed organelle involved in β-oxidation of very-long-chain fatty acids (VLCFA — a strictly peroxisomal process), α-oxidation of branched-chain fatty acids (also strictly peroxisomal), catabolism of amino acids and ethanol, and synthesis of bile acids and plasmalogens, the membrane phospholipid especially important in the brain and heart. Its diseases are import-failure syndromes: Zellweger syndrome (mutated PEX genes, autosomal recessive) with hypotonia, seizures, jaundice, craniofacial dysmorphism, and hepatomegaly, ending in early death; Refsum disease (α-oxidation defect, phytanic acid buildup) with retinitis pigmentosa, anosmia, deafness, ataxia, peripheral neuropathy, ichthyosis, and cardiac conduction defects, treatable with dietary restriction and plasmapheresis; and X-linked adrenoleukodystrophy (ABCD1 transporter) with VLCFA accumulation in the adrenals, white matter, and testes.",
        "The proteasome is the other disposal route — a barrel protease that degrades polyubiquitin-tagged proteins, including misfolded cytosolic proteins and proteins marked for turnover. Its peptide products are loaded onto MHC class I molecules, which is why intracellular pathogens and tumors that shed proteins into the cytosol are surveilled by CD8+ T cells. Polyubiquitinated, aggregation-prone proteins that overwhelm or evade the proteasome accumulate in neurodegenerative disease — the proteinaceous inclusions of Alzheimer, Parkinson, and Huntington diseases are proteasome-pathology neighbors.",
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title: "How the exam asks this page",
      body: "Five recurring shapes: (1) cell-type → organelle matching (goblet/plasma cell → RER; adrenal cortex → SER; neuron → Nissl bodies); (2) coat → direction matching (the two-forward-one-back mnemonic); (3) the I-cell vignette — coarse facies, claw hands, kyphoscoliosis, ↑ plasma lysosomal enzymes — asking for GlcNAc-1-phosphotransferase; (4) the peroxisome cluster — hypotonic newborn with seizures (Zellweger/PEX), retinitis pigmentosa + anosmia + phytanic acid (Refsum), adrenal insufficiency + white matter (ALD/ABCD1); (5) ubiquitin-proteasome → MHC I antigen processing.",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "SER hypertrophy — the barbiturate liver",
      body: "Because the smooth ER is the site of detoxification of drugs and poisons, chronic substrate exposure builds more of it: the classic image is hepatocyte SER proliferation after repeated barbiturate use, which also raises CYP-mediated metabolism of co-prescribed drugs — the pharmacology behind tolerance and drug-drug interactions. The same organelle stores the glucose-6-phosphatase that von Gierke disease lacks, which is why the hepatomegaly of that glycogen storage disease and the detoxifying SER sit in the same cell.",
    },
  ],
  clinical: [
    {
      kind: "text",
      title: "I-cell disease — the mailing label that never got stamped",
      body: [
        "I-cell disease (inclusion cell disease/mucolipidosis type II) is an inherited lysosomal storage disorder — autosomal recessive — caused by a defect in N-acetylglucosaminyl-1-phosphotransferase, the enzyme that adds the mannose-6-phosphate address label. Without M6P, the lysosomal enzymes cannot be targeted to lysosomes and are instead secreted from the cell.",
        "The result is a lysosome that is structurally present but enzymatically empty: undigested macromolecules accumulate as inclusion bodies. Clinically this produces coarse facial features, gingival hyperplasia, corneal clouding, claw-hand deformity, and kyphoscoliosis, with elevated plasma levels of lysosomal enzymes (the secreted enzymes measurable in blood). Symptoms are similar to but more severe than Hurler syndrome, and the disease is often fatal in childhood.",
      ],
    },
    {
      kind: "text",
      title: "Peroxisome disease cluster — three defects, three ages",
      body: [
        "Zellweger syndrome presents earliest: a hypotonic neonate with seizures, jaundice, hepatomegaly, and characteristic craniofacial features — PEX gene mutations prevent peroxisomal matrix import, so every peroxisomal enzyme is missing and VLCFA, bile-acid intermediates, and plasmalogen deficiency combine; death occurs in infancy.",
        "Refsum disease is the late, treatable one: α-oxidation failure accumulates phytanic acid (from chlorophyll-rich foods) and presents with retinitis pigmentosa, anosmia, sensorineural deafness, ataxia, peripheral neuropathy, ichthyosis, and cardiac conduction abnormalities — diet and plasmapheresis lower the substrate. X-linked adrenoleukodystrophy splits the difference: ABCD1 loss blocks VLCFA β-oxidation, accumulating VLCFA in adrenal cortex (insufficiency), white matter (demyelination), and testes; the childhood cerebral form progresses rapidly.",
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 2-year-old with coarse facial features, gingival hyperplasia, corneal clouding, claw hands, and kyphoscoliosis has markedly elevated plasma lysosomal enzymes; fibroblast biopsy shows inclusion bodies.",
        discriminator: "↑ plasma lysosomal enzymes + inclusion bodies = enzymes secreted, not delivered",
        concept: "M6P targeting failure",
        answer: "I-cell disease — defective N-acetylglucosaminyl-1-phosphotransferase (mucolipidosis type II)",
      },
      {
        stem: "A newborn is hypotonic with myoclonic seizures, jaundice, hepatomegaly, and a large anterior fontanelle; very-long-chain fatty acids are elevated; peroxisomes are absent on electron microscopy.",
        discriminator: "Absent peroxisomes + VLCFA elevation",
        concept: "Peroxisomal biogenesis failure",
        answer: "Zellweger syndrome — mutated PEX genes (autosomal recessive)",
      },
      {
        stem: "An adolescent reports night blindness and loss of smell; examination shows retinitis pigmentosa, ataxia, peripheral neuropathy, and ichthyosis; phytanic acid is elevated.",
        discriminator: "Phytanic acid + retinitis pigmentosa + anosmia",
        concept: "Peroxisomal α-oxidation defect",
        answer: "Refsum disease — treated with dietary restriction and plasmapheresis",
      },
      {
        stem: "A boy with adrenal insufficiency develops spastic paraparesis and dementia; MRI shows symmetric white-matter demyelination; VLCFA are elevated.",
        discriminator: "Adrenal + white matter + testes = the ABCD1 triad",
        concept: "VLCFA transporter failure",
        answer: "X-linked adrenoleukodystrophy (ABCD1)",
      },
      {
        stem: "A histology question shows stacked cisternae studded with ribosomes in a plasma cell; another shows smooth stacked saccules with vesicles in a goblet cell.",
        discriminator: "Ribosome-studded vs smooth stacks",
        concept: "Organelle EM identification",
        answer: "Rough ER (Nissl bodies in neurons; secretory protein synthesis) vs Golgi (distribution center)",
      },
    ],
    traps: [
      {
        a: "COPI",
        b: "COPII",
        whyConfused: "One letter apart and both Golgi-associated.",
        keyDifference: "COPII = ER → cis-Golgi anterograde (two steps forward); COPI = Golgi → Golgi and cis-Golgi → ER retrograde (one step back).",
        clue: "COPII has the II — it takes TWO steps forward.",
      },
      {
        a: "N-linked glycosylation",
        b: "O-linked glycosylation",
        whyConfused: "Both are oligosaccharide additions to nascent proteins.",
        keyDifference: "N-linked (on asparagine) begins in the RER — 'N in eNdoplasmic'; O-linked (on serine/threonine) is added in the Golgi, along with the mannose-6-phosphate lysosomal tag.",
        clue: "N = eNdoplasmic; O and M6P = GOlgi jobs.",
      },
      {
        a: "Zellweger syndrome",
        b: "Refsum disease",
        whyConfused: "Both are peroxisomal diseases with neurologic findings.",
        keyDifference: "Zellweger = PEX import failure, NO peroxisomes, neonatal hypotonia/seizures, fatal; Refsum = isolated α-oxidation defect, phytanic acid, retinitis pigmentosa + anosmia, treatable.",
        clue: "Newborn sick-to-death = Zellweger. Teenager blind and anosmic = Refsum.",
      },
      {
        a: "I-cell disease",
        b: "Hurler syndrome",
        whyConfused: "Coarse facies, corneal clouding, dysostosis appear in both.",
        keyDifference: "I-cell = trafficking defect (no M6P tag, enzymes SECRETED, ↑ plasma lysosomal enzymes, inclusions); Hurler = α-L-iduronidase deficiency (a true lysosomal enzyme deficiency inside working lysosomes).",
        clue: "Elevated plasma lysosomal enzymes = I-cell (the enzymes leaked out).",
      },
    ],
    pivots: [
      {
        lookAlike: "A lysosomal-storage vignette offering I-cell, Hurler, and other mucopolysaccharidoses",
        differentiator: "Plasma lysosomal enzyme levels and inclusion-cell histology",
        correctPath: "↑ plasma enzymes + inclusion bodies → N-acetylglucosaminyl-1-phosphotransferase (I-cell); normal targeting with a single missing hydrolase → the specific MPS.",
      },
      {
        lookAlike: "A peroxisome-disease stem offering Zellweger, Refsum, and ALD",
        differentiator: "Age, peroxisome presence/absence, and which substrate accumulates",
        correctPath: "Absent peroxisomes + neonatal encephalopathy → Zellweger (PEX); phytanic acid + RP/anosmia → Refsum (α-ox); VLCFA + adrenal/white matter/testes → ALD (ABCD1).",
      },
    ],
    miniCase: {
      vignette:
        "A 14-month-old boy is evaluated for developmental delay. He has coarse facial features, gum overgrowth, and clouded corneas; his fingers are fixed in a claw deformity and his spine shows kyphoscoliosis on the radiograph. Laboratory studies reveal markedly elevated activities of multiple lysosomal enzymes in plasma, and a fibroblast biopsy shows dense inclusion bodies under light microscopy. His 4-year-old sister died of a similar progressive illness.",
      question: "Which enzymatic defect best explains the finding of elevated plasma lysosomal enzymes?",
      options: [
        {
          label: "A",
          correct: true,
          text: "N-acetylglucosaminyl-1-phosphotransferase",
          why: "Correct. Defective M6P tagging in the Golgi means lysosomal enzymes cannot be routed to lysosomes; they default to the secretory pathway and exit the cell — hence ↑ plasma lysosomal enzymes and inclusion-body-filled, enzyme-empty lysosomes (I-cell disease/mucolipidosis type II).",
        },
        {
          label: "B",
          text: "α-L-iduronidase",
          why: "Tempting because Hurler syndrome shares the coarse features and corneal clouding — but in Hurler a lysosomal enzyme is deficient INSIDE working lysosomes; the enzymes here are being secreted, not missing.",
        },
        {
          label: "C",
          text: "Mannose-6-phosphate receptor",
          why: "The nearest distractor on the same pathway — M6P receptor loss also misroutes enzymes — but I-cell disease is defined by the transferase (label-writing) defect, not the receptor (label-reading) defect.",
        },
        {
          label: "D",
          text: "Sphingomyelinase",
          why: "A true single-enzyme lysosomal deficiency (Niemann-Pick); it produces storage, not the plasma enzyme leak and the Hurler-plus skeletal picture of this vignette.",
        },
        {
          label: "E",
          text: "N-acetylglucosaminyl-1-phosphodiesterase",
          why: "The uncovering enzyme later in the M6P pathway — a real participant, but not the deficient activity in I-cell disease; the exam wants the transferase.",
        },
      ],
      reasoning:
        "Coarse facies + corneal clouding + claw hand + kyphoscoliosis would fit a mucopolysaccharidosis, but two findings re-route the diagnosis: lysosomal enzymes elevated in PLASMA and inclusion bodies in fibroblasts. Both mean the enzymes were made, untagged, and exported — the mannose-6-phosphate transferase defect of I-cell disease, more severe than Hurler and often fatal in childhood.",
    },
  },
  mnemonics: [
    {
      code: "“Two (COPII) steps forward, one (COP-I) step back”",
      meaning: "COPII moves cargo anterograde (ER → cis-Golgi); COPI moves cargo retrograde (Golgi → Golgi, cis-Golgi → ER).",
      memorizes: "The coat-direction routing table",
      whenToUse: "Any vesicle-coat matching question.",
      clinical: "Poisons and mutations that block COPII budding halt secretion; COPI failure dysregulates Golgi enzyme retention.",
    },
    {
      code: "“N in eNdoplasmic; O and M6P in GOlgi”",
      meaning: "N-linked oligosaccharides (asparagine) are added in the rough ER; O-linked sugars (serine/threonine) and the mannose-6-phosphate lysosomal tag are added in the Golgi.",
      memorizes: "Glycosylation and tagging locations",
      whenToUse: "Location-of-modification questions and I-cell stems.",
      clinical: "I-cell disease is the Golgi-tag failure: no M6P → enzymes secreted → ↑ plasma lysosomal enzymes.",
    },
  ],
  rapidReview: {
    s30: [
      "RER: secretory protein synthesis + N-linked glycosylation; SER: steroids, detox, glucose-6-phosphatase.",
      "Golgi: modifies N-linked (asparagine), adds O-linked (serine/threonine), tags lysosomal enzymes with mannose-6-phosphate.",
      "COPII: ER → cis-Golgi (anterograde). COPI: Golgi → Golgi/ER (retrograde). Clathrin: trans-Golgi → lysosomes; membrane → endosomes.",
      "Peroxisome: VLCFA β-oxidation, branched-chain α-oxidation, ethanol catabolism, bile acids, plasmalogens.",
      "Proteasome degrades polyubiquitin-tagged proteins → peptides for MHC I.",
    ],
    m3: [
      "I-cell disease: AR, defective GlcNAc-1-phosphotransferase → no M6P → enzymes secreted; ↑ plasma lysosomal enzymes; inclusion bodies; worse than Hurler; often fatal in childhood.",
      "SRP: cytosolic ribonucleoprotein docking nascent secretory proteins on the RER; failed → cytosolic accumulation.",
      "Zellweger: PEX mutations, no peroxisomes — hypotonia, seizures, jaundice, hepatomegaly, craniofacial features, early death.",
      "Refsum: phytanic acid α-oxidation defect — retinitis pigmentosa, anosmia, deafness, ataxia, neuropathy, ichthyosis; diet + plasmapheresis.",
      "X-linked adrenoleukodystrophy: ABCD1 — VLCFA buildup in adrenals, white matter, testes.",
      "Nissl bodies = RER in neurons; free ribosomes make cytosolic, peroxisomal, mitochondrial proteins.",
    ],
    m10: [
      "Goblet cells and plasma cells are RER-rich (mucin, immunoglobulin secretion).",
      "Hepocytes, adrenal cortex, and gonads are SER-rich (steroids, detox, G-6-phosphatase).",
      "Clathrin-coated pits mediate receptor-mediated endocytosis — the LDL receptor's route.",
      "Early endosomes sort: receptors recycle to the membrane; contents mature toward late endosome → lysosome.",
      "Plasmalogens are peroxisome-synthesized membrane phospholipids — deficient in Zellweger.",
      "Proteasome dysfunction neighbors the inclusions of Alzheimer, Parkinson, and Huntington diseases.",
    ],
  },
  recall: [
    {
      q: "What are the two headline jobs of the rough ER?",
      a: "Site of synthesis of secretory (exported) proteins, and of N-linked oligosaccharide addition to lysosomal and other proteins.",
    },
    {
      q: "Name the three Golgi modifications.",
      a: "Modify N-linked oligosaccharide on asparagine; add O-linked oligosaccharides on serine/threonine; tag lysosomal enzymes with mannose-6-phosphate.",
    },
    {
      q: "Which coat proteins serve which directions?",
      a: "COPII: ER → cis-Golgi (anterograde); COPI: Golgi → Golgi and cis-Golgi → ER (retrograde); clathrin: trans-Golgi → lysosomes and plasma membrane → early endosomes (receptor-mediated endocytosis).",
    },
    {
      q: "What enzyme is deficient in I-cell disease and what is the consequence?",
      a: "N-acetylglucosaminyl-1-phosphotransferase — no M6P tag, so lysosomal enzymes are secreted instead of delivered; inclusion bodies, ↑ plasma lysosomal enzymes, Hurler-like but more severe, often fatal in childhood.",
    },
    {
      q: "List four peroxisome functions.",
      a: "β-oxidation of very-long-chain fatty acids; α-oxidation of branched-chain fatty acids (eg, phytanic acid); catabolism of amino acids and ethanol; synthesis of bile acids and plasmalogens.",
    },
    {
      q: "What is the proteasome's link to adaptive immunity?",
      a: "It degrades polyubiquitin-tagged proteins into peptides that are presented on MHC class I molecules for CD8+ T-cell surveillance.",
    },
    {
      q: "What does the SRP do, and what happens if it is absent?",
      a: "SRP is a cytosolic ribonucleoprotein that binds the signal peptide and docks the translating ribosome on the RER; if absent, the secretory protein accumulates in the cytosol.",
    },
  ],
  related: [
    {
      title: "Translation & Protein Processing",
      note: "The nascent secretory protein the SRP grabs is being made by the translation machinery this note's upstream topic details.",
      topicId: "translation-protein-synthesis",
    },
    {
      title: "Cytoskeleton, Microtubules & Cilia",
      note: "Vesicles do not drift — COPI/COPII/clathrin cargo is hauled along microtubules by kinesin and dynein motors.",
      topicId: "cytoskeleton-cilia",
    },
    {
      title: "Atherosclerosis",
      note: "The clathrin-mediated LDL receptor route drawn here is the uptake step that fails in familial hypercholesterolemia's atherogenesis.",
      topicId: "atherosclerosis",
    },
  ],
  crossLinks: [
    {
      subject: "Immunology",
      connection: "Proteasome-generated peptides on MHC I are the substrate of CD8+ T-cell antigen surveillance.",
    },
    {
      subject: "Pharmacology",
      connection: "Hepocyte smooth ER is the detoxification site — barbiturate-induced SER hypertrophy underlies CYP tolerance and interactions.",
    },
    {
      subject: "Metabolism/Biochemistry",
      connection: "Glucose-6-phosphatase lives on the hepatocyte SER — the von Gierke disease enzyme.",
    },
    {
      subject: "Neurology/Pathology",
      connection: "Nissl bodies (neuronal RER) and protein-aggregation diseases tie this page to neuron biology and proteasome failure.",
    },
  ],
};
