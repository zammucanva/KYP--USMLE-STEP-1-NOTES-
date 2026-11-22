import type { KypUsMLENote } from "../types";

// Pathology — CELLULAR INJURY banner (P-batch 3). Source: pdf 226 /
// book 204 (Apoptosis — the intro block, the Intrinsic
// [mitochondrial], Extrinsic [death receptor], and Perforin/granzyme
// B pathway blocks, and the three-door convergence figure). Census:
// p226 is PURE TEXT (pdfimages: ZERO rasters) — the figure prints as
// VECTOR LINE ART with all labels in the text layer; VLM census
// (render p-226.png) confirmed the topology: the INTRINSIC column at
// left (DNA damage from Radiation/ROS/toxins, Misfolded proteins,
// Hypoxia feeding p53 activation, then Bax/Bak vs Bcl-2 flanking a
// mitochondrion icon — Bax/Bak promoting pore formation and cytochrome
// C release, Bcl-2 positioned as the inhibitor), the EXTRINSIC column
// at center-top (TNF-α binding TNFR and FasL binding Fas on a
// cell-membrane drawing), and the PERFORIN/GRANZYME B column at right
// (a cytotoxic T cell releasing Granzyme B through Perforin pores) —
// all three converging on the central EXECUTIONER CASPASES box, then
// fanning out to Cytoskeletal dispersion, Cytoplasmic bleb, and
// Nuclear fragmentation, ending in an Apoptotic body tagged 'Ligands
// for macrophage cell receptors' engulfed by a Macrophage — line
// art/schematic, NO photographs. The source prints TWO of its own
// mnemonics INLINE in the intrinsic block (not in the outer margin):
// 'Bad for survival' (Bax and Bak are proapoptotic) and 'Be clever,
// live' (Bcl-2 and Bcl-xL are antiapoptotic) — carried VERBATIM in
// this note's tables per the E38 precedent; the KYP memory layer
// stays original. No other margin notes (VLM confirmed).

