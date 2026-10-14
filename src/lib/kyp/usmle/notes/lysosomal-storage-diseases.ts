import type { KypUsMLENote } from "../types";

// Biochemistry — Metabolism (E-batch, book order 13).
// Source: First Aid 2026, Part 1 pdf 108 / book 86
// (lysosomal storage diseases: sphingolipidoses + mucopolysaccharidoses)

export const lysosomalStorageDiseases: KypUsMLENote = {
  id: "lysosomal-storage-diseases",
  title: "Lysosomal Storage Diseases",
  subtitle:
    "The sphingolipidoses and mucopolysaccharidoses — one ceramide hub with six enzyme blocks (Tay-Sachs hexosaminidase A, Fabry α-galactosidase A, metachromatic leukodystrophy arylsulfatase A, Krabbe galactocerebrosidase, Gaucher glucocerebrosidase, Niemann-Pick sphingomyelinase) plus the mucopolysaccharidoses Hurler and Hunter — each with its enzyme, accumulated substrate, inheritance, and the four image-signs the exam actually tests: the cherry-red spot, angiokeratomas, crumpled-tissue-paper Gaucher cells, and foam cells.",
  subject: "Biochemistry",
  system: "Section II · High-Yield General Principles — Metabolism",
  pilotCategory: "Metabolism — lysosomal storage diseases, sphingolipidoses, mucopolysaccharidoses",
  difficulty: 3,
  readTime: 13,
  sourceRef:
    "First Aid 2026, Part 1 pp. 86 (lysosomal storage diseases: sphingolipidoses — Tay-Sachs, Fabry, metachromatic leukodystrophy, Krabbe, Gaucher, Niemann-Pick; mucopolysaccharidoses — Hurler, Hunter)",
  tags: [
    "lysosomal storage diseases",
    "sphingolipidoses",
    "Tay-Sachs disease",
    "hexosaminidase A",
    "GM2 ganglioside",
    "cherry-red spot",
    "onion skin lysosomes",
    "Fabry disease",
    "alpha-galactosidase A",
    "angiokeratomas",
    "hypohidrosis",
    "ceramide trihexoside",
    "globotriaosylceramide",
    "metachromatic leukodystrophy",
    "arylsulfatase A",
    "cerebroside sulfate",
    "Krabbe disease",
    "galactocerebrosidase",
    "psychosine",
    "globoid cells",
    "Gaucher disease",
    "glucocerebrosidase",
    "Gaucher cells",
    "crumpled tissue paper",
    "bone crises",
    "avascular necrosis of femur",
    "Niemann-Pick disease",
    "sphingomyelinase",
    "foam cells",
    "mucopolysaccharidoses",
    "Hurler syndrome",
    "alpha-L-iduronidase",
    "Hunter syndrome",
    "iduronate-2-sulfatase",
    "heparan sulfate",
    "dermatan sulfate",
    "Ashkenazi Jews",
    "recombinant enzyme replacement",
  ],
  core: {
    what: "Lysosomal storage diseases are lysosomal enzyme deficiencies causing accumulation of abnormal metabolic products; Tay-Sachs, Niemann-Pick, and some forms of Gaucher disease have ↑ incidence in Ashkenazi Jews. The six sphingolipidoses each block one catabolic arrow converging on ceramide: Tay-Sachs (AR, hexosaminidase A, GM2 ganglioside — progressive neurodegeneration, developmental delay, hyperreflexia, hyperacusis, cherry-red macula from lipid accumulation in the ganglion cell layer, lysosomes with onion skin, NO hepatosplenomegaly); Fabry (XR, α-galactosidase A with recombinant-enzyme treatment, ceramide trihexoside — early triad of episodic peripheral neuropathy, angiokeratomas, hypohidrosis; late progressive renal failure and cardiovascular disease); metachromatic leukodystrophy (AR, arylsulfatase A, cerebroside sulfate — central and peripheral demyelination with ataxia and dementia); Krabbe (AR, galactocerebrosidase, galactocerebroside + psychosine — peripheral neuropathy, oligodendrocyte destruction, developmental delay, CN II atrophy, globoid cells); Gaucher (AR, most common, glucocerebrosidase/β-glucosidase with recombinant-enzyme treatment, glucocerebroside — hepatosplenomegaly, pancytopenia, osteoporosis, avascular necrosis of the femur, bone crises, Gaucher cells resembling crumpled tissue paper); and Niemann-Pick (AR, sphingomyelinase, sphingomyelin + cholesterol — progressive neurodegeneration, hepatosplenomegaly versus Tay-Sachs, foam cells, cherry-red spot). The mucopolysaccharidoses store glycosaminoglycans: Hurler (AR, α-L-iduronidase, heparan + dermatan sulfate — developmental delay, hirsutism, skeletal anomalies, airway obstruction, clouded cornea, hepatosplenomegaly) and Hunter (XR, iduronate-2-sulfatase — mild Hurler plus aggressive behavior, with NO corneal clouding).",
    why: "This is the chapter's visual-diagnosis topic: four image-signs (cherry-red spot, angiokeratomas, crumpled-tissue-paper cells, foam cells) and one pathway map organize all eight diseases, and every exam item reduces to three columns — enzyme, accumulated substrate, inheritance. The ceramide-hub geometry explains the substrate logic: each block backs up the metabolite upstream of its arrow, which is why the accumulated substrate names the disease's position on the map (GM2 ganglioside, ceramide trihexoside, cerebroside sulfate, galactocerebroside + psychosine, glucocerebroside, sphingomyelin). The inheritance column is itself a discriminator: Fabry and Hunter are the two X-linked entries among otherwise autosomal-recessive diseases, and Hunters see clearly (no corneal clouding) and aggressively aim for the X.",
    keyIdea: "Read the table through the hub: every sphingolipidosis is an arrow-block on the ceramide map, the accumulated substrate is what sits upstream of the block, and the phenotype is where that substrate's cells live — ganglion cells (cherry-red spot, neurodegeneration) for the ganglioside blocks, macrophage-rich reticuloendothelial tissue (hepatosplenomegaly, foam/Gaucher cells) for the lipid blocks, demyelination for the sulfatide and galactocerebroside blocks (sulfatide and galactocerebroside are myelin lipids, which is why MLD and Krabbe present as demyelinating disease with globoid cells). The two X-linked diseases (Fabry, Hunter) and the two enzyme-replaceable diseases (Fabry, Gaucher) are the cross-column facts the exam isolates. The hepatosplenomegaly line separates Tay-Sachs (none) from Niemann-Pick (marked) when both present with a cherry-red spot.",
  },
  mechanisms: [
    {
      id: "ceramide-hub",
      title: "The ceramide hub — six arrows, six blocks, six substrates",
      context: "Sphingolipid catabolism in the lysosome",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "One of the six catabolic enzymes is deficient: hexosaminidase A, α-galactosidase A, arylsulfatase A, galactocerebrosidase, glucocerebrosidase, or sphingomyelinase",
            sublabel: "Input — pick the blocked arrow on the ceramide hub.",
            variant: "input",
          },
          {
            id: "s1",
            label: "The substrate upstream of the block accumulates in the lysosome: GM2 ganglioside, ceramide trihexoside, cerebroside sulfate, galactocerebroside + psychosine, glucocerebroside, or sphingomyelin + cholesterol",
            sublabel: "Process — lysosomal enzyme deficiency → accumulation of abnormal metabolic products.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Storage phenotype follows the substrate's cell of residence: ganglion-cell lipid (cherry-red spot, neurodegeneration), myelin lipid (demyelination — MLD, Krabbe globoid cells), reticuloendothelial lipid (hepatosplenomegaly, Gaucher/foam cells)",
            sublabel: "Process — where the substrate lives is what the disease looks like.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Two blocks are enzyme-replaceable: Fabry (recombinant α-galactosidase A) and Gaucher (recombinant glucocerebrosidase)",
            sublabel: "Output — the treatments the exam names.",
            variant: "output",
          },
          {
            id: "x1",
            label: "Population anchor: ↑ incidence of Tay-Sachs, Niemann-Pick, and some forms of Gaucher disease in Ashkenazi Jews",
            sublabel: "Context — the founder-effect clue in the stem.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "block → backup" },
          { from: "s1", to: "s2", label: "substrate → cell type" },
          { from: "s2", to: "o1", label: "two replaceable" },
          { from: "x1", to: "s1", label: "founder effect ↑" },
        ],
        caption:
          "The whole topic is one map read three ways. Geometrically: six catabolic arrows converge on ceramide, and each disease is one blocked arrow — so the accumulated substrate is always the metabolite immediately upstream (GM2 sits behind hexosaminidase A, sphingomyelin behind sphingomyelinase, and so on). Cellularly: the phenotype follows the substrate's home — myelin lipids (sulfatide, galactocerebroside) give demyelination, ganglioside gives the neurodegeneration-plus-cherry-red-spot pattern, and the reticuloendothelial lipids give organomegaly with pathognomonic macrophages. Clinically: only Fabry and Gaucher have recombinant-enzyme replacement, and the Ashkenazi founder effect raises Tay-Sachs, Niemann-Pick, and some Gaucher forms — three facts that anchor the exam's favorite cross-column questions.",
      },
    },
    {
      id: "mps-two-suflates",
      title: "Hurler versus Hunter — the mucopolysaccharidosis pair",
      context: "Degradation of the glycosaminoglycans heparan and dermatan sulfate",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Blocked glycosaminoglycan breakdown: α-L-iduronidase (Hurler) or iduronate-2-sulfatase (Hunter) — heparan sulfate and dermatan sulfate accumulate",
            sublabel: "Input — the two iduronidase enzymes, one letter apart.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Shared storage phenotype (the 'Hurler plus' pattern): developmental delay, hirsutism, skeletal anomalies, airway obstruction, hepatosplenomegaly",
            sublabel: "Process — glycosaminoglycan deposition in tissue throughout the body.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Hurler (AR, α-L-iduronidase) additionally clouds the cornea; Hunter (XR, iduronate-2-sulfatase) is 'mild Hurler + aggressive behavior' with NO corneal clouding",
            sublabel: "Process — the two discriminators: cornea and chromosome.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Mnemonic: Hunters see clearly (no corneal clouding) and aggressively aim for the X (X-linked recessive)",
            sublabel: "Output — the source's own memory anchor for the pair.",
            variant: "output",
          },
          {
            id: "x1",
            label: "Contrast with the sphingolipidoses: the MPS pair stores sugar-chain glycosaminoglycans, not lipids — corneal clouding and coarse features are glycosaminoglycan signs",
            sublabel: "Separator — lipid storage versus sugar-chain storage.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "GAG deposition" },
          { from: "s1", to: "s2", label: "cornea + behavior split" },
          { from: "s2", to: "o1", label: "Hunters see clearly" },
          { from: "x1", to: "s2", label: "lipid vs sugar" },
        ],
        caption:
          "Hurler and Hunter are the same storage logic with two flipped flags. Both accumulate heparan and dermatan sulfate (the iduronidase enzymes), producing the coarse MPS phenotype — developmental delay, hirsutism, skeletal anomalies, airway obstruction, hepatosplenomegaly. The exam's split: Hurler is autosomal recessive with clouded corneas; Hunter is X-linked recessive, milder, with aggressive behavior and clear corneas. The enzyme names encode the pair — α-L-iduronidase (Hurler) versus iduronate-2-sulfatase (Hunter, the 'two' sulfatase) — and the source's mnemonic carries both discriminators at once: Hunters see clearly and aggressively aim for the X.",
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "sphingolipid-pathway-map",
      title: "Sphingolipid degradation — the ceramide hub with its six blocks",
      caption:
        "The source figure redrawn: GM2 → GM3 (① hexosaminidase A — Tay-Sachs), ceramide trihexoside → glucocerebroside (② α-galactosidase A — Fabry), GM3 → glucocerebroside (unlabeled sialidase step, as printed), glucocerebroside → ceramide (⑤ glucocerebrosidase — Gaucher), sulfatide (cerebroside sulfate) → galactocerebroside (③ arylsulfatase A — metachromatic leukodystrophy), galactocerebroside → ceramide (④ galactocerebrosidase — Krabbe), and sphingomyelin → ceramide (⑥ sphingomyelinase — Niemann-Pick), with ceramide as the convergence hub and the Ashkenazi and enzyme-replacement facts in the strips.",
      notice:
        "Use the map as the table's index: the number on each arrow names the disease, the metabolite behind the arrow names the accumulated substrate, and the two treatable blocks (② Fabry, ⑤ Gaucher) are the recombinant-enzyme diseases. The unlabeled GM3 → glucocerebroside arrow is printed without an enzyme in the source and kept that way — no disease of the six blocks it there.",
    },
    {
      kind: "visual",
      visualId: "cherry-red-spot-illustration",
      title: "The cherry-red spot — the shared sign of Tay-Sachs and Niemann-Pick",
      caption:
        "The source fundus photograph (label A) redrawn as a schematic: the red-tinted macular region surrounded by pale retinal opacification (lipid accumulation in the ganglion cell layer — the thin, ganglion-cell-free fovea stays red while the surrounding retina pales), with the optic disc and radiating vessels for orientation, plus the two-disease panel: Tay-Sachs (hexosaminidase A, GM2 ganglioside, lysosomes with onion skin, no hepatosplenomegaly) versus Niemann-Pick (sphingomyelinase, sphingomyelin + cholesterol, foam cells, hepatosplenomegaly).",
      notice:
        "The cherry-red spot is a two-disease sign in this table — Tay-Sachs and Niemann-Pick both show it, so the spot alone never answers the question. The organ check settles it: no hepatosplenomegaly is Tay-Sachs; hepatosplenomegaly with foam cells is Niemann-Pick. Both are autosomal recessive and both are ↑ in Ashkenazi Jews, so the stem's population clue does not separate them.",
    },
    {
      kind: "visual",
      visualId: "angiokeratoma-illustration",
      title: "Angiokeratomas — Fabry's bathing-suit vascular lesions",
      caption:
        "The source clinical photograph (label B) redrawn as a schematic: punctate red-blue papules scattered over a skin field in the bathing-suit distribution (hips, buttocks, groin, thighs), a magnified papule showing the small vascular lesion, and the Fabry panel — α-galactosidase A (treat with recombinant α-galactosidase), ceramide trihexoside (globotriaosylceramide), X-linked recessive, the early triad (episodic peripheral neuropathy, angiokeratomas, hypohidrosis) and the late phase (progressive renal failure, cardiovascular disease).",
      notice:
        "Fabry is the only X-linked sphingolipidosis — every other entry on the map is autosomal recessive, so 'X-linked' plus any sphingolipid finding IS Fabry. The early triad is the exam's favorite presentation: a boy with burning hands and feet, red-blue spots over the hips, and inability to sweat, whose renal and cardiac disease arrives decades later.",
    },
    {
      kind: "visual",
      visualId: "gaucher-cells-illustration",
      title: "Gaucher cells — crumpled tissue paper in the macrophage",
      caption:
        "The source histology image (label C) redrawn as a schematic: large lipid-laden macrophages with striated, crumpled-tissue-paper cytoplasm and small eccentric nuclei packing a marrow/spleen field, with the Gaucher panel — the most common sphingolipidosis; glucocerebrosidase (β-glucosidase) with recombinant-enzyme treatment; glucocerebroside; autosomal recessive; hepatosplenomegaly, pancytopenia, osteoporosis, avascular necrosis of the femur, bone crises.",
      notice:
        "The crumpled-tissue-paper cytoplasm is Gaucher's pathognomonic pattern — striated and folded, not bubbly. Pair it with the clinical cluster the source lists: pancytopenia from marrow crowding plus bone disease (osteoporosis, avascular necrosis of the femur, bone crises) plus hepatosplenomegaly in a patient who may be Ashkenazi Jewish — and remember Gaucher is the most common of them all.",
    },
    {
      kind: "visual",
      visualId: "niemann-pick-foam-cells",
      title: "Foam cells — Niemann-Pick's vacuolated macrophages",
      caption:
        "The source histology image (label D) redrawn as a schematic: foamy lipid-laden macrophages with bubbly, vacuolated cytoplasm (sphingomyelin + cholesterol storage) and small nuclei, contrasted explicitly with the Gaucher cell's striations, with the Niemann-Pick panel — sphingomyelinase ('No man, don't Pick the sphinx'), sphingomyelin + cholesterol, autosomal recessive, progressive neurodegeneration, hepatosplenomegaly (vs Tay-Sachs disease), foam cells, cherry-red spot.",
      notice:
        "The two macrophage patterns are the visual differential: crumpled paper (striated) is Gaucher; foam (vacuolated bubbles) is Niemann-Pick. Both fill marrow and spleen, but only Niemann-Pick adds the neurodegeneration-plus-cherry-red-spot picture, and only Gaucher adds the bone-crises and avascular-necrosis cluster.",
    },
    {
      kind: "table",
      title: "The lysosomal storage disease table — verbatim",
      intro:
        "The source table reproduced in full (sphingolipidoses and mucopolysaccharidoses), with every disease, findings block, deficient enzyme, accumulated substrate, and inheritance as printed.",
      columns: ["Disease", "Findings", "Deficient enzyme", "Accumulated substrate", "Inheritance"],
      rows: [
        [
          "Tay-Sachs disease",
          "Progressive neurodegeneration, developmental delay, hyperacusis, hyperreflexia, “cherry-red” spot on macula (red-tinted region surrounded by retinal opacification, resulting from lipid accumulation in ganglion cell layer), lysosomes with onion skin, no hepatosplenomegaly.",
          "Hexosaminidase A (“TAy-Sax”)",
          "GM2 ganglioside",
          "AR",
        ],
        [
          "Fabry disease",
          "Early: triad of episodic peripheral neuropathy, angiokeratomas, hypohidrosis. Late: progressive renal failure, cardiovascular disease.",
          "α-galactosidase A; treat with recombinant α-galactosidase",
          "Ceramide trihexoside (globotriaosylceramide)",
          "XR",
        ],
        [
          "Metachromatic leukodystrophy",
          "Central and peripheral demyelination with ataxia, dementia.",
          "Arylsulfatase A",
          "Cerebroside sulfate",
          "AR",
        ],
        [
          "Krabbe disease",
          "Peripheral neuropathy, destruction of oligodendrocytes, developmental delay, CN II atrophy, globoid cells.",
          "Galactocerebrosidase (galactosylceramidase)",
          "Galactocerebroside, psychosine",
          "AR",
        ],
        [
          "Gaucher disease",
          "Most common. Hepatosplenomegaly, pancytopenia, osteoporosis, avascular necrosis of femur, bone crises, Gaucher cells (lipid-laden macrophages resembling crumpled tissue paper).",
          "Glucocerebrosidase (β-glucosidase); treat with recombinant glucocerebrosidase",
          "Glucocerebroside",
          "AR",
        ],
        [
          "Niemann-Pick disease",
          "Progressive neurodegeneration, hepatosplenomegaly (vs Tay-Sachs disease), foam cells (lipid-laden macrophages), “cherry-red” spot on macula.",
          "Sphingomyelinase (No man, don’t Pick the sphinx)",
          "Sphingomyelin, cholesterol",
          "AR",
        ],
        [
          "Hurler syndrome",
          "Developmental delay, hirsutism, skeletal anomalies, airway obstruction, clouded cornea, hepatosplenomegaly.",
          "α-L-iduronidase",
          "Heparan sulfate, dermatan sulfate",
          "AR",
        ],
        [
          "Hunter syndrome",
          "Mild Hurler + aggressive behavior, no corneal clouding.",
          "Iduronate-2-sulfatase",
          "Heparan sulfate, dermatan sulfate",
          "XR",
        ],
      ],
      caption:
        "Lysosomal enzyme deficiency → accumulation of abnormal metabolic products. ↑ Incidence of Tay-Sachs, Niemann-Pick, and some forms of Gaucher disease in Ashkenazi Jews. Mnemonic: Hunters see clearly (no corneal clouding) and aggressively aim for the X (X-linked recessive).",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "The two-column facts the exam isolates",
      body:
        "Two X-linked diseases sit in this table: Fabry (α-galactosidase A) and Hunter (iduronate-2-sulfatase) — every other entry is autosomal recessive. Two diseases have recombinant-enzyme replacement: Fabry (recombinant α-galactosidase A) and Gaucher (recombinant glucocerebrosidase). Two diseases share the cherry-red spot: Tay-Sachs and Niemann-Pick. Two macrophage patterns: crumpled tissue paper (Gaucher) versus foam (Niemann-Pick). Two myelin-lipid demyelinating diseases: metachromatic leukodystrophy (sulfatide) and Krabbe (galactocerebroside + psychosine, with globoid cells).",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "An Ashkenazi Jewish infant loses milestones after a normal birth; examination shows hyperreflexia and an exaggerated startle response to sound, and the fundus shows a cherry-red macula with pale surrounding retina; the abdomen is flat.",
        discriminator: "Cherry-red spot + hyperacusis + NO hepatosplenomegaly",
        concept: "Tay-Sachs disease",
        answer:
          "Hexosaminidase A deficiency (AR) — GM2 ganglioside accumulates; progressive neurodegeneration, developmental delay/regression, hyperreflexia, hyperacusis, cherry-red spot, lysosomes with onion skin, no hepatosplenomegaly. Mnemonic: “TAy-Sax.”",
      },
      {
        stem: "An adolescent boy has episodes of burning pain in the hands and feet since childhood, sparse sweating, and punctate red-blue lesions over the hips, groin, and thighs; at age 30 he is in renal failure with left ventricular hypertrophy.",
        discriminator: "Early neuropathy + angiokeratomas + hypohidrosis, then renal/cardiac",
        concept: "Fabry disease",
        answer:
          "α-Galactosidase A deficiency (X-linked recessive) — ceramide trihexoside (globotriaosylceramide) accumulates; treat with recombinant α-galactosidase.",
      },
      {
        stem: "A toddler regresses developmentally and develops gait ataxia with a wide-based, unsteady gait; peripheral nerve conduction is slowed; nerve biopsy shows metachromatic granules on staining.",
        discriminator: "Central + peripheral demyelination with ataxia and dementia",
        concept: "Metachromatic leukodystrophy",
        answer:
          "Arylsulfatase A deficiency (AR) — cerebroside sulfate (sulfatide) accumulates, stripping central and peripheral myelin; ataxia and dementia follow.",
      },
      {
        stem: "An irritable, hypertonic infant with developmental delay dies within two years; brain biopsy shows multinucleated globoid cells and near-total loss of myelin with preserved axons; the optic discs are pale.",
        discriminator: "Globoid cells + peripheral neuropathy + CN II atrophy",
        concept: "Krabbe disease",
        answer:
          "Galactocerebrosidase (galactosylceramidase) deficiency (AR) — galactocerebroside and psychosine accumulate; oligodendrocyte destruction demyelinates the brain, peripheral neuropathy, developmental delay, CN II atrophy, globoid cells.",
      },
      {
        stem: "An Ashkenazi Jewish adult has massive splenomegaly with pancytopenia, bone pain crises, and an MRI showing avascular necrosis of the femoral head; the marrow shows large macrophages with folded, tissue-paper-like cytoplasm.",
        discriminator: "Crumpled-tissue-paper cells + pancytopenia + bone crises",
        concept: "Gaucher disease",
        answer:
          "Glucocerebrosidase (β-glucosidase) deficiency (AR, the most common sphingolipidosis) — glucocerebroside accumulates; hepatosplenomegaly, pancytopenia, osteoporosis, avascular necrosis of femur, bone crises; treat with recombinant glucocerebrosidase.",
      },
      {
        stem: "An infant with progressive neurodegeneration and a cherry-red macula has massive hepatosplenomegaly; the marrow shows foam cells with vacuolated cytoplasm.",
        discriminator: "Cherry-red spot PLUS hepatosplenomegaly and foam cells",
        concept: "Niemann-Pick disease",
        answer:
          "Sphingomyelinase deficiency (AR) — sphingomyelin and cholesterol accumulate; mnemonic: “No man, don’t Pick the sphinx.” The hepatosplenomegaly separates it from Tay-Sachs.",
      },
      {
        stem: "A 2-year-old with coarse facial features, a protruding tongue, cloudy corneas, umbilical hernia, and hepatosplenomegaly has developmental delay; a sibling with milder coarse features, clear corneas, and aggressive behavior is also affected.",
        discriminator: "Corneal clouding (Hurler) versus clear corneas + aggressive behavior (Hunter)",
        concept: "Mucopolysaccharidoses — Hurler and Hunter",
        answer:
          "Hurler: α-L-iduronidase (AR) with clouded cornea. Hunter: iduronate-2-sulfatase (XR), mild Hurler + aggressive behavior, no corneal clouding. Both accumulate heparan sulfate and dermatan sulfate. Mnemonic: Hunters see clearly (no corneal clouding) and aggressively aim for the X (X-linked recessive).",
      },
    ],
    traps: [
      {
        a: "The cherry-red spot means Tay-Sachs",
        b: "Tay-Sachs AND Niemann-Pick both show the cherry-red spot",
        whyConfused: "Tay-Sachs is the disease most associated with the sign.",
        keyDifference:
          "The organ exam separates them: Tay-Sachs has NO hepatosplenomegaly (the storage is neural — lysosomes with onion skin); Niemann-Pick has hepatosplenomegaly with foam cells (sphingomyelin, cholesterol).",
        clue: "Any stem pairing a cherry-red spot with organomegaly.",
      },
      {
        a: "Fabry is autosomal recessive like the other sphingolipidoses",
        b: "Fabry is X-linked recessive",
        whyConfused: "Six of the eight table entries are AR.",
        keyDifference:
          "Fabry (α-galactosidase A) and Hunter (iduronate-2-sulfatase) are the two X-linked entries — an X-linked pedigree or an affected male with angiokeratomas is Fabry until proven otherwise.",
        clue: "X-linked pedigree, angiokeratomas, or a mother-son pattern.",
      },
      {
        a: "Hurler and Hunter differ in the accumulated substrate",
        b: "Both accumulate heparan sulfate and dermatan sulfate",
        whyConfused: "Their phenotypes overlap almost completely.",
        keyDifference:
          "The split is cornea and chromosome: Hurler (AR, α-L-iduronidase) clouds the cornea; Hunter (XR, iduronate-2-sulfatase) does not, and adds aggressive behavior — Hunters see clearly and aggressively aim for the X.",
        clue: "Corneal clouding present or absent in a coarse-featured child.",
      },
      {
        a: "Krabbe accumulates galactocerebroside only",
        b: "Krabbe accumulates galactocerebroside AND psychosine",
        whyConfused: "The substrate column lists the myelin lipid first.",
        keyDifference:
          "Psychosine is the neurotoxin behind the globoid-cell reaction and the aggressive demyelination — the source lists both, and exam answers include both.",
        clue: "Globoid cells or a demyelinating-question that lists substrates.",
      },
    ],
    pivots: [
      {
        lookAlike: "An infant with neurodegeneration and a cherry-red spot (Tay-Sachs vs Niemann-Pick)",
        differentiator: "Liver and spleen size, and the lysosomal/cellular pattern",
        correctPath:
          "No hepatosplenomegaly + lysosomes with onion skin → Tay-Sachs (hexosaminidase A, GM2); hepatosplenomegaly + foam cells → Niemann-Pick (sphingomyelinase, sphingomyelin + cholesterol).",
      },
      {
        lookAlike: "A coarse-featured child with hepatosplenomegaly (Hurler vs Hunter vs the sphingolipidoses)",
        differentiator: "Cornea, behavior, inheritance, and substrate class",
        correctPath:
          "Cloudy cornea + AR → Hurler (α-L-iduronidase); clear cornea + aggressive behavior + XR → Hunter (iduronate-2-sulfatase); either way the substrate is glycosaminoglycan (heparan + dermatan sulfate), not lipid — no cherry-red spot, no foam or Gaucher cells.",
      },
    ],
    miniCase: {
      vignette:
        "A 3-year-old boy is referred for an enlarging abdomen and easy bruising. He is the only child of Ashkenazi Jewish parents without consanguinity. Over the past year his belly has protruded while his arms and legs have thinned; he has had two visits for nosebleeds and is currently found to have a hemoglobin of 9.1, platelets of 84,000, and a white count at the low-normal border. He has complained of severe thigh and hip pain waking him at night, and a hip MRI performed after he began limping shows focal collapse of the femoral head consistent with avascular necrosis; spine films disclose diffuse osteopenia. Examination confirms massive splenomegaly with the liver edge 5 cm below the costal margin. A bone marrow aspirate shows large cells with small eccentric nuclei and abundant striated, folded cytoplasm resembling crumpled packing paper.",
      question:
        "Which enzyme deficiency best explains this child's findings, and what treatment does the source recommend?",
      options: [
        {
          label: "A",
          text: "Glucocerebrosidase (β-glucosidase); treat with recombinant glucocerebrosidase",
          correct: true,
          why: "Correct — Gaucher disease, the most common sphingolipidosis: hepatosplenomegaly with pancytopenia from storage-cell crowding, osteoporosis with avascular necrosis of the femur and bone crises, and the pathognomonic crumpled-tissue-paper (striated) Gaucher cells; autosomal recessive with ↑ incidence in some Ashkenazi forms; one of the two enzyme-replaceable blocks.",
        },
        {
          label: "B",
          text: "Sphingomyelinase; treat with recombinant sphingomyelinase",
          why: "That is Niemann-Pick — foam cells (vacuolated, not striated), progressive neurodegeneration, and a cherry-red spot; sphingomyelinase is not among the two recombinant-enzyme treatments the source lists.",
        },
        {
          label: "C",
          text: "α-Galactosidase A; treat with recombinant α-galactosidase",
          why: "That is Fabry — X-linked, with angiokeratomas, hypohidrosis, and late renal/cardiac disease, not a childhood storage-cell syndrome with bone crises.",
        },
        {
          label: "D",
          text: "Galactocerebrosidase (galactosylceramidase)",
          why: "That is Krabbe disease — globoid cells, demyelination, peripheral neuropathy, and CN II atrophy in a rapidly deteriorating infant, not a splenomegaly-pancytopenia-bone-disease presentation.",
        },
        {
          label: "E",
          text: "α-L-Iduronidase",
          why: "That is Hurler syndrome — coarse features, clouded corneas, airway obstruction, and hepatosplenomegaly from glycosaminoglycan storage, without the crumpled-tissue-paper macrophages.",
        },
      ],
      reasoning:
        "Three anchors name this disease. First, the cell: large macrophages with STRIATED, folded, crumpled-tissue-paper cytoplasm and eccentric nuclei are Gaucher cells — the vacuolated foam cell would point to Niemann-Pick instead. Second, the organ-labody constellation: massive hepatosplenomegaly with pancytopenia (crowded marrow and sequestration) is the reticuloendothelial storage pattern. Third, the bones: osteoporosis, avascular necrosis of the femur, and bone crises are Gaucher's signature cluster, unique among the sphingolipidoses. The Ashkenazi background fits (↑ in some forms of Gaucher). The block sits on arrow ⑤ of the ceramide hub — glucocerebrosidase (β-glucosidase), glucocerebroside upstream — and the treatment the source names is recombinant glucocerebrosidase, making Gaucher (with Fabry) one of the two enzyme-replaceable storage diseases.",
    },
  },
  mnemonics: [
    {
      code: "“TAy-Sax”",
      meaning:
        "The source's Tay-Sachs enzyme mnemonic: hexosaminidase A — the A's pair (TAy-Sax = hexosaminidAse A).",
      memorizes: "Tay-Sachs's deficient enzyme",
      whenToUse: "Any Tay-Sachs enzyme question.",
      clinical: "Blocked GM2 → GM3; GM2 ganglioside accumulates in the ganglion cell layer (cherry-red spot).",
    },
    {
      code: "“No man, don’t Pick the sphinx.”",
      meaning:
        "The source's Niemann-Pick mnemonic: sphingoMYELinase ↔ NieMANN-Pick — the sphinx is the sphingomyelin connection.",
      memorizes: "Niemann-Pick's deficient enzyme and substrate",
      whenToUse: "Niemann-Pick enzyme questions and foam-cell stems.",
      clinical: "Sphingomyelin (plus cholesterol) accumulates; foam cells, hepatosplenomegaly, cherry-red spot.",
    },
    {
      code: "“Hunters see clearly (no corneal clouding) and aggressively aim for the X (X-linked recessive).”",
      meaning:
        "The source's Hunter-syndrome mnemonic carrying both discriminators against Hurler: clear corneas and X-linked inheritance.",
      memorizes: "The Hurler–Hunter split",
      whenToUse: "Any mucopolysaccharidosis comparison question.",
      clinical: "Hurler (AR, α-L-iduronidase) clouds the cornea; Hunter (XR, iduronate-2-sulfatase) does not and adds aggressive behavior.",
    },
    {
      code: "“Crumpled paper vs foam”",
      meaning:
        "KYP's macrophage-pattern anchor for the two reticuloendothelial sphingolipidoses: striated folded cytoplasm = Gaucher; bubbly vacuolated cytoplasm = Niemann-Pick.",
      memorizes: "The histology differential between Gaucher and Niemann-Pick cells",
      whenToUse: "Any marrow or spleen histology stem showing storage macrophages.",
      clinical: "Gaucher adds bone crises and avascular necrosis; Niemann-Pick adds neurodegeneration and the cherry-red spot.",
    },
  ],
  rapidReview: {
    s30: [
      "Tay-Sachs = hexosaminidase A, GM2, cherry-red spot, NO hepatosplenomegaly",
      "Niemann-Pick = sphingomyelinase, foam cells, hepatosplenomegaly, cherry-red spot",
      "Gaucher = glucocerebrosidase, crumpled tissue paper, most common",
      "Fabry = XR, α-galactosidase A, angiokeratomas + hypohidrosis",
    ],
    m3: [
      "Krabbe = galactocerebrosidase, globoid cells, psychosine; MLD = arylsulfatase A, demyelination",
      "Hurler = AR, α-L-iduronidase, clouded cornea; Hunter = XR, iduronate-2-sulfatase, clear cornea + aggressive",
      "Recombinant enzyme: Fabry (α-galactosidase A) + Gaucher (glucocerebrosidase)",
      "↑ Ashkenazi: Tay-Sachs, Niemann-Pick, some Gaucher",
    ],
    m10: [
      "Ceramide hub: GM2→GM3→glucocerebroside→ceramide; sulfatide→galactocerebroside→ceramide; sphingomyelin→ceramide",
      "Krabbe stores galactocerebroside AND psychosine (the neurotoxin)",
      "MPS pair both store heparan + dermatan sulfate — the split is cornea and chromosome",
      "Cherry-red spot = Tay-Sachs or Niemann-Pick — organs settle it",
    ],
  },
  recall: [
    {
      q: "What is the shared mechanism of all lysosomal storage diseases, and which three are ↑ in Ashkenazi Jews?",
      a: "Lysosomal enzyme deficiency → accumulation of abnormal metabolic products; ↑ incidence of Tay-Sachs, Niemann-Pick, and some forms of Gaucher disease in Ashkenazi Jews.",
    },
    {
      q: "Name the six sphingolipidoses with enzyme and accumulated substrate.",
      a: "Tay-Sachs — hexosaminidase A — GM2 ganglioside; Fabry — α-galactosidase A — ceramide trihexoside (globotriaosylceramide); metachromatic leukodystrophy — arylsulfatase A — cerebroside sulfate; Krabbe — galactocerebrosidase (galactosylceramidase) — galactocerebroside, psychosine; Gaucher — glucocerebrosidase (β-glucosidase) — glucocerebroside; Niemann-Pick — sphingomyelinase — sphingomyelin, cholesterol.",
    },
    {
      q: "Describe the cherry-red spot and why the macula stays red.",
      a: "A red-tinted region (the macula) surrounded by retinal opacification, resulting from lipid accumulation in the ganglion cell layer — the thin, ganglion-cell-poor fovea stays red while the surrounding retina pales. Shared by Tay-Sachs and Niemann-Pick.",
    },
    {
      q: "What distinguishes Tay-Sachs from Niemann-Pick when both show a cherry-red spot?",
      a: "Tay-Sachs: no hepatosplenomegaly, lysosomes with onion skin, GM2 ganglioside. Niemann-Pick: hepatosplenomegaly, foam cells (lipid-laden macrophages), sphingomyelin + cholesterol. Both AR, both ↑ in Ashkenazi Jews.",
    },
    {
      q: "Give Fabry's inheritance, enzyme, substrate, early triad, late findings, and treatment.",
      a: "X-linked recessive; α-galactosidase A; ceramide trihexoside (globotriaosylceramide); early triad of episodic peripheral neuropathy, angiokeratomas, hypohidrosis; late progressive renal failure and cardiovascular disease; treat with recombinant α-galactosidase.",
    },
    {
      q: "What are Krabbe's five findings and its two accumulated substrates?",
      a: "Peripheral neuropathy, destruction of oligodendrocytes, developmental delay, CN II atrophy, globoid cells; galactocerebroside and psychosine (galactocerebrosidase/galactosylceramidase deficiency, AR).",
    },
    {
      q: "Why does Gaucher cause pancytopenia and bone disease?",
      a: "Gaucher cells (lipid-laden macrophages resembling crumpled tissue paper) pack the marrow and splenic pulp — hepatosplenomegaly with pancytopenia from crowding — while glucocerebroside storage in bone produces osteoporosis, avascular necrosis of the femur, and bone crises; glucocerebrosidase (β-glucosidase) deficiency, AR, most common, treat with recombinant glucocerebrosidase.",
    },
    {
      q: "Which two lysosomal storage diseases are X-linked recessive?",
      a: "Fabry (α-galactosidase A) among the sphingolipidoses, and Hunter syndrome (iduronate-2-sulfatase) among the mucopolysaccharidoses; all other table entries are autosomal recessive.",
    },
    {
      q: "Contrast Hurler and Hunter on inheritance, enzyme, cornea, and behavior.",
      a: "Hurler: AR, α-L-iduronidase, clouded cornea, developmental delay, hirsutism, skeletal anomalies, airway obstruction, hepatosplenomegaly. Hunter: XR, iduronate-2-sulfatase, mild Hurler + aggressive behavior, no corneal clouding. Both accumulate heparan sulfate and dermatan sulfate. Mnemonic: Hunters see clearly (no corneal clouding) and aggressively aim for the X (X-linked recessive).",
    },
    {
      q: "Which two sphingolipidoses have recombinant-enzyme replacement?",
      a: "Fabry — treat with recombinant α-galactosidase; Gaucher — treat with recombinant glucocerebrosidase.",
    },
  ],
  related: [
    {
      title: "Glycogen Metabolism & Storage Diseases",
      topicId: "glycogen-metabolism",
      note: "Pompe disease — the lysosomal acid maltase block — is the glycogen chapter's lysosomal-storage entry and the bridge to this table's logic of one-enzyme-one-substrate blocks.",
    },
    {
      title: "Amino Acidopathies",
      topicId: "aminoacidopathies",
      note: "The same substrate-backs-up logic applied to amino acid metabolism — enzyme block, substrate pile-up, product starvation — with the newborn-screen timing these diseases lack.",
    },
    {
      title: "Metabolism Overview",
      topicId: "metabolismOverview",
      note: "Where the sphingolipid hub sits in the whole-metabolism map — membrane-lipid turnover feeding the lysosome.",
    },
    {
      title: "Urea Cycle Disorders & Hyperammonemia",
      topicId: "urea-cycle-disorders",
      note: "The other great inborn-error table read by enzyme-block position — the same hub-and-arrow logic on the nitrogen side.",
    },
  ],
  crossLinks: [
    {
      subject: "Neurology",
      connection: "The demyelinating pair (metachromatic leukodystrophy, Krabbe) and the neurodegenerative trio (Tay-Sachs, Niemann-Pick, Krabbe) — the lysosomal storage diseases that present to the neurologist.",
    },
    {
      subject: "Ophthalmology",
      connection: "The cherry-red macula (Tay-Sachs, Niemann-Pick) and corneal clouding (Hurler, absent in Hunter) — the two ocular signs that split this table.",
    },
    {
      subject: "Hematology & Oncology",
      connection: "Pancytopenia from Gaucher-cell marrow infiltration and splenic sequestration — the storage disease that mimics a hematologic disorder.",
    },
  ],
};
