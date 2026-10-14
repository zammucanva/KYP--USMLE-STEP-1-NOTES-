import type { KypUsMLENote } from "../types";

// Biochemistry — Genetics II (G2).
// Source: First Aid 2026, Part 1 pdf 81 / book 59 (X-linked recessive diseases;
// X-inactivation/lyonization; Muscular dystrophies: Duchenne, Becker, myotonic)

export const muscularDystrophies: KypUsMLENote = {
  id: "muscular-dystrophies",
  title: "Muscular Dystrophies",
  subtitle:
    "Duchenne vs Becker is one reading frame: a frameshift or nonsense mutation truncates dystrophin entirely (Duchenne = deleted dystrophin), an in-frame deletion leaves a shorter but working protein (Becker is Better) — and the Gowers sequence, the calf pseudohypertrophy, and the largest gene in the genome all hang off the same lost anchor.",
  subject: "Biochemistry",
  system: "Section II · High-Yield General Principles — Genetics",
  pilotCategory: "Genetics — X-linked recessive disease and reading-frame logic",
  difficulty: 2,
  readTime: 11,
  sourceRef:
    "First Aid 2026, Part 1 pp. 59 (X-linked recessive diseases; Duchenne and Becker muscular dystrophies; myotonic dystrophy; lyonization)",
  tags: [
    "Duchenne muscular dystrophy",
    "Becker muscular dystrophy",
    "dystrophin",
    "DMD",
    "frameshift",
    "Gowers sign",
    "pseudohypertrophy",
    "myotonic dystrophy",
    "DMPK",
    "CTG repeat",
    "lyonization",
    "Barr body",
    "G6PD",
    "X-linked recessive",
    "creatine kinase",
  ],
  core: {
    what: "Duchenne muscular dystrophy: an X-linked recessive disorder typically due to frameshift deletions or nonsense mutations → truncated or absent dystrophin protein → progressive myofiber damage. Weakness begins in the pelvic girdle muscles and progresses superiorly; pseudohypertrophy of calf muscles due to fibrofatty replacement of muscle; waddling gait; onset before 5 years of age; dilated cardiomyopathy is a common cause of death; Gowers sign — the patient uses the upper extremities to help stand up. The dystrophin gene (DMD) is the largest protein-coding human gene → increased chance of spontaneous mutation; loss of dystrophin → myonecrosis; ↑CK and aldolase; genetic testing confirms. Becker: X-linked recessive, typically NON-frameshift deletions (partially functional instead of truncated protein), less severe, onset in adolescence or early adulthood. Myotonic dystrophy: autosomal dominant, onset 20–30 years, CTG repeat expansion in the DMPK gene → abnormal expression of myotonin protein kinase → percussion myotonia, muscle wasting, cataracts, testicular atrophy, frontal balding, arrhythmia.",
    why: "This page carries the X-linked recessive disease list the exam recycles everywhere, the lyonization rule that lets females express XLR disease, and the single cleanest reading-frame lesson in medicine — frameshift vs in-frame deletion deciding Duchenne vs Becker. The Gowers sign and calf pseudohypertrophy are among the most photograph-tested physical findings in the book.",
    keyIdea: "Sort by the PROTEIN'S fate: frameshift/nonsense → no readable codon → truncated or absent dystrophin → Duchenne (early, severe, cardiomyopathic); in-frame deletion → exon boundaries preserved → partially functional dystrophin → Becker (later, milder — Becker is Better). Both climb the body the same way — pelvic girdle first, then superiorly — because the anchor protein is lost first where muscles work hardest. And when an XLR disease appears in a girl, think lyonization: skewed X-inactivation can expose a heterozygote (G6PD is the source's example), and Turner 45,XO females have no second X to buffer.",
  },
  mechanisms: [
    {
      id: "dystrophin-frameshift-logic",
      title: "Duchenne vs Becker — the reading frame decides",
      context: "Mutations of the DMD gene",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A deletion (or mutation) in the dystrophin gene (DMD) — the largest protein-coding human gene → ↑ chance of spontaneous mutation",
            sublabel: "Input — size itself is mutational surface area.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Frameshift deletions or nonsense mutations → truncated or absent dystrophin protein",
            sublabel: "Molecular — Duchenne. The reading frame collapses downstream of the break.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Non-frameshift (in-frame) deletions → partially functional dystrophin",
            sublabel: "Molecular — Becker. Exon boundaries stay legible; a shorter working protein survives.",
            variant: "process",
          },
          {
            id: "s3",
            label: "Dystrophin helps anchor muscle fibers to the extracellular matrix, primarily in skeletal and cardiac muscles",
            sublabel: "Molecular — the structural job whose loss causes myonecrosis.",
            variant: "target",
          },
          {
            id: "o1",
            label: "Duchenne: onset before 5 years, progressive myofiber damage, dilated cardiomyopathy — a common cause of death",
            sublabel: "Output — 'Duchenne = deleted dystrophin.' ↑CK and aldolase; genetic testing confirms.",
            variant: "output",
          },
          {
            id: "o2",
            label: "Becker: less severe (Becker is Better), onset in adolescence or early adulthood",
            sublabel: "Output — the same disease at half strength.",
            variant: "output",
          },
          {
            id: "x1",
            label: "2⁄3 of cases (both diseases) have large deletions spanning one or more exons — deletions can cause EITHER Duchenne or Becker",
            sublabel: "Clinical — the frame, not the size, is the discriminator.",
            variant: "inhibit",
          },
          {
            id: "x2",
            label: "Splicing errors can also produce Duchenne",
            sublabel: "Clinical — the second route to a lost reading frame.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1" },
          { from: "trigger", to: "s2" },
          { from: "s1", to: "s3", label: "no anchor" },
          { from: "s2", to: "s3", label: "weak anchor" },
          { from: "s3", to: "o1", label: "loss of dystrophin → myonecrosis" },
          { from: "s3", to: "o2", label: "partial function" },
          { from: "x1", to: "s1", label: "frame shifts" },
          { from: "x2", to: "s2", type: "inhibit", label: "frame lost by splicing" },
        ],
        caption:
          "One gene, two fates, decided by the reading frame: frameshift/nonsense → truncated or absent dystrophin → Duchenne (deleted dystrophin, onset <5, cardiomyopathy); in-frame deletion → partially functional dystrophin → Becker (Better, adolescence/adulthood). The protein's job — anchoring fibers to the extracellular matrix in skeletal and cardiac muscle — explains why both climb from the pelvic girdle upward and why the heart fails.",
      },
    },
    {
      id: "gowers-proximal-ascension",
      title: "The Gowers ascent — pelvic girdle first, then superiorly",
      context: "Clinical progression of dystrophin loss",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Loss of dystrophin anchoring in skeletal muscle → myonecrosis, progressive myofiber damage",
            sublabel: "Input — the structural failure begins in the muscles that work hardest.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Weakness begins in the pelvic girdle muscles and progresses superiorly",
            sublabel: "Clinical — hip stabilizers fail first; the ascent is bottom-up.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Fibrofatty replacement of muscle → pseudohypertrophy of calf muscles",
            sublabel: "Clinical — the calves look strong because fat and collagen replaced fibers (image A).",
            variant: "process",
          },
          {
            id: "o1",
            label: "Gowers sign — patient uses upper extremities to help stand up",
            sublabel: "Output — climbing up own thighs; waddling gait; lordosis from hip weakness.",
            variant: "output",
          },
          {
            id: "x1",
            label: "Classically seen in Duchenne, but also in other muscular dystrophies and inflammatory myopathies (eg, polymyositis)",
            sublabel: "Clinical — a sign of proximal pelvic-girdle weakness, not of one disease.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1" },
          { from: "s1", to: "s2", label: "damage + replacement" },
          { from: "s1", to: "o1", label: "proximal weakness" },
          { from: "x1", to: "o1", type: "inhibit", label: "not Duchenne-specific" },
        ],
        caption:
          "The ascent in one breath: anchor lost → pelvic girdle weakens first → climbing stairs, then rising from the floor, require the arms (Gowers) → calves enlarge with fibrofatty replacement (pseudohypertrophy) → gait waddles, spine lordoses. Gowers marks severe proximal weakness — Duchenne classically, but polymyositis and other dystrophies can draw the same climb.",
      },
    },
  ],
  blocks: [
    {
      kind: "text",
      title: "The X-linked recessive list — and how it leaks into females",
      body: [
        "The page opens with the exam's roster of X-linked recessive diseases: Bruton agammaglobulinemia, Duchenne and Becker muscular dystrophies, Fabry disease, G6PD deficiency, hemophilia A and B, Hunter syndrome, Lesch-Nyhan syndrome, ocular albinism, ornithine transcarbamylase (OTC) deficiency, and Wiskott-Aldrich syndrome. Note the two escapees from larger lists: Fabry is the sphingolipidosis that went X-linked, Hunter the mucopolysaccharidosis.",
        "Then the leak: X-inactivation (lyonization) — during development, one of the X chromosomes in each XX cell is randomly deactivated and condensed into a Barr body (methylated heterochromatin). If skewed inactivation occurs, XX individuals may express X-linked recessive diseases (eg, G6PD); penetrance and severity of X-linked dominant diseases in XX individuals may also be impacted. And females with Turner syndrome (45,XO) are more likely to have an X-linked recessive disorder — with a single X there is no second copy to buffer it.",
      ],
    },
    {
      kind: "text",
      title: "Duchenne — the deleted dystrophin",
      body: [
        "Duchenne muscular dystrophy is an X-linked recessive disorder typically due to frameshift deletions or nonsense mutations → truncated or absent dystrophin protein → progressive myofiber damage; it can also result from splicing errors. The mnemonic is literal: Duchenne = deleted dystrophin. The dystrophin gene (DMD) is the largest protein-coding human gene → an increased chance of spontaneous mutation — size is mutational surface area, which is why a third of Duchenne cases arise de novo.",
        "The clinical arc is bottom-up: weakness begins in the pelvic girdle muscles and progresses superiorly; the calves enlarge (pseudohypertrophy of calf muscles due to fibrofatty replacement of muscle), the gait waddles, and the lumbar spine lordoses to compensate for weak hips. Onset is before 5 years of age, and dilated cardiomyopathy is a common cause of death — the heart uses the same anchor protein. Labs: ↑CK and aldolase; genetic testing confirms the diagnosis.",
      ],
    },
    {
      kind: "visual",
      visualId: "gowers-sequence",
      title: "The Gowers sign — climbing the thighs in four stages",
      caption:
        "The source's Gowers illustration rebuilt as a schematic sequence: (1) the child moves to hands and knees; (2) buttocks raised high as he draws his feet under himself; (3) hands pressed on knees and thighs — 'Pushing on leg to stand' — as he walks his arms up his legs; (4) upright with exaggerated lumbar lordosis. Labels point to the enlarged calves (Calf pseudohypertrophy — fibrofatty replacement of muscle), the inwardly curved lower spine (Lordosis), and the wasted upper legs (Thigh atrophy). Caption note: Gowers is classically seen in Duchenne muscular dystrophy, but also seen in other muscular dystrophies and inflammatory myopathies (eg, polymyositis).",
      notice:
        "Gowers is PROXIMAL weakness made visible: pelvic-girdle muscles fail first, so the arms substitute for the hips. Any child who rises by climbing his own thighs has severe proximal lower-extremity weakness — Duchenne until proven otherwise, with polymyositis and the other dystrophies in the differential.",
    },
    {
      kind: "visual",
      visualId: "dmd-histology-pattern",
      title: "What the biopsy shows — fibrofatty replacement (image A)",
      caption:
        "The source's Duchenne histology image (A) rebuilt as a schematic: a field of muscle fibers — round-to-polygonal profiles with peripheral nuclei — interrupted by pale patches where fibers have died and been replaced by fat and collagen; three red arrows mark the fibrofatty replacement patches; the bracket spans the surviving 'Muscle fibers.' Annotation ties it together: pseudohypertrophy of the calf = this fibrofatty replacement enlarging the muscle while weakening it; loss of dystrophin → myonecrosis; ↑CK and aldolase; genetic testing confirms.",
      notice:
        "The pseudohypertrophy paradox is IN this image: the calves grow bigger while growing weaker because fat and fibrous tissue fill the space where contractile fibers died. Enlarged + weak is the dystrophic signature; enlarged + strong would be an athlete.",
    },
    {
      kind: "table",
      title: "Duchenne vs Becker vs Myotonic — the three-dystrophy card",
      intro: "One table to answer every comparison question from the page.",
      columns: ["Feature", "Duchenne", "Becker", "Myotonic dystrophy"],
      rows: [
        ["Inheritance", "X-linked recessive", "X-linked recessive", "Autosomal dominant (onset 20–30 years)"],
        ["Mutation", "Frameshift deletions or nonsense mutations (also splicing errors)", "Non-frameshift deletions in dystrophin gene", "CTG trinucleotide repeat expansion in the DMPK gene → abnormal expression of myotonin protein kinase"],
        ["Dystrophin", "Truncated or absent (Duchenne = deleted dystrophin)", "Partially functional instead of truncated", "Not a dystrophinopathy"],
        ["Onset", "Before 5 years of age", "Adolescence or early adulthood", "20–30 years (may show anticipation)"],
        ["Severity / death", "Progressive myofiber damage; dilated cardiomyopathy is a common cause of death", "Less severe (Becker is Better)", "Percussion myotonia (difficulty releasing hand from handshake), muscle wasting, cataracts, testicular atrophy, frontal balding, arrhythmia"],
        ["Mnemonic", "Duchenne = deleted dystrophin", "Becker is Better", "Cataracts, Toupee (early balding in males), Gonadal atrophy"],
      ],
      caption:
        "Both X-linked dystrophies can arise from large deletions spanning one or more exons (2⁄3 of cases) — the READING FRAME, not the deletion size, picks Duchenne vs Becker. Myotonic joins the table as the AD counterpoint with CTG anticipation and its Cataracts–Toupee–Gonadal atrophy triad; biopsy shows ring fibers and central nuclei.",
    },
    {
      kind: "text",
      title: "Myotonic dystrophy — the AD dystrophy with a handshake tell",
      body: [
        "Myotonic dystrophy is autosomal dominant with onset at 20–30 years — the CTG trinucleotide repeat expansion in the DMPK gene causes abnormal expression of myotonin protein kinase. The bedside signature is percussion myotonia: difficulty releasing the hand from a handshake, where the grip fails to relax after percussion or contraction.",
        "The system inventory is the Cataracts–Toupee–Gonadal atrophy mnemonic in full: muscle wasting, cataracts, early frontal balding in males (the toupee line), testicular atrophy with reduced fertility in females, and arrhythmia from cardiac conduction involvement. Muscle biopsy shows ring fibers and central nuclei. Because it is a repeat-expansion disease it may show anticipation — severity increasing and onset dropping across generations — which links it forward to the trinucleotide repeat table.",
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title: "How the exam asks this page",
      body: "Five recurring shapes: (1) the Gowers vignette — boy under 5 climbing his thighs, calf pseudohypertrophy, waddling gait, ↑CK → Duchenne (XLR, frameshift/nonsense); (2) the same findings at 18 with a milder course → Becker (non-frameshift, Becker is Better); (3) the handshake stem — difficulty releasing grip, cataracts, frontal balding, arrhythmia → myotonic dystrophy (AD, CTG in DMPK); (4) the female XLR stem — skewed lyonization (G6PD as the example) or Turner 45,XO; (5) the list-matching stem — which disease is X-linked among sphingolipidoses (Fabry) or MPS (Hunter).",
    },
    {
      kind: "callout",
      variant: "why",
      title: "Why the biggest gene makes the most spontaneous disease",
      body: "The dystrophin gene (DMD) is the largest protein-coding human gene — 2.2 million bases and 79 exons — and the source's one-line consequence is the deep principle: an increased chance of spontaneous mutation. Every base copied is a lottery ticket for polymerase error; a gene with more bases buys more tickets. That is why a third of Duchenne cases arise in families with no history — the mutation is fresh, not inherited — and why DMD tops the list of X-linked de novo disease. Size also explains the treatment logic downstream: with 79 exons to lose, in-frame deletions that skip whole exons but keep the frame readable (Becker-type) are a realistic outcome the genome itself demonstrates.",
    },
  ],
  clinical: [
    {
      kind: "text",
      title: "From wheelchair to cardiogram — the management arc",
      body: [
        "Duchenne management follows the ascent of the disease: mobility (stretching, glucocorticoids that slow the decline, orthoses, wheelchair transition as pelvic-girdle weakness ascends), spine (lordosis progressing to scoliosis, monitored and braced), and lungs (declining respiratory mechanics late). The page's own hard endpoint stays in view — dilated cardiomyopathy is a common cause of death, so the cardiogram is as routine as the CK.",
        "Becker patients walk the same arc later and slower; myotonic patients need the cataract surgery, the arrhythmia screen (conduction disease can be lethal), and the testosterone/endocrine follow-through that the gonadal atrophy implies. Genetic counseling differs by mechanism: carrier mothers of Duchenne boys (XLR) face 50% transmission to sons, while a third of cases are fresh mutations — and both muscular dystrophies share the DMD locus, so family testing must read the frame, not just the deletion.",
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 4-year-old boy waddles, cannot rise from the floor without pushing his hands against his knees and thighs, and has conspicuously enlarged calves; onset of difficulty climbing stairs was noted at age 3.",
        discriminator: "Gowers sign + calf pseudohypertrophy + onset before 5",
        concept: "Duchenne muscular dystrophy",
        answer: "X-linked recessive; frameshift deletions or nonsense mutations → truncated or absent dystrophin; ↑CK and aldolase; genetic testing confirms; Duchenne = deleted dystrophin",
      },
      {
        stem: "An 18-year-old track athlete develops progressive proximal weakness and mildly enlarged calves; biopsy shows reduced-size dystrophin on Western blot; a maternal uncle had similar late-onset weakness.",
        discriminator: "Later onset + partially functional dystrophin",
        concept: "Becker muscular dystrophy",
        answer: "X-linked recessive, typically non-frameshift deletions in dystrophin gene — partially functional instead of truncated protein; less severe (Becker is Better); onset in adolescence or early adulthood",
      },
      {
        stem: "A 34-year-old man cannot release his grip after a firm handshake; examination shows early frontal balding, lens opacities, and temporal wasting; ECG shows first-degree AV block.",
        discriminator: "Percussion myotonia + cataracts + balding + arrhythmia",
        concept: "Myotonic dystrophy",
        answer: "Autosomal dominant; CTG trinucleotide repeat expansion in the DMPK gene → abnormal expression of myotonin protein kinase; Cataracts, Toupee, Gonadal atrophy; biopsy shows ring fibers and central nuclei",
      },
      {
        stem: "A girl with Turner syndrome (45,XO) is found to have an X-linked recessive condition; alternatively, an XX woman expresses G6PD deficiency despite heterozygosity.",
        discriminator: "The single X / skewed inactivation",
        concept: "Lyonization and XLR disease in females",
        answer: "One X in each XX cell is randomly deactivated into a Barr body (methylated heterochromatin); skewed inactivation lets XX individuals express X-linked recessive diseases (eg, G6PD); Turner 45,XO females are more likely to have an X-linked recessive disorder",
      },
    ],
    traps: [
      {
        a: "Duchenne",
        b: "Becker",
        whyConfused: "Same gene, same X-linked recessive inheritance, same pelvic-girdle ascent.",
        keyDifference: "Duchenne: frameshift deletions or nonsense mutations → truncated or ABSENT dystrophin; onset before 5; dilated cardiomyopathy commonly fatal. Becker: non-frameshift deletions → PARTIALLY FUNCTIONAL dystrophin; adolescence/adulthood; less severe (Becker is Better).",
        clue: "Age at onset is the giveaway: wheelchair childhood → Duchenne; ambulatory adulthood → Becker.",
      },
      {
        a: "Calf pseudohypertrophy",
        b: "True muscle hypertrophy",
        whyConfused: "Both present as enlarged calves.",
        keyDifference: "Pseudohypertrophy is fibrofatty REPLACEMENT of muscle — enlarged but weak, with myonecrosis beneath. True hypertrophy is contractile-fiber growth — enlarged and strong.",
        clue: "Enlarged calf + Gowers/proximal weakness → pseudohypertrophy; the biopsy (image A) settles it.",
      },
      {
        a: "Myotonic dystrophy",
        b: "Myotonia congenita",
        whyConfused: "Both named for myotonia.",
        keyDifference: "Myotonic dystrophy is the AD CTG-repeat DMPK disease of adults with cataracts, balding, gonadal atrophy, and arrhythmia. The exam's page tests the DMPK multisystem package.",
        clue: "Handshake + cataracts + Toupee + Gonadal atrophy → myotonic dystrophy (DMPK, CTG).",
      },
      {
        a: "X-linked recessive in a female",
        b: "Autosomal recessive in a female",
        whyConfused: "Both can produce disease in girls with unaffected parents.",
        keyDifference: "Female XLR expression comes via skewed lyonization or Turner 45,XO (single X); AR disease requires two alleles and tracks horizontally through carriers.",
        clue: "Turner features or an X-linked family pattern in an affected girl → think lyonization, not AR.",
      },
    ],
    pivots: [
      {
        lookAlike: "A 'proximal weakness in a child' stem offering Duchenne, polymyositis, and spinal muscular atrophy",
        differentiator: "Age, tempo, and the company it keeps",
        correctPath: "Boy <5 + calf pseudohypertrophy + Gowers + ↑CK → Duchenne; subacute proximal weakness with rash/ESA → polymyositis (Gowers can appear too); hypotonic infant with tongue fasciculations → spinal muscular atrophy.",
      },
      {
        lookAlike: "An 'enlarged calves' stem offering dystrophy, athlete, and myositis ossificans",
        differentiator: "Strength vs weakness alongside the size",
        correctPath: "Enlarged + weak + climbing thighs → dystrophic pseudohypertrophy; enlarged + strong + training history → physiologic; firm mass after trauma → ossificans.",
      },
    ],
    miniCase: {
      vignette:
        "A 4-year-old boy is brought in because his preschool teacher notes he cannot climb onto the low playground ladder and falls frequently. He learned to walk at 16 months and has always been clumsier than his peers. On examination he rises from sitting by rolling to all fours, pushing his torso up with his arms braced on his knees, and walking his hands up his thighs to erect posture. His calves are unusually large and firm yet not strong. He stands with an exaggerated lumbar curve. Serum creatine kinase is 22,000 IU/L (markedly elevated), and aldolase is elevated. A maternal male cousin uses a wheelchair at age 12. Genetic testing is sent.",
      question: "Which of the following is the most likely mechanism of this child's disease?",
      options: [
        {
          label: "A",
          correct: true,
          text: "Frameshift deletion in the dystrophin gene producing a truncated, nonfunctional protein",
          why: "Correct. The vignette is Duchenne: Gowers sign (hands on thighs to stand), calf pseudohypertrophy, lordosis, onset before 5, markedly ↑CK and aldolase, X-linked family history. The mechanism is the frameshift/nonsense route — the reading frame collapses, dystrophin is truncated or absent, and 'Duchenne = deleted dystrophin.'",
        },
        {
          label: "B",
          text: "In-frame deletion in the dystrophin gene producing a shorter but partially functional protein",
          why: "That is Becker muscular dystrophy — non-frameshift deletions keep the frame readable, so dystrophin is partially functional instead of truncated; onset is adolescence or early adulthood and the course is milder (Becker is Better). This boy's pre-5 onset and CK of 22,000 argue against it.",
        },
        {
          label: "C",
          text: "CTG trinucleotide repeat expansion in the DMPK gene",
          why: "That is myotonic dystrophy — autosomal dominant, onset 20–30 years, with percussion myotonia, cataracts, frontal balding, testicular atrophy, and arrhythmia. A wheelchair-bound cousin at 12 and a Gowers climb in a 4-year-old do not fit.",
        },
        {
          label: "D",
          text: "Autoimmune T-cell–mediated muscle fiber injury with rimmed vacuoles",
          why: "The inflammatory myopathies (polymyositis/dermatomyositis — polymyositis can itself produce a Gowers-like climb) cause subacute proximal weakness with ↑CK, but at this age, with this X-linked pedigree and calf pseudohypertrophy, the genetic mechanism dominates the differential.",
        },
        {
          label: "E",
          text: "Loss-of-function mutation in the survival motor neuron (SMN) gene",
          why: "Spinal muscular atrophy produces hypotonia and proximal weakness in toddlers, but with tongue fasciculations, areflexia, and denervation (not myonecrosis); the calves are atrophic, not pseudohypertrophic.",
        },
      ],
      reasoning:
        "Cluster recognition settles it before the genetics: Gowers ascent + calf pseudohypertrophy + lordosis + onset before 5 + massively elevated CK/aldolase + affected maternal male cousin = Duchenne muscular dystrophy. The mechanism question then tests the frame: Duchenne is typically frameshift deletions or nonsense mutations → truncated or absent dystrophin → progressive myofiber damage and myonecrosis; Becker is the in-frame twin. Option A names that mechanism exactly.",
    },
  },
  mnemonics: [
    {
      code: "“Duchenne = deleted dystrophin; Becker is Better”",
      meaning: "Duchenne: frameshift/nonsense → truncated or absent (deleted) dystrophin — severe, early, cardiomyopathic. Becker: in-frame deletion → partially functional dystrophin — milder, later (Better).",
      memorizes: "The Duchenne vs Becker mechanism split",
      whenToUse: "Any dystrophinopathy stem or comparison question.",
      clinical: "Both X-linked recessive; both from deletions (2⁄3 large, spanning ≥1 exon) — the reading frame decides.",
    },
    {
      code: "“Cataracts, Toupee, Gonadal atrophy”",
      meaning: "Myotonic dystrophy's system inventory: cataracts, early frontal balding in males (the toupee), gonadal atrophy — plus muscle wasting and arrhythmia; percussion myotonia is the handshake tell.",
      memorizes: "Myotonic dystrophy findings (the source's own mnemonic)",
      whenToUse: "Myotonia + cataracts/balding/arrhythmia stems.",
      clinical: "AD; CTG repeat expansion in DMPK → abnormal myotonin protein kinase expression; biopsy: ring fibers and central nuclei.",
    },
    {
      code: "“DMD = the largest gene; more letters, more mistakes”",
      meaning: "The dystrophin gene (DMD) is the largest protein-coding human gene → an increased chance of spontaneous mutation — a third of Duchenne cases are de novo.",
      memorizes: "Why DMD mutates so often",
      whenToUse: "'No family history' Duchenne stems.",
      clinical: "Dystrophin anchors muscle fibers to the extracellular matrix (skeletal + cardiac); loss → myonecrosis and dilated cardiomyopathy.",
    },
  ],
  rapidReview: {
    s30: [
      "Duchenne: XLR; frameshift deletions or nonsense mutations → truncated or absent dystrophin; onset before 5; ↑CK and aldolase.",
      "Weakness begins in the pelvic girdle muscles and progresses superiorly; waddling gait; Gowers sign (uses upper extremities to help stand up).",
      "Pseudohypertrophy of calf muscles = fibrofatty replacement of muscle; dilated cardiomyopathy is a common cause of death.",
      "Duchenne = deleted dystrophin; DMD is the largest protein-coding human gene → ↑ chance of spontaneous mutation; loss of dystrophin → myonecrosis.",
      "Becker: XLR; non-frameshift deletions → partially functional dystrophin; less severe (Becker is Better); onset adolescence/early adulthood.",
      "Myotonic dystrophy: AD; CTG expansion in DMPK → abnormal myotonin protein kinase; onset 20–30; percussion myotonia, cataracts, testicular atrophy, frontal balding, arrhythmia.",
      "Lyonization: one X per XX cell randomly deactivated → Barr body (methylated heterochromatin); skewed inactivation → XX can express XLR disease (eg, G6PD).",
      "Turner 45,XO females are more likely to have an X-linked recessive disorder.",
    ],
    m3: [
      "Gowers is classically Duchenne but also seen in other muscular dystrophies and inflammatory myopathies (eg, polymyositis).",
      "2⁄3 of cases (both diseases) have large deletions spanning one or more exons — deletions can cause either Duchenne or Becker.",
      "Duchenne can also result from splicing errors, not just deletions.",
      "Dystrophin anchors muscle fibers to the extracellular matrix, primarily in skeletal and cardiac muscles — hence the cardiomyopathy.",
      "Myotonic biopsy: ring fibers and central nuclei.",
      "XLR list: Bruton, DMD/Becker, Fabry, G6PD, hemophilia A/B, Hunter, Lesch-Nyhan, ocular albinism, OTC deficiency, Wiskott-Aldrich.",
    ],
    m10: [
      "The reading frame is the Duchenne/Becker discriminator — deletion SIZE is not.",
      "Duchenne's de novo fraction (~1/3) is a direct consequence of DMD being the largest protein-coding human gene.",
      "Calf pseudohypertrophy = enlarged + weak; the biopsy's pale patches (fibrofatty replacement) are the mechanism in one image.",
      "Skewed lyonization explains the manifesting female carrier — mild limb-girdle weakness or cardiomyopathy in a DMD-carrier mother.",
      "Myotonic dystrophy shows anticipation (CTG, maternally amplified) — severity increasing, onset dropping across generations.",
      "Dilated cardiomyopathy in a boy with proximal weakness: check dystrophin before you check the Echo alone.",
    ],
  },
  recall: [
    {
      q: "State the Duchenne mutation class and its protein consequence.",
      a: "X-linked recessive, typically frameshift deletions or nonsense mutations (can also result from splicing errors) → truncated or absent dystrophin protein → progressive myofiber damage. Duchenne = deleted dystrophin.",
    },
    {
      q: "How does Becker differ mechanistically and clinically?",
      a: "Typically non-frameshift deletions in the dystrophin gene — partially functional instead of truncated protein; less severe (Becker is Better); onset in adolescence or early adulthood.",
    },
    {
      q: "Describe the Gowers sign and its anatomical basis.",
      a: "The patient uses the upper extremities to help stand up — pushing on the legs and walking the hands up the thighs; it reflects weakness beginning in the pelvic girdle muscles and progressing superiorly. Classically Duchenne, but also seen in other muscular dystrophies and inflammatory myopathies (eg, polymyositis).",
    },
    {
      q: "Why are the calves enlarged in Duchenne, and what is inside them?",
      a: "Pseudohypertrophy of calf muscles due to fibrofatty replacement of muscle — fat and collagen replace necrosed fibers, enlarging the muscle while weakening it.",
    },
    {
      q: "What is lyonization, and what can skewed inactivation do?",
      a: "During development, one of the X chromosomes in each XX cell is randomly deactivated and condensed into a Barr body (methylated heterochromatin). If skewed inactivation occurs, XX individuals may express X-linked recessive diseases (eg, G6PD); penetrance and severity of X-linked dominant diseases in XX individuals may also be impacted.",
    },
    {
      q: "Give the myotonic dystrophy gene, repeat, and the mnemonic triad.",
      a: "Autosomal dominant; CTG trinucleotide repeat expansion in the DMPK gene → abnormal expression of myotonin protein kinase. Cataracts, Toupee (early balding in males), Gonadal atrophy — plus percussion myotonia, muscle wasting, and arrhythmia; biopsy shows ring fibers and central nuclei.",
    },
  ],
  related: [
    {
      title: "Modes of Inheritance",
      note: "The X-linked recessive pedigree rules (no male-to-male, carrier mothers, 50% of sons) frame every dystrophinopathy family.",
      topicId: "modes-of-inheritance",
    },
    {
      title: "Trinucleotide Repeat Expansion Diseases",
      note: "Myotonic dystrophy is the (CTG)n row of the repeat table — the anticipation logic lives there in full.",
      topicId: "trinucleotide-repeat-diseases",
    },
    {
      title: "Genetic Terminology & Population Genetics",
      note: "Anticipation and mosaicism vocabulary; the XLR frequency math (males = q, females = q²) applies to hemophilia and DMD alike.",
      topicId: "genetic-terms-popgen",
    },
    {
      title: "Cytoskeleton, Microtubules & Cilia",
      note: "Dystrophin is a cytoskeletal anchor — the same fiber-and-matrix world as actin, tubulin, and dynein arms.",
      topicId: "cytoskeleton-cilia",
    },
  ],
  crossLinks: [
    {
      subject: "Neurology/Musculoskeletal",
      connection: "Proximal weakness, Gowers sign, myotonia, and CK interpretation are neuromuscular exam staples.",
    },
    {
      subject: "Cardiology",
      connection: "Dilated cardiomyopathy is a common cause of death in Duchenne and arrhythmia marks myotonic disease — the cardiac face of muscle-gene disease.",
    },
    {
      subject: "Genetics — X-linked disease",
      connection: "Lyonization and Turner 45,XO explain the female exceptions to X-linked recessive disease across every XLR condition.",
    },
  ],
};
