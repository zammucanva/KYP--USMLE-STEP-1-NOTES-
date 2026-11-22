import type { KypUsMLENote } from "../types";

// Pathology — CELLULAR INJURY banner (P-batch 4). Source: pdf 227 /
// book 205 (Necrosis — the definition line and the six-row
// TYPE/SEEN IN/DUE TO/HISTOLOGY table). Census: pdfimages reports SIX
// cmyk JPEG rasters (~287x226 at 150 dpi), lettered A-F, printed in a
// 2x3 grid at the bottom of the page, matching the A-F markers in
// the table's HISTOLOGY column. VLM census (render p-227.png)
// documented each: A = an H&E micrograph of coagulative necrosis
// (preserved cellular architecture with lost nuclei and eosinophilic
// cytoplasm); B = a GROSS photograph of a brain with a large cystic
// cavity (liquefactive); C = a GROSS photograph with a central white
// cheesy area, the granuloma (caseous); D = an H&E micrograph of fat
// necrosis (outlines of dead fat cells without peripheral nuclei,
// the dark-blue calcium saponification); E = an H&E micrograph of a
// vessel wall with a thickened smudgy eosinophilic proteinaceous
// layer (fibrinoid); F = a CLINICAL photograph of a hand with
// blackened necrotic fingertips (gangrenous). ALL SIX ARE COPYRIGHTED
// PHOTOGRAPHS — described-in-text only, NEVER reproduced (the M32
// vancomycin-photo convention). The table's text (the four columns,
// the six rows) prints in the text layer and is carried VERBATIM in
// this note's tables. NO margin notes or mnemonics (VLM confirmed).

