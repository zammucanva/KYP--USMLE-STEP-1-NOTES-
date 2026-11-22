import type { KypUsMLENote } from "../types";

// Pathology — CELLULAR INJURY banner (P-batch 1, the first Pathology
// topic). Source: pdf 224 / book 202 (Cellular adaptations — the six
// definition blocks and the adaptation-progression figure). Census:
// pdfimages reports ~98 small monochrome rasters (50-90 px at 308 ppi)
// — the cell-cluster illustrations embedded in the flowchart figure,
// one per node (VLM census, render p-224.png: Normal = a uniform row
// of columnar cells; Hyperplasia = many small uniform cells;
// Hypertrophy = fewer larger cells; Atrophy = shrunken flattened
// cells; Metaplasia = cells of a changed shape; Dysplasia = irregular
// disorganized cells with prominent nuclei; Neoplasia = a disordered
// crowded mass with high N:C ratios) — line art/schematic, NO
// photographs anywhere on the page, NO margin mnemonics (VLM
// confirmed; the margins are blank). The figure topology is
// VLM-verified: NORMAL CELLS at center; green arrows up to
// HYPERPLASIA / HYPERTROPHY / ATROPHY labeled "Change in cell size
// and/or number"; green arrows down to DYSPLASIA ("Change in cell
// structure"), METAPLASIA ("Change in cell type"), and NEOPLASIA
// ("Change in cell type and structure"); a red arrow ATROPHY ->
// terminal labeled "Inability to adapt"; a red arrow NORMAL ->
// terminal labeled "Severe stress or injury"; the terminal box reads
// "Irreversible injury -> necrosis or apoptosis"; a red arrow
// DYSPLASIA -> NEOPLASIA labeled "If chronic irritant persists"; the
// legend prints Green = Reversible, Red = Irreversible. Text quirks
// documented: the banner prints the double heading "PATHOLOGY—CeLLULAR
// INjURY" twice (raw 7 and 9); the small-cap stYLeOf typography is
// the source's own.

