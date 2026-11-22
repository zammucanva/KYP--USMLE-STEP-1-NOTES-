import type { KypUsMLENote } from "../types";

// Microbiology — MYCOLOGY banner (M-batch 17).
// Source: First Aid 2026, Part 1 pdf 172 / book 150
//  (Opportunistic fungal infections: Candida albicans, Aspergillus fumigatus,
//   Cryptococcus neoformans, Mucor and Rhizopus spp — with the 9-marker
//   photo grid whose pdfimages-vs-display discrepancy is documented).

export const opportunisticFungi: KypUsMLENote = {
  id: "opportunistic-fungi",
  title: "Opportunistic Fungi: Aspergillus, Cryptococcus, Candida, Mucor",
  subtitle:
    "The opportunistic mycoses organized by THE MORPHOLOGY PANEL. CANDIDA ALBICANS (alba = white): dimorphic — pseudohyphae and budding yeasts at 20°C, GERM TUBES at 37°C; systemic or superficial infection: oral and esophageal thrush in the immunocompromised (neonates, steroids, diabetes, AIDS), vulvovaginitis (diabetes, use of antibiotics), diaper rash, infective endocarditis (people who inject drugs), disseminated candidiasis (especially in neutropenic patients as host defense relies on phagocytes), chronic mucocutaneous candidiasis; treatment by site — oral fluconazole/topical azoles for vaginal, nystatin/azoles/rarely echinocandins for oral, fluconazole/echinocandins/amphotericin B for esophageal or systemic. ASPERGILLUS FUMIGATUS: ACUTE ANGLE (45°) branching of SEPTATE hyphae; invasive aspergillosis in the immunocompromised — especially neutrophil dysfunction (eg, chronic granulomatous disease) because Aspergillus is CATALASE ⊕; aspergillomas in pre-existing lung cavities (especially after TB); some species produce AFLATOXINS (induce TP53 mutations leading to hepatocellular carcinoma); treatment voriconazole or echinocandins (2nd-line); ABPA — hypersensitivity to Aspergillus growing in lung mucus, associated with asthma and cystic fibrosis, may cause bronchiectasis and eosinophilia. CRYPTOCOCCUS NEOFORMANS: 5-10 μm with NARROW BUDDING; HEAVILY ENCAPSULATED yeast; not dimorphic; ⊕ PAS; found in soil, pigeon droppings; acquired through inhalation with hematogenous dissemination to meninges; India ink (clear halo) and mucicarmine (red inner capsule); latex agglutination detects polysaccharide capsular antigen (more sensitive and specific); cryptococcosis — meningitis, pneumonia, and/or encephalitis (“soap bubble” lesions in brain), primarily in the immunocompromised; treatment amphotericin B + flucytosine followed by fluconazole for meningitis. MUCOR AND RHIZOPUS spp: IRREGULAR, BROAD, NONSEPTATE hyphae branching at WIDE ANGLES; mucormycosis mostly in DKA and/or neutropenia (eg, leukemia); inhalation of spores → fungi proliferate in blood vessel walls, penetrate the cribriform plate, and enter the brain; rhinocerebral, frontal lobe abscess; cavernous sinus thrombosis; headache, facial pain, black necrotic eschar on the face; may have cranial nerve involvement; treatment surgical debridement + amphotericin B or isavuconazole.",
  subject: "Microbiology",
  system: "Section II · High-Yield General Principles — Mycology",
  pilotCategory:
    "Mycology — the opportunistic set on the morphology axis (pseudohyphae with germ tubes; septate 45° acute-angle hyphae; the encapsulated narrow-budding yeast; broad nonseptate wide-angle hyphae) with the immune-context pair (neutrophil dysfunction/CGD-catalase ⊕ for Aspergillus; neutropenia for disseminated Candida; DKA for Mucor; the immunocompromised for Cryptococcus); the stain axis (India ink halo, mucicarmine red capsule, ⊕ PAS, latex agglutination); and the site-based therapy ladders",
  difficulty: 2,
  readTime: 11,
  sourceRef: "First Aid 2026, Part 1 pp. 150–150 (Opportunistic fungal infections)",
  tags: [
    "opportunistic fungi",
    "Candida albicans",
    "alba = white",
    "pseudohyphae",
    "germ tubes",
    "thrush",
    "esophageal thrush",
    "vulvovaginitis",
    "diaper rash",
    "infective endocarditis",
    "disseminated candidiasis",
    "neutropenia",
    "chronic mucocutaneous candidiasis",
    "nystatin",
    "echinocandins",
    "Aspergillus fumigatus",
    "acute angle",
    "45 degrees",
    "septate hyphae",
    "invasive aspergillosis",
    "chronic granulomatous disease",
    "catalase positive",
    "aspergilloma",
    "aflatoxins",
    "TP53",
    "hepatocellular carcinoma",
    "voriconazole",
    "ABPA",
    "allergic bronchopulmonary aspergillosis",
    "bronchiectasis",
    "eosinophilia",
    "Cryptococcus neoformans",
    "narrow budding",
    "heavily encapsulated",
    "India ink",
    "mucicarmine",
    "latex agglutination",
    "pigeon droppings",
    "soap bubble lesions",
    "cryptococcal meningitis",
    "flucytosine",
    "Mucor",
    "Rhizopus",
    "nonseptate hyphae",
    "wide angles",
    "mucormycosis",
    "DKA",
    "rhinocerebral",
    "cribriform plate",
    "cavernous sinus thrombosis",
    "black necrotic eschar",
    "isavuconazole",
    "surgical debridement",
  ],
  core: {
    what: "THE FOUR ORGANISMS ON THE MORPHOLOGY AXIS. CANDIDA ALBICANS (alba = white): dimorphic — pseudohyphae and budding yeasts at 20°C, germ tubes at 37°C; systemic or superficial: oral and esophageal thrush in the immunocompromised (neonates, steroids, diabetes, AIDS), vulvovaginitis (diabetes, use of antibiotics), diaper rash, infective endocarditis (people who inject drugs), disseminated candidiasis (especially in neutropenic patients as host defense relies on phagocytes), chronic mucocutaneous candidiasis; treatment by site — oral fluconazole or topical azoles (vaginal), nystatin/azoles/rarely echinocandins (oral), fluconazole/echinocandins/amphotericin B (esophageal or systemic). ASPERGILLUS FUMIGATUS: acute angle (45°) branching of septate hyphae; invasive aspergillosis in the immunocompromised — especially neutrophil dysfunction (eg, chronic granulomatous disease) because Aspergillus is catalase ⊕; aspergillomas in pre-existing lung cavities (especially after TB); some species produce aflatoxins (inducing TP53 mutations leading to hepatocellular carcinoma); treatment voriconazole or echinocandins (2nd-line); ABPA — the hypersensitivity response to Aspergillus growing in lung mucus, associated with asthma and cystic fibrosis, may cause bronchiectasis and eosinophilia. CRYPTOCOCCUS NEOFORMANS: 5-10 μm with narrow budding; heavily encapsulated yeast; not dimorphic; ⊕ PAS staining; found in soil, pigeon droppings; acquired through inhalation with hematogenous dissemination to the meninges; highlighted with India ink (clear halo) and mucicarmine (red inner capsule); latex agglutination detects the polysaccharide capsular antigen and is more sensitive and specific; cryptococcosis manifests with meningitis, pneumonia, and/or encephalitis (“soap bubble” lesions in brain), primarily in the immunocompromised; treatment amphotericin B + flucytosine followed by fluconazole for cryptococcal meningitis. MUCOR AND RHIZOPUS spp: irregular, broad, nonseptate hyphae branching at wide angles; mucormycosis mostly in patients with DKA and/or neutropenia (eg, leukemia); inhalation of spores → fungi proliferate in blood vessel walls, penetrate the cribriform plate, and enter the brain; rhinocerebral disease with frontal lobe abscess and cavernous sinus thrombosis; headache, facial pain, black necrotic eschar on the face; may have cranial nerve involvement; treatment surgical debridement + amphotericin B or isavuconazole.",
    why: "This block carries three exam institutions. The first is THE MORPHOLOGY AXIS: pseudohyphae with germ tubes at 37°C = Candida; septate hyphae branching at an acute 45° angle = Aspergillus; the heavily encapsulated 5-10 μm narrow-budding yeast with its India-ink clear halo = Cryptococcus; irregular broad NONseptate hyphae at wide angles = Mucor/Rhizopus — the smear names the organism before any culture returns. The second is THE IMMUNE-CONTEXT PAIR: the host defect names the organism — neutrophil dysfunction (CGD, because Aspergillus is catalase ⊕) for invasive aspergillosis; neutropenia (host defense relies on phagocytes) for disseminated candidiasis; DKA (with or without neutropenia, eg, leukemia) for mucormycosis; and the broader immunocompromise for cryptococcosis. The third is THE ROUTE-AND-STAIN SET: Cryptococcus's inhalation → hematogenous dissemination to the meninges (India ink, mucicarmine, latex agglutination for the capsular antigen; amphotericin B + flucytosine then fluconazole); Mucor's blood-vessel-wall proliferation penetrating the cribriform plate into the brain (the rhinocerebral route with cavernous sinus thrombosis and the black necrotic eschar — treated with surgical debridement); and Aspergillus's aflatoxin-TP53 line to hepatocellular carcinoma plus the ABPA hypersensitivity syndrome of asthma and cystic fibrosis.",
    keyIdea: "Run the smear, then the host. PSEUDOHYPHAE + germ tubes at 37°C = Candida (thrush in neonates/steroids/diabetes/AIDS; vulvovaginitis in diabetes and antibiotic use; endocarditis in people who inject drugs; disseminated in neutropenia; treat by site — fluconazole/azoles/nystatin/echinocandins/amphotericin B). SEPTATE hyphae at an ACUTE 45° angle = Aspergillus (invasive in neutrophil dysfunction — CGD, because it is catalase ⊕; aspergillomas in cavities after TB; aflatoxins → TP53 → HCC; voriconazole; ABPA in asthma/CF with bronchiectasis and eosinophilia). The ENCAPSULATED narrow-budding yeast (5-10 μm, not dimorphic, ⊕ PAS) of soil and PIGEON DROPPINGS = Cryptococcus (inhalation → hematogenous to meninges; India ink halo + mucicarmine red capsule; latex agglutination; soap-bubble lesions; amphotericin B + flucytosine → fluconazole). IRREGULAR BROAD NONSEPTATE hyphae at WIDE angles = Mucor/Rhizopus (DKA and/or neutropenia; vessel walls → cribriform plate → brain; rhinocerebral with frontal abscess, cavernous sinus thrombosis, black necrotic eschar; surgical debridement + amphotericin B or isavuconazole).",
  },
  mechanisms: [
    {
      id: "morphology-host-axis",
      title: "The morphology panel and the host defect that opens the door",
      context: "From the printed organism entries to the identification-and-context logic",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "An immunocompromised host with a possible fungal disease — the morphology and the host defect resolve it together",
            sublabel: "Input — the opportunistic opening.",
            variant: "input",
          },
          {
            id: "s1",
            label: "THE MORPHOLOGY AXIS: pseudohyphae with germ tubes at 37°C = Candida · septate hyphae at an acute 45° angle = Aspergillus · the heavily encapsulated 5-10 μm narrow-budding yeast (not dimorphic, ⊕ PAS) = Cryptococcus · irregular broad nonseptate hyphae at wide angles = Mucor/Rhizopus",
            sublabel: "Process — the smear names the organism.",
            variant: "process",
          },
          {
            id: "s2",
            label: "THE HOST-DEFECT AXIS: neutrophil dysfunction (eg, CGD — because Aspergillus is catalase ⊕) → invasive aspergillosis · neutropenia (host defense relies on phagocytes) → disseminated candidiasis · DKA and/or neutropenia (eg, leukemia) → mucormycosis · the broader immunocompromise → cryptococcosis (meningitis, pneumonia, encephalitis)",
            sublabel: "Process — the defect names the risk.",
            variant: "process",
          },
          {
            id: "s3",
            label: "THE ROUTE AXIS: Cryptococcus — inhalation with hematogenous dissemination to the meninges (India ink clear halo; mucicarmine red inner capsule; latex agglutination for the polysaccharide capsular antigen, more sensitive and specific) · Mucor — proliferation in blood vessel walls, penetrating the cribriform plate into the brain (rhinocerebral; frontal lobe abscess; cavernous sinus thrombosis; black necrotic eschar) · Aspergillus — aspergillomas in pre-existing cavities after TB, plus the ABPA hypersensitivity syndrome and the aflatoxin-TP53 line to hepatocellular carcinoma",
            sublabel: "Process — the route names the syndrome.",
            variant: "process",
          },
          {
            id: "o1",
            label: "OUTPUT — the therapy ladders read from site and depth: Candida by site (fluconazole/azoles vaginal; nystatin/azoles/echinocandins oral; fluconazole/echinocandins/amphotericin B esophageal-systemic) · Aspergillus voriconazole or echinocandins · Cryptococcus amphotericin B + flucytosine then fluconazole · Mucor surgical debridement + amphotericin B or isavuconazole",
            sublabel: "Output — four ladders, one rule: match the drug to the depth and the organism.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "morphology" },
          { from: "s1", to: "s2", label: "host defect" },
          { from: "s2", to: "s3", label: "route" },
          { from: "s3", to: "o1", label: "therapy ladders" },
        ],
        caption:
          "The panel runs four axes into one identification. Morphology: the four forms are so distinct that a smear alone resolves the organism — pseudohyphae with germ tubes (Candida), septate acute-angle hyphae (Aspergillus), the encapsulated narrow-budding yeast with its clear halo (Cryptococcus), and broad nonseptate wide-angle hyphae (Mucor/Rhizopus). Host defect: the door that opens — neutrophil dysfunction (the CGD-catalase ⊕ pair) for invasive aspergillosis; neutropenia (host defense relies on phagocytes) for disseminated candidiasis; DKA with or without neutropenia for mucormycosis; the broader immunocompromise for cryptococcosis. Route: Cryptococcus rides the blood to the meninges (India ink, mucicarmine, latex agglutination — the capsular antigen test that is more sensitive and specific); Mucor proliferates in blood vessel walls and penetrates the cribriform plate into the brain (the rhinocerebral route — frontal lobe abscess, cavernous sinus thrombosis, the black necrotic eschar); Aspergillus colonizes pre-existing cavities as aspergillomas after TB, drives the ABPA hypersensitivity syndrome in asthma and cystic fibrosis (bronchiectasis with eosinophilia), and produces aflatoxins that induce TP53 mutations leading to hepatocellular carcinoma. The output is the four therapy ladders, each matched to site and depth.",
      },
    },
    {
      id: "angioinvasion-route",
      title: "The two angioinvasive routes: cribriform plate and blood vessel walls",
      context: "Mucor's rhinocerebral map and Cryptococcus's meningeal map as the emergency pair",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "DKA (and/or neutropenia, eg, leukemia) plus headache and facial pain — the mucormycosis opening; or the immunocompromised host with headache and altered mentation — the cryptococcal opening",
            sublabel: "Input — the two emergencies.",
            variant: "input",
          },
          {
            id: "s1",
            label: "MUCOR: inhalation of spores → fungi proliferate in BLOOD VESSEL WALLS → penetrate the CRIBRIFORM PLATE → enter the brain — rhinocerebral disease: frontal lobe abscess, cavernous sinus thrombosis, headache, facial pain, black necrotic eschar on the face, possible cranial nerve involvement",
            sublabel: "Process — the direct angioinvasive route.",
            variant: "process",
          },
          {
            id: "s2",
            label: "CRYPTOCOCCUS: inhalation → HEMATOGENOUS dissemination to the MENINGES — meningitis, pneumonia, and/or encephalitis with “soap bubble” lesions in the brain, primarily in the immunocompromised; India ink (clear halo), mucicarmine (red inner capsule), latex agglutination for the polysaccharide capsular antigen",
            sublabel: "Process — the hematogenous meningeal route.",
            variant: "process",
          },
          {
            id: "o1",
            label: "OUTPUT — the therapies are emergencies: Mucor — SURGICAL DEBRIDEMENT + amphotericin B or isavuconazole; Cryptococcus — amphotericin B + flucytosine followed by fluconazole (the meningitis ladder)",
            sublabel: "Output — the two ladders that cannot wait.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "DKA route" },
          { from: "s1", to: "s2", label: "meningeal route" },
          { from: "s2", to: "o1", label: "emergency ladders" },
        ],
        caption:
          "The two routes are the block's emergency pair. Mucor's is direct angioinvasion: the fungi proliferate in blood vessel walls and penetrate the cribriform plate into the brain — which is why the presentation is rhinocerebral (frontal lobe abscess, cavernous sinus thrombosis) with headache, facial pain, and the black necrotic eschar on the face, and why the treatment begins with surgical debridement alongside amphotericin B or isavuconazole. Cryptococcus's is hematogenous: acquired through inhalation from soil and pigeon droppings, the organism disseminates to the meninges — meningitis, pneumonia, and/or encephalitis with the soap-bubble lesions — and the diagnostic set is the stain pair (India ink's clear halo; mucicarmine's red inner capsule) plus the latex agglutination test for the polysaccharide capsular antigen, which is more sensitive and specific than the stains. The ladders then differ by organ: amphotericin B + flucytosine followed by fluconazole for the meningitis; debridement for the angioinvasive face.",
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "opportunistic-fungi-panel",
      title: "The four organisms — morphology · diseases · therapy",
      caption:
        "An original KYP redraw of the source's opportunistic-fungi page (book 150): four organism cards (Candida albicans, Aspergillus fumigatus, Cryptococcus neoformans, Mucor and Rhizopus spp) with the morphology-disease-treatment lines, plus the morphology-axis anchors strip.",
      notice:
        "The page displays 9 photo panels (A-I): the Candida pseudohyphae (A, 20°C) and germ tubes (B, 37°C) and oral thrush (C); the Aspergillus 45° septate hyphae (D) and the aspergilloma CT (E); the Cryptococcus India-ink clear halo (F) and mucicarmine red capsule (G); the Mucor/Rhizopus wide-angle nonseptate hyphae (H) and the black necrotic facial eschar (I). pdfimages counts 5 raster XObjects vs 9 displayed panels (a grouping discrepancy documented in the census) — all COPYRIGHTED, described-in-text only. No FA cell mnemonics on this page; the morphology axis is carried as facts.",
    },
    {
      kind: "table",
      title: "The opportunistic-fungi page — verbatim",
      intro: "The source's entries (book 150), verbatim.",
      columns: ["Organism", "Content (verbatim)"],
      rows: [
        ["Candida albicans", "alba = white. Dimorphic; forms pseudohyphae and budding yeasts at 20°C A (printed micrograph — the pseudohyphae and budding yeasts; described-in-text only), germ tubes at 37°C B (printed micrograph — the germ tubes; described-in-text only). Systemic or superficial fungal infection. Causes oral C (printed photo — the oral thrush; described-in-text only) and esophageal thrush in immunocompromised (neonates, steroids, diabetes, AIDS), vulvovaginitis (diabetes, use of antibiotics), diaper rash, infective endocarditis (people who inject drugs), disseminated candidiasis (especially in neutropenic patients as host defense relies on phagocytes), chronic mucocutaneous candidiasis. Treatment: oral fluconazole/topical azoles for vaginal; nystatin, azoles, or, rarely, echinocandins for oral; fluconazole, echinocandins, or amphotericin B for esophageal or systemic disease."],
        ["Aspergillus fumigatus", "Acute angle (45°) D (printed micrograph — the septate hyphae at acute angles; described-in-text only) branching of septate hyphae. Causes invasive aspergillosis in immunocompromised patients, especially those with neutrophil dysfunction (eg, chronic granulomatous disease) because Aspergillus is catalase ⊕. Can cause aspergillomas E (printed imaging — the fungal ball; described-in-text only) in pre-existing lung cavities, especially after TB infection. Some species of Aspergillus produce aflatoxins (induce TP53 mutations leading to hepatocellular carcinoma). Treatment: voriconazole or echinocandins (2nd-line). Allergic bronchopulmonary aspergillosis (ABPA)—hypersensitivity response to Aspergillus growing in lung mucus. Associated with asthma and cystic fibrosis; may cause bronchiectasis and eosinophilia."],
        ["Cryptococcus neoformans", "5-10 μm with narrow budding. Heavily encapsulated yeast. Not dimorphic. ⊕ PAS staining. Found in soil, pigeon droppings. Acquired through inhalation with hematogenous dissemination to meninges. Highlighted with India ink (clear halo F (printed micrograph — the India-ink halo; described-in-text only)) and mucicarmine (red inner capsule G (printed micrograph — the mucicarmine capsule; described-in-text only)). Latex agglutination test detects polysaccharide capsular antigen and is more sensitive and specific. Causes cryptococcosis, which can manifest with meningitis, pneumonia, and/or encephalitis (“soap bubble” lesions in brain), primarily in immunocompromised. Treatment: amphotericin B + flucytosine followed by fluconazole for cryptococcal meningitis."],
        ["Mucor and Rhizopus spp", "Irregular, broad, nonseptate hyphae branching at wide angles H (printed micrograph — the wide-angle nonseptate hyphae; described-in-text only). Causes mucormycosis, mostly in patients with DKA and/or neutropenia (eg, leukemia). Inhalation of spores → fungi proliferate in blood vessel walls, penetrate cribriform plate, and enter brain. Rhinocerebral, frontal lobe abscess; cavernous sinus thrombosis. Headache, facial pain, black necrotic eschar on face I (printed photo — the black necrotic eschar; described-in-text only); may have cranial nerve involvement. Treatment: surgical debridement, amphotericin B or isavuconazole."],
      ],
      caption:
        "The table reads with the visual: each organism's row carries its morphology, its host defect, its route, and its therapy ladder verbatim — the printed photos' pointers (A-I) carried verbatim, the photographs described-in-text only. The photo grid's pdfimages-vs-display discrepancy (5 XObjects vs 9 panels) is documented in the census; the markers are carried inline where they print.",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "The protocols the panel implies",
      body: "THE CANDIDA PROTOCOL: pseudohyphae with budding yeasts at 20°C, germ tubes at 37°C; thrush in the immunocompromised (neonates, steroids, diabetes, AIDS); vulvovaginitis in diabetes and antibiotic use; endocarditis in people who inject drugs; disseminated disease in neutropenia (host defense relies on phagocytes); treat by site — fluconazole or topical azoles (vaginal), nystatin/azoles/rarely echinocandins (oral), fluconazole/echinocandins/amphotericin B (esophageal or systemic). THE ASPERGILLUS PROTOCOL: septate hyphae at an acute 45° angle; invasive disease in neutrophil dysfunction (CGD — because Aspergillus is catalase ⊕); aspergillomas in pre-existing cavities after TB; voriconazole (echinocandins 2nd-line); ABPA in asthma and cystic fibrosis (bronchiectasis, eosinophilia); aflatoxins → TP53 → hepatocellular carcinoma. THE CRYPTOCOCCUS PROTOCOL: the encapsulated narrow-budding yeast of soil and pigeon droppings; inhalation → hematogenous dissemination to the meninges; India ink (clear halo) + mucicarmine (red inner capsule) + latex agglutination (the capsular antigen — more sensitive and specific); soap-bubble lesions; amphotericin B + flucytosine followed by fluconazole. THE MUCOR PROTOCOL: irregular broad nonseptate hyphae at wide angles; DKA and/or neutropenia; angioinvasion of the blood vessel walls through the cribriform plate into the brain; rhinocerebral disease — frontal lobe abscess, cavernous sinus thrombosis, headache, facial pain, black necrotic eschar, cranial nerve involvement; SURGICAL DEBRIDEMENT + amphotericin B or isavuconazole.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 19-year-old man with a history of intravenous drug use develops fever and a new murmur; blood cultures grow germ-tube-positive budding yeasts; echocardiography shows a large tricuspid-valve vegetation.",
        discriminator: "Germ tubes at 37°C + endocarditis in a person who injects drugs",
        concept: "Candida albicans — the germ-tube endocarditis",
        answer:
          "Candida albicans (alba = white): dimorphic — pseudohyphae and budding yeasts at 20°C, germ tubes at 37°C. Infective endocarditis in people who inject drugs is one of its sites (with thrush in the immunocompromised, vulvovaginitis in diabetes and antibiotic use, diaper rash, disseminated disease in neutropenia, and chronic mucocutaneous candidiasis). Esophageal or systemic disease: fluconazole, echinocandins, or amphotericin B.",
      },
      {
        stem: "A 31-year-old man with poorly controlled type 1 diabetes presents with 2 days of severe headache, facial pain, and black crusting of the nasal turbinates; CT shows a frontal lobe abscess and opacification of the sinuses; biopsy of the eschar shows irregular broad nonseptate hyphae at wide angles.",
        discriminator: "DKA + rhinocerebral disease + black necrotic eschar + wide-angle nonseptate hyphae",
        concept: "Mucormycosis — the angioinvasive route",
        answer:
          "Mucor and Rhizopus spp: irregular, broad, nonseptate hyphae branching at wide angles. Mucormycosis mostly in DKA and/or neutropenia (eg, leukemia): inhalation of spores → fungi proliferate in blood vessel walls, penetrate the cribriform plate, and enter the brain — rhinocerebral disease with frontal lobe abscess, cavernous sinus thrombosis, headache, facial pain, and the black necrotic eschar, with possible cranial nerve involvement. Treatment: SURGICAL DEBRIDEMENT + amphotericin B or isavuconazole.",
      },
      {
        stem: "A 27-year-old woman with AIDS (CD4 40) presents with 2 weeks of headache, photophobia, and low-grade fever; CSF shows lymphocytic pleocytosis with low glucose; an India ink preparation reveals yeasts with clear halos, and a latex agglutination test for capsular antigen is positive.",
        discriminator: "AIDS + India-ink clear halos + latex agglutination capsular antigen + lymphocytic low-glucose CSF",
        concept: "Cryptococcal meningitis — the encapsulated yeast",
        answer:
          "Cryptococcus neoformans: 5-10 μm with narrow budding; heavily encapsulated; not dimorphic; ⊕ PAS; found in soil, pigeon droppings; acquired through inhalation with hematogenous dissemination to the meninges. India ink shows the clear halo; mucicarmine the red inner capsule; latex agglutination (polysaccharide capsular antigen) is more sensitive and specific. The “soap bubble” lesions may accompany the meningitis. Treatment: amphotericin B + flucytosine followed by fluconazole.",
      },
    ],
    traps: [
      {
        a: "Aspergillus is the fungus of diabetic ketoacidosis",
        b: "DKA (with or without neutropenia) is MUCOR/RHIZOPUS territory — Aspergillus's host defect is NEUTROPHIL DYSFUNCTION (eg, CGD), because Aspergillus is catalase ⊕",
        whyConfused: "Both are molds with hyphae, and both infect the immunocompromised.",
        keyDifference:
          "The morphology separates them at the smear: Aspergillus = SEPTATE hyphae at an ACUTE 45° angle; Mucor/Rhizopus = IRREGULAR, BROAD, NONSEPTATE hyphae at WIDE angles. The host separates them at the door: CGD (catalase ⊕) vs DKA. And the route separates them at the target: aspergillomas in pre-existing cavities (after TB) vs angioinvasion through the cribriform plate into the brain with the black necrotic eschar.",
        clue: "Any mold-in-the-immunocompromised question.",
      },
      {
        a: "A positive India ink test identifies a dimorphic fungus",
        b: "Cryptococcus is NOT dimorphic — it is the heavily encapsulated yeast (5-10 μm, narrow budding, ⊕ PAS) of soil and pigeon droppings; the India ink clear halo is its capsule",
        whyConfused: "The systemic-mycoses block (M16) teaches dimorphism as the default.",
        keyDifference:
          "The opportunistic block runs on its own axes: the India ink halo + mucicarmine red capsule + the latex agglutination capsular antigen (more sensitive and specific) identify Cryptococcus; the germ tube at 37°C identifies Candida; the 45° septate hyphae identify Aspergillus; the wide-angle nonseptate hyphae identify Mucor. None of the four is identified by the temperature-dimorphism axis — Cryptococcus is explicitly not dimorphic.",
        clue: "Any opportunistic-fungus identification question.",
      },
      {
        a: "Mucormycosis is treated with antifungals alone",
        b: "Mucormycosis requires SURGICAL DEBRIDEMENT plus amphotericin B or isavuconazole — the angioinvasive disease will not clear with medicine alone",
        whyConfused: "Most fungal therapy ladders are drug-only.",
        keyDifference:
          "The rhinocerebral route (blood vessel walls → cribriform plate → frontal lobe abscess with cavernous sinus thrombosis) is a surgical disease: the debridement is part of the protocol alongside amphotericin B or isavuconazole. Compare the other ladders: Candida by site (oral fluconazole/azoles vaginal; nystatin oral; fluconazole/echinocandins/amphotericin B esophageal-systemic); Aspergillus voriconazole or echinocandins; Cryptococcus amphotericin B + flucytosine then fluconazole.",
        clue: "Any mucormycosis management question.",
      },
    ],
    pivots: [
      {
        lookAlike: "Septate 45° vs nonseptate wide angles (the mold pair)",
        differentiator: "Aspergillus's septate acute angle vs Mucor/Rhizopus's broad nonseptate wide angle",
        correctPath:
          "ASPERGILLUS FUMIGATUS: septate hyphae branching at an acute 45° angle; host = neutrophil dysfunction (CGD — catalase ⊕); aspergillomas in pre-existing cavities after TB; ABPA in asthma/CF (bronchiectasis, eosinophilia); aflatoxins → TP53 → HCC; voriconazole or echinocandins. MUCOR AND RHIZOPUS: irregular, broad, nonseptate hyphae at wide angles; host = DKA and/or neutropenia; angioinvasion through the cribriform plate into the brain — rhinocerebral, frontal lobe abscess, cavernous sinus thrombosis, black necrotic eschar; SURGICAL DEBRIDEMENT + amphotericin B or isavuconazole.",
      },
      {
        lookAlike: "The yeast pair in the immunocompromised (Candida vs Cryptococcus)",
        differentiator: "Germ tubes at 37°C vs the encapsulated clear halo",
        correctPath:
          "CANDIDA ALBICANS: dimorphic — pseudohyphae and budding yeasts at 20°C, germ tubes at 37°C; thrush, vulvovaginitis, diaper rash, endocarditis in people who inject drugs, disseminated disease in neutropenia; therapy by site. CRYPTOCOCCUS NEOFORMANS: 5-10 μm narrow budding, heavily encapsulated, NOT dimorphic, ⊕ PAS; soil and pigeon droppings; hematogenous dissemination to the meninges; India ink + mucicarmine + latex agglutination; amphotericin B + flucytosine then fluconazole.",
      },
    ],
    miniCase: {
      vignette:
        "A 24-year-old man with type 1 diabetes presents from the emergency department with 3 days of worsening headache, right facial pain, and diplopia. He ran out of insulin 5 days ago; glucose is 520 mg/dL with ketones and pH 7.18. Examination shows right periorbital swelling, decreased sensation in the V1 and V2 distributions, and a black crust on the right nasal turbinate. Noncontrast head CT shows right frontal lobe hypodensity and sinus opacification; the exam documents a hard palate midline ulceration.",
      question:
        "Which of the following findings would most likely be present on histopathology of the nasal crust?",
      options: [
        {
          label: "A",
          text: "Irregular, broad, nonseptate hyphae branching at wide angles",
          correct: true,
          why: "Correct. This is rhinocerebral mucormycosis: the DKA (pH 7.18 with ketones), the V1/V2 involvement, the diplopia (cavernous sinus thrombosis), the black necrotic eschar, and the frontal lobe hypodensity — the angioinvasive route (blood vessel walls → cribriform plate → brain). Mucor and Rhizopus show irregular, broad, nonseptate hyphae at wide angles. Treatment: surgical debridement + amphotericin B or isavuconazole.",
        },
        {
          label: "B",
          text: "Septate hyphae branching at acute 45° angles",
          why: "That is ASPERGILLUS — the neutrophil-dysfunction organism (CGD, because it is catalase ⊕) of aspergillomas and ABPA. The distractor borrows the mold slot but with the wrong angle and the wrong host defect; the smear (septate vs nonseptate) is the separator.",
        },
        {
          label: "C",
          text: "Budding yeasts with germ tubes",
          why: "That is CANDIDA at 37°C — the thrush/vulvovaginitis/endocarditis organism. The distractor takes the yeast slot; Candida does not produce the rhinocerebral angioinvasive syndrome, and neutropenia (not DKA alone) is its disseminated-disease door.",
        },
        {
          label: "D",
          text: "Encapsulated yeasts with narrow budding in a clear halo",
          why: "That is CRYPTOCOCCUS — the India-ink halo of the meningeal route (soil and pigeon droppings). The distractor takes the third morphology slot; cryptococcosis is a meningitis-encephalitis syndrome, not an angioinvasive facial disease.",
        },
        {
          label: "E",
          text: "Spherules filled with endospores",
          why: "That is COCCIDIOIDES (M16's dimorphic exception) — the desert Southwest organism with its dust exposure. The distractor imports the systemic mycoses block into the opportunistic block.",
        },
      ],
      reasoning:
        "The vignette stacks Mucor's identifiers: the insulin-deficient DKA, the V1/V2 and diplopia findings (cavernous sinus thrombosis), the black necrotic eschar, and the frontal lobe hypodensity — the rhinocerebral angioinvasive route (blood vessel walls → cribriform plate → brain). The histology answer is the wide-angle nonseptate hyphae. Each distractor takes another morphology slot on the panel — Aspergillus's septate 45° (wrong host and wrong route), Candida's germ tubes (the yeast slot), Cryptococcus's clear halo (the meningeal slot), or Coccidioides's spherule (the systemic-mycoses import).",
      },
    },
  mnemonics: [
    {
      code: "“The angle names the mold: sharp septate at 45° is Aspergillus; wide and nonseptate is the DKA fungus.”",
      meaning:
        "KYP's key for the mold pair: Aspergillus = SEPTATE hyphae at an ACUTE 45° angle (host: neutrophil dysfunction, CGD — because it is catalase ⊕; aspergillomas in cavities after TB; ABPA in asthma/CF; aflatoxins → TP53 → HCC; voriconazole). Mucor/Rhizopus = IRREGULAR, BROAD, NONSEPTATE hyphae at WIDE angles (host: DKA and/or neutropenia; angioinvasion through the cribriform plate; rhinocerebral with the black necrotic eschar; surgical debridement + amphotericin B or isavuconazole).",
      memorizes: "The mold pair on the morphology axis",
      whenToUse: "Any hyphal-organism or immunocompromised-host question.",
      clinical: "The host defect (CGD vs DKA) is the second half of the identification.",
    },
    {
      code: "“The yeast pair splits by temperature and capsule: germ tubes at body heat, a clear halo at the meninges.”",
      meaning:
        "KYP's key for the yeast pair: Candida albicans (alba = white) is dimorphic — pseudohyphae and budding yeasts at 20°C, GERM TUBES at 37°C (thrush, vulvovaginitis, endocarditis in people who inject drugs, disseminated in neutropenia; therapy by site). Cryptococcus neoformans is the heavily encapsulated 5-10 μm narrow-budding yeast, NOT dimorphic, ⊕ PAS, of soil and pigeon droppings — hematogenous to the meninges (India ink clear halo, mucicarmine red capsule, latex agglutination; amphotericin B + flucytosine then fluconazole).",
      memorizes: "The opportunistic yeast pair",
      whenToUse: "Any yeast-in-the-immunocompromised question.",
      clinical: "Germ tube = Candida at 37°C; clear halo = Cryptococcus in CSF.",
    },
    {
      code: "“Match the door to the organism: the catalase-positive mold takes the CGD patient, the phagocyte-dependent yeast takes the neutropenic, the DKA mold takes the cribriform plate, and the encapsulated yeast takes the meninges.”",
      meaning:
        "KYP's key for the host-defect axis: neutrophil dysfunction (CGD — Aspergillus is catalase ⊕) → invasive aspergillosis; neutropenia (host defense relies on phagocytes) → disseminated candidiasis; DKA and/or neutropenia → mucormycosis (the angioinvasive route); the broader immunocompromise → cryptococcosis (the meningeal route). The therapy ladders then read from site and depth: by-site fluconazole/azoles/nystatin/echinocandins/amphotericin B (Candida); voriconazole (Aspergillus); amphotericin B + flucytosine then fluconazole (Cryptococcus); surgical debridement + amphotericin B or isavuconazole (Mucor).",
      memorizes: "The host-defect and therapy axes",
      whenToUse: "Any opportunistic-infection question in a specific host.",
      clinical: "Ask what the host lacks; the organism answers.",
    },
  ],
  rapidReview: {
    s30: [
      "Candida: pseudohyphae + budding yeasts at 20°C; GERM TUBES at 37°C (alba = white)",
      "Aspergillus: SEPTATE hyphae at an acute 45° angle; host = neutrophil dysfunction (CGD — catalase ⊕)",
      "Cryptococcus: 5-10 μm narrow budding; heavily encapsulated; NOT dimorphic; ⊕ PAS; soil + pigeon droppings",
      "Mucor/Rhizopus: IRREGULAR BROAD NONSEPTATE hyphae at WIDE angles; host = DKA and/or neutropenia",
      "All four are opportunists — the host defect names the organism",
    ],
    m3: [
      "Candida diseases: thrush (neonates, steroids, diabetes, AIDS), vulvovaginitis (diabetes, antibiotics), diaper rash, endocarditis (people who inject drugs), disseminated (neutropenia — phagocyte defense), chronic mucocutaneous",
      "Candida therapy by site: fluconazole/topical azoles vaginal · nystatin/azoles/echinocandins oral · fluconazole/echinocandins/amphotericin B esophageal-systemic",
      "Aspergillus: invasive in CGD (catalase ⊕); aspergillomas in pre-existing cavities after TB; aflatoxins → TP53 → hepatocellular carcinoma; voriconazole or echinocandins (2nd-line)",
      "ABPA: hypersensitivity to Aspergillus growing in lung mucus; asthma and cystic fibrosis; bronchiectasis and eosinophilia",
      "Cryptococcus: inhalation → hematogenous to meninges; India ink (clear halo) + mucicarmine (red inner capsule); latex agglutination (capsular antigen) more sensitive and specific",
    ],
    m10: [
      "Cryptococcosis: meningitis, pneumonia, encephalitis — “soap bubble” lesions in brain, primarily immunocompromised; amphotericin B + flucytosine then fluconazole",
      "Mucor route: spores inhaled → proliferate in blood vessel walls → penetrate cribriform plate → brain; frontal lobe abscess + cavernous sinus thrombosis",
      "Mucor signs: headache, facial pain, black necrotic eschar on the face; cranial nerve involvement; treat with SURGICAL DEBRIDEMENT + amphotericin B or isavuconazole",
      "The morphology panel: germ tubes (Candida) · 45° septate (Aspergillus) · encapsulated halo (Cryptococcus) · wide-angle nonseptate (Mucor)",
      "The photo grid: 9 markers A-I; pdfimages counts 5 XObjects vs 9 displayed panels (grouping discrepancy documented)",
    ],
  },
  recall: [
    {
      q: "Give the four organisms' morphology axes.",
      a: "Candida albicans: dimorphic — pseudohyphae and budding yeasts at 20°C, germ tubes at 37°C. Aspergillus fumigatus: acute angle (45°) branching of septate hyphae. Cryptococcus neoformans: 5-10 μm with narrow budding; heavily encapsulated yeast; not dimorphic; ⊕ PAS. Mucor and Rhizopus spp: irregular, broad, nonseptate hyphae branching at wide angles.",
    },
    {
      q: "Match each organism to its host defect and its headline disease.",
      a: "CANDIDA: neutropenia (host defense relies on phagocytes) → disseminated candidiasis; also thrush in the immunocompromised (neonates, steroids, diabetes, AIDS), vulvovaginitis (diabetes, antibiotics), diaper rash, infective endocarditis (people who inject drugs), chronic mucocutaneous candidiasis. ASPERGILLUS: neutrophil dysfunction (eg, CGD — because Aspergillus is catalase ⊕) → invasive aspergillosis; aspergillomas in pre-existing cavities (after TB); ABPA in asthma and cystic fibrosis. CRYPTOCOCCUS: the broader immunocompromise → cryptococcosis (meningitis, pneumonia, encephalitis with soap-bubble lesions). MUCOR/RHIZOPUS: DKA and/or neutropenia (eg, leukemia) → mucormycosis (rhinocerebral).",
    },
    {
      q: "Walk the Cryptococcus diagnostic set and therapy.",
      a: "Found in soil, pigeon droppings; acquired through inhalation with hematogenous dissemination to the meninges. India ink shows the clear halo; mucicarmine the red inner capsule; the latex agglutination test detects the polysaccharide capsular antigen and is more sensitive and specific. Treatment for cryptococcal meningitis: amphotericin B + flucytosine followed by fluconazole.",
    },
    {
      q: "Walk the Mucor route and therapy.",
      a: "Inhalation of spores → fungi proliferate in blood vessel walls, penetrate the cribriform plate, and enter the brain. Rhinocerebral: frontal lobe abscess, cavernous sinus thrombosis; headache, facial pain, black necrotic eschar on the face; possible cranial nerve involvement. Treatment: surgical debridement + amphotericin B or isavuconazole.",
    },
    {
      q: "What are the Aspergillus extras beyond invasive disease?",
      a: "Aspergillomas in pre-existing lung cavities (especially after TB infection); ABPA — the hypersensitivity response to Aspergillus growing in lung mucus, associated with asthma and cystic fibrosis, possibly causing bronchiectasis and eosinophilia; and aflatoxins from some species — inducing TP53 mutations leading to hepatocellular carcinoma. Treatment of invasive disease: voriconazole or echinocandins (2nd-line).",
    },
  ],
  related: [
    {
      title: "Systemic Mycoses: Histoplasma, Blastomyces, Coccidioides, Paracoccidioides",
      topicId: "systemic-mycoses",
      note: "M16's dimorphic grid is the geography-and-size block; this note is its opportunistic counterpart — the host-defect block. Together they close the MYCOLOGY banner.",
    },
    {
      title: "Virulence Mechanisms & Antimicrobial Resistance Overview",
      topicId: "virulence-mechanisms",
      note: "M6's immune-evasion arsenal returns at the fungal level: the catalase ⊕ trait that lets Aspergillus survive the CGD neutrophil's oxidative burst — the same evasion axis drawn for bacteria, now naming the fungus.",
    },
    {
      title: "Immunodeficiency-Infection Patterns",
      topicId: "immunodeficiency-infection-patterns",
      note: "E38's bug-pattern matrix returns at full strength: the granulocyte column predicted Aspergillus and Mucor, the T-cell column predicted Candida and Cryptococcus — this page is the matrix's fungal payoff.",
    },
  ],
  crossLinks: [
    {
      subject: "Pharmacology (Antifungals)",
      connection: "The therapy ladders by organism and site: fluconazole/azoles/nystatin/echinocandins/amphotericin B for Candida by site; voriconazole or echinocandins for Aspergillus; amphotericin B + flucytosine then fluconazole for cryptococcal meningitis; surgical debridement with amphotericin B or isavuconazole for mucormycosis.",
    },
    {
      subject: "Endocrinology (Diabetic Ketoacidosis)",
      connection: "DKA is the door for mucormycosis — the rhinocerebral angioinvasive route (cribriform plate → frontal lobe abscess, cavernous sinus thrombosis) is the microbiology anchor for every diabetic-with-facial-pain question.",
    },
    {
      subject: "Neurology (Cavernous Sinus Syndrome)",
      connection: "Mucor's cavernous sinus thrombosis (diplopia, V1/V2 sensory loss) and Cryptococcus's meningeal syndrome (headache, lymphocytic pleocytosis with low glucose, soap-bubble lesions) are the two neurologic anchors of the block.",
    },
    {
      subject: "Oncology (Hepatocellular Carcinoma)",
      connection: "The aflatoxin line: some species of Aspergillus produce aflatoxins that induce TP53 mutations leading to hepatocellular carcinoma — the microbiology anchor for the liver-cancer chapter.",
    },
  ],
};