export const necrosisTypes: KypUsMLENote = {
  id: "necrosis-types",
  title: "Necrosis: The Five Morphologic Patterns",
  subtitle:
    "Six types on one table — and the loud death that ends every one of them (book 205). THE DEFINITION — exogenous injury → plasma membrane damage → intracellular components leak → enzymatic degradation and protein denaturation → local inflammatory reaction (unlike apoptosis). COAGULATIVE — ischemia/infarcts in most tissues (except brain); injury denatures enzymes → proteolysis blocked → preserved cellular architecture (cell outlines seen) but nuclei disappear, with ↑ cytoplasmic eosin binding (red/pink). LIQUEFACTIVE — bacterial abscesses and CNS infarcts; neutrophils release lysosomal enzymes that digest the tissue; early cellular debris and macrophages, late cystic spaces and cavitation. CASEOUS — TB, systemic fungi (Histoplasma capsulatum), Nocardia; macrophages wall off the organism → granular debris; fragmented cells and debris surrounded by lymphocytes and macrophages (granuloma), cheeselike gross appearance. FAT — enzymatic (acute pancreatitis: lipase breaks triglycerides, fatty acids bind calcium → saponification, chalky-white) and nonenzymatic (traumatic, eg, breast); outlines of dead fat cells without peripheral nuclei, dark blue on H&E. FIBRINOID — immune vascular reactions (polyarteritis nodosa; immune complex deposition, type III) and nonimmune (hypertensive emergency, preeclampsia; plasma protein/fibrin leakage); vessel walls with an eosinophilic layer of proteinaceous material. GANGRENOUS — distal extremity and GI tract after chronic ischemia: dry = ischemia = coagulative; wet = superinfection = liquefactive superimposed on coagulative.",
  subject: "Pathology",
  system: "Section II · High-Yield General Principles — Pathology: Cellular Injury",
  pilotCategory:
    "The six-type necrosis table read as a tissue router — which organ and which insult produce which morphologic pattern (the brain's liquefactive exception, the coagulative paradox of denatured enzymes preserving architecture, caseous granulomas for TB and fungi, fat saponification chemistry, fibrinoid's immune vs nonimmune vessels, and the dry/wet gangrene split) — with the necrosis-vs-apoptosis loudness contrast and six copyrighted photographs described in text, never reproduced.",
  difficulty: 2,
  readTime: 10,
  sourceRef:
    "First Aid 2026, Part 1 pp. 205–205 (Necrosis — the definition line; the six-row TYPE/SEEN IN/DUE TO/HISTOLOGY table for Coagulative, Liquefactive, Caseous, Fat, Fibrinoid, and Gangrenous; the six lettered photographs A-F, described in text)",
  tags: [
    "necrosis",
    "coagulative necrosis",
    "liquefactive necrosis",
    "caseous necrosis",
    "fat necrosis",
    "fibrinoid necrosis",
    "gangrenous necrosis",
    "dry gangrene",
    "wet gangrene",
    "ischemia",
    "infarct",
    "CNS infarct",
    "brain exception",
    "bacterial abscess",
    "neutrophils",
    "lysosomal enzymes",
    "tuberculosis",
    "systemic fungi",
    "Histoplasma capsulatum",
    "Nocardia",
    "granuloma",
    "cheeselike",
    "acute pancreatitis",
    "lipase",
    "triglycerides",
    "fatty acids",
    "saponification",
    "calcium",
    "chalky-white",
    "traumatic fat necrosis",
    "breast tissue",
    "polyarteritis nodosa",
    "hypertensive emergency",
    "preeclampsia",
    "immune complex deposition",
    "type III hypersensitivity",
    "fibrin leakage",
    "proteinaceous material",
    "eosinophilic",
    "preserved cellular architecture",
    "protein denaturation",
    "proteolysis blocked",
    "eosin stain",
    "cavitation",
    "chronic ischemia",
    "distal extremity",
    "GI tract",
    "superinfection",
    "inflammatory reaction",
  ],
  core: {
    what: "THE DEFINITION: exogenous injury → plasma membrane damage → intracellular components leak → cell undergoes enzymatic degradation and protein denaturation → local inflammatory reaction (unlike apoptosis). THE SIX TYPES (the table, verbatim): COAGULATIVE — seen in ischemia/infarcts in most tissues (except brain); due to ischemia or infarction, where injury denatures enzymes → proteolysis blocked; histology: preserved cellular architecture (cell outlines seen), but nuclei disappear; ↑ cytoplasmic binding of eosin stain (→ ↑ eosinophilia; red/pink color) [photograph A]. LIQUEFACTIVE — seen in bacterial abscesses, CNS infarcts; due to neutrophils releasing lysosomal enzymes that digest the tissue; histology: early — cellular debris and macrophages; late — cystic spaces and cavitation (CNS); neutrophils and cell debris seen with bacterial infection [photograph B]. CASEOUS — seen in TB, systemic fungi (eg, Histoplasma capsulatum), Nocardia; due to macrophages walling off the infecting microorganism → granular debris; histology: fragmented cells and debris surrounded by lymphocytes and macrophages (granuloma); cheeselike gross appearance [photograph C]. FAT — seen in enzymatic: acute pancreatitis (saponification of peripancreatic fat) and nonenzymatic: traumatic (eg, injury to breast tissue); due to damaged pancreatic cells releasing lipase, which breaks down triglycerides, the liberated fatty acids binding calcium → saponification (chalky-white appearance); histology: outlines of dead fat cells without peripheral nuclei; saponification of fat (combined with Ca2+) appears dark blue on H&E stain [photograph D]. FIBRINOID — seen in immune vascular reactions (eg, polyarteritis nodosa) and nonimmune vascular reactions (eg, hypertensive emergency, preeclampsia); due to immune complex deposition (type III hypersensitivity reaction) and/or plasma protein (eg, fibrin) leakage from damaged vessel; histology: vessel walls contain eosinophilic layer of proteinaceous material [photograph E]. GANGRENOUS — seen in distal extremity and GI tract, after chronic ischemia; dry: ischemia → coagulative; wet: superinfection → liquefactive superimposed on coagulative [photograph F].",
    why: "Necrosis is the loud death the cell-injury timeline ends in, and this page grades its six dialects with a single table the exam quotes line by line. The COAGULATIVE paradox is the intellectual core: ischemia denatures the enzymes that would digest the cell, so proteolysis is BLOCKED and the architecture is preserved as a ghost outline — the cell dies but keeps its shape, losing only its nuclei and turning pink with eosin. The BRAIN is the standing exception: with no room to swell and rich in lysosomes, infarcted CNS tissue liquefies instead — the cystic cavity on photograph B is what a healed stroke looks like grossly. LIQUEFACTIVE elsewhere belongs to neutrophils: their lysosomal enzymes digest the abscess into pus, debris, and eventually cavitation. CASEOUS is the granuloma's signature — TB and the systemic fungi walled off by macrophages into cheeselike granular debris (the name is the gross description). FAT necrosis is chemistry made visible: pancreatic lipase liberates fatty acids that bind calcium — saponification — leaving chalky-white deposits grossly and dark-blue calcium soaps on H&E; the same pattern without enzymes (trauma to breast) proves the fat cell's vulnerability, not the pancreas. FIBRINOID is the vessel wall's necrosis: immune complexes (type III, polyarteritis nodosa) or leaking plasma proteins (hypertensive emergency, preeclampsia) smudging the wall with eosinophilic proteinaceous material. And GANGRENOUS is not a seventh pattern but a LOCATION: the distal extremity and GI tract after chronic ischemia — dry when it stays ischemic (coagulative), wet when superinfected (liquefactive heaped on coagulative). Every photograph on the page is copyrighted and described in text here, never reproduced — the descriptions themselves are the high-yield payload.",
    keyIdea:
      "Route necrosis by TISSUE and INSULT. COAGULATIVE: ischemia/infarction in most tissues (EXCEPT brain) — enzymes denatured → proteolysis blocked → preserved outlines, nuclei gone, ↑ eosinophilia (red/pink). LIQUEFACTIVE: bacterial abscesses + CNS infarcts — neutrophil lysosomal enzymes digest the tissue; early debris and macrophages, late cystic spaces and cavitation. CASEOUS: TB, systemic fungi (Histoplasma capsulatum), Nocardia — macrophages wall off the organism → granuloma with fragmented cells and debris surrounded by lymphocytes and macrophages; cheeselike gross. FAT: enzymatic (acute pancreatitis — lipase → triglycerides → fatty acids + Ca2+ → saponification, chalky-white, dark blue on H&E) and nonenzymatic (traumatic, breast); outlines of dead fat cells without peripheral nuclei. FIBRINOID: vessels — immune (polyarteritis nodosa, type III immune complex deposition) and nonimmune (hypertensive emergency, preeclampsia — plasma protein/fibrin leakage); eosinophilic proteinaceous layer in the wall. GANGRENOUS: distal extremity and GI tract after chronic ischemia — DRY = ischemia = coagulative; WET = superinfection = liquefactive superimposed on coagulative. All of it loud: membrane damage, component leak, local inflammatory reaction (unlike apoptosis).",
  },
  mechanisms: [
    {
      id: "membrane-leak-inflammation",
      title: "The loud death: membrane damage, leak, degradation, and the inflammatory wake",
      context: "The definition line (book 205)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "An exogenous injury arrives and the cell cannot adapt or recover",
            sublabel: "Input — the irreversible end of the cell-injury timeline: the stress persists past membrane breakdown.",
            variant: "input",
          },
          {
            id: "membrane",
            label: "PLASMA MEMBRANE DAMAGE — the defining event",
            sublabel: "The boundary fails; this is the structural opposite of apoptosis, whose membrane stays intact until the macrophage arrives.",
            variant: "process",
          },
          {
            id: "leak",
            label: "INTRACELLULAR COMPONENTS LEAK OUT",
            sublabel: "Enzymes and contents escape into the interstitium — the troponin-leak logic of cell injury, now the general rule.",
            variant: "process",
          },
          {
            id: "degrade",
            label: "ENZYMATIC DEGRADATION + PROTEIN DENATURATION inside the dying cell",
            sublabel: "The cell's own (or neutrophils') enzymes digest it while its proteins denature — the two processes whose BALANCE sets the morphologic pattern (denaturation dominating = coagulative; digestion dominating = liquefactive).",
            variant: "process",
          },
          {
            id: "output",
            label: "LOCAL INFLAMMATORY REACTION (unlike apoptosis)",
            sublabel: "Output — the loud ending: neutrophils and macrophages answer the leak. Apoptosis never triggers this; necrosis always does — the single best discriminator between the two deaths.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "membrane", label: "injury persists" },
          { from: "membrane", to: "leak", label: "boundary fails" },
          { from: "leak", to: "degrade", label: "contents spill, enzymes work" },
          { from: "degrade", to: "output", label: "the wake is inflammatory" },
        ],
      },
    },
    {
      id: "tissue-router",
      title: "The tissue router: which organ and which insult produce which pattern",
      context: "The six-row table (book 205)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A necrosis-type question appears — a tissue, an insult, or a histology",
            sublabel: "Input — any vignette describing dead tissue; the answer is one of the six types.",
            variant: "input",
          },
          {
            id: "coag",
            label: "MOST TISSUES + ISCHEMIA → COAGULATIVE (the brain excepted)",
            sublabel: "Injury denatures the enzymes → proteolysis blocked → architecture preserved as outlines, nuclei gone, eosinophilia up. The MI, the renal infarct, the splenic infarct — every solid-organ infarct outside the CNS.",
            variant: "process",
          },
          {
            id: "liq",
            label: "BRAIN + INFARCT, or ANY ABSCESS → LIQUEFACTIVE",
            sublabel: "CNS infarcts liquefy (cystic spaces, cavitation — the healed stroke's cavity); bacterial abscesses are digested by neutrophil lysosomal enzymes into debris, then pus.",
            variant: "process",
          },
          {
            id: "gran",
            label: "TB, SYSTEMIC FUNGI, NOCARDIA → CASEOUS (the granuloma pattern)",
            sublabel: "Macrophages wall off the organism → granular debris; fragmented cells and debris surrounded by lymphocytes and macrophages (granuloma); cheeselike gross appearance.",
            variant: "process",
          },
          {
            id: "chem",
            label: "PANCREAS + LIPOCHEMISTRY → FAT; VESSEL WALL + IMMUNE/PLASMA PROTEINS → FIBRINOID",
            sublabel: "Fat: pancreatic lipase → triglycerides → fatty acids + Ca2+ → saponification (chalky-white gross, dark blue H&E); traumatic breast the nonenzymatic twin. Fibrinoid: type III immune complexes (polyarteritis nodosa) or plasma protein/fibrin leakage (hypertensive emergency, preeclampsia) smudging the vessel wall eosinophilic.",
            variant: "process",
          },
          {
            id: "output",
            label: "DISTAL EXTREMITY / GI + CHRONIC ISCHEMIA → GANGRENOUS, and the dry/wet fork decides the pattern",
            sublabel: "Output — dry gangrene stays ischemic (coagulative); wet gangrene adds superinfection (liquefactive superimposed on coagulative). The named pattern is the location's, not a seventh type.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "coag", label: "solid organ ischemia" },
          { from: "trigger", to: "liq", label: "brain or abscess" },
          { from: "trigger", to: "gran", label: "TB or fungi" },
          { from: "trigger", to: "chem", label: "pancreas or vessels" },
          { from: "coag", to: "output", label: "if extremity/GI + chronic" },
          { from: "liq", to: "output", label: "if superinfected" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "necrosis-type-map",
      title: "The necrosis type map — six patterns, one table, one router (an original KYP adaptation)",
      caption:
        "An original KYP adaptation of the source's six-row necrosis table (book 205 — TYPE/SEEN IN/DUE TO/HISTOLOGY), organized as the tissue router: the definition cascade (exogenous injury → plasma membrane damage → intracellular components leak → enzymatic degradation and protein denaturation → local inflammatory reaction, unlike apoptosis); the six type cards — COAGULATIVE (ischemia in most tissues except the brain; denatured enzymes block proteolysis; preserved outlines, nuclei gone, eosinophilia up), LIQUEFACTIVE (abscesses and CNS infarcts; neutrophil lysosomal digestion; early debris and macrophages, late cavitation), CASEOUS (TB, Histoplasma capsulatum, Nocardia; macrophages wall off the organism; the granuloma and the cheeselike gross), FAT (enzymatic pancreatitis with the lipase-triglycerides-fatty-acids-calcium saponification chain, chalky-white gross and dark-blue H&E; nonenzymatic traumatic breast), FIBRINOID (immune polyarteritis nodosa type III complexes and nonimmune hypertensive emergency/preeclampsia leakage; the eosinophilic proteinaceous wall), and GANGRENOUS (distal extremity and GI after chronic ischemia; dry = coagulative, wet = liquefactive superimposed); plus the photograph panel describing each of the six copyrighted A-F images in text (the M32 convention — never reproduced).",
      notice:
        "The source page is a table plus SIX COPYRIGHTED PHOTOGRAPHS (A-F: three H&E micrographs, two gross specimens, one clinical photograph — VLM census documented each, described in text in this note's tables) — the photographs are NEVER reproduced (the M32 vancomycin-photo convention); the table's text is carried verbatim. No margin mnemonics exist on the page (VLM census confirmed); nothing from the source's distinctive expression is carried.",
    },
    {
      kind: "table",
      title: "Book 205 — the six-row necrosis table (carried verbatim)",
      intro:
        "The page's entire content table, as printed — four columns, six rows, with the A-F photograph markers in the HISTOLOGY column.",
      columns: ["TYPE", "PRINTED CONTENT — verbatim (book 205): SEEN IN · DUE TO · HISTOLOGY"],
      rows: [
        ["Coagulative", "SEEN IN: Ischemia/infarcts in most tissues (except brain). DUE TO: Ischemia or infarction; injury denatures enzymes → proteolysis blocked. HISTOLOGY: Preserved cellular architecture (cell outlines seen), but nuclei disappear; ↑ cytoplasmic binding of eosin stain (→ ↑ eosinophilia; red/pink color). A"],
        ["Liquefactive", "SEEN IN: Bacterial abscesses, CNS infarcts. DUE TO: Neutrophils release lysosomal enzymes that digest the tissue. HISTOLOGY: Early: cellular debris and macrophages. Late: cystic spaces and cavitation (CNS). Neutrophils and cell debris seen with bacterial infection. B"],
        ["Caseous", "SEEN IN: TB, systemic fungi (eg, Histoplasma capsulatum), Nocardia. DUE TO: Macrophages wall off the infecting microorganism → granular debris. HISTOLOGY: Fragmented cells and debris surrounded by lymphocytes and macrophages (granuloma). Cheeselike gross appearance. C"],
        ["Fat", "SEEN IN: Enzymatic: acute pancreatitis (saponification of peripancreatic fat); Nonenzymatic: traumatic (eg, injury to breast tissue). DUE TO: Damaged pancreatic cells release lipase, which breaks down triglycerides; liberated fatty acids bind calcium → saponification (chalky-white appearance). HISTOLOGY: Outlines of dead fat cells without peripheral nuclei; saponification of fat (combined with Ca2+) appears dark blue on H&E stain. D"],
        ["Fibrinoid", "SEEN IN: Immune vascular reactions (eg, polyarteritis nodosa); Nonimmune vascular reactions (eg, hypertensive emergency, preeclampsia). DUE TO: Immune complex deposition (type III hypersensitivity reaction) and/or plasma protein (eg, fibrin) leakage from damaged vessel. HISTOLOGY: Vessel walls contain eosinophilic layer of proteinaceous material (arrow in E). E"],
        ["Gangrenous", "SEEN IN: Distal extremity and GI tract, after chronic ischemia. DUE TO: Dry: ischemia → Coagulative. Wet: superinfection → Liquefactive superimposed on coagulative. F"],
      ],
      caption:
        "The six dialects of the loud death: architecture preserved by denatured enzymes (coagulative), digested by neutrophils or liquefied in the brain (liquefactive), walled off into cheese by granulomas (caseous), saponified by pancreatic chemistry (fat), smudged into vessel walls by immune complexes or leaked plasma proteins (fibrinoid), and the extremity/GI location with its dry/wet fork (gangrenous).",
    },
    {
      kind: "table",
      title: "Book 205 — the six photographs, described in text (COPYRIGHTED — never reproduced)",
      intro:
        "The page prints six lettered photographs in a 2x3 grid at the bottom, matched to the HISTOLOGY column's A-F markers. Each is a copyrighted image; the VLM census documented what each shows, and the descriptions below are the note's visual record of them — the images themselves are never reproduced (the M32 convention).",
      columns: ["PHOTOGRAPH", "WHAT IT SHOWS (VLM census description — book 205)"],
      rows: [
        ["A — Coagulative (histology micrograph, H&E)", "Preserved cellular architecture with lost nuclei and eosinophilic cytoplasm — the ghost-outline appearance of an ischemic infarct in a solid organ."],
        ["B — Liquefactive (gross specimen, brain)", "A brain with a large cavity/cystic space — the healed infarct's cavitation, the CNS exception to coagulative necrosis."],
        ["C — Caseous (gross specimen)", "Tissue with a central, white, cheesy-looking area — the granuloma's necrotic center walled off from the surrounding tissue."],
        ["D — Fat (histology micrograph, H&E)", "Outlines of dead fat cells without peripheral nuclei, with the dark-blue/purple saponification — calcium-bound fatty acids in the peripancreatic (or breast) fat."],
        ["E — Fibrinoid (histology micrograph, H&E)", "A vessel wall with a thickened, smudgy, eosinophilic (pink) proteinaceous layer — the immune-complex or fibrin-leakage deposit of a necrotic vessel."],
        ["F — Gangrenous (clinical photograph)", "A hand with blackened, necrotic fingertips — the dry gangrene of chronic distal-extremity ischemia."],
      ],
      caption:
        "Six copyrighted images, six one-line descriptions — the descriptions carry the discriminators the exam tests (ghost outlines, the brain cavity, the cheese, the dark-blue calcium soaps, the smudged vessel wall, the blackened digits), so nothing is lost by not reproducing the photographs.",
    },
    {
      kind: "callout",
      variant: "exam",
      title: "The three routing rules this page teaches",
      body:
        "Rule 1 — THE BRAIN IS THE EXCEPTION: ischemic infarcts in MOST tissues are COAGULATIVE (denatured enzymes block proteolysis → outlines preserved, nuclei gone, eosinophilia up), but CNS infarcts LIQUEFY (early debris and macrophages, late cystic spaces and cavitation) — and bacterial abscesses anywhere are liquefactive too (neutrophil lysosomal enzymes digesting the tissue). Rule 2 — MATCH THE PATTERN TO THE PLAYER: neutrophils → liquefactive (abscess); macrophages walling off an organism → caseous (TB, Histoplasma capsulatum, Nocardia — the granuloma with cheeselike debris); pancreatic lipase → enzymatic fat necrosis (triglycerides → fatty acids + Ca2+ → saponification: chalky-white gross, dark blue on H&E), with traumatic breast its nonenzymatic twin; immune complexes (type III, polyarteritis nodosa) or plasma protein leakage (hypertensive emergency, preeclampsia) → fibrinoid (the eosinophilic proteinaceous vessel wall). Rule 3 — GANGRENOUS IS A LOCATION WITH A FORK: distal extremity and GI tract after chronic ischemia — DRY stays ischemic and remains coagulative; WET adds superinfection and becomes liquefactive SUPERIMPOSED on coagulative. And every one of them is the LOUD death: plasma membrane damage, intracellular leak, local inflammatory reaction — unlike apoptosis.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 62-year-old man with an acute coronary occlusion has an infarcted region of myocardium; days later the tissue shows preserved cellular outlines with lost nuclei and increased eosinophilia.",
        discriminator: "Coagulative necrosis — ischemia in most tissues (except brain) with denatured enzymes blocking proteolysis",
        concept: "The solid-organ infarct pattern",
        answer:
          "Coagulative necrosis: ischemia or infarction denatures the enzymes → proteolysis blocked → preserved cellular architecture (cell outlines seen), but nuclei disappear, with ↑ cytoplasmic binding of eosin stain (red/pink). The MI, the renal infarct, and the splenic infarct all share the pattern; only the brain liquefies.",
      },
      {
        stem: "A 71-year-old woman with atrial fibrillation has a stroke; months later, imaging shows a cystic cavity in the territory of the occluded vessel.",
        discriminator: "CNS infarcts liquefy — cystic spaces and cavitation",
        concept: "The brain exception",
        answer:
          "Liquefactive necrosis: CNS infarcts are the standing exception to coagulative necrosis — early cellular debris and macrophages, late cystic spaces and cavitation. The healed cavity on imaging is the infarct's final form; the same liquefactive pattern appears in bacterial abscesses elsewhere (neutrophils releasing lysosomal enzymes that digest the tissue).",
      },
      {
        stem: "A 45-year-old man with acute pancreatitis has chalky-white deposits in the peripancreatic fat at surgery; the specimen's H&E shows fat-cell outlines without peripheral nuclei and dark-blue material.",
        discriminator: "Enzymatic fat necrosis — lipase, saponification with Ca2+, dark blue on H&E",
        concept: "The pancreatic chemistry pattern",
        answer:
          "Fat necrosis (enzymatic): damaged pancreatic cells release lipase, which breaks down triglycerides; the liberated fatty acids bind calcium → saponification — chalky-white gross appearance, and on H&E the saponified fat (combined with Ca2+) appears dark blue, with outlines of dead fat cells without peripheral nuclei. The nonenzymatic twin is traumatic fat necrosis (eg, injury to breast tissue) — same morphology, no lipase.",
      },
    ],
    traps: [
      {
        a: "Coagulative necrosis",
        b: "Liquefactive necrosis",
        whyConfused: "Both follow ischemic and both can be called 'infarcts'",
        keyDifference: "Coagulative = most tissues (except brain): enzymes denatured → proteolysis blocked → outlines preserved, nuclei gone, eosinophilia up; liquefactive = CNS infarcts and bacterial abscesses: neutrophil lysosomal enzymes digest the tissue → debris, then cystic spaces and cavitation",
        clue: "Brain or abscess in the stem → liquefactive; solid-organ ischemia elsewhere → coagulative",
      },
      {
        a: "Caseous necrosis",
        b: "Coagulative necrosis",
        whyConfused: "Both can leave architecture-level debris in dead tissue",
        keyDifference: "Caseous = TB, systemic fungi (Histoplasma capsulatum), Nocardia: macrophages wall off the organism → granular debris surrounded by lymphocytes and macrophages (granuloma), cheeselike gross; coagulative = ischemia with preserved outlines and no granuloma",
        clue: "Granuloma, cheese, or a walled-off organism → caseous; bland ischemia with ghost outlines → coagulative",
      },
      {
        a: "Fibrinoid necrosis — immune",
        b: "Fibrinoid necrosis — nonimmune",
        whyConfused: "Same vessel-wall histology (eosinophilic proteinaceous layer) from two worlds",
        keyDifference: "Immune = immune complex deposition, a type III hypersensitivity reaction (polyarteritis nodosa); nonimmune = plasma protein (eg, fibrin) leakage from a damaged vessel (hypertensive emergency, preeclampsia)",
        clue: "PAN or type III in the stem → immune; malignant hypertension or preeclampsia → nonimmune — the vessel looks identical either way",
      },
    ],
    pivots: [
      {
        lookAlike: "Dry vs wet gangrene — the same blackened extremity, two mechanisms",
        differentiator: "Dry = ischemia alone → coagulative necrosis (mummified, no pus); wet = superinfection added → liquefactive necrosis superimposed on coagulative (moist, foul, purulent)",
        correctPath: "Both start as distal extremity or GI tract after chronic ischemia; the fork is the bacteria — superinfection converts dry to wet by adding neutrophil digestion on top of the coagulative base",
      },
      {
        lookAlike: "The two fat necroses — enzymatic vs traumatic",
        differentiator: "Enzymatic = acute pancreatitis (lipase from damaged pancreatic cells breaks triglycerides; fatty acids + Ca2+ → saponification, chalky-white, dark blue on H&E); nonenzymatic = trauma (eg, breast tissue) with the same fat-cell outlines but no lipase chemistry",
        correctPath: "Pancreatitis or lipase in the stem → enzymatic; trauma to breast or fat without pancreatic disease → nonenzymatic — the histology overlaps, the mechanism names the form",
      },
    ],
    miniCase: {
      vignette:
        "A 53-year-old man with a 15-year history of alcohol use disorder presents with 24 hours of severe epigastric pain radiating to the back, vomiting, and distention; lipase is 3 times the upper limit of normal, and CT shows an edematous pancreas with stranding. At laparotomy 5 days later for worsening clinical status, the peripancreatic fat is studded with chalky-white, hard deposits. Biopsy of the fat shows outlines of dead adipocytes without peripheral nuclei and deposits of dark-blue material on H&E staining; no granulomas are present, and vessels are unremarkable.",
      question: "Name the necrosis pattern, state the chemistry that produced the chalky-white and dark-blue findings, and identify the source of the enzyme.",
      options: [
        {
          label: "Fat necrosis, enzymatic — lipase from damaged pancreatic cells hydrolyzes triglycerides; liberated fatty acids bind Ca2+ → saponification (chalky-white gross, dark blue on H&E)",
          text: "The pancreas digests its own surrounding fat and the calcium turns it to soap.",
          correct: true,
          why: "Correct on all three layers. The pattern is FAT NECROSIS, the enzymatic (pancreatic) form, listed for acute pancreatitis (saponification of peripancreatic fat). The chemistry: damaged pancreatic cells release LIPASE, which breaks down triglycerides; the liberated fatty acids bind CALCIUM → saponification — the chalky-white appearance seen grossly at surgery, and on H&E the saponified fat (combined with Ca2+) appears DARK BLUE, with outlines of dead fat cells without peripheral nuclei. The enzyme source is the damaged pancreas itself, which is why the process is peripancreatic. The unremarkable vessels exclude fibrinoid, and the absent granuloma excludes caseous.",
        },
        {
          label: "Coagulative necrosis — denatured enzymes preserve the fat-cell outlines",
          text: "The ischemic fat keeps its architecture, which is why the adipocyte outlines remain.",
          why: "Wrong pattern for this chemistry: coagulative necrosis follows ischemia in most tissues and preserves GENERAL architecture with lost nuclei, but it does not produce chalky-white calcium deposits or dark-blue H&E material — those are the saponification signature of fat necrosis, and the stem's lipase elevation points at the pancreas, not at ischemia.",
        },
        {
          label: "Caseous necrosis — macrophages wall off the damage into cheeselike granular debris",
          text: "The white deposits are the cheeselike center of a granulomatous reaction.",
          why: "Wrong player: caseous necrosis is the TB/systemic-fungi/Nocardia pattern — macrophages walling off an infecting microorganism, with fragmented cells and debris surrounded by lymphocytes and macrophages (granuloma). The stem explicitly notes NO granulomas, and the chalky-white here is calcium soap, not cheese-like granular debris.",
        },
        {
          label: "Fibrinoid necrosis — plasma protein leakage smudging the vessel walls eosinophilic",
          text: "The damaged vessels leaked fibrin into the fat, producing the deposits.",
          why: "Wrong target tissue: fibrinoid necrosis hits VESSEL WALLS (the eosinophilic proteinaceous layer of polyarteritis nodosa or hypertensive emergency/preeclampsia), not adipocytes — and the stem reports the vessels unremarkable. The dark-blue calcium staining of saponified fat has no counterpart in fibrinoid's pink wall smudging.",
        },
        {
          label: "Nonenzymatic (traumatic) fat necrosis — the same saponification from local injury",
          text: "Fat is fragile; the surgical manipulation itself saponified it.",
          why: "Right tissue, wrong mechanism and timing: traumatic fat necrosis (eg, injury to breast tissue) shows the same fat-cell outlines without peripheral nuclei, but there is no lipase chemistry — the chalky-white saponification with dark-blue H&E staining is the ENZYMATIC pancreatitis signature, and this stem's lipase of 3x ULN and peripancreatic distribution name the pancreatic source. The laparotomy happened after the deposits formed, not before.",
        },
      ],
      reasoning:
        "The stem assembles the enzymatic fat-necrosis triad in order: the pancreatitis context (epigastric pain radiating to the back, lipase 3x ULN, the edematous pancreas on CT), the gross finding (chalky-white, hard deposits in the PERIPANCREATIC fat — the distribution names the enzyme's origin), and the histology (outlines of dead fat cells without peripheral nuclei; dark-blue material on H&E — the calcium-bound saponification). The printed chain: damaged pancreatic cells release lipase → triglycerides broken down → liberated fatty acids bind calcium → saponification (chalky-white appearance), with the saponified fat combined with Ca2+ appearing dark blue on H&E. The distractors each borrow one visual or word: coagulative's 'preserved outlines' (but no calcium soap and no ischemic context), caseous's white cheeselike gross (but no granuloma and no organism), fibrinoid's vessel story (but the vessels are unremarkable), and the traumatic form of fat necrosis itself (same tissue, but no lipase and no pancreas). The discrimination within fat necrosis — enzymatic vs nonenzymatic — is the page's own SEEN IN pair, and the lipase chemistry decides it.",
    },
  },
  mnemonics: [
    {
      code: "DENATURED ENZYMES PRESERVE THE OUTLINE",
      meaning: "The coagulative paradox: ischemia denatures the degradative enzymes → proteolysis is BLOCKED → the dead cell keeps its outlines (nuclei gone, eosinophilia up) — the ghost architecture of every solid-organ infarct outside the brain.",
      memorizes: "Why coagulative necrosis preserves structure",
      whenToUse: "Any coagulative mechanism or 'why are outlines preserved?' question",
      clinical: "The MI's wavy, ghostlike myocytes with lost nuclei — dead but still shaped, because the demolition crew was denatured too.",
    },
    {
      code: "BRAIN LIQUEFIES, EVERYTHING ELSE COAGULATES",
      meaning: "The tissue router's standing exception: ischemic infarcts in most tissues are coagulative, but CNS infarcts liquefy (early debris and macrophages, late cystic spaces and cavitation) — and bacterial abscesses anywhere liquefy too (neutrophil lysosomal enzymes).",
      memorizes: "The brain exception and the abscess rule",
      whenToUse: "Any infarct-location or abscess question",
      clinical: "The healed stroke's cystic cavity on imaging; the abscess's pus — two liquefactive roads, one tissue exception and one neutrophil digestion.",
    },
    {
      code: "CHEESE, WALLED OFF",
      meaning: "Caseous necrosis in two words: macrophages WALL OFF the infecting organism (TB, Histoplasma capsulatum, Nocardia) and the debris turns CHEESELIKE — fragmented cells and debris surrounded by lymphocytes and macrophages, the granuloma.",
      memorizes: "The caseous player list and the granuloma morphology",
      whenToUse: "Any TB, systemic-fungus, Nocardia, or granuloma-necrosis question",
      clinical: "The granuloma's necrotic center — the gross appearance gave the pattern its name.",
    },
    {
      code: "LIPASE PLUS CALCIUM EQUALS CHALK",
      meaning: "Enzymatic fat necrosis's chemistry: pancreatic lipase breaks down triglycerides → liberated fatty acids bind Ca2+ → saponification — chalky-white on the surgeon's eye, dark blue on H&E, in fat-cell outlines without peripheral nuclei.",
      memorizes: "The fat-necrosis saponification chain",
      whenToUse: "Any pancreatitis, peripancreatic fat, or dark-blue-calcium question",
      clinical: "Acute pancreatitis's peripancreatic chalk; the hypocalcemia that follows severe attacks is the same chemistry stealing serum calcium.",
    },
  ],
  rapidReview: {
    s30: [
      "Necrosis definition: exogenous injury → plasma membrane damage → intracellular components leak → enzymatic degradation and protein denaturation → local inflammatory reaction (unlike apoptosis)",
      "Coagulative: ischemia/infarcts in most tissues (except brain); injury denatures enzymes → proteolysis blocked; preserved cellular architecture (cell outlines seen), nuclei disappear, ↑ cytoplasmic eosin binding (red/pink)",
      "Liquefactive: bacterial abscesses, CNS infarcts; neutrophils release lysosomal enzymes that digest the tissue; early — cellular debris and macrophages; late — cystic spaces and cavitation (CNS); neutrophils and cell debris with bacterial infection",
      "Caseous: TB, systemic fungi (Histoplasma capsulatum), Nocardia; macrophages wall off the microorganism → granular debris; fragmented cells and debris surrounded by lymphocytes and macrophages (granuloma); cheeselike gross",
      "Fat (enzymatic pancreatitis / nonenzymatic traumatic breast): lipase → triglycerides → fatty acids bind calcium → saponification (chalky-white); fat-cell outlines without peripheral nuclei; dark blue on H&E; Fibrinoid (immune polyarteritis nodosa type III / nonimmune hypertensive emergency, preeclampsia): immune complex deposition and/or plasma protein leakage; eosinophilic proteinaceous layer in vessel walls; Gangrenous (distal extremity, GI tract, chronic ischemia): dry = coagulative, wet = liquefactive superimposed on coagulative",
    ],
    m3: [
      "The router: solid-organ ischemia → coagulative; brain or abscess → liquefactive; TB/fungi/Nocardia → caseous; pancreas or traumatized fat → fat; vessel walls (type III or leakage) → fibrinoid; extremity/GI chronic ischemia → gangrenous",
      "The coagulative paradox: denatured enzymes block proteolysis → outlines preserved, nuclei gone, eosinophilia up",
      "The two forks: gangrenous dry (coagulative) vs wet (liquefactive on coagulative); fat enzymatic (lipase saponification) vs nonenzymatic (traumatic breast)",
      "The loud-death rule: membrane damage + leak + local inflammation — necrosis always inflames, apoptosis never does",
    ],
    m10: [
      "Census: p227 (book 205) carries SIX cmyk JPEG rasters (~287x226 at 150 dpi) lettered A-F in a 2x3 grid at the page bottom — three H&E micrographs (A coagulative, D fat, E fibrinoid), two gross specimens (B brain liquefactive, C caseous), one clinical photograph (F gangrenous digits); ALL COPYRIGHTED, described-in-text only, never reproduced (the M32 convention)",
      "The A-F markers print in the HISTOLOGY column at the end of each row (raw 36, 48, 64, 85, 106) and again as a letter row after the indd footer (raw 124-134)",
      "The table's SEEN IN and DUE TO columns interleave in the text layer (eg, the fat row's enzymatic/nonenzymatic seen-in pair prints before its due-to text, raw 66-80 — the M38 interleaving pattern); reading order documented in the manifest",
      "No margin notes or mnemonics on the page (VLM census confirmed)",
      "The page has no drawn figure — the TABLE is the content, and the six photographs are its visual layer; the registry visual is a KYP adaptation of the table's structure (not a redraw of any source figure)",
    ],
  },
  recall: [
    {
      q: "Carry the necrosis definition line verbatim.",
      a: "Exogenous injury → plasma membrane damage → intracellular components leak → cell undergoes enzymatic degradation and protein denaturation → local inflammatory reaction (unlike apoptosis).",
    },
    {
      q: "Carry the full six-row table verbatim — each type's SEEN IN, DUE TO, and HISTOLOGY.",
      a: "COAGULATIVE — Ischemia/infarcts in most tissues (except brain); ischemia or infarction; injury denatures enzymes → proteolysis blocked; preserved cellular architecture (cell outlines seen), but nuclei disappear; ↑ cytoplasmic binding of eosin stain (→ ↑ eosinophilia; red/pink color). LIQUEFACTIVE — Bacterial abscesses, CNS infarcts; neutrophils release lysosomal enzymes that digest the tissue; early: cellular debris and macrophages; late: cystic spaces and cavitation (CNS); neutrophils and cell debris seen with bacterial infection. CASEOUS — TB, systemic fungi (eg, Histoplasma capsulatum), Nocardia; macrophages wall off the infecting microorganism → granular debris; fragmented cells and debris surrounded by lymphocytes and macrophages (granuloma); cheeselike gross appearance. FAT — Enzymatic: acute pancreatitis (saponification of peripancreatic fat); Nonenzymatic: traumatic (eg, injury to breast tissue); damaged pancreatic cells release lipase, which breaks down triglycerides; liberated fatty acids bind calcium → saponification (chalky-white appearance); outlines of dead fat cells without peripheral nuclei; saponification of fat (combined with Ca2+) appears dark blue on H&E stain. FIBRINOID — Immune vascular reactions (eg, polyarteritis nodosa); Nonimmune vascular reactions (eg, hypertensive emergency, preeclampsia); immune complex deposition (type III hypersensitivity reaction) and/or plasma protein (eg, fibrin) leakage from damaged vessel; vessel walls contain eosinophilic layer of proteinaceous material. GANGRENOUS — Distal extremity and GI tract, after chronic ischemia; Dry: ischemia → Coagulative. Wet: superinfection → Liquefactive superimposed on coagulative.",
    },
    {
      q: "Why does coagulative necrosis preserve cellular architecture, and why is the brain different?",
      a: "In coagulative necrosis the ischemic injury DENATURES the degradative enzymes — proteolysis is blocked — so the dead cell keeps its outlines (nuclei disappear; eosin binding rises, giving the red/pink color). The brain is the exception: CNS infarcts undergo LIQUEFACTIVE necrosis instead, with early cellular debris and macrophages and late cystic spaces and cavitation — the healed infarct becomes a cavity.",
    },
    {
      q: "State the fat-necrosis chemistry and its two clinical forms.",
      a: "CHEMISTRY: damaged pancreatic cells release lipase → breaks down triglycerides → liberated fatty acids bind calcium → saponification — chalky-white appearance grossly, and on H&E the saponified fat (combined with Ca2+) appears dark blue, with outlines of dead fat cells without peripheral nuclei. FORMS: enzymatic — acute pancreatitis (saponification of peripancreatic fat); nonenzymatic — traumatic (eg, injury to breast tissue), same morphology without the lipase chemistry.",
    },
    {
      q: "Walk the gangrenous fork and the fibrinoid pair.",
      a: "GANGRENOUS — distal extremity and GI tract after chronic ischemia: DRY = ischemia → coagulative necrosis; WET = superinfection → liquefactive necrosis superimposed on coagulative. FIBRINOID — vessel-wall necrosis with an eosinophilic layer of proteinaceous material, from two worlds: IMMUNE (eg, polyarteritis nodosa — immune complex deposition, a type III hypersensitivity reaction) and NONIMMUNE (eg, hypertensive emergency, preeclampsia — plasma protein [eg, fibrin] leakage from the damaged vessel).",
    },
  ],
  related: [
    {
      title: "Cell Injury: Reversible, Irreversible & Ferroptosis",
      topicId: "cell-injury-mechanisms",
      note: "This page is the terminal box of that timeline: plasma membrane breakdown → the enzyme leak and Ca2+ influx → the degradation and denaturation this table grades into six patterns — necrosis is the loud death the quiet timeline ends in.",
    },
    {
      title: "Apoptosis: Intrinsic, Extrinsic & Misfolded Proteins",
      topicId: "apoptosis-pathways",
      note: "The page's own contrast, stated in its definition line: apoptosis keeps its membrane, spills nothing, and never inflames; necrosis leaks, denatures, and always raises a local inflammatory reaction — the loud/quiet pair every exam discriminates.",
    },
    {
      title: "Mycobacteria",
      topicId: "mycobacteria",
      note: "TB is caseous necrosis's archetype — the macrophage-organized granuloma walling off the organism with its cheeselike center; the microbiology chapter supplies the organism, this table supplies the morphology it produces.",
    },
    {
      title: "Hypersensitivity Types",
      topicId: "hypersensitivity-types",
      note: "Fibrinoid necrosis's immune form IS type III hypersensitivity in a vessel wall — immune complex deposition, polyarteritis nodosa as the named example; the immunology chapter's mechanism, this table's histology.",
    },
  ],
  crossLinks: [
    {
      subject: "Immunology (type III hypersensitivity)",
      connection:
        "Fibrinoid necrosis's immune lane is circulating immune complexes depositing in vessel walls — polyarteritis nodosa's damaged arteries are the type III reaction drawn in tissue, eosinophilic and proteinaceous.",
    },
    {
      subject: "Cardiology (the myocardial infarct)",
      connection:
        "The MI is coagulative necrosis's clinical flagship: coronary occlusion → ischemic myocytes with denatured enzymes → ghost outlines with lost nuclei and rising eosinophilia — the pattern under every troponin-positive infarct.",
    },
    {
      subject: "Gastroenterology (acute pancreatitis)",
      connection:
        "Enzymatic fat necrosis is pancreatitis's signature complication: lipase escaping the damaged gland saponifies the peripancreatic fat — and the same calcium binding explains the hypocalcemia of severe attacks.",
    },
    {
      subject: "Infectious disease (abscess and granuloma)",
      connection:
        "Two necrosis patterns belong to infection: the neutrophil-digested abscess (liquefactive) and the macrophage-walled granuloma (caseous, for TB and the systemic fungi) — the immune response's shape determines the necrosis's shape.",
    },
  ],
};