export const cellularAdaptations: KypUsMLENote = {
  id: "cellular-adaptations",
  title: "Cellular Adaptations: Hypertrophy Through Dysplasia",
  subtitle:
    "The six adaptations on two axes, and the two exits to irreversible injury (book 202). THE INTRO RULE — adaptations are reversible changes that can be physiologic (uterine enlargement during pregnancy) or pathologic (myocardial hypertrophy 2° to systemic hypertension), and if the stress is excessive or persistent they progress to cell injury (significant LV hypertrophy → myocardial injury → HF). HYPERTROPHY — ↑ structural proteins and organelles → ↑ in size of cells (cardiac hypertrophy). HYPERPLASIA — controlled proliferation of stem cells and differentiated cells → ↑ in number of cells (benign prostatic hyperplasia); excessive stimulation → pathologic hyperplasia (endometrial hyperplasia), which may progress to dysplasia and cancer. ATROPHY — ↓ in tissue mass due to ↓ in size (↑ cytoskeleton degradation via the ubiquitin-proteasome pathway and autophagy; ↓ protein synthesis) and/or ↓ in number of cells (apoptosis); causes: disuse, denervation, loss of blood supply, loss of hormonal stimulation, poor nutrition. METAPLASIA — reprogramming of stem cells replacing one cell type by another that can adapt to a new stressor (esophageal acid exposure → Barrett esophagus; airway tobacco smoke → stratified squamous). DYSPLASIA — disordered, precancerous epithelial growth, NOT a true adaptive response; pleomorphism, loss of tissue orientation, ↑ nuclear:cytoplasmic ratio, clumped chromatin; mild/moderate may regress, severe often becomes irreversible and progresses to carcinoma in situ. THE FIGURE — the progression map with its two exits: 'Inability to adapt' (from the adapted state) and 'Severe stress or injury' (direct from normal) both ending in irreversible injury → necrosis or apoptosis.",
  subject: "Pathology",
  system: "Section II · High-Yield General Principles — Pathology: Cellular Injury",
  pilotCategory:
    "The adaptation axis map — the size/number axis (hyperplasia, hypertrophy, atrophy) against the type/structure axis (metaplasia, dysplasia, neoplasia), with the reversible/irreversible color rule and the two exits to irreversible injury — plus atrophy's degradation-mechanism pair (ubiquitin-proteasome pathway + autophagy + ↓ protein synthesis) and the metaplasia direction pair (acid → columnar, smoke → squamous).",
  difficulty: 2,
  readTime: 9,
  sourceRef:
    "First Aid 2026, Part 1 pp. 202–202 (Cellular adaptations — the intro, Hypertrophy, Hyperplasia, Atrophy, Metaplasia, and Dysplasia blocks; the adaptation-progression figure with its arrow labels and reversible/irreversible legend)",
  tags: [
    "cellular adaptations",
    "hypertrophy",
    "hyperplasia",
    "atrophy",
    "metaplasia",
    "dysplasia",
    "neoplasia",
    "carcinoma in situ",
    "reversible injury",
    "irreversible injury",
    "necrosis",
    "apoptosis",
    "ubiquitin-proteasome pathway",
    "autophagy",
    "protein synthesis",
    "stem cells",
    "Barrett esophagus",
    "esophageal adenocarcinoma",
    "benign prostatic hyperplasia",
    "endometrial hyperplasia",
    "cardiac hypertrophy",
    "left ventricular hypertrophy",
    "systemic hypertension",
    "uterine enlargement",
    "pregnancy",
    "tobacco smoke",
    "pseudostratified ciliated columnar epithelium",
    "stratified squamous epithelium",
    "pleomorphism",
    "nuclear:cytoplasmic ratio",
    "clumped chromatin",
    "myositis ossificans",
    "disuse atrophy",
    "denervation",
    "loss of hormonal stimulation",
    "poor nutrition",
  ],
  core: {
    what: "THE INTRO RULE: cellular adaptations are reversible changes that can be physiologic (eg, uterine enlargement during pregnancy) or pathologic (eg, myocardial hypertrophy 2° to systemic hypertension) — and if the stress is excessive or persistent, adaptations progress to cell injury (eg, significant LV hypertrophy → myocardial injury → HF). THE SIX. HYPERTROPHY: ↑ structural proteins and organelles → ↑ in size of cells; example: cardiac hypertrophy. HYPERPLASIA: controlled proliferation of stem cells and differentiated cells → ↑ in number of cells (eg, benign prostatic hyperplasia); excessive stimulation → pathologic hyperplasia (eg, endometrial hyperplasia), which may progress to dysplasia and cancer. ATROPHY: ↓ in tissue mass due to ↓ in size (↑ cytoskeleton degradation via the ubiquitin-proteasome pathway and autophagy [programmed digestion of damaged/misfolded intracellular proteins]; ↓ protein synthesis) and/or number of cells (apoptosis); causes include disuse, denervation, loss of blood supply, loss of hormonal stimulation, poor nutrition. METAPLASIA: reprogramming of stem cells → replacement of one cell type by another that can adapt to a new stressor — esophageal exposure to gastric acid: nonkeratinized stratified squamous → intestinal-type columnar epithelium (acid resistance), called Barrett esophagus; the opposite upon airway exposure to tobacco smoke: pseudostratified ciliated columnar → stratified squamous epithelium (protection); may progress to dysplasia → malignant transformation with persistent insult (eg, Barrett esophagus → esophageal adenocarcinoma); metaplasia of connective tissue also occurs (eg, myositis ossificans, the formation of bone within muscle after trauma). DYSPLASIA: disordered, precancerous epithelial cell growth — not considered a true adaptive response; characterized by loss of uniformity of cell size and shape (pleomorphism), loss of tissue orientation, nuclear changes (eg, ↑ nuclear:cytoplasmic ratio and clumped chromatin); mild and moderate dysplasias (ie, do not involve the entire thickness of epithelium) may regress with alleviation of the inciting cause; severe dysplasia often becomes irreversible and progresses to carcinoma in situ; usually preceded by persistent metaplasia or pathologic hyperplasia. THE FIGURE (redrawn as this note's registry visual): normal cells at center; the reversible branch up (hyperplasia, hypertrophy, atrophy — change in cell size and/or number); the branch down (dysplasia — change in cell structure; metaplasia — change in cell type; neoplasia — change in cell type and structure); two exits to the terminal box 'Irreversible injury → necrosis or apoptosis' (inability to adapt from the adapted states; severe stress or injury direct from normal); the dysplasia → neoplasia arrow 'If chronic irritant persists'; the legend green = Reversible, red = Irreversible.",
    why: "This page is the grammar of every pathology question that follows: before any tissue dies it tries to renegotiate its workload, and the renegotiation has exactly two axes — how big and how many (hypertrophy, hyperplasia, atrophy), or what type and how orderly (metaplasia, dysplasia, and the neoplasia the map ends at). The figure makes the stakes visual with one color rule: green arrows are reversible (the adaptation can undo itself when the stressor leaves), red arrows are irreversible (once crossed, the cell cannot come back — necrosis or apoptosis). The two red exits teach the timing lesson exam writers love: a cell can reach the terminal box slowly, by exhausting its adaptive capacity ('inability to adapt' — the LV that hypertrophied for years until it decompensated into injury and HF), or instantly, by a severe stress that overwhelms before any adaptation can even start ('severe stress or injury' — the MI that kills myocytes outright). Atrophy is the page's mechanism gem: shrinking is ACTIVE demolition — the ubiquitin-proteasome pathway chewing the cytoskeleton and autophagy digesting damaged proteins — not passive wasting, a distinction that also previews the degradation machinery the biochemistry chapter teaches. And the metaplasia pair runs in opposite directions on purpose: acid drives the esophagus toward mucus-secreting columnar (Barrett — resistance at the price of adenocarcinoma risk), while smoke drives the airway toward tough stratified squamous (protection at the price of losing mucociliary clearance) — the same tool, two stressors, two organs, and both roads continue to dysplasia if the irritant persists. Dysplasia then breaks the pattern of the other five: it is NOT an adaptation at all but a precancerous disorder of the existing epithelium, and its severity line (mild/moderate may regress vs severe becomes irreversible and progresses to carcinoma in situ) is the clinical fork every surveillance biopsy is read against.",
    keyIdea:
      "Read every adaptation question on TWO AXES. SIZE/NUMBER AXIS (reversible): hypertrophy = ↑ size (↑ structural proteins and organelles; cardiac hypertrophy); hyperplasia = ↑ number (controlled proliferation of stem cells and differentiated cells; BPH; excessive stimulation → pathologic hyperplasia [endometrial] → dysplasia and cancer); atrophy = ↓ size and/or number (ubiquitin-proteasome pathway + autophagy + ↓ protein synthesis; apoptosis; causes — disuse, denervation, loss of blood supply, loss of hormonal stimulation, poor nutrition). TYPE/STRUCTURE AXIS: metaplasia = one mature cell type replaced by another (stem-cell reprogramming; acid → Barrett columnar; smoke → squamous; connective tissue too — myositis ossificans); dysplasia = disordered precancerous growth, NOT a true adaptation (pleomorphism, loss of orientation, ↑ N:C ratio, clumped chromatin; mild/moderate may regress; severe → carcinoma in situ; preceded by persistent metaplasia or pathologic hyperplasia); neoplasia = the irreversible end. THE TWO EXITS: 'inability to adapt' (adaptation exhausted → injury) and 'severe stress or injury' (overwhelmed outright) — both → irreversible injury → necrosis or apoptosis. The color rule: green reversible, red irreversible; 'if chronic irritant persists' is the dysplasia → neoplasia bridge.",
  },
  mechanisms: [
    {
      id: "adaptation-axis-map",
      title: "The two-axis map: size/number adaptations vs type/structure adaptations, and where each lives in the figure",
      context: "The six definition blocks and the adaptation-progression figure (book 202)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "An adaptation question appears — name the process, its axis, or its example",
            sublabel: "Input — any stressed tissue vignette: pressure overload, hormone excess, disuse, acid reflux, tobacco smoke.",
            variant: "input",
          },
          {
            id: "axis1",
            label: "THE SIZE/NUMBER AXIS (green, reversible) — hypertrophy, hyperplasia, atrophy",
            sublabel: "The figure's top row, reached by 'Change in cell size and/or number': hypertrophy ↑ size (↑ structural proteins and organelles; cardiac hypertrophy); hyperplasia ↑ number (controlled proliferation of stem cells and differentiated cells; BPH; excessive stimulation → pathologic hyperplasia [endometrial] → dysplasia and cancer); atrophy ↓ size and/or number (ubiquitin-proteasome pathway + autophagy; ↓ protein synthesis; apoptosis; causes — disuse, denervation, loss of blood supply, loss of hormonal stimulation, poor nutrition).",
            variant: "process",
          },
          {
            id: "axis2",
            label: "THE TYPE/STRUCTURE AXIS — metaplasia (green), dysplasia (green-then-red), neoplasia (red)",
            sublabel: "The figure's bottom row: metaplasia by 'Change in cell type' (stem-cell reprogramming; Barrett columnar for acid resistance; airway squamous for protection; myositis ossificans in connective tissue); dysplasia by 'Change in cell structure' (pleomorphism, loss of orientation, ↑ N:C ratio, clumped chromatin — NOT a true adaptive response); neoplasia by 'Change in cell type and structure' — the irreversible end of the map.",
            variant: "process",
          },
          {
            id: "physpath",
            label: "THE PHYSIOLOGIC vs PATHOLOGIC FORK — the intro rule",
            sublabel: "Adaptations can be physiologic (uterine enlargement during pregnancy) or pathologic (myocardial hypertrophy 2° to systemic hypertension); if stress is excessive or persistent, adaptations progress to cell injury (significant LV hypertrophy → myocardial injury → HF).",
            variant: "process",
          },
          {
            id: "output",
            label: "Name the axis, the process, and the example",
            sublabel: "Output — the exam answer is always one of: the axis label, the process name, or the classic example (cardiac hypertrophy, BPH, endometrial hyperplasia, Barrett, airway squamous, myositis ossificans).",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "axis1", label: "size or number changed" },
          { from: "trigger", to: "axis2", label: "type or order changed" },
          { from: "axis1", to: "physpath", label: "physiologic vs pathologic" },
          { from: "axis2", to: "physpath", label: "benign vs precancerous" },
          { from: "physpath", to: "output", label: "name process + example" },
        ],
      },
    },
    {
      id: "reversibility-exit-map",
      title: "The reversibility map: the color rule, the two exits to death, and the dysplasia severity fork",
      context: "The figure's arrows and legend, and the dysplasia block (book 202)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A prognosis or progression question appears — reversible or not? what comes next?",
            sublabel: "Input — any adapted or dysplastic tissue asked about its future.",
            variant: "input",
          },
          {
            id: "color",
            label: "THE COLOR RULE — green arrows reverse, red arrows do not",
            sublabel: "The figure's legend: green = Reversible (hyperplasia, hypertrophy, atrophy, metaplasia, and dysplasia-while-mild-or-moderate can all undo when the stressor leaves), red = Irreversible (neoplasia, and severe dysplasia progressing to carcinoma in situ).",
            variant: "process",
          },
          {
            id: "exits",
            label: "THE TWO EXITS — 'Inability to adapt' and 'Severe stress or injury' → irreversible injury → necrosis or apoptosis",
            sublabel: "Exit 1 (slow): the adaptation exhausts itself — the page's own printed chain is significant LV hypertrophy → myocardial injury → HF. Exit 2 (fast): a severe stress overwhelms before any adaptation starts — normal cells straight to the terminal box. Both end in the same terminal: necrosis or apoptosis.",
            variant: "process",
          },
          {
            id: "fork",
            label: "THE DYSPLASIA FORK — mild/moderate may regress; severe becomes irreversible",
            sublabel: "Mild and moderate dysplasias (do not involve the entire thickness of epithelium) may regress with alleviation of the inciting cause; severe dysplasia often becomes irreversible and progresses to carcinoma in situ. Dysplasia is usually preceded by persistent metaplasia or pathologic hyperplasia — the 'If chronic irritant persists' bridge to neoplasia.",
            variant: "process",
          },
          {
            id: "output",
            label: "Answer with the rule the figure prints",
            sublabel: "Output — remove the cause and the green states regress; leave it and the map marches: persistent metaplasia or pathologic hyperplasia → dysplasia → (if severe / if the chronic irritant persists) carcinoma in situ → neoplasia.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "color", label: "green or red?" },
          { from: "color", to: "exits", label: "if stress continues" },
          { from: "color", to: "fork", label: "if dysplastic" },
          { from: "exits", to: "output", label: "necrosis or apoptosis" },
          { from: "fork", to: "output", label: "regress or carcinoma in situ" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "adaptations-comparison-map",
      title: "The adaptation progression map — two axes, two exits, one color rule (an original KYP redraw)",
      caption:
        "An original KYP redraw of the source's adaptation-progression figure (book 202 — line-art flowchart with ~98 small monochrome cell-cluster rasters, one per node; VLM census confirmed the schematic and its topology, no photographs): NORMAL CELLS at center with the green branch up — 'Change in cell size and/or number' → HYPERPLASIA, HYPERTROPHY, ATROPHY — and the branch down: 'Change in cell structure' → DYSPLASIA, 'Change in cell type' → METAPLASIA, 'Change in cell type and structure' → NEOPLASIA; the red arrow 'Inability to adapt' from the adapted states and the red arrow 'Severe stress or injury' straight from normal, both entering the terminal box 'Irreversible injury → necrosis or apoptosis'; the red 'If chronic irritant persists' bridge from dysplasia to neoplasia; the legend GREEN = Reversible, RED = Irreversible. The redraw renders each node's cell-cluster idea as clean original vector glyphs (more cells, bigger cells, shrunken cells, changed type, disordered cells, disordered mass) — never reproducing the source's artwork.",
      notice:
        "The source figure is a line-art flowchart whose nodes carry small monochrome cell-cluster illustrations (pdfimages: ~98 small rasters at 308 ppi — VLM census documented) — REDRAWN here as original vector panels with original cell glyphs; the figure's labels and arrow annotations are carried verbatim in the note's tables. No margin mnemonics exist on this page (VLM census confirmed); nothing from the source's distinctive expression is carried.",
    },
    {
      kind: "table",
      title: "Book 202 — the six adaptation blocks (carried verbatim)",
      intro:
        "The page's definition blocks, as printed. The intro rule prints above the five named adaptations; each named block carries its mechanism and its example(s).",
      columns: ["TERM · FIELD", "PRINTED CONTENT — verbatim (book 202)"],
      rows: [
        ["Cellular adaptations (intro)", "Reversible changes that can be physiologic (eg, uterine enlargement during pregnancy) or pathologic (eg, myocardial hypertrophy 2° to systemic hypertension). If stress is excessive or persistent, adaptations can progress to cell injury (eg, significant LV hypertrophy → myocardial injury → HF)."],
        ["Hypertrophy", "↑ structural proteins and organelles → ↑ in size of cells. Example: cardiac hypertrophy."],
        ["Hyperplasia", "Controlled proliferation of stem cells and differentiated cells → ↑ in number of cells (eg, benign prostatic hyperplasia). Excessive stimulation → pathologic hyperplasia (eg, endometrial hyperplasia), which may progress to dysplasia and cancer."],
        ["Atrophy", "↓ in tissue mass due to ↓ in size (↑ cytoskeleton degradation via ubiquitin-proteasome pathway and autophagy [programmed digestion of damaged/misfolded intracellular proteins]; ↓ protein synthesis) and/or number of cells (apoptosis). Causes include disuse, denervation, loss of blood supply, loss of hormonal stimulation, poor nutrition."],
        ["Metaplasia", "Reprogramming of stem cells → replacement of one cell type by another that can adapt to a new stressor. Esophageal exposure to gastric acid: nonkeratinized stratified squamous → intestinal-type columnar epithelium (acid resistance), called Barrett esophagus. The opposite occurs upon airway exposure to tobacco smoke: pseudostratified ciliated columnar → stratified squamous epithelium (protection). May progress to dysplasia → malignant transformation with persistent insult (eg, Barrett esophagus → esophageal adenocarcinoma). Metaplasia of connective tissue can also occur (eg, myositis ossificans, the formation of bone within muscle after trauma)."],
        ["Dysplasia", "Disordered, precancerous epithelial cell growth; not considered a true adaptive response. Characterized by loss of uniformity of cell size and shape (pleomorphism); loss of tissue orientation; nuclear changes (eg, ↑ nuclear:cytoplasmic ratio and clumped chromatin). Mild and moderate dysplasias (ie, do not involve entire thickness of epithelium) may regress with alleviation of inciting cause. Severe dysplasia often becomes irreversible and progresses to carcinoma in situ. Usually preceded by persistent metaplasia or pathologic hyperplasia."],
      ],
      caption:
        "The six blocks: the intro rule (reversible; physiologic or pathologic; excessive/persistent stress → injury), then the two axes — size/number (hypertrophy, hyperplasia, atrophy) and type/structure (metaplasia, dysplasia with its severity fork, and the neoplasia the map ends at).",
    },
    {
      kind: "table",
      title: "Book 202 — the figure's nodes, arrows, and legend (carried verbatim, reading order VLM-verified)",
      intro:
        "The flowchart's labels print in the text layer interleaved with the node names; the reading order below is verified against the rendered page by VLM census.",
      columns: ["FIGURE ELEMENT", "PRINTED LABELS — verbatim (book 202)"],
      rows: [
        ["The top branch (reversible)", "Hyperplasia · Hypertrophy · Atrophy — reached from Normal cells by the arrow labeled 'Change in cell size and/or number'."],
        ["The bottom branch (type/structure)", "Dysplasia — 'Change in cell structure'; Metaplasia — 'Change in cell type'; Neoplasia — 'Change in cell type and structure'."],
        ["The terminal box and its two red entries", "'Irreversible injury → necrosis or apoptosis' — entered by 'Inability to adapt' (from the adapted states) and 'Severe stress or injury' (direct from Normal cells)."],
        ["The dysplasia → neoplasia bridge", "'If chronic irritant persists' — the red arrow from Dysplasia to Neoplasia."],
        ["The legend", "'Reversible' · 'Irreversible' — the green-arrow/red-arrow key printed at the figure's edge."],
      ],
      caption:
        "The figure's own topology: two axes out of normal, two red roads into the terminal box, one bridge to neoplasia — and a color rule that grades every state by whether it can come back.",
    },
    {
      kind: "callout",
      variant: "exam",
      title: "The three routing rules this page teaches",
      body:
        "Rule 1 — NAME THE AXIS FIRST: if the stem changes cell size or number, the answer lives in the top row (hypertrophy = ↑ size via ↑ structural proteins and organelles; hyperplasia = ↑ number via controlled proliferation of stem cells and differentiated cells; atrophy = ↓ size and/or number); if it changes cell type or order, the answer lives in the bottom row (metaplasia = one mature type replaced by another; dysplasia = disordered growth of the epithelium it already has — NOT a true adaptive response). Rule 2 — THE TWO EXITS ARE TIMING: 'inability to adapt' is the slow exit (the adapted tissue exhausted — significant LV hypertrophy → myocardial injury → HF, the page's own chain), 'severe stress or injury' is the fast exit (overwhelmed outright); both land in the same terminal box, irreversible injury → necrosis or apoptosis. Rule 3 — DYSPLASIA IS GRADED BY THICKNESS AND FATE: mild/moderate (not the entire epithelial thickness) may regress with alleviation of the inciting cause; severe often becomes irreversible and progresses to carcinoma in situ; and dysplasia is usually preceded by persistent metaplasia or pathologic hyperplasia — so the chronic irritant that persists is the bridge ('If chronic irritant persists') to neoplasia. The green/red legend answers every 'can it come back?' question the exam asks.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 58-year-old man with long-standing systemic hypertension has an echocardiogram showing a thickened left ventricular wall with preserved cavity size; the question names the myocardial response and its risk if the pressure load persists.",
        discriminator: "Myocardial hypertrophy 2° to systemic hypertension — the intro rule's own pathologic example",
        concept: "Pathologic hypertrophy on the size axis",
        answer:
          "Hypertrophy: ↑ structural proteins and organelles → ↑ in size of cells (cardiac hypertrophy). It is PATHOLOGIC here (driven by disease, not physiologic demand like the uterine enlargement of pregnancy), and the intro rule prints the progression if the stress persists: significant LV hypertrophy → myocardial injury → HF — the 'inability to adapt' slow exit of the figure.",
      },
      {
        stem: "A 61-year-old man with decades of untreated GERD undergoes endoscopy; the distal esophageal biopsy shows intestinal-type columnar epithelium with goblet cells replacing the native squamous lining.",
        discriminator: "Nonkeratinized stratified squamous → intestinal-type columnar epithelium in the esophagus = Barrett esophagus",
        concept: "Metaplasia on the type axis — acid direction",
        answer:
          "Metaplasia: reprogramming of stem cells replacing one cell type by another that can adapt to the new stressor — here nonkeratinized stratified squamous → intestinal-type columnar epithelium (acid resistance), called Barrett esophagus. With persistent insult it may progress to dysplasia → malignant transformation (Barrett esophagus → esophageal adenocarcinoma) — the 'If chronic irritant persists' bridge.",
      },
      {
        stem: "A 66-year-old man with urinary frequency has a prostate enlarged by an increased NUMBER of glandular epithelial cells; a woman with unopposed estrogen exposure shows an increased NUMBER of endometrial glands on biopsy.",
        discriminator: "↑ in number of cells — controlled proliferation of stem cells and differentiated cells",
        concept: "Hyperplasia and its pathologic runaway",
        answer:
          "Hyperplasia: controlled proliferation of stem cells and differentiated cells → ↑ in number of cells (eg, benign prostatic hyperplasia). Excessive stimulation → pathologic hyperplasia (eg, endometrial hyperplasia), which may progress to dysplasia and cancer — the printed chain the figure draws as the metaplasia/hyperplasia → dysplasia → neoplasia route.",
      },
    ],
    traps: [
      {
        a: "Hypertrophy",
        b: "Hyperplasia",
        whyConfused: "Both enlarge a tissue and can coexist (the uterine enlargement of pregnancy is the source's physiologic example)",
        keyDifference: "Hypertrophy is ↑ structural proteins and organelles → ↑ SIZE of cells (cardiac hypertrophy); hyperplasia is controlled proliferation of stem cells and differentiated cells → ↑ NUMBER of cells (benign prostatic hyperplasia)",
        clue: "Size vs number in the stem; a bigger heart with the same myocyte count = hypertrophy, more prostate glands = hyperplasia",
      },
      {
        a: "Metaplasia",
        b: "Dysplasia",
        whyConfused: "Both sit on the type/structure axis and both are epithelial responses to chronic irritation",
        keyDifference: "Metaplasia is REPLACEMENT of one mature cell type by another that adapts to the new stressor (Barrett columnar; airway squamous) and is a true adaptive response; dysplasia is DISORDERED, precancerous growth of the existing epithelium — 'not considered a true adaptive response' — with pleomorphism, loss of tissue orientation, ↑ nuclear:cytoplasmic ratio, and clumped chromatin",
        clue: "A new mature cell type named in the stem = metaplasia; disordered architecture and nuclear atypia = dysplasia (and dysplasia is usually PRECEDED by persistent metaplasia or pathologic hyperplasia)",
      },
      {
        a: "Atrophy as passive wasting",
        b: "Atrophy as active demolition",
        whyConfused: "'The tissue shrank' reads as though cells simply lost volume",
        keyDifference: "Atrophy is ↓ tissue mass via ACTIVE mechanisms: ↑ cytoskeleton degradation through the ubiquitin-proteasome pathway and autophagy (programmed digestion of damaged/misfolded intracellular proteins), ↓ protein synthesis, and/or ↓ cell number by apoptosis",
        clue: "Any question naming ubiquitin-proteasome, autophagy, or ↓ protein synthesis is testing atrophy's mechanism pair — the page's only adaptation whose mechanism is degradation machinery",
      },
    ],
    pivots: [
      {
        lookAlike: "The two metaplasia directions — esophagus vs airway",
        differentiator: "The new type is chosen by the STRESSOR: gastric acid drives nonkeratinized stratified squamous → intestinal-type columnar (Barrett, acid resistance); tobacco smoke drives pseudostratified ciliated columnar → stratified squamous (protection) — the page prints them as opposites",
        correctPath: "Identify the irritant and the organ, then the direction follows: acid → columnar (esophagus), smoke → squamous (airway); both may progress to dysplasia → malignant transformation if the insult persists (Barrett → esophageal adenocarcinoma)",
      },
      {
        lookAlike: "Dysplasia severity — mild/moderate vs severe",
        differentiator: "Thickness and fate: mild and moderate dysplasias do not involve the entire thickness of epithelium and MAY REGRESS with alleviation of the inciting cause; severe dysplasia often becomes IRREVERSIBLE and progresses to carcinoma in situ",
        correctPath: "Grade by thickness, then counsel by fate — remove the inciting cause and mild/moderate can regress; severe dysplasia is the red-arrow state headed for carcinoma in situ (the 'If chronic irritant persists' bridge to neoplasia)",
      },
    ],
    miniCase: {
      vignette:
        "A 63-year-old man with a 25-year history of symptomatic GERD, poorly compliant with acid suppression, presents for surveillance endoscopy. Biopsies of the distal esophagus show intestinal-type columnar epithelium with goblet cells replacing the native nonkeratinized stratified squamous epithelium; the columnar cells are uniform, oriented, and non-atypical. A second biopsy from a nodular area shows cells with loss of uniformity of size and shape, loss of tissue orientation, and nuclei with ↑ nuclear:cytoplasmic ratio and clumped chromatin — but the changes do not involve the entire thickness of the epithelium.",
      question: "Name the two processes in the two biopsies, and state the fate of each if the inciting cause is alleviated.",
      options: [
        {
          label: "Biopsy 1: metaplasia (Barrett esophagus) — reversible with cause alleviation; Biopsy 2: mild/moderate dysplasia — may regress with alleviation of the inciting cause",
          text: "The columnar replacement is metaplasia (one mature cell type replaced by another, acid-resistant); the second biopsy's disordered, precancerous growth without full-thickness involvement is mild-to-moderate dysplasia.",
          correct: true,
          why: "Correct on both layers. The first biopsy is the page's own example: esophageal exposure to gastric acid → nonkeratinized stratified squamous → intestinal-type columnar epithelium (acid resistance), called Barrett esophagus — a true adaptive response, reversible in principle when the stressor goes. The second shows dysplasia's printed markers (pleomorphism, loss of orientation, ↑ N:C ratio, clumped chromatin); because it does not involve the ENTIRE thickness, it is mild/moderate and MAY regress with alleviation of the inciting cause. Severe dysplasia (full thickness threatened) is the one that often becomes irreversible and progresses to carcinoma in situ — the 'If chronic irritant persists' bridge to esophageal adenocarcinoma.",
        },
        {
          label: "Biopsy 1: dysplasia; Biopsy 2: metaplasia",
          text: "The columnar change is disordered precancerous growth, and the atypical cells are a new cell type.",
          why: "Reversed: metaplasia REPLACES one mature cell type with another that adapts to the stressor (the uniform, oriented columnar with goblet cells); dysplasia is disordered growth of the EXISTING epithelium with the nuclear atypia the second biopsy shows. The uniformity of biopsy 1 is the tell against dysplasia.",
        },
        {
          label: "Biopsy 1: hyperplasia of esophageal glands",
          text: "An increased number of cells explains the columnar population.",
          why: "Wrong axis: hyperplasia is ↑ in NUMBER of cells by controlled proliferation of stem cells and differentiated cells — it enlarges a tissue's existing cell population, it does not replace one mature cell type with another. A new TYPE (columnar for squamous) is metaplasia.",
        },
        {
          label: "Biopsy 1: hypertrophy of the squamous epithelium",
          text: "The squamous cells enlarged into columnar shapes.",
          why: "Wrong axis again: hypertrophy is ↑ structural proteins and organelles → ↑ in SIZE of cells — cells do not change identity when they hypertrophy. The squamous-to-columnar switch is stem-cell reprogramming, which is metaplasia's printed definition.",
        },
        {
          label: "Both biopsies: irreversible injury → necrosis or apoptosis already present",
          text: "Any change this advanced on chronic irritation has crossed into irreversible injury.",
          why: "Wrong exit: nothing in either biopsy is coagulative necrosis or apoptotic loss — the figure's terminal box is reached by 'inability to adapt' (exhausted adaptation) or 'severe stress or injury' (overwhelming injury), and both biopsies still show living, structured epithelium. The green-arrow states (metaplasia; mild/moderate dysplasia) are reversible by the figure's own legend.",
        },
      ],
      reasoning:
        "The two-biopsy stem walks the figure's bottom row in order. Biopsy 1 is a NEW mature cell type (intestinal-type columnar with goblet cells) replacing the native squamous — the definition of metaplasia, and specifically the page's printed example (Barrett esophagus, the acid-resistance adaptation); it sits on a green arrow, reversible in principle. Biopsy 2 shows dysplasia's own printed marker set — pleomorphism (loss of uniformity of cell size and shape), loss of tissue orientation, ↑ nuclear:cytoplasmic ratio, clumped chromatin — and the thickness qualifier ('does not involve the entire thickness') assigns it to the mild/moderate side of the severity fork, the side that MAY regress with alleviation of the inciting cause. The management logic the page prints: alleviate the cause (acid suppression compliance) and both states can retreat; leave the chronic irritant in place and the map marches — persistent metaplasia → dysplasia → (severe, full-thickness) carcinoma in situ → esophageal adenocarcinoma. Neither biopsy shows necrosis or apoptosis, so the terminal box is not in play; the distractors that mislabel the axes (hyperplasia = number, hypertrophy = size) or jump to the irreversible exit all fail on the printed definitions.",
    },
  },
  mnemonics: [
    {
      code: "HEAVIER, HEADCOUNT, SHRUNKEN",
      meaning: "The size/number axis trio: hypertrophy makes cells HEAVIER (↑ structural proteins and organelles → ↑ size; cardiac hypertrophy), hyperplasia raises the HEADCOUNT (↑ number of cells by controlled proliferation of stem cells and differentiated cells; BPH), atrophy leaves them SHRUNKEN (↓ size and/or number; ubiquitin-proteasome pathway, autophagy, ↓ protein synthesis, apoptosis).",
      memorizes: "The three size/number adaptations and their mechanisms",
      whenToUse: "Any stem that enlarges or shrinks a tissue by cell size or number",
      clinical: "Pressure overload on the LV → hypertrophy; androgen-driven prostate → hyperplasia; a casted limb or denervated muscle → atrophy.",
    },
    {
      code: "ACID COLUMNAR, SMOKE SQUAMOUS",
      meaning: "The two metaplasia directions: gastric acid drives esophageal squamous → intestinal-type COLUMNAR (Barrett esophagus, acid resistance); tobacco smoke drives airway pseudostratified ciliated columnar → stratified SQUAMOUS (protection). The stressor picks the new type.",
      memorizes: "The metaplasia direction pair",
      whenToUse: "Any metaplasia vignette — identify organ and irritant, then the direction",
      clinical: "GERD surveillance finds Barrett (adenocarcinoma risk); smoking swaps the airway's mucociliary lining for tough squamous (and loses the cilia).",
    },
    {
      code: "TWO ROADS TO THE BOX",
      meaning: "The figure's two red exits into 'Irreversible injury → necrosis or apoptosis': the SLOW road 'Inability to adapt' (the adaptation exhausts — significant LV hypertrophy → myocardial injury → HF) and the FAST road 'Severe stress or injury' (overwhelmed outright, no adaptation attempted).",
      memorizes: "How adapted or normal cells reach irreversible injury",
      whenToUse: "Any progression or prognosis question about stressed tissue",
      clinical: "The chronically pressure-loaded heart decompensates on the slow road; the acutely infarcted myocardium takes the fast road.",
    },
    {
      code: "MILD MAY MELT, SEVERE SITS",
      meaning: "The dysplasia severity fork: MILD and MODERATE dysplasia (not the entire epithelial thickness) MAY MELT away — regress with alleviation of the inciting cause; SEVERE dysplasia SITS — often becomes irreversible and progresses to carcinoma IN SITU (it stays in place until it crosses).",
      memorizes: "Dysplasia's reversible/irreversible fork and the carcinoma-in-situ endpoint",
      whenToUse: "Any graded biopsy or surveillance question",
      clinical: "Remove the irritant and mild/moderate changes can regress; severe dysplasia is treated as the precursor sitting right at carcinoma in situ — the last stop before 'If chronic irritant persists' delivers neoplasia.",
    },
  ],
  rapidReview: {
    s30: [
      "The intro rule: adaptations are reversible changes, physiologic (uterine enlargement during pregnancy) or pathologic (myocardial hypertrophy 2° to systemic hypertension); if stress is excessive or persistent → cell injury (significant LV hypertrophy → myocardial injury → HF)",
      "Hypertrophy: ↑ structural proteins and organelles → ↑ in size of cells; cardiac hypertrophy",
      "Hyperplasia: controlled proliferation of stem cells and differentiated cells → ↑ in number of cells (benign prostatic hyperplasia); excessive stimulation → pathologic hyperplasia (endometrial) → may progress to dysplasia and cancer",
      "Atrophy: ↓ tissue mass via ↓ size (ubiquitin-proteasome pathway, autophagy [programmed digestion of damaged/misfolded intracellular proteins], ↓ protein synthesis) and/or ↓ number (apoptosis); causes — disuse, denervation, loss of blood supply, loss of hormonal stimulation, poor nutrition",
      "Metaplasia: stem-cell reprogramming → one cell type replaced by another adapted to the new stressor (acid → Barrett columnar; smoke → squamous; connective tissue too — myositis ossificans); Dysplasia: disordered precancerous growth, not a true adaptation (pleomorphism, loss of orientation, ↑ N:C ratio, clumped chromatin); mild/moderate may regress, severe → carcinoma in situ",
    ],
    m3: [
      "Two axes: size/number (hyperplasia, hypertrophy, atrophy — the figure's top row) vs type/structure (metaplasia, dysplasia, neoplasia — the bottom row)",
      "Two exits to the terminal box 'Irreversible injury → necrosis or apoptosis': 'Inability to adapt' (slow, from the adapted states) and 'Severe stress or injury' (fast, direct from normal)",
      "The color rule: green = Reversible (adaptations + mild/moderate dysplasia), red = Irreversible (neoplasia, severe dysplasia → carcinoma in situ); 'If chronic irritant persists' = the dysplasia → neoplasia bridge",
      "Dysplasia is usually preceded by persistent metaplasia or pathologic hyperplasia — the march order of the bottom row",
    ],
    m10: [
      "Census: p224 (book 202) carries ~98 small monochrome rasters (50-90 px at 308 ppi) — the cell-cluster illustrations embedded in the flowchart figure, one per node; VLM census confirmed line art/schematic, NO photographs on the page",
      "Node glyphs VLM-verified: Normal = uniform columnar row; Hyperplasia = many small uniform cells; Hypertrophy = fewer larger cells; Atrophy = shrunken flattened cells; Metaplasia = changed cell shape; Dysplasia = irregular disorganized cells with prominent nuclei; Neoplasia = disordered crowded mass with high N:C ratios",
      "Figure topology VLM-verified: green arrows up to the size/number row; green arrows down to Dysplasia/Metaplasia; the type-and-structure arrow to Neoplasia; red 'Inability to adapt' and 'Severe stress or injury' into the terminal box; red 'If chronic irritant persists' from Dysplasia to Neoplasia; legend Reversible/Irreversible",
      "Text quirks: the banner heading 'PATHOLOGY—CeLLURAL INjURY' prints TWICE (raw lines 7 and 9 — the source's double heading); the small-cap stYLeOf typography is the source's own; the figure labels print interleaved in the text layer (raw 51-85)",
      "No margin mnemonics on the page (VLM confirmed; the margins are blank) — the KYP mnemonics live in the memory layer only",
    ],
  },
  recall: [
    {
      q: "Carry the six definition blocks verbatim — the intro rule and the five named adaptations.",
      a: "INTRO: Reversible changes that can be physiologic (eg, uterine enlargement during pregnancy) or pathologic (eg, myocardial hypertrophy 2° to systemic hypertension). If stress is excessive or persistent, adaptations can progress to cell injury (eg, significant LV hypertrophy → myocardial injury → HF). HYPERTROPHY: ↑ structural proteins and organelles → ↑ in size of cells. Example: cardiac hypertrophy. HYPERPLASIA: Controlled proliferation of stem cells and differentiated cells → ↑ in number of cells (eg, benign prostatic hyperplasia). Excessive stimulation → pathologic hyperplasia (eg, endometrial hyperplasia), which may progress to dysplasia and cancer. ATROPHY: ↓ in tissue mass due to ↓ in size (↑ cytoskeleton degradation via ubiquitin-proteasome pathway and autophagy [programmed digestion of damaged/misfolded intracellular proteins]; ↓ protein synthesis) and/or number of cells (apoptosis). Causes include disuse, denervation, loss of blood supply, loss of hormonal stimulation, poor nutrition. METAPLASIA: Reprogramming of stem cells → replacement of one cell type by another that can adapt to a new stressor. DYSPLASIA: Disordered, precancerous epithelial cell growth; not considered a true adaptive response.",
    },
    {
      q: "Walk the adaptation-progression figure — every node, arrow label, and the legend.",
      a: "NORMAL CELLS at center. Green arrows UP to HYPERPLASIA, HYPERTROPHY, ATROPHY labeled 'Change in cell size and/or number.' Arrows DOWN: 'Change in cell structure' → DYSPLASIA; 'Change in cell type' → METAPLASIA; 'Change in cell type and structure' → NEOPLASIA. The terminal box 'Irreversible injury → necrosis or apoptosis' is entered by two red arrows: 'Inability to adapt' (from the adapted states) and 'Severe stress or injury' (direct from normal). A red arrow DYSPLASIA → NEOPLASIA is labeled 'If chronic irritant persists.' The legend: green = Reversible, red = Irreversible.",
    },
    {
      q: "State atrophy's mechanism pair and its five printed causes.",
      a: "MECHANISMS: ↓ in tissue mass due to ↓ in size — ↑ cytoskeleton degradation via the ubiquitin-proteasome pathway and autophagy (programmed digestion of damaged/misfolded intracellular proteins), plus ↓ protein synthesis — and/or ↓ in number of cells (apoptosis). CAUSES: disuse, denervation, loss of blood supply, loss of hormonal stimulation, poor nutrition.",
    },
    {
      q: "Give both metaplasia directions, the connective-tissue example, and the progression risk.",
      a: "ACID (esophagus): nonkeratinized stratified squamous → intestinal-type columnar epithelium (acid resistance), called Barrett esophagus. SMOKE (airway): pseudostratified ciliated columnar → stratified squamous epithelium (protection) — the opposite direction. CONNECTIVE TISSUE: myositis ossificans, the formation of bone within muscle after trauma. PROGRESSION: may progress to dysplasia → malignant transformation with persistent insult (eg, Barrett esophagus → esophageal adenocarcinoma).",
    },
    {
      q: "State dysplasia's defining features, its severity fork, and what usually precedes it.",
      a: "FEATURES: disordered, precancerous epithelial cell growth; not considered a true adaptive response; loss of uniformity of cell size and shape (pleomorphism); loss of tissue orientation; nuclear changes (eg, ↑ nuclear:cytoplasmic ratio and clumped chromatin). SEVERITY FORK: mild and moderate dysplasias (do not involve entire thickness of epithelium) may regress with alleviation of inciting cause; severe dysplasia often becomes irreversible and progresses to carcinoma in situ. PRECEDED BY: usually persistent metaplasia or pathologic hyperplasia.",
    },
  ],
  related: [
    {
      title: "Translation & Protein Synthesis",
      topicId: "translation-protein-synthesis",
      note: "The build-and-dismantle axis of this page runs on that machinery: hypertrophy is ↑ structural proteins (synthesis up), atrophy is ↓ protein synthesis plus the ubiquitin-proteasome demolition of the cytoskeleton — the ribosome and the proteasome are the two levers of cell mass.",
    },
    {
      title: "Cell Cycle",
      topicId: "cell-cycle",
      note: "Hyperplasia is 'controlled proliferation of stem cells and differentiated cells' — the cell-cycle machinery running in a regulated gear; the page's warning that excessive stimulation → pathologic hyperplasia → dysplasia and cancer is that control failing.",
    },
    {
      title: "Muscular Dystrophies",
      topicId: "muscular-dystrophies",
      note: "Dystrophin-loss makes the atrophy causes list clinical: denervation and myocyte loss shrink muscle by ↓ size and ↓ number — the same tissue-mass logic this page defines, driven by a structural-gene defect.",
    },
    {
      title: "Atherosclerosis",
      topicId: "atherosclerosis",
      note: "The chronic ischemia of a stenotic artery is the 'loss of blood supply' cause of atrophy made vascular — the plaque narrows the lumen, the downstream tissue shrinks, and the pressure overload upstream hypertrophies the LV.",
    },
  ],
  crossLinks: [
    {
      subject: "Biochemistry (protein degradation pathways)",
      connection:
        "Atrophy's mechanism pair is the biochemistry chapter's degradation machinery turned pathologic: the ubiquitin-proteasome pathway tagging and chewing the cytoskeleton, and autophagy digesting damaged/misfolded intracellular proteins — the same systems that police protein quality in healthy cells.",
    },
    {
      subject: "Cardiovascular pathology (pressure overload)",
      connection:
        "The intro rule's own chain — systemic hypertension → myocardial hypertrophy 2° → significant LV hypertrophy → myocardial injury → HF — is the 'inability to adapt' slow exit drawn on every pressure-overloaded heart; the fast exit is the acute MI's 'severe stress or injury.'",
    },
    {
      subject: "Gastroenterology (Barrett surveillance)",
      connection:
        "Persistent GERD converts squamous esophagus to intestinal-type columnar (Barrett), and surveillance exists because the columnar metaplasia marches to dysplasia and esophageal adenocarcinoma if the chronic irritant persists — this page's map is the biopsy schedule's reason.",
    },
    {
      subject: "Obstetrics (physiologic adaptation)",
      connection:
        "Uterine enlargement during pregnancy is the source's physiologic example — hormone-driven growth that reverses after delivery, the proof that adaptation is normal biology before it is pathology; the pathologic mirror is any hormone-driven hyperplasia that keeps its stimulation.",
    },
  ],
};
