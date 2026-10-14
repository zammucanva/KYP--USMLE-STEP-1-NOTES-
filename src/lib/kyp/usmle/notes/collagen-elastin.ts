import type { KypUsMLENote } from "../types";

// Biochemistry — Cellular (M3).
// Source: First Aid 2026, Part 1 pdf 70, 72 / book 48, 50
// (Collagen; collagen synthesis and structure; elastin)

export const collagenElastin: KypUsMLENote = {
  id: "collagen-elastin",
  title: "Collagen & Elastin",
  subtitle:
    "The body's rope and rubber band: four collagen types (SCAB), an eight-step synthesis pipeline with two cofactor traps (vitamin C at hydroxylation, copper at cross-linking), and elastin — nonhydroxylated, fibrillin-scaffolded, and elastase's target in α1-antitrypsin deficiency.",
  subject: "Biochemistry",
  system: "Section II · High-Yield General Principles — Cellular",
  pilotCategory: "Cell biology — extracellular matrix proteins and their cofactor diseases",
  difficulty: 3,
  readTime: 14,
  sourceRef:
    "First Aid 2026, Part 1 pp. 48, 50 (collagen; collagen synthesis and structure; elastin)",
  tags: [
    "collagen",
    "SCAB",
    "Gly-X-Y",
    "vitamin C",
    "scurvy",
    "lysyl oxidase",
    "copper",
    "elastin",
    "tropoelastin",
    "fibrillin",
    "desmosine",
    "α1-antitrypsin deficiency",
  ],
  core: {
    what: "Collagen is the most abundant protein in the human body, extensively modified by posttranslational modification, organizing and strengthening the extracellular matrix. Its synthesis runs: translation of preprocollagen α chains (Gly-X-Y repeats, 1/3 glycine) → hydroxylation of proline and lysine in the RER (requires vitamin C) → glycosylation and triple-helix formation (procollagen) → exocytosis → proteolytic cleavage to tropocollagen → fibril self-assembly → lysyl-oxidase cross-linking (copper-dependent). Elastin is the stretch counterpart: rich in nonhydroxylated proline, glycine, and lysine, made from tropoelastin on fibrillin scaffolding, cross-linked extracellularly by lysyl oxidase, and degraded by elastase unless α1-antitrypsin blocks it.",
    why: "The synthesis pipeline is a cofactor-disease ladder: vitamin C deficiency → scurvy (hydroxylation fails), triple-helix problems → osteogenesis imperfecta, cross-linking problems → Menkes disease (copper-deficient lysyl oxidase). The type table carries Alport (type IV) and Goodpasture (anti-type IV), and the elastin arm closes with α1-antitrypsin deficiency → unopposed elastase → COPD.",
    keyIdea: "Learn the pipeline as stations with names: translate (Gly-X-Y) → hydroxylate (vit C) → glycosylate + helix (OI station) → export → cleave (tropocollagen) → assemble → cross-link (copper, lysyl oxidase, Menkes station). Every collagen disease is a station number; elastin is the same road with the hydroxylation station skipped and an elastase toll at the end.",
  },
  mechanisms: [
    {
      id: "collagen-synthesis-pipeline",
      title: "Collagen synthesis — eight stations, two cofactor traps",
      context: "Fibroblast manufacturing a collagen fiber",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Collagen mRNA transcribed in the fibroblast nucleus",
            sublabel: "Molecular — preprocollagen α-chain backbone (Gly-X-Y) begins as a translation product.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Translation — collagen α chains (preprocollagen), usually Gly-X-Y; X often proline/lysine, Y often hydroxyproline/hydroxylysine",
            sublabel: "Molecular — collagen is 1/3 glycine; glycine content is less variable than that of lysine and proline.",
            variant: "process",
          },
          {
            id: "s2",
            label: "RER — hydroxylation of proline and lysine (requires vitamin C)",
            sublabel: "Clinical — 'hydroxCylation' of specific residues; deficiency → scurvy.",
            variant: "process",
          },
          {
            id: "s3",
            label: "RER — glycosylation of pro-α-chain hydroxylysine + triple helix formation (procollagen)",
            sublabel: "Clinical — problems forming triple helix → osteogenesis imperfecta.",
            variant: "process",
          },
          {
            id: "s4",
            label: "Golgi → exocytosis of procollagen into extracellular space",
            sublabel: "Pathway — the intracellular half of the pipeline ends; export begins.",
            variant: "process",
          },
          {
            id: "s5",
            label: "Proteolytic processing — cleavage of disulfide-rich terminal regions → insoluble tropocollagen",
            sublabel: "Pathway — procollagen peptidases trim both ends; the rod that remains can self-assemble.",
            variant: "process",
          },
          {
            id: "s6",
            label: "Assembly and alignment — collagen assembles in fibrils and aligns for cross-linking",
            sublabel: "Pathway — staggered fibril geometry sets up the final reinforcement step.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Cross-linking — covalent lysine-hydroxylysine cross-links by copper-containing lysyl oxidase → collagen fibers",
            sublabel: "Output — cross-linking of collagen ↑ with age; problems with cross-linking → Menkes disease.",
            variant: "output",
          },
          {
            id: "x1",
            label: "Vitamin C absent → hydroxylation fails → unstable helix → scurvy",
            sublabel: "Clinical — bleeding gums, perifollicular hemorrhage, poor wound healing: the hydroxylation station's disease.",
            variant: "inhibit",
          },
          {
            id: "x2",
            label: "Copper absent / lysyl oxidase inactive → cross-linking fails → Menkes disease",
            sublabel: "Clinical — the terminal station's disease; the same failure in elastin adds arterial tortuosity.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1" },
          { from: "s1", to: "s2", label: "into RER" },
          { from: "s2", to: "s3" },
          { from: "s3", to: "s4", label: "Golgi → export" },
          { from: "s4", to: "s5" },
          { from: "s5", to: "s6" },
          { from: "s6", to: "o1", label: "Cu-dependent" },
          { from: "x1", to: "s2", type: "inhibit", label: "no vit C" },
          { from: "x2", to: "o1", type: "inhibit", label: "no Cu" },
        ],
        caption:
          "The source's own step order, kept intact: translation (Gly-X-Y) → hydroxylation (vitamin C) → glycosylation + triple helix (the OI station) → exocytosis → proteolytic cleavage (tropocollagen) → assembly → lysyl-oxidase cross-linking (copper, the Menkes station; cross-linking ↑ with age). Two cofactors, two diseases, one pipeline.",
      },
    },
    {
      id: "elastin-crosslink-cycle",
      title: "Elastin — stretch, recoil, and the elastase toll",
      context: "Elastic tissue under cyclic load (lung, aorta, ligaments)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Tropoelastin secreted onto fibrillin scaffolding",
            sublabel: "Molecular — elastin's soluble precursor is laid down on a fibrillin-1 scaffold (the protein defective in Marfan syndrome).",
            variant: "input",
          },
          {
            id: "s1",
            label: "Rich in nonhydroxylated proline, glycine, and lysine residues (vs the hydroxylated residues of collagen)",
            sublabel: "Molecular — the structural contrast: elastin never pays the vitamin C hydroxylation tax that collagen does.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Cross-linking occurs extracellularly via lysyl oxidase — gives elastin its elastic properties",
            sublabel: "Molecular — lysine-derived cross-links (desmosine) lock the network into a coil that stretches and recoils.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Stretch → extend; relax → recoil (skin, lungs, large arteries, elastic ligaments, vocal cords, epiglottis, ligamenta flava)",
            sublabel: "Output — the rubber-band behavior the source draws as a stretched and relaxed single molecule.",
            variant: "output",
          },
          {
            id: "x1",
            label: "Elastase degrades elastin; α1-antitrypsin normally inhibits elastase",
            sublabel: "Clinical — the toll booth: broken down by elastase, which is normally inhibited by α1-antitrypsin.",
            variant: "inhibit",
          },
          {
            id: "x2",
            label: "α1-antitrypsin deficiency → unopposed elastase activity → COPD",
            sublabel: "Clinical — liver (misfolded A1AT accumulation) and lung (unopposed elastase) disease; smoking accelerates the lung arm.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "deposited" },
          { from: "s1", to: "s2", label: "extracellular" },
          { from: "s2", to: "o1", label: "stretch/relax" },
          { from: "x1", to: "o1", type: "inhibit", label: "elastase ⊣ elastin" },
          { from: "x1", to: "x2", label: "A1AT absent" },
        ],
        caption:
          "Elastin in one loop: tropoelastin + fibrillin scaffold → lysyl-oxidase cross-links (desmosine) → stretch and recoil for a lifetime — unless elastase, unopposed by α1-antitrypsin deficiency, chews the network into COPD. Note what is missing: no vitamin C station, because elastin's residues stay nonhydroxylated.",
      },
    },
  ],
  blocks: [
    {
      kind: "text",
      title: "The rope and the rubber band",
      body: [
        "Collagen is the most abundant protein in the human body, extensively modified by posttranslational modification, and it organizes and strengthens the extracellular matrix. Types I to IV are the most common types in humans, and the four-way split is the most testable single table on the page: type I in the skeleton, type II in cartilage, type III in arteries, type IV in basement membranes.",
        "Elastin is the counterparty — a stretchy protein within skin, lungs, large arteries, elastic ligaments, vocal cords, epiglottis, and the ligamenta flava connecting vertebrae, drawn in the source as one molecule cycling between relaxed and stretched conformations. Where collagen is a tensile rope, elastin is a coil: it extends under load and recoils when the load lifts, which is why large arteries smooth the pulse and lungs snap back to baseline.",
        "The biochemical contrast runs through their residues: elastin is rich in nonhydroxylated proline, glycine, and lysine, versus the hydroxylated residues of collagen. That single difference explains why scurvy is a collagen disease and not an elastin disease — no hydroxylation step, no vitamin C dependency.",
      ],
    },
    {
      kind: "table",
      title: "Collagen types I–IV — SCAB with the disease hooks",
      intro: "First Aid's own mnemonic line: Type I Skeleton, Type II Cartilage, Type III Arteries, Type IV Basement membrane — SCAB.",
      columns: ["Type", "Locations", "Disease hook"],
      rows: [
        ["Type I (most common, 90%)", "Bone (made by osteoblasts), skin, tendon, dentin, fascia, cornea, late wound repair", "↓ production in osteogenesis imperfecta type I"],
        ["Type II", "Cartilage (including hyaline), vitreous body, nucleus pulposus", "The cartilage collagen — targeted in some chondrodysplasias"],
        ["Type III (reticulin)", "Skin, blood vessels, uterus, fetal tissue, early wound repair", "Deficient in vascular type of Ehlers-Danlos syndrome (threE D)"],
        ["Type IV", "Basement membrane/basal lamina (glomerulus, cochlea), lens", "Defective in Alport syndrome; targeted by autoantibodies in Goodpasture syndrome"],
      ],
      caption:
        "Two memory hooks ride the table: 'threE D' — typE III, vascular type EDS — and 'under the floor' for type IV basement membrane. Early wound repair is type III, late repair converts to type I — a granulation-timeline question the exam reuses.",
    },
    {
      kind: "visual",
      visualId: "collagen-synthesis-pipeline",
      title: "The synthesis pipeline — fibroblast nucleus to cross-linked fiber",
      caption:
        "The full eight-station pipeline drawn as the source figure: the fibroblast nucleus with collagen mRNA; the preprocollagen α-chain backbone (Gly-X-Y) in the cytoplasm; RER stations for hydroxylation (OH on proline and lysine, vitamin C chip) and glycosylation with triple-helix formation (procollagen); the Golgi and exocytosis step; extracellular cleavage of C- and N-terminals (tropocollagen); self-assembly into fibrils; and formation of cross-links stabilized by copper-containing lysyl oxidase into the final collagen fiber. Cofactor chips mark vitamin C and copper; disease chips mark scurvy, osteogenesis imperfecta (triple helix), and Menkes disease (cross-linking).",
      notice:
        "Walk the pipeline once and pin two stations: hydroxylation (vitamin C) and cross-linking (copper/lysyl oxidase). The exam's favorite pipeline questions are 'which step fails in scurvy?' (hydroxylation), 'in OI?' (triple helix), and 'in Menkes?' (cross-linking) — three diseases, three stations, one diagram.",
      },
    {
      kind: "steps",
      title: "The synthesis steps, verbatim order",
      intro: "The text layer's numbered sequence — worth memorizing exactly, because mechanism-ordering questions shuffle it.",
      steps: [
        { label: "1 · Synthesis", detail: "Translation of collagen α chains (preprocollagen) — usually Gly-X-Y; X is often proline or lysine, Y often hydroxyproline or hydroxylysine. Collagen is 1/3 glycine." },
        { label: "2 · Hydroxylation", detail: "Hydroxylation ('hydroxCylation') of specific proline and lysine residues. Requires vitamin C; deficiency → scurvy." },
        { label: "3 · Glycosylation + helix", detail: "Glycosylation of pro-α-chain hydroxylysine residues and formation of procollagen via hydrogen and disulfide bonds (triple helix of 3 collagen α chains). Problems forming triple helix → osteogenesis imperfecta." },
        { label: "4 · Exocytosis", detail: "Exocytosis of procollagen into the extracellular space." },
        { label: "5 · Proteolytic processing", detail: "Cleavage of disulfide-rich terminal regions of procollagen → insoluble tropocollagen." },
        { label: "6 · Assembly and alignment", detail: "Collagen assembles in fibrils and aligns for cross-linking." },
        { label: "7 · Cross-linking", detail: "Reinforcement of staggered tropocollagen molecules by covalent lysine-hydroxylysine cross-linkage (by copper-containing lysyl oxidase) to make collagen fibers. Cross-linking of collagen ↑ with age. Problems with cross-linking → Menkes disease." },
      ],
    },
    {
      kind: "visual",
      visualId: "elastin-stretch-relax",
      title: "Elastin — the stretch-relax cycle with its three partners",
      caption:
        "The single elastin molecule as the source draws it — relaxed coil, stretched conformation, and back — annotated with the three molecular partners: fibrillin scaffolding (tropoelastin's template), extracellular lysyl-oxidase cross-links (desmosine) that store the recoil energy, and elastase opposed by α1-antitrypsin as the degradation control. A side contrast marks the nonhydroxylated residues (proline, glycine, lysine) versus collagen's hydroxylated set.",
      notice:
        "Three chips, three exam questions: what scaffolds tropoelastin (fibrillin — the Marfan protein), what cross-links it extracellularly (lysyl oxidase, shared with collagen), and what degrades it when α1-antitrypsin is missing (elastase → COPD).",
      },
    {
      kind: "callout",
      variant: "exam",
      title: "How the exam asks this page",
      body: "Four recurring shapes: (1) the station-matching stem — scurvy (hydroxylation), osteogenesis imperfecta (triple helix), Menkes (cross-linking) against the pipeline; (2) type-matching — early vs late wound repair (III then I), Alport vs Goodpasture (type IV, defective vs autoantibody-targeted), vascular EDS (type III, threE D); (3) the elastin residue contrast — nonhydroxylated vs collagen's hydroxylated; (4) the A1AT vignette — emphysema with liver disease, unopposed elastase activity.",
    },
    {
      kind: "callout",
      variant: "why",
      title: "Why glycine must be every third residue",
      body: "Glycine is the smallest amino acid, and the triple helix packs one glycine into the tight internal core position of every three-residue repeat — a bigger side chain at the core would blow the helix apart. That is why collagen is 1/3 glycine, why the repeat reads Gly-X-Y rather than X-Y-Z, and why glycine content of collagen is less variable than that of lysine and proline: the core position cannot tolerate substitutes. It is also why a glycine substitution in a collagen gene produces a helix that assembles badly — the molecular basis of the 'problems forming triple helix → osteogenesis imperfecta' station.",
    },
  ],
  clinical: [
    {
      kind: "text",
      title: "Scurvy and the vitamin C station",
      body: [
        "Vitamin C is the cofactor for prolyl and lysyl hydroxylases, so its deficiency starves the hydroxylation station: under-hydroxylated chains form unstable triple helices, weak collagen follows, and the phenotype is connective-tissue failure — bleeding gums with loose teeth, perifollicular hemorrhage with corkscrew hairs, poor wound healing, and bone pain in children.",
        "The timeline detail the exam likes: hydroxylation happens in the rough ER during synthesis, so old, already-cross-linked collagen is not immediately affected — the deficiency shows in newly laid matrix, which is why weeks-to-months pass before the stigmata appear.",
      ],
    },
    {
      kind: "text",
      title: "Menkes disease and the copper station",
      body: [
        "Lysyl oxidase is copper-containing, so copper transport failure (the X-linked ATP7A defect of Menkes disease) strips the final station of its cofactor: collagen and elastin both leave the pipeline under-cross-linked. The results — brittle 'kinky' hair, growth and developmental delay, hypotonia, and cerebral artery tortuosity/aneurysm — are the elastin-and-collagen joint phenotype, and the mirror image of Wilson disease (ATP7B, copper buildup).",
        "Keeping the two copper-transport diseases straight is half the value of this station: ATP7A = Absent copper absorption/transport (Menkes, cross-linking fails); ATP7B = copper Buildup (Wilson, liver and brain deposition).",
      ],
    },
  ],
  drugs: [
    {
      drug: "Vitamin C (ascorbic acid)",
      klass: "Cofactor (nutrient)",
      target: "Prolyl and lysyl hydroxylases",
      mechanism: "Required cofactor for hydroxylation of proline and lysine residues in collagen synthesis",
      effect: "Stable triple helix; normal wound healing, bone, and vessel integrity",
      uses: "Scurvy treatment and prevention",
      adverse: "Excess: oxalate stones, GI irritation",
      clue: "Bleeding gums + perifollicular hemorrhage + poor wound healing = the hydroxylation station failed",
    },
    {
      drug: "Copper (dietary/parenteral)",
      klass: "Cofactor (trace metal)",
      target: "Lysyl oxidase",
      mechanism: "Copper-containing lysyl oxidase catalyzes the covalent cross-linking of collagen and elastin",
      effect: "Tensile collagen fibers; elastic recoil in arteries and lungs",
      uses: "Menkes disease (copper-histidine supplementation, limited response); parenteral nutrition adequacy",
      adverse: "Excess copper → toxicity (and in Wilson disease, accumulation)",
      clue: "Kinky hair + hypotonia + developmental delay in a boy = check the cross-linking station (ATP7A)",
    },
    {
      drug: "α1-antitrypsin augmentation (context)",
      klass: "Protease inhibitor (physiologic)",
      target: "Neutrophil elastase",
      mechanism: "Normally inhibits elastase; augmentation or replacement raises anti-elastase shield in deficient patients",
      effect: "Protects lung elastin from unopposed elastase degradation",
      uses: "α1-antitrypsin deficiency with emphysema",
      adverse: "— (the deficiency itself causes liver disease by misfolded-protein accumulation)",
      clue: "Basilar emphysema + liver disease in a smoker = A1AT: unopposed elastase activity → COPD",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 7-month-old infant exclusively fed boiled milk presents with bleeding gums, perifollicular hemorrhages, corkscrew hairs, and poor wound healing.",
        discriminator: "Connective-tissue failure from absent vitamin C",
        concept: "Hydroxylation station failure",
        answer: "Scurvy — hydroxylation of proline and lysine requires vitamin C",
      },
      {
        stem: "A boy with kinky, brittle hair, hypotonia, and developmental delay is found to have a mutation in ATP7A; bladder diverticula and cerebral arterial tortuosity are noted.",
        discriminator: "Copper transport failure → lysyl oxidase cofactor absent",
        concept: "Cross-linking station failure",
        answer: "Menkes disease — defective collagen and elastin cross-linking from ↓ lysyl oxidase activity",
      },
      {
        stem: "A wound-healing question asks which collagen type appears first in granulation tissue and which dominates a mature scar.",
        discriminator: "Early type III → late type I sequence",
        concept: "Collagen type timeline in repair",
        answer: "Type III (reticulin — skin, vessels, fetal tissue, early wound repair) is replaced by type I (bone, skin, tendon — late wound repair)",
      },
      {
        stem: "A young man with hematuria and sensorineural hearing loss has a thin, split glomerular basement membrane on biopsy.",
        discriminator: "Basement-membrane collagen disease",
        concept: "Type IV collagen defects",
        answer: "Alport syndrome (defective type IV); contrast Goodpasture syndrome — autoantibodies TARGET type IV",
      },
      {
        stem: "A 40-year-old smoker develops severe basilar-predominant emphysema with a childhood history of unexplained liver dysfunction.",
        discriminator: "Unopposed elastase activity in the lung",
        concept: "Elastin degradation control failure",
        answer: "α1-antitrypsin deficiency — elastase, normally inhibited by α1-antitrypsin, degrades elastin → COPD",
      },
    ],
    traps: [
      {
        a: "Vitamin C deficiency",
        b: "Copper deficiency",
        whyConfused: "Both break the same pipeline and both produce connective-tissue phenotypes.",
        keyDifference: "Vitamin C starves HYDROXYLATION (scurvy — bleeding gums, corkscrew hairs); copper starves CROSS-LINKING via lysyl oxidase (Menkes — kinky hair, hypotonia, arterial tortuosity).",
        clue: "Hydroxylate = ascorbate; cross-link = copper. Station number tells the cofactor.",
      },
      {
        a: "Alport syndrome",
        b: "Goodpasture syndrome",
        whyConfused: "Both are type IV collagen diseases of the basement membrane.",
        keyDifference: "Alport = DEFECTIVE type IV (structural gene mutation, hereditary); Goodpasture = autoantibodies TARGETING type IV (anti-GBM, hemoptysis + hematuria).",
        clue: "Inherited thin/split GBM = Alport; anti-GBM antibody + pulmonary hemorrhage = Goodpasture.",
      },
      {
        a: "Type III collagen",
        b: "Type I collagen",
        whyConfused: "Both appear in skin and vessels at some point in repair.",
        keyDifference: "Type III (reticulin) is early wound repair and fetal tissue, deficient in vascular EDS (threE D); type I is bone, tendon, dentin, and late wound repair, under-produced in OI type I.",
        clue: "Early III, late I — and 'threE D' ties type III to vascular EDS.",
      },
      {
        a: "Elastin",
        b: "Collagen",
        whyConfused: "Both are lysyl-oxidase cross-linked ECM proteins on the same page.",
        keyDifference: "Elastin's residues are NONhydroxylated proline/glycine/lysine (no vitamin C dependency) and it stretches-recoils on a fibrillin scaffold; collagen hydroxylates (vitamin C) and forms a tensile triple helix.",
        clue: "Rubber band = elastin (nonhydroxylated, fibrillin); rope = collagen (hydroxylated, Gly-X-Y).",
      },
    ],
    pivots: [
      {
        lookAlike: "A 'fragile connective tissue' stem offering scurvy, OI, Menkes, and vascular EDS",
        differentiator: "Which pipeline station fails",
        correctPath: "Bleeding gums/perifollicular hemorrhage → hydroxylation (vit C, scurvy); fractures + blue sclerae from birth → triple helix (OI); kinky hair + arterial tortuosity → cross-linking (Menkes, Cu); ruptured vessels/organs → type III collagen (vascular EDS).",
      },
      {
        lookAlike: "A 'young adult with emphysema' stem offering A1AT deficiency and smoking alone",
        differentiator: "Basilar distribution, early age, liver history, family history",
        correctPath: "↓ α1-antitrypsin → unopposed elastase → panacinar, basilar emphysema (COPD); smoking-only disease is centrilobular and apical.",
      },
    ],
    miniCase: {
      vignette:
        "An 8-month-old boy is brought in for irritability and refusal to bear weight. He was exclusively fed boiled cow's milk starting at 5 months. Examination shows swollen, purple gums with two loose teeth, corkscrew hairs with perifollicular hemorrhages on the lower extremities, and a depressed, unhealed area over the left shin from a fall three weeks ago. Radiographs show a corner fracture of the femur with a dense white line of Fraenkeln and osteopenia. Prothrombin time and platelet count are normal.",
      question: "Which step of collagen synthesis is directly impaired in this patient?",
      options: [
        {
          label: "A",
          correct: true,
          text: "Hydroxylation of proline and lysine residues in the rough endoplasmic reticulum",
          why: "Correct. Vitamin C is the required cofactor for prolyl and lysyl hydroxylases — 'hydroxCylation' of specific proline and lysine residues. Boiled milk contains essentially no vitamin C; without it, under-hydroxylated chains form unstable triple helices, producing weak collagen: bleeding gums, perifollicular hemorrhage, poor wound healing, and bone fragility (scurvy).",
        },
        {
          label: "B",
          text: "Formation of the triple helix of three collagen α chains",
          why: "Tempting because the phenotype is weak collagen — but triple-helix formation fails structurally in osteogenesis imperfecta, not in scurvy; the chains here are made normally and simply lack hydroxylated residues.",
        },
        {
          label: "C",
          text: "Proteolytic cleavage of procollagen terminal regions",
          why: "This station produces tropocollagen; its failure (procollagen peptidase deficiency) produces an EDS-like skin-joint phenotype, not the bleeding-and-bone picture here.",
        },
        {
          label: "D",
          text: "Covalent cross-linking by copper-containing lysyl oxidase",
          why: "The Menkes station — kinky hair, hypotonia, developmental delay, arterial tortuosity — is the copper-deficiency story; this infant's gum and skin findings and the boiled-milk diet point to ascorbate.",
        },
        {
          label: "E",
          text: "Glycosylation of pro-α-chain hydroxylysine residues",
          why: "A real station between hydroxylation and helix formation, but glycosylation is not vitamin C-dependent; distractor C-5 of the same pipeline tests whether the stations can be ordered.",
        },
      ],
      reasoning:
        "The diet (boiled milk destroys vitamin C), the timing (months after exclusive feeding), and the triad of bleeding gums, perifollicular hemorrhage with corkscrew hairs, and a non-healing wound identify scurvy. Normal PT and platelets exclude coagulopathy, and the corner fracture reflects bone-matrix fragility, not trauma alone. The pipeline question then answers itself: scurvy is the hydroxylation station — vitamin C is the cofactor.",
    },
  },
  mnemonics: [
    {
      code: "“SCAB — I Skeleton, II Cartilage, III Arteries, IV Basement membrane”",
      meaning: "The First Aid type table: type I bone/skin/tendon (90%, OI type I ↓ production), type II cartilage/vitreous/nucleus pulposus, type III arteries/reticulin/early wound (vascular EDS, threE D), type IV basement membrane (Alport defective, Goodpasture targeted).",
      memorizes: "Collagen types I–IV with locations and disease hooks",
      whenToUse: "Any collagen-type or wound-timeline question.",
      clinical: "Early wound = III; late wound = I; GBM = IV.",
    },
    {
      code: "“Hydroxylate with ascorbate, cross-link with copper”",
      meaning: "The two cofactor stations of the collagen pipeline: vitamin C for prolyl/lysyl hydroxylases (RER), copper for lysyl oxidase cross-linking (extracellular).",
      memorizes: "Which cofactor fails in scurvy vs Menkes",
      whenToUse: "Cofactor-deficiency stems and pipeline-ordering questions.",
      clinical: "Scurvy = bleeding gums + poor healing; Menkes = kinky hair + arterial tortuosity.",
    },
    {
      code: "“Gly every third — the core is tiny”",
      meaning: "Collagen is 1/3 glycine because Gly occupies the tight internal core of the triple helix at every third position (Gly-X-Y).",
      memorizes: "Why the repeat is Gly-X-Y and why glycine content is invariant",
      whenToUse: "Sequence-structure questions about the triple helix.",
      clinical: "Glycine substitutions destabilize the helix — the molecular route to osteogenesis imperfecta.",
    },
  ],
  rapidReview: {
    s30: [
      "Collagen = most abundant protein in the human body; SCAB types I–IV.",
      "Type I: bone, skin, tendon, dentin, late wound repair (90%); ↓ in OI type I.",
      "Type III: reticulin, early wound repair; deficient in vascular EDS (threE D).",
      "Type IV: basement membrane; defective in Alport, targeted in Goodpasture.",
      "Pipeline: translate (Gly-X-Y) → hydroxylate (vit C) → glycosylate + helix → export → cleave → assemble → cross-link (Cu).",
      "Elastin: nonhydroxylated pro/gly/lys; tropoelastin on fibrillin; lysyl oxidase cross-links; elastase ⊣ α1-antitrypsin.",
    ],
    m3: [
      "Collagen is 1/3 glycine; Gly sits at the core of every third position of the triple helix.",
      "Hydroxylation ('hydroxCylation') of proline and lysine requires vitamin C; deficiency → scurvy.",
      "Problems forming triple helix → osteogenesis imperfecta; problems with cross-linking → Menkes disease.",
      "Cross-linking by copper-containing lysyl oxidase ↑ with age — part of why tissues stiffen.",
      "α1-antitrypsin deficiency → unopposed elastase activity → COPD.",
      "Elastin locations: skin, lungs, large arteries, elastic ligaments, vocal cords, epiglottis, ligamenta flava.",
    ],
    m10: [
      "Early wound repair is type III collagen; mature scar converts to type I.",
      "Myofibroblasts secrete type III (proliferative stage) and drive wound contraction.",
      "Type II: cartilage including hyaline, vitreous body, nucleus pulposus.",
      "Type IV is in the glomerulus, cochlea, and lens — hence Alport's hematuria and deafness.",
      "Desmosine cross-links are unique to elastin — lysine-derived via lysyl oxidase.",
      "Both collagen and elastin share lysyl oxidase for cross-linking; only collagen requires hydroxylation.",
    ],
  },
  recall: [
    {
      q: "Name the four SCAB collagen types with one location each.",
      a: "Type I — skeleton (bone, skin, tendon, dentin, late wound repair); type II — cartilage (plus vitreous, nucleus pulposus); type III — arteries/reticulin (early wound repair); type IV — basement membrane (glomerulus, cochlea, lens).",
    },
    {
      q: "Why is collagen one-third glycine?",
      a: "Every third residue must be glycine to fit the tight internal core of the triple helix (Gly-X-Y repeat); glycine content is less variable than that of lysine and proline because no substitute fits the core.",
    },
    {
      q: "Which two cofactors does the collagen pipeline require, and at which stations?",
      a: "Vitamin C — hydroxylation of proline and lysine in the RER; copper — lysyl oxidase-mediated extracellular cross-linking.",
    },
    {
      q: "Which diseases map to the triple-helix and cross-linking stations?",
      a: "Problems forming triple helix → osteogenesis imperfecta; problems with cross-linking → Menkes disease (copper transport failure, ↓ lysyl oxidase activity).",
    },
    {
      q: "What happens to collagen cross-linking with age?",
      a: "Cross-linking of collagen increases with age — one basis for tissue and joint stiffening.",
    },
    {
      q: "Contrast elastin and collagen residues and their vitamin C implications.",
      a: "Elastin is rich in nonhydroxylated proline, glycine, and lysine; collagen hydroxylates those residues — so elastin synthesis has no vitamin C-dependent station.",
    },
    {
      q: "How does α1-antitrypsin deficiency produce lung disease?",
      a: "A1AT normally inhibits elastase; without it, unopposed elastase activity degrades pulmonary elastin, which can cause COPD (panacinar, basilar-predominant emphysema).",
    },
    {
      q: "What scaffolds tropoelastin, and which disease gene affects that scaffold protein?",
      a: "Fibrillin scaffolding; FBN1 mutation → defective fibrillin-1 in Marfan syndrome.",
    },
  ],
  related: [
    {
      title: "Connective Tissue Diseases (OI, EDS, Menkes, Williams)",
      note: "The clinical readout of this pipeline: OI (helix station), vascular EDS (type III), Menkes (cross-link station) — disease cards for every failure mode.",
      topicId: "connective-tissue-diseases",
    },
    {
      title: "Translation & Protein Processing",
      note: "Collagen is the canonical posttranslationally-modified protein — hydroxylation and glycosylation extend the translation story.",
      topicId: "translation-protein-synthesis",
    },
    {
      title: "Organelles & Cell Trafficking",
      note: "Hydroxylation and glycosylation happen in the RER, packaging in the Golgi, export by exocytosis — the pipeline's intracellular half IS the organelle map.",
      topicId: "organelles-cell-trafficking",
    },
    {
      title: "Urinary Casts",
      note: "The glomerular basement membrane that type IV collagen builds is the stage for Alport and Goodpasture hematuria and their casts.",
      topicId: "urinary-casts",
    },
  ],
  crossLinks: [
    {
      subject: "Respiratory",
      connection: "α1-antitrypsin deficiency → unopposed elastase → panacinar basilar emphysema (COPD).",
    },
    {
      subject: "Renal",
      connection: "Type IV collagen of the glomerular basement membrane — defective in Alport syndrome, targeted by anti-GBM antibodies in Goodpasture syndrome.",
    },
    {
      subject: "Nutrition",
      connection: "Vitamin C deficiency (scurvy) and copper deficiency (Menkes) are the pipeline's two nutrient stations.",
    },
    {
      subject: "Cardiovascular",
      connection: "Elastin in large arteries (and ligamenta flava) — loss of elastic recoil underlies aortic stiffening; fibrillin-1 links to Marfan's aortic disease.",
    },
  ],
};
