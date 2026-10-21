import type { KypUsMLENote } from "../types";

// Microbiology — MYCOLOGY banner (M-batch 16).
// Source: First Aid 2026, Part 1 pdf 171 / book 149
//  (the systemic-mycoses intro rules + the 4-disease x 5-column table + the
//   printed US endemic map with its legend, whose text layer emits the
//   row headers of rows 2-4 and the legend in one bottom block).

export const systemicMycoses: KypUsMLENote = {
  id: "systemic-mycoses",
  title: "Systemic Mycoses: Histoplasma, Blastomyces, Coccidioides, Paracoccidioides",
  subtitle:
    "The MYCOLOGY block organized by THE DIMORPHIC GRID. The rules: all of the following can cause pneumonia and can disseminate; all are caused by dimorphic fungi — cold (20°C) = mold, heat (37°C) = yeast — with COCCIDIOIDES the only exception (a spherule, not yeast, in tissue); systemic mycoses can form granulomas (like TB) but CANNOT be transmitted person-to-person (unlike TB); treatment is fluconazole or itraconazole for local infection and amphotericin B for systemic infection. THE FOUR DISEASES on the size-and-geography axes: HISTOPLASMOSIS — Mississippi and Ohio River Valleys; the macrophage filled with Histoplasma (smaller than RBC) with tuberculate macroconidia on culture; palatal/tongue ulcers, splenomegaly, pancytopenia, erythema nodosum; Histo hides (within macrophages), associated with bird or bat droppings (eg, caves), diagnosed via urine/serum antigen. BLASTOMYCOSIS — Eastern and Central US, Great Lakes; broad-based budding of Blastomyces (same size as RBC); inflammatory lung disease disseminating to bone/skin (verrucous lesions, may mimic SCC); Blasto buds broadly. COCCIDIOIDOMYCOSIS — Southwestern US, California; the spherule filled with endospores of Coccidioides (much larger than RBC); disseminates to bone/skin; erythema nodosum (desert bumps) or multiforme; arthralgias (desert rheumatism); can cause meningitis; associated with dust exposure in endemic areas (eg, archeological excavations, earthquakes). PARACOCCIDIOIDOMYCOSIS — Latin America; budding yeast of Paracoccidioides with the “captain's wheel” formation (much larger than RBC); similar to blastomycosis, males > females; Paracoccidio parasails with the captain's wheel all the way to Latin America.",
  subject: "Microbiology",
  system: "Section II · High-Yield General Principles — Mycology",
  pilotCategory:
    "Mycology — the dimorphic rule (cold = mold, heat = yeast; the Coccidioides spherule exception) with the TB-comparison pair (granulomas like TB, not transmitted person-to-person); the four systemic mycoses on the size axis (smaller than / same size as / much larger than RBC) and the geography axis (river valleys, Great Lakes, the Southwest, Latin America); the local-vs-systemic therapy line",
  difficulty: 2,
  readTime: 10,
  sourceRef: "First Aid 2026, Part 1 pp. 149–149 (Systemic mycoses)",
  tags: [
    "systemic mycoses",
    "dimorphic fungi",
    "mold",
    "yeast",
    "spherule",
    "granuloma",
    "Histoplasma",
    "histoplasmosis",
    "Mississippi and Ohio River Valleys",
    "bird or bat droppings",
    "tuberculate macroconidia",
    "erythema nodosum",
    "pancytopenia",
    "splenomegaly",
    "urine/serum antigen",
    "Blastomyces",
    "blastomycosis",
    "Great Lakes",
    "broad-based budding",
    "verrucous lesions",
    "squamous cell carcinoma mimic",
    "Coccidioides",
    "coccidioidomycosis",
    "Southwestern US",
    "spherule",
    "endospores",
    "desert bumps",
    "desert rheumatism",
    "arthralgias",
    "meningitis",
    "dust exposure",
    "Paracoccidioides",
    "paracoccidioidomycosis",
    "Latin America",
    "captain's wheel",
    "males > females",
    "fluconazole",
    "itraconazole",
    "amphotericin B",
  ],
  core: {
    what: "THE DIMORPHIC GRID. The rules first: all of the following can cause pneumonia and can disseminate; all are caused by dimorphic fungi — cold (20°C) = mold, heat (37°C) = yeast — with Coccidioides the only exception, a spherule (not yeast) in tissue; systemic mycoses can form granulomas (like TB) but cannot be transmitted person-to-person (unlike TB); treatment is fluconazole or itraconazole for local infection, amphotericin B for systemic infection. The four diseases then resolve on the size axis and the geography axis. HISTOPLASMOSIS: endemic to the Mississippi and Ohio River Valleys; the macrophage filled with Histoplasma (smaller than RBC) — with tuberculate macroconidia on culture; palatal/tongue ulcers, splenomegaly, pancytopenia, erythema nodosum; Histo hides (within macrophages), associated with bird or bat droppings (eg, caves); diagnosis via urine/serum antigen. BLASTOMYCOSIS: Eastern and Central US, Great Lakes; broad-based budding of Blastomyces (same size as RBC); inflammatory lung disease; disseminates to bone/skin with verrucous lesions that may mimic SCC; Blasto buds broadly. COCCIDIOIDOMYCOSIS: Southwestern US, California; the spherule filled with endospores of Coccidioides (much larger than RBC); disseminates to bone/skin; erythema nodosum (desert bumps) or multiforme; arthralgias (desert rheumatism); can cause meningitis; associated with dust exposure in endemic areas (eg, archeological excavations, earthquakes). PARACOCCIDIOIDOMYCOSIS: Latin America; budding yeast of Paracoccidioides with the “captain's wheel” formation (much larger than RBC); similar to blastomycosis, males > females; Paracoccidio parasails with the captain's wheel all the way to Latin America.",
    why: "This block carries three exam institutions. The first is THE DIMORPHIC RULE itself: every systemic mycosis is a mold in the cold and a yeast in the heat — with Coccidioides's spherule as the single tissue exception that questions love. The second is THE SIZE AXIS: on tissue, smaller than RBC = Histoplasma (inside macrophages — the reason its diagnosis runs through urine/serum antigen); same size as RBC with a broad-based bud = Blastomyces; much larger than RBC = either the Coccidioides spherule or the Paracoccidioides captain's wheel — the morphology column names the organism before any culture returns. The third is THE GEOGRAPHY-EXPOSURE PAIR: river valleys with bird/bat droppings (Histoplasma), the Great Lakes (Blastomyces), the desert Southwest with dust exposure — archeological excavations and earthquakes (Coccidioides), and Latin America with the male predominance (Paracoccidioides). The TB comparison pair (granulomas like TB; NOT transmitted person-to-person) and the local-vs-systemic therapy line (fluconazole/itraconazole vs amphotericin B) complete the rules.",
    keyIdea: "Run the size axis, then the geography. SMALLER than RBC (inside macrophages) + river valleys + bird/bat droppings = Histoplasma (tuberculate macroconidia on culture; palatal/tongue ulcers, splenomegaly, pancytopenia, erythema nodosum; urine/serum antigen). SAME size as RBC + broad-based budding + Great Lakes = Blastomyces (inflammatory lung disease; verrucous skin lesions that may mimic SCC). MUCH larger than RBC + spherule + desert Southwest dust (archeological excavations, earthquakes) = Coccidioides (desert bumps, desert rheumatism, meningitis) — the dimorphic exception (spherule, not yeast, in tissue). MUCH larger than RBC + captain's wheel + Latin America, males > females = Paracoccidioides. All form granulomas like TB but are NOT transmitted person-to-person; treat local disease with fluconazole or itraconazole and systemic disease with amphotericin B.",
  },
  mechanisms: [
    {
      id: "dimorphic-size-axis",
      title: "The dimorphic rule and the size axis: from mold to yeast to spherule",
      context: "The MYCOLOGY opening rule set read as an identification engine",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A systemic mycosis can cause pneumonia and can disseminate — the shared opening of all four diseases",
            sublabel: "Input — the clinical problem the grid resolves.",
            variant: "input",
          },
          {
            id: "s1",
            label: "THE DIMORPHIC RULE: cold (20°C) = mold; heat (37°C) = yeast — the only exception is Coccidioides, a spherule (not yeast) in tissue",
            sublabel: "Process — the temperature axis names the form.",
            variant: "process",
          },
          {
            id: "s2",
            label: "THE SIZE AXIS (on tissue, vs RBC): smaller than RBC = Histoplasma (the macrophage-filled organism, tuberculate macroconidia on culture) · same size as RBC = Blastomyces (broad-based budding) · much larger than RBC = the Coccidioides spherule or the Paracoccidioides captain's wheel",
            sublabel: "Process — the morphology column names the organism.",
            variant: "process",
          },
          {
            id: "s3",
            label: "THE GEOGRAPHY-EXPOSURE AXIS: Mississippi and Ohio River Valleys with bird/bat droppings (Histoplasma) · Eastern and Central US, Great Lakes (Blastomyces) · Southwestern US, California, with dust exposure — archeological excavations, earthquakes (Coccidioides) · Latin America, males > females (Paracoccidioides)",
            sublabel: "Process — the endemic map names the exposure.",
            variant: "process",
          },
          {
            id: "o1",
            label: "OUTPUT — the TB pair and the therapy line: granulomas (like TB) but NOT transmitted person-to-person (unlike TB); fluconazole or itraconazole for local infection, amphotericin B for systemic infection",
            sublabel: "Output — the comparison and the treatment axis.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "dimorphic rule" },
          { from: "s1", to: "s2", label: "the size axis" },
          { from: "s2", to: "s3", label: "geography + exposure" },
          { from: "s3", to: "o1", label: "TB pair + therapy" },
        ],
        caption:
          "The grid runs three axes into one identification. The dimorphic rule supplies the temperature behavior (mold at 20°C, yeast at 37°C) with the Coccidioides spherule as the printed exception. The size axis then converts a tissue view into an organism: smaller than an RBC means Histoplasma — hiding inside macrophages, which is why its diagnosis runs through urine/serum antigen rather than the smear; same size as an RBC with a broad-based bud is Blastomyces; much larger than an RBC is either the Coccidioides spherule or the Paracoccidioides captain's wheel. The geography axis supplies the exposure: river valleys with bird or bat droppings (caves), the Great Lakes, the desert Southwest's dust (archeological excavations, earthquakes), and Latin America with its male predominance. The output pair is the TB comparison — granulomas like TB, but never transmitted person-to-person — and the therapy ladder: fluconazole or itraconazole for local infection, amphotericin B for systemic.",
      },
    },
    {
      id: "dissemination-map",
      title: "From lung to system: the dissemination set and its destinations",
      context: "The unique-signs column read as the organ map",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "All four begin as pneumonia — then disseminate by their own routes",
            sublabel: "Input — the shared pulmonary door.",
            variant: "input",
          },
          {
            id: "s1",
            label: "HISTOPLASMA disseminates to the reticuloendothelial display: palatal/tongue ulcers, splenomegaly, pancytopenia, erythema nodosum — the macrophage-dweller's systemic signs",
            sublabel: "Process — the RES organism's destinations.",
            variant: "process",
          },
          {
            id: "s2",
            label: "BLASTOMYCES disseminates to bone/skin — inflammatory lung disease first, then the verrucous lesions that may mimic SCC",
            sublabel: "Process — the skin-bone route.",
            variant: "process",
          },
          {
            id: "s3",
            label: "COCCIDIOIDES disseminates to bone/skin AND the meninges — with erythema nodosum (desert bumps) or multiforme, arthralgias (desert rheumatism), and the meningitis that changes the therapy ladder",
            sublabel: "Process — the only one with a CNS destination.",
            variant: "process",
          },
          {
            id: "o1",
            label: "OUTPUT — PARACOCCIDIOIDES behaves like Blastomyces (similar to blastomycosis) with the male predominance; and the therapy line reads from the depth of dissemination: local = fluconazole or itraconazole; systemic = amphotericin B",
            sublabel: "Output — the depth axis names the drug.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "histo: RES" },
          { from: "s1", to: "s2", label: "blasto: bone/skin" },
          { from: "s2", to: "s3", label: "coccidio: + meninges" },
          { from: "s3", to: "o1", label: "paracoccidio + therapy" },
        ],
        caption:
          "The dissemination column is the organ map. Histoplasma, living inside macrophages, displays systemically through the reticuloendothelial system — palatal and tongue ulcers, splenomegaly, pancytopenia, and erythema nodosum. Blastomyces travels to bone and skin, where its verrucous lesions can mimic squamous cell carcinoma — the biopsy trap. Coccidioides reaches bone, skin, AND the meninges — the only one of the four with a CNS destination, and the reason its block carries the can-cause-meningitis line; its desert phenomenology (desert bumps, desert rheumatism) is the exposure story retold as symptoms. Paracoccidioides behaves like blastomyces with the male predominance. The therapy ladder then reads from depth: local disease takes fluconazole or itraconazole; systemic disease takes amphotericin B.",
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "systemic-mycoses-map",
      title: "The dimorphic rule + the four-disease grid",
      caption:
        "An original KYP redraw of the source's systemic-mycoses page (book 149): the dimorphic-rule strip (cold = mold, heat = yeast, the Coccidioides spherule exception, the TB pair, the therapy line) and the four-disease × five-column grid (DISEASE | ENDEMIC LOCATION | PATHOLOGIC FEATURES | UNIQUE SIGNS/SYMPTOMS | NOTES) carrying the facts.",
      notice:
        "The printed photos (A the macrophage filled with Histoplasma; B the broad-based budding of Blastomyces; C the verrucous lesions; D the Coccidioides spherule; E the Paracoccidioides captain's wheel) are raster — COPYRIGHTED, described-in-text only. The printed US endemic map with its legend (whose text layer emits 'Coccidiodomycosis' — the source's own one-d typo) is NOT reproduced; the endemic geography is carried by the ENDEMIC LOCATION column verbatim. FA's printed mnemonics (Histo hides; Blasto buds broadly; Paracoccidio parasails with the captain's wheel) are NOT reproduced — verification only, carried verbatim in the table block below.",
    },
    {
      kind: "table",
      title: "The systemic-mycoses page — verbatim",
      intro: "The source's entries (book 149), verbatim (FA's printed mnemonics marked as such).",
      columns: ["Row", "Content (verbatim)"],
      rows: [
        ["The rules", "All of the following can cause pneumonia and can disseminate. All are caused by dimorphic fungi: cold (20°C) = mold; heat (37°C) = yeast. Only exception is Coccidioides, which is a spherule (not yeast) in tissue. Systemic mycoses can form granulomas (like TB); cannot be transmitted person-to-person (unlike TB). Treatment: fluconazole or itraconazole for local infection; amphotericin B for systemic infection."],
        ["Histoplasmosis", "ENDEMIC: Mississippi and Ohio River Valleys. PATHOLOGIC: Macrophage filled with Histoplasma (smaller than RBC) A (printed micrograph — the macrophage filled with small yeasts; described-in-text only); tuberculate macroconidia on culture. UNIQUE SIGNS: Palatal/tongue ulcers, splenomegaly, pancytopenia, erythema nodosum. NOTES: Histo hides (within macrophages) (FA mnemonic, printed). Associated with bird or bat droppings (eg, caves). Diagnosis via urine/serum antigen."],
        ["Blastomycosis", "ENDEMIC: Eastern and Central US, Great Lakes. PATHOLOGIC: Broad-based budding of Blastomyces (same size as RBC) B (printed micrograph — the broad-based bud; described-in-text only). UNIQUE SIGNS: Inflammatory lung disease; disseminates to bone/skin (verrucous lesions C (printed photo — the verrucous skin lesion; described-in-text only), may mimic SCC). NOTES: Blasto buds broadly (FA mnemonic, printed)."],
        ["Coccidioidomycosis", "ENDEMIC: Southwestern US, California. PATHOLOGIC: Spherule filled with endospores of Coccidioides (much larger than RBC) D (printed micrograph — the spherule; described-in-text only). UNIQUE SIGNS: Disseminates to bone/skin; erythema nodosum (desert bumps) or multiforme; arthralgias (desert rheumatism); can cause meningitis. NOTES: Associated with dust exposure in endemic areas (eg, archeological excavations, earthquakes)."],
        ["Paracoccidioidomycosis", "ENDEMIC: Latin America. PATHOLOGIC: Budding yeast of Paracoccidioides with “captain's wheel” formation (much larger than RBC) E (printed micrograph — the captain's wheel; described-in-text only). UNIQUE SIGNS: Similar to blastomycosis, males > females. NOTES: Paracoccidio parasails with the captain's wheel all the way to Latin America (FA mnemonic, printed)."],
        ["The printed US endemic map (bottom figure)", "The map of the United States showing the endemic regions, with the legend key printed as 'Blastomycosis / Histoplasmosis / Coccidiodomycosis' (the source's own one-d typo, line 125 of the dump) — the map artwork itself is raster-free vector but is NOT reproduced; described-in-text only, its geography carried by the ENDEMIC LOCATION column. The dump's bottom block also emits the row headers of rows 2-4 (Blastomycosis, Coccidioidomycosis, Paracoccidioidomycosis) and the standalone photo markers A/C — figure-block emission documented."],
      ],
      caption:
        "The table reads with the visual: the rules row is the dimorphic strip, the four disease rows are the grid, and the map row documents the printed figure honestly (described-in-text, geography carried by the ENDEMIC column). Column assignments resolved by the VLM census (the 5-column table emits interleaved in the text layer; each disease's cells emit as one contiguous block).",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "The protocols the grid implies",
      body: "THE IDENTIFICATION PROTOCOL: run the size axis on tissue — smaller than RBC (inside macrophages) = Histoplasma (diagnose with urine/serum antigen); same size as RBC with a broad-based bud = Blastomyces; much larger than RBC = the Coccidioides spherule or the Paracoccidioides captain's wheel. THE EXPOSURE PROTOCOL: ask the geography — river valleys with bird/bat exposure (caves) for Histoplasma; the Great Lakes for Blastomyces; the desert Southwest with dust (archeological excavations, earthquakes) for Coccidioides; Latin America (males > females) for Paracoccidioides. THE DISSEMINATION PROTOCOL: Histoplasma's RES display (palatal/tongue ulcers, splenomegaly, pancytopenia, erythema nodosum); Blastomyces's bone/skin with the SCC-mimicking verrucous lesions; Coccidioides's bone/skin + desert bumps + desert rheumatism + the meningitis; Paracoccidioides behaving like blastomycosis. THE THERAPY LADDER: local disease — fluconazole or itraconazole; systemic disease — amphotericin B. And the exam pair: granulomas like TB, but NEVER transmitted person-to-person (unlike TB).",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 34-year-old cave explorer from Kentucky develops fever, cough, and hilar lymphadenopathy; weeks later he has painful ulcers on the tongue and palate, splenomegaly, and pancytopenia. A urine antigen test is positive.",
        discriminator: "Ohio River Valley + caves (bird/bat droppings) + macrophage organism + urine antigen",
        concept: "Disseminated histoplasmosis",
        answer:
          "Histoplasma: the dimorphic fungus of the Mississippi and Ohio River Valleys, associated with bird or bat droppings (eg, caves). On tissue it is the macrophage-filled organism smaller than an RBC (tuberculate macroconidia on culture). Systemic signs: palatal/tongue ulcers, splenomegaly, pancytopenia, erythema nodosum. Diagnosis via urine/serum antigen. Treat local disease with fluconazole or itraconazole; systemic disease with amphotericin B.",
      },
      {
        stem: "A 28-year-old man from Arizona presents with fever, dry cough, and myalgias 2 weeks after helping at an archeological excavation; he has tender shin nodules (erythema nodosum) and painful knees; CSF analysis later shows lymphocytic pleocytosis with low glucose.",
        discriminator: "Desert Southwest dust exposure (excavation) + erythema nodosum + arthralgias + meningitis",
        concept: "Coccidioidomycosis — the spherule exception",
        answer:
          "Coccidioides: the dimorphic EXCEPTION — a spherule (not yeast) in tissue, much larger than an RBC, filled with endospores. Endemic to the Southwestern US and California; associated with dust exposure (archeological excavations, earthquakes). Disseminates to bone/skin; erythema nodosum (desert bumps) or multiforme; arthralgias (desert rheumatism); can cause meningitis (the lymphocytic-pleocytosis, low-glucose CSF).",
      },
      {
        stem: "A 55-year-old man from Mississippi presents with a chronic verrucous skin lesion on the face that has grown over 6 months; biopsy shows broad-based budding yeasts the size of an RBC; imaging also shows a lytic rib lesion.",
        discriminator: "Broad-based budding (same size as RBC) + verrucous lesion mimicking SCC + bone dissemination",
        concept: "Blastomycosis — the broad-based bud",
        answer:
          "Blastomyces: the dimorphic fungus of the Eastern and Central US and Great Lakes. On tissue: broad-based budding, same size as an RBC. Inflammatory lung disease that disseminates to bone/skin — the verrucous lesions may mimic SCC (the biopsy distinguishes them). Treat local disease with fluconazole or itraconazole; systemic with amphotericin B.",
      },
    ],
    traps: [
      {
        a: "Systemic mycoses spread person to person like TB",
        b: "Systemic mycoses can form granulomas (like TB) but CANNOT be transmitted person-to-person (unlike TB)",
        whyConfused: "The granulomatous histology and the lung presentation invite the TB analogy.",
        keyDifference:
          "The pair is printed as a contrast: like TB in the granuloma, unlike TB in the transmission. The exposure is always environmental — bird/bat droppings in river valleys, Great Lakes, desert dust, Latin America. The therapy ladder follows depth, not contagion: fluconazole or itraconazole for local infection; amphotericin B for systemic.",
        clue: "Any mycosis-vs-TB comparison question.",
      },
      {
        a: "All dimorphic fungi become yeast in tissue",
        b: "Cold (20°C) = mold; heat (37°C) = yeast — the ONLY exception is Coccidioides, which is a SPHERULE (not yeast) in tissue",
        whyConfused: "The dimorphic rule is taught as a two-form rule.",
        keyDifference:
          "The exception IS the exam point: the spherule filled with endospores, much larger than an RBC, is the tissue form of Coccidioides — the answer to 'which systemic mycosis is not a yeast in tissue?' and the morphology that separates it from Paracoccidioides's captain's wheel (the other much-larger-than-RBC form, also not a plain yeast in the classic sense but a budding yeast).",
        clue: "Any dimorphism or tissue-form question.",
      },
      {
        a: "A verrucous facial lesion in an older patient is squamous cell carcinoma until proven otherwise",
        b: "Blastomyces disseminates to bone/skin with verrucous lesions that may mimic SCC — the broad-based budding yeast (same size as RBC) on biopsy is the discriminator",
        whyConfused: "The lesion looks identical to a cancer clinically.",
        keyDifference:
          "The biopsy converts the mimic: broad-based budding, same size as an RBC = Blastomyces; treat with fluconazole or itraconazole (local) or amphotericin B (systemic) — not excision alone. The geography (Eastern and Central US, Great Lakes) and the inflammatory lung disease complete the blastomycosis picture.",
        clue: "Any verrucous-lesion or SCC-mimic question.",
      },
    ],
    pivots: [
      {
        lookAlike: "Much-larger-than-RBC pair (Coccidioides vs Paracoccidioides)",
        differentiator: "Spherule with endospores + the desert Southwest vs captain's wheel + Latin America (males > females)",
        correctPath:
          "COCCIDIOIDES: the spherule filled with endospores (the dimorphic exception); Southwestern US, California; dust exposure (archeological excavations, earthquakes); bone/skin dissemination + desert bumps + desert rheumatism + meningitis. PARACOCCIDIOIDES: the budding yeast with the captain's-wheel formation; Latin America; similar to blastomycosis, males > females.",
      },
      {
        lookAlike: "Local vs systemic therapy (the mycosis ladder)",
        differentiator: "Fluconazole/itraconazole vs amphotericin B",
        correctPath:
          "LOCAL infection: fluconazole or itraconazole. SYSTEMIC infection (disseminated disease, meningitis): amphotericin B — with the Coccidioides meningitis line as the depth marker that forces the systemic drug.",
      },
    ],
    miniCase: {
      vignette:
        "A 41-year-old man presents with 6 weeks of low-grade fever, night sweats, nonproductive cough, and 10 lb weight loss. He spent the summer on a houseboat on the Ohio River and helped clear a bat roost from an attic in Kentucky. Examination shows 0.5-1 cm ulcers on the tongue and hard palate, splenomegaly 4 cm below the costal margin, and tender red nodules over both shins. CBC: WBC 2.1 with neutrophils 40%, hemoglobin 10.2, platelets 88,000. Chest imaging shows bilateral hilar lymphadenopathy with patchy infiltrates; a urine antigen test is sent.",
      question:
        "Which of the following findings would most likely be present on histopathology of the affected tissue?",
      options: [
        {
          label: "A",
          text: "Macrophages filled with numerous 2-4 μm yeasts smaller than an RBC",
          correct: true,
          why: "Correct. This is disseminated histoplasmosis: the Ohio River Valley geography, the bat roost exposure, the tongue/palatal ulcers, splenomegaly, pancytopenia (the RES display), and erythema nodosum — with the urine/serum antigen as the diagnostic test. On tissue, Histoplasma is the macrophage-filled organism smaller than an RBC (tuberculate macroconidia on culture). Systemic disease is treated with amphotericin B.",
        },
        {
          label: "B",
          text: "Broad-based budding yeasts the same size as an RBC",
          why: "That is BLASTOMYCES — the Great Lakes/Eastern-Central-US organism whose inflammatory lung disease disseminates to bone and skin with verrucous SCC-mimicking lesions. The distractor borrows the same-size-as-RBC slot on the size axis.",
        },
        {
          label: "C",
          text: "Large spherules filled with endospores, much larger than an RBC",
          why: "That is COCCIDIOIDES — the dimorphic exception (spherule, not yeast, in tissue) of the desert Southwest, whose story is dust exposure with desert bumps and desert rheumatism. The distractor takes the much-larger-than-RBC slot.",
        },
        {
          label: "D",
          text: "Budding yeast in a captain's-wheel formation around a large mother cell",
          why: "That is PARACOCCIDIOIDES — Latin America, males > females, similar to blastomycosis. The distractor takes the other much-larger-than-RBC form.",
        },
        {
          label: "E",
          text: "Caseating granulomas with acid-fast bacilli",
          why: "The granuloma comparison is real — systemic mycoses can form granulomas (like TB) — but the transmission differs (NOT person-to-person) and the organism here is never acid-fast. The distractor imports TB wholesale onto the mycosis rule.",
        },
      ],
      reasoning:
        "The vignette stacks Histoplasma's identifiers: the Ohio River Valley with a bat roost (bird/bat droppings), the ulcers on the tongue and palate, the splenomegaly with pancytopenia (the macrophage-dweller's RES display), the erythema nodosum over the shins, and the urine antigen test. The size axis then resolves the histology: smaller than an RBC, inside macrophages. Each distractor takes another slot on the size axis (Blastomyces same-size broad-based; Coccidioides the spherule; Paracoccidioides the captain's wheel) or imports TB's caseation and acid-fastness — the mycoses form granulomas like TB but are never acid-fast and never transmitted person-to-person.",
      },
    },
  mnemonics: [
    {
      code: "“The temperature names the form: cold makes mold, heat makes yeast — and the desert makes the one exception, the spherule.”",
      meaning:
        "KYP's key for the dimorphic rule: cold (20°C) = mold; heat (37°C) = yeast; Coccidioides is the only exception — a spherule (not yeast) in tissue. The therapy ladder follows depth: fluconazole or itraconazole for local infection; amphotericin B for systemic. Granulomas like TB, but not transmitted person-to-person.",
      memorizes: "The dimorphic rule and its exception",
      whenToUse: "Any form-or-therapy question in mycology.",
      clinical: "The exception and the ladder are the two most-tested lines of the block.",
    },
    {
      code: "“Size the yeast against the red cell: smaller hides in macrophages, the same size buds broadly, and much larger is a spherule or a steering wheel.”",
      meaning:
        "KYP's key for the size axis: smaller than RBC = Histoplasma (within macrophages; urine/serum antigen); same size as RBC = Blastomyces (broad-based budding; bone/skin verrucous lesions that may mimic SCC); much larger than RBC = the Coccidioides spherule or the Paracoccidioides captain's wheel (males > females, Latin America). FA's printed mnemonics (Histo hides; Blasto buds broadly; Paracoccidio parasails) are verification-only and stay in the table block.",
      memorizes: "The four systemic mycoses on the size axis",
      whenToUse: "Any histology-or-identification question.",
      clinical: "The biopsy is the size axis applied to tissue.",
    },
    {
      code: "“Ask the map before the smear: the river valleys hide in macrophages, the Great Lakes bud broadly, the desert makes spherules in the dust, and Latin America sails the wheel.”",
      meaning:
        "KYP's key for the geography-exposure pair: Mississippi and Ohio River Valleys + bird/bat droppings (caves) = Histoplasma; Eastern and Central US + Great Lakes = Blastomyces; Southwestern US + dust (archeological excavations, earthquakes) = Coccidioides (desert bumps, desert rheumatism, meningitis); Latin America + males > females = Paracoccidioides. The printed US endemic map is described-in-text only; the geography lives in the ENDEMIC column.",
      memorizes: "The endemic map",
      whenToUse: "Any travel-or-exposure stem.",
      clinical: "The geography plus the organ destination (bone/skin, meninges) names the therapy depth.",
    },
  ],
  rapidReview: {
    s30: [
      "Dimorphic: cold 20°C = mold; heat 37°C = yeast; the only exception = the Coccidioides spherule in tissue",
      "Systemic mycoses: granulomas like TB, but NOT transmitted person-to-person",
      "Therapy: fluconazole or itraconazole local · amphotericin B systemic",
      "Histoplasma: smaller than RBC (in macrophages) · Mississippi/Ohio River Valleys · bird or bat droppings",
      "Blastomyces: same size as RBC, broad-based budding · Great Lakes · verrucous lesions may mimic SCC",
    ],
    m3: [
      "Histoplasma systemic signs: palatal/tongue ulcers, splenomegaly, pancytopenia, erythema nodosum; diagnosis via urine/serum antigen; tuberculate macroconidia on culture",
      "Coccidioides: much larger than RBC spherule with endospores · Southwestern US/California · dust (excavations, earthquakes) · bone/skin + meningitis",
      "Coccidioides phenomenology: erythema nodosum (desert bumps) or multiforme; arthralgias (desert rheumatism)",
      "Paracoccidioides: captain's-wheel budding yeast (much larger than RBC) · Latin America · similar to blastomycosis, males > females",
      "All four: pneumonia that can disseminate — the dimorphic opening rule",
    ],
    m10: [
      "The size axis on tissue: smaller than RBC = histo · same size = blasto · much larger = spherule or captain's wheel",
      "The geography axis: river valleys / Great Lakes / desert Southwest / Latin America — the printed US map (legend typo Coccidiodomycosis, one d) described-in-text only",
      "Blastomyces bone/skin: verrucous lesions may mimic SCC — biopsy shows broad-based budding",
      "Coccidioides is the only systemic mycosis with a meninges destination — the depth that forces amphotericin B",
      "The TB pair: granulomas like TB; transmission NEVER person-to-person",
    ],
  },
  recall: [
    {
      q: "State the dimorphic rule, its exception, the TB pair, and the therapy ladder.",
      a: "All systemic mycoses cause pneumonia and can disseminate; all are dimorphic — cold (20°C) = mold, heat (37°C) = yeast — with Coccidioides the only exception: a spherule (not yeast) in tissue. They form granulomas (like TB) but cannot be transmitted person-to-person (unlike TB). Treatment: fluconazole or itraconazole for local infection; amphotericin B for systemic infection.",
    },
    {
      q: "Walk the four diseases on the size, geography, and dissemination axes.",
      a: "HISTOPLASMOSIS: Mississippi and Ohio River Valleys; bird/bat droppings (caves); macrophage filled with Histoplasma (smaller than RBC), tuberculate macroconidia on culture; palatal/tongue ulcers, splenomegaly, pancytopenia, erythema nodosum; urine/serum antigen. BLASTOMYCOSIS: Eastern and Central US, Great Lakes; broad-based budding (same size as RBC); inflammatory lung disease; bone/skin dissemination with verrucous lesions that may mimic SCC. COCCIDIOIDOMYCOSIS: Southwestern US, California; spherule with endospores (much larger than RBC); bone/skin + erythema nodosum (desert bumps) or multiforme + arthralgias (desert rheumatism) + meningitis; dust exposure (archeological excavations, earthquakes). PARACOCCIDIOIDOMYCOSIS: Latin America; captain's-wheel budding yeast (much larger than RBC); similar to blastomycosis, males > females.",
    },
    {
      q: "Which systemic mycosis is the dimorphic exception, and what is its tissue form?",
      a: "Coccidioides — a spherule (not yeast) in tissue, filled with endospores, much larger than an RBC. The desert Southwest organism (dust exposure; desert bumps; desert rheumatism; the only one of the four with a meningitis destination).",
    },
    {
      q: "How do you diagnose disseminated histoplasmosis, and why that route?",
      a: "Diagnosis via urine/serum antigen — because Histoplasma hides within macrophages (smaller than an RBC on tissue), the organism's display runs through the reticuloendothelial system: palatal/tongue ulcers, splenomegaly, pancytopenia, erythema nodosum. Tuberculate macroconidia appear on culture.",
    },
    {
      q: "What distinguishes Blastomyces's skin lesions, and why does it matter?",
      a: "Verrucous lesions that may mimic squamous cell carcinoma — disseminating to bone/skin after inflammatory lung disease. The biopsy resolves the mimic: broad-based budding yeasts the same size as an RBC. Therapy by depth: fluconazole/itraconazole local; amphotericin B systemic.",
    },
  ],
  related: [
    {
      title: "Intracellular & Vector-Borne Bacteria: Chlamydia, Rickettsia, Mycoplasma",
      topicId: "intracellular-bacteria",
      note: "M15's granuloma-forming rickettsiales share the TB-comparison axis — this note's mycoses form granulomas like TB too, closing the lookalike loop across kingdoms.",
    },
    {
      title: "Mycobacteria: Tuberculosis & Leprosy",
      topicId: "mycobacteria",
      note: "M11's TB spectrum is the comparison anchor: the mycoses form granulomas like TB but are never transmitted person-to-person — the pair this note prints as its own rule.",
    },
    {
      title: "Exotoxins vs Endotoxins",
      topicId: "exotoxins-endotoxins",
      note: "M8's axis returns in the therapy sense: the local-vs-systemic ladder (fluconazole/itraconazole vs amphotericin B) is depth-based, the same way toxin-based therapy ladders run through the M-series.",
    },
  ],
  crossLinks: [
    {
      subject: "Pulmonology (Granulomatous disease)",
      connection: "The granuloma comparison: systemic mycoses form granulomas like TB (hilar lymphadenopathy, infiltrates) without person-to-person transmission — the differential anchor for every chronic granulomatous lung question.",
    },
    {
      subject: "Dermatology (Erythema nodosum)",
      connection: "Erythema nodosum appears in both Histoplasma (with the RES display) and Coccidioides (the desert bumps) — the shin-nodules clue that pairs with sarcoidosis and streptococcal pharyngitis in the differential.",
    },
    {
      subject: "Hematology (Pancytopenia)",
      connection: "Histoplasma's RES display — splenomegaly with pancytopenia — is the mycology anchor for marrow-infiltration questions: the macrophage-dweller consuming the reticuloendothelial system.",
    },
    {
      subject: "Infectious Disease (Meningitis)",
      connection: "Coccidioides is the only systemic mycosis with a meninges destination — the lymphocytic-pleocytosis, low-glucose CSF that forces the amphotericin B arm of the ladder.",
    },
  ],
};