export const apoptosisPathways: KypUsMLENote = {
  id: "apoptosis-pathways",
  title: "Apoptosis: Intrinsic, Extrinsic & Misfolded Proteins",
  subtitle:
    "Three doors, one executioner — the caspase convergence map and the Bcl-2 rheostat (book 204). THE DEFINITION — apoptosis is ATP-dependent programmed cell death: the intrinsic, extrinsic, and perforin/granzyme B pathways activate caspases (cytosolic proteases) → cellular breakdown with cell shrinkage, chromatin condensation, membrane blebbing, and formation of apoptotic bodies, which are then phagocytosed. THE MORPHOLOGY — deeply eosinophilic cytoplasm and basophilic nucleus, pyknosis, karyorrhexis; the cell membrane typically remains intact WITHOUT significant inflammation (unlike necrosis); DNA laddering (fragments in multiples of 180 bp) is a sensitive indicator. THE INTRINSIC DOOR — growth-factor withdrawal (↓IL-2 after a completed immunologic reaction), embryonic remodeling, or injurious stimuli (radiation, toxins, hypoxia) → p53 activation → the Bcl-2 rheostat (Bax/Bak proapoptotic pore formers vs Bcl-2/Bcl-xL antiapoptotic guardians) → cytochrome C release → caspases. THE EXTRINSIC DOOR — FasL-Fas (CD95) and TNF-α-TNFR ligand-receptor interactions (the thymic medullary negative-selection tool; its failure = autoimmune lymphoproliferative syndrome). THE PERFORIN DOOR — cytotoxic T cells and NK cells release perforin (the pore) and granzyme B (the payload). ALL THREE converge on EXECUTIONER CASPASES → cytoskeletal dispersion, cytoplasmic blebs, nuclear fragmentation → the apoptotic body, tagged with ligands for macrophage receptors and quietly eaten.",
  subject: "Pathology",
  system: "Section II · High-Yield General Principles — Pathology: Cellular Injury",
  pilotCategory:
    "The three-door caspase convergence map — intrinsic (the p53-to-Bcl-2-rheostat-to-cytochrome-C mitochondrial chain), extrinsic (FasL-Fas and TNF-α-TNFR death receptors), and perforin/granzyme B (the cytotoxic T-cell and NK payload) — with the apoptosis-vs-necrosis contrast (intact membrane, no inflammation, DNA laddering at 180 bp) and the clinical anchors: follicular lymphoma t(14;18) Bcl-2 overexpression and autoimmune lymphoproliferative syndrome from failed Fas-FasL.",
  difficulty: 2,
  readTime: 10,
  sourceRef:
    "First Aid 2026, Part 1 pp. 204–204 (Apoptosis — the definition block; the Intrinsic [mitochondrial], Extrinsic [death receptor], and Perforin/granzyme B pathway blocks with the source's own inline mnemonics 'Bad for survival' and 'Be clever, live'; the three-pathway convergence figure with its executioner-caspase hub and the macrophage-engulfed apoptotic body)",
  tags: [
    "apoptosis",
    "programmed cell death",
    "ATP-dependent",
    "caspases",
    "executioner caspases",
    "cytosolic proteases",
    "cell shrinkage",
    "chromatin condensation",
    "membrane blebbing",
    "apoptotic bodies",
    "phagocytosis",
    "eosinophilic cytoplasm",
    "pyknosis",
    "karyorrhexis",
    "DNA laddering",
    "180 bp",
    "intrinsic pathway",
    "mitochondrial pathway",
    "extrinsic pathway",
    "death receptor pathway",
    "perforin",
    "granzyme B",
    "cytotoxic T cell",
    "natural killer cell",
    "p53 activation",
    "DNA damage",
    "radiation",
    "reactive oxygen species",
    "misfolded proteins",
    "hypoxia",
    "Bcl-2 family",
    "Bax",
    "Bak",
    "Bcl-xL",
    "cytochrome C",
    "outer mitochondrial membrane",
    "intermembrane space",
    "Bcl-2 overexpression",
    "follicular lymphoma",
    "t(14;18)",
    "tumorigenesis",
    "Fas",
    "CD95",
    "FasL",
    "TNF-alpha",
    "TNFR",
    "thymic negative selection",
    "clonal deletion",
    "autoimmune lymphoproliferative syndrome",
    "ALPS",
    "lymphadenopathy",
    "hepatosplenomegaly",
    "autoimmune cytopenias",
    "IL-2",
    "tissue remodeling",
    "embryogenesis",
    "macrophage",
    "inflammation-free death",
  ],
  core: {
    what: "THE DEFINITION: apoptosis is ATP-DEPENDENT programmed cell death. The intrinsic, extrinsic, and perforin/granzyme B pathways activate CASPASES (cytosolic proteases) → cellular breakdown including cell shrinkage, chromatin condensation, membrane blebbing, and formation of apoptotic bodies, which are then phagocytosed. Characterized by deeply eosinophilic cytoplasm and basophilic nucleus, pyknosis, and karyorrhexis; the cell membrane typically remains intact without significant inflammation (unlike necrosis); DNA laddering (fragments in multiples of 180 bp) is a sensitive indicator of apoptosis. THE INTRINSIC (MITOCHONDRIAL) DOOR: involved in tissue remodeling in embryogenesis; occurs when a regulating factor is withdrawn from a proliferating cell population (eg, ↓ IL-2 after a completed immunologic reaction → apoptosis of proliferating effector cells) and after injurious stimuli (radiation, toxins, hypoxia); regulated by the Bcl-2 family — Bax and Bak are proapoptotic ('Bad for survival'), Bcl-2 and Bcl-xL are antiapoptotic ('Be clever, live' — the source's own inline mnemonics, carried verbatim); BAX and BAK form pores in the outer mitochondrial membrane → release of cytochrome C from the mitochondrial intermembrane space into the cytoplasm → activation of caspases; Bcl-2 keeps the mitochondrial membrane impermeable, preventing cytochrome C release; Bcl-2 overexpression (eg, follicular lymphoma t[14;18]) → ↓ caspase activation → tumorigenesis. THE EXTRINSIC (DEATH RECEPTOR) DOOR: ligand-receptor interactions — FasL binding to Fas (CD95) or TNF-α binding to its receptor; Fas-FasL interaction is necessary in thymic medullary negative selection; autoimmune lymphoproliferative syndrome is caused by defective Fas-FasL interaction → failure of clonal deletion → ↑ numbers of self-reacting lymphocytes, presenting with lymphadenopathy, hepatosplenomegaly, autoimmune cytopenias. THE PERFORIN/GRANZYME B DOOR: release of granules containing perforin and granzyme B by immune cells (cytotoxic T cell and natural killer cell) → perforin forms a pore for granzyme B to enter the target cell. THE CONVERGENCE (the figure, redrawn as this note's registry visual): all three doors feed EXECUTIONER CASPASES, which fan out to cytoskeletal dispersion, cytoplasmic blebs, and nuclear fragmentation — ending in the apoptotic body, tagged with ligands for macrophage cell receptors and engulfed by a macrophage.",
    why: "This page is the quiet-death counterpart to the necrosis timeline of cell injury: where necrosis explodes (membrane breakdown, enzyme leak, inflammation), apoptosis whispers — an ATP-dependent, caspase-executed, membrane-intact deletion that leaves no inflammatory trace because the corpse is packaged into apoptotic bodies and eaten by macrophages before its contents can spill. The exam loves the page for its THREE-DOOR architecture because each door is a different clinical world: the intrinsic (mitochondrial) door is the oncology world — p53 senses DNA damage and the Bcl-2 rheostat decides the cell's fate, which is why follicular lymphoma's t(14;18) puts Bcl-2 under the immunoglobulin heavy-chain promoter, overexpresses the guardian, shuts the mitochondrial door, and turns ↓ caspase activation into tumorigenesis; the extrinsic (death receptor) door is the immunology world — FasL-Fas is the tool of thymic medullary negative selection, and its inherited failure (autoimmune lymphoproliferative syndrome) leaves self-reacting lymphocytes alive to produce lymphadenopathy, hepatosplenomegaly, and autoimmune cytopenias; and the perforin/granzyme B door is the cytotoxic world — the killer T cell and NK cell deliver granzyme B through a perforin pore, turning the target's own caspases against it. The convergence on executioner caspases is the design elegance: three entry points, one protease hub, one morphologic signature (shrinkage, condensation, blebbing, bodies) and one laboratory signature (DNA laddering in multiples of 180 bp — the endonuclease cleaving between nucleosomes). And the growth-factor-withdrawal trigger (↓IL-2 after a completed immunologic reaction) explains why effector lymphocytes die by default when their cytokine disappears — contraction of the immune response is apoptosis by design, not accident.",
    keyIdea:
      "Read every apoptosis question as DOOR → EXECUTIONER → BODY. THE THREE DOORS: INTRINSIC (mitochondrial) — growth-factor withdrawal (↓IL-2 after a completed immunologic reaction), embryonic tissue remodeling, or injurious stimuli (radiation, toxins, hypoxia) → p53 activation → the Bcl-2 rheostat: Bax/Bak (proapoptotic — 'Bad for survival') form outer-membrane pores releasing cytochrome C from the intermembrane space, while Bcl-2/Bcl-xL (antiapoptotic — 'Be clever, live') keep the membrane impermeable; Bcl-2 overexpression (follicular lymphoma t[14;18]) → ↓ caspase activation → tumorigenesis. EXTRINSIC (death receptor) — FasL-Fas (CD95) or TNF-α-TNFR binding; Fas-FasL is necessary for thymic medullary negative selection, and its defect causes autoimmune lymphoproliferative syndrome (failure of clonal deletion → lymphadenopathy, hepatosplenomegaly, autoimmune cytopenias). PERFORIN/GRANZYME B — cytotoxic T cells and NK cells release perforin (the pore) and granzyme B (enters through it). THE HUB: all three activate caspases (cytosolic proteases) — the executioner caspases. THE BODY: cell shrinkage, chromatin condensation, membrane blebbing, apoptotic bodies → phagocytosed; deeply eosinophilic cytoplasm and basophilic nucleus, pyknosis, karyorrhexis; membrane INTACT, no significant inflammation (unlike necrosis); DNA laddering (multiples of 180 bp) the sensitive indicator.",
  },
  mechanisms: [
    {
      id: "three-doors-one-executioner",
      title: "Three doors, one executioner: how each pathway reaches the caspase hub",
      context: "The three pathway blocks and the convergence figure (book 204)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "An apoptosis question appears — which door, or what happens downstream",
            sublabel: "Input — any vignette about programmed cell death: DNA damage, death ligands, cytotoxic killing, or failed apoptosis.",
            variant: "input",
          },
          {
            id: "intrinsic",
            label: "DOOR 1 — INTRINSIC (mitochondrial): p53 activation → the Bcl-2 rheostat → cytochrome C",
            sublabel: "Triggers: regulating-factor withdrawal (↓IL-2 after a completed immunologic reaction), embryonic tissue remodeling, injurious stimuli (radiation, toxins, hypoxia). BAX and BAK form pores in the outer mitochondrial membrane → cytochrome C released from the intermembrane space → caspase activation; Bcl-2 and Bcl-xL keep the membrane impermeable.",
            variant: "process",
          },
          {
            id: "extrinsic",
            label: "DOOR 2 — EXTRINSIC (death receptor): FasL-Fas (CD95) and TNF-α-TNFR",
            sublabel: "Ligand-receptor interactions at the surface; Fas-FasL is necessary in thymic medullary negative selection, and its defect causes autoimmune lymphoproliferative syndrome (failure of clonal deletion → self-reacting lymphocytes accumulate).",
            variant: "process",
          },
          {
            id: "perforin",
            label: "DOOR 3 — PERFORIN/GRANZYME B: the cytotoxic payload",
            sublabel: "Cytotoxic T cells and NK cells release granules containing perforin and granzyme B; perforin forms a pore for granzyme B to enter the target cell — the killer's door into the victim's caspases.",
            variant: "process",
          },
          {
            id: "hub",
            label: "THE HUB — executioner caspases (cytosolic proteases)",
            sublabel: "All three doors converge here: the caspases execute cellular breakdown — cytoskeletal dispersion, cytoplasmic blebs, nuclear fragmentation.",
            variant: "process",
          },
          {
            id: "output",
            label: "THE BODY — apoptotic bodies, phagocytosed without inflammation",
            sublabel: "Output: cell shrinkage, chromatin condensation, membrane blebbing, apoptotic bodies tagged with ligands for macrophage cell receptors → engulfed; membrane intact, no significant inflammation; DNA laddering (multiples of 180 bp) the sensitive indicator.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "intrinsic", label: "withdrawal or damage" },
          { from: "trigger", to: "extrinsic", label: "death ligand" },
          { from: "trigger", to: "perforin", label: "cytotoxic attack" },
          { from: "intrinsic", to: "hub", label: "cytochrome C" },
          { from: "extrinsic", to: "hub", label: "receptor engaged" },
          { from: "perforin", to: "hub", label: "granzyme B enters" },
          { from: "hub", to: "output", label: "execution" },
        ],
      },
    },
    {
      id: "bcl2-rheostat",
      title: "The Bcl-2 rheostat: pore formers against guardians, and the lymphoma that jams the door",
      context: "The intrinsic pathway block and the figure's mitochondrial membrane (book 204)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A Bcl-2-family or failed-apoptosis question appears",
            sublabel: "Input — any stem about Bax, Bak, Bcl-2, Bcl-xL, cytochrome C, or tumorigenesis from survival-factor overexpression.",
            variant: "input",
          },
          {
            id: "pore",
            label: "THE PROAPOPTOTIC SIDE — Bax and Bak ('Bad for survival')",
            sublabel: "BAX and BAK form pores in the outer mitochondrial membrane — the physical opening for cytochrome C to leave the intermembrane space and enter the cytoplasm, where it activates caspases.",
            variant: "process",
          },
          {
            id: "guard",
            label: "THE ANTIAPOPTOTIC SIDE — Bcl-2 and Bcl-xL ('Be clever, live')",
            sublabel: "Bcl-2 keeps the mitochondrial membrane impermeable, preventing cytochrome C release — the guardian that holds the door shut. The source prints both mnemonics inline, carried verbatim in this note's tables.",
            variant: "process",
          },
          {
            id: "lymphoma",
            label: "THE JAMMED DOOR — Bcl-2 overexpression, follicular lymphoma t(14;18)",
            sublabel: "Overexpression keeps the membrane permanently impermeable → ↓ caspase activation → tumorigenesis: the follicular lymphoma translocation that turns a survival guardian into an oncogene.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "pore", label: "open the door" },
          { from: "trigger", to: "guard", label: "hold the door" },
          { from: "pore", to: "lymphoma", label: "if pores win → death" },
          { from: "guard", to: "lymphoma", label: "if guardians win → survival" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "apoptosis-pathway-map",
      title: "The apoptosis convergence map — three doors, one executioner, one quiet corpse (an original KYP redraw)",
      caption:
        "An original KYP redraw of the source's three-pathway convergence figure (book 204 — vector line art printing entirely in the text layer, 0 rasters; VLM census confirmed the topology): the INTRINSIC column (DNA damage from radiation, ROS, and toxins; misfolded proteins; hypoxia — feeding p53 activation, then Bax/Bak against Bcl-2 at the mitochondrion, then cytochrome C released from the intermembrane space); the EXTRINSIC column (FasL binding Fas [CD95] and TNF-α binding TNFR at the cell membrane); and the PERFORIN/GRANZYME B column (a cytotoxic T cell releasing granzyme B through a perforin pore) — all converging on the central EXECUTIONER CASPASES hub, fanning out to cytoskeletal dispersion, cytoplasmic blebs, and nuclear fragmentation, and ending in the apoptotic body — tagged with ligands for macrophage cell receptors — engulfed by a macrophage. Redrawn with original KYP vector glyphs for the mitochondrion, the membrane receptors, the T cell, and the macrophage; never reproducing the source artwork.",
      notice:
        "The source figure prints as vector line art in the text layer (pdfimages: 0 rasters — the M33/M34 convention) — REDRAWN here as clean vector panels; the figure's labels are carried verbatim in the note's tables. The source prints TWO of its own mnemonics inline in the intrinsic block — 'Bad for survival' (Bax/Bak) and 'Be clever, live' (Bcl-2/Bcl-xL) — carried verbatim in the tables per the E38 precedent; the KYP memory layer stays original. No other margin notes (VLM confirmed).",
    },
    {
      kind: "table",
      title: "Book 204 — the apoptosis blocks (carried verbatim, with the source's own inline mnemonics)",
      intro:
        "The page's four text blocks, as printed — the definition and the three pathway blocks. The two parenthetical mnemonics are the source's own, printed inline.",
      columns: ["BLOCK · FIELD", "PRINTED CONTENT — verbatim (book 204)"],
      rows: [
        ["Apoptosis (definition)", "ATP-dependent programmed cell death. Intrinsic, extrinsic, and perforin/granzyme B pathways → activate caspases (cytosolic proteases) → cellular breakdown including cell shrinkage, chromatin condensation, membrane blebbing, and formation of apoptotic bodies, which are then phagocytosed. Characterized by deeply eosinophilic cytoplasm and basophilic nucleus, pyknosis, and karyorrhexis. Cell membrane typically remains intact without significant inflammation (unlike necrosis). DNA laddering (fragments in multiples of 180 bp) is a sensitive indicator of apoptosis."],
        ["Intrinsic (mitochondrial) pathway — triggers", "Involved in tissue remodeling in embryogenesis. Occurs when a regulating factor is withdrawn from a proliferating cell population (eg, ↓ IL-2 after a completed immunologic reaction → apoptosis of proliferating effector cells). Also occurs after exposure to injurious stimuli (eg, radiation, toxins, hypoxia)."],
        ["— the Bcl-2 rheostat (with the source's own mnemonics)", "Regulated by Bcl-2 family of proteins. Bax and Bak are proapoptotic (Bad for survival), while Bcl-2 and Bcl-xL are antiapoptotic (Be clever, live)."],
        ["— the mechanism and the jammed door", "BAX and BAK form pores in the outer mitochondrial membrane → release of cytochrome C from the mitochondrial intermembrane space into the cytoplasm → activation of caspases. Bcl-2 keeps the mitochondrial membrane impermeable, thereby preventing cytochrome C release. Bcl-2 overexpression (eg, follicular lymphoma t[14;18]) → ↓ caspase activation → tumorigenesis."],
        ["Extrinsic (death receptor) pathway", "Ligand receptor interactions: FasL binding to Fas (CD95) or TNF-α binding to its receptor. Fas-FasL interaction is necessary in thymic medullary negative selection. Autoimmune lymphoproliferative syndrome—caused by defective Fas-FasL interaction → failure of clonal deletion → ↑ numbers of self-reacting lymphocytes. Presents with lymphadenopathy, hepatosplenomegaly, autoimmune cytopenias."],
        ["Perforin/granzyme B pathway", "Release of granules containing perforin and granzyme B by immune cells (cytotoxic T-cell and natural killer cell) → perforin forms a pore for granzyme B to enter the target cell."],
      ],
      caption:
        "The four blocks: the ATP-dependent definition with its morphology and the 180-bp ladder; the intrinsic door with its Bcl-2 rheostat and the t(14;18) jammed door; the extrinsic door with thymic negative selection and ALPS; and the cytotoxic payload of perforin and granzyme B.",
    },
    {
      kind: "table",
      title: "Book 204 — the convergence figure's labels (carried verbatim, reading order VLM-verified)",
      intro:
        "The figure's labels print in the text layer interleaved with the page footer (raw 49-101); the reading order below is verified against the rendered page by VLM census.",
      columns: ["FIGURE ELEMENT", "PRINTED LABELS — verbatim (book 204)"],
      rows: [
        ["The three column titles", "Intrinsic pathway (mitochondrial) · Extrinsic pathway (death receptor) · Perforin/granzyme B pathway."],
        ["The intrinsic inputs", "DNA damage — Radiation, ROS, toxins · Misfolded proteins · Hypoxia → p53 activation."],
        ["The mitochondrial membrane pair", "Bax/Bak · Bcl-2 (flanking the mitochondrion) → Cytochrome C."],
        ["The death receptors", "FasL · Fas · TNF-α · TNFR (at the cell membrane)."],
        ["The cytotoxic payload", "Cytotoxic T cell · Granzyme B · Perforin."],
        ["The hub and its fan-out", "Executioner caspases → Cytoskeletal dispersion · Cytoplasmic bleb · Nuclear fragmentation."],
        ["The ending", "Apoptotic body (tagged 'Ligands for macrophage cell receptors') → Macrophage."],
      ],
      caption:
        "The figure's own architecture: three labeled inputs (damage, ligands, cytotoxic granules), one labeled hub (executioner caspases), three labeled consequences (dispersion, bleb, fragmentation), and a labeled cleanup (the apoptotic body and its macrophage).",
    },
    {
      kind: "callout",
      variant: "exam",
      title: "The three routing rules this page teaches",
      body:
        "Rule 1 — MATCH THE DOOR TO THE STIMULUS: growth-factor withdrawal (↓IL-2 after a completed immunologic reaction), embryonic remodeling, radiation, toxins, hypoxia, or misfolded proteins → INTRINSIC (p53 → the Bcl-2 rheostat → cytochrome C); a death ligand (FasL on Fas/CD95, TNF-α on TNFR) → EXTRINSIC; a cytotoxic T cell or NK cell attacking a target → PERFORIN/GRANZYME B. All three doors converge on executioner caspases. Rule 2 — THE RHEOSTAT IS THE ONCOLOGY HOOK: Bax and Bak form the pores ('Bad for survival' — the source's own mnemonic, carried verbatim), Bcl-2 and Bcl-xL hold the membrane impermeable ('Be clever, live'); Bcl-2 overexpression in follicular lymphoma t(14;18) jams the mitochondrial door — ↓ caspase activation → tumorigenesis, the cancer that survives by failing to die. Rule 3 — APOPTOSIS IS THE QUIET DEATH: the membrane stays intact, there is no significant inflammation (unlike necrosis), the corpse is packaged as apoptotic bodies and phagocytosed (ligands for macrophage cell receptors), and the laboratory echo is DNA laddering in multiples of 180 bp — the sensitive indicator. When the exam asks why a lymph node is full of self-reacting lymphocytes with autoimmune cytopenias (ALPS), the answer is the extrinsic door's hinge: defective Fas-FasL → failure of clonal deletion.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 42-year-old man has painless cervical and inguinal lymphadenopathy; biopsy shows closely packed follicles of small cleaved lymphocytes, and karyotyping reveals t(14;18).",
        discriminator: "Bcl-2 overexpression under the immunoglobulin heavy-chain promoter → ↓ caspase activation → tumorigenesis",
        concept: "The intrinsic door jammed shut",
        answer:
          "The t(14;18) of follicular lymphoma overexpresses Bcl-2, which keeps the mitochondrial membrane impermeable and prevents cytochrome C release — so caspase activation falls and the cells fail to die: tumorigenesis by blocked apoptosis. The proapoptotic pore formers (Bax/Bak — 'Bad for survival') lose the rheostat to the antiapoptotic guardian ('Be clever, live').",
      },
      {
        stem: "A 6-year-old girl has chronic nonmalignant lymphadenopathy, hepatosplenomegaly, and autoimmune hemolytic anemia with thrombocytopenia since early childhood; genetic testing shows a Fas (CD95) mutation.",
        discriminator: "Defective Fas-FasL interaction → failure of clonal deletion → autoimmune lymphoproliferative syndrome",
        concept: "The extrinsic door's hinge failing",
        answer:
          "Autoimmune lymphoproliferative syndrome: defective Fas-FasL interaction prevents the apoptosis that thymic medullary negative selection (and peripheral deletion) requires → failure of clonal deletion → ↑ numbers of self-reacting lymphocytes. The presentation: lymphadenopathy, hepatosplenomegaly, autoimmune cytopenias — autoimmunity from lymphocytes that should have died.",
      },
      {
        stem: "Two weeks after recovering from influenza, a previously proliferating clone of virus-specific cytotoxic T lymphocytes shrinks dramatically as its supporting cytokine disappears.",
        discriminator: "↓ IL-2 after a completed immunologic reaction → apoptosis of proliferating effector cells",
        concept: "Growth-factor withdrawal opens the intrinsic door",
        answer:
          "The intrinsic (mitochondrial) pathway fires when a regulating factor is withdrawn from a proliferating cell population: ↓ IL-2 after the immunologic reaction is complete removes the survival signal, the Bcl-2 rheostat tips toward Bax/Bak, cytochrome C is released, and caspases execute the contraction of the effector pool — apoptosis by design, leaving no inflammation behind.",
      },
    ],
    traps: [
      {
        a: "Apoptosis",
        b: "Necrosis",
        whyConfused: "Both share nuclear words (pyknosis, karyorrhexis) and both end in cell death",
        keyDifference: "Apoptosis is ATP-DEPENDENT and quiet: the membrane remains intact, there is no significant inflammation, and the corpse is packaged into apoptotic bodies and phagocytosed; necrosis breaks the plasma membrane (enzyme leak, Ca2+ influx) and inflames. DNA laddering (multiples of 180 bp) is the apoptosis indicator",
        clue: "'Intact membrane,' 'no inflammation,' '180 bp,' or 'ATP-dependent' in the stem or options → apoptosis; 'troponin leak' or 'inflammation' → necrosis",
      },
      {
        a: "Bax and Bak",
        b: "Bcl-2 and Bcl-xL",
        whyConfused: "All four are the Bcl-2 family at the same mitochondrial membrane",
        keyDifference: "Bax and Bak are PROapoptotic — they form the outer-membrane pores that release cytochrome C ('Bad for survival'); Bcl-2 and Bcl-xL are ANTIapoptotic — they keep the membrane impermeable and prevent the release ('Be clever, live' — the source's own mnemonics, carried verbatim)",
        clue: "Pore formation or cytochrome C release → Bax/Bak; membrane impermeability, t(14;18), or follicular lymphoma → Bcl-2",
      },
      {
        a: "Autoimmune lymphoproliferative syndrome (Fas-FasL defect)",
        b: "Perforin/granzyme defects",
        whyConfused: "Both are inherited defects of cell-killing machinery with immune consequences",
        keyDifference: "The Fas-FasL defect fails CLONAL DELETION (self-reacting lymphocytes survive → lymphadenopathy, hepatosplenomegaly, autoimmune cytopenias — AUTOimmunity); a perforin defect fails CYTOTOXIC KILLING (the victim survives, unchecked intracellular infection and macrophage activation — immunodeficiency)",
        clue: "Self-reacting lymphocytes accumulating with cytopenias → ALPS (extrinsic door); failure to kill infected or tumor targets → the perforin door",
      },
    ],
    pivots: [
      {
        lookAlike: "Which door does the stem describe?",
        differentiator: "The trigger names the door: withdrawn growth factor (↓IL-2), embryonic remodeling, radiation, toxins, hypoxia, or misfolded proteins → INTRINSIC; a death ligand at a receptor (FasL-Fas/CD95, TNF-α-TNFR) → EXTRINSIC; a cytotoxic T cell or NK cell attacking a target → PERFORIN/GRANZYME B",
        correctPath: "Find the trigger, name the door, then follow the arrow to the executioner-caspase hub — every downstream question (morphology, 180-bp ladder, no inflammation) is shared machinery",
      },
      {
        lookAlike: "Failed-apoptosis syndromes — which protein, which disease?",
        differentiator: "One guardian overexpressed (Bcl-2, follicular lymphoma t[14;18] → tumorigenesis) vs one receptor interaction defective (Fas-FasL → ALPS with clonal-deletion failure)",
        correctPath: "Cancer that will not die (small cleaved cells, t[14;18]) → Bcl-2 overexpression; autoimmunity from cells that will not die (lymphadenopathy + cytopenias) → defective Fas-FasL",
      },
    ],
    miniCase: {
      vignette:
        "A 5-year-old boy is evaluated for chronic, painless lymphadenopathy present since age 2, along with hepatosplenomegaly. Labs show hemoglobin 9.8 g/dL with a positive direct antiglobulin test, platelets 74,000/μL, and an absolute lymphocyte count at the upper limit of normal with an elevated fraction of double-negative T cells (CD4−/CD8−). Serum IL-2 levels are falling as a remote viral illness resolves. Genetic testing is pending. His 8-year-old sister has the same findings.",
      question: "Which molecular interaction is most likely defective, what does its failure prevent, and which apoptotic pathway is affected?",
      options: [
        {
          label: "Fas-FasL interaction — failure of clonal deletion; the EXTRINSIC (death receptor) pathway",
          text: "The defective receptor interaction leaves self-reactive lymphocytes alive.",
          correct: true,
          why: "Correct on all three layers. The chronic lymphadenopathy, hepatosplenomegaly, and autoimmune cytopenias (hemolytic anemia with a positive DAT plus thrombocytopenia) with a sibling recurrence pattern = autoimmune lymphoproliferative syndrome, caused by defective Fas-FasL interaction. Fas-FasL is necessary in thymic medullary negative selection and peripheral deletion; its failure means clonal deletion fails → ↑ numbers of self-reacting lymphocytes (the double-negative T-cell expansion is ALPS's signature). The pathway is the EXTRINSIC (death receptor) door — ligand-receptor interaction at Fas (CD95) or TNF-α at TNFR. The falling IL-2 is a distractor-with-purpose: it would open the INTRINSIC door on proliferating effectors, but these cells never reach that door — their deletion fails upstream at the receptor.",
        },
        {
          label: "Bcl-2 overexpression from t(14;18) — failure of cytochrome C release; the INTRINSIC pathway",
          text: "The guardian protein holds the mitochondrial membrane shut and the node fills with survivors.",
          why: "Right vocabulary, wrong disease and door: Bcl-2 overexpression (follicular lymphoma t[14;18]) jams the INTRINSIC door — ↓ caspase activation → tumorigenesis — producing painless nodes of small cleaved B lymphocytes in middle age, not a familial childhood autoimmunity syndrome with DAT-positive hemolysis and double-negative T cells.",
        },
        {
          label: "Perforin deficiency — failure of granzyme B entry; the PERFORIN/GRANZYME B pathway",
          text: "The cytotoxic payload cannot enter targets, so lymphocytes accumulate.",
          why: "Wrong door and wrong phenotype: perforin deficiency fails CYTOTOXIC KILLING of infected or transformed targets (uncontrolled macrophage and lymphocyte activation of hemophagocytic lymphohistiocytosis), not clonal deletion — and the self-reactive-lymphocyte accumulation with autoimmune cytopenias is the deletion failure ALPS defines.",
        },
        {
          label: "p53 inactivation — failure of DNA-damage sensing; the INTRINSIC pathway",
          text: "Without p53, DNA-damaged lymphocytes escape apoptosis and accumulate.",
          why: "Wrong lesion at a real node: p53 activation is the intrinsic door's sensor for DNA damage (radiation, ROS, toxins) upstream of the Bcl-2 rheostat — its inactivation causes cancer-prone syndromes (Li-Fraumeni patterns), not familial autoimmune lymphoproliferation with double-negative T cells; the exam's ALPS stem points at Fas-FasL, not p53.",
        },
        {
          label: "ATP depletion — failure of the caspase cascade itself; all three pathways",
          text: "The executioner caspases lack the ATP apoptosis requires, so nothing dies.",
          why: "Reversed causality: apoptosis is ATP-DEPENDENT, so ATP depletion would impair it — but this child's apoptosis machinery is intact and selectively failed at one receptor; a global ATP failure is the necrosis timeline of cell injury, which would produce inflammation, not chronic painless lymphadenopathy with autoimmunity.",
        },
      ],
      reasoning:
        "The stem is ALPS assembled piece by piece: early-childhood onset with a sibling recurrence (autosomal dominant Fas defects), chronic nonmalignant lymphadenopathy and hepatosplenomegaly, and the autoimmune cytopenias the source lists verbatim (DAT-positive hemolytic anemia, thrombocytopenia) with the double-negative T-cell expansion the syndrome is known for. The printed mechanism chain runs: defective Fas-FasL interaction → failure of clonal deletion → ↑ numbers of self-reacting lymphocytes — the extrinsic (death receptor) door's hinge. The distractors each borrow a real protein from the page and misfile it: Bcl-2 overexpression is the intrinsic door's cancer (follicular lymphoma t[14;18], age and histology wrong), perforin is the cytotoxic door's killing failure (phenotype wrong), p53 is the intrinsic sensor (syndrome wrong), and ATP depletion inverts the definition's dependency (apoptosis needs ATP, but the failure here is receptor-specific, not energetic). The falling IL-2 is deliberately placed to tempt the intrinsic answer — growth-factor withdrawal apoptosis is exactly what SHOULD now be deleting this child's expanded effector pool, and would, if the Fas-FasL hinge worked.",
    },
  },
  mnemonics: [
    {
      code: "THREE DOORS, ONE EXECUTIONER",
      meaning: "The architecture of the page: intrinsic (mitochondrial — p53, the Bcl-2 rheostat, cytochrome C), extrinsic (death receptor — FasL-Fas/CD95, TNF-α-TNFR), and perforin/granzyme B (the cytotoxic payload) all converge on the executioner caspases.",
      memorizes: "The pathway map",
      whenToUse: "Any apoptosis architecture or pathway-routing question",
      clinical: "Name the door from the trigger, and the downstream machinery is shared — caspases, blebs, bodies, macrophage.",
    },
    {
      code: "SHRINK, CLUMP, BLEB, GET EATEN",
      meaning: "The apoptotic sequence: cell shrinkage → chromatin condensation → membrane blebbing → apoptotic bodies (tagged with ligands for macrophage cell receptors) → phagocytosed — with the membrane intact and no significant inflammation.",
      memorizes: "The morphologic cascade and its quiet ending",
      whenToUse: "Any morphology, histology, or apoptosis-vs-necrosis question",
      clinical: "Deeply eosinophilic cytoplasm, basophilic nucleus, pyknosis, karyorrhexis — and a corpse that never spills.",
    },
    {
      code: "LADDER AT 180",
      meaning: "DNA laddering — fragments in multiples of 180 bp — is a sensitive indicator of apoptosis: the endonuclease cuts between nucleosomes, so the gel shows a ladder of wrapped-DNA multiples.",
      memorizes: "The laboratory signature and its number",
      whenToUse: "Any electrophoresis, DNA-fragmentation, or apoptosis-detection question",
      clinical: "The quiet death's quiet fingerprint — no inflammation, no enzyme leak, just a ladder.",
    },
    {
      code: "BCL-2 BLOCKS THE DOOR",
      meaning: "Bcl-2 keeps the mitochondrial membrane impermeable — preventing cytochrome C release and caspase activation. Overexpressed in follicular lymphoma t(14;18), it converts the guardian into an oncogene: ↓ caspase activation → tumorigenesis.",
      memorizes: "The antiapoptotic guardian and its lymphoma",
      whenToUse: "Any Bcl-2, cytochrome C, follicular-lymphoma, or t(14;18) question",
      clinical: "The cancer that survives by failing to die — the proapoptotic pore formers (Bax/Bak) outvoted by an overexpressed guardian.",
    },
  ],
  rapidReview: {
    s30: [
      "Apoptosis: ATP-dependent programmed cell death — intrinsic, extrinsic, and perforin/granzyme B pathways activate caspases (cytosolic proteases) → cell shrinkage, chromatin condensation, membrane blebbing, apoptotic bodies → phagocytosed; membrane intact, no significant inflammation (unlike necrosis); DNA laddering (multiples of 180 bp) is a sensitive indicator",
      "Intrinsic triggers: tissue remodeling in embryogenesis; regulating-factor withdrawal (↓IL-2 after a completed immunologic reaction → apoptosis of effector cells); injurious stimuli (radiation, toxins, hypoxia)",
      "The Bcl-2 rheostat: Bax and Bak proapoptotic — outer-membrane pores → cytochrome C release from the intermembrane space → caspase activation; Bcl-2 and Bcl-xL antiapoptotic — keep the membrane impermeable; Bcl-2 overexpression (follicular lymphoma t[14;18]) → ↓ caspase activation → tumorigenesis",
      "Extrinsic: FasL-Fas (CD95) or TNF-α-TNFR; Fas-FasL necessary in thymic medullary negative selection; defective Fas-FasL → autoimmune lymphoproliferative syndrome (failure of clonal deletion → lymphadenopathy, hepatosplenomegaly, autoimmune cytopenias)",
      "Perforin/granzyme B: cytotoxic T cell and NK cell granules — perforin forms the pore, granzyme B enters the target",
    ],
    m3: [
      "Three doors, one executioner: intrinsic (p53 → rheostat → cytochrome C), extrinsic (death receptors), perforin/granzyme B — all → executioner caspases → cytoskeletal dispersion, cytoplasmic bleb, nuclear fragmentation → apoptotic body → macrophage",
      "The source's own mnemonics (carried verbatim): 'Bad for survival' = Bax/Bak proapoptotic; 'Be clever, live' = Bcl-2/Bcl-xL antiapoptotic",
      "Failed-apoptosis syndromes: Bcl-2 overexpression → follicular lymphoma (cancer that will not die); defective Fas-FasL → ALPS (autoimmunity from cells that will not die)",
      "Apoptosis vs necrosis: intact membrane + no inflammation + ATP-dependent + 180-bp ladder vs membrane breakdown + enzyme leak + inflammation",
    ],
    m10: [
      "Census: p226 (book 204) is PURE TEXT (pdfimages: ZERO rasters) — the convergence figure prints as vector line art with all labels in the text layer (the M33/M34 convention)",
      "Figure topology VLM-verified: intrinsic column at left (DNA damage/Radiation-ROS-toxins, Misfolded proteins, Hypoxia → p53 activation → Bax/Bak vs Bcl-2 flanking a mitochondrion icon → Cytochrome C), extrinsic at center-top (TNF-α-TNFR, FasL-Fas on a membrane drawing), perforin/granzyme at right (a cytotoxic T cell) — converging on the central executioner-caspase box, fanning to cytoskeletal dispersion, cytoplasmic bleb, nuclear fragmentation, ending with the apoptotic body (ligands for macrophage cell receptors) engulfed by a macrophage",
      "The figure's labels print interleaved with the page footer in the text stream (raw 49-101, the indd line at raw 81 — the M39 footer-split pattern)",
      "The source prints TWO mnemonics INLINE in the intrinsic block (not the outer margin): 'Bad for survival' and 'Be clever, live' — carried VERBATIM in the tables per the E38 precedent; the KYP memory layer stays original",
      "No photographs on the page; no other margin notes (VLM census confirmed)",
    ],
  },
  recall: [
    {
      q: "Carry the apoptosis definition block verbatim.",
      a: "ATP-dependent programmed cell death. Intrinsic, extrinsic, and perforin/granzyme B pathways → activate caspases (cytosolic proteases) → cellular breakdown including cell shrinkage, chromatin condensation, membrane blebbing, and formation of apoptotic bodies, which are then phagocytosed. Characterized by deeply eosinophilic cytoplasm and basophilic nucleus, pyknosis, and karyorrhexis. Cell membrane typically remains intact without significant inflammation (unlike necrosis). DNA laddering (fragments in multiples of 180 bp) is a sensitive indicator of apoptosis.",
    },
    {
      q: "State the intrinsic pathway's triggers, its rheostat (with the source's own mnemonics), and its mechanism.",
      a: "TRIGGERS: tissue remodeling in embryogenesis; withdrawal of a regulating factor from a proliferating cell population (eg, ↓ IL-2 after a completed immunologic reaction → apoptosis of proliferating effector cells); injurious stimuli (radiation, toxins, hypoxia). RHEOSTAT: Bax and Bak are proapoptotic ('Bad for survival'), Bcl-2 and Bcl-xL are antiapoptotic ('Be clever, live'). MECHANISM: BAX and BAK form pores in the outer mitochondrial membrane → release of cytochrome C from the mitochondrial intermembrane space into the cytoplasm → activation of caspases; Bcl-2 keeps the mitochondrial membrane impermeable, preventing the release — and its overexpression (follicular lymphoma t[14;18]) → ↓ caspase activation → tumorigenesis.",
    },
    {
      q: "State the extrinsic pathway's interactions, its thymic role, and the syndrome of its failure.",
      a: "Ligand receptor interactions: FasL binding to Fas (CD95) or TNF-α binding to its receptor. Fas-FasL interaction is necessary in thymic medullary negative selection. Autoimmune lymphoproliferative syndrome — caused by defective Fas-FasL interaction → failure of clonal deletion → ↑ numbers of self-reacting lymphocytes. Presents with lymphadenopathy, hepatosplenomegaly, autoimmune cytopenias.",
    },
    {
      q: "State the perforin/granzyme B pathway in one sentence.",
      a: "Release of granules containing perforin and granzyme B by immune cells (cytotoxic T-cell and natural killer cell) → perforin forms a pore for granzyme B to enter the target cell.",
    },
    {
      q: "Walk the convergence figure — every column, the hub, the fan-out, and the ending.",
      a: "INTRINSIC column: DNA damage (Radiation, ROS, toxins), Misfolded proteins, Hypoxia → p53 activation → Bax/Bak vs Bcl-2 at the mitochondrion → Cytochrome C. EXTRINSIC column: TNF-α binding TNFR and FasL binding Fas at the membrane. PERFORIN/GRANZYME B column: the Cytotoxic T cell releasing Granzyme B through Perforin. All three converge on EXECUTIONER CASPASES → Cytoskeletal dispersion, Cytoplasmic bleb, Nuclear fragmentation → the Apoptotic body, tagged with Ligands for macrophage cell receptors, engulfed by the Macrophage.",
    },
  ],
  related: [
    {
      title: "Cell Cycle",
      topicId: "cell-cycle",
      note: "p53 is the shared sensor: the checkpoint chapter's DNA-damage arrest (p53-p21) and this page's p53 activation feeding the Bcl-2 rheostat are the same guardian deciding between repair and death.",
    },
    {
      title: "NK, B & T Cell Functions",
      topicId: "nk-b-t-cell-functions",
      note: "The perforin/granzyme B door is those killers at work — the cytotoxic T cell and NK cell granule exocytosis this page hands to the caspase hub; their defects are the immunodeficiency mirror of ALPS's autoimmunity.",
    },
    {
      title: "T-Cell Development",
      topicId: "t-cell-development",
      note: "Thymic medullary negative selection runs on Fas-FasL — the self-reactive clones this page deletes by apoptosis are the ones whose survival (ALPS) produces autoimmunity.",
    },
    {
      title: "Lymphocyte Activation & Tolerance",
      topicId: "lymphocyte-activation-tolerance",
      note: "The ↓IL-2 withdrawal trigger is the contraction phase of every immune response: effector pools built on cytokine support are dismantled by the intrinsic door when the reaction completes.",
    },
  ],
  crossLinks: [
    {
      subject: "Biochemistry (proteases and ATP)",
      connection:
        "Caspases are cytosolic proteases executing a proteolytic cascade, and the whole program is ATP-dependent — a death that costs energy, which is why starving cells necrose instead of apoptose.",
    },
    {
      subject: "Immunology (negative selection and tolerance)",
      connection:
        "Fas-FasL is the mechanism of thymic medullary negative selection and peripheral deletion — tolerance itself is an apoptotic program, and ALPS is tolerance failing at this page's hinge.",
    },
    {
      subject: "Oncology (follicular lymphoma t(14;18))",
      connection:
        "The immunoglobulin heavy-chain promoter driving Bcl-2 overexpression is tumorigenesis by blocked apoptosis — the intrinsic door jammed shut so caspases never fire; the lymphoma's indolent pace IS the guardian's success.",
    },
    {
      subject: "Histology (the quiet corpse)",
      connection:
        "Deeply eosinophilic cytoplasm with a basophilic fragmented nucleus, apoptotic bodies tingible with macrophages, and no neutrophils — the tissue picture that distinguishes programmed death from necrotic inflammation at a glance.",
    },
  ],
};
